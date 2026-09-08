'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { DailyItem } from '@/lib/database.types';
import { updateDailyItemAction, deleteDailyItemAction } from '@/lib/actions/checklist';
import { cn } from '@/lib/utils/cn';
import { Check, Clock, Edit2, Loader2, Save, Trash2, X } from 'lucide-react';

export function TaskItemCard({ item }: { item: DailyItem }) {
  const router = useRouter();
  const [completed, setCompleted] = useState(item.is_completed);
  const [title, setTitle] = useState(item.title);
  const [currentValue, setCurrentValue] = useState(item.current_value || '');
  const [targetValue, setTargetValue] = useState(item.target_value || '');
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isSavingCheck, setIsSavingCheck] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  // Sync state when props change from server refresh
  useEffect(() => {
    setCompleted(item.is_completed);
    setTitle(item.title);
    setCurrentValue(item.current_value || '');
    setTargetValue(item.target_value || '');
  }, [item.is_completed, item.title, item.current_value, item.target_value]);

  if (isDeleted) return null;

  async function handleToggleCheck() {
    if (isSavingCheck || loading) return;

    const previousCompleted = completed;
    const nextCompleted = !completed;
    setCompleted(nextCompleted);
    setIsSavingCheck(true);

    try {
      const res = await updateDailyItemAction(item.id, { is_completed: nextCompleted });
      if (res?.error) {
        setCompleted(previousCompleted);
        alert(`Không thể lưu trạng thái: ${res.error}`);
      } else {
        router.refresh();
      }
    } catch {
      setCompleted(previousCompleted);
    } finally {
      setIsSavingCheck(false);
    }
  }

  async function handleSaveEdit() {
    if (!title.trim()) return;
    setLoading(true);
    let nextCompleted = completed;

    if (item.item_type === 'duration') {
      const val = parseInt(currentValue || '0', 10);
      if (!isNaN(val) && val > 0) nextCompleted = true;
    }

    setCompleted(nextCompleted);
    const res = await updateDailyItemAction(item.id, {
      title: title.trim(),
      current_value: currentValue || null,
      target_value: targetValue || null,
      is_completed: nextCompleted,
    });

    if (res?.error) {
      alert(`Lỗi khi lưu: ${res.error}`);
    } else {
      setIsEditing(false);
      router.refresh();
    }
    setLoading(false);
  }

  async function handleDeleteItem() {
    if (!confirm(`Bạn có chắc chắn muốn xóa "${title}"?`)) return;
    setLoading(true);
    const res = await deleteDailyItemAction(item.id);
    if (res?.success) {
      setIsDeleted(true);
      router.refresh();
    } else if (res?.error) {
      alert(`Lỗi khi xóa: ${res.error}`);
    }
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
      {isEditing ? (
        /* Full inline editor for ANY task after saving */
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Tên công việc"
            className="flex-1 px-2.5 py-1 text-xs sm:text-sm rounded-lg border border-indigo-400 bg-white font-medium text-slate-900 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />

          {item.item_type === 'duration' && (
            <div className="flex items-center space-x-1 shrink-0">
              <span className="text-xs text-slate-500">Mục tiêu:</span>
              <input
                type="number"
                value={targetValue}
                onChange={(e) => setTargetValue(e.target.value)}
                placeholder="Số phút"
                className="w-16 px-1.5 py-1 text-xs text-center rounded-lg border border-slate-300 bg-white font-semibold text-slate-900 focus:outline-none"
              />
              <span className="text-xs text-slate-500">p</span>
            </div>
          )}

          <div className="flex items-center space-x-1 shrink-0 justify-end">
            <button
              type="button"
              onClick={handleSaveEdit}
              disabled={loading}
              className="px-2.5 py-1 text-xs bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 flex items-center space-x-1"
            >
              {loading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Save className="w-3.5 h-3.5" />}
              <span>{loading ? '...' : 'Lưu'}</span>
            </button>

            <button
              type="button"
              onClick={handleDeleteItem}
              disabled={loading}
              className="p-1.5 text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded-lg transition-colors"
              title="Xóa công việc"
            >
              <Trash2 className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => setIsEditing(false)}
              disabled={loading}
              className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        /* Normal View: Checkbox + Title + Action Buttons (Edit + Delete) */
        <>
          <div className="flex items-center space-x-3 flex-1 min-w-0 mr-2">
            <button
              type="button"
              onClick={handleToggleCheck}
              disabled={isSavingCheck}
              className={cn(
                'w-6 h-6 rounded-lg flex items-center justify-center border transition-all shrink-0 touch-manipulation',
                completed
                  ? 'bg-emerald-600 border-emerald-600 text-white shadow-sm'
                  : 'border-slate-300 bg-white hover:border-indigo-500',
                isSavingCheck && 'opacity-70 cursor-wait'
              )}
            >
              {isSavingCheck ? (
                <Loader2 className="w-3.5 h-3.5 animate-spin text-current" />
              ) : completed ? (
                <Check className="w-4 h-4 stroke-[3]" />
              ) : null}
            </button>

            <div className="flex-1 min-w-0">
              <p
                className={cn(
                  'text-sm font-medium leading-tight truncate',
                  completed && 'line-through text-slate-400'
                )}
              >
                {title}
              </p>

              {item.item_type === 'duration' && (
                <div className="flex items-center space-x-1 text-xs text-indigo-600 font-medium mt-0.5">
                  <Clock className="w-3 h-3" />
                  <span>
                    {currentValue
                      ? `${currentValue} phút`
                      : targetValue
                      ? `Mục tiêu: ${targetValue} phút`
                      : 'Chưa đặt thời lượng'}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Action buttons (Edit & Delete) for ALL items */}
          <div className="flex items-center space-x-1 shrink-0">
            <button
              type="button"
              onClick={() => setIsEditing(true)}
              disabled={loading || isSavingCheck}
              className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-slate-100 rounded-lg transition-colors touch-manipulation"
              title="Chỉnh sửa công việc"
            >
              <Edit2 className="w-3.5 h-3.5" />
            </button>

            <button
              type="button"
              onClick={handleDeleteItem}
              disabled={loading || isSavingCheck}
              className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors touch-manipulation"
              title="Xóa công việc"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </>
      )}
    </div>
  );
}


