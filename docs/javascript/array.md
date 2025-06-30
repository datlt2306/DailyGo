# Hướng dẫn các hàm xử lý mảng thường sử dụng trong JavaScript

Trong bài viết này, chúng ta sẽ tìm hiểu về các hàm xử lý mảng phổ biến trong JavaScript. Các hàm này giúp chúng ta thao tác với mảng một cách dễ dàng và hiệu quả.



## 1. `map()`

Hàm `map()` được sử dụng để tạo một mảng mới bằng cách áp dụng một hàm lên từng phần tử của mảng ban đầu.

### Ví dụ:

```javascript
// filepath: /Users/ken/Folders/Projects/polytuts-5/examples/map-demo.js
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map((num) => num * num);
console.log(squaredNumbers); // [1, 4, 9, 16, 25]
```


## 2. `filter()`

Hàm `filter()` được sử dụng để tạo một mảng mới chứa các phần tử thỏa mãn điều kiện của một hàm.

### Ví dụ:

```javascript
// filepath: /Users/ken/Folders/Projects/polytuts-5/examples/filter-demo.js
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // [2, 4]
```


## 3. `reduce()`

Hàm `reduce()` được sử dụng để tính toán một giá trị duy nhất từ một mảng, bằng cách áp dụng một hàm lên từng phần tử (từ trái sang phải).

### Ví dụ:

```javascript
// filepath: /Users/ken/Folders/Projects/polytuts-5/examples/reduce-demo.js
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15
```


## 4. `forEach()`

Hàm `forEach()` được sử dụng để thực hiện một hành động nào đó trên từng phần tử của mảng. Không giống như `map()`, nó không trả về mảng mới.

### Ví dụ:

```javascript
// filepath: /Users/ken/Folders/Projects/polytuts-5/examples/forEach-demo.js
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((num) => console.log(num));
// Output:
// 1
// 2
// 3
// 4
// 5
```


## 5. `find()`

Hàm `find()` trả về phần tử đầu tiên trong mảng thỏa mãn điều kiện của một hàm. Nếu không có phần tử nào thỏa mãn, nó trả về `undefined`.

### Ví dụ:

```javascript
// filepath: /Users/ken/Folders/Projects/polytuts-5/examples/find-demo.js
const numbers = [1, 2, 3, 4, 5];
const firstEven = numbers.find((num) => num % 2 === 0);
console.log(firstEven); // 2
```


## 6. `some()` và `every()`

- `some()`: Kiểm tra xem có ít nhất một phần tử trong mảng thỏa mãn điều kiện.
- `every()`: Kiểm tra xem tất cả các phần tử trong mảng có thỏa mãn điều kiện hay không.

### Ví dụ:

```javascript
// filepath: /Users/ken/Folders/Projects/polytuts-5/examples/some-every-demo.js
const numbers = [1, 2, 3, 4, 5];

const hasEven = numbers.some((num) => num % 2 === 0);
console.log(hasEven); // true

const allPositive = numbers.every((num) => num > 0);
console.log(allPositive); // true
```


## 7. Todo List CRUD với mảng

Dưới đây là một ví dụ về cách sử dụng các hàm xử lý mảng để thực hiện các thao tác CRUD (Create, Read, Update, Delete) trên một danh sách công việc (Todo List).

## Công việc cần làm trước khi thực hành Todo List

Trước khi bắt đầu viết code cho bài tập Todo List, hãy thực hiện các bước sau để đảm bảo bạn hiểu rõ yêu cầu và có kế hoạch thực hiện:

1. **Xác định yêu cầu bài tập**:  
   - Xây dựng một ứng dụng Todo List đơn giản với các chức năng:
     - **Thêm công việc**: Cho phép người dùng thêm một công việc mới.
     - **Hiển thị danh sách công việc**: Hiển thị tất cả các công việc hiện có.
     - **Cập nhật trạng thái công việc**: Đánh dấu công việc là đã hoàn thành hoặc chưa hoàn thành.
     - **Xóa công việc**: Xóa một công việc khỏi danh sách.

2. **Thiết kế cấu trúc dữ liệu**:  
   - Sử dụng một mảng các đối tượng để lưu danh sách công việc.
   - Mỗi công việc cần có các thuộc tính:
     - `id`: Số nguyên duy nhất để xác định công việc.
     - `task`: Chuỗi mô tả công việc.
     - `completed`: Trạng thái hoàn thành (true/false).

3. **Lên kế hoạch cho các chức năng**:  
   - **Thêm công việc**: Viết hàm để thêm một đối tượng mới vào mảng.
   - **Hiển thị danh sách công việc**: Viết hàm để in ra danh sách công việc.
   - **Cập nhật trạng thái công việc**: Viết hàm để thay đổi giá trị `completed` của một công việc dựa trên `id`.
   - **Xóa công việc**: Viết hàm để loại bỏ một công việc khỏi mảng dựa trên `id`.

### Ví dụ:

