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

## 🧪 Bài tập Lab

### Lab 1: Login/Logout Toggle (20 phút)

**Yêu cầu**: Tạo component hiển thị khác nhau khi đăng nhập/chưa đăng nhập

```javascript
function LoginSection() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState({ name: "Nguyễn Văn A" });

    return (
        <div>
            {/* TODO: Hiển thị Login form nếu chưa đăng nhập */}
            {/* TODO: Hiển thị Welcome + Logout nếu đã đăng nhập */}
        </div>
    );
}

export default LoginSection;
```

**Kết quả mong đợi**:

-   Chưa đăng nhập: Form login với input + button
-   Đã đăng nhập: "Xin chào [tên]" + button Logout

### Lab 2: Rating Stars (25 phút)

**Yêu cầu**: Hiển thị sao rating động

```javascript
function RatingDisplay({ rating, showLabel = true }) {
    // rating từ 0-5

    return (
        <div className="rating">
            {/* TODO: Hiển thị label nếu showLabel */}
            {/* TODO: Render đúng số sao vàng */} ⭐{/* TODO: Render số sao xám còn lại */} ☆{/* TODO: Hiển thị text "Chưa đánh giá" nếu rating = 0 */}
        </div>
    );
}

export default RatingDisplay;
```

**Test cases**:

```javascript
<RatingDisplay rating={0} />      // "Chưa đánh giá"
<RatingDisplay rating={3} />      // ⭐⭐⭐☆☆ (3 sao)
<RatingDisplay rating={5} />      // ⭐⭐⭐⭐⭐ (5 sao)
<RatingDisplay rating={0} showLabel={false} />
```

### Lab 3: Alert Component (25 phút)

**Yêu cầu**: Tạo Alert component với các variant

```javascript
function Alert({ type, message, showIcon = true }) {
    // type: 'success', 'error', 'warning', 'info'

    return (
        <div className={`alert alert-${type}`}>
            {/* TODO: Hiển thị icon nếu showIcon = true */}
            {/* TODO: Icon khác nhau theo type */}
            {/* TODO: Hiển thị message */}
        </div>
    );
}

export default Alert;
```

**Variants**:

-   `success`: ✅ message màu xanh
-   `error`: ❌ message màu đỏ
-   `warning`: ⚠️ message màu cam
-   `info`: ℹ️ message màu xanh dương

### Lab 4: Card with Actions (25 phút)

**Yêu cầu**: Render action buttons khác nhau theo role

```javascript
function ActionCard({ item, currentUser }) {
    // currentUser.role: 'admin', 'editor', 'viewer'

    return (
        <div className="card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>

            <div className="actions">
                {/* TODO: Luôn hiển thị View button */}

                {/* TODO: Chỉ admin và editor được Edit */}

                {/* TODO: Chỉ admin được Delete */}

                {/* TODO: Hiển thị "Bạn không có quyền" nếu viewer */}
            </div>
        </div>
    );
}

export default ActionCard;
```

**Test cases**:

```javascript
<ActionCard item={item} currentUser={{ role: 'admin' }} />
// View, Edit, Delete

<ActionCard item={item} currentUser={{ role: 'editor' }} />
// View, Edit

<ActionCard item={item} currentUser={{ role: 'viewer' }} />
// View, "Bạn không có quyền"
```

---

## 📝 Tổng kết

### Điểm chính

-   ✅ `&&` cho điều kiện đơn giản
-   ✅ `?:` cho 2 trường hợp
-   ✅ `if/else` cho logic phức tạp
-   ✅ `return null` để không render
-   ✅ Early return giảm nesting

### Checklist buổi 4

-   [ ] Hiểu conditional rendering
-   [ ] Sử dụng được && operator
-   [ ] Sử dụng được ternary operator
-   [ ] Áp dụng if/else với JSX
-   [ ] Hoàn thành Lab 1, 2, 3, 4

### Chuẩn bị buổi 5

📚 Đọc trước:

-   Render lists trong React
-   Key prop
-   map, filter, reduce với React

---

**Xem thêm**: [React Documentation - Conditional Rendering](https://react.dev/learn/conditional-rendering)
