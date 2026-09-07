'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PlanDraftItem, saveDailyPlanAction, deleteDailyPlanAction } from '@/lib/actions/checklist';
import { formatVietnameseDate } from '@/lib/utils/date';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { CalendarPlus, Plus, Trash2, Save, GripVertical, X, AlertTriangle } from 'lucide-react';
import { ItemType } from '@/lib/database.types';

export function PlanTomorrowEditor({
  targetDate,
  isExisting,
  initialItems,
}: {
  targetDate: string;
  isExisting: boolean;
  initialItems: PlanDraftItem[];
}) {
  const router = useRouter();
  const [items, setItems] = useState<PlanDraftItem[]>(initialItems);
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState('⭐ Việc thêm');
  const [newType, setNewType] = useState<ItemType>('checkbox');
  const [newVal, setNewVal] = useState('');
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Drag and Drop state
  const [draggedIdx, setDraggedIdx] = useState<number | null>(null);

  const formattedDate = formatVietnameseDate(targetDate);

  function handleUpdateItem(index: number, changes: Partial<PlanDraftItem>) {
    setItems((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], ...changes };
      return next;
    });
  }

  function handleRemoveItem(index: number) {
    setItems((prev) => prev.filter((_, i) => i !== index));
  }

  function handleAddItem() {
    if (!newTitle.trim()) return;

    const newItem: PlanDraftItem = {
      category_name: newCategory,
      category_sort_order: 99,
      title: newTitle.trim(),
      item_type: newType,
      target_value: newVal.trim() || null,
      current_value: newType === 'text' ? newVal.trim() || null : null,
      sort_order: items.length,
    };

    setItems((prev) => [...prev, newItem]);
    setNewTitle('');
    setNewVal('');
  }

  // Drag & Drop reorder handlers
  function handleDragStart(e: React.DragEvent, index: number) {
    setDraggedIdx(index);
    e.dataTransfer.effectAllowed = 'move';
  }

  function handleDragOver(e: React.DragEvent) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  }

  function handleDrop(e: React.DragEvent, targetIndex: number) {
    e.preventDefault();
    if (draggedIdx === null || draggedIdx === targetIndex) return;

    setItems((prev) => {
      const next = [...prev];
      const [draggedItem] = next.splice(draggedIdx, 1);
      next.splice(targetIndex, 0, draggedItem);
      return next.map((item, i) => ({ ...item, sort_order: i }));
    });
    setDraggedIdx(null);
  }

  async function handleSave() {
    setSaving(true);
    setError(null);

    const res = await saveDailyPlanAction({
      local_date: targetDate,
      items,
    });

    if (res?.error) {
      setError(res.error);
      setSaving(false);
    } else {
      router.push('/today');
    }
  }

  async function handleDeletePlan() {
    if (!confirm(`Bạn có chắc chắn muốn XÓA TOÀN BỘ kế hoạch cho ngày ${formattedDate}?`)) {
      return;
    }

    setDeleting(true);
    setError(null);

    const res = await deleteDailyPlanAction(targetDate);
    if (res?.error) {
      setError(res.error);
      setDeleting(false);
    } else {
      router.push('/today');
    }
  }

  function handleCancel() {
    router.push('/today');
  }

  // Group items by category for UI
  const categoriesMap = new Map<string, { sortOrder: number; itemsWithIdx: Array<{ item: PlanDraftItem; idx: number }> }>();

  items.forEach((item, idx) => {
    const existing = categoriesMap.get(item.category_name);
    if (existing) {
      existing.itemsWithIdx.push({ item, idx });
    } else {
      categoriesMap.set(item.category_name, {
        sortOrder: item.category_sort_order,
        itemsWithIdx: [{ item, idx }],
      });
    }
  });

  const categories = Array.from(categoriesMap.entries()).sort(
    (a, b) => a[1].sortOrder - b[1].sortOrder
  );

  return (
    <div className="space-y-4 sm:space-y-6 pb-20 sm:pb-8">
      {/* Mobile-optimized Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm">
        <div className="space-y-0.5">
          <div className="flex items-center space-x-2 text-indigo-600 font-semibold text-xs sm:text-sm">
            <CalendarPlus className="w-4 h-4" />
            <span>LẬP KẾ HOẠCH NGÀY MỚI</span>
          </div>
          <h1 className="text-xl sm:text-3xl font-bold text-slate-900">{formattedDate}</h1>
          <p className="text-xs sm:text-sm text-slate-500">
            {isExisting ? 'Đang chỉnh sửa kế hoạch đã lập' : 'Bản nháp được tạo từ template'}
          </p>
        </div>

        {/* Desktop Actions */}
        <div className="hidden sm:flex items-center space-x-2">
          {isExisting && (
            <Button
              type="button"
              variant="outline"
              onClick={handleDeletePlan}
              disabled={deleting || saving}
              className="border-red-200 text-red-600 hover:bg-red-50"
            >
              <Trash2 className="w-4 h-4 mr-1.5" />
              {deleting ? 'Đang xóa...' : 'Xóa kế hoạch'}
            </Button>
          )}

          <Button
            type="button"
            variant="ghost"
            onClick={handleCancel}
            disabled={saving || deleting}
          >
            <X className="w-4 h-4 mr-1.5" />
            Hủy
          </Button>

          <Button onClick={handleSave} size="lg" disabled={saving || deleting} className="bg-indigo-600 hover:bg-indigo-700">
            <Save className="w-4 h-4 mr-2" />
            {saving ? 'Đang lưu...' : 'Lưu kế hoạch'}
          </Button>
        </div>
      </div>

      {error && (
        <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm font-medium flex items-center space-x-2">
          <AlertTriangle className="w-4 h-4 text-red-500 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Drag notice */}
      <div className="text-[11px] sm:text-xs text-slate-500 bg-slate-100/90 px-3 py-2 rounded-xl border border-slate-200 flex items-center space-x-2">
        <GripVertical className="w-4 h-4 text-slate-400 shrink-0" />
        <span>Giữ và kéo biểu tượng <strong>::</strong> để di chuyển công việc.</span>
      </div>

      {/* Categories & Compact Mobile Rows */}
      <div className="space-y-4 sm:space-y-5">
        {categories.map(([categoryName, group]) => (
          <Card key={categoryName} className="p-3 sm:p-5 space-y-2.5">
            <h2 className="font-bold text-sm sm:text-base text-slate-800 border-b border-slate-100 pb-2 flex items-center justify-between">
              <span>{categoryName}</span>
              <Badge variant="default" className="text-[10px] sm:text-xs px-2 py-0.5">{group.itemsWithIdx.length} task</Badge>
            </h2>

            <div className="space-y-2">
              {group.itemsWithIdx.map(({ item, idx }) => (
                <div
                  key={idx}
                  draggable
                  onDragStart={(e) => handleDragStart(e, idx)}
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, idx)}
                  className={`flex items-center justify-between gap-2 p-2.5 sm:p-3 rounded-xl bg-slate-50 border transition-all ${
                    draggedIdx === idx ? 'border-indigo-500 bg-indigo-50/50 opacity-50' : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {/* Drag handle & Title input */}
                  <div className="flex items-center space-x-2 flex-1 min-w-0">
                    <div
                      className="cursor-grab active:cursor-grabbing p-1 text-slate-400 hover:text-slate-600 rounded touch-manipulation shrink-0"
                      title="Kéo để xếp lại thứ tự"
                    >
                      <GripVertical className="w-4 h-4" />
                    </div>

                    <input
                      type="text"
                      value={item.title}
                      onChange={(e) => handleUpdateItem(idx, { title: e.target.value })}
                      className="font-medium text-xs sm:text-sm text-slate-900 bg-transparent border-b border-transparent hover:border-slate-300 focus:border-indigo-500 focus:outline-none flex-1 min-w-0 py-0.5 truncate"
                    />
                  </div>

                  {/* Inline value input & delete button */}
                  <div className="flex items-center space-x-1.5 shrink-0">
                    {item.item_type === 'duration' && (
                      <div className="flex items-center space-x-1">
                        <input
                          type="number"
                          value={item.target_value || ''}
                          onChange={(e) => handleUpdateItem(idx, { target_value: e.target.value })}
                          placeholder="30"
                          className="w-14 sm:w-20 px-1.5 py-1 text-xs text-center rounded-lg border border-slate-300 bg-white font-semibold text-slate-900 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        />
                        <span className="text-[11px] sm:text-xs text-slate-500 font-medium">p</span>
                      </div>
                    )}

                    {item.item_type === 'text' && (
                      <input
                        type="text"
                        value={item.target_value || item.current_value || ''}
                        onChange={(e) =>
                          handleUpdateItem(idx, {
                            target_value: e.target.value,
                            current_value: e.target.value,
                          })
                        }
                        placeholder="VD: Đổ rác"
                        className="w-28 sm:w-48 px-2 py-1 text-xs rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                      />
                    )}

                    <button
                      type="button"
                      onClick={() => handleRemoveItem(idx)}
                      className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors touch-manipulation"
                      title="Xóa công việc"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>

      {/* Add New Task Form */}
      <Card className="p-4 sm:p-5 space-y-3 border-indigo-200 bg-indigo-50/20">
        <h3 className="font-bold text-xs sm:text-sm text-indigo-900 flex items-center space-x-2">
          <Plus className="w-4 h-4 text-indigo-600" />
          <span>Thêm công việc phát sinh cho ngày {formattedDate}</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
          <Input
            placeholder="Tên công việc phát sinh"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="text-xs sm:text-sm"
          />

          <select
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            className="rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 min-h-[40px]"
          >
            <option value="📚 Công việc & học tập">📚 Công việc & học tập</option>
            <option value="🏠 Cá nhân & gia đình">🏠 Cá nhân & gia đình</option>
            <option value="🎮 Giải trí">🎮 Giải trí</option>
            <option value="⭐ Việc thêm">⭐ Việc thêm</option>
            <option value="🌙 Cuối ngày">🌙 Cuối ngày</option>
          </select>

          <select
            value={newType}
            onChange={(e) => setNewType(e.target.value as ItemType)}
            className="rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 min-h-[40px]"
          >
            <option value="checkbox">Checkbox (Hoàn thành)</option>
            <option value="duration">Duration (Số phút)</option>
            <option value="text">Text (Chi tiết nội dung)</option>
          </select>

          <Input
            placeholder={newType === 'duration' ? 'Mặc định (VD: 30)' : newType === 'text' ? 'Nội dung (VD: Đổ rác)' : 'Không cần thiết'}
            value={newVal}
            onChange={(e) => setNewVal(e.target.value)}
            disabled={newType === 'checkbox'}
            className="text-xs sm:text-sm"
          />
        </div>

        <Button type="button" onClick={handleAddItem} variant="secondary" className="w-full sm:w-auto text-xs sm:text-sm">
          <Plus className="w-4 h-4 mr-1.5" />
          Thêm vào danh sách ngày
        </Button>
      </Card>

      {/* Mobile Floating Action Bar (Sticky at bottom above bottom nav) */}
      <div className="sm:hidden fixed bottom-14 left-0 right-0 p-3 bg-white/95 backdrop-blur border-t border-slate-200 shadow-xl flex items-center justify-between gap-2 z-30">
        {isExisting && (
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={handleDeletePlan}
            disabled={deleting || saving}
            className="border-red-200 text-red-600 hover:bg-red-50 text-xs px-2.5"
          >
            <Trash2 className="w-3.5 h-3.5 mr-1" />
            Xóa
          </Button>
        )}

        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={handleCancel}
          disabled={saving || deleting}
          className="text-xs px-2.5 text-slate-600"
        >
          Hủy
        </Button>

        <Button onClick={handleSave} size="sm" disabled={saving || deleting} className="bg-indigo-600 hover:bg-indigo-700 text-xs px-4 flex-1 shadow-md font-bold">
          <Save className="w-3.5 h-3.5 mr-1.5" />
          {saving ? 'Đang lưu...' : 'Lưu kế hoạch'}
        </Button>
      </div>
    </div>
  );
}
