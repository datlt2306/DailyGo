# Buổi 1: Giới thiệu VueJS & Setup với Vite

## 🎯 Mục tiêu học tập
- Giải thích được sự khác biệt giữa Single Page Application (SPA) và Multi Page Application (MPA).
- Trình bày được khái niệm Virtual DOM và ưu điểm của VueJS.
- Thiết lập thành công môi trường phát triển với Node.js, VS Code và các extension cần thiết.
- Khởi tạo thành công dự án Vue 3 sử dụng Vite theo phương thức lựa chọn thủ công từng bước.
- Tìm hiểu cấu trúc tệp tin `.vue` (Single File Component).

---

## 📖 Lý thuyết cốt lõi

### 1. Single Page Application (SPA) vs Multi Page Application (MPA)
- **MPA (Multi Page Application)**: Mỗi lần người dùng chuyển hướng hoặc tương tác, trình duyệt sẽ gửi yêu cầu lên server và tải lại toàn bộ trang HTML mới.
- **SPA (Single Page Application)**: Trang web chỉ tải một tài liệu HTML duy nhất ban đầu. Khi chuyển trang, Vue sẽ tự động cập nhật DOM bằng cách thay thế các component cần thiết mà không tải lại toàn bộ trang, giúp trải nghiệm mượt mà giống như ứng dụng desktop.

### 2. Virtual DOM là gì?
- Thay vì thay đổi trực tiếp trên **Real DOM** (vốn rất chậm và tốn tài nguyên), Vue tạo ra một bản sao gọn nhẹ trong bộ nhớ gọi là **Virtual DOM**.
- Khi trạng thái (state) thay đổi, Vue tính toán sự khác biệt giữa DOM ảo cũ và mới (gọi là cơ chế *Diffing*), sau đó chỉ cập nhật những phần thực sự thay đổi lên Real DOM thực tế.

### 3. Cấu trúc Single File Component (SFC) trong Vue 3
Tệp `.vue` gom HTML, CSS và JS vào một khối duy nhất:
```vue
<script setup>
// Logic JavaScript (Composition API)
import { ref } from 'vue'
const message = ref('Chào mừng đến với Vanguard Store!')
</script>

<template>
  <!-- Giao diện HTML -->
  <div class="welcome-box">
    <h1>{{ message }}</h1>
  </div>
</template>

<style scoped>
/* CSS định dạng - scoped giúp CSS chỉ tác động trong component này */
.welcome-box {
  text-align: center;
  padding: 20px;
  background-color: #f3f4f6;
}
</style>
```

---

## 💻 Ví dụ thực tiễn
Dưới đây là file `App.vue` tối giản hiển thị lời chào và một nút bấm tăng số đếm:
```vue
<script setup>
import { ref } from 'vue'

const count = ref(0)
function increment() {
  count.value++
}
</script>

<template>
  <div class="container">
    <h1>Xin chào, Vue 3 + Vite!</h1>
    <p>Số lần bấm nút: <strong>{{ count }}</strong></p>
    <button @click="increment">Click vào tôi</button>
  </div>
</template>

<style scoped>
.container {
  font-family: sans-serif;
  margin: 50px auto;
  max-width: 400px;
  text-align: center;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
}
button {
  background-color: #42b883;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #35495e;
}
</style>
```

---

## 🛠️ Bài tập thực hành (Lab)
### Yêu cầu: Khởi tạo dự án Vite và chuẩn bị tài nguyên E-Commerce
1. **Bước 1**: Đảm bảo máy tính đã cài đặt [Node.js](https://nodejs.org/).
2. **Bước 2**: Mở terminal và di chuyển đến thư mục làm việc, chạy lệnh khởi tạo:
   ```bash
   npm create vite@latest
   ```
   Thực hiện chọn các tùy chọn trên màn hình:
   - **Project name**: Nhập `vanguard-store`
   - **Select a framework**: Chọn **Vue**
   - **Select a variant**: Chọn **JavaScript**
3. **Bước 3**: Di chuyển vào thư mục dự án và cài đặt:
   ```bash
   cd vanguard-store
   npm install
   ```
4. **Bước 4**: Tải thư mục giao diện tĩnh mẫu [docs/vuejs/templates](https://letrongdat.vercel.app/vuejs/templates) và xem qua các tệp HTML mẫu để chuẩn bị cho việc ghép giao diện vào Vue ở các buổi tiếp theo.
5. **Bước 5**: Chạy thử dev server:
   ```bash
   npm run dev
   ```

---

## ❓ Trắc nghiệm nhanh
**1. Tại sao SPA mang lại trải nghiệm tốt hơn MPA?**
- A. Do không cần viết CSS.
- B. Do không phải load lại toàn bộ trang web mỗi khi chuyển trang.
- C. Do SPA nhẹ hơn về dung lượng lưu trữ trên server.
- D. Tất cả các ý trên.
*Đáp án đúng: **B**.*

**2. Scoped CSS trong tệp `.vue` có vai trò gì?**
- A. Giúp tăng tốc độ tải trang.
- B. Giới hạn tầm ảnh hưởng của CSS chỉ trong component đó.
- C. Biến CSS thành JavaScript.
- D. Xóa bỏ các CSS bị trùng lặp.
*Đáp án đúng: **B**.*

**3. Lựa chọn nào đúng khi chạy từng bước khởi tạo dự án Vue bằng Vite?**
- A. Chạy `npm install vue` và tự tạo file cấu hình.
- B. Chạy `npm create vite@latest` -> nhập tên dự án -> chọn Vue -> chọn JavaScript.
- C. Chạy `npm run dev`.
- D. Sao chép thư mục `node_modules` từ dự án khác.
*Đáp án đúng: **B**.*

**4. Khai báo cú pháp logic Vue 3 hiện đại nhất hiện nay sử dụng thẻ script nào?**
- A. `<script>`
- B. `<script option>`
- C. `<script setup>`
- D. `<script composition>`
*Đáp án đúng: **C**.*

**5. Thư mục chứa giao diện HTML mẫu tĩnh dùng làm cơ sở cho dự án là gì?**
- A. `/public/`
- B. `/src/assets/`
- C. `docs/vuejs/templates`
- D. `/node_modules/`
*Đáp án đúng: **C**.*

---

## 📝 Checklist hoàn thành
- [ ] Đã cài đặt Node.js và VS Code (kèm Extension Volar).
- [ ] Đã tạo thành công dự án `vanguard-store` bằng Vite CLI tương tác.
- [ ] Đọc qua cấu trúc thư mục templates mẫu của dự án Vanguard Store.
