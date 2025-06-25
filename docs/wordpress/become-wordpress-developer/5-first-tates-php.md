# Làm quen với PHP trong WordPress: Hướng dẫn từ Thầy Đạt

Chào các em, hôm nay thầy sẽ hướng dẫn các em làm quen với PHP – ngôn ngữ cốt lõi của WordPress. Đừng lo lắng nếu các em chưa từng làm việc với ngôn ngữ lập trình trước đây, chúng ta sẽ cùng nhau vượt qua từng bước một cách dễ dàng. Nào, cùng bắt đầu nhé!

---

## PHP là gì và tại sao nó quan trọng?

PHP là ngôn ngữ lập trình phía máy chủ, được sử dụng để cung cấp sức mạnh cho WordPress. Với PHP, chúng ta có thể:
- Tạo các trang web động.
- Giao tiếp với cơ sở dữ liệu.
- Xử lý logic phức tạp như gửi email tự động, thay đổi kích thước hình ảnh, và nhiều hơn nữa.

---

## Thiết lập môi trường làm việc

### 1. Tìm thư mục WordPress
- Nếu các em sử dụng **Local by Flywheel**, nhấp chuột phải vào trang web của mình và chọn **Show in Finder** (Mac) hoặc **Open Folder** (Windows).
- Điều hướng đến thư mục `app/public`, nơi chứa các tệp hệ thống WordPress.

### 2. Cài đặt trình soạn thảo văn bản
Thầy khuyên các em sử dụng **Visual Studio Code**:
1. Tìm kiếm "Visual Studio Code" trên trình duyệt.
2. Tải xuống và cài đặt từ [code.visualstudio.com](https://code.visualstudio.com).
3. Mở Visual Studio Code và tạo một tệp mới.

---

## Tạo tệp PHP thử nghiệm

### 1. Tạo tệp mới
- Trong Visual Studio Code, tạo một tệp mới và nhập nội dung sau:
```php
<?php
echo "Hello, WordPress!";
```

### 2. Lưu tệp
- Lưu tệp vào thư mục `app/public` với tên `test.php`.

### 3. Xem tệp trong trình duyệt
- Mở trình duyệt và truy cập URL của trang web cục bộ, thêm `/test.php` vào cuối.
- Ví dụ: `http://localhost/test.php`.

---

## Làm quen với cú pháp PHP

### 1. Xuất nội dung ra trang
- Sử dụng `echo` để hiển thị nội dung:
```php
<?php
echo 2 + 2; // Kết quả: 4
```

### 2. Kết hợp PHP và HTML
- Chuyển đổi giữa PHP và HTML:
```php
<h1><?php echo "Trang này là tất cả về Thầy Đạt"; ?></h1>
```

### 3. Sử dụng biến
- Tạo biến và sử dụng trong nhiều nơi:
```php
<?php
$name = "Thầy Đạt";
?>
<h1>Trang này là tất cả về <?php echo $name; ?></h1>
<h2>Học WordPress cùng <?php echo $name; ?></h2>
```

---

## Xóa tệp thử nghiệm

Sau khi hoàn thành bài học, các em có thể xóa tệp `test.php` để giữ cho thư mục WordPress gọn gàng. Nếu muốn giữ lại để tham khảo, cũng không sao.

---

## Tóm tắt nhanh

- **PHP**: Ngôn ngữ cốt lõi của WordPress, giúp tạo các trang web động.
- **Visual Studio Code**: Trình soạn thảo văn bản miễn phí và mạnh mẽ.
- **Tệp thử nghiệm**: Tạo tệp PHP để thực hành cú pháp cơ bản.
- **Xóa tệp**: Dọn dẹp thư mục sau khi hoàn thành bài học.

---

Hy vọng bài viết này giúp các em làm quen với PHP một cách dễ dàng. Trong bài học tiếp theo, chúng ta sẽ bắt đầu viết mã để tạo chủ đề WordPress tùy chỉnh. Hãy chuẩn bị tinh thần, chúng ta sẽ bắt đầu ngay thôi! 🎉