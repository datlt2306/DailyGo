# Buổi 5: List & Key Nâng cao

## 🎯 Mục tiêu học tập (SMART)

Sau buổi học này, học viên sẽ có thể:

1. ✅ Hiểu sâu hơn về **key prop** và khi nào dùng index (10 phút)
2. ✅ Xử lý **nested lists** (danh sách lồng nhau) (15 phút)
3. ✅ Filter và sort **danh sách động** (15 phút)
4. ✅ Tìm kiếm trong danh sách (10 phút)
5. ✅ Xử lý **empty states** và loading states (10 phút)

## 📋 Nội dung chính

### 1. Ôn tập: map() và Key

> **Lưu ý**: Các em đã học về `.map()` và `key` prop ở buổi 2. Ở buổi này, thầy sẽ nhắc lại và đi sâu hơn vào các trường hợp đặc biệt.

#### Nhắc lại quy tắc về Key

-   ✅ Key phải **unique** trong danh sách
-   ✅ Nên dùng **ID** từ dữ liệu (ví dụ: `todo.id`, `user.id`)
-   ❌ Không dùng `Math.random()` → key sẽ thay đổi mỗi lần render
-   ⚠️ Có thể dùng `index` nhưng chỉ khi danh sách **không thay đổi** (không thêm/xóa/sắp xếp)

#### Khi nào có thể dùng index làm key?

```javascript
// ✅ OK - Danh sách tĩnh, không thay đổi
const categories = ["Tech", "Fashion", "Food"];

categories.map((category, index) => (
    <button key={index}>{category}</button>
));

// ❌ KHÔNG NÊN - Danh sách động, có thể thêm/xóa
const todos = [
    { id: 1, text: "Học React" },
    { id: 2, text: "Làm bài tập" },
];

// Nếu dùng index, khi xóa phần tử đầu tiên, React sẽ nhầm lẫn
todos.map((todo, index) => <TodoItem key={index} todo={todo} />); // ❌

// ✅ ĐÚNG - Dùng ID
todos.map((todo) => <TodoItem key={todo.id} todo={todo} />);
```

### 2. Nested Lists (Danh sách lồng nhau)

```javascript
const students = [
    {
        id: 1,
        name: 'Nguyễn Văn A',
        subjects: ['Toán', 'Lý', 'Hóa']
    },
    {
        id: 2,
        name: 'Trần Thị B',
        subjects: ['Văn', 'Sử', 'Địa']
    }
];

function StudentList() {
    return (
        <div>
            {students.map(student => (
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

### 3. Filter Lists (Lọc danh sách)

```javascript
const products = [
    { id: 1, name: 'Laptop', price: 15000000, category: 'electronics' },
    { id: 2, name: 'T-shirt', price: 200000, category: 'clothing' },
    { id: 3, name: 'Mouse', price: 500000, category: 'electronics' }
];

