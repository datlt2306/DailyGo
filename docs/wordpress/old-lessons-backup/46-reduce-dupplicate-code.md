# Giảm Mã Trùng Lặp trong WordPress

## Mục tiêu

-   Tạo một hàm tái sử dụng để hiển thị vùng biểu ngữ trang.
-   Loại bỏ mã trùng lặp trong các tệp mẫu.

## Tạo hàm tái sử dụng cho biểu ngữ trang

### Mục đích

Thay vì sao chép và dán mã biểu ngữ trang vào nhiều tệp mẫu, thầy trò mình sẽ tạo một hàm tái sử dụng để quản lý logic và hiển thị.

### Code mẫu

**Cập nhật tệp `functions.php`**

```php
// filepath: /Users/ken/Folders/Projects/polytuts-5/theme/functions.php
function page_banner($args = null) {
    // Logic mặc định
    if (!$args['title']) {
        $args['title'] = get_the_title();
    }
    if (!$args['subtitle']) {
        $args['subtitle'] = get_field('page_banner_subtitle');
    }
    if (!$args['photo']) {
        if (get_field('page_banner_background')) {
            $args['photo'] = get_field('page_banner_background')['sizes']['page-banner'];
        } else {
            $args['photo'] = get_theme_file_uri('images/ocean.jpg');
        }
    }

    // Hiển thị HTML
    ?>
    <div class="page-banner">
        <div class="page-banner__bg-image" style="background-image: url('<?php echo $args['photo']; ?>');"></div>
        <div class="page-banner__content container container--narrow">
            <h1 class="page-banner__title"><?php echo $args['title']; ?></h1>
            <div class="page-banner__intro">
                <p><?php echo $args['subtitle']; ?></p>
            </div>
        </div>
    </div>
    <?php
}
```

### Tóm tắt

- **`page_banner($args)`**: Hàm tái sử dụng để hiển thị vùng biểu ngữ trang.
- **Logic mặc định**: Xử lý các giá trị dự phòng nếu không có đối số được truyền vào.

## Sử dụng hàm biểu ngữ trang trong các tệp mẫu

### Mục đích

Thay thế mã biểu ngữ trang trong các tệp mẫu bằng cách gọi hàm `page_banner()`.

### Code mẫu

**Cập nhật tệp mẫu giáo sư đơn lẻ**

```php
// filepath: /Users/ken/Folders/Projects/polytuts-5/theme/single-professor.php
<?php
// ...existing code...
page_banner();
// ...existing code...
```

**Cập nhật tệp mẫu trang**

```php
// filepath: /Users/ken/Folders/Projects/polytuts-5/theme/page.php
<?php
// ...existing code...
page_banner();
// ...existing code...
```

**Cập nhật tệp mẫu lưu trữ sự kiện**

```php
// filepath: /Users/ken/Folders/Projects/polytuts-5/theme/archive-event.php
<?php
// ...existing code...
page_banner(array(
    'title' => 'Tất cả sự kiện',
    'subtitle' => 'Xem danh sách các sự kiện sắp tới.',
    'photo' => get_theme_file_uri('images/event-banner.jpg')
));
// ...existing code...
```

### Tóm tắt

- **`page_banner()`**: Gọi hàm để hiển thị biểu ngữ trang.
- **Đối số tùy chỉnh**: Truyền các giá trị tùy chỉnh cho tiêu đề, phụ đề, và hình nền khi cần.

## Bài tập gợi ý

1. **Thêm logic kiểm tra loại bài đăng**:  
   - Hiển thị tiêu đề và phụ đề khác nhau dựa trên loại bài đăng hiện tại.

2. **Tùy chỉnh giao diện**:  
   - Thêm hiệu ứng CSS để làm nổi bật vùng biểu ngữ trang.

## Tips / Các em các em lưu ý

- **Giá trị dự phòng**: Đảm bảo hàm xử lý các trường hợp không có giá trị được truyền vào.
- **Tái sử dụng**: Sử dụng hàm `page_banner()` trong tất cả các tệp mẫu để giảm mã trùng lặp.

## Kết luận

Trong bài học này, các em đã học cách giảm mã trùng lặp bằng cách tạo một hàm tái sử dụng cho vùng biểu ngữ trang. Đây là bước quan trọng để làm cho mã của các em dễ bảo trì và mở rộng hơn.

Nếu có thắc mắc, đừng ngại hỏi thầy hoặc các các em nhé!  
Chúc các các em học tốt! 🚀  
— **Thầy Đạt 🧡**
