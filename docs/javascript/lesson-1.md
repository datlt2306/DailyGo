# Buổi 1: Giới thiệu JavaScript, Biến, Kiểu dữ liệu & Toán tử

**Loại buổi**: Lý thuyết  
**Thời lượng**: 120 phút  
**Dự án**: Chưa có (chuẩn bị cho buổi 2)

---

## 🎯 Mục tiêu học tập

Sau buổi học này, bạn sẽ có thể:

- ✅ Hiểu JavaScript là gì và vai trò của nó trong web development
- ✅ Biết cách nhúng JavaScript vào HTML
- ✅ Khai báo biến (var, let, const) và hiểu về Scope (phạm vi của biến)
- ✅ Nhận biết các kiểu dữ liệu cơ bản
- ✅ Sử dụng các toán tử cơ bản (số học, so sánh, logic)

---

## 🧠 Nội dung chính

### 1. JavaScript là gì?

**JavaScript** là ngôn ngữ lập trình chạy trên trình duyệt, giúp trang web trở nên **tương tác** và **động** hơn.

**Vai trò của JavaScript:**
- HTML: Cấu trúc trang web (như khung xương)
- CSS: Trang trí, làm đẹp (như quần áo)
- JavaScript: Làm cho trang web "sống" (như thần kinh, cơ bắp)

**Ví dụ thực tế:**
- Khi click nút "Thêm vào giỏ", JavaScript xử lý
- Khi nhập tìm kiếm, JavaScript gợi ý kết quả
- Khi form submit, JavaScript validate dữ liệu

### 2. Nhúng JavaScript vào HTML

**Cách 1: Inline (trong thẻ HTML)**
```html
<button onclick="alert('Xin chào!')">Click me</button>
```

**Cách 2: Internal (trong thẻ `<script>`)**
```html
<!DOCTYPE html>
<html>
<head>
    <title>JavaScript Cơ bản</title>
</head>
<body>
    <h1>Xin chào</h1>
    
    <script>
        console.log('JavaScript đang chạy!');
    </script>
</body>
</html>
```

**Cách 3: External (file riêng) - KHUYẾN NGHỊ**
```html
<script src="main.js"></script>
```

**Vị trí thẻ `<script>`:**
- Thường đặt trước thẻ đóng `</body>` (tải nhanh hơn)
- Hoặc trong `<head>` với `defer` hoặc `async`

### 3. Console - Công cụ debug quan trọng

**Mở Console:**
- Chrome/Edge: `F12` hoặc `Ctrl + Shift + I` (Windows) / `Cmd + Option + I` (Mac)
- Tab: **Console**

**Các lệnh console cơ bản:**
```javascript
console.log('In ra màn hình');        // Hiển thị thông tin
console.warn('Cảnh báo');              // Cảnh báo (màu vàng)
console.error('Lỗi');                  // Lỗi (màu đỏ)
console.table([1, 2, 3]);             // Hiển thị dạng bảng
```

### 4. Biến (Variables)

**Biến** là nơi lưu trữ dữ liệu để tái sử dụng.

**Cú pháp khai báo:**
```javascript
let tenBien = 'Giá trị';
```

**Ba cách khai báo biến:**

#### 4.1. `var` (Cũ - không nên dùng)
```javascript
var hoTen = 'Nguyễn Văn A';
var hoTen = 'Nguyễn Văn B';  // ✅ Có thể khai báo lại
hoTen = 'Nguyễn Văn C';      // ✅ Có thể gán lại
```

#### 4.2. `let` (Khuyến nghị cho biến thay đổi)
```javascript
let tuoi = 20;
let tuoi = 21;  // ❌ Lỗi: Không thể khai báo lại
tuoi = 21;      // ✅ Có thể gán lại
```

#### 4.3. `const` (Khuyến nghị cho hằng số)
```javascript
const PI = 3.14;
PI = 3.15;      // ❌ Lỗi: Không thể gán lại
const PI = 3.15; // ❌ Lỗi: Không thể khai báo lại
```

