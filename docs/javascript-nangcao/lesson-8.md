# Buổi 8: Lưu trữ Todo & Giao diện Sáng/Tối

**Loại buổi**: Thực hành  
**Thời lượng**: 120 phút  
**Dự án**: ZenTask (To-Do App) - Đồng bộ dữ liệu LocalStorage và hoàn thiện tính năng Đổi giao diện Sáng/Tối

---

## 🎯 Mục tiêu học tập

Sau buổi học này, bạn sẽ có thể:

- ✅ Đồng bộ hóa dữ liệu State của ứng dụng với LocalStorage sau mỗi hành động CRUD
- ✅ Đọc dữ liệu từ LocalStorage để tái dựng lại giao diện mỗi khi tải trang
- ✅ Xây dựng chức năng chuyển đổi giao diện Sáng/Tối (Dark/Light Mode)
- ✅ Lưu trữ cấu hình giao diện ưa thích của người dùng để duy trì trạng thái khi tải lại trang

---

## 🧩 Task Project

### Task 1: Đồng bộ hóa danh sách công việc vào LocalStorage (30 phút)

Chúng ta cần tích hợp lưu trữ vào các hàm thay đổi dữ liệu của Buổi 4 và Buổi 6.

#### Bước 1.1: Định nghĩa khóa lưu trữ và hàm ghi/đọc dữ liệu
Khai báo khóa ở đầu file `main.js`:
```javascript
const STORAGE_KEY = 'zentask_danh_sach_cong_viec';

/**
 * Lưu mảng công việc hiện tại vào LocalStorage
 */
function luuVaoStorage() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(danhSachCongViec));
    } catch (e) {
        console.error('Không thể lưu dữ liệu vào LocalStorage:', e);
    }
}

/**
 * Đọc dữ liệu công việc từ LocalStorage ra mảng
 */
function docTuStorage() {
    const rawData = localStorage.getItem(STORAGE_KEY);
    if (!rawData) return [];
    try {
        return JSON.parse(rawData);
    } catch (e) {
        console.error('Lỗi định dạng dữ liệu LocalStorage. Reset về mảng rỗng.');
        return [];
    }
}
```

#### Bước 1.2: Cập nhật hàm khởi tạo dữ liệu ban đầu
Thay đổi dòng khai báo `danhSachCongViec` cũ thành:
```javascript
// Đọc dữ liệu đã lưu từ trước khi tải trang
let danhSachCongViec = docTuStorage();
```

#### Bước 1.3: Gọi `luuVaoStorage()` sau mỗi hành động thay đổi dữ liệu
Hãy tìm đến các hàm xử lý dữ liệu và thêm lệnh `luuVaoStorage()` vào cuối:
* **Hành động thêm mới**:
  ```javascript
  danhSachCongViec.unshift(congViecMoi);
  luuVaoStorage(); // 👈 Thêm vào đây
  renderList();
  capNhatTienDo();
  ```
* **Hành động xóa**:
  ```javascript
  danhSachCongViec = danhSachCongViec.filter(cv => cv.id !== id);
  luuVaoStorage(); // 👈 Thêm vào đây
  renderList();
  capNhatTienDo();
  ```
* **Hành động sửa (cập nhật)**:
  ```javascript
  danhSachCongViec = danhSachCongViec.map(cv => { ... });
  luuVaoStorage(); // 👈 Thêm vào đây
  ```
* **Hành động toggle trạng thái**:
  ```javascript
  danhSachCongViec = danhSachCongViec.map(cv => { ... });
  luuVaoStorage(); // 👈 Thêm vào đây
  ```

---

### Task 2: Xây dựng tính năng đổi giao diện Sáng/Tối (50 phút)

Chúng ta sẽ lắng nghe sự kiện click trên nút bấm `.btn-theme-toggle` ở góc trên cùng. Khi người dùng click, ta sẽ đổi class `light-theme` trên thẻ `<body>` để chuyển đổi bảng màu CSS, đồng thời ghi nhớ cấu hình này vào LocalStorage.

#### Bước 2.1: Chuẩn bị CSS cho Light Theme
Để cấu trúc CSS đổi màu mượt mà, ta nên định nghĩa bảng màu bằng CSS Variables ở đầu file `styles.css`. 

Hãy đảm bảo tệp `styles.css` của bạn hỗ trợ chế độ sáng bằng cách thêm class `.light-theme` ghi đè các biến CSS:

```css
/* Trong file styles.css của template ZenTask */
:root {
    /* Mặc định là Dark Theme */
    --bg-app: #090d16;
    --bg-card: rgba(17, 24, 39, 0.7);
    --border-color: rgba(255, 255, 255, 0.08);
    --text-main: #f8fafc;
    --text-muted: #94a3b8;
}

/* Khi body có class .light-theme, các biến màu sẽ bị ghi đè */
body.light-theme {
    --bg-app: #f1f5f9;
    --bg-card: rgba(255, 255, 255, 0.85);
    --border-color: rgba(0, 0, 0, 0.08);
    --text-main: #0f172a;
    --text-muted: #64748b;
    --border-hover: rgba(0, 0, 0, 0.15);
}
```

#### Bước 2.2: Viết logic JavaScript xử lý chuyển đổi và lưu trữ Theme
Trong tệp `main.js`, viết hàm đổi theme và lắng nghe sự kiện click nút bấm:

