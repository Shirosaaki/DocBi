import { _ as _export_sfc, o as useDocus, p as __nuxt_component_0$2, a as __nuxt_component_0$6, n as __nuxt_component_0$3 } from './server.mjs';
import { useSSRContext, defineComponent, unref, withCtx, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'shiki/core';
import '@shikijs/transformers';
import 'unified';
import 'mdast-util-to-string';
import 'micromark';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'micromark-util-sanitize-uri';
import 'slugify';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'remark-emoji';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'detab';
import 'hast-util-to-string';
import 'github-slugger';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'nanoid';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import '@vueuse/integrations/useFuse';
import '@vueuse/integrations/useFocusTrap';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DocsAside",
  __ssrInlineRender: true,
  setup(__props) {
    const { tree } = useDocus();
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_DocsAsideTree = __nuxt_component_0$2;
      const _component_NuxtLink = __nuxt_component_0$6;
      const _component_Icon = __nuxt_component_0$3;
      _push(`<nav${ssrRenderAttrs(_attrs)} data-v-89fb8999>`);
      if (((_a = unref(tree)) == null ? void 0 : _a.length) > 0) {
        _push(ssrRenderComponent(_component_DocsAsideTree, { links: unref(tree) }, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "go-back-link"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "heroicons-outline:arrow-left",
                class: "icon"
              }, null, _parent2, _scopeId));
              _push2(`<span class="text" data-v-89fb8999${_scopeId}>Go back</span>`);
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "heroicons-outline:arrow-left",
                  class: "icon"
                }),
                createVNode("span", { class: "text" }, "Go back")
              ];
            }
          }),
          _: 1
        }, _parent));
      }
      _push(`</nav>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/docus/components/docs/DocsAside.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-89fb8999"]]);

export { __nuxt_component_1 as default };
//# sourceMappingURL=DocsAside-HZCW_D7O.mjs.map
