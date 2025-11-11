# Buổi 4: Conditional Rendering

## 🎯 Mục tiêu học tập (SMART)

Sau buổi học này, học viên sẽ có thể:

1. ✅ Sử dụng **&& operator** để render có điều kiện (10 phút)
2. ✅ Sử dụng **ternary operator** cho 2 trường hợp (15 phút)
3. ✅ Phối hợp **if/else** với JSX (10 phút)
4. ✅ Render **null** để ẩn elements (5 phút)
5. ✅ Áp dụng **conditional rendering** trong project thực tế (15 phút)

## 📋 Nội dung chính

### 1. Conditional Rendering là gì?

**Conditional Rendering** là kỹ thuật hiển thị UI khác nhau dựa trên điều kiện. Giống như if/else trong JavaScript, nhưng áp dụng cho JSX.

### 2. && Operator (Logical AND)

Dùng khi **chỉ hiển thị khi điều kiện đúng**.

```javascript
function Notification({ message }) {
    return (
        <div>
            {message && <p>{message}</p>}
        </div>
    );
}

// Sử dụng
<Notification message="Đăng nhập thành công!" />
// Hiển thị: "Đăng nhập thành công!"

<Notification message="" />
// Không hiển thị gì
```

**⚠️ Lưu ý quan trọng**:

```javascript
// ❌ SAI - Số 0 sẽ bị ẩn
const count = 0;
{
    count && <p>Số: {count}</p>;
}

// ✅ ĐÚNG - Dùng comparison
{
    count > 0 && <p>Số: {count}</p>;
}
{
    count !== 0 && <p>Số: {count}</p>;
}
```

#### Ví dụ thực tế

```javascript
function UserProfile({ user }) {
    return (
        <div>
            <h2>{user.name}</h2>
            {user.isAdmin && <span className="badge">Admin</span>}
            {user.email && <p>Email: {user.email}</p>}
        </div>
    );
}
```

### 3. Ternary Operator ( ?: )

Dùng khi **có 2 trường hợp** rõ ràng.

```javascript
function Greeting({ user }) {
    return <div>{user ? <h1>Xin chào {user.name}!</h1> : <h1>Xin chào Khách!</h1>}</div>;
}
```

```javascript
function Button({ isSubmitting }) {
    return <button disabled={isSubmitting}>{isSubmitting ? "Đang xử lý..." : "Gửi"}</button>;
}
```

#### Nested Ternary (nhiều điều kiện)

```javascript
function StatusBadge({ status }) {
    return (
        <span
            className={
                status === "active"
                    ? "badge-success"
                    : status === "pending"
                    ? "badge-warning"
                    : "badge-error"
            }
        >
            {status === "active"
                ? "Hoạt động"
                : status === "pending"
                ? "Chờ duyệt"
                : "Ngừng hoạt động"}
        </span>
    );
}
```

**Gợi ý**: Nếu quá 3 điều kiện → nên dùng if/else hoặc object mapping

### 4. if/else với JSX

Dùng khi **logic phức tạp, nhiều điều kiện**.

```javascript
function Content({ user }) {
    if (user.isLoading) {
        return <div>Đang tải...</div>;
    }

    if (user.error) {
        return <div>Lỗi: {user.error}</div>;
    }

    if (user.data.length === 0) {
        return <div>Không có dữ liệu</div>;
    }

    return <div>Dữ liệu: {user.data}</div>;
}
```

```javascript
function LoginButton({ isLoggedIn, user }) {
    if (!isLoggedIn) {
        return <button>Đăng nhập</button>;
    }

    return (
        <div>
            <span>Xin chào {user.name}</span>
            <button>Đăng xuất</button>
        </div>
    );
}
```

### 5. Render null

Dùng **null** để không render gì cả.

```javascript
function Modal({ isOpen, children }) {
    if (!isOpen) {
        return null; // Không render
    }

    return <div className="modal">{children}</div>;
}
```

### 6. Early Return Pattern

Pattern tốt nhất cho conditional rendering phức tạp.

```javascript
function ProductCard({ product }) {
    // Guard clauses
    if (!product) return null;
    if (product.isDeleted) return null;

    return (
        <div className="product-card">
            <h3>{product.name}</h3>
            <p>{product.price}</p>
        </div>
    );
}
```

## 💡 Ví dụ minh họa

### Demo 1: Loading States

```javascript
function DataDisplay({ data, isLoading, error }) {
    if (isLoading) {
        return <div className="loading">Đang tải dữ liệu...</div>;
    }

    if (error) {
        return <div className="error">Lỗi: {error.message}</div>;
    }

    if (!data || data.length === 0) {
        return <div className="empty">Không có dữ liệu</div>;
    }

    return (
        <div>
            {data.map((item) => (
                <div key={item.id}>{item.name}</div>
            ))}
        </div>
    );
}

export default DataDisplay;
```

