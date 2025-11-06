# Buổi 14 (TH) – Upload File (Cloudinary) an toàn

## 🎯 Mục tiêu
- Upload ảnh sản phẩm lên Cloudinary bằng Multer (stream/buffer)
- Lưu URL vào Product, giới hạn định dạng/kích thước
- Vệ sinh & bảo mật file upload

## 🧠 Nội dung chính
- Multer (memoryStorage), validate mime-type, file size limit
- Cloudinary SDK: upload stream, folder, publicId
- Liên kết ảnh với Product, xóa ảnh khi xóa sản phẩm

## 💻 Tích hợp nhanh
```bash
pnpm i multer cloudinary
```

Endpoint gợi ý: `POST /products/:id/image` nhận 1 file `image` và cập nhật `imageUrl`.

## 🧩 Task
1) Tạo client Cloudinary (`src/integrations/cloudinary.ts`)
2) Route upload ảnh sản phẩm, validate file và kích thước
3) Lưu URL vào `product.imageUrl`, trả về payload chuẩn
4) Xóa ảnh Cloudinary khi xóa sản phẩm (nếu có `publicId`)

## ✅ Deliverables
- Endpoint upload hoạt động với Postman
- Ảnh hiển thị URL hợp lệ, lưu trong DB
- README cập nhật biến môi trường Cloudinary

---

## 📝 Rubric (10 điểm – Upload)
- Upload an toàn, validate hợp lệ (5đ)
- Tích hợp DB đúng & dọn dẹp khi xóa (5đ)


