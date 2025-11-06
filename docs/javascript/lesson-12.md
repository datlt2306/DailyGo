# Buổi 12: Lấy dữ liệu từ API

**Loại buổi**: Thực hành  
**Thời lượng**: 120 phút  
**Dự án**: To-Do App (đã có LocalStorage từ buổi 10)

---

## 🎯 Mục tiêu học tập

Sau buổi học này, bạn sẽ có thể:

- ✅ Setup JSON Server hoặc Mock API
- ✅ Tích hợp Fetch API vào ứng dụng
- ✅ Thực hiện CRUD operations qua API
- ✅ Xử lý loading state và error handling
- ✅ Đồng bộ dữ liệu giữa LocalStorage và API
- ✅ Áp dụng kiến thức Fetch API và Async/Await từ buổi 11

---

## 🧩 Task Project

### Task 1: Setup JSON Server (20 phút)

**Cách 1: Sử dụng JSON Server (khuyến nghị)**

```bash
# Cài đặt JSON Server
npm install -g json-server

# Tạo file db.json
# {
#   "todos": [
#     { "id": 1, "ten": "Công việc 1", "moTa": "Mô tả", "trangThai": "chua-lam" }
#   ]
# }

# Chạy server
json-server --watch db.json --port 3000
```

**Cách 2: Sử dụng Mock API (JSONPlaceholder)**

```javascript
const API_BASE = 'https://jsonplaceholder.typicode.com/todos';
```

**Cách 3: Sử dụng Mock Service Worker (MSW)**

### Task 2: Tạo API service (30 phút)

Tạo file `api.js`:

```javascript
const API_BASE = 'http://localhost:3000/todos';  // JSON Server
// Hoặc: const API_BASE = 'https://jsonplaceholder.typicode.com/todos';

/**
 * API Service - Xử lý tất cả requests
 */
const API = {
    /**
     * Lấy danh sách công việc
     * @returns {Promise<Array>} Danh sách công việc
     */
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
    
    /**
     * Lấy một công việc theo ID
     * @param {number} id - ID công việc
     * @returns {Promise<Object>} Công việc
     */
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
    
    /**
     * Tạo công việc mới
     * @param {Object} congViec - Dữ liệu công việc
     * @returns {Promise<Object>} Công việc đã tạo
     */
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
    
    /**
     * Cập nhật công việc
     * @param {number} id - ID công việc
     * @param {Object} congViec - Dữ liệu mới
     * @returns {Promise<Object>} Công việc đã cập nhật
     */
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
    
    /**
     * Xóa công việc
     * @param {number} id - ID công việc
     * @returns {Promise<boolean>} true nếu thành công
     */
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

### Task 3: Tích hợp API vào ứng dụng (35 phút)

Cập nhật `main.js`:

```javascript
// Import API service
// import { API } from './api.js';  // Nếu dùng modules

/**
 * Tải danh sách từ API
 */
async function taiDanhSachTuAPI() {
    try {
        hienThiLoading(true);
        const danhSach = await API.layDanhSach();
        danhSachCongViec = danhSach;
        hienThiDanhSach();
        luuDanhSach();  // Lưu vào LocalStorage làm backup
    } catch (error) {
        console.error('Lỗi khi tải từ API:', error);
        // Fallback: Tải từ LocalStorage
        taiDanhSach();
        hienThiThongBao('Không thể kết nối API. Đang dùng dữ liệu local.', 'warning');
    } finally {
        hienThiLoading(false);
    }
}

/**
 * Thêm công việc qua API
 */
async function themCongViec(ten, moTa = '') {
    // Validation
    if (!kiemTraTenCongViec(ten)) {
        alert('Tên công việc không hợp lệ!');
        return null;
    }
    
    const congViec = {
        ten: ten.trim(),
        moTa: moTa.trim(),
        trangThai: 'chua-lam',
        ngayTao: new Date().toISOString()
    };
    
    try {
        hienThiLoading(true);
        const congViecMoi = await API.tao(congViec);
        danhSachCongViec.push(congViecMoi);
        hienThiDanhSach();
        luuDanhSach();
        alert('Đã thêm công việc!');
        return congViecMoi;
    } catch (error) {
        console.error('Lỗi khi thêm:', error);
        alert('Không thể thêm công việc. Vui lòng thử lại.');
        return null;
    } finally {
        hienThiLoading(false);
    }
}

/**
 * Cập nhật công việc qua API
 */
