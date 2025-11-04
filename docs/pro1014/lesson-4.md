# Buổi 4 – Thiết kế dữ liệu (ERD)

## 🎯 Mục tiêu học tập

- Hiểu khái niệm ERD (Entity Relationship Diagram) và vai trò trong thiết kế database
- Nắm được các mối quan hệ: 1-1, 1-nhiều, nhiều-nhiều
- Thiết kế được ERD cho module phụ trách
- Hiểu cách chuyển đổi từ Spec sang ERD

---

## 📋 Nội dung chính trên lớp

### 1. Giới thiệu ERD (20 phút)
- ERD là gì? Tại sao cần ERD?
- Các thành phần: Entity (Thực thể), Attribute (Thuộc tính), Relationship (Quan hệ)
- Ký hiệu cơ bản trong ERD

### 2. ERD tổng thể hệ thống Tour du lịch (25 phút)

Giảng viên trình bày ERD tổng thể:

#### **Các bảng chính:**
- `users` (Người dùng): id, email, password, full_name, phone, role
- `tours` (Tour): id, name, description, price, duration, start_date, end_date
- `bookings` (Đặt tour): id, user_id, tour_id, booking_date, status, total_price
- `tour_schedules` (Lịch trình tour): id, tour_id, day_number, activity, location
- `guides` (Hướng dẫn viên): id, name, phone, email, specialty
- `reviews` (Đánh giá): id, user_id, tour_id, rating, comment, created_at

#### **Các quan hệ:**
- User ↔ Booking: 1-nhiều (1 user có nhiều booking)
- Tour ↔ Booking: 1-nhiều (1 tour có nhiều booking)
- Tour ↔ Tour_Schedule: 1-nhiều (1 tour có nhiều lịch trình)
- User ↔ Review: 1-nhiều (1 user có nhiều review)
- Tour ↔ Review: 1-nhiều (1 tour có nhiều review)
- Tour ↔ Guide: nhiều-nhiều (1 tour có nhiều guide, 1 guide làm nhiều tour)

### 3. Hướng dẫn thiết kế ERD cho module (25 phút)

#### **Bước 1: Xác định các Entity**
- Đọc lại Spec, liệt kê các đối tượng chính
- Ví dụ: Module Booking → Entity: Booking, Tour, User, Payment

#### **Bước 2: Xác định thuộc tính (Attributes)**
- Mỗi Entity cần những thông tin gì?
- Xác định Primary Key (Khóa chính)
- Xác định Foreign Key (Khóa ngoại)

#### **Bước 3: Xác định quan hệ**
- Quan hệ 1-1: Mỗi bản ghi ở bảng A chỉ liên kết với 1 bản ghi ở bảng B
- Quan hệ 1-nhiều: Mỗi bản ghi ở bảng A có thể liên kết với nhiều bản ghi ở bảng B
- Quan hệ nhiều-nhiều: Cần bảng trung gian (junction table)

#### **Bước 4: Vẽ ERD**
- Có thể dùng công cụ: draw.io, Lucidchart, MySQL Workbench, hoặc vẽ tay

### 4. Thực hành nhóm (20 phút)
- Các nhóm thảo luận và thiết kế ERD cho module
- Giảng viên đi vòng hỗ trợ từng nhóm

---

## 🧠 Kiến thức trọng tâm / Giải thích

### ERD là gì?

**ERD (Entity Relationship Diagram)** là sơ đồ mô tả cấu trúc dữ liệu của hệ thống, bao gồm:
- **Entity (Thực thể)**: Đối tượng trong hệ thống (Ví dụ: User, Tour, Booking)
- **Attribute (Thuộc tính)**: Thông tin của Entity (Ví dụ: User có email, password, name)
- **Relationship (Quan hệ)**: Mối liên hệ giữa các Entity

### Các loại quan hệ

#### **1. Quan hệ 1-1 (One-to-One)**
- Mỗi bản ghi ở bảng A chỉ liên kết với 1 bản ghi ở bảng B
- Ví dụ: User ↔ Profile (1 user có 1 profile)

