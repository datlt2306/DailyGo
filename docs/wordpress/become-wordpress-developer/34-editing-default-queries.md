# Chỉnh Sửa Truy Vấn Mặc Định trong WordPress

## Giới thiệu

Chào các em, hôm nay thầy sẽ hướng dẫn các em cách chỉnh sửa **truy vấn mặc định** trong WordPress. Truy vấn mặc định là những truy vấn mà WordPress tự động thực hiện dựa trên URL hiện tại. Ví dụ, khi chúng ta truy cập vào màn hình lưu trữ của loại bài đăng tùy chỉnh, WordPress sẽ tự động truy vấn tất cả các bài đăng thuộc loại bài đăng đó.

---

## Lý thuyết về truy vấn mặc định

### Truy vấn mặc định là gì?
Truy vấn mặc định trong WordPress là các truy vấn tự động được thực hiện dựa trên URL hiện tại. Ví dụ:
- **Trang lưu trữ**: Hiển thị danh sách bài đăng thuộc loại bài đăng hoặc danh mục cụ thể.
- **Trang tìm kiếm**: Hiển thị kết quả tìm kiếm dựa trên từ khóa.

### Tại sao cần chỉnh sửa truy vấn mặc định?
- **Tùy chỉnh nội dung hiển thị**: Đôi khi chúng ta cần hiển thị nội dung theo cách khác với mặc định của WordPress, chẳng hạn như sắp xếp bài đăng theo trường tùy chỉnh hoặc loại bỏ các bài đăng không phù hợp.
- **Tối ưu hóa trải nghiệm người dùng**: Chỉnh sửa truy vấn giúp hiển thị nội dung phù hợp hơn với nhu cầu của người dùng.

---

## Chỉnh sửa truy vấn mặc định

### 1. Hook `pre_get_posts`
Hook `pre_get_posts` là một công cụ mạnh mẽ trong WordPress, cho phép chúng ta chỉnh sửa truy vấn mặc định trước khi nó được gửi đến cơ sở dữ liệu. Điều này giúp chúng ta tùy chỉnh các tham số truy vấn như:
- **`orderby`**: Sắp xếp bài đăng theo tiêu chí cụ thể.
- **`meta_query`**: Lọc bài đăng dựa trên giá trị trường tùy chỉnh.
- **`posts_per_page`**: Điều chỉnh số lượng bài đăng hiển thị trên mỗi trang.

### 2. Cách sử dụng
Chúng ta sẽ sử dụng hook `pre_get_posts` để chỉnh sửa truy vấn mặc định cho màn hình lưu trữ sự kiện. Mục tiêu:
- Sắp xếp các sự kiện theo ngày diễn ra.
- Loại bỏ các sự kiện đã diễn ra trong quá khứ.

---

## Ứng dụng vào màn hình lưu trữ sự kiện

### 1. Mã chỉnh sửa truy vấn
- Mở tệp `functions.php` trong thư mục chủ đề.
- Thêm đoạn mã sau để chỉnh sửa truy vấn mặc định:
```php
// filepath: /Users/ken/Folders/Projects/polytuts-5/theme/functions.php
function university_adjust_queries($query) {
    // Chỉ áp dụng trên giao diện người dùng và truy vấn chính
    if (!is_admin() && $query->is_main_query() && is_post_type_archive('event')) {
        $today = date('Ymd'); // Lấy ngày hiện tại
        $query->set('meta_key', 'event_date'); // Sắp xếp theo trường tùy chỉnh 'event_date'
        $query->set('orderby', 'meta_value_num'); // Sắp xếp theo giá trị số
        $query->set('order', 'ASC'); // Thứ tự tăng dần
        $query->set('meta_query', array(
            array(
                'key' => 'event_date',
                'compare' => '>=', // Chỉ hiển thị các sự kiện từ hôm nay trở đi
                'value' => $today,
                'type' => 'NUMERIC' // So sánh giá trị số
            )
        ));
    }
}
add_action('pre_get_posts', 'university_adjust_queries');
```

### Giải thích mã
- **`is_admin()`**: Đảm bảo rằng mã chỉ chạy trên giao diện người dùng, không ảnh hưởng đến bảng điều khiển quản trị.
- **`is_main_query()`**: Chỉ chỉnh sửa truy vấn chính, không ảnh hưởng đến các truy vấn tùy chỉnh khác.
- **`is_post_type_archive('event')`**: Chỉ áp dụng mã cho màn hình lưu trữ của loại bài đăng `event`.
- **`meta_query`**: Lọc các sự kiện để chỉ hiển thị những sự kiện có ngày diễn ra từ hôm nay trở đi.
- **`meta_key` và `meta_value_num`**: Sắp xếp bài đăng dựa trên giá trị của trường tùy chỉnh `event_date`.

---

## Tổng kết

Trong bài học này, chúng ta đã học cách chỉnh sửa truy vấn mặc định trong WordPress bằng cách sử dụng hook `pre_get_posts`. Chúng ta đã áp dụng kỹ thuật này để tùy chỉnh màn hình lưu trữ sự kiện, hiển thị các sự kiện theo ngày diễn ra và loại bỏ các sự kiện trong quá khứ. Hy vọng bài viết này giúp các em hiểu rõ hơn về cách làm việc với truy vấn mặc định trong WordPress. Trong bài học tiếp theo, chúng ta sẽ học cách tạo một trang riêng cho các sự kiện trong quá khứ. Hãy chuẩn bị tinh thần, chúng ta sẽ bắt đầu ngay thôi! 🎉