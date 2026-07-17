# Buổi 9: Asynchronous JS & Fetch API

**Loại buổi**: Lý thuyết  
**Thời lượng**: 120 phút  
**Dự án**: ZenTask (To-Do App) - Chuẩn bị kết nối cơ sở dữ liệu Mock API

---

## 🎯 Mục tiêu học tập

Sau buổi học này, bạn sẽ có thể:

- ✅ Phân biệt được sự khác biệt giữa lập trình đồng bộ (Synchronous) và bất đồng bộ (Asynchronous)
- ✅ Hiểu rõ các giải pháp xử lý bất đồng bộ trong JS: Callbacks, Promises, và Async/Await
- ✅ Giải thích được mô hình hoạt động của giao thức HTTP và kiến trúc RESTful API
- ✅ Sử dụng thành thạo `Fetch API` để thực hiện các yêu cầu HTTP Request cơ bản
- ✅ Áp dụng cơ chế `try...catch` để bắt lỗi khi xử lý bất đồng bộ

---

## 🧠 Nội dung chính

### 1. Đồng bộ (Sync) vs Bất đồng bộ (Async)

* **Đồng bộ (Synchronous)**: Các câu lệnh chạy tuần tự từ trên xuống dưới, câu lệnh phía sau phải chờ câu lệnh phía trước hoàn thành rồi mới chạy.
  * *Hạn chế*: Nếu một tác vụ mất nhiều thời gian (như tải ảnh dung lượng lớn, gọi dữ liệu từ server), toàn bộ trang web sẽ bị "đơ" (blocking).
* **Bất đồng bộ (Asynchronous)**: Tác vụ tốn thời gian sẽ được đẩy sang chạy ngầm (do trình duyệt xử lý). JS tiếp tục chạy các dòng code bên dưới mà không cần chờ đợi. Khi tác vụ ngầm hoàn thành, nó sẽ gửi kết quả về sau.

---

### 2. Các cơ chế xử lý bất đồng bộ trong JavaScript

#### 2.1. Callback (Cách tiếp cận cổ điển)
Một hàm được truyền dưới dạng đối số vào một hàm khác để được gọi lại sau khi tác vụ hoàn thành.
* *Hạn chế*: Dẫn đến **Callback Hell** (mã nguồn lồng nhau quá sâu, cực kỳ khó đọc và bảo trì).

#### 2.2. Promise (ES6)
Đại diện cho một giá trị sẽ có trong tương lai. Một Promise có 3 trạng thái:
1. `Pending`: Đang chờ xử lý tác vụ ngầm.
2. `Fulfilled`: Tác vụ hoàn thành thành công (kích hoạt hàm `.then()`).
3. `Rejected`: Tác vụ thất bại do lỗi (kích hoạt hàm `.catch()`).

```javascript
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Lỗi rồi:', error));
```

#### 2.3. Async / Await (ES7 - Khuyến nghị dùng)
Cú pháp bọc ngoài Promise giúp ta viết code bất đồng bộ trông giống như code đồng bộ tuần tự, cực kỳ sạch và dễ đọc.
* Từ khóa `async` đặt trước một hàm để khai báo hàm đó là bất đồng bộ (luôn trả về một Promise).
* Từ khóa `await` đặt trước một Promise (chỉ dùng được bên trong hàm `async`), bắt trình duyệt dừng đợi Promise đó hoàn thành rồi mới chạy tiếp dòng bên dưới.

```javascript
async function layDuLieu() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Lỗi khi gọi API:', error);
    }
}
```

---

### 3. Giao thức HTTP và RESTful API

Khi client muốn tương tác với dữ liệu trên server, chúng gửi đi các **HTTP Requests** và nhận về **HTTP Responses**.

#### 3.1. Các phương thức HTTP (HTTP Methods / Verbs)
Trong kiến trúc RESTful API, các hành động CRUD tương ứng với các HTTP Methods cụ thể:
* **GET**: Đọc/Tải dữ liệu từ server về.
* **POST**: Gửi dữ liệu mới lên server để tạo mới.
* **PUT**: Ghi đè toàn bộ thông tin của dữ liệu cũ trên server.
* **PATCH**: Chỉ cập nhật một vài trường thông tin cụ thể của dữ liệu cũ (ví dụ: chỉ sửa trạng thái hoàn thành).
* **DELETE**: Xóa dữ liệu trên server.

