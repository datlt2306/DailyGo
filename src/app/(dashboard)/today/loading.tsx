import { Card } from '@/components/ui/card';

export default function TodayLoading() {
  return (
    <div className="space-y-6 animate-pulse p-1">
      {/* Header Skeleton */}
      <div className="flex justify-between items-center">
        <div className="space-y-2">
          <div className="h-4 w-28 bg-indigo-100 rounded-lg" />
          <div className="h-8 w-56 bg-slate-300 rounded-xl" />
        </div>
        <div className="h-9 w-36 bg-slate-200 rounded-xl hidden sm:block" />
      </div>

      {/* Progress Card Skeleton */}
      <Card className="p-5 space-y-4 bg-slate-800 border-none rounded-2xl">
        <div className="flex justify-between items-center">
          <div className="h-4 w-32 bg-slate-700 rounded" />
          <div className="h-6 w-12 bg-indigo-500/40 rounded-lg" />
        </div>
        <div className="h-3.5 w-full bg-slate-700 rounded-full" />
        <div className="flex justify-between">
          <div className="h-3 w-28 bg-slate-700 rounded" />
          <div className="h-3 w-36 bg-slate-700 rounded" />
        </div>
      </Card>

      {/* Categories Skeleton */}
      <div className="space-y-4">
        {[1, 2, 3].map((cat) => (
          <Card key={cat} className="p-4 space-y-3">
            <div className="h-5 w-40 bg-slate-200 rounded-lg border-b pb-2" />
            <div className="space-y-2">
              <div className="h-12 w-full bg-slate-100 rounded-xl border border-slate-200" />
              <div className="h-12 w-full bg-slate-100 rounded-xl border border-slate-200" />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
