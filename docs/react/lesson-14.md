# Buổi 14: Context API & Tổ chức dự án React

## 🎯 Mục tiêu học tập

Chào các bạn, buổi hôm nay thầy sẽ cùng các bạn tìm hiểu về Context API trong React và cách tổ chức code cho dự án React lớn hơn. Sau buổi này, các bạn sẽ:

1. ✅ Hiểu rõ Context API là gì và khi nào dùng cho hợp lý
2. ✅ Biết cách tạo Context Provider/Consumer
3. ✅ Biết cách tổ chức folder, file trong dự án React
4. ✅ Khắc phục nhược điểm props drilling
5. ✅ Nắm một số best practices để code sạch, dễ bảo trì

## 📋 Nội dung chính

### 1. Context API

> **Thầy hỏi:** Khi nào chúng ta nên dùng Context API?
>
> **Gợi ý cho sinh viên:** Khi các bạn có 1 state mà cần chia sẻ giữa nhiều component lồng nhau sâu, truyền qua nhiều tầng prop cảm giác rất phiền và khó bảo trì. Khi đó Context sẽ là “bảo bối” giúp mình!

Cùng xem ví dụ thầy demo nhé:

::: code-group

```javascript [ThemeContext.jsx]
// File này các bạn khai báo context về chủ đề (theme) cho toàn app
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

// Provider bọc ngoài App, mọi con có thể dùng
export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

// Hook dùng ở các component con để lấy theme và action đổi theme
export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme phải sử dụng trong ThemeProvider");
    }
    return context;
}
```

```javascript [App.jsx]
// App bọc ThemeProvider để mọi component bên trong đều access được theme
function App() {
    return (
        <ThemeProvider>
            <Header />
            <Main />
            <Footer />
        </ThemeProvider>
    );
}
```

```javascript [Header.jsx]
// Trong Header, mình lấy theme để set class và toggle theme bằng nút bấm
function Header() {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className={theme}>
            <button onClick={toggleTheme}>Chuyển Theme</button>
        </header>
    );
}
```

:::

Các bạn thấy không, code gọn hơn rất nhiều mà không cần truyền prop dài dòng xuống từng tầng. Đây là cách xử lý props drilling hiệu quả!

### 3. Cách tổ chức folder cho dự án React

Thầy gợi ý cho các bạn một cấu trúc project phổ biến:

```
src/
├── components/           // Các component dùng chung và cho từng domain
│   ├── common/           // Thành phần giao diện dùng ở nhiều nơi (Button, Card, Input, ...)
│   ├── tour/             // Các component riêng liên quan tới tour
│   └── layout/           // Giao diện bố cục tổng (Header, Footer)
├── context/              // Nơi khai báo các Context (Theme, Auth, Tour, ...)
├── hooks/                // Các custom hook tự viết
├── services/             // Vị trí gọi API
├── pages/                // Trang chính của app
├── utils/                // Hàm tiện ích, helper nhỏ lẻ
└── App.jsx               // Component gốc
```

Sắp xếp thế này giúp các bạn dễ tìm code, dễ mở rộng dự án.

## 🧪 Bài tập thực hành

**Lab 1:** Tạo Theme Context. Viết Dark/Light mode toggle cho app.  
**Lab 2:** Tạo Auth Context. Lưu trạng thái đăng nhập người dùng toàn cục.  
**Lab 3:** Tạo Tour Context. Quản lý state chung về tour cho toàn app.

---

**Tham khảo thêm:** [React Context](https://react.dev/learn/passing-data-deeply-with-context)
