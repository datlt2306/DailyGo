# Buổi 2: Tạo giao diện & Xử lý form nhập liệu cơ bản

**Loại buổi**: Thực hành  
**Thời lượng**: 120 phút  
**Dự án**: To-Do App - Bắt đầu xây dựng

---

## 🎯 Mục tiêu học tập

Sau buổi học này, bạn sẽ có thể:

-   ✅ Tạo giao diện HTML/CSS cho To-Do App
-   ✅ Nhúng JavaScript vào HTML
-   ✅ Lấy giá trị từ form input
-   ✅ Xử lý sự kiện submit form
-   ✅ Hiển thị thông tin ra console/alert

---

## 🧩 Task Project

### Task 1: Tạo cấu trúc HTML cơ bản (20 phút)

Tạo file `index.html` với cấu trúc sau:

```html
<!DOCTYPE html>
<html lang="vi">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>To-Do App</title>
        <link rel="stylesheet" href="styles.css" />
    </head>
    <body>
        <div class="container">
            <h1>Quản lý Công Việc</h1>

            <form id="form-cong-viec">
                <div class="form-group">
                    <label for="ten-cong-viec">Tên công việc:</label>
                    <input
                        type="text"
                        id="ten-cong-viec"
                        placeholder="Nhập tên công việc..."
                        required
                    />
                </div>

                <div class="form-group">
                    <label for="mo-ta">Mô tả (tùy chọn):</label>
                    <textarea id="mo-ta" rows="3" placeholder="Mô tả công việc..."></textarea>
                </div>

                <button type="submit">Thêm công việc</button>
            </form>

            <div id="ket-qua"></div>
        </div>

        <script src="main.js"></script>
    </body>
</html>
```

### Task 2: Tạo CSS cơ bản (15 phút)

Tạo file `styles.css`:

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
    padding: 20px;
}

.container {
    max-width: 600px;
    margin: 0 auto;
    background: white;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h1 {
    color: #333;
    margin-bottom: 20px;
    text-align: center;
}

.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    color: #555;
}

input[type="text"],
textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
}

button {
    background-color: #4caf50;
    color: white;
    padding: 12px 24px;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    width: 100%;
}

button:hover {
    background-color: #45a049;
}

#ket-qua {
    margin-top: 20px;
    padding: 15px;
    background-color: #f9f9f9;
    border-radius: 4px;
    min-height: 50px;
}
```

### Task 3: Xử lý form với JavaScript (40 phút)

Tạo file `main.js`:

```javascript
// Bước 1: Lấy form element
const form = document.getElementById("form-cong-viec");

