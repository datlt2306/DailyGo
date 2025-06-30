# Tạo chủ đề WordPress tùy chỉnh: 

## Giới thiệu

Chào các em, hôm nay thầy sẽ hướng dẫn các em cách tạo một chủ đề WordPress hoàn toàn mới từ đầu. Đừng lo lắng, nghe có vẻ phức tạp nhưng thực tế rất đơn giản. Thầy sẽ hướng dẫn từng bước để các em có thể tự tin tạo chủ đề của riêng mình.

### Tại sao cần tạo chủ đề tùy chỉnh?
- **Kiểm soát giao diện**: Chủ đề tùy chỉnh cho phép các em kiểm soát hoàn toàn giao diện và chức năng của website.
- **Học cách làm việc với WordPress**: Tạo chủ đề từ đầu giúp các em hiểu rõ cách WordPress hoạt động.
- **Tùy chỉnh theo nhu cầu**: Các em có thể thêm các tính năng độc đáo mà chủ đề có sẵn không cung cấp.


## Mục tiêu bài học

- Tạo một chủ đề WordPress cơ bản.
- Hiểu cách các tệp như `index.php` và `style.css` hoạt động trong chủ đề.
- Kích hoạt chủ đề và kiểm tra kết quả.


## Bắt đầu với bảng điều khiển WordPress

### 1. Truy cập bảng điều khiển
- Mở trình duyệt và truy cập trang web WordPress cục bộ của các em.
- Thêm `/wp-admin` vào cuối URL để vào bảng điều khiển.
- Đăng nhập bằng tên người dùng và mật khẩu.

### 2. Khám phá tab Giao diện
- Vào **Appearance** > **Themes** để xem danh sách các chủ đề hiện có.
- Thay vì sử dụng chủ đề có sẵn, chúng ta sẽ tạo một chủ đề hoàn toàn mới.


## Tạo thư mục chủ đề

### 1. Tìm thư mục chủ đề
Để WordPress nhận diện chủ đề mới, các em cần tạo một thư mục trong `wp-content/themes`. Đây là nơi chứa tất cả các chủ đề của website.

- Điều hướng đến thư mục hệ thống WordPress:
  - **Local by Flywheel**: Nhấp chuột phải vào trang web > **Show in Finder** (Mac) hoặc **Open Folder** (Windows).
  - Đi đến `app/public/wp-content/themes`.

### 2. Tạo thư mục mới
- Tạo một thư mục mới trong `themes` và đặt tên là `fictional-university-theme`.


## Tạo các tệp cần thiết

### 1. Tạo tệp `index.php`
Tệp `index.php` là tệp chính của chủ đề, nơi WordPress sẽ tìm kiếm để hiển thị nội dung.

- Mở thư mục `fictional-university-theme` trong **Visual Studio Code**.
- Tạo tệp mới tên là `index.php` và thêm nội dung sau:
```php
// filepath: /Users/ken/Folders/Projects/polytuts-5/wp-content/themes/fictional-university-theme/index.php
<?php
echo "Đây là chủ đề tùy chỉnh tuyệt vời của chúng tôi!";
```
- **Giải thích**: Lệnh `echo` hiển thị nội dung "Đây là chủ đề tùy chỉnh tuyệt vời của chúng tôi!" trên trình duyệt.

### 2. Tạo tệp `style.css`
Tệp `style.css` là nơi chứa thông tin về chủ đề và định dạng giao diện.

- Tạo tệp mới tên là `style.css` và thêm nội dung sau:
```css
/* 
Theme Name: Fictional University
Author: Thầy Đạt
Version: 1.0
*/
```
- **Giải thích**: Phần comment này cung cấp thông tin về chủ đề, bao gồm tên, tác giả, và phiên bản.


## Thêm ảnh chụp màn hình cho chủ đề

### 1. Tạo ảnh chụp màn hình
- Tìm hoặc tạo một hình ảnh có kích thước **1200x900px**.
- Đặt tên tệp là `screenshot.png`.

### 2. Di chuyển ảnh vào thư mục chủ đề
- Di chuyển tệp `screenshot.png` vào thư mục `fictional-university-theme`.


## Kích hoạt chủ đề

### 1. Làm mới bảng điều khiển
- Quay lại bảng điều khiển WordPress và làm mới trang **Themes**.
- Chủ đề mới của các em sẽ xuất hiện với tên "Fictional University".

### 2. Kích hoạt chủ đề
- Nhấp vào **Activate** để kích hoạt chủ đề.
- Truy cập giao diện người dùng để xem kết quả.


## Xóa các chủ đề không cần thiết

Để giữ cho thư mục chủ đề gọn gàng, các em có thể xóa các chủ đề mặc định như `twentyseventeen`, `twentysixteen`, v.v.

- Quay lại thư mục `themes` và xóa các thư mục của các chủ đề mặc định.
- Làm mới bảng điều khiển để chỉ giữ lại chủ đề tùy chỉnh của các em.


## Tóm tắt nhanh

- **Tạo thư mục chủ đề**: Đặt tên là `fictional-university-theme`.
- **Tạo tệp cần thiết**: `index.php` và `style.css`.
- **Thêm ảnh chụp màn hình**: Đặt tên là `screenshot.png`.
- **Kích hoạt chủ đề**: Làm mới bảng điều khiển và kích hoạt chủ đề mới.


Hy vọng bài viết này giúp các em tự tin tạo chủ đề WordPress của riêng mình. Trong bài học tiếp theo, chúng ta sẽ khám phá các hàm PHP – trung tâm và linh hồn của WordPress. Hãy chuẩn bị tinh thần, chúng ta sẽ bắt đầu ngay thôi!