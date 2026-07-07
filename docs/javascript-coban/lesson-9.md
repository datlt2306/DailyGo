---
title: "Buổi 9: Hàm (Functions) cơ bản"
---

# Buổi 9: Hàm (Functions) cơ bản

## 🎯 Mục tiêu buổi học

> **Thầy mong muốn sau buổi học này, các em sẽ đạt được:**

> **Thầy mong muốn sau buổi học này, các em sẽ đạt được:**
1. ✅ Nắm vững kiến thức chi tiết về Hàm (Functions) cơ bản
2. ✅ Thực hành thành thạo bài tập thiết kế độc lập trực quan
3. ✅ Vượt qua bài kiểm tra trắc nghiệm nâng cao cuối buổi

## 🧠 Nội dung chính
### 1. Khai báo Hàm (Function Declaration)
Hàm giúp Gom nhóm code lại để tái sử dụng nhiều lần mà không cần viết lại:
```javascript
function sayGreeting(name) {
  return "Xin chào " + name + "!";
}
```

## 💻 Ví dụ minh họa
Dưới đây là một ví dụ hoàn chỉnh về cách hoạt động của Hàm (Functions) cơ bản:

::: code-group

```html [index.html]
<!-- index.html -->
<div id="demo-box">
  <p>Thực hành JavaScript cơ bản thật dễ dàng và trực quan!</p>
</div>
```

```javascript [main.js]
// main.js
console.log("Khởi động buổi học 9: Hàm (Functions) cơ bản");
```

:::

## 🧩 Bài tập thực hành
Viết một hàm nhận vào hai số a và b, tính và trả về giá trị tích của hai số đó. Gọi hàm và in kết quả ra console.

## 🧪 Quiz/Checkpoint
Dưới đây là 5 câu hỏi trắc nghiệm kiểm tra nhanh kiến thức của các em trong buổi học này:

### Câu hỏi 1: Phát biểu nào sau đây đúng về hàm không có từ khóa return?
A. Hàm sẽ bị lỗi biên dịch
B. Hàm tự động trả về giá trị undefined
C. Hàm tự động trả về số 0
D. Hàm không thể thực thi

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `B. Hàm tự động trả về giá trị undefined`
</details>

### Câu hỏi 2: Tham số (Parameter) là gì?
A. Giá trị truyền vào khi gọi hàm
B. Biến được khai báo ở phần định nghĩa của hàm
C. Tên của hàm
D. Biến toàn cục

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `B. Biến được khai báo ở phần định nghĩa của hàm`
</details>

### Câu hỏi 3: Cách gọi hàm nào sau đây là chính xác?
A. myFunction
B. myFunction()
C. call myFunction
D. run myFunction

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `B. myFunction()`
</details>

### Câu hỏi 4: Hàm có thể nhận tối đa bao nhiêu tham số đầu vào?
A. 1
B. 2
C. Tùy ý
D. Không được nhận tham số

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `C. Tùy ý (Số lượng tham số linh động theo nhu cầu)`
</details>

### Câu hỏi 5: Từ khóa nào kết thúc hoạt động của hàm ngay lập tức?
A. break
B. continue
C. return
D. stop

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `C. return`
</details>
