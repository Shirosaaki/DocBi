import __nuxt_component_0 from './TabsHeader-ChQXi7AT.mjs';
import __nuxt_component_1 from './ComponentPlaygroundProps-DteKYBvV.mjs';
import _sfc_main$1 from './ComponentPlaygroundSlots-LQAtWwPl.mjs';
import _sfc_main$2 from './ComponentPlaygroundTokens-Dpp38m-H.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, unref, isRef } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc, A as useVModel } from './server.mjs';
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
import './ProseH4-C-eJWNmY.mjs';
import './ProseCodeInline-A7NlJz3y.mjs';
import './Badge-CIH5GDEX.mjs';
import './ssrSlot-DzHwVkPX.mjs';
import './node-BhJxMdSJ.mjs';
import './ProseP-Dtlg0if_.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ComponentPlaygroundData",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: Object,
      required: false,
      default: () => ({})
    },
    componentData: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const formData = useVModel(props, "modelValue", emits);
    const activeTabIndex = ref(0);
    const tabs = [
      {
        label: "Props"
      },
      {
        label: "Slots"
      },
      {
        label: "Design Tokens"
      }
    ];
    const updateTab = (i) => activeTabIndex.value = i;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TabsHeader = __nuxt_component_0;
      const _component_ComponentPlaygroundProps = __nuxt_component_1;
      const _component_ComponentPlaygroundSlots = _sfc_main$1;
      const _component_ComponentPlaygroundTokens = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "component-playground-data" }, _attrs))} data-v-ff75821c>`);
      _push(ssrRenderComponent(_component_TabsHeader, {
        "active-tab-index": unref(activeTabIndex),
        tabs,
        "onUpdate:activeTabIndex": updateTab
      }, null, _parent));
      if (unref(activeTabIndex) === 0) {
        _push(ssrRenderComponent(_component_ComponentPlaygroundProps, {
          modelValue: unref(formData),
          "onUpdate:modelValue": ($event) => isRef(formData) ? formData.value = $event : null,
          "component-data": __props.componentData
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(activeTabIndex) === 1) {
        _push(ssrRenderComponent(_component_ComponentPlaygroundSlots, { "component-data": __props.componentData }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(activeTabIndex) === 2) {
        _push(ssrRenderComponent(_component_ComponentPlaygroundTokens, { "component-data": __props.componentData }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundData.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ComponentPlaygroundData = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ff75821c"]]);

export { ComponentPlaygroundData as default };
//# sourceMappingURL=ComponentPlaygroundData-B6vKHl-S.mjs.map
