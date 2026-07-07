# Buổi 1: DOM Selection, Traversal & Manipulation
**Dự án**: ZenTask (To-Do App) - Chuẩn bị giao diện

---

## 🎯 Mục tiêu buổi học

> **Thầy mong muốn sau buổi học này, các em sẽ đạt được:**

> **Thầy mong muốn sau buổi học này, các em sẽ đạt được:**
Sau buổi học này, các em sẽ có thể:
1. ✅ Hiểu rõ cấu trúc cây DOM (Document Object Model)
2. ✅ Sử dụng thành thạo các bộ chọn DOM hiện đại (`querySelector`, `querySelectorAll`)
3. ✅ Di chuyển qua lại giữa các nút trên cây DOM (DOM Traversal)
4. ✅ Thao tác thay đổi nội dung, thuộc tính, class CSS và CSS Inline của các thẻ HTML
5. ✅ Ứng dụng để lấy tham chiếu các thành phần giao diện của dự án ZenTask

## 🧠 Nội dung chính

### 1. Cấu trúc cây DOM là gì?

**DOM (Document Object Model)** là giao diện lập trình cho phép JavaScript tương tác và thay đổi cấu trúc, nội dung cũng như định dạng của tài liệu HTML.

Khi trình duyệt tải một trang HTML, nó sẽ chuyển đổi mã nguồn thành một cấu trúc dạng cây gọi là **Cây DOM (DOM Tree)**:
* Mỗi thẻ HTML là một **Element Node** (ví dụ: `<body>`, `<div>`, `<h1>`).
* Các đoạn chữ bên trong thẻ là **Text Node**.
* Các thuộc tính của thẻ là **Attribute Node** (ví dụ: `class`, `id`, `href`).

Đối tượng toàn cục `document` đại diện cho toàn bộ trang web và là điểm xuất phát để truy cập cây DOM.

---

### 2. Truy xuất phần tử (DOM Selection)

Để làm việc với một thẻ HTML, bước đầu tiên là tìm và chọn nó bằng JavaScript.

#### 2.1. Các bộ chọn cổ điển (Ít dùng hơn)
* `document.getElementById('id')`: Chọn 1 phần tử theo ID.
* `document.getElementsByClassName('class-name')`: Chọn danh sách các phần tử theo Class (trả về một HTMLCollection).

#### 2.2. Các bộ chọn hiện đại (Khuyến nghị dùng)
Sử dụng cú pháp selector của CSS để tìm kiếm phần tử, rất linh hoạt và mạnh mẽ.

* `document.querySelector('css-selector')`: Trả về phần tử **đầu tiên** khớp với bộ chọn. Nếu không tìm thấy, trả về `null`.

::: code-group

```javascript [main.js]
const appTitle = document.querySelector('.brand h2'); // Chọn thẻ h2 nằm trong class brand
const taskForm = document.querySelector('#form-cong-viec'); // Chọn form theo ID
```

```javascript [main.js]
const allTaskItems = document.querySelectorAll('.task-item');
// Duyệt qua NodeList bằng forEach
allTaskItems.forEach(item => {
    console.log(item);
});
```

:::

---

### 3. Duyệt cây DOM (DOM Traversal)

Đôi khi ta cần đi từ một phần tử đã chọn để truy cập vào phần tử cha, con hoặc anh em của nó.

* **Đi lên (Cha):** `parentElement`

::: code-group

```javascript [main.js]
const deleteButton = document.querySelector('.btn-delete');
const taskItem = deleteButton.parentElement.parentElement; // Đi lên 2 cấp để lấy thẻ <li> chứa nút
```

```javascript [main.js]
const taskList = document.querySelector('.task-list');
const firstTask = taskList.firstElementChild; // Phần tử con đầu tiên
```

```javascript [main.js]
const currentTask = document.querySelector('.task-item');
const nextTask = currentTask.nextElementSibling; // Phần tử kế tiếp
```

:::

---

### 4. Thao tác với DOM (DOM Manipulation)

#### 4.1. Thay đổi Nội dung
* `textContent`: Lấy hoặc ghi đè nội dung thuần văn bản (an sau, chống XSS).
* `innerHTML`: Lấy hoặc ghi đè nội dung bao gồm cả thẻ HTML (⚠️ nguy hiểm nếu nhận dữ liệu từ user vì có thể bị tấn công XSS).
```javascript
const title = document.querySelector('.brand h2');
title.textContent = 'ZenTask Pro'; // Thay đổi chữ hiển thị

const resultContainer = document.querySelector('#ket-qua');
resultContainer.innerHTML = '<span class="error">Đã xảy ra lỗi!</span>'; // Tạo cấu trúc thẻ mới
```

