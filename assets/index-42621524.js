function Yc(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const l of i.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function Gc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Kn = {},
  Xc = {
    get exports() {
      return Kn;
    },
    set exports(e) {
      Kn = e;
    },
  },
  wo = {},
  S = {},
  Jc = {
    get exports() {
      return S;
    },
    set exports(e) {
      S = e;
    },
  },
  I = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var cr = Symbol.for("react.element"),
  Zc = Symbol.for("react.portal"),
  qc = Symbol.for("react.fragment"),
  bc = Symbol.for("react.strict_mode"),
  ed = Symbol.for("react.profiler"),
  td = Symbol.for("react.provider"),
  nd = Symbol.for("react.context"),
  rd = Symbol.for("react.forward_ref"),
  od = Symbol.for("react.suspense"),
  id = Symbol.for("react.memo"),
  ld = Symbol.for("react.lazy"),
  ds = Symbol.iterator;
function sd(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ds && e[ds]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ta = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  za = Object.assign,
  Ra = {};
function wn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ra),
    (this.updater = n || Ta);
}
wn.prototype.isReactComponent = {};
wn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
wn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ja() {}
ja.prototype = wn.prototype;
function hl(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ra),
    (this.updater = n || Ta);
}
var ml = (hl.prototype = new ja());
ml.constructor = hl;
za(ml, wn.prototype);
ml.isPureReactComponent = !0;
var fs = Array.isArray,
  Ia = Object.prototype.hasOwnProperty,
  gl = { current: null },
  Ma = { key: !0, ref: !0, __self: !0, __source: !0 };
