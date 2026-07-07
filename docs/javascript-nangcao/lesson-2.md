# Buổi 2: Tích hợp giao diện mẫu & Render danh sách
**Dự án**: ZenTask (To-Do App) - Tích hợp giao diện và hiển thị dữ liệu động

---

## 🎯 Mục tiêu buổi học

> **Thầy mong muốn sau buổi học này, các em sẽ đạt được:**

> **Thầy mong muốn sau buổi học này, các em sẽ đạt được:**
Sau buổi học này, các em sẽ có thể:
1. ✅ Tích hợp thành công giao diện mẫu ZenTask vào dự án của mình
2. ✅ Thiết lập cấu trúc lưu trữ dữ liệu dạng mảng đối tượng (Mock Data)
3. ✅ Viết hàm duyệt mảng dữ liệu để render danh sách công việc động ra giao diện HTML

## 🧩 Task Project

### Task 1: Thiết lập thư mục dự án và tích hợp giao diện (20 phút)

1. Tạo một thư mục dự án mới tên là `todo-app`.
2. Tạo các tệp tin `index.html` và `styles.css` trong thư mục `todo-app`.
3. Sao chép toàn bộ nội dung mã nguồn của giao diện mẫu ZenTask:
   * HTML: [index.html](https://letrongdat.vercel.app/javascript/templates/index.html)
   * CSS: [styles.css](https://letrongdat.vercel.app/javascript/templates/styles.css)
4. Tạo tệp tin `main.js` trong thư mục dự án. Nhúng `main.js` vào cuối tệp `index.html` ngay trước thẻ đóng `</body>`:
   ```html
   <script src="main.js"></script>
   ```

---

### Task 2: Tạo cấu trúc dữ liệu giả lập (Mock Data) (20 phút)

Trong tệp `main.js`, các em các em hãy khai báo một mảng các đối tượng chứa thông tin công việc giả lập. Mỗi công việc cần có các thuộc tính: `id` (số duy nhất), `ten` (tên công việc), `moTa` (mô tả), `uuTien` (mức độ: 'high', 'medium', 'low'), và `hoanThanh` (trạng thái: `true` hoặc `false`).

```javascript
// Mảng lưu trữ trạng thái danh sách công việc (State)
let danhSachCongViec = [
    {
        id: 1,
        ten: "Học JavaScript nâng cao",
        moTa: "Nắm vững các khái niệm DOM Selection và Manipulation.",
        uuTien: "high",
        hoanThanh: false
    },
    {
        id: 2,
        ten: "Xây dựng giao diện CSS cho dự án",
        moTa: "Hoàn thiện CSS Glassmorphism cho ZenTask.",
        uuTien: "medium",
        hoanThanh: true
    },
    {
        id: 3,
        ten: "Cài đặt môi trường Node.js",
        moTa: "Cài đặt git, npm và các thư viện cần thiết.",
        uuTien: "low",
        hoanThanh: true
    }
];
```

---

### Task 3: Viết hàm Render danh sách động ra HTML (50 phút)

Thầy trò mình cần tạo một hàm `renderList()` để tự động duyệt qua mảng `danhSachCongViec`, tạo mã HTML tương ứng cho từng công việc và cập nhật vào thẻ `<ul id="danh-sach-cong-viec">`.

```javascript
/**
 * Duyệt mảng danh sách công việc và hiển thị ra UI
 */
function renderList() {
    const listContainer = document.getElementById('danh-sach-cong-viec');
    
    // Xóa sạch danh sách cũ trước khi render lại
    listContainer.innerHTML = '';
    
    // Nếu danh sách trống, hiển thị thông báo trống
    if (danhSachCongViec.length === 0) {
        listContainer.innerHTML = '<li class="empty-state"><p>Không có công việc nào!</p></li>';
        return;
    }
    
    // Duyệt qua từng công việc để xây dựng HTML
    danhSachCongViec.forEach(congViec => {
        const item = document.createElement('li');
        item.className = `task-item ${congViec.hoanThanh ? 'completed' : ''}`;
        item.dataset.id = congViec.id;
        item.dataset.priority = congViec.uuTien;
        
        // Chuẩn bị nhãn độ ưu tiên hiển thị tương ứng
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
    
    // Kích hoạt lại Lucide Icons để hiển thị các biểu tượng vừa sinh động
    if (window.lucide) {
        window.lucide.createIcons();
    }
}

// Gọi hàm render lần đầu khi tải trang
renderList();
```

---

### Task 4: Viết hàm cập nhật Tiến độ công việc (30 phút)

Các em các em các em hãy viết thêm một hàm để tính toán tiến độ hoàn thành dựa trên mảng `danhSachCongViec` và cập nhật thông số lên thanh tiến độ của thanh Sidebar.

```javascript
/**
 * Tính toán và cập nhật tiến độ công việc lên UI
 */
function capNhatTienDo() {
    const total = danhSachCongViec.length;
    const completed = danhSachCongViec.filter(cv => cv.hoanThanh).length;
    
    // Tính phần trăm
    const phanTram = total === 0 ? 0 : Math.round((completed / total) * 100);
    
    // Cập nhật số liệu text
    const textTienDo = document.querySelector('.stats-header strong');
    if (textTienDo) textTienDo.textContent = `${phanTram}%`;
    
    const descTienDo = document.querySelector('.stats-desc');
    if (descTienDo) {
        descTienDo.textContent = `Hoàn thành ${completed} trong số ${total} công việc của các em.`;
    }
    
    // Cập nhật thanh tiến độ
    const fillTienDo = document.querySelector('.progress-bar-fill');
    if (fillTienDo) {
        fillTienDo.style.width = `${phanTram}%`;
    }
}

// Gọi cập nhật tiến độ sau khi render danh sách
capNhatTienDo();
```

---

## 📝 Bài tập về nhà

1. Hãy thêm 2 công việc nữa vào mảng `danhSachCongViec` trong file `main.js` của các em và kiểm tra xem giao diện có tự động hiển thị thêm khi tải lại trang không.
2. Đọc hiểu đoạn mã `capNhatTienDo()` và thử đổi trạng thái `hoanThanh` của một công việc trong mảng để kiểm tra xem phần trăm tiến độ có tự động tính toán lại khi tải lại trang không.

---

## 🔗 Tài liệu tham khảo

- [JavaScript.info: Modifying the document](https://javascript.info/modifying-document)
