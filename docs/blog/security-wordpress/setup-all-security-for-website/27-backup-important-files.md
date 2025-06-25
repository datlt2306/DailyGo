# Sao lưu các file quan trọng trong WordPress: Hướng dẫn từ Thầy Đạt

Chào các em, hôm nay thầy sẽ hướng dẫn các em cách sao lưu các file quan trọng của website WordPress trước khi thiết lập các biện pháp bảo mật. Việc sao lưu này rất cần thiết để đảm bảo các em có thể khôi phục lại website nếu gặp sự cố. Nào, cùng bắt đầu nhé!

---

## Các file cần sao lưu

### 1. Cơ sở dữ liệu (Database)
Cơ sở dữ liệu chứa toàn bộ nội dung và cấu trúc của website. Để sao lưu cơ sở dữ liệu:
1. Cài đặt plugin **UpdraftPlus** (nếu chưa cài đặt).
2. Sử dụng plugin để tạo bản sao lưu cơ sở dữ liệu.
3. Lưu bản sao lưu vào máy tính hoặc dịch vụ lưu trữ đám mây.

> **Lưu ý:** Các em có thể thiết lập lịch sao lưu tự động bằng UpdraftPlus để đảm bảo dữ liệu luôn được bảo vệ.

---

### 2. File `.htaccess`
File `.htaccess` chứa các quy tắc cấu hình máy chủ và bảo mật. Để sao lưu:
1. Vào **WP Security** > **Settings**.
2. Nhấn nút **Backup .htaccess**.
3. Lưu file `.htaccess` vào máy tính.

> **Mẹo nhỏ:** Sau khi sao lưu, các em có thể mở file để kiểm tra nội dung.

---

### 3. File `wp-config.php`
File `wp-config.php` chứa thông tin nhạy cảm như tên cơ sở dữ liệu, tên người dùng, mật khẩu, và các khóa bảo mật. Để sao lưu:
1. Vào **WP Security** > **Settings**.
2. Nhấn nút **Backup wp-config.php**.
3. Lưu file `wp-config.php` vào máy tính.

---

## Khôi phục file khi cần thiết

### Khôi phục `.htaccess` và `wp-config.php`
1. Vào **WP Security** > **Settings**.
2. Chọn **Restore .htaccess** hoặc **Restore wp-config.php**.
3. Nhấn **Choose File** và tải lên file đã sao lưu.

### Khôi phục cơ sở dữ liệu
Sử dụng plugin **UpdraftPlus** để khôi phục bản sao lưu cơ sở dữ liệu.

---

## Lưu ý quan trọng

- **Có thể bị khóa**: Khi thiết lập các biện pháp bảo mật, có khả năng các em bị khóa khỏi website. Trong bài học tiếp theo, thầy sẽ hướng dẫn cách reset plugin bảo mật để khôi phục quyền truy cập.
- **Sao lưu định kỳ**: Luôn sao lưu các file quan trọng trước khi thực hiện bất kỳ thay đổi nào.

---

## Tóm tắt nhanh

- **Sao lưu cơ sở dữ liệu** bằng plugin UpdraftPlus.
- **Sao lưu `.htaccess` và `wp-config.php`** bằng tính năng của plugin All In One Security.
- **Khôi phục file** khi cần thiết thông qua plugin hoặc tính năng tải lên.

---

Hy vọng bài hướng dẫn này giúp các em bảo vệ website WordPress một cách an toàn. Nếu có thắc mắc, các em cứ hỏi thầy nhé! Chúc các em thành công!