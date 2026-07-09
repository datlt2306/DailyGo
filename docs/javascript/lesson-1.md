# Buổi 1: Nhập môn JavaScript & Biến

Xin chào các em! 🎉 

Hôm nay thầy trò mình sẽ bắt đầu những bước đi đầu tiên vào thế giới JavaScript — ngôn ngữ lập trình phổ biến nhất thế giới Web.

## 🎯 Mục tiêu buổi học
> **Thầy mong muốn sau buổi học này, các em sẽ đạt được:**
1. ✅ Hiểu rõ JavaScript là gì và vai trò của nó trong trình duyệt.
2. ✅ Biết cách nhúng JavaScript vào trang HTML.
3. ✅ Khai báo biến thành thạo bằng `var`, `let`, `const`.
4. ✅ Nắm được các kiểu dữ liệu cơ bản: Number, String, Boolean, Null, Undefined.

---

## 📖 Lý thuyết cốt lõi

### 1. JavaScript là gì?
Nếu HTML định hình cấu trúc, CSS tạo nên vẻ đẹp bên ngoài, thì JavaScript chính là bộ não giúp trang web hoạt động và tương tác linh hoạt với người dùng.

### 2. Cách nhúng JavaScript vào HTML
Chúng ta sử dụng thẻ `<script>` để nhúng code JS. Có hai cách chính:

::: code-group
```html [External Script (Khuyên dùng)]
<!-- Tách code ra file main.js riêng rồi liên kết qua thuộc tính src -->
<script src="main.js"></script>
```

```html [Inline Script]
<!-- Viết trực tiếp code JS trong thẻ script ở file HTML -->
<script>
  console.log("Chào các em!");
</script>
```
:::

### 3. Khai báo biến: `var`, `let` và `const`
Biến là vùng chứa dùng để lưu trữ dữ liệu.

::: code-group
```javascript [Khai báo bằng let]
// Có phạm vi khối (block scope), giá trị có thể thay đổi lại
let age = 18;
age = 19; // Hợp lệ
```

```javascript [Khai báo bằng const]
// Dùng khai báo hằng số, giá trị KHÔNG thể thay đổi sau khi gán
const PI = 3.14;
// PI = 3.15; // Lỗi!
```

```javascript [Khai báo bằng var]
// Cách khai báo cũ, phạm vi hàm (function scope), dễ gây lỗi trùng tên
var name = "Đạt";
```
:::

---

## 💻 Ví dụ minh họa & Thực hành

### Ví dụ: Khai báo thông tin học viên
```javascript
// Khai báo các thông tin cơ bản
const studentName = "Nguyễn Văn A";
let age = 19;
let isEnrolled = true;

console.log("Tên sinh viên:", studentName);
console.log("Tuổi:", age);
console.log("Trạng thái nhập học:", isEnrolled);
```

### Bài tập thực hành
Các em hãy mở file `index.html`, nhúng file script và viết code khai báo thông tin một sản phẩm bao gồm: tên sản phẩm, giá bán, số lượng trong kho và trạng thái còn hàng. Sau đó in toàn bộ thông tin ra tab Console của trình duyệt.

---

## 🧪 Câu hỏi ôn tập
::: details 1. Điểm khác biệt lớn nhất giữa `let` và `const` là gì?
`let` cho phép gán lại giá trị mới cho biến, trong khi `const` là hằng số và không cho phép thay đổi giá trị sau khi đã khai báo.
:::

::: details 2. Làm thế nào để xem kết quả của lệnh `console.log()` trên trình duyệt?
Các em click chuột phải vào trang web, chọn **Inspect** (Kiểm tra) -> chuyển sang tab **Console** để xem các log của JavaScript.
:::
