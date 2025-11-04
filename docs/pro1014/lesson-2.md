# Buổi 2 – Phân tích chức năng (Use Case)

## 🎯 Mục tiêu học tập

-   Hiểu khái niệm Use Case và cách viết Use Case text
-   Phân tích được các chức năng chính của module phụ trách
-   Liệt kê đầy đủ Use Case cho module
-   Biết cách mô tả luồng nghiệp vụ bằng Use Case
-   Thực hành viết Use Case cho module cụ thể

---

## 📋 Nội dung chính trên lớp

### 1. Giới thiệu Use Case (20 phút)

#### **1.1. Use Case là gì?**

**Use Case** là một kỹ thuật phân tích và mô tả yêu cầu hệ thống, thể hiện cách người dùng (Actor) tương tác với hệ thống để hoàn thành một mục tiêu cụ thể.

**Đặc điểm của Use Case:**

-   ✅ Mô tả từ góc nhìn người dùng (user perspective)
-   ✅ Tập trung vào "Làm gì" thay vì "Làm thế nào"
-   ✅ Dễ hiểu, dễ truyền đạt cho người không chuyên kỹ thuật
-   ✅ Làm cơ sở để viết Spec và thiết kế hệ thống

#### **1.2. Tại sao cần Use Case?**

**Lợi ích:**

1. **Làm rõ yêu cầu**: Giúp hiểu rõ hệ thống cần làm gì
2. **Giao tiếp hiệu quả**: Trao đổi giữa các thành viên nhóm dễ dàng hơn
3. **Tránh thiếu sót**: Đảm bảo không bỏ sót chức năng quan trọng
4. **Làm cơ sở thiết kế**: Dùng để thiết kế database, code sau này
5. **Kiểm thử**: Dùng để viết test case

#### **1.3. Cấu trúc Use Case text cơ bản**

Một Use Case text thường gồm các phần:

```
**Tên Use Case**: [Tên ngắn gọn, rõ ràng]
**Actor**: [Ai sử dụng - User/Admin/Staff]
**Mô tả**: [Mô tả ngắn gọn mục đích]
**Điều kiện tiên quyết (Precondition)**: [Điều kiện cần có trước khi thực hiện]
**Luồng chính (Main Flow)**:
1. Bước 1...
2. Bước 2...
...
**Luồng phụ (Alternative Flow)**: [Các trường hợp thay thế]
**Luồng ngoại lệ (Exception Flow)**: [Xử lý lỗi, validation]
**Điều kiện kết thúc (Postcondition)**: [Kết quả sau khi hoàn thành]
```

#### **1.4. Ví dụ Use Case đơn giản**

**Ví dụ cơ bản: Rút tiền tại ATM**

```
**Tên Use Case**: Rút tiền tại ATM
**Actor**: Khách hàng
**Mô tả**: Khách hàng rút tiền từ tài khoản qua máy ATM
**Điều kiện tiên quyết**: Khách hàng có thẻ ATM và có tiền trong tài khoản
**Luồng chính**:
1. Khách hàng đưa thẻ vào máy ATM
2. Máy yêu cầu nhập mã PIN
3. Khách hàng nhập mã PIN
4. Máy hiển thị menu
5. Khách hàng chọn "Rút tiền"
6. Khách hàng nhập số tiền
7. Máy kiểm tra số dư
8. Máy trả tiền và thẻ
**Luồng ngoại lệ**: Nếu PIN sai, máy yêu cầu nhập lại (tối đa 3 lần)
**Điều kiện kết thúc**: Khách hàng nhận được tiền, số dư tài khoản giảm
```

### 2. Hướng dẫn viết Use Case text chi tiết

#### **2.1. Bước 1: Xác định Actor**

**Các loại Actor trong hệ thống Tour du lịch:**

| Actor                          | Mô tả                            | Ví dụ                                    |
| ------------------------------ | -------------------------------- | ---------------------------------------- |
| **Khách hàng (User/Customer)** | Người dùng cuối sử dụng hệ thống | Đặt tour, xem tour, đánh giá             |
| **Quản trị viên (Admin)**      | Quản lý toàn bộ hệ thống         | Quản lý tour, duyệt booking, xem báo cáo |
| **Nhân viên (Staff)**          | Nhân viên xử lý nghiệp vụ        | Xử lý booking, tư vấn khách hàng         |
| **Hệ thống (System)**          | Hệ thống tự động thực hiện       | Gửi email, tính toán giá                 |

**Cách xác định Actor:**

-   Ai sử dụng hệ thống?
-   Ai nhận lợi ích từ chức năng này?
-   Ai cung cấp thông tin cho hệ thống?

#### **2.2. Bước 2: Xác định Use Case**

**Câu hỏi để xác định Use Case:**

-   Actor muốn làm gì với hệ thống?
-   Hệ thống cần làm gì để phục vụ Actor?
-   Kết quả mong đợi là gì?

**Quy tắc đặt tên Use Case:**

