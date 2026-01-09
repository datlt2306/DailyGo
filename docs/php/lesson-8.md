# Buổi 8 (TH) — PDO & Prepared Statements (CRUD)

## 🎯 Mục tiêu

-   Kết nối MySQL bằng PDO, thực hiện CRUD an toàn với prepared statements.

## 🧠 Nội dung chính

-   DSN, PDO::\_\_construct, try/catch, thiết lập ERRMODE_EXCEPTION.
-   Prepared statement: prepare, bindParam/bindValue, execute, fetch/fetchAll.
-   Transaction ngắn: beginTransaction, commit, rollBack (giới thiệu).
-   Xử lý lỗi và thông báo người dùng.

## 💻 Thực hành

-   Viết `src/db.php` trả về kết nối PDO dùng DSN + charset UTF8.
-   Tạo module posts CRUD:
    -   list: select title, category, created_at.
    -   create: title, content, category_id, status draft/published.
    -   update: chỉnh title/content/status.
    -   delete: xóa mềm (status = draft) hoặc xóa hẳn (tùy chọn).
-   Dùng prepared statement cho mọi truy vấn có tham số.

### Hướng dẫn thực hiện

-   `db.php`: tạo hàm `get_pdo()` dùng DSN `mysql:host=localhost;dbname=php_blog;charset=utf8mb4`, cấu hình `PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION`.
-   Chuẩn bị file seed từ buổi 7 để có dữ liệu categories.
-   List: `SELECT p.id, p.title, c.name AS category, p.created_at FROM posts p LEFT JOIN categories c ON c.id = p.category_id ORDER BY p.created_at DESC`.
-   Create: nhận POST, validate title/content, dùng prepared `INSERT INTO posts (title, content, category_id, status) VALUES (?, ?, ?, ?)`.
-   Update: load post theo id, bind giá trị mới và execute; kiểm tra rowCount để xác nhận thay đổi.
-   Delete/xóa mềm: UPDATE status='draft' hoặc DELETE theo id; luôn bind tham số thay vì nối chuỗi.
-   Bọc lệnh nhạy cảm trong try/catch, hiển thị flash message thành công/thất bại.

#### Mẫu code gợi ý

```php
<?php
// src/db.php
function get_pdo() {
    static $pdo;
    if ($pdo) return $pdo;
    $dsn = 'mysql:host=localhost;dbname=php_blog;charset=utf8mb4';
    $pdo = new PDO($dsn, 'root', '', [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ]);
    return $pdo;
}

// create post
function create_post($title, $content, $categoryId, $status = 'draft') {
    $pdo = get_pdo();
    $stmt = $pdo->prepare('INSERT INTO posts (title, content, category_id, status) VALUES (?, ?, ?, ?)');
    return $stmt->execute([$title, $content, $categoryId, $status]);
}

// list posts with category
function list_posts($limit = 20) {
    $pdo = get_pdo();
    $stmt = $pdo->prepare('SELECT p.id, p.title, c.name AS category, p.created_at FROM posts p LEFT JOIN categories c ON c.id = p.category_id ORDER BY p.created_at DESC LIMIT ?');
    $stmt->bindValue(1, (int) $limit, PDO::PARAM_INT);
    $stmt->execute();
    return $stmt->fetchAll();
}
```

## 📚 Tài liệu ngắn

-   https://www.php.net/manual/en/book.pdo.php
-   https://www.php.net/manual/en/pdo.prepared-statements.php
