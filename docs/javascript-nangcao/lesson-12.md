# Buổi 12: HTTP Methods nâng cao & Đồng bộ CRUD với API
- **Dự án**: ZenTask (To-Do App) - Đồng bộ hóa toàn bộ chức năng Thêm, Sửa, Xóa và Check hoàn thành lên JSON Server

---

## 🎯 Mục tiêu buổi học

> **Thầy mong muốn sau buổi học này, các em sẽ đạt được:**

> **Thầy mong muốn sau buổi học này, các em sẽ đạt được:**
Sau buổi học này, các em sẽ có thể:
1. ✅ Phân biệt rõ sự khác biệt giữa hai phương thức cập nhật dữ liệu: `PUT` và `PATCH`
2. ✅ Giải thích được hai chiến lược thiết kế giao diện: **Pessimistic UI** (Giao diện bi quan) và **Optimistic UI** (Giao diện lạc quan)
3. ✅ Gửi yêu cầu HTTP POST, PATCH, và DELETE sử dụng Fetch API để lưu trữ, sửa đổi và xóa dữ liệu thực tế trên Mock Server
4. ✅ Thiết lập cơ chế **Rollback** (Khôi phục trạng thái cũ) để xử lý khi dữ liệu gửi ngầm gặp lỗi kết nối

## 🧠 Cơ sở lý thuyết

### 1. So sánh HTTP Methods cập nhật: PUT vs PATCH

Khi muốn cập nhật một công việc đã có trên JSON Server, Fetch API hỗ trợ hai phương thức:

- **PUT**: Ghi đè toàn bộ bản ghi cũ bằng một bản ghi mới được gửi lên. Nếu thiếu trường nào, trường đó sẽ bị xóa sạch hoặc thiết lập về giá trị mặc định của server.
- **PATCH**: Chỉ sửa đổi các trường cụ thể được chỉ định trong body của request. Các trường khác giữ nguyên (Khuyên dùng cho chỉnh sửa nhỏ).

```javascript
// Ví dụ PATCH cập nhật trạng thái hoàn thành
fetch('http://localhost:3000/todos/1', {
  method: 'PATCH',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ hoanThanh: true }) // Chỉ cập nhật hoanThanh, tên/mô tả giữ nguyên
});
```

### 2. Chiến lược trải nghiệm người dùng: Pessimistic vs Optimistic UI

- **Pessimistic UI (Giao diện Bi quan)**: Click hành động -> Gửi API lên server -> Chờ server thành công -> Cập nhật giao diện. (An toàn nhưng bị trễ nếu mạng chậm, dùng cho tác vụ quan trọng như Thêm/Xóa).
- **Optimistic UI (Giao diện Lạc quan)**: Click hành động -> Lập tức cập nhật giao diện lập tức trên màn hình -> Đồng thời gửi API chạy ngầm -> Nếu API thất bại thì khôi phục lại trạng thái cũ (Rollback). (Mượt mà tức thì, dùng cho tác vụ nhẹ như Like hoặc Checkbox).

---

## 🧩 Task Project

Hãy khởi chạy `json-server` tại cổng 3000 và tiến hành đồng bộ các tính năng CRUD.

### Task 1: Đồng bộ tính năng Thêm công việc (POST) (30 phút)

Khi thêm công việc, ta gửi request POST chứa thông tin công việc mới lên server theo chiến lược **Pessimistic UI**:

```javascript
// Cập nhật sự kiện submit form trong main.js
formCongViec.addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const inputTen = document.getElementById('ten-cong-viec');
    const selectUuTien = document.getElementById('do-uu-tien');
    const textareaMoTa = document.getElementById('mo-ta');
    
    const ten = inputTen.value;
    const uuTien = selectUuTien.value === '1' ? 'high' : (selectUuTien.value === '2' ? 'medium' : 'low');
    const moTa = textareaMoTa.value;
    
    if (!ten.trim()) {
        alert('Tên công việc không được để trống!');
        return;
    }
    
    toggleLoading(true);
    
    try {
        if (dangSuaId !== null) {
            // Sửa công việc (Task 2)
            await capNhatCongViecAPI(dangSuaId, ten, moTa, uuTien);
        } else {
            // Thêm mới công việc (POST)
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ten: ten.trim(),
                    moTa: moTa.trim(),
                    uuTien: uuTien,
                    hoanThanh: false
                })
            });
            
            if (!response.ok) throw new Error('Không thể thêm công việc');
            
            const newTodo = await response.json();
            danhSachCongViec.unshift(newTodo); // Cập nhật State
            showToast('Đã thêm công việc thành công!', 'success');
        }
        
        renderList();
        capNhatTienDo();
        formCongViec.reset();
        
    } catch (error) {
        console.error('Lỗi thêm mới:', error);
        showToast('Kết nối thất bại!', 'error');
    } finally {
        toggleLoading(false);
    }
});
```

