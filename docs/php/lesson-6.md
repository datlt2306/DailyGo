# Buổi 6 (TH) — Tổ chức mã, include/require, config chung

## 🎯 Mục tiêu

-   Tách code nhiều file, dùng include/require, cấu hình chung cho dự án nhỏ.

## 🧠 Nội dung chính

-   Thư mục public/ (entry), src/ (logic), uploads/.
-   include vs require, include_once vs require_once.
-   config chung: hằng BASE_PATH, DB settings (chưa kết nối), đường dẫn uploads.
-   Helper: hàm render view đơn giản, hàm flash message bằng session.

## 💻 Thực hành

-   Refactor bài hồ sơ (buổi 5) thành cấu trúc:
    -   public/index.php (router tối giản chọn page=profile)
    -   src/views/partials/header.php, footer.php
    -   src/views/profile-form.php, profile-card.php
    -   src/helpers.php chứa hàm render, flash
-   Kiểm tra hiển thị và upload vẫn hoạt động.

### Hướng dẫn thực hiện
-   Tạo hằng `BASE_PATH = __DIR__ . '/../';` trong `public/index.php` để include file dễ.
-   Viết hàm `render($view, $data = [])` trong `src/helpers.php` để extract data rồi include view.
-   Tách header/footer vào partials, include trong layout chính; form và card tách riêng file.
-   Router đơn giản: đọc `$_GET['page'] ?? 'profile'`, dùng switch/whitelist để gọi view; nếu không khớp trả 404.
-   Kiểm thử: upload avatar, refresh trang, dữ liệu vẫn lấy từ session và hiển thị đúng.

#### Mẫu code gợi ý (router tối giản)
```php
<?php
// public/index.php
define('BASE_PATH', __DIR__ . '/..');
require BASE_PATH . '/src/helpers.php';

$page = $_GET['page'] ?? 'profile';
$routes = [
    'profile' => BASE_PATH . '/src/pages/profile.php',
];

if (!array_key_exists($page, $routes)) {
    http_response_code(404);
    echo 'Page not found';
    exit;
}

render($routes[$page]);
```

```php
<?php
// src/helpers.php
function render($view, $data = []) {
    extract($data);
    include BASE_PATH . '/src/views/partials/header.php';
    include $view;
    include BASE_PATH . '/src/views/partials/footer.php';
}
```

## 📚 Tài liệu ngắn

-   https://www.php.net/manual/en/function.include.php
-   https://www.php.net/manual/en/function.require.php
