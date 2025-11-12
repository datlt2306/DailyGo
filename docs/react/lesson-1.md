# Buổi 1: React là gì? Cài đặt Vite & JSX

## 🎯 Mục tiêu buổi học

> **Thầy mong muốn sau buổi học này, các em sẽ đạt được:**

1. ✅ Hiểu **React là gì** và tại sao nên chọn React.
2. ✅ Tự cài đặt **Vite + React** và chạy thành công ứng dụng React đầu tiên.
3. ✅ Nhận biết được **JSX** và ứng dụng viết JSX cơ bản.
4. ✅ Phân biệt rõ **JavaScript thuần** với **JSX**.
5. ✅ Tạo được một **component đơn giản** và render ra giao diện.

## 📋 Nội dung chính

### 1. React là gì?

Các em lưu ý, **React** là một thư viện JavaScript mã nguồn mở do Facebook phát triển, giúp lập trình giao diện người dùng (UI) rất hiện đại và hiệu quả.

#### Vì sao chúng ta nên học React?

-   ✅ **Phổ biến**: Hiện nay hơn 40% website sử dụng React.
-   ✅ **Dễ học**: Cú pháp thân thiện, rất phù hợp cho người mới bắt đầu như các em.
-   ✅ **Kiến trúc component**: Code chia nhỏ, tái sử dụng tốt, dễ quản lý UI phức tạp.
-   ✅ **Hiệu suất cao**: Cơ chế Virtual DOM giúp React cập nhật giao diện rất nhanh.
-   ✅ **Cộng đồng lớn**: Tài liệu, thư viện phong phú, dễ dàng tìm việc cũng như học hỏi.

#### So sánh nhanh: Vanilla JS và React

**Vanilla JavaScript (Cách cũ):**

```javascript
// Tạo button động
function createButton(text) {
    const btn = document.createElement("button");
    btn.textContent = text;
    btn.onclick = () => alert("Clicked!");
    return btn;
}

// Thêm vào DOM
document.getElementById("app").appendChild(createButton("Click me"));
```

**React (Cách mới):**

```javascript
function Button({ text }) {
    return <button onClick={() => alert("Clicked!")}>{text}</button>;
}

// Render
<Button text="Click me" />;
```

➡️ **Các em thấy không? React giúp viết code ngắn gọn, dễ đọc và rất dễ mở rộng, bảo trì sau này!**

### 2. Cài đặt Vite + React + TailwindCSS

**Vite** hiện là công cụ build cực kỳ phổ biến để phát triển dự án React. Sau đây, thầy sẽ hướng dẫn các em cách khởi tạo dự án mới:

#### Hướng dẫn cài đặt từng bước

```bash
# Tạo project React mới
npm create vite@latest my-react-app -- --template react

# Di chuyển vào thư mục dự án
cd my-react-app

# Cài đặt các thư viện phụ thuộc
npm install

# Cài TailwindCSS
npm install tailwindcss @tailwindcss/vite

# Chạy ứng dụng
npm run dev
```

#### Cấu hình TailwindCSS với Vite

1. **Sửa file `vite.config.js`:**

```js
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react(), tailwindcss()],
});
```

2. **Cập nhật `src/index.css`:**

```css
@import "tailwindcss";
```

3. **Import file CSS ở `main.jsx`:**

```javascript
import "./index.css";
```

#### Cấu trúc thư mục mẫu

```
my-react-app/
├── index.html         # File HTML chính
├── package.json       # Quản lý phụ thuộc
├── vite.config.js     # Cấu hình Vite
├── public/            # Thư mục chứa file tĩnh (ảnh, favicon, ...)
└── src/
    ├── main.jsx       # Entry point chính
    ├── App.jsx        # Component gốc của ứng dụng
    └── index.css      # Import TailwindCSS
```

### 3. JSX là gì?

JSX (**JavaScript XML**) là cú pháp cho phép viết mã HTML ngay bên trong file JavaScript. Đây là điểm đặc biệt khi lập trình React, giúp code dễ đọc hơn.

#### Các em cần nhớ gì về JSX?

**✅ 1 element ngoài cùng bọc tất cả**

```javascript
// ❌ Sai
return (
    <h1>Title</h1>
    <p>Content</p>
);

// ✅ Đúng – dùng Fragment
return (
    <>
        <h1>Title</h1>
        <p>Content</p>
    </>
);
```

**✅ Thuộc tính trong JSX không hoàn toàn giống HTML**

```javascript
// HTML
<div class="container" onclick="handleClick()">Click</div>

// JSX
<div className="container" onClick={handleClick}>Click</div>
```

**✅ Dùng `{}` để nhúng biến hoặc biểu thức JS**

```javascript
const name = "Nguyễn Văn A";
const age = 20;

return (
    <div>
        <h1>Xin chào {name}</h1>
        <p>Tuổi: {age + 1}</p>
        <p>Là học viên: {true ? "Có" : "Không"}</p>
    </div>
);
```

**✅ React tự động "escape" dữ liệu giúp bảo mật XSS**

```javascript
const userInput = '<script>alert("hack")</script>';

// React KHÔNG thực thi đoạn script này mà chỉ hiển thị dưới dạng text
return <div>{userInput}</div>;
```

### 4. Viết component đầu tiên

Component là gì? Đó là các khối nhỏ, độc lập và tái sử dụng giúp xây dựng giao diện một cách trực quan.

::: code-group

