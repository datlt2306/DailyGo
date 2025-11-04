# Buổi 6: Vòng lặp while và do-while

## 🎯 Mục tiêu học tập

Sau buổi học này, sinh viên sẽ:
- Hiểu sự khác biệt giữa `for`, `while`, và `do-while`
- Sử dụng thành thạo vòng lặp `while`
- Sử dụng thành thạo vòng lặp `do-while`
- Biết khi nào nên dùng `while`, khi nào dùng `do-while`
- Áp dụng vào các bài toán lặp không xác định số lần

---

## 📘 Nội dung chính

### 1. Vòng lặp while

**Cú pháp:**
```cpp
while (dieu_kien) {
    // Các câu lệnh cần lặp
}
```

**Đặc điểm:**
- Kiểm tra điều kiện **trước** mỗi lần lặp
- Nếu điều kiện đúng → thực hiện khối lệnh
- Nếu điều kiện sai → thoát vòng lặp
- Có thể không chạy lần nào nếu điều kiện sai ngay từ đầu

**Ví dụ:**
```cpp
int i = 1;
while (i <= 10) {
    cout << i << " ";
    i++;
}
// Kết quả: 1 2 3 4 5 6 7 8 9 10
```

### 2. Vòng lặp do-while

**Cú pháp:**
```cpp
do {
    // Các câu lệnh cần lặp
} while (dieu_kien);
```

**Đặc điểm:**
- Thực hiện khối lệnh **trước**, sau đó mới kiểm tra điều kiện
- Chắc chắn chạy **ít nhất một lần**
- Thích hợp cho menu, xác nhận người dùng...

**Ví dụ:**
```cpp
int i = 1;
do {
    cout << i << " ";
    i++;
} while (i <= 10);
// Kết quả: 1 2 3 4 5 6 7 8 9 10
```

### 3. So sánh for, while, do-while

| Đặc điểm | for | while | do-while |
|----------|-----|-------|----------|
| Kiểm tra điều kiện | Trước | Trước | Sau |
| Số lần lặp tối thiểu | 0 | 0 | 1 |
| Khi nào dùng | Biết trước số lần lặp | Không xác định số lần | Cần chạy ít nhất 1 lần |
| Quản lý biến đếm | Tự động | Thủ công | Thủ công |

### 4. Vòng lặp while vô hạn

```cpp
while (true) {
    // Vòng lặp vô hạn (cần break để thoát)
}
```

### 5. Lệnh break và continue

Tương tự như trong vòng lặp `for`, `break` và `continue` cũng hoạt động trong `while` và `do-while`.

---

## 💻 Ví dụ minh họa

### Ví dụ 1: Đếm số lần chia hết cho 2

```cpp
#include <iostream>
using namespace std;

int main() {
    int n, dem = 0;
    
    cout << "Nhap so nguyen duong: ";
    cin >> n;
    
    while (n > 0) {
        if (n % 2 == 0) {
            dem++;
        }
        n /= 10;  // Bỏ chữ số cuối
    }
    
    cout << "So luong chu so chan: " << dem << endl;
    
    return 0;
}
```

### Ví dụ 2: Menu lặp lại với do-while

```cpp
#include <iostream>
using namespace std;

int main() {
    int luaChon;
    
    do {
        cout << "\n=== MENU ===" << endl;
        cout << "1. Tinh tong" << endl;
        cout << "2. Tinh hieu" << endl;
        cout << "3. Thoat" << endl;
        cout << "Chon (1-3): ";
        cin >> luaChon;
        
        if (luaChon == 1) {
            int a, b;
            cout << "Nhap 2 so: ";
            cin >> a >> b;
            cout << "Tong: " << (a + b) << endl;
        } else if (luaChon == 2) {
            int a, b;
            cout << "Nhap 2 so: ";
            cin >> a >> b;
            cout << "Hieu: " << (a - b) << endl;
        }
        
    } while (luaChon != 3);
    
    cout << "Cam on ban da su dung!" << endl;
    
    return 0;
}
```

### Ví dụ 3: Tính tổng đến khi nhập 0

```cpp
#include <iostream>
using namespace std;

int main() {
    int so, tong = 0;
    
    cout << "Nhap cac so (nhap 0 de ket thuc): " << endl;
    
    while (true) {
        cin >> so;
        if (so == 0) {
            break;  // Thoát khi nhập 0
        }
        tong += so;
    }
    
    cout << "Tong cac so da nhap: " << tong << endl;
    
    return 0;
}
```

### Ví dụ 4: Đoán số với do-while

```cpp
#include <iostream>
using namespace std;

int main() {
    int soBiMat = 42;
    int doan;
    int soLanDoan = 0;
    
    cout << "Tro choi doan so (1-100)!" << endl;
    
    do {
        cout << "Nhap so ban doan: ";
        cin >> doan;
        soLanDoan++;
        
        if (doan < soBiMat) {
            cout << "So ban doan nho hon!" << endl;
        } else if (doan > soBiMat) {
            cout << "So ban doan lon hon!" << endl;
        } else {
            cout << "Chuc mung! Ban da doan dung sau " << soLanDoan << " lan!" << endl;
        }
        
    } while (doan != soBiMat);
    
    return 0;
}
```

### Ví dụ 5: Kiểm tra nhập hợp lệ

```cpp
#include <iostream>
using namespace std;

int main() {
    int tuoi;
    
    do {
        cout << "Nhap tuoi (1-120): ";
        cin >> tuoi;
        
        if (tuoi < 1 || tuoi > 120) {
            cout << "Tuoi khong hop le! Vui long nhap lai." << endl;
        }
        
    } while (tuoi < 1 || tuoi > 120);
    
    cout << "Tuoi cua ban la: " << tuoi << endl;
    
    return 0;
}
```

