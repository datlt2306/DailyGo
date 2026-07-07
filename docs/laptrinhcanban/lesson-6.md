# Buổi 6: Vòng lặp while và do-while

## 🎯 Mục tiêu buổi học

> **Thầy mong muốn sau buổi học này, các em sẽ đạt được:**

Chào các em, hôm nay thầy sẽ hướng dẫn về vòng lặp `while` và `do-while` trong ngôn ngữ C. Sau buổi học, các em cần:
1. ✅ Hiểu rõ điểm khác biệt giữa vòng lặp `for`, `while` và `do-while`.
2. ✅ Biết cách sử dụng đúng cú pháp và logic của `while`.
3. ✅ Biết cách dùng vòng lặp `do-while` vào tình huống thực tế.
4. ✅ Xác định khi nào dùng `while`, khi nào dùng `do-while`.
5. ✅ Vận dụng hai loại vòng lặp này cho các bài toán lặp không xác định trước số lần lặp.
## 📘 Nội dung chính

### 1. Vòng lặp while

**Cú pháp tổng quát:**

```c
while (dieu_kien) {
    // Các câu lệnh bên trong sẽ được thực hiện nếu điều kiện còn đúng
}
```

**Phân tích của thầy:**

-   Điều kiện được kiểm tra **trước** mỗi vòng lặp.
-   Nếu điều kiện sai từ đầu thì khối lệnh bên trong sẽ không chạy một lần nào cả.
-   Nếu điều kiện đúng, chương trình thực hiện các lệnh trong khối, sau đó kiểm tra lại điều kiện.

**Ví dụ minh họa:**

```c
#include <stdio.h>

int main() {
    int i = 1;
    while (i <= 10) {
        printf("%d ", i);
        i++;
    }
    // Kết quả: 1 2 3 4 5 6 7 8 9 10
    return 0;
}
```

### 2. Vòng lặp do-while

**Cú pháp của do-while:**

```c
do {
    // Câu lệnh sẽ chạy trước, sau đó kiểm tra điều kiện
} while (dieu_kien);
```

**Phân tích của thầy:**

-   Khối lệnh trong `do` luôn chạy **ít nhất một lần** trước khi kiểm tra điều kiện phía sau.
-   Dùng cho các trường hợp như nhập liệu, xác nhận người dùng, hoặc hiển thị menu nhiều lần.

**Ví dụ minh họa:**

```c
#include <stdio.h>

int main() {
    int i = 1;
    do {
        printf("%d ", i);
        i++;
    } while (i <= 10);
    // Kết quả: 1 2 3 4 5 6 7 8 9 10
    return 0;
}
```

### 3. So sánh for, while, do-while

| Đặc điểm            | for                    | while                        | do-while                  |
| ------------------- | ---------------------- | ---------------------------- | ------------------------- |
| Kiểm tra điều kiện  | Trước                  | Trước                        | Sau                       |
| Số lần chạy ít nhất | 0                      | 0                            | 1                         |
| Khi nào dùng?       | Biết trước số vòng lặp | Không biết trước số vòng lặp | Muốn chạy tối thiểu 1 lần |
| Quản lý biến đếm    | Tự động                | Thủ công                     | Thủ công                  |

### 4. Vòng lặp while vô hạn

```c
while (1) {
    // Đây là vòng lặp vô hạn, các em các em lưu ý phải có điều kiện dừng bên trong, ví dụ dùng break!
}
```

### 5. Lệnh break và continue

Các em các em lưu ý:

-   `break` dùng để thoát khỏi vòng lặp ngay lập tức.
-   `continue` bỏ qua phần còn lại của vòng lặp hiện tại và quay về đầu vòng lặp (kiểm tra điều kiện lại nếu còn vòng tiếp).
-   Hai lệnh này đều dùng được trong `for`, `while`, hoặc `do-while`.

---

## 💻 Ví dụ minh họa

### Ví dụ 1: Đếm số lượng chữ số chẵn trong một số

