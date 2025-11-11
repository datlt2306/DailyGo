# Buổi 7: VÒNG LẶP LỒNG NHAU VÀ BÀI TOÁN THỰC TẾ (Lý thuyết & thực hành C)

## 🎯 Mục tiêu buổi học

-   Giúp các em hiểu bản chất vòng lặp lồng nhau (for lồng for, while lồng for, v.v)
-   Biết vận dụng vòng lặp lồng nhau để giải các bài toán, đặc biệt là in hình học cơ bản
-   Thực hành vẽ các hình: vuông, tam giác, kim cương (hình thoi) bằng C
-   Làm quen các bài toán thực tế với vòng lặp lồng nhau trên mảng/hai chiều
-   Biết cách tối ưu vòng lặp - tránh lồng nhau “vô tội vạ” gây nặng máy

---

## 📘 Nội dung chính

### 1. Khái niệm Vòng lặp lồng nhau

Có nghĩa là trong 1 vòng lặp em lại nhét thêm vòng lặp khác. Ví dụ for lồng for, for lồng while,...

```c
for(int i = 1; i <= n; i++) {
    for(int j = 1; j <= m; j++) {
        // Câu lệnh bên trong (sẽ chạy n*m lần)
    }
}
```

-   For ngoài chạy n lần (theo biến i)
-   Mỗi lượt của vòng for ngoài, for trong (theo j) chạy m lần
-   Tổng số lần thực hiện: n \* m lần.

### 2. Ví dụ cực kỳ cơ bản

Thầy in ra các cặp chỉ số i, j:

```c
for(int i = 1; i <= 3; i++) {
    for(int j = 1; j <= 2; j++) {
        printf("i=%d, j=%d\n", i, j);
    }
}
```

Kết quả sẽ là:

```
i=1, j=1
i=1, j=2
i=2, j=1
i=2, j=2
i=3, j=1
i=3, j=2
```

Quan sát kỹ để hiểu nhé!

### 3. Ứng dụng lồng nhau để vẽ hình

-   For ngoài thường chạy số dòng (chiều cao)
-   For trong thường chạy số cột hoặc số ký tự trên mỗi dòng
-   Sau mỗi dòng nhớ xuống dòng bằng `printf("\n");`

---

## 💻 Một số ví dụ minh họa

### Ví dụ 1: In hình vuông toàn dấu \*

```c
#include <stdio.h>

int main() {
    int n;
    printf("Nhap kich thuoc (canh): ");
    scanf("%d", &n);

    for(int i = 1; i <= n; i++) {        // Duyệt từng dòng
        for(int j = 1; j <= n; j++) {    // Duyệt từng cột
            printf("* ");
        }
        printf("\n");
    }
    return 0;
}
```

Ví dụ nhập n = 5:

```
* * * * *
* * * * *
* * * * *
* * * * *
* * * * *
```

### Ví dụ 2: Tam giác vuông

```c
#include <stdio.h>
int main() {
    int n;
    printf("Nhap chieu cao: ");
    scanf("%d", &n);
    for(int i = 1; i <= n; i++) {
        for(int j = 1; j <= i; j++) {
            printf("* ");
        }
        printf("\n");
    }
    return 0;
}
```

Nhập n=5 được:

```
*
* *
* * *
* * * *
* * * * *
```

### Ví dụ 3: Tam giác rỗng (Chỉ in viền)

```c
#include <stdio.h>
int main() {
    int n;
    printf("Nhap chieu cao: ");
    scanf("%d", &n);
    for(int i = 1; i <= n; i++) {
        for(int j = 1; j <= i; j++) {
            if(j == 1 || j == i || i == n) {
                printf("* ");
            } else {
                printf("  ");
            }
        }
        printf("\n");
    }
    return 0;
}
```

### Ví dụ 4: Tam giác số

