# Dự án cuối khóa: Ứng dụng Máy tính bỏ túi (Mini Calculator)

## 🎯 Mục tiêu dự án
Dự án cuối khóa giúp các em tổng hợp lại toàn bộ kiến thức JavaScript cơ bản đã học từ khai báo biến, viết hàm xử lý logic toán học, làm việc với mảng/đối tượng cho đến việc bắt sự kiện Click chuột trên giao diện (DOM Event).

Các em sẽ xây dựng một ứng dụng máy tính cầm tay chạy trên trình duyệt có khả năng thực hiện các phép tính cộng, trừ, nhân, chia cơ bản.

## 🏗️ Yêu cầu chức năng
1. **Hiển thị giao diện**: Gồm màn hình kết quả và các phím số (0-9), phím phép tính (+, -, *, /), phím xóa (C) và phím bằng (=).
2. **Thực hiện phép tính**: Khi click vào các phím số và phép tính, màn hình sẽ cập nhật biểu thức toán học. Khi click phím `=`, máy tính sẽ tính toán và hiển thị kết quả.
3. **Phím xóa**: Phím `C` dùng để xóa toàn bộ biểu thức và reset màn hình về số 0.
4. **Xử lý ngoại lệ**: Tránh hiển thị lỗi khi biểu thức không hợp lệ (ví dụ: chia cho 0, bấm liên tiếp nhiều phép tính).

---

## 📅 Hướng dẫn triển khai từng bước
1. **Thiết kế HTML/CSS**:
   - Tạo khung chứa máy tính.
   - Tạo lưới các nút bấm bằng CSS Grid.
2. **Viết mã JavaScript**:
   - Khai báo các biến lưu trữ biểu thức hiện tại.
   - Viết hàm `appendCharacter(char)` để nối thêm ký tự số hoặc phép toán.
   - Viết hàm `clearDisplay()` để xóa màn hình.
   - Viết hàm `calculateResult()` để tính toán biểu thức (có thể dùng hàm `eval` hoặc tự viết logic lọc chuỗi an toàn).

---

## 📊 Tiêu chí đánh giá (Rubric)

| Tiêu chí | Điểm tối đa | Mô tả chi tiết |
|---|---|---|
| **Giao diện & Trải nghiệm** | 2.0đ | Giao diện gọn gàng, các nút bấm dễ click, kết quả hiển thị rõ ràng. |
| **Logic Phép tính** | 4.0đ | Thực hiện đúng các phép cộng, trừ, nhân, chia với các số thực. |
| **Chức năng Xóa (Clear)** | 2.0đ | Nút Clear hoạt động chính xác, dọn sạch dữ liệu cũ. |
| **Xử lý lỗi & Ngoại lệ** | 2.0đ | Không bị crash ứng dụng khi nhập sai cú pháp phép tính. |

Chúc các em làm bài tốt và đạt kết quả cao! 🚀
