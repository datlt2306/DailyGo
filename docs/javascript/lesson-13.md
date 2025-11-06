# Buổi 13: Module, ES6+ & Refactor Code

**Loại buổi**: Lý thuyết  
**Thời lượng**: 120 phút  
**Dự án**: To-Do App (đã có API từ buổi 12)

---

## 🎯 Mục tiêu học tập

Sau buổi học này, bạn sẽ có thể:

-   ✅ Hiểu ES6 Modules và cách sử dụng
-   ✅ Sử dụng import/export để tổ chức code
-   ✅ Áp dụng các tính năng ES6+ (arrow functions, template literals, spread, rest)
-   ✅ Refactor code để dễ bảo trì và mở rộng
-   ✅ Áp dụng best practices và naming conventions
-   ✅ Tổ chức code theo module

---

## 🧠 Nội dung chính

### 1. ES6 Modules

**Module** giúp chia code thành các file riêng biệt, dễ quản lý và tái sử dụng.

#### 1.1. Export - Xuất dữ liệu

**Named Export (Xuất có tên):**

```javascript
// math.js
export function cong(a, b) {
    return a + b;
}

export function tru(a, b) {
    return a - b;
}

export const PI = 3.14;

// Hoặc export ở cuối file
function cong(a, b) {
    return a + b;
}

function tru(a, b) {
    return a - b;
}

export { cong, tru };
```

**Default Export (Xuất mặc định):**

```javascript
// utils.js
export default function formatDate(date) {
    return date.toLocaleDateString('vi-VN');
}

// Hoặc
function formatDate(date) {
    return date.toLocaleDateString('vi-VN');
}

export default formatDate;
```

**Một file có thể có:**

-   Nhiều named exports
-   Chỉ 1 default export

#### 1.2. Import - Nhập dữ liệu

**Import Named Exports:**

```javascript
// Cách 1: Import tất cả
import { cong, tru, PI } from "./math.js";

// Cách 2: Import và đổi tên
import { cong as add, tru as subtract } from "./math.js";

// Cách 3: Import tất cả vào một object
import * as math from "./math.js";
console.log(math.cong(1, 2));
```

**Import Default Export:**

```javascript
import formatDate from './utils.js';
// Hoặc đổi tên
import formatDate as format from './utils.js';
```

**Import cả hai:**

```javascript
import formatDate, { cong, tru } from "./utils.js";
```

#### 1.3. Sử dụng trong HTML

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Modules</title>
    </head>
    <body>
        <script type="module" src="main.js"></script>
    </body>
</html>
```

**⚠️ Lưu ý:**

-   Phải có `type="module"` trong thẻ `<script>`
-   File phải có extension `.js`
-   Modules chạy ở strict mode
-   Modules có scope riêng (không global)

### 2. Các tính năng ES6+ quan trọng

#### 2.1. Arrow Functions (Đã học ở buổi 3)

```javascript
// Function thường
function cong(a, b) {
    return a + b;
}

// Arrow function
const cong = (a, b) => a + b;

// Trong map, filter
const soChan = [1, 2, 3, 4].filter((x) => x % 2 === 0);
```

#### 2.2. Template Literals

```javascript
// Cách cũ
let hoTen = "Nguyễn Văn A";
let tuoi = 20;
let thongBao = "Xin chào " + hoTen + ", bạn " + tuoi + " tuổi";

// Template literal (ES6)
let thongBao = `Xin chào ${hoTen}, bạn ${tuoi} tuổi`;

// Multi-line
let html = `
    <div>
        <h1>${hoTen}</h1>
        <p>Tuổi: ${tuoi}</p>
    </div>
`;
```

#### 2.3. Spread Operator (...)

**Spread trong Array:**

```javascript
// Copy mảng
let arr1 = [1, 2, 3];
let arr2 = [...arr1]; // [1, 2, 3]

// Nối mảng
let arr3 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

// Truyền tham số
function cong(a, b, c) {
    return a + b + c;
}
let so = [1, 2, 3];
console.log(cong(...so)); // 6
```

**Spread trong Object:**

```javascript
// Copy object
let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1 }; // { a: 1, b: 2 }

// Merge object
let obj3 = { ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }
let obj4 = { ...obj1, b: 99 }; // { a: 1, b: 99 } (ghi đè)

