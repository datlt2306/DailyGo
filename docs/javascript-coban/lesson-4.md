---
title: "Buổi 4: Toán tử Số học, Gán & So sánh"
---

# Buổi 4: Toán tử Số học, Gán & So sánh

## 🎯 Mục tiêu buổi học

> **Thầy mong muốn sau buổi học này, các em sẽ đạt được:**

> **Thầy mong muốn sau buổi học này, các em sẽ đạt được:**
1. ✅ Nắm vững kiến thức chi tiết về Toán tử Số học, Gán & So sánh
2. ✅ Thực hành thành thạo bài tập thiết kế độc lập trực quan
3. ✅ Vượt qua bài kiểm tra trắc nghiệm nâng cao cuối buổi

## 🧠 Nội dung chính
### 1. Toán tử Số học & Gán
- Cộng (`+`), Trừ (`-`), Nhân (`*`), Chia (`/`), Chia lấy dư (`%`).
- Toán tử tăng/giảm: `++` (tăng 1), `--` (giảm 1).
- Toán tử gán kết hợp: `+=`, `-=`, `*=`, `/=`. Ví dụ: `x += 5` tương đương `x = x + 5`.

### 2. So sánh tuyệt đối (===) và tương đối (==)
- `==` (So sánh tương đối): JavaScript sẽ tự động ép kiểu (Type Coercion) của hai vế về cùng một kiểu rồi so sánh giá trị.
- `===` (So sánh tuyệt đối): Không ép kiểu. Phép so sánh chỉ trả về `true` khi cả **giá trị** và **kiểu dữ liệu** của hai bên đều trùng khớp hoàn toàn.

## 💻 Ví dụ minh họa
Dưới đây là một ví dụ hoàn chỉnh về cách hoạt động của Toán tử Số học, Gán & So sánh:

::: code-group

```html [index.html]
<!-- index.html -->
<div id="demo-box">
  <p>Thực hành JavaScript cơ bản thật dễ dàng và trực quan!</p>
</div>
```

```javascript [main.js]
// main.js
console.log("Khởi động buổi học 4: Toán tử Số học, Gán & So sánh");
```

:::

## 🧩 Bài tập thực hành
#### Bài thực hành số 4:
1. Viết mã khai báo hai biến: `let num1 = 20; let num2 = "20";`
2. Sử dụng câu lệnh so sánh `num1 == num2` và `num1 === num2` rồi in kết quả ra console để đối chiếu.
3. Thực hiện phép tính cộng chuỗi và số: `num1 + num2` và in kết quả ra console.

## 🧪 Quiz/Checkpoint
Dưới đây là 5 câu hỏi trắc nghiệm kiểm tra nhanh kiến thức của các em trong buổi học này:

### Câu hỏi 1: Kết quả phép so sánh 10 == '10' là gì?
A. true
B. false
C. undefined
D. null

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `A. true (Do toán tử == tự động ép kiểu chuỗi '10' về số 10 trước khi so sánh)`
</details>

### Câu hỏi 2: Kết quả phép so sánh 10 === '10' là gì?
A. true
B. false
C. NaN
D. TypeError

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `B. false (Vì kiểu dữ liệu number khác string)`
</details>

### Câu hỏi 3: Phép tính 5 + '5' cho ra kết quả gì?
A. 10
B. '55'
C. NaN
D. Error

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `B. '55' (Toán tử + khi có một vế là chuỗi sẽ thực hiện phép nối chuỗi)`
</details>

### Câu hỏi 4: Phép tính 5 * '5' cho ra kết quả gì?
A. 25
B. '25'
C. NaN
D. Error

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `A. 25 (Các toán tử *, -, / sẽ ép kiểu chuỗi số về number)`
</details>

### Câu hỏi 5: Toán tử chia lấy dư ký hiệu là gì?
A. /
B. \\
C. %
D. &

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `C. %`
</details>
