# Buổi 7: DOM & Event

**Loại buổi**: Lý thuyết  
**Thời lượng**: 120 phút  
**Dự án**: To-Do App (đã có hiển thị danh sách từ buổi 6)

---

## 🎯 Mục tiêu học tập

Sau buổi học này, bạn sẽ có thể:

- ✅ Hiểu DOM là gì và cấu trúc DOM Tree
- ✅ Chọn và thao tác với các phần tử HTML
- ✅ Tạo, sửa, xóa phần tử DOM
- ✅ Xử lý sự kiện (click, submit, input...)
- ✅ Sử dụng Event object và preventDefault
- ✅ Áp dụng vào việc tương tác với người dùng

---

## 🧠 Nội dung chính

### 1. DOM là gì?

**DOM (Document Object Model)** là một đại diện của HTML trong JavaScript, cho phép JavaScript thao tác với các phần tử HTML.

**DOM Tree:**
```
Document
└── html
    ├── head
    │   ├── title
    │   └── meta
    └── body
        ├── h1
        ├── div
        │   ├── p
        │   └── button
        └── script
```

### 2. Chọn phần tử (Selectors)

#### 2.1. querySelector / querySelectorAll

```javascript
// Chọn 1 phần tử đầu tiên
let element = document.querySelector('.class-name');
let element2 = document.querySelector('#id-name');
let element3 = document.querySelector('div');
let element4 = document.querySelector('div.container');

// Chọn tất cả phần tử
let elements = document.querySelectorAll('.class-name');
let elements2 = document.querySelectorAll('div');
```

**Ví dụ HTML:**
```html
<div class="container">
    <h1 id="title">Tiêu đề</h1>
    <p class="text">Nội dung</p>
    <button class="btn">Click me</button>
</div>
```

```javascript
// Chọn phần tử
let title = document.querySelector('#title');
let texts = document.querySelectorAll('.text');
let btn = document.querySelector('.btn');
```

#### 2.2. Các phương thức cũ (vẫn dùng được)

```javascript
// getElementById
let element = document.getElementById('myId');

// getElementsByClassName
let elements = document.getElementsByClassName('myClass');

// getElementsByTagName
let elements = document.getElementsByTagName('div');
```

**So sánh:**
- `querySelector`: Chọn 1 phần tử, trả về `Element` hoặc `null`
- `querySelectorAll`: Chọn nhiều phần tử, trả về `NodeList`
- `getElementById`: Chỉ chọn theo ID, nhanh hơn
- `getElementsByClassName`: Chọn theo class, trả về `HTMLCollection`

### 3. Thao tác với phần tử

#### 3.1. Đọc nội dung

```javascript
let element = document.querySelector('#myId');

// textContent (chỉ lấy text, bỏ HTML)
console.log(element.textContent);  // "Nội dung text"

// innerHTML (lấy cả HTML)
console.log(element.innerHTML);     // "<strong>Nội dung</strong>"

// innerText (chỉ text hiển thị, bỏ hidden elements)
console.log(element.innerText);
```

#### 3.2. Thay đổi nội dung

```javascript
let element = document.querySelector('#myId');

// Thay đổi text
element.textContent = 'Nội dung mới';

// Thay đổi HTML
element.innerHTML = '<strong>Nội dung mới</strong>';

// Thay đổi thuộc tính
element.setAttribute('class', 'new-class');
element.id = 'newId';
```

#### 3.3. Thay đổi style

```javascript
let element = document.querySelector('#myId');

// Cách 1: Thay đổi từng thuộc tính
element.style.color = 'red';
element.style.backgroundColor = 'blue';
element.style.fontSize = '20px';

// Cách 2: Thay đổi nhiều thuộc tính
element.style.cssText = 'color: red; background: blue; font-size: 20px;';

// Cách 3: Thêm/xóa class (khuyến nghị)
element.classList.add('active');
element.classList.remove('inactive');
element.classList.toggle('hidden');
element.classList.contains('active');  // true/false
```

