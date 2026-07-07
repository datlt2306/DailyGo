# Buổi 4: Cấu trúc điều kiện trong C (if-else, switch)

## 🎯 Mục tiêu buổi học

> **Thầy mong muốn sau buổi học này, các em sẽ đạt được:**

Sau buổi này, thầy muốn các em:
1. ✅ Hiểu vì sao cần dùng cấu trúc điều kiện trong lập trình
2. ✅ Viết thành thạo các cấu trúc điều kiện: `if`, `if-else`, `if-else if-else`
3. ✅ Biết dùng `switch-case` cho trường hợp có nhiều nhánh lựa chọn
4. ✅ Vận dụng giải quyết các bài toán sát thực tế
5. ✅ Nắm thêm về cách phối hợp điều kiện bằng toán tử logic
## 📘 Nội dung chính

### 1. Sự cần thiết của cấu trúc điều kiện

Trong cuộc sống cũng như lập trình, ta luôn gặp các tình huống dạng "nếu... thì...". Ví dụ:

-   Nếu điểm >= 5 thì qua môn, ngược lại là trượt
-   Nếu tuổi < 18 thì chưa được lái xe
-   Nếu số dư đủ thì cho rút tiền, không thì báo lỗi

Cấu trúc điều kiện giúp chương trình "ra quyết định" đúng với từng trường hợp.

---

### 2. Câu lệnh if

**Cú pháp:**

```c
if (dieu_kien) {
    // Các câu lệnh thực thi nếu điều kiện đúng
}
```

**Giải thích:** Nếu điều kiện đúng, khối lệnh bên trong sẽ được thực hiện.

**Ví dụ nhỏ:**

```c
int diem = 8;
if (diem >= 5) {
    printf("Bạn đã đậu!\n");
}
```

---

### 3. Câu lệnh if-else

**Cú pháp:**

```c
if (dieu_kien) {
    // Lệnh khi điều kiện đúng
} else {
    // Lệnh khi điều kiện sai
}
```

**Ví dụ:**

```c
int diem = 4;
if (diem >= 5) {
    printf("Bạn đã đậu!\n");
} else {
    printf("Bạn đã rớt!\n");
}
```

---

### 4. Câu lệnh if-else if-else (nhiều điều kiện)

**Cú pháp tổng quát:**

```c
if (dieu_kien_1) {
    // Xử lý TH1
} else if (dieu_kien_2) {
    // Xử lý TH2
} else if (dieu_kien_3) {
    // Xử lý TH3
} else {
    // Tất cả các trường hợp còn lại
}
```

**Ví dụ điểm số:**

```c
int diem = 7;
if (diem >= 9) {
    printf("Xuất sắc!\n");
} else if (diem >= 8) {
    printf("Giỏi!\n");
} else if (diem >= 7) {
    printf("Khá!\n");
} else if (diem >= 5) {
    printf("Trung bình!\n");
} else {
    printf("Yếu!\n");
}
```

---

### 5. Câu lệnh switch-case

**Cú pháp:**

```c
switch (bien) {
    case gia_tri_1:
        // Nếu bien == gia_tri_1
        break;
    case gia_tri_2:
        // Nếu bien == gia_tri_2
        break;
    default:
        // Các trường hợp còn lại
        break;
}
```

**Một vài các em lưu ý về switch-case:**

-   Thường dùng cho `int`, `char`, `enum`
-   Nhớ viết `break;` cuối mỗi case
-   Nhánh `default` tương tự else, để xử lý trường hợp khác

**Ví dụ chọn món ăn:**

```c
int luaChon;
printf("Chọn món (1-4): ");
scanf("%d", &luaChon);

switch (luaChon) {
    case 1:
        printf("Bạn chọn Cơm sườn!\n");
        break;
    case 2:
        printf("Bạn chọn Phở bò!\n");
        break;
    case 3:
        printf("Bạn chọn Bún bò!\n");
        break;
    case 4:
        printf("Bạn chọn Bánh mì!\n");
        break;
    default:
        printf("Lựa chọn không hợp lệ!\n");
        break;
}
```

---

### 6. If lồng nhau (nested if)

Có thể đặt if trong if khi cần kiểm tra nhiều điều kiện liên tiếp.

**Cú pháp:**

