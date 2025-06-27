# Tạo Trang Các Sự Kiện Đã Qua trong WordPress

## Giới thiệu

Chào các em, hôm nay thầy sẽ hướng dẫn các em cách tạo một trang mới chỉ liệt kê các sự kiện đã diễn ra trong quá khứ. Tính đến thời điểm này, trang chủ của chúng ta chỉ hiển thị các sự kiện sắp tới, và ngay cả màn hình lưu trữ sự kiện cũng không hiển thị các sự kiện đã qua. Tuy nhiên, có thể có trường hợp người dùng muốn xem lại bản tóm tắt các sự kiện mà chúng ta đã tổ chức trong những năm trước.

---

## Lý thuyết về trang các sự kiện đã qua

### Tại sao cần trang các sự kiện đã qua?
- **Lưu trữ lịch sử**: Hiển thị các sự kiện đã diễn ra giúp người dùng có cái nhìn tổng quan về hoạt động của chúng ta trong quá khứ.
- **Tăng tính chuyên nghiệp**: Một trang lưu trữ các sự kiện đã qua giúp website trở nên đầy đủ và chuyên nghiệp hơn.

### Các thành phần chính
- **Truy vấn tùy chỉnh (Custom Query)**: Sử dụng lớp `WP_Query` để lấy dữ liệu từ cơ sở dữ liệu theo điều kiện cụ thể.
- **Mẫu trang (Page Template)**: Tạo tệp mẫu riêng để kiểm soát cách hiển thị nội dung của trang.
- **Liên kết động**: Sử dụng hàm `site_url()` để tạo liên kết chính xác đến trang các sự kiện đã qua.

---

## Tạo trang các sự kiện đã qua

### 1. Tạo trang mới
- Truy cập **Pages** > **Add New** trong bảng điều khiển WordPress.
- Đặt tiêu đề trang là **Các Sự Kiện Đã Qua**.
- Để trống nội dung chính và nhấn **Publish** để lưu trang.

### 2. Xem trước trang
- Sử dụng liên kết **View Page** để xem trước trang vừa tạo.
- Lưu ý rằng tại thời điểm này, trang sẽ sử dụng tệp mẫu `page.php` trong thư mục chủ đề.

---

## Tạo mẫu cho trang các sự kiện đã qua

### 1. Tạo tệp mẫu riêng
Trong WordPress, chúng ta có thể tạo tệp mẫu riêng cho một trang cụ thể bằng cách đặt tên tệp theo định dạng `page-{slug}.php`. Slug là phần cuối của URL trang, ví dụ: nếu URL là `/past-events`, thì slug là `past-events`.

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

---

## Hiển thị các sự kiện đã qua

### 1. Tạo truy vấn tùy chỉnh

#### Tại sao cần truy vấn tùy chỉnh?
Truy vấn tùy chỉnh (Custom Query) cho phép chúng ta lấy dữ liệu từ cơ sở dữ liệu theo điều kiện cụ thể. Trong trường hợp này, chúng ta sẽ chỉ lấy các sự kiện có ngày diễn ra nhỏ hơn ngày hiện tại.

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
    )
));
?>
```

### 2. Hiển thị nội dung

#### Vòng lặp WordPress
Vòng lặp (loop) là cách WordPress hiển thị danh sách bài đăng. Chúng ta sẽ sử dụng vòng lặp để hiển thị danh sách các sự kiện đã qua.

- Thêm đoạn mã sau vào tệp `page-past-events.php`:
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
}
wp_reset_postdata(); // Đặt lại dữ liệu bài đăng sau khi sử dụng truy vấn tùy chỉnh
?>
```

#### Giải thích mã
- **`have_posts()`**: Kiểm tra xem có bài đăng nào để hiển thị không.
- **`the_post()`**: Lấy dữ liệu của bài đăng hiện tại.
- **`the_title()`**: Hiển thị tiêu đề bài đăng.
- **`the_permalink()`**: Tạo liên kết đến trang chi tiết của bài đăng.
- **`wp_trim_words()`**: Hiển thị đoạn trích ngắn gọn từ nội dung bài đăng.

### 3. Kết quả
- Trang các sự kiện đã qua sẽ hiển thị danh sách các sự kiện đã diễn ra trong quá khứ.

---

## Thêm liên kết đến trang các sự kiện đã qua

### 1. Thêm liên kết trong màn hình lưu trữ sự kiện
Để người dùng dễ dàng truy cập trang các sự kiện đã qua, chúng ta sẽ thêm một liên kết vào cuối màn hình lưu trữ sự kiện.

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

---

## Tổng kết

Trong bài học này, chúng ta đã học cách tạo một trang mới để hiển thị các sự kiện đã diễn ra trong quá khứ. Chúng ta đã tạo truy vấn tùy chỉnh, hiển thị nội dung, và thêm liên kết đến trang các sự kiện đã qua. Hy vọng bài viết này giúp các em hiểu rõ hơn về cách làm việc với các loại bài đăng tùy chỉnh và truy vấn trong WordPress. Trong bài học tiếp theo, chúng ta sẽ học cách tạo mối quan hệ giữa các bài đăng. Hãy chuẩn bị tinh thần, chúng ta sẽ bắt đầu ngay thôi! 🎉