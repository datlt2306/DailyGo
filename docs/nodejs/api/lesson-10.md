# Thiết Kế Schema MongoDB: Cách Tổ Chức Cơ Sở Dữ Liệu

Chào các bạn sinh viên thân yêu! Hôm nay chúng ta sẽ cùng nhau khám phá một chủ đề cực kỳ thú vị: **Làm thế nào để thiết kế schema cơ sở dữ liệu trong MongoDB?**

Đây là câu hỏi đầu tiên mà bất kỳ ai cũng phải đối mặt khi bắt đầu một dự án với MongoDB. Và câu trả lời là: **Tùy vào từng trường hợp!**

Có rất nhiều yếu tố ảnh hưởng đến cách bạn thiết kế schema, ví dụ như:
- Ứng dụng của bạn đọc dữ liệu nhiều hay ghi dữ liệu nhiều?
- Những dữ liệu nào thường được truy cập cùng nhau?
- Yêu cầu về hiệu suất của bạn như thế nào?
- Dữ liệu của bạn sẽ tăng trưởng và mở rộng ra sao?

Trong bài học này, chúng ta sẽ cùng nhau tìm hiểu cách mô hình hóa cơ sở dữ liệu MongoDB thông qua các ví dụ thực tế. Các bạn sẽ học được các phương pháp phổ biến để thiết kế schema cho ứng dụng của mình.

---

## Cách tiếp cận thiết kế cơ sở dữ liệu - Relational vs MongoDB

Nhiều bạn đã học môn "Thiết kế cơ sở dữ liệu" ở trường đại học, thường bê nguyên kiểu thiết kế dành cho SQL database sang MongoDB. Nhưng các bạn ơi, làm vậy là không đúng đâu nhé!

MongoDB là một NoSQL database, và mặc dù nó có một số điểm tương đồng với SQL, nhưng nếu bạn áp dụng y nguyên cách thiết kế của SQL thì sẽ không tận dụng được những điểm mạnh của MongoDB.

Để dễ dàng tìm ra cách thiết kế đúng trong MongoDB, chúng ta hãy cùng so sánh giữa SQL và MongoDB nhé!

---

### Thiết kế cơ sở dữ liệu quan hệ

Trong cơ sở dữ liệu quan hệ, dữ liệu thường được chia thành các bảng để tránh trùng lặp. Ví dụ, chúng ta có 3 bảng: `Users`, `Orders`, và `Products`.

#### SQL Example:
- Bảng `Users` chứa thông tin người dùng.
- Bảng `Orders` và `Products` tham chiếu đến `Users` thông qua khóa ngoại (`user_id`).

---

### Thiết kế cơ sở dữ liệu MongoDB

MongoDB thì khác nhé các bạn! Thay vì chia nhỏ dữ liệu thành nhiều collection, chúng ta có thể nhúng các mảng và đối tượng trực tiếp vào một document.

#### MongoDB Example:
```json
{
  "user_id": "12345",
  "name": "Nguyễn Văn A",
  "email": "nguyenvana@example.com",
  "orders": [
    {
      "order_id": "ORD001",
      "date": "2023-10-01",
      "items": [
        { "product_id": "PROD001", "product_name": "Laptop", "quantity": 1, "price": 1500 },
        { "product_id": "PROD002", "product_name": "Mouse", "quantity": 2, "price": 50 }
      ]
    },
    {
      "order_id": "ORD002",
      "date": "2023-10-05",
      "items": [
        { "product_id": "PROD003", "product_name": "Keyboard", "quantity": 1, "price": 100 }
      ]
    }
  ]
}
```

Các bạn thấy không, thay vì chia nhỏ dữ liệu thành từng collection, chúng ta tận dụng lợi thế của MongoDB document để lưu trữ array và object bên trong User object. Bây giờ chỉ với một query đơn giản, chúng ta có thể kéo tất cả dữ liệu về ứng dụng của mình. Tiện lợi quá phải không nào?

---

## Nhúng vs Tham chiếu

Khi thiết kế schema cho MongoDB, chúng ta sẽ đứng giữa hai lựa chọn: **Nhúng** hay **Tham chiếu**. Nào, cùng tìm hiểu nhé!

---

### Nhúng

Nhúng có nghĩa là đưa hết dữ liệu vào trong một document.

#### Ưu điểm:
- Bạn có thể truy xuất tất cả thông tin liên quan trong một query.
- Tránh việc join hoặc lookup trong ứng dụng.
- Update các thông tin liên quan trong một query duy nhất.

#### Hạn chế:
- Khi document lớn lên sẽ gây gánh nặng cho những trường không liên quan.
- Giới hạn cho document là 16 MB trong MongoDB.

---

