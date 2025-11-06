# Buổi 14: Tách module code

**Loại buổi**: Thực hành  
**Thời lượng**: 120 phút  
**Dự án**: To-Do App (đã có API từ buổi 12)

---

## 🎯 Mục tiêu học tập

Sau buổi học này, bạn sẽ có thể:

- ✅ Tách code thành các modules riêng biệt
- ✅ Sử dụng ES6 Modules (import/export)
- ✅ Tổ chức cấu trúc thư mục hợp lý
- ✅ Refactor code để dễ bảo trì
- ✅ Áp dụng kiến thức Module và ES6+ từ buổi 13

---

## 🧩 Task Project

### Task 1: Tạo cấu trúc thư mục (10 phút)

Tạo cấu trúc thư mục mới:

```
todo-app/
├── index.html
├── styles.css
├── src/
│   ├── constants.js
│   ├── utils.js
│   ├── storage.js
│   ├── api.js
│   ├── dom.js
│   └── main.js
└── README.md
```

### Task 2: Tạo constants.js (10 phút)

```javascript
// constants.js
export const STORAGE_KEY = 'todoApp_danhSachCongViec';
export const API_BASE = 'http://localhost:3000/todos';

export const SELECTORS = {
    FORM: '#form-cong-viec',
    INPUT_TEN: '#ten-cong-viec',
    INPUT_MOTA: '#mo-ta',
    DANH_SACH: '#danh-sach-cong-viec',
    TONG_SO: '#tong-so',
    TIM_KIEM: '#tim-kiem',
    LOADING: '#loading'
};

export const TRANG_THAI = {
    CHUA_LAM: 'chua-lam',
    DANG_LAM: 'dang-lam',
    HOAN_THANH: 'hoan-thanh'
};

export const CONFIG = {
    MIN_TEN_LENGTH: 3,
    MAX_TEN_LENGTH: 100,
    MAX_MOTA_LENGTH: 500
};
```

### Task 3: Tạo utils.js (15 phút)

```javascript
// utils.js
import { CONFIG } from './constants.js';

/**
 * Kiểm tra tên công việc có hợp lệ không
 */
export function kiemTraTenCongViec(ten) {
    if (!ten || typeof ten !== 'string') {
        return false;
    }
    
    const tenTrim = ten.trim();
    if (tenTrim.length < CONFIG.MIN_TEN_LENGTH) {
        return false;
    }
    
    if (tenTrim.length > CONFIG.MAX_TEN_LENGTH) {
        return false;
    }
    
    return true;
}

/**
 * Kiểm tra mô tả có hợp lệ không
 */
export function kiemTraMoTa(moTa) {
    if (!moTa) return true;  // Mô tả là optional
    
    if (typeof moTa !== 'string') {
        return false;
    }
    
    return moTa.trim().length <= CONFIG.MAX_MOTA_LENGTH;
}

/**
 * Format ngày tháng
 */
export function formatNgay(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
}

/**
 * Format thời gian đầy đủ
 */
export function formatThoiGian(dateString) {
    const date = new Date(dateString);
    return date.toLocaleString('vi-VN');
}

/**
 * Debounce function
 */
export function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}
```

### Task 4: Tạo storage.js (15 phút)

```javascript
// storage.js
import { STORAGE_KEY } from './constants.js';

export const Storage = {
    /**
     * Lưu dữ liệu vào LocalStorage
     */
    luu: function(data) {
        try {
            const jsonString = JSON.stringify(data);
            localStorage.setItem(STORAGE_KEY, jsonString);
            return true;
        } catch (error) {
            console.error('Lỗi lưu Storage:', error);
            return false;
        }
    },
    
    /**
     * Lấy dữ liệu từ LocalStorage
     */
    lay: function(defaultValue = []) {
        try {
            const jsonString = localStorage.getItem(STORAGE_KEY);
            if (!jsonString) {
                return defaultValue;
            }
            return JSON.parse(jsonString);
        } catch (error) {
            console.error('Lỗi đọc Storage:', error);
            localStorage.removeItem(STORAGE_KEY);
            return defaultValue;
        }
    },
    
    /**
     * Xóa dữ liệu
     */
    xoa: function() {
        localStorage.removeItem(STORAGE_KEY);
    },
    
    /**
     * Xóa tất cả
     */
    xoaTatCa: function() {
        localStorage.clear();
    }
};
```

