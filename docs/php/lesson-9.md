# Buổi 9 (LT) — Pagination, Search, Error handling

## 🎯 Mục tiêu

-   Thêm phân trang, tìm kiếm, xử lý lỗi/thông báo trong ứng dụng.

## 🧠 Nội dung chính

-   LIMIT/OFFSET, tính toán tổng trang với COUNT.
-   Nhận tham số page, page_size, từ khóa q qua GET; chuẩn hóa giá trị.
-   Search với LIKE, lưu ý wildcard và escape.
-   Hiển thị pagination UI (prev/next, số trang).
-   Xử lý lỗi: try/catch, thông báo lỗi thân thiện, flash message.

## 💻 Thực hành

-   Thêm phân trang cho danh sách posts (page_size=5).
-   Thêm ô search theo title/excerpt, kết hợp pagination.
-   Tạo hàm helper build_query_string giữ lại tham số khi chuyển trang.

### Hướng dẫn thực hiện

-   Nhận `page` từ GET, chuẩn hóa: `$page = max(1, (int)($_GET['page'] ?? 1));` tính OFFSET = ($page - 1) \* $pageSize.
-   Tổng bản ghi: `SELECT COUNT(*) FROM posts WHERE title LIKE ?` với tham số `%$q%`; tính tổng trang = ceil(total / pageSize).
-   Lấy dữ liệu trang: thêm LIMIT/OFFSET vào truy vấn, bind giá trị.
-   Search: lấy `q` từ GET, trim, escape khi render bằng `htmlspecialchars`; dùng tham số LIKE để chống injection.
-   Helper build_query_string: nhận mảng params, dùng `http_build_query`, kết hợp với `?` hoặc `&` để giữ q khi chuyển trang.
-   UI: render nút Prev/Next disabled khi ở đầu/cuối; hiển thị “Trang X/Y”.

#### Mẫu code gợi ý

```php
$pdo = get_pdo();
$pageSize = 5;
$page = max(1, (int)($_GET['page'] ?? 1));
$q = trim($_GET['q'] ?? '');

$countStmt = $pdo->prepare('SELECT COUNT(*) FROM posts WHERE title LIKE ?');
$countStmt->execute(['%' . $q . '%']);
$total = (int) $countStmt->fetchColumn();
$totalPages = max(1, (int) ceil($total / $pageSize));
$page = min($page, $totalPages);
$offset = ($page - 1) * $pageSize;

$stmt = $pdo->prepare('SELECT id, title FROM posts WHERE title LIKE ? ORDER BY created_at DESC LIMIT ? OFFSET ?');
$stmt->bindValue(1, '%' . $q . '%', PDO::PARAM_STR);
$stmt->bindValue(2, $pageSize, PDO::PARAM_INT);
$stmt->bindValue(3, $offset, PDO::PARAM_INT);
$stmt->execute();
$posts = $stmt->fetchAll();

function build_query(array $params) {
	return '?' . http_build_query($params);
}
```

## 📚 Tài liệu ngắn

-   https://dev.mysql.com/doc/refman/8.0/en/select.html
-   https://www.php.net/manual/en/pdostatement.fetch.php
