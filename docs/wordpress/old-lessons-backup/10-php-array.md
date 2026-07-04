# Làm quen với mảng trong PHP: 

## Giới thiệu

Chào các em, hôm nay thầy sẽ hướng dẫn các em làm quen với **mảng** – một khái niệm cực kỳ quan trọng trong PHP và WordPress. Mảng giúp chúng ta lưu trữ nhiều giá trị trong một biến duy nhất, mở ra rất nhiều khả năng thú vị trong lập trình.

### Tại sao cần sử dụng mảng?
- **Quản lý dữ liệu**: Mảng giúp lưu trữ nhiều giá trị liên quan trong một biến duy nhất, thay vì tạo nhiều biến riêng lẻ.
- **Hiệu quả**: Dễ dàng lặp qua các giá trị, thêm, sửa, hoặc xóa mà không cần thay đổi toàn bộ mã.
- **Ứng dụng thực tế**: Trong WordPress, mảng thường được sử dụng để lưu trữ danh sách bài đăng, danh mục, hoặc các tùy chọn cấu hình.


## Mục tiêu bài học

- Hiểu cách tạo và sử dụng mảng trong PHP.
- Lặp qua mảng để hiển thị nội dung.
- Áp dụng mảng vào các tình huống thực tế trong WordPress.


## Tạo mảng trong PHP

### 1. Tạo mảng cơ bản
Mảng trong PHP được tạo bằng cách sử dụng hàm `array()` hoặc cú pháp `[]`. Đây là cách để lưu trữ nhiều giá trị trong một biến duy nhất.

- Mở tệp `index.php` trong thư mục chủ đề của các em.
- Thêm đoạn mã sau để tạo một mảng:
```php
// filepath: /Users/ken/Folders/Projects/polytuts-5/wp-content/themes/fictional-university-theme/index.php
<?php
$names = array("Brad", "John", "Jane", "Meowsalot");
```

### 2. Truy cập giá trị trong mảng
Mỗi giá trị trong mảng đều có một chỉ số (index). Chỉ số bắt đầu từ `0`.

```php
<?php
echo $names[0]; // Kết quả: Brad
echo $names[2]; // Kết quả: Jane
```

> **Lưu ý**: Nếu cố gắng truy cập một chỉ số không tồn tại, PHP sẽ trả về lỗi.


## Lặp qua mảng

### 1. Vòng lặp `while`
Vòng lặp `while` cho phép chúng ta lặp qua tất cả các giá trị trong mảng một cách tuần tự.

```php
<?php
$count = 0;
while ($count < count($names)) {
    echo "<p>Xin chào, tên tôi là " . $names[$count] . ".</p>";
    $count++;
}
```

- **`count($names)`**: Hàm này trả về số lượng phần tử trong mảng.
- **`$names[$count]`**: Truy cập giá trị tại chỉ số hiện tại.

### 2. Kết quả
- Lưu tệp và làm mới trang web. Các em sẽ thấy:
  - **"Xin chào, tên tôi là Brad."**
  - **"Xin chào, tên tôi là John."**
  - **"Xin chào, tên tôi là Jane."**
  - **"Xin chào, tên tôi là Meowsalot."**


## Tại sao sử dụng mảng?

Mảng giúp chúng ta:
- **Lưu trữ dữ liệu liên quan**: Ví dụ, danh sách tên, danh mục sản phẩm, hoặc bài đăng.
- **Dễ dàng quản lý**: Thêm, sửa, hoặc xóa giá trị mà không cần thay đổi toàn bộ mã.
- **Hiển thị nội dung động**: Trong WordPress, mảng thường được sử dụng để hiển thị danh sách bài đăng hoặc danh mục.


## Ứng dụng mảng trong WordPress

### 1. Lưu trữ danh sách bài đăng
Trong WordPress, mảng thường được sử dụng để lưu trữ danh sách bài đăng hoặc danh mục. Ví dụ:
```php
<?php
$posts = array("Bài đăng 1", "Bài đăng 2", "Bài đăng 3");
foreach ($posts as $post) {
    echo "<p>" . $post . "</p>";
}
```

### 2. Tùy chỉnh giao diện
Mảng cũng được sử dụng để truyền các tùy chọn cấu hình vào các hàm như `wp_nav_menu()` hoặc `wp_list_pages()`.


## Tóm tắt nhanh

- **Mảng**: Lưu trữ nhiều giá trị trong một biến duy nhất.
- **Truy cập giá trị**: Sử dụng chỉ số để lấy giá trị từ mảng.
- **Vòng lặp**: Sử dụng vòng lặp để lặp qua tất cả các giá trị trong mảng.
- **Ứng dụng trong WordPress**: Hiển thị danh sách bài đăng, danh mục, hoặc tùy chọn cấu hình.


Hy vọng bài viết này giúp các em hiểu rõ hơn về mảng trong PHP. Trong bài học tiếp theo, chúng ta sẽ sử dụng mảng để hiển thị nội dung WordPress động như bài đăng và trang. Hãy chuẩn bị tinh thần, chúng ta sẽ bắt đầu ngay thôi! 🎉