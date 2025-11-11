# Buổi 7: useState & useEffect

## 🎯 Mục tiêu buổi học

Chào các em, hôm nay chúng ta sẽ cùng tìm hiểu sâu về hai hook cực kỳ quan trọng trong React: **useState** và **useEffect**. Sau khi hoàn thành buổi học này, thầy kỳ vọng các em sẽ:

1. ✅ Hiểu rõ hơn về **useState** cũng như cách cập nhật state (10 phút)
2. ✅ Biết cách sử dụng **useEffect** để xử lý side effects (20 phút)
3. ✅ Nắm được **dependency array** và thời điểm component re-render (15 phút)
4. ✅ Biết viết **cleanup functions** trong useEffect (10 phút)
5. ✅ Thành thạo trong việc kết hợp useState + useEffect vào bài tập dự án thực tế (10 phút)

## 📋 Nội dung chính hôm nay

### 1. useState nâng cao

#### Functional Updates

Khi các em cần cập nhật state dựa vào giá trị trước đó, hãy viết theo dạng “functional update”. Thầy lấy ví dụ:

```javascript
// ❌ SAI - Có thể dẫn đến kết quả không như mong muốn nếu cập nhật liên tiếp
const [count, setCount] = useState(0);
<button onClick={() => setCount(count + 1)}>+</button>;

// ✅ ĐÚNG - Dùng functional update
const [count, setCount] = useState(0);
<button onClick={() => setCount((prev) => prev + 1)}>+</button>;
```

**Các trường hợp nên dùng:**

-   Khi cần update dựa trên state hiện tại
-   Khi có nhiều setState chạy liên tiếp
-   React sẽ tối ưu performance (batching) khi dùng dạng này

#### Quản lý nhiều state trong một component

Các em có thể khai báo nhiều useState riêng lẻ hoặc gom chúng thành 1 object:

```javascript
function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState(0);

    // Hoặc dùng object
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        age: 0,
    });

    // Cập nhật object
    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };
}
```

### 2. useEffect Hook

**useEffect** là hook dùng để xử lý các side effect trong function component (giống componentDidMount, componentDidUpdate và componentWillUnmount bên class component nha các em).

#### Cú pháp cơ bản

```javascript
import { useEffect } from "react";

function Component() {
    useEffect(() => {
        // Viết side effect ở đây
        console.log("Component mounted/updated");
    });

    return <div>Content</div>;
}
```

#### Dependency Array

Các em lưu ý cách truyền dependencies cho useEffect:

```javascript
// 1. Không có dependency array → Chạy sau mỗi lần render luôn
useEffect(() => {
    console.log("Chạy mỗi lần render");
});

// 2. Truyền [] → Chạy duy nhất 1 lần khi component mount
useEffect(() => {
    console.log("Chạy 1 lần khi mount");
}, []);

// 3. Truyền dependencies → Chạy mỗi khi giá trị đó thay đổi
useEffect(() => {
    console.log("Chạy khi count thay đổi");
}, [count]);
```

#### Ví dụ Fetch API

```javascript
function UserProfile({ userId }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch data mỗi khi userId thay đổi
        const fetchUser = async () => {
            setLoading(true);
            try {
                const response = await fetch(`/api/users/${userId}`);
                const data = await response.json();
                setUser(data);
            } catch (error) {
                console.error("Error:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, [userId]); // Chạy lại khi userId đổi

    if (loading) return <div>Đang tải...</div>;
    if (!user) return <div>Không tìm thấy</div>;

    return <div>{user.name}</div>;
}
```

### 3. Cleanup Function

Cleanup giúp dọn dẹp “rác” sau khi component bị unmount hoặc trước khi chạy effect lần kế tiếp.

```javascript
useEffect(() => {
    // Khởi tạo
    const timer = setInterval(() => {
        console.log("Tick");
    }, 1000);

    // Dọn dẹp - cực kỳ quan trọng!
    return () => {
        clearInterval(timer);
    };
}, []);
```

#### Ví dụ - Event Listener

```javascript
function WindowSize() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        // Dọn dẹp sự kiện khi unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return <div>Width: {width}px</div>;
}
```

#### Ví dụ - Dọn dẹp khi fetch API

```javascript
function SearchResults({ query }) {
    const [results, setResults] = useState([]);

    useEffect(() => {
        let cancelled = false; // Cờ hủy fetch nếu query đổi

        const fetchResults = async () => {
            const response = await fetch(`/api/search?q=${query}`);
            const data = await response.json();

            // Chỉ cập nhật nếu không bị hủy
            if (!cancelled) {
                setResults(data);
            }
        };

        fetchResults();

        // Dọn dẹp: đánh dấu đã cancel
        return () => {
            cancelled = true;
        };
    }, [query]);

    return <div>{/* Hiển thị kết quả */}</div>;
}
```

### 4. Dùng nhiều useEffect trên cùng một component

Các em hoàn toàn có thể (và nên) chia nhỏ các useEffect theo từng mục đích khác nhau:

```javascript
function ChatRoom({ roomId }) {
    const [messages, setMessages] = useState([]);
    const [isOnline, setIsOnline] = useState(false);

    // Effect 1: Kết nối server chat
    useEffect(() => {
        const connection = createConnection(roomId);
        connection.connect();

        return () => {
            connection.disconnect();
        };
    }, [roomId]);

    // Effect 2: Lắng nghe trạng thái online/offline
    useEffect(() => {
        const handleOnline = () => setIsOnline(true);
        const handleOffline = () => setIsOnline(false);

        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        };
    }, []);

    return (
        <div>
            <div>{isOnline ? "🟢" : "⚫"}</div>
            {/* Hiển thị tin nhắn */}
        </div>
    );
}
```

