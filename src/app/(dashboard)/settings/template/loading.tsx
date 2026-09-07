import { Card } from '@/components/ui/card';

export default function TemplateLoading() {
  return (
    <div className="space-y-6 animate-pulse p-1">
      <div className="space-y-2">
        <div className="h-4 w-36 bg-indigo-100 rounded" />
        <div className="h-8 w-64 bg-slate-300 rounded-xl" />
      </div>

      <Card className="p-4 h-24 bg-indigo-50/40 border-indigo-200" />

      <div className="space-y-4">
        {[1, 2].map((cat) => (
          <Card key={cat} className="p-5 space-y-3">
            <div className="h-6 w-44 bg-slate-300 rounded" />
            <div className="h-10 w-full bg-slate-100 rounded-xl border" />
            <div className="h-10 w-full bg-slate-100 rounded-xl border" />
          </Card>
        ))}
      </div>
    </div>
  );
}
