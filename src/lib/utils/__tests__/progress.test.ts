import { describe, it, expect } from 'vitest';
import { calculateCompletionPercentage, isItemCompleted } from '../progress';
import { DailyItem } from '../../database.types';

describe('Progress Utility Functions', () => {
  const sampleItems: DailyItem[] = [
    {
      id: '1',
      daily_checklist_id: 'd1',
      user_id: 'u1',
      category_name: 'Work',
      category_sort_order: 0,
      title: 'Work Task 1',
      item_type: 'checkbox',
      target_value: null,
      current_value: null,
      is_completed: true,
      sort_order: 0,
      created_at: '',
      updated_at: '',
    },
    {
      id: '2',
      daily_checklist_id: 'd1',
      user_id: 'u1',
      category_name: 'Work',
      category_sort_order: 0,
      title: 'Work Task 2',
      item_type: 'checkbox',
      target_value: null,
      current_value: null,
      is_completed: false,
      sort_order: 1,
      created_at: '',
      updated_at: '',
    },
    {
      id: '3',
      daily_checklist_id: 'd1',
      user_id: 'u1',
      category_name: 'Personal',
      category_sort_order: 1,
      title: 'Read Book',
      item_type: 'duration',
      target_value: '30',
      current_value: '30',
      is_completed: false,
      sort_order: 0,
      created_at: '',
      updated_at: '',
    },
    {
      id: '4',
      daily_checklist_id: 'd1',
      user_id: 'u1',
      category_name: 'Personal',
      category_sort_order: 1,
      title: 'Chore',
      item_type: 'text',
      target_value: null,
      current_value: 'Trash done',
      is_completed: false,
      sort_order: 1,
      created_at: '',
      updated_at: '',
    },
  ];

  it('correctly evaluates individual item completion', () => {
    expect(isItemCompleted(sampleItems[0])).toBe(true);
    expect(isItemCompleted(sampleItems[1])).toBe(false);
    expect(isItemCompleted(sampleItems[2])).toBe(true);
    expect(isItemCompleted(sampleItems[3])).toBe(true);
  });

  it('calculates completion percentage correctly', () => {
    // 3 completed out of 4 total = 75%
    expect(calculateCompletionPercentage(sampleItems)).toBe(75);
  });

  it('handles empty items array', () => {
    expect(calculateCompletionPercentage([])).toBe(0);
  });
});
