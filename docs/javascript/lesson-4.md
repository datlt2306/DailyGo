# Buổi 4: Tính năng Thêm & Xóa công việc

**Loại buổi**: Thực hành  
**Thời lượng**: 120 phút  
**Dự án**: ZenTask (To-Do App) - Thêm mới và xóa công việc động

---

## 🎯 Mục tiêu học tập

Sau buổi học này, bạn sẽ có thể:

- ✅ Lắng nghe sự kiện submit của form để thu thập dữ liệu nhập vào
- ✅ Thực hiện validate (kiểm tra tính hợp lệ) dữ liệu form cơ bản trước khi xử lý
- ✅ Thêm phần tử mới vào mảng dữ liệu trạng thái (State) của ứng dụng
- ✅ Sử dụng kỹ thuật Event Delegation đã học để thực hiện chức năng Xóa công việc
- ✅ Tự động re-render (hiển thị lại) danh sách và cập nhật tiến độ tương ứng sau khi dữ liệu thay đổi

---

## 🧩 Task Project

### Task 1: Xử lý Form Submit & Thêm công việc mới (40 phút)

Chúng ta cần lắng nghe sự kiện gửi form (#form-cong-viec), lấy giá trị tên và mức độ ưu tiên của công việc, kiểm tra tính hợp lệ và thêm vào mảng `danhSachCongViec`.

#### Bước 1.1: Viết hàm kiểm tra tính hợp lệ (Validation)
```javascript
/**
 * Kiểm tra tên công việc có hợp lệ không
 * @param {string} ten - Tên công việc
 * @returns {boolean} true nếu hợp lệ, false nếu không
 */
function kiemTraTenCongViec(ten) {
    if (!ten || ten.trim().length === 0) {
        return false;
    }
    if (ten.trim().length < 3) {
        return false;
    }
    return true;
}
```

#### Bước 1.2: Viết hàm thêm công việc và kết nối với sự kiện Form
```javascript
// Lấy phần tử form
const formCongViec = document.getElementById('form-cong-viec');

formCongViec.addEventListener('submit', function(event) {
    // 1. Ngăn hành vi load lại trang mặc định của form
    event.preventDefault();
    
    // 2. Lấy dữ liệu từ các thẻ input/select
    const inputTen = document.getElementById('ten-cong-viec');
    const selectUuTien = document.getElementById('do-uu-tien');
    const textareaMoTa = document.getElementById('mo-ta');
    
    const ten = inputTen.value;
    const uuTien = selectUuTien.value === '1' ? 'high' : (selectUuTien.value === '2' ? 'medium' : 'low');
    const moTa = textareaMoTa.value;
    
    // 3. Validate dữ liệu
    if (!kiemTraTenCongViec(ten)) {
        alert('Tên công việc không hợp lệ (Không được rỗng và phải từ 3 ký tự trở lên)!');
        return;
    }
    
    // 4. Tạo đối tượng công việc mới
    const congViecMoi = {
        id: Date.now(), // Sử dụng timestamp làm ID duy nhất
        ten: ten.trim(),
        moTa: moTa.trim(),
        uuTien: uuTien,
        hoanThanh: false
    };
    
    // 5. Thêm đối tượng mới vào đầu mảng (để hiển thị lên trên cùng)
    danhSachCongViec.unshift(congViecMoi);
    
    // 6. Cập nhật giao diện và tiến độ
    renderList();
    capNhatTienDo();
    
    // 7. Reset form về trạng thái trống
    formCongViec.reset();
});
```

---

### Task 2: Áp dụng Event Delegation để Xóa công việc (40 phút)

Chúng ta sẽ lắng nghe sự kiện click trên thẻ cha `#danh-sach-cong-viec`. Khi người dùng click vào nút xóa (`.btn-delete`), ta sẽ lấy `id` của công việc từ thuộc tính `data-id` của thẻ `<li>`, thực hiện xóa khỏi mảng và render lại giao diện.

```javascript
const listContainer = document.getElementById('danh-sach-cong-viec');

listContainer.addEventListener('click', function(event) {
    // Tìm xem click có trúng nút xóa (hoặc icon bên trong nút xóa) không
    const nutXoa = event.target.closest('.btn-delete');
    
    if (nutXoa) {
        // Tìm thẻ task-item (li) cha gần nhất để lấy data-id
        const taskItem = nutXoa.closest('.task-item');
        const idCanXoa = parseInt(taskItem.dataset.id);
        
        // Xác nhận trước khi xóa
        const xacNhan = confirm('Bạn có chắc chắn muốn xóa công việc này không?');
        if (xacNhan) {
            xoaCongViec(idCanXoa);
        }
    }
});

/**
 * Xóa công việc khỏi mảng theo ID và render lại
 * @param {number} id - ID của công việc cần xóa
 */
function xoaCongViec(id) {
    // Lọc mảng để giữ lại các công việc có ID khác với ID cần xóa
    danhSachCongViec = danhSachCongViec.filter(cv => cv.id !== id);
    
    // Render lại giao diện và cập nhật tiến độ
    renderList();
    capNhatTienDo();
}
```

---

### Task 3: Hiển thị thông báo Toast đơn giản khi hoàn thành hành động (20 phút)

Để cải thiện trải nghiệm người dùng (UX), hãy viết một hàm hiển thị thông báo góc màn hình (Toast Notification) khi thêm hoặc xóa thành công.

1. Bổ sung cấu trúc HTML của Toast vào cuối file `index.html`:
   ```html
   <div id="toast-container" style="position: fixed; bottom: 20px; right: 20px; z-index: 1000;"></div>
   ```
2. Viết hàm hiển thị thông báo trong `main.js`:
   ```javascript
   /**
    * Hiển thị thông báo Toast
    * @param {string} message - Nội dung thông báo
    * @param {string} type - Loại thông báo ('success', 'error', 'info')
    */
   function showToast(message, type = 'success') {
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
       
       // Tự động ẩn sau 3 giây
       setTimeout(() => {
           toast.style.opacity = '0';
           setTimeout(() => toast.remove(), 300);
       }, 3000);
   }
   ```
3. Gọi hàm `showToast` trong xử lý thêm/xóa:
   * Khi thêm thành công: `showToast('Đã thêm công việc thành công!', 'success');`
   * Khi xóa thành công: `showToast('Đã xóa công việc khỏi danh sách.', 'info');`

---



## 📝 Bài tập về nhà

1. Tích hợp hoàn thiện tính năng Thêm và Xóa công việc vào dự án cá nhân, đảm bảo giao diện ZenTask tự động cập nhật khi bạn thêm hoặc xóa.
2. Thử nghiệm bổ sung kiểm tra điều kiện validation: Không cho phép thêm công việc nếu tên công việc trùng lặp với tên của một công việc đã có sẵn trong danh sách (sử dụng phương thức mảng `.some()`).
3. Tích hợp Toast notification và tùy biến giao diện của nó bằng CSS Class thay vì viết CSS Inline trực tiếp trong JS.

---

## 🔗 Tài liệu tham khảo

- [JavaScript.info: Array methods](https://javascript.info/array-methods)
- [MDN: Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [MDN: Array.prototype.unshift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)
