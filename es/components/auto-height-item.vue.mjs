import { defineComponent as p, ref as u, computed as d, watch as f, openBlock as s, createBlock as c, normalizeProps as y, guardReactiveProps as g, withCtx as b, createElementVNode as h, renderSlot as N } from "vue";
import { useResizeObserver as _ } from "@vueuse/core";
import v from "./grid-item.vue.mjs";
const R = /* @__PURE__ */ p({
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
  setup(o, { emit: i }) {
    const t = o, l = i, n = u(null), a = u(0), m = d(() => {
      if (a.value <= 0) return t.minH;
      const e = t.margin[1], r = Math.ceil((a.value + e) / (t.rowHeight + e));
      return Math.min(Math.max(r, t.minH), t.maxH);
    });
    return _(n, (e) => {
      const r = e[0];
      r && (a.value = r.contentRect.height);
    }), f(
      () => m.value,
      (e) => {
        e !== t.h && l("update:h", e);
      }
    ), (e, r) => (s(), c(v, y(g({ ...t })), {
      default: b(() => [
        h("div", {
          ref_key: "contentRef",
          ref: n
        }, [
          N(e.$slots, "default")
        ], 512)
      ]),
      _: 3
    }, 16));
  }
});
export {
  R as default
};
//# sourceMappingURL=auto-height-item.vue.mjs.map
