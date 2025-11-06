# Buổi 15: Debug, Optimization & Best Practices

**Loại buổi**: Lý thuyết  
**Thời lượng**: 120 phút  
**Dự án**: To-Do App (đã refactor code từ buổi 14)

---

## 🎯 Mục tiêu học tập

Sau buổi học này, bạn sẽ có thể:

- ✅ Sử dụng Console để debug hiệu quả
- ✅ Sử dụng Chrome DevTools để debug
- ✅ Tối ưu hóa performance của ứng dụng
- ✅ Áp dụng best practices khi viết code
- ✅ Review code và phát hiện lỗi
- ✅ Sử dụng Git cơ bản để quản lý code

---

## 🧠 Nội dung chính

### 1. Debug với Console

#### 1.1. Các phương thức console

```javascript
// console.log() - In thông tin
console.log('Thông tin cơ bản');
console.log('Giá trị:', value);
console.log('Object:', { a: 1, b: 2 });

// console.warn() - Cảnh báo
console.warn('Đây là cảnh báo');

// console.error() - Lỗi
console.error('Đây là lỗi');

// console.table() - Hiển thị dạng bảng
let danhSach = [
    { id: 1, ten: 'CV 1', trangThai: 'chua lam' },
    { id: 2, ten: 'CV 2', trangThai: 'hoan thanh' }
];
console.table(danhSach);

// console.group() - Nhóm log
console.group('Thông tin sinh viên');
console.log('Họ tên: Nguyễn Văn A');
console.log('Tuổi: 20');
console.groupEnd();

// console.time() - Đo thời gian
console.time('thoiGianXuLy');
// Code cần đo
console.timeEnd('thoiGianXuLy');
```

#### 1.2. Debug với breakpoint

```javascript
// Sử dụng debugger
function xuLyDuLieu(data) {
    debugger;  // Dừng tại đây khi mở DevTools
    // Code xử lý
    return data.map(item => item.value);
}
```

#### 1.3. Conditional logging

```javascript
const DEBUG = true;

function log(message) {
    if (DEBUG) {
        console.log(message);
    }
}

log('Thông tin debug');
```

### 2. Chrome DevTools

#### 2.1. Tab Console

- Xem log, error, warning
- Chạy JavaScript trực tiếp
- Kiểm tra giá trị biến

#### 2.2. Tab Elements (Inspector)

- Xem và chỉnh sửa HTML/CSS
- Inspect element
- Xem computed styles
- Test responsive design

#### 2.3. Tab Sources

- Xem source code
- Đặt breakpoint
- Step through code (F10, F11)
- Watch variables
- Call stack

**Các phím tắt:**
- `F8`: Continue
- `F10`: Step over
- `F11`: Step into
- `Shift + F11`: Step out

#### 2.4. Tab Network

- Xem các request HTTP
- Kiểm tra response/request headers
- Xem timing
- Throttle network (test slow connection)

#### 2.5. Tab Performance

- Record performance
- Phân tích thời gian load
- Tìm bottlenecks

#### 2.6. Tab Application

- Xem LocalStorage, SessionStorage
- Xem Cookies
- Xem Cache

### 3. Tối ưu hóa Performance

#### 3.1. Tránh re-render không cần thiết

```javascript
// ❌ Xấu: Render lại toàn bộ danh sách
function themCongViec(ten) {
    danhSachCongViec.push({ id: Date.now(), ten });
    hienThiDanhSach();  // Render lại tất cả
}

// ✅ Tốt: Chỉ thêm phần tử mới
function themCongViec(ten) {
    const congViec = { id: Date.now(), ten };
    danhSachCongViec.push(congViec);
    const li = taoElementCongViec(congViec);
    danhSach.appendChild(li);  // Chỉ thêm phần tử mới
}
```

#### 3.2. Debounce cho input

```javascript
// Tránh gọi API quá nhiều khi user gõ
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

const timKiem = debounce(function(query) {
    console.log('Tìm kiếm:', query);
    // Gọi API
}, 300);

// Sử dụng
input.addEventListener('input', (e) => {
    timKiem(e.target.value);
});
```

#### 3.3. Lazy loading

```javascript
// Chỉ load dữ liệu khi cần
async function taiDanhSach(page = 1) {
    const response = await fetch(`/api/data?page=${page}`);
    return await response.json();
}

// Load thêm khi scroll
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        taiThemDuLieu();
    }
});
```

