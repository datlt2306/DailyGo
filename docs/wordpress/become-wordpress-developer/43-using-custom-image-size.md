# Sử Dụng Kích Thước Hình Ảnh Tùy Chỉnh trong WordPress

## Mục tiêu

-   Hiển thị hình ảnh tùy chỉnh với kích thước phù hợp trên giao diện người dùng.
-   Quản lý việc cắt xén hình ảnh để tối ưu hóa hiển thị.


## Sử dụng kích thước hình ảnh tùy chỉnh

### Mục đích

Hiển thị hình ảnh với kích thước tùy chỉnh trên các màn hình khác nhau, như chi tiết giáo sư hoặc danh sách giáo sư trong chương trình.


### Code mẫu

**Cập nhật tệp mẫu giáo sư đơn lẻ**

```php
// filepath: /Users/ken/Folders/Projects/polytuts-5/theme/single-professor.php
<?php
// ...existing code...
echo get_the_post_thumbnail(null, 'professor-portrait'); // Sử dụng kích thước chân dung
// ...existing code...
```

**Cập nhật tệp mẫu chương trình đơn lẻ**

```php
// filepath: /Users/ken/Folders/Projects/polytuts-5/theme/single-program.php
<?php
// ...existing code...
echo '<img src="' . get_the_post_thumbnail_url(null, 'professor-landscape') . '" alt="' . get_the_title() . '">';
// ...existing code...
```


### Tóm tắt

- **`get_the_post_thumbnail()`**: Hiển thị hình ảnh nổi bật với kích thước tùy chỉnh.
- **`get_the_post_thumbnail_url()`**: Trả về URL của hình ảnh nổi bật với kích thước tùy chỉnh.


### Kết quả mẫu

- Trên màn hình chi tiết giáo sư, hình ảnh sẽ hiển thị với kích thước chân dung.
- Trên màn hình chương trình, hình ảnh sẽ hiển thị với kích thước phong cảnh.


## Quản lý việc cắt xén hình ảnh

### Mục đích

Kiểm soát cách hình ảnh được cắt xén để phù hợp với tỷ lệ khung hình tùy chỉnh.


### Hướng dẫn

1. Cài đặt plugin **Manual Image Crop**:
    - Truy cập **Plugins** > **Add New**.
    - Tìm kiếm **Manual Image Crop** (tác giả: Thomas Z).
    - Cài đặt và kích hoạt plugin.

2. Chỉnh sửa hình ảnh:
    - Truy cập bài đăng và nhấp vào **Featured Image**.
    - Nhấp vào **Crop Image**.
    - Chọn kích thước cần chỉnh sửa (ví dụ: `professor-landscape` hoặc `professor-portrait`).
    - Điều chỉnh vùng cắt và nhấn **Crop**.


### Tóm tắt

- **Manual Image Crop**: Plugin giúp chỉnh sửa vùng cắt cho từng kích thước hình ảnh.
- **Tỷ lệ khung hình**: Plugin tự động giới hạn vùng cắt theo tỷ lệ khung hình đã định.


### Kết quả mẫu

- Hình ảnh sẽ hiển thị với vùng cắt tùy chỉnh trên giao diện người dùng.
- Trình duyệt có thể yêu cầu làm mới toàn bộ (Shift + Reload) để hiển thị hình ảnh mới.


## Bài tập gợi ý

1. **Thêm kích thước hình ảnh mới**:  
   - Tạo kích thước hình ảnh vuông (300x300, cắt) để sử dụng cho danh sách giáo sư.

2. **Kiểm tra vùng cắt**:  
   - Thử chỉnh sửa vùng cắt cho các hình ảnh khác nhau và kiểm tra hiển thị trên giao diện người dùng.


## Tips / Lưu ý

- **Bộ nhớ đệm trình duyệt**: Khi chỉnh sửa vùng cắt, hãy làm mới toàn bộ (Shift + Reload) để hiển thị hình ảnh mới.
- **Tỷ lệ khung hình**: Đảm bảo tỷ lệ khung hình phù hợp với thiết kế giao diện.


## Kết luận

Trong bài học này, bạn đã học cách sử dụng kích thước hình ảnh tùy chỉnh trên giao diện người dùng và quản lý việc cắt xén hình ảnh. Đây là bước quan trọng để tối ưu hóa hiển thị và trải nghiệm người dùng trên website WordPress.

Nếu có thắc mắc, đừng ngại hỏi thầy hoặc các bạn nhé!  
Chúc các bạn học tốt! 🚀  
— **Thầy Đạt 🧡**