# Buổi 2: Component & Props

## 🎯 Mục tiêu buổi học

> **Thầy mong muốn sau buổi học này, các em sẽ đạt được:**

1. ✅ Tạo được **component** đúng chuẩn và biết cách **export/import**
2. ✅ Hiểu và sử dụng được **Props** để truyền dữ liệu
3. ✅ Phân biệt rõ **props** và **children**
4. ✅ Áp dụng được **defaultProps** và **propTypes** cơ bản
5. ✅ Biết cách tổ chức **nhiều component** trong một app

## 📋 Nội dung chính

### 1. Component là gì?

Các em hãy tưởng tượng **Component** như các phần tử độc lập, có thể tái sử dụng trong React. Giống như LEGO, chúng ta lắp ghép các component để tạo nên một ứng dụng hoàn chỉnh.

#### Có 2 cách tạo Component trong React

**Cách 1: Function Component (Thầy khuyến khích dùng)**

```javascript
function Welcome() {
    return <h1>Chào mừng đến với React!</h1>;
}
```

**Cách 2: Arrow Function Component**

```javascript
const Welcome = () => {
    return <h1>Chào mừng đến với React!</h1>;
};

// Dạng ngắn gọn khi chỉ return một element
const Welcome = () => <h1>Chào mừng đến với React!</h1>;
```

### 2. Export & Import

Để chia sẻ component với các file khác, ta dùng **export**. Khi sử dụng thì dùng **import**.

::: code-group

```javascript [components/Button.jsx]
export function Button() {
    return <button>Click me</button>;
}
```

```javascript [App.jsx]
import { Button } from "./components/Button";

function App() {
    return <Button />;
}
```

:::

::: code-group

```javascript [components/Button.jsx]
function Button() {
    return <button>Click me</button>;
}

export default Button; // Export mặc định
```

```javascript [App.jsx]
import Button from "./components/Button"; // Import mặc định
```

:::

### 3. Props là gì?

**Props** (Viết tắt của Properties) là cách để component cha truyền dữ liệu xuống component con. Props **chỉ đọc** (read-only), nghĩa là sinh viên không được phép thay đổi props bên trong component con.

```javascript
// Component con nhận props từ cha
function Greeting({ name, age }) {
    return (
        <div>
            <h2>Xin chào {name}!</h2>
            <p>Bạn {age} tuổi</p>
        </div>
    );
}

// Component cha truyền props xuống
function App() {
    return (
        <>
            <Greeting name="Nguyễn Văn A" age={20} />
            <Greeting name="Trần Thị B" age={19} />
        </>
    );
}
```

#### Lưu ý quan trọng

-   ✅ Props luôn **read-only**, không thể thay đổi
-   ✅ Luôn truyền dữ liệu **từ cha xuống con**, không truyền ngược lại
-   ✅ Props có thể là nhiều kiểu: **string, number, boolean, array, object, function**

```javascript
// ❌ Sai: Thay đổi giá trị props bên trong component con
function Counter({ count }) {
    count = count + 1; // Lỗi!
    return <div>{count}</div>;
}

// ✅ Đúng: Chỉ hiển thị giá trị props
function Counter({ count }) {
    return <div>{count}</div>;
}
```

### 4. Truyền props dạng Object

Thay vì truyền từng props lẻ, các em có thể truyền một object (dùng spread operator).

```javascript
// Truyền từng props lẻ
function UserCard({ name, email, avatar }) {
    return (
        <div>
            <img src={avatar} alt={name} />
            <h3>{name}</h3>
            <p>{email}</p>
        </div>
    );
}

<UserCard name="Nguyễn Văn A" email="a@example.com" avatar="/avatar.jpg" />;

// Truyền cả object, dùng spread operator
const user = {
    name: "Nguyễn Văn A",
    email: "a@example.com",
    avatar: "/avatar.jpg",
};

<UserCard {...user} />;
```

### 5. Children Props

**Children** là một props đặc biệt, chứa nội dung “con” mà các em đặt vào giữa component.

```javascript
function Card({ children }) {
    return <div className="card">{children}</div>;
}

// Sử dụng ví dụ:
<Card>
    <h2>Tiêu đề</h2>
    <p>Nội dung card</p>
</Card>;

// children sẽ là: <h2>Tiêu đề</h2> và <p>Nội dung card</p>
```

