# Buổi 4: Cấu trúc điều kiện (if-else, switch)

## 🎯 Mục tiêu học tập

Sau buổi học này, sinh viên sẽ:
- Hiểu khái niệm cấu trúc điều kiện và khi nào cần dùng
- Sử dụng thành thạo câu lệnh `if`, `if-else`, `if-else if-else`
- Áp dụng câu lệnh `switch-case` cho các trường hợp nhiều nhánh
- Xử lý các bài toán thực tế có điều kiện (điểm số, tuổi, lựa chọn menu...)
- Kết hợp điều kiện phức tạp với toán tử logic

---

## 📘 Nội dung chính

### 1. Tại sao cần cấu trúc điều kiện?

Trong thực tế, chúng ta thường xuyên gặp các quyết định:
- **Nếu** điểm ≥ 5.0 **thì** đậu, **nếu không** thì rớt
- **Nếu** tuổi < 18 **thì** chưa đủ tuổi lái xe
- **Nếu** số dư ≥ số tiền rút **thì** cho phép rút, **nếu không** thì từ chối

**Cấu trúc điều kiện** giúp chương trình đưa ra quyết định dựa trên điều kiện.

### 2. Câu lệnh if

**Cú pháp:**
```cpp
if (dieu_kien) {
    // Các câu lệnh thực hiện nếu điều kiện đúng
}
```

**Ví dụ:**
```cpp
int diem = 8;
if (diem >= 5) {
    cout << "Ban da dau!" << endl;
}
```

### 3. Câu lệnh if-else

**Cú pháp:**
```cpp
if (dieu_kien) {
    // Các câu lệnh nếu điều kiện đúng
} else {
    // Các câu lệnh nếu điều kiện sai
}
```

**Ví dụ:**
```cpp
int diem = 4;
if (diem >= 5) {
    cout << "Ban da dau!" << endl;
} else {
    cout << "Ban da rot!" << endl;
}
```

### 4. Câu lệnh if-else if-else (nhiều điều kiện)

**Cú pháp:**
```cpp
if (dieu_kien_1) {
    // Xử lý điều kiện 1
} else if (dieu_kien_2) {
    // Xử lý điều kiện 2
} else if (dieu_kien_3) {
    // Xử lý điều kiện 3
} else {
    // Xử lý các trường hợp còn lại
}
```

**Ví dụ:**
```cpp
int diem = 7;
if (diem >= 9) {
    cout << "Xuat sac!" << endl;
} else if (diem >= 8) {
    cout << "Gioi!" << endl;
} else if (diem >= 7) {
    cout << "Kha!" << endl;
} else if (diem >= 5) {
    cout << "Trung binh!" << endl;
} else {
    cout << "Yeu!" << endl;
}
```

### 5. Câu lệnh switch-case

**Cú pháp:**
```cpp
switch (bien) {
    case gia_tri_1:
        // Xử lý khi bien == gia_tri_1
        break;
    case gia_tri_2:
        // Xử lý khi bien == gia_tri_2
        break;
    default:
        // Xử lý các trường hợp còn lại
        break;
}
```

**Lưu ý:**
- `switch` chỉ dùng với `int`, `char`, `enum`
- **Bắt buộc** có `break;` sau mỗi `case` (trừ khi cố ý để rơi xuống case tiếp theo)
- `default` là trường hợp mặc định (tương tự `else`)

**Ví dụ:**
```cpp
int luaChon;
cout << "Chon mon (1-4): ";
cin >> luaChon;

switch (luaChon) {
    case 1:
        cout << "Ban chon Com suon!" << endl;
        break;
    case 2:
        cout << "Ban chon Pho bo!" << endl;
        break;
    case 3:
        cout << "Ban chon Bun bo!" << endl;
        break;
    case 4:
        cout << "Ban chon Banh mi!" << endl;
        break;
    default:
        cout << "Lua chon khong hop le!" << endl;
        break;
}
```

### 6. If lồng nhau (Nested if)

```cpp
if (dieu_kien_1) {
    if (dieu_kien_2) {
        // Xử lý khi cả 2 điều kiện đều đúng
    }
}
```

**Ví dụ:**
```cpp
int tuoi = 20;
bool coBangLai = true;

if (tuoi >= 18) {
    if (coBangLai) {
        cout << "Duoc phep lai xe!" << endl;
    } else {
        cout << "Can co bang lai!" << endl;
    }
} else {
    cout << "Chua du tuoi lai xe!" << endl;
}
```

---

## 💻 Ví dụ minh họa

### Ví dụ 1: Xếp loại điểm số

