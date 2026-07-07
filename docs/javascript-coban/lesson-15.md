---
title: "Buổi 15: DOM Styling & Quản lý Class CSS"
---

# Buổi 15: DOM Styling & Quản lý Class CSS

## 🎯 Mục tiêu buổi học

> **Thầy mong muốn sau buổi học này, các em sẽ đạt được:**

> **Thầy mong muốn sau buổi học này, các em sẽ đạt được:**
1. ✅ Nắm vững kiến thức chi tiết về DOM Styling & Quản lý Class CSS
2. ✅ Thực hành thành thạo bài tập thiết kế độc lập trực quan
3. ✅ Vượt qua bài kiểm tra trắc nghiệm nâng cao cuối buổi

## 🧠 Nội dung chính
### 1. Thay đổi Class CSS
Sử dụng classList giúp quản lý CSS khoa học:
- `element.classList.add("tên-class")`
- `element.classList.remove("tên-class")`
- `element.classList.toggle("tên-class")`

## 💻 Ví dụ minh họa
Dưới đây là một ví dụ hoàn chỉnh về cách hoạt động của DOM Styling & Quản lý Class CSS:

::: code-group

```html [index.html]
<!-- index.html -->
<div id="demo-box">
  <p>Thực hành JavaScript cơ bản thật dễ dàng và trực quan!</p>
</div>
```

```javascript [main.js]
// main.js
console.log("Khởi động buổi học 15: DOM Styling & Quản lý Class CSS");
```

:::

## 🧩 Bài tập thực hành
Tạo một chiếc hộp thẻ `<div>` có kích thước tĩnh. Viết JS để khi chạy trang web, tự động thêm class 'active' (có nền màu vàng) và đổi màu viền thành màu xanh bằng style trực tiếp.

## 🧪 Quiz/Checkpoint
Dưới đây là 5 câu hỏi trắc nghiệm kiểm tra nhanh kiến thức của các em trong buổi học này:

### Câu hỏi 1: Cách viết thuộc tính background-color trong đối tượng style của JS là gì?
A. element.style.background-color
B. element.style.backgroundColor
C. element.style.background_color
D. element.style.BGColor

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `B. element.style.backgroundColor (Viết theo camelCase)`
</details>

### Câu hỏi 2: Phương thức classList.toggle('active') hoạt động thế nào?
A. Chỉ thêm class active
B. Chỉ xóa class active
C. Thêm active nếu chưa có, xóa active nếu đã có
D. Luôn báo lỗi

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `C. Thêm active nếu chưa có, xóa active nếu đã có`
</details>

### Câu hỏi 3: Tại sao nên hạn chế chỉnh sửa CSS trực tiếp bằng element.style?
A. Làm chậm trình duyệt
B. Trộn lẫn mã logic JS và mã hiển thị CSS
C. Trình duyệt không hỗ trợ style
D. Không an toàn bảo mật

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `B. Trộn lẫn mã logic JS và mã hiển thị CSS`
</details>

### Câu hỏi 4: Làm thế nào để kiểm tra xem một phần tử có chứa class 'active' hay không?
A. element.classList.contains('active')
B. element.hasClass('active')
C. element.class === 'active'
D. element.classList.has('active')

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `A. element.classList.contains('active')`
</details>

### Câu hỏi 5: Can thiệp class bằng classList.add() có ghi đè các class cũ không?
A. Có
B. Không
C. Chỉ khi class cũ trùng tên
D. Chỉ chạy trên server

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `B. Không (Nó chỉ chèn thêm class mới vào danh sách lớp hiện có)`
</details>
