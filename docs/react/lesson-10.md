# Buổi 10: Routing với React Router

## 🎯 Mục tiêu học tập (SMART)

1. ✅ Setup React Router
2. ✅ Tạo Routes và Navigate
3. ✅ Sử dụng useNavigate, useParams
4. ✅ Implement Layout và Nested Routes
5. ✅ Xây dựng multi-page app

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

## 🧪 Bài tập Lab

### Lab 1: Multi-page App
Tạo app với Home, About, Contact pages.

### Lab 2: Tour Detail Page
Dynamic route `/tour/:id` hiển thị chi tiết tour.

### Lab 3: Navigation Menu
Active states và breadcrumbs.

---

## ✅ Quiz (5 câu)

1. Component nào bọc tất cả routes?
   - A. Router
   - B. BrowserRouter ✅
   - C. Routes
   - D. Route

2. useNavigate dùng để:
   - A. Truyền params
   - B. Navigate programmatically ✅
   - C. Get current path
   - D. Render links

---

**Xem**: [React Router Docs](https://reactrouter.com/)

