# Buổi 3: Toán tử và Biểu thức trong ngôn ngữ C

## 🎯 Mục tiêu bài học

Chào các em, sau buổi học hôm nay, thầy mong các em sẽ:

-   Hiểu và sử dụng thành thạo các toán tử số học trong C (`+`, `-`, `*`, `/`, `%`)
-   Biết cách sử dụng các toán tử gán, toán tử tăng/giảm
-   Áp dụng được toán tử so sánh và toán tử logic vào bài toán
-   Nắm thứ tự ưu tiên khi viết biểu thức phức tạp

---

## 📘 Nội dung chi tiết

### 1. Toán tử số học (Arithmetic Operators)

Các toán tử số học trong C:

| Toán tử | Ý nghĩa     | Ví dụ    | Kết quả |
| ------- | ----------- | -------- | ------- |
| `+`     | Cộng        | `5 + 3`  | `8`     |
| `-`     | Trừ         | `10 - 4` | `6`     |
| `*`     | Nhân        | `6 * 7`  | `42`    |
| `/`     | Chia nguyên | `15 / 3` | `5`     |
| `%`     | Chia lấy dư | `17 % 5` | `2`     |

**Các em các em lưu ý cho các em:**

-   Khi chia 2 số nguyên (`int`), kết quả lấy phần nguyên.
-   Toán tử `%` (modulo) dùng để lấy số dư, chỉ áp dụng cho số nguyên.

**Ví dụ minh hoạ:**

```c
int a = 17 / 5;       // a = 3
int b = 17 % 5;       // b = 2
float c = 17.0 / 5.0; // c = 3.4
```

### 2. Toán tử gán (Assignment Operators)

Toán tử gán dùng để gán giá trị cho biến, hoặc kết hợp với các toán tử số học để viết ngắn gọn:

| Toán tử | Nghĩa tương đương | Ví dụ                  |
| ------- | ----------------- | ---------------------- |
| `=`     | Gán               | `a = 10;`              |
| `+=`    | Cộng rồi gán      | `a += 5; // a = a + 5` |
| `-=`    | Trừ rồi gán       | `a -= 3; // a = a - 3` |
| `*=`    | Nhân rồi gán      | `a *= 2; // a = a * 2` |
| `/=`    | Chia rồi gán      | `a /= 2; // a = a / 2` |
| `%=`    | Chia dư rồi gán   | `a %= 3; // a = a % 3` |

### 3. Toán tử tăng/giảm (Increment/Decrement Operators)

Hai toán tử này giúp tăng hoặc giảm giá trị biến số nguyên lên 1 đơn vị:

```c
int a = 5;

a++;    // sau lệnh này: a = 6
++a;    // sau lệnh này: a = 7
a--;    // sau lệnh này: a = 6
--a;    // sau lệnh này: a = 5
```

**Phân biệt `a++` và `++a`:**

```c
int a = 5;
int b = a++; // b = 5, a = 6 (gán trước, tăng sau)
int c = 5;
int d = ++c; // d = 6, c = 6 (tăng trước, gán sau)
```

### 4. Toán tử so sánh (Comparison Operators)

Các em dùng toán tử so sánh để kiểm tra quan hệ giữa các giá trị:

| Toán tử | Ý nghĩa           | Ví dụ    | Kết quả  |
| ------- | ----------------- | -------- | -------- |
| `==`    | Bằng nhau         | `5 == 5` | 1 (true) |
| `!=`    | Khác nhau         | `5 != 3` | 1        |
| `<`     | Nhỏ hơn           | `3 < 5`  | 1        |
| `>`     | Lớn hơn           | `5 > 3`  | 1        |
| `<=`    | Nhỏ hơn hoặc bằng | `5 <= 5` | 1        |
| `>=`    | Lớn hơn hoặc bằng | `5 >= 3` | 1        |

Kết quả trả về là `1` (đúng) hoặc `0` (sai).

### 5. Toán tử logic (Logical Operators)

Dùng kết hợp các điều kiện:

| Toán tử | Ý nghĩa  | Ví dụ                | Kết quả   |
| ------- | -------- | -------------------- | --------- | -------- | --- | -------- | --- |
| `&&`    | VÀ (AND) | `(5 > 3) && (4 < 6)` | 1         |
| `       |          | `                    | HOẶC (OR) | `(5 > 3) |     | (4 > 6)` | 1   |
| `!`     | PHỦ ĐỊNH | `!(5 > 3)`           | 0         |