```c
#include <stdio.h>

int main() {
    int n, dem = 0;
    printf("Nhap so nguyen duong: ");
    scanf("%d", &n);
    while (n > 0) {
        if ((n % 10) % 2 == 0) {
            dem++;
        }
        n = n / 10;
    }
    printf("So luong chu so chan: %d\n", dem);
    return 0;
}
```

### Ví dụ 2: Menu sử dụng do-while

```c
#include <stdio.h>

int main() {
    int luaChon;
    do {
        printf("\n=== MENU ===\n");
        printf("1. Tinh tong\n");
        printf("2. Tinh hieu\n");
        printf("3. Thoat\n");
        printf("Chon (1-3): ");
        scanf("%d", &luaChon);
        if (luaChon == 1) {
            int a, b;
            printf("Nhap 2 so: ");
            scanf("%d%d", &a, &b);
            printf("Tong: %d\n", a + b);
        } else if (luaChon == 2) {
            int a, b;
            printf("Nhap 2 so: ");
            scanf("%d%d", &a, &b);
            printf("Hieu: %d\n", a - b);
        }
    } while (luaChon != 3);
    printf("Cam on ban da su dung!\n");
    return 0;
}
```

### Ví dụ 3: Tính tổng dãy số cho đến khi nhập 0

```c
#include <stdio.h>

int main() {
    int so, tong = 0;
    printf("Nhap cac so (nhap 0 de ket thuc):\n");
    while (1) {
        scanf("%d", &so);
        if (so == 0) {
            break;
        }
        tong += so;
    }
    printf("Tong cac so da nhap: %d\n", tong);
    return 0;
}
```

### Ví dụ 4: Trò chơi đoán số với do-while

```c
#include <stdio.h>

int main() {
    int soBiMat = 42;
    int doan, soLanDoan = 0;
    printf("Tro choi doan so (1-100)!\n");
    do {
        printf("Nhap so ban doan: ");
        scanf("%d", &doan);
        soLanDoan++;
        if (doan < soBiMat) {
            printf("So ban doan nho hon!\n");
        } else if (doan > soBiMat) {
            printf("So ban doan lon hon!\n");
        } else {
            printf("Chuc mung! Ban da doan dung sau %d lan!\n", soLanDoan);
        }
    } while (doan != soBiMat);
    return 0;
}
```

### Ví dụ 5: Kiểm tra nhập dữ liệu hợp lệ với do-while

```c
#include <stdio.h>

int main() {
    int tuoi;
    do {
        printf("Nhap tuoi (1-120): ");
        scanf("%d", &tuoi);
        if (tuoi < 1 || tuoi > 120) {
            printf("Tuoi khong hop le! Vui long nhap lai.\n");
        }
    } while (tuoi < 1 || tuoi > 120);
    printf("Tuoi cua ban la: %d\n", tuoi);
    return 0;
}
```

### Ví dụ 6: Tính tổng các chữ số của một số nguyên

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    int n, tong = 0;
    printf("Nhap so nguyen: ");
    scanf("%d", &n);
    n = abs(n);
    while (n > 0) {
        tong += n % 10;
        n /= 10;
    }
    printf("Tong cac chu so: %d\n", tong);
    return 0;
}
```

### Ví dụ 7: Đảo ngược số nguyên

```c
#include <stdio.h>

int main() {
    int n, soDao = 0;
    printf("Nhap so nguyen: ");
    scanf("%d", &n);
    while (n > 0) {
        soDao = soDao * 10 + (n % 10);
        n /= 10;
    }
    printf("So dao nguoc: %d\n", soDao);
    return 0;
}
```

### Ví dụ 8: Kiểm tra số đối xứng (palindrome)

```c
#include <stdio.h>

int main() {
    int n, banDau, soDao = 0;
    printf("Nhap so nguyen: ");
    scanf("%d", &n);
    banDau = n;
    while (n > 0) {
        soDao = soDao * 10 + (n % 10);
        n /= 10;
    }
    if (banDau == soDao) {
        printf("%d la so doi xung!\n", banDau);
    } else {
        printf("%d khong phai so doi xung!\n", banDau);
    }
    return 0;
}
```

### Ví dụ 9: Tính lũy thừa dùng while

```c
#include <stdio.h>

