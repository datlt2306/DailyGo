---
title: 10 thủ thuật JavaScript cho người mới bắt đầu | Blog Polytuts
description: Những thủ thuật và mẹo hay giúp cải thiện kỹ năng JavaScript của bạn ngay từ đầu
date: 2023-10-18
author: Đội ngũ Polytuts
tags: ["javascript", "tips", "beginner"]
---
# 10 thủ thuật JavaScript cho người mới bắt đầu

<div class="blog-post-meta">
  <div class="post-date">Ngày đăng: 18/10/2023</div>
  <div class="post-author">Tác giả: Đội ngũ Polytuts</div>
  <div class="post-tags">
    <span class="tag">javascript</span>
    <span class="tag">tips</span>
    <span class="tag">beginner</span>
  </div>
</div>

<img src="https://via.placeholder.com/1200x600.png?text=JavaScript+Tips+and+Tricks" alt="JavaScript Tips and Tricks" style="width:100%; border-radius:8px; margin-bottom:2rem;">

## Cải thiện kỹ năng JavaScript của bạn

JavaScript là một trong những ngôn ngữ lập trình phổ biến nhất thế giới. Dưới đây là 10 thủ thuật giúp bạn cải thiện kỹ năng JavaScript của mình nhanh chóng.

### 1. Hiểu rõ về Scope

Scope xác định phạm vi truy cập của biến. JavaScript có Global scope, Function scope và Block scope (với let và const).

```javascript
// Global scope
const globalVar = "Tôi là biến toàn cục";

function exampleFunction() {
    // Function scope
    const functionVar = "Tôi chỉ tồn tại trong hàm này";

    if (true) {
        // Block scope
        let blockVar = "Tôi chỉ tồn tại trong block này";
        console.log(blockVar); // Hoạt động
    }

    // console.log(blockVar);  // Lỗi: blockVar không tồn tại ở đây
}
```

### 2. Sử dụng Arrow Functions

Arrow functions ngắn gọn hơn và không ràng buộc `this` của riêng nó.

```javascript
// Function truyền thống
function add(a, b) {
    return a + b;
}

// Arrow function
const addArrow = (a, b) => a + b;

// Với nhiều câu lệnh
const process = (x) => {
    const result = x * 2;
    return result + 10;
};
```

### 3. Hiểu Truthy và Falsy Values

JavaScript coi một số giá trị là "falsy" và các giá trị khác là "truthy".

```javascript
// Falsy values: false, 0, '', null, undefined, NaN

// Kiểm tra nhanh một biến có tồn tại hoặc có giá trị
const username = "";
if (username) {
    console.log("Username tồn tại và không rỗng");
} else {
    console.log("Username không tồn tại hoặc rỗng");
}
```

### 4. Sử dụng Template Literals

Template literals giúp tạo chuỗi dễ đọc hơn.

```javascript
const name = "John";
const job = "developer";

// Cách cũ
const message1 = "Xin chào, tôi là " + name + " và tôi là một " + job + ".";

// Với template literals
const message2 = `Xin chào, tôi là ${name} và tôi là một ${job}.`;
```

### 5. Sử dụng Destructuring

Destructuring giúp trích xuất dữ liệu từ arrays và objects một cách dễ dàng.

```javascript
// Destructuring objects
const person = { name: "Anna", age: 30, job: "developer" };
const { name, age } = person;

console.log(name); // 'Anna'
console.log(age); // 30

// Destructuring arrays
const colors = ["red", "green", "blue"];
const [firstColor, secondColor] = colors;

console.log(firstColor); // 'red'
console.log(secondColor); // 'green'
```

### 6. Hiểu Async/Await

Async/await giúp làm việc với code bất đồng bộ dễ dàng hơn.

```javascript
// Sử dụng promises
fetch("https://api.example.com/data")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));

// Sử dụng async/await
async function fetchData() {
    try {
        const response = await fetch("https://api.example.com/data");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error:", error);
    }
}
```

### 7. Sử dụng Array Methods

JavaScript có nhiều phương thức mạnh mẽ để làm việc với arrays.

```javascript
const numbers = [1, 2, 3, 4, 5];

// map - tạo array mới bằng cách biến đổi từng phần tử
const doubled = numbers.map((x) => x * 2); // [2, 4, 6, 8, 10]

// filter - tạo array mới chỉ với các phần tử thỏa mãn điều kiện
const evens = numbers.filter((x) => x % 2 === 0); // [2, 4]

// reduce - gộp tất cả phần tử thành một giá trị
const sum = numbers.reduce((total, current) => total + current, 0); // 15
```

