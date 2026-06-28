# Buổi 11: Đánh giá giữa kỳ 2

## 🎯 Mục tiêu đánh giá
- Kiểm tra toàn diện năng lực của học viên trong Giai đoạn 2 gồm:
  - Định tuyến đa trang (Multi-page SPA Routing) với `vue-router`.
  - Quản lý và xử lý form nhập liệu phức tạp kết hợp validation dữ liệu đăng nhập.
  - Vận dụng vòng đời component (`onMounted`) và tham số URL động.
- Phát triển kỹ năng tư duy tổ chức phân chia cấu trúc dự án chuẩn chỉnh.

---

## 📋 Đề bài thực hành: Xây dựng hệ thống định tuyến và Đăng nhập cho Vanguard Store

Học viên thiết lập hệ thống định tuyến đa trang liên kết 5 trang mẫu tĩnh và tích hợp kiểm tra form đăng nhập.

### Yêu cầu chức năng:
1. **Định tuyến trang (Vue Router)**: Cấu hình 5 tuyến đường (routes):
   - `/` (Home): Trang chủ.
   - `/product/:id` (Detail): Chi tiết sản phẩm.
   - `/cart` (Cart): Giỏ hàng.
   - `/login` (Login): Đăng nhập.
   - `/register` (Register): Đăng ký tài khoản.
2. **Trang đăng nhập (`LoginView.vue`)**:
   - Sử dụng form mẫu từ [login.html](https://letrongdat.vercel.app/vuejs/templates/login.html).
   - Ô Email: Phải điền, đúng định dạng.
   - Ô Mật khẩu: Phải điền, tối thiểu 6 ký tự.
   - Khi click nút "Đăng nhập" (dòng **103-105** của [login.html](https://letrongdat.vercel.app/vuejs/templates/login.html)), tiến hành validate. Nếu hợp lệ, chuyển hướng về trang chủ `/` bằng code (`router.push('/')`).
3. **Trang chi tiết (`ProductDetailView.vue`)**:
   - Sử dụng giao diện mẫu từ [product-detail.html](https://letrongdat.vercel.app/vuejs/templates/product-detail.html).
   - Lấy tham số ID sản phẩm từ URL và hiển thị ra giao diện.
4. **Bảo vệ định tuyến (Navigation Guards)**:
   - Sử dụng `beforeEach` kiểm tra trạng thái đăng nhập giả lập. Nếu chưa đăng nhập, người dùng click vào trang `/cart` sẽ tự động bị chuyển hướng về trang `/login`.

---

## 📊 Tiêu chí chấm điểm (Thang điểm 10)

| Tiêu chí | Điểm | Chi tiết yêu cầu |
|---|---|---|
| **Cấu hình Router** | **2.5đ** | Tạo đúng tệp cấu hình router, định tuyến chính xác 5 trang yêu cầu, chạy mượt mà không lỗi. |
| **Validate Form Đăng Nhập** | **2.5đ** | Form đăng nhập hoạt động tốt, validate dữ liệu đầu vào đúng điều kiện, hiển thị lỗi dưới ô nhập. |
| **Trang Chi Tiết (Dynamic Route)** | **2.0đ** | Lấy chính xác tham số ID sản phẩm từ URL và hiển thị đúng bài viết tương ứng. |
| **Bảo vệ Route (Guard)** | **2.0đ** | Viết thành công guard `beforeEach` chặn không cho vào giỏ hàng khi chưa đăng nhập. |
| **Tổ chức code & Sạch sẽ** | **1.0đ** | Tổ chức file chuẩn (Views trong thư mục views, Router trong router), code sạch sẽ và chú thích rõ ràng. |

---

## 🛠️ Hướng dẫn các bước triển khai tại lớp
1. **0 - 20 phút**: Thiết lập thư viện `vue-router`, tạo các file View trống tương ứng và cấu hình route trong `src/router/index.js`. Test chuyển trang tĩnh qua lại.
2. **20 - 45 phút**: Tách mã nguồn HTML trang đăng nhập từ [login.html](https://letrongdat.vercel.app/vuejs/templates/login.html) vào `LoginView.vue`, viết logic form binding và validate.
3. **45 - 70 phút**: Tách giao diện trang chi tiết từ [product-detail.html](https://letrongdat.vercel.app/vuejs/templates/product-detail.html) vào `ProductDetailView.vue`, dùng `useRoute()` lấy ID để hiển thị.
4. **70 - 90 phút**: Viết logic bảo vệ định tuyến `beforeEach` chặn giỏ hàng `/cart` nếu chưa đăng nhập. Chạy thử nghiệm và sửa lỗi.