**Quy tắc đặt tên biến:**
- Bắt đầu bằng chữ cái, `_`, hoặc `$`
- Không được bắt đầu bằng số
- Phân biệt hoa thường (`name` ≠ `Name`)
- Đặt tên có ý nghĩa, dùng camelCase
- ✅ Tốt: `hoTen`, `soLuongSinhVien`, `isActive`
- ❌ Xấu: `a`, `x1`, `data`, `temp`

**Ví dụ:**
```javascript
let hoTen = 'Nguyễn Văn A';
let tuoi = 20;
let laSinhVien = true;

console.log(hoTen);  // Nguyễn Văn A
console.log(tuoi);   // 20
```

#### 4.4. Phạm vi hoạt động (Scope) của biến

Phạm vi hoạt động (Scope) quyết định nơi bạn có thể truy cập và sử dụng biến. Trong JavaScript, có 2 phạm vi cơ bản cần biết ở giai đoạn này:

- **Global Scope (Toàn cục):** Biến khai báo bên ngoài tất cả các khối lệnh (như ở đầu file). Có thể truy cập và sử dụng ở bất kỳ đâu trong code.
- **Block Scope (Khối lệnh):** Biến khai báo bên trong cặp dấu ngoặc nhọn `{}` (ví dụ: khối lệnh `if`, vòng lặp `for`, hoặc đơn giản là một cặp `{}` bao bọc độc lập). 
  - Chỉ có `let` và `const` là tuân thủ **Block Scope** (không thể dùng bên ngoài `{}`).
  - `var` **không** có block scope (có thể truy cập từ bên ngoài `{}`).

**Ví dụ minh họa:**
```javascript
let globalVar = 'Tôi ở ngoài';

{
    let blockLet = 'Tôi ở trong block (let)';
    const blockConst = 'Tôi ở trong block (const)';
    var blockVar = 'Tôi ở trong block (var)';
    
    console.log(globalVar);   // ✅ OK: "Tôi ở ngoài"
    console.log(blockLet);    // ✅ OK
}

console.log(blockVar);        // ✅ OK: "Tôi ở trong block (var)" (var lọt ra ngoài)
console.log(blockLet);        // ❌ Lỗi: blockLet is not defined (let bị chặn lại)
console.log(blockConst);      // ❌ Lỗi: blockConst is not defined (const bị chặn lại)
```

> [!IMPORTANT]
> Đây là lý do chính mà bạn nên luôn dùng `let` và `const` thay vì `var`. Việc sử dụng `var` có thể làm rò rỉ biến ra ngoài khối lệnh, gây ra các lỗi logic trùng tên biến rất khó kiểm soát khi code của bạn lớn lên.

### 5. Kiểu dữ liệu (Data Types)

JavaScript có các kiểu dữ liệu cơ bản:

#### 5.1. String (Chuỗi)
```javascript
let hoTen = 'Nguyễn Văn A';      // Dấu nháy đơn
let diaChi = "123 Đường ABC";    // Dấu nháy kép
let email = `test@example.com`;  // Template literal (ES6)

// Nối chuỗi
let fullName = hoTen + ' - ' + diaChi;
console.log(fullName);  // "Nguyễn Văn A - 123 Đường ABC"
```

#### 5.2. Number (Số)
```javascript
let tuoi = 20;           // Số nguyên
let diemSo = 8.5;        // Số thập phân
let soAm = -10;          // Số âm

// Phép toán
let tong = tuoi + diemSo;  // 28.5
let tich = tuoi * 2;       // 40
```

#### 5.3. Boolean (Đúng/Sai)
```javascript
let laSinhVien = true;   // Đúng
let daTotNghiep = false; // Sai

// Dùng trong điều kiện
if (laSinhVien) {
    console.log('Bạn là sinh viên');
}
```

