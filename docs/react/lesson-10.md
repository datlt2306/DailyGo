# Buổi 10: Routing với React Router

## 🎯 Mục tiêu học tập (SMART)

Sau buổi học này, học viên sẽ có thể:

1. ✅ Setup React Router trong project (10 phút)
2. ✅ Tạo Routes và Navigate giữa các trang (15 phút)
3. ✅ Sử dụng useNavigate, useParams (10 phút)
4. ✅ Implement Layout và Nested Routes (10 phút)
5. ✅ Xây dựng multi-page Todo App (15 phút)

## 📋 Nội dung chính

### 1. React Router Setup

```bash
npm install react-router-dom
```

```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

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

### 2. Navigation

```javascript
import { Link, NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <NavLink to="/about">About</NavLink> {/* Active class */}
        </nav>
    );
}
```

### 3. useNavigate

```javascript
import { useNavigate } from 'react-router-dom';

function LoginForm() {
    const navigate = useNavigate();
    
    const handleSubmit = () => {
        // Login logic
        navigate('/dashboard');
    };
    
    return <button onClick={handleSubmit}>Login</button>;
}
```

### 4. Dynamic Routes với useParams

```javascript
// Route
<Route path="/tour/:id" element={<TourDetail />} />

// Component
function TourDetail() {
    const { id } = useParams();
    return <div>Tour ID: {id}</div>;
}
```

### 5. Layout Pattern

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

## 🧪 Bài tập Thực hành: Multi-page Todo App

### Mục tiêu
Nâng cấp Todo App thành multi-page application với React Router.

### Lab 1: Setup Routing cho Todo App (50 phút)

#### Bước 1: Cài đặt React Router (5 phút)

```bash
npm install react-router-dom
```

#### Bước 2: Tạo các Pages (20 phút)

```javascript [src/pages/Home.jsx]
function Home() {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
                🏠 Trang chủ
            </h1>
            <p className="text-gray-600">
                Chào mừng đến với Todo App!
            </p>
        </div>
    );
}

export default Home;
```

```javascript [src/pages/Todos.jsx]
import TodoList from '../components/TodoList';

function Todos() {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
                📝 Quản lý Todo
            </h1>
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
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
                ℹ️ Giới thiệu
            </h1>
            <p className="text-gray-600">
                Ứng dụng Todo List được xây dựng với React và React Router.
            </p>
        </div>
    );
}

export default About;
```

#### Bước 3: Setup Router trong App.jsx (15 phút)

```javascript [src/App.jsx]
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Todos from './pages/Todos';
import About from './pages/About';

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

#### Bước 4: Tạo Layout Component với Navigation (10 phút)

```javascript [src/components/Layout.jsx]
import { Link, useLocation } from 'react-router-dom';

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
                                isActive('/') 
                                    ? 'border-b-2 border-blue-500 text-blue-600' 
                                    : 'text-gray-600 hover:text-gray-800'
                            }`}
                        >
                            🏠 Trang chủ
                        </Link>
                        <Link
                            to="/todos"
                            className={`px-4 py-4 ${
                                isActive('/todos') 
                                    ? 'border-b-2 border-blue-500 text-blue-600' 
                                    : 'text-gray-600 hover:text-gray-800'
                            }`}
                        >
                            📝 Todos
                        </Link>
                        <Link
                            to="/about"
                            className={`px-4 py-4 ${
                                isActive('/about') 
                                    ? 'border-b-2 border-blue-500 text-blue-600' 
                                    : 'text-gray-600 hover:text-gray-800'
                            }`}
                        >
                            ℹ️ Giới thiệu
                        </Link>
                    </div>
                </div>
            </nav>
            
            <main className="py-8">
                {children}
            </main>
        </div>
    );
}

export default Layout;
```

### Lab 2: Dynamic Route cho Todo Detail (30 phút)

**Yêu cầu**: Tạo trang chi tiết todo với route `/todos/:id`

```javascript [src/pages/TodoDetail.jsx]
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function TodoDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [todo, setTodo] = useState(null);

    // TODO: Load todo từ state hoặc localStorage
    useEffect(() => {
        const todos = JSON.parse(localStorage.getItem('todos') || '[]');
        const found = todos.find(t => t.id === Number(id));
        setTodo(found);
    }, [id]);

    if (!todo) {
        return (
            <div className="max-w-4xl mx-auto p-6">
                <p>Không tìm thấy todo</p>
                <button onClick={() => navigate('/todos')}>
                    Quay lại
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            <button 
                onClick={() => navigate('/todos')}
                className="mb-4 text-blue-500 hover:text-blue-700"
            >
                ← Quay lại
            </button>
            <div className="bg-white rounded-lg shadow-lg p-6">
                <h1 className="text-2xl font-bold mb-4">{todo.text}</h1>
                <p className="text-gray-600">
                    Trạng thái: {todo.completed ? '✅ Hoàn thành' : '⏳ Chưa hoàn thành'}
                </p>
            </div>
        </div>
    );
}

export default TodoDetail;
```

**Cập nhật Routes**:

```javascript
<Route path="/todos/:id" element={<TodoDetail />} />
```

---

## 📝 Tổng kết

### Điểm chính

- ✅ React Router cho phép điều hướng trong SPA
- ✅ `BrowserRouter` wrap toàn bộ app
- ✅ `Routes` và `Route` định nghĩa các trang
- ✅ `Link` và `useNavigate` để điều hướng
- ✅ `useParams` để lấy dynamic params
- ✅ Layout pattern tái sử dụng navigation

### Checklist buổi 10

- [ ] Setup React Router
- [ ] Tạo được multi-page app
- [ ] Sử dụng Link và useNavigate
- [ ] Implement Layout với navigation
- [ ] Tạo dynamic routes
- [ ] Hoàn thành Todo App với routing

---

**Xem**: [React Router Docs](https://reactrouter.com/)

