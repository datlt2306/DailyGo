# Tìm hiểu về WordPress Security Keys: 

Chào các em, hôm nay thầy sẽ hướng dẫn các em về **WordPress Security Keys** – một tính năng bảo mật quan trọng giúp mã hóa thông tin cookie và bảo vệ dữ liệu của website. Đây là một phần không thể thiếu trong file cấu hình `wp-config.php`. Nào, cùng tìm hiểu nhé!


## WordPress Security Keys là gì?

### Định nghĩa
WordPress Security Keys là các chuỗi ký tự ngẫu nhiên được sử dụng để mã hóa thông tin cookie trên máy tính của người dùng. Các khóa này bao gồm:
- **AUTH_KEY**
- **SECURE_AUTH_KEY**
- **LOGGED_IN_KEY**
- **NONCE_KEY**

### Lợi ích
- Mã hóa thông tin quan trọng như mật khẩu.
- Tăng cường bảo mật, khiến hacker khó truy cập dữ liệu.


## Cách thiết lập WordPress Security Keys

### Khi cài đặt tự động
Nếu các em cài đặt WordPress bằng công cụ tự động (như Softaculous), các khóa bảo mật sẽ được tạo tự động và thêm vào file `wp-config.php`. Các em không cần làm gì thêm.

### Khi cài đặt thủ công
Nếu các em cài đặt WordPress thủ công qua FTP, các em cần tự tạo các khóa bảo mật. Dưới đây là cách thực hiện:

1. Mở file `wp-config.php` trong thư mục WordPress.
2. Tìm đoạn mã sau:
   ```php
   // ...existing code...
   define('AUTH_KEY',         'put your unique phrase here');
   define('SECURE_AUTH_KEY',  'put your unique phrase here');
   define('LOGGED_IN_KEY',    'put your unique phrase here');
   define('NONCE_KEY',        'put your unique phrase here');
   // ...existing code...
   ```
3. Truy cập trang tạo khóa bảo mật của WordPress: [https://api.wordpress.org/secret-key/1.1/salt/](https://api.wordpress.org/secret-key/1.1/salt/).
4. Sao chép các khóa được tạo và dán vào file `wp-config.php`, thay thế đoạn `put your unique phrase here`.


## Lưu ý quan trọng

- **Không cần nhớ các khóa bảo mật**: Đây là các chuỗi ký tự ngẫu nhiên, chỉ cần lưu trong file `wp-config.php`.
- **Luôn sử dụng khóa bảo mật**: Dù cài đặt tự động hay thủ công, các khóa này giúp tăng cường bảo mật cho website.
- **Mã hóa mật khẩu**: Trong cơ sở dữ liệu MySQL, mật khẩu của các em sẽ được lưu dưới dạng chuỗi mã hóa, khiến hacker khó truy cập.


## Tóm tắt nhanh

- **WordPress Security Keys** giúp mã hóa thông tin cookie và bảo vệ dữ liệu.
- **Cài đặt tự động**: Các khóa được tạo sẵn, không cần thao tác thêm.
- **Cài đặt thủ công**: Tạo khóa tại [https://api.wordpress.org/secret-key/1.1/salt/](https://api.wordpress.org/secret-key/1.1/salt/) và thêm vào file `wp-config.php`.


Hy vọng bài hướng dẫn này giúp các em hiểu rõ hơn về WordPress Security Keys và cách thiết lập chúng. Nếu có thắc mắc, các em cứ hỏi thầy nhé! Chúc các em thành công! 🎉