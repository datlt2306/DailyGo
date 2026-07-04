# Thiết lập đầu trang và chân trang toàn cục: 

Chào các em, hôm nay thầy sẽ hướng dẫn các em cách thiết lập **đầu trang (header)** và **chân trang (footer)** toàn cục trong WordPress. Đây là một bước quan trọng để đảm bảo rằng các phần tiêu đề và chân trang xuất hiện đồng nhất trên mọi trang của website. Nào, cùng bắt đầu nhé!


## Mục tiêu của bài học

- Tạo đầu trang và chân trang toàn cục.
- Tải tệp CSS để định dạng giao diện.
- Thêm thanh menu quản trị màu đen ở đầu trang.


## Lý thuyết về đầu trang và chân trang

### Đầu trang (Header) và chân trang (Footer) là gì?
Trong WordPress, **header.php** và **footer.php** là các tệp mẫu (template files) được sử dụng để hiển thị nội dung đầu trang và chân trang trên mọi trang của website. Chúng giúp đảm bảo tính nhất quán trong giao diện và giảm thiểu việc lặp lại mã.

### Tại sao cần sử dụng các tệp này?
- **Tính tái sử dụng**: Một lần định nghĩa, sử dụng trên mọi trang.
- **Dễ quản lý**: Khi cần thay đổi nội dung đầu trang hoặc chân trang, chỉ cần sửa trong một tệp duy nhất.
- **Tích hợp với WordPress**: Các hàm như `wp_head()` và `wp_footer()` giúp WordPress tự động thêm các tài nguyên cần thiết (CSS, JavaScript, v.v.) vào website.


## Tạo đầu trang và chân trang

### 1. Tạo tệp `header.php`
- Trong thư mục chủ đề, tạo tệp mới tên là `header.php`.
- Thêm nội dung sau:
```php
<!DOCTYPE html>
<html>
<head>
    <?php wp_head(); ?> <!-- Hàm này cho phép WordPress tự động thêm các tài nguyên cần thiết -->
</head>
<body>
    <header>
        <h1>Đây là vùng tiêu đề</h1> <!-- Hiển thị tiêu đề của website -->
    </header>
```

### 2. Tạo tệp `footer.php`
- Trong thư mục chủ đề, tạo tệp mới tên là `footer.php`.
- Thêm nội dung sau:
```php
    <footer>
        <p>Đây là vùng chân trang</p> <!-- Hiển thị nội dung chân trang -->
    </footer>
    <?php wp_footer(); ?> <!-- Hàm này cho phép WordPress thêm các tài nguyên cần thiết vào cuối trang -->
</body>
</html>
```

### 3. Sử dụng `header.php` và `footer.php` trong các tệp mẫu
- Mở tệp `index.php` và sửa lại như sau:
```php
<?php get_header(); ?> <!-- Gọi tệp header.php -->
<main>
    <h2>Nội dung chính của trang</h2> <!-- Hiển thị nội dung chính -->
</main>
<?php get_footer(); ?> <!-- Gọi tệp footer.php -->
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
            <h2><?php the_title(); ?></h2> <!-- Hiển thị tiêu đề bài đăng -->
            <p><?php the_content(); ?></p> <!-- Hiển thị nội dung bài đăng -->
            <?php
        }
    }
    ?>
</main>
<?php get_footer(); ?>
```

### Tại sao viết như vậy?
- **`get_header()` và `get_footer()`**: Đây là các hàm WordPress dùng để gọi nội dung từ các tệp `header.php` và `footer.php`. Chúng giúp giảm thiểu việc lặp lại mã trong các tệp mẫu.


## Tải tệp CSS

### 1. Tạo tệp `functions.php`
- Trong thư mục chủ đề, tạo tệp mới tên là `functions.php`.
- Thêm đoạn mã sau để tải tệp CSS:
```php
<?php
function fictional_university_files() {
    wp_enqueue_style('main-styles', get_stylesheet_uri()); // Tải tệp CSS chính
}
add_action('wp_enqueue_scripts', 'fictional_university_files'); // Kích hoạt hàm fictional_university_files
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

### Tại sao cần viết như vậy?
- **`wp_enqueue_style()`**: Hàm này giúp WordPress tải tệp CSS một cách chính xác và tránh xung đột với các plugin hoặc chủ đề khác.
- **`get_stylesheet_uri()`**: Trả về đường dẫn đến tệp `style.css` trong thư mục chủ đề.


## Thêm thanh menu quản trị

### 1. Sử dụng `wp_footer()`
- Đảm bảo rằng tệp `footer.php` đã có dòng sau:
```php
<?php wp_footer(); ?>
```

### Tại sao cần `wp_footer()`?
- Hàm này cho phép WordPress thêm các tài nguyên cần thiết vào cuối trang, bao gồm thanh menu quản trị màu đen khi người dùng đăng nhập.


## Tóm tắt nhanh

- **Tệp `header.php` và `footer.php`**: Tạo đầu trang và chân trang toàn cục để đảm bảo tính nhất quán.
- **Tệp `functions.php`**: Tải tệp CSS để định dạng giao diện.
- **Thanh menu quản trị**: Sử dụng `wp_footer()` để hiển thị thanh menu quản trị.


Hy vọng bài viết này giúp các em thiết lập đầu trang và chân trang toàn cục một cách dễ dàng. Trong bài học tiếp theo, chúng ta sẽ bắt đầu thiết kế giao diện đồ họa cho chủ đề của mình. Hãy chuẩn bị tinh thần, chúng ta sẽ bắt đầu ngay thôi!