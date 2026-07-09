# Buổi 4: Thực hành logic rẽ nhánh

Xin chào các em! 🎉

Hôm nay chúng ta sẽ áp dụng các kiến thức về câu điều kiện `if-else` để giải quyết các bài toán logic phức tạp hơn trong cuộc sống.

## 🎯 Mục tiêu buổi học
> **Thầy mong muốn sau buổi học này, các em sẽ đạt được:**
1. ✅ Lồng ghép các câu lệnh `if-else` để xử lý nhiều tầng điều kiện.
2. ✅ Rèn luyện tư duy phân tích bài toán trước khi bắt tay vào viết code.
3. ✅ Biết cách bắt lỗi dữ liệu đầu vào cơ bản.

---

## 📖 Lý thuyết cốt lõi

Khi giải quyết các bài toán rẽ nhánh, các em cần chú ý thứ tự kiểm tra điều kiện. Những điều kiện mang tính chất loại trừ hoặc có mức độ ưu tiên cao hơn nên được đặt lên đầu tiên để tránh bị bỏ sót hoặc chạy sai logic.

---

## 💻 Ví dụ minh họa & Thực hành

### Ví dụ: Tính tiền vé xem phim dựa trên độ tuổi
* Trẻ em dưới 5 tuổi: Miễn phí.
* Học sinh từ 5 đến 18 tuổi: Giảm 50% vé (Giá gốc 80.000đ).
* Người lớn: Giá gốc 80.000đ.

```javascript
let age = 12;
const ticketPrice = 80000;
let finalPrice = 0;

if (age < 5) {
  finalPrice = 0;
} else if (age >= 5 && age <= 18) {
  finalPrice = ticketPrice * 0.5;
} else {
  finalPrice = ticketPrice;
}

console.log("Giá vé cuối cùng của em là:", finalPrice + "đ");
```

### Bài tập thực hành
Các em hãy viết chương trình tính thuế thu nhập cá nhân đơn giản dựa trên thu nhập tháng:
- Thu nhập từ 0 đến 9 triệu: Thuế suất 0%.
- Thu nhập trên 9 triệu đến 15 triệu: Thuế suất 10% cho phần vượt quá 9 triệu.
- Thu nhập trên 15 triệu: Thuế suất 15% cho phần vượt quá 15 triệu cộng thêm mức thuế cố định của bậc trước.

---

## 🧪 Câu hỏi ôn tập
::: details 1. Có thể viết cấu trúc rẽ nhánh ngắn gọn mà không cần dùng `if-else` không?
Có. Đối với điều kiện đơn giản, các em có thể sử dụng toán tử ba ngôi (Ternary Operator): `điều_kiện ? giá_trị_nếu_đúng : giá_trị_nếu_sai`.
:::
