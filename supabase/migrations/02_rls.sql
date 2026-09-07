-- Migration 02: Row Level Security (RLS) Policies for DailyGo

-- Enable RLS on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.template_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.template_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.daily_checklists ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.daily_items ENABLE ROW LEVEL SECURITY;

-- 1. Profiles Policies
CREATE POLICY "Users can view own profile" ON public.profiles
    FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON public.profiles
    FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile" ON public.profiles
    FOR INSERT WITH CHECK (auth.uid() = id);

-- 2. Template Categories Policies
CREATE POLICY "Users can view own template categories" ON public.template_categories
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own template categories" ON public.template_categories
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own template categories" ON public.template_categories
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own template categories" ON public.template_categories
    FOR DELETE USING (auth.uid() = user_id);

-- 3. Template Items Policies
CREATE POLICY "Users can view own template items" ON public.template_items
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own template items" ON public.template_items
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own template items" ON public.template_items
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own template items" ON public.template_items
    FOR DELETE USING (auth.uid() = user_id);

-- 4. Daily Checklists Policies
CREATE POLICY "Users can view own daily checklists" ON public.daily_checklists
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own daily checklists" ON public.daily_checklists
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own daily checklists" ON public.daily_checklists
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own daily checklists" ON public.daily_checklists
    FOR DELETE USING (auth.uid() = user_id);

-- 5. Daily Items Policies
CREATE POLICY "Users can view own daily items" ON public.daily_items
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own daily items" ON public.daily_items
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own daily items" ON public.daily_items
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own daily items" ON public.daily_items
    FOR DELETE USING (auth.uid() = user_id);
