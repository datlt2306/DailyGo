'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  PlanDraftItem,
  saveDailyPlanAction,
  deleteDailyPlanAction,
  applyTemplateToNextNDaysAction,
} from '@/lib/actions/checklist';
import { formatVietnameseDate } from '@/lib/utils/date';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  CalendarPlus,
  Plus,
  Trash2,
  Save,
  GripVertical,
  X,
  AlertTriangle,
  Sparkles,
  CheckCircle2,
  Clock,
  FileText,
  Square,
  Calendar,
} from 'lucide-react';
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
  const [applyingWeek, setApplyingWeek] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  // Drag and Drop state
  const [draggedIdx, setDraggedIdx] = useState<number | null>(null);

  const formattedDate = formatVietnameseDate(targetDate);

  // Generate 7-day quick date picker items starting from today
  const todayObj = new Date();
  const dateTabs = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(todayObj);
    d.setDate(todayObj.getDate() + i);
    const dateStr = d.toISOString().split('T')[0];
    const dayNames = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];
    const label = i === 0 ? 'Hôm nay' : i === 1 ? 'Ngày mai' : `${dayNames[d.getDay()]} ${d.getDate()}/${d.getMonth() + 1}`;
    return { dateStr, label, isToday: i === 0 };
  });

  function handleUpdateItem(index: number, changes: Partial<PlanDraftItem>) {
    setItems((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], ...changes };
      return next;
    });
  }

  function handleRemoveItem(index: number) {
    const title = items[index]?.title || 'công việc này';
    if (!confirm(`Bạn có chắc chắn muốn xóa "${title}" khỏi danh sách?`)) {
      return;
    }
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
    setSuccessMsg(null);

    const res = await saveDailyPlanAction({
      local_date: targetDate,
      items,
    });

    setSaving(false);
    if (res?.error) {
      setError(res.error);
    } else {
      setSuccessMsg(`Đã lưu kế hoạch cho ngày ${formattedDate}! Công việc và Checkbox đã sẵn sàng.`);
    }
  }

  async function handleApplyWeek() {
    if (
      !confirm(
        'Bạn có muốn tự động tạo kế hoạch từ Template cho cả 7 ngày tới không? (Những ngày đã tạo trước đó sẽ không bị ảnh hưởng)'
      )
    ) {
      return;
    }

    setApplyingWeek(true);
    setError(null);
    setSuccessMsg(null);

    const res = await applyTemplateToNextNDaysAction(7, false);
    setApplyingWeek(false);

    if (res?.error) {
      setError(res.error);
    } else {
      setSuccessMsg(`Đã áp dụng Template tự động cho 7 ngày tới!`);
      router.refresh();
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
  const categoriesMap = new Map<
    string,
    { sortOrder: number; itemsWithIdx: Array<{ item: PlanDraftItem; idx: number }> }
  >();

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

  const isLoading = applyingWeek || saving || deleting;

  return (
    <div className="space-y-4 sm:space-y-6 pb-24 sm:pb-8">
      {/* 7-Day Quick Date Navigation Bar */}
      <div className="bg-slate-100 p-1.5 rounded-2xl border border-slate-200 overflow-x-auto scrollbar-none flex items-center space-x-1.5">
        {dateTabs.map((tab) => {
          const isActive = tab.dateStr === targetDate;
          return (
            <button
              key={tab.dateStr}
              type="button"
              disabled={isLoading}
              onClick={() => router.push(`/plan-tomorrow?date=${tab.dateStr}`)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center space-x-1 ${
                isActive
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-600 hover:bg-white hover:text-slate-900'
              } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Header & Main Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm">
        <div className="space-y-0.5">
          <div className="flex items-center space-x-2 text-indigo-600 font-semibold text-xs sm:text-sm">
            <CalendarPlus className="w-4 h-4" />
            <span>CHỈNH SỬA KẾ HOẠCH NGÀY</span>
          </div>
          <h1 className="text-xl sm:text-3xl font-bold text-slate-900">{formattedDate}</h1>
          <p className="text-xs sm:text-sm text-slate-500">
            {isExisting
              ? 'Kế hoạch đã được lưu. Chỉnh sửa công việc bên dưới.'
              : 'Bản nháp tự động từ Template của bạn.'}
          </p>
        </div>

        {/* Action Buttons: strictly 1 single horizontal row */}
        <div className="flex flex-row items-center gap-1.5 sm:gap-2 overflow-x-auto scrollbar-none whitespace-nowrap shrink-0">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={handleApplyWeek}
            disabled={isLoading}
            className="border-indigo-200 text-indigo-700 bg-indigo-50/50 hover:bg-indigo-100 text-xs shrink-0"
            title="Tự động lập kế hoạch từ Template cho 7 ngày tới"
          >
            <Sparkles className={`w-3.5 h-3.5 mr-1 text-indigo-600 ${applyingWeek ? 'animate-spin' : ''}`} />
            {applyingWeek ? 'Đang tạo...' : 'Áp dụng cho cả tuần (7 ngày)'}
          </Button>

          {isExisting && (
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleDeletePlan}
              disabled={isLoading}
              className="border-red-200 text-red-600 hover:bg-red-50 text-xs shrink-0"
            >
              <Trash2 className="w-3.5 h-3.5 mr-1" />
              {deleting ? 'Đang xóa...' : 'Xóa'}
            </Button>
          )}

          <Button
            onClick={handleSave}
            size="sm"
            disabled={isLoading}
            className="bg-indigo-600 hover:bg-indigo-700 font-bold shadow-md text-xs sm:text-sm px-3.5 shrink-0"
          >
            <Save className="w-3.5 h-3.5 mr-1" />
            {saving ? 'Đang lưu...' : 'Lưu kế hoạch'}
          </Button>
        </div>
      </div>

      {/* Loading Progress Notification Banner */}
      {applyingWeek && (
        <div className="p-4 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-800 text-xs sm:text-sm font-semibold flex items-center space-x-2.5 animate-pulse shadow-sm">
          <Sparkles className="w-5 h-5 text-indigo-600 animate-spin shrink-0" />
          <span>Đang tạo kế hoạch tự động cho 7 ngày tiếp theo từ Template... Vui lòng không đóng trang.</span>
        </div>
      )}

      {/* Success Notification Banner */}
      {successMsg && (
        <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-medium flex items-center justify-between gap-2 shadow-sm animate-fadeIn">
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>{successMsg}</span>
          </div>
          <Button
            size="sm"
            variant="outline"
            onClick={() => router.push('/today')}
            className="border-emerald-300 text-emerald-800 hover:bg-emerald-100 text-xs whitespace-nowrap"
          >
            Xem Hôm nay
          </Button>
        </div>
      )}

      {error && (
        <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm font-medium flex items-center space-x-2">
          <AlertTriangle className="w-4 h-4 text-red-500 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Drag Notice */}
      <div className="text-[11px] sm:text-xs text-slate-500 bg-slate-100/90 px-3 py-2 rounded-xl border border-slate-200 flex items-center space-x-2">
        <GripVertical className="w-4 h-4 text-slate-400 shrink-0" />
        <span>Giữ & kéo <strong>::</strong> để sắp xếp công việc.</span>
      </div>

      {/* Categories & Task Items */}
      <div className={`space-y-4 sm:space-y-5 ${isLoading ? 'pointer-events-none opacity-60' : ''}`}>
        {categories.map(([categoryName, group]) => (
          <Card key={categoryName} className="p-3 sm:p-5 space-y-2.5">
            <h2 className="font-bold text-sm sm:text-base text-slate-800 border-b border-slate-100 pb-2 flex items-center justify-between">
              <span>{categoryName}</span>
              <Badge variant="default" className="text-[10px] sm:text-xs px-2 py-0.5">
                {group.itemsWithIdx.length} task
              </Badge>
            </h2>

            <div className="space-y-2">
              {group.itemsWithIdx.map(({ item, idx }) => (
                <div
                  key={idx}
                  draggable={!isLoading}
                  onDragStart={(e) => !isLoading && handleDragStart(e, idx)}
                  onDragOver={handleDragOver}
                  onDrop={(e) => !isLoading && handleDrop(e, idx)}
                  className={`flex items-center justify-between gap-2 p-2.5 sm:p-3 rounded-xl bg-slate-50 border transition-all ${
                    draggedIdx === idx
                      ? 'border-indigo-500 bg-indigo-50/50 opacity-50'
                      : 'border-slate-200 hover:border-slate-300'
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
                      disabled={isLoading}
                      value={item.title}
                      onChange={(e) => handleUpdateItem(idx, { title: e.target.value })}
                      className="font-medium text-xs sm:text-sm text-slate-900 bg-transparent border-b border-transparent hover:border-slate-300 focus:border-indigo-500 focus:outline-none flex-1 min-w-0 py-0.5 truncate disabled:opacity-50"
                    />
                  </div>

                  {/* Inline value input & delete button */}
                  <div className="flex items-center space-x-1.5 shrink-0">
                    {item.item_type === 'duration' && (
                      <div className="flex items-center space-x-1">
                        <input
                          type="number"
                          disabled={isLoading}
                          value={item.target_value || ''}
                          onChange={(e) => handleUpdateItem(idx, { target_value: e.target.value })}
                          placeholder="30"
                          className="w-14 sm:w-20 px-1.5 py-1 text-xs text-center rounded-lg border border-slate-300 bg-white font-semibold text-slate-900 focus:outline-none focus:ring-1 focus:ring-indigo-500 disabled:opacity-50"
                        />
                        <span className="text-[11px] sm:text-xs text-slate-500 font-medium">p</span>
                      </div>
                    )}

                    {item.item_type === 'text' && (
                      <input
                        type="text"
                        disabled={isLoading}
                        value={item.target_value || item.current_value || ''}
                        onChange={(e) =>
                          handleUpdateItem(idx, {
                            target_value: e.target.value,
                            current_value: e.target.value,
                          })
                        }
                        placeholder="VD: Đổ rác"
                        className="w-28 sm:w-48 px-2 py-1 text-xs rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-1 focus:ring-indigo-500 disabled:opacity-50"
                      />
                    )}

                    <button
                      type="button"
                      disabled={isLoading}
                      onClick={() => handleRemoveItem(idx)}
                      className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors touch-manipulation disabled:opacity-30 disabled:cursor-not-allowed"
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
      <Card className={`p-4 sm:p-5 space-y-3 border-indigo-200 bg-indigo-50/20 ${isLoading ? 'pointer-events-none opacity-60' : ''}`}>
        <h3 className="font-bold text-xs sm:text-sm text-indigo-900 flex items-center space-x-2">
          <Plus className="w-4 h-4 text-indigo-600" />
          <span>Thêm công việc phát sinh cho ngày {formattedDate}</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
          <Input
            placeholder="Tên công việc phát sinh"
            disabled={isLoading}
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="text-xs sm:text-sm bg-white"
          />

          <select
            disabled={isLoading}
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            className="rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 min-h-[40px] disabled:opacity-50"
          >
            <option value="📚 Công việc & học tập">📚 Công việc & học tập</option>
            <option value="🏠 Cá nhân & gia đình">🏠 Cá nhân & gia đình</option>
            <option value="🎮 Giải trí">🎮 Giải trí</option>
            <option value="⭐ Việc thêm">⭐ Việc thêm</option>
            <option value="🌙 Cuối ngày">🌙 Cuối ngày</option>
          </select>

          <select
            disabled={isLoading}
            value={newType}
            onChange={(e) => setNewType(e.target.value as ItemType)}
            className="rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 min-h-[40px] disabled:opacity-50"
          >
            <option value="checkbox">Checkbox (Hoàn thành)</option>
            <option value="duration">Duration (Số phút)</option>
            <option value="text">Text (Chi tiết nội dung)</option>
          </select>

          <Input
            placeholder={
              newType === 'duration'
                ? 'Mặc định (VD: 30)'
                : newType === 'text'
                ? 'Nội dung (VD: Đổ rác)'
                : 'Không cần thiết'
            }
            value={newVal}
            onChange={(e) => setNewVal(e.target.value)}
            disabled={isLoading || newType === 'checkbox'}
            className="text-xs sm:text-sm bg-white"
          />
        </div>

        <Button
          type="button"
          disabled={isLoading}
          onClick={handleAddItem}
          variant="secondary"
          className="w-full sm:w-auto text-xs sm:text-sm font-semibold"
        >
          <Plus className="w-4 h-4 mr-1.5" />
          Thêm vào danh sách ngày
        </Button>
      </Card>

      {/* Mobile Floating Action Bar */}
      <div className="sm:hidden fixed bottom-14 left-0 right-0 p-3 bg-white/95 backdrop-blur border-t border-slate-200 shadow-xl flex items-center justify-between gap-2 z-30">
        {isExisting && (
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={handleDeletePlan}
            disabled={isLoading}
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
          disabled={isLoading}
          className="text-xs px-2.5 text-slate-600"
        >
          Hủy
        </Button>

        <Button
          onClick={handleSave}
          size="sm"
          disabled={isLoading}
          className="bg-indigo-600 hover:bg-indigo-700 text-xs px-4 flex-1 shadow-md font-bold"
        >
          <Save className="w-3.5 h-3.5 mr-1.5" />
          {saving ? 'Đang lưu...' : 'Lưu kế hoạch'}
        </Button>
      </div>
    </div>
  );
}
