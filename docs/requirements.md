# DailyGo - Requirements Specification

## 1. Overview
DailyGo là ứng dụng personal daily planner giúp người dùng lập kế hoạch, quản lý và theo dõi công việc hàng ngày. Ứng dụng hỗ trợ đa người dùng (multi-tenant) với tính độc lập hoàn toàn giữa các bản snapshot daily checklist theo ngày và cấu hình template cá nhân.

## 2. Target Audience & System Goals
- **Đối tượng**: Cá nhân, gia đình, người đi làm, học sinh/sinh viên. Không hard-code giao diện hay tính năng cho bất kỳ đối tượng đơn lẻ nào.
- **Mục tiêu**:
  - Giúp người dùng hình thành thói quen lập kế hoạch ngày mới (cho hôm nay hoặc ngày mai).
  - Cung cấp checklist hàng ngày linh hoạt, cá nhân hóa.
  - Theo dõi tiến độ hoàn thành công việc theo từng ngày và lịch sử.
  - Bảo mật tuyệt đối dữ liệu giữa các tài khoản người dùng khác nhau.

## 3. Key Concepts
- **Template (Khuôn mẫu)**: Dùng để sinh ra daily checklist mặc định cho các ngày mới. Bao gồm danh mục (Categories) và các mục công việc (Items) với loại dữ liệu tương ứng (`checkbox`, `duration`, `text`).
- **Daily Checklist (Snapshot độc lập)**: Bản chụp dữ liệu công việc dành cho một ngày cụ thể (`user_id`, `local_date`). Khi đã được tạo, daily checklist tách rời hoàn toàn khỏi Template. Việc sửa đổi Template sau đó sẽ KHÔNG làm ảnh hưởng đến các daily checklist đã tạo trong quá khứ hay tương lai. Việc sửa một daily checklist ngày X sẽ KHÔNG ảnh hưởng đến ngày Y.

## 4. Functional Requirements

### 4.1 Authentication & Profile
- **Đăng ký / Đăng nhập / Đăng xuất**: Sử dụng Email & Password qua Supabase Auth.
- **Tự động khởi tạo**: Ngay khi đăng ký tài khoản thành công, hệ thống tự động khởi tạo bản ghi `profile` và bộ `default template`.
- **Profile Management**: Quản lý `display_name`, `email`, `timezone` (mặc định `Asia/Ho_Chi_Minh`).

### 4.2 Template Management (Cấu hình checklist)
- Cho phép người dùng chỉnh sửa hoàn toàn Template:
  - Thêm, sửa, xóa danh mục (Category).
  - Thêm, sửa, xóa, bật/tắt (enable/disable) item.
  - Thay đổi thứ tự (sort order) của danh mục và item.
  - Thay đổi loại item (`checkbox`, `duration`, `text`).
- Template mặc định ban đầu:
  1. 📚 Công việc & học tập
     - Hoàn thành công việc/bài tập (checkbox)
     - Ôn tập / học tập (checkbox)
     - Chuẩn bị cho ngày mai (checkbox)
     - Việc quan trọng khác (checkbox)
  2. 🏠 Cá nhân & gia đình
     - Việc nhà (text)
     - Việc nhà (text)
     - Dọn phòng / bàn làm việc (checkbox)
     - Vận động / chơi thể thao (duration)
     - Đọc sách (duration)
  3. 🎮 Giải trí
     - Game / giải trí (duration)
  4. 🌙 Cuối ngày
     - Kiểm tra checklist (checkbox)
     - Chuẩn bị cho ngày mai (checkbox)
     - Đi ngủ đúng giờ (checkbox)

### 4.3 Item Types
Hệ thống hỗ trợ tối thiểu 3 loại item:
1. `CHECKBOX`: Đánh dấu hoàn thành / chưa hoàn thành (VD: Hoàn thành công việc).
2. `DURATION`: Nhập số phút / thời lượng (VD: Đọc sách: 30 phút, Vận động: 45 phút, Game: 60 phút).
3. `TEXT`: Nhập nội dung văn bản cụ thể (VD: Việc nhà: Đổ rác, Gấp quần áo).

Architecture phải có thiết kế mở để dễ dàng mở rộng thêm các `item_type` mới trong tương lai.

### 4.4 Plan Tomorrow (Lập kế hoạch ngày mai)
- Nạp danh sách item từ Template hiện tại làm bản nháp.
- Người dùng có thể tùy chỉnh bản nháp cho ngày mai:
  - Thêm/xóa task phát sinh.
  - Sửa tiêu đề, loại task, thứ tự.
  - Nhập thời lượng đọc sách, vận động, giải trí...
  - Nhập chi tiết công việc nhà (không giới hạn số lượng task việc nhà).
- Khi bấm "Lưu kế hoạch", lưu thành một bản `daily_checklist` hoàn chỉnh cho ngày mai.
- Nếu kế hoạch ngày mai đã tồn tại trước đó, mở giao diện chỉnh sửa thay vì tạo bản ghi trùng lặp.

### 4.5 Today (Giao diện chính Hôm nay)
- Hiển thị ngày hôm nay theo chuẩn timezone của người dùng.
- Hiển thị tiến độ hoàn thành (%) tổng quan.
- Hiển thị công việc được nhóm theo từng danh mục.
- Cho phép toggle checkbox hoặc nhập/chỉnh sửa giá trị `duration`/`text` trực tiếp với phản hồi UI tức thì và đồng bộ DB.
- Trạng thái chưa lập kế hoạch: Hiển thị Empty state hướng dẫn kèm nút "Lập kế hoạch ngay".

### 4.6 History (Lịch sử)
- Danh sách lịch sử các ngày trong quá khứ.
- Hiển thị: Ngày, % hoàn thành, số task đã hoàn thành / tổng số task.
- Click chọn ngày: Xem lại toàn bộ daily checklist snapshot của ngày đó.
- Đảm bảo người dùng chỉ xem được lịch sử của chính mình.

### 4.7 Settings & Personalization
- Quản lý thông tin tài khoản (Tên hiển thị, timezone, email).
- Lối tắt truy cập cấu hình checklist template.
- Đăng xuất an toàn.

## 5. Non-Functional Requirements
- **Security & Multi-Tenant Isolation**: Bắt buộc cài đặt Supabase Row Level Security (RLS) trên tất cả các bảng. User A tuyệt đối không xem hay chỉnh sửa được dữ liệu của User B.
- **Timezone Precision**: Xử lý `local_date` (YYYY-MM-DD) chính xác theo timezone người dùng cài đặt, đặc biệt lưu ý ranh giới nửa đêm (23:xx -> 00:xx).
- **Responsive & Mobile First**: Ưu tiên hiển thị mượt mà trên mobile Android (360px, 390px, 430px) và desktop responsive layout, touch target lớn, nút bấm dễ sử dụng.
- **Performance**: Phản hồi UI tức thì khi tương tác (optimistic UI update hoặc Server Actions nhanh).
