# 🎓 Project cuối kỳ - Nhập môn Lập trình C

**Thời gian:** 2-3 tuần  
**Hệ số điểm:** 50%  
**Hình thức:** Làm cá nhân hoặc nhóm (tối đa 2 người)

---

## 🎯 Mục đích

Áp dụng toàn bộ kiến thức đã học từ Buổi 1-14 để xây dựng một chương trình hoàn chỉnh.

---

## 📋 Đề bài (Chọn 1 trong 3)

### **Đề 1: Hệ thống Quản lý Thư viện**

#### Yêu cầu chức năng:

1. **Quản lý sách:**
   - Thêm sách (Mã sách, Tên sách, Tác giả, Năm xuất bản, Số lượng)
   - Xem danh sách sách
   - Tìm kiếm sách theo tên/tác giả
   - Xóa sách
   - Cập nhật thông tin sách

2. **Quản lý mượn/trả:**
   - Mượn sách (ghi nhận người mượn, ngày mượn)
   - Trả sách
   - Xem lịch sử mượn/trả

3. **Thống kê:**
   - Số lượng sách hiện có
   - Sách đang được mượn
   - Top 5 sách được mượn nhiều nhất

4. **Lưu trữ:**
   - Lưu danh sách sách vào file
   - Đọc dữ liệu từ file khi khởi động

#### Cấu trúc dữ liệu gợi ý:

```c
struct Sach {
    char maSach[20];
    char tenSach[100];
    char tacGia[50];
    int namXuatBan;
    int soLuong;
    int soLuongMuon;
};

struct MuonTra {
    char maSach[20];
    char nguoiMuon[50];
    char ngayMuon[20];
    char ngayTra[20];
};
```

#### Điểm đánh giá:

- **Cơ bản (6 điểm):** Thực hiện được các chức năng cơ bản (thêm, xem, xóa sách)
- **Trung bình (8 điểm):** Thêm chức năng mượn/trả, tìm kiếm
- **Nâng cao (10 điểm):** Có thống kê, lưu/đọc file, giao diện đẹp

---

### **Đề 2: Hệ thống Quản lý Sinh viên**

#### Yêu cầu chức năng:

1. **Quản lý sinh viên:**
   - Thêm sinh viên (MSSV, Họ tên, Ngày sinh, Lớp, Điểm các môn)
   - Xem danh sách sinh viên
   - Tìm kiếm theo MSSV/tên
   - Xóa sinh viên
   - Cập nhật thông tin

2. **Quản lý điểm:**
   - Nhập điểm các môn học
   - Tính điểm trung bình
   - Xếp loại học lực (Xuất sắc, Giỏi, Khá, Trung bình, Yếu)

3. **Thống kê:**
   - Số lượng sinh viên theo lớp
   - Thống kê điểm theo môn học
   - Top 10 sinh viên có điểm cao nhất
   - Tỷ lệ sinh viên theo xếp loại

4. **Lưu trữ:**
   - Lưu danh sách sinh viên vào file
   - Đọc dữ liệu từ file

#### Cấu trúc dữ liệu gợi ý:

```c
struct SinhVien {
    char mssv[20];
    char hoTen[50];
    char ngaySinh[20];
    char lop[20];
    float diemToan;
    float diemLy;
    float diemHoa;
    float diemTrungBinh;
    char xepLoai[20];
};
```

#### Điểm đánh giá:

- **Cơ bản (6 điểm):** Quản lý sinh viên cơ bản, tính điểm trung bình
- **Trung bình (8 điểm):** Thêm xếp loại, tìm kiếm, thống kê đơn giản
- **Nâng cao (10 điểm):** Thống kê chi tiết, lưu/đọc file, sắp xếp

---

### **Đề 3: Game Đoán Số nâng cao**

#### Yêu cầu chức năng:

1. **Các chế độ chơi:**
   - **Dễ:** Đoán số từ 1-50 (10 lượt)
   - **Trung bình:** Đoán số từ 1-100 (7 lượt)
   - **Khó:** Đoán số từ 1-200 (5 lượt)

2. **Tính năng:**
   - Máy tự động sinh số ngẫu nhiên
   - Gợi ý (lớn hơn/nhỏ hơn)
   - Đếm số lần đoán
   - Tính điểm dựa trên độ khó và số lần đoán

3. **Quản lý người chơi:**
   - Nhập tên người chơi
   - Lưu điểm cao (Top 10)
   - Hiển thị lịch sử chơi

4. **Thống kê:**
   - Tỷ lệ thắng/thua
   - Số lượt chơi trung bình
   - Độ khó được chơi nhiều nhất

5. **Lưu trữ:**
   - Lưu bảng xếp hạng vào file
   - Đọc và hiển thị khi khởi động

#### Điểm đánh giá:

- **Cơ bản (6 điểm):** Game cơ bản với 1 chế độ, đếm lượt chơi
- **Trung bình (8 điểm):** Nhiều chế độ, tính điểm, bảng xếp hạng
- **Nâng cao (10 điểm):** Thống kê chi tiết, lưu/đọc file, giao diện đẹp

---

## 📝 Yêu cầu chung (áp dụng cho tất cả đề bài)

### 1. Cấu trúc code:
- ✅ Sử dụng hàm để tổ chức code
- ✅ Comment rõ ràng
- ✅ Đặt tên biến, hàm có ý nghĩa
- ✅ Code dễ đọc, có cấu trúc

### 2. Xử lý lỗi:
- ✅ Kiểm tra dữ liệu nhập vào
- ✅ Xử lý các trường hợp ngoại lệ (file không tồn tại, dữ liệu không hợp lệ...)

### 3. Giao diện:
- ✅ Menu rõ ràng, dễ sử dụng
- ✅ Hiển thị kết quả đẹp, dễ đọc

### 4. Báo cáo:
- ✅ File code nguồn (.c)
- ✅ Tài liệu mô tả chức năng (README.md hoặc file Word)
- ✅ Demo chương trình (video hoặc screenshots)

---

## 📊 Tiêu chí chấm điểm

| Tiêu chí | Điểm |
|----------|------|
| Chức năng cơ bản hoạt động đúng | 3 |
| Code có cấu trúc, dùng hàm hợp lý | 2 |
| Xử lý lỗi, kiểm tra dữ liệu | 1 |
| Comment, tên biến/hàm rõ ràng | 1 |
| Chức năng nâng cao (thống kê, file...) | 2 |
| Giao diện đẹp, dễ sử dụng | 1 |

---

## 📚 Tài liệu tham khảo

- [Buổi 1-14: Tất cả các bài học](./index.md)
- [Lab kiểm tra: Ví dụ về cấu trúc chương trình](./lab.md)

---

## 💡 Gợi ý mở rộng (không bắt buộc)

- Thêm chức năng sắp xếp
- Tìm kiếm nâng cao (tìm gần đúng)
- Export dữ liệu ra file Excel/CSV
- Giao diện màu sắc với thư viện hỗ trợ

---

## 🎯 Đầu ra mong muốn

Sau khi hoàn thành project, sinh viên sẽ:
- ✅ Thành thạo viết chương trình C hoàn chỉnh
- ✅ Biết tổ chức code với hàm, struct
- ✅ Xử lý dữ liệu với mảng, file
- ✅ Áp dụng tư duy thuật toán để giải quyết vấn đề
- ✅ Tự tin làm các project lập trình tiếp theo

---

**Chúc các bạn hoàn thành project xuất sắc! 🚀**
