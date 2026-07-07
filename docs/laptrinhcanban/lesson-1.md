# Buổi 1: Làm quen với C & Chương trình đầu tiên

## 🎯 Mục tiêu học tập

Sau buổi học này, sinh viên sẽ:

-   Hiểu lập trình là gì và tại sao cần học lập trình
-   Biết cách cài đặt và sử dụng môi trường lập trình C
-   Viết được chương trình C đầu tiên
-   Hiểu cấu trúc cơ bản của một chương trình C
-   Biết cách biên dịch và chạy chương trình

---

## 📘 Nội dung chính

### 1. Lập trình là gì?

**Lập trình** là quá trình viết các lệnh (code) để máy tính hiểu và thực hiện theo yêu cầu.

**Ví dụ thực tế:**

-   Tính tiền điện: Nhập số điện → Tính tiền → Hiển thị kết quả
-   Quản lý điểm sinh viên: Nhập điểm → Tính trung bình → Xếp loại

### 2. Tại sao học C?

-   ✅ Ngôn ngữ mạnh mẽ, hiệu năng cao
-   ✅ Nền tảng tốt để học các ngôn ngữ khác (C++, Java, C#, Python...)
-   ✅ Được sử dụng rộng rãi trong: hệ điều hành, hệ thống nhúng, IoT...
-   ✅ Giúp hiểu sâu về cách máy tính hoạt động

### 3. Cài đặt môi trường

**Windows:**

-   Code::Blocks: https://www.codeblocks.org/
-   Dev-C++: https://www.bloodshed.net/devcpp.html
-   Visual Studio Community: https://visualstudio.microsoft.com/

**Linux/Mac:**

-   Cài đặt GCC: `sudo apt install gcc` (Linux) hoặc `brew install gcc` (Mac)

### 4. Cấu trúc chương trình C cơ bản

```c
#include <stdio.h>   // Thư viện nhập/xuất chuẩn

int main() {         // Hàm chính - điểm bắt đầu chương trình
    // Code của các em ở đây

    return 0;        // Kết thúc chương trình thành công
}
```

**Giải thích:**

-   `#include <stdio.h>`: Đưa thư viện vào chương trình để dùng `printf`, `scanf`
-   `int main()`: Hàm chính, chương trình bắt đầu từ đây
-   `return 0`: Trả về 0 để báo chương trình chạy thành công

---

## 💻 Ví dụ minh họa

### Ví dụ 1: Chương trình "Hello World"

```c
#include <stdio.h>

int main() {
    printf("Xin chao, toi la sinh vien lap trinh!\n");
    printf("Day la chuong trinh C dau tien cua toi.\n");

    return 0;
}
```

**Kết quả:**

```
Xin chao, toi la sinh vien lap trinh!
Day la chuong trinh C dau tien cua toi.
```

**Giải thích:**

-   `printf`: Xuất dữ liệu ra màn hình
-   `\n`: Xuống dòng mới

### Ví dụ 2: In thông tin cá nhân

```c
#include <stdio.h>

int main() {
    printf("================================\n");
    printf("   THONG TIN SINH VIEN\n");
    printf("================================\n");
    printf("Ho ten: Nguyen Van A\n");
    printf("MSSV: B1234567\n");
    printf("Lop: CNTT K01\n");
    printf("================================\n");

    return 0;
}
```

### Ví dụ 3: In hình vẽ đơn giản

```c
#include <stdio.h>

int main() {
    printf("    *\n");
    printf("   ***\n");
    printf("  *****\n");
    printf(" *******\n");
    printf("*********\n");

    return 0;
}
```

---

## 🧠 Bài tập thực hành

### Bài tập cơ bản

**Bài 1:** Viết chương trình in ra màn hình 5 dòng sau:

```
Toi dang hoc lap trinh C
Buoi 1: Lam quen voi C
Ngay mai toi se gioi lap trinh!
```

**Bài 2:** Viết chương trình in bảng điểm của các em:

```
======================
BANG DIEM SINH VIEN
======================
Mon: Lap trinh C
Diem: 8.5
Xep loai: Kha
======================
```

**Bài 3:** Viết chương trình in thông tin cá nhân của các em (họ tên, tuổi, quê quán, sở thích)

### Bài tập nâng cao

**Bài 5:** Viết chương trình in lịch tháng (ví dụ: tháng 11/2024) dạng:

```
    THANG 11 NAM 2024
Mon Tue Wed Thu Fri Sat Sun
                  1   2   3
  4   5   6   7   8   9  10
 11  12  13  14  15  16  17
 18  19  20  21  22  23  24
 25  26  27  28  29  30
```

**Bài 6:** Viết chương trình in menu của một cửa hàng cà phê:

```
==============================
      MENU CA FE
==============================
1. Ca phe den        - 15.000 VND
2. Ca phe sua        - 20.000 VND
3. Tra sua           - 25.000 VND
4. Nuoc cam          - 30.000 VND
==============================
```

---

## 📝 Ghi chú

-   Luôn đóng dấu ngoặc nhọn `{}` đúng cách
-   Kết thúc mỗi câu lệnh bằng dấu `;`
-   Dùng `//` để ghi chú (comment) trong code
-   Code phải có cấu trúc rõ ràng, dễ đọc

---

## ✅ Kiểm tra kiến thức

1. Hàm nào là điểm bắt đầu của chương trình C?
2. `printf` dùng để làm gì?
3. `#include <stdio.h>` có tác dụng gì?
4. Tại sao cần `return 0;` trong hàm `main()`?

---

## 🎯 Tóm tắt

-   ✅ Đã học cấu trúc cơ bản của chương trình C
-   ✅ Biết cách sử dụng `printf` để in dữ liệu ra màn hình
-   ✅ Viết được chương trình C đơn giản đầu tiên

**Bài tiếp theo:** [Buổi 2: Biến, kiểu dữ liệu và nhập xuất](./lesson-2.md)
