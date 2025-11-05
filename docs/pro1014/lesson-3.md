# Buổi 3 – Viết Project Specification (Spec)

## 🎯 Mục tiêu học tập

-   Hiểu cấu trúc và nội dung của tài liệu Project Specification
-   Biết cách viết Spec module chi tiết, rõ ràng
-   Hoàn thành Spec module (2–3 trang) để chuẩn bị thiết kế ERD
-   Nắm được các phần quan trọng: người dùng, chức năng, luồng nghiệp vụ

---

## 📋 Nội dung chính trên lớp

### 1. Giới thiệu Project Specification

-   Spec là gì? Tại sao cần Spec?
-   Vai trò của Spec trong quy trình phát triển
-   Mối liên hệ: Use Case → Spec → ERD → Code

### 2. Cấu trúc SPEC rút gọn

Giảng viên trình bày cấu trúc Spec module:

```
1. Giới thiệu module & mục tiêu
2. Người dùng của module (User/Admin/Staff)
3. Tính năng chi tiết (CRUD, tìm kiếm, lọc, xuất báo cáo…)
4. Luồng nghiệp vụ (Workflow)
5. Yêu cầu phi chức năng (nếu có)
```

### 3. Hướng dẫn chi tiết từng phần

#### **Phần 1: Giới thiệu module & mục tiêu**

-   Tên module
-   Mục tiêu module đạt được (2–3 câu)
-   Phạm vi module (bao gồm gì, không bao gồm gì)

#### **Phần 2: Người dùng của module**

-   Liệt kê các Actor và quyền hạn (dựa trên cột "Phân quyền" trong bảng phân quyền):
    -   **Điều hành tour - ADMIN**: Quản lý toàn bộ module, có quyền cao nhất
    -   **Hướng dẫn viên (HDV)**: Xem thông tin tour được phân công, cập nhật nhật ký tour
    -   **Khách hàng (User)**: Xem tour, đặt tour (nếu module có phần dành cho khách hàng)

#### **Phần 3: Tính năng chi tiết**

-   Liệt kê từng chức năng dựa trên:
    -   **Bảng phân quyền** (Buổi 2): Xem các chức năng trong nhóm chức năng của module
    -   **Use Case** đã viết (Buổi 2): Chi tiết từng chức năng
-   Phân loại theo:
    -   **Bắt buộc**: Chức năng phải có (Yêu cầu: Bắt buộc trong bảng phân quyền)
    -   **Mở rộng**: Chức năng có thể làm sau (Yêu cầu: Mở rộng trong bảng phân quyền)
-   Mô tả rõ: Input, Output, Xử lý
-   Ví dụ:
    -   "Thêm tour mới (STT 3 - Bắt buộc): Admin nhập thông tin tour (lịch trình, hình ảnh, giá, chính sách, nhà cung cấp) → Lưu vào database → Hiển thị thông báo thành công"

#### **Phần 4: Luồng nghiệp vụ (Workflow)**

-   Mô tả luồng hoạt động chính của module
-   Có thể dùng text hoặc sơ đồ đơn giản
-   Ví dụ: "Khách hàng đặt tour → Admin duyệt → Khách hàng thanh toán → Hoàn tất"

### 4. Hướng dẫn sử dụng bảng phân quyền khi viết Spec

**Cách sử dụng bảng phân quyền từ Buổi 2:**

1. **Xác định module của nhóm:**

    - Xem 8 nhóm chức năng trong bảng phân quyền (Buổi 2)
    - Xác định module của nhóm thuộc nhóm nào (ví dụ: Module Booking → Nhóm 2: "Bán tour và đặt chỗ")

2. **Liệt kê chức năng bắt buộc:**

    - Tìm các chức năng có "Yêu cầu: Bắt buộc" trong nhóm chức năng của module
    - Đây là các tính năng PHẢI có trong Spec

3. **Liệt kê chức năng mở rộng (tùy chọn):**

    - Tìm các chức năng có "Yêu cầu: Mở rộng"
    - Có thể thêm vào Spec nếu có thời gian

4. **Xác định Actor:**
    - Xem cột "Phân quyền" để biết Actor nào sử dụng chức năng nào
    - Ghi vào phần "Người dùng của module"

### 5. Ví dụ Spec mẫu

Giảng viên trình bày 1–2 trang Spec mẫu của module Booking dựa trên bảng phân quyền. Xem phần "Ví dụ Spec hoàn chỉnh" bên dưới để tham khảo.

