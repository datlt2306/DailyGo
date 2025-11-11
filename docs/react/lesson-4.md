# Buổi 4: Conditional Rendering (Hiển Thị Có Điều Kiện)

## 🎯 Mục tiêu buổi học

Các em học xong buổi này sẽ:

1. Hiểu và dùng **&& operator** để render điều kiện (10 phút)
2. Biết xài **ternary operator** (toán tử 3 ngôi) cho 2 trường hợp (15 phút)
3. Dùng được **if/else** trong JSX khi logic nhiều điều kiện (10 phút)
4. Render **null** (ẩn element) khi không cần hiển thị (5 phút)
5. Ứng dụng **conditional rendering** vào project thực tế (15 phút)

---

## 📋 Nội dung bài học

### 1. Conditional Rendering là gì?

Các em hình dung như này: trong React, "conditional rendering" nghĩa là mình sẽ cho UI hiển thị khác nhau dựa vào điều kiện của dữ liệu, tương tự như mình dùng if/else trong JavaScript, mà khi qua JSX thì có nhiều cách viết tiện lợi hơn.

---

### 2. && Operator (Toán tử AND)

Khi các em muốn **chỉ hiển thị thứ gì đó khi điều kiện đúng**, hãy dùng &&.

Ví dụ:

```javascript
function Notification({ message }) {
    return (
        <div>
            {message && <p>{message}</p>}
        </div>
    );
}

// Dùng thử
<Notification message="Đăng nhập thành công!" />
// Trên màn hình hiện: "Đăng nhập thành công!"

<Notification message="" />
// Không có gì hiện
```

**⚠️ Cẩn thận với giá trị falsy:**

```javascript
// ❌ Sai - 0 sẽ bị ẩn luôn
const count = 0;
{
    count && <p>Số: {count}</p>;
}

// ✅ Đúng - so sánh cụ thể hơn
{
    count > 0 && <p>Số: {count}</p>;
}
{
    count !== 0 && <p>Số: {count}</p>;
}
```

#### Thầy lấy ví dụ thực tế

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

---

### 3. Ternary Operator (Toán tử ? : )

Khi có **2 trường hợp rõ ràng**, các em dùng toán tử ba ngôi cho gọn nha:

```javascript
function Greeting({ user }) {
    return <div>{user ? <h1>Xin chào {user.name}!</h1> : <h1>Xin chào Khách!</h1>}</div>;
}
```

Ví dụ nữa:

```javascript
function Button({ isSubmitting }) {
    return <button disabled={isSubmitting}>{isSubmitting ? "Đang xử lý..." : "Gửi"}</button>;
}
```

#### Lồng nhiều điều kiện (nested ternary)

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

**Note nhỏ:** Nếu quá 3 điều kiện → nên tách ra if/else cho dễ đọc, hoặc mapping qua object.

---

### 4. if/else với JSX

Khi logic phức tạp, có nhiều trường hợp, các em nên dùng if/else truyền thống. Thầy ví dụ:

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

Hay như kiểm tra đăng nhập:

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

---

### 5. Render null

Hàm trả về **null** nghĩa là React sẽ không render gì cả.

```javascript
function Modal({ isOpen, children }) {
    if (!isOpen) {
        return null; // Không render
    }

    return <div className="modal">{children}</div>;
}
```

---

### 6. Early Return (Trả kết quả sớm)

Cách này giúp code "sạch" và dễ đọc hơn khi có nhiều điều kiện cần check.

```javascript
function ProductCard({ product }) {
    // Nếu k có product hoặc đã xóa thì không render
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

---

## 💡 Thầy làm mẫu - Demo code

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

---

### Demo 2: User Badge

```javascript
function UserCard({ user }) {
    return (
        <div className="user-card">
            <img src={user.avatar} alt={user.name} />
            <h3>{user.name}</h3>

            {/* Badge điều kiện */}
            {user.isAdmin && <span className="badge admin">Admin</span>}
            {user.isPremium && <span className="badge premium">Premium</span>}
            {user.isVerified && <span className="badge verified">✓ Verified</span>}

            {/* Trạng thái online/offline */}
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

---

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

            {/* Trạng thái hàng */}
            {isOutOfStock && <p className="stock out">Hết hàng</p>}
            {isLowStock && <p className="stock low">Sắp hết: {product.stock} sản phẩm</p>}
            {product.stock >= 10 && <p className="stock available">Còn hàng</p>}

            {/* Nút */}
            <button disabled={isOutOfStock}>{isOutOfStock ? "Hết hàng" : "Thêm vào giỏ"}</button>
        </div>
    );
}