#### 5.4. Undefined (Chưa định nghĩa)
```javascript
let bienChuaGan;
console.log(bienChuaGan);  // undefined

let bienNull = undefined;
console.log(bienNull);     // undefined
```

#### 5.5. Null (Rỗng)
```javascript
let rong = null;
console.log(rong);  // null

// null vs undefined
console.log(null == undefined);      // true (so sánh lỏng)
console.log(null === undefined);     // false (so sánh chặt)
```

**Kiểm tra kiểu dữ liệu:**
```javascript
console.log(typeof 'hello');      // "string"
console.log(typeof 123);          // "number"
console.log(typeof true);         // "boolean"
console.log(typeof undefined);    // "undefined"
console.log(typeof null);         // "object" (bug của JS)
```

### 6. Toán tử (Operators)

#### 6.1. Toán tử số học
```javascript
let a = 10;
let b = 3;

console.log(a + b);  // 13 (Cộng)
console.log(a - b);  // 7 (Trừ)
console.log(a * b);  // 30 (Nhân)
console.log(a / b);  // 3.333... (Chia)
console.log(a % b);  // 1 (Chia lấy dư)
console.log(a ** b); // 1000 (Lũy thừa - ES6)

// Tăng/Giảm
let x = 5;
x++;      // x = 6 (tăng sau)
++x;      // x = 7 (tăng trước)
x--;      // x = 6 (giảm sau)
--x;      // x = 5 (giảm trước)
```

#### 6.2. Toán tử gán
```javascript
let x = 10;
x += 5;   // x = x + 5 → 15
x -= 3;   // x = x - 3 → 12
x *= 2;   // x = x * 2 → 24
x /= 4;   // x = x / 4 → 6
x %= 5;   // x = x % 5 → 1
```

#### 6.3. Toán tử so sánh
```javascript
let a = 5;
let b = '5';

console.log(a == b);   // true (so sánh lỏng - chỉ so giá trị)
console.log(a === b);  // false (so sánh chặt - so giá trị + kiểu)
console.log(a != b);   // false
console.log(a !== b);  // true

console.log(5 > 3);    // true
console.log(5 < 3);    // false
console.log(5 >= 5);   // true
console.log(5 <= 3);   // false
```

**⚠️ Lưu ý quan trọng:**
- Luôn dùng `===` và `!==` thay vì `==` và `!=` (tránh lỗi)

#### 6.4. Toán tử logic
```javascript
// AND (&&) - Tất cả đều đúng
console.log(true && true);   // true
console.log(true && false);  // false
console.log(false && false); // false

// OR (||) - Một trong hai đúng
console.log(true || false);  // true
console.log(false || false); // false

// NOT (!) - Đảo ngược
console.log(!true);   // false
console.log(!false);  // true

// Ví dụ thực tế
let tuoi = 20;
let coThe = true;

if (tuoi >= 18 && coThe) {
    console.log('Được phép tham gia');
}
```

#### 6.5. Toán tử nối chuỗi
```javascript
let ho = 'Nguyễn';
let ten = 'Văn A';
let hoTen = ho + ' ' + ten;  // "Nguyễn Văn A"

// Template literal (ES6) - KHUYẾN NGHỊ
let hoTen2 = `${ho} ${ten}`;  // "Nguyễn Văn A"
let thongBao = `Xin chào ${hoTen}, bạn ${tuoi} tuổi`;  // "Xin chào Nguyễn Văn A, bạn 20 tuổi"
```

---

## 💻 Ví dụ minh họa

### Ví dụ 1: Tính toán đơn giản
```javascript
// Khai báo biến
let soThuNhat = 10;
let soThuHai = 5;

// Tính toán
let tong = soThuNhat + soThuHai;
let hieu = soThuNhat - soThuHai;
let tich = soThuNhat * soThuHai;
let thuong = soThuNhat / soThuHai;

// In kết quả
console.log('Tổng:', tong);      // 15
console.log('Hiệu:', hieu);      // 5
console.log('Tích:', tich);      // 50
console.log('Thương:', thuong);  // 2
```

