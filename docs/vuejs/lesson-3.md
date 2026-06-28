# Buổi 3: Reactivity cơ bản (ref, reactive, computed, watch)

## 🎯 Mục tiêu học tập
- Giải thích và phân biệt được cơ chế hoạt động của `ref` và `reactive`.
- Sử dụng thuộc tính toán `computed` để tính toán tổng giá trị đơn hàng động.
- Áp dụng bộ theo dõi `watch` để bắt các sự kiện thay đổi giỏ hàng.
- Hiểu được cách Vue 3 theo dõi thay đổi trạng thái.

---

## 📖 Lý thuyết cốt lõi

### 1. `ref` vs `reactive`
- **`ref()`**:
  - Dùng cho mọi kiểu dữ liệu (String, Number, Boolean, hoặc Object/Array).
  - Trả về đối tượng có thuộc tính `.value`. Khi viết trong `<template>`, ta không cần ghi `.value` mà Vue sẽ tự động unwrap.
  - Ví dụ: `const count = ref(0)`. Truy cập bằng `count.value` trong script.
- **`reactive()`**:
  - Chỉ nhận kiểu dữ liệu phức hợp (Object, Array, Map, Set).
  - Trả về một Proxy trực tiếp của object gốc. Không cần dùng `.value`.
  - Ví dụ: `const state = reactive({ name: 'Dat', age: 30 })`.

### 2. Computed Properties (`computed`)
- Là các thuộc tính được tính toán tự động dựa trên các trạng thái reactive khác.
- **Cơ chế Caching**: Computed chỉ tính toán lại khi các dependency (biến phụ thuộc) của nó thay đổi. Nếu các biến phụ thuộc không đổi, computed trả về ngay kết quả đã lưu trong bộ nhớ đệm mà không cần chạy lại hàm, giúp tối ưu hiệu năng.

### 3. Watchers (`watch`)
- Theo dõi một hoặc nhiều biến cụ thể. Chỉ chạy callback khi giá trị biến thay đổi. Cho phép lấy giá trị mới (`newValue`) và giá trị cũ (`oldValue`).

---

## 💻 Ví dụ thực tiễn
```vue
<script setup>
import { ref, reactive, computed, watch } from 'vue'

const searchKeyword = ref('')
const cart = reactive({
  items: [
    { id: 1, name: 'Điện thoại', price: 10000000, quantity: 1 },
    { id: 2, name: 'Tai nghe', price: 1500000, quantity: 2 }
  ]
})

const totalCartPrice = computed(() => {
  return cart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
})

watch(searchKeyword, (newValue, oldValue) => {
  console.log(`Từ khóa đổi từ "${oldValue}" sang "${newValue}"`)
})

function increaseQuantity(index) {
  cart.items[index].quantity++
}
</script>

<template>
  <div class="cart-box">
    <h2>Giỏ Hàng Của Bạn</h2>
    <input v-model="searchKeyword" placeholder="Tìm kiếm sản phẩm..." />
    
    <ul>
      <li v-for="(item, index) in cart.items" :key="item.id">
        {{ item.name }} - {{ item.price }}đ 
        (Số lượng: {{ item.quantity }})
        <button @click="increaseQuantity(index)">+</button>
      </li>
    </ul>

    <p><strong>Tổng tiền:</strong> {{ totalCartPrice }}đ</p>
  </div>
</template>
```

---

## 🛠️ Bài tập thực hành (Lab)
### Yêu cầu: Tăng giảm số lượng và tính tiền trên giao diện Giỏ hàng
1. Xem cấu trúc HTML của trang giỏ hàng tại [cart.html](https://letrongdat.vercel.app/vuejs/templates/cart.html) (chú ý đoạn nút điều khiển số lượng ở dòng **88 đến 92**).
2. Tạo component Vue `CartManager.vue` trong dự án của bạn.
3. Trong script setup, khai báo một sản phẩm trong giỏ bằng `reactive`:
   ```javascript
   const item = reactive({
     name: "Tai Nghe Vanguard Studio Wireless",
     price: 3500000,
     quantity: 1
   })
   ```
4. Trên template, hiển thị thông tin sản phẩm và liên kết các nút tăng/giảm số lượng:
   - Nút `-` (dòng **89** của [cart.html](https://letrongdat.vercel.app/vuejs/templates/cart.html)): Gọi hàm giảm số lượng (ngăn không cho số lượng nhỏ hơn 1).
   - Hiển thị số lượng (dòng **90**): Liên kết với `item.quantity`.
   - Nút `+` (dòng **91**): Gọi hàm tăng số lượng.
5. Sử dụng `computed` để tính toán:
   - `subtotal`: Tạm tính bằng `item.price * item.quantity`.
   - Hiển thị giá trị `subtotal` ra phần tóm tắt đơn hàng (tương tự dòng **148** của [cart.html](https://letrongdat.vercel.app/vuejs/templates/cart.html)).
6. Dùng `watch` để in ra log console mỗi khi số lượng thay đổi để theo dõi sự biến động.

---

## ❓ Trắc nghiệm nhanh
**1. Tại sao dùng computed lại tốt hơn gọi phương thức (methods) thông thường?**
- A. Computed không cần viết hàm.
- B. Computed có cơ chế cache kết quả và chỉ chạy lại khi dependency thay đổi.
- C. Computed chạy nhanh hơn vì chạy trên luồng phụ.
- D. Không có sự khác biệt.
*Đáp án đúng: **B**.*

**2. Để tăng giá trị của biến số lượng được khai báo bằng `const quantity = ref(1)`, trong script ta viết thế nào?**
- A. `quantity++`
- B. `quantity.value++`
- C. `quantity.set(quantity + 1)`
- D. `this.quantity++`
*Đáp án đúng: **B**.*

**3. Khai báo dữ liệu giỏ hàng gồm mảng các item thì nên sử dụng hàm nào?**
- A. `reactive` hoặc `ref`
- B. `computed`
- C. `watch`
- D. `provide`
*Đáp án đúng: **A**.*

**4. Điểm khác biệt lớn nhất giữa `watch` và `computed` là gì?**
- A. Watch có cơ chế cache, computed thì không.
- B. Computed dùng để tính toán và trả về một giá trị mới (không gây ra side-effect), còn Watch dùng để lắng nghe và thực thi các hành động tùy biến (side-effects) khi giá trị thay đổi.
- C. Watch chỉ chạy một lần duy nhất khi render.
- D. Không có sự khác biệt.
*Đáp án đúng: **B**.*

**5. Hàm computed có thể trực tiếp làm thay đổi giá trị của state gốc được không?**
- A. Được.
- B. Không được, computed chỉ được đọc và trả về giá trị mới (Read-only by default).
- C. Tùy thuộc vào trình duyệt.
- D. Chỉ dùng được với biến ref.
*Đáp án đúng: **B**.*

---

## 📝 Checklist hoàn thành
- [ ] Thực hiện được tăng giảm số lượng sản phẩm phản ứng lập tức trên template.
- [ ] Dùng `computed` tính toán tổng tiền đơn hàng động.
- [ ] Viết thành công watcher in log khi thay đổi số lượng.
