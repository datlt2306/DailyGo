# Giới thiệu về khóa học Node.js API cho Ecommerce

Chào mừng các em đến với khóa học Node.js/Express xây dựng API cho ứng dụng thương mại điện tử! 👨‍🏫

Khóa học này sẽ giúp các em:

-   Hiểu rõ cách xây dựng API backend cho ứng dụng ecommerce.
-   Thành thạo các bước thiết lập môi trường, khởi tạo dự án backend hiện đại.
-   Làm quen với các công cụ phổ biến như Babel, dotenv, pnpm, Postman...
-   Xây dựng các API quan trọng như quản lý sản phẩm, người dùng, giỏ hàng, đơn hàng.
-   Tích hợp các tính năng bảo mật như xác thực JWT, mã hóa mật khẩu.
-   Tối ưu hiệu năng và tổ chức code khoa học, dễ mở rộng.

## Giới thiệu Nodejs

### Node.js là gì?

Node.js là một nền tảng (runtime) giúp chạy JavaScript ở phía server, không chỉ trong trình duyệt. Nhờ Node.js, các em có thể dùng JavaScript để xây dựng các ứng dụng web, API, real-time chat, và nhiều loại ứng dụng khác. Node.js ra đời năm 2009 bởi Ryan Dahl, nhằm giải quyết bài toán hiệu năng và xử lý nhiều kết nối cùng lúc mà các nền tảng truyền thống gặp khó khăn.

### Tại sao nên học và sử dụng Node.js?

-   Cho phép dùng chung một ngôn ngữ (JavaScript) ở cả frontend và backend, giúp học nhanh, làm việc hiệu quả.
-   Xử lý bất đồng bộ (asynchronous) rất tốt, phù hợp cho các ứng dụng cần hiệu năng cao, nhiều kết nối cùng lúc (chat, game, API...)
-   Có hệ sinh thái thư viện (npm) cực kỳ phong phú, dễ mở rộng.
-   Được nhiều công ty lớn sử dụng (Netflix, LinkedIn, Uber...)
-   Dễ học nếu đã biết JavaScript, lương và nhu cầu tuyển dụng cao.

### So sánh Node.js với PHP

| Tiêu chí          | Node.js                       | PHP                           |
| ----------------- | ----------------------------- | ----------------------------- |
| Ngôn ngữ          | JavaScript                    | PHP                           |
| Kiểu xử lý        | Bất đồng bộ (asynchronous)    | Đa phần đồng bộ (synchronous) |
| Hiệu năng         | Cao với ứng dụng real-time    | Tốt cho web truyền thống      |
| Hệ sinh thái      | npm (rất lớn, hiện đại)       | Composer (lớn, truyền thống)  |
| Học tập           | Dễ nếu đã biết JS             | Dễ bắt đầu cho web            |
| Ứng dụng phổ biến | API, chat, game, microservice | Website, CMS (WordPress...)   |

Tóm lại, Node.js rất phù hợp cho các ứng dụng hiện đại, cần tốc độ và khả năng mở rộng, còn PHP vẫn mạnh ở mảng web truyền thống, blog, CMS.

### Khi nào nên chọn Node.js?

-   Khi xây dựng API cho ứng dụng ecommerce, cần xử lý nhiều yêu cầu đồng thời.
-   Khi muốn tích hợp các tính năng real-time như thông báo đơn hàng, chat hỗ trợ khách hàng.
-   Khi cần tốc độ phát triển nhanh, nhiều thư viện hỗ trợ.
-   Khi muốn xây dựng hệ thống có khả năng mở rộng và hiệu năng cao.

## Chuẩn bị cho khóa học Node.js

Để học Node.js hiệu quả, bạn nên có kiến thức cơ bản về:

-   JavaScript ES6+
-   Hiểu biết cơ bản về networking và HTTP
-   Cơ sở dữ liệu

## Thiết lập bị môi trường

### 1. Cài đặt Node.js

