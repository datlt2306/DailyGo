# Dự án cuối khóa: Mini Blog/News với PHP + MySQL

## 🎯 Mục tiêu

-   Xây dựng ứng dụng web tin tức/blog đơn giản với PHP 8 + PDO + MySQL.
-   Áp dụng toàn bộ kiến thức: form, session/cookie, upload file, CRUD, auth, pagination, search, routing đơn giản, bảo mật cơ bản.
-   Làm việc nhóm (2-3 người), quản lý tiến độ, review code.

## 🧱 Yêu cầu chức năng

1. Người dùng & phiên

-   Đăng ký: email duy nhất, mật khẩu hash (password_hash), xác thực tối thiểu 8 ký tự.
-   Đăng nhập/đăng xuất: lưu session, bảo vệ trang quản trị.
-   CSRF token cho form quan trọng (login, register, create/update/delete post).

2. Bài viết

-   Thuộc tính: id, title, slug, excerpt, content (text), category_id, thumbnail (optional), author_id, created_at, updated_at, status (draft/published).
-   CRUD qua giao diện quản trị (chỉ user đăng nhập): tạo/sửa/xóa (soft delete không bắt buộc), đổi trạng thái draft/published.
-   Upload ảnh thumbnail: kiểm tra MIME (image/\*), giới hạn kích thước (<=2MB), lưu tên file an toàn (uniqid + extension), thư mục uploads/.

3. Danh mục

-   Danh mục có id, name, slug.
-   Chọn danh mục khi tạo/sửa bài viết (select box), có CRUD danh mục đơn giản (tùy chọn, khuyến khích).

4. Hiển thị công khai

-   Trang chủ: danh sách bài viết published, sắp xếp mới nhất, có thumbnail/excerpt.
-   Pagination: chọn size 5-10/bản ghi; hiển thị số trang và trang hiện tại.
-   Search theo từ khóa title/excerpt.
-   Lọc theo danh mục.
-   Trang chi tiết bài viết: hiển thị nội dung đầy đủ, created_at, danh mục, ảnh thumbnail (nếu có).

5. Bảo mật & chất lượng

-   Dùng Prepared Statements (PDO) cho mọi truy vấn có tham số.
-   Validate và sanitize đầu vào (filter_input, trim, length, email).
-   Escape output khi render HTML (htmlspecialchars) trừ phần nội dung đã được kiểm soát.
-   Kiểm soát quyền: chỉ chủ bài viết hoặc role admin (nếu triển khai) được sửa/xóa.
-   Xử lý lỗi thân thiện: flash message thành công/thất bại.

## 🗂️ Gợi ý cấu trúc thư mục

```
project-root/
  public/
    index.php        # router đơn giản: ?page=
    assets/
    uploads/
  src/
    config.php       # hằng DB, BASE_PATH
    db.php           # hàm get_pdo()
    controllers/     # post.php, auth.php, category.php
    views/           # partials/header.php, footer.php, layout
    libs/            # csrf.php, validation.php, auth.php
  vendor/ (nếu dùng composer)
```

## ✅ Tiêu chí hoàn thành (Checklist)

-   [ ] Đăng ký/đăng nhập/đăng xuất hoạt động, session được thiết lập.
-   [ ] password_hash/verify được dùng; không lưu plain password.
-   [ ] CSRF token tồn tại và được kiểm tra cho form nhạy cảm.
-   [ ] CRUD bài viết chạy, dữ liệu lưu trong MySQL, dùng prepared statement.
-   [ ] Pagination và search hoạt động trên trang danh sách.
-   [ ] Upload ảnh thumbnail có kiểm tra MIME/kích thước, tên file an toàn.
-   [ ] Validate form (title bắt buộc, tối thiểu 4 ký tự; content bắt buộc; category hợp lệ).
-   [ ] Output được escape khi render (htmlspecialchars).
-   [ ] Tách header/footer thành partials; router đơn giản qua tham số page.
-   [ ] README ngắn: cách chạy, import database, tài khoản mẫu.

## 🧪 Kiểm thử gợi ý

-   Form login: nhập sai email, sai mật khẩu, thiếu CSRF.
-   Form create post: thiếu title, content quá ngắn, upload file >2MB, MIME không hợp lệ.
-   Pagination: chuyển trang, thử page âm hoặc quá lớn.
-   Search: ký tự unicode, ký tự đặc biệt, tìm kiếm không kết quả.
-   Quyền: user A không sửa/xóa bài của user B.

## 📊 Rubric chấm điểm (50%)

-   Hoàn thiện chức năng yêu cầu: 25%
-   Bảo mật cơ bản (prepared statements, CSRF, validate, escape output): 10%
-   UI/UX và trải nghiệm (pagination rõ ràng, flash message, form dễ dùng): 5%
-   Code structure & clean code (tách file, đặt tên rõ, comment cần thiết): 5%
-   Demo & trả lời câu hỏi (hiểu luồng, giải thích quyết định kỹ thuật): 5%

## 🚀 Lộ trình thực hiện (đề xuất)

-   Tuần 1: Thiết kế DB, dựng skeleton project, auth cơ bản.
-   Tuần 2: CRUD bài viết + upload ảnh + category.
-   Tuần 3: Pagination, search, filter, polish UI, kiểm thử và viết README.

Chúc các em và đội nhóm build sản phẩm thành công! 🚀