```cpp
#include <iostream>
using namespace std;

int main() {
    float diem;
    
    cout << "Nhap diem cua ban: ";
    cin >> diem;
    
    if (diem >= 9.0) {
        cout << "Xep loai: Xuat sac!" << endl;
    } else if (diem >= 8.0) {
        cout << "Xep loai: Gioi!" << endl;
    } else if (diem >= 7.0) {
        cout << "Xep loai: Kha!" << endl;
    } else if (diem >= 5.0) {
        cout << "Xep loai: Trung binh!" << endl;
    } else {
        cout << "Xep loai: Yeu!" << endl;
    }
    
    return 0;
}
```

### Ví dụ 2: Tính tiền vé xe buýt theo độ tuổi

```cpp
#include <iostream>
using namespace std;

int main() {
    int tuoi;
    
    cout << "Nhap tuoi: ";
    cin >> tuoi;
    
    if (tuoi < 6) {
        cout << "Mien phi!" << endl;
    } else if (tuoi >= 6 && tuoi < 18) {
        cout << "Gia ve: 3,000 VND" << endl;
    } else if (tuoi >= 18 && tuoi < 60) {
        cout << "Gia ve: 7,000 VND" << endl;
    } else {
        cout << "Gia ve: 3,000 VND (Nguoi cao tuoi)" << endl;
    }
    
    return 0;
}
```

### Ví dụ 3: Menu lựa chọn với switch

```cpp
#include <iostream>
using namespace std;

int main() {
    int luaChon;
    
    cout << "=== MENU CA FE ===" << endl;
    cout << "1. Ca phe den - 15,000 VND" << endl;
    cout << "2. Ca phe sua - 20,000 VND" << endl;
    cout << "3. Tra sua - 25,000 VND" << endl;
    cout << "4. Nuoc cam - 30,000 VND" << endl;
    cout << "Chon mon (1-4): ";
    cin >> luaChon;
    
    switch (luaChon) {
        case 1:
            cout << "Ban da chon Ca phe den. Gia: 15,000 VND" << endl;
            break;
        case 2:
            cout << "Ban da chon Ca phe sua. Gia: 20,000 VND" << endl;
            break;
        case 3:
            cout << "Ban da chon Tra sua. Gia: 25,000 VND" << endl;
            break;
        case 4:
            cout << "Ban da chon Nuoc cam. Gia: 30,000 VND" << endl;
            break;
        default:
            cout << "Lua chon khong hop le!" << endl;
            break;
    }
    
    return 0;
}
```

### Ví dụ 4: Kiểm tra năm nhuận

```cpp
#include <iostream>
using namespace std;

int main() {
    int nam;
    
    cout << "Nhap nam: ";
    cin >> nam;
    
    // Năm nhuận: chia hết cho 4, nhưng không chia hết cho 100
    // Hoặc chia hết cho 400
    if ((nam % 4 == 0 && nam % 100 != 0) || (nam % 400 == 0)) {
        cout << nam << " la nam nhuan!" << endl;
    } else {
        cout << nam << " khong phai nam nhuan!" << endl;
    }
    
    return 0;
}
```

### Ví dụ 5: Giải phương trình bậc nhất ax + b = 0

```cpp
#include <iostream>
using namespace std;

int main() {
    float a, b;
    
    cout << "Giai phuong trinh ax + b = 0" << endl;
    cout << "Nhap a: ";
    cin >> a;
    cout << "Nhap b: ";
    cin >> b;
    
    if (a == 0) {
        if (b == 0) {
            cout << "Phuong trinh co vo so nghiem!" << endl;
        } else {
            cout << "Phuong trinh vo nghiem!" << endl;
        }
    } else {
        float x = -b / a;
        cout << "Nghiem cua phuong trinh: x = " << x << endl;
    }
    
    return 0;
}
```

### Ví dụ 6: Tính tiền điện theo bậc thang (nâng cao)

```cpp
#include <iostream>
using namespace std;

int main() {
    int soDien;
    float tienDien;
    
    cout << "Nhap so dien tieu thu (kWh): ";
    cin >> soDien;
    
    if (soDien <= 50) {
        tienDien = soDien * 1800;
    } else if (soDien <= 100) {
        tienDien = 50 * 1800 + (soDien - 50) * 2300;
    } else {
        tienDien = 50 * 1800 + 50 * 2300 + (soDien - 100) * 2900;
    }
    
    cout << "Tong tien dien: " << tienDien << " VND" << endl;
    
    return 0;
}
```

### Ví dụ 7: Kiểm tra tam giác