-   ✅ Dùng động từ + danh từ (ví dụ: "Đặt tour", "Quản lý booking")
-   ✅ Ngắn gọn, rõ ràng (1–5 từ)
-   ✅ Mô tả mục tiêu, không mô tả cách làm
-   ❌ Tránh: "Xử lý đặt tour" → Nên: "Đặt tour"
-   ❌ Tránh: "Hệ thống cho phép khách hàng đặt tour" → Nên: "Đặt tour"

#### **2.3. Bước 3: Viết Luồng chính (Main Flow)**

**Nguyên tắc viết:**

1. **Bắt đầu từ góc nhìn Actor**: "Khách hàng làm gì..."
2. **Mỗi bước là một hành động cụ thể**: Không quá chung chung
3. **Tuần tự logic**: Bước sau phụ thuộc bước trước
4. **5–10 bước**: Không quá dài, không quá ngắn
5. **Ngôn ngữ đơn giản**: Dễ hiểu, không dùng thuật ngữ phức tạp

**Ví dụ tốt:**

```
1. Khách hàng mở trang web tour du lịch
2. Khách hàng tìm kiếm tour theo điểm đến "Đà Lạt"
3. Hệ thống hiển thị danh sách tour Đà Lạt
4. Khách hàng chọn tour "Đà Lạt 3 ngày 2 đêm"
5. Khách hàng nhập số lượng người: 2 người
6. Khách hàng chọn ngày khởi hành: 15/12/2024
7. Khách hàng nhập thông tin: họ tên, email, số điện thoại
8. Khách hàng chọn phương thức thanh toán: Chuyển khoản
9. Khách hàng click nút "Xác nhận đặt tour"
10. Hệ thống lưu thông tin booking và gửi email xác nhận
```

**Ví dụ không tốt:**

```
1. Khách hàng đặt tour
```

(Quá chung chung, không chi tiết)

#### **2.4. Bước 4: Viết Luồng phụ (Alternative Flow)**

**Luồng phụ** là các trường hợp thay thế, không phải lỗi.

**Ví dụ:**

-   Khách hàng có thể đăng nhập trước khi đặt tour (thay vì nhập thông tin mỗi lần)
-   Khách hàng có thể chọn thanh toán bằng thẻ (thay vì chuyển khoản)
-   Khách hàng có thể hủy đơn trong vòng 24h

**Format:**

```
**Luồng phụ A1: Khách hàng đã đăng nhập**
- Bước 5: Hệ thống tự động điền thông tin khách hàng
- Bước 7: Bỏ qua (không cần nhập thông tin)

**Luồng phụ A2: Thanh toán bằng thẻ**
- Bước 8: Khách hàng chọn "Thanh toán bằng thẻ"
- Bước 8a: Khách hàng nhập thông tin thẻ
- Bước 8b: Hệ thống xử lý thanh toán
```

#### **2.5. Bước 5: Viết Luồng ngoại lệ (Exception Flow)**

**Luồng ngoại lệ** xử lý các trường hợp lỗi, validation.

**Các loại lỗi thường gặp:**

-   Validation: Dữ liệu không hợp lệ
-   Business rule: Vi phạm quy tắc nghiệp vụ (ví dụ: tour đã hết chỗ)
-   System error: Lỗi hệ thống

**Format:**

```
**Luồng ngoại lệ E1: Tour đã hết chỗ**
- Bước 6a: Hệ thống kiểm tra số chỗ còn lại
- Bước 6b: Nếu hết chỗ, hiển thị thông báo "Tour đã hết chỗ"
- Bước 6c: Quay lại bước 5 để chọn tour khác

**Luồng ngoại lệ E2: Thông tin không hợp lệ**
- Bước 7a: Hệ thống kiểm tra định dạng email
- Bước 7b: Nếu email sai, hiển thị lỗi "Email không hợp lệ"
- Bước 7c: Yêu cầu nhập lại email
```

### 3. Ví dụ cụ thể - Chi tiết

#### **3.1. Ví dụ 1: Module Booking - Đặt tour trực tuyến**

