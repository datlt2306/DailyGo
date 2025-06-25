# Làm quen với mảng trong PHP: Hướng dẫn từ Thầy Đạt

Chào các em, hôm nay thầy sẽ hướng dẫn các em làm quen với **mảng** – một khái niệm cực kỳ quan trọng trong PHP và WordPress. Mảng giúp chúng ta lưu trữ nhiều giá trị trong một biến duy nhất, mở ra rất nhiều khả năng thú vị trong lập trình. Nào, cùng bắt đầu nhé!

---

## Mảng là gì?

Hãy tưởng tượng mảng như một tập hợp hoặc danh sách. Ví dụ: một đại lý xe hơi có thể nói rằng một chiếc xe có nhiều màu sắc. Trong lập trình, mảng giúp chúng ta lưu trữ nhiều giá trị liên quan trong một biến duy nhất.

---

## Tạo mảng trong PHP

### 1. Tạo mảng cơ bản
- Mở tệp `index.php` trong thư mục chủ đề của các em.
- Thêm đoạn mã sau để tạo một mảng:
```php
<?php
$names = array("Brad", "John", "Jane", "Meowsalot");
```

### 2. Truy cập giá trị trong mảng
- Sử dụng chỉ số để truy cập từng giá trị:
```php
<?php
echo $names[0]; // Kết quả: Brad
echo $names[2]; // Kết quả: Jane
```

> **Lưu ý**: Mảng trong PHP bắt đầu từ chỉ số `0`.

---

## Lặp qua mảng

### 1. Vòng lặp `while`
- Sử dụng vòng lặp để lặp qua tất cả các giá trị trong mảng:
```php
<?php
$count = 0;
while ($count < count($names)) {
    echo "<p>Xin chào, tên tôi là " . $names[$count] . ".</p>";
    $count++;
}
```

### 2. Kết quả
- Lưu tệp và làm mới trang web. Các em sẽ thấy:
  - **"Xin chào, tên tôi là Brad."**
  - **"Xin chào, tên tôi là John."**
  - **"Xin chào, tên tôi là Jane."**
  - **"Xin chào, tên tôi là Meowsalot."**

---

## Tại sao sử dụng mảng?

Mảng giúp chúng ta:
- Lưu trữ nhiều giá trị liên quan trong một biến duy nhất.
- Lặp qua các giá trị một cách hiệu quả.
- Dễ dàng thêm, sửa, hoặc xóa giá trị mà không cần thay đổi toàn bộ mã.

---

## Tóm tắt nhanh

- **Mảng**: Lưu trữ nhiều giá trị trong một biến duy nhất.
- **Truy cập giá trị**: Sử dụng chỉ số để lấy giá trị từ mảng.
- **Vòng lặp**: Sử dụng vòng lặp để lặp qua tất cả các giá trị trong mảng.

---

Hy vọng bài viết này giúp các em hiểu rõ hơn về mảng trong PHP. Trong bài học tiếp theo, chúng ta sẽ sử dụng mảng để hiển thị nội dung WordPress động như bài đăng và trang. Hãy chuẩn bị tinh thần, chúng ta sẽ bắt đầu ngay thôi! 🎉