# Buổi 10: Routing với React Router

## 🎯 Mục tiêu bài học

Các em thân mến, sau buổi học hôm nay thầy mong các em sẽ:

1. ✅ Tự cài đặt React Router vào project React (10’)
2. ✅ Tạo các trang (Route) & chuyển trang dễ dàng trong app (15’)
3. ✅ Biết dùng useNavigate, useParams để xử lý logic điều hướng (10’)
4. ✅ Hiểu cấu trúc Layout, Nested Route trong dự án (10’)
5. ✅ Hoàn thiện Todo App nhiều trang với React Router (15’)

---

## 📋 Nội dung bài học

### 1. Cài đặt React Router

Đầu tiên, các em mở terminal gõ:

```bash
npm install react-router-dom
```

Khi đã cài xong, mình vào file App.js để cấu hình router cơ bản:

```javascript
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    );
}
```

### 2. Tạo navigation chuyển trang

Để chuyển trang, các em dùng 2 component Link và NavLink:

```javascript
import { Link, NavLink } from "react-router-dom";

function Navigation() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <NavLink to="/about">About</NavLink> {/* Tự động highlight khi trang active */}
        </nav>
    );
}
```

### 3. Điều hướng bằng useNavigate

Muốn điều hướng bằng code (ví dụ sau khi đăng nhập), ta dùng useNavigate nhé:

```javascript
import { useNavigate } from "react-router-dom";

function LoginForm() {
    const navigate = useNavigate();

    const handleSubmit = () => {
        // Xử lý đăng nhập xong thì chuyển qua trang dashboard
        navigate("/dashboard");
    };

    return <button onClick={handleSubmit}>Login</button>;
}
```

### 4. Dynamic Route và useParams

Khi muốn đọc dữ liệu động trên URL, ví dụ `/tour/:id`, dùng useParams:

```javascript
// Định nghĩa route
<Route path="/tour/:id" element={<TourDetail />} />;

// Trong component
function TourDetail() {
    const { id } = useParams();
    return <div>Tour ID: {id}</div>;
}
```

### 5. Sử dụng Layout, Nested Routes

Thường mình tạo layout chung chứa header/footer cho nhiều trang con:

```javascript
function Layout() {
    return (
        <div>
            <Header />
            <Routes>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
            </Routes>
            <Footer />
        </div>
    );
}
```

---

## 🧪 Bài tập thực hành: Đa trang cho Todo App

### Mục tiêu

Các em sẽ nâng cấp Todo App thành SPA nhiều trang sử dụng React Router.

---

### Lab 1: Bắt đầu cấu hình Routing cho Todo App (50’)

#### Bước 1: Cài React Router

```bash
npm install react-router-dom
```

#### Bước 2: Tạo các trang cơ bản

::: code-group

```javascript [src/pages/Home.jsx]
function Home() {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">🏠 Trang chủ</h1>
            <p className="text-gray-600">Chào mừng các em đến với Todo App!</p>
        </div>
    );
}

export default Home;
```

```javascript [src/pages/Todos.jsx]
import TodoList from "../components/TodoList";

function Todos() {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">📝 Quản lý Todo</h1>
            <TodoList />
        </div>
    );
}

export default Todos;
```

```javascript [src/pages/About.jsx]
function About() {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">ℹ️ Giới thiệu</h1>
            <p className="text-gray-600">
                Ứng dụng Todo List này thầy xây bằng React và React Router cho các em.
            </p>
        </div>
    );
}

export default About;
```

:::

#### Bước 3: Thêm router vào App.jsx

```javascript [src/App.jsx]
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Todos from "./pages/Todos";
import About from "./pages/About";

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/todos" element={<Todos />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
```

#### Bước 4: Tạo layout có navigation

```javascript [src/components/Layout.jsx]
import { Link, useLocation } from "react-router-dom";

function Layout({ children }) {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-white shadow-md">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex space-x-4">
                        <Link
                            to="/"
                            className={`px-4 py-4 ${
                                isActive("/")
                                    ? "border-b-2 border-blue-500 text-blue-600"
                                    : "text-gray-600 hover:text-gray-800"
                            }`}
                        >
                            🏠 Trang chủ
                        </Link>
                        <Link
                            to="/todos"
                            className={`px-4 py-4 ${
                                isActive("/todos")
                                    ? "border-b-2 border-blue-500 text-blue-600"
                                    : "text-gray-600 hover:text-gray-800"
                            }`}
                        >
                            📝 Todos
                        </Link>
                        <Link
                            to="/about"
                            className={`px-4 py-4 ${
                                isActive("/about")
                                    ? "border-b-2 border-blue-500 text-blue-600"
                                    : "text-gray-600 hover:text-gray-800"
                            }`}
                        >
                            ℹ️ Giới thiệu
                        </Link>
                    </div>
                </div>
            </nav>

            <main className="py-8">{children}</main>
        </div>
    );
}

export default Layout;
```

---

### Lab 2: Dynamic Route cho Todo Detail (30’)

**Yêu cầu:** Thầy muốn các em làm thêm trang chi tiết todo, đường dẫn `/todos/:id`.

::: code-group

```javascript [src/pages/TodoDetail.jsx]
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function TodoDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [todo, setTodo] = useState(null);

    // Thử tải todo từ localStorage (dùng state cũng được)
    useEffect(() => {
        const todos = JSON.parse(localStorage.getItem("todos") || "[]");
        const found = todos.find((t) => t.id === Number(id));
        setTodo(found);
    }, [id]);

    if (!todo) {
        return (
            <div className="max-w-4xl mx-auto p-6">
                <p>Không tìm thấy todo</p>
                <button onClick={() => navigate("/todos")}>Quay lại</button>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            <button
                onClick={() => navigate("/todos")}
                className="mb-4 text-blue-500 hover:text-blue-700"
            >
                ← Quay lại
            </button>
            <div className="bg-white rounded-lg shadow-lg p-6">
                <h1 className="text-2xl font-bold mb-4">{todo.text}</h1>
                <p className="text-gray-600">
                    Trạng thái: {todo.completed ? "✅ Hoàn thành" : "⏳ Chưa hoàn thành"}
                </p>
            </div>
        </div>
    );
}

export default TodoDetail;
```

```javascript [main.js]
<Route path="/todos/:id" element={<TodoDetail />} />
```

:::

---

## 📝 Tổng kết buổi học

**Các bạn nhớ:**

-   ✅ React Router giúp điều hướng trong SPA
-   ✅ Luôn bọc App bằng `BrowserRouter`
-   ✅ Định nghĩa route với `Routes`, `Route`
-   ✅ Chuyển trang với `Link`, hoặc code bằng `useNavigate`
-   ✅ Lấy tham số động với `useParams`
-   ✅ Tổ chức navigation và giao diện tái sử dụng bằng Layout pattern

### Checklist buổi 10

-   [ ] Cài đặt React Router cho app
-   [ ] Tạo được app nhiều trang
-   [ ] Chuyển trang bằng Link/useNavigate
-   [ ] Làm layout có navigation
-   [ ] Tạo route động dùng param
-   [ ] Hoàn thiện Todo App có routing

---

**Tài liệu xem thêm**: [React Router Docs](https://reactrouter.com/)
