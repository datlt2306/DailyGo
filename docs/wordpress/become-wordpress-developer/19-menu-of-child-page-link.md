---
id: thiết-lập-menu-trang-con
title: Thiết lập menu trang con
sidebar_position: 12
---

# Thiết Lập Menu Động Cho Các Trang Con Trong WordPress

Chào mừng bạn đã trở lại!

Trong bài học này, chúng ta sẽ học cách thiết lập menu các liên kết trang con cho trang hiện tại mà bạn đang xem. Ví dụ, nếu bạn điều hướng đến trang "Giới thiệu về Hoa Kỳ", bạn sẽ thấy các liên kết đến các trang con như "Lịch sử" và "Mục tiêu của chúng tôi". Hãy cùng nhau làm cho menu này trở nên động và tự động hiển thị các trang con tương ứng.

## Mục lục

1. [Giới thiệu về bài giảng](#giới-thiệu-về-bài-giảng)
2. [Thiết lập menu động](#thiết-lập-menu-động)
    - [Xóa mã cứng và thêm hàm động](#xóa-mã-cứng-và-thêm-hàm-động)
    - [Hiển thị tiêu đề trang cha động](#hiển-thị-tiêu-đề-trang-mẹ-động)
    - [Ẩn menu nếu không có trang con](#ẩn-menu-nếu-không-có-trang-con)
3. [Bài tập](#bài-tập)
4. [Hướng dẫn cách làm](#hướng-dẫn-cách-làm)
5. [Tổng kết](#tổng-kết)

## Giới thiệu về bài giảng

Trong bài học này, chúng ta sẽ học cách thiết lập menu động cho các trang con trong WordPress. Điều này sẽ giúp trang web của bạn trở nên linh hoạt hơn và dễ dàng điều hướng hơn.

## Thiết lập menu động

### Xóa mã cứng và thêm hàm động

1. Mở tệp `page.php` trong thư mục chủ đề của bạn.
2. Tìm đoạn mã chứa menu được mã hóa cứng và xóa nó:

```php
<div class="page-links">
    <ul>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Our History</a></li>
        <li><a href="#">Our Goals</a></li>
    </ul>
</div>
```

3. Thay thế bằng đoạn mã sau để tạo menu động:

```php
<div class="page-links">
    <ul>
        <?php
        $args = array(
            'child_of' => wp_get_post_parent_id(get_the_ID()),
            'title_li' => ''
        );
        wp_list_pages($args);
        ?>
    </ul>
</div>
```

### Hiển thị tiêu đề trang cha động

1. Tìm đoạn mã chứa tiêu đề trang cha và thay thế bằng đoạn mã sau:

```php
<a href="<?php echo get_permalink(wp_get_post_parent_id(get_the_ID())); ?>">
    <?php echo get_the_title(wp_get_post_parent_id(get_the_ID())); ?>
</a>
```

### Ẩn menu nếu không có trang con

-   Gói đoạn mã menu trong một câu lệnh if để kiểm tra xem có trang con hay không:

```php
<?php
$children = wp_list_pages(array(
    'child_of' => wp_get_post_parent_id(get_the_ID()),
    'echo' => 0
));
if ($children) : ?>
    <div class="page-links">
        <ul>
            <?php echo $children; ?>
        </ul>
    </div>
<?php endif; ?>
```

## Bài tập

1.  Tạo thêm trang con:

    -   Tạo một trang con mới có tên "Đội ngũ của chúng tôi" dưới trang "Giới thiệu về chúng tôi".
    -   Xuất bản trang này.

2.  Hiển thị danh sách các trang con:

    -   Thêm mã để hiển thị danh sách các trang con dưới trang cha.

## Hướng dẫn cách làm

### Tạo thêm trang con

1. Truy cập khu vực quản trị WordPress.
2. Từ thanh bên, di chuột qua "Trang" và nhấp vào "Thêm mới".
3. Tạo một trang có tên "Đội ngũ của chúng tôi" với nội dung giả.
4. Trong thanh bên phải, dưới "Thuộc tính trang", chọn "Giới thiệu về chúng tôi" làm trang cha.
5. Xuất bản trang này.

### Hiển thị danh sách các trang con

1. Mở tệp `page.php`.
2. Thêm đoạn mã sau để hiển thị danh sách các trang con dưới trang cha:

```php
<?php
$children = wp_list_pages(array(
    'child_of' => wp_get_post_parent_id(get_the_ID()),
    'echo' => 0
));
if ($children) : ?>
    <div class="page-links">
        <ul>
            <?php echo $children; ?>
        </ul>
    </div>
<?php endif; ?>
```

## Tổng kết

Trong bài học này, chúng ta đã học cách thiết lập menu động cho các trang con trong WordPress. Chúng ta đã xóa mã cứng, thêm hàm động và hiển thị tiêu đề trang cha động. Hãy thực hành các bài tập để nắm vững kiến thức này. Chúc các bạn học vui vẻ và thành công!
