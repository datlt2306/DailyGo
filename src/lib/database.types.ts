export type ItemType = 'checkbox' | 'duration' | 'text';

export interface Profile {
  id: string;
  display_name: string;
  email: string;
  timezone: string;
  created_at: string;
  updated_at: string;
}

export interface TemplateCategory {
  id: string;
  user_id: string;
  name: string;
  icon: string | null;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export interface TemplateItem {
  id: string;
  user_id: string;
  category_id: string;
  title: string;
  item_type: ItemType;
  default_value: string | null;
  is_enabled: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export interface DailyChecklist {
  id: string;
  user_id: string;
  local_date: string; // YYYY-MM-DD
  completion_percentage: number;
  created_at: string;
  updated_at: string;
}

export interface DailyItem {
  id: string;
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
  created_at: string;
  updated_at: string;
}

export interface DailyChecklistWithItems extends DailyChecklist {
  items: DailyItem[];
}

export interface GroupedDailyItems {
  category_name: string;
  category_sort_order: number;
  items: DailyItem[];
}
