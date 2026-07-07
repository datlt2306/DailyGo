# Buổi 7: Đánh giá giữa kỳ 1

## 🎯 Mục tiêu đánh giá
- Đánh giá khả năng vận dụng các kiến thức cốt lõi đã học trong Giai đoạn 1 gồm:
  - Cú pháp Template, Binding (`v-bind`, `v-model`, `@click`, etc.)
  - Reactivity cơ bản (`ref`, `reactive`, `computed`, `watch`)
  - Render điều kiện và danh sách (`v-if`, `v-for` với `:key`)
  - Tách component và truyền dữ liệu (`props`, `custom events`)
- Thực hành xây dựng một trang Giỏ hàng tương tác hoàn chỉnh từ template tĩnh trong 90 phút.

---

## 📋 Đề bài thực hành: Xây dựng Trang Giỏ hàng tương tác Vanguard Store (Interactive Cart Page)

Hãy xây dựng một ứng dụng giỏ hàng Vue 3 dựa trên giao diện tĩnh của file [cart.html](https://letrongdat.vercel.app/vuejs/templates/cart.html).

### Yêu cầu chức năng:
1. **Hiển thị danh sách sản phẩm trong giỏ**: Sử dụng `v-for` lặp danh sách các sản phẩm từ một mảng dữ liệu reactive ban đầu (mỗi item gồm: `id`, `name`, `price`, `quantity`, `image`).
2. **Nút tăng/giảm số lượng**: Khi click nút `+` hoặc `-` sẽ tăng/giảm số lượng tương ứng của sản phẩm đó. Không cho phép giảm xuống dưới 1.
3. **Xóa sản phẩm**: Bấm nút "Xóa" sẽ hiển thị confirm xác nhận. Nếu đồng ý, lọc bỏ sản phẩm đó khỏi mảng giỏ hàng.
4. **Tóm tắt đơn hàng (Sử dụng computed)**:
   - Tính toán tổng số lượng sản phẩm đang có trong giỏ hàng.
   - Tính tổng tiền tạm tính bằng tổng của `đơn giá * số lượng` từng sản phẩm.
   - Tự động đồng bộ các giá trị này lên khu vực **Tóm tắt đơn hàng** (vùng cột bên phải ở dòng **137 đến 165** của [cart.html](https://letrongdat.vercel.app/vuejs/templates/cart.html)).
5. **Giỏ hàng trống (Sử dụng v-if/v-else)**: Nếu mảng giỏ hàng rỗng (không còn sản phẩm nào), hiển thị khối thông báo "Giỏ hàng của các em đang trống. Hãy quay lại trang chủ mua sắm!" và ẩn khu vực tóm tắt đơn hàng đi.

### Yêu cầu cấu trúc Components (Bắt buộc tách file):
- `CartManager.vue` (hoặc `App.vue`): Quản lý mảng giỏ hàng, chứa logic tăng/giảm/xóa và phần tính tổng hóa đơn.
- `CartItem.vue`: Component con hiển thị thông tin và nút điều khiển của một sản phẩm. Nhận thông tin qua `props`, gửi sự kiện thay đổi số lượng hoặc xóa lên cha qua `defineEmits`.

---

## 📊 Tiêu chí chấm điểm (Thang điểm 10)

| Tiêu chí | Điểm | Chi tiết yêu cầu |
|---|---|---|
| **Cấu trúc & Tách Component** | **2.5đ** | Tách đúng component con `CartItem.vue`, truyền nhận prop/emit đầy đủ và chạy không lỗi. |
| **Logic Tăng/Giảm Số Lượng** | **2.5đ** | Nút bấm hoạt động nhạy, cập nhật tức thì, có kiểm tra chặn không cho giảm < 1. |
| **Xóa Sản Phẩm** | **2.0đ** | Click xóa hiển thị confirm hộp thoại, đồng ý sẽ gỡ bản ghi và cập nhật lại giao diện. |
| **Tính toán hóa đơn (Computed)** | **2.0đ** | Sử dụng computed tính toán chính xác tổng tiền và số lượng đồng bộ trên UI. |
| **Xử lý Giỏ hàng trống** | **1.0đ** | Xử lý tốt Empty state bằng `v-if/v-else` khi xóa hết sản phẩm. |

---

## 🛠️ Hướng dẫn triển khai tại lớp
1. **0 - 15 phút**: Mở file mẫu giao diện [cart.html](https://letrongdat.vercel.app/vuejs/templates/cart.html) để phân tích các vùng cần tách và cấu trúc mảng giỏ hàng mẫu.
2. **15 - 45 phút**: Tạo component con `CartItem.vue`, copy đoạn HTML của CART ITEM 1 (dòng **73 đến 100**) vào template của con và cấu hình props.
3. **45 - 75 phút**: Viết logic thay đổi số lượng, xóa tại component cha và kết nối với con thông qua `emit`.
4. **75 - 90 phút**: Viết hàm computed tính tổng hóa đơn, hoàn thiện CSS Tailwind và kiểm tra kỹ lại toàn bộ các luồng hoạt động.