```javascript
function Container({ title, children }) {
    return (
        <div className="container">
            <h2>{title}</h2>
            {children}
        </div>
    );
}

<Container title="Sinh viên">
    <p>Danh sách sinh viên...</p>
</Container>;
```

### 6. Default Props

Nếu không truyền props vào, các em nên đặt giá trị mặc định để component hoạt động ổn định hơn.

```javascript
// Destructuring kèm default value
function Button({ text = 'Click me', color = 'blue' }) {
    return <button style={{ color }}>{text}</button>;
}

// Sử dụng:
<Button /> // text="Click me", color="blue"
<Button text="Submit" /> // text="Submit", color="blue"
<Button text="Cancel" color="red" />
```

### 7. Render Lists với map() và Key

Khi các em muốn hiển thị một danh sách các phần tử, thay vì viết từng phần tử một (như ở buổi 1), các em có thể dùng phương thức `.map()` của JavaScript.

#### Sử dụng map() để render danh sách

```javascript
const fruits = ["🍎 Táo", "🍌 Chuối", "🍊 Cam"];

function FruitList() {
    return (
        <ul>
            {fruits.map((fruit) => (
                <li>{fruit}</li>
            ))}
        </ul>
    );
}
```

#### Key Prop - BẮT BUỘC!

Khi render danh sách, React yêu cầu mỗi phần tử phải có một `key` prop duy nhất để React có thể theo dõi các phần tử nào đã thay đổi.

```javascript
// ❌ SAI - Thiếu key, React sẽ báo warning
const todos = [
    { id: 1, text: "Học React" },
    { id: 2, text: "Làm bài tập" },
];

todos.map((todo) => <li>{todo.text}</li>);

// ✅ ĐÚNG - Có key
todos.map((todo) => <li key={todo.id}>{todo.text}</li>);
```

**Quy tắc về key:**

-   ✅ Key phải **unique** (duy nhất) trong danh sách
-   ✅ Nên dùng **ID** từ dữ liệu (ví dụ: `todo.id`, `user.id`)
-   ✅ Không nên dùng `index` làm key khi danh sách có thể thay đổi (thêm/xóa/sắp xếp)
-   ❌ Không dùng `Math.random()` → key sẽ thay đổi mỗi lần render

```javascript
const todos = [
    { id: 1, text: "Học React", completed: false },
    { id: 2, text: "Làm bài tập", completed: true },
    { id: 3, text: "Review code", completed: false },
];

function TodoList() {
    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    {todo.text} {todo.completed && "✓"}
                </li>
            ))}
        </ul>
    );
}
```

> **Lưu ý**: Các em sẽ học sâu hơn về List & Key ở buổi 5. Ở buổi này, các em chỉ cần nhớ:
>
> -   Dùng `.map()` để render danh sách
> -   Luôn thêm `key` prop với giá trị unique (thường là ID)

### 8. Tổ chức component trong project

Thầy khuyên các em nên tham khảo cấu trúc thư mục sau:

```
src/
├── components/
│   ├── Button.jsx
│   ├── Card.jsx
│   └── Header.jsx
├── pages/
│   ├── Home.jsx
│   └── About.jsx
├── App.jsx
└── main.jsx
```

## 💡 Ví dụ minh họa

### Demo 1: Card Component đơn giản

::: code-group

```javascript [components/ProductCard.jsx]
function ProductCard({ name, price, image }) {
    return (
        <div className="product-card">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p className="price">{price.toLocaleString("vi-VN")} đ</p>
        </div>
    );
}

export default ProductCard;
```

```javascript [App.jsx]
import ProductCard from "./components/ProductCard";

function App() {
    const products = [
        { name: "Laptop", price: 15000000, image: "/laptop.jpg" },
        { name: "Mouse", price: 500000, image: "/mouse.jpg" },
        { name: "Keyboard", price: 1500000, image: "/keyboard.jpg" },
    ];

    return (
        <div className="product-list">
            {products.map((product) => (
                <ProductCard
                    key={product.name}
                    name={product.name}
                    price={product.price}
                    image={product.image}
                />
            ))}
        </div>
    );
}

export default App;
```

:::

### Demo 2: Component với children

::: code-group

```javascript [components/Layout.jsx]
function Layout({ header, sidebar, children }) {
    return (
        <div className="layout">
            <header>{header}</header>
            <div className="body">
                <aside>{sidebar}</aside>
                <main>{children}</main>
            </div>
        </div>
    );
}

export default Layout;
```

