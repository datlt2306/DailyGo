# Buổi 14: Tách Module code

**Loại buổi**: Thực hành  
**Thời lượng**: 120 phút  
**Dự án**: ZenTask (To-Do App) - Thực hiện tái cấu trúc (Refactoring) mã nguồn sang kiến trúc Module

---

## 🎯 Mục tiêu học tập

Sau buổi học này, bạn sẽ có thể:

- ✅ Phân rã tệp tin `main.js` cồng kềnh thành các tệp tin module chuyên biệt
- ✅ Thiết lập lớp hằng số và các helper tiện ích sử dụng chung
- ✅ Xây dựng Module API cô lập các tác vụ HTTP Requests
- ✅ Xây dựng Module DOM quản lý hiển thị giao diện độc lập
- ✅ Vận hành ứng dụng ZenTask hoàn chỉnh sử dụng mô hình ES6 Modules chạy trên trình duyệt

---

## 🧩 Task Project

Chúng ta sẽ tiến hành bẻ nhỏ file `main.js` của Buổi 12 thành các file nằm trong thư mục `src/`.

### Task 1: Tạo `src/constants.js` và `src/utils.js` (20 phút)

1. Tạo file `src/constants.js` để lưu trữ các hằng số cấu hình:
```javascript
// src/constants.js
export const API_URL = 'http://localhost:3000/todos';
export const THEME_KEY = 'zentask_theme';
```

2. Tạo file `src/utils.js` chứa các hàm tiện ích dùng chung:
```javascript
// src/utils.js
/**
 * Hiển thị Toast Notification thông báo
 */
export function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    
    const toast = document.createElement('div');
    toast.style.background = type === 'success' ? '#10b981' : (type === 'error' ? '#ef4444' : '#3b82f6');
    toast.style.color = '#fff';
    toast.style.padding = '12px 24px';
    toast.style.borderRadius = '8px';
    toast.style.marginTop = '10px';
    toast.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    toast.style.transition = 'opacity 0.3s ease';
    toast.textContent = message;
    
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}
```

---

### Task 2: Tạo module `src/api.js` và `src/storage.js` (30 phút)

1. Tạo module `src/api.js` chịu trách nhiệm gọi API server:
```javascript
// src/api.js
import { API_URL } from './constants.js';

export const api = {
    /**
     * Tải danh sách công việc
     */
    async getAll() {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Failed to fetch todos');
        return response.json();
    },
    
    /**
     * Thêm mới công việc
     */
    async create(todo) {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(todo)
        });
        if (!response.ok) throw new Error('Failed to create todo');
        return response.json();
    },
    
    /**
     * Cập nhật một phần công việc
     */
    async update(id, data) {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        if (!response.ok) throw new Error('Failed to update todo');
        return response.json();
    },
    
    /**
     * Xóa công việc
     */
    async delete(id) {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) throw new Error('Failed to delete todo');
        return true;
    }
};
```

2. Tạo module `src/storage.js` quản lý cấu hình giao diện:
```javascript
// src/storage.js
import { THEME_KEY } from './constants.js';

export const storage = {
    getTheme() {
        return localStorage.getItem(THEME_KEY) || 'dark';
    },
    setTheme(theme) {
        localStorage.setItem(THEME_KEY, theme);
    }
};
```

---

### Task 3: Tạo module `src/dom.js` (35 phút)

Tạo module `src/dom.js` quản lý vẽ giao diện.

