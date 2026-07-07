# JavaScript từ cơ bản đến nâng cao

Chào mừng bạn đến với khóa học **JavaScript từ cơ bản đến nâng cao** theo mô hình **Project-Based Learning (PBL)**!

## 🎯 Giới thiệu khóa học

Khóa học này được thiết kế với phương pháp **học qua dự án**, giúp bạn vừa hiểu lý thuyết, vừa áp dụng ngay vào thực tế thông qua việc xây dựng một ứng dụng hoàn chỉnh.

### Thông tin chung

-   **Tổng thời lượng**: 14 buổi (mỗi buổi 120 phút)
-   **Cấu trúc**: 7 cặp buổi (Lý thuyết - Thực hành)
-   **Dự án xuyên suốt**: Mini Website Quản lý Công Việc (To-Do App)
-   **Đối tượng**: Sinh viên cao đẳng ngành lập trình web (đã học HTML/CSS cơ bản)
-   **Phương pháp**: 20% lý thuyết, 80% thực hành

### Điều kiện tiên quyết

✅ HTML cơ bản (thẻ, form, cấu trúc trang)  
✅ CSS cơ bản (selectors, properties, layout)  
✅ Biết cách sử dụng trình soạn thảo code (VS Code)  
✅ Biết cách mở file HTML trong trình duyệt

### Kết quả học tập

Sau khóa học, bạn sẽ có thể:

-   ✅ Hiểu rõ cách JavaScript vận hành trong trình duyệt
-   ✅ Sử dụng thành thạo biến, kiểu dữ liệu, toán tử, hàm
-   ✅ Làm việc với DOM để thao tác trang web
-   ✅ Xử lý sự kiện (click, submit, input...)
-   ✅ Làm việc với Mảng và Object để quản lý dữ liệu
-   ✅ Lưu trữ dữ liệu bằng LocalStorage
-   ✅ Gọi API và xử lý dữ liệu bất đồng bộ
-   ✅ Tổ chức code theo module (ES6 Modules)
-   ✅ Xây dựng một ứng dụng web hoàn chỉnh

## 📚 Nội dung khóa học

### 📊 Bảng tổng hợp 14 buổi học

| Buổi | Loại | Chủ đề chính | Mục tiêu | Nội dung chính | Task / Bài tập |
| --- | --- | --- | --- | --- | --- |
| **1** | **LT** | DOM Selection & Manipulation | Hiểu DOM, biết cách tìm và sửa đổi phần tử HTML bằng JS | - DOM là gì?<br>- querySelector, querySelectorAll<br>- classList, style, attributes, dataset | |
| **2** | **TH** | Tích hợp UI & Render Danh sách | Tích hợp template ZenTask, render dữ liệu từ mảng mẫu | - Setup cấu trúc giao diện ZenTask<br>- Tạo mảng công việc mẫu (Mock data)<br>- Duyệt mảng và đổ dữ liệu động (innerHTML/textContent) | Task: Render danh sách công việc tĩnh từ mảng |
| **3** | **LT** | Sự kiện (Events) & Event Delegation | Hiểu cơ chế sự kiện và cách tối ưu với Event Delegation | - Event Listeners & Event Object<br>- Bubbling & Capturing<br>- Event Delegation (Ủy quyền sự kiện) | |
| **4** | **TH** | Chức năng Thêm & Xóa công việc | Xử lý thêm công việc mới từ form và click nút xóa | - Submit form & validate input cơ bản<br>- Thêm công việc mới vào mảng<br>- Áp dụng Event Delegation xử lý nút Xóa | Task: Thêm mới và xóa công việc động |
| **5** | **LT** | Mảng & Object nâng cao - Tư duy State | Làm việc với các phương thức mảng nâng cao và tư duy State | - map, filter, find, findIndex, reduce<br>- Tư duy State-driven UI (State -> Render) | |
| **6** | **TH** | Chức năng Sửa, Tìm kiếm & Lọc | Hoàn thiện CRUD cơ bản và các bộ lọc tìm kiếm | - Toggle status công việc<br>- Điền dữ liệu vào form để Sửa (Edit)<br>- Tìm kiếm (Search) & Lọc (Filter) theo trạng thái/ưu tiên | Task: Hoàn thiện CRUD và bộ lọc |
| **7** | **LT** | Web Storage APIs & JSON | Hiểu cách lưu trữ dữ liệu bền vững ở phía Client | - localStorage và sessionStorage<br>- JSON.stringify & JSON.parse | |
| **8** | **TH** | Lưu trữ Todo & Giao diện Sáng/Tối | Đồng bộ công việc với LocalStorage và làm Dark/Light mode | - Lưu và tải danh sách từ LocalStorage<br>- Theme toggle (Dark/Light mode) & lưu theme preference | Task: Lưu Todo bền vững & Đổi Theme |
| **9** | **LT** | Lập trình Bất đồng bộ trong JavaScript | Hiểu lập trình bất đồng bộ và cách xử lý | - Callback, Promise, Async/Await<br>- Xử lý bất đồng bộ tuần tự và song song | |
| **10** | **TH** | Mock API Setup & Tải dữ liệu (GET) | Thiết lập Mock API và tải danh sách công việc | - Cấu hình và chạy json-server<br>- Gọi GET API tải danh sách khi load trang<br>- Xử lý trạng thái Loading & Error | Task: Tải danh sách công việc từ API |
| **11** | **LT** | HTTP Methods nâng cao & Tối ưu UI | Hiểu các thao tác cập nhật API và các kỹ thuật tối ưu UI | - Phân biệt PUT và PATCH<br>- Pessimistic UI vs Optimistic UI | |
| **12** | **TH** | Đồng bộ CRUD với API | Hoàn thiện đồng bộ mọi thay đổi dữ liệu lên Mock API | - Gọi POST khi thêm công việc<br>- Gọi PATCH khi cập nhật trạng thái/nội dung<br>- Gọi DELETE khi xóa công việc | Task: Đồng bộ toàn bộ CRUD với Mock API |
| **13** | **LT** | ES6 Modules & Kiến trúc phần mềm | Hiểu cách tổ chức code dự án sạch sẽ và modular | - ES6 Modules (import/export)<br>- Tách lớp kiến trúc: API, Storage, DOM, Main | |
| **14** | **TH** | Tách Module code | Tái cấu trúc (Refactor) To-Do App thành các modules riêng | - Tách code thành api.js, storage.js, dom.js, constants.js<br>- Nhúng Script dạng type="module" | Task: Hoàn thành refactor code |