---

## 🧠 Kiến thức trọng tâm / Giải thích

### Project Specification là gì?

**Spec** là tài liệu mô tả chi tiết về module sẽ được xây dựng, bao gồm:

-   Chức năng cụ thể
-   Người dùng và quyền hạn
-   Luồng nghiệp vụ
-   Yêu cầu kỹ thuật

### Tại sao cần Spec?

-   ✅ Làm rõ yêu cầu trước khi code (tránh làm sai, làm thiếu)
-   ✅ Đồng bộ hiểu biết giữa các thành viên nhóm
-   ✅ Làm cơ sở để thiết kế database (ERD)
-   ✅ Giảng viên dễ dàng review và góp ý

### Mối liên hệ Use Case → Spec → Bảng phân quyền

-   **Bảng phân quyền** (Buổi 2): Liệt kê tất cả chức năng hệ thống, phân loại theo Actor và mức độ ưu tiên
-   **Use Case** (Buổi 2): Mô tả TỪNG chức năng cụ thể với luồng chi tiết
-   **Spec** (Buổi 3): Tổng hợp TẤT CẢ chức năng của module, bổ sung thêm người dùng, workflow, yêu cầu

**Quy trình viết Spec:**

1. Xem lại **bảng phân quyền** (Buổi 2) → Xác định module của nhóm thuộc nhóm chức năng nào
2. Xem lại **Use Case** đã viết (Buổi 2) → Tổng hợp các Use Case thành Spec
3. Viết **Spec** (Buổi 3) → Liệt kê đầy đủ chức năng, người dùng, workflow

### Phân biệt các loại chức năng

1. **CRUD** (Create, Read, Update, Delete):

    - Thêm, xem, sửa, xóa dữ liệu
    - Ví dụ: Thêm tour mới, Sửa thông tin tour, Xóa tour, Xem danh sách tour

2. **Tìm kiếm & Lọc**:

    - Tìm kiếm theo từ khóa
    - Lọc theo điều kiện (giá, ngày, điểm đến…)
    - Ví dụ: Tìm kiếm tour theo từ khóa "Đà Lạt", Lọc tour theo giá từ 2-5 triệu

3. **Báo cáo & Thống kê**:

    - Xuất báo cáo doanh thu
    - Thống kê số lượng booking theo tháng
    - Ví dụ: Báo cáo doanh thu, chi phí, lợi nhuận theo tour (STT 30)

4. **Quản lý trạng thái**:

    - Cập nhật trạng thái của các đối tượng
    - Ví dụ: Quản lý tình trạng booking (STT 10): Chờ xác nhận → Đã cọc → Hoàn tất → Hủy

5. **Tích hợp**:

    - Kết nối với module khác (Booking ↔ Tour ↔ User)
    - Ví dụ: Module Booking cần tích hợp với Module Tour để lấy thông tin tour, với Module User để lấy thông tin khách hàng

6. **Xuất file & In ấn**:
    - Tạo và xuất file PDF, Excel
    - Ví dụ: Xuất báo giá/hợp đồng/hóa đơn (STT 11), In danh sách đoàn (STT 16)

---

## 📘 Bài tập nhóm

### Hoàn thành Spec module (2–3 trang)

Tạo file **.docx** hoặc **.pdf** với cấu trúc:

#### **1. Giới thiệu module & mục tiêu**

-   Tên module
-   Mục tiêu module
-   Phạm vi module

#### **2. Người dùng của module**

-   Bảng liệt kê Actor và quyền hạn (dựa trên cột "Phân quyền" trong bảng phân quyền):

| Actor                  | Quyền hạn                                                                                       | Ghi chú        |
| ---------------------- | ----------------------------------------------------------------------------------------------- | -------------- |
| Điều hành tour - ADMIN | Quản lý toàn bộ module Booking: Tạo booking, cập nhật trạng thái, xuất báo giá/hợp đồng/hóa đơn | Quyền cao nhất |
| Khách hàng (User)      | Xem tour, đặt tour online, xem lịch sử booking (nếu có cổng khách hàng)                         | Quyền hạn chế  |

#### **3. Tính năng chi tiết**

Liệt kê các tính năng (dựa trên **bảng phân quyền** và **Use Case** đã viết ở Buổi 2):

**3.1. Tính năng Bắt buộc** (Phải có trong Spec)

Dựa trên bảng phân quyền, các chức năng có "Yêu cầu: Bắt buộc":

