# Buổi 15 (LT) – Caching với Redis & WebSocket (Realtime)

## 🎯 Mục tiêu
- Tối ưu đọc dữ liệu bằng Redis cache (list/detail sản phẩm)
- Invalidate cache đúng lúc (CRUD)
- Phát realtime sự kiện đơn hàng bằng Socket.io

## 🧠 Nội dung chính
- Redis patterns: Cache-Aside (Read-Through), TTL, key design
- Invalidation: theo id, theo pattern `products:*`
- Socket.io: kênh `order-status`, phân quyền, rooms theo userId

## 💻 Tích hợp nhanh
```bash
pnpm i ioredis socket.io
```

Khởi tạo Redis client; bọc đọc list/detail bằng cache. Server Socket.io mount cùng Express.

## 🧩 Task
1) Thêm cache cho `GET /products` và `GET /products/:id` (TTL 60–120s)
2) Invalidate khi `POST/PUT/DELETE /products`
3) Phát sự kiện `order-status` khi cập nhật đơn hàng

## ✅ Deliverables
- Redis chạy local (Docker/Redis Cloud), cache hoạt động
- Demo realtime update trạng thái đơn hàng
- README hướng dẫn cấu hình Redis

---

## 📝 Rubric (15 điểm – Production-readiness & Realtime)
- Cache có hiệu quả và invalidation đúng (8đ)
- Socket.io hoạt động, phân luồng hợp lý (7đ)


