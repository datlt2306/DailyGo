# Buổi 5 (LT) — Session, Cookie, Upload file

## 🎯 Mục tiêu

-   Lưu trạng thái người dùng với session/cookie, upload file an toàn cơ bản.

## 🧠 Nội dung chính

-   session_start, lưu và đọc $\_SESSION, hủy session, session timeout.
-   Cookie: setcookie, thời hạn, httpOnly, secure (giới thiệu), đọc $\_COOKIE.
-   Upload file: form enctype="multipart/form-data", $\_FILES, kiểm tra error code, size, MIME.
-   move_uploaded_file và đặt tên file an toàn (uniqid + extension whitelist).

## 💻 Thực hành

-   Form cập nhật hồ sơ: name, bio, upload avatar.
-   Validate: bắt buộc name, giới hạn bio 200 ký tự, ảnh MIME image/\*, size <=2MB.
-   Lưu thông tin vào session (chưa cần DB), hiển thị profile card với avatar.

### Hướng dẫn thực hiện
-   Đặt `session_start()` đầu file để dùng `$_SESSION`.
-   Form: thêm `enctype="multipart/form-data"`; trường name (text), bio (textarea), avatar (file).
-   Validate: `trim` name, `strlen` bio <= 200; kiểm tra `$_FILES['avatar']['error'] === UPLOAD_ERR_OK`, dùng `finfo_file` kiểm MIME `image/*`, size `$_FILES['avatar']['size'] <= 2 * 1024 * 1024`.
-   Lưu file: tạo tên mới `uniqid().'_'.basename($_FILES['avatar']['name'])`, lưu vào `uploads/`; lưu đường dẫn + name/bio vào `$_SESSION['profile']`.
-   Render profile card: lấy từ session, dùng `htmlspecialchars` cho text, hiển thị `<img>` nếu có avatar.

#### Mẫu code gợi ý (upload & lưu session)
```php
<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	$name = trim($_POST['name'] ?? '');
	$bio = trim($_POST['bio'] ?? '');
	$errors = [];

	if ($name === '') $errors['name'] = 'Tên bắt buộc';
	if (strlen($bio) > 200) $errors['bio'] = 'Bio tối đa 200 ký tự';

	if (isset($_FILES['avatar']) && $_FILES['avatar']['error'] === UPLOAD_ERR_OK) {
		$tmp = $_FILES['avatar']['tmp_name'];
		$size = $_FILES['avatar']['size'];
		$mime = mime_content_type($tmp);
		if ($size > 2 * 1024 * 1024) $errors['avatar'] = 'Ảnh tối đa 2MB';
		if (strpos($mime, 'image/') !== 0) $errors['avatar'] = 'File phải là ảnh';
	}

	if (!$errors && isset($tmp)) {
		$safeName = uniqid() . '_' . basename($_FILES['avatar']['name']);
		move_uploaded_file($tmp, __DIR__ . '/../uploads/' . $safeName);
		$_SESSION['profile']['avatar'] = '/uploads/' . $safeName;
	}

	if (!$errors) {
		$_SESSION['profile']['name'] = $name;
		$_SESSION['profile']['bio'] = $bio;
	}
}
```

## 📚 Tài liệu ngắn

-   https://www.php.net/manual/en/book.session.php
-   https://www.php.net/manual/en/features.file-upload.post-method.php
