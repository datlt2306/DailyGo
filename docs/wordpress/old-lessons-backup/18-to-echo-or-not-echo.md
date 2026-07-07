# To Echo or Not to Echo: Hiểu về PHP Functions trong WordPress

Chào mừng các em đã trở lại!

Hãy tạm dừng dự án của thầy trò mình để trả lời một trong những câu hỏi phổ biến nhất về PHP: Tại sao một số hàm cần được `echo` trong khi các hàm khác thì không? Để hiểu rõ hơn, thầy trò mình sẽ cùng viết một vài hàm PHP và khám phá sự khác biệt này.

## Lý thuyết về echo và return trong PHP

### Echo là gì?
`echo` là một lệnh trong PHP dùng để xuất nội dung trực tiếp ra màn hình. Khi các em sử dụng `echo`, giá trị sẽ được hiển thị ngay lập tức mà không cần lưu trữ.

### Return là gì?
`return` là một lệnh trong PHP dùng để trả về giá trị từ một hàm. Giá trị này có thể được lưu trữ trong biến hoặc sử dụng trong các phép tính khác trước khi hiển thị.

### Tại sao một số hàm cần echo, còn một số hàm khác thì không?
- **Hàm sử dụng echo**: Các hàm này thường được thiết kế để hiển thị nội dung trực tiếp, ví dụ như `the_title()` trong WordPress.
- **Hàm sử dụng return**: Các hàm này trả về giá trị để các em có thể xử lý hoặc hiển thị sau, ví dụ như `get_the_title()` trong WordPress.

## Giới thiệu về bài giảng

Trong bài học này, thầy trò mình sẽ tìm hiểu lý do tại sao một số hàm PHP cần được echo trong khi các hàm khác thì không. Thầy trò mình sẽ viết một vài hàm đơn giản để minh họa sự khác biệt này và sau đó áp dụng chúng vào WordPress.

## Viết các hàm PHP cơ bản

### Hàm không cần echo

1. Mở tệp `index.php` trong thư mục chủ đề của các em.
2. Thêm đoạn mã sau để tạo một hàm nhân đôi số:

```php
// filepath: index.php
<?php
function doubleMe($x) {
    return $x * 2; // Trả về giá trị nhân đôi
}

// Gọi hàm và echo kết quả
echo doubleMe(5); // Kết quả: 10
?>
```

### Tại sao cần viết như vậy?
- **`return`**: Giá trị được trả về từ hàm có thể được sử dụng trong các phép tính khác hoặc lưu trữ trong biến trước khi hiển thị.

### Hàm cần echo

1. Thay đổi hàm `doubleMe` để echo kết quả thay vì return:

```php
// filepath: index.php
<?php
function doubleMe($x) {
    echo $x * 2; // Hiển thị giá trị nhân đôi trực tiếp
}

// Gọi hàm
doubleMe(5); // Kết quả: 10
?>
```

### Tại sao cần viết như vậy?
- **`echo`**: Giá trị được hiển thị ngay lập tức mà không cần xử lý thêm.

## Sử dụng hàm trong WordPress

WordPress cung cấp hai loại hàm phổ biến:
- **Hàm echo**: Hiển thị nội dung trực tiếp, ví dụ như `the_title()`.
- **Hàm return**: Trả về giá trị để xử lý, ví dụ như `get_the_title()`.

### Ví dụ minh họa

```php
// filepath: single.php
<?php
// Hàm echo
the_title(); // Hiển thị tiêu đề bài viết

// Hàm return
$title = get_the_title();
echo $title; // Hiển thị tiêu đề bài viết
?>
```

### Quy tắc chung
- Nếu hàm bắt đầu bằng "get", nó sẽ **return** giá trị.
- Nếu hàm bắt đầu bằng "the", nó sẽ **echo** giá trị.

## Bài tập

1. **Tạo hàm mới**:
    - Tạo một hàm `tripleMe` để nhân ba số và return kết quả.
    - Gọi hàm và echo kết quả.

2. **Sử dụng hàm trong WordPress**:
    - Sử dụng hàm `get_the_ID()` để lấy ID bài viết và echo kết quả.

## Hướng dẫn cách làm

### Tạo hàm mới

1. Mở tệp `index.php`.
2. Thêm đoạn mã sau:

```php
// filepath: index.php
<?php
function tripleMe($x) {
    return $x * 3; // Trả về giá trị nhân ba
}

echo tripleMe(5); // Kết quả: 15
?>
```

### Sử dụng hàm trong WordPress

1. Mở tệp `single.php` trong thư mục chủ đề của các em.
2. Thêm đoạn mã sau:

```php
// filepath: single.php
<?php
$id = get_the_ID(); // Lấy ID bài viết hiện tại
echo $id; // Hiển thị ID bài viết
?>
```

## Tổng kết

Trong bài học này, thầy trò mình đã tìm hiểu sự khác biệt giữa các hàm PHP cần echo và các hàm return giá trị. Thầy trò mình đã viết các hàm đơn giản và áp dụng chúng vào WordPress. Hãy thực hành các bài tập để nắm vững kiến thức này. Chúc các các em học vui vẻ và thành công!
