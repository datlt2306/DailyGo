# Buổi 11: HTTP Methods nâng cao & Tối ưu UI

**Loại buổi**: Lý thuyết  
**Thời lượng**: 120 phút  
**Dự án**: ZenTask (To-Do App) - Nghiên cứu cơ chế đồng bộ hóa dữ liệu tối ưu

---

## 🎯 Mục tiêu học tập

Sau buổi học này, bạn sẽ có thể:

- ✅ Phân biệt rõ sự khác biệt giữa hai phương thức cập nhật dữ liệu: `PUT` và `PATCH`
- ✅ Giải thích được hai chiến lược thiết kế giao diện: **Pessimistic UI** (Giao diện bi quan) và **Optimistic UI** (Giao diện lạc quan)
- ✅ Đánh giá và lựa chọn giải pháp tối ưu UI phù hợp cho từng tính năng nghiệp vụ của ứng dụng
- ✅ Hiểu cách lập trình Rollback (khôi phục trạng thái cũ) khi áp dụng Optimistic UI gặp lỗi kết nối

---

## 🧠 Nội dung chính

### 1. So sánh HTTP Methods cập nhật: PUT vs PATCH

Khi muốn cập nhật một công việc đã có trên JSON Server, Fetch API hỗ trợ hai phương thức:

#### 1.1. PUT (Thay thế toàn bộ bản ghi)
* Định nghĩa: Ghi đè hoàn toàn bản ghi cũ bằng một bản ghi mới được gửi lên.
* Cơ chế: Server sẽ xóa bản ghi cũ tại ID đó đi, rồi tạo lại bản ghi mới với dữ liệu bạn gửi. Nếu bạn thiếu một trường thông tin, trường đó sẽ bị mất hoặc thiết lập về giá trị mặc định của server.
* Ví dụ gửi lên:
```javascript
// PUT http://localhost:3000/todos/1
// Dữ liệu gửi lên:
{
    "ten": "Tên mới"
    // Trường "moTa", "uuTien", "hoanThanh" không gửi lên sẽ bị biến mất khỏi db.json!
}
```

#### 1.2. PATCH (Cập nhật một phần bản ghi - Khuyến nghị cho chỉnh sửa nhỏ)
* Định nghĩa: Chỉ sửa đổi các trường cụ thể được chỉ định trong dữ liệu gửi lên. Các trường khác giữ nguyên.
* Cơ chế: Server tìm bản ghi cũ theo ID và chỉ sửa đổi (merge) các trường trùng khớp.
* Ví dụ gửi lên:
```javascript
// PATCH http://localhost:3000/todos/1
// Dữ liệu gửi lên:
{
    "hoanThanh": true // Chỉ cập nhật trường này, các trường khác giữ nguyên
}
```

---

### 2. Hai chiến lược thiết kế trải nghiệm người dùng: Pessimistic vs Optimistic UI

Khi người dùng thực hiện một hành động (ví dụ: bấm checkbox hoàn thành công việc), ứng dụng cần gửi API lên server và cập nhật giao diện. Ta có hai cách thiết kế:

#### 2.1. Pessimistic UI (Giao diện Bi quan - Chắc chắn mới làm)
Là chiến lược truyền thống: Ứng dụng gửi API lên server -> Chờ server xử lý thành công và trả về phản hồi -> Cập nhật giao diện.
* **Quy trình**:
  ```mermaid
  sequenceDiagram
      Client->>Server: Gửi PATCH cập nhật hoanThanh
      Note over Server: Server cập nhật db.json...
      Server-->>Client: Trả về 200 OK (Thành công)
      Note over Client: Client thay đổi giao diện (đánh dấu checked)
  ```
* **Ưu điểm**: Giao diện luôn phản ánh chính xác 100% dữ liệu thực tế trên server. Không sợ bị lệch thông tin.
* **Nhược điểm**: Nếu mạng chậm, người dùng sẽ cảm thấy giao diện bị trễ (bấm vào checkbox phải mất 1-2 giây mới thấy nó được check), trải nghiệm kém mượt mà.
* **Ứng dụng**: Dành cho các tác vụ quan trọng cần tính chính xác cao (Thanh toán tiền, rút tiền, đổi mật khẩu).

