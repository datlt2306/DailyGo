---
title: "Buổi 13: DOM Selection - Tìm chọn thẻ HTML"
---

# Buổi 13: DOM Selection - Tìm chọn thẻ HTML

## 🎯 Mục tiêu buổi học

> **Thầy mong muốn sau buổi học này, các em sẽ đạt được:**

> **Thầy mong muốn sau buổi học này, các em sẽ đạt được:**
1. ✅ Nắm vững kiến thức chi tiết về DOM Selection - Tìm chọn thẻ HTML
2. ✅ Thực hành thành thạo bài tập thiết kế độc lập trực quan
3. ✅ Vượt qua bài kiểm tra trắc nghiệm nâng cao cuối buổi

## 🧠 Nội dung chính
### 1. Bộ chọn DOM
Để truy cập thẻ HTML từ JS:
- `document.getElementById("my-id")`
- `document.querySelector(".my-class")`
- `document.querySelectorAll("p")`

## 💻 Ví dụ minh họa
Dưới đây là một ví dụ hoàn chỉnh về cách hoạt động của DOM Selection - Tìm chọn thẻ HTML:

::: code-group

```html [index.html]
<!-- index.html -->
<div id="demo-box">
  <p>Thực hành JavaScript cơ bản thật dễ dàng và trực quan!</p>
</div>
```

```javascript [main.js]
// main.js
console.log("Khởi động buổi học 13: DOM Selection - Tìm chọn thẻ HTML");
```

:::

## 🧩 Bài tập thực hành
Tạo một trang HTML chứa 1 tiêu đề H1 và 3 thẻ li. Viết JS chọn thẻ H1 và in ra textContent của các thẻ li.

## 🧪 Quiz/Checkpoint
Dưới đây là 5 câu hỏi trắc nghiệm kiểm tra nhanh kiến thức của các em trong buổi học này:

### Câu hỏi 1: Phương thức nào trả về danh sách NodeList chứa tất cả các phần tử khớp?
A. getElementById
B. querySelector
C. querySelectorAll
D. getElementsByClassName

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `C. querySelectorAll`
</details>

### Câu hỏi 2: document.querySelector('#user-email') chọn phần tử nào?
A. Thẻ có class là user-email
B. Thẻ có ID là user-email
C. Thẻ tên là ``<user-email>``
D. Tất cả các thẻ trên trang

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `B. Thẻ có ID là user-email (Dấu # biểu thị ID)`
</details>

### Câu hỏi 3: Sự khác biệt giữa NodeList và Array thường là gì?
A. NodeList không có thuộc tính length
B. NodeList không có đầy đủ các phương thức như Array thực thụ
C. NodeList chạy nhanh hơn Array nhiều lần
D. NodeList chỉ chạy trên server

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `B. NodeList không có đầy đủ các phương thức như Array thực thụ`
</details>

### Câu hỏi 4: Đối tượng gốc cao nhất của cây DOM là đối tượng nào?
A. window
B. document
C. html
D. body

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `B. document`
</details>

### Câu hỏi 5: document.querySelector('.btn') chọn phần tử nào?
A. Phần tử có class là btn
B. Tất cả các phần tử có class là btn
C. Phần tử đầu tiên có class là btn
D. Cả A và C đều đúng

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `D. Cả A và C đều đúng`
</details>
