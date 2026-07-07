# Bài 5: Vòng lặp for trong C

## 🎯 Mục tiêu buổi học

> **Thầy mong muốn sau buổi học này, các em sẽ đạt được:**

Chào các em! Sau buổi học hôm nay, các em cần:
1. ✅ Hiểu được khái niệm vòng lặp và lý do cần dùng vòng lặp trong lập trình.
2. ✅ Biết cách sử dụng vòng lặp `for` trong ngôn ngữ C.
3. ✅ Nắm rõ cấu trúc hoạt động của vòng lặp `for` (gồm 3 phần: khởi tạo, điều kiện, bước nhảy).
4. ✅ Vận dụng vòng lặp để giải các bài toán lặp lại đơn giản.
5. ✅ Biết dùng lệnh `break` và `continue` trong vòng lặp.
## 📘 Nội dung bài học

### 1. Tại sao phải dùng vòng lặp?

Trong thực tế, rất nhiều bài toán yêu cầu thực hiện lặp đi lặp lại một công việc, ví dụ như:

-   In ra các số từ 1 đến 100.
-   Tính tổng từ 1 đến n.
-   Nhập điểm cho 30 sinh viên.
-   In bảng cửu chương...
    Nếu không có vòng lặp, thầy trò mình sẽ phải viết rất nhiều dòng lệnh giống nhau. Vòng lặp sinh ra để giúp thầy trò mình tự động hóa việc này.

### 2. Cấu trúc vòng lặp for trong C

**Cú pháp tổng quát:**

```c
for (khởi_tạo; điều_kiện; bước_nhảy) {
    // Các câu lệnh
}
```

**Thầy giải thích:**

-   **Khởi tạo:** Chạy đúng 1 lần đầu tiên. Thường dùng để khai báo và gán giá trị ban đầu cho biến đếm.
-   **Điều kiện:** Trước mỗi lần lặp, điều kiện này sẽ được kiểm tra. Nếu đúng thì vòng lặp thực hiện tiếp, sai thì dừng.
-   **Bước nhảy:** Thực hiện sau mỗi lần lặp. Thường gặp nhất là tăng hoặc giảm biến đếm.
-   **Thân vòng lặp:** Các lệnh nằm giữa 2 dấu `{ }`, sẽ được thực hiện lặp lại.

**Ví dụ cơ bản:**

```c
#include <stdio.h>

int main() {
    int i;
    for (i = 1; i <= 10; i++) {
        printf("%d ", i);
    }
    // Kết quả: 1 2 3 4 5 6 7 8 9 10
    return 0;
}
```

**Thứ tự thực hiện:**

1. Khởi tạo `i = 1`.
2. Kiểm tra điều kiện: `i <= 10?` Nếu đúng, thực hiện phần thân.
3. Sau phần thân, thực hiện bước nhảy: `i++` (tăng i lên 1).
4. Quay lại bước 2.
5. Khi điều kiện sai (`i > 10`), thoát vòng lặp.

### 3. Một số dạng vòng lặp for thường gặp

**a) Đếm tăng:**

```c
for (i = 1; i <= 10; i++) {
    printf("%d ", i);
}
```

**b) Đếm giảm:**

```c
for (i = 10; i >= 1; i--) {
    printf("%d ", i);
}
```

**c) Đếm cách quãng (bước nhảy khác 1):**

```c
for (i = 0; i <= 100; i += 5) {
    printf("%d ", i);  // In ra 0, 5, 10, ..., 100
}
```

**d) Biến đếm là ký tự:**

```c
for (char c = 'A'; c <= 'Z'; c++) {
    printf("%c ", c);  // In từ A đến Z
}
```

### 4. Lệnh `break` và `continue` trong vòng lặp

-   **`break`:** Khi gặp lệnh này bên trong vòng lặp, chương trình sẽ thoát ngay khỏi vòng lặp, không thực hiện nữa.

Ví dụ:

```c
for (i = 1; i <= 10; i++) {
    if (i == 5) break; // Khi i = 5 thì dừng vòng lặp
    printf("%d ", i);
}
// Kết quả: 1 2 3 4
```

-   **`continue`:** Khi gặp lệnh này trong vòng lặp, chương trình bỏ qua phần còn lại của vòng lặp tại lần lặp đó và chuyển sang lần lặp tiếp theo.

