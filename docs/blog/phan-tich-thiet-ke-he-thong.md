# Phân Tích Và Thiết Kế Hệ Thống Quản Lý Sách Cho Thư Viện

## 1. Tiếp Nhận Yêu Cầu Dự Án

### Mục Tiêu
Xây dựng hệ thống quản lý sách cho một thư viện nhỏ, bao gồm các chức năng:
- Quản lý đầu sách.
- Quản lý người dùng.
- Ghi nhận việc mượn/trả sách.
- Tìm kiếm sách.

---

## 2. Phân Tích Yêu Cầu

### Chức Năng Chính
- **Quản lý đầu sách**: Thêm, sửa, xóa thông tin sách.
- **Quản lý người dùng**: Phân quyền admin và user.
- **Ghi nhận việc mượn sách**: Lưu thông tin người mượn, sách mượn, ngày mượn/trả.
- **Tìm kiếm sách**: Theo tên, thể loại, hoặc tác giả.

### Phân Quyền
- **Admin**: Quản lý sách, xem tất cả lịch sử mượn sách, cập nhật trạng thái trả sách.
- **User**: Tìm kiếm sách, xem lịch sử mượn sách của mình, tạo phiếu mượn sách.

---

## 3. Thiết Kế Cơ Sở Dữ Liệu

### Schema Đề Xuất

#### Book
```json
{
  "_id": "ObjectId('BOOK001')",
  "title": "Lập Trình Node.js",
  "description": "Hướng dẫn lập trình Node.js từ cơ bản đến nâng cao.",
  "author": "Nguyễn Văn A",
  "publisher": "NXB Giáo Dục",
  "year": 2023,
  "category": "Công nghệ thông tin"
}
```

#### User
```json
{
  "_id": "ObjectId('USER001')",
  "name": "Nguyễn Văn B",
  "email": "nguyenvanb@example.com",
  "password": "hashed_password",
  "role": "user"
}
```

#### BorrowRecord
```json
{
  "_id": "ObjectId('BORROW001')",
  "userId": "ObjectId('USER001')",
  "bookId": "ObjectId('BOOK001')",
  "borrowDate": "2023-10-01",
  "returnDate": "2023-10-15",
  "isReturned": false
}
```

---

## 4. Thiết Kế API

### Các Endpoint Chính

#### Quản Lý Sách
- **GET /books**: Xem danh sách sách.
- **POST /books**: Thêm sách (admin).
- **PUT /books/:id**: Sửa thông tin sách (admin).
- **DELETE /books/:id**: Xóa sách (admin).

#### Quản Lý Người Dùng
- **POST /auth/register**: Đăng ký tài khoản.
- **POST /auth/login**: Đăng nhập.
- **GET /users/me**: Xem thông tin cá nhân.
- **PUT /users/me**: Cập nhật thông tin cá nhân.

#### Quản Lý Mượn Sách
- **POST /borrow**: Tạo phiếu mượn sách (user).
- **GET /borrow/history**: Xem lịch sử mượn sách của mình (user).
- **GET /borrow/all**: Xem tất cả lịch sử mượn sách (admin).
- **PUT /borrow/:id**: Cập nhật trạng thái trả sách (admin).

#### Tìm Kiếm Sách
- **GET /books/search**: Tìm kiếm sách theo tên, thể loại, hoặc tác giả.

---

## 5. Lập Kế Hoạch Phát Triển

### Giai Đoạn 1: Xây Dựng Cơ Bản
- Thiết kế cơ sở dữ liệu.
- Xây dựng các API cơ bản.
- Đảm bảo chức năng đăng ký, đăng nhập, và phân quyền.

### Giai Đoạn 2: Hoàn Thiện Chức Năng
- Thêm chức năng tìm kiếm sách.
- Hoàn thiện quản lý mượn/trả sách.

### Giai Đoạn 3: Tối Ưu Hóa
- Cải thiện hiệu suất truy vấn.
- Thêm tính năng báo cáo và thống kê.

---

## 6. Lưu Ý Khi Triển Khai

- **Bảo mật**: Hash mật khẩu người dùng, sử dụng JWT cho xác thực.
- **Hiệu suất**: Sử dụng index cho các trường thường xuyên tìm kiếm (ví dụ: tên sách, tác giả).
- **Kiểm thử**: Viết test cho các API quan trọng.

---

## 7. Kết Luận

Hệ thống quản lý sách cho thư viện nhỏ cần được thiết kế đơn giản nhưng hiệu quả, đáp ứng đầy đủ các yêu cầu chức năng và phân quyền. Việc phân tích kỹ lưỡng và lập kế hoạch rõ ràng sẽ giúp dự án triển khai thành công.
