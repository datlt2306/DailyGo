# Buổi 13: Chuỗi ký tự và cấu trúc (struct)

## 🎯 Mục tiêu học tập

Sau buổi học này, thầy mong các em sẽ:

-   Biết cách làm việc với chuỗi ký tự trong C
-   Hiểu khái niệm và cách khai báo, sử dụng cấu trúc (struct)
-   Tự định nghĩa kiểu dữ liệu mới bằng struct
-   Ứng dụng struct trong quản lý thông tin, ví dụ như thông tin sinh viên

---

## 📘 Nội dung chính

### 1. Chuỗi ký tự trong C

Trong C, chuỗi ký tự được coi là mảng các ký tự, kết thúc bởi ký tự '\0'.

**Ví dụ khai báo và nhập, xuất chuỗi:**

```c
#include <stdio.h>

int main() {
    char ten[50];

    printf("Nhap ho ten: ");
    fgets(ten, sizeof(ten), stdin); // Doc chuoi co dau cach

    printf("Ho ten vua nhap: %s", ten);

    return 0;
}
```

**Các em các em lưu ý:**

-   Dùng `fgets` để nhập chuỗi có chứa dấu cách.
-   Chuỗi trong C là mảng ký tự, không phải kiểu dữ liệu riêng như trong C++.

### 2. Cấu trúc (struct)

**Khai báo cấu trúc SinhVien:**

```c
struct SinhVien {
    char hoTen[50];
    int tuoi;
    float diem;
};
```

**Cách sử dụng struct:**

```c
struct SinhVien sv;

strcpy(sv.hoTen, "Nguyen Van A");
sv.tuoi = 20;
sv.diem = 8.5;
```

> Các em các em lưu ý khi gán chuỗi cho thành phần kiểu mảng ký tự, các em dùng hàm `strcpy` trong thư viện `<string.h>`. Không gán trực tiếp như biến thông thường.

---

## 💻 Ví dụ minh họa

### Ví dụ: Quản lý sinh viên với struct

Dưới đây là ví dụ thầy hướng dẫn các em nhập, xuất thông tin của một sinh viên.

```c
#include <stdio.h>
#include <string.h>

struct SinhVien {
    char hoTen[50];
    int tuoi;
    float diem;
};

int main() {
    struct SinhVien sv;

    printf("Nhap ho ten: ");
    fgets(sv.hoTen, sizeof(sv.hoTen), stdin);

    // Xoa ky tu xuong dong (\n) neu co
    size_t len = strlen(sv.hoTen);
    if (sv.hoTen[len - 1] == '\n') {
        sv.hoTen[len - 1] = '\0';
    }

    printf("Nhap tuoi: ");
    scanf("%d", &sv.tuoi);

    printf("Nhap diem: ");
    scanf("%f", &sv.diem);

    printf("\nThong tin sinh vien:\n");
    printf("Ho ten: %s\n", sv.hoTen);
    printf("Tuoi: %d\n", sv.tuoi);
    printf("Diem: %.2f\n", sv.diem);

    return 0;
}
```

Thầy gợi ý các em có thể khai báo, nhập xuất thông tin cho nhiều sinh viên bằng cách sử dụng mảng struct.

---

**Bài tiếp theo:** [Buổi 14: Đọc/ghi file và tổng kết](./lesson-14.md)
