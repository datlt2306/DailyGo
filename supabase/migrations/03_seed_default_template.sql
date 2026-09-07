-- Migration 03: Auto-seed profile & default template on user signup

CREATE OR REPLACE FUNCTION public.handle_new_user_signup()
RETURNS TRIGGER AS $$
DECLARE
    cat_work_id UUID;
    cat_family_id UUID;
    cat_fun_id UUID;
    cat_night_id UUID;
BEGIN
    -- 1. Create User Profile
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

    -- 2. Create Default Template Categories
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

    -- 3. Create Default Template Items
    -- Category: Công việc & học tập
    INSERT INTO public.template_items (user_id, category_id, title, item_type, default_value, is_enabled, sort_order)
    VALUES
        (NEW.id, cat_work_id, 'Hoàn thành công việc/bài tập', 'checkbox', NULL, TRUE, 0),
        (NEW.id, cat_work_id, 'Ôn tập / học tập', 'checkbox', NULL, TRUE, 1),
        (NEW.id, cat_work_id, 'Chuẩn bị cho ngày mai', 'checkbox', NULL, TRUE, 2),
        (NEW.id, cat_work_id, 'Việc quan trọng khác', 'checkbox', NULL, TRUE, 3);

    -- Category: Cá nhân & gia đình
    INSERT INTO public.template_items (user_id, category_id, title, item_type, default_value, is_enabled, sort_order)
    VALUES
        (NEW.id, cat_family_id, 'Việc nhà', 'text', NULL, TRUE, 0),
        (NEW.id, cat_family_id, 'Việc nhà', 'text', NULL, TRUE, 1),
        (NEW.id, cat_family_id, 'Dọn phòng / bàn làm việc', 'checkbox', NULL, TRUE, 2),
        (NEW.id, cat_family_id, 'Vận động / chơi thể thao', 'duration', '45', TRUE, 3),
        (NEW.id, cat_family_id, 'Đọc sách', 'duration', '30', TRUE, 4);

    -- Category: Giải trí
    INSERT INTO public.template_items (user_id, category_id, title, item_type, default_value, is_enabled, sort_order)
    VALUES
        (NEW.id, cat_fun_id, 'Game / giải trí', 'duration', '60', TRUE, 0);

    -- Category: Cuối ngày
    INSERT INTO public.template_items (user_id, category_id, title, item_type, default_value, is_enabled, sort_order)
    VALUES
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
