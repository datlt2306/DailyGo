# Buổi 11: Fetch API, Promise & Async/Await

**Loại buổi**: Lý thuyết  
**Thời lượng**: 120 phút  
**Dự án**: To-Do App (đã có LocalStorage từ buổi 10)

---

## 🎯 Mục tiêu học tập

Sau buổi học này, bạn sẽ có thể:

- ✅ Hiểu HTTP và cách web hoạt động
- ✅ Sử dụng Fetch API để gọi API
- ✅ Hiểu Promise và cách xử lý bất đồng bộ
- ✅ Sử dụng async/await để viết code dễ đọc hơn
- ✅ Xử lý lỗi khi gọi API
- ✅ Áp dụng vào việc lấy dữ liệu từ server

---

## 🧠 Nội dung chính

### 1. HTTP là gì?

**HTTP (HyperText Transfer Protocol)** là giao thức truyền tải dữ liệu giữa client và server.

**Các phương thức HTTP:**
- **GET**: Lấy dữ liệu
- **POST**: Tạo dữ liệu mới
- **PUT**: Cập nhật toàn bộ dữ liệu
- **PATCH**: Cập nhật một phần dữ liệu
- **DELETE**: Xóa dữ liệu

**Ví dụ:**
- `GET /api/cong-viec` - Lấy danh sách công việc
- `POST /api/cong-viec` - Tạo công việc mới
- `PUT /api/cong-viec/1` - Cập nhật công việc ID 1
- `DELETE /api/cong-viec/1` - Xóa công việc ID 1

### 2. Fetch API

**Fetch API** là cách hiện đại để gửi HTTP request trong JavaScript.

#### 2.1. GET Request - Lấy dữ liệu

```javascript
// GET request đơn giản
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Lỗi:', error);
    });
```

**Ví dụ thực tế:**
```javascript
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(post => {
        console.log('Post:', post);
    });
```

#### 2.2. POST Request - Tạo dữ liệu mới

```javascript
fetch('https://api.example.com/data', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        ten: 'Công việc mới',
        moTa: 'Mô tả công việc'
    })
})
    .then(response => response.json())
    .then(data => {
        console.log('Đã tạo:', data);
    })
    .catch(error => {
        console.error('Lỗi:', error);
    });
```

#### 2.3. PUT Request - Cập nhật

```javascript
fetch('https://api.example.com/data/1', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        ten: 'Công việc đã cập nhật',
        moTa: 'Mô tả mới'
    })
})
    .then(response => response.json())
    .then(data => {
        console.log('Đã cập nhật:', data);
    });
```

#### 2.4. DELETE Request - Xóa

```javascript
fetch('https://api.example.com/data/1', {
    method: 'DELETE'
})
    .then(response => {
        if (response.ok) {
            console.log('Đã xóa thành công');
        }
    })
    .catch(error => {
        console.error('Lỗi:', error);
    });
```

#### 2.5. Kiểm tra Response

```javascript
fetch('https://api.example.com/data')
    .then(response => {
        // Kiểm tra status code
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Lỗi:', error);
    });
```

### 3. Promise

**Promise** là đối tượng đại diện cho một tác vụ bất đồng bộ sẽ hoàn thành trong tương lai.

#### 3.1. Promise States

- **Pending**: Đang chờ
- **Fulfilled**: Hoàn thành thành công
- **Rejected**: Thất bại

#### 3.2. Tạo Promise

```javascript
const myPromise = new Promise((resolve, reject) => {
    // Tác vụ bất đồng bộ
    setTimeout(() => {
        const success = true;
        if (success) {
            resolve('Thành công!');
        } else {
            reject('Thất bại!');
        }
    }, 1000);
});

myPromise
    .then(result => {
        console.log(result);  // "Thành công!"
    })
    .catch(error => {
        console.error(error);  // "Thất bại!"
    });
```

#### 3.3. Promise Chain

