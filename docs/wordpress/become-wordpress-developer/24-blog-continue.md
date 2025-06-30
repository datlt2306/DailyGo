# Tiếp Tục Xây Dựng Blog

## Giới thiệu

Chào các em, hôm nay thầy sẽ hướng dẫn các em cách tiếp tục xây dựng phần blog trên website WordPress của mình. Trong bài học trước, chúng ta đã tạo trang danh sách blog. Bây giờ, chúng ta sẽ thêm tính năng phân trang và cải thiện giao diện của các bài đăng blog cá nhân. Nào, cùng bắt đầu nhé!


## Lý thuyết về phân trang và giao diện bài đăng blog

### Phân trang là gì?
Phân trang (Pagination) là một tính năng giúp chia nội dung thành nhiều trang nhỏ hơn, thay vì hiển thị tất cả nội dung trên một trang duy nhất. Điều này giúp cải thiện trải nghiệm người dùng và tối ưu hóa tốc độ tải trang.

### Tại sao cần phân trang?
- **Cải thiện hiệu suất**: Giảm tải cho trình duyệt khi hiển thị nhiều bài đăng.
- **Dễ dàng điều hướng**: Người dùng có thể chuyển đổi giữa các trang để xem nội dung cũ hơn.
- **Thân thiện với SEO**: Phân trang giúp công cụ tìm kiếm dễ dàng lập chỉ mục nội dung.

### Giao diện bài đăng blog cá nhân
Giao diện bài đăng blog cá nhân là nơi hiển thị chi tiết nội dung của một bài viết. Nó bao gồm tiêu đề, thông tin tác giả, ngày đăng, danh mục, và nội dung bài viết.


## Thêm tính năng phân trang

### 1. Cấu hình số lượng bài đăng trên mỗi trang
- Truy cập **Settings** > **Reading** trong bảng điều khiển WordPress.
- Thay đổi giá trị **Blog pages show at most** thành số lượng bài đăng mong muốn (ví dụ: 2).
- Nhấn **Save Changes** để lưu cài đặt.

### Tại sao cần làm như vậy?
- **Blog pages show at most**: Cài đặt này xác định số lượng bài đăng được hiển thị trên mỗi trang blog. Việc giới hạn số lượng bài đăng giúp phân trang hoạt động hiệu quả.


### 2. Thêm liên kết phân trang
- Mở tệp `index.php` trong thư mục chủ đề.
- Thêm đoạn mã sau vào cuối tệp, ngay trước div đóng cuối cùng:

```php
// filepath: index.php
<?php
// ...existing code...
echo paginate_links(); // Hiển thị liên kết phân trang
?>
```

### Tại sao cần viết như vậy?
- **`paginate_links()`**: Hàm này tự động tạo các liên kết phân trang dựa trên số lượng bài đăng và cài đặt trong WordPress. Nó giúp người dùng dễ dàng chuyển đổi giữa các trang.


## Cải thiện giao diện bài đăng blog cá nhân

### 1. Cập nhật tệp `single.php`
- Mở tệp `single.php` trong thư mục chủ đề.
- Thêm vùng biểu ngữ và nội dung bài đăng:

```php
// filepath: single.php
<?php get_header(); ?>
<div class="page-banner">
    <h1><?php the_title(); ?></h1> <!-- Hiển thị tiêu đề bài đăng -->
    <p>Được đăng bởi <?php the_author_posts_link(); ?> vào <?php the_time('n.j.Y'); ?> trong <?php echo get_the_category_list(', '); ?></p> <!-- Hiển thị thông tin tác giả, ngày đăng và danh mục -->
</div>
<div class="container container--narrow page-section">
    <div class="generic-content">
        <?php the_content(); ?> <!-- Hiển thị nội dung bài đăng -->
    </div>
</div>
<?php get_footer(); ?>
```

### Tại sao cần viết như vậy?
- **`the_title()`**: Hiển thị tiêu đề của bài đăng hiện tại.
- **`the_author_posts_link()`**: Hiển thị liên kết đến trang tác giả của bài đăng.
- **`the_time()`**: Hiển thị ngày đăng bài viết.
- **`get_the_category_list()`**: Hiển thị danh sách các danh mục mà bài đăng thuộc về.
- **`the_content()`**: Hiển thị nội dung đầy đủ của bài đăng.


## Tổng kết

Trong bài học này, chúng ta đã thêm tính năng phân trang cho danh sách blog và cải thiện giao diện bài đăng blog cá nhân. Hy vọng bài viết này giúp các em tiếp tục xây dựng phần blog một cách dễ dàng. Trong bài học tiếp theo, chúng ta sẽ học cách tùy chỉnh tiêu đề và phụ đề cho các màn hình lưu trữ. Hãy chuẩn bị tinh thần, chúng ta sẽ bắt đầu ngay thôi! 🎉