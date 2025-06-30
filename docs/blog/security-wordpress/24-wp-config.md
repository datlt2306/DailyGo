# Bảo mật file `wp-config.php` trong WordPress: 

Chào các em, hôm nay thầy sẽ hướng dẫn các em cách bảo vệ file `wp-config.php` – một trong những file quan trọng nhất của WordPress. File này chứa thông tin nhạy cảm như:
- **Tên cơ sở dữ liệu**.
- **Tên người dùng cơ sở dữ liệu**.
- **Mật khẩu cơ sở dữ liệu**.
- **WordPress Security Keys**.

Nếu hacker truy cập được file này, họ có thể phá hoại website của các em. Vì vậy, việc bảo mật file `wp-config.php` là rất quan trọng. Nào, cùng tìm hiểu nhé!


## Các cách bảo vệ file `wp-config.php`

### Di chuyển file `wp-config.php`
Một số người khuyên nên di chuyển file `wp-config.php` lên thư mục phía trên nơi WordPress được cài đặt. Điều này có thể giúp bảo vệ file khỏi bị truy cập trực tiếp. Tuy nhiên, cách này vẫn còn gây tranh cãi và không phải lúc nào cũng cần thiết.

### Sử dụng `.htaccess` để chặn truy cập
Một cách hiệu quả hơn là sử dụng file `.htaccess` để chặn truy cập vào file `wp-config.php`. File `.htaccess` nằm ở thư mục gốc của website WordPress và được đọc đầu tiên trước khi website tải.

#### Cách thực hiện
1. Mở file `.htaccess` trong thư mục gốc của WordPress.
2. Thêm đoạn mã sau vào đầu file:
   ```apache
   # Bảo vệ file wp-config.php
   <Files wp-config.php>
       Order Allow,Deny
       Deny from all
   </Files>
   ```
3. Lưu file `.htaccess`.

> **Lưu ý:** Nếu không thấy file `.htaccess`, có thể nó đang bị ẩn. Các em cần bật hiển thị file ẩn trong FTP hoặc hệ điều hành.


## Có nên bảo vệ file `wp-config.php`?

### Lời khuyên của thầy
Thầy nghĩ rằng các biện pháp bảo mật khác mà chúng ta sẽ thiết lập trong khóa học này sẽ đủ để bảo vệ file `wp-config.php`. Tuy nhiên, nếu các em muốn tăng cường bảo mật, việc thêm đoạn mã vào file `.htaccess` là một lựa chọn tốt.


## Tóm tắt nhanh

- **File `wp-config.php`** chứa thông tin nhạy cảm, cần được bảo vệ.
- **Di chuyển file** hoặc sử dụng `.htaccess` để chặn truy cập là hai cách phổ biến.
- **Thêm mã vào `.htaccess`** để bảo vệ file khỏi bị truy cập trực tiếp.


Hy vọng bài hướng dẫn này giúp các em hiểu rõ hơn về cách bảo mật file `wp-config.php`. Nếu có thắc mắc, các em cứ hỏi thầy nhé! Chúc các em thành công! 🎉