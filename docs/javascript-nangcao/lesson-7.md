# Buổi 7: Web Storage APIs & JSON
**Dự án**: ZenTask (To-Do App) - Lưu trữ dữ liệu bền vững ở trình duyệt phía Client

---

## 🎯 Mục tiêu buổi học

> **Thầy mong muốn sau buổi học này, các em sẽ đạt được:**

> **Thầy mong muốn sau buổi học này, các em sẽ đạt được:**
Sau buổi học này, các em sẽ có thể:
1. ✅ Giải thích sự khác biệt giữa hai loại lưu trữ: `localStorage` và `sessionStorage`
2. ✅ Sử dụng thành thạo các phương thức của Web Storage API (`setItem`, `getItem`, `removeItem`, `clear`)
3. ✅ Hiểu rõ định dạng dữ liệu JSON và cơ chế tuần tự hóa (serialization) bằng `JSON.stringify` và `JSON.parse`
4. ✅ Giải quyết được vấn đề mất dữ liệu khi F5 (reload) trình duyệt trong ứng dụng web

## 🧠 Nội dung chính

### 1. Web Storage API là gì?

Trước khi có HTML5, cách duy nhất để trình duyệt ghi nhớ thông tin người dùng là thông qua **Cookies** (dung lượng rất nhỏ và luôn gửi kèm mỗi request lên server, làm chậm đường truyền).

**Web Storage API** ra đời cung cấp giải pháp lưu trữ dữ liệu dạng **Key - Value (Khóa - Giá trị)** trực tiếp trên trình duyệt web của client với dung lượng lớn hơn nhiều (khoảng 5MB - 10MB tùy trình duyệt).

Web Storage API gồm hai cơ chế lưu trữ:

| Tiêu chí | LocalStorage | SessionStorage |
| --- | --- | --- |
| **Thời gian tồn tại** | Vĩnh viễn (không bao giờ mất đi trừ khi người dùng xóa bộ nhớ cache hoặc code chủ động xóa). | Tạm thời (mất đi ngay lập tức khi đóng Tab hoặc đóng Trình duyệt). |
| **Phạm vi hoạt động** | Chia sẻ giữa tất cả các Tab/Cửa sổ mở cùng một Tên miền (Origin). | Chỉ hoạt động duy nhất trong Tab hiện tại đang chạy. |
| **Dung lượng** | Khoảng 5MB - 10MB | Khoảng 5MB |

---

### 2. Các phương thức làm việc với Web Storage

Cả `localStorage` và `sessionStorage` đều sử dụng chung các phương thức cơ bản sau:

#### 2.1. Ghi dữ liệu (`setItem`)
```javascript
// Cú pháp: storage.setItem('key', 'value')
localStorage.setItem('theme', 'dark');
localStorage.setItem('username', 'TrongDat');
```

#### 2.2. Đọc dữ liệu (`getItem`)
Nếu không tìm thấy khóa, phương thức trả về `null`.
```javascript
const theme = localStorage.getItem('theme'); // "dark"
const age = localStorage.getItem('age'); // null
```

#### 2.3. Xóa dữ liệu (`removeItem`)
Xóa một khóa cụ thể ra khỏi bộ nhớ.
```javascript
localStorage.removeItem('username');
```

#### 2.4. Xóa sạch bộ nhớ (`clear`)
Xóa tất cả các khóa lưu trữ thuộc domain hiện tại.
```javascript
localStorage.clear();
```

---

### 3. JSON & Kỹ thuật chuyển đổi kiểu dữ liệu phức tạp

**⚠️ Hạn chế cực lớn của Web Storage:** Chỉ cho phép lưu trữ dữ liệu dạng **Chuỗi văn bản (String)**.

Nếu các em cố tình truyền một mảng hoặc đối tượng vào:
```javascript
const list = [1, 2, 3];
localStorage.setItem('myList', list);
console.log(localStorage.getItem('myList')); // "1,2,3" (Bị tự động ép kiểu sang string)

const user = { name: 'A', age: 20 };
localStorage.setItem('user', user);
console.log(localStorage.getItem('user')); // "[object Object]" (Mất hoàn toàn cấu trúc đối tượng ban đầu!)
```

Để khắc phục điều này, ta sử dụng **JSON (JavaScript Object Notation)** để biến đổi dữ liệu phức tạp thành chuỗi văn bản trước khi lưu, và khôi phục lại khi đọc.

#### 3.1. `JSON.stringify()` (Tuần tự hóa - Serialization)
Chuyển đổi một đối tượng hoặc mảng JavaScript thành chuỗi định dạng JSON để lưu trữ.
```javascript
const user = { name: 'A', age: 20 };
const jsonString = JSON.stringify(user); // '{"name":"A","age":20}'
localStorage.setItem('user', jsonString); // Lưu trữ chuỗi JSON an toàn
```

#### 3.2. `JSON.parse()` (Giải tuần tự hóa - Deserialization)
Chuyển đổi một chuỗi định dạng JSON đọc được từ Storage trở lại thành đối tượng hoặc mảng JavaScript gốc để xử lý.
```javascript
const savedData = localStorage.getItem('user'); // '{"name":"A","age":20}'
const userObj = JSON.parse(savedData); // { name: 'A', age: 20 }
console.log(userObj.name); // "A"
```

---

## 💻 Ví dụ minh họa: Quản lý trạng thái LocalStorage cho Todo

Đoạn code dưới đây mô phỏng quy trình đọc/ghi State ứng dụng To-Do bền vững:

```javascript
const STORAGE_KEY = 'todo_app_tasks';

// 1. Hàm đọc dữ liệu khi khởi chạy ứng dụng
function loadTasksFromStorage() {
    const rawData = localStorage.getItem(STORAGE_KEY);
    
    // Nếu chưa có dữ liệu trong LocalStorage, trả về mảng rỗng mặc định
    if (!rawData) {
        return [];
    }
    
    try {
        return JSON.parse(rawData);
    } catch (error) {
        console.error('Lỗi phân tích cú pháp JSON trong LocalStorage:', error);
        return [];
    }
}

// 2. Hàm ghi dữ liệu mỗi khi mảng thay đổi
function saveTasksToStorage(tasks) {
    const jsonString = JSON.stringify(tasks);
    localStorage.setItem(STORAGE_KEY, jsonString);
}

// Thử nghiệm
let myTasks = loadTasksFromStorage();
console.log('Công việc hiện tại:', myTasks);

// Thêm mới công việc và lưu lại
myTasks.push({ id: Date.now(), ten: 'Học LocalStorage', hoanThanh: false });
saveTasksToStorage(myTasks);
```

---

## 📝 Bài tập về nhà

1. Các em các em các em hãy mở tab Application trên Chrome Developer Tools (F12) và xem thử trang web polytuts hiện tại đang lưu trữ những giá trị nào trong LocalStorage.
2. Viết một đoạn code lưu trữ thông tin cấu hình cá nhân của người dùng bao gồm: `{ theme: 'dark', fontSize: 16, notifications: true }` vào `localStorage`. Viết hàm đọc ra và kiểm tra xem đối tượng có đọc đúng kiểu dữ liệu hay không.
3. Giải thích tại sao dung lượng lưu trữ của LocalStorage lại bị hạn chế khoảng 5MB - 10MB thay vì cho phép lưu không giới hạn.

---

## 🔗 Tài liệu tham khảo

- [MDN: Window.localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [JavaScript.info: LocalStorage, sessionStorage](https://javascript.info/localstorage)
- [MDN: JSON.stringify()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