```c
if (dieu_kien_1) {
    if (dieu_kien_2) {
        // Xử lý khi cả hai điều kiện đúng
    }
}
```

**Ví dụ kiểm tra giấy phép lái xe:**

```c
int tuoi = 20;
int coBangLai = 1;

if (tuoi >= 18) {
    if (coBangLai) {
        printf("Được phép lái xe!\n");
    } else {
        printf("Cần có bằng lái!\n");
    }
} else {
    printf("Chưa đủ tuổi lái xe!\n");
}
```

---

## 💻 Một số ví dụ minh họa

### Ví dụ 1: Xếp loại điểm số

```c
#include <stdio.h>

int main() {
    float diem;
    printf("Nhập điểm của các em: ");
    scanf("%f", &diem);

    if (diem >= 9.0) {
        printf("Xếp loại: Xuất sắc!\n");
    } else if (diem >= 8.0) {
        printf("Xếp loại: Giỏi!\n");
    } else if (diem >= 7.0) {
        printf("Xếp loại: Khá!\n");
    } else if (diem >= 5.0) {
        printf("Xếp loại: Trung bình!\n");
    } else {
        printf("Xếp loại: Yếu!\n");
    }
    return 0;
}
```

---

### Ví dụ 2: Vé xe buýt theo tuổi

```c
#include <stdio.h>

int main() {
    int tuoi;
    printf("Nhập tuổi: ");
    scanf("%d", &tuoi);

    if (tuoi < 6) {
        printf("Miễn phí!\n");
    } else if (tuoi < 18) {
        printf("Giá vé: 3,000 VNĐ\n");
    } else if (tuoi < 60) {
        printf("Giá vé: 7,000 VNĐ\n");
    } else {
        printf("Giá vé: 3,000 VNĐ (Người cao tuổi)\n");
    }
    return 0;
}
```

---

### Ví dụ 3: Menu lựa chọn với switch

```c
#include <stdio.h>

int main() {
    int luaChon;
    printf("=== MENU QUÁN CA FE ===\n");
    printf("1. Cà phê đen - 15,000\n");
    printf("2. Cà phê sữa - 20,000\n");
    printf("3. Trà sữa - 25,000\n");
    printf("4. Nước cam - 30,000\n");
    printf("Chọn món (1-4): ");
    scanf("%d", &luaChon);

    switch(luaChon) {
        case 1:
            printf("Bạn đã chọn cà phê đen. Giá: 15,000 VNĐ\n");
            break;
        case 2:
            printf("Bạn đã chọn cà phê sữa. Giá: 20,000 VNĐ\n");
            break;
        case 3:
            printf("Bạn đã chọn trà sữa. Giá: 25,000 VNĐ\n");
            break;
        case 4:
            printf("Bạn đã chọn nước cam. Giá: 30,000 VNĐ\n");
            break;
        default:
            printf("Lựa chọn không hợp lệ!\n");
            break;
    }
    return 0;
}
```

---

### Ví dụ 4: Kiểm tra năm nhuận

```c
#include <stdio.h>

int main() {
    int nam;
    printf("Nhập năm: ");
    scanf("%d", &nam);

    // Năm nhuận: chia hết cho 4 nhưng không chia hết cho 100, hoặc chia hết cho 400
    if ((nam % 4 == 0 && nam % 100 != 0) || (nam % 400 == 0)) {
        printf("%d là năm nhuận!\n", nam);
    } else {
        printf("%d không phải năm nhuận!\n", nam);
    }
    return 0;
}
```

---

### Ví dụ 5: Giải phương trình bậc nhất ax + b = 0

```c
#include <stdio.h>

int main() {
    float a, b;
    printf("Giải phương trình ax + b = 0\n");
    printf("Nhập a: ");
    scanf("%f", &a);
    printf("Nhập b: ");
    scanf("%f", &b);

    if (a == 0) {
        if (b == 0) {
            printf("Phương trình có vô số nghiệm!\n");
        } else {
            printf("Phương trình vô nghiệm!\n");
        }
    } else {
        float x = -b / a;
        printf("Nghiệm của phương trình: x = %.2f\n", x);
    }
    return 0;
}
```

---

### Ví dụ 6: Tính tiền điện bậc thang (nâng cao)

