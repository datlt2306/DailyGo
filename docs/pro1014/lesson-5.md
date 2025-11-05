# Buổi 5 – Thiết kế database nâng cao & chuẩn hóa

> **Bài trước:** [Buổi 4: Thiết kế dữ liệu (ERD)](./lesson-4.md)  
> **Bài tiếp theo:** [Buổi 6: Giới thiệu Git & teamwork](./lesson-6.md)

Xin chào các em! 🎉

Hôm nay chúng ta đi sâu vào phần “xương sống” của hệ thống: thiết kế database ở mức nâng cao. Nội dung tập trung vào chuẩn hóa dữ liệu, ràng buộc, chỉ mục, đặt tên, kiểu dữ liệu, và chuyển ERD → DDL (SQL) hoàn chỉnh.

## 🎯 Mục tiêu học tập

Sau buổi này, các em sẽ:

-   ✅ Hiểu và áp dụng chuẩn hóa 1NF → 3NF (và khi nào cần phi chuẩn hóa)
-   ✅ Thiết kế khóa chính, khóa ngoại, ràng buộc duy nhất và kiểm tra (PK, FK, UNIQUE, CHECK)
-   ✅ Tối ưu truy vấn với chỉ mục (index đơn, kép, cover index) và chiến lược đặt index
-   ✅ Chọn kiểu dữ liệu phù hợp (INT vs BIGINT, DECIMAL vs FLOAT, TEXT vs VARCHAR…)
-   ✅ Viết DDL tạo bảng, ràng buộc, chỉ mục từ ERD của nhóm
-   ✅ Lập kế hoạch migration/versioning và dữ liệu mẫu (seed)

---

## 📋 Dàn ý nội dung

### 1) Chuẩn hóa dữ liệu (Normalization)

-   1NF: Mỗi cột là giá trị nguyên tử; không danh sách/JSON trừ khi có lý do rõ ràng.
-   2NF: Không phụ thuộc một phần trên khóa tổng hợp (áp dụng khi PK là nhiều cột).
-   3NF: Không phụ thuộc bắc cầu giữa các thuộc tính không khóa.
-   Khi nào phi chuẩn hóa:
    -   Tối ưu đọc nhiều – ít ghi; tạo cột tổng hợp/denormalized để giảm join nặng.
    -   Lưu cache nhanh (ví dụ: `total_price` trong `bookings` tính từ participants và tour price).

### 2) Quy ước đặt tên (Naming Conventions)

-   Tên bảng số nhiều dạng snake_case: `users`, `tour_categories`, `booking_history`.
-   Khóa chính: `id` kiểu INT/BIGINT tự tăng (hoặc UUID nếu cần phân tán).
-   Khóa ngoại dạng `<entity>_id`: `customer_id`, `tour_id`.
-   Cột thời gian: `created_at`, `updated_at`, `deleted_at` (soft-delete nếu dùng).
-   Enum dùng `CHECK`/`ENUM` (tùy RDBMS). Với MySQL: `ENUM`; với Postgres: `CHECK` hoặc type enum.

### 3) Kiểu dữ liệu & ràng buộc

-   Số:
    -   `INT`/`BIGINT` cho khóa; chọn dựa trên quy mô (BIGINT nếu >2 tỷ bản ghi).
    -   `DECIMAL(p,s)` cho tiền tệ (tránh `FLOAT/DOUBLE` gây sai số).
-   Chuỗi:
    -   `VARCHAR(n)` cho text có giới hạn; `TEXT` cho nội dung dài.
    -   Email/phone: đặt `UNIQUE` nếu cần duy nhất.
-   Thời gian: `DATE`, `TIME`, `DATETIME`/`TIMESTAMP` tùy DBMS.
-   JSON: chỉ dùng khi dữ liệu linh hoạt, ít truy vấn theo trường con.
-   Ràng buộc:
    -   `PRIMARY KEY`, `FOREIGN KEY … ON DELETE/UPDATE` (CASCADE/RESTRICT/SET NULL).
    -   `UNIQUE` đảm bảo tính duy nhất (email, mã tour…).
    -   `CHECK` đảm bảo giá trị hợp lệ (status, số lượng >= 0…).

