# Bài 11: Hiểu Về Populate Trong MongoDB

## Khái Niệm

`populate` là một tính năng của Mongoose giúp bạn tự động thay thế các đường dẫn được chỉ định trong document bằng các document từ collection khác. Điều này rất hữu ích khi làm việc với các mối quan hệ giữa các collection.


## Tại Sao Cần Populate?

Khi sử dụng tham chiếu giữa các collection, bạn thường cần truy xuất dữ liệu từ nhiều collection để hiển thị thông tin đầy đủ. `populate` giúp bạn làm điều này một cách dễ dàng mà không cần viết nhiều truy vấn phức tạp.


## Ví Dụ Trực Quan

### 1. Thiết Kế Schema

Giả sử bạn có hai collection: **Person** và **Story**.

#### Collection Person:
```json
{
  "_id": "ObjectId('PERSON001')",
  "name": "Ian Fleming",
  "age": 50,
  "stories": ["ObjectId('STORY001')"]
}
```

#### Collection Story:
```json
{
  "_id": "ObjectId('STORY001')",
  "title": "Casino Royale",
  "author": "ObjectId('PERSON001')",
  "fans": ["ObjectId('PERSON002'), ObjectId('PERSON003')"]
}
```


### 2. Định Nghĩa Schema Trong Mongoose

```javascript
// filepath: /path/to/models/Person.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const personSchema = new Schema({
  name: String,
  age: Number,
  stories: [{ type: Schema.Types.ObjectId, ref: 'Story' }]
});

module.exports = mongoose.model('Person', personSchema);

// filepath: /path/to/models/Story.js
const storySchema = new Schema({
  title: String,
  author: { type: Schema.Types.ObjectId, ref: 'Person' },
  fans: [{ type: Schema.Types.ObjectId, ref: 'Person' }]
});

module.exports = mongoose.model('Story', storySchema);
```


### 3. Sử Dụng Populate

#### Truy xuất thông tin tác giả của một câu chuyện:
```javascript
const Story = require('./models/Story');

async function getStoryWithAuthor(storyId) {
  const story = await Story.findById(storyId).populate('author');
  console.log(`The author is ${story.author.name}`);
}

getStoryWithAuthor('STORY001');
```

#### Truy xuất danh sách người hâm mộ của một câu chuyện:
```javascript
async function getStoryWithFans(storyId) {
  const story = await Story.findById(storyId).populate('fans');
  story.fans.forEach(fan => console.log(`Fan: ${fan.name}`));
}

getStoryWithFans('STORY001');
```


### 4. Kết Quả

Khi sử dụng `populate`, kết quả sẽ tự động bao gồm thông tin từ collection liên quan:

```json
{
  "_id": "ObjectId('STORY001')",
  "title": "Casino Royale",
  "author": {
    "_id": "ObjectId('PERSON001')",
    "name": "Ian Fleming",
    "age": 50
  },
  "fans": [
    { "_id": "ObjectId('PERSON002')", "name": "Sean" },
    { "_id": "ObjectId('PERSON003')", "name": "George" }
  ]
}
```


## Các Tính Năng Nâng Cao

### Chọn Trường
Bạn có thể chỉ định các trường cần truy xuất từ collection liên quan:
```javascript
const story = await Story.findById('STORY001').populate('author', 'name age');
console.log(`Author: ${story.author.name}, Age: ${story.author.age}`);
```

### Populate Nhiều Đường Dẫn
Bạn có thể populate nhiều đường dẫn cùng lúc:
```javascript
const story = await Story.findById('STORY001')
  .populate('author')
  .populate('fans');
```

### Điều Kiện Truy Vấn
Bạn có thể thêm điều kiện truy vấn khi populate:
```javascript
const story = await Story.findById('STORY001').populate({
  path: 'fans',
  match: { age: { $gte: 21 } },
  select: 'name -_id'
});
```


## Lưu Ý

- **Hiệu suất**: `populate` có thể làm chậm truy vấn nếu dữ liệu liên quan quá lớn. Hãy sử dụng nó một cách hợp lý.
- **Không Có Document Liên Quan**: Nếu không có document liên quan, giá trị sẽ là `null` hoặc `[]`.