```c
#include <stdio.h>

int main() {
    int soDien;
    float tienDien;
    printf("Nhập số điện tiêu thụ (kWh): ");
    scanf("%d", &soDien);

    if (soDien <= 50) {
        tienDien = soDien * 1800;
    } else if (soDien <= 100) {
        tienDien = 50 * 1800 + (soDien - 50) * 2300;
    } else {
        tienDien = 50 * 1800 + 50 * 2300 + (soDien - 100) * 2900;
    }
    printf("Tổng tiền điện: %.0f VNĐ\n", tienDien);
    return 0;
}
```

---

### Ví dụ 7: Kiểm tra tam giác

```c
#include <stdio.h>

int main() {
    float a, b, c;
    printf("Nhập 3 cạnh của tam giác: ");
    scanf("%f%f%f", &a, &b, &c);

    if (a + b > c && a + c > b && b + c > a) {
        if (a == b && b == c) {
            printf("Tam giác đều!\n");
        } else if (a == b || b == c || a == c) {
            printf("Tam giác cân!\n");
        } else if (a*a + b*b == c*c || b*b + c*c == a*a || a*a + c*c == b*b) {
            printf("Tam giác vuông!\n");
        } else {
            printf("Tam giác thường!\n");
        }
    } else {
        printf("Không phải tam giác!\n");
    }
    return 0;
}
```

---

## 🧠 Bài tập tự luyện

### Bài tập cơ bản

1. Viết chương trình nhập điểm số (0-10), xếp loại:
    - 9-10: Xuất sắc
    - 8-8.9: Giỏi
    - 7-7.9: Khá
    - 5-6.9: Trung bình
    - <5: Yếu
2. Nhập 2 số, tìm số lớn nhất.
3. Nhập 3 số, sắp xếp theo tăng dần.
4. Kiểm tra số chẵn hay lẻ.
5. Menu tính toán:
    ```
    1. Tính tổng 2 số
    2. Tính hiệu 2 số
    3. Tính tích 2 số
    4. Tính thương 2 số
    ```

### Bài tập nâng cao

6. Nhập cân nặng, chiều cao, tính chỉ số BMI và phân loại.
    - <18.5: Gầy
    - 18.5-24.9: Bình thường
    - 25-29.9: Thừa cân
    - ≥30: Béo phì
7. Giải phương trình bậc 2: ax² + bx + c = 0 (xét giá trị delta)
8. Tính lương nhân viên: Nếu ≥22 ngày công được thưởng, <22 ngày bị trừ lương (theo đề bài chi tiết).
9. Viết chương trình ATM mini chọn các chức năng (kiểm tra số dư, rút tiền, gửi tiền, chuyển khoản).
10. Nhập số (1-7), in ra thứ trong tuần.

---

## 📝 Các em các em lưu ý khi làm bài

1. Điều kiện trong `if` luôn đặt trong dấu ngoặc tròn ()
2. Nếu có từ 2 câu lệnh trở lên, nhớ dùng cặp dấu `{}` để bao.
3. Trong `switch-case`, luôn nhớ có `break;` cuối mỗi case.
4. Dấu so sánh bằng là `==`, KHÔNG phải dấu bằng `=`.
5. If có thể lồng nhau, nhưng lố quá sẽ khó đọc.
6. Luôn có default trong switch để bắt mọi trường hợp.

---

## ✅ Ôn tập nhanh

1. Khi nào dùng if-else, khi nào switch-case?
2. Vì sao cần có `break;` trong switch-case?
3. Viết điều kiện kiểm tra n nằm trong [10, 100].
4. Một câu lệnh if cho phép có bao nhiêu nhánh else if?

---

## 🎯 Kết luận bài học

-   Học xong buổi này, các em đã nắm được `if`, `if-else`, if nhiều nhánh, switch-case.
-   Biết phối hợp điều kiện với toán tử `&&`, `||`
-   Biết giải quyết nhiều dạng bài toán thực tế dùng cấu trúc điều kiện
-   Biết dùng lồng nhau khi cần.

**Tuần sau:** [Buổi 5: Vòng lặp for](./lesson-5.md)  
**Làm lab:** [Lab kiểm tra sau buổi 4 - Máy tính đơn giản](./lab.md)
