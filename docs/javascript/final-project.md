# Dự án cuối khóa: To-Do App

## 🎯 Mục tiêu dự án

Xây dựng một ứng dụng **Quản lý Công Việc (To-Do App)** hoàn chỉnh sử dụng JavaScript thuần, thể hiện toàn bộ kiến thức đã học trong khóa học.

---

## 📁 Cấu trúc thư mục cuối cùng

```
todo-app/
├── index.html                 # File HTML chính
├── styles.css                 # File CSS chính
├── README.md                  # Tài liệu hướng dẫn
├── package.json               # (Optional) Nếu dùng npm scripts
├── db.json                    # (Optional) Dữ liệu cho JSON Server
│
├── src/                       # Thư mục chứa code JavaScript
│   ├── main.js               # File chính, entry point
│   ├── constants.js          # Các hằng số (keys, configs)
│   ├── utils.js              # Helper functions, utilities
│   ├── storage.js            # Xử lý LocalStorage
│   ├── api.js                # Xử lý API calls
│   └── dom.js                # Thao tác DOM
│
└── assets/                    # (Optional) Thư mục assets
    ├── images/                # Hình ảnh
    └── icons/                 # Icons
```

### 📝 Mô tả các file

**index.html:**

-   Cấu trúc HTML của ứng dụng
-   Form thêm/sửa công việc
-   Danh sách hiển thị công việc
-   Các input tìm kiếm, lọc

**styles.css:**

-   Styling cho toàn bộ ứng dụng
-   Responsive design
-   Animations và transitions
-   Dark mode (nếu có)

**src/main.js:**

-   Entry point của ứng dụng
-   Khởi tạo ứng dụng
-   Quản lý state chính
-   Event handlers chính

**src/constants.js:**

```javascript
export const STORAGE_KEY = 'todoApp_danhSachCongViec';
export const API_BASE = 'http://localhost:3000/todos';
export const SELECTORS = { ... };
export const TRANG_THAI = { ... };
export const CONFIG = { ... };
```

**src/utils.js:**

-   Validation functions
-   Format functions
-   Helper utilities
-   Debounce, throttle (nếu có)

**src/storage.js:**

-   `luu(data)` - Lưu vào LocalStorage
-   `lay(defaultValue)` - Lấy từ LocalStorage
-   `xoa()` - Xóa dữ liệu
-   Error handling

**src/api.js:**

-   `layDanhSach()` - GET all
-   `layMot(id)` - GET one
-   `tao(congViec)` - POST
-   `capNhat(id, congViec)` - PUT
-   `xoa(id)` - DELETE

**src/dom.js:**

-   `createElement()` - Tạo element
-   `renderList()` - Render danh sách
-   `showLoading()` - Hiển thị loading
-   `showNotification()` - Hiển thị thông báo

---

## ✅ Yêu cầu tính năng

### Tính năng bắt buộc (70 điểm)

#### 1. CRUD Operations (20 điểm)

-   ✅ **Thêm công việc** (5 điểm)

    -   Form nhập liệu
    -   Validation
    -   Hiển thị ngay sau khi thêm

-   ✅ **Sửa công việc** (5 điểm)

    -   Click nút "Sửa"
    -   Form tự động điền dữ liệu
    -   Cập nhật sau khi sửa

-   ✅ **Xóa công việc** (5 điểm)

    -   Xác nhận trước khi xóa
    -   Xóa khỏi danh sách
    -   Cập nhật UI

-   ✅ **Hiển thị danh sách** (5 điểm)
    -   Render danh sách động
    -   Hiển thị đầy đủ thông tin
    -   UI đẹp, dễ đọc

#### 2. Tìm kiếm và Lọc (10 điểm)

-   ✅ **Tìm kiếm** (5 điểm)

    -   Tìm theo tên/mô tả
    -   Real-time search
    -   Highlight kết quả

-   ✅ **Lọc** (5 điểm)
    -   Lọc theo trạng thái
    -   Sắp xếp (theo ngày, tên)
    -   Hiển thị số lượng

#### 3. Đánh dấu hoàn thành (10 điểm)

-   ✅ Checkbox đánh dấu
-   ✅ Cập nhật trạng thái
-   ✅ Visual feedback (strikethrough, màu sắc)

#### 4. Lưu trữ dữ liệu (15 điểm)

