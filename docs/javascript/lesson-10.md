# Buổi 10: Lưu dữ liệu vào LocalStorage

**Loại buổi**: Thực hành  
**Thời lượng**: 120 phút  
**Dự án**: To-Do App (đã có CRUD từ buổi 8)

---

## 🎯 Mục tiêu học tập

Sau buổi học này, bạn sẽ có thể:

- ✅ Lưu danh sách công việc vào LocalStorage
- ✅ Tải dữ liệu từ LocalStorage khi trang load
- ✅ Tự động lưu khi thêm/sửa/xóa công việc
- ✅ Xử lý trường hợp dữ liệu rỗng hoặc lỗi
- ✅ Áp dụng kiến thức JSON và LocalStorage từ buổi 9

---

## 🧩 Task Project

### Task 1: Tạo helper functions cho Storage (25 phút)

Tạo file `storage.js` hoặc thêm vào `main.js`:

```javascript
/**
 * Helper functions cho LocalStorage
 */
const Storage = {
    /**
     * Lưu dữ liệu vào LocalStorage
     * @param {string} key - Key lưu trữ
     * @param {any} data - Dữ liệu cần lưu
     * @returns {boolean} true nếu thành công
     */
    luu: function(key, data) {
        try {
            const jsonString = JSON.stringify(data);
            localStorage.setItem(key, jsonString);
            return true;
        } catch (error) {
            console.error('Lỗi lưu Storage:', error);
            alert('Không thể lưu dữ liệu. Vui lòng thử lại.');
            return false;
        }
    },
    
    /**
     * Lấy dữ liệu từ LocalStorage
     * @param {string} key - Key cần lấy
     * @param {any} defaultValue - Giá trị mặc định nếu không có
     * @returns {any} Dữ liệu đã lấy hoặc defaultValue
     */
    lay: function(key, defaultValue = null) {
        try {
            const jsonString = localStorage.getItem(key);
            if (!jsonString) {
                return defaultValue;
            }
            return JSON.parse(jsonString);
        } catch (error) {
            console.error('Lỗi đọc Storage:', error);
            // Xóa dữ liệu lỗi
            localStorage.removeItem(key);
            return defaultValue;
        }
    },
    
    /**
     * Xóa dữ liệu
     * @param {string} key - Key cần xóa
     */
    xoa: function(key) {
        localStorage.removeItem(key);
    },
    
    /**
     * Xóa tất cả dữ liệu
     */
    xoaTatCa: function() {
        localStorage.clear();
    }
};

// Key lưu trữ danh sách công việc
const STORAGE_KEY = 'todoApp_danhSachCongViec';
```

### Task 2: Tải dữ liệu khi trang load (20 phút)

```javascript
/**
 * Tải danh sách công việc từ LocalStorage
 */
function taiDanhSach() {
    const data = Storage.lay(STORAGE_KEY, []);
    
    if (Array.isArray(data)) {
        danhSachCongViec = data;
        console.log('Đã tải', danhSachCongViec.length, 'công việc từ LocalStorage');
    } else {
        console.warn('Dữ liệu không hợp lệ, khởi tạo danh sách rỗng');
        danhSachCongViec = [];
    }
    
    // Hiển thị danh sách
    hienThiDanhSach();
}

// Tải dữ liệu khi trang load
document.addEventListener('DOMContentLoaded', function() {
    taiDanhSach();
});
```

### Task 3: Tự động lưu khi thay đổi (30 phút)

Cập nhật các hàm để tự động lưu:

```javascript
/**
 * Lưu danh sách công việc vào LocalStorage
 */
function luuDanhSach() {
    const success = Storage.luu(STORAGE_KEY, danhSachCongViec);
    if (success) {
        console.log('Đã lưu danh sách vào LocalStorage');
    }
}

// Cập nhật hàm thêm công việc
function themCongViec(ten, moTa = '') {
    // ... validation và tạo công việc ...
    
    danhSachCongViec.push(congViec);
    hienThiDanhSach();
    luuDanhSach();  // Tự động lưu
    
    return congViec;
}

// Cập nhật hàm xóa
function xoaCongViec(id) {
    // ... code xóa ...
    
    danhSachCongViec.splice(index, 1);
    hienThiDanhSach();
    luuDanhSach();  // Tự động lưu
    
    alert('Đã xóa công việc!');
}

// Cập nhật hàm sửa
function capNhatCongViec(id, ten, moTa) {
    // ... code cập nhật ...
    
    congViec.ten = ten.trim();
    congViec.moTa = moTa.trim();
    
    hienThiDanhSach();
    luuDanhSach();  // Tự động lưu
    
    alert('Đã cập nhật công việc!');
    return true;
}

// Cập nhật hàm đánh dấu hoàn thành
function danhDauHoanThanh(id, hoanThanh) {
    const congViec = danhSachCongViec.find(cv => cv.id === id);
    if (congViec) {
        congViec.trangThai = hoanThanh ? 'hoan-thanh' : 'chua-lam';
        hienThiDanhSach();
        luuDanhSach();  // Tự động lưu
    }
}
```