### 5. useEffect - Một số lời khuyên

#### ✅ Tách từng concern thành useEffect riêng

```javascript
// Chỉ fetch theo userId
useEffect(() => {
    // fetch users
}, [userId]);

// Chỉ track scroll
useEffect(() => {
    // track scroll
}, []);
```

#### ❌ KHÔNG nên gom tất cả logic vào một useEffect

```javascript
// Không nên làm thế này - quá lộn xộn
useEffect(() => {
    fetchUsers();
    setupScroll();
    trackAnalytics();
    updateTheme();
}, []);
```

#### ✅ Truyền đầy đủ dependencies

```javascript
useEffect(() => {
    fetchUser(userId, token);
}, [userId, token]);
```

#### ❌ Đừng bỏ thiếu dependency!

```javascript
// Sai - thiếu userId trong deps array
useEffect(() => {
    fetchUser(userId); // userId không nằm trong deps
}, []);

// → Sẽ bị warning: Missing dependency 'userId'
```

## 💡 Thầy lấy ví dụ cho các em nhé

### Ví dụ 1: Counter cùng Timer

```javascript
function Timer() {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if (!isRunning) return;

        const timer = setInterval(() => {
            setSeconds((prev) => prev + 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [isRunning]);

    return (
        <div>
            <p>Thời gian: {seconds}s</p>
            <button onClick={() => setIsRunning(!isRunning)}>
                {isRunning ? "Dừng" : "Bắt đầu"}
            </button>
            <button onClick={() => setSeconds(0)}>Reset</button>
        </div>
    );
}

export default Timer;
```

### Ví dụ 2: Đổi title của trang

```javascript
function DocumentTitle({ title }) {
    useEffect(() => {
        const oldTitle = document.title;
        document.title = title;

        // Dọn dẹp: trả lại title cũ
        return () => {
            document.title = oldTitle;
        };
    }, [title]);

    return <div>{title}</div>;
}

// Sử dụng như sau
<DocumentTitle title="Trang chủ - Tour Management" />;
```

### Ví dụ 3: Lấy dữ liệu Todo từ API

```javascript
function TodoList() {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                setLoading(true);
                const response = await fetch("/api/todos");
                if (!response.ok) throw new Error("Failed to fetch");
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
            {todos.map((todo) => (
                <li key={todo.id}>{todo.text}</li>
            ))}
        </ul>
    );
}

export default TodoList;
```

## 🧪 Bài tập thực hành

### Lab 1: Hook lắng nghe resize cửa sổ (25 phút)

Yêu cầu: các em viết 1 component lắng nghe kích thước cửa sổ (window) theo chiều rộng và cao, tự động cập nhật khi resize.

```javascript
function WindowSize() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    // TODO: Viết useEffect để lắng nghe sự kiện resize
    // TODO: Dọn dẹp event listener trong cleanup function

    return (
        <div>
            <p>Width: {width}px</p>
            <p>Height: {height}px</p>
        </div>
    );
}

export default WindowSize;
```

### Lab 2: Search có debouncing (30 phút)

Yêu cầu: viết component chỉ thực hiện fetch sau khi dừng nhập liệu 500ms (debounce).

```javascript
function SearchBox() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    // TODO: Debounce search - chỉ fetch sau 500ms
    // TODO: Clear timeout cũ nếu query đổi
    // TODO: Cancel fetch cũ nếu query đổi

    return (
        <div>
            <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Tìm kiếm..."
            />
            <div>
                {results.map((item) => (
                    <div key={item.id}>{item.name}</div>
                ))}
            </div>
        </div>
    );
}

export default SearchBox;
```

### Lab 3: Theo dõi trạng thái Online (20 phút)

Yêu cầu: kiểm tra trạng thái trực tuyến/ngoại tuyến của trình duyệt

```javascript
function OnlineStatus() {
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    // TODO: Lắng nghe sự kiện online/offline
    // TODO: Dọn dẹp listener khi unmount

    return <div>{isOnline ? <span>🟢 Trực tuyến</span> : <span>⚫ Ngoại tuyến</span>}</div>;
}

export default OnlineStatus;
```

---

## 📝 Tổng kết bài

### Các ý chính các em cần nhớ

-   ✅ Dùng functional update khi cập nhật state dựa vào giá trị cũ
-   ✅ useEffect để xử lý side effect trong component
-   ✅ Dependency array rất quan trọng, phải truyền đủ
-   ✅ Cleanup function giúp ngăn memory leak
-   ✅ Chia nhỏ useEffect giúp code rõ ràng, dễ bảo trì

### Checklist buổi 7

-   [ ] Hiểu dùng useState nâng cao
-   [ ] Sử dụng useEffect đúng cách
-   [ ] Nắm vững dependency array
-   [ ] Biết viết cleanup function
-   [ ] Làm xong 3 bài Lab thực hành

### Chuẩn bị cho buổi học tiếp theo

📚 Các em nên đọc trước:

-   useRef Hook
-   Custom Hooks (tái sử dụng logic)
-   Ví dụ ứng dụng thực tế

---

**Tài liệu tham khảo**: [React Documentation - useEffect](https://react.dev/reference/react/useEffect)
