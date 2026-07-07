# Buổi 9: Lập trình Bất đồng bộ trong JavaScript
- **Dự án**: ZenTask (To-Do App) - Tìm hiểu nền tảng lập trình bất đồng bộ chuẩn bị kết nối dữ liệu máy chủ

---

## 🎯 Mục tiêu buổi học

> **Thầy mong muốn sau buổi học này, các em sẽ đạt được:**

> **Thầy mong muốn sau buổi học này, các em sẽ đạt được:**
Sau buổi học này, các em sẽ có thể:
1. ✅ Giải thích sự khác biệt giữa lập trình đồng bộ (Synchronous) và bất đồng bộ (Asynchronous) trong mô hình thực thi đơn luồng của JavaScript
2. ✅ Phân tích luồng hoạt động của **Event Loop**, **Call Stack**, và **Callback Queue**
3. ✅ Viết và gỡ lỗi mã nguồn bất đồng bộ sử dụng **Callbacks**, **Promises**, và cú pháp **Async/Await** hiện đại
4. ✅ So sánh sự khác nhau về cú pháp, ưu và nhược điểm giữa các cơ chế xử lý bất đồng bộ

## 🧠 Nội dung chính

### 1. Đồng bộ (Sync) vs Bất đồng bộ (Async)

#### 1.1. Lập trình đồng bộ (Synchronous)
Trong JavaScript mặc định, các câu lệnh chạy **tuần tự** từ trên xuống dưới. Câu lệnh phía sau phải chờ câu lệnh phía trước hoàn thành rồi mới được chạy:
```javascript
console.log("Bước 1");
console.log("Bước 2");
console.log("Bước 3");
// Kết quả hiển thị tuần tự: Bước 1 -> Bước 2 -> Bước 3
```
* **Hạn chế (Blocking)**: Nếu có một tác vụ tốn thời gian (như chờ dữ liệu từ mạng hoặc chạy phép toán nặng), trình duyệt sẽ bị đông cứng ("đơ") hoàn toàn. Người dùng không thể click hay cuộn trang.

#### 1.2. Lập trình bất đồng bộ (Asynchronous)
Bất đồng bộ cho phép các tác vụ tốn thời gian chạy ngầm (do Web APIs của trình duyệt xử lý). JavaScript sẽ tiếp tục chạy các câu lệnh tiếp theo ngay lập tức mà không cần chờ đợi:
```javascript
console.log("Bắt đầu");

// Tác vụ chạy ngầm chờ 2 giây
setTimeout(() => {
  console.log("Tác vụ chạy ngầm hoàn thành!");
}, 2000);

console.log("Kết thúc");
// Kết quả hiển thị: Bắt đầu -> Kết thúc -> (chờ 2s) -> Tác vụ chạy ngầm hoàn thành!
```

---

### 2. Mô hình Event Loop & Call Stack

JavaScript là ngôn ngữ **đơn luồng (single-threaded)**, nghĩa là tại một thời điểm nó chỉ làm được đúng một việc. Để xử lý bất đồng bộ, JS sử dụng mô hình **Event Loop**:

1. **Call Stack (Ngăn xếp gọi hàm)**: Nơi chứa các hàm đang được thực thi.
2. **Web APIs (Trình duyệt)**: Các tác vụ ngầm (như hẹn giờ `setTimeout`, sự kiện DOM, gọi mạng) được đẩy sang Web APIs xử lý độc lập bên ngoài luồng chính của JS.
3. **Callback Queue (Hàng đợi)**: Khi tác vụ Web API hoàn thành, hàm callback được đẩy vào hàng đợi này.
4. **Event Loop (Vòng lặp sự kiện)**: Liên tục giám sát Call Stack. Khi Call Stack hoàn toàn rỗng, Event Loop sẽ lấy hàm đầu tiên trong Callback Queue đưa lên Call Stack để thực thi.

---

### 3. Ba cơ chế xử lý bất đồng bộ trong JavaScript

#### 3.1. Callback (Cách tiếp cận cổ điển)
Truyền một hàm dưới dạng đối số vào một hàm khác để thực thi sau khi tác vụ ngầm hoàn tất.

* **Ví dụ**:
```javascript
function taiDuLieu(callback) {
  setTimeout(() => {
    const data = { id: 1, name: "Thầy Đạt" };
    callback(data);
  }, 1000);
}

taiDuLieu((result) => {
  console.log("Dữ liệu nhận về:", result);
});
```
* **Hạn chế (Callback Hell)**: Khi có nhiều tác vụ bất đồng bộ phụ thuộc lẫn nhau, code sẽ bị lồng nhau quá sâu tạo thành cấu trúc "hình tam giác" cực kỳ khó đọc và gỡ lỗi:
```javascript
// ❌ CALLBACK HELL
taiDuLieu((res1) => {
  tinhToan(res1, (res2) => {
    luuTru(res2, (res3) => {
      console.log("Hoàn tất!");
    });
  });
});
```

