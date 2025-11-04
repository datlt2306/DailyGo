# Buổi 10: Đệ quy cơ bản

## 🎯 Mục tiêu học tập

Sau buổi học này, sinh viên sẽ:
- Hiểu khái niệm đệ quy
- Biết cách viết hàm đệ quy
- Hiểu điều kiện dừng (base case)
- Áp dụng đệ quy cho giai thừa, Fibonacci, lũy thừa

---

## 📘 Nội dung chính

### 1. Đệ quy là gì?

**Đệ quy** là hàm gọi chính nó.

**Cấu trúc:**
1. **Điều kiện dừng (Base case):** Trường hợp cơ bản, không gọi đệ quy
2. **Phần đệ quy (Recursive case):** Gọi lại chính hàm đó với giá trị nhỏ hơn

### 2. Ví dụ: Tính giai thừa

```cpp
long long giaiThua(int n) {
    if (n <= 1) return 1;  // Base case
    return n * giaiThua(n - 1);  // Recursive case
}
```

---

**Bài tiếp theo:** [Buổi 11: Mảng một chiều](./lesson-11.md)