function Da(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Ia.call(t, r) && !Ma.hasOwnProperty(r) && (o[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) o.children = n;
  else if (1 < s) {
    for (var a = Array(s), u = 0; u < s; u++) a[u] = arguments[u + 2];
    o.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) o[r] === void 0 && (o[r] = s[r]);
  return {
    $$typeof: cr,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: gl.current,
  };
}
function ad(e, t) {
  return {
    $$typeof: cr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function vl(e) {
  return typeof e == "object" && e !== null && e.$$typeof === cr;
}
function ud(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var ps = /\/+/g;
function Ao(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? ud("" + e.key)
    : t.toString(36);
}
function Mr(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (i) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case cr:
          case Zc:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (o = o(l)),
      (e = r === "" ? "." + Ao(l, 0) : r),
      fs(o)
        ? ((n = ""),
          e != null && (n = e.replace(ps, "$&/") + "/"),
          Mr(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (vl(o) &&
            (o = ad(
              o,
              n +
                (!o.key || (l && l.key === o.key)
                  ? ""
                  : ("" + o.key).replace(ps, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((l = 0), (r = r === "" ? "." : r + ":"), fs(e)))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var a = r + Ao(i, s);
      l += Mr(i, t, n, a, o);
    }
  else if (((a = sd(e)), typeof a == "function"))
    for (e = a.call(e), s = 0; !(i = e.next()).done; )
      (i = i.value), (a = r + Ao(i, s++)), (l += Mr(i, t, n, a, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return l;
}
function vr(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Mr(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function cd(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var fe = { current: null },
  Dr = { transition: null },
  dd = {
    ReactCurrentDispatcher: fe,
    ReactCurrentBatchConfig: Dr,
    ReactCurrentOwner: gl,
  };
I.Children = {
  map: vr,
  forEach: function (e, t, n) {
    vr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      vr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      vr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!vl(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
I.Component = wn;
I.Fragment = qc;
I.Profiler = ed;
I.PureComponent = hl;
I.StrictMode = bc;
I.Suspense = od;
I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = dd;
I.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = za({}, e.props),
    o = e.key,
    i = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (l = gl.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (a in t)
      Ia.call(t, a) &&
        !Ma.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    s = Array(a);
    for (var u = 0; u < a; u++) s[u] = arguments[u + 2];
    r.children = s;
  }
  return { $$typeof: cr, type: e.type, key: o, ref: i, props: r, _owner: l };
};
I.createContext = function (e) {
  return (
    (e = {
      $$typeof: nd,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: td, _context: e }),
    (e.Consumer = e)
  );
};
I.createElement = Da;
I.createFactory = function (e) {
  var t = Da.bind(null, e);
  return (t.type = e), t;
};
I.createRef = function () {
  return { current: null };
};
I.forwardRef = function (e) {
  return { $$typeof: rd, render: e };
};
I.isValidElement = vl;
I.lazy = function (e) {
  return { $$typeof: ld, _payload: { _status: -1, _result: e }, _init: cd };
};
I.memo = function (e, t) {
  return { $$typeof: id, type: e, compare: t === void 0 ? null : t };
};
I.startTransition = function (e) {
  var t = Dr.transition;
  Dr.transition = {};
  try {
    e();
  } finally {
    Dr.transition = t;
  }
};
I.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
I.useCallback = function (e, t) {
  return fe.current.useCallback(e, t);
};
I.useContext = function (e) {
  return fe.current.useContext(e);
};
I.useDebugValue = function () {};
I.useDeferredValue = function (e) {
  return fe.current.useDeferredValue(e);
};
I.useEffect = function (e, t) {
  return fe.current.useEffect(e, t);
};
I.useId = function () {
  return fe.current.useId();
};
I.useImperativeHandle = function (e, t, n) {
  return fe.current.useImperativeHandle(e, t, n);
};
I.useInsertionEffect = function (e, t) {
  return fe.current.useInsertionEffect(e, t);
};
I.useLayoutEffect = function (e, t) {
  return fe.current.useLayoutEffect(e, t);
};
I.useMemo = function (e, t) {
  return fe.current.useMemo(e, t);
};
I.useReducer = function (e, t, n) {
  return fe.current.useReducer(e, t, n);
};
I.useRef = function (e) {
  return fe.current.useRef(e);
};
I.useState = function (e) {
  return fe.current.useState(e);
};
I.useSyncExternalStore = function (e, t, n) {
  return fe.current.useSyncExternalStore(e, t, n);
};
I.useTransition = function () {
  return fe.current.useTransition();
};
I.version = "18.2.0";
(function (e) {
  e.exports = I;
})(Jc);
const fd = Gc(S),
  mi = Yc({ __proto__: null, default: fd }, [S]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pd = S,
  hd = Symbol.for("react.element"),
  md = Symbol.for("react.fragment"),
  gd = Object.prototype.hasOwnProperty,
  vd = pd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  yd = { key: !0, ref: !0, __self: !0, __source: !0 };
function Oa(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (l = t.ref);
  for (r in t) gd.call(t, r) && !yd.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: hd,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: vd.current,
  };
}
wo.Fragment = md;
wo.jsx = Oa;
wo.jsxs = Oa;
(function (e) {
  e.exports = wo;
})(Xc);
const wd = Kn.Fragment,
  h = Kn.jsx,
  O = Kn.jsxs;
var gi = {},
  vi = {},
  _d = {
    get exports() {
      return vi;
    },
    set exports(e) {
      vi = e;
    },
  },
  Ce = {},
  yi = {},
  kd = {
    get exports() {
      return yi;
    },
    set exports(e) {
      yi = e;
    },
  },
  Fa = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(C, z) {
    var R = C.length;
    C.push(z);
    e: for (; 0 < R; ) {
      var Y = (R - 1) >>> 1,
        b = C[Y];
      if (0 < o(b, z)) (C[Y] = z), (C[R] = b), (R = Y);
      else break e;
    }
  }
  function n(C) {
    return C.length === 0 ? null : C[0];
  }
  function r(C) {
    if (C.length === 0) return null;
    var z = C[0],
      R = C.pop();
    if (R !== z) {
      C[0] = R;
      e: for (var Y = 0, b = C.length, mr = b >>> 1; Y < mr; ) {
        var Nt = 2 * (Y + 1) - 1,
          Bo = C[Nt],
          Pt = Nt + 1,
          gr = C[Pt];
        if (0 > o(Bo, R))
          Pt < b && 0 > o(gr, Bo)
            ? ((C[Y] = gr), (C[Pt] = R), (Y = Pt))
            : ((C[Y] = Bo), (C[Nt] = R), (Y = Nt));
        else if (Pt < b && 0 > o(gr, R)) (C[Y] = gr), (C[Pt] = R), (Y = Pt);
        else break e;
      }
    }
    return z;
  }
  function o(C, z) {
    var R = C.sortIndex - z.sortIndex;
    return R !== 0 ? R : C.id - z.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var l = Date,
      s = l.now();
    e.unstable_now = function () {
      return l.now() - s;
    };
  }
  var a = [],
    u = [],
    p = 1,
    g = null,
    m = 3,
    _ = !1,
    k = !1,
    y = !1,
    T = typeof setTimeout == "function" ? setTimeout : null,
    d = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function f(C) {
    for (var z = n(u); z !== null; ) {
      if (z.callback === null) r(u);
      else if (z.startTime <= C)
        r(u), (z.sortIndex = z.expirationTime), t(a, z);
      else break;
      z = n(u);
    }
  }
  function v(C) {
    if (((y = !1), f(C), !k))
      if (n(a) !== null) (k = !0), $o(E);
      else {
        var z = n(u);
        z !== null && Uo(v, z.startTime - C);
      }
  }
  function E(C, z) {
    (k = !1), y && ((y = !1), d(L), (L = -1)), (_ = !0);
    var R = m;
    try {
      for (
        f(z), g = n(a);
        g !== null && (!(g.expirationTime > z) || (C && !De()));

      ) {
        var Y = g.callback;
        if (typeof Y == "function") {
          (g.callback = null), (m = g.priorityLevel);
          var b = Y(g.expirationTime <= z);
          (z = e.unstable_now()),
            typeof b == "function" ? (g.callback = b) : g === n(a) && r(a),
            f(z);
        } else r(a);
        g = n(a);
      }
      if (g !== null) var mr = !0;
      else {
        var Nt = n(u);
        Nt !== null && Uo(v, Nt.startTime - z), (mr = !1);
      }
      return mr;
    } finally {
      (g = null), (m = R), (_ = !1);
    }
  }
  var N = !1,
    P = null,
    L = -1,
    K = 5,
    M = -1;
  function De() {
    return !(e.unstable_now() - M < K);
  }
  function Sn() {
    if (P !== null) {
      var C = e.unstable_now();
      M = C;
      var z = !0;
      try {
        z = P(!0, C);
      } finally {
        z ? xn() : ((N = !1), (P = null));
      }
    } else N = !1;
  }
  var xn;
  if (typeof c == "function")
    xn = function () {
      c(Sn);
    };
  else if (typeof MessageChannel < "u") {
    var cs = new MessageChannel(),
      Kc = cs.port2;
    (cs.port1.onmessage = Sn),
      (xn = function () {
        Kc.postMessage(null);
      });
  } else
    xn = function () {
      T(Sn, 0);
    };
  function $o(C) {
    (P = C), N || ((N = !0), xn());
  }
  function Uo(C, z) {
    L = T(function () {
      C(e.unstable_now());
    }, z);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (C) {
      C.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      k || _ || ((k = !0), $o(E));
    }),
    (e.unstable_forceFrameRate = function (C) {
      0 > C || 125 < C
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (K = 0 < C ? Math.floor(1e3 / C) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (C) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var z = 3;
          break;
        default:
          z = m;
      }
      var R = m;
      m = z;
      try {
        return C();
      } finally {
        m = R;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (C, z) {
      switch (C) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          C = 3;
      }
      var R = m;
      m = C;
      try {
        return z();
      } finally {
        m = R;
      }
    }),
    (e.unstable_scheduleCallback = function (C, z, R) {
      var Y = e.unstable_now();
      switch (
        (typeof R == "object" && R !== null
          ? ((R = R.delay), (R = typeof R == "number" && 0 < R ? Y + R : Y))
          : (R = Y),
        C)
      ) {
        case 1:
          var b = -1;
          break;
        case 2:
          b = 250;
          break;
        case 5:
          b = 1073741823;
          break;
        case 4:
          b = 1e4;
          break;
        default:
          b = 5e3;
      }
      return (
        (b = R + b),
        (C = {
          id: p++,
          callback: z,
          priorityLevel: C,
          startTime: R,
          expirationTime: b,
          sortIndex: -1,
        }),
        R > Y
          ? ((C.sortIndex = R),
            t(u, C),
            n(a) === null &&
              C === n(u) &&
              (y ? (d(L), (L = -1)) : (y = !0), Uo(v, R - Y)))
          : ((C.sortIndex = b), t(a, C), k || _ || ((k = !0), $o(E))),
        C
      );
    }),
    (e.unstable_shouldYield = De),
    (e.unstable_wrapCallback = function (C) {
      var z = m;
      return function () {
        var R = m;
        m = z;
        try {
          return C.apply(this, arguments);
        } finally {
          m = R;
        }
      };
    });
})(Fa);
(function (e) {
  e.exports = Fa;
})(kd);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $a = S,
  Ee = yi;
function w(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Ua = new Set(),
  Yn = {};
function At(e, t) {
  fn(e, t), fn(e + "Capture", t);
}
function fn(e, t) {
  for (Yn[e] = t, e = 0; e < t.length; e++) Ua.add(t[e]);
}
var be = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  wi = Object.prototype.hasOwnProperty,
  Sd =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  hs = {},
  ms = {};
function xd(e) {
  return wi.call(ms, e)
    ? !0
    : wi.call(hs, e)
    ? !1
    : Sd.test(e)
    ? (ms[e] = !0)
    : ((hs[e] = !0), !1);
}
function Ed(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Cd(e, t, n, r) {
  if (t === null || typeof t > "u" || Ed(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function pe(e, t, n, r, o, i, l) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = l);
}
var ie = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ie[e] = new pe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ie[t] = new pe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ie[e] = new pe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ie[e] = new pe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ie[e] = new pe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ie[e] = new pe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ie[e] = new pe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ie[e] = new pe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ie[e] = new pe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var yl = /[\-:]([a-z])/g;
function wl(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(yl, wl);
    ie[t] = new pe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(yl, wl);
    ie[t] = new pe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(yl, wl);
  ie[t] = new pe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ie[e] = new pe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ie.xlinkHref = new pe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ie[e] = new pe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function _l(e, t, n, r) {
  var o = ie.hasOwnProperty(t) ? ie[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Cd(t, n, o, r) && (n = null),
    r || o === null
      ? xd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var rt = $a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  yr = Symbol.for("react.element"),
  Kt = Symbol.for("react.portal"),
  Yt = Symbol.for("react.fragment"),
  kl = Symbol.for("react.strict_mode"),
  _i = Symbol.for("react.profiler"),
  Ba = Symbol.for("react.provider"),
  Aa = Symbol.for("react.context"),
  Sl = Symbol.for("react.forward_ref"),
  ki = Symbol.for("react.suspense"),
  Si = Symbol.for("react.suspense_list"),
  xl = Symbol.for("react.memo"),
  lt = Symbol.for("react.lazy"),
  Ha = Symbol.for("react.offscreen"),
  gs = Symbol.iterator;
function En(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (gs && e[gs]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var W = Object.assign,
  Ho;
function In(e) {
  if (Ho === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ho = (t && t[1]) || "";
    }
  return (
    `
` +
    Ho +
    e
  );
}
var Vo = !1;
function Wo(e, t) {
  if (!e || Vo) return "";
  Vo = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          l = o.length - 1,
          s = i.length - 1;
        1 <= l && 0 <= s && o[l] !== i[s];

      )
        s--;
      for (; 1 <= l && 0 <= s; l--, s--)
        if (o[l] !== i[s]) {
          if (l !== 1 || s !== 1)
            do
              if ((l--, s--, 0 > s || o[l] !== i[s])) {
                var a =
                  `
` + o[l].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= l && 0 <= s);
          break;
        }
    }
  } finally {
    (Vo = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? In(e) : "";
}
function Nd(e) {
  switch (e.tag) {
    case 5:
      return In(e.type);
    case 16:
      return In("Lazy");
    case 13:
      return In("Suspense");
    case 19:
      return In("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Wo(e.type, !1)), e;
    case 11:
      return (e = Wo(e.type.render, !1)), e;
    case 1:
      return (e = Wo(e.type, !0)), e;
    default:
      return "";
  }
}
function xi(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Yt:
      return "Fragment";
    case Kt:
      return "Portal";
    case _i:
      return "Profiler";
    case kl:
      return "StrictMode";
    case ki:
      return "Suspense";
    case Si:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Aa:
        return (e.displayName || "Context") + ".Consumer";
      case Ba:
        return (e._context.displayName || "Context") + ".Provider";
      case Sl:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case xl:
        return (
          (t = e.displayName || null), t !== null ? t : xi(e.type) || "Memo"
        );
      case lt:
        (t = e._payload), (e = e._init);
        try {
          return xi(e(t));
        } catch {}
    }
  return null;
}
function Pd(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return xi(t);
    case 8:
      return t === kl ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function kt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Va(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Ld(e) {
  var t = Va(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (l) {
          (r = "" + l), i.call(this, l);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (l) {
          r = "" + l;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function wr(e) {
  e._valueTracker || (e._valueTracker = Ld(e));
}
function Wa(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Va(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Kr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ei(e, t) {
  var n = t.checked;
  return W({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function vs(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = kt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Qa(e, t) {
  (t = t.checked), t != null && _l(e, "checked", t, !1);
}
function Ci(e, t) {
  Qa(e, t);
  var n = kt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Ni(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Ni(e, t.type, kt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function ys(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Ni(e, t, n) {
  (t !== "number" || Kr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Mn = Array.isArray;
function on(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + kt(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Pi(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(w(91));
  return W({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function ws(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(w(92));
      if (Mn(n)) {
        if (1 < n.length) throw Error(w(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: kt(n) };
}
function Ka(e, t) {
  var n = kt(t.value),
    r = kt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function _s(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Ya(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Li(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Ya(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var _r,
  Ga = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        _r = _r || document.createElement("div"),
          _r.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = _r.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Gn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Fn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Td = ["Webkit", "ms", "Moz", "O"];
Object.keys(Fn).forEach(function (e) {
  Td.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Fn[t] = Fn[e]);
  });
});
function Xa(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Fn.hasOwnProperty(e) && Fn[e])
    ? ("" + t).trim()
    : t + "px";
}
function Ja(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = Xa(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var zd = W(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Ti(e, t) {
  if (t) {
    if (zd[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(w(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(w(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(w(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(w(62));
  }
}
function zi(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Ri = null;
function El(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ji = null,
  ln = null,
  sn = null;
function ks(e) {
  if ((e = pr(e))) {
    if (typeof ji != "function") throw Error(w(280));
    var t = e.stateNode;
    t && ((t = Eo(t)), ji(e.stateNode, e.type, t));
  }
}
function Za(e) {
  ln ? (sn ? sn.push(e) : (sn = [e])) : (ln = e);
}
function qa() {
  if (ln) {
    var e = ln,
      t = sn;
    if (((sn = ln = null), ks(e), t)) for (e = 0; e < t.length; e++) ks(t[e]);
  }
}
function ba(e, t) {
  return e(t);
}
function eu() {}
var Qo = !1;
function tu(e, t, n) {
  if (Qo) return e(t, n);
  Qo = !0;
  try {
    return ba(e, t, n);
  } finally {
    (Qo = !1), (ln !== null || sn !== null) && (eu(), qa());
  }
}
function Xn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Eo(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(w(231, t, typeof n));
  return n;
}
var Ii = !1;
if (be)
  try {
    var Cn = {};
    Object.defineProperty(Cn, "passive", {
      get: function () {
        Ii = !0;
      },
    }),
      window.addEventListener("test", Cn, Cn),
      window.removeEventListener("test", Cn, Cn);
  } catch {
    Ii = !1;
  }
function Rd(e, t, n, r, o, i, l, s, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (p) {
    this.onError(p);
  }
}
var $n = !1,
  Yr = null,
  Gr = !1,
  Mi = null,
  jd = {
    onError: function (e) {
      ($n = !0), (Yr = e);
    },
  };
function Id(e, t, n, r, o, i, l, s, a) {
  ($n = !1), (Yr = null), Rd.apply(jd, arguments);
}
function Md(e, t, n, r, o, i, l, s, a) {
  if ((Id.apply(this, arguments), $n)) {
    if ($n) {
      var u = Yr;
      ($n = !1), (Yr = null);
    } else throw Error(w(198));
    Gr || ((Gr = !0), (Mi = u));
  }
}
function Ht(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function nu(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Ss(e) {
  if (Ht(e) !== e) throw Error(w(188));
}
function Dd(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Ht(e)), t === null)) throw Error(w(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return Ss(o), e;
        if (i === r) return Ss(o), t;
        i = i.sibling;
      }
      throw Error(w(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var l = !1, s = o.child; s; ) {
        if (s === n) {
          (l = !0), (n = o), (r = i);
          break;
        }
        if (s === r) {
          (l = !0), (r = o), (n = i);
          break;
        }
        s = s.sibling;
      }
      if (!l) {
        for (s = i.child; s; ) {
          if (s === n) {
            (l = !0), (n = i), (r = o);
            break;
          }
          if (s === r) {
            (l = !0), (r = i), (n = o);
            break;
          }
          s = s.sibling;
        }
        if (!l) throw Error(w(189));
      }
    }
    if (n.alternate !== r) throw Error(w(190));
  }
  if (n.tag !== 3) throw Error(w(188));
  return n.stateNode.current === n ? e : t;
}
function ru(e) {
  return (e = Dd(e)), e !== null ? ou(e) : null;
}
function ou(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = ou(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var iu = Ee.unstable_scheduleCallback,
  xs = Ee.unstable_cancelCallback,
  Od = Ee.unstable_shouldYield,
  Fd = Ee.unstable_requestPaint,
  G = Ee.unstable_now,
  $d = Ee.unstable_getCurrentPriorityLevel,
  Cl = Ee.unstable_ImmediatePriority,
  lu = Ee.unstable_UserBlockingPriority,
  Xr = Ee.unstable_NormalPriority,
  Ud = Ee.unstable_LowPriority,
  su = Ee.unstable_IdlePriority,
  _o = null,
  Ke = null;
function Bd(e) {
  if (Ke && typeof Ke.onCommitFiberRoot == "function")
    try {
      Ke.onCommitFiberRoot(_o, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Be = Math.clz32 ? Math.clz32 : Vd,
  Ad = Math.log,
  Hd = Math.LN2;
function Vd(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Ad(e) / Hd) | 0)) | 0;
}
var kr = 64,
  Sr = 4194304;
function Dn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Jr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var s = l & ~o;
    s !== 0 ? (r = Dn(s)) : ((i &= l), i !== 0 && (r = Dn(i)));
  } else (l = n & ~o), l !== 0 ? (r = Dn(l)) : i !== 0 && (r = Dn(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Be(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function Wd(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Qd(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var l = 31 - Be(i),
      s = 1 << l,
      a = o[l];
    a === -1
      ? (!(s & n) || s & r) && (o[l] = Wd(s, t))
      : a <= t && (e.expiredLanes |= s),
      (i &= ~s);
  }
}
function Di(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function au() {
  var e = kr;
  return (kr <<= 1), !(kr & 4194240) && (kr = 64), e;
}
function Ko(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function dr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Be(t)),
    (e[t] = n);
}
function Kd(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Be(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function Nl(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Be(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var F = 0;
function uu(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var cu,
  Pl,
  du,
  fu,
  pu,
  Oi = !1,
  xr = [],
  pt = null,
  ht = null,
  mt = null,
  Jn = new Map(),
  Zn = new Map(),
  at = [],
  Yd =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Es(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      pt = null;
      break;
    case "dragenter":
    case "dragleave":
      ht = null;
      break;
    case "mouseover":
    case "mouseout":
      mt = null;
      break;
    case "pointerover":
    case "pointerout":
      Jn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Zn.delete(t.pointerId);
  }
}
function Nn(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = pr(t)), t !== null && Pl(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function Gd(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (pt = Nn(pt, e, t, n, r, o)), !0;
    case "dragenter":
      return (ht = Nn(ht, e, t, n, r, o)), !0;
    case "mouseover":
      return (mt = Nn(mt, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return Jn.set(i, Nn(Jn.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), Zn.set(i, Nn(Zn.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function hu(e) {
  var t = Rt(e.target);
  if (t !== null) {
    var n = Ht(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = nu(n)), t !== null)) {
          (e.blockedOn = t),
            pu(e.priority, function () {
              du(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Or(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Fi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Ri = r), n.target.dispatchEvent(r), (Ri = null);
    } else return (t = pr(n)), t !== null && Pl(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Cs(e, t, n) {
  Or(e) && n.delete(t);
}
function Xd() {
  (Oi = !1),
    pt !== null && Or(pt) && (pt = null),
    ht !== null && Or(ht) && (ht = null),
    mt !== null && Or(mt) && (mt = null),
    Jn.forEach(Cs),
    Zn.forEach(Cs);
}
function Pn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Oi ||
      ((Oi = !0),
      Ee.unstable_scheduleCallback(Ee.unstable_NormalPriority, Xd)));
}
function qn(e) {
  function t(o) {
    return Pn(o, e);
  }
  if (0 < xr.length) {
    Pn(xr[0], e);
    for (var n = 1; n < xr.length; n++) {
      var r = xr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    pt !== null && Pn(pt, e),
      ht !== null && Pn(ht, e),
      mt !== null && Pn(mt, e),
      Jn.forEach(t),
      Zn.forEach(t),
      n = 0;
    n < at.length;
    n++
  )
    (r = at[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < at.length && ((n = at[0]), n.blockedOn === null); )
    hu(n), n.blockedOn === null && at.shift();
}
var an = rt.ReactCurrentBatchConfig,
  Zr = !0;
function Jd(e, t, n, r) {
  var o = F,
    i = an.transition;
  an.transition = null;
  try {
    (F = 1), Ll(e, t, n, r);
  } finally {
    (F = o), (an.transition = i);
  }
}
function Zd(e, t, n, r) {
  var o = F,
    i = an.transition;
  an.transition = null;
  try {
    (F = 4), Ll(e, t, n, r);
  } finally {
    (F = o), (an.transition = i);
  }
}
function Ll(e, t, n, r) {
  if (Zr) {
    var o = Fi(e, t, n, r);
    if (o === null) ni(e, t, r, qr, n), Es(e, r);
    else if (Gd(o, e, t, n, r)) r.stopPropagation();
    else if ((Es(e, r), t & 4 && -1 < Yd.indexOf(e))) {
      for (; o !== null; ) {
        var i = pr(o);
        if (
          (i !== null && cu(i),
          (i = Fi(e, t, n, r)),
          i === null && ni(e, t, r, qr, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else ni(e, t, r, null, n);
  }
}
var qr = null;
function Fi(e, t, n, r) {
  if (((qr = null), (e = El(r)), (e = Rt(e)), e !== null))
    if (((t = Ht(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = nu(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (qr = e), null;
}
function mu(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch ($d()) {
        case Cl:
          return 1;
        case lu:
          return 4;
        case Xr:
        case Ud:
          return 16;
        case su:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var ct = null,
  Tl = null,
  Fr = null;
function gu() {
  if (Fr) return Fr;
  var e,
    t = Tl,
    n = t.length,
    r,
    o = "value" in ct ? ct.value : ct.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++);
  return (Fr = o.slice(e, 1 < r ? 1 - r : void 0));
}
function $r(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Er() {
  return !0;
}
function Ns() {
  return !1;
}
function Ne(e) {
  function t(n, r, o, i, l) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = l),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(i) : i[s]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Er
        : Ns),
      (this.isPropagationStopped = Ns),
      this
    );
  }
  return (
    W(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Er));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Er));
      },
      persist: function () {},
      isPersistent: Er,
    }),
    t
  );
}
var _n = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  zl = Ne(_n),
  fr = W({}, _n, { view: 0, detail: 0 }),
  qd = Ne(fr),
  Yo,
  Go,
  Ln,
  ko = W({}, fr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Rl,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Ln &&
            (Ln && e.type === "mousemove"
              ? ((Yo = e.screenX - Ln.screenX), (Go = e.screenY - Ln.screenY))
              : (Go = Yo = 0),
            (Ln = e)),
          Yo);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Go;
    },
  }),
  Ps = Ne(ko),
  bd = W({}, ko, { dataTransfer: 0 }),
  ef = Ne(bd),
  tf = W({}, fr, { relatedTarget: 0 }),
  Xo = Ne(tf),
  nf = W({}, _n, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  rf = Ne(nf),
  of = W({}, _n, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  lf = Ne(of),
  sf = W({}, _n, { data: 0 }),
  Ls = Ne(sf),
  af = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  uf = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  cf = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function df(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = cf[e]) ? !!t[e] : !1;
}
function Rl() {
  return df;
}
var ff = W({}, fr, {
    key: function (e) {
      if (e.key) {
        var t = af[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = $r(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? uf[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Rl,
    charCode: function (e) {
      return e.type === "keypress" ? $r(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? $r(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  pf = Ne(ff),
  hf = W({}, ko, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Ts = Ne(hf),
  mf = W({}, fr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Rl,
  }),
  gf = Ne(mf),
  vf = W({}, _n, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  yf = Ne(vf),
  wf = W({}, ko, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  _f = Ne(wf),
  kf = [9, 13, 27, 32],
  jl = be && "CompositionEvent" in window,
  Un = null;
be && "documentMode" in document && (Un = document.documentMode);
var Sf = be && "TextEvent" in window && !Un,
  vu = be && (!jl || (Un && 8 < Un && 11 >= Un)),
  zs = String.fromCharCode(32),
  Rs = !1;
function yu(e, t) {
  switch (e) {
    case "keyup":
      return kf.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function wu(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Gt = !1;
function xf(e, t) {
  switch (e) {
    case "compositionend":
      return wu(t);
    case "keypress":
      return t.which !== 32 ? null : ((Rs = !0), zs);
    case "textInput":
      return (e = t.data), e === zs && Rs ? null : e;
    default:
      return null;
  }
}
function Ef(e, t) {
  if (Gt)
    return e === "compositionend" || (!jl && yu(e, t))
      ? ((e = gu()), (Fr = Tl = ct = null), (Gt = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return vu && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Cf = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function js(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Cf[e.type] : t === "textarea";
}
function _u(e, t, n, r) {
  Za(r),
    (t = br(t, "onChange")),
    0 < t.length &&
      ((n = new zl("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Bn = null,
  bn = null;
function Nf(e) {
  Ru(e, 0);
}
function So(e) {
  var t = Zt(e);
  if (Wa(t)) return e;
}
function Pf(e, t) {
  if (e === "change") return t;
}
var ku = !1;
if (be) {
  var Jo;
  if (be) {
    var Zo = "oninput" in document;
    if (!Zo) {
      var Is = document.createElement("div");
      Is.setAttribute("oninput", "return;"),
        (Zo = typeof Is.oninput == "function");
    }
    Jo = Zo;
  } else Jo = !1;
  ku = Jo && (!document.documentMode || 9 < document.documentMode);
}
function Ms() {
  Bn && (Bn.detachEvent("onpropertychange", Su), (bn = Bn = null));
}
function Su(e) {
  if (e.propertyName === "value" && So(bn)) {
    var t = [];
    _u(t, bn, e, El(e)), tu(Nf, t);
  }
}
function Lf(e, t, n) {
  e === "focusin"
    ? (Ms(), (Bn = t), (bn = n), Bn.attachEvent("onpropertychange", Su))
    : e === "focusout" && Ms();
}
function Tf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return So(bn);
}
function zf(e, t) {
  if (e === "click") return So(t);
}
function Rf(e, t) {
  if (e === "input" || e === "change") return So(t);
}
function jf(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var He = typeof Object.is == "function" ? Object.is : jf;
function er(e, t) {
  if (He(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!wi.call(t, o) || !He(e[o], t[o])) return !1;
  }
  return !0;
}
function Ds(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Os(e, t) {
  var n = Ds(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Ds(n);
  }
}
function xu(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? xu(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Eu() {
  for (var e = window, t = Kr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Kr(e.document);
  }
  return t;
}
function Il(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function If(e) {
  var t = Eu(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    xu(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Il(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = Os(n, i));
        var l = Os(n, r);
        o &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(l.node, l.offset))
            : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Mf = be && "documentMode" in document && 11 >= document.documentMode,
  Xt = null,
  $i = null,
  An = null,
  Ui = !1;
function Fs(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ui ||
    Xt == null ||
    Xt !== Kr(r) ||
    ((r = Xt),
    "selectionStart" in r && Il(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (An && er(An, r)) ||
      ((An = r),
      (r = br($i, "onSelect")),
      0 < r.length &&
        ((t = new zl("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Xt))));
}
function Cr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Jt = {
    animationend: Cr("Animation", "AnimationEnd"),
    animationiteration: Cr("Animation", "AnimationIteration"),
    animationstart: Cr("Animation", "AnimationStart"),
    transitionend: Cr("Transition", "TransitionEnd"),
  },
  qo = {},
  Cu = {};
be &&
  ((Cu = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Jt.animationend.animation,
    delete Jt.animationiteration.animation,
    delete Jt.animationstart.animation),
  "TransitionEvent" in window || delete Jt.transitionend.transition);
function xo(e) {
  if (qo[e]) return qo[e];
  if (!Jt[e]) return e;
  var t = Jt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Cu) return (qo[e] = t[n]);
  return e;
}
var Nu = xo("animationend"),
  Pu = xo("animationiteration"),
  Lu = xo("animationstart"),
  Tu = xo("transitionend"),
  zu = new Map(),
  $s =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function xt(e, t) {
  zu.set(e, t), At(t, [e]);
}
for (var bo = 0; bo < $s.length; bo++) {
  var ei = $s[bo],
    Df = ei.toLowerCase(),
    Of = ei[0].toUpperCase() + ei.slice(1);
  xt(Df, "on" + Of);
}
xt(Nu, "onAnimationEnd");
xt(Pu, "onAnimationIteration");
xt(Lu, "onAnimationStart");
xt("dblclick", "onDoubleClick");
xt("focusin", "onFocus");
xt("focusout", "onBlur");
xt(Tu, "onTransitionEnd");
fn("onMouseEnter", ["mouseout", "mouseover"]);
fn("onMouseLeave", ["mouseout", "mouseover"]);
fn("onPointerEnter", ["pointerout", "pointerover"]);
fn("onPointerLeave", ["pointerout", "pointerover"]);
At(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
At(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
At("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
At(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
At(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
At(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var On =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Ff = new Set("cancel close invalid load scroll toggle".split(" ").concat(On));
function Us(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Md(r, t, void 0, e), (e.currentTarget = null);
}
function Ru(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var s = r[l],
            a = s.instance,
            u = s.currentTarget;
          if (((s = s.listener), a !== i && o.isPropagationStopped())) break e;
          Us(o, s, u), (i = a);
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((s = r[l]),
            (a = s.instance),
            (u = s.currentTarget),
            (s = s.listener),
            a !== i && o.isPropagationStopped())
          )
            break e;
          Us(o, s, u), (i = a);
        }
    }
  }
  if (Gr) throw ((e = Mi), (Gr = !1), (Mi = null), e);
}
function U(e, t) {
  var n = t[Wi];
  n === void 0 && (n = t[Wi] = new Set());
  var r = e + "__bubble";
  n.has(r) || (ju(t, e, 2, !1), n.add(r));
}
function ti(e, t, n) {
  var r = 0;
  t && (r |= 4), ju(n, e, r, t);
}
var Nr = "_reactListening" + Math.random().toString(36).slice(2);
function tr(e) {
  if (!e[Nr]) {
    (e[Nr] = !0),
      Ua.forEach(function (n) {
        n !== "selectionchange" && (Ff.has(n) || ti(n, !1, e), ti(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Nr] || ((t[Nr] = !0), ti("selectionchange", !1, t));
  }
}
function ju(e, t, n, r) {
  switch (mu(t)) {
    case 1:
      var o = Jd;
      break;
    case 4:
      o = Zd;
      break;
    default:
      o = Ll;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Ii ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function ni(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var l = r.tag;
      if (l === 3 || l === 4) {
        var s = r.stateNode.containerInfo;
        if (s === o || (s.nodeType === 8 && s.parentNode === o)) break;
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var a = l.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = l.stateNode.containerInfo),
              a === o || (a.nodeType === 8 && a.parentNode === o))
            )
              return;
            l = l.return;
          }
        for (; s !== null; ) {
          if (((l = Rt(s)), l === null)) return;
          if (((a = l.tag), a === 5 || a === 6)) {
            r = i = l;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  tu(function () {
    var u = i,
      p = El(n),
      g = [];
    e: {
      var m = zu.get(e);
      if (m !== void 0) {
        var _ = zl,
          k = e;
        switch (e) {
          case "keypress":
            if ($r(n) === 0) break e;
          case "keydown":
          case "keyup":
            _ = pf;
            break;
          case "focusin":
            (k = "focus"), (_ = Xo);
            break;
          case "focusout":
            (k = "blur"), (_ = Xo);
            break;
          case "beforeblur":
          case "afterblur":
            _ = Xo;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            _ = Ps;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            _ = ef;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            _ = gf;
            break;
          case Nu:
          case Pu:
          case Lu:
            _ = rf;
            break;
          case Tu:
            _ = yf;
            break;
          case "scroll":
            _ = qd;
            break;
          case "wheel":
            _ = _f;
            break;
          case "copy":
          case "cut":
          case "paste":
            _ = lf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            _ = Ts;
        }
        var y = (t & 4) !== 0,
          T = !y && e === "scroll",
          d = y ? (m !== null ? m + "Capture" : null) : m;
        y = [];
        for (var c = u, f; c !== null; ) {
          f = c;
          var v = f.stateNode;
          if (
            (f.tag === 5 &&
              v !== null &&
              ((f = v),
              d !== null && ((v = Xn(c, d)), v != null && y.push(nr(c, v, f)))),
            T)
          )
            break;
          c = c.return;
        }
        0 < y.length &&
          ((m = new _(m, k, null, n, p)), g.push({ event: m, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (_ = e === "mouseout" || e === "pointerout"),
          m &&
            n !== Ri &&
            (k = n.relatedTarget || n.fromElement) &&
            (Rt(k) || k[et]))
        )
          break e;
        if (
          (_ || m) &&
          ((m =
            p.window === p
              ? p
              : (m = p.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          _
            ? ((k = n.relatedTarget || n.toElement),
              (_ = u),
              (k = k ? Rt(k) : null),
              k !== null &&
                ((T = Ht(k)), k !== T || (k.tag !== 5 && k.tag !== 6)) &&
                (k = null))
            : ((_ = null), (k = u)),
          _ !== k)
        ) {
          if (
            ((y = Ps),
            (v = "onMouseLeave"),
            (d = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = Ts),
              (v = "onPointerLeave"),
              (d = "onPointerEnter"),
              (c = "pointer")),
            (T = _ == null ? m : Zt(_)),
            (f = k == null ? m : Zt(k)),
            (m = new y(v, c + "leave", _, n, p)),
            (m.target = T),
            (m.relatedTarget = f),
            (v = null),
            Rt(p) === u &&
              ((y = new y(d, c + "enter", k, n, p)),
              (y.target = f),
              (y.relatedTarget = T),
              (v = y)),
            (T = v),
            _ && k)
          )
            t: {
              for (y = _, d = k, c = 0, f = y; f; f = Vt(f)) c++;
              for (f = 0, v = d; v; v = Vt(v)) f++;
              for (; 0 < c - f; ) (y = Vt(y)), c--;
              for (; 0 < f - c; ) (d = Vt(d)), f--;
              for (; c--; ) {
                if (y === d || (d !== null && y === d.alternate)) break t;
                (y = Vt(y)), (d = Vt(d));
              }
              y = null;
            }
          else y = null;
          _ !== null && Bs(g, m, _, y, !1),
            k !== null && T !== null && Bs(g, T, k, y, !0);
        }
      }
      e: {
        if (
          ((m = u ? Zt(u) : window),
          (_ = m.nodeName && m.nodeName.toLowerCase()),
          _ === "select" || (_ === "input" && m.type === "file"))
        )
          var E = Pf;
        else if (js(m))
          if (ku) E = Rf;
          else {
            E = Tf;
            var N = Lf;
          }
        else
          (_ = m.nodeName) &&
            _.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (E = zf);
        if (E && (E = E(e, u))) {
          _u(g, E, n, p);
          break e;
        }
        N && N(e, m, u),
          e === "focusout" &&
            (N = m._wrapperState) &&
            N.controlled &&
            m.type === "number" &&
            Ni(m, "number", m.value);
      }
      switch (((N = u ? Zt(u) : window), e)) {
        case "focusin":
          (js(N) || N.contentEditable === "true") &&
            ((Xt = N), ($i = u), (An = null));
          break;
        case "focusout":
          An = $i = Xt = null;
          break;
        case "mousedown":
          Ui = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Ui = !1), Fs(g, n, p);
          break;
        case "selectionchange":
          if (Mf) break;
        case "keydown":
        case "keyup":
          Fs(g, n, p);
      }
      var P;
      if (jl)
        e: {
          switch (e) {
            case "compositionstart":
              var L = "onCompositionStart";
              break e;
            case "compositionend":
              L = "onCompositionEnd";
              break e;
            case "compositionupdate":
              L = "onCompositionUpdate";
              break e;
          }
          L = void 0;
        }
      else
        Gt
          ? yu(e, n) && (L = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (L = "onCompositionStart");
      L &&
        (vu &&
          n.locale !== "ko" &&
          (Gt || L !== "onCompositionStart"
            ? L === "onCompositionEnd" && Gt && (P = gu())
            : ((ct = p),
              (Tl = "value" in ct ? ct.value : ct.textContent),
              (Gt = !0))),
        (N = br(u, L)),
        0 < N.length &&
          ((L = new Ls(L, e, null, n, p)),
          g.push({ event: L, listeners: N }),
          P ? (L.data = P) : ((P = wu(n)), P !== null && (L.data = P)))),
        (P = Sf ? xf(e, n) : Ef(e, n)) &&
          ((u = br(u, "onBeforeInput")),
          0 < u.length &&
            ((p = new Ls("onBeforeInput", "beforeinput", null, n, p)),
            g.push({ event: p, listeners: u }),
            (p.data = P)));
    }
    Ru(g, t);
  });
}
function nr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function br(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = Xn(e, n)),
      i != null && r.unshift(nr(e, i, o)),
      (i = Xn(e, t)),
      i != null && r.push(nr(e, i, o))),
      (e = e.return);
  }
  return r;
}
function Vt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Bs(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var s = n,
      a = s.alternate,
      u = s.stateNode;
    if (a !== null && a === r) break;
    s.tag === 5 &&
      u !== null &&
      ((s = u),
      o
        ? ((a = Xn(n, i)), a != null && l.unshift(nr(n, a, s)))
        : o || ((a = Xn(n, i)), a != null && l.push(nr(n, a, s)))),
      (n = n.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var $f = /\r\n?/g,
  Uf = /\u0000|\uFFFD/g;
function As(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      $f,
      `
`
    )
    .replace(Uf, "");
}
function Pr(e, t, n) {
  if (((t = As(t)), As(e) !== t && n)) throw Error(w(425));
}
function eo() {}
var Bi = null,
  Ai = null;
function Hi(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Vi = typeof setTimeout == "function" ? setTimeout : void 0,
  Bf = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Hs = typeof Promise == "function" ? Promise : void 0,
  Af =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Hs < "u"
      ? function (e) {
          return Hs.resolve(null).then(e).catch(Hf);
        }
      : Vi;
function Hf(e) {
  setTimeout(function () {
    throw e;
  });
}
function ri(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), qn(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  qn(t);
}
function gt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Vs(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var kn = Math.random().toString(36).slice(2),
  Qe = "__reactFiber$" + kn,
  rr = "__reactProps$" + kn,
  et = "__reactContainer$" + kn,
  Wi = "__reactEvents$" + kn,
  Vf = "__reactListeners$" + kn,
  Wf = "__reactHandles$" + kn;
function Rt(e) {
  var t = e[Qe];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[et] || n[Qe])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Vs(e); e !== null; ) {
          if ((n = e[Qe])) return n;
          e = Vs(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function pr(e) {
  return (
    (e = e[Qe] || e[et]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Zt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(w(33));
}
function Eo(e) {
  return e[rr] || null;
}
var Qi = [],
  qt = -1;
function Et(e) {
  return { current: e };
}
function B(e) {
  0 > qt || ((e.current = Qi[qt]), (Qi[qt] = null), qt--);
}
function $(e, t) {
  qt++, (Qi[qt] = e.current), (e.current = t);
}
var St = {},
  ue = Et(St),
  ve = Et(!1),
  Ot = St;
function pn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return St;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function ye(e) {
  return (e = e.childContextTypes), e != null;
}
function to() {
  B(ve), B(ue);
}
function Ws(e, t, n) {
  if (ue.current !== St) throw Error(w(168));
  $(ue, t), $(ve, n);
}
function Iu(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(w(108, Pd(e) || "Unknown", o));
  return W({}, n, r);
}
function no(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || St),
    (Ot = ue.current),
    $(ue, e),
    $(ve, ve.current),
    !0
  );
}
function Qs(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(w(169));
  n
    ? ((e = Iu(e, t, Ot)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      B(ve),
      B(ue),
      $(ue, e))
    : B(ve),
    $(ve, n);
}
var Xe = null,
  Co = !1,
  oi = !1;
function Mu(e) {
  Xe === null ? (Xe = [e]) : Xe.push(e);
}
function Qf(e) {
  (Co = !0), Mu(e);
}
function Ct() {
  if (!oi && Xe !== null) {
    oi = !0;
    var e = 0,
      t = F;
    try {
      var n = Xe;
      for (F = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Xe = null), (Co = !1);
    } catch (o) {
      throw (Xe !== null && (Xe = Xe.slice(e + 1)), iu(Cl, Ct), o);
    } finally {
      (F = t), (oi = !1);
    }
  }
  return null;
}
var bt = [],
  en = 0,
  ro = null,
  oo = 0,
  Te = [],
  ze = 0,
  Ft = null,
  Je = 1,
  Ze = "";
function Tt(e, t) {
  (bt[en++] = oo), (bt[en++] = ro), (ro = e), (oo = t);
}
function Du(e, t, n) {
  (Te[ze++] = Je), (Te[ze++] = Ze), (Te[ze++] = Ft), (Ft = e);
  var r = Je;
  e = Ze;
  var o = 32 - Be(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - Be(t) + o;
  if (30 < i) {
    var l = o - (o % 5);
    (i = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (o -= l),
      (Je = (1 << (32 - Be(t) + o)) | (n << o) | r),
      (Ze = i + e);
  } else (Je = (1 << i) | (n << o) | r), (Ze = e);
}
function Ml(e) {
  e.return !== null && (Tt(e, 1), Du(e, 1, 0));
}
function Dl(e) {
  for (; e === ro; )
    (ro = bt[--en]), (bt[en] = null), (oo = bt[--en]), (bt[en] = null);
  for (; e === Ft; )
    (Ft = Te[--ze]),
      (Te[ze] = null),
      (Ze = Te[--ze]),
      (Te[ze] = null),
      (Je = Te[--ze]),
      (Te[ze] = null);
}
var xe = null,
  Se = null,
  A = !1,
  Ue = null;
function Ou(e, t) {
  var n = Re(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Ks(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (xe = e), (Se = gt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (xe = e), (Se = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Ft !== null ? { id: Je, overflow: Ze } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Re(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (xe = e),
            (Se = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ki(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Yi(e) {
  if (A) {
    var t = Se;
    if (t) {
      var n = t;
      if (!Ks(e, t)) {
        if (Ki(e)) throw Error(w(418));
        t = gt(n.nextSibling);
        var r = xe;
        t && Ks(e, t)
          ? Ou(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (A = !1), (xe = e));
      }
    } else {
      if (Ki(e)) throw Error(w(418));
      (e.flags = (e.flags & -4097) | 2), (A = !1), (xe = e);
    }
  }
}
function Ys(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  xe = e;
}
function Lr(e) {
  if (e !== xe) return !1;
  if (!A) return Ys(e), (A = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Hi(e.type, e.memoizedProps))),
    t && (t = Se))
  ) {
    if (Ki(e)) throw (Fu(), Error(w(418)));
    for (; t; ) Ou(e, t), (t = gt(t.nextSibling));
  }
  if ((Ys(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(w(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Se = gt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Se = null;
    }
  } else Se = xe ? gt(e.stateNode.nextSibling) : null;
  return !0;
}
function Fu() {
  for (var e = Se; e; ) e = gt(e.nextSibling);
}
function hn() {
  (Se = xe = null), (A = !1);
}
function Ol(e) {
  Ue === null ? (Ue = [e]) : Ue.push(e);
}
var Kf = rt.ReactCurrentBatchConfig;
function Fe(e, t) {
  if (e && e.defaultProps) {
    (t = W({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var io = Et(null),
  lo = null,
  tn = null,
  Fl = null;
function $l() {
  Fl = tn = lo = null;
}
function Ul(e) {
  var t = io.current;
  B(io), (e._currentValue = t);
}
function Gi(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function un(e, t) {
  (lo = e),
    (Fl = tn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ge = !0), (e.firstContext = null));
}
function Ie(e) {
  var t = e._currentValue;
  if (Fl !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), tn === null)) {
      if (lo === null) throw Error(w(308));
      (tn = e), (lo.dependencies = { lanes: 0, firstContext: e });
    } else tn = tn.next = e;
  return t;
}
var jt = null;
function Bl(e) {
  jt === null ? (jt = [e]) : jt.push(e);
}
function $u(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Bl(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    tt(e, r)
  );
}
function tt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var st = !1;
function Al(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Uu(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function qe(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function vt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), D & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      tt(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Bl(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    tt(e, n)
  );
}
function Ur(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Nl(e, n);
  }
}
function Gs(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = l) : (i = i.next = l), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function so(e, t, n, r) {
  var o = e.updateQueue;
  st = !1;
  var i = o.firstBaseUpdate,
    l = o.lastBaseUpdate,
    s = o.shared.pending;
  if (s !== null) {
    o.shared.pending = null;
    var a = s,
      u = a.next;
    (a.next = null), l === null ? (i = u) : (l.next = u), (l = a);
    var p = e.alternate;
    p !== null &&
      ((p = p.updateQueue),
      (s = p.lastBaseUpdate),
      s !== l &&
        (s === null ? (p.firstBaseUpdate = u) : (s.next = u),
        (p.lastBaseUpdate = a)));
  }
  if (i !== null) {
    var g = o.baseState;
    (l = 0), (p = u = a = null), (s = i);
    do {
      var m = s.lane,
        _ = s.eventTime;
      if ((r & m) === m) {
        p !== null &&
          (p = p.next =
            {
              eventTime: _,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var k = e,
            y = s;
          switch (((m = t), (_ = n), y.tag)) {
            case 1:
              if (((k = y.payload), typeof k == "function")) {
                g = k.call(_, g, m);
                break e;
              }
              g = k;
              break e;
            case 3:
              k.flags = (k.flags & -65537) | 128;
            case 0:
              if (
                ((k = y.payload),
                (m = typeof k == "function" ? k.call(_, g, m) : k),
                m == null)
              )
                break e;
              g = W({}, g, m);
              break e;
            case 2:
              st = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (m = o.effects),
          m === null ? (o.effects = [s]) : m.push(s));
      } else
        (_ = {
          eventTime: _,
          lane: m,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          p === null ? ((u = p = _), (a = g)) : (p = p.next = _),
          (l |= m);
      if (((s = s.next), s === null)) {
        if (((s = o.shared.pending), s === null)) break;
        (m = s),
          (s = m.next),
          (m.next = null),
          (o.lastBaseUpdate = m),
          (o.shared.pending = null);
      }
    } while (1);
    if (
      (p === null && (a = g),
      (o.baseState = a),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = p),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (l |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (Ut |= l), (e.lanes = l), (e.memoizedState = g);
  }
}
function Xs(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(w(191, o));
        o.call(r);
      }
    }
}
var Bu = new $a.Component().refs;
function Xi(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : W({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var No = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Ht(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = de(),
      o = wt(e),
      i = qe(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = vt(e, i, o)),
      t !== null && (Ae(t, e, o, r), Ur(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = de(),
      o = wt(e),
      i = qe(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = vt(e, i, o)),
      t !== null && (Ae(t, e, o, r), Ur(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = de(),
      r = wt(e),
      o = qe(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = vt(e, o, r)),
      t !== null && (Ae(t, e, r, n), Ur(t, e, r));
  },
};
function Js(e, t, n, r, o, i, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, l)
      : t.prototype && t.prototype.isPureReactComponent
      ? !er(n, r) || !er(o, i)
      : !0
  );
}
function Au(e, t, n) {
  var r = !1,
    o = St,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Ie(i))
      : ((o = ye(t) ? Ot : ue.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? pn(e, o) : St)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = No),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Zs(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && No.enqueueReplaceState(t, t.state, null);
}
function Ji(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = Bu), Al(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = Ie(i))
    : ((i = ye(t) ? Ot : ue.current), (o.context = pn(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Xi(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && No.enqueueReplaceState(o, o.state, null),
      so(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Tn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(w(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(w(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (l) {
            var s = o.refs;
            s === Bu && (s = o.refs = {}),
              l === null ? delete s[i] : (s[i] = l);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(w(284));
    if (!n._owner) throw Error(w(290, e));
  }
  return e;
}
function Tr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      w(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function qs(e) {
  var t = e._init;
  return t(e._payload);
}
function Hu(e) {
  function t(d, c) {
    if (e) {
      var f = d.deletions;
      f === null ? ((d.deletions = [c]), (d.flags |= 16)) : f.push(c);
    }
  }
  function n(d, c) {
    if (!e) return null;
    for (; c !== null; ) t(d, c), (c = c.sibling);
    return null;
  }
  function r(d, c) {
    for (d = new Map(); c !== null; )
      c.key !== null ? d.set(c.key, c) : d.set(c.index, c), (c = c.sibling);
    return d;
  }
  function o(d, c) {
    return (d = _t(d, c)), (d.index = 0), (d.sibling = null), d;
  }
  function i(d, c, f) {
    return (
      (d.index = f),
      e
        ? ((f = d.alternate),
          f !== null
            ? ((f = f.index), f < c ? ((d.flags |= 2), c) : f)
            : ((d.flags |= 2), c))
        : ((d.flags |= 1048576), c)
    );
  }
  function l(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function s(d, c, f, v) {
    return c === null || c.tag !== 6
      ? ((c = di(f, d.mode, v)), (c.return = d), c)
      : ((c = o(c, f)), (c.return = d), c);
  }
  function a(d, c, f, v) {
    var E = f.type;
    return E === Yt
      ? p(d, c, f.props.children, v, f.key)
      : c !== null &&
        (c.elementType === E ||
          (typeof E == "object" &&
            E !== null &&
            E.$$typeof === lt &&
            qs(E) === c.type))
      ? ((v = o(c, f.props)), (v.ref = Tn(d, c, f)), (v.return = d), v)
      : ((v = Qr(f.type, f.key, f.props, null, d.mode, v)),
        (v.ref = Tn(d, c, f)),
        (v.return = d),
        v);
  }
  function u(d, c, f, v) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== f.containerInfo ||
      c.stateNode.implementation !== f.implementation
      ? ((c = fi(f, d.mode, v)), (c.return = d), c)
      : ((c = o(c, f.children || [])), (c.return = d), c);
  }
  function p(d, c, f, v, E) {
    return c === null || c.tag !== 7
      ? ((c = Dt(f, d.mode, v, E)), (c.return = d), c)
      : ((c = o(c, f)), (c.return = d), c);
  }
  function g(d, c, f) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = di("" + c, d.mode, f)), (c.return = d), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case yr:
          return (
            (f = Qr(c.type, c.key, c.props, null, d.mode, f)),
            (f.ref = Tn(d, null, c)),
            (f.return = d),
            f
          );
        case Kt:
          return (c = fi(c, d.mode, f)), (c.return = d), c;
        case lt:
          var v = c._init;
          return g(d, v(c._payload), f);
      }
      if (Mn(c) || En(c))
        return (c = Dt(c, d.mode, f, null)), (c.return = d), c;
      Tr(d, c);
    }
    return null;
  }
  function m(d, c, f, v) {
    var E = c !== null ? c.key : null;
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return E !== null ? null : s(d, c, "" + f, v);
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case yr:
          return f.key === E ? a(d, c, f, v) : null;
        case Kt:
          return f.key === E ? u(d, c, f, v) : null;
        case lt:
          return (E = f._init), m(d, c, E(f._payload), v);
      }
      if (Mn(f) || En(f)) return E !== null ? null : p(d, c, f, v, null);
      Tr(d, f);
    }
    return null;
  }
  function _(d, c, f, v, E) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return (d = d.get(f) || null), s(c, d, "" + v, E);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case yr:
          return (d = d.get(v.key === null ? f : v.key) || null), a(c, d, v, E);
        case Kt:
          return (d = d.get(v.key === null ? f : v.key) || null), u(c, d, v, E);
        case lt:
          var N = v._init;
          return _(d, c, f, N(v._payload), E);
      }
      if (Mn(v) || En(v)) return (d = d.get(f) || null), p(c, d, v, E, null);
      Tr(c, v);
    }
    return null;
  }
  function k(d, c, f, v) {
    for (
      var E = null, N = null, P = c, L = (c = 0), K = null;
      P !== null && L < f.length;
      L++
    ) {
      P.index > L ? ((K = P), (P = null)) : (K = P.sibling);
      var M = m(d, P, f[L], v);
      if (M === null) {
        P === null && (P = K);
        break;
      }
      e && P && M.alternate === null && t(d, P),
        (c = i(M, c, L)),
        N === null ? (E = M) : (N.sibling = M),
        (N = M),
        (P = K);
    }
    if (L === f.length) return n(d, P), A && Tt(d, L), E;
    if (P === null) {
      for (; L < f.length; L++)
        (P = g(d, f[L], v)),
          P !== null &&
            ((c = i(P, c, L)), N === null ? (E = P) : (N.sibling = P), (N = P));
      return A && Tt(d, L), E;
    }
    for (P = r(d, P); L < f.length; L++)
      (K = _(P, d, L, f[L], v)),
        K !== null &&
          (e && K.alternate !== null && P.delete(K.key === null ? L : K.key),
          (c = i(K, c, L)),
          N === null ? (E = K) : (N.sibling = K),
          (N = K));
    return (
      e &&
        P.forEach(function (De) {
          return t(d, De);
        }),
      A && Tt(d, L),
      E
    );
  }
  function y(d, c, f, v) {
    var E = En(f);
    if (typeof E != "function") throw Error(w(150));
    if (((f = E.call(f)), f == null)) throw Error(w(151));
    for (
      var N = (E = null), P = c, L = (c = 0), K = null, M = f.next();
      P !== null && !M.done;
      L++, M = f.next()
    ) {
      P.index > L ? ((K = P), (P = null)) : (K = P.sibling);
      var De = m(d, P, M.value, v);
      if (De === null) {
        P === null && (P = K);
        break;
      }
      e && P && De.alternate === null && t(d, P),
        (c = i(De, c, L)),
        N === null ? (E = De) : (N.sibling = De),
        (N = De),
        (P = K);
    }
    if (M.done) return n(d, P), A && Tt(d, L), E;
    if (P === null) {
      for (; !M.done; L++, M = f.next())
        (M = g(d, M.value, v)),
          M !== null &&
            ((c = i(M, c, L)), N === null ? (E = M) : (N.sibling = M), (N = M));
      return A && Tt(d, L), E;
    }
    for (P = r(d, P); !M.done; L++, M = f.next())
      (M = _(P, d, L, M.value, v)),
        M !== null &&
          (e && M.alternate !== null && P.delete(M.key === null ? L : M.key),
          (c = i(M, c, L)),
          N === null ? (E = M) : (N.sibling = M),
          (N = M));
    return (
      e &&
        P.forEach(function (Sn) {
          return t(d, Sn);
        }),
      A && Tt(d, L),
      E
    );
  }
  function T(d, c, f, v) {
    if (
      (typeof f == "object" &&
        f !== null &&
        f.type === Yt &&
        f.key === null &&
        (f = f.props.children),
      typeof f == "object" && f !== null)
    ) {
      switch (f.$$typeof) {
        case yr:
          e: {
            for (var E = f.key, N = c; N !== null; ) {
              if (N.key === E) {
                if (((E = f.type), E === Yt)) {
                  if (N.tag === 7) {
                    n(d, N.sibling),
                      (c = o(N, f.props.children)),
                      (c.return = d),
                      (d = c);
                    break e;
                  }
                } else if (
                  N.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === lt &&
                    qs(E) === N.type)
                ) {
                  n(d, N.sibling),
                    (c = o(N, f.props)),
                    (c.ref = Tn(d, N, f)),
                    (c.return = d),
                    (d = c);
                  break e;
                }
                n(d, N);
                break;
              } else t(d, N);
              N = N.sibling;
            }
            f.type === Yt
              ? ((c = Dt(f.props.children, d.mode, v, f.key)),
                (c.return = d),
                (d = c))
              : ((v = Qr(f.type, f.key, f.props, null, d.mode, v)),
                (v.ref = Tn(d, c, f)),
                (v.return = d),
                (d = v));
          }
          return l(d);
        case Kt:
          e: {
            for (N = f.key; c !== null; ) {
              if (c.key === N)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === f.containerInfo &&
                  c.stateNode.implementation === f.implementation
                ) {
                  n(d, c.sibling),
                    (c = o(c, f.children || [])),
                    (c.return = d),
                    (d = c);
                  break e;
                } else {
                  n(d, c);
                  break;
                }
              else t(d, c);
              c = c.sibling;
            }
            (c = fi(f, d.mode, v)), (c.return = d), (d = c);
          }
          return l(d);
        case lt:
          return (N = f._init), T(d, c, N(f._payload), v);
      }
      if (Mn(f)) return k(d, c, f, v);
      if (En(f)) return y(d, c, f, v);
      Tr(d, f);
    }
    return (typeof f == "string" && f !== "") || typeof f == "number"
      ? ((f = "" + f),
        c !== null && c.tag === 6
          ? (n(d, c.sibling), (c = o(c, f)), (c.return = d), (d = c))
          : (n(d, c), (c = di(f, d.mode, v)), (c.return = d), (d = c)),
        l(d))
      : n(d, c);
  }
  return T;
}
var mn = Hu(!0),
  Vu = Hu(!1),
  hr = {},
  Ye = Et(hr),
  or = Et(hr),
  ir = Et(hr);
function It(e) {
  if (e === hr) throw Error(w(174));
  return e;
}
function Hl(e, t) {
  switch (($(ir, t), $(or, e), $(Ye, hr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Li(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Li(t, e));
  }
  B(Ye), $(Ye, t);
}
function gn() {
  B(Ye), B(or), B(ir);
}
function Wu(e) {
  It(ir.current);
  var t = It(Ye.current),
    n = Li(t, e.type);
  t !== n && ($(or, e), $(Ye, n));
}
function Vl(e) {
  or.current === e && (B(Ye), B(or));
}
var H = Et(0);
function ao(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var ii = [];
function Wl() {
  for (var e = 0; e < ii.length; e++)
    ii[e]._workInProgressVersionPrimary = null;
  ii.length = 0;
}
var Br = rt.ReactCurrentDispatcher,
  li = rt.ReactCurrentBatchConfig,
  $t = 0,
  V = null,
  Z = null,
  te = null,
  uo = !1,
  Hn = !1,
  lr = 0,
  Yf = 0;
function le() {
  throw Error(w(321));
}
function Ql(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!He(e[n], t[n])) return !1;
  return !0;
}
function Kl(e, t, n, r, o, i) {
  if (
    (($t = i),
    (V = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Br.current = e === null || e.memoizedState === null ? Zf : qf),
    (e = n(r, o)),
    Hn)
  ) {
    i = 0;
    do {
      if (((Hn = !1), (lr = 0), 25 <= i)) throw Error(w(301));
      (i += 1),
        (te = Z = null),
        (t.updateQueue = null),
        (Br.current = bf),
        (e = n(r, o));
    } while (Hn);
  }
  if (
    ((Br.current = co),
    (t = Z !== null && Z.next !== null),
    ($t = 0),
    (te = Z = V = null),
    (uo = !1),
    t)
  )
    throw Error(w(300));
  return e;
}
function Yl() {
  var e = lr !== 0;
  return (lr = 0), e;
}
function We() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return te === null ? (V.memoizedState = te = e) : (te = te.next = e), te;
}
function Me() {
  if (Z === null) {
    var e = V.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Z.next;
  var t = te === null ? V.memoizedState : te.next;
  if (t !== null) (te = t), (Z = e);
  else {
    if (e === null) throw Error(w(310));
    (Z = e),
      (e = {
        memoizedState: Z.memoizedState,
        baseState: Z.baseState,
        baseQueue: Z.baseQueue,
        queue: Z.queue,
        next: null,
      }),
      te === null ? (V.memoizedState = te = e) : (te = te.next = e);
  }
  return te;
}
function sr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function si(e) {
  var t = Me(),
    n = t.queue;
  if (n === null) throw Error(w(311));
  n.lastRenderedReducer = e;
  var r = Z,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var l = o.next;
      (o.next = i.next), (i.next = l);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var s = (l = null),
      a = null,
      u = i;
    do {
      var p = u.lane;
      if (($t & p) === p)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var g = {
          lane: p,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((s = a = g), (l = r)) : (a = a.next = g),
          (V.lanes |= p),
          (Ut |= p);
      }
      u = u.next;
    } while (u !== null && u !== i);
    a === null ? (l = r) : (a.next = s),
      He(r, t.memoizedState) || (ge = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (V.lanes |= i), (Ut |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ai(e) {
  var t = Me(),
    n = t.queue;
  if (n === null) throw Error(w(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var l = (o = o.next);
    do (i = e(i, l.action)), (l = l.next);
    while (l !== o);
    He(i, t.memoizedState) || (ge = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Qu() {}
function Ku(e, t) {
  var n = V,
    r = Me(),
    o = t(),
    i = !He(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (ge = !0)),
    (r = r.queue),
    Gl(Xu.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (te !== null && te.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ar(9, Gu.bind(null, n, r, o, t), void 0, null),
      ne === null)
    )
      throw Error(w(349));
    $t & 30 || Yu(n, t, o);
  }
  return o;
}
function Yu(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = V.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (V.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Gu(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Ju(t) && Zu(e);
}
function Xu(e, t, n) {
  return n(function () {
    Ju(t) && Zu(e);
  });
}
function Ju(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !He(e, n);
  } catch {
    return !0;
  }
}
function Zu(e) {
  var t = tt(e, 1);
  t !== null && Ae(t, e, 1, -1);
}
function bs(e) {
  var t = We();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: sr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Jf.bind(null, V, e)),
    [t.memoizedState, e]
  );
}
function ar(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = V.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (V.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function qu() {
  return Me().memoizedState;
}
function Ar(e, t, n, r) {
  var o = We();
  (V.flags |= e),
    (o.memoizedState = ar(1 | t, n, void 0, r === void 0 ? null : r));
}
function Po(e, t, n, r) {
  var o = Me();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Z !== null) {
    var l = Z.memoizedState;
    if (((i = l.destroy), r !== null && Ql(r, l.deps))) {
      o.memoizedState = ar(t, n, i, r);
      return;
    }
  }
  (V.flags |= e), (o.memoizedState = ar(1 | t, n, i, r));
}
function ea(e, t) {
  return Ar(8390656, 8, e, t);
}
function Gl(e, t) {
  return Po(2048, 8, e, t);
}
function bu(e, t) {
  return Po(4, 2, e, t);
}
function ec(e, t) {
  return Po(4, 4, e, t);
}
function tc(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function nc(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Po(4, 4, tc.bind(null, t, e), n)
  );
}
function Xl() {}
function rc(e, t) {
  var n = Me();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ql(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function oc(e, t) {
  var n = Me();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ql(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function ic(e, t, n) {
  return $t & 21
    ? (He(n, t) || ((n = au()), (V.lanes |= n), (Ut |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ge = !0)), (e.memoizedState = n));
}
function Gf(e, t) {
  var n = F;
  (F = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = li.transition;
  li.transition = {};
  try {
    e(!1), t();
  } finally {
    (F = n), (li.transition = r);
  }
}
function lc() {
  return Me().memoizedState;
}
function Xf(e, t, n) {
  var r = wt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    sc(e))
  )
    ac(t, n);
  else if (((n = $u(e, t, n, r)), n !== null)) {
    var o = de();
    Ae(n, e, r, o), uc(n, t, r);
  }
}
function Jf(e, t, n) {
  var r = wt(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (sc(e)) ac(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var l = t.lastRenderedState,
          s = i(l, n);
        if (((o.hasEagerState = !0), (o.eagerState = s), He(s, l))) {
          var a = t.interleaved;
          a === null
            ? ((o.next = o), Bl(t))
            : ((o.next = a.next), (a.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = $u(e, t, o, r)),
      n !== null && ((o = de()), Ae(n, e, r, o), uc(n, t, r));
  }
}
function sc(e) {
  var t = e.alternate;
  return e === V || (t !== null && t === V);
}
function ac(e, t) {
  Hn = uo = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function uc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Nl(e, n);
  }
}
var co = {
    readContext: Ie,
    useCallback: le,
    useContext: le,
    useEffect: le,
    useImperativeHandle: le,
    useInsertionEffect: le,
    useLayoutEffect: le,
    useMemo: le,
    useReducer: le,
    useRef: le,
    useState: le,
    useDebugValue: le,
    useDeferredValue: le,
    useTransition: le,
    useMutableSource: le,
    useSyncExternalStore: le,
    useId: le,
    unstable_isNewReconciler: !1,
  },
  Zf = {
    readContext: Ie,
    useCallback: function (e, t) {
      return (We().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ie,
    useEffect: ea,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ar(4194308, 4, tc.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ar(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ar(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = We();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = We();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Xf.bind(null, V, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = We();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: bs,
    useDebugValue: Xl,
    useDeferredValue: function (e) {
      return (We().memoizedState = e);
    },
    useTransition: function () {
      var e = bs(!1),
        t = e[0];
      return (e = Gf.bind(null, e[1])), (We().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = V,
        o = We();
      if (A) {
        if (n === void 0) throw Error(w(407));
        n = n();
      } else {
        if (((n = t()), ne === null)) throw Error(w(349));
        $t & 30 || Yu(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        ea(Xu.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        ar(9, Gu.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = We(),
        t = ne.identifierPrefix;
      if (A) {
        var n = Ze,
          r = Je;
        (n = (r & ~(1 << (32 - Be(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = lr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Yf++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  qf = {
    readContext: Ie,
    useCallback: rc,
    useContext: Ie,
    useEffect: Gl,
    useImperativeHandle: nc,
    useInsertionEffect: bu,
    useLayoutEffect: ec,
    useMemo: oc,
    useReducer: si,
    useRef: qu,
    useState: function () {
      return si(sr);
    },
    useDebugValue: Xl,
    useDeferredValue: function (e) {
      var t = Me();
      return ic(t, Z.memoizedState, e);
    },
    useTransition: function () {
      var e = si(sr)[0],
        t = Me().memoizedState;
      return [e, t];
    },
    useMutableSource: Qu,
    useSyncExternalStore: Ku,
    useId: lc,
    unstable_isNewReconciler: !1,
  },
  bf = {
    readContext: Ie,
    useCallback: rc,
    useContext: Ie,
    useEffect: Gl,
    useImperativeHandle: nc,
    useInsertionEffect: bu,
    useLayoutEffect: ec,
    useMemo: oc,
    useReducer: ai,
    useRef: qu,
    useState: function () {
      return ai(sr);
    },
    useDebugValue: Xl,
    useDeferredValue: function (e) {
      var t = Me();
      return Z === null ? (t.memoizedState = e) : ic(t, Z.memoizedState, e);
    },
    useTransition: function () {
      var e = ai(sr)[0],
        t = Me().memoizedState;
      return [e, t];
    },
    useMutableSource: Qu,
    useSyncExternalStore: Ku,
    useId: lc,
    unstable_isNewReconciler: !1,
  };
function vn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Nd(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function ui(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Zi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var ep = typeof WeakMap == "function" ? WeakMap : Map;
function cc(e, t, n) {
  (n = qe(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      po || ((po = !0), (sl = r)), Zi(e, t);
    }),
    n
  );
}
function dc(e, t, n) {
  (n = qe(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Zi(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Zi(e, t),
          typeof r != "function" &&
            (yt === null ? (yt = new Set([this])) : yt.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: l !== null ? l : "",
        });
      }),
    n
  );
}
function ta(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new ep();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = hp.bind(null, e, t, n)), t.then(e, e));
}
function na(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ra(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = qe(-1, 1)), (t.tag = 2), vt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var tp = rt.ReactCurrentOwner,
  ge = !1;
function ce(e, t, n, r) {
  t.child = e === null ? Vu(t, null, n, r) : mn(t, e.child, n, r);
}
function oa(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    un(t, o),
    (r = Kl(e, t, n, r, i, o)),
    (n = Yl()),
    e !== null && !ge
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        nt(e, t, o))
      : (A && n && Ml(t), (t.flags |= 1), ce(e, t, r, o), t.child)
  );
}
function ia(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !rs(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), fc(e, t, i, r, o))
      : ((e = Qr(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var l = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : er), n(l, r) && e.ref === t.ref)
    )
      return nt(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = _t(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function fc(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (er(i, r) && e.ref === t.ref)
      if (((ge = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (ge = !0);
      else return (t.lanes = e.lanes), nt(e, t, o);
  }
  return qi(e, t, n, r, o);
}
function pc(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        $(rn, ke),
        (ke |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          $(rn, ke),
          (ke |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        $(rn, ke),
        (ke |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      $(rn, ke),
      (ke |= r);
  return ce(e, t, o, n), t.child;
}
function hc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function qi(e, t, n, r, o) {
  var i = ye(n) ? Ot : ue.current;
  return (
    (i = pn(t, i)),
    un(t, o),
    (n = Kl(e, t, n, r, i, o)),
    (r = Yl()),
    e !== null && !ge
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        nt(e, t, o))
      : (A && r && Ml(t), (t.flags |= 1), ce(e, t, n, o), t.child)
  );
}
function la(e, t, n, r, o) {
  if (ye(n)) {
    var i = !0;
    no(t);
  } else i = !1;
  if ((un(t, o), t.stateNode === null))
    Hr(e, t), Au(t, n, r), Ji(t, n, r, o), (r = !0);
  else if (e === null) {
    var l = t.stateNode,
      s = t.memoizedProps;
    l.props = s;
    var a = l.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Ie(u))
      : ((u = ye(n) ? Ot : ue.current), (u = pn(t, u)));
    var p = n.getDerivedStateFromProps,
      g =
        typeof p == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function";
    g ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((s !== r || a !== u) && Zs(t, l, r, u)),
      (st = !1);
    var m = t.memoizedState;
    (l.state = m),
      so(t, r, l, o),
      (a = t.memoizedState),
      s !== r || m !== a || ve.current || st
        ? (typeof p == "function" && (Xi(t, n, p, r), (a = t.memoizedState)),
          (s = st || Js(t, n, s, r, m, a, u))
            ? (g ||
                (typeof l.UNSAFE_componentWillMount != "function" &&
                  typeof l.componentWillMount != "function") ||
                (typeof l.componentWillMount == "function" &&
                  l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == "function" &&
                  l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (l.props = r),
          (l.state = a),
          (l.context = u),
          (r = s))
        : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (l = t.stateNode),
      Uu(e, t),
      (s = t.memoizedProps),
      (u = t.type === t.elementType ? s : Fe(t.type, s)),
      (l.props = u),
      (g = t.pendingProps),
      (m = l.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = Ie(a))
        : ((a = ye(n) ? Ot : ue.current), (a = pn(t, a)));
    var _ = n.getDerivedStateFromProps;
    (p =
      typeof _ == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function") ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((s !== g || m !== a) && Zs(t, l, r, a)),
      (st = !1),
      (m = t.memoizedState),
      (l.state = m),
      so(t, r, l, o);
    var k = t.memoizedState;
    s !== g || m !== k || ve.current || st
      ? (typeof _ == "function" && (Xi(t, n, _, r), (k = t.memoizedState)),
        (u = st || Js(t, n, u, r, m, k, a) || !1)
          ? (p ||
              (typeof l.UNSAFE_componentWillUpdate != "function" &&
                typeof l.componentWillUpdate != "function") ||
              (typeof l.componentWillUpdate == "function" &&
                l.componentWillUpdate(r, k, a),
              typeof l.UNSAFE_componentWillUpdate == "function" &&
                l.UNSAFE_componentWillUpdate(r, k, a)),
            typeof l.componentDidUpdate == "function" && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != "function" ||
              (s === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = k)),
        (l.props = r),
        (l.state = k),
        (l.context = a),
        (r = u))
      : (typeof l.componentDidUpdate != "function" ||
          (s === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return bi(e, t, n, r, i, o);
}
function bi(e, t, n, r, o, i) {
  hc(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return o && Qs(t, n, !1), nt(e, t, i);
  (r = t.stateNode), (tp.current = t);
  var s =
    l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = mn(t, e.child, null, i)), (t.child = mn(t, null, s, i)))
      : ce(e, t, s, i),
    (t.memoizedState = r.state),
    o && Qs(t, n, !0),
    t.child
  );
}
function mc(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Ws(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Ws(e, t.context, !1),
    Hl(e, t.containerInfo);
}
function sa(e, t, n, r, o) {
  return hn(), Ol(o), (t.flags |= 256), ce(e, t, n, r), t.child;
}
var el = { dehydrated: null, treeContext: null, retryLane: 0 };
function tl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function gc(e, t, n) {
  var r = t.pendingProps,
    o = H.current,
    i = !1,
    l = (t.flags & 128) !== 0,
    s;
  if (
    ((s = l) ||
      (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    s
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    $(H, o & 1),
    e === null)
  )
    return (
      Yi(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((l = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (l = { mode: "hidden", children: l }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = l))
                : (i = zo(l, r, 0, null)),
              (e = Dt(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = tl(n)),
              (t.memoizedState = el),
              e)
            : Jl(t, l))
    );
  if (((o = e.memoizedState), o !== null && ((s = o.dehydrated), s !== null)))
    return np(e, t, l, r, s, o, n);
  if (i) {
    (i = r.fallback), (l = t.mode), (o = e.child), (s = o.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(l & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = _t(o, a)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      s !== null ? (i = _t(s, i)) : ((i = Dt(i, l, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? tl(n)
          : {
              baseLanes: l.baseLanes | n,
              cachePool: null,
              transitions: l.transitions,
            }),
      (i.memoizedState = l),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = el),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = _t(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Jl(e, t) {
  return (
    (t = zo({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function zr(e, t, n, r) {
  return (
    r !== null && Ol(r),
    mn(t, e.child, null, n),
    (e = Jl(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function np(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ui(Error(w(422)))), zr(e, t, l, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = zo({ mode: "visible", children: r.children }, o, 0, null)),
        (i = Dt(i, o, l, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && mn(t, e.child, null, l),
        (t.child.memoizedState = tl(l)),
        (t.memoizedState = el),
        i);
  if (!(t.mode & 1)) return zr(e, t, l, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (i = Error(w(419))), (r = ui(i, r, void 0)), zr(e, t, l, r);
  }
  if (((s = (l & e.childLanes) !== 0), ge || s)) {
    if (((r = ne), r !== null)) {
      switch (l & -l) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | l) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), tt(e, o), Ae(r, e, o, -1));
    }
    return ns(), (r = ui(Error(w(421)))), zr(e, t, l, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = mp.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Se = gt(o.nextSibling)),
      (xe = t),
      (A = !0),
      (Ue = null),
      e !== null &&
        ((Te[ze++] = Je),
        (Te[ze++] = Ze),
        (Te[ze++] = Ft),
        (Je = e.id),
        (Ze = e.overflow),
        (Ft = t)),
      (t = Jl(t, r.children)),
      (t.flags |= 4096),
      t);
}
function aa(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Gi(e.return, t, n);
}
function ci(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function vc(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((ce(e, t, r.children, n), (r = H.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && aa(e, n, t);
        else if (e.tag === 19) aa(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if (($(H, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && ao(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          ci(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && ao(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        ci(t, !0, n, null, i);
        break;
      case "together":
        ci(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Hr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function nt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Ut |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(w(153));
  if (t.child !== null) {
    for (
      e = t.child, n = _t(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = _t(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function rp(e, t, n) {
  switch (t.tag) {
    case 3:
      mc(t), hn();
      break;
    case 5:
      Wu(t);
      break;
    case 1:
      ye(t.type) && no(t);
      break;
    case 4:
      Hl(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      $(io, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? ($(H, H.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? gc(e, t, n)
          : ($(H, H.current & 1),
            (e = nt(e, t, n)),
            e !== null ? e.sibling : null);
      $(H, H.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return vc(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        $(H, H.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), pc(e, t, n);
  }
  return nt(e, t, n);
}
var yc, nl, wc, _c;
yc = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
nl = function () {};
wc = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), It(Ye.current);
    var i = null;
    switch (n) {
      case "input":
        (o = Ei(e, o)), (r = Ei(e, r)), (i = []);
        break;
      case "select":
        (o = W({}, o, { value: void 0 })),
          (r = W({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = Pi(e, o)), (r = Pi(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = eo);
    }
    Ti(n, r);
    var l;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var s = o[u];
          for (l in s) s.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Yn.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((s = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && a !== s && (a != null || s != null))
      )
        if (u === "style")
          if (s) {
            for (l in s)
              !s.hasOwnProperty(l) ||
                (a && a.hasOwnProperty(l)) ||
                (n || (n = {}), (n[l] = ""));
            for (l in a)
              a.hasOwnProperty(l) &&
                s[l] !== a[l] &&
                (n || (n = {}), (n[l] = a[l]));
          } else n || (i || (i = []), i.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (s = s ? s.__html : void 0),
              a != null && s !== a && (i = i || []).push(u, a))
            : u === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (i = i || []).push(u, "" + a)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Yn.hasOwnProperty(u)
                ? (a != null && u === "onScroll" && U("scroll", e),
                  i || s === a || (i = []))
                : (i = i || []).push(u, a));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
_c = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function zn(e, t) {
  if (!A)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function se(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function op(e, t, n) {
  var r = t.pendingProps;
  switch ((Dl(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return se(t), null;
    case 1:
      return ye(t.type) && to(), se(t), null;
    case 3:
      return (
        (r = t.stateNode),
        gn(),
        B(ve),
        B(ue),
        Wl(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Lr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ue !== null && (cl(Ue), (Ue = null)))),
        nl(e, t),
        se(t),
        null
      );
    case 5:
      Vl(t);
      var o = It(ir.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        wc(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(w(166));
          return se(t), null;
        }
        if (((e = It(Ye.current)), Lr(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Qe] = t), (r[rr] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              U("cancel", r), U("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              U("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < On.length; o++) U(On[o], r);
              break;
            case "source":
              U("error", r);
              break;
            case "img":
            case "image":
            case "link":
              U("error", r), U("load", r);
              break;
            case "details":
              U("toggle", r);
              break;
            case "input":
              vs(r, i), U("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                U("invalid", r);
              break;
            case "textarea":
              ws(r, i), U("invalid", r);
          }
          Ti(n, i), (o = null);
          for (var l in i)
            if (i.hasOwnProperty(l)) {
              var s = i[l];
              l === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (i.suppressHydrationWarning !== !0 &&
                      Pr(r.textContent, s, e),
                    (o = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (i.suppressHydrationWarning !== !0 &&
                      Pr(r.textContent, s, e),
                    (o = ["children", "" + s]))
                : Yn.hasOwnProperty(l) &&
                  s != null &&
                  l === "onScroll" &&
                  U("scroll", r);
            }
          switch (n) {
            case "input":
              wr(r), ys(r, i, !0);
              break;
            case "textarea":
              wr(r), _s(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = eo);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (l = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Ya(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = l.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = l.createElement(n, { is: r.is }))
                : ((e = l.createElement(n)),
                  n === "select" &&
                    ((l = e),
                    r.multiple
                      ? (l.multiple = !0)
                      : r.size && (l.size = r.size)))
              : (e = l.createElementNS(e, n)),
            (e[Qe] = t),
            (e[rr] = r),
            yc(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = zi(n, r)), n)) {
              case "dialog":
                U("cancel", e), U("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                U("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < On.length; o++) U(On[o], e);
                o = r;
                break;
              case "source":
                U("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                U("error", e), U("load", e), (o = r);
                break;
              case "details":
                U("toggle", e), (o = r);
                break;
              case "input":
                vs(e, r), (o = Ei(e, r)), U("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = W({}, r, { value: void 0 })),
                  U("invalid", e);
                break;
              case "textarea":
                ws(e, r), (o = Pi(e, r)), U("invalid", e);
                break;
              default:
                o = r;
            }
            Ti(n, o), (s = o);
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var a = s[i];
                i === "style"
                  ? Ja(e, a)
                  : i === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && Ga(e, a))
                  : i === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && Gn(e, a)
                    : typeof a == "number" && Gn(e, "" + a)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Yn.hasOwnProperty(i)
                      ? a != null && i === "onScroll" && U("scroll", e)
                      : a != null && _l(e, i, a, l));
              }
            switch (n) {
              case "input":
                wr(e), ys(e, r, !1);
                break;
              case "textarea":
                wr(e), _s(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + kt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? on(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      on(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = eo);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return se(t), null;
    case 6:
      if (e && t.stateNode != null) _c(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(w(166));
        if (((n = It(ir.current)), It(Ye.current), Lr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Qe] = t),
            (i = r.nodeValue !== n) && ((e = xe), e !== null))
          )
            switch (e.tag) {
              case 3:
                Pr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Pr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Qe] = t),
            (t.stateNode = r);
      }
      return se(t), null;
    case 13:
      if (
        (B(H),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (A && Se !== null && t.mode & 1 && !(t.flags & 128))
          Fu(), hn(), (t.flags |= 98560), (i = !1);
        else if (((i = Lr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(w(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(w(317));
            i[Qe] = t;
          } else
            hn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          se(t), (i = !1);
        } else Ue !== null && (cl(Ue), (Ue = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || H.current & 1 ? q === 0 && (q = 3) : ns())),
          t.updateQueue !== null && (t.flags |= 4),
          se(t),
          null);
    case 4:
      return (
        gn(), nl(e, t), e === null && tr(t.stateNode.containerInfo), se(t), null
      );
    case 10:
      return Ul(t.type._context), se(t), null;
    case 17:
      return ye(t.type) && to(), se(t), null;
    case 19:
      if ((B(H), (i = t.memoizedState), i === null)) return se(t), null;
      if (((r = (t.flags & 128) !== 0), (l = i.rendering), l === null))
        if (r) zn(i, !1);
        else {
          if (q !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = ao(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    zn(i, !1),
                    r = l.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (l = i.alternate),
                    l === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = l.childLanes),
                        (i.lanes = l.lanes),
                        (i.child = l.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = l.memoizedProps),
                        (i.memoizedState = l.memoizedState),
                        (i.updateQueue = l.updateQueue),
                        (i.type = l.type),
                        (e = l.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return $(H, (H.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            G() > yn &&
            ((t.flags |= 128), (r = !0), zn(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ao(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              zn(i, !0),
              i.tail === null && i.tailMode === "hidden" && !l.alternate && !A)
            )
              return se(t), null;
          } else
            2 * G() - i.renderingStartTime > yn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), zn(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((n = i.last),
            n !== null ? (n.sibling = l) : (t.child = l),
            (i.last = l));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = G()),
          (t.sibling = null),
          (n = H.current),
          $(H, r ? (n & 1) | 2 : n & 1),
          t)
        : (se(t), null);
    case 22:
    case 23:
      return (
        ts(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ke & 1073741824 && (se(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : se(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(w(156, t.tag));
}
function ip(e, t) {
  switch ((Dl(t), t.tag)) {
    case 1:
      return (
        ye(t.type) && to(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        gn(),
        B(ve),
        B(ue),
        Wl(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Vl(t), null;
    case 13:
      if ((B(H), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(w(340));
        hn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return B(H), null;
    case 4:
      return gn(), null;
    case 10:
      return Ul(t.type._context), null;
    case 22:
    case 23:
      return ts(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Rr = !1,
  ae = !1,
  lp = typeof WeakSet == "function" ? WeakSet : Set,
  x = null;
function nn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Q(e, t, r);
      }
    else n.current = null;
}
function rl(e, t, n) {
  try {
    n();
  } catch (r) {
    Q(e, t, r);
  }
}
var ua = !1;
function sp(e, t) {
  if (((Bi = Zr), (e = Eu()), Il(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var l = 0,
            s = -1,
            a = -1,
            u = 0,
            p = 0,
            g = e,
            m = null;
          t: for (;;) {
            for (
              var _;
              g !== n || (o !== 0 && g.nodeType !== 3) || (s = l + o),
                g !== i || (r !== 0 && g.nodeType !== 3) || (a = l + r),
                g.nodeType === 3 && (l += g.nodeValue.length),
                (_ = g.firstChild) !== null;

            )
              (m = g), (g = _);
            for (;;) {
              if (g === e) break t;
              if (
                (m === n && ++u === o && (s = l),
                m === i && ++p === r && (a = l),
                (_ = g.nextSibling) !== null)
              )
                break;
              (g = m), (m = g.parentNode);
            }
            g = _;
          }
          n = s === -1 || a === -1 ? null : { start: s, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ai = { focusedElem: e, selectionRange: n }, Zr = !1, x = t; x !== null; )
    if (((t = x), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (x = e);
    else
      for (; x !== null; ) {
        t = x;
        try {
          var k = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (k !== null) {
                  var y = k.memoizedProps,
                    T = k.memoizedState,
                    d = t.stateNode,
                    c = d.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : Fe(t.type, y),
                      T
                    );
                  d.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var f = t.stateNode.containerInfo;
                f.nodeType === 1
                  ? (f.textContent = "")
                  : f.nodeType === 9 &&
                    f.documentElement &&
                    f.removeChild(f.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(w(163));
            }
        } catch (v) {
          Q(t, t.return, v);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (x = e);
          break;
        }
        x = t.return;
      }
  return (k = ua), (ua = !1), k;
}
function Vn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && rl(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Lo(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function ol(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function kc(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), kc(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Qe], delete t[rr], delete t[Wi], delete t[Vf], delete t[Wf])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Sc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ca(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Sc(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function il(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = eo));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (il(e, t, n), e = e.sibling; e !== null; ) il(e, t, n), (e = e.sibling);
}
function ll(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ll(e, t, n), e = e.sibling; e !== null; ) ll(e, t, n), (e = e.sibling);
}
var re = null,
  $e = !1;
function ot(e, t, n) {
  for (n = n.child; n !== null; ) xc(e, t, n), (n = n.sibling);
}
function xc(e, t, n) {
  if (Ke && typeof Ke.onCommitFiberUnmount == "function")
    try {
      Ke.onCommitFiberUnmount(_o, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ae || nn(n, t);
    case 6:
      var r = re,
        o = $e;
      (re = null),
        ot(e, t, n),
        (re = r),
        ($e = o),
        re !== null &&
          ($e
            ? ((e = re),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : re.removeChild(n.stateNode));
      break;
    case 18:
      re !== null &&
        ($e
          ? ((e = re),
            (n = n.stateNode),
            e.nodeType === 8
              ? ri(e.parentNode, n)
              : e.nodeType === 1 && ri(e, n),
            qn(e))
          : ri(re, n.stateNode));
      break;
    case 4:
      (r = re),
        (o = $e),
        (re = n.stateNode.containerInfo),
        ($e = !0),
        ot(e, t, n),
        (re = r),
        ($e = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ae &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            l = i.destroy;
          (i = i.tag),
            l !== void 0 && (i & 2 || i & 4) && rl(n, t, l),
            (o = o.next);
        } while (o !== r);
      }
      ot(e, t, n);
      break;
    case 1:
      if (
        !ae &&
        (nn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          Q(n, t, s);
        }
      ot(e, t, n);
      break;
    case 21:
      ot(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ae = (r = ae) || n.memoizedState !== null), ot(e, t, n), (ae = r))
        : ot(e, t, n);
      break;
    default:
      ot(e, t, n);
  }
}
function da(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new lp()),
      t.forEach(function (r) {
        var o = gp.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function Oe(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          l = t,
          s = l;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (re = s.stateNode), ($e = !1);
              break e;
            case 3:
              (re = s.stateNode.containerInfo), ($e = !0);
              break e;
            case 4:
              (re = s.stateNode.containerInfo), ($e = !0);
              break e;
          }
          s = s.return;
        }
        if (re === null) throw Error(w(160));
        xc(i, l, o), (re = null), ($e = !1);
        var a = o.alternate;
        a !== null && (a.return = null), (o.return = null);
      } catch (u) {
        Q(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Ec(t, e), (t = t.sibling);
}
function Ec(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Oe(t, e), Ve(e), r & 4)) {
        try {
          Vn(3, e, e.return), Lo(3, e);
        } catch (y) {
          Q(e, e.return, y);
        }
        try {
          Vn(5, e, e.return);
        } catch (y) {
          Q(e, e.return, y);
        }
      }
      break;
    case 1:
      Oe(t, e), Ve(e), r & 512 && n !== null && nn(n, n.return);
      break;
    case 5:
      if (
        (Oe(t, e),
        Ve(e),
        r & 512 && n !== null && nn(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Gn(o, "");
        } catch (y) {
          Q(e, e.return, y);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          l = n !== null ? n.memoizedProps : i,
          s = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            s === "input" && i.type === "radio" && i.name != null && Qa(o, i),
              zi(s, l);
            var u = zi(s, i);
            for (l = 0; l < a.length; l += 2) {
              var p = a[l],
                g = a[l + 1];
              p === "style"
                ? Ja(o, g)
                : p === "dangerouslySetInnerHTML"
                ? Ga(o, g)
                : p === "children"
                ? Gn(o, g)
                : _l(o, p, g, u);
            }
            switch (s) {
              case "input":
                Ci(o, i);
                break;
              case "textarea":
                Ka(o, i);
                break;
              case "select":
                var m = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var _ = i.value;
                _ != null
                  ? on(o, !!i.multiple, _, !1)
                  : m !== !!i.multiple &&
                    (i.defaultValue != null
                      ? on(o, !!i.multiple, i.defaultValue, !0)
                      : on(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[rr] = i;
          } catch (y) {
            Q(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((Oe(t, e), Ve(e), r & 4)) {
        if (e.stateNode === null) throw Error(w(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (y) {
          Q(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (Oe(t, e), Ve(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          qn(t.containerInfo);
        } catch (y) {
          Q(e, e.return, y);
        }
      break;
    case 4:
      Oe(t, e), Ve(e);
      break;
    case 13:
      Oe(t, e),
        Ve(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (bl = G())),
        r & 4 && da(e);
      break;
    case 22:
      if (
        ((p = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ae = (u = ae) || p), Oe(t, e), (ae = u)) : Oe(t, e),
        Ve(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !p && e.mode & 1)
        )
          for (x = e, p = e.child; p !== null; ) {
            for (g = x = p; x !== null; ) {
              switch (((m = x), (_ = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Vn(4, m, m.return);
                  break;
                case 1:
                  nn(m, m.return);
                  var k = m.stateNode;
                  if (typeof k.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (k.props = t.memoizedProps),
                        (k.state = t.memoizedState),
                        k.componentWillUnmount();
                    } catch (y) {
                      Q(r, n, y);
                    }
                  }
                  break;
                case 5:
                  nn(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    pa(g);
                    continue;
                  }
              }
              _ !== null ? ((_.return = m), (x = _)) : pa(g);
            }
            p = p.sibling;
          }
        e: for (p = null, g = e; ; ) {
          if (g.tag === 5) {
            if (p === null) {
              p = g;
              try {
                (o = g.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((s = g.stateNode),
                      (a = g.memoizedProps.style),
                      (l =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (s.style.display = Xa("display", l)));
              } catch (y) {
                Q(e, e.return, y);
              }
            }
          } else if (g.tag === 6) {
            if (p === null)
              try {
                g.stateNode.nodeValue = u ? "" : g.memoizedProps;
              } catch (y) {
                Q(e, e.return, y);
              }
          } else if (
            ((g.tag !== 22 && g.tag !== 23) ||
              g.memoizedState === null ||
              g === e) &&
            g.child !== null
          ) {
            (g.child.return = g), (g = g.child);
            continue;
          }
          if (g === e) break e;
          for (; g.sibling === null; ) {
            if (g.return === null || g.return === e) break e;
            p === g && (p = null), (g = g.return);
          }
          p === g && (p = null), (g.sibling.return = g.return), (g = g.sibling);
        }
      }
      break;
    case 19:
      Oe(t, e), Ve(e), r & 4 && da(e);
      break;
    case 21:
      break;
    default:
      Oe(t, e), Ve(e);
  }
}
function Ve(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Sc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(w(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Gn(o, ""), (r.flags &= -33));
          var i = ca(e);
          ll(e, i, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            s = ca(e);
          il(e, s, l);
          break;
        default:
          throw Error(w(161));
      }
    } catch (a) {
      Q(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function ap(e, t, n) {
  (x = e), Cc(e);
}
function Cc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; x !== null; ) {
    var o = x,
      i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || Rr;
      if (!l) {
        var s = o.alternate,
          a = (s !== null && s.memoizedState !== null) || ae;
        s = Rr;
        var u = ae;
        if (((Rr = l), (ae = a) && !u))
          for (x = o; x !== null; )
            (l = x),
              (a = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? ha(o)
                : a !== null
                ? ((a.return = l), (x = a))
                : ha(o);
        for (; i !== null; ) (x = i), Cc(i), (i = i.sibling);
        (x = o), (Rr = s), (ae = u);
      }
      fa(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (x = i)) : fa(e);
  }
}
function fa(e) {
  for (; x !== null; ) {
    var t = x;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ae || Lo(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ae)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Fe(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && Xs(t, i, r);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Xs(t, l, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var p = u.memoizedState;
                  if (p !== null) {
                    var g = p.dehydrated;
                    g !== null && qn(g);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(w(163));
          }
        ae || (t.flags & 512 && ol(t));
      } catch (m) {
        Q(t, t.return, m);
      }
    }
    if (t === e) {
      x = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (x = n);
      break;
    }
    x = t.return;
  }
}
function pa(e) {
  for (; x !== null; ) {
    var t = x;
    if (t === e) {
      x = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (x = n);
      break;
    }
    x = t.return;
  }
}
function ha(e) {
  for (; x !== null; ) {
    var t = x;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Lo(4, t);
          } catch (a) {
            Q(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              Q(t, o, a);
            }
          }
          var i = t.return;
          try {
            ol(t);
          } catch (a) {
            Q(t, i, a);
          }
          break;
        case 5:
          var l = t.return;
          try {
            ol(t);
          } catch (a) {
            Q(t, l, a);
          }
      }
    } catch (a) {
      Q(t, t.return, a);
    }
    if (t === e) {
      x = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (x = s);
      break;
    }
    x = t.return;
  }
}
var up = Math.ceil,
  fo = rt.ReactCurrentDispatcher,
  Zl = rt.ReactCurrentOwner,
  je = rt.ReactCurrentBatchConfig,
  D = 0,
  ne = null,
  X = null,
  oe = 0,
  ke = 0,
  rn = Et(0),
  q = 0,
  ur = null,
  Ut = 0,
  To = 0,
  ql = 0,
  Wn = null,
  me = null,
  bl = 0,
  yn = 1 / 0,
  Ge = null,
  po = !1,
  sl = null,
  yt = null,
  jr = !1,
  dt = null,
  ho = 0,
  Qn = 0,
  al = null,
  Vr = -1,
  Wr = 0;
function de() {
  return D & 6 ? G() : Vr !== -1 ? Vr : (Vr = G());
}
function wt(e) {
  return e.mode & 1
    ? D & 2 && oe !== 0
      ? oe & -oe
      : Kf.transition !== null
      ? (Wr === 0 && (Wr = au()), Wr)
      : ((e = F),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : mu(e.type))),
        e)
    : 1;
}
function Ae(e, t, n, r) {
  if (50 < Qn) throw ((Qn = 0), (al = null), Error(w(185)));
  dr(e, n, r),
    (!(D & 2) || e !== ne) &&
      (e === ne && (!(D & 2) && (To |= n), q === 4 && ut(e, oe)),
      we(e, r),
      n === 1 && D === 0 && !(t.mode & 1) && ((yn = G() + 500), Co && Ct()));
}
function we(e, t) {
  var n = e.callbackNode;
  Qd(e, t);
  var r = Jr(e, e === ne ? oe : 0);
  if (r === 0)
    n !== null && xs(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && xs(n), t === 1))
      e.tag === 0 ? Qf(ma.bind(null, e)) : Mu(ma.bind(null, e)),
        Af(function () {
          !(D & 6) && Ct();
        }),
        (n = null);
    else {
      switch (uu(r)) {
        case 1:
          n = Cl;
          break;
        case 4:
          n = lu;
          break;
        case 16:
          n = Xr;
          break;
        case 536870912:
          n = su;
          break;
        default:
          n = Xr;
      }
      n = Ic(n, Nc.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Nc(e, t) {
  if (((Vr = -1), (Wr = 0), D & 6)) throw Error(w(327));
  var n = e.callbackNode;
  if (cn() && e.callbackNode !== n) return null;
  var r = Jr(e, e === ne ? oe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = mo(e, r);
  else {
    t = r;
    var o = D;
    D |= 2;
    var i = Lc();
    (ne !== e || oe !== t) && ((Ge = null), (yn = G() + 500), Mt(e, t));
    do
      try {
        fp();
        break;
      } catch (s) {
        Pc(e, s);
      }
    while (1);
    $l(),
      (fo.current = i),
      (D = o),
      X !== null ? (t = 0) : ((ne = null), (oe = 0), (t = q));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Di(e)), o !== 0 && ((r = o), (t = ul(e, o)))), t === 1)
    )
      throw ((n = ur), Mt(e, 0), ut(e, r), we(e, G()), n);
    if (t === 6) ut(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !cp(o) &&
          ((t = mo(e, r)),
          t === 2 && ((i = Di(e)), i !== 0 && ((r = i), (t = ul(e, i)))),
          t === 1))
      )
        throw ((n = ur), Mt(e, 0), ut(e, r), we(e, G()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(w(345));
        case 2:
          zt(e, me, Ge);
          break;
        case 3:
          if (
            (ut(e, r), (r & 130023424) === r && ((t = bl + 500 - G()), 10 < t))
          ) {
            if (Jr(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              de(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Vi(zt.bind(null, e, me, Ge), t);
            break;
          }
          zt(e, me, Ge);
          break;
        case 4:
          if ((ut(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var l = 31 - Be(r);
            (i = 1 << l), (l = t[l]), l > o && (o = l), (r &= ~i);
          }
          if (
            ((r = o),
            (r = G() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * up(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Vi(zt.bind(null, e, me, Ge), r);
            break;
          }
          zt(e, me, Ge);
          break;
        case 5:
          zt(e, me, Ge);
          break;
        default:
          throw Error(w(329));
      }
    }
  }
  return we(e, G()), e.callbackNode === n ? Nc.bind(null, e) : null;
}
function ul(e, t) {
  var n = Wn;
  return (
    e.current.memoizedState.isDehydrated && (Mt(e, t).flags |= 256),
    (e = mo(e, t)),
    e !== 2 && ((t = me), (me = n), t !== null && cl(t)),
    e
  );
}
function cl(e) {
  me === null ? (me = e) : me.push.apply(me, e);
}
function cp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!He(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function ut(e, t) {
  for (
    t &= ~ql,
      t &= ~To,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Be(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function ma(e) {
  if (D & 6) throw Error(w(327));
  cn();
  var t = Jr(e, 0);
  if (!(t & 1)) return we(e, G()), null;
  var n = mo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Di(e);
    r !== 0 && ((t = r), (n = ul(e, r)));
  }
  if (n === 1) throw ((n = ur), Mt(e, 0), ut(e, t), we(e, G()), n);
  if (n === 6) throw Error(w(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    zt(e, me, Ge),
    we(e, G()),
    null
  );
}
function es(e, t) {
  var n = D;
  D |= 1;
  try {
    return e(t);
  } finally {
    (D = n), D === 0 && ((yn = G() + 500), Co && Ct());
  }
}
function Bt(e) {
  dt !== null && dt.tag === 0 && !(D & 6) && cn();
  var t = D;
  D |= 1;
  var n = je.transition,
    r = F;
  try {
    if (((je.transition = null), (F = 1), e)) return e();
  } finally {
    (F = r), (je.transition = n), (D = t), !(D & 6) && Ct();
  }
}
function ts() {
  (ke = rn.current), B(rn);
}
function Mt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Bf(n)), X !== null))
    for (n = X.return; n !== null; ) {
      var r = n;
      switch ((Dl(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && to();
          break;
        case 3:
          gn(), B(ve), B(ue), Wl();
          break;
        case 5:
          Vl(r);
          break;
        case 4:
          gn();
          break;
        case 13:
          B(H);
          break;
        case 19:
          B(H);
          break;
        case 10:
          Ul(r.type._context);
          break;
        case 22:
        case 23:
          ts();
      }
      n = n.return;
    }
  if (
    ((ne = e),
    (X = e = _t(e.current, null)),
    (oe = ke = t),
    (q = 0),
    (ur = null),
    (ql = To = Ut = 0),
    (me = Wn = null),
    jt !== null)
  ) {
    for (t = 0; t < jt.length; t++)
      if (((n = jt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var l = i.next;
          (i.next = o), (r.next = l);
        }
        n.pending = r;
      }
    jt = null;
  }
  return e;
}
function Pc(e, t) {
  do {
    var n = X;
    try {
      if (($l(), (Br.current = co), uo)) {
        for (var r = V.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        uo = !1;
      }
      if (
        (($t = 0),
        (te = Z = V = null),
        (Hn = !1),
        (lr = 0),
        (Zl.current = null),
        n === null || n.return === null)
      ) {
        (q = 1), (ur = t), (X = null);
        break;
      }
      e: {
        var i = e,
          l = n.return,
          s = n,
          a = t;
        if (
          ((t = oe),
          (s.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            p = s,
            g = p.tag;
          if (!(p.mode & 1) && (g === 0 || g === 11 || g === 15)) {
            var m = p.alternate;
            m
              ? ((p.updateQueue = m.updateQueue),
                (p.memoizedState = m.memoizedState),
                (p.lanes = m.lanes))
              : ((p.updateQueue = null), (p.memoizedState = null));
          }
          var _ = na(l);
          if (_ !== null) {
            (_.flags &= -257),
              ra(_, l, s, i, t),
              _.mode & 1 && ta(i, u, t),
              (t = _),
              (a = u);
            var k = t.updateQueue;
            if (k === null) {
              var y = new Set();
              y.add(a), (t.updateQueue = y);
            } else k.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              ta(i, u, t), ns();
              break e;
            }
            a = Error(w(426));
          }
        } else if (A && s.mode & 1) {
          var T = na(l);
          if (T !== null) {
            !(T.flags & 65536) && (T.flags |= 256),
              ra(T, l, s, i, t),
              Ol(vn(a, s));
            break e;
          }
        }
        (i = a = vn(a, s)),
          q !== 4 && (q = 2),
          Wn === null ? (Wn = [i]) : Wn.push(i),
          (i = l);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var d = cc(i, a, t);
              Gs(i, d);
              break e;
            case 1:
              s = a;
              var c = i.type,
                f = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (f !== null &&
                    typeof f.componentDidCatch == "function" &&
                    (yt === null || !yt.has(f))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var v = dc(i, s, t);
                Gs(i, v);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      zc(n);
    } catch (E) {
      (t = E), X === n && n !== null && (X = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Lc() {
  var e = fo.current;
  return (fo.current = co), e === null ? co : e;
}
function ns() {
  (q === 0 || q === 3 || q === 2) && (q = 4),
    ne === null || (!(Ut & 268435455) && !(To & 268435455)) || ut(ne, oe);
}
function mo(e, t) {
  var n = D;
  D |= 2;
  var r = Lc();
  (ne !== e || oe !== t) && ((Ge = null), Mt(e, t));
  do
    try {
      dp();
      break;
    } catch (o) {
      Pc(e, o);
    }
  while (1);
  if (($l(), (D = n), (fo.current = r), X !== null)) throw Error(w(261));
  return (ne = null), (oe = 0), q;
}
function dp() {
  for (; X !== null; ) Tc(X);
}
function fp() {
  for (; X !== null && !Od(); ) Tc(X);
}
function Tc(e) {
  var t = jc(e.alternate, e, ke);
  (e.memoizedProps = e.pendingProps),
    t === null ? zc(e) : (X = t),
    (Zl.current = null);
}
function zc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = ip(n, t)), n !== null)) {
        (n.flags &= 32767), (X = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (q = 6), (X = null);
        return;
      }
    } else if (((n = op(n, t, ke)), n !== null)) {
      X = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      X = t;
      return;
    }
    X = t = e;
  } while (t !== null);
  q === 0 && (q = 5);
}
function zt(e, t, n) {
  var r = F,
    o = je.transition;
  try {
    (je.transition = null), (F = 1), pp(e, t, n, r);
  } finally {
    (je.transition = o), (F = r);
  }
  return null;
}
function pp(e, t, n, r) {
  do cn();
  while (dt !== null);
  if (D & 6) throw Error(w(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(w(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Kd(e, i),
    e === ne && ((X = ne = null), (oe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      jr ||
      ((jr = !0),
      Ic(Xr, function () {
        return cn(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = je.transition), (je.transition = null);
    var l = F;
    F = 1;
    var s = D;
    (D |= 4),
      (Zl.current = null),
      sp(e, n),
      Ec(n, e),
      If(Ai),
      (Zr = !!Bi),
      (Ai = Bi = null),
      (e.current = n),
      ap(n),
      Fd(),
      (D = s),
      (F = l),
      (je.transition = i);
  } else e.current = n;
  if (
    (jr && ((jr = !1), (dt = e), (ho = o)),
    (i = e.pendingLanes),
    i === 0 && (yt = null),
    Bd(n.stateNode),
    we(e, G()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (po) throw ((po = !1), (e = sl), (sl = null), e);
  return (
    ho & 1 && e.tag !== 0 && cn(),
    (i = e.pendingLanes),
    i & 1 ? (e === al ? Qn++ : ((Qn = 0), (al = e))) : (Qn = 0),
    Ct(),
    null
  );
}
function cn() {
  if (dt !== null) {
    var e = uu(ho),
      t = je.transition,
      n = F;
    try {
      if (((je.transition = null), (F = 16 > e ? 16 : e), dt === null))
        var r = !1;
      else {
        if (((e = dt), (dt = null), (ho = 0), D & 6)) throw Error(w(331));
        var o = D;
        for (D |= 4, x = e.current; x !== null; ) {
          var i = x,
            l = i.child;
          if (x.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var a = 0; a < s.length; a++) {
                var u = s[a];
                for (x = u; x !== null; ) {
                  var p = x;
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Vn(8, p, i);
                  }
                  var g = p.child;
                  if (g !== null) (g.return = p), (x = g);
                  else
                    for (; x !== null; ) {
                      p = x;
                      var m = p.sibling,
                        _ = p.return;
                      if ((kc(p), p === u)) {
                        x = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = _), (x = m);
                        break;
                      }
                      x = _;
                    }
                }
              }
              var k = i.alternate;
              if (k !== null) {
                var y = k.child;
                if (y !== null) {
                  k.child = null;
                  do {
                    var T = y.sibling;
                    (y.sibling = null), (y = T);
                  } while (y !== null);
                }
              }
              x = i;
            }
          }
          if (i.subtreeFlags & 2064 && l !== null) (l.return = i), (x = l);
          else
            e: for (; x !== null; ) {
              if (((i = x), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Vn(9, i, i.return);
                }
              var d = i.sibling;
              if (d !== null) {
                (d.return = i.return), (x = d);
                break e;
              }
              x = i.return;
            }
        }
        var c = e.current;
        for (x = c; x !== null; ) {
          l = x;
          var f = l.child;
          if (l.subtreeFlags & 2064 && f !== null) (f.return = l), (x = f);
          else
            e: for (l = c; x !== null; ) {
              if (((s = x), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Lo(9, s);
                  }
                } catch (E) {
                  Q(s, s.return, E);
                }
              if (s === l) {
                x = null;
                break e;
              }
              var v = s.sibling;
              if (v !== null) {
                (v.return = s.return), (x = v);
                break e;
              }
              x = s.return;
            }
        }
        if (
          ((D = o), Ct(), Ke && typeof Ke.onPostCommitFiberRoot == "function")
        )
          try {
            Ke.onPostCommitFiberRoot(_o, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (F = n), (je.transition = t);
    }
  }
  return !1;
}
function ga(e, t, n) {
  (t = vn(n, t)),
    (t = cc(e, t, 1)),
    (e = vt(e, t, 1)),
    (t = de()),
    e !== null && (dr(e, 1, t), we(e, t));
}
function Q(e, t, n) {
  if (e.tag === 3) ga(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        ga(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (yt === null || !yt.has(r)))
        ) {
          (e = vn(n, e)),
            (e = dc(t, e, 1)),
            (t = vt(t, e, 1)),
            (e = de()),
            t !== null && (dr(t, 1, e), we(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function hp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = de()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ne === e &&
      (oe & n) === n &&
      (q === 4 || (q === 3 && (oe & 130023424) === oe && 500 > G() - bl)
        ? Mt(e, 0)
        : (ql |= n)),
    we(e, t);
}
function Rc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Sr), (Sr <<= 1), !(Sr & 130023424) && (Sr = 4194304))
      : (t = 1));
  var n = de();
  (e = tt(e, t)), e !== null && (dr(e, t, n), we(e, n));
}
function mp(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Rc(e, n);
}
function gp(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(w(314));
  }
  r !== null && r.delete(t), Rc(e, n);
}
var jc;
jc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ve.current) ge = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ge = !1), rp(e, t, n);
      ge = !!(e.flags & 131072);
    }
  else (ge = !1), A && t.flags & 1048576 && Du(t, oo, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Hr(e, t), (e = t.pendingProps);
      var o = pn(t, ue.current);
      un(t, n), (o = Kl(null, t, r, e, o, n));
      var i = Yl();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ye(r) ? ((i = !0), no(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Al(t),
            (o.updater = No),
            (t.stateNode = o),
            (o._reactInternals = t),
            Ji(t, r, e, n),
            (t = bi(null, t, r, !0, i, n)))
          : ((t.tag = 0), A && i && Ml(t), ce(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Hr(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = yp(r)),
          (e = Fe(r, e)),
          o)
        ) {
          case 0:
            t = qi(null, t, r, e, n);
            break e;
          case 1:
            t = la(null, t, r, e, n);
            break e;
          case 11:
            t = oa(null, t, r, e, n);
            break e;
          case 14:
            t = ia(null, t, r, Fe(r.type, e), n);
            break e;
        }
        throw Error(w(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Fe(r, o)),
        qi(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Fe(r, o)),
        la(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((mc(t), e === null)) throw Error(w(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          Uu(e, t),
          so(t, r, null, n);
        var l = t.memoizedState;
        if (((r = l.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = vn(Error(w(423)), t)), (t = sa(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = vn(Error(w(424)), t)), (t = sa(e, t, r, n, o));
            break e;
          } else
            for (
              Se = gt(t.stateNode.containerInfo.firstChild),
                xe = t,
                A = !0,
                Ue = null,
                n = Vu(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((hn(), r === o)) {
            t = nt(e, t, n);
            break e;
          }
          ce(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Wu(t),
        e === null && Yi(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (l = o.children),
        Hi(r, o) ? (l = null) : i !== null && Hi(r, i) && (t.flags |= 32),
        hc(e, t),
        ce(e, t, l, n),
        t.child
      );
    case 6:
      return e === null && Yi(t), null;
    case 13:
      return gc(e, t, n);
    case 4:
      return (
        Hl(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = mn(t, null, r, n)) : ce(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Fe(r, o)),
        oa(e, t, r, o, n)
      );
    case 7:
      return ce(e, t, t.pendingProps, n), t.child;
    case 8:
      return ce(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ce(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (l = o.value),
          $(io, r._currentValue),
          (r._currentValue = l),
          i !== null)
        )
          if (He(i.value, l)) {
            if (i.children === o.children && !ve.current) {
              t = nt(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var s = i.dependencies;
              if (s !== null) {
                l = i.child;
                for (var a = s.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (i.tag === 1) {
                      (a = qe(-1, n & -n)), (a.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var p = u.pending;
                        p === null
                          ? (a.next = a)
                          : ((a.next = p.next), (p.next = a)),
                          (u.pending = a);
                      }
                    }
                    (i.lanes |= n),
                      (a = i.alternate),
                      a !== null && (a.lanes |= n),
                      Gi(i.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (i.tag === 10) l = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((l = i.return), l === null)) throw Error(w(341));
                (l.lanes |= n),
                  (s = l.alternate),
                  s !== null && (s.lanes |= n),
                  Gi(l, n, t),
                  (l = i.sibling);
              } else l = i.child;
              if (l !== null) l.return = i;
              else
                for (l = i; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((i = l.sibling), i !== null)) {
                    (i.return = l.return), (l = i);
                    break;
                  }
                  l = l.return;
                }
              i = l;
            }
        ce(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        un(t, n),
        (o = Ie(o)),
        (r = r(o)),
        (t.flags |= 1),
        ce(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = Fe(r, t.pendingProps)),
        (o = Fe(r.type, o)),
        ia(e, t, r, o, n)
      );
    case 15:
      return fc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Fe(r, o)),
        Hr(e, t),
        (t.tag = 1),
        ye(r) ? ((e = !0), no(t)) : (e = !1),
        un(t, n),
        Au(t, r, o),
        Ji(t, r, o, n),
        bi(null, t, r, !0, e, n)
      );
    case 19:
      return vc(e, t, n);
    case 22:
      return pc(e, t, n);
  }
  throw Error(w(156, t.tag));
};
function Ic(e, t) {
  return iu(e, t);
}
function vp(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Re(e, t, n, r) {
  return new vp(e, t, n, r);
}
function rs(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function yp(e) {
  if (typeof e == "function") return rs(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Sl)) return 11;
    if (e === xl) return 14;
  }
  return 2;
}
function _t(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Re(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Qr(e, t, n, r, o, i) {
  var l = 2;
  if (((r = e), typeof e == "function")) rs(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else
    e: switch (e) {
      case Yt:
        return Dt(n.children, o, i, t);
      case kl:
        (l = 8), (o |= 8);
        break;
      case _i:
        return (
          (e = Re(12, n, t, o | 2)), (e.elementType = _i), (e.lanes = i), e
        );
      case ki:
        return (e = Re(13, n, t, o)), (e.elementType = ki), (e.lanes = i), e;
      case Si:
        return (e = Re(19, n, t, o)), (e.elementType = Si), (e.lanes = i), e;
      case Ha:
        return zo(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Ba:
              l = 10;
              break e;
            case Aa:
              l = 9;
              break e;
            case Sl:
              l = 11;
              break e;
            case xl:
              l = 14;
              break e;
            case lt:
              (l = 16), (r = null);
              break e;
          }
        throw Error(w(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Re(l, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Dt(e, t, n, r) {
  return (e = Re(7, e, r, t)), (e.lanes = n), e;
}
function zo(e, t, n, r) {
  return (
    (e = Re(22, e, r, t)),
    (e.elementType = Ha),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function di(e, t, n) {
  return (e = Re(6, e, null, t)), (e.lanes = n), e;
}
function fi(e, t, n) {
  return (
    (t = Re(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function wp(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ko(0)),
    (this.expirationTimes = Ko(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ko(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function os(e, t, n, r, o, i, l, s, a) {
  return (
    (e = new wp(e, t, n, s, a)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Re(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Al(i),
    e
  );
}
function _p(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Kt,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Mc(e) {
  if (!e) return St;
  e = e._reactInternals;
  e: {
    if (Ht(e) !== e || e.tag !== 1) throw Error(w(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ye(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(w(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ye(n)) return Iu(e, n, t);
  }
  return t;
}
function Dc(e, t, n, r, o, i, l, s, a) {
  return (
    (e = os(n, r, !0, e, o, i, l, s, a)),
    (e.context = Mc(null)),
    (n = e.current),
    (r = de()),
    (o = wt(n)),
    (i = qe(r, o)),
    (i.callback = t ?? null),
    vt(n, i, o),
    (e.current.lanes = o),
    dr(e, o, r),
    we(e, r),
    e
  );
}
function Ro(e, t, n, r) {
  var o = t.current,
    i = de(),
    l = wt(o);
  return (
    (n = Mc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = qe(i, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = vt(o, t, l)),
    e !== null && (Ae(e, o, l, i), Ur(e, o, l)),
    l
  );
}
function go(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function va(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function is(e, t) {
  va(e, t), (e = e.alternate) && va(e, t);
}
function kp() {
  return null;
}
var Oc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ls(e) {
  this._internalRoot = e;
}
jo.prototype.render = ls.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(w(409));
  Ro(e, t, null, null);
};
jo.prototype.unmount = ls.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Bt(function () {
      Ro(null, e, null, null);
    }),
      (t[et] = null);
  }
};
function jo(e) {
  this._internalRoot = e;
}
jo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = fu();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < at.length && t !== 0 && t < at[n].priority; n++);
    at.splice(n, 0, e), n === 0 && hu(e);
  }
};
function ss(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Io(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function ya() {}
function Sp(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = go(l);
        i.call(u);
      };
    }
    var l = Dc(t, r, e, 0, null, !1, !1, "", ya);
    return (
      (e._reactRootContainer = l),
      (e[et] = l.current),
      tr(e.nodeType === 8 ? e.parentNode : e),
      Bt(),
      l
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var u = go(a);
      s.call(u);
    };
  }
  var a = os(e, 0, !1, null, null, !1, !1, "", ya);
  return (
    (e._reactRootContainer = a),
    (e[et] = a.current),
    tr(e.nodeType === 8 ? e.parentNode : e),
    Bt(function () {
      Ro(t, a, n, r);
    }),
    a
  );
}
function Mo(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof o == "function") {
      var s = o;
      o = function () {
        var a = go(l);
        s.call(a);
      };
    }
    Ro(t, l, e, o);
  } else l = Sp(n, t, e, o, r);
  return go(l);
}
cu = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Dn(t.pendingLanes);
        n !== 0 &&
          (Nl(t, n | 1), we(t, G()), !(D & 6) && ((yn = G() + 500), Ct()));
      }
      break;
    case 13:
      Bt(function () {
        var r = tt(e, 1);
        if (r !== null) {
          var o = de();
          Ae(r, e, 1, o);
        }
      }),
        is(e, 1);
  }
};
Pl = function (e) {
  if (e.tag === 13) {
    var t = tt(e, 134217728);
    if (t !== null) {
      var n = de();
      Ae(t, e, 134217728, n);
    }
    is(e, 134217728);
  }
};
du = function (e) {
  if (e.tag === 13) {
    var t = wt(e),
      n = tt(e, t);
    if (n !== null) {
      var r = de();
      Ae(n, e, t, r);
    }
    is(e, t);
  }
};
fu = function () {
  return F;
};
pu = function (e, t) {
  var n = F;
  try {
    return (F = e), t();
  } finally {
    F = n;
  }
};
ji = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Ci(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Eo(r);
            if (!o) throw Error(w(90));
            Wa(r), Ci(r, o);
          }
        }
      }
      break;
    case "textarea":
      Ka(e, n);
      break;
    case "select":
      (t = n.value), t != null && on(e, !!n.multiple, t, !1);
  }
};
ba = es;
eu = Bt;
var xp = { usingClientEntryPoint: !1, Events: [pr, Zt, Eo, Za, qa, es] },
  Rn = {
    findFiberByHostInstance: Rt,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Ep = {
    bundleType: Rn.bundleType,
    version: Rn.version,
    rendererPackageName: Rn.rendererPackageName,
    rendererConfig: Rn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: rt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = ru(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Rn.findFiberByHostInstance || kp,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ir = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ir.isDisabled && Ir.supportsFiber)
    try {
      (_o = Ir.inject(Ep)), (Ke = Ir);
    } catch {}
}
Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xp;
Ce.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ss(t)) throw Error(w(200));
  return _p(e, t, null, n);
};
Ce.createRoot = function (e, t) {
  if (!ss(e)) throw Error(w(299));
  var n = !1,
    r = "",
    o = Oc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = os(e, 1, !1, null, null, n, !1, r, o)),
    (e[et] = t.current),
    tr(e.nodeType === 8 ? e.parentNode : e),
    new ls(t)
  );
};
Ce.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(w(188))
      : ((e = Object.keys(e).join(",")), Error(w(268, e)));
  return (e = ru(t)), (e = e === null ? null : e.stateNode), e;
};
Ce.flushSync = function (e) {
  return Bt(e);
};
Ce.hydrate = function (e, t, n) {
  if (!Io(t)) throw Error(w(200));
  return Mo(null, e, t, !0, n);
};
Ce.hydrateRoot = function (e, t, n) {
  if (!ss(e)) throw Error(w(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    l = Oc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = Dc(t, null, e, 1, n ?? null, o, !1, i, l)),
    (e[et] = t.current),
    tr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new jo(t);
};
Ce.render = function (e, t, n) {
  if (!Io(t)) throw Error(w(200));
  return Mo(null, e, t, !1, n);
};
Ce.unmountComponentAtNode = function (e) {
  if (!Io(e)) throw Error(w(40));
  return e._reactRootContainer
    ? (Bt(function () {
        Mo(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[et] = null);
        });
      }),
      !0)
    : !1;
};
Ce.unstable_batchedUpdates = es;
Ce.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Io(n)) throw Error(w(200));
  if (e == null || e._reactInternals === void 0) throw Error(w(38));
  return Mo(e, t, n, !1, r);
};
Ce.version = "18.2.0-next-9e3b772b8-20220608";
(function (e) {
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (n) {
        console.error(n);
      }
  }
  t(), (e.exports = Ce);
})(_d);
var wa = vi;
(gi.createRoot = wa.createRoot), (gi.hydrateRoot = wa.hydrateRoot);
/**
 * @remix-run/router v1.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function vo() {
  return (
    (vo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    vo.apply(this, arguments)
  );
}
var ft;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(ft || (ft = {}));
const _a = "popstate";
function Cp(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: i, search: l, hash: s } = r.location;
    return dl(
      "",
      { pathname: i, search: l, hash: s },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default"
    );
  }
  function n(r, o) {
    return typeof o == "string" ? o : Fc(o);
  }
  return Pp(t, n, null, e);
}
function _e(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function as(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Np() {
  return Math.random().toString(36).substr(2, 8);
}
function ka(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function dl(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    vo(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Do(t) : t,
      { state: n, key: (t && t.key) || r || Np() }
    )
  );
}
function Fc(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Do(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function Pp(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = r,
    l = o.history,
    s = ft.Pop,
    a = null,
    u = p();
  u == null && ((u = 0), l.replaceState(vo({}, l.state, { idx: u }), ""));
  function p() {
    return (l.state || { idx: null }).idx;
  }
  function g() {
    s = ft.Pop;
    let T = p(),
      d = T == null ? null : T - u;
    (u = T), a && a({ action: s, location: y.location, delta: d });
  }
  function m(T, d) {
    s = ft.Push;
    let c = dl(y.location, T, d);
    n && n(c, T), (u = p() + 1);
    let f = ka(c, u),
      v = y.createHref(c);
    try {
      l.pushState(f, "", v);
    } catch {
      o.location.assign(v);
    }
    i && a && a({ action: s, location: y.location, delta: 1 });
  }
  function _(T, d) {
    s = ft.Replace;
    let c = dl(y.location, T, d);
    n && n(c, T), (u = p());
    let f = ka(c, u),
      v = y.createHref(c);
    l.replaceState(f, "", v),
      i && a && a({ action: s, location: y.location, delta: 0 });
  }
  function k(T) {
    let d = o.location.origin !== "null" ? o.location.origin : o.location.href,
      c = typeof T == "string" ? T : Fc(T);
    return (
      _e(
        d,
        "No window.location.(origin|href) available to create URL for href: " +
          c
      ),
      new URL(c, d)
    );
  }
  let y = {
    get action() {
      return s;
    },
    get location() {
      return e(o, l);
    },
    listen(T) {
      if (a) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(_a, g),
        (a = T),
        () => {
          o.removeEventListener(_a, g), (a = null);
        }
      );
    },
    createHref(T) {
      return t(o, T);
    },
    createURL: k,
    encodeLocation(T) {
      let d = k(T);
      return { pathname: d.pathname, search: d.search, hash: d.hash };
    },
    push: m,
    replace: _,
    go(T) {
      return l.go(T);
    },
  };
  return y;
}
var Sa;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Sa || (Sa = {}));
function Lp(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Do(t) : t,
    o = Bc(r.pathname || "/", n);
  if (o == null) return null;
  let i = $c(e);
  Tp(i);
  let l = null;
  for (let s = 0; l == null && s < i.length; ++s) l = $p(i[s], Ap(o));
  return l;
}
function $c(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let o = (i, l, s) => {
    let a = {
      relativePath: s === void 0 ? i.path || "" : s,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: l,
      route: i,
    };
    a.relativePath.startsWith("/") &&
      (_e(
        a.relativePath.startsWith(r),
        'Absolute route path "' +
          a.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (a.relativePath = a.relativePath.slice(r.length)));
    let u = dn([r, a.relativePath]),
      p = n.concat(a);
    i.children &&
      i.children.length > 0 &&
      (_e(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      $c(i.children, t, p, u)),
      !(i.path == null && !i.index) &&
        t.push({ path: u, score: Op(u, i.index), routesMeta: p });
  };
  return (
    e.forEach((i, l) => {
      var s;
      if (i.path === "" || !((s = i.path) != null && s.includes("?"))) o(i, l);
      else for (let a of Uc(i.path)) o(i, l, a);
    }),
    t
  );
}
function Uc(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [i, ""] : [i];
  let l = Uc(r.join("/")),
    s = [];
  return (
    s.push(...l.map((a) => (a === "" ? i : [i, a].join("/")))),
    o && s.push(...l),
    s.map((a) => (e.startsWith("/") && a === "" ? "/" : a))
  );
}
function Tp(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Fp(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const zp = /^:\w+$/,
  Rp = 3,
  jp = 2,
  Ip = 1,
  Mp = 10,
  Dp = -2,
  xa = (e) => e === "*";
function Op(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(xa) && (r += Dp),
    t && (r += jp),
    n
      .filter((o) => !xa(o))
      .reduce((o, i) => o + (zp.test(i) ? Rp : i === "" ? Ip : Mp), r)
  );
}
function Fp(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function $p(e, t) {
  let { routesMeta: n } = e,
    r = {},
    o = "/",
    i = [];
  for (let l = 0; l < n.length; ++l) {
    let s = n[l],
      a = l === n.length - 1,
      u = o === "/" ? t : t.slice(o.length) || "/",
      p = Up(
        { path: s.relativePath, caseSensitive: s.caseSensitive, end: a },
        u
      );
    if (!p) return null;
    Object.assign(r, p.params);
    let g = s.route;
    i.push({
      params: r,
      pathname: dn([o, p.pathname]),
      pathnameBase: Vp(dn([o, p.pathnameBase])),
      route: g,
    }),
      p.pathnameBase !== "/" && (o = dn([o, p.pathnameBase]));
  }
  return i;
}
function Up(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Bp(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let i = o[0],
    l = i.replace(/(.)\/+$/, "$1"),
    s = o.slice(1);
  return {
    params: r.reduce((u, p, g) => {
      if (p === "*") {
        let m = s[g] || "";
        l = i.slice(0, i.length - m.length).replace(/(.)\/+$/, "$1");
      }
      return (u[p] = Hp(s[g] || "", p)), u;
    }, {}),
    pathname: i,
    pathnameBase: l,
    pattern: e,
  };
}
function Bp(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    as(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/\/:(\w+)/g, (l, s) => (r.push(s), "/([^\\/]+)"));
  return (
    e.endsWith("*")
      ? (r.push("*"),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (o += "\\/*$")
      : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), r]
  );
}
function Ap(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      as(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function Hp(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      as(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ").")
      ),
      e
    );
  }
}
function Bc(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
const dn = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Vp = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/");
function Wp(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
/**
 * React Router v6.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Qp(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
const Kp = typeof Object.is == "function" ? Object.is : Qp,
  { useState: Yp, useEffect: Gp, useLayoutEffect: Xp, useDebugValue: Jp } = mi;
function Zp(e, t, n) {
  const r = t(),
    [{ inst: o }, i] = Yp({ inst: { value: r, getSnapshot: t } });
  return (
    Xp(() => {
      (o.value = r), (o.getSnapshot = t), pi(o) && i({ inst: o });
    }, [e, r, t]),
    Gp(
      () => (
        pi(o) && i({ inst: o }),
        e(() => {
          pi(o) && i({ inst: o });
        })
      ),
      [e]
    ),
    Jp(r),
    r
  );
}
function pi(e) {
  const t = e.getSnapshot,
    n = e.value;
  try {
    const r = t();
    return !Kp(n, r);
  } catch {
    return !0;
  }
}
function qp(e, t, n) {
  return t();
}
const bp =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  eh = !bp,
  th = eh ? qp : Zp;
"useSyncExternalStore" in mi && ((e) => e.useSyncExternalStore)(mi);
const Ac = S.createContext(null),
  Hc = S.createContext(null),
  Vc = S.createContext(null),
  Oo = S.createContext(null),
  Fo = S.createContext({ outlet: null, matches: [] }),
  Wc = S.createContext(null);
function fl() {
  return (
    (fl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    fl.apply(this, arguments)
  );
}
function us() {
  return S.useContext(Oo) != null;
}
function nh() {
  return us() || _e(!1), S.useContext(Oo).location;
}
function rh(e, t) {
  us() || _e(!1);
  let { navigator: n } = S.useContext(Vc),
    r = S.useContext(Hc),
    { matches: o } = S.useContext(Fo),
    i = o[o.length - 1],
    l = i ? i.params : {};
  i && i.pathname;
  let s = i ? i.pathnameBase : "/";
  i && i.route;
  let a = nh(),
    u;
  if (t) {
    var p;
    let y = typeof t == "string" ? Do(t) : t;
    s === "/" || ((p = y.pathname) != null && p.startsWith(s)) || _e(!1),
      (u = y);
  } else u = a;
  let g = u.pathname || "/",
    m = s === "/" ? g : g.slice(s.length) || "/",
    _ = Lp(e, { pathname: m }),
    k = sh(
      _ &&
        _.map((y) =>
          Object.assign({}, y, {
            params: Object.assign({}, l, y.params),
            pathname: dn([
              s,
              n.encodeLocation
                ? n.encodeLocation(y.pathname).pathname
                : y.pathname,
            ]),
            pathnameBase:
              y.pathnameBase === "/"
                ? s
                : dn([
                    s,
                    n.encodeLocation
                      ? n.encodeLocation(y.pathnameBase).pathname
                      : y.pathnameBase,
                  ]),
          })
        ),
      o,
      r || void 0
    );
  return t && k
    ? S.createElement(
        Oo.Provider,
        {
          value: {
            location: fl(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              u
            ),
            navigationType: ft.Pop,
          },
        },
        k
      )
    : k;
}
function oh() {
  let e = dh(),
    t = Wp(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    i = null;
  return S.createElement(
    S.Fragment,
    null,
    S.createElement("h2", null, "Unexpected Application Error!"),
    S.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? S.createElement("pre", { style: o }, n) : null,
    i
  );
}
class ih extends S.Component {
  constructor(t) {
    super(t), (this.state = { location: t.location, error: t.error });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location
      ? { error: t.error, location: t.location }
      : { error: t.error || n.error, location: n.location };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error
      ? S.createElement(
          Fo.Provider,
          { value: this.props.routeContext },
          S.createElement(Wc.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function lh(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = S.useContext(Ac);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    S.createElement(Fo.Provider, { value: t }, r)
  );
}
function sh(e, t, n) {
  if ((t === void 0 && (t = []), e == null))
    if (n != null && n.errors) e = n.matches;
    else return null;
  let r = e,
    o = n == null ? void 0 : n.errors;
  if (o != null) {
    let i = r.findIndex(
      (l) => l.route.id && (o == null ? void 0 : o[l.route.id])
    );
    i >= 0 || _e(!1), (r = r.slice(0, Math.min(r.length, i + 1)));
  }
  return r.reduceRight((i, l, s) => {
    let a = l.route.id ? (o == null ? void 0 : o[l.route.id]) : null,
      u = null;
    n &&
      (l.route.ErrorBoundary
        ? (u = S.createElement(l.route.ErrorBoundary, null))
        : l.route.errorElement
        ? (u = l.route.errorElement)
        : (u = S.createElement(oh, null)));
    let p = t.concat(r.slice(0, s + 1)),
      g = () => {
        let m = i;
        return (
          a
            ? (m = u)
            : l.route.Component
            ? (m = S.createElement(l.route.Component, null))
            : l.route.element && (m = l.route.element),
          S.createElement(lh, {
            match: l,
            routeContext: { outlet: i, matches: p },
            children: m,
          })
        );
      };
    return n && (l.route.ErrorBoundary || l.route.errorElement || s === 0)
      ? S.createElement(ih, {
          location: n.location,
          component: u,
          error: a,
          children: g(),
          routeContext: { outlet: null, matches: p },
        })
      : g();
  }, null);
}
var Ea;
(function (e) {
  (e.UseBlocker = "useBlocker"), (e.UseRevalidator = "useRevalidator");
})(Ea || (Ea = {}));
var yo;
(function (e) {
  (e.UseBlocker = "useBlocker"),
    (e.UseLoaderData = "useLoaderData"),
    (e.UseActionData = "useActionData"),
    (e.UseRouteError = "useRouteError"),
    (e.UseNavigation = "useNavigation"),
    (e.UseRouteLoaderData = "useRouteLoaderData"),
    (e.UseMatches = "useMatches"),
    (e.UseRevalidator = "useRevalidator");
})(yo || (yo = {}));
function ah(e) {
  let t = S.useContext(Hc);
  return t || _e(!1), t;
}
function uh(e) {
  let t = S.useContext(Fo);
  return t || _e(!1), t;
}
function ch(e) {
  let t = uh(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || _e(!1), n.route.id;
}
function dh() {
  var e;
  let t = S.useContext(Wc),
    n = ah(yo.UseRouteError),
    r = ch(yo.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function Qc(e) {
  _e(!1);
}
function fh(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = ft.Pop,
    navigator: i,
    static: l = !1,
  } = e;
  us() && _e(!1);
  let s = t.replace(/^\/*/, "/"),
    a = S.useMemo(() => ({ basename: s, navigator: i, static: l }), [s, i, l]);
  typeof r == "string" && (r = Do(r));
  let {
      pathname: u = "/",
      search: p = "",
      hash: g = "",
      state: m = null,
      key: _ = "default",
    } = r,
    k = S.useMemo(() => {
      let y = Bc(u, s);
      return y == null
        ? null
        : {
            location: { pathname: y, search: p, hash: g, state: m, key: _ },
            navigationType: o,
          };
    }, [s, u, p, g, m, _, o]);
  return k == null
    ? null
    : S.createElement(
        Vc.Provider,
        { value: a },
        S.createElement(Oo.Provider, { children: n, value: k })
      );
}
function ph(e) {
  let { children: t, location: n } = e,
    r = S.useContext(Ac),
    o = r && !t ? r.router.routes : pl(t);
  return rh(o, n);
}
var Ca;
(function (e) {
  (e[(e.pending = 0)] = "pending"),
    (e[(e.success = 1)] = "success"),
    (e[(e.error = 2)] = "error");
})(Ca || (Ca = {}));
new Promise(() => {});
function pl(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    S.Children.forEach(e, (r, o) => {
      if (!S.isValidElement(r)) return;
      if (r.type === S.Fragment) {
        n.push.apply(n, pl(r.props.children, t));
        return;
      }
      r.type !== Qc && _e(!1), !r.props.index || !r.props.children || _e(!1);
      let i = [...t, o],
        l = {
          id: r.props.id || i.join("-"),
          caseSensitive: r.props.caseSensitive,
          element: r.props.element,
          Component: r.props.Component,
          index: r.props.index,
          path: r.props.path,
          loader: r.props.loader,
          action: r.props.action,
          errorElement: r.props.errorElement,
          ErrorBoundary: r.props.ErrorBoundary,
          hasErrorBoundary:
            r.props.ErrorBoundary != null || r.props.errorElement != null,
          shouldRevalidate: r.props.shouldRevalidate,
          handle: r.props.handle,
          lazy: r.props.lazy,
        };
      r.props.children && (l.children = pl(r.props.children, i)), n.push(l);
    }),
    n
  );
}
/**
 * React Router DOM v6.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function hh(e) {
  let { basename: t, children: n, window: r } = e,
    o = S.useRef();
  o.current == null && (o.current = Cp({ window: r, v5Compat: !0 }));
  let i = o.current,
    [l, s] = S.useState({ action: i.action, location: i.location });
  return (
    S.useLayoutEffect(() => i.listen(s), [i]),
    S.createElement(fh, {
      basename: t,
      children: n,
      location: l.location,
      navigationType: l.action,
      navigator: i,
    })
  );
}
var Na;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmitImpl = "useSubmitImpl"),
    (e.UseFetcher = "useFetcher");
})(Na || (Na = {}));
var Pa;
(function (e) {
  (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Pa || (Pa = {}));
const mh = {},
  gh = "_col_nby2w_1",
  vh = "_row_nby2w_21",
  yh = "_box_nby2w_31",
  wh = "_name_nby2w_49",
  _h = "_nameeffect_nby2w_67",
  kh = "_circle_nby2w_113",
  Sh = "_slide_nby2w_1",
  Wt = {
    col: gh,
    row: vh,
    box: yh,
    name: wh,
    nameeffect: _h,
    circle: kh,
    slide: Sh,
  },
  xh = "_canvasContainer_5e5s5_1",
  La = { canvasContainer: xh },
  Eh = () => {
    const e = S.useRef(null),
      t = S.useRef([]);
    return (
      S.useEffect(() => {
        const n = e.current,
          r = n.getContext("2d");
        (n.width = window.innerWidth), (n.height = window.innerHeight);
        class o {
          constructor(u, p, g, m, _, k) {
            (this.x = u),
              (this.y = p),
              (this.directionX = g),
              (this.directionY = m),
              (this.size = _),
              (this.color = k);
          }
          draw() {
            r.beginPath(),
              r.arc(this.x, this.y, this.size, 0, Math.PI * 2, !1),
              (r.fillStyle = this.color),
              r.fill();
          }
          update() {
            (this.x + this.size > n.width || this.x - this.size < 0) &&
              (this.directionX = -this.directionX),
              (this.y + this.size > n.height || this.y - this.size < 0) &&
                (this.directionY = -this.directionY),
              (this.x += this.directionX),
              (this.y += this.directionY),
              this.draw();
          }
        }
        function i() {
          t.current = [];
          let a = (n.height * n.width) / 9e3;
          for (let u = 0; u < a; u++) {
            let p = Math.random() * 5 + 1,
              g = Math.random() * (innerWidth - p * 2 - p * 2) + p * 2,
              m = Math.random() * (innerHeight - p * 2 - p * 2) + p * 2,
              _ = Math.random() * 2 - 1,
              k = Math.random() * 2 - 1,
              y = [
                "#FF5733",
                "#C70039",
                "#900C3F",
                "#581845",
                "#FFC300",
                "#DAF7A6",
                "#1287A5",
                "#F4D03F",
                "#00D2D3",
              ],
              T = y[Math.floor(Math.random() * y.length)];
            t.current.push(new o(g, m, _, k, p, T));
          }
        }
        function l() {
          r.clearRect(0, 0, n.width, n.height),
            t.current.forEach((a) => {
              a.update();
            });
        }
        i(), l();
        const s = () => {
          (n.width = window.innerWidth),
            (n.height = window.innerHeight),
            i(),
            l();
        };
        return (
          window.addEventListener("resize", s),
          window.addEventListener("mousemove", (a) => {
            r.clearRect(0, 0, n.width, n.height), l();
            let u = {
              x: a.x - e.current.getBoundingClientRect().left,
              y: a.y - e.current.getBoundingClientRect().top,
            };
            t.current.forEach((p) => {
              Math.sqrt((u.x - p.x) ** 2 + (u.y - p.y) ** 2) < 200 &&
                (r.beginPath(),
                r.moveTo(u.x, u.y),
                r.lineTo(p.x, p.y),
                (r.strokeStyle = p.color),
                r.stroke(),
                r.closePath());
            });
          }),
          window.addEventListener("mouseout", () => {
            r.clearRect(0, 0, n.width, n.height), l();
          }),
          () => {
            window.removeEventListener("resize", s),
              window.removeEventListener("mousemove", () => {}),
              window.removeEventListener("mouseout", () => {});
          }
        );
      }, []),
      h("div", {
        className: La.canvasContainer,
        children: h("canvas", { ref: e, className: La.canvas }),
      })
    );
  },
  Ch = () => {
    const [e, t] = S.useState("");
    var [n, r] = S.useState(0);
    const [o, i] = S.useState("Mechanical Engineering"),
      [l, s] = S.useState(0);
    return (
      S.useEffect(() => {
        l <= o.length
          ? setTimeout(() => {
              t(e + o[l]), s(l + 1);
            }, 75)
          : (s(0),
            t(""),
            n % 4 == 2
              ? (i("Mechanical Engineering"), r(++n))
              : n % 4 == 0
              ? (i("Full Stack Developer"), r(++n))
              : n % 4 == 1
              ? (i("Competitive Programmer"), r(++n))
              : (i("Machine learning enthusiast"), r(++n)));
      }, [l]),
      O("div", {
        className: Wt.col,
        id: "Intro",
        children: [
          h("div", {
            className: Wt.row,
            children: O("div", {
              className: Wt.box,
              children: [
                h("div", { className: Wt.circle }),
                h("div", {
                  className: Wt.name,
                  children: "Hi ! I'm Shivam Kumar",
                }),
                h("div", { className: Wt.nameeffect, children: e }),
                h("p", {
                  children:
                    "LeetCode, Kaggle Expert, and GitHub Maestro, I am an enthusiastic problem solver with a passion for collaborative innovation in tech. With over 50+ repos, I demonstrate proficiency in data science and am recognized as a Kaggle Expert, actively contributing to the Kaggle Notebook. Beyond data science, I am also a skilled web developer with expertise in frontend technologies such as Next.js and React, as well as backend technologies including Node.js and Django. My commitment to continuous learning and tackling challenges drives me to excel in both data-driven solutions and web development projects. I thrive in dynamic environments where creativity and teamwork are valued, eager to contribute to transformative projects in the ever-evolving tech industry.",
                }),
              ],
            }),
          }),
          h(Eh, {}),
        ],
      })
    );
  },
  Nh = "_col_1y5ht_1",
  Ph = "_row_1y5ht_15",
  Lh = "_about_1y5ht_21",
  Th = "_heading_1y5ht_33",
  zh = "_details_photo_1y5ht_45",
  Rh = "_details_1y5ht_45",
  jh = "_spinner_1y5ht_1",
  Ih = "_translateRight_1y5ht_1",
  Mh = "_photobox_1y5ht_165",
  Dh = "_photo_1y5ht_165",
  Oh = "_Zoomout_1y5ht_1",
  it = {
    col: Nh,
    row: Ph,
    about: Lh,
    heading: Th,
    details_photo: zh,
    details: Rh,
    spinner: jh,
    translateRight: Ih,
    photobox: Mh,
    photo: Dh,
    Zoomout: Oh,
  },
  Fh = [
    {
      text: "I am Shivam Kumar, a software developer with a passion for solving complex problems and building elegant solutions. With a LeetCode Knight rating of 1855, I am constantly challenging myself to improve my skills and stay up-to-date with the latest technologies.",
    },
    {
      text: "I have extensive experience in web development, having built numerous websites using technologies such as HTML, CSS, JavaScript, React, Node.js, Electron.js, MongoDB, Express, Data structures and algorithms, DBMS and C++ . My projects showcase my ability to create dynamic and interactive user experiences, as well as my proficiency in various backend tech stacks.    ",
    },
    {
      text: "In addition to my technical skills, I am a creative problem-solver who is able to think outside the box and come up with innovative solutions to complex challenges. I am excited to continue my career as a developer and to contribute my skills and expertise to the ever-evolving field of software development.    ",
    },
    {
      text: "Data analytics and Kaggle expert with a proven record in four competitions and Skilled in data analysis and machine learning. Committed to continuous learning and staying updated with the latest advancements in data science for innovative problem-solving.",
    },
  ],
  $h = () =>
    h("div", {
      className: it.col,
      id: "about",
      children: h("div", {
        className: it.row,
        children: O("div", {
          className: it.about,
          children: [
            h("div", { className: it.heading, children: "About Me" }),
            O("div", {
              className: it.details_photo,
              children: [
                h("div", {
                  className: it.details,
                  children: Fh.map((e, t) =>
                    O(
                      "p",
                      {
                        id: `about_text_${t + 1}`,
                        children: [e.text, h("span", {})],
                      },
                      t
                    )
                  ),
                }),
                h("div", {
                  className: it.photobox,
                  children: h("div", {
                    className: it.photo,
                    children: h("img", { src: "/avatar.png", alt: "avatar" }),
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
    }),
  Uh = "_col_6690b_1",
  Bh = "_row_6690b_15",
  Ah = "_language_6690b_21",
  Hh = "_heading_6690b_33",
  Vh = "_tool_card_6690b_45",
  Wh = "_tool_6690b_45",
  Qh = "_card_6690b_79",
  Lt = {
    col: Uh,
    row: Bh,
    language: Ah,
    heading: Hh,
    tool_card: Vh,
    tool: Wh,
    card: Qh,
  },
  Kh = "_completecard_5n8cp_1",
  Yh = "_popular_books_5n8cp_15",
  Gh = "_rotate_5n8cp_29",
  Xh = "_zoomOut_5n8cp_1",
  Jh = "_book_card_5n8cp_59",
  Zh = "_card_header_5n8cp_89",
  qh = "_img_fluid_5n8cp_101",
  bh = "_card_footer_5n8cp_113",
  em = "_back_5n8cp_123",
  tm = "_back_content_5n8cp_159",
  nm = "_texting_5n8cp_195",
  rm = "_about_5n8cp_203",
  he = {
    completecard: Kh,
    popular_books: Yh,
    rotate: Gh,
    zoomOut: Xh,
    book_card: Jh,
    card_header: Zh,
    img_fluid: qh,
    card_footer: bh,
    back: em,
    back_content: tm,
    texting: nm,
    about: rm,
  },
  om = "_button_1ljvx_1",
  im = { button: om },
  lm = (e) =>
    h("button", {
      type: e.type,
      className: im.button,
      onClick: e.onClick,
      children: e.children,
    }),
  sm = [
    {
      website: "Codeforces",
      src: "/platfrom/codeforces.png",
      src2: "/platfrom/codeforces1.png",
      language: "Competitive coding",
      webSiteName: "Codeforces",
      userId: "You can view my profile here..",
      websiteLink: "https://codeforces.com/profile/1_shivam",
    },
    {
      website: "Leetcode",
      src: "/platfrom/leetcode.png",
      src2: "/platfrom/leetcode1.png",
      language: "Data structures and algorithms",
      webSiteName: "Leetcode",
      userId: "You can view my profile here..",
      websiteLink: "https://leetcode.com/1_shivam/",
    },
    {
      website: "Github",
      src: "/platfrom/github.png",
      src2: "/platfrom/github1.png",
      language: "Download source code",
      webSiteName: "Github",
      userId: "You can view my profile here..",
      websiteLink: "https://github.com/shivam6862",
    },
    {
      website: "Codechef",
      src: "/platfrom/codechef.png",
      language: "Competitive coding",
      webSiteName: "Codechef",
      userId: "You can view my profile here..",
      websiteLink: "https://www.codechef.com/users/shivam_123kr",
    },
    {
      website: "Kaggle Expert",
      src: "/platfrom/kaggle.png",
      src2: "/platfrom/kaggle1.png",
      language: "Data analytics and machine learning",
      webSiteName: "Kaggle",
      userId: "You can view my profile here..",
      websiteLink: "https://www.kaggle.com/shivam6862",
    },
  ],
  am = () =>
    h("div", {
      className: he.completecard,
      children: h("div", {
        className: he.popular_books,
        children: sm.map((e, t) =>
          h(
            "div",
            {
              className: he.rotate,
              children: O("div", {
                className: he.book_card,
                children: [
                  h("div", { className: he.card_header, children: e.website }),
                  h("div", {
                    className: he.card_body,
                    children: h("img", { src: e.src, className: he.img_fluid }),
                  }),
                  h("div", { className: he.card_footer, children: e.language }),
                  h("div", {
                    className: he.back,
                    children: O("div", {
                      className: he.back_content,
                      children: [
                        O("div", {
                          className: he.texting,
                          children: [e.webSiteName, " "],
                        }),
                        h("div", { className: he.about, children: e.userId }),
                        h("img", { src: e.src2, className: he.img_fluid }),
                        h("div", {
                          className: he.button,
                          children: h(lm, {
                            onClick: () => window.open(e.websiteLink),
                            children: "Click",
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            },
            t
          )
        ),
      }),
    }),
  um = "_col_1flwf_1",
  cm = "_row_1flwf_15",
  dm = "_tooling_1flwf_23",
  fm = "_tooling_box_1flwf_41",
  pm = "_box_content_1flwf_61",
  hm = "_bumpOutLikeHeartBeatEven_1flwf_1",
  mm = "_bumpOutLikeHeartBeatOdd_1flwf_1",
  gm = "_box_icon_1flwf_147",
  vm = "_icon_1flwf_147",
  ym = "_box_text_1flwf_159",
  Pe = {
    col: um,
    row: cm,
    tooling: dm,
    tooling_box: fm,
    box_content: pm,
    bumpOutLikeHeartBeatEven: hm,
    "even-animation": "_even-animation_1flwf_91",
    "odd-animation": "_odd-animation_1flwf_99",
    bumpOutLikeHeartBeatOdd: mm,
    box_icon: gm,
    icon: vm,
    box_text: ym,
  },
  wm = [
    { text: "C++", src: "/Tool/8.jpg" },
    { text: "Javascript", src: "/Tool/4.png" },
    { text: "Python", src: "/Tool/12.jpg" },
    { text: "DSA", src: "/Tool/6.jpg" },
    { text: "React", src: "/Tool/1.png" },
    { text: "Kaggle", src: "/Tool/16.png" },
    { text: "NextJs", src: "/Tool/17.png" },
    { text: "NodeJs", src: "/Tool/2.png" },
    { text: "ExpressJs", src: "/Tool/10.jpg" },
    { text: "MongoDb", src: "/Tool/3.jpg" },
    { text: "HTML", src: "/Tool/9.png" },
    { text: "Css", src: "/Tool/5.png" },
    { text: "Git", src: "/Tool/15.png" },
    { text: "DBMS", src: "/Tool/7.jpg" },
    { text: "Mysql", src: "/Tool/11.png" },
    { text: "Redux", src: "/Tool/13.png" },
    { text: "Typescript", src: "/Tool/14.png" },
    { text: "Electron", src: "/Tool/18.png" },
    { text: "springboot", src: "/Tool/19.png" },
    { text: "Ruby", src: "/Tool/20.jpg" },
    { text: "Go", src: "/Tool/21.png" },
    { text: "Java", src: "/Tool/22.png" },
    { text: "Django", src: "/Tool/23.png" },
    { text: "selenium", src: "/Tool/24.png" },
    { text: "Flask", src: "/Tool/26.png" },
    { text: "Postman", src: "/Tool/27.png" },
    { text: "Junit", src: "/Tool/28.png" },
    { text: "Mockito", src: "/Tool/29.jpg" },
    { text: "Cypress", src: "/Tool/30.jpg" },
    { text: "Dockers", src: "/Tool/31.jpg" },
    { text: "Flutter", src: "/Tool/32.jpg" },
    { text: "Streamlit", src: "/Tool/33.jpg" },
  ],
  _m = () => {
    const e = S.useRef(null),
      t = () => {
        const n = e.current,
          r = getComputedStyle(n).gridTemplateRows.split(" ").length,
          o = getComputedStyle(n).gridTemplateColumns.split(" ").length,
          i = n.children;
        for (let l = 0; l < r; l++)
          for (let s = 0; s < o; s++)
            i[l * o + s] &&
              (i[l * o + s].classList.remove(Pe["even-animation"]),
              i[l * o + s].classList.remove(Pe["odd-animation"]),
              l % 2 === 0
                ? i[l * o + s].classList.add(Pe["even-animation"])
                : i[l * o + s].classList.add(Pe["odd-animation"]));
      };
    return (
      S.useEffect(
        () => (
          t(),
          window.addEventListener("resize", t),
          () => {
            window.removeEventListener("resize", t);
          }
        ),
        []
      ),
      h("div", {
        className: Pe.col,
        children: h("div", {
          className: Pe.row,
          children: h("div", {
            className: Pe.tooling,
            children: h("div", {
              className: Pe.tooling_box,
              ref: e,
              children: wm.map((n, r) =>
                O(
                  "div",
                  {
                    className: Pe.box_content,
                    children: [
                      h("div", {
                        className: Pe.box_icon,
                        children: h("img", {
                          src: n.src,
                          alt: n.src,
                          className: Pe.icon,
                        }),
                      }),
                      h("div", { className: Pe.box_text, children: n.text }),
                    ],
                  },
                  r
                )
              ),
            }),
          }),
        }),
      })
    );
  },
  km = () =>
    h("div", {
      className: Lt.col,
      id: "language",
      children: h("div", {
        className: Lt.row,
        children: O("div", {
          className: Lt.language,
          children: [
            h("div", {
              className: Lt.heading,
              children: "Language and Platform Used",
            }),
            O("div", {
              className: Lt.tool_card,
              children: [
                h("div", { className: Lt.tool, children: h(_m, {}) }),
                h("div", {
                  className: Lt.card,
                  id: "Platform",
                  children: h(am, {}),
                }),
              ],
            }),
          ],
        }),
      }),
    }),
  Sm = "_col_19ihq_1",
  xm = "_row_19ihq_15",
  Em = "_working_19ihq_21",
  Cm = "_heading_19ihq_33",
  Nm = "_works_19ihq_43",
  Pm = "_zoomOutAnimation_19ihq_63",
  Lm = "_zoomOut_19ihq_63",
  Tm = "_work_19ihq_21",
  zm = "_link_svg_19ihq_141",
  Rm = "_work_info_19ihq_181",
  jm = "_showMoreButton_19ihq_193",
  Le = {
    col: Sm,
    row: xm,
    working: Em,
    heading: Cm,
    works: Nm,
    zoomOutAnimation: Pm,
    zoomOut: Lm,
    work: Tm,
    link_svg: zm,
    work_info: Rm,
    showMoreButton: jm,
  },
  Qt = [
    {
      website: "IIT ROORKEEE MOTORSPORTS",
      src: "/project/new/6.iitrms.png",
      webSiteName:
        "Experienced NextJs developer skilled in creating dynamic and responsive websites. Developed and launched a professional website for IIT Roorkee Motorsports Club, showcasing strong proficiency in front-end technologies. Proven ability to translate design concepts into user-friendly interfaces, ensuring seamless user experiences and optimal performance",
      userId: "Language used: Reactjs, Nextjs",
      websiteLink: "https://github.com/shivam6862/iitrmse",
    },
    {
      website: "Electro Magnet motion explorer",
      src: "/project/new/1.Electromagnet.png",
      webSiteName:
        "Electromagnet Motion Explorer is an innovative project aimed at studying pendulum damping motion through LED modeling and the development of a user-friendly desktop application. This project serves as a comprehensive study tool, providing intricate mathematical models, accurate simulations, and the integration of machine learning models for error detection and regression analysis.",
      userId:
        "Language used: Machine learning, React-native, Nextjs, Electronjs, Electronjs and Ardiuno",
      websiteLink: "https://github.com/shivam6862/Electromagnetmotion-explorer",
    },
    {
      website: "AI Healthcare Disease Detection",
      src: "/project/new2/1.Healthcare.png",
      webSiteName:
        "Driven and experienced healthcare technologist with a passion for leveraging cutting-edge machine learning technologies. Spearheading the development of a ground-breaking web application aimed at early detection and prevention of various diseases including asthma, cancer, diabetes, and stroke. Proficient in predictive modeling and real-time diagnosis, providing users with actionable preventive measures. Skilled in developing conversational AI interfaces, enabling users to engage in meaningful discussions with disease-specialized chatbots",
      userId:
        "Language used: react, django, nextjs, django-rest-framework, intel, huggingface and llm",
      websiteLink: "https://github.com/shivam6862/Gen-AI-Hackathon/",
    },
    {
      website: "Smoke Drink Predictor",
      src: "/project/new/7.Smoke-Drink-Predictor.png",
      webSiteName:
        "Smoke-Drink-Predictor, an innovative ML and deep learning-driven solution seamlessly integrated with a user-friendly Next.js frontend and a secure Python-Flask backend. This cutting-edge system accurately predicts smoking and drinking behaviors, enhancing user awareness. Rigorously tested with Cypress for robust performance, it ensures reliability and precision. Empower yourself with real-time insights using this state-of-the-art predictor, where technology meets user-friendly design for a transformative experience.",
      userId:
        "Language used: Python, Flask, Machine-learning, Nextjs, Artificial-neural-networks and Cypress ",
      websiteLink: "https://github.com/shivam6862/Smoke-Drink-Predictor",
    },
    {
      website: "Resume Builder App",
      src: "/project/1.Resume_Builder.png",
      webSiteName:
        "Our resume builder app is a powerful tool designed to streamline the process of creating professional resumes. Key Features are User-Friendly Interface, Dynamic Sections, Real-Time Preview, Export Options,and Data Persistence.",
      userId:
        "Language used: React, Nextjs, Redux, Typescript, NodeJs and MongoDb.",
      websiteLink: "https://github.com/shivam6862/Resume-Builder-app",
    },
    {
      website: "DigiFreelance Hub",
      src: "/project/new2/2.DigiFreelance.png",
      webSiteName:
        "DigiFreelance-hub redefines freelancing through its innovative decentralized platform, seamlessly integrating Next.js for a dynamic frontend and Solidity for secure smart contracts.This multifaceted approach fosters a collaborative environment where freelancers showcase diverse skills and efficiently undertake tasks. Transparent and secure transactions, powered by Solidity, ensure a trustworthy marketplace. The convergence of technologies creates a user-friendly and inclusive space, fostering talent and efficiency.",
      userId:
        "Language used: nodejs, mongodb, reactjs, nextjs, smart-contracts, solidity, react-icons, responsive-web-design and hardhat",
      websiteLink: "https://github.com/shivam6862/DigiFreelance-hub",
    },
    {
      website: "Food order App",
      src: "/project/2.Food_order.png",
      webSiteName:
        "Map My Food is a full-stack food order application built using React for the frontend, Node.js for the backend, and MongoDB for the database. With its responsive design and global state management, it offers a seamless and user-friendly experience for customers to explore and order food from various restaurants.It also offers a unique feature that allows new users to create their own restaurants within the app.",
      userId: "Language used: React, NodeJs and MongoDb.",
      websiteLink: "https://github.com/shivam6862/Map-My-Food",
    },
    {
      website: "Kaggle Elite Coder",
      src: "/project/new/3.kaggle.png",
      webSiteName:
        "Welcome to my GitHub repository! Here, you will find my solutions and code for various Kaggle competitions that I have participated in. As a current expert in Kaggle, I have worked extensively on multiple competitions, utilizing advanced techniques in data analysis, machine learning, and deep learning to achieve competitive results. ",
      userId: "Language used: Machine learning and  Kaggle competition",
      websiteLink: "https://github.com/shivam6862/Kaggle-Elite-Coder",
    },
    {
      website: "FormFrenzy App",
      src: "/project/3.FormFrenzy.png",
      webSiteName:
        "Form Frenzy is a mern stack application that revolutionizes form solutions. Features include enabling users to create personalized quizzes, surveys, and result pages, as well as leaderboards, chat functionality, and share them with others through various platforms",
      userId: "Language used: React, NodeJs and MongoDb.",
      websiteLink: "https://github.com/shivam6862/Quiz-App",
    },
    {
      website: "Fault Tracker",
      src: "/project/new/2.Fault_Tracker.png",
      webSiteName:
        "Fault-Tracker is a comprehensive system developed for managing various aspects of a business related to manufacturing, distribution, and customer service. The project consists of a frontend built with Next.js, a backend powered by Node.js, MongoDB used as the primary database, and integrates Web3 MetaMask for blockchain connectivity for users.",
      userId:
        "Language used: Nodejs, Mongodb, Reactjs, Nextjs, Expressjs and Metamask",
      websiteLink: "https://github.com/shivam6862/Fault-Tracker",
    },
    {
      website: "XR Vizion Botsmiths",
      src: "/project/new/4.Botsmiths.png",
      webSiteName:
        "Welcome to our ChatBot application! This application is designed to handle various types of inputs including text, PDF files, and audio files. It processes these inputs and provides responses accordingly. The application also includes features such as user authentication, profile management, and different pages like home, login, signup, and forgot password.",
      userId:
        "Language used: Nodejs, Python, Mongodb, Reactjs, Nextjs and Next-auth",
      websiteLink: "https://github.com/shivam6862/XR-Vizion-Botsmiths",
    },
    {
      website: "DSA Visualizer App",
      src: "/project/4.DSA.png",
      webSiteName:
        "It contains various algorithms related to sorting, graphs, trees, and General problems. The project provides a visual interface to help users better understand how these algorithms work.",
      userId: "Language used: React and Javascript",
      websiteLink: "https://github.com/shivam6862/DSA-Visualizer",
    },
    {
      website: "DappHack",
      src: "/project/new2/3.DappHack.png",
      webSiteName:
        "Led the transformation of DappHack, a Web3 Hackathon Portal, by upgrading to Viem and Wagmi from ethers for frontend integration and seamless backend API integration for project and team models. Pioneered frontend enhancements, including implementing backend APIs, ensuring active links, fixing sidebar issues, and crafting project and timeline components. Demonstrated a versatile skill set in both backend and frontend development for a comprehensive platform overhaul",
      userId:
        "Language used: nodejs, mongodb, reactjs, nextjs, smart-contracts, solidity, react-icons, responsive-web-design and hardhat",
      websiteLink: "https://github.com/shivam6862/DappHack",
    },
    {
      website: "CPU Scheduling Algorithms",
      src: "/project/new2/4.Scheduling.png",
      webSiteName:
        "Developed an interactive CPU Scheduling Algorithms simulation tool to aid understanding of First Come First Serve, Shortest Job First, Round Robin, and Priority Scheduling algorithms. Utilized React for a responsive frontend, Flask for backend simulations, TypeScript for data handling to ensure type safety and maintainability, and implemented the CPU scheduling algorithms in C++, executed via Python subprocesses for optimal performance.",
      userId:
        "Language used: react, flask, typescript, c++, python, subprocess, and cpu-scheduling-algorithms",
      websiteLink: "https://github.com/shivam6862/cpu-scheduling-algorithms",
    },
    {
      website: "Language Translation App",
      src: "/project/new2/5.Language.png",
      webSiteName:
        "Led the development of an innovative language translation workflow, harnessing the power of Next.js for dynamic frontend interactions, Django for robust backend infrastructure, and Google genai-api for cutting-edge language translation capabilities. Orchestrated the creation of an extensive dictionary of potential headings, implemented intelligent filtering algorithms, and devised a systematic approach for extracting meaningful sub-headings. Seamlessly integrated text translation, resulting in a notable enhancement of translation accuracy and readability, Achieved the prestigious recognition of first runner-up in the SLB Hackathon..",
      userId:
        "Language used: nextjs, django, google-genai-api, react-icons, responsive-web-design and llm",
      websiteLink: "https://github.com/shivam6862/SLB-Hackathon",
    },
    {
      website: "Agent Home",
      src: "/project/new2/6.Agent.png",
      webSiteName:
        "Implemented the Smart Room Automation System, employing Fetch.ai uAgents to create intelligent agents facilitating seamless control of room appliances. Orchestrated integration of lights, air conditioners, and windows into a centralized control system, enabling users to issue cohesive instructions for simultaneous device management.",
      userId:
        "Language used: fetchai, uagents, smart-room-automation-system, and fetchai-uagents",
      websiteLink:
        "https://github.com/Sar2580P/uAgents/tree/agent_home_cognizance/integrations/agent-home",
    },
    {
      website: "StreamTube",
      src: "/project/new/5.StreamTube.png",
      webSiteName:
        "StreamTube is a full-stack web application built using Next.js for the frontend, Node.js for the backend, and MongoDB for the database. This clone mimics the popular video-sharing platform StreamTube, allowing users to explore videos, subscribe to channels, and interact with content similar to the real StreamTube platform. With responsive design and dynamic content loading, it offers a seamless and engaging experience for users to enjoy videos and interact with their favorite channels.",
      userId: "Language used: Reactjs, Nextjs",
      websiteLink: "https://github.com/shivam6862/StreamTube",
    },
    {
      website: "Pet Classify Hub",
      src: "/project/new/8.Pet-Classify-Hub.png",
      webSiteName:
        "Pet Classify Hub is an application designed for classifying images of pets, specifically cats and dogs. This project utilizes a user-friendly web interface built with Next.js for the frontend and a backend server powered by Flask. The classification models are implemented using TensorFlow, Convolutional Neural Network (CNN) models.",
      userId:
        "Language used: Python, Flask, Machine-learning, Nextjs and Artificial-neural-networks ",
      websiteLink: "https://github.com/shivam6862/Pet-Classify-Hub",
    },
    {
      website: "Epic-Tales App",
      src: "/project/5.Epic-Tales.png",
      webSiteName:
        "The application allows users to perform various actions such as sending, updating, and deleting entries related to a specific topic. Users can also view the entries individually or in bulk.",
      userId: "Language used: React and Javascript",
      websiteLink: "https://github.com/shivam6862/Django-React-Epic-Tales",
    },
    {
      website: "Blockchain Lottery Smart Contract App",
      src: "/project/6.Blockchain.png",
      webSiteName:
        "The main aim of the system is to provide a fair and transparent way of conducting a lottery. It eliminates the need for intermediaries, thereby reducing the possibility of fraud and manipulation.",
      userId: "Language used: React, next.js, solidity and Javascript",
      websiteLink: "https://github.com/shivam6862/Lottery_Smart_Contract",
    },
    {
      website: "CartEase App",
      src: "/project/7.CartEase.png",
      webSiteName:
        "A Redux shopping cart app frontend in React is a user interface that displays a list of products available for purchase, allows users to add items to a shopping cart.",
      userId: "Language used: React, redux, nodejs, mongodb and Javascript",
      websiteLink: "https://github.com/shivam6862/CartEase",
    },
    {
      website: "News360 App",
      src: "/project/8.News360.png",
      webSiteName:
        "Introducing a new and innovative news app project that aggregates multiple APIs of top news sources and presents them in a user-friendly way.",
      userId: "Language used: React and Javascript",
      websiteLink: "https://github.com/shivam6862/News360",
    },
    {
      website: "White Typer",
      src: "/project/9.whiteTyper.png",
      webSiteName:
        "This app enables user to log in and give a typing test and get real time result and analysis of his typing skills",
      userId: "Language used: NodeJs",
      websiteLink: "https://github.com/shivam6862/white_Typer",
    },
    {
      website: "Selenium scraping app",
      src: "/project/new/11.selenium-web-scraping-app.png",
      webSiteName:
        "I created a Python app using Selenium for web scraping on my portfolio site, automating data extraction and cross-checking. This showcases my expertise in web scraping, automation, and data validation. The project highlights my ability to enhance efficiency and accuracy through programming, emphasizing my commitment to leveraging technology for effective data management.",
      userId: "Language used: Python and selenium",
      websiteLink: "https://github.com/shivam6862/selenium-web-scraping-app",
    },
    {
      website: "Digit Recognizer",
      src: "/project/new/9.Digit-Recognizer.png",
      webSiteName:
        "This is a digit recognizer app that utilizes artificial neural networks (ANN) and convolutional neural networks (CNN) for recognizing hand-written digits. The app is built with Next.js for the frontend, Flask for the backend, and includes components for training and testing the models.Digit Recognizer",
      userId:
        "Language used: Python, Flask, Machine-learning, Nextjs and Artificial-neural-networks ",
      websiteLink: "https://github.com/shivam6862/Digit-Recognizer",
    },
    {
      website: "Cut Fruit",
      src: "/project/11.game.png",
      webSiteName:
        "This is a simple fruit cutting game that users can come and play for fun",
      userId: "Language used: Html, Css and Jquery",
      websiteLink: "https://github.com/shivam6862/Slice-Fruit",
    },
    {
      website: "Spring Boot app",
      src: "/project/new/10.Spring-Boot-application.png",
      webSiteName:
        "This is a Spring Boot backend application for managing persons. It provides basic CRUD (Create, Read, Update, Delete) operations for a Person entity, JUnit, Mockito Testing",
      userId:
        "Language used: Java, Spring boot, Mongodb, Mockito, Junit and Mockito-framework",
      websiteLink:
        "https://github.com/shivam6862/SpringBoot-MongoDB-CRUD-Student-JUnit-Mockito",
    },
    {
      website: "Almighty Crafters",
      src: "/project/10.almighty.png",
      webSiteName:
        "This web app is a showcase of digital arts made from designers of budding startup Almighty Crafters",
      userId: "Language used: React",
      websiteLink: "https://github.com/shivam6862/AlmightyCrafters.github.io",
    },
  ],
  Im = "_background_1ttwx_1",
  Mm = "_container_1ttwx_21",
  Dm = "_box_1ttwx_47",
  Om = "_websiteimage_1ttwx_85",
  Fm = "_cross_1ttwx_151",
  $m = "__box_1rqzu_45_1ttwx_225",
  jn = {
    background: Im,
    container: Mm,
    box: Dm,
    "middle-top": "_middle-top_1ttwx_1",
    websiteimage: Om,
    cross: Fm,
    _box_1rqzu_45: $m,
  },
  Um = ({ data: e, setCard: t }) =>
    O(wd, {
      children: [
        h("div", { className: jn.background, onClick: t }),
        O("div", {
          className: jn.container,
          children: [
            h("img", {
              src: "cross.svg",
              alt: "image",
              className: jn.cross,
              onClick: t,
            }),
            O("div", {
              className: jn.box,
              children: [
                h("h1", { children: e.website }),
                h("div", {
                  className: jn.websiteimage,
                  children: h("img", { src: e.src, alt: e.website }),
                }),
                h("p", { children: e.userId }),
                h("p", { children: e.webSiteName }),
                h("button", {
                  children: h("a", {
                    href: e.websiteLink,
                    target: "_blank",
                    children: "Visit Github",
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  Bm = () => {
    console.log(Qt.length);
    const [e, t] = S.useState(-1),
      [n, r] = S.useState(7),
      o = () => {
        t(-1);
      },
      i = () => {
        r((s) => (s + 7 > Qt.length ? Qt.length : s + 7));
      },
      l = () => {
        r(7);
      };
    return O("div", {
      className: Le.col,
      id: "Projects",
      children: [
        e !== -1 && h(Um, { data: Qt[e], setCard: o }),
        h("div", {
          className: Le.row,
          children: O("div", {
            className: Le.working,
            children: [
              h("div", { className: Le.heading, children: "Projects" }),
              h("div", {
                className: Le.works,
                children: Qt.slice(0, n).map((s, a) =>
                  h(
                    "div",
                    {
                      className: Le.zoomOutAnimation,
                      children: O(
                        "div",
                        {
                          className: Le.work,
                          onClick: () => {
                            t(a);
                          },
                          id: `projects-${a + 1}`,
                          children: [
                            h("div", {
                              className: Le.link_svg,
                              children: h("img", {
                                src: "link.svg",
                                alt: "link",
                              }),
                            }),
                            h("div", {
                              className: Le.work_info,
                              children: s.website,
                            }),
                            h("img", {
                              src: s.src,
                              className: Le.img_fluid,
                              alt: "Projects_image",
                            }),
                          ],
                        },
                        a
                      ),
                    },
                    a
                  )
                ),
              }),
              n < Qt.length
                ? h("button", {
                    className: Le.showMoreButton,
                    onClick: i,
                    children: "Show More Projects",
                  })
                : h("button", {
                    className: Le.showMoreButton,
                    onClick: l,
                    children: "Hide Projects",
                  }),
            ],
          }),
        }),
      ],
    });
  },
  Am = "_contact_1r4da_1",
  Hm = "_container_fluid_1r4da_13",
  Vm = "_row_1r4da_19",
  Wm = "_rowall_1r4da_27",
  Qm = "_col_1_1r4da_39",
  Km = "_translateLeft_1r4da_1",
  Ym = "_col_2_1r4da_71",
  Gm = "_translateRight_1r4da_1",
  Xm = "_items_wrapper_1r4da_103",
  Jm = "_floating_item_1r4da_131",
  Zm = "_link_1r4da_149",
  qm = "_text_light_1r4da_157",
  bm = "_text_light_heading_1r4da_163",
  eg = "_red_1r4da_169",
  tg = "_part_2_text_light_1r4da_175",
  ng = "_form_group_1r4da_189",
  rg = "_form_control_1r4da_203",
  og = "_but_red_1r4da_217",
  ig = "_first_item_1r4da_249",
  lg = "_float_1r4da_131",
  sg = "_second_item_1r4da_255",
  ag = "_third_item_1r4da_261",
  ug = "_fourth_item_1r4da_267",
  cg = "_fifth_item_1r4da_273",
  dg = "_contact_form_1r4da_307",
  fg = "_error_message_1r4da_389",
  j = {
    contact: Am,
    container_fluid: Hm,
    row: Vm,
    rowall: Wm,
    col_1: Qm,
    translateLeft: Km,
    col_2: Ym,
    translateRight: Gm,
    items_wrapper: Xm,
    floating_item: Jm,
    link: Zm,
    text_light: qm,
    text_light_heading: bm,
    red: eg,
    part_2_text_light: tg,
    form_group: ng,
    form_control: rg,
    but_red: og,
    first_item: ig,
    float: lg,
    second_item: sg,
    third_item: ag,
    fourth_item: ug,
    fifth_item: cg,
    contact_form: dg,
    error_message: fg,
  },
  pg = () => {
    const [e, t] = S.useState(""),
      [n, r] = S.useState(""),
      [o, i] = S.useState(""),
      [l, s] = S.useState(""),
      a = async () => {
        var u =
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (n.trim() == "" || o.trim() == "" || e.trim() == "") {
          s("Fill the email and name and message.."),
            setTimeout(() => {
              s("");
            }, 2e3);
          return;
        }
        if (n.match(u)) s("");
        else {
          setTimeout(() => {
            s("");
          }, 2e3),
            s("Fill the correct email..");
          return;
        }
        s("");
        const p = encodeURIComponent("Contact Form Submission"),
          g = encodeURIComponent(
            `Name: ${e}%0D%0AEmail: ${n}%0D%0AMessage: ${o}`
          ),
          m = `mailto:shivam6862mau@gmail.com?subject=${p}&body=${g}`;
        window.open(m), r(""), t(""), i("");
      };
    return h("div", {
      className: j.contact,
      id: "contact",
      children: h("div", {
        className: j.container_fluid,
        children: O("div", {
          className: j.rowall,
          children: [
            h("div", {
              className: j.col_1,
              children: O("div", {
                className: `${j.items_wrapper} ${j.row}`,
                children: [
                  h("div", {
                    className: `${j.floating_item} ${j.first_item}`,
                    children: h("div", {
                      href: "#",
                      className: j.text_light,
                      children: h("i", {
                        className: j.link,
                        onClick: () =>
                          window.open(
                            "https://www.linkedin.com/in/shivam-kumar-14701b249/"
                          ),
                        children: "Connect by LinkedIn",
                      }),
                    }),
                  }),
                  h("div", {
                    className: `${j.floating_item} ${j.second_item}`,
                    children: h("div", {
                      href: "#",
                      className: j.text_light,
                      children: h("i", {
                        className: j.link,
                        onClick: () =>
                          window.open(
                            "https://www.instagram.com/shivam_kr_634/"
                          ),
                        children: "Connect by Instagram",
                      }),
                    }),
                  }),
                  h("div", {
                    className: `${j.floating_item} ${j.third_item}`,
                    children: h("div", {
                      className: j.text_light,
                      children: h("i", {
                        className: j.link,
                        onClick: () =>
                          window.open("https://github.com/shivam6862"),
                        children: "Github account",
                      }),
                    }),
                  }),
                  h("div", {
                    className: `${j.floating_item} ${j.fourth_item}`,
                    children: h("div", {
                      className: j.text_light,
                      children: h("i", {
                        className: j.link,
                        onClick: () =>
                          window.open("https://leetcode.com/1_shivam/"),
                        children: "Leetcode account",
                      }),
                    }),
                  }),
                  h("div", {
                    className: `${j.floating_item} ${j.fifth_item}`,
                    children: h("div", {
                      className: j.text_light,
                      children: h("i", {
                        className: j.link,
                        onClick: () =>
                          window.open("https://kaggle.com/shivam6862"),
                        children: "Connect by Kaggle",
                      }),
                    }),
                  }),
                ],
              }),
            }),
            O("div", {
              className: j.col_2,
              children: [
                h("h1", {
                  className: `${j.text_light_heading} ${j.part_2_text_light}`,
                  children: "Stay Connected",
                }),
                h("div", {
                  className: `${j.contact_form}`,
                  children: O("div", {
                    className: j.form_group,
                    children: [
                      l
                        ? h("div", {
                            children: h("p", {
                              className: j.error_message,
                              children: l,
                            }),
                          })
                        : null,
                      h("input", {
                        type: "text",
                        className: j.form_control,
                        placeholder: "Name",
                        value: e,
                        onChange: (u) => t(u.target.value),
                      }),
                      h("input", {
                        type: "email",
                        className: j.form_control,
                        placeholder: "Email",
                        value: n,
                        onChange: (u) => r(u.target.value),
                      }),
                      h("textarea", {
                        className: j.form_control,
                        placeholder: "Message",
                        rows: "4",
                        value: o,
                        onChange: (u) => i(u.target.value),
                      }),
                      h("input", {
                        type: "submit",
                        className: `${j.form_control} ${j.but_red}`,
                        onClick: a,
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
    });
  },
  hg = "_last_yi42e_1",
  mg = "_container_fluid_yi42e_13",
  gg = "_row_yi42e_21",
  vg = "_col_yi42e_37",
  yg = "_nav_yi42e_43",
  wg = "_nav_link_yi42e_61",
  _g = "_copyright_yi42e_71",
  kg = "_nav_item_yi42e_93",
  ee = {
    last: hg,
    container_fluid: mg,
    row: gg,
    col: vg,
    nav: yg,
    nav_link: wg,
    copyright: _g,
    "footer-link": "_footer-link_yi42e_79",
    nav_item: kg,
  },
  Sg = () =>
    h("div", {
      className: ee.last,
      id: "last",
      children: h("div", {
        className: ee.container_fluid,
        children: O("div", {
          className: ee.row,
          children: [
            h("div", {
              className: ee.col,
              children: O("ul", {
                className: ee.nav,
                children: [
                  h("li", {
                    className: ee.nav_item,
                    children: h("a", {
                      className: ee.nav_link,
                      href: "#Intro",
                      children: "Intro",
                    }),
                  }),
                  h("li", {
                    className: ee.nav_item,
                    children: h("a", {
                      className: ee.nav_link,
                      href: "#about",
                      children: "About me",
                    }),
                  }),
                  h("li", {
                    className: ee.nav_item,
                    children: h("a", {
                      className: ee.nav_link,
                      href: "#language",
                      children: "Language",
                    }),
                  }),
                  h("li", {
                    className: ee.nav_item,
                    children: h("a", {
                      className: ee.nav_link,
                      href: "#Platform",
                      children: "Platform",
                    }),
                  }),
                  h("li", {
                    className: ee.nav_item,
                    children: h("a", {
                      className: ee.nav_link,
                      href: "#Projects",
                      children: "Projects",
                    }),
                  }),
                  h("li", {
                    className: ee.nav_item,
                    children: h("a", {
                      className: ee.nav_link,
                      href: "#contact",
                      children: "Contact",
                    }),
                  }),
                ],
              }),
            }),
            h("p", {
              className: ee.copyright,
              children: "© 2024.. Made by shivam6862",
            }),
          ],
        }),
      }),
    }),
  xg = () =>
    O("div", {
      className: mh.home,
      children: [
        h(Ch, {}),
        h($h, {}),
        h(km, {}),
        h(Bm, {}),
        h(pg, {}),
        h(Sg, {}),
      ],
    }),
  Eg = "_error_number_7tm59_1",
  Cg = "_error_reason_7tm59_15",
  Ng = "_error_des_7tm59_31",
  hi = { error_number: Eg, error_reason: Cg, error_des: Ng },
  Pg = () =>
    O("div", {
      children: [
        h("div", { className: hi.error_number, children: "404" }),
        h("div", { className: hi.error_reason, children: "Page Not Found!" }),
        h("div", {
          className: hi.error_des,
          children:
            "You've encountered an error. Please refresh the page, or try again later.",
        }),
      ],
    }),
  Lg = [
    { path: "/", Component: xg },
    { path: "*", Component: Pg },
  ],
  Tg = () =>
    h(ph, {
      children: Lg.map((e, t) =>
        h(Qc, { path: e.path, element: h(e.Component, {}) }, t)
      ),
    }),
  zg = "_backdrop_ke37f_1",
  Rg = { backdrop: zg },
  jg = ({ Id: e, onClick: t }) =>
    h("div", {
      containerid: e,
      children: h("div", { className: Rg.backdrop, onClick: t }),
    }),
  Ig = "_positionfixed_172ej_1",
  Mg = "_line1_172ej_17",
  Dg = "_line2_172ej_19",
  Og = "_line3_172ej_21",
  Fg = "_hamburgerchange_172ej_37",
  $g = "_navigation_172ej_105",
  Ug = "_logo_172ej_135",
  Bg = "_logo1_172ej_147",
  Ag = "_first_172ej_159",
  Hg = "_navigationmenu_172ej_167",
  Vg = "_active_172ej_193",
  Wg = "_hamburger_172ej_37",
  Qg = "_navigationmenuexpanded_172ej_295",
  J = {
    positionfixed: Ig,
    line1: Mg,
    line2: Dg,
    line3: Og,
    hamburgerchange: Fg,
    navigation: $g,
    logo: Ug,
    logo1: Bg,
    first: Ag,
    navigationmenu: Hg,
    active: Vg,
    hamburger: Wg,
    navigationmenuexpanded: Qg,
  },
  Kg = () => {
    const [e, t] = S.useState(!1),
      [n, r] = S.useState({ dynamicWidth: window.innerWidth }),
      o = () => {
        r({ dynamicWidth: window.innerWidth });
      };
    return (
      S.useEffect(
        () => (
          window.addEventListener("resize", o),
          () => {
            window.removeEventListener("resize", o);
          }
        ),
        [n]
      ),
      n.dynamicWidth >= 1e3 && e === !0 && t(!1),
      h("div", {
        className: J.positionfixed,
        children: O("nav", {
          className: J.navigation,
          children: [
            h("div", {
              id: "/",
              className: J.active1,
              children: h("div", {
                className: J.logo,
                children: h("img", { src: "/logo.jpg", alt: "logo" }),
              }),
            }),
            O("button", {
              className: e ? J.hamburgerchange : J.hamburger,
              onClick: () => {
                t(!e);
              },
              children: [
                h("div", { className: J.line1 }),
                h("div", { className: J.line2 }),
                h("div", { className: J.line3 }),
              ],
            }),
            e && h(jg, { Id: "backdrop", onClick: () => t(!e) }),
            h("div", {
              className: e ? J.navigationmenuexpanded : J.navigationmenu,
              children: O("ul", {
                children: [
                  h("li", {
                    className: J.first,
                    children: h("div", {
                      id: "/",
                      className: J.active,
                      onClick: () => {
                        t(!1);
                      },
                      children: h("div", {
                        className: J.logo1,
                        children: h("img", { src: "/logo.jpg", alt: "logo" }),
                      }),
                    }),
                  }),
                  h("li", {
                    children: h("a", {
                      href: "#Intro",
                      className: J.active,
                      onClick: () => {
                        t(!1);
                      },
                      children: "Intro",
                    }),
                  }),
                  h("li", {
                    children: h("a", {
                      href: "#about",
                      className: J.active,
                      onClick: () => {
                        t(!1);
                      },
                      children: "About",
                    }),
                  }),
                  h("li", {
                    children: h("a", {
                      href: "#language",
                      className: J.active,
                      onClick: () => {
                        t(!1);
                      },
                      children: "Language",
                    }),
                  }),
                  h("li", {
                    children: h("a", {
                      href: "#Projects",
                      className: J.active,
                      onClick: () => {
                        t(!1);
                      },
                      children: "Projects",
                    }),
                  }),
                  h("li", {
                    children: h("a", {
                      href: "#contact",
                      className: J.active,
                      onClick: () => {
                        t(!1);
                      },
                      children: "Contact",
                    }),
                  }),
                ],
              }),
            }),
          ],
        }),
      })
    );
  },
  Yg = "_App_16cei_1",
  Gg = {
    App: Yg,
    "box-shadow-large": "_box-shadow-large_16cei_19",
    "box-shadow-small": "_box-shadow-small_16cei_55",
  };
function Xg() {
  return O("div", { className: Gg.App, children: [h(Kg, {}), h(Tg, {})] });
}
gi.createRoot(document.getElementById("root")).render(
  h(hh, { children: h(Xg, {}) })
);
