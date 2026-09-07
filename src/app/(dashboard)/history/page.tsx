import { getHistoryChecklistsAction } from '@/lib/actions/checklist';
import { HistoryView } from '@/components/history/history-view';

export const metadata = {
  title: 'Lịch sử kế hoạch - DailyGo',
};

export default async function HistoryPage() {
  const { data: checklists } = await getHistoryChecklistsAction();

  return <HistoryView checklists={checklists || []} />;
}
