# Tạo Custom Post Type trong WordPress

## Giới thiệu

Chào các em, hôm nay thầy sẽ hướng dẫn các em cách tạo **Custom Post Type** trong WordPress. Đây là một tính năng mạnh mẽ giúp chúng ta mở rộng khả năng của WordPress, cho phép tạo các loại nội dung mới như sự kiện, chương trình, giáo sư, và khu học xá. Nào, cùng bắt đầu nhé!


## Lý thuyết về Custom Post Type

### Loại bài đăng là gì?
Trong WordPress, **Post Type** là một loại nội dung. Mặc định, WordPress cung cấp hai loại bài đăng chính:
- **Post**: Dùng cho bài đăng blog, thường được tổ chức theo danh mục và thẻ.
- **Page**: Dùng cho các trang tĩnh như "Giới thiệu" hoặc "Liên hệ".

### Custom Post Type là gì?
**Custom Post Type** cho phép bạn tạo các loại nội dung mới ngoài các loại mặc định. Ví dụ:
- **Sự kiện**: Hiển thị các sự kiện sắp tới.
- **Chương trình**: Hiển thị thông tin về các chương trình học.
- **Giáo sư**: Hiển thị danh sách giáo sư.
- **Khu học xá**: Hiển thị thông tin về các khu học xá.

### Tại sao cần Custom Post Type?
- **Tổ chức nội dung**: Giúp bạn quản lý nội dung theo cách phù hợp với mục đích của website.
- **Mở rộng khả năng**: Tạo các loại nội dung tùy chỉnh để đáp ứng nhu cầu cụ thể.
- **Thân thiện với người dùng**: Hiển thị nội dung một cách rõ ràng và dễ điều hướng.


## Mục lục

1. [Giới thiệu](#giới-thiệu)
2. [Loại bài đăng là gì?](#loại-bài-đăng-là-gì)
3. [Tạo Custom Post Type](#tạo-custom-post-type)
4. [Cấu hình Custom Post Type](#cấu-hình-custom-post-type)
5. [Sử dụng plugin "Must-Use" để bảo vệ loại bài đăng](#sử-dụng-plugin-must-use-để-bảo-vệ-loại-bài-đăng)
6. [Tổng kết](#tổng-kết)


## Tạo Custom Post Type

### 1. Thêm mã vào tệp `functions.php`
- Mở tệp `functions.php` trong thư mục chủ đề.
- Thêm đoạn mã sau để tạo Custom Post Type:

```php
// filepath: /Users/ken/Folders/Projects/polytuts-5/theme/functions.php
function university_post_types() {
    register_post_type('event', array(
        'public' => true,
        'labels' => array(
            'name' => 'Sự kiện',
            'add_new_item' => 'Thêm sự kiện mới',
            'edit_item' => 'Chỉnh sửa sự kiện',
            'all_items' => 'Tất cả sự kiện',
            'singular_name' => 'Sự kiện'
        ),
        'menu_icon' => 'dashicons-calendar'
    ));
}
add_action('init', 'university_post_types');
```

### Tại sao cần viết như vậy?
- **`register_post_type()`**: Hàm này đăng ký một loại bài đăng mới trong WordPress.
- **`public`**: Xác định rằng loại bài đăng này có thể hiển thị trên giao diện người dùng.
- **`labels`**: Tùy chỉnh các nhãn hiển thị trong giao diện quản trị viên.
- **`menu_icon`**: Thêm biểu tượng cho loại bài đăng trong thanh bên của WordPress Admin.


### 2. Kết quả
- Sau khi lưu tệp, loại bài đăng **Sự kiện** sẽ xuất hiện trong thanh bên của WordPress Admin.


## Cấu hình Custom Post Type

### 1. Tùy chỉnh nhãn
- Sử dụng tham số `labels` để tùy chỉnh tên hiển thị, ví dụ:
  - `name`: Tên hiển thị trong thanh bên.
  - `add_new_item`: Văn bản hiển thị khi thêm bài đăng mới.
  - `edit_item`: Văn bản hiển thị khi chỉnh sửa bài đăng.

### 2. Thêm biểu tượng
- Sử dụng tham số `menu_icon` để thêm biểu tượng cho loại bài đăng.
- Truy cập [Dashicons](https://developer.wordpress.org/resource/dashicons/) để chọn biểu tượng.


## Sử dụng plugin "Must-Use" để bảo vệ loại bài đăng

### 1. Tạo thư mục "Must-Use Plugins"
- Truy cập thư mục `wp-content` của WordPress.
- Tạo thư mục mới tên là `mu-plugins`.

### 2. Tạo tệp plugin
- Tạo tệp mới trong thư mục `mu-plugins`, ví dụ: `university-post-types.php`.
- Thêm đoạn mã sau:

```php
// filepath: /Users/ken/Folders/Projects/polytuts-5/wp-content/mu-plugins/university-post-types.php
<?php
function university_post_types() {
    register_post_type('event', array(
        'public' => true,
        'labels' => array(
            'name' => 'Sự kiện',
            'add_new_item' => 'Thêm sự kiện mới',
            'edit_item' => 'Chỉnh sửa sự kiện',
            'all_items' => 'Tất cả sự kiện',
            'singular_name' => 'Sự kiện'
        ),
        'menu_icon' => 'dashicons-calendar'
    ));
}
add_action('init', 'university_post_types');
```

### Tại sao cần làm như vậy?
- **Must-Use Plugins**: Đây là loại plugin đặc biệt luôn được kích hoạt, ngay cả khi chủ đề hoặc plugin khác bị thay đổi. Điều này giúp bảo vệ loại bài đăng tùy chỉnh khỏi bị vô tình xóa.


### 3. Kết quả
- Loại bài đăng **Sự kiện** sẽ luôn được kích hoạt, ngay cả khi chủ đề hoặc plugin khác bị thay đổi.


## Tổng kết

Trong bài học này, chúng ta đã học cách tạo Custom Post Type trong WordPress. Chúng ta đã tạo loại bài đăng **Sự kiện**, tùy chỉnh nhãn và biểu tượng, và sử dụng plugin "Must-Use" để bảo vệ loại bài đăng. Hy vọng bài viết này giúp các em mở rộng khả năng của WordPress. Trong bài học tiếp theo, chúng ta sẽ học cách hiển thị các bài đăng từ Custom Post Type trên giao diện người dùng. Hãy chuẩn bị tinh thần, chúng ta sẽ bắt đầu ngay thôi! 🎉

