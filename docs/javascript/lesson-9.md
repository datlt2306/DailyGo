# Buổi 9: JSON & LocalStorage

**Loại buổi**: Lý thuyết  
**Thời lượng**: 120 phút  
**Dự án**: To-Do App (đã có CRUD cơ bản từ buổi 8)

---

## 🎯 Mục tiêu học tập

Sau buổi học này, bạn sẽ có thể:

- ✅ Hiểu JSON là gì và cách sử dụng
- ✅ Chuyển đổi giữa JSON và JavaScript object
- ✅ Sử dụng LocalStorage để lưu trữ dữ liệu
- ✅ Sử dụng SessionStorage để lưu trữ tạm thời
- ✅ Xử lý lỗi khi làm việc với Storage
- ✅ Áp dụng vào việc lưu dữ liệu ứng dụng

---

## 🧠 Nội dung chính

### 1. JSON là gì?

**JSON (JavaScript Object Notation)** là định dạng dữ liệu dạng text, dùng để lưu trữ và truyền dữ liệu.

**Đặc điểm:**
- Dễ đọc, dễ viết
- Nhẹ, nhanh
- Dùng để trao đổi dữ liệu giữa client và server
- Hỗ trợ bởi hầu hết ngôn ngữ lập trình

**Cấu trúc JSON:**
```json
{
    "hoTen": "Nguyễn Văn A",
    "tuoi": 20,
    "laSinhVien": true,
    "danhSach": [1, 2, 3],
    "diaChi": {
        "soNha": "123",
        "duong": "Đường ABC"
    }
}
```

**Quy tắc JSON:**
- Key phải là chuỗi (có dấu nháy kép)
- Giá trị có thể là: string, number, boolean, null, array, object
- Không có functions, undefined
- Không có comments
- Dấu phẩy cuối cùng không được phép

### 2. JSON.stringify() - Chuyển Object → JSON

**Chuyển đổi JavaScript object/array thành chuỗi JSON:**

```javascript
let sinhVien = {
    hoTen: 'Nguyễn Văn A',
    tuoi: 20,
    laSinhVien: true
};

let jsonString = JSON.stringify(sinhVien);
console.log(jsonString);
// '{"hoTen":"Nguyễn Văn A","tuoi":20,"laSinhVien":true}'
console.log(typeof jsonString);  // "string"
```

**Ví dụ với mảng:**
```javascript
let danhSach = [
    { id: 1, ten: 'Công việc A' },
    { id: 2, ten: 'Công việc B' }
];

let jsonString = JSON.stringify(danhSach);
console.log(jsonString);
// '[{"id":1,"ten":"Công việc A"},{"id":2,"ten":"Công việc B"}]'
```

**Tham số thứ 2: Replacer (lọc thuộc tính)**
```javascript
let sinhVien = {
    hoTen: 'Nguyễn Văn A',
    tuoi: 20,
    password: 'secret123'
};

// Chỉ lấy hoTen và tuoi
let jsonString = JSON.stringify(sinhVien, ['hoTen', 'tuoi']);
console.log(jsonString);
// '{"hoTen":"Nguyễn Văn A","tuoi":20}'
```

**Tham số thứ 3: Space (định dạng đẹp)**
```javascript
let sinhVien = {
    hoTen: 'Nguyễn Văn A',
    tuoi: 20
};

let jsonString = JSON.stringify(sinhVien, null, 2);
console.log(jsonString);
// {
//   "hoTen": "Nguyễn Văn A",
//   "tuoi": 20
// }
```

### 3. JSON.parse() - Chuyển JSON → Object

**Chuyển đổi chuỗi JSON thành JavaScript object/array:**

```javascript
let jsonString = '{"hoTen":"Nguyễn Văn A","tuoi":20,"laSinhVien":true}';

let sinhVien = JSON.parse(jsonString);
console.log(sinhVien);
// { hoTen: 'Nguyễn Văn A', tuoi: 20, laSinhVien: true }
console.log(sinhVien.hoTen);  // "Nguyễn Văn A"
```