### Demo 2: User Badge

```javascript
function UserCard({ user }) {
    return (
        <div className="user-card">
            <img src={user.avatar} alt={user.name} />
            <h3>{user.name}</h3>

            {/* Conditional badges */}
            {user.isAdmin && <span className="badge admin">Admin</span>}
            {user.isPremium && <span className="badge premium">Premium</span>}
            {user.isVerified && <span className="badge verified">✓ Verified</span>}

            {/* Status */}
            <span className={`status ${user.status}`}>
                {user.status === "online" && "🟢 Trực tuyến"}
                {user.status === "offline" && "⚫ Ngoại tuyến"}
                {user.status === "away" && "🟡 Vắng mặt"}
            </span>
        </div>
    );
}

export default UserCard;
```

### Demo 3: Product Card với Stock

```javascript
function ProductCard({ product }) {
    const isOutOfStock = product.stock === 0;
    const isLowStock = product.stock > 0 && product.stock < 10;

    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="price">{product.price} đ</p>

            {/* Stock status */}
            {isOutOfStock && <p className="stock out">Hết hàng</p>}
            {isLowStock && <p className="stock low">Sắp hết: {product.stock} sản phẩm</p>}
            {product.stock >= 10 && <p className="stock available">Còn hàng</p>}

            {/* Button */}
            <button disabled={isOutOfStock}>{isOutOfStock ? "Hết hàng" : "Thêm vào giỏ"}</button>
        </div>
    );
}

export default ProductCard;
```

## 🧪 Bài tập Thực hành: Todo List với Filter

### Mục tiêu

Nâng cấp Todo List từ buổi 3 với conditional rendering để filter todos theo trạng thái.

> **Lưu ý**: Các em sẽ tiếp tục phát triển TodoList component từ buổi 3, thêm tính năng filter và conditional rendering.

### Lab 1: Todo List với Filter (50 phút)

**Yêu cầu**: Nâng cấp TodoList từ buổi 3, thêm filter để hiển thị todos theo trạng thái (All, Active, Completed) và sử dụng conditional rendering.

#### Bước 1: Thêm State cho Filter và Filter Logic

Cập nhật TodoList component từ buổi 3, thêm state cho filter:

```javascript [src/components/TodoList.jsx]
import { useState } from "react";
import TodoItem from "./TodoItem";
import Button from "./Button";

function TodoList() {
    // State từ buổi 3
    const [todos, setTodos] = useState([
        { id: 1, text: "Học React", completed: false },
        { id: 2, text: "Làm bài tập", completed: true },
        { id: 3, text: "Review code", completed: false },
    ]);
    const [newTodo, setNewTodo] = useState("");

    // ✅ Thêm state mới cho filter
    const [filter, setFilter] = useState("all"); // 'all', 'active', 'completed'

    // Handlers từ buổi 3
    const handleToggle = (id) => {
        setTodos(
            todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
        );
    };

    const handleDelete = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const handleAdd = (e) => {
        e.preventDefault();
        if (newTodo.trim()) {
            const newId = Math.max(...todos.map((t) => t.id), 0) + 1;
            setTodos([...todos, { id: newId, text: newTodo, completed: false }]);
            setNewTodo("");
        }
    };

    // ✅ Filter logic với conditional rendering
    const filteredTodos = todos.filter((todo) => {
        if (filter === "active") return !todo.completed;
        if (filter === "completed") return todo.completed;
        return true; // 'all'
    });

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">📝 Todo List</h1>

            {/* Form thêm todo từ buổi 3 */}
            <form onSubmit={handleAdd} className="mb-4">
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)}
                        placeholder="Thêm công việc mới..."
                        className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Button type="submit" variant="primary">
                        Thêm
                    </Button>
                </div>
            </form>

            {/* ✅ Filter buttons với conditional rendering */}
            <div className="flex gap-2 mb-4">
                <Button
                    variant={filter === "all" ? "primary" : "secondary"}
                    size="small"
                    onClick={() => setFilter("all")}
                >
                    Tất cả
                </Button>
                <Button
                    variant={filter === "active" ? "primary" : "secondary"}
                    size="small"
                    onClick={() => setFilter("active")}
                >
                    Chưa xong
                </Button>
                <Button
                    variant={filter === "completed" ? "primary" : "secondary"}
                    size="small"
                    onClick={() => setFilter("completed")}
                >
                    Đã xong
                </Button>
            </div>

            {/* ✅ Conditional rendering: Hiển thị thông báo nếu không có todo */}
            <ul className="space-y-2">
                {filteredTodos.length === 0 ? (
                    <li className="text-center text-gray-500 py-4">
                        {filter === "all" && "Chưa có công việc nào"}
                        {filter === "active" && "Không có công việc chưa hoàn thành"}
                        {filter === "completed" && "Chưa có công việc đã hoàn thành"}
                    </li>
                ) : (
                    filteredTodos.map((todo) => (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            onToggle={handleToggle}
                            onDelete={handleDelete}
                        />
                    ))
                )}
            </ul>
        </div>
    );
}

export default TodoList;
```

