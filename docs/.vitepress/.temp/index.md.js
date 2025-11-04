import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home","hero":{"name":"Lê Trọng Đạt","text":"Học lập trình dễ dàng và hiệu quả cùng Thầy nhé","tagline":"Nền tảng học tập tương tác giúp các em nắm vững kiến thức lập trình từ cơ bản đến nâng cao","actions":[{"theme":"brand","text":"Bắt đầu ngay","link":"/nodejs/"},{"theme":"alt","text":"Xem GitHub","link":"https://github.com/datlt2306"}]},"features":[{"icon":"🚀","title":"JavaScript","details":"Nền tảng cơ bản cho mọi nhà phát triển web","link":"/#/"},{"icon":"⚛️","title":"React","details":"Thư viện UI phổ biến nhất cho ứng dụng web hiện đại","link":"/#/"},{"icon":"📡","title":"Node.js","details":"Phát triển ứng dụng phía máy chủ với JavaScript","link":"/nodejs/"},{"icon":"🗄️","title":"MongoDB","details":"Cơ sở dữ liệu NoSQL cho ứng dụng của bạn","link":"/#/"}]},"headers":[],"relativePath":"index.md","filePath":"index.md"}');
const _sfc_main = { name: "index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
