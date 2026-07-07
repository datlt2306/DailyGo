---
title: "Buổi 2: Khai báo Biến & Quy tắc đặt tên Clean Code"
---

# Buổi 2: Khai báo Biến & Quy tắc đặt tên Clean Code

## 🎯 Mục tiêu buổi học

> **Thầy mong muốn sau buổi học này, các em sẽ đạt được:**

> **Thầy mong muốn sau buổi học này, các em sẽ đạt được:**
1. ✅ Nắm vững kiến thức chi tiết về Khai báo Biến & Quy tắc đặt tên Clean Code
2. ✅ Thực hành thành thạo bài tập thiết kế độc lập trực quan
3. ✅ Vượt qua bài kiểm tra trắc nghiệm nâng cao cuối buổi

## 🧠 Nội dung chính
### 1. Biến là gì?
Biến (Variables) là những ô nhớ được cấp phát trong bộ nhớ RAM dùng để lưu trữ các giá trị dữ liệu tạm thời trong quá trình thực thi chương trình.

### 2. Sự khác biệt giữa let, const và var
- **const (Constant)**: Dùng để khai báo các hằng số. Giá trị của hằng số không thể gán lại bằng toán tử `=` và không thể khai báo lại.
- **let**: Dùng để khai báo các biến thông thường có khả năng thay đổi giá trị trong tương lai.
- **var**: Từ khóa khai báo biến truyền thống trước phiên bản ES6. Nó có phạm vi hoạt động toàn cục hoặc trong hàm (hoisting cao), dễ gây lỗi nên hạn chế sử dụng trong các dự án hiện đại.

### 3. Quy tắc đặt tên biến (Clean Code)
- Luôn đặt tên biến bằng tiếng Anh mang tính gợi nhớ ý nghĩa (Ví dụ: `studentName` thay vì `x`, `y`).
- Sử dụng quy tắc **camelCase** (ký tự đầu tiên viết thường, các chữ tiếp theo viết hoa chữ cái đầu tiên). Ví dụ: `userEmail`, `totalPrice`, `isCompleted`.
- Không bắt đầu bằng số, không chứa ký tự đặc biệt trừ `$` và `_`.

## 💻 Ví dụ minh họa
Dưới đây là một ví dụ hoàn chỉnh về cách hoạt động của Khai báo Biến & Quy tắc đặt tên Clean Code:

::: code-group

```html [index.html]
<!-- index.html -->
<div id="demo-box">
  <p>Thực hành JavaScript cơ bản thật dễ dàng và trực quan!</p>
</div>
```

```javascript [main.js]
// main.js
console.log("Khởi động buổi học 2: Khai báo Biến & Quy tắc đặt tên Clean Code");
```

:::

## 🧩 Bài tập thực hành
#### Bài thực hành số 2:
Khai báo các biến sau tuân thủ đúng quy tắc clean code và camelCase:
- Biến hằng số chứa năm sinh của các em.
- Biến thông thường chứa tên thành phố các em sinh sống.
- Biến hằng số chứa số Pi (3.14159).
- Biến thông thường chứa trạng thái thời tiết hôm nay.
Hãy in tất cả các biến này ra console và tính toán xem năm nay các em bao nhiêu tuổi dựa trên năm sinh vừa khai báo.

## 🧪 Quiz/Checkpoint
Dưới đây là 5 câu hỏi trắc nghiệm kiểm tra nhanh kiến thức của các em trong buổi học này:

### Câu hỏi 1: Khai báo biến nào dưới đây không thể gán lại giá trị mới?
A. let count = 10;
B. const taxRate = 0.1;
C. var status = 'pending';
D. Cả A và C

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `B. const taxRate = 0.1;`
</details>

### Câu hỏi 2: Quy tắc viết camelCase nào dưới đây là đúng chuẩn?
A. user_name
B. Username
C. userName
D. USERNAME

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `C. userName`
</details>

### Câu hỏi 3: Phát biểu nào sau đây đúng về var?
A. var an toàn hơn let
B. var có tính chất hoisting và phạm vi hoạt động rộng dễ gây lỗi
C. var không thể thay đổi giá trị
D. var được giới thiệu trong ES6

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `B. var có tính chất hoisting và phạm vi hoạt động rộng dễ gây lỗi`
</details>

### Câu hỏi 4: Tên biến nào sau đây không hợp lệ?
A. $price
B. _temp
C. 1stName
D. name2

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `C. 1stName (Không được bắt đầu bằng số)`
</details>

### Câu hỏi 5: Đặt tên biến nào sau đây tuân thủ tinh thần Clean Code?
A. let a = 18;
B. let userAge = 18;
C. let num = 18;
D. let dynamicValue = 18;

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `B. let userAge = 18; (Mô tả rõ ràng ý nghĩa)`
</details>