### 4) Chỉ mục (Indexing) – nguyên tắc thực dụng

-   Tạo index cho cột thường dùng ở WHERE/JOIN/ORDER/GROUP.
-   Composite index: thứ tự cột theo mức độ lọc (selectivity) từ cao → thấp.
-   Cover index: thêm cột SELECT để tránh lookup (tùy DBMS hỗ trợ).
-   Không lạm dụng: mỗi index tốn bộ nhớ và làm chậm ghi (INSERT/UPDATE/DELETE).
-   Ví dụ phổ biến:
    -   `bookings(customer_id)`, `bookings(tour_id)`, `bookings(status, departure_date)`.
    -   `tour_departures(tour_id, departure_date)`.

### 5) Từ ERD → DDL (SQL) cho module Booking

Ví dụ chuyển một phần ERD ở Buổi 4 sang DDL (MySQL-flavored SQL):

```
CREATE TABLE customers (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  full_name VARCHAR(120) NOT NULL,
  email VARCHAR(120) NULL,
  phone VARCHAR(32) NULL,
  address TEXT NULL,
  id_card VARCHAR(50) NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE KEY uq_customers_email (email),
  UNIQUE KEY uq_customers_phone (phone)
) ENGINE=InnoDB;

CREATE TABLE tours (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  category_id BIGINT UNSIGNED NOT NULL,
  name VARCHAR(200) NOT NULL,
  description TEXT NULL,
  duration INT NOT NULL,
  images JSON NULL,
  price DECIMAL(12,2) NOT NULL,
  policy TEXT NULL,
  qr_code VARCHAR(255) NULL,
  booking_url VARCHAR(255) NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  KEY idx_tours_category (category_id)
) ENGINE=InnoDB;

CREATE TABLE bookings (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  customer_id BIGINT UNSIGNED NOT NULL,
  tour_id BIGINT UNSIGNED NOT NULL,
  departure_date DATE NOT NULL,
  num_adults INT NOT NULL DEFAULT 1,
  num_children INT NOT NULL DEFAULT 0,
  num_infants INT NOT NULL DEFAULT 0,
  total_price DECIMAL(12,2) NOT NULL,
  status ENUM('pending','deposit','completed','cancelled') NOT NULL DEFAULT 'pending',
  special_notes TEXT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  KEY idx_bookings_customer (customer_id),
  KEY idx_bookings_tour (tour_id),
  KEY idx_bookings_status_date (status, departure_date),
  CONSTRAINT fk_bookings_customer FOREIGN KEY (customer_id) REFERENCES customers(id)
    ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT fk_bookings_tour FOREIGN KEY (tour_id) REFERENCES tours(id)
    ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE TABLE booking_history (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  booking_id BIGINT UNSIGNED NOT NULL,
  old_status ENUM('pending','deposit','completed','cancelled') NOT NULL,
  new_status ENUM('pending','deposit','completed','cancelled') NOT NULL,
  changed_by BIGINT UNSIGNED NULL,
  change_reason TEXT NULL,
  changed_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  KEY idx_bkh_booking (booking_id),
  CONSTRAINT fk_bkh_booking FOREIGN KEY (booking_id) REFERENCES bookings(id)
    ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE TABLE booking_participants (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  booking_id BIGINT UNSIGNED NOT NULL,
  full_name VARCHAR(120) NOT NULL,
  gender ENUM('male','female','other') NULL,
  birth_year INT NULL,
  id_card VARCHAR(50) NULL,
  special_notes TEXT NULL,
  KEY idx_bkp_booking (booking_id),
  CONSTRAINT fk_bkp_booking FOREIGN KEY (booking_id) REFERENCES bookings(id)
    ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;
```

