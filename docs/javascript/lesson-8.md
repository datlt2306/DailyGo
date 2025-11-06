# Buổi 8: Chức năng Sửa / Xóa / Tìm kiếm

**Loại buổi**: Thực hành  
**Thời lượng**: 120 phút  
**Dự án**: To-Do App (đã có hiển thị danh sách từ buổi 6)

---

## 🎯 Mục tiêu học tập

Sau buổi học này, bạn sẽ có thể:

- ✅ Tạo chức năng xóa công việc
- ✅ Tạo chức năng sửa công việc
- ✅ Tạo chức năng tìm kiếm công việc
- ✅ Đánh dấu công việc hoàn thành
- ✅ Áp dụng DOM và Event từ buổi 7

---

## 🧩 Task Project

### Task 1: Thêm nút Xóa (25 phút)

Cập nhật hàm `taoElementCongViec()` để thêm nút xóa:

```javascript
function taoElementCongViec(congViec, index) {
    const li = document.createElement('li');
    li.className = 'cong-viec-item';
    li.setAttribute('data-id', congViec.id);
    
    li.innerHTML = `
        <div class="cong-viec-info">
            <!-- ... nội dung cũ ... -->
        </div>
        <div class="cong-viec-actions">
            <button class="btn-xoa" data-id="${congViec.id}">Xóa</button>
        </div>
    `;
    
    return li;
}
```

Xử lý sự kiện xóa (Event Delegation):

```javascript
/**
 * Xóa công việc
 * @param {number} id - ID công việc cần xóa
 */
function xoaCongViec(id) {
    // Xác nhận trước khi xóa
    if (!confirm('Bạn có chắc muốn xóa công việc này?')) {
        return;
    }
    
    // Tìm và xóa trong mảng
    const index = danhSachCongViec.findIndex(function(cv) {
        return cv.id === id;
    });
    
    if (index !== -1) {
        danhSachCongViec.splice(index, 1);
        hienThiDanhSach();  // Cập nhật lại danh sách
        alert('Đã xóa công việc!');
    }
}

// Event Delegation: Lắng nghe ở container
const danhSachElement = document.getElementById('danh-sach-cong-viec');
danhSachElement.addEventListener('click', function(event) {
    if (event.target.classList.contains('btn-xoa')) {
        const id = parseInt(event.target.getAttribute('data-id'));
        xoaCongViec(id);
    }
});
```

### Task 2: Thêm nút Sửa (35 phút)

Thêm nút sửa và form chỉnh sửa:

```javascript
function taoElementCongViec(congViec, index) {
    // ... code cũ ...
    
    li.innerHTML = `
        <div class="cong-viec-info">
            <!-- ... nội dung ... -->
        </div>
        <div class="cong-viec-actions">
            <button class="btn-sua" data-id="${congViec.id}">Sửa</button>
            <button class="btn-xoa" data-id="${congViec.id}">Xóa</button>
        </div>
    `;
    
    return li;
}
```

Tạo hàm sửa:

```javascript
/**
 * Hiển thị form sửa công việc
 * @param {number} id - ID công việc cần sửa
 */
function hienThiFormSua(id) {
    const congViec = danhSachCongViec.find(function(cv) {
        return cv.id === id;
    });
    
    if (!congViec) return;
    
    // Điền dữ liệu vào form
    document.getElementById('ten-cong-viec').value = congViec.ten;
    document.getElementById('mo-ta').value = congViec.moTa || '';
    
    // Đổi nút "Thêm" thành "Cập nhật"
    const submitBtn = document.querySelector('#form-cong-viec button[type="submit"]');
    submitBtn.textContent = 'Cập nhật';
    submitBtn.setAttribute('data-edit-id', id);
    
    // Scroll đến form
    document.querySelector('#form-cong-viec').scrollIntoView({ behavior: 'smooth' });
}

/**
 * Cập nhật công việc
 * @param {number} id - ID công việc
 * @param {string} ten - Tên mới
 * @param {string} moTa - Mô tả mới
 */
function capNhatCongViec(id, ten, moTa) {
    const congViec = danhSachCongViec.find(function(cv) {
        return cv.id === id;
    });
    
    if (!congViec) {
        alert('Không tìm thấy công việc!');
        return false;
    }
    
    // Validate
    if (!kiemTraTenCongViec(ten)) {
        alert('Tên công việc không hợp lệ!');
        return false;
    }
    
    // Cập nhật
    congViec.ten = ten.trim();
    congViec.moTa = moTa.trim();
    
    hienThiDanhSach();
    alert('Đã cập nhật công việc!');
    return true;
}
```

Cập nhật form handler:

```javascript
const form = document.getElementById('form-cong-viec');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const ten = document.getElementById('ten-cong-viec').value;
    const moTa = document.getElementById('mo-ta').value;
    const submitBtn = form.querySelector('button[type="submit"]');
    const editId = submitBtn.getAttribute('data-edit-id');
    
    if (editId) {
        // Đang ở chế độ sửa
        if (capNhatCongViec(parseInt(editId), ten, moTa)) {
            // Reset form về chế độ thêm
            form.reset();
            submitBtn.textContent = 'Thêm công việc';
            submitBtn.removeAttribute('data-edit-id');
        }
    } else {
        // Chế độ thêm mới
        if (themCongViec(ten, moTa)) {
            form.reset();
        }
    }
});

// Xử lý sự kiện click nút sửa
danhSachElement.addEventListener('click', function(event) {
    if (event.target.classList.contains('btn-sua')) {
        const id = parseInt(event.target.getAttribute('data-id'));
        hienThiFormSua(id);
    }
    // ... xử lý xóa ...
});
```

