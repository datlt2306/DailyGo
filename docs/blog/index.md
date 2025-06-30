---
title: Blog | Polytuts Learning
description: Bài viết và cập nhật mới nhất về lập trình web, JavaScript, React, Node.js và hơn thế nữa
---
# Blog

Chào mừng bạn đến với blog của Polytuts! Đây là nơi chúng tôi chia sẻ các bài viết, hướng dẫn, mẹo và thông tin mới nhất về lập trình web.

## Bài viết mới nhất

<div class="blog-post-grid">
  <div class="blog-post-card">
    <a href="/blog/intro-to-web-development">
      <div class="post-thumbnail">
        <!-- <img src="/images/web-dev-intro.jpg" alt="Giới thiệu về phát triển web" /> -->
      </div>
      <div class="post-content">
        <h3>Giới thiệu về phát triển web năm 2023</h3>
        <p class="post-date">25/10/2023</p>
        <p class="post-excerpt">Tổng quan về các công nghệ phát triển web hiện đại và lộ trình học tập dành cho người mới bắt đầu.</p>
        <span class="read-more">Đọc tiếp →</span>
      </div>
    </a>
  </div>
  
  <div class="blog-post-card">
    <a href="/blog/javascript-tips">
      <div class="post-thumbnail">
        <!-- <img src="/images/js-tips.jpg" alt="JavaScript Tips" /> -->
      </div>
      <div class="post-content">
        <h3>10 thủ thuật JavaScript cho người mới bắt đầu</h3>
        <p class="post-date">18/10/2023</p>
        <p class="post-excerpt">Những thủ thuật và mẹo hay giúp cải thiện kỹ năng JavaScript của bạn ngay từ đầu.</p>
        <span class="read-more">Đọc tiếp →</span>
      </div>
    </a>
  </div>
  
  <div class="blog-post-card">
    <a href="/blog/css-grid-vs-flexbox">
      <div class="post-thumbnail">
        <!-- <img src="/images/css-grid-flexbox.jpg" alt="CSS Grid vs Flexbox" /> -->
      </div>
      <div class="post-content">
        <h3>CSS Grid vs Flexbox: Khi nào nên dùng cái nào?</h3>
        <p class="post-date">10/10/2023</p>
        <p class="post-excerpt">So sánh hai kỹ thuật layout phổ biến nhất trong CSS và hướng dẫn cách chọn công cụ phù hợp cho từng trường hợp.</p>
        <span class="read-more">Đọc tiếp →</span>
      </div>
    </a>
  </div>
</div>

## Chủ đề phổ biến

<div class="topic-tags">
  <a href="/blog/tag/javascript" class="topic-tag">JavaScript</a>
  <a href="/blog/tag/react" class="topic-tag">React</a>
  <a href="/blog/tag/nodejs" class="topic-tag">Node.js</a>
  <a href="/blog/tag/html-css" class="topic-tag">HTML & CSS</a>
  <a href="/blog/tag/web-performance" class="topic-tag">Web Performance</a>
  <a href="/blog/tag/tutorials" class="topic-tag">Hướng dẫn</a>
</div>

<style>
.blog-post-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.blog-post-card {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: var(--vp-c-bg-soft);
}

.blog-post-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.blog-post-card a {
  text-decoration: none;
  color: inherit;
  display: block;
}

.post-thumbnail {
  height: 180px;
  overflow: hidden;
}

.post-thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.blog-post-card:hover .post-thumbnail img {
  transform: scale(1.05);
}

.post-content {
  padding: 1.5rem;
}

.post-content h3 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
  color: var(--vp-c-brand);
}

.post-date {
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
  margin-bottom: 1rem;
}

.post-excerpt {
  font-size: 0.95rem;
  margin-bottom: 1rem;
  color: var(--vp-c-text-1);
  line-height: 1.5;
}

.read-more {
  color: var(--vp-c-brand);
  font-weight: 500;
  font-size: 0.95rem;
}

.topic-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin: 1.5rem 0;
}

.topic-tag {
  display: inline-block;
  padding: 0.4rem 1rem;
  background-color: var(--vp-c-bg-mute);
  color: var(--vp-c-brand);
  border-radius: 20px;
  font-size: 0.85rem;
  text-decoration: none;
  transition: background-color 0.2s ease;
  border: 1px solid var(--vp-c-divider);
}

.topic-tag:hover {
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-brand-dark);
}

@media (max-width: 768px) {
  .blog-post-grid {
    grid-template-columns: 1fr;
  }
}
</style>
