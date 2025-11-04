# Buổi 3 – Viết Project Specification (Spec)

## 🎯 Mục tiêu học tập

- Hiểu cấu trúc và nội dung của tài liệu Project Specification
- Biết cách viết Spec module chi tiết, rõ ràng
- Hoàn thành Spec module (2–3 trang) để chuẩn bị thiết kế ERD
- Nắm được các phần quan trọng: người dùng, chức năng, luồng nghiệp vụ

---

## 📋 Nội dung chính trên lớp

### 1. Giới thiệu Project Specification (15 phút)
- Spec là gì? Tại sao cần Spec?
- Vai trò của Spec trong quy trình phát triển
- Mối liên hệ: Use Case → Spec → ERD → Code

### 2. Cấu trúc SPEC rút gọn (30 phút)

Giảng viên trình bày cấu trúc Spec module:

```
1. Giới thiệu module & mục tiêu
2. Người dùng của module (User/Admin/Staff)
3. Tính năng chi tiết (CRUD, tìm kiếm, lọc, xuất báo cáo…)
4. Luồng nghiệp vụ (Workflow)
5. Yêu cầu phi chức năng (nếu có)
```

### 3. Hướng dẫn chi tiết từng phần (30 phút)

#### **Phần 1: Giới thiệu module & mục tiêu**
- Tên module
- Mục tiêu module đạt được (2–3 câu)
- Phạm vi module (bao gồm gì, không bao gồm gì)

#### **Phần 2: Người dùng của module**
- Liệt kê các Actor và quyền hạn:
  - User: Xem tour, đặt tour
  - Admin: Quản lý toàn bộ module
  - Staff: Xử lý một số nghiệp vụ cụ thể

#### **Phần 3: Tính năng chi tiết**
- Liệt kê từng chức năng dựa trên Use Case đã viết
- Mô tả rõ: Input, Output, Xử lý
- Ví dụ: 
  - "Thêm tour mới: Admin nhập thông tin tour → Lưu vào database → Hiển thị thông báo thành công"

#### **Phần 4: Luồng nghiệp vụ (Workflow)**
- Mô tả luồng hoạt động chính của module
- Có thể dùng text hoặc sơ đồ đơn giản
- Ví dụ: "Khách hàng đặt tour → Admin duyệt → Khách hàng thanh toán → Hoàn tất"

### 4. Ví dụ Spec mẫu (15 phút)
Giảng viên trình bày 1–2 trang Spec mẫu của module đơn giản

---

## 🧠 Kiến thức trọng tâm / Giải thích

### Project Specification là gì?

**Spec** là tài liệu mô tả chi tiết về module sẽ được xây dựng, bao gồm:
- Chức năng cụ thể
- Người dùng và quyền hạn
- Luồng nghiệp vụ
- Yêu cầu kỹ thuật

### Tại sao cần Spec?

- ✅ Làm rõ yêu cầu trước khi code (tránh làm sai, làm thiếu)
- ✅ Đồng bộ hiểu biết giữa các thành viên nhóm
- ✅ Làm cơ sở để thiết kế database (ERD)
- ✅ Giảng viên dễ dàng review và góp ý

### Mối liên hệ Use Case → Spec

- **Use Case**: Mô tả TỪNG chức năng cụ thể
- **Spec**: Tổng hợp TẤT CẢ chức năng, bổ sung thêm người dùng, workflow, yêu cầu

### Phân biệt các loại chức năng

1. **CRUD** (Create, Read, Update, Delete):
   - Thêm, xem, sửa, xóa dữ liệu

2. **Tìm kiếm & Lọc**:
   - Tìm kiếm theo từ khóa
   - Lọc theo điều kiện (giá, ngày, điểm đến…)

3. **Báo cáo & Thống kê**:
   - Xuất báo cáo doanh thu
   - Thống kê số lượng booking theo tháng

4. **Tích hợp**:
   - Kết nối với module khác (Booking ↔ Tour ↔ User)

---

## 📘 Bài tập nhóm

### Hoàn thành Spec module (2–3 trang)

Tạo file **.docx** hoặc **.pdf** với cấu trúc:

#### **1. Giới thiệu module & mục tiêu**
- Tên module
- Mục tiêu module
- Phạm vi module

#### **2. Người dùng của module**
- Bảng liệt kê Actor và quyền hạn:

