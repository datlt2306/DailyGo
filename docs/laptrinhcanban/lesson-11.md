# Buổi 11: Mảng một chiều

## 🎯 Mục tiêu buổi học

> **Thầy mong muốn sau buổi học này, các em sẽ đạt được:**

Sau tiết học này, các em sẽ:
1. ✅ Hiểu được mảng là gì, lý do ta cần sử dụng mảng trong lập trình C
2. ✅ Nắm được cách khai báo, khởi tạo mảng một chiều trong C
3. ✅ Biết cách truy cập, cập nhật từng phần tử trong mảng
4. ✅ Vận dụng mảng để giải các bài toán thực tế như quản lý điểm, lưu danh sách...
## 📘 Nội dung

### 1. Khái niệm mảng

Mảng là một tập các biến cùng kiểu, được lưu kế tiếp nhau trong bộ nhớ, giúp lưu trữ nhiều giá trị một lúc mà không cần tạo từng biến lẻ.

**Ví dụ thực tế:**

-   Lưu điểm của cả lớp (30 sinh viên)
-   Lưu danh sách sản phẩm trong kho
-   Lưu lịch sử mua hàng trong một ứng dụng

### 2. Khai báo mảng

Khi muốn dùng mảng, ta cần xác định kiểu dữ liệu và kích thước mảng. Cú pháp:

```c
int a[10];         // Mảng a gồm 10 phần tử kiểu int
float diem[30];    // Lưu 30 điểm thực (float)
```

_Chú ý: Số phần tử là số nguyên dương, chỉ số mảng luôn bắt đầu từ 0._

### 3. Khởi tạo mảng

Có thể khởi tạo giá trị cho mảng khi khai báo:

```c
int b[5] = {1, 2, 3, 4, 5};
int c[] = {10, 20, 30}; // Không ghi kích thước, C tự tính dựa vào số phần tử khởi tạo
```

### 4. Truy cập phần tử

-   Chỉ số đầu tiên là 0 (`mang[0]`)
-   Phần tử cuối cùng là `mang[n-1]` (n là số phần tử mảng)

---

## 💻 Ví dụ

### Ví dụ 1: Nhập và xuất mảng số nguyên

```c
#include <stdio.h>

int main() {
    int n, i;
    int a[100];

    printf("Nhap so phan tu cua mang: ");
    scanf("%d", &n);

    // Nhập từng phần tử của mảng
    for (i = 0; i < n; i++) {
        printf("a[%d] = ", i);
        scanf("%d", &a[i]);
    }

    // Xuất các giá trị vừa nhập
    printf("Cac phan tu cua mang: ");
    for (i = 0; i < n; i++) {
        printf("%d ", a[i]);
    }

    return 0;
}
```

### Ví dụ 2: Tìm giá trị lớn nhất trong mảng

```c
#include <stdio.h>

int main() {
    int n, i, max, a[100];
    printf("Nhap so phan tu cua mang: ");
    scanf("%d", &n);

    for (i = 0; i < n; i++) {
        scanf("%d", &a[i]);
    }

    max = a[0];
    for (i = 1; i < n; i++) {
        if (a[i] > max) {
            max = a[i];
        }
    }

    printf("So lon nhat trong mang la: %d\n", max);

    return 0;
}
```

### Ví dụ 3: Tính tổng và trung bình các phần tử

```c
#include <stdio.h>

int main() {
    int n, i, tong = 0, a[100];
    float tbc;

    printf("Nhap so phan tu cua mang: ");
    scanf("%d", &n);

    for (i = 0; i < n; i++) {
        scanf("%d", &a[i]);
        tong += a[i];
    }

    tbc = (float)tong/n;
    printf("Tong cac phan tu: %d\n", tong);
    printf("Trung binh cong: %.2f\n", tbc);

    return 0;
}
```

---

## 🧠 Bài tập về nhà

1. Viết chương trình nhập mảng n số nguyên, in tổng và trung bình cộng các phần tử.
2. Tìm số lớn nhất, nhỏ nhất trong mảng một chiều.
3. Đếm số lượng phần tử chẵn và lẻ trong mảng.
4. Tìm vị trí của phần tử lớn nhất trong mảng.
5. Đảo ngược mảng và in ra kết quả.

---

**Bài tiếp theo:** [Buổi 12: Mảng hai chiều](./lesson-12.md)
