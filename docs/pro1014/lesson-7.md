# Buổi 7 – Lập kế hoạch triển khai

> **Bài trước:** [Buổi 6: Giới thiệu Git & teamwork](./lesson-6.md)  
> **Bài tiếp theo:** [Buổi 8: Theo dõi tiến độ lần 1](./lesson-8.md)

## 🎯 Mục tiêu học tập

- Biết cách lập kế hoạch triển khai module chi tiết
- Phân công công việc rõ ràng cho từng thành viên
- Xác định được timeline và deadline cho từng phần
- Hiểu cách ước lượng thời gian và độ phức tạp

---

## 📋 Nội dung chính trên lớp

### 1. Giới thiệu lập kế hoạch triển khai (15 phút)
- Tại sao cần lập kế hoạch?
- Các thành phần của kế hoạch: Task, Timeline, Assignee, Priority
- Ví dụ kế hoạch triển khai module đơn giản

### 2. Phân tích module thành các task (30 phút)

#### **Các bước phân tích:**
1. **Liệt kê tất cả chức năng** từ Spec
2. **Chia nhỏ mỗi chức năng** thành các task cụ thể
3. **Ước lượng thời gian** cho mỗi task
4. **Xác định phụ thuộc** giữa các task

#### **Ví dụ: Module Booking**

**Chức năng: Đặt tour trực tuyến**

Chia thành các task:
- Task 1: Tạo database schema (booking table) - 2 giờ
- Task 2: Tạo form đặt tour (HTML/CSS) - 4 giờ
- Task 3: Validate form (JavaScript) - 2 giờ
- Task 4: Xử lý submit form (PHP) - 4 giờ
- Task 5: Lưu booking vào database - 2 giờ
- Task 6: Gửi email xác nhận - 3 giờ
- Task 7: Test chức năng đặt tour - 2 giờ

**Tổng: ~19 giờ**

### 3. Phân công công việc (20 phút)

#### **Nguyên tắc phân công:**
- Dựa trên vai trò: Developer làm code, Tester làm test, Documenter làm tài liệu
- Dựa trên kỹ năng: Frontend giỏi → làm HTML/CSS/JS, Backend giỏi → làm PHP
- Cân bằng khối lượng: Không để 1 người làm quá nhiều

#### **Ví dụ phân công:**

| Task | Assignee | Thời gian | Deadline |
|------|----------|-----------|----------|
| Tạo database schema | Developer A | 2 giờ | Tuần 3 |
| Form đặt tour (HTML/CSS) | Developer B | 4 giờ | Tuần 3 |
| Validate form (JS) | Developer B | 2 giờ | Tuần 3 |
| Xử lý submit (PHP) | Developer A | 4 giờ | Tuần 3 |
| Lưu vào database | Developer A | 2 giờ | Tuần 3 |
| Gửi email xác nhận | Developer C | 3 giờ | Tuần 3 |
| Test | Tester | 2 giờ | Tuần 3 |

### 4. Tạo timeline tổng thể (15 phút)

#### **Timeline 3 tuần:**

**Tuần 3 (Tuần này):**
- Setup môi trường (XAMPP, database)
- Tạo database schema
- Xây dựng giao diện cơ bản

**Tuần 4:**
- Hoàn thiện chức năng chính
- Tích hợp module
- Test và sửa lỗi

**Tuần 5–6:**
- Hoàn thiện tính năng nâng cao
- Chuẩn bị demo và báo cáo

### 5. Giảng viên duyệt kế hoạch từng nhóm (10 phút)
- Giảng viên review kế hoạch
- Góp ý về timeline và phân công

---

## 🧠 Kiến thức trọng tâm / Giải thích

### Ước lượng thời gian

**Công thức đơn giản:**
```
Thời gian ước lượng = Thời gian lý tưởng × 1.5 (buffer)
```

**Yếu tố ảnh hưởng:**
- Độ phức tạp của task
- Kinh nghiệm của người làm
- Rủi ro (bug, thay đổi yêu cầu)

### Ưu tiên task

1. **High Priority (Cao)**: Task quan trọng, ảnh hưởng đến chức năng chính
2. **Medium Priority (Trung bình)**: Task quan trọng nhưng không cấp thiết
3. **Low Priority (Thấp)**: Task có thể làm sau

### Phụ thuộc giữa task

- **Task A phụ thuộc Task B**: Phải hoàn thành B trước mới làm được A
- Ví dụ: "Xử lý submit form" phụ thuộc "Tạo database schema"

---

## 📘 Bài tập nhóm

### Nộp bảng phân công & tiến độ

