'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';

export async function loginAction(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  if (!email || !password) {
    return { error: 'Vui lòng nhập đầy đủ email và mật khẩu.' };
  }

  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return { error: 'Tên đăng nhập hoặc mật khẩu không chính xác.' };
  }

  revalidatePath('/', 'layout');
  redirect('/today');
}

export async function registerAction(formData: FormData) {
  const displayName = formData.get('displayName') as string;
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const timezone = (formData.get('timezone') as string) || 'Asia/Ho_Chi_Minh';

  if (!email || !password || !displayName) {
    return { error: 'Vui lòng điền đầy đủ tất cả thông tin.' };
  }

  if (password.length < 6) {
    return { error: 'Mật khẩu phải có tối thiểu 6 ký tự.' };
  }

  const supabase = await createClient();

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        display_name: displayName,
        timezone,
      },
    },
  });

  if (error) {
    return { error: error.message || 'Đăng ký không thành công. Vui lòng thử lại.' };
  }

  // If email confirmation is enabled on Supabase, notify user; otherwise redirect to /today
  if (data.session) {
    revalidatePath('/', 'layout');
    redirect('/today');
  }

  return { success: 'Đăng ký thành công! Vui lòng đăng nhập vào hệ thống.' };
}

export async function logoutAction() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  revalidatePath('/', 'layout');
  redirect('/login');
}