Ví dụ:

```c
for (i = 1; i <= 10; i++) {
    if (i % 2 == 0) continue; // Bỏ qua số chẵn
    printf("%d ", i);
}
// Kết quả: 1 3 5 7 9
```

### 5. Vòng lặp for vô hạn

Nếu trong dấu điều kiện của for để trống, vòng lặp sẽ chạy mãi không dừng, chỉ dừng khi gặp lệnh `break`.

```c
for (;;) {
    // Vòng lặp vô hạn
    // Nhớ dùng break ở điều kiện nào đó để thoát khỏi vòng lặp!
}
```

---

## 💻 Ví dụ minh họa

### Ví dụ 1: In các số từ 1 đến n

```c
#include <stdio.h>

int main() {
    int n, i;
    printf("Nhap n: ");
    scanf("%d", &n);

    printf("Cac so tu 1 den %d: ", n);
    for (i = 1; i <= n; i++) {
        printf("%d ", i);
    }
    return 0;
}
```

### Ví dụ 2: Tính tổng các số từ 1 đến n

```c
#include <stdio.h>

int main() {
    int n, i, tong = 0;
    printf("Nhap n: ");
    scanf("%d", &n);

    for (i = 1; i <= n; i++) {
        tong += i;
    }
    printf("Tong cac so tu 1 den %d la: %d\n", n, tong);
    return 0;
}
```

### Ví dụ 3: Tính giai thừa n! (n!)

```c
#include <stdio.h>

int main() {
    int n, i;
    long long giaiThua = 1;
    printf("Nhap n: ");
    scanf("%d", &n);

    if (n < 0) {
        printf("Khong tinh duoc giai thua so am!\n");
    } else {
        for (i = 1; i <= n; i++) {
            giaiThua *= i;
        }
        printf("%d! = %lld\n", n, giaiThua);
    }
    return 0;
}
```

### Ví dụ 4: In bảng cửu chương

```c
#include <stdio.h>

int main() {
    int n, i;
    printf("Nhap bang cuu chuong muon in (2-9): ");
    scanf("%d", &n);

    printf("Bang cuu chuong %d:\n", n);
    for (i = 1; i <= 10; i++) {
        printf("%d x %d = %d\n", n, i, n * i);
    }
    return 0;
}
```

### Ví dụ 5: Đếm số chẵn, số lẻ trong khoảng

```c
#include <stdio.h>

int main() {
    int a, b, i, demChan = 0, demLe = 0;
    printf("Nhap khoang [a, b]: ");
    scanf("%d%d", &a, &b);

    for (i = a; i <= b; i++) {
        if (i % 2 == 0)
            demChan++;
        else
            demLe++;
    }
    printf("So chan: %d\n", demChan);
    printf("So le: %d\n", demLe);
    return 0;
}
```

### Ví dụ 6: Tính tổng các số chẵn từ 1 đến n

```c
#include <stdio.h>

int main() {
    int n, i, tong = 0;
    printf("Nhap n: ");
    scanf("%d", &n);

    for (i = 2; i <= n; i += 2) {
        tong += i;
    }
    printf("Tong cac so chan tu 1 den %d la: %d\n", n, tong);
    return 0;
}
```

### Ví dụ 7: Kiểm tra số nguyên tố

```c
#include <stdio.h>
#include <stdbool.h>

int main() {
    int n, i;
    bool laSoNguyenTo = true;
    printf("Nhap so nguyen duong: ");
    scanf("%d", &n);

    if (n < 2) {
        laSoNguyenTo = false;
    } else {
        for (i = 2; i < n; i++) {
            if (n % i == 0) {
                laSoNguyenTo = false;
                break;
            }
        }
    }
    if (laSoNguyenTo)
        printf("%d la so nguyen to!\n", n);
    else
        printf("%d khong phai so nguyen to!\n", n);
    return 0;
}
```

### Ví dụ 8: Tìm số lớn nhất trong n số

```c
#include <stdio.h>

int main() {
    int n, i, so, max;
    printf("Nhap so luong so: ");
    scanf("%d", &n);

    if (n > 0) {
        printf("Nhap so thu 1: ");
        scanf("%d", &max);

        for (i = 2; i <= n; i++) {
            printf("Nhap so thu %d: ", i);
            scanf("%d", &so);

            if (so > max) {
                max = so;
            }
        }
        printf("So lon nhat la: %d\n", max);
    }
    return 0;
}
```

