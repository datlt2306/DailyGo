# Buổi 2: Biến, kiểu dữ liệu và nhập xuất

## 🎯 Mục tiêu học tập

Sau buổi học này, sinh viên sẽ:
- Hiểu khái niệm biến và cách khai báo biến
- Nắm được các kiểu dữ liệu cơ bản trong C++
- Biết cách nhập dữ liệu từ bàn phím bằng `cin`
- Sử dụng biến để lưu trữ và tính toán
- Áp dụng vào các bài toán thực tế (tính điểm, tiền điện...)

---

## 📘 Nội dung chính

### 1. Biến là gì?

**Biến** là vùng nhớ có tên, dùng để lưu trữ dữ liệu có thể thay đổi.

**Ví dụ thực tế:**
- `tuoi`: Lưu tuổi của một người
- `diem`: Lưu điểm số của sinh viên
- `soDien`: Lưu số điện tiêu thụ trong tháng

### 2. Khai báo biến

**Cú pháp:**
```cpp
kieu_du_lieu ten_bien;
kieu_du_lieu ten_bien = gia_tri_khoi_tao;
```

**Ví dụ:**
```cpp
int tuoi;
int tuoi = 20;
string hoTen = "Nguyen Van A";
```

### 3. Các kiểu dữ liệu cơ bản

| Kiểu dữ liệu | Kích thước | Phạm vi | Ví dụ |
|--------------|------------|---------|-------|
| `int` | 4 bytes | -2,147,483,648 đến 2,147,483,647 | `int tuoi = 20;` |
| `float` | 4 bytes | ±3.4×10³⁸ | `float diem = 8.5;` |
| `double` | 8 bytes | ±1.7×10³⁰⁸ | `double tien = 1500000.5;` |
| `char` | 1 byte | -128 đến 127 hoặc ký tự | `char kyTu = 'A';` |
| `string` | Thay đổi | Chuỗi ký tự | `string ten = "Nam";` |
| `bool` | 1 byte | `true` hoặc `false` | `bool laSinhVien = true;` |

**Lưu ý:** Với `string`, cần `#include <string>`

### 4. Nhập dữ liệu với `cin`

**Cú pháp:**
```cpp
cin >> ten_bien;
```

**Ví dụ:**
```cpp
int tuoi;
cin >> tuoi;  // Nhập tuổi từ bàn phím
```

### 5. Xuất dữ liệu với `cout`

```cpp
cout << "Tuoi cua ban la: " << tuoi << endl;
```

---

## 💻 Ví dụ minh họa

### Ví dụ 1: Nhập và xuất thông tin cá nhân

```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
    string hoTen;
    int tuoi;
    float chieuCao;
    
    cout << "Nhap ho ten: ";
    cin >> hoTen;
    
    cout << "Nhap tuoi: ";
    cin >> tuoi;
    
    cout << "Nhap chieu cao (m): ";
    cin >> chieuCao;
    
    cout << "\n=== THONG TIN ===" << endl;
    cout << "Ho ten: " << hoTen << endl;
    cout << "Tuoi: " << tuoi << endl;
    cout << "Chieu cao: " << chieuCao << " m" << endl;
    
    return 0;
}
```

**Lưu ý:** `cin >> hoTen;` chỉ đọc được một từ. Để đọc cả dòng, dùng `getline(cin, hoTen);`

### Ví dụ 2: Tính tổng hai số

```cpp
#include <iostream>
using namespace std;

int main() {
    int so1, so2, tong;
    
    cout << "Nhap so thu nhat: ";
    cin >> so1;
    
    cout << "Nhap so thu hai: ";
    cin >> so2;
    
    tong = so1 + so2;
    
    cout << "Tong cua " << so1 << " va " << so2 << " la: " << tong << endl;
    
    return 0;
}
```

### Ví dụ 3: Tính điểm trung bình 3 môn

```cpp
#include <iostream>
using namespace std;

int main() {
    float diemToan, diemLy, diemHoa;
    float diemTrungBinh;
    
    cout << "=== TINH DIEM TRUNG BINH ===" << endl;
    cout << "Nhap diem Toan: ";
    cin >> diemToan;
    
    cout << "Nhap diem Ly: ";
    cin >> diemLy;
    
    cout << "Nhap diem Hoa: ";
    cin >> diemHoa;
    
    diemTrungBinh = (diemToan + diemLy + diemHoa) / 3.0;
    
    cout << "\nDiem trung binh 3 mon: " << diemTrungBinh << endl;
    
    return 0;
}
```

### Ví dụ 4: Đổi đơn vị (Celsius sang Fahrenheit)