### 8. Sử dụng Optional Chaining

Optional chaining (?.) giúp truy cập thuộc tính lồng nhau mà không gây lỗi.

```javascript
const user = {
    profile: {
        // address không tồn tại
    },
};

// Cách cũ - dễ lỗi
let city;
if (user && user.profile && user.profile.address) {
    city = user.profile.address.city;
}

// Với optional chaining
const city = user?.profile?.address?.city; // undefined, không lỗi
```

### 9. Sử dụng Spread Operator

Spread operator (...) giúp làm việc với arrays và objects dễ dàng hơn.

```javascript
// Sao chép arrays
const originalArray = [1, 2, 3];
const newArray = [...originalArray]; // [1, 2, 3]

// Kết hợp arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combined = [...array1, ...array2]; // [1, 2, 3, 4, 5, 6]

// Sao chép và mở rộng objects
const originalObj = { x: 1, y: 2 };
const newObj = { ...originalObj, z: 3 }; // { x: 1, y: 2, z: 3 }
```

### 10. Sử dụng Modern Modules

Tổ chức code của bạn bằng ES modules để dễ bảo trì và tái sử dụng.

```javascript
// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// app.js
import { add, subtract } from "./math.js";

console.log(add(5, 3)); // 8
console.log(subtract(5, 3)); // 2
```

## Tiếp theo là gì?

Sau khi nắm vững những thủ thuật cơ bản này, bạn có thể tiếp tục học về:

-   Framework JavaScript (React, Vue, Angular)
-   TypeScript - JavaScript với kiểu dữ liệu tĩnh
-   Testing trong JavaScript
-   Thực hành nhiều hơn với các dự án thực tế

Hãy nhớ rằng: cách tốt nhất để học JavaScript là thực hành mỗi ngày!


<div class="post-navigation">
  <div class="prev-post">
    <span>← Bài trước</span>
    <a href="/blog/intro-to-web-development">Giới thiệu về phát triển web năm 2023</a>
  </div>
  <div class="next-post">
    <span>Bài tiếp theo →</span>
    <a href="/blog/css-grid-vs-flexbox">CSS Grid vs Flexbox: Khi nào nên dùng cái nào?</a>
  </div>
</div>

<div class="related-posts">
  <h3>Bài viết liên quan</h3>
  <div class="related-posts-grid">
    <div class="related-post-card">
      <a href="/blog/intro-to-web-development">
        <img src="https://via.placeholder.com/400x225.png?text=Web+Development+Introduction" alt="Giới thiệu về phát triển web" />
        <h4>Giới thiệu về phát triển web năm 2023</h4>
      </a>
    </div>
    <div class="related-post-card">
      <a href="/blog/css-grid-vs-flexbox">
        <img src="https://via.placeholder.com/400x225.png?text=CSS+Grid+vs+Flexbox" alt="CSS Grid vs Flexbox" />
        <h4>CSS Grid vs Flexbox: Khi nào nên dùng cái nào?</h4>
      </a>
    </div>
  </div>
</div>

<style>
.blog-post-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--vp-c-divider);
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}

.post-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background-color: var(--vp-c-bg-mute);
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  white-space: nowrap;
}

.post-navigation {
  display: flex;
  justify-content: space-between;
  margin: 3rem 0;
  padding: 1.5rem 0;
  border-top: 1px solid var(--vp-c-divider);
  border-bottom: 1px solid var(--vp-c-divider);
}

.prev-post, .next-post {
  display: flex;
  flex-direction: column;
}

.prev-post span, .next-post span {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  margin-bottom: 0.25rem;
}

.prev-post a, .next-post a {
  font-weight: 500;
  color: var(--vp-c-brand);
}

.related-posts {
  margin-top: 3rem;
}

.related-posts h3 {
  margin-bottom: 1.5rem;
}

.related-posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
}

.related-post-card {
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
}

.related-post-card:hover {
  transform: translateY(-5px);
}

.related-post-card a {
  color: inherit;
  text-decoration: none;
}

.related-post-card img {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.related-post-card h4 {
  margin: 0;
  padding: 1rem;
  font-size: 1rem;
  line-height: 1.4;
}

@media (max-width: 640px) {
  .blog-post-meta {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .post-navigation {
    flex-direction: column;
    gap: 1rem;
  }
  
  .next-post {
    align-self: flex-start;
  }
}
</style>
