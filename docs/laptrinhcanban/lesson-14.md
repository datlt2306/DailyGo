# Buổi 14: Đọc/Ghi file trong C và Tổng Kết Khóa Học

## 🎯 Mục tiêu buổi học

> **Thầy mong muốn sau buổi học này, các em sẽ đạt được:**

Sau buổi này, thầy mong các em sẽ:
1. ✅ Hiểu cách đọc và ghi file văn bản bằng ngôn ngữ C
2. ✅ Biết sử dụng các hàm fopen, fclose, fprintf, fscanf, fgets, fputs
3. ✅ Ôn tập lại toàn bộ kiến thức C cơ bản đã học
4. ✅ Chuẩn bị tinh thần và kỹ năng cho project cuối kỳ
## 📘 Nội dung chính

### 1. Đọc file văn bản trong C

Để đọc file trong C, các em dùng hàm `fopen` với chế độ `"r"` (read):

```c
#include <stdio.h>

int main() {
    FILE *f;
    char dong[256];
    f = fopen("input.txt", "r");
    if(f == NULL) {
        printf("Khong the mo file!\n");
        return 1;
    }
    while(fgets(dong, sizeof(dong), f)) {
        printf("%s", dong);
    }
    fclose(f);
    return 0;
}
```

### 2. Ghi file văn bản trong C

Để ghi file, ta dùng hàm `fopen` với chế độ `"w"` (write):

```c
#include <stdio.h>

int main() {
    FILE *f;
    f = fopen("output.txt", "w");
    if(f == NULL) {
        printf("Khong the tao file!\n");
        return 1;
    }
    fprintf(f, "Xin chao, lap trinh C!\n");
    fprintf(f, "%d\n", 2024);
    fclose(f);
    return 0;
}
```

---

## 💻 Ví dụ minh họa

### Ví dụ: Đọc, ghi file kết hợp trong C

```c
#include <stdio.h>

int main() {
    // Ghi file
    FILE *fo = fopen("data.txt", "w");
    if (fo == NULL) {
        printf("Loi mo file de ghi!\n");
        return 1;
    }
    fprintf(fo, "Hello World!\n");
    fprintf(fo, "%d\n", 123);
    fclose(fo);

    // Đọc file
    FILE *fi = fopen("data.txt", "r");
    if (fi == NULL) {
        printf("Loi mo file de doc!\n");
        return 1;
    }
    char s[255];
    while (fgets(s, sizeof(s), fi)) {
        printf("%s", s);
    }
    fclose(fi);

    return 0;
}
```

---

## 🎓 Tổng kết khóa học

### Kiến thức đã học:

1. ✅ Cú pháp cơ bản C (biến, kiểu dữ liệu, nhập xuất)
2. ✅ Toán tử và biểu thức
3. ✅ Cấu trúc điều kiện (`if-else`, `switch`)
4. ✅ Vòng lặp (`for`, `while`, `do-while`)
5. ✅ Vòng lặp lồng nhau
6. ✅ Hàm (khai báo, định nghĩa, tham số, return)
7. ✅ Đệ quy cơ bản
8. ✅ Mảng một chiều và hai chiều
9. ✅ Chuỗi ký tự (char array, string)
10. ✅ Cấu trúc (struct)
11. ✅ Đọc/Ghi file

### Kỹ năng đạt được:

-   ✅ Viết chương trình console C hoàn chỉnh
-   ✅ Vận dụng tư duy giải thuật khi xử lý bài toán
-   ✅ Biết tổ chức chương trình thành các hàm nhỏ
-   ✅ Xử lý dữ liệu với mảng và struct
-   ✅ Lưu trữ, đọc dữ liệu từ file

---

**🎓 Project cuối kỳ:** [Xem chi tiết](./final-project.md)
