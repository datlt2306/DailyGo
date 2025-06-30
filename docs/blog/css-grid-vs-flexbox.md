---
title: CSS Grid vs Flexbox - Khi nào nên dùng cái nào? | Blog Polytuts
description: So sánh hai kỹ thuật layout phổ biến nhất trong CSS và hướng dẫn cách chọn công cụ phù hợp cho từng trường hợp
date: 2023-10-10
author: Đội ngũ Polytuts
tags: ["css", "layout", "flexbox", "grid"]
---
# CSS Grid vs Flexbox: Khi nào nên dùng cái nào?

<div class="blog-post-meta">
  <div class="post-date">Ngày đăng: 10/10/2023</div>
  <div class="post-author">Tác giả: Đội ngũ Polytuts</div>
  <div class="post-tags">
    <span class="tag">css</span>
    <span class="tag">layout</span>
    <span class="tag">flexbox</span>
    <span class="tag">grid</span>
  </div>
</div>

<img src="https://via.placeholder.com/1200x600.png?text=CSS+Grid+vs+Flexbox" alt="CSS Grid vs Flexbox" style="width:100%; border-radius:8px; margin-bottom:2rem;">

## Giới thiệu

Flexbox và Grid là hai hệ thống layout mạnh mẽ trong CSS hiện đại. Mặc dù cả hai đều giúp tạo các bố cục phức tạp, nhưng chúng được thiết kế để giải quyết các vấn đề khác nhau. Bài viết này sẽ giúp bạn hiểu khi nào nên sử dụng Flexbox và khi nào nên sử dụng Grid.

## Flexbox là gì?

Flexbox (Flexible Box Layout) là một phương pháp bố trí một chiều, có nghĩa là nó xử lý layout theo một trục duy nhất (ngang hoặc dọc).

```css
.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.item {
    flex: 1;
}
```

### Ưu điểm của Flexbox

1. **Đơn giản hóa việc căn chỉnh**: Dễ dàng căn giữa, căn trái, phải, trên, dưới
2. **Thứ tự linh hoạt**: Thay đổi thứ tự các phần tử không cần thay đổi HTML
3. **Phân phối không gian**: Phân chia không gian một cách thông minh

### Ví dụ Flexbox

Một thanh điều hướng đơn giản:

```html
<nav class="navbar">
    <div class="logo">Logo</div>
    <ul class="menu">
        <li><a href="#">Trang chủ</a></li>
        <li><a href="#">Sản phẩm</a></li>
        <li><a href="#">Dịch vụ</a></li>
        <li><a href="#">Liên hệ</a></li>
    </ul>
</nav>
```

```css
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
}

.menu {
    display: flex;
    list-style: none;
    gap: 1rem;
}
```

## Grid là gì?

CSS Grid là hệ thống bố trí hai chiều, cho phép bạn quản lý cả hàng và cột cùng một lúc.

```css
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 20px;
}
```

### Ưu điểm của Grid

1. **Bố cục hai chiều**: Kiểm soát đồng thời cả hàng và cột
2. **Định vị chính xác**: Đặt các phần tử ở vị trí chính xác trong lưới
3. **Bố cục phức tạp**: Tạo các layout phức tạp dễ dàng hơn
4. **Overlap**: Cho phép các phần tử chồng lên nhau

### Ví dụ Grid

Một gallery hình ảnh:

```html
<div class="gallery">
    <div class="gallery-item">Item 1</div>
    <div class="gallery-item">Item 2</div>
    <div class="gallery-item">Item 3</div>
    <div class="gallery-item">Item 4</div>
    <div class="gallery-item">Item 5</div>
    <div class="gallery-item">Item 6</div>
</div>
```

```css
.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-auto-rows: minmax(200px, auto);
    gap: 20px;
}

.gallery-item {
    background-color: #f8f9fa;
    padding: 20px;
    border-radius: 8px;
}
```

## So sánh: Khi nào nên sử dụng cái nào?

### Sử dụng Flexbox khi:

1. **Bạn cần một bố cục một chiều** (hàng hoặc cột)
2. **Bạn cần căn chỉnh các phần tử** (căn giữa, căn trái, phải)
3. **Bạn có một nhóm nhỏ các phần tử** với kích thước không đồng đều
4. **Bạn cần tạo một thanh điều hướng** hoặc menu
5. **Bạn cần căn chỉnh các phần tử bên trong một container**

```css
/* Ví dụ Flexbox cho menu ngang */
.menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
```

### Sử dụng Grid khi:

1. **Bạn cần một bố cục hai chiều** (hàng và cột)
2. **Bạn có một bố cục phức tạp** với nhiều hàng và cột
3. **Bạn cần kiểm soát cả hai trục** một cách chính xác
4. **Bạn cần tạo một bố cục trang** hoàn chỉnh
5. **Bạn cần các phần tử chồng lên nhau**

```css
/* Ví dụ Grid cho layout trang */
.page-layout {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
        "header header"
        "sidebar main"
        "footer footer";
    min-height: 100vh;
}
```

## Kết hợp Flexbox và Grid

Trong nhiều trường hợp, kết hợp cả hai kỹ thuật sẽ mang lại kết quả tốt nhất.

```css
/* Grid cho layout tổng thể */
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

/* Flexbox cho nội dung bên trong mỗi item */
.item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
```

## Ví dụ thực tế: Dashboard Layout

```html
<div class="dashboard">
    <header class="header">Header</header>
    <nav class="sidebar">Sidebar</nav>
    <main class="content">
        <div class="card-container">
            <div class="card">Card 1</div>
            <div class="card">Card 2</div>
            <div class="card">Card 3</div>
        </div>
    </main>
    <footer class="footer">Footer</footer>
</div>
```

```css
/* Grid cho layout tổng thể */
.dashboard {
    display: grid;
    grid-template-columns: 250px 1fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
        "header header"
        "sidebar content"
        "footer footer";
    min-height: 100vh;
}

.header {
    grid-area: header;
}
.sidebar {
    grid-area: sidebar;
}
.content {
    grid-area: content;
}
.footer {
    grid-area: footer;
}

/* Flexbox cho container của card */
.card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.card {
    flex: 1 1 300px;
    display: flex;
    flex-direction: column;
}
```

## Kết luận

Không có câu trả lời đúng hay sai tuyệt đối khi lựa chọn giữa Flexbox và Grid. Mỗi công cụ có điểm mạnh riêng và được thiết kế để giải quyết các vấn đề khác nhau:

-   **Flexbox** tuyệt vời cho bố cục một chiều và căn chỉnh nội dung.
-   **Grid** mạnh mẽ cho bố cục hai chiều phức tạp.

Hiểu rõ cả hai và biết khi nào sử dụng cái nào sẽ giúp bạn tạo ra các layout web hiệu quả và dễ bảo trì hơn.


<div class="post-navigation">
  <div class="prev-post">
    <span>← Bài trước</span>
    <a href="/blog/javascript-tips">10 thủ thuật JavaScript cho người mới bắt đầu</a>
  </div>
  <div class="next-post">
    <span>Bài tiếp theo →</span>
    <a href="/blog">Quay lại Blog</a>
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
      <a href="/blog/javascript-tips">
        <img src="https://via.placeholder.com/400x225.png?text=JavaScript+Tips" alt="JavaScript Tips" />
        <h4>10 thủ thuật JavaScript cho người mới bắt đầu</h4>
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
