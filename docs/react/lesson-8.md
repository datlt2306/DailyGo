# Buổi 8: useRef & Custom Hooks

## 🎯 Mục tiêu học tập (SMART)

1. ✅ Sử dụng **useRef** để truy cập DOM elements
2. ✅ Tạo **Custom Hooks** tái sử dụng logic
3. ✅ Implement các hooks thường dùng
4. ✅ Tổ chức hooks theo best practices

## 📋 Nội dung chính

### 1. useRef Hook

**useRef** trả về mutable ref object, không gây re-render khi thay đổi.

#### Truy cập DOM elements

```javascript
function TextInput() {
    const inputRef = useRef(null);
    
    const handleFocus = () => {
        inputRef.current?.focus();
    };
    
    return (
        <>
            <input ref={inputRef} />
            <button onClick={handleFocus}>Focus</button>
        </>
    );
}
```

#### Lưu trữ mutable values

```javascript
function Timer() {
    const [count, setCount] = useState(0);
    const intervalRef = useRef(null);
    
    const start = () => {
        intervalRef.current = setInterval(() => {
            setCount(prev => prev + 1);
        }, 1000);
    };
    
    const stop = () => {
        clearInterval(intervalRef.current);
    };
    
    return <div>{count}</div>;
}
```

### 2. Custom Hooks

Tạo hooks tái sử dụng logic giữa components.

#### useToggle

```javascript
function useToggle(initialValue = false) {
    const [value, setValue] = useState(initialValue);
    
    const toggle = () => setValue(prev => !prev);
    const setTrue = () => setValue(true);
    const setFalse = () => setValue(false);
    
    return [value, toggle, setTrue, setFalse];
}

// Sử dụng
function Modal() {
    const [isOpen, toggle, open, close] = useToggle(false);
    return <div>{isOpen && <div>Modal</div>}</div>;
}
```

#### useLocalStorage

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

// Sử dụng
function Settings() {
    const [theme, setTheme] = useLocalStorage('theme', 'light');
    return <div>{theme}</div>;
}
```

#### useFetch

```javascript
function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchData = async () => {
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

// Sử dụng
function UserList() {
    const { data, loading, error } = useFetch('/api/users');
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error</div>;
    return <div>{/* render data */}</div>;
}
```

## 🧪 Bài tập Lab

### Lab 1: Focus Input
Tạo component tự động focus vào input khi mount.

### Lab 2: useCounter Hook
Tạo custom hook `useCounter` với increment, decrement, reset.

### Lab 3: useDebounce Hook
Tạo hook debounce value sau N milliseconds.

---

## ✅ Quiz (5 câu)

1. useRef khác useState ở điểm nào?
   - A. Gây re-render
   - B. Không gây re-render ✅
   - C. Không lưu được giá trị
   - D. Chỉ dùng cho DOM

2. Custom Hook phải bắt đầu bằng chữ gì?
   - A. use ✅
   - B. get
   - C. create
   - D. useComponent

3. useRef return:
   - A. Object với property current ✅
   - B. Array
   - C. String
   - D. Number

---

**Xem**: [React Docs - useRef](https://react.dev/reference/react/useRef)

