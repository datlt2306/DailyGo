# 🔬 Lab kiểm tra - Máy tính đơn giản

**Thời gian:** 90 phút  
**Sau buổi:** Buổi 4  
**Hệ số điểm:** 30%  

---

## 🎯 Mục tiêu

Kiểm tra khả năng áp dụng kiến thức đã học từ Buổi 1-4:
- Biến, kiểu dữ liệu, nhập xuất
- Toán tử và biểu thức
- Cấu trúc điều kiện (if-else, switch)

---

## 📋 Đề bài

### **Yêu cầu chung:**
Viết chương trình **Máy tính đơn giản** với các chức năng cơ bản.

### **Chức năng bắt buộc:**

1. **Menu chính:**
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
   - Nhập 2 số từ bàn phím
   - Thực hiện phép tính tương ứng
   - Hiển thị kết quả

3. **Xử lý lỗi:**
   - Phép chia: Kiểm tra chia cho 0
   - Lựa chọn: Kiểm tra lựa chọn hợp lệ (1-7)

4. **Lặp lại menu:**
   - Sau mỗi phép tính, hỏi người dùng có muốn tiếp tục không
   - Nếu có, quay lại menu
   - Nếu không, thoát chương trình

---

## 💻 Yêu cầu kỹ thuật

### **Cấp độ cơ bản (6 điểm):**
- [ ] Menu hiển thị đúng
- [ ] Thực hiện được 4 phép tính cơ bản (+, -, *, /)
- [ ] Xử lý chia cho 0
- [ ] Kiểm tra lựa chọn hợp lệ
- [ ] Có comment giải thích code

### **Cấp độ trung bình (8 điểm):**
- [ ] Đạt yêu cầu cơ bản
- [ ] Thêm phép chia lấy dư (%)
- [ ] Tính lũy thừa (a^b, chỉ tính với số nguyên dương)
- [ ] Cho phép lặp lại nhiều lần

### **Cấp độ nâng cao (10 điểm):**
- [ ] Đạt yêu cầu trung bình
- [ ] Thêm chức năng tính căn bậc 2
- [ ] Tính lũy thừa với số thực (sử dụng hàm pow)
- [ ] Hiển thị lịch sử 5 phép tính gần nhất
- [ ] Code có cấu trúc rõ ràng, dễ đọc

---

## 📝 Gợi ý cấu trúc code

```cpp
#include <iostream>
#include <cmath>  // Cho hàm pow và sqrt
using namespace std;

int main() {
    int luaChon;
    float so1, so2, ketQua;
    char tiepTuc;
    
    do {
        // Hiển thị menu
        // ...
        
        cout << "Chon chuc nang (1-7): ";
        cin >> luaChon;
        
        switch (luaChon) {
            case 1:
                // Phep cong
                break;
            case 2:
                // Phep tru
                break;
            case 3:
                // Phep nhan
                break;
            case 4:
                // Phep chia (kiem tra chia cho 0)
                break;
            case 5:
                // Phep chia lay du
                break;
            case 6:
                // Tinh luy thua
                break;
            case 7:
                cout << "Cam on ban da su dung!" << endl;
                break;
            default:
                cout << "Lua chon khong hop le!" << endl;
                break;
        }
        
        if (luaChon != 7) {
            cout << "Ban co muon tiep tuc? (y/n): ";
            cin >> tiepTuc;
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

| Tiêu chí | Điểm | Ghi chú |
|----------|------|---------|
| Menu hiển thị đúng | 1 | |
| 4 phép tính cơ bản hoạt động | 2 | +, -, *, / |
| Xử lý lỗi (chia 0, lựa chọn) | 1 | |
| Code có cấu trúc, dễ đọc | 1 | |
| Comment giải thích | 1 | |
| Phép chia lấy dư và lũy thừa | 1 | (Trung bình) |
| Lặp lại menu | 1 | (Trung bình) |
| Tính căn bậc 2, lịch sử | 1 | (Nâng cao) |
| Code tối ưu, xử lý ngoại lệ tốt | 1 | (Nâng cao) |

---

## 📚 Tài liệu tham khảo

- [Buổi 2: Biến, kiểu dữ liệu và nhập xuất](./lesson-2.md)
- [Buổi 3: Toán tử và biểu thức](./lesson-3.md)
- [Buổi 4: Cấu trúc điều kiện](./lesson-4.md)

---

## 💡 Gợi ý mở rộng (tùy chọn)

Nếu hoàn thành sớm, có thể thêm:
- Tính giai thừa (n!)
- Tính tổng dãy số
- Chuyển đổi đơn vị (độ C ↔ độ F, km ↔ mile...)
- Tính chu vi, diện tích hình học

---

## 🎯 Mục tiêu đạt được

Sau khi hoàn thành Lab này, sinh viên sẽ:
- ✅ Thành thạo sử dụng `switch-case` cho menu
- ✅ Xử lý nhập xuất và tính toán cơ bản
- ✅ Áp dụng điều kiện để xử lý lỗi
- ✅ Tổ chức code có cấu trúc

**Chúc các bạn làm bài tốt! 🚀**