int main() {
    int a, n, i = 0;
    long long ketQua = 1;
    printf("Nhap co so (a): ");
    scanf("%d", &a);
    printf("Nhap so mu (n): ");
    scanf("%d", &n);
    while (i < n) {
        ketQua *= a;
        i++;
    }
    printf("%d^%d = %lld\n", a, n, ketQua);
    return 0;
}
```

---

## 🧠 Bài tập thực hành trên lớp

### Bài tập cơ bản

1. Viết chương trình tính tổng các số từ 1 đến n dùng vòng lặp `while`.
2. Viết chương trình in bảng cửu chương n bằng vòng lặp `do-while`.
3. Viết chương trình nhập số nguyên dương, tính tổng các chữ số.
4. Viết chương trình nhập số, đếm số lượng chữ số.
5. Viết chương trình menu gồm: tính tổng 2 số, tính hiệu 2 số, thoát.

### Bài tập mức trung bình

6. Viết chương trình trò chơi đoán số từ 1-100, đếm số lần đoán của người chơi.
7. Viết chương trình nhập điểm từ 0-10, yêu cầu nhập lại nếu sai.
8. Viết chương trình tìm ước chung lớn nhất (GCD) của 2 số bằng thuật toán Euclid.
9. Viết chương trình đảo ngược một số nguyên.
10. Viết chương trình kiểm tra số đối xứng.

### Bài tập nâng cao cho các các em muốn thử sức

11. Viết chương trình đổi số thập phân sang nhị phân.
12. Viết chương trình tính số Fibonacci thứ n.
13. Kiểm tra số Armstrong (số bằng tổng lũy thừa bậc n các chữ số - ví dụ: 153 = 1³ + 5³ + 3³).
14. Tìm ước chung lớn nhất và bội chung nhỏ nhất của 2 số.
15. Tính giai thừa của một số bằng vòng lặp `while`.

---

## 📝 Ghi chú của thầy

Các em các em lưu ý những nội dung sau:

-   Với `while`, phải nhớ cập nhật biến điều kiện trong vòng lặp, nếu không sẽ bị lặp vô hạn.
-   Với `do-while`, luôn luôn chạy ít nhất 1 lần, rất phù hợp cho nhập liệu cần kiểm tra hợp lệ hoặc menu.
-   Nếu viết vòng lặp vô hạn, nhớ có một điều kiện dừng như `break` để tránh chương trình chạy mãi.
-   Tóm tắt:
    -   Dùng `for` khi biết trước số lần lặp.
    -   Dùng `while` khi số lần lặp chưa biết trước, cần kiểm tra điều kiện ngay từ đầu.
    -   Dùng `do-while` cho các trường hợp cần chạy code tối thiểu 1 lần, chẳng hạn nhập dữ liệu đến khi hợp lệ.

---

## ✅ Củng cố kiến thức

1. Sự khác nhau cơ bản giữa `while` và `do-while` là gì?
2. Vòng lặp nào luôn chạy ít nhất một lần?
3. Khi nào dùng `while`, khi nào dùng `for`?
4. Muốn thoát khỏi một vòng lặp `while(1)`, em làm thế nào?

---

## 🎯 Tóm tắt buổi học

-   Các em đã học về vòng lặp `while` và `do-while` trong C.
-   Biết được sự khác biệt và thực tiễn sử dụng từng loại vòng lặp.
-   Biết vận dụng vào các vấn đề không xác định trước số lần lặp, tạo menu lặp lại, kiểm tra nhập hợp lệ...
-   Thực hành viết các ví dụ đơn giản đến nâng cao để củng cố kiến thức.

**Tiết sau:** [Buổi 7: Vòng lặp lồng nhau và bài toán thực tế](./lesson-7.md)
