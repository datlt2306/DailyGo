# Buổi 4 – Thiết kế dữ liệu (ERD)

> **Bài trước:** [Buổi 3: Viết Project Specification (Spec)](./lesson-3.md)  
> **Bài tiếp theo:** [Buổi 5: Thiết kế database nâng cao & chuẩn hóa](./lesson-5.md)

Xin chào các em! 🎉

Hôm nay chúng ta sẽ học **thiết kế database** - một bước cực kỳ quan trọng trong phát triển phần mềm! Database là nền tảng của hệ thống, nếu thiết kế sai thì code sẽ rất khó khăn đấy! 😊

## 🎯 Mục tiêu học tập

Sau buổi học hôm nay, các em sẽ:

-   ✅ Hiểu khái niệm ERD (Entity Relationship Diagram) và vai trò trong thiết kế database
-   ✅ Nắm được các mối quan hệ: 1-1, 1-nhiều, nhiều-nhiều
-   ✅ Thiết kế được ERD cho module phụ trách
-   ✅ Hiểu cách chuyển đổi từ Spec sang ERD
-   ✅ Biết cách xác định Entity, Attribute, và Relationship

---

## 📋 Nội dung chính

### 1. ERD là gì? Tại sao cần ERD?

Các em có biết database là gì không? Đó là nơi lưu trữ tất cả dữ liệu của hệ thống! Ví dụ: danh sách tour, thông tin khách hàng, booking...

Nhưng làm sao để biết cần lưu những gì? Làm sao để các bảng liên kết với nhau? Đó là lúc **ERD** xuất hiện! 😊

#### **ERD là gì?**

**ERD (Entity Relationship Diagram)** là sơ đồ mô tả cấu trúc dữ liệu của hệ thống, bao gồm:

-   **Entity (Thực thể)**: Đối tượng trong hệ thống (Ví dụ: User, Tour, Booking)
-   **Attribute (Thuộc tính)**: Thông tin của Entity (Ví dụ: User có email, password, name)
-   **Relationship (Quan hệ)**: Mối liên hệ giữa các Entity

**Ví dụ đơn giản:**

-   Entity `User` có các thuộc tính: `id`, `email`, `password`, `name`
-   Entity `Booking` có quan hệ với `User`: 1 User có nhiều Booking (1-nhiều)

#### **Tại sao cần ERD?**

-   ✅ Hiểu rõ cấu trúc dữ liệu trước khi tạo database
-   ✅ Tránh lặp dữ liệu (normalization)
-   ✅ Làm cơ sở để viết code sau này
-   ✅ Dễ dàng mở rộng và bảo trì

### 2. ERD tổng thể hệ thống Tour du lịch (25 phút)

Giảng viên trình bày ERD tổng thể dựa trên bảng phân quyền:

#### **Nhóm 1: Quản lý tour và sản phẩm du lịch**

**2.1. Các bảng chính:**

-   **`users`** (Người dùng/Admin): id, email, password, full_name, phone, role, created_at
-   **`tour_categories`** (Danh mục tour): id, name, type (trong nước/quốc tế/customized), description
-   **`tours`** (Tour): id, category_id, name, description, duration, images (JSON), price, policy (text), qr_code, booking_url, created_at
-   **`tour_versions`** (Phiên bản tour - Mở rộng): id, tour_id, version_type (mùa/khuyến mãi/đặc biệt), price, start_date, end_date, description
-   **`tour_schedules`** (Lịch trình tour): id, tour_id, day_number, activity, location, time, description
-   **`tour_images`** (Hình ảnh tour): id, tour_id, image_url, caption, order

**2.2. Các quan hệ:**

-   Tour_Category ↔ Tour: 1-nhiều (1 danh mục có nhiều tour)
-   Tour ↔ Tour_Version: 1-nhiều (1 tour có nhiều phiên bản)
-   Tour ↔ Tour_Schedule: 1-nhiều (1 tour có nhiều lịch trình)
-   Tour ↔ Tour_Image: 1-nhiều (1 tour có nhiều hình ảnh)

