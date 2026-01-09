# PHP cơ bản đến xây dựng ứng dụng web

Chào mừng bạn đến với khóa **PHP cơ bản** theo mô hình **Project-Based Learning (PBL)**! Khóa học tập trung 80% thực hành, giúp bạn nắm vững PHP, thao tác CSDL MySQL, và xây dựng mini blog đầy đủ CRUD + đăng nhập cơ bản.

## 🎯 Giới thiệu khóa học

-   **Tổng thời lượng**: 12 buổi (mỗi buổi 120 phút), 6 tuần
-   **Cấu trúc**: 6 cặp buổi (Lý thuyết - Thực hành)
-   **Công nghệ**: PHP 8+, PDO, MySQL, Apache (XAMPP/MAMP/Laragon), TailwindCSS (cơ bản cho UI), Postman/MySQL Client
-   **Đối tượng**: Người mới với PHP, đã biết HTML/CSS, khái niệm HTTP cơ bản
-   **Phương pháp**: 20% lý thuyết, 80% thực hành

### Điều kiện tiên quyết

✅ HTML/CSS cơ bản
✅ Hiểu request/response, form HTML, method GET/POST
✅ Biết cài đặt VS Code và mở trang web local

### Kết quả học tập

Sau khóa học, bạn sẽ có thể:

-   ✅ Hiểu cú pháp PHP cơ bản: biến, kiểu, điều kiện, vòng lặp, hàm
-   ✅ Xử lý form, validate input, làm việc với file upload, session/cookie
-   ✅ Kết nối MySQL qua PDO, viết truy vấn CRUD an toàn với prepared statement
-   ✅ Xây dựng trang đăng nhập/đăng ký cơ bản với hash mật khẩu và CSRF token
-   ✅ Tổ chức dự án PHP nhiều file, tách layout, routing đơn giản
-   ✅ Hoàn thiện mini Blog/News với CRUD bài viết, danh mục, tìm kiếm, phân trang

## 📚 Bảng nội dung 12 buổi

| Buổi   | Loại   | Chủ đề chính                       | Mục tiêu                                           | Nội dung chính                                                                         | Thực hành & hướng dẫn                                                 |
| ------ | ------ | ---------------------------------- | -------------------------------------------------- | -------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| **1**  | **LT** | Môi trường, PHP 101                | Cài stack, chạy file PHP, hiểu echo/biến/kiểu      | XAMPP/MAMP, cấu trúc thư mục, echo, biến, kiểu, hằng, comment                          | Lab: Hello PHP + var_dump + bảng cửu chương (kèm hướng dẫn trong bài) |
| **2**  | **TH** | Toán tử, điều kiện, vòng lặp, hàm  | Viết script xử lý logic đơn giản                   | Toán tử, if/elseif/else, switch, for/while/foreach, hàm, return                        | Lab: BMI, định dạng chuỗi, hàm sumRange/isPrime (có hướng dẫn)        |
| **3**  | **LT** | Mảng, chuỗi, hàm xử lý             | Làm việc với mảng/chuỗi để tiền xử lý dữ liệu      | Array assoc/indexed, array methods, implode/explode, substr, strlen, filter map        | Lab: Tính điểm, tách tag, slugify (có hướng dẫn)                      |
| **4**  | **TH** | Form GET/POST, validate            | Nhận dữ liệu form, sanitize và báo lỗi             | Form HTML, $_GET/$\_POST, filter_input, required/length, hiển thị lỗi, sticky form     | Lab: Form đăng ký + validate, trả lỗi thân thiện (có hướng dẫn)       |
| **5**  | **LT** | Session, Cookie, Upload file       | Lưu trạng thái user và upload an toàn              | session_start, $\_SESSION, cookie, setcookie, move_uploaded_file, validate MIME/size   | Lab: Profile + upload avatar, lưu session (có hướng dẫn)              |
| **6**  | **TH** | Tổ chức mã, include/require        | Tách file, dùng config chung                       | Cấu trúc src/public, include/require, hằng BASE_PATH, config DB, helper function       | Lab: Refactor hồ sơ vào nhiều file + router tối giản (có hướng dẫn)   |
| **7**  | **LT** | MySQL cơ bản, ERD nhỏ              | Hiểu bảng, khóa chính, câu lệnh CRUD               | DDL/DML, create table, insert/select/update/delete, kết nối mysql cli                  | Lab: Tạo DB/blog schema, seed mẫu, 3 truy vấn CRUD (có hướng dẫn)     |
| **8**  | **TH** | PDO + Prepared Statements          | Kết nối DB, CRUD an toàn                           | PDO connect, DSN, try/catch, prepared statement, fetch, transaction ngắn               | Lab: CRUD bảng posts với prepared statements (có hướng dẫn)           |
| **9**  | **LT** | Pagination, search, error handling | Hiển thị danh sách lớn và xử lý lỗi                | LIMIT/OFFSET, COUNT, LIKE search, pagination params, exception handling, flash message | Lab: Phân trang + search danh sách bài viết (có hướng dẫn)            |
| **10** | **TH** | Auth cơ bản, CSRF                  | Đăng ký/đăng nhập với hash + token                 | password_hash/verify, session guard, logout, CSRF token hidden, rate-limit thô         | Lab: Module auth cơ bản + CSRF cho form nhạy cảm (có hướng dẫn)       |
| **11** | **LT** | Layout, routing đơn giản           | Tách header/footer, điều hướng qua index.php?page= | Template partials, sanitize page param, 404 fallback, organize controllers             | Lab: Router whitelist + layout chung (có hướng dẫn)                   |
| **12** | **TH** | Tổng hợp & Demo mini Blog          | Hoàn thiện CRUD + auth + UI cơ bản                 | Gộp module bài viết + auth + upload thumbnail, kiểm thử luồng, checklist bảo mật       | Lab: Tổng duyệt & demo mini blog (có hướng dẫn)                       |

