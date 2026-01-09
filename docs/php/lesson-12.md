# Buổi 12 (TH) — Tổng hợp & Demo Mini Blog

## 🎯 Mục tiêu

-   Hoàn thiện mini Blog với CRUD + auth + upload, kiểm thử và demo.

## 🧠 Nội dung chính

-   Gộp module posts + auth + category + upload thumbnail.
-   Checklist bảo mật: prepared statements, CSRF, escape output, validate input.
-   Pagination + search + filter category.
-   Kiểm thử luồng: đăng nhập, tạo bài, sửa, xóa, logout; user khác không sửa bài người khác (nếu có role).
-   Chuẩn bị demo: dữ liệu mẫu seed, tài khoản demo, README.

## 💻 Thực hành

-   Kiểm tra toàn bộ form có CSRF và validate.
-   Làm sạch giao diện: flash message, thông báo lỗi/ok.
-   Viết file seed.sql (tùy chọn) hoặc script PHP để tạo dữ liệu mẫu.
-   Tổng duyệt demo: quay màn hình hoặc trình bày trực tiếp.

### Hướng dẫn thực hiện
-   Dò lại từng form (login, register, create/update post, delete) để chắc chắn có trường `_csrf` và kiểm tra token trên server.
-   Kiểm thử lỗi: nhập thiếu tiêu đề, nhập file quá 2MB, thử page vượt giới hạn; hiển thị flash message rõ ràng.
-   seed.sql: tạo script INSERT user demo, categories và vài bài viết; hoặc viết `seed.php` dùng PDO để chèn dữ liệu.
-   Demo flow: đăng nhập bằng tài khoản demo, tạo bài mới, sửa bài, xóa (hoặc đổi trạng thái draft), thử search/pagination; quay màn hình hoặc chuẩn bị slide ngắn mô tả kiến trúc.

#### Mẫu seed đơn giản (trích)
```sql
INSERT INTO users (email, password_hash) VALUES
('demo@example.com', '$2y$10$hashdemo...'); -- dùng password_hash trước khi chèn

INSERT INTO categories (name, slug) VALUES ('PHP', 'php'), ('Web', 'web');

INSERT INTO posts (title, content, category_id, status) VALUES
('Post demo', 'Noi dung', 1, 'published'),
('Post 2', 'Noi dung 2', 2, 'draft');
```

## 📚 Tài liệu ngắn

-   https://cheatsheetseries.owasp.org/
-   https://www.php.net/manual/en/function.htmlspecialchars.php
