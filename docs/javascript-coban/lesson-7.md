---
title: "Buổi 7: Vòng lặp For cơ bản"
---

# Buổi 7: Vòng lặp For cơ bản

## 🎯 Mục tiêu buổi học

> **Thầy mong muốn sau buổi học này, các em sẽ đạt được:**

> **Thầy mong muốn sau buổi học này, các em sẽ đạt được:**
1. ✅ Nắm vững kiến thức chi tiết về Vòng lặp For cơ bản
2. ✅ Thực hành thành thạo bài tập thiết kế độc lập trực quan
3. ✅ Vượt qua bài kiểm tra trắc nghiệm nâng cao cuối buổi

## 🧠 Nội dung chính
### 1. Cấu trúc Vòng lặp For
Vòng lặp `for` lặp lại khối lệnh với số lần xác định trước nhờ biến kiểm soát:
```javascript
for (let i = 0; i < 5; i++) {
  console.log(i); // In ra 0, 1, 2, 3, 4
}
```

## 💻 Ví dụ minh họa
Dưới đây là một ví dụ hoàn chỉnh về cách hoạt động của Vòng lặp For cơ bản:

::: code-group

```html [index.html]
<!-- index.html -->
<div id="demo-box">
  <p>Thực hành JavaScript cơ bản thật dễ dàng và trực quan!</p>
</div>
```

```javascript [main.js]
// main.js
console.log("Khởi động buổi học 7: Vòng lặp For cơ bản");
```

:::

## 🧩 Bài tập thực hành
#### Bài thực hành số 7:
1. Sử dụng vòng lặp `for` để tính tổng của tất cả các số nguyên từ 1 đến 100. In tổng thu được ra console.
2. Sử dụng vòng lặp `for` để in ra các số chia hết cho 5 trong khoảng từ 0 đến 50.

## 🧪 Quiz/Checkpoint
Dưới đây là 5 câu hỏi trắc nghiệm kiểm tra nhanh kiến thức của các em trong buổi học này:

### Câu hỏi 1: Phát biểu nào sau đây đúng về quá trình khởi tạo biến trong vòng lặp for?
A. Lặp lại sau mỗi chu kỳ
B. Chỉ chạy một lần duy nhất lúc bắt đầu vòng lặp
C. Chạy cuối cùng
D. Chạy khi điều kiện sai

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `B. Chỉ chạy một lần duy nhất lúc bắt đầu vòng lặp`
</details>

### Câu hỏi 2: Đoạn code for(let i=0; i<3; i++) sẽ lặp lại khối lệnh bao nhiêu lần?
A. 2 lần
B. 3 lần
C. 4 lần
D. Lặp vô hạn

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `B. 3 lần (i = 0, 1, 2)`
</details>

### Câu hỏi 3: Từ khóa nào dùng để bỏ qua chu kỳ lặp hiện tại và chuyển ngay sang chu kỳ tiếp theo?
A. break
B. continue
C. return
D. exit

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `B. continue`
</details>

### Câu hỏi 4: Từ khóa break trong vòng lặp có tác dụng gì?
A. Dừng chu kỳ hiện tại
B. Thoát hoàn toàn khỏi vòng lặp ngay lập tức
C. Làm mới vòng lặp
D. Chạy lại vòng lặp

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `B. Thoát hoàn toàn khỏi vòng lặp ngay lập tức`
</details>

### Câu hỏi 5: Vòng lặp for (let i = 10; i > 0; i--) sẽ đếm thế nào?
A. Đếm tiến từ 1 đến 10
B. Đếm lùi từ 10 xuống 1
C. Lặp vô hạn
D. Không thực thi vì điều kiện sai

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `B. Đếm lùi từ 10 xuống 1`
</details>