// Update object (immutable)
let congViec = { id: 1, ten: "CV 1", trangThai: "chua lam" };
let congViecMoi = { ...congViec, trangThai: "hoan thanh" };
```

#### 2.4. Rest Parameters

```javascript
// Nhận nhiều tham số
function cong(...so) {
    return so.reduce((tong, x) => tong + x, 0);
}

console.log(cong(1, 2, 3, 4)); // 10

// Kết hợp với tham số khác
function gioiThieu(ten, ...sởThich) {
    console.log(`${ten} thích: ${sởThich.join(", ")}`);
}

gioiThieu("An", "đọc sách", "nghe nhạc", "xem phim");
// "An thích: đọc sách, nghe nhạc, xem phim"
```

#### 2.5. Destructuring (Đã học ở buổi 5)

```javascript
// Array
let [a, b, c] = [1, 2, 3];

// Object
let { hoTen, tuoi } = { hoTen: "A", tuoi: 20 };

// Trong tham số hàm
function inThongTin({ hoTen, tuoi }) {
    console.log(`${hoTen}, ${tuoi} tuổi`);
}
```

#### 2.6. Optional Chaining (?.)

```javascript
let user = {
    name: "A",
    address: {
        city: "HCM",
    },
};

// Cách cũ (lỗi nếu null/undefined)
let city = user.address.city; // Lỗi nếu address là null

// Optional chaining (an toàn)
let city = user.address?.city; // undefined nếu address là null
let city2 = user.address?.city?.name; // Nested

// Với method
user.getName?.(); // Chỉ gọi nếu tồn tại
```

#### 2.7. Nullish Coalescing (??)

```javascript
// || trả về giá trị mặc định nếu falsy (0, '', false, null, undefined)
let value1 = 0 || "mặc định"; // 'mặc định' (0 là falsy)

// ?? chỉ trả về mặc định nếu null hoặc undefined
let value2 = 0 ?? "mặc định"; // 0
let value3 = null ?? "mặc định"; // 'mặc định'
let value4 = undefined ?? "mặc định"; // 'mặc định'
```

### 3. Refactor Code - Tổ chức lại code

#### 3.1. Tách code thành modules

**Trước khi refactor (tất cả trong 1 file):**

```javascript
// main.js - 200+ dòng code
let danhSachCongViec = [];

function luuStorage() {
    localStorage.setItem("congViec", JSON.stringify(danhSachCongViec));
}

function layStorage() {
    let data = localStorage.getItem("congViec");
    if (data) {
        danhSachCongViec = JSON.parse(data);
    }
}

function hienThiDanhSach() {
    let ul = document.querySelector("#danh-sach");
    ul.innerHTML = "";
    danhSachCongViec.forEach((cv) => {
        let li = document.createElement("li");
        li.textContent = cv.ten;
        ul.appendChild(li);
    });
}

// ... nhiều hàm khác
```

**Sau khi refactor (chia thành modules):**

```javascript
// storage.js
export function luuStorage(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
        return true;
    } catch (error) {
        console.error("Lỗi lưu Storage:", error);
        return false;
    }
}

export function layStorage(key, defaultValue = null) {
    try {
        let data = localStorage.getItem(key);
        return data ? JSON.parse(data) : defaultValue;
    } catch (error) {
        console.error("Lỗi đọc Storage:", error);
        return defaultValue;
    }
}
```

```javascript
// dom.js
export function taoElement(tag, className, textContent) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (textContent) element.textContent = textContent;
    return element;
}

export function hienThiDanhSach(danhSach, containerId) {
    const container = document.querySelector(containerId);
    container.innerHTML = "";

    danhSach.forEach((item) => {
        const li = taoElement("li", "cong-viec-item", item.ten);
        container.appendChild(li);
    });
}
```

```javascript
// api.js
const API_BASE = "https://api.example.com/cong-viec";

export async function layDanhSach() {
    const response = await fetch(API_BASE);
    if (!response.ok) throw new Error("Lỗi khi lấy dữ liệu");
    return await response.json();
}

export async function taoCongViec(congViec) {
    const response = await fetch(API_BASE, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(congViec),
    });
    if (!response.ok) throw new Error("Lỗi khi tạo");
    return await response.json();
}
```

```javascript
// main.js
import { luuStorage, layStorage } from "./storage.js";
import { hienThiDanhSach } from "./dom.js";
import { layDanhSach, taoCongViec } from "./api.js";

