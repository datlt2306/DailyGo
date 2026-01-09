# Buổi 10 (TH) — Auth cơ bản, CSRF, bảo vệ phiên

## 🎯 Mục tiêu

-   Xây dựng đăng ký/đăng nhập, lưu session, bảo vệ form bằng CSRF token.

## 🧠 Nội dung chính

-   password_hash, password_verify.
-   Form register/login, validate email/password.
-   Lưu user vào bảng users (email unique), trường password_hash.
-   Session guard: kiểm tra login trước khi vào trang quản trị.
-   CSRF token: sinh token, lưu session, nhúng hidden input, kiểm tra khi submit.

## 💻 Thực hành

-   Tạo module auth: register.php, login.php, logout.php.
-   Thêm middleware đơn giản: nếu chưa login, redirect về login khi vào admin.
-   Áp CSRF token cho form tạo/sửa/xóa bài viết.

### Hướng dẫn thực hiện
-   Register: validate email unique (SELECT trước), hash mật khẩu bằng `password_hash(..., PASSWORD_DEFAULT)`, lưu vào users.
-   Login: lấy user theo email, `password_verify` mật khẩu; nếu đúng, `session_regenerate_id(true)` và lưu `$_SESSION['user_id']`.
-   Logout: `session_unset(); session_destroy();` rồi redirect.
-   Middleware: tạo hàm `require_login()` kiểm tra session, nếu thiếu redirect tới login kèm flash message.
-   CSRF: trong session lưu `csrf_token` (random_bytes + bin2hex), form hidden input chứa token, kiểm tra trùng trước khi xử lý; nếu sai, hủy request và báo lỗi.
-   Ghi log hoặc đếm số lần login sai (biến session) để tạm khóa hoặc delay nhẹ.

#### Mẫu code gợi ý (auth + CSRF)
```php
<?php
session_start();

function csrf_token() {
	if (empty($_SESSION['csrf_token'])) {
		$_SESSION['csrf_token'] = bin2hex(random_bytes(16));
	}
	return $_SESSION['csrf_token'];
}

function check_csrf($token) {
	return isset($_SESSION['csrf_token']) && hash_equals($_SESSION['csrf_token'], $token);
}

function register($email, $password) {
	$pdo = get_pdo();
	$stmt = $pdo->prepare('SELECT id FROM users WHERE email = ?');
	$stmt->execute([$email]);
	if ($stmt->fetch()) return false; // email exists

	$hash = password_hash($password, PASSWORD_DEFAULT);
	$stmt = $pdo->prepare('INSERT INTO users (email, password_hash) VALUES (?, ?)');
	return $stmt->execute([$email, $hash]);
}

function login($email, $password) {
	$pdo = get_pdo();
	$stmt = $pdo->prepare('SELECT id, password_hash FROM users WHERE email = ?');
	$stmt->execute([$email]);
	$user = $stmt->fetch();
	if (!$user || !password_verify($password, $user['password_hash'])) return false;
	session_regenerate_id(true);
	$_SESSION['user_id'] = $user['id'];
	return true;
}
```

## 📚 Tài liệu ngắn

-   https://www.php.net/manual/en/function.password-hash.php
-   https://owasp.org/www-community/attacks/csrf
