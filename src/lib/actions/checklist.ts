'use server';

import { revalidatePath } from 'next/cache';
import { cache } from 'react';
import { createClient, getAuthenticatedUser } from '@/lib/supabase/server';
import {
  DailyChecklist,
  DailyItem,
  GroupedDailyItems,
  ItemType,
} from '../database.types';
import { getTodayLocalDate, getTomorrowLocalDate, DEFAULT_TIMEZONE } from '../utils/date';
import { calculateCompletionPercentage } from '../utils/progress';

export interface PlanDraftItem {
  id?: string;
  category_name: string;
  category_sort_order: number;
  title: string;
  item_type: ItemType;
  target_value: string | null;
  current_value: string | null;
  sort_order: number;
}

export const getUserTimezone = cache(async (): Promise<string> => {
  const { supabase, user } = await getAuthenticatedUser();
  if (!user) return DEFAULT_TIMEZONE;

  const { data: profile } = await supabase
    .from('profiles')
    .select('timezone')
    .eq('id', user.id)
    .single();

  return profile?.timezone || DEFAULT_TIMEZONE;
});

/**
 * Helper to create a checklist and daily items snapshot from template for a given date.
 */
export async function createChecklistFromTemplate(
  supabase: any,
  userId: string,
  dateStr: string
) {
  const [{ data: categories }, { data: templateItems }] = await Promise.all([
    supabase
      .from('template_categories')
      .select('*')
      .eq('user_id', userId)
      .order('sort_order', { ascending: true }),
    supabase
      .from('template_items')
      .select('*')
      .eq('user_id', userId)
      .eq('is_enabled', true)
      .order('sort_order', { ascending: true }),
  ]);

  if (!templateItems || templateItems.length === 0) return null;

  const { data: checklist, error: clError } = await supabase
    .from('daily_checklists')
    .upsert(
      {
        user_id: userId,
        local_date: dateStr,
        completion_percentage: 0,
        updated_at: new Date().toISOString(),
      },
      { onConflict: 'user_id, local_date' }
    )
    .select()
    .single();

  if (clError || !checklist) return null;

  // Insert snapshot items
  const itemsToInsert: Array<{
    daily_checklist_id: string;
    user_id: string;
    category_name: string;
    category_sort_order: number;
    title: string;
    item_type: ItemType;
    target_value: string | null;
    current_value: string | null;
    is_completed: boolean;
    sort_order: number;
  }> = [];

  (categories || []).forEach((cat: any) => {
    const catItems = templateItems.filter((ti: any) => ti.category_id === cat.id);
    catItems.forEach((ti: any) => {
      itemsToInsert.push({
        daily_checklist_id: checklist.id,
        user_id: userId,
        category_name: cat.name,
        category_sort_order: cat.sort_order,
        title: ti.title,
        item_type: ti.item_type as ItemType,
        target_value: ti.default_value || null,
        current_value: ti.item_type === 'text' ? ti.default_value || null : null,
        is_completed: false,
        sort_order: ti.sort_order,
      });
    });
  });

  if (itemsToInsert.length > 0) {
    await supabase.from('daily_items').delete().eq('daily_checklist_id', checklist.id);
    await supabase.from('daily_items').insert(itemsToInsert);
  }

  return checklist;
}

/**
 * Gets Today's daily checklist & items for the authenticated user.
 * Auto-creates from template if missing so user always sees checkboxes!
 */
export async function getTodayChecklistAction(): Promise<{
  local_date: string;
  checklist: DailyChecklist | null;
  groupedItems: GroupedDailyItems[];
  error?: string;
}> {
  const { supabase, user } = await getAuthenticatedUser();

  if (!user) return { local_date: '', checklist: null, groupedItems: [], error: 'Chưa đăng nhập.' };

  const timezone = await getUserTimezone();
  const todayStr = getTodayLocalDate(timezone);

  let { data: checklist, error: clError } = await supabase
    .from('daily_checklists')
    .select('*')
    .eq('user_id', user.id)
    .eq('local_date', todayStr)
    .maybeSingle();

  if (clError) return { local_date: todayStr, checklist: null, groupedItems: [], error: clError.message };

  // Auto-generate today's checklist from template if it doesn't exist yet!
  if (!checklist) {
    checklist = await createChecklistFromTemplate(supabase, user.id, todayStr);
  }

  if (!checklist) return { local_date: todayStr, checklist: null, groupedItems: [] };

  const { data: items, error: itemError } = await supabase
    .from('daily_items')
    .select('*')
    .eq('daily_checklist_id', checklist.id)
    .order('category_sort_order', { ascending: true })
    .order('sort_order', { ascending: true });

  if (itemError) return { local_date: todayStr, checklist, groupedItems: [], error: itemError.message };

  const grouped = groupDailyItems(items || []);
  return { local_date: todayStr, checklist, groupedItems: grouped };
}