Ghi chú thực hành:

-   Dùng `ENUM` cho `status` để kiểm soát giá trị hợp lệ (có thể thay bằng `CHECK`).
-   `ON DELETE CASCADE` ở bảng lịch sử/participants giúp dọn dữ liệu phụ khi xóa booking.
-   Chỉ mục tổng hợp `(status, departure_date)` phục vụ lọc nhanh danh sách theo trạng thái và ngày.

### 6) Chính sách xóa dữ liệu

-   Xóa cứng (hard delete): dùng `ON DELETE CASCADE` cho bảng phụ.
-   Xóa mềm (soft delete): thêm `deleted_at DATETIME NULL` + index phụ trợ; mọi truy vấn thêm điều kiện `deleted_at IS NULL`.
-   Quy tắc: booking thường không xóa mềm nếu ràng buộc nghiệp vụ cần lịch sử; cân nhắc chuyển sang trường `status`.

### 7) Migration & seed dữ liệu

-   Dùng công cụ migration (Prisma Migrate, Sequelize CLI, Knex, Flyway…).
-   Quy ước phiên bản: yyyyMMddHHmmss_ten_migration.sql/ts.
-   Mỗi migration: tạo/sửa bảng, thêm chỉ mục, dữ liệu khởi tạo (seed) cơ bản: danh mục tour, status.
-   Môi trường: dev/staging/prod; luôn kiểm thử migration ở dev trước.

### 8) Checklist tự review schema

-   [ ] Đặt tên bảng/cột nhất quán, có nghĩa.
-   [ ] PK/FK đầy đủ, ON DELETE/UPDATE đúng logic nghiệp vụ.
-   [ ] UNIQUE/INDEX ở các cột truy vấn nhiều.
-   [ ] Kiểu dữ liệu phù hợp (tiền tệ dùng DECIMAL, ngày dùng DATE/TIMESTAMP…).
-   [ ] Tránh lặp dữ liệu không cần (tuân thủ 3NF), nhưng cân nhắc phi chuẩn hóa hợp lý.
-   [ ] Có migration và seed tối thiểu.

---

## 🧠 Bài tập thực hành (nhóm)

1. Từ ERD module của nhóm (đã nộp ở Buổi 4), hãy:

-   Viết DDL đầy đủ tạo bảng, ràng buộc, chỉ mục.
-   Chọn kiểu dữ liệu và giải thích ngắn gọn các quyết định.
-   Đề xuất tối thiểu 3 index phục vụ các truy vấn trọng yếu.
-   Xác định chính sách xóa (hard/soft) và lý do.

2. Tạo file migration đầu tiên cho module:

-   Tên gợi ý: `YYYYMMDDHHMMSS_init_<module>.sql`.
-   Bao gồm DDL ở phần (1).

3. Seed dữ liệu mẫu tối thiểu:

-   5 `tours`, 2 `tour_categories`, 3 `customers`, 3 `bookings` (nhiều trạng thái), 5 `booking_participants`.

4. Bonus (khuyến khích):

-   Viết 3 truy vấn SELECT phục vụ màn hình danh sách/chi tiết theo đặc tả.

---

## 💬 Gợi ý giảng viên

-   Nhấn mạnh trade-off giữa chuẩn hóa và hiệu năng thực tế.
-   Cho ví dụ đo đạc index với EXPLAIN (MySQL/Postgres) để minh họa.
-   Khuyến khích sinh viên viết migration thật, không chỉ dừng ở ERD.

---

## 📦 Kết quả mong đợi sau buổi học

-   ✅ Bộ DDL hoàn chỉnh, có PK/FK/UNIQUE/CHECK và index hợp lý.
-   ✅ Chiến lược migration/seed rõ ràng.
-   ✅ Biết khi nào nên (và không nên) phi chuẩn hóa.
-   ✅ Sẵn sàng kết nối sang phần code ở các buổi tiếp theo.

---

Chúc các em học tốt! 🚀