// Bước 2: Lắng nghe sự kiện submit
form.addEventListener("submit", function (event) {
    // Ngăn form submit mặc định (reload trang)
    event.preventDefault();

    // Bước 3: Lấy giá trị từ input
    const tenCongViec = document.getElementById("ten-cong-viec").value;
    const moTa = document.getElementById("mo-ta").value;

    // Bước 4: Hiển thị thông tin
    console.log("Tên công việc:", tenCongViec);
    console.log("Mô tả:", moTa);

    // Hiển thị ra màn hình
    const ketQua = document.getElementById("ket-qua");
    ketQua.innerHTML = `
        <h3>Thông tin công việc:</h3>
        <p><strong>Tên:</strong> ${tenCongViec}</p>
        <p><strong>Mô tả:</strong> ${moTa || "Không có mô tả"}</p>
    `;

    // Bước 5: Reset form
    form.reset();
});
```

**Hướng dẫn từng bước:**

1. **Lấy form element:**

    - Dùng `document.getElementById('form-cong-viec')`
    - Lưu vào biến `form`

2. **Lắng nghe sự kiện submit:**

    - Dùng `form.addEventListener('submit', function...)`
    - Tham số `event` chứa thông tin sự kiện
    - Dùng `event.preventDefault()` để ngăn reload trang

3. **Lấy giá trị từ input:**

    - Dùng `.value` để lấy giá trị
    - `document.getElementById('ten-cong-viec').value`

4. **Hiển thị thông tin:**

    - Dùng `console.log()` để in ra console
    - Dùng `innerHTML` để hiển thị ra màn hình

5. **Reset form:**
    - Dùng `form.reset()` để xóa input

### Task 4: Cải thiện với Alert (15 phút)

Thêm validation và hiển thị alert:

```javascript
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const tenCongViec = document.getElementById("ten-cong-viec").value.trim();
    const moTa = document.getElementById("mo-ta").value.trim();

    // Kiểm tra dữ liệu
    if (tenCongViec === "") {
        alert("Vui lòng nhập tên công việc!");
        return; // Dừng hàm
    }

    // Hiển thị thông báo
    alert(`Đã thêm công việc: ${tenCongViec}`);

    // Hiển thị ra màn hình
    const ketQua = document.getElementById("ket-qua");
    ketQua.innerHTML = `
        <h3>Thông tin công việc:</h3>
        <p><strong>Tên:</strong> ${tenCongViec}</p>
        <p><strong>Mô tả:</strong> ${moTa || "Không có mô tả"}</p>
        <p><em>Thời gian tạo: ${new Date().toLocaleString("vi-VN")}</em></p>
    `;

    form.reset();
});
```

### Task 5: Thêm tính năng (30 phút)

**Task 5.1: Thêm input Độ ưu tiên**

```html
<div class="form-group">
    <label for="do-uu-tien">Độ ưu tiên:</label>
    <select id="do-uu-tien">
        <option value="cao">Cao</option>
        <option value="trung-binh" selected>Trung bình</option>
        <option value="thap">Thấp</option>
    </select>
</div>
```

**Task 5.2: Hiển thị tất cả thông tin**

```javascript
const doUuTien = document.getElementById("do-uu-tien").value;

ketQua.innerHTML = `
    <h3>Thông tin công việc:</h3>
    <p><strong>Tên:</strong> ${tenCongViec}</p>
    <p><strong>Mô tả:</strong> ${moTa || "Không có mô tả"}</p>
    <p><strong>Độ ưu tiên:</strong> ${doUuTien}</p>
    <p><em>Thời gian: ${new Date().toLocaleString("vi-VN")}</em></p>
`;
```

**Task 5.3: Thêm CSS cho select**

```css
select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
}
```

---

## ✅ Checklist hoàn thành

-   [ ] Đã tạo file `index.html` với form đầy đủ
-   [ ] Đã tạo file `styles.css` và style đẹp
-   [ ] Đã tạo file `main.js` và xử lý form submit
-   [ ] Form không reload trang khi submit
-   [ ] Lấy được giá trị từ input và hiển thị ra console
-   [ ] Hiển thị thông tin ra màn hình
-   [ ] Có validation (kiểm tra input rỗng)
-   [ ] Form reset sau khi submit
-   [ ] Thêm được tính năng độ ưu tiên

---

## 🧪 Checkpoint

**Câu hỏi kiểm tra:**

1. Làm thế nào để ngăn form reload trang khi submit?
2. Cách lấy giá trị từ input text là gì?
3. `event.preventDefault()` dùng để làm gì?
4. Cách hiển thị thông tin ra màn hình HTML?

**Đáp án:**

1. Dùng `event.preventDefault()` trong event listener
2. Dùng `.value` của element: `element.value`
3. Ngăn hành vi mặc định của phần tử (form submit)
4. Dùng `element.innerHTML` hoặc `element.textContent`

---

## 📝 Bài tập về nhà

1. Thêm input "Ngày hết hạn" (date picker)
2. Thêm input "Thời gian" (time picker)
3. Hiển thị thông tin đầy đủ với format đẹp
4. Thử nghiệm với các loại input khác (checkbox, radio)

---

## 💡 Tips

-   Luôn dùng `trim()` để loại bỏ khoảng trắng thừa
-   Kiểm tra dữ liệu trước khi xử lý
-   Dùng `console.log()` để debug
-   Test trên nhiều trình duyệt khác nhau

---

**Chúc bạn hoàn thành tốt! 🚀**
