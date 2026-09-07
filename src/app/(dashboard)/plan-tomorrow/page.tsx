import { getPlanTomorrowDraftAction } from '@/lib/actions/checklist';
import { PlanTomorrowEditor } from '@/components/plan/plan-tomorrow-editor';

export const metadata = {
  title: 'Lập kế hoạch ngày mới - DailyGo',
};

export default async function PlanTomorrowPage({
  searchParams,
}: {
  searchParams: { date?: string };
}) {
  const targetDateStr = searchParams.date;
  const { local_date, isExisting, draftItems } = await getPlanTomorrowDraftAction(targetDateStr);

  return (
    <PlanTomorrowEditor
      targetDate={local_date}
      isExisting={isExisting}
      initialItems={draftItems}
    />
  );
}
