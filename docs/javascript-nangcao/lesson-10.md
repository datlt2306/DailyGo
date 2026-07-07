# Buổi 10: Fetch API & Gọi Public API
- **Dự án**: ZenTask (To-Do App) - Nghiên cứu cơ chế kết nối và lấy dữ liệu mạng sử dụng Fetch API

---

## 🎯 Mục tiêu buổi học

> **Thầy mong muốn sau buổi học này, các em sẽ đạt được:**

> **Thầy mong muốn sau buổi học này, các em sẽ đạt được:**
Sau buổi học này, các em sẽ có thể:
1. ✅ Giải thích mô hình hoạt động của giao thức HTTP (Request/Response)
2. ✅ Phân tích cấu trúc cơ bản của một API Endpoint và kiến trúc RESTful API
3. ✅ Sử dụng thành thạo `Fetch API` để gửi các yêu cầu GET Request lên máy chủ internet
4. ✅ Chuyển đổi dữ liệu nhận về từ định dạng JSON sang Object trong JavaScript
5. ✅ Phân biệt và ứng dụng các mã trạng thái HTTP Status Codes phổ biến (2xx, 3xx, 4xx, 5xx)

## 🧠 Cơ sở lý thuyết

### 1. Giao thức HTTP (Hypertext Transfer Protocol)
HTTP là giao thức truyền tải siêu văn bản hoạt động theo mô hình **Client-Server** (Khách - Chủ):
* **Request (Yêu cầu)**: Trình duyệt gửi thông điệp yêu cầu tài nguyên hoặc dữ liệu (chứa URL, Method, Headers, Body).
* **Response (Phản hồi)**: Máy chủ xử lý và trả về dữ liệu tương ứng kèm theo một **HTTP Status Code** (Mã trạng thái).

### 2. Kiến trúc RESTful API
RESTful API là tiêu chuẩn thiết kế API phổ biến nhất hiện nay dành cho việc trao đổi dữ liệu web:
- **API Endpoint**: Đường dẫn URL định vị một tài nguyên (ví dụ: `https://api.example.com/v1/users`).
- **HTTP Methods**: Các phương thức đại diện cho hành động CRUD dữ liệu:
  - `GET`: Tải dữ liệu về.
  - `POST`: Tạo mới dữ liệu.
  - `PUT`/`PATCH`: Sửa đổi dữ liệu.
  - `DELETE`: Xóa dữ liệu.

### 3. Mã trạng thái HTTP (HTTP Status Codes)
* **2xx (Thành công)**: Ví dụ: `200 OK` (Thành công chung), `201 Created` (Tạo mới dữ liệu thành công).
* **3xx (Chuyển hướng)**: Ví dụ: `301 Moved Permanently`.
* **4xx (Lỗi do Client gửi sai)**: Ví dụ: `400 Bad Request` (Dữ liệu gửi lên không đúng định dạng), `401 Unauthorized` (Chưa đăng nhập xác thực), `404 Not Found` (URL không tồn tại).
* **5xx (Lỗi do Server gặp sự cố)**: Ví dụ: `500 Internal Server Error` (Sập nguồn server/lỗi code server).

---

## 💻 Ví dụ minh họa: Cú pháp Fetch API cơ bản
`fetch()` là hàm tích hợp sẵn trong trình duyệt hỗ trợ gửi HTTP Request. Hàm này luôn trả về một **Promise**.

```javascript
// Gửi yêu cầu GET tải dữ liệu về
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => {
    // 1. Kiểm tra trạng thái phản hồi
    if (!response.ok) {
      throw new Error(`Lỗi kết nối HTTP: ${response.status}`);
    }
    // 2. Chuyển đổi luồng dữ liệu thô sang định dạng JSON
    return response.json();
  })
  .then(data => {
    // 3. Sử dụng dữ liệu nhận về
    console.log("Dữ liệu nhận được:", data);
  })
  .catch(error => {
    // 4. Bắt lỗi mạng hoặc lỗi phân tích cú pháp
    console.error("Gặp sự cố lỗi mạng:", error);
  });
```

---

## 🧩 Task thực hành tại lớp: Kết nối Public API

Thầy trò mình sẽ xây dựng một trang thực hành lấy dữ liệu Todo từ **JSONPlaceholder** (Một Mock API công cộng phổ biến cho lập trình viên).