#### 3.4. Cache dữ liệu

```javascript
let cache = {};

async function layDuLieu(id) {
    // Kiểm tra cache
    if (cache[id]) {
        return cache[id];
    }
    
    // Lấy từ API
    const data = await fetch(`/api/data/${id}`).then(r => r.json());
    cache[id] = data;  // Lưu vào cache
    return data;
}
```

#### 3.5. Minimize DOM operations

```javascript
// ❌ Xấu: Nhiều lần truy cập DOM
function hienThiDanhSach() {
    const ul = document.querySelector('#danh-sach');
    ul.innerHTML = '';
    danhSach.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.ten;
        ul.appendChild(li);  // Append nhiều lần
    });
}

// ✅ Tốt: Dùng DocumentFragment
function hienThiDanhSach() {
    const ul = document.querySelector('#danh-sach');
    const fragment = document.createDocumentFragment();
    
    danhSach.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.ten;
        fragment.appendChild(li);
    });
    
    ul.innerHTML = '';
    ul.appendChild(fragment);  // Chỉ append 1 lần
}
```

### 4. Best Practices

#### 4.1. Error Handling

```javascript
// ✅ Luôn xử lý lỗi
async function layDuLieu() {
    try {
        const response = await fetch('/api/data');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Lỗi:', error);
        // Hiển thị thông báo cho user
        hienThiThongBao('Không thể tải dữ liệu. Vui lòng thử lại.');
        throw error;  // Re-throw để caller xử lý
    }
}
```

#### 4.2. Validation

```javascript
// ✅ Validate input
function themCongViec(ten) {
    if (!ten || typeof ten !== 'string') {
        throw new Error('Tên công việc không hợp lệ');
    }
    
    if (ten.trim().length === 0) {
        throw new Error('Tên công việc không được rỗng');
    }
    
    if (ten.length > 100) {
        throw new Error('Tên công việc quá dài');
    }
    
    // Thêm công việc
}
```

#### 4.3. Code Comments

```javascript
/**
 * Thêm công việc mới vào danh sách
 * @param {string} ten - Tên công việc
 * @param {string} moTa - Mô tả công việc (optional)
 * @returns {Object} Công việc đã được thêm
 * @throws {Error} Nếu tên công việc không hợp lệ
 */
function themCongViec(ten, moTa = '') {
    // Validate input
    if (!ten || ten.trim().length === 0) {
        throw new Error('Tên công việc không được rỗng');
    }
    
    // Tạo công việc mới
    const congViec = {
        id: Date.now(),
        ten: ten.trim(),
        moTa: moTa.trim(),
        trangThai: 'chua lam',
        ngayTao: new Date().toISOString()
    };
    
    // Thêm vào danh sách
    danhSachCongViec.push(congViec);
    
    return congViec;
}
```

#### 4.4. Avoid Magic Numbers

```javascript
// ❌ Xấu
if (tuoi >= 18) {
    // ...
}

// ✅ Tốt
const TUOI_TRUONG_THANH = 18;
if (tuoi >= TUOI_TRUONG_THANH) {
    // ...
}
```

#### 4.5. Early Returns

```javascript
// ❌ Xấu
function xuLyDuLieu(data) {
    if (data) {
        if (data.length > 0) {
            // Xử lý
        }
    }
}

// ✅ Tốt
function xuLyDuLieu(data) {
    if (!data || data.length === 0) {
        return;
    }
    // Xử lý
}
```

### 5. Code Review Checklist

**Functionality:**
- [ ] Code hoạt động đúng như mong đợi?
- [ ] Xử lý edge cases?
- [ ] Xử lý lỗi đầy đủ?

**Code Quality:**
- [ ] Code dễ đọc, dễ hiểu?
- [ ] Tên biến/hàm rõ ràng?
- [ ] Không có code lặp lại?
- [ ] Functions nhỏ, làm 1 việc?

**Performance:**
- [ ] Không có re-render không cần thiết?
- [ ] Không có memory leaks?
- [ ] Tối ưu DOM operations?

**Best Practices:**
- [ ] Sử dụng const/let thay vì var?
- [ ] Arrow functions khi phù hợp?
- [ ] Async/await thay vì Promise chains?
- [ ] Destructuring khi có thể?

