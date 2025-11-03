# Buổi 9: Form & Controlled Components

## 🎯 Mục tiêu học tập (SMART)

1. ✅ Hiểu Controlled vs Uncontrolled Components
2. ✅ Xử lý Form inputs (text, checkbox, select)
3. ✅ Validate dữ liệu đầu vào
4. ✅ Hiển thị error messages
5. ✅ Xây dựng Form patterns

## 📋 Nội dung chính

### 1. Controlled Components

Components có value được control bởi React state.

```javascript
function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name, email });
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
    );
}
```

### 2. Form với Object

```javascript
function Form() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: 0
    });
    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    
    return (
        <form>
            <input
                name="name"
                value={formData.name}
                onChange={handleChange}
            />
            <input
                name="email"
                value={formData.email}
                onChange={handleChange}
            />
            <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
            />
        </form>
    );
}
```

### 3. Validation

```javascript
function Form() {
    const [name, setName] = useState('');
    const [errors, setErrors] = useState({});
    
    const validate = () => {
        const newErrors = {};
        
        if (!name.trim()) {
            newErrors.name = 'Tên không được để trống';
        }
        
        return newErrors;
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        
        if (Object.keys(validationErrors).length === 0) {
            // Submit
        } else {
            setErrors(validationErrors);
        }
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <span>{errors.name}</span>}
        </form>
    );
}
```

### 4. Input Types

#### Text, Email, Password

```javascript
<input type="text" />
<input type="email" />
<input type="password" />
<input type="number" />
```

#### Checkbox

```javascript
const [accept, setAccept] = useState(false);

<input
    type="checkbox"
    checked={accept}
    onChange={(e) => setAccept(e.target.checked)}
/>
```

#### Radio

```javascript
const [gender, setGender] = useState('');

<input
    type="radio"
    value="male"
    checked={gender === 'male'}
    onChange={(e) => setGender(e.target.value)}
/>
```

#### Select

```javascript
const [country, setCountry] = useState('');

<select value={country} onChange={(e) => setCountry(e.target.value)}>
    <option value="">Chọn quốc gia</option>
    <option value="vn">Việt Nam</option>
    <option value="us">USA</option>
</select>
```

#### Textarea

```javascript
const [message, setMessage] = useState('');

<textarea
    value={message}
    onChange={(e) => setMessage(e.target.value)}
/>
```

## 💡 Ví dụ minh họa

### Registration Form

```javascript
function RegisterForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState({});
    
    const validate = () => {
        const errs = {};
        if (!formData.name) errs.name = 'Required';
        if (!formData.email) errs.email = 'Required';
        if (formData.password !== formData.confirmPassword) {
            errs.password = 'Passwords must match';
        }
        return errs;
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length === 0) {
            // Submit
        }
        setErrors(errs);
    };
    
    return <form onSubmit={handleSubmit}>{/* ... */}</form>;
}
```

## 🧪 Bài tập Lab

### Lab 1: Contact Form
Form liên hệ với validation.

### Lab 2: Registration Form
Form đăng ký với password strength indicator.

### Lab 3: Search Form
Search với debounce.

### Lab 4: Rating Input
Star rating component.

---

## ✅ Quiz (5 câu)

1. Controlled component là:
   - A. Component có value từ state ✅
   - B. Component không có value
   - C. Component tự động
   - D. Form tự submit

2. Validate form nên làm ở:
   - A. onSubmit ✅
   - B. onLoad
   - C. onMount
   - D. Không cần

---

**Xem**: [React Docs - Forms](https://react.dev/reference/react-dom/components/input)