#### **Nhóm 2: Bán tour và đặt chỗ**

**2.3. Các bảng chính:**

-   **`customers`** (Khách hàng): id, full_name, email, phone, address, id_card, created_at
-   **`bookings`** (Đặt tour): id, customer_id, tour_id, booking_date, departure_date, num_adults, num_children, num_infants, status (chờ xác nhận/đã cọc/hoàn tất/hủy), total_price, special_notes, created_at
-   **`booking_history`** (Lịch sử thay đổi booking): id, booking_id, old_status, new_status, changed_by, change_reason, changed_at
-   **`booking_participants`** (Danh sách khách trong booking): id, booking_id, full_name, gender, birth_year, id_card, special_notes (ăn chay, bệnh lý...)
-   **`customer_transactions`** (Lịch sử giao dịch nội bộ - Mở rộng): id, customer_id, booking_id, transaction_type, amount, note, created_at

**2.4. Các quan hệ:**

-   Customer ↔ Booking: 1-nhiều (1 khách hàng có nhiều booking)
-   Tour ↔ Booking: 1-nhiều (1 tour có nhiều booking)
-   Booking ↔ Booking_History: 1-nhiều (1 booking có nhiều lịch sử thay đổi)
-   Booking ↔ Booking_Participant: 1-nhiều (1 booking có nhiều người tham gia)
-   Customer ↔ Customer_Transaction: 1-nhiều (1 khách hàng có nhiều giao dịch)

#### **Nhóm 3: Quản lý & điều hành tour**

**2.5. Các bảng chính:**

-   **`guides`** (Hướng dẫn viên): id, full_name, birth_date, phone, email, avatar, specialty, languages (JSON), certificates, experience, health_status, group_type (nội địa/quốc tế/chuyên tuyến/chuyên đoàn), created_at
-   **`tour_departures`** (Lịch khởi hành): id, tour_id, departure_date, departure_time, meeting_point, end_date, end_time, status, created_at
-   **`tour_assignments`** (Phân bổ nhân sự): id, departure_id, guide_id, role (HDV/tài xế/hậu cần), status, assigned_at
-   **`tour_services`** (Phân bổ dịch vụ): id, departure_id, service_type (xe/khách sạn/vé máy bay/nhà hàng), supplier_id, quantity, status, notes
-   **`tour_diaries`** (Nhật ký tour - Mở rộng): id, departure_id, day_number, weather, incidents, activities, notes, images (JSON), created_by, created_at
-   **`tour_reviews`** (Phản hồi đánh giá - Mở rộng): id, departure_id, customer_id, tour_rating, service_rating, guide_rating, comment, created_at

**2.6. Các quan hệ:**

-   Tour ↔ Tour_Departure: 1-nhiều (1 tour có nhiều lịch khởi hành)
-   Tour_Departure ↔ Tour_Assignment: 1-nhiều (1 lịch khởi hành có nhiều phân công nhân sự)
-   Guide ↔ Tour_Assignment: 1-nhiều (1 HDV được phân công nhiều lần)
-   Tour_Departure ↔ Tour_Service: 1-nhiều (1 lịch khởi hành có nhiều dịch vụ)
-   Tour_Departure ↔ Tour_Diary: 1-nhiều (1 lịch khởi hành có nhiều nhật ký)
-   Tour_Departure ↔ Tour_Review: 1-nhiều (1 lịch khởi hành có nhiều đánh giá)
-   Booking ↔ Tour_Departure: nhiều-1 (nhiều booking có thể thuộc 1 lịch khởi hành)

#### **Nhóm 4: Quản lý đối tác, nhà cung cấp (Mở rộng)**

**2.7. Các bảng chính:**

