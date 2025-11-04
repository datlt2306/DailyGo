# Buổi 3: State & Event Handling

## 🎯 Mục tiêu học tập (SMART)

Sau buổi học này, học viên sẽ có thể:

1. ✅ Hiểu được **State là gì** và khác với Props (10 phút)
2. ✅ Sử dụng được **useState** để quản lý state (15 phút)
3. ✅ Xử lý được **các sự kiện** (onClick, onChange, onSubmit) (15 phút)
4. ✅ Thực hiện **Cập nhật state** đúng cách (10 phút)
5. ✅ Xây dựng được **interactive components** đơn giản (15 phút)

## 📋 Nội dung chính

### 1. State là gì?

**State** là "bộ nhớ" của component - nó giúp component "nhớ" thông tin giữa các lần render.

#### State như một bộ nhớ

Hãy tưởng tượng component như một form đăng ký:

```javascript
// ❌ Vấn đề: Biến thường KHÔNG giữ được giá trị giữa các lần render
function RegistrationForm() {
    let name = ""; // ❌ Mỗi lần render, name lại trở về rỗng

    return (
        <form>
            <input
                type="text"
                value={name}
                onChange={(e) => (name = e.target.value)} // ❌ Không hoạt động!
            />
            <p>Bạn đã nhập: {name}</p>
        </form>
    );
}
```

**Vấn đề**: Khi bạn gõ vào input, `name` được gán giá trị mới, nhưng component không re-render, nên UI không cập nhật!

**Giải pháp**: Dùng **State** - state thay đổi → React tự động re-render → UI cập nhật:

```javascript [RegistrationForm.jsx]
import { useState } from "react";

function RegistrationForm() {
    // ✅ State "nhớ" giá trị giữa các lần render
    const [name, setName] = useState("");

    return (
        <form>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)} // ✅ Hoạt động!
            />
            <p>Bạn đã nhập: {name}</p>
        </form>
    );
}
```

**Điều gì xảy ra:**

1. User gõ "Nguyễn Văn A" → `setName("Nguyễn Văn A")` được gọi
2. State thay đổi → React phát hiện → **Re-render component**
3. Component render lại với `name = "Nguyễn Văn A"` → UI hiển thị text mới

#### So sánh: Biến thường vs State

| Đặc điểm                | Biến thường (`let`, `const`) | State (`useState`)                      |
| ----------------------- | ---------------------------- | --------------------------------------- |
| **Giữ giá trị**         | ❌ Mất khi re-render         | ✅ Giữ giữa các lần render              |
| **Kích hoạt re-render** | ❌ Không                     | ✅ Có (khi state thay đổi)              |
| **Sử dụng**             | Tính toán tạm thời           | Lưu trữ dữ liệu cần hiển thị            |
| **Ví dụ**               | `let temp = 0`               | `const [count, setCount] = useState(0)` |

#### Ví dụ thực tế: Toggle Button

```javascript [ToggleButton.jsx]
import { useState } from "react";

function ToggleButton() {
    // State "nhớ" trạng thái on/off
    const [isOn, setIsOn] = useState(false);

    return <button onClick={() => setIsOn(!isOn)}>{isOn ? "BẬT" : "TẮT"}</button>;
}
```

**Giải thích:**

-   Lần render đầu: `isOn = false` → Hiển thị "TẮT"
-   User click → `setIsOn(true)` → State thay đổi → Re-render
-   Lần render thứ 2: `isOn = true` → Hiển thị "BẬT"

**Nếu dùng biến thường:**

```javascript
// ❌ KHÔNG hoạt động
function ToggleButton() {
    let isOn = false; // Mỗi lần render lại = false

    return (
        <button onClick={() => (isOn = !isOn)}>
            {isOn ? "BẬT" : "TẮT"} // Luôn hiển thị "TẮT"
        </button>
    );
}
```

#### So sánh: Props vs State

| Đặc điểm          | Props                     | State                                   |
| ----------------- | ------------------------- | --------------------------------------- |
| **Nguồn dữ liệu** | Từ component cha          | Bên trong component                     |
| **Thay đổi được** | ❌ Read-only              | ✅ Có thể thay đổi                      |
| **Re-render**     | Khi cha thay đổi props    | Khi setState                            |
| **Sử dụng**       | Truyền dữ liệu xuống      | Lưu trữ dữ liệu động                    |
| **Ví dụ**         | `<Button text="Click" />` | `const [count, setCount] = useState(0)` |