async function capNhatCongViec(id, ten, moTa) {
    // Validation
    if (!kiemTraTenCongViec(ten)) {
        alert('Tên công việc không hợp lệ!');
        return false;
    }
    
    const congViec = danhSachCongViec.find(cv => cv.id === id);
    if (!congViec) {
        alert('Không tìm thấy công việc!');
        return false;
    }
    
    const congViecMoi = {
        ...congViec,
        ten: ten.trim(),
        moTa: moTa.trim()
    };
    
    try {
        hienThiLoading(true);
        const congViecCapNhat = await API.capNhat(id, congViecMoi);
        
        // Cập nhật trong mảng
        const index = danhSachCongViec.findIndex(cv => cv.id === id);
        if (index !== -1) {
            danhSachCongViec[index] = congViecCapNhat;
        }
        
        hienThiDanhSach();
        luuDanhSach();
        alert('Đã cập nhật công việc!');
        return true;
    } catch (error) {
        console.error('Lỗi khi cập nhật:', error);
        alert('Không thể cập nhật. Vui lòng thử lại.');
        return false;
    } finally {
        hienThiLoading(false);
    }
}

/**
 * Xóa công việc qua API
 */
async function xoaCongViec(id) {
    if (!confirm('Bạn có chắc muốn xóa công việc này?')) {
        return;
    }
    
    try {
        hienThiLoading(true);
        await API.xoa(id);
        
        // Xóa khỏi mảng
        danhSachCongViec = danhSachCongViec.filter(cv => cv.id !== id);
        hienThiDanhSach();
        luuDanhSach();
        alert('Đã xóa công việc!');
    } catch (error) {
        console.error('Lỗi khi xóa:', error);
        alert('Không thể xóa. Vui lòng thử lại.');
    } finally {
        hienThiLoading(false);
    }
}

// Tải danh sách khi trang load
document.addEventListener('DOMContentLoaded', function() {
    taiDanhSachTuAPI();
});
```

### Task 4: Thêm Loading State (15 phút)

Thêm HTML:

```html
<div id="loading" class="loading" style="display: none;">
    <div class="spinner"></div>
    <p>Đang tải...</p>
</div>
```

CSS:

```css
.loading {
    text-align: center;
    padding: 20px;
}

.spinner {
    border: 4px solid #f3f3f3;
    border-top: 4px solid #4CAF50;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 1s linear infinite;
    margin: 0 auto 10px;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
```

JavaScript:

```javascript
function hienThiLoading(show) {
    const loading = document.getElementById('loading');
    if (loading) {
        loading.style.display = show ? 'block' : 'none';
    }
}
```

### Task 5: Error Handling & Fallback (10 phút)

```javascript
/**
 * Hiển thị thông báo
 */
function hienThiThongBao(message, type = 'info') {
    // Tạo element thông báo
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Tự động xóa sau 3 giây
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Xử lý lỗi mạng
window.addEventListener('online', function() {
    hienThiThongBao('Đã kết nối lại internet!', 'success');
    taiDanhSachTuAPI();
});

window.addEventListener('offline', function() {
    hienThiThongBao('Mất kết nối internet. Đang dùng dữ liệu local.', 'warning');
});
```

---

## ✅ Checklist hoàn thành

- [ ] Đã setup JSON Server hoặc Mock API
- [ ] Đã tạo API service với đầy đủ CRUD operations
- [ ] Đã tích hợp API vào ứng dụng
- [ ] Đã thêm loading state khi gọi API
- [ ] Đã xử lý lỗi và fallback về LocalStorage
- [ ] Đã test tất cả các chức năng (thêm, sửa, xóa, lấy)

---

## 🧪 Checkpoint

**Câu hỏi:**

1. Tại sao cần `Content-Type: application/json` trong header?
2. `response.ok` kiểm tra gì?
3. Tại sao dùng `finally` trong try/catch?
4. Fallback về LocalStorage khi nào?

**Đáp án:**

1. Báo cho server biết dữ liệu gửi lên là JSON
2. Kiểm tra status code trong khoảng 200-299
3. Code trong `finally` luôn chạy, dù có lỗi hay không
4. Khi không kết nối được API hoặc API lỗi

---

## 📝 Bài tập về nhà

1. Thêm tính năng "Retry" khi API lỗi
2. Thêm tính năng "Sync" để đồng bộ LocalStorage với API
3. Thêm timeout cho các request (5 giây)
4. Thêm pagination nếu danh sách quá dài

---

**Chúc bạn hoàn thành tốt! 🚀**