**Ví dụ: Module Booking (Nhóm 2: Bán tour và đặt chỗ)**

-   **Tạo booking mới**

    -   Mô tả: Nhân viên/khách đặt tour cho khách lẻ hoặc đoàn
    -   Input: Thông tin khách hàng, tour, số lượng người, ngày đi
    -   Xử lý: Hệ thống tự động kiểm tra chỗ trống
    -   Output: Booking được tạo với trạng thái "Chờ xác nhận"

-   **Quản lý tình trạng booking (STT 10 - Bắt buộc)**
    -   Mô tả: Theo dõi, cập nhật trạng thái: Chờ xác nhận → Đã cọc → Hoàn tất → Hủy
    -   Input: Trạng thái mới, lý do (nếu hủy)
    -   Xử lý: Lưu lịch sử thay đổi trạng thái
    -   Output: Booking được cập nhật trạng thái, gửi email thông báo

**3.2. Tính năng Mở rộng** (Có thể làm sau)

Dựa trên bảng phân quyền, các chức năng có "Yêu cầu: Mở rộng":

-   **Xuất báo giá/hợp đồng/hóa đơn (STT 11 - Mở rộng)**

    -   Mô tả: Tự động tạo báo giá, hợp đồng, hóa đơn từ booking
    -   Input: Booking ID
    -   Xử lý: Tạo file PDF theo mẫu
    -   Output: File PDF có thể tải về, gửi email, in

-   **Lưu lịch sử giao dịch nội bộ (STT 12 - Mở rộng)**
    -   Mô tả: Ghi nhận toàn bộ booking, giao dịch, thanh toán vào hồ sơ khách hàng
    -   Input: Dữ liệu booking, giao dịch
    -   Xử lý: Lưu vào database, liên kết với hồ sơ khách hàng
    -   Output: Có thể tra cứu lịch sử giao dịch của từng khách hàng

#### **4. Luồng nghiệp vụ (Workflow)**

Mô tả luồng hoạt động chính (dựa trên Use Case đã viết ở Buổi 2, có thể kèm sơ đồ đơn giản):

**Ví dụ: Module Booking**

```
1. Khách hàng/Nhân viên tạo booking mới
   → Nhập thông tin: tour, số lượng người, ngày đi, thông tin khách hàng
   → Hệ thống kiểm tra chỗ trống
   → Booking được tạo với trạng thái "Chờ xác nhận"

2. Admin xem danh sách booking chờ duyệt
   → Lọc theo trạng thái "Chờ xác nhận"
   → Xem chi tiết booking

3. Admin cập nhật trạng thái booking
   → Chọn booking và cập nhật trạng thái:
     - "Chờ xác nhận" → "Đã cọc" (nếu khách đã đặt cọc)
     - "Đã cọc" → "Hoàn tất" (sau khi tour hoàn thành)
     - Hoặc "Hủy" (nếu hủy đơn)
   → Hệ thống lưu lịch sử thay đổi
   → Gửi email thông báo đến khách hàng

4. (Mở rộng) Xuất báo giá/hợp đồng/hóa đơn
   → Từ booking, Admin click "Xuất báo giá"
   → Hệ thống tạo file PDF
   → Tải về hoặc gửi email cho khách hàng
```

#### **5. Yêu cầu phi chức năng (nếu có)**

-   **Giao diện**: Responsive, dễ sử dụng
-   **Bảo mật**: Phân quyền theo Actor, mã hóa thông tin nhạy cảm
-   **Hiệu năng**: Tải trang nhanh, xử lý dữ liệu lớn
-   **Đa ngôn ngữ**: Hỗ trợ tiếng Việt, tiếng Anh (nếu có - STT 38)
-   **Mobile**: Giao diện tối ưu cho mobile (nếu có - STT 34)

### Yêu cầu format

-   ✅ Độ dài: 2–3 trang A4
-   ✅ Font: Times New Roman hoặc Arial, size 12–14
-   ✅ Có mục lục (nếu dài hơn 3 trang)
-   ✅ Đánh số trang
-   ✅ Header: Tên nhóm, Tên module
-   ✅ Footer: Ngày nộp

### Deadline

Nộp trước buổi 4 (gửi qua email hoặc LMS)

**Format nộp:**

-   File Word: `[Tên nhóm]_Spec_Module_[Tên module].docx`
-   Hoặc PDF: `[Tên nhóm]_Spec_Module_[Tên module].pdf`

