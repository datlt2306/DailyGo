# Buổi 6: Hiển thị danh sách + Thao tác dữ liệu

**Loại buổi**: Thực hành  
**Thời lượng**: 120 phút  
**Dự án**: To-Do App (đã có chức năng thêm công việc từ buổi 4)

---

## 🎯 Mục tiêu học tập

Sau buổi học này, bạn sẽ có thể:

- ✅ Dùng Array để lưu trữ và quản lý danh sách công việc
- ✅ Render danh sách công việc ra HTML động
- ✅ Sử dụng các phương thức mảng (map, forEach, filter)
- ✅ Cập nhật giao diện khi thêm công việc mới
- ✅ Áp dụng kiến thức Array và Object từ buổi 5

---

## 🧩 Task Project

### Task 1: Cập nhật HTML để hiển thị danh sách (15 phút)

Thêm phần hiển thị danh sách vào HTML:

```html
<div class="container">
    <h1>Quản lý Công Việc</h1>
    
    <!-- Form thêm công việc -->
    <form id="form-cong-viec">...</form>
    
    <!-- Danh sách công việc -->
    <div class="danh-sach-container">
        <h2>Danh sách công việc (<span id="tong-so">0</span>)</h2>
        <ul id="danh-sach-cong-viec"></ul>
    </div>
</div>
```

### Task 2: Tạo hàm render danh sách (40 phút)

```javascript
/**
 * Hiển thị danh sách công việc ra HTML
 */
function hienThiDanhSach() {
    const danhSachElement = document.getElementById('danh-sach-cong-viec');
    const tongSoElement = document.getElementById('tong-so');
    
    // Xóa nội dung cũ
    danhSachElement.innerHTML = '';
    
    // Cập nhật tổng số
    tongSoElement.textContent = danhSachCongViec.length;
    
    // Nếu danh sách rỗng
    if (danhSachCongViec.length === 0) {
        danhSachElement.innerHTML = '<li class="empty">Chưa có công việc nào</li>';
        return;
    }
    
    // Render từng công việc
    danhSachCongViec.forEach(function(congViec, index) {
        const li = taoElementCongViec(congViec, index);
        danhSachElement.appendChild(li);
    });
}

/**
 * Tạo element HTML cho một công việc
 * @param {Object} congViec - Object công việc
 * @param {number} index - Vị trí trong mảng
 * @returns {HTMLElement} Element li
 */
function taoElementCongViec(congViec, index) {
    const li = document.createElement('li');
    li.className = 'cong-viec-item';
    li.setAttribute('data-id', congViec.id);
    
    // Format ngày
    const ngayTao = new Date(congViec.ngayTao);
    const ngayFormatted = ngayTao.toLocaleDateString('vi-VN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
    
    li.innerHTML = `
        <div class="cong-viec-info">
            <span class="stt">${index + 1}</span>
            <div class="cong-viec-details">
                <h3 class="cong-viec-ten">${congViec.ten}</h3>
                ${congViec.moTa ? `<p class="cong-viec-mota">${congViec.moTa}</p>` : ''}
                <div class="cong-viec-meta">
                    <span class="trang-thai trang-thai-${congViec.trangThai}">${congViec.trangThai}</span>
                    <span class="ngay-tao">${ngayFormatted}</span>
                </div>
            </div>
        </div>
    `;
    
    return li;
}
```

### Task 3: Cập nhật khi thêm công việc (15 phút)

Cập nhật hàm `themCongViec()`:

```javascript
function themCongViec(ten, moTa = '') {
    // ... validation và tạo công việc ...
    
    danhSachCongViec.push(congViec);
    
    // Hiển thị lại danh sách
    hienThiDanhSach();
    
    return congViec;
}
```

### Task 4: Thêm CSS cho danh sách (20 phút)

```css
.danh-sach-container {
    margin-top: 30px;
}

.danh-sach-container h2 {
    color: #333;
    margin-bottom: 15px;
}

#danh-sach-cong-viec {
    list-style: none;
    padding: 0;
}

.cong-viec-item {
    background: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 15px;
    margin-bottom: 10px;
    transition: box-shadow 0.2s;
}

.cong-viec-item:hover {
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.cong-viec-info {
    display: flex;
    gap: 15px;
}

.stt {
    background: #4CAF50;
    color: white;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    flex-shrink: 0;
}

.cong-viec-details {
    flex: 1;
}

.cong-viec-ten {
    margin: 0 0 5px 0;
    color: #333;
    font-size: 18px;
}

.cong-viec-mota {
    color: #666;
    margin: 5px 0;
    font-size: 14px;
}

.cong-viec-meta {
    display: flex;
    gap: 15px;
    margin-top: 10px;
    font-size: 12px;
}

.trang-thai {
    padding: 4px 8px;
    border-radius: 4px;
    font-weight: bold;
}

.trang-thai-chua-lam {
    background: #ffebee;
    color: #c62828;
}

.trang-thai-dang-lam {
    background: #fff3e0;
    color: #e65100;
}

.trang-thai-hoan-thanh {
    background: #e8f5e9;
    color: #2e7d32;
}

.ngay-tao {
    color: #999;
}

.empty {
    text-align: center;
    padding: 40px;
    color: #999;
    font-style: italic;
}
```