**Bảng chân lý toán tử AND (&&):**

| A     | B     | A && B |
| ----- | ----- | ------ |
| true  | true  | true   |
| true  | false | false  |
| false | true  | false  |
| false | false | false  |

**Bảng chân lý toán tử OR (||):**

| A     | B     | A \|\| B |
| ----- | ----- | -------- |
| true  | true  | true     |
| true  | false | true     |
| false | true  | true     |
| false | false | false    |

### 6. Thứ tự ưu tiên toán tử trong C

Khi viết nhiều toán tử trong một biểu thức, ngôn ngữ C sẽ thực hiện theo thứ tự sau:

1. `()` - Dấu ngoặc (cao nhất)
2. `++`, `--` - Tăng/giảm
3. `*`, `/`, `%` - Nhân, chia, chia dư
4. `+`, `-` - Cộng, trừ
5. `<`, `>`, `<=`, `>=` - So sánh
6. `==`, `!=` - So sánh bằng/khác
7. `&&` - AND
8. `||` - OR
9. `=` - Gán (thấp nhất)

**Ví dụ:**

```c
int ketQua = 5 + 3 * 2;          // ketQua = 11 (nhân trước, cộng sau)
int ketQua2 = (5 + 3) * 2;       // ketQua2 = 16 (ngoặc trước)
int check = (5 > 3) && (4 < 6);  // check = 1 (true)
```

---

## 💻 Ví dụ minh hoạ (code C tiêu chuẩn)

### Ví dụ 1: Phép toán số học cơ bản

```c
#include <stdio.h>

int main() {
    int a = 17, b = 5;

    printf("a = %d, b = %d\n", a, b);
    printf("a + b = %d\n", a + b);
    printf("a - b = %d\n", a - b);
    printf("a * b = %d\n", a * b);
    printf("a / b = %d\n", a / b);
    printf("a %% b = %d\n", a % b);

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

    printf("Gia tri ban dau: x = %d\n", x);

    x += 5; // x = x + 5
    printf("Sau x += 5: x = %d\n", x);

    x -= 3; // x = x - 3
    printf("Sau x -= 3: x = %d\n", x);

    x *= 2; // x = x * 2
    printf("Sau x *= 2: x = %d\n", x);

    x /= 4; // x = x / 4
    printf("Sau x /= 4: x = %d\n", x);

    return 0;
}
```

### Ví dụ 3: Toán tử tăng/giảm

```c
#include <stdio.h>

int main() {
    int a = 5;
    int b, c;

    b = a++; // Gán b = a (b = 5), xong tăng a lên (a = 6)
    printf("a = %d, b = %d\n", a, b);

    c = ++a; // Tăng a trước (a = 7), rồi gán cho c
    printf("a = %d, c = %d\n", a, c);

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
    printf("diem == 8: %d\n", diem == 8);   // 1 (true)
    printf("diem != 5: %d\n", diem != 5);   // 1 (true)
    printf("diem > 7: %d\n", diem > 7);     // 1 (true)
    printf("diem < 5: %d\n", diem < 5);     // 0 (false)

    // Toán tử logic
    printf("(diem >= 5) && (diem <= 10): %d\n", (diem >= 5) && (diem <= 10)); // 1
    printf("(diem < 5) || (tuoi >= 18): %d\n", (diem < 5) || (tuoi >= 18));   // 1
    printf("!(diem < 5): %d\n", !(diem < 5));                                 // 1

    return 0;
}
```

### Ví dụ 5: Tính tiền điện theo bậc (giản lược)

```c
#include <stdio.h>

int main() {
    int soDien;
    float tienDien = 0;

    printf("Nhap so dien tieu thu (kWh): ");
    scanf("%d", &soDien);

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
        soDien = 0;
    } else if (soDien > 50) {
        tienDien += 50 * 2300;
        soDien -= 50;
    }

    // Bậc 3: > 100 kWh: 2,900 VND/kWh
    if (soDien > 0) {
        tienDien += soDien * 2900;
    }

    printf("Tong tien dien: %.0f VND\n", tienDien);

    return 0;
}
```

### Ví dụ 6: Kiểm tra số chẵn/lẻ, chia hết cho 3, 5

