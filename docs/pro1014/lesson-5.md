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

1) Từ ERD module của nhóm (đã nộp ở Buổi 4), hãy:
-   Viết DDL đầy đủ tạo bảng, ràng buộc, chỉ mục.
-   Chọn kiểu dữ liệu và giải thích ngắn gọn các quyết định.
-   Đề xuất tối thiểu 3 index phục vụ các truy vấn trọng yếu.
-   Xác định chính sách xóa (hard/soft) và lý do.

2) Tạo file migration đầu tiên cho module:
-   Tên gợi ý: `YYYYMMDDHHMMSS_init_<module>.sql`.
-   Bao gồm DDL ở phần (1).

3) Seed dữ liệu mẫu tối thiểu:
-   5 `tours`, 2 `tour_categories`, 3 `customers`, 3 `bookings` (nhiều trạng thái), 5 `booking_participants`.

4) Bonus (khuyến khích):
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
# Buổi 5 – Quản lý dự án với ClickUp & Lập kế hoạch triển khai

> **Bài trước:** [Buổi 4: Thiết kế dữ liệu (ERD)](./lesson-4.md)  
> **Bài tiếp theo:** [Buổi 6: Giới thiệu Git & teamwork](./lesson-6.md)

Xin chào các em! 🎉

Hôm nay chúng ta sẽ học một kỹ năng cực kỳ quan trọng trong làm việc nhóm: **quản lý dự án với ClickUp** và **lập kế hoạch triển khai**. Đây là những kỹ năng mà các em sẽ dùng suốt đời khi đi làm, nên thầy mong các em chú ý nhé!

## 🎯 Mục tiêu học tập

Sau buổi học này, các em sẽ:

-   ✅ Hiểu cách sử dụng ClickUp để quản lý dự án nhóm
-   ✅ Biết cách tạo Workspace, List, và Task trong ClickUp
-   ✅ Nắm được cách tạo task chuẩn với đầy đủ thông tin
-   ✅ Biết cách phân công công việc và theo dõi tiến độ
-   ✅ Lập được kế hoạch triển khai module chi tiết với timeline rõ ràng
-   ✅ Ước lượng được thời gian và phân công công việc hợp lý

---

## 📋 Nội dung chính

### 1. ClickUp là gì? Tại sao lại cần ClickUp? (10 phút)

Chắc các em đã từng gặp tình huống này: "Ồ, mình quên mất việc này rồi!" hoặc "Ai làm task này nhỉ?" 😅

**ClickUp** là công cụ quản lý dự án giúp các em:

-   ✅ **Tổ chức công việc**: Biết ai làm gì, khi nào xong
-   ✅ **Tránh bỏ sót**: Có danh sách đầy đủ các công việc cần làm
-   ✅ **Theo dõi tiến độ**: Biết dự án đang ở đâu
-   ✅ **Giao tiếp hiệu quả**: Trao đổi, comment trực tiếp trên task
-   ✅ **Làm việc chuyên nghiệp**: Giống như môi trường doanh nghiệp thực tế

