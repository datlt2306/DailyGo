# Hiển Thị Loại Bài Đăng Tùy Chỉnh trong WordPress

## Giới thiệu

Chào các em, hôm nay thầy sẽ hướng dẫn các em cách hiển thị các bài đăng từ loại bài đăng tùy chỉnh trên giao diện người dùng của trang web. Loại bài đăng tùy chỉnh là một cách mạnh mẽ để mở rộng khả năng của WordPress, cho phép thầy trò mình tạo các loại nội dung mới như sự kiện, chương trình, giáo sư, và khu học xá.

## Lý thuyết về hiển thị loại bài đăng tùy chỉnh

### Tại sao cần hiển thị loại bài đăng tùy chỉnh?
- **Tăng tính linh hoạt**: Hiển thị nội dung động từ loại bài đăng tùy chỉnh giúp website của các em trở nên chuyên nghiệp hơn.
- **Tùy chỉnh giao diện**: Các em có thể kiểm soát cách hiển thị nội dung, từ trang chủ đến màn hình lưu trữ.
- **Tổ chức nội dung**: Hiển thị bài đăng tùy chỉnh giúp người dùng dễ dàng tìm kiếm và khám phá nội dung.

### Các thành phần chính
- **Truy vấn tùy chỉnh (Custom Query)**: Sử dụng lớp `WP_Query` để lấy dữ liệu từ cơ sở dữ liệu theo điều kiện cụ thể.
- **Mẫu bài đăng (Single Template)**: Kiểm soát cách hiển thị nội dung của từng bài đăng tùy chỉnh.
- **Mẫu lưu trữ (Archive Template)**: Hiển thị danh sách tất cả các bài đăng thuộc loại bài đăng tùy chỉnh.

## Hiển thị bài đăng tùy chỉnh trên trang chủ

### 1. Tạo truy vấn tùy chỉnh
Để hiển thị các bài đăng từ loại bài đăng tùy chỉnh trên trang chủ, thầy trò mình cần sử dụng **truy vấn tùy chỉnh**. Truy vấn tùy chỉnh cho phép thầy trò mình lấy dữ liệu từ cơ sở dữ liệu theo điều kiện mong muốn.

- Mở tệp `front-page.php` và thêm đoạn mã sau:
```php
// filepath: /Users/ken/Folders/Projects/polytuts-5/theme/front-page.php
<?php
$homepageEvents = new WP_Query(array(
    'posts_per_page' => 2, // Hiển thị 2 bài đăng
    'post_type' => 'event' // Lấy bài đăng từ loại bài đăng 'event'
));
?>
```

### Tại sao cần viết như vậy?
- **`WP_Query`**: Lớp này cho phép tạo truy vấn tùy chỉnh để lấy nội dung theo điều kiện cụ thể.
- **`posts_per_page`**: Xác định số lượng bài đăng cần hiển thị.
- **`post_type`**: Chỉ định loại bài đăng cần truy vấn (ví dụ: `event`).

### 2. Hiển thị bài đăng
Sau khi tạo truy vấn, thầy trò mình cần sử dụng **vòng lặp WordPress** để hiển thị nội dung bài đăng.

```php
// filepath: /Users/ken/Folders/Projects/polytuts-5/theme/front-page.php
<?php
if ($homepageEvents->have_posts()) {
    while ($homepageEvents->have_posts()) {
        $homepageEvents->the_post();
        ?>
        <div class="event-summary">
            <a href="<?php the_permalink(); ?>" class="event-summary__title"><?php the_title(); ?></a>
            <p><?php echo wp_trim_words(get_the_content(), 18); ?></p>
            <a href="<?php the_permalink(); ?>" class="btn btn--blue">Tìm hiểu thêm</a>
        </div>
        <?php
    }
}
wp_reset_postdata(); // Dọn dẹp sau khi sử dụng truy vấn tùy chỉnh
?>
```

