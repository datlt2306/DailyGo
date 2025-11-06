# Buổi 4: Thêm chức năng "Thêm công việc"

**Loại buổi**: Thực hành  
**Thời lượng**: 120 phút  
**Dự án**: To-Do App (đã có form nhập liệu từ buổi 2)

---

## 🎯 Mục tiêu học tập

Sau buổi học này, bạn sẽ có thể:

- ✅ Tạo hàm để thêm công việc
- ✅ Validate dữ liệu đầu vào
- ✅ Lưu công việc vào mảng
- ✅ Hiển thị danh sách công việc (tạm thời bằng alert/console)
- ✅ Áp dụng kiến thức hàm và điều kiện từ buổi 3

---

## 🧩 Task Project

### Task 1: Tạo cấu trúc dữ liệu (15 phút)

Trong `main.js`, tạo mảng để lưu danh sách công việc:

```javascript
// Mảng lưu trữ danh sách công việc
let danhSachCongViec = [];

// Cấu trúc một công việc
// {
//     id: số duy nhất,
//     ten: 'Tên công việc',
//     moTa: 'Mô tả',
//     trangThai: 'chua lam',
//     ngayTao: '2024-01-01'
// }
```

### Task 2: Tạo hàm validate dữ liệu (20 phút)

```javascript
/**
 * Kiểm tra tên công việc có hợp lệ không
 * @param {string} ten - Tên công việc
 * @returns {boolean} true nếu hợp lệ, false nếu không
 */
function kiemTraTenCongViec(ten) {
    // Kiểm tra rỗng
    if (!ten || ten.trim().length === 0) {
        return false;
    }
    
    // Kiểm tra độ dài (ít nhất 3 ký tự, tối đa 100 ký tự)
    if (ten.trim().length < 3) {
        return false;
    }
    
    if (ten.trim().length > 100) {
        return false;
    }
    
    return true;
}
```

**Test hàm:**
```javascript
console.log(kiemTraTenCongViec(''));           // false
console.log(kiemTraTenCongViec('Học'));       // false (quá ngắn)
console.log(kiemTraTenCongViec('Học JavaScript')); // true
```

### Task 3: Tạo hàm thêm công việc (30 phút)

```javascript
/**
 * Thêm công việc mới vào danh sách
 * @param {string} ten - Tên công việc
 * @param {string} moTa - Mô tả công việc
 * @returns {Object|null} Công việc đã thêm hoặc null nếu lỗi
 */
function themCongViec(ten, moTa = '') {
    // Bước 1: Validate dữ liệu
    if (!kiemTraTenCongViec(ten)) {
        alert('Tên công việc không hợp lệ!\n- Không được rỗng\n- Ít nhất 3 ký tự\n- Tối đa 100 ký tự');
        return null;
    }
    
    // Bước 2: Tạo object công việc
    const congViec = {
        id: Date.now(),  // Tạo ID duy nhất từ timestamp
        ten: ten.trim(),
        moTa: moTa.trim(),
        trangThai: 'chua lam',
        ngayTao: new Date().toISOString()
    };
    
    // Bước 3: Thêm vào mảng
    danhSachCongViec.push(congViec);
    
    // Bước 4: Thông báo thành công
    console.log('Đã thêm công việc:', congViec);
    alert(`Đã thêm công việc: ${congViec.ten}`);
    
    // Bước 5: Trả về công việc đã thêm
    return congViec;
}
```

### Task 4: Kết nối với form (20 phút)

Cập nhật event listener của form:

```javascript
const form = document.getElementById('form-cong-viec');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Lấy giá trị từ form
    const tenCongViec = document.getElementById('ten-cong-viec').value;
    const moTa = document.getElementById('mo-ta').value;
    
    // Gọi hàm thêm công việc
    const congViecMoi = themCongViec(tenCongViec, moTa);
    
    // Nếu thêm thành công, reset form
    if (congViecMoi) {
        form.reset();
        hienThiDanhSach();  // Hiển thị lại danh sách (sẽ tạo ở Task 5)
    }
});
```

### Task 5: Tạo hàm hiển thị danh sách (25 phút)

```javascript
/**
 * Hiển thị danh sách công việc ra console
 */
function hienThiDanhSach() {
    console.log('=== DANH SÁCH CÔNG VIỆC ===');
    
    if (danhSachCongViec.length === 0) {
        console.log('Danh sách trống!');
        return;
    }
    
    // Dùng forEach để hiển thị từng công việc
    danhSachCongViec.forEach(function(congViec, index) {
        console.log(`${index + 1}. ${congViec.ten}`);
        console.log(`   Mô tả: ${congViec.moTa || 'Không có'}`);
        console.log(`   Trạng thái: ${congViec.trangThai}`);
        console.log(`   Ngày tạo: ${new Date(congViec.ngayTao).toLocaleString('vi-VN')}`);
        console.log('---');
    });
    
    console.log(`Tổng cộng: ${danhSachCongViec.length} công việc`);
}

// Hiển thị danh sách khi trang load
hienThiDanhSach();
```

