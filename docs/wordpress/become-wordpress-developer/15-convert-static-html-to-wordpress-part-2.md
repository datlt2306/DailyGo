# Chuyển Đổi HTML và CSS Tĩnh Thành Theme trong WordPress phần 2

Chào mừng bạn đã trở lại!

Trong bài học này, chúng ta sẽ tiếp tục học cách chuyển đổi một trang HTML và CSS tĩnh thành một chủ đề WordPress sống động. Đến thời điểm này của khóa học, chủ đề và trang web WordPress mà chúng tôi đang làm việc không có phong cách hoặc thiết kế nào cho nó. Điều này không thực tế lắm phải không? Vì vậy, chúng ta cần thêm thiết kế và hướng nghệ thuật vào chủ đề của chúng ta.

---

## Lý thuyết về chuyển đổi HTML tĩnh sang WordPress

### Tại sao cần chuyển đổi HTML tĩnh sang WordPress?
HTML tĩnh chỉ phù hợp với các trang web đơn giản, không có khả năng quản lý nội dung động. WordPress, với hệ thống quản lý nội dung (CMS) mạnh mẽ, cho phép bạn dễ dàng quản lý, chỉnh sửa, và mở rộng nội dung của website. Việc chuyển đổi HTML tĩnh sang WordPress giúp:
- **Tự động hóa**: Tách biệt các phần như tiêu đề (header), chân trang (footer), và nội dung chính để tái sử dụng.
- **Quản lý nội dung động**: Sử dụng giao diện quản trị của WordPress để thêm, sửa, hoặc xóa nội dung.
- **Tích hợp tính năng nâng cao**: Thêm plugin, widget, và các tính năng tùy chỉnh.

### Các tệp mẫu (Template Files) trong WordPress
WordPress sử dụng các tệp mẫu như `header.php`, `footer.php`, và `index.php` để xây dựng giao diện website. Các tệp này giúp bạn tổ chức mã HTML và PHP một cách rõ ràng và dễ quản lý.

---

## 1. Bắt đầu với tiêu đề

### Sao chép mã HTML tiêu đề
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

### Dán mã vào `header.php`
Mở tệp `header.php` trong thư mục chủ đề WordPress của bạn và dán mã HTML vào:

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

### Tại sao cần viết như vậy?
- **`wp_head()`**: Hàm này cho phép WordPress tự động thêm các tài nguyên như CSS, JavaScript, và meta tags vào phần `<head>` của trang.

---

## 2. Chuyển phần chân trang

### Sao chép mã HTML chân trang
Mở tệp `index.html` và sao chép phần tử chân trang:

```html
<footer>
    <p>Đây là khu vực chân trang</p>
</footer>
```

### Dán mã vào `footer.php`
Mở tệp `footer.php` trong thư mục chủ đề WordPress của bạn và dán mã HTML vào:

```php
<!-- filepath: footer.php -->
    <footer>
        <p>Đây là khu vực chân trang</p> <!-- Hiển thị nội dung chân trang -->
    </footer>
    <?php wp_footer(); ?> <!-- Hàm này cho phép WordPress thêm các tài nguyên cần thiết vào cuối trang -->
</body>
</html>
```

### Tại sao cần viết như vậy?
- **`wp_footer()`**: Hàm này cho phép WordPress thêm các tài nguyên như JavaScript vào cuối trang, đảm bảo website hoạt động đúng cách.

---

## 3. Tích hợp CSS và JavaScript

### Tạo tệp `functions.php`
Tệp `functions.php` được sử dụng để đăng ký và tải các tệp CSS và JavaScript vào website.

```php
<!-- filepath: functions.php -->
<?php
function university_files() {
    wp_enqueue_style('university_main_styles', get_template_directory_uri() . '/build/css/style-index.css'); // Tải tệp CSS chính
    wp_enqueue_style('university_additional_styles', get_template_directory_uri() . '/build/css/style-additional.css'); // Tải tệp CSS bổ sung
    wp_enqueue_script('university_main_scripts', get_template_directory_uri() . '/build/js/index.js', array('jquery'), '1.0', true); // Tải tệp JavaScript
}

add_action('wp_enqueue_scripts', 'university_files'); // Kích hoạt hàm university_files
?>
```

### Tại sao cần viết như vậy?
- **`wp_enqueue_style()`**: Hàm này giúp WordPress tải tệp CSS một cách chính xác và tránh xung đột.
- **`wp_enqueue_script()`**: Hàm này giúp tải tệp JavaScript vào website.
- **`add_action()`**: Kích hoạt các hàm trên tại thời điểm WordPress tải tài nguyên.

---

## 4. Chuyển hình ảnh và các tệp khác

### Chuyển các thư mục
Di chuyển các thư mục `build`, `images`, `css`, và `js` từ `university-static-master` vào thư mục chủ đề WordPress của bạn.

### Cập nhật đường dẫn hình ảnh
Cập nhật đường dẫn hình ảnh trong tệp `index.php` để sử dụng hàm `get_template_directory_uri()` của WordPress:

```php
<!-- filepath: index.php -->
<div
    class="banner"
    style="background-image: url('<?php echo get_template_directory_uri(); ?>/images/library-hero.jpg');"
></div>
```

### Tại sao cần viết như vậy?
- **`get_template_directory_uri()`**: Hàm này trả về đường dẫn đến thư mục chủ đề, giúp bạn dễ dàng quản lý các tài nguyên như hình ảnh.

---

## Bài tập

1. Tạo một tệp `header.php` và `footer.php` trong thư mục chủ đề của bạn.
2. Bao gồm các tệp này trong tệp `index.php` của bạn bằng cách sử dụng các hàm `get_header()` và `get_footer()`.
3. Tạo tệp `functions.php` và thêm mã để tải các tệp CSS và JavaScript.
4. Cập nhật đường dẫn hình ảnh trong tệp `index.php` để sử dụng hàm `get_template_directory_uri()`.

---

## Tổng kết

Trong bài học này, chúng ta đã học cách chuyển đổi một trang HTML và CSS tĩnh thành một chủ đề WordPress sống động. Chúng ta đã bắt đầu với tiêu đề, chuyển phần chân trang, tích hợp CSS và JavaScript, cập nhật đường dẫn hình ảnh và các tệp khác.

Hy vọng bài học này giúp bạn hiểu rõ hơn về cách chuyển đổi HTML tĩnh sang WordPress. Trong bài học tiếp theo, chúng ta sẽ tiếp tục xây dựng các tính năng nâng cao cho chủ đề của mình. Hãy chuẩn bị tinh thần nhé!
