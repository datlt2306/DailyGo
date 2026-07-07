# Giới thiệu về Module, npm và pnpm

## Module trong Node.js

**Module** là thành phần cơ bản trong Node.js, giúp tổ chức code thành các phần nhỏ, dễ quản lý và tái sử dụng. Mỗi file trong Node.js được coi là một module. Các module có thể xuất (export) và nhập (import) dữ liệu hoặc hàm giữa các file.

### Các loại module

1. **Core Modules**  
   Đây là các module có sẵn trong Node.js, không cần cài đặt thêm. Ví dụ:

    - `fs`: Làm việc với hệ thống file.
    - `http`: Tạo server HTTP.
    - `path`: Xử lý đường dẫn file.

    Ví dụ sử dụng module `fs`:

    ```js
    const fs = require("fs");
    fs.writeFileSync("example.txt", "Hello, Node.js!");
    ```

2. **Local Modules**  
   Đây là các module do các em tự tạo. Ví dụ, tạo file `math.js`:

    ```js
    // math.js
    exports.add = (a, b) => a + b;
    exports.subtract = (a, b) => a - b;
    ```

    Sử dụng module `math.js`:

    ```js
    const math = require("./math");
    console.log(math.add(2, 3)); // Output: 5
    ```

3. **Third-party Modules**  
   Đây là các module được cài đặt từ npm, ví dụ: `express`, `lodash`.

## npm (Node Package Manager)

**npm** là trình quản lý gói đi kèm với Node.js, giúp cài đặt, quản lý và chia sẻ các thư viện hoặc module của bên thứ ba.

### Các lệnh cơ bản của npm

1. **Khởi tạo dự án với npm**  
   Tạo file `package.json` để quản lý thông tin dự án:

    ```bash
    npm init -y
    ```

2. **Cài đặt package**

    - Cài đặt package cho dự án:
        ```bash
        npm install <package-name>
        ```
    - Ví dụ: Cài đặt `express`:
        ```bash
        npm install express
        ```

3. **Cài đặt package toàn cục**  
   Dùng cho các công cụ CLI:

    ```bash
    npm install -g <package-name>
    ```

4. **Gỡ bỏ package**

    ```bash
    npm uninstall <package-name>
    ```

5. **Cập nhật package**
    ```bash
    npm update <package-name>
    ```

### File `package.json`

File `package.json` lưu thông tin về dự án và các package được sử dụng. Ví dụ:

```json
{
    "name": "my-project",
    "version": "1.0.0",
    "dependencies": {
        "express": "^4.18.2"
    }
}
```

## pnpm (Performant npm)

**pnpm** là một trình quản lý gói thay thế cho npm, nổi bật với hiệu suất cao và tiết kiệm bộ nhớ. Thay vì sao chép các package vào từng dự án, pnpm sử dụng cơ chế liên kết (symlink) để chia sẻ package giữa các dự án.

### Ưu điểm của pnpm

-   **Nhanh hơn npm**: Tốc độ cài đặt nhanh hơn nhờ cơ chế liên kết.
-   **Tiết kiệm bộ nhớ**: Không sao chép package nhiều lần.
-   **Quản lý phụ thuộc tốt hơn**: Đảm bảo các package không bị xung đột.

### Cài đặt pnpm

Cài đặt pnpm toàn cục:

```bash
npm install -g pnpm
```

### Các lệnh cơ bản của pnpm

1. **Khởi tạo dự án với pnpm**  
   Tạo file `package.json`:

    ```bash
    pnpm init
    ```

2. **Cài đặt package**

    - Cài đặt package cho dự án:
        ```bash
        pnpm add <package-name>
        ```
    - Ví dụ: Cài đặt `express`:
        ```bash
        pnpm add express
        ```

3. **Gỡ bỏ package**

    ```bash
    pnpm remove <package-name>
    ```

4. **Cập nhật package**
    ```bash
    pnpm update <package-name>
    ```

## So sánh npm và pnpm

| Tiêu chí          | npm              | pnpm             |
| ----------------- | ---------------- | ---------------- |
| Tốc độ            | Chậm hơn         | Nhanh hơn        |
| Tiết kiệm bộ nhớ  | Không            | Có               |
| Cơ chế cài đặt    | Sao chép package | Liên kết package |
| Quản lý phụ thuộc | Ít chặt chẽ      | Chặt chẽ hơn     |

## Kết luận

Hiểu rõ về module, npm và pnpm sẽ giúp các em tổ chức và quản lý dự án Node.js hiệu quả hơn. Trong khi npm là công cụ phổ biến, pnpm mang lại hiệu suất cao hơn và là lựa chọn tốt cho các dự án lớn.
