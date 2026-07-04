# Chỉnh Sửa Nhanh Mẫu Chương Trình trong WordPress

## Mục tiêu

-   Cải thiện kiểu dáng và định dạng của trang chi tiết chương trình.
-   Thêm liên kết điều hướng chính đến màn hình lưu trữ chương trình.
-   Xử lý trường hợp chương trình không có sự kiện liên quan.


## Cải thiện kiểu dáng và định dạng

### Mục đích

Thêm khoảng cách và tiêu đề để làm rõ nội dung trên trang chi tiết chương trình.


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
                'key' => 'related_programs',
                'compare' => 'LIKE',
                'value' => '"' . get_the_ID() . '"'
            )
        )
    ));

    if ($relatedEvents->have_posts()) {
        echo '<hr class="section-break">';
        echo '<h2 class="headline headline--medium">Sự kiện ' . get_the_title() . ' sắp tới</h2>';
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

- **`<hr class="section-break">`**: Thêm khoảng cách giữa nội dung chính và tiêu đề sự kiện.
- **`<h2 class="headline headline--medium">`**: Hiển thị tiêu đề động dựa trên tên chương trình.


### Kết quả mẫu

Trên trang chi tiết của chương trình, bạn sẽ thấy tiêu đề "Sự kiện [Tên chương trình] sắp tới" và danh sách các sự kiện liên quan.


## Xử lý trường hợp không có sự kiện liên quan

### Mục đích

Ẩn tiêu đề và danh sách sự kiện nếu chương trình không có sự kiện liên quan.


### Code mẫu

**Thêm câu lệnh kiểm tra**

```php
// filepath: /Users/ken/Folders/Projects/polytuts-5/theme/single-program.php
<?php
if ($relatedEvents->have_posts()) {
    // ...existing code...
    echo '<hr class="section-break">';
    echo '<h2 class="headline headline--medium">Sự kiện ' . get_the_title() . ' sắp tới</h2>';
    echo '<ul class="link-list min-list">';
    while ($relatedEvents->have_posts()) {
        $relatedEvents->the_post();
        echo '<li><a href="' . get_permalink() . '">' . get_the_title() . '</a></li>';
    }
    echo '</ul>';
    wp_reset_postdata();
}
?>
```


### Tóm tắt

- **`if ($relatedEvents->have_posts())`**: Kiểm tra nếu có sự kiện liên quan trước khi hiển thị nội dung.


### Kết quả mẫu

Nếu chương trình không có sự kiện liên quan, tiêu đề và danh sách sẽ không hiển thị.


## Thêm liên kết điều hướng chính

### Mục đích

Liên kết mục "Chương trình" trong điều hướng chính đến màn hình lưu trữ chương trình.


### Code mẫu

**Cập nhật tệp tiêu đề**

```php
// filepath: /Users/ken/Folders/Projects/polytuts-5/theme/header.php
<li <?php if (get_post_type() == 'program') echo 'class="current-menu-item"'; ?>>
    <a href="<?php echo get_post_type_archive_link('program'); ?>">Chương trình</a>
</li>
```


### Tóm tắt

- **`get_post_type_archive_link('program')`**: Trả về liên kết đến màn hình lưu trữ chương trình.
- **`class="current-menu-item"`**: Thêm lớp CSS để làm nổi bật liên kết khi đang ở màn hình chương trình.


### Kết quả mẫu

Khi truy cập màn hình lưu trữ chương trình hoặc trang chi tiết chương trình, liên kết "Chương trình" trong điều hướng chính sẽ được làm nổi bật.


## Bài tập gợi ý

1. **Thêm thông báo khi không có sự kiện liên quan**:  
   - Hiển thị thông báo "Không có sự kiện liên quan" nếu chương trình không có sự kiện.

2. **Tùy chỉnh giao diện**:  
   - Thêm biểu tượng hoặc hình ảnh bên cạnh tiêu đề sự kiện để làm nổi bật danh sách.


## Tips / Lưu ý

- **Kiểm tra dữ liệu**: Đảm bảo các sự kiện liên quan được thiết lập đúng trong trường tùy chỉnh.
- **CSS**: Sử dụng lớp CSS như `current-menu-item` để làm nổi bật liên kết điều hướng.


## Kết luận

Trong bài học này, bạn đã học cách cải thiện kiểu dáng và định dạng của trang chi tiết chương trình, xử lý trường hợp không có sự kiện liên quan, và thêm liên kết điều hướng chính đến màn hình lưu trữ chương trình. Đây là bước quan trọng để nâng cao trải nghiệm người dùng trên website WordPress.

Nếu có thắc mắc, đừng ngại hỏi thầy hoặc các bạn nhé!  
Chúc các bạn học tốt! 🚀  
— **Thầy Đạt 🧡**