# Buổi 8: Hàm cơ bản trong C

## 🎯 Mục tiêu học tập

Sau buổi học này, các em sẽ:

-   Hiểu rõ khái niệm hàm trong ngôn ngữ C và những lợi ích khi sử dụng hàm
-   Biết cách khai báo hàm, định nghĩa hàm và gọi hàm trong chương trình
-   Phân biệt được khai báo hàm (prototype) và định nghĩa hàm
-   Viết được các hàm đơn giản để tái sử dụng mã lệnh
-   Biết áp dụng hàm vào các bài toán nhỏ trong thực tế lập trình

---

## 📘 Nội dung chính

### 1. Hàm là gì?

-   Hàm là một khối lệnh (block of code) có tên, được viết ra để thực hiện một nhiệm vụ cụ thể. Khi nào cần thực hiện nhiệm vụ đó, ta chỉ việc gọi tên hàm.

**Lợi ích khi dùng hàm:**

-   ✅ Tái sử dụng code (không phải viết lại nhiều lần)
-   ✅ Giúp chương trình dễ bảo trì, dễ sửa lỗi
-   ✅ Chia nhỏ chương trình lớn thành các phần nhỏ, dễ xử lý
-   ✅ Có thể kiểm thử (test) từng hàm riêng biệt

**Ví dụ thực tế:**

-   Tính tổng hai số → hàm `tinhTong()`
-   Kiểm tra số nguyên tố → hàm `laSoNguyenTo()`
-   In menu → hàm `inMenu()`

### 2. Cấu trúc một hàm trong C

**Cú pháp hàm trong C:**

```c
<kieu_tra_ve> <ten_ham>(<danh_sach_tham_so nếu có>) {
    // Các câu lệnh thực hiện chức năng của hàm
    return <giá_trị_trả_về>; // Nếu không có, dùng void thì không cần return giá trị
}
```

**Giải thích từng phần:**

1. **Kiểu trả về:** int, float, char, void, v.v…
2. **Tên hàm:** Đặt theo quy tắc tên biến, nên đặt rõ nghĩa
3. **Tham số:** Giá trị đầu vào cho hàm (có thể không có)
4. **Thân hàm:** Các câu lệnh thực hiện nhiệm vụ
5. **Return:** Trả một giá trị nào đó về cho chỗ gọi hàm (nếu không trả giá trị thì dùng void)

### 3. Hàm không tham số, không trả về

Ví dụ hàm in menu đơn giản:

```c
void inMenu() {
    printf("=== MENU ===\n");
    printf("1. Tính tổng\n");
    printf("2. Tính hiệu\n");
    printf("3. Thoát\n");
}
```

### 4. Hàm có tham số, không trả về

Ví dụ hàm chào tên sinh viên:

```c
void inChao(char ten[]) {
    printf("Xin chào, %s!\n", ten);
}
```

### 5. Hàm có tham số và có giá trị trả về

Ví dụ hàm tính tổng 2 số nguyên:

```c
int tinhTong(int a, int b) {
    int ketQua = a + b;
    return ketQua;
}
```

### 6. Hàm không tham số, có giá trị trả về

Ví dụ hàm nhập một số nguyên bất kỳ:

```c
int nhapSo() {
    int n;
    printf("Nhập số: ");
    scanf("%d", &n);
    return n;
}
```

### 7. Khai báo và định nghĩa hàm

**Khai báo hàm (prototype):**

```c
int tinhTong(int a, int b); // Chỉ khai báo để trình biên dịch biết
```

**Định nghĩa hàm:**

```c
int tinhTong(int a, int b) {
    return a + b;
}
```

**Các em các em lưu ý:** Nếu em định nghĩa hàm trước hàm `main()` thì không cần prototype. Nếu định nghĩa hàm sau hàm `main()` thì phải khai báo prototype trước.

---

## 💻 Ví dụ minh họa

### Ví dụ 1: Hàm tính tổng hai số

```c
#include <stdio.h>

// Định nghĩa hàm tính tổng
int tinhTong(int a, int b) {
    return a + b;
}

int main() {
    int x = 5, y = 3;
    int ketQua = tinhTong(x, y);
    printf("Tổng: %d\n", ketQua);

    return 0;
}
```