### Tham chiếu

Tham chiếu là lưu trữ dữ liệu trong các collection riêng biệt và liên kết chúng thông qua khóa ngoại hoặc `$lookup`.

#### Ưu điểm:
- Document nhỏ hơn, gọn gàng hơn.
- Ít khả năng đạt giới hạn 16 MB cho mỗi document.
- Những dữ liệu không cần thiết sẽ không bị đính kèm vào các truy vấn.

#### Hạn chế:
- Để truy xuất được hết dữ liệu, chúng ta cần tối thiểu là 2 query hoặc dùng `$lookup`.

---

### Khi nào nên sử dụng nhúng?

Nhúng thường được ưu tiên khi:
- Dữ liệu liên quan thường được truy cập cùng nhau.
- Kích thước của document không quá lớn (dưới giới hạn 16 MB).
- Dữ liệu không cần truy cập độc lập hoặc không cần chia sẻ giữa các document.

Ví dụ: Một danh mục với một vài sản phẩm nổi bật.

```json
{
  "_id": "ObjectId('CAT001')",
  "name": "Điện tử",
  "featured_products": [
    { "product_id": "PROD001", "name": "Laptop", "price": 1500 },
    { "product_id": "PROD002", "name": "Smartphone", "price": 800 }
  ]
}
```

---

### Khi nào nên sử dụng tham chiếu?

Tham chiếu nên được sử dụng khi:
- Dữ liệu cần truy cập độc lập hoặc được chia sẻ giữa nhiều document.
- Kích thước của dữ liệu liên quan quá lớn để nhúng vào một document.
- Bạn muốn giảm trùng lặp dữ liệu trong cơ sở dữ liệu.
- Dữ liệu liên quan không thường xuyên được truy cập cùng nhau.

Ví dụ: Một danh mục với nhiều sản phẩm.

#### Collection Categories:
```json
{
  "_id": "ObjectID('CAT001')",
  "name": "Điện tử",
  "products": ["ObjectID('PROD001')", "ObjectID('PROD002')"]
}
```
#### Collection Products:
```json
{
  "_id": "ObjectID('PROD001')",
  "name": "Laptop",
  "price": 1500,
  "category_id": "ObjectID('CAT001')"
}
```

💡 **Mẹo:** Sử dụng tham chiếu khi dữ liệu cần được truy cập riêng biệt hoặc khi dữ liệu có khả năng phát triển lớn.

---

### Tóm lại: Nhúng hay Tham chiếu?

- **Nhúng**: Khi dữ liệu nhỏ, thường xuyên được truy cập cùng nhau, và không cần truy cập độc lập.
- **Tham chiếu**: Khi dữ liệu lớn, cần truy cập độc lập, hoặc được chia sẻ giữa nhiều document.

Hãy cân nhắc cách ứng dụng của bạn sử dụng dữ liệu để chọn phương pháp phù hợp nhé!

---

## Các loại quan hệ

### Quan hệ 1-1 (One-to-One)

Ví dụ: Một người dùng với một tài khoản thanh toán.
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

---

### Quan hệ 1 - ít (One-to-Few)

Ví dụ: Một người dùng với một vài địa chỉ giao hàng.
```json
{
  "_id": "ObjectId('AAA')",
  "name": "Nguyễn Văn A",
  "addresses": [
    { "street": "123 Đường A", "city": "Hà Nội", "country": "Việt Nam" },
    { "street": "456 Đường B", "city": "TP. Hồ Chí Minh", "country": "Việt Nam" }
  ]
}
```

💡 **Mẹo:** Nhúng dữ liệu cho quan hệ 1 - ít.

---

### Quan hệ 1 - nhiều (One-to-Many)

Ví dụ: Một sản phẩm với nhiều đánh giá.
#### Collection Products:
```json
{
  "_id": "ObjectID('PROD001')",
  "name": "Laptop",
  "manufacturer": "Công ty XYZ",
  "reviews": ["ObjectID('REV001')", "ObjectID('REV002')"]
}
```
#### Collection Reviews:
```json
{
  "_id": "ObjectID('REV001')",
  "user_id": "12345",
  "rating": 5,
  "comment": "Sản phẩm rất tốt!"
}
```

💡 **Mẹo:** Sử dụng tham chiếu cho quan hệ 1 - nhiều.

---

### Quan hệ 1 - rất nhiều (One-to-Very-Many)

Ví dụ: Một cửa hàng với hàng triệu giao dịch.
#### Collection Stores:
```json
{
  "_id": ObjectID("STORE001"),
  "name": "Cửa hàng ABC",
  "location": "Hà Nội"
}
```
#### Collection Transactions:
```json
{
  "transaction_id": "TRANS001",
  "timestamp": ISODate("2023-10-01T10:00:00Z"),
  "amount": 1500,
  "store_id": ObjectID("STORE001")
}
```

