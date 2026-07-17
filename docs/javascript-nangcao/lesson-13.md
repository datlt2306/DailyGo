# Buổi 13: ES6 Modules & Kiến trúc ứng dụng

**Loại buổi**: Lý thuyết  
**Thời lượng**: 120 phút  
**Dự án**: ZenTask (To-Do App) - Lập kế hoạch tái cấu trúc dự án theo kiến trúc Modular

---

## 🎯 Mục tiêu học tập

Sau buổi học này, bạn sẽ có thể:

- ✅ Hiểu rõ tầm quan trọng của việc tổ chức và kiến trúc mã nguồn trong phát triển phần mềm
- ✅ Sử dụng thành thạo cú pháp import và export của ES6 Modules (Default vs Named Exports)
- ✅ Phân tách ứng dụng thành các tầng kiến trúc rõ ràng (API, Storage, DOM, Main)
- ✅ Cấu hình file HTML để chạy mã nguồn JavaScript dưới dạng Module (`type="module"`)

---

## 🧠 Nội dung chính

### 1. Tại sao phải kiến trúc mã nguồn?

Khi bắt đầu một dự án nhỏ, ta có xu hướng viết tất cả mã nguồn (biến, hàm hiển thị, hàm gọi API, các sự kiện...) vào một file duy nhất (như `main.js`). 
* **Hậu quả**: Khi dự án lớn lên (hàng nghìn dòng code), file này sẽ trở nên cực kỳ phức tạp. Việc tìm kiếm code, sửa lỗi hay thêm tính năng mới trở thành ác mộng.
* **Giải pháp (Modularization)**: Chia nhỏ file mã nguồn khổng lồ thành các file nhỏ hơn gọi là **Modules**, mỗi module chịu trách nhiệm một nhiệm vụ chuyên biệt (Single Responsibility Principle).

---

### 2. ES6 Modules (`import` & `export`)

ES6 giới thiệu hệ thống module chuẩn hóa chạy trực tiếp trên trình duyệt web. Có hai cách xuất (export) dữ liệu từ một module:

::: code-group
```javascript [Named Exports (Xuất có đặt tên)]
// utils.js - Xuất nhiều biến hoặc hàm cùng lúc
export const LIMIT = 10;
export function validateEmail(email) {
    return email.includes('@');
}

// main.js - Phải import chính xác tên trong ngoặc nhọn {}
import { LIMIT, validateEmail } from './utils.js';
console.log(LIMIT); // 10
```

```javascript [Default Export (Xuất mặc định)]
// api.js - Mỗi file chỉ được phép có duy nhất 1 default export
const apiService = {
    get(url) { /* ... */ }
};
export default apiService;

// main.js - Import không cần ngoặc nhọn và có thể đổi tên tùy ý
import customApi from './api.js';
customApi.get('http://api.com');
```
:::

---

### 3. Phân chia các lớp kiến trúc cho To-Do App

Trong buổi thực hành tiếp theo, chúng ta sẽ chia file `main.js` hiện tại thành cấu trúc sau:

```
todo-app/
├── index.html
├── styles.css
└── src/
    ├── constants.js   # Lưu trữ hằng số (API_URL, SELECTORS...)
    ├── utils.js       # Các hàm bổ trợ (escapeHTML, showToast...)
    ├── api.js         # Lớp giao tiếp API Server (fetch GET, POST, PATCH, DELETE)
    ├── storage.js     # Lớp giao tiếp LocalStorage (đọc/ghi theme)
    ├── dom.js         # Lớp chuyên thao tác hiển thị (renderList, toggleLoading...)
    └── main.js        # File điều khiển chính (entry point, quản lý sự kiện)
```

#### Ý nghĩa phân tầng:
* `api.js` **không** quan tâm giao diện hiển thị thế nào. Nó chỉ làm nhiệm vụ lấy dữ liệu từ server về hoặc gửi lên.
* `dom.js` **không** quan tâm dữ liệu được lấy từ API hay LocalStorage. Nó chỉ nhận mảng đầu vào và vẽ ra HTML.
* `main.js` đóng vai trò nhạc trưởng, gọi hàm từ `api.js` để lấy dữ liệu, rồi chuyển dữ liệu đó cho `dom.js` hiển thị.

---

### 4. Cách nhúng Module vào HTML

