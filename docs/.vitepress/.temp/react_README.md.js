import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"ReactJS Course - Quick Guide","description":"","frontmatter":{},"headers":[],"relativePath":"react/README.md","filePath":"react/README.md"}');
const _sfc_main = { name: "react/README.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="reactjs-course-quick-guide" tabindex="-1">ReactJS Course - Quick Guide <a class="header-anchor" href="#reactjs-course-quick-guide" aria-label="Permalink to &quot;ReactJS Course - Quick Guide&quot;">​</a></h1><h2 id="📚-structure" tabindex="-1">📚 Structure <a class="header-anchor" href="#📚-structure" aria-label="Permalink to &quot;📚 Structure&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docs/react/</span></span>
<span class="line"><span>├── index.md                 # Trang chủ khóa học</span></span>
<span class="line"><span>├── course-overview.md       # Tổng quan 16 buổi</span></span>
<span class="line"><span>├── final-project.md         # Dự án cuối khóa</span></span>
<span class="line"><span>├── lesson-1.md              # Buổi 1: React giới thiệu</span></span>
<span class="line"><span>├── lesson-2.md              # Buổi 2: Component &amp; Props</span></span>
<span class="line"><span>├── lesson-3.md              # Buổi 3: State &amp; Events</span></span>
<span class="line"><span>├── lesson-4.md              # Buổi 4: Conditional Rendering</span></span>
<span class="line"><span>├── lesson-5.md              # Buổi 5: List &amp; Key</span></span>
<span class="line"><span>├── lesson-6.md              # Buổi 6: Đánh giá giữa kỳ 1</span></span>
<span class="line"><span>├── lesson-7.md              # Buổi 7: useEffect</span></span>
<span class="line"><span>├── lesson-8.md              # Buổi 8: useRef &amp; Custom Hooks</span></span>
<span class="line"><span>├── lesson-9.md              # Buổi 9: Forms</span></span>
<span class="line"><span>├── lesson-10.md             # Buổi 10: Routing</span></span>
<span class="line"><span>├── lesson-11.md             # Buổi 11: Đánh giá giữa kỳ 2</span></span>
<span class="line"><span>├── lesson-12.md             # Buổi 12: Axios &amp; JSON-Server</span></span>
<span class="line"><span>├── lesson-13.md             # Buổi 13: CRUD Operations</span></span>
<span class="line"><span>├── lesson-14.md             # Buổi 14: Context API</span></span>
<span class="line"><span>├── lesson-15.md             # Buổi 15: Styling &amp; Responsive</span></span>
<span class="line"><span>└── lesson-16.md             # Buổi 16: Presentation</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="🎯-overview" tabindex="-1">🎯 Overview <a class="header-anchor" href="#🎯-overview" aria-label="Permalink to &quot;🎯 Overview&quot;">​</a></h2><p><strong>Khóa học ReactJS cơ bản đến nâng cao</strong> - 16 buổi, mỗi buổi 2 tiếng.</p><h3 id="giai-đoan-1-nen-tang-buoi-1-6" tabindex="-1">Giai đoạn 1: Nền tảng (Buổi 1-6) <a class="header-anchor" href="#giai-đoan-1-nen-tang-buoi-1-6" aria-label="Permalink to &quot;Giai đoạn 1: Nền tảng (Buổi 1-6)&quot;">​</a></h3><ul><li>React &amp; JSX</li><li>Components &amp; Props</li><li>State &amp; Events</li><li>Conditional Rendering</li><li>Lists &amp; Keys</li><li>Đánh giá giữa kỳ</li></ul><h3 id="giai-đoan-2-hooks-forms-buoi-7-11" tabindex="-1">Giai đoạn 2: Hooks &amp; Forms (Buổi 7-11) <a class="header-anchor" href="#giai-đoan-2-hooks-forms-buoi-7-11" aria-label="Permalink to &quot;Giai đoạn 2: Hooks &amp; Forms (Buổi 7-11)&quot;">​</a></h3><ul><li>useState &amp; useEffect</li><li>useRef &amp; Custom Hooks</li><li>Forms &amp; Validation</li><li>React Router</li><li>Đánh giá giữa kỳ</li></ul><h3 id="giai-đoan-3-api-project-buoi-12-16" tabindex="-1">Giai đoạn 3: API &amp; Project (Buổi 12-16) <a class="header-anchor" href="#giai-đoan-3-api-project-buoi-12-16" aria-label="Permalink to &quot;Giai đoạn 3: API &amp; Project (Buổi 12-16)&quot;">​</a></h3><ul><li>Axios &amp; JSON-Server</li><li>CRUD Operations</li><li>Context API</li><li>Styling &amp; Responsive</li><li>Final Project</li></ul><h2 id="📖-how-to-use" tabindex="-1">📖 How to Use <a class="header-anchor" href="#📖-how-to-use" aria-label="Permalink to &quot;📖 How to Use&quot;">​</a></h2><ol><li><strong>Start here</strong>: Read <code>index.md</code></li><li><strong>Overview</strong>: Check <code>course-overview.md</code></li><li><strong>Follow lessons</strong>: Go through lessons in order</li><li><strong>Practice</strong>: Complete all labs</li><li><strong>Project</strong>: Build final project</li></ol><h2 id="🎓-teaching-method" tabindex="-1">🎓 Teaching Method <a class="header-anchor" href="#🎓-teaching-method" aria-label="Permalink to &quot;🎓 Teaching Method&quot;">​</a></h2><p><strong>20% Theory / 80% Practice</strong></p><p>Each lesson includes:</p><ul><li>✅ Learning objectives (SMART)</li><li>✅ Main content</li><li>✅ Code examples</li><li>✅ Lab exercises (2-4)</li><li>✅ Quick quiz (5 questions)</li><li>✅ Summary &amp; checklist</li></ul><h2 id="🎯-learning-outcomes" tabindex="-1">🎯 Learning Outcomes <a class="header-anchor" href="#🎯-learning-outcomes" aria-label="Permalink to &quot;🎯 Learning Outcomes&quot;">​</a></h2><p>After completing this course, students can:</p><ul><li>Build React applications from scratch</li><li>Use React Hooks effectively</li><li>Handle forms and validation</li><li>Implement routing</li><li>Connect to APIs</li><li>Organize code professionally</li><li>Build responsive UIs</li></ul><hr><p><strong>Built with ❤️ for Vietnamese students</strong></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("react/README.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const README = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  README as default
};
