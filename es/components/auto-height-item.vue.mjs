import { defineComponent as p, useAttrs as f, ref as a, computed as d, watch as h, resolveComponent as g, openBlock as y, createBlock as _, normalizeProps as v, guardReactiveProps as H, unref as b, withCtx as x, createElementVNode as N, renderSlot as R } from "vue";
import { useResizeObserver as w } from "../node_modules/.pnpm/@vueuse_core@12.7.0_typescript@5.4.4/node_modules/@vueuse/core/index.mjs";
const I = /* @__PURE__ */ p({
  __name: "auto-height-item",
  props: {
    h: {
      type: Number,
      required: !0
    },
    rowHeight: {
      type: Number,
      default: 30
    },
    margin: {
      type: Array,
      default: () => [10, 10]
    },
    minH: {
      type: Number,
      default: 1
    },
    maxH: {
      type: Number,
      default: 1 / 0
    }
  },
  emits: ["update:h"],
  setup(i, { emit: m }) {
    const t = i, u = f(), c = m, o = a(null), n = a(0), s = d(() => {
      if (n.value <= 0) return t.minH;
      const e = t.margin[1], r = Math.ceil((n.value + e) / (t.rowHeight + e));
      return Math.min(Math.max(r, t.minH), t.maxH);
    });
    return w(o, (e) => {
      const r = e[0];
      r && (n.value = r.contentRect.height);
    }), h(
      () => s.value,
      (e) => {
        e !== t.h && c("update:h", e);
      }
    ), (e, r) => {
      const l = g("GridItem");
      return y(), _(l, v(H({ ...b(u), ...t })), {
        default: x(() => [
          N("div", {
            ref_key: "contentRef",
            ref: o
          }, [
            R(e.$slots, "default")
          ], 512)
        ]),
        _: 3
      }, 16);
    };
  }
});
export {
  I as default
};
//# sourceMappingURL=auto-height-item.vue.mjs.map