```
**Tên Use Case**: Đặt tour trực tuyến
**Actor**: Khách hàng (User)
**Mô tả**: Khách hàng tìm kiếm, chọn và đặt tour qua website
**Điều kiện tiên quyết**:
- Khách hàng có kết nối internet
- Hệ thống đang hoạt động bình thường
- Có tour sẵn sàng để đặt

**Luồng chính**:
1. Khách hàng truy cập trang chủ website tour du lịch
2. Khách hàng tìm kiếm tour bằng cách:
   - Nhập từ khóa (ví dụ: "Đà Lạt") vào ô tìm kiếm, HOẶC
   - Chọn điểm đến từ menu, HOẶC
   - Dùng bộ lọc (giá, thời gian, loại tour)
3. Hệ thống hiển thị danh sách tour phù hợp
4. Khách hàng xem chi tiết tour (giá, lịch trình, đánh giá)
5. Khách hàng chọn tour muốn đặt và click "Đặt tour"
6. Khách hàng nhập thông tin:
   - Số lượng người tham gia
   - Ngày khởi hành mong muốn
   - Ghi chú đặc biệt (nếu có)
7. Hệ thống kiểm tra:
   - Số chỗ còn lại
   - Giá tour (có thể thay đổi theo mùa)
8. Hệ thống hiển thị tổng tiền và yêu cầu nhập thông tin cá nhân
9. Khách hàng nhập thông tin:
   - Họ và tên
   - Email
   - Số điện thoại
   - Địa chỉ (nếu cần)
10. Khách hàng chọn phương thức thanh toán:
    - Chuyển khoản ngân hàng, HOẶC
    - Thanh toán trực tuyến (thẻ), HOẶC
    - Thanh toán khi nhận tour
11. Khách hàng xác nhận thông tin và click "Xác nhận đặt tour"
12. Hệ thống:
    - Lưu thông tin booking vào database
    - Tạo mã đặt tour (Booking ID)
    - Gửi email xác nhận đến khách hàng
    - Hiển thị thông báo "Đặt tour thành công"
13. Khách hàng nhận được email xác nhận với mã đặt tour

**Luồng phụ**:

**A1: Khách hàng đã đăng nhập**
- Bước 9: Hệ thống tự động điền thông tin từ tài khoản
- Khách hàng chỉ cần kiểm tra và xác nhận

**A2: Khách hàng muốn thanh toán ngay**
- Bước 10: Khách hàng chọn "Thanh toán trực tuyến"
- Bước 10a: Hệ thống chuyển đến trang thanh toán
- Bước 10b: Khách hàng nhập thông tin thẻ
- Bước 10c: Hệ thống xử lý thanh toán
- Bước 12: Nếu thanh toán thành công, booking được xác nhận ngay

**Luồng ngoại lệ**:

**E1: Không tìm thấy tour**
- Bước 3: Nếu không có tour phù hợp
- Bước 3a: Hệ thống hiển thị "Không tìm thấy tour"
- Bước 3b: Khách hàng có thể thay đổi từ khóa tìm kiếm hoặc liên hệ hỗ trợ

**E2: Tour đã hết chỗ**
- Bước 7a: Hệ thống kiểm tra số chỗ còn lại
- Bước 7b: Nếu số người đặt > số chỗ còn lại
- Bước 7c: Hiển thị thông báo "Tour chỉ còn X chỗ, vui lòng điều chỉnh số lượng"
- Bước 7d: Khách hàng điều chỉnh số lượng hoặc chọn tour khác

**E3: Thông tin không hợp lệ**
- Bước 9a: Hệ thống validate thông tin
- Bước 9b: Nếu email không đúng định dạng → Hiển thị lỗi "Email không hợp lệ"
- Bước 9c: Nếu số điện thoại không đúng → Hiển thị lỗi "Số điện thoại không hợp lệ"
- Bước 9d: Khách hàng sửa lại thông tin

**E4: Thanh toán thất bại**
- Bước 10c: Nếu thanh toán không thành công
- Bước 10d: Hiển thị thông báo "Thanh toán thất bại, vui lòng thử lại"
- Bước 10e: Booking được lưu với trạng thái "Chờ thanh toán"

**Điều kiện kết thúc**:
- Booking được lưu vào database với trạng thái "Chờ xác nhận" hoặc "Đã thanh toán"
- Khách hàng nhận được email xác nhận
- Hệ thống cập nhật số chỗ còn lại của tour
```

#### **3.2. Ví dụ 2: Module Admin - Duyệt đơn đặt tour**