Tạo file **Excel hoặc Google Sheets** với nội dung:

#### **Sheet 1: Danh sách Task**

| STT | Task | Mô tả | Assignee | Thời gian (giờ) | Deadline | Priority | Status | Ghi chú |
|-----|------|-------|----------|-----------------|----------|----------|--------|---------|
| 1 | Tạo database schema | Tạo bảng booking, payment | Nguyễn Văn A | 2 | Tuần 3 | High | Chưa bắt đầu | |
| 2 | Form đặt tour | HTML/CSS form đặt tour | Trần Thị B | 4 | Tuần 3 | High | Chưa bắt đầu | |
| ... | ... | ... | ... | ... | ... | ... | ... | ... |

**Cột Status:**
- Chưa bắt đầu
- Đang làm
- Hoàn thành
- Blocked (bị chặn)

#### **Sheet 2: Timeline tổng thể**

| Tuần | Công việc chính | Kết quả mong đợi | % Hoàn thành |
|------|-----------------|------------------|--------------|
| Tuần 3 | Setup, Database, Giao diện cơ bản | Database và giao diện chạy được | 30% |
| Tuần 4 | Chức năng chính, Tích hợp | ≥80% chức năng hoạt động | 80% |
| Tuần 5–6 | Hoàn thiện, Demo, Báo cáo | 100% chức năng | 100% |

#### **Sheet 3: Phân công chi tiết theo thành viên**

| Thành viên | Vai trò | Task được giao | Tổng thời gian (giờ) |
|------------|---------|----------------|---------------------|
| Nguyễn Văn A | Developer (Backend) | Tạo database, Xử lý PHP | 15 |
| Trần Thị B | Developer (Frontend) | HTML/CSS, JavaScript | 12 |
| Lê Văn C | Developer (Full-stack) | Tích hợp, Email | 10 |
| Phạm Thị D | Tester | Test tất cả chức năng | 8 |

### Yêu cầu format

- ✅ File Excel hoặc Google Sheets
- ✅ Có ít nhất 3 sheet như trên
- ✅ Cập nhật Status hàng tuần
- ✅ Tính tổng thời gian và % hoàn thành

### Deadline
Nộp trước buổi 8 (gửi qua email hoặc LMS)

---

## 📦 Kết quả mong đợi sau buổi học

- ✅ Có kế hoạch triển khai chi tiết với timeline rõ ràng
- ✅ Phân công công việc cụ thể cho từng thành viên
- ✅ Ước lượng được thời gian cho từng task
- ✅ Bắt đầu code từ buổi này

---

## 💬 Gợi ý giảng viên

### ⏱ Thời lượng gợi ý
- Giới thiệu: 15 phút
- Phân tích task: 30 phút
- Phân công: 20 phút
- Timeline: 15 phút
- Duyệt kế hoạch: 10 phút
- Tổng: ~90 phút

### 💡 Tips hướng dẫn
1. **Khuyến khích chia nhỏ task**: Task càng nhỏ, càng dễ quản lý và ước lượng
2. **Nhắc nhở về buffer**: Thời gian thực tế thường nhiều hơn ước lượng
3. **Gợi ý công cụ**: Có thể dùng Trello, Asana, hoặc GitHub Projects để quản lý task
4. **Lưu ý về phụ thuộc**: Nhắc nhở các nhóm xác định phụ thuộc để tránh block

### 🔍 Câu hỏi thường gặp
- **Q: "Làm sao để ước lượng thời gian chính xác?"**
  - A: Dựa vào kinh nghiệm và độ phức tạp. Nếu không chắc, ước lượng rộng hơn một chút.

- **Q: "Nếu task bị trễ deadline, phải làm sao?"**
  - A: Báo cáo với Leader và giảng viên ngay. Có thể điều chỉnh lại kế hoạch.

- **Q: "Một người có thể làm nhiều task cùng lúc không?"**
  - A: Nên tập trung vào 1–2 task để đảm bảo chất lượng. Không nên làm quá nhiều task cùng lúc.

### 📝 Checklist đánh giá kế hoạch

Giảng viên có thể dùng checklist này:

- [ ] Có đủ các task cần thiết (≥10 task)
- [ ] Mỗi task có mô tả rõ ràng
- [ ] Phân công đều cho các thành viên
- [ ] Timeline hợp lý và khả thi
- [ ] Có ưu tiên và phụ thuộc giữa task
- [ ] Tổng thời gian không quá nhiều so với thời gian có

---

**📌 Lưu ý:** Bắt đầu code từ buổi này. Các nhóm nhớ cập nhật Status task hàng tuần!