| Actor | Quyền hạn |
|-------|-----------|
| Khách hàng (User) | Xem tour, đặt tour, xem lịch sử |
| Quản trị viên (Admin) | Quản lý toàn bộ module |

#### **3. Tính năng chi tiết**

Liệt kê các tính năng (dựa trên Use Case đã viết):

**3.1. Quản lý Tour**
- Thêm tour mới
- Sửa thông tin tour
- Xóa tour
- Xem danh sách tour

**3.2. Tìm kiếm & Lọc**
- Tìm kiếm tour theo từ khóa
- Lọc tour theo giá, điểm đến, ngày đi

**3.3. [Các tính năng khác...]**

#### **4. Luồng nghiệp vụ (Workflow)**

Mô tả luồng hoạt động chính (có thể kèm sơ đồ đơn giản):

```
1. Khách hàng xem danh sách tour
2. Chọn tour và đặt tour
3. Admin duyệt đơn đặt tour
4. Khách hàng thanh toán
5. Hệ thống cập nhật trạng thái và gửi xác nhận
```

#### **5. Yêu cầu phi chức năng (nếu có)**
- Giao diện responsive
- Hỗ trợ đa ngôn ngữ (nếu có)
- Bảo mật thông tin khách hàng

### Yêu cầu format

- ✅ Độ dài: 2–3 trang A4
- ✅ Font: Times New Roman hoặc Arial, size 12–14
- ✅ Có mục lục (nếu dài hơn 3 trang)
- ✅ Đánh số trang
- ✅ Header: Tên nhóm, Tên module
- ✅ Footer: Ngày nộp

### Deadline
Nộp trước buổi 4 (gửi qua email hoặc LMS)

---

## 📦 Kết quả mong đợi sau buổi học

- ✅ Hoàn thành Spec module đầy đủ (2–3 trang)
- ✅ Liệt kê rõ các chức năng sẽ triển khai
- ✅ Xác định được người dùng và quyền hạn
- ✅ Mô tả được luồng nghiệp vụ chính
- ✅ Sẵn sàng để thiết kế ERD ở tuần 2

---

## 💬 Gợi ý giảng viên

### ⏱ Thời lượng gợi ý
- Giới thiệu: 15 phút
- Cấu trúc Spec: 30 phút
- Hướng dẫn chi tiết: 30 phút
- Ví dụ mẫu: 15 phút
- Tổng: ~90 phút

### 💡 Tips hướng dẫn
1. **Nhắc nhở sử dụng Use Case**: Spec nên dựa trên Use Case đã viết ở buổi 2
2. **Khuyến khích chi tiết**: Spec càng chi tiết, thiết kế ERD và code càng dễ
3. **Gợi ý tham khảo**: Có thể tham khảo các website tour du lịch thực tế để có ý tưởng
4. **Lưu ý về tích hợp**: Nhắc nhở các nhóm nghĩ đến phần tích hợp với module khác

### 🔍 Câu hỏi thường gặp
- **Q: "Spec và Use Case khác nhau như thế nào?"**
  - A: Use Case mô tả TỪNG chức năng, Spec TỔNG HỢP tất cả chức năng và bổ sung thêm người dùng, workflow.

- **Q: "Spec có cần quá chi tiết về kỹ thuật không?"**
  - A: Không cần quá chi tiết về code, nhưng cần rõ về chức năng và luồng nghiệp vụ.

- **Q: "Nhóm em có thể thay đổi Spec sau này không?"**
  - A: Có thể, nhưng phải thông báo với giảng viên. Tốt nhất là suy nghĩ kỹ trước khi viết Spec.

### 📝 Checklist đánh giá Spec

Giảng viên có thể dùng checklist này khi review Spec:

- [ ] Có đầy đủ 4 phần chính (Giới thiệu, Người dùng, Tính năng, Workflow)
- [ ] Liệt kê đủ các tính năng (≥5 tính năng)
- [ ] Mô tả rõ người dùng và quyền hạn
- [ ] Luồng nghiệp vụ logic và rõ ràng
- [ ] Format đúng yêu cầu (2–3 trang, có header/footer)

---

**📌 Lưu ý:** Tuần 2 sẽ học thiết kế ERD. Các nhóm nhớ nộp Spec đúng deadline để giảng viên kịp review!
