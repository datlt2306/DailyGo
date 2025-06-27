# Điều Chỉnh Template Cho Các Trang Cha và Con Trong WordPress

Xin chào tất cả mọi người!

Trong bài học này, chúng ta sẽ tìm hiểu cách điều chỉnh các template của mình để tính cho các trang dành cho cha và con. Hãy tưởng tượng rằng dưới trang "Giới thiệu về chúng tôi", chúng ta muốn có hai trang con mới có tên là "Lịch sử" và "Mục tiêu của chúng tôi". Chúng ta sẽ cùng nhau tạo các trang con này và cập nhật template để phản ánh mối quan hệ cha con.

---

## Lý thuyết về trang cha và con trong WordPress

### Trang cha và con là gì?
Trong WordPress, **trang cha (Parent Page)** và **trang con (Child Page)** là một cách tổ chức nội dung theo cấu trúc phân cấp. Trang cha là trang chính, trong khi trang con là các trang phụ thuộc vào trang cha. Điều này giúp bạn tạo ra các nhóm nội dung liên quan và dễ dàng điều hướng.

### Tại sao cần điều chỉnh template cho trang cha và con?
- **Hiển thị mối quan hệ**: Giúp người dùng hiểu rõ cấu trúc nội dung.
- **Breadcrumbs**: Cung cấp đường dẫn điều hướng rõ ràng.
- **Danh sách trang con**: Hiển thị các trang con dưới trang cha để người dùng dễ dàng truy cập.

---

## Giới thiệu về bài giảng

Trong bài học này, chúng ta sẽ học cách điều chỉnh các template của mình để tính cho các trang cha và con. Điều này sẽ giúp chúng ta tạo ra các trang có cấu trúc rõ ràng và dễ dàng điều hướng.

---

## Tạo các trang con trong WordPress

1. Truy cập khu vực quản trị WordPress.
2. Từ thanh bên, di chuột qua "Trang" và nhấp vào "Thêm mới".
3. Tạo một trang có tên "Lịch sử của chúng tôi" với nội dung giả.
4. Trong thanh bên phải, dưới "Thuộc tính trang", chọn "Giới thiệu về chúng tôi" làm trang cha.
5. Xuất bản trang này.
6. Tạo một trang khác có tên "Mục tiêu của chúng tôi" với nội dung giả và chọn "Giới thiệu về chúng tôi" làm trang cha.
7. Xuất bản trang này.

---

## Cập nhật template để phản ánh mối quan hệ cha con

### Hiển thị tiêu đề động

1. Mở tệp `page.php` trong thư mục template của bạn.
2. Tìm đoạn mã hiển thị tiêu đề tĩnh và thay thế bằng hàm `the_title()`.

```php
// filepath: page.php
<h1><?php the_title(); ?></h1>
```

### Tại sao cần viết như vậy?
- **`the_title()`**: Hiển thị tiêu đề của trang hiện tại một cách tự động, giúp bạn không cần viết tiêu đề tĩnh.

---

### Chỉ hiển thị hộp breadcrumb trên các trang con

1. Sử dụng câu lệnh `if` để kiểm tra xem trang hiện tại có phải là trang con hay không.

```php
// filepath: page.php
<?php if ( wp_get_post_parent_id( get_the_ID() ) ) : ?>
    <div class="meta-box">
        <!-- Nội dung hộp breadcrumb -->
    </div>
<?php endif; ?>
```

### Tại sao cần viết như vậy?
- **`wp_get_post_parent_id()`**: Hàm này trả về ID của trang cha. Nếu trang hiện tại không có cha, giá trị trả về sẽ là `0`.
- **Breadcrumbs**: Hiển thị đường dẫn điều hướng chỉ khi trang hiện tại là trang con.

---

### Hiển thị tiêu đề trang cha động

1. Thay thế tiêu đề tĩnh của trang cha bằng hàm `get_the_title()`.

```php
// filepath: page.php
<a href="<?php echo get_permalink( wp_get_post_parent_id( get_the_ID() ) ); ?>">
    <?php echo get_the_title( wp_get_post_parent_id( get_the_ID() ) ); ?>
</a>
```

### Tại sao cần viết như vậy?
- **`get_the_title()`**: Hiển thị tiêu đề của trang cha.
- **`get_permalink()`**: Trả về URL của trang cha, giúp tạo liên kết điều hướng.

---

## Bài tập

1. **Tạo thêm trang con**:

    - Tạo một trang con mới có tên "Đội ngũ của chúng tôi" dưới trang "Giới thiệu về chúng tôi".
    - Xuất bản trang này.

2. **Hiển thị danh sách các trang con**:
    - Thêm mã để hiển thị danh sách các trang con dưới trang cha.

---

## Hướng dẫn cách làm

### Tạo thêm trang con

1. Truy cập khu vực quản trị WordPress.
2. Từ thanh bên, di chuột qua "Trang" và nhấp vào "Thêm mới".
3. Tạo một trang có tên "Đội ngũ của chúng tôi" với nội dung giả.
4. Trong thanh bên phải, dưới "Thuộc tính trang", chọn "Giới thiệu về chúng tôi" làm trang cha.
5. Xuất bản trang này.

---

### Hiển thị danh sách các trang con

1. Mở tệp `page.php`.
2. Thêm đoạn mã sau để hiển thị danh sách các trang con dưới trang cha.

```php
// filepath: page.php
<?php
if ( wp_get_post_parent_id( get_the_ID() ) ) {
    $child_pages = new WP_Query( array(
        'post_type'      => 'page',
        'posts_per_page' => -1,
        'post_parent'    => wp_get_post_parent_id( get_the_ID() ),
        'orderby'        => 'menu_order',
        'order'          => 'ASC',
    ) );

    if ( $child_pages->have_posts() ) {
        echo '<ul>';
        while ( $child_pages->have_posts() ) {
            $child_pages->the_post();
            echo '<li><a href="' . get_permalink() . '">' . get_the_title() . '</a></li>';
        }
        echo '</ul>';
        wp_reset_postdata();
    }
}
?>
```

### Tại sao cần viết như vậy?
- **`WP_Query`**: Truy vấn các trang con dựa trên ID của trang cha.
- **`menu_order`**: Sắp xếp các trang con theo thứ tự được định nghĩa trong WordPress.

---

## Tổng kết

Trong bài học này, chúng ta đã học cách điều chỉnh các template để tính cho các trang cha và con. Chúng ta đã tạo các trang con, cập nhật template để hiển thị tiêu đề động và chỉ hiển thị hộp breadcrumb trên các trang con. Hãy thực hành các bài tập để nắm vững kiến thức này. Chúc các bạn học vui vẻ và thành công!
