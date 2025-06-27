# Sử dụng Trường Tùy Chỉnh trong WordPress

## Giới thiệu

Chào các em, hôm nay thầy sẽ hướng dẫn các em cách sử dụng **trường tùy chỉnh** trong WordPress. Bạn có thể tự hỏi trường tùy chỉnh là gì? Hãy đi sâu vào một ví dụ để chúng ta có thể trả lời câu hỏi đó một cách hữu cơ.

---

## Lý thuyết về trường tùy chỉnh

### Trường tùy chỉnh là gì?
Trường tùy chỉnh (Custom Field) là một cách để thêm thông tin bổ sung vào bài đăng hoặc trang trong WordPress. Thông tin này có thể là bất kỳ thứ gì, chẳng hạn như ngày diễn ra sự kiện, giá sản phẩm, hoặc bất kỳ dữ liệu nào mà bạn muốn lưu trữ và hiển thị.

### Tại sao cần trường tùy chỉnh?
Trong một bài học trước, chúng ta đã viết mã trên trang chủ để hiển thị hai sự kiện. Các sự kiện này sử dụng loại bài đăng tùy chỉnh của chúng ta có tên là **event**. Tiêu đề, văn bản, và liên kết cố định là dữ liệu WordPress động thực sự, nhưng ngày tháng vẫn là HTML tĩnh được mã hóa cứng giả mạo. Điều này không lý tưởng, vì khi nói đến các sự kiện, không ai quan tâm bài đăng sự kiện được tạo vào ngày nào. Mọi người muốn biết sự kiện thực sự sẽ diễn ra vào ngày nào.

Ví dụ, với sự kiện **Ngày thơ**, chúng ta cần một trường hoàn toàn mới để chọn ngày mà sự kiện sẽ diễn ra. Đây chính là lúc **trường tùy chỉnh** phát huy tác dụng. Trường tùy chỉnh cho phép chúng ta thêm thông tin bổ sung vào bài đăng, chẳng hạn như ngày diễn ra sự kiện. Nào, cùng bắt đầu nhé!

---

## Kích hoạt trường tùy chỉnh

### 1. Cập nhật loại bài đăng tùy chỉnh
Để sử dụng trường tùy chỉnh, trước tiên chúng ta cần đảm bảo rằng loại bài đăng tùy chỉnh hỗ trợ trường tùy chỉnh. Điều này được thực hiện bằng cách thêm thuộc tính `supports` vào mã đăng ký loại bài đăng.

- Mở tệp `university-post-types.php` trong thư mục `mu-plugins`.
- Thêm hỗ trợ cho trường tùy chỉnh:
```php
// filepath: /Users/ken/Folders/Projects/polytuts-5/wp-content/mu-plugins/university-post-types.php
function university_post_types() {
    register_post_type('event', array(
        'public' => true,
        'show_in_rest' => true,
        'supports' => array('title', 'editor', 'excerpt'), // Hỗ trợ trường tùy chỉnh
        'labels' => array(
            'name' => 'Events',
            'add_new_item' => 'Add New Event',
            'edit_item' => 'Edit Event',
            'all_items' => 'All Events',
            'singular_name' => 'Event'
        ),
        'menu_icon' => 'dashicons-calendar'
    ));
}
add_action('init', 'university_post_types');
```

### Tại sao cần viết như vậy?
- **`supports`**: Thuộc tính này xác định các tính năng mà loại bài đăng hỗ trợ, chẳng hạn như tiêu đề, nội dung, đoạn trích, và trường tùy chỉnh.

---

## Cài đặt plugin Advanced Custom Fields

### 1. Tại sao cần plugin?
Mặc dù WordPress hỗ trợ trường tùy chỉnh mặc định, nhưng giao diện của nó không trực quan và khó sử dụng. Plugin **Advanced Custom Fields (ACF)** cung cấp một cách dễ dàng và mạnh mẽ để làm việc với trường tùy chỉnh.

### 2. Cài đặt plugin
- Truy cập **Plugins** > **Add New** trong bảng điều khiển WordPress.
- Tìm kiếm plugin **Advanced Custom Fields**.
- Nhấn **Install Now** và sau đó **Activate**.

---

## Tạo trường tùy chỉnh

### 1. Tạo nhóm trường
- Truy cập **Custom Fields** > **Add New**.
- Đặt tên nhóm trường là **Event Date**.

### 2. Thêm trường
- Nhấn **Add Field** và cấu hình trường:
  - **Field Label**: Event Date
  - **Field Name**: event_date
  - **Field Type**: Date Picker
  - **Required**: Yes
  - **Return Format**: Y-m-d

### 3. Cài đặt vị trí
- Trong phần **Location**, chọn:
  - **Post Type**: Event

### 4. Lưu nhóm trường
- Nhấn **Publish** để lưu nhóm trường.

---

## Hiển thị trường tùy chỉnh trên giao diện người dùng

### 1. Sử dụng trường tùy chỉnh trong vòng lặp
Sau khi tạo trường tùy chỉnh, chúng ta cần hiển thị dữ liệu của trường này trên giao diện người dùng. Điều này được thực hiện bằng cách sử dụng hàm `get_field()` của plugin ACF.

- Mở tệp `front-page.php` và sửa đoạn mã hiển thị ngày:
```php
// filepath: /Users/ken/Folders/Projects/polytuts-5/theme/front-page.php
<?php
if ($homepageEvents->have_posts()) {
    while ($homepageEvents->have_posts()) {
        $homepageEvents->the_post();
        $eventDate = new DateTime(get_field('event_date')); // Lấy dữ liệu từ trường tùy chỉnh
        ?>
        <div class="event-summary">
            <span class="event-summary__date">
                <span class="event-summary__month"><?php echo $eventDate->format('M'); ?></span>
                <span class="event-summary__day"><?php echo $eventDate->format('d'); ?></span>
            </span>
            <a href="<?php the_permalink(); ?>" class="event-summary__title"><?php the_title(); ?></a>
            <p><?php echo wp_trim_words(get_the_content(), 18); ?></p>
            <a href="<?php the_permalink(); ?>" class="btn btn--blue">Tìm hiểu thêm</a>
        </div>
        <?php
    }
}
wp_reset_postdata();
?>
```

### Tại sao cần viết như vậy?
- **`get_field()`**: Hàm này lấy dữ liệu từ trường tùy chỉnh được tạo bởi plugin ACF.
- **`DateTime`**: Chuyển đổi dữ liệu ngày thành đối tượng DateTime để định dạng ngày tháng dễ dàng hơn.

---

### 2. Kết quả
- Ngày diễn ra sự kiện sẽ hiển thị động trên giao diện người dùng.

---

## Tổng kết

Trong bài học này, chúng ta đã học cách sử dụng trường tùy chỉnh để thêm thông tin bổ sung vào bài đăng. Chúng ta đã kích hoạt trường tùy chỉnh, cài đặt plugin Advanced Custom Fields, tạo trường tùy chỉnh, và hiển thị dữ liệu trên giao diện người dùng. Hy vọng bài viết này giúp các em hiểu rõ hơn về cách sử dụng trường tùy chỉnh trong WordPress. Trong bài học tiếp theo, chúng ta sẽ học cách sắp xếp các sự kiện theo ngày diễn ra. Hãy chuẩn bị tinh thần, chúng ta sẽ bắt đầu ngay thôi! 🎉
