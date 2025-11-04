# Buổi 12: Mảng hai chiều

## 🎯 Mục tiêu học tập

Sau buổi học này, sinh viên sẽ:
- Hiểu khái niệm mảng hai chiều (ma trận)
- Biết cách khai báo, khởi tạo và xử lý ma trận
- Thực hiện các phép toán trên ma trận
- Áp dụng vào bài toán thực tế

---

## 📘 Nội dung chính

### 1. Mảng hai chiều là gì?

**Mảng hai chiều** giống như bảng với các dòng và cột.

```cpp
int maTran[3][4];  // 3 dòng, 4 cột
```

### 2. Truy cập phần tử

```cpp
maTran[i][j];  // Phần tử ở dòng i, cột j
```

---

## 💻 Ví dụ minh họa

### Ví dụ: Nhập, hiển thị và tính tổng ma trận

```cpp
#include <iostream>
using namespace std;

int main() {
    int m, n, maTran[100][100];
    
    cout << "Nhap so dong: ";
    cin >> m;
    cout << "Nhap so cot: ";
    cin >> n;
    
    // Nhập ma trận
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            cin >> maTran[i][j];
        }
    }
    
    // Tính tổng
    int tong = 0;
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            tong += maTran[i][j];
        }
    }
    
    cout << "Tong: " << tong << endl;
    
    return 0;
}
```

---

**Bài tiếp theo:** [Buổi 13: Chuỗi ký tự và cấu trúc (struct)](./lesson-13.md)