**Cải thiện với console.table():**
```javascript
function hienThiDanhSach() {
    if (danhSachCongViec.length === 0) {
        console.log('Danh sách trống!');
        return;
    }
    
    // Hiển thị dạng bảng
    console.table(danhSachCongViec.map((cv, index) => ({
        'STT': index + 1,
        'Tên': cv.ten,
        'Mô tả': cv.moTa || 'Không có',
        'Trạng thái': cv.trangThai,
        'Ngày tạo': new Date(cv.ngayTao).toLocaleDateString('vi-VN')
    })));
}
```

### Task 6: Thêm tính năng đếm công việc (10 phút)

```javascript
/**
 * Đếm số lượng công việc theo trạng thái
 * @param {string} trangThai - Trạng thái cần đếm (optional)
 * @returns {number} Số lượng công việc
 */
function demCongViec(trangThai = null) {
    if (trangThai === null) {
        return danhSachCongViec.length;
    }
    
    return danhSachCongViec.filter(function(cv) {
        return cv.trangThai === trangThai;
    }).length;
}

// Sử dụng
console.log('Tổng số công việc:', demCongViec());
console.log('Chưa làm:', demCongViec('chua lam'));
```

Hiển thị thống kê:
```javascript
function hienThiThongKe() {
    const tong = demCongViec();
    const chuaLam = demCongViec('chua lam');
    const dangLam = demCongViec('dang lam');
    const hoanThanh = demCongViec('hoan thanh');
    
    console.log('=== THỐNG KÊ ===');
    console.log(`Tổng số: ${tong}`);
    console.log(`Chưa làm: ${chuaLam}`);
    console.log(`Đang làm: ${dangLam}`);
    console.log(`Hoàn thành: ${hoanThanh}`);
}
```

---

## 💻 Code hoàn chỉnh

```javascript
// ===== DỮ LIỆU =====
let danhSachCongViec = [];

// ===== VALIDATION =====
function kiemTraTenCongViec(ten) {
    if (!ten || ten.trim().length === 0) return false;
    if (ten.trim().length < 3) return false;
    if (ten.trim().length > 100) return false;
    return true;
}

// ===== THÊM CÔNG VIỆC =====
function themCongViec(ten, moTa = '') {
    if (!kiemTraTenCongViec(ten)) {
        alert('Tên công việc không hợp lệ!');
        return null;
    }
    
    const congViec = {
        id: Date.now(),
        ten: ten.trim(),
        moTa: moTa.trim(),
        trangThai: 'chua lam',
        ngayTao: new Date().toISOString()
    };
    
    danhSachCongViec.push(congViec);
    console.log('Đã thêm:', congViec);
    return congViec;
}

// ===== HIỂN THỊ =====
function hienThiDanhSach() {
    if (danhSachCongViec.length === 0) {
        console.log('Danh sách trống!');
        return;
    }
    
    console.table(danhSachCongViec.map((cv, i) => ({
        'STT': i + 1,
        'Tên': cv.ten,
        'Mô tả': cv.moTa || 'Không có',
        'Trạng thái': cv.trangThai
    })));
}

// ===== ĐẾM =====
function demCongViec(trangThai = null) {
    if (trangThai === null) return danhSachCongViec.length;
    return danhSachCongViec.filter(cv => cv.trangThai === trangThai).length;
}

// ===== FORM HANDLER =====
const form = document.getElementById('form-cong-viec');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const ten = document.getElementById('ten-cong-viec').value;
    const moTa = document.getElementById('mo-ta').value;
    
    if (themCongViec(ten, moTa)) {
        form.reset();
        hienThiDanhSach();
    }
});
```

---

## ✅ Checklist hoàn thành

- [ ] Đã tạo mảng `danhSachCongViec`
- [ ] Đã tạo hàm `kiemTraTenCongViec()`
- [ ] Đã tạo hàm `themCongViec()` với validation
- [ ] Đã tạo hàm `hienThiDanhSach()` hiển thị ra console
- [ ] Form submit gọi hàm `themCongViec()`
- [ ] Form reset sau khi thêm thành công
- [ ] Có thể thêm nhiều công việc và xem danh sách
- [ ] Đã tạo hàm đếm công việc

---

## 🧪 Checkpoint

**Câu hỏi:**

1. Tại sao dùng `Date.now()` để tạo ID?
2. `forEach` khác gì với `for` loop?
3. Hàm `filter` làm gì?
4. Khi nào dùng `return` trong hàm?

**Đáp án:**
1. `Date.now()` trả về timestamp duy nhất (milliseconds)
2. `forEach` là method của array, gọn hơn, không cần index
3. `filter` tạo mảng mới chứa các phần tử thỏa điều kiện
4. Dùng `return` để trả về giá trị và kết thúc hàm sớm

---

## 📝 Bài tập về nhà

1. Thêm validation cho mô tả (tối đa 500 ký tự)
2. Thêm hàm `timCongViec(id)` để tìm công việc theo ID
3. Thêm hàm `xoaCongViec(id)` để xóa công việc (tạm thời bằng console)
4. Thêm hàm `capNhatTrangThai(id, trangThai)` để cập nhật trạng thái

---

## 💡 Tips

- Luôn validate dữ liệu trước khi xử lý
- Dùng `console.table()` để hiển thị dữ liệu dạng bảng
- Tạo hàm nhỏ, mỗi hàm làm 1 việc
- Dùng JSDoc comments để mô tả hàm

---

**Chúc bạn hoàn thành tốt! 🚀**