### 6. Git cơ bản

#### 6.1. Khởi tạo repository

```bash
git init
```

#### 6.2. Các lệnh cơ bản

```bash
# Xem trạng thái
git status

# Thêm file vào staging
git add .

# Commit
git commit -m "feat: thêm chức năng thêm công việc"

# Xem lịch sử
git log

# Tạo branch
git branch feature/the-cong-viec

# Chuyển branch
git checkout feature/the-cong-viec

# Merge branch
git merge feature/the-cong-viec
```

#### 6.3. Commit message

**Conventional Commits:**
```
feat: thêm tính năng mới
fix: sửa lỗi
refactor: refactor code
docs: cập nhật tài liệu
style: format code
test: thêm test
chore: công việc bảo trì
```

**Ví dụ:**
```
feat(todo): thêm chức năng tìm kiếm công việc

- Thêm input tìm kiếm
- Filter danh sách theo từ khóa
- Highlight kết quả tìm kiếm

Closes #123
```

---

## 💻 Ví dụ minh họa

### Ví dụ 1: Debug với console

```javascript
function xuLyDanhSach(danhSach) {
    console.group('Xử lý danh sách');
    console.log('Số lượng:', danhSach.length);
    console.table(danhSach);
    
    console.time('thoiGianXuLy');
    const ketQua = danhSach.map(item => {
        console.log('Xử lý item:', item);
        return item.value * 2;
    });
    console.timeEnd('thoiGianXuLy');
    
    console.groupEnd();
    return ketQua;
}
```

### Ví dụ 2: Performance optimization

```javascript
// Tối ưu render danh sách lớn
function hienThiDanhSach(danhSach) {
    const container = document.querySelector('#danh-sach');
    const fragment = document.createDocumentFragment();
    
    // Virtual scrolling cho danh sách lớn
    const start = 0;
    const end = Math.min(50, danhSach.length);  // Chỉ render 50 items đầu
    
    for (let i = start; i < end; i++) {
        const li = taoElementCongViec(danhSach[i]);
        fragment.appendChild(li);
    }
    
    container.innerHTML = '';
    container.appendChild(fragment);
}
```

---

## 🧪 Quiz cuối buổi (7 câu)

### Câu 1: `debugger` làm gì?
A. Dừng code tại đó khi DevTools mở  
B. In ra console  
C. Xóa code  
D. Không làm gì

**Đáp án: A**

### Câu 2: Debounce dùng để làm gì?
A. Tăng tốc độ  
B. Giảm số lần gọi hàm  
C. Xóa code  
D. Debug

**Đáp án: B**

### Câu 3: DocumentFragment dùng để?
A. Cache dữ liệu  
B. Tối ưu DOM operations  
C. Lưu trữ  
D. Debug

**Đáp án: B**

### Câu 4: Early return giúp?
A. Code chạy nhanh hơn  
B. Code dễ đọc hơn  
C. Tiết kiệm bộ nhớ  
D. Tất cả

**Đáp án: B** (chủ yếu là dễ đọc)

### Câu 5: Commit message nào đúng?
A. `fixed bug`  
B. `fix: sửa lỗi thêm công việc`  
C. `update`  
D. `change`

**Đáp án: B**

### Câu 6: `console.table()` dùng để?
A. In object dạng bảng  
B. Tạo table HTML  
C. Lưu dữ liệu  
D. Không có

**Đáp án: A**

### Câu 7: Best practice nào đúng?
A. Dùng var thay vì let/const  
B. Functions làm nhiều việc  
C. Early returns  
D. Magic numbers

**Đáp án: C**

---

## 📝 Bài tập về nhà (chuẩn bị cho buổi 16)

1. Review code To-Do App và fix các vấn đề
2. Tối ưu performance (debounce, DocumentFragment...)
3. Thêm error handling đầy đủ
4. Thêm comments cho các hàm phức tạp
5. Commit code lên Git với commit message chuẩn
6. Chuẩn bị demo và thuyết trình

---

## 🔗 Tài liệu tham khảo

- [Chrome DevTools](https://developer.chrome.com/docs/devtools/)
- [MDN: Performance](https://developer.mozilla.org/en-US/docs/Web/Performance)
- [Conventional Commits](https://www.conventionalcommits.org/)

---

**Chúc bạn học tập tốt! 🚀**