**Lưu ý:** Tên file phải rõ ràng, ví dụ: `Nhom1_Spec_Module_Booking.docx`

### Ví dụ Spec hoàn chỉnh - Module Booking

**Dưới đây là ví dụ Spec mẫu cho Module Booking (tham khảo):**

---

## PROJECT SPECIFICATION - MODULE BOOKING

**Tên nhóm:** [Tên nhóm]  
**Module:** Booking và Quản lý đặt chỗ  
**Ngày nộp:** [Ngày]

---

### 1. Giới thiệu module & mục tiêu

**Tên module:** Module Booking và Quản lý đặt chỗ

**Mục tiêu:**
Module Booking hỗ trợ quản lý toàn bộ quy trình đặt tour của khách hàng, từ khi tạo booking đến khi hoàn tất tour. Module này giúp nhân viên và Admin theo dõi, cập nhật trạng thái booking, quản lý lịch sử giao dịch và tạo các tài liệu liên quan (báo giá, hợp đồng, hóa đơn).

**Phạm vi module:**

-   Bao gồm: Tạo booking, quản lý trạng thái booking, xuất báo giá/hợp đồng/hóa đơn, lưu lịch sử giao dịch
-   Không bao gồm: Thanh toán online (thuộc module Payment), Quản lý tour (thuộc module Tour)

---

### 2. Người dùng của module

| Actor                  | Quyền hạn                                                                                       | Ghi chú        |
| ---------------------- | ----------------------------------------------------------------------------------------------- | -------------- |
| Điều hành tour - ADMIN | Quản lý toàn bộ module Booking: Tạo booking, cập nhật trạng thái, xuất báo giá/hợp đồng/hóa đơn | Quyền cao nhất |
| Khách hàng (User)      | Xem tour, đặt tour online, xem lịch sử booking (nếu có cổng khách hàng)                         | Quyền hạn chế  |

---

### 3. Tính năng chi tiết

#### 3.1. Tính năng Bắt buộc

**3.1.1. Tạo booking mới (STT 9 - Bắt buộc)**

-   **Mô tả:** Nhân viên/khách đặt tour cho khách lẻ hoặc đoàn, nhập thông tin, hệ thống tự động kiểm tra chỗ trống
-   **Actor:** Điều hành tour - ADMIN, Khách hàng (User)
-   **Input:**
    -   Thông tin tour (tour ID hoặc chọn tour)
    -   Số lượng người (người lớn, trẻ em, em bé)
    -   Ngày khởi hành mong muốn
    -   Thông tin khách hàng (họ tên, email, SĐT, địa chỉ)
    -   Ghi chú đặc biệt (nếu có)
-   **Xử lý:**
    -   Hệ thống kiểm tra số chỗ còn lại của tour
    -   Tính toán giá tour (theo số lượng người, loại tour)
    -   Tạo mã booking duy nhất
    -   Lưu booking vào database với trạng thái "Chờ xác nhận"
-   **Output:**
    -   Booking được tạo thành công
    -   Hiển thị mã booking
    -   Gửi email xác nhận đến khách hàng

**3.1.2. Quản lý tình trạng booking (STT 10 - Bắt buộc)**

-   **Mô tả:** Theo dõi, cập nhật trạng thái booking: Chờ xác nhận → Đã cọc → Hoàn tất → Hủy. Lưu lịch sử thay đổi
-   **Actor:** Điều hành tour - ADMIN
-   **Input:**
    -   Booking ID
    -   Trạng thái mới (Đã cọc, Hoàn tất, Hủy)
    -   Lý do hủy (nếu hủy)
    -   Số tiền đã cọc (nếu chuyển sang "Đã cọc")
-   **Xử lý:**
    -   Kiểm tra trạng thái hiện tại
    -   Validate: Không thể chuyển từ "Hoàn tất" về "Chờ xác nhận"
    -   Lưu lịch sử thay đổi (trạng thái cũ → mới, ngày giờ, người thực hiện)
    -   Cập nhật trạng thái booking
    -   Nếu hủy: Cập nhật số chỗ còn lại của tour, xử lý hoàn tiền (nếu đã thanh toán)
-   **Output:**
    -   Trạng thái booking được cập nhật
    -   Gửi email thông báo đến khách hàng
    -   Lịch sử thay đổi được lưu lại

#### 3.2. Tính năng Mở rộng

**3.2.1. Xuất báo giá/hợp đồng/hóa đơn (STT 11 - Mở rộng)**

