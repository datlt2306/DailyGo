# DailyGo - System Architecture

## 1. Tech Stack Overview
- **Frontend Framework**: Next.js 14/15 App Router with TypeScript.
- **Styling**: Tailwind CSS & Lucide React icons.
- **Backend & Database**: Supabase PostgreSQL + Supabase Auth.
- **SSR & Authentication**: `@supabase/ssr` package with Next.js Middleware and Cookie-based Sessions.
- **Deployment Platform**: Vercel.

## 2. System Architecture Diagram

```
+-------------------------------------------------------------------+
|                        Client Layer (Browser)                     |
|     Mobile Android View (360-430px)  |  Desktop Responsive View   |
+-------------------------------------------------------------------+
                                  |
                           HTTP / WebSockets
                                  v
+-------------------------------------------------------------------+
|                   Next.js App Router (Vercel)                     |
|                                                                   |
|   +-------------------+    +------------------+                   |
|   | Middleware Auth   |    | Server Components|                   |
|   | (Session Protect) |    | (SSR Data Fetch) |                   |
|   +-------------------+    +------------------+                   |
|                                     |                             |
|                            +------------------+                   |
|                            | Server Actions   |                   |
|                            | (Mutations/Logic)|                   |
|                            +------------------+                   |
+-------------------------------------------------------------------+
                                  |
                         Supabase JS SDK (@supabase/ssr)
                                  v
+-------------------------------------------------------------------+
|                       Supabase Platform                           |
|                                                                   |
|   +-------------------+              +------------------------+   |
|   | Supabase Auth     |              | PostgreSQL Database    |   |
|   | (Email / Pass)    |              | - RLS Policies Enabled |   |
|   +-------------------+              | - Multi-tenant Isolation|   |
|                                      | - Triggers & Auto-seed |   |
|                                      +------------------------+   |
+-------------------------------------------------------------------+
```

## 3. Key Design Patterns

### 3.1 Template vs. Snapshot (Daily Checklist) Pattern
- **Template Schema**: Danh mục và item mẫu đại diện cho thói quen mặc định của người dùng.
- **Snapshot Schema**: Khi lập kế hoạch cho một ngày (ví dụ: `2026-09-08`), hệ thống tạo một bản ghi `daily_checklists` và sao chép toàn bộ item đang được kích hoạt (`is_enabled = true`) vào `daily_items`.
- **Hoàn toàn độc lập**: `daily_items` tự lưu thông tin `category_name`, `title`, `item_type`, `target_value`, `current_value`, `is_completed`. Sửa đổi sau đó đối với Template không truy cứu hay ảnh hưởng đến `daily_items` đã tạo.

### 3.2 Extensible Item Types Architecture
Hệ thống sử dụng cột `item_type` dạng enum/text trong cả `template_items` và `daily_items`:
- `checkbox`: target_value / current_value là boolean ("true"/"false").
- `duration`: target_value là định mức thời gian (VD: "30"), current_value là thời gian thực tế đã hoàn thành.
- `text`: target_value là mô tả công việc (VD: "Đổ rác"), current_value là ghi chú/kết quả.
Thiết kế này hỗ trợ mở rộng thêm các loại item mới (ví dụ: `number_counter`, `time_range`, `link`) mà không cần thay đổi cấu trúc bảng database.

### 3.3 Server & Client Responsibilities
- **Server Components (RSC)**: Fetch dữ liệu trực tiếp từ Supabase với RLS context, render HTML ban đầu để tối ưu tốc độ tải và SEO/Performance.
- **Server Actions**: Xử lý toàn bộ logic mutation (tạo plan, toggle check, cập nhật duration, thay đổi template, đăng nhập/đăng xuất).
- **Client Components**: Quản lý UI state tương tác nhanh (optimistic updates, tab selection, modal popups, drag/drop or reorder buttons).

## 4. Timezone Management Strategy
- Bản ghi `profiles` lưu thuộc tính `timezone` (ví dụ: `Asia/Ho_Chi_Minh`).
- Mọi truy vấn theo ngày (`local_date`) được định dạng dưới dạng chuỗi ISO Date `YYYY-MM-DD`.
- Hàm helper `getLocalDate(timezone, offsetDays)` tính toán chuẩn xác ranh giới nửa đêm dựa trên IANA Timezone ID của profile người dùng, tránh lỗi lệch ngày do `new Date().toISOString()`.
