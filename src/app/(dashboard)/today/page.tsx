import { getTodayChecklistAction } from '@/lib/actions/checklist';
import { TodayView } from '@/components/today/today-view';

export const metadata = {
  title: 'Hôm nay - DailyGo',
};

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