```cpp
#include <iostream>
using namespace std;

int main() {
    float a, b, c;
    
    cout << "Nhap 3 canh cua tam giac: ";
    cin >> a >> b >> c;
    
    // Kiểm tra điều kiện tam giác
    if (a + b > c && b + c > a && a + c > b) {
        // Phân loại tam giác
        if (a == b && b == c) {
            cout << "Tam giac deu!" << endl;
        } else if (a == b || b == c || a == c) {
            cout << "Tam giac can!" << endl;
        } else if (a*a + b*b == c*c || b*b + c*c == a*a || a*a + c*c == b*b) {
            cout << "Tam giac vuong!" << endl;
        } else {
            cout << "Tam giac thuong!" << endl;
        }
    } else {
        cout << "Khong phai tam giac!" << endl;
    }
    
    return 0;
}
```

---

## 🧠 Bài tập thực hành

### Bài tập cơ bản

**Bài 1:** Viết chương trình nhập điểm số (0-10), xếp loại:
- 9-10: Xuất sắc
- 8-8.9: Giỏi
- 7-7.9: Khá
- 5-6.9: Trung bình
- < 5: Yếu

**Bài 2:** Viết chương trình nhập 2 số, tìm số lớn nhất

**Bài 3:** Viết chương trình nhập 3 số, sắp xếp theo thứ tự tăng dần

**Bài 4:** Viết chương trình kiểm tra số chẵn/lẻ

**Bài 5:** Viết chương trình menu tính toán:
```
1. Tinh tong 2 so
2. Tinh hieu 2 so
3. Tinh tich 2 so
4. Tinh thuong 2 so
```

### Bài tập nâng cao

**Bài 6:** Viết chương trình tính BMI và phân loại:
- < 18.5: Gầy
- 18.5 - 24.9: Bình thường
- 25 - 29.9: Thừa cân
- ≥ 30: Béo phì

**Bài 7:** Viết chương trình giải phương trình bậc 2: ax² + bx + c = 0
- Tính delta = b² - 4ac
- Nếu delta < 0: Vô nghiệm
- Nếu delta = 0: Nghiệm kép
- Nếu delta > 0: 2 nghiệm phân biệt

**Bài 8:** Viết chương trình tính lương nhân viên:
- Nhập số ngày làm việc, lương cơ bản
- Nếu làm ≥ 22 ngày: Thưởng 10% lương cơ bản
- Nếu làm < 22 ngày: Phạt 5% lương cơ bản/ngày vắng
- Tính lương thực nhận

**Bài 9:** Viết chương trình ATM mini:
```
1. Kiem tra so du
2. Rut tien
3. Gui tien
4. Chuyen khoan
```
- Kiểm tra số dư trước khi rút/chuyển
- Cập nhật số dư sau mỗi giao dịch

**Bài 10:** Viết chương trình xác định thứ trong tuần dựa vào số (1-7):
- 1: Chủ nhật
- 2: Thứ hai
- ...
- 7: Thứ bảy

---

## 📝 Lưu ý quan trọng

1. **Điều kiện:** Luôn đặt trong `()` sau `if`
2. **Khối lệnh:** Dùng `{}` để nhóm nhiều câu lệnh
3. **Switch-case:** Nhớ `break;` sau mỗi `case` (trừ khi cố ý)
4. **So sánh:** Dùng `==` để so sánh bằng, không phải `=`
5. **If lồng nhau:** Có thể lồng nhiều cấp nhưng cẩn thận để code dễ đọc
6. **Default trong switch:** Luôn có để xử lý trường hợp ngoại lệ

---

## ✅ Kiểm tra kiến thức

1. Khi nào nên dùng `if-else`, khi nào dùng `switch-case`?

2. Tại sao cần `break;` trong `switch-case`?

3. Viết điều kiện kiểm tra một số `n` có nằm trong khoảng [10, 100]

4. Có bao nhiêu nhánh `else if` có thể có trong một câu lệnh `if`?

---

## 🎯 Tóm tắt

- ✅ Đã học câu lệnh `if`, `if-else`, `if-else if-else`
- ✅ Biết sử dụng `switch-case` cho nhiều lựa chọn
- ✅ Hiểu cách kết hợp điều kiện với toán tử logic (`&&`, `||`)
- ✅ Áp dụng cấu trúc điều kiện vào các bài toán thực tế
- ✅ Sử dụng if lồng nhau cho các tình huống phức tạp

**Bài tiếp theo:** [Buổi 5: Vòng lặp for](./lesson-5.md)  
**🔬 Lab kiểm tra:** [Lab kiểm tra sau buổi 4 - Máy tính đơn giản](./lab.md)
