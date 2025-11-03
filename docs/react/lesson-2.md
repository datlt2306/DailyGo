# Buổi 2: Component & Props

## 🎯 Mục tiêu học tập (SMART)

Sau buổi học này, học viên sẽ có thể:

1. ✅ Tạo được **component** đúng cách và **export/import** (10 phút)
2. ✅ Hiểu và sử dụng được **Props** để truyền dữ liệu (15 phút)
3. ✅ Phân biệt được **props vs children** (10 phút)
4. ✅ Áp dụng **defaultProps** và **propTypes** cơ bản (10 phút)
5. ✅ Tổ chức được **nhiều components** trong 1 app (10 phút)

## 📋 Nội dung chính

### 1. Component là gì?

**Component** là các phần tử độc lập, có thể tái sử dụng của React. Tương tự như các khối LEGO, bạn lắp ghép chúng để tạo ứng dụng.

#### Có 2 cách tạo Component

**Cách 1: Function Component (Khuyên dùng)**

```javascript
function Welcome() {
    return <h1>Chào mừng đến với React!</h1>;
}
```

**Cách 2: Arrow Function**

```javascript
const Welcome = () => {
    return <h1>Chào mừng đến với React!</h1>;
};

// Dạng ngắn (khi chỉ return 1 element)
const Welcome = () => <h1>Chào mừng đến với React!</h1>;
```

### 2. Export & Import

**Export** để chia sẻ component, **Import** để sử dụng component từ file khác.

```javascript
// components/Button.jsx
export function Button() {
    return <button>Click me</button>;
}

// App.jsx
import { Button } from './components/Button';

function App() {
    return <Button />;
}
```

```javascript
// components/Button.jsx
function Button() {
    return <button>Click me</button>;
}

export default Button; // Export mặc định

// App.jsx
import Button from './components/Button'; // Import mặc định
```

### 3. Props là gì?

**Props** (Properties) là cách truyền dữ liệu từ component cha xuống component con. Props **read-only**, không thể thay đổi.

```javascript
// Component con nhận props
function Greeting({ name, age }) {
    return (
        <div>
            <h2>Xin chào {name}!</h2>
            <p>Bạn {age} tuổi</p>
        </div>
    );
}

// Component cha truyền props
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

- ✅ Props là **read-only** (không thể thay đổi)
- ✅ Luôn truyền **từ cha → con**, không truyền ngược lại
- ✅ Props có thể là **string, number, boolean, array, object, function**

```javascript
// ❌ SAI - Cố gắng thay đổi props
function Counter({ count }) {
    count = count + 1; // Error!
    return <div>{count}</div>;
}

// ✅ ĐÚNG - Chỉ hiển thị
function Counter({ count }) {
    return <div>{count}</div>;
}
```

### 4. Props với Object

Thay vì truyền nhiều props rời rạc, có thể truyền object.

```javascript
// Cách 1: Truyền rời rạc
function UserCard({ name, email, avatar }) {
    return (
        <div>
            <img src={avatar} alt={name} />
            <h3>{name}</h3>
            <p>{email}</p>
        </div>
    );
}

<UserCard 
    name="Nguyễn Văn A"
    email="a@example.com"
    avatar="/avatar.jpg"
/>

// Cách 2: Truyền object (Spread operator)
const user = {
    name: 'Nguyễn Văn A',
    email: 'a@example.com',
    avatar: '/avatar.jpg'
};

<UserCard {...user} />
```

### 5. Children Props

**Children** là prop đặc biệt, chứa nội dung bên trong component.

```javascript
function Card({ children }) {
    return (
        <div className="card">
            {children}
        </div>
    );
}

// Sử dụng
<Card>
    <h2>Tiêu đề</h2>
    <p>Nội dung card</p>
</Card>

// children = <h2>Tiêu đề</h2> + <p>Nội dung card</p>
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
</Container>
```

### 6. Default Props

Đặt giá trị mặc định cho props khi không được truyền vào.

```javascript
// Cách 1: Destructuring với default value
function Button({ text = 'Click me', color = 'blue' }) {
    return <button style={{ color }}>{text}</button>;
}

// Sử dụng
<Button /> // text="Click me", color="blue"
<Button text="Submit" /> // text="Submit", color="blue"
<Button text="Cancel" color="red" />
```

### 7. Tổ chức Components

Cấu trúc thư mục khuyến nghị:

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

```javascript
// components/ProductCard.jsx
function ProductCard({ name, price, image }) {
    return (
        <div className="product-card">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p className="price">{price.toLocaleString('vi-VN')} đ</p>
        </div>
    );
}

export default ProductCard;
```

```javascript
// App.jsx
import ProductCard from './components/ProductCard';