let danhSachCongViec = [];

async function khoiTao() {
    danhSachCongViec = await layDanhSach();
    hienThiDanhSach(danhSachCongViec, "#danh-sach");
}

khoiTao();
```

#### 3.2. Tách logic thành hàm nhỏ

**Trước:**

```javascript
function xuLyForm() {
    let ten = document.querySelector("#ten").value;
    let moTa = document.querySelector("#mo-ta").value;

    if (ten === "") {
        alert("Vui lòng nhập tên!");
        return;
    }

    let congViec = { id: Date.now(), ten, moTa };
    danhSachCongViec.push(congViec);
    localStorage.setItem("congViec", JSON.stringify(danhSachCongViec));

    let ul = document.querySelector("#danh-sach");
    ul.innerHTML = "";
    danhSachCongViec.forEach((cv) => {
        let li = document.createElement("li");
        li.textContent = cv.ten;
        ul.appendChild(li);
    });

    document.querySelector("#ten").value = "";
    document.querySelector("#mo-ta").value = "";
}
```

**Sau:**

```javascript
function layGiaTriForm() {
    return {
        ten: document.querySelector("#ten").value.trim(),
        moTa: document.querySelector("#mo-ta").value.trim(),
    };
}

function kiemTraDuLieu(ten) {
    if (ten === "") {
        throw new Error("Vui lòng nhập tên công việc!");
    }
}

function resetForm() {
    document.querySelector("#ten").value = "";
    document.querySelector("#mo-ta").value = "";
}

function xuLyForm() {
    try {
        const { ten, moTa } = layGiaTriForm();
        kiemTraDuLieu(ten);

        const congViec = { id: Date.now(), ten, moTa };
        themCongViec(congViec);
        hienThiDanhSach();
        resetForm();
    } catch (error) {
        alert(error.message);
    }
}
```

#### 3.3. Sử dụng constants

```javascript
// constants.js
export const STORAGE_KEY = "danhSachCongViec";
export const API_BASE = "https://api.example.com/cong-viec";
export const TRANG_THAI = {
    CHUA_LAM: "chua lam",
    DANG_LAM: "dang lam",
    HOAN_THANH: "hoan thanh",
};

// Sử dụng
import { STORAGE_KEY, TRANG_THAI } from "./constants.js";
localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
```

### 4. Best Practices & Naming Conventions

#### 4.1. Naming Conventions

**Biến và hàm:**

-   camelCase: `tenBien`, `layDuLieu()`
-   Mô tả rõ ràng: `danhSachCongViec` thay vì `ds`
-   Boolean: `is`, `has`, `can`: `isActive`, `hasPermission`, `canEdit`

**Constants:**

-   UPPER_SNAKE_CASE: `API_BASE`, `MAX_ITEMS`

**Classes:**

-   PascalCase: `TodoItem`, `UserService`

**Files:**

-   kebab-case: `todo-item.js`, `user-service.js`

#### 4.2. Code Organization

```
src/
├── constants.js      # Constants
├── utils.js          # Helper functions
├── storage.js        # LocalStorage operations
├── api.js            # API calls
├── dom.js            # DOM manipulation
├── services/
│   └── todo-service.js
├── components/
│   └── todo-item.js
└── main.js           # Entry point
```

#### 4.3. Single Responsibility

Mỗi hàm/module chỉ làm 1 việc:

```javascript
// ❌ Tốt
function validateInput(input) {
    return input.trim().length > 0;
}

function saveToStorage(data) {
    localStorage.setItem("key", JSON.stringify(data));
}

// ❌ Xấu (làm nhiều việc)
function validateAndSave(input, data) {
    if (input.trim().length > 0) {
        localStorage.setItem("key", JSON.stringify(data));
    }
}
```

#### 4.4. DRY (Don't Repeat Yourself)

```javascript
// ❌ Xấu (lặp lại)
function themCongViec1() {
    let ten = document.querySelector("#ten1").value;
    // ...
}

function themCongViec2() {
    let ten = document.querySelector("#ten2").value;
    // ...
}

// ✅ Tốt (tái sử dụng)
function layGiaTriInput(selector) {
    return document.querySelector(selector).value;
}

