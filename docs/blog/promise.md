# Hiểu về Promises trong JavaScript

Chào các em! Hôm nay chúng ta sẽ tìm hiểu về một khái niệm quan trọng trong JavaScript - Promise . Đây là những công cụ mạnh mẽ giúp chúng ta xử lý các tác vụ bất đồng bộ một cách hiệu quả.

Như các em đã biết JavaScript là ngôn ngữ đơn luồng, nghĩa là nó chỉ có thể thực hiện một tác vụ tại một thời điểm. Tuy nhiên, trong thực tế, các ứng dụng web hiện đại cần thực hiện nhiều tác vụ cùng lúc: lấy dữ liệu từ server, tải hình ảnh, hoặc phản hồi tương tác của người dùng. Và đó chính là lúc việc xử lý bất đồng bộ bằng Callback, Promise phát huy vai trò của mình.

## Từ Callback đến Promises

Trước khi Promises ra đời, JavaScript sử dụng callbacks để xử lý các thao tác bất đồng bộ. Hãy xem ví dụ đơn giản về callback:

```javascript
function tinhTongCham(a, b, callback) {
  setTimeout(() => {
    const ketQua = a + b;
    callback(ketQua);
  }, 1000);
}

// Sử dụng callback
tinhTongCham(5, 10, (ketQua) => {
  console.log('Tổng là:', ketQua); // Sau 1 giây: "Tổng là: 15"
});
```

Nhìn vào ví dụ trên, các em thấy callback hoạt động khá tốt phải không? Nhưng khoan đã, hãy tưởng tượng khi chúng ta cần thực hiện nhiều thao tác liên tiếp. Và rồi, chúng ta sẽ gặp phải thứ mà các lập trình viên gọi là "callback hell" hay "pyramid of doom" - Tháp kim tự tháp của sự hỗn loạn:

```javascript
tinhTongCham(5, 10, (ketQua1) => {
  console.log('Kết quả 1:', ketQua1);
  tinhTongCham(ketQua1, 20, (ketQua2) => {
    console.log('Kết quả 2:', ketQua2);
    tinhTongCham(ketQua2, 30, (ketQua3) => {
      console.log('Kết quả cuối cùng:', ketQua3);
      // Và code cứ lồng vào nhau, lùi dần sang phải...
      // em thấy đấy, còn mấy cái này chỉ là ví dụ đơn giản thôi!
    });
  });
});
```

Nhìn code trên có thấy đau mắt không các em? Đó là lý do tại sao chúng ta cần một giải pháp tốt hơn. Và đó chính là lúc Promise xuất hiện như một vị cứu tinh!

## Promises - Người hùng giải cứu code bất đồng bộ

Vậy Promise là gì? Nói đơn giản, Promise giống như một "lời hứa" trong lập trình. Khi em nhờ JavaScript thực hiện một tác vụ, nó hứa sẽ cho em biết kết quả sau khi hoàn thành, dù thành công hay thất bại.

Hãy hình dung như thế này: em gọi đồ ăn từ một nhà hàng. Sau khi đặt món, họ đưa cho em một mã đơn hàng (đây chính là Promise). Với mã này, em có thể theo dõi trạng thái đơn hàng mà không cần liên tục gọi điện hỏi "Đồ ăn của tôi đâu?". Khi đồ ăn được giao đến (promise fulfilled) hoặc nhà hàng hết nguyên liệu (promise rejected), em sẽ nhận được thông báo.

### Workflow của Promise

Hãy nhìn vào sơ đồ sau để hiểu rõ hơn về quy trình xử lý của Promise:

![Sơ đồ Promise Workflow](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/promises.png)


### Các trạng thái của Promise - Cuộc đời của một lời hứa

Một Promise trong JavaScript có thể ở một trong ba trạng thái sau:
- **Pending (Đang chờ)**: "Đơn hàng đang được xử lý" - Promise vừa được tạo và đang làm việc.
- **Fulfilled (Hoàn thành)**: "Đồ ăn của em đã đến!" - Tác vụ hoàn thành thành công.
- **Rejected (Bị từ chối)**: "Xin lỗi, nhà hàng hết nguyên liệu" - Tác vụ thất bại vì lý do nào đó.

### Tạo một Promise - Học cách hứa hẹn trong code

Việc tạo một Promise trong JavaScript đơn giản hơn các em nghĩ:

```javascript
const myPromise = new Promise((resolve, reject) => {
  // Giả lập một tác vụ bất đồng bộ (ví dụ: đọc file, tính toán phức tạp...)
  const success = true; // Giả sử tác vụ thành công
  
  if (success) {
    // resolve() được gọi khi tác vụ hoàn thành thành công
    // Giá trị truyền vào resolve() sẽ được chuyển cho .then()
    resolve('Tác vụ hoàn thành thành công!');
  } else {
    // reject() được gọi khi tác vụ thất bại
    // Giá trị truyền vào reject() sẽ được chuyển cho .catch()
    reject('Có lỗi xảy ra khi thực hiện tác vụ!');
  }
});
```

