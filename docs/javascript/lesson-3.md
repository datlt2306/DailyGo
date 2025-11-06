# Buổi 3: Cấu trúc điều khiển, Hàm & Scope

**Loại buổi**: Lý thuyết  
**Thời lượng**: 120 phút  
**Dự án**: To-Do App (đã có form nhập liệu từ buổi 2)

---

## 🎯 Mục tiêu học tập

Sau buổi học này, bạn sẽ có thể:

- ✅ Sử dụng cấu trúc điều khiển: if/else, switch
- ✅ Sử dụng vòng lặp: for, while, forEach
- ✅ Tạo và gọi hàm (function, arrow function)
- ✅ Hiểu về scope (phạm vi biến)
- ✅ Áp dụng vào việc validate và xử lý dữ liệu

---

## 🧠 Nội dung chính

### 1. Cấu trúc điều khiển (Control Flow)

#### 1.1. if / else / else if

**Cú pháp:**
```javascript
if (điều kiện) {
    // Code chạy nếu điều kiện đúng
} else {
    // Code chạy nếu điều kiện sai
}
```

**Ví dụ:**
```javascript
let tuoi = 20;

if (tuoi >= 18) {
    console.log('Bạn đã trưởng thành');
} else {
    console.log('Bạn chưa trưởng thành');
}

// Nhiều điều kiện
let diem = 8.5;

if (diem >= 9) {
    console.log('Xuất sắc');
} else if (diem >= 8) {
    console.log('Giỏi');
} else if (diem >= 7) {
    console.log('Khá');
} else if (diem >= 5) {
    console.log('Trung bình');
} else {
    console.log('Yếu');
}
```

**Toán tử ternary (rút gọn if/else):**
```javascript
let tuoi = 20;
let thongBao = tuoi >= 18 ? 'Đã trưởng thành' : 'Chưa trưởng thành';
console.log(thongBao);  // "Đã trưởng thành"

// Tương đương với:
let thongBao2;
if (tuoi >= 18) {
    thongBao2 = 'Đã trưởng thành';
} else {
    thongBao2 = 'Chưa trưởng thành';
}
```

#### 1.2. switch / case

**Cú pháp:**
```javascript
switch (biểu thức) {
    case giá trị 1:
        // Code
        break;
    case giá trị 2:
        // Code
        break;
    default:
        // Code mặc định
}
```

**Ví dụ:**
```javascript
let thu = 3;

switch (thu) {
    case 1:
        console.log('Chủ nhật');
        break;
    case 2:
        console.log('Thứ hai');
        break;
    case 3:
        console.log('Thứ ba');
        break;
    case 4:
        console.log('Thứ tư');
        break;
    case 5:
        console.log('Thứ năm');
        break;
    case 6:
        console.log('Thứ sáu');
        break;
    case 7:
        console.log('Thứ bảy');
        break;
    default:
        console.log('Không hợp lệ');
}

// ⚠️ Nhớ dùng break, nếu không sẽ "fall through"
```

**So sánh if/else vs switch:**
- `if/else`: Dùng cho điều kiện phức tạp, so sánh phạm vi
- `switch`: Dùng cho so sánh giá trị cụ thể, code gọn hơn

### 2. Vòng lặp (Loops)

#### 2.1. for loop

**Cú pháp:**
```javascript
for (khởi tạo; điều kiện; bước nhảy) {
    // Code
}
```

**Ví dụ:**
```javascript
// In số từ 1 đến 5
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
// Output: 1, 2, 3, 4, 5

// In số chẵn từ 0 đến 10
for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}
// Output: 0, 2, 4, 6, 8, 10
```

**Ví dụ thực tế: Tính tổng từ 1 đến n**
```javascript
let n = 10;
let tong = 0;

for (let i = 1; i <= n; i++) {
    tong += i;  // tong = tong + i
}

console.log(`Tổng từ 1 đến ${n} là: ${tong}`);  // 55
```

#### 2.2. while loop

**Cú pháp:**
```javascript
while (điều kiện) {
    // Code
}
```

**Ví dụ:**
```javascript
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}
// Output: 1, 2, 3, 4, 5
```

**Ví dụ: Đếm ngược**
```javascript
let dem = 10;
while (dem > 0) {
    console.log(dem);
    dem--;
}
console.log('Bắt đầu!');
```

#### 2.3. do...while loop

**Cú pháp:**
```javascript
do {
    // Code (chạy ít nhất 1 lần)
} while (điều kiện);
```

**Ví dụ:**
```javascript
let x = 0;
do {
    console.log(x);
    x++;
} while (x < 5);
```

#### 2.4. for...of (ES6) - Dùng với mảng

```javascript
let danhSach = ['Nguyễn Văn A', 'Trần Thị B', 'Lê Văn C'];

for (let ten of danhSach) {
    console.log(ten);
}
// Output: Nguyễn Văn A, Trần Thị B, Lê Văn C
```

