# Buổi 11: ĐÁNH GIÁ GIỮA KỲ 2

## 🎯 Mục tiêu buổi

1. ✅ Ôn tập và kiểm tra lại kiến thức Giai đoạn 2
2. ✅ Thực hành mini project: Blog App có Routing
3. ✅ Trao đổi, feedback, và giải đáp thắc mắc
4. ✅ Định hướng chuẩn bị cho project cuối khóa

## 📋 Nội dung

---

### 1. Quick Review (15 phút)

Các bạn cùng thầy điểm lại những kiến thức trọng tâm ở Giai đoạn 2 nhé:

-   useState nâng cao (nhiều state, state object, array)
-   useEffect & xử lý side effect/cleanup
-   useRef & cách tạo custom hooks
-   Quản lý Form & Controlled Components
-   React Router: Navigation cơ bản
-   Dynamic Routes, Params

---

### 2. Technical Assessment (30 phút)

Ở phần này, các nhóm sẽ nhận thử thách code nhỏ (Code Challenge) để review lại kiến thức:

#### Bàn 1: useEffect & Custom Hooks

```javascript
// Yêu cầu: Viết custom hook useWindowSize trả về {width, height}

function useWindowSize() {
    // TODO: Sinh viên tự triển khai
}

// Sử dụng thử:
function Component() {
    const { width, height } = useWindowSize();
    return (
        <div>
            {width}x{height}
        </div>
    );
}
```

#### Bài 2: Form Validation

```javascript
// Viết LoginForm có validate:
// - Email đúng định dạng
// - Password tối thiểu 6 ký tự
// - Hiển thị lỗi, disable submit nếu form chưa hợp lệ
function LoginForm() {
    // TODO: Viết logic bên trong
}
```

#### Bài 3: Routing

```javascript
// Yêu cầu tự setup các routes cơ bản cho blog app
// /posts - Hiển thị danh sách
// /posts/:id - Hiển thị chi tiết
// /posts/:id/edit - Sửa nội dung
// /create - Thêm mới
```

---

### 3. Mini Project: Blog App (90 phút)

Các bạn sẽ teamwork thực hành xây dựng Blog App có đầy đủ Routing, CRUD features theo yêu cầu bên dưới.

#### Yêu cầu bắt buộc

-   [ ] Hiển thị **danh sách bài viết**: `/posts`
-   [ ] Trang **chi tiết bài viết**: `/posts/:id`
-   [ ] Trang **tạo mới bài viết**: `/create`
-   [ ] Trang **chỉnh sửa bài viết**: `/posts/:id/edit`
-   [ ] **Xóa bài** (có xác nhận)
-   [ ] Menu navigation chuyển trang - có highlight trạng thái trang hiện tại

#### Bonus cho bạn nào nhanh và có thời gian

-   [ ] Tìm kiếm post
-   [ ] Lọc theo category
-   [ ] Pagination
-   [ ] Loading (chờ dữ liệu/UX)
-   [ ] Bắt lỗi khi thao tác không hợp lệ

#### Cấu trúc dữ liệu (dùng local state hoặc localStorage):

```javascript
const posts = [
    {
        id: 1,
        title: "React là gì?",
        content: "React là library...",
        category: "React",
        author: "John Doe",
        createdAt: "2024-01-15",
    },
];
```

#### Đề xuất tổ chức component

```
src/
├── components/
│   ├── common/
│   │   ├── Navigation.jsx
│   │   ├── PostCard.jsx
│   │   └── Loading.jsx
│   └── post/
│       ├── PostForm.jsx
│       └── PostActions.jsx
├── pages/
│   ├── PostList.jsx
│   ├── PostDetail.jsx
│   ├── PostCreate.jsx
│   └── PostEdit.jsx
├── App.jsx
└── main.jsx
```

#### Cấu hình routes (tham khảo):

```javascript
<Routes>
    <Route path="/" element={<PostList />} />
    <Route path="/posts" element={<PostList />} />
    <Route path="/posts/:id" element={<PostDetail />} />
    <Route path="/posts/:id/edit" element={<PostEdit />} />
    <Route path="/create" element={<PostCreate />} />
</Routes>
```

---

### 4. Đánh giá (15 phút)

Thầy sẽ chấm điểm dựa theo các tiêu chí sau (các bạn tham khảo để hoàn thiện project):

