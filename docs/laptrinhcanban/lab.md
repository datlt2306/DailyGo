# 🔬 Lab kiểm tra - Máy tính đơn giản (Ngôn ngữ lập trình C)

**Thời gian:** 90 phút  
**Sau buổi:** Buổi 4  
**Hệ số điểm:** 30%

---

## 🎯 Mục tiêu

Kiểm tra khả năng áp dụng kiến thức đã học từ Buổi 1-4 với C:

-   Biến, kiểu dữ liệu, nhập xuất
-   Toán tử và biểu thức
-   Cấu trúc điều kiện (if-else, switch-case)

---

## 📋 Đề bài

### **Yêu cầu chung (Ngôn ngữ C):**

Viết chương trình **Máy tính đơn giản** sử dụng ngôn ngữ lập trình C với các chức năng sau:

### **Chức năng bắt buộc:**

1. **Menu chính:**  
   Hiển thị menu như mẫu dưới đây (tiếng Việt hoặc tiếng Anh đều chấp nhận):

```
================================
      MAY TINH DON GIAN
================================
1. Phep cong (+)
2. Phep tru (-)
3. Phep nhan (*)
4. Phep chia (/)
5. Phep chia lay du (%)
6. Tinh luy thua (^)
7. Thoat
================================
Chon chuc nang (1-7):
```

2. **Xử lý các phép tính:**

    - Nhập 2 số từ bàn phím (sử dụng `scanf`)
    - Thực hiện phép tính theo lựa chọn
    - In kết quả ra màn hình

3. **Xử lý lỗi:**

    - Khi chia (`/` hoặc `%`): kiểm tra số chia có bằng 0 không
    - Kiểm tra lựa chọn (1-7) hợp lệ

4. **Lặp lại menu:**
    - Sau mỗi phép tính, hỏi người dùng có muốn tiếp tục không (dùng biến char, kiểm tra với `'y'`/`'Y'`)
    - Nếu có, quay lại menu; nếu không, thoát chương trình

---

## 💻 Yêu cầu kỹ thuật

### **Cấp độ cơ bản (6 điểm):**

-   [ ] Menu hiển thị đúng (printf)
-   [ ] Thực hiện được 4 phép tính cơ bản (+, -, \*, /) (code C)
-   [ ] Xử lý chia cho 0 an toàn
-   [ ] Kiểm tra lựa chọn hợp lệ
-   [ ] Có comment giải thích code (bằng tiếng Việt)

### **Cấp độ trung bình (8 điểm):**

-   [ ] Đạt yêu cầu cơ bản
-   [ ] Thêm phép chia lấy dư (%) - chỉ áp dụng với số nguyên
-   [ ] Tính lũy thừa (a^b), chỉ tính với số nguyên dương hoặc dùng hàm hỗ trợ
-   [ ] Lặp lại menu nhiều lần (dùng vòng lặp trong C)

### **Cấp độ nâng cao (10 điểm):**

-   [ ] Đạt yêu cầu trung bình
-   [ ] Thêm chức năng căn bậc 2 (`sqrt`)
-   [ ] Lũy thừa số thực (dùng `pow`)
-   [ ] Hiển thị lịch sử 5 phép tính gần nhất
-   [ ] Code có cấu trúc rõ ràng, dễ đọc (tách hàm C, comment hợp lý)

---

## 📝 Gợi ý cấu trúc code (Ngôn ngữ C)

