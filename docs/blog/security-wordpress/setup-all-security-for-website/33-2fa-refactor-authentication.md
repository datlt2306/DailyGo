# Kích hoạt xác thực hai yếu tố trong plugin "All In One Security": Từ Thầy Đạt

Chào các em, hôm nay thầy sẽ hướng dẫn các em cách kích hoạt **xác thực hai yếu tố (two-factor authentication)** để tăng cường bảo mật cho website WordPress. Đây là một tính năng mạnh mẽ giúp bảo vệ tài khoản khỏi các cuộc tấn công. Nào, cùng bắt đầu nhé!

---

## Cài đặt xác thực hai yếu tố

### 1. **Cài đặt toàn cục**
- Vào **Settings** > **Two Factor Authentication**.
- **Chọn đối tượng**:
  - Mặc định: Tất cả người dùng.
  - Có thể giới hạn cho **Administrator** hoặc các vai trò cụ thể.
- **Xml-rpc Requests**:
  - Tắt theo mặc định (không cần bật trừ khi các em biết mình cần).
- **Default Algorithm**:
  - Chọn **Time-based** (mặc định).
- **Encrypt Keys in Database**:
  - Bật để mã hóa các khóa trong cơ sở dữ liệu (không thể tắt sau khi bật).

> **Lưu ý:** Nhấn **Save Changes** sau khi thực hiện các thay đổi.

---

### 2. **Cài đặt cá nhân**
- Vào **WP Security** > **Two Factor Authentication**.
- **Kích hoạt**:
  - Nhấn **Enable** và lưu cài đặt.
- **QR Code**:
  - Sử dụng ứng dụng như **Google Authenticator** trên điện thoại để quét mã QR.
  - Ứng dụng sẽ liên kết với website và hiển thị mã OTP (One-Time Password).

---

## Quy trình đăng nhập với xác thực hai yếu tố

1. Truy cập trang đăng nhập WordPress.
2. Nhập **username** và **password** như bình thường.
3. Nhập mã OTP từ ứng dụng trên điện thoại.
4. Nhấn **Enter** để truy cập dashboard.

---

## Tắt xác thực hai yếu tố

- Vào **WP Security** > **Two Factor Authentication**.
- Nhấn **Disable** và lưu cài đặt.

---

## Tóm tắt nhanh

- **Cài đặt toàn cục**: Chọn đối tượng và cấu hình thuật toán.
- **Cài đặt cá nhân**: Kích hoạt xác thực và quét mã QR bằng ứng dụng di động.
- **Quy trình đăng nhập**: Nhập mã OTP từ ứng dụng để truy cập.
- **Tắt xác thực**: Có thể vô hiệu hóa khi cần.

---

Hy vọng bài hướng dẫn này giúp các em hiểu rõ hơn về cách kích hoạt xác thực hai yếu tố trong plugin **All In One Security**. Nếu có thắc mắc, các em cứ hỏi thầy nhé! Chúc các em thành công!