### Task 3: Tìm kiếm công việc (25 phút)

Thêm input tìm kiếm:

```html
<div class="search-container">
    <input 
        type="text" 
        id="tim-kiem" 
        placeholder="Tìm kiếm công việc..."
    >
</div>
```

Hàm tìm kiếm:

```javascript
/**
 * Tìm kiếm công việc theo từ khóa
 * @param {string} tuKhoa - Từ khóa tìm kiếm
 */
function timKiemCongViec(tuKhoa) {
    const tuKhoaLower = tuKhoa.toLowerCase().trim();
    
    if (tuKhoaLower === '') {
        hienThiDanhSach();  // Hiển thị tất cả nếu rỗng
        return;
    }
    
    const ketQua = danhSachCongViec.filter(function(cv) {
        return cv.ten.toLowerCase().includes(tuKhoaLower) ||
               (cv.moTa && cv.moTa.toLowerCase().includes(tuKhoaLower));
    });
    
    // Hiển thị kết quả
    const danhSachElement = document.getElementById('danh-sach-cong-viec');
    danhSachElement.innerHTML = '';
    
    if (ketQua.length === 0) {
        danhSachElement.innerHTML = '<li class="empty">Không tìm thấy công việc nào</li>';
        return;
    }
    
    ketQua.forEach(function(congViec, index) {
        const li = taoElementCongViec(congViec, index);
        danhSachElement.appendChild(li);
    });
    
    // Highlight từ khóa
    highlightKeyword(tuKhoa);
}

/**
 * Highlight từ khóa trong kết quả
 */
function highlightKeyword(tuKhoa) {
    const items = document.querySelectorAll('.cong-viec-ten');
    items.forEach(function(item) {
        const text = item.textContent;
        const regex = new RegExp(`(${tuKhoa})`, 'gi');
        item.innerHTML = text.replace(regex, '<mark>$1</mark>');
    });
}

// Lắng nghe sự kiện tìm kiếm
const inputTimKiem = document.getElementById('tim-kiem');
inputTimKiem.addEventListener('input', function() {
    timKiemCongViec(this.value);
});
```

### Task 4: Đánh dấu hoàn thành (20 phút)

Thêm checkbox hoàn thành:

```javascript
function taoElementCongViec(congViec, index) {
    // ... code cũ ...
    
    li.innerHTML = `
        <div class="cong-viec-info">
            <input 
                type="checkbox" 
                class="checkbox-hoan-thanh" 
                data-id="${congViec.id}"
                ${congViec.trangThai === 'hoan-thanh' ? 'checked' : ''}
            >
            <!-- ... nội dung ... -->
        </div>
        <!-- ... actions ... -->
    `;
    
    return li;
}
```

Xử lý sự kiện:

```javascript
/**
 * Đánh dấu công việc hoàn thành
 * @param {number} id - ID công việc
 * @param {boolean} hoanThanh - Trạng thái hoàn thành
 */
function danhDauHoanThanh(id, hoanThanh) {
    const congViec = danhSachCongViec.find(function(cv) {
        return cv.id === id;
    });
    
    if (congViec) {
        congViec.trangThai = hoanThanh ? 'hoan-thanh' : 'chua-lam';
        hienThiDanhSach();
    }
}

// Event delegation cho checkbox
danhSachElement.addEventListener('change', function(event) {
    if (event.target.classList.contains('checkbox-hoan-thanh')) {
        const id = parseInt(event.target.getAttribute('data-id'));
        const hoanThanh = event.target.checked;
        danhDauHoanThanh(id, hoanThanh);
    }
});
```

---

## ✅ Checklist hoàn thành

- [ ] Đã tạo chức năng xóa công việc với xác nhận
- [ ] Đã tạo chức năng sửa công việc
- [ ] Đã tạo chức năng tìm kiếm theo tên/mô tả
- [ ] Đã thêm checkbox đánh dấu hoàn thành
- [ ] Đã dùng Event Delegation cho các nút
- [ ] Form có thể chuyển giữa chế độ thêm và sửa

---

## 🧪 Checkpoint

**Câu hỏi:**

1. Tại sao dùng Event Delegation thay vì lắng nghe từng nút?
2. `findIndex` khác gì với `find`?
3. Tại sao dùng `includes()` trong tìm kiếm?
4. `splice` khác gì với `filter`?

**Đáp án:**

1. Event Delegation hiệu quả hơn, không cần lắng nghe lại khi thêm phần tử mới
2. `findIndex` trả về index, `find` trả về phần tử
3. `includes()` kiểm tra chuỗi có chứa substring
4. `splice` thay đổi mảng gốc, `filter` tạo mảng mới

---

## 📝 Bài tập về nhà

1. Thêm tính năng "Xóa tất cả công việc đã hoàn thành"
2. Thêm tính năng "Đánh dấu tất cả hoàn thành"
3. Thêm animation khi xóa/sửa công việc
4. Lưu trạng thái tìm kiếm vào URL

---

**Chúc bạn hoàn thành tốt! 🚀**
