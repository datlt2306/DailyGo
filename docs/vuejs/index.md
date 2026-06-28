# Vue 3 (Composition API) từ cơ bản đến nâng cao

Chào mừng bạn đến với khóa học **Vue 3 cơ bản đến nâng cao sử dụng Vite & Composition API**!

## 🎯 Giới thiệu khóa học

Khóa học này sẽ giúp bạn từng bước làm chủ Vue 3 - một trong những progressive framework phổ biến và mạnh mẽ nhất hiện nay để xây dựng giao diện Single Page Application (SPA) hiện đại. Tương tự như thực tế phát triển phần mềm, khóa học được thiết kế với **20% lý thuyết và 80% thực hành**.

### Thông tin chung

- **Tổng thời lượng**: 15 buổi (mỗi buổi 2 tiếng)
- **Tần suất**: 3 buổi/tuần
- **Công nghệ**: Vite + Vue 3 (Composition API, `<script setup>`) + Vue Router + Pinia + Axios + TailwindCSS + JSON-Server
- **Đối tượng**: Học viên đã có kiến thức lập trình JavaScript cơ bản (ES6+)
- **Phương pháp**: Mỗi buổi học = 30 phút lý thuyết + 80 phút thực hành + 10 phút Q&A/Wrap-up

### Điều kiện tiên quyết

✅ Hiểu biết về HTML5, CSS3, Flexbox/Grid  
✅ JavaScript ES6+ (Arrow Functions, Destructuring, Import/Export, Promise/Async-Await)  
✅ Cơ bản về Web API (fetch/axios) và DOM Manipulation  

### Kết quả học tập

Sau khi hoàn thành khóa học, bạn sẽ có thể:
- ✅ Hiểu sâu về cơ chế Reactive của Vue 3 (Proxy-based) và tư duy component-based.
- ✅ Sử dụng thành thạo Composition API với cú pháp `<script setup>` hiện đại.
- ✅ Tổ chức, phân tách và tái sử dụng component linh hoạt thông qua Props, Events, Slots và Composables.
- ✅ Thiết kế UI/UX Responsive, chuyên nghiệp bằng TailwindCSS.

---

## 📚 Nội dung khóa học

### 📅 **Giai đoạn 1: Nền tảng Vue 3 & Cú pháp cơ bản (Buổi 1-6)**

Mục tiêu: Hiểu rõ kiến trúc Vue 3, làm quen cú pháp template, xử lý Reactivity cơ bản và giao tiếp giữa các Component. **Thực hành trên giao diện Trang chủ & Trang chi tiết Vanguard Store**.

| Buổi | Nội dung | Mục tiêu chính | Thực hành |
|---|---|---|---|
| [Buổi 1](./lesson-1.md) | Giới thiệu VueJS & Setup với Vite | Hiểu về Single Page App, Virtual DOM, khởi tạo project bằng Vite, cấu trúc tệp `.vue` | Cài đặt môi trường, chuẩn bị các file template Vanguard Store |
| [Buổi 2](./lesson-2.md) | Template Syntax & Directives | Sử dụng Interpolation, các directives cơ bản: `v-bind`, `v-model`, `v-on` | Đổ dữ liệu tĩnh và xử lý hover hiển thị nhãn ở trang chủ |
| [Buổi 3](./lesson-3.md) | Reactivity cơ bản | Phân biệt `ref` vs `reactive`, sử dụng `computed` và `watch` | Tăng giảm số lượng sản phẩm và tính tạm tính ở trang Giỏ hàng |
| [Buổi 4](./lesson-4.md) | Conditional & List Rendering | Điều khiển hiển thị với `v-if`, `v-else` và duyệt mảng với `v-for` kèm `key` | Hiển thị danh sách sản phẩm nổi bật có bộ lọc theo danh mục |
| [Buổi 5](./lesson-5.md) | Component & Props | Tư duy chia nhỏ component, khai báo và truyền nhận `props` (cha sang con) | Tách component `ProductCard.vue` từ file HTML trang chủ |
| [Buổi 6](./lesson-6.md) | Custom Events & Provide/Inject | Phát sự kiện `emit` (con lên cha), truyền dữ liệu đa tầng | Phát sự kiện xóa sản phẩm và cập nhật giỏ hàng |

### 📅 **Giai đoạn 2: Lifecycle, Form & Routing (Buổi 7-11)**

Mục tiêu: Quản lý vòng đời component, tương tác DOM qua ref, xử lý Form validation và chuyển trang Single Page App.

