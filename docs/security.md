# DailyGo - Security & Data Protection Specification

## 1. Security Architecture Principles
DailyGo được thiết kế theo mô hình **Zero-Trust Client**. Client hoàn toàn không có quyền vượt qua kiểm soát Row Level Security (RLS) của Supabase PostgreSQL.

```
                  +--------------------------+
                  |    Client App Request    |
                  +--------------------------+
                               |
                               | Cookie Session (JWT Token)
                               v
                  +--------------------------+
                  |  Supabase Auth Middleware |
                  +--------------------------+
                               |
                               v
                  +--------------------------+
                  | PostgreSQL Engine & RLS  |
                  | policy: auth.uid()=user_id|
                  +--------------------------+
                               |
                  +------------+------------+
                  |                         |
         [AUTHORIZED MATCH]       [UNAUTHORIZED MISMATCH]
                  |                         |
                  v                         v
          Return Query Data          Return 0 rows / 403
```

## 2. Supabase Row Level Security (RLS) Policies

Tất cả các bảng (`profiles`, `template_categories`, `template_items`, `daily_checklists`, `daily_items`) bắt buộc phải bật `ALTER TABLE ... ENABLE ROW LEVEL SECURITY;`.

### 2.1 Policy cho `profiles`
- `SELECT`: `auth.uid() = id`
- `UPDATE`: `auth.uid() = id`
- `INSERT`: `auth.uid() = id`

### 2.2 Policy cho `template_categories`
- `ALL (SELECT, INSERT, UPDATE, DELETE)`: `auth.uid() = user_id`

### 2.3 Policy cho `template_items`
- `ALL (SELECT, INSERT, UPDATE, DELETE)`: `auth.uid() = user_id`

### 2.4 Policy cho `daily_checklists`
- `ALL (SELECT, INSERT, UPDATE, DELETE)`: `auth.uid() = user_id`

### 2.5 Policy cho `daily_items`
- `ALL (SELECT, INSERT, UPDATE, DELETE)`: `auth.uid() = user_id`

## 3. Server-side Validation & Authorization
- Tất cả Server Actions và API Route Handlers luôn đọc session hiện tại từ `@supabase/ssr` server client (`supabase.auth.getUser()`).
- Bắt buộc kiểm tra `user.id` hợp lệ trước khi thực thi bất kỳ truy vấn nào.
- Tuyệt đối KHÔNG nhận `user_id` từ `request body` hoặc `query parameters` để ghi vào CSDL.

## 4. Environment Credentials Management
- Biến môi trường công khai:
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- Tuyệt đối KHÔNG đưa `SUPABASE_SERVICE_ROLE_KEY` vào client code hay `.env` công khai.
- Tệp `.env` được đưa vào `.gitignore` để tránh commit nhầm credential lên GitHub.
