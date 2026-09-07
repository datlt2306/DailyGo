import { DailyItem } from '../database.types';

/**
 * Checks if a daily item is completed based on its item_type and state.
 */
export function isItemCompleted(item: DailyItem): boolean {
  if (item.is_completed) return true;

  if (item.item_type === 'duration') {
    const val = parseInt(item.current_value || '0', 10);
    return !isNaN(val) && val > 0;
  }

  if (item.item_type === 'text') {
    return !!item.current_value && item.current_value.trim().length > 0;
  }

  return false;
}

/**
 * Calculates completion percentage (0 - 100) for a list of daily items.
 */
export function calculateCompletionPercentage(items: DailyItem[]): number {
  if (!items || items.length === 0) return 0;

  const total = items.length;
  const completedCount = items.filter(isItemCompleted).length;

  return Math.round((completedCount / total) * 100);
}
