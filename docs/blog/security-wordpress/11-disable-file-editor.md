# Tắt trình chỉnh sửa file trong WordPress: Ngăn chặn hacker phá hoại website của các em

Chào các em, hôm nay thầy sẽ hướng dẫn các em cách tắt trình chỉnh sửa file (file editor) trong WordPress. Đây là một biện pháp bảo mật quan trọng để ngăn hacker chỉnh sửa file trực tiếp trên server nếu họ có quyền truy cập vào dashboard của các em.

## Tại sao cần tắt trình chỉnh sửa file?

Trình chỉnh sửa file trong WordPress cho phép chỉnh sửa trực tiếp các file như theme và plugin. Nếu hacker truy cập được vào dashboard, họ có thể sử dụng trình chỉnh sửa này để thực thi mã độc trên server của các em. Vì vậy, việc tắt trình chỉnh sửa sẽ giúp loại bỏ nguy cơ này.

## Cách tắt trình chỉnh sửa file

### 1. Mở file `wp-config.php`
- Truy cập vào server của các em qua FTP hoặc trình quản lý file của hosting (ví dụ: cPanel).
- Tìm file `wp-config.php` trong thư mục gốc của WordPress.

### 2. Thêm dòng mã để tắt trình chỉnh sửa
- Tìm dòng mở đầu của file:
```php
<?php
```
- Thêm dòng sau ngay bên dưới:
```php
// Tắt trình chỉnh sửa file trong WordPress
define('DISALLOW_FILE_EDIT', true);
```

### 3. Lưu file
- Lưu lại file `wp-config.php`.
- Trình chỉnh sửa file sẽ biến mất khỏi menu **Appearance** trong dashboard.

### 4. Kiểm tra kết quả
- Đăng nhập vào dashboard WordPress.
- Vào menu **Appearance** và kiểm tra xem mục **Editor** đã biến mất hay chưa.

## Lưu ý

- Nếu các em không quen chỉnh sửa file `wp-config.php`, hãy cân nhắc sử dụng sự trợ giúp từ người có kinh nghiệm hoặc nhà cung cấp hosting.
- Biện pháp này không phải là bắt buộc, nhưng nó giúp tăng cường bảo mật nếu các em muốn ngăn hacker chỉnh sửa file trực tiếp.

## Tóm tắt nhanh

- Trình chỉnh sửa file trong WordPress có thể bị hacker lợi dụng để thực thi mã độc.
- Thêm dòng `define('DISALLOW_FILE_EDIT', true);` vào file `wp-config.php` để tắt trình chỉnh sửa.
- Kiểm tra dashboard để đảm bảo mục **Editor** đã biến mất.

Hãy áp dụng ngay để bảo vệ website của các em khỏi những nguy cơ không đáng có nhé!

