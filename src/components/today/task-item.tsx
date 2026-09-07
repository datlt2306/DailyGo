'use client';

import { useState } from 'react';
import { DailyItem } from '@/lib/database.types';
import { updateDailyItemAction } from '@/lib/actions/checklist';
import { cn } from '@/lib/utils/cn';
import { Check, Clock, Edit2 } from 'lucide-react';

export function TaskItemCard({ item }: { item: DailyItem }) {
  const [completed, setCompleted] = useState(item.is_completed);
  const [currentValue, setCurrentValue] = useState(item.current_value || '');
  const [targetValue, setTargetValue] = useState(item.target_value || '');
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleToggleCheck() {
    const nextCompleted = !completed;
    setCompleted(nextCompleted);
    await updateDailyItemAction(item.id, { is_completed: nextCompleted });
  }

  async function handleSaveValue() {
    setLoading(true);
    let nextCompleted = completed;

    if (item.item_type === 'duration') {
      const val = parseInt(currentValue || '0', 10);
      if (!isNaN(val) && val > 0) nextCompleted = true;
    } else if (item.item_type === 'text') {
      if (currentValue.trim().length > 0) nextCompleted = true;
    }

    setCompleted(nextCompleted);
    await updateDailyItemAction(item.id, {
      current_value: currentValue,
      target_value: targetValue,
      is_completed: nextCompleted,
    });
    setIsEditing(false);
    setLoading(false);
  }

  return (
    <div
      className={cn(
        'flex items-center justify-between p-3.5 rounded-xl border transition-all duration-200 min-h-[52px]',
        completed
          ? 'bg-emerald-50/60 border-emerald-200 text-slate-500'
          : 'bg-white border-slate-200 hover:border-slate-300 text-slate-900 shadow-sm'
      )}
    >
      <div className="flex items-center space-x-3 flex-1 min-w-0 mr-2">
        {/* Touch-friendly Checkbox Button */}
        <button
          type="button"
          onClick={handleToggleCheck}
          className={cn(
            'w-6 h-6 rounded-lg flex items-center justify-center border transition-all shrink-0 touch-manipulation',
            completed
              ? 'bg-emerald-600 border-emerald-600 text-white shadow-sm'
              : 'border-slate-300 bg-white hover:border-indigo-500'
          )}
        >
          {completed && <Check className="w-4 h-4 stroke-[3]" />}
        </button>

        {/* Task Title & Details */}
        <div className="flex-1 min-w-0">
          <p
            className={cn(
              'text-sm font-medium leading-tight truncate',
              completed && 'line-through text-slate-400'
            )}
          >
            {item.title}
          </p>

          {/* Sub-label for duration or text type */}
          {item.item_type === 'duration' && (
            <div className="flex items-center space-x-1 text-xs text-indigo-600 font-medium mt-0.5">
              <Clock className="w-3 h-3" />
              <span>
                {currentValue ? `${currentValue} phút` : targetValue ? `Mục tiêu: ${targetValue} phút` : 'Chưa đặt thời lượng'}
              </span>
            </div>
          )}

          {item.item_type === 'text' && currentValue && (
            <p className="text-xs text-slate-600 font-medium mt-0.5 truncate">
              {currentValue}
            </p>
          )}
        </div>
      </div>

      {/* Quick Edit for duration/text items */}
      {(item.item_type === 'duration' || item.item_type === 'text') && (
        <div className="flex items-center space-x-1">
          {isEditing ? (
            <div className="flex items-center space-x-1">
              <input
                type={item.item_type === 'duration' ? 'number' : 'text'}
                value={currentValue}
                onChange={(e) => setCurrentValue(e.target.value)}
                placeholder={item.item_type === 'duration' ? 'Số phút' : 'Chi tiết công việc'}
                className="w-24 px-2 py-1 text-xs rounded-lg border border-indigo-400 bg-white text-slate-900 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
              <button
                type="button"
                onClick={handleSaveValue}
                disabled={loading}
                className="px-2 py-1 text-xs bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700"
              >
                Lưu
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setIsEditing(true)}
              className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-slate-100 rounded-lg transition-colors"
              title="Chỉnh sửa"
            >
              <Edit2 className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      )}
    </div>
  );
}