Đầu tiên, các em cần cài Node.js – đây là nền tảng giúp chạy JavaScript phía server, rất phổ biến hiện nay. Nếu máy chưa có, hãy vào [https://nodejs.org/en](https://nodejs.org/en) để tải về.

### 2. Cài đặt pnpm

Thầy khuyên dùng `pnpm` thay cho `npm` vì tốc độ cài đặt nhanh và tiết kiệm bộ nhớ hơn. Cài đặt bằng lệnh:

```bash
npm i -g pnpm
```

### 3. Khởi tạo dự án Node.js

-   Tạo một thư mục mới cho dự án, ví dụ: `WD20104`. Tên gì cũng được, miễn các em dễ nhớ.
-   Mở terminal, di chuyển vào thư mục đó và khởi tạo dự án:

    ```bash
    npm init -y
    ```

    Lệnh này sẽ tạo file `package.json` – nơi lưu thông tin dự án và các thư viện sẽ cài đặt sau này.

-   Cài các thư viện cần thiết:
    ```bash
    pnpm i express mongoose cors bcryptjs jsonwebtoken dotenv morgan
    ```
    Mỗi thư viện đều có vai trò riêng:
    -   `express` giúp xây dựng web/API nhanh chóng.
    -   `mongoose` để kết nối và làm việc với MongoDB.
    -   `cors` cho phép truy cập API từ nhiều nguồn khác nhau.
    -   `bcryptjs` dùng để mã hóa mật khẩu.
    -   `jsonwebtoken` phục vụ xác thực người dùng qua token.
    -   `dotenv` giúp quản lý các biến môi trường, bảo mật thông tin nhạy cảm.
    -   `morgan` hỗ trợ ghi log các request, rất tiện khi debug.

---

### 4. Cài đặt Babel cho dự án

Để code hiện đại hơn, các em cần Babel – công cụ chuyển đổi mã JavaScript mới về dạng mà Node.js hiểu được.  
Cài đặt các gói cần thiết:

```bash
pnpm i -D @babel/core @babel/node @babel/preset-env nodemon
```

-   `@babel/core`, `@babel/node`, `@babel/preset-env` là bộ công cụ Babel.
-   `nodemon` giúp tự động restart server khi code thay đổi.

Sau đó, tạo file `.babelrc` ở thư mục gốc với nội dung:

```json
{
    "presets": ["@babel/preset-env"]
}
```

Nhờ vậy, các em có thể dùng cú pháp import/export, async/await... mà không lo Node.js chưa hỗ trợ.

### 5. Cấu hình package.json

Thêm script để chạy dự án:

```json
"scripts": {
  "dev": "nodemon --exec babel-node src/app.js"
}
```

Script này giúp các em chỉ cần chạy `pnpm run dev` là server sẽ tự động khởi động bằng Babel, đồng thời nodemon sẽ theo dõi mọi thay đổi trong mã nguồn và tự động restart server. Nhờ đó, các em không cần phải dừng và chạy lại thủ công mỗi khi sửa code, tiết kiệm thời gian và tăng hiệu quả làm việc.

### 6. Thiết lập cấu trúc thư mục

```
src/
├── app.js                  # Tệp chính khởi chạy ứng dụng
├── routers/                # Chứa các file định nghĩa route
│   ├── index.js            # Router chính, tập hợp các router con
│   └── posts.js            # Router cho bài viết
├── note/                   # Thư mục lưu ghi chú hoặc tài liệu
├── .babelrc                # Cấu hình Babel
├── .env                    # Lưu thông tin biến môi trường
└── .gitignore              # Định nghĩa các file/thư mục cần bỏ qua khi đẩy lên Git
```

-   `.babelrc` là file cấu hình cho Babel, giúp dự án hiểu và chuyển đổi cú pháp JavaScript hiện đại sang dạng Node.js có thể chạy được.

-   `routers/` là nơi chứa các route (đường dẫn API).
-   `.env` lưu thông tin bí mật như port, database URI...
-   `.gitignore` để không đưa các file nhạy cảm/lớn lên Git.

### 7. Cấu hình biến môi trường

Tạo file `.env` với nội dung:

```env
PORT=8000
```

Nhờ vậy, khi muốn đổi port, các em chỉ cần sửa file này mà không phải động vào code.

Đừng quên file `.gitignore`:

```
node_modules
.env
```

Những file này không nên đưa lên GitHub để tránh lộ thông tin hoặc làm nặng repository.

### 8. Viết mã nguồn khởi tạo app

**src/app.js**

```js
import express from "express";
import dotenv from "dotenv";
import router from "./routers";

dotenv.config();
const app = express();

app.use("/api", router);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
```

Ở đây, dotenv sẽ đọc biến môi trường từ file `.env`.  
Tất cả các route sẽ bắt đầu bằng `/api`, giúp tổ chức API rõ ràng hơn.  
Cuối cùng, server sẽ lắng nghe trên port mà các em đã cấu hình.

### 9. Cấu hình router

**src/routers/index.js**

```js
import { Router } from "express";
import postsRouter from "./posts";

const router = Router();
router.use("/posts", postsRouter);

export default router;
```

Việc tách các route nhỏ thành từng file giúp code gọn gàng, dễ mở rộng. Khi gọi `/api/posts`, request sẽ được chuyển tiếp sang file `posts.js`.

**src/routers/posts.js**

```js
import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.json({ message: "Danh sách bài viết" });
});

export default router;
```

Đây là route GET `/api/posts`, trả về một thông báo mẫu. Sau này, các em có thể mở rộng thêm các chức năng khác như thêm, sửa, xóa bài viết.

### 10. Chạy thử dự án

Chạy lệnh:

```bash
pnpm run dev
```

Nếu thấy dòng "Server is running..." hiện ra, nghĩa là server đã hoạt động.

Các em có thể kiểm tra bằng trình duyệt hoặc Postman với địa chỉ:  
`http://localhost:8000/api/posts`

## Kiểm tra API với Postman

1. Mở Postman (hoặc Insomnia, hoặc bất cứ công cụ nào các em thích).
2. Tạo một request mới với phương thức **GET**.
3. Nhập URL: `http://localhost:8000/api/posts`
4. Nhấn **Send**.
5. Nếu thành công, các em sẽ thấy kết quả:
   `json
{
    "message": "Danh sách bài viết"
}
`
   API đã hoạt động đúng, các em có thể tự tin phát triển tiếp!

## Kết luận

Qua bài này, các em không chỉ biết cách tạo một dự án Node.js/Express mà còn hiểu rõ ý nghĩa của từng bước.  
Hãy luôn tự hỏi "vì sao mình làm như vậy", vì hiểu bản chất sẽ giúp các em tiến xa hơn rất nhiều!

Nếu có thắc mắc, đừng ngại hỏi thầy hoặc các bạn nhé!  
Chúc các em học tốt! 🚀
— **Thầy Đạt 🧡**

