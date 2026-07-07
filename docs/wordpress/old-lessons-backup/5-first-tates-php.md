# Làm quen với PHP trong WordPress: 

## Giới thiệu

Chào các em, hôm nay thầy sẽ hướng dẫn các em làm quen với PHP – ngôn ngữ cốt lõi của WordPress. Đừng lo lắng nếu các em chưa từng làm việc với ngôn ngữ lập trình trước đây, thầy trò mình sẽ cùng nhau vượt qua từng bước một cách dễ dàng.

### PHP là gì và tại sao nó quan trọng?
PHP (Hypertext Preprocessor) là một ngôn ngữ lập trình phía máy chủ (server-side), được sử dụng để tạo các trang web động. Trong WordPress, PHP đóng vai trò trung tâm, giúp:
- **Tương tác với cơ sở dữ liệu**: Lấy dữ liệu bài đăng, người dùng, và các thông tin khác.
- **Xử lý logic**: Tạo điều kiện, vòng lặp, và các thao tác phức tạp.
- **Kết hợp với HTML**: Hiển thị nội dung động trên giao diện người dùng.

## Mục tiêu bài học

- Làm quen với cú pháp cơ bản của PHP.
- Hiểu cách PHP hoạt động trong WordPress.
- Tạo một tệp PHP thử nghiệm để thực hành.

## Thiết lập môi trường làm việc

### 1. Tìm thư mục WordPress
Để làm việc với PHP trong WordPress, các em cần tìm thư mục chứa các tệp hệ thống của WordPress:
- Nếu các em sử dụng **Local by Flywheel**, nhấp chuột phải vào trang web của mình và chọn **Show in Finder** (Mac) hoặc **Open Folder** (Windows).
- Điều hướng đến thư mục `app/public`, nơi chứa các tệp hệ thống WordPress.

### 2. Cài đặt trình soạn thảo văn bản
Thầy khuyên các em sử dụng **Visual Studio Code** – một trình soạn thảo văn bản miễn phí và mạnh mẽ:
1. Tìm kiếm "Visual Studio Code" trên trình duyệt.
2. Tải xuống và cài đặt từ [code.visualstudio.com](https://code.visualstudio.com).
3. Mở Visual Studio Code và tạo một tệp mới.

## Tạo tệp PHP thử nghiệm

### 1. Tạo tệp mới
- Trong Visual Studio Code, tạo một tệp mới và nhập nội dung sau:
```php
// filepath: /Users/ken/Folders/Projects/polytuts-5/app/public/test.php
<?php
echo "Hello, WordPress!";
```

### 2. Lưu tệp
- Lưu tệp vào thư mục `app/public` với tên `test.php`.

### 3. Xem tệp trong trình duyệt
- Mở trình duyệt và truy cập URL của trang web cục bộ, thêm `/test.php` vào cuối.
- Ví dụ: `http://localhost/test.php`.

## Làm quen với cú pháp PHP

### 1. Xuất nội dung ra trang
PHP sử dụng lệnh `echo` để hiển thị nội dung trên trình duyệt:
```php
// filepath: /Users/ken/Folders/Projects/polytuts-5/app/public/test.php
<?php
echo 2 + 2; // Kết quả: 4
```
- **Giải thích**: Lệnh `echo` xuất kết quả của phép tính `2 + 2` ra màn hình.

### 2. Kết hợp PHP và HTML
PHP có thể được nhúng trực tiếp vào HTML để tạo nội dung động:
```php
// filepath: /Users/ken/Folders/Projects/polytuts-5/app/public/test.php
<h1><?php echo "Trang này là tất cả về Thầy Đạt"; ?></h1>
```
- **Giải thích**: PHP được sử dụng để xuất nội dung động bên trong thẻ HTML `<h1>`.

### 3. Sử dụng biến
Biến trong PHP giúp lưu trữ dữ liệu và tái sử dụng ở nhiều nơi:
```php
// filepath: /Users/ken/Folders/Projects/polytuts-5/app/public/test.php
<?php
$name = "Thầy Đạt";
?>
<h1>Trang này là tất cả về <?php echo $name; ?></h1>
<h2>Học WordPress cùng <?php echo $name; ?></h2>
```
- **Giải thích**: Biến `$name` lưu trữ giá trị `"Thầy Đạt"` và được sử dụng để hiển thị nội dung động.

## Xóa tệp thử nghiệm

Sau khi hoàn thành bài học, các em có thể xóa tệp `test.php` để giữ cho thư mục WordPress gọn gàng. Nếu muốn giữ lại để tham khảo, cũng không sao.

## Tóm tắt nhanh

- **PHP**: Ngôn ngữ cốt lõi của WordPress, giúp tạo các trang web động.
- **Visual Studio Code**: Trình soạn thảo văn bản miễn phí và mạnh mẽ.
- **Tệp thử nghiệm**: Tạo tệp PHP để thực hành cú pháp cơ bản.
- **Xóa tệp**: Dọn dẹp thư mục sau khi hoàn thành bài học.

Hy vọng bài viết này giúp các em làm quen với PHP một cách dễ dàng. Trong bài học tiếp theo, thầy trò mình sẽ bắt đầu viết mã để tạo chủ đề WordPress tùy chỉnh. Hãy chuẩn bị tinh thần, thầy trò mình sẽ bắt đầu ngay thôi! 🎉
