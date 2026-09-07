import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { DesktopSidebar } from '@/components/navigation/desktop-sidebar';
import { MobileBottomNav } from '@/components/navigation/mobile-bottom-nav';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('display_name, email')
    .eq('id', user.id)
    .single();

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row">
      <DesktopSidebar
        displayName={profile?.display_name || user.email}
        email={profile?.email || user.email}
      />
      <main className="flex-1 pb-20 md:pb-8 p-4 sm:p-6 md:p-8 max-w-4xl mx-auto w-full">
        {children}
      </main>
      <MobileBottomNav />
    </div>
  );
}
