# Tạo Trang Các Sự Kiện Đã Qua trong WordPress

## Giới thiệu

Chào các em, hôm nay thầy sẽ hướng dẫn các em cách tạo một trang mới chỉ liệt kê các sự kiện đã diễn ra trong quá khứ. Tính đến thời điểm này, trang chủ của thầy trò mình chỉ hiển thị các sự kiện sắp tới, và ngay cả màn hình lưu trữ sự kiện cũng không hiển thị các sự kiện đã qua. Tuy nhiên, có thể có trường hợp người dùng muốn xem lại bản tóm tắt các sự kiện mà thầy trò mình đã tổ chức trong những năm trước.

## Lý thuyết về trang các sự kiện đã qua

### Tại sao cần trang các sự kiện đã qua?
- **Lưu trữ lịch sử**: Hiển thị các sự kiện đã diễn ra giúp người dùng có cái nhìn tổng quan về hoạt động của thầy trò mình trong quá khứ.
- **Tăng tính chuyên nghiệp**: Một trang lưu trữ các sự kiện đã qua giúp website trở nên đầy đủ và chuyên nghiệp hơn.

### Các thành phần chính
- **Truy vấn tùy chỉnh (Custom Query)**: Sử dụng lớp `WP_Query` để lấy dữ liệu từ cơ sở dữ liệu theo điều kiện cụ thể.
- **Mẫu trang (Page Template)**: Tạo tệp mẫu riêng để kiểm soát cách hiển thị nội dung của trang.
- **Liên kết động**: Sử dụng hàm `site_url()` để tạo liên kết chính xác đến trang các sự kiện đã qua.

## Tạo trang các sự kiện đã qua

### 1. Tạo trang mới
- Truy cập **Pages** > **Add New** trong bảng điều khiển WordPress.
- Đặt tiêu đề trang là **Các Sự Kiện Đã Qua**.
- Để trống nội dung chính và nhấn **Publish** để lưu trang.

### 2. Xem trước trang
- Sử dụng liên kết **View Page** để xem trước trang vừa tạo.
- Các em các em lưu ý rằng tại thời điểm này, trang sẽ sử dụng tệp mẫu `page.php` trong thư mục chủ đề.

## Tạo mẫu cho trang các sự kiện đã qua

### 1. Tạo tệp mẫu riêng
Trong WordPress, thầy trò mình có thể tạo tệp mẫu riêng cho một trang cụ thể bằng cách đặt tên tệp theo định dạng `page-{slug}.php`. Slug là phần cuối của URL trang, ví dụ: nếu URL là `/past-events`, thì slug là `past-events`.

- Trong thư mục chủ đề, tạo tệp mới tên là `page-past-events.php`.

### 2. Sử dụng nội dung từ mẫu lưu trữ sự kiện
- Sao chép nội dung từ tệp `archive-event.php` và dán vào tệp `page-past-events.php`.
- Sửa tiêu đề và phụ đề để phù hợp với trang các sự kiện đã qua:
```php
// filepath: /Users/ken/Folders/Projects/polytuts-5/theme/page-past-events.php
<?php
// ...existing code...
<h1>Các Sự Kiện Đã Qua</h1>
<p>Bản tóm tắt các sự kiện đã diễn ra trong quá khứ.</p>
// ...existing code...
```

## Hiển thị các sự kiện đã qua

### 1. Tạo truy vấn tùy chỉnh

#### Tại sao cần truy vấn tùy chỉnh?
Truy vấn tùy chỉnh (Custom Query) cho phép thầy trò mình lấy dữ liệu từ cơ sở dữ liệu theo điều kiện cụ thể. Trong trường hợp này, thầy trò mình sẽ chỉ lấy các sự kiện có ngày diễn ra nhỏ hơn ngày hiện tại.

