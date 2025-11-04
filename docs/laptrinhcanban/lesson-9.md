# Buổi 9: Tham số, giá trị trả về và phạm vi biến

## 🎯 Mục tiêu học tập

Sau buổi học này, sinh viên sẽ:

-   Hiểu sâu về cách truyền tham số vào hàm (pass by value)
-   Nắm vững giá trị trả về và các kiểu dữ liệu trả về
-   Hiểu khái niệm phạm vi biến (scope): cục bộ, toàn cục
-   Biết cách sử dụng biến toàn cục và biến cục bộ
-   Áp dụng vào các bài toán thực tế

---

## 📘 Nội dung chính

### 1. Truyền tham số (Pass by Value)

**Đặc điểm:**

-   Giá trị được sao chép vào tham số
-   Thay đổi tham số trong hàm không ảnh hưởng đến biến gốc

**Ví dụ:**

```cpp
void tangGiaTri(int x) {
    x++;  // Chỉ tăng trong hàm, không ảnh hưởng biến gốc
}

int main() {
    int a = 5;
    tangGiaTri(a);
    cout << a;  // Vẫn là 5
}
```

### 2. Giá trị trả về

-   Một hàm chỉ có thể trả về **một giá trị** duy nhất
-   Kiểu trả về phải khớp với kiểu khai báo
-   Hàm `void` không trả về giá trị

### 3. Phạm vi biến (Scope)

**Biến cục bộ (Local):**

-   Khai báo trong hàm
-   Chỉ tồn tại trong hàm đó

**Biến toàn cục (Global):**

-   Khai báo ngoài hàm
-   Có thể dùng ở mọi nơi

---

## 💻 Ví dụ minh họa

[Giữ cấu trúc tương tự các bài trước với các ví dụ về scope, pass by value, return values]

---

## 🧠 Bài tập thực hành

[Giữ cấu trúc bài tập như các bài trước]

---

**Bài tiếp theo:** [Buổi 10: Đệ quy cơ bản](./lesson-10.md)