-   ✅ **LocalStorage** (10 điểm)

    -   Tự động lưu khi thay đổi
    -   Tự động tải khi load
    -   Xử lý lỗi

-   ✅ **API Integration** (5 điểm)
    -   Fetch API
    -   CRUD qua API
    -   Error handling

#### 5. UI/UX (15 điểm)

-   ✅ **Giao diện** (10 điểm)

    -   Đẹp, hiện đại
    -   Responsive
    -   Animations

-   ✅ **User Experience** (5 điểm)
    -   Loading states
    -   Error messages
    -   Thông báo rõ ràng

### Tính năng tùy chọn (30 điểm)

-   ✅ **Dark mode** (5 điểm)
-   ✅ **Export/Import dữ liệu** (5 điểm)
-   ✅ **Thống kê** (biểu đồ, số liệu) (5 điểm)
-   ✅ **Keyboard shortcuts** (5 điểm)
-   ✅ **Sắp xếp nâng cao** (5 điểm)
-   ✅ **Tính năng khác sáng tạo** (5 điểm)

---

## 📊 Rubric đánh giá

### 1. Tính năng (40 điểm)

| Tiêu chí            | Điểm | Mô tả                                      |
| ------------------- | ---- | ------------------------------------------ |
| **CRUD đầy đủ**     | 20   | Thêm, sửa, xóa, hiển thị đều hoạt động tốt |
| **Tìm kiếm & Lọc**  | 10   | Tìm kiếm và lọc hoạt động chính xác        |
| **Lưu trữ dữ liệu** | 10   | LocalStorage và API hoạt động đúng         |

**Thang điểm:**

-   **Xuất sắc (36-40)**: Tất cả tính năng hoạt động hoàn hảo, không có bug
-   **Tốt (30-35)**: Có một vài tính năng nhỏ chưa hoàn chỉnh
-   **Khá (20-29)**: Thiếu một số tính năng quan trọng
-   **Trung bình (10-19)**: Chỉ có tính năng cơ bản
-   **Yếu (<10)**: Không hoạt động hoặc thiếu nhiều tính năng

### 2. Code Style (20 điểm)

| Tiêu chí               | Điểm | Mô tả                               |
| ---------------------- | ---- | ----------------------------------- |
| **Tổ chức code**       | 8    | Modules rõ ràng, cấu trúc hợp lý    |
| **Naming conventions** | 6    | Tên biến/hàm rõ ràng, nhất quán     |
| **Comments**           | 3    | Comments đầy đủ, giải thích rõ ràng |
| **Code quality**       | 3    | Code sạch, dễ đọc, không lặp lại    |

**Thang điểm:**

-   **Xuất sắc (18-20)**: Code rất sạch, tổ chức tốt, dễ đọc
-   **Tốt (15-17)**: Code tốt, chỉ có một vài điểm cần cải thiện
-   **Khá (12-14)**: Code ổn, nhưng cần refactor một số phần
-   **Trung bình (8-11)**: Code chưa được tổ chức tốt
-   **Yếu (<8)**: Code khó đọc, không có cấu trúc

### 3. UI/UX (20 điểm)

| Tiêu chí          | Điểm | Mô tả                            |
| ----------------- | ---- | -------------------------------- |
| **Giao diện**     | 10   | Đẹp, hiện đại, nhất quán         |
| **Responsive**    | 5    | Hoạt động tốt trên mobile/tablet |
| **Animations**    | 3    | Animations mượt mà, hợp lý       |
| **User feedback** | 2    | Loading, error messages rõ ràng  |

**Thang điểm:**

-   **Xuất sắc (18-20)**: UI đẹp, UX tuyệt vời
-   **Tốt (15-17)**: UI tốt, UX ổn
-   **Khá (12-14)**: UI ổn, nhưng cần cải thiện UX
-   **Trung bình (8-11)**: UI đơn giản, chức năng cơ bản
-   **Yếu (<8)**: UI chưa đẹp, UX kém

### 4. Xử lý lỗi (10 điểm)

| Tiêu chí               | Điểm | Mô tả                          |
| ---------------------- | ---- | ------------------------------ |
| **Validation**         | 4    | Validate input đầy đủ          |
| **Error handling**     | 4    | Xử lý lỗi API, Storage         |
| **User notifications** | 2    | Thông báo lỗi rõ ràng cho user |

