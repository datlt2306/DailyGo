---
id: thiet-lap-menu-dong-tiep-theo
title: Thiết lâp menu động tiếp theo
sidebar_position: 15
---

# Thiết Lập Menu Điều Hướng Động Trong WordPress

Chào mừng bạn đã trở lại!

Trong bài học này, chúng ta sẽ tìm hiểu cách thiết lập menu điều hướng động mà bạn có thể kiểm soát từ bên trong quản trị viên WordPress. Hãy đi sâu vào và để tôi cho bạn thấy những gì tôi đang đề cập đến.

## Mục lục

1. [Giới thiệu về bài giảng](#giới-thiệu-về-bài-giảng)
2. [Đăng ký vị trí menu trong WordPress](#đăng-ký-vị-trí-menu-trong-wordpress)
3. [Tạo menu trong quản trị viên WordPress](#tạo-menu-trong-quản-trị-viên-wordpress)
4. [Xuất menu động trong tệp mẫu](#xuất-menu-động-trong-tệp-mẫu)
5. [Thêm lớp đặc biệt cho menu hiện tại](#thêm-lớp-đặc-biệt-cho-menu-hiện-tại)
6. [Tổng kết](#tổng-kết)
7. [Bài tập](#bài-tập)
8. [Hướng dẫn cách làm](#hướng-dẫn-cách-làm)

## Giới thiệu về bài giảng

Trong bài học này, chúng ta sẽ học cách thiết lập menu điều hướng động trong WordPress. Điều này sẽ giúp bạn dễ dàng kiểm soát và cập nhật menu từ giao diện quản trị viên mà không cần chỉnh sửa mã nguồn.

## Đăng ký vị trí menu trong WordPress

1. Mở tệp `functions.php` trong thư mục chủ đề của bạn.
2. Thêm đoạn mã sau để đăng ký vị trí menu:

```php
function university_features() {
    // Các tính năng khác của chủ đề
    register_nav_menus(array(
        'headerMenuLocation' => 'Header Menu Location',
        'footerMenuOne' => 'Footer Menu One',
        'footerMenuTwo' => 'Footer Menu Two'
    ));
}
add_action('after_setup_theme', 'university_features');
```

3. Lưu tệp và làm mới trang quản trị WordPress. Bạn sẽ thấy tùy chọn "Menus" xuất hiện dưới mục "Appearance".

## Tạo menu trong quản trị viên WordPress

1. Truy cập vào Appearance > Menus trong bảng điều khiển WordPress.
2. Tạo một menu mới và đặt tên cho nó, ví dụ: "Header Menu".
3. Thêm các trang hoặc liên kết bạn muốn vào menu.
4. Gán menu này vào vị trí "Header Menu Location".
5. Lặp lại các bước trên để tạo các menu cho "Footer Menu One" và "Footer Menu Two".

## Xuất menu động trong tệp mẫu

1. Mở tệp `header.php` trong thư mục chủ đề của bạn.
2. Thay thế phần tử danh sách không có thứ tự được mã hóa cứng bằng đoạn mã sau:

```php
<nav>
    <?php
    wp_nav_menu(array(
        'theme_location' => 'headerMenuLocation'
    ));
    ?>
</nav>
```

3. Mở tệp `footer.php` và thay thế các phần tử danh sách không có thứ tự bằng đoạn mã sau:

```php
<div class="footer-menu">
    <?php
    wp_nav_menu(array(
        'theme_location' => 'footerMenuOne'
    ));
    ?>
</div>
<div class="footer-menu">
    <?php
    wp_nav_menu(array(
        'theme_location' => 'footerMenuTwo'
    ));
    ?>
</div>
```

4. Lưu các tệp và làm mới trang web của bạn để xem các menu động.

## Thêm lớp đặc biệt cho menu hiện tại

1. Mở tệp `header.php` trong thư mục chủ đề của bạn.
2. Tìm liên kết về chúng tôi trong menu điều hướng và thêm đoạn mã sau để kiểm tra xem trang hiện tại có phải là trang "About Us" hoặc trang con của nó không:

```php
<li class="<?php if (is_page('about-us') || wp_get_post_parent_id(0) == 16) echo 'current-menu-item'; ?>">
    <a href="<?php echo site_url('/about-us'); ?>">About Us</a>
</li>
```

3. Thay 16 bằng ID của trang "About Us" trên trang web của bạn.
4. Lưu tệp và làm mới trang web của bạn để xem liên kết "About Us" sáng lên khi bạn ở trên trang đó hoặc trang con của nó.

## Bài tập

1. Tạo thêm vị trí menu:
    - Đăng ký một vị trí menu mới cho sidebar trong tệp functions.php.
    - Tạo một menu mới và gán nó vào vị trí sidebar.
2. Tùy chỉnh menu:
    - Thêm CSS để tùy chỉnh giao diện của menu động.

## Hướng dẫn cách làm

### Tạo thêm vị trí menu

1. Mở tệp `functions.php`.
2. Thêm đoạn mã sau để đăng ký vị trí menu sidebar:

```php
<?php
register_nav_menus(array(
    'sidebarMenuLocation' => 'Sidebar Menu Location'
));
```

3. Truy cập vào `Appearance > Menus` và tạo một menu mới.
4. Gán menu này vào vị trí "Sidebar Menu Location".

### Tùy chỉnh menu

1. Mở tệp `style.css` trong thư mục chủ đề của bạn.
2. Thêm đoạn mã CSS sau để tùy chỉnh giao diện của menu:

```css
.nav-menu {
    list-style: none;
    padding: 0;
}

.nav-menu li {
    display: inline-block;
    margin-right: 20px;
}

.nav-menu a {
    text-decoration: none;
    color: #333;
}

.nav-menu a:hover {
    color: #0073aa;
}

.current-menu-item a {
    color: #ff0000; /* Màu đỏ cho menu hiện tại */
}
```

3. Lưu tệp và làm mới trang web của bạn để xem các thay đổi.

## Tổng kết

Trong bài học này, chúng ta đã học cách thiết lập menu điều hướng động trong WordPress. Chúng ta đã đăng ký các vị trí menu, tạo menu trong quản trị viên WordPress, xuất menu động trong tệp mẫu và thêm lớp đặc biệt cho menu hiện tại. Điều này giúp bạn dễ dàng kiểm soát và cập nhật menu từ giao diện quản trị viên mà không cần chỉnh sửa mã nguồn. Chúc các bạn học vui vẻ và thành công!