-   **`suppliers`** (Nhà cung cấp): id, name, type (khách sạn/nhà hàng/vận chuyển/vé/visa/bảo hiểm), address, contact_person, phone, email, capacity, services, created_at
-   **`supplier_contracts`** (Hợp đồng nhà cung cấp): id, supplier_id, contract_file, terms, start_date, end_date, price, created_at
-   **`supplier_ratings`** (Đánh giá nhà cung cấp): id, supplier_id, departure_id, rating, comment, rated_by, created_at
-   **`supplier_payments`** (Thanh toán nhà cung cấp): id, supplier_id, service_id, amount, payment_date, payment_method, invoice, status, created_at

**2.8. Các quan hệ:**

-   Supplier ↔ Supplier_Contract: 1-nhiều (1 nhà cung cấp có nhiều hợp đồng)
-   Supplier ↔ Supplier_Rating: 1-nhiều (1 nhà cung cấp có nhiều đánh giá)
-   Supplier ↔ Supplier_Payment: 1-nhiều (1 nhà cung cấp có nhiều thanh toán)
-   Tour_Service ↔ Supplier: nhiều-1 (nhiều dịch vụ thuộc 1 nhà cung cấp)

#### **Nhóm 5: Quản lý tài chính (Mở rộng)**

**2.9. Các bảng chính:**

-   **`tour_budgets`** (Dự toán chi phí tour): id, tour_id, item_type, item_name, estimated_cost, actual_cost, notes
-   **`tour_payments`** (Thanh toán tour): id, booking_id, payment_type (đặt cọc/thanh toán/thu thêm), amount, payment_date, payment_method, status, created_at
-   **`tour_profits`** (Lãi/lỗ tour - tính toán): departure_id, total_revenue, total_cost, profit, calculated_at

**2.10. Các quan hệ:**

-   Tour ↔ Tour_Budget: 1-nhiều (1 tour có nhiều khoản dự toán)
-   Booking ↔ Tour_Payment: 1-nhiều (1 booking có nhiều thanh toán)
-   Tour_Departure ↔ Tour_Profit: 1-1 (1 lịch khởi hành có 1 báo cáo lãi/lỗ)

#### **Tổng hợp các quan hệ chính:**

-   **User** ↔ **Booking**: 1-nhiều (Admin xử lý booking)
-   **Customer** ↔ **Booking**: 1-nhiều (1 khách hàng có nhiều booking)
-   **Tour** ↔ **Booking**: 1-nhiều (1 tour có nhiều booking)
-   **Tour** ↔ **Tour_Departure**: 1-nhiều (1 tour có nhiều lịch khởi hành)
-   **Tour_Departure** ↔ **Booking**: 1-nhiều (1 lịch khởi hành có nhiều booking)
-   **Guide** ↔ **Tour_Assignment**: 1-nhiều (1 HDV được phân công nhiều lần)
-   **Tour_Departure** ↔ **Tour_Assignment**: 1-nhiều (1 lịch khởi hành có nhiều phân công)
-   **Booking** ↔ **Booking_Participant**: 1-nhiều (1 booking có nhiều người tham gia)
-   **Booking** ↔ **Booking_History**: 1-nhiều (1 booking có nhiều lịch sử thay đổi)

### 3. Hướng dẫn thiết kế ERD cho module (25 phút)

#### **Bước 1: Xác định các Entity từ Spec**

**Cách làm:**

1.  Đọc lại phần "Tính năng chi tiết" trong Spec
2.  Xác định các đối tượng chính (Entity) dựa trên:
    -   Danh từ trong mô tả chức năng
    -   Input/Output của các chức năng
    -   Bảng phân quyền (Buổi 2)
3.  Liệt kê các Entity cần thiết

**Ví dụ: Module Booking (Nhóm 2)**

Từ Spec, các chức năng:

-   Tạo booking mới → Entity: **Booking**, **Customer**, **Tour**
-   Quản lý tình trạng booking → Entity: **Booking_History**
-   Danh sách khách trong booking → Entity: **Booking_Participant**
-   Xuất báo giá/hợp đồng/hóa đơn → Entity: **Booking** (dữ liệu có sẵn)