```javascript
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => {
        console.log('Bước 1:', data);
        return data.id;  // Trả về giá trị cho then tiếp theo
    })
    .then(id => {
        console.log('Bước 2:', id);
        return fetch(`https://api.example.com/data/${id}`);
    })
    .then(response => response.json())
    .then(detail => {
        console.log('Bước 3:', detail);
    })
    .catch(error => {
        console.error('Lỗi ở bất kỳ bước nào:', error);
    });
```

#### 3.4. Promise.all() - Chạy song song

```javascript
// Chạy nhiều Promise cùng lúc
Promise.all([
    fetch('https://api.example.com/data/1').then(r => r.json()),
    fetch('https://api.example.com/data/2').then(r => r.json()),
    fetch('https://api.example.com/data/3').then(r => r.json())
])
    .then(results => {
        console.log('Tất cả đã hoàn thành:', results);
    })
    .catch(error => {
        console.error('Có lỗi xảy ra:', error);
    });
```

### 4. Async/Await

**Async/Await** là cách viết Promise dễ đọc hơn, giống code đồng bộ.

#### 4.1. Cú pháp cơ bản

```javascript
// Hàm async tự động trả về Promise
async function layDuLieu() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Lỗi:', error);
        throw error;
    }
}

// Sử dụng
layDuLieu()
    .then(data => {
        console.log(data);
    });
```

#### 4.2. So sánh Promise vs Async/Await

**Promise (then/catch):**
```javascript
function layDuLieu() {
    fetch('https://api.example.com/data')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            return fetch(`https://api.example.com/data/${data.id}`);
        })
        .then(response => response.json())
        .then(detail => {
            console.log(detail);
        })
        .catch(error => {
            console.error(error);
        });
}
```

**Async/Await (dễ đọc hơn):**
```javascript
async function layDuLieu() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
        
        const detailResponse = await fetch(`https://api.example.com/data/${data.id}`);
        const detail = await detailResponse.json();
        console.log(detail);
    } catch (error) {
        console.error(error);
    }
}
```

#### 4.3. Arrow Function với async

```javascript
const layDuLieu = async () => {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
};
```

#### 4.4. Xử lý lỗi với try/catch

```javascript
async function layDuLieu() {
    try {
        const response = await fetch('https://api.example.com/data');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Lỗi khi lấy dữ liệu:', error);
        // Xử lý lỗi (hiển thị thông báo, retry, v.v.)
        throw error;
    }
}
```

### 5. Xử lý lỗi trong Fetch

#### 5.1. Kiểm tra Response Status

```javascript
async function layDuLieu() {
    try {
        const response = await fetch('https://api.example.com/data');
        
        // Kiểm tra status code
        if (response.status === 404) {
            throw new Error('Không tìm thấy dữ liệu');
        }
        
        if (response.status === 500) {
            throw new Error('Lỗi server');
        }
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Lỗi:', error);
        throw error;
    }
}
```

#### 5.2. Timeout

```javascript
function fetchWithTimeout(url, options = {}, timeout = 5000) {
    return Promise.race([
        fetch(url, options),
        new Promise((_, reject) =>
            setTimeout(() => reject(new Error('Timeout')), timeout)
        )
    ]);
}

// Sử dụng
fetchWithTimeout('https://api.example.com/data', {}, 3000)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

### 6. Ví dụ thực tế: CRUD với API

```javascript
const API_BASE = 'https://api.example.com/cong-viec';

// GET - Lấy danh sách
async function layDanhSachCongViec() {
    try {
        const response = await fetch(API_BASE);
        if (!response.ok) throw new Error('Lỗi khi lấy dữ liệu');
        return await response.json();
    } catch (error) {
        console.error('Lỗi:', error);
        throw error;
    }
}

// POST - Tạo mới
async function taoCongViec(congViec) {
    try {
        const response = await fetch(API_BASE, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(congViec)
        });
        if (!response.ok) throw new Error('Lỗi khi tạo');
        return await response.json();
    } catch (error) {
        console.error('Lỗi:', error);
        throw error;
    }
}

// PUT - Cập nhật
async function capNhatCongViec(id, congViec) {
    try {
        const response = await fetch(`${API_BASE}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(congViec)
        });
        if (!response.ok) throw new Error('Lỗi khi cập nhật');
        return await response.json();
    } catch (error) {
        console.error('Lỗi:', error);
        throw error;
    }
}

