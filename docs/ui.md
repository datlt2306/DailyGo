# DailyGo - UI/UX & Responsive Specification

## 1. Design System & Style Guidelines
- **Ngôn ngữ**: 100% tiếng Việt.
- **Phong cách**: Đơn giản, sạch, hiện đại, thân thiện, mobile-first. Phù hợp cho cả người lớn, người đi làm và học sinh.
- **Bảng màu**:
  - Primary: Indigo / Blue (#4F46E5 / #2563EB) mang cảm giác tin cậy và tập trung.
  - Success: Emerald (#10B981) cho các task đã hoàn thành và progress bar.
  - Background: Neutral slate / zinc (#F8FAFC / #FFFFFF).
  - Card/Container: Border mỏng, góc bo nhẹ (rounded-xl / rounded-2xl).

## 2. Navigation Architecture
- **Mobile View (< 768px)**:
  - Bottom Navigation Bar cố định ở đáy màn hình với 4 mục chính:
    1. 📅 **Hôm nay** (`/today`)
    2. 📝 **Lập kế hoạch** (`/plan-tomorrow`)
    3. 📜 **Lịch sử** (`/history`)
    4. ⚙️ **Cài đặt** (`/settings`)
- **Desktop View (≥ 768px)**:
  - Sidebar bên trái màn hình chứa logo DailyGo, avatar/tên người dùng, các mục điều hướng chính và nút Đăng xuất.

## 3. Key Screens & UX Flows

### 3.1 Giao diện Hôm Nay (`/today`)
- Header: Hiển thị Ngày hôm nay (Ví dụ: "Hôm nay - Thứ Hai, 08/09/2026").
- Progress Card: Thanh tiến độ trực quan (%) + số task hoàn thành (VD: "5/10 công việc").
- Categories List:
  - Nhóm các task theo Danh mục (📚 Công việc & học tập, 🏠 Cá nhân & gia đình...).
  - Mỗi Task có:
    - Checkbox kích thước lớn (đường kính tối thiểu 24px) dễ chạm trên Android.
    - Tiêu đề task (gạch ngang và mờ đi khi hoàn thành).
    - Với `duration`: Hiển thị số phút (VD: "30 phút"). Cho phép sửa nhanh.
    - Với `text`: Hiển thị nội dung công việc (VD: "Đổ rác"). Cho phép sửa nhanh.
- Empty State (khi chưa lập kế hoạch):
  - Biểu tượng thân thiện + Câu thông báo: "Bạn chưa lập kế hoạch cho hôm nay."
  - Nút hành động nổi bật: "Lập kế hoạch ngay".

### 3.2 Giao diện Lập Kế Hoạch Ngày Mai (`/plan-tomorrow`)
- Header: "Lập kế hoạch ngày [Ngày mai]".
- Nút "Thêm công việc phát sinh".
- Danh sách các item lấy từ Template:
  - Cho phép chọn/bỏ chọn item cho ngày mai.
  - Nhập thời lượng cho `duration` item.
  - Nhập nội dung chi tiết cho `text` item (VD: nhập loại việc nhà cụ thể).
- Nút lưu chính: "Lưu kế hoạch" ở cuối màn hình hoặc sticky bar.

### 3.3 Giao diện Lịch Sử (`/history`)
- Danh sách các thẻ đại diện cho các ngày trước:
  - Ngày (VD: "Chủ Nhật, 07/09/2026").
  - Tiến độ hoàn thành (%) dạng badge màu sắc.
  - Số lượng task hoàn thành.
- Modal / Sub-view: Click vào thẻ ngày để xem lại danh sách chi tiết các công việc ngày đó.

### 3.4 Giao diện Cấu Hình Template (`/settings/template`)
- Quản lý danh mục (Category) và Item.
- Hỗ trợ đổi vị trí (nút Lên/Xuống hoặc Drag & Drop).
- Toggle Bật/Tắt item trong template.
- Sửa tiêu đề, loại item (`checkbox`, `duration`, `text`).

## 4. Touch Targets & Accessibility Constraints
- Chiều cao tối thiểu của các hàng task: 48px.
- Kích thước checkbox: 24x24px với khoảng cách padding đủ lớn tránh bấm nhầm.
- Đảm bảo hiển thị hoàn hảo không có cuộn ngang (horizontal overflow) trên các độ phân giải: 360px, 390px, 430px, tablet và desktop.