-   **Mô tả:** Tự động tạo báo giá, hợp đồng, hóa đơn từ booking
-   **Actor:** Điều hành tour - ADMIN
-   **Input:** Booking ID, Loại file (báo giá/hợp đồng/hóa đơn)
-   **Xử lý:** Tạo file PDF theo mẫu có sẵn, điền thông tin từ booking
-   **Output:** File PDF có thể tải về, gửi email, in

**3.2.2. Lưu lịch sử giao dịch nội bộ (STT 12 - Mở rộng)**

-   **Mô tả:** Ghi nhận toàn bộ booking, giao dịch, thanh toán vào hồ sơ khách hàng
-   **Actor:** Hệ thống (tự động)
-   **Input:** Dữ liệu booking, giao dịch, thanh toán
-   **Xử lý:** Lưu vào database, liên kết với hồ sơ khách hàng
-   **Output:** Có thể tra cứu lịch sử giao dịch của từng khách hàng

---

### 4. Luồng nghiệp vụ (Workflow)

**Luồng chính của Module Booking:**

```
1. Tạo booking mới
   ├─ Khách hàng/Nhân viên nhập thông tin
   ├─ Hệ thống kiểm tra chỗ trống
   └─ Booking được tạo với trạng thái "Chờ xác nhận"

2. Admin xem và quản lý booking
   ├─ Xem danh sách booking (có thể lọc theo trạng thái)
   ├─ Xem chi tiết booking
   └─ Cập nhật trạng thái:
       ├─ "Chờ xác nhận" → "Đã cọc" (khi khách đặt cọc)
       ├─ "Đã cọc" → "Hoàn tất" (sau khi tour hoàn thành)
       └─ "Hủy" (nếu hủy đơn)

3. (Mở rộng) Xuất tài liệu
   ├─ Từ booking, Admin chọn loại file cần xuất
   ├─ Hệ thống tạo file PDF
   └─ Tải về hoặc gửi email cho khách hàng
```

**Luồng tích hợp với module khác:**

-   **Module Tour:** Lấy thông tin tour (tên, giá, số chỗ còn lại)
-   **Module User:** Lấy thông tin khách hàng (nếu đã đăng nhập)
-   **Module Payment:** Xử lý thanh toán (nếu có)

---

### 5. Yêu cầu phi chức năng

-   **Giao diện:** Responsive, dễ sử dụng, phù hợp với màn hình desktop và tablet
-   **Bảo mật:** Phân quyền rõ ràng, chỉ Admin mới có thể cập nhật trạng thái booking
-   **Hiệu năng:** Tải danh sách booking nhanh, hỗ trợ phân trang khi có nhiều booking
-   **Bảo mật dữ liệu:** Mã hóa thông tin khách hàng, không lộ thông tin nhạy cảm

---

### Gợi ý Spec cho các module khác

#### Module Quản lý Tour (Nhóm 1: Quản lý tour và sản phẩm du lịch)

**Chức năng bắt buộc:**

-   Danh mục tour (STT 2)
-   Thông tin chi tiết tour (STT 3)

**Chức năng mở rộng:**

-   Quản lý phiên bản tour (STT 4)
-   Tạo nhanh báo giá tour (STT 5)
-   Gắn mã QR/đường dẫn đặt tour (STT 6)
-   Clone tour (STT 7)

#### Module Điều hành Tour (Nhóm 3: Quản lý & điều hành tour)

**Chức năng bắt buộc:**

-   Quản lý danh sách nhân sự HDV (STT 14)
-   Quản lý lịch khởi hành & phân bổ nhân sự (STT 15)
-   Danh sách khách theo tour (STT 16)
-   Ghi chú đặc biệt (STT 17)

**Chức năng mở rộng:**

-   Theo dõi chi phí thực tế (STT 18)
-   Nhật ký tour (STT 19)
-   Quản lý phản hồi đánh giá (STT 20)

#### Module Vận hành Tour cho HDV (Nhóm 8)

**Chức năng bắt buộc (dành cho HDV):**

-   Xem lịch trình tour (STT 40)
-   Xem danh sách khách (STT 41)
-   Cập nhật nhật ký tour (STT 42)
-   Check-in khách (STT 43)
-   Cập nhật yêu cầu đặc biệt (STT 44)

---

## 📦 Kết quả mong đợi sau buổi học

