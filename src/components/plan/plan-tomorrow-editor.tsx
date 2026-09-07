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
      // Re-assign sort_order
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
    <div className="space-y-6">
      {/* Header & Actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
        <div className="space-y-1">
          <div className="flex items-center space-x-2 text-indigo-600 font-semibold text-sm">
            <CalendarPlus className="w-4 h-4" />
            <span>LẬP KẾ HOẠCH NGÀY MỚI</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">{formattedDate}</h1>
          <p className="text-sm text-slate-500">
            {isExisting ? 'Đang chỉnh sửa kế hoạch đã lập trước đó' : 'Bản nháp được khởi tạo từ template mặc định của bạn'}
          </p>
        </div>

        {/* Action Buttons: Save, Cancel, Delete */}
        <div className="flex flex-wrap items-center gap-2">
          {isExisting && (
            <Button
              type="button"
              variant="outline"
              onClick={handleDeletePlan}
              disabled={deleting || saving}
              className="border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300"
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
            Hủy / Quay lại
          </Button>

          <Button onClick={handleSave} size="lg" disabled={saving || deleting} className="shadow-md bg-indigo-600 hover:bg-indigo-700">
            <Save className="w-4 h-4 mr-2" />
            {saving ? 'Đang lưu...' : 'Lưu kế hoạch'}
          </Button>
        </div>
      </div>

      {error && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm font-medium flex items-center space-x-2">
          <AlertTriangle className="w-5 h-5 text-red-500 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Drag instruction notice */}
      <div className="text-xs text-slate-500 bg-slate-100/80 px-3.5 py-2 rounded-xl border border-slate-200 flex items-center space-x-2">
        <GripVertical className="w-4 h-4 text-slate-400 shrink-0" />
        <span>Bấm và kéo biểu tượng <strong>::</strong> để thay đổi thứ tự công việc tùy ý.</span>
      </div>

      {/* Categories & Editable Items */}
      <div className="space-y-5">
        {categories.map(([categoryName, group]) => (
          <Card key={categoryName} className="p-4 sm:p-5 space-y-3">
            <h2 className="font-bold text-base text-slate-800 border-b border-slate-100 pb-2.5 flex items-center justify-between">
              <span>{categoryName}</span>
              <Badge variant="default">{group.itemsWithIdx.length} task</Badge>
            </h2>

            <div className="space-y-3">
              {group.itemsWithIdx.map(({ item, idx }) => (
                <div
                  key={idx}
                  draggable
                  onDragStart={(e) => handleDragStart(e, idx)}
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, idx)}
                  className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 rounded-xl bg-slate-50 border transition-all ${
                    draggedIdx === idx ? 'border-indigo-500 bg-indigo-50/50 opacity-50 scale-[0.99]' : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center space-x-2 flex-1 min-w-0">
                    {/* Drag Handle Icon */}
                    <div
                      className="cursor-grab active:cursor-grabbing p-1 text-slate-400 hover:text-slate-600 rounded"
                      title="Kéo để thay đổi thứ tự"
                    >
                      <GripVertical className="w-4 h-4" />
                    </div>

                    <div className="flex-1 space-y-1 min-w-0">
                      <input
                        type="text"
                        value={item.title}
                        onChange={(e) => handleUpdateItem(idx, { title: e.target.value })}
                        className="font-medium text-sm text-slate-900 bg-transparent border-b border-transparent hover:border-slate-300 focus:border-indigo-500 focus:outline-none w-full py-0.5"
                      />
                      <span className="inline-block text-xs text-slate-400 font-medium capitalize">
                        Loại: {item.item_type}
                      </span>
                    </div>
                  </div>

                  {/* Target value or custom text input */}
                  <div className="flex items-center space-x-2 shrink-0 pl-6 sm:pl-0">
                    {item.item_type === 'duration' && (
                      <div className="flex items-center space-x-1">
                        <input
                          type="number"
                          value={item.target_value || ''}
                          onChange={(e) => handleUpdateItem(idx, { target_value: e.target.value })}
                          placeholder="30"
                          className="w-20 px-2 py-1 text-xs rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        />
                        <span className="text-xs text-slate-500 font-medium">phút</span>
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
                        placeholder="Nội dung cụ thể (VD: Đổ rác)"
                        className="w-48 sm:w-56 px-2.5 py-1 text-xs rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                      />
                    )}

                    <button
                      type="button"
                      onClick={() => handleRemoveItem(idx)}
                      className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      title="Xóa công việc khỏi ngày này"
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
      <Card className="p-5 space-y-4 border-indigo-200 bg-indigo-50/20">
        <h3 className="font-bold text-sm text-indigo-900 flex items-center space-x-2">
          <Plus className="w-4 h-4 text-indigo-600" />
          <span>Thêm công việc phát sinh cho ngày {formattedDate}</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <Input
            placeholder="Tên công việc phát sinh"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />

          <select
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            className="rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 min-h-[44px]"
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
            className="rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 min-h-[44px]"
          >
            <option value="checkbox">Checkbox (Hoàn thành)</option>
            <option value="duration">Duration (Số phút)</option>
            <option value="text">Text (Chi tiết nội dung)</option>
          </select>

          <Input
            placeholder={newType === 'duration' ? 'Mặc định số phút (VD: 30)' : newType === 'text' ? 'Nội dung (VD: Đổ rác)' : 'Không cần thiết'}
            value={newVal}
            onChange={(e) => setNewVal(e.target.value)}
            disabled={newType === 'checkbox'}
          />
        </div>

        <Button type="button" onClick={handleAddItem} variant="secondary" className="w-full sm:w-auto">
          <Plus className="w-4 h-4 mr-2" />
          Thêm vào danh sách ngày
        </Button>
      </Card>
    </div>
  );
}
