import { Card } from '@/components/ui/card';

export default function PlanTomorrowLoading() {
  return (
    <div className="space-y-6 animate-pulse p-1">
      {/* Header Skeleton */}
      <div className="flex flex-col sm:flex-row justify-between gap-4 bg-white p-5 rounded-2xl border border-slate-200">
        <div className="space-y-2">
          <div className="h-4 w-40 bg-indigo-100 rounded" />
          <div className="h-8 w-60 bg-slate-300 rounded-xl" />
          <div className="h-4 w-72 bg-slate-200 rounded" />
        </div>
        <div className="h-10 w-32 bg-indigo-300 rounded-xl" />
      </div>

      {/* Notice Skeleton */}
      <div className="h-8 w-full bg-slate-100 rounded-xl border border-slate-200" />

      {/* Category Card Skeletons */}
      <div className="space-y-4">
        {[1, 2].map((cat) => (
          <Card key={cat} className="p-4 space-y-3">
            <div className="h-5 w-48 bg-slate-200 rounded" />
            <div className="space-y-2">
              <div className="h-10 w-full bg-slate-100 rounded-xl border" />
              <div className="h-10 w-full bg-slate-100 rounded-xl border" />
              <div className="h-10 w-full bg-slate-100 rounded-xl border" />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
