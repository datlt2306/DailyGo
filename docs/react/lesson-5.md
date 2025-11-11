# Buổi 5: List & Key Nâng cao

## 🎯 Mục tiêu học tập

Sau khi kết thúc buổi học hôm nay, các em sẽ nắm chắc:

1. ✅ Hiểu sâu bản chất **key prop** trong React và khi nào có thể dùng index (10 phút)
2. ✅ Làm chủ cách xử lý **nested lists** - danh sách lồng nhau (15 phút)
3. ✅ Biết cách **filter** (lọc), **sort** (sắp xếp) danh sách động (15 phút)
4. ✅ Thực hành **tìm kiếm** trong danh sách (10 phút)
5. ✅ Xử lý các trường hợp đặc biệt như **empty state** và loading state (10 phút)

## 📋 Nội dung chính

### 1. Ôn lại: map() & Key

> **Các em nhớ lại:** Ở buổi 2, thầy đã hướng dẫn về `.map()` và `key prop`. Hôm nay, mình sẽ đào thật sâu vào các trường hợp khó nhằn hơn nhé.

#### Quy tắc quan trọng về Key (các em PHẢI nắm):

-   ✅ Key **bắt buộc** phải unique trong danh sách
-   ✅ Ưu tiên dùng **ID** từ dữ liệu (ví dụ: `todo.id`, `user.id`)
-   ❌ Không được dùng `Math.random()` – vì mỗi lần render key lại thay đổi, React sẽ "loạn"
-   ⚠️ Chỉ dùng `index` khi danh sách **hoàn toàn tĩnh**: không thêm, không xóa, không sắp xếp.

#### Khi nào được phép dùng index làm key?

```javascript
// ✅ OK - Dùng được index, vì categories không thay đổi
const categories = ["Tech", "Fashion", "Food"];

categories.map((category, index) => <button key={index}>{category}</button>);

// ❌ Không dùng index - Danh sách thêm/xóa/hoán đổi
const todos = [
    { id: 1, text: "Học React" },
    { id: 2, text: "Làm bài tập" },
];

// Nếu dùng index, xóa 1 item đầu tiên sẽ khiến React nhầm lẫn
todos.map((todo, index) => <TodoItem key={index} todo={todo} />); // ❌

// ✅ ĐÚNG: Luôn dùng ID từ dữ liệu
todos.map((todo) => <TodoItem key={todo.id} todo={todo} />);
```

### 2. Nested Lists (Danh sách lồng nhau)

Khi có danh sách trong danh sách (ví dụ, mỗi sinh viên có nhiều môn học):

```javascript
const students = [
    {
        id: 1,
        name: "Nguyễn Văn A",
        subjects: ["Toán", "Lý", "Hóa"],
    },
    {
        id: 2,
        name: "Trần Thị B",
        subjects: ["Văn", "Sử", "Địa"],
    },
];

function StudentList() {
    return (
        <div>
            {students.map((student) => (
                <div key={student.id}>
                    <h3>{student.name}</h3>
                    <ul>
                        {student.subjects.map((subject, index) => (
                            <li key={index}>{subject}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}
```

> _Chú ý_: Danh sách môn học (subjects) là tĩnh, dùng index được. Nếu dữ liệu động, phải tìm key unique hơn nhé.

### 3. Filter Lists (Lọc danh sách)

Làm sao để chỉ hiện những sản phẩm theo danh mục mà các em chọn?

```javascript
const products = [
    { id: 1, name: "Laptop", price: 15000000, category: "electronics" },
    { id: 2, name: "T-shirt", price: 200000, category: "clothing" },
    { id: 3, name: "Mouse", price: 500000, category: "electronics" },
];

function ProductList({ category }) {
    const filteredProducts = products.filter((product) => product.category === category);

    return (
        <div>
            {filteredProducts.map((product) => (
                <div key={product.id}>
                    <h3>{product.name}</h3>
                    <p>{product.price.toLocaleString("vi-VN")} đ</p>
                </div>
            ))}
        </div>
    );
}
```

### 4. Dynamic Lists với State

> **Nhắc lại:** Ở buổi 3, các em đã thực hành Dynamic List (thêm, xóa, toggle Todo). Ở buổi này, thầy nhắc lại phần key kết hợp state.

Các kỹ năng các em đã học:

