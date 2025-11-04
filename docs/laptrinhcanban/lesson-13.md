# Buổi 13: Chuỗi ký tự và cấu trúc (struct)

## 🎯 Mục tiêu học tập

Sau buổi học này, sinh viên sẽ:

-   Làm việc với chuỗi ký tự (string)
-   Hiểu và sử dụng cấu trúc (struct)
-   Tạo kiểu dữ liệu mới từ struct
-   Áp dụng vào quản lý thông tin (sinh viên, sách...)

---

## 📘 Nội dung chính

### 1. Chuỗi ký tự (string)

```cpp
#include <string>

string ten = "Nguyen Van A";
cout << ten.length();  // Độ dài chuỗi
```

### 2. Cấu trúc (struct)

**Khai báo:**

```cpp
struct SinhVien {
    string hoTen;
    int tuoi;
    float diem;
};
```

**Sử dụng:**

```cpp
SinhVien sv;
sv.hoTen = "Nguyen Van A";
sv.tuoi = 20;
sv.diem = 8.5;
```

---

## 💻 Ví dụ minh họa

### Ví dụ: Quản lý sinh viên với struct

```cpp
#include <iostream>
#include <string>
using namespace std;

struct SinhVien {
    string hoTen;
    int tuoi;
    float diem;
};

int main() {
    SinhVien sv;

    cout << "Nhap ho ten: ";
    getline(cin, sv.hoTen);
    cout << "Nhap tuoi: ";
    cin >> sv.tuoi;
    cout << "Nhap diem: ";
    cin >> sv.diem;

    cout << "\nThong tin sinh vien:" << endl;
    cout << "Ho ten: " << sv.hoTen << endl;
    cout << "Tuoi: " << sv.tuoi << endl;
    cout << "Diem: " << sv.diem << endl;

    return 0;
}
```

---

**Bài tiếp theo:** [Buổi 14: Đọc/ghi file và tổng kết](./lesson-14.md)
