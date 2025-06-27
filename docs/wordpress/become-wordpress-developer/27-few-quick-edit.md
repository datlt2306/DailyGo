# Một vài chỉnh sửa nhanh liên quan đến phần blog

## Giới thiệu

Chào các em, hôm nay thầy sẽ hướng dẫn các em thực hiện một vài chỉnh sửa nhỏ liên quan đến phần blog trên website WordPress của mình. Đây sẽ là một bài học rất nhanh, nhưng rất hữu ích. Nào, cùng bắt đầu nhé!

---

## Lý thuyết về liên kết và trạng thái menu trong WordPress

### Liên kết trong WordPress
Liên kết (Links) trong WordPress thường được sử dụng để điều hướng giữa các trang, bài đăng, hoặc màn hình lưu trữ. Việc sử dụng hàm `site_url()` giúp tạo liên kết động, đảm bảo rằng liên kết sẽ hoạt động chính xác ngay cả khi URL của website thay đổi.

### Trạng thái menu hiện tại
Trạng thái menu hiện tại (Current Menu Item) là một lớp CSS được thêm vào liên kết để chỉ định rằng người dùng đang ở trang liên quan. Điều này giúp cải thiện trải nghiệm người dùng bằng cách làm nổi bật menu hiện tại.

---

## Cập nhật nút "Xem tất cả các bài đăng trên blog"

### 1. Sửa liên kết nút
- Mở tệp `front-page.php` và tìm nút "Xem tất cả các bài đăng trên blog".
- Sửa giá trị `href` của nút:
```php
// filepath: front-page.php
// ...existing code...
<a class="btn btn--blue" href="<?php echo site_url('/blog'); ?>">Xem tất cả các bài đăng trên blog</a>
```

### Tại sao cần viết như vậy?
- **`site_url()`**: Hàm này trả về URL của website, giúp tạo liên kết động đến trang blog. Điều này đảm bảo rằng liên kết sẽ hoạt động chính xác ngay cả khi URL của website thay đổi.

---

### 2. Kết quả
- Khi nhấn vào nút, người dùng sẽ được chuyển đến trang danh sách blog.

---

## Sửa liên kết blog trong điều hướng tiêu đề

### 1. Cập nhật liên kết blog
- Mở tệp `header.php` và tìm liên kết blog trong điều hướng tiêu đề.
- Sửa giá trị `href` của liên kết:
```php
// filepath: header.php
// ...existing code...
<li>
    <a href="<?php echo site_url('/blog'); ?>" 
       class="<?php if (get_post_type() === 'post') echo 'current-menu-item'; ?>">
       Blog
    </a>
</li>
```

### Tại sao cần viết như vậy?
- **`get_post_type()`**: Hàm này trả về loại bài đăng hiện tại. Nếu loại bài đăng là `post`, liên kết blog sẽ được thêm lớp `current-menu-item`.
- **`current-menu-item`**: Lớp CSS này giúp làm nổi bật liên kết blog khi người dùng đang ở trang blog, bài đăng blog cá nhân, hoặc màn hình lưu trữ liên quan đến blog.

---

### 2. Kết quả
- Liên kết blog sẽ hoạt động và chuyển đến trang danh sách blog.
- Khi người dùng đang ở trang blog, bài đăng blog cá nhân, hoặc màn hình lưu trữ liên quan đến blog, liên kết blog sẽ sáng lên màu vàng để chỉ định trang hiện tại.

---

## Tổng kết

Trong bài học này, chúng ta đã thực hiện hai chỉnh sửa nhỏ nhưng quan trọng:
1. Cập nhật nút "Xem tất cả các bài đăng trên blog" để liên kết đến trang blog.
2. Sửa liên kết blog trong điều hướng tiêu đề để hoạt động chính xác và hiển thị trạng thái trang hiện tại.

Hy vọng bài viết này giúp các em hoàn thiện phần blog trên website của mình. Trong bài học tiếp theo, chúng ta sẽ khám phá các loại bài đăng tùy chỉnh trong WordPress. Hãy chuẩn bị tinh thần, chúng ta sẽ bắt đầu ngay thôi! 🎉
