# Buổi 6: Tính năng Sửa, Tìm kiếm & Lọc

**Loại buổi**: Thực hành  
**Thời lượng**: 120 phút  
**Dự án**: ZenTask (To-Do App) - Hoàn thiện các chức năng CRUD cơ bản và lọc tìm kiếm nâng cao

---

## 🎯 Mục tiêu học tập

Sau buổi học này, bạn sẽ có thể:

- ✅ Cập nhật trạng thái hoàn thành (Toggle status) của công việc bằng cách thay đổi State
- ✅ Viết logic chuyển đổi Form thành chế độ Chỉnh sửa (Edit mode) và lưu cập nhật
- ✅ Thực hiện tìm kiếm công việc theo từ khóa theo thời gian thực (Real-time search)
- ✅ Thực hiện lọc danh sách công việc theo Trạng thái và Độ ưu tiên
- ✅ Đảm bảo luồng dữ liệu State-driven UI vận hành trơn tru cho toàn bộ tính năng

---

## 🧩 Task Project

### Task 1: Toggle Trạng thái Hoàn thành (30 phút)

Khi người dùng nhấn vào checkbox của một công việc, chúng ta cần tìm công việc đó trong mảng `danhSachCongViec`, đảo ngược trạng thái `hoanThanh` (từ `true` sang `false` và ngược lại), sau đó cập nhật lại giao diện và tiến độ.

Hãy sử dụng Event Delegation để bắt sự kiện thay đổi (`change`) trên checkbox:

```javascript
const listContainer = document.getElementById('danh-sach-cong-viec');

listContainer.addEventListener('change', function(event) {
    // Kiểm tra xem sự thay đổi có diễn ra trên checkbox không
    if (event.target.classList.contains('task-checkbox')) {
        const taskItem = event.target.closest('.task-item');
        const id = parseInt(taskItem.dataset.id);
        
        toggleHoanThanh(id);
    }
});

/**
 * Đảo ngược trạng thái hoàn thành của công việc theo ID
 * @param {number} id - ID công việc
 */
function toggleHoanThanh(id) {
    // Cập nhật State một cách an toàn (Immutability)
    danhSachCongViec = danhSachCongViec.map(cv => {
        if (cv.id === id) {
            return { ...cv, hoanThanh: !cv.hoanThanh };
        }
        return cv;
    });
    
    // Render lại giao diện và tiến độ
    renderList();
    capNhatTienDo();
}
```

---

### Task 2: Chức năng Sửa công việc (Edit Task) (40 phút)

Chức năng sửa sẽ hoạt động qua 2 bước chính:
1. **Bước 1**: Khi click nút Sửa, lấy thông tin công việc điền vào form, đổi tên nút của Form thành "Cập nhật công việc" và lưu lại ID của công việc đang sửa (Edit ID).
2. **Bước 2**: Khi gửi form, nếu có Edit ID thì thực hiện cập nhật thay vì thêm mới.

#### Bước 2.1: Lắng nghe sự kiện click nút Sửa và điền form
Khai báo một biến toàn cục ở đầu tệp `main.js` để theo dõi công việc nào đang được sửa:
```javascript
let dangSuaId = null; // null nghĩa là đang ở chế độ thêm mới
```

Bổ sung xử lý sự kiện click trong listener của `listContainer`:
```javascript
listContainer.addEventListener('click', function(event) {
    // ... code cũ xử lý nút xóa ...
    
    const nutSua = event.target.closest('.btn-edit');
    if (nutSua) {
        const taskItem = nutSua.closest('.task-item');
        const id = parseInt(taskItem.dataset.id);
        
        chuyenSangCheDoSua(id);
    }
});

/**
 * Điền thông tin công việc cần sửa lên form
 * @param {number} id - ID công việc
 */
function chuyenSangCheDoSua(id) {
    // Tìm công việc trong mảng
    const congViec = danhSachCongViec.find(cv => cv.id === id);
    if (!congViec) return;
    
    dangSuaId = id; // Ghi nhớ ID đang sửa
    
    // Điền dữ liệu vào form
    document.getElementById('ten-cong-viec').value = congViec.ten;
    document.getElementById('mo-ta').value = congViec.moTa;
    
    // Chuyển đổi giá trị select độ ưu tiên tương ứng
    const selectUuTien = document.getElementById('do-uu-tien');
    selectUuTien.value = congViec.uuTien === 'high' ? '1' : (congViec.uuTien === 'medium' ? '2' : '3');
    
    // Đổi chữ nút submit của form
    const submitBtn = document.querySelector('#form-cong-viec button[type="submit"] span');
    submitBtn.textContent = 'Cập nhật công việc';
    
    // Scroll mượt lên form để người dùng nhìn thấy
    document.querySelector('.task-form-section').scrollIntoView({ behavior: 'smooth' });
}
```