#### 3.4. Thuộc tính (Attributes)

```javascript
let element = document.querySelector('#myId');

// Đọc thuộc tính
let href = element.getAttribute('href');
let id = element.id;
let className = element.className;

// Thay đổi thuộc tính
element.setAttribute('href', 'https://example.com');
element.id = 'newId';
element.className = 'new-class';

// Xóa thuộc tính
element.removeAttribute('href');
```

### 4. Tạo phần tử mới

```javascript
// Tạo phần tử
let newDiv = document.createElement('div');
newDiv.textContent = 'Nội dung mới';
newDiv.className = 'my-class';

// Thêm vào DOM
let parent = document.querySelector('.container');
parent.appendChild(newDiv);  // Thêm vào cuối

// Hoặc thêm vào vị trí cụ thể
let existingElement = document.querySelector('.existing');
parent.insertBefore(newDiv, existingElement);  // Thêm trước existingElement

// Hoặc thay thế
parent.replaceChild(newDiv, existingElement);
```

**Ví dụ: Thêm công việc vào danh sách**
```javascript
function themCongViecVaoDOM(tenCongViec) {
    // Tạo phần tử
    let li = document.createElement('li');
    li.textContent = tenCongViec;
    li.className = 'cong-viec-item';
    
    // Thêm vào danh sách
    let danhSach = document.querySelector('#danh-sach-cong-viec');
    danhSach.appendChild(li);
}
```

### 5. Xóa phần tử

```javascript
let element = document.querySelector('#myId');

// Xóa phần tử
element.remove();  // Cách hiện đại (ES6)

// Hoặc cách cũ
element.parentNode.removeChild(element);
```

### 6. Sự kiện (Events)

**Event** là hành động của người dùng hoặc trình duyệt (click, submit, input...)

#### 6.1. addEventListener (Khuyến nghị)

```javascript
let button = document.querySelector('#myButton');

button.addEventListener('click', function() {
    console.log('Button được click!');
});

// Arrow function
button.addEventListener('click', () => {
    console.log('Button được click!');
});
```

#### 6.2. Các sự kiện phổ biến

**Mouse Events:**
```javascript
element.addEventListener('click', handleClick);      // Click
element.addEventListener('dblclick', handleDblClick); // Double click
element.addEventListener('mouseover', handleMouseOver); // Di chuột vào
element.addEventListener('mouseout', handleMouseOut);   // Di chuột ra
element.addEventListener('mousedown', handleMouseDown); // Nhấn chuột
element.addEventListener('mouseup', handleMouseUp);     // Thả chuột
```

**Keyboard Events:**
```javascript
element.addEventListener('keydown', handleKeyDown);  // Nhấn phím
element.addEventListener('keyup', handleKeyUp);     // Thả phím
element.addEventListener('keypress', handleKeyPress); // Nhấn và giữ
```

**Form Events:**
```javascript
form.addEventListener('submit', handleSubmit);  // Submit form
input.addEventListener('input', handleInput);  // Nhập liệu
input.addEventListener('change', handleChange); // Thay đổi giá trị
input.addEventListener('focus', handleFocus);    // Focus vào
input.addEventListener('blur', handleBlur);      // Focus ra
```

**Window Events:**
```javascript
window.addEventListener('load', handleLoad);      // Trang load xong
window.addEventListener('resize', handleResize);  // Thay đổi kích thước
window.addEventListener('scroll', handleScroll);  // Cuộn trang
```

#### 6.3. Event Object

Khi sự kiện xảy ra, JavaScript tự động truyền một **Event object** vào hàm xử lý.

