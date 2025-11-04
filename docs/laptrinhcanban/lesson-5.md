# Buổi 5: Vòng lặp for

## 🎯 Mục tiêu học tập

Sau buổi học này, sinh viên sẽ:
- Hiểu khái niệm vòng lặp và khi nào cần sử dụng
- Sử dụng thành thạo vòng lặp `for`
- Hiểu cách vòng lặp `for` hoạt động (khởi tạo, điều kiện, bước nhảy)
- Áp dụng vòng lặp để giải quyết các bài toán lặp lại
- Sử dụng `break` và `continue` trong vòng lặp

---

## 📘 Nội dung chính

### 1. Tại sao cần vòng lặp?

Khi cần thực hiện một công việc lặp đi lặp lại:
- In các số từ 1 đến 100
- Tính tổng các số từ 1 đến n
- Nhập điểm của 30 sinh viên
- In bảng cửu chương

**Vòng lặp** giúp lặp lại một khối lệnh nhiều lần.

### 2. Cấu trúc vòng lặp for

**Cú pháp:**
```cpp
for (khoi_tao; dieu_kien; buoc_nhay) {
    // Các câu lệnh cần lặp
}
```

**Giải thích:**
1. **Khởi tạo:** Chạy một lần khi bắt đầu vòng lặp
2. **Điều kiện:** Kiểm tra trước mỗi lần lặp, nếu đúng thì tiếp tục
3. **Bước nhảy:** Thực hiện sau mỗi lần lặp
4. **Thân vòng lặp:** Các câu lệnh được thực hiện

**Ví dụ cơ bản:**
```cpp
for (int i = 1; i <= 10; i++) {
    cout << i << " ";
}
// Kết quả: 1 2 3 4 5 6 7 8 9 10
```

**Quy trình hoạt động:**
```
1. i = 1 (khởi tạo)
2. Kiểm tra: i <= 10? → Đúng → Thực hiện cout << i
3. i++ → i = 2 (bước nhảy)
4. Kiểm tra: i <= 10? → Đúng → Thực hiện cout << i
5. ... (lặp lại)
6. Khi i = 11, điều kiện sai → Thoát vòng lặp
```

### 3. Các dạng vòng lặp for

**a) Đếm tăng:**
```cpp
for (int i = 1; i <= 10; i++) {
    cout << i << " ";
}
```

**b) Đếm giảm:**
```cpp
for (int i = 10; i >= 1; i--) {
    cout << i << " ";
}
```

**c) Đếm cách khoảng:**
```cpp
for (int i = 0; i <= 100; i += 5) {
    cout << i << " ";  // 0, 5, 10, 15, ..., 100
}
```

**d) Biến đếm kiểu khác:**
```cpp
for (char c = 'A'; c <= 'Z'; c++) {
    cout << c << " ";  // A, B, C, ..., Z
}
```

### 4. Lệnh break và continue

**`break`:** Thoát khỏi vòng lặp ngay lập tức
```cpp
for (int i = 1; i <= 10; i++) {
    if (i == 5) {
        break;  // Thoát khi i = 5
    }
    cout << i << " ";
}
// Kết quả: 1 2 3 4
```

**`continue`:** Bỏ qua phần còn lại của vòng lặp, tiếp tục lần lặp tiếp theo
```cpp
for (int i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        continue;  // Bỏ qua số chẵn
    }
    cout << i << " ";
}
// Kết quả: 1 3 5 7 9 (chỉ in số lẻ)
```

### 5. Vòng lặp for vô hạn

```cpp
for (;;) {
    // Vòng lặp vô hạn (cần break để thoát)
}
```

---

## 💻 Ví dụ minh họa

### Ví dụ 1: In các số từ 1 đến n

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    
    cout << "Nhap n: ";
    cin >> n;
    
    cout << "Cac so tu 1 den " << n << ": ";
    for (int i = 1; i <= n; i++) {
        cout << i << " ";
    }
    
    return 0;
}
```

### Ví dụ 2: Tính tổng các số từ 1 đến n

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    int tong = 0;
    
    cout << "Nhap n: ";
    cin >> n;
    
    for (int i = 1; i <= n; i++) {
        tong += i;  // tong = tong + i
    }
    
    cout << "Tong cac so tu 1 den " << n << " la: " << tong << endl;
    
    return 0;
}
```

### Ví dụ 3: Tính giai thừa n!

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    long long giaiThua = 1;
    
    cout << "Nhap n: ";
    cin >> n;
    
    if (n < 0) {
        cout << "Khong tinh duoc giai thua so am!" << endl;
    } else {
        for (int i = 1; i <= n; i++) {
            giaiThua *= i;  // giaiThua = giaiThua * i
        }
        cout << n << "! = " << giaiThua << endl;
    }
    
    return 0;
}
```

### Ví dụ 4: In bảng cửu chương

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    
    cout << "Nhap bang cuu chuong can in (2-9): ";
    cin >> n;
    
    cout << "Bang cuu chuong " << n << ":" << endl;
    for (int i = 1; i <= 10; i++) {
        cout << n << " x " << i << " = " << (n * i) << endl;
    }
    
    return 0;
}
```

### Ví dụ 5: Đếm số chẵn, số lẻ trong khoảng