```javascript [App.jsx]
import Layout from "./components/Layout";

function App() {
    return (
        <Layout header={<h1>Hệ thống Quản lý</h1>} sidebar={<nav>Menu</nav>}>
            <p>Nội dung chính của trang</p>
        </Layout>
    );
}

export default App;
```

:::

## 🧪 Bài tập thực hành: Todo List với Props

### Mục tiêu

Sau bài này, các em biết tách một ứng dụng Todo List thành các component nhỏ và truyền dữ liệu qua props.

### Lab 1: Xây dựng TodoItem Component dùng Props

**Yêu cầu**: Tách TodoList thành các component nhỏ, truyền dữ liệu qua props

#### Bước 1: Tạo TodoItem Component

```javascript [src/components/TodoItem.jsx]
function TodoItem({ todo }) {
    return (
        <li className="flex items-center p-3 bg-gray-50 rounded border hover:bg-gray-100 transition">
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

#### Bước 2: Cập nhật TodoList Component với map()

Thay vì viết từng `<TodoItem />` như ở buổi 1, các em sẽ dùng `.map()` để render danh sách từ mảng `todos`:

```javascript [src/components/TodoList.jsx]
import TodoItem from "./TodoItem";

function TodoList() {
    const todos = [
        { id: 1, text: "Học React", completed: false },
        { id: 2, text: "Làm bài tập", completed: true },
        { id: 3, text: "Review code", completed: false },
    ];

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">📝 Todo List</h1>

            <ul className="space-y-2">
                {/* ✅ Dùng .map() để render danh sách, nhớ thêm key prop */}
                {todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
```

> **Giải thích**:
>
> -   `todos.map((todo) => ...)` sẽ duyệt qua từng phần tử trong mảng `todos`
> -   Mỗi phần tử được render thành một `<TodoItem />` component
> -   `key={todo.id}` là bắt buộc để React có thể theo dõi từng phần tử (đã học ở phần 7)
> -   Khi có thêm/xóa todo, React sẽ biết phần tử nào thay đổi nhờ vào `key`

#### Bước 3: Tạo TodoHeader Component với children

```javascript [src/components/TodoHeader.jsx]
function TodoHeader({ title, children }) {
    return (
        <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
            {children}
        </div>
    );
}

export default TodoHeader;
```

**Cách sử dụng:**

```javascript
<TodoHeader title="📝 Todo List">
    <span className="text-sm text-gray-500">3 tasks</span>
</TodoHeader>
```

### Lab 2: Tạo Button component với các variant

**Yêu cầu**: Tạo một component Button với TailwindCSS hỗ trợ nhiều kiểu giao diện

```javascript [src/components/Button.jsx]
function Button({ children, variant = "primary", size = "medium" }) {
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
        <button className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`}>
            {children}
        </button>
    );
}

export default Button;
```

**Gợi ý sử dụng trong TodoList:**

```javascript
import Button from "./Button";

// Thêm nút vào header
<TodoHeader title="📝 Todo List">
    <Button variant="success" size="small">
        Thêm mới
    </Button>
</TodoHeader>;
```

---

## 📝 Tổng kết

### Các điểm chính trong buổi học

-   ✅ Component là khối xây dựng cơ bản của React
-   ✅ Props truyền dữ liệu từ component cha xuống component con
-   ✅ Props luôn là dữ liệu chỉ đọc (read-only)
-   ✅ Children là một props đặc biệt chứa nội dung bên trong component
-   ✅ Có thể đặt giá trị mặc định cho props bằng destructuring với `=`
-   ✅ Dùng `.map()` để render danh sách từ mảng
-   ✅ Key prop là bắt buộc và phải unique khi render danh sách

### Checklist buổi 2

-   [ ] Hiểu được Component & Props
-   [ ] Biết cách export/import
-   [ ] Tạo được component có props
-   [ ] Sử dụng được children props
-   [ ] Biết cách dùng `.map()` để render danh sách
-   [ ] Hiểu và sử dụng đúng `key` prop
-   [ ] Hoàn thành Lab 1, 2

### Chuẩn bị cho buổi 3

📚 Các em đọc trước:

-   State là gì?
-   Event Handling trong React
-   onClick, onChange, onSubmit

---

**Tài liệu xem thêm**: [React Documentation - Passing Props](https://react.dev/learn/passing-props-to-a-component)
