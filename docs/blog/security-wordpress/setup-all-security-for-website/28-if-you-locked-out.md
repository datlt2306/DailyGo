# Reset plugin "All In One Security" trong WordPress: Hướng dẫn từ Thầy Đạt

Chào các em, hôm nay thầy sẽ hướng dẫn các em cách reset plugin **All In One Security** trong trường hợp các em bị khóa khỏi dashboard hoặc cần bắt đầu lại từ đầu. Đây là một quy trình gồm ba bước đơn giản. Nào, cùng bắt đầu nhé!

---

## Tại sao cần reset plugin?

### Nguyên nhân
- Kích hoạt các tính năng không tương thích với server.
- Cấu hình quá mức dẫn đến bị khóa khỏi dashboard.

### Lưu ý
Uninstall plugin qua dashboard hoặc cPanel không đủ để xóa toàn bộ cài đặt. Plugin lưu trữ các cài đặt trong cơ sở dữ liệu và file `.htaccess`.

---

## Quy trình reset plugin

### Bước 1: Deactivate plugin
Nếu bị khóa khỏi dashboard, các em cần deactivate plugin qua cPanel hoặc FTP.

#### Cách thực hiện
1. Vào **cPanel** > **File Manager**.
2. Điều hướng đến thư mục cài đặt WordPress (thường là `public_html`).
3. Mở thư mục **wp-content/plugins**.
4. Tìm thư mục **all-in-one-wp-security-and-firewall**.
5. Đổi tên thư mục (ví dụ: thêm `-old` vào cuối tên).
6. Plugin sẽ tự động bị deactivate.

---

### Bước 2: Cài đặt plugin reset
1. Tải plugin reset từ trang web **Tips and Tricks HQ**.
2. Vào **Dashboard** > **Plugins** > **Add New**.
3. Nhấn **Upload Plugin**, chọn file plugin reset từ máy tính.
4. Nhấn **Install Now** và **Activate**.

---

### Bước 3: Reset cài đặt
1. Vào **Settings** > **All In One Security Plugin Reset**.
2. Nhấn nút **Reset Settings**.
3. Cài đặt của plugin sẽ được xóa hoàn toàn.

---

## Sau khi reset

### Khôi phục plugin
1. Quay lại **File Manager**.
2. Đổi tên thư mục plugin **all-in-one-wp-security-and-firewall** về tên ban đầu.
3. Vào **Dashboard** > **Plugins**, nhấn **Activate** để kích hoạt lại plugin.

### Xóa plugin reset
1. Vào **Dashboard** > **Plugins**.
2. Deactivate plugin reset.
3. Nhấn **Delete** để xóa plugin.

---

## Tóm tắt nhanh

- **Deactivate plugin** qua cPanel hoặc FTP bằng cách đổi tên thư mục.
- **Cài đặt plugin reset** để xóa toàn bộ cài đặt của plugin.
- **Reset cài đặt** và kích hoạt lại plugin để bắt đầu từ đầu.

---

Hy vọng bài hướng dẫn này giúp các em xử lý sự cố với plugin **All In One Security** một cách dễ dàng. Nếu có thắc mắc, các em cứ hỏi thầy nhé! Chúc các em thành công! 🎉