### Ví dụ 2: Thông tin sinh viên
```javascript
// Thông tin sinh viên
const hoTen = 'Nguyễn Văn A';
let tuoi = 20;
const maSoSinhVien = 'SV001';
let diemTrungBinh = 8.5;
let laSinhVienNam1 = true;

// Hiển thị thông tin
console.log('Họ tên:', hoTen);
console.log('Tuổi:', tuoi);
console.log('Mã số:', maSoSinhVien);
console.log('Điểm TB:', diemTrungBinh);
console.log('Sinh viên năm 1:', laSinhVienNam1);

// Tăng tuổi
tuoi = tuoi + 1;
console.log('Tuổi mới:', tuoi);  // 21
```

### Ví dụ 3: So sánh và điều kiện
```javascript
let diem = 8.5;

// So sánh
console.log('Điểm >= 8?', diem >= 8);        // true
console.log('Điểm === 8.5?', diem === 8.5);  // true
console.log('Điểm == "8.5"?', diem == "8.5"); // true (⚠️ nguy hiểm)
console.log('Điểm === "8.5"?', diem === "8.5"); // false (✅ đúng)

// Logic
let coDiemTot = diem >= 8;
let coDiemKha = diem >= 7 && diem < 8;
let coDiemTrungBinh = diem < 7;

console.log('Điểm tốt?', coDiemTot);  // true
```

---

## 🧪 Quiz cuối buổi (7 câu)

### Câu 1: Khai báo biến nào sau đây ĐÚNG?
A. `let 1tuoi = 20;`  
B. `let tuoi = 20;`  
C. `let tuoi@name = 20;`  
D. `let tuoi-name = 20;`

**Đáp án: B**

### Câu 2: Kết quả của `console.log(typeof null)` là gì?
A. `"null"`  
B. `"undefined"`  
C. `"object"`  
D. `"number"`

**Đáp án: C** (Bug của JavaScript)

### Câu 3: Kết quả của `5 == "5"` và `5 === "5"` là gì?
A. `true, true`  
B. `true, false`  
C. `false, true`  
D. `false, false`

**Đáp án: B**

### Câu 4: Toán tử nào dùng để chia lấy dư?
A. `/`  
B. `%`  
C. `//`  
D. `mod`

**Đáp án: B**

### Câu 5: Biến nào sau đây KHÔNG thể gán lại giá trị?
A. `var x = 10;`  
B. `let y = 10;`  
C. `const z = 10;`  
D. Tất cả đều có thể

**Đáp án: C**

### Câu 6: Kết quả của `true && false || true` là gì?
A. `true`  
B. `false`  
C. `undefined`  
D. Lỗi

**Đáp án: A** (Thứ tự: `(true && false) || true` = `false || true` = `true`)

### Câu 7: Cách nào sau đây là cách tốt nhất để nhúng JavaScript?
A. Inline trong HTML  
B. Internal trong thẻ `<script>`  
C. External file riêng  
D. Tất cả đều như nhau

**Đáp án: C**

---

## 📝 Bài tập về nhà (chuẩn bị cho buổi 2)

1. Tạo file HTML với thẻ `<script>` để chạy JavaScript
2. Khai báo các biến lưu thông tin cá nhân (họ tên, tuổi, địa chỉ)
3. Tính toán: Nhập 2 số, tính tổng, hiệu, tích, thương
4. So sánh: Kiểm tra tuổi có >= 18 không
5. In tất cả kết quả ra console

---

## 🔗 Tài liệu tham khảo

- [MDN: JavaScript Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
- [JavaScript.info: Variables](https://javascript.info/variables)

---

**Chúc bạn học tập tốt! 🚀**