```cpp
#include <iostream>
using namespace std;

int main() {
    int a, b;
    int demChan = 0, demLe = 0;
    
    cout << "Nhap khoang [a, b]: ";
    cin >> a >> b;
    
    for (int i = a; i <= b; i++) {
        if (i % 2 == 0) {
            demChan++;
        } else {
            demLe++;
        }
    }
    
    cout << "So chan: " << demChan << endl;
    cout << "So le: " << demLe << endl;
    
    return 0;
}
```

### Ví dụ 6: Tính tổng các số chẵn từ 1 đến n

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    int tong = 0;
    
    cout << "Nhap n: ";
    cin >> n;
    
    for (int i = 2; i <= n; i += 2) {
        tong += i;
    }
    
    cout << "Tong cac so chan tu 1 den " << n << " la: " << tong << endl;
    
    return 0;
}
```

### Ví dụ 7: Kiểm tra số nguyên tố

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    bool laSoNguyenTo = true;
    
    cout << "Nhap so nguyen duong: ";
    cin >> n;
    
    if (n < 2) {
        laSoNguyenTo = false;
    } else {
        for (int i = 2; i < n; i++) {
            if (n % i == 0) {
                laSoNguyenTo = false;
                break;  // Tìm thấy ước → không phải số nguyên tố
            }
        }
    }
    
    if (laSoNguyenTo) {
        cout << n << " la so nguyen to!" << endl;
    } else {
        cout << n << " khong phai so nguyen to!" << endl;
    }
    
    return 0;
}
```

### Ví dụ 8: Tìm số lớn nhất trong n số

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    int so, max;
    
    cout << "Nhap so luong so: ";
    cin >> n;
    
    if (n > 0) {
        cout << "Nhap so thu 1: ";
        cin >> max;
        
        for (int i = 2; i <= n; i++) {
            cout << "Nhap so thu " << i << ": ";
            cin >> so;
            
            if (so > max) {
                max = so;
            }
        }
        
        cout << "So lon nhat: " << max << endl;
    }
    
    return 0;
}
```

---

## 🧠 Bài tập thực hành

### Bài tập cơ bản

**Bài 1:** Viết chương trình in các số từ n đến 1 (giảm dần)

**Bài 2:** Viết chương trình tính tổng: S = 1 + 2 + 3 + ... + n

**Bài 3:** Viết chương trình tính tổng bình phương: S = 1² + 2² + 3² + ... + n²

**Bài 4:** Viết chương trình in bảng cửu chương từ 2 đến 9

**Bài 5:** Viết chương trình nhập n số, tính tổng và trung bình cộng

### Bài tập trung bình

**Bài 6:** Viết chương trình in các số chẵn từ 1 đến n

**Bài 7:** Viết chương trình tính tổng: S = 2 + 4 + 6 + ... + 2n

**Bài 8:** Viết chương trình tìm số lớn nhất và số nhỏ nhất trong n số

**Bài 9:** Viết chương trình đếm số lượng số chia hết cho 3 trong khoảng [a, b]

**Bài 10:** Viết chương trình tính lũy thừa: a^n (không dùng hàm pow)

### Bài tập nâng cao

**Bài 11:** Viết chương trình kiểm tra số hoàn hảo:
- Số hoàn hảo là số bằng tổng các ước của nó (không tính chính nó)
- Ví dụ: 6 = 1 + 2 + 3

**Bài 12:** Viết chương trình in tất cả số nguyên tố trong khoảng [a, b]

**Bài 13:** Viết chương trình tính tổng: S = 1 - 2 + 3 - 4 + ... + (-1)^(n+1) * n

**Bài 14:** Viết chương trình in hình tam giác số:
```
1
12
123
1234
12345
```

**Bài 15:** Viết chương trình tính tổng các chữ số của một số:
- Ví dụ: 1234 → Tổng = 1 + 2 + 3 + 4 = 10

---

## 📝 Lưu ý quan trọng

1. **Biến đếm:** Thường dùng `i`, `j`, `k` (quy ước)
2. **Điều kiện:** Phải có điều kiện dừng rõ ràng, tránh vòng lặp vô hạn
3. **Bước nhảy:** Có thể tăng, giảm, hoặc nhảy cách khoảng
4. **Phạm vi biến:** Biến khai báo trong `for` chỉ tồn tại trong vòng lặp
5. **Hiệu năng:** Với số lớn, cần chú ý đến độ phức tạp thuật toán

---

## ✅ Kiểm tra kiến thức

1. Vòng lặp `for (int i = 1; i <= 10; i++)` chạy bao nhiêu lần?

2. Viết vòng lặp in các số từ 10 xuống 1

3. Sự khác biệt giữa `break` và `continue`?

4. Làm thế nào để tạo vòng lặp đếm cách 5 (0, 5, 10, 15...)?

---

## 🎯 Tóm tắt

- ✅ Đã học cấu trúc và cách sử dụng vòng lặp `for`
- ✅ Hiểu cách vòng lặp hoạt động (khởi tạo, điều kiện, bước nhảy)
- ✅ Biết sử dụng `break` để thoát vòng lặp
- ✅ Biết sử dụng `continue` để bỏ qua lần lặp hiện tại
- ✅ Áp dụng vòng lặp để giải các bài toán thực tế

**Bài tiếp theo:** [Buổi 6: Vòng lặp while và do-while](./lesson-6.md)
