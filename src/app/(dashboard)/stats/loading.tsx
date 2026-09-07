import { Card } from '@/components/ui/card';

export default function StatsLoading() {
  return (
    <div className="space-y-6 animate-pulse p-1">
      {/* Header Skeleton */}
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="space-y-2">
          <div className="h-4 w-44 bg-indigo-100 rounded" />
          <div className="h-8 w-64 bg-slate-300 rounded-xl" />
        </div>
        <div className="h-10 w-52 bg-slate-200 rounded-xl" />
      </div>

      {/* Analytics Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="p-4 h-20 bg-indigo-50/50 border-indigo-200" />
        <Card className="p-4 h-20 bg-emerald-50/50 border-emerald-200" />
        <Card className="p-4 h-20 bg-purple-50/50 border-purple-200" />
      </div>

      {/* Calendar Grid Skeleton */}
      <Card className="p-5 space-y-4">
        <div className="flex justify-between items-center">
          <div className="h-6 w-36 bg-slate-300 rounded" />
          <div className="h-8 w-40 bg-slate-200 rounded-xl" />
        </div>

        <div className="grid grid-cols-7 gap-2">
          {Array.from({ length: 35 }).map((_, idx) => (
            <div key={idx} className="h-16 sm:h-20 bg-slate-100 rounded-xl border border-slate-200" />
          ))}
        </div>
      </Card>
    </div>
  );
}
