# Buổi 5: Mảng, Object & Destructuring

**Loại buổi**: Lý thuyết  
**Thời lượng**: 120 phút  
**Dự án**: To-Do App (đã có chức năng thêm công việc từ buổi 4)

---

## 🎯 Mục tiêu học tập

Sau buổi học này, bạn sẽ có thể:

- ✅ Khai báo và sử dụng mảng (Array)
- ✅ Sử dụng các phương thức mảng phổ biến (push, pop, filter, map...)
- ✅ Khai báo và sử dụng object
- ✅ Truy cập và thao tác với object
- ✅ Sử dụng destructuring để rút gọn code
- ✅ Áp dụng vào quản lý danh sách công việc

---

## 🧠 Nội dung chính

### 1. Mảng (Array)

**Mảng** là tập hợp các giá trị được sắp xếp theo thứ tự.

#### 1.1. Khai báo mảng

```javascript
// Cách 1: Array literal (khuyến nghị)
let danhSach = ['Nguyễn Văn A', 'Trần Thị B', 'Lê Văn C'];

// Cách 2: Array constructor
let danhSach2 = new Array('A', 'B', 'C');

// Mảng rỗng
let mangRong = [];

// Mảng hỗn hợp (có thể chứa nhiều kiểu dữ liệu)
let mangHonHop = [1, 'hello', true, null, { name: 'A' }];
```

#### 1.2. Truy cập phần tử

```javascript
let danhSach = ['Nguyễn Văn A', 'Trần Thị B', 'Lê Văn C'];

console.log(danhSach[0]);  // "Nguyễn Văn A" (phần tử đầu tiên)
console.log(danhSach[1]);  // "Trần Thị B"
console.log(danhSach[2]);  // "Lê Văn C"
console.log(danhSach.length);  // 3 (số phần tử)

// Truy cập phần tử cuối
console.log(danhSach[danhSach.length - 1]);  // "Lê Văn C"
```

#### 1.3. Thêm/Xóa phần tử

**Thêm vào cuối:**
```javascript
let danhSach = ['A', 'B'];
danhSach.push('C');  // Thêm vào cuối
console.log(danhSach);  // ['A', 'B', 'C']
```

**Xóa phần tử cuối:**
```javascript
let phanTuCuoi = danhSach.pop();  // Xóa và trả về phần tử cuối
console.log(phanTuCuoi);  // 'C'
console.log(danhSach);     // ['A', 'B']
```

**Thêm vào đầu:**
```javascript
danhSach.unshift('X');  // Thêm vào đầu
console.log(danhSach);   // ['X', 'A', 'B']
```

**Xóa phần tử đầu:**
```javascript
let phanTuDau = danhSach.shift();  // Xóa và trả về phần tử đầu
console.log(phanTuDau);  // 'X'
console.log(danhSach);   // ['A', 'B']
```

**Splice (thêm/xóa ở vị trí bất kỳ):**
```javascript
let danhSach = ['A', 'B', 'C', 'D'];
// splice(vị trí, số phần tử xóa, ...phần tử thêm)
danhSach.splice(2, 1, 'X');  // Xóa 1 phần tử ở vị trí 2, thêm 'X'
console.log(danhSach);  // ['A', 'B', 'X', 'D']
```

#### 1.4. Các phương thức mảng phổ biến

**forEach - Duyệt mảng:**
```javascript
let danhSach = ['A', 'B', 'C'];
danhSach.forEach(function(item, index) {
    console.log(`${index}: ${item}`);
});
// Output: 0: A, 1: B, 2: C
```

**map - Tạo mảng mới từ mảng cũ:**
```javascript
let so = [1, 2, 3, 4, 5];
let soBinhPhuong = so.map(function(item) {
    return item * item;
});
console.log(soBinhPhuong);  // [1, 4, 9, 16, 25]

// Arrow function
let soBinhPhuong2 = so.map(x => x * x);
```

