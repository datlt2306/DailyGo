# Buổi 7: Hàm (Function) & Scope

Xin chào các em! 🌟

Khi chương trình ngày càng dài, chúng ta không thể viết tất cả code ở một chỗ. Hôm nay, thầy trò mình sẽ học về **Hàm** — công cụ tối quan trọng giúp chia nhỏ và tái sử dụng code.

## 🎯 Mục tiêu buổi học
> **Thầy mong muốn sau buổi học này, các em sẽ đạt được:**
1. ✅ Hiểu ý nghĩa của hàm và cách định nghĩa hàm trong JavaScript.
2. ✅ Truyền tham số (parameters) và nhận giá trị trả về (return value) từ hàm.
3. ✅ Phân biệt được Global Scope (phạm vi toàn cục) và Local Scope (phạm vi cục bộ).
4. ✅ Biết cách viết Arrow Function ngắn gọn.

---

## 📖 Lý thuyết cốt lõi

### 1. Định nghĩa và gọi hàm
Hàm là một khối mã thực hiện một nhiệm vụ cụ thể, chỉ chạy khi được gọi.

::: code-group
```javascript [Function Declaration (Khai báo truyền thống)]
// Khai báo hàm
function sayHello(name) {
  return "Xin chào " + name + "!";
}

// Gọi hàm
let message = sayHello("Đạt");
console.log(message); // "Xin chào Đạt!"
```

```javascript [Arrow Function (Hàm mũi tên - ES6)]
// Cú pháp ngắn gọn, thường gán vào một biến hằng
const sayHello = (name) => {
  return "Xin chào " + name + "!";
};

// Gọi hàm
let message = sayHello("Đạt");
console.log(message); // "Xin chào Đạt!"
```
:::

### 2. Phạm vi biến (Scope)
* **Global Scope**: Biến khai báo ngoài hàm, có thể truy cập ở bất cứ đâu.
* **Local Scope**: Biến khai báo trong hàm, chỉ có thể sử dụng bên trong hàm đó.

```javascript
let globalVar = "Tôi ở ngoài";

function test() {
  let localVar = "Tôi ở trong";
  console.log(globalVar); // Hợp lệ
}
// console.log(localVar); // Lỗi! localVar không tồn tại ở ngoài hàm.
```

---

## 💻 Ví dụ minh họa & Thực hành

### Ví dụ: Hàm tính giá trị giảm giá
```javascript
const calculateDiscount = (originalPrice, discountPercent) => {
  let discountAmount = originalPrice * (discountPercent / 100);
  return originalPrice - discountAmount;
};

let finalPrice = calculateDiscount(100000, 15);
console.log("Giá sau khi giảm 15% là:", finalPrice); // 85000
```

### Bài tập thực hành
Các em hãy viết một hàm có tên là `checkEvenOdd(number)` nhận vào một số nguyên, hàm sẽ trả về chuỗi `"Chẵn"` nếu số đó là số chẵn, và trả về `"Lẻ"` nếu số đó là số lẻ. Gọi thử hàm với các giá trị khác nhau để kiểm tra kết quả.

---

## 🧪 Câu hỏi ôn tập
::: details 1. Điều gì xảy ra nếu hàm không có từ khóa `return`?
Hàm vẫn thực thi bình thường nhưng giá trị trả về mặc định của hàm khi gọi sẽ là `undefined`.
:::

::: details 2. Arrow function có bắt buộc phải ghi chữ `return` không?
Nếu hàm chỉ có 1 dòng lệnh xử lý và trả về kết quả ngay lập tức, các em có thể viết gộp bỏ dấu ngoặc nhọn `{}` và bỏ chữ `return`. Ví dụ: `const double = x => x * 2;`.
:::
