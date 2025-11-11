# Buổi 9: Tham số, giá trị trả về và phạm vi biến trong C

## 🎯 Mục tiêu của buổi học

Sau buổi này, các em sẽ:

-   Hiểu rõ cách truyền tham số vào hàm theo phương thức truyền giá trị (pass by value) trong C
-   Biết cách dùng giá trị trả về của hàm, hiểu các kiểu dữ liệu giá trị trả về
-   Phân biệt được phạm vi biến: biến cục bộ và biến toàn cục
-   Sử dụng đúng biến toàn cục và biến cục bộ trong chương trình
-   Vận dụng kiến thức giải quyết các vấn đề lập trình cơ bản

---

## 📘 Nội dung

### 1. Truyền tham số vào hàm (Truyền bằng giá trị)

-   Khi các em truyền một biến vào hàm, hàm sẽ tạo ra một bản sao của biến đó để làm việc.
-   Nếu trong hàm, các em thay đổi giá trị của tham số thì biến ban đầu bên ngoài hàm sẽ **không bị thay đổi**.

**Ví dụ minh họa:**

```c
#include <stdio.h>

void tangGiaTri(int x) {
    x++;  // Giá trị x chỉ thay đổi trong hàm này
    printf("Gia tri cua x trong ham: %d\n", x);
}

int main() {
    int a = 5;
    tangGiaTri(a);
    printf("Gia tri cua a sau khi goi ham: %d\n", a);  // a vẫn là 5
    return 0;
}
```

**Giải thích:**  
Khi gọi `tangGiaTri(a);`, biến `x` trong hàm là một bản sao của biến `a`, nên thay đổi `x` không ảnh hưởng tới `a`.

---

### 2. Giá trị trả về của hàm

-   Mỗi hàm chỉ được phép trả về **một giá trị duy nhất** tại một thời điểm.
-   Giá trị trả về phải có kiểu dữ liệu đúng như khai báo của hàm.
-   Nếu hàm không trả về giá trị nào, các em dùng kiểu `void`.

**Ví dụ:**

```c
#include <stdio.h>

int tinhTong(int x, int y) {
    return x + y; // Trả về tổng của hai số
}

void xinChao() {
    printf("Chao cac em!\n");
}

int main() {
    int ketQua = tinhTong(3, 4);
    printf("Tong = %d\n", ketQua);
    xinChao();
    return 0;
}
```

---

### 3. Phạm vi biến (Scope)

-   **Biến cục bộ**:

    -   Khai báo bên trong khối lệnh (ví dụ trong một hàm).
    -   Chỉ sử dụng được trong khối đó, ra ngoài sẽ không còn tồn tại nữa.

-   **Biến toàn cục**:
    -   Khai báo bên ngoài (trước) tất cả các hàm.
    -   Dùng được ở bất kỳ vị trí nào trong file chương trình.

**Ví dụ:**

```c
#include <stdio.h>

int bienToanCuc = 10; // Biến toàn cục

void hamA() {
    int bienCucBo = 5; // Biến cục bộ
    printf("bienCucBo trong hamA: %d\n", bienCucBo);
    printf("bienToanCuc trong hamA: %d\n", bienToanCuc);
}

int main() {
    hamA();
    // printf("%d", bienCucBo); // Lỗi: bienCucBo không tồn tại ở đây
    printf("bienToanCuc trong main: %d\n", bienToanCuc);
    return 0;
}
```

---

## 💻 Ví dụ thực hành

-   Viết các hàm truyền tham số, kiểm tra giá trị trước và sau khi gọi hàm.
-   Định nghĩa và sử dụng biến cục bộ, biến toàn cục trong nhiều hàm khác nhau.
-   Viết hàm tính tổng, hàm không trả về (void), và quan sát phạm vi hoạt động của biến.

---

## 🧠 Bài tập luyện tập

1. Viết hàm nhận vào một số nguyên, tăng số đó lên 10 đơn vị. In kết quả trong hàm và kiểm tra giá trị biến trong hàm main.
2. Viết hàm trả về tổng hai số thực người dùng nhập vào.
3. Khai báo một biến toàn cục và một biến cục bộ, in giá trị chúng ở nhiều hàm khác nhau. Nhận xét kết quả.
4. (Nâng cao) Viết chương trình minh họa sự khác nhau giữa hàm trả về và hàm không trả về giá trị.

---

**Bài sau:** [Buổi 10: Đệ quy cơ bản](./lesson-10.md)