**filter - Lọc phần tử:**
```javascript
let so = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let soChan = so.filter(function(item) {
    return item % 2 === 0;
});
console.log(soChan);  // [2, 4, 6, 8, 10]
```

**find - Tìm phần tử đầu tiên:**
```javascript
let danhSach = [
    { id: 1, ten: 'Công việc A' },
    { id: 2, ten: 'Công việc B' },
    { id: 3, ten: 'Công việc C' }
];

let congViec = danhSach.find(function(item) {
    return item.id === 2;
});
console.log(congViec);  // { id: 2, ten: 'Công việc B' }
```

**includes - Kiểm tra có chứa:**
```javascript
let danhSach = ['A', 'B', 'C'];
console.log(danhSach.includes('B'));  // true
console.log(danhSach.includes('D'));  // false
```

**indexOf - Tìm vị trí:**
```javascript
let danhSach = ['A', 'B', 'C'];
console.log(danhSach.indexOf('B'));  // 1
console.log(danhSach.indexOf('D'));  // -1 (không tìm thấy)
```

**slice - Cắt mảng:**
```javascript
let danhSach = ['A', 'B', 'C', 'D', 'E'];
let cat = danhSach.slice(1, 3);  // Từ vị trí 1 đến 3 (không bao gồm 3)
console.log(cat);  // ['B', 'C']
```

**join - Nối thành chuỗi:**
```javascript
let danhSach = ['A', 'B', 'C'];
let chuoi = danhSach.join(' - ');
console.log(chuoi);  // "A - B - C"
```

### 2. Object (Đối tượng)

**Object** là tập hợp các cặp key-value.

#### 2.1. Khai báo object

```javascript
// Cách 1: Object literal (khuyến nghị)
let sinhVien = {
    hoTen: 'Nguyễn Văn A',
    tuoi: 20,
    maSo: 'SV001',
    diemTrungBinh: 8.5
};

// Cách 2: Object constructor
let sinhVien2 = new Object();
sinhVien2.hoTen = 'Trần Thị B';
```

#### 2.2. Truy cập thuộc tính

```javascript
let sinhVien = {
    hoTen: 'Nguyễn Văn A',
    tuoi: 20,
    maSo: 'SV001'
};

// Cách 1: Dot notation
console.log(sinhVien.hoTen);  // "Nguyễn Văn A"
console.log(sinhVien.tuoi);   // 20

// Cách 2: Bracket notation
console.log(sinhVien['hoTen']);  // "Nguyễn Văn A"
console.log(sinhVien['tuoi']);   // 20

// Bracket notation hữu ích khi key là biến
let key = 'hoTen';
console.log(sinhVien[key]);  // "Nguyễn Văn A"
```

#### 2.3. Thêm/Sửa/Xóa thuộc tính

```javascript
let sinhVien = {
    hoTen: 'Nguyễn Văn A',
    tuoi: 20
};

// Thêm thuộc tính
sinhVien.diaChi = '123 Đường ABC';
sinhVien['maSo'] = 'SV001';

// Sửa thuộc tính
sinhVien.tuoi = 21;

// Xóa thuộc tính
delete sinhVien.diaChi;

console.log(sinhVien);  // { hoTen: 'Nguyễn Văn A', tuoi: 21, maSo: 'SV001' }
```

#### 2.4. Object trong Object (Nested)

```javascript
let sinhVien = {
    hoTen: 'Nguyễn Văn A',
    tuoi: 20,
    diaChi: {
        soNha: '123',
        duong: 'Đường ABC',
        phuong: 'Phường 1',
        quan: 'Quận 1'
    }
};

console.log(sinhVien.diaChi.quan);  // "Quận 1"
```

#### 2.5. Object với hàm (Method)

