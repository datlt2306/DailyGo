# Vòng lặp nổi tiếng trong WordPress: Hướng dẫn từ Thầy Đạt

Chào các em, hôm nay thầy sẽ hướng dẫn các em về **vòng lặp WordPress** – một khái niệm cực kỳ quan trọng và là trung tâm của mọi thứ trong WordPress. Vòng lặp giúp chúng ta hiển thị nội dung như bài đăng, trang, và nhiều hơn nữa. Nào, cùng bắt đầu nhé!

---

## Mục tiêu của bài học

Trên trang chủ của website, chúng ta sẽ xuất các bài đăng blog gần đây nhất. Để làm điều này, chúng ta sẽ sử dụng vòng lặp WordPress.

---

## Chuẩn bị nội dung

### 1. Tạo bài đăng giả
- Truy cập bảng điều khiển WordPress.
- Vào **Posts** > **Add New** để tạo bài đăng mới.
- Tạo ít nhất 3 bài đăng với nội dung giả (Lorem Ipsum).
- Xuất bản các bài đăng để chúng ta có nội dung để làm việc.

---

## Sử dụng vòng lặp WordPress

### 1. Tạo vòng lặp cơ bản
- Mở tệp `index.php` trong thư mục chủ đề của các em.
- Thêm đoạn mã sau để tạo vòng lặp:
```php
<?php
if (have_posts()) {
    while (have_posts()) {
        the_post();
        ?>
        <h2><?php the_title(); ?></h2>
        <p><?php the_content(); ?></p>
        <hr>
        <?php
    }
}
?>
```

### 2. Giải thích mã
- **`have_posts()`**: Kiểm tra xem có bài đăng nào để hiển thị không.
- **`the_post()`**: Lấy dữ liệu của bài đăng hiện tại.
- **`the_title()`**: Hiển thị tiêu đề bài đăng.
- **`the_content()`**: Hiển thị nội dung bài đăng.
- **`<hr>`**: Thêm đường kẻ ngang để phân cách các bài đăng.

---

## Thêm liên kết vào tiêu đề

### 1. Chuyển tiêu đề thành liên kết
- Sửa đoạn mã tiêu đề như sau:
```php
<h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
```

### 2. Kết quả
- Tiêu đề bài đăng sẽ trở thành liên kết dẫn đến trang chi tiết của bài đăng.

---

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
        <h2><?php the_title(); ?></h2>
        <p><?php the_content(); ?></p>
        <?php
    }
}
?>
```

### 2. Kết quả
- Khi truy cập trang chi tiết của bài đăng, tiêu đề sẽ không còn là liên kết.

---

## Hiển thị nội dung trang

### 1. Tạo tệp `page.php`
- Tạo tệp mới tên là `page.php` trong thư mục chủ đề.
- Sao chép nội dung từ `single.php` và thêm thông báo:
```php
<h1>Đây là một trang, không phải một bài đăng!</h1>
```

### 2. Kết quả
- Khi truy cập trang, thông báo sẽ hiển thị cùng với nội dung của trang.

---

## Tóm tắt nhanh

- **Vòng lặp WordPress**: Sử dụng `have_posts()` và `the_post()` để hiển thị nội dung.
- **Tiêu đề liên kết**: Sử dụng `the_permalink()` để tạo liên kết cho tiêu đề.
- **Tệp `single.php` và `page.php`**: Kiểm soát cách hiển thị nội dung bài đăng và trang.

---

Hy vọng bài viết này giúp các em hiểu rõ hơn về vòng lặp WordPress. Trong bài học tiếp theo, chúng ta sẽ học cách tạo header và footer toàn cục cho website. Hãy chuẩn bị tinh thần, chúng ta sẽ bắt đầu ngay