-   Sử dụng `useState` để quản lý list
-   Render list bằng `.map()`
-   Key luôn là `item.id`
-   Thêm/xóa/sửa phải cập nhật state

### 5. Search/Filter Lists (Tìm kiếm trong danh sách)

Tìm kiếm sản phẩm theo tên?

```javascript
function ProductList() {
    const [products] = useState([
        { id: 1, name: "Laptop Dell", price: 15000000 },
        { id: 2, name: "Laptop HP", price: 12000000 },
        { id: 3, name: "Mouse Logitech", price: 500000 },
    ]);

    const [searchTerm, setSearchTerm] = useState("");

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <input
                type="text"
                placeholder="Tìm sản phẩm..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            {filteredProducts.map((product) => (
                <div key={product.id}>
                    <h3>{product.name}</h3>
                    <p>{product.price.toLocaleString("vi-VN")} đ</p>
                </div>
            ))}
        </div>
    );
}
```

### 6. Empty States (Xử lý danh sách rỗng)

Không có sản phẩm thì phải hiện thông báo ra sao cho người dùng?

```javascript
function ProductList({ products }) {
    if (products.length === 0) {
        return <p>Không có sản phẩm nào</p>;
    }

    return (
        <div>
            {products.map((product) => (
                <div key={product.id}>{product.name}</div>
            ))}
        </div>
    );
}
```

## 💡 Ví dụ minh họa

### Demo 1: Student List

```javascript
const students = [
    { id: 1, name: "Nguyễn Văn A", score: 85 },
    { id: 2, name: "Trần Thị B", score: 92 },
    { id: 3, name: "Lê Văn C", score: 78 },
];

function StudentList() {
    return (
        <div className="student-list">
            <h2>Danh sách sinh viên</h2>
            <table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Họ tên</th>
                        <th>Điểm</th>
                        <th>Xếp loại</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <tr key={student.id}>
                            <td>{index + 1}</td>
                            <td>{student.name}</td>
                            <td>{student.score}</td>
                            <td>
                                {student.score >= 90
                                    ? "Xuất sắc"
                                    : student.score >= 80
                                    ? "Giỏi"
                                    : student.score >= 70
                                    ? "Khá"
                                    : "Trung bình"}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default StudentList;
```

### Demo 2: Product Gallery với Filter

```javascript
function ProductGallery() {
    const [products] = useState([
        { id: 1, name: "Laptop", price: 15000000, category: "tech" },
        { id: 2, name: "T-shirt", price: 200000, category: "fashion" },
        { id: 3, name: "Mouse", price: 500000, category: "tech" },
        { id: 4, name: "Jeans", price: 800000, category: "fashion" },
    ]);

    const [selectedCategory, setSelectedCategory] = useState("all");

    const categories = ["all", "tech", "fashion"];
    const filteredProducts =
        selectedCategory === "all"
            ? products
            : products.filter((p) => p.category === selectedCategory);

    return (
        <div className="gallery">
            <div className="filters">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={selectedCategory === cat ? "active" : ""}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="products">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="product-card">
                        <h3>{product.name}</h3>
                        <p className="price">{product.price.toLocaleString("vi-VN")} đ</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductGallery;
```

### Demo 3: Todo List với Sort (Sắp xếp)

> **Lưu ý:** Demo này là bản mở rộng từ TodoList buổi 3,4 - bổ sung chức năng sắp xếp, kết hợp filter/search/sort “từ dễ đến khó”.

