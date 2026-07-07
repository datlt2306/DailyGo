# Project Cuối Khóa: Website Quản lý Tour Du Lịch

## 🎯 Mục tiêu dự án

Xây dựng một ứng dụng web hoàn chỉnh để quản lý tour du lịch với đầy đủ chức năng **CRUD** (Create, Read, Update, Delete), kết nối API, và có giao diện đẹp, responsive.

## 📋 Yêu cầu chức năng

### 1. Quản lý Tour (30 điểm)

#### Màn hình Danh sách Tour
- ✅ Hiển thị tất cả tours dạng grid/list
- ✅ Hiển thị: tên, ảnh, giá, điểm đến, thời gian
- ✅ Tính năng search theo tên tour
- ✅ Tính năng filter theo điểm đến
- ✅ Pagination (tùy chọn)

#### Màn hình Chi tiết Tour
- ✅ Hiển thị đầy đủ thông tin tour
- ✅ Ảnh lớn, mô tả, lịch trình
- ✅ Giá, số chỗ còn lại
- ✅ Nút "Đặt tour"

#### CRUD Tour
- ✅ **Create**: Form thêm tour mới
- ✅ **Update**: Form sửa tour
- ✅ **Delete**: Xóa tour với confirm
- ✅ Validation dữ liệu đầu vào

### 2. Quản lý Điểm đến (20 điểm)

#### Danh sách Destination
- ✅ Hiển thị tất cả điểm đến
- ✅ Icon/ảnh đại diện
- ✅ Tên, mô tả

#### CRUD Destination
- ✅ Thêm điểm đến mới
- ✅ Xóa điểm đến
- ✅ Filter tour theo điểm đến

### 3. Hệ thống Đặt Tour (20 điểm)

#### Giả lập Booking
- ✅ Form đặt tour (Tên, SĐT, Email, số người)
- ✅ Validate thông tin
- ✅ Lưu booking vào localStorage/API
- ✅ Hiển thị booking đã đặt

#### Quản lý Booking
- ✅ Danh sách bookings
- ✅ Xem chi tiết booking
- ✅ Xóa booking

### 4. Giao diện & Responsive (20 điểm)

- ✅ **UI/UX**: Giao diện đẹp, hiện đại
- ✅ **Responsive**: Hoạt động tốt trên mobile, tablet, desktop
- ✅ **Loading**: Hiển thị loading state
- ✅ **Empty states**: Xử lý khi không có dữ liệu
- ✅ **Error handling**: Hiển thị error message

### 5. Kỹ thuật & Code Quality (10 điểm)

- ✅ **Component structure**: Tổ chức rõ ràng
- ✅ **Code quality**: Clean code, có comment
- ✅ **Git**: Commit message rõ ràng
- ✅ **Performance**: Tối ưu render

---

## 📁 Cấu trúc dự án

### Thư mục gợi ý

```
tour-management-app/
├── public/
│   ├── images/
│   └── data/
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── styles/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Input.jsx
│   │   │   └── Loading.jsx
│   │   ├── tour/
│   │   │   ├── TourCard.jsx
│   │   │   ├── TourList.jsx
│   │   │   └── TourForm.jsx
│   │   ├── destination/
│   │   │   ├── DestinationCard.jsx
│   │   │   └── DestinationList.jsx
│   │   └── booking/
│   │       ├── BookingForm.jsx
│   │       └── BookingList.jsx
│   ├── context/
│   │   ├── TourContext.jsx
│   │   └── BookingContext.jsx
│   ├── hooks/
│   │   ├── useTours.js
│   │   └── useFetch.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Tours.jsx
│   │   ├── TourDetail.jsx
│   │   ├── Destinations.jsx
│   │   └── Bookings.jsx
│   ├── services/
│   │   └── api.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
└── README.md
```

---

## 🗄️ Dữ liệu mẫu (JSON-Server)

### File `db.json`

