# Một vài cập nhật linh tinh trong WordPress

## Giới thiệu

Chào các em, hôm nay thầy sẽ hướng dẫn các em thực hiện một vài cập nhật nhỏ liên quan đến đoạn trích và liên kết sự kiện trong WordPress. Đây sẽ là một bài học rất nhanh, nhưng rất hữu ích. Nào, cùng bắt đầu nhé!


## Lý thuyết về đoạn trích và liên kết trong WordPress

### Đoạn trích (Excerpt) là gì?
Đoạn trích trong WordPress là một phần nội dung ngắn gọn của bài đăng, thường được sử dụng để hiển thị trên danh sách bài đăng hoặc trang lưu trữ. Đoạn trích có thể được tạo thủ công hoặc tự động cắt ngắn từ nội dung bài đăng.

### Liên kết động trong WordPress
Liên kết động sử dụng các hàm như `get_post_type_archive_link()` hoặc `site_url()` để tạo liên kết tự động dựa trên cấu trúc của website. Điều này giúp đảm bảo rằng liên kết sẽ hoạt động chính xác ngay cả khi URL của website thay đổi.


## Cập nhật đoạn trích

### 1. Hiển thị đoạn trích thủ công
- Mở tệp `front-page.php` và tìm đoạn mã hiển thị nội dung bài đăng.
- Sửa đoạn mã để kiểm tra và hiển thị đoạn trích thủ công:
```php
// filepath: /Users/ken/Folders/Projects/polytuts-5/theme/front-page.php
<?php
if (has_excerpt()) {
    echo get_the_excerpt(); // Hiển thị đoạn trích thủ công nếu có
} else {
    echo wp_trim_words(get_the_content(), 18); // Hiển thị 18 từ đầu tiên của nội dung bài đăng
}
?>
```

### Tại sao cần viết như vậy?
- **`has_excerpt()`**: Kiểm tra xem bài đăng có đoạn trích thủ công hay không.
- **`get_the_excerpt()`**: Lấy đoạn trích thủ công của bài đăng.
- **`wp_trim_words()`**: Cắt ngắn nội dung bài đăng thành một số lượng từ nhất định, giúp hiển thị nội dung ngắn gọn.


### 2. Kết quả
- Nếu bài đăng có đoạn trích thủ công, đoạn trích sẽ được hiển thị.
- Nếu không, 18 từ đầu tiên của nội dung bài đăng sẽ được hiển thị.


## Cập nhật liên kết sự kiện

### 1. Sửa liên kết "Xem tất cả sự kiện"
- Mở tệp `front-page.php` và tìm nút "Xem tất cả sự kiện".
- Sửa giá trị `href` của nút:
```php
// filepath: /Users/ken/Folders/Projects/polytuts-5/theme/front-page.php
<a class="btn btn--blue" href="<?php echo get_post_type_archive_link('event'); ?>">Xem tất cả sự kiện</a>
```

### Tại sao cần viết như vậy?
- **`get_post_type_archive_link()`**: Hàm này trả về URL của màn hình lưu trữ cho loại bài đăng tùy chỉnh. Điều này giúp liên kết luôn chính xác ngay cả khi cấu trúc URL của website thay đổi.


### 2. Kết quả
- Khi nhấn vào nút, người dùng sẽ được chuyển đến trang lưu trữ sự kiện.


## Sửa liên kết sự kiện trong điều hướng tiêu đề

### 1. Cập nhật liên kết sự kiện
- Mở tệp `header.php` và tìm liên kết sự kiện trong điều hướng tiêu đề.
- Sửa giá trị `href` của liên kết:
```php
// filepath: /Users/ken/Folders/Projects/polytuts-5/theme/header.php
<li>
    <a href="<?php echo get_post_type_archive_link('event'); ?>" 
       class="<?php if (get_post_type() === 'event') echo 'current-menu-item'; ?>">
       Sự kiện
    </a>
</li>
```

### Tại sao cần viết như vậy?
- **`get_post_type()`**: Hàm này trả về loại bài đăng hiện tại. Nếu loại bài đăng là `event`, liên kết sự kiện sẽ được thêm lớp `current-menu-item`.
- **`current-menu-item`**: Lớp CSS này giúp làm nổi bật liên kết sự kiện khi người dùng đang ở trang sự kiện, bài đăng sự kiện cá nhân, hoặc màn hình lưu trữ liên quan đến sự kiện.


### 2. Kết quả
- Liên kết sự kiện sẽ hoạt động và chuyển đến trang lưu trữ sự kiện.
- Khi người dùng đang ở trang sự kiện, bài đăng sự kiện cá nhân, hoặc màn hình lưu trữ liên quan đến sự kiện, liên kết sự kiện sẽ sáng lên màu vàng để chỉ định trang hiện tại.


## Tổng kết

Trong bài học này, chúng ta đã thực hiện ba cập nhật nhỏ nhưng quan trọng:
1. Hiển thị đoạn trích thủ công hoặc nội dung cắt ngắn.
2. Cập nhật liên kết "Xem tất cả sự kiện" để hoạt động chính xác.
3. Sửa liên kết sự kiện trong điều hướng tiêu đề để hiển thị trạng thái trang hiện tại.

Hy vọng bài viết này giúp các em hoàn thiện phần sự kiện trên website của mình. Trong bài học tiếp theo, chúng ta sẽ khám phá các trường tùy chỉnh trong WordPress. Hãy chuẩn bị tinh thần, chúng ta sẽ bắt đầu ngay thôi! 🎉
