# Buổi 6: Teamwork với Git & Quy trình Review code

Xin chào các em! 🎉

Để phát triển dự án nhóm một cách trơn tru, việc sử dụng các công cụ quản lý phiên bản là bắt buộc. Hôm nay thầy trò mình sẽ học cách làm việc nhóm chuyên nghiệp với Git và thiết lập quy trình duyệt mã nguồn (Code Review) kết hợp AI để kiểm tra chéo chất lượng code.

## 🎯 Mục tiêu buổi học

> **Thầy mong muốn sau buổi học này, các em sẽ đạt được:**

1. ✅ Hiểu tầm quan trọng của Git/GitHub trong làm việc nhóm dự án.
2. ✅ Nắm vững quy trình tạo nhánh (Branching) và gửi Pull Request.
3. ✅ Biết cách sử dụng AI để giải quyết nhanh các xung đột mã nguồn (Git Conflicts).

---

## 📋 Nội dung chính

> [!IMPORTANT]
> **Tài liệu học Git & GitHub chi tiết:**
> Môn học Dự án 1 chỉ tập trung vào ứng dụng thực hành Git trong làm việc nhóm. Để học toàn bộ kiến thức nền tảng, cài đặt và các lệnh Git từ A-Z, các em hãy tham khảo khóa học chuyên sâu tại đây nhé:
> 👉 **[Khóa học Git & GitHub Toàn diện](https://letrongdat.vercel.app/git/)**

### 1. Quy trình làm việc nhóm với Git Branching
Khi làm dự án theo nhóm, để tránh việc ghi đè code lên nhau gây lỗi hệ thống, các em cần tuân thủ quy trình sau:
1. **Tạo nhánh tính năng riêng**: Mỗi thành viên tự tạo nhánh riêng từ nhánh chính để làm việc:
   `git checkout -b feature/ten-tinh-nang`
2. **Commit và Push thường xuyên**: Commit các thay đổi nhỏ kèm message rõ nghĩa, sau đó đẩy lên GitHub:
   `git push origin feature/ten-tinh-nang`
3. **Tạo Pull Request (PR)**: Đệ trình yêu cầu gộp nhánh trên GitHub để Leader hoặc các thành viên khác tiến hành Review trước khi gộp vào nhánh chính `main`.

### 2. Sử dụng AI giải thích và sửa lỗi Git Conflicts
Trong quá trình gộp code (Merge), nếu hai thành viên cùng sửa đổi trên một dòng của một file, Git sẽ báo lỗi xung đột (Conflict). Lúc này, các em hãy copy đoạn code bị conflict chứa các ký tự đặc biệt (`<<<<<<<`, `=======`, `>>>>>>>`) và gửi cho AI hỗ trợ xử lý:

::: code-group
```markdown [Prompt xử lý xung đột Git]
Tôi đang gộp nhánh trong Git và gặp lỗi conflict ở file PHP sau.
Hãy đóng vai trò là chuyên gia Git, giải thích nguyên nhân gây ra conflict này và viết lại đoạn code PHP hoàn chỉnh đã gộp đúng logic của cả hai nhánh, loại bỏ các ký tự đánh dấu conflict của Git:

[Dán đoạn code PHP bị conflict vào đây]
```
:::

---

## 🛠️ Bài tập thực hành (Lab)
### Yêu cầu: Khởi tạo Repo nhóm và phân nhánh Git
1. Leader của nhóm khởi tạo kho chứa (Repository) trên GitHub và add các thành viên vào dự án.
2. Mỗi thành viên thực hiện clone repo về máy, tạo nhánh cá nhân, tạo một file test, commit và đẩy lên GitHub.
3. Tạo Pull Request và thực hiện review chéo lẫn nhau. Các em chỉ gộp nhánh khi code đã chạy thử nghiệm ổn định trên local nhé!