```javascript
let sinhVien = {
    hoTen: 'Nguyễn Văn A',
    tuoi: 20,
    layThongTin: function() {
        return `${this.hoTen}, ${this.tuoi} tuổi`;
    },
    // Arrow function (ES6)
    inThongTin: () => {
        console.log(`${sinhVien.hoTen}, ${sinhVien.tuoi} tuổi`);
    }
};

console.log(sinhVien.layThongTin());  // "Nguyễn Văn A, 20 tuổi"
sinhVien.inThongTin();                 // "Nguyễn Văn A, 20 tuổi"
```

#### 2.6. Duyệt object

```javascript
let sinhVien = {
    hoTen: 'Nguyễn Văn A',
    tuoi: 20,
    maSo: 'SV001'
};

// for...in
for (let key in sinhVien) {
    console.log(`${key}: ${sinhVien[key]}`);
}

// Object.keys()
let keys = Object.keys(sinhVien);
console.log(keys);  // ['hoTen', 'tuoi', 'maSo']

// Object.values()
let values = Object.values(sinhVien);
console.log(values);  // ['Nguyễn Văn A', 20, 'SV001']

// Object.entries()
let entries = Object.entries(sinhVien);
console.log(entries);  // [['hoTen', 'Nguyễn Văn A'], ['tuoi', 20], ...]
```

### 3. Destructuring (Phân rã)

**Destructuring** cho phép giải nén giá trị từ mảng hoặc object.

#### 3.1. Array Destructuring

```javascript
let danhSach = ['Nguyễn Văn A', 20, 'SV001'];

// Cách cũ
let hoTen = danhSach[0];
let tuoi = danhSach[1];
let maSo = danhSach[2];

// Destructuring
let [hoTen, tuoi, maSo] = danhSach;
console.log(hoTen);  // "Nguyễn Văn A"
console.log(tuoi);   // 20

// Bỏ qua phần tử
let [hoTen, , maSo] = danhSach;  // Bỏ qua phần tử thứ 2

// Giá trị mặc định
let [a, b = 0] = [1];
console.log(a);  // 1
console.log(b);  // 0 (mặc định)
```

#### 3.2. Object Destructuring

```javascript
let sinhVien = {
    hoTen: 'Nguyễn Văn A',
    tuoi: 20,
    maSo: 'SV001'
};

// Destructuring
let { hoTen, tuoi, maSo } = sinhVien;
console.log(hoTen);  // "Nguyễn Văn A"

// Đổi tên biến
let { hoTen: ten, tuoi: soTuoi } = sinhVien;
console.log(ten);     // "Nguyễn Văn A"
console.log(soTuoi);  // 20

// Giá trị mặc định
let { hoTen, tuoi, diaChi = 'Chưa có' } = sinhVien;
console.log(diaChi);  // "Chưa có"
```

#### 3.3. Destructuring trong hàm

```javascript
// Object destructuring trong tham số
function inThongTin({ hoTen, tuoi }) {
    console.log(`${hoTen}, ${tuoi} tuổi`);
}

let sinhVien = { hoTen: 'Nguyễn Văn A', tuoi: 20 };
inThongTin(sinhVien);  // "Nguyễn Văn A, 20 tuổi"
```

---

## 💻 Ví dụ minh họa

### Ví dụ 1: Quản lý danh sách công việc

```javascript
// Mảng công việc
let danhSachCongViec = [
    { id: 1, ten: 'Học JavaScript', trangThai: 'chua lam' },
    { id: 2, ten: 'Làm bài tập', trangThai: 'dang lam' },
    { id: 3, ten: 'Nộp bài', trangThai: 'chua lam' }
];

// Thêm công việc mới
function themCongViec(ten, trangThai = 'chua lam') {
    let idMoi = danhSachCongViec.length + 1;
    danhSachCongViec.push({ id: idMoi, ten, trangThai });
}

// Tìm công việc theo ID
function timCongViec(id) {
    return danhSachCongViec.find(cv => cv.id === id);
}

// Xóa công việc
function xoaCongViec(id) {
    danhSachCongViec = danhSachCongViec.filter(cv => cv.id !== id);
}

// Lọc công việc theo trạng thái
function locCongViec(trangThai) {
    return danhSachCongViec.filter(cv => cv.trangThai === trangThai);
}

// Sử dụng
themCongViec('Đọc sách');
console.log(timCongViec(2));
xoaCongViec(1);
console.log(locCongViec('chua lam'));
```