```javascript
// filepath: /Users/ken/Folders/Projects/polytuts-5/examples/todo-list-crud.js
let todos = [
    { id: 1, task: "Học JavaScript", completed: false },
    { id: 2, task: "Làm bài tập", completed: true },
    { id: 3, task: "Đọc sách", completed: false },
];

// 1. Thêm công việc mới (Create)
function addTodo(task) {
    const newTodo = { id: todos.length + 1, task, completed: false };
    todos.push(newTodo);
    console.log("Thêm công việc:", newTodo);
}

// 2. Lấy danh sách công việc (Read)
function getTodos() {
    console.log("Danh sách công việc:", todos);
}

// 3. Cập nhật trạng thái công việc (Update)
function updateTodo(id, updates) {
    todos = todos.map((todo) =>
        todo.id === id ? { ...todo, ...updates } : todo
    );
    console.log(`Cập nhật công việc có id ${id}:`, updates);
}

// 4. Xóa công việc (Delete)
function deleteTodo(id) {
    todos = todos.filter((todo) => todo.id !== id);
    console.log(`Xóa công việc có id ${id}`);
}

// Thực hiện các thao tác CRUD
addTodo("Đi dạo");
getTodos();
updateTodo(1, { completed: true });
deleteTodo(2);
getTodos();
```

### Output:

```plaintext
Thêm công việc: { id: 4, task: 'Đi dạo', completed: false }
Danh sách công việc: [
  { id: 1, task: 'Học JavaScript', completed: false },
  { id: 2, task: 'Làm bài tập', completed: true },
  { id: 3, task: 'Đọc sách', completed: false },
  { id: 4, task: 'Đi dạo', completed: false }
]
Cập nhật công việc có id 1: { completed: true }
Xóa công việc có id 2
Danh sách công việc: [
  { id: 1, task: 'Học JavaScript', completed: true },
  { id: 3, task: 'Đọc sách', completed: false },
  { id: 4, task: 'Đi dạo', completed: false }
]
```


## Giao diện Todo List

Trước khi bắt đầu viết logic cho Todo List, chúng ta cần tạo một giao diện đơn giản để hiển thị danh sách công việc và các nút thao tác.

### HTML:

```html
<!-- filepath: /Users/ken/Folders/Projects/polytuts-5/examples/todo-list-ui.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo List</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        .todo-container {
            max-width: 600px;
            margin: 0 auto;
        }
        .todo-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .todo-header input {
            flex: 1;
            margin-right: 10px;
            padding: 8px;
        }
        .todo-list {
            margin-top: 20px;
            list-style: none;
            padding: 0;
        }
        .todo-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px;
            border: 1px solid #ddd;
            margin-bottom: 10px;
            border-radius: 5px;
        }
        .todo-item.completed {
            text-decoration: line-through;
            color: gray;
        }
        .todo-item button {
            margin-left: 10px;
        }
    </style>
</head>
<body>
    <div class="todo-container">
        <div class="todo-header">
            <input type="text" id="todo-input" placeholder="Nhập công việc mới..." />
            <button id="add-todo-btn">Thêm</button>
        </div>
        <ul class="todo-list" id="todo-list"></ul>
    </div>
    <script src="todo-list-ui.js"></script>
</body>
</html>
```


### JavaScript:

```javascript
// filepath: /Users/ken/Folders/Projects/polytuts-5/examples/todo-list-ui.js
let todos = [];

// Thêm công việc mới
function addTodo(task) {
    const newTodo = { id: Date.now(), task, completed: false };
    todos.push(newTodo);
    renderTodos();
}

// Hiển thị danh sách công việc
function renderTodos() {
    const todoList = document.getElementById("todo-list");
    todoList.innerHTML = ""; // Xóa danh sách cũ

    todos.forEach((todo) => {
        const li = document.createElement("li");
        li.className = `todo-item ${todo.completed ? "completed" : ""}`;
        li.innerHTML = `
            <span>${todo.task}</span>
            <div>
                <button onclick="toggleComplete(${todo.id})">Hoàn thành</button>
                <button onclick="deleteTodo(${todo.id})">Xóa</button>
            </div>
        `;
        todoList.appendChild(li);
    });
}

// Cập nhật trạng thái hoàn thành
function toggleComplete(id) {
    todos = todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    renderTodos();
}

// Xóa công việc
function deleteTodo(id) {
    todos = todos.filter((todo) => todo.id !== id);
    renderTodos();
}

// Gắn sự kiện cho nút thêm
document.getElementById("add-todo-btn").addEventListener("click", () => {
    const input = document.getElementById("todo-input");
    const task = input.value.trim();
    if (task) {
        addTodo(task);
        input.value = ""; // Xóa nội dung input sau khi thêm
    }
});
```


## Kết luận

Các hàm xử lý mảng trong JavaScript rất mạnh mẽ và linh hoạt, giúp chúng ta thao tác với dữ liệu một cách dễ dàng. Hãy thực hành thường xuyên để nắm vững cách sử dụng chúng nhé! 🚀

Giao diện Todo List này cung cấp một cách trực quan để thêm, hiển thị, cập nhật và xóa công việc. Hãy thử tích hợp logic xử lý mảng vào giao diện này để hoàn thiện ứng dụng Todo List của bạn! 🚀
