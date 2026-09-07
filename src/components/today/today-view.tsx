'use client';

import Link from 'next/link';
import { DailyChecklist, GroupedDailyItems } from '@/lib/database.types';
import { formatVietnameseDate } from '@/lib/utils/date';
import { TaskItemCard } from './task-item';
import { Card, Progress, Badge } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, CalendarPlus, CheckCircle2, Sparkles } from 'lucide-react';

export function TodayView({
  localDate,
  checklist,
  groupedItems,
}: {
  localDate: string;
  checklist: DailyChecklist | null;
  groupedItems: GroupedDailyItems[];
}) {
  const formattedDate = formatVietnameseDate(localDate);

  if (!checklist || groupedItems.length === 0) {
    return (
      <div className="space-y-6">
        {/* Header */}
        <div className="space-y-1">
          <div className="flex items-center space-x-2 text-indigo-600 font-semibold text-sm">
            <Calendar className="w-4 h-4" />
            <span>HÔM NAY</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">{formattedDate}</h1>
        </div>

        {/* Empty State Card */}
        <Card className="p-8 text-center space-y-5 border-dashed border-2 border-indigo-200 bg-indigo-50/30">
          <div className="w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mx-auto shadow-inner">
            <Sparkles className="w-8 h-8" />
          </div>
          <div className="space-y-2 max-w-md mx-auto">
            <h2 className="text-xl font-bold text-slate-900">Bạn chưa lập kế hoạch cho hôm nay</h2>
            <p className="text-sm text-slate-600">
              Hãy chọn danh sách công việc cần làm cho hôm nay để theo dõi tiến độ và tối ưu hóa thời gian của bạn.
            </p>
          </div>
          <Link href={`/plan-tomorrow?date=${localDate}`}>
            <Button size="lg" className="shadow-md">
              <CalendarPlus className="w-5 h-5 mr-2" />
              Lập kế hoạch ngay
            </Button>
          </Link>
        </Card>
      </div>
    );
  }

  const totalItemsCount = groupedItems.reduce((acc, cat) => acc + cat.items.length, 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center space-x-2 text-indigo-600 font-semibold text-sm">
            <Calendar className="w-4 h-4" />
            <span>HÔM NAY</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">{formattedDate}</h1>
        </div>

        <Link href={`/plan-tomorrow?date=${localDate}`}>
          <Button variant="outline" size="sm" className="w-fit">
            Chỉnh sửa kế hoạch
          </Button>
        </Link>
      </div>

      {/* Progress Card */}
      <Card className="p-5 space-y-3 bg-gradient-to-br from-indigo-900 to-slate-900 text-white shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            <span className="font-semibold text-sm text-slate-200">Tiến độ hôm nay</span>
          </div>
          <Badge variant="indigo" className="bg-indigo-500/30 text-indigo-200 border-indigo-400/30">
            {checklist.completion_percentage}%
          </Badge>
        </div>

        <Progress value={checklist.completion_percentage} className="h-3.5 bg-slate-800" />

        <div className="flex justify-between text-xs text-slate-300 font-medium">
          <span>Tổng số: {totalItemsCount} công việc</span>
          <span>{checklist.completion_percentage === 100 ? '🎉 Hoàn thành xuất sắc!' : 'Đang thực hiện'}</span>
        </div>
      </Card>

      {/* Categories & Tasks List */}
      <div className="space-y-5">
        {groupedItems.map((group) => (
          <Card key={group.category_name} className="p-4 sm:p-5 space-y-3">
            <h2 className="font-bold text-base text-slate-800 flex items-center space-x-2 border-b border-slate-100 pb-2.5">
              <span>{group.category_name}</span>
              <span className="text-xs text-slate-400 font-normal">({group.items.length})</span>
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
  );
}
