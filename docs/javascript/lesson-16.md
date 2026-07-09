# Buổi 16: Dự án Mini tổng kết

Xin chào các em! 🎉

Hôm nay là buổi học cuối cùng của khóa học JavaScript cơ bản. Thầy trò mình sẽ cùng nhau thực hành lắp ghép toàn bộ kiến thức đã học để xây dựng ứng dụng máy tính cầm tay (Calculator) chạy trực tiếp trên giao diện trình duyệt.

## 🎯 Mục tiêu buổi học
> **Thầy mong muốn sau buổi học này, các em sẽ đạt được:**
1. ✅ Tổng hợp kiến thức biến, hàm, mảng và DOM Event.
2. ✅ Tự tay hoàn thiện dự án thực tế đầu tiên.
3. ✅ Biết cách tổ chức code giao diện mạch lạc.

---

## 📖 Hướng dẫn cấu trúc code Calculator mẫu

Các em có thể tham khảo cấu trúc code xử lý logic cơ bản sau đây cho máy tính:

```javascript
let currentInput = ""; // Lưu trữ biểu thức người dùng bấm

// Hàm nhận ký tự khi bấm nút
function appendCharacter(char) {
  currentInput += char;
  updateDisplay();
}

// Hàm cập nhật màn hình hiển thị
function updateDisplay() {
  let displayEl = document.getElementById("display");
  displayEl.innerText = currentInput || "0";
}

// Hàm xóa toàn bộ màn hình
function clearDisplay() {
  currentInput = "";
  updateDisplay();
}

// Hàm tính toán kết quả khi bấm nút '='
function calculateResult() {
  try {
    // Dùng eval để tính toán nhanh biểu thức chuỗi
    let result = eval(currentInput);
    currentInput = String(result);
    updateDisplay();
  } catch (error) {
    currentInput = "";
    document.getElementById("display").innerText = "Lỗi biểu thức";
  }
}
```

Chúc các em hoàn thành xuất sắc dự án cuối khóa của mình! Hẹn gặp lại các em ở khóa học JavaScript Nâng cao với các dự án lớn hơn! 🚀
