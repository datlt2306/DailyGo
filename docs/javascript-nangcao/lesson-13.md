# Buổi 13: ES6 Modules & Kiến trúc ứng dụng
**Dự án**: ZenTask (To-Do App) - Lập kế hoạch tái cấu trúc dự án theo kiến trúc Modular

---

## 🎯 Mục tiêu buổi học

> **Thầy mong muốn sau buổi học này, các em sẽ đạt được:**

> **Thầy mong muốn sau buổi học này, các em sẽ đạt được:**
Sau buổi học này, các em sẽ có thể:
1. ✅ Hiểu rõ tầm quan trọng của việc tổ chức và kiến trúc mã nguồn trong phát triển phần mềm
2. ✅ Sử dụng thành thạo cú pháp import và export của ES6 Modules (Default vs Named Exports)
3. ✅ Phân tách ứng dụng thành các tầng kiến trúc rõ ràng (API, Storage, DOM, Main)
4. ✅ Cấu hình file HTML để chạy mã nguồn JavaScript dưới dạng Module (`type="module"`)

## 🧠 Nội dung chính

### 1. Tại sao phải kiến trúc mã nguồn?

Khi bắt đầu một dự án nhỏ, ta có xu hướng viết tất cả mã nguồn (biến, hàm hiển thị, hàm gọi API, các sự kiện...) vào một file duy nhất (như `main.js`). 
* **Hậu quả**: Khi dự án lớn lên (hàng nghìn dòng code), file này sẽ trở nên cực kỳ phức tạp. Việc tìm kiếm code, sửa lỗi hay thêm tính năng mới trở thành ác mộng.
* **Giải pháp (Modularization)**: Chia nhỏ file mã nguồn khổng lồ thành các file nhỏ hơn gọi là **Modules**, mỗi module chịu trách nhiệm một nhiệm vụ chuyên biệt (Single Responsibility Principle).

---

### 2. ES6 Modules (`import` & `export`)

ES6 giới thiệu hệ thống module chuẩn hóa chạy trực tiếp trên trình duyệt web. Có hai cách xuất (export) dữ liệu từ một module:

#### 2.1. Named Exports (Xuất có đặt tên)
Dùng để xuất nhiều biến, hằng số hoặc hàm từ cùng một file. Khi import, các em phải dùng chính xác tên đó đặt trong cặp ngoặc nhọn `{}`.

* **Xuất (File `utils.js`):**

::: code-group

```javascript [main.js]
export const LIMIT = 10;

export function validateEmail(email) {
    return email.includes('@');
}
```

```javascript [main.js]
import { LIMIT, validateEmail } from './utils.js';

console.log(LIMIT); // 10
console.log(validateEmail('test@gmail.com')); // true
```

:::

#### 2.2. Default Export (Xuất mặc định)
Mỗi file chỉ được phép có duy nhất **một** default export. Thường dùng khi file đó chỉ đại diện cho một class, một component hoặc một tập hợp hàm chính. Khi import, các em có thể đặt tên tùy ý và không dùng ngoặc nhọn `{}`.

* **Xuất (File `api.js`):**

::: code-group

```javascript [main.js]
const apiService = {
    get(url) { /* ... */ },
    post(url, data) { /* ... */ }
};

export default apiService;
```

```javascript [main.js]
import customApi from './api.js'; // Tên đặt tùy ý

customApi.get('http://api.com');
```

:::

---

### 3. Phân chia các lớp kiến trúc cho To-Do App

Trong buổi thực hành tiếp theo, thầy trò mình sẽ chia file `main.js` hiện tại thành cấu trúc sau:

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
1. **Tự động Defer**: Module mặc định được tải song song và chỉ thực thi sau khi cây DOM đã dựng xong (tương tự thuộc tính `defer`). Do đó các em không cần bọc code trong sự kiện `DOMContentLoaded` nữa.
2. **Cơ chế Strict Mode**: Code bên trong module tự động chạy dưới dạng `use strict` (ngăn chặn các lỗi viết code cẩu thả).
3. **Phạm vi riêng (Module Scope)**: Các biến khai báo trong module không bị lộ ra phạm vi toàn cục (global scope), tránh xung đột biến giữa các file.

---

## 📝 Bài tập về nhà

1. Các em các em các em hãy tạo thử cấu trúc các thư mục và file trống tương tự mô tả cấu trúc dự án To-Do App ở phần nội dung chính trong thư mục code của các em.
2. Viết thử một module `math.js` có các named export là `cong(a, b)`, `tru(a, b)` và default export là đối tượng `calculator`. Viết file `main.js` import các hàm đó về chạy thử.
3. Giải thích tại sao việc viết code dạng Module lại giúp nhiều lập trình viên có thể làm việc trên cùng một dự án dễ dàng hơn.

---

## 🔗 Tài liệu tham khảo

- [JavaScript.info: Modules introduction](https://javascript.info/modules-intro)
- [MDN: JavaScript modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
