# Buổi 6: Thực hành vòng lặp & Thuật toán

Xin chào các em! 🎉

Hôm nay chúng ta sẽ cùng nhau thực hành giải quyết các bài toán tư duy thuật toán thông qua sự kết hợp của vòng lặp và câu điều kiện.

## 🎯 Mục tiêu buổi học
> **Thầy mong muốn sau buổi học này, các em sẽ đạt được:**
1. ✅ Kết hợp thuần thục vòng lặp lồng nhau (nested loops).
2. ✅ Giải quyết bài toán kiểm tra tính chất của một số (ví dụ: số nguyên tố).
3. ✅ Rèn luyện khả năng kiểm soát luồng điều khiển chương trình.

---

## 📖 Lý thuyết cốt lõi

Vòng lặp lồng nhau (Nested Loop) là việc đặt một vòng lặp bên trong một vòng lặp khác. Mỗi lần vòng lặp ngoài chạy 1 bước, vòng lặp trong sẽ chạy hết toàn bộ chu kỳ của nó.

---

## 💻 Ví dụ minh họa & Thực hành

### Ví dụ: Vẽ hình chữ nhật bằng các dấu sao `*`
```javascript
let rows = 3;
let cols = 5;

for (let i = 1; i <= rows; i++) {
  let line = "";
  for (let j = 1; j <= cols; j++) {
    line += "* ";
  }
  console.log(line);
}
// Kết quả in ra:
// * * * * *
// * * * * *
// * * * * *
```

### Bài tập thực hành
Các em hãy viết chương trình JavaScript thực hiện kiểm tra xem một số `n` (ví dụ: `n = 17`) có phải là số nguyên tố hay không. 
*(Gợi ý: Số nguyên tố là số lớn hơn 1 và chỉ chia hết cho 1 và chính nó).*

---

## 🧪 Câu hỏi ôn tập
::: details 1. Số nguyên tố nhỏ nhất là số mấy?
Là số `2`. Số 2 cũng là số nguyên tố chẵn duy nhất.
:::