**Thang điểm:**

-   **Xuất sắc (9-10)**: Xử lý lỗi đầy đủ, thông báo rõ ràng
-   **Tốt (7-8)**: Xử lý lỗi tốt, thiếu một vài trường hợp
-   **Khá (5-6)**: Xử lý lỗi cơ bản
-   **Trung bình (3-4)**: Chỉ có validation cơ bản
-   **Yếu (<3)**: Không có xử lý lỗi

### 5. Teamwork & Presentation (10 điểm)

| Tiêu chí            | Điểm | Mô tả                              |
| ------------------- | ---- | ---------------------------------- |
| **Thuyết trình**    | 5    | Trình bày rõ ràng, tự tin          |
| **Demo**            | 3    | Demo mượt mà, không có lỗi         |
| **Trả lời câu hỏi** | 2    | Trả lời được câu hỏi từ giảng viên |

**Thang điểm:**

-   **Xuất sắc (9-10)**: Thuyết trình xuất sắc, demo hoàn hảo
-   **Tốt (7-8)**: Thuyết trình tốt, demo ổn
-   **Khá (5-6)**: Thuyết trình ổn, demo có một vài vấn đề
-   **Trung bình (3-4)**: Thuyết trình chưa tốt, demo có lỗi
-   **Yếu (<3)**: Không thuyết trình hoặc thuyết trình rất kém

---

## 📋 Tổng kết điểm

| Hạng mục     | Điểm tối đa | Tỷ lệ    |
| ------------ | ----------- | -------- |
| Tính năng    | 40          | 40%      |
| Code Style   | 20          | 20%      |
| UI/UX        | 20          | 20%      |
| Xử lý lỗi    | 10          | 10%      |
| Thuyết trình | 10          | 10%      |
| **TỔNG**     | **100**     | **100%** |

### Thang điểm cuối cùng

-   **A+ (95-100)**: Xuất sắc - Hoàn vượt mong đợi
-   **A (90-94)**: Rất tốt - Đạt yêu cầu xuất sắc
-   **B+ (85-89)**: Tốt - Đạt yêu cầu tốt
-   **B (80-84)**: Khá tốt - Đạt yêu cầu
-   **C+ (75-79)**: Đạt - Đạt yêu cầu cơ bản
-   **C (70-74)**: Đạt yếu - Gần đạt yêu cầu
-   **D (60-69)**: Chưa đạt - Cần cải thiện
-   **F (<60)**: Không đạt - Cần làm lại

---

## 📝 Checklist nộp bài

### Code

-   [ ] Code hoàn chỉnh, không có lỗi
-   [ ] Tất cả modules đã được tách
-   [ ] Comments đầy đủ
-   [ ] Code đã được format đẹp

### Tài liệu

-   [ ] README.md với hướng dẫn sử dụng
-   [ ] Mô tả các tính năng
-   [ ] Hướng dẫn setup (nếu có)
-   [ ] Screenshots hoặc demo video

### Git

-   [ ] Commit history rõ ràng
-   [ ] Commit messages theo chuẩn
-   [ ] Code đã được push lên repository

### Demo

-   [ ] Đã test tất cả tính năng
-   [ ] Chuẩn bị dữ liệu mẫu
-   [ ] Chuẩn bị slide (nếu có)
-   [ ] Sẵn sàng thuyết trình

---

## 🎯 Hướng dẫn nộp bài

1. **Nộp code:**

    - Push lên GitHub/GitLab
    - Hoặc nộp file ZIP
    - Kèm theo README.md

2. **Thuyết trình:**

    - Thời gian: 5-7 phút
    - Demo trực tiếp
    - Q&A: 2-3 phút

3. **Deadline:**
    - Nộp code: Trước buổi 16
    - Thuyết trình: Trong buổi 16

---

## 💡 Tips để đạt điểm cao

1. **Làm đầy đủ tính năng bắt buộc trước**
2. **Code sạch, tổ chức tốt**
3. **UI đẹp, UX tốt**
4. **Xử lý lỗi đầy đủ**
5. **Thuyết trình tự tin, demo mượt**
6. **Thêm tính năng bonus để gây ấn tượng**

---

**Chúc các bạn hoàn thành tốt dự án cuối khóa! 🚀🎉**
