import { Card } from '@/components/ui/card';

export default function DashboardLoading() {
  return (
    <div className="space-y-6 animate-pulse p-1">
      {/* Header Skeleton */}
      <div className="space-y-2">
        <div className="h-4 w-32 bg-slate-200 rounded-lg" />
        <div className="h-8 w-64 bg-slate-300 rounded-xl" />
      </div>

      {/* Hero Card Skeleton */}
      <Card className="p-6 h-36 bg-slate-200 rounded-2xl border-none" />

      {/* Content Blocks Skeleton */}
      <div className="space-y-4">
        <Card className="p-5 h-28 bg-slate-100 rounded-2xl border-slate-200" />
        <Card className="p-5 h-28 bg-slate-100 rounded-2xl border-slate-200" />
        <Card className="p-5 h-28 bg-slate-100 rounded-2xl border-slate-200" />
      </div>
    </div>
  );
}
