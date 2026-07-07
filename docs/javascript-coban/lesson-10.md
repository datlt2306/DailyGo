---
title: "Buổi 10: Phạm vi hoạt động của Biến (Scope)"
---

# Buổi 10: Phạm vi hoạt động của Biến (Scope)

## 🎯 Mục tiêu buổi học

> **Thầy mong muốn sau buổi học này, các em sẽ đạt được:**

> **Thầy mong muốn sau buổi học này, các em sẽ đạt được:**
1. ✅ Nắm vững kiến thức chi tiết về Phạm vi hoạt động của Biến (Scope)
2. ✅ Thực hành thành thạo bài tập thiết kế độc lập trực quan
3. ✅ Vượt qua bài kiểm tra trắc nghiệm nâng cao cuối buổi

## 🧠 Nội dung chính
### 1. Phạm vi hoạt động (Scope)
Scope quy định nơi biến có thể được truy cập:
- **Global Scope**: Biến khai báo ngoài cùng, mọi nơi đều dùng được.
- **Function Scope**: Biến trong hàm, chỉ dùng được trong hàm đó.
- **Block Scope (let/const)**: Biến trong cặp `{}` (if, for...), chỉ dùng được trong cặp ngoặc đó.

## 💻 Ví dụ minh họa
Dưới đây là một ví dụ hoàn chỉnh về cách hoạt động của Phạm vi hoạt động của Biến (Scope):

::: code-group

```html [index.html]
<!-- index.html -->
<div id="demo-box">
  <p>Thực hành JavaScript cơ bản thật dễ dàng và trực quan!</p>
</div>
```

```javascript [main.js]
// main.js
console.log("Khởi động buổi học 10: Phạm vi hoạt động của Biến (Scope)");
```

:::

## 🧩 Bài tập thực hành
Khai báo một biến global và một biến local bên trong một block `if`. Kiểm tra việc truy cập hai biến này bên ngoài block `if` và in kết quả lỗi nếu có.

## 🧪 Quiz/Checkpoint
Dưới đây là 5 câu hỏi trắc nghiệm kiểm tra nhanh kiến thức của các em trong buổi học này:

### Câu hỏi 1: Biến khai báo bằng let bên trong block { } có dùng được bên ngoài block đó không?
A. Có
B. Không
C. Tùy trình duyệt
D. Chỉ dùng được trong hàm

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `B. Không`
</details>

### Câu hỏi 2: Biến khai báo bằng 'var' bên trong block { } (ví dụ: khối if) có rò rỉ ra ngoài không?
A. Không
B. Có
C. Tùy trình duyệt
D. Báo lỗi cú pháp

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `B. Có (var không hỗ trợ Block Scope)`
</details>

### Câu hỏi 3: Function Scope áp dụng cho từ khóa khai báo nào?
A. let
B. const
C. var
D. Tất cả các phương án trên

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `D. Tất cả các phương án trên (mọi biến khai báo trong hàm đều bị giới hạn phạm vi trong hàm đó)`
</details>

### Câu hỏi 4: Khi tìm kiếm giá trị của một biến, JS Engine sẽ tìm ở đâu trước?
A. Global Scope trước
B. Scope cục bộ hiện tại trước, sau đó mới tìm dần ra ngoài
C. File HTML
D. Bảng cấu hình hệ thống

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `B. Scope cục bộ hiện tại trước, sau đó mới tìm dần ra ngoài`
</details>

### Câu hỏi 5: Lỗi truy cập biến không tồn tại trong scope tên là gì?
A. ReferenceError
B. TypeError
C. SyntaxError
D. RangeError

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `A. ReferenceError`
</details>
