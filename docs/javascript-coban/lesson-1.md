---
title: "Buổi 1: Tổng quan về JavaScript & Môi trường chạy"
---

# Buổi 1: Tổng quan về JavaScript & Môi trường chạy

## 🎯 Mục tiêu buổi học

> **Thầy mong muốn sau buổi học này, các em sẽ đạt được:**

> **Thầy mong muốn sau buổi học này, các em sẽ đạt được:**
1. ✅ Nắm vững kiến thức chi tiết về Tổng quan về JavaScript & Môi trường chạy
2. ✅ Thực hành thành thạo bài tập thiết kế độc lập trực quan
3. ✅ Vượt qua bài kiểm tra trắc nghiệm nâng cao cuối buổi

## 🧠 Nội dung chính
### 1. Lịch sử và Vai trò của JavaScript
JavaScript (JS) là một ngôn ngữ lập trình kịch bản được tạo ra bởi Brendan Eich vào năm 1995 tại Netscape. Ban đầu nó được đặt tên là LiveScript, nhưng sau đó đổi tên thành JavaScript để tận dụng sức hút của Java thời bấy giờ.
Ngày nay, JS là ngôn ngữ lập trình phổ biến nhất thế giới và là tiêu chuẩn của World Wide Web (W3C), cho phép lập trình cả Frontend (trình duyệt) lẫn Backend (Node.js).

### 2. JavaScript Engine hoạt động thế nào?
Trình duyệt web tích hợp các công cụ biên dịch (JS Engines) như:
- **V8 Engine** (Google Chrome, Microsoft Edge, Opera)
- **SpiderMonkey** (Mozilla Firefox)
- **JavaScriptCore** (Apple Safari)
Các engine này nhận mã nguồn JS, phân tích cú pháp (Parsing), tạo cây cú pháp trừu tượng (AST), sau đó chuyển thành mã máy (Machine Code) để CPU thực thi với tốc độ cực nhanh thông qua công nghệ Just-In-Time (JIT) compilation.

### 3. Công cụ phát triển (Chrome DevTools Console)
Để mở bảng điều khiển lập trình:
1. Nhấp chuột phải vào bất kỳ vị trí nào trên trình duyệt Chrome, chọn **Inspect** (Kiểm tra) hoặc nhấn tổ hợp phím `F12`.
2. Chuyển qua tab **Console**.
3. Bạn có thể gõ trực tiếp các mã lệnh JavaScript như `alert('Hello')` hoặc `console.log('Chào mừng đến với PolyTuts')` và nhấn Enter để thực thi lập tức.

## 💻 Ví dụ minh họa
Dưới đây là một ví dụ hoàn chỉnh về cách hoạt động của Tổng quan về JavaScript & Môi trường chạy:

::: code-group

```html [index.html]
<!-- index.html -->
<div id="demo-box">
  <p>Thực hành JavaScript cơ bản thật dễ dàng và trực quan!</p>
</div>
```

```javascript [main.js]
// main.js
console.log("Khởi động buổi học 1: Tổng quan về JavaScript & Môi trường chạy");
```

:::

## 🧩 Bài tập thực hành
#### Bài thực hành số 1:
1. Các em các em các em hãy mở tab **Console** trong Chrome DevTools.
2. Khai báo lời chào và in thông tin cá nhân của các em gồm: Họ tên, mã sinh viên FPT, lớp học và định hướng sự nghiệp mong muốn sau khi tốt nghiệp.
3. Chụp hình hoặc lưu lại kết quả hiển thị trên Console.

## 🧪 Quiz/Checkpoint
Dưới đây là 5 câu hỏi trắc nghiệm kiểm tra nhanh kiến thức của các em trong buổi học này:

### Câu hỏi 1: Ai là người sáng lập ra ngôn ngữ JavaScript?
A. Brendan Eich
B. Tim Berners-Lee
C. James Gosling
D. Mark Zuckerberg

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `A. Brendan Eich (Năm 1995 tại Netscape)`
</details>

### Câu hỏi 2: Engine JavaScript nào được tích hợp bên trong trình duyệt Google Chrome?
A. SpiderMonkey
B. V8
C. Chakra
D. JavaScriptCore

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `B. V8 (Engine cực mạnh của Google)`
</details>

### Câu hỏi 3: Lệnh nào sau đây dùng để hiển thị dữ liệu ra cửa sổ debug console?
A. document.write()
B. alert()
C. console.log()
D. print()

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `C. console.log()`
</details>

### Câu hỏi 4: Tên gọi ban đầu của JavaScript là gì?
A. Mocha
B. LiveScript
C. Cả A và B đều đúng
D. ECMAScript

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `C. Cả A và B đều đúng (Mocha -> LiveScript -> JavaScript)`
</details>

### Câu hỏi 5: ECMAScript là gì?
A. Một phiên bản hệ điều hành
B. Tiêu chuẩn đặc tả kỹ thuật cho JavaScript
C. Một framework JS nổi tiếng
D. Trình biên dịch mã nguồn

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `B. Tiêu chuẩn đặc tả kỹ thuật cho JavaScript`
</details>
