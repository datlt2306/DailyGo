---
title: "Buổi 6: Switch-Case & Toán tử ba ngôi"
---

# Buổi 6: Switch-Case & Toán tử ba ngôi

## 🎯 Mục tiêu buổi học

> **Thầy mong muốn sau buổi học này, các em sẽ đạt được:**

> **Thầy mong muốn sau buổi học này, các em sẽ đạt được:**
1. ✅ Nắm vững kiến thức chi tiết về Switch-Case & Toán tử ba ngôi
2. ✅ Thực hành thành thạo bài tập thiết kế độc lập trực quan
3. ✅ Vượt qua bài kiểm tra trắc nghiệm nâng cao cuối buổi

## 🧠 Nội dung chính
### 1. Switch-Case
Thích hợp khi giá trị cần kiểm tra là một biến khớp cố định (sử dụng phép so sánh tuyệt đối `===` để so khớp):
```javascript
switch (month) {
  case 1:
    console.log("Tháng 1");
    break;
  default:
    console.log("Không xác định");
}
```

### 2. Toán tử ba ngôi (Ternary Operator)
Là viết tắt cực kỳ tiện dụng của cấu trúc `if-else` khi gán giá trị:
`const status = (age >= 18) ? "Người lớn" : "Trẻ em";`

## 💻 Ví dụ minh họa
Dưới đây là một ví dụ hoàn chỉnh về cách hoạt động của Switch-Case & Toán tử ba ngôi:

::: code-group

```html [index.html]
<!-- index.html -->
<div id="demo-box">
  <p>Thực hành JavaScript cơ bản thật dễ dàng và trực quan!</p>
</div>
```

```javascript [main.js]
// main.js
console.log("Khởi động buổi học 6: Switch-Case & Toán tử ba ngôi");
```

:::

## 🧩 Bài tập thực hành
#### Bài thực hành số 6:
1. Viết chương trình switch-case nhận vào giá trị số tháng trong năm (từ 1 đến 12) và in ra số ngày của tháng đó (Ví dụ: Tháng 1 có 31 ngày).
2. Viết lại đoạn mã kiểm tra điểm số: Nếu điểm từ 5 trở lên thì in 'Đỗ', ngược lại 'Trượt' bằng cách sử dụng toán tử 3 ngôi.

## 🧪 Quiz/Checkpoint
Dưới đây là 5 câu hỏi trắc nghiệm kiểm tra nhanh kiến thức của các em trong buổi học này:

### Câu hỏi 1: Toán tử ba ngôi hoạt động dựa trên bao nhiêu biểu thức tham số?
A. 1
B. 2
C. 3
D. 4

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `C. 3`
</details>

### Câu hỏi 2: Cơ chế so khớp giá trị trong cấu trúc switch-case là gì?
A. So sánh tương đối (==)
B. So sánh tuyệt đối (===)
C. Chỉ kiểm tra kiểu dữ liệu
D. Không so sánh giá trị

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `B. So sánh tuyệt đối (===)`
</details>

### Câu hỏi 3: Từ khóa default trong switch-case có tác dụng gì?
A. Luôn được thực thi đầu tiên
B. Chạy khi không có case nào khớp với giá trị
C. Báo lỗi cú pháp
D. Thoát khỏi switch-case

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `B. Chạy khi không có case nào khớp với giá trị`
</details>

### Câu hỏi 4: Nếu quên từ khóa break trong một case của switch-case, điều gì xảy ra?
A. Trình duyệt báo lỗi và dừng chạy
B. Chương trình tiếp tục chạy thẳng xuống các case phía dưới không kiểm tra điều kiện
C. Chương trình tự động khởi động lại
D. Không có vấn đề gì xảy ra

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `B. Chương trình tiếp tục chạy thẳng xuống các case phía dưới không kiểm tra điều kiện`
</details>

### Câu hỏi 5: Toán tử ba ngôi có thể dùng lồng nhau không?
A. Có, nhưng code sẽ khó đọc hơn
B. Hoàn toàn không thể
C. Chỉ chạy trên trình duyệt cũ
D. Chỉ dùng được trong switch-case

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `A. Có, nhưng code sẽ khó đọc hơn`
</details>
