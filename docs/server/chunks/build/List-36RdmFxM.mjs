import { n as __nuxt_component_0$3, _ as _export_sfc } from './server.mjs';
import { _ as __nuxt_component_0 } from './MDCSlot-CQPXy3w9.mjs';
import { defineComponent, useSlots, computed, h, useSSRContext } from 'vue';
import { u as unwrap, f as flatUnwrap } from './node-BhJxMdSJ.mjs';
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
import 'vue/server-renderer';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'nanoid';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import '@vueuse/integrations/useFuse';
import '@vueuse/integrations/useFocusTrap';

const useUnwrap = () => ({
  unwrap,
  flatUnwrap
});
const iconTypeMap = {
  primary: "heroicons-outline:check",
  info: "heroicons-outline:information-circle",
  success: "heroicons-outline:check-circle",
  warning: "heroicons-outline:exclamation",
  danger: "heroicons-outline:exclamation-circle"
};
const _sfc_main = defineComponent({
  props: {
    /**
     * Used to override the default <code>type</code> icon, check out the
     *  <a href="https://github.com/nuxt/content/tree/dev/packages/theme-docs/src/components/global/icons">icons available</a>
     */
    icon: {
      type: String,
      default: null
    },
    /**
     * Type of list
     */
    type: {
      type: String,
      default: "primary",
      validator: (value) => ["primary", "info", "success", "warning", "danger"].includes(value)
    }
  },
  setup(props) {
    const slots = useSlots();
    const { flatUnwrap: flatUnwrap2, unwrap: unwrap2 } = useUnwrap();
    const iconName = computed(() => props.icon || iconTypeMap[props.type]);
    return () => {
      var _a;
      const items = flatUnwrap2((_a = slots.default && slots.default()) != null ? _a : [], ["ul"]).map((li) => unwrap2(li, ["li"]));
      return h(
        "ul",
        items.map(
          (item) => h("li", [
            h("span", { class: `list-icon ${props.type}` }, h(__nuxt_component_0$3, { name: iconName.value, class: "icon" })),
            h("span", h(__nuxt_component_0, { use: () => item }))
          ])
        )
      );
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/elements/components/globals/List.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const List = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e3286cf5"]]);

export { List as default };
//# sourceMappingURL=List-36RdmFxM.mjs.map
