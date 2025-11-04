import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"blog/security-wordpress/setup-all-security-for-website/40-tools.md","filePath":"blog/security-wordpress/setup-all-security-for-website/40-tools.md"}');
const _sfc_main = { name: "blog/security-wordpress/setup-all-security-for-website/40-tools.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blog/security-wordpress/setup-all-security-for-website/40-tools.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _40Tools = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _40Tools as default
};
