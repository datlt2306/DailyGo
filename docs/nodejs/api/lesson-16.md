# Buổi 16 (TH) – Docker, Deploy & Demo + Code Review

## 🎯 Mục tiêu
- Đóng gói app bằng Docker, chạy `docker-compose` (app + Mongo + Redis)
- Deploy Heroku/Vercel (chọn 1) + Mongo Atlas + Redis Cloud
- Tổng duyệt: code review, checklist, demo

## 🧠 Nội dung chính
- Dockerfile (node:18-alpine), `.dockerignore`, multi-stage (optional)
- docker-compose: network, env, healthcheck
- Heroku: buildpack Node, config vars; Vercel: serverless adapter (nếu áp dụng)
- Bảo mật: `.env`, CORS, rate-limit, helmet, logs

## 💻 Thiết lập nhanh
```dockerfile
# Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json pnpm-lock.yaml* ./
RUN npm i -g pnpm && pnpm i --prod
COPY . .
CMD ["pnpm", "start"]
```

```yaml
# docker-compose.yml
version: '3.8'
services:
  api:
    build: .
    ports: ["3000:3000"]
    env_file: .env
    depends_on: [mongo, redis]
  mongo:
    image: mongo:6
    ports: ["27017:27017"]
  redis:
    image: redis:7-alpine
    ports: ["6379:6379"]
```

## 🧩 Task
1) Viết Dockerfile + docker-compose chạy local ok
2) Chọn 1 phương án deploy (Heroku/Vercel), cấu hình biến môi trường
3) Kiểm tra toàn bộ checklist (Auth, Product, Order, Upload, Cache, Realtime, Swagger)
4) Chuẩn bị slide/demo 5–7 phút, kèm link public

## ✅ Deliverables
- Link deploy public + tài khoản test
- Dockerfile, docker-compose.yml chạy được
- README hướng dẫn cài đặt/chạy/deploy + `.env.example`

---

## 📝 Rubric (10 điểm – Deploy & Demo)
- Docker & chạy local ổn định (4đ)
- Deploy thành công & bảo mật env (3đ)
- Demo & tài liệu rõ ràng (3đ)