/**
 * Gets draft or existing plan items for tomorrow (or a specified target date).
 * Optimized with parallel database queries for max performance.
 */
export async function getPlanTomorrowDraftAction(targetDateStr?: string): Promise<{
  local_date: string;
  isExisting: boolean;
  draftItems: PlanDraftItem[];
  error?: string;
}> {
  const { supabase, user } = await getAuthenticatedUser();

  if (!user) return { local_date: '', isExisting: false, draftItems: [], error: 'Chưa đăng nhập.' };

  const timezone = await getUserTimezone();
  const dateStr = targetDateStr || getTomorrowLocalDate(timezone);

  // Check if checklist already exists for target date
  const { data: existingChecklist } = await supabase
    .from('daily_checklists')
    .select('id')
    .eq('user_id', user.id)
    .eq('local_date', dateStr)
    .maybeSingle();

  if (existingChecklist) {
    const { data: existingItems } = await supabase
      .from('daily_items')
      .select('*')
      .eq('daily_checklist_id', existingChecklist.id)
      .order('category_sort_order', { ascending: true })
      .order('sort_order', { ascending: true });

    return {
      local_date: dateStr,
      isExisting: true,
      draftItems: (existingItems || []).map((item) => ({
        id: item.id,
        category_name: item.category_name,
        category_sort_order: item.category_sort_order,
        title: item.title,
        item_type: item.item_type as ItemType,
        target_value: item.target_value,
        current_value: item.current_value,
        sort_order: item.sort_order,
      })),
    };
  }

  // Not existing yet -> Parallel query categories and template items
  const [{ data: categories }, { data: templateItems }] = await Promise.all([
    supabase
      .from('template_categories')
      .select('*')
      .eq('user_id', user.id)
      .order('sort_order', { ascending: true }),
    supabase
      .from('template_items')
      .select('*')
      .eq('user_id', user.id)
      .eq('is_enabled', true)
      .order('sort_order', { ascending: true }),
  ]);

  const draft: PlanDraftItem[] = [];

  (categories || []).forEach((cat) => {
    const catItems = (templateItems || []).filter((ti) => ti.category_id === cat.id);
    catItems.forEach((ti) => {
      draft.push({
        category_name: cat.name,
        category_sort_order: cat.sort_order,
        title: ti.title,
        item_type: ti.item_type as ItemType,
        target_value: ti.default_value || null,
        current_value: null,
        sort_order: ti.sort_order,
      });
    });
  });

  return { local_date: dateStr, isExisting: false, draftItems: draft };
}

/**
 * Saves a daily checklist & snapshot items for a given date.
 */
export async function saveDailyPlanAction(payload: {
  local_date: string;
  items: PlanDraftItem[];
}) {
  const { supabase, user } = await getAuthenticatedUser();

  if (!user) return { error: 'Chưa đăng nhập.' };
  if (!payload.local_date) return { error: 'Ngày không hợp lệ.' };

  // Calculate percentage
  const tempDailyItems: DailyItem[] = payload.items.map((item, idx) => ({
    id: item.id || `temp-${idx}`,
    daily_checklist_id: '',
    user_id: user.id,
    category_name: item.category_name,
    category_sort_order: item.category_sort_order,
    title: item.title,
    item_type: item.item_type,
    target_value: item.target_value,
    current_value: item.current_value,
    is_completed: false,
    sort_order: item.sort_order,
    created_at: '',
    updated_at: '',
  }));

  const percentage = calculateCompletionPercentage(tempDailyItems);

  // Insert or Update daily_checklists
  const { data: checklist, error: clError } = await supabase
    .from('daily_checklists')
    .upsert(
      {
        user_id: user.id,
        local_date: payload.local_date,
        completion_percentage: percentage,
        updated_at: new Date().toISOString(),
      },
      { onConflict: 'user_id, local_date' }
    )
    .select()
    .single();

  if (clError || !checklist) return { error: clError?.message || 'Lưu kế hoạch thất bại.' };

  // Clear previous daily_items for this checklist (if re-saving)
  await supabase.from('daily_items').delete().eq('daily_checklist_id', checklist.id);

  // Insert new snapshot items
  const itemsToInsert = payload.items.map((item) => ({
    daily_checklist_id: checklist.id,
    user_id: user.id,
    category_name: item.category_name,
    category_sort_order: item.category_sort_order,
    title: item.title,
    item_type: item.item_type,
    target_value: item.target_value || null,
    current_value: item.current_value || null,
    is_completed: false,
    sort_order: item.sort_order,
  }));

  const { error: insertError } = await supabase.from('daily_items').insert(itemsToInsert);

  if (insertError) return { error: insertError.message };

  revalidatePath('/today');
  revalidatePath('/plan-tomorrow');
  revalidatePath('/history');

  return { success: true, local_date: payload.local_date };
}