```javascript
// src/dom.js

export const dom = {
    /**
     * Hiển thị loading spinner
     */
    toggleLoading(show) {
        const loader = document.getElementById('loading-indicator');
        if (loader) {
            loader.classList.toggle('hidden', !show);
        }
    },
    
    /**
     * Cập nhật phần trăm tiến độ ở Sidebar
     */
    updateProgress(todos) {
        const total = todos.length;
        const completed = todos.filter(t => t.hoanThanh).length;
        const percent = total === 0 ? 0 : Math.round((completed / total) * 100);
        
        const txt = document.querySelector('.stats-header strong');
        if (txt) txt.textContent = `${percent}%`;
        
        const desc = document.querySelector('.stats-desc');
        if (desc) desc.textContent = `Hoàn thành ${completed} trong số ${total} công việc của bạn.`;
        
        const fill = document.querySelector('.progress-bar-fill');
        if (fill) fill.style.width = `${percent}%`;
    },
    
    /**
     * Render danh sách công việc ra HTML
     */
    renderList(todos, filterState) {
        const container = document.getElementById('danh-sach-cong-viec');
        container.innerHTML = '';
        
        // Lọc dữ liệu dựa theo filterState truyền vào
        const filtered = todos.filter(todo => {
            const khopTuKhoa = todo.ten.toLowerCase().includes(filterState.tuKhoa.toLowerCase()) ||
                               todo.moTa.toLowerCase().includes(filterState.tuKhoa.toLowerCase());
            
            let khopTrangThai = true;
            if (filterState.trangThai === 'pending') khopTrangThai = !todo.hoanThanh;
            else if (filterState.trangThai === 'completed') khopTrangThai = todo.hoanThanh;
            
            let khopUuTien = true;
            if (filterState.uuTien !== 'all') khopUuTien = todo.uuTien === filterState.uuTien;
            
            return khopTuKhoa && khopTrangThai && khopUuTien;
        });
        
        if (filtered.length === 0) {
            container.innerHTML = '<li class="empty-state" style="text-align:center; padding:30px; color:#94a3b8;"><p>Không có công việc nào!</p></li>';
            return;
        }
        
        filtered.forEach(todo => {
            const li = document.createElement('li');
            li.className = `task-item ${todo.hoanThanh ? 'completed' : ''}`;
            li.dataset.id = todo.id;
            li.dataset.priority = todo.uuTien;
            
            const priorityText = todo.uuTien === 'high' ? 'Ưu tiên cao' : (todo.uuTien === 'medium' ? 'Ưu tiên trung bình' : 'Ưu tiên thấp');
            
            li.innerHTML = `
                <div class="task-checkbox-wrapper">
                    <input type="checkbox" id="task-${todo.id}" class="task-checkbox" ${todo.hoanThanh ? 'checked' : ''}>
                    <label for="task-${todo.id}" class="checkbox-custom"></label>
                </div>
                <div class="task-content">
                    <div class="task-title-row">
                        <h4 class="task-title">${todo.ten}</h4>
                        <span class="badge-priority ${todo.uuTien}">${priorityText}</span>
                    </div>
                    <p class="task-desc">${todo.moTa}</p>
                    <div class="task-meta">
                        <span class="meta-item"><i data-lucide="calendar"></i> Hôm nay</span>
                    </div>
                </div>
                <div class="task-actions">
                    <button class="btn-action btn-edit" title="Sửa công việc" ${todo.hoanThanh ? 'disabled' : ''}><i data-lucide="edit-3"></i></button>
                    <button class="btn-action btn-delete" title="Xóa công việc"><i data-lucide="trash-2"></i></button>
                </div>
            `;
            container.appendChild(li);
        });
        
        if (window.lucide) window.lucide.createIcons();
    }
};
```

---

### Task 4: Viết lại file `src/main.js` làm Entry Point (35 phút)

`main.js` sẽ kết hợp tất cả các module trên, quản lý State và lắng nghe các sự kiện.

