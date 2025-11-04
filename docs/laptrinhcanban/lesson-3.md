# Buổi 3: Toán tử và biểu thức

## 🎯 Mục tiêu học tập

Sau buổi học này, sinh viên sẽ:
- Nắm vững các toán tử số học (+, -, *, /, %)
- Hiểu thứ tự ưu tiên của các toán tử
- Sử dụng toán tử gán và toán tử tăng/giảm
- Áp dụng toán tử so sánh và logic
- Viết được các biểu thức phức tạp để giải quyết bài toán

---

## 📘 Nội dung chính

### 1. Toán tử số học (Arithmetic Operators)

| Toán tử | Tên | Ví dụ | Kết quả |
|---------|-----|-------|---------|
| `+` | Cộng | `5 + 3` | `8` |
| `-` | Trừ | `10 - 4` | `6` |
| `*` | Nhân | `6 * 7` | `42` |
| `/` | Chia | `15 / 3` | `5` |
| `%` | Chia lấy dư (modulo) | `17 % 5` | `2` |

**Lưu ý:**
- Với số nguyên, phép chia `/` cho kết quả là phần nguyên
- `%` chỉ dùng cho số nguyên

**Ví dụ:**
```c
int a = 17 / 5;   // a = 3 (phần nguyên)
int b = 17 % 5;   // b = 2 (phần dư)
float c = 17.0 / 5.0;  // c = 3.4 (chia thực)
```

### 2. Toán tử gán (Assignment Operators)

| Toán tử | Tương đương | Ví dụ |
|---------|-------------|-------|
| `=` | `a = b` | `a = 10;` |
| `+=` | `a = a + b` | `a += 5;` → `a = a + 5;` |
| `-=` | `a = a - b` | `a -= 3;` → `a = a - 3;` |
| `*=` | `a = a * b` | `a *= 2;` → `a = a * 2;` |
| `/=` | `a = a / b` | `a /= 2;` → `a = a / 2;` |
| `%=` | `a = a % b` | `a %= 3;` → `a = a % 3;` |

### 3. Toán tử tăng/giảm (Increment/Decrement)

```c
int a = 5;

a++;    // Tăng a lên 1 → a = 6
++a;    // Tăng a lên 1 → a = 7
a--;    // Giảm a đi 1 → a = 6
--a;    // Giảm a đi 1 → a = 5
```

**Sự khác biệt giữa `a++` và `++a`:**
```c
int a = 5;
int b = a++;  // b = 5, a = 6 (gán trước, tăng sau)

int c = 5;
int d = ++c;  // d = 6, c = 6 (tăng trước, gán sau)
```

### 4. Toán tử so sánh (Comparison Operators)

| Toán tử | Ý nghĩa | Ví dụ | Kết quả |
|---------|---------|-------|---------|
| `==` | Bằng | `5 == 5` | `true` |
| `!=` | Khác | `5 != 3` | `true` |
| `<` | Nhỏ hơn | `3 < 5` | `true` |
| `>` | Lớn hơn | `5 > 3` | `true` |
| `<=` | Nhỏ hơn hoặc bằng | `5 <= 5` | `true` |
| `>=` | Lớn hơn hoặc bằng | `5 >= 3` | `true` |

**Kết quả:** `true` (1) hoặc `false` (0)

### 5. Toán tử logic (Logical Operators)

| Toán tử | Ý nghĩa | Ví dụ | Kết quả |
|---------|---------|-------|---------|
| `&&` | VÀ (AND) | `(5 > 3) && (4 < 6)` | `true` |
| `||` | HOẶC (OR) | `(5 > 3) || (4 > 6)` | `true` |
| `!` | PHỦ ĐỊNH (NOT) | `!(5 > 3)` | `false` |

**Bảng chân lý:**

**AND (&&):**
| A | B | A && B |
|---|---|--------|
| true | true | true |
| true | false | false |
| false | true | false |
| false | false | false |

**OR (||):**
| A | B | A \|\| B |
|---|---|---------|
| true | true | true |
| true | false | true |
| false | true | true |
| false | false | false |

### 6. Thứ tự ưu tiên toán tử

1. `()` - Dấu ngoặc (ưu tiên cao nhất)
2. `++`, `--` - Tăng/giảm
3. `*`, `/`, `%` - Nhân, chia, modulo
4. `+`, `-` - Cộng, trừ
5. `<`, `>`, `<=`, `>=` - So sánh
6. `==`, `!=` - So sánh bằng
7. `&&` - AND
8. `||` - OR
9. `=` - Gán (ưu tiên thấp nhất)