> **Giải thích**:
>
> -   Sử dụng `filteredTodos` để lọc todos theo filter state
> -   Sử dụng ternary operator (`? :`) để hiển thị thông báo khi không có todo
> -   Sử dụng `&&` operator để hiển thị thông báo khác nhau theo filter
> -   Button component từ buổi 3 được dùng với conditional `variant` dựa trên filter state

#### Bước 2: Hiển thị thống kê với Conditional Rendering

Thêm phần thống kê sử dụng conditional rendering:

```javascript [src/components/TodoList.jsx]
// ... existing code ...

function TodoList() {
    // ... existing state và handlers ...

    // ✅ Tính toán thống kê
    const stats = {
        total: todos.length,
        active: todos.filter((t) => !t.completed).length,
        completed: todos.filter((t) => t.completed).length,
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">📝 Todo List</h1>

            {/* ✅ Hiển thị thống kê với conditional rendering */}
            {stats.total > 0 && (
                <div className="flex justify-between text-sm text-gray-600 mb-4 p-2 bg-gray-50 rounded">
                    <span>Tổng: {stats.total}</span>
                    <span>Chưa xong: {stats.active}</span>
                    <span>Đã xong: {stats.completed}</span>
                </div>
            )}

            {/* Form thêm todo */}
            <form onSubmit={handleAdd} className="mb-4">
                {/* ... existing form code ... */}
            </form>

            {/* Filter buttons */}
            <div className="flex gap-2 mb-4">{/* ... existing filter buttons ... */}</div>

            {/* Todo list */}
            <ul className="space-y-2">{/* ... existing todo list code ... */}</ul>
        </div>
    );
}
```

> **Giải thích**:
>
> -   Sử dụng `&&` operator để chỉ hiển thị thống kê khi có ít nhất 1 todo
> -   Tính toán thống kê từ todos array (không phải filteredTodos)

---

#### Bước 3: Nâng cấp với nhiều điều kiện (Tùy chọn)

Các em có thể thêm điều kiện hiển thị thông báo khi tất cả todos đã hoàn thành:

```javascript [src/components/TodoList.jsx]
// ... trong return ...

{
    /* ✅ Conditional rendering: Hiển thị thông báo khi tất cả đã hoàn thành */
}
{
    stats.total > 0 && stats.completed === stats.total && (
        <div className="mb-4 p-3 bg-green-50 text-green-700 rounded-lg text-center">
            🎉 Chúc mừng! Bạn đã hoàn thành tất cả công việc!
        </div>
    );
}

{
    /* Filter buttons và todo list */
}
```

### Lab 2: Thêm Priority cho Todo với Conditional Rendering (25 phút)

**Yêu cầu**: Thêm priority (ưu tiên) cho todo và hiển thị badge màu khác nhau theo priority

#### Bước 1: Cập nhật TodoItem để hiển thị priority

```javascript [src/components/TodoItem.jsx]
function TodoItem({ todo, onToggle, onDelete }) {
    const handleDeleteClick = (e) => {
        e.stopPropagation();
        onDelete(todo.id);
    };

    return (
        <li className="flex items-center p-3 bg-gray-50 rounded border hover:bg-gray-100 transition">
            <span
                className={`flex-1 cursor-pointer ${
                    todo.completed ? "line-through text-gray-400" : "text-gray-700"
                }`}
                onClick={() => onToggle(todo.id)}
            >
                {todo.text}
            </span>
            {/* ✅ Conditional rendering: Hiển thị priority badge với màu khác nhau */}
            {todo.priority === "high" && (
                <span className="mr-2 px-2 py-1 text-xs bg-red-100 text-red-700 rounded">Cao</span>
            )}
            {todo.priority === "medium" && (
                <span className="mr-2 px-2 py-1 text-xs bg-yellow-100 text-yellow-700 rounded">
                    Trung bình
                </span>
            )}
            {todo.priority === "low" && (
                <span className="mr-2 px-2 py-1 text-xs bg-green-100 text-green-700 rounded">
                    Thấp
                </span>
            )}
            {todo.completed && <span className="text-green-500 font-bold mr-2">✓</span>}
            <button
                onClick={handleDeleteClick}
                className="ml-2 text-red-500 hover:text-red-700 font-bold"
            >
                ×
            </button>
        </li>
    );
}

export default TodoItem;
```

