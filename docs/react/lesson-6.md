# Buổi 6: ĐÁNH GIÁ GIỮA KỲ 1

## 🎯 Mục tiêu buổi

1. ✅ Kiểm tra kiến thức Giai đoạn 1
2. ✅ Mini Project: Website cá nhân
3. ✅ Q&A và Review
4. ✅ Chuẩn bị cho Giai đoạn 2

## 📋 Nội dung

### 1. Quiz nhanh (30 phút)

**Hình thức**: Trắc nghiệm + Tự luận ngắn

**Nội dung**:
- JSX syntax
- Component & Props
- State & useState
- Event handling
- Conditional rendering
- List & Key

### 2. Mini Project: Website Cá nhân (90 phút)

**Yêu cầu**: Xây dựng website cá nhân đơn giản

#### Chức năng bắt buộc

- [ ] **Trang chủ**: Giới thiệu bản thân
- [ ] **About**: Thông tin cá nhân, sở thích
- [ ] **Skills**: Danh sách kỹ năng
- [ ] **Projects**: Danh sách 3-5 dự án nhỏ
- [ ] **Contact**: Form liên hệ (không cần backend)

#### Component structure

```javascript
src/
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── SkillCard.jsx
│   └── ProjectCard.jsx
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   └── Contact.jsx
├── App.jsx
└── main.jsx
```

#### Requirements

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Modern UI (dùng TailwindCSS hoặc CSS Module)
- ✅ Smooth transitions
- ✅ Clean code với comments
- ✅ Git commits có ý nghĩa

#### Sample Data

```javascript
const skills = [
    { name: 'React', level: 80 },
    { name: 'JavaScript', level: 85 },
    { name: 'HTML/CSS', level: 90 }
];

const projects = [
    {
        id: 1,
        name: 'Todo App',
        description: 'Ứng dụng quản lý công việc',
        tech: ['React', 'CSS'],
        github: 'https://github.com/user/todo-app'
    }
];
```

### 3. Evaluation (30 phút)

**Chấm điểm**:
- **Quiz**: 30%
- **Mini Project**: 70%

**Tiêu chí**:
| Tiêu chí | Điểm |
|----------|------|
| Đầy đủ chức năng | 30 |
| UI/UX đẹp | 20 |
| Code chất lượng | 20 |
| Responsive | 15 |
| Git & Comments | 15 |
| **Tổng** | **100** |

---

## 📝 Checklist hoàn thành

### Kiến thức

- [ ] Hiểu JSX syntax
- [ ] Sử dụng Component & Props
- [ ] Quản lý State với useState
- [ ] Xử lý Events
- [ ] Conditional Rendering
- [ ] Render Lists với Key

### Practical Skills

- [ ] Setup project Vite + React
- [ ] Tổ chức components
- [ ] Style với Tailwind/CSS
- [ ] Responsive design
- [ ] Git workflow

---

## 💡 Tips

### Preparation

- Ôn tập lại tất cả concepts từ buổi 1-5
- Practice với các lab bài cũ
- Review errors thường gặp
- Chuẩn bị sample data

### During Mini Project

- Start với structure đơn giản
- Incremental development
- Commit thường xuyên
- Test responsive sớm
- Don't overthink, just code!

### Common Pitfalls

❌ **Quá phức tạp**: Giữ đơn giản  
❌ **Thiếu responsive**: Test mobile sớm  
❌ **Code messy**: Organize rõ ràng  
❌ **No git commits**: Commit mỗi feature  

---

## 🎯 Learning Outcomes

Sau buổi này, học viên có thể:

✅ **Assess knowledge**: Đánh giá kiến thức đã học  
✅ **Apply skills**: Áp dụng vào project thực tế  
✅ **Identify gaps**: Nhận diện điểm yếu cần cải thiện  
✅ **Build confidence**: Tự tin vào khả năng code  

---

## 📚 Resources

### Cheatsheet nhanh

**JSX**:
```javascript
<div className="container">Content</div>
```

**Props**:
```javascript
function Child({ name }) { return <div>{name}</div> }
<Child name="John" />
```

**State**:
```javascript
const [count, setCount] = useState(0);
<button onClick={() => setCount(count + 1)}>+</button>
```

**Conditional**:
```javascript
{isLoggedIn && <Dashboard />}
{error ? <Error /> : <Success />}
```

**List**:
```javascript
{items.map(item => <div key={item.id}>{item.name}</div>)}
```

---

## 🔄 Next Steps

Sau đánh giá giữa kỳ, chúng ta sẽ học:

- ✅ **Buổi 7**: useState & useEffect
- ✅ **Buổi 8**: useRef & Custom Hooks
- ✅ **Buổi 9**: Form & Controlled Components
- ✅ **Buổi 10**: Routing
- ✅ **Buổi 11**: Đánh giá giữa kỳ 2

---

**Chúc các em làm tốt! 🚀**

