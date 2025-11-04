# Buổi 7: Vòng lặp lồng nhau và bài toán thực tế

## 🎯 Mục tiêu học tập

Sau buổi học này, sinh viên sẽ:
- Hiểu khái niệm vòng lặp lồng nhau
- Sử dụng thành thạo vòng lặp lồng nhau để giải quyết bài toán
- Vẽ các hình học bằng vòng lặp (tam giác, hình vuông, kim cương...)
- Xử lý các bài toán thực tế phức tạp hơn
- Tối ưu hóa thuật toán với vòng lặp lồng nhau

---

## 📘 Nội dung chính

### 1. Vòng lặp lồng nhau là gì?

**Vòng lặp lồng nhau** là vòng lặp bên trong một vòng lặp khác.

**Cú pháp cơ bản:**
```cpp
for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= m; j++) {
        // Các câu lệnh
    }
}
```

**Giải thích:**
- Vòng lặp ngoài (i) chạy n lần
- Với mỗi lần lặp của vòng lặp ngoài, vòng lặp trong (j) chạy m lần
- Tổng số lần thực hiện: n × m

### 2. Ví dụ cơ bản

```cpp
for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 2; j++) {
        cout << "i=" << i << ", j=" << j << endl;
    }
}
```

**Kết quả:**
```
i=1, j=1
i=1, j=2
i=2, j=1
i=2, j=2
i=3, j=1
i=3, j=2
```

### 3. Vẽ hình với vòng lặp lồng nhau

**Nguyên tắc:**
- Vòng lặp ngoài: Quản lý số dòng
- Vòng lặp trong: Quản lý số cột/ký tự trên mỗi dòng
- `endl` hoặc `\n`: Xuống dòng sau mỗi hàng

---

## 💻 Ví dụ minh họa

### Ví dụ 1: Hình vuông sao

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    
    cout << "Nhap kich thuoc: ";
    cin >> n;
    
    for (int i = 1; i <= n; i++) {        // Dòng
        for (int j = 1; j <= n; j++) {    // Cột
            cout << "* ";
        }
        cout << endl;
    }
    
    return 0;
}
```

**Kết quả (n=5):**
```
* * * * *
* * * * *
* * * * *
* * * * *
* * * * *
```

### Ví dụ 2: Tam giác vuông

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    
    cout << "Nhap chieu cao: ";
    cin >> n;
    
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++) {
            cout << "* ";
        }
        cout << endl;
    }
    
    return 0;
}
```

**Kết quả (n=5):**
```
*
* *
* * *
* * * *
* * * * *
```

### Ví dụ 3: Tam giác rỗng

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    
    cout << "Nhap chieu cao: ";
    cin >> n;
    
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++) {
            if (j == 1 || j == i || i == n) {
                cout << "* ";
            } else {
                cout << "  ";
            }
        }
        cout << endl;
    }
    
    return 0;
}
```

### Ví dụ 4: Tam giác số

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    
    cout << "Nhap so dong: ";
    cin >> n;
    
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++) {
            cout << j << " ";
        }
        cout << endl;
    }
    
    return 0;
}
```

**Kết quả (n=5):**
```
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
```

### Ví dụ 5: Hình thoi (kim cương)

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    
    cout << "Nhap kich thuoc: ";
    cin >> n;
    
    // Phần trên
    for (int i = 1; i <= n; i++) {
        // In khoảng trắng
        for (int j = 1; j <= n - i; j++) {
            cout << " ";
        }
        // In sao
        for (int j = 1; j <= 2 * i - 1; j++) {
            cout << "*";
        }
        cout << endl;
    }
    
    // Phần dưới
    for (int i = n - 1; i >= 1; i--) {
        for (int j = 1; j <= n - i; j++) {
            cout << " ";
        }
        for (int j = 1; j <= 2 * i - 1; j++) {
            cout << "*";
        }
        cout << endl;
    }
    
    return 0;
}
```

### Ví dụ 6: Bảng cửu chương đầy đủ

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "BANG CUU CHUONG:" << endl;
    
    for (int i = 2; i <= 9; i++) {
        cout << "\nBang " << i << ":" << endl;
        for (int j = 1; j <= 10; j++) {
            cout << i << " x " << j << " = " << (i * j) << endl;
        }
    }
    
    return 0;
}
```

### Ví dụ 7: Nhập và hiển thị ma trận

```cpp
#include <iostream>
using namespace std;

int main() {
    int m, n;
    
    cout << "Nhap so dong: ";
    cin >> m;
    cout << "Nhap so cot: ";
    cin >> n;
    
    int maTran[100][100];
    
    // Nhập ma trận
    cout << "Nhap cac phan tu:" << endl;
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            cout << "a[" << i << "][" << j << "] = ";
            cin >> maTran[i][j];
        }
    }
    
    // Hiển thị ma trận
    cout << "\nMa tran vua nhap:" << endl;
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            cout << maTran[i][j] << "\t";
        }
        cout << endl;
    }
    
    return 0;
}
```

### Ví dụ 8: Tìm số nguyên tố trong khoảng

