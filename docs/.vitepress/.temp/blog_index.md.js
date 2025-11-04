import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Blog | Polytuts Learning","description":"Bài viết và cập nhật mới nhất về lập trình web, JavaScript, React, Node.js và hơn thế nữa","frontmatter":{"title":"Blog | Polytuts Learning","description":"Bài viết và cập nhật mới nhất về lập trình web, JavaScript, React, Node.js và hơn thế nữa"},"headers":[],"relativePath":"blog/index.md","filePath":"blog/index.md"}');
const _sfc_main = { name: "blog/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="blog" tabindex="-1">Blog <a class="header-anchor" href="#blog" aria-label="Permalink to &quot;Blog&quot;">​</a></h1><p>Chào mừng bạn đến với blog của Polytuts! Đây là nơi chúng tôi chia sẻ các bài viết, hướng dẫn, mẹo và thông tin mới nhất về lập trình web.</p><h2 id="bai-viet-moi-nhat" tabindex="-1">Bài viết mới nhất <a class="header-anchor" href="#bai-viet-moi-nhat" aria-label="Permalink to &quot;Bài viết mới nhất&quot;">​</a></h2><div class="blog-post-grid"><div class="blog-post-card"><a href="/blog/intro-to-web-development"><div class="post-thumbnail"></div><div class="post-content"><h3>Giới thiệu về phát triển web năm 2023</h3><p class="post-date">25/10/2023</p><p class="post-excerpt">Tổng quan về các công nghệ phát triển web hiện đại và lộ trình học tập dành cho người mới bắt đầu.</p><span class="read-more">Đọc tiếp →</span></div></a></div><div class="blog-post-card"><a href="/blog/javascript-tips"><div class="post-thumbnail"></div><div class="post-content"><h3>10 thủ thuật JavaScript cho người mới bắt đầu</h3><p class="post-date">18/10/2023</p><p class="post-excerpt">Những thủ thuật và mẹo hay giúp cải thiện kỹ năng JavaScript của bạn ngay từ đầu.</p><span class="read-more">Đọc tiếp →</span></div></a></div><div class="blog-post-card"><a href="/blog/css-grid-vs-flexbox"><div class="post-thumbnail"></div><div class="post-content"><h3>CSS Grid vs Flexbox: Khi nào nên dùng cái nào?</h3><p class="post-date">10/10/2023</p><p class="post-excerpt">So sánh hai kỹ thuật layout phổ biến nhất trong CSS và hướng dẫn cách chọn công cụ phù hợp cho từng trường hợp.</p><span class="read-more">Đọc tiếp →</span></div></a></div></div><h2 id="chu-đe-pho-bien" tabindex="-1">Chủ đề phổ biến <a class="header-anchor" href="#chu-đe-pho-bien" aria-label="Permalink to &quot;Chủ đề phổ biến&quot;">​</a></h2><div class="topic-tags"><a href="/blog/tag/javascript" class="topic-tag">JavaScript</a><a href="/blog/tag/react" class="topic-tag">React</a><a href="/blog/tag/nodejs" class="topic-tag">Node.js</a><a href="/blog/tag/html-css" class="topic-tag">HTML &amp; CSS</a><a href="/blog/tag/web-performance" class="topic-tag">Web Performance</a><a href="/blog/tag/tutorials" class="topic-tag">Hướng dẫn</a></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blog/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