---

## 🧠 Bài tập thực hành

### Bài tập cơ bản

1. Viết chương trình in các số từ n đến 1 (giảm dần).
2. Viết chương trình tính tổng: \( S = 1 + 2 + 3 + ... + n \)
3. Viết chương trình tính tổng bình phương: \( S = 1^2 + 2^2 + 3^2 + ... + n^2 \)
4. Viết chương trình in bảng cửu chương từ 2 đến 9.
5. Viết chương trình nhập n số, tính tổng và trung bình cộng.

### Bài tập trung bình

6. Viết chương trình in các số chẵn từ 1 đến n.
7. Viết chương trình tính tổng: \( S = 2 + 4 + 6 + ... + 2n \)
8. Viết chương trình tìm số lớn nhất và số nhỏ nhất trong n số.
9. Viết chương trình đếm số lượng số chia hết cho 3 trong khoảng [a, b].
10. Viết chương trình tính lũy thừa \( a^n \) (không dùng hàm pow).

### Bài tập nâng cao

11. Viết chương trình kiểm tra số hoàn hảo.
    -   Số hoàn hảo là số bằng tổng các ước của nó (không kể chính nó).
    -   Ví dụ: 6 là số hoàn hảo vì 6 = 1 + 2 + 3.
12. Viết chương trình in ra tất cả số nguyên tố trong khoảng [a, b].
13. Viết chương trình tính tổng: \( S = 1 - 2 + 3 - 4 + ... + (-1)^{n+1} \* n \)
14. Viết chương trình in ra hình tam giác số, ví dụ:

```
1
12
123
1234
12345
```

15. Viết chương trình tính tổng các chữ số của một số.
    -   Ví dụ: 1234 → Tổng = 1 + 2 + 3 + 4 = 10

---

## 📝 Các em các em lưu ý các em cần nhớ

1. Biến đếm trong for thường đặt là i, j, k (và chỉ có tác dụng trong vòng lặp).
2. Luôn đảm bảo có điều kiện dừng để tránh lặp vô hạn.
3. Bước nhảy có thể tăng, giảm hoặc thay đổi theo ý bài toán.
4. Biến khai báo trong for (ví dụ `int i;`) chỉ dùng được trong thân for.
5. Với n lớn, nên chú ý đến độ phức tạp thuật toán để tránh chương trình chạy chậm.

---

## ✅ Củng cố kiến thức

1. Vòng lặp `for (i = 1; i <= 10; i++)` sẽ chạy mấy lần?
2. Viết vòng lặp in các số từ 10 xuống 1.
3. Phân biệt lệnh `break` và `continue`.
4. Làm thế nào để tạo vòng lặp đếm cách 5 (0, 5, 10, 15,...)?

---

## 🎯 Tổng kết

-   Các em đã biết cấu trúc và cách sử dụng vòng lặp for trong ngôn ngữ C.
-   Hiểu rõ quá trình khởi tạo, điều kiện lặp, bước nhảy trong for.
-   Sử dụng được lệnh break để thoát vòng lặp và continue để bỏ qua lần lặp hiện tại.
-   Biết vận dụng vòng lặp for vào giải quyết các bài toán thực tiễn.

**Buổi sau thầy sẽ dạy tiếp:** [Buổi 6: Vòng lặp while và do-while](./lesson-6.md)

4. Làm thế nào để tạo vòng lặp đếm cách 5 (0, 5, 10, 15...)?

---

## 🎯 Tóm tắt

-   ✅ Đã học cấu trúc và cách sử dụng vòng lặp `for`
-   ✅ Hiểu cách vòng lặp hoạt động (khởi tạo, điều kiện, bước nhảy)
-   ✅ Biết sử dụng `break` để thoát vòng lặp
-   ✅ Biết sử dụng `continue` để bỏ qua lần lặp hiện tại
-   ✅ Áp dụng vòng lặp để giải các bài toán thực tế

**Bài tiếp theo:** [Buổi 6: Vòng lặp while và do-while](./lesson-6.md)