```
**Tên Use Case**: Duyệt đơn đặt tour
**Actor**: Quản trị viên (Admin)
**Mô tả**: Admin xem, kiểm tra và duyệt/từ chối các đơn đặt tour từ khách hàng
**Điều kiện tiên quyết**:
- Admin đã đăng nhập hệ thống
- Có quyền "Duyệt booking"
- Có đơn đặt tour chờ duyệt

**Luồng chính**:
1. Admin đăng nhập vào hệ thống quản trị
2. Admin click vào menu "Quản lý Booking"
3. Hệ thống hiển thị danh sách tất cả booking
4. Admin chọn tab "Chờ duyệt" để xem các đơn chờ duyệt
5. Hệ thống hiển thị danh sách đơn chờ duyệt với thông tin:
   - Mã đặt tour
   - Tên khách hàng
   - Tên tour
   - Ngày đặt
   - Tổng tiền
6. Admin click vào một đơn để xem chi tiết
7. Hệ thống hiển thị thông tin chi tiết:
   - Thông tin khách hàng (họ tên, email, SĐT)
   - Thông tin tour (tên, ngày đi, số người)
   - Thông tin thanh toán (phương thức, trạng thái)
   - Ghi chú (nếu có)
8. Admin kiểm tra và xác nhận:
   - Thông tin khách hàng có hợp lệ không
   - Tour còn chỗ không
   - Thanh toán đã hoàn tất chưa
9. Admin quyết định:
   - Click "Duyệt" nếu đơn hợp lệ, HOẶC
   - Click "Từ chối" nếu đơn không hợp lệ
10. Nếu Admin click "Duyệt":
    - Hệ thống cập nhật trạng thái booking: "Chờ duyệt" → "Đã duyệt"
    - Hệ thống gửi email xác nhận đến khách hàng
    - Hệ thống cập nhật số chỗ còn lại của tour
    - Hiển thị thông báo "Duyệt đơn thành công"
11. Nếu Admin click "Từ chối":
    - Hệ thống yêu cầu nhập lý do từ chối
    - Admin nhập lý do từ chối
    - Hệ thống cập nhật trạng thái: "Chờ duyệt" → "Đã từ chối"
    - Hệ thống gửi email thông báo từ chối đến khách hàng
    - Nếu đã thanh toán, hệ thống tự động hoàn tiền
    - Hiển thị thông báo "Từ chối đơn thành công"

**Luồng phụ**:

**A1: Duyệt nhiều đơn cùng lúc**
- Bước 6: Admin chọn nhiều đơn (checkbox)
- Bước 9: Admin click "Duyệt tất cả"
- Hệ thống duyệt tất cả đơn đã chọn

**A2: Tìm kiếm đơn**
- Bước 4: Admin có thể tìm kiếm đơn theo:
  - Mã đặt tour
  - Tên khách hàng
  - Tên tour
  - Ngày đặt

**Luồng ngoại lệ**:

**E1: Tour đã hết chỗ**
- Bước 8: Nếu tour đã hết chỗ sau khi khách đặt
- Bước 8a: Hệ thống hiển thị cảnh báo "Tour đã hết chỗ"
- Bước 9: Admin phải từ chối đơn hoặc liên hệ khách để đổi tour

**E2: Thanh toán chưa hoàn tất**
- Bước 8: Nếu thanh toán chưa hoàn tất
- Bước 8a: Hệ thống hiển thị cảnh báo "Chưa thanh toán"
- Bước 9: Admin có thể duyệt (nếu chấp nhận thanh toán sau) hoặc từ chối

**Điều kiện kết thúc**:
- Booking được cập nhật trạng thái mới
- Khách hàng nhận được email thông báo
- Số chỗ còn lại của tour được cập nhật (nếu duyệt)
```

### 4. Thực hành nhóm - Hướng dẫn chi tiết

#### **4.1. Quy trình thực hành**

**Bước 1: Xác định module của nhóm**

-   Nhóm thảo luận và xác nhận lại module đã chọn
-   Liệt kê sơ bộ các chức năng chính

**Bước 2: Liệt kê Actor**

-   Xác định ai sẽ sử dụng module này?
-   Ví dụ: Module Tour → Actor: User (xem tour), Admin (quản lý tour)

**Bước 3: Brainstorm Use Case**

-   Mỗi thành viên nghĩ và liệt kê Use Case
-   Sau đó nhóm thảo luận và chọn 5–10 Use Case quan trọng nhất
-   Ưu tiên các Use Case:
    -   Cốt lõi (phải có)
    -   Quan trọng (ảnh hưởng nhiều người dùng)
    -   Thường xuyên sử dụng

**Bước 4: Viết Use Case chi tiết**

-   Chia nhóm: Mỗi người viết 1–2 Use Case
-   Viết đầy đủ: Tên, Actor, Mô tả, Luồng chính, Luồng phụ, Luồng ngoại lệ

**Bước 5: Review và chỉnh sửa**

-   Nhóm đọc lại tất cả Use Case
-   Kiểm tra: Logic, đầy đủ, dễ hiểu
-   Chỉnh sửa nếu cần

#### **4.2. Checklist kiểm tra Use Case**

Trước khi hoàn thành, kiểm tra:

-   [ ] **Tên Use Case**: Rõ ràng, ngắn gọn, dùng động từ
-   [ ] **Actor**: Xác định đúng người sử dụng
-   [ ] **Mô tả**: Hiểu rõ mục đích của Use Case
-   [ ] **Luồng chính**:
    -   [ ] Đầy đủ các bước (5–10 bước)
    -   [ ] Logic, tuần tự
    -   [ ] Mỗi bước cụ thể, không chung chung
-   [ ] **Luồng phụ**: Có xét đến các trường hợp thay thế
-   [ ] **Luồng ngoại lệ**: Có xét đến lỗi và validation
-   [ ] **Dễ hiểu**: Người không chuyên kỹ thuật cũng hiểu được

## 🧠 Kiến thức trọng tâm / Giải thích

### Use Case là gì?

**Use Case** là một cách mô tả tương tác giữa người dùng (Actor) và hệ thống để đạt được một mục tiêu cụ thể.

**Đặc điểm:**

-   Mô tả hành vi của hệ thống (behavior)
-   Từ góc nhìn người dùng (user perspective)
-   Độc lập với công nghệ (technology independent)
-   Dễ hiểu cho cả người không chuyên kỹ thuật

### Actor trong Use Case

**Actor** là người hoặc hệ thống bên ngoài tương tác với hệ thống.

**Các loại Actor:**

1. **Primary Actor (Actor chính)**: Người nhận lợi ích trực tiếp

    - Ví dụ: Khách hàng đặt tour → Khách hàng là Primary Actor

2. **Secondary Actor (Actor phụ)**: Hỗ trợ hệ thống hoàn thành Use Case

    - Ví dụ: Hệ thống thanh toán, Email service

