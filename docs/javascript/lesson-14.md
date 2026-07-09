# Buổi 14: Thực hành chuẩn hóa dữ liệu

Xin chào các em! 🎉

Hôm nay chúng ta sẽ cùng nhau thực hành viết các hàm lọc, chuẩn hóa định dạng dữ liệu đầu vào thu thập từ người dùng (như họ tên, số điện thoại, lọc từ cấm).

## 🎯 Mục tiêu buổi học
> **Thầy mong muốn sau buổi học này, các em sẽ đạt được:**
1. ✅ Phân tích và xử lý chuỗi phức tạp.
2. ✅ Ứng dụng vòng lặp kết hợp xử lý chuỗi để chuẩn hóa định dạng.
3. ✅ Viết các hàm bảo mật dữ liệu cơ bản (lọc ký tự không hợp lệ).

---

## 📖 Lý thuyết cốt lõi

Việc làm sạch dữ liệu (Data Sanitization) ở phía client là vô cùng quan trọng trước khi gửi dữ liệu lên server, tránh việc lưu trữ các định dạng sai lệch hoặc các ký tự lỗi.

---

## 💻 Ví dụ minh họa & Thực hành

### Ví dụ: Hàm chuẩn hóa viết hoa chữ cái đầu của họ tên
```javascript
function formatName(rawName) {
  let words = rawName.trim().toLowerCase().split(" ");
  let cleanWords = [];
  
  for (let w of words) {
    if (w !== "") { // Bỏ qua khoảng trắng thừa giữa các từ
      cleanWords.push(w[0].toUpperCase() + w.slice(1));
    }
  }
  return cleanWords.join(" ");
}

console.log(formatName("   nguyễN   VĂN   a   ")); // "Nguyễn Văn A"
```

### Bài tập thực hành
Các em hãy viết các hàm sau:
1. Viết hàm `censorBadWords(text, badWords)` nhận vào một đoạn văn bản và mảng các từ nhạy cảm. Hàm sẽ thay thế toàn bộ từ nhạy cảm trong văn bản bằng ký tự `***`.
2. Viết hàm `validatePhoneNumber(phone)` kiểm tra xem số điện thoại nhập vào có đúng 10 số và bắt đầu bằng số 0 hay không.

---

## 🧪 Câu hỏi ôn tập
::: details 1. Hàm `slice(1)` trên một chuỗi thực hiện chức năng gì?
Hàm `slice(1)` trả về một chuỗi con bắt đầu từ ký tự thứ 2 (chỉ số index 1) cho đến hết chuỗi gốc.
:::
