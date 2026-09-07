import { getHistoryChecklistsAction } from '@/lib/actions/checklist';
import { StatsView } from '@/components/stats/stats-view';

export const metadata = {
  title: 'Thống kê - DailyGo',
};

export default async function StatsPage() {
  const { data: checklists } = await getHistoryChecklistsAction();

  return <StatsView checklists={checklists || []} />;
}
