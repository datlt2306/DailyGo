# Buổi 3: State & Event Handling

## 🎯 Mục tiêu buổi học

> **Thầy mong muốn sau buổi học này, các em sẽ đạt được:**

1. ✅ Hiểu được **State là gì** và phân biệt State với Props
2. ✅ Biết cách sử dụng **useState** để quản lý state trong component
3. ✅ Xử lý được **các sự kiện** trong React như onClick, onChange, onSubmit
4. ✅ Cập nhật state đúng cách, tránh lỗi phổ biến
5. ✅ Xây dựng được các **interactive components** cơ bản

## 📋 Nội dung chính

### 1. State là gì?

Các bạn hình dung **state** là "bộ nhớ tạm" của component - giúp component nhớ được thông tin giữa các lần render.

#### State như một bộ nhớ của component

Giả sử mình có một form đăng ký như sau nha:

```javascript
// ❌ Vấn đề: Biến thường KHÔNG giữ được giá trị giữa các lần render
function RegistrationForm() {
    let name = ""; // ❌ Khi render lại, name bị reset về rỗng

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

Ở ví dụ trên, mỗi lần thay đổi, biến name lại bị reset về giá trị ban đầu, UI không hiện đúng ý mình nhập.

**Giải pháp**: Dùng **state**. Khi state thay đổi, React sẽ tự render lại component và giao diện được cập nhật.

```javascript [RegistrationForm.jsx]
import { useState } from "react";

function RegistrationForm() {
    // ✅ State lưu giá trị qua mỗi lần render
    const [name, setName] = useState("");

    return (
        <form>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)} // ✅ Được React kiểm soát!
            />
            <p>Bạn đã nhập: {name}</p>
        </form>
    );
}
```

Quy trình diễn ra như sau:

1. Bạn nhập "Nguyễn Văn A" → gọi `setName("Nguyễn Văn A")`
2. State đổi → React tự render lại component
3. Lúc này, `name = "Nguyễn Văn A"` nên giao diện hiển thị giống hệt ý bạn

#### So sánh: Biến thường vs State

| Đặc điểm                | Biến thường (`let`, `const`) | State (`useState`)                      |
| ----------------------- | ---------------------------- | --------------------------------------- |
| **Giữ giá trị**         | ❌ Mất khi re-render         | ✅ Lưu giữa các lần render              |
| **Kích hoạt re-render** | ❌ Không                     | ✅ Có (khi state thay đổi)              |
| **Sử dụng**             | Tính toán tạm thời           | Lưu dữ liệu động hiển thị ra UI         |
| **Ví dụ**               | `let temp = 0`               | `const [count, setCount] = useState(0)` |

#### Ví dụ thực tế: Toggle Button

```javascript [ToggleButton.jsx]
import { useState } from "react";

function ToggleButton() {
    // State ghi nhận bật/tắt
    const [isOn, setIsOn] = useState(false);

    return <button onClick={() => setIsOn(!isOn)}>{isOn ? "BẬT" : "TẮT"}</button>;
}
```

Phân tích chi tiết cho các bạn nhé:

-   Render lần đầu: `isOn = false` nên nút ghi là "TẮT"
-   Bạn bấm vào → `setIsOn(true)` → state đổi → React tự render lại
-   Lần render sau: `isOn = true` nên chuyển thành "BẬT"

Nếu ta dùng biến thường thì sao?

```javascript
// ❌ Không hiệu quả
function ToggleButton() {
    let isOn = false; // Render lại là reset về false

    return (
        <button onClick={() => (isOn = !isOn)}>
            {isOn ? "BẬT" : "TẮT"} // Lúc nào cũng là "TẮT"
        </button>
    );
}
```

#### So sánh: Props vs State

| Đặc điểm          | Props                        | State                                   |
| ----------------- | ---------------------------- | --------------------------------------- |
| **Nguồn dữ liệu** | Từ component cha             | Tự quản lý trong component              |
| **Thay đổi được** | ❌ Read-only                 | ✅ Có thể thay đổi trong component      |
| **Re-render**     | Khi component cha truyền mới | Khi gọi setState                        |
| **Sử dụng**       | Dùng để truyền giá trị xuống | Giữ các dữ liệu động trong component    |
| **Ví dụ**         | `<Button text="Click" />`    | `const [count, setCount] = useState(0)` |

#### Khi nào nên dùng State?

✅ **Các trường hợp dùng State:**

-   Component cần nhớ giá trị (form nhập, toggle, bộ đếm)
-   Dữ liệu thay đổi theo thời gian (items, trạng thái loading, v.v.)
-   Muốn mỗi lần thay đổi sẽ làm render lại UI

❌ **Không nên dùng State khi:**

-   Giá trị chỉ tính toán lại từ props (dùng biến thường)
-   Dữ liệu không đổi (dùng const)
-   Giá trị truyền từ component cha (props)

### 2. useState Hook

Các em chú ý: **useState** là Hook giúp function component có thể quản lý state.

```javascript
import { useState } from "react";

