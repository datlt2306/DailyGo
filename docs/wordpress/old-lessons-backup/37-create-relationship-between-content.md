# Tạo Mối Quan Hệ Giữa Nội Dung trong WordPress

## Mục tiêu

-   Tạo loại bài đăng tùy chỉnh mới có tên **Chương trình**.
-   Thiết lập mối quan hệ giữa các bài đăng **Chương trình** và **Sự kiện**.
-   Hiển thị nội dung liên quan trên giao diện người dùng.


## Tạo loại bài đăng tùy chỉnh **Chương trình**

### Mục đích

Loại bài đăng tùy chỉnh giúp bạn tổ chức nội dung theo cách phù hợp với mục đích của website. Trong trường hợp này, chúng ta sẽ tạo loại bài đăng **Chương trình** để quản lý các chuyên ngành như Toán, Sinh học, Tiếng Anh.


### Code mẫu

**Thêm loại bài đăng tùy chỉnh vào plugin "Must-Use"**

```php
// filepath: /Users/ken/Folders/Projects/polytuts-5/wp-content/mu-plugins/university-post-types.php
<?php
function university_post_types() {
    // ...existing code...

    // Loại bài đăng "Chương trình"
    register_post_type('program', array(
        'public' => true,
        'show_in_rest' => true,
        'supports' => array('title', 'editor'),
        'rewrite' => array('slug' => 'programs'),
        'has_archive' => true,
        'labels' => array(
            'name' => 'Chương trình',
            'add_new_item' => 'Thêm chương trình mới',
            'edit_item' => 'Chỉnh sửa chương trình',
            'all_items' => 'Tất cả chương trình',
            'singular_name' => 'Chương trình'
        ),
        'menu_icon' => 'dashicons-awards'
    ));
}
add_action('init', 'university_post_types');
```


### Tóm tắt

- **`register_post_type()`**: Đăng ký loại bài đăng tùy chỉnh.
- **`supports`**: Xác định các tính năng hỗ trợ như tiêu đề và trình chỉnh sửa.
- **`rewrite`**: Tùy chỉnh slug URL cho loại bài đăng.
- **`menu_icon`**: Thêm biểu tượng cho loại bài đăng trong WordPress Admin.


### Kết quả mẫu

Sau khi lưu tệp, bạn sẽ thấy loại bài đăng **Chương trình** xuất hiện trong thanh bên của WordPress Admin. Bạn có thể tạo các bài đăng như Toán, Sinh học, Tiếng Anh.


## Tạo mẫu hiển thị cho loại bài đăng **Chương trình**

### Mục đích

Mẫu riêng giúp kiểm soát cách hiển thị nội dung của từng bài đăng tùy chỉnh.


### Code mẫu

**Tạo tệp mẫu cho bài đăng chương trình**

```php
// filepath: /Users/ken/Folders/Projects/polytuts-5/theme/single-program.php
<?php get_header(); ?>
<div class="container container--narrow page-section">
    <h1><?php the_title(); ?></h1>
    <p><?php the_content(); ?></p>
    <a href="<?php echo get_post_type_archive_link('program'); ?>" class="btn btn--blue">Tất cả chương trình</a>
</div>
<?php get_footer(); ?>
```


### Tóm tắt

- **`get_post_type_archive_link()`**: Trả về liên kết đến màn hình lưu trữ của loại bài đăng tùy chỉnh.
- **HTML và CSS**: Kết hợp với các lớp CSS để định dạng giao diện.


### Kết quả mẫu

Khi truy cập vào một bài đăng chương trình, bạn sẽ thấy tiêu đề, nội dung, và liên kết trở về màn hình lưu trữ chương trình.


## Tạo màn hình lưu trữ cho loại bài đăng **Chương trình**

### Mục đích

Màn hình lưu trữ hiển thị danh sách tất cả các bài đăng thuộc loại bài đăng tùy chỉnh.


### Code mẫu

**Tạo tệp mẫu lưu trữ cho chương trình**

```php
// filepath: /Users/ken/Folders/Projects/polytuts-5/theme/archive-program.php
<?php get_header(); ?>
<div class="container container--narrow page-section">
    <h1>Tất cả chương trình</h1>
    <ul class="link-list min-list">
        <?php
        while (have_posts()) {
            the_post(); ?>
            <li><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></li>
        <?php } ?>
    </ul>
</div>
<?php get_footer(); ?>
```


### Tóm tắt

- **Vòng lặp WordPress**: Hiển thị danh sách các bài đăng chương trình.
- **HTML và CSS**: Sử dụng danh sách không thứ tự để hiển thị tiêu đề bài đăng.


### Kết quả mẫu

Màn hình lưu trữ hiển thị danh sách tất cả các chương trình như Toán, Sinh học, Tiếng Anh.


## Tạo mối quan hệ giữa **Chương trình** và **Sự kiện**

### Mục đích

Mối quan hệ giữa các bài đăng giúp bạn liên kết nội dung liên quan, chẳng hạn như liên kết một sự kiện với một chương trình.


### Code mẫu

**Tạo trường tùy chỉnh để thiết lập mối quan hệ**

1. Truy cập **Custom Fields** > **Add New**.
2. Tạo nhóm trường mới với tên **Chương trình liên quan**.
3. Thêm trường:
    - **Field Type**: Relationship.
    - **Post Type**: Program.
4. Cài đặt vị trí:
    - Hiển thị trường này chỉ khi **Post Type** là Event.


### Tóm tắt

- **Relationship Field**: Cho phép chọn bài đăng liên quan từ loại bài đăng khác.
- **Post Type Filter**: Giới hạn lựa chọn bài đăng theo loại bài đăng.


### Kết quả mẫu

Khi chỉnh sửa một bài đăng sự kiện, bạn sẽ thấy trường tùy chỉnh **Chương trình liên quan** cho phép chọn bài đăng chương trình liên quan.


## Bài tập gợi ý

1. **Thêm trường tùy chỉnh mới**:  
   - Thêm trường **Giáo viên liên quan** để liên kết bài đăng sự kiện với bài đăng giáo viên.

2. **Hiển thị nội dung liên quan**:  
   - Hiển thị danh sách các sự kiện liên quan trên trang chi tiết của chương trình.


## Tips / Lưu ý

- **Cập nhật liên kết cố định**: Sau khi tạo loại bài đăng mới, hãy vào **Settings** > **Permalinks** và nhấn **Save Changes** để cập nhật hệ thống liên kết.
- **Kiểm tra dữ liệu đầu vào**: Đảm bảo trường tùy chỉnh chỉ hiển thị khi loại bài đăng phù hợp.


## Kết luận

Trong bài học này, bạn đã học cách tạo loại bài đăng tùy chỉnh **Chương trình**, thiết lập mối quan hệ giữa các bài đăng, và hiển thị nội dung liên quan trên giao diện người dùng. Đây là bước đầu để xây dựng hệ thống nội dung liên kết mạnh mẽ trong WordPress.

Nếu có thắc mắc, đừng ngại hỏi thầy hoặc các bạn nhé!  
Chúc các bạn học tốt! 🚀  
— **Thầy Đạt 🧡**