### Sử dụng Promises

Chúng ta sử dụng `.then()` để xử lý khi promise hoàn thành và `.catch()` để xử lý khi có lỗi:

```javascript
myPromise
  .then(result => {
    // result chính là giá trị được truyền vào hàm resolve()
    console.log(result); // "Tác vụ hoàn thành thành công!"
  })
  .catch(error => {
    // error chính là giá trị được truyền vào hàm reject()
    console.error(error); // Xử lý lỗi nếu có
  });
```

### Ví dụ thực tế với Promise

Hãy viết lại ví dụ tính tổng ở trên sử dụng Promise:

```javascript
function tinhTongPromise(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a !== 'number' || typeof b !== 'number') {
        reject('Tham số phải là số!');
      } else {
        const ketQua = a + b;
        resolve(ketQua); // Trả kết quả cho .then()
      }
    }, 1000);
  });
}

// Sử dụng Promise
tinhTongPromise(5, 10)
  .then(ketQua => {
    console.log('Tổng là:', ketQua); // Sau 1 giây: "Tổng là: 15"
  })
  .catch(loi => {
    console.error('Lỗi:', loi);
  });
```

### Chuỗi Promises (Promise Chaining)

Một trong những ưu điểm lớn nhất của Promise là khả năng tạo chuỗi (chaining). Mỗi method `.then()` đều trả về một Promise mới, cho phép chúng ta xâu chuỗi các thao tác bất đồng bộ một cách dễ đọc:

```javascript
// Giải quyết vấn đề "callback hell" với Promise chaining
tinhTongPromise(5, 10)
  .then(ketQua1 => {
    console.log('Kết quả 1:', ketQua1); // 15
    // return ở đây sẽ tạo ra một Promise mới và truyền giá trị cho .then() tiếp theo
    return tinhTongPromise(ketQua1, 20);
  })
  .then(ketQua2 => {
    console.log('Kết quả 2:', ketQua2); // 35
    return tinhTongPromise(ketQua2, 30);
  })
  .then(ketQuaCuoiCung => {
    console.log('Kết quả cuối cùng:', ketQuaCuoiCung); // 65
  })
  .catch(loi => {
    // Một .catch() duy nhất có thể bắt lỗi từ bất kỳ Promise nào trong chuỗi
    console.error('Có lỗi xảy ra:', loi);
  });
```

**Quan trọng**: Giá trị trả về từ một hàm `.then()` sẽ được truyền vào hàm `.then()` tiếp theo. Nếu giá trị trả về là một Promise, hàm `.then()` tiếp theo sẽ đợi Promise đó hoàn thành.

### Truyền giá trị qua chuỗi Promise

Hiểu cách truyền giá trị qua chuỗi Promise là rất quan trọng:

```javascript
Promise.resolve(1)
  .then(x => {
    console.log(x); // 1
    return x + 1;   // Trả về giá trị đơn giản (không phải Promise)
  })
  .then(x => {
    console.log(x); // 2
    return Promise.resolve(x + 1); // Trả về một Promise
  })
  .then(x => {
    console.log(x); // 3
    throw new Error('Lỗi!'); // Ném ra một lỗi
  })
  .catch(err => {
    console.error(err); // Error: Lỗi!
    return 4; // Có thể tiếp tục chuỗi sau khi xử lý lỗi
  })
  .then(x => {
    console.log(x); // 4
  });
```

### Các phương thức hữu ích của Promise

- **Promise.all()**: Chờ đợi tất cả các promises hoàn thành hoặc có một promise bất kỳ bị từ chối.
  
  ```javascript
  // Thực hiện nhiều Promise cùng lúc và đợi tất cả hoàn thành
  Promise.all([
    tinhTongPromise(1, 2),
    tinhTongPromise(3, 4),
    tinhTongPromise(5, 6)
  ])
    .then(ketQua => {
      console.log(ketQua); // [3, 7, 11] - mảng kết quả từ các promises
      const tong = ketQua.reduce((sum, value) => sum + value, 0);
      console.log('Tổng tất cả:', tong); // 21
    })
    .catch(loi => {
      // Nếu bất kỳ promise nào lỗi, .catch() sẽ được gọi
      console.error('Lỗi:', loi);
    });
  ```

- **Promise.race()**: Trả về kết quả của promise đầu tiên hoàn thành hoặc bị từ chối.
  
  ```javascript
  // Cái nào xong trước, lấy kết quả cái đó
  Promise.race([
    new Promise(resolve => setTimeout(() => resolve('Kết quả 1'), 1000)),
    new Promise(resolve => setTimeout(() => resolve('Kết quả 2'), 500))
  ])
    .then(ketQua => {
      console.log(ketQua); // "Kết quả 2" (vì nó hoàn thành sau 500ms)
    });
  ```

- **Promise.allSettled()**: Chờ đến khi tất cả promises đều hoàn thành (dù thành công hay thất bại).
- **Promise.any()**: Trả về kết quả của promise đầu tiên hoàn thành thành công.


