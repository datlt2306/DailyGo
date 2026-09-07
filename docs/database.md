# DailyGo - Database Schema Specification

## 1. Overview
Database chạy trên PostgreSQL (Supabase) với thiết kế chuẩn hóa, khóa chính UUID, khóa ngoại, unique constraints và tự động kích hoạt Row Level Security (RLS).

## 2. Entity Relationship Diagram (ERD)

```
[auth.users] (Supabase Auth)
      |
      | 1:1
      v
  [profiles] <-------------------------------+
  - id (PK, UUID)                            |
  - display_name (TEXT)                      |
  - email (TEXT)                             |
  - timezone (TEXT)                          |
  - created_at / updated_at                  |
      |                                      |
      | 1:N                                  | 1:N
      +-------------------+                  |
      |                   |                  |
      v                   v                  v
[template_categories]  [template_items]   [daily_checklists]
- id (PK)              - id (PK)          - id (PK)
- user_id (FK)         - user_id (FK)     - user_id (FK)
- name                 - category_id (FK) - local_date (DATE) -> UNIQUE(user_id, local_date)
- sort_order           - title            - completion_percentage
                       - item_type                   |
                       - default_value               | 1:N
                       - is_enabled                  v
                       - sort_order           [daily_items]
                                              - id (PK)
                                              - daily_checklist_id (FK)
                                              - user_id (FK)
                                              - category_name
                                              - category_sort_order
                                              - title
                                              - item_type
                                              - target_value
                                              - current_value
                                              - is_completed
                                              - sort_order
```

## 3. Table Definitions

### 3.1 `profiles`
| Column Name | Type | Constraints | Description |
|-------------|------|-------------|-------------|
| `id` | UUID | PRIMARY KEY, REFERENCES auth.users(id) ON DELETE CASCADE | ID người dùng |
| `display_name` | TEXT | NOT NULL | Tên hiển thị |
| `email` | TEXT | NOT NULL | Email đăng ký |
| `timezone` | TEXT | NOT NULL DEFAULT 'Asia/Ho_Chi_Minh' | Múi giờ người dùng |
| `created_at` | TIMESTAMPTZ | NOT NULL DEFAULT NOW() | Thời gian tạo |
| `updated_at` | TIMESTAMPTZ | NOT NULL DEFAULT NOW() | Thời gian cập nhật |

### 3.2 `template_categories`
| Column Name | Type | Constraints | Description |
|-------------|------|-------------|-------------|
| `id` | UUID | PRIMARY KEY DEFAULT gen_random_uuid() | ID danh mục template |
| `user_id` | UUID | NOT NULL REFERENCES profiles(id) ON DELETE CASCADE | Owner |
| `name` | TEXT | NOT NULL | Tên danh mục (VD: Công việc & học tập) |
| `icon` | TEXT | NULL | Biểu tượng (VD: 📚, 🏠) |
| `sort_order` | INT | NOT NULL DEFAULT 0 | Thứ tự sắp xếp |
| `created_at` | TIMESTAMPTZ | NOT NULL DEFAULT NOW() | |
| `updated_at` | TIMESTAMPTZ | NOT NULL DEFAULT NOW() | |

### 3.3 `template_items`
| Column Name | Type | Constraints | Description |
|-------------|------|-------------|-------------|
| `id` | UUID | PRIMARY KEY DEFAULT gen_random_uuid() | ID item template |
| `user_id` | UUID | NOT NULL REFERENCES profiles(id) ON DELETE CASCADE | Owner |
| `category_id` | UUID | NOT NULL REFERENCES template_categories(id) ON DELETE CASCADE | Danh mục thuộc về |
| `title` | TEXT | NOT NULL | Tiêu đề công việc |
| `item_type` | TEXT | NOT NULL DEFAULT 'checkbox' CHECK (item_type IN ('checkbox', 'duration', 'text')) | Loại công việc |
| `default_value` | TEXT | NULL | Giá trị mặc định (phút hoặc nội dung) |
| `is_enabled` | BOOLEAN | NOT NULL DEFAULT TRUE | Trạng thái kích hoạt |
| `sort_order` | INT | NOT NULL DEFAULT 0 | Thứ tự sắp xếp |
| `created_at` | TIMESTAMPTZ | NOT NULL DEFAULT NOW() | |
| `updated_at` | TIMESTAMPTZ | NOT NULL DEFAULT NOW() | |

### 3.4 `daily_checklists`
| Column Name | Type | Constraints | Description |
|-------------|------|-------------|-------------|
| `id` | UUID | PRIMARY KEY DEFAULT gen_random_uuid() | ID daily checklist |
| `user_id` | UUID | NOT NULL REFERENCES profiles(id) ON DELETE CASCADE | Owner |
| `local_date` | DATE | NOT NULL | Ngày địa phương (YYYY-MM-DD) |
| `completion_percentage` | INT | NOT NULL DEFAULT 0 | Tiến độ hoàn thành (0 - 100%) |
| `created_at` | TIMESTAMPTZ | NOT NULL DEFAULT NOW() | |
| `updated_at` | TIMESTAMPTZ | NOT NULL DEFAULT NOW() | |
| CONSTRAINT | | UNIQUE (user_id, local_date) | Không tạo trùng lập cho cùng 1 ngày |

### 3.5 `daily_items`
| Column Name | Type | Constraints | Description |
|-------------|------|-------------|-------------|
| `id` | UUID | PRIMARY KEY DEFAULT gen_random_uuid() | ID daily item |
| `daily_checklist_id` | UUID | NOT NULL REFERENCES daily_checklists(id) ON DELETE CASCADE | Kế hoạch thuộc về |
| `user_id` | UUID | NOT NULL REFERENCES profiles(id) ON DELETE CASCADE | Owner |
| `category_name` | TEXT | NOT NULL | Tên danh mục (snapshot) |
| `category_sort_order` | INT | NOT NULL DEFAULT 0 | Thứ tự danh mục (snapshot) |
| `title` | TEXT | NOT NULL | Tiêu đề công việc (snapshot) |
| `item_type` | TEXT | NOT NULL DEFAULT 'checkbox' | Loại công việc |
| `target_value` | TEXT | NULL | Giá trị cần đạt (VD: "30", "Đổ rác") |
| `current_value` | TEXT | NULL | Giá trị thực tế nhập |
| `is_completed` | BOOLEAN | NOT NULL DEFAULT FALSE | Trạng thái tích chọn |
| `sort_order` | INT | NOT NULL DEFAULT 0 | Thứ tự sắp xếp trong danh mục |
| `created_at` | TIMESTAMPTZ | NOT NULL DEFAULT NOW() | |
| `updated_at` | TIMESTAMPTZ | NOT NULL DEFAULT NOW() | |

## 4. Database Triggers & Auto-seeding
1. **Auto Trigger `on_auth_user_created`**:
   Khi một user đăng ký mới trong `auth.users`, trigger sẽ tự động:
   - Thêm 1 dòng vào `profiles`.
   - Thêm 4 danh mục mặc định vào `template_categories`.
   - Thêm 13 item mặc định tương ứng vào `template_items`.
2. **Auto Trigger `update_daily_checklist_percentage`**:
   Mỗi khi `daily_items` được thêm/sửa/xóa hoặc toggle `is_completed`, trigger tự động tính toán lại `% hoàn thành` dựa trên các task có trong `daily_checklists`.
