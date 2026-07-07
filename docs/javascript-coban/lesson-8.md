---
title: "Buổi 8: Vòng lặp While & Do-While"
---

# Buổi 8: Vòng lặp While & Do-While

## 🎯 Mục tiêu buổi học

> **Thầy mong muốn sau buổi học này, các em sẽ đạt được:**

> **Thầy mong muốn sau buổi học này, các em sẽ đạt được:**
1. ✅ Nắm vững kiến thức chi tiết về Vòng lặp While & Do-While
2. ✅ Thực hành thành thạo bài tập thiết kế độc lập trực quan
3. ✅ Vượt qua bài kiểm tra trắc nghiệm nâng cao cuối buổi

## 🧠 Nội dung chính
### 1. Vòng lặp While
Kiểm tra điều kiện trước rồi mới thực thi khối lệnh:
```javascript
while (điều_kiện) {
  // Mã thực thi
}
```

### 2. Vòng lặp Do-While
Thực hiện khối lệnh trước ít nhất một lần, sau đó mới kiểm tra điều kiện để quyết định có lặp tiếp hay không:
```javascript
do {
  // Luôn thực thi ít nhất một lần
} while (điều_kiện);
```

## 💻 Ví dụ minh họa
Dưới đây là một ví dụ hoàn chỉnh về cách hoạt động của Vòng lặp While & Do-While:

::: code-group

```html [index.html]
<!-- index.html -->
<div id="demo-box">
  <p>Thực hành JavaScript cơ bản thật dễ dàng và trực quan!</p>
</div>
```

```javascript [main.js]
// main.js
console.log("Khởi động buổi học 8: Vòng lặp While & Do-While");
```

:::

## 🧩 Bài tập thực hành
#### Bài thực hành số 8:
1. Viết chương trình in ra các số từ 1 đến 10 sử dụng vòng lặp `while`.
2. Mô phỏng trò chơi tung xúc xắc: Sử dụng vòng lặp `do-while` để tạo ngẫu nhiên một số từ 1 đến 6 (bằng `Math.floor(Math.random() * 6) + 1`). Vòng lặp sẽ tiếp tục chạy cho đến khi tung được số 6 thì dừng lại. In ra màn hình các số tung được.

## 🧪 Quiz/Checkpoint
Dưới đây là 5 câu hỏi trắc nghiệm kiểm tra nhanh kiến thức của các em trong buổi học này:

### Câu hỏi 1: Sự khác biệt lớn nhất giữa while và do-while là gì?
A. While chạy nhanh hơn
B. Do-while luôn chạy ít nhất một lần bất kể điều kiện đúng hay sai
C. Do-while không cần điều kiện
D. While chỉ chạy trên server

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `B. Do-while luôn chạy ít nhất một lần bất kể điều kiện đúng hay sai`
</details>

### Câu hỏi 2: Làm thế nào để tránh lỗi vòng lặp vô hạn (infinite loop)?
A. Luôn khai báo hằng số
B. Đảm bảo điều kiện kiểm tra của vòng lặp sẽ đạt trạng thái false tại một thời điểm nào đó
C. Sử dụng nhiều lệnh break
D. Không sử dụng biến đếm

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `B. Đảm bảo điều kiện kiểm tra của vòng lặp sẽ đạt trạng thái false tại một thời điểm nào đó`
</details>

### Câu hỏi 3: Đoạn code: let i=5; while(i < 5) { console.log(i); i++; } sẽ in ra gì?
A. 5
B. 0,1,2,3,4
C. Không in ra gì
D. Lặp vô hạn

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `C. Không in ra gì (Vì ngay từ đầu điều kiện 5 < 5 là false)`
</details>

### Câu hỏi 4: Đoạn code: let i=5; do { console.log(i); i++; } while(i < 5); sẽ in ra gì?
A. 5
B. Không in ra gì
C. Lặp vô hạn
D. 0

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `A. 5 (Do-while chạy khối code trước rồi mới kiểm tra điều kiện)`
</details>

### Câu hỏi 5: Math.random() trả về giá trị trong khoảng nào?
A. Từ 0 đến sát 1 (không bao gồm 1)
B. Từ 1 đến 10
C. Số nguyên ngẫu nhiên
D. Cả A và B

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `A. Từ 0 đến sát 1 (không bao gồm 1)`
</details>