```c
#include <stdio.h>
#include <math.h> // Cho pow() và sqrt()

int main() {
    int luaChon;
    double so1, so2, ketQua;
    char tiepTuc;

    do {
        // Hiển thị menu
        printf("================================\n");
        printf("      MAY TINH DON GIAN\n");
        printf("================================\n");
        printf("1. Phep cong (+)\n");
        printf("2. Phep tru (-)\n");
        printf("3. Phep nhan (*)\n");
        printf("4. Phep chia (/)\n");
        printf("5. Phep chia lay du (%%)\n");
        printf("6. Tinh luy thua (^)\n");
        printf("7. Thoat\n");
        printf("================================\n");
        printf("Chon chuc nang (1-7): ");
        scanf("%d", &luaChon);

        switch (luaChon) {
            case 1:
                // Cộng
                break;
            case 2:
                // Trừ
                break;
            case 3:
                // Nhân
                break;
            case 4:
                // Chia (kiểm tra chia cho 0)
                break;
            case 5:
                // Chia lấy dư (chỉ áp dụng cho số nguyên)
                break;
            case 6:
                // Lũy thừa
                break;
            case 7:
                printf("Cam on ban da su dung!\n");
                break;
            default:
                printf("Lua chon khong hop le!\n");
                break;
        }

        if (luaChon != 7) {
            printf("Ban co muon tiep tuc? (y/n): ");
            scanf(" %c", &tiepTuc);
        } else {
            tiepTuc = 'n';
        }

    } while (tiepTuc == 'y' || tiepTuc == 'Y');

    return 0;
}
```

---

## 🎨 Ví dụ chạy chương trình

```
================================
      MAY TINH DON GIAN
================================
1. Phep cong (+)
2. Phep tru (-)
3. Phep nhan (*)
4. Phep chia (/)
5. Phep chia lay du (%)
6. Tinh luy thua (^)
7. Thoat
================================
Chon chuc nang (1-7): 1

Nhap so thu nhat: 15
Nhap so thu hai: 25
Ket qua: 15 + 25 = 40

Ban co muon tiep tuc? (y/n): y

================================
      MAY TINH DON GIAN
================================
...
Chon chuc nang (1-7): 4

Nhap so thu nhat: 10
Nhap so thu hai: 0
Loi: Khong the chia cho 0!

Ban co muon tiep tuc? (y/n): n
Cam on ban da su dung!
```

---

## ✅ Tiêu chí chấm điểm

| Tiêu chí                        | Điểm | Ghi chú      |
| ------------------------------- | ---- | ------------ |
| Menu hiển thị đúng              | 1    |              |
| 4 phép tính cơ bản hoạt động    | 2    | +, -, \*, /  |
| Xử lý lỗi (chia 0, lựa chọn)    | 1    |              |
| Code có cấu trúc, dễ đọc        | 1    |              |
| Comment giải thích              | 1    |              |
| Phép chia lấy dư và lũy thừa    | 1    | (Trung bình) |
| Lặp lại menu                    | 1    | (Trung bình) |
| Tính căn bậc 2, lịch sử         | 1    | (Nâng cao)   |
| Code tối ưu, xử lý ngoại lệ tốt | 1    | (Nâng cao)   |

---

## 📚 Tài liệu tham khảo

-   [Buổi 2: Biến, kiểu dữ liệu và nhập xuất](./lesson-2.md)
-   [Buổi 3: Toán tử và biểu thức](./lesson-3.md)
-   [Buổi 4: Cấu trúc điều kiện](./lesson-4.md)

---

## 💡 Gợi ý mở rộng (tùy chọn)

Nếu hoàn thành sớm, có thể thêm:

-   Tính giai thừa (n!)
-   Tính tổng dãy số
-   Chuyển đổi đơn vị (độ C ↔ độ F, km ↔ mile...)
-   Tính chu vi, diện tích hình học

---

## 🎯 Mục tiêu đạt được

Sau khi hoàn thành Lab này, sinh viên sẽ:

-   ✅ Thành thạo sử dụng `switch-case` cho menu (trong ngôn ngữ C)
-   ✅ Xử lý nhập xuất và tính toán cơ bản bằng ngôn ngữ C
-   ✅ Áp dụng điều kiện để xử lý lỗi trong C
-   ✅ Tổ chức code có cấu trúc

**Chúc các bạn làm bài tốt với ngôn ngữ lập trình C! 🚀**

Sau khi hoàn thành Lab này, sinh viên sẽ:

-   ✅ Thành thạo sử dụng `switch-case` cho menu
-   ✅ Xử lý nhập xuất và tính toán cơ bản
-   ✅ Áp dụng điều kiện để xử lý lỗi
-   ✅ Tổ chức code có cấu trúc

**Chúc các bạn làm bài tốt! 🚀**