### Ví dụ 2: Hàm in menu

```c
#include <stdio.h>

void inMenu() {
    printf("\n=== MENU ===\n");
    printf("1. Tính tổng\n");
    printf("2. Tính hiệu\n");
    printf("3. Tính tích\n");
    printf("4. Thoát\n");
}

int main() {
    inMenu();  // Gọi hàm in menu
    return 0;
}
```

### Ví dụ 3: Hàm kiểm tra số chẵn

```c
#include <stdio.h>
#include <stdbool.h>

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
    printf("Nhập số: ");
    scanf("%d", &so);

    if (laSoChan(so)) {
        printf("%d là số chẵn\n", so);
    } else {
        printf("%d là số lẻ\n", so);
    }

    return 0;
}
```

### Ví dụ 4: Hàm tìm số lớn nhất trong 3 số

```c
#include <stdio.h>

int timMax(int a, int b, int c) {
    int max = a;
    if (b > max) max = b;
    if (c > max) max = c;
    return max;
}

int main() {
    int x, y, z;
    printf("Nhập 3 số: ");
    scanf("%d%d%d", &x, &y, &z);

    int lonNhat = timMax(x, y, z);
    printf("Số lớn nhất: %d\n", lonNhat);

    return 0;
}
```

### Ví dụ 5: Hàm tính giai thừa

```c
#include <stdio.h>

long long tinhGiaiThua(int n) {
    long long ketQua = 1;
    for (int i = 1; i <= n; i++) {
        ketQua *= i;
    }
    return ketQua;
}

int main() {
    int n;
    printf("Nhập n: ");
    scanf("%d", &n);

    printf("%d! = %lld\n", n, tinhGiaiThua(n));

    return 0;
}
```

### Ví dụ 6: Hàm kiểm tra số nguyên tố

```c
#include <stdio.h>
#include <stdbool.h>

bool laSoNguyenTo(int n) {
    if (n < 2) return false;

    for (int i = 2; i < n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}

int main() {
    int n;
    printf("Nhập số: ");
    scanf("%d", &n);

    if (laSoNguyenTo(n)) {
        printf("%d là số nguyên tố\n", n);
    } else {
        printf("%d không phải số nguyên tố\n", n);
    }

    return 0;
}
```

### Ví dụ 7: Hàm tính lũy thừa

```c
#include <stdio.h>

long long tinhLuyThua(int coSo, int soMu) {
    long long ketQua = 1;
    for (int i = 0; i < soMu; i++) {
        ketQua *= coSo;
    }
    return ketQua;
}

int main() {
    int a, n;
    printf("Nhập cơ số: ");
    scanf("%d", &a);
    printf("Nhập số mũ: ");
    scanf("%d", &n);

    printf("%d^%d = %lld\n", a, n, tinhLuyThua(a, n));

    return 0;
}
```

### Ví dụ 8: Sử dụng nhiều hàm trong chương trình

```c
#include <stdio.h>

// Khai báo prototype
void inMenu();
int tinhTong(int a, int b);
int tinhHieu(int a, int b);
int tinhTich(int a, int b);

int main() {
    int luaChon, a, b;

    do {
        inMenu();
        printf("Chọn: ");
        scanf("%d", &luaChon);

        if (luaChon >= 1 && luaChon <= 3) {
            printf("Nhập 2 số: ");
            scanf("%d%d", &a, &b);

            if (luaChon == 1) {
                printf("Tổng: %d\n", tinhTong(a, b));
            } else if (luaChon == 2) {
                printf("Hiệu: %d\n", tinhHieu(a, b));
            } else if (luaChon == 3) {
                printf("Tích: %d\n", tinhTich(a, b));
            }
        }

    } while (luaChon != 4);

    return 0;
}

// Định nghĩa các hàm
void inMenu() {
    printf("\n=== MENU ===\n");
    printf("1. Tính tổng\n");
    printf("2. Tính hiệu\n");
    printf("3. Tính tích\n");
    printf("4. Thoát\n");
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

```c
#include <stdio.h>

void veTamGiac(int n) {
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++) {
            printf("* ");
        }
        printf("\n");
    }
}

