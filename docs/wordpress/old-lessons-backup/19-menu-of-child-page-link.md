# Thiết Lập Menu Động Cho Các Trang Con Trong WordPress

Chào mừng bạn đã trở lại!

Trong bài học này, chúng ta sẽ học cách thiết lập menu các liên kết trang con cho trang hiện tại mà bạn đang xem. Ví dụ, nếu bạn điều hướng đến trang "Giới thiệu về Hoa Kỳ", bạn sẽ thấy các liên kết đến các trang con như "Lịch sử" và "Mục tiêu của chúng tôi". Hãy cùng nhau làm cho menu này trở nên động và tự động hiển thị các trang con tương ứng.


## Lý thuyết về menu động trong WordPress

### Menu động là gì?
Menu động trong WordPress là một danh sách các liên kết được tạo tự động dựa trên cấu trúc nội dung của website. Thay vì mã hóa cứng các liên kết, menu động sử dụng các hàm PHP để hiển thị các trang con tương ứng với trang cha hiện tại.

### Tại sao cần menu động?
- **Tự động hóa**: Menu động tự cập nhật khi bạn thêm hoặc xóa các trang con.
- **Dễ quản lý**: Không cần chỉnh sửa mã mỗi khi cấu trúc trang thay đổi.
- **Cải thiện trải nghiệm người dùng**: Giúp người dùng dễ dàng điều hướng giữa các trang liên quan.


## Giới thiệu về bài giảng

Trong bài học này, chúng ta sẽ học cách thiết lập menu động cho các trang con trong WordPress. Điều này sẽ giúp trang web của bạn trở nên linh hoạt hơn và dễ dàng điều hướng hơn.


## Thiết lập menu động

### Xóa mã cứng và thêm hàm động

1. Mở tệp `page.php` trong thư mục chủ đề của bạn.
2. Tìm đoạn mã chứa menu được mã hóa cứng và xóa nó:

```php
// filepath: page.php
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
            'child_of' => wp_get_post_parent_id(get_the_ID()), // Lấy ID của trang cha
            'title_li' => '' // Xóa tiêu đề mặc định của danh sách
        );
        wp_list_pages($args); // Hiển thị danh sách các trang con
        ?>
    </ul>
</div>
```

### Tại sao cần viết như vậy?
- **`wp_list_pages()`**: Hàm này tạo danh sách các trang dựa trên cấu trúc phân cấp của WordPress.
- **`child_of`**: Xác định ID của trang cha để hiển thị các trang con tương ứng.
- **`title_li`**: Xóa tiêu đề mặc định của danh sách để giữ giao diện gọn gàng.


### Hiển thị tiêu đề trang cha động

1. Tìm đoạn mã chứa tiêu đề trang cha và thay thế bằng đoạn mã sau:

```php
<a href="<?php echo get_permalink(wp_get_post_parent_id(get_the_ID())); ?>">
    <?php echo get_the_title(wp_get_post_parent_id(get_the_ID())); ?>
</a>
```

### Tại sao cần viết như vậy?
- **`get_the_title()`**: Hiển thị tiêu đề của trang cha.
- **`get_permalink()`**: Trả về URL của trang cha, giúp tạo liên kết điều hướng.


### Ẩn menu nếu không có trang con

1. Gói đoạn mã menu trong một câu lệnh `if` để kiểm tra xem có trang con hay không:

```php
<?php
$children = wp_list_pages(array(
    'child_of' => wp_get_post_parent_id(get_the_ID()), // Lấy ID của trang cha
    'echo' => 0 // Không hiển thị trực tiếp, trả về giá trị
));
if ($children) : ?>
    <div class="page-links">
        <ul>
            <?php echo $children; ?>
        </ul>
    </div>
<?php endif; ?>
```

### Tại sao cần viết như vậy?
- **`echo => 0`**: Trả về danh sách các trang con dưới dạng chuỗi thay vì hiển thị trực tiếp.
- **Kiểm tra `$children`**: Chỉ hiển thị menu nếu có trang con, giúp giao diện gọn gàng hơn.


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
2. Thêm đoạn mã sau để hiển thị danh sách các trang con dưới trang cha:

```php
<?php
$children = wp_list_pages(array(
    'child_of' => wp_get_post_parent_id(get_the_ID()), // Lấy ID của trang cha
    'echo' => 0 // Không hiển thị trực tiếp, trả về giá trị
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
