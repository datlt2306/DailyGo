# Thiết Kế Schema MongoDB: Cách Tổ Chức Cơ Sở Dữ Liệu

Chào các bạn sinh viên thân yêu! Hôm nay chúng ta sẽ cùng nhau khám phá một chủ đề cực kỳ thú vị: **Làm thế nào để thiết kế schema cơ sở dữ liệu trong MongoDB?**

Đây là câu hỏi đầu tiên mà bất kỳ ai cũng phải đối mặt khi bắt đầu một dự án với MongoDB. Và câu trả lời là: **Tùy vào từng trường hợp!**

Có rất nhiều yếu tố ảnh hưởng đến cách bạn thiết kế schema, ví dụ như:
- Ứng dụng của bạn đọc dữ liệu nhiều hay ghi dữ liệu nhiều?
- Những dữ liệu nào thường được truy cập cùng nhau?
- Yêu cầu về hiệu suất của bạn như thế nào?
- Dữ liệu của bạn sẽ tăng trưởng và mở rộng ra sao?

Trong bài học này, chúng ta sẽ cùng nhau tìm hiểu cách mô hình hóa cơ sở dữ liệu MongoDB thông qua các ví dụ thực tế. Các bạn sẽ học được các phương pháp phổ biến để thiết kế schema cho ứng dụng của mình.


## Cách tiếp cận thiết kế cơ sở dữ liệu - Relational vs MongoDB

Nhiều bạn đã học môn "Thiết kế cơ sở dữ liệu" ở trường đại học, thường bê nguyên kiểu thiết kế dành cho SQL database sang MongoDB. Nhưng các bạn ơi, làm vậy là không đúng đâu nhé!

MongoDB là một NoSQL database, và mặc dù nó có một số điểm tương đồng với SQL, nhưng nếu bạn áp dụng y nguyên cách thiết kế của SQL thì sẽ không tận dụng được những điểm mạnh của MongoDB.

Để dễ dàng tìm ra cách thiết kế đúng trong MongoDB, chúng ta hãy cùng so sánh giữa SQL và MongoDB nhé!

### Thiết kế cơ sở dữ liệu SQL
Trong SQL, chúng ta thường chia dữ liệu thành nhiều bảng (tables) và sử dụng các khóa ngoại (foreign keys) để liên kết chúng lại với nhau. Mỗi bảng sẽ có một schema rõ ràng, và chúng ta sẽ sử dụng JOIN để truy xuất dữ liệu từ nhiều bảng.
#### SQL Example:
```sql
CREATE TABLE Users (
  user_id INT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100)
);
CREATE TABLE Orders ( 
  order_id INT PRIMARY KEY,
  user_id INT,
  date DATE,
  FOREIGN KEY (user_id) REFERENCES Users(user_id)
);
CREATE TABLE OrderItems (
  order_item_id INT PRIMARY KEY,
  order_id INT,
  product_id INT,
  quantity INT,
  price DECIMAL(10, 2),
  FOREIGN KEY (order_id) REFERENCES Orders(order_id)
);
```
### Thiết kế cơ sở dữ liệu MongoDB

MongoDB thì khác nhé các bạn! Thay vì chia nhỏ dữ liệu thành nhiều collection, chúng ta có thể nhúng các mảng và đối tượng trực tiếp vào một document.

```sql

User {
  _id: ObjectId,
  name: String,
  email: String,
  orders: [ObjectId] // ref: 'Order'
}
Order {
  _id: ObjectId,
  userId: ObjectId, // ref: 'User'
  date: Date,
  items: [
    {
      productId: ObjectId, // ref: 'Product'
      quantity: Number,
      price: Number
    }
  ]
}
```
#### MongoDB Example:
```json
{
  "_id": "12345",
  "name": "Nguyễn Văn A",
  "email": "nguyenvana@example.com",
  "orders": [
    {
      "_id": "ORD001",
      "date": "2023-10-01",
      "items": [
        { "product_id": "PROD001", "product_name": "Laptop", "quantity": 1, "price": 1500 },
        { "product_id": "PROD002", "product_name": "Mouse", "quantity": 2, "price": 50 }
      ]
    },
    {
      "_id": "ORD002",
      "date": "2023-10-05",
      "items": [
        { "product_id": "PROD003", "product_name": "Keyboard", "quantity": 1, "price": 100 }
      ]
    }
  ]
}
```

Các bạn thấy không, thay vì chia nhỏ dữ liệu thành từng collection, chúng ta tận dụng lợi thế của MongoDB document để lưu trữ array và object bên trong User object. Bây giờ chỉ với một query đơn giản, chúng ta có thể kéo tất cả dữ liệu về ứng dụng của mình. Tiện lợi quá phải không nào?


## Nhúng vs Tham chiếu

Khi thiết kế schema cho MongoDB, chúng ta sẽ đứng giữa hai lựa chọn: **Nhúng** hay **Tham chiếu**. Nào, cùng tìm hiểu nhé!


### Embedded Document – Nhúng

Lưu tài liệu con bên trong tài liệu cha (trong cùng 1 document).

Khi nào nên dùng?
Tình huống
Ví dụ
Vì sao?
1. Quan hệ 1-1 hoặc 1-nhỏ (n < 20)
1 user có danh sách địa chỉ giao hàng
Dễ đọc cùng lúc
2. Dữ liệu luôn được dùng chung với nhau
Bình luận của 1 bài viết
Đọc bài viết là cần cả comment
3. Không cần tái sử dụng ở nơi khác
Setting của 1 user
Gắn chặt với user đó