```c
#include <stdio.h>
int main() {
    int n;
    printf("Nhap so dong: ");
    scanf("%d", &n);
    for(int i = 1; i <= n; i++) {
        for(int j = 1; j <= i; j++) {
            printf("%d ", j);
        }
        printf("\n");
    }
    return 0;
}
```

Kết quả n=5:

```
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
```

### Ví dụ 5: Hình thoi (kim cương)

```c
#include <stdio.h>
int main() {
    int n;
    printf("Nhap kich thuoc (ban kinh tam thoi): ");
    scanf("%d", &n);

    // Phần trên
    for(int i = 1; i <= n; i++) {
        for(int j = 1; j <= n - i; j++)
            printf(" ");
        for(int j = 1; j <= 2 * i - 1; j++)
            printf("*");
        printf("\n");
    }
    // Phần dưới
    for(int i = n - 1; i >= 1; i--) {
        for(int j = 1; j <= n - i; j++)
            printf(" ");
        for(int j = 1; j <= 2 * i - 1; j++)
            printf("*");
        printf("\n");
    }
    return 0;
}
```

### Ví dụ 6: In bảng cửu chương từ 2 đến 9

```c
#include <stdio.h>
int main() {
    printf("BANG CUU CHUONG:\n");
    for(int i = 2; i <= 9; i++) {
        printf("\nBang %d:\n", i);
        for(int j = 1; j <= 10; j++) {
            printf("%d x %d = %d\n", i, j, i*j);
        }
    }
    return 0;
}
```

### Ví dụ 7: Nhập & in ma trận số nguyên

```c
#include <stdio.h>
int main() {
    int m, n;
    printf("Nhap so dong: ");
    scanf("%d", &m);
    printf("Nhap so cot: ");
    scanf("%d", &n);

    int a[100][100];
    printf("Nhap cac phan tu:\n");
    for(int i = 0; i < m; i++)
        for(int j = 0; j < n; j++) {
            printf("a[%d][%d] = ", i, j);
            scanf("%d", &a[i][j]);
        }

    printf("\nMa tran vua nhap:\n");
    for(int i = 0; i < m; i++) {
        for(int j = 0; j < n; j++)
            printf("%d\t", a[i][j]);
        printf("\n");
    }
    return 0;
}
```

### Ví dụ 8: Tìm số nguyên tố trong khoảng [a, b]

```c
#include <stdio.h>
int main() {
    int a, b;
    printf("Nhap khoang [a, b]: ");
    scanf("%d%d", &a, &b);
    printf("Cac so nguyen to trong [%d, %d]:\n", a, b);
    for(int i = a; i <= b; i++) {
        int laSoNT = 1;
        if(i < 2) laSoNT = 0;
        for(int j = 2; j < i; j++)
            if(i % j == 0) {
                laSoNT = 0;
                break;
            }
        if(laSoNT) printf("%d ", i);
    }
    return 0;
}
```

### Ví dụ 9: Tim tất cả ước số của một số

```c
#include <stdio.h>
int main() {
    int n;
    printf("Nhap so nguyen duong: ");
    scanf("%d", &n);

    printf("Cac uoc cua %d la: ", n);
    for(int i = 1; i <= n; i++)
        if(n % i == 0)
            printf("%d ", i);

    return 0;
}
```

### Ví dụ 10: In bảng điểm sinh viên (cơ bản)

```c
#include <stdio.h>
#include <string.h>

int main() {
    int n;
    printf("Nhap so luong sinh vien: ");
    scanf("%d", &n);

    char mssv[50], hoten[100];
    float diem;
    printf("\n=== BANG DIEM ===\n");
    for(int i = 1; i <= n; i++) {
        printf("\nSV %d:\n", i);

        printf("  MSSV: ");
        scanf("%s", mssv);

        printf("  Ho ten: ");
        getchar();
        fgets(hoten, 100, stdin);
        size_t len = strlen(hoten);
        if(hoten[len-1]=='\n') hoten[len-1] = '\0';

        printf("  Diem: ");
        scanf("%f", &diem);

        printf("  Xep loai: ");
        if(diem >= 9) printf("Xuat sac\n");
        else if(diem >= 8) printf("Gioi\n");
        else if(diem >= 7) printf("Kha\n");
        else if(diem >= 5) printf("Trung binh\n");
        else printf("Yeu\n");

        printf("  %s | %s | %.2f\n", mssv, hoten, diem);
    }
    return 0;
}
```

