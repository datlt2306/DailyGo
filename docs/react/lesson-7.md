# Buổi 7: useState & useEffect

## 🎯 Mục tiêu học tập (SMART)

Sau buổi học này, học viên sẽ có thể:

1. ✅ Hiểu sâu hơn về **useState** và state updates (10 phút)
2. ✅ Sử dụng **useEffect** cho side effects (20 phút)
3. ✅ Hiểu **dependency array** và khi nào re-render (15 phút)
4. ✅ Implement **cleanup functions** trong useEffect (10 phút)
5. ✅ Kết hợp useState + useEffect trong project thực tế (10 phút)

## 📋 Nội dung chính

### 1. useState nâng cao

#### Functional Updates

Khi update state phụ thuộc vào giá trị cũ.

```javascript
// ❌ SAI - Có thể không chính xác
const [count, setCount] = useState(0);
<button onClick={() => setCount(count + 1)}>+</button>

// ✅ ĐÚNG - Functional update
const [count, setCount] = useState(0);
<button onClick={() => setCount(prev => prev + 1)}>+</button>
```

**Khi nào dùng**:
- Update dựa trên giá trị cũ
- Nhiều setState cùng lúc
- Batching updates

#### Multiple useState calls

```javascript
function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState(0);
    
    // Hoặc dùng object
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: 0
    });
    
    // Update object
    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };
}
```

### 2. useEffect Hook

**useEffect** cho phép thực hiện side effects trong function component. Tương tự componentDidMount, componentDidUpdate, componentWillUnmount.

#### Cú pháp cơ bản

```javascript
import { useEffect } from 'react';

function Component() {
    useEffect(() => {
        // Side effect code here
        console.log('Component mounted/updated');
    });
    
    return <div>Content</div>;
}
```

#### Dependency Array

```javascript
// 1. Không có dependency array → chạy mỗi lần render
useEffect(() => {
    console.log('Chạy mỗi lần render');
});

// 2. Empty array [] → chạy 1 lần khi mount
useEffect(() => {
    console.log('Chạy 1 lần khi mount');
}, []);

// 3. Có dependencies → chạy khi dependencies thay đổi
useEffect(() => {
    console.log('Chạy khi count thay đổi');
}, [count]);
```

#### Ví dụ Fetch API

```javascript
function UserProfile({ userId }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        // Fetch data khi userId thay đổi
        const fetchUser = async () => {
            setLoading(true);
            try {
                const response = await fetch(`/api/users/${userId}`);
                const data = await response.json();
                setUser(data);
            } catch (error) {
                console.error('Error:', error);
            } finally {
                setLoading(false);
            }
        };
        
        fetchUser();
    }, [userId]); // Re-run khi userId thay đổi
    
    if (loading) return <div>Đang tải...</div>;
    if (!user) return <div>Không tìm thấy</div>;
    
    return <div>{user.name}</div>;
}
```

### 3. Cleanup Function

Dọn dẹp sau khi component unmount hoặc trước lần effect tiếp theo.

```javascript
useEffect(() => {
    // Setup
    const timer = setInterval(() => {
        console.log('Tick');
    }, 1000);
    
    // Cleanup
    return () => {
        clearInterval(timer);
    };
}, []);
```

#### Ví dụ Event Listener

```javascript
function WindowSize() {
    const [width, setWidth] = useState(window.innerWidth);
    
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };
        
        window.addEventListener('resize', handleResize);
        
        // Cleanup: remove event listener
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    
    return <div>Width: {width}px</div>;
}
```

#### Ví dụ API Cleanup

```javascript
function SearchResults({ query }) {
    const [results, setResults] = useState([]);
    
    useEffect(() => {
        let cancelled = false; // Flag để cancel
        
        const fetchResults = async () => {
            const response = await fetch(`/api/search?q=${query}`);
            const data = await response.json();
            
            // Chỉ update nếu chưa bị cancel
            if (!cancelled) {
                setResults(data);
            }
        };
        
        fetchResults();
        
        // Cleanup: đánh dấu cancel
        return () => {
            cancelled = true;
        };
    }, [query]);
    
    return <div>{/* Render results */}</div>;
}
```

### 4. Multiple useEffect

Có thể dùng nhiều useEffect trong 1 component.

```javascript
function ChatRoom({ roomId }) {
    const [messages, setMessages] = useState([]);
    const [isOnline, setIsOnline] = useState(false);
    
    // Effect 1: Setup connection
    useEffect(() => {
        const connection = createConnection(roomId);
        connection.connect();
        
        return () => {
            connection.disconnect();
        };
    }, [roomId]);
    
    // Effect 2: Track online status
    useEffect(() => {
        const handleOnline = () => setIsOnline(true);
        const handleOffline = () => setIsOnline(false);
        
        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);
        
        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);
    
    return (
        <div>
            <div>{isOnline ? '🟢' : '⚫'}</div>
            {/* Messages */}
        </div>
    );
}
```

### 5. useEffect Best Practices

#### ✅ DO - Tách concerns

```javascript
// Nhiều useEffect nhỏ, mỗi cái 1 concern
useEffect(() => {
    // Chỉ fetch users
}, [userId]);

useEffect(() => {
    // Chỉ track scroll
}, []);
```

#### ❌ DON'T - Nhiều concerns trong 1 useEffect

```javascript
// ❌ Quá nhiều concerns trong 1 useEffect
useEffect(() => {
    fetchUsers();
    setupScroll();
    trackAnalytics();
    updateTheme();
}, []);
```