### Task 4: Thêm nút "Xóa tất cả dữ liệu" (15 phút)

Thêm vào HTML:

```html
<div class="actions-container">
    <button id="btn-xoa-tat-ca" class="btn-danger">Xóa tất cả dữ liệu</button>
</div>
```

Xử lý sự kiện:

```javascript
/**
 * Xóa tất cả công việc
 */
function xoaTatCaCongViec() {
    if (!confirm('Bạn có chắc muốn xóa TẤT CẢ công việc? Hành động này không thể hoàn tác!')) {
        return;
    }
    
    danhSachCongViec = [];
    hienThiDanhSach();
    luuDanhSach();
    alert('Đã xóa tất cả công việc!');
}

// Lắng nghe sự kiện
const btnXoaTatCa = document.getElementById('btn-xoa-tat-ca');
if (btnXoaTatCa) {
    btnXoaTatCa.addEventListener('click', xoaTatCaCongViec);
}
```

### Task 5: Export/Import dữ liệu (20 phút)

Thêm tính năng xuất/nhập dữ liệu:

```javascript
/**
 * Xuất dữ liệu ra file JSON
 */
function xuatDuLieu() {
    const data = {
        danhSachCongViec: danhSachCongViec,
        ngayXuat: new Date().toISOString(),
        version: '1.0'
    };
    
    const jsonString = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `todo-backup-${Date.now()}.json`;
    a.click();
    
    URL.revokeObjectURL(url);
    alert('Đã xuất dữ liệu!');
}

/**
 * Nhập dữ liệu từ file
 */
function nhapDuLieu(file) {
    const reader = new FileReader();
    
    reader.onload = function(event) {
        try {
            const data = JSON.parse(event.target.result);
            
            if (data.danhSachCongViec && Array.isArray(data.danhSachCongViec)) {
                if (confirm('Bạn có muốn thay thế dữ liệu hiện tại?')) {
                    danhSachCongViec = data.danhSachCongViec;
                    hienThiDanhSach();
                    luuDanhSach();
                    alert('Đã nhập dữ liệu thành công!');
                }
            } else {
                alert('File không hợp lệ!');
            }
        } catch (error) {
            console.error('Lỗi:', error);
            alert('Lỗi khi đọc file!');
        }
    };
    
    reader.readAsText(file);
}

// Thêm vào HTML
// <button id="btn-xuat">Xuất dữ liệu</button>
// <input type="file" id="input-nhap" accept=".json">
```

---

## ✅ Checklist hoàn thành

- [ ] Đã tạo helper functions cho Storage
- [ ] Đã tải dữ liệu khi trang load
- [ ] Đã tự động lưu khi thêm/sửa/xóa công việc
- [ ] Đã xử lý lỗi khi parse JSON
- [ ] Đã thêm nút "Xóa tất cả dữ liệu"
- [ ] Dữ liệu vẫn tồn tại sau khi reload trang
- [ ] Đã test với dữ liệu rỗng và lỗi

---

## 🧪 Checkpoint

**Câu hỏi:**

1. Tại sao phải dùng `JSON.stringify()` trước khi lưu?
2. `localStorage.getItem()` trả về gì nếu key không tồn tại?
3. Tại sao cần try/catch khi parse JSON?
4. `DOMContentLoaded` khác gì với `window.onload`?

**Đáp án:**

1. LocalStorage chỉ lưu string, cần stringify object/array
2. Trả về `null`
3. Parse có thể lỗi nếu JSON không hợp lệ
4. `DOMContentLoaded` chạy sớm hơn, chỉ chờ DOM, không chờ images

---

## 📝 Bài tập về nhà

1. Thêm tính năng "Xuất/Nhập dữ liệu"
2. Thêm tính năng "Backup tự động" (lưu nhiều bản backup)
3. Thêm thông báo khi lưu dữ liệu thành công
4. Thêm tính năng "Khôi phục từ backup"

---

**Chúc bạn hoàn thành tốt! 🚀**