function ProductList({ category }) {
    const filteredProducts = products.filter(product => 
        product.category === category
    );
    
    return (
        <div>
            {filteredProducts.map(product => (
                <div key={product.id}>
                    <h3>{product.name}</h3>
                    <p>{product.price.toLocaleString('vi-VN')} đ</p>
                </div>
            ))}
        </div>
    );
}
```

### 4. Dynamic Lists với State

> **Lưu ý**: Các em đã học về Dynamic Lists với State ở buổi 3 (TodoList với thêm, xóa, toggle). Ở buổi này, thầy chỉ nhắc lại cách sử dụng `.map()` và `key` prop với state.

Các em đã biết cách:
-   Dùng `useState` để quản lý danh sách
-   Dùng `.map()` để render danh sách từ state
-   Dùng `key={item.id}` để React theo dõi phần tử
-   Cập nhật state khi thêm/xóa/sửa phần tử

### 5. Search/Filter Lists (Tìm kiếm trong danh sách)

```javascript
function ProductList() {
    const [products] = useState([
        { id: 1, name: 'Laptop Dell', price: 15000000 },
        { id: 2, name: 'Laptop HP', price: 12000000 },
        { id: 3, name: 'Mouse Logitech', price: 500000 }
    ]);
    
    const [searchTerm, setSearchTerm] = useState('');
    
    const filteredProducts = products.filter(product =>
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
            
            {filteredProducts.map(product => (
                <div key={product.id}>
                    <h3>{product.name}</h3>
                    <p>{product.price.toLocaleString('vi-VN')} đ</p>
                </div>
            ))}
        </div>
    );
}
```

### 6. Empty States (Xử lý danh sách rỗng)

```javascript
function ProductList({ products }) {
    if (products.length === 0) {
        return <p>Không có sản phẩm nào</p>;
    }
    
    return (
        <div>
            {products.map(product => (
                <div key={product.id}>
                    {product.name}
                </div>
            ))}
        </div>
    );
}
```

## 💡 Ví dụ minh họa

### Demo 1: Student List

```javascript
const students = [
    { id: 1, name: 'Nguyễn Văn A', score: 85 },
    { id: 2, name: 'Trần Thị B', score: 92 },
    { id: 3, name: 'Lê Văn C', score: 78 }
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
                                {student.score >= 90 ? 'Xuất sắc' :
                                 student.score >= 80 ? 'Giỏi' :
                                 student.score >= 70 ? 'Khá' :
                                 'Trung bình'}
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
        { id: 1, name: 'Laptop', price: 15000000, category: 'tech' },
        { id: 2, name: 'T-shirt', price: 200000, category: 'fashion' },
        { id: 3, name: 'Mouse', price: 500000, category: 'tech' },
        { id: 4, name: 'Jeans', price: 800000, category: 'fashion' }
    ]);
    
    const [selectedCategory, setSelectedCategory] = useState('all');
    
    const categories = ['all', 'tech', 'fashion'];
    const filteredProducts = selectedCategory === 'all'
        ? products
        : products.filter(p => p.category === selectedCategory);
    
    return (
        <div className="gallery">
            <div className="filters">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={selectedCategory === cat ? 'active' : ''}
                    >
                        {cat}
                    </button>
                ))}
            </div>
            
            <div className="products">
                {filteredProducts.map(product => (
                    <div key={product.id} className="product-card">
                        <h3>{product.name}</h3>
                        <p className="price">
                            {product.price.toLocaleString('vi-VN')} đ
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductGallery;
```

### Demo 3: Todo List với Sort (Sắp xếp)

> **Lưu ý**: Demo này nâng cấp TodoList từ buổi 3, 4, thêm tính năng sắp xếp danh sách.

```javascript
function TodoApp() {
    const [todos, setTodos] = useState([
        { id: 1, text: "Học React", completed: false, priority: "high" },
        { id: 2, text: "Làm bài tập", completed: true, priority: "medium" },
        { id: 3, text: "Review code", completed: false, priority: "low" },
    ]);

    const [filter, setFilter] = useState("all");
    const [sortBy, setSortBy] = useState("none"); // 'none', 'priority', 'alphabetical'

    // Filter logic (đã học ở buổi 4)
    const filteredTodos = todos.filter((todo) => {
        if (filter === "active") return !todo.completed;
        if (filter === "completed") return todo.completed;
        return true;
    });

    // ✅ Sort logic (mới)
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
            {/* Filter buttons (đã học ở buổi 4) */}
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
            
            {/* ✅ Sort options (mới) */}
            <div className="sort-options">
                <label>Sắp xếp: </label>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="none">Không sắp xếp</option>
                    <option value="priority">Theo độ ưu tiên</option>
                    <option value="alphabetical">Theo tên (A-Z)</option>
                </select>
            </div>

            {/* Todo list với key từ id */}
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

## 🧪 Bài tập Thực hành: Nâng cấp Todo List

### Mục tiêu
Nâng cấp Todo List từ buổi 3, 4 với các tính năng nâng cao: sort, search, nested lists.

### Lab 1: Todo List với Sort và Search (50 phút)

**Yêu cầu**: Nâng cấp TodoList từ buổi 4, thêm tính năng sắp xếp và tìm kiếm

#### Bước 1: Thêm Search (Tìm kiếm) (20 phút)

Nâng cấp TodoList từ buổi 4, thêm tính năng tìm kiếm:

```javascript [src/components/TodoList.jsx]
import { useState } from "react";
import TodoItem from "./TodoItem";
import Button from "./Button";

function TodoList() {
    // State từ buổi 3, 4
    const [todos, setTodos] = useState([
        { id: 1, text: "Học React", completed: false, priority: "high" },
        { id: 2, text: "Làm bài tập", completed: true, priority: "medium" },
        { id: 3, text: "Review code", completed: false, priority: "low" },
    ]);
    const [newTodo, setNewTodo] = useState("");
    const [filter, setFilter] = useState("all");
    const [priority, setPriority] = useState("medium");

    // ✅ Thêm state mới cho search
    const [searchTerm, setSearchTerm] = useState("");

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
            setTodos([...todos, { id: newId, text: newTodo, completed: false, priority }]);
            setNewTodo("");
            setPriority("medium");
        }
    };

    // Filter logic từ buổi 4
    const filteredTodos = todos.filter((todo) => {
        if (filter === "active") return !todo.completed;
        if (filter === "completed") return todo.completed;
        return true;
    });

    // ✅ Search logic (mới)
    const searchedTodos = filteredTodos.filter((todo) =>
        todo.text.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">📝 Todo List</h1>

            {/* ✅ Search input (mới) */}
            <div className="mb-4">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Tìm kiếm công việc..."
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Form thêm todo từ buổi 3 */}
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

            {/* Filter buttons từ buổi 4 */}
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

            {/* Todo list với key từ id */}
            <ul className="space-y-2">
                {searchedTodos.length === 0 ? (
                    <li className="text-center text-gray-500 py-4">
                        {searchTerm
                            ? "Không tìm thấy công việc nào"
                            : "Không có công việc nào"}
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

Thêm tính năng sắp xếp danh sách:

```javascript [src/components/TodoList.jsx]
// ... existing code ...

function TodoList() {
    // ... existing state ...
    const [sortBy, setSortBy] = useState("none"); // 'none', 'priority', 'alphabetical'

    // ... existing handlers và filter logic ...

    // ✅ Sort logic (mới)
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
            {/* ... existing code ... */}

            {/* ✅ Sort options (mới) */}
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

            {/* Todo list - dùng sortedTodos thay vì searchedTodos */}
            <ul className="space-y-2">
                {sortedTodos.length === 0 ? (
                    <li className="text-center text-gray-500 py-4">
                        {searchTerm
                            ? "Không tìm thấy công việc nào"
                            : "Không có công việc nào"}
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

> **Lưu ý**:
>
> -   Khi sort, cần tạo bản sao mảng với `[...searchedTodos]` để không làm thay đổi mảng gốc
> -   Key prop vẫn dùng `todo.id` (không dùng index) để đảm bảo React theo dõi đúng phần tử
> -   Kết hợp filter → search → sort theo thứ tự

### Lab 2: Shopping Cart (30 phút)

**Yêu cầu**: Giỏ hàng với thêm/xóa/sp tính tổng

```javascript
function ShoppingCart() {
    const [items, setItems] = useState([
        { id: 1, name: 'Laptop', price: 15000000, quantity: 1 },
        { id: 2, name: 'Mouse', price: 500000, quantity: 2 }
    ]);
    
    const handleIncrease = (id) => {
        // TODO: Tăng quantity
    };
    
    const handleDecrease = (id) => {
        // TODO: Giảm quantity, xóa nếu = 0
    };
    
    const total = items.reduce((sum, item) => 
        sum + (item.price * item.quantity), 0
    );
    
    return (
        <div>
            <h2>Giỏ hàng</h2>
            {/* TODO: Render items */}
            {/* TODO: Hiển thị tổng tiền */}
        </div>
    );
}

export default ShoppingCart;
```

### Lab 3: Notification List (25 phút)

**Yêu cầu**: Danh sách thông báo với đánh dấu đã đọc

```javascript
function NotificationList() {
    const [notifications, setNotifications] = useState([
        { id: 1, message: 'Bạn có tin nhắn mới', read: false },
        { id: 2, message: 'Đơn hàng đã được xác nhận', read: false },
        { id: 3, message: 'Thời tiết hôm nay đẹp', read: true }
    ]);
    
    const handleMarkRead = (id) => {
        // TODO: Đánh dấu đã đọc
    };
    
    const unreadCount = notifications.filter(n => !n.read).length;
    
    return (
        <div>
            <h2>
                Thông báo
                {unreadCount > 0 && (
                    <span className="badge">{unreadCount}</span>
                )}
            </h2>
            {/* TODO: Render notifications */}
            {/* TODO: Highlight chưa đọc */}
        </div>
    );
}

export default NotificationList;
```

---

## 📝 Tổng kết

### Điểm chính

-   ✅ Ôn tập về `.map()` và `key` prop (đã học ở buổi 2)
-   ✅ Hiểu khi nào có thể dùng `index` làm key
-   ✅ Xử lý nested lists (danh sách lồng nhau)
-   ✅ Filter và search lists
-   ✅ Sort (sắp xếp) danh sách
-   ✅ Xử lý empty states
-   ✅ Kết hợp filter → search → sort

### Checklist buổi 5

-   [ ] Hiểu sâu hơn về key prop và khi nào dùng index
-   [ ] Xử lý được nested lists
-   [ ] Filter và search được danh sách
-   [ ] Sort được danh sách theo nhiều tiêu chí
-   [ ] Xử lý được empty states
-   [ ] Hoàn thành Lab 1, 2, 3

### Chuẩn bị Đánh giá giữa kỳ 1

📚 Ôn tập:
-   JSX, Component, Props
-   State, Event Handling
-   Conditional Rendering
-   List & Key (map, filter, sort, search)

---

**Xem thêm**: [React Documentation - Rendering Lists](https://react.dev/learn/rendering-lists)