**Ví dụ:**
```c
int ketQua = 5 + 3 * 2;        // ketQua = 11 (nhân trước)
int ketQua2 = (5 + 3) * 2;     // ketQua2 = 16 (ngoặc trước)
bool check = (5 > 3) && (4 < 6); // check = true
```

---

## 💻 Ví dụ minh họa

### Ví dụ 1: Tính toán số học cơ bản

```c
#include <stdio.h>

int main() {
    int a = 17, b = 5;
    
    cout << "a = " << a << ", b = " << b << endl;
    cout << "a + b = " << (a + b) << endl;
    cout << "a - b = " << (a - b) << endl;
    cout << "a * b = " << (a * b) << endl;
    cout << "a / b = " << (a / b) << endl;
    cout << "a % b = " << (a % b) << endl;
    
    return 0;
}
```

**Kết quả:**
```
a = 17, b = 5
a + b = 22
a - b = 12
a * b = 85
a / b = 3
a % b = 2
```

### Ví dụ 2: Toán tử gán

```c
#include <stdio.h>

int main() {
    int x = 10;
    
    cout << "Gia tri ban dau: x = " << x << endl;
    
    x += 5;  // x = x + 5
    cout << "Sau x += 5: x = " << x << endl;
    
    x -= 3;  // x = x - 3
    cout << "Sau x -= 3: x = " << x << endl;
    
    x *= 2;  // x = x * 2
    cout << "Sau x *= 2: x = " << x << endl;
    
    x /= 4;  // x = x / 4
    cout << "Sau x /= 4: x = " << x << endl;
    
    return 0;
}
```

### Ví dụ 3: Toán tử tăng/giảm

```c
#include <stdio.h>

int main() {
    int a = 5;
    int b, c;
    
    b = a++;  // Gán trước, tăng sau
    cout << "a = " << a << ", b = " << b << endl;  // a = 6, b = 5
    
    c = ++a;  // Tăng trước, gán sau
    cout << "a = " << a << ", c = " << c << endl;  // a = 7, c = 7
    
    return 0;
}
```

### Ví dụ 4: Toán tử so sánh và logic

```c
#include <stdio.h>

int main() {
    int diem = 8;
    int tuoi = 20;
    
    // Toán tử so sánh
    cout << "diem == 8: " << (diem == 8) << endl;      // true (1)
    cout << "diem != 5: " << (diem != 5) << endl;      // true (1)
    cout << "diem > 7: " << (diem > 7) << endl;        // true (1)
    cout << "diem < 5: " << (diem < 5) << endl;        // false (0)
    
    // Toán tử logic
    cout << "(diem >= 5) && (diem <= 10): " 
         << ((diem >= 5) && (diem <= 10)) << endl;     // true
    
    cout << "(diem < 5) || (tuoi >= 18): " 
         << ((diem < 5) || (tuoi >= 18)) << endl;      // true
    
    cout << "!(diem < 5): " << (!(diem < 5)) << endl;  // true
    
    return 0;
}
```

### Ví dụ 5: Tính tiền điện theo bậc thang

```c
#include <stdio.h>

int main() {
    int soDien;
    float tienDien = 0;
    
    cout << "Nhap so dien tieu thu (kWh): ";
    cin >> soDien;
    
    // Bậc 1: 0-50 kWh: 1,800 VND/kWh
    if (soDien > 50) {
        tienDien += 50 * 1800;
        soDien -= 50;
    } else {
        tienDien += soDien * 1800;
        soDien = 0;
    }
    
    // Bậc 2: 51-100 kWh: 2,300 VND/kWh
    if (soDien > 0 && soDien <= 50) {
        tienDien += soDien * 2300;
        soDien -= 50;
    } else if (soDien > 50) {
        tienDien += 50 * 2300;
        soDien -= 50;
    }
    
    // Bậc 3: > 100 kWh: 2,900 VND/kWh
    if (soDien > 0) {
        tienDien += soDien * 2900;
    }
    
    cout << "Tong tien dien: " << tienDien << " VND" << endl;
    
    return 0;
}
```

### Ví dụ 6: Kiểm tra số chẵn/lẻ và chia hết

