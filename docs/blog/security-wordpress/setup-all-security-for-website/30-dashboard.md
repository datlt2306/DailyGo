# Hướng dẫn sử dụng Dashboard của plugin "All In One Security": Từ Thầy Đạt

Chào các em, hôm nay thầy sẽ hướng dẫn các em cách sử dụng **Dashboard** của plugin **All In One Security** để quản lý và thiết lập các biện pháp bảo mật cho website WordPress. Đây là nơi các em có thể theo dõi điểm bảo mật, trạng thái các tính năng, và thực hiện các thay đổi cần thiết. Nào, cùng bắt đầu nhé!

---

## Các tab trên Dashboard

### 1. **Security Meter**
- Hiển thị điểm bảo mật hiện tại của website.
- Điểm tối đa là **520**, nhưng không cần thiết phải đạt điểm tối đa (bao gồm cả các tính năng nâng cao).

### 2. **Locked IP Addresses**
- Hiển thị danh sách các IP bị khóa tạm thời hoặc vĩnh viễn do cố gắng truy cập trái phép.

### 3. **Audit Logs**
- Ghi lại các sự kiện gần đây trên website, như đăng nhập, đăng xuất, hoặc đăng ký người dùng.
- Hiển thị IP và thông tin chi tiết của các sự kiện.

### 4. **Debugging**
- Cung cấp thông tin kỹ thuật về WordPress để hỗ trợ xử lý lỗi.

---

## Các tính năng quan trọng trên Dashboard

### 1. **Maintenance Mode**
- Cho phép chuyển website sang chế độ bảo trì.
- Hiển thị thông báo tùy chỉnh cho khách truy cập.
- **Cách kích hoạt**:
  1. Nhập thông báo bảo trì.
  2. Chọn **Enable Maintenance Mode**.
  3. Lưu cài đặt.

---

### 2. **Critical Feature Status**
#### Thay đổi tên người dùng admin
- **Lý do**: Tên "admin" dễ bị hacker tấn công.
- **Cách thực hiện**:
  1. Vào **Critical Feature Status**.
  2. Nhấn **Change Username** và nhập tên mới.
  3. Lưu cài đặt.

#### Login Lockout
- **Chức năng**: Khóa IP sau một số lần đăng nhập thất bại.
- **Cách kích hoạt**:
  1. Vào **User Security** > **Login Lockout**.
  2. Chọn số lần đăng nhập tối đa và thời gian khóa.
  3. Kích hoạt tính năng **Instantly Lock Out Invalid Usernames**.
  4. Lưu cài đặt.

#### File Permissions
- **Chức năng**: Kiểm tra và sửa quyền file.
- **Cách thực hiện**:
  1. Vào **File Permissions**.
  2. Nhấn nút sửa quyền file theo khuyến nghị.

#### Database Prefix
- **Lý do**: Tránh sử dụng tiền tố mặc định `wp_` để tăng cường bảo mật.
- **Cách thực hiện**:
  1. Vào **Database Prefix**.
  2. Sao lưu cơ sở dữ liệu.
  3. Nhấn **Generate New Database Table Prefix** và lưu cài đặt.

#### PHP File Editing
- **Chức năng**: Ngăn chỉnh sửa file PHP trực tiếp từ dashboard.
- **Cách kích hoạt**:
  1. Vào **File Security**.
  2. Kích hoạt tính năng **Disable File Editing**.

#### Hidden WP Meta Information
- **Chức năng**: Ẩn thông tin phiên bản WordPress để tránh bị khai thác.
- **Cách kích hoạt**:
  1. Vào **Hidden WP Meta Information**.
  2. Kích hoạt tính năng và lưu cài đặt.

---

## Lưu ý về tính năng nâng cao

### Renamed Login Page
- **Chức năng**: Đổi URL trang đăng nhập để ngăn truy cập trái phép.
- **Cảnh báo**: Có thể gây xung đột với server hoặc plugin.
- **Lời khuyên**: Chỉ kích hoạt sau khi website chạy ổn định và đã sao lưu cài đặt.

---

## Tóm tắt nhanh

- **Dashboard** là nơi quản lý điểm bảo mật và trạng thái các tính năng.
- **Kích hoạt các tính năng cơ bản** như thay đổi tên admin, login lockout, và ẩn meta thông tin.
- **Cẩn thận với tính năng nâng cao** như đổi URL trang đăng nhập.

---

Hy vọng bài hướng dẫn này giúp các em sử dụng Dashboard của plugin **All In One Security** một cách hiệu quả. Nếu có thắc mắc, các em cứ hỏi thầy nhé! Chúc các em thành công! 🎉