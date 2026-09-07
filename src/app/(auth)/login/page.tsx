import { LoginForm } from '@/components/auth/login-form';

export const metadata = {
  title: 'Đăng nhập - DailyGo',
};

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <LoginForm />
    </main>
  );
}