#### 3.2. Mã trạng thái HTTP (HTTP Status Codes)
* **2xx (Success)**: Thành công (ví dụ: `200 OK`, `201 Created`).
* **3xx (Redirection)**: Chuyển hướng.
* **4xx (Client Error)**: Lỗi phía Client (ví dụ: `400 Bad Request`, `401 Unauthorized`, `404 Not Found`).
* **5xx (Server Error)**: Lỗi phía Server (ví dụ: `500 Internal Server Error`).

---

### 4. Fetch API cơ bản

`fetch()` là hàm tích hợp sẵn trong trình duyệt để gửi yêu cầu HTTP. Nó trả về một Promise.

```javascript
// Gửi GET Request
async function taiDanhSachTodo() {
    const url = 'https://jsonplaceholder.typicode.com/todos?_limit=5';
    
    try {
        const response = await fetch(url);
        
        // Kiểm tra xem mã phản hồi có thành công (200-299) không
        if (!response.ok) {
            throw new Error(`Lỗi kết nối HTTP: ${response.status}`);
        }
        
        const data = await response.json(); // Chuyển đổi dữ liệu JSON nhận được
        console.log('Dữ liệu nhận về:', data);
    } catch (error) {
        console.error('Xử lý lỗi:', error.message);
    }
}
```

---



## 📝 Bài tập về nhà

1. Viết một hàm async `checkUserInfo(userId)` gọi API lấy thông tin người dùng từ URL mẫu: `https://jsonplaceholder.typicode.com/users/1` và in tên (`name`), email (`email`) của họ ra màn hình console.
2. Thử thay đổi ID người dùng trong URL thành `999` (không tồn tại) để kiểm tra xem khối `try...catch` của bạn có bắt được lỗi 404 và in ra thông báo lỗi chính xác không.
3. Tìm hiểu khái niệm **API Endpoint** là gì trong lập trình Web API.

<details>
<summary><b>💡 Gợi ý / Hướng dẫn thực hành từng bước</b></summary>

### Yêu cầu 1: Viết hàm async `checkUserInfo(userId)`
* Sử dụng `async/await` kết hợp với `fetch()` để gọi API:
  ```javascript
  async function checkUserInfo(userId) {
      try {
          const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
          
          // Kiểm tra xem mã HTTP response status có thành công không (200-299)
          if (!response.ok) {
              throw new Error(`Lỗi kết nối API: Mã lỗi ${response.status}`);
          }
          
          const user = await response.json();
          console.log(`Thông tin người dùng ID ${userId}:`);
          console.log(`- Tên: ${user.name}`);
          console.log(`- Email: ${user.email}`);
      } catch (error) {
          console.error("Đã xảy ra lỗi khi lấy dữ liệu:", error.message);
      }
  }

  // Chạy thử với userId = 1
  checkUserInfo(1);
  ```

### Yêu cầu 2: Kiểm tra lỗi với ID = 999
* Chạy thử hàm với `checkUserInfo(999)`.
* Quan sát kết quả:
  * URL `https://jsonplaceholder.typicode.com/users/999` sẽ trả về mã HTTP `404 Not Found`.
  * Vì `response.ok` bằng `false`, hàm `throw new Error` sẽ được kích hoạt.
  * Khối `catch` bắt được lỗi này và in ra màn hình console thông báo lỗi: `"Đã xảy ra lỗi khi lấy dữ liệu: Lỗi kết nối API: Mã lỗi 404"`.

### Yêu cầu 3: Khái niệm API Endpoint là gì?
* **API Endpoint** (Điểm cuối API) là một URL cụ thể mà ứng dụng client (như trình duyệt web) gọi đến để tương tác với tài nguyên trên server.
* Ví dụ:
  * `GET /users`: Endpoint lấy danh sách người dùng.
  * `POST /users`: Endpoint tạo mới một người dùng.
  * `GET /users/1`: Endpoint lấy chi tiết người dùng có ID là 1.

</details>

---

## 🔗 Tài liệu tham khảo

- [JavaScript.info: Promises, async/await](https://javascript.info/js-async)
- [MDN: Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [MDN: HTTP request methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
