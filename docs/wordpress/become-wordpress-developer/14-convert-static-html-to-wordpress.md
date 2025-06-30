# Chuyển Đổi HTML và CSS Tĩnh Thành theme trong WordPress

## Giới thiệu

Chào mừng bạn đã trở lại!

Trong bài học này, chúng ta sẽ học cách chuyển đổi một trang HTML và CSS tĩnh thành một chủ đề WordPress sống động. Đến thời điểm này của khóa học, chủ đề và trang web WordPress mà chúng tôi đang làm việc không có phong cách hoặc thiết kế nào cho nó. Điều này không thực tế lắm phải không? Vì vậy, chúng ta cần thêm thiết kế và hướng nghệ thuật vào chủ đề của chúng ta.


## Lý thuyết về chuyển đổi HTML tĩnh sang WordPress

### Tại sao cần chuyển đổi HTML tĩnh sang WordPress?
HTML tĩnh là các trang web không có khả năng tương tác hoặc quản lý nội dung động. Trong khi đó, WordPress là một hệ thống quản lý nội dung (CMS) mạnh mẽ, cho phép bạn dễ dàng quản lý, chỉnh sửa, và mở rộng nội dung của website. Việc chuyển đổi HTML tĩnh sang WordPress giúp bạn:
- **Quản lý nội dung dễ dàng**: Sử dụng giao diện quản trị của WordPress.
- **Tái sử dụng mã**: Tách biệt các phần như tiêu đề (header), chân trang (footer), và nội dung chính.
- **Tích hợp tính năng động**: Thêm các plugin, widget, và tính năng tùy chỉnh.

### Các tệp mẫu (Template Files) trong WordPress
WordPress sử dụng các tệp mẫu như `header.php`, `footer.php`, và `index.php` để xây dựng giao diện website. Các tệp này giúp bạn tổ chức mã HTML và PHP một cách rõ ràng và dễ quản lý.

## 1. Tải xuống mã khởi động

Để bắt đầu, chúng ta sẽ tải xuống một chút HTML và CSS mà tôi đã viết cho chúng ta. Bạn có thể mở một tab mới trong trình duyệt web của mình và truy cập URL này:

```bash
https://github.com/learnwebcode/university-static
```

Tại đây, bạn chỉ cần sử dụng nút "Clone or download" và chọn "Download ZIP". Sau khi tải xuống và giải nén tệp ZIP, bạn sẽ có một thư mục có tên là `university-static-master`.


## 2. Xem trước HTML tĩnh

Trước tiên, hãy xem trước tệp HTML đã được lập chỉ mục trong trình duyệt web của bạn. Mở tệp `index.html` từ thư mục `university-static-master` trong trình duyệt của bạn. Bạn sẽ thấy một trang HTML tĩnh không có PHP và hoàn toàn không liên quan gì đến WordPress.


## 3. Chuyển HTML tĩnh sang chủ đề WordPress

### Tạo tệp `header.php`
Tệp `header.php` chứa phần đầu trang của website, bao gồm các thẻ HTML cơ bản và các hàm WordPress như `wp_head()`.

```php
<!-- filepath: header.php -->
<!DOCTYPE html>
<html>
<head>
    <title>Trang chủ</title>
    <?php wp_head(); ?> <!-- Hàm này cho phép WordPress tự động thêm các tài nguyên cần thiết -->
</head>
<body>
    <header>
        <div class="logo">Logo</div> <!-- Hiển thị logo -->
        <nav>
            <ul>
                <li><a href="#">Trang chủ</a></li>
                <li><a href="#">Giới thiệu</a></li>
                <li><a href="#">Liên hệ</a></li>
            </ul>
        </nav>
    </header>
```

### Tạo tệp `footer.php`
Tệp `footer.php` chứa phần chân trang của website và sử dụng hàm `wp_footer()` để thêm các tài nguyên cần thiết vào cuối trang.

```php
<!-- filepath: footer.php -->
    <footer>
        <p>Đây là khu vực chân trang</p> <!-- Hiển thị nội dung chân trang -->
    </footer>
    <?php wp_footer(); ?> <!-- Hàm này cho phép WordPress thêm các tài nguyên cần thiết vào cuối trang -->
</body>
</html>
```

### Bao gồm các tệp này trong tệp chính
Tệp `index.php` là tệp mẫu chính của WordPress. Chúng ta sẽ sử dụng các hàm `get_header()` và `get_footer()` để gọi nội dung từ các tệp `header.php` và `footer.php`.

```php
<!-- filepath: index.php -->
<?php get_header(); ?> <!-- Gọi tệp header.php -->

<!-- Nội dung trang -->
<main>
    <h1>Chào mừng đến với trang chủ của chúng tôi</h1>
    <p>Đây là nội dung chính của trang.</p>
</main>

<?php get_footer(); ?> <!-- Gọi tệp footer.php -->
```


## 4. Tích hợp CSS và JavaScript

### Tạo tệp `functions.php`
Tệp `functions.php` được sử dụng để đăng ký và tải các tệp CSS và JavaScript vào website.

```php
<!-- filepath: functions.php -->
<?php
function university_files() {
    wp_enqueue_style('university_main_styles', get_stylesheet_uri()); // Tải tệp CSS chính
    wp_enqueue_script('university_main_scripts', get_template_directory_uri() . '/js/scripts.js', NULL, '1.0', true); // Tải tệp JavaScript
}

add_action('wp_enqueue_scripts', 'university_files'); // Kích hoạt hàm university_files
?>
```

### Tại sao cần viết như vậy?
- **`wp_enqueue_style()`**: Hàm này giúp WordPress tải tệp CSS một cách chính xác và tránh xung đột.
- **`wp_enqueue_script()`**: Hàm này giúp tải tệp JavaScript vào website.
- **`add_action()`**: Kích hoạt các hàm trên tại thời điểm WordPress tải tài nguyên.


## Bài tập

1. Tạo một tệp `header.php` và `footer.php` trong thư mục chủ đề của bạn.
2. Bao gồm các tệp này trong tệp `index.php` của bạn bằng cách sử dụng các hàm `get_header()` và `get_footer()`.
3. Tạo tệp `functions.php` và thêm mã để tải các tệp CSS và JavaScript.


## Tổng kết

Trong bài học này, chúng ta đã học cách chuyển đổi một trang HTML và CSS tĩnh thành một chủ đề WordPress sống động. Chúng ta đã tải xuống mã khởi động, xem trước HTML tĩnh, chuyển HTML tĩnh sang chủ đề WordPress và tích hợp CSS và JavaScript.

Hy vọng bài học này giúp bạn hiểu rõ hơn về cách chuyển đổi HTML tĩnh sang WordPress. Trong bài học tiếp theo, chúng ta sẽ tiếp tục xây dựng các tính năng nâng cao cho chủ đề của mình. Hãy chuẩn bị tinh thần nhé!