```javascript [App.jsx]
// Giả sử thầy yêu cầu các em tạo một App với lời chào
function App() {
    const greeting = "Chào mừng đến với React!";

    return (
        <div className="container">
            <h1>{greeting}</h1>
            <p>Đây là component đầu tiên của bạn</p>
        </div>
    );
}

export default App;
```

```javascript [main.jsx]
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
```

:::

## 💡 Ví dụ minh họa

### Demo 1: Component đơn giản

**Nhiệm vụ của các em:** Tạo một component hiển thị thông tin cá nhân sinh viên.

```javascript [Profile.jsx]
function Profile() {
    const name = "Nguyễn Văn A";
    const studentId = "SV001";
    const major = "Công nghệ Thông tin";

    return (
        <div className="profile-card">
            <h2>Thông tin sinh viên</h2>
            <p>
                <strong>Họ tên:</strong> {name}
            </p>
            <p>
                <strong>Mã SV:</strong> {studentId}
            </p>
            <p>
                <strong>Ngành học:</strong> {major}
            </p>
        </div>
    );
}

export default Profile;
```

### Demo 2: Tính toán trong JSX

**Nhiệm vụ:** Hiển thị phép tính trực tiếp trong JSX.

```javascript [Calculator.jsx]
function Calculator() {
    const a = 10;
    const b = 20;

    return (
        <div className="calculator">
            <h2>Máy tính đơn giản</h2>
            <p>
                {a} + {b} = {a + b}
            </p>
            <p>
                {a} - {b} = {a - b}
            </p>
            <p>
                {a} × {b} = {a * b}
            </p>
            <p>
                {a} ÷ {b} = {a / b}
            </p>
        </div>
    );
}

export default Calculator;
```

## 🧪 Bài tập Thực hành: Todo List cơ bản

### Mục tiêu

Các em sẽ thực hành tự tay tạo ứng dụng Todo List đơn giản bằng React, JSX và TailwindCSS.

### Lab 1: Xây dựng Todo List

**Yêu cầu:** Viết component `TodoList` để hiện ra danh sách công việc.

#### Bước 1: Tạo component TodoList

```javascript [src/components/TodoList.jsx]
function TodoList() {
    // Hiển thị một số công việc mẫu để các em luyện JSX + Tailwind
    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">📝 Todo List (v1)</h1>

            <ul className="space-y-2">
                <li className="flex items-center p-3 bg-gray-50 rounded border">
                    <span className="flex-1 text-gray-700">Học React</span>
                </li>
                <li className="flex items-center p-3 bg-gray-50 rounded border">
                    <span className="flex-1 text-gray-700">Làm bài tập</span>
                    <span className="text-green-500">✓</span>
                </li>
                <li className="flex items-center p-3 bg-gray-50 rounded border">
                    <span className="flex-1 text-gray-700">Review code</span>
                </li>
            </ul>
        </div>
    );
}

export default TodoList;
```

#### Bước 2: Sử dụng component trong App.jsx

```javascript [src/App.jsx]
import TodoList from "./components/TodoList";

function App() {
    return (
        <div className="min-h-screen bg-gray-100">
            <TodoList />
        </div>
    );
}

export default App;
```

#### Bước 3: Trang trí với TailwindCSS

**Yêu cầu của thầy:**

-   ✅ Sử dụng class TailwindCSS để giao diện đẹp mắt.
-   ✅ Đảm bảo responsive, xem tốt trên nhiều thiết bị.
-   ✅ Layout rõ ràng, dễ nhìn.

**Gợi ý dành cho các em:**

-   `bg-white`, `rounded-lg`, `shadow-lg` cho khung card;
-   `text-2xl`, `font-bold` cho tiêu đề;
-   `space-y-2` tạo khoảng cách các mục;
-   `flex`, `items-center` căn chỉnh bố cục dòng.

👉 _Lưu ý:_ Ở buổi này, các em viết từng `<li>` để làm quen với JSX. Ở buổi 2, các em sẽ học cách dùng `.map()` để render danh sách từ mảng một cách tự động và hiệu quả hơn.

### Kết quả mong đợi

Khi hoàn thành, ứng dụng Todo List của các em cần:

-   ✅ Có tiêu đề "📝 Todo List"
-   ✅ Mỗi công việc nằm trong một card nhỏ riêng biệt
-   ✅ Có icon check cho công việc hoàn thành
-   ✅ Giao diện trình bày bằng TailwindCSS, dễ nhìn

---

## 📝 Tổng kết buổi học

### Các ý chính thầy muốn các em nhớ:

-   ✅ React là thư viện xây dựng UI hiện đại, dễ bảo trì
-   ✅ Vite giúp tạo và build dự án React cực nhanh
-   ✅ JSX cho phép viết HTML trong file JavaScript
-   ✅ Component là đơn vị nhỏ nhất và quan trọng trong React
-   ✅ Có thể nhúng biến, biểu thức vào JSX bằng `{}`

### Checklist buổi 1 cho sinh viên

-   [ ] Cài đặt và chạy thành công dự án React với Vite
-   [ ] Hiểu được cú pháp JSX
-   [ ] Tự viết được component đầu tiên của mình
-   [ ] Hoàn thành các bài Lab thực hành của thầy giao

### Lưu ý chuẩn bị cho buổi 2

📚 Các em nên xem nghiên cứu trước:

-   Component & Props là gì?
-   Cách truyền dữ liệu giữa các components trong React

---

**Tham khảo thêm:** [React Documentation - JSX](https://react.dev/learn/writing-markup-with-jsx)
