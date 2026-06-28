# Project Cuối Khóa: Website Cửa Hàng Công Nghệ & Thời Trang (Vanguard Store E-Commerce)

## 🎯 Mục tiêu dự án

Xây dựng một ứng dụng Single Page Application (SPA) hoàn chỉnh sử dụng **Vue 3 (Composition API)** kết hợp với **Vue Router**, **Pinia**, **Axios**, và **TailwindCSS** để mô phỏng và vận hành website bán hàng **Vanguard Store**.

Dự án này sẽ dựa trên bộ giao diện tĩnh HTML/Tailwind CSS đã thiết kế sẵn. Học viên sẽ tải về các tệp tin này và thực hiện phân tách thành các component Vue, viết logic reactivity, quản lý state và kết nối API qua **JSON-Server**.

---

## 📁 Tài nguyên giao diện (Tải về)

Học viên truy cập và sao chép các tệp tin giao diện tĩnh nằm trong thư mục sau làm cơ sở dữ liệu giao diện gốc:
- 🔗 **Thư mục chứa HTML mẫu**: [docs/vuejs/templates](https://letrongdat.vercel.app/vuejs/templates)

*Lưu ý: Học viên chỉ cần tải các tệp tĩnh này để copy mã HTML & Tailwind CSS, không được sửa đổi trực tiếp các file tĩnh.*

---

## 📋 Yêu cầu chức năng & Phân tách Component

### 1. Phân tách giao diện tĩnh thành Component Vue (25 điểm)

Học viên phải phân tích file trang chủ [index.html](https://letrongdat.vercel.app/vuejs/templates/index.html) và thực hiện tách các phần sau thành các component Vue độc lập:

- **Navbar Component (`Navbar.vue`)**:
  - Tách từ dòng **35 đến 64** của [index.html](https://letrongdat.vercel.app/vuejs/templates/index.html).
  - Chuyển đổi các thẻ `<a>` tĩnh thành `<router-link>` để di chuyển trang không tải lại.
  - Hiển thị số lượng giỏ hàng động và trạng thái tài khoản.
- **Hero Banner Section (`HeroSection.vue`)**:
  - Tách từ dòng **73 đến 99** của [index.html](https://letrongdat.vercel.app/vuejs/templates/index.html).
- **Product Card Component (`ProductCard.vue`)**:
  - Tách từ dòng **122 đến 150** của [index.html](https://letrongdat.vercel.app/vuejs/templates/index.html).
  - Sử dụng `props` để nhận thông tin sản phẩm và hiển thị động (ảnh, tên, giá, danh mục).
- **Footer Component (`Footer.vue`)**:
  - Tách từ dòng **253 đến 292** của [index.html](https://letrongdat.vercel.app/vuejs/templates/index.html).

### 2. Định tuyến (Vue Router) & Đăng nhập (20 điểm)

Thiết lập hệ thống chuyển trang SPA liên kết các tệp giao diện tĩnh:
- **Trang chủ (`HomeView.vue`)**: Render danh sách sản phẩm nổi bật.
- **Chi tiết sản phẩm (`ProductDetailView.vue`)**: Dựa trên giao diện [product-detail.html](https://letrongdat.vercel.app/vuejs/templates/product-detail.html). Nhận ID từ URL và hiển thị thông tin sản phẩm.
- **Giỏ hàng (`CartView.vue`)**: Dựa trên giao diện [cart.html](https://letrongdat.vercel.app/vuejs/templates/cart.html).
- **Thanh toán (`CheckoutView.vue`)**: Dựa trên giao diện [checkout.html](https://letrongdat.vercel.app/vuejs/templates/checkout.html).
- **Đăng nhập & Đăng ký (`LoginView.vue`, `RegisterView.vue`)**: Dựa trên giao diện [login.html](https://letrongdat.vercel.app/vuejs/templates/login.html) và [register.html](https://letrongdat.vercel.app/vuejs/templates/register.html). Yêu cầu validate form đầy đủ trước khi submit.
- **Phân quyền Route (Navigation Guards)**:
  - Chỉ cho phép người dùng đã đăng nhập truy cập trang Giỏ hàng, Thanh toán và Lịch sử đơn hàng.
  - Chỉ cho phép tài khoản Admin truy cập các trang quản trị Dashboard.

### 3. Quản lý Giỏ hàng (Pinia Store) (20 điểm)

Xây dựng `useCartStore` quản lý trạng thái giỏ hàng toàn cục:
- **Thêm vào giỏ**: Bấm nút mua hàng tại `ProductCard` hoặc `ProductDetailView` sẽ thêm sản phẩm vào giỏ hàng (tự động cộng dồn số lượng nếu sản phẩm đã tồn tại).
- **Cập nhật số lượng**: Điều chỉnh nút tăng/giảm ở trang Giỏ hàng (dòng **88 đến 92** trong [cart.html](https://letrongdat.vercel.app/vuejs/templates/cart.html)).
- **Xóa sản phẩm**: Bấm nút Xóa sản phẩm ra khỏi giỏ (dòng **94 đến 97** trong [cart.html](https://letrongdat.vercel.app/vuejs/templates/cart.html)).
- **Tính toán hóa đơn**: Sử dụng computed getters để tự động tính tổng số lượng, tạm tính, và tổng tiền thanh toán sau cùng.

### 4. Kết nối API & CRUD Admin (25 điểm)

Kết nối ứng dụng với backend giả lập qua **JSON-Server**:
- **Đọc sản phẩm**: Gọi GET API để đổ dữ liệu động lên danh sách sản phẩm trang chủ và bộ lọc theo danh mục.
- **Trang Quản trị sản phẩm của Admin (`AdminProductListView.vue`)**:
  - Dựa trên [admin-product-list.html](https://letrongdat.vercel.app/vuejs/templates/admin-product-list.html).
  - Hiển thị danh sách sản phẩm dưới dạng bảng (Table).
  - Có nút "Xóa" gọi DELETE API để xóa sản phẩm khỏi cơ sở dữ liệu.
- **Trang Thêm mới / Chỉnh sửa sản phẩm (`AdminProductForm.vue`)**:
  - Dựa trên [admin-product-create.html](https://letrongdat.vercel.app/vuejs/templates/admin-product-create.html) và [admin-product-edit.html](https://letrongdat.vercel.app/vuejs/templates/admin-product-edit.html).
  - Thực hiện gọi POST API để thêm mới sản phẩm và PUT/PATCH API để lưu chỉnh sửa sản phẩm.

### 5. Giao diện, Hiệu ứng & Clean Code (10 điểm)
- Đảm bảo giao diện TailwindCSS hoạt động trơn tru, hiển thị tốt trên Mobile.
- Tích hợp biểu tượng bằng cách khởi tạo thư viện icon **Lucide** khi component mount.
- Code sạch sẽ, có comment rõ ràng các hàm và logic quản lý store.

---

## 🗄️ Cấu trúc Cơ sở dữ liệu (`db.json`)

Tạo tệp dữ liệu giả lập để chạy server:
```json
{
  "products": [
    {
      "id": 1,
      "name": "Tai Nghe Vanguard Studio Wireless",
      "category": "Âm thanh",
      "price": 3500000,
      "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60",
      "description": "Công nghệ chống ồn chủ động ANC kết hợp driver 40mm mang lại âm thanh độ phân giải cao đỉnh cao."
    },
    {
      "id": 2,
      "name": "Giày Thể Thao Vanguard Pro Run",
      "category": "Thời trang",
      "price": 1890000,
      "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60",
      "description": "Đế đệm khí êm ái, chất liệu vải dệt Primeknit thoáng khí hỗ trợ tập luyện tối đa."
    }
  ],
  "users": [
    {
      "id": 1,
      "email": "admin@vanguard.com",
      "password": "adminpassword",
      "role": "admin"
    },
    {
      "id": 2,
      "email": "user@vanguard.com",
      "password": "userpassword",
      "role": "user"
    }
  ],
  "orders": []
}
```

---

## 🛠️ Hướng dẫn cài đặt & khởi chạy

1. **Khởi tạo và cài đặt thư viện**:
   ```bash
   npm create vite@latest
   # Lần lượt chọn: Vanguard-store, Vue, JavaScript
   cd Vanguard-store
   npm install
   npm install vue-router pinia axios tailwindcss postcss autoprefixer
   ```

2. **Chạy server cơ sở dữ liệu**:
   ```bash
   npx json-server --watch db.json --port 3000
   ```

3. **Chạy môi trường dev**:
   ```bash
   npm run dev
   ```