**Kết quả:** Entity cần thiết: `bookings`, `customers`, `tours`, `booking_history`, `booking_participants`

#### **Bước 2: Xác định thuộc tính (Attributes)**

**Cách làm:**

1.  Với mỗi Entity, xác định các thuộc tính dựa trên:
    -   **Input** của các chức năng trong Spec
    -   **Output** của các chức năng trong Spec
    -   **Mô tả** trong bảng phân quyền
2.  Xác định **Primary Key (PK)**: Thường là `id` (INT, AUTO_INCREMENT)
3.  Xác định **Foreign Key (FK)**: Tham chiếu đến bảng khác

**Ví dụ: Bảng `bookings`**

Từ Spec "Tạo booking mới":

-   Input: Tour ID, số lượng người, thông tin khách hàng, ngày đi
-   Output: Booking ID, trạng thái "Chờ xác nhận"

**Thuộc tính:**

-   `id` (INT, PK) - Mã booking
-   `customer_id` (INT, FK → customers.id) - Khách hàng
-   `tour_id` (INT, FK → tours.id) - Tour
-   `departure_date` (DATE) - Ngày khởi hành
-   `num_adults` (INT) - Số người lớn
-   `num_children` (INT) - Số trẻ em
-   `num_infants` (INT) - Số em bé
-   `total_price` (DECIMAL) - Tổng tiền
-   `status` (VARCHAR) - Trạng thái (chờ xác nhận/đã cọc/hoàn tất/hủy)
-   `special_notes` (TEXT) - Ghi chú đặc biệt
-   `created_at` (DATETIME) - Ngày tạo

**Ví dụ: Bảng `booking_history`**

Từ Spec "Quản lý tình trạng booking":

-   Input: Booking ID, trạng thái mới, lý do
-   Xử lý: Lưu lịch sử thay đổi

**Thuộc tính:**

-   `id` (INT, PK)
-   `booking_id` (INT, FK → bookings.id)
-   `old_status` (VARCHAR) - Trạng thái cũ
-   `new_status` (VARCHAR) - Trạng thái mới
-   `changed_by` (INT, FK → users.id) - Người thay đổi
-   `change_reason` (TEXT) - Lý do thay đổi
-   `changed_at` (DATETIME) - Thời gian thay đổi

#### **Bước 3: Xác định quan hệ**

**Cách làm:**

1.  Xác định quan hệ giữa các Entity dựa trên:
    -   **Spec**: Mô tả Input/Xử lý/Output
    -   **Use Case**: Luồng nghiệp vụ
    -   Logic nghiệp vụ
2.  Phân loại quan hệ:

    -   **1-1**: Ít gặp, thường là bảng mở rộng
        -   Ví dụ: Tour_Departure ↔ Tour_Profit (1 lịch khởi hành có 1 báo cáo lãi/lỗ)
    -   **1-nhiều**: Phổ biến nhất
        -   Ví dụ: Customer ↔ Booking (1 khách hàng có nhiều booking)
        -   Bảng "nhiều" có Foreign Key trỏ về bảng "1"
    -   **Nhiều-nhiều**: Cần bảng trung gian
        -   Ví dụ: Tour ↔ Guide (1 tour có nhiều guide, 1 guide làm nhiều tour)
        -   Tạo bảng trung gian: `tour_guides` (tour_id, guide_id)

**Ví dụ: Module Booking**

-   Customer ↔ Booking: **1-nhiều** (1 khách hàng có nhiều booking)
    -   FK: `bookings.customer_id` → `customers.id`
-   Tour ↔ Booking: **1-nhiều** (1 tour có nhiều booking)
    -   FK: `bookings.tour_id` → `tours.id`
-   Booking ↔ Booking_History: **1-nhiều** (1 booking có nhiều lịch sử)
    -   FK: `booking_history.booking_id` → `bookings.id`
-   Booking ↔ Booking_Participant: **1-nhiều** (1 booking có nhiều người tham gia)
    -   FK: `booking_participants.booking_id` → `bookings.id`

