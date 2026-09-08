import { getTodayChecklistAction } from '@/lib/actions/checklist';
import { TodayView } from '@/components/today/today-view';

export const metadata = {
  title: 'Hôm nay - DailyGo',
};

export const dynamic = 'force-dynamic';
export const revalidate = 0;


export default async function TodayPage() {
  const { local_date, checklist, groupedItems } = await getTodayChecklistAction();

  return (
    <TodayView
      localDate={local_date}
      checklist={checklist}
      groupedItems={groupedItems}
    />
  );
}