#### 2.5. forEach (Method của mảng)

```javascript
let danhSach = [1, 2, 3, 4, 5];

danhSach.forEach(function(item) {
    console.log(item);
});

// Hoặc dùng arrow function
danhSach.forEach(item => console.log(item));
```

**So sánh các vòng lặp:**
- `for`: Biết trước số lần lặp
- `while`: Không biết trước số lần lặp
- `do...while`: Chạy ít nhất 1 lần
- `for...of`: Duyệt mảng (không cần index)
- `forEach`: Method của mảng (gọn, hiện đại)

### 3. Hàm (Functions)

**Hàm** là một đoạn code được đặt tên, có thể tái sử dụng nhiều lần.

#### 3.1. Function Declaration

```javascript
function tenHam(thamSo1, thamSo2) {
    // Code
    return ketQua;
}

// Gọi hàm
tenHam(giaTri1, giaTri2);
```

**Ví dụ:**
```javascript
// Hàm tính tổng
function tinhTong(a, b) {
    return a + b;
}

let ketQua = tinhTong(5, 3);
console.log(ketQua);  // 8

// Hàm không có return
function inThongBao(ten) {
    console.log(`Xin chào ${ten}!`);
}

inThongBao('Nguyễn Văn A');  // "Xin chào Nguyễn Văn A!"
```

#### 3.2. Function Expression

```javascript
const tenHam = function(thamSo) {
    // Code
    return ketQua;
};
```

**Ví dụ:**
```javascript
const tinhTich = function(a, b) {
    return a * b;
};

console.log(tinhTich(4, 5));  // 20
```

#### 3.3. Arrow Function (ES6) - KHUYẾN NGHỊ

**Cú pháp:**
```javascript
const tenHam = (thamSo) => {
    // Code
    return ketQua;
};

// Rút gọn (1 dòng)
const tenHam = (thamSo) => ketQua;
```

**Ví dụ:**
```javascript
// Dạng đầy đủ
const tinhTong = (a, b) => {
    return a + b;
};

// Dạng rút gọn (1 dòng)
const tinhTong2 = (a, b) => a + b;

// 1 tham số: bỏ ngoặc đơn
const binhPhuong = x => x * x;

// Không tham số
const chao = () => console.log('Xin chào!');

console.log(tinhTong(3, 4));    // 7
console.log(binhPhuong(5));     // 25
chao();                          // "Xin chào!"
```

**So sánh:**
```javascript
// Function Declaration
function tong(a, b) { return a + b; }

// Function Expression
const tong2 = function(a, b) { return a + b; };

// Arrow Function
const tong3 = (a, b) => a + b;
```

#### 3.4. Tham số mặc định

```javascript
function chao(ten = 'Khách') {
    console.log(`Xin chào ${ten}!`);
}

chao();              // "Xin chào Khách!"
chao('Nguyễn Văn A'); // "Xin chào Nguyễn Văn A!"
```

#### 3.5. Return

- `return`: Trả về giá trị và kết thúc hàm
- Không có `return`: Hàm trả về `undefined`

```javascript
function coReturn() {
    return 'Có giá trị';
}

function khongReturn() {
    console.log('Không có return');
}

console.log(coReturn());      // "Có giá trị"
console.log(khongReturn());   // undefined
```

### 4. Scope (Phạm vi biến)

**Scope** là phạm vi mà biến có thể được truy cập.

#### 4.1. Global Scope (Toàn cục)

```javascript
let bienToanCuc = 'Tôi có thể dùng ở mọi nơi';

function ham1() {
    console.log(bienToanCuc);  // ✅ Có thể truy cập
}

function ham2() {
    console.log(bienToanCuc);  // ✅ Có thể truy cập
}
```

#### 4.2. Function Scope (Phạm vi hàm)

```javascript
function ham1() {
    let bienLocal = 'Chỉ dùng trong hàm này';
    console.log(bienLocal);  // ✅ OK
}

console.log(bienLocal);  // ❌ Lỗi: bienLocal is not defined
```

#### 4.3. Block Scope (Phạm vi khối)

```javascript
if (true) {
    let bienBlock = 'Chỉ trong block này';
    const bienBlock2 = 'Chỉ trong block này';
    console.log(bienBlock);  // ✅ OK
}

console.log(bienBlock);  // ❌ Lỗi

// var không có block scope
if (true) {
    var bienVar = 'Có thể dùng ngoài block';
}
console.log(bienVar);  // ✅ OK (⚠️ không nên dùng)
```

**Lưu ý quan trọng:**
- `let` và `const` có block scope
- `var` chỉ có function scope (không có block scope)

#### 4.4. Shadowing (Che biến)

```javascript
let x = 10;

function ham() {
    let x = 20;  // Biến x trong hàm "che" biến x ngoài
    console.log(x);  // 20
}

console.log(x);  // 10
```