```c
#include <stdio.h>

int main() {
    int so;
    
    cout << "Nhap mot so nguyen: ";
    cin >> so;
    
    // Kiểm tra chẵn/lẻ
    if (so % 2 == 0) {
        cout << so << " la so chan" << endl;
    } else {
        cout << so << " la so le" << endl;
    }
    
    // Kiểm tra chia hết cho 3 và 5
    if (so % 3 == 0 && so % 5 == 0) {
        cout << so << " chia het cho ca 3 va 5" << endl;
    } else if (so % 3 == 0) {
        cout << so << " chi chia het cho 3" << endl;
    } else if (so % 5 == 0) {
        cout << so << " chi chia het cho 5" << endl;
    } else {
        cout << so << " khong chia het cho 3 va 5" << endl;
    }
    
    return 0;
}
```

---

## 🧠 Bài tập thực hành

### Bài tập cơ bản

**Bài 1:** Viết chương trình nhập 2 số, tính và in:
- Tổng, hiệu, tích, thương
- Phần dư của phép chia
- Trung bình cộng của 2 số

**Bài 2:** Viết chương trình nhập bán kính, tính:
- Chu vi hình tròn (C = 2πr)
- Diện tích hình tròn (S = πr²)
- Thể tích hình cầu (V = 4/3πr³)

**Bài 3:** Viết chương trình đổi thời gian:
- Nhập số giây, đổi sang giờ : phút : giây
- Ví dụ: 3665 giây = 1 giờ 1 phút 5 giây

**Bài 4:** Viết chương trình nhập 3 số, tìm:
- Số lớn nhất
- Số nhỏ nhất
- Trung bình cộng

**Bài 5:** Viết chương trình tính tổng các chữ số của một số:
- Ví dụ: 1234 → Tổng = 1 + 2 + 3 + 4 = 10

### Bài tập nâng cao

**Bài 6:** Viết chương trình tính lương nhân viên:
- Lương cơ bản: 5,000,000 VND
- Phụ cấp ăn trưa: 730,000 VND
- Phụ cấp xăng xe: 500,000 VND
- Thưởng: 10% lương cơ bản nếu làm > 22 ngày/tháng
- Tính tổng lương thực nhận (sau khi trừ BHXH, BHYT, BHTN = 10.5%)

**Bài 7:** Viết chương trình tính điểm học phần:
- Điểm chuyên cần (CC): hệ số 0.1
- Điểm giữa kỳ (GK): hệ số 0.3
- Điểm cuối kỳ (CK): hệ số 0.6
- Điểm học phần = CC×0.1 + GK×0.3 + CK×0.6
- Nhập 3 điểm, tính và in điểm học phần

**Bài 8:** Viết chương trình kiểm tra một số có phải là:
- Số chẵn
- Chia hết cho 3
- Chia hết cho cả 3 và 5
- Số có 3 chữ số (100-999)

**Bài 9:** Viết chương trình tính tiền gửi ngân hàng:
- Nhập số tiền gửi, lãi suất (%/năm), số tháng gửi
- Tính số tiền nhận được (lãi kép): `Số tiền nhận = Số tiền gửi × (1 + lãi suất/100)^số tháng`

---

## 📝 Lưu ý quan trọng

1. **Thứ tự ưu tiên:** Luôn dùng `()` để làm rõ thứ tự tính toán
2. **Phép chia:** Với số nguyên, kết quả là phần nguyên. Muốn kết quả thập phân, dùng `float` hoặc `double`
3. **Modulo `%`:** Chỉ dùng với số nguyên
4. **So sánh:** Dùng `==` để so sánh bằng, không phải `=`
5. **Logic:** `&&` (AND) và `||` (OR) rất hữu ích trong điều kiện phức tạp

---

## ✅ Kiểm tra kiến thức

1. `17 / 5` cho kết quả bao nhiêu? `17 % 5` cho kết quả bao nhiêu?

2. Sự khác biệt giữa `a++` và `++a`?

3. Kết quả của biểu thức `(5 + 3) * 2 - 4` là bao nhiêu?

4. Kết quả của `(5 > 3) && (4 > 6)` là gì?

5. Làm thế nào để kiểm tra một số `n` có chia hết cho 3?

---

## 🎯 Tóm tắt

- ✅ Đã học các toán tử số học: `+`, `-`, `*`, `/`, `%`
- ✅ Biết sử dụng toán tử gán: `+=`, `-=`, `*=`, `/=`, `%=`
- ✅ Hiểu toán tử tăng/giảm: `++`, `--`
- ✅ Nắm toán tử so sánh: `==`, `!=`, `<`, `>`, `<=`, `>=`
- ✅ Sử dụng toán tử logic: `&&`, `||`, `!`
- ✅ Áp dụng thứ tự ưu tiên toán tử để viết biểu thức phức tạp

**Bài tiếp theo:** [Buổi 4: Cấu trúc điều kiện (if-else, switch)](./lesson-4.md)