```javascript
function TodoApp() {
    const [todos, setTodos] = useState([
        { id: 1, text: "Học React", completed: false, priority: "high" },
        { id: 2, text: "Làm bài tập", completed: true, priority: "medium" },
        { id: 3, text: "Review code", completed: false, priority: "low" },
    ]);

    const [filter, setFilter] = useState("all");
    const [sortBy, setSortBy] = useState("none"); // 'none', 'priority', 'alphabetical'

    // Lọc: theo trạng thái - đã xong/chưa xong/tất cả
    const filteredTodos = todos.filter((todo) => {
        if (filter === "active") return !todo.completed;
        if (filter === "completed") return todo.completed;
        return true;
    });

    // ✅ Sắp xếp
    const sortedTodos = [...filteredTodos].sort((a, b) => {
        if (sortBy === "priority") {
            const priorityOrder = { high: 3, medium: 2, low: 1 };
            return priorityOrder[b.priority] - priorityOrder[a.priority];
        }
        if (sortBy === "alphabetical") {
            return a.text.localeCompare(b.text);
        }
        return 0; // Không sắp xếp
    });

    return (
        <div className="todo-app">
            {/* Filter buttons */}
            <div className="filters">
                {["all", "active", "completed"].map((f) => (
                    <button
                        key={f}
                        onClick={() => setFilter(f)}
                        className={filter === f ? "active" : ""}
                    >
                        {f === "all" ? "Tất cả" : f === "active" ? "Chưa xong" : "Đã xong"}
                    </button>
                ))}
            </div>

            {/* Sort options */}
            <div className="sort-options">
                <label>Sắp xếp: </label>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="none">Không sắp xếp</option>
                    <option value="priority">Theo độ ưu tiên</option>
                    <option value="alphabetical">Theo tên (A-Z)</option>
                </select>
            </div>

            {/* Danh sách công việc */}
            <ul className="todo-list">
                {sortedTodos.length === 0 ? (
                    <li>Không có công việc nào</li>
                ) : (
                    sortedTodos.map((todo) => (
                        <li key={todo.id} className={todo.completed ? "completed" : ""}>
                            <span>{todo.text}</span>
                            <span className="priority">{todo.priority}</span>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
}

export default TodoApp;
```

## 🧪 Bài tập thực hành: Nâng cấp Todo List

### Mục tiêu

Các em thực hành nâng cấp TodoList: Thêm sort, search, nested lists.

---

### Lab 1: Todo List - Sort & Search (50 phút)

**Yêu cầu:** Tiếp tục nâng cấp TodoList buổi 4, bổ sung hai tính năng:

#### Bước 1: Thêm Search (Tìm kiếm) (20 phút)

Các em hãy bổ sung input tìm kiếm vào TodoList để tìm công việc nhanh chóng:

```javascript [src/components/TodoList.jsx]
import { useState } from "react";
import TodoItem from "./TodoItem";
import Button from "./Button";

function TodoList() {
    // State của các em từ các buổi trước
    const [todos, setTodos] = useState([
        { id: 1, text: "Học React", completed: false, priority: "high" },
        { id: 2, text: "Làm bài tập", completed: true, priority: "medium" },
        { id: 3, text: "Review code", completed: false, priority: "low" },
    ]);
    const [newTodo, setNewTodo] = useState("");
    const [filter, setFilter] = useState("all");
    const [priority, setPriority] = useState("medium");

    // ✅ State mới: searchTerm
    const [searchTerm, setSearchTerm] = useState("");

    // Các handler quen thuộc
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
            setTodos([...todos, { id: newId, text: newTodo, completed: false, priority }]);
            setNewTodo("");
            setPriority("medium");
        }
    };

    // Lọc theo filter
    const filteredTodos = todos.filter((todo) => {
        if (filter === "active") return !todo.completed;
        if (filter === "completed") return todo.completed;
        return true;
    });

    // ✅ Thêm search
    const searchedTodos = filteredTodos.filter((todo) =>
        todo.text.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">📝 Todo List</h1>

            {/* Ô tìm kiếm */}
            <div className="mb-4">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Tìm kiếm công việc..."
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Form thêm công việc */}
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

            {/* Các nút filter */}
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

            {/* Danh sách công việc */}
            <ul className="space-y-2">
                {searchedTodos.length === 0 ? (
                    <li className="text-center text-gray-500 py-4">
                        {searchTerm ? "Không tìm thấy công việc nào" : "Không có công việc nào"}
                    </li>
                ) : (
                    searchedTodos.map((todo) => (
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

#### Bước 2: Thêm Sort (Sắp xếp) (20 phút)

Các em hãy bổ sung dropdown sắp xếp vào TodoList nhé:

```javascript [src/components/TodoList.jsx]
// ... code như trên ...

