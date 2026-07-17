# Buổi 7: Web Storage APIs & JSON

**Loại buổi**: Lý thuyết  
**Thời lượng**: 120 phút  
**Dự án**: ZenTask (To-Do App) - Lưu trữ dữ liệu bền vững ở trình duyệt phía Client

---

## 🎯 Mục tiêu học tập

Sau buổi học này, bạn sẽ có thể:

- ✅ Giải thích sự khác biệt giữa hai loại lưu trữ: `localStorage` và `sessionStorage`
- ✅ Sử dụng thành thạo các phương thức của Web Storage API (`setItem`, `getItem`, `removeItem`, `clear`)
- ✅ Hiểu rõ định dạng dữ liệu JSON và cơ chế tuần tự hóa (serialization) bằng `JSON.stringify` và `JSON.parse`
- ✅ Giải quyết được vấn đề mất dữ liệu khi F5 (reload) trình duyệt trong ứng dụng web

---

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

Nếu bạn cố tình truyền một mảng hoặc đối tượng vào:
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

1. Hãy mở tab Application trên Chrome Developer Tools (F12) và xem thử trang web polytuts hiện tại đang lưu trữ những giá trị nào trong LocalStorage.
2. Viết một đoạn code lưu trữ thông tin cấu hình cá nhân của người dùng bao gồm: `{ theme: 'dark', fontSize: 16, notifications: true }` vào `localStorage`. Viết hàm đọc ra và kiểm tra xem đối tượng có đọc đúng kiểu dữ liệu hay không.
3. Giải thích tại sao dung lượng lưu trữ của LocalStorage lại bị hạn chế khoảng 5MB - 10MB thay vì cho phép lưu không giới hạn.

<details>
<summary><b>💡 Gợi ý / Hướng dẫn thực hành từng bước</b></summary>

### Yêu cầu 1: Xem LocalStorage trên Chrome DevTools
* Mở bất kỳ trang web nào (ví dụ: `http://localhost:5173` hoặc trang web bạn đang chạy).
* Nhấn `F12` hoặc click chuột phải chọn **Inspect** (Kiểm tra).
* Chuyển qua tab **Application** (hoặc **Storage** trên Firefox/Safari).
* Ở menu bên trái, tìm mục **Local Storage** và click vào tên miền trang web của bạn để xem danh sách các cặp key-value đang được lưu trữ.

### Yêu cầu 2: Lưu và đọc cấu hình cá nhân bằng JSON
* **Lưu dữ liệu**: Sử dụng `JSON.stringify` để chuyển object thành chuỗi JSON trước khi lưu:
  ```javascript
  const userSettings = {
      theme: 'dark',
      fontSize: 16,
      notifications: true
  };
  
  // Lưu vào localStorage dưới key là 'user_settings'
  localStorage.setItem('user_settings', JSON.stringify(userSettings));
  ```
* **Đọc dữ liệu**: Sử dụng `localStorage.getItem` và `JSON.parse` để chuyển ngược từ chuỗi JSON về dạng Object gốc trong JS:
  ```javascript
  const rawSettings = localStorage.getItem('user_settings');
  
  if (rawSettings) {
      const settings = JSON.parse(rawSettings);
      console.log("Cấu hình người dùng:", settings);
      console.log("Kiểu dữ liệu của fontSize:", typeof settings.fontSize); // Sẽ in ra: 'number' (đúng kiểu gốc)
      console.log("Kiểu dữ liệu của notifications:", typeof settings.notifications); // Sẽ in ra: 'boolean'
  }
  ```

### Yêu cầu 3: Tại sao LocalStorage bị giới hạn dung lượng?
* **Lý do bảo mật & hiệu năng**: 
  1. *Hiệu năng*: LocalStorage hoạt động đồng bộ (synchronous). Khi đọc/ghi dữ liệu lớn, nó sẽ block main thread của trình duyệt, làm đơ/chậm giao diện người dùng.
  2. *Hạn chế rác*: Nếu cho phép lưu không giới hạn, các website độc hại có thể ghi đầy ổ cứng của người dùng bằng dữ liệu rác, gây ảnh hưởng đến hệ điều hành và các ứng dụng khác.

</details>

---

## 🔗 Tài liệu tham khảo

- [MDN: Window.localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [JavaScript.info: LocalStorage, sessionStorage](https://javascript.info/localstorage)
- [MDN: JSON.stringify()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
