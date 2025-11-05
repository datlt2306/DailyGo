# Buổi 11 – Theo dõi tiến độ lần 2

> **Bài trước:** [Buổi 10: Phát triển nâng cao](./lesson-10.md)  
> **Bài tiếp theo:** [Buổi 12: Chuẩn bị demo hoàn chỉnh](./lesson-12.md)

## 🎯 Mục tiêu học tập

- Đánh giá tiến độ tuần 4
- Kiểm tra tính năng nâng cao và tích hợp module
- Phát hiện và xử lý lỗi
- Điều chỉnh kế hoạch cho tuần 5–6

---

## 📋 Nội dung chính trên lớp

### 1. Trình bày lỗi và cập nhật mới (50 phút)

#### **Quy trình:**
1. Mỗi nhóm trình bày (5 phút/nhóm):
   - Tính năng nâng cao đã làm
   - Tích hợp với module khác
   - Lỗi gặp phải và cách xử lý
   - Demo code (nếu có)

2. Giảng viên góp ý (2 phút/nhóm)

#### **Nội dung trình bày:**
- ✅ Tính năng nâng cao nào đã làm?
- ✅ Đã tích hợp với module nào?
- ✅ Gặp lỗi gì? Đã xử lý chưa?
- ✅ % hoàn thành hiện tại?

### 2. Giảng viên góp ý logic code & UI (25 phút)

#### **Kiểm tra logic code:**
- ✅ Logic nghiệp vụ có đúng không?
- ✅ Validation có đầy đủ không?
- ✅ Error handling có tốt không?
- ✅ SQL injection prevention?

#### **Kiểm tra UI:**
- ✅ Giao diện có đẹp không?
- ✅ Responsive trên mobile?
- ✅ UX có tốt không?
- ✅ Feedback rõ ràng không?

#### **Gợi ý cải thiện:**
- Cải thiện validation
- Thêm error message rõ ràng
- Cải thiện UI/UX
- Tối ưu code

### 3. Thảo luận và giải đáp (15 phút)
- Các nhóm hỏi về khó khăn
- Giảng viên hướng dẫn giải quyết
- Điều chỉnh kế hoạch nếu cần

---

## 🧠 Kiến thức trọng tâm / Giải thích

### Debug và xử lý lỗi

#### **Các loại lỗi thường gặp:**
1. **Lỗi syntax**: Lỗi cú pháp PHP, JavaScript
2. **Lỗi logic**: Code chạy nhưng kết quả sai
3. **Lỗi database**: Query sai, thiếu dữ liệu
4. **Lỗi tích hợp**: Không kết nối được với module khác

#### **Cách xử lý:**
1. **Đọc error message**: Thường có thông tin về lỗi
2. **Check log**: Xem PHP error log, browser console
3. **Debug step by step**: Test từng phần một
4. **Hỏi giảng viên/TA**: Nếu không tự giải quyết được

### Code review - Checklist

- [ ] Code chạy được, không có lỗi
- [ ] Logic đúng
- [ ] Validation đầy đủ
- [ ] Error handling tốt
- [ ] Code có comment
- [ ] UI đẹp, UX tốt

---

## 📘 Bài tập nhóm

### Cập nhật log commit + báo cáo fix lỗi

#### **Yêu cầu:**

1. **Cập nhật PROGRESS.md:**
   ```markdown
   # Tiến độ tuần 4 - Buổi 11

   ## Tổng quan
   - % Hoàn thành: [X]%
   - Tính năng nâng cao đã làm: [Liệt kê]
   - Tích hợp với module: [Liệt kê]

   ## Tính năng nâng cao
   - [x] Tính năng 1: [Tên] - [Mô tả ngắn]
   - [x] Tính năng 2: [Tên] - [Mô tả ngắn]

   ## Tích hợp module
   - [x] Tích hợp với Module Tour: [Mô tả]
   - [ ] Tích hợp với Module User: [Đang làm]

   ## Lỗi đã fix
   - [x] Lỗi 1: [Mô tả] - Fix: [Cách xử lý]
   - [x] Lỗi 2: [Mô tả] - Fix: [Cách xử lý]

   ## Lỗi còn lại
   - [ ] Lỗi 1: [Mô tả] - Dự kiến fix: [Khi nào]

   ## Kế hoạch tuần 5–6
   - [ ] Hoàn thiện tích hợp
   - [ ] Chuẩn bị demo
   - [ ] Làm slide và video
   ```

2. **Commit code fix lỗi:**
   - Commit với message: `fix: [mô tả lỗi đã fix]`
   - Ít nhất **2 commit fix lỗi**

3. **Báo cáo fix lỗi** (tùy chọn):
   - File `BUG_REPORT.md` trong repo
   - Liệt kê lỗi đã gặp và cách fix

### Deadline
Cập nhật trong repo trước buổi 12

---

## 📦 Kết quả mong đợi sau buổi học

- ✅ Đánh giá được tiến độ tuần 4
- ✅ Có tính năng nâng cao và tích hợp module
- ✅ Fix được các lỗi quan trọng
- ✅ Có kế hoạch rõ ràng cho tuần 5–6

---

## 💬 Gợi ý giảng viên

### ⏱ Thời lượng gợi ý
- Trình bày lỗi và cập nhật: 50 phút (5 phút/nhóm × 10 nhóm)
- Góp ý code & UI: 25 phút
- Thảo luận: 15 phút
- Tổng: ~90 phút

### 💡 Tips hướng dẫn
1. **Tạo checklist code review**: Để đánh giá code nhanh và đầy đủ
2. **Khuyến khích fix lỗi sớm**: Fix lỗi sớm để không ảnh hưởng demo
3. **Nhắc nhở về demo**: Tuần 5–6 cần chuẩn bị demo, cần hoàn thiện sớm
4. **Hỗ trợ nhóm yếu**: Nếu nhóm còn nhiều lỗi, cần hỗ trợ ngay

### 🔍 Câu hỏi thường gặp
- **Q: "Nhóm em còn nhiều lỗi, có kịp demo không?"**
  - A: Cần ưu tiên fix lỗi quan trọng trước. Lỗi nhỏ có thể để sau.

- **Q: "Làm sao biết lỗi nào quan trọng?"**
  - A: Lỗi ảnh hưởng đến chức năng chính là quan trọng. Lỗi UI nhỏ có thể để sau.

- **Q: "Nếu không fix được lỗi, có bị trừ điểm không?"**
  - A: Tùy mức độ lỗi. Nếu lỗi nghiêm trọng ảnh hưởng demo thì sẽ bị trừ điểm.

---

**📌 Lưu ý:** Buổi tiếp theo sẽ chuẩn bị demo. Các nhóm nhớ hoàn thiện code và fix lỗi quan trọng!