#### Khi nào dùng State?

✅ **Dùng State khi:**

-   Component cần "nhớ" giá trị (form input, toggle, counter)
-   Dữ liệu thay đổi theo thời gian (số lượng items, trạng thái loading)
-   Cần re-render khi dữ liệu thay đổi

❌ **KHÔNG dùng State khi:**

-   Giá trị tính toán từ props (dùng biến thường)
-   Giá trị không thay đổi (dùng `const`)
-   Giá trị từ component cha (dùng props)

### 2. useState Hook

**useState** là Hook cho phép thêm state vào function component.

```javascript
import { useState } from "react";

function Component() {
    // Khai báo state
    const [state, setState] = useState(initialValue);

    // state: giá trị hiện tại
    // setState: function để thay đổi state
    // initialValue: giá trị ban đầu
}
```

#### Ví dụ cơ bản

```javascript
function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Đếm: {count}</p>
            <button onClick={() => setCount(count + 1)}>Tăng</button>
            <button onClick={() => setCount(count - 1)}>Giảm</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
}
```

### 3. Cập nhật state đúng cách

#### Quy tắc quan trọng

**✅ Cập nhật state dựa trên giá trị cũ**

```javascript
// ❌ SAI - Nếu click nhiều lần cùng lúc sẽ bị lỗi
const [count, setCount] = useState(0);
setCount(count + 1);
setCount(count + 1); // Vẫn là count + 1, không phải count + 2

// ✅ ĐÚNG - Dùng updater function
const [count, setCount] = useState(0);
setCount((prevCount) => prevCount + 1);
setCount((prevCount) => prevCount + 1); // Đúng là + 2
```

**✅ Không trực tiếp mutate state**

```javascript
// ❌ SAI
const [items, setItems] = useState([1, 2, 3]);
items.push(4); // Mutation!

// ✅ ĐÚNG - Tạo copy mới
const [items, setItems] = useState([1, 2, 3]);
setItems([...items, 4]); // Tạo array mới
```

**✅ Cập nhật object đúng cách**

```javascript
// ❌ SAI
const [user, setUser] = useState({ name: "A", age: 20 });
user.age = 21; // Mutation!

// ✅ ĐÚNG
const [user, setUser] = useState({ name: "A", age: 20 });
setUser({ ...user, age: 21 }); // Tạo object mới
```

### 4. Event Handling

React sử dụng **camelCase** cho tên event handler.

#### onClick

```javascript
function Button() {
    const handleClick = () => {
        alert("Đã click!");
    };

    return <button onClick={handleClick}>Click me</button>;
}

// Inline
<button onClick={() => alert("Clicked!")}>Click</button>;
```

#### onChange

```javascript
function Input() {
    const [value, setValue] = useState("");

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <div>
            <input value={value} onChange={handleChange} placeholder="Nhập text..." />
            <p>Bạn đã nhập: {value}</p>
        </div>
    );
}
```

#### onSubmit

```javascript
function Form() {
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); // Ngăn reload trang
        alert(`Chào mừng ${name}!`);
        setName(""); // Reset
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nhập tên" />
            <button type="submit">Gửi</button>
        </form>
    );
}
```

### 5. Nhiều state trong 1 component

```javascript
function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState(0);

    return (
        <form>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Tên" />
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <input
                type="number"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                placeholder="Tuổi"
            />
        </form>
    );
}
```

### 6. State với objects

```javascript
function Form() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        age: 0,
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <form>
            <input name="name" value={formData.name} onChange={handleChange} placeholder="Tên" />
            <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
            />
            <input
                name="age"
                type="number"
                value={formData.age}
                onChange={handleChange}
                placeholder="Tuổi"
            />
        </form>
    );
}
```

## 💡 Ví dụ minh họa

### Demo 1: Counter App

```javascript
function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="counter">
            <h2>Đếm: {count}</h2>
            <div className="buttons">
                <button onClick={() => setCount(count + 1)}>Tăng</button>
                <button onClick={() => setCount(count - 1)}>Giảm</button>
                <button onClick={() => setCount(0)}>Reset</button>
            </div>
        </div>
    );
}

export default Counter;
```

### Demo 2: Todo Input

```javascript
function TodoApp() {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);

    const handleAdd = (e) => {
        e.preventDefault();
        if (todo.trim()) {
            setTodos([...todos, todo]);
            setTodo(""); // Reset input
        }
    };

    return (
        <div>
            <form onSubmit={handleAdd}>
                <input
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    placeholder="Nhập công việc..."
                />
                <button type="submit">Thêm</button>
            </form>

            <ul>
                {todos.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default TodoApp;
```

