# Buổi 11 (LT) — Layout, routing đơn giản, tổ chức dự án

## 🎯 Mục tiêu

-   Tách layout chung, điều hướng qua tham số page, cấu trúc thư mục gọn gàng.

## 🧠 Nội dung chính

-   Partial layout: header/footer, flash message, main content.
-   Router tối giản: index.php đọc `$_GET['page']`, map tới controller.
-   Whitelist page để tránh RFI/LFI, fallback 404.
-   Tổ chức controller/service/view, đặt tên rõ ràng.
-   Asset và đường dẫn tương đối/tuyệt đối, BASE_URL.

## 💻 Thực hành

-   Tạo router trong public/index.php: whitelist [home, post, admin/posts, admin/post-create, login, register].
-   Tách view partials vào src/views/partials.
-   Đảm bảo auth guard hoạt động cho trang admin.

### Hướng dẫn thực hiện

-   Trong index.php: tạo mảng `$routes = ['home' => 'controllers/home.php', ...];` đọc `page` từ GET, dùng `array_key_exists` để chọn file; nếu không có, set 404 và include trang lỗi.
-   Đảm bảo mọi include dùng đường dẫn tuyệt đối dựa trên `BASE_PATH` để tránh traversal.
-   Partial: header/footer đặt chung, render flash message; content section include theo router.
-   Với trang admin, gọi `require_login()` trước khi include controller để bảo vệ.
-   Kiểm thử: nhập page không hợp lệ, thấy 404; thử truy cập admin khi chưa login bị redirect.

#### Mẫu code gợi ý (router whitelist)

```php
<?php
define('BASE_PATH', __DIR__ . '/..');
require BASE_PATH . '/src/helpers.php';

$routes = [
	'home' => BASE_PATH . '/src/controllers/home.php',
	'login' => BASE_PATH . '/src/controllers/login.php',
	'admin/posts' => BASE_PATH . '/src/controllers/admin/posts.php',
];

$page = $_GET['page'] ?? 'home';

if (!array_key_exists($page, $routes)) {
	http_response_code(404);
	include BASE_PATH . '/src/views/errors/404.php';
	exit;
}

if (strpos($page, 'admin/') === 0) {
	require_login();
}

include $routes[$page];
```

## 📚 Tài liệu ngắn

-   https://www.php.net/manual/en/function.include.php
-   https://www.php.net/manual/en/function.basename.php
