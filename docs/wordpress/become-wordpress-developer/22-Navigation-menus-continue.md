# Thiết Lập Menu Điều Hướng Động Trong WordPress

Chào mừng bạn đã trở lại!

Trong bài học này, chúng ta sẽ tiếp tục tìm hiểu cách thiết lập menu điều hướng động trong WordPress. Bài học này sẽ giúp bạn kiểm soát menu từ giao diện quản trị viên, thêm lớp CSS đặc biệt cho menu hiện tại, và tùy chỉnh giao diện menu một cách linh hoạt.


## Lý thuyết về menu điều hướng động trong WordPress

### Menu điều hướng động là gì?
Menu điều hướng động trong WordPress là một danh sách các liên kết được tạo tự động dựa trên cấu hình trong giao diện quản trị viên. Thay vì mã hóa cứng các liên kết trong mã nguồn, bạn có thể dễ dàng thêm, xóa, hoặc sắp xếp các liên kết từ giao diện quản trị.

### Tại sao cần menu điều hướng động?
- **Dễ quản lý**: Bạn có thể thay đổi menu mà không cần chỉnh sửa mã.
- **Tùy chỉnh linh hoạt**: Menu có thể được gán vào nhiều vị trí khác nhau như header, footer, hoặc sidebar.
- **Thân thiện với người dùng**: Giúp người dùng dễ dàng điều hướng giữa các phần của website.


## Giới thiệu về bài giảng

Trong bài học này, chúng ta sẽ học cách thiết lập menu điều hướng động trong WordPress. Điều này sẽ giúp bạn dễ dàng kiểm soát và cập nhật menu từ giao diện quản trị viên mà không cần chỉnh sửa mã nguồn.


## Đăng ký vị trí menu trong WordPress

1. Mở tệp `functions.php` trong thư mục chủ đề của bạn.
2. Thêm đoạn mã sau để đăng ký vị trí menu:

```php
// filepath: functions.php
// ...existing code...
function university_features() {
    // Đăng ký các vị trí menu
    register_nav_menus(array(
        'headerMenuLocation' => 'Header Menu Location', // Vị trí menu ở đầu trang
        'footerMenuOne' => 'Footer Menu One', // Vị trí menu ở chân trang (menu 1)
        'footerMenuTwo' => 'Footer Menu Two' // Vị trí menu ở chân trang (menu 2)
    ));
}
add_action('after_setup_theme', 'university_features');
```

### Tại sao cần viết như vậy?
- **`register_nav_menus()`**: Hàm này đăng ký các vị trí menu để bạn có thể gán menu từ giao diện quản trị viên.
- **`after_setup_theme`**: Hook này đảm bảo rằng các vị trí menu được đăng ký khi chủ đề được kích hoạt.


## Tạo menu trong quản trị viên WordPress

1. Truy cập vào **Appearance > Menus** trong bảng điều khiển WordPress.
2. Tạo một menu mới và đặt tên cho nó, ví dụ: "Header Menu".
3. Thêm các trang hoặc liên kết bạn muốn vào menu.
4. Gán menu này vào vị trí "Header Menu Location".
5. Lặp lại các bước trên để tạo các menu cho `"Footer Menu One"` và `"Footer Menu Two"`.

### Tại sao cần làm như vậy?
- Giao diện quản trị viên giúp bạn dễ dàng thêm, xóa, hoặc sắp xếp các liên kết mà không cần chỉnh sửa mã nguồn.


## Xuất menu động trong tệp mẫu

### Xuất menu trong header

1. Mở tệp `header.php` trong thư mục chủ đề của bạn.
2. Thay thế phần tử danh sách không có thứ tự được mã hóa cứng bằng đoạn mã sau:

```php
// filepath: header.php
<nav>
    <?php
    wp_nav_menu(array(
        'theme_location' => 'headerMenuLocation', // Vị trí menu ở đầu trang
        'menu_class' => 'nav-menu' // Thêm lớp CSS cho menu
    ));
    ?>
</nav>
```

### Xuất menu trong footer

1. Mở tệp `footer.php` và thay thế các phần tử danh sách không có thứ tự bằng đoạn mã sau:

```php
// filepath: footer.php
<div class="footer-menu">
    <?php
    wp_nav_menu(array(
        'theme_location' => 'footerMenuOne', // Vị trí menu ở chân trang (menu 1)
        'menu_class' => 'footer-nav-menu' // Thêm lớp CSS cho menu
    ));
    ?>
</div>
<div class="footer-menu">
    <?php
    wp_nav_menu(array(
        'theme_location' => 'footerMenuTwo', // Vị trí menu ở chân trang (menu 2)
        'menu_class' => 'footer-nav-menu' // Thêm lớp CSS cho menu
    ));
    ?>
</div>
```

### Tại sao cần viết như vậy?
- **`wp_nav_menu()`**: Hàm này hiển thị menu dựa trên vị trí đã đăng ký.
- **`menu_class`**: Thêm lớp CSS để tùy chỉnh giao diện menu.


## Thêm lớp đặc biệt cho menu hiện tại

1. Mở tệp `header.php` trong thư mục chủ đề của bạn.
2. Thêm đoạn mã sau để kiểm tra xem trang hiện tại có phải là trang "About Us" hoặc trang con của nó không:

```php
// filepath: header.php
<li class="<?php if (is_page('about-us') || wp_get_post_parent_id(0) == 16) echo 'current-menu-item'; ?>">
    <a href="<?php echo site_url('/about-us'); ?>">About Us</a>
</li>
```

### Tại sao cần viết như vậy?
- **`is_page()`**: Kiểm tra xem trang hiện tại có phải là trang cụ thể không.
- **`wp_get_post_parent_id()`**: Trả về ID của trang cha, giúp kiểm tra mối quan hệ cha-con.
- **`current-menu-item`**: Lớp CSS này giúp làm nổi bật menu hiện tại.


## Bài tập

1. **Tạo thêm vị trí menu**:
    - Đăng ký một vị trí menu mới cho sidebar trong tệp `functions.php`.
    - Tạo một menu mới và gán nó vào vị trí sidebar.

2. **Tùy chỉnh menu**:
    - Thêm CSS để tùy chỉnh giao diện của menu động.


## Hướng dẫn cách làm

### Tạo thêm vị trí menu

1. Mở tệp `functions.php`.
2. Thêm đoạn mã sau để đăng ký vị trí menu sidebar:

```php
// filepath: functions.php
// ...existing code...
register_nav_menus(array(
    'sidebarMenuLocation' => 'Sidebar Menu Location' // Vị trí menu ở sidebar
));
```

3. Truy cập vào **Appearance > Menus** và tạo một menu mới.
4. Gán menu này vào vị trí `"Sidebar Menu Location"`.


### Tùy chỉnh menu

1. Mở tệp `style.css` trong thư mục chủ đề của bạn.
2. Thêm đoạn mã CSS sau để tùy chỉnh giao diện của menu:

```css
/* filepath: style.css */
/* ...existing code... */
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
