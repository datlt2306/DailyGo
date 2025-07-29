# 🛡️ Hướng dẫn Kiểm tra Quyền trong API Sản phẩm

Chào các em!  
Hôm nay, Thầy sẽ hướng dẫn các em cách kiểm tra quyền trong API sản phẩm. Chúng ta sẽ viết middleware để xác thực JWT và kiểm tra quyền dựa trên vai trò người dùng. Sau đó, tích hợp middleware này vào API sản phẩm. Bắt đầu thôi nào!


## 1. Middleware: `verifyJWT` và `restrictTo`

### 1.1. Middleware `verifyJWT`

Middleware này sẽ xác thực JWT từ header của yêu cầu. Nếu token hợp lệ, middleware sẽ giải mã và gắn thông tin người dùng vào `req.user`.

::: code-group
```javascript [src/middlewares/auth.middleware.js]
import jwt from "jsonwebtoken";

export const verifyJWT = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Access Denied" });

  try {
    const decoded = jwt.verify(token, "yourSecretKey");
    req.user = decoded;
    next();
  } catch (err) {
    res.status(403).json({ message: "Invalid Token" });
  }
};
```
:::

> **Giải thích**:  
> - `req.headers.authorization`: Lấy token từ header `Authorization`.  
> - `jwt.verify`: Giải mã và xác thực token.  
> - Nếu token hợp lệ, thông tin người dùng sẽ được gắn vào `req.user`.


### 1.2. Middleware `restrictTo`

Middleware này sẽ kiểm tra vai trò của người dùng. Chỉ cho phép người dùng có vai trò phù hợp truy cập endpoint.

::: code-group
```javascript [src/middlewares/auth.middleware.js]
export const restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: "Access Denied" });
    }
    next();
  };
};
```
:::

> **Giải thích**:  
> - `roles`: Danh sách các vai trò được phép truy cập.  
> - `req.user.role`: Vai trò của người dùng được lấy từ `verifyJWT`.  
> - Nếu vai trò không phù hợp, trả về lỗi `403 Forbidden`.


## 2. Tích hợp Middleware vào API Sản phẩm

Sau khi viết xong middleware, chúng ta sẽ tích hợp chúng vào API sản phẩm. Các route như tạo, cập nhật, và xóa sản phẩm sẽ yêu cầu quyền admin hoặc staff.

::: code-group
```javascript [src/routes/product.router.js]
import express from "express";
import {
  getAllProducts,
  getProductById,
  getProductBySlug,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";
import { validateRequest } from "../middlewares/validateRequest.js";
import { createProductSchema, updateProductSchema } from "../schemas/productSchemas.js";
import { verifyJWT, restrictTo } from "../middlewares/authMiddleware.js";

export const productRouter = express.Router();

// Các route không yêu cầu xác thực
productRouter.get("/", getAllProducts);
productRouter.get("/:id", getProductById);
productRouter.get("/slug/:slug", getProductBySlug);

// Routes yêu cầu xác thực
productRouter.use(verifyJWT);

// Routes chỉ cho admin và staff
productRouter.use(restrictTo("admin", "staff"));

// Các route yêu cầu quyền admin hoặc staff
productRouter.post("/", validateRequest(createProductSchema), createProduct);
productRouter.patch("/:id", validateRequest(updateProductSchema), updateProduct);
productRouter.delete("/:id", deleteProduct);
```
:::
> **Giải thích**:  
> - `productRouter.use(verifyJWT)`: Tất cả các route sau dòng này yêu cầu xác thực JWT.  
> - `productRouter.use(restrictTo("admin", "staff"))`: Chỉ cho phép admin và staff truy cập các route sau dòng này.  


## 3. Test API với Postman

### 3.1. Lấy danh sách sản phẩm (Không yêu cầu xác thực)

- **Method**: `GET`  
- **URL**: `http://localhost:3000/api/products`  


### 3.2. Tạo sản phẩm mới (Yêu cầu quyền admin hoặc staff)

- **Method**: `POST`  
- **URL**: `http://localhost:3000/api/products`  
- **Headers**:  

```json
{
  "Authorization": "Bearer <your-jwt-token>"
}
```

- **Body** (JSON):  

```json
{
  "name": "Laptop Dell XPS 13",
  "slug": "laptop-dell-xps-13",
  "description": "Laptop cao cấp với thiết kế mỏng nhẹ.",
  "price": 35000,
  "stock": 10,
  "sku": "DELL-XPS-13",
  "status": "published"
}
```

- **Kết quả**:  

```json
{
  "_id": "64f1a2b3c4d5e6f7g8h9i0j1",
  "name": "Laptop Dell XPS 13",
  "slug": "laptop-dell-xps-13",
  "description": "Laptop cao cấp với thiết kế mỏng nhẹ.",
  "price": 35000,
  "stock": 10,
  "sku": "DELL-XPS-13",
  "status": "published",
  "createdAt": "2023-09-01T12:00:00.000Z",
  "updatedAt": "2023-09-01T12:00:00.000Z"
}
```


### 3.3. Xóa sản phẩm (Yêu cầu quyền admin hoặc staff)

- **Method**: `DELETE`  
- **URL**: `http://localhost:3000/api/products/64f1a2b3c4d5e6f7g8h9i0j1`  
- **Headers**:  

```json
{
  "Authorization": "Bearer <your-jwt-token>"
}
```

- **Kết quả**:  

```json
{
  "success": true
}
```


## 4. Tóm tắt

- **Middleware `verifyJWT`**: Xác thực JWT và gắn thông tin người dùng vào `req.user`.
- **Middleware `restrictTo`**: Kiểm tra quyền dựa trên vai trò người dùng.
- **Tích hợp Middleware**: Sử dụng `verifyJWT` và `restrictTo` trong API sản phẩm để bảo vệ các route quan trọng.
- **Test Postman**: Kiểm tra các endpoint với token JWT và vai trò phù hợp.

Nếu có thắc mắc, đừng ngại hỏi thầy hoặc các bạn nhé!  
Chúc các em học tốt! 🚀
— **Thầy Đạt 🧡**
