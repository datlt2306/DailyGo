# Buổi 2: Biến, kiểu dữ liệu và nhập xuất

## 🎯 Mục tiêu học tập

Sau buổi học này, sinh viên sẽ:
- Hiểu khái niệm biến và cách khai báo biến
- Nắm được các kiểu dữ liệu cơ bản trong C
- Biết cách nhập dữ liệu từ bàn phím bằng `scanf`
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
```c
kieu_du_lieu ten_bien;
kieu_du_lieu ten_bien = gia_tri_khoi_tao;
```

**Ví dụ:**
```c
int tuoi;
int tuoi = 20;
char hoTen[100] = "Nguyen Van A";
```

### 3. Các kiểu dữ liệu cơ bản

| Kiểu dữ liệu | Kích thước | Phạm vi | Ví dụ |
|--------------|------------|---------|-------|
| `int` | 4 bytes | -2,147,483,648 đến 2,147,483,647 | `int tuoi = 20;` |
| `float` | 4 bytes | ±3.4×10³⁸ | `float diem = 8.5;` |
| `double` | 8 bytes | ±1.7×10³⁰⁸ | `double tien = 1500000.5;` |
| `char` | 1 byte | -128 đến 127 hoặc ký tự | `char kyTu = 'A';` |
| `char[]` | Thay đổi | Chuỗi ký tự | `char ten[50] = "Nam";` |
| `bool` (_Bool) | 1 byte | `1` hoặc `0` | `_Bool laSinhVien = 1;` |

**Các em các em lưu ý:** Với chuỗi ký tự, dùng mảng `char` (ví dụ: `char ten[100];`)

### 4. Nhập dữ liệu với `scanf`

**Cú pháp:**
```c
scanf("%d", &ten_bien);  // Với số nguyên
scanf("%f", &ten_bien);  // Với số thực
scanf("%s", ten_bien);   // Với chuỗi (không có khoảng trắng)
```

**Ví dụ:**
```c
int tuoi;
scanf("%d", &tuoi);  // Nhập tuổi từ bàn phím
```

### 5. Xuất dữ liệu với `printf`

```c
printf("Tuoi cua ban la: %d\n", tuoi);
```

---

## 💻 Ví dụ minh họa

### Ví dụ 1: Nhập và xuất thông tin cá nhân

```c
#include <stdio.h>

int main() {
    char hoTen[100];
    int tuoi;
    float chieuCao;
    
    printf("Nhap ho ten: ");
    scanf("%s", hoTen);
    
    printf("Nhap tuoi: ");
    scanf("%d", &tuoi);
    
    printf("Nhap chieu cao (m): ");
    scanf("%f", &chieuCao);
    
    printf("\n=== THONG TIN ===\n");
    printf("Ho ten: %s\n", hoTen);
    printf("Tuoi: %d\n", tuoi);
    printf("Chieu cao: %.2f m\n", chieuCao);
    
    return 0;
}
```

**Các em các em lưu ý:** `scanf("%s", hoTen);` chỉ đọc được một từ. Để đọc cả dòng, dùng `fgets(hoTen, sizeof(hoTen), stdin);`

### Ví dụ 2: Tính tổng hai số

```c
#include <stdio.h>

int main() {
    int so1, so2, tong;
    
    printf("Nhap so thu nhat: ");
    scanf("%d", &so1);
    
    printf("Nhap so thu hai: ");
    scanf("%d", &so2);
    
    tong = so1 + so2;
    
    printf("Tong cua %d va %d la: %d\n", so1, so2, tong);
    
    return 0;
}
```

### Ví dụ 3: Tính điểm trung bình 3 môn

```c
#include <stdio.h>

int main() {
    float diemToan, diemLy, diemHoa;
    float diemTrungBinh;
    
    printf("=== TINH DIEM TRUNG BINH ===\n");
    printf("Nhap diem Toan: ");
    scanf("%f", &diemToan);
    
    printf("Nhap diem Ly: ");
    scanf("%f", &diemLy);
    
    printf("Nhap diem Hoa: ");
    scanf("%f", &diemHoa);
    
    diemTrungBinh = (diemToan + diemLy + diemHoa) / 3.0;
    
    printf("\nDiem trung binh 3 mon: %.2f\n", diemTrungBinh);
    
    return 0;
}
```

### Ví dụ 4: Đổi đơn vị (Celsius sang Fahrenheit)

```c
#include <stdio.h>

int main() {
    float doC, doF;
    
    printf("Nhap nhiet do (do C): ");
    scanf("%f", &doC);
    
    doF = (doC * 9.0 / 5.0) + 32;
    
    printf("%.2f do C = %.2f do F\n", doC, doF);
    
    return 0;
}
```

### Ví dụ 5: Tính tiền điện (đơn giản)

```c
#include <stdio.h>

int main() {
    int soDien;  // Số điện tiêu thụ (kWh)
    float tienDien;
    const int GIA_DIEN = 2000;  // Giá điện: 2000 VND/kWh
    
    printf("Nhap so dien tieu thu (kWh): ");
    scanf("%d", &soDien);
    
    tienDien = soDien * GIA_DIEN;
    
    printf("\n=== HOA DON TIEN DIEN ===\n");
    printf("So dien tieu thu: %d kWh\n", soDien);
    printf("Gia dien: %d VND/kWh\n", GIA_DIEN);
    printf("Tong tien phai tra: %.0f VND\n", tienDien);
    
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

## 📝 Các em các em lưu ý quan trọng

1. **Khai báo biến trước khi sử dụng**
2. **Chọn kiểu dữ liệu phù hợp:**
   - Số nguyên → `int`
   - Số thập phân → `float` hoặc `double`
   - Chuỗi ký tự → `char[]` (mảng ký tự)
3. **Khởi tạo giá trị ban đầu cho biến** (nếu cần)
4. **Với chuỗi ký tự, dùng mảng `char`** (ví dụ: `char hoTen[100];`)
5. **Đọc cả dòng:** Dùng `fgets(tenBien, sizeof(tenBien), stdin);` thay vì `scanf`

**Ví dụ đọc cả dòng:**
```c
#include <stdio.h>
#include <string.h>

int main() {
    char hoTen[100];
    
    printf("Nhap ho ten (day du): ");
    fgets(hoTen, sizeof(hoTen), stdin);
    // Xóa ký tự xuống dòng cuối chuỗi
    hoTen[strcspn(hoTen, "\n")] = 0;
    
    printf("Ho ten: %s\n", hoTen);
    
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
- ✅ Biết các kiểu dữ liệu cơ bản: `int`, `float`, `double`, `char`, `char[]`, `_Bool`
- ✅ Sử dụng `scanf` để nhập dữ liệu từ bàn phím
- ✅ Kết hợp nhập/xuất và tính toán để giải bài toán thực tế

**Bài tiếp theo:** [Buổi 3: Toán tử và biểu thức](./lesson-3.md)