```cpp
#include <iostream>
using namespace std;

int main() {
    int a, b;
    
    cout << "Nhap khoang [a, b]: ";
    cin >> a >> b;
    
    cout << "Cac so nguyen to trong khoang [" << a << ", " << b << "]:" << endl;
    
    for (int i = a; i <= b; i++) {
        bool laSoNguyenTo = true;
        
        if (i < 2) {
            laSoNguyenTo = false;
        } else {
            for (int j = 2; j < i; j++) {
                if (i % j == 0) {
                    laSoNguyenTo = false;
                    break;
                }
            }
        }
        
        if (laSoNguyenTo) {
            cout << i << " ";
        }
    }
    
    return 0;
}
```

### Ví dụ 9: Tìm tất cả ước số của một số

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    
    cout << "Nhap so nguyen duong: ";
    cin >> n;
    
    cout << "Cac uoc so cua " << n << " la: ";
    
    for (int i = 1; i <= n; i++) {
        if (n % i == 0) {
            cout << i << " ";
        }
    }
    
    return 0;
}
```

### Ví dụ 10: In bảng điểm sinh viên

```cpp
#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    int n;
    
    cout << "Nhap so luong sinh vien: ";
    cin >> n;
    
    cout << "\n=== BANG DIEM ===" << endl;
    cout << left << setw(10) << "MSSV" 
         << setw(20) << "Ho ten" 
         << setw(10) << "Diem" 
         << setw(10) << "Xep loai" << endl;
    cout << "----------------------------------------" << endl;
    
    for (int i = 1; i <= n; i++) {
        string mssv, hoTen;
        float diem;
        
        cout << "Sinh vien " << i << ":" << endl;
        cout << "  MSSV: ";
        cin >> mssv;
        cout << "  Ho ten: ";
        cin.ignore();
        getline(cin, hoTen);
        cout << "  Diem: ";
        cin >> diem;
        
        string xepLoai;
        if (diem >= 9) xepLoai = "Xuat sac";
        else if (diem >= 8) xepLoai = "Gioi";
        else if (diem >= 7) xepLoai = "Kha";
        else if (diem >= 5) xepLoai = "Trung binh";
        else xepLoai = "Yeu";
        
        cout << left << setw(10) << mssv 
             << setw(20) << hoTen 
             << setw(10) << fixed << setprecision(2) << diem 
             << setw(10) << xepLoai << endl;
    }
    
    return 0;
}
```

---

## 🧠 Bài tập thực hành

### Bài tập cơ bản

**Bài 1:** Viết chương trình in hình chữ nhật rỗng:
```
*****
*   *
*   *
*****
```

**Bài 2:** Viết chương trình in tam giác số ngược:
```
12345
1234
123
12
1
```

**Bài 3:** Viết chương trình in tam giác Pascal (đơn giản):
```
1
1 1
1 2 1
1 3 3 1
```

**Bài 4:** Viết chương trình in bảng cửu chương từ 2 đến 9 (dạng bảng)

**Bài 5:** Viết chương trình nhập n, tính tổng: S = 1² + 2² + 3² + ... + n²

### Bài tập trung bình

**Bài 6:** Viết chương trình in hình chữ X:
```
*   *
 * *
  *
 * *
*   *
```

**Bài 7:** Viết chương trình kiểm tra và in tất cả số hoàn hảo từ 1 đến n

**Bài 8:** Viết chương trình tính tổng ma trận 2 ma trận cùng kích thước

**Bài 9:** Viết chương trình tìm số lớn nhất trong mỗi dòng của ma trận

**Bài 10:** Viết chương trình in hình thoi số:
```
    1
   123
  12345
   123
    1
```

### Bài tập nâng cao

**Bài 11:** Viết chương trình in tam giác Floyd:
```
1
2 3
4 5 6
7 8 9 10
```

**Bài 12:** Viết chương trình nhân 2 ma trận (chỉ khi số cột ma trận 1 = số dòng ma trận 2)

**Bài 13:** Viết chương trình in hình đồng hồ cát:
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

**Bài 14:** Viết chương trình tìm và in tất cả số Armstrong có 3 chữ số

**Bài 15:** Viết chương trình vẽ bàn cờ vua (8x8) với ký tự

---

## 📝 Lưu ý quan trọng

1. **Hiệu năng:** Vòng lặp lồng nhau có độ phức tạp O(n²) hoặc cao hơn
2. **Biến đếm:** Dùng các tên khác nhau cho vòng lặp ngoài và trong (i, j, k...)
3. **Break/Continue:** `break` trong vòng lặp trong chỉ thoát vòng lặp trong
4. **Xuống dòng:** Nhớ `cout << endl;` sau vòng lặp trong để xuống dòng
5. **Tối ưu:** Nếu có thể, giảm số vòng lặp hoặc điều kiện để tăng hiệu năng

---

## ✅ Kiểm tra kiến thức

1. Vòng lặp lồng nhau `for (int i=1; i<=3; i++)` và `for (int j=1; j<=2; j++)` chạy tổng cộng bao nhiêu lần?

2. Làm thế nào để vẽ tam giác vuông góc phải?

3. Có bao nhiêu cấp vòng lặp lồng nhau có thể có?

---

## 🎯 Tóm tắt

- ✅ Đã học cách sử dụng vòng lặp lồng nhau
- ✅ Biết vẽ các hình học bằng vòng lặp
- ✅ Áp dụng vòng lặp lồng nhau vào bài toán thực tế
- ✅ Hiểu cách xử lý ma trận, bảng cửu chương...

**Bài tiếp theo:** [Buổi 8: Hàm cơ bản](./lesson-8.md)
