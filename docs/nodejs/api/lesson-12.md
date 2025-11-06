# Buổi 12 (TH) – Testing với Jest & Supertest

## 🎯 Mục tiêu

-   Thiết lập Jest + Supertest cho dự án API hiện có
-   Viết unit test cho service, integration test cho route (Auth/Product)
-   Chạy test trong CI, đặt ngưỡng coverage tối thiểu ≥60%

## 🧠 Nội dung chính

-   Cấu hình Jest (ESM/CJS), `testEnvironment`, `setupFilesAfterEnv`
-   Supertest: kiểm thử endpoint Express, khởi tạo app không cần listen cổng
-   Kỹ thuật: seed dữ liệu test, mock JWT/Redis/Cloudinary khi cần
-   Test pyramid: Unit (service) < Integration (route) < E2E (ít)

## 💻 Thiết lập nhanh

```bash
pnpm i -D jest supertest ts-jest @types/jest @types/supertest
pnpm dlx ts-jest config:init  # nếu dùng TypeScript
```

Tạo `tests/setup.ts` để chuẩn bị DB test (Mongo Memory Server hoặc DB riêng), và export `app` từ `src/app` để dùng trong Supertest.

## 🧩 Task

1. Cấu hình Jest để chạy được test trên dự án hiện tại
2. Viết test cho Auth:

-   POST /auth/register: trả 201 khi hợp lệ; 400 khi email trùng
-   POST /auth/login: trả accessToken/refreshToken khi hợp lệ; 401 khi sai mật khẩu

3. Viết test cho Product:

-   GET /products: trả 200, trả đúng dạng `data` + `meta`
-   POST /products: chỉ `admin` được phép, 403 nếu user thường

4. Thêm script: `"test"`, `"test:watch"`, `"coverage"`; đặt threshold ≥60%

## ✅ Deliverables

-   tests/auth.test.(ts|js), tests/product.test.(ts|js)
-   CI chạy test pass, coverage report ≥60%
-   README cập nhật cách chạy test

## 📌 Gợi ý kiểm thử

-   Dùng Mongo Memory Server cho unit/integration để cô lập dữ liệu
-   Tránh phụ thuộc mạng ngoài (mock Cloudinary/Redis)

---

## 📝 Rubric (15 điểm – Testing)

-   Thiết lập & chạy test ổn định (5đ)
-   Test Auth & Product bao phủ case quan trọng (7đ)
-   Coverage đạt yêu cầu, cấu trúc test rõ ràng (3đ)