---

### Task 2: Đồng bộ tính năng Sửa nội dung (PATCH) (30 phút)

Gửi một PATCH request lên ID công việc tương ứng để cập nhật các trường thông tin thay đổi:

```javascript
/**
 * Gửi PATCH cập nhật thông tin công việc lên API
 */
async function capNhatCongViecAPI(id, ten, moTa, uuTien) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            ten: ten.trim(),
            moTa: moTa.trim(),
            uuTien: uuTien
        })
    });
    
    if (!response.ok) throw new Error('Lỗi cập nhật API');
    
    const updatedTodo = await response.json();
    danhSachCongViec = danhSachCongViec.map(cv => cv.id === id ? updatedTodo : cv); // Cập nhật State
    
    dangSuaId = null;
    document.querySelector('#form-cong-viec button[type="submit"] span').textContent = 'Thêm công việc';
    showToast('Đã lưu chỉnh sửa!', 'success');
}
```

---

### Task 3: Đồng bộ trạng thái Check Hoàn thành (Optimistic PATCH) (30 phút)

Áp dụng chiến lược **Optimistic UI** cho nút Checkbox. Khi click sẽ toggle ngay lập tức, rồi gửi PATCH chạy ngầm, nếu lỗi thì rollback dữ liệu.

```javascript
async function toggleHoanThanh(id) {
    const index = danhSachCongViec.findIndex(cv => cv.id === id);
    if (index === -1) return;
    
    const statusCu = danhSachCongViec[index].hoanThanh;
    
    // 1. Cập nhật UI ngay lập tức
    danhSachCongViec[index].hoanThanh = !statusCu;
    renderList();
    capNhatTienDo();
    
    // 2. Gửi PATCH chạy ngầm dưới nền
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ hoanThanh: !statusCu })
        });
        
        if (!response.ok) throw new Error('PATCH Error');
        
    } catch (error) {
        console.error('Lỗi khi toggle. Đang rollback...', error);
        showToast('Kết nối mạng lỗi! Đang khôi phục...', 'error');
        
        // 3. Rollback dữ liệu nếu gặp lỗi mạng
        danhSachCongViec[index].hoanThanh = statusCu;
        renderList();
        capNhatTienDo();
    }
}
```

---

### Task 4: Đồng bộ tính năng Xóa công việc (DELETE) (30 phút)

Thầy trò mình áp dụng **Pessimistic UI** cho tính năng xóa: Hiện prompt xác nhận -> gửi DELETE request -> chờ server xác nhận xóa thành công -> lọc State -> render lại.

```javascript
/**
 * Gọi API DELETE để xóa công việc khỏi JSON Server
 */
async function xoaCongViec(id) {
    if (!confirm('Bạn muốn xóa công việc này?')) return;
    
    toggleLoading(true);
    
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        });
        
        if (!response.ok) throw new Error('DELETE Error');
        
        danhSachCongViec = danhSachCongViec.filter(cv => cv.id !== id); // Lọc State
        renderList();
        capNhatTienDo();
        showToast('Đã xóa công việc.', 'info');
        
    } catch (error) {
        console.error('Lỗi khi xóa:', error);
        showToast('Không thể xóa! Thử lại sau.', 'error');
    } finally {
        toggleLoading(false);
    }
}
```

---

## 📝 Bài tập về nhà

1. Các em các em các em hãy thực hiện tích hợp hoàn thiện cả 4 thao tác API (POST, PATCH, DELETE, Toggle) vào ứng dụng ZenTask của các em.
2. Thử tạo độ trễ mạng giả lập trên JSON Server bằng cách chạy lệnh: `json-server --watch db.json --delay 2000` (delay 2 giây). Hãy click toggle checkbox để kiểm tra xem trải nghiệm Optimistic UI mượt mà thế nào, và click nút xóa để thấy Pessimistic UI hiển thị loading ra sao.

---

## 🔗 Tài liệu tham khảo

- [JSON Server Options](https://github.com/typicode/json-server#options)
- [MDN: Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
