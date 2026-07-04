# Truy Vấn Tùy Chỉnh trong WordPress

## Giới thiệu

Chào các em, hôm nay thầy sẽ hướng dẫn các em về **truy vấn tùy chỉnh** trong WordPress. Đây là một khái niệm quan trọng giúp chúng ta kiểm soát nội dung hiển thị trên website. Truy vấn tùy chỉnh cho phép chúng ta tải bất kỳ nội dung nào, ở bất kỳ đâu, bất kể URL hiện tại. Nào, cùng bắt đầu nhé!


## Lý thuyết về truy vấn tùy chỉnh

### Truy vấn mặc định của WordPress là gì?
Truy vấn mặc định trong WordPress là cơ chế tự động lấy nội dung dựa trên URL hiện tại. Ví dụ:
- **Trang chủ**: Hiển thị nội dung của trang được đặt làm trang chủ.
- **Danh mục**: Hiển thị các bài đăng thuộc danh mục cụ thể.
- **Tác giả**: Hiển thị các bài đăng của một tác giả.

### Hạn chế của truy vấn mặc định
- Không thể tùy chỉnh nội dung hiển thị theo nhu cầu cụ thể.
- Không hỗ trợ việc lấy nội dung từ nhiều nguồn hoặc theo các tiêu chí phức tạp.

### Truy vấn tùy chỉnh là gì?
Truy vấn tùy chỉnh sử dụng lớp `WP_Query` để tạo các truy vấn riêng biệt, giúp bạn kiểm soát nội dung hiển thị theo nhu cầu cụ thể. Ví dụ:
- Hiển thị bài đăng từ một danh mục cụ thể.
- Hiển thị bài đăng theo thứ tự tùy chỉnh.



## Truy vấn mặc định của WordPress

### 1. Truy vấn tự động
- WordPress tự động truy vấn nội dung dựa trên URL hiện tại.
- Ví dụ:
  - **Trang chủ**: Truy vấn nội dung của trang được đặt làm trang chủ.
  - **Blog**: Truy vấn các bài đăng blog gần đây nhất.

### 2. Hạn chế của truy vấn mặc định
- Không thể tùy chỉnh nội dung hiển thị theo nhu cầu cụ thể.
- Để giải quyết vấn đề này, chúng ta cần sử dụng **truy vấn tùy chỉnh**.


## Tạo truy vấn tùy chỉnh

### 1. Cấu trúc cơ bản
- Sử dụng lớp `WP_Query` để tạo truy vấn tùy chỉnh:
```php
// filepath: example.php
<?php
$custom_query = new WP_Query(array(
    'posts_per_page' => 2, // Số lượng bài đăng cần truy vấn
));
?>
```

### Tại sao cần viết như vậy?
- **`WP_Query`**: Đây là lớp mạnh mẽ trong WordPress, cho phép bạn tạo các truy vấn tùy chỉnh để lấy nội dung theo tiêu chí cụ thể.
- **`posts_per_page`**: Xác định số lượng bài đăng cần hiển thị trên mỗi trang.


### 2. Các tham số phổ biến
- **`posts_per_page`**: Số lượng bài đăng trên mỗi trang.
- **`category_name`**: Tên danh mục cần truy vấn.
- **`post_type`**: Loại bài đăng (ví dụ: `post`, `page`).
- **`orderby`**: Sắp xếp bài đăng theo tiêu chí (ví dụ: `date`, `title`).
- **`order`**: Thứ tự sắp xếp (`ASC` hoặc `DESC`).


## Hiển thị nội dung với truy vấn tùy chỉnh

### 1. Sử dụng vòng lặp `while`
- Sử dụng vòng lặp để hiển thị nội dung từ truy vấn tùy chỉnh:
```php
// filepath: example.php
<?php
if ($custom_query->have_posts()) {
    while ($custom_query->have_posts()) {
        $custom_query->the_post();
        ?>
        <h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
        <p><?php the_excerpt(); ?></p>
        <?php
    }
}
wp_reset_postdata(); // Dọn dẹp sau khi sử dụng truy vấn tùy chỉnh
?>
```

### Tại sao cần viết như vậy?
- **`have_posts()`**: Kiểm tra xem có bài đăng nào trong truy vấn tùy chỉnh không.
- **`the_post()`**: Lấy dữ liệu của bài đăng hiện tại trong truy vấn.
- **`wp_reset_postdata()`**: Dọn dẹp dữ liệu sau khi sử dụng truy vấn tùy chỉnh để tránh xung đột với truy vấn mặc định.


### 2. Kết hợp với HTML
- Sử dụng cấu trúc HTML để định dạng nội dung:
```php
// filepath: example.php
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
```

### Tại sao cần viết như vậy?
- **HTML và CSS**: Kết hợp với các lớp CSS như `headline`, `metabox`, và `btn` để định dạng giao diện.
- **`the_permalink()` và `the_title()`**: Hiển thị liên kết và tiêu đề bài đăng.


## Tổng kết

Trong bài học này, chúng ta đã học cách sử dụng **truy vấn tùy chỉnh** để kiểm soát nội dung hiển thị trong WordPress. Truy vấn tùy chỉnh giúp chúng ta tải nội dung theo nhu cầu cụ thể, mở ra nhiều khả năng mạnh mẽ trong phát triển website. Hy vọng bài viết này giúp các em hiểu rõ hơn về cách sử dụng truy vấn tùy chỉnh. Trong bài học tiếp theo, chúng ta sẽ tiếp tục khám phá các tính năng nâng cao của WordPress. Hãy chuẩn bị tinh thần, chúng ta sẽ bắt đầu ngay thôi!