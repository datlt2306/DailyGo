'use client';

import { useState } from 'react';
import {
  TemplateCategoryWithItems,
  createCategoryAction,
  createTemplateItemAction,
  deleteCategoryAction,
  deleteTemplateItemAction,
  moveCategoryOrderAction,
  updateCategoryAction,
  updateTemplateItemAction,
} from '@/lib/actions/template';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Plus, Trash2, Edit2, ArrowUp, ArrowDown, Settings2, Power, Check } from 'lucide-react';
import { ItemType } from '@/lib/database.types';

export function TemplateEditor({
  initialCategories,
}: {
  initialCategories: TemplateCategoryWithItems[];
}) {
  const [categories, setCategories] = useState(initialCategories);
  const [newCatName, setNewCatName] = useState('');
  const [newCatIcon, setNewCatIcon] = useState('⭐');

  const [addingItemCatId, setAddingItemCatId] = useState<string | null>(null);
  const [itemTitle, setItemTitle] = useState('');
  const [itemType, setItemType] = useState<ItemType>('checkbox');
  const [itemDefaultVal, setItemDefaultVal] = useState('');

  const [error, setError] = useState<string | null>(null);

  async function handleAddCategory() {
    if (!newCatName.trim()) return;
    setError(null);
    const res = await createCategoryAction(newCatName, newCatIcon);
    if (res?.error) setError(res.error);
    else {
      setNewCatName('');
      window.location.reload();
    }
  }

  async function handleDeleteCategory(id: string) {
    if (!confirm('Bạn có chắc chắn muốn xóa danh mục này cùng toàn bộ các item bên trong?')) return;
    setError(null);
    const res = await deleteCategoryAction(id);
    if (res?.error) setError(res.error);
    else window.location.reload();
  }

  async function handleMoveCategory(id: string, dir: 'up' | 'down') {
    await moveCategoryOrderAction(id, dir);
    window.location.reload();
  }

  async function handleAddItem(catId: string) {
    if (!itemTitle.trim()) return;
    setError(null);
    const res = await createTemplateItemAction({
      category_id: catId,
      title: itemTitle,
      item_type: itemType,
      default_value: itemDefaultVal,
    });
    if (res?.error) setError(res.error);
    else {
      setItemTitle('');
      setItemDefaultVal('');
      setAddingItemCatId(null);
      window.location.reload();
    }
  }

  async function handleToggleEnable(itemId: string, currentEnabled: boolean) {
    await updateTemplateItemAction(itemId, { is_enabled: !currentEnabled });
    window.location.reload();
  }

  async function handleDeleteItem(itemId: string) {
    if (!confirm('Bạn có chắc chắn muốn xóa công việc mẫu này khỏi Template?')) return;
    await deleteTemplateItemAction(itemId);
    window.location.reload();
  }

  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <div className="flex items-center space-x-2 text-indigo-600 font-semibold text-sm">
          <Settings2 className="w-4 h-4" />
          <span>CẤU HÌNH TEMPLATE</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">Quản lý khuôn mẫu checklist</h1>
        <p className="text-sm text-slate-500">
          Chỉnh sửa các công việc mặc định. Thay đổi tại đây chỉ áp dụng cho các ngày lập kế hoạch sau này.
        </p>
      </div>

      {error && (
        <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm font-medium">
          {error}
        </div>
      )}

      {/* Add New Category Form */}
      <Card className="p-4 sm:p-5 space-y-3 bg-indigo-50/30 border-indigo-200">
        <h3 className="font-bold text-sm text-indigo-900 flex items-center space-x-2">
          <Plus className="w-4 h-4 text-indigo-600" />
          <span>Tạo danh mục mới</span>
        </h3>
        <div className="flex flex-col sm:flex-row gap-3">
          <Input
            placeholder="Icon (VD: 📚, 🏠, 🎮)"
            value={newCatIcon}
            onChange={(e) => setNewCatIcon(e.target.value)}
            className="w-full sm:w-28"
          />
          <Input
            placeholder="Tên danh mục (VD: Việc cá nhân)"
            value={newCatName}
            onChange={(e) => setNewCatName(e.target.value)}
            className="flex-1"
          />
          <Button onClick={handleAddCategory}>Thêm danh mục</Button>
        </div>
      </Card>

      {/* Categories & Items List */}
      <div className="space-y-6">
        {categories.map((cat, catIdx) => (
          <Card key={cat.id} className="p-4 sm:p-5 space-y-4">
            {/* Category Bar */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center space-x-2">
                <span className="text-xl">{cat.icon || '⭐'}</span>
                <h2 className="font-bold text-base text-slate-800">{cat.name}</h2>
                <Badge variant="default">{cat.items.length} item</Badge>
              </div>

              <div className="flex items-center space-x-1">
                <button
                  type="button"
                  onClick={() => handleMoveCategory(cat.id, 'up')}
                  disabled={catIdx === 0}
                  className="p-1.5 text-slate-400 hover:text-slate-700 disabled:opacity-30 rounded-lg"
                  title="Di chuyển lên"
                >
                  <ArrowUp className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => handleMoveCategory(cat.id, 'down')}
                  disabled={catIdx === categories.length - 1}
                  className="p-1.5 text-slate-400 hover:text-slate-700 disabled:opacity-30 rounded-lg"
                  title="Di chuyển xuống"
                >
                  <ArrowDown className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => handleDeleteCategory(cat.id)}
                  className="p-1.5 text-slate-400 hover:text-red-600 rounded-lg"
                  title="Xóa danh mục"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Template Items */}
            <div className="space-y-2.5">
              {cat.items.map((item) => (
                <div
                  key={item.id}
                  className={`flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-xl border transition-all ${
                    item.is_enabled
                      ? 'bg-slate-50 border-slate-200'
                      : 'bg-slate-100/50 border-slate-200 opacity-60'
                  }`}
                >
                  <div className="space-y-0.5">
                    <p className="font-medium text-sm text-slate-900">{item.title}</p>
                    <div className="flex items-center space-x-2 text-xs text-slate-500 font-medium">
                      <span>Loại: <strong className="text-slate-700 capitalize">{item.item_type}</strong></span>
                      {item.default_value && <span>• Mặc định: {item.default_value}</span>}
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 mt-2 sm:mt-0">
                    <button
                      type="button"
                      onClick={() => handleToggleEnable(item.id, item.is_enabled)}
                      className={`px-2.5 py-1 text-xs font-semibold rounded-lg flex items-center space-x-1 ${
                        item.is_enabled
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-slate-200 text-slate-600'
                      }`}
                    >
                      <Power className="w-3 h-3" />
                      <span>{item.is_enabled ? 'Đang bật' : 'Đã tắt'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleDeleteItem(item.id)}
                      className="p-1.5 text-slate-400 hover:text-red-600 rounded-lg"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}

              {/* Add Item form toggle */}
              {addingItemCatId === cat.id ? (
                <div className="p-3 rounded-xl border border-indigo-200 bg-indigo-50/40 space-y-3 mt-3">
                  <Input
                    placeholder="Tiêu đề công việc"
                    value={itemTitle}
                    onChange={(e) => setItemTitle(e.target.value)}
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <select
                      value={itemType}
                      onChange={(e) => setItemType(e.target.value as ItemType)}
                      className="rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 min-h-[40px]"
                    >
                      <option value="checkbox">Checkbox (Hoàn thành)</option>
                      <option value="duration">Duration (Số phút)</option>
                      <option value="text">Text (Mô tả chi tiết)</option>
                    </select>

                    <Input
                      placeholder={itemType === 'duration' ? 'Số phút mặc định (VD: 30)' : 'Giá trị mặc định'}
                      value={itemDefaultVal}
                      onChange={(e) => setItemDefaultVal(e.target.value)}
                      disabled={itemType === 'checkbox'}
                    />
                  </div>

                  <div className="flex space-x-2">
                    <Button size="sm" onClick={() => handleAddItem(cat.id)}>Lưu item</Button>
                    <Button size="sm" variant="ghost" onClick={() => setAddingItemCatId(null)}>Hủy</Button>
                  </div>
                </div>
              ) : (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setAddingItemCatId(cat.id)}
                  className="w-full border-dashed"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Thêm công việc vào {cat.name}
                </Button>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
