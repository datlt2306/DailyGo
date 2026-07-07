---
title: "Buổi 3: Các kiểu dữ liệu nguyên bản (Primitive Data Types)"
---

# Buổi 3: Các kiểu dữ liệu nguyên bản (Primitive Data Types)

## 🎯 Mục tiêu buổi học

> **Thầy mong muốn sau buổi học này, các em sẽ đạt được:**

> **Thầy mong muốn sau buổi học này, các em sẽ đạt được:**
1. ✅ Nắm vững kiến thức chi tiết về Các kiểu dữ liệu nguyên bản (Primitive Data Types)
2. ✅ Thực hành thành thạo bài tập thiết kế độc lập trực quan
3. ✅ Vượt qua bài kiểm tra trắc nghiệm nâng cao cuối buổi

## 🧠 Nội dung chính
### 1. Kiểu số (Number)
Lưu trữ cả số nguyên lẫn số thập phân (float). Không phân biệt kiểu int hay double như C/Java. Có các giá trị đặc biệt như `NaN` (Not a Number) và `Infinity`.

### 2. Kiểu chuỗi (String)
Dùng để lưu trữ ký tự văn bản. Được đặt trong dấu nháy kép `"..."`, nháy đơn `'...'` hoặc dấu backtick `` `...` ``.

### 3. Kiểu logic (Boolean)
Chỉ nhận một trong hai giá trị duy nhất: `true` (đúng) hoặc `false` (sai). Rất quan trọng trong xử lý điều kiện rẽ nhánh.

### 4. Null & Undefined
- **Undefined**: Trạng thái mặc định của một biến khi vừa được khai báo nhưng chưa hề được gán giá trị nào.
- **Null**: Giá trị đại diện cho sự trống rỗng, không tồn tại của đối tượng, được lập trình viên chủ ý gán để xóa sạch tham chiếu.

## 💻 Ví dụ minh họa
Dưới đây là một ví dụ hoàn chỉnh về cách hoạt động của Các kiểu dữ liệu nguyên bản (Primitive Data Types):

::: code-group

```html [index.html]
<!-- index.html -->
<div id="demo-box">
  <p>Thực hành JavaScript cơ bản thật dễ dàng và trực quan!</p>
</div>
```

```javascript [main.js]
// main.js
console.log("Khởi động buổi học 3: Các kiểu dữ liệu nguyên bản (Primitive Data Types)");
```

:::

## 🧩 Bài tập thực hành
#### Bài thực hành số 3:
1. Các em các em các em hãy tạo 5 biến lưu giữ 5 kiểu dữ liệu nguyên bản kể trên.
2. Dùng toán tử `typeof` để in ra kiểu dữ liệu của các biến đó.
3. Tạo một biến `a` không gán giá trị và kiểm tra xem kiểu dữ liệu của nó in ra là gì.

## 🧪 Quiz/Checkpoint
Dưới đây là 5 câu hỏi trắc nghiệm kiểm tra nhanh kiến thức của các em trong buổi học này:

### Câu hỏi 1: Kiểu dữ liệu của giá trị 'false' là gì?
A. Boolean
B. String
C. Object
D. Undefined

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `B. String (Do nằm trong cặp dấu nháy đơn/kép)`
</details>

### Câu hỏi 2: Kết quả của lệnh typeof null là gì?
A. 'null'
B. 'undefined'
C. 'object'
D. 'string'

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `C. 'object' (Đây là một lỗi thiết kế lịch sử nổi tiếng của JavaScript)`
</details>

### Câu hỏi 3: Biến khai báo let score; có giá trị mặc định là gì?
A. null
B. undefined
C. 0
D. NaN

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `B. undefined`
</details>

### Câu hỏi 4: Để kiểm tra kiểu dữ liệu của một biến trong JS ta dùng toán tử nào?
A. checkType
B. typeof
C. isNaN
D. instanceOf

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `B. typeof`
</details>

### Câu hỏi 5: NaN là gì?
A. Một số đặc biệt đại diện cho giá trị Không phải Số (Not a Number)
B. Kiểu dữ liệu String
C. Lỗi hệ thống
D. Giá trị null

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `A. Một số đặc biệt đại diện cho giá trị Không phải Số (Not a Number)`
</details>
