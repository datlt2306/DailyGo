import Link from 'next/link';
import { createClient } from '@/lib/supabase/server';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Settings, Sliders, User, Globe, LogOut, ChevronRight } from 'lucide-react';
import { logoutAction } from '@/lib/actions/auth';

export const metadata = {
  title: 'Cài đặt - DailyGo',
};

export default async function SettingsPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user?.id || '')
    .single();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-1">
        <div className="flex items-center space-x-2 text-indigo-600 font-semibold text-sm">
          <Settings className="w-4 h-4" />
          <span>CÀI ĐẶT CÁ NHÂN</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">Tài khoản & Ứng dụng</h1>
      </div>

      {/* Profile Info Card */}
      <Card className="p-5 space-y-4">
        <h2 className="font-bold text-base text-slate-800 flex items-center space-x-2 border-b border-slate-100 pb-3">
          <User className="w-5 h-5 text-indigo-600" />
          <span>Thông tin tài khoản</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-xs font-semibold text-slate-400 uppercase">Tên hiển thị</span>
            <p className="font-medium text-slate-900 mt-0.5">{profile?.display_name || user?.email}</p>
          </div>

          <div>
            <span className="text-xs font-semibold text-slate-400 uppercase">Email</span>
            <p className="font-medium text-slate-900 mt-0.5">{profile?.email || user?.email}</p>
          </div>

          <div>
            <span className="text-xs font-semibold text-slate-400 uppercase">Múi giờ hệ thống</span>
            <p className="font-medium text-slate-900 mt-0.5 flex items-center space-x-1.5">
              <Globe className="w-4 h-4 text-slate-400" />
              <span>{profile?.timezone || 'Asia/Ho_Chi_Minh'}</span>
            </p>
          </div>
        </div>
      </Card>

      {/* Checklist Template Management Link */}
      <Link href="/settings/template" className="block group">
        <Card className="p-5 flex items-center justify-between group-hover:border-indigo-300 group-hover:shadow-md transition-all">
          <div className="flex items-center space-x-3.5">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
              <Sliders className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                Cấu hình Checklist Template
              </h3>
              <p className="text-xs text-slate-500">
                Thêm, sửa, xóa danh mục và các công việc mặc định
              </p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-indigo-600 transition-colors" />
        </Card>
      </Link>

      {/* Logout */}
      <Card className="p-5">
        <form action={logoutAction}>
          <Button type="submit" variant="danger" className="w-full sm:w-auto">
            <LogOut className="w-4 h-4 mr-2" />
            Đăng xuất khỏi thiết bị
          </Button>
        </form>
      </Card>
    </div>
  );
}
