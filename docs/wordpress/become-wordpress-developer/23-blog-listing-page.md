# Tạo Trang Danh Sách Blog

## Giới thiệu

Chào các em, hôm nay thầy sẽ hướng dẫn các em cách thiết lập trang danh sách blog trên website WordPress của mình. Đây là một bước quan trọng để hiển thị các bài đăng blog gần đây nhất trên một trang riêng biệt. Nào, cùng bắt đầu nhé!

---

## Lý thuyết về trang danh sách blog

### Trang danh sách blog là gì?
Trang danh sách blog trong WordPress là một trang đặc biệt hiển thị danh sách các bài đăng blog gần đây nhất. Đây là nơi người dùng có thể xem toàn bộ nội dung blog của bạn, được sắp xếp theo thứ tự thời gian.

### Tại sao cần trang danh sách blog?
- **Tổ chức nội dung**: Hiển thị các bài đăng blog một cách rõ ràng và dễ truy cập.
- **Tăng tương tác**: Giúp người dùng dễ dàng khám phá các bài viết cũ hơn.
- **SEO tốt hơn**: Tăng khả năng hiển thị nội dung trên công cụ tìm kiếm.

---

## Tạo trang chủ và trang blog

### 1. Tạo trang chủ
- Truy cập **Pages** > **Add New** trong bảng điều khiển WordPress.
- Đặt tên trang là **Trang chủ** và để trống nội dung.
- Nhấn **Publish** để lưu trang.

### 2. Tạo trang blog
- Truy cập **Pages** > **Add New**.
- Đặt tên trang là **Blog** và để trống nội dung.
- Nhấn **Publish** để lưu trang.

---

## Cấu hình trang blog trong WordPress

### 1. Cài đặt trang tĩnh
- Truy cập **Settings** > **Reading** trong bảng điều khiển WordPress.
- Chọn **A static page** trong phần **Your homepage displays**.
- Đặt **Homepage** là **Trang chủ** và **Posts page** là **Blog**.
- Nhấn **Save Changes** để lưu cài đặt.

### Tại sao cần làm như vậy?
- **Trang tĩnh**: Cho phép bạn tách biệt nội dung trang chủ và danh sách blog.
- **Posts page**: Xác định trang nào sẽ hiển thị danh sách các bài đăng blog.

---

## Tạo mẫu trang blog

### Tạo tệp `front-page.php`
- Trong thư mục chủ đề, tạo tệp mới tên là `front-page.php`.
- Sao chép nội dung từ `index.php` và sửa lại để hiển thị nội dung trang chủ.

### Tạo tệp `index.php` cho danh sách blog
- Mở tệp `index.php` và sửa lại như sau:
```php
// filepath: index.php
<?php get_header(); ?>
<div class="page-banner">
    <h1>Chào mừng bạn đến với blog của chúng tôi</h1>
    <p>Cập nhật tin tức mới nhất của chúng tôi</p>
</div>
<div class="container container--narrow page-section">
    <?php
    if (have_posts()) {
        while (have_posts()) {
            the_post();
            ?>
            <div class="post-item">
                <h2 class="headline headline--medium headline--post-title">
                    <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                </h2>
                <div class="metabox">
                    <p>Được đăng bởi <?php the_author_posts_link(); ?> vào <?php the_time('n.j.Y'); ?> trong <?php echo get_the_category_list(', '); ?></p>
                </div>
                <div class="generic-content">
                    <?php the_excerpt(); ?>
                    <p><a class="btn btn--blue" href="<?php the_permalink(); ?>">Tiếp tục đọc</a></p>
                </div>
            </div>
            <?php
        }
    }
    ?>
</div>
<?php get_footer(); ?>
```

### Tại sao cần viết như vậy?
- **`have_posts()` và `the_post()`**: Vòng lặp WordPress để kiểm tra và hiển thị các bài đăng blog.
- **`the_title()` và `the_permalink()`**: Hiển thị tiêu đề bài đăng và liên kết đến bài viết chi tiết.
- **`the_excerpt()`**: Hiển thị đoạn trích ngắn của bài viết.
- **`the_author_posts_link()` và `the_time()`**: Hiển thị thông tin tác giả và ngày đăng bài.

---

## Hiển thị bài đăng blog

### 1. Sử dụng vòng lặp WordPress
- Vòng lặp trong `index.php` sẽ hiển thị tiêu đề, tác giả, ngày đăng, danh mục, và đoạn trích của mỗi bài đăng.

### 2. Tùy chỉnh giao diện
- Sử dụng các lớp CSS như `headline`, `metabox`, và `btn` để định dạng giao diện.

---

## Tổng kết

Trong bài học này, chúng ta đã học cách tạo trang danh sách blog trong WordPress. Chúng ta đã tạo trang chủ và trang blog, cấu hình trang blog trong WordPress, và sử dụng vòng lặp để hiển thị bài đăng blog. Hy vọng bài viết này giúp các em dễ dàng thiết lập trang blog cho website của mình. Trong bài học tiếp theo, chúng ta sẽ tiếp tục khám phá các tính năng nâng cao của WordPress. Hãy chuẩn bị tinh thần, chúng ta sẽ bắt đầu ngay thôi! 🎉