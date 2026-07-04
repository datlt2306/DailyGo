# Chuyển Đổi HTML và CSS Tĩnh Thành Theme trong WordPress

Hello em!

Trong bài học này, chúng ta sẽ học cách chuyển đổi một trang HTML và CSS tĩnh thành một theme WordPress cơ bản. Đến thời điểm này của khóa học, trang web WordPress mà thầy và em đang làm việc không có phong cách hoặc thiết kế nào cho nó cả. Điều này không thực tế lắm phải không? Vì vậy, chúng ta cần thêm chút thiết kế và hướng nghệ thuật vào website của chúng ta.

### Tại sao cần chuyển đổi HTML tĩnh sang WordPress?
Như các em đã biết HTML tĩnh là các trang web không có khả năng tương tác hoặc quản lý nội dung động. Trong khi đó, WordPress là một hệ thống quản lý nội dung (CMS) mạnh mẽ, cho phép em dễ dàng quản lý, chỉnh sửa, và mở rộng nội dung của website. Việc chuyển đổi HTML tĩnh sang WordPress giúp em:
- **Quản lý nội dung dễ dàng**: Sử dụng giao diện quản trị của WordPress.
- **Tái sử dụng mã**: Tách biệt các phần như tiêu đề (header), chân trang (footer), và nội dung chính.
- **Tích hợp tính năng động**: Thêm các plugin, widget, và tính năng tùy chỉnh.

### Các tệp mẫu (Template Files) trong WordPress
WordPress sử dụng các tệp mẫu như `header.php`, `footer.php`, và `index.php` để xây dựng giao diện website. Các file này giúp em tổ chức mã HTML và PHP một cách rõ ràng và dễ quản lý.

### Cấu trúc thư mục cho Theme WordPress

Khi chuyển từ HTML tĩnh sang WordPress, việc hiểu và tổ chức đúng cấu trúc thư mục là rất quan trọng. Dưới đây là cấu trúc thư mục cơ bản cho một theme WordPress:

```
theme-name/
├── style.css           # File CSS chính và thông tin theme
├── index.php           # Template chính
├── header.php          # Header của website
├── footer.php          # Footer của website
├── functions.php       # Chức năng và hooks của theme
├── screenshot.png      # Hình ảnh xem trước theme (1200x900px)
├── page.php            # Template cho trang
├── single.php          # Template cho bài viết đơn
├── archive.php         # Template cho trang lưu trữ
├── 404.php             # Template cho lỗi 404
├── search.php          # Template cho kết quả tìm kiếm
├── sidebar.php         # Sidebar của website
├── assets/             # Thư mục chứa tài nguyên
│   ├── css/            # Các file CSS bổ sung
│   ├── js/             # Các file JavaScript
│   └── images/         # Hình ảnh của theme
└── inc/                # Các file PHP bổ sung
    └── customizer.php  # Tùy chỉnh theme
```

Những lưu ý quan trọng:
- **style.css**: Phải có header comment chứa thông tin theme (tên, tác giả, phiên bản...)
- **functions.php**: Nơi đăng ký scripts, styles, menus, widgets và các chức năng khác
- **Tệp template phân cấp**: WordPress sử dụng hệ thống phân cấp template để hiển thị nội dung

Khi bắt đầu chuyển đổi, chúng ta chỉ cần tập trung vào các file cốt lõi: `style.css`, `index.php`, `header.php`, `footer.php` và `functions.php`. Các file còn lại có thể được thêm vào khi theme phát triển.

## 1. Tải xuống mã khởi động

Để bắt đầu, chúng ta sẽ tải xuống một chút HTML và CSS mà tôi đã viết cho chúng ta. em có thể mở một tab mới trong trình duyệt web của mình và truy cập URL này:

```bash
https://github.com/learnwebcode/university-static
```

Tại đây, em chỉ cần sử dụng nút "Clone or download" và chọn "Download ZIP". Sau khi tải xuống và giải nén tệp ZIP, em sẽ có một thư mục có tên là `university-static-master`.


## 2. Xem trước HTML tĩnh

Trước tiên, hãy xem trước tệp HTML đã được lập chỉ mục trong trình duyệt web của em. Mở tệp `index.html` từ thư mục `university-static-master` trong trình duyệt của em. em sẽ thấy một trang HTML tĩnh không có PHP và hoàn toàn không liên quan gì đến WordPress.


## 3. Chuyển HTML tĩnh sang theme WordPress

### Tạo tệp `header.php`
Tệp `header.php` chứa phần đầu trang của website, bao gồm các thẻ HTML cơ bản và các hàm WordPress như `wp_head()`.

