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

#### 1. So sánh cú pháp PUT và PATCH

::: code-group
```javascript [Cập nhật một phần (PATCH)]
// PATCH chỉ gửi các trường cần sửa đổi lên server.
// Các thuộc tính khác trong db.json được giữ nguyên vẹn.
fetch('http://localhost:3000/todos/1', {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        hoanThanh: true // Chỉ thay đổi duy nhất trường này
    })
});
```

```javascript [Ghi đè toàn bộ (PUT)]
// PUT gửi toàn bộ bản ghi mới để ghi đè bản ghi cũ.
// Nếu thiếu thuộc tính (như moTa, uuTien), chúng sẽ bị xóa khỏi db.json!
fetch('http://localhost:3000/todos/1', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        ten: "Tên mới",
        moTa: "Mô tả cũ",
        uuTien: "Cao",
        hoanThanh: true
    })
});
```
:::

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

## 💻 Ví dụ minh họa: So sánh Code Toggle Trạng thái

Dưới đây là so sánh mã nguồn triển khai cùng tính năng checkbox hoàn thành công việc theo 2 chiến lược thiết kế:

::: code-group
```javascript [Cách 1: Optimistic UI (Lạc quan - Khuyên dùng cho checkbox)]
/**
 * Cập nhật giao diện lập tức, gửi API chạy ngầm, rollback nếu lỗi
 */
async function toggleTaskOptimistic(id) {
    // 1. Tìm công việc hiện tại trong State
    const taskIndex = danhSachCongViec.findIndex(t => t.id === id);
    if (taskIndex === -1) return;
    
    // Ghi nhớ trạng thái cũ để phòng trường hợp lỗi cần rollback
    const taskGoc = danhSachCongViec[taskIndex];
    const trangThaiHoanThanhCu = taskGoc.hoanThanh;
    
    // 2. CẬP NHẬT GIAO DIỆN NGAY LẬP TỨC
    danhSachCongViec[taskIndex].hoanThanh = !trangThaiHoanThanhCu;
    renderList();
    capNhatTienDo();
    
    // 3. Gửi API chạy ngầm dưới nền
    try {
        const response = await fetch(`http://localhost:3000/todos/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ hoanThanh: !trangThaiHoanThanhCu })
        });
        
        if (!response.ok) throw new Error('API lỗi');
        
    } catch (error) {
        console.warn('Lỗi API. Tiến hành Rollback UI...', error.message);
        
        // 4. ROLLBACK UI: Trả về trạng thái cũ nếu API gặp sự cố
        danhSachCongViec[taskIndex].hoanThanh = trangThaiHoanThanhCu;
        renderList();
        capNhatTienDo();
        alert('Không thể cập nhật trạng thái. Vui lòng thử lại!');
    }
}
```

```javascript [Cách 2: Pessimistic UI (Bi quan - Chờ API phản hồi)]
/**
 * Chờ API thành công mới cập nhật giao diện
 */
async function toggleTaskPessimistic(id) {
    const taskIndex = danhSachCongViec.findIndex(t => t.id === id);
    if (taskIndex === -1) return;
    
    const taskGoc = danhSachCongViec[taskIndex];
    const trangThaiHoanThanhCu = taskGoc.hoanThanh;
    
    // Bật hiệu ứng loading (nếu có)
    showLoadingSpinner(true);
    
    try {
        const response = await fetch(`http://localhost:3000/todos/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ hoanThanh: !trangThaiHoanThanhCu })
        });
        
        if (!response.ok) throw new Error('API lỗi');
        
        // CẬP NHẬT GIAO DIỆN SAU KHI SERVER TRẢ VỀ THÀNH CÔNG
        danhSachCongViec[taskIndex].hoanThanh = !trangThaiHoanThanhCu;
        renderList();
        capNhatTienDo();
        
    } catch (error) {
        alert('Cập nhật thất bại: ' + error.message);
    } finally {
        showLoadingSpinner(false);
    }
}
```
:::

---



## 📝 Bài tập về nhà

1. So sánh chi tiết bằng văn bản sự khác biệt khi áp dụng Pessimistic UI và Optimistic UI cho tính năng "Tăng số lượng sản phẩm trong giỏ hàng".
2. Tìm hiểu tại sao trong các ứng dụng mạng xã hội lớn như Facebook, Instagram, Twitter, các nút Like/Tym hay nút Bookmark luôn được thiết kế theo mô hình Optimistic UI.

<details>
<summary><b>💡 Gợi ý / Hướng dẫn thực hành từng bước</b></summary>

### Yêu cầu 1: So sánh Pessimistic UI vs Optimistic UI (Giỏ hàng)
Hãy viết một đoạn so sánh ngắn vào file markdown ghi chú của bạn dựa trên gợi ý dưới đây:
* **Pessimistic UI (Giao diện bi quan)**:
  * *Luồng đi*: Người dùng click nút `+` -> Ứng dụng hiển thị icon loading (xoay tròn) trên nút -> Gửi API lên server cập nhật số lượng -> Đợi server xử lý xong và phản hồi thành công (mất ~1-2 giây) -> Cập nhật số lượng mới lên UI và tắt loading.
  * *Ưu/Nhược*: Đảm bảo dữ liệu chính xác tuyệt đối nhưng mang lại cảm giác giật lag, chậm chạp cho người dùng khi kết nối mạng kém.
* **Optimistic UI (Giao diện lạc quan)**:
  * *Luồng đi*: Người dùng click nút `+` -> UI ngay lập tức hiển thị số lượng tăng thêm 1 đơn vị -> Gửi API chạy ngầm lên server -> Nếu server trả về thành công: giữ nguyên UI và kết thúc. Nếu lỗi (hết hàng, mất mạng): hiển thị thông báo lỗi và tự động roll back (giảm đi 1 đơn vị trên giao diện) để khớp với dữ liệu thực tế trên server.
  * *Ưu/Nhược*: Trải nghiệm cực kỳ mượt mà, phản hồi tức thì. Tuy nhiên cần viết code xử lý rollback phức tạp hơn để xử lý các kịch bản lỗi mạng.

### Yêu cầu 2: Giải thích cơ chế nút Like của Facebook/Instagram
* **Tần suất tương tác cực kỳ cao**: Người dùng thường có thói quen cuộn bảng tin nhanh và click Like liên tiếp nhiều bài viết. Nếu dùng Pessimistic UI, việc phải chờ mỗi API Like hoàn thành rồi mới đổi màu nút Like sẽ khiến giao diện bị "đơ" liên tục.
* **Tỷ lệ thành công cực kỳ cao**: Các thao tác cơ bản như Like, Tym, Bookmark có tỷ lệ thành công gần như 99.9%. Vì vậy, giả định thao tác sẽ thành công và cập nhật UI ngay lập tức là hoàn toàn hợp lý.
* **Hậu quả khi thất bại cực kỳ thấp**: Nếu xảy ra lỗi mạng khiến lượt Like không thể lưu lại, việc chỉ đơn giản tắt màu nút Like sau đó (hoặc thông báo lỗi nhẹ) không gây ảnh hưởng lớn hay thiệt hại tài chính cho người dùng (khác với thao tác Thanh toán hay Đặt hàng).

</details>

---

## 🔗 Tài liệu tham khảo

- [Smashing Magazine: Optimistic UI Patterns](https://www.smashingmagazine.com/2016/11/true-lies-of-optimistic-ui/)
- [MDN: HTTP methods PATCH vs PUT](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
- [LogRocket: Understanding Optimistic UI](https://blog.logrocket.com/understanding-optimistic-ui-react/)