**Ví dụ với mảng:**
```javascript
let jsonString = '[{"id":1,"ten":"Công việc A"},{"id":2,"ten":"Công việc B"}]';

let danhSach = JSON.parse(jsonString);
console.log(danhSach);
// [{ id: 1, ten: 'Công việc A' }, { id: 2, ten: 'Công việc B' }]
```

**Xử lý lỗi:**
```javascript
let jsonString = '{invalid json}';

try {
    let data = JSON.parse(jsonString);
} catch (error) {
    console.error('Lỗi parse JSON:', error.message);
    // Xử lý lỗi...
}
```

### 4. LocalStorage - Lưu trữ vĩnh viễn

**LocalStorage** lưu trữ dữ liệu trên trình duyệt, **tồn tại vĩnh viễn** cho đến khi:
- Người dùng xóa
- Code xóa
- Dữ liệu hết hạn (theo trình duyệt)

**Đặc điểm:**
- Lưu trữ theo domain (mỗi website có localStorage riêng)
- Dung lượng: ~5-10MB
- Chỉ lưu được string
- Dữ liệu không tự động hết hạn

#### 4.1. setItem() - Lưu dữ liệu

```javascript
// Lưu string
localStorage.setItem('ten', 'Nguyễn Văn A');
localStorage.setItem('tuoi', '20');

// Lưu object/array (phải stringify trước)
let sinhVien = {
    hoTen: 'Nguyễn Văn A',
    tuoi: 20
};
localStorage.setItem('sinhVien', JSON.stringify(sinhVien));

let danhSach = [1, 2, 3];
localStorage.setItem('danhSach', JSON.stringify(danhSach));
```

#### 4.2. getItem() - Lấy dữ liệu

```javascript
// Lấy string
let ten = localStorage.getItem('ten');
console.log(ten);  // "Nguyễn Văn A"

// Lấy object/array (phải parse)
let sinhVienString = localStorage.getItem('sinhVien');
let sinhVien = JSON.parse(sinhVienString);
console.log(sinhVien);  // { hoTen: 'Nguyễn Văn A', tuoi: 20 }

// Kiểm tra null trước khi parse
let danhSachString = localStorage.getItem('danhSach');
let danhSach = danhSachString ? JSON.parse(danhSachString) : [];
```

#### 4.3. removeItem() - Xóa một key

```javascript
localStorage.removeItem('ten');
```

#### 4.4. clear() - Xóa tất cả

```javascript
localStorage.clear();  // Xóa tất cả dữ liệu của domain
```

#### 4.5. key() - Lấy key theo index

```javascript
// Lấy key đầu tiên
let firstKey = localStorage.key(0);
console.log(firstKey);

// Duyệt tất cả keys
for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let value = localStorage.getItem(key);
    console.log(`${key}: ${value}`);
}
```

#### 4.6. length - Số lượng items

```javascript
console.log(localStorage.length);  // Số lượng items
```

### 5. SessionStorage - Lưu trữ tạm thời

**SessionStorage** tương tự LocalStorage nhưng:
- Dữ liệu **tự động xóa** khi đóng tab/window
- Dữ liệu chỉ tồn tại trong session hiện tại

**Cách sử dụng giống LocalStorage:**
```javascript
// Lưu
sessionStorage.setItem('ten', 'Nguyễn Văn A');

// Lấy
let ten = sessionStorage.getItem('ten');

// Xóa
sessionStorage.removeItem('ten');

// Xóa tất cả
sessionStorage.clear();
```

**Khi nào dùng SessionStorage vs LocalStorage:**
- **LocalStorage**: Dữ liệu cần lưu lâu dài (cài đặt, giỏ hàng, danh sách công việc...)
- **SessionStorage**: Dữ liệu tạm thời (form đang điền, thông tin session...)

### 6. Xử lý lỗi và best practices

#### 6.1. Xử lý lỗi khi parse JSON