## Tóm Lại

`populate` là một công cụ mạnh mẽ giúp bạn làm việc với dữ liệu liên quan trong MongoDB một cách dễ dàng. Hãy sử dụng nó khi bạn cần truy xuất thông tin từ nhiều collection mà không muốn viết nhiều truy vấn phức tạp.

Chúc các bạn học tốt và áp dụng thành công nhé!


# Bài Tập: Sử Dụng Populate Trong Dự Án Bán Hàng

## Mô Tả Bài Tập

Bạn sẽ thiết kế một hệ thống quản lý đơn hàng cho một website bán hàng. Hệ thống bao gồm các bảng:
- **User**: Lưu thông tin khách hàng.
- **Product**: Lưu thông tin sản phẩm.
- **Order**: Lưu thông tin đơn hàng, bao gồm khách hàng và danh sách sản phẩm.


## Yêu Cầu

1. Tạo schema cho **User**, **Product**, và **Order**.
2. Sử dụng `populate` để truy xuất thông tin khách hàng và danh sách sản phẩm trong đơn hàng.
3. Viết code để thêm dữ liệu mẫu và truy xuất thông tin đơn hàng.


## Hướng Dẫn

### 1. Định Nghĩa Schema

```javascript
// filepath: /path/to/models/User.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  email: String,
});

module.exports = mongoose.model('User', userSchema);

// filepath: /path/to/models/Product.js
const productSchema = new Schema({
  name: String,
  price: Number,
});

module.exports = mongoose.model('Product', productSchema);

// filepath: /path/to/models/Order.js
const orderSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  products: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
  total: Number,
});

module.exports = mongoose.model('Order', orderSchema);
```


### 2. Thêm Dữ Liệu Mẫu

```javascript
// filepath: /path/to/scripts/addSampleData.js
const mongoose = require('mongoose');
const User = require('./models/User');
const Product = require('./models/Product');
const Order = require('./models/Order');

async function addSampleData() {
  await mongoose.connect('mongodb://localhost:27017/populateExample');

  const user = await User.create({ name: 'Nguyễn Văn A', email: 'nguyenvana@example.com' });
  const product1 = await Product.create({ name: 'Laptop', price: 1500 });
  const product2 = await Product.create({ name: 'Mouse', price: 50 });

  const order = await Order.create({
    user: user._id,
    products: [product1._id, product2._id],
    total: 1550,
  });

  console.log('Sample data added successfully!');
  await mongoose.disconnect();
}

addSampleData();
```


### 3. Truy Xuất Thông Tin Đơn Hàng

```javascript
// filepath: /path/to/scripts/getOrderDetails.js
const mongoose = require('mongoose');
const Order = require('./models/Order');

async function getOrderDetails(orderId) {
  await mongoose.connect('mongodb://localhost:27017/populateExample');

  const order = await Order.findById(orderId)
    .populate('user', 'name email')
    .populate('products', 'name price');

  console.log('Order Details:');
  console.log(`Customer: ${order.user.name} (${order.user.email})`);
  console.log('Products:');
  order.products.forEach(product => {
    console.log(`- ${product.name}: $${product.price}`);
  });
  console.log(`Total: $${order.total}`);

  await mongoose.disconnect();
}

getOrderDetails('ORDER_ID'); // Replace 'ORDER_ID' with the actual order ID
```


## Kết Quả Mong Đợi

Khi chạy script truy xuất thông tin đơn hàng, bạn sẽ nhận được kết quả như sau:

```
Order Details:
Customer: Nguyễn Văn A (nguyenvana@example.com)
Products:
- Laptop: $1500
- Mouse: $50
Total: $1550
```


## Bài Tập Thêm

1. Thêm tính năng lọc đơn hàng theo khách hàng.
2. Sử dụng `populate` để chỉ truy xuất các trường cần thiết từ **User** và **Product**.
3. Viết code để cập nhật danh sách sản phẩm trong một đơn hàng.

Chúc bạn học tốt và áp dụng thành công!

Nếu có thắc mắc, đừng ngại hỏi thầy hoặc các bạn nhé!  
Chúc các em học tốt! 🚀
— **Thầy Đạt 🧡**