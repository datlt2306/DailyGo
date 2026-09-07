'use server';

import { revalidatePath } from 'next/cache';
import { createClient } from '@/lib/supabase/server';
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

export async function getUserTimezone(): Promise<string> {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return DEFAULT_TIMEZONE;

  const { data: profile } = await supabase
    .from('profiles')
    .select('timezone')
    .eq('id', user.id)
    .single();

  return profile?.timezone || DEFAULT_TIMEZONE;
}

/**
 * Gets Today's daily checklist & items for the authenticated user.
 */
export async function getTodayChecklistAction(): Promise<{
  local_date: string;
  checklist: DailyChecklist | null;
  groupedItems: GroupedDailyItems[];
  error?: string;
}> {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) return { local_date: '', checklist: null, groupedItems: [], error: 'Chưa đăng nhập.' };

  const timezone = await getUserTimezone();
  const todayStr = getTodayLocalDate(timezone);

  const { data: checklist, error: clError } = await supabase
    .from('daily_checklists')
    .select('*')
    .eq('user_id', user.id)
    .eq('local_date', todayStr)
    .maybeSingle();

  if (clError) return { local_date: todayStr, checklist: null, groupedItems: [], error: clError.message };
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
 */
export async function getPlanTomorrowDraftAction(targetDateStr?: string): Promise<{
  local_date: string;
  isExisting: boolean;
  draftItems: PlanDraftItem[];
  error?: string;
}> {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

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

  // Not existing yet -> Generate draft from active template items
  const { data: categories } = await supabase
    .from('template_categories')
    .select('*')
    .eq('user_id', user.id)
    .order('sort_order', { ascending: true });

  const { data: templateItems } = await supabase
    .from('template_items')
    .select('*')
    .eq('user_id', user.id)
    .eq('is_enabled', true)
    .order('sort_order', { ascending: true });

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
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

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
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

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
  changes: { is_completed?: boolean; current_value?: string | null; target_value?: string | null }
) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

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
 * Gets history of daily checklists for the authenticated user.
 */
export async function getHistoryChecklistsAction(): Promise<{
  data: Array<DailyChecklist & { total_items: number; completed_items: number }> | null;
  error?: string;
}> {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) return { data: null, error: 'Chưa đăng nhập.' };

  const { data: checklists, error } = await supabase
    .from('daily_checklists')
    .select('*')
    .eq('user_id', user.id)
    .order('local_date', { ascending: false });

  if (error) return { data: null, error: error.message };

  // Fetch items for each checklist to calculate completed counts
  const result = await Promise.all(
    (checklists || []).map(async (cl) => {
      const { data: items } = await supabase
        .from('daily_items')
        .select('id, is_completed, item_type, current_value')
        .eq('daily_checklist_id', cl.id);

      const total_items = items?.length || 0;
      const completed_items = (items || []).filter((item) => {
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
    })
  );

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
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

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