::: code-group
```php [header.php]
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
:::

### Giải thích
- **`wp_head()`**: Hàm này cho phép WordPress tự động thêm các tài nguyên như CSS, JavaScript, và meta tags vào phần `<head>` của trang.

### Tạo file `footer.php`
File `footer.php` chứa phần chân trang của website và sử dụng hàm `wp_footer()` để thêm các tài nguyên cần thiết vào cuối trang.
::: code-group
```php [footer.php]
    <footer>
        <p>Đây là khu vực chân trang</p> <!-- Hiển thị nội dung chân trang -->
    </footer>
    <?php wp_footer(); ?> <!-- Hàm này cho phép WordPress thêm các tài nguyên cần thiết vào cuối trang -->
</body>
</html>
```
:::

### Giải thích
- **`wp_footer()`**: Hàm này cho phép WordPress thêm các tài nguyên như JavaScript vào cuối trang, đảm bảo website hoạt động đúng cách.

### Bao gồm các tệp này trong tệp chính
Tệp `index.php` là tệp mẫu chính của WordPress. Chúng ta sẽ sử dụng các hàm `get_header()` và `get_footer()` để gọi nội dung từ các tệp `header.php` và `footer.php`.

::: code-group
```php [index.php]
<?php get_header(); ?> <!-- Gọi tệp header.php -->

<!-- Nội dung trang -->
<main>
    <h1>Chào mừng đến với trang chủ của chúng tôi</h1>
    <p>Đây là nội dung chính của trang.</p>
</main>

<?php get_footer(); ?> <!-- Gọi tệp footer.php -->
```
:::

## 4. Tích hợp CSS và JavaScript

### Tạo tệp `functions.php`
Tệp `functions.php` được sử dụng để đăng ký và tải các tệp CSS và JavaScript vào website.

::: code-group
```php [functions.php]
<?php
function university_files() {
    wp_enqueue_style('university_main_styles', get_stylesheet_uri()); // Tải tệp CSS chính
    wp_enqueue_style('university_additional_styles', get_template_directory_uri() . '/build/css/style-additional.css'); // Tải tệp CSS bổ sung
    wp_enqueue_script('university_main_scripts', get_template_directory_uri() . '/build/js/index.js', array('jquery'), '1.0', true); // Tải tệp JavaScript
}

add_action('wp_enqueue_scripts', 'university_files'); // Kích hoạt hàm university_files
?>
```
:::

### Tại sao cần viết như vậy?
- **`wp_enqueue_style()`**: Hàm này giúp WordPress tải tệp CSS một cách chính xác và tránh xung đột.
- **`wp_enqueue_script()`**: Hàm này giúp tải tệp JavaScript vào website.
- **`add_action()`**: Kích hoạt các hàm trên tại thời điểm WordPress tải tài nguyên.

## 5. Xử lý hình ảnh và tài nguyên khác

### Chuyển các thư mục tài nguyên
Di chuyển các thư mục `build`, `images`, `css`, và `js` từ `university-static-master` vào thư mục theme WordPress của em.

### Cập nhật đường dẫn hình ảnh
Cập nhật đường dẫn hình ảnh trong tệp `index.php` để sử dụng hàm `get_template_directory_uri()` của WordPress:

```php
<div
    class="banner"
    style="background-image: url('<?php echo get_template_directory_uri(); ?>/images/library-hero.jpg');"
>
    <div class="banner__content">
        <h1>Chào mừng đến với trang web của chúng tôi</h1>
        <p>Khám phá thêm về dịch vụ của chúng tôi.</p>
    </div>
</div>
```
## Bài tập

1. Tạo một tệp `header.php` và `footer.php` trong thư mục theme của em.
2. Bao gồm các tệp này trong tệp `index.php` của em bằng cách sử dụng các hàm `get_header()` và `get_footer()`.
3. Tạo tệp `functions.php` và thêm mã để tải các tệp CSS và JavaScript.
4. Cập nhật đường dẫn hình ảnh trong tệp `index.php` để sử dụng hàm `get_template_directory_uri()`.
5. Tạo và đăng ký menu động cho header và footer.

## Tổng kết

Trong bài học này, chúng ta đã học cách chuyển đổi một trang HTML và CSS tĩnh thành một theme WordPress đầy đủ chức năng. Chúng ta đã tìm hiểu:

- Cấu trúc thư mục của một theme WordPress
- Cách tạo các tệp template cơ bản: header.php, footer.php, index.php
- Cách đăng ký và tải CSS, JavaScript thông qua functions.php
- Xử lý đường dẫn tài nguyên như hình ảnh
- Tạo menu động có thể quản lý từ WordPress admin

Quá trình chuyển đổi này không chỉ giúp website của chúng ta có giao diện đẹp mắt mà còn mang lại khả năng quản lý nội dung linh hoạt thông qua hệ thống quản trị WordPress.

Trong bài học tiếp theo, chúng ta sẽ tìm hiểu cách tùy chỉnh theme với các tính năng nâng cao hơn như widget, custom post types, và các template cho các loại nội dung khác nhau.

Hãy tiếp tục thực hành với bài tập đã được giao và chuẩn bị cho những kiến thức mới trong bài học tiếp theo!
