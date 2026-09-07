'use client';

import { useState } from 'react';
import Link from 'next/link';
import { registerAction } from '@/lib/actions/auth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { CheckSquare } from 'lucide-react';

export function RegisterForm() {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    setError(null);
    setSuccess(null);
    const result = await registerAction(formData);
    if (result?.error) {
      setError(result.error);
    } else if (result?.success) {
      setSuccess(result.success);
    }
    setLoading(false);
  }

  return (
    <Card className="w-full max-w-md p-6 sm:p-8 space-y-6 border-slate-200/80 shadow-xl">
      <div className="text-center space-y-2">
        <div className="inline-flex w-12 h-12 rounded-2xl bg-indigo-600 items-center justify-center text-white shadow-lg mb-2">
          <CheckSquare className="w-7 h-7" />
        </div>
        <h1 className="text-2xl font-bold text-slate-900">Tạo tài khoản mới</h1>
        <p className="text-sm text-slate-500">Bắt đầu trải nghiệm lập kế hoạch DailyGo</p>
      </div>

      {error && (
        <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm font-medium">
          {error}
        </div>
      )}

      {success && (
        <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-medium">
          {success}
        </div>
      )}

      <form action={handleSubmit} className="space-y-4">
        <Input
          label="Tên hiển thị"
          name="displayName"
          type="text"
          placeholder="Nguyễn Văn A"
          required
        />

        <Input
          label="Email"
          name="email"
          type="email"
          placeholder="nguyenvana@gmail.com"
          required
          autoComplete="email"
        />

        <Input
          label="Mật khẩu"
          name="password"
          type="password"
          placeholder="Tối thiểu 6 ký tự"
          required
          minLength={6}
          autoComplete="new-password"
        />

        <div className="space-y-1">
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
            Múi giờ
          </label>
          <select
            name="timezone"
            defaultValue="Asia/Ho_Chi_Minh"
            className="flex w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 min-h-[44px]"
          >
            <option value="Asia/Ho_Chi_Minh">Asia/Ho_Chi_Minh (GMT+7)</option>
            <option value="Asia/Tokyo">Asia/Tokyo (GMT+9)</option>
            <option value="America/New_York">America/New_York (EST)</option>
            <option value="Europe/London">Europe/London (GMT)</option>
          </select>
        </div>

        <Button type="submit" className="w-full py-3 text-base" disabled={loading}>
          {loading ? 'Đang tạo tài khoản...' : 'Đăng ký ngay'}
        </Button>
      </form>

      <div className="text-center pt-2 border-t border-slate-100">
        <p className="text-sm text-slate-600">
          Đã có tài khoản?{' '}
          <Link href="/login" className="font-semibold text-indigo-600 hover:underline">
            Đăng nhập
          </Link>
        </p>
      </div>
    </Card>
  );
}
