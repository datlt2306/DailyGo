'use server';

import { revalidatePath } from 'next/cache';
import { createClient, getAuthenticatedUser } from '@/lib/supabase/server';
import { ItemType, TemplateCategory, TemplateItem } from '../database.types';

export interface TemplateCategoryWithItems extends TemplateCategory {
  items: TemplateItem[];
}

export async function getTemplateAction(): Promise<{
  data: TemplateCategoryWithItems[] | null;
  error?: string;
}> {
  const { supabase, user } = await getAuthenticatedUser();

  if (!user) {
    return { data: null, error: 'Chưa đăng nhập.' };
  }

  // Parallel fetch categories and items for maximum performance
  const [{ data: categories, error: catError }, { data: items, error: itemError }] = await Promise.all([
    supabase
      .from('template_categories')
      .select('*')
      .eq('user_id', user.id)
      .order('sort_order', { ascending: true }),
    supabase
      .from('template_items')
      .select('*')
      .eq('user_id', user.id)
      .order('sort_order', { ascending: true }),
  ]);

  if (catError) return { data: null, error: catError.message };
  if (itemError) return { data: null, error: itemError.message };

  const result: TemplateCategoryWithItems[] = (categories || []).map((cat) => ({
    ...cat,
    items: (items || []).filter((item) => item.category_id === cat.id),
  }));

  return { data: result };
}

export async function createCategoryAction(name: string, icon?: string) {
  const { supabase, user } = await getAuthenticatedUser();

  if (!user) return { error: 'Chưa đăng nhập.' };
  if (!name.trim()) return { error: 'Tên danh mục không được để trống.' };

  // Get current max sort_order
  const { data: existing } = await supabase
    .from('template_categories')
    .select('sort_order')
    .eq('user_id', user.id)
    .order('sort_order', { ascending: false })
    .limit(1);

  const nextSortOrder = (existing?.[0]?.sort_order ?? -1) + 1;

  const { error } = await supabase.from('template_categories').insert({
    user_id: user.id,
    name: name.trim(),
    icon: icon || '⭐',
    sort_order: nextSortOrder,
  });

  if (error) return { error: error.message };

  revalidatePath('/settings/template');
  return { success: true };
}

export async function updateCategoryAction(id: string, name: string, icon?: string) {
  const { supabase, user } = await getAuthenticatedUser();

  if (!user) return { error: 'Chưa đăng nhập.' };
  if (!name.trim()) return { error: 'Tên danh mục không được để trống.' };

  const { error } = await supabase
    .from('template_categories')
    .update({ name: name.trim(), icon: icon || '⭐', updated_at: new Date().toISOString() })
    .eq('id', id)
    .eq('user_id', user.id);

  if (error) return { error: error.message };

  revalidatePath('/settings/template');
  return { success: true };
}

export async function deleteCategoryAction(id: string) {
  const { supabase, user } = await getAuthenticatedUser();

  if (!user) return { error: 'Chưa đăng nhập.' };

  const { error } = await supabase
    .from('template_categories')
    .delete()
    .eq('id', id)
    .eq('user_id', user.id);

  if (error) return { error: error.message };

  revalidatePath('/settings/template');
  return { success: true };
}

export async function createTemplateItemAction(payload: {
  category_id: string;
  title: string;
  item_type: ItemType;
  default_value?: string;
}) {
  const { supabase, user } = await getAuthenticatedUser();

  if (!user) return { error: 'Chưa đăng nhập.' };
  if (!payload.title.trim()) return { error: 'Tiêu đề công việc không được để trống.' };

  // Get current max sort_order in category
  const { data: existing } = await supabase
    .from('template_items')
    .select('sort_order')
    .eq('user_id', user.id)
    .eq('category_id', payload.category_id)
    .order('sort_order', { ascending: false })
    .limit(1);

  const nextSortOrder = (existing?.[0]?.sort_order ?? -1) + 1;

  const { error } = await supabase.from('template_items').insert({
    user_id: user.id,
    category_id: payload.category_id,
    title: payload.title.trim(),
    item_type: payload.item_type,
    default_value: payload.default_value?.trim() || null,
    is_enabled: true,
    sort_order: nextSortOrder,
  });

  if (error) return { error: error.message };

  revalidatePath('/settings/template');
  return { success: true };
}

export async function updateTemplateItemAction(
  id: string,
  payload: {
    title?: string;
    item_type?: ItemType;
    default_value?: string | null;
    is_enabled?: boolean;
    category_id?: string;
  }
) {
  const { supabase, user } = await getAuthenticatedUser();

  if (!user) return { error: 'Chưa đăng nhập.' };

  const { error } = await supabase
    .from('template_items')
    .update({ ...payload, updated_at: new Date().toISOString() })
    .eq('id', id)
    .eq('user_id', user.id);

  if (error) return { error: error.message };

  revalidatePath('/settings/template');
  return { success: true };
}

export async function deleteTemplateItemAction(id: string) {
  const { supabase, user } = await getAuthenticatedUser();

  if (!user) return { error: 'Chưa đăng nhập.' };

  const { error } = await supabase
    .from('template_items')
    .delete()
    .eq('id', id)
    .eq('user_id', user.id);

  if (error) return { error: error.message };

  revalidatePath('/settings/template');
  return { success: true };
}

export async function moveCategoryOrderAction(id: string, direction: 'up' | 'down') {
  const { supabase, user } = await getAuthenticatedUser();

  if (!user) return { error: 'Chưa đăng nhập.' };

  const { data: categories } = await supabase
    .from('template_categories')
    .select('id, sort_order')
    .eq('user_id', user.id)
    .order('sort_order', { ascending: true });

  if (!categories || categories.length <= 1) return { success: true };

  const index = categories.findIndex((c) => c.id === id);
  if (index === -1) return { error: 'Không tìm thấy danh mục.' };

  const targetIndex = direction === 'up' ? index - 1 : index + 1;
  if (targetIndex < 0 || targetIndex >= categories.length) return { success: true };

  const currentCat = categories[index];
  const targetCat = categories[targetIndex];

  await supabase
    .from('template_categories')
    .update({ sort_order: targetCat.sort_order })
    .eq('id', currentCat.id);

  await supabase
    .from('template_categories')
    .update({ sort_order: currentCat.sort_order })
    .eq('id', targetCat.id);

  revalidatePath('/settings/template');
  return { success: true };
}