Ví dụ
```json
// 1 bài viết có 2 bình luận – Embedded
{
  "_id": 1,
  "title": "Hello Mongo",
  "comments": [
    { "author": "A", "text": "Hay quá!" },
    { "author": "B", "text": "Thầy Đạt giảng đỉnh!" }
  ]
}
```

✅ Ưu điểm:
- Đọc nhanh hơn: chỉ 1 truy vấn (findOne)
- Đơn giản, dễ hiểu

⚠️ Hạn chế:
- Không thể chia sẻ/reuse dữ liệu con
- Nếu nhúng quá sâu, quá dài → outlier, performance kém

### Referenced Document – Tham chiếu

Dữ liệu được tách ra collection riêng và liên kết qua ID tham chiếu

✅ Khi nào nên dùng?
1. Quan hệ 1-nhiều lớn (n lớn)  
   *Ví dụ:* 1 user có 1000 orders  
   *Lý do:* Tách ra để tránh document quá lớn
   
2. Dữ liệu con dùng lại ở nhiều nơi  
   *Ví dụ:* 1 product được mua trong nhiều orders  
   *Lý do:* Reuse được
   
3. Cần query riêng phần con thường xuyên  
   *Ví dụ:* Lọc tất cả bình luận của 1 user  
   *Lý do:* Comment cần tách riêng để truy vấn chủ động

Ví dụ
```json
// post
{
  "_id": 1,
  "title": "Hello Mongo"
}

// comments
{ "_id": 101, "postId": 1, "author": "A", "text": "Hay quá!" }
{ "_id": 102, "postId": 1, "author": "B", "text": "Đỉnh!" }
```

✅ Ưu điểm:
- Dễ tái sử dụng
- Tách riêng, tránh document quá nặng
- Dễ mở rộng

⚠️ Hạn chế:
- Cần $lookup để JOIN
- Truy vấn chậm hơn (nhiều query)


## Bảng so sánh Embedded vs Referenced

| Tiêu chí | Embedded | Referenced |
|----------|----------|------------|
| Tốc độ đọc | 🚀 Nhanh (1 document) | 🐢 Chậm hơn (JOIN hoặc nhiều truy vấn) |
| Tái sử dụng dữ liệu | ❌ Không | ✅ Có thể |
| Cập nhật riêng dữ liệu con | ❌ Khó | ✅ Dễ |
| Dữ liệu thay đổi thường xuyên | ❌ Không nên nhúng | ✅ Nên dùng reference |
| Gắn chặt với cha | ✅ Rất hợp | ❌ Không cần thiết |
| Số lượng phần tử con | Ít (1–20) | Nhiều (hàng trăm, hàng ngàn) |

### Cách nhớ nhanh

| Câu hỏi | Nếu trả lời là… | Dùng… |
|---------|-----------------|-------|
| Có cần đọc cùng lúc không? | Có | 🟩 Embedded |
| Dữ liệu con có dùng ở nhiều nơi không? | Có | 🟦 Reference |
| Số lượng con có lớn không? | Lớn | 🟦 Reference |
| Dữ liệu có gắn chặt với cha không? | Có | 🟩 Embedded |


### Tóm lại: Nhúng hay Tham chiếu?

- **Nhúng**: Khi dữ liệu nhỏ, thường xuyên được truy cập cùng nhau, và không cần truy cập độc lập.
- **Tham chiếu**: Khi dữ liệu lớn, cần truy cập độc lập, hoặc được chia sẻ giữa nhiều document.

✅ Nguyên tắc vàng

“Embed for performance, Reference for flexibility.”

(Nhúng để tối ưu tốc độ, tham chiếu để linh hoạt mở rộng)

## Các loại quan hệ

### Quan hệ 1-1 (One-to-One)

- Mô tả: Một đối tượng liên kết với duy nhất một đối tượng khác.
- Cách lưu: Có thể nhúng trực tiếp nếu dữ liệu không quá lớn hoặc thường truy cập cùng nhau.
```json
{
  "_id": "ObjectId('AAA')",
  "name": "Nguyễn Văn A",
  "payment_info": {
    "card_number": "1234-5678-9012-3456",
    "card_type": "Visa",
    "expiry_date": "12/2025"
  }
}
```

### Quan hệ 1 - nhiều (One-to-Many)
- Mô tả: Một đối tượng liên kết với nhiều đối tượng khác.
- Cách lưu:
	- Nếu ít phần tử (few) → nhúng (embed)
	- Nếu nhiều hoặc cần tái sử dụng → dùng reference

```json
// Một book có nhiều category → dùng reference (dễ tìm sách theo thể loại)
{
  _id,
  title,
  categoryIds: [ObjectId] // ref: 'Category'
}
```
🛑 Không nên làm ngược lại:
Không nên lưu như sau, vì mảng lớn sẽ phình to và khó cập nhật:
```json
// Sai về mặt thiết kế nếu book quá nhiều
{
  _id,
  name: 'Fiction',
  books: [ObjectId, ObjectId, ...] // ❌ Tránh!
}
```
### Quan hệ Nhiều - Nhiều (Many-to-Many)
- Ví dụ: User có thể thích nhiều phim; mỗi phim được nhiều user thích.
- Dùng mảng ObjectId ở cả hai bên (nếu chỉ cần liên kết đơn giản):

```json
// 👤 User
{
  _id,
  name,
  favoriteMovieIds: [ObjectId] // ref: 'Movie'
}

// 🎬 Movie
{
  _id,
  title,
  likedByUserIds: [ObjectId] // ref: 'User'
}
```

Nếu có thắc mắc, đừng ngại hỏi thầy hoặc các bạn nhé!  
Chúc các em học tốt! 🚀
— **Thầy Đạt 🧡**