Mặc định, trình duyệt coi tệp JS là tệp script thông thường (không hỗ trợ cú pháp `import`/`export`). Để kích hoạt tính năng Module, ta bắt buộc phải khai báo thuộc tính `type="module"` trong thẻ `<script>`:

```html
<!-- index.html -->
<script type="module" src="src/main.js"></script>
```

#### Đặc điểm của `type="module"`:
1. **Tự động Defer**: Module mặc định được tải song song và chỉ thực thi sau khi cây DOM đã dựng xong (tương tự thuộc tính `defer`). Do đó bạn không cần bọc code trong sự kiện `DOMContentLoaded` nữa.
2. **Cơ chế Strict Mode**: Code bên trong module tự động chạy dưới dạng `use strict` (ngăn chặn các lỗi viết code cẩu thả).
3. **Phạm vi riêng (Module Scope)**: Các biến khai báo trong module không bị lộ ra phạm vi toàn cục (global scope), tránh xung đột biến giữa các file.

---



## 📝 Bài tập về nhà

1. Hãy tạo thử cấu trúc các thư mục và file trống tương tự mô tả cấu trúc dự án To-Do App ở phần nội dung chính trong thư mục code của bạn.
2. Viết thử một module `math.js` có các named export là `cong(a, b)`, `tru(a, b)` và default export là đối tượng `calculator`. Viết file `main.js` import các hàm đó về chạy thử.
3. Giải thích tại sao việc viết code dạng Module lại giúp nhiều lập trình viên có thể làm việc trên cùng một dự án dễ dàng hơn.

<details>
<summary><b>💡 Gợi ý / Hướng dẫn thực hành từng bước</b></summary>

### Yêu cầu 1: Thiết lập cấu trúc thư mục
* Tạo một thư mục cha tên `todo-modules` chứa:
  * Thư mục `js/`
    * `js/api.js` (rỗng)
    * `js/storage.js` (rỗng)
    * `js/dom.js` (rỗng)
  * `main.js`
  * `index.html`
  * `styles.css`

### Yêu cầu 2: Viết module `math.js` và `main.js`
* Tạo file `js/math.js`:
  ```javascript
  // Named exports
  export function cong(a, b) {
      return a + b;
  }

  export function tru(a, b) {
      return a - b;
  }

  // Default export
  const calculator = {
      description: "Máy tính đơn giản bằng ES6 Module",
      nhan: (a, b) => a * b,
      chia: (a, b) => {
          if (b === 0) return "Không thể chia cho 0";
          return a / b;
      }
  };

  export default calculator;
  ```
* Tạo file `main.js` (import tài nguyên từ `math.js`):
  ```javascript
  // Lưu ý: Phải ghi rõ đuôi mở rộng '.js' đối với native ES Modules trong trình duyệt
  import calculator, { cong, tru } from './js/math.js';

  console.log(calculator.description);
  console.log("Cộng 5 + 3 =", cong(5, 3));
  console.log("Trừ 10 - 4 =", tru(10, 4));
  console.log("Nhân 2 * 6 =", calculator.nhan(2, 6));
  ```
* Nhúng `main.js` vào file `index.html` với thuộc tính `type="module"`:
  ```html
  <script type="module" src="main.js"></script>
  ```
* Chạy trang web bằng Live Server (hoặc Vite) và kiểm tra tab Console để xem kết quả hoạt động.

### Yêu cầu 3: Lợi ích của Module trong làm việc nhóm
* **Tránh xung đột tên (Scope Isolation)**: Mỗi lập trình viên có thể viết biến, hàm có tên trùng nhau (ví dụ: `data`, `config`) trong file của họ mà không sợ đè lên biến của người khác khi gộp code, vì biến chỉ tồn tại nội bộ trong file module đó.
* **Dễ bảo trì và quản lý**: Dự án được chia nhỏ thành các file độc lập thực hiện các nhiệm vụ riêng biệt (ví dụ: một người làm phần giao diện UI, một người làm phần kết nối API). Khi có lỗi xảy ra ở phần nào, chỉ cần tìm và sửa đúng file tương ứng mà không làm ảnh hưởng đến các phần khác.

</details>

---

## 🔗 Tài liệu tham khảo

- [JavaScript.info: Modules introduction](https://javascript.info/modules-intro)
- [MDN: JavaScript modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
