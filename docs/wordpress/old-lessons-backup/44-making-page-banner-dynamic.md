# Làm Cho Vùng Biểu Ngữ Trang Trở Nên Động trong WordPress

## Mục tiêu

-   Hiển thị phụ đề và hình nền động cho vùng biểu ngữ trang.
-   Sử dụng trường tùy chỉnh để cho phép người dùng tải lên hình ảnh và nhập phụ đề.


## Tạo trường tùy chỉnh cho biểu ngữ trang

### Mục đích

Cho phép người dùng tải lên hình ảnh và nhập phụ đề cho vùng biểu ngữ trang.


### Hướng dẫn

1. Truy cập **Custom Fields** > **Add New**.
2. Tạo nhóm trường mới với tên **Page Banner**.
3. Thêm các trường:
    - **Page Banner Subtitle**:
        - **Field Type**: Text.
    - **Page Banner Background**:
        - **Field Type**: Image.
4. Trong phần **Location**, thiết lập:
    - Hiển thị nhóm trường này trên tất cả các loại bài đăng.


### Kết quả mẫu

Khi chỉnh sửa bài đăng hoặc trang, bạn sẽ thấy các trường tùy chỉnh **Page Banner Subtitle** và **Page Banner Background**.


## Hiển thị phụ đề và hình nền động

### Mục đích

Sử dụng giá trị từ trường tùy chỉnh để hiển thị phụ đề và hình nền động.


### Code mẫu

**Cập nhật tệp mẫu giáo sư đơn lẻ**

```php
// filepath: /Users/ken/Folders/Projects/polytuts-5/theme/single-professor.php
<div class="page-banner">
    <div class="page-banner__bg-image" style="background-image: url('<?php 
        $pageBannerImage = get_field('page_banner_background');
        echo $pageBannerImage['sizes']['page-banner'];
    ?>');"></div>
    <div class="page-banner__content container container--narrow">
        <h1 class="page-banner__title"><?php the_title(); ?></h1>
        <div class="page-banner__intro">
            <p><?php echo get_field('page_banner_subtitle'); ?></p>
        </div>
    </div>
</div>
```


### Tóm tắt

- **`get_field()`**: Lấy giá trị từ trường tùy chỉnh.
- **`$pageBannerImage['sizes']['page-banner']`**: Sử dụng kích thước hình ảnh tùy chỉnh cho hình nền.


### Kết quả mẫu

Trên trang chi tiết giáo sư, vùng biểu ngữ sẽ hiển thị phụ đề và hình nền động.


## Tạo kích thước hình ảnh tùy chỉnh cho biểu ngữ

### Mục đích

Tạo kích thước hình ảnh phù hợp với vùng biểu ngữ trang.


### Code mẫu

**Cập nhật tệp `functions.php`**

```php
// filepath: /Users/ken/Folders/Projects/polytuts-5/theme/functions.php
function university_features() {
    // ...existing code...
    add_image_size('page-banner', 1500, 350, true); // Kích thước biểu ngữ trang
    // ...existing code...
}
```


### Tóm tắt

- **`add_image_size()`**: Tạo kích thước hình ảnh tùy chỉnh với tỷ lệ khung hình phù hợp.


### Kết quả mẫu

WordPress sẽ tự động tạo kích thước hình ảnh biểu ngữ trang khi bạn tải lên hình ảnh.


## Bài tập gợi ý

1. **Thêm giá trị dự phòng**:  
   - Hiển thị hình nền mặc định nếu không có hình ảnh được tải lên.

2. **Tùy chỉnh giao diện**:  
   - Thêm hiệu ứng CSS để làm nổi bật vùng biểu ngữ trang.


## Tips / Lưu ý

- **Kiểm tra dữ liệu**: Đảm bảo trường tùy chỉnh đã được thiết lập đúng trước khi hiển thị trên giao diện người dùng.
- **Sử dụng plugin Manual Image Crop**: Chỉnh sửa vùng cắt cho hình ảnh biểu ngữ nếu cần.


## Kết luận

Trong bài học này, bạn đã học cách làm cho vùng biểu ngữ trang trở nên động bằng cách sử dụng trường tùy chỉnh và kích thước hình ảnh tùy chỉnh. Đây là bước quan trọng để nâng cao tính cá nhân hóa và trải nghiệm người dùng trên website WordPress.

Nếu có thắc mắc, đừng ngại hỏi thầy hoặc các bạn nhé!  
Chúc các bạn học tốt! 🚀  
— **Thầy Đạt 🧡**