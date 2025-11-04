# Buổi 14: Đọc/ghi file và tổng kết khóa học

## 🎯 Mục tiêu học tập

Sau buổi học này, sinh viên sẽ:
- Biết cách đọc và ghi file văn bản
- Sử dụng `ifstream` để đọc file
- Sử dụng `ofstream` để ghi file
- Tổng kết toàn bộ kiến thức đã học
- Chuẩn bị cho project cuối kỳ

---

## 📘 Nội dung chính

### 1. Đọc file (ifstream)

```cpp
#include <fstream>

ifstream file("input.txt");
string line;
while (getline(file, line)) {
    cout << line << endl;
}
file.close();
```

### 2. Ghi file (ofstream)

```cpp
#include <fstream>

ofstream file("output.txt");
file << "Xin chao!" << endl;
file.close();
```

---

## 💻 Ví dụ minh họa

### Ví dụ: Đọc và ghi file

```cpp
#include <iostream>
#include <fstream>
using namespace std;

int main() {
    // Ghi file
    ofstream outFile("data.txt");
    outFile << "Hello World!" << endl;
    outFile << 123 << endl;
    outFile.close();
    
    // Đọc file
    ifstream inFile("data.txt");
    string line;
    while (getline(inFile, line)) {
        cout << line << endl;
    }
    inFile.close();
    
    return 0;
}
```

---

## 🎓 Tổng kết khóa học

### Kiến thức đã học:

1. ✅ Cú pháp cơ bản C++ (biến, kiểu dữ liệu, nhập xuất)
2. ✅ Toán tử và biểu thức
3. ✅ Cấu trúc điều kiện (if-else, switch)
4. ✅ Vòng lặp (for, while, do-while)
5. ✅ Vòng lặp lồng nhau
6. ✅ Hàm (khai báo, định nghĩa, tham số, return)
7. ✅ Đệ quy cơ bản
8. ✅ Mảng một chiều và hai chiều
9. ✅ Chuỗi ký tự (string)
10. ✅ Cấu trúc (struct)
11. ✅ Đọc/ghi file

### Kỹ năng đạt được:

- ✅ Viết chương trình console C++ hoàn chỉnh
- ✅ Áp dụng tư duy thuật toán để giải quyết bài toán
- ✅ Tổ chức code có cấu trúc với hàm
- ✅ Xử lý dữ liệu với mảng và struct
- ✅ Lưu trữ và đọc dữ liệu từ file

---

**🎓 Project cuối kỳ:** [Xem chi tiết](./final-project.md)
