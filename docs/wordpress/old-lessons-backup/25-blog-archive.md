# Tạo Trang Lưu Trữ Blog

## Giới thiệu

Chào các em, hôm nay thầy sẽ hướng dẫn các em cách thiết lập trang lưu trữ blog trong WordPress. Trang lưu trữ giúp hiển thị các bài đăng blog theo danh mục, tác giả, hoặc ngày tháng. Đây là một phần quan trọng để tổ chức nội dung trên website. Nào, cùng bắt đầu nhé!

## Lý thuyết về trang lưu trữ blog

### Trang lưu trữ blog là gì?
Trang lưu trữ blog trong WordPress là một trang đặc biệt hiển thị danh sách các bài đăng blog dựa trên các tiêu chí như danh mục, tác giả, hoặc ngày tháng. Nó giúp người dùng dễ dàng tìm kiếm và khám phá nội dung liên quan.

### Tại sao cần trang lưu trữ blog?
- **Tổ chức nội dung**: Hiển thị bài đăng theo nhóm, giúp người dùng dễ dàng điều hướng.
- **Thân thiện với SEO**: Tăng khả năng hiển thị nội dung trên công cụ tìm kiếm.
- **Cải thiện trải nghiệm người dùng**: Giúp người dùng tìm kiếm nội dung theo danh mục hoặc tác giả một cách dễ dàng.

## Tạo tệp `archive.php`

### 1. Tạo tệp mới
- Trong thư mục chủ đề, tạo tệp mới tên là `archive.php`.
- Sao chép nội dung từ `index.php` và sửa lại để phù hợp với trang lưu trữ.

### 2. Cấu trúc cơ bản
- Thêm đoạn mã sau vào tệp `archive.php`:

```php
// filepath: archive.php
<?php get_header(); ?>
<div class="page-banner">
    <h1><?php the_archive_title(); ?></h1> <!-- Hiển thị tiêu đề lưu trữ -->
    <p><?php the_archive_description(); ?></p> <!-- Hiển thị mô tả lưu trữ -->
</div>
<div class="container container--narrow page-section">
    <?php
    if (have_posts()) {
        while (have_posts()) {
            the_post();
            ?>
            <div class="post-item">
                <h2 class="headline headline--medium headline--post-title">
                    <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a> <!-- Hiển thị tiêu đề bài đăng -->
                </h2>
                <div class="metabox">
                    <p>Được đăng bởi <?php the_author_posts_link(); ?> vào <?php the_time('n.j.Y'); ?> trong <?php echo get_the_category_list(', '); ?></p> <!-- Hiển thị thông tin tác giả, ngày đăng và danh mục -->
                </div>
                <div class="generic-content">
                    <?php the_excerpt(); ?> <!-- Hiển thị đoạn trích ngắn -->
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
- **`the_archive_title()`**: Hiển thị tiêu đề động dựa trên loại lưu trữ (danh mục, tác giả, ngày tháng).
- **`the_archive_description()`**: Hiển thị mô tả lưu trữ (nếu có).
- **`the_excerpt()`**: Hiển thị đoạn trích ngắn của bài viết, giúp người dùng xem trước nội dung.

## Hiển thị tiêu đề lưu trữ

### 1. Sử dụng `the_archive_title()`
- Hàm `the_archive_title()` tự động hiển thị tiêu đề phù hợp với loại lưu trữ:
  - **Danh mục**: Hiển thị tên danh mục.
  - **Tác giả**: Hiển thị tên tác giả.
  - **Ngày tháng**: Hiển thị năm, tháng, hoặc ngày.

### 2. Kết quả
- Tiêu đề lưu trữ sẽ thay đổi động dựa trên loại lưu trữ.

## Hiển thị mô tả lưu trữ

### 1. Sử dụng `the_archive_description()`
- Hàm `the_archive_description()` hiển thị mô tả lưu trữ:
  - **Danh mục**: Hiển thị mô tả của danh mục (nếu có).
  - **Tác giả**: Hiển thị tiểu sử của tác giả (nếu có).

### 2. Cập nhật mô tả
- **Danh mục**: Truy cập **Posts** > **Categories**, chọn danh mục và thêm mô tả.
- **Tác giả**: Truy cập **Users** > **Profile**, thêm thông tin tiểu sử.

### Tại sao cần làm như vậy?
- **Mô tả lưu trữ**: Cung cấp thông tin bổ sung về danh mục hoặc tác giả, giúp người dùng hiểu rõ hơn về nội dung.

## Tổng kết

Trong bài học này, thầy trò mình đã học cách tạo trang lưu trữ blog trong WordPress. Thầy trò mình đã tạo tệp `archive.php`, hiển thị tiêu đề và mô tả lưu trữ động. Hy vọng bài viết này giúp các em dễ dàng tổ chức nội dung trên website của mình. Trong bài học tiếp theo, thầy trò mình sẽ học cách tích hợp blog với trang chủ tùy chỉnh. Hãy chuẩn bị tinh thần, thầy trò mình sẽ bắt đầu ngay thôi! 🎉