function themCongViec(selector) {
    let ten = layGiaTriInput(selector);
    // ...
}
```

---

## 💻 Ví dụ minh họa

### Ví dụ: Refactor To-Do App

**Cấu trúc thư mục:**

```
todo-app/
├── index.html
├── src/
│   ├── constants.js
│   ├── storage.js
│   ├── api.js
│   ├── dom.js
│   ├── utils.js
│   └── main.js
└── styles.css
```

**constants.js:**

```javascript
export const STORAGE_KEY = "todoApp_data";
export const API_BASE = "http://localhost:3000/todos";
export const SELECTORS = {
    FORM: "#todo-form",
    INPUT: "#todo-input",
    LIST: "#todo-list",
};
```

**storage.js:**

```javascript
import { STORAGE_KEY } from "./constants.js";

export const Storage = {
    save: (data) => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
            return true;
        } catch (error) {
            console.error("Lỗi lưu:", error);
            return false;
        }
    },

    load: (defaultValue = []) => {
        try {
            const data = localStorage.getItem(STORAGE_KEY);
            return data ? JSON.parse(data) : defaultValue;
        } catch (error) {
            console.error("Lỗi đọc:", error);
            return defaultValue;
        }
    },
};
```

**dom.js:**

```javascript
export const DOM = {
    createElement: (tag, className, textContent) => {
        const el = document.createElement(tag);
        if (className) el.className = className;
        if (textContent) el.textContent = textContent;
        return el;
    },

    renderList: (items, containerId, renderItem) => {
        const container = document.querySelector(containerId);
        container.innerHTML = "";
        items.forEach((item) => {
            container.appendChild(renderItem(item));
        });
    },
};
```

**main.js:**

```javascript
import { SELECTORS } from "./constants.js";
import { Storage } from "./storage.js";
import { DOM } from "./dom.js";
import { API } from "./api.js";

let todos = [];

async function init() {
    todos = await API.getAll();
    render();
}

function render() {
    DOM.renderList(todos, SELECTORS.LIST, createTodoItem);
}

function createTodoItem(todo) {
    const li = DOM.createElement("li", "todo-item", null);
    li.innerHTML = `
        <span>${todo.title}</span>
        <button data-id="${todo.id}">Xóa</button>
    `;
    return li;
}

init();
```

---

## 🧪 Quiz cuối buổi (7 câu)

### Câu 1: File có thể có bao nhiêu default export?

A. 0  
B. 1  
C. Nhiều  
D. Không giới hạn

**Đáp án: B**

### Câu 2: `import { a } from './file.js'` là import gì?

A. Default export  
B. Named export  
C. Cả hai  
D. Không phải

**Đáp án: B**

### Câu 3: `[...arr1, ...arr2]` làm gì?

A. Copy mảng  
B. Nối mảng  
C. Xóa mảng  
D. Lỗi

**Đáp án: B**

### Câu 4: `user?.name` trả về gì nếu user là null?

A. `null`  
B. `undefined`  
C. Lỗi  
D. `''`

**Đáp án: B**

### Câu 5: `0 ?? 'default'` trả về gì?

A. `0`  
B. `'default'`  
C. `null`  
D. `undefined`

**Đáp án: A**

### Câu 6: Naming convention cho constant là gì?

A. camelCase  
B. UPPER_SNAKE_CASE  
C. PascalCase  
D. kebab-case

**Đáp án: B**

### Câu 7: Module chạy ở mode nào?

A. Strict mode  
B. Normal mode  
C. Tùy cấu hình  
D. Không có mode

**Đáp án: A**

---

## 📝 Bài tập về nhà (chuẩn bị cho buổi 14)

1. Tách code To-Do App thành các modules:

    - `storage.js`: Xử lý LocalStorage
    - `dom.js`: Thao tác DOM
    - `api.js`: Gọi API
    - `utils.js`: Helper functions
    - `main.js`: Logic chính

2. Refactor các hàm lớn thành hàm nhỏ
3. Sử dụng constants cho các giá trị cố định
4. Áp dụng ES6+ features (arrow functions, template literals, spread...)

---

## 🔗 Tài liệu tham khảo

-   [MDN: ES6 Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
-   [JavaScript.info: Modules](https://javascript.info/modules-intro)

---

**Chúc bạn học tập tốt! 🚀**
