# Buổi 12: Đồng bộ CRUD với API

**Loại buổi**: Thực hành  
**Thời lượng**: 120 phút  
**Dự án**: ZenTask (To-Do App) - Đồng bộ hóa toàn bộ chức năng Thêm, Sửa, Xóa và Check hoàn thành lên JSON Server

---

## 🎯 Mục tiêu học tập

Sau buổi học này, bạn sẽ có thể:

- ✅ Gửi yêu cầu HTTP POST để lưu thêm mới công việc lên API Server
- ✅ Gửi yêu cầu HTTP PATCH để cập nhật trạng thái hoàn thành hoặc nội dung sửa đổi lên API Server
- ✅ Gửi yêu cầu HTTP DELETE để xóa công việc khỏi API Server
- ✅ Kết hợp nhuần nhuyễn hai chiến lược UI: Pessimistic cho các thao tác nhạy cảm (Xóa, Thêm) và Optimistic cho thao tác nhanh (Toggle hoàn thành)

---

## 🧩 Task Project

Trong buổi này, chúng ta sẽ viết lại toàn bộ các hàm thao tác dữ liệu của `main.js` để kết nối trực tiếp với API Server. Hãy đảm bảo `json-server` đang chạy tại `http://localhost:3000`.

### Task 1: Đồng bộ tính năng Thêm công việc (POST) (30 phút)

Khi thêm công việc, ta sẽ gửi một request POST chứa thông tin công việc mới lên server. Chúng ta áp dụng chiến lược **Pessimistic UI**: Đợi server lưu thành công -> lấy đối tượng phản hồi từ server -> thêm vào State -> vẽ lại giao diện.

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
    
    if (!kiemTraTenCongViec(ten)) {
        alert('Tên công việc không hợp lệ!');
        return;
    }
    
    toggleLoading(true);
    
    try {
        if (dangSuaId !== null) {
            // Xử lý CẬP NHẬT (SẼ VIẾT Ở TASK 2)
            await capNhatCongViecAPI(dangSuaId, ten, moTa, uuTien);
        } else {
            // Xử lý THÊM MỚI (POST)
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ten: ten.trim(),
                    moTa: moTa.trim(),
                    uuTien: uuTien,
                    hoanThanh: false
                })
            });
            
            if (!response.ok) throw new Error('Không thể thêm công việc lên API');
            
            // Nhận đối tượng công việc đã có kèm ID do server tự sinh
            const newTodo = await response.json();
            
            // Cập nhật State
            danhSachCongViec.unshift(newTodo);
            showToast('Đã thêm công việc thành công!', 'success');
        }
        
        renderList();
        capNhatTienDo();
        formCongViec.reset();
        
    } catch (error) {
        console.error('Lỗi khi submit form:', error);
        showToast('Đã xảy ra lỗi kết nối!', 'error');
    } finally {
        toggleLoading(false);
    }
});
```

---

### Task 2: Đồng bộ tính năng Sửa công việc (PATCH) (35 phút)

Khi chỉnh sửa nội dung, ta sẽ gửi một PATCH request lên ID công việc tương ứng để cập nhật các trường thông tin thay đổi.

```javascript
/**
 * Gửi PATCH cập nhật thông tin công việc lên API
 */
async function capNhatCongViecAPI(id, ten, moTa, uuTien) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ten: ten.trim(),
            moTa: moTa.trim(),
            uuTien: uuTien
        })
    });
    
    if (!response.ok) throw new Error('Lỗi cập nhật API');
    
    const updatedTodo = await response.json();
    
    // Cập nhật State cục bộ
    danhSachCongViec = danhSachCongViec.map(cv => cv.id === id ? updatedTodo : cv);
    
    // Reset trạng thái sửa
    dangSuaId = null;
    document.querySelector('#form-cong-viec button[type="submit"] span').textContent = 'Thêm công việc';
    showToast('Đã lưu chỉnh sửa!', 'success');
}
```

---

### Task 3: Đồng bộ tính năng Check Hoàn thành (Optimistic PATCH) (25 phút)

Áp dụng chiến lược **Optimistic UI** cho nút Checkbox. Khi click sẽ toggle ngay lập tức, rồi gửi PATCH chạy ngầm, nếu lỗi thì rollback dữ liệu.

```javascript
// Thay đổi lại hàm toggleHoanThanh trong main.js
async function toggleHoanThanh(id) {
    const index = danhSachCongViec.findIndex(cv => cv.id === id);
    if (index === -1) return;
    
    const statusCu = danhSachCongViec[index].hoanThanh;
    
    // 1. Cập nhật UI ngay lập tức
    danhSachCongViec[index].hoanThanh = !statusCu;
    renderList();
    capNhatTienDo();
    
    // 2. Gửi PATCH ngầm
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                hoanThanh: !statusCu
            })
        });
        
        if (!response.ok) throw new Error('PATCH Error');
        
    } catch (error) {
        console.error('Lỗi khi toggle. Đang rollback...', error);
        showToast('Không thể kết nối! Khôi phục trạng thái cũ.', 'error');
        
        // Rollback
        danhSachCongViec[index].hoanThanh = statusCu;
        renderList();
        capNhatTienDo();
    }
}
```

---

### Task 4: Đồng bộ tính năng Xóa công việc (DELETE) (30 phút)

Chúng ta áp dụng **Pessimistic UI** cho tính năng xóa: Hiện prompt xác nhận -> gửi DELETE request -> chờ server xác nhận xóa thành công -> lọc State -> render lại.

```javascript
/**
 * Gọi API DELETE để xóa công việc khỏi JSON Server
 * @param {number} id - ID công việc cần xóa
 */
async function xoaCongViec(id) {
    toggleLoading(true);
    
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        });
        
        if (!response.ok) throw new Error('DELETE Error');
        
        // Cập nhật State sau khi server xóa thành công
        danhSachCongViec = danhSachCongViec.filter(cv => cv.id !== id);
        
        renderList();
        capNhatTienDo();
        showToast('Đã xóa công việc khỏi danh sách.', 'info');
        
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

1. Hãy tích hợp hoàn thiện cả 4 thao tác API (POST, PATCH, DELETE, Toggle) vào ứng dụng ZenTask của bạn.
2. Mở file `db.json` trên VS Code song song với màn hình trình duyệt. Hãy thực hiện thêm, sửa, xóa trên giao diện và quan sát xem nội dung file `db.json` có tự động thay đổi theo thời gian thực hay không.
3. Thử tạo độ trễ mạng giả lập trên JSON Server bằng cách chạy lệnh: `json-server --watch db.json --delay 2000` (delay 2 giây). Hãy click toggle checkbox để kiểm tra xem trải nghiệm Optimistic UI mượt mà thế nào, và click nút xóa để thấy Pessimistic UI hiển thị loading ra sao.

---

## 🔗 Tài liệu tham khảo

- [JSON Server Options](https://github.com/typicode/json-server#options)
- [MDN: Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