### Tại sao cần viết như vậy?
- **`have_posts()` và `the_post()`**: Kiểm tra và lấy dữ liệu bài đăng từ truy vấn tùy chỉnh.
- **`wp_reset_postdata()`**: Dọn dẹp dữ liệu sau khi sử dụng truy vấn tùy chỉnh để tránh xung đột với truy vấn mặc định.

## Tạo mẫu cho bài đăng tùy chỉnh

### 1. Tại sao cần mẫu riêng cho bài đăng tùy chỉnh?
Mẫu riêng giúp thầy trò mình kiểm soát cách hiển thị nội dung của từng bài đăng tùy chỉnh. Ví dụ, khi người dùng truy cập vào một bài đăng sự kiện, thầy trò mình có thể hiển thị thông tin chi tiết về sự kiện đó.

### 2. Tạo tệp `single-event.php`
- Trong thư mục chủ đề, tạo tệp mới tên là `single-event.php`.
- Thêm đoạn mã sau để hiển thị nội dung bài đăng tùy chỉnh:
```php
// filepath: /Users/ken/Folders/Projects/polytuts-5/theme/single-event.php
<?php get_header(); ?>
<div class="container container--narrow page-section">
    <h1><?php the_title(); ?></h1> <!-- Hiển thị tiêu đề bài đăng -->
    <p><?php the_content(); ?></p> <!-- Hiển thị nội dung bài đăng -->
    <a href="<?php echo get_post_type_archive_link('event'); ?>" class="btn btn--blue">Trang chủ sự kiện</a>
</div>
<?php get_footer(); ?>
```

### Tại sao cần viết như vậy?
- **`get_post_type_archive_link()`**: Hàm này trả về liên kết đến màn hình lưu trữ của loại bài đăng tùy chỉnh.
- **HTML và CSS**: Kết hợp với các lớp CSS để định dạng giao diện.

## Tạo mẫu lưu trữ cho bài đăng tùy chỉnh

### 1. Tại sao cần mẫu lưu trữ?
Mẫu lưu trữ giúp hiển thị danh sách tất cả các bài đăng thuộc loại bài đăng tùy chỉnh. Ví dụ, màn hình lưu trữ sự kiện sẽ hiển thị danh sách tất cả các sự kiện.

### 2. Tạo tệp `archive-event.php`
- Trong thư mục chủ đề, tạo tệp mới tên là `archive-event.php`.
- Thêm đoạn mã sau để hiển thị danh sách bài đăng tùy chỉnh:
```php
// filepath: /Users/ken/Folders/Projects/polytuts-5/theme/archive-event.php
<?php get_header(); ?>
<div class="container container--narrow page-section">
    <h1>Tất cả các sự kiện</h1>
    <?php
    if (have_posts()) {
        while (have_posts()) {
            the_post();
            ?>
            <div class="event-summary">
                <a href="<?php the_permalink(); ?>" class="event-summary__title"><?php the_title(); ?></a>
                <p><?php echo wp_trim_words(get_the_content(), 18); ?></p>
                <a href="<?php the_permalink(); ?>" class="btn btn--blue">Tìm hiểu thêm</a>
            </div>
            <?php
        }
    }
    ?>
</div>
<?php get_footer(); ?>
```

### Tại sao cần viết như vậy?
- **`have_posts()` và `the_post()`**: Hiển thị danh sách bài đăng từ loại bài đăng tùy chỉnh.
- **HTML và CSS**: Kết hợp với các lớp CSS để định dạng giao diện.

## Tổng kết

Trong bài học này, thầy trò mình đã học cách hiển thị các bài đăng từ loại bài đăng tùy chỉnh trên giao diện người dùng. Thầy trò mình đã tạo truy vấn tùy chỉnh, mẫu cho bài đăng tùy chỉnh, và mẫu lưu trữ. Hy vọng bài viết này giúp các em dễ dàng hiển thị nội dung động trên website của mình. Trong bài học tiếp theo, thầy trò mình sẽ học cách sử dụng trường tùy chỉnh để thêm thông tin bổ sung cho bài đăng. Hãy chuẩn bị tinh thần, thầy trò mình sẽ bắt đầu ngay thôi! 🎉
