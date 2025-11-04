# Buổi 10 – Phát triển nâng cao

## 🎯 Mục tiêu học tập

- Hoàn thiện các chức năng cơ bản còn thiếu
- Tích hợp module với các module khác
- Thêm tính năng nâng cao (lọc, báo cáo, review...)
- Cải thiện UX/UI và code quality

---

## 📋 Nội dung chính trên lớp

### 1. Hướng dẫn tích hợp module (25 phút)

#### **Tích hợp là gì?**
- Kết nối module của nhóm với module của nhóm khác
- Ví dụ: Module Booking cần tích hợp với Module Tour và Module User

#### **Các cách tích hợp:**
1. **Tích hợp database**: Dùng chung bảng (users, tours...)
2. **Tích hợp API**: Gọi API của module khác (nếu có)
3. **Tích hợp giao diện**: Link giữa các trang

#### **Ví dụ tích hợp:**

**Module Booking ↔ Module Tour:**
- Booking cần lấy thông tin tour từ bảng `tours`
- Cần kiểm tra số chỗ còn lại của tour

**Module Booking ↔ Module User:**
- Booking cần lấy thông tin user đăng nhập
- Cần lưu booking với user_id

### 2. Tính năng nâng cao - Gợi ý (25 phút)

#### **Tính năng lọc và tìm kiếm:**
- Lọc tour theo giá, ngày, điểm đến
- Tìm kiếm nâng cao với nhiều điều kiện
- Pagination (phân trang)

#### **Tính năng báo cáo:**
- Báo cáo doanh thu theo tháng/năm
- Thống kê số lượng booking
- Xuất file Excel/PDF

#### **Tính năng đánh giá:**
- Đánh giá tour sau khi đi
- Xem đánh giá của khách hàng khác
- Phân loại đánh giá (5 sao)

#### **Tính năng nâng cao khác:**
- Gửi email thông báo
- Upload ảnh
- Validation form nâng cao
- Responsive mobile

### 3. Cải thiện UX/UI (20 phút)

#### **Nguyên tắc UX tốt:**
- Giao diện đơn giản, dễ dùng
- Feedback rõ ràng (thông báo thành công/lỗi)
- Loading state (hiển thị khi đang xử lý)
- Error handling (xử lý lỗi tốt)

#### **Cải thiện UI:**
- Màu sắc nhất quán
- Font chữ dễ đọc
- Spacing hợp lý
- Responsive trên mobile

### 4. Thảo luận nhóm (20 phút)
- Các nhóm thảo luận tính năng nâng cao sẽ làm
- Giảng viên hỗ trợ và gợi ý

---

## 🧠 Kiến thức trọng tâm / Giải thích

### Tích hợp module - Best practices

1. **Chuẩn hóa database**: Đảm bảo tên bảng, tên cột thống nhất
2. **Validation**: Kiểm tra dữ liệu trước khi lưu
3. **Error handling**: Xử lý lỗi khi tích hợp
4. **Testing**: Test kỹ tính năng tích hợp

### Tính năng nâng cao - Ưu tiên

1. **High priority**: Tính năng cần thiết cho demo
2. **Medium priority**: Tính năng làm đẹp, cải thiện UX
3. **Low priority**: Tính năng có thể làm sau

### Code quality - Checklist

- [ ] Code có comment
- [ ] Tên biến, hàm rõ ràng
- [ ] Không có code trùng lặp (DRY)
- [ ] Validation input
- [ ] Error handling
- [ ] SQL injection prevention

---

## 📘 Bài tập nhóm

### Cập nhật repo + mô tả module nâng cao trong README

#### **Yêu cầu:**

1. **Cập nhật README.md trong repo:**
   ```markdown
   # [Tên Module] - Tour Management System

   ## Tính năng cơ bản
   - [Liệt kê chức năng cơ bản đã làm]

   ## Tính năng nâng cao
   - [Liệt kê tính năng nâng cao đã/thực hiện]
     - Lọc tour theo [điều kiện]
     - Báo cáo doanh thu
     - Đánh giá tour
     - ...

   ## Tích hợp module
   - Tích hợp với Module Tour: [Mô tả]
   - Tích hợp với Module User: [Mô tả]
   - ...

   ## Hướng dẫn sử dụng
   - [Hướng dẫn ngắn gọn]

   ## Công nghệ sử dụng
   - PHP, MySQL, HTML, CSS, JavaScript
   - [Các thư viện/framework nếu có]
   ```

2. **Commit code tính năng nâng cao:**
   - Ít nhất **2 tính năng nâng cao** mới
   - Commit message rõ ràng: `feat: thêm tính năng [tên tính năng]`

3. **Cập nhật PROGRESS.md:**
   - Ghi chú các tính năng nâng cao đã làm
   - Ghi chú phần tích hợp với module khác

### Deadline
Cập nhật trong repo trước buổi 11

---

## 📦 Kết quả mong đợi sau buổi học

- ✅ Hoàn thiện các chức năng cơ bản còn thiếu
- ✅ Bắt đầu tích hợp với module khác
- ✅ Có ít nhất 1–2 tính năng nâng cao
- ✅ Code quality được cải thiện

---

## 💬 Gợi ý giảng viên

### ⏱ Thời lượng gợi ý
- Hướng dẫn tích hợp: 25 phút
- Tính năng nâng cao: 25 phút
- Cải thiện UX/UI: 20 phút
- Thảo luận: 20 phút
- Tổng: ~90 phút

### 💡 Tips hướng dẫn
1. **Khuyến khích tích hợp sớm**: Tích hợp sớm để phát hiện vấn đề sớm
2. **Gợi ý tính năng phù hợp**: Gợi ý tính năng phù hợp với module của từng nhóm
3. **Nhắc nhở về code quality**: Không chỉ làm tính năng, mà cần code sạch
4. **Hỗ trợ nhóm yếu**: Nếu nhóm yếu, tập trung hoàn thiện chức năng cơ bản trước

### 🔍 Câu hỏi thường gặp
- **Q: "Nhóm em chưa xong chức năng cơ bản, có nên làm tính năng nâng cao không?"**
  - A: Nên hoàn thiện chức năng cơ bản trước. Tính năng nâng cao chỉ làm khi cơ bản đã xong.

- **Q: "Làm sao tích hợp với module khác nếu không có code của họ?"**
  - A: Có thể dùng database chung, hoặc giả định API/interface sẽ có.

- **Q: "Tính năng nâng cao nào dễ làm nhất?"**
  - A: Lọc và tìm kiếm thường dễ làm. Báo cáo cần query phức tạp hơn.

---

**📌 Lưu ý:** Tuần 4 cần đạt ≥80% chức năng. Các nhóm nhớ tập trung hoàn thiện!
