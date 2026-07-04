# Tạo Loại Bài Đăng **Professor** trong WordPress

## Mục tiêu

-   Tạo loại bài đăng mới **Professor**.
-   Thiết lập mối quan hệ giữa bài đăng **Professor** và **Program**.
-   Hiển thị danh sách giáo sư liên quan trên trang chương trình.


## Tạo loại bài đăng **Professor**

### Mục đích

Loại bài đăng **Professor** giúp quản lý thông tin giáo sư, bao gồm tên, nội dung, và các chương trình liên quan.


### Code mẫu

**Thêm loại bài đăng vào plugin "Must-Use"**

```php
// filepath: /Users/ken/Folders/Projects/polytuts-5/wp-content/mu-plugins/university-post-types.php
function university_post_types() {
    // ...existing code...

    // Loại bài đăng "Professor"
    register_post_type('professor', array(
        'public' => true,
        'show_in_rest' => true,
        'supports' => array('title', 'editor'),
        'labels' => array(
            'name' => 'Giáo sư',
            'add_new_item' => 'Thêm giáo sư mới',
            'edit_item' => 'Chỉnh sửa giáo sư',
            'all_items' => 'Tất cả giáo sư',
            'singular_name' => 'Giáo sư'
        ),
        'menu_icon' => 'dashicons-welcome-learn-more'
    ));
}
add_action('init', 'university_post_types');
```


### Tóm tắt

- **`register_post_type()`**: Đăng ký loại bài đăng **Professor**.
- **`show_in_rest`**: Cho phép sử dụng trình chỉnh sửa khối (block editor).
- **`menu_icon`**: Thêm biểu tượng cho loại bài đăng trong WordPress Admin.


### Kết quả mẫu

Sau khi lưu tệp, bạn sẽ thấy loại bài đăng **Professor** xuất hiện trong thanh bên của WordPress Admin. Bạn có thể tạo các bài đăng như "Dr. Meows A Lot" và "Dr. Barks A Lot".


## Thiết lập mối quan hệ giữa **Professor** và **Program**

### Mục đích

Liên kết giáo sư với các chương trình mà họ giảng dạy.


### Code mẫu

**Cập nhật nhóm trường tùy chỉnh**

1. Truy cập **Custom Fields** > **Related Programs**.
2. Trong phần **Location**, thêm điều kiện:
    - **Post Type** là **Professor**.


### Tóm tắt

- **Custom Fields**: Hiển thị trường "Chương trình liên quan" khi chỉnh sửa bài đăng **Professor**.
- **Location**: Đảm bảo trường chỉ xuất hiện trên loại bài đăng phù hợp.


### Kết quả mẫu

Khi chỉnh sửa bài đăng giáo sư, bạn sẽ thấy trường tùy chỉnh "Chương trình liên quan" cho phép chọn các chương trình liên quan.


## Hiển thị danh sách giáo sư trên trang chương trình

### Mục đích

Hiển thị danh sách các giáo sư liên quan trên trang chi tiết của chương trình.


### Code mẫu

**Cập nhật tệp mẫu chương trình đơn lẻ**

```php
// filepath: /Users/ken/Folders/Projects/polytuts-5/theme/single-program.php
<?php get_header(); ?>
<div class="container container--narrow page-section">
    <h1><?php the_title(); ?></h1>
    <p><?php the_content(); ?></p>

    <?php
    $relatedProfessors = new WP_Query(array(
        'post_type' => 'professor',
        'meta_query' => array(
            array(
                'key' => 'related_programs',
                'compare' => 'LIKE',
                'value' => '"' . get_the_ID() . '"'
            )
        )
    ));

    if ($relatedProfessors->have_posts()) {
        echo '<hr class="section-break">';
        echo '<h2 class="headline headline--medium">Giáo sư ' . get_the_title() . '</h2>';
        echo '<ul class="link-list min-list">';
        while ($relatedProfessors->have_posts()) {
            $relatedProfessors->the_post();
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

- **`WP_Query`**: Truy vấn các bài đăng giáo sư liên quan đến chương trình hiện tại.
- **`meta_query`**: Lọc bài đăng dựa trên trường tùy chỉnh.
- **`wp_reset_postdata()`**: Đặt lại dữ liệu bài đăng sau khi sử dụng truy vấn tùy chỉnh.


### Kết quả mẫu

Trên trang chi tiết của chương trình, bạn sẽ thấy danh sách các giáo sư liên quan với liên kết đến trang chi tiết của từng giáo sư.


## Bài tập gợi ý

1. **Thêm thông báo khi không có giáo sư liên quan**:  
   - Hiển thị thông báo "Không có giáo sư liên quan" nếu chương trình không có giáo sư.

2. **Tùy chỉnh giao diện**:  
   - Thêm hình ảnh đại diện của giáo sư bên cạnh tên trong danh sách.


## Tips / Lưu ý

- **Cập nhật liên kết cố định**: Sau khi tạo loại bài đăng mới, hãy vào **Settings** > **Permalinks** và nhấn **Save Changes** để cập nhật hệ thống liên kết.
- **Sử dụng `wp_reset_postdata()`**: Luôn đặt lại dữ liệu bài đăng sau khi sử dụng `WP_Query` để tránh xung đột.


## Kết luận

Trong bài học này, bạn đã học cách tạo loại bài đăng **Professor**, thiết lập mối quan hệ giữa giáo sư và chương trình, và hiển thị danh sách giáo sư liên quan trên trang chương trình. Đây là bước quan trọng để xây dựng hệ thống nội dung liên kết mạnh mẽ trong WordPress.

Nếu có thắc mắc, đừng ngại hỏi thầy hoặc các bạn nhé!  
Chúc các bạn học tốt! 🚀  
— **Thầy Đạt 🧡**

