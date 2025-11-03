# Buổi 11: ĐÁNH GIÁ GIỮA KỲ 2

## 🎯 Mục tiêu buổi

1. ✅ Kiểm tra kiến thức Giai đoạn 2
2. ✅ Mini Project: Blog App với Routing
3. ✅ Review và Feedback
4. ✅ Chuẩn bị cho Project cuối khóa

## 📋 Nội dung

### 1. Quick Review (15 phút)

**Concepts học trong Giai đoạn 2**:
- useState nâng cao
- useEffect & side effects
- useRef & Custom Hooks
- Form & Controlled Components
- React Router & Navigation
- Dynamic Routes & Params

### 2. Technical Assessment (30 phút)

**Hình thức**: Code Challenge

**Bàn 1**: useEffect & Custom Hooks

```javascript
// Tạo custom hook useWindowSize
function useWindowSize() {
    // TODO: Implement
}

// Sử dụng
function Component() {
    const { width, height } = useWindowSize();
    return <div>{width}x{height}</div>;
}
```

**Bài 2**: Form Validation

```javascript
// Tạo LoginForm với validation
function LoginForm() {
    // TODO: 
    // - Email validation
    // - Password min 6 chars
    // - Show error messages
    // - Disable submit khi invalid
}
```

**Bài 3**: Routing

```javascript
// Setup routes cho blog app
// /posts - List
// /posts/:id - Detail
// /posts/:id/edit - Edit
// /create - Create
```

### 3. Mini Project: Blog App (90 phút)

**Yêu cầu**: Xây dựng Blog App với routing

#### Features

**Bắt buộc**:
- [ ] **Danh sách Posts**: `/posts`
- [ ] **Chi tiết Post**: `/posts/:id`
- [ ] **Form tạo Post**: `/create`
- [ ] **Form sửa Post**: `/posts/:id/edit`
- [ ] **Xóa Post**: Có confirm dialog
- [ ] **Navigation Menu**: Active states

**Bonus**:
- [ ] Search posts
- [ ] Filter theo category
- [ ] Pagination
- [ ] Loading states
- [ ] Error handling

#### Data Structure

```javascript
// Local state hoặc localStorage
const posts = [
    {
        id: 1,
        title: 'React là gì?',
        content: 'React là library...',
        category: 'React',
        author: 'John Doe',
        createdAt: '2024-01-15'
    }
];
```

#### Component Structure

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

#### Routes Setup

```javascript
<Routes>
    <Route path="/" element={<PostList />} />
    <Route path="/posts" element={<PostList />} />
    <Route path="/posts/:id" element={<PostDetail />} />
    <Route path="/posts/:id/edit" element={<PostEdit />} />
    <Route path="/create" element={<PostCreate />} />
</Routes>
```

### 4. Evaluation (15 phút)

**Tiêu chí**:
| Tiêu chí | Điểm |
|----------|------|
| Technical Assessment | 30 |
| All Routes hoạt động | 25 |
| CRUD Operations | 25 |
| UI/UX & Navigation | 10 |
| Code Quality | 10 |
| **Tổng** | **100** |

---

## 🧪 Sample Code

### PostCard Component

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
            <button onClick={() => navigate(`/posts/${post.id}/edit`)}>
                Edit
            </button>
        </div>
    );
}
```

### PostForm Component

```javascript
function PostForm({ onSubmit, initialData }) {
    const [title, setTitle] = useState(initialData?.title || '');
    const [content, setContent] = useState(initialData?.content || '');
    const [category, setCategory] = useState(initialData?.category || '');
    
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
            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
            >
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

## ✅ Checklist

### Knowledge Check

- [ ] Hiểu useEffect & dependencies
- [ ] Tạo được Custom Hooks
- [ ] Xử lý Form & Validation
- [ ] Setup React Router đúng
- [ ] Dynamic routes & params
- [ ] Navigation giữa pages

### Skills

- [ ] Organize components tốt
- [ ] Manage state trong forms
- [ ] Handle routing errors
- [ ] Clean code & comments
- [ ] Git workflow tốt

---

## 💡 Pro Tips

### Performance

- Dùng `useCallback` cho handlers
- Optimize re-renders
- Lazy load routes

### UX

- Loading states
- Error boundaries
- Smooth transitions
- Confirm dialogs

### Code Quality

- DRY principle
- Reusable components
- Clear naming
- Comments where needed

---

## 🔄 Preparation for Final Project

Sau đánh giá này, chúng ta sẽ bắt đầu **Project cuối khóa**:

**Tour Management System**

Chuẩn bị:
- ✅ Knowledge: Hooks, Forms, Routing
- ✅ Skills: CRUD, API calls, State management
- ✅ Tools: Git, Vite, Tailwind
- ✅ Mindset: Ready to build real app!

---

## 📚 Review Resources

### Hooks Cheatsheet

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
navigate('/path');
```

### Router Cheatsheet

```javascript
// Routes
<Route path="/:id" element={<Component />} />

// Link
<Link to="/path">Text</Link>

// useParams
const { id } = useParams();

// useNavigate
navigate('/path', { replace: true });
```

---

**Chúc các em thành công! Next: Final Project! 🎯**

