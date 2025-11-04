# Buổi 11: Mảng một chiều

## 🎯 Mục tiêu học tập

Sau buổi học này, sinh viên sẽ:

-   Hiểu khái niệm mảng và tại sao cần mảng
-   Biết cách khai báo, khởi tạo mảng
-   Truy cập và xử lý phần tử mảng
-   Áp dụng mảng vào các bài toán thực tế (quản lý điểm, danh sách...)

---

## 📘 Nội dung chính

### 1. Mảng là gì?

**Mảng** là tập hợp các phần tử cùng kiểu dữ liệu, được lưu trữ liên tiếp trong bộ nhớ.

**Ví dụ thực tế:**

-   Danh sách điểm của 30 sinh viên
-   Danh sách tên sản phẩm
-   Lịch sử giao dịch

### 2. Khai báo mảng

```c
int mang[10];  // Mảng 10 phần tử kiểu int
float diem[30];  // Mảng điểm của 30 sinh viên
```

### 3. Khởi tạo mảng

```c
int mang[5] = {1, 2, 3, 4, 5};
int mang2[] = {10, 20, 30};  // Tự động xác định kích thước
```

### 4. Truy cập phần tử

-   Chỉ số bắt đầu từ **0**
-   `mang[0]`: Phần tử đầu tiên
-   `mang[n-1]`: Phần tử cuối cùng

---

## 💻 Ví dụ minh họa

### Ví dụ 1: Nhập và in mảng

```c
#include <stdio.h>

int main() {
    int n;
    int mang[100];

    cout << "Nhap so phan tu: ";
    cin >> n;

    // Nhập mảng
    for (int i = 0; i < n; i++) {
        cout << "mang[" << i << "] = ";
        cin >> mang[i];
    }

    // In mảng
    cout << "Mang vua nhap: ";
    for (int i = 0; i < n; i++) {
        cout << mang[i] << " ";
    }

    return 0;
}
```

### Ví dụ 2: Tìm số lớn nhất trong mảng

```c
#include <stdio.h>

int main() {
    int n, mang[100];

    cout << "Nhap so phan tu: ";
    cin >> n;

    for (int i = 0; i < n; i++) {
        cin >> mang[i];
    }

    int max = mang[0];
    for (int i = 1; i < n; i++) {
        if (mang[i] > max) {
            max = mang[i];
        }
    }

    cout << "So lon nhat: " << max << endl;

    return 0;
}
```

### Ví dụ 3: Tính tổng và trung bình

```c
#include <stdio.h>

int main() {
    int n, mang[100];
    int tong = 0;

    cout << "Nhap so phan tu: ";
    cin >> n;

    for (int i = 0; i < n; i++) {
        cin >> mang[i];
        tong += mang[i];
    }

    float trungBinh = (float)tong / n;
    cout << "Tong: " << tong << endl;
    cout << "Trung binh: " << trungBinh << endl;

    return 0;
}
```

---

## 🧠 Bài tập thực hành

**Bài 1:** Nhập n số, tính tổng và trung bình
**Bài 2:** Tìm số lớn nhất và số nhỏ nhất
**Bài 3:** Đếm số phần tử chẵn/lẻ
**Bài 4:** Tìm vị trí phần tử lớn nhất
**Bài 5:** Đảo ngược mảng

---

**Bài tiếp theo:** [Buổi 12: Mảng hai chiều](./lesson-12.md)
