# Vòng lặp nổi tiếng trong WordPress: 

Chào các em, hôm nay thầy sẽ hướng dẫn các em về **vòng lặp WordPress** – một khái niệm cực kỳ quan trọng và là trung tâm của mọi thứ trong WordPress. Vòng lặp giúp thầy trò mình hiển thị nội dung như bài đăng, trang, và nhiều hơn nữa. Nào, cùng bắt đầu nhé!

## Mục tiêu của bài học

Trên trang chủ của website, thầy trò mình sẽ xuất các bài đăng blog gần đây nhất. Để làm điều này, thầy trò mình sẽ sử dụng vòng lặp WordPress.

## Lý thuyết về vòng lặp WordPress

### Vòng lặp là gì?
Vòng lặp (The Loop) trong WordPress là một cơ chế giúp thầy trò mình truy xuất và hiển thị nội dung từ cơ sở dữ liệu. Nó hoạt động như một vòng lặp trong lập trình thông thường, nhưng được tối ưu hóa để làm việc với các bài đăng, trang, và các loại nội dung khác.

### Tại sao cần vòng lặp?
Trong WordPress, nội dung được lưu trữ trong cơ sở dữ liệu. Để hiển thị nội dung này trên giao diện người dùng, thầy trò mình cần một cách để truy xuất và hiển thị từng bài đăng hoặc trang. Vòng lặp giúp thầy trò mình làm điều này một cách dễ dàng và hiệu quả.

## Chuẩn bị nội dung

### 1. Tạo bài đăng giả
- Truy cập bảng điều khiển WordPress.
- Vào **Posts** > **Add New** để tạo bài đăng mới.
- Tạo ít nhất 3 bài đăng với nội dung giả (Lorem Ipsum).
- Xuất bản các bài đăng để thầy trò mình có nội dung để làm việc.

## Sử dụng vòng lặp WordPress

### 1. Tạo vòng lặp cơ bản
- Mở tệp `index.php` trong thư mục chủ đề của các em.
- Thêm đoạn mã sau để tạo vòng lặp:
```php
<?php
// Kiểm tra xem có bài đăng nào không
if (have_posts()) {
    // Bắt đầu vòng lặp để duyệt qua các bài đăng
    while (have_posts()) {
        the_post(); // Lấy dữ liệu của bài đăng hiện tại
        ?>
        <h2><?php the_title(); ?></h2> <!-- Hiển thị tiêu đề bài đăng -->
        <p><?php the_content(); ?></p> <!-- Hiển thị nội dung bài đăng -->
        <hr> <!-- Thêm đường kẻ ngang để phân cách các bài đăng -->
        <?php
    }
}
?>
```

### Tại sao viết như vậy?
- **`have_posts()`**: Đây là một hàm kiểm tra xem có bài đăng nào để hiển thị không. Nếu có, nó trả về `true`.
- **`while (have_posts())`**: Vòng lặp này sẽ tiếp tục chạy cho đến khi không còn bài đăng nào.
- **`the_post()`**: Hàm này lấy dữ liệu của bài đăng hiện tại và chuẩn bị để hiển thị.
- **`the_title()`**: Hiển thị tiêu đề của bài đăng.
- **`the_content()`**: Hiển thị nội dung của bài đăng.

## Thêm liên kết vào tiêu đề

### 1. Chuyển tiêu đề thành liên kết
- Sửa đoạn mã tiêu đề như sau:
```php
<h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
```

### Tại sao cần liên kết?
- **`the_permalink()`**: Hàm này tạo URL dẫn đến trang chi tiết của bài đăng. Việc biến tiêu đề thành liên kết giúp người dùng dễ dàng truy cập nội dung chi tiết.

## Hiển thị nội dung chi tiết

### 1. Tạo tệp `single.php`
- Tạo tệp mới tên là `single.php` trong thư mục chủ đề.
- Sao chép nội dung từ `index.php` và sửa lại để loại bỏ liên kết tiêu đề:
```php
<?php
if (have_posts()) {
    while (have_posts()) {
        the_post();
        ?>
        <h2><?php the_title(); ?></h2> <!-- Tiêu đề không còn là liên kết -->
        <p><?php the_content(); ?></p>
        <?php
    }
}
?>
```

### Tại sao cần tệp `single.php`?
- Tệp này kiểm soát cách hiển thị nội dung chi tiết của một bài đăng. Nó giúp tách biệt giao diện trang chủ và trang chi tiết.

## Hiển thị nội dung trang

### 1. Tạo tệp `page.php`
- Tạo tệp mới tên là `page.php` trong thư mục chủ đề.
- Sao chép nội dung từ `single.php` và thêm thông báo:
```php
<h1>Đây là một trang, không phải một bài đăng!</h1>
```

### Tại sao cần tệp `page.php`?
- Tệp này kiểm soát cách hiển thị nội dung của các trang (Pages). Nó giúp phân biệt giữa bài đăng (Posts) và trang (Pages).

## Tóm tắt nhanh

- **Vòng lặp WordPress**: Sử dụng `have_posts()` và `the_post()` để hiển thị nội dung.
- **Tiêu đề liên kết**: Sử dụng `the_permalink()` để tạo liên kết cho tiêu đề.
- **Tệp `single.php` và `page.php`**: Kiểm soát cách hiển thị nội dung bài đăng và trang.

Hy vọng bài viết này giúp các em hiểu rõ hơn về vòng lặp WordPress. Trong bài học tiếp theo, thầy trò mình sẽ học cách tạo header và footer toàn cục cho website. Hãy chuẩn bị tinh thần, thầy trò mình sẽ bắt đầu ngay!