## 🛣️ Lộ trình và tài liệu bài học

-   Giai đoạn 1: Cú pháp & xử lý dữ liệu (Buổi 1-3)
-   Giai đoạn 2: Form, session, upload (Buổi 4-6)
-   Giai đoạn 3: Database & PDO (Buổi 7-9)
-   Giai đoạn 4: Auth, routing, hoàn thiện (Buổi 10-12)

Danh sách bài học:

-   [Buổi 1](./lesson-1.md) · [Buổi 2](./lesson-2.md) · [Buổi 3](./lesson-3.md) · [Buổi 4](./lesson-4.md)
-   [Buổi 5](./lesson-5.md) · [Buổi 6](./lesson-6.md) · [Buổi 7](./lesson-7.md) · [Buổi 8](./lesson-8.md)
-   [Buổi 9](./lesson-9.md) · [Buổi 10](./lesson-10.md) · [Buổi 11](./lesson-11.md) · [Buổi 12](./lesson-12.md)

## 🎓 Đánh giá

| Thành phần      | Tỷ trọng | Ghi chú                                |
| --------------- | -------- | -------------------------------------- |
| Lab tại lớp     | 40%      | Đánh giá theo mức hoàn thành hướng dẫn |
| Dự án cuối khóa | 60%      | Mini Blog/News nhóm 2-3 người          |

**Tiêu chí đạt**: Hoàn thành ≥80% lab, điểm tổng ≥5.0/10, project đạt các checklist bắt buộc. (Không tổ chức quiz.)

## 📂 Dự án cuối khóa

Xem yêu cầu chi tiết tại [final-project.md](./final-project.md).

## 📖 Tài nguyên

-   PHP Manual: https://www.php.net/manual/en/
-   PDO: https://www.php.net/manual/en/book.pdo.php
-   MySQL Docs: https://dev.mysql.com/doc/
-   OWASP Cheat Sheets: https://cheatsheetseries.owasp.org/
-   VS Code + PHP Intelephense, PHP CS Fixer

---

**Chúc bạn học tập hiệu quả và xây dựng sản phẩm hoàn chỉnh! 🚀**
