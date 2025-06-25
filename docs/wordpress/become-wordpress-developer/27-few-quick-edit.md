# Một vài chỉnh sửa nhanh liên quan đến phần blog

## Giới thiệu

Chào các em, hôm nay thầy sẽ hướng dẫn các em thực hiện một vài chỉnh sửa nhỏ liên quan đến phần blog trên website WordPress của mình. Đây sẽ là một bài học rất nhanh, nhưng rất hữu ích. Nào, cùng bắt đầu nhé!

---

## Mục lục

1. [Cập nhật nút "Xem tất cả các bài đăng trên blog"](#cập-nhật-nút-xem-tất-cả-các-bài-đăng-trên-blog)
2. [Sửa liên kết blog trong điều hướng tiêu đề](#sửa-liên-kết-blog-trong-điều-hướng-tiêu-đề)
3. [Tổng kết](#tổng-kết)

---

## Cập nhật nút "Xem tất cả các bài đăng trên blog"

### 1. Sửa liên kết nút
- Mở tệp `front-page.php` và tìm nút "Xem tất cả các bài đăng trên blog".
- Sửa giá trị `href` của nút:
```php
<a class="btn btn--blue" href="<?php echo site_url('/blog'); ?>">Xem tất cả các bài đăng trên blog</a>
```

### 2. Kết quả
- Khi nhấn vào nút, người dùng sẽ được chuyển đến trang danh sách blog.

---

## Sửa liên kết blog trong điều hướng tiêu đề

### 1. Cập nhật liên kết blog
- Mở tệp `header.php` và tìm liên kết blog trong điều hướng tiêu đề.
- Sửa giá trị `href` của liên kết:
```php
<li>
    <a href="<?php echo site_url('/blog'); ?>" 
       class="<?php if (get_post_type() === 'post') echo 'current-menu-item'; ?>">
       Blog
    </a>
</li>
```

### 2. Kết quả
- Liên kết blog sẽ hoạt động và chuyển đến trang danh sách blog.
- Khi người dùng đang ở trang blog, bài đăng blog cá nhân, hoặc màn hình lưu trữ liên quan đến blog, liên kết blog sẽ sáng lên màu vàng để chỉ định trang hiện tại.

---

## Tổng kết

Trong bài học này, chúng ta đã thực hiện hai chỉnh sửa nhỏ nhưng quan trọng:
1. Cập nhật nút "Xem tất cả các bài đăng trên blog" để liên kết đến trang blog.
2. Sửa liên kết blog trong điều hướng tiêu đề để hoạt động chính xác và hiển thị trạng thái trang hiện tại.

Hy vọng bài viết này giúp các em hoàn thiện phần blog trên website của mình. Trong bài học tiếp theo, chúng ta sẽ khám phá các loại bài đăng tùy chỉnh trong WordPress. Hãy chuẩn bị tinh thần, chúng ta sẽ bắt đầu ngay thôi! 🎉
