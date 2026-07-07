# Buổi 10: Đệ quy cơ bản

## 🎯 Mục tiêu buổi học

> **Thầy mong muốn sau buổi học này, các em sẽ đạt được:**

Sau buổi học hôm nay, thầy mong các em sẽ:
1. ✅ Hiểu rõ khái niệm về đệ quy trong C
2. ✅ Nắm được cách viết một hàm đệ quy cơ bản
3. ✅ Biết được tại sao cần điều kiện dừng (base case)
4. ✅ Làm quen với ứng dụng đệ quy qua các ví dụ như: giai thừa, Fibonacci, lũy thừa
## 📘 Nội dung chính

### 1. Đệ quy là gì?

Thầy nhấn mạnh: **Đệ quy** là hiện tượng một hàm tự gọi lại chính nó trong quá trình xử lý.

**Cấu trúc của một hàm đệ quy:**

1. **Điều kiện dừng (base case):** Là trường hợp đặc biệt để dừng quá trình đệ quy - nếu thiếu sẽ xảy ra lặp vô hạn.
2. **Trường hợp đệ quy (recursive case):** Hàm tiếp tục gọi lại chính nó với giá trị nhỏ hơn hoặc đơn giản hơn.

### 2. Ví dụ: Viết hàm tính giai thừa bằng đệ quy trong ngôn ngữ C

Thầy ví dụ:

```c
// Hàm tính n! bằng đệ quy
long long giaiThua(int n) {
    if (n <= 1) // Điều kiện dừng: n bằng 0 hoặc 1 thì trả về 1
        return 1;
    // Gọi đệ quy với n-1
    return n * giaiThua(n - 1);
}
```

Khi các em gọi `giaiThua(5)`, chương trình sẽ gọi tiếp `giaiThua(4)`, rồi `giaiThua(3)`... đến khi chạm base case là `giaiThua(1)` thì sẽ dừng lại.

---

**Bài tập về nhà:** Các em chuẩn bị trước cho buổi sau về mảng một chiều, đọc tài liệu trước ở đây: [Buổi 11: Mảng một chiều](./lesson-11.md)
