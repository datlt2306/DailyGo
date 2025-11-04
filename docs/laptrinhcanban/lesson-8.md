# Buổi 8: Hàm cơ bản

## 🎯 Mục tiêu học tập

Sau buổi học này, sinh viên sẽ:

-   Hiểu khái niệm hàm và lợi ích của việc sử dụng hàm
-   Biết cách khai báo, định nghĩa và gọi hàm
-   Hiểu sự khác biệt giữa khai báo và định nghĩa hàm
-   Viết các hàm đơn giản để tái sử dụng code
-   Áp dụng hàm vào các bài toán thực tế

---

## 📘 Nội dung chính

### 1. Hàm là gì?

**Hàm** là một khối code có tên, được tạo để thực hiện một công việc cụ thể. Khi cần, ta gọi hàm để sử dụng.

**Lợi ích:**

-   ✅ Tái sử dụng code (DRY - Don't Repeat Yourself)
-   ✅ Dễ bảo trì và sửa lỗi
-   ✅ Chia nhỏ chương trình thành các phần nhỏ, dễ hiểu
-   ✅ Có thể test từng hàm riêng biệt

**Ví dụ thực tế:**

-   Tính tổng 2 số → Hàm `tinhTong()`
-   Kiểm tra số nguyên tố → Hàm `laSoNguyenTo()`
-   In menu → Hàm `inMenu()`

### 2. Cấu trúc hàm

**Cú pháp:**

```cpp
kieu_tra_ve ten_ham(danh_sach_tham_so) {
    // Các câu lệnh
    return gia_tri;  // Nếu có giá trị trả về
}
```

**Các thành phần:**

1. **Kiểu trả về:** `int`, `float`, `void` (không trả về)...
2. **Tên hàm:** Quy tắc đặt tên như biến
3. **Tham số:** Dữ liệu đầu vào (có thể không có)
4. **Thân hàm:** Code thực hiện công việc
5. **Return:** Trả về giá trị (nếu có)

### 3. Hàm không có tham số và không trả về giá trị

```cpp
void inMenu() {
    cout << "=== MENU ===" << endl;
    cout << "1. Tinh tong" << endl;
    cout << "2. Tinh hieu" << endl;
    cout << "3. Thoat" << endl;
}
```

### 4. Hàm có tham số nhưng không trả về giá trị

```cpp
void inChao(string ten) {
    cout << "Xin chao, " << ten << "!" << endl;
}
```

### 5. Hàm có tham số và trả về giá trị

```cpp
int tinhTong(int a, int b) {
    int ketQua = a + b;
    return ketQua;
}
```

### 6. Hàm không có tham số nhưng trả về giá trị

```cpp
int nhapSo() {
    int n;
    cout << "Nhap so: ";
    cin >> n;
    return n;
}
```

### 7. Khai báo và định nghĩa hàm

**Khai báo hàm (Function Declaration/Prototype):**

```cpp
int tinhTong(int a, int b);  // Chỉ khai báo, không có thân hàm
```

**Định nghĩa hàm (Function Definition):**

```cpp
int tinhTong(int a, int b) {
    return a + b;
}
```

**Lưu ý:** Nếu định nghĩa hàm trước `main()`, không cần khai báo. Nếu định nghĩa sau `main()`, cần khai báo trước.

---

## 💻 Ví dụ minh họa

### Ví dụ 1: Hàm tính tổng

```cpp
#include <iostream>
using namespace std;

// Định nghĩa hàm
int tinhTong(int a, int b) {
    return a + b;
}

int main() {
    int x = 5, y = 3;
    int ketQua = tinhTong(x, y);
    cout << "Tong: " << ketQua << endl;

    return 0;
}
```

### Ví dụ 2: Hàm in menu

```cpp
#include <iostream>
using namespace std;

void inMenu() {
    cout << "\n=== MENU ===" << endl;
    cout << "1. Tinh tong" << endl;
    cout << "2. Tinh hieu" << endl;
    cout << "3. Tinh tich" << endl;
    cout << "4. Thoat" << endl;
}

int main() {
    inMenu();  // Gọi hàm
    return 0;
}
```

### Ví dụ 3: Hàm kiểm tra số chẵn

```cpp
#include <iostream>
using namespace std;

bool laSoChan(int n) {
    if (n % 2 == 0) {
        return true;
    } else {
        return false;
    }
    // Hoặc đơn giản: return (n % 2 == 0);
}

int main() {
    int so;
    cout << "Nhap so: ";
    cin >> so;

    if (laSoChan(so)) {
        cout << so << " la so chan" << endl;
    } else {
        cout << so << " la so le" << endl;
    }

    return 0;
}
```

### Ví dụ 4: Hàm tìm số lớn nhất

```cpp
#include <iostream>
using namespace std;

int timMax(int a, int b, int c) {
    int max = a;
    if (b > max) max = b;
    if (c > max) max = c;
    return max;
}

int main() {
    int x, y, z;
    cout << "Nhap 3 so: ";
    cin >> x >> y >> z;

    int lonNhat = timMax(x, y, z);
    cout << "So lon nhat: " << lonNhat << endl;

    return 0;
}
```

### Ví dụ 5: Hàm tính giai thừa

```cpp
#include <iostream>
using namespace std;

long long tinhGiaiThua(int n) {
    long long ketQua = 1;
    for (int i = 1; i <= n; i++) {
        ketQua *= i;
    }
    return ketQua;
}

int main() {
    int n;
    cout << "Nhap n: ";
    cin >> n;

    cout << n << "! = " << tinhGiaiThua(n) << endl;

    return 0;
}
```

### Ví dụ 6: Hàm kiểm tra số nguyên tố

```cpp
#include <iostream>
using namespace std;

bool laSoNguyenTo(int n) {
    if (n < 2) return false;

    for (int i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

int main() {
    int n;
    cout << "Nhap so: ";
    cin >> n;

    if (laSoNguyenTo(n)) {
        cout << n << " la so nguyen to" << endl;
    } else {
        cout << n << " khong phai so nguyen to" << endl;
    }

    return 0;
}
```

### Ví dụ 7: Hàm tính lũy thừa

```cpp
#include <iostream>
using namespace std;

long long tinhLuyThua(int coSo, int soMu) {
    long long ketQua = 1;
    for (int i = 0; i < soMu; i++) {
        ketQua *= coSo;
    }
    return ketQua;
}

int main() {
    int a, n;
    cout << "Nhap co so: ";
    cin >> a;
    cout << "Nhap so mu: ";
    cin >> n;

    cout << a << "^" << n << " = " << tinhLuyThua(a, n) << endl;

    return 0;
}
```

### Ví dụ 8: Chương trình sử dụng nhiều hàm

```cpp
#include <iostream>
using namespace std;

// Khai báo hàm
void inMenu();
int tinhTong(int a, int b);
int tinhHieu(int a, int b);
int tinhTich(int a, int b);

int main() {
    int luaChon, a, b;

    do {
        inMenu();
        cout << "Chon: ";
        cin >> luaChon;

        if (luaChon >= 1 && luaChon <= 3) {
            cout << "Nhap 2 so: ";
            cin >> a >> b;

            if (luaChon == 1) {
                cout << "Tong: " << tinhTong(a, b) << endl;
            } else if (luaChon == 2) {
                cout << "Hieu: " << tinhHieu(a, b) << endl;
            } else if (luaChon == 3) {
                cout << "Tich: " << tinhTich(a, b) << endl;
            }
        }

    } while (luaChon != 4);

    return 0;
}

// Định nghĩa hàm
void inMenu() {
    cout << "\n=== MENU ===" << endl;
    cout << "1. Tinh tong" << endl;
    cout << "2. Tinh hieu" << endl;
    cout << "3. Tinh tich" << endl;
    cout << "4. Thoat" << endl;
}

int tinhTong(int a, int b) {
    return a + b;
}

int tinhHieu(int a, int b) {
    return a - b;
}

int tinhTich(int a, int b) {
    return a * b;
}
```

### Ví dụ 9: Hàm vẽ hình tam giác

```cpp
#include <iostream>
using namespace std;

void veTamGiac(int n) {
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++) {
            cout << "* ";
        }
        cout << endl;
    }
}

int main() {
    int chieuCao;
    cout << "Nhap chieu cao: ";
    cin >> chieuCao;

    veTamGiac(chieuCao);

    return 0;
}
```

### Ví dụ 10: Hàm tính tổng các chữ số

```cpp
#include <iostream>
using namespace std;

int tinhTongChuSo(int n) {
    int tong = 0;
    n = abs(n);  // Lấy giá trị tuyệt đối

    while (n > 0) {
        tong += n % 10;
        n /= 10;
    }

    return tong;
}

int main() {
    int so;
    cout << "Nhap so: ";
    cin >> so;

    cout << "Tong cac chu so: " << tinhTongChuSo(so) << endl;

    return 0;
}
```

---

## 🧠 Bài tập thực hành

### Bài tập cơ bản

**Bài 1:** Viết hàm `tinhHieu(int a, int b)` trả về hiệu của 2 số

**Bài 2:** Viết hàm `tinhTich(int a, int b)` trả về tích của 2 số

**Bài 3:** Viết hàm `tinhThuong(float a, float b)` trả về thương (xử lý chia cho 0)

**Bài 4:** Viết hàm `inXinChao()` in ra "Xin chao, toi la lap trinh vien!"

**Bài 5:** Viết hàm `laSoLe(int n)` kiểm tra số lẻ

### Bài tập trung bình

**Bài 6:** Viết hàm `timMin(int a, int b, int c)` tìm số nhỏ nhất

**Bài 7:** Viết hàm `tinhTrungBinh(float a, float b, float c)` tính trung bình cộng

**Bài 8:** Viết hàm `xepLoaiDiem(float diem)` trả về xếp loại (Xuất sắc, Giỏi, Khá...)

**Bài 9:** Viết hàm `daoNguocSo(int n)` trả về số đảo ngược

**Bài 10:** Viết hàm `demSoChuSo(int n)` đếm số chữ số

### Bài tập nâng cao

**Bài 11:** Viết hàm `tinhUCLN(int a, int b)` tính ước chung lớn nhất

**Bài 12:** Viết hàm `tinhBCNN(int a, int b)` tính bội chung nhỏ nhất

**Bài 13:** Viết hàm `laSoHoanHao(int n)` kiểm tra số hoàn hảo

**Bài 14:** Viết hàm `inSoNguyenTo(int n)` in tất cả số nguyên tố từ 1 đến n

**Bài 15:** Viết chương trình máy tính với các hàm riêng biệt cho mỗi phép tính

---

## 📝 Lưu ý quan trọng

1. **Tên hàm:** Nên đặt tên rõ ràng, mô tả chức năng
2. **Return:** Hàm `void` không cần `return`, hoặc dùng `return;` để thoát sớm
3. **Tham số:** Có thể truyền giá trị, biến, hoặc biểu thức
4. **Phạm vi biến:** Biến trong hàm là biến cục bộ
5. **Khai báo vs Định nghĩa:** Nhớ khai báo nếu định nghĩa sau `main()`

---

## ✅ Kiểm tra kiến thức

1. Lợi ích của việc sử dụng hàm?

2. Sự khác biệt giữa `void` và kiểu trả về khác?

3. Có thể có nhiều câu lệnh `return` trong một hàm không?

4. Khi nào cần khai báo hàm trước `main()`?

---

## 🎯 Tóm tắt

-   ✅ Đã học khái niệm và cách sử dụng hàm
-   ✅ Biết khai báo và định nghĩa hàm
-   ✅ Hiểu cách truyền tham số và trả về giá trị
-   ✅ Áp dụng hàm để tái sử dụng code và tổ chức chương trình tốt hơn

**Bài tiếp theo:** [Buổi 9: Tham số, giá trị trả về và phạm vi biến](./lesson-9.md)