```javascript
button.addEventListener('click', function(event) {
    console.log(event);  // Event object
    
    // Thông tin hữu ích
    console.log(event.type);        // 'click'
    console.log(event.target);      // Phần tử gây ra sự kiện
    console.log(event.currentTarget); // Phần tử đang lắng nghe
    
    // Mouse events
    console.log(event.clientX);     // Tọa độ X
    console.log(event.clientY);     // Tọa độ Y
    
    // Keyboard events
    console.log(event.key);         // Phím được nhấn
    console.log(event.code);        // Mã phím
});
```

**Ví dụ: Xử lý click với thông tin:**
```javascript
let buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', function(event) {
        console.log('Button được click:', event.target.textContent);
        console.log('Tọa độ:', event.clientX, event.clientY);
    });
});
```

#### 6.4. preventDefault()

Ngăn chặn hành vi mặc định của phần tử.

```javascript
let form = document.querySelector('#myForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();  // Ngăn form submit mặc định
    
    // Xử lý submit thủ công
    console.log('Form được submit!');
});
```

**Ví dụ: Form không reload trang**
```html
<form id="myForm">
    <input type="text" id="ten">
    <button type="submit">Submit</button>
</form>
```

```javascript
let form = document.querySelector('#myForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();  // Ngăn reload trang
    
    let ten = document.querySelector('#ten').value;
    console.log('Tên:', ten);
    // Xử lý dữ liệu...
});
```

#### 6.5. Event Bubbling & Event Delegation

**Event Bubbling:** Sự kiện lan truyền từ phần tử con lên phần tử cha.

```html
<div class="parent">
    <button class="child">Click me</button>
</div>
```

```javascript
let parent = document.querySelector('.parent');
let child = document.querySelector('.child');

child.addEventListener('click', function(event) {
    console.log('Child clicked');
});

parent.addEventListener('click', function(event) {
    console.log('Parent clicked');  // Cũng chạy khi click child
});
```

**Ngăn Event Bubbling:**
```javascript
child.addEventListener('click', function(event) {
    event.stopPropagation();  // Ngăn lan truyền
    console.log('Child clicked');
});
```

**Event Delegation:** Lắng nghe sự kiện ở phần tử cha để xử lý phần tử con.

```html
<ul id="danh-sach">
    <li class="item">Item 1</li>
    <li class="item">Item 2</li>
    <li class="item">Item 3</li>
</ul>
```

```javascript
// Thay vì lắng nghe từng item
let items = document.querySelectorAll('.item');
items.forEach(item => {
    item.addEventListener('click', handleClick);
});

// Dùng Event Delegation (tốt hơn)
let danhSach = document.querySelector('#danh-sach');
danhSach.addEventListener('click', function(event) {
    if (event.target.classList.contains('item')) {
        console.log('Item clicked:', event.target.textContent);
    }
});
```

---

## 💻 Ví dụ minh họa

### Ví dụ 1: Tạo và hiển thị danh sách công việc

```html
<div id="app">
    <input type="text" id="ten-cong-viec" placeholder="Nhập tên công việc">
    <button id="btn-them">Thêm</button>
    <ul id="danh-sach-cong-viec"></ul>
</div>
```

```javascript
let danhSachCongViec = [];

let btnThem = document.querySelector('#btn-them');
let inputTen = document.querySelector('#ten-cong-viec');

btnThem.addEventListener('click', function() {
    let ten = inputTen.value.trim();
    
    if (ten === '') {
        alert('Vui lòng nhập tên công việc!');
        return;
    }
    
    // Thêm vào mảng
    danhSachCongViec.push({ id: Date.now(), ten: ten });
    
    // Hiển thị lại danh sách
    hienThiDanhSach();
    
    // Xóa input
    inputTen.value = '';
});

function hienThiDanhSach() {
    let danhSach = document.querySelector('#danh-sach-cong-viec');
    danhSach.innerHTML = '';  // Xóa nội dung cũ
    
    danhSachCongViec.forEach(congViec => {
        let li = document.createElement('li');
        li.textContent = congViec.ten;
        li.className = 'cong-viec-item';
        danhSach.appendChild(li);
    });
}
```