```json
{
  "tours": [
    {
      "id": 1,
      "name": "Hà Nội - Sapa 3N2D",
      "destination": "Sapa",
      "duration": "3 ngày 2 đêm",
      "price": 2500000,
      "image": "https://picsum.photos/400/300?random=1",
      "description": "Khám phá Sapa với những ruộng bậc thang tuyệt đẹp...",
      "itinerary": [
        "Ngày 1: Khởi hành từ Hà Nội",
        "Ngày 2: Trekking Fansipan",
        "Ngày 3: Tham quan làng bản"
      ],
      "available": 15
    },
    {
      "id": 2,
      "name": "Hạ Long - Cát Bà 2N1D",
      "destination": "Hạ Long",
      "duration": "2 ngày 1 đêm",
      "price": 1800000,
      "image": "https://picsum.photos/400/300?random=2",
      "description": "Du thuyền vịnh Hạ Long...",
      "itinerary": [
        "Ngày 1: Tham quan vịnh",
        "Ngày 2: Đảo Cát Bà"
      ],
      "available": 20
    }
  ],
  "destinations": [
    {
      "id": 1,
      "name": "Sapa",
      "icon": "🏔️",
      "description": "Thiên đường núi rừng Tây Bắc"
    },
    {
      "id": 2,
      "name": "Hạ Long",
      "icon": "🌊",
      "description": "Kỳ quan thiên nhiên thế giới"
    },
    {
      "id": 3,
      "name": "Đà Lạt",
      "icon": "🌺",
      "description": "Thành phố ngàn hoa"
    },
    {
      "id": 4,
      "name": "Phú Quốc",
      "icon": "🏖️",
      "description": "Đảo ngọc phương Nam"
    }
  ],
  "bookings": []
}
```

---

## 🎨 Giao diện Mockup

### Trang chủ (Home)

```
┌─────────────────────────────────────────────────┐
│  🏠 Home  📋 Tours  🗺️ Destinations  🎫 Bookings│
├─────────────────────────────────────────────────┤
│                                                 │
│         ✈️ TOUR MANAGEMENT SYSTEM              │
│                                                 │
│  [Danh sách tours nổi bật (grid 3 cột)]        │
│  ┌─────┐ ┌─────┐ ┌─────┐                       │
│  │IMG  │ │IMG  │ │IMG  │                       │
│  │TOUR1│ │TOUR2│ │TOUR3│                       │
│  └─────┘ └─────┘ └─────┘                       │
│                                                 │
└─────────────────────────────────────────────────┘
```

### Trang Danh sách Tour

```
┌─────────────────────────────────────────────────┐
│  🏠 Home  📋 Tours  🗺️ Destinations  🎫 Bookings│
├─────────────────────────────────────────────────┤
│  All Tours                    [Search...] 🔍    │
│                                                 │
│  Filter by:                                    │
│  [🏔️ Sapa] [🌊 Hạ Long] [🌺 Đà Lạt] [🏖️ P.Qốc]│
│                                                 │
│  ┌─────────────────────┐  ┌──────────────────┐│
│  │ [IMG]               │  │ [IMG]            ││
│  │ Hà Nội - Sapa 3N2D  │  │ Hạ Long - Cát Bà ││
│  │ 🏔️ Sapa            │  │ 🌊 Hạ Long       ││
│  │ ⏰ 3 ngày 2 đêm     │  │ ⏰ 2 ngày 1 đêm  ││
│  │ 💰 2,500,000 đ      │  │ 💰 1,800,000 đ   ││
│  │ [View Details]      │  │ [View Details]   ││
│  └─────────────────────┘  └──────────────────┘│
└─────────────────────────────────────────────────┘
```

---

## 🛠️ Công nghệ sử dụng

### Frontend

- ✅ **React 18** + **Vite**
- ✅ **React Router v6**
- ✅ **Axios**
- ✅ **TailwindCSS** (hoặc CSS Modules)
- ✅ **Context API**

### Backend

- ✅ **JSON-Server**
- ✅ **RESTful API**

### Tools

