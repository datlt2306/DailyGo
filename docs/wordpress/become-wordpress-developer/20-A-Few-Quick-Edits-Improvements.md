---
id: chinh-sua-template
title: Chỉnh sửa template
sidebar_position: 13
---

# Chỉnh Sửa và Cải Tiến Chủ Đề WordPress

Xin chào tất cả mọi người!

Trong bài học này, chúng ta sẽ thực hiện một số chỉnh sửa và cải tiến nhanh chóng cho chủ đề của mình. Bài học này sẽ giúp bạn làm cho trang web của mình trở nên thân thiện hơn với người dùng và tối ưu hóa cho các thiết bị di động. Hãy cùng bắt đầu!

## Mục lục

1. [Giới thiệu về bài giảng](#giới-thiệu-về-bài-giảng)
2. [Tối ưu hóa trang web cho thiết bị di động](#tối-ưu-hóa-trang-web-cho-thiết-bị-di-động)
    - [Thêm thẻ meta viewport](#thêm-thẻ-meta-viewport)
3. [Thiết lập ngôn ngữ cho trang web](#thiết-lập-ngôn-ngữ-cho-trang-web)
4. [Thiết lập bộ ký tự cho trang web](#thiết-lập-bộ-ký-tự-cho-trang-web)
5. [Thêm lớp cho thẻ body](#thêm-lớp-cho-thẻ-body)
6. [Tổng kết](#tổng-kết)
7. [Bài tập](#bài-tập)
8. [Hướng dẫn cách làm](#hướng-dẫn-cách-làm)

## Giới thiệu về bài giảng

Trong bài học này, chúng ta sẽ thực hiện một số chỉnh sửa và cải tiến nhanh chóng cho chủ đề của mình. Mục tiêu là làm cho trang web của bạn trở nên thân thiện hơn với người dùng và tối ưu hóa cho các thiết bị di động.

## Tối ưu hóa trang web cho thiết bị di động

### Thêm thẻ meta viewport

1. Mở tệp `header.php` trong thư mục chủ đề của bạn.
2. Thêm đoạn mã sau vào phần `<head>`:

```php
<meta name="viewport" content="width=device-width, initial-scale=1">
```

3. Lưu tệp và kiểm tra trang web của bạn trên các thiết bị di động bằng cách sử dụng công cụ Developer Tools của Google Chrome.

## Thiết lập ngôn ngữ cho trang web

1. Trong tệp header.php, tìm thẻ `<html>` và thêm thuộc tính ngôn ngữ:

```php
<html <?php language_attributes(); ?>>
```

2. Lưu tệp và kiểm tra mã nguồn trang web của bạn để đảm bảo rằng thuộc tính ngôn ngữ đã được thêm vào.

## Thiết lập bộ ký tự cho trang web

1. Trong tệp `header.php`, thêm thẻ meta cho bộ ký tự:

```php
<meta charset="<?php bloginfo('charset'); ?>">
```

2. Lưu tệp và kiểm tra mã nguồn trang web của bạn để đảm bảo rằng thẻ meta đã được thêm vào.

## Thêm lớp cho thẻ body

Trong tệp `header.php`, tìm thẻ `<body>` và thêm hàm `body_class()`:

```php
<body <?php body_class(); ?>>
```

2. Lưu tệp và kiểm tra mã nguồn trang web của bạn để đảm bảo rằng các lớp đã được thêm vào thẻ `<body>`.

## Bài tập

1. Kiểm tra trang web trên các thiết bị di động:

    - Sử dụng công cụ Developer Tools của Google Chrome để kiểm tra trang web của bạn trên các thiết bị di động khác nhau.

2. Thêm thẻ meta viewport:
    - Thêm thẻ meta viewport vào tệp header.php và kiểm tra kết quả trên các thiết bị di động.

## Hướng dẫn cách làm

### Kiểm tra trang web trên các thiết bị di động

-   Mở Google Chrome và truy cập trang web của bạn.
-   Nhấp chuột phải vào trang và chọn "Inspect".
-   Nhấp vào biểu tượng thiết bị di động ở góc trên bên trái của cửa sổ Developer Tools.
-   Chọn các thiết bị di động khác nhau từ menu thả xuống và kiểm tra trang web của bạn.

### Thêm thẻ meta viewport

1. Mở tệp header.php trong thư mục chủ đề của bạn.
2. Thêm đoạn mã sau vào phần `<head>`:

```php
<meta name="viewport" content="width=device-width, initial-scale=1">
```

3. Lưu tệp và kiểm tra trang web của bạn trên các thiết bị di động.

## Tổng kết

Trong bài học này, chúng ta đã thực hiện một số chỉnh sửa và cải tiến nhanh chóng cho chủ đề của mình. Chúng ta đã thêm thẻ meta viewport để tối ưu hóa trang web cho các thiết bị di động, thiết lập ngôn ngữ và bộ ký tự cho trang web, và thêm các lớp cho thẻ body. Những cải tiến này sẽ giúp trang web của bạn trở nên thân thiện hơn với người dùng và tối ưu hóa cho các thiết bị di động. Chúc các bạn học vui vẻ và thành công! ```
