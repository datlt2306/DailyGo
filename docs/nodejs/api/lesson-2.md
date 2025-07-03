# Request/Response và Middleware cơ bản trong Express

## Mục tiêu

-   Ôn tập và thực hành lại cài đặt từ buổi 1.
-   Hiểu rõ Request và Response trong Express, cách lấy và trả dữ liệu cơ bản.
-   Thực hành viết các endpoint đơn giản.
-   Làm quen với middleware cơ bản, chuẩn bị cho việc sử dụng phương thức POST.


## Tổng quan về Request và Response trong Express

### Request (Yêu cầu)

::: info
***Request*** là thông tin mà client gửi lên server. Trong Express, đối tượng này là `req`.
:::
-   **`req.body`**: Chứa dữ liệu gửi từ client, thường dùng với các phương thức như POST hoặc PUT. Ví dụ, khi client gửi một biểu mẫu, dữ liệu sẽ nằm trong `req.body`.
-   **`req.params`**: Chứa các tham số động trên URL. Ví dụ: `/posts/:id` sẽ cho phép lấy giá trị `id` từ URL.
-   **`req.query`**: Chứa các tham số truy vấn trên URL. Ví dụ: `/posts?search=abc` sẽ cho phép lấy giá trị `search` từ URL.

### Response (Phản hồi)
::: info
***Response*** là thông tin mà server trả về cho client. Trong Express, đối tượng này là `res`.
:::
-   **`res.json(data)`**: Trả về dữ liệu dạng JSON, thường dùng cho API.
-   **`res.send(data)`**: Trả về dữ liệu dạng text hoặc HTML.
-   **`res.status(code)`**: Thiết lập mã trạng thái HTTP (ví dụ: 200, 404, 500...), giúp client biết trạng thái của yêu cầu.


### Ví dụ minh họa


::: code-group
```javascript [src/routers/index.js]
import { Router } from "express";

const postRouter = Router();

// GET /hello?name=Teo
postRouter.get("/hello", (req, res) => {
    const name = req.query.name || "bạn"; // Lấy giá trị 'name' từ query string
    res.json({ message: `Xin chào, ${name}!` }); // Trả về JSON với lời chào
});

// GET /posts/:id
postRouter.get("/:id", (req, res) => {
    const id = req.params.id; // Lấy giá trị 'id' từ URL
    res.json({ id, message: "Chi tiết bài viết" }); // Trả về JSON với thông tin bài viết
});

export default postRouter;
```

```javascript [src/app.js]
import express from "express";
import dotenv from "dotenv";
import postRouter from "./routers/posts";

dotenv.config();
const app = express();

app.use("/api/posts", /postRouter); // Định nghĩa route chính bắt đầu bằng /api

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
});
```
:::

## Bài thực hành nhỏ

### Yêu cầu

1. Tạo endpoint `GET /api/greet` trả về lời chào với tên từ query string (ví dụ: `/api/greet?name=Ken`).
2. Tạo endpoint `GET /api/sum` nhận hai số từ query string (`a` và `b`) và trả về tổng của chúng.

### Gợi ý
::: code-group
```javascript [src/routers/index.js]
// ...existing code...

// GET /greet?name=Ken
router.get("/greet", (req, res) => {
    const name = req.query.name || "bạn"; // Lấy giá trị 'name' từ query string
    res.json({ message: `Xin chào, ${name}!` }); // Trả về JSON với lời chào
});

// GET /sum?a=5&b=10
router.get("/sum", (req, res) => {
    const a = parseInt(req.query.a, 10) || 0; // Lấy giá trị 'a' từ query string
    const b = parseInt(req.query.b, 10) || 0; // Lấy giá trị 'b' từ query string
    res.json({ sum: a + b }); // Trả về tổng của 'a' và 'b'
});
```
:::


## Middleware cơ bản trong Express

Middleware là các hàm trung gian trong Express, được sử dụng để xử lý request trước khi nó đến các route handler hoặc xử lý response trước khi gửi về client.

### Phân loại middleware

1. **Middleware tự định nghĩa**  
   Đây là các middleware do lập trình viên tự viết để xử lý logic cụ thể.

    #### Ví dụ:

    ```js
    // Middleware tự định nghĩa để ghi log thông tin request
    const logRequest = (req, res, next) => {
        console.log(`${req.method} ${req.url}`); // Ghi log phương thức và URL
        next(); // Chuyển tiếp đến middleware tiếp theo
    };

    app.use(logRequest); // Sử dụng middleware
    ```

2. **Middleware tích hợp hoặc từ thư viện bên ngoài**  
   Express cung cấp sẵn một số middleware tích hợp hoặc từ thư viện bên ngoài, ví dụ: `express.json()` để parse JSON, `express.static()` để phục vụ file tĩnh.

    #### Ví dụ:

    ```js
    // Middleware tích hợp để parse JSON
    app.use(express.json());

    // Middleware tích hợp để phục vụ file tĩnh
    app.use(express.static("public"));
    ```


### Sử dụng `express.json()` để xử lý dữ liệu JSON

Khi client gửi dữ liệu JSON trong body của request (ví dụ: với phương thức POST), cần sử dụng middleware `express.json()` để Express tự động parse dữ liệu JSON thành đối tượng JavaScript.

#### Ví dụ:
::: code-group
```javascript [src/app.js]

app.use(express.json()); // Middleware để parse JSON

app.post("/api/posts", (req, res) => {
    const { title, content } = req.body; // Lấy dữ liệu từ body của request
    res.json({ title, content, message: "Dữ liệu đã được xử lý" }); // Trả về JSON với dữ liệu đã xử lý
});
```
:::
> **Lưu ý:** Nếu không sử dụng `express.json()`, `req.body` sẽ là `undefined`.


## Kết luận

Trong bài học này, các em đã học cách làm việc với Request và Response trong Express, viết các endpoint đơn giản, và sử dụng middleware cơ bản. Đây là nền tảng quan trọng để xây dựng các API phức tạp hơn trong tương lai.

Nếu có thắc mắc, đừng ngại hỏi thầy hoặc các bạn nhé!  
Chúc các em học tốt! 🚀  
— **Thầy Đạt 🧡**

