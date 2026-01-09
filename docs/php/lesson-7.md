# Buổi 7 (LT) — MySQL cơ bản & ERD nhỏ

## 🎯 Mục tiêu

-   Hiểu bảng, khóa chính, kiểu dữ liệu, viết được lệnh CRUD cơ bản trên MySQL.

## 🧠 Nội dung chính

-   Kiến trúc: MySQL Server, database, table, user, quyền.
-   Kiểu dữ liệu: INT, VARCHAR, TEXT, DATETIME, AUTO_INCREMENT.
-   Khóa chính (PRIMARY KEY), khóa ngoại (FOREIGN KEY) giới thiệu nhẹ.
-   Lệnh DDL/DML: CREATE DATABASE/TABLE, INSERT, SELECT, UPDATE, DELETE.
-   ERD nhỏ cho blog: users, posts, categories.
-   Kết nối MySQL CLI hoặc GUI (MySQL Workbench/Sequel Ace/HeidiSQL).

## 💻 Thực hành

-   Tạo database `php_blog`, bảng `users`, `categories`, `posts` (khung chưa FK cứng nếu khó).
-   Thêm 3 bản ghi mẫu vào categories và posts.
-   Viết 3 truy vấn: lấy tất cả posts, lọc theo category, cập nhật title một post.

### Hướng dẫn thực hiện

-   Mở MySQL CLI hoặc GUI, chạy `CREATE DATABASE php_blog CHARACTER SET utf8mb4;` và `USE php_blog;`.
-   Tạo bảng tối thiểu:
    -   users(id INT AI PK, email VARCHAR(191) UNIQUE, password_hash VARCHAR(255), created_at DATETIME DEFAULT CURRENT_TIMESTAMP)
    -   categories(id INT AI PK, name VARCHAR(100), slug VARCHAR(120) UNIQUE)
    -   posts(id INT AI PK, title VARCHAR(191), content TEXT, category_id INT, created_at DATETIME DEFAULT CURRENT_TIMESTAMP)
-   Thêm dữ liệu mẫu bằng INSERT; lưu ý cung cấp category_id hợp lệ cho posts.
-   Truy vấn: `SELECT * FROM posts;`, `SELECT * FROM posts WHERE category_id = ?;`, `UPDATE posts SET title = '...new' WHERE id = ?;`.
-   Kiểm tra kết quả bằng `SELECT` lại để chắc chắn dữ liệu thay đổi.

#### Mẫu lệnh SQL gợi ý

```sql
CREATE DATABASE php_blog CHARACTER SET utf8mb4;
USE php_blog;

CREATE TABLE users (
	id INT AUTO_INCREMENT PRIMARY KEY,
	email VARCHAR(191) UNIQUE NOT NULL,
	password_hash VARCHAR(255) NOT NULL,
	created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE categories (
	id INT AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(100) NOT NULL,
	slug VARCHAR(120) UNIQUE NOT NULL
);

CREATE TABLE posts (
	id INT AUTO_INCREMENT PRIMARY KEY,
	title VARCHAR(191) NOT NULL,
	content TEXT NOT NULL,
	category_id INT,
	created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO categories (name, slug) VALUES ('PHP', 'php'), ('MySQL', 'mysql'), ('Web', 'web');
INSERT INTO posts (title, content, category_id) VALUES
('Hello PHP', 'Noi dung 1', 1),
('Query MySQL', 'Noi dung 2', 2),
('Build Web', 'Noi dung 3', 3);
```

## 📚 Tài liệu ngắn

-   https://dev.mysql.com/doc/refman/8.0/en/
-   https://sqlbolt.com/ (luyện SQL)
