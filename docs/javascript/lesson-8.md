# Buổi 8: Thực hành xây dựng hàm

Xin chào các em! 🎉

Hôm nay chúng ta sẽ cùng nhau thực hành thiết kế và xây dựng các hàm tiện ích xử lý logic thực tế thường dùng trong ứng dụng.

## 🎯 Mục tiêu buổi học
> **Thầy mong muốn sau buổi học này, các em sẽ đạt được:**
1. ✅ Biết cách chia nhỏ bài toán lớn thành các hàm nhỏ hơn.
2. ✅ Tổ chức code gọn gàng, sạch sẽ, dễ bảo trì.
3. ✅ Thực hành truyền nhận giá trị phức tạp qua hàm.

---

## 📖 Lý thuyết cốt lõi

Việc gom các đoạn code lặp lại vào hàm giúp các em tuân thủ nguyên lý **DRY** (Don't Repeat Yourself) trong lập trình. Khi cần sửa đổi logic, các em chỉ cần sửa ở duy nhất một nơi là hàm đó.

---

## 💻 Ví dụ minh họa & Thực hành

### Ví dụ: Hàm tính tổng số tiền hóa đơn
```javascript
const calculateTotalBill = (price, quantity, vat = 10) => {
  let rawTotal = price * quantity;
  let vatAmount = rawTotal * (vat / 100);
  return rawTotal + vatAmount;
};

console.log("Tổng tiền thanh toán:", calculateTotalBill(20000, 3) + "đ");
```

### Bài tập thực hành
Các em hãy viết bộ 3 hàm sau đây:
1. Hàm `isPerfectSquare(num)` kiểm tra xem số `num` có phải số chính phương không.
2. Hàm `fahrenheitToCelsius(f)` đổi nhiệt độ F sang C.
3. Hàm `celsiusToFahrenheit(c)` đổi nhiệt độ C sang F.

---

## 🧪 Câu hỏi ôn tập
::: details 1. Ý nghĩa của giá trị gán sẵn cho tham số (ví dụ: `vat = 10` ở trên) là gì?
Đó là tham số mặc định (Default Parameter). Nếu khi gọi hàm các em không truyền tham số thứ 3 vào, JavaScript sẽ tự động lấy giá trị mặc định là 10.
:::
