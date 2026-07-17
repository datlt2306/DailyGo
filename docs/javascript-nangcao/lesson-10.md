# Buổi 10: Mock API Setup & Tải dữ liệu (GET)

**Loại buổi**: Thực hành  
**Thời lượng**: 120 phút  
**Dự án**: ZenTask (To-Do App) - Cài đặt Mock API Server và tải dữ liệu công việc động từ API

---

## 🎯 Mục tiêu học tập

Sau buổi học này, bạn sẽ có thể:

- ✅ Cấu hình và chạy một Mock API Server cục bộ sử dụng thư viện `json-server`
- ✅ Gửi yêu cầu HTTP GET Request bằng Fetch API để tải dữ liệu về ứng dụng khi trang web khởi chạy
- ✅ Lập trình hiển thị trạng thái Loading (Đang tải) để cải thiện trải nghiệm người dùng
- ✅ Xử lý hiển thị thông báo lỗi trực quan trên giao diện nếu API Server gặp sự cố

---

## 🧩 Task Project

### Task 1: Cài đặt và cấu hình Mock API Server (30 phút)

Chúng ta sử dụng `json-server` để giả lập một RESTful API Server hoàn chỉnh chạy trên máy tính cá nhân.

1. Mở Terminal tại thư mục dự án `todo-app` và chạy lệnh sau để khởi tạo tệp `package.json` (nếu chưa có) và cài đặt `json-server`:
   ```bash
   npm init -y
   npm install json-server --save-dev
   ```
2. Tạo tệp tin `db.json` trong thư mục gốc dự án để chứa cơ sở dữ liệu giả lập dạng JSON:
   ```json
   {
     "todos": [
       {
         "id": 1719600000001,
         "ten": "Đọc tài liệu hướng dẫn Mock API",
         "moTa": "Tìm hiểu cách cài đặt json-server trên local.",
         "uuTien": "high",
         "hoanThanh": true
       },
       {
         "id": 1719600000002,
         "ten": "Thiết lập cấu hình json-server",
         "moTa": "Chạy thử server cổng 3000 để kiểm tra kết nối.",
         "uuTien": "medium",
         "hoanThanh": false
       }
     ]
   }
   ```
3. Cấu hình câu lệnh khởi chạy nhanh (npm script) trong file `package.json`:
   ```json
   "scripts": {
     "server": "json-server --watch db.json --port 3000"
   }
   ```
4. Khởi chạy API Server bằng lệnh:
   ```bash
   npm run server
   ```
   *Kiểm tra: Truy cập đường dẫn `http://localhost:3000/todos` trên trình duyệt để kiểm tra xem danh sách JSON có hiển thị không.*

---

### Task 2: Gọi GET API tải dữ liệu về ứng dụng khi load trang (50 phút)

Chúng ta sẽ khai báo biến lưu trữ URL gốc của API và viết hàm bất đồng bộ `taiDanhSachTuAPI()` để lấy dữ liệu, lưu vào mảng `danhSachCongViec` rồi gọi hiển thị.

#### Bước 2.1: Khai báo hằng số API URL và cấu trúc Loading
1. Đảm bảo cấu trúc Loading đã có sẵn trong file `index.html` của template ZenTask:
   ```html
   <div id="loading-indicator" class="loading-state hidden">
       <div class="spinner"></div>
       <span>Đang tải dữ liệu...</span>
   </div>
   ```

2. Viết logic JavaScript trong file `main.js`:
```javascript
const API_URL = 'http://localhost:3000/todos';

// Thay đổi mảng lưu trữ ban đầu thành rỗng
let danhSachCongViec = [];

/**
 * Hàm điều khiển hiển thị trạng thái Loading
 * @param {boolean} show - true để hiển thị, false để ẩn
 */
function toggleLoading(show) {
    const loader = document.getElementById('loading-indicator');
    if (!loader) return;
    
    if (show) {
        loader.classList.remove('hidden');
    } else {
        loader.classList.add('hidden');
    }
}
```

#### Bước 2.2: Viết hàm Fetch dữ liệu bất đồng bộ
```javascript
/**
 * Gọi API lấy danh sách công việc từ JSON Server
 */
async function taiDanhSachTuAPI() {
    toggleLoading(true); // 1. Hiện spinner loading
    
    try {
        const response = await fetch(API_URL);
        
        if (!response.ok) {
            throw new Error(`Lỗi kết nối HTTP: ${response.status}`);
        }
        
        // 2. Chuyển đổi dữ liệu và cập nhật vào State
        const data = await response.json();
        danhSachCongViec = data;
        
        // 3. Render dữ liệu mới ra giao diện
        renderList();
        capNhatTienDo();
        
    } catch (error) {
        console.error('Lỗi khi tải dữ liệu từ API:', error);
        
        // Hiển thị thông báo lỗi trực quan lên UI
        const listContainer = document.getElementById('danh-sach-cong-viec');
        listContainer.innerHTML = `
            <li class="error-state" style="text-align:center; padding:30px; color:#ef4444;">
                <i data-lucide="alert-triangle"></i>
                <p>Không thể kết nối với API Server!</p>
                <button onclick="taiDanhSachTuAPI()" style="margin-top:10px; padding:6px 12px; border-radius:6px; cursor:pointer;">Thử lại</button>
            </li>
        `;
        if (window.lucide) window.lucide.createIcons();
        
    } finally {
        toggleLoading(false); // 4. Ẩn spinner loading (luôn chạy bất kể thành công hay thất bại)
    }
}
```

