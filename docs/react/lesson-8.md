# Buổi 8: useRef & Custom Hooks

## 🎯 Mục tiêu buổi học

Chào các em, hôm nay thầy sẽ hướng dẫn các em về **useRef** và cách tự tạo Custom Hooks trong React để tái sử dụng logic, giúp code gọn gàng, chuyên nghiệp hơn.

1. ✅ Hiểu và sử dụng **useRef** để truy cập DOM element trong React.
2. ✅ Biết cách tạo và dùng **Custom Hooks** để tái sử dụng logic.
3. ✅ Làm quen với một số custom hooks phổ biến.
4. ✅ Tổ chức và đặt tên hooks theo best practices.

## 📋 Nội dung bài học

### 1. useRef Hook là gì?

Các em nhớ nhé, **useRef** trong React giúp chúng ta lưu lại một giá trị nào đó mà khi thay đổi, component sẽ không bị re-render lại. Chủ yếu dùng để lấy tham chiếu tới DOM element hoặc lưu các giá trị tạm thời.

#### a. Truy cập DOM với useRef

Giả sử thầy cần focus vào một ô input khi bấm nút, thầy sẽ làm như sau:

```javascript
function TextInput() {
    const inputRef = useRef(null);

    const handleFocus = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    return (
        <>
            <input ref={inputRef} />
            <button onClick={handleFocus}>Focus</button>
        </>
    );
}
```

Ở đây, **inputRef** sẽ giữ tham chiếu DOM của thẻ input. Khi bấm nút, ta gọi `.focus()` lên inputRef.current.

#### b. useRef để lưu giá trị (không liên quan DOM)

Nhiều khi mình cần lưu lại một giá trị để dùng giữa các lần render (ví dụ id interval của Timer chẳng hạn):

```javascript
function Timer() {
    const [count, setCount] = useState(0);
    const intervalRef = useRef(null);

    const start = () => {
        intervalRef.current = setInterval(() => {
            setCount((prev) => prev + 1);
        }, 1000);
    };

    const stop = () => {
        clearInterval(intervalRef.current);
    };

    return (
        <div>
            {count}
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
        </div>
    );
}
```

intervalRef ở đây giúp thầy lưu id interval để lúc cần có thể clear nó.

---

### 2. Custom Hooks - "Siêu năng lực" của sinh viên React

Hooks là công cụ rất mạnh trong React giúp tái sử dụng logic giữa các component khác nhau. Khi các em thấy phần code logic nào lặp đi lặp lại, hãy nghĩ đến việc đóng gói nó thành một custom hook.

#### a. useToggle - Hook chuyển trạng thái true/false

Ví dụ khi làm modal hiển thị/ẩn, mình viết như sau:

```javascript
function useToggle(initialValue = false) {
    const [value, setValue] = useState(initialValue);

    // Đảo ngược giá trị (true/false)
    const toggle = () => setValue((prev) => !prev);
    const setTrue = () => setValue(true);
    const setFalse = () => setValue(false);

    return [value, toggle, setTrue, setFalse];
}

// Cách dùng
function Modal() {
    const [isOpen, toggle, open, close] = useToggle(false);
    return (
        <div>
            <button onClick={open}>Open Modal</button>
            <button onClick={close}>Close Modal</button>
            {isOpen && <div>Modal content...</div>}
        </div>
    );
}
```

#### b. useLocalStorage - Hook lưu state vào localStorage

Hook này giúp đồng bộ state với localStorage, tắt trình duyệt mở lại vẫn còn:

```javascript
function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        const stored = localStorage.getItem(key);
        return stored ? JSON.parse(stored) : initialValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}

// Ví dụ dùng:
function Settings() {
    const [theme, setTheme] = useLocalStorage("theme", "light");
    return (
        <div>
            <p>Current theme: {theme}</p>
            <button onClick={() => setTheme("dark")}>Dark</button>
            <button onClick={() => setTheme("light")}>Light</button>
        </div>
    );
}
```

#### c. useFetch - Hook fetch dữ liệu

Tương tự, khi các em cần fetch API nhiều chỗ, hãy viết một custom hook cho gọn:

```javascript
function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(url);
                const data = await response.json();
                setData(data);
                setError(null);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
}

// Áp dụng:
function UserList() {
    const { data, loading, error } = useFetch("/api/users");
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    return <ul>{data && data.map((user) => <li key={user.id}>{user.name}</li>)}</ul>;
}
```

---

## 🧪 Bài tập Lab cho các em

### Lab 1: Tự động focus input khi mount

Viết một component input, khi vừa render lên màn hình sẽ tự động focus vào ô input đó.

### Lab 2: Custom hook `useCounter`

Tạo hook `useCounter` với giá trị ban đầu, có các hàm tăng, giảm, reset counter.

### Lab 3: Custom hook debounce (`useDebounce`)

Viết một custom hook giúp debounce một giá trị đầu vào theo thời gian chờ N ms.

---

**Tài liệu tham khảo:** [React Docs - useRef](https://react.dev/reference/react/useRef)