#### 2.2. Optimistic UI (Giao diện Lạc quan - Cứ tin là thành công)
Là chiến lược hiện đại: Ứng dụng lập tức thay đổi giao diện ngay khi người dùng click -> Đồng thời gửi API chạy ngầm dưới nền -> Nếu server phản hồi thành công thì giữ nguyên giao diện, nếu server báo lỗi thì khôi phục giao diện về trạng thái ban đầu (Rollback).
* **Quy trình**:
  ```mermaid
  sequenceDiagram
      Note over Client: Client lập tức thay đổi giao diện (checked)
      Client->>Server: Gửi PATCH chạy ngầm dưới nền
      Note over Server: Server xử lý...
      alt Thành công
          Server-->>Client: 200 OK (Mọi thứ giữ nguyên)
      else Thất bại (Lỗi kết nối)
          Server-->>Client: 500 Error hoặc Timeout
          Note over Client: Client rollback (bỏ checked, báo lỗi)
      end
  ```
* **Ưu điểm**: Trải nghiệm cực kỳ mượt mà, tức thời (ngay lập tức thấy thay đổi trên UI mà không cần chờ đợi mạng).
* **Nhược điểm**: Phải lập trình thêm phần khôi phục dữ liệu (Rollback) phức tạp nếu API thất bại.
* **Ứng dụng**: Phù hợp cho các thao tác nhanh, không quá nhạy cảm về bảo mật tài chính (Like bài viết, Toggle checkbox Todo, Thêm bình luận).

---

## 💻 Ví dụ minh họa: Viết thử hàm Toggle trạng thái theo cơ chế Optimistic UI

Dưới đây là đoạn mã giả lập tính năng toggle checkbox công việc sử dụng chiến lược **Optimistic UI**:

```javascript
/**
 * Toggle trạng thái hoàn thành với chiến lược Optimistic UI
 * @param {number} id - ID của công việc
 */
async function toggleTaskOptimistic(id) {
    // 1. Tìm công việc hiện tại trong State
    const taskIndex = danhSachCongViec.findIndex(t => t.id === id);
    if (taskIndex === -1) return;
    
    // Ghi nhớ trạng thái cũ để phòng trường hợp lỗi cần rollback
    const taskGoc = danhSachCongViec[taskIndex];
    const trangThaiHoanThanhCu = taskGoc.hoanThanh;
    
    // 2. CẬP NHẬT GIAO DIỆN NGAY LẬP TỨC (Lạc quan là thành công)
    danhSachCongViec[taskIndex].hoanThanh = !trangThaiHoanThanhCu;
    renderList();
    capNhatTienDo();
    
    // 3. Gửi API chạy ngầm
    try {
        const response = await fetch(`http://localhost:3000/todos/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                hoanThanh: !trangThaiHoanThanhCu
            })
        });
        
        if (!response.ok) {
            throw new Error('API Server từ chối cập nhật');
        }
        // Thành công: không cần làm gì thêm vì UI đã được cập nhật trước đó
        
    } catch (error) {
        console.warn('Lỗi kết nối API. Thực hiện Rollback UI về trạng thái cũ!', error.message);
        showToast('Kết nối thất bại. Đang khôi phục lại trạng thái...', 'error');
        
        // 4. ROLLBACK UI: Khôi phục lại dữ liệu cũ trong State và vẽ lại
        danhSachCongViec[taskIndex].hoanThanh = trangThaiHoanThanhCu;
        renderList();
        capNhatTienDo();
    }
}
```

---



## 📝 Bài tập về nhà

1. So sánh chi tiết bằng văn bản sự khác biệt khi áp dụng Pessimistic UI và Optimistic UI cho tính năng "Tăng số lượng sản phẩm trong giỏ hàng".
2. Tìm hiểu tại sao trong các ứng dụng mạng xã hội lớn như Facebook, Instagram, Twitter, các nút Like/Tym hay nút Bookmark luôn được thiết kế theo mô hình Optimistic UI.

---

## 🔗 Tài liệu tham khảo

- [Smashing Magazine: Optimistic UI Patterns](https://www.smashingmagazine.com/2016/11/true-lies-of-optimistic-ui/)
- [MDN: HTTP methods PATCH vs PUT](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
- [LogRocket: Understanding Optimistic UI](https://blog.logrocket.com/understanding-optimistic-ui-react/)
