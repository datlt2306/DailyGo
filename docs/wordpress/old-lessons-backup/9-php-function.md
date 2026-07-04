# Làm quen với hàm trong WordPress: 

Chào các em, hôm nay thầy sẽ hướng dẫn các em làm quen với **hàm** – một trong những khái niệm quan trọng nhất trong PHP và WordPress. Đừng lo lắng, thầy sẽ giải thích từng bước một cách dễ hiểu để các em có thể tự tin sử dụng hàm trong quá trình phát triển WordPress. Nào, cùng bắt đầu nhé!


## Hàm là gì?

Hàm là một đoạn mã được định nghĩa để thực hiện một nhiệm vụ cụ thể. Các em có thể nghĩ hàm như một công thức, nơi chúng ta định nghĩa cách thực hiện một hành động và sau đó có thể tái sử dụng công thức đó nhiều lần.


## Tạo hàm PHP cơ bản

### 1. Định nghĩa hàm
- Mở tệp `index.php` trong thư mục chủ đề của các em.
- Thêm đoạn mã sau để tạo một hàm:
```php
<?php
function myFirstFunction() {
    echo "<p>Xin chào, đây là hàm đầu tiên của tôi!</p>";
}
```

### 2. Gọi hàm
- Để chạy hàm, chỉ cần gọi tên hàm:
```php
<?php
myFirstFunction();
```

### 3. Kết quả
- Lưu tệp và làm mới trang web. Các em sẽ thấy dòng chữ: **"Xin chào, đây là hàm đầu tiên của tôi!"**


## Sử dụng tham số trong hàm

### 1. Định nghĩa hàm với tham số
- Thêm tham số để hàm linh hoạt hơn:
```php
<?php
function greet($name, $color) {
    echo "<p>Xin chào, tên tôi là $name và màu yêu thích của tôi là $color.</p>";
}
```

### 2. Gọi hàm với đối số
- Truyền giá trị vào hàm:
```php
<?php
greet("John", "xanh");
greet("Jane", "xanh lá");
```

### 3. Kết quả
- Lưu tệp và làm mới trang web. Các em sẽ thấy:
  - **"Xin chào, tên tôi là John và màu yêu thích của tôi là xanh."**
  - **"Xin chào, tên tôi là Jane và màu yêu thích của tôi là xanh lá."**


## Hàm WordPress tích hợp

WordPress cung cấp rất nhiều hàm tích hợp sẵn để các em sử dụng. Dưới đây là một vài ví dụ:

### 1. Hiển thị tên trang web
- Sử dụng hàm `bloginfo()` để lấy tên trang web:
```php
<h1><?php bloginfo('name'); ?></h1>
```

### 2. Hiển thị khẩu hiệu trang web
- Sử dụng hàm `bloginfo()` để lấy khẩu hiệu:
```php
<p><?php bloginfo('description'); ?></p>
```

### 3. Kết quả
- Lưu tệp và làm mới trang web. Tên và khẩu hiệu của trang web sẽ tự động hiển thị.


## Tóm tắt nhanh

- **Hàm**: Đoạn mã thực hiện một nhiệm vụ cụ thể, có thể tái sử dụng nhiều lần.
- **Tham số**: Biến trong hàm để nhận giá trị từ đối số.
- **Hàm WordPress**: Các hàm tích hợp như `bloginfo()` giúp lấy thông tin trang web.


Hy vọng bài viết này giúp các em hiểu rõ hơn về hàm trong PHP và WordPress. Trong bài học tiếp theo, chúng ta sẽ khám phá **mảng** – một khái niệm quan trọng để hiển thị nội dung động như bài đăng và trang. Hãy chuẩn bị tinh thần, chúng ta sẽ bắt đầu ngay thôi! 🎉