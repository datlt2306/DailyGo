# Buổi 12: Mảng hai chiều

## 🎯 Mục tiêu học tập

Sau buổi học này, các em sẽ:

-   Nắm được khái niệm mảng hai chiều (ma trận)
-   Biết cách khai báo, khởi tạo và truy xuất phần tử trong ma trận
-   Thực hiện được các phép toán cơ bản trên ma trận
-   Ứng dụng ma trận vào giải các bài toán thực tế

---

## 📘 Nội dung chính

### 1. Mảng hai chiều là gì?

Thầy lấy ví dụ, mảng hai chiều trong C giống như một cái bảng có nhiều dòng và cột. Ví dụ, thầy khai báo một ma trận gồm 3 dòng, 4 cột như sau:

```c
int maTran[3][4];  // 3 dòng, 4 cột
```

### 2. Truy cập phần tử

Để truy cập phần tử tại dòng i, cột j của ma trận, các em sử dụng cú pháp sau:

```c
maTran[i][j];  // Phần tử ở dòng i, cột j
```

---

## 💻 Ví dụ minh họa

### Ví dụ: Nhập, hiển thị và tính tổng các phần tử của ma trận

Thầy và các em cùng xem ví dụ sau nhé:

```c
#include <stdio.h>

int main() {
    int m, n;
    int maTran[100][100];
    int i, j;
    int tong = 0;

    printf("Nhap so dong: ");
    scanf("%d", &m);
    printf("Nhap so cot: ");
    scanf("%d", &n);

    // Nhập các phần tử cho ma trận
    for (i = 0; i < m; i++) {
        for (j = 0; j < n; j++) {
            printf("Nhap phan tu maTran[%d][%d]: ", i, j);
            scanf("%d", &maTran[i][j]);
        }
    }

    // Hiển thị ma trận ra màn hình
    printf("Ma tran vua nhap:\n");
    for (i = 0; i < m; i++) {
        for (j = 0; j < n; j++) {
            printf("%d ", maTran[i][j]);
        }
        printf("\n");
    }

    // Tính tổng các phần tử trong ma trận
    for (i = 0; i < m; i++) {
        for (j = 0; j < n; j++) {
            tong += maTran[i][j];
        }
    }

    printf("Tong cac phan tu cua ma tran la: %d\n", tong);

    return 0;
}
```

---

**Bài tiếp theo:** [Buổi 13: Chuỗi ký tự và cấu trúc (struct)](./lesson-13.md)
