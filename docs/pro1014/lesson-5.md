# Buổi 5: Thiết kế DB nâng cao & AI Sinh Mock Data

Xin chào các em! 🎉

Hôm nay thầy trò mình sẽ học cách chuẩn hóa dữ liệu nâng cao (tránh dư thừa dữ liệu) và sử dụng AI sinh các dữ liệu giả lập (Seed/Mock data) tiếng Việt phong phú để chạy thử nghiệm dự án.

## 🎯 Mục tiêu buổi học

> **Thầy mong muốn sau buổi học này, các em sẽ đạt được:**

1. ✅ Hiểu cơ bản về chuẩn hóa dữ liệu (1NF, 2NF, 3NF).
2. ✅ Thiết kế Prompt yêu cầu AI sinh mã SQL `INSERT` chứa hàng chục dòng dữ liệu tiếng Việt ngẫu nhiên, thực tế.
3. ✅ Nhập thành công dữ liệu mẫu vào MySQL phục vụ lập trình và kiểm thử.

---

## 📋 Nội dung chính

### 1. Vai trò quan trọng của Seed Data trong kiểm thử
Khi lập trình, nếu cơ sở dữ liệu trống rỗng, các em sẽ rất khó để kiểm tra xem chức năng hiển thị danh sách, phân trang, tìm kiếm có hoạt động đúng hay không. AI giúp các em tạo ra hàng trăm dòng dữ liệu thực tế chỉ trong vài giây.

### 2. Prompt mẫu sinh dữ liệu mẫu tiếng Việt bằng SQL
Các em hãy sử dụng prompt sau, điều chỉnh cấu trúc bảng tương ứng của nhóm mình:

::: code-group
```markdown [Prompt sinh dữ liệu mẫu]
Hãy đóng vai trò là kỹ sư phát triển cơ sở dữ liệu. Tôi có bảng SQL sau:
[Dán mã CREATE TABLE của bảng cần tạo dữ liệu vào đây]

Hãy viết mã SQL INSERT INTO để tạo ra 15 dòng dữ liệu mẫu thực tế. 
Yêu cầu:
1. Dữ liệu phải bằng tiếng Việt có dấu, nội dung thực tế (Ví dụ nếu là tên người thì dùng tên Việt Nam như Nguyễn Văn A, Trần Thị B; nếu là tour thì dùng tên các địa danh Việt Nam thực tế).
2. Các giá trị ngày tháng, tiền tệ phải hợp lệ và logic (ví dụ ngày đặt phải nhỏ hơn ngày đi).
3. Đảm bảo mã SQL chạy được ngay trên MySQL.
```
:::

---

## 🛠️ Bài tập thực hành (Lab)
### Yêu cầu: Chuẩn bị dữ liệu Mock cho toàn bộ các bảng của nhóm
1. Tạo file `seed_data_[Tên_Nhóm].sql` chứa các lệnh INSERT được tạo từ AI cho tất cả các bảng trong module của nhóm các em.
2. Thực thi file SQL này trên database của nhóm để chuẩn bị sẵn sàng dữ liệu cho phần lập trình nhé!