### Ví dụ 2: Tính điểm trung bình

```javascript
let danhSachDiem = [
    { mon: 'Toán', diem: 8.5 },
    { mon: 'Lý', diem: 9.0 },
    { mon: 'Hóa', diem: 7.5 }
];

// Tính tổng điểm
let tongDiem = danhSachDiem.reduce(function(tong, item) {
    return tong + item.diem;
}, 0);

// Tính điểm trung bình
let diemTrungBinh = tongDiem / danhSachDiem.length;
console.log(`Điểm trung bình: ${diemTrungBinh.toFixed(2)}`);  // 8.33
```

### Ví dụ 3: Destructuring với công việc

```javascript
let congViec = {
    id: 1,
    ten: 'Học JavaScript',
    moTa: 'Học về mảng và object',
    trangThai: 'chua lam',
    doUuTien: 'cao'
};

// Destructuring
let { id, ten, trangThai } = congViec;
console.log(`${id}: ${ten} - ${trangThai}`);

// Trong hàm
function capNhatTrangThai({ id, trangThai }) {
    console.log(`Cập nhật công việc ${id} thành ${trangThai}`);
}

capNhatTrangThai({ id: 1, trangThai: 'hoan thanh' });
```

---

## 🧪 Quiz cuối buổi (7 câu)

### Câu 1: Kết quả của `[1, 2, 3].push(4)` là gì?
A. `[1, 2, 3, 4]`  
B. `4` (độ dài mảng)  
C. `true`  
D. `undefined`

**Đáp án: B** (push trả về độ dài mảng mới)

### Câu 2: Cách nào đúng để truy cập thuộc tính `ten` của object `sv`?
A. `sv.ten`  
B. `sv['ten']`  
C. Cả A và B  
D. `sv[ten]` (thiếu dấu nháy)

**Đáp án: C**

### Câu 3: Kết quả của `[1, 2, 3].map(x => x * 2)` là gì?
A. `[2, 4, 6]`  
B. `[1, 2, 3]`  
C. `[1, 4, 9]`  
D. Lỗi

**Đáp án: A**

### Câu 4: Destructuring đúng cho `let [a, b] = [1, 2, 3]`?
A. `a = 1, b = 2`  
B. `a = [1, 2], b = 3`  
C. Lỗi  
D. `a = 1, b = [2, 3]`

**Đáp án: A**

### Câu 5: Phương thức nào dùng để lọc mảng?
A. `map`  
B. `filter`  
C. `find`  
D. `forEach`

**Đáp án: B**

### Câu 6: Kết quả của `let {x, y} = {x: 1, y: 2, z: 3}`?
A. `x = 1, y = 2`  
B. `x = {x: 1}, y = {y: 2}`  
C. Lỗi  
D. `x = undefined, y = undefined`

**Đáp án: A**

### Câu 7: Cách nào xóa phần tử cuối cùng của mảng?
A. `array.remove()`  
B. `array.pop()`  
C. `array.delete()`  
D. `array.shift()`

**Đáp án: B**

---

## 📝 Bài tập về nhà (chuẩn bị cho buổi 6)

1. Tạo mảng `danhSachCongViec` chứa các object công việc
2. Viết hàm `themCongViec(ten, moTa)` thêm công việc mới
3. Viết hàm `hienThiDanhSach()` hiển thị tất cả công việc
4. Dùng `map` để tạo mảng chỉ chứa tên công việc
5. Dùng `filter` để lọc công việc chưa hoàn thành

---

## 🔗 Tài liệu tham khảo

- [MDN: Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [MDN: Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
- [JavaScript.info: Destructuring](https://javascript.info/destructuring-assignment)

---

**Chúc bạn học tập tốt! 🚀**