export default ProductCard;
```

---

## 🧪 Bài tập Thực hành: Todo List với Lọc (Filter)

### Mục tiêu bài lab

Các em sẽ nâng cấp Todo List từ buổi 3, cho phép lọc công việc theo trạng thái và luyện tập render có điều kiện.

> **Lưu ý:** Em nào chưa làm xong TodoList buổi 3 thì mượn tạm code mẫu. Đừng quên bổ sung tính năng lọc (filter) cùng conditional rendering.

---

### Lab 1: Lọc Todo List (50 phút)

**Yêu cầu:** Thêm tính năng lọc để hiển thị công việc theo trạng thái (Tất cả / Chưa xong / Đã xong) – áp dụng có điều kiện.

#### Bước 1: State và filter logic

```javascript [src/components/TodoList.jsx]
import { useState } from "react";
import TodoItem from "./TodoItem";
import Button from "./Button";

function TodoList() {
    // State gốc
    const [todos, setTodos] = useState([
        { id: 1, text: "Học React", completed: false },
        { id: 2, text: "Làm bài tập", completed: true },
        { id: 3, text: "Review code", completed: false },
    ]);
    const [newTodo, setNewTodo] = useState("");

    // State cho filter
    const [filter, setFilter] = useState("all"); // 'all', 'active', 'completed'

    // Các hàm logic
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

    // Lọc công việc dựa theo filter
    const filteredTodos = todos.filter((todo) => {
        if (filter === "active") return !todo.completed;
        if (filter === "completed") return todo.completed;
        return true; // 'all'
    });

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">📝 Todo List</h1>

            {/* Form thêm công việc */}
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

            {/* Các nút lọc - render kiểu điều kiện */}
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

            {/* Hiển thị thông báo khi không có todo nào */}
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

**Giải thích cho mấy em:**

-   `filteredTodos` giúp mình có danh sách todo lọc theo trạng thái.
-   Dòng `{filteredTodos.length === 0 ? ... : ...}` là ternary, thay đổi giao diện tùy tình huống.
-   Dòng `{filter === "active" && ...}` là dùng && để xuất thông báo theo filter.
-   Button dùng `variant` điều kiện: khi filter nào được chọn thì nút đó hiện nổi bật.

---

#### Bước 2: Hiển thị thống kê (stats) bằng conditional rendering

```javascript [src/components/TodoList.jsx]
// ... existing code ...

function TodoList() {
    // ... existing state & handler ...

    // Tính tổng, đang làm, đã xong
    const stats = {
        total: todos.length,
        active: todos.filter((t) => !t.completed).length,
        completed: todos.filter((t) => t.completed).length,
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">📝 Todo List</h1>

            {/* Chỉ hiển thị khi có ít nhất 1 công việc */}
            {stats.total > 0 && (
                <div className="flex justify-between text-sm text-gray-600 mb-4 p-2 bg-gray-50 rounded">
                    <span>Tổng: {stats.total}</span>
                    <span>Chưa xong: {stats.active}</span>
                    <span>Đã xong: {stats.completed}</span>
                </div>
            )}

            {/* Form thêm todo, filter buttons, và todo list ở dưới ... */}
        </div>
    );
}
```

**Các em lưu ý:** Phần thống kê lấy từ tổng todos, không phải danh sách đã lọc.

---

#### Bước 3: Điều kiện đặc biệt (Bonus)

Nếu tất cả công việc đều đã hoàn thành, thử hiện chúc mừng các em:

```javascript [src/components/TodoList.jsx]
// ... trong return ...

{
    /* Hiện banner chúc mừng nếu đã hoàn thành hết */
}
{
    stats.total > 0 && stats.completed === stats.total && (
        <div className="mb-4 p-3 bg-green-50 text-green-700 rounded-lg text-center">
            🎉 Chúc mừng! Bạn đã hoàn thành tất cả công việc!
        </div>
    );
}

// ... filter buttons & todo list phía dưới
```

---

### Lab 2: Thêm Priority cho Todo và hiển thị badge màu sắc (25 phút)

**Yêu cầu:** Thêm thuộc tính ưu tiên (priority) cho mỗi công việc, badge màu theo priority.

#### Bước 1: Sửa TodoItem.jsx để hiện badge

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
            {/* Badge theo priority */}
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

---

#### Bước 2: Thêm chọn ưu tiên khi tạo mới todo

```javascript [src/components/TodoList.jsx]
// ... existing code ...

function TodoList() {
    // ... các state khác ...
    const [newTodo, setNewTodo] = useState("");
    const [priority, setPriority] = useState("medium"); // State cho priority

    const handleAdd = (e) => {
        e.preventDefault();
        if (newTodo.trim()) {
            const newId = Math.max(...todos.map((t) => t.id), 0) + 1;
            setTodos([...todos, { id: newId, text: newTodo, completed: false, priority }]);
            setNewTodo("");
            setPriority("medium");
        }
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
            {/* ... other content ... */}
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
                {/* Dropdown chọn ưu tiên */}
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

            {/* ... rest ... */}
        </div>
    );
}
```

---

### Lab 3: Hiển thị Thông báo Success/Error khi thao tác với Todo (25 phút)

**Yêu cầu:** Khi thêm/xóa công việc, hiện thông báo dạng thành công hoặc lỗi.

#### Sửa TodoList để có thông báo

```javascript [src/components/TodoList.jsx]
// ... existing code ...

function TodoList() {
    // ... state khác ...
    const [message, setMessage] = useState(null); // Thông báo

    const handleAdd = (e) => {
        e.preventDefault();
        if (newTodo.trim()) {
            const newId = Math.max(...todos.map((t) => t.id), 0) + 1;
            setTodos([...todos, { id: newId, text: newTodo, completed: false, priority }]);
            setNewTodo("");
            setPriority("medium");
            // Thông báo success
            setMessage({ type: "success", text: "Đã thêm công việc thành công!" });
            setTimeout(() => setMessage(null), 3000);
        } else {
            // Thông báo lỗi
            setMessage({ type: "error", text: "Vui lòng nhập nội dung công việc!" });
            setTimeout(() => setMessage(null), 3000);
        }
    };

    const handleDelete = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
        setMessage({ type: "success", text: "Đã xóa công việc!" });
        setTimeout(() => setMessage(null), 3000);
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">📝 Todo List</h1>

            {/* Thông báo nếu có */}
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

            {/* ... rest ... */}
        </div>
    );
}
```

**Lưu ý cho mấy em:**

-   Dùng {message && ...} để chỉ hiện khi có tin nhắn,
-   Ternary `{message.type === "success" ? ... : ...}` thay đổi màu/thông điệp,
-   `setTimeout` ẩn thông báo sau 3 giây tự động.

---

## 📝 Tổng kết Buổi 4

### Tóm tắt

-   **&&**: cho điều kiện đơn giản, chỉ render khi đúng.
-   **?:** cho hai trường hợp (ternary).
-   **if/else**: logic nhiều trường hợp phức tạp.
-   **return null**: không render gì hết.
-   **Early return**: giúp code gọn hơn, tránh lồng nhau.
-   Ứng dụng được conditional rendering ngay với TodoList luôn nha.

### Checklist cho các em tự đánh giá

-   [ ] Hiểu thế nào là conditional rendering, ứng dụng vào đâu
-   [ ] Sử dụng được && operator, nhớ cảnh báo về số 0 nhé
-   [ ] Sử dụng ternary (`? :`)
-   [ ] Xử lý được if/else trong JSX
-   [ ] Nâng TodoList từ buổi 3: filter và conditional rendering
-   [ ] Làm xong Lab 1 (Filter), Lab 2 (Priority), Lab 3 (Thông báo)

### Chuẩn bị cho Buổi 5

Các em đọc trước:

-   Cách render danh sách trong React
-   Ý nghĩa của prop key
-   Ôn lại map/filter/reduce

---

**Đọc thêm:** [React Documentation - Conditional Rendering](https://react.dev/learn/conditional-rendering)