#### Cách viết truy vấn tùy chỉnh
- Thêm truy vấn tùy chỉnh vào tệp `page-past-events.php`:
```php
// filepath: /Users/ken/Folders/Projects/polytuts-5/theme/page-past-events.php
<?php
$today = date('Ymd'); // Lấy ngày hiện tại theo định dạng Ymd (năm, tháng, ngày)
$pastEvents = new WP_Query(array(
    'post_type' => 'event', // Chỉ lấy bài đăng thuộc loại 'event'
    'meta_key' => 'event_date', // Trường tùy chỉnh chứa ngày diễn ra sự kiện
    'orderby' => 'meta_value_num', // Sắp xếp theo giá trị số của trường 'event_date'
    'order' => 'ASC', // Sắp xếp tăng dần (từ cũ đến mới)
    'meta_query' => array(
        array(
            'key' => 'event_date', // Trường tùy chỉnh cần so sánh
            'compare' => '<', // Chỉ lấy các sự kiện có ngày nhỏ hơn hôm nay
            'value' => $today, // Giá trị để so sánh
            'type' => 'NUMERIC' // So sánh dưới dạng số
        )
    ),
    'paged' => get_query_var('paged', 1) // Hỗ trợ phân trang
));
?>
```

## Giải thích `'paged' => get_query_var('paged', 1)`

### Tại sao cần `paged`?
- **Phân trang**: Khi hiển thị danh sách bài đăng dài, thầy trò mình thường chia nội dung thành nhiều trang để người dùng dễ dàng duyệt qua.
- **`paged`**: Đây là tham số trong `WP_Query` để xác định trang hiện tại mà người dùng đang xem.

### Cách hoạt động của `get_query_var('paged', 1)`
- **`get_query_var('paged')`**: Lấy giá trị của biến `paged` từ URL. Ví dụ: nếu URL là `/past-events/page/2`, thì giá trị của `paged` sẽ là `2`.
- **`1`**: Giá trị mặc định nếu biến `paged` không tồn tại trong URL (nghĩa là người dùng đang ở trang đầu tiên).

### Kết quả
- Khi sử dụng `'paged' => get_query_var('paged', 1)` trong truy vấn tùy chỉnh, WordPress sẽ tự động hiển thị nội dung tương ứng với trang hiện tại.

### Ví dụ URL và giá trị `paged`
| URL                          | Giá trị `paged` |
|------------------------------|------------------|
| `/past-events`               | 1                |
| `/past-events/page/2`        | 2                |
| `/past-events/page/3`        | 3                |

### Kết hợp với `paginate_links()`
- **`paginate_links()`**: Sử dụng giá trị `paged` để tạo liên kết phân trang.
- **`max_num_pages`**: Xác định số trang tối đa dựa trên kết quả của truy vấn.

```php
// filepath: /Users/ken/Folders/Projects/polytuts-5/theme/page-past-events.php
<?php
echo paginate_links(array(
    'total' => $pastEvents->max_num_pages, // Tổng số trang
    'current' => get_query_var('paged', 1) // Trang hiện tại
));
?>
```

## Tạo trang các sự kiện đã qua

### 1. Tạo trang mới
- Truy cập **Pages** > **Add New** trong bảng điều khiển WordPress.
- Đặt tiêu đề trang là **Các Sự Kiện Đã Qua**.
- Để trống nội dung chính và nhấn **Publish** để lưu trang.

### 2. Xem trước trang
- Sử dụng liên kết **View Page** để xem trước trang vừa tạo.
- Các em các em lưu ý rằng tại thời điểm này, trang sẽ sử dụng tệp mẫu `page.php` trong thư mục chủ đề.

## Tạo mẫu cho trang các sự kiện đã qua

### 1. Tạo tệp mẫu riêng
Trong WordPress, thầy trò mình có thể tạo tệp mẫu riêng cho một trang cụ thể bằng cách đặt tên tệp theo định dạng `page-{slug}.php`. Slug là phần cuối của URL trang, ví dụ: nếu URL là `/past-events`, thì slug là `past-events`.

- Trong thư mục chủ đề, tạo tệp mới tên là `page-past-events.php`.

### 2. Sử dụng nội dung từ mẫu lưu trữ sự kiện
- Sao chép nội dung từ tệp `archive-event.php` và dán vào tệp `page-past-events.php`.
- Sửa tiêu đề và phụ đề để phù hợp với trang các sự kiện đã qua:
```php
// filepath: /Users/ken/Folders/Projects/polytuts-5/theme/page-past-events.php
<?php
// ...existing code...
<h1>Các Sự Kiện Đã Qua</h1>
<p>Bản tóm tắt các sự kiện đã diễn ra trong quá khứ.</p>
// ...existing code...
```

## Hiển thị các sự kiện đã qua

### 1. Tạo truy vấn tùy chỉnh