```cpp
#include <iostream>
using namespace std;

int main() {
    float doC, doF;
    
    cout << "Nhap nhiet do (do C): ";
    cin >> doC;
    
    doF = (doC * 9.0 / 5.0) + 32;
    
    cout << doC << " do C = " << doF << " do F" << endl;
    
    return 0;
}
```

### Ví dụ 5: Tính tiền điện (đơn giản)

```cpp
#include <iostream>
using namespace std;

int main() {
    int soDien;  // Số điện tiêu thụ (kWh)
    float tienDien;
    const int GIA_DIEN = 2000;  // Giá điện: 2000 VND/kWh
    
    cout << "Nhap so dien tieu thu (kWh): ";
    cin >> soDien;
    
    tienDien = soDien * GIA_DIEN;
    
    cout << "\n=== HOA DON TIEN DIEN ===" << endl;
    cout << "So dien tieu thu: " << soDien << " kWh" << endl;
    cout << "Gia dien: " << GIA_DIEN << " VND/kWh" << endl;
    cout << "Tong tien phai tra: " << tienDien << " VND" << endl;
    
    return 0;
}
```

---

## 🧠 Bài tập thực hành

### Bài tập cơ bản

**Bài 1:** Viết chương trình nhập bán kính hình tròn, tính và in ra:
- Chu vi hình tròn (C = 2 × π × r)
- Diện tích hình tròn (S = π × r²)

**Bài 2:** Viết chương trình nhập chiều dài và chiều rộng hình chữ nhật, tính:
- Chu vi hình chữ nhật
- Diện tích hình chữ nhật

**Bài 3:** Viết chương trình nhập số tiền (VND), đổi sang USD (tỷ giá: 1 USD = 24,000 VND)

**Bài 4:** Viết chương trình nhập điểm 4 môn học, tính điểm trung bình và in kết quả

**Bài 5:** Viết chương trình tính tuổi: Nhập năm sinh, in ra tuổi hiện tại (giả sử năm hiện tại là 2024)

### Bài tập nâng cao

**Bài 6:** Viết chương trình tính tiền vé xe buýt:
- Trẻ em (< 6 tuổi): Miễn phí
- Học sinh (6-17 tuổi): 3,000 VND
- Người lớn (≥ 18 tuổi): 7,000 VND
- Người cao tuổi (≥ 60 tuổi): 3,000 VND

Nhập tuổi, tính và in tiền vé.

**Bài 7:** Viết chương trình tính tiền taxi:
- Km đầu tiên: 15,000 VND
- Từ km thứ 2 đến km thứ 5: 12,000 VND/km
- Từ km thứ 6 trở đi: 10,000 VND/km

Nhập số km, tính tổng tiền.

**Bài 8:** Viết chương trình tính BMI (Body Mass Index):
- Nhập cân nặng (kg) và chiều cao (m)
- BMI = cân nặng / (chiều cao)²
- In kết quả BMI và phân loại:
  - < 18.5: Gầy
  - 18.5 - 24.9: Bình thường
  - 25 - 29.9: Thừa cân
  - ≥ 30: Béo phì

---

## 📝 Lưu ý quan trọng

1. **Khai báo biến trước khi sử dụng**
2. **Chọn kiểu dữ liệu phù hợp:**
   - Số nguyên → `int`
   - Số thập phân → `float` hoặc `double`
   - Chuỗi ký tự → `string`
3. **Khởi tạo giá trị ban đầu cho biến** (nếu cần)
4. **Với `string`, nhớ `#include <string>`**
5. **Đọc cả dòng:** Dùng `getline(cin, tenBien);` thay vì `cin >> tenBien;`

**Ví dụ đọc cả dòng:**
```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
    string hoTen;
    
    cout << "Nhap ho ten (day du): ";
    cin.ignore();  // Xóa ký tự thừa trong bộ đệm
    getline(cin, hoTen);
    
    cout << "Ho ten: " << hoTen << endl;
    
    return 0;
}
```

---

## ✅ Kiểm tra kiến thức

1. Biến `int tuoi;` có thể lưu giá trị nào sau đây?
   - a) 20
   - b) 20.5
   - c) "hai muoi"

2. Để nhập một số nguyên, dùng lệnh nào?

3. Sự khác biệt giữa `float` và `double`?

4. Tại sao khi tính điểm trung bình cần chia cho `3.0` thay vì `3`?

---

## 🎯 Tóm tắt

- ✅ Đã học cách khai báo và sử dụng biến
- ✅ Biết các kiểu dữ liệu cơ bản: `int`, `float`, `double`, `char`, `string`, `bool`
- ✅ Sử dụng `cin` để nhập dữ liệu từ bàn phím
- ✅ Kết hợp nhập/xuất và tính toán để giải bài toán thực tế

**Bài tiếp theo:** [Buổi 3: Toán tử và biểu thức](./lesson-3.md)
