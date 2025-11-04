import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Images Directory","description":"","frontmatter":{},"headers":[],"relativePath":"public/images/placeholder.md","filePath":"public/images/placeholder.md"}');
const _sfc_main = { name: "public/images/placeholder.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="images-directory" tabindex="-1">Images Directory <a class="header-anchor" href="#images-directory" aria-label="Permalink to &quot;Images Directory&quot;">​</a></h1><p>This directory contains images used throughout the documentation site.</p><p>You should add the following images to this directory:</p><ul><li>react-logo.png</li><li>nodejs-logo.png</li><li>mongodb-logo.png</li><li>javascript-logo.png</li></ul><p>The following placeholder images are available for blog posts:</p><ul><li>web-dev-intro.jpg - Placeholder for web development introduction</li><li>js-tips.jpg - Placeholder for JavaScript tips articles</li><li>css-grid-flexbox.jpg - Placeholder for CSS layout articles</li></ul><p>You can replace these with actual images as needed.</p><p>Images can be downloaded from official sources or created with appropriate attribution.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("public/images/placeholder.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const placeholder = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  placeholder as default
};