-   ✅ Hoàn thành Spec module đầy đủ (2–3 trang)
-   ✅ Liệt kê rõ các chức năng sẽ triển khai
-   ✅ Xác định được người dùng và quyền hạn
-   ✅ Mô tả được luồng nghiệp vụ chính
-   ✅ Sẵn sàng để thiết kế ERD ở tuần 2

---

## 💬 Gợi ý giảng viên

### ⏱ Thời lượng gợi ý

-   Giới thiệu: 15 phút
-   Cấu trúc Spec: 30 phút
-   Hướng dẫn chi tiết: 30 phút
-   Hướng dẫn sử dụng bảng phân quyền: 10 phút
-   Ví dụ mẫu: 15 phút
-   Tổng: ~100 phút

### 💡 Tips hướng dẫn

1. **Nhắc nhở sử dụng bảng phân quyền và Use Case**:

    - Xem lại bảng phân quyền (Buổi 2) để xác định module thuộc nhóm chức năng nào
    - Xem lại Use Case đã viết (Buổi 2) để tổng hợp thành Spec
    - Ưu tiên các chức năng "Bắt buộc" trước, "Mở rộng" sau

2. **Khuyến khích chi tiết**: Spec càng chi tiết, thiết kế ERD và code càng dễ

3. **Gợi ý tham khảo**: Có thể tham khảo các website tour du lịch thực tế để có ý tưởng

4. **Lưu ý về tích hợp**: Nhắc nhở các nhóm nghĩ đến phần tích hợp với module khác (ví dụ: Module Booking cần tích hợp với Module Tour để lấy thông tin tour)

5. **Phân loại tính năng**: Rõ ràng giữa tính năng "Bắt buộc" và "Mở rộng" để dễ ưu tiên khi code

### 🔍 Câu hỏi thường gặp

-   **Q: "Spec và Use Case khác nhau như thế nào?"**

    -   A: Use Case mô tả TỪNG chức năng với luồng chi tiết (Buổi 2), Spec TỔNG HỢP tất cả chức năng của module và bổ sung thêm người dùng, workflow, yêu cầu.

-   **Q: "Làm sao biết module của nhóm có những chức năng gì?"**

    -   A: Xem lại bảng phân quyền (Buổi 2), xác định module của nhóm thuộc nhóm chức năng nào, liệt kê các chức năng trong nhóm đó. Ưu tiên các chức năng "Bắt buộc".

-   **Q: "Có cần làm tất cả chức năng trong bảng phân quyền không?"**

    -   A: Không. Chỉ làm các chức năng trong nhóm chức năng của module. Ưu tiên "Bắt buộc" trước, "Mở rộng" nếu có thời gian.

-   **Q: "Spec có cần quá chi tiết về kỹ thuật không?"**

    -   A: Không cần quá chi tiết về code, nhưng cần rõ về chức năng (Input, Output, Xử lý) và luồng nghiệp vụ.

-   **Q: "Nhóm em có thể thay đổi Spec sau này không?"**
    -   A: Có thể, nhưng phải thông báo với giảng viên. Tốt nhất là suy nghĩ kỹ trước khi viết Spec, dựa trên bảng phân quyền và Use Case đã viết.

### 📝 Checklist đánh giá Spec

Giảng viên có thể dùng checklist này khi review Spec:

**Nội dung:**

-   [ ] Có đầy đủ 5 phần chính (Giới thiệu, Người dùng, Tính năng, Workflow, Yêu cầu phi chức năng)
-   [ ] Liệt kê đủ các tính năng (≥5 tính năng, ưu tiên "Bắt buộc")
-   [ ] Mô tả rõ người dùng và quyền hạn (dựa trên bảng phân quyền)
-   [ ] Phân loại rõ tính năng "Bắt buộc" và "Mở rộng"
-   [ ] Mỗi tính năng có mô tả Input, Output, Xử lý
-   [ ] Luồng nghiệp vụ logic và rõ ràng (dựa trên Use Case đã viết)
-   [ ] Spec phù hợp với bảng phân quyền (module thuộc đúng nhóm chức năng)

**Format:**

-   [ ] Format đúng yêu cầu (2–3 trang, có header/footer)
-   [ ] Font chữ rõ ràng, dễ đọc
-   [ ] Có mục lục (nếu dài hơn 3 trang)

---

**📌 Lưu ý:** Tuần 2 sẽ học thiết kế ERD. Các nhóm nhớ nộp Spec đúng deadline để giảng viên kịp review!