#### Tại sao cần truy vấn tùy chỉnh?
Truy vấn tùy chỉnh (Custom Query) cho phép thầy trò mình lấy dữ liệu từ cơ sở dữ liệu theo điều kiện cụ thể. Trong trường hợp này, thầy trò mình sẽ chỉ lấy các sự kiện có ngày diễn ra nhỏ hơn ngày hiện tại.

#### Cách viết truy vấn tùy chỉnh
- Thêm truy vấn tùy chỉnh vào tệp `page-past-events.php`:
```php
// filepath: /Users/ken/Folders/Projects/polytuts-5/theme/page-past-events.php
<?php
$today = date('Ymd'); // Lấy ngày hiện tại theo định dạng Ymd (năm, tháng, ngày)
$pastEvents = new WP_Query(array(
    'post_type' => 'event', // Chỉ lấy bài đăng thuộc loại 'event'
    'meta_key' => 'event_date', // Trường tùy chỉnh chứa ngày diễn ra sự kiện
    'orderby' => 'meta_value_num', // Sắp xếp theo giá trị số của trường 'event_date'
    'order' => 'ASC', // Sắp xếp tăng dần (từ cũ đến mới)
    'meta_query' => array(
        array(
            'key' => 'event_date', // Trường tùy chỉnh cần so sánh
            'compare' => '<', // Chỉ lấy các sự kiện có ngày nhỏ hơn hôm nay
            'value' => $today, // Giá trị để so sánh
            'type' => 'NUMERIC' // So sánh dưới dạng số
        )
    ),
    'paged' => get_query_var('paged', 1) // Hỗ trợ phân trang
));
?>
```

### 2. Hiển thị nội dung với phân trang

#### Vòng lặp WordPress
- Thêm đoạn mã sau vào tệp `page-past-events.php` để hiển thị danh sách sự kiện và phân trang:
```php
<?php
if ($pastEvents->have_posts()) {
    while ($pastEvents->have_posts()) {
        $pastEvents->the_post();
        ?>
        <div class="event-summary">
            <a href="<?php the_permalink(); ?>" class="event-summary__title"><?php the_title(); ?></a>
            <p><?php echo wp_trim_words(get_the_content(), 18); ?></p>
        </div>
        <?php
    }
    // Hiển thị phân trang
    echo paginate_links(array(
        'total' => $pastEvents->max_num_pages // Số trang tối đa
    ));
}
wp_reset_postdata(); // Đặt lại dữ liệu bài đăng sau khi sử dụng truy vấn tùy chỉnh
?>
```

#### Giải thích mã
- **`paginate_links()`**: Hiển thị liên kết phân trang.
- **`max_num_pages`**: Trả về số trang tối đa của truy vấn tùy chỉnh.

## Thêm liên kết đến trang các sự kiện đã qua

### 1. Thêm liên kết trong màn hình lưu trữ sự kiện
Để người dùng dễ dàng truy cập trang các sự kiện đã qua, thầy trò mình sẽ thêm một liên kết vào cuối màn hình lưu trữ sự kiện.

- Mở tệp `archive-event.php` và thêm liên kết:
```php
// filepath: /Users/ken/Folders/Projects/polytuts-5/theme/archive-event.php
<?php
// ...existing code...
<div class="past-events-link">
    <p>Tìm kiếm bản tóm tắt về các sự kiện đã qua? <a href="<?php echo site_url('/past-events'); ?>">Xem tại đây</a>.</p>
</div>
// ...existing code...
```

#### Giải thích mã
- **`site_url()`**: Tạo URL đầy đủ đến trang các sự kiện đã qua dựa trên slug `/past-events`.

### 2. Kết quả
- Liên kết sẽ xuất hiện ở cuối màn hình lưu trữ sự kiện, dẫn đến trang các sự kiện đã qua.

## Tổng kết

Trong bài học này, thầy trò mình đã học cách tạo một trang mới để hiển thị các sự kiện đã diễn ra trong quá khứ. Thầy trò mình đã tạo truy vấn tùy chỉnh, hiển thị nội dung, và thêm phân trang để người dùng dễ dàng duyệt qua danh sách sự kiện. Hy vọng bài viết này giúp các em hiểu rõ hơn về cách làm việc với các loại bài đăng tùy chỉnh và truy vấn trong WordPress. Trong bài học tiếp theo, thầy trò mình sẽ học cách tạo mối quan hệ giữa các bài đăng. Hãy chuẩn bị tinh thần, thầy trò mình sẽ bắt đầu ngay thôi! 🎉