```c
#include <stdio.h>

int main() {
    int so;

    printf("Nhap mot so nguyen: ");
    scanf("%d", &so);

    // Kiểm tra chẵn/lẻ
    if (so % 2 == 0) {
        printf("%d la so chan\n", so);
    } else {
        printf("%d la so le\n", so);
    }

    // Kiểm tra chia hết cho 3 và 5
    if (so % 3 == 0 && so % 5 == 0) {
        printf("%d chia het cho ca 3 va 5\n", so);
    } else if (so % 3 == 0) {
        printf("%d chi chia het cho 3\n", so);
    } else if (so % 5 == 0) {
        printf("%d chi chia het cho 5\n", so);
    } else {
        printf("%d khong chia het cho 3 va 5\n", so);
    }

    return 0;
}
```

---

## 🧠 Bài tập thực hành cho các em

### Bài tập cơ bản

**Bài 1:** Nhập từ bàn phím 2 số nguyên, in ra:

-   Tổng, hiệu, tích, thương, phần dư
-   Trung bình cộng của 2 số

**Bài 2:** Nhập bán kính r, tính:

-   Chu vi hình tròn (`C = 2 * pi * r`)
-   Diện tích hình tròn (`S = pi * r * r`)
-   Thể tích hình cầu (`V = 4/3 * pi * r * r * r`)

**Bài 3:** Nhập số giây, đổi sang giờ, phút, giây  
(Ví dụ: 3665 giây = 1 giờ 1 phút 5 giây)

**Bài 4:** Nhập 3 số nguyên, tìm:

-   Số lớn nhất, nhỏ nhất, trung bình cộng

**Bài 5:** Nhập một số nguyên, tính tổng các chữ số  
(Ví dụ: 1234 → Tổng = 1 + 2 + 3 + 4 = 10)

### Bài nâng cao

**Bài 6:** Tính lương thực nhận của nhân viên (Biết lương cơ bản, phụ cấp ăn trưa, phụ cấp xăng xe. Nếu làm > 22 ngày/tháng thì thưởng 10% lương cơ bản. Trừ các khoản BHXH, BHYT, BHTN = 10.5% tổng lương trước thuế)

**Bài 7:** Nhập điểm chuyên cần (CC), giữa kỳ (GK), cuối kỳ (CK). Tính điểm học phần theo công thức:  
`Diem hoc phan = CC*0.1 + GK*0.3 + CK*0.6`

**Bài 8:** Kiểm tra một số nguyên xem:

-   Có phải số chẵn không?
-   Có chia hết cho 3 hoặc cho cả 3 và 5?
-   Có phải là số có 3 chữ số không?

**Bài 9:** Nhập số tiền gửi, lãi suất (%/năm), số tháng gửi. Tính số tiền nhận được theo lãi kép:  
`So tien nhan duoc = So tien gui * (1 + lai suat/100)^so_thang`

---

## 📝 Các em các em lưu ý thầy nhắc lại

1. Khi viết biểu thức phức tạp, các em hãy dùng dấu ngoặc `()` để tránh sai thứ tự thực hiện.
2. Khi chia 2 số nguyên, kết quả là nguyên. Nếu muốn lấy kết quả thập phân, phải dùng biến kiểu `float` hoặc `double`.
3. Dấu `%` (modulo) chỉ dùng được với số nguyên.
4. Để so sánh bằng, dùng `==` (không phải `=`).
5. Toán tử logic `&&` (AND), `||` (OR) thường dùng trong điều kiện của lệnh `if`.

---

## ✅ Ôn tập kiểm tra kiến thức

1. `17 / 5` ra bao nhiêu? `17 % 5` ra bao nhiêu?
2. `a++` và `++a` khác nhau điểm nào?
3. `(5 + 3) * 2 - 4` kết quả là mấy?
4. `(5 > 3) && (4 > 6)` kết quả thế nào?
5. Làm thế nào kiểm tra một số `n` chia hết cho 3? (Viết code minh hoạ)

---

## 🎯 Tổng kết bài học

-   Các em đã biết các toán tử số học: `+`, `-`, `*`, `/`, `%`
-   Dùng được các toán tử gán và toán tử kết hợp: `+=`, `-=`, `*=`, `/=`, `%=`
-   Hiểu và sử dụng được toán tử tăng/giảm: `++`, `--`
-   Phân biệt và vận dụng toán tử so sánh: `==`, `!=`, `<`, `>`, `<=`, `>=`
-   Áp dụng các toán tử logic khi viết điều kiện (`&&`, `||`, `!`)
-   Nắm được thứ tự ưu tiên toán tử trong biểu thức

**Tiết sau:** [Buổi 4: Cấu trúc điều kiện (if-else, switch)](./lesson-4.md)
