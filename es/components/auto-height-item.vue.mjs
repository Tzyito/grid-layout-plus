import { defineComponent as f, ref as u, computed as d, watch as s, onMounted as c, onBeforeUnmount as y, openBlock as g, createBlock as h, normalizeProps as b, guardReactiveProps as v, withCtx as N, createElementVNode as B, renderSlot as H } from "vue";
import { useResizeObserver as _ } from "@vueuse/core";
import x from "./grid-item.vue.mjs";
const z = /* @__PURE__ */ f({
  __name: "auto-height-item",
  props: {
    isDraggable: {
      type: Boolean,
      default: null
    },
    isResizable: {
      type: Boolean,
      default: null
    },
    isBounded: {
      type: Boolean,
      default: null
    },
    static: {
      type: Boolean,
      default: !1
    },
    minH: {
      type: Number,
      default: 1
    },
    minW: {
      type: Number,
      default: 1
    },
    maxH: {
      type: Number,
      default: 1 / 0
    },
    maxW: {
      type: Number,
      default: 1 / 0
    },
    x: {
      type: Number,
      required: !0
    },
    y: {
      type: Number,
      required: !0
    },
    w: {
      type: Number,
      required: !0
    },
    h: {
      type: Number,
      required: !0
    },
    i: {
      type: [Number, String],
      required: !0
    },
    dragIgnoreFrom: {
      type: String,
      default: "a, button"
    },
    dragAllowFrom: {
      type: String,
      default: null
    },
    resizeIgnoreFrom: {
      type: String,
      default: "a, button"
    },
    preserveAspectRatio: {
      type: Boolean,
      default: !1
    },
    dragOption: {
      type: Object,
      default: () => ({})
    },
    resizeOption: {
      type: Object,
      default: () => ({})
    },
    rowHeight: {
      type: Number,
      default: 30
    },
    margin: {
      type: Array,
      default: () => [10, 10]
    }
  },
  emits: ["update:h"],
  setup(i, { emit: l }) {
    const t = i, m = l, n = u(null), a = u(0), p = d(() => {
      if (a.value <= 0) return t.minH;
      const e = t.margin[1], r = Math.ceil((a.value + e) / (t.rowHeight + e));
      return Math.min(Math.max(r, t.minH), t.maxH);
    }), o = _(n, (e) => {
      const r = e[0];
      r && (a.value = r.contentRect.height);
    });
    return s(
      () => p.value,
      (e) => {
        e !== t.h && m("update:h", e);
      }
    ), c(() => {
      if (n.value) {
        const e = n.value.clientHeight;
        e > 0 && (a.value = e);
      }
    }), y(() => {
      o && o.stop();
    }), (e, r) => (g(), h(x, b(v({ ...t })), {
      default: N(() => [
        B("div", {
          ref_key: "contentRef",
          ref: n
        }, [
          H(e.$slots, "default")
        ], 512)
      ]),
      _: 3
    }, 16));
  }
});
export {
  z as default
};
//# sourceMappingURL=auto-height-item.vue.mjs.map
