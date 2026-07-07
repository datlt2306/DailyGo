# Liên Kết Hình Ảnh Nổi Bật với Bài Đăng trong WordPress

## Mục tiêu

-   Kích hoạt tính năng hình ảnh nổi bật cho loại bài đăng **Professor**.
-   Tạo kích thước hình ảnh tùy chỉnh để tối ưu hóa hiển thị và hiệu suất.

## Kích hoạt hình ảnh nổi bật

### Mục đích

Hình ảnh nổi bật giúp liên kết một hình ảnh đại diện với mỗi bài đăng, được sử dụng để hiển thị trên giao diện người dùng.

### Code mẫu

**Cập nhật tệp `functions.php`**

```php
// filepath: /Users/ken/Folders/Projects/polytuts-5/theme/functions.php
function university_features() {
    // ...existing code...
    add_theme_support('post-thumbnails'); // Kích hoạt hình ảnh nổi bật
    // ...existing code...
}
```

**Cập nhật loại bài đăng `Professor`**

```php
// filepath: /Users/ken/Folders/Projects/polytuts-5/wp-content/mu-plugins/university-post-types.php
register_post_type('professor', array(
    // ...existing code...
    'supports' => array('title', 'editor', 'thumbnail'), // Thêm hỗ trợ hình ảnh nổi bật
    // ...existing code...
));
```

### Tóm tắt

- **`add_theme_support('post-thumbnails')`**: Kích hoạt hình ảnh nổi bật cho chủ đề.
- **`'thumbnail'`**: Thêm hỗ trợ hình ảnh nổi bật cho loại bài đăng **Professor**.

### Kết quả mẫu

Sau khi lưu tệp, các em sẽ thấy tùy chọn **Featured Image** xuất hiện khi chỉnh sửa bài đăng **Professor**.

## Tạo kích thước hình ảnh tùy chỉnh

### Mục đích

Tạo các kích thước hình ảnh tùy chỉnh để tối ưu hóa hiển thị trên các màn hình khác nhau.

### Code mẫu

**Thêm kích thước hình ảnh tùy chỉnh**

```php
// filepath: /Users/ken/Folders/Projects/polytuts-5/theme/functions.php
function university_features() {
    // ...existing code...
    add_image_size('professor-landscape', 400, 260, true); // Kích thước phong cảnh
    add_image_size('professor-portrait', 480, 650, true);  // Kích thước chân dung
    // ...existing code...
}
```

### Tóm tắt

- **`add_image_size()`**: Tạo kích thước hình ảnh tùy chỉnh.
    - **`professor-landscape`**: Kích thước phong cảnh (400x260, cắt).
    - **`professor-portrait`**: Kích thước chân dung (480x650, cắt).

### Kết quả mẫu

WordPress sẽ tự động tạo các kích thước hình ảnh mới khi các em tải lên hình ảnh.

## Sử dụng plugin để tạo kích thước cho hình ảnh cũ

### Mục đích

Tạo kích thước hình ảnh tùy chỉnh cho các hình ảnh đã tải lên trước đó.

### Hướng dẫn

1. Truy cập **Plugins** > **Add New**.
2. Tìm kiếm plugin **Regenerate Thumbnails**.
3. Cài đặt và kích hoạt plugin.
4. Truy cập **Tools** > **Regenerate Thumbnails**.
5. Nhấn nút **Regenerate Thumbnails** để tạo kích thước mới cho tất cả hình ảnh.

### Tóm tắt

- **Regenerate Thumbnails**: Plugin giúp tạo kích thước hình ảnh tùy chỉnh cho các hình ảnh cũ.

### Kết quả mẫu

Sau khi chạy plugin, các hình ảnh cũ sẽ có các kích thước tùy chỉnh mới được tạo.

## Bài tập gợi ý

1. **Thêm kích thước hình ảnh mới**:  
   - Tạo kích thước hình ảnh vuông (300x300, cắt) để sử dụng cho danh sách giáo sư.

2. **Kiểm tra hiệu suất**:  
   - So sánh thời gian tải trang trước và sau khi sử dụng kích thước hình ảnh tùy chỉnh.

## Tips / Các em các em lưu ý

- **Sử dụng kích thước phù hợp**: Chỉ sử dụng kích thước hình ảnh cần thiết để tối ưu hóa hiệu suất.
- **Kiểm tra thư mục tải lên**: WordPress lưu các kích thước hình ảnh trong thư mục `wp-content/uploads`.

## Kết luận

Trong bài học này, các em đã học cách kích hoạt hình ảnh nổi bật, tạo kích thước hình ảnh tùy chỉnh, và sử dụng plugin để tạo kích thước cho hình ảnh cũ. Đây là bước quan trọng để tối ưu hóa hiển thị và hiệu suất của website WordPress.

Nếu có thắc mắc, đừng ngại hỏi thầy hoặc các các em nhé!  
Chúc các các em học tốt! 🚀  
— **Thầy Đạt 🧡**
