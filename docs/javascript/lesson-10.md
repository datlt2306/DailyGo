# Buổi 10: Thực hành làm việc với mảng

Xin chào các em! 🎉

Hôm nay chúng ta sẽ nâng cao kỹ năng xử lý mảng bằng cách thực hiện các thao tác tìm kiếm, lọc và biến đổi dữ liệu trong danh sách.

## 🎯 Mục tiêu buổi học
> **Thầy mong muốn sau buổi học này, các em sẽ đạt được:**
1. ✅ Duyệt mảng bằng các vòng lặp hiện đại như `for...of`.
2. ✅ Tìm kiếm phần tử trong mảng bằng `indexOf()` và `includes()`.
3. ✅ Biết cách ghép nối và cắt nhỏ mảng.

---

## 📖 Lý thuyết cốt lõi

* `indexOf(element)`: Tìm vị trí index đầu tiên của phần tử trong mảng, nếu không tìm thấy trả về `-1`.
* `includes(element)`: Kiểm tra xem phần tử có nằm trong mảng hay không, trả về `true` hoặc `false`.
* `for...of`: Cú pháp duyệt mảng ngắn gọn và dễ đọc hơn vòng lặp `for` truyền thống.

```javascript
let colors = ["Đỏ", "Xanh", "Vàng"];
for (let color of colors) {
  console.log(color);
}
```

---

## 💻 Ví dụ minh họa & Thực hành

### Ví dụ: Tìm vị trí sản phẩm trong giỏ hàng
```javascript
let products = ["iPhone", "Samsung", "Oppo", "Xiaomi"];

let searchProduct = "Samsung";
let position = products.indexOf(searchProduct);

if (position !== -1) {
  console.log("Tìm thấy sản phẩm tại vị trí index:", position);
} else {
  console.log("Không tìm thấy sản phẩm này");
}
```

### Bài tập thực hành
Cho một mảng chứa điểm thi của sinh viên: `let scores = [4, 7, 9, 3, 5, 8, 10, 6]`. Các em hãy viết chương trình:
1. Đếm xem có bao nhiêu sinh viên đạt điểm qua môn (Điểm >= 5).
2. Tính điểm trung bình của cả lớp.

---

## 🧪 Câu hỏi ôn tập
::: details 1. Khi nào nên dùng vòng lặp `for` thường thay vì `for...of`?
Dùng vòng lặp `for` thường khi các em cần biết và thao tác trực tiếp với biến chỉ số `i` (index) của phần tử. Còn `for...of` chỉ lấy ra trực tiếp giá trị của phần tử đó mà không kèm theo index.
:::
