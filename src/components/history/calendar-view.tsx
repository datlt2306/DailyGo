'use client';

import { useState } from 'react';
import { DailyChecklist, GroupedDailyItems } from '@/lib/database.types';
import { formatVietnameseDate } from '@/lib/utils/date';
import { getChecklistByDateAction } from '@/lib/actions/checklist';
import { Card, Badge, Progress } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  ArrowLeft,
  Award,
  BarChart3,
  Calendar as CalendarIcon,
} from 'lucide-react';
import { TaskItemCard } from '../today/task-item';

export function CalendarView({
  checklists,
}: {
  checklists: Array<DailyChecklist & { total_items: number; completed_items: number }>;
}) {
  const [currentDate, setCurrentDate] = useState(() => new Date());
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [detailData, setDetailData] = useState<{
    checklist: DailyChecklist | null;
    groupedItems: GroupedDailyItems[];
  } | null>(null);
  const [loadingDetail, setLoadingDetail] = useState(false);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth(); // 0-indexed

  // Map checklists by local_date YYYY-MM-DD
  const checklistMap = new Map<string, DailyChecklist & { total_items: number; completed_items: number }>();
  checklists.forEach((cl) => {
    checklistMap.set(cl.local_date, cl);
  });

  // Calculate days in month & offset
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);

  // Day of week offset (0: Mon, 1: Tue, ..., 6: Sun)
  let startOffset = firstDayOfMonth.getDay() - 1;
  if (startOffset === -1) startOffset = 6; // Sunday

  const totalDays = lastDayOfMonth.getDate();

  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  async function handleSelectDate(dateStr: string) {
    setSelectedDate(dateStr);
    setLoadingDetail(true);
    const res = await getChecklistByDateAction(dateStr);
    setDetailData({ checklist: res.checklist, groupedItems: res.groupedItems });
    setLoadingDetail(false);
  }

  // Calculate monthly stats
  const monthPrefix = `${year}-${String(month + 1).padStart(2, '0')}`;
  const monthChecklists = checklists.filter((cl) => cl.local_date.startsWith(monthPrefix));
  const completed100Count = monthChecklists.filter((cl) => cl.completion_percentage === 100).length;
  const avgPercentage =
    monthChecklists.length > 0
      ? Math.round(
          monthChecklists.reduce((acc, curr) => acc + curr.completion_percentage, 0) /
            monthChecklists.length
        )
      : 0;

  if (selectedDate && detailData) {
    return (
      <div className="space-y-6">
        <Button variant="ghost" onClick={() => setSelectedDate(null)} className="pl-0 text-slate-600">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Quay lại Lịch Calendar
        </Button>

        <div className="space-y-1">
          <div className="flex items-center space-x-2 text-indigo-600 font-semibold text-sm">
            <CalendarIcon className="w-4 h-4" />
            <span>CHI TIẾT NGÀY KẾ HOẠCH</span>
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

  const daysOfWeek = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];

  return (
    <div className="space-y-6">
      {/* Monthly Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="p-4 bg-gradient-to-br from-indigo-50 to-indigo-100/50 border-indigo-200 flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0">
            <BarChart3 className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs text-indigo-700 font-medium">Tỉ lệ hoàn thành trung bình</p>
            <p className="text-xl font-extrabold text-indigo-950">{avgPercentage}%</p>
          </div>
        </Card>

        <Card className="p-4 bg-gradient-to-br from-emerald-50 to-emerald-100/50 border-emerald-200 flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs text-emerald-700 font-medium">Ngày đạt 100% mục tiêu</p>
            <p className="text-xl font-extrabold text-emerald-950">{completed100Count} ngày</p>
          </div>
        </Card>

        <Card className="p-4 bg-gradient-to-br from-purple-50 to-purple-100/50 border-purple-200 flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center shrink-0">
            <CalendarIcon className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs text-purple-700 font-medium">Tổng số kế hoạch đã lập</p>
            <p className="text-xl font-extrabold text-purple-950">{monthChecklists.length} ngày</p>
          </div>
        </Card>
      </div>

      {/* Calendar Header & Controls */}
      <Card className="p-5 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900">
            Tháng {month + 1} / {year}
          </h2>

          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" onClick={prevMonth}>
              <ChevronLeft className="w-4 h-4 mr-1" /> Trước
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentDate(new Date())}
            >
              Hôm nay
            </Button>
            <Button variant="outline" size="sm" onClick={nextMonth}>
              Sau <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>

        {/* Days of Week Header */}
        <div className="grid grid-cols-7 gap-1 text-center border-b border-slate-100 pb-2">
          {daysOfWeek.map((day) => (
            <div key={day} className="text-xs font-bold text-slate-500 uppercase tracking-wider py-1">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-1.5 sm:gap-2">
          {/* Offset blank cells */}
          {Array.from({ length: startOffset }).map((_, i) => (
            <div key={`offset-${i}`} className="h-16 sm:h-20 rounded-xl bg-slate-50/40 border border-transparent" />
          ))}

          {/* Days of current month */}
          {Array.from({ length: totalDays }).map((_, i) => {
            const dayNum = i + 1;
            const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(dayNum).padStart(2, '0')}`;
            const checklist = checklistMap.get(dateStr);
            const isToday =
              new Date().toISOString().split('T')[0] === dateStr;

            return (
              <div
                key={dateStr}
                onClick={() => checklist && handleSelectDate(dateStr)}
                className={`h-16 sm:h-20 p-1.5 sm:p-2 rounded-xl border flex flex-col justify-between transition-all ${
                  checklist
                    ? 'cursor-pointer hover:border-indigo-500 hover:shadow-md bg-white'
                    : 'bg-slate-50/80 border-slate-100'
                } ${isToday ? 'ring-2 ring-indigo-600 ring-offset-1' : ''}`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`text-xs font-bold ${
                      isToday
                        ? 'w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center'
                        : 'text-slate-700'
                    }`}
                  >
                    {dayNum}
                  </span>

                  {checklist && (
                    <span className="text-[10px] text-slate-400 font-medium hidden sm:inline">
                      {checklist.completed_items}/{checklist.total_items}
                    </span>
                  )}
                </div>

                {checklist ? (
                  <div className="mt-1">
                    <span
                      className={`inline-block w-full text-[10px] sm:text-xs font-extrabold text-center py-0.5 rounded-lg ${
                        checklist.completion_percentage === 100
                          ? 'bg-emerald-500 text-white shadow-sm'
                          : checklist.completion_percentage >= 50
                          ? 'bg-indigo-600 text-white'
                          : checklist.completion_percentage > 0
                          ? 'bg-amber-500 text-white'
                          : 'bg-slate-200 text-slate-700'
                      }`}
                    >
                      {checklist.completion_percentage}%
                    </span>
                  </div>
                ) : (
                  <div className="text-[10px] text-slate-300 text-center font-medium">--</div>
                )}
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
}
