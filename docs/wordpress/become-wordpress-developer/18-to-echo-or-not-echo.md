---
id: khi-nao-can-echo-trong-php-functions-wordpress
title: Khi nào cần echo trong PHP Functions trong WordPress
sidebar_position: 11
---

# To Echo or Not to Echo: Hiểu về PHP Functions trong WordPress

Chào mừng bạn đã trở lại!

Hãy tạm dừng dự án của chúng ta để trả lời một trong những câu hỏi phổ biến nhất về PHP: Tại sao một số hàm cần được `echo` trong khi các hàm khác thì không? Để hiểu rõ hơn, chúng ta sẽ cùng viết một vài hàm PHP và khám phá sự khác biệt này.

## Mục lục

1. [Giới thiệu về bài giảng](#giới-thiệu-về-bài-giảng)
2. [Viết các hàm PHP cơ bản](#viết-các-hàm-php-cơ-bản)
    - [Hàm không cần echo](#hàm-không-cần-echo)
    - [Hàm cần echo](#hàm-cần-echo)
3. [Sử dụng hàm trong WordPress](#sử-dụng-hàm-trong-wordpress)
4. [Bài tập](#bài-tập)
5. [Hướng dẫn cách làm](#hướng-dẫn-cách-làm)
6. [Tổng kết](#tổng-kết)

## Giới thiệu về bài giảng

Trong bài học này, chúng ta sẽ tìm hiểu lý do tại sao một số hàm PHP cần được echo trong khi các hàm khác thì không. Chúng ta sẽ viết một vài hàm đơn giản để minh họa sự khác biệt này và sau đó áp dụng chúng vào WordPress.

## Viết các hàm PHP cơ bản

### Hàm không cần echo

1. Mở tệp `index.php` trong thư mục chủ đề của bạn.
2. Thêm đoạn mã sau để tạo một hàm nhân đôi số:

```php
<?php
function doubleMe($x) {
    return $x * 2;
}

// Gọi hàm và echo kết quả
echo doubleMe(5); // Kết quả: 10
?>
```

### Hàm cần echo

1. Thay đổi hàm doubleMe để echo kết quả thay vì return:

```php
<?php
function doubleMe($x) {
    echo $x * 2;
}

// Gọi hàm
doubleMe(5); // Kết quả: 10
?>
```

### Sử dụng hàm trong WordPress

1. WordPress có các hàm như the_title() và get_the_title(). Hãy xem sự khác biệt:

```php
<?php
// Hàm echo
the_title(); // Hiển thị tiêu đề bài viết

// Hàm return
$title = get_the_title();
echo $title; // Hiển thị tiêu đề bài viết
?>
```

2. Quy tắc chung: Nếu hàm bắt đầu bằng "get", nó sẽ return giá trị. Nếu hàm bắt đầu bằng "the", nó sẽ echo giá trị.

### Bài tập

1. Tạo hàm mới:

    - Tạo một hàm tripleMe để nhân ba số và return kết quả.
    - Gọi hàm và echo kết quả.

2. Sử dụng hàm trong WordPress:
    - Sử dụng hàm get_the_ID() để lấy ID bài viết và echo kết quả.

### Hướng dẫn cách làm

<strong>Tạo hàm mới</strong>

1. Mở tệp `index.php`.
2. Thêm đoạn mã sau:

```php
<?php
function tripleMe($x) {
    return $x * 3;
}

echo tripleMe(5); // Kết quả: 15
?>
```

<strong>Sử dụng hàm trong WordPress</strong>

1. Mở tệp single.php trong thư mục chủ đề của bạn.
2. Thêm đoạn mã sau:

```php
<?php
$id = get_the_ID();
echo $id; // Hiển thị ID bài viết
?>
```

### Tổng kết

Trong bài học này, chúng ta đã tìm hiểu sự khác biệt giữa các hàm PHP cần echo và các hàm return giá trị. Chúng ta đã viết các hàm đơn giản và áp dụng chúng vào WordPress. Hãy thực hành các bài tập để nắm vững kiến thức này. Chúc các bạn học vui vẻ và thành công!
