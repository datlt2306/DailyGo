# 🧭 Hướng dẫn chung cho dự án phần mềm MVP (dành cho sinh viên)

## 🎯 Mục tiêu
Thiết lập một chuẩn chung giúp sinh viên triển khai dự án MVP đúng hướng, có tổ chức, dễ teamwork và dễ mở rộng sau này.

---

## I. 📌 Giai đoạn khởi động

### 1. Hiểu rõ yêu cầu bài toán
Lấy ví dụ cụ thể: **Hệ thống đặt vé xem phim**

#### Mô tả:
Xây dựng hệ thống API cho phép người dùng đặt vé xem phim tại rạp. Quản lý phim, suất chiếu, chỗ ngồi, người đặt.

#### Chức năng chính:
- Quản lý phim (tên, mô tả, thời lượng, thể loại, đạo diễn, diễn viên)
- Quản lý suất chiếu (phim nào, chiếu lúc mấy giờ, ở phòng nào)
- Đặt vé (chọn suất chiếu, chọn ghế)
- Đăng ký / đăng nhập
- Tìm kiếm phim theo tên, thể loại, thời gian

### 2. Phân tích actor
| Actor | Vai trò |
|--------|--------|
| Guest | Người chưa đăng nhập, chỉ xem thông tin |
| User | Người dùng có tài khoản, đặt vé, xem lịch sử |
| Admin | Quản trị viên, quản lý phim và suất chiếu |

### 3. Xây dựng bảng phân quyền chức năng
| Chức năng | Guest | User | Admin |
|----------|:-----:|:----:|:-----:|
| Đăng ký / Đăng nhập | ✅ | ✅ | ✅ |
| Xem danh sách phim | ✅ | ✅ | ✅ |
| Thêm / sửa / xóa phim | ❌ | ❌ | ✅ |
| Quản lý suất chiếu | ❌ | ❌ | ✅ |
| Đặt vé xem phim | ❌ | ✅ | ❌ |
| Hủy / Cập nhật vé đã đặt | ❌ | ✅ | ❌ |
| Xem lịch sử đặt vé | ❌ | ✅ | ❌ |
| Xem tất cả vé trong hệ thống | ❌ | ❌ | ✅ |
| Tìm kiếm phim theo tên, thể loại, thời gian | ✅ | ✅ | ✅ |
| Cập nhật thông tin cá nhân | ❌ | ✅ | ✅ |

---

## II. 🏗️ Thiết kế hệ thống

### 1. Cấu trúc schema gợi ý (MongoDB style)
```js
User {
  name: String,
  email: String,
  password: String,
  role: 'user' | 'admin'
}

Movie {
  title: String,
  description: String,
  duration: Number,
  genre: String,
  director: String,
  cast: [String]
}

Showtime {
  movieId: ObjectId,
  room: String,
  startTime: Date
}

Booking {
  userId: ObjectId,
  showtimeId: ObjectId,
  seats: [String],
  status: 'booked' | 'cancelled'
}
```

---

## III. 🔐 Xác thực & Phân quyền

### 1. Xác thực
- Sử dụng JWT
- Sau khi đăng nhập, server trả về access token chứa thông tin userId, role
- Mỗi request protected cần gửi kèm token qua `Authorization: Bearer <token>`

### 2. Middleware
```js
const authMiddleware = (req, res, next) => {
  // Kiểm tra token & gán req.user
};

const roleMiddleware = (roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) return res.status(403).send('Forbidden');
    next();
  }
};
```

### 3. Phân quyền API mẫu
| API | Guest | User | Admin |
|-----|:-----:|:----:|:-----:|
| POST /auth/login | ✅ | ✅ | ✅ |
| GET /movies | ✅ | ✅ | ✅ |
| POST /movies | ❌ | ❌ | ✅ |
| GET /showtimes | ✅ | ✅ | ✅ |
| POST /bookings | ❌ | ✅ | ❌ |
| GET /bookings/me | ❌ | ✅ | ❌ |
| GET /admin/bookings | ❌ | ❌ | ✅ |

---

## IV. 📁 Cấu trúc thư mục Backend (Node.js - Express)
```
├── controllers/
├── models/
├── routes/
├── middlewares/
├── services/
├── utils/
├── config/
├── app.js
├── .env
```

---

## V. 🧪 Kiểm thử & Tài liệu

### 1. Sử dụng Postman để kiểm thử
- Test từng API theo vai trò
- Kiểm tra JWT, dữ liệu hợp lệ, lỗi thiếu dữ liệu

### 2. Tài liệu cần có
- `README.md`: mô tả dự án, cách setup, account mẫu
- Swagger / Postman Collection: mô tả API
- ERD: sơ đồ database bằng draw.io/dbdiagram.io

---

## VI. 🧹 Quy ước nhóm
- Commit theo chuẩn `feat/fix/chore`
- Viết mã rõ ràng, dùng ESLint nếu có
- Tổ chức họp nhóm đầu mỗi sprint, phân task qua Trello/ClickUp

---

## VII. 🏁 Kết thúc MVP
- ✅ Có thể đăng ký, đăng nhập, đặt vé thành công
- ✅ Có thể xem danh sách phim và suất chiếu
- ✅ Admin có thể quản lý phim và suất chiếu
- ✅ Có tài liệu API, ERD, README
- ✅ Phân quyền rõ ràng giữa User/Admin