### Bước 1: Thiết kế giao diện HTML đơn giản
Tạo tệp `practice-api.html` có cấu trúc hiển thị danh sách:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Thực hành Gọi Public API</title>
  <style>
    body { font-family: sans-serif; background: #0f172a; color: white; padding: 30px; }
    .todo-card { padding: 12px; margin: 8px 0; background: #1e293b; border-radius: 6px; display: flex; justify-content: space-between; }
    .todo-card.done { border-left: 4px solid #10b981; opacity: 0.7; }
    .todo-card.pending { border-left: 4px solid #f59e0b; }
    #loader { color: #818cf8; font-weight: bold; }
  </style>
</head>
<body>

  <h2>Danh sách việc lấy từ JSONPlaceholder</h2>
  <div id="loader" class="hidden">Đang kết nối tải dữ liệu...</div>
  <div id="todo-container"></div>

  <script src="app.js"></script>
</body>
</html>
```

### Bước 2: Viết mã JavaScript kết nối mạng
Viết mã nguồn bất đồng bộ sử dụng cú pháp `Async/Await` để tải về 5 công việc đầu tiên và đổ ra HTML:
```javascript
// app.js
const API_PUBLIC_URL = 'https://jsonplaceholder.typicode.com/todos?_limit=5';
const container = document.getElementById('todo-container');
const loader = document.getElementById('loader');

async function taiDuLieuPublic() {
  // 1. Hiển thị loading
  loader.style.display = 'block';
  container.innerHTML = '';
  
  try {
    // 2. Gửi request mạng GET
    const response = await fetch(API_PUBLIC_URL);
    
    if (!response.ok) {
      throw new Error(`Lỗi HTTP: ${response.status}`);
    }
    
    // 3. Phân tách định dạng JSON
    const todos = await response.json();
    
    // 4. Render kết quả ra DOM
    container.innerHTML = todos.map(todo => `
      <div class="todo-card ${todo.completed ? 'done' : 'pending'}">
        <span>${todo.title}</span>
        <span>${todo.completed ? '✅ Đã xong' : '⏳ Chờ xử lý'}</span>
      </div>
    `).join('');
    
  } catch (error) {
    container.innerHTML = `<p style="color: #ef4444;">Không thể tải dữ liệu: ${error.message}</p>`;
  } finally {
    // 5. Ẩn loading
    loader.style.display = 'none';
  }
}

// Chạy hàm tải dữ liệu khi khởi động trang
taiDuLieuPublic();
```

---

## 📝 Bài tập về nhà

1. Tạo một trang HTML thực hành gọi API lấy danh sách người dùng từ URL công cộng sau: `https://jsonplaceholder.typicode.com/users`
2. Hiển thị thông tin tên (`name`), email (`email`), và tên công ty (`company.name`) của mỗi người dùng nhận được dưới dạng các thẻ card đẹp mắt bằng CSS.
3. Sử dụng cấu trúc `try...catch` để xử lý thông tin lỗi trực quan nếu người dùng cố tình thay đổi URL API thành sai đường dẫn.

---

## 🧪 Quiz/Checkpoint

Dưới đây là 5 câu hỏi trắc nghiệm kiểm tra nhanh kiến thức của các em trong buổi học này:

### Câu hỏi 1: Đối số đầu tiên truyền vào hàm fetch() mặc định là gì?
A. Cấu hình headers  
B. Đường dẫn URL (API Endpoint) cần kết nối  
C. Hàm xử lý callback  
D. Phương thức HTTP (GET/POST)  

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `B` (Tham số đầu tiên là chuỗi ký tự chứa URL của API endpoint)
</details>

### Câu hỏi 2: Giao thức HTTP hoạt động dựa trên cơ chế nào dưới đây?
A. Gửi tín hiệu liên tục không ngắt quãng  
B. Mô hình trao đổi Request (Yêu cầu) và Response (Phản hồi) giữa Client và Server  
C. Chỉ giao tiếp một chiều từ Server về Client  
D. Cả A và C  

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `B` (Client gửi request, server xử lý rồi trả về response)
</details>

### Câu hỏi 3: Mã trạng thái HTTP nào đại diện cho lỗi 'Không tìm thấy tài nguyên'?
A. 200 OK  
B. 400 Bad Request  
C. 404 Not Found  
D. 500 Internal Server Error  

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `C` (404 Not Found xảy ra khi đường dẫn URL yêu cầu không tồn tại trên hệ thống server)
</details>

### Câu hỏi 4: response.json() trả về kiểu dữ liệu gì?
A. Một chuỗi văn bản thô  
B. Một Object trong JavaScript  
C. Một Promise (vì quá trình chuyển đổi dữ liệu luồng thô mất thời gian)  
D. Một mảng Array tĩnh  

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `C` (response.json() là tác vụ bất đồng bộ, nó trả về một Promise và cần được giải quyết bằng await hoặc .then)
</details>

### Câu hỏi 5: Phương thức HTTP nào được khuyên dùng để tạo mới một đối tượng dữ liệu lên server?
A. GET  
B. POST  
C. PUT  
D. DELETE  

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `B` (POST được sử dụng để gửi dữ liệu Payload lên server với mục đích tạo mới tài nguyên)
</details>

---

## 🔗 Tài liệu tham khảo

- [MDN: Fetch API Guide](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [RESTful API Tutorial](https://restfulapi.net/)
- [JSONPlaceholder: Free Fake REST API](https://jsonplaceholder.typicode.com/)