---

## 🧠 Bài tập thực hành cá nhân và cặp

### Bài tập cơ bản

1. Viết chương trình C in hình chữ nhật rỗng (n dòng, m cột).
    ```
    *****
    *   *
    *   *
    *****
    ```
2. Viết chương trình C in tam giác số ngược (n dòng):
    ```
    12345
    1234
    123
    12
    1
    ```
3. Viết chương trình C in tam giác Pascal (đơn giản, in 4 dòng):
    ```
    1
    1 1
    1 2 1
    1 3 3 1
    ```
4. Viết chương trình in bảng cửu chương từ 2 đến 9 (dạng bảng)
5. Nhập n, tính tổng: S = 1^2 + 2^2 + 3^2 + ... + n^2 (sử dụng vòng lặp)

### Bài tập vận dụng

6. In hình chữ X (n lẻ, lớn hơn 1):
    ```
    *   *
     * *
      *
     * *
    *   *
    ```
7. In tất cả số hoàn hảo từ 1 đến n
8. Nhập 2 ma trận cùng kích thước, tính tổng 2 ma trận
9. Tìm số lớn nhất trong từng dòng của ma trận
10. In hình thoi số:
    ```
        1
       123
      12345
       123
        1
    ```

### Bài tập nâng cao (dành cho bạn khá, muốn thử thách)

11. In tam giác Floyd:
    ```
    1
    2 3
    4 5 6
    7 8 9 10
    ```
12. Nhân 2 ma trận số nguyên: nhập ma trận a, b kiểm tra điều kiện, xuất kết quả
13. Vẽ hình đồng hồ cát bằng dấu \*
    ```
    *********
     *******
      *****
       ***
        *
       ***
      *****
     *******
    *********
    ```
14. Tìm và in tất cả số Armstrong 3 chữ số
15. Vẽ bàn cờ vua 8x8 (thay màu bằng ký tự O, X)

---

## 📝 Một số lưu ý khi làm bài

1. **Hiệu năng:** Vòng lặp lồng nhau thường có độ phức tạp O(n^2) trở lên - cẩn thận khi dùng cho n lớn.
2. **Biến đếm:** Luôn đặt tên khác nhau cho các vòng lặp i, j, k,... để đỡ nhầm lẫn.
3. **Break/Continue:** Khi dùng break bên trong vòng lặp, nó chỉ thoát khỏi vòng lặp hiện tại.
4. **Xuống dòng:** Sau vòng lặp for trong (cột), nhớ xuống dòng để ra đúng hình.
5. **Tối ưu:** Nếu làm bài nâng cao, tìm cách giảm số vòng lặp, giảm số phép tính hoặc tận dụng tính chất đặc biệt.

---

## ✅ Ôn tập nhanh (Các em tự trả lời)

1. Cặp vòng lặp for lồng nhau dưới đây chạy tổng cộng mấy lần?
    ```c
    for (int i=1; i<=3; i++)
        for (int j=1; j<=2; j++)
    ```
2. Làm thế nào để vẽ tam giác vuông góc phải?
3. Theo các em, có thể lồng mấy cấp vòng lặp vào nhau?

---

## 🎯 Tổng kết

-   Các em đã nắm khái niệm, biết cách vận dụng vòng lặp lồng nhau
-   Đã thực hành vẽ các hình cơ bản bằng C
-   Đã biết cách áp dụng lồng nhau giải bài toán mảng, bảng
-   Sẵn sàng cho các bài nâng cao hơn

**Bài tiếp theo:** [Buổi 8: Hàm cơ bản](./lesson-8.md)
