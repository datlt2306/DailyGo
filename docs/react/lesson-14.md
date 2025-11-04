# Buổi 14: Context API & Organization

## 🎯 Mục tiêu học tập (SMART)

1. ✅ Hiểu Context API và khi nào dùng
2. ✅ Tạo Context Provider/Consumer
3. ✅ Organize folder structure
4. ✅ Fix Props Drilling
5. ✅ Best practices

## 📋 Nội dung chính

### 1. Context API

**Khi nào dùng**: Khi cần share state giữa nhiều components sâu trong tree.

::: code-group

```javascript [ThemeContext.jsx]
import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');
    
    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };
    
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within ThemeProvider');
    }
    return context;
}
```

```javascript [App.jsx]
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
function Header() {
    const { theme, toggleTheme } = useTheme();
    
    return (
        <header className={theme}>
            <button onClick={toggleTheme}>Toggle</button>
        </header>
    );
}
```

:::

### 3. Folder Organization

```
src/
├── components/
│   ├── common/
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   └── Input.jsx
│   ├── tour/
│   │   ├── TourCard.jsx
│   │   ├── TourList.jsx
│   │   └── TourForm.jsx
│   └── layout/
│       ├── Header.jsx
│       └── Footer.jsx
├── context/
│   ├── ThemeContext.jsx
│   ├── TourContext.jsx
│   └── AuthContext.jsx
├── hooks/
│   ├── useTours.js
│   ├── useFetch.js
│   └── useLocalStorage.js
├── services/
│   └── api.js
├── pages/
│   ├── Home.jsx
│   ├── Tours.jsx
│   └── TourDetail.jsx
├── utils/
│   └── helpers.js
└── App.jsx
```

## 🧪 Bài tập Lab

### Lab 1: Theme Context
Dark/Light mode toggle.

### Lab 2: Auth Context
User authentication state.

### Lab 3: Tour Context
Global tour state management.

---

**Xem**: [React Context](https://react.dev/learn/passing-data-deeply-with-context)