### Demo 3: Toggle Component

```javascript
function ToggleSwitch() {
    const [isOn, setIsOn] = useState(false);

    const handleToggle = () => {
        setIsOn(!isOn);
    };

    return (
        <div>
            <button onClick={handleToggle}>{isOn ? "BẬT" : "TẮT"}</button>
            <p>Trạng thái: {isOn ? "Đang bật" : "Đang tắt"}</p>
        </div>
    );
}

export default ToggleSwitch;
```

## 🧪 Bài tập Lab

### Lab 1: Like Counter (20 phút)

**Yêu cầu**: Tạo component Like Button

```javascript
function LikeButton() {
    const [likes, setLikes] = useState(0);

    // TODO:
    // - Hiển thị số lượt thích
    // - Click để tăng lượt thích
    // - Hiển thị "❤️" nếu likes > 0

    return <div className="like-button">{/* TODO: Implement */}</div>;
}

export default LikeButton;
```

### Lab 2: Calculator đơn giản (25 phút)

**Yêu cầu**: Tạo máy tính cộng/trừ/nhân/chia

```javascript
function Calculator() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result, setResult] = useState(0);

    const handleCalculate = (operator) => {
        // TODO: Tính toán dựa trên operator
        // +, -, *, /
    };

    return (
        <div className="calculator">
            <input type="number" value={num1} onChange={(e) => setNum1(Number(e.target.value))} />
            <input type="number" value={num2} onChange={(e) => setNum2(Number(e.target.value))} />

            <div className="buttons">
                <button onClick={() => handleCalculate("+")}>+</button>
                <button onClick={() => handleCalculate("-")}>-</button>
                <button onClick={() => handleCalculate("*")}>*</button>
                <button onClick={() => handleCalculate("/")}>/</button>
            </div>

            <p>Kết quả: {result}</p>
        </div>
    );
}

export default Calculator;
```

### Lab 3: Product Selection (30 phút)

**Yêu cầu**: Chọn sản phẩm và hiển thị thông tin

```javascript
const products = [
    { id: 1, name: "Laptop", price: 15000000 },
    { id: 2, name: "Mouse", price: 500000 },
    { id: 3, name: "Keyboard", price: 1500000 },
];

function ProductSelector() {
    const [selectedProduct, setSelectedProduct] = useState(null);

    return (
        <div className="product-selector">
            <h2>Chọn sản phẩm</h2>
            <div className="products">
                {/* TODO: Hiển thị danh sách sản phẩm */}
                {/* TODO: Click để chọn sản phẩm */}
            </div>

            {selectedProduct && (
                <div className="selected">
                    <h3>Đã chọn: {selectedProduct.name}</h3>
                    <p>Giá: {selectedProduct.price.toLocaleString("vi-VN")} đ</p>
                </div>
            )}
        </div>
    );
}

export default ProductSelector;
```

### Lab 4: Form đăng ký (25 phút)

**Yêu cầu**: Tạo form đăng ký đơn giản

```javascript
function RegisterForm() {
    // TODO: Tạo state cho form fields
    // name, email, password, confirmPassword

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Validate password khớp với confirmPassword
        // TODO: Hiển thị alert với thông tin đăng ký
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* TODO: Tạo các input fields */}
            {/* TODO: Validate và hiển thị error message */}
            <button type="submit">Đăng ký</button>
        </form>
    );
}

export default RegisterForm;
```

---

## 📝 Tổng kết

### Điểm chính

-   ✅ State là dữ liệu động, có thể thay đổi
-   ✅ useState Hook để thêm state vào component
-   ✅ setState() để cập nhật state
-   ✅ Event handlers dùng camelCase
-   ✅ Cập nhật state dựa trên giá trị cũ với updater function

### Checklist buổi 3

-   [ ] Hiểu được State vs Props
-   [ ] Sử dụng được useState
-   [ ] Xử lý được onClick, onChange, onSubmit
-   [ ] Hoàn thành Lab 1, 2, 3, 4

### Chuẩn bị buổi 4

📚 Đọc trước:

-   Conditional Rendering
-   && operator, ternary operator
-   if statements với JSX

---

**Xem thêm**: [React Documentation - Interactivity](https://react.dev/learn/reacting-to-input-with-state)