function App() {
    const products = [
        { name: 'Laptop', price: 15000000, image: '/laptop.jpg' },
        { name: 'Mouse', price: 500000, image: '/mouse.jpg' },
        { name: 'Keyboard', price: 1500000, image: '/keyboard.jpg' }
    ];
    
    return (
        <div className="product-list">
            {products.map(product => (
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

### Demo 2: Component với children

```javascript
// components/Layout.jsx
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

```javascript
// App.jsx
import Layout from './components/Layout';

function App() {
    return (
        <Layout
            header={<h1>Hệ thống Quản lý</h1>}
            sidebar={<nav>Menu</nav>}
        >
            <p>Nội dung chính của trang</p>
        </Layout>
    );
}

export default App;
```

## 🧪 Bài tập Lab

### Lab 1: User Card Component (30 phút)

**Yêu cầu**: Tạo component `UserCard` hiển thị thông tin user

```javascript
// components/UserCard.jsx
function UserCard({ user }) {
    // TODO: Hiển thị thông tin user
    // - Avatar (hình tròn, border)
    // - Họ tên (bold, màu xanh)
    // - Chức vụ (italic)
    // - Email (màu xám)
    return (
        <div className="user-card">
            {/* TODO: Implement */}
        </div>
    );
}

export default UserCard;
```

**Test data**:

```javascript
const users = [
    { name: 'Nguyễn Văn A', role: 'Sinh viên', email: 'a@example.com' },
    { name: 'Trần Thị B', role: 'Giảng viên', email: 'b@example.com' },
    { name: 'Lê Văn C', role: 'Admin', email: 'c@example.com' }
];
```

### Lab 2: Bài học Component (25 phút)

**Yêu cầu**: Tạo hệ thống hiển thị bài học

```javascript
// components/LessonCard.jsx
function LessonCard({ title, duration, difficulty, content }) {
    // TODO: Hiển thị:
    // - Tiêu đề bài học (large)
    // - Thời lượng (badge màu xanh)
    // - Độ khó (badge màu cam nếu "Khó")
    // - Nội dung (nền xám nhạt)
    return (
        <div className="lesson-card">
            {/* TODO: Implement */}
        </div>
    );
}

export default LessonCard;
```

**Test data**:

```javascript
const lessons = [
    { 
        title: 'React là gì?', 
        duration: '30 phút', 
        difficulty: 'Dễ',
        content: 'Giới thiệu về React và cách hoạt động'
    },
    { 
        title: 'Hooks trong React', 
        duration: '60 phút', 
        difficulty: 'Khó',
        content: 'Tìm hiểu useState, useEffect và custom hooks'
    }
];
```

### Lab 3: Button với variants (25 phút)

**Yêu cầu**: Tạo component Button có nhiều variant

```javascript
// components/Button.jsx
function Button({ children, variant = 'primary', size = 'medium' }) {
    // TODO: Tạo các variant:
    // - primary (nền xanh, chữ trắng)
    // - secondary (nền xám, chữ đen)
    // - danger (nền đỏ, chữ trắng)
    // - success (nền xanh lá, chữ trắng)
    // 
    // Tạo các size:
    // - small (padding nhỏ)
    // - medium (padding vừa)
    // - large (padding lớn)
    return (
        <button className={`btn btn-${variant} btn-${size}`}>
            {children}
        </button>
    );
}

export default Button;
```

**Test**:

```javascript
<Button>Mặc định</Button>
<Button variant="primary">Primary</Button>
<Button variant="danger" size="large">Xóa</Button>
<Button variant="success" size="small">Lưu</Button>
```

---

## ✅ Quiz kiểm tra nhanh (5 câu)

### Câu 1
Props được dùng để:
- A. Thay đổi state trong component
- B. Truyền dữ liệu từ component cha xuống component con ✅
- C. Lưu trữ dữ liệu toàn cục
- D. Thực hiện side effects

### Câu 2
Props có thể thay đổi được không?
- A. Có thể
- B. Không thể ✅
- C. Chỉ khi sử dụng useEffect
- D. Chỉ khi là children

### Câu 3
Props `children` là:
- A. Tên component con
- B. Nội dung bên trong component ✅
- C. Tên thuộc tính
- D. Function xử lý sự kiện

### Câu 4
Để set default props cho `color = 'blue'`:
- A. `props.color = 'blue'`
- B. `function Button({ color = 'blue' })` ✅
- C. `Button.color = 'blue'`
- D. `export default color = 'blue'`

### Câu 5
Export default khác với named export như thế nào?
- A. Export default có thể import với tên khác ✅
- B. Named export nhanh hơn
- C. Export default không hoạt động
- D. Không có sự khác biệt

---

## 📝 Tổng kết

### Điểm chính

- ✅ Component là khối xây dựng của React
- ✅ Props truyền dữ liệu từ cha → con
- ✅ Props là read-only
- ✅ Children là prop đặc biệt chứa nội dung
- ✅ Default props dùng destructuring với `=`

### Checklist buổi 2

- [ ] Hiểu được Component & Props
- [ ] Biết cách export/import
- [ ] Tạo được component có props
- [ ] Sử dụng được children props
- [ ] Hoàn thành Lab 1, 2, 3
- [ ] Làm đúng 4/5 câu quiz

### Chuẩn bị buổi 3

📚 Đọc trước:
- State là gì?
- Event Handling trong React
- onClick, onChange, onSubmit

---

**Xem thêm**: [React Documentation - Passing Props](https://react.dev/learn/passing-props-to-a-component)