#### Bước 2.2: Cập nhật hàm xử lý submit form để hỗ trợ lưu chỉnh sửa
Hãy sửa lại event listener `submit` của `formCongViec`:
```javascript
formCongViec.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const inputTen = document.getElementById('ten-cong-viec');
    const selectUuTien = document.getElementById('do-uu-tien');
    const textareaMoTa = document.getElementById('mo-ta');
    
    const ten = inputTen.value;
    const uuTien = selectUuTien.value === '1' ? 'high' : (selectUuTien.value === '2' ? 'medium' : 'low');
    const moTa = textareaMoTa.value;
    
    if (!kiemTraTenCongViec(ten)) {
        alert('Tên công việc không hợp lệ!');
        return;
    }
    
    if (dangSuaId !== null) {
        // ĐANG Ở CHẾ ĐỘ SỬA: Cập nhật công việc cũ
        danhSachCongViec = danhSachCongViec.map(cv => {
            if (cv.id === dangSuaId) {
                return {
                    ...cv,
                    ten: ten.trim(),
                    moTa: moTa.trim(),
                    uuTien: uuTien
                };
            }
            return cv;
        });
        
        showToast('Đã cập nhật công việc thành công!', 'success');
        
        // Reset trạng thái sửa
        dangSuaId = null;
        document.querySelector('#form-cong-viec button[type="submit"] span').textContent = 'Thêm công việc';
    } else {
        // ĐANG Ở CHẾ ĐỘ THÊM MỚI
        const congViecMoi = {
            id: Date.now(),
            ten: ten.trim(),
            moTa: moTa.trim(),
            uuTien: uuTien,
            hoanThanh: false
        };
        danhSachCongViec.unshift(congViecMoi);
        showToast('Đã thêm công việc mới!', 'success');
    }
    
    // Re-render UI và reset form
    renderList();
    capNhatTienDo();
    formCongViec.reset();
});
```

---

### Task 3: Chức năng Lọc & Tìm kiếm (50 phút)

Chúng ta cần có khả năng lọc danh sách theo từ khóa nhập vào ô `#tim-kiem` và lọc theo bộ lọc phân loại bên Sidebar (Tất cả, Chờ xử lý, Đã hoàn thành).

Để làm việc này một cách sạch sẽ theo tư duy State, ta nên:
1. Lưu trữ các điều kiện lọc (Filter State) hiện tại vào biến.
2. Viết lại hàm `renderList()` để lọc mảng `danhSachCongViec` dựa trên các điều kiện đó trước khi tạo HTML.

#### Bước 3.1: Định nghĩa các trạng thái bộ lọc (Filter State)
```javascript
// Trạng thái bộ lọc mặc định
let filterState = {
    tuKhoa: '',
    trangThai: 'all', // 'all', 'pending', 'completed'
    uuTien: 'all'     // 'all', 'high', 'medium', 'low'
};
```

#### Bước 3.2: Viết lại hàm `renderList()` để áp dụng bộ lọc
Hãy chỉnh sửa lại hàm `renderList()` của Buổi 2 để lọc mảng trước khi vẽ:

```javascript
function renderList() {
    const listContainer = document.getElementById('danh-sach-cong-viec');
    listContainer.innerHTML = '';
    
    // 1. Áp dụng bộ lọc lên mảng gốc để tạo mảng hiển thị
    const danhSachHienThi = danhSachCongViec.filter(congViec => {
        // Lọc theo từ khóa (không phân biệt hoa thường)
        const khopTuKhoa = congViec.ten.toLowerCase().includes(filterState.tuKhoa.toLowerCase()) ||
                            congViec.moTa.toLowerCase().includes(filterState.tuKhoa.toLowerCase());
                            
        // Lọc theo trạng thái
        let khopTrangThai = true;
        if (filterState.trangThai === 'pending') khopTrangThai = !congViec.hoanThanh;
        else if (filterState.trangThai === 'completed') khopTrangThai = congViec.hoanThanh;
        
        // Lọc theo độ ưu tiên
        let khopUuTien = true;
        if (filterState.uuTien !== 'all') khopUuTien = congViec.uuTien === filterState.uuTien;
        
        return khopTuKhoa && khopTrangThai && khopUuTien;
    });
    
    // 2. Render mảng đã lọc ra UI
    if (danhSachHienThi.length === 0) {
        listContainer.innerHTML = '<li class="empty-state" style="text-align:center; padding:30px; color:#94a3b8;"><p>Không tìm thấy công việc phù hợp!</p></li>';
        return;
    }
    
    danhSachHienThi.forEach(congViec => {
        const item = document.createElement('li');
        item.className = `task-item ${congViec.hoanThanh ? 'completed' : ''}`;
        item.dataset.id = congViec.id;
        item.dataset.priority = congViec.uuTien;
        
        let nhanUuTien = 'Ưu tiên thấp';
        if (congViec.uuTien === 'high') nhanUuTien = 'Ưu tiên cao';
        else if (congViec.uuTien === 'medium') nhanUuTien = 'Ưu tiên trung bình';
        
        item.innerHTML = `
            <div class="task-checkbox-wrapper">
                <input type="checkbox" id="task-${congViec.id}" class="task-checkbox" ${congViec.hoanThanh ? 'checked' : ''}>
                <label for="task-${congViec.id}" class="checkbox-custom"></label>
            </div>
            <div class="task-content">
                <div class="task-title-row">
                    <h4 class="task-title">${congViec.ten}</h4>
                    <span class="badge-priority ${congViec.uuTien}">${nhanUuTien}</span>
                </div>
                <p class="task-desc">${congViec.moTa}</p>
                <div class="task-meta">
                    <span class="meta-item"><i data-lucide="calendar"></i> Hôm nay</span>
                </div>
            </div>
            <div class="task-actions">
                <button class="btn-action btn-edit" title="Sửa công việc" ${congViec.hoanThanh ? 'disabled' : ''}><i data-lucide="edit-3"></i></button>
                <button class="btn-action btn-delete" title="Xóa công việc"><i data-lucide="trash-2"></i></button>
            </div>
        `;
        listContainer.appendChild(item);
    });
    
    if (window.lucide) {
        window.lucide.createIcons();
    }
}
```

#### Bước 3.3: Lắng nghe sự kiện Tìm kiếm và Lọc
* **Tìm kiếm theo từ khóa (Real-time)**:
```javascript
const inputTimKiem = document.getElementById('tim-kiem');
inputTimKiem.addEventListener('input', function(event) {
    filterState.tuKhoa = event.target.value;
    renderList(); // Tự động cập nhật danh sách khi người dùng gõ
});
```

* **Lọc theo trạng thái bên Sidebar**:
Lắng nghe sự kiện click trên các nút lọc ở thanh Sidebar:
```javascript
const navItems = document.querySelectorAll('.nav-filters .nav-item');

navItems.forEach(item => {
    item.addEventListener('click', function() {
        // Đổi class active hiển thị trên nút chọn
        navItems.forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');
        
        // Xác định kiểu lọc dựa vào text hoặc icon của nút bấm
        const text = item.querySelector('span').textContent;
        if (text === 'Chờ xử lý') {
            filterState.trangThai = 'pending';
        } else if (text === 'Đã hoàn thành') {
            filterState.trangThai = 'completed';
        } else {
            filterState.trangThai = 'all';
        }
        
        renderList();
    });
});
```

---



## 📝 Bài tập về nhà

1. Hãy tích hợp toàn bộ tính năng Toggle hoàn thành, Sửa công việc, Tìm kiếm và Lọc trạng thái vào file `main.js` của dự án của bạn.
2. Thực hiện thêm các nút lọc theo **Độ ưu tiên** (Cao, Trung bình, Thấp) ở phần Sidebar và lắng nghe sự kiện click để cập nhật `filterState.uuTien` tương ứng, giúp người dùng lọc chéo được cả trạng thái lẫn độ ưu tiên.
3. Khi click nút sửa công việc, làm thế nào để người dùng có thể "Hủy bỏ" hành động sửa (quay về chế độ thêm mới mà không cập nhật) bằng cách lập trình cho nút "Hủy bỏ" (`btn-secondary`) trên form.

---

## 🔗 Tài liệu tham khảo

- [MDN: Element.closest()](https://developer.mozilla.org/en-US/docs/Web/API/Element/closest)
- [MDN: HTMLElement.dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)
- [JavaScript.info: Array methods (Filter, Map, Find)](https://javascript.info/array-methods)
