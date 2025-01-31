(function (se) {
  typeof define == "function" && define.amd ? define(se) : se();
})(function () {
  "use strict";
  var xu = Object.defineProperty;
  var Cu = (se, T, ze) =>
    T in se
      ? xu(se, T, { enumerable: !0, configurable: !0, writable: !0, value: ze })
      : (se[T] = ze);
  var Ne = (se, T, ze) => Cu(se, typeof T != "symbol" ? T + "" : T, ze);
  var se,
    T,
    ze,
    je,
    no,
    oo,
    Qt,
    en,
    tn,
    nn,
    ro,
    ut = {},
    io = [],
    Gi = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
    Ct = Array.isArray;
  function Ce(e, t) {
    for (var n in t) e[n] = t[n];
    return e;
  }
  function so(e) {
    var t = e.parentNode;
    t && t.removeChild(e);
  }
  function H(e, t, n) {
    var o,
      r,
      i,
      s = {};
    for (i in t)
      i == "key" ? (o = t[i]) : i == "ref" ? (r = t[i]) : (s[i] = t[i]);
    if (
      (arguments.length > 2 &&
        (s.children = arguments.length > 3 ? se.call(arguments, 2) : n),
      typeof e == "function" && e.defaultProps != null)
    )
      for (i in e.defaultProps) s[i] === void 0 && (s[i] = e.defaultProps[i]);
    return dt(e, s, o, r, null);
  }
  function dt(e, t, n, o, r) {
    var i = {
      type: e,
      props: t,
      key: n,
      ref: o,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __d: void 0,
      __c: null,
      constructor: void 0,
      __v: r ?? ++ze,
      __i: -1,
      __u: 0,
    };
    return r == null && T.vnode != null && T.vnode(i), i;
  }
  function ao() {
    return { current: null };
  }
  function oe(e) {
    return e.children;
  }
  function pe(e, t) {
    (this.props = e), (this.context = t);
  }
  function Ke(e, t) {
    if (t == null) return e.__ ? Ke(e.__, e.__i + 1) : null;
    for (var n; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
    return typeof e.type == "function" ? Ke(e) : null;
  }
  function lo(e) {
    var t, n;
    if ((e = e.__) != null && e.__c != null) {
      for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
        if ((n = e.__k[t]) != null && n.__e != null) {
          e.__e = e.__c.base = n.__e;
          break;
        }
      return lo(e);
    }
  }
  function on(e) {
    ((!e.__d && (e.__d = !0) && je.push(e) && !St.__r++) ||
      no !== T.debounceRendering) &&
      ((no = T.debounceRendering) || oo)(St);
  }
  function St() {
    var e, t, n, o, r, i, s, a;
    for (je.sort(Qt); (e = je.shift()); )
      e.__d &&
        ((t = je.length),
        (o = void 0),
        (i = (r = (n = e).__v).__e),
        (s = []),
        (a = []),
        n.__P &&
          (((o = Ce({}, r)).__v = r.__v + 1),
          T.vnode && T.vnode(o),
          rn(
            n.__P,
            o,
            r,
            n.__n,
            n.__P.ownerSVGElement !== void 0,
            32 & r.__u ? [i] : null,
            s,
            i ?? Ke(r),
            !!(32 & r.__u),
            a
          ),
          (o.__v = r.__v),
          (o.__.__k[o.__i] = o),
          ho(s, o, a),
          o.__e != i && lo(o)),
        je.length > t && je.sort(Qt));
    St.__r = 0;
  }
  function co(e, t, n, o, r, i, s, a, l, c, d) {
    var u,
      m,
      p,
      v,
      f,
      _ = (o && o.__k) || io,
      h = t.length;
    for (n.__d = l, Xi(n, t, _), l = n.__d, u = 0; u < h; u++)
      (p = n.__k[u]) != null &&
        typeof p != "boolean" &&
        typeof p != "function" &&
        ((m = p.__i === -1 ? ut : _[p.__i] || ut),
        (p.__i = u),
        rn(e, p, m, r, i, s, a, l, c, d),
        (v = p.__e),
        p.ref &&
          m.ref != p.ref &&
          (m.ref && sn(m.ref, null, p), d.push(p.ref, p.__c || v, p)),
        f == null && v != null && (f = v),
        65536 & p.__u || m.__k === p.__k
          ? (l && !l.isConnected && (l = Ke(m)), (l = uo(p, l, e)))
          : typeof p.type == "function" && p.__d !== void 0
          ? (l = p.__d)
          : v && (l = v.nextSibling),
        (p.__d = void 0),
        (p.__u &= -196609));
    (n.__d = l), (n.__e = f);
  }
  function Xi(e, t, n) {
    var o,
      r,
      i,
      s,
      a,
      l = t.length,
      c = n.length,
      d = c,
      u = 0;
    for (e.__k = [], o = 0; o < l; o++)
      (s = o + u),
        (r = e.__k[o] =
          (r = t[o]) == null || typeof r == "boolean" || typeof r == "function"
            ? null
            : typeof r == "string" ||
              typeof r == "number" ||
              typeof r == "bigint" ||
              r.constructor == String
            ? dt(null, r, null, null, null)
            : Ct(r)
            ? dt(oe, { children: r }, null, null, null)
            : r.constructor === void 0 && r.__b > 0
            ? dt(r.type, r.props, r.key, r.ref ? r.ref : null, r.__v)
            : r) != null
          ? ((r.__ = e),
            (r.__b = e.__b + 1),
            (a = Zi(r, n, s, d)),
            (r.__i = a),
            (i = null),
            a !== -1 && (d--, (i = n[a]) && (i.__u |= 131072)),
            i == null || i.__v === null
              ? (a == -1 && u--,
                typeof r.type != "function" && (r.__u |= 65536))
              : a !== s &&
                (a === s + 1
                  ? u++
                  : a > s
                  ? d > l - s
                    ? (u += a - s)
                    : u--
                  : a < s
                  ? a == s - 1 && (u = a - s)
                  : (u = 0),
                a !== o + u && (r.__u |= 65536)))
          : (i = n[s]) &&
            i.key == null &&
            i.__e &&
            !(131072 & i.__u) &&
            (i.__e == e.__d && (e.__d = Ke(i)),
            an(i, i, !1),
            (n[s] = null),
            d--);
    if (d)
      for (o = 0; o < c; o++)
        (i = n[o]) != null &&
          !(131072 & i.__u) &&
          (i.__e == e.__d && (e.__d = Ke(i)), an(i, i));
  }
  function uo(e, t, n) {
    var o, r;
    if (typeof e.type == "function") {
      for (o = e.__k, r = 0; o && r < o.length; r++)
        o[r] && ((o[r].__ = e), (t = uo(o[r], t, n)));
      return t;
    }
    e.__e != t && (n.insertBefore(e.__e, t || null), (t = e.__e));
    do t = t && t.nextSibling;
    while (t != null && t.nodeType === 8);
    return t;
  }
  function Se(e, t) {
    return (
      (t = t || []),
      e == null ||
        typeof e == "boolean" ||
        (Ct(e)
          ? e.some(function (n) {
              Se(n, t);
            })
          : t.push(e)),
      t
    );
  }
  function Zi(e, t, n, o) {
    var r = e.key,
      i = e.type,
      s = n - 1,
      a = n + 1,
      l = t[n];
    if (l === null || (l && r == l.key && i === l.type && !(131072 & l.__u)))
      return n;
    if (o > (l != null && !(131072 & l.__u) ? 1 : 0))
      for (; s >= 0 || a < t.length; ) {
        if (s >= 0) {
          if ((l = t[s]) && !(131072 & l.__u) && r == l.key && i === l.type)
            return s;
          s--;
        }
        if (a < t.length) {
          if ((l = t[a]) && !(131072 & l.__u) && r == l.key && i === l.type)
            return a;
          a++;
        }
      }
    return -1;
  }
  function fo(e, t, n) {
    t[0] === "-"
      ? e.setProperty(t, n ?? "")
      : (e[t] =
          n == null ? "" : typeof n != "number" || Gi.test(t) ? n : n + "px");
  }
  function Et(e, t, n, o, r) {
    var i;
    e: if (t === "style")
      if (typeof n == "string") e.style.cssText = n;
      else {
        if ((typeof o == "string" && (e.style.cssText = o = ""), o))
          for (t in o) (n && t in n) || fo(e.style, t, "");
        if (n) for (t in n) (o && n[t] === o[t]) || fo(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      (i = t !== (t = t.replace(/(PointerCapture)$|Capture$/i, "$1"))),
        (t =
          t.toLowerCase() in e || t === "onFocusOut" || t === "onFocusIn"
            ? t.toLowerCase().slice(2)
            : t.slice(2)),
        e.l || (e.l = {}),
        (e.l[t + i] = n),
        n
          ? o
            ? (n.u = o.u)
            : ((n.u = en), e.addEventListener(t, i ? nn : tn, i))
          : e.removeEventListener(t, i ? nn : tn, i);
    else {
      if (r) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (
        t != "width" &&
        t != "height" &&
        t != "href" &&
        t != "list" &&
        t != "form" &&
        t != "tabIndex" &&
        t != "download" &&
        t != "rowSpan" &&
        t != "colSpan" &&
        t != "role" &&
        t in e
      )
        try {
          e[t] = n ?? "";
          break e;
        } catch {}
      typeof n == "function" ||
        (n == null || (n === !1 && t[4] !== "-")
          ? e.removeAttribute(t)
          : e.setAttribute(t, n));
    }
  }
  function po(e) {
    return function (t) {
      if (this.l) {
        var n = this.l[t.type + e];
        if (t.t == null) t.t = en++;
        else if (t.t < n.u) return;
        return n(T.event ? T.event(t) : t);
      }
    };
  }
  function rn(e, t, n, o, r, i, s, a, l, c) {
    var d,
      u,
      m,
      p,
      v,
      f,
      _,
      h,
      y,
      b,
      w,
      x,
      P,
      C,
      k,
      A = t.type;
    if (t.constructor !== void 0) return null;
    128 & n.__u && ((l = !!(32 & n.__u)), (i = [(a = t.__e = n.__e)])),
      (d = T.__b) && d(t);
    e: if (typeof A == "function")
      try {
        if (
          ((h = t.props),
          (y = (d = A.contextType) && o[d.__c]),
          (b = d ? (y ? y.props.value : d.__) : o),
          n.__c
            ? (_ = (u = t.__c = n.__c).__ = u.__E)
            : ("prototype" in A && A.prototype.render
                ? (t.__c = u = new A(h, b))
                : ((t.__c = u = new pe(h, b)),
                  (u.constructor = A),
                  (u.render = Qi)),
              y && y.sub(u),
              (u.props = h),
              u.state || (u.state = {}),
              (u.context = b),
              (u.__n = o),
              (m = u.__d = !0),
              (u.__h = []),
              (u._sb = [])),
          u.__s == null && (u.__s = u.state),
          A.getDerivedStateFromProps != null &&
            (u.__s == u.state && (u.__s = Ce({}, u.__s)),
            Ce(u.__s, A.getDerivedStateFromProps(h, u.__s))),
          (p = u.props),
          (v = u.state),
          (u.__v = t),
          m)
        )
          A.getDerivedStateFromProps == null &&
            u.componentWillMount != null &&
            u.componentWillMount(),
            u.componentDidMount != null && u.__h.push(u.componentDidMount);
        else {
          if (
            (A.getDerivedStateFromProps == null &&
              h !== p &&
              u.componentWillReceiveProps != null &&
              u.componentWillReceiveProps(h, b),
            !u.__e &&
              ((u.shouldComponentUpdate != null &&
                u.shouldComponentUpdate(h, u.__s, b) === !1) ||
                t.__v === n.__v))
          ) {
            for (
              t.__v !== n.__v &&
                ((u.props = h), (u.state = u.__s), (u.__d = !1)),
                t.__e = n.__e,
                t.__k = n.__k,
                t.__k.forEach(function (B) {
                  B && (B.__ = t);
                }),
                w = 0;
              w < u._sb.length;
              w++
            )
              u.__h.push(u._sb[w]);
            (u._sb = []), u.__h.length && s.push(u);
            break e;
          }
          u.componentWillUpdate != null && u.componentWillUpdate(h, u.__s, b),
            u.componentDidUpdate != null &&
              u.__h.push(function () {
                u.componentDidUpdate(p, v, f);
              });
        }
        if (
          ((u.context = b),
          (u.props = h),
          (u.__P = e),
          (u.__e = !1),
          (x = T.__r),
          (P = 0),
          "prototype" in A && A.prototype.render)
        ) {
          for (
            u.state = u.__s,
              u.__d = !1,
              x && x(t),
              d = u.render(u.props, u.state, u.context),
              C = 0;
            C < u._sb.length;
            C++
          )
            u.__h.push(u._sb[C]);
          u._sb = [];
        } else
          do
            (u.__d = !1),
              x && x(t),
              (d = u.render(u.props, u.state, u.context)),
              (u.state = u.__s);
          while (u.__d && ++P < 25);
        (u.state = u.__s),
          u.getChildContext != null && (o = Ce(Ce({}, o), u.getChildContext())),
          m ||
            u.getSnapshotBeforeUpdate == null ||
            (f = u.getSnapshotBeforeUpdate(p, v)),
          co(
            e,
            Ct(
              (k =
                d != null && d.type === oe && d.key == null
                  ? d.props.children
                  : d)
            )
              ? k
              : [k],
            t,
            n,
            o,
            r,
            i,
            s,
            a,
            l,
            c
          ),
          (u.base = t.__e),
          (t.__u &= -161),
          u.__h.length && s.push(u),
          _ && (u.__E = u.__ = null);
      } catch (B) {
        (t.__v = null),
          l || i != null
            ? ((t.__e = a), (t.__u |= l ? 160 : 32), (i[i.indexOf(a)] = null))
            : ((t.__e = n.__e), (t.__k = n.__k)),
          T.__e(B, t, n);
      }
    else
      i == null && t.__v === n.__v
        ? ((t.__k = n.__k), (t.__e = n.__e))
        : (t.__e = Ji(n.__e, t, n, o, r, i, s, l, c));
    (d = T.diffed) && d(t);
  }
  function ho(e, t, n) {
    t.__d = void 0;
    for (var o = 0; o < n.length; o++) sn(n[o], n[++o], n[++o]);
    T.__c && T.__c(t, e),
      e.some(function (r) {
        try {
          (e = r.__h),
            (r.__h = []),
            e.some(function (i) {
              i.call(r);
            });
        } catch (i) {
          T.__e(i, r.__v);
        }
      });
  }
  function Ji(e, t, n, o, r, i, s, a, l) {
    var c,
      d,
      u,
      m,
      p,
      v,
      f,
      _ = n.props,
      h = t.props,
      y = t.type;
    if ((y === "svg" && (r = !0), i != null)) {
      for (c = 0; c < i.length; c++)
        if (
          (p = i[c]) &&
          "setAttribute" in p == !!y &&
          (y ? p.localName === y : p.nodeType === 3)
        ) {
          (e = p), (i[c] = null);
          break;
        }
    }
    if (e == null) {
      if (y === null) return document.createTextNode(h);
      (e = r
        ? document.createElementNS("http://www.w3.org/2000/svg", y)
        : document.createElement(y, h.is && h)),
        (i = null),
        (a = !1);
    }
    if (y === null) _ === h || (a && e.data === h) || (e.data = h);
    else {
      if (
        ((i = i && se.call(e.childNodes)), (_ = n.props || ut), !a && i != null)
      )
        for (_ = {}, c = 0; c < e.attributes.length; c++)
          _[(p = e.attributes[c]).name] = p.value;
      for (c in _)
        (p = _[c]),
          c == "children" ||
            (c == "dangerouslySetInnerHTML"
              ? (u = p)
              : c === "key" || c in h || Et(e, c, null, p, r));
      for (c in h)
        (p = h[c]),
          c == "children"
            ? (m = p)
            : c == "dangerouslySetInnerHTML"
            ? (d = p)
            : c == "value"
            ? (v = p)
            : c == "checked"
            ? (f = p)
            : c === "key" ||
              (a && typeof p != "function") ||
              _[c] === p ||
              Et(e, c, p, _[c], r);
      if (d)
        a ||
          (u && (d.__html === u.__html || d.__html === e.innerHTML)) ||
          (e.innerHTML = d.__html),
          (t.__k = []);
      else if (
        (u && (e.innerHTML = ""),
        co(
          e,
          Ct(m) ? m : [m],
          t,
          n,
          o,
          r && y !== "foreignObject",
          i,
          s,
          i ? i[0] : n.__k && Ke(n, 0),
          a,
          l
        ),
        i != null)
      )
        for (c = i.length; c--; ) i[c] != null && so(i[c]);
      a ||
        ((c = "value"),
        v !== void 0 &&
          (v !== e[c] ||
            (y === "progress" && !v) ||
            (y === "option" && v !== _[c])) &&
          Et(e, c, v, _[c], !1),
        (c = "checked"),
        f !== void 0 && f !== e[c] && Et(e, c, f, _[c], !1));
    }
    return e;
  }
  function sn(e, t, n) {
    try {
      typeof e == "function" ? e(t) : (e.current = t);
    } catch (o) {
      T.__e(o, n);
    }
  }
  function an(e, t, n) {
    var o, r;
    if (
      (T.unmount && T.unmount(e),
      (o = e.ref) && ((o.current && o.current !== e.__e) || sn(o, null, t)),
      (o = e.__c) != null)
    ) {
      if (o.componentWillUnmount)
        try {
          o.componentWillUnmount();
        } catch (i) {
          T.__e(i, t);
        }
      o.base = o.__P = null;
    }
    if ((o = e.__k))
      for (r = 0; r < o.length; r++)
        o[r] && an(o[r], t, n || typeof e.type != "function");
    n || e.__e == null || so(e.__e), (e.__c = e.__ = e.__e = e.__d = void 0);
  }
  function Qi(e, t, n) {
    return this.constructor(e, n);
  }
  function Oe(e, t, n) {
    var o, r, i, s;
    T.__ && T.__(e, t),
      (r = (o = typeof n == "function") ? null : (n && n.__k) || t.__k),
      (i = []),
      (s = []),
      rn(
        t,
        (e = ((!o && n) || t).__k = H(oe, null, [e])),
        r || ut,
        ut,
        t.ownerSVGElement !== void 0,
        !o && n ? [n] : r ? null : t.firstChild ? se.call(t.childNodes) : null,
        i,
        !o && n ? n : r ? r.__e : t.firstChild,
        o,
        s
      ),
      ho(i, e, s);
  }
  function ln(e, t) {
    Oe(e, t, ln);
  }
  function cn(e, t, n) {
    var o,
      r,
      i,
      s,
      a = Ce({}, e.props);
    for (i in (e.type && e.type.defaultProps && (s = e.type.defaultProps), t))
      i == "key"
        ? (o = t[i])
        : i == "ref"
        ? (r = t[i])
        : (a[i] = t[i] === void 0 && s !== void 0 ? s[i] : t[i]);
    return (
      arguments.length > 2 &&
        (a.children = arguments.length > 3 ? se.call(arguments, 2) : n),
      dt(e.type, a, o || e.key, r || e.ref, null)
    );
  }
  function De(e, t) {
    var n = {
      __c: (t = "__cC" + ro++),
      __: e,
      Consumer: function (o, r) {
        return o.children(r);
      },
      Provider: function (o) {
        var r, i;
        return (
          this.getChildContext ||
            ((r = []),
            ((i = {})[t] = this),
            (this.getChildContext = function () {
              return i;
            }),
            (this.shouldComponentUpdate = function (s) {
              this.props.value !== s.value &&
                r.some(function (a) {
                  (a.__e = !0), on(a);
                });
            }),
            (this.sub = function (s) {
              r.push(s);
              var a = s.componentWillUnmount;
              s.componentWillUnmount = function () {
                r.splice(r.indexOf(s), 1), a && a.call(s);
              };
            })),
          o.children
        );
      },
    };
    return (n.Provider.__ = n.Consumer.contextType = n);
  }
  (se = io.slice),
    (T = {
      __e: function (e, t, n, o) {
        for (var r, i, s; (t = t.__); )
          if ((r = t.__c) && !r.__)
            try {
              if (
                ((i = r.constructor) &&
                  i.getDerivedStateFromError != null &&
                  (r.setState(i.getDerivedStateFromError(e)), (s = r.__d)),
                r.componentDidCatch != null &&
                  (r.componentDidCatch(e, o || {}), (s = r.__d)),
                s)
              )
                return (r.__E = r);
            } catch (a) {
              e = a;
            }
        throw e;
      },
    }),
    (ze = 0),
    (pe.prototype.setState = function (e, t) {
      var n;
      (n =
        this.__s != null && this.__s !== this.state
          ? this.__s
          : (this.__s = Ce({}, this.state))),
        typeof e == "function" && (e = e(Ce({}, n), this.props)),
        e && Ce(n, e),
        e != null && this.__v && (t && this._sb.push(t), on(this));
    }),
    (pe.prototype.forceUpdate = function (e) {
      this.__v && ((this.__e = !0), e && this.__h.push(e), on(this));
    }),
    (pe.prototype.render = oe),
    (je = []),
    (oo =
      typeof Promise == "function"
        ? Promise.prototype.then.bind(Promise.resolve())
        : setTimeout),
    (Qt = function (e, t) {
      return e.__v.__b - t.__v.__b;
    }),
    (St.__r = 0),
    (en = 0),
    (tn = po(!1)),
    (nn = po(!0)),
    (ro = 0);
  function un() {
    return (un = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var o in n)
              Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
          }
          return e;
        }).apply(this, arguments);
  }
  var es = ["context", "children"];
  function ts(e) {
    this.getChildContext = function () {
      return e.context;
    };
    var t = e.children,
      n = (function (o, r) {
        if (o == null) return {};
        var i,
          s,
          a = {},
          l = Object.keys(o);
        for (s = 0; s < l.length; s++)
          r.indexOf((i = l[s])) >= 0 || (a[i] = o[i]);
        return a;
      })(e, es);
    return cn(t, n);
  }
  function ns() {
    var e = new CustomEvent("_preact", {
      detail: {},
      bubbles: !0,
      cancelable: !0,
    });
    this.dispatchEvent(e),
      (this._vdom = H(
        ts,
        un({}, this._props, { context: e.detail.context }),
        (function t(n, o) {
          if (n.nodeType === 3) return n.data;
          if (n.nodeType !== 1) return null;
          var r = [],
            i = {},
            s = 0,
            a = n.attributes,
            l = n.childNodes;
          for (s = a.length; s--; )
            a[s].name !== "slot" &&
              ((i[a[s].name] = a[s].value), (i[_o(a[s].name)] = a[s].value));
          for (s = l.length; s--; ) {
            var c = t(l[s], null),
              d = l[s].slot;
            d ? (i[d] = H(mo, { name: d }, c)) : (r[s] = c);
          }
          var u = o ? H(mo, null, r) : r;
          return H(o || n.nodeName.toLowerCase(), i, u);
        })(this, this._vdomComponent)
      )),
      (this.hasAttribute("hydrate") ? ln : Oe)(this._vdom, this._root);
  }
  function _o(e) {
    return e.replace(/-(\w)/g, function (t, n) {
      return n ? n.toUpperCase() : "";
    });
  }
  function os(e, t, n) {
    if (this._vdom) {
      var o = {};
      (o[e] = n = n ?? void 0),
        (o[_o(e)] = n),
        (this._vdom = cn(this._vdom, o)),
        Oe(this._vdom, this._root);
    }
  }
  function rs() {
    Oe((this._vdom = null), this._root);
  }
  function mo(e, t) {
    var n = this;
    return H(
      "slot",
      un({}, e, {
        ref: function (o) {
          o
            ? ((n.ref = o),
              n._listener ||
                ((n._listener = function (r) {
                  r.stopPropagation(), (r.detail.context = t);
                }),
                o.addEventListener("_preact", n._listener)))
            : n.ref.removeEventListener("_preact", n._listener);
        },
      })
    );
  }
  function is(e, t, n, o) {
    function r() {
      var i = Reflect.construct(HTMLElement, [], r);
      return (
        (i._vdomComponent = e),
        (i._root = i.attachShadow({ mode: o.mode || "open" })),
        i
      );
    }
    return (
      ((r.prototype = Object.create(HTMLElement.prototype)).constructor = r),
      (r.prototype.connectedCallback = ns),
      (r.prototype.attributeChangedCallback = os),
      (r.prototype.disconnectedCallback = rs),
      (n = n || e.observedAttributes || Object.keys(e.propTypes || {})),
      (r.observedAttributes = n),
      n.forEach(function (i) {
        Object.defineProperty(r.prototype, i, {
          get: function () {
            return this._vdom.props[i];
          },
          set: function (s) {
            this._vdom
              ? this.attributeChangedCallback(i, null, s)
              : (this._props || (this._props = {}),
                (this._props[i] = s),
                this.connectedCallback());
            var a = typeof s;
            (s != null &&
              a !== "string" &&
              a !== "boolean" &&
              a !== "number") ||
              this.setAttribute(i, s);
          },
        });
      }),
      customElements.define(t, r)
    );
  }
  var ss = 0;
  function g(e, t, n, o, r, i) {
    var s,
      a,
      l = {};
    for (a in t) a == "ref" ? (s = t[a]) : (l[a] = t[a]);
    var c = {
      type: e,
      props: l,
      key: n,
      ref: s,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __d: void 0,
      __c: null,
      constructor: void 0,
      __v: --ss,
      __i: -1,
      __u: 0,
      __source: r,
      __self: i,
    };
    if (typeof e == "function" && (s = e.defaultProps))
      for (a in s) l[a] === void 0 && (l[a] = s[a]);
    return T.vnode && T.vnode(c), c;
  }
  var Ee,
    K,
    dn,
    go,
    Qe = 0,
    vo = [],
    Pt = [],
    Q = T,
    yo = Q.__b,
    bo = Q.__r,
    wo = Q.diffed,
    xo = Q.__c,
    Co = Q.unmount,
    So = Q.__;
  function Ye(e, t) {
    Q.__h && Q.__h(K, e, Qe || t), (Qe = 0);
    var n = K.__H || (K.__H = { __: [], __h: [] });
    return e >= n.__.length && n.__.push({ __V: Pt }), n.__[e];
  }
  function E(e) {
    return (Qe = 1), fn(Io, e);
  }
  function fn(e, t, n) {
    var o = Ye(Ee++, 2);
    if (
      ((o.t = e),
      !o.__c &&
        ((o.__ = [
          n ? n(t) : Io(void 0, t),
          function (a) {
            var l = o.__N ? o.__N[0] : o.__[0],
              c = o.t(l, a);
            l !== c && ((o.__N = [c, o.__[1]]), o.__c.setState({}));
          },
        ]),
        (o.__c = K),
        !K.u))
    ) {
      var r = function (a, l, c) {
        if (!o.__c.__H) return !0;
        var d = o.__c.__H.__.filter(function (m) {
          return !!m.__c;
        });
        if (
          d.every(function (m) {
            return !m.__N;
          })
        )
          return !i || i.call(this, a, l, c);
        var u = !1;
        return (
          d.forEach(function (m) {
            if (m.__N) {
              var p = m.__[0];
              (m.__ = m.__N), (m.__N = void 0), p !== m.__[0] && (u = !0);
            }
          }),
          !(!u && o.__c.props === a) && (!i || i.call(this, a, l, c))
        );
      };
      K.u = !0;
      var i = K.shouldComponentUpdate,
        s = K.componentWillUpdate;
      (K.componentWillUpdate = function (a, l, c) {
        if (this.__e) {
          var d = i;
          (i = void 0), r(a, l, c), (i = d);
        }
        s && s.call(this, a, l, c);
      }),
        (K.shouldComponentUpdate = r);
    }
    return o.__N || o.__;
  }
  function O(e, t) {
    var n = Ye(Ee++, 3);
    !Q.__s && hn(n.__H, t) && ((n.__ = e), (n.i = t), K.__H.__h.push(n));
  }
  function Le(e, t) {
    var n = Ye(Ee++, 4);
    !Q.__s && hn(n.__H, t) && ((n.__ = e), (n.i = t), K.__h.push(n));
  }
  function D(e) {
    return (
      (Qe = 5),
      Z(function () {
        return { current: e };
      }, [])
    );
  }
  function Eo(e, t, n) {
    (Qe = 6),
      Le(
        function () {
          return typeof e == "function"
            ? (e(t()),
              function () {
                return e(null);
              })
            : e
            ? ((e.current = t()),
              function () {
                return (e.current = null);
              })
            : void 0;
        },
        n == null ? n : n.concat(e)
      );
  }
  function Z(e, t) {
    var n = Ye(Ee++, 7);
    return hn(n.__H, t) ? ((n.__V = e()), (n.i = t), (n.__h = e), n.__V) : n.__;
  }
  function Y(e, t) {
    return (
      (Qe = 8),
      Z(function () {
        return e;
      }, t)
    );
  }
  function Ge(e) {
    var t = K.context[e.__c],
      n = Ye(Ee++, 9);
    return (
      (n.c = e),
      t ? (n.__ == null && ((n.__ = !0), t.sub(K)), t.props.value) : e.__
    );
  }
  function Po(e, t) {
    Q.useDebugValue && Q.useDebugValue(t ? t(e) : e);
  }
  function as(e) {
    var t = Ye(Ee++, 10),
      n = E();
    return (
      (t.__ = e),
      K.componentDidCatch ||
        (K.componentDidCatch = function (o, r) {
          t.__ && t.__(o, r), n[1](o);
        }),
      [
        n[0],
        function () {
          n[1](void 0);
        },
      ]
    );
  }
  function Ao() {
    var e = Ye(Ee++, 11);
    if (!e.__) {
      for (var t = K.__v; t !== null && !t.__m && t.__ !== null; ) t = t.__;
      var n = t.__m || (t.__m = [0, 0]);
      e.__ = "P" + n[0] + "-" + n[1]++;
    }
    return e.__;
  }
  function ls() {
    for (var e; (e = vo.shift()); )
      if (e.__P && e.__H)
        try {
          e.__H.__h.forEach(At), e.__H.__h.forEach(pn), (e.__H.__h = []);
        } catch (t) {
          (e.__H.__h = []), Q.__e(t, e.__v);
        }
  }
  (Q.__b = function (e) {
    (K = null), yo && yo(e);
  }),
    (Q.__ = function (e, t) {
      e && t.__k && t.__k.__m && (e.__m = t.__k.__m), So && So(e, t);
    }),
    (Q.__r = function (e) {
      bo && bo(e), (Ee = 0);
      var t = (K = e.__c).__H;
      t &&
        (dn === K
          ? ((t.__h = []),
            (K.__h = []),
            t.__.forEach(function (n) {
              n.__N && (n.__ = n.__N), (n.__V = Pt), (n.__N = n.i = void 0);
            }))
          : (t.__h.forEach(At), t.__h.forEach(pn), (t.__h = []), (Ee = 0))),
        (dn = K);
    }),
    (Q.diffed = function (e) {
      wo && wo(e);
      var t = e.__c;
      t &&
        t.__H &&
        (t.__H.__h.length &&
          ((vo.push(t) !== 1 && go === Q.requestAnimationFrame) ||
            ((go = Q.requestAnimationFrame) || cs)(ls)),
        t.__H.__.forEach(function (n) {
          n.i && (n.__H = n.i),
            n.__V !== Pt && (n.__ = n.__V),
            (n.i = void 0),
            (n.__V = Pt);
        })),
        (dn = K = null);
    }),
    (Q.__c = function (e, t) {
      t.some(function (n) {
        try {
          n.__h.forEach(At),
            (n.__h = n.__h.filter(function (o) {
              return !o.__ || pn(o);
            }));
        } catch (o) {
          t.some(function (r) {
            r.__h && (r.__h = []);
          }),
            (t = []),
            Q.__e(o, n.__v);
        }
      }),
        xo && xo(e, t);
    }),
    (Q.unmount = function (e) {
      Co && Co(e);
      var t,
        n = e.__c;
      n &&
        n.__H &&
        (n.__H.__.forEach(function (o) {
          try {
            At(o);
          } catch (r) {
            t = r;
          }
        }),
        (n.__H = void 0),
        t && Q.__e(t, n.__v));
    });
  var ko = typeof requestAnimationFrame == "function";
  function cs(e) {
    var t,
      n = function () {
        clearTimeout(o), ko && cancelAnimationFrame(t), setTimeout(e);
      },
      o = setTimeout(n, 100);
    ko && (t = requestAnimationFrame(n));
  }
  function At(e) {
    var t = K,
      n = e.__c;
    typeof n == "function" && ((e.__c = void 0), n()), (K = t);
  }
  function pn(e) {
    var t = K;
    (e.__c = e.__()), (K = t);
  }
  function hn(e, t) {
    return (
      !e ||
      e.length !== t.length ||
      t.some(function (n, o) {
        return n !== e[o];
      })
    );
  }
  function Io(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  const To = "https://api.elevenlabs.io",
    Ro = "https://api.us.elevenlabs.io",
    us = "wss://api.elevenlabs.io",
    ds = "wss://api.us.elevenlabs.io";
  function No(e, t) {
    for (var n in t) e[n] = t[n];
    return e;
  }
  function _n(e, t) {
    for (var n in e) if (n !== "__source" && !(n in t)) return !0;
    for (var o in t) if (o !== "__source" && e[o] !== t[o]) return !0;
    return !1;
  }
  function kt(e, t) {
    (this.props = e), (this.context = t);
  }
  function Oo(e, t) {
    function n(r) {
      var i = this.props.ref,
        s = i == r.ref;
      return (
        !s && i && (i.call ? i(null) : (i.current = null)),
        t ? !t(this.props, r) || !s : _n(this.props, r)
      );
    }
    function o(r) {
      return (this.shouldComponentUpdate = n), H(e, r);
    }
    return (
      (o.displayName = "Memo(" + (e.displayName || e.name) + ")"),
      (o.prototype.isReactComponent = !0),
      (o.__f = !0),
      o
    );
  }
  ((kt.prototype = new pe()).isPureReactComponent = !0),
    (kt.prototype.shouldComponentUpdate = function (e, t) {
      return _n(this.props, e) || _n(this.state, t);
    });
  var Do = T.__b;
  T.__b = function (e) {
    e.type && e.type.__f && e.ref && ((e.props.ref = e.ref), (e.ref = null)),
      Do && Do(e);
  };
  var fs =
    (typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref")) ||
    3911;
  function L(e) {
    function t(n) {
      var o = No({}, n);
      return delete o.ref, e(o, n.ref || null);
    }
    return (
      (t.$$typeof = fs),
      (t.render = t),
      (t.prototype.isReactComponent = t.__f = !0),
      (t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")"),
      t
    );
  }
  var Lo = function (e, t) {
      return e == null ? null : Se(Se(e).map(t));
    },
    Me = {
      map: Lo,
      forEach: Lo,
      count: function (e) {
        return e ? Se(e).length : 0;
      },
      only: function (e) {
        var t = Se(e);
        if (t.length !== 1) throw "Children.only";
        return t[0];
      },
      toArray: Se,
    },
    ps = T.__e;
  T.__e = function (e, t, n, o) {
    if (e.then) {
      for (var r, i = t; (i = i.__); )
        if ((r = i.__c) && r.__c)
          return (
            t.__e == null && ((t.__e = n.__e), (t.__k = n.__k)), r.__c(e, t)
          );
    }
    ps(e, t, n, o);
  };
  var Mo = T.unmount;
  function Fo(e, t, n) {
    return (
      e &&
        (e.__c &&
          e.__c.__H &&
          (e.__c.__H.__.forEach(function (o) {
            typeof o.__c == "function" && o.__c();
          }),
          (e.__c.__H = null)),
        (e = No({}, e)).__c != null &&
          (e.__c.__P === n && (e.__c.__P = t), (e.__c = null)),
        (e.__k =
          e.__k &&
          e.__k.map(function (o) {
            return Fo(o, t, n);
          }))),
      e
    );
  }
  function Bo(e, t, n) {
    return (
      e &&
        n &&
        ((e.__v = null),
        (e.__k =
          e.__k &&
          e.__k.map(function (o) {
            return Bo(o, t, n);
          })),
        e.__c &&
          e.__c.__P === t &&
          (e.__e && n.appendChild(e.__e), (e.__c.__e = !0), (e.__c.__P = n))),
      e
    );
  }
  function ft() {
    (this.__u = 0), (this.t = null), (this.__b = null);
  }
  function qo(e) {
    var t = e.__.__c;
    return t && t.__a && t.__a(e);
  }
  function $o(e) {
    var t, n, o;
    function r(i) {
      if (
        (t ||
          (t = e()).then(
            function (s) {
              n = s.default || s;
            },
            function (s) {
              o = s;
            }
          ),
        o)
      )
        throw o;
      if (!n) throw t;
      return H(n, i);
    }
    return (r.displayName = "Lazy"), (r.__f = !0), r;
  }
  function et() {
    (this.u = null), (this.o = null);
  }
  (T.unmount = function (e) {
    var t = e.__c;
    t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), Mo && Mo(e);
  }),
    ((ft.prototype = new pe()).__c = function (e, t) {
      var n = t.__c,
        o = this;
      o.t == null && (o.t = []), o.t.push(n);
      var r = qo(o.__v),
        i = !1,
        s = function () {
          i || ((i = !0), (n.__R = null), r ? r(a) : a());
        };
      n.__R = s;
      var a = function () {
        if (!--o.__u) {
          if (o.state.__a) {
            var l = o.state.__a;
            o.__v.__k[0] = Bo(l, l.__c.__P, l.__c.__O);
          }
          var c;
          for (o.setState({ __a: (o.__b = null) }); (c = o.t.pop()); )
            c.forceUpdate();
        }
      };
      o.__u++ || 32 & t.__u || o.setState({ __a: (o.__b = o.__v.__k[0]) }),
        e.then(s, s);
    }),
    (ft.prototype.componentWillUnmount = function () {
      this.t = [];
    }),
    (ft.prototype.render = function (e, t) {
      if (this.__b) {
        if (this.__v.__k) {
          var n = document.createElement("div"),
            o = this.__v.__k[0].__c;
          this.__v.__k[0] = Fo(this.__b, n, (o.__O = o.__P));
        }
        this.__b = null;
      }
      var r = t.__a && H(oe, null, e.fallback);
      return r && (r.__u &= -33), [H(oe, null, t.__a ? null : e.children), r];
    });
  var Wo = function (e, t, n) {
    if (
      (++n[1] === n[0] && e.o.delete(t),
      e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.o.size))
    )
      for (n = e.u; n; ) {
        for (; n.length > 3; ) n.pop()();
        if (n[1] < n[0]) break;
        e.u = n = n[2];
      }
  };
  function hs(e) {
    return (
      (this.getChildContext = function () {
        return e.context;
      }),
      e.children
    );
  }
  function _s(e) {
    var t = this,
      n = e.i;
    (t.componentWillUnmount = function () {
      Oe(null, t.l), (t.l = null), (t.i = null);
    }),
      t.i && t.i !== n && t.componentWillUnmount(),
      t.l ||
        ((t.i = n),
        (t.l = {
          nodeType: 1,
          parentNode: n,
          childNodes: [],
          appendChild: function (o) {
            this.childNodes.push(o), t.i.appendChild(o);
          },
          insertBefore: function (o, r) {
            this.childNodes.push(o), t.i.appendChild(o);
          },
          removeChild: function (o) {
            this.childNodes.splice(this.childNodes.indexOf(o) >>> 1, 1),
              t.i.removeChild(o);
          },
        })),
      Oe(H(hs, { context: t.context }, e.__v), t.l);
  }
  function It(e, t) {
    var n = H(_s, { __v: e, i: t });
    return (n.containerInfo = t), n;
  }
  ((et.prototype = new pe()).__a = function (e) {
    var t = this,
      n = qo(t.__v),
      o = t.o.get(e);
    return (
      o[0]++,
      function (r) {
        var i = function () {
          t.props.revealOrder ? (o.push(r), Wo(t, e, o)) : r();
        };
        n ? n(i) : i();
      }
    );
  }),
    (et.prototype.render = function (e) {
      (this.u = null), (this.o = new Map());
      var t = Se(e.children);
      e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
      for (var n = t.length; n--; ) this.o.set(t[n], (this.u = [1, 0, this.u]));
      return e.children;
    }),
    (et.prototype.componentDidUpdate = et.prototype.componentDidMount =
      function () {
        var e = this;
        this.o.forEach(function (t, n) {
          Wo(e, n, t);
        });
      });
  var Vo =
      (typeof Symbol < "u" && Symbol.for && Symbol.for("react.element")) ||
      60103,
    ms =
      /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
    gs = /^on(Ani|Tra|Tou|BeforeInp|Compo)/,
    vs = /[A-Z0-9]/g,
    ys = typeof document < "u",
    bs = function (e) {
      return (
        typeof Symbol < "u" && typeof Symbol() == "symbol"
          ? /fil|che|rad/
          : /fil|che|ra/
      ).test(e);
    };
  function Ho(e, t, n) {
    return (
      t.__k == null && (t.textContent = ""),
      Oe(e, t),
      typeof n == "function" && n(),
      e ? e.__c : null
    );
  }
  function Uo(e, t, n) {
    return ln(e, t), typeof n == "function" && n(), e ? e.__c : null;
  }
  (pe.prototype.isReactComponent = {}),
    [
      "componentWillMount",
      "componentWillReceiveProps",
      "componentWillUpdate",
    ].forEach(function (e) {
      Object.defineProperty(pe.prototype, e, {
        configurable: !0,
        get: function () {
          return this["UNSAFE_" + e];
        },
        set: function (t) {
          Object.defineProperty(this, e, {
            configurable: !0,
            writable: !0,
            value: t,
          });
        },
      });
    });
  var zo = T.event;
  function ws() {}
  function xs() {
    return this.cancelBubble;
  }
  function Cs() {
    return this.defaultPrevented;
  }
  T.event = function (e) {
    return (
      zo && (e = zo(e)),
      (e.persist = ws),
      (e.isPropagationStopped = xs),
      (e.isDefaultPrevented = Cs),
      (e.nativeEvent = e)
    );
  };
  var mn,
    Ss = {
      enumerable: !1,
      configurable: !0,
      get: function () {
        return this.class;
      },
    },
    jo = T.vnode;
  T.vnode = function (e) {
    typeof e.type == "string" &&
      (function (t) {
        var n = t.props,
          o = t.type,
          r = {};
        for (var i in n) {
          var s = n[i];
          if (
            !(
              (i === "value" && "defaultValue" in n && s == null) ||
              (ys && i === "children" && o === "noscript") ||
              i === "class" ||
              i === "className"
            )
          ) {
            var a = i.toLowerCase();
            i === "defaultValue" && "value" in n && n.value == null
              ? (i = "value")
              : i === "download" && s === !0
              ? (s = "")
              : a === "translate" && s === "no"
              ? (s = !1)
              : a === "ondoubleclick"
              ? (i = "ondblclick")
              : a !== "onchange" ||
                (o !== "input" && o !== "textarea") ||
                bs(n.type)
              ? a === "onfocus"
                ? (i = "onfocusin")
                : a === "onblur"
                ? (i = "onfocusout")
                : gs.test(i)
                ? (i = a)
                : o.indexOf("-") === -1 && ms.test(i)
                ? (i = i.replace(vs, "-$&").toLowerCase())
                : s === null && (s = void 0)
              : (a = i = "oninput"),
              a === "oninput" && r[(i = a)] && (i = "oninputCapture"),
              (r[i] = s);
          }
        }
        o == "select" &&
          r.multiple &&
          Array.isArray(r.value) &&
          (r.value = Se(n.children).forEach(function (l) {
            l.props.selected = r.value.indexOf(l.props.value) != -1;
          })),
          o == "select" &&
            r.defaultValue != null &&
            (r.value = Se(n.children).forEach(function (l) {
              l.props.selected = r.multiple
                ? r.defaultValue.indexOf(l.props.value) != -1
                : r.defaultValue == l.props.value;
            })),
          n.class && !n.className
            ? ((r.class = n.class), Object.defineProperty(r, "className", Ss))
            : ((n.className && !n.class) || (n.class && n.className)) &&
              (r.class = r.className = n.className),
          (t.props = r);
      })(e),
      (e.$$typeof = Vo),
      jo && jo(e);
  };
  var Ko = T.__r;
  T.__r = function (e) {
    Ko && Ko(e), (mn = e.__c);
  };
  var Yo = T.diffed;
  T.diffed = function (e) {
    Yo && Yo(e);
    var t = e.props,
      n = e.__e;
    n != null &&
      e.type === "textarea" &&
      "value" in t &&
      t.value !== n.value &&
      (n.value = t.value == null ? "" : t.value),
      (mn = null);
  };
  var Go = {
      ReactCurrentDispatcher: {
        current: {
          readContext: function (e) {
            return mn.__n[e.__c].props.value;
          },
        },
      },
    },
    Es = "17.0.2";
  function Xo(e) {
    return H.bind(null, e);
  }
  function Pe(e) {
    return !!e && e.$$typeof === Vo;
  }
  function Zo(e) {
    return Pe(e) && e.type === oe;
  }
  function Jo(e) {
    return (
      !!e &&
      !!e.displayName &&
      (typeof e.displayName == "string" || e.displayName instanceof String) &&
      e.displayName.startsWith("Memo(")
    );
  }
  function pt(e) {
    return Pe(e) ? cn.apply(null, arguments) : e;
  }
  function Qo(e) {
    return !!e.__k && (Oe(null, e), !0);
  }
  function er(e) {
    return (e && (e.base || (e.nodeType === 1 && e))) || null;
  }
  var tr = function (e, t) {
      return e(t);
    },
    Tt = function (e, t) {
      return e(t);
    },
    nr = oe;
  function gn(e) {
    e();
  }
  function or(e) {
    return e;
  }
  function rr() {
    return [!1, gn];
  }
  var ir = Le,
    sr = Pe;
  function ar(e, t) {
    var n = t(),
      o = E({ h: { __: n, v: t } }),
      r = o[0].h,
      i = o[1];
    return (
      Le(
        function () {
          (r.__ = n), (r.v = t), vn(r) && i({ h: r });
        },
        [e, n, t]
      ),
      O(
        function () {
          return (
            vn(r) && i({ h: r }),
            e(function () {
              vn(r) && i({ h: r });
            })
          );
        },
        [e]
      ),
      n
    );
  }
  function vn(e) {
    var t,
      n,
      o = e.v,
      r = e.__;
    try {
      var i = o();
      return !(
        ((t = r) === (n = i) && (t !== 0 || 1 / t == 1 / n)) ||
        (t != t && n != n)
      );
    } catch {
      return !0;
    }
  }
  var Ae = {
    useState: E,
    useId: Ao,
    useReducer: fn,
    useEffect: O,
    useLayoutEffect: Le,
    useInsertionEffect: ir,
    useTransition: rr,
    useDeferredValue: or,
    useSyncExternalStore: ar,
    startTransition: gn,
    useRef: D,
    useImperativeHandle: Eo,
    useMemo: Z,
    useCallback: Y,
    useContext: Ge,
    useDebugValue: Po,
    version: "17.0.2",
    Children: Me,
    render: Ho,
    hydrate: Uo,
    unmountComponentAtNode: Qo,
    createPortal: It,
    createElement: H,
    createContext: De,
    createFactory: Xo,
    cloneElement: pt,
    createRef: ao,
    Fragment: oe,
    isValidElement: Pe,
    isElement: sr,
    isFragment: Zo,
    isMemo: Jo,
    findDOMNode: er,
    Component: pe,
    PureComponent: kt,
    memo: Oo,
    forwardRef: L,
    flushSync: Tt,
    unstable_batchedUpdates: tr,
    StrictMode: nr,
    Suspense: ft,
    SuspenseList: et,
    lazy: $o,
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Go,
  };
  const Ps = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        Children: Me,
        Component: pe,
        Fragment: oe,
        PureComponent: kt,
        StrictMode: nr,
        Suspense: ft,
        SuspenseList: et,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Go,
        cloneElement: pt,
        createContext: De,
        createElement: H,
        createFactory: Xo,
        createPortal: It,
        createRef: ao,
        default: Ae,
        findDOMNode: er,
        flushSync: Tt,
        forwardRef: L,
        hydrate: Uo,
        isElement: sr,
        isFragment: Zo,
        isMemo: Jo,
        isValidElement: Pe,
        lazy: $o,
        memo: Oo,
        render: Ho,
        startTransition: gn,
        unmountComponentAtNode: Qo,
        unstable_batchedUpdates: tr,
        useCallback: Y,
        useContext: Ge,
        useDebugValue: Po,
        useDeferredValue: or,
        useEffect: O,
        useErrorBoundary: as,
        useId: Ao,
        useImperativeHandle: Eo,
        useInsertionEffect: ir,
        useLayoutEffect: Le,
        useMemo: Z,
        useReducer: fn,
        useRef: D,
        useState: E,
        useSyncExternalStore: ar,
        useTransition: rr,
        version: Es,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
  function Rt() {
    return (
      (Rt = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var o in n) ({}).hasOwnProperty.call(n, o) && (e[o] = n[o]);
            }
            return e;
          }),
      Rt.apply(null, arguments)
    );
  }
  function As(e) {
    const t = new Uint8Array(e);
    return window.btoa(String.fromCharCode(...t));
  }
  function ks(e) {
    const t = window.atob(e),
      n = t.length,
      o = new Uint8Array(n);
    for (let r = 0; r < n; r++) o[r] = t.charCodeAt(r);
    return o.buffer;
  }
  const Is = new Blob(
      [
        `
      const BIAS = 0x84;
      const CLIP = 32635;
      const encodeTable = [
        0,0,1,1,2,2,2,2,3,3,3,3,3,3,3,3,
        4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,
        5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
        5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
        6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,
        6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,
        6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,
        6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,
        7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
        7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
        7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
        7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
        7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
        7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
        7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
        7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7
      ];
      
      function encodeSample(sample) {
        let sign;
        let exponent;
        let mantissa;
        let muLawSample;
        sign = (sample >> 8) & 0x80;
        if (sign !== 0) sample = -sample;
        sample = sample + BIAS;
        if (sample > CLIP) sample = CLIP;
        exponent = encodeTable[(sample>>7) & 0xFF];
        mantissa = (sample >> (exponent+3)) & 0x0F;
        muLawSample = ~(sign | (exponent << 4) | mantissa);
        
        return muLawSample;
      }
    
      class RawAudioProcessor extends AudioWorkletProcessor {
        constructor() {
          super();
                    
          this.port.onmessage = ({ data }) => {
            this.buffer = []; // Initialize an empty buffer
            this.bufferSize = data.sampleRate / 4;
            
            if (globalThis.LibSampleRate && sampleRate !== data.sampleRate) {
              globalThis.LibSampleRate.create(1, sampleRate, data.sampleRate).then(resampler => {
                this.resampler = resampler;
              });
            } 
          };
        }
        process(inputs) {
          if (!this.buffer) {
            return true;
          }
          
          const input = inputs[0]; // Get the first input node
          if (input.length > 0) {
            let channelData = input[0]; // Get the first channel's data

            // Resample the audio if necessary
            if (this.resampler) {
              channelData = this.resampler.full(channelData);
            }

            // Add channel data to the buffer
            this.buffer.push(...channelData);
            // Get max volume 
            let sum = 0.0;
            for (let i = 0; i < channelData.length; i++) {
              sum += channelData[i] * channelData[i];
            }
            const maxVolume = Math.sqrt(sum / channelData.length);
            // Check if buffer size has reached or exceeded the threshold
            if (this.buffer.length >= this.bufferSize) {
              const float32Array = new Float32Array(this.buffer)
              let encodedArray = this.format === "ulaw"
                ? new Uint8Array(float32Array.length)
                : new Int16Array(float32Array.length);

              // Iterate through the Float32Array and convert each sample to PCM16
              for (let i = 0; i < float32Array.length; i++) {
                // Clamp the value to the range [-1, 1]
                let sample = Math.max(-1, Math.min(1, float32Array[i]));

                // Scale the sample to the range [-32768, 32767]
                let value = sample < 0 ? sample * 32768 : sample * 32767;
                if (this.format === "ulaw") {
                  value = encodeSample(Math.round(value));
                }

                encodedArray[i] = value;
              }

              // Send the buffered data to the main script
              this.port.postMessage([encodedArray, maxVolume]);

              // Clear the buffer after sending
              this.buffer = [];
            }
          }
          return true; // Continue processing
        }
      }
      registerProcessor("raw-audio-processor", RawAudioProcessor);
  `,
      ],
      { type: "application/javascript" }
    ),
    Ts = URL.createObjectURL(Is);
  class yn {
    static async create({
      sampleRate: t,
      format: n,
      preferHeadphonesForIosDevices: o,
    }) {
      let r = null,
        i = null;
      try {
        const l = {
          sampleRate: { ideal: t },
          echoCancellation: { ideal: !0 },
          noiseSuppression: { ideal: !0 },
        };
        if (
          ([
            "iPad Simulator",
            "iPhone Simulator",
            "iPod Simulator",
            "iPad",
            "iPhone",
            "iPod",
          ].includes(navigator.platform) ||
            (navigator.userAgent.includes("Mac") &&
              "ontouchend" in document)) &&
          o
        ) {
          const p = (
            await window.navigator.mediaDevices.enumerateDevices()
          ).find(
            (v) =>
              v.kind === "audioinput" &&
              ["airpod", "headphone", "earphone"].find((f) =>
                v.label.toLowerCase().includes(f)
              )
          );
          p && (l.deviceId = { ideal: p.deviceId });
        }
        const c = navigator.mediaDevices.getSupportedConstraints().sampleRate;
        r = new window.AudioContext(c ? { sampleRate: t } : {});
        const d = r.createAnalyser();
        c ||
          (await r.audioWorklet.addModule(
            "https://cdn.jsdelivr.net/npm/@alexanderolsen/libsamplerate-js@2.1.2/dist/libsamplerate.worklet.js"
          )),
          await r.audioWorklet.addModule(Ts),
          (i = await navigator.mediaDevices.getUserMedia({ audio: l }));
        const u = r.createMediaStreamSource(i),
          m = new AudioWorkletNode(r, "raw-audio-processor");
        return (
          m.port.postMessage({ type: "setFormat", format: n, sampleRate: t }),
          u.connect(d),
          d.connect(m),
          new yn(r, d, m, i)
        );
      } catch (l) {
        var s, a;
        throw (
          ((s = i) == null || s.getTracks().forEach((c) => c.stop()),
          (a = r) == null || a.close(),
          l)
        );
      }
    }
    constructor(t, n, o, r) {
      (this.context = void 0),
        (this.analyser = void 0),
        (this.worklet = void 0),
        (this.inputStream = void 0),
        (this.context = t),
        (this.analyser = n),
        (this.worklet = o),
        (this.inputStream = r);
    }
    async close() {
      this.inputStream.getTracks().forEach((t) => t.stop()),
        await this.context.close();
    }
  }
  const Rs = new Blob(
      [
        `
      const decodeTable = [0,132,396,924,1980,4092,8316,16764];
      
      export function decodeSample(muLawSample) {
        let sign;
        let exponent;
        let mantissa;
        let sample;
        muLawSample = ~muLawSample;
        sign = (muLawSample & 0x80);
        exponent = (muLawSample >> 4) & 0x07;
        mantissa = muLawSample & 0x0F;
        sample = decodeTable[exponent] + (mantissa << (exponent+3));
        if (sign !== 0) sample = -sample;

        return sample;
      }
      
      class AudioConcatProcessor extends AudioWorkletProcessor {
        constructor() {
          super();
          this.buffers = []; // Initialize an empty buffer
          this.cursor = 0;
          this.currentBuffer = null;
          this.wasInterrupted = false;
          this.finished = false;
          
          this.port.onmessage = ({ data }) => {
            switch (data.type) {
              case "setFormat":
                this.format = data.format;
                break;
              case "buffer":
                this.wasInterrupted = false;
                this.buffers.push(
                  this.format === "ulaw"
                    ? new Uint8Array(data.buffer)
                    : new Int16Array(data.buffer)
                );
                break;
              case "interrupt":
                this.wasInterrupted = true;
                break;
              case "clearInterrupted":
                if (this.wasInterrupted) {
                  this.wasInterrupted = false;
                  this.buffers = [];
                  this.currentBuffer = null;
                }
            }
          };
        }
        process(_, outputs) {
          let finished = false;
          const output = outputs[0][0];
          for (let i = 0; i < output.length; i++) {
            if (!this.currentBuffer) {
              if (this.buffers.length === 0) {
                finished = true;
                break;
              }
              this.currentBuffer = this.buffers.shift();
              this.cursor = 0;
            }

            let value = this.currentBuffer[this.cursor];
            if (this.format === "ulaw") {
              value = decodeSample(value);
            }
            output[i] = value / 32768;
            this.cursor++;

            if (this.cursor >= this.currentBuffer.length) {
              this.currentBuffer = null;
            }
          }

          if (this.finished !== finished) {
            this.finished = finished;
            this.port.postMessage({ type: "process", finished });
          }

          return true; // Continue processing
        }
      }

      registerProcessor("audio-concat-processor", AudioConcatProcessor);
    `,
      ],
      { type: "application/javascript" }
    ),
    Ns = URL.createObjectURL(Rs);
  let Os = class Ki {
    static async create({ sampleRate: t, format: n }) {
      let o = null;
      try {
        o = new AudioContext({ sampleRate: t });
        const i = o.createAnalyser(),
          s = o.createGain();
        s.connect(i),
          i.connect(o.destination),
          await o.audioWorklet.addModule(Ns);
        const a = new AudioWorkletNode(o, "audio-concat-processor");
        return (
          a.port.postMessage({ type: "setFormat", format: n }),
          a.connect(s),
          new Ki(o, i, s, a)
        );
      } catch (i) {
        var r;
        throw ((r = o) == null || r.close(), i);
      }
    }
    constructor(t, n, o, r) {
      (this.context = void 0),
        (this.analyser = void 0),
        (this.gain = void 0),
        (this.worklet = void 0),
        (this.context = t),
        (this.analyser = n),
        (this.gain = o),
        (this.worklet = r);
    }
    async close() {
      await this.context.close();
    }
  };
  function lr(e) {
    return !!e.type;
  }
  let Ds = class Yi {
    static async create(t) {
      let n = null;
      try {
        var o;
        const i = (o = t.origin) != null ? o : "wss://api.elevenlabs.io",
          s = t.signedUrl
            ? t.signedUrl
            : i + "/v1/convai/conversation?agent_id=" + t.agentId,
          a = ["convai"];
        t.authorization && a.push(`bearer.${t.authorization}`),
          (n = new WebSocket(s, a));
        const l = await new Promise((v, f) => {
            n.addEventListener(
              "open",
              () => {
                var _;
                const h = { type: "conversation_initiation_client_data" };
                var y, b, w, x;
                t.overrides &&
                  (h.conversation_config_override = {
                    agent: {
                      prompt:
                        (y = t.overrides.agent) == null ? void 0 : y.prompt,
                      first_message:
                        (b = t.overrides.agent) == null
                          ? void 0
                          : b.firstMessage,
                      language:
                        (w = t.overrides.agent) == null ? void 0 : w.language,
                    },
                    tts: {
                      voice_id:
                        (x = t.overrides.tts) == null ? void 0 : x.voiceId,
                    },
                  }),
                  t.customLlmExtraBody &&
                    (h.custom_llm_extra_body = t.customLlmExtraBody),
                  t.dynamicVariables &&
                    (h.dynamic_variables = t.dynamicVariables),
                  (_ = n) == null || _.send(JSON.stringify(h));
              },
              { once: !0 }
            ),
              n.addEventListener("error", (_) => {
                setTimeout(() => f(_), 0);
              }),
              n.addEventListener("close", f),
              n.addEventListener(
                "message",
                (_) => {
                  const h = JSON.parse(_.data);
                  lr(h) &&
                    (h.type === "conversation_initiation_metadata"
                      ? v(h.conversation_initiation_metadata_event)
                      : console.warn(
                          "First received message is not conversation metadata."
                        ));
                },
                { once: !0 }
              );
          }),
          {
            conversation_id: c,
            agent_output_audio_format: d,
            user_input_audio_format: u,
          } = l,
          m = cr(u ?? "pcm_16000"),
          p = cr(d);
        return new Yi(n, c, m, p);
      } catch (i) {
        var r;
        throw ((r = n) == null || r.close(), i);
      }
    }
    constructor(t, n, o, r) {
      (this.socket = void 0),
        (this.conversationId = void 0),
        (this.inputFormat = void 0),
        (this.outputFormat = void 0),
        (this.queue = []),
        (this.disconnectionDetails = null),
        (this.onDisconnectCallback = null),
        (this.onMessageCallback = null),
        (this.socket = t),
        (this.conversationId = n),
        (this.inputFormat = o),
        (this.outputFormat = r),
        this.socket.addEventListener("error", (i) => {
          setTimeout(
            () =>
              this.disconnect({
                reason: "error",
                message: "The connection was closed due to a socket error.",
                context: i,
              }),
            0
          );
        }),
        this.socket.addEventListener("close", (i) => {
          this.disconnect(
            i.code === 1e3
              ? { reason: "agent", context: i }
              : {
                  reason: "error",
                  message:
                    i.reason || "The connection was closed by the server.",
                  context: i,
                }
          );
        }),
        this.socket.addEventListener("message", (i) => {
          try {
            const s = JSON.parse(i.data);
            if (!lr(s)) return;
            this.onMessageCallback
              ? this.onMessageCallback(s)
              : this.queue.push(s);
          } catch {}
        });
    }
    close() {
      this.socket.close();
    }
    sendMessage(t) {
      this.socket.send(JSON.stringify(t));
    }
    onMessage(t) {
      (this.onMessageCallback = t), this.queue.forEach(t), (this.queue = []);
    }
    onDisconnect(t) {
      (this.onDisconnectCallback = t),
        this.disconnectionDetails && t(this.disconnectionDetails);
    }
    disconnect(t) {
      var n;
      this.disconnectionDetails ||
        ((this.disconnectionDetails = t),
        (n = this.onDisconnectCallback) == null || n.call(this, t));
    }
  };
  function cr(e) {
    const [t, n] = e.split("_");
    if (!["pcm", "ulaw"].includes(t)) throw new Error(`Invalid format: ${e}`);
    const o = parseInt(n);
    if (isNaN(o)) throw new Error(`Invalid sample rate: ${n}`);
    return { format: t, sampleRate: o };
  }
  const Ls = { clientTools: {} },
    Ms = {
      onConnect: () => {},
      onDebug: () => {},
      onDisconnect: () => {},
      onError: () => {},
      onMessage: () => {},
      onModeChange: () => {},
      onStatusChange: () => {},
      onCanSendFeedbackChange: () => {},
    };
  class bn {
    static async startSession(t) {
      const n = Rt({}, Ls, Ms, t);
      n.onStatusChange({ status: "connecting" }),
        n.onCanSendFeedbackChange({ canSendFeedback: !1 });
      let o = null,
        r = null,
        i = null;
      try {
        const c = await navigator.mediaDevices.getUserMedia({ audio: !0 });
        return (
          c == null || c.getTracks().forEach((d) => d.stop()),
          (r = await Ds.create(t)),
          ([o, i] = await Promise.all([
            yn.create(
              Rt({}, r.inputFormat, {
                preferHeadphonesForIosDevices: t.preferHeadphonesForIosDevices,
              })
            ),
            Os.create(r.outputFormat),
          ])),
          new bn(n, r, o, i)
        );
      } catch (c) {
        var s, a, l;
        throw (
          (n.onStatusChange({ status: "disconnected" }),
          (s = r) == null || s.close(),
          await ((a = o) == null ? void 0 : a.close()),
          await ((l = i) == null ? void 0 : l.close()),
          c)
        );
      }
    }
    constructor(t, n, o, r) {
      var i = this;
      (this.options = void 0),
        (this.connection = void 0),
        (this.input = void 0),
        (this.output = void 0),
        (this.lastInterruptTimestamp = 0),
        (this.mode = "listening"),
        (this.status = "connecting"),
        (this.inputFrequencyData = void 0),
        (this.outputFrequencyData = void 0),
        (this.volume = 1),
        (this.currentEventId = 1),
        (this.lastFeedbackEventId = 1),
        (this.canSendFeedback = !1),
        (this.endSession = () =>
          this.endSessionWithDetails({ reason: "user" })),
        (this.endSessionWithDetails = async function (s) {
          (i.status !== "connected" && i.status !== "connecting") ||
            (i.updateStatus("disconnecting"),
            i.connection.close(),
            await i.input.close(),
            await i.output.close(),
            i.updateStatus("disconnected"),
            i.options.onDisconnect(s));
        }),
        (this.updateMode = (s) => {
          s !== this.mode &&
            ((this.mode = s), this.options.onModeChange({ mode: s }));
        }),
        (this.updateStatus = (s) => {
          s !== this.status &&
            ((this.status = s), this.options.onStatusChange({ status: s }));
        }),
        (this.updateCanSendFeedback = () => {
          const s = this.currentEventId !== this.lastFeedbackEventId;
          this.canSendFeedback !== s &&
            ((this.canSendFeedback = s),
            this.options.onCanSendFeedbackChange({ canSendFeedback: s }));
        }),
        (this.onMessage = async function (s) {
          switch (s.type) {
            case "interruption":
              s.interruption_event &&
                (i.lastInterruptTimestamp = s.interruption_event.event_id),
                i.fadeOutAudio();
              break;
            case "agent_response":
              i.options.onMessage({
                source: "ai",
                message: s.agent_response_event.agent_response,
              });
              break;
            case "user_transcript":
              i.options.onMessage({
                source: "user",
                message: s.user_transcription_event.user_transcript,
              });
              break;
            case "internal_tentative_agent_response":
              i.options.onDebug({
                type: "tentative_agent_response",
                response:
                  s.tentative_agent_response_internal_event
                    .tentative_agent_response,
              });
              break;
            case "client_tool_call":
              if (
                i.options.clientTools.hasOwnProperty(
                  s.client_tool_call.tool_name
                )
              ) {
                try {
                  var a;
                  const l =
                    (a = await i.options.clientTools[
                      s.client_tool_call.tool_name
                    ](s.client_tool_call.parameters)) != null
                      ? a
                      : "Client tool execution successful.";
                  i.connection.sendMessage({
                    type: "client_tool_result",
                    tool_call_id: s.client_tool_call.tool_call_id,
                    result: l,
                    is_error: !1,
                  });
                } catch (l) {
                  i.onError(
                    "Client tool execution failed with following error: " +
                      (l == null ? void 0 : l.message),
                    { clientToolName: s.client_tool_call.tool_name }
                  ),
                    i.connection.sendMessage({
                      type: "client_tool_result",
                      tool_call_id: s.client_tool_call.tool_call_id,
                      result:
                        "Client tool execution failed: " +
                        (l == null ? void 0 : l.message),
                      is_error: !0,
                    });
                }
                break;
              }
              if (i.options.onUnhandledClientToolCall) {
                i.options.onUnhandledClientToolCall(s.client_tool_call);
                break;
              }
              i.onError(
                `Client tool with name ${s.client_tool_call.tool_name} is not defined on client`,
                { clientToolName: s.client_tool_call.tool_name }
              ),
                i.connection.sendMessage({
                  type: "client_tool_result",
                  tool_call_id: s.client_tool_call.tool_call_id,
                  result: `Client tool with name ${s.client_tool_call.tool_name} is not defined on client`,
                  is_error: !0,
                });
              break;
            case "audio":
              i.lastInterruptTimestamp <= s.audio_event.event_id &&
                (i.addAudioBase64Chunk(s.audio_event.audio_base_64),
                (i.currentEventId = s.audio_event.event_id),
                i.updateCanSendFeedback(),
                i.updateMode("speaking"));
              break;
            case "ping":
              i.connection.sendMessage({
                type: "pong",
                event_id: s.ping_event.event_id,
              });
              break;
            default:
              i.options.onDebug(s);
          }
        }),
        (this.onInputWorkletMessage = (s) => {
          this.status === "connected" &&
            this.connection.sendMessage({
              user_audio_chunk: As(s.data[0].buffer),
            });
        }),
        (this.onOutputWorkletMessage = ({ data: s }) => {
          s.type === "process" &&
            this.updateMode(s.finished ? "listening" : "speaking");
        }),
        (this.addAudioBase64Chunk = (s) => {
          (this.output.gain.gain.value = this.volume),
            this.output.worklet.port.postMessage({ type: "clearInterrupted" }),
            this.output.worklet.port.postMessage({
              type: "buffer",
              buffer: ks(s),
            });
        }),
        (this.fadeOutAudio = () => {
          this.updateMode("listening"),
            this.output.worklet.port.postMessage({ type: "interrupt" }),
            this.output.gain.gain.exponentialRampToValueAtTime(
              1e-4,
              this.output.context.currentTime + 2
            ),
            setTimeout(() => {
              (this.output.gain.gain.value = this.volume),
                this.output.worklet.port.postMessage({
                  type: "clearInterrupted",
                });
            }, 2e3);
        }),
        (this.onError = (s, a) => {
          console.error(s, a), this.options.onError(s, a);
        }),
        (this.calculateVolume = (s) => {
          if (s.length === 0) return 0;
          let a = 0;
          for (let l = 0; l < s.length; l++) a += s[l] / 255;
          return (a /= s.length), a < 0 ? 0 : a > 1 ? 1 : a;
        }),
        (this.getId = () => this.connection.conversationId),
        (this.isOpen = () => this.status === "connected"),
        (this.setVolume = ({ volume: s }) => {
          this.volume = s;
        }),
        (this.getInputByteFrequencyData = () => (
          this.inputFrequencyData != null ||
            (this.inputFrequencyData = new Uint8Array(
              this.input.analyser.frequencyBinCount
            )),
          this.input.analyser.getByteFrequencyData(this.inputFrequencyData),
          this.inputFrequencyData
        )),
        (this.getOutputByteFrequencyData = () => (
          this.outputFrequencyData != null ||
            (this.outputFrequencyData = new Uint8Array(
              this.output.analyser.frequencyBinCount
            )),
          this.output.analyser.getByteFrequencyData(this.outputFrequencyData),
          this.outputFrequencyData
        )),
        (this.getInputVolume = () =>
          this.calculateVolume(this.getInputByteFrequencyData())),
        (this.getOutputVolume = () =>
          this.calculateVolume(this.getOutputByteFrequencyData())),
        (this.sendFeedback = (s) => {
          this.canSendFeedback
            ? (this.connection.sendMessage({
                type: "feedback",
                score: s ? "like" : "dislike",
                event_id: this.currentEventId,
              }),
              (this.lastFeedbackEventId = this.currentEventId),
              this.updateCanSendFeedback())
            : console.warn(
                this.lastFeedbackEventId === 0
                  ? "Cannot send feedback: the conversation has not started yet."
                  : "Cannot send feedback: feedback has already been sent for the current response."
              );
        }),
        (this.options = t),
        (this.connection = n),
        (this.input = o),
        (this.output = r),
        this.options.onConnect({ conversationId: n.conversationId }),
        this.connection.onDisconnect(this.endSessionWithDetails),
        this.connection.onMessage(this.onMessage),
        (this.input.worklet.port.onmessage = this.onInputWorkletMessage),
        (this.output.worklet.port.onmessage = this.onOutputWorkletMessage),
        this.updateStatus("connected");
    }
  }
  function Fs(e, t, n = "https://api.elevenlabs.io") {
    return fetch(`${n}/v1/convai/conversations/${e}/feedback`, {
      method: "POST",
      body: JSON.stringify({ feedback: t ? "like" : "dislike" }),
      headers: { "Content-Type": "application/json" },
    });
  }
  function wn() {
    return (
      (wn = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var o in n) ({}).hasOwnProperty.call(n, o) && (e[o] = n[o]);
            }
            return e;
          }),
      wn.apply(null, arguments)
    );
  }
  function Bs(e) {
    const t = D(null),
      n = D(null),
      [o, r] = E("disconnected"),
      [i, s] = E(!1),
      [a, l] = E("listening");
    return (
      O(
        () => () => {
          var c;
          (c = t.current) == null || c.endSession();
        },
        []
      ),
      {
        startSession: async (c) => {
          var d;
          if ((d = t.current) != null && d.isOpen()) return t.current.getId();
          if (n.current) return (await n.current).getId();
          try {
            return (
              (n.current = bn.startSession(
                wn({}, e ?? {}, c ?? {}, {
                  onModeChange: ({ mode: u }) => {
                    l(u);
                  },
                  onStatusChange: ({ status: u }) => {
                    r(u);
                  },
                  onCanSendFeedbackChange: ({ canSendFeedback: u }) => {
                    s(u);
                  },
                })
              )),
              (t.current = await n.current),
              t.current.getId()
            );
          } finally {
            n.current = null;
          }
        },
        endSession: async () => {
          const c = t.current;
          (t.current = null), await (c == null ? void 0 : c.endSession());
        },
        setVolume: ({ volume: c }) => {
          var d;
          (d = t.current) == null || d.setVolume({ volume: c });
        },
        getInputByteFrequencyData: () => {
          var c;
          return (c = t.current) == null
            ? void 0
            : c.getInputByteFrequencyData();
        },
        getOutputByteFrequencyData: () => {
          var c;
          return (c = t.current) == null
            ? void 0
            : c.getOutputByteFrequencyData();
        },
        getInputVolume: () => {
          var c, d;
          return (c = (d = t.current) == null ? void 0 : d.getInputVolume()) !=
            null
            ? c
            : 0;
        },
        getOutputVolume: () => {
          var c, d;
          return (c = (d = t.current) == null ? void 0 : d.getOutputVolume()) !=
            null
            ? c
            : 0;
        },
        sendFeedback: (c) => {
          var d;
          (d = t.current) == null || d.sendFeedback(c);
        },
        status: o,
        canSendFeedback: i,
        isSpeaking: a === "speaking",
      }
    );
  }
  function qs(e) {
    return g("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: 1.5,
      stroke: "currentColor",
      height: "24px",
      width: "24px",
      ...e,
      children: g("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M19.5 8.25l-7.5 7.5-7.5-7.5",
      }),
    });
  }
  function ur(e) {
    return g("svg", {
      viewBox: "0 0 640 640",
      xmlns: "http://www.w3.org/2000/svg",
      height: "1em",
      width: "1em",
      stroke: "currentColor",
      fill: "currentColor",
      ...e,
      children: g("path", {
        d: "M 82.6 88.6 l 104 -24 c 11.3 -2.6 22.9 3.3 27.5 13.9 l 48 112 c 4.2 9.8 1.4 21.3 -6.9 28 l -60.6 49.6 c 36 76.7 98.9 140.5 177.2 177.2 l 49.6 -60.6 c 6.8 -8.3 18.2 -11.1 28 -6.9 l 112 48 C 572.1 430.5 578 442.1 575.4 453.4 l -24 104 C 548.9 568.2 539.3 576 528 576 c -256.1 0 -464 -207.5 -464 -464 c 0 -11.2 7.7 -20.9 18.6 -23.4 z",
      }),
    });
  }
  function $s(e) {
    return g("svg", {
      viewBox: "0 0 640 640",
      xmlns: "http://www.w3.org/2000/svg",
      height: "1em",
      width: "1em",
      stroke: "currentColor",
      fill: "currentColor",
      ...e,
      children: g("path", {
        d: "M 371.8 445.4 l 49.6 -60.6 c 6.8 -8.3 18.2 -11.1 28 -6.9 l 112 48 c 10.7 4.6 16.5 16.1 13.9 27.5 l -24 104 c -2.5 10.8 -12.1 18.6 -23.4 18.6 c -100.7 0 -193.7 -32.4 -269.7 -86.9 l 80 -61.8 c 10.9 6.5 22.1 12.7 33.6 18.1 z m -365.6 76.7 L 164.9 399.5 C 102.1 320.4 64 220.9 64 112 c 0 -11.2 7.7 -20.9 18.6 -23.4 l 104 -24 c 11.3 -2.6 22.9 3.3 27.5 13.9 l 48 112 c 4.2 9.8 1.4 21.3 -6.9 28 l -60.6 49.6 c 12.2 26.1 27.9 50.3 46 72.8 L 594.5 67.4 C 601.5 62 611.5 63.2 617 70.2 L 636.6 95.4 c 5.4 7 4.2 17 -2.8 22.4 l -588.4 454.7 c -7 5.4 -17 4.2 -22.5 -2.8 l -19.6 -25.3 c -5.4 -6.8 -4.1 -16.9 2.9 -22.3 z",
      }),
    });
  }
  function Ws(e) {
    return g("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      className: "lucide lucide-thumbs-up",
      ...e,
      children: [
        g("path", { d: "M7 10v12" }),
        g("path", {
          d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",
        }),
      ],
    });
  }
  function Vs(e) {
    return g("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      height: "1em",
      width: "1em",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      ...e,
      children: [
        g("path", { d: "M17 14V2" }),
        g("path", {
          d: "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z",
        }),
      ],
    });
  }
  const S = {
      wrapper: "_wrapper_p1gqy_15",
      box: "_box_p1gqy_36",
      open: "_open_p1gqy_54",
      expandable: "_expandable_p1gqy_59",
      customContent: "_customContent_p1gqy_65",
      compact: "_compact_p1gqy_69",
      avatar: "_avatar_p1gqy_75",
      avatarBackground: "_avatarBackground_p1gqy_91",
      avatarImage: "_avatarImage_p1gqy_101",
      canvas: "_canvas_p1gqy_113",
      actions: "_actions_p1gqy_118",
      hasLanguageSelect: "_hasLanguageSelect_p1gqy_126",
      actionButtons: "_actionButtons_p1gqy_136",
      status: "_status_p1gqy_145",
      btn: "_btn_p1gqy_159",
      disabled: "_disabled_p1gqy_205",
      secondary: "_secondary_p1gqy_219",
      iconBtn: "_iconBtn_p1gqy_233",
      select: "_select_p1gqy_237",
      ellipsis: "_ellipsis_p1gqy_243",
      icon: "_icon_p1gqy_233",
      minimize: "_minimize_p1gqy_263",
      openContent: "_openContent_p1gqy_278",
      closedContent: "_closedContent_p1gqy_293",
      poweredBy: "_poweredBy_p1gqy_310",
      full: "_full_p1gqy_320",
      terms: "_terms_p1gqy_324",
      strong: "_strong_p1gqy_355",
      show: "_show_p1gqy_383",
      termsFooter: "_termsFooter_p1gqy_387",
      feedback: "_feedback_p1gqy_398",
      flag: "_flag_p1gqy_424",
      selectContent: "_selectContent_p1gqy_432",
      selectViewport: "_selectViewport_p1gqy_443",
      selectValue: "_selectValue_p1gqy_447",
      selectIcon: "_selectIcon_p1gqy_453",
      selectItem: "_selectItem_p1gqy_461",
      selectItemIndicator: "_selectItemIndicator_p1gqy_480",
      selectScrollButton: "_selectScrollButton_p1gqy_489",
      error: "_error_p1gqy_498",
    },
    Hs = `#version 300 es
precision highp float;

uniform float uTime;
uniform float uOffsets[7];
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform sampler2D uPerlinTexture;

in vec2 vUv;

out vec4 outColor;

const float PI = 3.14159265358979323846;

// Draw a single oval with soft edges and calculate its gradient color
bool drawOval(vec2 polarUv, vec2 polarCenter, float a, float b, bool reverseGradient, float softness, out vec4 color) {
    vec2 p = polarUv - polarCenter;
    float oval = (p.x * p.x) / (a * a) + (p.y * p.y) / (b * b);
    
    float edge = smoothstep(1.0, 1.0 - softness, oval);
    
    if (edge > 0.0) {
        float gradient = reverseGradient ? (1.0 - (p.x / a + 1.0) / 2.0) : ((p.x / a + 1.0) / 2.0);
        color = vec4(vec3(gradient), 0.8 * edge);
        return true;
    }
    return false;
}

// Map grayscale value to a 4-color ramp (color1, color2, color3, color4)
vec3 colorRamp(float grayscale, vec3 color1, vec3 color2, vec3 color3, vec3 color4) {
    if (grayscale < 0.33) {
        return mix(color1, color2, grayscale * 3.0);
    } else if (grayscale < 0.66) {
        return mix(color2, color3, (grayscale - 0.33) * 3.0);
    } else {
        return mix(color3, color4, (grayscale - 0.66) * 3.0);
    }
}

vec2 hash2(vec2 p) {
    return fract(sin(vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)))) * 43758.5453);
}

// 2D noise for the ring
float noise2D(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    
    vec2 u = f * f * (3.0 - 2.0 * f);
    float n = mix(
        mix(dot(hash2(i + vec2(0.0, 0.0)), f - vec2(0.0, 0.0)),
            dot(hash2(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0)), u.x),
        mix(dot(hash2(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0)),
            dot(hash2(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0)), u.x),
        u.y
    );

    return 0.5 + 0.5 * n;
}

float sharpRing(vec2 uv, float theta, float time) {
    float ringStart = 1.0;
    float ringWidth = 0.5;
    float noiseScale = 5.0;
    
    vec2 noiseCoord = vec2(theta / (2.0 * PI), time * 0.1);
    noiseCoord *= noiseScale;
    
    float noise = noise2D(noiseCoord);
    noise = (noise - 0.5) * 4.0;
    
    return ringStart + noise * ringWidth * 1.5;
}

float smoothRing(vec2 uv, float time) {
    float angle = atan(uv.y, uv.x);
    if (angle < 0.0) angle += 2.0 * PI;
    
    vec2 noiseCoord = vec2(angle / (2.0 * PI), time * 0.1);
    noiseCoord *= 6.0;
    
    float noise = noise2D(noiseCoord);
    noise = (noise - 0.5) * 8.0;
    
    float ringStart = 0.9;
    float ringWidth = 0.3;
    
    return ringStart + noise * ringWidth;
}

void main() {
    // Normalize vUv to be centered around (0.0, 0.0)
    vec2 uv = vUv * 2.0 - 1.0;

    // Convert uv to polar coordinates
    float radius = length(uv);
    float theta = atan(uv.y, uv.x);
    if (theta < 0.0) theta += 2.0 * PI; // Normalize theta to [0, 2*PI]

    // Initialize the base color to white
    vec4 color = vec4(1.0, 1.0, 1.0, 1.0);

    // Original parameters for the ovals in polar coordinates
    float originalCenters[7] = float[7](0.0, 0.5 * PI, 1.0 * PI, 1.5 * PI, 2.0 * PI, 2.5 * PI, 3.0 * PI);

    // Parameters for the animated centers in polar coordinates
    float centers[7];
    for (int i = 0; i < 7; i++) {
        centers[i] = originalCenters[i] + 0.5 * sin(uTime / 20.0 + uOffsets[i]);
    }

    float a, b;
    vec4 ovalColor;

    // Check if the pixel is inside any of the ovals
    for (int i = 0; i < 7; i++) {
        float noise = texture(uPerlinTexture, vec2(mod(centers[i] + uTime * 0.05, 1.0), 0.5)).r;
        a = noise * 1.5; // Increased variance: goes from 0.0 to 1.0
        b = noise * 4.5; // Tall semi-minor axis
        bool reverseGradient = (i % 2 == 1); // Reverse gradient for every second oval

        // Calculate the distance in polar coordinates
        float distTheta = abs(theta - centers[i]);
        if (distTheta > PI) distTheta = 2.0 * PI - distTheta; // Shortest distance on circle
        float distRadius = radius;

        float softness = 0.4; // Controls edge softness (e.g. how much blur is applied to the ovals)

        // Check if the pixel is inside the oval in polar coordinates
        if (drawOval(vec2(distTheta, distRadius), vec2(0.0, 0.0), a, b, reverseGradient, softness, ovalColor)) {
            // Blend the oval color with the existing color
            color.rgb = mix(color.rgb, ovalColor.rgb, ovalColor.a);
            color.a = max(color.a, ovalColor.a); // Max alpha
        }
    }
    
    // Calculate both noisy rings
    float ringRadius1 = sharpRing(uv, theta, uTime);
    float ringRadius2 = smoothRing(uv, uTime);
    
    // Blend both rings
    float ringAlpha1 = (radius >= ringRadius1) ? 0.3 : 0.0;
    float ringAlpha2 = smoothstep(ringRadius2 - 0.05, ringRadius2 + 0.05, radius) * 0.25;
    
    float totalRingAlpha = max(ringAlpha1, ringAlpha2);
    
    // Apply screen blend mode for combined rings
    vec3 ringColor = vec3(1.0); // White ring color
    color.rgb = 1.0 - (1.0 - color.rgb) * (1.0 - ringColor * totalRingAlpha);

    // Define colours to ramp against greyscale (could increase the amount of colours in the ramp)
    vec3 color1 = vec3(0.0, 0.0, 0.0); // Black
    vec3 color2 = uColor1; // Darker Color
    vec3 color3 = uColor2; // Lighter Color
    vec3 color4 = vec3(1.0, 1.0, 1.0); // White

    // Convert grayscale color to the color ramp
    float luminance = color.r; 
    color.rgb = colorRamp(luminance, color1, color2, color3, color4); // Apply the color ramp

    outColor = color;
}
`,
    Us = `#version 300 es
precision highp float;

in vec2 position;

out vec2 vUv;

void main() {
  vUv = position * 0.5 + 0.5;
  gl_Position = vec4(position, 0, 1);
}
`,
    dr = 0,
    zs = new Float32Array([-1, 1, -1, -1, 1, 1, 1, -1]),
    js =
      "https://storage.googleapis.com/eleven-public-cdn/images/perlin-noise.png",
    xe = class xe {
      constructor(t) {
        Ne(this, "gl");
        Ne(this, "program");
        Ne(this, "startTime");
        Ne(this, "rafId", null);
        Ne(this, "resizeObserver");
        Ne(this, "copyNoiseImage", () => {
          this.gl.texImage2D(
            this.gl.TEXTURE_2D,
            0,
            this.gl.RGBA,
            this.gl.RGBA,
            this.gl.UNSIGNED_BYTE,
            xe.noiseImage
          ),
            this.gl.generateMipmap(this.gl.TEXTURE_2D);
        });
        Ne(this, "render", () => {
          if (!this.gl) {
            this.rafId = null;
            return;
          }
          const t = (performance.now() - this.startTime) / 1e3;
          this.gl.uniform1f(
            this.gl.getUniformLocation(this.program, "uTime"),
            t
          ),
            this.gl.drawArrays(this.gl.TRIANGLE_STRIP, 0, 4),
            (this.rafId = requestAnimationFrame(this.render));
        });
        const n = t.getContext("webgl2", { depth: !1, stencil: !1 });
        this.gl = n;
        const o = this.getShader(n.FRAGMENT_SHADER, Hs),
          r = this.getShader(n.VERTEX_SHADER, Us);
        if (!o || !r) throw new Error("Failed to compile shaders");
        if (
          ((this.program = n.createProgram()),
          n.attachShader(this.program, o),
          n.attachShader(this.program, r),
          n.linkProgram(this.program),
          !n.getProgramParameter(this.program, n.LINK_STATUS))
        )
          throw new Error("Failed to link program");
        const i = n.createTexture();
        n.bindTexture(n.TEXTURE_2D, i),
          n.texImage2D(
            n.TEXTURE_2D,
            0,
            n.RGBA,
            1,
            1,
            0,
            n.RGBA,
            n.UNSIGNED_BYTE,
            new Uint8Array([128, 128, 128, 255])
          ),
          xe.noiseImage ||
            ((xe.noiseImage = new Image()),
            (xe.noiseImage.crossOrigin = "anonymous"),
            (xe.noiseImage.src = js)),
          xe.noiseImage.complete
            ? this.copyNoiseImage()
            : xe.noiseImage.addEventListener("load", this.copyNoiseImage);
        const s = n.createBuffer();
        n.bindBuffer(n.ARRAY_BUFFER, s),
          n.bufferData(n.ARRAY_BUFFER, zs, n.STATIC_DRAW),
          n.vertexAttribPointer(dr, 2, n.FLOAT, !1, 0, 0),
          n.enableVertexAttribArray(dr),
          n.useProgram(this.program),
          n.uniform1i(n.getUniformLocation(this.program, "uPerlinTexture"), 0),
          n.uniform1fv(
            n.getUniformLocation(this.program, "uOffsets"),
            new Float32Array(7).map(() => Math.random() * Math.PI * 2)
          ),
          this.updateColors("#2792DC", "#9CE6E6"),
          (this.resizeObserver = new ResizeObserver((l) => {
            const c = l[0];
            let d;
            c.devicePixelContentBoxSize
              ? (d = c.devicePixelContentBoxSize[0])
              : (d = c.contentBoxSize[0]),
              (t.width = Math.min(512, d.inlineSize)),
              (t.height = Math.min(512, d.blockSize)),
              this.updateViewport();
          }));
        const a = t.parentElement;
        if (a)
          try {
            this.resizeObserver.observe(a, { box: "device-pixel-content-box" });
          } catch {
            this.resizeObserver.observe(a);
          }
        (this.startTime = performance.now()),
          (this.rafId = requestAnimationFrame(this.render));
      }
      dispose() {
        var t, n, o;
        this.rafId !== null && cancelAnimationFrame(this.rafId),
          (t = this.resizeObserver) == null || t.disconnect(),
          (o =
            (n = this.gl) == null
              ? void 0
              : n.getExtension("WEBGL_lose_context")) == null ||
            o.loseContext(),
          (this.gl = null),
          (this.program = null);
      }
      updateViewport() {
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
      }
      updateColors(t, n) {
        this.updateColor("uColor1", t), this.updateColor("uColor2", n);
      }
      updateColor(t, n) {
        try {
          const o = parseInt(n.slice(1, 3), 16) / 255,
            r = parseInt(n.slice(3, 5), 16) / 255,
            i = parseInt(n.slice(5, 7), 16) / 255;
          this.gl.uniform3fv(this.gl.getUniformLocation(this.program, t), [
            Math.pow(o, 2.2),
            Math.pow(r, 2.2),
            Math.pow(i, 2.2),
          ]);
        } catch (o) {
          console.error(`[ConversationalAI] Failed to parse ${n} as color:`, o);
        }
      }
      getShader(t, n) {
        const o = this.gl.createShader(t);
        return (
          this.gl.shaderSource(o, n),
          this.gl.compileShader(o),
          this.gl.getShaderParameter(o, this.gl.COMPILE_STATUS)
            ? o
            : (this.gl.deleteShader(o), null)
        );
      }
    };
  Ne(xe, "noiseImage");
  let xn = xe;
  function Ks({
    getInputVolume: e,
    getOutputVolume: t,
    isSpeaking: n,
    status: o,
    config: r,
  }) {
    const i = D(null),
      s = D(null);
    return (
      O(() => {
        if (o === "disconnected") {
          (i.current.style.transform = ""),
            (s.current.style.transform = ""),
            (s.current.style.opacity = "");
          return;
        }
        let a;
        function l() {
          const c = e(),
            d = t(),
            u = n ? 1 : 0.5,
            m = n ? 1 : 1 - c * 0.6,
            p = n ? 1 + d * 0.6 : 1;
          (i.current.style.transform = `scale(${p})`),
            (s.current.style.transform = `scale(${m})`),
            (s.current.style.opacity = `${u}`),
            (a = requestAnimationFrame(l));
        }
        return (
          l(),
          () => {
            cancelAnimationFrame(a);
          }
        );
      }, [o]),
      g("div", {
        className: S.avatar,
        children: [
          g("div", { ref: i, className: S.avatarBackground }),
          g("div", {
            ref: s,
            style: {
              backgroundImage:
                r.type === "image"
                  ? `url(${r.url})`
                  : r.type === "url"
                  ? `url(${r.custom_url})`
                  : void 0,
            },
            className: S.avatarImage,
            children:
              r.type === "orb" &&
              g(Ys, { color1: r.color_1, color2: r.color_2 }),
          }),
        ],
      })
    );
  }
  function Ys({ color1: e, color2: t }) {
    const n = D(null),
      o = D(null);
    return (
      O(() => {
        var r;
        try {
          o.current = new xn(n.current);
        } catch {
          (r = o.current) == null || r.dispose(), (o.current = null);
        }
        return () => {
          var i;
          (i = o.current) == null || i.dispose();
        };
      }, []),
      O(() => {
        var r;
        (r = o.current) == null || r.updateColors(e, t);
      }, [e, t]),
      g("canvas", { className: S.canvas, ref: n })
    );
  }
  function fr(e) {
    var t,
      n,
      o = "";
    if (typeof e == "string" || typeof e == "number") o += e;
    else if (typeof e == "object")
      if (Array.isArray(e)) {
        var r = e.length;
        for (t = 0; t < r; t++)
          e[t] && (n = fr(e[t])) && (o && (o += " "), (o += n));
      } else for (n in e) e[n] && (o && (o += " "), (o += n));
    return o;
  }
  function ae() {
    for (var e, t, n = 0, o = "", r = arguments.length; n < r; n++)
      (e = arguments[n]) && (t = fr(e)) && (o && (o += " "), (o += t));
    return o;
  }
  function pr() {
    return g("div", { className: S.poweredBy, children: "" });
  }
  const Cn = {
    en: { name: "English", flagCode: "us", languageCode: "en" },
    zh: { name: "Chinese", flagCode: "cn", languageCode: "zh" },
    es: { name: "Spanish", flagCode: "es", languageCode: "es" },
    hi: { name: "Hindi", flagCode: "in", languageCode: "hi" },
    pt: { name: "Portuguese", flagCode: "br", languageCode: "pt" },
    fr: { name: "French", flagCode: "fr", languageCode: "fr" },
    de: { name: "German", flagCode: "de", languageCode: "de" },
    ja: { name: "Japanese", flagCode: "jp", languageCode: "ja" },
    ar: { name: "Arabic", flagCode: "ae", languageCode: "ar" },
    ru: { name: "Russian", flagCode: "ru", languageCode: "ru" },
    ko: { name: "Korean", flagCode: "kr", languageCode: "ko" },
    id: { name: "Indonesian", flagCode: "id", languageCode: "id" },
    it: { name: "Italian", flagCode: "it", languageCode: "it" },
    nl: { name: "Dutch", flagCode: "nl", languageCode: "nl" },
    tr: { name: "Turkish", flagCode: "tr", languageCode: "tr" },
    pl: { name: "Polish", flagCode: "pl", languageCode: "pl" },
    sv: { name: "Swedish", flagCode: "se", languageCode: "sv" },
    fil: { name: "Filipino", flagCode: "ph", languageCode: "fi" },
    ms: { name: "Malay", flagCode: "my", languageCode: "ms" },
    ro: { name: "Romanian", flagCode: "ro", languageCode: "ro" },
    uk: { name: "Ukrainian", flagCode: "ua", languageCode: "uk" },
    el: { name: "Greek", flagCode: "gr", languageCode: "el" },
    cs: { name: "Czech", flagCode: "cz", languageCode: "cs" },
    da: { name: "Danish", flagCode: "dk", languageCode: "da" },
    fi: { name: "Finnish", flagCode: "fi", languageCode: "fi" },
    bg: { name: "Bulgarian", flagCode: "bg", languageCode: "bg" },
    hr: { name: "Croatian", flagCode: "hr", languageCode: "hr" },
    sk: { name: "Slovak", flagCode: "sk", languageCode: "sk" },
    ta: { name: "Tamil", flagCode: "in", languageCode: "ta" },
    hu: { name: "Hungarian", flagCode: "hu", languageCode: "hu" },
    no: { name: "Norwegian", flagCode: "no", languageCode: "no" },
    vi: { name: "Vietnamese", flagCode: "vn", languageCode: "vi" },
  };
  function hr(e, [t, n]) {
    return Math.min(n, Math.max(t, e));
  }
  function ee(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
    return function (r) {
      if ((e == null || e(r), n === !1 || !r.defaultPrevented))
        return t == null ? void 0 : t(r);
    };
  }
  function _r(e, t = []) {
    let n = [];
    function o(i, s) {
      const a = De(s),
        l = n.length;
      n = [...n, s];
      function c(u) {
        const { scope: m, children: p, ...v } = u,
          f = (m == null ? void 0 : m[e][l]) || a,
          _ = Z(() => v, Object.values(v));
        return g(f.Provider, { value: _, children: p });
      }
      function d(u, m) {
        const p = (m == null ? void 0 : m[e][l]) || a,
          v = Ge(p);
        if (v) return v;
        if (s !== void 0) return s;
        throw new Error(`\`${u}\` must be used within \`${i}\``);
      }
      return (c.displayName = i + "Provider"), [c, d];
    }
    const r = () => {
      const i = n.map((s) => De(s));
      return function (a) {
        const l = (a == null ? void 0 : a[e]) || i;
        return Z(() => ({ [`__scope${e}`]: { ...a, [e]: l } }), [a, l]);
      };
    };
    return (r.scopeName = e), [o, Gs(r, ...t)];
  }
  function Gs(...e) {
    const t = e[0];
    if (e.length === 1) return t;
    const n = () => {
      const o = e.map((r) => ({ useScope: r(), scopeName: r.scopeName }));
      return function (i) {
        const s = o.reduce((a, { useScope: l, scopeName: c }) => {
          const u = l(i)[`__scope${c}`];
          return { ...a, ...u };
        }, {});
        return Z(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
      };
    };
    return (n.scopeName = t.scopeName), n;
  }
  function Xs(e, t) {
    typeof e == "function" ? e(t) : e != null && (e.current = t);
  }
  function mr(...e) {
    return (t) => e.forEach((n) => Xs(n, t));
  }
  function ie(...e) {
    return Y(mr(...e), e);
  }
  var ht = L((e, t) => {
    const { children: n, ...o } = e,
      r = Me.toArray(n),
      i = r.find(Js);
    if (i) {
      const s = i.props.children,
        a = r.map((l) =>
          l === i
            ? Me.count(s) > 1
              ? Me.only(null)
              : Pe(s)
              ? s.props.children
              : null
            : l
        );
      return g(Sn, { ...o, ref: t, children: Pe(s) ? pt(s, void 0, a) : null });
    }
    return g(Sn, { ...o, ref: t, children: n });
  });
  ht.displayName = "Slot";
  var Sn = L((e, t) => {
    const { children: n, ...o } = e;
    if (Pe(n)) {
      const r = ea(n);
      return pt(n, { ...Qs(o, n.props), ref: t ? mr(t, r) : r });
    }
    return Me.count(n) > 1 ? Me.only(null) : null;
  });
  Sn.displayName = "SlotClone";
  var Zs = ({ children: e }) => g(oe, { children: e });
  function Js(e) {
    return Pe(e) && e.type === Zs;
  }
  function Qs(e, t) {
    const n = { ...t };
    for (const o in t) {
      const r = e[o],
        i = t[o];
      /^on[A-Z]/.test(o)
        ? r && i
          ? (n[o] = (...a) => {
              i(...a), r(...a);
            })
          : r && (n[o] = r)
        : o === "style"
        ? (n[o] = { ...r, ...i })
        : o === "className" && (n[o] = [r, i].filter(Boolean).join(" "));
    }
    return { ...e, ...n };
  }
  function ea(e) {
    var o, r;
    let t =
        (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
          ? void 0
          : o.get,
      n = t && "isReactWarning" in t && t.isReactWarning;
    return n
      ? e.ref
      : ((t =
          (r = Object.getOwnPropertyDescriptor(e, "ref")) == null
            ? void 0
            : r.get),
        (n = t && "isReactWarning" in t && t.isReactWarning),
        n ? e.props.ref : e.props.ref || e.ref);
  }
  function ta(e) {
    const t = e + "CollectionProvider",
      [n, o] = _r(t),
      [r, i] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
      s = (p) => {
        const { scope: v, children: f } = p,
          _ = Ae.useRef(null),
          h = Ae.useRef(new Map()).current;
        return g(r, { scope: v, itemMap: h, collectionRef: _, children: f });
      };
    s.displayName = t;
    const a = e + "CollectionSlot",
      l = Ae.forwardRef((p, v) => {
        const { scope: f, children: _ } = p,
          h = i(a, f),
          y = ie(v, h.collectionRef);
        return g(ht, { ref: y, children: _ });
      });
    l.displayName = a;
    const c = e + "CollectionItemSlot",
      d = "data-radix-collection-item",
      u = Ae.forwardRef((p, v) => {
        const { scope: f, children: _, ...h } = p,
          y = Ae.useRef(null),
          b = ie(v, y),
          w = i(c, f);
        return (
          Ae.useEffect(
            () => (
              w.itemMap.set(y, { ref: y, ...h }), () => void w.itemMap.delete(y)
            )
          ),
          g(ht, { [d]: "", ref: b, children: _ })
        );
      });
    u.displayName = c;
    function m(p) {
      const v = i(e + "CollectionConsumer", p);
      return Ae.useCallback(() => {
        const _ = v.collectionRef.current;
        if (!_) return [];
        const h = Array.from(_.querySelectorAll(`[${d}]`));
        return Array.from(v.itemMap.values()).sort(
          (w, x) => h.indexOf(w.ref.current) - h.indexOf(x.ref.current)
        );
      }, [v.collectionRef, v.itemMap]);
    }
    return [{ Provider: s, Slot: l, ItemSlot: u }, m, o];
  }
  function na(e, t = []) {
    let n = [];
    function o(i, s) {
      const a = De(s),
        l = n.length;
      n = [...n, s];
      const c = (u) => {
        var h;
        const { scope: m, children: p, ...v } = u,
          f = ((h = m == null ? void 0 : m[e]) == null ? void 0 : h[l]) || a,
          _ = Z(() => v, Object.values(v));
        return g(f.Provider, { value: _, children: p });
      };
      c.displayName = i + "Provider";
      function d(u, m) {
        var f;
        const p =
            ((f = m == null ? void 0 : m[e]) == null ? void 0 : f[l]) || a,
          v = Ge(p);
        if (v) return v;
        if (s !== void 0) return s;
        throw new Error(`\`${u}\` must be used within \`${i}\``);
      }
      return [c, d];
    }
    const r = () => {
      const i = n.map((s) => De(s));
      return function (a) {
        const l = (a == null ? void 0 : a[e]) || i;
        return Z(() => ({ [`__scope${e}`]: { ...a, [e]: l } }), [a, l]);
      };
    };
    return (r.scopeName = e), [o, oa(r, ...t)];
  }
  function oa(...e) {
    const t = e[0];
    if (e.length === 1) return t;
    const n = () => {
      const o = e.map((r) => ({ useScope: r(), scopeName: r.scopeName }));
      return function (i) {
        const s = o.reduce((a, { useScope: l, scopeName: c }) => {
          const u = l(i)[`__scope${c}`];
          return { ...a, ...u };
        }, {});
        return Z(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
      };
    };
    return (n.scopeName = t.scopeName), n;
  }
  var ra = De(void 0);
  function ia(e) {
    const t = Ge(ra);
    return e || t || "ltr";
  }
  var sa = [
      "a",
      "button",
      "div",
      "form",
      "h2",
      "h3",
      "img",
      "input",
      "label",
      "li",
      "nav",
      "ol",
      "p",
      "span",
      "svg",
      "ul",
    ],
    te = sa.reduce((e, t) => {
      const n = L((o, r) => {
        const { asChild: i, ...s } = o,
          a = i ? ht : t;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          g(a, { ...s, ref: r })
        );
      });
      return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
    }, {});
  function aa(e, t) {
    e && Tt(() => e.dispatchEvent(t));
  }
  function ke(e) {
    const t = D(e);
    return (
      O(() => {
        t.current = e;
      }),
      Z(
        () =>
          (...n) => {
            var o;
            return (o = t.current) == null ? void 0 : o.call(t, ...n);
          },
        []
      )
    );
  }
  function la(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = ke(e);
    O(() => {
      const o = (r) => {
        r.key === "Escape" && n(r);
      };
      return (
        t.addEventListener("keydown", o, { capture: !0 }),
        () => t.removeEventListener("keydown", o, { capture: !0 })
      );
    }, [n, t]);
  }
  var ca = "DismissableLayer",
    En = "dismissableLayer.update",
    ua = "dismissableLayer.pointerDownOutside",
    da = "dismissableLayer.focusOutside",
    gr,
    vr = De({
      layers: new Set(),
      layersWithOutsidePointerEventsDisabled: new Set(),
      branches: new Set(),
    }),
    yr = L((e, t) => {
      const {
          disableOutsidePointerEvents: n = !1,
          onEscapeKeyDown: o,
          onPointerDownOutside: r,
          onFocusOutside: i,
          onInteractOutside: s,
          onDismiss: a,
          ...l
        } = e,
        c = Ge(vr),
        [d, u] = E(null),
        m =
          (d == null ? void 0 : d.ownerDocument) ??
          (globalThis == null ? void 0 : globalThis.document),
        [, p] = E({}),
        v = ie(t, (C) => u(C)),
        f = Array.from(c.layers),
        [_] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1),
        h = f.indexOf(_),
        y = d ? f.indexOf(d) : -1,
        b = c.layersWithOutsidePointerEventsDisabled.size > 0,
        w = y >= h,
        x = ha((C) => {
          const k = C.target,
            A = [...c.branches].some((B) => B.contains(k));
          !w ||
            A ||
            (r == null || r(C),
            s == null || s(C),
            C.defaultPrevented || a == null || a());
        }, m),
        P = _a((C) => {
          const k = C.target;
          [...c.branches].some((B) => B.contains(k)) ||
            (i == null || i(C),
            s == null || s(C),
            C.defaultPrevented || a == null || a());
        }, m);
      return (
        la((C) => {
          y === c.layers.size - 1 &&
            (o == null || o(C),
            !C.defaultPrevented && a && (C.preventDefault(), a()));
        }, m),
        O(() => {
          if (d)
            return (
              n &&
                (c.layersWithOutsidePointerEventsDisabled.size === 0 &&
                  ((gr = m.body.style.pointerEvents),
                  (m.body.style.pointerEvents = "none")),
                c.layersWithOutsidePointerEventsDisabled.add(d)),
              c.layers.add(d),
              br(),
              () => {
                n &&
                  c.layersWithOutsidePointerEventsDisabled.size === 1 &&
                  (m.body.style.pointerEvents = gr);
              }
            );
        }, [d, m, n, c]),
        O(
          () => () => {
            d &&
              (c.layers.delete(d),
              c.layersWithOutsidePointerEventsDisabled.delete(d),
              br());
          },
          [d, c]
        ),
        O(() => {
          const C = () => p({});
          return (
            document.addEventListener(En, C),
            () => document.removeEventListener(En, C)
          );
        }, []),
        g(te.div, {
          ...l,
          ref: v,
          style: {
            pointerEvents: b ? (w ? "auto" : "none") : void 0,
            ...e.style,
          },
          onFocusCapture: ee(e.onFocusCapture, P.onFocusCapture),
          onBlurCapture: ee(e.onBlurCapture, P.onBlurCapture),
          onPointerDownCapture: ee(
            e.onPointerDownCapture,
            x.onPointerDownCapture
          ),
        })
      );
    });
  yr.displayName = ca;
  var fa = "DismissableLayerBranch",
    pa = L((e, t) => {
      const n = Ge(vr),
        o = D(null),
        r = ie(t, o);
      return (
        O(() => {
          const i = o.current;
          if (i)
            return (
              n.branches.add(i),
              () => {
                n.branches.delete(i);
              }
            );
        }, [n.branches]),
        g(te.div, { ...e, ref: r })
      );
    });
  pa.displayName = fa;
  function ha(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = ke(e),
      o = D(!1),
      r = D(() => {});
    return (
      O(() => {
        const i = (a) => {
            if (a.target && !o.current) {
              let l = function () {
                wr(ua, n, c, { discrete: !0 });
              };
              const c = { originalEvent: a };
              a.pointerType === "touch"
                ? (t.removeEventListener("click", r.current),
                  (r.current = l),
                  t.addEventListener("click", r.current, { once: !0 }))
                : l();
            } else t.removeEventListener("click", r.current);
            o.current = !1;
          },
          s = window.setTimeout(() => {
            t.addEventListener("pointerdown", i);
          }, 0);
        return () => {
          window.clearTimeout(s),
            t.removeEventListener("pointerdown", i),
            t.removeEventListener("click", r.current);
        };
      }, [t, n]),
      { onPointerDownCapture: () => (o.current = !0) }
    );
  }
  function _a(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = ke(e),
      o = D(!1);
    return (
      O(() => {
        const r = (i) => {
          i.target &&
            !o.current &&
            wr(da, n, { originalEvent: i }, { discrete: !1 });
        };
        return (
          t.addEventListener("focusin", r),
          () => t.removeEventListener("focusin", r)
        );
      }, [t, n]),
      {
        onFocusCapture: () => (o.current = !0),
        onBlurCapture: () => (o.current = !1),
      }
    );
  }
  function br() {
    const e = new CustomEvent(En);
    document.dispatchEvent(e);
  }
  function wr(e, t, n, { discrete: o }) {
    const r = n.originalEvent.target,
      i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
    t && r.addEventListener(e, t, { once: !0 }),
      o ? aa(r, i) : r.dispatchEvent(i);
  }
  var Pn = 0;
  function ma() {
    O(() => {
      const e = document.querySelectorAll("[data-radix-focus-guard]");
      return (
        document.body.insertAdjacentElement("afterbegin", e[0] ?? xr()),
        document.body.insertAdjacentElement("beforeend", e[1] ?? xr()),
        Pn++,
        () => {
          Pn === 1 &&
            document
              .querySelectorAll("[data-radix-focus-guard]")
              .forEach((t) => t.remove()),
            Pn--;
        }
      );
    }, []);
  }
  function xr() {
    const e = document.createElement("span");
    return (
      e.setAttribute("data-radix-focus-guard", ""),
      (e.tabIndex = 0),
      (e.style.outline = "none"),
      (e.style.opacity = "0"),
      (e.style.position = "fixed"),
      (e.style.pointerEvents = "none"),
      e
    );
  }
  var An = "focusScope.autoFocusOnMount",
    kn = "focusScope.autoFocusOnUnmount",
    Cr = { bubbles: !1, cancelable: !0 },
    ga = "FocusScope",
    Sr = L((e, t) => {
      const {
          loop: n = !1,
          trapped: o = !1,
          onMountAutoFocus: r,
          onUnmountAutoFocus: i,
          ...s
        } = e,
        [a, l] = E(null),
        c = ke(r),
        d = ke(i),
        u = D(null),
        m = ie(t, (f) => l(f)),
        p = D({
          paused: !1,
          pause() {
            this.paused = !0;
          },
          resume() {
            this.paused = !1;
          },
        }).current;
      O(() => {
        if (o) {
          let f = function (b) {
              if (p.paused || !a) return;
              const w = b.target;
              a.contains(w) ? (u.current = w) : Fe(u.current, { select: !0 });
            },
            _ = function (b) {
              if (p.paused || !a) return;
              const w = b.relatedTarget;
              w !== null && (a.contains(w) || Fe(u.current, { select: !0 }));
            },
            h = function (b) {
              if (document.activeElement === document.body)
                for (const x of b) x.removedNodes.length > 0 && Fe(a);
            };
          document.addEventListener("focusin", f),
            document.addEventListener("focusout", _);
          const y = new MutationObserver(h);
          return (
            a && y.observe(a, { childList: !0, subtree: !0 }),
            () => {
              document.removeEventListener("focusin", f),
                document.removeEventListener("focusout", _),
                y.disconnect();
            }
          );
        }
      }, [o, a, p.paused]),
        O(() => {
          if (a) {
            Ar.add(p);
            const f = document.activeElement;
            if (!a.contains(f)) {
              const h = new CustomEvent(An, Cr);
              a.addEventListener(An, c),
                a.dispatchEvent(h),
                h.defaultPrevented ||
                  (va(Ca(Er(a)), { select: !0 }),
                  document.activeElement === f && Fe(a));
            }
            return () => {
              a.removeEventListener(An, c),
                setTimeout(() => {
                  const h = new CustomEvent(kn, Cr);
                  a.addEventListener(kn, d),
                    a.dispatchEvent(h),
                    h.defaultPrevented ||
                      Fe(f ?? document.body, { select: !0 }),
                    a.removeEventListener(kn, d),
                    Ar.remove(p);
                }, 0);
            };
          }
        }, [a, c, d, p]);
      const v = Y(
        (f) => {
          if ((!n && !o) || p.paused) return;
          const _ = f.key === "Tab" && !f.altKey && !f.ctrlKey && !f.metaKey,
            h = document.activeElement;
          if (_ && h) {
            const y = f.currentTarget,
              [b, w] = ya(y);
            b && w
              ? !f.shiftKey && h === w
                ? (f.preventDefault(), n && Fe(b, { select: !0 }))
                : f.shiftKey &&
                  h === b &&
                  (f.preventDefault(), n && Fe(w, { select: !0 }))
              : h === y && f.preventDefault();
          }
        },
        [n, o, p.paused]
      );
      return g(te.div, { tabIndex: -1, ...s, ref: m, onKeyDown: v });
    });
  Sr.displayName = ga;
  function va(e, { select: t = !1 } = {}) {
    const n = document.activeElement;
    for (const o of e)
      if ((Fe(o, { select: t }), document.activeElement !== n)) return;
  }
  function ya(e) {
    const t = Er(e),
      n = Pr(t, e),
      o = Pr(t.reverse(), e);
    return [n, o];
  }
  function Er(e) {
    const t = [],
      n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: (o) => {
          const r = o.tagName === "INPUT" && o.type === "hidden";
          return o.disabled || o.hidden || r
            ? NodeFilter.FILTER_SKIP
            : o.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
        },
      });
    for (; n.nextNode(); ) t.push(n.currentNode);
    return t;
  }
  function Pr(e, t) {
    for (const n of e) if (!ba(n, { upTo: t })) return n;
  }
  function ba(e, { upTo: t }) {
    if (getComputedStyle(e).visibility === "hidden") return !0;
    for (; e; ) {
      if (t !== void 0 && e === t) return !1;
      if (getComputedStyle(e).display === "none") return !0;
      e = e.parentElement;
    }
    return !1;
  }
  function wa(e) {
    return e instanceof HTMLInputElement && "select" in e;
  }
  function Fe(e, { select: t = !1 } = {}) {
    if (e && e.focus) {
      const n = document.activeElement;
      e.focus({ preventScroll: !0 }), e !== n && wa(e) && t && e.select();
    }
  }
  var Ar = xa();
  function xa() {
    let e = [];
    return {
      add(t) {
        const n = e[0];
        t !== n && (n == null || n.pause()), (e = kr(e, t)), e.unshift(t);
      },
      remove(t) {
        var n;
        (e = kr(e, t)), (n = e[0]) == null || n.resume();
      },
    };
  }
  function kr(e, t) {
    const n = [...e],
      o = n.indexOf(t);
    return o !== -1 && n.splice(o, 1), n;
  }
  function Ca(e) {
    return e.filter((t) => t.tagName !== "A");
  }
  var le = globalThis != null && globalThis.document ? Le : () => {},
    Sa = Ps.useId || (() => {}),
    Ea = 0;
  function In(e) {
    const [t, n] = E(Sa());
    return (
      le(() => {
        e || n((o) => o ?? String(Ea++));
      }, [e]),
      e || (t ? `radix-${t}` : "")
    );
  }
  const Pa = ["top", "right", "bottom", "left"],
    Be = Math.min,
    ce = Math.max,
    Nt = Math.round,
    Ot = Math.floor,
    qe = (e) => ({ x: e, y: e }),
    Aa = { left: "right", right: "left", bottom: "top", top: "bottom" },
    ka = { start: "end", end: "start" };
  function Tn(e, t, n) {
    return ce(e, Be(t, n));
  }
  function Ie(e, t) {
    return typeof e == "function" ? e(t) : e;
  }
  function Te(e) {
    return e.split("-")[0];
  }
  function tt(e) {
    return e.split("-")[1];
  }
  function Rn(e) {
    return e === "x" ? "y" : "x";
  }
  function Nn(e) {
    return e === "y" ? "height" : "width";
  }
  function $e(e) {
    return ["top", "bottom"].includes(Te(e)) ? "y" : "x";
  }
  function On(e) {
    return Rn($e(e));
  }
  function Ia(e, t, n) {
    n === void 0 && (n = !1);
    const o = tt(e),
      r = On(e),
      i = Nn(r);
    let s =
      r === "x"
        ? o === (n ? "end" : "start")
          ? "right"
          : "left"
        : o === "start"
        ? "bottom"
        : "top";
    return t.reference[i] > t.floating[i] && (s = Dt(s)), [s, Dt(s)];
  }
  function Ta(e) {
    const t = Dt(e);
    return [Dn(e), t, Dn(t)];
  }
  function Dn(e) {
    return e.replace(/start|end/g, (t) => ka[t]);
  }
  function Ra(e, t, n) {
    const o = ["left", "right"],
      r = ["right", "left"],
      i = ["top", "bottom"],
      s = ["bottom", "top"];
    switch (e) {
      case "top":
      case "bottom":
        return n ? (t ? r : o) : t ? o : r;
      case "left":
      case "right":
        return t ? i : s;
      default:
        return [];
    }
  }
  function Na(e, t, n, o) {
    const r = tt(e);
    let i = Ra(Te(e), n === "start", o);
    return (
      r && ((i = i.map((s) => s + "-" + r)), t && (i = i.concat(i.map(Dn)))), i
    );
  }
  function Dt(e) {
    return e.replace(/left|right|bottom|top/g, (t) => Aa[t]);
  }
  function Oa(e) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...e };
  }
  function Ir(e) {
    return typeof e != "number"
      ? Oa(e)
      : { top: e, right: e, bottom: e, left: e };
  }
  function Lt(e) {
    const { x: t, y: n, width: o, height: r } = e;
    return {
      width: o,
      height: r,
      top: n,
      left: t,
      right: t + o,
      bottom: n + r,
      x: t,
      y: n,
    };
  }
  function Tr(e, t, n) {
    let { reference: o, floating: r } = e;
    const i = $e(t),
      s = On(t),
      a = Nn(s),
      l = Te(t),
      c = i === "y",
      d = o.x + o.width / 2 - r.width / 2,
      u = o.y + o.height / 2 - r.height / 2,
      m = o[a] / 2 - r[a] / 2;
    let p;
    switch (l) {
      case "top":
        p = { x: d, y: o.y - r.height };
        break;
      case "bottom":
        p = { x: d, y: o.y + o.height };
        break;
      case "right":
        p = { x: o.x + o.width, y: u };
        break;
      case "left":
        p = { x: o.x - r.width, y: u };
        break;
      default:
        p = { x: o.x, y: o.y };
    }
    switch (tt(t)) {
      case "start":
        p[s] -= m * (n && c ? -1 : 1);
        break;
      case "end":
        p[s] += m * (n && c ? -1 : 1);
        break;
    }
    return p;
  }
  const Da = async (e, t, n) => {
    const {
        placement: o = "bottom",
        strategy: r = "absolute",
        middleware: i = [],
        platform: s,
      } = n,
      a = i.filter(Boolean),
      l = await (s.isRTL == null ? void 0 : s.isRTL(t));
    let c = await s.getElementRects({ reference: e, floating: t, strategy: r }),
      { x: d, y: u } = Tr(c, o, l),
      m = o,
      p = {},
      v = 0;
    for (let f = 0; f < a.length; f++) {
      const { name: _, fn: h } = a[f],
        {
          x: y,
          y: b,
          data: w,
          reset: x,
        } = await h({
          x: d,
          y: u,
          initialPlacement: o,
          placement: m,
          strategy: r,
          middlewareData: p,
          rects: c,
          platform: s,
          elements: { reference: e, floating: t },
        });
      (d = y ?? d),
        (u = b ?? u),
        (p = { ...p, [_]: { ...p[_], ...w } }),
        x &&
          v <= 50 &&
          (v++,
          typeof x == "object" &&
            (x.placement && (m = x.placement),
            x.rects &&
              (c =
                x.rects === !0
                  ? await s.getElementRects({
                      reference: e,
                      floating: t,
                      strategy: r,
                    })
                  : x.rects),
            ({ x: d, y: u } = Tr(c, m, l))),
          (f = -1));
    }
    return { x: d, y: u, placement: m, strategy: r, middlewareData: p };
  };
  async function _t(e, t) {
    var n;
    t === void 0 && (t = {});
    const { x: o, y: r, platform: i, rects: s, elements: a, strategy: l } = e,
      {
        boundary: c = "clippingAncestors",
        rootBoundary: d = "viewport",
        elementContext: u = "floating",
        altBoundary: m = !1,
        padding: p = 0,
      } = Ie(t, e),
      v = Ir(p),
      _ = a[m ? (u === "floating" ? "reference" : "floating") : u],
      h = Lt(
        await i.getClippingRect({
          element:
            (n = await (i.isElement == null ? void 0 : i.isElement(_))) ==
              null || n
              ? _
              : _.contextElement ||
                (await (i.getDocumentElement == null
                  ? void 0
                  : i.getDocumentElement(a.floating))),
          boundary: c,
          rootBoundary: d,
          strategy: l,
        })
      ),
      y =
        u === "floating"
          ? { x: o, y: r, width: s.floating.width, height: s.floating.height }
          : s.reference,
      b = await (i.getOffsetParent == null
        ? void 0
        : i.getOffsetParent(a.floating)),
      w = (await (i.isElement == null ? void 0 : i.isElement(b)))
        ? (await (i.getScale == null ? void 0 : i.getScale(b))) || {
            x: 1,
            y: 1,
          }
        : { x: 1, y: 1 },
      x = Lt(
        i.convertOffsetParentRelativeRectToViewportRelativeRect
          ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
              elements: a,
              rect: y,
              offsetParent: b,
              strategy: l,
            })
          : y
      );
    return {
      top: (h.top - x.top + v.top) / w.y,
      bottom: (x.bottom - h.bottom + v.bottom) / w.y,
      left: (h.left - x.left + v.left) / w.x,
      right: (x.right - h.right + v.right) / w.x,
    };
  }
  const La = (e) => ({
      name: "arrow",
      options: e,
      async fn(t) {
        const {
            x: n,
            y: o,
            placement: r,
            rects: i,
            platform: s,
            elements: a,
            middlewareData: l,
          } = t,
          { element: c, padding: d = 0 } = Ie(e, t) || {};
        if (c == null) return {};
        const u = Ir(d),
          m = { x: n, y: o },
          p = On(r),
          v = Nn(p),
          f = await s.getDimensions(c),
          _ = p === "y",
          h = _ ? "top" : "left",
          y = _ ? "bottom" : "right",
          b = _ ? "clientHeight" : "clientWidth",
          w = i.reference[v] + i.reference[p] - m[p] - i.floating[v],
          x = m[p] - i.reference[p],
          P = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
        let C = P ? P[b] : 0;
        (!C || !(await (s.isElement == null ? void 0 : s.isElement(P)))) &&
          (C = a.floating[b] || i.floating[v]);
        const k = w / 2 - x / 2,
          A = C / 2 - f[v] / 2 - 1,
          B = Be(u[h], A),
          G = Be(u[y], A),
          z = B,
          U = C - f[v] - G,
          W = C / 2 - f[v] / 2 + k,
          V = Tn(z, W, U),
          q =
            !l.arrow &&
            tt(r) != null &&
            W !== V &&
            i.reference[v] / 2 - (W < z ? B : G) - f[v] / 2 < 0,
          M = q ? (W < z ? W - z : W - U) : 0;
        return {
          [p]: m[p] + M,
          data: {
            [p]: V,
            centerOffset: W - V - M,
            ...(q && { alignmentOffset: M }),
          },
          reset: q,
        };
      },
    }),
    Ma = function (e) {
      return (
        e === void 0 && (e = {}),
        {
          name: "flip",
          options: e,
          async fn(t) {
            var n, o;
            const {
                placement: r,
                middlewareData: i,
                rects: s,
                initialPlacement: a,
                platform: l,
                elements: c,
              } = t,
              {
                mainAxis: d = !0,
                crossAxis: u = !0,
                fallbackPlacements: m,
                fallbackStrategy: p = "bestFit",
                fallbackAxisSideDirection: v = "none",
                flipAlignment: f = !0,
                ..._
              } = Ie(e, t);
            if ((n = i.arrow) != null && n.alignmentOffset) return {};
            const h = Te(r),
              y = $e(a),
              b = Te(a) === a,
              w = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)),
              x = m || (b || !f ? [Dt(a)] : Ta(a)),
              P = v !== "none";
            !m && P && x.push(...Na(a, f, v, w));
            const C = [a, ...x],
              k = await _t(t, _),
              A = [];
            let B = ((o = i.flip) == null ? void 0 : o.overflows) || [];
            if ((d && A.push(k[h]), u)) {
              const W = Ia(r, s, w);
              A.push(k[W[0]], k[W[1]]);
            }
            if (
              ((B = [...B, { placement: r, overflows: A }]),
              !A.every((W) => W <= 0))
            ) {
              var G, z;
              const W = (((G = i.flip) == null ? void 0 : G.index) || 0) + 1,
                V = C[W];
              if (V)
                return {
                  data: { index: W, overflows: B },
                  reset: { placement: V },
                };
              let q =
                (z = B.filter((M) => M.overflows[0] <= 0).sort(
                  (M, N) => M.overflows[1] - N.overflows[1]
                )[0]) == null
                  ? void 0
                  : z.placement;
              if (!q)
                switch (p) {
                  case "bestFit": {
                    var U;
                    const M =
                      (U = B.filter((N) => {
                        if (P) {
                          const j = $e(N.placement);
                          return j === y || j === "y";
                        }
                        return !0;
                      })
                        .map((N) => [
                          N.placement,
                          N.overflows
                            .filter((j) => j > 0)
                            .reduce((j, ne) => j + ne, 0),
                        ])
                        .sort((N, j) => N[1] - j[1])[0]) == null
                        ? void 0
                        : U[0];
                    M && (q = M);
                    break;
                  }
                  case "initialPlacement":
                    q = a;
                    break;
                }
              if (r !== q) return { reset: { placement: q } };
            }
            return {};
          },
        }
      );
    };
  function Rr(e, t) {
    return {
      top: e.top - t.height,
      right: e.right - t.width,
      bottom: e.bottom - t.height,
      left: e.left - t.width,
    };
  }
  function Nr(e) {
    return Pa.some((t) => e[t] >= 0);
  }
  const Fa = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "hide",
        options: e,
        async fn(t) {
          const { rects: n } = t,
            { strategy: o = "referenceHidden", ...r } = Ie(e, t);
          switch (o) {
            case "referenceHidden": {
              const i = await _t(t, { ...r, elementContext: "reference" }),
                s = Rr(i, n.reference);
              return {
                data: { referenceHiddenOffsets: s, referenceHidden: Nr(s) },
              };
            }
            case "escaped": {
              const i = await _t(t, { ...r, altBoundary: !0 }),
                s = Rr(i, n.floating);
              return { data: { escapedOffsets: s, escaped: Nr(s) } };
            }
            default:
              return {};
          }
        },
      }
    );
  };
  async function Ba(e, t) {
    const { placement: n, platform: o, elements: r } = e,
      i = await (o.isRTL == null ? void 0 : o.isRTL(r.floating)),
      s = Te(n),
      a = tt(n),
      l = $e(n) === "y",
      c = ["left", "top"].includes(s) ? -1 : 1,
      d = i && l ? -1 : 1,
      u = Ie(t, e);
    let {
      mainAxis: m,
      crossAxis: p,
      alignmentAxis: v,
    } = typeof u == "number"
      ? { mainAxis: u, crossAxis: 0, alignmentAxis: null }
      : {
          mainAxis: u.mainAxis || 0,
          crossAxis: u.crossAxis || 0,
          alignmentAxis: u.alignmentAxis,
        };
    return (
      a && typeof v == "number" && (p = a === "end" ? v * -1 : v),
      l ? { x: p * d, y: m * c } : { x: m * c, y: p * d }
    );
  }
  const qa = function (e) {
      return (
        e === void 0 && (e = 0),
        {
          name: "offset",
          options: e,
          async fn(t) {
            var n, o;
            const { x: r, y: i, placement: s, middlewareData: a } = t,
              l = await Ba(t, e);
            return s === ((n = a.offset) == null ? void 0 : n.placement) &&
              (o = a.arrow) != null &&
              o.alignmentOffset
              ? {}
              : { x: r + l.x, y: i + l.y, data: { ...l, placement: s } };
          },
        }
      );
    },
    $a = function (e) {
      return (
        e === void 0 && (e = {}),
        {
          name: "shift",
          options: e,
          async fn(t) {
            const { x: n, y: o, placement: r } = t,
              {
                mainAxis: i = !0,
                crossAxis: s = !1,
                limiter: a = {
                  fn: (_) => {
                    let { x: h, y } = _;
                    return { x: h, y };
                  },
                },
                ...l
              } = Ie(e, t),
              c = { x: n, y: o },
              d = await _t(t, l),
              u = $e(Te(r)),
              m = Rn(u);
            let p = c[m],
              v = c[u];
            if (i) {
              const _ = m === "y" ? "top" : "left",
                h = m === "y" ? "bottom" : "right",
                y = p + d[_],
                b = p - d[h];
              p = Tn(y, p, b);
            }
            if (s) {
              const _ = u === "y" ? "top" : "left",
                h = u === "y" ? "bottom" : "right",
                y = v + d[_],
                b = v - d[h];
              v = Tn(y, v, b);
            }
            const f = a.fn({ ...t, [m]: p, [u]: v });
            return {
              ...f,
              data: { x: f.x - n, y: f.y - o, enabled: { [m]: i, [u]: s } },
            };
          },
        }
      );
    },
    Wa = function (e) {
      return (
        e === void 0 && (e = {}),
        {
          options: e,
          fn(t) {
            const { x: n, y: o, placement: r, rects: i, middlewareData: s } = t,
              { offset: a = 0, mainAxis: l = !0, crossAxis: c = !0 } = Ie(e, t),
              d = { x: n, y: o },
              u = $e(r),
              m = Rn(u);
            let p = d[m],
              v = d[u];
            const f = Ie(a, t),
              _ =
                typeof f == "number"
                  ? { mainAxis: f, crossAxis: 0 }
                  : { mainAxis: 0, crossAxis: 0, ...f };
            if (l) {
              const b = m === "y" ? "height" : "width",
                w = i.reference[m] - i.floating[b] + _.mainAxis,
                x = i.reference[m] + i.reference[b] - _.mainAxis;
              p < w ? (p = w) : p > x && (p = x);
            }
            if (c) {
              var h, y;
              const b = m === "y" ? "width" : "height",
                w = ["top", "left"].includes(Te(r)),
                x =
                  i.reference[u] -
                  i.floating[b] +
                  ((w && ((h = s.offset) == null ? void 0 : h[u])) || 0) +
                  (w ? 0 : _.crossAxis),
                P =
                  i.reference[u] +
                  i.reference[b] +
                  (w ? 0 : ((y = s.offset) == null ? void 0 : y[u]) || 0) -
                  (w ? _.crossAxis : 0);
              v < x ? (v = x) : v > P && (v = P);
            }
            return { [m]: p, [u]: v };
          },
        }
      );
    },
    Va = function (e) {
      return (
        e === void 0 && (e = {}),
        {
          name: "size",
          options: e,
          async fn(t) {
            var n, o;
            const { placement: r, rects: i, platform: s, elements: a } = t,
              { apply: l = () => {}, ...c } = Ie(e, t),
              d = await _t(t, c),
              u = Te(r),
              m = tt(r),
              p = $e(r) === "y",
              { width: v, height: f } = i.floating;
            let _, h;
            u === "top" || u === "bottom"
              ? ((_ = u),
                (h =
                  m ===
                  ((await (s.isRTL == null ? void 0 : s.isRTL(a.floating)))
                    ? "start"
                    : "end")
                    ? "left"
                    : "right"))
              : ((h = u), (_ = m === "end" ? "top" : "bottom"));
            const y = f - d.top - d.bottom,
              b = v - d.left - d.right,
              w = Be(f - d[_], y),
              x = Be(v - d[h], b),
              P = !t.middlewareData.shift;
            let C = w,
              k = x;
            if (
              ((n = t.middlewareData.shift) != null && n.enabled.x && (k = b),
              (o = t.middlewareData.shift) != null && o.enabled.y && (C = y),
              P && !m)
            ) {
              const B = ce(d.left, 0),
                G = ce(d.right, 0),
                z = ce(d.top, 0),
                U = ce(d.bottom, 0);
              p
                ? (k =
                    v - 2 * (B !== 0 || G !== 0 ? B + G : ce(d.left, d.right)))
                : (C =
                    f - 2 * (z !== 0 || U !== 0 ? z + U : ce(d.top, d.bottom)));
            }
            await l({ ...t, availableWidth: k, availableHeight: C });
            const A = await s.getDimensions(a.floating);
            return v !== A.width || f !== A.height
              ? { reset: { rects: !0 } }
              : {};
          },
        }
      );
    };
  function Mt() {
    return typeof window < "u";
  }
  function nt(e) {
    return Or(e) ? (e.nodeName || "").toLowerCase() : "#document";
  }
  function ue(e) {
    var t;
    return (
      (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
      window
    );
  }
  function ye(e) {
    var t;
    return (t = (Or(e) ? e.ownerDocument : e.document) || window.document) ==
      null
      ? void 0
      : t.documentElement;
  }
  function Or(e) {
    return Mt() ? e instanceof Node || e instanceof ue(e).Node : !1;
  }
  function he(e) {
    return Mt() ? e instanceof Element || e instanceof ue(e).Element : !1;
  }
  function be(e) {
    return Mt()
      ? e instanceof HTMLElement || e instanceof ue(e).HTMLElement
      : !1;
  }
  function Dr(e) {
    return !Mt() || typeof ShadowRoot > "u"
      ? !1
      : e instanceof ShadowRoot || e instanceof ue(e).ShadowRoot;
  }
  function mt(e) {
    const { overflow: t, overflowX: n, overflowY: o, display: r } = _e(e);
    return (
      /auto|scroll|overlay|hidden|clip/.test(t + o + n) &&
      !["inline", "contents"].includes(r)
    );
  }
  function Ha(e) {
    return ["table", "td", "th"].includes(nt(e));
  }
  function Ft(e) {
    return [":popover-open", ":modal"].some((t) => {
      try {
        return e.matches(t);
      } catch {
        return !1;
      }
    });
  }
  function Ln(e) {
    const t = Mn(),
      n = he(e) ? _e(e) : e;
    return (
      n.transform !== "none" ||
      n.perspective !== "none" ||
      (n.containerType ? n.containerType !== "normal" : !1) ||
      (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
      (!t && (n.filter ? n.filter !== "none" : !1)) ||
      ["transform", "perspective", "filter"].some((o) =>
        (n.willChange || "").includes(o)
      ) ||
      ["paint", "layout", "strict", "content"].some((o) =>
        (n.contain || "").includes(o)
      )
    );
  }
  function Ua(e) {
    let t = We(e);
    for (; be(t) && !ot(t); ) {
      if (Ln(t)) return t;
      if (Ft(t)) return null;
      t = We(t);
    }
    return null;
  }
  function Mn() {
    return typeof CSS > "u" || !CSS.supports
      ? !1
      : CSS.supports("-webkit-backdrop-filter", "none");
  }
  function ot(e) {
    return ["html", "body", "#document"].includes(nt(e));
  }
  function _e(e) {
    return ue(e).getComputedStyle(e);
  }
  function Bt(e) {
    return he(e)
      ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
      : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
  }
  function We(e) {
    if (nt(e) === "html") return e;
    const t = e.assignedSlot || e.parentNode || (Dr(e) && e.host) || ye(e);
    return Dr(t) ? t.host : t;
  }
  function Lr(e) {
    const t = We(e);
    return ot(t)
      ? e.ownerDocument
        ? e.ownerDocument.body
        : e.body
      : be(t) && mt(t)
      ? t
      : Lr(t);
  }
  function gt(e, t, n) {
    var o;
    t === void 0 && (t = []), n === void 0 && (n = !0);
    const r = Lr(e),
      i = r === ((o = e.ownerDocument) == null ? void 0 : o.body),
      s = ue(r);
    if (i) {
      const a = Fn(s);
      return t.concat(
        s,
        s.visualViewport || [],
        mt(r) ? r : [],
        a && n ? gt(a) : []
      );
    }
    return t.concat(r, gt(r, [], n));
  }
  function Fn(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
  }
  function Mr(e) {
    const t = _e(e);
    let n = parseFloat(t.width) || 0,
      o = parseFloat(t.height) || 0;
    const r = be(e),
      i = r ? e.offsetWidth : n,
      s = r ? e.offsetHeight : o,
      a = Nt(n) !== i || Nt(o) !== s;
    return a && ((n = i), (o = s)), { width: n, height: o, $: a };
  }
  function Bn(e) {
    return he(e) ? e : e.contextElement;
  }
  function rt(e) {
    const t = Bn(e);
    if (!be(t)) return qe(1);
    const n = t.getBoundingClientRect(),
      { width: o, height: r, $: i } = Mr(t);
    let s = (i ? Nt(n.width) : n.width) / o,
      a = (i ? Nt(n.height) : n.height) / r;
    return (
      (!s || !Number.isFinite(s)) && (s = 1),
      (!a || !Number.isFinite(a)) && (a = 1),
      { x: s, y: a }
    );
  }
  const za = qe(0);
  function Fr(e) {
    const t = ue(e);
    return !Mn() || !t.visualViewport
      ? za
      : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
  }
  function ja(e, t, n) {
    return t === void 0 && (t = !1), !n || (t && n !== ue(e)) ? !1 : t;
  }
  function Xe(e, t, n, o) {
    t === void 0 && (t = !1), n === void 0 && (n = !1);
    const r = e.getBoundingClientRect(),
      i = Bn(e);
    let s = qe(1);
    t && (o ? he(o) && (s = rt(o)) : (s = rt(e)));
    const a = ja(i, n, o) ? Fr(i) : qe(0);
    let l = (r.left + a.x) / s.x,
      c = (r.top + a.y) / s.y,
      d = r.width / s.x,
      u = r.height / s.y;
    if (i) {
      const m = ue(i),
        p = o && he(o) ? ue(o) : o;
      let v = m,
        f = Fn(v);
      for (; f && o && p !== v; ) {
        const _ = rt(f),
          h = f.getBoundingClientRect(),
          y = _e(f),
          b = h.left + (f.clientLeft + parseFloat(y.paddingLeft)) * _.x,
          w = h.top + (f.clientTop + parseFloat(y.paddingTop)) * _.y;
        (l *= _.x),
          (c *= _.y),
          (d *= _.x),
          (u *= _.y),
          (l += b),
          (c += w),
          (v = ue(f)),
          (f = Fn(v));
      }
    }
    return Lt({ width: d, height: u, x: l, y: c });
  }
  function Ka(e) {
    let { elements: t, rect: n, offsetParent: o, strategy: r } = e;
    const i = r === "fixed",
      s = ye(o),
      a = t ? Ft(t.floating) : !1;
    if (o === s || (a && i)) return n;
    let l = { scrollLeft: 0, scrollTop: 0 },
      c = qe(1);
    const d = qe(0),
      u = be(o);
    if (
      (u || (!u && !i)) &&
      ((nt(o) !== "body" || mt(s)) && (l = Bt(o)), be(o))
    ) {
      const m = Xe(o);
      (c = rt(o)), (d.x = m.x + o.clientLeft), (d.y = m.y + o.clientTop);
    }
    return {
      width: n.width * c.x,
      height: n.height * c.y,
      x: n.x * c.x - l.scrollLeft * c.x + d.x,
      y: n.y * c.y - l.scrollTop * c.y + d.y,
    };
  }
  function Ya(e) {
    return Array.from(e.getClientRects());
  }
  function qn(e, t) {
    const n = Bt(e).scrollLeft;
    return t ? t.left + n : Xe(ye(e)).left + n;
  }
  function Ga(e) {
    const t = ye(e),
      n = Bt(e),
      o = e.ownerDocument.body,
      r = ce(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth),
      i = ce(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
    let s = -n.scrollLeft + qn(e);
    const a = -n.scrollTop;
    return (
      _e(o).direction === "rtl" && (s += ce(t.clientWidth, o.clientWidth) - r),
      { width: r, height: i, x: s, y: a }
    );
  }
  function Xa(e, t) {
    const n = ue(e),
      o = ye(e),
      r = n.visualViewport;
    let i = o.clientWidth,
      s = o.clientHeight,
      a = 0,
      l = 0;
    if (r) {
      (i = r.width), (s = r.height);
      const c = Mn();
      (!c || (c && t === "fixed")) && ((a = r.offsetLeft), (l = r.offsetTop));
    }
    return { width: i, height: s, x: a, y: l };
  }
  function Za(e, t) {
    const n = Xe(e, !0, t === "fixed"),
      o = n.top + e.clientTop,
      r = n.left + e.clientLeft,
      i = be(e) ? rt(e) : qe(1),
      s = e.clientWidth * i.x,
      a = e.clientHeight * i.y,
      l = r * i.x,
      c = o * i.y;
    return { width: s, height: a, x: l, y: c };
  }
  function Br(e, t, n) {
    let o;
    if (t === "viewport") o = Xa(e, n);
    else if (t === "document") o = Ga(ye(e));
    else if (he(t)) o = Za(t, n);
    else {
      const r = Fr(e);
      o = { ...t, x: t.x - r.x, y: t.y - r.y };
    }
    return Lt(o);
  }
  function qr(e, t) {
    const n = We(e);
    return n === t || !he(n) || ot(n)
      ? !1
      : _e(n).position === "fixed" || qr(n, t);
  }
  function Ja(e, t) {
    const n = t.get(e);
    if (n) return n;
    let o = gt(e, [], !1).filter((a) => he(a) && nt(a) !== "body"),
      r = null;
    const i = _e(e).position === "fixed";
    let s = i ? We(e) : e;
    for (; he(s) && !ot(s); ) {
      const a = _e(s),
        l = Ln(s);
      !l && a.position === "fixed" && (r = null),
        (
          i
            ? !l && !r
            : (!l &&
                a.position === "static" &&
                !!r &&
                ["absolute", "fixed"].includes(r.position)) ||
              (mt(s) && !l && qr(e, s))
        )
          ? (o = o.filter((d) => d !== s))
          : (r = a),
        (s = We(s));
    }
    return t.set(e, o), o;
  }
  function Qa(e) {
    let { element: t, boundary: n, rootBoundary: o, strategy: r } = e;
    const s = [
        ...(n === "clippingAncestors"
          ? Ft(t)
            ? []
            : Ja(t, this._c)
          : [].concat(n)),
        o,
      ],
      a = s[0],
      l = s.reduce((c, d) => {
        const u = Br(t, d, r);
        return (
          (c.top = ce(u.top, c.top)),
          (c.right = Be(u.right, c.right)),
          (c.bottom = Be(u.bottom, c.bottom)),
          (c.left = ce(u.left, c.left)),
          c
        );
      }, Br(t, a, r));
    return {
      width: l.right - l.left,
      height: l.bottom - l.top,
      x: l.left,
      y: l.top,
    };
  }
  function el(e) {
    const { width: t, height: n } = Mr(e);
    return { width: t, height: n };
  }
  function tl(e, t, n) {
    const o = be(t),
      r = ye(t),
      i = n === "fixed",
      s = Xe(e, !0, i, t);
    let a = { scrollLeft: 0, scrollTop: 0 };
    const l = qe(0);
    if (o || (!o && !i))
      if (((nt(t) !== "body" || mt(r)) && (a = Bt(t)), o)) {
        const p = Xe(t, !0, i, t);
        (l.x = p.x + t.clientLeft), (l.y = p.y + t.clientTop);
      } else r && (l.x = qn(r));
    let c = 0,
      d = 0;
    if (r && !o && !i) {
      const p = r.getBoundingClientRect();
      (d = p.top + a.scrollTop), (c = p.left + a.scrollLeft - qn(r, p));
    }
    const u = s.left + a.scrollLeft - l.x - c,
      m = s.top + a.scrollTop - l.y - d;
    return { x: u, y: m, width: s.width, height: s.height };
  }
  function $n(e) {
    return _e(e).position === "static";
  }
  function $r(e, t) {
    if (!be(e) || _e(e).position === "fixed") return null;
    if (t) return t(e);
    let n = e.offsetParent;
    return ye(e) === n && (n = n.ownerDocument.body), n;
  }
  function Wr(e, t) {
    const n = ue(e);
    if (Ft(e)) return n;
    if (!be(e)) {
      let r = We(e);
      for (; r && !ot(r); ) {
        if (he(r) && !$n(r)) return r;
        r = We(r);
      }
      return n;
    }
    let o = $r(e, t);
    for (; o && Ha(o) && $n(o); ) o = $r(o, t);
    return o && ot(o) && $n(o) && !Ln(o) ? n : o || Ua(e) || n;
  }
  const nl = async function (e) {
    const t = this.getOffsetParent || Wr,
      n = this.getDimensions,
      o = await n(e.floating);
    return {
      reference: tl(e.reference, await t(e.floating), e.strategy),
      floating: { x: 0, y: 0, width: o.width, height: o.height },
    };
  };
  function ol(e) {
    return _e(e).direction === "rtl";
  }
  const rl = {
    convertOffsetParentRelativeRectToViewportRelativeRect: Ka,
    getDocumentElement: ye,
    getClippingRect: Qa,
    getOffsetParent: Wr,
    getElementRects: nl,
    getClientRects: Ya,
    getDimensions: el,
    getScale: rt,
    isElement: he,
    isRTL: ol,
  };
  function il(e, t) {
    let n = null,
      o;
    const r = ye(e);
    function i() {
      var a;
      clearTimeout(o), (a = n) == null || a.disconnect(), (n = null);
    }
    function s(a, l) {
      a === void 0 && (a = !1), l === void 0 && (l = 1), i();
      const {
        left: c,
        top: d,
        width: u,
        height: m,
      } = e.getBoundingClientRect();
      if ((a || t(), !u || !m)) return;
      const p = Ot(d),
        v = Ot(r.clientWidth - (c + u)),
        f = Ot(r.clientHeight - (d + m)),
        _ = Ot(c),
        y = {
          rootMargin: -p + "px " + -v + "px " + -f + "px " + -_ + "px",
          threshold: ce(0, Be(1, l)) || 1,
        };
      let b = !0;
      function w(x) {
        const P = x[0].intersectionRatio;
        if (P !== l) {
          if (!b) return s();
          P
            ? s(!1, P)
            : (o = setTimeout(() => {
                s(!1, 1e-7);
              }, 1e3));
        }
        b = !1;
      }
      try {
        n = new IntersectionObserver(w, { ...y, root: r.ownerDocument });
      } catch {
        n = new IntersectionObserver(w, y);
      }
      n.observe(e);
    }
    return s(!0), i;
  }
  function sl(e, t, n, o) {
    o === void 0 && (o = {});
    const {
        ancestorScroll: r = !0,
        ancestorResize: i = !0,
        elementResize: s = typeof ResizeObserver == "function",
        layoutShift: a = typeof IntersectionObserver == "function",
        animationFrame: l = !1,
      } = o,
      c = Bn(e),
      d = r || i ? [...(c ? gt(c) : []), ...gt(t)] : [];
    d.forEach((h) => {
      r && h.addEventListener("scroll", n, { passive: !0 }),
        i && h.addEventListener("resize", n);
    });
    const u = c && a ? il(c, n) : null;
    let m = -1,
      p = null;
    s &&
      ((p = new ResizeObserver((h) => {
        let [y] = h;
        y &&
          y.target === c &&
          p &&
          (p.unobserve(t),
          cancelAnimationFrame(m),
          (m = requestAnimationFrame(() => {
            var b;
            (b = p) == null || b.observe(t);
          }))),
          n();
      })),
      c && !l && p.observe(c),
      p.observe(t));
    let v,
      f = l ? Xe(e) : null;
    l && _();
    function _() {
      const h = Xe(e);
      f &&
        (h.x !== f.x ||
          h.y !== f.y ||
          h.width !== f.width ||
          h.height !== f.height) &&
        n(),
        (f = h),
        (v = requestAnimationFrame(_));
    }
    return (
      n(),
      () => {
        var h;
        d.forEach((y) => {
          r && y.removeEventListener("scroll", n),
            i && y.removeEventListener("resize", n);
        }),
          u == null || u(),
          (h = p) == null || h.disconnect(),
          (p = null),
          l && cancelAnimationFrame(v);
      }
    );
  }
  const al = qa,
    ll = $a,
    cl = Ma,
    ul = Va,
    dl = Fa,
    Vr = La,
    fl = Wa,
    pl = (e, t, n) => {
      const o = new Map(),
        r = { platform: rl, ...n },
        i = { ...r.platform, _c: o };
      return Da(e, t, { ...r, platform: i });
    };
  var qt = typeof document < "u" ? Le : O;
  function $t(e, t) {
    if (e === t) return !0;
    if (typeof e != typeof t) return !1;
    if (typeof e == "function" && e.toString() === t.toString()) return !0;
    let n, o, r;
    if (e && t && typeof e == "object") {
      if (Array.isArray(e)) {
        if (((n = e.length), n !== t.length)) return !1;
        for (o = n; o-- !== 0; ) if (!$t(e[o], t[o])) return !1;
        return !0;
      }
      if (((r = Object.keys(e)), (n = r.length), n !== Object.keys(t).length))
        return !1;
      for (o = n; o-- !== 0; ) if (!{}.hasOwnProperty.call(t, r[o])) return !1;
      for (o = n; o-- !== 0; ) {
        const i = r[o];
        if (!(i === "_owner" && e.$$typeof) && !$t(e[i], t[i])) return !1;
      }
      return !0;
    }
    return e !== e && t !== t;
  }
  function Hr(e) {
    return typeof window > "u"
      ? 1
      : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
  }
  function Ur(e, t) {
    const n = Hr(e);
    return Math.round(t * n) / n;
  }
  function Wn(e) {
    const t = D(e);
    return (
      qt(() => {
        t.current = e;
      }),
      t
    );
  }
  function hl(e) {
    e === void 0 && (e = {});
    const {
        placement: t = "bottom",
        strategy: n = "absolute",
        middleware: o = [],
        platform: r,
        elements: { reference: i, floating: s } = {},
        transform: a = !0,
        whileElementsMounted: l,
        open: c,
      } = e,
      [d, u] = E({
        x: 0,
        y: 0,
        strategy: n,
        placement: t,
        middlewareData: {},
        isPositioned: !1,
      }),
      [m, p] = E(o);
    $t(m, o) || p(o);
    const [v, f] = E(null),
      [_, h] = E(null),
      y = Y((N) => {
        N !== P.current && ((P.current = N), f(N));
      }, []),
      b = Y((N) => {
        N !== C.current && ((C.current = N), h(N));
      }, []),
      w = i || v,
      x = s || _,
      P = D(null),
      C = D(null),
      k = D(d),
      A = l != null,
      B = Wn(l),
      G = Wn(r),
      z = Wn(c),
      U = Y(() => {
        if (!P.current || !C.current) return;
        const N = { placement: t, strategy: n, middleware: m };
        G.current && (N.platform = G.current),
          pl(P.current, C.current, N).then((j) => {
            const ne = { ...j, isPositioned: z.current !== !1 };
            W.current &&
              !$t(k.current, ne) &&
              ((k.current = ne),
              Tt(() => {
                u(ne);
              }));
          });
      }, [m, t, n, G, z]);
    qt(() => {
      c === !1 &&
        k.current.isPositioned &&
        ((k.current.isPositioned = !1), u((N) => ({ ...N, isPositioned: !1 })));
    }, [c]);
    const W = D(!1);
    qt(
      () => (
        (W.current = !0),
        () => {
          W.current = !1;
        }
      ),
      []
    ),
      qt(() => {
        if ((w && (P.current = w), x && (C.current = x), w && x)) {
          if (B.current) return B.current(w, x, U);
          U();
        }
      }, [w, x, U, B, A]);
    const V = Z(
        () => ({ reference: P, floating: C, setReference: y, setFloating: b }),
        [y, b]
      ),
      q = Z(() => ({ reference: w, floating: x }), [w, x]),
      M = Z(() => {
        const N = { position: n, left: 0, top: 0 };
        if (!q.floating) return N;
        const j = Ur(q.floating, d.x),
          ne = Ur(q.floating, d.y);
        return a
          ? {
              ...N,
              transform: "translate(" + j + "px, " + ne + "px)",
              ...(Hr(q.floating) >= 1.5 && { willChange: "transform" }),
            }
          : { position: n, left: j, top: ne };
      }, [n, a, q.floating, d.x, d.y]);
    return Z(
      () => ({ ...d, update: U, refs: V, elements: q, floatingStyles: M }),
      [d, U, V, q, M]
    );
  }
  const _l = (e) => {
      function t(n) {
        return {}.hasOwnProperty.call(n, "current");
      }
      return {
        name: "arrow",
        options: e,
        fn(n) {
          const { element: o, padding: r } = typeof e == "function" ? e(n) : e;
          return o && t(o)
            ? o.current != null
              ? Vr({ element: o.current, padding: r }).fn(n)
              : {}
            : o
            ? Vr({ element: o, padding: r }).fn(n)
            : {};
        },
      };
    },
    ml = (e, t) => ({ ...al(e), options: [e, t] }),
    gl = (e, t) => ({ ...ll(e), options: [e, t] }),
    vl = (e, t) => ({ ...fl(e), options: [e, t] }),
    yl = (e, t) => ({ ...cl(e), options: [e, t] }),
    bl = (e, t) => ({ ...ul(e), options: [e, t] }),
    wl = (e, t) => ({ ...dl(e), options: [e, t] }),
    xl = (e, t) => ({ ..._l(e), options: [e, t] });
  var Cl = "Arrow",
    zr = L((e, t) => {
      const { children: n, width: o = 10, height: r = 5, ...i } = e;
      return g(te.svg, {
        ...i,
        ref: t,
        width: o,
        height: r,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: e.asChild ? n : g("polygon", { points: "0,0 30,0 15,10" }),
      });
    });
  zr.displayName = Cl;
  var Sl = zr;
  function El(e) {
    const [t, n] = E(void 0);
    return (
      le(() => {
        if (e) {
          n({ width: e.offsetWidth, height: e.offsetHeight });
          const o = new ResizeObserver((r) => {
            if (!Array.isArray(r) || !r.length) return;
            const i = r[0];
            let s, a;
            if ("borderBoxSize" in i) {
              const l = i.borderBoxSize,
                c = Array.isArray(l) ? l[0] : l;
              (s = c.inlineSize), (a = c.blockSize);
            } else (s = e.offsetWidth), (a = e.offsetHeight);
            n({ width: s, height: a });
          });
          return o.observe(e, { box: "border-box" }), () => o.unobserve(e);
        } else n(void 0);
      }, [e]),
      t
    );
  }
  var Vn = "Popper",
    [jr, Kr] = _r(Vn),
    [Pl, Yr] = jr(Vn),
    Gr = (e) => {
      const { __scopePopper: t, children: n } = e,
        [o, r] = E(null);
      return g(Pl, { scope: t, anchor: o, onAnchorChange: r, children: n });
    };
  Gr.displayName = Vn;
  var Xr = "PopperAnchor",
    Zr = L((e, t) => {
      const { __scopePopper: n, virtualRef: o, ...r } = e,
        i = Yr(Xr, n),
        s = D(null),
        a = ie(t, s);
      return (
        O(() => {
          i.onAnchorChange((o == null ? void 0 : o.current) || s.current);
        }),
        o ? null : g(te.div, { ...r, ref: a })
      );
    });
  Zr.displayName = Xr;
  var Hn = "PopperContent",
    [Al, kl] = jr(Hn),
    Jr = L((e, t) => {
      var I, X, re, R, $, F;
      const {
          __scopePopper: n,
          side: o = "bottom",
          sideOffset: r = 0,
          align: i = "center",
          alignOffset: s = 0,
          arrowPadding: a = 0,
          avoidCollisions: l = !0,
          collisionBoundary: c = [],
          collisionPadding: d = 0,
          sticky: u = "partial",
          hideWhenDetached: m = !1,
          updatePositionStrategy: p = "optimized",
          onPlaced: v,
          ...f
        } = e,
        _ = Yr(Hn, n),
        [h, y] = E(null),
        b = ie(t, (J) => y(J)),
        [w, x] = E(null),
        P = El(w),
        C = (P == null ? void 0 : P.width) ?? 0,
        k = (P == null ? void 0 : P.height) ?? 0,
        A = o + (i !== "center" ? "-" + i : ""),
        B =
          typeof d == "number"
            ? d
            : { top: 0, right: 0, bottom: 0, left: 0, ...d },
        G = Array.isArray(c) ? c : [c],
        z = G.length > 0,
        U = { padding: B, boundary: G.filter(Tl), altBoundary: z },
        {
          refs: W,
          floatingStyles: V,
          placement: q,
          isPositioned: M,
          middlewareData: N,
        } = hl({
          strategy: "fixed",
          placement: A,
          whileElementsMounted: (...J) =>
            sl(...J, { animationFrame: p === "always" }),
          elements: { reference: _.anchor },
          middleware: [
            ml({ mainAxis: r + k, alignmentAxis: s }),
            l &&
              gl({
                mainAxis: !0,
                crossAxis: !1,
                limiter: u === "partial" ? vl() : void 0,
                ...U,
              }),
            l && yl({ ...U }),
            bl({
              ...U,
              apply: ({
                elements: J,
                rects: de,
                availableWidth: bt,
                availableHeight: wt,
              }) => {
                const { width: xt, height: wu } = de.reference,
                  Jt = J.floating.style;
                Jt.setProperty("--radix-popper-available-width", `${bt}px`),
                  Jt.setProperty("--radix-popper-available-height", `${wt}px`),
                  Jt.setProperty("--radix-popper-anchor-width", `${xt}px`),
                  Jt.setProperty("--radix-popper-anchor-height", `${wu}px`);
              },
            }),
            w && xl({ element: w, padding: a }),
            Rl({ arrowWidth: C, arrowHeight: k }),
            m && wl({ strategy: "referenceHidden", ...U }),
          ],
        }),
        [j, ne] = ti(q),
        fe = ke(v);
      le(() => {
        M && (fe == null || fe());
      }, [M, fe]);
      const Je = (I = N.arrow) == null ? void 0 : I.x,
        Ue = (X = N.arrow) == null ? void 0 : X.y,
        ge = ((re = N.arrow) == null ? void 0 : re.centerOffset) !== 0,
        [Re, ve] = E();
      return (
        le(() => {
          h && ve(window.getComputedStyle(h).zIndex);
        }, [h]),
        g("div", {
          ref: W.setFloating,
          "data-radix-popper-content-wrapper": "",
          style: {
            ...V,
            transform: M ? V.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: Re,
            "--radix-popper-transform-origin": [
              (R = N.transformOrigin) == null ? void 0 : R.x,
              ($ = N.transformOrigin) == null ? void 0 : $.y,
            ].join(" "),
            ...(((F = N.hide) == null ? void 0 : F.referenceHidden) && {
              visibility: "hidden",
              pointerEvents: "none",
            }),
          },
          dir: e.dir,
          children: g(Al, {
            scope: n,
            placedSide: j,
            onArrowChange: x,
            arrowX: Je,
            arrowY: Ue,
            shouldHideArrow: ge,
            children: g(te.div, {
              "data-side": j,
              "data-align": ne,
              ...f,
              ref: b,
              style: { ...f.style, animation: M ? void 0 : "none" },
            }),
          }),
        })
      );
    });
  Jr.displayName = Hn;
  var Qr = "PopperArrow",
    Il = { top: "bottom", right: "left", bottom: "top", left: "right" },
    ei = L(function (t, n) {
      const { __scopePopper: o, ...r } = t,
        i = kl(Qr, o),
        s = Il[i.placedSide];
      return g("span", {
        ref: i.onArrowChange,
        style: {
          position: "absolute",
          left: i.arrowX,
          top: i.arrowY,
          [s]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0",
          }[i.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)",
          }[i.placedSide],
          visibility: i.shouldHideArrow ? "hidden" : void 0,
        },
        children: g(Sl, {
          ...r,
          ref: n,
          style: { ...r.style, display: "block" },
        }),
      });
    });
  ei.displayName = Qr;
  function Tl(e) {
    return e !== null;
  }
  var Rl = (e) => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
      var _, h, y;
      const { placement: n, rects: o, middlewareData: r } = t,
        s = ((_ = r.arrow) == null ? void 0 : _.centerOffset) !== 0,
        a = s ? 0 : e.arrowWidth,
        l = s ? 0 : e.arrowHeight,
        [c, d] = ti(n),
        u = { start: "0%", center: "50%", end: "100%" }[d],
        m = (((h = r.arrow) == null ? void 0 : h.x) ?? 0) + a / 2,
        p = (((y = r.arrow) == null ? void 0 : y.y) ?? 0) + l / 2;
      let v = "",
        f = "";
      return (
        c === "bottom"
          ? ((v = s ? u : `${m}px`), (f = `${-l}px`))
          : c === "top"
          ? ((v = s ? u : `${m}px`), (f = `${o.floating.height + l}px`))
          : c === "right"
          ? ((v = `${-l}px`), (f = s ? u : `${p}px`))
          : c === "left" &&
            ((v = `${o.floating.width + l}px`), (f = s ? u : `${p}px`)),
        { data: { x: v, y: f } }
      );
    },
  });
  function ti(e) {
    const [t, n = "center"] = e.split("-");
    return [t, n];
  }
  var Nl = Gr,
    Ol = Zr,
    Dl = Jr,
    Ll = ei,
    Ml = "Portal",
    ni = L((e, t) => {
      var a;
      const { container: n, ...o } = e,
        [r, i] = E(!1);
      le(() => i(!0), []);
      const s =
        n ||
        (r &&
          ((a = globalThis == null ? void 0 : globalThis.document) == null
            ? void 0
            : a.body));
      return s ? Ae.createPortal(g(te.div, { ...o, ref: t }), s) : null;
    });
  ni.displayName = Ml;
  function oi({ prop: e, defaultProp: t, onChange: n = () => {} }) {
    const [o, r] = Fl({ defaultProp: t, onChange: n }),
      i = e !== void 0,
      s = i ? e : o,
      a = ke(n),
      l = Y(
        (c) => {
          if (i) {
            const u = typeof c == "function" ? c(e) : c;
            u !== e && a(u);
          } else r(c);
        },
        [i, e, r, a]
      );
    return [s, l];
  }
  function Fl({ defaultProp: e, onChange: t }) {
    const n = E(e),
      [o] = n,
      r = D(o),
      i = ke(t);
    return (
      O(() => {
        r.current !== o && (i(o), (r.current = o));
      }, [o, r, i]),
      n
    );
  }
  function Bl(e) {
    const t = D({ value: e, previous: e });
    return Z(
      () => (
        t.current.value !== e &&
          ((t.current.previous = t.current.value), (t.current.value = e)),
        t.current.previous
      ),
      [e]
    );
  }
  var ql = "VisuallyHidden",
    ri = L((e, t) =>
      g(te.span, {
        ...e,
        ref: t,
        style: {
          position: "absolute",
          border: 0,
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          wordWrap: "normal",
          ...e.style,
        },
      })
    );
  ri.displayName = ql;
  var $l = function (e) {
      if (typeof document > "u") return null;
      var t = Array.isArray(e) ? e[0] : e;
      return t.ownerDocument.body;
    },
    it = new WeakMap(),
    Wt = new WeakMap(),
    Vt = {},
    Un = 0,
    ii = function (e) {
      return e && (e.host || ii(e.parentNode));
    },
    Wl = function (e, t) {
      return t
        .map(function (n) {
          if (e.contains(n)) return n;
          var o = ii(n);
          return o && e.contains(o)
            ? o
            : (console.error(
                "aria-hidden",
                n,
                "in not contained inside",
                e,
                ". Doing nothing"
              ),
              null);
        })
        .filter(function (n) {
          return !!n;
        });
    },
    Vl = function (e, t, n, o) {
      var r = Wl(t, Array.isArray(e) ? e : [e]);
      Vt[n] || (Vt[n] = new WeakMap());
      var i = Vt[n],
        s = [],
        a = new Set(),
        l = new Set(r),
        c = function (u) {
          !u || a.has(u) || (a.add(u), c(u.parentNode));
        };
      r.forEach(c);
      var d = function (u) {
        !u ||
          l.has(u) ||
          Array.prototype.forEach.call(u.children, function (m) {
            if (a.has(m)) d(m);
            else {
              var p = m.getAttribute(o),
                v = p !== null && p !== "false",
                f = (it.get(m) || 0) + 1,
                _ = (i.get(m) || 0) + 1;
              it.set(m, f),
                i.set(m, _),
                s.push(m),
                f === 1 && v && Wt.set(m, !0),
                _ === 1 && m.setAttribute(n, "true"),
                v || m.setAttribute(o, "true");
            }
          });
      };
      return (
        d(t),
        a.clear(),
        Un++,
        function () {
          s.forEach(function (u) {
            var m = it.get(u) - 1,
              p = i.get(u) - 1;
            it.set(u, m),
              i.set(u, p),
              m || (Wt.has(u) || u.removeAttribute(o), Wt.delete(u)),
              p || u.removeAttribute(n);
          }),
            Un--,
            Un ||
              ((it = new WeakMap()),
              (it = new WeakMap()),
              (Wt = new WeakMap()),
              (Vt = {}));
        }
      );
    },
    Hl = function (e, t, n) {
      n === void 0 && (n = "data-aria-hidden");
      var o = Array.from(Array.isArray(e) ? e : [e]),
        r = $l(e);
      return r
        ? (o.push.apply(o, Array.from(r.querySelectorAll("[aria-live]"))),
          Vl(o, r, n, "aria-hidden"))
        : function () {
            return null;
          };
    },
    we = function () {
      return (
        (we =
          Object.assign ||
          function (t) {
            for (var n, o = 1, r = arguments.length; o < r; o++) {
              n = arguments[o];
              for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
            }
            return t;
          }),
        we.apply(this, arguments)
      );
    };
  function si(e, t) {
    var n = {};
    for (var o in e)
      Object.prototype.hasOwnProperty.call(e, o) &&
        t.indexOf(o) < 0 &&
        (n[o] = e[o]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
        t.indexOf(o[r]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
          (n[o[r]] = e[o[r]]);
    return n;
  }
  function Ul(e, t, n) {
    if (n || arguments.length === 2)
      for (var o = 0, r = t.length, i; o < r; o++)
        (i || !(o in t)) &&
          (i || (i = Array.prototype.slice.call(t, 0, o)), (i[o] = t[o]));
    return e.concat(i || Array.prototype.slice.call(t));
  }
  typeof SuppressedError == "function" && SuppressedError;
  var Ht = "right-scroll-bar-position",
    Ut = "width-before-scroll-bar",
    zl = "with-scroll-bars-hidden",
    jl = "--removed-body-scroll-bar-size";
  function zn(e, t) {
    return typeof e == "function" ? e(t) : e && (e.current = t), e;
  }
  function Kl(e, t) {
    var n = E(function () {
      return {
        value: e,
        callback: t,
        facade: {
          get current() {
            return n.value;
          },
          set current(o) {
            var r = n.value;
            r !== o && ((n.value = o), n.callback(o, r));
          },
        },
      };
    })[0];
    return (n.callback = t), n.facade;
  }
  var ai = new WeakMap();
  function Yl(e, t) {
    var n = Kl(null, function (o) {
      return e.forEach(function (r) {
        return zn(r, o);
      });
    });
    return (
      Le(
        function () {
          var o = ai.get(n);
          if (o) {
            var r = new Set(o),
              i = new Set(e),
              s = n.current;
            r.forEach(function (a) {
              i.has(a) || zn(a, null);
            }),
              i.forEach(function (a) {
                r.has(a) || zn(a, s);
              });
          }
          ai.set(n, e);
        },
        [e]
      ),
      n
    );
  }
  function Gl(e) {
    return e;
  }
  function Xl(e, t) {
    t === void 0 && (t = Gl);
    var n = [],
      o = !1,
      r = {
        read: function () {
          if (o)
            throw new Error(
              "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
            );
          return n.length ? n[n.length - 1] : e;
        },
        useMedium: function (i) {
          var s = t(i, o);
          return (
            n.push(s),
            function () {
              n = n.filter(function (a) {
                return a !== s;
              });
            }
          );
        },
        assignSyncMedium: function (i) {
          for (o = !0; n.length; ) {
            var s = n;
            (n = []), s.forEach(i);
          }
          n = {
            push: function (a) {
              return i(a);
            },
            filter: function () {
              return n;
            },
          };
        },
        assignMedium: function (i) {
          o = !0;
          var s = [];
          if (n.length) {
            var a = n;
            (n = []), a.forEach(i), (s = n);
          }
          var l = function () {
              var d = s;
              (s = []), d.forEach(i);
            },
            c = function () {
              return Promise.resolve().then(l);
            };
          c(),
            (n = {
              push: function (d) {
                s.push(d), c();
              },
              filter: function (d) {
                return (s = s.filter(d)), n;
              },
            });
        },
      };
    return r;
  }
  function Zl(e) {
    e === void 0 && (e = {});
    var t = Xl(null);
    return (t.options = we({ async: !0, ssr: !1 }, e)), t;
  }
  var li = function (e) {
    var t = e.sideCar,
      n = si(e, ["sideCar"]);
    if (!t)
      throw new Error(
        "Sidecar: please provide `sideCar` property to import the right car"
      );
    var o = t.read();
    if (!o) throw new Error("Sidecar medium not found");
    return H(o, we({}, n));
  };
  li.isSideCarExport = !0;
  function Jl(e, t) {
    return e.useMedium(t), li;
  }
  var ci = Zl(),
    jn = function () {},
    zt = L(function (e, t) {
      var n = D(null),
        o = E({
          onScrollCapture: jn,
          onWheelCapture: jn,
          onTouchMoveCapture: jn,
        }),
        r = o[0],
        i = o[1],
        s = e.forwardProps,
        a = e.children,
        l = e.className,
        c = e.removeScrollBar,
        d = e.enabled,
        u = e.shards,
        m = e.sideCar,
        p = e.noIsolation,
        v = e.inert,
        f = e.allowPinchZoom,
        _ = e.as,
        h = _ === void 0 ? "div" : _,
        y = e.gapMode,
        b = si(e, [
          "forwardProps",
          "children",
          "className",
          "removeScrollBar",
          "enabled",
          "shards",
          "sideCar",
          "noIsolation",
          "inert",
          "allowPinchZoom",
          "as",
          "gapMode",
        ]),
        w = m,
        x = Yl([n, t]),
        P = we(we({}, b), r);
      return H(
        oe,
        null,
        d &&
          H(w, {
            sideCar: ci,
            removeScrollBar: c,
            shards: u,
            noIsolation: p,
            inert: v,
            setCallbacks: i,
            allowPinchZoom: !!f,
            lockRef: n,
            gapMode: y,
          }),
        s
          ? pt(Me.only(a), we(we({}, P), { ref: x }))
          : H(h, we({}, P, { className: l, ref: x }), a)
      );
    });
  (zt.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
    (zt.classNames = { fullWidth: Ut, zeroRight: Ht });
  var Ql = function () {
    if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
  };
  function ec() {
    if (!document) return null;
    var e = document.createElement("style");
    e.type = "text/css";
    var t = Ql();
    return t && e.setAttribute("nonce", t), e;
  }
  function tc(e, t) {
    e.styleSheet
      ? (e.styleSheet.cssText = t)
      : e.appendChild(document.createTextNode(t));
  }
  function nc(e) {
    var t = document.head || document.getElementsByTagName("head")[0];
    t.appendChild(e);
  }
  var oc = function () {
      var e = 0,
        t = null;
      return {
        add: function (n) {
          e == 0 && (t = ec()) && (tc(t, n), nc(t)), e++;
        },
        remove: function () {
          e--,
            !e &&
              t &&
              (t.parentNode && t.parentNode.removeChild(t), (t = null));
        },
      };
    },
    rc = function () {
      var e = oc();
      return function (t, n) {
        O(
          function () {
            return (
              e.add(t),
              function () {
                e.remove();
              }
            );
          },
          [t && n]
        );
      };
    },
    ui = function () {
      var e = rc(),
        t = function (n) {
          var o = n.styles,
            r = n.dynamic;
          return e(o, r), null;
        };
      return t;
    },
    ic = { left: 0, top: 0, right: 0, gap: 0 },
    Kn = function (e) {
      return parseInt(e || "", 10) || 0;
    },
    sc = function (e) {
      var t = window.getComputedStyle(document.body),
        n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
        o = t[e === "padding" ? "paddingTop" : "marginTop"],
        r = t[e === "padding" ? "paddingRight" : "marginRight"];
      return [Kn(n), Kn(o), Kn(r)];
    },
    ac = function (e) {
      if ((e === void 0 && (e = "margin"), typeof window > "u")) return ic;
      var t = sc(e),
        n = document.documentElement.clientWidth,
        o = window.innerWidth;
      return {
        left: t[0],
        top: t[1],
        right: t[2],
        gap: Math.max(0, o - n + t[2] - t[0]),
      };
    },
    lc = ui(),
    st = "data-scroll-locked",
    cc = function (e, t, n, o) {
      var r = e.left,
        i = e.top,
        s = e.right,
        a = e.gap;
      return (
        n === void 0 && (n = "margin"),
        `
  .`
          .concat(
            zl,
            ` {
   overflow: hidden `
          )
          .concat(
            o,
            `;
   padding-right: `
          )
          .concat(a, "px ")
          .concat(
            o,
            `;
  }
  body[`
          )
          .concat(
            st,
            `] {
    overflow: hidden `
          )
          .concat(
            o,
            `;
    overscroll-behavior: contain;
    `
          )
          .concat(
            [
              t && "position: relative ".concat(o, ";"),
              n === "margin" &&
                `
    padding-left: `
                  .concat(
                    r,
                    `px;
    padding-top: `
                  )
                  .concat(
                    i,
                    `px;
    padding-right: `
                  )
                  .concat(
                    s,
                    `px;
    margin-left:0;
    margin-top:0;
    margin-right: `
                  )
                  .concat(a, "px ")
                  .concat(
                    o,
                    `;
    `
                  ),
              n === "padding" &&
                "padding-right: ".concat(a, "px ").concat(o, ";"),
            ]
              .filter(Boolean)
              .join(""),
            `
  }
  
  .`
          )
          .concat(
            Ht,
            ` {
    right: `
          )
          .concat(a, "px ")
          .concat(
            o,
            `;
  }
  
  .`
          )
          .concat(
            Ut,
            ` {
    margin-right: `
          )
          .concat(a, "px ")
          .concat(
            o,
            `;
  }
  
  .`
          )
          .concat(Ht, " .")
          .concat(
            Ht,
            ` {
    right: 0 `
          )
          .concat(
            o,
            `;
  }
  
  .`
          )
          .concat(Ut, " .")
          .concat(
            Ut,
            ` {
    margin-right: 0 `
          )
          .concat(
            o,
            `;
  }
  
  body[`
          )
          .concat(
            st,
            `] {
    `
          )
          .concat(jl, ": ")
          .concat(
            a,
            `px;
  }
`
          )
      );
    },
    di = function () {
      var e = parseInt(document.body.getAttribute(st) || "0", 10);
      return isFinite(e) ? e : 0;
    },
    uc = function () {
      O(function () {
        return (
          document.body.setAttribute(st, (di() + 1).toString()),
          function () {
            var e = di() - 1;
            e <= 0
              ? document.body.removeAttribute(st)
              : document.body.setAttribute(st, e.toString());
          }
        );
      }, []);
    },
    dc = function (e) {
      var t = e.noRelative,
        n = e.noImportant,
        o = e.gapMode,
        r = o === void 0 ? "margin" : o;
      uc();
      var i = Z(
        function () {
          return ac(r);
        },
        [r]
      );
      return H(lc, { styles: cc(i, !t, r, n ? "" : "!important") });
    },
    Yn = !1;
  if (typeof window < "u")
    try {
      var jt = Object.defineProperty({}, "passive", {
        get: function () {
          return (Yn = !0), !0;
        },
      });
      window.addEventListener("test", jt, jt),
        window.removeEventListener("test", jt, jt);
    } catch {
      Yn = !1;
    }
  var at = Yn ? { passive: !1 } : !1,
    fc = function (e) {
      return e.tagName === "TEXTAREA";
    },
    fi = function (e, t) {
      if (!(e instanceof Element)) return !1;
      var n = window.getComputedStyle(e);
      return (
        n[t] !== "hidden" &&
        !(n.overflowY === n.overflowX && !fc(e) && n[t] === "visible")
      );
    },
    pc = function (e) {
      return fi(e, "overflowY");
    },
    hc = function (e) {
      return fi(e, "overflowX");
    },
    pi = function (e, t) {
      var n = t.ownerDocument,
        o = t;
      do {
        typeof ShadowRoot < "u" && o instanceof ShadowRoot && (o = o.host);
        var r = hi(e, o);
        if (r) {
          var i = _i(e, o),
            s = i[1],
            a = i[2];
          if (s > a) return !0;
        }
        o = o.parentNode;
      } while (o && o !== n.body);
      return !1;
    },
    _c = function (e) {
      var t = e.scrollTop,
        n = e.scrollHeight,
        o = e.clientHeight;
      return [t, n, o];
    },
    mc = function (e) {
      var t = e.scrollLeft,
        n = e.scrollWidth,
        o = e.clientWidth;
      return [t, n, o];
    },
    hi = function (e, t) {
      return e === "v" ? pc(t) : hc(t);
    },
    _i = function (e, t) {
      return e === "v" ? _c(t) : mc(t);
    },
    gc = function (e, t) {
      return e === "h" && t === "rtl" ? -1 : 1;
    },
    vc = function (e, t, n, o, r) {
      var i = gc(e, window.getComputedStyle(t).direction),
        s = i * o,
        a = n.target,
        l = t.contains(a),
        c = !1,
        d = s > 0,
        u = 0,
        m = 0;
      do {
        var p = _i(e, a),
          v = p[0],
          f = p[1],
          _ = p[2],
          h = f - _ - i * v;
        (v || h) && hi(e, a) && ((u += h), (m += v)),
          a instanceof ShadowRoot ? (a = a.host) : (a = a.parentNode);
      } while (
        (!l && a !== document.body) ||
        (l && (t.contains(a) || t === a))
      );
      return ((d && Math.abs(u) < 1) || (!d && Math.abs(m) < 1)) && (c = !0), c;
    },
    Kt = function (e) {
      return "changedTouches" in e
        ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
        : [0, 0];
    },
    mi = function (e) {
      return [e.deltaX, e.deltaY];
    },
    gi = function (e) {
      return e && "current" in e ? e.current : e;
    },
    yc = function (e, t) {
      return e[0] === t[0] && e[1] === t[1];
    },
    bc = function (e) {
      return `
  .block-interactivity-`
        .concat(
          e,
          ` {pointer-events: none;}
  .allow-interactivity-`
        )
        .concat(
          e,
          ` {pointer-events: all;}
`
        );
    },
    wc = 0,
    lt = [];
  function xc(e) {
    var t = D([]),
      n = D([0, 0]),
      o = D(),
      r = E(wc++)[0],
      i = E(ui)[0],
      s = D(e);
    O(
      function () {
        s.current = e;
      },
      [e]
    ),
      O(
        function () {
          if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(r));
            var f = Ul(
              [e.lockRef.current],
              (e.shards || []).map(gi),
              !0
            ).filter(Boolean);
            return (
              f.forEach(function (_) {
                return _.classList.add("allow-interactivity-".concat(r));
              }),
              function () {
                document.body.classList.remove(
                  "block-interactivity-".concat(r)
                ),
                  f.forEach(function (_) {
                    return _.classList.remove("allow-interactivity-".concat(r));
                  });
              }
            );
          }
        },
        [e.inert, e.lockRef.current, e.shards]
      );
    var a = Y(function (f, _) {
        if (
          ("touches" in f && f.touches.length === 2) ||
          (f.type === "wheel" && f.ctrlKey)
        )
          return !s.current.allowPinchZoom;
        var h = Kt(f),
          y = n.current,
          b = "deltaX" in f ? f.deltaX : y[0] - h[0],
          w = "deltaY" in f ? f.deltaY : y[1] - h[1],
          x,
          P = f.target,
          C = Math.abs(b) > Math.abs(w) ? "h" : "v";
        if ("touches" in f && C === "h" && P.type === "range") return !1;
        var k = pi(C, P);
        if (!k) return !0;
        if ((k ? (x = C) : ((x = C === "v" ? "h" : "v"), (k = pi(C, P))), !k))
          return !1;
        if (
          (!o.current && "changedTouches" in f && (b || w) && (o.current = x),
          !x)
        )
          return !0;
        var A = o.current || x;
        return vc(A, _, f, A === "h" ? b : w);
      }, []),
      l = Y(function (f) {
        var _ = f;
        if (!(!lt.length || lt[lt.length - 1] !== i)) {
          var h = "deltaY" in _ ? mi(_) : Kt(_),
            y = t.current.filter(function (x) {
              return (
                x.name === _.type &&
                (x.target === _.target || _.target === x.shadowParent) &&
                yc(x.delta, h)
              );
            })[0];
          if (y && y.should) {
            _.cancelable && _.preventDefault();
            return;
          }
          if (!y) {
            var b = (s.current.shards || [])
                .map(gi)
                .filter(Boolean)
                .filter(function (x) {
                  return x.contains(_.target);
                }),
              w = b.length > 0 ? a(_, b[0]) : !s.current.noIsolation;
            w && _.cancelable && _.preventDefault();
          }
        }
      }, []),
      c = Y(function (f, _, h, y) {
        var b = {
          name: f,
          delta: _,
          target: h,
          should: y,
          shadowParent: Cc(h),
        };
        t.current.push(b),
          setTimeout(function () {
            t.current = t.current.filter(function (w) {
              return w !== b;
            });
          }, 1);
      }, []),
      d = Y(function (f) {
        (n.current = Kt(f)), (o.current = void 0);
      }, []),
      u = Y(function (f) {
        c(f.type, mi(f), f.target, a(f, e.lockRef.current));
      }, []),
      m = Y(function (f) {
        c(f.type, Kt(f), f.target, a(f, e.lockRef.current));
      }, []);
    O(function () {
      return (
        lt.push(i),
        e.setCallbacks({
          onScrollCapture: u,
          onWheelCapture: u,
          onTouchMoveCapture: m,
        }),
        document.addEventListener("wheel", l, at),
        document.addEventListener("touchmove", l, at),
        document.addEventListener("touchstart", d, at),
        function () {
          (lt = lt.filter(function (f) {
            return f !== i;
          })),
            document.removeEventListener("wheel", l, at),
            document.removeEventListener("touchmove", l, at),
            document.removeEventListener("touchstart", d, at);
        }
      );
    }, []);
    var p = e.removeScrollBar,
      v = e.inert;
    return H(
      oe,
      null,
      v ? H(i, { styles: bc(r) }) : null,
      p ? H(dc, { gapMode: e.gapMode }) : null
    );
  }
  function Cc(e) {
    for (var t = null; e !== null; )
      e instanceof ShadowRoot && ((t = e.host), (e = e.host)),
        (e = e.parentNode);
    return t;
  }
  const Sc = Jl(ci, xc);
  var vi = L(function (e, t) {
    return H(zt, we({}, e, { ref: t, sideCar: Sc }));
  });
  vi.classNames = zt.classNames;
  var Ec = [" ", "Enter", "ArrowUp", "ArrowDown"],
    Pc = [" ", "Enter"],
    vt = "Select",
    [Yt, Gt, Ac] = ta(vt),
    [ct, ud] = na(vt, [Ac, Kr]),
    Xt = Kr(),
    [kc, Ve] = ct(vt),
    [Ic, Tc] = ct(vt),
    yi = (e) => {
      const {
          __scopeSelect: t,
          children: n,
          open: o,
          defaultOpen: r,
          onOpenChange: i,
          value: s,
          defaultValue: a,
          onValueChange: l,
          dir: c,
          name: d,
          autoComplete: u,
          disabled: m,
          required: p,
          form: v,
        } = e,
        f = Xt(t),
        [_, h] = E(null),
        [y, b] = E(null),
        [w, x] = E(!1),
        P = ia(c),
        [C = !1, k] = oi({ prop: o, defaultProp: r, onChange: i }),
        [A, B] = oi({ prop: s, defaultProp: a, onChange: l }),
        G = D(null),
        z = _ ? v || !!_.closest("form") : !0,
        [U, W] = E(new Set()),
        V = Array.from(U)
          .map((q) => q.props.value)
          .join(";");
      return g(Nl, {
        ...f,
        children: g(kc, {
          required: p,
          scope: t,
          trigger: _,
          onTriggerChange: h,
          valueNode: y,
          onValueNodeChange: b,
          valueNodeHasChildren: w,
          onValueNodeHasChildrenChange: x,
          contentId: In(),
          value: A,
          onValueChange: B,
          open: C,
          onOpenChange: k,
          dir: P,
          triggerPointerDownPosRef: G,
          disabled: m,
          children: [
            g(Yt.Provider, {
              scope: t,
              children: g(Ic, {
                scope: e.__scopeSelect,
                onNativeOptionAdd: Y((q) => {
                  W((M) => new Set(M).add(q));
                }, []),
                onNativeOptionRemove: Y((q) => {
                  W((M) => {
                    const N = new Set(M);
                    return N.delete(q), N;
                  });
                }, []),
                children: n,
              }),
            }),
            z
              ? g(
                  Wi,
                  {
                    "aria-hidden": !0,
                    required: p,
                    tabIndex: -1,
                    name: d,
                    autoComplete: u,
                    value: A,
                    onChange: (q) => B(q.target.value),
                    disabled: m,
                    form: v,
                    children: [
                      A === void 0 ? g("option", { value: "" }) : null,
                      Array.from(U),
                    ],
                  },
                  V
                )
              : null,
          ],
        }),
      });
    };
  yi.displayName = vt;
  var bi = "SelectTrigger",
    wi = L((e, t) => {
      const { __scopeSelect: n, disabled: o = !1, ...r } = e,
        i = Xt(n),
        s = Ve(bi, n),
        a = s.disabled || o,
        l = ie(t, s.onTriggerChange),
        c = Gt(n),
        d = D("touch"),
        [u, m, p] = Vi((f) => {
          const _ = c().filter((b) => !b.disabled),
            h = _.find((b) => b.value === s.value),
            y = Hi(_, f, h);
          y !== void 0 && s.onValueChange(y.value);
        }),
        v = (f) => {
          a || (s.onOpenChange(!0), p()),
            f &&
              (s.triggerPointerDownPosRef.current = {
                x: Math.round(f.pageX),
                y: Math.round(f.pageY),
              });
        };
      return g(Ol, {
        asChild: !0,
        ...i,
        children: g(te.button, {
          type: "button",
          role: "combobox",
          "aria-controls": s.contentId,
          "aria-expanded": s.open,
          "aria-required": s.required,
          "aria-autocomplete": "none",
          dir: s.dir,
          "data-state": s.open ? "open" : "closed",
          disabled: a,
          "data-disabled": a ? "" : void 0,
          "data-placeholder": $i(s.value) ? "" : void 0,
          ...r,
          ref: l,
          onClick: ee(r.onClick, (f) => {
            f.currentTarget.focus(), d.current !== "mouse" && v(f);
          }),
          onPointerDown: ee(r.onPointerDown, (f) => {
            d.current = f.pointerType;
            const _ = f.target;
            _.hasPointerCapture(f.pointerId) &&
              _.releasePointerCapture(f.pointerId),
              f.button === 0 &&
                f.ctrlKey === !1 &&
                f.pointerType === "mouse" &&
                (v(f), f.preventDefault());
          }),
          onKeyDown: ee(r.onKeyDown, (f) => {
            const _ = u.current !== "";
            !(f.ctrlKey || f.altKey || f.metaKey) &&
              f.key.length === 1 &&
              m(f.key),
              !(_ && f.key === " ") &&
                Ec.includes(f.key) &&
                (v(), f.preventDefault());
          }),
        }),
      });
    });
  wi.displayName = bi;
  var xi = "SelectValue",
    Rc = L((e, t) => {
      const {
          __scopeSelect: n,
          className: o,
          style: r,
          children: i,
          placeholder: s = "",
          ...a
        } = e,
        l = Ve(xi, n),
        { onValueNodeHasChildrenChange: c } = l,
        d = i !== void 0,
        u = ie(t, l.onValueNodeChange);
      return (
        le(() => {
          c(d);
        }, [c, d]),
        g(te.span, {
          ...a,
          ref: u,
          style: { pointerEvents: "none" },
          children: $i(l.value) ? g(oe, { children: s }) : i,
        })
      );
    });
  Rc.displayName = xi;
  var Nc = "SelectIcon",
    Ci = L((e, t) => {
      const { __scopeSelect: n, children: o, ...r } = e;
      return g(te.span, {
        "aria-hidden": !0,
        ...r,
        ref: t,
        children: o || "â–¼",
      });
    });
  Ci.displayName = Nc;
  var Oc = "SelectPortal",
    Si = (e) => g(ni, { asChild: !0, ...e });
  Si.displayName = Oc;
  var Ze = "SelectContent",
    Ei = L((e, t) => {
      const n = Ve(Ze, e.__scopeSelect),
        [o, r] = E();
      if (
        (le(() => {
          r(new DocumentFragment());
        }, []),
        !n.open)
      ) {
        const i = o;
        return i
          ? It(
              g(Pi, {
                scope: e.__scopeSelect,
                children: g(Yt.Slot, {
                  scope: e.__scopeSelect,
                  children: g("div", { children: e.children }),
                }),
              }),
              i
            )
          : null;
      }
      return g(Ai, { ...e, ref: t });
    });
  Ei.displayName = Ze;
  var me = 10,
    [Pi, He] = ct(Ze),
    Dc = "SelectContentImpl",
    Ai = L((e, t) => {
      const {
          __scopeSelect: n,
          position: o = "item-aligned",
          onCloseAutoFocus: r,
          onEscapeKeyDown: i,
          onPointerDownOutside: s,
          side: a,
          sideOffset: l,
          align: c,
          alignOffset: d,
          arrowPadding: u,
          collisionBoundary: m,
          collisionPadding: p,
          sticky: v,
          hideWhenDetached: f,
          avoidCollisions: _,
          ...h
        } = e,
        y = Ve(Ze, n),
        [b, w] = E(null),
        [x, P] = E(null),
        C = ie(t, (I) => w(I)),
        [k, A] = E(null),
        [B, G] = E(null),
        z = Gt(n),
        [U, W] = E(!1),
        V = D(!1);
      O(() => {
        if (b) return Hl(b);
      }, [b]),
        ma();
      const q = Y(
          (I) => {
            const [X, ...re] = z().map((F) => F.ref.current),
              [R] = re.slice(-1),
              $ = document.activeElement;
            for (const F of I)
              if (
                F === $ ||
                (F == null || F.scrollIntoView({ block: "nearest" }),
                F === X && x && (x.scrollTop = 0),
                F === R && x && (x.scrollTop = x.scrollHeight),
                F == null || F.focus(),
                document.activeElement !== $)
              )
                return;
          },
          [z, x]
        ),
        M = Y(() => q([k, b]), [q, k, b]);
      O(() => {
        U && M();
      }, [U, M]);
      const { onOpenChange: N, triggerPointerDownPosRef: j } = y;
      O(() => {
        if (b) {
          let I = { x: 0, y: 0 };
          const X = (R) => {
              var $, F;
              I = {
                x: Math.abs(
                  Math.round(R.pageX) -
                    ((($ = j.current) == null ? void 0 : $.x) ?? 0)
                ),
                y: Math.abs(
                  Math.round(R.pageY) -
                    (((F = j.current) == null ? void 0 : F.y) ?? 0)
                ),
              };
            },
            re = (R) => {
              I.x <= 10 && I.y <= 10
                ? R.preventDefault()
                : b.contains(R.target) || N(!1),
                document.removeEventListener("pointermove", X),
                (j.current = null);
            };
          return (
            j.current !== null &&
              (document.addEventListener("pointermove", X),
              document.addEventListener("pointerup", re, {
                capture: !0,
                once: !0,
              })),
            () => {
              document.removeEventListener("pointermove", X),
                document.removeEventListener("pointerup", re, { capture: !0 });
            }
          );
        }
      }, [b, N, j]),
        O(() => {
          const I = () => N(!1);
          return (
            window.addEventListener("blur", I),
            window.addEventListener("resize", I),
            () => {
              window.removeEventListener("blur", I),
                window.removeEventListener("resize", I);
            }
          );
        }, [N]);
      const [ne, fe] = Vi((I) => {
          const X = z().filter(($) => !$.disabled),
            re = X.find(($) => $.ref.current === document.activeElement),
            R = Hi(X, I, re);
          R && setTimeout(() => R.ref.current.focus());
        }),
        Je = Y(
          (I, X, re) => {
            const R = !V.current && !re;
            ((y.value !== void 0 && y.value === X) || R) &&
              (A(I), R && (V.current = !0));
          },
          [y.value]
        ),
        Ue = Y(() => (b == null ? void 0 : b.focus()), [b]),
        ge = Y(
          (I, X, re) => {
            const R = !V.current && !re;
            ((y.value !== void 0 && y.value === X) || R) && G(I);
          },
          [y.value]
        ),
        Re = o === "popper" ? Gn : ki,
        ve =
          Re === Gn
            ? {
                side: a,
                sideOffset: l,
                align: c,
                alignOffset: d,
                arrowPadding: u,
                collisionBoundary: m,
                collisionPadding: p,
                sticky: v,
                hideWhenDetached: f,
                avoidCollisions: _,
              }
            : {};
      return g(Pi, {
        scope: n,
        content: b,
        viewport: x,
        onViewportChange: P,
        itemRefCallback: Je,
        selectedItem: k,
        onItemLeave: Ue,
        itemTextRefCallback: ge,
        focusSelectedItem: M,
        selectedItemText: B,
        position: o,
        isPositioned: U,
        searchRef: ne,
        children: g(vi, {
          as: ht,
          allowPinchZoom: !0,
          children: g(Sr, {
            asChild: !0,
            trapped: y.open,
            onMountAutoFocus: (I) => {
              I.preventDefault();
            },
            onUnmountAutoFocus: ee(r, (I) => {
              var X;
              (X = y.trigger) == null || X.focus({ preventScroll: !0 }),
                I.preventDefault();
            }),
            children: g(yr, {
              asChild: !0,
              disableOutsidePointerEvents: !0,
              onEscapeKeyDown: i,
              onPointerDownOutside: s,
              onFocusOutside: (I) => I.preventDefault(),
              onDismiss: () => y.onOpenChange(!1),
              children: g(Re, {
                role: "listbox",
                id: y.contentId,
                "data-state": y.open ? "open" : "closed",
                dir: y.dir,
                onContextMenu: (I) => I.preventDefault(),
                ...h,
                ...ve,
                onPlaced: () => W(!0),
                ref: C,
                style: {
                  display: "flex",
                  flexDirection: "column",
                  outline: "none",
                  ...h.style,
                },
                onKeyDown: ee(h.onKeyDown, (I) => {
                  const X = I.ctrlKey || I.altKey || I.metaKey;
                  if (
                    (I.key === "Tab" && I.preventDefault(),
                    !X && I.key.length === 1 && fe(I.key),
                    ["ArrowUp", "ArrowDown", "Home", "End"].includes(I.key))
                  ) {
                    let R = z()
                      .filter(($) => !$.disabled)
                      .map(($) => $.ref.current);
                    if (
                      (["ArrowUp", "End"].includes(I.key) &&
                        (R = R.slice().reverse()),
                      ["ArrowUp", "ArrowDown"].includes(I.key))
                    ) {
                      const $ = I.target,
                        F = R.indexOf($);
                      R = R.slice(F + 1);
                    }
                    setTimeout(() => q(R)), I.preventDefault();
                  }
                }),
              }),
            }),
          }),
        }),
      });
    });
  Ai.displayName = Dc;
  var Lc = "SelectItemAlignedPosition",
    ki = L((e, t) => {
      const { __scopeSelect: n, onPlaced: o, ...r } = e,
        i = Ve(Ze, n),
        s = He(Ze, n),
        [a, l] = E(null),
        [c, d] = E(null),
        u = ie(t, (C) => d(C)),
        m = Gt(n),
        p = D(!1),
        v = D(!0),
        {
          viewport: f,
          selectedItem: _,
          selectedItemText: h,
          focusSelectedItem: y,
        } = s,
        b = Y(() => {
          if (i.trigger && i.valueNode && a && c && f && _ && h) {
            const C = i.trigger.getBoundingClientRect(),
              k = c.getBoundingClientRect(),
              A = i.valueNode.getBoundingClientRect(),
              B = h.getBoundingClientRect();
            if (i.dir !== "rtl") {
              const $ = B.left - k.left,
                F = A.left - $,
                J = C.left - F,
                de = C.width + J,
                bt = Math.max(de, k.width),
                wt = window.innerWidth - me,
                xt = hr(F, [me, Math.max(me, wt - bt)]);
              (a.style.minWidth = de + "px"), (a.style.left = xt + "px");
            } else {
              const $ = k.right - B.right,
                F = window.innerWidth - A.right - $,
                J = window.innerWidth - C.right - F,
                de = C.width + J,
                bt = Math.max(de, k.width),
                wt = window.innerWidth - me,
                xt = hr(F, [me, Math.max(me, wt - bt)]);
              (a.style.minWidth = de + "px"), (a.style.right = xt + "px");
            }
            const G = m(),
              z = window.innerHeight - me * 2,
              U = f.scrollHeight,
              W = window.getComputedStyle(c),
              V = parseInt(W.borderTopWidth, 10),
              q = parseInt(W.paddingTop, 10),
              M = parseInt(W.borderBottomWidth, 10),
              N = parseInt(W.paddingBottom, 10),
              j = V + q + U + N + M,
              ne = Math.min(_.offsetHeight * 5, j),
              fe = window.getComputedStyle(f),
              Je = parseInt(fe.paddingTop, 10),
              Ue = parseInt(fe.paddingBottom, 10),
              ge = C.top + C.height / 2 - me,
              Re = z - ge,
              ve = _.offsetHeight / 2,
              I = _.offsetTop + ve,
              X = V + q + I,
              re = j - X;
            if (X <= ge) {
              const $ = G.length > 0 && _ === G[G.length - 1].ref.current;
              a.style.bottom = "0px";
              const F = c.clientHeight - f.offsetTop - f.offsetHeight,
                J = Math.max(Re, ve + ($ ? Ue : 0) + F + M),
                de = X + J;
              a.style.height = de + "px";
            } else {
              const $ = G.length > 0 && _ === G[0].ref.current;
              a.style.top = "0px";
              const J = Math.max(ge, V + f.offsetTop + ($ ? Je : 0) + ve) + re;
              (a.style.height = J + "px"), (f.scrollTop = X - ge + f.offsetTop);
            }
            (a.style.margin = `${me}px 0`),
              (a.style.minHeight = ne + "px"),
              (a.style.maxHeight = z + "px"),
              o == null || o(),
              requestAnimationFrame(() => (p.current = !0));
          }
        }, [m, i.trigger, i.valueNode, a, c, f, _, h, i.dir, o]);
      le(() => b(), [b]);
      const [w, x] = E();
      le(() => {
        c && x(window.getComputedStyle(c).zIndex);
      }, [c]);
      const P = Y(
        (C) => {
          C && v.current === !0 && (b(), y == null || y(), (v.current = !1));
        },
        [b, y]
      );
      return g(Fc, {
        scope: n,
        contentWrapper: a,
        shouldExpandOnScrollRef: p,
        onScrollButtonChange: P,
        children: g("div", {
          ref: l,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: w,
          },
          children: g(te.div, {
            ...r,
            ref: u,
            style: { boxSizing: "border-box", maxHeight: "100%", ...r.style },
          }),
        }),
      });
    });
  ki.displayName = Lc;
  var Mc = "SelectPopperPosition",
    Gn = L((e, t) => {
      const {
          __scopeSelect: n,
          align: o = "start",
          collisionPadding: r = me,
          ...i
        } = e,
        s = Xt(n);
      return g(Dl, {
        ...s,
        ...i,
        ref: t,
        align: o,
        collisionPadding: r,
        style: {
          boxSizing: "border-box",
          ...i.style,
          "--radix-select-content-transform-origin":
            "var(--radix-popper-transform-origin)",
          "--radix-select-content-available-width":
            "var(--radix-popper-available-width)",
          "--radix-select-content-available-height":
            "var(--radix-popper-available-height)",
          "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-select-trigger-height": "var(--radix-popper-anchor-height)",
        },
      });
    });
  Gn.displayName = Mc;
  var [Fc, Xn] = ct(Ze, {}),
    Zn = "SelectViewport",
    Ii = L((e, t) => {
      const { __scopeSelect: n, nonce: o, ...r } = e,
        i = He(Zn, n),
        s = Xn(Zn, n),
        a = ie(t, i.onViewportChange),
        l = D(0);
      return g(oe, {
        children: [
          g("style", {
            dangerouslySetInnerHTML: {
              __html:
                "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}",
            },
            nonce: o,
          }),
          g(Yt.Slot, {
            scope: n,
            children: g(te.div, {
              "data-radix-select-viewport": "",
              role: "presentation",
              ...r,
              ref: a,
              style: {
                position: "relative",
                flex: 1,
                overflow: "hidden auto",
                ...r.style,
              },
              onScroll: ee(r.onScroll, (c) => {
                const d = c.currentTarget,
                  { contentWrapper: u, shouldExpandOnScrollRef: m } = s;
                if (m != null && m.current && u) {
                  const p = Math.abs(l.current - d.scrollTop);
                  if (p > 0) {
                    const v = window.innerHeight - me * 2,
                      f = parseFloat(u.style.minHeight),
                      _ = parseFloat(u.style.height),
                      h = Math.max(f, _);
                    if (h < v) {
                      const y = h + p,
                        b = Math.min(v, y),
                        w = y - b;
                      (u.style.height = b + "px"),
                        u.style.bottom === "0px" &&
                          ((d.scrollTop = w > 0 ? w : 0),
                          (u.style.justifyContent = "flex-end"));
                    }
                  }
                }
                l.current = d.scrollTop;
              }),
            }),
          }),
        ],
      });
    });
  Ii.displayName = Zn;
  var Ti = "SelectGroup",
    [Bc, qc] = ct(Ti),
    $c = L((e, t) => {
      const { __scopeSelect: n, ...o } = e,
        r = In();
      return g(Bc, {
        scope: n,
        id: r,
        children: g(te.div, {
          role: "group",
          "aria-labelledby": r,
          ...o,
          ref: t,
        }),
      });
    });
  $c.displayName = Ti;
  var Ri = "SelectLabel",
    Wc = L((e, t) => {
      const { __scopeSelect: n, ...o } = e,
        r = qc(Ri, n);
      return g(te.div, { id: r.id, ...o, ref: t });
    });
  Wc.displayName = Ri;
  var Zt = "SelectItem",
    [Vc, Ni] = ct(Zt),
    Oi = L((e, t) => {
      const {
          __scopeSelect: n,
          value: o,
          disabled: r = !1,
          textValue: i,
          ...s
        } = e,
        a = Ve(Zt, n),
        l = He(Zt, n),
        c = a.value === o,
        [d, u] = E(i ?? ""),
        [m, p] = E(!1),
        v = ie(t, (y) => {
          var b;
          return (b = l.itemRefCallback) == null ? void 0 : b.call(l, y, o, r);
        }),
        f = In(),
        _ = D("touch"),
        h = () => {
          r || (a.onValueChange(o), a.onOpenChange(!1));
        };
      if (o === "")
        throw new Error(
          "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
        );
      return g(Vc, {
        scope: n,
        value: o,
        disabled: r,
        textId: f,
        isSelected: c,
        onItemTextChange: Y((y) => {
          u((b) => b || ((y == null ? void 0 : y.textContent) ?? "").trim());
        }, []),
        children: g(Yt.ItemSlot, {
          scope: n,
          value: o,
          disabled: r,
          textValue: d,
          children: g(te.div, {
            role: "option",
            "aria-labelledby": f,
            "data-highlighted": m ? "" : void 0,
            "aria-selected": c && m,
            "data-state": c ? "checked" : "unchecked",
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            tabIndex: r ? void 0 : -1,
            ...s,
            ref: v,
            onFocus: ee(s.onFocus, () => p(!0)),
            onBlur: ee(s.onBlur, () => p(!1)),
            onClick: ee(s.onClick, () => {
              _.current !== "mouse" && h();
            }),
            onPointerUp: ee(s.onPointerUp, () => {
              _.current === "mouse" && h();
            }),
            onPointerDown: ee(s.onPointerDown, (y) => {
              _.current = y.pointerType;
            }),
            onPointerMove: ee(s.onPointerMove, (y) => {
              var b;
              (_.current = y.pointerType),
                r
                  ? (b = l.onItemLeave) == null || b.call(l)
                  : _.current === "mouse" &&
                    y.currentTarget.focus({ preventScroll: !0 });
            }),
            onPointerLeave: ee(s.onPointerLeave, (y) => {
              var b;
              y.currentTarget === document.activeElement &&
                ((b = l.onItemLeave) == null || b.call(l));
            }),
            onKeyDown: ee(s.onKeyDown, (y) => {
              var w;
              (((w = l.searchRef) == null ? void 0 : w.current) !== "" &&
                y.key === " ") ||
                (Pc.includes(y.key) && h(),
                y.key === " " && y.preventDefault());
            }),
          }),
        }),
      });
    });
  Oi.displayName = Zt;
  var yt = "SelectItemText",
    Di = L((e, t) => {
      const { __scopeSelect: n, className: o, style: r, ...i } = e,
        s = Ve(yt, n),
        a = He(yt, n),
        l = Ni(yt, n),
        c = Tc(yt, n),
        [d, u] = E(null),
        m = ie(
          t,
          (h) => u(h),
          l.onItemTextChange,
          (h) => {
            var y;
            return (y = a.itemTextRefCallback) == null
              ? void 0
              : y.call(a, h, l.value, l.disabled);
          }
        ),
        p = d == null ? void 0 : d.textContent,
        v = Z(
          () =>
            g(
              "option",
              { value: l.value, disabled: l.disabled, children: p },
              l.value
            ),
          [l.disabled, l.value, p]
        ),
        { onNativeOptionAdd: f, onNativeOptionRemove: _ } = c;
      return (
        le(() => (f(v), () => _(v)), [f, _, v]),
        g(oe, {
          children: [
            g(te.span, { id: l.textId, ...i, ref: m }),
            l.isSelected && s.valueNode && !s.valueNodeHasChildren
              ? It(i.children, s.valueNode)
              : null,
          ],
        })
      );
    });
  Di.displayName = yt;
  var Li = "SelectItemIndicator",
    Mi = L((e, t) => {
      const { __scopeSelect: n, ...o } = e;
      return Ni(Li, n).isSelected
        ? g(te.span, { "aria-hidden": !0, ...o, ref: t })
        : null;
    });
  Mi.displayName = Li;
  var Jn = "SelectScrollUpButton",
    Fi = L((e, t) => {
      const n = He(Jn, e.__scopeSelect),
        o = Xn(Jn, e.__scopeSelect),
        [r, i] = E(!1),
        s = ie(t, o.onScrollButtonChange);
      return (
        le(() => {
          if (n.viewport && n.isPositioned) {
            let a = function () {
              const c = l.scrollTop > 0;
              i(c);
            };
            const l = n.viewport;
            return (
              a(),
              l.addEventListener("scroll", a),
              () => l.removeEventListener("scroll", a)
            );
          }
        }, [n.viewport, n.isPositioned]),
        r
          ? g(qi, {
              ...e,
              ref: s,
              onAutoScroll: () => {
                const { viewport: a, selectedItem: l } = n;
                a && l && (a.scrollTop = a.scrollTop - l.offsetHeight);
              },
            })
          : null
      );
    });
  Fi.displayName = Jn;
  var Qn = "SelectScrollDownButton",
    Bi = L((e, t) => {
      const n = He(Qn, e.__scopeSelect),
        o = Xn(Qn, e.__scopeSelect),
        [r, i] = E(!1),
        s = ie(t, o.onScrollButtonChange);
      return (
        le(() => {
          if (n.viewport && n.isPositioned) {
            let a = function () {
              const c = l.scrollHeight - l.clientHeight,
                d = Math.ceil(l.scrollTop) < c;
              i(d);
            };
            const l = n.viewport;
            return (
              a(),
              l.addEventListener("scroll", a),
              () => l.removeEventListener("scroll", a)
            );
          }
        }, [n.viewport, n.isPositioned]),
        r
          ? g(qi, {
              ...e,
              ref: s,
              onAutoScroll: () => {
                const { viewport: a, selectedItem: l } = n;
                a && l && (a.scrollTop = a.scrollTop + l.offsetHeight);
              },
            })
          : null
      );
    });
  Bi.displayName = Qn;
  var qi = L((e, t) => {
      const { __scopeSelect: n, onAutoScroll: o, ...r } = e,
        i = He("SelectScrollButton", n),
        s = D(null),
        a = Gt(n),
        l = Y(() => {
          s.current !== null &&
            (window.clearInterval(s.current), (s.current = null));
        }, []);
      return (
        O(() => () => l(), [l]),
        le(() => {
          var d;
          const c = a().find((u) => u.ref.current === document.activeElement);
          (d = c == null ? void 0 : c.ref.current) == null ||
            d.scrollIntoView({ block: "nearest" });
        }, [a]),
        g(te.div, {
          "aria-hidden": !0,
          ...r,
          ref: t,
          style: { flexShrink: 0, ...r.style },
          onPointerDown: ee(r.onPointerDown, () => {
            s.current === null && (s.current = window.setInterval(o, 50));
          }),
          onPointerMove: ee(r.onPointerMove, () => {
            var c;
            (c = i.onItemLeave) == null || c.call(i),
              s.current === null && (s.current = window.setInterval(o, 50));
          }),
          onPointerLeave: ee(r.onPointerLeave, () => {
            l();
          }),
        })
      );
    }),
    Hc = "SelectSeparator",
    Uc = L((e, t) => {
      const { __scopeSelect: n, ...o } = e;
      return g(te.div, { "aria-hidden": !0, ...o, ref: t });
    });
  Uc.displayName = Hc;
  var eo = "SelectArrow",
    zc = L((e, t) => {
      const { __scopeSelect: n, ...o } = e,
        r = Xt(n),
        i = Ve(eo, n),
        s = He(eo, n);
      return i.open && s.position === "popper"
        ? g(Ll, { ...r, ...o, ref: t })
        : null;
    });
  zc.displayName = eo;
  function $i(e) {
    return e === "" || e === void 0;
  }
  var Wi = L((e, t) => {
    const { value: n, ...o } = e,
      r = D(null),
      i = ie(t, r),
      s = Bl(n);
    return (
      O(() => {
        const a = r.current,
          l = window.HTMLSelectElement.prototype,
          d = Object.getOwnPropertyDescriptor(l, "value").set;
        if (s !== n && d) {
          const u = new Event("change", { bubbles: !0 });
          d.call(a, n), a.dispatchEvent(u);
        }
      }, [s, n]),
      g(ri, {
        asChild: !0,
        children: g("select", { ...o, ref: i, defaultValue: n }),
      })
    );
  });
  Wi.displayName = "BubbleSelect";
  function Vi(e) {
    const t = ke(e),
      n = D(""),
      o = D(0),
      r = Y(
        (s) => {
          const a = n.current + s;
          t(a),
            (function l(c) {
              (n.current = c),
                window.clearTimeout(o.current),
                c !== "" && (o.current = window.setTimeout(() => l(""), 1e3));
            })(a);
        },
        [t]
      ),
      i = Y(() => {
        (n.current = ""), window.clearTimeout(o.current);
      }, []);
    return O(() => () => window.clearTimeout(o.current), []), [n, r, i];
  }
  function Hi(e, t, n) {
    const r = t.length > 1 && Array.from(t).every((c) => c === t[0]) ? t[0] : t,
      i = n ? e.indexOf(n) : -1;
    let s = jc(e, Math.max(i, 0));
    r.length === 1 && (s = s.filter((c) => c !== n));
    const l = s.find((c) =>
      c.textValue.toLowerCase().startsWith(r.toLowerCase())
    );
    return l !== n ? l : void 0;
  }
  function jc(e, t) {
    return e.map((n, o) => e[(t + o) % e.length]);
  }
  var Kc = yi,
    Yc = wi,
    Gc = Ci,
    Xc = Si,
    Zc = Ei,
    Jc = Ii,
    Qc = Oi,
    eu = Di,
    tu = Mi,
    nu = Fi,
    ou = Bi;
  function to(e, t) {
    if (e == null) return {};
    var n = {},
      o = Object.keys(e),
      r,
      i;
    for (i = 0; i < o.length; i++)
      (r = o[i]), !(t.indexOf(r) >= 0) && (n[r] = e[r]);
    return n;
  }
  var ru = ["color"],
    iu = L(function (e, t) {
      var n = e.color,
        o = n === void 0 ? "currentColor" : n,
        r = to(e, ru);
      return H(
        "svg",
        Object.assign(
          {
            width: "15",
            height: "15",
            viewBox: "0 0 15 15",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          r,
          { ref: t }
        ),
        H("path", {
          d: "M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z",
          fill: o,
          fillRule: "evenodd",
          clipRule: "evenodd",
        })
      );
    }),
    su = ["color"],
    Ui = L(function (e, t) {
      var n = e.color,
        o = n === void 0 ? "currentColor" : n,
        r = to(e, su);
      return H(
        "svg",
        Object.assign(
          {
            width: "15",
            height: "15",
            viewBox: "0 0 15 15",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          r,
          { ref: t }
        ),
        H("path", {
          d: "M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",
          fill: o,
          fillRule: "evenodd",
          clipRule: "evenodd",
        })
      );
    }),
    au = ["color"],
    lu = L(function (e, t) {
      var n = e.color,
        o = n === void 0 ? "currentColor" : n,
        r = to(e, au);
      return H(
        "svg",
        Object.assign(
          {
            width: "15",
            height: "15",
            viewBox: "0 0 15 15",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          r,
          { ref: t }
        ),
        H("path", {
          d: "M3.13523 8.84197C3.3241 9.04343 3.64052 9.05363 3.84197 8.86477L7.5 5.43536L11.158 8.86477C11.3595 9.05363 11.6759 9.04343 11.8648 8.84197C12.0536 8.64051 12.0434 8.32409 11.842 8.13523L7.84197 4.38523C7.64964 4.20492 7.35036 4.20492 7.15803 4.38523L3.15803 8.13523C2.95657 8.32409 2.94637 8.64051 3.13523 8.84197Z",
          fill: o,
          fillRule: "evenodd",
          clipRule: "evenodd",
        })
      );
    });
  function zi({ flagCode: e }) {
    return g("img", {
      className: S.flag,
      src: `https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/${e}.svg`,
      alt: `${e.toUpperCase()} flag`,
    });
  }
  function cu({ portal: e, value: t, options: n, onChange: o }) {
    const r = Z(
        () =>
          n
            .map((s) => Cn[s])
            .filter(Boolean)
            .sort((s, a) => s.name.localeCompare(a.name)),
        [n]
      ),
      i = Cn[t] ?? Cn.en;
    return g(Kc, {
      value: t,
      onValueChange: o,
      children: [
        g(Yc, {
          className: ae(S.btn, S.secondary, S.select),
          "aria-label": "Food",
          children: [
            g(zi, { flagCode: i.flagCode }),
            g("span", { className: S.selectValue, children: i.name }),
            g(Gc, { className: S.selectIcon, children: g(Ui, {}) }),
          ],
        }),
        g(Xc, {
          container: e,
          children: g(Zc, {
            className: S.selectContent,
            position: "popper",
            sideOffset: 8,
            align: "end",
            side: "top",
            children: [
              g(nu, { className: S.selectScrollButton, children: g(lu, {}) }),
              g(Jc, {
                className: S.selectViewport,
                children: r.map((s) =>
                  g(Qc, {
                    value: s.languageCode,
                    className: ae(S.selectItem),
                    children: [
                      g(zi, { flagCode: s.flagCode }),
                      g(eu, { children: s.name }),
                      g(tu, {
                        className: S.selectItemIndicator,
                        children: g(iu, {}),
                      }),
                    ],
                  })
                ),
              }),
              g(ou, { className: S.selectScrollButton, children: g(Ui, {}) }),
            ],
          }),
        }),
      ],
    });
  }
  function uu({ value: e, children: t }) {
    const [n, o] = E(!1);
    return (
      O(() => {
        if (n) {
          const r = setTimeout(() => {
            o(!1);
          }, 2e3);
          return () => {
            clearTimeout(r);
          };
        }
      }, [n]),
      g("button", {
        className: ae(S.btn, S.secondary),
        onClick: () => {
          navigator.clipboard.writeText(e), o(!0);
        },
        children: n ? "Copied!" : t,
      })
    );
  }
  const du = 1e3 * 60,
    fu = 1e3 * 5;
  function pu({
    termsKey: e,
    config: t,
    avatar: n,
    contents: o,
    variant: r,
    feedbackMode: i,
    location: s,
    languageConfig: a,
  }) {
    const l = Z(() => (e ? !!localStorage.getItem(e) : !1), [e]),
      c = D(null),
      d = D(null),
      u = D(null),
      [m, p] = E(l),
      [v, f] = E(!1),
      [_, h] = E(null),
      [y, b] = E(!1),
      [w, x] = E(!1),
      [P, C] = E(null),
      k = Bs({
        onDisconnect: (R) => {
          R.reason === "error" &&
            (C(R.message),
            console.error(
              "[ConversationalAI] Disconnected due to an error:",
              R.message
            ));
        },
      }),
      {
        startSession: A,
        endSession: B,
        sendFeedback: G,
        canSendFeedback: z,
        status: U,
        isSpeaking: W,
      } = k,
      V = U === "disconnected",
      q = w || r !== "expandable" || !V,
      [M, N] = E(null),
      [j, ne] = E(0),
      [fe, Je] = E(a.defaultValue);
    O(() => {
      if (V) {
        const R = setTimeout(() => N(null), 3e5);
        return () => clearTimeout(R);
      }
    }, [V]),
      O(() => () => B(), []),
      O(() => {
        var R;
        if (u.current) {
          const $ = () => {
            let J = null;
            for (const de of u.current.assignedElements())
              if (de instanceof HTMLFormElement) {
                J = de;
                break;
              }
            h(J), b((J == null ? void 0 : J.checkValidity()) ?? !1);
          };
          $();
          const F = u.current;
          return (
            F.addEventListener("slotchange", $),
            () => F.removeEventListener("slotchange", $)
          );
        } else
          h(d.current),
            b(((R = d.current) == null ? void 0 : R.checkValidity()) ?? !1);
      }, [o.terms]),
      O(() => {
        l || !_ ? (f(!1), p(!0)) : !l && _ && p(!1);
      }, [l, _]);
    async function Ue(R) {
      const $ = new CustomEvent("elevenlabs-convai:call", {
        bubbles: !0,
        composed: !0,
        detail: {
          config: {
            ...t,
            overrides: { agent: { language: a.options ? fe : void 0 } },
          },
        },
      });
      R.dispatchEvent($), C(null);
      try {
        const F = await A($.detail.config);
        ne(0), N(F);
      } catch (F) {
        let J = "Could not start a conversation.";
        F instanceof CloseEvent
          ? (J = F.reason || J)
          : F instanceof Error && (J = F.message || J),
          C(J);
      }
    }
    const [ge, Re] = E(z);
    O(() => {
      if (z) {
        const R = setTimeout(() => {
          Re(!0);
        }, fu);
        return () => clearTimeout(R);
      } else Re(!1);
    }, [z]);
    const [ve, I] = Z(
        () =>
          Date.now() - j < du
            ? []
            : V && M && (i === "end" || i === "during")
            ? [
                "Was the call helpful?",
                (R) => {
                  Fs(M, R, s === "us" ? Ro : To).catch(() => {
                    console.error(
                      `[ConversationalAI] Cannot send feedback for conversation ${M}`
                    );
                  }),
                    N(null),
                    ne(Date.now());
                },
              ]
            : !V && ge && i === "during"
            ? [
                "Is this response helpful?",
                (R) => {
                  G(R), ne(Date.now());
                },
              ]
            : [],
        [V, M, ge, i, s, j, W]
      ),
      [X, re] = E(null);
    return (
      O(() => {
        ve && re(ve);
      }, [ve]),
      g("div", {
        ref: c,
        className: ae(
          S.wrapper,
          S[r],
          q && S.open,
          (v || P) && S.customContent,
          a.options && S.hasLanguageSelect
        ),
        children: [
          r !== "expandable" && g(pr, {}),
          r === "expandable" &&
            g("button", {
              disabled: !V,
              className: ae(S.btn, S.minimize),
              onClick: () => x(!w),
              title: o.expand,
              children: [
                g(qs, { className: S.openContent }),
                g("div", {
                  className: S.closedContent,
                  children: [
                    g(ur, { className: S.icon }),
                    g("div", { className: S.ellipsis, children: o.expand }),
                  ],
                }),
              ],
            }),
          g("div", {
            className: S.box,
            children: [
              P &&
                g("div", {
                  className: S.error,
                  children: [
                    g("h1", { children: "An error occurred" }),
                    g("p", { children: P }),
                    M && g("p", { children: ["Conversation ID: ", M] }),
                    g("div", {
                      className: S.termsFooter,
                      children: [
                        M && g(uu, { value: M, children: "Copy ID" }),
                        g("button", {
                          className: ae(S.btn, S.secondary),
                          onClick: () => {
                            C(null), ne(Date.now());
                          },
                          children: "Close",
                        }),
                      ],
                    }),
                  ],
                }),
              g("div", {
                className: ae(S.terms, v && !P && S.show),
                children: [
                  o.terms
                    ? g("form", {
                        ref: d,
                        onInput: () => {
                          b((_ == null ? void 0 : _.checkValidity()) ?? !1);
                        },
                        dangerouslySetInnerHTML: { __html: o.terms },
                      })
                    : g("slot", {
                        onInput: () => {
                          b((_ == null ? void 0 : _.checkValidity()) ?? !1);
                        },
                        ref: u,
                        name: "terms",
                      }),
                  g("div", {
                    class: S.termsFooter,
                    children: [
                      g("button", {
                        className: ae(S.btn, S.secondary),
                        type: "button",
                        onClick: () => {
                          f(!1);
                        },
                        children: "Cancel",
                      }),
                      g("button", {
                        className: ae(S.btn, !y && S.disabled),
                        type: "button",
                        onClick: (R) => {
                          _ != null &&
                            _.reportValidity() &&
                            (p(!0),
                            e && localStorage.setItem(e, "true"),
                            f(!1),
                            Ue(R.currentTarget));
                        },
                        children: "Agree",
                      }),
                    ],
                  }),
                ],
              }),
              !v &&
                !P &&
                g(oe, {
                  children: [
                    g(Ks, { config: n, ...k }),
                    g("div", {
                      className: S.actions,
                      children: [
                        r !== "compact" &&
                          g("p", {
                            className: S.status,
                            children: V
                              ? o.action
                              : W
                              ? o.speaking
                              : o.listening,
                          }),
                        V
                          ? g("div", {
                              className: S.actionButtons,
                              children: [
                                g("button", {
                                  className: S.btn,
                                  title: o.startCall,
                                  onClick: (R) => {
                                    if (!m) {
                                      f(!0);
                                      return;
                                    }
                                    Ue(R.currentTarget);
                                  },
                                  children: [
                                    g(ur, { className: S.icon }),
                                    g("div", {
                                      className: S.ellipsis,
                                      children: o.startCall,
                                    }),
                                  ],
                                }),
                                a.options &&
                                  g(cu, {
                                    value: fe,
                                    onChange: Je,
                                    options: a.options,
                                    portal: c.current ?? void 0,
                                  }),
                              ],
                            })
                          : g("button", {
                              className: ae(S.btn, S.secondary),
                              title: o.endCall,
                              onClick: () => B(),
                              children: [
                                g($s, { className: S.icon }),
                                g("div", {
                                  className: S.ellipsis,
                                  children: o.endCall,
                                }),
                              ],
                            }),
                        r === "expandable" && g(pr, {}),
                      ],
                    }),
                  ],
                }),
            ],
          }),
          i !== "none" &&
            g("div", {
              className: ae(S.feedback, q && I && !P && S.show),
              children: [
                X,
                g("button", {
                  className: ae(S.btn, S.secondary, S.iconBtn),
                  title: "Yes",
                  onClick: () => (I == null ? void 0 : I(!0)),
                  children: g(Ws, { className: S.icon }),
                }),
                g("button", {
                  className: ae(S.btn, S.secondary, S.iconBtn),
                  title: "No",
                  onClick: () => (I == null ? void 0 : I(!1)),
                  children: g(Vs, { className: S.icon }),
                }),
              ],
            }),
        ],
      })
    );
  }
  const ji = ["full", "compact", "expandable"];
  function hu(e) {
    return ji.includes(e) ? e : ji[0];
  }
  function _u(e = "us") {
    switch (e) {
      case "us":
      case "global":
        return e;
      default:
        return (
          console.warn(
            `[ConversationalAI] Invalid server-location: ${e}. Defaulting to "us"`
          ),
          "us"
        );
    }
  }
  const mu = [
      "variant",
      "override-config",
      "avatar-image-url",
      "avatar-orb-color-1",
      "avatar-orb-color-2",
      "agent-id",
      "signed-url",
      "action-text",
      "start-call-text",
      "end-call-text",
      "expand-text",
      "listening-text",
      "speaking-text",
      "terms-key",
      "server-location",
      "language",
    ],
    gu =
      '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400&display=swap";*{box-sizing:border-box}:host{pointer-events:none;z-index:1000}._wrapper_p1gqy_15{display:flex;flex-direction:column-reverse;align-items:flex-end;gap:16px;font-family:Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif}._box_p1gqy_36{background-color:var(--el-bg-color);color:var(--el-text-color);border:1px solid var(--el-border-color);display:flex;align-items:center;gap:16px;padding:20px;border-radius:var(--el-border-radius);pointer-events:none;opacity:0;transition:opacity .2s var(--el-timing-function);max-width:calc(100vw - 64px);max-height:calc(100vh - 64px)}._open_p1gqy_54 ._box_p1gqy_36{pointer-events:initial;opacity:1}._expandable_p1gqy_59 ._box_p1gqy_36{flex-direction:column;padding:24px;gap:20px}._expandable_p1gqy_59:not(._customContent_p1gqy_65) ._box_p1gqy_36{padding-top:40px}._compact_p1gqy_69:not(._customContent_p1gqy_65) ._box_p1gqy_36{gap:8px;padding:12px;border-radius:32px}._avatar_p1gqy_75{position:relative;width:54px;height:54px}._compact_p1gqy_69 ._avatar_p1gqy_75{width:36px;height:36px}._expandable_p1gqy_59 ._avatar_p1gqy_75{width:86px;height:86px}._avatarBackground_p1gqy_91{border-radius:50%;position:absolute;top:-1px;left:-1px;right:-1px;bottom:-1px;background-color:var(--el-border-color)}._avatarImage_p1gqy_101{border-radius:50%;position:absolute;top:0;left:0;right:0;bottom:0;background-size:cover;background-color:var(--el-bg-color);overflow:hidden}._canvas_p1gqy_113{width:100%;height:100%}._actions_p1gqy_118{min-width:156px;width:min-content;display:flex;gap:11px;flex-direction:column}._hasLanguageSelect_p1gqy_126 ._actions_p1gqy_118{min-width:200px}._expandable_p1gqy_59 ._actions_p1gqy_118{min-width:180px;width:min-content;justify-content:end}._actionButtons_p1gqy_136{display:flex;gap:8px}._expandable_p1gqy_59 ._actionButtons_p1gqy_136{flex-direction:column}._status_p1gqy_145{font-size:14px;text-wrap:nowrap;line-height:10px;margin:0;color:var(--el-text-color)}._expandable_p1gqy_59 ._status_p1gqy_145{text-align:center;text-wrap:wrap;line-height:18px}._btn_p1gqy_159{--el-ring-color: transparent;--el-ring-radius: 0;--el-focus-ring-radius: 0;--el-border-width: 0;background-color:var(--el-btn-color);color:var(--el-btn-text-color);border-radius:var(--el-btn-radius);box-shadow:0 1px 2px #1018280d,0 0 0 var(--el-ring-radius) var(--el-ring-color),0 0 0 var(--el-focus-ring-radius) var(--el-focus-color),inset 0 0 0 var(--el-border-width) var(--el-border-color);cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;padding:0 16px;display:inline-flex;align-items:center;justify-content:center;white-space:nowrap;font-size:14px;font-weight:500;transition:all .2s var(--el-timing-function);flex-grow:1;height:36px;max-width:320px}._expandable_p1gqy_59 ._btn_p1gqy_159{flex-grow:0}._btn_p1gqy_159:hover{--el-ring-color: rgba(125, 135, 155, .2);--el-ring-radius: 3px}._btn_p1gqy_159:active{--el-ring-color: rgba(101, 115, 135, .3);--el-ring-radius: 3px}._btn_p1gqy_159._disabled_p1gqy_205{opacity:.5}._btn_p1gqy_159:disabled{opacity:.5;pointer-events:none}._btn_p1gqy_159:focus-visible{--el-focus-ring-radius: 1px;outline:none}._btn_p1gqy_159._secondary_p1gqy_219{--el-border-width: 1px;background-color:var(--el-bg-color);color:var(--el-text-color)}._btn_p1gqy_159._secondary_p1gqy_219:hover{--el-ring-color: rgba(135, 145, 165, .1)}._btn_p1gqy_159._secondary_p1gqy_219:active{--el-ring-color: rgba(125, 135, 155, .2)}._btn_p1gqy_159._iconBtn_p1gqy_233{height:32px}._btn_p1gqy_159._select_p1gqy_237{flex-grow:0;padding:6px;gap:4px}._ellipsis_p1gqy_243{overflow:hidden;text-overflow:ellipsis}._icon_p1gqy_233{margin-left:-6px;margin-right:4px;width:16px;height:16px;flex-shrink:0}._iconBtn_p1gqy_233 ._icon_p1gqy_233{margin-left:-6px;margin-right:-6px;width:12px;height:12px}._minimize_p1gqy_263{pointer-events:all;display:grid;grid-template-columns:1fr;position:relative;overflow:hidden}._open_p1gqy_54 ._minimize_p1gqy_263{grid-template-columns:0fr;align-items:center;height:36px;padding:0 18px}._openContent_p1gqy_278{position:absolute;top:7px;left:6px;opacity:0;pointer-events:none;rotate:90deg}._open_p1gqy_54 ._openContent_p1gqy_278{opacity:1;pointer-events:initial;rotate:0deg}._closedContent_p1gqy_293{min-width:0;display:flex;align-items:center;justify-content:center}._open_p1gqy_54 ._closedContent_p1gqy_293{opacity:0;pointer-events:none}._openContent_p1gqy_278,._closedContent_p1gqy_293{transition:all .2s var(--el-timing-function)}._poweredBy_p1gqy_310{pointer-events:all;color:var(--el-text-color);font-size:10px;opacity:.5;align-self:center;text-align:center}._compact_p1gqy_69 ._poweredBy_p1gqy_310,._full_p1gqy_320 ._poweredBy_p1gqy_310{margin:-8px 0 -20px}._terms_p1gqy_324{display:none;max-width:480px;font-size:14px;line-height:20px;accent-color:var(--el-btn-color)}._terms_p1gqy_324 form{display:flex;flex-direction:column;gap:16px}._terms_p1gqy_324 p,._terms_p1gqy_324 ul,._terms_p1gqy_324 ol,._terms_p1gqy_324 h1,._terms_p1gqy_324 h2,._terms_p1gqy_324 h3,._terms_p1gqy_324 h4,._terms_p1gqy_324 h5,._terms_p1gqy_324 h6{margin:0;font-weight:400}._terms_p1gqy_324 a{color:var(--el-text-color)}._terms_p1gqy_324 ._strong_p1gqy_355{font-weight:500}._terms_p1gqy_324 h1{font-size:35px}._terms_p1gqy_324 h2{font-size:28px}._terms_p1gqy_324 h3{font-size:24px}._terms_p1gqy_324 h4{font-size:20px}._terms_p1gqy_324 h5{font-size:18px}._terms_p1gqy_324 h6{font-size:16px}._terms_p1gqy_324._show_p1gqy_383{display:block}._termsFooter_p1gqy_387{display:flex;gap:8px;justify-content:end;margin-top:20px}._termsFooter_p1gqy_387 ._btn_p1gqy_159{flex-grow:0}._feedback_p1gqy_398{display:flex;align-items:center;gap:8px;z-index:1;opacity:0;translate:0 8px;transition:all .6s var(--el-timing-function);font-size:10px;text-wrap:nowrap;line-height:10px;margin:0;color:var(--el-text-color)}._feedback_p1gqy_398._show_p1gqy_383{opacity:.5;translate:0 0;pointer-events:auto}._feedback_p1gqy_398._show_p1gqy_383:hover{opacity:1}._flag_p1gqy_424{width:24px;height:24px;border-radius:50%;object-fit:cover;border:1px solid var(--el-border-color)}._selectContent_p1gqy_432{z-index:1;overflow:hidden;background-color:var(--el-bg-color);color:var(--el-text-color);border:1px solid var(--el-border-color);border-radius:var(--el-border-radius);max-height:min(384px,var(--radix-select-content-available-height));min-width:var(--radix-select-trigger-width)}._selectViewport_p1gqy_443{padding:8px}._selectValue_p1gqy_447{display:none;margin-right:auto;margin-left:auto}._selectIcon_p1gqy_453{padding-right:4px}._expandable_p1gqy_59 ._selectValue_p1gqy_447{display:inline}._selectItem_p1gqy_461{display:flex;-webkit-user-select:none;user-select:none;align-items:center;padding:6px 32px 6px 6px;gap:8px;cursor:pointer;border-radius:var(--el-border-radius);position:relative}._selectItem_p1gqy_461:focus-visible{outline:none}._selectItem_p1gqy_461[data-highlighted]{background-color:#8080801a}._selectItemIndicator_p1gqy_480{position:absolute;right:0;width:24px;display:inline-flex;align-items:center;justify-content:center}._selectScrollButton_p1gqy_489{display:flex;align-items:center;justify-content:center;height:24px;background-color:var(--el-bg-color);cursor:default}._error_p1gqy_498{max-width:320px;font-size:14px;line-height:20px}._error_p1gqy_498 h1{margin:0 0 16px;font-size:20px;font-weight:400}._error_p1gqy_498 p{margin:0}';
  function vu({ config: e }) {
    let t = gu;
    const n = Z(
      () => `:host {
  --el-bg-color: ${(e == null ? void 0 : e.bg_color) ?? "#fff"};
  --el-text-color: ${(e == null ? void 0 : e.text_color) ?? "#000"};
  --el-border-color: ${(e == null ? void 0 : e.border_color) ?? "#e1e1e1"};
  --el-border-radius: ${(e == null ? void 0 : e.border_radius) ?? "20"}px;
  --el-btn-color: ${(e == null ? void 0 : e.btn_color) ?? "#000"};
  --el-btn-text-color: ${(e == null ? void 0 : e.btn_text_color) ?? "#fff"};
  --el-btn-radius: ${(e == null ? void 0 : e.btn_radius) ?? "32"}px;
  --el-focus-color: ${(e == null ? void 0 : e.focus_color) ?? "#000"};
  --el-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}`,
      [e]
    );
    return g("style", { children: [n, t] });
  }
  function yu({
    variant: e,
    language: t,
    ["terms-key"]: n,
    ["agent-id"]: o,
    ["signed-url"]: r,
    ["override-config"]: i,
    ["avatar-image-url"]: s,
    ["avatar-orb-color-1"]: a,
    ["avatar-orb-color-2"]: l,
    ["action-text"]: c,
    ["start-call-text"]: d,
    ["end-call-text"]: u,
    ["expand-text"]: m,
    ["listening-text"]: p,
    ["speaking-text"]: v,
    ["server-location"]: f,
  }) {
    const _ = Z(() => _u(f), [f]),
      [h, y] = E(null),
      [b, w] = E(null),
      x = Z(
        () =>
          s
            ? { type: "image", url: s }
            : a && l
            ? { type: "orb", color_1: a, color_2: l }
            : (h == null ? void 0 : h.avatar) ?? null,
        [s, a, l, h]
      ),
      P = Z(
        () => ({
          startCall:
            d ?? (h == null ? void 0 : h.start_call_text) ?? "Start a call",
          endCall: u ?? (h == null ? void 0 : h.end_call_text) ?? "End",
          action: c ?? (h == null ? void 0 : h.action_text) ?? "Need help?",
          expand: m ?? (h == null ? void 0 : h.expand_text) ?? "Chat with AI",
          listening:
            p ?? (h == null ? void 0 : h.listening_text) ?? "Listening",
          speaking:
            v ?? (h == null ? void 0 : h.speaking_text) ?? "Talk to interrupt",
          terms: (h == null ? void 0 : h.terms_html) ?? "",
        }),
        [c, d, u, m, p, v, h]
      ),
      C = Z(() => {
        var k;
        return {
          defaultValue:
            t &&
            (k = h == null ? void 0 : h.supported_language_overrides) != null &&
            k.includes(t)
              ? t
              : (h == null ? void 0 : h.language) ?? "en",
          options: h == null ? void 0 : h.supported_language_overrides,
        };
      }, [h, t]);
    return (
      O(() => {
        if (i)
          try {
            const A = JSON.parse(i);
            if (A) {
              y(A);
              return;
            }
          } catch (A) {
            console.error(
              `[ConversationalAI] Cannot parse override-config: ${
                A == null ? void 0 : A.message
              }`
            );
          }
        if (!o) {
          y(null);
          return;
        }
        const k = new AbortController();
        return (
          bu(o, _, k.signal)
            .then((A) => {
              k.signal.aborted || y(A);
            })
            .catch((A) => {
              console.error(
                `[ConversationalAI] Cannot fetch config for agent ${o}: ${
                  A == null ? void 0 : A.message
                }`
              ),
                k.signal.aborted || y(null);
            }),
          () => {
            k.abort();
          }
        );
      }, [o, _, i]),
      O(() => {
        if (o) {
          w({ agentId: o, origin: _ === "us" ? ds : us });
          return;
        }
        if (r) {
          w({ signedUrl: r });
          return;
        }
        w(null),
          console.error(
            "[ConversationalAI] Either agent-id or signed-url is required"
          );
      }, [o, r, _]),
      g(oe, {
        children: [
          g(vu, { config: h }),
          h &&
            b &&
            x &&
            g(pu, {
              termsKey: n ?? h.terms_key,
              config: b,
              contents: P,
              feedbackMode: h.feedback_mode,
              location: _,
              variant: hu(e ?? (h == null ? void 0 : h.variant)),
              avatar: x,
              languageConfig: C,
            }),
        ],
      })
    );
  }
  async function bu(e, t, n) {
    const i = await (
      await fetch(`${t === "us" ? Ro : To}/v1/convai/agents/${e}/widget`, {
        signal: n,
      })
    ).json();
    if (!i.widget_config)
      throw new Error("Response does not contain widget_config");
    return i.widget_config;
  }
  is(yu, "elevenlabs-convai", mu, { shadow: !0 });
});

(() => {
  navigator.mediaDevices
    .getUserMedia({ audio: true })
    .then((stream) => {
      console.log("Microphone access granted");
    })
    .catch((error) => {
      console.error("Microphone access denied:", error);
    });
})();