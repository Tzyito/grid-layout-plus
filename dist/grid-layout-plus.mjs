(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('.vgl-layout{--vgl-placeholder-bg: red;--vgl-placeholder-opacity: 20%;--vgl-placeholder-z-index: 2;--vgl-item-resizing-z-index: 3;--vgl-item-resizing-opacity: 60%;--vgl-item-dragging-z-index: 3;--vgl-item-dragging-opacity: 100%;--vgl-resizer-size: 10px;--vgl-resizer-border-color: #444;--vgl-resizer-border-width: 2px;position:relative;box-sizing:border-box;transition:height .2s ease}.vgl-item{position:absolute;box-sizing:border-box;transition:.2s ease;transition-property:left,top,right}.vgl-item--placeholder{z-index:var(--vgl-placeholder-z-index, 2);-webkit-user-select:none;-moz-user-select:none;user-select:none;background-color:var(--vgl-placeholder-bg, red);opacity:var(--vgl-placeholder-opacity, 20%);transition-duration:.1s}.vgl-item--no-touch{touch-action:none}.vgl-item--transform{right:auto;left:0;transition-property:transform}.vgl-item--transform.vgl-item--rtl{right:0;left:auto}.vgl-item--resizing{z-index:var(--vgl-item-resizing-z-index, 3);-webkit-user-select:none;-moz-user-select:none;user-select:none;opacity:var(--vgl-item-resizing-opacity, 60%)}.vgl-item--dragging{z-index:var(--vgl-item-dragging-z-index, 3);-webkit-user-select:none;-moz-user-select:none;user-select:none;opacity:var(--vgl-item-dragging-opacity, 100%);transition:none}.vgl-item__resizer{position:absolute;right:0;bottom:0;box-sizing:border-box;width:var(--vgl-resizer-size);height:var(--vgl-resizer-size);cursor:se-resize}.vgl-item__resizer:before{position:absolute;top:0;right:3px;bottom:3px;left:0;content:"";border:0 solid var(--vgl-resizer-border-color);border-right-width:var(--vgl-resizer-border-width);border-bottom-width:var(--vgl-resizer-border-width)}.vgl-item__resizer--rtl{right:auto;left:0;cursor:sw-resize}.vgl-item__resizer--rtl:before{top:0;right:0;bottom:3px;left:3px;border-right-width:0;border-bottom-width:var(--vgl-resizer-border-width);border-left-width:var(--vgl-resizer-border-width)}')),document.head.appendChild(e)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
import { defineComponent as Sn, inject as sr, ref as it, reactive as Mt, toRef as yo, onBeforeMount as Br, onMounted as kn, watchEffect as bo, onBeforeUnmount as Fr, computed as Pe, watch as J, openBlock as ht, createElementBlock as $t, normalizeClass as cr, normalizeStyle as jr, renderSlot as Vt, createCommentVNode as wo, nextTick as Ue, provide as lr, toRefs as ur, Fragment as xo, renderList as Eo, createBlock as Lr, mergeProps as So, withCtx as Hr, withDirectives as ko, createVNode as To, vShow as zo, getCurrentScope as _o, onScopeDispose as Oo, toValue as Wr, shallowRef as Po, getCurrentInstance as Mo, useAttrs as Do, resolveComponent as Ro, normalizeProps as Io, guardReactiveProps as Co, unref as Ao, createElementVNode as Bo } from "vue";
const Fo = typeof window < "u";
var fr;
Fo && ((fr = window == null ? void 0 : window.navigator) != null && fr.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function we(c) {
  return c == null;
}
function Nr() {
}
const jo = Object.freeze({
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "0ff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "00f",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  burntsienna: "ea7e5d",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "0ff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "f0f",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "663399",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32"
});
Object.freeze(new Set(Object.keys(jo)));
function Lo() {
  const c = /* @__PURE__ */ new Map();
  return {
    on(f, p) {
      const d = c.get(f);
      d != null && d.add(p) || c.set(f, /* @__PURE__ */ new Set([p]));
    },
    off(f, p) {
      const d = c.get(f);
      d && d.delete(p);
    },
    clear(f) {
      const p = c.get(f);
      p && p.clear();
    },
    clearAll() {
      c.clear();
    },
    emit(f, ...p) {
      const d = c.get(f);
      d && d.forEach((w) => {
        w(...p);
      });
    }
  };
}
function dr(c, f = 16) {
  if (typeof c != "function")
    return Nr;
  const p = (...m) => {
    c(...m);
  };
  if (f <= 0)
    return qr(p);
  let d = 0, w;
  return function(...m) {
    const z = Date.now(), E = z - d;
    clearTimeout(w), E >= f ? (d = z, p(...m)) : w = setTimeout(
      () => {
        d = Date.now(), p(...m);
      },
      Math.max(0, f - E)
    );
  };
}
function Ho(c, f = 100) {
  if (typeof c != "function")
    return Nr;
  const p = (...w) => {
    c(...w);
  };
  if (f <= 0)
    return qr(p);
  let d;
  return function(...w) {
    clearTimeout(d), d = setTimeout(() => {
      p(...w);
    }, f);
  };
}
function qr(c) {
  if (typeof c != "function")
    return c;
  let f = !1, p, d;
  return function(...w) {
    return p = w, f || (f = !0, d = Promise.resolve().then(() => (f = !1, d = void 0, c(...p)))), d;
  };
}
const zt = /* @__PURE__ */ new Set(), Xr = /* @__PURE__ */ new WeakMap();
function Wo() {
  zt.forEach((c) => {
    c(...Xr.get(c));
  }), zt.clear();
}
function he(c, ...f) {
  if (typeof c != "function")
    return c;
  Xr.set(c, f), !zt.has(c) && (zt.add(c), zt.size === 1 && Promise.resolve().then(Wo));
}
const Yr = Symbol("LAYOUT_KEY"), $r = Symbol("EMITTER_KEY");
function No(c) {
  let f = 0, p;
  for (let d = 0, w = c.length; d < w; d++)
    p = c[d].y + c[d].h, p > f && (f = p);
  return f;
}
function bn(c) {
  const f = Array(c.length);
  for (let p = 0, d = c.length; p < d; p++)
    f[p] = qo(c[p]);
  return f;
}
function qo(c) {
  return { ...c };
}
function Vr(c, f) {
  return !(c === f || c.x + c.w <= f.x || c.x >= f.x + f.w || c.y + c.h <= f.y || c.y >= f.y + f.h);
}
function pt(c, f, p) {
  const d = Ur(c), w = Kr(c), m = Array(c.length);
  for (let z = 0, E = w.length; z < E; z++) {
    let g = w[z];
    g.static || (g = Xo(d, g, f, p), d.push(g)), m[c.indexOf(g)] = g, g.moved = !1;
  }
  return m;
}
function Xo(c, f, p, d) {
  if (p)
    for (; f.y > 0 && !_t(c, f); )
      f.y--;
  else if (d) {
    const m = d[f.i].y;
    for (; f.y > m && !_t(c, f); )
      f.y--;
  }
  let w;
  for (; w = _t(c, f); )
    f.y = w.y + w.h;
  return f;
}
function Yo(c, f) {
  const p = Ur(c);
  for (let d = 0, w = c.length; d < w; d++) {
    const m = c[d];
    if (m.x + m.w > f.cols && (m.x = f.cols - m.w), m.x < 0 && (m.x = 0, m.w = f.cols), !m.static) p.push(m);
    else
      for (; _t(p, m); )
        m.y++;
  }
  return c;
}
function pr(c, f) {
  for (let p = 0, d = c.length; p < d; p++)
    if (c[p].i === f) return c[p];
}
function _t(c, f) {
  for (let p = 0, d = c.length; p < d; p++)
    if (Vr(c[p], f)) return c[p];
}
function Gr(c, f) {
  return c.filter((p) => Vr(p, f));
}
function Ur(c) {
  return c.filter((f) => f.static);
}
function wn(c, f, p, d, w = !1, m = !1) {
  if (f.static) return c;
  const z = f.x, E = f.y, g = d && f.y > d;
  typeof p == "number" && (f.x = p), typeof d == "number" && (f.y = d), f.moved = !0;
  let X = Kr(c);
  g && (X = X.reverse());
  const G = Gr(X, f);
  if (m && G.length)
    return f.x = z, f.y = E, f.moved = !1, c;
  for (let B = 0, re = G.length; B < re; B++) {
    const ie = G[B];
    ie.moved || f.y > ie.y && f.y - ie.y > ie.h / 4 || (ie.static ? c = hr(c, ie, f, w) : c = hr(c, f, ie, w));
  }
  return c;
}
function hr(c, f, p, d) {
  if (d) {
    const m = {
      x: p.x,
      y: p.y,
      w: p.w,
      h: p.h,
      i: "-1"
    };
    if (m.y = Math.max(f.y - p.h, 0), !_t(c, m))
      return wn(c, p, void 0, m.y, !1);
  }
  return wn(c, p, void 0, p.y + 1, !1);
}
function $o(c, f, p, d) {
  const w = "translate3d(" + f + "px," + c + "px, 0)";
  return {
    transform: w,
    WebkitTransform: w,
    MozTransform: w,
    msTransform: w,
    OTransform: w,
    width: p + "px",
    height: d + "px",
    position: "absolute"
  };
}
function Vo(c, f, p, d) {
  const w = "translate3d(" + f * -1 + "px," + c + "px, 0)";
  return {
    transform: w,
    WebkitTransform: w,
    MozTransform: w,
    msTransform: w,
    OTransform: w,
    width: p + "px",
    height: d + "px",
    position: "absolute"
  };
}
function Go(c, f, p, d) {
  return {
    top: c + "px",
    left: f + "px",
    width: p + "px",
    height: d + "px",
    position: "absolute"
  };
}
function Uo(c, f, p, d) {
  return {
    top: c + "px",
    right: f + "px",
    width: p + "px",
    height: d + "px",
    position: "absolute"
  };
}
function Kr(c) {
  return Array.from(c).sort(function(f, p) {
    return f.y === p.y && f.x === p.x ? 0 : f.y > p.y || f.y === p.y && f.x > p.x ? 1 : -1;
  });
}
function Ko(c, f) {
  f = f || "Layout";
  const p = ["x", "y", "w", "h"], d = [];
  if (!Array.isArray(c)) throw new Error(f + " must be an array!");
  for (let w = 0, m = c.length; w < m; w++) {
    const z = c[w];
    for (let E = 0; E < p.length; E++)
      if (typeof z[p[E]] != "number")
        throw new Error(
          "VueGridLayout: " + f + "[" + w + "]." + p[E] + " must be a number!"
        );
    if (z.i === void 0 || z.i === null)
      throw new Error("VueGridLayout: " + f + "[" + w + "].i cannot be null!");
    if (typeof z.i != "number" && typeof z.i != "string")
      throw new Error("VueGridLayout: " + f + "[" + w + "].i must be a string or number!");
    if (d.indexOf(z.i) >= 0)
      throw new Error("VueGridLayout: " + f + "[" + w + "].i must be unique!");
    if (d.push(z.i), z.static !== void 0 && typeof z.static != "boolean")
      throw new Error("VueGridLayout: " + f + "[" + w + "].static must be a boolean!");
  }
}
function Jo(c, f = "vgl") {
  const p = () => `${f}-${c}`;
  return {
    b: p,
    be: (z) => `${p()}__${z}`,
    bm: (z) => `${p()}--${z}`,
    bem: (z, E) => `${p()}__${z}--${E}`
  };
}
function gr(c) {
  return Qo(c);
}
function Qo(c) {
  var m;
  const f = ((m = c.target) == null ? void 0 : m.offsetParent) || document.body, p = c.offsetParent === document.body ? { left: 0, top: 0 } : f.getBoundingClientRect(), d = c.clientX + f.scrollLeft - p.left, w = c.clientY + f.scrollTop - p.top;
  return { x: d, y: w };
}
function vr(c, f, p, d) {
  return Zo(c) ? {
    deltaX: p - c,
    deltaY: d - f,
    lastX: c,
    lastY: f,
    x: p,
    y: d
  } : {
    deltaX: 0,
    deltaY: 0,
    lastX: p,
    lastY: d,
    x: p,
    y: d
  };
}
function Zo(c) {
  return typeof c == "number" && !Number.isNaN(c);
}
function ea(c, f) {
  const p = Jr(c);
  let d = p[0];
  for (let w = 1, m = p.length; w < m; w++) {
    const z = p[w];
    f > c[z] && (d = z);
  }
  return d;
}
function xn(c, f) {
  if (!f[c])
    throw new Error(
      "ResponsiveGridLayout: `cols` entry for breakpoint " + c + " is missing!"
    );
  return f[c];
}
function ta(c, f, p, d, w, m, z) {
  if (f[d]) return bn(f[d]);
  let E = c;
  const g = Jr(p), X = g.slice(g.indexOf(d));
  for (let G = 0, B = X.length; G < B; G++) {
    const re = X[G];
    if (f[re]) {
      E = f[re];
      break;
    }
  }
  return E = bn(E || []), pt(Yo(E, { cols: m }), z);
}
function Jr(c) {
  return Object.keys(c).sort((p, d) => c[p] - c[d]);
}
let na = "auto";
function ra() {
  return typeof document < "u";
}
function mr() {
  return ra() ? typeof document.dir < "u" ? document.dir : document.getElementsByTagName("html")[0].getAttribute("dir") : na;
}
function ia(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c;
}
var Tt = { exports: {} }, oa = Tt.exports, yr;
function aa() {
  return yr || (yr = 1, function(c, f) {
    (function(p, d) {
      c.exports = d();
    })(oa, function() {
      function p(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e && (r = r.filter(function(i) {
            return Object.getOwnPropertyDescriptor(t, i).enumerable;
          })), n.push.apply(n, r);
        }
        return n;
      }
      function d(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e] != null ? arguments[e] : {};
          e % 2 ? p(Object(n), !0).forEach(function(r) {
            g(t, r, n[r]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach(function(r) {
            Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
          });
        }
        return t;
      }
      function w(t) {
        return w = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
          return typeof e;
        } : function(e) {
          return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        }, w(t);
      }
      function m(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
      }
      function z(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, Me(r.key), r);
        }
      }
      function E(t, e, n) {
        return e && z(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
      }
      function g(t, e, n) {
        return (e = Me(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
      }
      function X(t, e) {
        if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && B(t, e);
      }
      function G(t) {
        return G = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }, G(t);
      }
      function B(t, e) {
        return B = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
          return n.__proto__ = r, n;
        }, B(t, e);
      }
      function re(t) {
        if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
      }
      function ie(t) {
        var e = function() {
          if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
          if (typeof Proxy == "function") return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), !0;
          } catch {
            return !1;
          }
        }();
        return function() {
          var n, r = G(t);
          if (e) {
            var i = G(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return function(o, a) {
            if (a && (typeof a == "object" || typeof a == "function")) return a;
            if (a !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
            return re(o);
          }(this, n);
        };
      }
      function xe() {
        return xe = typeof Reflect < "u" && Reflect.get ? Reflect.get.bind() : function(t, e, n) {
          var r = function(o, a) {
            for (; !Object.prototype.hasOwnProperty.call(o, a) && (o = G(o)) !== null; ) ;
            return o;
          }(t, e);
          if (r) {
            var i = Object.getOwnPropertyDescriptor(r, e);
            return i.get ? i.get.call(arguments.length < 3 ? t : n) : i.value;
          }
        }, xe.apply(this, arguments);
      }
      function Me(t) {
        var e = function(n, r) {
          if (typeof n != "object" || n === null) return n;
          var i = n[Symbol.toPrimitive];
          if (i !== void 0) {
            var o = i.call(n, r);
            if (typeof o != "object") return o;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(n);
        }(t, "string");
        return typeof e == "symbol" ? e : e + "";
      }
      var ze = function(t) {
        return !(!t || !t.Window) && t instanceof t.Window;
      }, Ee = void 0, oe = void 0;
      function ne(t) {
        Ee = t;
        var e = t.document.createTextNode("");
        e.ownerDocument !== t.document && typeof t.wrap == "function" && t.wrap(e) === e && (t = t.wrap(t)), oe = t;
      }
      function Q(t) {
        return ze(t) ? t : (t.ownerDocument || t).defaultView || oe.window;
      }
      typeof window < "u" && window && ne(window);
      var ee = function(t) {
        return !!t && w(t) === "object";
      }, le = function(t) {
        return typeof t == "function";
      }, b = { window: function(t) {
        return t === oe || ze(t);
      }, docFrag: function(t) {
        return ee(t) && t.nodeType === 11;
      }, object: ee, func: le, number: function(t) {
        return typeof t == "number";
      }, bool: function(t) {
        return typeof t == "boolean";
      }, string: function(t) {
        return typeof t == "string";
      }, element: function(t) {
        if (!t || w(t) !== "object") return !1;
        var e = Q(t) || oe;
        return /object|function/.test(typeof Element > "u" ? "undefined" : w(Element)) ? t instanceof Element || t instanceof e.Element : t.nodeType === 1 && typeof t.nodeName == "string";
      }, plainObject: function(t) {
        return ee(t) && !!t.constructor && /function Object\b/.test(t.constructor.toString());
      }, array: function(t) {
        return ee(t) && t.length !== void 0 && le(t.splice);
      } };
      function ve(t) {
        var e = t.interaction;
        if (e.prepared.name === "drag") {
          var n = e.prepared.axis;
          n === "x" ? (e.coords.cur.page.y = e.coords.start.page.y, e.coords.cur.client.y = e.coords.start.client.y, e.coords.velocity.client.y = 0, e.coords.velocity.page.y = 0) : n === "y" && (e.coords.cur.page.x = e.coords.start.page.x, e.coords.cur.client.x = e.coords.start.client.x, e.coords.velocity.client.x = 0, e.coords.velocity.page.x = 0);
        }
      }
      function me(t) {
        var e = t.iEvent, n = t.interaction;
        if (n.prepared.name === "drag") {
          var r = n.prepared.axis;
          if (r === "x" || r === "y") {
            var i = r === "x" ? "y" : "x";
            e.page[i] = n.coords.start.page[i], e.client[i] = n.coords.start.client[i], e.delta[i] = 0;
          }
        }
      }
      var Se = { id: "actions/drag", install: function(t) {
        var e = t.actions, n = t.Interactable, r = t.defaults;
        n.prototype.draggable = Se.draggable, e.map.drag = Se, e.methodDict.drag = "draggable", r.actions.drag = Se.defaults;
      }, listeners: { "interactions:before-action-move": ve, "interactions:action-resume": ve, "interactions:action-move": me, "auto-start:check": function(t) {
        var e = t.interaction, n = t.interactable, r = t.buttons, i = n.options.drag;
        if (i && i.enabled && (!e.pointerIsDown || !/mouse|pointer/.test(e.pointerType) || r & n.options.drag.mouseButtons)) return t.action = { name: "drag", axis: i.lockAxis === "start" ? i.startAxis : i.lockAxis }, !1;
      } }, draggable: function(t) {
        return b.object(t) ? (this.options.drag.enabled = t.enabled !== !1, this.setPerAction("drag", t), this.setOnEvents("drag", t), /^(xy|x|y|start)$/.test(t.lockAxis) && (this.options.drag.lockAxis = t.lockAxis), /^(xy|x|y)$/.test(t.startAxis) && (this.options.drag.startAxis = t.startAxis), this) : b.bool(t) ? (this.options.drag.enabled = t, this) : this.options.drag;
      }, beforeMove: ve, move: me, defaults: { startAxis: "xy", lockAxis: "xy" }, getCursor: function() {
        return "move";
      }, filterEventType: function(t) {
        return t.search("drag") === 0;
      } }, O = Se, H = { init: function(t) {
        var e = t;
        H.document = e.document, H.DocumentFragment = e.DocumentFragment || Y, H.SVGElement = e.SVGElement || Y, H.SVGSVGElement = e.SVGSVGElement || Y, H.SVGElementInstance = e.SVGElementInstance || Y, H.Element = e.Element || Y, H.HTMLElement = e.HTMLElement || H.Element, H.Event = e.Event, H.Touch = e.Touch || Y, H.PointerEvent = e.PointerEvent || e.MSPointerEvent;
      }, document: null, DocumentFragment: null, SVGElement: null, SVGSVGElement: null, SVGElementInstance: null, Element: null, HTMLElement: null, Event: null, Touch: null, PointerEvent: null };
      function Y() {
      }
      var $ = H, U = { init: function(t) {
        var e = $.Element, n = t.navigator || {};
        U.supportsTouch = "ontouchstart" in t || b.func(t.DocumentTouch) && $.document instanceof t.DocumentTouch, U.supportsPointerEvent = n.pointerEnabled !== !1 && !!$.PointerEvent, U.isIOS = /iP(hone|od|ad)/.test(n.platform), U.isIOS7 = /iP(hone|od|ad)/.test(n.platform) && /OS 7[^\d]/.test(n.appVersion), U.isIe9 = /MSIE 9/.test(n.userAgent), U.isOperaMobile = n.appName === "Opera" && U.supportsTouch && /Presto/.test(n.userAgent), U.prefixedMatchesSelector = "matches" in e.prototype ? "matches" : "webkitMatchesSelector" in e.prototype ? "webkitMatchesSelector" : "mozMatchesSelector" in e.prototype ? "mozMatchesSelector" : "oMatchesSelector" in e.prototype ? "oMatchesSelector" : "msMatchesSelector", U.pEventTypes = U.supportsPointerEvent ? $.PointerEvent === t.MSPointerEvent ? { up: "MSPointerUp", down: "MSPointerDown", over: "mouseover", out: "mouseout", move: "MSPointerMove", cancel: "MSPointerCancel" } : { up: "pointerup", down: "pointerdown", over: "pointerover", out: "pointerout", move: "pointermove", cancel: "pointercancel" } : null, U.wheelEvent = $.document && "onmousewheel" in $.document ? "mousewheel" : "wheel";
      }, supportsTouch: null, supportsPointerEvent: null, isIOS7: null, isIOS: null, isIe9: null, isOperaMobile: null, prefixedMatchesSelector: null, pEventTypes: null, wheelEvent: null }, K = U;
      function j(t, e) {
        if (t.contains) return t.contains(e);
        for (; e; ) {
          if (e === t) return !0;
          e = e.parentNode;
        }
        return !1;
      }
      function ke(t, e) {
        for (; b.element(t); ) {
          if (se(t, e)) return t;
          t = ue(t);
        }
        return null;
      }
      function ue(t) {
        var e = t.parentNode;
        if (b.docFrag(e)) {
          for (; (e = e.host) && b.docFrag(e); ) ;
          return e;
        }
        return e;
      }
      function se(t, e) {
        return oe !== Ee && (e = e.replace(/\/deep\//g, " ")), t[K.prefixedMatchesSelector](e);
      }
      var te = function(t) {
        return t.parentNode || t.host;
      };
      function De(t, e) {
        for (var n, r = [], i = t; (n = te(i)) && i !== e && n !== i.ownerDocument; ) r.unshift(i), i = n;
        return r;
      }
      function ge(t, e, n) {
        for (; b.element(t); ) {
          if (se(t, e)) return !0;
          if ((t = ue(t)) === n) return se(t, e);
        }
        return !1;
      }
      function Rt(t) {
        return t.correspondingUseElement || t;
      }
      function Ke(t) {
        var e = t instanceof $.SVGElement ? t.getBoundingClientRect() : t.getClientRects()[0];
        return e && { left: e.left, right: e.right, top: e.top, bottom: e.bottom, width: e.width || e.right - e.left, height: e.height || e.bottom - e.top };
      }
      function _e(t) {
        var e, n = Ke(t);
        if (!K.isIOS7 && n) {
          var r = { x: (e = (e = Q(t)) || oe).scrollX || e.document.documentElement.scrollLeft, y: e.scrollY || e.document.documentElement.scrollTop };
          n.left += r.x, n.right += r.x, n.top += r.y, n.bottom += r.y;
        }
        return n;
      }
      function at(t) {
        for (var e = []; t; ) e.push(t), t = ue(t);
        return e;
      }
      function vt(t) {
        return !!b.string(t) && ($.document.querySelector(t), !0);
      }
      function M(t, e) {
        for (var n in e) t[n] = e[n];
        return t;
      }
      function He(t, e, n) {
        return t === "parent" ? ue(n) : t === "self" ? e.getRect(n) : ke(n, t);
      }
      function Re(t, e, n, r) {
        var i = t;
        return b.string(i) ? i = He(i, e, n) : b.func(i) && (i = i.apply(void 0, r)), b.element(i) && (i = _e(i)), i;
      }
      function Ie(t) {
        return t && { x: "x" in t ? t.x : t.left, y: "y" in t ? t.y : t.top };
      }
      function st(t) {
        return !t || "x" in t && "y" in t || ((t = M({}, t)).x = t.left || 0, t.y = t.top || 0, t.width = t.width || (t.right || 0) - t.x, t.height = t.height || (t.bottom || 0) - t.y), t;
      }
      function Je(t, e, n) {
        t.left && (e.left += n.x), t.right && (e.right += n.x), t.top && (e.top += n.y), t.bottom && (e.bottom += n.y), e.width = e.right - e.left, e.height = e.bottom - e.top;
      }
      function Qe(t, e, n) {
        var r = n && t.options[n];
        return Ie(Re(r && r.origin || t.options.origin, t, e, [t && e])) || { x: 0, y: 0 };
      }
      function Ce(t, e) {
        var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function(l) {
          return !0;
        }, r = arguments.length > 3 ? arguments[3] : void 0;
        if (r = r || {}, b.string(t) && t.search(" ") !== -1 && (t = mt(t)), b.array(t)) return t.forEach(function(l) {
          return Ce(l, e, n, r);
        }), r;
        if (b.object(t) && (e = t, t = ""), b.func(e) && n(t)) r[t] = r[t] || [], r[t].push(e);
        else if (b.array(e)) for (var i = 0, o = e; i < o.length; i++) {
          var a = o[i];
          Ce(t, a, n, r);
        }
        else if (b.object(e)) for (var s in e)
          Ce(mt(s).map(function(l) {
            return "".concat(t).concat(l);
          }), e[s], n, r);
        return r;
      }
      function mt(t) {
        return t.trim().split(/ +/);
      }
      var We = function(t, e) {
        return Math.sqrt(t * t + e * e);
      }, Ut = ["webkit", "moz"];
      function Ze(t, e) {
        t.__set || (t.__set = {});
        var n = function(i) {
          if (Ut.some(function(o) {
            return i.indexOf(o) === 0;
          })) return 1;
          typeof t[i] != "function" && i !== "__set" && Object.defineProperty(t, i, { get: function() {
            return i in t.__set ? t.__set[i] : t.__set[i] = e[i];
          }, set: function(o) {
            t.__set[i] = o;
          }, configurable: !0 });
        };
        for (var r in e) n(r);
        return t;
      }
      function ct(t, e) {
        t.page = t.page || {}, t.page.x = e.page.x, t.page.y = e.page.y, t.client = t.client || {}, t.client.x = e.client.x, t.client.y = e.client.y, t.timeStamp = e.timeStamp;
      }
      function Ae(t) {
        t.page.x = 0, t.page.y = 0, t.client.x = 0, t.client.y = 0;
      }
      function k(t) {
        return t instanceof $.Event || t instanceof $.Touch;
      }
      function A(t, e, n) {
        return t = t || "page", (n = n || {}).x = e[t + "X"], n.y = e[t + "Y"], n;
      }
      function V(t, e) {
        return e = e || { x: 0, y: 0 }, K.isOperaMobile && k(t) ? (A("screen", t, e), e.x += window.scrollX, e.y += window.scrollY) : A("page", t, e), e;
      }
      function q(t) {
        return b.number(t.pointerId) ? t.pointerId : t.identifier;
      }
      function ae(t, e, n) {
        var r = e.length > 1 ? R(e) : e[0];
        V(r, t.page), function(i, o) {
          o = o || {}, K.isOperaMobile && k(i) ? A("screen", i, o) : A("client", i, o);
        }(r, t.client), t.timeStamp = n;
      }
      function W(t) {
        var e = [];
        return b.array(t) ? (e[0] = t[0], e[1] = t[1]) : t.type === "touchend" ? t.touches.length === 1 ? (e[0] = t.touches[0], e[1] = t.changedTouches[0]) : t.touches.length === 0 && (e[0] = t.changedTouches[0], e[1] = t.changedTouches[1]) : (e[0] = t.touches[0], e[1] = t.touches[1]), e;
      }
      function R(t) {
        for (var e = { pageX: 0, pageY: 0, clientX: 0, clientY: 0, screenX: 0, screenY: 0 }, n = 0; n < t.length; n++) {
          var r = t[n];
          for (var i in e) e[i] += r[i];
        }
        for (var o in e) e[o] /= t.length;
        return e;
      }
      function ce(t) {
        if (!t.length) return null;
        var e = W(t), n = Math.min(e[0].pageX, e[1].pageX), r = Math.min(e[0].pageY, e[1].pageY), i = Math.max(e[0].pageX, e[1].pageX), o = Math.max(e[0].pageY, e[1].pageY);
        return { x: n, y: r, left: n, top: r, right: i, bottom: o, width: i - n, height: o - r };
      }
      function fe(t, e) {
        var n = e + "X", r = e + "Y", i = W(t), o = i[0][n] - i[1][n], a = i[0][r] - i[1][r];
        return We(o, a);
      }
      function ye(t, e) {
        var n = e + "X", r = e + "Y", i = W(t), o = i[1][n] - i[0][n], a = i[1][r] - i[0][r];
        return 180 * Math.atan2(a, o) / Math.PI;
      }
      function Ne(t) {
        return b.string(t.pointerType) ? t.pointerType : b.number(t.pointerType) ? [void 0, void 0, "touch", "pen", "mouse"][t.pointerType] : /touch/.test(t.type || "") || t instanceof $.Touch ? "touch" : "mouse";
      }
      function qe(t) {
        var e = b.func(t.composedPath) ? t.composedPath() : t.path;
        return [Rt(e ? e[0] : t.target), Rt(t.currentTarget)];
      }
      var Xe = function() {
        function t(e) {
          m(this, t), this.immediatePropagationStopped = !1, this.propagationStopped = !1, this._interaction = e;
        }
        return E(t, [{ key: "preventDefault", value: function() {
        } }, { key: "stopPropagation", value: function() {
          this.propagationStopped = !0;
        } }, { key: "stopImmediatePropagation", value: function() {
          this.immediatePropagationStopped = this.propagationStopped = !0;
        } }]), t;
      }();
      Object.defineProperty(Xe.prototype, "interaction", { get: function() {
        return this._interaction._proxy;
      }, set: function() {
      } });
      var lt = function(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          t.push(r);
        }
        return t;
      }, ut = function(t) {
        return lt([], t);
      }, Be = function(t, e) {
        for (var n = 0; n < t.length; n++) if (e(t[n], n, t)) return n;
        return -1;
      }, yt = function(t, e) {
        return t[Be(t, e)];
      }, ft = function(t) {
        X(n, t);
        var e = ie(n);
        function n(r, i, o) {
          var a;
          m(this, n), (a = e.call(this, i._interaction)).dropzone = void 0, a.dragEvent = void 0, a.relatedTarget = void 0, a.draggable = void 0, a.propagationStopped = !1, a.immediatePropagationStopped = !1;
          var s = o === "dragleave" ? r.prev : r.cur, l = s.element, h = s.dropzone;
          return a.type = o, a.target = l, a.currentTarget = l, a.dropzone = h, a.dragEvent = i, a.relatedTarget = i.target, a.draggable = i.interactable, a.timeStamp = i.timeStamp, a;
        }
        return E(n, [{ key: "reject", value: function() {
          var r = this, i = this._interaction.dropState;
          if (this.type === "dropactivate" || this.dropzone && i.cur.dropzone === this.dropzone && i.cur.element === this.target) if (i.prev.dropzone = this.dropzone, i.prev.element = this.target, i.rejected = !0, i.events.enter = null, this.stopImmediatePropagation(), this.type === "dropactivate") {
            var o = i.activeDrops, a = Be(o, function(l) {
              var h = l.dropzone, u = l.element;
              return h === r.dropzone && u === r.target;
            });
            i.activeDrops.splice(a, 1);
            var s = new n(i, this.dragEvent, "dropdeactivate");
            s.dropzone = this.dropzone, s.target = this.target, this.dropzone.fire(s);
          } else this.dropzone.fire(new n(i, this.dragEvent, "dragleave"));
        } }, { key: "preventDefault", value: function() {
        } }, { key: "stopPropagation", value: function() {
          this.propagationStopped = !0;
        } }, { key: "stopImmediatePropagation", value: function() {
          this.immediatePropagationStopped = this.propagationStopped = !0;
        } }]), n;
      }(Xe);
      function zn(t, e) {
        for (var n = 0, r = t.slice(); n < r.length; n++) {
          var i = r[n], o = i.dropzone, a = i.element;
          e.dropzone = o, e.target = a, o.fire(e), e.propagationStopped = e.immediatePropagationStopped = !1;
        }
      }
      function Kt(t, e) {
        for (var n = function(o, a) {
          for (var s = [], l = 0, h = o.interactables.list; l < h.length; l++) {
            var u = h[l];
            if (u.options.drop.enabled) {
              var v = u.options.drop.accept;
              if (!(b.element(v) && v !== a || b.string(v) && !se(a, v) || b.func(v) && !v({ dropzone: u, draggableElement: a }))) for (var y = 0, S = u.getAllElements(); y < S.length; y++) {
                var x = S[y];
                x !== a && s.push({ dropzone: u, element: x, rect: u.getRect(x) });
              }
            }
          }
          return s;
        }(t, e), r = 0; r < n.length; r++) {
          var i = n[r];
          i.rect = i.dropzone.getRect(i.element);
        }
        return n;
      }
      function _n(t, e, n) {
        for (var r = t.dropState, i = t.interactable, o = t.element, a = [], s = 0, l = r.activeDrops; s < l.length; s++) {
          var h = l[s], u = h.dropzone, v = h.element, y = h.rect, S = u.dropCheck(e, n, i, o, v, y);
          a.push(S ? v : null);
        }
        var x = function(T) {
          for (var P, _, D, F = [], N = 0; N < T.length; N++) {
            var I = T[N], L = T[P];
            if (I && N !== P) if (L) {
              var pe = te(I), Z = te(L);
              if (pe !== I.ownerDocument) if (Z !== I.ownerDocument) if (pe !== Z) {
                F = F.length ? F : De(L);
                var be = void 0;
                if (L instanceof $.HTMLElement && I instanceof $.SVGElement && !(I instanceof $.SVGSVGElement)) {
                  if (I === Z) continue;
                  be = I.ownerSVGElement;
                } else be = I;
                for (var Te = De(be, L.ownerDocument), Le = 0; Te[Le] && Te[Le] === F[Le]; ) Le++;
                var Wt = [Te[Le - 1], Te[Le], F[Le]];
                if (Wt[0]) for (var kt = Wt[0].lastChild; kt; ) {
                  if (kt === Wt[1]) {
                    P = N, F = Te;
                    break;
                  }
                  if (kt === Wt[2]) break;
                  kt = kt.previousSibling;
                }
              } else D = L, (parseInt(Q(_ = I).getComputedStyle(_).zIndex, 10) || 0) >= (parseInt(Q(D).getComputedStyle(D).zIndex, 10) || 0) && (P = N);
              else P = N;
            } else P = N;
          }
          return P;
        }(a);
        return r.activeDrops[x] || null;
      }
      function Jt(t, e, n) {
        var r = t.dropState, i = { enter: null, leave: null, activate: null, deactivate: null, move: null, drop: null };
        return n.type === "dragstart" && (i.activate = new ft(r, n, "dropactivate"), i.activate.target = null, i.activate.dropzone = null), n.type === "dragend" && (i.deactivate = new ft(r, n, "dropdeactivate"), i.deactivate.target = null, i.deactivate.dropzone = null), r.rejected || (r.cur.element !== r.prev.element && (r.prev.dropzone && (i.leave = new ft(r, n, "dragleave"), n.dragLeave = i.leave.target = r.prev.element, n.prevDropzone = i.leave.dropzone = r.prev.dropzone), r.cur.dropzone && (i.enter = new ft(r, n, "dragenter"), n.dragEnter = r.cur.element, n.dropzone = r.cur.dropzone)), n.type === "dragend" && r.cur.dropzone && (i.drop = new ft(r, n, "drop"), n.dropzone = r.cur.dropzone, n.relatedTarget = r.cur.element), n.type === "dragmove" && r.cur.dropzone && (i.move = new ft(r, n, "dropmove"), n.dropzone = r.cur.dropzone)), i;
      }
      function Qt(t, e) {
        var n = t.dropState, r = n.activeDrops, i = n.cur, o = n.prev;
        e.leave && o.dropzone.fire(e.leave), e.enter && i.dropzone.fire(e.enter), e.move && i.dropzone.fire(e.move), e.drop && i.dropzone.fire(e.drop), e.deactivate && zn(r, e.deactivate), n.prev.dropzone = i.dropzone, n.prev.element = i.element;
      }
      function On(t, e) {
        var n = t.interaction, r = t.iEvent, i = t.event;
        if (r.type === "dragmove" || r.type === "dragend") {
          var o = n.dropState;
          e.dynamicDrop && (o.activeDrops = Kt(e, n.element));
          var a = r, s = _n(n, a, i);
          o.rejected = o.rejected && !!s && s.dropzone === o.cur.dropzone && s.element === o.cur.element, o.cur.dropzone = s && s.dropzone, o.cur.element = s && s.element, o.events = Jt(n, 0, a);
        }
      }
      var Pn = { id: "actions/drop", install: function(t) {
        var e = t.actions, n = t.interactStatic, r = t.Interactable, i = t.defaults;
        t.usePlugin(O), r.prototype.dropzone = function(o) {
          return function(a, s) {
            if (b.object(s)) {
              if (a.options.drop.enabled = s.enabled !== !1, s.listeners) {
                var l = Ce(s.listeners), h = Object.keys(l).reduce(function(v, y) {
                  return v[/^(enter|leave)/.test(y) ? "drag".concat(y) : /^(activate|deactivate|move)/.test(y) ? "drop".concat(y) : y] = l[y], v;
                }, {}), u = a.options.drop.listeners;
                u && a.off(u), a.on(h), a.options.drop.listeners = h;
              }
              return b.func(s.ondrop) && a.on("drop", s.ondrop), b.func(s.ondropactivate) && a.on("dropactivate", s.ondropactivate), b.func(s.ondropdeactivate) && a.on("dropdeactivate", s.ondropdeactivate), b.func(s.ondragenter) && a.on("dragenter", s.ondragenter), b.func(s.ondragleave) && a.on("dragleave", s.ondragleave), b.func(s.ondropmove) && a.on("dropmove", s.ondropmove), /^(pointer|center)$/.test(s.overlap) ? a.options.drop.overlap = s.overlap : b.number(s.overlap) && (a.options.drop.overlap = Math.max(Math.min(1, s.overlap), 0)), "accept" in s && (a.options.drop.accept = s.accept), "checker" in s && (a.options.drop.checker = s.checker), a;
            }
            return b.bool(s) ? (a.options.drop.enabled = s, a) : a.options.drop;
          }(this, o);
        }, r.prototype.dropCheck = function(o, a, s, l, h, u) {
          return function(v, y, S, x, T, P, _) {
            var D = !1;
            if (!(_ = _ || v.getRect(P))) return !!v.options.drop.checker && v.options.drop.checker(y, S, D, v, P, x, T);
            var F = v.options.drop.overlap;
            if (F === "pointer") {
              var N = Qe(x, T, "drag"), I = V(y);
              I.x += N.x, I.y += N.y;
              var L = I.x > _.left && I.x < _.right, pe = I.y > _.top && I.y < _.bottom;
              D = L && pe;
            }
            var Z = x.getRect(T);
            if (Z && F === "center") {
              var be = Z.left + Z.width / 2, Te = Z.top + Z.height / 2;
              D = be >= _.left && be <= _.right && Te >= _.top && Te <= _.bottom;
            }
            return Z && b.number(F) && (D = Math.max(0, Math.min(_.right, Z.right) - Math.max(_.left, Z.left)) * Math.max(0, Math.min(_.bottom, Z.bottom) - Math.max(_.top, Z.top)) / (Z.width * Z.height) >= F), v.options.drop.checker && (D = v.options.drop.checker(y, S, D, v, P, x, T)), D;
          }(this, o, a, s, l, h, u);
        }, n.dynamicDrop = function(o) {
          return b.bool(o) ? (t.dynamicDrop = o, n) : t.dynamicDrop;
        }, M(e.phaselessTypes, { dragenter: !0, dragleave: !0, dropactivate: !0, dropdeactivate: !0, dropmove: !0, drop: !0 }), e.methodDict.drop = "dropzone", t.dynamicDrop = !1, i.actions.drop = Pn.defaults;
      }, listeners: { "interactions:before-action-start": function(t) {
        var e = t.interaction;
        e.prepared.name === "drag" && (e.dropState = { cur: { dropzone: null, element: null }, prev: { dropzone: null, element: null }, rejected: null, events: null, activeDrops: [] });
      }, "interactions:after-action-start": function(t, e) {
        var n = t.interaction, r = (t.event, t.iEvent);
        if (n.prepared.name === "drag") {
          var i = n.dropState;
          i.activeDrops = [], i.events = {}, i.activeDrops = Kt(e, n.element), i.events = Jt(n, 0, r), i.events.activate && (zn(i.activeDrops, i.events.activate), e.fire("actions/drop:start", { interaction: n, dragEvent: r }));
        }
      }, "interactions:action-move": On, "interactions:after-action-move": function(t, e) {
        var n = t.interaction, r = t.iEvent;
        if (n.prepared.name === "drag") {
          var i = n.dropState;
          Qt(n, i.events), e.fire("actions/drop:move", { interaction: n, dragEvent: r }), i.events = {};
        }
      }, "interactions:action-end": function(t, e) {
        if (t.interaction.prepared.name === "drag") {
          var n = t.interaction, r = t.iEvent;
          On(t, e), Qt(n, n.dropState.events), e.fire("actions/drop:end", { interaction: n, dragEvent: r });
        }
      }, "interactions:stop": function(t) {
        var e = t.interaction;
        if (e.prepared.name === "drag") {
          var n = e.dropState;
          n && (n.activeDrops = null, n.events = null, n.cur.dropzone = null, n.cur.element = null, n.prev.dropzone = null, n.prev.element = null, n.rejected = !1);
        }
      } }, getActiveDrops: Kt, getDrop: _n, getDropEvents: Jt, fireDropEvents: Qt, filterEventType: function(t) {
        return t.search("drag") === 0 || t.search("drop") === 0;
      }, defaults: { enabled: !1, accept: null, overlap: "pointer" } }, ai = Pn;
      function Zt(t) {
        var e = t.interaction, n = t.iEvent, r = t.phase;
        if (e.prepared.name === "gesture") {
          var i = e.pointers.map(function(h) {
            return h.pointer;
          }), o = r === "start", a = r === "end", s = e.interactable.options.deltaSource;
          if (n.touches = [i[0], i[1]], o) n.distance = fe(i, s), n.box = ce(i), n.scale = 1, n.ds = 0, n.angle = ye(i, s), n.da = 0, e.gesture.startDistance = n.distance, e.gesture.startAngle = n.angle;
          else if (a || e.pointers.length < 2) {
            var l = e.prevEvent;
            n.distance = l.distance, n.box = l.box, n.scale = l.scale, n.ds = 0, n.angle = l.angle, n.da = 0;
          } else n.distance = fe(i, s), n.box = ce(i), n.scale = n.distance / e.gesture.startDistance, n.angle = ye(i, s), n.ds = n.scale - e.gesture.scale, n.da = n.angle - e.gesture.angle;
          e.gesture.distance = n.distance, e.gesture.angle = n.angle, b.number(n.scale) && n.scale !== 1 / 0 && !isNaN(n.scale) && (e.gesture.scale = n.scale);
        }
      }
      var en = { id: "actions/gesture", before: ["actions/drag", "actions/resize"], install: function(t) {
        var e = t.actions, n = t.Interactable, r = t.defaults;
        n.prototype.gesturable = function(i) {
          return b.object(i) ? (this.options.gesture.enabled = i.enabled !== !1, this.setPerAction("gesture", i), this.setOnEvents("gesture", i), this) : b.bool(i) ? (this.options.gesture.enabled = i, this) : this.options.gesture;
        }, e.map.gesture = en, e.methodDict.gesture = "gesturable", r.actions.gesture = en.defaults;
      }, listeners: { "interactions:action-start": Zt, "interactions:action-move": Zt, "interactions:action-end": Zt, "interactions:new": function(t) {
        t.interaction.gesture = { angle: 0, distance: 0, scale: 1, startAngle: 0, startDistance: 0 };
      }, "auto-start:check": function(t) {
        if (!(t.interaction.pointers.length < 2)) {
          var e = t.interactable.options.gesture;
          if (e && e.enabled) return t.action = { name: "gesture" }, !1;
        }
      } }, defaults: {}, getCursor: function() {
        return "";
      }, filterEventType: function(t) {
        return t.search("gesture") === 0;
      } }, si = en;
      function ci(t, e, n, r, i, o, a) {
        if (!e) return !1;
        if (e === !0) {
          var s = b.number(o.width) ? o.width : o.right - o.left, l = b.number(o.height) ? o.height : o.bottom - o.top;
          if (a = Math.min(a, Math.abs((t === "left" || t === "right" ? s : l) / 2)), s < 0 && (t === "left" ? t = "right" : t === "right" && (t = "left")), l < 0 && (t === "top" ? t = "bottom" : t === "bottom" && (t = "top")), t === "left") {
            var h = s >= 0 ? o.left : o.right;
            return n.x < h + a;
          }
          if (t === "top") {
            var u = l >= 0 ? o.top : o.bottom;
            return n.y < u + a;
          }
          if (t === "right") return n.x > (s >= 0 ? o.right : o.left) - a;
          if (t === "bottom") return n.y > (l >= 0 ? o.bottom : o.top) - a;
        }
        return !!b.element(r) && (b.element(e) ? e === r : ge(r, e, i));
      }
      function Mn(t) {
        var e = t.iEvent, n = t.interaction;
        if (n.prepared.name === "resize" && n.resizeAxes) {
          var r = e;
          n.interactable.options.resize.square ? (n.resizeAxes === "y" ? r.delta.x = r.delta.y : r.delta.y = r.delta.x, r.axes = "xy") : (r.axes = n.resizeAxes, n.resizeAxes === "x" ? r.delta.y = 0 : n.resizeAxes === "y" && (r.delta.x = 0));
        }
      }
      var Fe, et, je = { id: "actions/resize", before: ["actions/drag"], install: function(t) {
        var e = t.actions, n = t.browser, r = t.Interactable, i = t.defaults;
        je.cursors = function(o) {
          return o.isIe9 ? { x: "e-resize", y: "s-resize", xy: "se-resize", top: "n-resize", left: "w-resize", bottom: "s-resize", right: "e-resize", topleft: "se-resize", bottomright: "se-resize", topright: "ne-resize", bottomleft: "ne-resize" } : { x: "ew-resize", y: "ns-resize", xy: "nwse-resize", top: "ns-resize", left: "ew-resize", bottom: "ns-resize", right: "ew-resize", topleft: "nwse-resize", bottomright: "nwse-resize", topright: "nesw-resize", bottomleft: "nesw-resize" };
        }(n), je.defaultMargin = n.supportsTouch || n.supportsPointerEvent ? 20 : 10, r.prototype.resizable = function(o) {
          return function(a, s, l) {
            return b.object(s) ? (a.options.resize.enabled = s.enabled !== !1, a.setPerAction("resize", s), a.setOnEvents("resize", s), b.string(s.axis) && /^x$|^y$|^xy$/.test(s.axis) ? a.options.resize.axis = s.axis : s.axis === null && (a.options.resize.axis = l.defaults.actions.resize.axis), b.bool(s.preserveAspectRatio) ? a.options.resize.preserveAspectRatio = s.preserveAspectRatio : b.bool(s.square) && (a.options.resize.square = s.square), a) : b.bool(s) ? (a.options.resize.enabled = s, a) : a.options.resize;
          }(this, o, t);
        }, e.map.resize = je, e.methodDict.resize = "resizable", i.actions.resize = je.defaults;
      }, listeners: { "interactions:new": function(t) {
        t.interaction.resizeAxes = "xy";
      }, "interactions:action-start": function(t) {
        (function(e) {
          var n = e.iEvent, r = e.interaction;
          if (r.prepared.name === "resize" && r.prepared.edges) {
            var i = n, o = r.rect;
            r._rects = { start: M({}, o), corrected: M({}, o), previous: M({}, o), delta: { left: 0, right: 0, width: 0, top: 0, bottom: 0, height: 0 } }, i.edges = r.prepared.edges, i.rect = r._rects.corrected, i.deltaRect = r._rects.delta;
          }
        })(t), Mn(t);
      }, "interactions:action-move": function(t) {
        (function(e) {
          var n = e.iEvent, r = e.interaction;
          if (r.prepared.name === "resize" && r.prepared.edges) {
            var i = n, o = r.interactable.options.resize.invert, a = o === "reposition" || o === "negate", s = r.rect, l = r._rects, h = l.start, u = l.corrected, v = l.delta, y = l.previous;
            if (M(y, u), a) {
              if (M(u, s), o === "reposition") {
                if (u.top > u.bottom) {
                  var S = u.top;
                  u.top = u.bottom, u.bottom = S;
                }
                if (u.left > u.right) {
                  var x = u.left;
                  u.left = u.right, u.right = x;
                }
              }
            } else u.top = Math.min(s.top, h.bottom), u.bottom = Math.max(s.bottom, h.top), u.left = Math.min(s.left, h.right), u.right = Math.max(s.right, h.left);
            for (var T in u.width = u.right - u.left, u.height = u.bottom - u.top, u) v[T] = u[T] - y[T];
            i.edges = r.prepared.edges, i.rect = u, i.deltaRect = v;
          }
        })(t), Mn(t);
      }, "interactions:action-end": function(t) {
        var e = t.iEvent, n = t.interaction;
        if (n.prepared.name === "resize" && n.prepared.edges) {
          var r = e;
          r.edges = n.prepared.edges, r.rect = n._rects.corrected, r.deltaRect = n._rects.delta;
        }
      }, "auto-start:check": function(t) {
        var e = t.interaction, n = t.interactable, r = t.element, i = t.rect, o = t.buttons;
        if (i) {
          var a = M({}, e.coords.cur.page), s = n.options.resize;
          if (s && s.enabled && (!e.pointerIsDown || !/mouse|pointer/.test(e.pointerType) || o & s.mouseButtons)) {
            if (b.object(s.edges)) {
              var l = { left: !1, right: !1, top: !1, bottom: !1 };
              for (var h in l) l[h] = ci(h, s.edges[h], a, e._latestPointer.eventTarget, r, i, s.margin || je.defaultMargin);
              l.left = l.left && !l.right, l.top = l.top && !l.bottom, (l.left || l.right || l.top || l.bottom) && (t.action = { name: "resize", edges: l });
            } else {
              var u = s.axis !== "y" && a.x > i.right - je.defaultMargin, v = s.axis !== "x" && a.y > i.bottom - je.defaultMargin;
              (u || v) && (t.action = { name: "resize", axes: (u ? "x" : "") + (v ? "y" : "") });
            }
            return !t.action && void 0;
          }
        }
      } }, defaults: { square: !1, preserveAspectRatio: !1, axis: "xy", margin: NaN, edges: null, invert: "none" }, cursors: null, getCursor: function(t) {
        var e = t.edges, n = t.axis, r = t.name, i = je.cursors, o = null;
        if (n) o = i[r + n];
        else if (e) {
          for (var a = "", s = 0, l = ["top", "bottom", "left", "right"]; s < l.length; s++) {
            var h = l[s];
            e[h] && (a += h);
          }
          o = i[a];
        }
        return o;
      }, filterEventType: function(t) {
        return t.search("resize") === 0;
      }, defaultMargin: null }, li = je, ui = { id: "actions", install: function(t) {
        t.usePlugin(si), t.usePlugin(li), t.usePlugin(O), t.usePlugin(ai);
      } }, Dn = 0, Ye = { request: function(t) {
        return Fe(t);
      }, cancel: function(t) {
        return et(t);
      }, init: function(t) {
        if (Fe = t.requestAnimationFrame, et = t.cancelAnimationFrame, !Fe) for (var e = ["ms", "moz", "webkit", "o"], n = 0; n < e.length; n++) {
          var r = e[n];
          Fe = t["".concat(r, "RequestAnimationFrame")], et = t["".concat(r, "CancelAnimationFrame")] || t["".concat(r, "CancelRequestAnimationFrame")];
        }
        Fe = Fe && Fe.bind(t), et = et && et.bind(t), Fe || (Fe = function(i) {
          var o = Date.now(), a = Math.max(0, 16 - (o - Dn)), s = t.setTimeout(function() {
            i(o + a);
          }, a);
          return Dn = o + a, s;
        }, et = function(i) {
          return clearTimeout(i);
        });
      } }, C = { defaults: { enabled: !1, margin: 60, container: null, speed: 300 }, now: Date.now, interaction: null, i: 0, x: 0, y: 0, isScrolling: !1, prevTime: 0, margin: 0, speed: 0, start: function(t) {
        C.isScrolling = !0, Ye.cancel(C.i), t.autoScroll = C, C.interaction = t, C.prevTime = C.now(), C.i = Ye.request(C.scroll);
      }, stop: function() {
        C.isScrolling = !1, C.interaction && (C.interaction.autoScroll = null), Ye.cancel(C.i);
      }, scroll: function() {
        var t = C.interaction, e = t.interactable, n = t.element, r = t.prepared.name, i = e.options[r].autoScroll, o = Rn(i.container, e, n), a = C.now(), s = (a - C.prevTime) / 1e3, l = i.speed * s;
        if (l >= 1) {
          var h = { x: C.x * l, y: C.y * l };
          if (h.x || h.y) {
            var u = In(o);
            b.window(o) ? o.scrollBy(h.x, h.y) : o && (o.scrollLeft += h.x, o.scrollTop += h.y);
            var v = In(o), y = { x: v.x - u.x, y: v.y - u.y };
            (y.x || y.y) && e.fire({ type: "autoscroll", target: n, interactable: e, delta: y, interaction: t, container: o });
          }
          C.prevTime = a;
        }
        C.isScrolling && (Ye.cancel(C.i), C.i = Ye.request(C.scroll));
      }, check: function(t, e) {
        var n;
        return (n = t.options[e].autoScroll) == null ? void 0 : n.enabled;
      }, onInteractionMove: function(t) {
        var e = t.interaction, n = t.pointer;
        if (e.interacting() && C.check(e.interactable, e.prepared.name)) if (e.simulation) C.x = C.y = 0;
        else {
          var r, i, o, a, s = e.interactable, l = e.element, h = e.prepared.name, u = s.options[h].autoScroll, v = Rn(u.container, s, l);
          if (b.window(v)) a = n.clientX < C.margin, r = n.clientY < C.margin, i = n.clientX > v.innerWidth - C.margin, o = n.clientY > v.innerHeight - C.margin;
          else {
            var y = Ke(v);
            a = n.clientX < y.left + C.margin, r = n.clientY < y.top + C.margin, i = n.clientX > y.right - C.margin, o = n.clientY > y.bottom - C.margin;
          }
          C.x = i ? 1 : a ? -1 : 0, C.y = o ? 1 : r ? -1 : 0, C.isScrolling || (C.margin = u.margin, C.speed = u.speed, C.start(e));
        }
      } };
      function Rn(t, e, n) {
        return (b.string(t) ? He(t, e, n) : t) || Q(n);
      }
      function In(t) {
        return b.window(t) && (t = window.document.body), { x: t.scrollLeft, y: t.scrollTop };
      }
      var fi = { id: "auto-scroll", install: function(t) {
        var e = t.defaults, n = t.actions;
        t.autoScroll = C, C.now = function() {
          return t.now();
        }, n.phaselessTypes.autoscroll = !0, e.perAction.autoScroll = C.defaults;
      }, listeners: { "interactions:new": function(t) {
        t.interaction.autoScroll = null;
      }, "interactions:destroy": function(t) {
        t.interaction.autoScroll = null, C.stop(), C.interaction && (C.interaction = null);
      }, "interactions:stop": C.stop, "interactions:action-move": function(t) {
        return C.onInteractionMove(t);
      } } }, di = fi;
      function bt(t, e) {
        var n = !1;
        return function() {
          return n || (oe.console.warn(e), n = !0), t.apply(this, arguments);
        };
      }
      function tn(t, e) {
        return t.name = e.name, t.axis = e.axis, t.edges = e.edges, t;
      }
      function pi(t) {
        return b.bool(t) ? (this.options.styleCursor = t, this) : t === null ? (delete this.options.styleCursor, this) : this.options.styleCursor;
      }
      function hi(t) {
        return b.func(t) ? (this.options.actionChecker = t, this) : t === null ? (delete this.options.actionChecker, this) : this.options.actionChecker;
      }
      var gi = { id: "auto-start/interactableMethods", install: function(t) {
        var e = t.Interactable;
        e.prototype.getAction = function(n, r, i, o) {
          var a = function(s, l, h, u, v) {
            var y = s.getRect(u), S = l.buttons || { 0: 1, 1: 4, 3: 8, 4: 16 }[l.button], x = { action: null, interactable: s, interaction: h, element: u, rect: y, buttons: S };
            return v.fire("auto-start:check", x), x.action;
          }(this, r, i, o, t);
          return this.options.actionChecker ? this.options.actionChecker(n, r, a, this, o, i) : a;
        }, e.prototype.ignoreFrom = bt(function(n) {
          return this._backCompatOption("ignoreFrom", n);
        }, "Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."), e.prototype.allowFrom = bt(function(n) {
          return this._backCompatOption("allowFrom", n);
        }, "Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."), e.prototype.actionChecker = hi, e.prototype.styleCursor = pi;
      } };
      function Cn(t, e, n, r, i) {
        return e.testIgnoreAllow(e.options[t.name], n, r) && e.options[t.name].enabled && It(e, n, t, i) ? t : null;
      }
      function vi(t, e, n, r, i, o, a) {
        for (var s = 0, l = r.length; s < l; s++) {
          var h = r[s], u = i[s], v = h.getAction(e, n, t, u);
          if (v) {
            var y = Cn(v, h, u, o, a);
            if (y) return { action: y, interactable: h, element: u };
          }
        }
        return { action: null, interactable: null, element: null };
      }
      function An(t, e, n, r, i) {
        var o = [], a = [], s = r;
        function l(u) {
          o.push(u), a.push(s);
        }
        for (; b.element(s); ) {
          o = [], a = [], i.interactables.forEachMatch(s, l);
          var h = vi(t, e, n, o, a, r, i);
          if (h.action && !h.interactable.options[h.action.name].manualStart) return h;
          s = ue(s);
        }
        return { action: null, interactable: null, element: null };
      }
      function Bn(t, e, n) {
        var r = e.action, i = e.interactable, o = e.element;
        r = r || { name: null }, t.interactable = i, t.element = o, tn(t.prepared, r), t.rect = i && r.name ? i.getRect(o) : null, jn(t, n), n.fire("autoStart:prepared", { interaction: t });
      }
      function It(t, e, n, r) {
        var i = t.options, o = i[n.name].max, a = i[n.name].maxPerElement, s = r.autoStart.maxInteractions, l = 0, h = 0, u = 0;
        if (!(o && a && s)) return !1;
        for (var v = 0, y = r.interactions.list; v < y.length; v++) {
          var S = y[v], x = S.prepared.name;
          if (S.interacting() && (++l >= s || S.interactable === t && ((h += x === n.name ? 1 : 0) >= o || S.element === e && (u++, x === n.name && u >= a))))
            return !1;
        }
        return s > 0;
      }
      function Fn(t, e) {
        return b.number(t) ? (e.autoStart.maxInteractions = t, this) : e.autoStart.maxInteractions;
      }
      function nn(t, e, n) {
        var r = n.autoStart.cursorElement;
        r && r !== t && (r.style.cursor = ""), t.ownerDocument.documentElement.style.cursor = e, t.style.cursor = e, n.autoStart.cursorElement = e ? t : null;
      }
      function jn(t, e) {
        var n = t.interactable, r = t.element, i = t.prepared;
        if (t.pointerType === "mouse" && n && n.options.styleCursor) {
          var o = "";
          if (i.name) {
            var a = n.options[i.name].cursorChecker;
            o = b.func(a) ? a(i, n, r, t._interacting) : e.actions.map[i.name].getCursor(i);
          }
          nn(t.element, o || "", e);
        } else e.autoStart.cursorElement && nn(e.autoStart.cursorElement, "", e);
      }
      var mi = { id: "auto-start/base", before: ["actions"], install: function(t) {
        var e = t.interactStatic, n = t.defaults;
        t.usePlugin(gi), n.base.actionChecker = null, n.base.styleCursor = !0, M(n.perAction, { manualStart: !1, max: 1 / 0, maxPerElement: 1, allowFrom: null, ignoreFrom: null, mouseButtons: 1 }), e.maxInteractions = function(r) {
          return Fn(r, t);
        }, t.autoStart = { maxInteractions: 1 / 0, withinInteractionLimit: It, cursorElement: null };
      }, listeners: { "interactions:down": function(t, e) {
        var n = t.interaction, r = t.pointer, i = t.event, o = t.eventTarget;
        n.interacting() || Bn(n, An(n, r, i, o, e), e);
      }, "interactions:move": function(t, e) {
        (function(n, r) {
          var i = n.interaction, o = n.pointer, a = n.event, s = n.eventTarget;
          i.pointerType !== "mouse" || i.pointerIsDown || i.interacting() || Bn(i, An(i, o, a, s, r), r);
        })(t, e), function(n, r) {
          var i = n.interaction;
          if (i.pointerIsDown && !i.interacting() && i.pointerWasMoved && i.prepared.name) {
            r.fire("autoStart:before-start", n);
            var o = i.interactable, a = i.prepared.name;
            a && o && (o.options[a].manualStart || !It(o, i.element, i.prepared, r) ? i.stop() : (i.start(i.prepared, o, i.element), jn(i, r)));
          }
        }(t, e);
      }, "interactions:stop": function(t, e) {
        var n = t.interaction, r = n.interactable;
        r && r.options.styleCursor && nn(n.element, "", e);
      } }, maxInteractions: Fn, withinInteractionLimit: It, validateAction: Cn }, rn = mi, yi = { id: "auto-start/dragAxis", listeners: { "autoStart:before-start": function(t, e) {
        var n = t.interaction, r = t.eventTarget, i = t.dx, o = t.dy;
        if (n.prepared.name === "drag") {
          var a = Math.abs(i), s = Math.abs(o), l = n.interactable.options.drag, h = l.startAxis, u = a > s ? "x" : a < s ? "y" : "xy";
          if (n.prepared.axis = l.lockAxis === "start" ? u[0] : l.lockAxis, u !== "xy" && h !== "xy" && h !== u) {
            n.prepared.name = null;
            for (var v = r, y = function(x) {
              if (x !== n.interactable) {
                var T = n.interactable.options.drag;
                if (!T.manualStart && x.testIgnoreAllow(T, v, r)) {
                  var P = x.getAction(n.downPointer, n.downEvent, n, v);
                  if (P && P.name === "drag" && function(_, D) {
                    if (!D) return !1;
                    var F = D.options.drag.startAxis;
                    return _ === "xy" || F === "xy" || F === _;
                  }(u, x) && rn.validateAction(P, x, v, r, e)) return x;
                }
              }
            }; b.element(v); ) {
              var S = e.interactables.forEachMatch(v, y);
              if (S) {
                n.prepared.name = "drag", n.interactable = S, n.element = v;
                break;
              }
              v = ue(v);
            }
          }
        }
      } } };
      function on(t) {
        var e = t.prepared && t.prepared.name;
        if (!e) return null;
        var n = t.interactable.options;
        return n[e].hold || n[e].delay;
      }
      var bi = { id: "auto-start/hold", install: function(t) {
        var e = t.defaults;
        t.usePlugin(rn), e.perAction.hold = 0, e.perAction.delay = 0;
      }, listeners: { "interactions:new": function(t) {
        t.interaction.autoStartHoldTimer = null;
      }, "autoStart:prepared": function(t) {
        var e = t.interaction, n = on(e);
        n > 0 && (e.autoStartHoldTimer = setTimeout(function() {
          e.start(e.prepared, e.interactable, e.element);
        }, n));
      }, "interactions:move": function(t) {
        var e = t.interaction, n = t.duplicate;
        e.autoStartHoldTimer && e.pointerWasMoved && !n && (clearTimeout(e.autoStartHoldTimer), e.autoStartHoldTimer = null);
      }, "autoStart:before-start": function(t) {
        var e = t.interaction;
        on(e) > 0 && (e.prepared.name = null);
      } }, getHoldDuration: on }, wi = bi, xi = { id: "auto-start", install: function(t) {
        t.usePlugin(rn), t.usePlugin(wi), t.usePlugin(yi);
      } }, Ei = function(t) {
        return /^(always|never|auto)$/.test(t) ? (this.options.preventDefault = t, this) : b.bool(t) ? (this.options.preventDefault = t ? "always" : "never", this) : this.options.preventDefault;
      };
      function Si(t) {
        var e = t.interaction, n = t.event;
        e.interactable && e.interactable.checkAndPreventDefault(n);
      }
      var Ln = { id: "core/interactablePreventDefault", install: function(t) {
        var e = t.Interactable;
        e.prototype.preventDefault = Ei, e.prototype.checkAndPreventDefault = function(n) {
          return function(r, i, o) {
            var a = r.options.preventDefault;
            if (a !== "never") if (a !== "always") {
              if (i.events.supportsPassive && /^touch(start|move)$/.test(o.type)) {
                var s = Q(o.target).document, l = i.getDocOptions(s);
                if (!l || !l.events || l.events.passive !== !1) return;
              }
              /^(mouse|pointer|touch)*(down|start)/i.test(o.type) || b.element(o.target) && se(o.target, "input,select,textarea,[contenteditable=true],[contenteditable=true] *") || o.preventDefault();
            } else o.preventDefault();
          }(this, t, n);
        }, t.interactions.docEvents.push({ type: "dragstart", listener: function(n) {
          for (var r = 0, i = t.interactions.list; r < i.length; r++) {
            var o = i[r];
            if (o.element && (o.element === n.target || j(o.element, n.target))) return void o.interactable.checkAndPreventDefault(n);
          }
        } });
      }, listeners: ["down", "move", "up", "cancel"].reduce(function(t, e) {
        return t["interactions:".concat(e)] = Si, t;
      }, {}) };
      function Ct(t, e) {
        if (e.phaselessTypes[t]) return !0;
        for (var n in e.map) if (t.indexOf(n) === 0 && t.substr(n.length) in e.phases) return !0;
        return !1;
      }
      function dt(t) {
        var e = {};
        for (var n in t) {
          var r = t[n];
          b.plainObject(r) ? e[n] = dt(r) : b.array(r) ? e[n] = ut(r) : e[n] = r;
        }
        return e;
      }
      var an = function() {
        function t(e) {
          m(this, t), this.states = [], this.startOffset = { left: 0, right: 0, top: 0, bottom: 0 }, this.startDelta = void 0, this.result = void 0, this.endResult = void 0, this.startEdges = void 0, this.edges = void 0, this.interaction = void 0, this.interaction = e, this.result = At(), this.edges = { left: !1, right: !1, top: !1, bottom: !1 };
        }
        return E(t, [{ key: "start", value: function(e, n) {
          var r, i, o = e.phase, a = this.interaction, s = function(h) {
            var u = h.interactable.options[h.prepared.name], v = u.modifiers;
            return v && v.length ? v : ["snap", "snapSize", "snapEdges", "restrict", "restrictEdges", "restrictSize"].map(function(y) {
              var S = u[y];
              return S && S.enabled && { options: S, methods: S._methods };
            }).filter(function(y) {
              return !!y;
            });
          }(a);
          this.prepareStates(s), this.startEdges = M({}, a.edges), this.edges = M({}, this.startEdges), this.startOffset = (r = a.rect, i = n, r ? { left: i.x - r.left, top: i.y - r.top, right: r.right - i.x, bottom: r.bottom - i.y } : { left: 0, top: 0, right: 0, bottom: 0 }), this.startDelta = { x: 0, y: 0 };
          var l = this.fillArg({ phase: o, pageCoords: n, preEnd: !1 });
          return this.result = At(), this.startAll(l), this.result = this.setAll(l);
        } }, { key: "fillArg", value: function(e) {
          var n = this.interaction;
          return e.interaction = n, e.interactable = n.interactable, e.element = n.element, e.rect || (e.rect = n.rect), e.edges || (e.edges = this.startEdges), e.startOffset = this.startOffset, e;
        } }, { key: "startAll", value: function(e) {
          for (var n = 0, r = this.states; n < r.length; n++) {
            var i = r[n];
            i.methods.start && (e.state = i, i.methods.start(e));
          }
        } }, { key: "setAll", value: function(e) {
          var n = e.phase, r = e.preEnd, i = e.skipModifiers, o = e.rect, a = e.edges;
          e.coords = M({}, e.pageCoords), e.rect = M({}, o), e.edges = M({}, a);
          for (var s = i ? this.states.slice(i) : this.states, l = At(e.coords, e.rect), h = 0; h < s.length; h++) {
            var u, v = s[h], y = v.options, S = M({}, e.coords), x = null;
            (u = v.methods) != null && u.set && this.shouldDo(y, r, n) && (e.state = v, x = v.methods.set(e), Je(e.edges, e.rect, { x: e.coords.x - S.x, y: e.coords.y - S.y })), l.eventProps.push(x);
          }
          M(this.edges, e.edges), l.delta.x = e.coords.x - e.pageCoords.x, l.delta.y = e.coords.y - e.pageCoords.y, l.rectDelta.left = e.rect.left - o.left, l.rectDelta.right = e.rect.right - o.right, l.rectDelta.top = e.rect.top - o.top, l.rectDelta.bottom = e.rect.bottom - o.bottom;
          var T = this.result.coords, P = this.result.rect;
          if (T && P) {
            var _ = l.rect.left !== P.left || l.rect.right !== P.right || l.rect.top !== P.top || l.rect.bottom !== P.bottom;
            l.changed = _ || T.x !== l.coords.x || T.y !== l.coords.y;
          }
          return l;
        } }, { key: "applyToInteraction", value: function(e) {
          var n = this.interaction, r = e.phase, i = n.coords.cur, o = n.coords.start, a = this.result, s = this.startDelta, l = a.delta;
          r === "start" && M(this.startDelta, a.delta);
          for (var h = 0, u = [[o, s], [i, l]]; h < u.length; h++) {
            var v = u[h], y = v[0], S = v[1];
            y.page.x += S.x, y.page.y += S.y, y.client.x += S.x, y.client.y += S.y;
          }
          var x = this.result.rectDelta, T = e.rect || n.rect;
          T.left += x.left, T.right += x.right, T.top += x.top, T.bottom += x.bottom, T.width = T.right - T.left, T.height = T.bottom - T.top;
        } }, { key: "setAndApply", value: function(e) {
          var n = this.interaction, r = e.phase, i = e.preEnd, o = e.skipModifiers, a = this.setAll(this.fillArg({ preEnd: i, phase: r, pageCoords: e.modifiedCoords || n.coords.cur.page }));
          if (this.result = a, !a.changed && (!o || o < this.states.length) && n.interacting()) return !1;
          if (e.modifiedCoords) {
            var s = n.coords.cur.page, l = { x: e.modifiedCoords.x - s.x, y: e.modifiedCoords.y - s.y };
            a.coords.x += l.x, a.coords.y += l.y, a.delta.x += l.x, a.delta.y += l.y;
          }
          this.applyToInteraction(e);
        } }, { key: "beforeEnd", value: function(e) {
          var n = e.interaction, r = e.event, i = this.states;
          if (i && i.length) {
            for (var o = !1, a = 0; a < i.length; a++) {
              var s = i[a];
              e.state = s;
              var l = s.options, h = s.methods, u = h.beforeEnd && h.beforeEnd(e);
              if (u) return this.endResult = u, !1;
              o = o || !o && this.shouldDo(l, !0, e.phase, !0);
            }
            o && n.move({ event: r, preEnd: !0 });
          }
        } }, { key: "stop", value: function(e) {
          var n = e.interaction;
          if (this.states && this.states.length) {
            var r = M({ states: this.states, interactable: n.interactable, element: n.element, rect: null }, e);
            this.fillArg(r);
            for (var i = 0, o = this.states; i < o.length; i++) {
              var a = o[i];
              r.state = a, a.methods.stop && a.methods.stop(r);
            }
            this.states = null, this.endResult = null;
          }
        } }, { key: "prepareStates", value: function(e) {
          this.states = [];
          for (var n = 0; n < e.length; n++) {
            var r = e[n], i = r.options, o = r.methods, a = r.name;
            this.states.push({ options: i, methods: o, index: n, name: a });
          }
          return this.states;
        } }, { key: "restoreInteractionCoords", value: function(e) {
          var n = e.interaction, r = n.coords, i = n.rect, o = n.modification;
          if (o.result) {
            for (var a = o.startDelta, s = o.result, l = s.delta, h = s.rectDelta, u = 0, v = [[r.start, a], [r.cur, l]]; u < v.length; u++) {
              var y = v[u], S = y[0], x = y[1];
              S.page.x -= x.x, S.page.y -= x.y, S.client.x -= x.x, S.client.y -= x.y;
            }
            i.left -= h.left, i.right -= h.right, i.top -= h.top, i.bottom -= h.bottom;
          }
        } }, { key: "shouldDo", value: function(e, n, r, i) {
          return !(!e || e.enabled === !1 || i && !e.endOnly || e.endOnly && !n || r === "start" && !e.setStart);
        } }, { key: "copyFrom", value: function(e) {
          this.startOffset = e.startOffset, this.startDelta = e.startDelta, this.startEdges = e.startEdges, this.edges = e.edges, this.states = e.states.map(function(n) {
            return dt(n);
          }), this.result = At(M({}, e.result.coords), M({}, e.result.rect));
        } }, { key: "destroy", value: function() {
          for (var e in this) this[e] = null;
        } }]), t;
      }();
      function At(t, e) {
        return { rect: e, coords: t, delta: { x: 0, y: 0 }, rectDelta: { left: 0, right: 0, top: 0, bottom: 0 }, eventProps: [], changed: !0 };
      }
      function $e(t, e) {
        var n = t.defaults, r = { start: t.start, set: t.set, beforeEnd: t.beforeEnd, stop: t.stop }, i = function(o) {
          var a = o || {};
          for (var s in a.enabled = a.enabled !== !1, n) s in a || (a[s] = n[s]);
          var l = { options: a, methods: r, name: e, enable: function() {
            return a.enabled = !0, l;
          }, disable: function() {
            return a.enabled = !1, l;
          } };
          return l;
        };
        return e && typeof e == "string" && (i._defaults = n, i._methods = r), i;
      }
      function wt(t) {
        var e = t.iEvent, n = t.interaction.modification.result;
        n && (e.modifiers = n.eventProps);
      }
      var ki = { id: "modifiers/base", before: ["actions"], install: function(t) {
        t.defaults.perAction.modifiers = [];
      }, listeners: { "interactions:new": function(t) {
        var e = t.interaction;
        e.modification = new an(e);
      }, "interactions:before-action-start": function(t) {
        var e = t.interaction, n = t.interaction.modification;
        n.start(t, e.coords.start.page), e.edges = n.edges, n.applyToInteraction(t);
      }, "interactions:before-action-move": function(t) {
        var e = t.interaction, n = e.modification, r = n.setAndApply(t);
        return e.edges = n.edges, r;
      }, "interactions:before-action-end": function(t) {
        var e = t.interaction, n = e.modification, r = n.beforeEnd(t);
        return e.edges = n.startEdges, r;
      }, "interactions:action-start": wt, "interactions:action-move": wt, "interactions:action-end": wt, "interactions:after-action-start": function(t) {
        return t.interaction.modification.restoreInteractionCoords(t);
      }, "interactions:after-action-move": function(t) {
        return t.interaction.modification.restoreInteractionCoords(t);
      }, "interactions:stop": function(t) {
        return t.interaction.modification.stop(t);
      } } }, Hn = ki, Wn = { base: { preventDefault: "auto", deltaSource: "page" }, perAction: { enabled: !1, origin: { x: 0, y: 0 } }, actions: {} }, sn = function(t) {
        X(n, t);
        var e = ie(n);
        function n(r, i, o, a, s, l, h) {
          var u;
          m(this, n), (u = e.call(this, r)).relatedTarget = null, u.screenX = void 0, u.screenY = void 0, u.button = void 0, u.buttons = void 0, u.ctrlKey = void 0, u.shiftKey = void 0, u.altKey = void 0, u.metaKey = void 0, u.page = void 0, u.client = void 0, u.delta = void 0, u.rect = void 0, u.x0 = void 0, u.y0 = void 0, u.t0 = void 0, u.dt = void 0, u.duration = void 0, u.clientX0 = void 0, u.clientY0 = void 0, u.velocity = void 0, u.speed = void 0, u.swipe = void 0, u.axes = void 0, u.preEnd = void 0, s = s || r.element;
          var v = r.interactable, y = (v && v.options || Wn).deltaSource, S = Qe(v, s, o), x = a === "start", T = a === "end", P = x ? re(u) : r.prevEvent, _ = x ? r.coords.start : T ? { page: P.page, client: P.client, timeStamp: r.coords.cur.timeStamp } : r.coords.cur;
          return u.page = M({}, _.page), u.client = M({}, _.client), u.rect = M({}, r.rect), u.timeStamp = _.timeStamp, T || (u.page.x -= S.x, u.page.y -= S.y, u.client.x -= S.x, u.client.y -= S.y), u.ctrlKey = i.ctrlKey, u.altKey = i.altKey, u.shiftKey = i.shiftKey, u.metaKey = i.metaKey, u.button = i.button, u.buttons = i.buttons, u.target = s, u.currentTarget = s, u.preEnd = l, u.type = h || o + (a || ""), u.interactable = v, u.t0 = x ? r.pointers[r.pointers.length - 1].downTime : P.t0, u.x0 = r.coords.start.page.x - S.x, u.y0 = r.coords.start.page.y - S.y, u.clientX0 = r.coords.start.client.x - S.x, u.clientY0 = r.coords.start.client.y - S.y, u.delta = x || T ? { x: 0, y: 0 } : { x: u[y].x - P[y].x, y: u[y].y - P[y].y }, u.dt = r.coords.delta.timeStamp, u.duration = u.timeStamp - u.t0, u.velocity = M({}, r.coords.velocity[y]), u.speed = We(u.velocity.x, u.velocity.y), u.swipe = T || a === "inertiastart" ? u.getSwipe() : null, u;
        }
        return E(n, [{ key: "getSwipe", value: function() {
          var r = this._interaction;
          if (r.prevEvent.speed < 600 || this.timeStamp - r.prevEvent.timeStamp > 150) return null;
          var i = 180 * Math.atan2(r.prevEvent.velocityY, r.prevEvent.velocityX) / Math.PI;
          i < 0 && (i += 360);
          var o = 112.5 <= i && i < 247.5, a = 202.5 <= i && i < 337.5;
          return { up: a, down: !a && 22.5 <= i && i < 157.5, left: o, right: !o && (292.5 <= i || i < 67.5), angle: i, speed: r.prevEvent.speed, velocity: { x: r.prevEvent.velocityX, y: r.prevEvent.velocityY } };
        } }, { key: "preventDefault", value: function() {
        } }, { key: "stopImmediatePropagation", value: function() {
          this.immediatePropagationStopped = this.propagationStopped = !0;
        } }, { key: "stopPropagation", value: function() {
          this.propagationStopped = !0;
        } }]), n;
      }(Xe);
      Object.defineProperties(sn.prototype, { pageX: { get: function() {
        return this.page.x;
      }, set: function(t) {
        this.page.x = t;
      } }, pageY: { get: function() {
        return this.page.y;
      }, set: function(t) {
        this.page.y = t;
      } }, clientX: { get: function() {
        return this.client.x;
      }, set: function(t) {
        this.client.x = t;
      } }, clientY: { get: function() {
        return this.client.y;
      }, set: function(t) {
        this.client.y = t;
      } }, dx: { get: function() {
        return this.delta.x;
      }, set: function(t) {
        this.delta.x = t;
      } }, dy: { get: function() {
        return this.delta.y;
      }, set: function(t) {
        this.delta.y = t;
      } }, velocityX: { get: function() {
        return this.velocity.x;
      }, set: function(t) {
        this.velocity.x = t;
      } }, velocityY: { get: function() {
        return this.velocity.y;
      }, set: function(t) {
        this.velocity.y = t;
      } } });
      var Ti = E(function t(e, n, r, i, o) {
        m(this, t), this.id = void 0, this.pointer = void 0, this.event = void 0, this.downTime = void 0, this.downTarget = void 0, this.id = e, this.pointer = n, this.event = r, this.downTime = i, this.downTarget = o;
      }), zi = function(t) {
        return t.interactable = "", t.element = "", t.prepared = "", t.pointerIsDown = "", t.pointerWasMoved = "", t._proxy = "", t;
      }({}), Nn = function(t) {
        return t.start = "", t.move = "", t.end = "", t.stop = "", t.interacting = "", t;
      }({}), _i = 0, Oi = function() {
        function t(e) {
          var n = this, r = e.pointerType, i = e.scopeFire;
          m(this, t), this.interactable = null, this.element = null, this.rect = null, this._rects = void 0, this.edges = null, this._scopeFire = void 0, this.prepared = { name: null, axis: null, edges: null }, this.pointerType = void 0, this.pointers = [], this.downEvent = null, this.downPointer = {}, this._latestPointer = { pointer: null, event: null, eventTarget: null }, this.prevEvent = null, this.pointerIsDown = !1, this.pointerWasMoved = !1, this._interacting = !1, this._ending = !1, this._stopped = !0, this._proxy = void 0, this.simulation = null, this.doMove = bt(function(u) {
            this.move(u);
          }, "The interaction.doMove() method has been renamed to interaction.move()"), this.coords = { start: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 }, prev: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 }, cur: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 }, delta: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 }, velocity: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 } }, this._id = _i++, this._scopeFire = i, this.pointerType = r;
          var o = this;
          this._proxy = {};
          var a = function(u) {
            Object.defineProperty(n._proxy, u, { get: function() {
              return o[u];
            } });
          };
          for (var s in zi) a(s);
          var l = function(u) {
            Object.defineProperty(n._proxy, u, { value: function() {
              return o[u].apply(o, arguments);
            } });
          };
          for (var h in Nn) l(h);
          this._scopeFire("interactions:new", { interaction: this });
        }
        return E(t, [{ key: "pointerMoveTolerance", get: function() {
          return 1;
        } }, { key: "pointerDown", value: function(e, n, r) {
          var i = this.updatePointer(e, n, r, !0), o = this.pointers[i];
          this._scopeFire("interactions:down", { pointer: e, event: n, eventTarget: r, pointerIndex: i, pointerInfo: o, type: "down", interaction: this });
        } }, { key: "start", value: function(e, n, r) {
          return !(this.interacting() || !this.pointerIsDown || this.pointers.length < (e.name === "gesture" ? 2 : 1) || !n.options[e.name].enabled) && (tn(this.prepared, e), this.interactable = n, this.element = r, this.rect = n.getRect(r), this.edges = this.prepared.edges ? M({}, this.prepared.edges) : { left: !0, right: !0, top: !0, bottom: !0 }, this._stopped = !1, this._interacting = this._doPhase({ interaction: this, event: this.downEvent, phase: "start" }) && !this._stopped, this._interacting);
        } }, { key: "pointerMove", value: function(e, n, r) {
          this.simulation || this.modification && this.modification.endResult || this.updatePointer(e, n, r, !1);
          var i, o, a = this.coords.cur.page.x === this.coords.prev.page.x && this.coords.cur.page.y === this.coords.prev.page.y && this.coords.cur.client.x === this.coords.prev.client.x && this.coords.cur.client.y === this.coords.prev.client.y;
          this.pointerIsDown && !this.pointerWasMoved && (i = this.coords.cur.client.x - this.coords.start.client.x, o = this.coords.cur.client.y - this.coords.start.client.y, this.pointerWasMoved = We(i, o) > this.pointerMoveTolerance);
          var s, l, h, u = this.getPointerIndex(e), v = { pointer: e, pointerIndex: u, pointerInfo: this.pointers[u], event: n, type: "move", eventTarget: r, dx: i, dy: o, duplicate: a, interaction: this };
          a || (s = this.coords.velocity, l = this.coords.delta, h = Math.max(l.timeStamp / 1e3, 1e-3), s.page.x = l.page.x / h, s.page.y = l.page.y / h, s.client.x = l.client.x / h, s.client.y = l.client.y / h, s.timeStamp = h), this._scopeFire("interactions:move", v), a || this.simulation || (this.interacting() && (v.type = null, this.move(v)), this.pointerWasMoved && ct(this.coords.prev, this.coords.cur));
        } }, { key: "move", value: function(e) {
          e && e.event || Ae(this.coords.delta), (e = M({ pointer: this._latestPointer.pointer, event: this._latestPointer.event, eventTarget: this._latestPointer.eventTarget, interaction: this }, e || {})).phase = "move", this._doPhase(e);
        } }, { key: "pointerUp", value: function(e, n, r, i) {
          var o = this.getPointerIndex(e);
          o === -1 && (o = this.updatePointer(e, n, r, !1));
          var a = /cancel$/i.test(n.type) ? "cancel" : "up";
          this._scopeFire("interactions:".concat(a), { pointer: e, pointerIndex: o, pointerInfo: this.pointers[o], event: n, eventTarget: r, type: a, curEventTarget: i, interaction: this }), this.simulation || this.end(n), this.removePointer(e, n);
        } }, { key: "documentBlur", value: function(e) {
          this.end(e), this._scopeFire("interactions:blur", { event: e, type: "blur", interaction: this });
        } }, { key: "end", value: function(e) {
          var n;
          this._ending = !0, e = e || this._latestPointer.event, this.interacting() && (n = this._doPhase({ event: e, interaction: this, phase: "end" })), this._ending = !1, n === !0 && this.stop();
        } }, { key: "currentAction", value: function() {
          return this._interacting ? this.prepared.name : null;
        } }, { key: "interacting", value: function() {
          return this._interacting;
        } }, { key: "stop", value: function() {
          this._scopeFire("interactions:stop", { interaction: this }), this.interactable = this.element = null, this._interacting = !1, this._stopped = !0, this.prepared.name = this.prevEvent = null;
        } }, { key: "getPointerIndex", value: function(e) {
          var n = q(e);
          return this.pointerType === "mouse" || this.pointerType === "pen" ? this.pointers.length - 1 : Be(this.pointers, function(r) {
            return r.id === n;
          });
        } }, { key: "getPointerInfo", value: function(e) {
          return this.pointers[this.getPointerIndex(e)];
        } }, { key: "updatePointer", value: function(e, n, r, i) {
          var o, a, s, l = q(e), h = this.getPointerIndex(e), u = this.pointers[h];
          return i = i !== !1 && (i || /(down|start)$/i.test(n.type)), u ? u.pointer = e : (u = new Ti(l, e, n, null, null), h = this.pointers.length, this.pointers.push(u)), ae(this.coords.cur, this.pointers.map(function(v) {
            return v.pointer;
          }), this._now()), o = this.coords.delta, a = this.coords.prev, s = this.coords.cur, o.page.x = s.page.x - a.page.x, o.page.y = s.page.y - a.page.y, o.client.x = s.client.x - a.client.x, o.client.y = s.client.y - a.client.y, o.timeStamp = s.timeStamp - a.timeStamp, i && (this.pointerIsDown = !0, u.downTime = this.coords.cur.timeStamp, u.downTarget = r, Ze(this.downPointer, e), this.interacting() || (ct(this.coords.start, this.coords.cur), ct(this.coords.prev, this.coords.cur), this.downEvent = n, this.pointerWasMoved = !1)), this._updateLatestPointer(e, n, r), this._scopeFire("interactions:update-pointer", { pointer: e, event: n, eventTarget: r, down: i, pointerInfo: u, pointerIndex: h, interaction: this }), h;
        } }, { key: "removePointer", value: function(e, n) {
          var r = this.getPointerIndex(e);
          if (r !== -1) {
            var i = this.pointers[r];
            this._scopeFire("interactions:remove-pointer", { pointer: e, event: n, eventTarget: null, pointerIndex: r, pointerInfo: i, interaction: this }), this.pointers.splice(r, 1), this.pointerIsDown = !1;
          }
        } }, { key: "_updateLatestPointer", value: function(e, n, r) {
          this._latestPointer.pointer = e, this._latestPointer.event = n, this._latestPointer.eventTarget = r;
        } }, { key: "destroy", value: function() {
          this._latestPointer.pointer = null, this._latestPointer.event = null, this._latestPointer.eventTarget = null;
        } }, { key: "_createPreparedEvent", value: function(e, n, r, i) {
          return new sn(this, e, this.prepared.name, n, this.element, r, i);
        } }, { key: "_fireEvent", value: function(e) {
          var n;
          (n = this.interactable) == null || n.fire(e), (!this.prevEvent || e.timeStamp >= this.prevEvent.timeStamp) && (this.prevEvent = e);
        } }, { key: "_doPhase", value: function(e) {
          var n = e.event, r = e.phase, i = e.preEnd, o = e.type, a = this.rect;
          if (a && r === "move" && (Je(this.edges, a, this.coords.delta[this.interactable.options.deltaSource]), a.width = a.right - a.left, a.height = a.bottom - a.top), this._scopeFire("interactions:before-action-".concat(r), e) === !1) return !1;
          var s = e.iEvent = this._createPreparedEvent(n, r, i, o);
          return this._scopeFire("interactions:action-".concat(r), e), r === "start" && (this.prevEvent = s), this._fireEvent(s), this._scopeFire("interactions:after-action-".concat(r), e), !0;
        } }, { key: "_now", value: function() {
          return Date.now();
        } }]), t;
      }();
      function qn(t) {
        Xn(t.interaction);
      }
      function Xn(t) {
        if (!function(n) {
          return !(!n.offset.pending.x && !n.offset.pending.y);
        }(t)) return !1;
        var e = t.offset.pending;
        return cn(t.coords.cur, e), cn(t.coords.delta, e), Je(t.edges, t.rect, e), e.x = 0, e.y = 0, !0;
      }
      function Pi(t) {
        var e = t.x, n = t.y;
        this.offset.pending.x += e, this.offset.pending.y += n, this.offset.total.x += e, this.offset.total.y += n;
      }
      function cn(t, e) {
        var n = t.page, r = t.client, i = e.x, o = e.y;
        n.x += i, n.y += o, r.x += i, r.y += o;
      }
      Nn.offsetBy = "";
      var Mi = { id: "offset", before: ["modifiers", "pointer-events", "actions", "inertia"], install: function(t) {
        t.Interaction.prototype.offsetBy = Pi;
      }, listeners: { "interactions:new": function(t) {
        t.interaction.offset = { total: { x: 0, y: 0 }, pending: { x: 0, y: 0 } };
      }, "interactions:update-pointer": function(t) {
        return function(e) {
          e.pointerIsDown && (cn(e.coords.cur, e.offset.total), e.offset.pending.x = 0, e.offset.pending.y = 0);
        }(t.interaction);
      }, "interactions:before-action-start": qn, "interactions:before-action-move": qn, "interactions:before-action-end": function(t) {
        var e = t.interaction;
        if (Xn(e)) return e.move({ offset: !0 }), e.end(), !1;
      }, "interactions:stop": function(t) {
        var e = t.interaction;
        e.offset.total.x = 0, e.offset.total.y = 0, e.offset.pending.x = 0, e.offset.pending.y = 0;
      } } }, Yn = Mi, Di = function() {
        function t(e) {
          m(this, t), this.active = !1, this.isModified = !1, this.smoothEnd = !1, this.allowResume = !1, this.modification = void 0, this.modifierCount = 0, this.modifierArg = void 0, this.startCoords = void 0, this.t0 = 0, this.v0 = 0, this.te = 0, this.targetOffset = void 0, this.modifiedOffset = void 0, this.currentOffset = void 0, this.lambda_v0 = 0, this.one_ve_v0 = 0, this.timeout = void 0, this.interaction = void 0, this.interaction = e;
        }
        return E(t, [{ key: "start", value: function(e) {
          var n = this.interaction, r = Bt(n);
          if (!r || !r.enabled) return !1;
          var i = n.coords.velocity.client, o = We(i.x, i.y), a = this.modification || (this.modification = new an(n));
          if (a.copyFrom(n.modification), this.t0 = n._now(), this.allowResume = r.allowResume, this.v0 = o, this.currentOffset = { x: 0, y: 0 }, this.startCoords = n.coords.cur.page, this.modifierArg = a.fillArg({ pageCoords: this.startCoords, preEnd: !0, phase: "inertiastart" }), this.t0 - n.coords.cur.timeStamp < 50 && o > r.minSpeed && o > r.endSpeed) this.startInertia();
          else {
            if (a.result = a.setAll(this.modifierArg), !a.result.changed) return !1;
            this.startSmoothEnd();
          }
          return n.modification.result.rect = null, n.offsetBy(this.targetOffset), n._doPhase({ interaction: n, event: e, phase: "inertiastart" }), n.offsetBy({ x: -this.targetOffset.x, y: -this.targetOffset.y }), n.modification.result.rect = null, this.active = !0, n.simulation = this, !0;
        } }, { key: "startInertia", value: function() {
          var e = this, n = this.interaction.coords.velocity.client, r = Bt(this.interaction), i = r.resistance, o = -Math.log(r.endSpeed / this.v0) / i;
          this.targetOffset = { x: (n.x - o) / i, y: (n.y - o) / i }, this.te = o, this.lambda_v0 = i / this.v0, this.one_ve_v0 = 1 - r.endSpeed / this.v0;
          var a = this.modification, s = this.modifierArg;
          s.pageCoords = { x: this.startCoords.x + this.targetOffset.x, y: this.startCoords.y + this.targetOffset.y }, a.result = a.setAll(s), a.result.changed && (this.isModified = !0, this.modifiedOffset = { x: this.targetOffset.x + a.result.delta.x, y: this.targetOffset.y + a.result.delta.y }), this.onNextFrame(function() {
            return e.inertiaTick();
          });
        } }, { key: "startSmoothEnd", value: function() {
          var e = this;
          this.smoothEnd = !0, this.isModified = !0, this.targetOffset = { x: this.modification.result.delta.x, y: this.modification.result.delta.y }, this.onNextFrame(function() {
            return e.smoothEndTick();
          });
        } }, { key: "onNextFrame", value: function(e) {
          var n = this;
          this.timeout = Ye.request(function() {
            n.active && e();
          });
        } }, { key: "inertiaTick", value: function() {
          var e, n, r, i, o, a, s, l = this, h = this.interaction, u = Bt(h).resistance, v = (h._now() - this.t0) / 1e3;
          if (v < this.te) {
            var y, S = 1 - (Math.exp(-u * v) - this.lambda_v0) / this.one_ve_v0;
            this.isModified ? (e = 0, n = 0, r = this.targetOffset.x, i = this.targetOffset.y, o = this.modifiedOffset.x, a = this.modifiedOffset.y, y = { x: $n(s = S, e, r, o), y: $n(s, n, i, a) }) : y = { x: this.targetOffset.x * S, y: this.targetOffset.y * S };
            var x = { x: y.x - this.currentOffset.x, y: y.y - this.currentOffset.y };
            this.currentOffset.x += x.x, this.currentOffset.y += x.y, h.offsetBy(x), h.move(), this.onNextFrame(function() {
              return l.inertiaTick();
            });
          } else h.offsetBy({ x: this.modifiedOffset.x - this.currentOffset.x, y: this.modifiedOffset.y - this.currentOffset.y }), this.end();
        } }, { key: "smoothEndTick", value: function() {
          var e = this, n = this.interaction, r = n._now() - this.t0, i = Bt(n).smoothEndDuration;
          if (r < i) {
            var o = { x: Vn(r, 0, this.targetOffset.x, i), y: Vn(r, 0, this.targetOffset.y, i) }, a = { x: o.x - this.currentOffset.x, y: o.y - this.currentOffset.y };
            this.currentOffset.x += a.x, this.currentOffset.y += a.y, n.offsetBy(a), n.move({ skipModifiers: this.modifierCount }), this.onNextFrame(function() {
              return e.smoothEndTick();
            });
          } else n.offsetBy({ x: this.targetOffset.x - this.currentOffset.x, y: this.targetOffset.y - this.currentOffset.y }), this.end();
        } }, { key: "resume", value: function(e) {
          var n = e.pointer, r = e.event, i = e.eventTarget, o = this.interaction;
          o.offsetBy({ x: -this.currentOffset.x, y: -this.currentOffset.y }), o.updatePointer(n, r, i, !0), o._doPhase({ interaction: o, event: r, phase: "resume" }), ct(o.coords.prev, o.coords.cur), this.stop();
        } }, { key: "end", value: function() {
          this.interaction.move(), this.interaction.end(), this.stop();
        } }, { key: "stop", value: function() {
          this.active = this.smoothEnd = !1, this.interaction.simulation = null, Ye.cancel(this.timeout);
        } }]), t;
      }();
      function Bt(t) {
        var e = t.interactable, n = t.prepared;
        return e && e.options && n.name && e.options[n.name].inertia;
      }
      var Ri = { id: "inertia", before: ["modifiers", "actions"], install: function(t) {
        var e = t.defaults;
        t.usePlugin(Yn), t.usePlugin(Hn), t.actions.phases.inertiastart = !0, t.actions.phases.resume = !0, e.perAction.inertia = { enabled: !1, resistance: 10, minSpeed: 100, endSpeed: 10, allowResume: !0, smoothEndDuration: 300 };
      }, listeners: { "interactions:new": function(t) {
        var e = t.interaction;
        e.inertia = new Di(e);
      }, "interactions:before-action-end": function(t) {
        var e = t.interaction, n = t.event;
        return (!e._interacting || e.simulation || !e.inertia.start(n)) && null;
      }, "interactions:down": function(t) {
        var e = t.interaction, n = t.eventTarget, r = e.inertia;
        if (r.active) for (var i = n; b.element(i); ) {
          if (i === e.element) {
            r.resume(t);
            break;
          }
          i = ue(i);
        }
      }, "interactions:stop": function(t) {
        var e = t.interaction.inertia;
        e.active && e.stop();
      }, "interactions:before-action-resume": function(t) {
        var e = t.interaction.modification;
        e.stop(t), e.start(t, t.interaction.coords.cur.page), e.applyToInteraction(t);
      }, "interactions:before-action-inertiastart": function(t) {
        return t.interaction.modification.setAndApply(t);
      }, "interactions:action-resume": wt, "interactions:action-inertiastart": wt, "interactions:after-action-inertiastart": function(t) {
        return t.interaction.modification.restoreInteractionCoords(t);
      }, "interactions:after-action-resume": function(t) {
        return t.interaction.modification.restoreInteractionCoords(t);
      } } };
      function $n(t, e, n, r) {
        var i = 1 - t;
        return i * i * e + 2 * i * t * n + t * t * r;
      }
      function Vn(t, e, n, r) {
        return -n * (t /= r) * (t - 2) + e;
      }
      var Ii = Ri;
      function Gn(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          if (t.immediatePropagationStopped) break;
          r(t);
        }
      }
      var Un = function() {
        function t(e) {
          m(this, t), this.options = void 0, this.types = {}, this.propagationStopped = !1, this.immediatePropagationStopped = !1, this.global = void 0, this.options = M({}, e || {});
        }
        return E(t, [{ key: "fire", value: function(e) {
          var n, r = this.global;
          (n = this.types[e.type]) && Gn(e, n), !e.propagationStopped && r && (n = r[e.type]) && Gn(e, n);
        } }, { key: "on", value: function(e, n) {
          var r = Ce(e, n);
          for (e in r) this.types[e] = lt(this.types[e] || [], r[e]);
        } }, { key: "off", value: function(e, n) {
          var r = Ce(e, n);
          for (e in r) {
            var i = this.types[e];
            if (i && i.length) for (var o = 0, a = r[e]; o < a.length; o++) {
              var s = a[o], l = i.indexOf(s);
              l !== -1 && i.splice(l, 1);
            }
          }
        } }, { key: "getRect", value: function(e) {
          return null;
        } }]), t;
      }(), Ci = function() {
        function t(e) {
          m(this, t), this.currentTarget = void 0, this.originalEvent = void 0, this.type = void 0, this.originalEvent = e, Ze(this, e);
        }
        return E(t, [{ key: "preventOriginalDefault", value: function() {
          this.originalEvent.preventDefault();
        } }, { key: "stopPropagation", value: function() {
          this.originalEvent.stopPropagation();
        } }, { key: "stopImmediatePropagation", value: function() {
          this.originalEvent.stopImmediatePropagation();
        } }]), t;
      }();
      function xt(t) {
        return b.object(t) ? { capture: !!t.capture, passive: !!t.passive } : { capture: !!t, passive: !1 };
      }
      function Ft(t, e) {
        return t === e || (typeof t == "boolean" ? !!e.capture === t && !e.passive : !!t.capture == !!e.capture && !!t.passive == !!e.passive);
      }
      var Ai = { id: "events", install: function(t) {
        var e, n = [], r = {}, i = [], o = { add: a, remove: s, addDelegate: function(u, v, y, S, x) {
          var T = xt(x);
          if (!r[y]) {
            r[y] = [];
            for (var P = 0; P < i.length; P++) {
              var _ = i[P];
              a(_, y, l), a(_, y, h, !0);
            }
          }
          var D = r[y], F = yt(D, function(N) {
            return N.selector === u && N.context === v;
          });
          F || (F = { selector: u, context: v, listeners: [] }, D.push(F)), F.listeners.push({ func: S, options: T });
        }, removeDelegate: function(u, v, y, S, x) {
          var T, P = xt(x), _ = r[y], D = !1;
          if (_)
            for (T = _.length - 1; T >= 0; T--) {
              var F = _[T];
              if (F.selector === u && F.context === v) {
                for (var N = F.listeners, I = N.length - 1; I >= 0; I--) {
                  var L = N[I];
                  if (L.func === S && Ft(L.options, P)) {
                    N.splice(I, 1), N.length || (_.splice(T, 1), s(v, y, l), s(v, y, h, !0)), D = !0;
                    break;
                  }
                }
                if (D) break;
              }
            }
        }, delegateListener: l, delegateUseCapture: h, delegatedEvents: r, documents: i, targets: n, supportsOptions: !1, supportsPassive: !1 };
        function a(u, v, y, S) {
          if (u.addEventListener) {
            var x = xt(S), T = yt(n, function(P) {
              return P.eventTarget === u;
            });
            T || (T = { eventTarget: u, events: {} }, n.push(T)), T.events[v] || (T.events[v] = []), yt(T.events[v], function(P) {
              return P.func === y && Ft(P.options, x);
            }) || (u.addEventListener(v, y, o.supportsOptions ? x : x.capture), T.events[v].push({ func: y, options: x }));
          }
        }
        function s(u, v, y, S) {
          if (u.addEventListener && u.removeEventListener) {
            var x = Be(n, function(pe) {
              return pe.eventTarget === u;
            }), T = n[x];
            if (T && T.events) if (v !== "all") {
              var P = !1, _ = T.events[v];
              if (_) {
                if (y === "all") {
                  for (var D = _.length - 1; D >= 0; D--) {
                    var F = _[D];
                    s(u, v, F.func, F.options);
                  }
                  return;
                }
                for (var N = xt(S), I = 0; I < _.length; I++) {
                  var L = _[I];
                  if (L.func === y && Ft(L.options, N)) {
                    u.removeEventListener(v, y, o.supportsOptions ? N : N.capture), _.splice(I, 1), _.length === 0 && (delete T.events[v], P = !0);
                    break;
                  }
                }
              }
              P && !Object.keys(T.events).length && n.splice(x, 1);
            } else for (v in T.events) T.events.hasOwnProperty(v) && s(u, v, "all");
          }
        }
        function l(u, v) {
          for (var y = xt(v), S = new Ci(u), x = r[u.type], T = qe(u)[0], P = T; b.element(P); ) {
            for (var _ = 0; _ < x.length; _++) {
              var D = x[_], F = D.selector, N = D.context;
              if (se(P, F) && j(N, T) && j(N, P)) {
                var I = D.listeners;
                S.currentTarget = P;
                for (var L = 0; L < I.length; L++) {
                  var pe = I[L];
                  Ft(pe.options, y) && pe.func(S);
                }
              }
            }
            P = ue(P);
          }
        }
        function h(u) {
          return l(u, !0);
        }
        return (e = t.document) == null || e.createElement("div").addEventListener("test", null, { get capture() {
          return o.supportsOptions = !0;
        }, get passive() {
          return o.supportsPassive = !0;
        } }), t.events = o, o;
      } }, ln = { methodOrder: ["simulationResume", "mouseOrPen", "hasPointer", "idle"], search: function(t) {
        for (var e = 0, n = ln.methodOrder; e < n.length; e++) {
          var r = n[e], i = ln[r](t);
          if (i) return i;
        }
        return null;
      }, simulationResume: function(t) {
        var e = t.pointerType, n = t.eventType, r = t.eventTarget, i = t.scope;
        if (!/down|start/i.test(n)) return null;
        for (var o = 0, a = i.interactions.list; o < a.length; o++) {
          var s = a[o], l = r;
          if (s.simulation && s.simulation.allowResume && s.pointerType === e) for (; l; ) {
            if (l === s.element) return s;
            l = ue(l);
          }
        }
        return null;
      }, mouseOrPen: function(t) {
        var e, n = t.pointerId, r = t.pointerType, i = t.eventType, o = t.scope;
        if (r !== "mouse" && r !== "pen") return null;
        for (var a = 0, s = o.interactions.list; a < s.length; a++) {
          var l = s[a];
          if (l.pointerType === r) {
            if (l.simulation && !Kn(l, n)) continue;
            if (l.interacting()) return l;
            e || (e = l);
          }
        }
        if (e) return e;
        for (var h = 0, u = o.interactions.list; h < u.length; h++) {
          var v = u[h];
          if (!(v.pointerType !== r || /down/i.test(i) && v.simulation)) return v;
        }
        return null;
      }, hasPointer: function(t) {
        for (var e = t.pointerId, n = 0, r = t.scope.interactions.list; n < r.length; n++) {
          var i = r[n];
          if (Kn(i, e)) return i;
        }
        return null;
      }, idle: function(t) {
        for (var e = t.pointerType, n = 0, r = t.scope.interactions.list; n < r.length; n++) {
          var i = r[n];
          if (i.pointers.length === 1) {
            var o = i.interactable;
            if (o && (!o.options.gesture || !o.options.gesture.enabled)) continue;
          } else if (i.pointers.length >= 2) continue;
          if (!i.interacting() && e === i.pointerType) return i;
        }
        return null;
      } };
      function Kn(t, e) {
        return t.pointers.some(function(n) {
          return n.id === e;
        });
      }
      var Bi = ln, un = ["pointerDown", "pointerMove", "pointerUp", "updatePointer", "removePointer", "windowBlur"];
      function Jn(t, e) {
        return function(n) {
          var r = e.interactions.list, i = Ne(n), o = qe(n), a = o[0], s = o[1], l = [];
          if (/^touch/.test(n.type)) {
            e.prevTouchTime = e.now();
            for (var h = 0, u = n.changedTouches; h < u.length; h++) {
              var v = u[h], y = { pointer: v, pointerId: q(v), pointerType: i, eventType: n.type, eventTarget: a, curEventTarget: s, scope: e }, S = Qn(y);
              l.push([y.pointer, y.eventTarget, y.curEventTarget, S]);
            }
          } else {
            var x = !1;
            if (!K.supportsPointerEvent && /mouse/.test(n.type)) {
              for (var T = 0; T < r.length && !x; T++) x = r[T].pointerType !== "mouse" && r[T].pointerIsDown;
              x = x || e.now() - e.prevTouchTime < 500 || n.timeStamp === 0;
            }
            if (!x) {
              var P = { pointer: n, pointerId: q(n), pointerType: i, eventType: n.type, curEventTarget: s, eventTarget: a, scope: e }, _ = Qn(P);
              l.push([P.pointer, P.eventTarget, P.curEventTarget, _]);
            }
          }
          for (var D = 0; D < l.length; D++) {
            var F = l[D], N = F[0], I = F[1], L = F[2];
            F[3][t](N, n, I, L);
          }
        };
      }
      function Qn(t) {
        var e = t.pointerType, n = t.scope, r = { interaction: Bi.search(t), searchDetails: t };
        return n.fire("interactions:find", r), r.interaction || n.interactions.new({ pointerType: e });
      }
      function fn(t, e) {
        var n = t.doc, r = t.scope, i = t.options, o = r.interactions.docEvents, a = r.events, s = a[e];
        for (var l in r.browser.isIOS && !i.events && (i.events = { passive: !1 }), a.delegatedEvents) s(n, l, a.delegateListener), s(n, l, a.delegateUseCapture, !0);
        for (var h = i && i.events, u = 0; u < o.length; u++) {
          var v = o[u];
          s(n, v.type, v.listener, h);
        }
      }
      var Fi = { id: "core/interactions", install: function(t) {
        for (var e = {}, n = 0; n < un.length; n++) {
          var r = un[n];
          e[r] = Jn(r, t);
        }
        var i, o = K.pEventTypes;
        function a() {
          for (var s = 0, l = t.interactions.list; s < l.length; s++) {
            var h = l[s];
            if (h.pointerIsDown && h.pointerType === "touch" && !h._interacting) for (var u = function() {
              var S = y[v];
              t.documents.some(function(x) {
                return j(x.doc, S.downTarget);
              }) || h.removePointer(S.pointer, S.event);
            }, v = 0, y = h.pointers; v < y.length; v++) u();
          }
        }
        (i = $.PointerEvent ? [{ type: o.down, listener: a }, { type: o.down, listener: e.pointerDown }, { type: o.move, listener: e.pointerMove }, { type: o.up, listener: e.pointerUp }, { type: o.cancel, listener: e.pointerUp }] : [{ type: "mousedown", listener: e.pointerDown }, { type: "mousemove", listener: e.pointerMove }, { type: "mouseup", listener: e.pointerUp }, { type: "touchstart", listener: a }, { type: "touchstart", listener: e.pointerDown }, { type: "touchmove", listener: e.pointerMove }, { type: "touchend", listener: e.pointerUp }, { type: "touchcancel", listener: e.pointerUp }]).push({ type: "blur", listener: function(s) {
          for (var l = 0, h = t.interactions.list; l < h.length; l++)
            h[l].documentBlur(s);
        } }), t.prevTouchTime = 0, t.Interaction = function(s) {
          X(h, s);
          var l = ie(h);
          function h() {
            return m(this, h), l.apply(this, arguments);
          }
          return E(h, [{ key: "pointerMoveTolerance", get: function() {
            return t.interactions.pointerMoveTolerance;
          }, set: function(u) {
            t.interactions.pointerMoveTolerance = u;
          } }, { key: "_now", value: function() {
            return t.now();
          } }]), h;
        }(Oi), t.interactions = { list: [], new: function(s) {
          s.scopeFire = function(h, u) {
            return t.fire(h, u);
          };
          var l = new t.Interaction(s);
          return t.interactions.list.push(l), l;
        }, listeners: e, docEvents: i, pointerMoveTolerance: 1 }, t.usePlugin(Ln);
      }, listeners: { "scope:add-document": function(t) {
        return fn(t, "add");
      }, "scope:remove-document": function(t) {
        return fn(t, "remove");
      }, "interactable:unset": function(t, e) {
        for (var n = t.interactable, r = e.interactions.list.length - 1; r >= 0; r--) {
          var i = e.interactions.list[r];
          i.interactable === n && (i.stop(), e.fire("interactions:destroy", { interaction: i }), i.destroy(), e.interactions.list.length > 2 && e.interactions.list.splice(r, 1));
        }
      } }, onDocSignal: fn, doOnInteractions: Jn, methodNames: un }, ji = Fi, Ve = function(t) {
        return t[t.On = 0] = "On", t[t.Off = 1] = "Off", t;
      }(Ve || {}), Li = function() {
        function t(e, n, r, i) {
          m(this, t), this.target = void 0, this.options = void 0, this._actions = void 0, this.events = new Un(), this._context = void 0, this._win = void 0, this._doc = void 0, this._scopeEvents = void 0, this._actions = n.actions, this.target = e, this._context = n.context || r, this._win = Q(vt(e) ? this._context : e), this._doc = this._win.document, this._scopeEvents = i, this.set(n);
        }
        return E(t, [{ key: "_defaults", get: function() {
          return { base: {}, perAction: {}, actions: {} };
        } }, { key: "setOnEvents", value: function(e, n) {
          return b.func(n.onstart) && this.on("".concat(e, "start"), n.onstart), b.func(n.onmove) && this.on("".concat(e, "move"), n.onmove), b.func(n.onend) && this.on("".concat(e, "end"), n.onend), b.func(n.oninertiastart) && this.on("".concat(e, "inertiastart"), n.oninertiastart), this;
        } }, { key: "updatePerActionListeners", value: function(e, n, r) {
          var i, o = this, a = (i = this._actions.map[e]) == null ? void 0 : i.filterEventType, s = function(l) {
            return (a == null || a(l)) && Ct(l, o._actions);
          };
          (b.array(n) || b.object(n)) && this._onOff(Ve.Off, e, n, void 0, s), (b.array(r) || b.object(r)) && this._onOff(Ve.On, e, r, void 0, s);
        } }, { key: "setPerAction", value: function(e, n) {
          var r = this._defaults;
          for (var i in n) {
            var o = i, a = this.options[e], s = n[o];
            o === "listeners" && this.updatePerActionListeners(e, a.listeners, s), b.array(s) ? a[o] = ut(s) : b.plainObject(s) ? (a[o] = M(a[o] || {}, dt(s)), b.object(r.perAction[o]) && "enabled" in r.perAction[o] && (a[o].enabled = s.enabled !== !1)) : b.bool(s) && b.object(r.perAction[o]) ? a[o].enabled = s : a[o] = s;
          }
        } }, { key: "getRect", value: function(e) {
          return e = e || (b.element(this.target) ? this.target : null), b.string(this.target) && (e = e || this._context.querySelector(this.target)), _e(e);
        } }, { key: "rectChecker", value: function(e) {
          var n = this;
          return b.func(e) ? (this.getRect = function(r) {
            var i = M({}, e.apply(n, r));
            return "width" in i || (i.width = i.right - i.left, i.height = i.bottom - i.top), i;
          }, this) : e === null ? (delete this.getRect, this) : this.getRect;
        } }, { key: "_backCompatOption", value: function(e, n) {
          if (vt(n) || b.object(n)) {
            for (var r in this.options[e] = n, this._actions.map) this.options[r][e] = n;
            return this;
          }
          return this.options[e];
        } }, { key: "origin", value: function(e) {
          return this._backCompatOption("origin", e);
        } }, { key: "deltaSource", value: function(e) {
          return e === "page" || e === "client" ? (this.options.deltaSource = e, this) : this.options.deltaSource;
        } }, { key: "getAllElements", value: function() {
          var e = this.target;
          return b.string(e) ? Array.from(this._context.querySelectorAll(e)) : b.func(e) && e.getAllElements ? e.getAllElements() : b.element(e) ? [e] : [];
        } }, { key: "context", value: function() {
          return this._context;
        } }, { key: "inContext", value: function(e) {
          return this._context === e.ownerDocument || j(this._context, e);
        } }, { key: "testIgnoreAllow", value: function(e, n, r) {
          return !this.testIgnore(e.ignoreFrom, n, r) && this.testAllow(e.allowFrom, n, r);
        } }, { key: "testAllow", value: function(e, n, r) {
          return !e || !!b.element(r) && (b.string(e) ? ge(r, e, n) : !!b.element(e) && j(e, r));
        } }, { key: "testIgnore", value: function(e, n, r) {
          return !(!e || !b.element(r)) && (b.string(e) ? ge(r, e, n) : !!b.element(e) && j(e, r));
        } }, { key: "fire", value: function(e) {
          return this.events.fire(e), this;
        } }, { key: "_onOff", value: function(e, n, r, i, o) {
          b.object(n) && !b.array(n) && (i = r, r = null);
          var a = Ce(n, r, o);
          for (var s in a) {
            s === "wheel" && (s = K.wheelEvent);
            for (var l = 0, h = a[s]; l < h.length; l++) {
              var u = h[l];
              Ct(s, this._actions) ? this.events[e === Ve.On ? "on" : "off"](s, u) : b.string(this.target) ? this._scopeEvents[e === Ve.On ? "addDelegate" : "removeDelegate"](this.target, this._context, s, u, i) : this._scopeEvents[e === Ve.On ? "add" : "remove"](this.target, s, u, i);
            }
          }
          return this;
        } }, { key: "on", value: function(e, n, r) {
          return this._onOff(Ve.On, e, n, r);
        } }, { key: "off", value: function(e, n, r) {
          return this._onOff(Ve.Off, e, n, r);
        } }, { key: "set", value: function(e) {
          var n = this._defaults;
          for (var r in b.object(e) || (e = {}), this.options = dt(n.base), this._actions.methodDict) {
            var i = r, o = this._actions.methodDict[i];
            this.options[i] = {}, this.setPerAction(i, M(M({}, n.perAction), n.actions[i])), this[o](e[i]);
          }
          for (var a in e) a !== "getRect" ? b.func(this[a]) && this[a](e[a]) : this.rectChecker(e.getRect);
          return this;
        } }, { key: "unset", value: function() {
          if (b.string(this.target)) for (var e in this._scopeEvents.delegatedEvents) for (var n = this._scopeEvents.delegatedEvents[e], r = n.length - 1; r >= 0; r--) {
            var i = n[r], o = i.selector, a = i.context, s = i.listeners;
            o === this.target && a === this._context && n.splice(r, 1);
            for (var l = s.length - 1; l >= 0; l--) this._scopeEvents.removeDelegate(this.target, this._context, e, s[l][0], s[l][1]);
          }
          else this._scopeEvents.remove(this.target, "all");
        } }]), t;
      }(), Hi = function() {
        function t(e) {
          var n = this;
          m(this, t), this.list = [], this.selectorMap = {}, this.scope = void 0, this.scope = e, e.addListeners({ "interactable:unset": function(r) {
            var i = r.interactable, o = i.target, a = b.string(o) ? n.selectorMap[o] : o[n.scope.id], s = Be(a, function(l) {
              return l === i;
            });
            a.splice(s, 1);
          } });
        }
        return E(t, [{ key: "new", value: function(e, n) {
          n = M(n || {}, { actions: this.scope.actions });
          var r = new this.scope.Interactable(e, n, this.scope.document, this.scope.events);
          return this.scope.addDocument(r._doc), this.list.push(r), b.string(e) ? (this.selectorMap[e] || (this.selectorMap[e] = []), this.selectorMap[e].push(r)) : (r.target[this.scope.id] || Object.defineProperty(e, this.scope.id, { value: [], configurable: !0 }), e[this.scope.id].push(r)), this.scope.fire("interactable:new", { target: e, options: n, interactable: r, win: this.scope._win }), r;
        } }, { key: "getExisting", value: function(e, n) {
          var r = n && n.context || this.scope.document, i = b.string(e), o = i ? this.selectorMap[e] : e[this.scope.id];
          if (o) return yt(o, function(a) {
            return a._context === r && (i || a.inContext(e));
          });
        } }, { key: "forEachMatch", value: function(e, n) {
          for (var r = 0, i = this.list; r < i.length; r++) {
            var o = i[r], a = void 0;
            if ((b.string(o.target) ? b.element(e) && se(e, o.target) : e === o.target) && o.inContext(e) && (a = n(o)), a !== void 0) return a;
          }
        } }]), t;
      }(), Wi = function() {
        function t() {
          var e = this;
          m(this, t), this.id = "__interact_scope_".concat(Math.floor(100 * Math.random())), this.isInitialized = !1, this.listenerMaps = [], this.browser = K, this.defaults = dt(Wn), this.Eventable = Un, this.actions = { map: {}, phases: { start: !0, move: !0, end: !0 }, methodDict: {}, phaselessTypes: {} }, this.interactStatic = function(r) {
            var i = function o(a, s) {
              var l = r.interactables.getExisting(a, s);
              return l || ((l = r.interactables.new(a, s)).events.global = o.globalEvents), l;
            };
            return i.getPointerAverage = R, i.getTouchBBox = ce, i.getTouchDistance = fe, i.getTouchAngle = ye, i.getElementRect = _e, i.getElementClientRect = Ke, i.matchesSelector = se, i.closest = ke, i.globalEvents = {}, i.version = "1.10.27", i.scope = r, i.use = function(o, a) {
              return this.scope.usePlugin(o, a), this;
            }, i.isSet = function(o, a) {
              return !!this.scope.interactables.get(o, a && a.context);
            }, i.on = bt(function(o, a, s) {
              if (b.string(o) && o.search(" ") !== -1 && (o = o.trim().split(/ +/)), b.array(o)) {
                for (var l = 0, h = o; l < h.length; l++) {
                  var u = h[l];
                  this.on(u, a, s);
                }
                return this;
              }
              if (b.object(o)) {
                for (var v in o) this.on(v, o[v], a);
                return this;
              }
              return Ct(o, this.scope.actions) ? this.globalEvents[o] ? this.globalEvents[o].push(a) : this.globalEvents[o] = [a] : this.scope.events.add(this.scope.document, o, a, { options: s }), this;
            }, "The interact.on() method is being deprecated"), i.off = bt(function(o, a, s) {
              if (b.string(o) && o.search(" ") !== -1 && (o = o.trim().split(/ +/)), b.array(o)) {
                for (var l = 0, h = o; l < h.length; l++) {
                  var u = h[l];
                  this.off(u, a, s);
                }
                return this;
              }
              if (b.object(o)) {
                for (var v in o) this.off(v, o[v], a);
                return this;
              }
              var y;
              return Ct(o, this.scope.actions) ? o in this.globalEvents && (y = this.globalEvents[o].indexOf(a)) !== -1 && this.globalEvents[o].splice(y, 1) : this.scope.events.remove(this.scope.document, o, a, s), this;
            }, "The interact.off() method is being deprecated"), i.debug = function() {
              return this.scope;
            }, i.supportsTouch = function() {
              return K.supportsTouch;
            }, i.supportsPointerEvent = function() {
              return K.supportsPointerEvent;
            }, i.stop = function() {
              for (var o = 0, a = this.scope.interactions.list; o < a.length; o++) a[o].stop();
              return this;
            }, i.pointerMoveTolerance = function(o) {
              return b.number(o) ? (this.scope.interactions.pointerMoveTolerance = o, this) : this.scope.interactions.pointerMoveTolerance;
            }, i.addDocument = function(o, a) {
              this.scope.addDocument(o, a);
            }, i.removeDocument = function(o) {
              this.scope.removeDocument(o);
            }, i;
          }(this), this.InteractEvent = sn, this.Interactable = void 0, this.interactables = new Hi(this), this._win = void 0, this.document = void 0, this.window = void 0, this.documents = [], this._plugins = { list: [], map: {} }, this.onWindowUnload = function(r) {
            return e.removeDocument(r.target);
          };
          var n = this;
          this.Interactable = function(r) {
            X(o, r);
            var i = ie(o);
            function o() {
              return m(this, o), i.apply(this, arguments);
            }
            return E(o, [{ key: "_defaults", get: function() {
              return n.defaults;
            } }, { key: "set", value: function(a) {
              return xe(G(o.prototype), "set", this).call(this, a), n.fire("interactable:set", { options: a, interactable: this }), this;
            } }, { key: "unset", value: function() {
              xe(G(o.prototype), "unset", this).call(this);
              var a = n.interactables.list.indexOf(this);
              a < 0 || (n.interactables.list.splice(a, 1), n.fire("interactable:unset", { interactable: this }));
            } }]), o;
          }(Li);
        }
        return E(t, [{ key: "addListeners", value: function(e, n) {
          this.listenerMaps.push({ id: n, map: e });
        } }, { key: "fire", value: function(e, n) {
          for (var r = 0, i = this.listenerMaps; r < i.length; r++) {
            var o = i[r].map[e];
            if (o && o(n, this, e) === !1) return !1;
          }
        } }, { key: "init", value: function(e) {
          return this.isInitialized ? this : function(n, r) {
            return n.isInitialized = !0, b.window(r) && ne(r), $.init(r), K.init(r), Ye.init(r), n.window = r, n.document = r.document, n.usePlugin(ji), n.usePlugin(Ai), n;
          }(this, e);
        } }, { key: "pluginIsInstalled", value: function(e) {
          var n = e.id;
          return n ? !!this._plugins.map[n] : this._plugins.list.indexOf(e) !== -1;
        } }, { key: "usePlugin", value: function(e, n) {
          if (!this.isInitialized) return this;
          if (this.pluginIsInstalled(e)) return this;
          if (e.id && (this._plugins.map[e.id] = e), this._plugins.list.push(e), e.install && e.install(this, n), e.listeners && e.before) {
            for (var r = 0, i = this.listenerMaps.length, o = e.before.reduce(function(s, l) {
              return s[l] = !0, s[Zn(l)] = !0, s;
            }, {}); r < i; r++) {
              var a = this.listenerMaps[r].id;
              if (a && (o[a] || o[Zn(a)])) break;
            }
            this.listenerMaps.splice(r, 0, { id: e.id, map: e.listeners });
          } else e.listeners && this.listenerMaps.push({ id: e.id, map: e.listeners });
          return this;
        } }, { key: "addDocument", value: function(e, n) {
          if (this.getDocIndex(e) !== -1) return !1;
          var r = Q(e);
          n = n ? M({}, n) : {}, this.documents.push({ doc: e, options: n }), this.events.documents.push(e), e !== this.document && this.events.add(r, "unload", this.onWindowUnload), this.fire("scope:add-document", { doc: e, window: r, scope: this, options: n });
        } }, { key: "removeDocument", value: function(e) {
          var n = this.getDocIndex(e), r = Q(e), i = this.documents[n].options;
          this.events.remove(r, "unload", this.onWindowUnload), this.documents.splice(n, 1), this.events.documents.splice(n, 1), this.fire("scope:remove-document", { doc: e, window: r, scope: this, options: i });
        } }, { key: "getDocIndex", value: function(e) {
          for (var n = 0; n < this.documents.length; n++) if (this.documents[n].doc === e) return n;
          return -1;
        } }, { key: "getDocOptions", value: function(e) {
          var n = this.getDocIndex(e);
          return n === -1 ? null : this.documents[n].options;
        } }, { key: "now", value: function() {
          return (this.window.Date || Date).now();
        } }]), t;
      }();
      function Zn(t) {
        return t && t.replace(/\/.*$/, "");
      }
      var er = new Wi(), de = er.interactStatic, Ni = typeof globalThis < "u" ? globalThis : window;
      er.init(Ni);
      var qi = Object.freeze({ __proto__: null, edgeTarget: function() {
      }, elements: function() {
      }, grid: function(t) {
        var e = [["x", "y"], ["left", "top"], ["right", "bottom"], ["width", "height"]].filter(function(r) {
          var i = r[0], o = r[1];
          return i in t || o in t;
        }), n = function(r, i) {
          for (var o = t.range, a = t.limits, s = a === void 0 ? { left: -1 / 0, right: 1 / 0, top: -1 / 0, bottom: 1 / 0 } : a, l = t.offset, h = l === void 0 ? { x: 0, y: 0 } : l, u = { range: o, grid: t, x: null, y: null }, v = 0; v < e.length; v++) {
            var y = e[v], S = y[0], x = y[1], T = Math.round((r - h.x) / t[S]), P = Math.round((i - h.y) / t[x]);
            u[S] = Math.max(s.left, Math.min(s.right, T * t[S] + h.x)), u[x] = Math.max(s.top, Math.min(s.bottom, P * t[x] + h.y));
          }
          return u;
        };
        return n.grid = t, n.coordFields = e, n;
      } }), Xi = { id: "snappers", install: function(t) {
        var e = t.interactStatic;
        e.snappers = M(e.snappers || {}, qi), e.createSnapGrid = e.snappers.grid;
      } }, Yi = Xi, $i = { start: function(t) {
        var e = t.state, n = t.rect, r = t.edges, i = t.pageCoords, o = e.options, a = o.ratio, s = o.enabled, l = e.options, h = l.equalDelta, u = l.modifiers;
        a === "preserve" && (a = n.width / n.height), e.startCoords = M({}, i), e.startRect = M({}, n), e.ratio = a, e.equalDelta = h;
        var v = e.linkedEdges = { top: r.top || r.left && !r.bottom, left: r.left || r.top && !r.right, bottom: r.bottom || r.right && !r.top, right: r.right || r.bottom && !r.left };
        if (e.xIsPrimaryAxis = !(!r.left && !r.right), e.equalDelta) {
          var y = (v.left ? 1 : -1) * (v.top ? 1 : -1);
          e.edgeSign = { x: y, y };
        } else e.edgeSign = { x: v.left ? -1 : 1, y: v.top ? -1 : 1 };
        if (s !== !1 && M(r, v), u != null && u.length) {
          var S = new an(t.interaction);
          S.copyFrom(t.interaction.modification), S.prepareStates(u), e.subModification = S, S.startAll(d({}, t));
        }
      }, set: function(t) {
        var e = t.state, n = t.rect, r = t.coords, i = e.linkedEdges, o = M({}, r), a = e.equalDelta ? Vi : Gi;
        if (M(t.edges, i), a(e, e.xIsPrimaryAxis, r, n), !e.subModification) return null;
        var s = M({}, n);
        Je(i, s, { x: r.x - o.x, y: r.y - o.y });
        var l = e.subModification.setAll(d(d({}, t), {}, { rect: s, edges: i, pageCoords: r, prevCoords: r, prevRect: s })), h = l.delta;
        return l.changed && (a(e, Math.abs(h.x) > Math.abs(h.y), l.coords, l.rect), M(r, l.coords)), l.eventProps;
      }, defaults: { ratio: "preserve", equalDelta: !1, modifiers: [], enabled: !1 } };
      function Vi(t, e, n) {
        var r = t.startCoords, i = t.edgeSign;
        e ? n.y = r.y + (n.x - r.x) * i.y : n.x = r.x + (n.y - r.y) * i.x;
      }
      function Gi(t, e, n, r) {
        var i = t.startRect, o = t.startCoords, a = t.ratio, s = t.edgeSign;
        if (e) {
          var l = r.width / a;
          n.y = o.y + (l - i.height) * s.y;
        } else {
          var h = r.height * a;
          n.x = o.x + (h - i.width) * s.x;
        }
      }
      var Ui = $e($i, "aspectRatio"), tr = function() {
      };
      tr._defaults = {};
      var jt = tr;
      function tt(t, e, n) {
        return b.func(t) ? Re(t, e.interactable, e.element, [n.x, n.y, e]) : Re(t, e.interactable, e.element);
      }
      var Lt = { start: function(t) {
        var e = t.rect, n = t.startOffset, r = t.state, i = t.interaction, o = t.pageCoords, a = r.options, s = a.elementRect, l = M({ left: 0, top: 0, right: 0, bottom: 0 }, a.offset || {});
        if (e && s) {
          var h = tt(a.restriction, i, o);
          if (h) {
            var u = h.right - h.left - e.width, v = h.bottom - h.top - e.height;
            u < 0 && (l.left += u, l.right += u), v < 0 && (l.top += v, l.bottom += v);
          }
          l.left += n.left - e.width * s.left, l.top += n.top - e.height * s.top, l.right += n.right - e.width * (1 - s.right), l.bottom += n.bottom - e.height * (1 - s.bottom);
        }
        r.offset = l;
      }, set: function(t) {
        var e = t.coords, n = t.interaction, r = t.state, i = r.options, o = r.offset, a = tt(i.restriction, n, e);
        if (a) {
          var s = function(l) {
            return !l || "left" in l && "top" in l || ((l = M({}, l)).left = l.x || 0, l.top = l.y || 0, l.right = l.right || l.left + l.width, l.bottom = l.bottom || l.top + l.height), l;
          }(a);
          e.x = Math.max(Math.min(s.right - o.right, e.x), s.left + o.left), e.y = Math.max(Math.min(s.bottom - o.bottom, e.y), s.top + o.top);
        }
      }, defaults: { restriction: null, elementRect: null, offset: null, endOnly: !1, enabled: !1 } }, Ki = $e(Lt, "restrict"), nr = { top: 1 / 0, left: 1 / 0, bottom: -1 / 0, right: -1 / 0 }, rr = { top: -1 / 0, left: -1 / 0, bottom: 1 / 0, right: 1 / 0 };
      function ir(t, e) {
        for (var n = 0, r = ["top", "left", "bottom", "right"]; n < r.length; n++) {
          var i = r[n];
          i in t || (t[i] = e[i]);
        }
        return t;
      }
      var Et = { noInner: nr, noOuter: rr, start: function(t) {
        var e, n = t.interaction, r = t.startOffset, i = t.state, o = i.options;
        o && (e = Ie(tt(o.offset, n, n.coords.start.page))), e = e || { x: 0, y: 0 }, i.offset = { top: e.y + r.top, left: e.x + r.left, bottom: e.y - r.bottom, right: e.x - r.right };
      }, set: function(t) {
        var e = t.coords, n = t.edges, r = t.interaction, i = t.state, o = i.offset, a = i.options;
        if (n) {
          var s = M({}, e), l = tt(a.inner, r, s) || {}, h = tt(a.outer, r, s) || {};
          ir(l, nr), ir(h, rr), n.top ? e.y = Math.min(Math.max(h.top + o.top, s.y), l.top + o.top) : n.bottom && (e.y = Math.max(Math.min(h.bottom + o.bottom, s.y), l.bottom + o.bottom)), n.left ? e.x = Math.min(Math.max(h.left + o.left, s.x), l.left + o.left) : n.right && (e.x = Math.max(Math.min(h.right + o.right, s.x), l.right + o.right));
        }
      }, defaults: { inner: null, outer: null, offset: null, endOnly: !1, enabled: !1 } }, Ji = $e(Et, "restrictEdges"), Qi = M({ get elementRect() {
        return { top: 0, left: 0, bottom: 1, right: 1 };
      }, set elementRect(t) {
      } }, Lt.defaults), Zi = $e({ start: Lt.start, set: Lt.set, defaults: Qi }, "restrictRect"), eo = { width: -1 / 0, height: -1 / 0 }, to = { width: 1 / 0, height: 1 / 0 }, no = $e({ start: function(t) {
        return Et.start(t);
      }, set: function(t) {
        var e = t.interaction, n = t.state, r = t.rect, i = t.edges, o = n.options;
        if (i) {
          var a = st(tt(o.min, e, t.coords)) || eo, s = st(tt(o.max, e, t.coords)) || to;
          n.options = { endOnly: o.endOnly, inner: M({}, Et.noInner), outer: M({}, Et.noOuter) }, i.top ? (n.options.inner.top = r.bottom - a.height, n.options.outer.top = r.bottom - s.height) : i.bottom && (n.options.inner.bottom = r.top + a.height, n.options.outer.bottom = r.top + s.height), i.left ? (n.options.inner.left = r.right - a.width, n.options.outer.left = r.right - s.width) : i.right && (n.options.inner.right = r.left + a.width, n.options.outer.right = r.left + s.width), Et.set(t), n.options = o;
        }
      }, defaults: { min: null, max: null, endOnly: !1, enabled: !1 } }, "restrictSize"), dn = { start: function(t) {
        var e, n = t.interaction, r = t.interactable, i = t.element, o = t.rect, a = t.state, s = t.startOffset, l = a.options, h = l.offsetWithOrigin ? function(y) {
          var S = y.interaction.element, x = Ie(Re(y.state.options.origin, null, null, [S])), T = x || Qe(y.interactable, S, y.interaction.prepared.name);
          return T;
        }(t) : { x: 0, y: 0 };
        if (l.offset === "startCoords") e = { x: n.coords.start.page.x, y: n.coords.start.page.y };
        else {
          var u = Re(l.offset, r, i, [n]);
          (e = Ie(u) || { x: 0, y: 0 }).x += h.x, e.y += h.y;
        }
        var v = l.relativePoints;
        a.offsets = o && v && v.length ? v.map(function(y, S) {
          return { index: S, relativePoint: y, x: s.left - o.width * y.x + e.x, y: s.top - o.height * y.y + e.y };
        }) : [{ index: 0, relativePoint: null, x: e.x, y: e.y }];
      }, set: function(t) {
        var e = t.interaction, n = t.coords, r = t.state, i = r.options, o = r.offsets, a = Qe(e.interactable, e.element, e.prepared.name), s = M({}, n), l = [];
        i.offsetWithOrigin || (s.x -= a.x, s.y -= a.y);
        for (var h = 0, u = o; h < u.length; h++) for (var v = u[h], y = s.x - v.x, S = s.y - v.y, x = 0, T = i.targets.length; x < T; x++) {
          var P = i.targets[x], _ = void 0;
          (_ = b.func(P) ? P(y, S, e._proxy, v, x) : P) && l.push({ x: (b.number(_.x) ? _.x : y) + v.x, y: (b.number(_.y) ? _.y : S) + v.y, range: b.number(_.range) ? _.range : i.range, source: P, index: x, offset: v });
        }
        for (var D = { target: null, inRange: !1, distance: 0, range: 0, delta: { x: 0, y: 0 } }, F = 0; F < l.length; F++) {
          var N = l[F], I = N.range, L = N.x - s.x, pe = N.y - s.y, Z = We(L, pe), be = Z <= I;
          I === 1 / 0 && D.inRange && D.range !== 1 / 0 && (be = !1), D.target && !(be ? D.inRange && I !== 1 / 0 ? Z / I < D.distance / D.range : I === 1 / 0 && D.range !== 1 / 0 || Z < D.distance : !D.inRange && Z < D.distance) || (D.target = N, D.distance = Z, D.range = I, D.inRange = be, D.delta.x = L, D.delta.y = pe);
        }
        return D.inRange && (n.x = D.target.x, n.y = D.target.y), r.closest = D, D;
      }, defaults: { range: 1 / 0, targets: null, offset: null, offsetWithOrigin: !0, origin: null, relativePoints: null, endOnly: !1, enabled: !1 } }, ro = $e(dn, "snap"), Ht = { start: function(t) {
        var e = t.state, n = t.edges, r = e.options;
        if (!n) return null;
        t.state = { options: { targets: null, relativePoints: [{ x: n.left ? 0 : 1, y: n.top ? 0 : 1 }], offset: r.offset || "self", origin: { x: 0, y: 0 }, range: r.range } }, e.targetFields = e.targetFields || [["width", "height"], ["x", "y"]], dn.start(t), e.offsets = t.state.offsets, t.state = e;
      }, set: function(t) {
        var e = t.interaction, n = t.state, r = t.coords, i = n.options, o = n.offsets, a = { x: r.x - o[0].x, y: r.y - o[0].y };
        n.options = M({}, i), n.options.targets = [];
        for (var s = 0, l = i.targets || []; s < l.length; s++) {
          var h = l[s], u = void 0;
          if (u = b.func(h) ? h(a.x, a.y, e) : h) {
            for (var v = 0, y = n.targetFields; v < y.length; v++) {
              var S = y[v], x = S[0], T = S[1];
              if (x in u || T in u) {
                u.x = u[x], u.y = u[T];
                break;
              }
            }
            n.options.targets.push(u);
          }
        }
        var P = dn.set(t);
        return n.options = i, P;
      }, defaults: { range: 1 / 0, targets: null, offset: null, endOnly: !1, enabled: !1 } }, io = $e(Ht, "snapSize"), pn = { aspectRatio: Ui, restrictEdges: Ji, restrict: Ki, restrictRect: Zi, restrictSize: no, snapEdges: $e({ start: function(t) {
        var e = t.edges;
        return e ? (t.state.targetFields = t.state.targetFields || [[e.left ? "left" : "right", e.top ? "top" : "bottom"]], Ht.start(t)) : null;
      }, set: Ht.set, defaults: M(dt(Ht.defaults), { targets: void 0, range: void 0, offset: { x: 0, y: 0 } }) }, "snapEdges"), snap: ro, snapSize: io, spring: jt, avoid: jt, transform: jt, rubberband: jt }, oo = { id: "modifiers", install: function(t) {
        var e = t.interactStatic;
        for (var n in t.usePlugin(Hn), t.usePlugin(Yi), e.modifiers = pn, pn) {
          var r = pn[n], i = r._defaults, o = r._methods;
          i._methods = o, t.defaults.perAction[n] = i;
        }
      } }, ao = oo, or = function(t) {
        X(n, t);
        var e = ie(n);
        function n(r, i, o, a, s, l) {
          var h;
          if (m(this, n), Ze(re(h = e.call(this, s)), o), o !== i && Ze(re(h), i), h.timeStamp = l, h.originalEvent = o, h.type = r, h.pointerId = q(i), h.pointerType = Ne(i), h.target = a, h.currentTarget = null, r === "tap") {
            var u = s.getPointerIndex(i);
            h.dt = h.timeStamp - s.pointers[u].downTime;
            var v = h.timeStamp - s.tapTime;
            h.double = !!s.prevTap && s.prevTap.type !== "doubletap" && s.prevTap.target === h.target && v < 500;
          } else r === "doubletap" && (h.dt = i.timeStamp - s.tapTime, h.double = !0);
          return h;
        }
        return E(n, [{ key: "_subtractOrigin", value: function(r) {
          var i = r.x, o = r.y;
          return this.pageX -= i, this.pageY -= o, this.clientX -= i, this.clientY -= o, this;
        } }, { key: "_addOrigin", value: function(r) {
          var i = r.x, o = r.y;
          return this.pageX += i, this.pageY += o, this.clientX += i, this.clientY += o, this;
        } }, { key: "preventDefault", value: function() {
          this.originalEvent.preventDefault();
        } }]), n;
      }(Xe), St = { id: "pointer-events/base", before: ["inertia", "modifiers", "auto-start", "actions"], install: function(t) {
        t.pointerEvents = St, t.defaults.actions.pointerEvents = St.defaults, M(t.actions.phaselessTypes, St.types);
      }, listeners: { "interactions:new": function(t) {
        var e = t.interaction;
        e.prevTap = null, e.tapTime = 0;
      }, "interactions:update-pointer": function(t) {
        var e = t.down, n = t.pointerInfo;
        !e && n.hold || (n.hold = { duration: 1 / 0, timeout: null });
      }, "interactions:move": function(t, e) {
        var n = t.interaction, r = t.pointer, i = t.event, o = t.eventTarget;
        t.duplicate || n.pointerIsDown && !n.pointerWasMoved || (n.pointerIsDown && hn(t), Ge({ interaction: n, pointer: r, event: i, eventTarget: o, type: "move" }, e));
      }, "interactions:down": function(t, e) {
        (function(n, r) {
          for (var i = n.interaction, o = n.pointer, a = n.event, s = n.eventTarget, l = n.pointerIndex, h = i.pointers[l].hold, u = at(s), v = { interaction: i, pointer: o, event: a, eventTarget: s, type: "hold", targets: [], path: u, node: null }, y = 0; y < u.length; y++) {
            var S = u[y];
            v.node = S, r.fire("pointerEvents:collect-targets", v);
          }
          if (v.targets.length) {
            for (var x = 1 / 0, T = 0, P = v.targets; T < P.length; T++) {
              var _ = P[T].eventable.options.holdDuration;
              _ < x && (x = _);
            }
            h.duration = x, h.timeout = setTimeout(function() {
              Ge({ interaction: i, eventTarget: s, pointer: o, event: a, type: "hold" }, r);
            }, x);
          }
        })(t, e), Ge(t, e);
      }, "interactions:up": function(t, e) {
        hn(t), Ge(t, e), function(n, r) {
          var i = n.interaction, o = n.pointer, a = n.event, s = n.eventTarget;
          i.pointerWasMoved || Ge({ interaction: i, eventTarget: s, pointer: o, event: a, type: "tap" }, r);
        }(t, e);
      }, "interactions:cancel": function(t, e) {
        hn(t), Ge(t, e);
      } }, PointerEvent: or, fire: Ge, collectEventTargets: ar, defaults: { holdDuration: 600, ignoreFrom: null, allowFrom: null, origin: { x: 0, y: 0 } }, types: { down: !0, move: !0, up: !0, cancel: !0, tap: !0, doubletap: !0, hold: !0 } };
      function Ge(t, e) {
        var n = t.interaction, r = t.pointer, i = t.event, o = t.eventTarget, a = t.type, s = t.targets, l = s === void 0 ? ar(t, e) : s, h = new or(a, r, i, o, n, e.now());
        e.fire("pointerEvents:new", { pointerEvent: h });
        for (var u = { interaction: n, pointer: r, event: i, eventTarget: o, targets: l, type: a, pointerEvent: h }, v = 0; v < l.length; v++) {
          var y = l[v];
          for (var S in y.props || {}) h[S] = y.props[S];
          var x = Qe(y.eventable, y.node);
          if (h._subtractOrigin(x), h.eventable = y.eventable, h.currentTarget = y.node, y.eventable.fire(h), h._addOrigin(x), h.immediatePropagationStopped || h.propagationStopped && v + 1 < l.length && l[v + 1].node !== h.currentTarget) break;
        }
        if (e.fire("pointerEvents:fired", u), a === "tap") {
          var T = h.double ? Ge({ interaction: n, pointer: r, event: i, eventTarget: o, type: "doubletap" }, e) : h;
          n.prevTap = T, n.tapTime = T.timeStamp;
        }
        return h;
      }
      function ar(t, e) {
        var n = t.interaction, r = t.pointer, i = t.event, o = t.eventTarget, a = t.type, s = n.getPointerIndex(r), l = n.pointers[s];
        if (a === "tap" && (n.pointerWasMoved || !l || l.downTarget !== o)) return [];
        for (var h = at(o), u = { interaction: n, pointer: r, event: i, eventTarget: o, type: a, path: h, targets: [], node: null }, v = 0; v < h.length; v++) {
          var y = h[v];
          u.node = y, e.fire("pointerEvents:collect-targets", u);
        }
        return a === "hold" && (u.targets = u.targets.filter(function(S) {
          var x, T;
          return S.eventable.options.holdDuration === ((x = n.pointers[s]) == null || (T = x.hold) == null ? void 0 : T.duration);
        })), u.targets;
      }
      function hn(t) {
        var e = t.interaction, n = t.pointerIndex, r = e.pointers[n].hold;
        r && r.timeout && (clearTimeout(r.timeout), r.timeout = null);
      }
      var so = Object.freeze({ __proto__: null, default: St });
      function co(t) {
        var e = t.interaction;
        e.holdIntervalHandle && (clearInterval(e.holdIntervalHandle), e.holdIntervalHandle = null);
      }
      var lo = { id: "pointer-events/holdRepeat", install: function(t) {
        t.usePlugin(St);
        var e = t.pointerEvents;
        e.defaults.holdRepeatInterval = 0, e.types.holdrepeat = t.actions.phaselessTypes.holdrepeat = !0;
      }, listeners: ["move", "up", "cancel", "endall"].reduce(function(t, e) {
        return t["pointerEvents:".concat(e)] = co, t;
      }, { "pointerEvents:new": function(t) {
        var e = t.pointerEvent;
        e.type === "hold" && (e.count = (e.count || 0) + 1);
      }, "pointerEvents:fired": function(t, e) {
        var n = t.interaction, r = t.pointerEvent, i = t.eventTarget, o = t.targets;
        if (r.type === "hold" && o.length) {
          var a = o[0].eventable.options.holdRepeatInterval;
          a <= 0 || (n.holdIntervalHandle = setTimeout(function() {
            e.pointerEvents.fire({ interaction: n, eventTarget: i, type: "hold", pointer: r, event: r }, e);
          }, a));
        }
      } }) }, uo = lo, fo = { id: "pointer-events/interactableTargets", install: function(t) {
        var e = t.Interactable;
        e.prototype.pointerEvents = function(r) {
          return M(this.events.options, r), this;
        };
        var n = e.prototype._backCompatOption;
        e.prototype._backCompatOption = function(r, i) {
          var o = n.call(this, r, i);
          return o === this && (this.events.options[r] = i), o;
        };
      }, listeners: { "pointerEvents:collect-targets": function(t, e) {
        var n = t.targets, r = t.node, i = t.type, o = t.eventTarget;
        e.interactables.forEachMatch(r, function(a) {
          var s = a.events, l = s.options;
          s.types[i] && s.types[i].length && a.testIgnoreAllow(l, r, o) && n.push({ node: r, eventable: s, props: { interactable: a } });
        });
      }, "interactable:new": function(t) {
        var e = t.interactable;
        e.events.getRect = function(n) {
          return e.getRect(n);
        };
      }, "interactable:set": function(t, e) {
        var n = t.interactable, r = t.options;
        M(n.events.options, e.pointerEvents.defaults), M(n.events.options, r.pointerEvents || {});
      } } }, po = fo, ho = { id: "pointer-events", install: function(t) {
        t.usePlugin(so), t.usePlugin(uo), t.usePlugin(po);
      } }, go = ho, vo = { id: "reflow", install: function(t) {
        var e = t.Interactable;
        t.actions.phases.reflow = !0, e.prototype.reflow = function(n) {
          return function(r, i, o) {
            for (var a = r.getAllElements(), s = o.window.Promise, l = s ? [] : null, h = function() {
              var v = a[u], y = r.getRect(v);
              if (!y) return 1;
              var S, x = yt(o.interactions.list, function(_) {
                return _.interacting() && _.interactable === r && _.element === v && _.prepared.name === i.name;
              });
              if (x) x.move(), l && (S = x._reflowPromise || new s(function(_) {
                x._reflowResolve = _;
              }));
              else {
                var T = st(y), P = /* @__PURE__ */ function(_) {
                  return { coords: _, get page() {
                    return this.coords.page;
                  }, get client() {
                    return this.coords.client;
                  }, get timeStamp() {
                    return this.coords.timeStamp;
                  }, get pageX() {
                    return this.coords.page.x;
                  }, get pageY() {
                    return this.coords.page.y;
                  }, get clientX() {
                    return this.coords.client.x;
                  }, get clientY() {
                    return this.coords.client.y;
                  }, get pointerId() {
                    return this.coords.pointerId;
                  }, get target() {
                    return this.coords.target;
                  }, get type() {
                    return this.coords.type;
                  }, get pointerType() {
                    return this.coords.pointerType;
                  }, get buttons() {
                    return this.coords.buttons;
                  }, preventDefault: function() {
                  } };
                }({ page: { x: T.x, y: T.y }, client: { x: T.x, y: T.y }, timeStamp: o.now() });
                S = function(_, D, F, N, I) {
                  var L = _.interactions.new({ pointerType: "reflow" }), pe = { interaction: L, event: I, pointer: I, eventTarget: F, phase: "reflow" };
                  L.interactable = D, L.element = F, L.prevEvent = I, L.updatePointer(I, I, F, !0), Ae(L.coords.delta), tn(L.prepared, N), L._doPhase(pe);
                  var Z = _.window, be = Z.Promise, Te = be ? new be(function(Le) {
                    L._reflowResolve = Le;
                  }) : void 0;
                  return L._reflowPromise = Te, L.start(N, D, F), L._interacting ? (L.move(pe), L.end(I)) : (L.stop(), L._reflowResolve()), L.removePointer(I, I), Te;
                }(o, r, v, i, P);
              }
              l && l.push(S);
            }, u = 0; u < a.length && !h(); u++) ;
            return l && s.all(l).then(function() {
              return r;
            });
          }(this, n, t);
        };
      }, listeners: { "interactions:stop": function(t, e) {
        var n = t.interaction;
        n.pointerType === "reflow" && (n._reflowResolve && n._reflowResolve(), function(r, i) {
          r.splice(r.indexOf(i), 1);
        }(e.interactions.list, n));
      } } }, mo = vo;
      if (de.use(Ln), de.use(Yn), de.use(go), de.use(Ii), de.use(ao), de.use(xi), de.use(ui), de.use(di), de.use(mo), de.default = de, w(c) === "object" && c) try {
        c.exports = de;
      } catch {
      }
      return de.default = de, de;
    });
  }(Tt, Tt.exports)), Tt.exports;
}
var sa = /* @__PURE__ */ aa();
const br = /* @__PURE__ */ ia(sa), wr = /* @__PURE__ */ Sn({
  __name: "grid-item",
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
    }
  },
  emits: ["container-resized", "resize", "resized", "move", "moved"],
  setup(c, { expose: f, emit: p }) {
    const d = c, w = p, m = sr(Yr), z = sr($r);
    if (!m)
      throw new Error("[grid-layout-plus]: missing layout store, GridItem must under a GridLayout.");
    const E = it(null), g = Mt({
      cols: 1,
      containerWidth: 100,
      rowHeight: 30,
      margin: [10, 10],
      maxRows: 1 / 0,
      draggable: null,
      resizable: null,
      bounded: null,
      transformScale: 1,
      useCssTransforms: !0,
      useStyleCursor: !0,
      isDragging: !1,
      dragging: {
        top: -1,
        left: -1
      },
      isResizing: !1,
      resizing: {
        width: -1,
        height: -1
      },
      style: {},
      rtl: !1
    });
    let X = !1, G = !1, B = NaN, re = NaN, ie = NaN, xe = NaN, Me = -1, ze = -1, Ee = -1, oe = -1, ne = d.x, Q = d.y, ee = d.w, le = d.h;
    const b = it(), ve = Mt({
      i: yo(d, "i"),
      state: g,
      wrapper: b,
      calcXY: Re
    });
    function me(k) {
      Ce(k);
    }
    function Se() {
      mt();
    }
    function O(k) {
      we(d.isDraggable) && (g.draggable = k);
    }
    function H(k) {
      we(d.isResizable) && (g.resizable = k);
    }
    function Y(k) {
      we(d.isBounded) && (g.bounded = k);
    }
    function $(k) {
      g.transformScale = k;
    }
    function U(k) {
      g.rowHeight = k;
    }
    function K(k) {
      g.maxRows = k;
    }
    function j() {
      g.rtl = mr() === "rtl", mt();
    }
    function ke(k) {
      g.cols = Math.floor(k);
    }
    m.increaseItem(ve), Br(() => {
      g.rtl = mr() === "rtl";
    }), kn(() => {
      m.responsive && m.lastBreakpoint ? g.cols = xn(m.lastBreakpoint, m.cols) : g.cols = m.colNum, g.rowHeight = m.rowHeight, g.containerWidth = m.width !== null ? m.width : 100, g.margin = m.margin !== void 0 ? m.margin.map(Number) : [10, 10], g.maxRows = m.maxRows, we(d.isDraggable) ? g.draggable = m.isDraggable : g.draggable = d.isDraggable, we(d.isResizable) ? g.resizable = m.isResizable : g.resizable = d.isResizable, we(d.isBounded) ? g.bounded = m.isBounded : g.bounded = d.isBounded, g.transformScale = m.transformScale, g.useCssTransforms = m.useCssTransforms, g.useStyleCursor = m.useStyleCursor, bo(() => {
        ne = d.x, Q = d.y, le = d.h, ee = d.w, he(_e);
      }), z.on("updateWidth", me), z.on("compact", Se), z.on("setDraggable", O), z.on("setResizable", H), z.on("setBounded", Y), z.on("setTransformScale", $), z.on("setRowHeight", U), z.on("setMaxRows", K), z.on("directionchange", j), z.on("setColNum", ke);
    }), Fr(() => {
      z.off("updateWidth", me), z.off("compact", Se), z.off("setDraggable", O), z.off("setResizable", H), z.off("setBounded", Y), z.off("setTransformScale", $), z.off("setRowHeight", U), z.off("setMaxRows", K), z.off("directionchange", j), z.off("setColNum", ke), E.value && (E.value.unset(), E.value = null), m.decreaseItem(ve);
    }), f({ state: g, wrapper: b });
    const ue = typeof navigator < "u" ? navigator.userAgent.toLowerCase().includes("android") : !1, se = Pe(() => g.resizable && !d.static), te = Pe(() => m.isMirrored ? !g.rtl : g.rtl), De = Pe(() => (g.draggable || g.resizable) && !d.static), ge = Jo("item"), Rt = Pe(() => ({
      [ge.b()]: !0,
      [ge.bm("resizable")]: se.value,
      [ge.bm("static")]: d.static,
      [ge.bm("resizing")]: g.isResizing,
      [ge.bm("dragging")]: g.isDragging,
      [ge.bm("transform")]: g.useCssTransforms,
      [ge.bm("rtl")]: te.value,
      [ge.bm("no-touch")]: ue && De.value
    })), Ke = Pe(() => [ge.be("resizer"), te.value && ge.bem("resizer", "rtl")].filter(Boolean));
    J(
      () => d.isDraggable,
      (k) => {
        g.draggable = k;
      }
    ), J(
      () => d.static,
      () => {
        he(Ze), he(Ae);
      }
    ), J(
      () => g.draggable,
      () => {
        he(Ze);
      }
    ), J(
      () => d.isResizable,
      (k) => {
        g.resizable = k;
      }
    ), J(
      () => d.isBounded,
      (k) => {
        g.bounded = k;
      }
    ), J(
      () => g.resizable,
      () => {
        he(Ae);
      }
    ), J(
      () => g.rowHeight,
      () => {
        he(_e), he(at);
      }
    ), J([() => g.cols, () => g.containerWidth], () => {
      he(Ae), he(_e), he(at);
    }), J([() => d.minH, () => d.maxH, () => d.minW, () => d.maxW], () => {
      he(Ae);
    }), J(te, () => {
      he(Ae), he(_e);
    }), J([() => m.margin, () => m.margin[0], () => m.margin[1]], () => {
      const k = m.margin;
      !k || k[0] === g.margin[0] && k[1] === g.margin[1] || (g.margin = k.map(Number), he(_e), he(at));
    });
    function _e() {
      d.x + d.w > g.cols ? (ne = 0, ee = d.w > g.cols ? g.cols : d.w) : (ne = d.x, ee = d.w);
      const k = He(ne, Q, ee, le);
      g.isDragging && (k.top = g.dragging.top, te.value ? k.right = g.dragging.left : k.left = g.dragging.left), g.isResizing && (k.width = g.resizing.width, k.height = g.resizing.height);
      let A;
      g.useCssTransforms ? te.value ? A = Vo(k.top, k.right, k.width, k.height) : A = $o(k.top, k.left, k.width, k.height) : te.value ? A = Uo(k.top, k.right, k.width, k.height) : A = Go(k.top, k.left, k.width, k.height), g.style = A;
    }
    function at() {
      const k = {};
      for (const A of ["width", "height"]) {
        const q = g.style[A].match(/^(\d+)px$/);
        if (!q)
          return;
        k[A] = q[1];
      }
      w("container-resized", d.i, d.h, d.w, k.height, k.width);
    }
    function vt(k) {
      if (d.static) return;
      const A = k.type;
      if (A === "resizestart" && g.isResizing || A !== "resizestart" && !g.isResizing)
        return;
      const V = gr(k);
      if (we(V)) return;
      const { x: q, y: ae } = V, W = { width: 0, height: 0 };
      let R;
      switch (A) {
        case "resizestart": {
          Ae(), Me = ee, ze = le, R = He(ne, Q, ee, le), W.width = R.width, W.height = R.height, g.resizing = W, g.isResizing = !0;
          break;
        }
        case "resizemove": {
          !k.edges.right && !k.edges.left && (ie = q), !k.edges.top && !k.edges.bottom && (xe = ae);
          const ce = vr(ie, xe, q, ae);
          te.value ? W.width = g.resizing.width - ce.deltaX / g.transformScale : W.width = g.resizing.width + ce.deltaX / g.transformScale, W.height = g.resizing.height + ce.deltaY / g.transformScale, g.resizing = W;
          break;
        }
        case "resizeend": {
          R = He(ne, Q, ee, le), W.width = R.width, W.height = R.height, g.resizing = { width: -1, height: -1 }, g.isResizing = !1;
          break;
        }
      }
      R = Qe(W.height, W.width), R.w < d.minW && (R.w = d.minW), R.w > d.maxW && (R.w = d.maxW), R.h < d.minH && (R.h = d.minH), R.h > d.maxH && (R.h = d.maxH), R.h < 1 && (R.h = 1), R.w < 1 && (R.w = 1), ie = q, xe = ae, (ee !== R.w || le !== R.h) && w("resize", d.i, R.h, R.w, W.height, W.width), k.type === "resizeend" && (Me !== ee || ze !== le) && w("resized", d.i, R.h, R.w, W.height, W.width), z.emit("resizeEvent", k.type, d.i, ne, Q, R.h, R.w);
    }
    function M(k) {
      if (d.static || g.isResizing) return;
      const A = k.type;
      if (A === "dragstart" && g.isDragging || A !== "dragstart" && !g.isDragging)
        return;
      const V = gr(k);
      if (we(V)) return;
      const { x: q, y: ae } = V, W = k.target;
      if (!W.offsetParent) return;
      const R = { top: 0, left: 0 };
      switch (A) {
        case "dragstart": {
          Ee = ne, oe = Q;
          const fe = W.offsetParent.getBoundingClientRect(), ye = W.getBoundingClientRect(), Ne = ye.left / g.transformScale, qe = fe.left / g.transformScale, Xe = ye.right / g.transformScale, lt = fe.right / g.transformScale, ut = ye.top / g.transformScale, Be = fe.top / g.transformScale;
          te.value ? R.left = (Xe - lt) * -1 : R.left = Ne - qe, R.top = ut - Be, g.dragging = R, g.isDragging = !0;
          break;
        }
        case "dragmove": {
          const fe = vr(B, re, q, ae);
          if (te.value ? R.left = g.dragging.left - fe.deltaX / g.transformScale : R.left = g.dragging.left + fe.deltaX / g.transformScale, R.top = g.dragging.top + fe.deltaY / g.transformScale, g.bounded) {
            const ye = W.offsetParent.clientHeight - st(d.h, g.rowHeight, g.margin[1]);
            R.top = Je(R.top, 0, ye);
            const Ne = Ie(), qe = g.containerWidth - st(d.w, Ne, g.margin[0]);
            R.left = Je(R.left, 0, qe);
          }
          g.dragging = R;
          break;
        }
        case "dragend": {
          const fe = W.offsetParent.getBoundingClientRect(), ye = W.getBoundingClientRect(), Ne = ye.left / g.transformScale, qe = fe.left / g.transformScale, Xe = ye.right / g.transformScale, lt = fe.right / g.transformScale, ut = ye.top / g.transformScale, Be = fe.top / g.transformScale;
          te.value ? R.left = (Xe - lt) * -1 : R.left = Ne - qe, R.top = ut - Be, g.dragging = { top: -1, left: -1 }, g.isDragging = !1;
          break;
        }
      }
      let ce;
      te.value, ce = Re(R.top, R.left), B = q, re = ae, (ne !== ce.x || Q !== ce.y) && w("move", d.i, ce.x, ce.y), k.type === "dragend" && (Ee !== ne || oe !== Q) && w("moved", d.i, ce.x, ce.y), z.emit("dragEvent", k.type, d.i, ce.x, ce.y, le, ee);
    }
    function He(k, A, V, q) {
      const ae = Ie();
      let W;
      return te.value ? W = {
        right: Math.round(ae * k + (k + 1) * g.margin[0]),
        top: Math.round(g.rowHeight * A + (A + 1) * g.margin[1]),
        // 0 * Infinity === NaN, which causes problems with resize constraints;
        // Fix this if it occurs.
        // Note we do it here rather than later because Math.round(Infinity) causes depot
        width: V === 1 / 0 ? V : Math.round(ae * V + Math.max(0, V - 1) * g.margin[0]),
        height: q === 1 / 0 ? q : Math.round(g.rowHeight * q + Math.max(0, q - 1) * g.margin[1])
      } : W = {
        left: Math.round(ae * k + (k + 1) * g.margin[0]),
        top: Math.round(g.rowHeight * A + (A + 1) * g.margin[1]),
        // 0 * Infinity === NaN, which causes problems with resize constraints;
        // Fix this if it occurs.
        // Note we do it here rather than later because Math.round(Infinity) causes depot
        width: V === 1 / 0 ? V : Math.round(ae * V + Math.max(0, V - 1) * g.margin[0]),
        height: q === 1 / 0 ? q : Math.round(g.rowHeight * q + Math.max(0, q - 1) * g.margin[1])
      }, W;
    }
    function Re(k, A) {
      const V = Ie();
      let q = Math.round((A - g.margin[0]) / (V + g.margin[0])), ae = Math.round((k - g.margin[1]) / (g.rowHeight + g.margin[1]));
      return q = Math.max(Math.min(q, g.cols - ee), 0), ae = Math.max(Math.min(ae, g.maxRows - le), 0), { x: q, y: ae };
    }
    function Ie() {
      return (g.containerWidth - g.margin[0] * (g.cols + 1)) / g.cols;
    }
    function st(k, A, V) {
      return Number.isFinite(k) ? Math.round(A * k + Math.max(0, k - 1) * V) : k;
    }
    function Je(k, A, V) {
      return Math.max(Math.min(k, V), A);
    }
    function Qe(k, A, V = !1) {
      const q = Ie();
      let ae = Math.round((A + g.margin[0]) / (q + g.margin[0])), W = 0;
      return V ? W = Math.ceil((k + g.margin[1]) / (g.rowHeight + g.margin[1])) : W = Math.round((k + g.margin[1]) / (g.rowHeight + g.margin[1])), ae = Math.max(Math.min(ae, g.cols - ne), 0), W = Math.max(Math.min(W, g.maxRows - Q), 0), { w: ae, h: W };
    }
    function Ce(k, A) {
      g.containerWidth = k;
    }
    function mt() {
      _e();
    }
    function We() {
      !E.value && b.value && (E.value = br(b.value), g.useStyleCursor || E.value.styleCursor(!1));
    }
    const Ut = dr(M);
    function Ze() {
      if (We(), !!E.value)
        if (g.draggable && !d.static) {
          const k = {
            ignoreFrom: d.dragIgnoreFrom,
            allowFrom: d.dragAllowFrom,
            ...d.dragOption
          };
          E.value.draggable(k), X || (X = !0, E.value.on("dragstart dragmove dragend", (A) => {
            A.type === "dragmove" ? Ut(A) : M(A);
          }));
        } else
          E.value.draggable({ enabled: !1 });
    }
    const ct = dr(vt);
    function Ae() {
      if (We(), !!E.value)
        if (g.resizable && !d.static) {
          const k = He(0, 0, d.maxW, d.maxH), A = He(0, 0, d.minW, d.minH), V = {
            edges: {
              left: !1,
              right: `.${Ke.value[0]}`,
              bottom: `.${Ke.value[0]}`,
              top: !1
            },
            ignoreFrom: d.resizeIgnoreFrom,
            restrictSize: {
              min: {
                height: A.height * g.transformScale,
                width: A.width * g.transformScale
              },
              max: {
                height: k.height * g.transformScale,
                width: k.width * g.transformScale
              }
            },
            ...d.resizeOption
          };
          d.preserveAspectRatio && (V.modifiers = [br.modifiers.aspectRatio({ ratio: "preserve" })]), E.value.resizable(V), G || (G = !0, E.value.on("resizestart resizemove resizeend", (q) => {
            q.type === "resizemove" ? ct(q) : vt(q);
          }));
        } else
          E.value.resizable({ enabled: !1 });
    }
    return (k, A) => (ht(), $t("section", {
      ref_key: "wrapper",
      ref: b,
      class: cr(Rt.value),
      style: jr(g.style)
    }, [
      Vt(k.$slots, "default"),
      se.value ? (ht(), $t("span", {
        key: 0,
        class: cr(Ke.value)
      }, null, 2)) : wo("", !0)
    ], 6));
  }
}), ot = typeof window < "u";
var xr;
ot && (xr = window == null ? void 0 : window.navigator) != null && xr.userAgent && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Er(c) {
  return c != null;
}
function gn() {
}
const ca = Object.freeze({
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "0ff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "00f",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  burntsienna: "ea7e5d",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "0ff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "f0f",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "663399",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32"
});
Object.freeze(new Set(Object.keys(ca)));
const la = ot && ("ontouchstart" in window || fa() > 0), ua = la ? "pointerdown" : "click";
function fa() {
  return typeof navigator < "u" && (navigator.maxTouchPoints || navigator.msMaxTouchPoints) || 0;
}
function da(c, f, p = window.Event) {
  const { type: d, bubbles: w = !1, cancelable: m = !1, ...z } = f;
  if (!Er(d) || d === "") return !1;
  let E;
  return Er(p) ? E = new p(d, { bubbles: w, cancelable: m }) : (E = document.createEvent("HTMLEvents"), E.initEvent(d, w, m)), Object.assign(E, z), c.dispatchEvent(E);
}
const pa = "clickoutside", ha = /* @__PURE__ */ new Set();
ot && document.addEventListener(
  ua,
  (c) => {
    const f = c.target, p = c.composedPath && c.composedPath();
    ha.forEach((d) => {
      d !== f && (p ? !p.includes(d) : !d.contains(f)) && (!d.__transferElement || d.__transferElement !== f && !d.__transferElement.contains(f)) && da(d, { type: pa });
    });
  },
  !0
);
const ga = [
  [
    "requestFullscreen",
    "exitFullscreen",
    "fullscreenElement",
    "fullscreenEnabled",
    "fullscreenchange",
    "fullscreenerror"
  ],
  // New WebKit
  [
    "webkitRequestFullscreen",
    "webkitExitFullscreen",
    "webkitFullscreenElement",
    "webkitFullscreenEnabled",
    "webkitfullscreenchange",
    "webkitfullscreenerror"
  ],
  // Old WebKit
  [
    "webkitRequestFullScreen",
    "webkitCancelFullScreen",
    "webkitCurrentFullScreenElement",
    "webkitCancelFullScreen",
    "webkitfullscreenchange",
    "webkitfullscreenerror"
  ],
  [
    "mozRequestFullScreen",
    "mozCancelFullScreen",
    "mozFullScreenElement",
    "mozFullScreenEnabled",
    "mozfullscreenchange",
    "mozfullscreenerror"
  ],
  [
    "msRequestFullscreen",
    "msExitFullscreen",
    "msFullscreenElement",
    "msFullscreenEnabled",
    "MSFullscreenChange",
    "MSFullscreenError"
  ]
];
let Ot;
if (ot) {
  for (const c of ga)
    if (c[1] in document) {
      Ot = c;
      break;
    }
}
const va = !!Ot;
Pe(() => !1);
const ma = /* @__PURE__ */ new Set(), ya = /* @__PURE__ */ new WeakMap();
if (ot && Ot) {
  const c = Ot[2], f = Ot[4];
  document.addEventListener(
    f,
    () => {
      if (ma.forEach((p) => {
        p.value = !1;
      }), document[c]) {
        const p = ya.get(document[c]);
        p && (p.value = !0);
      }
    },
    !1
  );
}
const Qr = /* @__PURE__ */ new Map();
Qr.set("x", 0);
Qr.set("y", 0);
var nt = [], ba = function() {
  return nt.some(function(c) {
    return c.activeTargets.length > 0;
  });
}, wa = function() {
  return nt.some(function(c) {
    return c.skippedTargets.length > 0;
  });
}, Sr = "ResizeObserver loop completed with undelivered notifications.", xa = function() {
  var c;
  typeof ErrorEvent == "function" ? c = new ErrorEvent("error", {
    message: Sr
  }) : (c = document.createEvent("Event"), c.initEvent("error", !1, !1), c.message = Sr), window.dispatchEvent(c);
}, Dt;
(function(c) {
  c.BORDER_BOX = "border-box", c.CONTENT_BOX = "content-box", c.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(Dt || (Dt = {}));
var rt = function(c) {
  return Object.freeze(c);
}, Ea = /* @__PURE__ */ function() {
  function c(f, p) {
    this.inlineSize = f, this.blockSize = p, rt(this);
  }
  return c;
}(), Zr = function() {
  function c(f, p, d, w) {
    return this.x = f, this.y = p, this.width = d, this.height = w, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, rt(this);
  }
  return c.prototype.toJSON = function() {
    var f = this, p = f.x, d = f.y, w = f.top, m = f.right, z = f.bottom, E = f.left, g = f.width, X = f.height;
    return { x: p, y: d, top: w, right: m, bottom: z, left: E, width: g, height: X };
  }, c.fromRect = function(f) {
    return new c(f.x, f.y, f.width, f.height);
  }, c;
}(), Tn = function(c) {
  return c instanceof SVGElement && "getBBox" in c;
}, ei = function(c) {
  if (Tn(c)) {
    var f = c.getBBox(), p = f.width, d = f.height;
    return !p && !d;
  }
  var w = c, m = w.offsetWidth, z = w.offsetHeight;
  return !(m || z || c.getClientRects().length);
}, kr = function(c) {
  var f;
  if (c instanceof Element)
    return !0;
  var p = (f = c == null ? void 0 : c.ownerDocument) === null || f === void 0 ? void 0 : f.defaultView;
  return !!(p && c instanceof p.Element);
}, Sa = function(c) {
  switch (c.tagName) {
    case "INPUT":
      if (c.type !== "image")
        break;
    case "VIDEO":
    case "AUDIO":
    case "EMBED":
    case "OBJECT":
    case "CANVAS":
    case "IFRAME":
    case "IMG":
      return !0;
  }
  return !1;
}, Pt = typeof window < "u" ? window : {}, Nt = /* @__PURE__ */ new WeakMap(), Tr = /auto|scroll/, ka = /^tb|vertical/, Ta = /msie|trident/i.test(Pt.navigator && Pt.navigator.userAgent), Oe = function(c) {
  return parseFloat(c || "0");
}, gt = function(c, f, p) {
  return c === void 0 && (c = 0), f === void 0 && (f = 0), p === void 0 && (p = !1), new Ea((p ? f : c) || 0, (p ? c : f) || 0);
}, zr = rt({
  devicePixelContentBoxSize: gt(),
  borderBoxSize: gt(),
  contentBoxSize: gt(),
  contentRect: new Zr(0, 0, 0, 0)
}), ti = function(c, f) {
  if (f === void 0 && (f = !1), Nt.has(c) && !f)
    return Nt.get(c);
  if (ei(c))
    return Nt.set(c, zr), zr;
  var p = getComputedStyle(c), d = Tn(c) && c.ownerSVGElement && c.getBBox(), w = !Ta && p.boxSizing === "border-box", m = ka.test(p.writingMode || ""), z = !d && Tr.test(p.overflowY || ""), E = !d && Tr.test(p.overflowX || ""), g = d ? 0 : Oe(p.paddingTop), X = d ? 0 : Oe(p.paddingRight), G = d ? 0 : Oe(p.paddingBottom), B = d ? 0 : Oe(p.paddingLeft), re = d ? 0 : Oe(p.borderTopWidth), ie = d ? 0 : Oe(p.borderRightWidth), xe = d ? 0 : Oe(p.borderBottomWidth), Me = d ? 0 : Oe(p.borderLeftWidth), ze = B + X, Ee = g + G, oe = Me + ie, ne = re + xe, Q = E ? c.offsetHeight - ne - c.clientHeight : 0, ee = z ? c.offsetWidth - oe - c.clientWidth : 0, le = w ? ze + oe : 0, b = w ? Ee + ne : 0, ve = d ? d.width : Oe(p.width) - le - ee, me = d ? d.height : Oe(p.height) - b - Q, Se = ve + ze + ee + oe, O = me + Ee + Q + ne, H = rt({
    devicePixelContentBoxSize: gt(Math.round(ve * devicePixelRatio), Math.round(me * devicePixelRatio), m),
    borderBoxSize: gt(Se, O, m),
    contentBoxSize: gt(ve, me, m),
    contentRect: new Zr(B, g, ve, me)
  });
  return Nt.set(c, H), H;
}, ni = function(c, f, p) {
  var d = ti(c, p), w = d.borderBoxSize, m = d.contentBoxSize, z = d.devicePixelContentBoxSize;
  switch (f) {
    case Dt.DEVICE_PIXEL_CONTENT_BOX:
      return z;
    case Dt.BORDER_BOX:
      return w;
    default:
      return m;
  }
}, za = /* @__PURE__ */ function() {
  function c(f) {
    var p = ti(f);
    this.target = f, this.contentRect = p.contentRect, this.borderBoxSize = rt([p.borderBoxSize]), this.contentBoxSize = rt([p.contentBoxSize]), this.devicePixelContentBoxSize = rt([p.devicePixelContentBoxSize]);
  }
  return c;
}(), ri = function(c) {
  if (ei(c))
    return 1 / 0;
  for (var f = 0, p = c.parentNode; p; )
    f += 1, p = p.parentNode;
  return f;
}, _a = function() {
  var c = 1 / 0, f = [];
  nt.forEach(function(m) {
    if (m.activeTargets.length !== 0) {
      var z = [];
      m.activeTargets.forEach(function(E) {
        var g = new za(E.target), X = ri(E.target);
        z.push(g), E.lastReportedSize = ni(E.target, E.observedBox), X < c && (c = X);
      }), f.push(function() {
        m.callback.call(m.observer, z, m.observer);
      }), m.activeTargets.splice(0, m.activeTargets.length);
    }
  });
  for (var p = 0, d = f; p < d.length; p++) {
    var w = d[p];
    w();
  }
  return c;
}, _r = function(c) {
  nt.forEach(function(f) {
    f.activeTargets.splice(0, f.activeTargets.length), f.skippedTargets.splice(0, f.skippedTargets.length), f.observationTargets.forEach(function(p) {
      p.isActive() && (ri(p.target) > c ? f.activeTargets.push(p) : f.skippedTargets.push(p));
    });
  });
}, Oa = function() {
  var c = 0;
  for (_r(c); ba(); )
    c = _a(), _r(c);
  return wa() && xa(), c > 0;
}, vn, ii = [], Pa = function() {
  return ii.splice(0).forEach(function(c) {
    return c();
  });
}, Ma = function(c) {
  if (!vn) {
    var f = 0, p = document.createTextNode(""), d = { characterData: !0 };
    new MutationObserver(function() {
      return Pa();
    }).observe(p, d), vn = function() {
      p.textContent = "".concat(f ? f-- : f++);
    };
  }
  ii.push(c), vn();
}, Da = function(c) {
  Ma(function() {
    requestAnimationFrame(c);
  });
}, Yt = 0, Ra = function() {
  return !!Yt;
}, Ia = 250, Ca = { attributes: !0, characterData: !0, childList: !0, subtree: !0 }, Or = [
  "resize",
  "load",
  "transitionend",
  "animationend",
  "animationstart",
  "animationiteration",
  "keyup",
  "keydown",
  "mouseup",
  "mousedown",
  "mouseover",
  "mouseout",
  "blur",
  "focus"
], Pr = function(c) {
  return c === void 0 && (c = 0), Date.now() + c;
}, mn = !1, Aa = function() {
  function c() {
    var f = this;
    this.stopped = !0, this.listener = function() {
      return f.schedule();
    };
  }
  return c.prototype.run = function(f) {
    var p = this;
    if (f === void 0 && (f = Ia), !mn) {
      mn = !0;
      var d = Pr(f);
      Da(function() {
        var w = !1;
        try {
          w = Oa();
        } finally {
          if (mn = !1, f = d - Pr(), !Ra())
            return;
          w ? p.run(1e3) : f > 0 ? p.run(f) : p.start();
        }
      });
    }
  }, c.prototype.schedule = function() {
    this.stop(), this.run();
  }, c.prototype.observe = function() {
    var f = this, p = function() {
      return f.observer && f.observer.observe(document.body, Ca);
    };
    document.body ? p() : Pt.addEventListener("DOMContentLoaded", p);
  }, c.prototype.start = function() {
    var f = this;
    this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), Or.forEach(function(p) {
      return Pt.addEventListener(p, f.listener, !0);
    }));
  }, c.prototype.stop = function() {
    var f = this;
    this.stopped || (this.observer && this.observer.disconnect(), Or.forEach(function(p) {
      return Pt.removeEventListener(p, f.listener, !0);
    }), this.stopped = !0);
  }, c;
}(), En = new Aa(), Mr = function(c) {
  !Yt && c > 0 && En.start(), Yt += c, !Yt && En.stop();
}, Ba = function(c) {
  return !Tn(c) && !Sa(c) && getComputedStyle(c).display === "inline";
}, Fa = function() {
  function c(f, p) {
    this.target = f, this.observedBox = p || Dt.CONTENT_BOX, this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  return c.prototype.isActive = function() {
    var f = ni(this.target, this.observedBox, !0);
    return Ba(this.target) && (this.lastReportedSize = f), this.lastReportedSize.inlineSize !== f.inlineSize || this.lastReportedSize.blockSize !== f.blockSize;
  }, c;
}(), ja = /* @__PURE__ */ function() {
  function c(f, p) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = f, this.callback = p;
  }
  return c;
}(), qt = /* @__PURE__ */ new WeakMap(), Dr = function(c, f) {
  for (var p = 0; p < c.length; p += 1)
    if (c[p].target === f)
      return p;
  return -1;
}, Xt = function() {
  function c() {
  }
  return c.connect = function(f, p) {
    var d = new ja(f, p);
    qt.set(f, d);
  }, c.observe = function(f, p, d) {
    var w = qt.get(f), m = w.observationTargets.length === 0;
    Dr(w.observationTargets, p) < 0 && (m && nt.push(w), w.observationTargets.push(new Fa(p, d && d.box)), Mr(1), En.schedule());
  }, c.unobserve = function(f, p) {
    var d = qt.get(f), w = Dr(d.observationTargets, p), m = d.observationTargets.length === 1;
    w >= 0 && (m && nt.splice(nt.indexOf(d), 1), d.observationTargets.splice(w, 1), Mr(-1));
  }, c.disconnect = function(f) {
    var p = this, d = qt.get(f);
    d.observationTargets.slice().forEach(function(w) {
      return p.unobserve(f, w.target);
    }), d.activeTargets.splice(0, d.activeTargets.length);
  }, c;
}(), La = function() {
  function c(f) {
    if (arguments.length === 0)
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof f != "function")
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    Xt.connect(this, f);
  }
  return c.prototype.observe = function(f, p) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!kr(f))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Xt.observe(this, f, p);
  }, c.prototype.unobserve = function(f) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!kr(f))
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Xt.unobserve(this, f);
  }, c.prototype.disconnect = function() {
    Xt.disconnect(this);
  }, c.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, c;
}();
const Gt = /* @__PURE__ */ new WeakMap();
function Ha(c) {
  for (let f = 0, p = c.length; f < p; ++f) {
    const d = c[f], w = Gt.get(d.target);
    typeof w == "function" && w(d);
  }
}
const oi = new (ot && window.ResizeObserver || La)(
  Ha
);
function Wa(c, f) {
  Gt.set(c, f), oi.observe(c);
}
function Na(c) {
  Gt.has(c) && (oi.unobserve(c), Gt.delete(c));
}
function qa() {
  return {
    observeResize: Wa,
    unobserveResize: Na
  };
}
const Xa = it(!1);
Pe(() => Xa.value);
const Rr = "__theme_style__", yn = "__theme_observer__", Ir = Mt(/* @__PURE__ */ new Map()), Cr = /* @__PURE__ */ new Map();
J(Ir, () => {
  if (!ot) return;
  Cr.clear();
  const c = document.head.querySelector(`#${Rr}`);
  c && document.head.removeChild(c);
  const f = document.createElement("style");
  let p = `.${yn} { width: 1px }`, d = 1;
  for (const [w, [m, z]] of Ir.entries())
    p += ` html.${m} .${yn}, .${z} .${yn} { width: ${++d}px }`, Cr.set(d, w);
  f.textContent = p, f.id = Rr, document.head.appendChild(f);
});
const Qa = /* @__PURE__ */ Sn({
  __name: "grid-layout",
  props: {
    autoSize: {
      type: Boolean,
      default: !0
    },
    colNum: {
      type: Number,
      default: 12
    },
    rowHeight: {
      type: Number,
      default: 150
    },
    maxRows: {
      type: Number,
      default: 1 / 0
    },
    margin: {
      type: Array,
      default: () => [10, 10]
    },
    isDraggable: {
      type: Boolean,
      default: !0
    },
    isResizable: {
      type: Boolean,
      default: !0
    },
    isMirrored: {
      type: Boolean,
      default: !1
    },
    isBounded: {
      type: Boolean,
      default: !1
    },
    useCssTransforms: {
      type: Boolean,
      default: !0
    },
    verticalCompact: {
      type: Boolean,
      default: !0
    },
    restoreOnDrag: {
      type: Boolean,
      default: !1
    },
    layout: {
      type: Array,
      required: !0
    },
    responsive: {
      type: Boolean,
      default: !1
    },
    responsiveLayouts: {
      type: Object,
      default: () => ({})
    },
    transformScale: {
      type: Number,
      default: 1
    },
    breakpoints: {
      type: Object,
      default: () => ({ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 })
    },
    cols: {
      type: Object,
      default: () => ({ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 })
    },
    preventCollision: {
      type: Boolean,
      default: !1
    },
    useStyleCursor: {
      type: Boolean,
      default: !0
    }
  },
  emits: [
    "layout-before-mount",
    "layout-mounted",
    "layout-updated",
    "breakpoint-changed",
    "update:layout",
    "layout-ready"
  ],
  setup(c, { expose: f, emit: p }) {
    const d = c, w = p, m = Mt({
      width: -1,
      mergedStyle: {},
      lastLayoutLength: 0,
      isDragging: !1,
      placeholder: {
        x: 0,
        y: 0,
        w: 0,
        h: 0,
        i: ""
      },
      layouts: {},
      // array to store all layouts from different breakpoints
      lastBreakpoint: null,
      // store last active breakpoint
      originalLayout: null
      // store original Layout
    }), z = /* @__PURE__ */ new Map(), E = it(d.layout), g = it(), { observeResize: X, unobserveResize: G } = qa(), B = Lo();
    B.on("resizeEvent", re), B.on("dragEvent", ie), Br(() => {
      w("layout-before-mount", E.value);
    }), kn(() => {
      w("layout-mounted", E.value), Ue(() => {
        Ko(E.value), m.originalLayout = E.value, Ue(() => {
          me(), g.value && X(g.value, Ho(ne, 16)), pt(E.value, d.verticalCompact), w("layout-updated", E.value), oe(), ne();
        });
      });
    }), Fr(() => {
      B.clearAll(), g.value && G(g.value);
    });
    function re(O, H, Y, $, U, K) {
      b(O, H, Y, $, U, K);
    }
    function ie(O, H, Y, $, U, K) {
      le(O, H, Y, $, U, K);
    }
    J(
      () => m.width,
      (O, H) => {
        Ue(() => {
          B.emit("updateWidth", O), H === -1 && Ue(() => {
            w("layout-ready", E.value);
          }), oe();
        });
      }
    ), J(
      () => [d.layout, d.layout.length],
      () => {
        E.value = d.layout, Ee();
      }
    ), J(
      () => d.colNum,
      (O) => {
        B.emit("setColNum", O);
      }
    ), J(
      () => d.rowHeight,
      (O) => {
        B.emit("setRowHeight", O);
      }
    ), J(
      () => d.isDraggable,
      (O) => {
        B.emit("setDraggable", O);
      }
    ), J(
      () => d.isResizable,
      (O) => {
        B.emit("setResizable", O);
      }
    ), J(
      () => d.isBounded,
      (O) => {
        B.emit("setBounded", O);
      }
    ), J(
      () => d.transformScale,
      (O) => {
        B.emit("setTransformScale", O);
      }
    ), J(
      () => d.responsive,
      (O) => {
        O || (w("update:layout", m.originalLayout), B.emit("setColNum", d.colNum)), ne();
      }
    ), J(
      () => d.maxRows,
      (O) => {
        B.emit("setMaxRows", O);
      }
    ), J([() => d.margin, () => d.margin[1]], oe), lr(
      Yr,
      Mt({
        ...ur(d),
        ...ur(m),
        increaseItem: xe,
        decreaseItem: Me
      })
    ), lr($r, B), f({ state: m, getItem: ze, resizeEvent: b, dragEvent: le, layoutUpdate: Ee });
    function xe(O) {
      z.set(O.i, O);
    }
    function Me(O) {
      z.delete(O.i);
    }
    function ze(O) {
      return z.get(O);
    }
    function Ee() {
      if (!we(E.value) && !we(m.originalLayout)) {
        if (E.value.length !== m.originalLayout.length) {
          const O = Se(E.value, m.originalLayout);
          if (O.length > 0)
            if (E.value.length > m.originalLayout.length)
              m.originalLayout = m.originalLayout.concat(O);
            else {
              const H = new Set(O.map((Y) => Y.i));
              m.originalLayout = m.originalLayout.filter((Y) => !H.has(Y.i));
            }
          m.lastLayoutLength = E.value.length, me();
        }
        pt(E.value, d.verticalCompact), B.emit("updateWidth", m.width), oe(), w("layout-updated", E.value);
      }
    }
    function oe() {
      m.mergedStyle = {
        height: Q()
      };
    }
    function ne() {
      g.value && (m.width = g.value.offsetWidth), B.emit("resizeEvent");
    }
    function Q() {
      if (!d.autoSize) return;
      const O = parseFloat(d.margin[1]);
      return No(E.value) * (d.rowHeight + O) + O + "px";
    }
    let ee;
    function le(O, H, Y, $, U, K) {
      let j = pr(E.value, H);
      we(j) && (j = { h: 0, w: 0, x: 0, y: 0, i: "" }), O === "dragstart" && !d.verticalCompact && (ee = E.value.reduce(
        (ke, { i: ue, x: se, y: te }) => ({
          ...ke,
          [ue]: { x: se, y: te }
        }),
        {}
      )), O === "dragmove" || O === "dragstart" ? (m.placeholder.i = H, m.placeholder.x = j.x, m.placeholder.y = j.y, m.placeholder.w = K, m.placeholder.h = U, Ue(() => {
        m.isDragging = !0;
      }), B.emit("updateWidth", m.width)) : Ue(() => {
        m.isDragging = !1;
      }), E.value = wn(E.value, j, Y, $, !0, d.preventCollision), d.restoreOnDrag ? (j.static = !0, pt(E.value, d.verticalCompact, ee), j.static = !1) : pt(E.value, d.verticalCompact), B.emit("compact"), oe(), O === "dragend" && (ee = void 0, w("layout-updated", E.value));
    }
    function b(O, H, Y, $, U, K) {
      let j = pr(E.value, H);
      we(j) && (j = { h: 0, w: 0, x: 0, y: 0, i: "" });
      let ke;
      if (d.preventCollision) {
        const ue = Gr(E.value, { ...j, w: K, h: U }).filter(
          (se) => se.i !== j.i
        );
        if (ke = ue.length > 0, ke) {
          let se = 1 / 0, te = 1 / 0;
          ue.forEach((De) => {
            De.x > j.x && (se = Math.min(se, De.x)), De.y > j.y && (te = Math.min(te, De.y));
          }), Number.isFinite(se) && (j.w = se - j.x), Number.isFinite(te) && (j.h = te - j.y);
        }
      }
      ke || (j.w = K, j.h = U), O === "resizestart" || O === "resizemove" ? (m.placeholder.i = H, m.placeholder.x = Y, m.placeholder.y = $, m.placeholder.w = j.w, m.placeholder.h = j.h, Ue(() => {
        m.isDragging = !0;
      }), B.emit("updateWidth", m.width)) : Ue(() => {
        m.isDragging = !1;
      }), d.responsive && ve(), pt(E.value, d.verticalCompact), B.emit("compact"), oe(), O === "resizeend" && w("layout-updated", E.value);
    }
    function ve() {
      const O = ea(d.breakpoints, m.width), H = xn(O, d.cols);
      !we(m.lastBreakpoint) && !m.layouts[m.lastBreakpoint] && (m.layouts[m.lastBreakpoint] = bn(E.value));
      const Y = ta(
        m.originalLayout,
        m.layouts,
        d.breakpoints,
        O,
        m.lastBreakpoint,
        H,
        d.verticalCompact
      );
      m.layouts[O] = Y, m.lastBreakpoint !== O && w("breakpoint-changed", O, Y), w("update:layout", Y), m.lastBreakpoint = O, B.emit("setColNum", xn(O, d.cols));
    }
    function me() {
      m.layouts = Object.assign({}, d.responsiveLayouts);
    }
    function Se(O, H) {
      const Y = new Set(H.map((j) => j.i)), $ = new Set(O.map((j) => j.i)), U = O.filter((j) => !Y.has(j.i)), K = H.filter((j) => !$.has(j.i));
      return U.concat(K);
    }
    return (O, H) => (ht(), $t("div", {
      ref_key: "wrapper",
      ref: g,
      class: "vgl-layout",
      style: jr(m.mergedStyle)
    }, [
      O.$slots.default ? Vt(O.$slots, "default", { key: 0 }) : (ht(!0), $t(xo, { key: 1 }, Eo(E.value, (Y) => (ht(), Lr(wr, So({
        key: Y.i,
        ref_for: !0
      }, Y), {
        default: Hr(() => [
          Vt(O.$slots, "item", { item: Y })
        ]),
        _: 2
      }, 1040))), 128)),
      ko(To(wr, {
        class: "vgl-item--placeholder",
        x: m.placeholder.x,
        y: m.placeholder.y,
        w: m.placeholder.w,
        h: m.placeholder.h,
        i: m.placeholder.i
      }, null, 8, ["x", "y", "w", "h", "i"]), [
        [zo, m.isDragging]
      ])
    ], 4));
  }
});
function Ya(c) {
  return _o() ? (Oo(c), !0) : !1;
}
const $a = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Va = $a ? window : void 0;
function Ar(c) {
  var f;
  const p = Wr(c);
  return (f = p == null ? void 0 : p.$el) != null ? f : p;
}
function Ga() {
  const c = Po(!1), f = Mo();
  return f && kn(() => {
    c.value = !0;
  }, f), c;
}
function Ua(c) {
  const f = Ga();
  return Pe(() => (f.value, !!c()));
}
function Ka(c, f, p = {}) {
  const { window: d = Va, ...w } = p;
  let m;
  const z = Ua(() => d && "ResizeObserver" in d), E = () => {
    m && (m.disconnect(), m = void 0);
  }, g = Pe(() => {
    const B = Wr(c);
    return Array.isArray(B) ? B.map((re) => Ar(re)) : [Ar(B)];
  }), X = J(
    g,
    (B) => {
      if (E(), z.value && d) {
        m = new ResizeObserver(f);
        for (const re of B)
          re && m.observe(re, w);
      }
    },
    { immediate: !0, flush: "post" }
  ), G = () => {
    E(), X();
  };
  return Ya(G), {
    isSupported: z,
    stop: G
  };
}
const Za = /* @__PURE__ */ Sn({
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
  setup(c, { emit: f }) {
    const p = c, d = Do(), w = f, m = it(null), z = it(0), E = Pe(() => {
      if (z.value <= 0) return p.minH;
      const g = p.margin[1], X = Math.ceil((z.value + g) / (p.rowHeight + g));
      return Math.min(Math.max(X, p.minH), p.maxH);
    });
    return Ka(m, (g) => {
      const X = g[0];
      X && (z.value = X.contentRect.height);
    }), J(
      () => E.value,
      (g) => {
        g !== p.h && w("update:h", g);
      }
    ), (g, X) => {
      const G = Ro("GridItem");
      return ht(), Lr(G, Io(Co({ ...Ao(d), ...p })), {
        default: Hr(() => [
          Bo("div", {
            ref_key: "contentRef",
            ref: m
          }, [
            Vt(g.$slots, "default")
          ], 512)
        ]),
        _: 3
      }, 16);
    };
  }
});
export {
  Za as AutoHeightItem,
  wr as GridItem,
  Qa as GridLayout
};
//# sourceMappingURL=grid-layout-plus.mjs.map