function Component() {
    // Khai báo state
    const [state, setState] = useState(initialValue);

    // state: giá trị hiện tại
    // setState: hàm để cập nhật state
    // initialValue: giá trị khởi tạo
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

Các bạn lưu ý phải **cập nhật state dựa trên giá trị cũ** nhé!

```javascript
// ❌ SAI - Ấn liên tục sẽ bị lỗi vì chưa kịp cập nhật
const [count, setCount] = useState(0);
setCount(count + 1);
setCount(count + 1); // Vẫn chỉ là count + 1

// ✅ Đúng - Dùng updater function
const [count, setCount] = useState(0);
setCount((prevCount) => prevCount + 1);
setCount((prevCount) => prevCount + 1); // Đúng là +2
```

Thầy cũng nhấn mạnh: **Không được thay đổi trực tiếp state**!

```javascript
// ❌ SAI
const [items, setItems] = useState([1, 2, 3]);
items.push(4); // Không đúng cách

// ✅ Đúng - Tạo ra mảng mới rồi set
const [items, setItems] = useState([1, 2, 3]);
setItems([...items, 4]); // Chuẩn React
```

Cập nhật object thì cũng phải tạo mới nhé:

```javascript
// ❌ SAI
const [user, setUser] = useState({ name: "A", age: 20 });
user.age = 21; // Không nên

// ✅ ĐÚNG
const [user, setUser] = useState({ name: "A", age: 20 });
setUser({ ...user, age: 21 }); // Chuẩn
```

### 4. Event Handling

Trong React, các sự kiện (event) đều dùng dạng **camelCase**.

#### onClick

```javascript
function Button() {
    const handleClick = () => {
        alert("Đã click!");
    };

    return <button onClick={handleClick}>Click me</button>;
}

// Hoặc viết nhanh
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
        setName(""); // Reset lại ô input
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
            setTodo(""); // Reset input về rỗng
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

## 🧪 Bài tập Thực hành: Todo List Tương tác

### Mục tiêu

Nhiệm vụ của các bạn: Nâng cấp Todo List từ buổi 2 với State và Event Handling để có thể thêm, xóa và đánh dấu hoàn thành công việc.

> **Lưu ý**: Các em sẽ nâng cấp các component đã tạo ở buổi 2:
>
> -   Button component: Thêm prop `onClick` để xử lý sự kiện
> -   TodoItem component: Thêm props `onToggle` và `onDelete` để xử lý tương tác

### Lab 1: Todo List với State

**Yêu cầu:** Nâng cấp TodoList từ buổi 2, thêm State và các chức năng thêm mới, xoá và toggle todo

#### Bước 1: Nâng cấp Button component với onClick

Đầu tiên, các em cần cập nhật Button component từ buổi 2 để nhận prop `onClick`:

```javascript [src/components/Button.jsx]
function Button({ children, variant = "primary", size = "medium", onClick, type = "button" }) {
    const baseClasses = "font-semibold rounded-lg transition hover:opacity-90";

    const variantClasses = {
        primary: "bg-blue-500 text-white hover:bg-blue-600",
        secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
        danger: "bg-red-500 text-white hover:bg-red-600",
        success: "bg-green-500 text-white hover:bg-green-600",
    };

    const sizeClasses = {
        small: "px-3 py-1 text-sm",
        medium: "px-4 py-2 text-base",
        large: "px-6 py-3 text-lg",
    };

    return (
        <button
            type={type}
            className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default Button;
```

> **Giải thích**:
>
> -   Thêm prop `onClick` để xử lý sự kiện click (sẽ học ở buổi này)
> -   Thêm prop `type` với giá trị mặc định là "button" (cần "submit" cho form)

#### Bước 2: Thêm State cho todos

Chuyển từ dữ liệu tĩnh (array) sang sử dụng State. Ở bước này, các em vẫn sử dụng TodoItem và TodoHeader như ở buổi 2:

```javascript [src/components/TodoList.jsx]
import { useState } from "react";
import TodoItem from "./TodoItem";
import TodoHeader from "./TodoHeader";

function TodoList() {
    // ✅ Chuyển từ const todos = [...] sang useState
    const [todos, setTodos] = useState([
        { id: 1, text: "Học React", completed: false },
        { id: 2, text: "Làm bài tập", completed: true },
        { id: 3, text: "Review code", completed: false },
    ]);

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
            {/* ✅ Sử dụng TodoHeader component từ buổi 2 */}
            <TodoHeader title="📝 Todo List">
                <span className="text-sm text-gray-500">{todos.length} tasks</span>
            </TodoHeader>

            <ul className="space-y-2 mb-4">
                {todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
```

> **Lưu ý**: 
> - Ở bước này, TodoItem vẫn chỉ nhận prop `todo` như ở buổi 2
> - Sử dụng TodoHeader component từ buổi 2 để hiển thị tiêu đề và số lượng tasks
> - Ở các bước tiếp theo, các em sẽ nâng cấp TodoItem để nhận thêm các event handlers

#### Bước 3: Nâng cấp TodoItem component với onToggle

Bây giờ các em cần nâng cấp TodoItem component từ buổi 2. Ở buổi 2, TodoItem chỉ nhận prop `todo`. Bây giờ các em sẽ thêm prop `onToggle` để xử lý sự kiện click:

::: code-group

```javascript [src/components/TodoItem.jsx]
function TodoItem({ todo, onToggle }) {
    return (
        <li
            className="flex items-center p-3 bg-gray-50 rounded border hover:bg-gray-100 transition cursor-pointer"
            onClick={() => onToggle(todo.id)}
        >
            <span
                className={`flex-1 ${
                    todo.completed ? "line-through text-gray-400" : "text-gray-700"
                }`}
            >
                {todo.text}
            </span>
            {todo.completed && <span className="text-green-500 font-bold">✓</span>}
        </li>
    );
}

export default TodoItem;
```

```javascript [src/components/TodoList.jsx]
import { useState } from "react";
import TodoItem from "./TodoItem";
import TodoHeader from "./TodoHeader";

function TodoList() {
    const [todos, setTodos] = useState([
        { id: 1, text: "Học React", completed: false },
        { id: 2, text: "Làm bài tập", completed: true },
        { id: 3, text: "Review code", completed: false },
    ]);

    const handleToggle = (id) => {
        setTodos(
            todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
        );
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
            {/* ✅ Sử dụng TodoHeader từ buổi 2 */}
            <TodoHeader title="📝 Todo List">
                <span className="text-sm text-gray-500">{todos.length} tasks</span>
            </TodoHeader>

            <ul className="space-y-2 mb-4">
                {todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} onToggle={handleToggle} />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
```

:::

#### Bước 4: Thêm chức năng Xóa

Nâng cấp TodoItem để nhận thêm prop `onDelete`:

::: code-group

```javascript [src/components/TodoItem.jsx]
function TodoItem({ todo, onToggle, onDelete }) {
    const handleDeleteClick = (e) => {
        e.stopPropagation(); // Tránh bị toggle khi click vào nút xóa
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

```javascript [src/components/TodoList.jsx]
import { useState } from "react";
import TodoItem from "./TodoItem";
import TodoHeader from "./TodoHeader";

function TodoList() {
    const [todos, setTodos] = useState([
        { id: 1, text: "Học React", completed: false },
        { id: 2, text: "Làm bài tập", completed: true },
        { id: 3, text: "Review code", completed: false },
    ]);

    const handleToggle = (id) => {
        setTodos(
            todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
        );
    };

    const handleDelete = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
            {/* ✅ Sử dụng TodoHeader từ buổi 2 */}
            <TodoHeader title="📝 Todo List">
                <span className="text-sm text-gray-500">{todos.length} tasks</span>
            </TodoHeader>

            <ul className="space-y-2 mb-4">
                {todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onToggle={handleToggle}
                        onDelete={handleDelete}
                    />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
```

:::

#### Bước 5: Thêm chức năng Thêm mới

Cuối cùng, các em sẽ thêm form để thêm todo mới. Ở đây các em sẽ sử dụng Button component đã nâng cấp ở Bước 1 và TodoHeader từ buổi 2:

```javascript [src/components/TodoList.jsx]
import { useState } from "react";
import TodoItem from "./TodoItem";
import TodoHeader from "./TodoHeader";
import Button from "./Button";

function TodoList() {
    const [todos, setTodos] = useState([
        { id: 1, text: "Học React", completed: false },
        { id: 2, text: "Làm bài tập", completed: true },
        { id: 3, text: "Review code", completed: false },
    ]);
    const [newTodo, setNewTodo] = useState("");

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

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
            {/* ✅ Sử dụng TodoHeader từ buổi 2, hiển thị số lượng tasks động */}
            <TodoHeader title="📝 Todo List">
                <span className="text-sm text-gray-500">{todos.length} tasks</span>
            </TodoHeader>

            {/* ✅ Form thêm todo mới với Button component đã nâng cấp */}
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

            <ul className="space-y-2">
                {todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onToggle={handleToggle}
                        onDelete={handleDelete}
                    />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
```

> **Lưu ý**:
>
> -   Button component đã được nâng cấp ở Bước 1 để nhận prop `onClick` và `type="submit"` cho form
> -   TodoHeader component từ buổi 2 được sử dụng để hiển thị tiêu đề và số lượng tasks (tự động cập nhật khi thêm/xóa)
> -   Form sử dụng `onSubmit` event handler để xử lý khi submit
> -   State `newTodo` được dùng để lưu giá trị input và reset về rỗng sau khi thêm
> -   Số lượng tasks trong TodoHeader tự động cập nhật nhờ `{todos.length}`

---

## 📝 Tổng kết

### Những ý chính các bạn cần nhớ

-   ✅ State là dữ liệu động, thay đổi được và làm UI cập nhật lại
-   ✅ Hook useState để thêm state cho component function
-   ✅ Dùng setState() để cập nhật state
-   ✅ Event handlers React dùng camelCase
-   ✅ Khi cập nhật state dựa trên giá trị cũ, dùng updater function cho đúng

### Checklist cho buổi 3

-   [ ] Phân biệt State và Props
-   [ ] Biết cách dùng useState
-   [ ] Xử lý được các sự kiện onClick, onChange, onSubmit trong React
-   [ ] Hoàn thành đầy đủ các Lab

### Chuẩn bị cho buổi 4

📚 Các em đọc kỹ trước:

-   Conditional Rendering
-   && operator, toán tử 3 ngôi
-   if statements với JSX

---

**Xem thêm**: [React Documentation - Interactivity](https://react.dev/learn/reacting-to-input-with-state)
