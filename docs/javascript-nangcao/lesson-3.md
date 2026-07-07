# Buổi 3: Sự kiện (Events) & Event Delegation
**Dự án**: ZenTask (To-Do App) - Tối ưu hóa lắng nghe sự kiện trên danh sách công việc

---

## 🎯 Mục tiêu buổi học

> **Thầy mong muốn sau buổi học này, các em sẽ đạt được:**

> **Thầy mong muốn sau buổi học này, các em sẽ đạt được:**
Sau buổi học này, các em sẽ có thể:
1. ✅ Hiểu rõ cơ chế bắt sự kiện (Event Listeners) và đối tượng sự kiện (Event Object)
2. ✅ Phân biệt được sự khác biệt giữa hai giai đoạn: Event Bubbling (Nổi bọt) và Event Capturing (Lan truyền xuống)
3. ✅ Sử dụng kỹ thuật **Event Delegation** (Ủy quyền sự kiện) để quản lý sự kiện hiệu quả cho danh sách động
4. ✅ Ứng dụng kỹ thuật này để bắt sự kiện click cho các nút được thêm động trên giao diện

## 🧠 Nội dung chính

### 1. JavaScript Events & Event Object

**Sự kiện (Event)** là các hành động hoặc sự việc xảy ra trên trình duyệt (ví dụ: người dùng click chuột, gõ phím, gửi form, tải trang...).

#### 1.1. Cách lắng nghe sự kiện bằng `addEventListener`
Đây là phương pháp hiện đại và an toàn nhất để gán trình xử lý sự kiện cho một phần tử DOM:

```javascript
const btn = document.querySelector('.btn-theme-toggle');

btn.addEventListener('click', function(event) {
    console.log('Nút đổi giao diện đã được click!');
});
```

#### 1.2. Đối tượng Sự kiện (Event Object)
Khi một sự kiện xảy ra, trình duyệt sẽ tự động truyền một đối tượng chứa tất cả thông tin chi tiết về sự kiện đó vào tham số của hàm xử lý (thường được đặt tên là `e` hoặc `event`).

Các thuộc tính quan trọng nhất của `Event Object`:
* `event.target`: Trả về phần tử **thực tế phát sinh sự kiện** (nơi người dùng click chuột).
* `event.currentTarget`: Trả về phần tử **đang lắng nghe sự kiện** (nút hoặc thẻ được gán `addEventListener`).
* `event.preventDefault()`: Ngăn chặn hành vi mặc định của thẻ (ví dụ: ngăn form reload trang khi submit, ngăn thẻ `<a>` chuyển trang).

---

### 2. Sự nổi bọt sự kiện (Event Bubbling)

Khi một sự kiện xảy ra trên một phần tử, nó không chỉ dừng lại ở đó. Sự kiện sẽ bắt đầu lan truyền theo 3 giai đoạn:
1. **Capturing Phase**: Sự kiện đi từ phần tử gốc (`window` -> `document` -> `body` -> các thẻ cha) đi xuống phần tử đích.
2. **Target Phase**: Sự kiện kích hoạt ngay tại phần tử đích (nơi phát sinh sự kiện).
3. **Bubbling Phase (Nổi bọt)**: Sự kiện "nổi bọt" ngược từ phần tử đích đi lên qua các thẻ cha cho đến khi chạm tới `window`.

Mặc định, `addEventListener` lắng nghe sự kiện ở giai đoạn **Nổi bọt (Bubbling)**.

```html
<div class="card" onclick="alert('Click Card')">
    <button onclick="alert('Click Button')">Click me</button>
</div>
```
*Khi các em click vào nút `button`, sự kiện nổi bọt lên thẻ cha làm cho cả hai alert đều hiển thị: đầu tiên là "Click Button", sau đó là "Click Card".*

Để ngăn cản sự kiện nổi bọt tiếp tục đi lên thẻ cha, ta dùng:
```javascript
event.stopPropagation();
```