---

## 💻 Ví dụ minh họa

### Ví dụ 1: Kiểm tra điểm số

```javascript
function xepLoai(diem) {
    if (diem >= 9) {
        return 'Xuất sắc';
    } else if (diem >= 8) {
        return 'Giỏi';
    } else if (diem >= 7) {
        return 'Khá';
    } else if (diem >= 5) {
        return 'Trung bình';
    } else {
        return 'Yếu';
    }
}

console.log(xepLoai(9.5));  // "Xuất sắc"
console.log(xepLoai(7.5));  // "Khá"
console.log(xepLoai(4));    // "Yếu"
```

### Ví dụ 2: Validate dữ liệu đầu vào

```javascript
function kiemTraTuoi(tuoi) {
    if (typeof tuoi !== 'number') {
        return 'Tuổi phải là số';
    }
    
    if (tuoi < 0) {
        return 'Tuổi không hợp lệ';
    }
    
    if (tuoi < 18) {
        return 'Chưa đủ tuổi';
    }
    
    return 'Hợp lệ';
}

console.log(kiemTraTuoi(20));   // "Hợp lệ"
console.log(kiemTraTuoi(15));   // "Chưa đủ tuổi"
console.log(kiemTraTuoi(-5));   // "Tuổi không hợp lệ"
console.log(kiemTraTuoi('abc')); // "Tuổi phải là số"
```

### Ví dụ 3: Tính giai thừa

```javascript
function giaiThua(n) {
    if (n < 0) return 'Không hợp lệ';
    if (n === 0 || n === 1) return 1;
    
    let ketQua = 1;
    for (let i = 2; i <= n; i++) {
        ketQua *= i;
    }
    return ketQua;
}

console.log(giaiThua(5));  // 120 (5! = 5*4*3*2*1)
```

### Ví dụ 4: Tìm số lớn nhất trong mảng

```javascript
function timSoLonNhat(mang) {
    if (mang.length === 0) return null;
    
    let max = mang[0];
    for (let i = 1; i < mang.length; i++) {
        if (mang[i] > max) {
            max = mang[i];
        }
    }
    return max;
}

let diemSo = [8, 9, 7, 8.5, 9.5];
console.log(timSoLonNhat(diemSo));  // 9.5
```

---

## 🧪 Quiz cuối buổi (7 câu)

### Câu 1: Kết quả của đoạn code sau là gì?
```javascript
let x = 5;
if (x > 3) {
    console.log('A');
} else if (x > 10) {
    console.log('B');
} else {
    console.log('C');
}
```
A. A  
B. B  
C. C  
D. Không có output

**Đáp án: A**

### Câu 2: Thiếu gì trong switch case sau?
```javascript
switch (x) {
    case 1:
        console.log('Một');
    case 2:
        console.log('Hai');
        break;
}
```
A. Thiếu `default`  
B. Thiếu `break` ở case 1  
C. Thiếu `switch`  
D. Không thiếu gì

**Đáp án: B**

### Câu 3: Vòng lặp nào chạy ít nhất 1 lần?
A. `for`  
B. `while`  
C. `do...while`  
D. `for...of`

**Đáp án: C**

### Câu 4: Kết quả của `(() => 5)()` là gì?
A. `undefined`  
B. `5`  
C. Lỗi  
D. `null`

**Đáp án: B** (IIFE - Immediately Invoked Function Expression)

### Câu 5: Scope của biến `let` trong block `{}` là gì?
A. Global  
B. Function  
C. Block  
D. Tất cả đều đúng

**Đáp án: C**

### Câu 6: Hàm nào sau đây KHÔNG có return?
A. `function a() { return 1; }`  
B. `const b = () => 2;`  
C. `function c() { console.log(3); }`  
D. Tất cả đều có return

**Đáp án: C**

### Câu 7: Kết quả của đoạn code sau?
```javascript
let x = 1;
function test() {
    let x = 2;
    console.log(x);
}
test();
console.log(x);
```
A. `2, 1`  
B. `1, 2`  
C. `2, 2`  
D. `1, 1`

**Đáp án: A**

---

## 📝 Bài tập về nhà (chuẩn bị cho buổi 4)

1. Tạo hàm `kiemTraCongViec(tenCongViec)` kiểm tra:
   - Tên công việc không được rỗng
   - Tên công việc phải có ít nhất 3 ký tự
   - Trả về `true` nếu hợp lệ, `false` nếu không

2. Tạo hàm `tinhTongCongViec(soLuong)` dùng vòng lặp tính tổng số công việc từ 1 đến n

3. Dùng switch case để phân loại độ ưu tiên (1: Cao, 2: Trung bình, 3: Thấp)

---

## 🔗 Tài liệu tham khảo

- [MDN: Control Flow](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
- [JavaScript.info: Functions](https://javascript.info/function-basics)

---

**Chúc bạn học tập tốt! 🚀**
