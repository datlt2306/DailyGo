# Thiết Lập Trang mới Trong WordPress

Hello em!

Trong bài học này, thầy trò mình sẽ cùng nhau thiết lập một trang trong WordPress. Điều này sẽ giúp thầy trò mình tạo ra các trang như "Giới thiệu", "Chính sách bảo mật" với giao diện đẹp mắt và nhất quán.

## Giới thiệu về trang (Page)
### Trang (Page) là gì?
Trong WordPress, **Page** là một loại nội dung tĩnh, thường được sử dụng để hiển thị các thông tin không thay đổi thường xuyên, như "Giới thiệu", "Liên hệ", hoặc "Chính sách bảo mật". Khác với **Post**, các trang không được tổ chức theo danh mục hoặc thẻ.

### Tại sao cần tạo trang mẫu (Page Template)?
Page Template giúp em kiểm soát giao diện và cách hiển thị nội dung của các trang. Bằng cách sử dụng tệp `page.php`, em có thể tùy chỉnh giao diện của tất cả các trang trong website.

## Bắt đầu thiết lập trang

### Tạo các trang mới trong WordPress

1. Truy cập khu vực quản trị WordPress.
2. Từ thanh bên, di chuột qua "Trang" và nhấp vào "Thêm mới".
3. Tạo một trang có tên "Giới thiệu" với nội dung: "Đây là nội dung trang giới thiệu" và một chút văn bản giả Lorem Ipsum.
4. Xuất bản trang này.
5. Tạo một trang khác có tên "Chính sách bảo mật" và xuất bản nó.

### Sao chép và dán mã HTML từ mẫu tĩnh

1. Mở tệp `interior-page.html` trong thư mục `university-static-master` bằng trình soạn thảo văn bản.
2. Sao chép phần mã HTML từ `<div class="page-banner">` đến trước `<div class="page-section">`.

### Tích hợp HTML vào tệp `page.php`

1. Mở tệp `page.php` trong thư mục chủ đề WordPress của em.
2. Xóa nội dung thử nghiệm và dán mã HTML đã sao chép vào giữa vòng lặp `while`.

```php
// filepath: page.php
<?php get_header(); ?>

<?php
while ( have_posts() ) {
    the_post();
    ?>
    <div class="page-banner">
        <!-- Nội dung HTML đã sao chép -->
    </div>
    <?php
}
?>

<?php get_footer(); ?>
```

### Giải thích
- **`get_header()` và `get_footer()`**: Gọi nội dung từ các tệp `header.php` và `footer.php` để đảm bảo tính nhất quán.
- **`while (have_posts())`**: Vòng lặp WordPress để kiểm tra và hiển thị nội dung của trang hiện tại.
- **`the_post()`**: Lấy dữ liệu của trang hiện tại.

### Thay thế nội dung tĩnh bằng nội dung động

1. Thay thế tiêu đề tĩnh bằng hàm `the_title()`.

```php
<h1><?php the_title(); ?></h1>
```

2. Thay thế nội dung tĩnh bằng hàm `the_content()`.

```php
<div class="generic-content">
    <?php the_content(); ?>
</div>
```

### Giải thích
- **`the_title()`**: Hiển thị tiêu đề của trang hiện tại.
- **`the_content()`**: Hiển thị nội dung của trang hiện tại.

## Bài tập

1. **Tạo một trang mới**:

    - Tạo một trang mới có tên "Dịch vụ" với nội dung: "Đây là nội dung trang dịch vụ".
    - Xuất bản trang này.

2. **Tích hợp hình ảnh nền**:

    - Thay thế hình ảnh nền tĩnh bằng hình ảnh động sử dụng hàm `get_theme_file_uri()`.

3. **Thêm liên kết điều hướng**:
    - Thêm liên kết điều hướng đến trang "Giới thiệu" và "Chính sách bảo mật" trong phần đầu trang và chân trang.

## Hướng dẫn cách làm

### Tạo một trang mới

1. Truy cập khu vực quản trị WordPress.
2. Từ thanh bên, di chuột qua "Trang" và nhấp vào "Thêm mới".
3. Tạo một trang có tên "Dịch vụ" với nội dung: "Đây là nội dung trang dịch vụ".
4. Xuất bản trang này.

### Tích hợp hình ảnh nền

1. Mở tệp `page.php`.
2. Thay thế đường dẫn hình ảnh tĩnh bằng hàm `get_theme_file_uri()`.

```php
<style>
    .page-banner {
        background-image: url(<?php echo get_theme_file_uri('images/ocean.jpg'); ?>);
    }
</style>
```

### Giải thích
- **`get_theme_file_uri()`**: Hàm này trả về đường dẫn đến tệp trong thư mục chủ đề, giúp em dễ dàng quản lý các tài nguyên như hình ảnh.

### Thêm liên kết điều hướng

1. Mở tệp `header.php` và `footer.php`.
2. Thêm liên kết điều hướng sử dụng hàm `site_url()`.

```php
<a href="<?php echo site_url('/gioi-thieu'); ?>">Giới thiệu</a>
<a href="<?php echo site_url('/chinh-sach-bao-mat'); ?>">Chính sách bảo mật</a>
```

### Giải thích
- **`site_url()`**: Hàm này trả về URL của website, giúp em tạo liên kết nội bộ một cách dễ dàng.

## Tổng kết

Trong bài học này, thầy trò mình đã học cách thiết lập một trang trong WordPress. Thầy trò mình đã tạo các trang mới, tích hợp mã HTML từ mẫu tĩnh và thay thế nội dung tĩnh bằng nội dung động. Hãy thực hành các bài tập để nắm vững kiến thức này. Chúc các em học vui vẻ và thành công!
