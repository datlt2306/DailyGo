# DailyGo - Personal Daily Planner

DailyGo là ứng dụng Web App lập kế hoạch, quản lý và theo dõi các công việc hàng ngày được xây dựng bằng **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, và **Supabase PostgreSQL & Auth**.

---

## 🌟 Tính năng nổi bật

1. **Daily Checklist & Snapshot độc lập**:
   - Mỗi ngày là một bản snapshot độc lập (`user_id`, `local_date`). Sửa kế hoạch ngày hôm nay không làm ảnh hưởng đến ngày mai hay template mẫu.
2. **Item Types đa dạng**:
   - `Checkbox`: Đánh dấu hoàn thành đơn giản.
   - `Duration`: Theo dõi định mức thời gian (Đọc sách 30 phút, Vận động 45 phút, Game 60 phút).
   - `Text`: Chi tiết công việc nhà hay nội dung cụ thể (Đổ rác, Gấp quần áo).
3. **Template Mặc Định & Quản Lý Template**:
   - Tự động sinh template 4 danh mục (Công việc & học tập, Cá nhân & gia đình, Giải trí, Cuối ngày) khi đăng ký.
   - Tùy chỉnh hoàn toàn: Thêm/sửa/xóa/đổi thứ tự/bật/tắt các công việc.
4. **Plan Tomorrow (Lập kế hoạch ngày mới)**:
   - Nạp bản nháp từ template, thêm bớt task phát sinh, nhập chi tiết trước khi lưu.
5. **Today Dashboard & History**:
   - Theo dõi tiến độ % trực quan, thao tác nhanh trên mobile Android và Desktop.
   - Xem lại lịch sử các ngày trước theo tài khoản cá nhân.
6. **Bảo mật Multi-Tenant**:
   - Supabase Row Level Security (RLS) bảo mật dữ liệu tuyệt đối giữa các user.

---

## 🚀 Hướng dẫn Cài đặt & Phát triển Local

### 1. Chuẩn bị Môi trường
- Node.js >= 18
- pnpm hoặc npm

### 2. Cấu hình Supabase Project
1. Đăng nhập vào [Supabase Console](https://supabase.com) và tạo một project mới.
2. Mở **SQL Editor** trong Supabase Dashboard và chạy lần lượt các script trong thư mục `supabase/migrations/`:
   - `01_schema.sql`: Khởi tạo bảng CSDL & Indexes.
   - `02_rls.sql`: Bật Row Level Security và cài đặt quy tắc cách ly dữ liệu.
   - `03_seed_default_template.sql`: Cài đặt trigger tự động tạo Profile & Default Template khi user đăng ký.
3. Vào **Project Settings -> API** để lấy `URL` và `anon public key`.

### 3. Cài đặt Biến Môi Trường (`.env.local`)
Tạo tệp `.env.local` ở thư mục gốc dự án dựa trên `.env.example`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

### 4. Chạy Ứng Dụng ở Local
```bash
pnpm install
pnpm dev
```
Truy cập ứng dụng tại `http://localhost:3000`.

---

## 🧪 Kiểm thử (Testing)

Chạy bộ kiểm thử tự động với Vitest:
```bash
pnpm test
```

Kiểm tra TypeScript & Linting:
```bash
npx tsc --noEmit
pnpm lint
```

Build sản phẩm cho Production:
```bash
pnpm build
```

---

## 🌐 Deploy lên Vercel

1. Push mã nguồn lên repository trên GitHub.
2. Đăng nhập vào [Vercel](https://vercel.com) và chọn **Import Project**.
3. Thêm các Environment Variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Bấm **Deploy**.
