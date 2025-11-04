import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Ghi Chú Nhanh Về Bài Học Tiếp Theo","description":"","frontmatter":{},"headers":[],"relativePath":"wordpress/become-wordpress-developer/40-quick-note-about-lesson.md","filePath":"wordpress/become-wordpress-developer/40-quick-note-about-lesson.md"}');
const _sfc_main = { name: "wordpress/become-wordpress-developer/40-quick-note-about-lesson.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ghi-chu-nhanh-ve-bai-hoc-tiep-theo" tabindex="-1">Ghi Chú Nhanh Về Bài Học Tiếp Theo <a class="header-anchor" href="#ghi-chu-nhanh-ve-bai-hoc-tiep-theo" aria-label="Permalink to &quot;Ghi Chú Nhanh Về Bài Học Tiếp Theo&quot;">​</a></h1><h2 id="luu-y-quan-trong" tabindex="-1">Lưu ý quan trọng <a class="header-anchor" href="#luu-y-quan-trong" aria-label="Permalink to &quot;Lưu ý quan trọng&quot;">​</a></h2><p>Trong bài học tiếp theo, khi chúng ta tạo loại bài đăng <strong>Professor</strong>, hãy nhớ thêm dòng code sau:</p><div class="language-php vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&#39;show_in_rest&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"> =&gt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> true</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Dòng này rất quan trọng để đảm bảo loại bài đăng <strong>Professor</strong> hoạt động với trình chỉnh sửa khối (block editor) của WordPress.</p><h2 id="tai-lieu-ho-tro" tabindex="-1">Tài liệu hỗ trợ <a class="header-anchor" href="#tai-lieu-ho-tro" aria-label="Permalink to &quot;Tài liệu hỗ trợ&quot;">​</a></h2><p>Bạn có thể tin tưởng rằng các tệp zip đi kèm với mỗi bài học đều được cập nhật đầy đủ và chính xác. Hãy kiểm tra chúng nếu cần tham khảo thêm.</p><p>Chúc các bạn học tốt! 🚀<br> — <strong>Thầy Đạt 🧡</strong></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("wordpress/become-wordpress-developer/40-quick-note-about-lesson.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _40QuickNoteAboutLesson = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _40QuickNoteAboutLesson as default
};
