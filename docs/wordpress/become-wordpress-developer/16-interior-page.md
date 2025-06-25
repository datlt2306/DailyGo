---
id: tao-trang-trong-wordpress
title: Tạo trang
sidebar_position: 9
---

# Thiết Lập Trang mới Trong WordPress

Chào mừng bạn đã trở lại!

Trong bài học này, chúng ta sẽ cùng nhau thiết lập một trang trong WordPress. Điều này sẽ giúp chúng ta tạo ra các trang như "Giới thiệu", "Chính sách bảo mật" với giao diện đẹp mắt và nhất quán.

## Mục lục

1. [Giới thiệu về bài giảng](#giới-thiệu-về-bài-giảng)
2. [Bắt đầu thiết lập trang](#bắt-đầu-thiết-lập-mẫu-trang-nội-thất)
    - [Tạo các trang mới trong WordPress](#tạo-các-trang-mới-trong-wordpress)
    - [Sao chép và dán mã HTML từ mẫu tĩnh](#sao-chép-và-dán-mã-html-từ-mẫu-tĩnh)
    - [Tích hợp HTML vào tệp `page.php`](#tích-hợp-html-vào-tệp-pagephp)
    - [Thay thế nội dung tĩnh bằng nội dung động](#thay-thế-nội-dung-tĩnh-bằng-nội-dung-động)
3. [Bài tập](#bài-tập)
4. [Hướng dẫn cách làm](#hướng-dẫn-cách-làm)
5. [Tổng kết](#tổng-kết)

## Giới thiệu về bài giảng

Trong bài học này, chúng ta sẽ thiết lập một trang. Điều này có nghĩa là khi ai đó nhấp vào một trang chung chung như "Giới thiệu" hoặc "Chính sách bảo mật", chúng ta sẽ có một mẫu trang đẹp mắt để hiển thị nội dung đó.

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

1. Mở tệp `page.php` trong thư mục chủ đề WordPress của bạn.
2. Xóa nội dung thử nghiệm và dán mã HTML đã sao chép vào giữa vòng lặp `while`.

```php
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

### Thêm liên kết điều hướng

1. Mở tệp `header.php` và `footer.php`.
2. Thêm liên kết điều hướng sử dụng hàm `site_url()`.

```php
<a href="<?php echo site_url('/gioi-thieu'); ?>">Giới thiệu</a>
<a href="<?php echo site_url('/chinh-sach-bao-mat'); ?>">Chính sách bảo mật</a>
```

## Tổng kết

Trong bài học này, chúng ta đã học cách thiết lập một trang trong WordPress. Chúng ta đã tạo các trang mới, tích hợp mã HTML từ mẫu tĩnh và thay thế nội dung tĩnh bằng nội dung động. Hãy thực hành các bài tập để nắm vững kiến thức này. Chúc các bạn học vui vẻ và thành công!
