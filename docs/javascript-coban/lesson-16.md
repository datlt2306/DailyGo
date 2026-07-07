---
title: "Buổi 16: Lắng nghe sự kiện click & Xử lý tương tác"
---

# Buổi 16: Lắng nghe sự kiện click & Xử lý tương tác

## 🎯 Mục tiêu buổi học

> **Thầy mong muốn sau buổi học này, các em sẽ đạt được:**

> **Thầy mong muốn sau buổi học này, các em sẽ đạt được:**
1. ✅ Nắm vững kiến thức chi tiết về Lắng nghe sự kiện click & Xử lý tương tác
2. ✅ Thực hành thành thạo bài tập thiết kế độc lập trực quan
3. ✅ Vượt qua bài kiểm tra trắc nghiệm nâng cao cuối buổi

## 🧠 Nội dung chính
### 1. Cơ chế Event Listener
Lắng nghe tương tác click chuột của người dùng:
```javascript
button.addEventListener("click", () => {
  // mã xử lý tương tác
});
```

## 💻 Ví dụ minh họa
Dưới đây là một ví dụ hoàn chỉnh về cách hoạt động của Lắng nghe sự kiện click & Xử lý tương tác:

::: code-group

```html [index.html]
<!-- index.html -->
<div id="demo-box">
  <p>Thực hành JavaScript cơ bản thật dễ dàng và trực quan!</p>
</div>
```

```javascript [main.js]
// main.js
console.log("Khởi động buổi học 16: Lắng nghe sự kiện click & Xử lý tương tác");
```

:::

## 🧩 Bài tập thực hành
Tạo một nút bấm 'Bật/Tắt' và một chiếc đèn thẻ div hình tròn. Viết JS lắng nghe sự kiện click của nút bấm để bật/tắt class 'light-on' (đèn sáng màu vàng).

## 🧪 Quiz/Checkpoint
Dưới đây là 5 câu hỏi trắc nghiệm kiểm tra nhanh kiến thức của các em trong buổi học này:

### Câu hỏi 1: Phương thức nào dùng để đăng ký lắng nghe sự kiện trên phần tử DOM?
A. setEvent
B. addEventListener
C. click
D. watch

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `B. addEventListener`
</details>

### Câu hỏi 2: Tham số đầu tiên truyền vào addEventListener là gì?
A. Tên sự kiện (ví dụ: 'click')
B. Hàm callback xử lý
C. Kiểu dữ liệu
D. Đối tượng event

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `A. Tên sự kiện (ví dụ: 'click')`
</details>

### Câu hỏi 3: event.preventDefault() dùng để làm gì?
A. Ngăn sự kiện nổi bọt
B. Ngăn hành vi mặc định của sự kiện
C. Xóa sự kiện
D. Tắt trình duyệt

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `B. Ngăn hành vi mặc định của sự kiện`
</details>

### Câu hỏi 4: Sự kiện nào kích hoạt khi người dùng thay đổi giá trị trong ô input?
A. click
B. change hoặc input
C. submit
D. hover

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `B. change hoặc input`
</details>

### Câu hỏi 5: Sự kiện DOMContentLoaded kích hoạt khi nào?
A. Khi người dùng click nút
B. Khi cấu trúc cây HTML được tải và phân tích xong đầy đủ
C. Khi trang web đóng lại
D. Khi gọi API thành công

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `B. Khi cấu trúc cây HTML được tải và phân tích xong đầy đủ`
</details>
