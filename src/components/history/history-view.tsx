'use client';

import { useState } from 'react';
import { DailyChecklist, GroupedDailyItems } from '@/lib/database.types';
import { formatVietnameseDate } from '@/lib/utils/date';
import { getChecklistByDateAction } from '@/lib/actions/checklist';
import { Card, Badge, Progress } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { History, Calendar, CheckCircle2, ChevronRight, ArrowLeft } from 'lucide-react';
import { TaskItemCard } from '../today/task-item';

export function HistoryView({
  checklists,
}: {
  checklists: Array<DailyChecklist & { total_items: number; completed_items: number }>;
}) {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [detailData, setDetailData] = useState<{
    checklist: DailyChecklist | null;
    groupedItems: GroupedDailyItems[];
  } | null>(null);
  const [loadingDetail, setLoadingDetail] = useState(false);

  async function handleSelectDate(dateStr: string) {
    setSelectedDate(dateStr);
    setLoadingDetail(true);
    const res = await getChecklistByDateAction(dateStr);
    setDetailData({ checklist: res.checklist, groupedItems: res.groupedItems });
    setLoadingDetail(false);
  }

  if (selectedDate && detailData) {
    return (
      <div className="space-y-6">
        <Button variant="ghost" onClick={() => setSelectedDate(null)} className="pl-0 text-slate-600">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Quay lại lịch sử
        </Button>

        <div className="space-y-1">
          <div className="flex items-center space-x-2 text-indigo-600 font-semibold text-sm">
            <Calendar className="w-4 h-4" />
            <span>CHI TIẾT LỊCH SỬ KẾ HOẠCH</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
            {formatVietnameseDate(selectedDate)}
          </h1>
        </div>

        {loadingDetail ? (
          <div className="p-8 text-center text-slate-500 font-medium">Đang tải dữ liệu...</div>
        ) : detailData.checklist ? (
          <div className="space-y-6">
            <Card className="p-5 space-y-3 bg-slate-900 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span className="font-semibold text-sm">Kết quả hoàn thành</span>
                </div>
                <Badge variant="indigo">{detailData.checklist.completion_percentage}%</Badge>
              </div>
              <Progress value={detailData.checklist.completion_percentage} />
            </Card>

            <div className="space-y-5">
              {detailData.groupedItems.map((group) => (
                <Card key={group.category_name} className="p-4 sm:p-5 space-y-3">
                  <h2 className="font-bold text-base text-slate-800 border-b border-slate-100 pb-2.5">
                    {group.category_name}
                  </h2>
                  <div className="space-y-2">
                    {group.items.map((item) => (
                      <TaskItemCard key={item.id} item={item} />
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ) : (
          <Card className="p-8 text-center text-slate-500">
            Không tìm thấy dữ liệu cho ngày này.
          </Card>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-1">
        <div className="flex items-center space-x-2 text-indigo-600 font-semibold text-sm">
          <History className="w-4 h-4" />
          <span>LỊCH SỬ KẾ HOẠCH</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">Theo dõi quá trình</h1>
        <p className="text-sm text-slate-500">Xem lại các kế hoạch và kết quả thực hiện trong quá khứ</p>
      </div>

      {checklists.length === 0 ? (
        <Card className="p-8 text-center space-y-3 bg-slate-50 border-dashed border-2">
          <p className="text-base font-semibold text-slate-700">Chưa có lịch sử kế hoạch nào</p>
          <p className="text-sm text-slate-500">
            Các kế hoạch hàng ngày của bạn sau khi được khởi tạo và thực hiện sẽ được ghi nhận tại đây.
          </p>
        </Card>
      ) : (
        <div className="space-y-3">
          {checklists.map((cl) => (
            <Card
              key={cl.id}
              onClick={() => handleSelectDate(cl.local_date)}
              className="p-4 sm:p-5 flex items-center justify-between cursor-pointer hover:border-indigo-300 hover:shadow-md transition-all group"
            >
              <div className="space-y-1">
                <p className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {formatVietnameseDate(cl.local_date)}
                </p>
                <p className="text-xs text-slate-500 font-medium">
                  Đã hoàn thành {cl.completed_items} / {cl.total_items} công việc
                </p>
              </div>

              <div className="flex items-center space-x-3">
                <Badge
                  variant={cl.completion_percentage === 100 ? 'success' : 'indigo'}
                  className="text-xs sm:text-sm px-3 py-1"
                >
                  {cl.completion_percentage}%
                </Badge>
                <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-indigo-600 transition-colors" />
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