```javascript
function layDuLieuTuStorage(key) {
    try {
        let dataString = localStorage.getItem(key);
        if (!dataString) {
            return null;  // Hoặc giá trị mặc định
        }
        return JSON.parse(dataString);
    } catch (error) {
        console.error(`Lỗi parse JSON cho key "${key}":`, error);
        // Xóa dữ liệu lỗi
        localStorage.removeItem(key);
        return null;  // Hoặc giá trị mặc định
    }
}
```

#### 6.2. Kiểm tra hỗ trợ Storage

```javascript
function kiemTraStorage() {
    try {
        localStorage.setItem('test', 'test');
        localStorage.removeItem('test');
        return true;
    } catch (error) {
        return false;
    }
}

if (!kiemTraStorage()) {
    console.warn('Trình duyệt không hỗ trợ LocalStorage');
}
```

#### 6.3. Xử lý quá dung lượng

```javascript
function luuDuLieu(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
        return true;
    } catch (error) {
        if (error.name === 'QuotaExceededError') {
            console.error('LocalStorage đã đầy!');
            // Xóa dữ liệu cũ hoặc thông báo người dùng
            return false;
        }
        throw error;
    }
}
```

#### 6.4. Helper functions

```javascript
// Lưu object/array
function luuStorage(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
        return true;
    } catch (error) {
        console.error('Lỗi lưu Storage:', error);
        return false;
    }
}

// Lấy object/array
function layStorage(key, defaultValue = null) {
    try {
        let dataString = localStorage.getItem(key);
        if (!dataString) {
            return defaultValue;
        }
        return JSON.parse(dataString);
    } catch (error) {
        console.error('Lỗi đọc Storage:', error);
        return defaultValue;
    }
}

// Xóa
function xoaStorage(key) {
    localStorage.removeItem(key);
}

// Sử dụng
luuStorage('danhSachCongViec', [{ id: 1, ten: 'CV 1' }]);
let danhSach = layStorage('danhSachCongViec', []);
```

---

## 💻 Ví dụ minh họa

### Ví dụ 1: Lưu và tải danh sách công việc

```javascript
// Dữ liệu mẫu
let danhSachCongViec = [
    { id: 1, ten: 'Học JavaScript', trangThai: 'chua lam' },
    { id: 2, ten: 'Làm bài tập', trangThai: 'dang lam' }
];

// Lưu vào LocalStorage
function luuDanhSach() {
    localStorage.setItem('danhSachCongViec', JSON.stringify(danhSachCongViec));
}

// Tải từ LocalStorage
function taiDanhSach() {
    let dataString = localStorage.getItem('danhSachCongViec');
    if (dataString) {
        danhSachCongViec = JSON.parse(dataString);
    } else {
        danhSachCongViec = [];  // Khởi tạo mảng rỗng
    }
}

// Tự động tải khi trang load
taiDanhSach();

// Tự động lưu khi thay đổi
function themCongViec(ten) {
    let congViecMoi = {
        id: Date.now(),
        ten: ten,
        trangThai: 'chua lam'
    };
    danhSachCongViec.push(congViecMoi);
    luuDanhSach();  // Tự động lưu
}
```

### Ví dụ 2: Xử lý lỗi đầy đủ

