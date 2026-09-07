import { getTemplateAction } from '@/lib/actions/template';
import { TemplateEditor } from '@/components/template/template-editor';

export const metadata = {
  title: 'Cấu hình template - DailyGo',
};

export default async function SettingsTemplatePage() {
  const { data: categories } = await getTemplateAction();

  return <TemplateEditor initialCategories={categories || []} />;
}