#### **Bước 4: Vẽ ERD**

**Công cụ:**

1.  **draw.io** (https://app.diagrams.net/): Miễn phí, dễ dùng, có template ERD
2.  **Lucidchart**: Trả phí, chuyên nghiệp
3.  **MySQL Workbench**: Tích hợp với MySQL, tự động tạo ERD từ database
4.  **dbdiagram.io**: Miễn phí, viết code để tạo ERD
5.  **Vẽ tay**: Đơn giản, nhanh cho bài tập

**Lưu ý khi vẽ:**

-   Đặt tên bảng rõ ràng (dùng số ít hoặc số nhiều nhất quán)
-   Ghi rõ Primary Key (PK) và Foreign Key (FK)
-   Đánh dấu quan hệ: 1-1, 1-nhiều, nhiều-nhiều
-   Có thể thêm ghi chú cho các quan hệ phức tạp

### 4. Thực hành nhóm (20 phút)

-   Các nhóm thảo luận và thiết kế ERD cho module
-   Giảng viên đi vòng hỗ trợ từng nhóm

---

## 🧠 Kiến thức trọng tâm / Giải thích

### ERD là gì?

**ERD (Entity Relationship Diagram)** là sơ đồ mô tả cấu trúc dữ liệu của hệ thống, bao gồm:

-   **Entity (Thực thể)**: Đối tượng trong hệ thống (Ví dụ: User, Tour, Booking)
-   **Attribute (Thuộc tính)**: Thông tin của Entity (Ví dụ: User có email, password, name)
-   **Relationship (Quan hệ)**: Mối liên hệ giữa các Entity

### Các loại quan hệ

#### **1. Quan hệ 1-1 (One-to-One)**

-   Mỗi bản ghi ở bảng A chỉ liên kết với 1 bản ghi ở bảng B
-   Ví dụ: User ↔ Profile (1 user có 1 profile)

#### **2. Quan hệ 1-nhiều (One-to-Many)**

-   Mỗi bản ghi ở bảng A có thể liên kết với nhiều bản ghi ở bảng B
-   Ví dụ: Tour ↔ Booking (1 tour có nhiều booking)
-   Bảng "nhiều" sẽ có Foreign Key trỏ về bảng "1"

#### **3. Quan hệ nhiều-nhiều (Many-to-Many)**

-   Cần bảng trung gian (junction table)
-   Ví dụ: Tour ↔ Guide (1 tour có nhiều guide, 1 guide làm nhiều tour)
-   Bảng trung gian: `tour_guides` (tour_id, guide_id)

### Primary Key và Foreign Key

-   **Primary Key (PK)**: Khóa chính, định danh duy nhất mỗi bản ghi
    -   Ví dụ: `users.id`, `tours.id`
-   **Foreign Key (FK)**: Khóa ngoại, tham chiếu đến Primary Key của bảng khác
    -   Ví dụ: `bookings.user_id` → `users.id`

### Công cụ vẽ ERD

1. **draw.io** (https://app.diagrams.net/): Miễn phí, dễ dùng
2. **Lucidchart**: Trả phí, chuyên nghiệp
3. **MySQL Workbench**: Tích hợp với MySQL
4. **Vẽ tay**: Đơn giản, nhanh

---

## 📘 Bài tập nhóm

### Nộp ERD của module

Tạo file **PDF hoặc ảnh** ERD với nội dung:

#### **Yêu cầu:**

1. **Vẽ ERD cho module phụ trách**

    - Bao gồm các bảng liên quan đến module
    - Có thể bổ sung thêm bảng từ ERD tổng thể nếu cần

2. **Mô tả các bảng** (kèm theo ERD):

    - Tên bảng
    - Các cột (field) và kiểu dữ liệu
    - Primary Key và Foreign Key
    - Ví dụ:

    | Bảng: bookings               |
    | ---------------------------- |
    | id (INT, PK)                 |
    | user_id (INT, FK → users.id) |
    | tour_id (INT, FK → tours.id) |
    | booking_date (DATE)          |
    | status (VARCHAR)             |
    | total_price (DECIMAL)        |

3. **Mô tả quan hệ**
    - Giải thích các quan hệ giữa các bảng
    - Ví dụ: "Booking có quan hệ 1-nhiều với User (1 user có nhiều booking)"

#### **Ví dụ ERD Module Booking:**

**Sơ đồ ERD:**

```
customers (1) ────< (n) bookings (n) >──── (1) tours
                │
                │
                ├──> (n) booking_history
                │
                └──> (n) booking_participants
```

**Mô tả chi tiết:**

**Bảng `customers`:**

-   `id` (INT, PK)
-   `full_name` (VARCHAR)
-   `email` (VARCHAR, UNIQUE)
-   `phone` (VARCHAR)
-   `address` (TEXT)
-   `id_card` (VARCHAR)
-   `created_at` (DATETIME)

**Bảng `bookings`:**

-   `id` (INT, PK)
-   `customer_id` (INT, FK → customers.id)
-   `tour_id` (INT, FK → tours.id)
-   `departure_date` (DATE)
-   `num_adults` (INT)
-   `num_children` (INT)
-   `num_infants` (INT)
-   `total_price` (DECIMAL)
-   `status` (VARCHAR) - chờ xác nhận/đã cọc/hoàn tất/hủy
-   `special_notes` (TEXT)
-   `created_at` (DATETIME)

**Bảng `booking_history`:**

-   `id` (INT, PK)
-   `booking_id` (INT, FK → bookings.id)
-   `old_status` (VARCHAR)
-   `new_status` (VARCHAR)
-   `changed_by` (INT, FK → users.id)
-   `change_reason` (TEXT)
-   `changed_at` (DATETIME)

**Bảng `booking_participants`:**

-   `id` (INT, PK)
-   `booking_id` (INT, FK → bookings.id)
-   `full_name` (VARCHAR)
-   `gender` (VARCHAR)
-   `birth_year` (INT)
-   `id_card` (VARCHAR)
-   `special_notes` (TEXT) - ăn chay, bệnh lý...

**Quan hệ:**

-   Customer ↔ Booking: **1-nhiều** (1 khách hàng có nhiều booking)
-   Tour ↔ Booking: **1-nhiều** (1 tour có nhiều booking)
-   Booking ↔ Booking_History: **1-nhiều** (1 booking có nhiều lịch sử thay đổi)
-   Booking ↔ Booking_Participant: **1-nhiều** (1 booking có nhiều người tham gia)

#### **Ví dụ ERD Module Quản lý Tour (Nhóm 1):**

```
tour_categories (1) ────< (n) tours (1) ────< (n) tour_versions
                           │
                           ├──> (n) tour_schedules
                           │
                           └──> (n) tour_images
```

**Bảng `tour_categories`:**

-   `id` (INT, PK)
-   `name` (VARCHAR)
-   `type` (VARCHAR) - trong nước/quốc tế/customized
-   `description` (TEXT)

**Bảng `tours`:**

-   `id` (INT, PK)
-   `category_id` (INT, FK → tour_categories.id)
-   `name` (VARCHAR)
-   `description` (TEXT)
-   `duration` (INT) - số ngày
-   `images` (JSON) - danh sách ảnh
-   `price` (DECIMAL) - giá cơ bản
-   `policy` (TEXT) - chính sách
-   `qr_code` (VARCHAR) - mã QR
-   `booking_url` (VARCHAR) - đường dẫn đặt tour
-   `created_at` (DATETIME)

**Bảng `tour_versions`** (Mở rộng):

-   `id` (INT, PK)
-   `tour_id` (INT, FK → tours.id)
-   `version_type` (VARCHAR) - mùa/khuyến mãi/đặc biệt
-   `price` (DECIMAL)
-   `start_date` (DATE)
-   `end_date` (DATE)
-   `description` (TEXT)

**Bảng `tour_schedules`:**

-   `id` (INT, PK)
-   `tour_id` (INT, FK → tours.id)
-   `day_number` (INT)
-   `activity` (VARCHAR)
-   `location` (VARCHAR)
-   `time` (TIME)
-   `description` (TEXT)

#### **Ví dụ ERD Module Điều hành Tour (Nhóm 3):**

```
tours (1) ────< (n) tour_departures (1) ────< (n) tour_assignments
                                              │
                                              ├──> (n) tour_services
                                              │
                                              └──> (n) booking_participants

guides (1) ────< (n) tour_assignments
```

**Bảng `tour_departures`:**

-   `id` (INT, PK)
-   `tour_id` (INT, FK → tours.id)
-   `departure_date` (DATE)
-   `departure_time` (TIME)
-   `meeting_point` (VARCHAR)
-   `end_date` (DATE)
-   `end_time` (TIME)
-   `status` (VARCHAR)
-   `created_at` (DATETIME)

**Bảng `guides`:**

-   `id` (INT, PK)
-   `full_name` (VARCHAR)
-   `birth_date` (DATE)
-   `phone` (VARCHAR)
-   `email` (VARCHAR)
-   `avatar` (VARCHAR)
-   `specialty` (VARCHAR)
-   `languages` (JSON)
-   `certificates` (TEXT)
-   `experience` (TEXT)
-   `health_status` (VARCHAR)
-   `group_type` (VARCHAR) - nội địa/quốc tế/chuyên tuyến/chuyên đoàn
-   `created_at` (DATETIME)

**Bảng `tour_assignments`:**

-   `id` (INT, PK)
-   `departure_id` (INT, FK → tour_departures.id)
-   `guide_id` (INT, FK → guides.id)
-   `role` (VARCHAR) - HDV/tài xế/hậu cần
-   `status` (VARCHAR)
-   `assigned_at` (DATETIME)

### Deadline

Nộp trước buổi 5 (gửi qua email hoặc LMS)

---

## 📦 Kết quả mong đợi sau buổi học

-   ✅ Hiểu được cách thiết kế ERD
-   ✅ Nắm được các loại quan hệ (1-1, 1-nhiều, nhiều-nhiều)
-   ✅ Có ERD hoàn chỉnh cho module (ít nhất 2–3 bảng)
-   ✅ Xác định được Primary Key và Foreign Key
-   ✅ Sẵn sàng để giảng viên duyệt ở buổi tiếp theo

---

## 💬 Gợi ý giảng viên

### ⏱ Thời lượng gợi ý

-   Giới thiệu: 20 phút
-   ERD tổng thể: 25 phút
-   Hướng dẫn thiết kế: 25 phút
-   Thực hành nhóm: 20 phút
-   Tổng: ~90 phút

### 💡 Tips hướng dẫn

1. **Nhắc nhở đọc lại Spec**: ERD phải phù hợp với Spec đã viết

    - Xem lại phần "Tính năng chi tiết" trong Spec để xác định Entity
    - Xem lại Input/Output để xác định thuộc tính

2. **Sử dụng bảng phân quyền**: Tham khảo bảng phân quyền (Buổi 2) để biết các chức năng cần thiết

    - Ưu tiên các chức năng "Bắt buộc" trước
    - Chức năng "Mở rộng" có thể bổ sung sau

3. **Khuyến khích suy nghĩ kỹ về quan hệ**: Quan hệ sai sẽ ảnh hưởng đến code sau này

    - Hỏi: "1 Entity này có thể có nhiều Entity kia không?"
    - Ví dụ: 1 Customer có nhiều Booking? → 1-nhiều

4. **Gợi ý bảng cơ bản**: Mỗi module thường có ít nhất 1–2 bảng chính + bảng liên quan

    - Module Booking: `bookings`, `customers`, `booking_history`, `booking_participants`
    - Module Tour: `tours`, `tour_categories`, `tour_schedules`, `tour_images`
    - Module Điều hành: `tour_departures`, `guides`, `tour_assignments`, `tour_services`

5. **Lưu ý về chuẩn hóa**: Nhắc nhở về việc tránh lặp dữ liệu (normalization cơ bản)

    - Không lặp lại thông tin (ví dụ: không lưu tên khách hàng trong mỗi booking, mà dùng customer_id)
    - Tách bảng khi có quan hệ 1-nhiều (ví dụ: booking_history tách riêng khỏi bookings)

6. **Bổ sung role khách hàng**: Nhớ thêm bảng `customers` cho khách hàng (khác với `users` cho Admin)
    - `customers`: Khách hàng đặt tour (không cần đăng nhập)
    - `users`: Admin, nhân viên (cần đăng nhập)

### 🔍 Câu hỏi thường gặp

-   **Q: "Nhóm em cần bao nhiêu bảng?"**

    -   A: Tùy module, nhưng thường 2–5 bảng. Quan trọng là thiết kế đúng logic.
        -   Module Booking: 4–5 bảng (bookings, customers, booking_history, booking_participants)
        -   Module Tour: 3–4 bảng (tours, tour_categories, tour_schedules, tour_images)
        -   Module Điều hành: 4–5 bảng (tour_departures, guides, tour_assignments, tour_services)

-   **Q: "Có cần vẽ tất cả bảng trong hệ thống không?"**

    -   A: Không, chỉ cần vẽ các bảng liên quan đến module của nhóm. Có thể tham khảo ERD tổng thể để biết các bảng liên quan.

-   **Q: "Quan hệ nhiều-nhiều khó quá, có cách nào đơn giản hơn không?"**

    -   A: Có thể bắt đầu với quan hệ 1-nhiều trước, sau đó mở rộng sang nhiều-nhiều nếu cần. Ví dụ: Tour ↔ Guide có thể bắt đầu là 1-nhiều (1 tour có nhiều guide), sau đó mở rộng sang nhiều-nhiều nếu cần.

-   **Q: "Khách hàng (customer) và User (admin) có cần tách riêng không?"**

    -   A: **Có**, nên tách riêng:
        -   `customers`: Khách hàng đặt tour (không cần đăng nhập, chỉ cần thông tin liên hệ)
        -   `users`: Admin, nhân viên (cần đăng nhập, có quyền quản trị)
        -   Lý do: Khách hàng không cần đăng nhập, chỉ cần thông tin để đặt tour

-   **Q: "Làm sao biết cần bảng nào từ Spec?"**

    -   A: Xem lại phần "Tính năng chi tiết" trong Spec:
        -   Mỗi chức năng sẽ có Input/Output
        -   Input/Output → Xác định Entity cần thiết
        -   Ví dụ: "Tạo booking mới" → Input: Tour ID, thông tin khách → Cần bảng `bookings`, `customers`, `tours`

-   **Q: "Có cần làm bảng cho chức năng mở rộng không?"**

    -   A: Tùy vào mức độ ưu tiên. Nếu chắc chắn sẽ làm, nên thiết kế ngay. Nếu chưa chắc, có thể bổ sung sau khi code xong phần bắt buộc.

### 📝 Checklist đánh giá ERD

Giảng viên có thể dùng checklist này khi review ERD:

-   [ ] Có đủ các bảng cần thiết cho module (≥2 bảng)
-   [ ] Mỗi bảng có Primary Key
-   [ ] Quan hệ giữa các bảng rõ ràng và đúng logic
-   [ ] Foreign Key được xác định đúng
-   [ ] ERD dễ đọc, có ghi chú (nếu cần)

---

---

**📌 Lưu ý:** Buổi tiếp theo chúng ta sẽ học cách quản lý dự án với ClickUp và lập kế hoạch triển khai. Các nhóm nhớ nộp ERD đúng deadline để thầy kịp review nhé!

Chúc các em học tốt! 🎉
