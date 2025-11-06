# Buổi 13 (LT) – API Documentation với Swagger & Versioning

## 🎯 Mục tiêu
- Tài liệu hóa API bằng OpenAPI/Swagger UI
- Thêm cơ chế auth (Authorize) trong docs, ẩn endpoint nhạy cảm
- Tổ chức versioning `/api/v1`, chuẩn hóa response

## 🧠 Nội dung chính
- OpenAPI: schema, paths, securitySchemes (Bearer JWT)
- swagger-ui-express hoặc Redoc
- JSDoc vs YAML/JSON spec, tự sinh schema từ DTO (nếu dùng)
- Versioning chiến lược và deprecate endpoint

## 💻 Tích hợp nhanh
```bash
pnpm i swagger-ui-express
```

Ví dụ mount docs:
```js
import swaggerUi from 'swagger-ui-express';
import swaggerDoc from '../docs/swagger.json';
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc, { swaggerOptions: { persistAuthorization: true } }));
```

## 🧩 Task
1) Tạo file `docs/swagger.json|yaml` mô tả các routes Auth/Product/Order hiện có
2) Thêm security bearerAuth; cấu hình nút Authorize trong UI
3) Chuẩn hóa response (success, data, error, meta) và mô tả trong components/schemas
4) Ẩn các route nội bộ (nếu có) hoặc đánh dấu `deprecated`

## ✅ Deliverables
- Trang `/docs` chạy ổn định, hiển thị đầy đủ endpoints
- Có nút Authorize (JWT) và thử gọi trực tiếp trên UI
- README hướng dẫn cập nhật spec

---

## 📝 Rubric (15 điểm – Chất lượng API)
- Spec đầy đủ & đúng thực tế (6đ)
- Security & authorize hoạt động (5đ)
- Chuẩn hóa response & versioning (4đ)


