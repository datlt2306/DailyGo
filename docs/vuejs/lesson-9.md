# Buổi 9: Form Handling & Validation

## 🎯 Mục tiêu học tập
- Thu thập dữ liệu từ các phần tử form phức tạp trong biểu mẫu đăng ký thành viên.
- Hiện thực hóa các quy tắc kiểm tra lỗi (Validation) cho các trường email, mật khẩu.
- Hiển thị thông báo lỗi trực quan dưới mỗi input.
- Ngăn submit form nếu thông tin chưa hợp lệ.

---

## 📖 Lý thuyết cốt lõi

### 📊 Sơ đồ minh họa khái niệm:

```mermaid
graph TD
    A[Form Submit] -->|@submit.prevent| B{Kiểm tra Validation}
    B -->|Hợp lệ| C[Gửi dữ liệu lên API]
    B -->|Có lỗi| D[Hiển thị mảng errors xuống UI]
```

---

### 1. Thu thập dữ liệu form với `v-model`
Vue hỗ trợ binding dữ liệu hai chiều thông minh cho hầu hết các thẻ form:
- Checkbox đơn (Boolean), Nhóm Checkbox (Mảng), Nhóm Radio Buttons (Biến đơn), Select Dropdown (Biến đơn).

### 2. Xử lý Validation thủ công
Để kiểm tra lỗi của form, thông thường ta khai báo một object reactive chứa các thông tin lỗi:
```javascript
const errors = reactive({
  email: '',
  password: ''
})
```
Trước khi submit form, ta chạy một hàm validate kiểm tra từng trường:
```javascript
function validateForm() {
  let isValid = true
  errors.email = ''
  
  if (!form.email) {
    errors.email = 'Email không được để trống.'
    isValid = false
  } else if (!/\S+@\S+\.\S+/.test(form.email)) {
    errors.email = 'Email không đúng định dạng.'
    isValid = false
  }
  return isValid
}
```

---

## 💻 Ví dụ thực tiễn
```vue
<script setup>
import { reactive } from 'vue'

const form = reactive({
  email: '',
  password: ''
})

const errors = reactive({
  email: '',
  password: ''
})

function handleSubmit() {
  errors.email = ''
  errors.password = ''
  
  if (!form.email) {
    errors.email = 'Vui lòng điền email'
  }
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <input type="email" v-model="form.email" />
    <span v-if="errors.email" class="text-red-500">{{ errors.email }}</span>
    <button type="submit">Đăng nhập</button>
  </form>
</template>
```

---

## 🛠️ Bài tập thực hành (Lab)
### Yêu cầu: Validate Form Đăng Ký Thành Viên Vanguard Store
1. Xem giao diện trang đăng ký tại [register.html](https://letrongdat.vercel.app/vuejs/templates/register.html).
2. Tạo component Vue `RegisterView.vue`. Copy toàn bộ giao diện HTML trong thẻ `<main>` của [register.html](https://letrongdat.vercel.app/vuejs/templates/register.html) vào template.
3. Khai báo biến `form` dạng `reactive` chứa: `fullName`, `email`, `password`, `confirmPassword`, và `agree` (checkbox đồng ý điều khoản).
4. Khai báo biến `errors` dạng `reactive` quản lý lỗi cho từng trường.
5. Ràng buộc các trường của form bằng `v-model`.
6. Viết hàm `validateRegister()` kiểm tra:
   - Họ tên: Không trống, tối thiểu 3 ký tự.
   - Email: Không trống, đúng định dạng email.
   - Mật khẩu: Tối thiểu 6 ký tự.
   - Xác nhận mật khẩu: Phải khớp trùng khít với trường mật khẩu.
   - Checkbox: Phải tích chọn đồng ý điều khoản.
7. Hiển thị thông báo lỗi bằng class chữ màu đỏ (`text-rose-500 text-xs mt-1`) ngay dưới mỗi ô input tương ứng nếu có lỗi.
8. Chỉ khi nhấn submit và toàn bộ dữ liệu hợp lệ mới hiển thị alert thông báo thành công.

<details class="details custom-block">
  <summary>🔑 Xem gợi ý giải pháp (Code mẫu)</summary>

```vue
<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  email: '',
  password: ''
})
const errors = reactive({
  email: '',
  password: ''
})

function validate() {
  errors.email = form.email.includes('@') ? '' : 'Email không hợp lệ'
  errors.password = form.password.length >= 6 ? '' : 'Mật khẩu tối thiểu 6 ký tự'
  
  if (!errors.email && !errors.password) {
    alert("Đăng nhập thành công!")
  }
}
</script>

<template>
  <form @submit.prevent="validate" class="p-6 max-w-sm mx-auto">
    <div class="mb-4">
      <label class="block">Email:</label>
      <input v-model="form.email" type="text" class="border p-2 w-full" />
      <span class="text-red-500 text-sm">{{ errors.email }}</span>
    </div>
    <div class="mb-4">
      <label class="block">Mật khẩu:</label>
      <input v-model="form.password" type="password" class="border p-2 w-full" />
      <span class="text-red-500 text-sm">{{ errors.password }}</span>
    </div>
    <button type="submit" class="bg-blue-500 text-white p-2 rounded w-full">Đăng nhập</button>
  </form>
</template>
```

</details>

---

## ❓ Trắc nghiệm nhanh
**1. Để ngăn chặn hành động reload trang mặc định của thẻ form khi submit, ta dùng modifier nào?**
- A. `@submit.stop`
- B. `@submit.prevent`
- C. `@submit.once`
- D. `@submit.self`
<details class="details custom-block">
  <summary>Xem giải đáp</summary>

  *Đáp án đúng: **B**.*
</details>

**2. Đoạn mã HTML form đăng ký nằm trong file nào của thư mục templates?**
- A. `login.html`
- B. `register.html`
- C. `checkout.html`
- D. `account.html`
<details class="details custom-block">
  <summary>Xem giải đáp</summary>

  *Đáp án đúng: **B**.*
</details>

**3. Modifier `.trim` trong `v-model.trim="email"` có tác dụng gì?**
- A. Tự động chuyển đổi thành chữ thường.
- B. Tự động loại bỏ các khoảng trắng dư thừa ở đầu và cuối chuỗi.
- C. Giới hạn độ dài chuỗi ký tự.
- D. Validate email hợp lệ.
<details class="details custom-block">
  <summary>Xem giải đáp</summary>

  *Đáp án đúng: **B**.*
</details>

---