### Ví dụ 6: Tính tổng các chữ số

```cpp
#include <iostream>
using namespace std;

int main() {
    int n, tong = 0;
    
    cout << "Nhap so nguyen: ";
    cin >> n;
    
    n = abs(n);  // Lấy giá trị tuyệt đối
    
    while (n > 0) {
        tong += n % 10;  // Lấy chữ số cuối
        n /= 10;         // Bỏ chữ số cuối
    }
    
    cout << "Tong cac chu so: " << tong << endl;
    
    return 0;
}
```

### Ví dụ 7: Đảo ngược số

```cpp
#include <iostream>
using namespace std;

int main() {
    int n, soDao = 0;
    
    cout << "Nhap so nguyen: ";
    cin >> n;
    
    while (n > 0) {
        soDao = soDao * 10 + (n % 10);
        n /= 10;
    }
    
    cout << "So dao nguoc: " << soDao << endl;
    
    return 0;
}
```

### Ví dụ 8: Kiểm tra số đối xứng (palindrome)

```cpp
#include <iostream>
using namespace std;

int main() {
    int n, banDau, soDao = 0;
    
    cout << "Nhap so nguyen: ";
    cin >> n;
    
    banDau = n;
    
    // Đảo ngược số
    while (n > 0) {
        soDao = soDao * 10 + (n % 10);
        n /= 10;
    }
    
    if (banDau == soDao) {
        cout << banDau << " la so doi xung!" << endl;
    } else {
        cout << banDau << " khong phai so doi xung!" << endl;
    }
    
    return 0;
}
```

### Ví dụ 9: Tính lũy thừa với while

```cpp
#include <iostream>
using namespace std;

int main() {
    int a, n;
    long long ketQua = 1;
    
    cout << "Nhap co so (a): ";
    cin >> a;
    cout << "Nhap so mu (n): ";
    cin >> n;
    
    int i = 0;
    while (i < n) {
        ketQua *= a;
        i++;
    }
    
    cout << a << "^" << n << " = " << ketQua << endl;
    
    return 0;
}
```

---

## 🧠 Bài tập thực hành

### Bài tập cơ bản

**Bài 1:** Viết chương trình tính tổng các số từ 1 đến n bằng vòng lặp `while`

**Bài 2:** Viết chương trình in bảng cửu chương n bằng vòng lặp `do-while`

**Bài 3:** Viết chương trình nhập số dương, tính tổng các chữ số

**Bài 4:** Viết chương trình nhập số, đếm số chữ số

**Bài 5:** Viết chương trình menu với các chức năng:
- Tính tổng 2 số
- Tính hiệu 2 số
- Thoát

### Bài tập trung bình

**Bài 6:** Viết chương trình đoán số:
- Máy chọn ngẫu nhiên số từ 1-100
- Người chơi đoán, máy báo lớn hơn/nhỏ hơn/đúng
- Đếm số lần đoán

**Bài 7:** Viết chương trình kiểm tra nhập hợp lệ:
- Nhập điểm từ 0-10, yêu cầu nhập lại nếu sai

**Bài 8:** Viết chương trình tính GCD (Ước chung lớn nhất) của 2 số:
- Dùng thuật toán Euclid

**Bài 9:** Viết chương trình đảo ngược một số nguyên

**Bài 10:** Viết chương trình kiểm tra số có phải số đối xứng không

### Bài tập nâng cao

**Bài 11:** Viết chương trình chuyển đổi số thập phân sang nhị phân

**Bài 12:** Viết chương trình tính Fibonacci đến số thứ n:
- F(0) = 0, F(1) = 1
- F(n) = F(n-1) + F(n-2)

**Bài 13:** Viết chương trình kiểm tra số Armstrong:
- Số Armstrong là số bằng tổng lũy thừa các chữ số
- Ví dụ: 153 = 1³ + 5³ + 3³

**Bài 14:** Viết chương trình tìm ước số chung lớn nhất và bội số chung nhỏ nhất của 2 số

**Bài 15:** Viết chương trình tính giai thừa bằng vòng lặp `while`

---

## 📝 Lưu ý quan trọng

1. **Vòng lặp while:**
   - Luôn cập nhật biến điều kiện trong vòng lặp
   - Kiểm tra điều kiện trước khi thực hiện

2. **Vòng lặp do-while:**
   - Chắc chắn chạy ít nhất một lần
   - Thích hợp cho menu, xác nhận

3. **Vòng lặp vô hạn:**
   - Cẩn thận tạo vòng lặp vô hạn không chủ ý
   - Luôn có cơ chế thoát (break hoặc điều kiện dừng)

4. **Khi nào dùng gì:**
   - `for`: Biết trước số lần lặp
   - `while`: Không xác định số lần, kiểm tra trước
   - `do-while`: Cần chạy ít nhất 1 lần

---

## ✅ Kiểm tra kiến thức

1. Sự khác biệt giữa `while` và `do-while`?

2. Vòng lặp nào chắc chắn chạy ít nhất một lần?

3. Khi nào nên dùng `while`, khi nào dùng `for`?

4. Làm thế nào để thoát vòng lặp `while (true)`?

---

## 🎯 Tóm tắt

- ✅ Đã học vòng lặp `while` và `do-while`
- ✅ Hiểu sự khác biệt và khi nào nên dùng từng loại
- ✅ Biết cách sử dụng vòng lặp cho menu, xác nhận người dùng
- ✅ Áp dụng vào các bài toán không xác định số lần lặp

**Bài tiếp theo:** [Buổi 7: Vòng lặp lồng nhau và bài toán thực tế](./lesson-7.md)
