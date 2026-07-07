---
title: "Buổi 5: Cấu trúc rẽ nhánh If-Else"
---

# Buổi 5: Cấu trúc rẽ nhánh If-Else

## 🎯 Mục tiêu buổi học

> **Thầy mong muốn sau buổi học này, các em sẽ đạt được:**

> **Thầy mong muốn sau buổi học này, các em sẽ đạt được:**
1. ✅ Nắm vững kiến thức chi tiết về Cấu trúc rẽ nhánh If-Else
2. ✅ Thực hành thành thạo bài tập thiết kế độc lập trực quan
3. ✅ Vượt qua bài kiểm tra trắc nghiệm nâng cao cuối buổi

## 🧠 Nội dung chính
### 1. Cấu trúc If-Else-If
Giúp chương trình xử lý các tình huống rẽ nhánh phức tạp:
```javascript
if (điều_kiện_1) {
  // Chạy khi điều kiện 1 đúng
} else if (điều_kiện_2) {
  // Chạy khi điều kiện 2 đúng
} else {
  // Chạy khi tất cả điều kiện trên đều sai
}
```

### 2. Toán tử Logic trong điều kiện
- `&&` (AND): Trả về true khi và chỉ khi mọi điều kiện đều true.
- `||` (OR): Trả về true chỉ cần nhất một điều kiện là true.
- `!` (NOT): Đảo ngược trạng thái logic (đúng thành sai, sai thành đúng).

## 💻 Ví dụ minh họa
Dưới đây là một ví dụ hoàn chỉnh về cách hoạt động của Cấu trúc rẽ nhánh If-Else:

::: code-group

```html [index.html]
<!-- index.html -->
<div id="demo-box">
  <p>Thực hành JavaScript cơ bản thật dễ dàng và trực quan!</p>
</div>
```

```javascript [main.js]
// main.js
console.log("Khởi động buổi học 5: Cấu trúc rẽ nhánh If-Else");
```

:::

## 🧩 Bài tập thực hành
#### Bài thực hành số 5:
Các em các em các em hãy viết chương trình đánh giá học lực của một học viên dựa trên điểm trung bình (GPA):
- GPA từ 9.0 trở lên: Xuất sắc
- GPA từ 8.0 đến dưới 9.0: Giỏi
- GPA từ 6.5 đến dưới 8.0: Khá
- GPA từ 5.0 đến dưới 6.5: Trung bình
- GPA dưới 5.0: Yếu học lực.

## 🧪 Quiz/Checkpoint
Dưới đây là 5 câu hỏi trắc nghiệm kiểm tra nhanh kiến thức của các em trong buổi học này:

### Câu hỏi 1: Toán tử OR trong JavaScript được viết thế nào?
A. &&
B. ||
C. !
D. &

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `B. ||`
</details>

### Câu hỏi 2: Đoạn code: if (5 > 3 && 2 < 1) sẽ chạy vào khối if hay không?
A. Có
B. Không
C. Lỗi cú pháp
D. Chỉ chạy một phần

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `B. Không (Vì 2 < 1 là false, phép AND yêu cầu cả hai vế đều true)`
</details>

### Câu hỏi 3: Biểu thức !(5 > 10) trả về giá trị gì?
A. true
B. false
C. null
D. undefined

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `A. true (Vì 5 > 10 là false, phủ định của false là true)`
</details>

### Câu hỏi 4: Có thể sử dụng bao nhiêu khối 'else if' trong một câu lệnh rẽ nhánh?
A. Tối đa 1
B. Tối đa 2
C. Vô số tùy ý
D. Không được dùng else if

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `C. Vô số tùy ý`
</details>

### Câu hỏi 5: Toán tử logic AND ký hiệu là gì?
A. ||
B. &
C. &&
D. AND

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `C. &&`
</details>
