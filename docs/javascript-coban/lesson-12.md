---
title: "Buổi 12: Đối tượng (Objects) cơ bản"
---

# Buổi 12: Đối tượng (Objects) cơ bản

## 🎯 Mục tiêu buổi học

> **Thầy mong muốn sau buổi học này, các em sẽ đạt được:**

> **Thầy mong muốn sau buổi học này, các em sẽ đạt được:**
1. ✅ Nắm vững kiến thức chi tiết về Đối tượng (Objects) cơ bản
2. ✅ Thực hành thành thạo bài tập thiết kế độc lập trực quan
3. ✅ Vượt qua bài kiểm tra trắc nghiệm nâng cao cuối buổi

## 🧠 Nội dung chính
### 1. Cú pháp đối tượng
Đối tượng chứa các thuộc tính và phương thức:
```javascript
const hocSinh = {
  name: "Đạt",
  age: 18,
  study: function() { console.log("Học bài!"); }
};
```

## 💻 Ví dụ minh họa
Dưới đây là một ví dụ hoàn chỉnh về cách hoạt động của Đối tượng (Objects) cơ bản:

::: code-group

```html [index.html]
<!-- index.html -->
<div id="demo-box">
  <p>Thực hành JavaScript cơ bản thật dễ dàng và trực quan!</p>
</div>
```

```javascript [main.js]
// main.js
console.log("Khởi động buổi học 12: Đối tượng (Objects) cơ bản");
```

:::

## 🧩 Bài tập thực hành
Tạo đối tượng `student` chứa thông tin: tên, tuổi, ngành học, điểm trung bình. Viết phương thức kiểm tra xem sinh viên có được học bổng không (diem >= 8) và in thông tin.

## 🧪 Quiz/Checkpoint
Dưới đây là 5 câu hỏi trắc nghiệm kiểm tra nhanh kiến thức của các em trong buổi học này:

### Câu hỏi 1: Phần tử hành vi/hàm của một đối tượng được gọi là gì?
A. Thuộc tính (Property)
B. Phương thức (Method)
C. Biến toàn cục
D. Hàm tự do

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `B. Phương thức (Method)`
</details>

### Câu hỏi 2: Cú pháp nào đúng để thêm thuộc tính price vào đối tượng product?
A. product.price = 1000;
B. product['price'] = 1000;
C. Cả A và B đều đúng
D. Cả A và B đều sai

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `C. Cả A và B đều đúng`
</details>

### Câu hỏi 3: Từ khóa 'this' bên trong phương thức của một đối tượng tham chiếu đến đối tượng nào?
A. Đối tượng global window
B. Chính đối tượng chứa phương thức đó
C. Một đối tượng rỗng
D. Không tham chiếu đến gì

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `B. Chính đối tượng chứa phương thức đó`
</details>

### Câu hỏi 4: Có thể khai báo một object lồng bên trong một object khác không?
A. Hoàn toàn có thể
B. Không thể lồng nhau
C. Chỉ lồng được 1 cấp
D. Báo lỗi cú pháp

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `A. Hoàn toàn có thể`
</details>

### Câu hỏi 5: Kiểu dữ liệu của một Object được xác định bởi lệnh typeof là gì?
A. 'object'
B. 'array'
C. 'class'
D. 'null'

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `A. 'object'`
</details>