3. **Off-stage Actor (Actor ngoài sân khấu)**: Có liên quan nhưng không tương tác trực tiếp
    - Ví dụ: Ngân hàng (trong Use Case thanh toán)

**Cách xác định Actor:**

-   Ai sử dụng hệ thống?
-   Ai cung cấp thông tin?
-   Ai nhận kết quả?
-   Hệ thống nào tương tác?

### Phân loại Use Case

1. **Use Case chính (Primary/Base Use Case)**:

    - Luồng nghiệp vụ thông thường, hầu hết các trường hợp
    - Ví dụ: Đặt tour thành công

2. **Use Case phụ (Alternative Use Case)**:

    - Các trường hợp thay thế, không phải lỗi
    - Ví dụ: Đặt tour khi đã đăng nhập (không cần nhập thông tin)

3. **Use Case ngoại lệ (Exception Use Case)**:

    - Xử lý lỗi, validation, business rule
    - Ví dụ: Tour hết chỗ, thông tin không hợp lệ

4. **Use Case mở rộng (Extended Use Case)**:
    - Mở rộng từ Use Case khác
    - Ví dụ: "Gửi email xác nhận" mở rộng từ "Đặt tour"

### Mối quan hệ giữa Use Case

**1. Include (Bao gồm)**

-   Use Case A **include** Use Case B
-   Nghĩa là: Khi thực hiện A, B **luôn luôn** được thực hiện
-   Ví dụ: "Đặt tour" **include** "Xác thực người dùng"

**2. Extend (Mở rộng)**

-   Use Case A **extend** Use Case B
-   Nghĩa là: A là phần mở rộng của B, có thể có hoặc không
-   Ví dụ: "Gửi email quảng cáo" **extend** "Đặt tour" (chỉ gửi nếu khách đồng ý)

**3. Generalization (Kế thừa)**

-   Use Case con kế thừa từ Use Case cha
-   Ví dụ: "Thanh toán bằng thẻ" và "Thanh toán chuyển khoản" kế thừa từ "Thanh toán"

### Gợi ý Use Case cho các module

#### Module Tour & Lịch trình

**Cho User:**

-   Xem danh sách tour
-   Tìm kiếm tour (theo từ khóa, điểm đến, giá)
-   Xem chi tiết tour
-   Lọc tour (theo giá, ngày, điểm đến)
-   Xem đánh giá tour

**Cho Admin:**

-   Thêm tour mới
-   Sửa thông tin tour
-   Xóa tour
-   Quản lý lịch trình tour (thêm/sửa/xóa lịch trình)
-   Cập nhật giá tour
-   Cập nhật số chỗ còn lại

#### Module Booking & Thanh toán

**Cho User:**

-   Đặt tour trực tuyến
-   Xem lịch sử đặt tour
-   Hủy đơn đặt tour
-   Thanh toán đơn đặt tour
-   Tải hóa đơn

**Cho Admin:**

-   Duyệt đơn đặt tour
-   Từ chối đơn đặt tour
-   Xem danh sách booking
-   Tìm kiếm booking
-   Thống kê booking theo tháng/năm

#### Module Khách hàng & Đánh giá

**Cho User:**

-   Đăng ký tài khoản
-   Đăng nhập
-   Đăng xuất
-   Xem thông tin cá nhân
-   Cập nhật thông tin cá nhân
-   Đổi mật khẩu
-   Đánh giá tour (sau khi đi tour)
-   Xem đánh giá tour
-   Báo cáo đánh giá không phù hợp

### Mẹo viết Use Case tốt

1. **Bắt đầu từ Actor**: Luôn nghĩ từ góc nhìn người dùng
2. **Mỗi bước là một hành động**: Không quá chung chung, không quá chi tiết kỹ thuật
3. **Ngôn ngữ đơn giản**: Tránh thuật ngữ phức tạp, dùng ngôn ngữ hàng ngày
4. **Kiểm tra logic**: Đọc lại để đảm bảo logic hợp lý
5. **Tham khảo thực tế**: Nghĩ đến các website tour du lịch thực tế
6. **Nhờ người khác đọc**: Người không biết dự án cũng hiểu được

---

## 📘 Bài tập nhóm

### Bài tập 1: Liệt kê Use Case cho module

#### **Yêu cầu:**

Tạo file **Word hoặc Markdown** với nội dung:

1. **Thông tin module**

    - Tên module
    - Tên nhóm
    - Danh sách thành viên

2. **Danh sách Actor**

    - Liệt kê tất cả Actor sẽ sử dụng module
    - Mô tả ngắn gọn từng Actor

3. **Danh sách Use Case** (tối thiểu 5 Use Case, khuyến khích 7–10)

    **Format bảng:**

    | STT | Tên Use Case        | Actor | Mô tả ngắn                      | Ưu tiên |
    | --- | ------------------- | ----- | ------------------------------- | ------- |
    | 1   | Đặt tour trực tuyến | User  | Khách hàng đặt tour qua website | Cao     |
    | 2   | ...                 | ...   | ...                             | ...     |

    **Ưu tiên:**

    - Cao: Phải có, ảnh hưởng nhiều người dùng
    - Trung bình: Quan trọng nhưng không cấp thiết
    - Thấp: Có thể làm sau

