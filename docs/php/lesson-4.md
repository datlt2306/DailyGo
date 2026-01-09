# Buổi 4 (TH) — Form GET/POST, validate & sanitize

## 🎯 Mục tiêu

-   Nhận dữ liệu từ form, kiểm tra, hiển thị lỗi thân thiện, bảo vệ cơ bản.

## 🧠 Nội dung chính

-   Form HTML: method, action, input name, enctype mặc định.
-   $\_GET, $\_POST, filter_input và filter_var.
-   Sanitize vs validate: trim, strip_tags (cân nhắc), filter email.
-   Sticky form: đổ lại giá trị khi có lỗi.
-   Hiển thị lỗi: mảng $errors, kiểm tra trước khi xử lý.

## 💻 Thực hành

-   Tạo form đăng ký đơn giản: name, email, password, confirm password.
-   Validate: bắt buộc, email hợp lệ, password ≥8 ký tự, match confirm.
-   Nếu hợp lệ: echo JSON dữ liệu (chưa lưu DB), nếu lỗi: hiển thị dưới từng field.

### Hướng dẫn thực hiện
-   Tạo `register.php` chứa form method POST, mỗi input có `name` rõ ràng.
-   Đọc dữ liệu bằng `filter_input(INPUT_POST, 'field', FILTER_SANITIZE_FULL_SPECIAL_CHARS)` rồi `trim`.
-   Tạo mảng `$errors = []`; kiểm tra rỗng, email với `FILTER_VALIDATE_EMAIL`, độ dài password >= 8, so khớp confirm.
-   Nếu có lỗi, render lại form và hiển thị thông báo cạnh từng field; nếu không, `echo json_encode($data)` để xem kết quả.

#### Mẫu code gợi ý (trích xử lý submit)
```php
<?php
$name = trim(filter_input(INPUT_POST, 'name', FILTER_SANITIZE_FULL_SPECIAL_CHARS));
$email = trim(filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL));
$password = filter_input(INPUT_POST, 'password');
$confirm = filter_input(INPUT_POST, 'confirm');
$errors = [];

if ($name === '') $errors['name'] = 'Tên bắt buộc';
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) $errors['email'] = 'Email không hợp lệ';
if (strlen($password) < 8) $errors['password'] = 'Mật khẩu tối thiểu 8 ký tự';
if ($password !== $confirm) $errors['confirm'] = 'Xác nhận không khớp';

if ($errors) {
	// render lại form và hiển thị $errors
} else {
	echo json_encode(['name' => $name, 'email' => $email], JSON_PRETTY_PRINT);
}
```

## 📚 Tài liệu ngắn

-   https://www.php.net/manual/en/function.filter-input.php
-   https://www.php.net/manual/en/filter.filters.php
