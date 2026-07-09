# Buổi 3: Toán tử & Câu điều kiện

Xin chào các em! 🌟

Buổi học này thầy trò mình sẽ học cách làm cho chương trình trở nên thông minh hơn bằng cách đưa ra các quyết định thông qua câu lệnh điều kiện.

## 🎯 Mục tiêu buổi học
> **Thầy mong muốn sau buổi học này, các em sẽ đạt được:**
1. ✅ Sử dụng thành thạo toán tử so sánh (`>`, `<`, `===`, `!==`).
2. ✅ Sử dụng toán tử logic (`&&`, `||`, `!`).
3. ✅ Làm chủ cấu trúc rẽ nhánh `if-else` và `switch-case`.

---

## 📖 Lý thuyết cốt lõi

### 1. Toán tử so sánh và logic
* So sánh bằng tuyệt đối: `===` (so sánh cả giá trị và kiểu dữ liệu).
* Toán tử logic:
  - `&&` (Và): Đúng khi cả hai vế cùng đúng.
  - `||` (Hoặc): Đúng khi một trong hai vế đúng.
  - `!` (Phủ định): Đảo ngược giá trị logic.

### 2. Cấu trúc rẽ nhánh điều kiện

::: code-group
```javascript [Cú pháp if-else]
let score = 8;
if (score >= 5) {
  console.log("Đạt");
} else {
  console.log("Học lại");
}
```

```javascript [Cú pháp switch-case]
let role = "admin";
switch (role) {
  case "admin":
    console.log("Được truy cập hệ thống quản trị");
    break;
  case "user":
    console.log("Được xem nội dung");
    break;
  default:
    console.log("Khách vãng lai");
}
```
:::

---

## 💻 Ví dụ minh họa & Thực hành

### Ví dụ: Kiểm tra số chẵn lẻ
```javascript
let number = 7;
if (number % 2 === 0) {
  console.log(number + " là số chẵn");
} else {
  console.log(number + " là số lẻ");
}
```

### Bài tập thực hành
Các em hãy viết chương trình khai báo một biến `score` (điểm trung bình học tập của học viên). Sử dụng cấu trúc `if-else if-else` để phân loại học lực:
- Điểm >= 9: Xuất sắc
- Điểm >= 8: Giỏi
- Điểm >= 6.5: Khá
- Điểm >= 5: Trung bình
- Điểm < 5: Yếu

---

## 🧪 Câu hỏi ôn tập
::: details 1. Tại sao nên dùng `===` thay vì `==` trong JavaScript?
Toán tử `==` chỉ so sánh giá trị và tự ép kiểu, dễ dẫn đến kết quả sai lệch. Toán tử `===` so sánh nghiêm ngặt cả giá trị lẫn kiểu dữ liệu, giúp code chính xác hơn.
:::

::: details 2. Lệnh `break` trong cấu trúc `switch-case` có vai trò gì?
Lệnh `break` dùng để thoát khỏi khối lệnh `switch` ngay sau khi tìm thấy case phù hợp. Nếu thiếu `break`, chương trình sẽ tiếp tục chạy các case bên dưới bất kể điều kiện.
:::
