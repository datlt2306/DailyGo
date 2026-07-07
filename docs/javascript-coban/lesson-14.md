---
title: "Buổi 14: DOM Manipulation - Sửa đổi HTML"
---

# Buổi 14: DOM Manipulation - Sửa đổi HTML

## 🎯 Mục tiêu buổi học

> **Thầy mong muốn sau buổi học này, các em sẽ đạt được:**

> **Thầy mong muốn sau buổi học này, các em sẽ đạt được:**
1. ✅ Nắm vững kiến thức chi tiết về DOM Manipulation - Sửa đổi HTML
2. ✅ Thực hành thành thạo bài tập thiết kế độc lập trực quan
3. ✅ Vượt qua bài kiểm tra trắc nghiệm nâng cao cuối buổi

## 🧠 Nội dung chính
### 1. Sửa đổi nội dung DOM
- `element.textContent = "mới"`: Sửa nội dung chữ.
- `element.innerHTML = "<b>mới</b>"`: Sửa nội dung có thẻ HTML.
- `element.setAttribute("href", "url")`: Đổi giá trị thuộc tính.

## 💻 Ví dụ minh họa
Dưới đây là một ví dụ hoàn chỉnh về cách hoạt động của DOM Manipulation - Sửa đổi HTML:

::: code-group

```html [index.html]
<!-- index.html -->
<div id="demo-box">
  <p>Thực hành JavaScript cơ bản thật dễ dàng và trực quan!</p>
</div>
```

```javascript [main.js]
// main.js
console.log("Khởi động buổi học 14: DOM Manipulation - Sửa đổi HTML");
```

:::

## 🧩 Bài tập thực hành
Tạo thẻ HTML `<a id='my-link' href='#'>Liên kết</a>`. Viết JS đổi chữ thành 'Truy cập Google' và đổi thuộc tính `href` thành 'https://google.com'.

## 🧪 Quiz/Checkpoint
Dưới đây là 5 câu hỏi trắc nghiệm kiểm tra nhanh kiến thức của các em trong buổi học này:

### Câu hỏi 1: Thuộc tính nào sẽ hiển thị thẻ `<b>` như một văn bản thô thay vì in đậm?
A. innerHTML
B. textContent
C. value
D. className

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `B. textContent`
</details>

### Câu hỏi 2: Để thay đổi đường dẫn nguồn ảnh của thẻ img động, ta dùng phương thức nào?
A. img.setAttribute('src', 'new_path.png')
B. img.src = 'new_path.png'
C. Cả A và B đều đúng
D. Cả A và B đều sai

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `C. Cả A và B đều đúng`
</details>

### Câu hỏi 3: Đoạn code: box.innerHTML = '' có tác dụng gì?
A. Báo lỗi cú pháp
B. Xóa sạch toàn bộ nội dung và phần tử con bên trong box
C. Làm mờ box
D. Ẩn box khỏi giao diện

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `B. Xóa sạch toàn bộ nội dung và phần tử con bên trong box`
</details>

### Câu hỏi 4: Muốn lấy thuộc tính id của phần tử ta dùng phương thức nào?
A. getId()
B. getAttribute('id')
C. id.value
D. attr('id')

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `B. getAttribute('id')`
</details>

### Câu hỏi 5: Thuộc tính nào dùng để lấy dữ liệu người dùng đã nhập trong ô input?
A. textContent
B. innerHTML
C. value
D. attribute

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `C. value`
</details>
