import __nuxt_component_1 from './ButtonLink-C2-Cucz7.mjs';
import __nuxt_component_2 from './Terminal-BX4UxwX2.mjs';
import __nuxt_component_3 from './VideoPlayer-lo64GPyE.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderSlot as ssrRenderSlot$1 } from 'vue/server-renderer';
import { s as ssrRenderSlot } from './ssrSlot-DzHwVkPX.mjs';
import { _ as _export_sfc } from './server.mjs';
import './node-BhJxMdSJ.mjs';
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
import './NuxtImg-BlBCUr8y.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BlockHero",
  __ssrInlineRender: true,
  props: {
    cta: {
      type: Array,
      required: false,
      default: () => []
    },
    secondary: {
      type: Array,
      required: false,
      default: () => []
    },
    video: {
      type: String,
      required: false,
      default: ""
    },
    snippet: {
      type: [Array, String],
      required: false,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ButtonLink = __nuxt_component_1;
      const _component_Terminal = __nuxt_component_2;
      const _component_VideoPlayer = __nuxt_component_3;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "block-hero" }, _attrs))} data-v-56a0be1c><div class="layout" data-v-56a0be1c><div class="content" data-v-56a0be1c>`);
      if (_ctx.$slots.announce) {
        _push(`<p class="announce" data-v-56a0be1c>`);
        ssrRenderSlot(_ctx.$slots, "announce", { unwrap: "p" }, null, _push, _parent);
        _push(`</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<h1 class="title" data-v-56a0be1c>`);
      ssrRenderSlot(_ctx.$slots, "title", { unwrap: "p" }, () => {
        _push(` Hero Title `);
      }, _push, _parent);
      _push(`</h1><p class="description" data-v-56a0be1c>`);
      ssrRenderSlot(_ctx.$slots, "description", { unwrap: "p" }, () => {
        _push(` Hero default description. `);
      }, _push, _parent);
      _push(`</p>`);
      if (_ctx.$slots.extra) {
        _push(`<div class="extra" data-v-56a0be1c>`);
        ssrRenderSlot(_ctx.$slots, "extra", { unwrap: "p" }, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="actions" data-v-56a0be1c>`);
      if (_ctx.$slots.actions) {
        ssrRenderSlot(_ctx.$slots, "actions", { unwrap: "p" }, null, _push, _parent);
      } else {
        _push(`<!--[-->`);
        if (__props.cta) {
          _push(ssrRenderComponent(_component_ButtonLink, {
            class: "cta",
            bold: "",
            size: "medium",
            href: __props.cta[1]
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(__props.cta[0])}`);
              } else {
                return [
                  createTextVNode(toDisplayString(__props.cta[0]), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        if (__props.secondary) {
          _push(`<a${ssrRenderAttr("href", __props.secondary[1])} class="secondary" data-v-56a0be1c>${ssrInterpolate(__props.secondary[0])}</a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      }
      _push(`</div></div><div class="support" data-v-56a0be1c>`);
      ssrRenderSlot$1(_ctx.$slots, "support", {}, () => {
        if (__props.snippet) {
          _push(ssrRenderComponent(_component_Terminal, { content: __props.snippet }, null, _parent));
        } else if (__props.video) {
          _push(ssrRenderComponent(_component_VideoPlayer, { src: __props.video }, null, _parent));
        } else {
          _push(`<!---->`);
        }
      }, _push, _parent);
      _push(`</div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/elements/components/landing/BlockHero.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BlockHero = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-56a0be1c"]]);

export { BlockHero as default };
//# sourceMappingURL=BlockHero-CoBFF-_R.mjs.map
