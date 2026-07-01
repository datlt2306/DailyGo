# Buổi 15: Debugging & Performance Optimization

**Loại buổi**: Lý thuyết  
**Thời lượng**: 120 phút  
**Dự án**: ZenTask (To-Do App) - Tối ưu hóa hiệu năng ứng dụng và gỡ lỗi chuyên nghiệp

---

## 🎯 Mục tiêu học tập

Sau buổi học này, bạn sẽ có thể:

- ✅ Gỡ lỗi (Debug) ứng dụng JavaScript chuyên nghiệp bằng công cụ Chrome DevTools Debugger và Breakpoints thay vì lạm dụng `console.log`
- ✅ Giải thích được cơ chế hoạt động và tầm quan trọng của kỹ thuật **Debounce** trong lập trình web
- ✅ Tự viết hàm `debounce` để tối ưu hóa hiệu năng cho tính năng tìm kiếm của ứng dụng
- ✅ Áp dụng các nguyên tắc tối ưu hóa hiệu năng rendering cơ bản

---

## 🧠 Nội dung chính

### 1. Kỹ năng gỡ lỗi (Debugging) chuyên nghiệp với Chrome DevTools

Hầu hết người học lập trình đều quen thuộc với việc viết `console.log()` để kiểm tra giá trị của biến.
* **Hạn chế**: Code bị bẩn do phải viết/xóa console.log liên tục. Không thể dừng chương trình tại thời điểm cụ thể để kiểm tra luồng chạy của dữ liệu.

#### 1.1. Sử dụng từ khóa `debugger;`
Đặt từ khóa `debugger;` ở bất kỳ dòng code nào bạn nghi ngờ có lỗi. Khi mở Chrome DevTools (F12) và chạy đến dòng này, trình duyệt sẽ tự động **tạm dừng** thực thi toàn bộ chương trình và cho phép bạn soi giá trị của tất cả biến hiện tại.

```javascript
function tinhTienDo(todos) {
    const total = todos.length;
    const completed = todos.filter(t => t.hoanThanh).length;
    
    debugger; // 👈 Trình duyệt sẽ dừng lại ở đây để bạn kiểm tra giá trị của total và completed
    
    return total === 0 ? 0 : Math.round((completed / total) * 100);
}
```

#### 1.2. Sử dụng Breakpoints (Điểm dừng) trực tiếp trên DevTools
Trong tab **Sources** của DevTools, click chuột vào số dòng của file JS để tạo điểm dừng. Khi code chạy qua dòng đó, chương trình sẽ dừng lại.
* **Step Over (F10)**: Chạy qua dòng tiếp theo.
* **Step Into (F11)**: Đi sâu vào bên trong hàm đang được gọi ở dòng hiện tại.
* **Step Out (Shift+F11)**: Thoát khỏi hàm hiện tại ra ngoài.
* **Resume (F8)**: Tiếp tục chạy chương trình bình thường cho đến điểm dừng tiếp theo.

---

### 2. Tối ưu hóa hiệu năng với kỹ thuật Debounce

#### 2.1. Vấn đề nghẽn cổ chai khi tìm kiếm (Real-time Search)
Trong Buổi 6 và Buổi 14, ta lắng nghe sự kiện `input` trên ô tìm kiếm:
```javascript
input.addEventListener('input', function(e) {
    // Gọi renderList hoặc gọi API tìm kiếm
});
```
Nếu người dùng gõ từ khóa "javascript" (10 ký tự), sự kiện `input` sẽ kích hoạt **10 lần liên tục**. Điều này đồng nghĩa với việc ứng dụng phải chạy lại hàm render danh sách (thao tác DOM nặng) 10 lần, hoặc tệ hơn là gửi 10 HTTP requests liên tiếp lên API Server chỉ trong vòng 1-2 giây. 
* **Hậu quả**: Gây lãng phí băng thông server và làm trình duyệt của client bị giật, đơ.

#### 2.2. Giải pháp: Debounce là gì?
**Debounce** là kỹ thuật trì hoãn việc thực thi một hàm cho đến khi một khoảng thời gian chờ nhất định trôi qua kể từ lần cuối cùng sự kiện đó được kích hoạt.

*Nói cách khác: "Đợi người dùng ngừng gõ phím trong vòng 500ms thì mới thực hiện tìm kiếm/gọi API".*

```
Không dùng Debounce:
Gõ:  j   a   v   a   s   c   r   i   p   t
API: 🚀  🚀  🚀  🚀  🚀  🚀  🚀  🚀  🚀  🚀  (10 Requests!)

Có dùng Debounce (chờ 500ms):
Gõ:  j   a   v   a   s   c   r   i   p   t
Chờ:                                      |---- 500ms ----|
API:                                                      🚀  (Chỉ 1 Request duy nhất!)
```

#### 2.3. Viết hàm Debounce trong JavaScript
Hàm `debounce` sử dụng cơ chế **Closure** và hàm `setTimeout` để ghi nhớ và xóa bộ đếm thời gian:

```javascript
/**
 * Hàm Debounce trì hoãn gọi hàm callback
 * @param {Function} func - Hàm cần trì hoãn
 * @param {number} delay - Thời gian chờ (miligiây)
 * @returns {Function}
 */
export function debounce(func, delay = 500) {
    let timeoutId;
    
    return function(...args) {
        // Xóa bộ đếm thời gian cũ nếu sự kiện lại kích hoạt trước khi hết giờ
        clearTimeout(timeoutId);
        
        // Thiết lập bộ đếm thời gian mới
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}
```

---

## 💻 Ví dụ minh họa: Tích hợp Debounce vào ô tìm kiếm ZenTask

Cách tích hợp hàm debounce vào ô tìm kiếm của file `main.js`:

```javascript
import { debounce } from './utils.js';

// 1. Hàm tìm kiếm thực tế (chỉ chạy khi người dùng dừng gõ)
function thucHienTimKiem(tuKhoa) {
    filterState.tuKhoa = tuKhoa;
    dom.renderList(danhSachCongViec, filterState);
    console.log(`Đang tìm kiếm từ khóa: "${tuKhoa}" qua API...`);
}

// 2. Tạo phiên bản debounced của hàm tìm kiếm (chờ 500ms)
const timKiemDebounced = debounce((event) => {
    thucHienTimKiem(event.target.value);
}, 500);

// 3. Lắng nghe sự kiện input và truyền hàm debounced vào
document.getElementById('tim-kiem').addEventListener('input', timKiemDebounced);
```

---



## 📝 Bài tập về nhà

1. Hãy tích hợp hàm `debounce` vào tệp tin `utils.js` và áp dụng nó cho ô tìm kiếm của ứng dụng ZenTask của bạn.
2. Mở tab Network trên Chrome DevTools, thực hiện tìm kiếm gõ nhanh một từ khóa dài và quan sát xem số lượng request gửi lên JSON Server có giảm đi đúng như mong đợi không.
3. Tìm hiểu sự khác biệt cơ bản giữa hai kỹ thuật tối ưu hóa hiệu năng: **Debounce** và **Throttle** (khi nào nên dùng cái nào).

---

## 🔗 Tài liệu tham khảo

- [JavaScript.info: Debugging in Chrome](https://javascript.info/debugging-chrome)
- [JavaScript.info: Debounce decorator](https://javascript.info/task/debounce)
- [CSS Tricks: Debounce and Throttle](https://css-tricks.com/debouncing-throttling-explained-examples/)