#### **2. Quan hệ 1-nhiều (One-to-Many)**
- Mỗi bản ghi ở bảng A có thể liên kết với nhiều bản ghi ở bảng B
- Ví dụ: Tour ↔ Booking (1 tour có nhiều booking)
- Bảng "nhiều" sẽ có Foreign Key trỏ về bảng "1"

#### **3. Quan hệ nhiều-nhiều (Many-to-Many)**
- Cần bảng trung gian (junction table)
- Ví dụ: Tour ↔ Guide (1 tour có nhiều guide, 1 guide làm nhiều tour)
- Bảng trung gian: `tour_guides` (tour_id, guide_id)

### Primary Key và Foreign Key

- **Primary Key (PK)**: Khóa chính, định danh duy nhất mỗi bản ghi
  - Ví dụ: `users.id`, `tours.id`
- **Foreign Key (FK)**: Khóa ngoại, tham chiếu đến Primary Key của bảng khác
  - Ví dụ: `bookings.user_id` → `users.id`

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

   | Bảng: bookings |
   |----------------|
   | id (INT, PK) |
   | user_id (INT, FK → users.id) |
   | tour_id (INT, FK → tours.id) |
   | booking_date (DATE) |
   | status (VARCHAR) |
   | total_price (DECIMAL) |

3. **Mô tả quan hệ**
   - Giải thích các quan hệ giữa các bảng
   - Ví dụ: "Booking có quan hệ 1-nhiều với User (1 user có nhiều booking)"

#### **Ví dụ ERD Module Booking:**

```
users (1) ────< (n) bookings (n) >──── (1) tours
                │
                │
                └──> (n) payments
```

### Deadline
Nộp trước buổi 5 (gửi qua email hoặc LMS)

---

## 📦 Kết quả mong đợi sau buổi học

- ✅ Hiểu được cách thiết kế ERD
- ✅ Nắm được các loại quan hệ (1-1, 1-nhiều, nhiều-nhiều)
- ✅ Có ERD hoàn chỉnh cho module (ít nhất 2–3 bảng)
- ✅ Xác định được Primary Key và Foreign Key
- ✅ Sẵn sàng để giảng viên duyệt ở buổi tiếp theo

---

## 💬 Gợi ý giảng viên

### ⏱ Thời lượng gợi ý
- Giới thiệu: 20 phút
- ERD tổng thể: 25 phút
- Hướng dẫn thiết kế: 25 phút
- Thực hành nhóm: 20 phút
- Tổng: ~90 phút

### 💡 Tips hướng dẫn
1. **Nhắc nhở đọc lại Spec**: ERD phải phù hợp với Spec đã viết
2. **Khuyến khích suy nghĩ kỹ về quan hệ**: Quan hệ sai sẽ ảnh hưởng đến code sau này
3. **Gợi ý bảng cơ bản**: Mỗi module thường có ít nhất 1–2 bảng chính + bảng liên quan
4. **Lưu ý về chuẩn hóa**: Nhắc nhở về việc tránh lặp dữ liệu (normalization cơ bản)

### 🔍 Câu hỏi thường gặp
- **Q: "Nhóm em cần bao nhiêu bảng?"**
  - A: Tùy module, nhưng thường 2–5 bảng. Quan trọng là thiết kế đúng logic.

- **Q: "Có cần vẽ tất cả bảng trong hệ thống không?"**
  - A: Không, chỉ cần vẽ các bảng liên quan đến module của nhóm. Có thể tham khảo ERD tổng thể.

- **Q: "Quan hệ nhiều-nhiều khó quá, có cách nào đơn giản hơn không?"**
  - A: Có thể bắt đầu với quan hệ 1-nhiều trước, sau đó mở rộng sang nhiều-nhiều nếu cần.

### 📝 Checklist đánh giá ERD

Giảng viên có thể dùng checklist này khi review ERD:

- [ ] Có đủ các bảng cần thiết cho module (≥2 bảng)
- [ ] Mỗi bảng có Primary Key
- [ ] Quan hệ giữa các bảng rõ ràng và đúng logic
- [ ] Foreign Key được xác định đúng
- [ ] ERD dễ đọc, có ghi chú (nếu cần)

---

**📌 Lưu ý:** Buổi tiếp theo giảng viên sẽ duyệt Spec + ERD. Các nhóm nhớ nộp đúng deadline!