| Buổi | Nội dung | Mục tiêu chính | Thực hành |
|---|---|---|---|
| [Buổi 7](./lesson-7.md) | **Đánh giá giữa kỳ 1** | Đánh giá kiến thức nền tảng giai đoạn 1 | Thực hiện kiểm tra thực hành: Xây dựng trang Giỏ hàng tương tác |
| [Buổi 8](./lesson-8.md) | Lifecycle Hooks & Template Refs | Hiểu vòng đời component (`onMounted`, `onUnmounted`), làm việc với Template Refs | Tự động focus ô nhập liệu, khởi tạo icon Lucide khi mount |
| [Buổi 9](./lesson-9.md) | Form Handling & Validation | Xử lý nhiều loại input, validate dữ liệu đầu vào | Validate Form Đăng nhập & Đăng ký |
| [Buổi 10](./lesson-10.md) | Routing với Vue Router | Cài đặt Vue Router, cấu hình Routes, Dynamic Routing, Navigation Guards | Cấu hình định tuyến liên kết các trang trong Vanguard Store |
| [Buổi 11](./lesson-11.md) | **Đánh giá giữa kỳ 2** | Kiểm tra khả năng xử lý Form và Router | Xây dựng hệ thống định tuyến đa trang kèm bảo vệ định tuyến |

### 📅 **Giai đoạn 3: State Management, API & Dự án cuối khóa (Buổi 12-15)**

Mục tiêu: Quản lý State toàn cục bằng Pinia, kết nối API qua Axios, tối ưu UI với TailwindCSS/Slots và hoàn thiện dự án.

| Buổi | Nội dung | Mục tiêu chính | Thực hành |
|---|---|---|---|
| [Buổi 12](./lesson-12.md) | Quản lý State với Pinia | Khái niệm Store, State, Getters, Actions trong Pinia; cách chia nhỏ Store | Quản lý giỏ hàng toàn cục bằng Pinia |
| [Buổi 13](./lesson-13.md) | Axios & JSON-Server (CRUD) | Kết nối API bất đồng bộ, thực hiện CRUD (Get, Post, Put, Delete) | Kết nối danh mục sản phẩm và trang quản trị Admin |
| [Buổi 14](./lesson-14.md) | Styling, TailwindCSS & Slots | Ứng dụng Tailwind CSS, sử dụng Named Slots và Scoped Slots để tùy biến UI | Tạo các UI Component dùng chung (BaseCard, BaseModal) |
| [Buổi 15](./lesson-15.md) | Hoàn thiện dự án & Trình bày | Tối ưu mã nguồn, đóng gói dự án và thuyết trình kết quả | Demo báo cáo dự án Vanguard Store hoàn chỉnh |

---

## 🎓 Dự án cuối khóa

Học viên sẽ xây dựng: **[Website Cửa Hàng Công Nghệ & Thời Trang (Vanguard Store E-Commerce)](./final-project.md)**.

Ứng dụng web Single Page Application đầy đủ các tính năng:
- 🛒 Danh sách sản phẩm với chức năng tìm kiếm, phân trang và bộ lọc theo danh mục.
- 🔐 Đăng ký, Đăng nhập, Phân quyền người dùng (Khách/User/Admin).
- 🛍️ Giỏ hàng và đặt hàng tích hợp Pinia Store.
- ⚙️ Trang quản trị Admin: Quản lý danh sách sản phẩm (CRUD), quản lý đơn hàng.
- 💾 Kết nối REST API giả lập bằng `json-server`.
- 📱 Giao diện responsive hoàn chỉnh với Tailwind CSS theo các file mẫu HTML.

---

## 📊 Đánh giá kết quả

| Thành phần điểm | Tỷ trọng | Mô tả |
|---|---|---|
| **Bài tập thực hành tại lớp (Labs)** | 20% | Bài thực hành nhỏ sau mỗi buổi học |
| **Đánh giá giai đoạn 1 (Midterm 1)** | 20% | Dự án cá nhân ở buổi 7 |
| **Đánh giá giai đoạn 2 (Midterm 2)** | 20% | Bài kiểm tra ở buổi 11 |
| **Dự án cuối khóa (Final Project)** | 40% | Dự án nhóm hoặc cá nhân nộp và thuyết trình ở buổi 15 |

---

## 📖 Tài nguyên học tập

- **Tài liệu chính thức**: [Vue.js Official Docs (Vue 3)](https://vuejs.org/)
- **State Management**: [Pinia Docs](https://pinia.vuejs.org/)
- **Định tuyến**: [Vue Router Docs](https://router.vuejs.org/)
- **Styling**: [TailwindCSS Docs](https://tailwindcss.com/)
