# Sắp Xếp và Lọc Bài Đăng với Truy Vấn Tùy Chỉnh trong WordPress

## Giới thiệu

Chào các em, hôm nay thầy sẽ hướng dẫn các em cách kiểm soát cách thức sắp xếp và lọc bài đăng trong WordPress bằng **truy vấn tùy chỉnh**. Truy vấn tùy chỉnh là một công cụ mạnh mẽ giúp chúng ta kiểm soát cách dữ liệu được truy vấn từ cơ sở dữ liệu và hiển thị trên giao diện người dùng.


## Lý thuyết về sắp xếp và lọc bài đăng

### Tại sao cần sắp xếp và lọc bài đăng?
- **Sắp xếp bài đăng**: Giúp hiển thị nội dung theo thứ tự mong muốn, chẳng hạn như theo tiêu đề, ngày xuất bản, hoặc ngẫu nhiên.
- **Lọc bài đăng**: Giúp loại bỏ các bài đăng không phù hợp, chẳng hạn như các sự kiện đã diễn ra trong quá khứ.

### Các tham số quan trọng trong WP_Query
- **`orderby`**: Xác định tiêu chí sắp xếp bài đăng (ví dụ: `title`, `date`, `rand`, hoặc `meta_value_num`).
- **`order`**: Xác định thứ tự sắp xếp (`ASC` hoặc `DESC`).
- **`meta_query`**: Cho phép lọc bài đăng dựa trên giá trị của trường tùy chỉnh.


## Mục lục

1. [Sắp xếp bài đăng](#sắp-xếp-bài-đăng)
2. [Lọc bài đăng theo trường tùy chỉnh](#lọc-bài-đăng-theo-trường-tùy-chỉnh)
3. [Tổng kết](#tổng-kết)


## Sắp xếp bài đăng

### 1. Sắp xếp theo tiêu đề
- Mở tệp `front-page.php` và thêm tham số `orderby` vào truy vấn tùy chỉnh:
```php
// filepath: /Users/ken/Folders/Projects/polytuts-5/theme/front-page.php
<?php
$homepageEvents = new WP_Query(array(
    'posts_per_page' => -1, // Hiển thị tất cả bài đăng
    'post_type' => 'event',
    'orderby' => 'title', // Sắp xếp theo tiêu đề
    'order' => 'ASC' // Thứ tự tăng dần
));
?>
```

### Tại sao cần viết như vậy?
- **`orderby`**: Sắp xếp bài đăng theo tiêu chí cụ thể, ở đây là tiêu đề (`title`).
- **`order`**: Xác định thứ tự sắp xếp, `ASC` là tăng dần và `DESC` là giảm dần.


### 2. Sắp xếp ngẫu nhiên
- Thay đổi giá trị `orderby` thành `rand` để sắp xếp ngẫu nhiên:
```php
// filepath: /Users/ken/Folders/Projects/polytuts-5/theme/front-page.php
<?php
$homepageEvents = new WP_Query(array(
    'posts_per_page' => -1,
    'post_type' => 'event',
    'orderby' => 'rand' // Sắp xếp ngẫu nhiên
));
?>
```

### Tại sao cần viết như vậy?
- **`rand`**: Giá trị này giúp sắp xếp bài đăng theo thứ tự ngẫu nhiên, tạo sự đa dạng cho nội dung hiển thị.


### 3. Sắp xếp theo ngày diễn ra sự kiện
- Sử dụng trường tùy chỉnh `event_date` để sắp xếp bài đăng:
```php
// filepath: /Users/ken/Folders/Projects/polytuts-5/theme/front-page.php
<?php
$homepageEvents = new WP_Query(array(
    'posts_per_page' => -1,
    'post_type' => 'event',
    'orderby' => 'meta_value_num', // Sắp xếp theo giá trị số của trường tùy chỉnh
    'meta_key' => 'event_date', // Tên trường tùy chỉnh
    'order' => 'ASC' // Thứ tự tăng dần
));
?>
```

### Tại sao cần viết như vậy?
- **`meta_value_num`**: Sắp xếp bài đăng dựa trên giá trị số của trường tùy chỉnh.
- **`meta_key`**: Xác định trường tùy chỉnh cần sử dụng để sắp xếp, ở đây là `event_date`.


## Lọc bài đăng theo trường tùy chỉnh

### 1. Lọc bài đăng theo ngày hiện tại
- Sử dụng `meta_query` để chỉ hiển thị các sự kiện diễn ra từ hôm nay trở đi:
```php
// filepath: /Users/ken/Folders/Projects/polytuts-5/theme/front-page.php
<?php
$today = date('Ymd'); // Lấy ngày hiện tại
$homepageEvents = new WP_Query(array(
    'posts_per_page' => -1,
    'post_type' => 'event',
    'orderby' => 'meta_value_num',
    'meta_key' => 'event_date',
    'order' => 'ASC',
    'meta_query' => array(
        array(
            'key' => 'event_date', // Tên trường tùy chỉnh
            'compare' => '>=', // Lọc các sự kiện có ngày lớn hơn hoặc bằng hôm nay
            'value' => $today, // Giá trị ngày hiện tại
            'type' => 'NUMERIC' // So sánh giá trị số
        )
    )
));
?>
```

### Tại sao cần viết như vậy?
- **`meta_query`**: Cho phép lọc bài đăng dựa trên giá trị của trường tùy chỉnh.
- **`compare`**: Xác định điều kiện so sánh, ở đây là `>=` (lớn hơn hoặc bằng).
- **`type`**: Xác định kiểu dữ liệu của trường tùy chỉnh, ở đây là `NUMERIC`.


### 2. Kết quả
- Các sự kiện trong quá khứ sẽ bị loại bỏ khỏi danh sách hiển thị.


## Tổng kết

Trong bài học này, chúng ta đã học cách sử dụng **truy vấn tùy chỉnh** để sắp xếp và lọc bài đăng trong WordPress. Chúng ta đã sắp xếp bài đăng theo tiêu đề, ngẫu nhiên, và ngày diễn ra sự kiện, đồng thời lọc bài đăng để loại bỏ các sự kiện trong quá khứ. Hy vọng bài viết này giúp các em hiểu rõ hơn về cách kiểm soát nội dung hiển thị trên website của mình. Trong bài học tiếp theo, chúng ta sẽ học cách tạo trang riêng cho các sự kiện trong quá khứ. Hãy chuẩn bị tinh thần, chúng ta sẽ bắt đầu ngay thôi! 🎉