```javascript
const themeToggleBtn = document.querySelector('.btn-theme-toggle');
const THEME_KEY = 'zentask_theme';

// Hàm áp dụng theme
function apDungTheme(theme) {
    const icon = themeToggleBtn.querySelector('i');
    
    if (theme === 'light') {
        document.body.classList.add('light-theme');
        // Đổi icon sang mặt trời
        if (icon) icon.setAttribute('data-lucide', 'sun');
    } else {
        document.body.classList.remove('light-theme');
        // Đổi icon sang mặt trăng
        if (icon) icon.setAttribute('data-lucide', 'moon');
    }
    
    // Refresh lại icon của Lucide
    if (window.lucide) {
        window.lucide.createIcons();
    }
}

// Lắng nghe sự kiện click đổi theme
themeToggleBtn.addEventListener('click', function() {
    let themeHienTai = 'dark';
    
    if (document.body.classList.contains('light-theme')) {
        themeHienTai = 'dark';
    } else {
        themeHienTai = 'light';
    }
    
    // Áp dụng theme mới và lưu cấu hình
    apDungTheme(themeHienTai);
    localStorage.setItem(THEME_KEY, themeHienTai);
});

// Hàm khởi tạo theme khi load trang
function khoiTaoTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY) || 'dark'; // mặc định là dark
    apDungTheme(savedTheme);
}

// Khởi chạy
khoiTaoTheme();
```

---



## 📝 Bài tập về nhà

1. Hãy tích hợp hoàn chỉnh cơ chế đồng bộ LocalStorage cho ứng dụng của bạn để đảm bảo dữ liệu To-Do và trạng thái Theme (giao diện) không bị mất khi tải lại trang.
2. Nâng cấp hàm `khoiTaoTheme()` để tự động đọc cấu hình theme mặc định của hệ điều hành (sử dụng thuộc tính `window.matchMedia('(prefers-color-scheme: light)').matches`) nếu trong LocalStorage chưa lưu cấu hình.
3. Tạo một nút bấm "Xóa toàn bộ công việc đã hoàn thành" ở Sidebar và lập trình tính năng xóa hàng loạt, lưu vào Storage & render lại UI.

<details>
<summary><b>💡 Gợi ý / Hướng dẫn thực hành từng bước</b></summary>

### Yêu cầu 1: Lưu & Đọc Todo + Theme
* Viết hàm lưu và gọi mỗi khi có thay đổi (Thêm, Xóa, Sửa, Toggle hoàn thành):
  ```javascript
  function luuDuLieuVaoStorage() {
      localStorage.setItem('danhSachCongViec', JSON.stringify(danhSachCongViec));
  }
  ```
* Khi khởi động ứng dụng (đầu file `main.js`), lấy dữ liệu ra hoặc dùng mảng mặc định nếu trống:
  ```javascript
  let danhSachCongViec = JSON.parse(localStorage.getItem('danhSachCongViec')) || [
      // Mock data mặc định ban đầu nếu LocalStorage rỗng
  ];
  ```

### Yêu cầu 2: Nâng cấp `khoiTaoTheme()` với cấu hình hệ điều hành
* Kiểm tra xem người dùng có thiết lập hệ điều hành là Dark hay Light mode bằng `window.matchMedia`:
  ```javascript
  function khoiTaoTheme() {
      const savedTheme = localStorage.getItem('theme');
      
      if (savedTheme) {
          document.documentElement.setAttribute('data-theme', savedTheme);
      } else {
          // Kiểm tra chế độ sáng/tối của hệ điều hành
          const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          const systemTheme = prefersDark ? 'dark' : 'light';
          
          document.documentElement.setAttribute('data-theme', systemTheme);
          localStorage.setItem('theme', systemTheme); // Đồng bộ cấu hình
      }
  }
  ```

### Yêu cầu 3: Nút "Xóa toàn bộ công việc đã hoàn thành"
* **HTML**: Thêm một button vào Sidebar hoặc khu vực danh sách:
  ```html
  <button id="btn-clean-completed" class="btn-clean">Xóa công việc đã hoàn thành</button>
  ```
* **JS**: Lắng nghe sự kiện click trên nút bấm đó, lọc bỏ các công việc đã hoàn thành khỏi State, lưu vào storage, rồi render lại:
  ```javascript
  const btnClean = document.getElementById('btn-clean-completed');
  if (btnClean) {
      btnClean.addEventListener('click', () => {
          if (confirm('Bạn có chắc chắn muốn xóa toàn bộ công việc đã hoàn thành?')) {
              // Lọc chỉ giữ lại công việc CHƯA hoàn thành
              danhSachCongViec = danhSachCongViec.filter(cv => !cv.hoanThanh);
              
              // Cập nhật Storage & render
              luuDuLieuVaoStorage();
              renderList();
              capNhatTienDo();
          }
      });
  }
  ```

</details>

---

## 🔗 Tài liệu tham khảo

- [MDN: Window.matchMedia()](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia)
- [CSS Tricks: Update CSS Variables with JS](https://css-tricks.com/updating-css-variables-with-javascript/)
- [JavaScript.info: LocalStorage](https://javascript.info/localstorage)
