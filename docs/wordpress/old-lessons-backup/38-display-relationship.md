# Hiển Thị Mối Quan Hệ Giữa Nội Dung trong WordPress

## Mục tiêu

-   Hiển thị mối quan hệ giữa các bài đăng **Sự kiện** và **Chương trình** trên giao diện người dùng.
-   Tạo liên kết HTML để khách truy cập có thể chuyển qua lại giữa nội dung liên quan.

## Hiển thị chương trình liên quan trên trang chi tiết sự kiện

### Mục đích

Khi một sự kiện được liên kết với một chương trình, thầy trò mình sẽ hiển thị tên chương trình liên quan trên trang chi tiết của sự kiện. Điều này giúp khách truy cập dễ dàng khám phá nội dung liên quan.

### Code mẫu

**Cập nhật tệp mẫu sự kiện đơn lẻ**

```php
// filepath: /Users/ken/Folders/Projects/polytuts-5/theme/single-event.php
<?php get_header(); ?>
<div class="container container--narrow page-section">
    <h1><?php the_title(); ?></h1>
    <p><?php the_content(); ?></p>
    
    <?php
    $relatedPrograms = get_field('related_programs'); // Lấy giá trị từ trường tùy chỉnh
    if ($relatedPrograms) {
        echo '<h2>Chương trình liên quan:</h2>';
        echo '<ul class="link-list min-list">';
        foreach ($relatedPrograms as $program) {
            echo '<li><a href="' . get_permalink($program) . '">' . get_the_title($program) . '</a></li>';
        }
        echo '</ul>';
    }
    ?>
</div>
<?php get_footer(); ?>
```

### Tóm tắt

- **`get_field()`**: Lấy giá trị từ trường tùy chỉnh (sử dụng plugin Advanced Custom Fields).
- **`get_permalink()`**: Trả về URL của bài đăng liên quan.
- **`get_the_title()`**: Hiển thị tiêu đề của bài đăng liên quan.

### Kết quả mẫu

Trên trang chi tiết của sự kiện, các em sẽ thấy danh sách các chương trình liên quan với liên kết đến trang chi tiết của từng chương trình.

## Hiển thị sự kiện liên quan trên trang chi tiết chương trình

### Mục đích

Ngược lại, khi một chương trình được liên kết với các sự kiện, thầy trò mình sẽ hiển thị danh sách các sự kiện liên quan trên trang chi tiết của chương trình.

### Code mẫu

**Cập nhật tệp mẫu chương trình đơn lẻ**

```php
// filepath: /Users/ken/Folders/Projects/polytuts-5/theme/single-program.php
<?php get_header(); ?>
<div class="container container--narrow page-section">
    <h1><?php the_title(); ?></h1>
    <p><?php the_content(); ?></p>

    <?php
    $relatedEvents = new WP_Query(array(
        'post_type' => 'event',
        'meta_query' => array(
            array(
                'key' => 'related_programs', // Trường tùy chỉnh liên kết
                'compare' => 'LIKE',
                'value' => '"' . get_the_ID() . '"'
            )
        )
    ));

    if ($relatedEvents->have_posts()) {
        echo '<h2>Sự kiện liên quan:</h2>';
        echo '<ul class="link-list min-list">';
        while ($relatedEvents->have_posts()) {
            $relatedEvents->the_post();
            echo '<li><a href="' . get_permalink() . '">' . get_the_title() . '</a></li>';
        }
        echo '</ul>';
        wp_reset_postdata();
    }
    ?>
</div>
<?php get_footer(); ?>
```

### Tóm tắt

- **`WP_Query`**: Truy vấn các bài đăng sự kiện liên quan đến chương trình hiện tại.
- **`meta_query`**: Lọc bài đăng dựa trên trường tùy chỉnh.
- **`wp_reset_postdata()`**: Đặt lại dữ liệu bài đăng sau khi sử dụng truy vấn tùy chỉnh.

### Kết quả mẫu

Trên trang chi tiết của chương trình, các em sẽ thấy danh sách các sự kiện liên quan với liên kết đến trang chi tiết của từng sự kiện.

## Bài tập gợi ý

1. **Thêm liên kết ngược**:  
   - Trên trang chi tiết của chương trình, thêm liên kết trở về màn hình lưu trữ chương trình.

2. **Tùy chỉnh giao diện**:  
   - Sử dụng CSS để định dạng danh sách liên kết sao cho đẹp mắt và dễ đọc.

## Tips / Các em các em lưu ý

- **Kiểm tra dữ liệu**: Đảm bảo trường tùy chỉnh đã được thiết lập đúng trong bài đăng sự kiện và chương trình.
- **Sử dụng `wp_reset_postdata()`**: Luôn đặt lại dữ liệu bài đăng sau khi sử dụng `WP_Query` để tránh xung đột.

## Kết luận

Trong bài học này, các em đã học cách hiển thị mối quan hệ giữa các bài đăng **Sự kiện** và **Chương trình** trên giao diện người dùng. Đây là bước quan trọng để xây dựng hệ thống nội dung liên kết mạnh mẽ trong WordPress.

Nếu có thắc mắc, đừng ngại hỏi thầy hoặc các các em nhé!  
Chúc các các em học tốt! 🚀  
— **Thầy Đạt 🧡**
