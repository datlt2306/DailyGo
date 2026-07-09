# Buổi 11: Đối tượng (Object) cơ bản

Xin chào các em! 👋

Trong thế giới thực, mọi thứ đều là đối tượng (Object) có thuộc tính và hành động. Hôm nay thầy trò mình sẽ học cách biểu diễn các đối tượng đó trong code JavaScript bằng **Object**.

## 🎯 Mục tiêu buổi học
> **Thầy mong muốn sau buổi học này, các em sẽ đạt được:**
1. ✅ Hiểu rõ khái niệm Đối tượng (Object), thuộc tính (Properties) và phương thức (Methods).
2. ✅ Biết cách khai báo và truy xuất dữ liệu từ Object.
3. ✅ Làm việc với mảng chứa nhiều Object.

---

## 📖 Lý thuyết cốt lõi

### 1. Cú pháp khai báo Object
Object lưu trữ thông tin dưới dạng các cặp `key: value` (tên thuộc tính: giá trị).

```javascript
let student = {
  name: "Nguyễn Văn A",
  age: 20,
  major: "Lập trình Web",
  // Phương thức của đối tượng
  study: function() {
    return this.name + " đang học bài...";
  }
};
```

### 2. Cách truy xuất thuộc tính
Các em có hai cách chính để lấy dữ liệu từ Object:
* **Dot Notation (Dùng dấu chấm)**: `student.name`
* **Bracket Notation (Dùng dấu ngoặc vuông)**: `student["name"]`

---

## 💻 Ví dụ minh họa & Thực hành

### Ví dụ: Danh sách sản phẩm (Mảng các Object)
```javascript
let products = [
  { id: 1, name: "Laptop", price: 15000000 },
  { id: 2, name: "Chuột máy tính", price: 250000 },
  { id: 3, name: "Bàn phím cơ", price: 1200000 }
];

// Duyệt qua danh sách và in ra tên từng sản phẩm
for (let prod of products) {
  console.log(prod.name + " có giá: " + prod.price + "đ");
}
```

### Bài tập thực hành
Các em hãy viết chương trình:
1. Định nghĩa một đối tượng `book` biểu diễn một cuốn sách gồm các thuộc tính: tên sách, tác giả, năm xuất bản và trạng thái đã đọc hay chưa (boolean).
2. Viết thêm một phương thức `getSummary()` cho đối tượng này để trả về chuỗi giới thiệu sách dưới dạng: "Cuốn sách [Tên sách] được viết bởi tác giả [Tác giả] vào năm [Năm xuất bản]".

---

## 🧪 Câu hỏi ôn tập
::: details 1. Từ khóa `this` bên trong phương thức của Object đại diện cho cái gì?
Từ khóa `this` đại diện cho chính đối tượng hiện tại đang chứa phương thức đó.
:::

::: details 2. Làm thế nào để thêm một thuộc tính mới vào đối tượng đã khai báo trước đó?
Rất đơn giản, các em chỉ cần dùng dấu chấm để gán trực tiếp: `student.email = "a@poly.edu.vn"`.
:::
