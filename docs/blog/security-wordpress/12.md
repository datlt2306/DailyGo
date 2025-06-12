# Cẩn thận khi nhúng mã vào website WordPress: Biện pháp bảo mật đơn giản nhưng hiệu quả

Chào các em, hôm nay thầy sẽ hướng dẫn các em một biện pháp bảo mật đơn giản nhưng rất quan trọng: cẩn thận khi nhúng mã vào website WordPress. Việc nhúng mã có thể mở ra cơ hội cho hacker nếu các em không kiểm tra kỹ nguồn gốc của mã.

## Tại sao cần cẩn thận khi nhúng mã?

WordPress cho phép các em nhúng mã JavaScript, PHP, hoặc các đoạn mã khác vào bài viết, trang, hoặc widget. Điều này có thể thực hiện qua:
- **Gutenberg Editor:** Thêm mã trực tiếp vào các block.
- **Plugin:** Ví dụ như plugin **WP Code** để chèn mã vào header, footer, hoặc thêm logic điều kiện.

Tuy nhiên, nếu mã nhúng không an toàn hoặc đến từ nguồn không đáng tin cậy, nó có thể tạo ra lỗ hổng bảo mật, cho phép hacker truy cập vào server của các em.

## Quy tắc cơ bản khi nhúng mã

### 1. Chỉ nhúng mã từ nguồn đáng tin cậy
- Nếu các em không chắc chắn 100% về độ an toàn của mã, đừng nhúng nó vào website.
- Ví dụ: Mã từ YouTube hoặc Amazon Affiliate thường an toàn vì đến từ các nguồn uy tín.

### 2. Kiểm tra mã trước khi nhúng
- Đọc và hiểu mã trước khi nhúng để đảm bảo không có đoạn mã độc hại.
- Nếu không thể đọc mã, hãy cân nhắc không sử dụng.

### 3. Cẩn thận với mã từ người dùng
- Nếu website của các em cho phép người dùng gửi bài viết (guest posts), hãy đảm bảo bài viết được lưu dưới dạng **draft** thay vì tự động xuất bản.
- Kiểm tra mã trong bài viết bằng cách chuyển sang chế độ **Code Editor** để tìm các đoạn mã hoặc URL không mong muốn.

## Ví dụ về nhúng mã an toàn

### Nhúng video YouTube
- Sử dụng block Gutenberg để chèn URL video:
```plaintext
https://www.youtube.com/watch?v=example
```
- Không cần nhúng toàn bộ mã nhúng (embed code).

### Nhúng liên kết affiliate từ Amazon
- Mã từ Amazon Affiliate thường an toàn:
```html
<a href="https://www.amazon.com/example" target="_blank">Sản phẩm Amazon</a>
```

## Cách xử lý bài viết từ người dùng

1. Đảm bảo bài viết được lưu dưới dạng **draft**.
2. Kiểm tra mã bằng **Code Editor**:
   - Xóa các đoạn mã hoặc URL không mong muốn.
3. Chuyển về **Visual Editor** và xuất bản bài viết nếu an toàn.

## Tóm tắt nhanh

- Chỉ nhúng mã từ nguồn đáng tin cậy.
- Kiểm tra mã trước khi nhúng để đảm bảo an toàn.
- Cẩn thận với bài viết từ người dùng, kiểm tra kỹ trước khi xuất bản.
- Sử dụng các công cụ như Gutenberg hoặc plugin để quản lý mã nhúng.

Hãy luôn cẩn thận khi nhúng mã để bảo vệ website của các em khỏi những nguy cơ không đáng có nhé!
