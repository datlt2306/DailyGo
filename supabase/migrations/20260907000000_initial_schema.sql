-- Migration: 20260907000000_initial_schema.sql
-- Description: Complete Database Schema, RLS policies, and Auto-seed Trigger for DailyGo

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. PROFILES TABLE
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    display_name TEXT NOT NULL,
    email TEXT NOT NULL,
    timezone TEXT NOT NULL DEFAULT 'Asia/Ho_Chi_Minh',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 2. TEMPLATE CATEGORIES TABLE
CREATE TABLE IF NOT EXISTS public.template_categories (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    icon TEXT,
    sort_order INT NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 3. TEMPLATE ITEMS TABLE
CREATE TABLE IF NOT EXISTS public.template_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    category_id UUID NOT NULL REFERENCES public.template_categories(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    item_type TEXT NOT NULL DEFAULT 'checkbox' CHECK (item_type IN ('checkbox', 'duration', 'text')),
    default_value TEXT,
    is_enabled BOOLEAN NOT NULL DEFAULT TRUE,
    sort_order INT NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 4. DAILY CHECKLISTS TABLE
CREATE TABLE IF NOT EXISTS public.daily_checklists (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    local_date DATE NOT NULL,
    completion_percentage INT NOT NULL DEFAULT 0,
    total_items INT NOT NULL DEFAULT 0,
    completed_items INT NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT unique_user_local_date UNIQUE (user_id, local_date)
);

-- 5. DAILY ITEMS TABLE (SNAPSHOT)
CREATE TABLE IF NOT EXISTS public.daily_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    daily_checklist_id UUID NOT NULL REFERENCES public.daily_checklists(id) ON DELETE CASCADE,
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    category_name TEXT NOT NULL,
    category_sort_order INT NOT NULL DEFAULT 0,
    title TEXT NOT NULL,
    item_type TEXT NOT NULL DEFAULT 'checkbox' CHECK (item_type IN ('checkbox', 'duration', 'text')),
    target_value TEXT,
    current_value TEXT,
    value TEXT,
    is_completed BOOLEAN NOT NULL DEFAULT FALSE,
    sort_order INT NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ALTER Statements to ensure existing schema compatibility
ALTER TABLE public.daily_checklists ADD COLUMN IF NOT EXISTS completion_percentage INT NOT NULL DEFAULT 0;
ALTER TABLE public.daily_checklists ADD COLUMN IF NOT EXISTS total_items INT NOT NULL DEFAULT 0;
ALTER TABLE public.daily_checklists ADD COLUMN IF NOT EXISTS completed_items INT NOT NULL DEFAULT 0;

ALTER TABLE public.daily_items ADD COLUMN IF NOT EXISTS target_value TEXT;
ALTER TABLE public.daily_items ADD COLUMN IF NOT EXISTS current_value TEXT;
ALTER TABLE public.daily_items ADD COLUMN IF NOT EXISTS value TEXT;

ALTER TABLE public.template_categories ADD COLUMN IF NOT EXISTS icon TEXT;

-- INDEXES
CREATE INDEX IF NOT EXISTS idx_template_categories_user ON public.template_categories(user_id, sort_order);
CREATE INDEX IF NOT EXISTS idx_template_items_user_cat ON public.template_items(user_id, category_id, sort_order);
CREATE INDEX IF NOT EXISTS idx_daily_checklists_user_date ON public.daily_checklists(user_id, local_date);
CREATE INDEX IF NOT EXISTS idx_daily_items_checklist ON public.daily_items(daily_checklist_id, category_sort_order, sort_order);

-- ENABLE ROW LEVEL SECURITY
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.template_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.template_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.daily_checklists ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.daily_items ENABLE ROW LEVEL SECURITY;

-- RLS POLICIES
DROP POLICY IF EXISTS "Users can view own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can insert own profile" ON public.profiles;
CREATE POLICY "Users can view own profile" ON public.profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Users can insert own profile" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = id);

DROP POLICY IF EXISTS "Users can view own template categories" ON public.template_categories;
DROP POLICY IF EXISTS "Users can insert own template categories" ON public.template_categories;
DROP POLICY IF EXISTS "Users can update own template categories" ON public.template_categories;
DROP POLICY IF EXISTS "Users can delete own template categories" ON public.template_categories;
CREATE POLICY "Users can view own template categories" ON public.template_categories FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own template categories" ON public.template_categories FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own template categories" ON public.template_categories FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own template categories" ON public.template_categories FOR DELETE USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can view own template items" ON public.template_items;
DROP POLICY IF EXISTS "Users can insert own template items" ON public.template_items;
DROP POLICY IF EXISTS "Users can update own template items" ON public.template_items;
DROP POLICY IF EXISTS "Users can delete own template items" ON public.template_items;
CREATE POLICY "Users can view own template items" ON public.template_items FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own template items" ON public.template_items FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own template items" ON public.template_items FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own template items" ON public.template_items FOR DELETE USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can view own daily checklists" ON public.daily_checklists;
DROP POLICY IF EXISTS "Users can insert own daily checklists" ON public.daily_checklists;
DROP POLICY IF EXISTS "Users can update own daily checklists" ON public.daily_checklists;
DROP POLICY IF EXISTS "Users can delete own daily checklists" ON public.daily_checklists;
CREATE POLICY "Users can view own daily checklists" ON public.daily_checklists FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own daily checklists" ON public.daily_checklists FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own daily checklists" ON public.daily_checklists FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own daily checklists" ON public.daily_checklists FOR DELETE USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can view own daily items" ON public.daily_items;
DROP POLICY IF EXISTS "Users can insert own daily items" ON public.daily_items;
DROP POLICY IF EXISTS "Users can update own daily items" ON public.daily_items;
DROP POLICY IF EXISTS "Users can delete own daily items" ON public.daily_items;
CREATE POLICY "Users can view own daily items" ON public.daily_items FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own daily items" ON public.daily_items FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own daily items" ON public.daily_items FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own daily items" ON public.daily_items FOR DELETE USING (auth.uid() = user_id);

-- TRIGGER FUNCTION: Seed user profile & default template on auth signup
CREATE OR REPLACE FUNCTION public.handle_new_user_signup()
RETURNS TRIGGER AS $$
DECLARE
    cat_work_id UUID;
    cat_family_id UUID;
    cat_fun_id UUID;
    cat_night_id UUID;
BEGIN
    INSERT INTO public.profiles (id, display_name, email, timezone)
    VALUES (
        NEW.id,
        COALESCE(NEW.raw_user_meta_data->>'display_name', SPLIT_PART(NEW.email, '@', 1), 'Người dùng DailyGo'),
        NEW.email,
        COALESCE(NEW.raw_user_meta_data->>'timezone', 'Asia/Ho_Chi_Minh')
    )
    ON CONFLICT (id) DO UPDATE SET
        email = EXCLUDED.email,
        updated_at = NOW();

    INSERT INTO public.template_categories (user_id, name, icon, sort_order)
    VALUES (NEW.id, 'Công việc & học tập', '📚', 0)
    RETURNING id INTO cat_work_id;

    INSERT INTO public.template_categories (user_id, name, icon, sort_order)
    VALUES (NEW.id, 'Cá nhân & gia đình', '🏠', 1)
    RETURNING id INTO cat_family_id;

    INSERT INTO public.template_categories (user_id, name, icon, sort_order)
    VALUES (NEW.id, 'Giải trí', '🎮', 2)
    RETURNING id INTO cat_fun_id;

    INSERT INTO public.template_categories (user_id, name, icon, sort_order)
    VALUES (NEW.id, 'Cuối ngày', '🌙', 3)
    RETURNING id INTO cat_night_id;

    INSERT INTO public.template_items (user_id, category_id, title, item_type, default_value, is_enabled, sort_order)
    VALUES
        (NEW.id, cat_work_id, 'Hoàn thành công việc/bài tập', 'checkbox', NULL, TRUE, 0),
        (NEW.id, cat_work_id, 'Ôn tập / học tập', 'checkbox', NULL, TRUE, 1),
        (NEW.id, cat_work_id, 'Chuẩn bị cho ngày mai', 'checkbox', NULL, TRUE, 2),
        (NEW.id, cat_work_id, 'Việc quan trọng khác', 'checkbox', NULL, TRUE, 3),
        (NEW.id, cat_family_id, 'Việc nhà', 'text', NULL, TRUE, 0),
        (NEW.id, cat_family_id, 'Việc nhà', 'text', NULL, TRUE, 1),
        (NEW.id, cat_family_id, 'Dọn phòng / bàn làm việc', 'checkbox', NULL, TRUE, 2),
        (NEW.id, cat_family_id, 'Vận động / chơi thể thao', 'duration', '45', TRUE, 3),
        (NEW.id, cat_family_id, 'Đọc sách', 'duration', '30', TRUE, 4),
        (NEW.id, cat_fun_id, 'Game / giải trí', 'duration', '60', TRUE, 0),
        (NEW.id, cat_night_id, 'Kiểm tra checklist', 'checkbox', NULL, TRUE, 0),
        (NEW.id, cat_night_id, 'Chuẩn bị cho ngày mai', 'checkbox', NULL, TRUE, 1),
        (NEW.id, cat_night_id, 'Đi ngủ đúng giờ', 'checkbox', NULL, TRUE, 2);

    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to fire on user creation
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user_signup();