```javascript
const Storage = {
    // Lưu dữ liệu
    luu: function(key, data) {
        try {
            if (!this.kiemTra()) {
                throw new Error('LocalStorage không được hỗ trợ');
            }
            localStorage.setItem(key, JSON.stringify(data));
            return true;
        } catch (error) {
            if (error.name === 'QuotaExceededError') {
                console.error('LocalStorage đã đầy!');
                alert('Không thể lưu dữ liệu. Vui lòng xóa dữ liệu cũ.');
            } else {
                console.error('Lỗi lưu Storage:', error);
            }
            return false;
        }
    },
    
    // Lấy dữ liệu
    lay: function(key, defaultValue = null) {
        try {
            if (!this.kiemTra()) {
                return defaultValue;
            }
            let dataString = localStorage.getItem(key);
            if (!dataString) {
                return defaultValue;
            }
            return JSON.parse(dataString);
        } catch (error) {
            console.error('Lỗi đọc Storage:', error);
            // Xóa dữ liệu lỗi
            localStorage.removeItem(key);
            return defaultValue;
        }
    },
    
    // Xóa
    xoa: function(key) {
        if (this.kiemTra()) {
            localStorage.removeItem(key);
        }
    },
    
    // Xóa tất cả
    xoaTatCa: function() {
        if (this.kiemTra()) {
            localStorage.clear();
        }
    },
    
    // Kiểm tra hỗ trợ
    kiemTra: function() {
        try {
            localStorage.setItem('test', 'test');
            localStorage.removeItem('test');
            return true;
        } catch (error) {
            return false;
        }
    }
};

// Sử dụng
Storage.luu('danhSachCongViec', [{ id: 1, ten: 'CV 1' }]);
let danhSach = Storage.lay('danhSachCongViec', []);
```

### Ví dụ 3: Lưu cài đặt người dùng

```javascript
// Cài đặt mặc định
let caiDat = {
    theme: 'light',
    ngonNgu: 'vi',
    thongBao: true
};

// Tải cài đặt
function taiCaiDat() {
    let saved = localStorage.getItem('caiDat');
    if (saved) {
        caiDat = { ...caiDat, ...JSON.parse(saved) };
    }
}

// Lưu cài đặt
function luuCaiDat() {
    localStorage.setItem('caiDat', JSON.stringify(caiDat));
}

// Cập nhật cài đặt
function capNhatCaiDat(key, value) {
    caiDat[key] = value;
    luuCaiDat();
}

// Sử dụng
taiCaiDat();
capNhatCaiDat('theme', 'dark');
```

---

## 🧪 Quiz cuối buổi (7 câu)

### Câu 1: JSON có thể chứa function không?
A. Có  
B. Không  
C. Tùy trường hợp  
D. Chỉ arrow function

**Đáp án: B**

### Câu 2: LocalStorage lưu được những kiểu dữ liệu nào?
A. Chỉ string  
B. String, number, boolean  
C. Tất cả kiểu dữ liệu  
D. Chỉ object

**Đáp án: A** (chỉ string, phải stringify object/array)

### Câu 3: Khi nào SessionStorage tự động xóa?
A. Khi đóng tab  
B. Khi đóng trình duyệt  
C. Sau 24 giờ  
D. Không bao giờ

**Đáp án: A**

### Câu 4: `JSON.parse('[1, 2, 3]')` trả về gì?
A. String  
B. Array  
C. Object  
D. Lỗi

**Đáp án: B**

### Câu 5: Cách nào lưu object vào LocalStorage?
A. `localStorage.setItem('key', obj)`  
B. `localStorage.setItem('key', JSON.stringify(obj))`  
C. `localStorage.save('key', obj)`  
D. Cả A và B

**Đáp án: B**

### Câu 6: Dung lượng tối đa của LocalStorage?
A. 1MB  
B. 5-10MB  
C. Không giới hạn  
D. 100MB

**Đáp án: B**

### Câu 7: `localStorage.getItem('key')` trả về gì nếu key không tồn tại?
A. `undefined`  
B. `null`  
C. `''` (chuỗi rỗng)  
D. Lỗi

**Đáp án: B**

---

## 📝 Bài tập về nhà (chuẩn bị cho buổi 10)

1. Tạo helper functions cho LocalStorage (luu, lay, xoa)
2. Lưu danh sách công việc vào LocalStorage khi thêm/sửa/xóa
3. Tự động tải danh sách từ LocalStorage khi trang load
4. Xử lý trường hợp dữ liệu rỗng hoặc lỗi
5. Thêm nút "Xóa tất cả dữ liệu" để clear LocalStorage

---

## 🔗 Tài liệu tham khảo

- [MDN: JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)
- [MDN: LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [JavaScript.info: LocalStorage](https://javascript.info/localstorage)

---

**Chúc bạn học tập tốt! 🚀**
