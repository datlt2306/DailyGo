# Buổi 1: React là gì? Vite Setup & JSX

## 🎯 Mục tiêu học tập (SMART)

Sau buổi học này, học viên sẽ có thể:

1. ✅ Giải thích được **React là gì** và tại sao sử dụng React (2 phút)
2. ✅ Cài đặt được **Vite + React** và chạy được ứng dụng đầu tiên (5 phút)
3. ✅ Hiểu được **JSX là gì** và viết được JSX đơn giản (10 phút)
4. ✅ Phân biệt được **JavaScript thuần vs JSX** (10 phút)
5. ✅ Tạo được **component đơn giản** và render ra màn hình (5 phút)

## 📋 Nội dung chính

### 1. React là gì?

**React** là một thư viện JavaScript mã nguồn mở, được phát triển bởi Facebook, dùng để xây dựng giao diện người dùng (UI).

#### Tại sao học React?

-   ✅ **Phổ biến**: 40%+ website sử dụng React
-   ✅ **Dễ học**: Cú pháp đơn giản, dễ hiểu
-   ✅ **Component-based**: Tái sử dụng code dễ dàng
-   ✅ **Hiệu suất cao**: Virtual DOM giúp render nhanh
-   ✅ **Cộng đồng lớn**: Nhiều tài liệu, tutorial, thư viện

#### So sánh: Vanilla JS vs React

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

➡️ **React ngắn gọn, dễ đọc, dễ maintain hơn!**

### 2. Setup Vite + React

**Vite** là công cụ build tool nhanh chóng, hiện đại để phát triển React.

#### Cài đặt

```bash
# Tạo project mới
npm create vite@latest my-react-app -- --template react

# Di chuyển vào thư mục
cd my-react-app

# Cài đặt dependencies
npm install

# Chạy development server
npm run dev
```

#### Cấu trúc thư mục

```
my-react-app/
├── index.html          # File HTML chính
├── package.json        # Quản lý dependencies
├── vite.config.js      # Cấu hình Vite
├── public/             # File tĩnh (images, favicon)
└── src/
    ├── main.jsx        # Entry point
    ├── App.jsx         # Component chính
    └── App.css         # Styles
```

### 3. JSX là gì?

**JSX** (JavaScript XML) là một cú pháp mở rộng cho phép viết HTML trong JavaScript.

#### Đặc điểm JSX

**✅ Phải có 1 element duy nhất ở root**

```javascript
// ❌ SAI
return (
    <h1>Title</h1>
    <p>Content</p>
);

// ✅ ĐÚNG - Dùng Fragment
return (
    <>
        <h1>Title</h1>
        <p>Content</p>
    </>
);
```

**✅ Tên thuộc tính khác HTML**

```javascript
// HTML
<div class="container" onclick="handleClick()">Click</div>

// JSX
<div className="container" onClick={handleClick}>Click</div>
```

**✅ Dùng `{}` cho JavaScript expressions**

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

**✅ Tự động escape để chống XSS**

```javascript
const userInput = '<script>alert("hack")</script>';

// An toàn, không thực thi script
return <div>{userInput}</div>; // Hiển thị dưới dạng text
```

### 4. Component đầu tiên

**Component** là các khối xây dựng độc lập, có thể tái sử dụng của React.

::: code-group

```javascript [App.jsx]
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

**Mục tiêu**: Tạo component hiển thị thông tin cá nhân

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

**Mục tiêu**: Hiển thị kết quả tính toán

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

## 🧪 Bài tập Lab

### Lab 1: Thẻ sinh viên (30 phút)

**Yêu cầu**: Tạo component `StudentCard` hiển thị thông tin của bạn

```javascript [StudentCard.jsx]
function StudentCard() {
    // TODO: Thêm thông tin của bạn
    const name = "Nhập tên của bạn";
    const dob = "dd/mm/yyyy";
    const hometown = "Nhập quê quán";
    const hobby = "Nhập sở thích";

    return <div className="student-card">{/* TODO: Hiển thị thông tin */}</div>;
}

export default StudentCard;
```

**Định dạng**:

-   Họ tên (font to, màu xanh)
-   Ngày sinh
-   Quê quán
-   Sở thích
-   Tuổi (tính tự động)

**Gợi ý**: Dùng `new Date().getFullYear() - yearOfBirth` để tính tuổi

### Lab 2: Component danh sách (20 phút)

**Yêu cầu**: Tạo component `StudentList` hiển thị 3 bạn trong lớp

```javascript [StudentList.jsx]
function StudentList() {
    const students = ["Nguyễn Văn A", "Trần Thị B", "Lê Văn C"];

    return (
        <div className="student-list">
            <h2>Danh sách sinh viên</h2>
            {/* TODO: Render danh sách */}
        </div>
    );
}

export default StudentList;
```

**Gợi ý**: Dùng `.map()` để render từng item

---

## 📝 Tổng kết

### Điểm chính

-   ✅ React là library để xây dựng UI
-   ✅ Vite là công cụ build nhanh, hiện đại
-   ✅ JSX cho phép viết HTML trong JavaScript
-   ✅ Component là khối xây dựng của React
-   ✅ Dùng `{}` để nhúng JavaScript vào JSX

### Checklist buổi 1

-   [ ] Setup được Vite + React
-   [ ] Hiểu được JSX syntax
-   [ ] Tạo được component đầu tiên
-   [ ] Hoàn thành Lab 1 & Lab 2

### Chuẩn bị buổi 2

📚 Đọc trước:

-   Component & Props
-   Cách truyền dữ liệu giữa components

---

**Xem thêm**: [React Documentation - JSX](https://react.dev/learn/writing-markup-with-jsx)