function TodoList() {
    // ... state như trên ...
    const [sortBy, setSortBy] = useState("none"); // 'none', 'priority', 'alphabetical'

    // ... handlers cũ ...
    // ... filter và search như trên ...

    // ✅ Sort logic
    const sortedTodos = [...searchedTodos].sort((a, b) => {
        if (sortBy === "priority") {
            const priorityOrder = { high: 3, medium: 2, low: 1 };
            return priorityOrder[b.priority] - priorityOrder[a.priority];
        }
        if (sortBy === "alphabetical") {
            return a.text.localeCompare(b.text);
        }
        return 0; // Không sắp xếp
    });

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
            {/* ... các phần phía trên ... */}

            {/* Dropdown sắp xếp công việc */}
            <div className="mb-4">
                <label className="text-sm text-gray-600">Sắp xếp: </label>
                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-1 border rounded text-sm"
                >
                    <option value="none">Không sắp xếp</option>
                    <option value="priority">Theo độ ưu tiên</option>
                    <option value="alphabetical">Theo tên (A-Z)</option>
                </select>
            </div>

            {/* Danh sách công việc - dùng sortedTodos */}
            <ul className="space-y-2">
                {sortedTodos.length === 0 ? (
                    <li className="text-center text-gray-500 py-4">
                        {searchTerm ? "Không tìm thấy công việc nào" : "Không có công việc nào"}
                    </li>
                ) : (
                    sortedTodos.map((todo) => (
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
```

> **Chú ý:**
>
> -   Sắp xếp cần copy mảng `[...searchedTodos]`, không sửa trực tiếp!
> -   Vẫn phải dùng key là `todo.id` để tránh bug
> -   Quy trình: **filter** → **search** → **sort** (theo thứ tự này!)

---

### Lab 2: Shopping Cart (30 phút)

**Yêu cầu:** Xây dựng giỏ hàng cho phép tăng/giảm số lượng, xóa sản phẩm, hiển thị tổng tiền.

```javascript
function ShoppingCart() {
    const [items, setItems] = useState([
        { id: 1, name: "Laptop", price: 15000000, quantity: 1 },
        { id: 2, name: "Mouse", price: 500000, quantity: 2 },
    ]);

    const handleIncrease = (id) => {
        // TODO: Tăng quantity cho sản phẩm có id này
    };

    const handleDecrease = (id) => {
        // TODO: Giảm quantity, nếu = 0 thì xóa khỏi giỏ
    };

    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div>
            <h2>Giỏ hàng</h2>
            {/* TODO: Render danh sách sản phẩm */}
            {/* TODO: Hiển thị tổng tiền */}
        </div>
    );
}

export default ShoppingCart;
```

---

### Lab 3: Notification List (25 phút)

**Yêu cầu**: Danh sách thông báo - cho đánh dấu đã đọc, đếm số thông báo chưa đọc, đánh dấu thông báo mới nổi bật.

```javascript
function NotificationList() {
    const [notifications, setNotifications] = useState([
        { id: 1, message: "Bạn có tin nhắn mới", read: false },
        { id: 2, message: "Đơn hàng đã được xác nhận", read: false },
        { id: 3, message: "Thời tiết hôm nay đẹp", read: true },
    ]);

    const handleMarkRead = (id) => {
        // TODO: Đánh dấu đã đọc thông báo id
    };

    const unreadCount = notifications.filter((n) => !n.read).length;

    return (
        <div>
            <h2>
                Thông báo
                {unreadCount > 0 && <span className="badge">{unreadCount}</span>}
            </h2>
            {/* TODO: Render danh sách thông báo */}
            {/* TODO: Bôi đậm thông báo chưa đọc */}
        </div>
    );
}

export default NotificationList;
```

---

## 📝 Tổng kết buổi học

### Điểm mấu chốt

-   ✅ Ôn lại `.map()` và `key` prop (áp dụng thực tế)
-   ✅ Thấu hiểu khi nào cần/không nên dùng index làm key
-   ✅ Thực hành danh sách lồng nhau (nested lists)
-   ✅ Lọc và tìm kiếm danh sách
-   ✅ Sắp xếp theo nhiều tiêu chí
-   ✅ Xử lý empty states
-   ✅ Kết hợp filter → search → sort

### Checklist buổi 5

-   [ ] Các em đã nắm kỹ về key prop chưa?
-   [ ] Đã làm chủ nested lists?
-   [ ] Lọc/search được danh sách rồi chứ?
-   [ ] Tự tin sort danh sách chưa?
-   [ ] Empty states xử lý ổn không?
-   [ ] Đã thực hành đầy đủ Lab 1, 2, 3?

### Chuẩn bị cho Đánh giá giữa kỳ

📚 Các em cố gắng ôn tập:

-   JSX, Component, Props
-   State, Event Handling
-   Conditional Rendering
-   List & Key (map, filter, sort, search)

---

**Đọc thêm:** [React Docs - Rendering Lists](https://react.dev/learn/rendering-lists)