### Task 5: Tạo api.js (20 phút)

```javascript
// api.js
import { API_BASE } from './constants.js';

export const API = {
    async layDanhSach() {
        try {
            const response = await fetch(API_BASE);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Lỗi khi lấy danh sách:', error);
            throw error;
        }
    },
    
    async layMot(id) {
        try {
            const response = await fetch(`${API_BASE}/${id}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Lỗi khi lấy công việc:', error);
            throw error;
        }
    },
    
    async tao(congViec) {
        try {
            const response = await fetch(API_BASE, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(congViec)
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Lỗi khi tạo công việc:', error);
            throw error;
        }
    },
    
    async capNhat(id, congViec) {
        try {
            const response = await fetch(`${API_BASE}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(congViec)
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Lỗi khi cập nhật:', error);
            throw error;
        }
    },
    
    async xoa(id) {
        try {
            const response = await fetch(`${API_BASE}/${id}`, {
                method: 'DELETE'
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return true;
        } catch (error) {
            console.error('Lỗi khi xóa:', error);
            throw error;
        }
    }
};
```

### Task 6: Tạo dom.js (25 phút)

```javascript
// dom.js
import { SELECTORS, TRANG_THAI } from './constants.js';
import { formatNgay } from './utils.js';

export const DOM = {
    /**
     * Tạo element HTML
     */
    createElement: function(tag, className, textContent) {
        const el = document.createElement(tag);
        if (className) el.className = className;
        if (textContent) el.textContent = textContent;
        return el;
    },
    
    /**
     * Tạo element công việc
     */
    createTodoItem: function(congViec, index) {
        const li = this.createElement('li', 'cong-viec-item');
        li.setAttribute('data-id', congViec.id);
        
        const trangThaiClass = `trang-thai-${congViec.trangThai}`;
        const isHoanThanh = congViec.trangThai === TRANG_THAI.HOAN_THANH;
        
        li.innerHTML = `
            <div class="cong-viec-info">
                <input 
                    type="checkbox" 
                    class="checkbox-hoan-thanh" 
                    data-id="${congViec.id}"
                    ${isHoanThanh ? 'checked' : ''}
                >
                <span class="stt">${index + 1}</span>
                <div class="cong-viec-details">
                    <h3 class="cong-viec-ten ${isHoanThanh ? 'completed' : ''}">${congViec.ten}</h3>
                    ${congViec.moTa ? `<p class="cong-viec-mota">${congViec.moTa}</p>` : ''}
                    <div class="cong-viec-meta">
                        <span class="trang-thai ${trangThaiClass}">${congViec.trangThai}</span>
                        <span class="ngay-tao">${formatNgay(congViec.ngayTao)}</span>
                    </div>
                </div>
            </div>
            <div class="cong-viec-actions">
                <button class="btn-sua" data-id="${congViec.id}">Sửa</button>
                <button class="btn-xoa" data-id="${congViec.id}">Xóa</button>
            </div>
        `;
        
        return li;
    },
    
    /**
     * Hiển thị danh sách
     */
    renderList: function(danhSach) {
        const container = document.querySelector(SELECTORS.DANH_SACH);
        const tongSo = document.querySelector(SELECTORS.TONG_SO);
        
        container.innerHTML = '';
        tongSo.textContent = danhSach.length;
        
        if (danhSach.length === 0) {
            container.innerHTML = '<li class="empty">Chưa có công việc nào</li>';
            return;
        }
        
        const fragment = document.createDocumentFragment();
        danhSach.forEach((congViec, index) => {
            fragment.appendChild(this.createTodoItem(congViec, index));
        });
        
        container.appendChild(fragment);
    },
    
    /**
     * Hiển thị loading
     */
    showLoading: function(show) {
        const loading = document.querySelector(SELECTORS.LOADING);
        if (loading) {
            loading.style.display = show ? 'block' : 'none';
        }
    },
    
    /**
     * Hiển thị thông báo
     */
    showNotification: function(message, type = 'info') {
        const notification = this.createElement('div', `notification notification-${type}`);
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }
};
```

### Task 7: Refactor main.js (20 phút)

```javascript
// main.js
import { SELECTORS, TRANG_THAI } from './constants.js';
import { kiemTraTenCongViec } from './utils.js';
import { Storage } from './storage.js';
import { API } from './api.js';
import { DOM } from './dom.js';

// State
let danhSachCongViec = [];
let editId = null;

// ===== INIT =====
async function init() {
    await taiDanhSach();
    setupEventListeners();
}

// ===== LOAD DATA =====
async function taiDanhSach() {
    try {
        DOM.showLoading(true);
        const data = await API.layDanhSach();
        danhSachCongViec = data;
        DOM.renderList(danhSachCongViec);
        Storage.luu(danhSachCongViec);
    } catch (error) {
        console.error('Lỗi khi tải:', error);
        danhSachCongViec = Storage.lay([]);
        DOM.renderList(danhSachCongViec);
        DOM.showNotification('Đang dùng dữ liệu local', 'warning');
    } finally {
        DOM.showLoading(false);
    }
}

// ===== CRUD OPERATIONS =====
async function themCongViec(ten, moTa) {
    if (!kiemTraTenCongViec(ten)) {
        alert('Tên công việc không hợp lệ!');
        return null;
    }
    
    const congViec = {
        ten: ten.trim(),
        moTa: moTa.trim(),
        trangThai: TRANG_THAI.CHUA_LAM,
        ngayTao: new Date().toISOString()
    };
    
    try {
        DOM.showLoading(true);
        const congViecMoi = await API.tao(congViec);
        danhSachCongViec.push(congViecMoi);
        DOM.renderList(danhSachCongViec);
        Storage.luu(danhSachCongViec);
        return congViecMoi;
    } catch (error) {
        DOM.showNotification('Không thể thêm công việc', 'error');
        return null;
    } finally {
        DOM.showLoading(false);
    }
}

// ... các hàm khác tương tự ...

// ===== EVENT LISTENERS =====
function setupEventListeners() {
    // Form submit
    const form = document.querySelector(SELECTORS.FORM);
    form.addEventListener('submit', handleFormSubmit);
    
    // Event delegation cho danh sách
    const danhSach = document.querySelector(SELECTORS.DANH_SACH);
    danhSach.addEventListener('click', handleListClick);
    danhSach.addEventListener('change', handleListChange);
}

function handleFormSubmit(event) {
    event.preventDefault();
    const ten = document.querySelector(SELECTORS.INPUT_TEN).value;
    const moTa = document.querySelector(SELECTORS.INPUT_MOTA).value;
    
    if (editId) {
        capNhatCongViec(editId, ten, moTa);
    } else {
        themCongViec(ten, moTa);
    }
    
    form.reset();
    editId = null;
}

// ... các handlers khác ...

// Khởi tạo khi DOM ready
document.addEventListener('DOMContentLoaded', init);
```

### Task 8: Cập nhật index.html (5 phút)

```html
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do App</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- ... HTML content ... -->
    
    <script type="module" src="src/main.js"></script>
</body>
</html>
```

---

## ✅ Checklist hoàn thành

- [ ] Đã tạo cấu trúc thư mục modules
- [ ] Đã tách constants vào file riêng
- [ ] Đã tách utils vào file riêng
- [ ] Đã tách storage vào file riêng
- [ ] Đã tách API vào file riêng
- [ ] Đã tách DOM operations vào file riêng
- [ ] Đã refactor main.js sạch sẽ
- [ ] Đã cập nhật HTML để dùng modules
- [ ] Code chạy được và không có lỗi

---

## 🧪 Checkpoint

**Câu hỏi:**

1. Tại sao tách code thành modules?
2. `export` và `import` dùng để làm gì?
3. `type="module"` trong script tag làm gì?
4. Lợi ích của việc tách constants?

**Đáp án:**

1. Dễ bảo trì, tái sử dụng, tổ chức code tốt hơn
2. Xuất và nhập dữ liệu giữa các modules
3. Báo cho browser biết đây là ES6 module
4. Dễ thay đổi, tránh magic numbers, quản lý tập trung

---

## 📝 Bài tập về nhà

1. Thêm module `events.js` để quản lý tất cả event listeners
2. Thêm module `validation.js` để tập trung validation
3. Tạo file `config.js` để quản lý cấu hình
4. Thêm JSDoc comments đầy đủ cho tất cả functions

---

**Chúc bạn hoàn thành tốt! 🚀**