**Chú thích:**

-   **LT**: Lý thuyết
-   **TH**: Thực hành

## 📁 Cấu trúc dự án

Xem chi tiết cấu trúc thư mục và rubric đánh giá tại [Dự án cuối khóa](./final-project.md).

## 🎓 Phương pháp học

### Cấu trúc mỗi buổi học

1. **🎯 Mục tiêu học tập** - Xác định rõ bạn sẽ học được gì
2. **🧠 Nội dung chính** - Lý thuyết hoặc hướng dẫn project
3. **💻 Ví dụ minh họa** - Code mẫu và giải thích
4. **🧩 Bài tập/Task** - Thực hành ngay tại lớp
5. **🧪 Quiz/Checkpoint** - Kiểm tra kiến thức (5-7 câu)

### Nguyên tắc học tập

-   ✅ **Học qua làm**: Tập trung vào thực hành (80%)
-   ✅ **Incremental Build**: Xây dựng project từng bước, buổi sau nâng cấp buổi trước
-   ✅ **Hiểu bản chất**: Không chỉ học syntax, mà hiểu tại sao và khi nào dùng
-   ✅ **Ví dụ thực tế**: Gần gũi với đời sống sinh viên

## 📖 Danh sách bài học

### Giai đoạn 1: DOM & Quản lý Sự kiện (Buổi 1-4)

-   [Buổi 1: DOM Selection, Traversal & Manipulation](./lesson-1.md) (LT)
-   [Buổi 2: Tích hợp giao diện mẫu & Render danh sách](./lesson-2.md) (TH)
-   [Buổi 3: JavaScript Events & Event Delegation](./lesson-3.md) (LT)
-   [Buổi 4: Tính năng Thêm & Xóa công việc](./lesson-4.md) (TH)

### Giai đoạn 2: Quản lý State & Tính năng CRUD (Buổi 5-6)

-   [Buổi 5: Mảng, Object & Tư duy State](./lesson-5.md) (LT)
-   [Buổi 6: Tính năng Sửa, Tìm kiếm & Lọc](./lesson-6.md) (TH)

### Giai đoạn 3: Web Storage & Dark Mode (Buổi 7-8)

-   [Buổi 7: Web Storage APIs & JSON](./lesson-7.md) (LT)
-   [Buổi 8: Lưu trữ dữ liệu & Tính năng Dark/Light Mode](./lesson-8.md) (TH)

### Giai đoạn 4: Lập trình bất đồng bộ & Kết nối API (Buổi 9-12)

-   [Buổi 9: Lập trình Bất đồng bộ trong JavaScript](./lesson-9.md) (LT)
-   [Buổi 10: Mock API Setup & Tải dữ liệu (GET)](./lesson-10.md) (TH)
-   [Buổi 11: HTTP Methods & Tối ưu hóa UI](./lesson-11.md) (LT)
-   [Buổi 12: Đồng bộ CRUD với API](./lesson-12.md) (TH)

### Giai đoạn 5: Modularization & Refactoring (Buổi 13-14)

-   [Buổi 13: ES6 Modules & Kiến trúc ứng dụng](./lesson-13.md) (LT)
-   [Buổi 14: Tách Module code](./lesson-14.md) (TH)

## 🎯 Dự án cuối khóa

Xem chi tiết yêu cầu và rubric tại [Dự án cuối khóa](./final-project.md).

---

**Chúc bạn học tập hiệu quả! 🚀**
