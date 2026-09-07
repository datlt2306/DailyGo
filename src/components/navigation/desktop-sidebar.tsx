'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CalendarCheck, CalendarPlus, History, Settings, LogOut, CheckSquare } from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import { logoutAction } from '@/lib/actions/auth';

export function DesktopSidebar({ displayName, email }: { displayName?: string; email?: string }) {
  const pathname = usePathname();

  const navItems = [
    { label: 'Hôm nay', href: '/today', icon: CalendarCheck },
    { label: 'Lập kế hoạch ngày mai', href: '/plan-tomorrow', icon: CalendarPlus },
    { label: 'Lịch sử kế hoạch', href: '/history', icon: History },
    { label: 'Cài đặt & Template', href: '/settings', icon: Settings },
  ];

  return (
    <aside className="hidden md:flex flex-col w-64 border-r border-slate-200 bg-white h-screen sticky top-0 p-4">
      {/* Brand Header */}
      <div className="flex items-center space-x-3 px-3 py-4 mb-4 border-b border-slate-100">
        <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-md">
          <CheckSquare className="w-6 h-6" />
        </div>
        <div>
          <h1 className="font-bold text-lg text-slate-900 leading-tight">DailyGo</h1>
          <p className="text-xs text-slate-500 font-medium">Personal Planner</p>
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 space-y-1.5">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center space-x-3 px-3.5 py-3 rounded-xl text-sm font-medium transition-all',
                isActive
                  ? 'bg-indigo-600 text-white shadow-sm font-semibold'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              )}
            >
              <Icon className="w-5 h-5 shrink-0" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* User Info & Logout Footer */}
      <div className="border-t border-slate-100 pt-4 mt-auto space-y-3">
        <div className="px-3">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Tài khoản</p>
          <p className="text-sm font-medium text-slate-800 truncate">{displayName || 'Người dùng'}</p>
          <p className="text-xs text-slate-500 truncate">{email}</p>
        </div>

        <form action={logoutAction}>
          <button
            type="submit"
            className="flex items-center space-x-3 w-full px-3.5 py-2.5 rounded-xl text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
          >
            <LogOut className="w-4 h-4 shrink-0" />
            <span>Đăng xuất</span>
          </button>
        </form>
      </div>
    </aside>
  );
}
