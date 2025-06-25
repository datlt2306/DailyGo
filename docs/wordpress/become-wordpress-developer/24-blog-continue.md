---
id: tiep-tuc-xay-dung-blog
title: Tiếp Tục Xây Dựng Blog
sidebar_position: 24
---

# Tiếp Tục Xây Dựng Blog

## Giới thiệu

Chào các em, hôm nay thầy sẽ hướng dẫn các em cách tiếp tục xây dựng phần blog trên website WordPress của mình. Trong bài học trước, chúng ta đã tạo trang danh sách blog. Bây giờ, chúng ta sẽ thêm tính năng phân trang và cải thiện giao diện của các bài đăng blog cá nhân. Nào, cùng bắt đầu nhé!

## Mục lục

1. [Giới thiệu](#giới-thiệu)
2. [Thêm tính năng phân trang](#thêm-tính-năng-phân-trang)
3. [Cải thiện giao diện bài đăng blog cá nhân](#cải-thiện-giao-diện-bài-đăng-blog-cá-nhân)
4. [Tổng kết](#tổng-kết)

---

## Thêm tính năng phân trang

### 1. Cấu hình số lượng bài đăng trên mỗi trang
- Truy cập **Settings** > **Reading** trong bảng điều khiển WordPress.
- Thay đổi giá trị **Blog pages show at most** thành số lượng bài đăng mong muốn (ví dụ: 2).
- Nhấn **Save Changes** để lưu cài đặt.

### 2. Thêm liên kết phân trang
- Mở tệp `index.php` trong thư mục chủ đề.
- Thêm đoạn mã sau vào cuối tệp, ngay trước div đóng cuối cùng:
```php
<?php
echo paginate_links();
?>
```

### 3. Kết quả
- Khi số lượng bài đăng vượt quá giới hạn, các liên kết phân trang sẽ xuất hiện ở cuối trang blog.

---

## Cải thiện giao diện bài đăng blog cá nhân

### 1. Cập nhật tệp `single.php`
- Mở tệp `single.php` trong thư mục chủ đề.
- Thêm vùng biểu ngữ và nội dung bài đăng:
```php
<?php get_header(); ?>
<div class="page-banner">
    <h1><?php the_title(); ?></h1>
    <p>Được đăng bởi <?php the_author_posts_link(); ?> vào <?php the_time('n.j.Y'); ?> trong <?php echo get_the_category_list(', '); ?></p>
</div>
<div class="container container--narrow page-section">
    <div class="generic-content">
        <?php the_content(); ?>
    </div>
</div>
<?php get_footer(); ?>
```

### 2. Kết quả
- Giao diện bài đăng blog cá nhân sẽ hiển thị tiêu đề, thông tin tác giả, ngày đăng, danh mục, và nội dung bài đăng.

---

## Tổng kết

Trong bài học này, chúng ta đã thêm tính năng phân trang cho danh sách blog và cải thiện giao diện bài đăng blog cá nhân. Hy vọng bài viết này giúp các em tiếp tục xây dựng phần blog một cách dễ dàng. Trong bài học tiếp theo, chúng ta sẽ học cách tùy chỉnh tiêu đề và phụ đề cho các màn hình lưu trữ. Hãy chuẩn bị tinh thần, chúng ta sẽ bắt đầu ngay thôi! 🎉