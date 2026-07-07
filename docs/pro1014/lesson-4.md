# Buổi 4: Thiết kế dữ liệu (ERD) & Prompt sinh SQL

Xin chào các em! 🎉

Hôm nay thầy trò mình bắt đầu bước sang **Giai đoạn 2: Thiết kế Dữ liệu**. Chúng ta sẽ dùng AI để chuyển đổi từ Spec sang sơ đồ quan hệ thực thể (ERD) và sinh mã SQL tạo bảng tự động.

## 🎯 Mục tiêu buổi học

> **Thầy mong muốn sau buổi học này, các em sẽ đạt được:**

1. ✅ Xác định đúng các bảng (Tables), khóa chính (Primary Key), khóa ngoại (Foreign Key) cho cơ sở dữ liệu.
2. ✅ Sử dụng Prompt để AI thiết kế cấu trúc quan hệ thực thể và sinh mã SQL tạo bảng chuẩn hóa.
3. ✅ Vẽ sơ đồ ERD trực quan bằng mã Mermaid.

---

## 📋 Nội dung chính

### 1. Chuyển đổi Spec sang thiết kế Cơ sở dữ liệu
Từ các trường dữ liệu được mô tả trong Spec ở buổi trước, thầy trò mình cần xác định các thực thể tương ứng để lưu vào MySQL:
* Ví dụ module Booking cần bảng: `bookings`, `booking_details`, `payments`.
* Xác định mối quan hệ: Một Booking có thể có nhiều Booking Details (quan hệ 1-N).

### 2. Prompt mẫu sinh cấu trúc bảng SQL DDL
Các em hãy copy bản Spec đã hoàn thiện ở buổi trước và đưa vào prompt này để AI sinh cấu trúc database:

::: code-group
```markdown [Prompt tạo cấu trúc Database]
Tôi có đặc tả chức năng sau:
[Dán nội dung Spec chức năng vào đây]

Hãy đóng vai trò là Chuyên gia Thiết kế Cơ sở dữ liệu:
1. Thiết kế các bảng cần thiết để lưu trữ dữ liệu này trong MySQL. Xác định rõ tên cột, kiểu dữ liệu (INT, VARCHAR, TEXT, DATETIME, DECIMAL), khóa chính, khóa ngoại, các ràng buộc (NOT NULL, UNIQUE).
2. Viết mã SQL DDL (CREATE TABLE) chuẩn, tối ưu, có thiết lập liên kết khóa ngoại đầy đủ.
3. Viết mã sơ đồ quan hệ ERD dưới dạng Mermaid diagram.
```
:::

---

## 🛠️ Bài tập thực hành (Lab)
### Yêu cầu: Tạo cơ sở dữ liệu và vẽ sơ đồ ERD cho nhóm
1. Chạy prompt trên để lấy sơ đồ ERD Mermaid và mã SQL tạo bảng cho module của nhóm.
2. Tạo thử cơ sở dữ liệu trên phpMyAdmin và chạy thử mã SQL xem có lỗi ràng buộc khóa ngoại nào không nhé!