#### 3.2. Promise (ES6)
Đại diện cho một giá trị sẽ có trong tương lai (thành công hoặc thất bại). Một Promise có 3 trạng thái:
1. `Pending`: Đang chờ xử lý.
2. `Fulfilled` (Resolved): Thành công (kích hoạt khối lệnh `.then()`).
3. `Rejected`: Thất bại gặp lỗi (kích hoạt khối lệnh `.catch()`).

* **Ví dụ**:
```javascript
const taiDuLieuPromise = () => {
  return new Promise((resolve, reject) => {
    let thanhCong = true;
    setTimeout(() => {
      if (thanhCong) {
        resolve({ id: 1, name: "Thầy Đạt" });
      } else {
        reject("Lỗi hệ thống!");
      }
    }, 1000);
  });
};

// Sử dụng Promise Chaining để giải quyết Callback Hell
taiDuLieuPromise()
  .then(data => {
    console.log("Thành công:", data);
    return data.id;
  })
  .then(id => {
    console.log("ID nhận được:", id);
  })
  .catch(err => {
    console.error("Lỗi:", err);
  })
  .finally(() => {
    console.log("Luôn luôn chạy khối này!");
  });
```

#### 3.3. Async / Await (ES7 - Khuyên dùng)
Là cú pháp "bọc đường" (syntactic sugar) cho Promise giúp viết code bất đồng bộ trông giống hệt như code đồng bộ tuần tự, tăng độ sạch sẽ và dễ đọc của mã nguồn.

- Khai báo hàm với từ khóa `async`: Hàm này sẽ luôn tự động trả về một Promise.
- Sử dụng từ khóa `await` trước các Promise: Trình duyệt sẽ dừng đợi cho đến khi Promise hoàn thành rồi mới chạy tiếp dòng bên dưới.
- Dùng cấu trúc `try...catch` để bắt và xử lý lỗi.

* **Ví dụ**:
```javascript
async function xuLyApp() {
  try {
    console.log("Đang tải dữ liệu...");
    const data = await taiDuLieuPromise(); // Đợi 1 giây
    console.log("Dữ liệu nhận được:", data);
  } catch (error) {
    console.error("Lỗi xảy ra:", error);
  }
}
xuLyApp();
```

---

## 💻 Thực hành Lab: So sánh Side-by-Side ba cách giải quyết bất đồng bộ

Thầy trò mình sẽ giải quyết bài toán: **Tải thông tin sinh viên** -> **Tính điểm trung bình** sử dụng cả 3 cách tiếp cận để thấy rõ sự khác biệt.

::: code-group

```javascript [Cách 1: Callback]
// 1. Định nghĩa các tác vụ dùng Callback
function taiSinhVien(id, callback) {
  setTimeout(() => {
    console.log("1. Đã tải thông tin sinh viên.");
    callback({ id: id, name: "Nguyễn Văn A", scores: [8, 9, 7] });
  }, 1000);
}

function tinhTrungBinh(scores, callback) {
  setTimeout(() => {
    console.log("2. Đã tính xong điểm trung bình.");
    const avg = scores.reduce((sum, score) => sum + score, 0) / scores.length;
    callback(avg);
  }, 1000);
}

// 2. Chạy chương trình lồng nhau (Callback Hell)
console.log("Bắt đầu...");
taiSinhVien(101, (sv) => {
  tinhTrungBinh(sv.scores, (dtb) => {
    console.log(`Kết quả: Sinh viên ${sv.name} có điểm trung bình là: ${dtb}`);
    console.log("Kết thúc.");
  });
});
```

```javascript [Cách 2: Promise]
// 1. Định nghĩa các tác vụ trả về Promise
function taiSinhVienPromise(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("1. Đã tải thông tin sinh viên (Promise).");
      resolve({ id: id, name: "Nguyễn Văn A", scores: [8, 9, 7] });
    }, 1000);
  });
}

function tinhTrungBinhPromise(scores) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("2. Đã tính xong điểm trung bình (Promise).");
      const avg = scores.reduce((sum, score) => sum + score, 0) / scores.length;
      resolve(avg);
    }, 1000);
  });
}

// 2. Chạy chương trình bằng Promise Chaining
console.log("Bắt đầu...");
let tempSv;
taiSinhVienPromise(101)
  .then(sv => {
    tempSv = sv;
    return tinhTrungBinhPromise(sv.scores);
  })
  .then(dtb => {
    console.log(`Kết quả: Sinh viên ${tempSv.name} có điểm trung bình là: ${dtb}`);
    console.log("Kết thúc.");
  });
```

