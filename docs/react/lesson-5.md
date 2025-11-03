# Buổi 5: List & Key

## 🎯 Mục tiêu học tập (SMART)

Sau buổi học này, học viên sẽ có thể:

1. ✅ Render **danh sách** bằng `map()` (10 phút)
2. ✅ Hiểu và sử dụng **key prop** đúng cách (15 phút)
3. ✅ Xử lý **dữ liệu động** từ API (10 phút)
4. ✅ Filter và sort **danh sách** (15 phút)
5. ✅ Tránh lỗi **key warning** (5 phút)

## 📋 Nội dung chính

### 1. Render Lists trong React

React sử dụng `map()` để chuyển mảng dữ liệu thành danh sách các element.

```javascript
const fruits = ['🍎 Táo', '🍌 Chuối', '🍊 Cam'];

function FruitList() {
    return (
        <ul>
            {fruits.map((fruit, index) => (
                <li key={index}>{fruit}</li>
            ))}
        </ul>
    );
}
```

#### Ví dụ cơ bản

```javascript
const numbers = [1, 2, 3, 4, 5];

function NumberList() {
    return (
        <ul>
            {numbers.map(number => (
                <li key={number}>{number}</li>
            ))}
        </ul>
    );
}
```

### 2. Key Prop - QUAN TRỌNG!

**Key** giúp React xác định element nào thay đổi, được thêm, hoặc bị xóa. Key phải **unique** trong danh sách.

#### Không có Key → Warning!

```javascript
// ❌ SAI - Warning: "Each child should have a unique key"
const items = ['A', 'B', 'C'];
items.map(item => <li>{item}</li>);
```

#### Sử dụng index làm key (OK với danh sách tĩnh)

```javascript
const items = ['A', 'B', 'C'];

// ✅ OK khi danh sách không thay đổi
items.map((item, index) => (
    <li key={index}>{item}</li>
));
```

#### Sử dụng ID làm key (KHUYẾN NGHỊ)

```javascript
const users = [
    { id: 1, name: 'Nguyễn Văn A' },
    { id: 2, name: 'Trần Thị B' },
    { id: 3, name: 'Lê Văn C' }
];

// ✅ ĐÚNG - Dùng unique ID
users.map(user => (
    <li key={user.id}>{user.name}</li>
));
```

#### Lưu ý quan trọng

- ✅ **Mỗi key phải unique** trong siblings
- ✅ **Đừng dùng index** khi danh sách thay đổi (thêm/xóa/sắp xếp)
- ✅ **Đừng dùng Math.random()** → mỗi lần render key khác nhau

```javascript
// ❌ SAI - Key thay đổi mỗi lần render
users.map(user => (
    <li key={Math.random()}>{user.name}</li>
));

// ✅ ĐÚNG - Key stable
users.map(user => (
    <li key={user.id}>{user.name}</li>
));
```

### 3. Nested Lists

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

### 4. Filter Lists

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

### 5. Dynamic Lists với State

```javascript
function TodoList() {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Học React' },
        { id: 2, text: 'Làm bài tập' },
        { id: 3, text: 'Review code' }
    ]);
    
    const handleDelete = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };
    
    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>
                    {todo.text}
                    <button onClick={() => handleDelete(todo.id)}>
                        Xóa
                    </button>
                </li>
            ))}
        </ul>
    );
}
```

### 6. Search/Filter Lists

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

### 7. Empty Lists

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

### Demo 3: Todo List đầy đủ

```javascript
function TodoApp() {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Học React', completed: false },
        { id: 2, text: 'Làm bài tập', completed: true },
        { id: 3, text: 'Review code', completed: false }
    ]);
    
    const [filter, setFilter] = useState('all');
    
    const handleToggle = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };
    
    const handleDelete = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };
    
    const filteredTodos = todos.filter(todo => {
        if (filter === 'active') return !todo.completed;
        if (filter === 'completed') return todo.completed;
        return true;
    });
    
    return (
        <div className="todo-app">
            <div className="filters">
                {['all', 'active', 'completed'].map(f => (
                    <button
                        key={f}
                        onClick={() => setFilter(f)}
                        className={filter === f ? 'active' : ''}
                    >
                        {f}
                    </button>
                ))}
            </div>
            
            <ul className="todo-list">
                {filteredTodos.map(todo => (
                    <li key={todo.id} className={todo.completed ? 'completed' : ''}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => handleToggle(todo.id)}
                        />
                        <span>{todo.text}</span>
                        <button onClick={() => handleDelete(todo.id)}>
                            Xóa
                        </button>
                    </li>
                ))}
            </ul>
            
            <p>
                Tổng: {todos.length} | 
                Hoàn thành: {todos.filter(t => t.completed).length}
            </p>
        </div>
    );
}

export default TodoApp;
```

## 🧪 Bài tập Lab

### Lab 1: Danh sách Tours (30 phút)

**Yêu cầu**: Hiển thị danh sách tours với filter

```javascript
const tours = [
    { id: 1, name: 'Sapa 3N2D', destination: 'Sapa', price: 2500000 },
    { id: 2, name: 'Hạ Long 2N1D', destination: 'Hạ Long', price: 1800000 },
    { id: 3, name: 'Đà Lạt 4N3D', destination: 'Đà Lạt', price: 3200000 },
    { id: 4, name: 'Phú Quốc 3N2D', destination: 'Phú Quốc', price: 3500000 }
];

function TourList() {
    const [filter, setFilter] = useState('all');
    
    // TODO: Tạo danh sách destinations unique
    // TODO: Filter tours theo destination
    // TODO: Hiển thị tours dạng card
    
    return (
        <div>
            {/* TODO: Filter buttons */}
            {/* TODO: Tour cards */}
        </div>
    );
}

export default TourList;
```

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

## ✅ Quiz kiểm tra nhanh (5 câu)

### Câu 1
Để render danh sách trong React, ta dùng:
- A. `forEach()`
- B. `map()` ✅
- C. `filter()`
- D. `reduce()`

### Câu 2
Key prop dùng để:
- A. Styling elements
- B. Xác định element nào thay đổi ✅
- C. Chỉ địa chỉ URL
- D. Quản lý state

### Câu 3
Key nên là:
- A. Luôn dùng index
- B. Unique và stable ✅
- C. Math.random()
- D. Không quan trọng

### Câu 4
Khi danh sách thay đổi thường xuyên, nên dùng key là:
- A. Index
- B. ID hoặc unique value ✅
- C. Math.random()
- D. Không cần key

### Câu 5
Để filter danh sách, ta dùng:
- A. `map()`
- B. `filter()` ✅
- C. `forEach()`
- D. `reduce()`

---

## 📝 Tổng kết

### Điểm chính

- ✅ Dùng `map()` để render danh sách
- ✅ Key prop bắt buộc, phải unique
- ✅ Dùng ID thay vì index
- ✅ Filter và search lists
- ✅ Xử lý empty states

### Checklist buổi 5

- [ ] Render được danh sách
- [ ] Dùng key prop đúng
- [ ] Filter được danh sách
- [ ] Hoàn thành Lab 1, 2, 3
- [ ] Làm đúng 4/5 câu quiz

### Chuẩn bị Đánh giá giữa kỳ 1

📚 Ôn tập:
- JSX, Component, Props
- State, Event Handling
- Conditional Rendering
- List & Key

---

**Xem thêm**: [React Documentation - Rendering Lists](https://react.dev/learn/rendering-lists)

