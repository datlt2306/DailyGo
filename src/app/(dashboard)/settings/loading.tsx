import { Card } from '@/components/ui/card';

export default function SettingsLoading() {
  return (
    <div className="space-y-6 animate-pulse p-1">
      <div className="space-y-2">
        <div className="h-4 w-32 bg-indigo-100 rounded" />
        <div className="h-8 w-56 bg-slate-300 rounded-xl" />
      </div>

      <Card className="p-6 space-y-4">
        <div className="h-6 w-40 bg-slate-300 rounded" />
        <div className="h-10 w-full bg-slate-100 rounded-xl border" />
        <div className="h-10 w-full bg-slate-100 rounded-xl border" />
      </Card>
    </div>
  );
}