#### Bước 2.3: Lắng nghe sự kiện DOMContentLoaded để kích hoạt tải dữ liệu
```javascript
// Gọi API ngay sau khi trình duyệt dựng xong cây DOM của trang web
document.addEventListener('DOMContentLoaded', function() {
    // Khởi chạy lấy theme cũ
    khoiTaoTheme();
    
    // Tải danh sách công việc từ API thay vì đọc từ LocalStorage như trước
    taiDanhSachTuAPI();
});
```

---



## 📝 Bài tập về nhà

1. Hãy cài đặt thư viện `json-server` và cấu hình chạy Mock API cổng 3000 trên máy của bạn.
2. Viết mã nguồn tải danh sách công việc từ cổng 3000 khi load trang web ZenTask của bạn.
3. Thử tắt Terminal đang chạy `json-server` đi (simulating API server crash) để kiểm tra xem giao diện ZenTask có hiển thị đúng thông báo lỗi kết nối và nút "Thử lại" hoạt động chính xác khi bạn bật lại server hay không.

<details>
<summary><b>💡 Gợi ý / Hướng dẫn thực hành từng bước</b></summary>

### Yêu cầu 1: Cài đặt và cấu hình `json-server`
* Tạo một file `db.json` trong thư mục gốc của dự án (cùng cấp với `index.html`) với nội dung mẫu:
  ```json
  {
    "todos": [
      {
        "id": "1",
        "ten": "Học Fetch API",
        "moTa": "Tải dữ liệu từ Localhost",
        "uuTien": "high",
        "hoanThanh": false
      }
    ]
  }
  ```
* Mở Terminal tại thư mục dự án và chạy lệnh sau để chạy server ở cổng 3000:
  ```bash
  npx json-server --watch db.json --port 3000
  ```
* Mở trình duyệt truy cập `http://localhost:3000/todos` để kiểm tra xem API đã hoạt động hay chưa.

### Yêu cầu 2: Tải danh sách công việc khi load trang
* Trong file `main.js`, viết hàm `taiDanhSachCongViec()` bất đồng bộ:
  ```javascript
  const API_URL = 'http://localhost:3000/todos';
  let danhSachCongViec = [];

  async function taiDanhSachCongViec() {
      const listContainer = document.getElementById('danh-sach-cong-viec');
      listContainer.innerHTML = '<li class="loading"><p>Đang tải dữ liệu...</p></li>';
      
      try {
          const response = await fetch(API_URL);
          if (!response.ok) {
              throw new Error("Không thể kết nối đến máy chủ.");
          }
          danhSachCongViec = await response.json();
          renderList();
          capNhatTienDo();
      } catch (error) {
          listContainer.innerHTML = `
              <li class="error-state">
                  <p>Lỗi: ${error.message}</p>
                  <button id="btn-retry" class="btn-retry">Thử lại</button>
              </li>
          `;
          // Gắn sự kiện cho nút thử lại
          document.getElementById('btn-retry')?.addEventListener('click', taiDanhSachCongViec);
      }
  }

  // Gọi hàm khi trang web tải xong
  window.addEventListener('DOMContentLoaded', taiDanhSachCongViec);
  ```

### Yêu cầu 3: Mô phỏng lỗi sập server
* Quay lại Terminal đang chạy lệnh `json-server` và nhấn tổ hợp phím `Ctrl + C` để dừng server.
* Tải lại trang web ZenTask. Bạn sẽ thấy màn hình hiển thị trạng thái lỗi cùng với nút **Thử lại**.
* Khởi động lại server bằng lệnh: `npx json-server --watch db.json --port 3000`.
* Click vào nút **Thử lại** trên giao diện trang web. Bạn sẽ thấy danh sách công việc được tải thành công và hiển thị bình thường mà không cần tải lại toàn bộ trang.

</details>

---

## 🔗 Tài liệu tham khảo

- [GitHub: json-server repository](https://github.com/typicode/json-server)
- [MDN: Document: DOMContentLoaded event](https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event)
- [JavaScript.info: Try...catch...finally](https://javascript.info/try-catch)
