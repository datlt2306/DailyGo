# Sửa Nhanh Hàm `pageBanner` Để Tránh Lỗi Trên Trang Lưu Trữ

## Chào các em!

Hôm nay, thầy sẽ hướng dẫn các em cách sửa nhanh hàm `pageBanner` để tránh lỗi khi sử dụng trên trang lưu trữ (archive) hoặc danh sách blog. Đây là một vấn đề nhỏ nhưng rất dễ gây nhầm lẫn nếu không xử lý đúng cách.


## Vấn đề

Hàm `pageBanner` hoạt động tốt trong nhiều trường hợp, nhưng khi được sử dụng trên trang lưu trữ (ví dụ: trang "Tất cả sự kiện"), nếu sự kiện đầu tiên trong danh sách có hình nền, mã của chúng ta có thể bị nhầm lẫn và sử dụng hình nền đó làm biểu ngữ cho toàn bộ trang lưu trữ.


## Giải pháp

Để khắc phục, chúng ta cần sửa đổi điều kiện kiểm tra trong hàm `pageBanner`. Cụ thể, trong phần kiểm tra xem bài đăng hiện tại có giá trị trường tùy chỉnh hình nền hay không, chúng ta sẽ thêm hai điều kiện để đảm bảo truy vấn hiện tại không phải là trang lưu trữ (`is_archive()`) hoặc danh sách blog (`is_home()`).


### Cập nhật hàm `pageBanner`

#### Trước đây:

```php
if (!isset($args['photo'])) {
    if (get_field('page_banner_background_image')) {
        $args['photo'] = get_field('page_banner_background_image')['sizes']['pageBanner'];
    } else {
        $args['photo'] = get_theme_file_uri('/images/ocean.jpg');
    }
}
```

#### Sau khi sửa:

```php
if (!isset($args['photo'])) {
    if (get_field('page_banner_background_image') AND !is_archive() AND !is_home()) {
        $args['photo'] = get_field('page_banner_background_image')['sizes']['pageBanner'];
    } else {
        $args['photo'] = get_theme_file_uri('/images/ocean.jpg');
    }
}
```


### Tại sao lại sửa?

- **Trước đây**: Mã có thể nhầm lẫn và sử dụng hình nền của bài đăng đầu tiên làm biểu ngữ cho toàn bộ trang lưu trữ.
- **Sau khi sửa**: Mã đảm bảo rằng hình nền chỉ được sử dụng nếu truy vấn hiện tại không phải là trang lưu trữ hoặc danh sách blog.


## Tóm tắt nhanh

- **Vấn đề**: Hàm `pageBanner` có thể nhầm lẫn hình nền của bài đăng đầu tiên trên trang lưu trữ.
- **Giải pháp**: Thêm điều kiện `!is_archive()` và `!is_home()` để đảm bảo mã hoạt động chính xác.
- **Cập nhật hàm `pageBanner`**:
    - Sửa phần kiểm tra hình nền để tránh lỗi trên trang lưu trữ hoặc danh sách blog.


## Kết luận

Các em thấy không, chỉ với một vài dòng sửa đổi nhỏ, chúng ta đã làm cho hàm `pageBanner` trở nên thông minh và đáng tin cậy hơn. Đây là một kỹ năng quan trọng khi làm việc với WordPress và PHP, giúp chúng ta tránh được những lỗi không mong muốn.

Nếu có thắc mắc, đừng ngại hỏi thầy nhé!  
Chúc các em học tốt! 🚀  
— **Thầy Đạt 🧡**
