# Quyền file và thư mục trong WordPress: Hướng dẫn từ Thầy Đạt

Chào các em, hôm nay thầy sẽ hướng dẫn các em về quyền file và thư mục trong WordPress. Đây là một phần quan trọng để bảo vệ website của các em khỏi các nguy cơ bảo mật. Nào, cùng tìm hiểu nhé!

---

## Quyền file và thư mục là gì?

### Định nghĩa
Quyền file và thư mục xác định ai có thể:
- **Đọc**: Xem nội dung file hoặc thư mục.
- **Ghi**: Thay đổi hoặc ghi đè nội dung.
- **Xóa**: Xóa file hoặc thư mục.

### Tầm quan trọng
Thiết lập quyền đúng cách giúp bảo vệ website khỏi việc bị truy cập trái phép hoặc bị thay đổi bởi hacker.

---

## Quyền được khuyến nghị

### Quyền cho thư mục
- **755**: Cho phép chủ sở hữu đọc, ghi, thực thi. Người khác chỉ được đọc và thực thi.
- **750**: Tương tự như 755, nhưng hạn chế quyền truy cập của nhóm.

### Quyền cho file
- **644**: Cho phép chủ sở hữu đọc và ghi. Người khác chỉ được đọc.
- **640**: Tương tự như 644, nhưng hạn chế quyền truy cập của nhóm.

### Quyền cho file `wp-config.php`
- **644**: Quyền mặc định, cho phép chủ sở hữu đọc và ghi.
- **600**: Tăng cường bảo mật, chỉ cho phép chủ sở hữu đọc và ghi.

> **Lưu ý:** Dù sử dụng 755/644 hay 750/640, cả hai đều đảm bảo bảo mật tốt cho website.

---

## Có cần thiết lập quyền thủ công?

### Lời khuyên của thầy
Nếu các em cài đặt WordPress bằng công cụ như **Softaculous**, quyền file và thư mục thường được thiết lập đúng cách. Các em không cần thay đổi gì thêm.

### Sử dụng plugin bảo mật
Trong khóa học này, thầy sẽ hướng dẫn các em sử dụng **All In One Security Plugin**. Plugin này sẽ tự động kiểm tra và sửa các quyền file và thư mục nếu cần thiết.

---

## Tóm tắt nhanh

- **Quyền thư mục**: 755 hoặc 750.
- **Quyền file**: 644 hoặc 640.
- **Quyền `wp-config.php`**: 644 hoặc 600.
- **Không cần thiết lập thủ công** nếu cài đặt WordPress đúng cách.
- **Sử dụng plugin bảo mật** để kiểm tra và sửa quyền file nếu cần.

---

Hy vọng bài hướng dẫn này giúp các em hiểu rõ hơn về quyền file và thư mục trong WordPress. Nếu có thắc mắc, các em cứ hỏi thầy nhé! Chúc các em thành