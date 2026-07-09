# Buổi 2: Thực hành tính toán cơ bản

Xin chào các em! 👋

Hôm nay chúng ta sẽ cùng nhau luyện tập sử dụng biến và viết các phép tính toán học cơ bản trong JavaScript.

## 🎯 Mục tiêu buổi học
> **Thầy mong muốn sau buổi học này, các em sẽ đạt được:**
1. ✅ Sử dụng thành thạo các toán tử số học: `+`, `-`, `*`, `/`, `%`.
2. ✅ Thực hiện chuyển đổi kiểu dữ liệu cơ bản (ép kiểu từ chuỗi sang số).
3. ✅ Giải quyết được các bài toán thực tế bằng code.

---

## 📖 Lý thuyết cốt lõi

### 1. Các toán tử số học cơ bản
* Phép cộng: `+`
* Phép trừ: `-`
* Phép nhân: `*`
* Phép chia: `/`
* Chia lấy dư: `%`

### 2. Ép kiểu dữ liệu (Type Conversion)
Khi lấy dữ liệu từ các ô nhập liệu (Input) trên trang web, dữ liệu thường ở dạng chuỗi (String). Chúng ta phải đổi nó sang dạng số (Number) trước khi tính toán.

```javascript
let strNumber = "10";
let realNumber = Number(strNumber); // Đổi sang số 10
```

---

## 💻 Ví dụ minh họa & Thực hành

### Ví dụ: Tính chu vi và diện tích hình chữ nhật
```javascript
let width = 10;
let height = 5;

let perimeter = (width + height) * 2;
let area = width * height;

console.log("Chu vi:", perimeter); // 30
console.log("Diện tích:", area);    // 50
```

### Bài tập thực hành
Các em hãy viết chương trình JavaScript thực hiện:
1. Khai báo biến chứa bán kính của hình tròn.
2. Tính chu vi và diện tích hình tròn đó (Sử dụng công thức toán học với số PI = 3.14).
3. In kết quả ra màn hình console.

---

## 🧪 Câu hỏi ôn tập
::: details 1. Phép toán `5 % 2` trả về kết quả bao nhiêu?
Kết quả là `1`. Phép toán `%` là chia lấy dư, 5 chia 2 dư 1.
:::

::: details 2. Nếu thực hiện phép cộng `"5" + 5` thì kết quả sẽ là gì?
Kết quả là chuỗi `"55"`. Khi cộng một chuỗi với một số, JavaScript sẽ thực hiện phép nối chuỗi.
:::