/**
 * Deletes a daily checklist & all its items for a specified date.
 */
export async function deleteDailyPlanAction(local_date: string) {
  const { supabase, user } = await getAuthenticatedUser();

  if (!user) return { error: 'Chưa đăng nhập.' };
  if (!local_date) return { error: 'Ngày không hợp lệ.' };

  const { error } = await supabase
    .from('daily_checklists')
    .delete()
    .eq('user_id', user.id)
    .eq('local_date', local_date);

  if (error) return { error: error.message };

  revalidatePath('/today');
  revalidatePath('/plan-tomorrow');
  revalidatePath('/history');

  return { success: true };
}

/**
 * Updates a single daily item state (toggle checkbox, change duration/text value).
 */
export async function updateDailyItemAction(
  itemId: string,
  changes: { title?: string; is_completed?: boolean; current_value?: string | null; target_value?: string | null }
) {
  const { supabase, user } = await getAuthenticatedUser();

  if (!user) return { error: 'Chưa đăng nhập.' };

  // Fetch current item to get checklist ID
  const { data: currentItem, error: fetchErr } = await supabase
    .from('daily_items')
    .select('daily_checklist_id')
    .eq('id', itemId)
    .eq('user_id', user.id)
    .single();

  if (fetchErr || !currentItem) return { error: 'Không tìm thấy công việc.' };

  // Update daily item
  const { error: updateErr } = await supabase
    .from('daily_items')
    .update({ ...changes, updated_at: new Date().toISOString() })
    .eq('id', itemId)
    .eq('user_id', user.id);

  if (updateErr) return { error: updateErr.message };

  // Recalculate completion percentage for the parent daily_checklist
  const { data: allItems } = await supabase
    .from('daily_items')
    .select('*')
    .eq('daily_checklist_id', currentItem.daily_checklist_id);

  const percentage = calculateCompletionPercentage(allItems || []);

  await supabase
    .from('daily_checklists')
    .update({ completion_percentage: percentage, updated_at: new Date().toISOString() })
    .eq('id', currentItem.daily_checklist_id);

  revalidatePath('/today');
  revalidatePath('/history');

  return { success: true, percentage };
}

/**
 * Deletes a single daily item and updates completion percentage.
 */
export async function deleteDailyItemAction(itemId: string) {
  const { supabase, user } = await getAuthenticatedUser();

  if (!user) return { error: 'Chưa đăng nhập.' };

  // Fetch current item to get checklist ID
  const { data: currentItem, error: fetchErr } = await supabase
    .from('daily_items')
    .select('daily_checklist_id')
    .eq('id', itemId)
    .eq('user_id', user.id)
    .single();

  if (fetchErr || !currentItem) return { error: 'Không tìm thấy công việc.' };

  // Delete item
  const { error: deleteErr } = await supabase
    .from('daily_items')
    .delete()
    .eq('id', itemId)
    .eq('user_id', user.id);

  if (deleteErr) return { error: deleteErr.message };

  // Recalculate completion percentage for parent daily_checklist
  const { data: remainingItems } = await supabase
    .from('daily_items')
    .select('*')
    .eq('daily_checklist_id', currentItem.daily_checklist_id);

  const percentage = calculateCompletionPercentage(remainingItems || []);

  await supabase
    .from('daily_checklists')
    .update({ completion_percentage: percentage, updated_at: new Date().toISOString() })
    .eq('id', currentItem.daily_checklist_id);

  revalidatePath('/today');
  revalidatePath('/plan-tomorrow');
  revalidatePath('/history');
  revalidatePath('/stats');

  return { success: true, percentage };
}

/**
 * Gets history of daily checklists for the authenticated user.
 * High-performance 2-query batching to eliminate N+1 latency.
 */