### Bài tập 2: Viết Use Case chi tiết

#### **Yêu cầu:**

Chọn **3 Use Case quan trọng nhất** và viết chi tiết theo format đầy đủ:

**Format:**

```markdown
## Use Case [STT]: [Tên Use Case]

**Actor**: [Tên Actor]
**Mô tả**: [Mô tả ngắn gọn mục đích]
**Điều kiện tiên quyết**:

-   [Điều kiện 1]
-   [Điều kiện 2]

**Luồng chính**:

1. [Bước 1 - Mô tả cụ thể]
2. [Bước 2 - Mô tả cụ thể]
3. ...
4. [Bước cuối]

**Luồng phụ**:

**A1: [Tên luồng phụ]**

-   Bước X: [Mô tả thay đổi]

**Luồng ngoại lệ**:

**E1: [Tên lỗi]**

-   Bước Xa: [Mô tả xử lý lỗi]
-   Bước Xb: [Bước tiếp theo]

**Điều kiện kết thúc**:

-   [Kết quả 1]
-   [Kết quả 2]
```

#### **Ví dụ hoàn chỉnh:**

```markdown
## Use Case 1: Đặt tour trực tuyến

**Actor**: Khách hàng (User)
**Mô tả**: Khách hàng tìm kiếm, chọn và đặt tour qua website
**Điều kiện tiên quyết**:

-   Khách hàng có kết nối internet
-   Hệ thống đang hoạt động bình thường
-   Có tour sẵn sàng để đặt

**Luồng chính**:

1. Khách hàng truy cập trang chủ website tour du lịch
2. Khách hàng tìm kiếm tour bằng cách nhập từ khóa "Đà Lạt" vào ô tìm kiếm
3. Hệ thống hiển thị danh sách tour Đà Lạt với thông tin: tên tour, giá, thời gian, hình ảnh
4. Khách hàng click vào tour "Đà Lạt 3 ngày 2 đêm" để xem chi tiết
5. Hệ thống hiển thị trang chi tiết tour bao gồm: mô tả, lịch trình, giá, đánh giá
6. Khách hàng click nút "Đặt tour ngay"
7. Hệ thống hiển thị form đặt tour với các trường:
    - Số lượng người tham gia
    - Ngày khởi hành mong muốn
    - Ghi chú đặc biệt (tùy chọn)
8. Khách hàng nhập:
    - Số lượng: 2 người
    - Ngày khởi hành: 15/12/2024
    - Ghi chú: "Phòng đôi"
9. Khách hàng click "Tiếp tục"
10. Hệ thống kiểm tra:
    - Số chỗ còn lại của tour
    - Giá tour theo ngày đã chọn
11. Hệ thống hiển thị tổng tiền và yêu cầu nhập thông tin cá nhân:
    - Họ và tên
    - Email
    - Số điện thoại
    - Địa chỉ liên hệ
12. Khách hàng nhập đầy đủ thông tin
13. Khách hàng click "Tiếp tục"
14. Hệ thống validate thông tin (email, SĐT)
15. Hệ thống hiển thị trang chọn phương thức thanh toán:
    - Chuyển khoản ngân hàng
    - Thanh toán trực tuyến (thẻ)
    - Thanh toán khi nhận tour
16. Khách hàng chọn "Chuyển khoản ngân hàng"
17. Khách hàng xem lại toàn bộ thông tin và click "Xác nhận đặt tour"
18. Hệ thống:
    - Lưu thông tin booking vào database
    - Tạo mã đặt tour (ví dụ: BK20241215001)
    - Gửi email xác nhận đến khách hàng
    - Hiển thị trang xác nhận với mã đặt tour
19. Khách hàng nhận được email xác nhận

**Luồng phụ**:

**A1: Khách hàng đã đăng nhập**

-   Bước 12: Hệ thống tự động điền thông tin từ tài khoản (họ tên, email, SĐT, địa chỉ)
-   Khách hàng chỉ cần kiểm tra và xác nhận

**A2: Khách hàng muốn thanh toán ngay**

-   Bước 16: Khách hàng chọn "Thanh toán trực tuyến (thẻ)"
-   Bước 16a: Hệ thống chuyển đến trang thanh toán
-   Bước 16b: Khách hàng nhập thông tin thẻ (số thẻ, tên chủ thẻ, ngày hết hạn, CVV)
-   Bước 16c: Khách hàng click "Thanh toán"
-   Bước 16d: Hệ thống xử lý thanh toán qua cổng thanh toán
-   Bước 18: Nếu thanh toán thành công, booking được cập nhật trạng thái "Đã thanh toán" ngay

**A3: Khách hàng muốn đổi tour**

-   Bước 4: Sau khi xem chi tiết, khách hàng click "Xem tour khác"
-   Quay lại bước 3 để chọn tour khác

**Luồng ngoại lệ**:

**E1: Không tìm thấy tour**

-   Bước 3: Nếu không có tour nào phù hợp với từ khóa
-   Bước 3a: Hệ thống hiển thị thông báo "Không tìm thấy tour phù hợp"
-   Bước 3b: Hệ thống gợi ý các tour khác hoặc từ khóa tìm kiếm khác
-   Khách hàng có thể thay đổi từ khóa hoặc liên hệ hỗ trợ

**E2: Tour đã hết chỗ**

-   Bước 10: Hệ thống kiểm tra số chỗ còn lại
-   Bước 10a: Nếu số chỗ còn lại < số người khách muốn đặt
-   Bước 10b: Hệ thống hiển thị thông báo "Tour chỉ còn X chỗ, vui lòng điều chỉnh số lượng"
-   Bước 10c: Khách hàng có thể:
    -   Giảm số lượng người
    -   Chọn ngày khác (nếu có)
    -   Chọn tour khác

**E3: Thông tin không hợp lệ**

-   Bước 14: Hệ thống validate thông tin
-   Bước 14a: Nếu email không đúng định dạng (ví dụ: thiếu @)
    -   Hiển thị lỗi "Email không hợp lệ" bên dưới ô email
    -   Yêu cầu nhập lại
-   Bước 14b: Nếu số điện thoại không đúng định dạng (ví dụ: < 10 số)
    -   Hiển thị lỗi "Số điện thoại không hợp lệ" bên dưới ô SĐT
    -   Yêu cầu nhập lại
-   Bước 14c: Nếu thiếu trường bắt buộc
    -   Hiển thị lỗi "Vui lòng điền đầy đủ thông tin"
-   Khách hàng sửa lại và click "Tiếp tục" lại

**E4: Thanh toán thất bại**

-   Bước 16d: Nếu thanh toán không thành công (thẻ hết hạn, không đủ tiền, v.v.)
-   Bước 16e: Hệ thống hiển thị thông báo "Thanh toán thất bại: [Lý do], vui lòng thử lại hoặc chọn phương thức khác"
-   Khách hàng có thể:
    -   Thử lại thanh toán
    -   Chọn phương thức thanh toán khác
-   Booking vẫn được lưu với trạng thái "Chờ thanh toán"

**E5: Lỗi hệ thống**

-   Bất kỳ bước nào: Nếu hệ thống gặp lỗi
-   Hệ thống hiển thị thông báo "Đã xảy ra lỗi, vui lòng thử lại sau"
-   Booking không được lưu
-   Khách hàng liên hệ hỗ trợ hoặc thử lại sau

**Điều kiện kết thúc**:

-   Booking được lưu vào database với:
    -   Mã đặt tour duy nhất
    -   Trạng thái: "Chờ xác nhận" (nếu chưa thanh toán) hoặc "Đã thanh toán" (nếu thanh toán ngay)
    -   Thông tin khách hàng và tour đầy đủ
-   Khách hàng nhận được email xác nhận với mã đặt tour
-   Hệ thống cập nhật số chỗ còn lại của tour (nếu có)
-   Khách hàng có thể xem lại booking bằng mã đặt tour
```

