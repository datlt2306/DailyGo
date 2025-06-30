# Chỉnh Sửa và Cải Tiến Chủ Đề WordPress

Xin chào tất cả mọi người!

Trong bài học này, chúng ta sẽ thực hiện một số chỉnh sửa và cải tiến nhanh chóng cho chủ đề của mình. Bài học này sẽ giúp bạn làm cho trang web của mình trở nên thân thiện hơn với người dùng và tối ưu hóa cho các thiết bị di động. Hãy cùng bắt đầu!


## Lý thuyết về tối ưu hóa chủ đề WordPress

### Tại sao cần tối ưu hóa chủ đề?
Chủ đề WordPress là phần giao diện của website, và việc tối ưu hóa chủ đề giúp:
- **Cải thiện trải nghiệm người dùng**: Đảm bảo website hiển thị tốt trên mọi thiết bị, đặc biệt là thiết bị di động.
- **Tăng tốc độ tải trang**: Giảm thiểu các lỗi không cần thiết và tối ưu hóa mã nguồn.
- **Hỗ trợ SEO**: Các thẻ meta và cấu trúc HTML chuẩn giúp website thân thiện hơn với công cụ tìm kiếm.

### Các yếu tố cần tối ưu hóa
- **Thẻ meta viewport**: Đảm bảo website hiển thị tốt trên thiết bị di động.
- **Ngôn ngữ và bộ ký tự**: Xác định ngôn ngữ và bộ ký tự để hỗ trợ đa ngôn ngữ và hiển thị chính xác.
- **Lớp cho thẻ body**: Thêm các lớp CSS động để tùy chỉnh giao diện.


## Giới thiệu về bài giảng

Trong bài học này, chúng ta sẽ thực hiện một số chỉnh sửa và cải tiến nhanh chóng cho chủ đề của mình. Mục tiêu là làm cho trang web của bạn trở nên thân thiện hơn với người dùng và tối ưu hóa cho các thiết bị di động.


## Tối ưu hóa trang web cho thiết bị di động

### Thêm thẻ meta viewport

1. Mở tệp `header.php` trong thư mục chủ đề của bạn.
2. Thêm đoạn mã sau vào phần `<head>`:

```php
// filepath: header.php
// ...existing code...
<meta name="viewport" content="width=device-width, initial-scale=1">
```

### Tại sao cần viết như vậy?
- **`meta viewport`**: Thẻ này giúp trình duyệt điều chỉnh kích thước và tỷ lệ của trang web để hiển thị tốt trên thiết bị di động. Nếu không có thẻ này, website có thể hiển thị không đúng trên màn hình nhỏ.


## Thiết lập ngôn ngữ cho trang web

1. Trong tệp `header.php`, tìm thẻ `<html>` và thêm thuộc tính ngôn ngữ:

```php
// filepath: header.php
<html <?php language_attributes(); ?>>
```

### Tại sao cần viết như vậy?
- **`language_attributes()`**: Hàm này tự động thêm thuộc tính ngôn ngữ (ví dụ: `lang="en-US"`) vào thẻ `<html>`, giúp trình duyệt và công cụ tìm kiếm hiểu ngôn ngữ của website.


## Thiết lập bộ ký tự cho trang web

1. Trong tệp `header.php`, thêm thẻ meta cho bộ ký tự:

```php
// filepath: header.php
// ...existing code...
<meta charset="<?php bloginfo('charset'); ?>">
```

### Tại sao cần viết như vậy?
- **`bloginfo('charset')`**: Hàm này trả về bộ ký tự được cấu hình trong WordPress (thường là UTF-8), đảm bảo nội dung hiển thị chính xác trên mọi trình duyệt.


## Thêm lớp cho thẻ body

1. Trong tệp `header.php`, tìm thẻ `<body>` và thêm hàm `body_class()`:

```php
// filepath: header.php
<body <?php body_class(); ?>>
```

### Tại sao cần viết như vậy?
- **`body_class()`**: Hàm này tự động thêm các lớp CSS vào thẻ `<body>` dựa trên ngữ cảnh hiện tại (ví dụ: loại trang, danh mục, hoặc bài viết). Điều này giúp bạn dễ dàng tùy chỉnh giao diện bằng CSS.


## Bài tập

1. **Kiểm tra trang web trên các thiết bị di động**:
    - Sử dụng công cụ Developer Tools của Google Chrome để kiểm tra trang web của bạn trên các thiết bị di động khác nhau.

2. **Thêm thẻ meta viewport**:
    - Thêm thẻ meta viewport vào tệp `header.php` và kiểm tra kết quả trên các thiết bị di động.


## Hướng dẫn cách làm

### Kiểm tra trang web trên các thiết bị di động

- Mở Google Chrome và truy cập trang web của bạn.
- Nhấp chuột phải vào trang và chọn "Inspect".
- Nhấp vào biểu tượng thiết bị di động ở góc trên bên trái của cửa sổ Developer Tools.
- Chọn các thiết bị di động khác nhau từ menu thả xuống và kiểm tra trang web của bạn.


### Thêm thẻ meta viewport

1. Mở tệp `header.php` trong thư mục chủ đề của bạn.
2. Thêm đoạn mã sau vào phần `<head>`:

```php
// filepath: header.php
// ...existing code...
<meta name="viewport" content="width=device-width, initial-scale=1">
```

3. Lưu tệp và kiểm tra trang web của bạn trên các thiết bị di động.


## Tổng kết

Trong bài học này, chúng ta đã thực hiện một số chỉnh sửa và cải tiến nhanh chóng cho chủ đề của mình. Chúng ta đã thêm thẻ meta viewport để tối ưu hóa trang web cho các thiết bị di động, thiết lập ngôn ngữ và bộ ký tự cho trang web, và thêm các lớp cho thẻ body. Những cải tiến này sẽ giúp trang web của bạn trở nên thân thiện hơn với người dùng và tối ưu hóa cho các thiết bị di động. Chúc các bạn học vui vẻ và thành công!
