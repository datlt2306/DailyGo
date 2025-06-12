# Tắt báo cáo lỗi PHP trong WordPress: Bảo vệ thông tin nhạy cảm của website

Chào các em, hôm nay thầy sẽ hướng dẫn các em cách tắt báo cáo lỗi PHP trong WordPress để bảo vệ thông tin nhạy cảm của website. Báo cáo lỗi PHP có thể hiển thị thông tin như đường dẫn server, và đây là điều mà các em không muốn hacker nhìn thấy.

## Tại sao cần tắt báo cáo lỗi PHP?

WordPress sử dụng rất nhiều file PHP, và các plugin, theme cũng có thể thêm mã PHP vào hệ thống. Khi có lỗi xảy ra, báo cáo lỗi PHP thường hiển thị trực tiếp trên màn hình, không chỉ cho các em mà còn cho bất kỳ ai truy cập vào website. Những thông tin này có thể bao gồm:
- Đường dẫn server.
- Các thông tin nhạy cảm khác.

Hacker có thể lợi dụng những thông tin này để tấn công website của các em. Vì vậy, việc tắt báo cáo lỗi là một biện pháp bảo mật cần thiết.

## Cách tắt báo cáo lỗi PHP

### 1. Mở file `wp-config.php`
- Truy cập vào server của các em qua FTP hoặc trình quản lý file của hosting.
- Tìm file `wp-config.php` trong thư mục gốc của WordPress.

### 2. Thêm dòng mã để tắt báo cáo lỗi
- Tìm dòng mở đầu của file:
```php
<?php
```
- Thêm dòng sau ngay bên dưới:
```php
// Tắt báo cáo lỗi PHP
error_reporting(0);
```

### 3. Lưu file
- Lưu lại file `wp-config.php`.
- Báo cáo lỗi PHP sẽ không còn hiển thị trên website.

### 4. Kích hoạt lại báo cáo lỗi khi cần
Nếu các em cần kiểm tra lỗi để sửa chữa, có thể tạm thời bật lại báo cáo lỗi bằng cách thay đổi tham số trong dòng mã:
```php
error_reporting(E_ALL); // Hiển thị tất cả lỗi
```
Sau khi sửa lỗi xong, hãy tắt báo cáo lỗi lại bằng cách đổi về `error_reporting(0)`.

## Các tham số của `error_reporting`

Tham số `error_reporting` có thể được tùy chỉnh để hiển thị hoặc tắt một số loại lỗi cụ thể:
- `0`: Tắt tất cả báo cáo lỗi.
- `E_ALL`: Hiển thị tất cả lỗi.
- `E_ERROR`: Chỉ hiển thị lỗi nghiêm trọng.
- `E_WARNING`: Hiển thị cảnh báo.

Các em có thể tham khảo thêm tài liệu PHP để biết chi tiết về các tham số này.

## Tóm tắt nhanh

- Báo cáo lỗi PHP có thể hiển thị thông tin nhạy cảm, dễ bị hacker lợi dụng.
- Thêm dòng `error_reporting(0);` vào file `wp-config.php` để tắt báo cáo lỗi.
- Kích hoạt lại báo cáo lỗi khi cần sửa chữa bằng cách thay đổi tham số.
- Sử dụng tham số phù hợp để tùy chỉnh loại lỗi hiển thị.

Hãy áp dụng ngay để bảo vệ website của các em khỏi những nguy cơ không đáng có nhé!