---

### 3. Kỹ thuật Ủy quyền sự kiện (Event Delegation)

#### 3.1. Vấn đề của các phần tử được thêm động
Trong ứng dụng To-Do App, danh sách công việc liên tục được thêm mới hoặc xóa đi. Nếu ta gán trực tiếp sự kiện click cho các nút sửa/xóa khi render:
```javascript
// ❌ CÁCH LÀM Kém hiệu quả
const deleteButtons = document.querySelectorAll('.btn-delete');
deleteButtons.forEach(btn => {
    btn.addEventListener('click', handleDelete);
});
```
* **Lỗi 1**: Các nút xóa của các công việc mới được thêm vào sau khi gọi `renderList()` sẽ **không** hoạt động (vì chúng chưa hề được gán sự kiện).
* **Lỗi 2**: Nếu danh sách có hàng nghìn công việc, việc tạo hàng nghìn event listeners sẽ tiêu tốn bộ nhớ và làm giảm hiệu năng của ứng dụng.

#### 3.2. Giải pháp: Event Delegation
Thay vì gán sự kiện cho từng nút con, ta **chỉ gán duy nhất một event listener** cho thẻ cha trực tiếp (thẻ `<ul id="danh-sach-cong-viec">` - thẻ này luôn tồn tại cố định trên trang).

Khi người dùng click vào bất kỳ đâu bên trong danh sách, sự kiện click sẽ tự động **nổi bọt** lên thẻ cha. Tại đây, ta kiểm tra xem phần tử thực tế được click (`event.target`) là gì để xử lý thích hợp.

**Ví dụ:**
```javascript
const listContainer = document.getElementById('danh-sach-cong-viec');

listContainer.addEventListener('click', function(event) {
    // Tìm phần tử gần nhất khớp với selector (hữu dụng khi click trúng icon nằm trong button)
    const btnDelete = event.target.closest('.btn-delete');
    const btnEdit = event.target.closest('.btn-edit');
    
    if (btnDelete) {
        // Lấy ra thẻ task-item cha của nút xóa
        const taskItem = btnDelete.closest('.task-item');
        const id = parseInt(taskItem.dataset.id);
        console.log(`Yêu cầu xóa task có ID: ${id}`);
    }
    
    if (btnEdit) {
        const taskItem = btnEdit.closest('.task-item');
        const id = parseInt(taskItem.dataset.id);
        console.log(`Yêu cầu sửa task có ID: ${id}`);
    }
});
```

*Hàm `.closest('selector')` sẽ tìm ngược lên trên để tìm thẻ cha gần nhất khớp với bộ chọn. Điều này giúp code hoạt động chính xác ngay cả khi người dùng click vào thẻ `<i>` (icon) thay vì thẻ `<button>`.*

---

## 📝 Bài tập về nhà

1. Viết code JavaScript lắng nghe sự kiện click trên toàn bộ thẻ `<body>` của tài liệu. Mỗi khi click vào một phần tử bất kỳ, hãy in ra console thẻ đó (tagName và className).
2. Các em các em các em hãy thử nghiệm tạo một nút bấm đơn giản, khi click vào sẽ ngăn chặn không cho nổi bọt lên thẻ cha bằng `event.stopPropagation()` và kiểm tra kết quả.
3. Giải thích tại sao việc sử dụng `.closest('.btn-delete')` lại tốt hơn việc chỉ kiểm tra `event.target.classList.contains('btn-delete')` khi bên trong nút bấm có chứa thẻ icon `<i>`.

---

## 🔗 Tài liệu tham khảo

- [JavaScript.info: Bubbling and capturing](https://javascript.info/bubbling-and-capturing)
- [JavaScript.info: Event delegation](https://javascript.info/event-delegation)
- [MDN: Event.target](https://developer.mozilla.org/en-US/docs/Web/API/Event/target)
