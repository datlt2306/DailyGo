# Buổi 3: Viết Project Spec với sự hỗ trợ của AI

Xin chào các em! 🎉

Hôm nay thầy trò mình sẽ hoàn thiện bước cuối cùng của Giai đoạn 1: Tạo tài liệu Đặc tả Kỹ thuật dự án (Project Specification - Spec) có cấu trúc chuẩn bằng cách viết Prompt tối ưu.

## 🎯 Mục tiêu buổi học

> **Thầy mong muốn sau buổi học này, các em sẽ đạt được:**

1. ✅ Hiểu cấu trúc một tài liệu Spec chuẩn (giao diện, logic nghiệp vụ, các ràng buộc dữ liệu).
2. ✅ Áp dụng Prompt mẫu để AI tự động soạn thảo bản nháp Spec chi tiết cho từng trang web/endpoint.
3. ✅ Hoàn thành giai đoạn phân tích đặc tả để sẵn sàng chuyển sang thiết kế cơ sở dữ liệu.

---

## 📋 Nội dung chính

### 1. Tài liệu Spec là gì?
Tài liệu Spec mô tả chi tiết cách hệ thống hoạt động ở mức kỹ thuật:
* **Giao diện (UI)**: Trang gồm những ô nhập liệu gì, nút bấm nào.
* **Xử lý phía Server (Backend)**: Khi ấn nút thì server kiểm tra điều kiện gì, lưu thông tin thế nào vào DB.
* **Thông báo lỗi**: Các ràng buộc dữ liệu (ví dụ: ngày đặt phải lớn hơn ngày hiện tại, email phải đúng định dạng).

### 2. Prompt mẫu để viết Spec chuyên nghiệp
Các em hãy chọn một chức năng cụ thể và gửi prompt sau cho AI để nhận về bản Spec chi tiết:

::: code-group
```markdown [Prompt viết tài liệu Spec]
Hãy đóng vai trò là System Architect. Hãy viết tài liệu Đặc tả kỹ thuật (Specification) cho chức năng: "[Điền tên chức năng, ví dụ: Đăng ký tài khoản]".
Yêu cầu mô tả chi tiết:
1. Thiết kế UI: Gồm các trường thông tin nào (Input type, Placeholder, validation rules).
2. Quy trình xử lý Server-side (PHP): Các bước validate dữ liệu đầu vào, mã hóa mật khẩu, kiểm tra trùng lặp email trong DB, và thông báo phản hồi (JSON response).
3. Các trường hợp biên lỗi (Edge Cases) cần bắt lỗi và mã lỗi HTTP tương ứng trả về.
```
:::

---

## 🛠️ Bài tập thực hành (Lab)
### Yêu cầu: Viết tài liệu Spec chi tiết cho module của nhóm
1. Sử dụng kết quả sinh từ AI để hoàn thiện tối thiểu 2 trang Spec cho 2 chức năng nghiệp vụ phức tạp nhất của module nhóm các em.
2. Lưu vào file `Specification_Module_[Tên_Nhóm].md` để chuẩn bị nộp cho thầy duyệt nhé!
