import { RegisterForm } from '@/components/auth/register-form';

export const metadata = {
  title: 'Đăng ký - DailyGo',
};

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <RegisterForm />
    </main>
  );
}
