# Buổi 12: Thực hành quản lý đối tượng

Xin chào các em! 🎉

Hôm nay chúng ta sẽ cùng thực hành ứng dụng kết hợp giữa Mảng và Đối tượng để xây dựng một chương trình quản lý dữ liệu thực tế.

## 🎯 Mục tiêu buổi học
> **Thầy mong muốn sau buổi học này, các em sẽ đạt được:**
1. ✅ Quản lý danh sách đối tượng (Thêm, sửa, xóa phần tử trong mảng Object).
2. ✅ Tìm kiếm đối tượng theo thuộc tính cụ thể.
3. ✅ Áp dụng tư duy lập trình cấu trúc dữ liệu thực tế.

---

## 📖 Lý thuyết cốt lõi

Khi làm việc với mảng chứa nhiều Object, việc duyệt mảng và so sánh thuộc tính là thao tác lặp đi lặp lại nhiều nhất. Các em cần ghi nhớ cách truy xuất sâu vào từng thuộc tính của phần tử: `mang[index].thuoc_tinh`.

---

## 💻 Ví dụ minh họa & Thực hành

### Ví dụ: Thêm sản phẩm mới và tính tổng tiền
```javascript
let cart = [
  { name: "Áo thun", price: 150000, quantity: 2 },
  { name: "Quần Jeans", price: 350000, quantity: 1 }
];

// Hàm tính tổng tiền hóa đơn trong giỏ
function calculateTotal(cartItems) {
  let total = 0;
  for (let item of cartItems) {
    total += item.price * item.quantity;
  }
  return total;
}

console.log("Tổng tiền giỏ hàng:", calculateTotal(cart) + "đ");
```

### Bài tập thực hành
Các em hãy xây dựng một chương trình quản lý danh sách học viên bao gồm các chức năng sau:
1. Khai báo mảng chứa ít nhất 3 đối tượng học viên (mỗi học viên có: tên, tuổi, điểm trung bình).
2. Viết hàm `findStudentByName(name)` tìm kiếm và trả về đối tượng học viên có tên trùng khớp.
3. Viết hàm `getTopStudent()` tìm và trả về học viên có điểm trung bình cao nhất lớp.

---

## 🧪 Câu hỏi ôn tập
::: details 1. Làm thế nào để cập nhật giá của một sản phẩm trong giỏ hàng nếu chỉ biết tên của sản phẩm đó?
Duyệt qua mảng giỏ hàng bằng vòng lặp, kiểm tra nếu `item.name === ten_can_tim` thì cập nhật lại giá trị: `item.price = gia_moi`.
:::
