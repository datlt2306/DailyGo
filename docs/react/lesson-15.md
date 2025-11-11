# Buổi 15: Styling & Responsive

## 🎯 Mục tiêu buổi học

Chào các em, hôm nay chúng ta sẽ cùng tìm hiểu về cách làm đẹp giao diện và responsive trong React với TailwindCSS. Thầy mong rằng sau buổi này các em sẽ:

1. ✅ Cài đặt được TailwindCSS vào project React
2. ✅ Biết cách sử dụng utility classes để style nhanh chóng
3. ✅ Hiểu và áp dụng được responsive design (giao diện linh hoạt trên nhiều thiết bị)
4. ✅ Biết cấu hình và dùng dark mode
5. ✅ Nắm được các mẫu UI hiện đại phổ biến

---

## 📋 Nội dung chính

### 1. Khởi động với TailwindCSS

Các em mở terminal và chạy 2 dòng lệnh này để cài đặt:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Sau đó, chỉnh file `tailwind.config.js` như sau:

```js [tailwind.config.js]
module.exports = {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
        extend: {},
    },
    plugins: [],
};
```

Tiếp theo, trong file `index.css`, các em bổ sung 3 dòng này:

```css
/* index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Như vậy là Tailwind đã sẵn sàng cho React của mình.

---

### 2. Sử dụng Utility Classes

Giả sử thầy muốn làm một Card đơn giản, các em xem ví dụ dưới đây:

```javascript
function Card() {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Title</h2>
            <p className="text-gray-600">Content</p>
        </div>
    );
}
```

Ở đây các em thấy chỉ dùng các class của Tailwind là có ngay card đẹp, không cần CSS riêng.

---

### 3. Responsive Design

Muốn giao diện đẹp cả trên mobile lẫn desktop thì dùng các breakpoint của Tailwind:

```javascript
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <Card />
    <Card />
    <Card />
</div>
```

Lúc này, trên điện thoại chỉ có 1 cột, sang tablet là 2 cột, laptop trở lên là 3 cột.

---

### 4. Dark Mode

Tailwind hỗ trợ dark mode cực đơn giản. Ví dụ, các em có thể viết như sau:

```javascript
function App() {
    return (
        <div className="dark:bg-gray-900 dark:text-white">
            <button className="dark:bg-gray-700">Toggle</button>
        </div>
    );
}
```

Chỉ cần bật dark mode là sẽ tự đổi style phù hợp.

---

## 🧪 Bài tập thực hành

Các em thực hiện 3 bài lab sau để luyện tập thêm:

### Lab 1: Tạo Card bằng Tailwind

Dùng TailwindCSS để dựng một Card đẹp.

### Lab 2: Thiết kế responsive

Làm giao diện mobile-first, hiển thị tốt cả trên mobile và desktop.

### Lab 3: Thêm dark mode

Tạo nút bật/tắt giữa chế độ sáng và tối cho giao diện.

---

**Đọc thêm:** [Tài liệu TailwindCSS](https://tailwindcss.com/)
