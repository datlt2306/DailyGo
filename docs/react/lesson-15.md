# Buổi 15: Styling & Responsive

## 🎯 Mục tiêu học tập (SMART)

1. ✅ Setup TailwindCSS
2. ✅ Sử dụng utility classes
3. ✅ Responsive design
4. ✅ Dark mode
5. ✅ Modern UI patterns

## 📋 Nội dung chính

### 1. TailwindCSS Setup

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

```js [tailwind.config.js]
module.exports = {
    content: ['./index.html', './src/**/*.{js,jsx}'],
    theme: {
        extend: {},
    },
    plugins: [],
};
```

```css
/* index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 2. Utility Classes

```javascript
function Card() {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Title
            </h2>
            <p className="text-gray-600">Content</p>
        </div>
    );
}
```

### 3. Responsive

```javascript
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <Card />
    <Card />
    <Card />
</div>
```

### 4. Dark Mode

```javascript
function App() {
    return (
        <div className="dark:bg-gray-900 dark:text-white">
            <button className="dark:bg-gray-700">Toggle</button>
        </div>
    );
}
```

## 🧪 Bài tập Lab

### Lab 1: Tailwind Tour Card
Card component với TailwindCSS.

### Lab 2: Responsive Layout
Mobile-first responsive design.

### Lab 3: Dark Mode
Dark/Light theme toggle.

---

**Xem**: [TailwindCSS Docs](https://tailwindcss.com/)