### Bài tập 3: Review và cải thiện (20 phút)

1. **Đổi Use Case cho nhóm khác review** (10 phút)

    - Nhóm A review Use Case của Nhóm B
    - Nhóm B review Use Case của Nhóm A
    - Ghi chú: Use Case có dễ hiểu không? Logic có đúng không? Còn thiếu gì?

2. **Chỉnh sửa theo feedback** (10 phút)
    - Đọc lại feedback
    - Chỉnh sửa Use Case
    - Hoàn thiện file

### Deadline

Nộp trước buổi 3 (gửi qua email hoặc LMS)

**Format nộp:**

-   File Word: `[Tên nhóm]_UseCase_Module_[Tên module].docx`
-   Hoặc Markdown: `[Tên nhóm]_UseCase_Module_[Tên module].md`

---

## 📦 Kết quả mong đợi sau buổi học

-   ✅ Hiểu được khái niệm Use Case và vai trò trong phát triển phần mềm
-   ✅ Biết cách xác định Actor và Use Case
-   ✅ Có danh sách Use Case đầy đủ cho module (≥5 Use Case)
-   ✅ Viết được 3 Use Case chi tiết với đầy đủ luồng chính, phụ và ngoại lệ
-   ✅ Biết cách mô tả luồng nghiệp vụ chi tiết, logic
-   ✅ Sẵn sàng để viết Spec ở buổi tiếp theo (dựa trên Use Case)

---

## 💬 Gợi ý giảng viên

### ⏱ Thời lượng gợi ý

-   Giới thiệu Use Case: 20 phút
-   Hướng dẫn viết chi tiết: 30 phút
-   Ví dụ cụ thể: 25 phút
-   Thực hành nhóm: 25 phút
-   Tổng: ~100 phút (có thể kéo dài thêm 10 phút nếu cần)

### 💡 Tips hướng dẫn

1. **Khuyến khích viết chi tiết**:

    - Use Case càng chi tiết, viết Spec càng dễ
    - Nhắc nhở: "Nếu bạn không thể tưởng tượng được bước tiếp theo, nghĩa là Use Case chưa đủ chi tiết"

2. **Nhắc về Actor**:

    - Mỗi Use Case cần xác định rõ Actor là ai
    - Một Use Case có thể có nhiều Actor (nhưng có 1 Primary Actor)

