# Buổi 13: Xử lý Chuỗi & Đối tượng Math

Xin chào các em! 👋

Hôm nay thầy trò mình sẽ học cách làm việc với văn bản (Chuỗi - String) và các hàm hỗ trợ tính toán toán học nâng cao thông qua đối tượng `Math` có sẵn trong JavaScript.

## 🎯 Mục tiêu buổi học
> **Thầy mong muốn sau buổi học này, các em sẽ đạt được:**
1. ✅ Sử dụng thành thạo các hàm xử lý chuỗi: `length`, `trim`, `split`, `replace`, `toLowerCase`, `toUpperCase`.
2. ✅ Sử dụng các hàm toán học của `Math`: `round`, `floor`, `ceil`, `random`, `abs`.
3. ✅ Hiểu cơ chế sinh số ngẫu nhiên phục vụ cho game hoặc hiển thị random.

---

## 📖 Lý thuyết cốt lõi

### 1. Các hàm xử lý chuỗi phổ biến
* `trim()`: Xóa khoảng trắng thừa ở hai đầu chuỗi.
* `replace(old, new)`: Thay thế chuỗi con.
* `split(separator)`: Cắt chuỗi thành mảng các phần tử con dựa trên ký tự phân tách.

### 2. Đối tượng Math
* `Math.round(x)`: Làm tròn số đến số nguyên gần nhất.
* `Math.floor(x)`: Làm tròn xuống số nguyên nhỏ hơn hoặc bằng.
* `Math.ceil(x)`: Làm tròn lên số nguyên lớn hơn hoặc bằng.
* `Math.random()`: Trả về một số ngẫu nhiên từ 0 (bao gồm) đến cận 1 (không bao gồm).

---

## 💻 Ví dụ minh họa & Thực hành

### Ví dụ: Sinh số ngẫu nhiên từ 1 đến 10
```javascript
let randomNumber = Math.floor(Math.random() * 10) + 1;
console.log("Số ngẫu nhiên từ 1 đến 10 là:", randomNumber);
```

### Bài tập thực hành
Các em hãy viết chương trình thực hiện:
1. Cho một chuỗi: `let text = "  Lập Trình Web JavaScript cơ bản  "`. Hãy dùng các hàm xử lý chuỗi để dọn dẹp khoảng trắng dư thừa và chuyển toàn bộ chuỗi sang chữ HOA.
2. Viết một hàm `rollDice()` giả lập việc gieo xúc xắc (trả về kết quả ngẫu nhiên là một số nguyên từ 1 đến 6).

---

## 🧪 Câu hỏi ôn tập
::: details 1. Làm thế nào để cắt chuỗi `"a,b,c,d"` thành mảng `["a", "b", "c", "d"]`?
Các em sử dụng hàm `split(",")`: `let arr = "a,b,c,d".split(",")`.
:::

::: details 2. Sự khác biệt giữa `Math.floor(4.9)` và `Math.ceil(4.1)` là gì?
- `Math.floor(4.9)` làm tròn xuống, trả về `4`.
- `Math.ceil(4.1)` làm tròn lên, trả về `5`.
:::
