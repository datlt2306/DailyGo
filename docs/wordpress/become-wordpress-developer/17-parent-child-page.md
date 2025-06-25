---
id: trang-cha-va-con
title: Trang Cha và Con
sidebar_position: 10
---

# Điều Chỉnh template Cho Các Trang cha và con Trong WordPress

Xin chào tất cả mọi người!

Trong bài học này, chúng ta sẽ tìm hiểu cách điều chỉnh các template của mình để tính cho các trang dành cho cha và con. Hãy tưởng tượng rằng dưới trang "Giới thiệu về chúng tôi", chúng ta muốn có hai trang con mới có tên là "Lịch sử" và "Mục tiêu của chúng tôi". Chúng ta sẽ cùng nhau tạo các trang con này và cập nhật template để phản ánh mối quan hệ cha con.

## Mục lục

1. [Giới thiệu về bài giảng](#giới-thiệu-về-bài-giảng)
2. [Tạo các trang con trong WordPress](#tạo-các-trang-con-trong-wordpress)
3. [Cập nhật template để phản ánh mối quan hệ cha con](#cập-nhật-mẫu-chủ-đề-để-phản-ánh-mối-quan-hệ-cha-mẹ-con-cái)
    - [Hiển thị tiêu đề động](#hiển-thị-tiêu-đề-động)
    - [Chỉ hiển thị hộp breadcrumb trên các trang con](#chỉ-hiển-thị-hộp-breadcrumb-trên-các-trang-con)
    - [Hiển thị tiêu đề trang cha động](#hiển-thị-tiêu-đề-trang-cha-mẹ-động)
4. [Bài tập](#bài-tập)
5. [Hướng dẫn cách làm](#hướng-dẫn-cách-làm)
6. [Tổng kết](#tổng-kết)

## Giới thiệu về bài giảng

Trong bài học này, chúng ta sẽ học cách điều chỉnh các template của mình để tính cho các trang cha và con. Điều này sẽ giúp chúng ta tạo ra các trang có cấu trúc rõ ràng và dễ dàng điều hướng.

## Tạo các trang con trong WordPress

1. Truy cập khu vực quản trị WordPress.
2. Từ thanh bên, di chuột qua "Trang" và nhấp vào "Thêm mới".
3. Tạo một trang có tên "Lịch sử của chúng tôi" với nội dung giả.
4. Trong thanh bên phải, dưới "Thuộc tính trang", chọn "Giới thiệu về chúng tôi" làm trang cha.
5. Xuất bản trang này.
6. Tạo một trang khác có tên "Mục tiêu của chúng tôi" với nội dung giả và chọn "Giới thiệu về chúng tôi" làm trang cha.
7. Xuất bản trang này.

## Cập nhật template để phản ánh mối quan hệ cha con

### Hiển thị tiêu đề động

1. Mở tệp `page.php` trong thư mục template của bạn.
2. Tìm đoạn mã hiển thị tiêu đề tĩnh và thay thế bằng hàm `the_title()`.

```php
<h1><?php the_title(); ?></h1>
```

### Chỉ hiển thị hộp breadcrumb trên các trang con

1. Sử dụng câu lệnh `if` để kiểm tra xem trang hiện tại có phải là trang con hay không.

```php
<?php if ( wp_get_post_parent_id( get_the_ID() ) ) : ?>
    <div class="meta-box">
        <!-- Nội dung hộp breadcrumb -->
    </div>
<?php endif; ?>
```

### Hiển thị tiêu đề trang cha động

1. Thay thế tiêu đề tĩnh của trang cha bằng hàm `get_the_title()`.

```php
<a href="<?php echo get_permalink( wp_get_post_parent_id( get_the_ID() ) ); ?>">
    <?php echo get_the_title( wp_get_post_parent_id( get_the_ID() ) ); ?>
</a>
```

## Bài tập

1. **Tạo thêm trang con**:

    - Tạo một trang con mới có tên "Đội ngũ của chúng tôi" dưới trang "Giới thiệu về chúng tôi".
    - Xuất bản trang này.

2. **Hiển thị danh sách các trang con**:
    - Thêm mã để hiển thị danh sách các trang con dưới trang cha.

## Hướng dẫn cách làm

### Tạo thêm trang con

1. Truy cập khu vực quản trị WordPress.
2. Từ thanh bên, di chuột qua "Trang" và nhấp vào "Thêm mới".
3. Tạo một trang có tên "Đội ngũ của chúng tôi" với nội dung giả.
4. Trong thanh bên phải, dưới "Thuộc tính trang", chọn "Giới thiệu về chúng tôi" làm trang cha.
5. Xuất bản trang này.

### Hiển thị danh sách các trang con

1. Mở tệp `page.php`.
2. Thêm đoạn mã sau để hiển thị danh sách các trang con dưới trang cha.

```php
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

## Tổng kết

Trong bài học này, chúng ta đã học cách điều chỉnh các template để tính cho các trang cha và con. Chúng ta đã tạo các trang con, cập nhật template để hiển thị tiêu đề động và chỉ hiển thị hộp breadcrumb trên các trang con. Hãy thực hành các bài tập để nắm vững kiến thức này. Chúc các bạn học vui vẻ và thành công!