## Ví dụ thực tế: Xây dựng ứng dụng đơn giản

Hãy xây dựng một ứng dụng đơn giản mô phỏng việc tải dữ liệu người dùng:

```javascript
// Giả lập cơ sở dữ liệu
const DATABASE = {
  users: [
    { id: 1, name: 'Nguyễn Văn A', friendId: 2 },
    { id: 2, name: 'Trần Thị B', friendId: 3 },
    { id: 3, name: 'Lê Văn C', friendId: 1 }
  ],
  tasks: {
    1: ['Học JavaScript', 'Làm bài tập', 'Đọc sách'],
    2: ['Mua sắm', 'Nấu ăn', 'Dọn nhà'],
    3: ['Chơi game', 'Xem phim', 'Nghe nhạc']
  }
};

// Giả lập các API calls
function layThongTinNguoiDung(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = DATABASE.users.find(u => u.id === id);
      if (user) {
        resolve(user);
      } else {
        reject(`Không tìm thấy người dùng có ID: ${id}`);
      }
    }, 1000);
  });
}

function layCongViec(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const tasks = DATABASE.tasks[userId];
      if (tasks) {
        resolve(tasks);
      } else {
        reject(`Không tìm thấy công việc cho người dùng ID: ${userId}`);
      }
    }, 800);
  });
}

// Hàm tạo giao diện người dùng (đơn giản hóa)
function hienThiThongTinNguoiDung(nguoiDung, congViec) {
  console.log(`===== THÔNG TIN NGƯỜI DÙNG =====`);
  console.log(`Tên: ${nguoiDung.name} (ID: ${nguoiDung.id})`);
  console.log(`em thân: ID ${nguoiDung.friendId}`);
  console.log(`\n===== DANH SÁCH CÔNG VIỆC =====`);
  congViec.forEach((cv, index) => {
    console.log(`${index + 1}. ${cv}`);
  });
  console.log(`===============================`);
}

// Sử dụng Promise
function taiThongTinNguoiDungPromise(id) {
  layThongTinNguoiDung(id)
    .then(nguoiDung => {
      console.log(`Đã tìm thấy người dùng: ${nguoiDung.name}`);
      return layCongViec(id).then(congViec => {
        return { nguoiDung, congViec };
      });
    })
    .then(data => {
      hienThiThongTinNguoiDung(data.nguoiDung, data.congViec);
    })
    .catch(loi => {
      console.error('Lỗi:', loi);
    });
}

// Gọi hàm để thực thi
console.log("===== DÙNG PROMISE =====");
taiThongTinNguoiDungPromise(1);

```

## Xử lý lỗi trong lập trình bất đồng bộ

Xử lý lỗi đúng cách là một phần quan trọng trong lập trình bất đồng bộ:

```javascript
// Xử lý lỗi với Promise
layThongTinNguoiDung(999) // ID không tồn tại
  .then(nguoiDung => {
    console.log(nguoiDung);
    return layCongViec(nguoiDung.id);
  })
  .then(congViec => {
    console.log(congViec);
  })
  .catch(loi => {
    // Bắt tất cả các lỗi có thể xảy ra trong chuỗi promise
    console.error('Đã xảy ra lỗi:', loi);
    // Thực hiện xử lý thay thế, ví dụ: hiển thị thông báo người dùng không tồn tại
  })
  .finally(() => {
    // .finally() luôn được chạy, bất kể promise thành công hay thất bại
    console.log('Đã hoàn thành quá trình, dù thành công hay thất bại');
  });

```

## Các thực hành tốt nhất khi làm việc với Promise

1. **Luôn xử lý lỗi**: Không bao giờ bỏ qua việc xử lý lỗi với `.catch()`.

2. **Trả về promises**: Khi viết các hàm thực hiện tác vụ bất đồng bộ, hãy trả về Promise để người gọi có thể xử lý kết quả.

3. **Tránh callback hell**: Sử dụng chuỗi Promise để tránh code lồng nhau quá sâu và khó đọc.

4. **Sử dụng Promise.all cho các tác vụ song song**: Khi các tác vụ có thể chạy đồng thời, sử dụng Promise.all để cải thiện hiệu suất.

5. **Xử lý timeout**: Triển khai logic timeout cho các tác vụ có thể mất nhiều thời gian hoặc có nguy cơ bị treo.

## Kết luận

Promises đã cách mạng hóa cách chúng ta viết code bất đồng bộ trong JavaScript. Chúng giúp code trở nên dễ đọc, dễ bảo trì và ít lỗi hơn.

Việc hiểu khi nào sử dụng Promises trực tiếp là chìa khóa để viết code bất đồng bộ hiệu quả. Hãy bắt đầu với những ví dụ đơn giản, dần dần áp dụng vào dự án thực tế, và em sẽ thấy những công cụ này trở thành phần không thể thiếu trong kỹ năng lập trình JavaScript của mình.

Nếu có thắc mắc, đừng ngại hỏi thầy hoặc các bạn nhé!  
Chúc các em học tốt! 🚀
— **Thầy Đạt 🧡**