#### Bước 2: Cập nhật TodoList để thêm priority khi tạo todo mới

```javascript [src/components/TodoList.jsx]
// ... existing code ...

function TodoList() {
    // ... existing state ...
    const [newTodo, setNewTodo] = useState("");
    const [priority, setPriority] = useState("medium"); // ✅ Thêm state cho priority

    const handleAdd = (e) => {
        e.preventDefault();
        if (newTodo.trim()) {
            const newId = Math.max(...todos.map((t) => t.id), 0) + 1;
            setTodos([...todos, { id: newId, text: newTodo, completed: false, priority }]); // ✅ Thêm priority
            setNewTodo("");
            setPriority("medium"); // Reset về medium
        }
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
            {/* ... existing code ... */}

            <form onSubmit={handleAdd} className="mb-4">
                <div className="flex gap-2 mb-2">
                    <input
                        type="text"
                        value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)}
                        placeholder="Thêm công việc mới..."
                        className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Button type="submit" variant="primary">
                        Thêm
                    </Button>
                </div>
                {/* ✅ Select priority với conditional styling */}
                <select
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                    className="px-3 py-1 border rounded text-sm"
                >
                    <option value="high">Cao</option>
                    <option value="medium">Trung bình</option>
                    <option value="low">Thấp</option>
                </select>
            </form>

            {/* ... rest of component ... */}
        </div>
    );
}
```

### Lab 3: Hiển thị thông báo với Conditional Rendering (25 phút)

**Yêu cầu**: Thêm thông báo success/error khi thao tác với todo

#### Cập nhật TodoList để hiển thị thông báo

```javascript [src/components/TodoList.jsx]
// ... existing code ...

function TodoList() {
    // ... existing state ...
    const [message, setMessage] = useState(null); // ✅ State cho thông báo

    const handleAdd = (e) => {
        e.preventDefault();
        if (newTodo.trim()) {
            const newId = Math.max(...todos.map((t) => t.id), 0) + 1;
            setTodos([...todos, { id: newId, text: newTodo, completed: false, priority }]);
            setNewTodo("");
            setPriority("medium");
            // ✅ Hiển thị thông báo success
            setMessage({ type: "success", text: "Đã thêm công việc thành công!" });
            setTimeout(() => setMessage(null), 3000); // Tự động ẩn sau 3 giây
        } else {
            // ✅ Hiển thị thông báo error
            setMessage({ type: "error", text: "Vui lòng nhập nội dung công việc!" });
            setTimeout(() => setMessage(null), 3000);
        }
    };

    const handleDelete = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
        // ✅ Hiển thị thông báo success
        setMessage({ type: "success", text: "Đã xóa công việc!" });
        setTimeout(() => setMessage(null), 3000);
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">📝 Todo List</h1>

            {/* ✅ Conditional rendering: Hiển thị thông báo nếu có */}
            {message && (
                <div
                    className={`mb-4 p-3 rounded-lg ${
                        message.type === "success"
                            ? "bg-green-50 text-green-700"
                            : "bg-red-50 text-red-700"
                    }`}
                >
                    {message.type === "success" ? "✅" : "❌"} {message.text}
                </div>
            )}

            {/* ... rest of component ... */}
        </div>
    );
}
```

> **Lưu ý**:
>
> -   Sử dụng `&&` operator để hiển thị thông báo khi có message
> -   Sử dụng ternary operator để thay đổi màu sắc theo type (success/error)
> -   Sử dụng `setTimeout` để tự động ẩn thông báo sau 3 giây

---

## 📝 Tổng kết

### Điểm chính

-   ✅ `&&` cho điều kiện đơn giản (hiển thị khi điều kiện đúng)
-   ✅ `?:` cho 2 trường hợp (ternary operator)
-   ✅ `if/else` cho logic phức tạp
-   ✅ `return null` để không render
-   ✅ Early return giảm nesting
-   ✅ Áp dụng conditional rendering trong TodoList từ buổi 3

### Checklist buổi 4

-   [ ] Hiểu conditional rendering và khi nào sử dụng
-   [ ] Sử dụng được && operator (lưu ý với số 0)
-   [ ] Sử dụng được ternary operator (`? :`)
-   [ ] Áp dụng if/else với JSX
-   [ ] Nâng cấp được TodoList từ buổi 3 với filter và conditional rendering
-   [ ] Hoàn thành Lab 1 (Filter), Lab 2 (Priority), Lab 3 (Thông báo)

### Chuẩn bị buổi 5

📚 Đọc trước:

-   Render lists trong React
-   Key prop
-   map, filter, reduce với React

---

**Xem thêm**: [React Documentation - Conditional Rendering](https://react.dev/learn/conditional-rendering)
