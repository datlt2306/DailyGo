# Hiểu Về API: Cầu Nối Giao Tiếp Giữa Các Phần Mềm

## API là gì?

API (Application Programming Interface) hay Giao diện lập trình ứng dụng là một tập hợp các quy tắc, giao thức và công cụ cho phép các phần mềm khác nhau giao tiếp với nhau. API hoạt động như một "cầu nối" giữa các ứng dụng, cho phép chúng trao đổi dữ liệu và chức năng.

![API Diagram](https://via.placeholder.com/800x400?text=API+Diagram)

## Tại sao API quan trọng?

- **Tái sử dụng mã**: Không cần xây dựng lại các chức năng đã có sẵn
- **Phân tách trách nhiệm**: Chia nhỏ hệ thống thành các thành phần độc lập
- **Mở rộng dễ dàng**: Thêm tính năng mới mà không ảnh hưởng đến code hiện có
- **Tích hợp phần mềm**: Kết nối các hệ thống khác nhau

## Các loại API phổ biến

### 1. REST API

REST (Representational State Transfer) là một kiến trúc phổ biến cho các API web. REST API sử dụng các phương thức HTTP (GET, POST, PUT, DELETE) để thực hiện các thao tác CRUD (Create, Read, Update, Delete) trên tài nguyên.

## Tại sao chúng ta cần API trong lập trình web?

Khi bạn vừa học xong JavaScript và Promise, bạn có thể tự hỏi: "Tại sao tôi cần học về API?"

Có một số lý do quan trọng:

1. **Tách biệt Frontend và Backend**: API cho phép phần giao diện người dùng (Frontend) hoạt động độc lập với phần xử lý dữ liệu (Backend).

2. **Lấy và gửi dữ liệu**: Khi bạn xây dựng một trang web, bạn cần lấy dữ liệu từ máy chủ (như thông tin người dùng, bài viết, sản phẩm) và gửi dữ liệu từ người dùng lên máy chủ.

3. **Làm việc với dữ liệu thực**: Thay vì sử dụng dữ liệu giả trong ứng dụng, bạn có thể kết nối với dữ liệu thực thông qua API.

4. **Chuẩn bị cho công việc thực tế**: Hầu hết các ứng dụng web hiện đại đều sử dụng API để giao tiếp giữa client và server.

Đối với người mới học, làm việc với API có thể hơi phức tạp. Nhưng đừng lo lắng! Chúng ta sẽ bắt đầu với những công cụ đơn giản.

## JSON Server: API giả lập đơn giản cho người mới bắt đầu

JSON Server là một công cụ tuyệt vời giúp bạn tạo nhanh một REST API giả lập dựa trên một file JSON. Điều này cho phép bạn tập trung vào việc học cách gọi API mà không cần xây dựng một backend thực sự.

### Cài đặt JSON Server

```bash
# Cài đặt global (để sử dụng từ bất kỳ thư mục nào)
npm install -g json-server

# HOẶC cài đặt local trong dự án của bạn
npm install json-server --save-dev
```

### Tạo file dữ liệu

Tạo một file có tên `db.json` với nội dung sau:

```json
{
  "users": [
    { "id": 1, "name": "Nguyễn Văn A", "email": "nguyenvana@example.com" },
    { "id": 2, "name": "Trần Thị B", "email": "tranthib@example.com" }
  ],
  "posts": [
    { "id": 1, "title": "Học JavaScript cơ bản", "author": 1 },
    { "id": 2, "title": "Tìm hiểu về Promise", "author": 1 },
    { "id": 3, "title": "Làm việc với API", "author": 2 }
  ],
  "comments": [
    { "id": 1, "body": "Bài viết rất hay!", "postId": 1 },
    { "id": 2, "body": "Cảm ơn tác giả", "postId": 1 },
    { "id": 3, "body": "Tôi đã hiểu rõ hơn về Promise", "postId": 2 }
  ]
}
```

### Khởi động JSON Server

```bash
# Nếu cài đặt global
json-server --watch db.json --port 3000

# Nếu cài đặt local
npx json-server --watch db.json --port 3000
```

Sau khi chạy lệnh này, bạn sẽ có một REST API đầy đủ tại địa chỉ `http://localhost:3000` với các endpoint sau:

- `GET /users` - Lấy danh sách người dùng
- `GET /users/1` - Lấy thông tin người dùng có id là 1
- `GET /posts` - Lấy danh sách bài viết
- `GET /posts/1` - Lấy thông tin bài viết có id là 1
- `GET /comments` - Lấy danh sách bình luận
- và nhiều endpoint khác...

### Các tính năng hữu ích của JSON Server

1. **Lọc dữ liệu**:
   ```
   GET /posts?title=Promise
   ```

2. **Sắp xếp**:
   ```
   GET /posts?_sort=title&_order=asc
   ```

3. **Phân trang**:
   ```
   GET /posts?_page=1&_limit=10
   ```

4. **Tìm kiếm toàn bộ**:
   ```
   GET /posts?q=JavaScript
   ```

5. **Quan hệ dữ liệu**:
   ```
   GET /posts/1?_embed=comments
   GET /users/1?_embed=posts
   ```

## Sử dụng Fetch API để gọi API

Fetch API là một cách hiện đại để thực hiện các yêu cầu HTTP trong JavaScript. Nó sử dụng Promise, vì vậy nó phù hợp hoàn hảo với kiến thức bạn vừa học về Promise.

### Cú pháp cơ bản của Fetch

```javascript
fetch(url)
  .then(response => {
    // Kiểm tra nếu request thành công
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Chuyển đổi response thành JSON
  })
  .then(data => {
    // Xử lý dữ liệu
    console.log(data);
  })
  .catch(error => {
    // Xử lý lỗi
    console.error('There has been a problem with your fetch operation:', error);
  });
```

### Ví dụ 1: Lấy danh sách người dùng (GET)

```javascript
fetch('http://localhost:3000/users')
  .then(response => response.json())
  .then(users => {
    console.log('Danh sách người dùng:', users);
    // Hiển thị danh sách người dùng lên giao diện
    const userList = document.getElementById('user-list');
    users.forEach(user => {
      const userItem = document.createElement('div');
      userItem.textContent = `${user.name} (${user.email})`;
      userList.appendChild(userItem);
    });
  })
  .catch(error => {
    console.error('Lỗi khi lấy danh sách người dùng:', error);
  });
```

### Ví dụ 2: Tạo người dùng mới (POST)

```javascript
const newUser = {
  name: "Lê Văn C",
  email: "levanc@example.com"
};

fetch('http://localhost:3000/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(newUser)
})
  .then(response => response.json())
  .then(data => {
    console.log('Người dùng mới đã được tạo:', data);
  })
  .catch(error => {
    console.error('Lỗi khi tạo người dùng mới:', error);
  });
```

### Ví dụ 3: Cập nhật thông tin người dùng (PUT)

```javascript
const updatedUser = {
  name: "Nguyễn Văn A (đã cập nhật)",
  email: "nguyenvana@example.com"
};

fetch('http://localhost:3000/users/1', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(updatedUser)
})
  .then(response => response.json())
  .then(data => {
    console.log('Thông tin người dùng đã được cập nhật:', data);
  })
  .catch(error => {
    console.error('Lỗi khi cập nhật thông tin người dùng:', error);
  });
```

### Ví dụ 4: Xóa người dùng (DELETE)

```javascript
fetch('http://localhost:3000/users/2', {
  method: 'DELETE'
})
  .then(response => {
    if (response.ok) {
      console.log('Người dùng đã được xóa thành công');
    } else {
      throw new Error('Không thể xóa người dùng');
    }
  })
  .catch(error => {
    console.error('Lỗi khi xóa người dùng:', error);
  });
```

## Ví dụ hoàn chỉnh: Ứng dụng quản lý người dùng đơn giản

Dưới đây là một ví dụ hoàn chỉnh về cách sử dụng fetch với JSON Server để tạo một ứng dụng quản lý người dùng đơn giản:

```html
<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Quản lý người dùng</title>
  <style>
    body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
    .user-form { margin-bottom: 20px; padding: 15px; border: 1px solid #ddd; border-radius: 5px; }
    .user-list { margin-top: 20px; }
    .user-item { padding: 10px; border-bottom: 1px solid #eee; display: flex; justify-content: space-between; }
    .user-item button { margin-left: 10px; }
    input, button { padding: 8px; margin: 5px 0; }
  </style>
</head>
<body>
  <h1>Quản lý người dùng</h1>
  
  <div class="user-form">
    <h2>Thêm/Cập nhật người dùng</h2>
    <input type="hidden" id="userId">
    <div>
      <label for="name">Tên:</label>
      <input type="text" id="name" required>
    </div>
    <div>
      <label for="email">Email:</label>
      <input type="email" id="email" required>
    </div>
    <button id="saveBtn">Lưu</button>
    <button id="cancelBtn" style="display:none;">Hủy</button>
  </div>
  
  <h2>Danh sách người dùng</h2>
  <div id="userList" class="user-list">
    <!-- Danh sách người dùng sẽ được thêm vào đây -->
  </div>

  <script>
    // URL của API
    const API_URL = 'http://localhost:3000/users';
    
    // Các phần tử DOM
    const userListEl = document.getElementById('userList');
    const userIdEl = document.getElementById('userId');
    const nameEl = document.getElementById('name');
    const emailEl = document.getElementById('email');
    const saveBtnEl = document.getElementById('saveBtn');
    const cancelBtnEl = document.getElementById('cancelBtn');
    
    // Lấy danh sách người dùng
    async function getUsers() {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Không thể lấy danh sách người dùng');
        return await response.json();
      } catch (error) {
        console.error('Lỗi:', error);
        return [];
      }
    }
    
    // Hiển thị danh sách người dùng
    async function displayUsers() {
      const users = await getUsers();
      userListEl.innerHTML = '';
      
      users.forEach(user => {
        const userEl = document.createElement('div');
        userEl.className = 'user-item';
        userEl.innerHTML = `
          <div>${user.name} (${user.email})</div>
          <div>
            <button class="edit-btn" data-id="${user.id}">Sửa</button>
            <button class="delete-btn" data-id="${user.id}">Xóa</button>
          </div>
        `;
        userListEl.appendChild(userEl);
      });
      
      // Thêm event listener cho các nút
      document.querySelectorAll('.edit-btn').forEach(btn => {
        btn.addEventListener('click', editUser);
      });
      
      document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', deleteUser);
      });
    }
    
    // Lưu người dùng (thêm mới hoặc cập nhật)
    async function saveUser() {
      const userId = userIdEl.value;
      const user = {
        name: nameEl.value,
        email: emailEl.value
      };
      
      try {
        let url = API_URL;
        let method = 'POST';
        
        if (userId) {
          url = `${API_URL}/${userId}`;
          method = 'PUT';
        }
        
        const response = await fetch(url, {
          method,
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(user)
        });
        
        if (!response.ok) throw new Error('Không thể lưu người dùng');
        
        resetForm();
        displayUsers();
      } catch (error) {
        console.error('Lỗi:', error);
      }
    }
    
    // Sửa thông tin người dùng
    async function editUser(event) {
      const userId = event.target.dataset.id;
      
      try {
        const response = await fetch(`${API_URL}/${userId}`);
        if (!response.ok) throw new Error('Không thể lấy thông tin người dùng');
        
        const user = await response.json();
        
        userIdEl.value = user.id;
        nameEl.value = user.name;
        emailEl.value = user.email;
        
        saveBtnEl.textContent = 'Cập nhật';
        cancelBtnEl.style.display = 'inline-block';
      } catch (error) {
        console.error('Lỗi:', error);
      }
    }
    
    // Xóa người dùng
    async function deleteUser(event) {
      if (!confirm('Bạn có chắc chắn muốn xóa người dùng này?')) return;
      
      const userId = event.target.dataset.id;
      
      try {
        const response = await fetch(`${API_URL}/${userId}`, {
          method: 'DELETE'
        });
        
        if (!response.ok) throw new Error('Không thể xóa người dùng');
        
        displayUsers();
      } catch (error) {
        console.error('Lỗi:', error);
      }
    }
    
    // Reset form
    function resetForm() {
      userIdEl.value = '';
      nameEl.value = '';
      emailEl.value = '';
      saveBtnEl.textContent = 'Lưu';
      cancelBtnEl.style.display = 'none';
    }
    
    // Event Listeners
    saveBtnEl.addEventListener('click', saveUser);
    cancelBtnEl.addEventListener('click', resetForm);
    
    // Hiển thị danh sách người dùng khi trang được tải
    displayUsers();
  </script>
</body>
</html>
```
## Kết luận

Hiểu biết về API và cách gọi API từ JavaScript là một kỹ năng quan trọng cho bất kỳ lập trình viên frontend nào. Bằng cách sử dụng JSON Server và Fetch API, bạn có thể dễ dàng thực hành những kỹ năng này mà không cần phải xây dựng một backend phức tạp.

Hãy nhớ rằng, kiến thức về Promise mà bạn đã học sẽ rất hữu ích khi làm việc với Fetch API, vì Fetch trả về Promise cho mỗi request. Điều này cho phép bạn xử lý các tác vụ bất đồng bộ một cách hiệu quả và dễ đọc.

Nếu có thắc mắc, đừng ngại hỏi thầy hoặc các bạn nhé!  
Chúc các em học tốt! 🚀
— **Thầy Đạt 🧡**