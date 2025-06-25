# Thiết lập đầu trang và chân trang toàn cục: Hướng dẫn từ Thầy Đạt

Chào các em, hôm nay thầy sẽ hướng dẫn các em cách thiết lập **đầu trang (header)** và **chân trang (footer)** toàn cục trong WordPress. Đây là một bước quan trọng để đảm bảo rằng các phần tiêu đề và chân trang xuất hiện đồng nhất trên mọi trang của website. Nào, cùng bắt đầu nhé!

---

## Mục tiêu của bài học

- Tạo đầu trang và chân trang toàn cục.
- Tải tệp CSS để định dạng giao diện.
- Thêm thanh menu quản trị màu đen ở đầu trang.

---

## Tạo đầu trang và chân trang

### 1. Tạo tệp `header.php`
- Trong thư mục chủ đề, tạo tệp mới tên là `header.php`.
- Thêm nội dung sau:
```php
<!DOCTYPE html>
<html>
<head>
    <?php wp_head(); ?>
</head>
<body>
    <header>
        <h1>Đây là vùng tiêu đề</h1>
    </header>
```

### 2. Tạo tệp `footer.php`
- Trong thư mục chủ đề, tạo tệp mới tên là `footer.php`.
- Thêm nội dung sau:
```php
    <footer>
        <p>Đây là vùng chân trang</p>
    </footer>
    <?php wp_footer(); ?>
</body>
</html>
```

### 3. Sử dụng `header.php` và `footer.php` trong các tệp mẫu
- Mở tệp `index.php` và sửa lại như sau:
```php
<?php get_header(); ?>
<main>
    <h2>Nội dung chính của trang</h2>
</main>
<?php get_footer(); ?>
```

- Lặp lại tương tự trong các tệp `single.php` và `page.php`:
```php
<?php get_header(); ?>
<main>
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
</main>
<?php get_footer(); ?>
```

---

## Tải tệp CSS

### 1. Tạo tệp `functions.php`
- Trong thư mục chủ đề, tạo tệp mới tên là `functions.php`.
- Thêm đoạn mã sau để tải tệp CSS:
```php
<?php
function fictional_university_files() {
    wp_enqueue_style('main-styles', get_stylesheet_uri());
}
add_action('wp_enqueue_scripts', 'fictional_university_files');
```

### 2. Kiểm tra tệp CSS
- Mở tệp `style.css` và thêm nội dung sau:
```css
body {
    font-family: Arial, sans-serif;
    color: #333;
    background-color: #f9f9f9;
}
header {
    background-color: #0073aa;
    color: white;
    padding: 10px;
    text-align: center;
}
footer {
    background-color: #333;
    color: white;
    padding: 10px;
    text-align: center;
}
```

- Làm mới trang web để kiểm tra giao diện.

---

## Thêm thanh menu quản trị

### 1. Sử dụng `wp_footer()`
- Đảm bảo rằng tệp `footer.php` đã có dòng sau:
```php
<?php wp_footer(); ?>
```

### 2. Kết quả
- Khi đăng nhập vào WordPress, thanh menu quản trị màu đen sẽ xuất hiện ở đầu trang.

---

## Tóm tắt nhanh

- **Tệp `header.php` và `footer.php`**: Tạo đầu trang và chân trang toàn cục.
- **Tệp `functions.php`**: Tải tệp CSS để định dạng giao diện.
- **Thanh menu quản trị**: Sử dụng `wp_footer()` để hiển thị thanh menu quản trị.

---

Hy vọng bài viết này giúp các em thiết lập đầu trang và chân trang toàn cục một cách dễ dàng. Trong bài học tiếp theo, chúng ta sẽ bắt đầu thiết kế giao diện đồ họa cho chủ đề của mình. Hãy chuẩn bị tinh thần, chúng ta sẽ bắt đầu ngay thôi!