### Task 5: Lọc danh sách theo trạng thái (20 phút)

Thêm dropdown để lọc:

```html
<div class="filter-container">
    <label for="filter-trang-thai">Lọc theo trạng thái:</label>
    <select id="filter-trang-thai">
        <option value="tat-ca">Tất cả</option>
        <option value="chua-lam">Chưa làm</option>
        <option value="dang-lam">Đang làm</option>
        <option value="hoan-thanh">Hoàn thành</option>
    </select>
</div>
```

```javascript
/**
 * Lọc danh sách công việc theo trạng thái
 * @param {string} trangThai - Trạng thái cần lọc
 */
function locDanhSach(trangThai) {
    let danhSachLoc;
    
    if (trangThai === 'tat-ca') {
        danhSachLoc = danhSachCongViec;
    } else {
        danhSachLoc = danhSachCongViec.filter(function(cv) {
            return cv.trangThai === trangThai;
        });
    }
    
    // Hiển thị danh sách đã lọc
    const danhSachElement = document.getElementById('danh-sach-cong-viec');
    danhSachElement.innerHTML = '';
    
    if (danhSachLoc.length === 0) {
        danhSachElement.innerHTML = '<li class="empty">Không có công việc nào</li>';
        return;
    }
    
    danhSachLoc.forEach(function(congViec, index) {
        const li = taoElementCongViec(congViec, index);
        danhSachElement.appendChild(li);
    });
}

// Lắng nghe sự kiện filter
const filterSelect = document.getElementById('filter-trang-thai');
filterSelect.addEventListener('change', function() {
    locDanhSach(this.value);
});
```

### Task 6: Sắp xếp danh sách (10 phút)

```javascript
/**
 * Sắp xếp danh sách công việc
 * @param {string} sortBy - Tiêu chí sắp xếp ('ngay-tao', 'ten')
 * @param {string} order - Thứ tự ('asc', 'desc')
 */
function sapXepDanhSach(sortBy = 'ngay-tao', order = 'desc') {
    const danhSachSao = [...danhSachCongViec];  // Copy mảng
    
    danhSachSao.sort(function(a, b) {
        let valueA, valueB;
        
        if (sortBy === 'ngay-tao') {
            valueA = new Date(a.ngayTao);
            valueB = new Date(b.ngayTao);
        } else if (sortBy === 'ten') {
            valueA = a.ten.toLowerCase();
            valueB = b.ten.toLowerCase();
        }
        
        if (order === 'asc') {
            return valueA > valueB ? 1 : -1;
        } else {
            return valueA < valueB ? 1 : -1;
        }
    });
    
    // Hiển thị danh sách đã sắp xếp
    const danhSachElement = document.getElementById('danh-sach-cong-viec');
    danhSachElement.innerHTML = '';
    
    danhSachSao.forEach(function(congViec, index) {
        const li = taoElementCongViec(congViec, index);
        danhSachElement.appendChild(li);
    });
}
```

---

## ✅ Checklist hoàn thành

- [ ] Đã tạo hàm `hienThiDanhSach()` render danh sách ra HTML
- [ ] Đã tạo hàm `taoElementCongViec()` tạo element cho mỗi công việc
- [ ] Danh sách tự động cập nhật khi thêm công việc mới
- [ ] Đã style danh sách đẹp mắt
- [ ] Đã thêm tính năng lọc theo trạng thái
- [ ] Đã thêm tính năng sắp xếp
- [ ] Hiển thị được tổng số công việc

---

## 🧪 Checkpoint

**Câu hỏi:**

1. Tại sao dùng `forEach` thay vì `for` loop để render?
2. `filter` khác gì với `map`?
3. `innerHTML = ''` dùng để làm gì?
4. Tại sao copy mảng trước khi sort?

**Đáp án:**

1. `forEach` gọn hơn, dễ đọc, không cần quản lý index
2. `filter` lọc phần tử, `map` biến đổi phần tử
3. Xóa nội dung cũ trước khi render mới
4. Tránh thay đổi mảng gốc (immutability)

---

## 📝 Bài tập về nhà

1. Thêm tính năng tìm kiếm công việc theo tên
2. Thêm nút "Sắp xếp" với dropdown chọn tiêu chí
3. Hiển thị thống kê (số công việc chưa làm, đang làm, hoàn thành)
4. Thêm animation khi thêm công việc mới

---

**Chúc bạn hoàn thành tốt! 🚀**