int main() {
    int chieuCao;
    printf("Nhập chiều cao: ");
    scanf("%d", &chieuCao);

    veTamGiac(chieuCao);

    return 0;
}
```

### Ví dụ 10: Hàm tính tổng các chữ số của 1 số

```c
#include <stdio.h>
#include <stdlib.h>

int tinhTongChuSo(int n) {
    int tong = 0;
    n = abs(n);  // Lấy trị tuyệt đối cho chắc chắn

    while (n > 0) {
        tong += n % 10;
        n /= 10;
    }

    return tong;
}

int main() {
    int so;
    printf("Nhập số: ");
    scanf("%d", &so);

    printf("Tổng các chữ số: %d\n", tinhTongChuSo(so));

    return 0;
}
```

---

## 🧠 Bài tập thực hành

### Bài tập cơ bản

1. Viết hàm `tinhHieu(int a, int b)` trả về hiệu của 2 số nguyên.
2. Viết hàm `tinhTich(int a, int b)` trả về tích của 2 số nguyên.
3. Viết hàm `tinhThuong(float a, float b)` trả về thương của 2 số (chú ý kiểm tra chia cho 0).
4. Viết hàm `inXinChao()` in ra màn hình "Xin chào, tôi là lập trình viên!".
5. Viết hàm `laSoLe(int n)` trả về true nếu n là số lẻ, false nếu không.

### Bài tập trung bình

6. Viết hàm `timMin(int a, int b, int c)` trả về số nhỏ nhất trong 3 số.
7. Viết hàm `tinhTrungBinh(float a, float b, float c)` trả về giá trị trung bình cộng.
8. Viết hàm `xepLoaiDiem(float diem)` trả về chuỗi (Xuất sắc, Giỏi, Khá, Trung bình, Yếu) dựa trên điểm truyền vào.
9. Viết hàm `daoNguocSo(int n)` trả về số đảo ngược.
10. Viết hàm `demSoChuSo(int n)` trả về số lượng chữ số của số nguyên n.

### Bài tập nâng cao

11. Viết hàm `tinhUCLN(int a, int b)` trả về ước chung lớn nhất của a và b.
12. Viết hàm `tinhBCNN(int a, int b)` trả về bội chung nhỏ nhất của a và b.
13. Viết hàm `laSoHoanHao(int n)` trả về true nếu n là số hoàn hảo.
14. Viết hàm `inSoNguyenTo(int n)` in ra tất cả các số nguyên tố từ 1 đến n.
15. Viết chương trình máy tính gồm nhiều hàm riêng cho từng phép tính.

---

## 📝 Các em các em lưu ý quan trọng

1. **Đặt tên hàm:** Rõ ràng, thể hiện đúng chức năng.
2. **Lệnh return:** Hàm kiểu void thì không cần return giá trị, nhưng có thể dùng return; để thoát sớm.
3. **Truyền tham số:** Có thể truyền giá trị, biến, hoặc là biểu thức khi gọi hàm.
4. **Phạm vi biến:** Biến khai báo trong hàm chỉ tồn tại trong hàm đó (biến cục bộ).
5. **Khai báo - định nghĩa:** Nhớ khai báo (prototype) nếu hàm định nghĩa sau main().

---

## ✅ Câu hỏi kiểm tra nhanh

1. Việc sử dụng hàm có những lợi ích gì?
2. Sự khác biệt giữa `void` và các kiểu trả về khác là gì?
3. Một hàm có thể có nhiều câu lệnh `return` không?
4. Khi nào cần khai báo prototype (khai báo trước) cho hàm?

---

## 🎯 Tổng kết

-   Hôm nay thầy đã hướng dẫn các em về khái niệm và cách dùng hàm trong C.
-   Các em đã biết cách khai báo, định nghĩa, gọi hàm, truyền tham số và nhận giá trị trả về.
-   Khi chia nhỏ chương trình thành nhiều hàm, các em sẽ dễ bảo trì, mở rộng và kiểm thử code.
-   Nhớ thực hành lại các ví dụ và làm các bài tập về nhà nhé!

**Buổi sau:** [Buổi 9: Tham số, giá trị trả về và phạm vi biến](./lesson-9.md)