```javascript
// src/main.js
import { api } from './api.js';
import { storage } from './storage.js';
import { dom } from './dom.js';
import { showToast } from './utils.js';

// State quản lý toàn cục
let danhSachCongViec = [];
let dangSuaId = null;
let filterState = {
    tuKhoa: '',
    trangThai: 'all',
    uuTien: 'all'
};

// Hàm cập nhật giao diện tổng thể
function refreshUI() {
    dom.renderList(danhSachCongViec, filterState);
    dom.updateProgress(danhSachCongViec);
}

// 1. Tải danh sách công việc ban đầu từ API
async function initApp() {
    dom.toggleLoading(true);
    try {
        danhSachCongViec = await api.getAll();
        refreshUI();
    } catch (e) {
        console.error(e);
        showToast('Lỗi kết nối API Server!', 'error');
    } finally {
        dom.toggleLoading(false);
    }
}

// 2. Xử lý Form Submit (Thêm / Sửa)
const form = document.getElementById('form-cong-viec');
form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const ten = document.getElementById('ten-cong-viec').value;
    const desc = document.getElementById('mo-ta').value;
    const priVal = document.getElementById('do-uu-tien').value;
    const uuTien = priVal === '1' ? 'high' : (priVal === '2' ? 'medium' : 'low');
    
    dom.toggleLoading(true);
    try {
        if (dangSuaId) {
            // Sửa
            const updated = await api.update(dangSuaId, { ten, moTa: desc, uuTien });
            danhSachCongViec = danhSachCongViec.map(cv => cv.id === dangSuaId ? updated : cv);
            dangSuaId = null;
            document.querySelector('#form-cong-viec button[type="submit"] span').textContent = 'Thêm công việc';
            showToast('Đã lưu cập nhật!', 'success');
        } else {
            // Thêm mới
            const created = await api.create({ ten, moTa: desc, uuTien, hoanThanh: false });
            danhSachCongViec.unshift(created);
            showToast('Đã thêm công việc!', 'success');
        }
        refreshUI();
        form.reset();
    } catch (err) {
        showToast('Thao tác thất bại!', 'error');
    } finally {
        dom.toggleLoading(false);
    }
});

// 3. Xử lý click và change trên List (Xóa, Sửa, Toggle hoàn thành)
const list = document.getElementById('danh-sach-cong-viec');

list.addEventListener('change', async function(e) {
    if (e.target.classList.contains('task-checkbox')) {
        const item = e.target.closest('.task-item');
        const id = parseInt(item.dataset.id);
        const index = danhSachCongViec.findIndex(cv => cv.id === id);
        if (index === -1) return;
        
        const oldVal = danhSachCongViec[index].hoanThanh;
        
        // Optimistic UI update
        danhSachCongViec[index].hoanThanh = !oldVal;
        refreshUI();
        
        try {
            await api.update(id, { hoanThanh: !oldVal });
        } catch (err) {
            // Rollback
            danhSachCongViec[index].hoanThanh = oldVal;
            refreshUI();
            showToast('Không thể cập nhật API!', 'error');
        }
    }
});

list.addEventListener('click', async function(e) {
    // Xóa
    const btnDel = e.target.closest('.btn-delete');
    if (btnDel) {
        const item = btnDel.closest('.task-item');
        const id = parseInt(item.dataset.id);
        if (confirm('Bạn muốn xóa công việc này?')) {
            dom.toggleLoading(true);
            try {
                await api.delete(id);
                danhSachCongViec = danhSachCongViec.filter(cv => cv.id !== id);
                refreshUI();
                showToast('Đã xóa công việc.', 'info');
            } catch (err) {
                showToast('Không thể xóa!', 'error');
            } finally {
                dom.toggleLoading(false);
            }
        }
    }
    
    // Bắt đầu sửa
    const btnEdit = e.target.closest('.btn-edit');
    if (btnEdit) {
        const item = btnEdit.closest('.task-item');
        const id = parseInt(item.dataset.id);
        const cv = danhSachCongViec.find(todo => todo.id === id);
        if (cv) {
            dangSuaId = id;
            document.getElementById('ten-cong-viec').value = cv.ten;
            document.getElementById('mo-ta').value = cv.moTa;
            document.getElementById('do-uu-tien').value = cv.uuTien === 'high' ? '1' : (cv.uuTien === 'medium' ? '2' : '3');
            document.querySelector('#form-cong-viec button[type="submit"] span').textContent = 'Cập nhật công việc';
            document.querySelector('.task-form-section').scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// 4. Lọc tìm kiếm và Sidebar
document.getElementById('tim-kiem').addEventListener('input', function(e) {
    filterState.tuKhoa = e.target.value;
    refreshUI();
});

const navItems = document.querySelectorAll('.nav-filters .nav-item');
navItems.forEach(item => {
    item.addEventListener('click', function() {
        navItems.forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');
        
        const txt = item.querySelector('span').textContent;
        filterState.trangThai = txt === 'Chờ xử lý' ? 'pending' : (txt === 'Đã hoàn thành' ? 'completed' : 'all');
        refreshUI();
    });
});

// 5. Khởi tạo Theme giao diện
function initTheme() {
    const themeBtn = document.querySelector('.btn-theme-toggle');
    const body = document.body;
    const currentTheme = storage.getTheme();
    
    const applyTheme = (theme) => {
        const icon = themeBtn.querySelector('i');
        if (theme === 'light') {
            body.classList.add('light-theme');
            if (icon) icon.setAttribute('data-lucide', 'sun');
        } else {
            body.classList.remove('light-theme');
            if (icon) icon.setAttribute('data-lucide', 'moon');
        }
        if (window.lucide) window.lucide.createIcons();
    };
    
    applyTheme(currentTheme);
    
    themeBtn.addEventListener('click', function() {
        const next = body.classList.contains('light-theme') ? 'dark' : 'light';
        applyTheme(next);
        storage.setTheme(next);
    });
}

// Chạy ứng dụng
initTheme();
initApp();
```

---



## 📝 Bài tập về nhà

1. Hãy thực hiện phân rã hoàn thiện file `main.js` cũ của bạn thành các file modules độc lập nằm trong thư mục `src/` theo đúng cấu trúc hướng dẫn.
2. Kiểm tra xem ứng dụng của bạn có hoạt động bình thường sau khi tách không (lưu ý: bắt buộc phải mở ứng dụng thông qua Live Server trên VS Code).
3. Đọc hiểu luồng dữ liệu khi người dùng bấm nút xóa: Từ sự kiện click ở `main.js`, gọi API xóa ở `api.js`, cập nhật mảng trong `main.js`, gọi vẽ lại UI ở `dom.js`.

---

## 🔗 Tài liệu tham khảo

- [MDN: JavaScript modules - Import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
- [MDN: JavaScript modules - Export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)
