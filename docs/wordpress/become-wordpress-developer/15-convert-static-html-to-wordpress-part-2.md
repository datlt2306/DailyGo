---
id: chuyen-doi-html-css-tinh-thanh-theme-wordpress-phan-2
title: Chuyển Đổi HTML/CSS phần 2
sidebar_position: 8
---

# Chuyển Đổi HTML và CSS Tĩnh Thành Theme trong WordPress phần 2

Chào mừng bạn đã trở lại!

Trong bài học này, chúng ta sẽ học cách chuyển đổi một trang HTML và CSS tĩnh thành một chủ đề WordPress sống động. Đến thời điểm này của khóa học, chủ đề và trang web WordPress mà chúng tôi đang làm việc không có phong cách hoặc thiết kế nào cho nó. Điều này không thực tế lắm phải không? Vì vậy, chúng ta cần thêm thiết kế và hướng nghệ thuật vào chủ đề của chúng ta.

## Mục lục

1. [Bắt đầu với tiêu đề](#bắt-đầu-với-tiêu-đề)
2. [Sao chép mã HTML tiêu đề](#sao-chép-mã-html-tiêu-đề)
3. [Dán mã vào `header.php`](#dán-mã-vào-headerphp)
4. [Bài tập](#bài-tập)
5. [Tổng kết](#tổng-kết)

# 1. Bắt đầu với tiêu đề

Chúng ta sẽ bắt đầu với phần tiêu đề, nơi chứa logo và các liên kết điều hướng.

<strong>Sao chép mã HTML tiêu đề</strong>

Mở tệp `index.html` trong thư mục `university-static-master` và sao chép phần tử tiêu đề:

```html
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

<strong>Dán mã vào `header.php`</strong>

Mở tệp `header.php` trong thư mục chủ đề WordPress của bạn và dán mã HTML vào:

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

## 2. Chuyển phần chân trang

Tiếp theo, chúng ta sẽ chuyển phần chân trang từ HTML tĩnh sang WordPress.

<strong>Sao chép mã HTML chân trang</strong>
Mở tệp `index.html` và sao chép phần tử chân trang:

```html
<footer>
    <p>Đây là khu vực chân trang</p>
</footer>
```

<strong>Dán mã vào `footer.php`</strong>
Mở tệp `footer.php` trong thư mục chủ đề WordPress của bạn và dán mã HTML vào:

```php
<!-- footer.php -->
    <footer>
        <p>Đây là khu vực chân trang</p>
    </footer>
    <?php wp_footer(); ?>
</body>
</html>
```

## 3. Tích hợp CSS và JavaScript

Để tích hợp CSS và JavaScript, chúng ta sẽ tạo một tệp `functions.php` và thêm mã để tải các tệp này.

<strong>Tạo tệp functions.php</strong>

```php
<!-- functions.php -->
<?php
function university_files() {
    wp_enqueue_style('university_main_styles', get_template_directory_uri() . '/build/css/style-index.css');
    wp_enqueue_style('university_additional_styles', get_template_directory_uri() . '/build/css/style-additional.css');
    wp_enqueue_script('university_main_scripts', get_template_directory_uri() . '/build/js/index.js', array('jquery'), '1.0', true);
}

add_action('wp_enqueue_scripts', 'university_files');
?>
```

## 4. Chuyển hình ảnh và các tệp khác

Chúng ta cần chuyển các thư mục hình ảnh, CSS và JavaScript từ thư mục `university-static-master` sang thư mục chủ đề WordPress của chúng ta.

<strong>Chuyển các thư mục</strong>
Di chuyển các thư mục `build`, `images`, `css`, và `js` từ `university-static-master` vào thư mục chủ đề WordPress của bạn.

<strong>Cập nhật đường dẫn hình ảnh</strong>
Cập nhật đường dẫn hình ảnh trong tệp `index.php` để sử dụng hàm `get_template_directory_uri()` của WordPress:

```html
<div
    class="banner"
    style="background-image: url('<?php echo get_template_directory_uri(); ?>/images/library-hero.jpg');"
></div>
```

ipt, và chuyển các tệp hình ảnh và các tệp khác.

## Bài tập

Tạo một tệp `header.php` và `footer.php` trong thư mục chủ đề của bạn.
Bao gồm các tệp này trong tệp `index.php` của bạn bằng cách sử dụng các hàm get_header() và get_footer().
Tạo tệp `functions.php` và thêm mã để tải các tệp CSS và JavaScript.
Cập nhật đường dẫn hình ảnh trong tệp index.php để sử dụng hàm `get_template_directory_uri()`.

## Hướng dẫn cách làm

1. <strong>Tạo tệp `header.php` và `footer.php`</strong>:
    - Mở thư mục chủ đề của bạn.
    - Tạo tệp `header.php` và thêm mã HTML cho phần đầu trang.
    - Tạo tệp `footer.php` và thêm mã HTML cho phần chân trang.
2. <strong>Bao gồm các tệp này trong tệp `index.php`</strong>:
    - Mở tệp `index.php` trong thư mục chủ đề của bạn.
    - Thêm các hàm `get_header()` và `get_footer()` vào các vị trí thích hợp trong tệp index.php.
3. <strong>Tạo tệp functions.php</strong>:
    - Mở thư mục chủ đề của bạn.
    - Tạo tệp `functions.php` và thêm mã để tải các tệp CSS và JavaScript.
4. <strong>Cập nhật đường dẫn hình ảnh</strong>:
    - Mở tệp `index.php` trong thư mục chủ đề của bạn.
    - Sử dụng hàm `get_template_directory_uri()` để cập nhật đường dẫn hình ảnh.

Chúc các bạn thành công!

## Tổng kết

Trong bài học này, chúng ta đã học cách chuyển đổi một trang HTML và CSS tĩnh thành một chủ đề WordPress sống động. Chúng ta đã bắt đầu với tiêu đề, chuyển phần chân trang, tích hợp CSS và JavaScript, cập nhật đường dẫn hình ảnh và các tệp khác.