- ✅ **Git** + **GitHub**
- ✅ **VS Code**
- ✅ **Chrome DevTools**
- ✅ **Postman** (test API)

---

## 📅 Timeline thực hiện

### Tuần 6 (Buổi 12-13)

**Mục tiêu**: Setup + CRUD Tours

- [ ] Setup project + JSON-Server
- [ ] Tạo TourCard, TourList components
- [ ] Implement GET tours
- [ ] Trang chi tiết tour
- [ ] Form thêm/sửa tour (POST/PUT)
- [ ] Xóa tour (DELETE)

### Tuần 7 (Buổi 14-15)

**Mục tiêu**: Destinations + Booking + Context

- [ ] Tạo Destination components
- [ ] CRUD Destinations
- [ ] Booking form
- [ ] Booking list
- [ ] Context API cho state management
- [ ] Styling với TailwindCSS

### Tuần 8 (Buổi 16)

**Mục tiêu**: Hoàn thiện + Presentation

- [ ] Responsive design
- [ ] Error handling
- [ ] Loading states
- [ ] Testing
- [ ] Documentation
- [ ] **Presentation**

---

## ✅ Checklist hoàn thành

### Functionality

- [ ] Hiển thị danh sách tours
- [ ] Search tours
- [ ] Filter theo destination
- [ ] Chi tiết tour
- [ ] Thêm tour mới
- [ ] Sửa tour
- [ ] Xóa tour
- [ ] Danh sách destinations
- [ ] CRUD destinations
- [ ] Đặt tour (booking)
- [ ] Danh sách bookings
- [ ] Navigation/routing hoạt động đúng

### UI/UX

- [ ] Giao diện đẹp, hiện đại
- [ ] Responsive trên mobile/tablet/desktop
- [ ] Loading states
- [ ] Empty states
- [ ] Error messages
- [ ] Confirm dialogs

### Code Quality

- [ ] Component structure rõ ràng
- [ ] Code clean, có comment
- [ ] Sử dụng Context API
- [ ] Custom Hooks
- [ ] Error handling
- [ ] Git commits có ý nghĩa

### Testing

- [ ] Test tất cả CRUD operations
- [ ] Test validation
- [ ] Test error cases
- [ ] Test responsive

### Documentation

- [ ] README.md
- [ ] Comment trong code
- [ ] Git commit messages

---

## 📊 Đánh giá dự án

### Tiêu chí chấm điểm

| Hạng mục | Điểm tối đa | Ghi chú |
|----------|-------------|---------|
| **CRUD Tours** | 30 | Hoàn chỉnh, có validation |
| **CRUD Destinations** | 20 | Tất cả operations |
| **Booking System** | 20 | Form + list + validate |
| **UI/UX** | 20 | Responsive, đẹp |
| **Code Quality** | 10 | Clean code, organize |
| **Tổng** | **100** | |

### Yêu cầu đạt:

✅ **Điểm ≥ 60**: Hoàn thành tối thiểu  
✅ **Điểm ≥ 75**: Hoàn thành tốt  
✅ **Điểm ≥ 90**: Hoàn thành xuất sắc  

---

## 🎓 Gợi ý nâng cao (Bonus points)

Nếu hoàn thành đầy đủ yêu cầu, bạn có thể làm thêm:

- ⭐ **Authentication**: Login/Register
- ⭐ **Dark mode**: Switch theme
- ⭐ **Image upload**: Upload ảnh cho tour
- ⭐ **Rating**: Đánh giá tour
- ⭐ **Comments**: Bình luận tour
- ⭐ **Analytics**: Dashboard thống kê
- ⭐ **Export**: Export data ra CSV

---

## 📚 Tài liệu tham khảo

- [React Documentation](https://react.dev)
- [React Router](https://reactrouter.com)
- [Axios](https://axios-http.com)
- [JSON-Server](https://github.com/typicode/json-server)
- [TailwindCSS](https://tailwindcss.com)

---

**Chúc các em hoàn thành xuất sắc dự án cuối khóa! 🚀🎉**
