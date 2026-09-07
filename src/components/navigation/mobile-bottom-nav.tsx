'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BarChart3, CalendarCheck, CalendarPlus, Settings } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

export function MobileBottomNav() {
  const pathname = usePathname();

  const navItems = [
    { label: 'Thống kê', href: '/stats', icon: BarChart3 },
    { label: 'Hôm nay', href: '/today', icon: CalendarCheck },
    { label: 'Kế hoạch', href: '/plan-tomorrow', icon: CalendarPlus },
    { label: 'Cài đặt', href: '/settings', icon: Settings },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-2 py-1 shadow-lg">
      <div className="flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              prefetch={false}
              className={cn(
                'flex flex-col items-center justify-center py-1.5 px-3 min-w-[64px] min-h-[48px] rounded-xl text-xs font-medium transition-colors touch-manipulation',
                isActive
                  ? 'text-indigo-600 bg-indigo-50 font-semibold'
                  : 'text-slate-500 hover:text-slate-800'
              )}
            >
              <Icon className={cn('w-5 h-5 mb-0.5', isActive ? 'text-indigo-600' : 'text-slate-500')} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