| Tiêu chí                                | Điểm    |
| --------------------------------------- | ------- |
| Làm bài đánh giá kỹ thuật               | 30      |
| Tất cả routes chạy                      | 25      |
| Đủ CRUD                                 | 25      |
| UI/UX & navigation                      | 10      |
| Chất lượng code (sạch, rõ ràng, hợp lý) | 10      |
| **TỔNG**                                | **100** |

---

## 🧪 Code mẫu tham khảo

### Component: PostCard

```javascript
function PostCard({ post }) {
    const navigate = useNavigate();

    const handleView = () => {
        navigate(`/posts/${post.id}`);
    };

    return (
        <div className="post-card" onClick={handleView}>
            <h3>{post.title}</h3>
            <p className="meta">
                {post.author} - {post.createdAt}
            </p>
            <p className="category">{post.category}</p>
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/posts/${post.id}/edit`);
                }}
            >
                Edit
            </button>
        </div>
    );
}
```

_Lưu ý: Khi bấm Edit, nhớ ngăn sự kiện nổi lên div cha để không bị chuyển sang trang detail luôn nhé!_

### Component: PostForm

```javascript
function PostForm({ onSubmit, initialData }) {
    const [title, setTitle] = useState(initialData?.title || "");
    const [content, setContent] = useState(initialData?.content || "");
    const [category, setCategory] = useState(initialData?.category || "");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ title, content, category });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Tiêu đề"
                required
            />
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Nội dung"
                required
            />
            <select value={category} onChange={(e) => setCategory(e.target.value)} required>
                <option value="">Chọn category</option>
                <option value="React">React</option>
                <option value="JavaScript">JavaScript</option>
            </select>
            <button type="submit">Lưu</button>
        </form>
    );
}
```

---

## ✅ Checklist tự đánh giá

### Kiến thức

-   [ ] hiểu rõ useEffect & dependencies
-   [ ] biết tạo Custom Hooks đơn giản
-   [ ] xử lý form & validation
-   [ ] setup React Router chuẩn
-   [ ] dùng đúng dynamic routes & params
-   [ ] navigation giữa các page (Link/useNavigate)

### Kỹ năng thực hành

-   [ ] sắp xếp component logic, code gọn gàng
-   [ ] quản lý state trong form đúng cách
-   [ ] xử lý lỗi khi chuyển route
-   [ ] code sạch, có chú thích dễ hiểu
-   [ ] làm việc với git cẩn thận

---

## 💡 Lưu ý & Tips

### Hiệu năng

-   Ưu tiên dùng `useCallback` cho các handler truyền props
-   Giảm render không cần thiết
-   Áp dụng lazy load cho routes lớn

### UX

-   Thêm loading state để tăng trải nghiệm
-   Cân nhắc dùng error boundary cho lỗi chưa lường trước
-   Hiệu ứng mượt, xác nhận khi xoá
-   Hiển thị thông báo/cảnh báo hợp lý

### Chất lượng code

-   Luôn giữ tư duy DRY, tạo component tái sử dụng
-   Đặt tên rõ ràng, xuyên suốt
-   Thêm comment nếu logic phức tạp

---

## 🔄 Chuẩn bị cho Project cuối khoá

Sau buổi đánh giá này, mình sẽ bắt đầu chuyển sang **Project cuối khoá: Tour Management System**.

**Các bạn cần chuẩn bị:**

-   ✅ Kiến thức: Hooks, Forms, Routing (phải chắc tay!)
-   ✅ Kỹ năng: CRUD, call API thật, quản lý state
-   ✅ Công cụ: Git, Vite, Tailwind
-   ✅ Tâm thế: Sẵn sàng chiến đấu, teamwork hết mình nhé!

---

## 📚 Tổng hợp tài liệu tham khảo

### Cheatsheet Hooks

```javascript
// useState
const [state, setState] = useState(initial);

// useEffect
useEffect(() => {
    // side effects
}, [deps]);

// useRef
const ref = useRef(initial);

// useNavigate
const navigate = useNavigate();
navigate("/path");
```

### Cheatsheet Router

```javascript
// Khai báo route
<Route path="/:id" element={<Component />} />

// Link chuyển trang
<Link to="/path">Text</Link>

// lấy params trong URL
const { id } = useParams();

// chuyển trang bằng code
navigate('/path', { replace: true });
```

---

**Động viên cuối: Cố gắng làm hết sức nha, project cuối là bước đệm tuyệt vời để các em tự tin hơn với React! Chúc cả lớp thành công và bứt phá ở Final Project! 🎯**
