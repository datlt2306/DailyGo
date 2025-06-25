---
id: chuyen-doi-html-css-tinh-thanh-theme-wordpress-phan-1
title: Chuyển Đổi HTML/CSS phần 1
sidebar_position: 7
---

# Chuyển Đổi HTML và CSS Tĩnh Thành theme trong WordPress

## Giới thiệu

Chào mừng bạn đã trở lại!

Trong bài học này, chúng ta sẽ học cách chuyển đổi một trang HTML và CSS tĩnh thành một chủ đề WordPress sống động. Đến thời điểm này của khóa học, chủ đề và trang web WordPress mà chúng tôi đang làm việc không có phong cách hoặc thiết kế nào cho nó. Điều này không thực tế lắm phải không? Vì vậy, chúng ta cần thêm thiết kế và hướng nghệ thuật vào chủ đề của chúng ta.

## Mục lục

1. [Giới thiệu](#giới-thiệu)
2. [Tạo tệp `functions.php`](#tạo-tệp-functionphp)
3. [Bài tập](#bài-tập)
4. [Hướng dẫn cách làm](#hướng-dẫn-cách-làm)
    - [Tạo tệp `header.php` và `footer.php`](#tạo-tệp-headerphp-và-footerphp)
    - [Bao gồm các tệp này trong tệp `index.php`](#bao-gồm-các-tệp-này-trong-tệp-indexphp)
    - [Tạo tệp `functions.php`](#tạo-tệp-functionphp-1)
5. [Tổng kết](#tổng-kết)

## 1. Tải xuống mã khởi động

Để bắt đầu, chúng ta sẽ tải xuống một chút HTML và CSS mà tôi đã viết cho chúng ta. Bạn có thể mở một tab mới trong trình duyệt web của mình và truy cập URL này:

```bash
https://github.com/learnwebcode/university-static
```

Tại đây, bạn chỉ cần sử dụng nút "Clone or download" và chọn "Download ZIP". Sau khi tải xuống và giải nén tệp ZIP, bạn sẽ có một thư mục có tên là `university-static-master`.

## 2. Xem trước HTML tĩnh

Trước tiên, hãy xem trước tệp HTML đã được lập chỉ mục trong trình duyệt web của bạn. Mở tệp index.html từ thư mục `university-static-master` trong trình duyệt của bạn. Bạn sẽ thấy một trang HTML tĩnh không có PHP và hoàn toàn không liên quan gì đến WordPress.

## 3. Chuyển HTML tĩnh sang chủ đề WordPress

Bây giờ, chúng ta sẽ sao chép và dán nội dung từ thư mục `university-static-master` vào thư mục chủ đề WordPress của chúng ta. Chúng ta sẽ bắt đầu với phần tiêu đề.

Tạo tệp `header.php`

```php
<!-- header.php -->
<!DOCTYPE html>
<html>
<head>
    <title>Trang chủ</title>
    <?php wp_head(); ?>
</head>
<body>
    <header>
        <div class="logo">Logo</div>
        <nav>
            <ul>
                <li><a href="#">Trang chủ</a></li>
                <li><a href="#">Giới thiệu</a></li>
                <li><a href="#">Liên hệ</a></li>
            </ul>
        </nav>
    </header>
```

Tạo tệp `footer.php`

```php
<!-- footer.php -->
    <footer>
        <p>Đây là khu vực chân trang</p>
    </footer>
    <?php wp_footer(); ?>
</body>
</html>
```

Bao gồm các tệp này trong tệp chính

```php
<!-- index.php -->
<?php get_header(); ?>

<!-- Nội dung trang -->
<main>
    <h1>Chào mừng đến với trang chủ của chúng tôi</h1>
    <p>Đây là nội dung chính của trang.</p>
</main>

<?php get_footer(); ?>
```

## 4. Tích hợp CSS và JavaScript

Để tích hợp CSS và JavaScript, chúng ta sẽ tạo một tệp `functions.php` và thêm mã để tải các tệp này.

Tạo tệp `functions.php`

```php
<!-- functions.php -->
<?php
function university_files() {
    wp_enqueue_style('university_main_styles', get_stylesheet_uri());
    wp_enqueue_script('university_main_scripts', get_template_directory_uri() . '/js/scripts.js', NULL, '1.0', true);
}

add_action('wp_enqueue_scripts', 'university_files');
?>
```

## Bài tập

1. Tạo một tệp `header.php` và `footer.php` trong thư mục chủ đề của bạn.
2. Bao gồm các tệp này trong tệp index.php của bạn bằng cách sử dụng các hàm get_header() và get_footer().
3. Tạo tệp `functions.php` và thêm mã để tải các tệp CSS và JavaScript.

## Hướng dẫn cách làm

1.  Tạo tệp header.php và footer.php:

    -   Mở thư mục chủ đề của bạn.
    -   Tạo tệp `header.php` và thêm mã HTML cho phần đầu trang.
    -   Tạo tệp `footer.php` và thêm mã HTML cho phần chân trang.
    -   Bao gồm các tệp này trong tệp index.php:

2.  Mở tệp `index.php` trong thư mục chủ đề của bạn.
    Thêm các hàm `get_header()` và `get_footer()` vào các vị trí thích hợp trong tệp index.php.
3.  Tạo tệp functions.php:

    -   Mở thư mục chủ đề của bạn.
    -   Tạo tệp `functions.php` và thêm mã để tải các tệp CSS và JavaScript.

    Chúc các bạn thành công!

## Tổng kết

Trong bài học này, chúng ta đã học cách chuyển đổi một trang HTML và CSS tĩnh thành một chủ đề WordPress sống động. Chúng ta đã tải xuống mã khởi động, xem trước HTML tĩnh, chuyển HTML tĩnh sang chủ đề WordPress và tích hợp CSS và JavaScript.