```javascript [Cách 3: Async/Await]
// 1. Tái sử dụng các hàm Promise ở cách 2

// 2. Chạy chương trình tuần tự sạch đẹp bằng Async/Await
async function chayChuongTrinh() {
  console.log("Bắt đầu...");
  try {
    const sv = await taiSinhVienPromise(101); // Chờ 1 giây
    const dtb = await tinhTrungBinhPromise(sv.scores); // Chờ tiếp 1 giây
    
    console.log(`Kết quả: Sinh viên ${sv.name} có điểm trung bình là: ${dtb}`);
  } catch (err) {
    console.error("Lỗi:", err);
  }
  console.log("Kết thúc.");
}

chayChuongTrinh();
```

:::

---

## 🧩 Bài tập thực hành

1. **Bài tập 1: Xây dựng hàm hẹn giờ trả về Promise**  
   Viết một hàm `delay(ms)` nhận vào số mili-giây và trả về một Promise. Promise này sẽ tự động được hoàn thành (`resolve`) sau số mili-giây đó.  
   *Ví dụ sử dụng*:
   ```javascript
   delay(1500).then(() => console.log("Chạy sau 1.5 giây!"));
   ```

2. **Bài tập 2: Tải nhiều dữ liệu song song**  
   Cho hai hàm Promise giả lập tải dữ liệu người dùng (`getUser`) và tải cài đặt hệ thống (`getSettings`). Hãy sử dụng cú pháp `Async/Await` kết hợp với cấu trúc `try...catch` để tải song song và in kết quả của cả hai.

---

## 🧪 Quiz/Checkpoint

Dưới đây là 5 câu hỏi trắc nghiệm kiểm tra nhanh kiến thức của các em trong buổi học này:

### Câu hỏi 1: Cơ chế nào của trình duyệt giúp JavaScript (đơn luồng) có thể thực hiện chạy ngầm các tác vụ nặng?
A. DOM Tree  
B. Web APIs  
C. CPU Threading  
D. Garbage Collector  

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `B` (Các tác vụ ngầm như setTimeout, ajax được đẩy sang Web APIs của trình duyệt chạy song song)
</details>

### Câu hỏi 2: Trạng thái Rejected của một Promise tương ứng với tình huống nào?
A. Tác vụ ngầm đang chạy chưa xong  
B. Tác vụ ngầm hoàn thành thành công  
C. Tác vụ ngầm xảy ra lỗi hoặc thất bại  
D. Không trạng thái nào ở trên  

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `C` (Rejected biểu thị Promise bị từ chối/thất bại và sẽ kích hoạt hàm catch)
</details>

### Câu hỏi 3: Từ khóa await chỉ được phép sử dụng ở đâu?
A. Ở bất kỳ đâu trong file JS  
B. Bên trong một hàm có từ khóa async phía trước  
C. Trong khối lệnh try...catch  
D. Bên trong vòng lặp for  

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `B` (Cú pháp JS bắt buộc await phải đặt trong hàm khai báo async)
</details>

### Câu hỏi 4: Đoạn mã: `const myFunc = async () => 5;` khi được gọi `myFunc()` sẽ trả về giá trị gì?
A. Số 5  
B. Một đối tượng Promise có kết quả resolved chứa số 5  
C. undefined  
D. null  

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `B` (Hàm async luôn trả về một Promise bọc ngoài giá trị return)
</details>

### Câu hỏi 5: Thứ tự in ra console của đoạn mã sau là gì?
```javascript
console.log("A");
setTimeout(() => console.log("B"), 0);
console.log("C");
```
A. A -> B -> C  
B. A -> C -> B  
C. B -> A -> C  
D. C -> A -> B  

<details>
<summary><b>👉 Xem Đáp án giải thích</b></summary>

**Đáp án đúng**: `B` (Dù setTimeout hẹn giờ 0ms, callback của nó vẫn phải xếp vào Callback Queue và chỉ chạy sau khi Call Stack thực thi xong các câu lệnh đồng bộ A và C)
</details>

---

## 🔗 Tài liệu tham khảo

- [JavaScript.info: Asynchronous programming](https://javascript.info/async)
- [MDN: Using promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
- [FreeCodeCamp: Event Loop explained](https://www.freecodecamp.org/news/javascript-event-loop-explained/)