// DELETE - Xóa
async function xoaCongViec(id) {
    try {
        const response = await fetch(`${API_BASE}/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) throw new Error('Lỗi khi xóa');
        return true;
    } catch (error) {
        console.error('Lỗi:', error);
        throw error;
    }
}

// Sử dụng
async function khoiTao() {
    try {
        // Lấy danh sách
        const danhSach = await layDanhSachCongViec();
        console.log('Danh sách:', danhSach);
        
        // Tạo mới
        const congViecMoi = await taoCongViec({
            ten: 'Công việc mới',
            trangThai: 'chua lam'
        });
        console.log('Đã tạo:', congViecMoi);
        
        // Cập nhật
        await capNhatCongViec(congViecMoi.id, {
            ten: 'Công việc đã cập nhật',
            trangThai: 'hoan thanh'
        });
        
        // Xóa
        await xoaCongViec(congViecMoi.id);
    } catch (error) {
        console.error('Lỗi:', error);
    }
}
```

---

## 💻 Ví dụ minh họa

### Ví dụ 1: Lấy dữ liệu từ JSONPlaceholder

```javascript
async function layBaiViet() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const baiViet = await response.json();
        console.log('Tiêu đề:', baiViet.title);
        return baiViet;
    } catch (error) {
        console.error('Lỗi:', error);
    }
}

layBaiViet();
```

### Ví dụ 2: Loading state

```javascript
async function layDuLieuVoiLoading() {
    // Hiển thị loading
    document.querySelector('#loading').style.display = 'block';
    
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        
        // Ẩn loading, hiển thị dữ liệu
        document.querySelector('#loading').style.display = 'none';
        document.querySelector('#content').innerHTML = JSON.stringify(data);
    } catch (error) {
        // Ẩn loading, hiển thị lỗi
        document.querySelector('#loading').style.display = 'none';
        document.querySelector('#error').textContent = error.message;
    }
}
```

---

## 🧪 Quiz cuối buổi (7 câu)

### Câu 1: Fetch API trả về gì?
A. Promise  
B. JSON  
C. String  
D. Object

**Đáp án: A**

### Câu 2: Cách nào đúng để parse JSON từ response?
A. `response.json()`  
B. `JSON.parse(response)`  
C. `response.text()`  
D. Cả A và B

**Đáp án: A**

### Câu 3: `async function` luôn trả về gì?
A. Object  
B. Promise  
C. undefined  
D. Tùy return

**Đáp án: B**

### Câu 4: `await` chỉ dùng trong?
A. Function thường  
B. async function  
C. Promise  
D. Tất cả

**Đáp án: B**

### Câu 5: Phương thức HTTP nào dùng để tạo dữ liệu mới?
A. GET  
B. POST  
C. PUT  
D. DELETE

**Đáp án: B**

### Câu 6: `Promise.all()` làm gì?
A. Chạy tuần tự  
B. Chạy song song  
C. Chạy ngẫu nhiên  
D. Không chạy

**Đáp án: B**

### Câu 7: Cách nào xử lý lỗi trong async/await?
A. `.catch()`  
B. `try/catch`  
C. Cả A và B  
D. Không có

**Đáp án: C**

---

## 📝 Bài tập về nhà (chuẩn bị cho buổi 12)

1. Setup JSON Server hoặc Mock API
2. Tạo các hàm: `layDanhSachCongViec()`, `taoCongViec()`, `capNhatCongViec()`, `xoaCongViec()`
3. Xử lý loading state khi gọi API
4. Xử lý lỗi và hiển thị thông báo cho người dùng
5. Thử tích hợp API vào To-Do App

---

## 🔗 Tài liệu tham khảo

- [MDN: Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [MDN: Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [JavaScript.info: Async/Await](https://javascript.info/async-await)

---

**Chúc bạn học tập tốt! 🚀**
