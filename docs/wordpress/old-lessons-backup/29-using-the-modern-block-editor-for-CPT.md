# Sử dụng Trình Chỉnh Sửa Khối Hiện Đại cho Loại Bài Đăng Tùy Chỉnh

## Giới thiệu

Chào các em, hôm nay thầy sẽ hướng dẫn các em cách sử dụng **trình chỉnh sửa khối hiện đại** cho loại bài đăng tùy chỉnh trong WordPress. Trình chỉnh sửa khối (Block Editor) là một công cụ mạnh mẽ giúp các em tạo nội dung trực quan hơn, dễ dàng hơn, và tích hợp tốt hơn với các tính năng hiện đại của WordPress.

## Lý thuyết về trình chỉnh sửa khối

### Trình chỉnh sửa khối là gì?
Trình chỉnh sửa khối (Block Editor), còn được gọi là Gutenberg, là trình chỉnh sửa nội dung mặc định của WordPress kể từ phiên bản 5.0. Nó cho phép người dùng tạo nội dung bằng cách sử dụng các khối (blocks) như văn bản, hình ảnh, video, và biểu mẫu.

### Tại sao cần trình chỉnh sửa khối?
- **Giao diện trực quan**: Trình chỉnh sửa khối cung cấp giao diện kéo thả, giúp việc tạo nội dung trở nên dễ dàng hơn.
- **Tích hợp REST API**: Trình chỉnh sửa khối hoạt động dựa trên REST API, cho phép các em tận dụng các tính năng hiện đại của WordPress.
- **Tương lai của WordPress**: Trình chỉnh sửa khối là hướng đi chính của WordPress, thay thế trình chỉnh sửa cổ điển.

### Mặc định của loại bài đăng tùy chỉnh
Theo mặc định, các loại bài đăng tùy chỉnh sẽ sử dụng trình chỉnh sửa cổ điển. Tuy nhiên, thầy trò mình có thể kích hoạt trình chỉnh sửa khối bằng cách thêm thuộc tính `show_in_rest` khi đăng ký loại bài đăng.

## Cập nhật mã đăng ký loại bài đăng tùy chỉnh

### 1. Thêm thuộc tính `show_in_rest`
Để kích hoạt trình chỉnh sửa khối cho loại bài đăng tùy chỉnh, thầy trò mình cần thêm thuộc tính `show_in_rest` vào mã đăng ký loại bài đăng.

- Mở tệp `university-post-types.php` trong thư mục `mu-plugins`.
- Thêm thuộc tính `show_in_rest` vào mã đăng ký loại bài đăng:
```php
// filepath: /Users/ken/Folders/Projects/polytuts-5/wp-content/mu-plugins/university-post-types.php
function university_post_types() {
    register_post_type('event', array(
        'public' => true,
        'show_in_rest' => true, // Kích hoạt trình chỉnh sửa khối
        'labels' => array(
            'name' => 'Events',
            'add_new_item' => 'Add New Event',
            'edit_item' => 'Edit Event',
            'all_items' => 'All Events',
            'singular_name' => 'Event'
        ),
        'menu_icon' => 'dashicons-calendar'
    ));
}
add_action('init', 'university_post_types');
```

### Tại sao cần viết như vậy?
- **`show_in_rest`**: Thuộc tính này kích hoạt REST API cho loại bài đăng, cho phép trình chỉnh sửa khối hoạt động.
- **REST API**: Là nền tảng của trình chỉnh sửa khối, giúp WordPress giao tiếp với các công nghệ hiện đại.

## Kiểm tra trình chỉnh sửa khối

### 1. Truy cập loại bài đăng tùy chỉnh
- Vào **Dashboard** > **Events** > **Add New**.
- Kiểm tra xem trình chỉnh sửa khối đã được kích hoạt hay chưa.

### 2. Lợi ích của trình chỉnh sửa khối
- **Giao diện trực quan hơn**: Dễ dàng tạo và quản lý nội dung.
- **Hỗ trợ các khối nội dung hiện đại**: Tích hợp tốt với các tính năng như hình ảnh, video, và biểu mẫu.
- **Tích hợp REST API**: Cho phép sử dụng các công nghệ hiện đại để mở rộng tính năng.

## Tổng kết

Trong bài học này, thầy trò mình đã học cách kích hoạt trình chỉnh sửa khối hiện đại cho loại bài đăng tùy chỉnh bằng cách thêm thuộc tính `show_in_rest`. Hy vọng bài viết này giúp các em tận dụng tối đa các tính năng hiện đại của WordPress. Trong bài học tiếp theo, thầy trò mình sẽ khám phá REST API chi tiết hơn. Hãy chuẩn bị tinh thần, thầy trò mình sẽ bắt đầu ngay thôi! 🎉