💡 **Mẹo:** Tránh nhúng mảng với số lượng lớn.

---

### Quan hệ Nhiều - Nhiều (Many-to-Many)

Ví dụ: Người dùng và sản phẩm yêu thích.
#### Collection Users:
```json
{
  "_id": ObjectID("USER001"),
  "name": "Nguyễn Văn A",
  "favorites": [ObjectID("PROD001"), ObjectID("PROD002")]
}
```
#### Collection Products:
```json
{
  "_id": ObjectID("PROD001"),
  "name": "Laptop",
  "liked_by": [ObjectID("USER001"), ObjectID("USER002")]
}
```

---

## Ví dụ: Các Bước Phân Tích Khi Nhận Yêu Cầu Thiết Kế Website Bán Hàng

Khi nhận yêu cầu thiết kế một website bán hàng, bạn cần thực hiện các bước phân tích sau để đảm bảo thiết kế schema phù hợp với ứng dụng.

---

## 1. Hiểu rõ yêu cầu của dự án

Hãy bắt đầu bằng việc thu thập thông tin từ khách hàng hoặc đội ngũ phát triển:
- **Chức năng chính**: Website cần làm gì? (Ví dụ: quản lý sản phẩm, đơn hàng, người dùng).
- **Quy mô dữ liệu**: Có bao nhiêu sản phẩm, người dùng, đơn hàng dự kiến?
- **Hiệu suất**: Website cần xử lý bao nhiêu lượt truy cập mỗi ngày?
- **Tương tác dữ liệu**: Dữ liệu nào thường được truy cập cùng nhau?

---

## 2. Xác định các thực thể chính

Dựa trên yêu cầu, xác định các thực thể chính trong hệ thống:
- **Người dùng**: Lưu thông tin khách hàng.
- **Sản phẩm**: Lưu thông tin sản phẩm.
- **Đơn hàng**: Lưu thông tin các giao dịch mua bán.

---

## 3. Phân tích mối quan hệ giữa các thực thể

Xác định cách các thực thể liên kết với nhau:
- **Người dùng - Đơn hàng**: Một người dùng có thể có nhiều đơn hàng (quan hệ 1 - nhiều).
- **Đơn hàng - Sản phẩm**: Một đơn hàng có thể chứa nhiều sản phẩm (quan hệ nhiều - nhiều).

---

## 4. Quyết định nhúng hay tham chiếu

Dựa trên cách dữ liệu được sử dụng, quyết định nhúng hay tham chiếu:
- **Nhúng**: Khi dữ liệu thường xuyên được truy cập cùng nhau (ví dụ: danh sách sản phẩm trong đơn hàng).
- **Tham chiếu**: Khi dữ liệu lớn hoặc được chia sẻ giữa nhiều thực thể (ví dụ: sản phẩm).

---

## 5. Thiết kế schema

Dựa trên phân tích, thiết kế schema cho từng thực thể:
- **Collection Users**: Lưu thông tin người dùng và danh sách đơn hàng.
- **Collection Products**: Lưu thông tin sản phẩm.
- **Collection Orders**: Lưu thông tin chi tiết đơn hàng.

---

## 6. Kiểm tra và tối ưu hóa

Sau khi thiết kế schema, kiểm tra xem:
- **Query**: Các truy vấn có hiệu quả không?
- **Hiệu suất**: Schema có đáp ứng được yêu cầu về hiệu suất không?
- **Mở rộng**: Schema có thể mở rộng khi dữ liệu tăng trưởng không?

---

## 7. Triển khai và theo dõi

Sau khi triển khai, theo dõi hệ thống để:
- Đảm bảo schema hoạt động như mong đợi.
- Điều chỉnh schema nếu có vấn đề phát sinh.

---

💡 **Mẹo:** Luôn đặt câu hỏi "Dữ liệu nào thường được truy cập cùng nhau?" để quyết định nhúng hay tham chiếu. Điều này giúp tối ưu hóa hiệu suất của ứng dụng.

---

## Tóm lại

💡 **Mẹo:** Với MongoDB, cách bạn mô hình hóa dữ liệu phụ thuộc vào cách bạn sử dụng dữ liệu. Bạn muốn cấu trúc dữ liệu của bạn phù hợp với cách mà ứng dụng của bạn query và update nó.

Hãy nhớ rằng mỗi ứng dụng có một yêu cầu riêng, vậy nên thiết kế của schema sẽ phản ánh nhu cầu cụ thể ứng dụng đó.

Chúc các bạn học tốt và áp dụng thành công nhé!
