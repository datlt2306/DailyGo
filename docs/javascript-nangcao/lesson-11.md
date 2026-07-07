# Buổi 11: Mock API Setup & Tải dữ liệu (GET)
- **Dự án**: ZenTask (To-Do App) - Thiết lập Mock API Server nội bộ và tải danh sách công việc động khi mở ứng dụng

---

## 🎯 Mục tiêu buổi học

> **Thầy mong muốn sau buổi học này, các em sẽ đạt được:**

> **Thầy mong muốn sau buổi học này, các em sẽ đạt được:**
Sau buổi học này, các em sẽ có thể:
1. ✅ Tải cài đặt và cấu hình máy chủ giả lập RESTful API cục bộ bằng thư viện `json-server`
2. ✅ Viết mã nguồn Fetch GET liên kết ứng dụng ZenTask với cổng mạng local `http://localhost:3000/todos`
3. ✅ Thiết kế và lập trình giao diện trạng thái **Loading Indicator** để nâng cao trải nghiệm người dùng
4. ✅ Lập trình giao diện xử lý lỗi kết nối và thiết lập nút bấm **"Thử lại"** (Retry Button) để khôi phục khi server lỗi sập

## 🧩 Task Project

### Task 1: Cài đặt và cấu hình Mock API Server (30 phút)

Thầy trò mình sử dụng `json-server` để giả lập một RESTful API Server hoàn chỉnh chạy trên máy tính cá nhân.

1. Mở Terminal tại thư mục gốc dự án `todo-app` và chạy lệnh sau để khởi tạo tệp `package.json` (nếu chưa có) và cài đặt `json-server`:
   ```bash
   npm init -y
   npm install json-server --save-dev
   ```
2. Tạo tệp tin `db.json` trong thư mục gốc dự án để chứa cơ sở dữ liệu giả lập dạng JSON:
   ```json
   {
     "todos": [
       {
         "id": 1,
         "ten": "Đọc tài liệu hướng dẫn Mock API",
         "moTa": "Tìm hiểu cách cài đặt json-server trên local.",
         "uuTien": "high",
         "hoanThanh": true
       },
       {
         "id": 2,
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

Thầy trò mình sẽ khai báo biến lưu trữ URL gốc của API và viết hàm bất đồng bộ `taiDanhSachTuAPI()` để lấy dữ liệu, lưu vào mảng `danhSachCongViec` rồi gọi hiển thị.

#### Bước 2.1: Khai báo hằng số API URL và cấu trúc Loading
1. Đảm bảo cấu trúc Loading đã có sẵn trong file `index.html` của template ZenTask:
   ```html
   <div id="loading-indicator" class="loading-state hidden">
       <div class="spinner"></div>
       <span>Đang tải dữ liệu...</span>
   </div>
   ```

2. Viết logic JavaScript điều khiển hiển thị spinner trong file `main.js`:
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

#### Bước 2.2: Viết hàm Fetch dữ liệu bất đồng bộ từ JSON Server
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
            <li class="error-state" style="text-align:center; padding:30px; color:#ef4444; list-style:none;">
                <p>⚠️ Không thể kết nối với API Server!</p>
                <button onclick="taiDanhSachTuAPI()" style="margin-top:10px; padding:6px 12px; border-radius:6px; cursor:pointer; background:#ef4444; color:#fff; border:none;">Thử lại</button>
            </li>
        `;
        
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

1. Các em các em các em hãy thực hiện cấu hình chạy Mock API cổng 3000 trên máy của các em và chạy ZenTask để kết nối dữ liệu thành công.
2. Thử tắt Terminal đang chạy `json-server` đi (mô phỏng server sập đột ngột) để kiểm tra xem giao diện ZenTask có hiển thị đúng thông báo lỗi kết nối và nút "Thử lại" hoạt động chính xác khi các em khởi chạy lại server hay không.

---

## 🔗 Tài liệu tham khảo

- [GitHub: json-server repository](https://github.com/typicode/json-server)
- [MDN: DOMContentLoaded event](https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event)
- [JavaScript.info: Try...catch...finally](https://javascript.info/try-catch)