#### ✅ DO - Đầy đủ dependencies

```javascript
// ✅ Dependencies đầy đủ
useEffect(() => {
    fetchUser(userId, token);
}, [userId, token]);
```

#### ❌ DON'T - Thiếu dependencies

```javascript
// ❌ Thiếu dependencies
useEffect(() => {
    fetchUser(userId); // userId không trong deps
}, []);

// → Warning: Missing dependency 'userId'
```

## 💡 Ví dụ minh họa

### Demo 1: Counter với Timer

```javascript
function Timer() {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    
    useEffect(() => {
        if (!isRunning) return;
        
        const timer = setInterval(() => {
            setSeconds(prev => prev + 1);
        }, 1000);
        
        return () => clearInterval(timer);
    }, [isRunning]);
    
    return (
        <div>
            <p>Thời gian: {seconds}s</p>
            <button onClick={() => setIsRunning(!isRunning)}>
                {isRunning ? 'Dừng' : 'Bắt đầu'}
            </button>
            <button onClick={() => setSeconds(0)}>Reset</button>
        </div>
    );
}

export default Timer;
```

### Demo 2: Document Title

```javascript
function DocumentTitle({ title }) {
    useEffect(() => {
        const oldTitle = document.title;
        document.title = title;
        
        // Cleanup: restore old title
        return () => {
            document.title = oldTitle;
        };
    }, [title]);
    
    return <div>{title}</div>;
}

// Sử dụng
<DocumentTitle title="Trang chủ - Tour Management" />
```

### Demo 3: Data Fetching

```javascript
function TodoList() {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchTodos = async () => {
            try {
                setLoading(true);
                const response = await fetch('/api/todos');
                if (!response.ok) throw new Error('Failed to fetch');
                const data = await response.json();
                setTodos(data);
                setError(null);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        
        fetchTodos();
    }, []);
    
    if (loading) return <div>Đang tải...</div>;
    if (error) return <div>Lỗi: {error}</div>;
    
    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>{todo.text}</li>
            ))}
        </ul>
    );
}

export default TodoList;
```

## 🧪 Bài tập Lab

### Lab 1: Window Resize Hook (25 phút)

**Yêu cầu**: Track kích thước cửa sổ

```javascript
function WindowSize() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    
    // TODO: useEffect để track resize
    // TODO: Cleanup event listener
    
    return (
        <div>
            <p>Width: {width}px</p>
            <p>Height: {height}px</p>
        </div>
    );
}

export default WindowSize;
```

### Lab 2: Search với Debounce (30 phút)

**Yêu cầu**: Search với delay

```javascript
function SearchBox() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    
    // TODO: Debounce search - chỉ fetch sau 500ms
    // TODO: Clear previous timeout
    // TODO: Cancel previous fetch nếu query thay đổi
    
    return (
        <div>
            <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Tìm kiếm..."
            />
            <div>
                {results.map(item => (
                    <div key={item.id}>{item.name}</div>
                ))}
            </div>
        </div>
    );
}

export default SearchBox;
```

### Lab 3: Online Status Tracker (20 phút)

**Yêu cầu**: Kiểm tra online/offline

```javascript
function OnlineStatus() {
    const [isOnline, setIsOnline] = useState(navigator.onLine);
    
    // TODO: Listen online/offline events
    // TODO: Cleanup listeners
    
    return (
        <div>
            {isOnline ? (
                <span>🟢 Trực tuyến</span>
            ) : (
                <span>⚫ Ngoại tuyến</span>
            )}
        </div>
    );
}

export default OnlineStatus;
```

---

## ✅ Quiz kiểm tra nhanh (5 câu)

### Câu 1
useEffect với empty array [] chạy khi nào?
- A. Mỗi lần render
- B. 1 lần khi component mount ✅
- C. Không bao giờ
- D. Khi state thay đổi

### Câu 2
Cleanup function trong useEffect return:
- A. void
- B. Một function ✅
- C. undefined
- D. Promise

### Câu 3
Khi nào nên dùng functional update với setState?
- A. Khi update dựa trên giá trị cũ ✅
- B. Luôn luôn
- C. Chỉ với arrays
- D. Không bao giờ

### Câu 4
useEffect dependencies array là gì?
- A. Danh sách state cần track
- B. Danh sách values khi thay đổi sẽ re-run effect ✅
- C. Danh sách functions
- D. Không quan trọng

### Câu 5
Thiếu dependency trong useEffect sẽ:
- A. Warning từ linter ✅
- B. Compile error
- C. Không ảnh hưởng gì
- D. Bug nghiêm trọng

---

## 📝 Tổng kết

### Điểm chính

- ✅ Functional updates cho state dựa trên giá trị cũ
- ✅ useEffect cho side effects
- ✅ Dependency array quan trọng
- ✅ Cleanup function tránh memory leak
- ✅ Tách concerns thành nhiều useEffect

### Checklist buổi 7

- [ ] Hiểu useState nâng cao
- [ ] Sử dụng useEffect đúng cách
- [ ] Hiểu dependency array
- [ ] Implement cleanup functions
- [ ] Hoàn thành Lab 1, 2, 3
- [ ] Làm đúng 4/5 câu quiz

### Chuẩn bị buổi 8

📚 Đọc trước:
- useRef Hook
- Custom Hooks
- Tái sử dụng logic

---

**Xem thêm**: [React Documentation - useEffect](https://react.dev/reference/react/useEffect)