export async function getHistoryChecklistsAction(): Promise<{
  data: Array<DailyChecklist & { total_items: number; completed_items: number }> | null;
  error?: string;
}> {
  const { supabase, user } = await getAuthenticatedUser();

  if (!user) return { data: null, error: 'Chưa đăng nhập.' };

  const [checklistsRes, allItemsRes] = await Promise.all([
    supabase
      .from('daily_checklists')
      .select('*')
      .eq('user_id', user.id)
      .order('local_date', { ascending: false }),
    supabase
      .from('daily_items')
      .select('daily_checklist_id, is_completed, item_type, current_value')
      .eq('user_id', user.id),
  ]);

  if (checklistsRes.error) return { data: null, error: checklistsRes.error.message };

  const itemsMap = new Map<string, Array<{ is_completed: boolean; item_type: string; current_value: string | null }>>();
  (allItemsRes.data || []).forEach((item) => {
    if (!itemsMap.has(item.daily_checklist_id)) {
      itemsMap.set(item.daily_checklist_id, []);
    }
    itemsMap.get(item.daily_checklist_id)!.push(item);
  });

  const result = (checklistsRes.data || []).map((cl) => {
    const items = itemsMap.get(cl.id) || [];
    const total_items = items.length;
    const completed_items = items.filter((item) => {
      if (item.is_completed) return true;
      if (item.item_type === 'duration') {
        const val = parseInt(item.current_value || '0', 10);
        return !isNaN(val) && val > 0;
      }
      if (item.item_type === 'text') {
        return !!item.current_value && item.current_value.trim().length > 0;
      }
      return false;
    }).length;

    return {
      ...cl,
      total_items,
      completed_items,
    };
  });

  return { data: result };
}

/**
 * Gets a specific date's checklist & items.
 */
export async function getChecklistByDateAction(local_date: string): Promise<{
  checklist: DailyChecklist | null;
  groupedItems: GroupedDailyItems[];
  error?: string;
}> {
  const { supabase, user } = await getAuthenticatedUser();

  if (!user) return { checklist: null, groupedItems: [], error: 'Chưa đăng nhập.' };

  const { data: checklist, error: clError } = await supabase
    .from('daily_checklists')
    .select('*')
    .eq('user_id', user.id)
    .eq('local_date', local_date)
    .maybeSingle();

  if (clError || !checklist) return { checklist: null, groupedItems: [], error: clError?.message };

  const { data: items, error: itemError } = await supabase
    .from('daily_items')
    .select('*')
    .eq('daily_checklist_id', checklist.id)
    .order('category_sort_order', { ascending: true })
    .order('sort_order', { ascending: true });

  if (itemError) return { checklist, groupedItems: [], error: itemError.message };

  return { checklist, groupedItems: groupDailyItems(items || []) };
}

function groupDailyItems(items: DailyItem[]): GroupedDailyItems[] {
  const map = new Map<string, { category_sort_order: number; items: DailyItem[] }>();

  items.forEach((item) => {
    const existing = map.get(item.category_name);
    if (existing) {
      existing.items.push(item);
    } else {
      map.set(item.category_name, {
        category_sort_order: item.category_sort_order,
        items: [item],
      });
    }
  });

  const result: GroupedDailyItems[] = [];
  map.forEach((val, key) => {
    result.push({
      category_name: key,
      category_sort_order: val.category_sort_order,
      items: val.items,
    });
  });

  return result.sort((a, b) => a.category_sort_order - b.category_sort_order);
}

/**
 * Applies active template to the next N days (default 7 days / whole week) in one click!
 */
export async function applyTemplateToNextNDaysAction(daysCount: number = 7, overwrite: boolean = false) {
  const { supabase, user } = await getAuthenticatedUser();

  if (!user) return { error: 'Chưa đăng nhập.' };

  const timezone = await getUserTimezone();
  const todayStr = getTodayLocalDate(timezone);
  const baseDate = new Date(todayStr);

  let createdCount = 0;

  for (let i = 0; i < daysCount; i++) {
    const d = new Date(baseDate);
    d.setDate(baseDate.getDate() + i);
    const dateStr = d.toISOString().split('T')[0];

    if (!overwrite) {
      const { data: existing } = await supabase
        .from('daily_checklists')
        .select('id')
        .eq('user_id', user.id)
        .eq('local_date', dateStr)
        .maybeSingle();

      if (existing) continue; // Skip existing if overwrite is false
    }

    const created = await createChecklistFromTemplate(supabase, user.id, dateStr);
    if (created) createdCount++;
  }

  revalidatePath('/today');
  revalidatePath('/plan-tomorrow');
  revalidatePath('/stats');

  return { success: true, count: createdCount };
}