3. **Xử lý ngoại lệ**:

    - Nhắc nhở các nhóm nghĩ đến các trường hợp lỗi:
        - Validation (email sai, SĐT sai)
        - Business rule (tour hết chỗ, không đủ tiền)
        - System error (lỗi kết nối, lỗi database)

4. **Tích hợp**:

    - Gợi ý các nhóm nghĩ đến Use Case tích hợp với module khác
    - Ví dụ: Module Booking cần tích hợp với Module Tour (lấy thông tin tour) và Module User (lấy thông tin user đăng nhập)

5. **Tham khảo thực tế**:

    - Khuyến khích sinh viên tham khảo các website tour du lịch thực tế
    - Gợi ý: Agoda, Booking.com, Traveloka

6. **Kiểm tra logic**:
    - Đọc lại Use Case để đảm bảo logic hợp lý
    - Thử tưởng tượng: "Nếu mình là người dùng, mình sẽ làm gì tiếp theo?"

### 🔍 Câu hỏi thường gặp

-   **Q: "Use Case và User Story khác nhau như thế nào?"**

    -   A:
    -   **Use Case**: Tập trung vào luồng nghiệp vụ chi tiết, mô tả từng bước tương tác giữa Actor và hệ thống. Format dài, chi tiết.
    -   **User Story**: Tập trung vào giá trị đem lại cho người dùng. Format ngắn gọn: "Là [Actor], tôi muốn [mục tiêu] để [lợi ích]".
    -   Ở đây dùng Use Case để phân tích kỹ hơn, làm cơ sở để viết Spec.

-   **Q: "Nhóm em nên có bao nhiêu Use Case?"**

    -   A:
    -   **Tối thiểu**: 5 Use Case (để đạt yêu cầu)
    -   **Khuyến khích**: 7–10 Use Case để bao quát đầy đủ chức năng
    -   **Lưu ý**: Chất lượng quan trọng hơn số lượng. 5 Use Case chi tiết tốt hơn 10 Use Case sơ sài.

-   **Q: "Có cần vẽ Use Case Diagram không?"**

    -   A: Không bắt buộc, nhưng nếu nhóm muốn vẽ thì rất tốt. Use Case Diagram giúp:
    -   Tổng quan về các Use Case
    -   Mối quan hệ giữa các Use Case
    -   Actor và Use Case nào liên quan
    -   Trọng tâm của buổi này là Use Case **text** (mô tả chi tiết), nhưng có diagram thì tốt hơn.

-   **Q: "Use Case có cần quá chi tiết không?"**

    -   A:
    -   **Cần chi tiết vừa phải**: Đủ để hiểu rõ luồng nghiệp vụ, nhưng không cần quá chi tiết kỹ thuật (ví dụ: không cần mô tả câu lệnh SQL).
    -   **Nguyên tắc**: Người không biết dự án cũng hiểu được Use Case.
    -   **Kiểm tra**: Đọc lại Use Case, nếu còn thắc mắc "Rồi sao nữa?" nghĩa là chưa đủ chi tiết.

-   **Q: "Nếu Use Case của nhóm em có vấn đề, có thể sửa sau không?"**

    -   A: Có thể, nhưng tốt nhất là suy nghĩ kỹ và viết đúng ngay từ đầu. Use Case là cơ sở để viết Spec và thiết kế ERD, nếu Use Case sai sẽ ảnh hưởng đến các bước sau.

-   **Q: "Một Use Case có thể có nhiều Actor không?"**

    -   A: Có, nhưng thường có 1 **Primary Actor** (người nhận lợi ích chính) và có thể có các **Secondary Actor** (hỗ trợ). Ví dụ: "Đặt tour" có Primary Actor là Khách hàng, Secondary Actor có thể là Hệ thống thanh toán, Email service.

### 📝 Checklist đánh giá Use Case

Giảng viên có thể dùng checklist này khi review Use Case:

**Tổng quan:**

-   [ ] Có đủ số lượng Use Case (≥5)
-   [ ] Use Case bao phủ đầy đủ chức năng module
-   [ ] Ưu tiên đúng (Use Case quan trọng được viết trước)

**Mỗi Use Case:**

-   [ ] Tên rõ ràng, ngắn gọn
-   [ ] Actor xác định đúng
-   [ ] Mô tả dễ hiểu
-   [ ] Luồng chính đầy đủ (5–10 bước)
-   [ ] Luồng chính logic, tuần tự
-   [ ] Có luồng phụ (nếu cần)
-   [ ] Có luồng ngoại lệ (validation, lỗi)
-   [ ] Dễ hiểu, không cần kiến thức kỹ thuật

**Format:**

-   [ ] Format nhất quán
-   [ ] Không có lỗi chính tả
-   [ ] Dễ đọc, có cấu trúc rõ ràng

---

**📌 Lưu ý:** Buổi tiếp theo sẽ học cách viết Project Specification dựa trên Use Case. Các nhóm nhớ hoàn thành Use Case đầy đủ và chi tiết để dùng làm tài liệu tham khảo khi viết Spec!