#### 4.2. Thao tác Class CSS (classList)
Thay vì sửa trực tiếp inline style, khuyến nghị viết các class CSS sẵn rồi bật/tắt class đó bằng JavaScript.
* `.classList.add('className')`: Thêm class.
* `.classList.remove('className')`: Xóa class.
* `.classList.toggle('className')`: Bật/tắt class (nếu có thì xóa, chưa có thì thêm).
* `.classList.contains('className')`: Kiểm tra xem phần tử có class đó không (trả về `true/false`).

```javascript
const taskItem = document.querySelector('.task-item');
taskItem.classList.add('completed'); // Đánh dấu hoàn thành (chuyển CSS sang gạch ngang chữ)
taskItem.classList.toggle('active');  // Toggle trạng thái hoạt động
```

#### 4.3. Thay đổi CSS Inline (style property)
Dùng khi cần thay đổi style động trực tiếp (ví dụ: tính toán kích thước, phần trăm tiến độ).
* Cú pháp: `element.style.propertyName` (dạng camelCase thay vì dấu gạch ngang).
```javascript
const progressBar = document.querySelector('.progress-bar-fill');
progressBar.style.width = '75%'; // Thay đổi chiều rộng thanh tiến độ
progressBar.style.backgroundColor = '#10b981'; // Đổi màu nền sang xanh lá (background-color -> backgroundColor)
```

#### 4.4. Thao tác Thuộc tính (Attributes) & Dataset
* `getAttribute(name)`: Lấy giá trị thuộc tính.
* `setAttribute(name, value)`: Thiết lập giá trị thuộc tính.
* `dataset`: Truy cập các thuộc tính tùy biến dạng `data-*`. Trong dự án, ta dùng `data-id` hoặc `data-priority` trên thẻ `<li>` để xác định công việc.
```javascript
const task = document.querySelector('.task-item');
// Lấy giá trị data-id
const taskId = task.dataset.id; // tương đương data-id trong HTML
const taskPriority = task.dataset.priority; // tương đương data-priority trong HTML

// Thay đổi thuộc tính
const inputField = document.querySelector('#ten-cong-viec');
inputField.setAttribute('placeholder', 'Nhập công việc cần làm hôm nay...');
```

---

## 💻 Ví dụ minh họa: Phân tích và truy xuất giao diện ZenTask

Dựa trên cấu trúc HTML của template ZenTask, đoạn mã sau mô phỏng cách ta chọn và đọc trạng thái ban đầu của ứng dụng:

```javascript
// 1. Lấy thông tin tiêu đề ứng dụng
const appName = document.querySelector('.brand h2').textContent;
console.log('Tên ứng dụng:', appName);

// 2. Lấy thông tin user đăng nhập
const userName = document.querySelector('.user-name').textContent;
console.log('Người dùng:', userName);

// 3. Đếm số lượng công việc đang hiển thị trên giao diện
const taskCount = document.querySelectorAll('.task-item').length;
console.log(`Số công việc hiện tại: ${taskCount}`);

// 4. Đọc ID và độ ưu tiên của công việc đầu tiên
const firstTask = document.querySelector('.task-item');
if (firstTask) {
    const id = firstTask.dataset.id;
    const priority = firstTask.dataset.priority;
    console.log(`Task đầu tiên - ID: ${id}, Độ ưu tiên: ${priority}`);
}
```

---

## 📝 Bài tập về nhà

Tạo một file nháp `app.js` nhúng vào template ZenTask và thực hiện các yêu cầu sau:
1. Truy xuất form thêm công việc bằng bộ chọn ID.
2. Truy xuất ô nhập tên công việc và in placeholder hiện tại của nó ra console.
3. Thay đổi thanh tiến độ tuần này thành `80%` và đổi màu nền của nó sang màu cam (`#f59e0b`).
4. Truy xuất tất cả các nút sửa (`.btn-edit`) và in ra màn hình console số lượng nút tìm thấy.
5. Lấy ra tiêu đề công việc thứ 2 trong danh sách và in ra console.

---

## 🔗 Tài liệu tham khảo

- [MDN: Document Object Model](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- [MDN: Locating DOM elements using selectors](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Locating_DOM_elements_using_selectors)
- [JavaScript.info: Searching: getElement*, querySelector*](https://javascript.info/searching-elements-dom)
