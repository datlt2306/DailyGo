# Buổi 2: Phân tích Use Case bằng Prompting

Xin chào các em! 🎉

Hôm nay thầy trò mình sẽ học cách chuyển đổi các tính năng trong Proposal thành sơ đồ Use Case và tài liệu mô tả luồng nghiệp vụ chi tiết sử dụng AI.

## 🎯 Mục tiêu buổi học

> **Thầy mong muốn sau buổi học này, các em sẽ đạt được:**

1. ✅ Xác định đúng các Actor (Tác nhân) và Use Case (Chức năng) cho module của mình.
2. ✅ Thiết lập Prompting hiệu quả để AI sinh tài liệu mô tả luồng nghiệp vụ (Main flow, Alternative flow).
3. ✅ Vẽ sơ đồ Use Case chuẩn chỉnh bằng mã Mermaid.

---

## 📋 Nội dung chính

### 1. Actor và Use Case là gì?
* **Actor**: Người dùng hoặc hệ thống bên ngoài tương tác với hệ thống của các em (ví dụ: Khách hàng, Nhân viên, Hệ thống thanh toán).
* **Use Case**: Một chức năng cụ thể mà Actor thực hiện trên hệ thống để đạt mục đích (ví dụ: Đặt tour, Đăng nhập, Hủy tour).

### 2. Sử dụng AI tạo đặc tả Use Case chi tiết
Để viết luồng xử lý chi tiết (như điều kiện cần, các bước thực hiện, xử lý lỗi khi người dùng nhập sai), các em hãy sử dụng Prompt chuyên sâu sau:

::: code-group
```markdown [Prompt đặc tả luồng Use Case]
Hãy đóng vai trò là kỹ sư hệ thống. Tôi có Use Case: "[Ví dụ: Đặt Tour Du Lịch]". 
Hãy viết tài liệu đặc tả Use Case chi tiết cho chức năng này bao gồm:
1. Actor chính.
2. Tiền điều kiện (Pre-conditions).
3. Luồng xử lý chính (Main Flow) gồm các bước tương tác giữa người dùng và hệ thống.
4. Các luồng rẽ nhánh/lỗi (Alternative Flows) như: Hết chỗ, thông tin nhập trống, lỗi thanh toán.
5. Hậu điều kiện (Post-conditions).
Định dạng câu trả lời bằng Markdown sạch sẽ.
```
:::

### 3. Vẽ sơ đồ Use Case bằng mã Mermaid
Các em có thể yêu cầu AI vẽ sơ đồ Use Case bằng Mermaid để nhúng trực tiếp vào file tài liệu:

```mermaid
usecaseDiagram
    actor KhachHang
    actor Admin
    
    KhachHang --> (Xem danh sach Tour)
    KhachHang --> (Dat Tour)
    KhachHang --> (Thanh toan)
    
    Admin --> (Quan ly Tour)
    Admin --> (Duyet Booking)
```

---

## 🛠️ Bài tập thực hành (Lab)
### Yêu cầu: Đặc tả Use Case cho các chức năng chính của nhóm
1. Sử dụng Prompt mẫu để tạo đặc tả cho ít nhất 3 Use Case quan trọng trong module của nhóm các em.
2. Lưu các nội dung đặc tả này vào tài liệu phân tích hệ thống của nhóm.
