# Buổi 5: Vòng lặp trong JavaScript

Xin chào các em! 👋

Hôm nay thầy trò mình sẽ học cách làm cho máy tính thực hiện các tác vụ lặp đi lặp lại hàng nghìn lần chỉ với vài dòng code thông qua **vòng lặp**.

## 🎯 Mục tiêu buổi học
> **Thầy mong muốn sau buổi học này, các em sẽ đạt được:**
1. ✅ Hiểu rõ khái niệm và nguyên lý hoạt động của vòng lặp.
2. ✅ Sử dụng thành thạo các loại vòng lặp: `for`, `while`, `do-while`.
3. ✅ Tránh được lỗi vòng lặp vô hạn (infinite loop) làm treo trình duyệt.

---

## 📖 Lý thuyết cốt lõi

### Các loại vòng lặp cơ bản

::: code-group
```javascript [Vòng lặp for]
// Dùng khi biết trước số lần lặp cụ thể
for (let i = 1; i <= 5; i++) {
  console.log("Lần lặp thứ", i);
}
```

```javascript [Vòng lặp while]
// Dùng khi chưa biết trước số lần lặp, lặp dựa trên điều kiện
let count = 1;
while (count <= 5) {
  console.log("Count =", count);
  count++; // Cập nhật biến điều kiện để thoát vòng lặp
}
```

```javascript [Vòng lặp do-while]
// Luôn thực thi ít nhất một lần trước khi kiểm tra điều kiện
let count = 1;
do {
  console.log("Count =", count);
  count++;
} while (count <= 5);
```
:::

---

## 💻 Ví dụ minh họa & Thực hành

### Ví dụ: Tính tổng các số từ 1 đến 10
```javascript
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log("Tổng từ 1 đến 10 là:", sum); // 55
```

### Bài tập thực hành
Các em hãy viết chương trình sử dụng vòng lặp để:
1. In ra các số lẻ từ 1 đến 20 ra console.
2. Đếm xem có bao nhiêu số chia hết cho 3 trong khoảng từ 1 đến 50.

---

## 🧪 Câu hỏi ôn tập
::: details 1. Điều gì xảy ra nếu quên không tăng biến đếm trong vòng lặp `while`?
Vòng lặp sẽ chạy vô hạn vì điều kiện luôn đúng. Trình duyệt của các em sẽ bị đơ hoặc treo (crash).
:::

::: details 2. Vòng lặp `do-while` khác `while` ở điểm mấu chốt nào?
Vòng lặp `do-while` chạy khối code trước rồi mới kiểm tra điều kiện, do đó luôn chạy ít nhất 1 lần. Còn `while` kiểm tra điều kiện ngay từ đầu, nếu sai thì không chạy lần nào.
:::
