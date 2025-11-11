# Buổi 9: Form & Controlled Components

## 🎯 Mục tiêu buổi học

Chào các em, hôm nay chúng ta sẽ cùng tìm hiểu về form trong React và cách quản lý các loại inputs. Mục tiêu:

1. Phân biệt Controlled và Uncontrolled Components.
2. Biết cách xử lý nhiều loại form input như text, checkbox, select,...
3. Validate dữ liệu đầu vào.
4. Hiển thị lỗi cho người dùng.
5. Áp dụng một số pattern thông dụng với Form.

## 📋 Nội dung buổi học

### 1. Controlled Components

Khi các em làm việc với React, controlled components là những component mà giá trị của các input sẽ được lưu trong state của React và cập nhật thông qua các event.

Ví dụ thầy có một component Form đơn giản như sau:

```javascript
function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name, email });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Tên của em"
            />
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email của em"
            />
            <button type="submit">Submit</button>
        </form>
    );
}
```

Các em thấy, mỗi lần mình nhập vào ô input, state sẽ được cập nhật theo.

### 2. Làm Form sử dụng object

Nếu form có nhiều trường dữ liệu, các em nên lưu tất cả giá trị vào một object cho gọn, ví dụ như sau:

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
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Tuổi"
            />
        </form>
    );
}
```

Ở đây, chỉ cần một hàm handleChange là xử lý được hết các input vì mình dùng thuộc tính `name`.

### 3. Validation cơ bản

Thầy ví dụ form có validate, nghĩa là mình kiểm tra dữ liệu trước khi submit:

```javascript
function Form() {
    const [name, setName] = useState("");
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        // Nếu tên bỏ trống thì báo lỗi
        if (!name.trim()) {
            newErrors.name = "Tên không được để trống";
        }
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            // Submit dữ liệu - ở đây các em có thể gọi API hoặc alert,...
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nhập tên" />
            {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
        </form>
    );
}
```

Các em chú ý, nếu có lỗi thì nó sẽ hiện ra bên dưới input luôn.

### 4. Các loại Input

#### Text, Email, Password, Number

```javascript
<input type="text" />
<input type="email" />
<input type="password" />
<input type="number" />
```

#### Checkbox

```javascript
const [accept, setAccept] = useState(false);

<input type="checkbox" checked={accept} onChange={(e) => setAccept(e.target.checked)} />;
```

Checkbox khác ở chỗ dùng thuộc tính `checked` thay vì `value` nhé các em.

#### Radio

```javascript
const [gender, setGender] = useState("");

<input
    type="radio"
    value="male"
    checked={gender === "male"}
    onChange={(e) => setGender(e.target.value)}
/>;
```

Radio cũng nên check theo giá trị đã chọn (giống ví dụ trên).

#### Select

```javascript
const [country, setCountry] = useState("");

<select value={country} onChange={(e) => setCountry(e.target.value)}>
    <option value="">Chọn quốc gia</option>
    <option value="vn">Việt Nam</option>
    <option value="us">USA</option>
</select>;
```

Các em nhớ bỏ value cho từng option, khi chọn sẽ setCountry.

#### Textarea

```javascript
const [message, setMessage] = useState("");

<textarea value={message} onChange={(e) => setMessage(e.target.value)} />;
```

Giống như input text, textarea cũng dùng value và onChange.

## 💡 Ví dụ minh họa

Thầy lấy ví dụ một Form đăng ký cho các em xem nhé:

```javascript
function RegisterForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [errors, setErrors] = useState({});

    const validate = () => {
        const errs = {};
        if (!formData.name) errs.name = "Yêu cầu nhập tên";
        if (!formData.email) errs.email = "Yêu cầu nhập email";
        if (formData.password !== formData.confirmPassword) {
            errs.password = "Mật khẩu nhập lại chưa khớp";
        }
        return errs;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length === 0) {
            // Các em có thể gửi dữ liệu lên API ở đây
        }
        setErrors(errs);
    };

    return <form onSubmit={handleSubmit}>{/* ...các input ở đây... */}</form>;
}
```

Các em nhớ validate dữ liệu trước khi đăng ký, nhất là trường hợp hai mật khẩu phải giống nhau.

## 🧪 Bài tập phục vụ luyện tập

### Lab 1: Contact Form

Các em tự làm form liên hệ, kiểm tra dữ liệu trước khi gửi.

### Lab 2: Registration Form

Làm form đăng ký: ngoài validate còn có thêm password strength indicator nhé.

### Lab 3: Search Form

Viết form search, nhưng cần debounce (tức là chậm gửi request cho mỗi lần gõ).

### Lab 4: Rating Input

Tạo component đánh giá dạng ngôi sao.

---

**Tài liệu tham khảo**: [React Docs - Forms](https://react.dev/reference/react-dom/components/input)
