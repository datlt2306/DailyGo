# Buổi 7: Triển khai mã nguồn bằng AI Agents

Xin chào các em! 🎉

Hôm nay thầy trò mình bước sang **Giai đoạn 3: Triển khai & Tích hợp**. Đây là lúc các em áp dụng sức mạnh của các AI Agents (Cursor, Bolt.new, Copilot, ChatGPT) để sinh mã nguồn PHP/MVC sạch và học cách kiểm soát chất lượng mã.

## 🎯 Mục tiêu buổi học

> **Thầy mong muốn sau buổi học này, các em sẽ đạt được:**

1. ✅ Cấu trúc dự án PHP chuẩn MVC để dễ dàng làm việc cùng AI Agents.
2. ✅ Thiết lập Prompt mẫu để sinh các file PHP Controller, Model và View tối ưu.
3. ✅ Kiểm soát và kiểm thử chất lượng mã nguồn do AI viết, tránh lỗi bảo mật nghiêm trọng.

---

## 📋 Nội dung chính

### 1. Không copy-paste mù quáng mã nguồn AI viết!
Lưu ý quan trọng từ thầy: **Mã nguồn do AI sinh ra có thể hoạt động nhưng chứa các lỗ hổng bảo mật nghiêm trọng (SQL Injection, XSS) hoặc không khớp với cấu trúc cơ sở dữ liệu thực tế của các em.** Các em phải là người đọc hiểu, cấu trúc và kiểm soát mã nguồn của mình.

### 2. Prompt mẫu để viết chức năng CRUD bằng PHP/PDO sạch
Các em hãy gửi cấu trúc bảng của mình cùng với Spec cho AI kèm theo prompt sau:

::: code-group
```markdown [Prompt viết code PHP MVC]
Hãy đóng vai trò là lập trình viên PHP chuyên nghiệp. Tôi có bảng SQL sau:
[Dán cấu trúc CREATE TABLE của bảng vào đây]

Hãy viết cho tôi một bộ code PHP hoàn chỉnh theo mô hình MVC sử dụng PDO để kết nối cơ sở dữ liệu thực hiện các chức năng:
1. Hiển thị danh sách phần tử (có phân trang và chống XSS).
2. Thêm mới phần tử (có validation dữ liệu đầu vào và sử dụng Prepared Statement để chống SQL Injection).
3. Xóa phần tử theo ID.
Hãy tách biệt rõ mã nguồn của Model (xử lý DB), Controller (xử lý logic) và View (giao diện hiển thị HTML/Tailwind).
```
:::

---

## 🛠️ Bài tập thực hành (Lab)
### Yêu cầu: Xây dựng chức năng đầu tiên của module bằng AI
1. Sử dụng AI Agent để sinh mã nguồn cho tính năng hiển thị danh sách của module nhóm các em.
2. Tích hợp code vào dự án, cấu trúc lại thư mục cho sạch sẽ và chạy thử nghiệm.
3. Kiểm tra xem code có sử dụng Prepared Statement (`$stmt->execute()`) để bảo mật không nhé!