### Ví dụ 2: Xóa công việc

```javascript
function hienThiDanhSach() {
    let danhSach = document.querySelector('#danh-sach-cong-viec');
    danhSach.innerHTML = '';
    
    danhSachCongViec.forEach(congViec => {
        let li = document.createElement('li');
        li.innerHTML = `
            <span>${congViec.ten}</span>
            <button class="btn-xoa" data-id="${congViec.id}">Xóa</button>
        `;
        danhSach.appendChild(li);
    });
    
    // Event Delegation cho nút xóa
    danhSach.addEventListener('click', function(event) {
        if (event.target.classList.contains('btn-xoa')) {
            let id = parseInt(event.target.getAttribute('data-id'));
            xoaCongViec(id);
        }
    });
}

function xoaCongViec(id) {
    danhSachCongViec = danhSachCongViec.filter(cv => cv.id !== id);
    hienThiDanhSach();
}
```

### Ví dụ 3: Form submit

```html
<form id="form-cong-viec">
    <input type="text" id="ten" required>
    <input type="text" id="mo-ta">
    <button type="submit">Thêm công việc</button>
</form>
```

```javascript
let form = document.querySelector('#form-cong-viec');

form.addEventListener('submit', function(event) {
    event.preventDefault();  // Ngăn reload trang
    
    let ten = document.querySelector('#ten').value;
    let moTa = document.querySelector('#mo-ta').value;
    
    console.log('Thêm công việc:', { ten, moTa });
    
    // Xử lý thêm công việc...
    // Reset form
    form.reset();
});
```

---

## 🧪 Quiz cuối buổi (7 câu)

### Câu 1: Phương thức nào chọn 1 phần tử theo class?
A. `getElementsByClassName()`  
B. `querySelector()`  
C. `querySelectorAll()`  
D. Cả B và C

**Đáp án: B** (querySelector chọn 1 phần tử đầu tiên)

### Câu 2: Cách nào thêm phần tử vào DOM?
A. `appendChild()`  
B. `insertBefore()`  
C. Cả A và B  
D. `add()`

**Đáp án: C**

### Câu 3: `event.preventDefault()` dùng để làm gì?
A. Ngăn sự kiện xảy ra  
B. Ngăn hành vi mặc định  
C. Ngăn event bubbling  
D. Xóa phần tử

**Đáp án: B**

### Câu 4: Sự kiện nào phát sinh khi nhập liệu vào input?
A. `keydown`  
B. `input`  
C. `change`  
D. Tất cả đều đúng

**Đáp án: D** (tùy trường hợp)

### Câu 5: `event.target` là gì?
A. Phần tử đang lắng nghe  
B. Phần tử gây ra sự kiện  
C. Phần tử cha  
D. Window

**Đáp án: B**

### Câu 6: Cách nào thay đổi class của phần tử?
A. `element.className = 'new-class'`  
B. `element.classList.add('new-class')`  
C. Cả A và B  
D. `element.addClass('new-class')`

**Đáp án: C**

### Câu 7: Event Delegation là gì?
A. Lắng nghe từng phần tử con  
B. Lắng nghe ở phần tử cha để xử lý con  
C. Xử lý sự kiện song song  
D. Không có khái niệm này

**Đáp án: B**

---

## 📝 Bài tập về nhà (chuẩn bị cho buổi 8)

1. Tạo form thêm công việc với validation (không được rỗng)
2. Hiển thị danh sách công việc động từ mảng
3. Thêm nút "Xóa" cho mỗi công việc
4. Thêm nút "Sửa" để chỉnh sửa công việc
5. Thêm input tìm kiếm để filter danh sách

---

## 🔗 Tài liệu tham khảo

- [MDN: DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- [MDN: Events](https://developer.mozilla.org/en-US/docs/Web/Events)
- [JavaScript.info: DOM](https://javascript.info/dom-nodes)

---

**Chúc bạn học tập tốt! 🚀**
