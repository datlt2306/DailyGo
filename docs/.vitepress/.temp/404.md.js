import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
window.addEventListener("DOMContentLoaded", function() {
  const currentPath = window.location.pathname;
  const referrerUrl = document.referrer;
  const invalidPathEl = document.getElementById("invalid-path");
  if (invalidPathEl) {
    if (referrerUrl && !referrerUrl.includes("/404")) {
      invalidPathEl.textContent = `Đường dẫn không hợp lệ: "${referrerUrl}"`;
    } else if (currentPath.includes("/nodejs/modules.html")) {
      invalidPathEl.textContent = `Đường dẫn không hợp lệ: "${currentPath}"`;
    } else if (currentPath !== "/404.html" && currentPath !== "/404") {
      invalidPathEl.textContent = `Đường dẫn không hợp lệ: "${currentPath}"`;
    }
  }
});
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"404.md","filePath":"404.md"}');
const _sfc_main = { name: "404.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="not-found-container"><div class="not-found-content"><div class="not-found-header"><h1 class="not-found-title">404</h1><div class="not-found-divider"></div><h2 class="not-found-subtitle">Trang không tìm thấy</h2></div><pre><code>&lt;p class=&quot;not-found-message&quot;&gt;
  Rất tiếc, trang bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển.
  &lt;br&gt;
  &lt;span id=&quot;invalid-path&quot; class=&quot;error-path&quot;&gt;&lt;/span&gt;
&lt;/p&gt;

&lt;div class=&quot;not-found-actions&quot;&gt;
  &lt;a href=&quot;/&quot; class=&quot;action-button primary&quot;&gt;Về trang chủ&lt;/a&gt;
  &lt;a href=&quot;/javascript/&quot; class=&quot;action-button secondary&quot;&gt;Học JavaScript&lt;/a&gt;
&lt;/div&gt;
</code></pre></div><div class="not-found-suggestions"><h3>Có thể bạn đang tìm:</h3><ul><li><a href="/javascript/">Khóa học JavaScript</a></li><li><a href="/react/">Khóa học React</a></li><li><a href="/nodejs/">Khóa học Node.js</a></li><li><a href="/mongodb/">Khóa học MongoDB</a></li></ul></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("404.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _404 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _404 as default
};