**ClickUp miễn phí** cho nhóm nhỏ, đủ dùng cho dự án môn học của các em. Các em vào [clickup.com](https://clickup.com) đăng ký tài khoản miễn phí nhé!

### 2. Cấu trúc ClickUp: Workspace → List → Task (10 phút)

ClickUp có cấu trúc rất đơn giản:

```
Workspace (Không gian làm việc)
  └── List (Danh sách/Dự án)
        └── Task (Công việc cụ thể)
            └── Subtask (Công việc con)
```

**Giải thích:**

-   **Workspace**: Cấp cao nhất, chứa tất cả dự án. Ví dụ: Workspace cho lớp học của các em
-   **List**: Một dự án cụ thể hoặc nhóm các task liên quan. Ví dụ: "Module Booking", "Module Tour"
-   **Task**: Công việc cụ thể cần làm. Ví dụ: "FE - Booking - Tạo form đặt tour"
-   **Subtask**: Các bước nhỏ để hoàn thành task. Ví dụ: "Thiết kế UI form", "Validate dữ liệu"

**Ví dụ cấu trúc cho dự án Tour du lịch:**

```
Workspace: "Hệ thống Quản lý Tour Du lịch"
  ├── List: "Module Booking"
  │    ├── Task: "FE - Booking - Tạo form đặt tour"
  │    ├── Task: "BE - Booking - API tạo booking mới"
  │    ├── Task: "DB - Booking - Thiết kế bảng bookings"
  │    └── Task: "TEST - Booking - Kiểm thử đặt tour"
  │
  ├── List: "Module Tour"
  │    ├── Task: "FE - Tour - Giao diện danh sách tour"
  │    └── Task: "BE - Tour - API quản lý tour"
  │
  └── List: "Tính năng Mở rộng"
       ├── Task: "FE - Booking - Xuất báo giá PDF"
       └── Task: "FE - Tour - Gắn mã QR đặt tour"
```

### 3. Rules đặt tên Task chuẩn (20 phút)

#### **3.1. Tại sao phải đặt tên task chuẩn?**

Các em thử tưởng tượng: nếu task có tên là "Đăng ký" hoặc "Booking", các em có biết chính xác cần làm gì không? 😵

Đặt tên task rõ ràng, thống nhất giúp:

-   ✅ **Quản lý công việc dễ hơn**: Dễ tìm kiếm, lọc task theo loại công việc hoặc module
-   ✅ **Thầy theo dõi tiến độ nhanh chóng**: Dễ dàng kiểm tra và chấm điểm
-   ✅ **Nhóm làm việc chuyên nghiệp**: Như môi trường doanh nghiệp thực tế

#### **3.2. Công thức đặt tên Task chuẩn**

**Công thức "thần thánh":**

```
[Loại công việc] - [Chức năng/Module] - [Nội dung chính]
```

**Nguyên tắc:**

-   Tên task nên rõ ràng, cụ thể, không mơ hồ
-   Dùng viết tắt chuẩn hóa cho loại công việc
-   Bắt đầu bằng động từ hành động (Tạo, Xử lý, Thiết kế...)

**Ví dụ tốt ✅:**

| Ví dụ                                 | Giải thích                    |
| ------------------------------------- | ----------------------------- |
| FE - Booking - Tạo form đặt tour      | Frontend tạo form đặt tour    |
| BE - Booking - API tạo booking mới    | Backend xử lý API tạo booking |
| DB - Booking - Thiết kế bảng bookings | Thiết kế database cho booking |
| TEST - Booking - Kiểm thử đặt tour    | Kiểm thử module booking       |
| DOC - Báo cáo tiến độ tuần 2          | Ghi chép tài liệu và tiến độ  |

**Ví dụ không nên dùng ❌:**

-   ❌ "Đăng ký" → Quá mơ hồ, không biết là frontend hay backend
-   ❌ "UI sản phẩm" → Không biết sản phẩm nào, làm gì
-   ❌ "Tìm kiếm" → Tìm kiếm gì? Ở đâu?
-   ❌ "Booking" → Chỉ là tên module, không biết làm gì

#### **3.3. Danh sách viết tắt chuẩn hóa**

Các em hãy học thuộc bảng này để đặt tên task cho chuẩn nhé:

| Viết tắt | Ý nghĩa                  |
| -------- | ------------------------ |
| FE       | Frontend                 |
| BE       | Backend                  |
| DB       | Cơ sở dữ liệu (Database) |
| UI       | Thiết kế giao diện       |
| TEST     | Kiểm thử (Testing)       |
| DOC      | Tài liệu                 |
| MEET     | Họp nhóm / Giao tiếp     |

#### **3.4. Các thành phần khác của Task**

Một task chuẩn cần có đầy đủ các thông tin sau:

**Mô tả (Description):**

-   **Mục đích**: Task này làm gì? Tại sao cần làm?
-   **Yêu cầu**: Cần làm những gì cụ thể?
-   **Acceptance Criteria**: Làm thế nào biết task hoàn thành?
-   **Tham chiếu**: Link đến Spec, Use Case, ERD (nếu có)

**Assignee (Người thực hiện):**

-   Chọn thành viên nhóm phụ trách task này
-   Có thể assign nhiều người nếu là task lớn

**Status (Trạng thái):**

-   **To Do**: Chưa bắt đầu
-   **In Progress**: Đang làm
-   **In Review**: Đang review
-   **Done**: Hoàn thành

**Priority (Ưu tiên):**

-   **Urgent**: Khẩn cấp, ảnh hưởng nhiều
-   **High**: Quan trọng, cần làm sớm
-   **Normal**: Bình thường
-   **Low**: Có thể làm sau

**Labels (Nhãn):**

-   Phân loại task: `backend`, `frontend`, `database`, `bug`, `feature`
-   Module: `booking`, `tour`, `user`
-   Loại: `bắt buộc`, `mở rộng`
-   Tuần: `Week1`, `Week2`, `Week3`... (nếu cần)

**Due Date (Hạn chót):**

-   Đặt deadline rõ ràng
-   Có thể đặt cho cả task và subtask

**Checklist (Danh sách kiểm tra):**

-   Liệt kê các bước nhỏ để hoàn thành task
-   Đánh dấu khi hoàn thành từng bước

#### **3.5. Ví dụ Task chuẩn**

Đây là một task mẫu mà các em nên tham khảo:

```markdown
# Task: FE - Booking - Tạo form đặt tour cho khách hàng

## Mục đích

Cho phép khách hàng đặt tour qua website, nhập thông tin và submit booking.

## Yêu cầu

-   Tạo form HTML với các trường: Tour, số lượng người, ngày đi, thông tin khách hàng
-   Validate dữ liệu đầu vào (email, SĐT, số lượng người)
-   Xử lý submit form và lưu vào database
-   Hiển thị thông báo thành công sau khi đặt tour

## Acceptance Criteria

-   [ ] Form hiển thị đúng các trường cần thiết
-   [ ] Validation hoạt động đúng (email format, SĐT format, số lượng > 0)
-   [ ] Dữ liệu được lưu vào bảng `bookings` và `customers` trong database
-   [ ] Hiển thị thông báo "Đặt tour thành công" với mã booking
-   [ ] Gửi email xác nhận đến khách hàng (nếu có tích hợp email)

## Tham chiếu

-   Spec: Phần 3.1.1 - Tạo booking mới (STT 9)
-   Use Case: "Đặt tour trực tuyến" (Buổi 2)
-   ERD: Bảng `bookings`, `customers`

## Checklist

-   [ ] Thiết kế UI form (HTML/CSS)
-   [ ] Tạo file PHP xử lý form
-   [ ] Viết validation cho các trường
-   [ ] Kết nối database và insert dữ liệu
-   [ ] Test form với các trường hợp khác nhau
-   [ ] Code review
```

### 4. Thực hành: Tạo Task trong ClickUp (20 phút)

Bây giờ các em hãy làm theo các bước sau:

#### **Bước 1: Đọc lại Spec**

-   Xem phần "Tính năng chi tiết" trong Spec của nhóm
-   Xác định các chức năng cần làm
-   Phân loại theo Module và loại (Bắt buộc, Mở rộng)

#### **Bước 2: Chuyển đổi chức năng thành Task**

-   Mỗi chức năng trong Spec → 1 Task chính
-   Đặt tên Task theo công thức: `[Loại] - [Module] - [Nội dung]`
-   Mỗi phần của chức năng → 1 Subtask

#### **Bước 3: Tạo cấu trúc trong ClickUp**

-   Tạo Workspace với tên: `[Tên nhóm] - Module [Tên module]`
-   Tạo List cho từng Module (ví dụ: "Module Booking", "Module Tour")
-   Hoặc tạo List cho từng nhóm chức năng (ví dụ: "Tính năng Bắt buộc", "Tính năng Mở rộng", "Bug", "Testing")

#### **Bước 4: Tạo Task trong ClickUp**

-   Tạo Task cho từng chức năng theo công thức đã học
-   Điền đầy đủ thông tin:
    -   Tên Task (theo công thức chuẩn)
    -   Mô tả (Mục đích, Yêu cầu, Acceptance Criteria)
    -   Assignee (phân công thành viên)
    -   Priority (Ưu tiên)
    -   Labels (Module, Loại công việc, Loại: Bắt buộc/Mở rộng)
    -   Due Date (hạn chót)
    -   Checklist (các bước nhỏ)

**Ví dụ: Từ Spec Module Booking**

```
List: "Module Booking"
  ├── Task: "FE - Booking - Tạo form đặt tour"
  │    Labels: Frontend, Bắt buộc
  │    ├── Subtask: "Thiết kế UI form"
  │    ├── Subtask: "Validate dữ liệu đầu vào"
  │    ├── Subtask: "Xử lý submit và lưu database"
  │    └── Subtask: "Gửi email xác nhận"
  │
  ├── Task: "BE - Booking - API tạo booking mới"
  │    Labels: Backend, Bắt buộc
  │    ├── Subtask: "Tạo endpoint API"
  │    ├── Subtask: "Validate request"
  │    └── Subtask: "Lưu vào database"
  │
  ├── Task: "FE - Booking - Giao diện danh sách booking"
  │    Labels: Frontend, Bắt buộc
  │    ├── Subtask: "Thiết kế UI danh sách"
  │    ├── Subtask: "Xử lý cập nhật trạng thái"
  │    └── Subtask: "Lưu lịch sử thay đổi"
  │
  └── Task: "TEST - Booking - Kiểm thử đặt tour"
       Labels: Testing, Bắt buộc
```

### 5. Lập kế hoạch triển khai module (40 phút)

Đây là phần quan trọng nhất! Sau khi có các task trong ClickUp, các em cần lập kế hoạch triển khai chi tiết.

#### **5.1. Tại sao cần lập kế hoạch?**

Các em có biết câu nói này không: "Thất bại trong lập kế hoạch là lập kế hoạch cho thất bại" 😊

Lập kế hoạch giúp các em:

-   ✅ Biết rõ cần làm gì, khi nào xong
-   ✅ Phân công công việc hợp lý cho từng thành viên
-   ✅ Tránh tình trạng "nước đến chân mới nhảy"
-   ✅ Ước lượng được thời gian cần thiết
-   ✅ Xác định được phụ thuộc giữa các task

#### **5.2. Phân tích module thành các task**

Các em hãy làm theo các bước sau:

**Bước 1: Liệt kê tất cả chức năng** từ Spec

**Bước 2: Chia nhỏ mỗi chức năng** thành các task cụ thể

**Bước 3: Ước lượng thời gian** cho mỗi task

**Bước 4: Xác định phụ thuộc** giữa các task (task nào phải làm trước, task nào làm sau)

**Ví dụ: Module Booking - Chức năng "Đặt tour trực tuyến"**

Chia thành các task:

| Task   | Mô tả                               | Thời gian (giờ) | Phụ thuộc      |
| ------ | ----------------------------------- | --------------- | -------------- |
| Task 1 | Tạo database schema (booking table) | 2               | -              |
| Task 2 | Tạo form đặt tour (HTML/CSS)        | 4               | Task 1         |
| Task 3 | Validate form (JavaScript)          | 2               | Task 2         |
| Task 4 | Xử lý submit form (PHP)             | 4               | Task 1, Task 2 |
| Task 5 | Lưu booking vào database            | 2               | Task 4         |
| Task 6 | Gửi email xác nhận                  | 3               | Task 5         |
| Task 7 | Test chức năng đặt tour             | 2               | Task 6         |

**Tổng: ~19 giờ**

**Lưu ý về ước lượng thời gian:**

Các em ước lượng thời gian theo công thức đơn giản:

```
Thời gian ước lượng = Thời gian lý tưởng × 1.5 (buffer)
```

Ví dụ: Nếu em nghĩ task này mất 2 giờ, thì ước lượng là 2 × 1.5 = 3 giờ.

**Yếu tố ảnh hưởng:**

-   Độ phức tạp của task
-   Kinh nghiệm của người làm
-   Rủi ro (bug, thay đổi yêu cầu)

#### **5.3. Phân công công việc**

**Nguyên tắc phân công:**

-   Dựa trên vai trò: Developer làm code, Tester làm test, Documenter làm tài liệu
-   Dựa trên kỹ năng: Frontend giỏi → làm HTML/CSS/JS, Backend giỏi → làm PHP
-   Cân bằng khối lượng: Không để 1 người làm quá nhiều

**Ví dụ phân công:**

| Task                     | Assignee     | Thời gian | Deadline | Priority |
| ------------------------ | ------------ | --------- | -------- | -------- |
| Tạo database schema      | Nguyễn Văn A | 2 giờ     | Tuần 3   | High     |
| Form đặt tour (HTML/CSS) | Trần Thị B   | 4 giờ     | Tuần 3   | High     |
| Validate form (JS)       | Trần Thị B   | 2 giờ     | Tuần 3   | High     |
| Xử lý submit (PHP)       | Nguyễn Văn A | 4 giờ     | Tuần 3   | High     |
| Lưu vào database         | Nguyễn Văn A | 2 giờ     | Tuần 3   | High     |
| Gửi email xác nhận       | Lê Văn C     | 3 giờ     | Tuần 3   | Normal   |
| Test                     | Phạm Thị D   | 2 giờ     | Tuần 4   | High     |

**Ưu tiên task:**

-   **High Priority (Cao)**: Task quan trọng, ảnh hưởng đến chức năng chính
-   **Medium Priority (Trung bình)**: Task quan trọng nhưng không cấp thiết
-   **Low Priority (Thấp)**: Task có thể làm sau

#### **5.4. Tạo timeline tổng thể**

Sau khi phân công xong, các em hãy tạo timeline tổng thể:

**Timeline 3 tuần (ví dụ):**

**Tuần 3 (Tuần này):**

-   Setup môi trường (XAMPP, database)
-   Tạo database schema
-   Xây dựng giao diện cơ bản
-   **Kết quả mong đợi**: Database và giao diện chạy được (~30% hoàn thành)

**Tuần 4:**

-   Hoàn thiện chức năng chính
-   Tích hợp module
-   Test và sửa lỗi
-   **Kết quả mong đợi**: ≥80% chức năng hoạt động (~80% hoàn thành)

**Tuần 5–6:**

-   Hoàn thiện tính năng nâng cao
-   Chuẩn bị demo và báo cáo
-   **Kết quả mong đợi**: 100% chức năng (~100% hoàn thành)

### 6. Theo dõi tiến độ trong ClickUp (10 phút)

ClickUp có nhiều tính năng để theo dõi tiến độ:

-   **Dashboard**: Xem tổng quan tiến độ dự án
-   **Views**: Board view, List view, Calendar view
-   **Reports**: Báo cáo tiến độ, thời gian làm việc
-   **Notifications**: Thông báo khi có thay đổi

Các em nhớ cập nhật Status của task thường xuyên nhé! (To Do → In Progress → Done)

---

## 📘 Bài tập nhóm

### Yêu cầu 1: Tạo ClickUp Workspace và Task (Nộp trước buổi 6)

**Các em cần làm:**

1. **Tạo Workspace cho nhóm**

    - Tạo Workspace với tên: `[Tên nhóm] - Module [Tên module]`
    - Thêm các thành viên nhóm vào Workspace

2. **Tạo cấu trúc List**

    - Tạo List theo Module (ví dụ: "Module Booking", "Module Tour")
    - Hoặc tạo List theo chức năng (ví dụ: "Tính năng Bắt buộc", "Tính năng Mở rộng", "Bug", "Testing")

3. **Tạo Task từ Spec**

    - Chuyển đổi các chức năng trong Spec thành Task
    - Đặt tên Task theo công thức: `[Loại] - [Module] - [Nội dung]`
    - Mỗi Task phải có đầy đủ:
        - Tên Task rõ ràng (theo công thức chuẩn)
        - Mô tả (Mục đích, Yêu cầu, Acceptance Criteria)
        - Assignee (phân công thành viên)
        - Priority (Ưu tiên)
        - Labels (Module, Loại công việc, Loại: Bắt buộc/Mở rộng)
        - Due Date (hạn chót)
        - Checklist (các bước nhỏ)

4. **Tạo ít nhất 5 Task từ chức năng "Bắt buộc"**

**Format nộp:**

-   Nộp screenshot Dashboard của Workspace
-   Screenshot 2-3 Task mẫu (đầy đủ thông tin)
-   Link ClickUp (nếu có thể share)

**Hoặc:**

Tạo file Word/PDF mô tả:

-   Cấu trúc Workspace/List
-   Danh sách Task đã tạo (tên task, assignee, priority)
-   Ví dụ 1-2 Task chi tiết (mô tả đầy đủ)

### Yêu cầu 2: Lập kế hoạch triển khai (Nộp trước buổi 6)

**Các em cần tạo file Excel hoặc Google Sheets** với nội dung:

#### **Sheet 1: Danh sách Task**

| STT | Task                | Mô tả                     | Assignee     | Thời gian (giờ) | Deadline | Priority | Status       | Ghi chú |
| --- | ------------------- | ------------------------- | ------------ | --------------- | -------- | -------- | ------------ | ------- |
| 1   | Tạo database schema | Tạo bảng booking, payment | Nguyễn Văn A | 2               | Tuần 3   | High     | Chưa bắt đầu |         |
| 2   | Form đặt tour       | HTML/CSS form đặt tour    | Trần Thị B   | 4               | Tuần 3   | High     | Chưa bắt đầu |         |
| ... | ...                 | ...                       | ...          | ...             | ...      | ...      | ...          | ...     |

**Cột Status:**

-   Chưa bắt đầu
-   Đang làm
-   Hoàn thành
-   Blocked (bị chặn)

#### **Sheet 2: Timeline tổng thể**

| Tuần     | Công việc chính                   | Kết quả mong đợi                | % Hoàn thành |
| -------- | --------------------------------- | ------------------------------- | ------------ |
| Tuần 3   | Setup, Database, Giao diện cơ bản | Database và giao diện chạy được | 30%          |
| Tuần 4   | Chức năng chính, Tích hợp         | ≥80% chức năng hoạt động        | 80%          |
| Tuần 5–6 | Hoàn thiện, Demo, Báo cáo         | 100% chức năng                  | 100%         |

#### **Sheet 3: Phân công chi tiết theo thành viên**

| Thành viên   | Vai trò                | Task được giao          | Tổng thời gian (giờ) |
| ------------ | ---------------------- | ----------------------- | -------------------- |
| Nguyễn Văn A | Developer (Backend)    | Tạo database, Xử lý PHP | 15                   |
| Trần Thị B   | Developer (Frontend)   | HTML/CSS, JavaScript    | 12                   |
| Lê Văn C     | Developer (Full-stack) | Tích hợp, Email         | 10                   |
| Phạm Thị D   | Tester                 | Test tất cả chức năng   | 8                    |

**Yêu cầu format:**

-   ✅ File Excel hoặc Google Sheets
-   ✅ Có ít nhất 3 sheet như trên
-   ✅ Cập nhật Status hàng tuần
-   ✅ Tính tổng thời gian và % hoàn thành

### Deadline

**Nộp trước buổi 6** (gửi qua email hoặc LMS)

---

## 📦 Kết quả mong đợi sau buổi học

Sau buổi học này, các em sẽ:

-   ✅ Có ClickUp Workspace cho nhóm
-   ✅ Tạo được cấu trúc List phù hợp (theo Module hoặc chức năng)
-   ✅ Tạo được ít nhất 5 Task từ Spec với đầy đủ thông tin
-   ✅ Có kế hoạch triển khai chi tiết với timeline rõ ràng
-   ✅ Phân công công việc cụ thể cho từng thành viên
-   ✅ Ước lượng được thời gian cho từng task
-   ✅ Biết cách phân công và theo dõi tiến độ

---

## 💡 Tips hữu ích

1. **Chia nhỏ task**: Task càng nhỏ, càng dễ quản lý và ước lượng. Một task nên hoàn thành trong 1-3 ngày.

2. **Ước lượng thời gian**: Thời gian thực tế thường nhiều hơn ước lượng. Hãy nhân với 1.5 để có buffer.

3. **Cập nhật Status thường xuyên**: Đừng quên cập nhật Status của task trong ClickUp để nhóm biết tiến độ.

4. **Xác định phụ thuộc**: Nhớ xác định task nào phụ thuộc task nào để tránh bị block.

5. **Giao tiếp trên ClickUp**: Dùng comment trên task để trao đổi, thay vì chat riêng.

---

## 🔍 Câu hỏi thường gặp

**Q: "ClickUp có miễn phí không?"**

A: Có, ClickUp có gói miễn phí với đầy đủ tính năng cơ bản cho nhóm nhỏ. Đủ dùng cho dự án môn học của các em.

**Q: "Tại sao phải đặt tên task theo công thức [Loại] - [Module] - [Nội dung]?"**

A: Giúp quản lý công việc dễ hơn, thầy theo dõi tiến độ nhanh chóng, và nhóm làm việc chuyên nghiệp như môi trường doanh nghiệp. Dễ tìm kiếm, lọc task theo loại công việc hoặc module.

**Q: "Nên tổ chức List theo Module hay theo chức năng?"**

A: Tùy vào quy mô dự án. Với dự án nhỏ, nên tổ chức theo Module (ví dụ: "Module Booking", "Module Tour") để dễ quản lý. Với dự án lớn hơn, có thể tổ chức theo chức năng (ví dụ: "Tính năng Bắt buộc", "Tính năng Mở rộng") hoặc kết hợp cả hai.

**Q: "Task nên lớn hay nhỏ?"**

A: Task nên vừa phải, có thể hoàn thành trong 1-3 ngày. Nếu task quá lớn, nên chia thành nhiều subtask hoặc chia nhỏ thành nhiều task.

**Q: "Làm sao để ước lượng thời gian chính xác?"**

A: Dựa vào kinh nghiệm và độ phức tạp. Nếu không chắc, ước lượng rộng hơn một chút (nhân với 1.5). Đừng lo lắng, ước lượng sẽ tốt hơn khi các em có nhiều kinh nghiệm.

**Q: "Nếu task bị trễ deadline, phải làm sao?"**

A: Báo cáo với Leader và thầy ngay. Có thể điều chỉnh lại kế hoạch. Quan trọng là giao tiếp sớm, đừng để đến phút cuối mới báo.

**Q: "Một người có thể làm nhiều task cùng lúc không?"**

A: Nên tập trung vào 1–2 task để đảm bảo chất lượng. Không nên làm quá nhiều task cùng lúc, dễ bị "cháy" đó các em 😅

**Q: "Có cần tạo Task cho việc setup môi trường không?"**

A: Có, nên tạo Task cho các công việc setup ban đầu: tạo database, cấu trúc folder, setup môi trường dev. Ví dụ: "BE - Setup - Tạo database và cấu trúc folder"

**Q: "Làm sao biết Task đã hoàn thành?"**

A: Dựa vào Acceptance Criteria. Nếu tất cả các điều kiện đã đạt, có thể đánh dấu Done.

---

**📌 Lưu ý quan trọng:**

Các em nhớ hoàn thành bài tập trước buổi 6 nhé! Buổi tiếp theo chúng ta sẽ học Git và teamwork. Sau khi có kế hoạch rồi, các em sẽ bắt đầu code ngay thôi! 💪

Chúc các em học tốt! 🎉
