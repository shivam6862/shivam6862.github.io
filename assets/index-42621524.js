function Yc(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const l = Object.getOwnPropertyDescriptor(r, o);
          l &&
            Object.defineProperty(
              e,
              o,
              l.get ? l : { enumerable: !0, get: () => r[o] }
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
    for (const l of o)
      if (l.type === "childList")
        for (const i of l.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const l = {};
    return (
      o.integrity && (l.integrity = o.integrity),
      o.referrerPolicy && (l.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (l.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (l.credentials = "omit")
        : (l.credentials = "same-origin"),
      l
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const l = n(o);
    fetch(o.href, l);
  }
})();
function Gc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Qn = {},
  Xc = {
    get exports() {
      return Qn;
    },
    set exports(e) {
      Qn = e;
    },
  },
  yo = {},
  x = {},
  Jc = {
    get exports() {
      return x;
    },
    set exports(e) {
      x = e;
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
 */ var ur = Symbol.for("react.element"),
  Zc = Symbol.for("react.portal"),
  qc = Symbol.for("react.fragment"),
  bc = Symbol.for("react.strict_mode"),
  ed = Symbol.for("react.profiler"),
  td = Symbol.for("react.provider"),
  nd = Symbol.for("react.context"),
  rd = Symbol.for("react.forward_ref"),
  od = Symbol.for("react.suspense"),
  ld = Symbol.for("react.memo"),
  id = Symbol.for("react.lazy"),
  cs = Symbol.iterator;
function sd(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (cs && e[cs]) || e["@@iterator"]),
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
function yn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ra),
    (this.updater = n || Ta);
}
yn.prototype.isReactComponent = {};
yn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
yn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ja() {}
ja.prototype = yn.prototype;
function pi(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ra),
    (this.updater = n || Ta);
}
var mi = (pi.prototype = new ja());
mi.constructor = pi;
za(mi, yn.prototype);
mi.isPureReactComponent = !0;
var ds = Array.isArray,
  Ia = Object.prototype.hasOwnProperty,
  hi = { current: null },
  Ma = { key: !0, ref: !0, __self: !0, __source: !0 };
function Da(e, t, n) {
  var r,
    o = {},
    l = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (l = "" + t.key),
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
    $$typeof: ur,
    type: e,
    key: l,
    ref: i,
    props: o,
    _owner: hi.current,
  };
}
function ad(e, t) {
  return {
    $$typeof: ur,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function gi(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ur;
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
var fs = /\/+/g;
function Ao(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? ud("" + e.key)
    : t.toString(36);
}
function Ir(e, t, n, r, o) {
  var l = typeof e;
  (l === "undefined" || l === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (l) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ur:
          case Zc:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (o = o(i)),
      (e = r === "" ? "." + Ao(i, 0) : r),
      ds(o)
        ? ((n = ""),
          e != null && (n = e.replace(fs, "$&/") + "/"),
          Ir(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (gi(o) &&
            (o = ad(
              o,
              n +
                (!o.key || (i && i.key === o.key)
                  ? ""
                  : ("" + o.key).replace(fs, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), ds(e)))
    for (var s = 0; s < e.length; s++) {
      l = e[s];
      var a = r + Ao(l, s);
      i += Ir(l, t, n, a, o);
    }
  else if (((a = sd(e)), typeof a == "function"))
    for (e = a.call(e), s = 0; !(l = e.next()).done; )
      (l = l.value), (a = r + Ao(l, s++)), (i += Ir(l, t, n, a, o));
  else if (l === "object")
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
  return i;
}
function gr(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Ir(e, r, "", "", function (l) {
      return t.call(n, l, o++);
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
  Mr = { transition: null },
  dd = {
    ReactCurrentDispatcher: fe,
    ReactCurrentBatchConfig: Mr,
    ReactCurrentOwner: hi,
  };
I.Children = {
  map: gr,
  forEach: function (e, t, n) {
    gr(
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
      gr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      gr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!gi(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
I.Component = yn;
I.Fragment = qc;
I.Profiler = ed;
I.PureComponent = pi;
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
    l = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((l = t.ref), (i = hi.current)),
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
  return { $$typeof: ur, type: e.type, key: o, ref: l, props: r, _owner: i };
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
I.isValidElement = gi;
I.lazy = function (e) {
  return { $$typeof: id, _payload: { _status: -1, _result: e }, _init: cd };
};
I.memo = function (e, t) {
  return { $$typeof: ld, type: e, compare: t === void 0 ? null : t };
};
I.startTransition = function (e) {
  var t = Mr.transition;
  Mr.transition = {};
  try {
    e();
  } finally {
    Mr.transition = t;
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
const fd = Gc(x),
  ml = Yc({ __proto__: null, default: fd }, [x]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pd = x,
  md = Symbol.for("react.element"),
  hd = Symbol.for("react.fragment"),
  gd = Object.prototype.hasOwnProperty,
  vd = pd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  yd = { key: !0, ref: !0, __self: !0, __source: !0 };
function Oa(e, t, n) {
  var r,
    o = {},
    l = null,
    i = null;
  n !== void 0 && (l = "" + n),
    t.key !== void 0 && (l = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) gd.call(t, r) && !yd.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: md,
    type: e,
    key: l,
    ref: i,
    props: o,
    _owner: vd.current,
  };
}
yo.Fragment = hd;
yo.jsx = Oa;
yo.jsxs = Oa;
(function (e) {
  e.exports = yo;
})(Xc);
const wd = Qn.Fragment,
  m = Qn.jsx,
  O = Qn.jsxs;
var hl = {},
  gl = {},
  _d = {
    get exports() {
      return gl;
    },
    set exports(e) {
      gl = e;
    },
  },
  Ce = {},
  vl = {},
  kd = {
    get exports() {
      return vl;
    },
    set exports(e) {
      vl = e;
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
          Uo = C[Nt],
          Pt = Nt + 1,
          hr = C[Pt];
        if (0 > o(Uo, R))
          Pt < b && 0 > o(hr, Uo)
            ? ((C[Y] = hr), (C[Pt] = R), (Y = Pt))
            : ((C[Y] = Uo), (C[Nt] = R), (Y = Nt));
        else if (Pt < b && 0 > o(hr, R)) (C[Y] = hr), (C[Pt] = R), (Y = Pt);
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
    var l = performance;
    e.unstable_now = function () {
      return l.now();
    };
  } else {
    var i = Date,
      s = i.now();
    e.unstable_now = function () {
      return i.now() - s;
    };
  }
  var a = [],
    u = [],
    p = 1,
    g = null,
    h = 3,
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
      if (n(a) !== null) (k = !0), Fo(E);
      else {
        var z = n(u);
        z !== null && $o(v, z.startTime - C);
      }
  }
  function E(C, z) {
    (k = !1), y && ((y = !1), d(L), (L = -1)), (_ = !0);
    var R = h;
    try {
      for (
        f(z), g = n(a);
        g !== null && (!(g.expirationTime > z) || (C && !Me()));

      ) {
        var Y = g.callback;
        if (typeof Y == "function") {
          (g.callback = null), (h = g.priorityLevel);
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
        Nt !== null && $o(v, Nt.startTime - z), (mr = !1);
      }
      return mr;
    } finally {
      (g = null), (h = R), (_ = !1);
    }
  }
  var N = !1,
    P = null,
    L = -1,
    K = 5,
    M = -1;
  function Me() {
    return !(e.unstable_now() - M < K);
  }
  function kn() {
    if (P !== null) {
      var C = e.unstable_now();
      M = C;
      var z = !0;
      try {
        z = P(!0, C);
      } finally {
        z ? Sn() : ((N = !1), (P = null));
      }
    } else N = !1;
  }
  var Sn;
  if (typeof c == "function")
    Sn = function () {
      c(kn);
    };
  else if (typeof MessageChannel < "u") {
    var us = new MessageChannel(),
      Kc = us.port2;
    (us.port1.onmessage = kn),
      (Sn = function () {
        Kc.postMessage(null);
      });
  } else
    Sn = function () {
      T(kn, 0);
    };
  function Fo(C) {
    (P = C), N || ((N = !0), Sn());
  }
  function $o(C, z) {
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
      k || _ || ((k = !0), Fo(E));
    }),
    (e.unstable_forceFrameRate = function (C) {
      0 > C || 125 < C
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (K = 0 < C ? Math.floor(1e3 / C) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (C) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var z = 3;
          break;
        default:
          z = h;
      }
      var R = h;
      h = z;
      try {
        return C();
      } finally {
        h = R;
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
      var R = h;
      h = C;
      try {
        return z();
      } finally {
        h = R;
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
              (y ? (d(L), (L = -1)) : (y = !0), $o(v, R - Y)))
          : ((C.sortIndex = b), t(a, C), k || _ || ((k = !0), Fo(E))),
        C
      );
    }),
    (e.unstable_shouldYield = Me),
    (e.unstable_wrapCallback = function (C) {
      var z = h;
      return function () {
        var R = h;
        h = z;
        try {
          return C.apply(this, arguments);
        } finally {
          h = R;
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
 */ var $a = x,
  Ee = vl;
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
  Kn = {};
function Bt(e, t) {
  dn(e, t), dn(e + "Capture", t);
}
function dn(e, t) {
  for (Kn[e] = t, e = 0; e < t.length; e++) Ua.add(t[e]);
}
var be = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  yl = Object.prototype.hasOwnProperty,
  Sd =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ps = {},
  ms = {};
function xd(e) {
  return yl.call(ms, e)
    ? !0
    : yl.call(ps, e)
    ? !1
    : Sd.test(e)
    ? (ms[e] = !0)
    : ((ps[e] = !0), !1);
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
function pe(e, t, n, r, o, l, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = l),
    (this.removeEmptyString = i);
}
var le = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    le[e] = new pe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  le[t] = new pe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  le[e] = new pe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  le[e] = new pe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    le[e] = new pe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  le[e] = new pe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  le[e] = new pe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  le[e] = new pe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  le[e] = new pe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var vi = /[\-:]([a-z])/g;
function yi(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(vi, yi);
    le[t] = new pe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(vi, yi);
    le[t] = new pe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(vi, yi);
  le[t] = new pe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  le[e] = new pe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
le.xlinkHref = new pe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  le[e] = new pe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function wi(e, t, n, r) {
  var o = le.hasOwnProperty(t) ? le[t] : null;
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
  vr = Symbol.for("react.element"),
  Qt = Symbol.for("react.portal"),
  Kt = Symbol.for("react.fragment"),
  _i = Symbol.for("react.strict_mode"),
  wl = Symbol.for("react.profiler"),
  Aa = Symbol.for("react.provider"),
  Ba = Symbol.for("react.context"),
  ki = Symbol.for("react.forward_ref"),
  _l = Symbol.for("react.suspense"),
  kl = Symbol.for("react.suspense_list"),
  Si = Symbol.for("react.memo"),
  it = Symbol.for("react.lazy"),
  Ha = Symbol.for("react.offscreen"),
  hs = Symbol.iterator;
function xn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (hs && e[hs]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var W = Object.assign,
  Bo;
function jn(e) {
  if (Bo === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Bo = (t && t[1]) || "";
    }
  return (
    `
` +
    Bo +
    e
  );
}
var Ho = !1;
function Vo(e, t) {
  if (!e || Ho) return "";
  Ho = !0;
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
          l = r.stack.split(`
`),
          i = o.length - 1,
          s = l.length - 1;
        1 <= i && 0 <= s && o[i] !== l[s];

      )
        s--;
      for (; 1 <= i && 0 <= s; i--, s--)
        if (o[i] !== l[s]) {
          if (i !== 1 || s !== 1)
            do
              if ((i--, s--, 0 > s || o[i] !== l[s])) {
                var a =
                  `
` + o[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= i && 0 <= s);
          break;
        }
    }
  } finally {
    (Ho = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? jn(e) : "";
}
function Nd(e) {
  switch (e.tag) {
    case 5:
      return jn(e.type);
    case 16:
      return jn("Lazy");
    case 13:
      return jn("Suspense");
    case 19:
      return jn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Vo(e.type, !1)), e;
    case 11:
      return (e = Vo(e.type.render, !1)), e;
    case 1:
      return (e = Vo(e.type, !0)), e;
    default:
      return "";
  }
}
function Sl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Kt:
      return "Fragment";
    case Qt:
      return "Portal";
    case wl:
      return "Profiler";
    case _i:
      return "StrictMode";
    case _l:
      return "Suspense";
    case kl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Ba:
        return (e.displayName || "Context") + ".Consumer";
      case Aa:
        return (e._context.displayName || "Context") + ".Provider";
      case ki:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Si:
        return (
          (t = e.displayName || null), t !== null ? t : Sl(e.type) || "Memo"
        );
      case it:
        (t = e._payload), (e = e._init);
        try {
          return Sl(e(t));
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
      return Sl(t);
    case 8:
      return t === _i ? "StrictMode" : "Mode";
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
      l = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (i) {
          (r = "" + i), l.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function yr(e) {
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
function Qr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function xl(e, t) {
  var n = t.checked;
  return W({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function gs(e, t) {
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
  (t = t.checked), t != null && wi(e, "checked", t, !1);
}
function El(e, t) {
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
    ? Cl(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Cl(e, t.type, kt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function vs(e, t, n) {
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
function Cl(e, t, n) {
  (t !== "number" || Qr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var In = Array.isArray;
function rn(e, t, n, r) {
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
function Nl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(w(91));
  return W({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function ys(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(w(92));
      if (In(n)) {
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
function ws(e) {
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
function Pl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Ya(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var wr,
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
        wr = wr || document.createElement("div"),
          wr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = wr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Yn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var On = {
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
Object.keys(On).forEach(function (e) {
  Td.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (On[t] = On[e]);
  });
});
function Xa(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (On.hasOwnProperty(e) && On[e])
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
function Ll(e, t) {
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
function Tl(e, t) {
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
var zl = null;
function xi(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Rl = null,
  on = null,
  ln = null;
function _s(e) {
  if ((e = fr(e))) {
    if (typeof Rl != "function") throw Error(w(280));
    var t = e.stateNode;
    t && ((t = xo(t)), Rl(e.stateNode, e.type, t));
  }
}
function Za(e) {
  on ? (ln ? ln.push(e) : (ln = [e])) : (on = e);
}
function qa() {
  if (on) {
    var e = on,
      t = ln;
    if (((ln = on = null), _s(e), t)) for (e = 0; e < t.length; e++) _s(t[e]);
  }
}
function ba(e, t) {
  return e(t);
}
function eu() {}
var Wo = !1;
function tu(e, t, n) {
  if (Wo) return e(t, n);
  Wo = !0;
  try {
    return ba(e, t, n);
  } finally {
    (Wo = !1), (on !== null || ln !== null) && (eu(), qa());
  }
}
function Gn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = xo(n);
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
var jl = !1;
if (be)
  try {
    var En = {};
    Object.defineProperty(En, "passive", {
      get: function () {
        jl = !0;
      },
    }),
      window.addEventListener("test", En, En),
      window.removeEventListener("test", En, En);
  } catch {
    jl = !1;
  }
function Rd(e, t, n, r, o, l, i, s, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (p) {
    this.onError(p);
  }
}
var Fn = !1,
  Kr = null,
  Yr = !1,
  Il = null,
  jd = {
    onError: function (e) {
      (Fn = !0), (Kr = e);
    },
  };
function Id(e, t, n, r, o, l, i, s, a) {
  (Fn = !1), (Kr = null), Rd.apply(jd, arguments);
}
function Md(e, t, n, r, o, l, i, s, a) {
  if ((Id.apply(this, arguments), Fn)) {
    if (Fn) {
      var u = Kr;
      (Fn = !1), (Kr = null);
    } else throw Error(w(198));
    Yr || ((Yr = !0), (Il = u));
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
function ks(e) {
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
    var l = o.alternate;
    if (l === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === l.child) {
      for (l = o.child; l; ) {
        if (l === n) return ks(o), e;
        if (l === r) return ks(o), t;
        l = l.sibling;
      }
      throw Error(w(188));
    }
    if (n.return !== r.return) (n = o), (r = l);
    else {
      for (var i = !1, s = o.child; s; ) {
        if (s === n) {
          (i = !0), (n = o), (r = l);
          break;
        }
        if (s === r) {
          (i = !0), (r = o), (n = l);
          break;
        }
        s = s.sibling;
      }
      if (!i) {
        for (s = l.child; s; ) {
          if (s === n) {
            (i = !0), (n = l), (r = o);
            break;
          }
          if (s === r) {
            (i = !0), (r = l), (n = o);
            break;
          }
          s = s.sibling;
        }
        if (!i) throw Error(w(189));
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
var lu = Ee.unstable_scheduleCallback,
  Ss = Ee.unstable_cancelCallback,
  Od = Ee.unstable_shouldYield,
  Fd = Ee.unstable_requestPaint,
  G = Ee.unstable_now,
  $d = Ee.unstable_getCurrentPriorityLevel,
  Ei = Ee.unstable_ImmediatePriority,
  iu = Ee.unstable_UserBlockingPriority,
  Gr = Ee.unstable_NormalPriority,
  Ud = Ee.unstable_LowPriority,
  su = Ee.unstable_IdlePriority,
  wo = null,
  Ke = null;
function Ad(e) {
  if (Ke && typeof Ke.onCommitFiberRoot == "function")
    try {
      Ke.onCommitFiberRoot(wo, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ue = Math.clz32 ? Math.clz32 : Vd,
  Bd = Math.log,
  Hd = Math.LN2;
function Vd(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Bd(e) / Hd) | 0)) | 0;
}
var _r = 64,
  kr = 4194304;
function Mn(e) {
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
function Xr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    l = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var s = i & ~o;
    s !== 0 ? (r = Mn(s)) : ((l &= i), l !== 0 && (r = Mn(l)));
  } else (i = n & ~o), i !== 0 ? (r = Mn(i)) : l !== 0 && (r = Mn(l));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (l = t & -t), o >= l || (o === 16 && (l & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Ue(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
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
      l = e.pendingLanes;
    0 < l;

  ) {
    var i = 31 - Ue(l),
      s = 1 << i,
      a = o[i];
    a === -1
      ? (!(s & n) || s & r) && (o[i] = Wd(s, t))
      : a <= t && (e.expiredLanes |= s),
      (l &= ~s);
  }
}
function Ml(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function au() {
  var e = _r;
  return (_r <<= 1), !(_r & 4194240) && (_r = 64), e;
}
function Qo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function cr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ue(t)),
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
    var o = 31 - Ue(n),
      l = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~l);
  }
}
function Ci(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ue(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var F = 0;
function uu(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var cu,
  Ni,
  du,
  fu,
  pu,
  Dl = !1,
  Sr = [],
  pt = null,
  mt = null,
  ht = null,
  Xn = new Map(),
  Jn = new Map(),
  at = [],
  Yd =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function xs(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      pt = null;
      break;
    case "dragenter":
    case "dragleave":
      mt = null;
      break;
    case "mouseover":
    case "mouseout":
      ht = null;
      break;
    case "pointerover":
    case "pointerout":
      Xn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Jn.delete(t.pointerId);
  }
}
function Cn(e, t, n, r, o, l) {
  return e === null || e.nativeEvent !== l
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: l,
        targetContainers: [o],
      }),
      t !== null && ((t = fr(t)), t !== null && Ni(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function Gd(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (pt = Cn(pt, e, t, n, r, o)), !0;
    case "dragenter":
      return (mt = Cn(mt, e, t, n, r, o)), !0;
    case "mouseover":
      return (ht = Cn(ht, e, t, n, r, o)), !0;
    case "pointerover":
      var l = o.pointerId;
      return Xn.set(l, Cn(Xn.get(l) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (l = o.pointerId), Jn.set(l, Cn(Jn.get(l) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function mu(e) {
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
function Dr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ol(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (zl = r), n.target.dispatchEvent(r), (zl = null);
    } else return (t = fr(n)), t !== null && Ni(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Es(e, t, n) {
  Dr(e) && n.delete(t);
}
function Xd() {
  (Dl = !1),
    pt !== null && Dr(pt) && (pt = null),
    mt !== null && Dr(mt) && (mt = null),
    ht !== null && Dr(ht) && (ht = null),
    Xn.forEach(Es),
    Jn.forEach(Es);
}
function Nn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Dl ||
      ((Dl = !0),
      Ee.unstable_scheduleCallback(Ee.unstable_NormalPriority, Xd)));
}
function Zn(e) {
  function t(o) {
    return Nn(o, e);
  }
  if (0 < Sr.length) {
    Nn(Sr[0], e);
    for (var n = 1; n < Sr.length; n++) {
      var r = Sr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    pt !== null && Nn(pt, e),
      mt !== null && Nn(mt, e),
      ht !== null && Nn(ht, e),
      Xn.forEach(t),
      Jn.forEach(t),
      n = 0;
    n < at.length;
    n++
  )
    (r = at[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < at.length && ((n = at[0]), n.blockedOn === null); )
    mu(n), n.blockedOn === null && at.shift();
}
var sn = rt.ReactCurrentBatchConfig,
  Jr = !0;
function Jd(e, t, n, r) {
  var o = F,
    l = sn.transition;
  sn.transition = null;
  try {
    (F = 1), Pi(e, t, n, r);
  } finally {
    (F = o), (sn.transition = l);
  }
}
function Zd(e, t, n, r) {
  var o = F,
    l = sn.transition;
  sn.transition = null;
  try {
    (F = 4), Pi(e, t, n, r);
  } finally {
    (F = o), (sn.transition = l);
  }
}
function Pi(e, t, n, r) {
  if (Jr) {
    var o = Ol(e, t, n, r);
    if (o === null) tl(e, t, r, Zr, n), xs(e, r);
    else if (Gd(o, e, t, n, r)) r.stopPropagation();
    else if ((xs(e, r), t & 4 && -1 < Yd.indexOf(e))) {
      for (; o !== null; ) {
        var l = fr(o);
        if (
          (l !== null && cu(l),
          (l = Ol(e, t, n, r)),
          l === null && tl(e, t, r, Zr, n),
          l === o)
        )
          break;
        o = l;
      }
      o !== null && r.stopPropagation();
    } else tl(e, t, r, null, n);
  }
}
var Zr = null;
function Ol(e, t, n, r) {
  if (((Zr = null), (e = xi(r)), (e = Rt(e)), e !== null))
    if (((t = Ht(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = nu(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Zr = e), null;
}
function hu(e) {
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
        case Ei:
          return 1;
        case iu:
          return 4;
        case Gr:
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
  Li = null,
  Or = null;
function gu() {
  if (Or) return Or;
  var e,
    t = Li,
    n = t.length,
    r,
    o = "value" in ct ? ct.value : ct.textContent,
    l = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === o[l - r]; r++);
  return (Or = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Fr(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function xr() {
  return !0;
}
function Cs() {
  return !1;
}
function Ne(e) {
  function t(n, r, o, l, i) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = l),
      (this.target = i),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(l) : l[s]));
    return (
      (this.isDefaultPrevented = (
        l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1
      )
        ? xr
        : Cs),
      (this.isPropagationStopped = Cs),
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
          (this.isDefaultPrevented = xr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = xr));
      },
      persist: function () {},
      isPersistent: xr,
    }),
    t
  );
}
var wn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ti = Ne(wn),
  dr = W({}, wn, { view: 0, detail: 0 }),
  qd = Ne(dr),
  Ko,
  Yo,
  Pn,
  _o = W({}, dr, {
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
    getModifierState: zi,
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
        : (e !== Pn &&
            (Pn && e.type === "mousemove"
              ? ((Ko = e.screenX - Pn.screenX), (Yo = e.screenY - Pn.screenY))
              : (Yo = Ko = 0),
            (Pn = e)),
          Ko);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Yo;
    },
  }),
  Ns = Ne(_o),
  bd = W({}, _o, { dataTransfer: 0 }),
  ef = Ne(bd),
  tf = W({}, dr, { relatedTarget: 0 }),
  Go = Ne(tf),
  nf = W({}, wn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  rf = Ne(nf),
  of = W({}, wn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  lf = Ne(of),
  sf = W({}, wn, { data: 0 }),
  Ps = Ne(sf),
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
function zi() {
  return df;
}
var ff = W({}, dr, {
    key: function (e) {
      if (e.key) {
        var t = af[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Fr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
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
    getModifierState: zi,
    charCode: function (e) {
      return e.type === "keypress" ? Fr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Fr(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  pf = Ne(ff),
  mf = W({}, _o, {
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
  Ls = Ne(mf),
  hf = W({}, dr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: zi,
  }),
  gf = Ne(hf),
  vf = W({}, wn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  yf = Ne(vf),
  wf = W({}, _o, {
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
  Ri = be && "CompositionEvent" in window,
  $n = null;
be && "documentMode" in document && ($n = document.documentMode);
var Sf = be && "TextEvent" in window && !$n,
  vu = be && (!Ri || ($n && 8 < $n && 11 >= $n)),
  Ts = String.fromCharCode(32),
  zs = !1;
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
var Yt = !1;
function xf(e, t) {
  switch (e) {
    case "compositionend":
      return wu(t);
    case "keypress":
      return t.which !== 32 ? null : ((zs = !0), Ts);
    case "textInput":
      return (e = t.data), e === Ts && zs ? null : e;
    default:
      return null;
  }
}
function Ef(e, t) {
  if (Yt)
    return e === "compositionend" || (!Ri && yu(e, t))
      ? ((e = gu()), (Or = Li = ct = null), (Yt = !1), e)
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
function Rs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Cf[e.type] : t === "textarea";
}
function _u(e, t, n, r) {
  Za(r),
    (t = qr(t, "onChange")),
    0 < t.length &&
      ((n = new Ti("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Un = null,
  qn = null;
function Nf(e) {
  Ru(e, 0);
}
function ko(e) {
  var t = Jt(e);
  if (Wa(t)) return e;
}
function Pf(e, t) {
  if (e === "change") return t;
}
var ku = !1;
if (be) {
  var Xo;
  if (be) {
    var Jo = "oninput" in document;
    if (!Jo) {
      var js = document.createElement("div");
      js.setAttribute("oninput", "return;"),
        (Jo = typeof js.oninput == "function");
    }
    Xo = Jo;
  } else Xo = !1;
  ku = Xo && (!document.documentMode || 9 < document.documentMode);
}
function Is() {
  Un && (Un.detachEvent("onpropertychange", Su), (qn = Un = null));
}
function Su(e) {
  if (e.propertyName === "value" && ko(qn)) {
    var t = [];
    _u(t, qn, e, xi(e)), tu(Nf, t);
  }
}
function Lf(e, t, n) {
  e === "focusin"
    ? (Is(), (Un = t), (qn = n), Un.attachEvent("onpropertychange", Su))
    : e === "focusout" && Is();
}
function Tf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ko(qn);
}
function zf(e, t) {
  if (e === "click") return ko(t);
}
function Rf(e, t) {
  if (e === "input" || e === "change") return ko(t);
}
function jf(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Be = typeof Object.is == "function" ? Object.is : jf;
function bn(e, t) {
  if (Be(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!yl.call(t, o) || !Be(e[o], t[o])) return !1;
  }
  return !0;
}
function Ms(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ds(e, t) {
  var n = Ms(e);
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
    n = Ms(n);
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
  for (var e = window, t = Qr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Qr(e.document);
  }
  return t;
}
function ji(e) {
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
    if (r !== null && ji(n)) {
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
          l = Math.min(r.start, o);
        (r = r.end === void 0 ? l : Math.min(r.end, o)),
          !e.extend && l > r && ((o = r), (r = l), (l = o)),
          (o = Ds(n, l));
        var i = Ds(n, r);
        o &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          l > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
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
  Gt = null,
  Fl = null,
  An = null,
  $l = !1;
function Os(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  $l ||
    Gt == null ||
    Gt !== Qr(r) ||
    ((r = Gt),
    "selectionStart" in r && ji(r)
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
    (An && bn(An, r)) ||
      ((An = r),
      (r = qr(Fl, "onSelect")),
      0 < r.length &&
        ((t = new Ti("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Gt))));
}
function Er(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Xt = {
    animationend: Er("Animation", "AnimationEnd"),
    animationiteration: Er("Animation", "AnimationIteration"),
    animationstart: Er("Animation", "AnimationStart"),
    transitionend: Er("Transition", "TransitionEnd"),
  },
  Zo = {},
  Cu = {};
be &&
  ((Cu = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Xt.animationend.animation,
    delete Xt.animationiteration.animation,
    delete Xt.animationstart.animation),
  "TransitionEvent" in window || delete Xt.transitionend.transition);
function So(e) {
  if (Zo[e]) return Zo[e];
  if (!Xt[e]) return e;
  var t = Xt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Cu) return (Zo[e] = t[n]);
  return e;
}
var Nu = So("animationend"),
  Pu = So("animationiteration"),
  Lu = So("animationstart"),
  Tu = So("transitionend"),
  zu = new Map(),
  Fs =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function xt(e, t) {
  zu.set(e, t), Bt(t, [e]);
}
for (var qo = 0; qo < Fs.length; qo++) {
  var bo = Fs[qo],
    Df = bo.toLowerCase(),
    Of = bo[0].toUpperCase() + bo.slice(1);
  xt(Df, "on" + Of);
}
xt(Nu, "onAnimationEnd");
xt(Pu, "onAnimationIteration");
xt(Lu, "onAnimationStart");
xt("dblclick", "onDoubleClick");
xt("focusin", "onFocus");
xt("focusout", "onBlur");
xt(Tu, "onTransitionEnd");
dn("onMouseEnter", ["mouseout", "mouseover"]);
dn("onMouseLeave", ["mouseout", "mouseover"]);
dn("onPointerEnter", ["pointerout", "pointerover"]);
dn("onPointerLeave", ["pointerout", "pointerover"]);
Bt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Bt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Bt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Bt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Bt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Bt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Dn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Ff = new Set("cancel close invalid load scroll toggle".split(" ").concat(Dn));
function $s(e, t, n) {
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
      var l = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var s = r[i],
            a = s.instance,
            u = s.currentTarget;
          if (((s = s.listener), a !== l && o.isPropagationStopped())) break e;
          $s(o, s, u), (l = a);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((s = r[i]),
            (a = s.instance),
            (u = s.currentTarget),
            (s = s.listener),
            a !== l && o.isPropagationStopped())
          )
            break e;
          $s(o, s, u), (l = a);
        }
    }
  }
  if (Yr) throw ((e = Il), (Yr = !1), (Il = null), e);
}
function U(e, t) {
  var n = t[Vl];
  n === void 0 && (n = t[Vl] = new Set());
  var r = e + "__bubble";
  n.has(r) || (ju(t, e, 2, !1), n.add(r));
}
function el(e, t, n) {
  var r = 0;
  t && (r |= 4), ju(n, e, r, t);
}
var Cr = "_reactListening" + Math.random().toString(36).slice(2);
function er(e) {
  if (!e[Cr]) {
    (e[Cr] = !0),
      Ua.forEach(function (n) {
        n !== "selectionchange" && (Ff.has(n) || el(n, !1, e), el(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Cr] || ((t[Cr] = !0), el("selectionchange", !1, t));
  }
}
function ju(e, t, n, r) {
  switch (hu(t)) {
    case 1:
      var o = Jd;
      break;
    case 4:
      o = Zd;
      break;
    default:
      o = Pi;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !jl ||
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
function tl(e, t, n, r, o) {
  var l = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var s = r.stateNode.containerInfo;
        if (s === o || (s.nodeType === 8 && s.parentNode === o)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var a = i.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = i.stateNode.containerInfo),
              a === o || (a.nodeType === 8 && a.parentNode === o))
            )
              return;
            i = i.return;
          }
        for (; s !== null; ) {
          if (((i = Rt(s)), i === null)) return;
          if (((a = i.tag), a === 5 || a === 6)) {
            r = l = i;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  tu(function () {
    var u = l,
      p = xi(n),
      g = [];
    e: {
      var h = zu.get(e);
      if (h !== void 0) {
        var _ = Ti,
          k = e;
        switch (e) {
          case "keypress":
            if (Fr(n) === 0) break e;
          case "keydown":
          case "keyup":
            _ = pf;
            break;
          case "focusin":
            (k = "focus"), (_ = Go);
            break;
          case "focusout":
            (k = "blur"), (_ = Go);
            break;
          case "beforeblur":
          case "afterblur":
            _ = Go;
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
            _ = Ns;
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
            _ = Ls;
        }
        var y = (t & 4) !== 0,
          T = !y && e === "scroll",
          d = y ? (h !== null ? h + "Capture" : null) : h;
        y = [];
        for (var c = u, f; c !== null; ) {
          f = c;
          var v = f.stateNode;
          if (
            (f.tag === 5 &&
              v !== null &&
              ((f = v),
              d !== null && ((v = Gn(c, d)), v != null && y.push(tr(c, v, f)))),
            T)
          )
            break;
          c = c.return;
        }
        0 < y.length &&
          ((h = new _(h, k, null, n, p)), g.push({ event: h, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (_ = e === "mouseout" || e === "pointerout"),
          h &&
            n !== zl &&
            (k = n.relatedTarget || n.fromElement) &&
            (Rt(k) || k[et]))
        )
          break e;
        if (
          (_ || h) &&
          ((h =
            p.window === p
              ? p
              : (h = p.ownerDocument)
              ? h.defaultView || h.parentWindow
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
            ((y = Ns),
            (v = "onMouseLeave"),
            (d = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = Ls),
              (v = "onPointerLeave"),
              (d = "onPointerEnter"),
              (c = "pointer")),
            (T = _ == null ? h : Jt(_)),
            (f = k == null ? h : Jt(k)),
            (h = new y(v, c + "leave", _, n, p)),
            (h.target = T),
            (h.relatedTarget = f),
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
          _ !== null && Us(g, h, _, y, !1),
            k !== null && T !== null && Us(g, T, k, y, !0);
        }
      }
      e: {
        if (
          ((h = u ? Jt(u) : window),
          (_ = h.nodeName && h.nodeName.toLowerCase()),
          _ === "select" || (_ === "input" && h.type === "file"))
        )
          var E = Pf;
        else if (Rs(h))
          if (ku) E = Rf;
          else {
            E = Tf;
            var N = Lf;
          }
        else
          (_ = h.nodeName) &&
            _.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (E = zf);
        if (E && (E = E(e, u))) {
          _u(g, E, n, p);
          break e;
        }
        N && N(e, h, u),
          e === "focusout" &&
            (N = h._wrapperState) &&
            N.controlled &&
            h.type === "number" &&
            Cl(h, "number", h.value);
      }
      switch (((N = u ? Jt(u) : window), e)) {
        case "focusin":
          (Rs(N) || N.contentEditable === "true") &&
            ((Gt = N), (Fl = u), (An = null));
          break;
        case "focusout":
          An = Fl = Gt = null;
          break;
        case "mousedown":
          $l = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ($l = !1), Os(g, n, p);
          break;
        case "selectionchange":
          if (Mf) break;
        case "keydown":
        case "keyup":
          Os(g, n, p);
      }
      var P;
      if (Ri)
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
        Yt
          ? yu(e, n) && (L = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (L = "onCompositionStart");
      L &&
        (vu &&
          n.locale !== "ko" &&
          (Yt || L !== "onCompositionStart"
            ? L === "onCompositionEnd" && Yt && (P = gu())
            : ((ct = p),
              (Li = "value" in ct ? ct.value : ct.textContent),
              (Yt = !0))),
        (N = qr(u, L)),
        0 < N.length &&
          ((L = new Ps(L, e, null, n, p)),
          g.push({ event: L, listeners: N }),
          P ? (L.data = P) : ((P = wu(n)), P !== null && (L.data = P)))),
        (P = Sf ? xf(e, n) : Ef(e, n)) &&
          ((u = qr(u, "onBeforeInput")),
          0 < u.length &&
            ((p = new Ps("onBeforeInput", "beforeinput", null, n, p)),
            g.push({ event: p, listeners: u }),
            (p.data = P)));
    }
    Ru(g, t);
  });
}
function tr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function qr(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      l = o.stateNode;
    o.tag === 5 &&
      l !== null &&
      ((o = l),
      (l = Gn(e, n)),
      l != null && r.unshift(tr(e, l, o)),
      (l = Gn(e, t)),
      l != null && r.push(tr(e, l, o))),
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
function Us(e, t, n, r, o) {
  for (var l = t._reactName, i = []; n !== null && n !== r; ) {
    var s = n,
      a = s.alternate,
      u = s.stateNode;
    if (a !== null && a === r) break;
    s.tag === 5 &&
      u !== null &&
      ((s = u),
      o
        ? ((a = Gn(n, l)), a != null && i.unshift(tr(n, a, s)))
        : o || ((a = Gn(n, l)), a != null && i.push(tr(n, a, s)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
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
function Nr(e, t, n) {
  if (((t = As(t)), As(e) !== t && n)) throw Error(w(425));
}
function br() {}
var Ul = null,
  Al = null;
function Bl(e, t) {
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
var Hl = typeof setTimeout == "function" ? setTimeout : void 0,
  Af = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Bs = typeof Promise == "function" ? Promise : void 0,
  Bf =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Bs < "u"
      ? function (e) {
          return Bs.resolve(null).then(e).catch(Hf);
        }
      : Hl;
function Hf(e) {
  setTimeout(function () {
    throw e;
  });
}
function nl(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), Zn(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  Zn(t);
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
function Hs(e) {
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
var _n = Math.random().toString(36).slice(2),
  Qe = "__reactFiber$" + _n,
  nr = "__reactProps$" + _n,
  et = "__reactContainer$" + _n,
  Vl = "__reactEvents$" + _n,
  Vf = "__reactListeners$" + _n,
  Wf = "__reactHandles$" + _n;
function Rt(e) {
  var t = e[Qe];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[et] || n[Qe])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Hs(e); e !== null; ) {
          if ((n = e[Qe])) return n;
          e = Hs(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function fr(e) {
  return (
    (e = e[Qe] || e[et]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Jt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(w(33));
}
function xo(e) {
  return e[nr] || null;
}
var Wl = [],
  Zt = -1;
function Et(e) {
  return { current: e };
}
function A(e) {
  0 > Zt || ((e.current = Wl[Zt]), (Wl[Zt] = null), Zt--);
}
function $(e, t) {
  Zt++, (Wl[Zt] = e.current), (e.current = t);
}
var St = {},
  ue = Et(St),
  ve = Et(!1),
  Ot = St;
function fn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return St;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    l;
  for (l in n) o[l] = t[l];
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
function eo() {
  A(ve), A(ue);
}
function Vs(e, t, n) {
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
function to(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || St),
    (Ot = ue.current),
    $(ue, e),
    $(ve, ve.current),
    !0
  );
}
function Ws(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(w(169));
  n
    ? ((e = Iu(e, t, Ot)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      A(ve),
      A(ue),
      $(ue, e))
    : A(ve),
    $(ve, n);
}
var Xe = null,
  Eo = !1,
  rl = !1;
function Mu(e) {
  Xe === null ? (Xe = [e]) : Xe.push(e);
}
function Qf(e) {
  (Eo = !0), Mu(e);
}
function Ct() {
  if (!rl && Xe !== null) {
    rl = !0;
    var e = 0,
      t = F;
    try {
      var n = Xe;
      for (F = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Xe = null), (Eo = !1);
    } catch (o) {
      throw (Xe !== null && (Xe = Xe.slice(e + 1)), lu(Ei, Ct), o);
    } finally {
      (F = t), (rl = !1);
    }
  }
  return null;
}
var qt = [],
  bt = 0,
  no = null,
  ro = 0,
  Le = [],
  Te = 0,
  Ft = null,
  Je = 1,
  Ze = "";
function Tt(e, t) {
  (qt[bt++] = ro), (qt[bt++] = no), (no = e), (ro = t);
}
function Du(e, t, n) {
  (Le[Te++] = Je), (Le[Te++] = Ze), (Le[Te++] = Ft), (Ft = e);
  var r = Je;
  e = Ze;
  var o = 32 - Ue(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var l = 32 - Ue(t) + o;
  if (30 < l) {
    var i = o - (o % 5);
    (l = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (o -= i),
      (Je = (1 << (32 - Ue(t) + o)) | (n << o) | r),
      (Ze = l + e);
  } else (Je = (1 << l) | (n << o) | r), (Ze = e);
}
function Ii(e) {
  e.return !== null && (Tt(e, 1), Du(e, 1, 0));
}
function Mi(e) {
  for (; e === no; )
    (no = qt[--bt]), (qt[bt] = null), (ro = qt[--bt]), (qt[bt] = null);
  for (; e === Ft; )
    (Ft = Le[--Te]),
      (Le[Te] = null),
      (Ze = Le[--Te]),
      (Le[Te] = null),
      (Je = Le[--Te]),
      (Le[Te] = null);
}
var xe = null,
  Se = null,
  B = !1,
  $e = null;
function Ou(e, t) {
  var n = ze(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Qs(e, t) {
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
            (n = ze(18, null, null, 0)),
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
function Ql(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Kl(e) {
  if (B) {
    var t = Se;
    if (t) {
      var n = t;
      if (!Qs(e, t)) {
        if (Ql(e)) throw Error(w(418));
        t = gt(n.nextSibling);
        var r = xe;
        t && Qs(e, t)
          ? Ou(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (B = !1), (xe = e));
      }
    } else {
      if (Ql(e)) throw Error(w(418));
      (e.flags = (e.flags & -4097) | 2), (B = !1), (xe = e);
    }
  }
}
function Ks(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  xe = e;
}
function Pr(e) {
  if (e !== xe) return !1;
  if (!B) return Ks(e), (B = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Bl(e.type, e.memoizedProps))),
    t && (t = Se))
  ) {
    if (Ql(e)) throw (Fu(), Error(w(418)));
    for (; t; ) Ou(e, t), (t = gt(t.nextSibling));
  }
  if ((Ks(e), e.tag === 13)) {
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
function pn() {
  (Se = xe = null), (B = !1);
}
function Di(e) {
  $e === null ? ($e = [e]) : $e.push(e);
}
var Kf = rt.ReactCurrentBatchConfig;
function Oe(e, t) {
  if (e && e.defaultProps) {
    (t = W({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var oo = Et(null),
  lo = null,
  en = null,
  Oi = null;
function Fi() {
  Oi = en = lo = null;
}
function $i(e) {
  var t = oo.current;
  A(oo), (e._currentValue = t);
}
function Yl(e, t, n) {
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
function an(e, t) {
  (lo = e),
    (Oi = en = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ge = !0), (e.firstContext = null));
}
function je(e) {
  var t = e._currentValue;
  if (Oi !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), en === null)) {
      if (lo === null) throw Error(w(308));
      (en = e), (lo.dependencies = { lanes: 0, firstContext: e });
    } else en = en.next = e;
  return t;
}
var jt = null;
function Ui(e) {
  jt === null ? (jt = [e]) : jt.push(e);
}
function $u(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Ui(t)) : ((n.next = o.next), (o.next = n)),
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
function Ai(e) {
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
    o === null ? ((t.next = t), Ui(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    tt(e, n)
  );
}
function $r(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ci(e, n);
  }
}
function Ys(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      l = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        l === null ? (o = l = i) : (l = l.next = i), (n = n.next);
      } while (n !== null);
      l === null ? (o = l = t) : (l = l.next = t);
    } else o = l = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: l,
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
function io(e, t, n, r) {
  var o = e.updateQueue;
  st = !1;
  var l = o.firstBaseUpdate,
    i = o.lastBaseUpdate,
    s = o.shared.pending;
  if (s !== null) {
    o.shared.pending = null;
    var a = s,
      u = a.next;
    (a.next = null), i === null ? (l = u) : (i.next = u), (i = a);
    var p = e.alternate;
    p !== null &&
      ((p = p.updateQueue),
      (s = p.lastBaseUpdate),
      s !== i &&
        (s === null ? (p.firstBaseUpdate = u) : (s.next = u),
        (p.lastBaseUpdate = a)));
  }
  if (l !== null) {
    var g = o.baseState;
    (i = 0), (p = u = a = null), (s = l);
    do {
      var h = s.lane,
        _ = s.eventTime;
      if ((r & h) === h) {
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
          switch (((h = t), (_ = n), y.tag)) {
            case 1:
              if (((k = y.payload), typeof k == "function")) {
                g = k.call(_, g, h);
                break e;
              }
              g = k;
              break e;
            case 3:
              k.flags = (k.flags & -65537) | 128;
            case 0:
              if (
                ((k = y.payload),
                (h = typeof k == "function" ? k.call(_, g, h) : k),
                h == null)
              )
                break e;
              g = W({}, g, h);
              break e;
            case 2:
              st = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (h = o.effects),
          h === null ? (o.effects = [s]) : h.push(s));
      } else
        (_ = {
          eventTime: _,
          lane: h,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          p === null ? ((u = p = _), (a = g)) : (p = p.next = _),
          (i |= h);
      if (((s = s.next), s === null)) {
        if (((s = o.shared.pending), s === null)) break;
        (h = s),
          (s = h.next),
          (h.next = null),
          (o.lastBaseUpdate = h),
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
      do (i |= o.lane), (o = o.next);
      while (o !== t);
    } else l === null && (o.shared.lanes = 0);
    (Ut |= i), (e.lanes = i), (e.memoizedState = g);
  }
}
function Gs(e, t, n) {
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
var Au = new $a.Component().refs;
function Gl(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : W({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Co = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Ht(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = de(),
      o = wt(e),
      l = qe(r, o);
    (l.payload = t),
      n != null && (l.callback = n),
      (t = vt(e, l, o)),
      t !== null && (Ae(t, e, o, r), $r(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = de(),
      o = wt(e),
      l = qe(r, o);
    (l.tag = 1),
      (l.payload = t),
      n != null && (l.callback = n),
      (t = vt(e, l, o)),
      t !== null && (Ae(t, e, o, r), $r(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = de(),
      r = wt(e),
      o = qe(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = vt(e, o, r)),
      t !== null && (Ae(t, e, r, n), $r(t, e, r));
  },
};
function Xs(e, t, n, r, o, l, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, l, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !bn(n, r) || !bn(o, l)
      : !0
  );
}
function Bu(e, t, n) {
  var r = !1,
    o = St,
    l = t.contextType;
  return (
    typeof l == "object" && l !== null
      ? (l = je(l))
      : ((o = ye(t) ? Ot : ue.current),
        (r = t.contextTypes),
        (l = (r = r != null) ? fn(e, o) : St)),
    (t = new t(n, l)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Co),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    t
  );
}
function Js(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Co.enqueueReplaceState(t, t.state, null);
}
function Xl(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = Au), Ai(e);
  var l = t.contextType;
  typeof l == "object" && l !== null
    ? (o.context = je(l))
    : ((l = ye(t) ? Ot : ue.current), (o.context = fn(e, l))),
    (o.state = e.memoizedState),
    (l = t.getDerivedStateFromProps),
    typeof l == "function" && (Gl(e, t, l, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Co.enqueueReplaceState(o, o.state, null),
      io(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Ln(e, t, n) {
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
        l = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === l
        ? t.ref
        : ((t = function (i) {
            var s = o.refs;
            s === Au && (s = o.refs = {}),
              i === null ? delete s[l] : (s[l] = i);
          }),
          (t._stringRef = l),
          t);
    }
    if (typeof e != "string") throw Error(w(284));
    if (!n._owner) throw Error(w(290, e));
  }
  return e;
}
function Lr(e, t) {
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
function Zs(e) {
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
  function l(d, c, f) {
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
  function i(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function s(d, c, f, v) {
    return c === null || c.tag !== 6
      ? ((c = cl(f, d.mode, v)), (c.return = d), c)
      : ((c = o(c, f)), (c.return = d), c);
  }
  function a(d, c, f, v) {
    var E = f.type;
    return E === Kt
      ? p(d, c, f.props.children, v, f.key)
      : c !== null &&
        (c.elementType === E ||
          (typeof E == "object" &&
            E !== null &&
            E.$$typeof === it &&
            Zs(E) === c.type))
      ? ((v = o(c, f.props)), (v.ref = Ln(d, c, f)), (v.return = d), v)
      : ((v = Wr(f.type, f.key, f.props, null, d.mode, v)),
        (v.ref = Ln(d, c, f)),
        (v.return = d),
        v);
  }
  function u(d, c, f, v) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== f.containerInfo ||
      c.stateNode.implementation !== f.implementation
      ? ((c = dl(f, d.mode, v)), (c.return = d), c)
      : ((c = o(c, f.children || [])), (c.return = d), c);
  }
  function p(d, c, f, v, E) {
    return c === null || c.tag !== 7
      ? ((c = Dt(f, d.mode, v, E)), (c.return = d), c)
      : ((c = o(c, f)), (c.return = d), c);
  }
  function g(d, c, f) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = cl("" + c, d.mode, f)), (c.return = d), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case vr:
          return (
            (f = Wr(c.type, c.key, c.props, null, d.mode, f)),
            (f.ref = Ln(d, null, c)),
            (f.return = d),
            f
          );
        case Qt:
          return (c = dl(c, d.mode, f)), (c.return = d), c;
        case it:
          var v = c._init;
          return g(d, v(c._payload), f);
      }
      if (In(c) || xn(c))
        return (c = Dt(c, d.mode, f, null)), (c.return = d), c;
      Lr(d, c);
    }
    return null;
  }
  function h(d, c, f, v) {
    var E = c !== null ? c.key : null;
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return E !== null ? null : s(d, c, "" + f, v);
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case vr:
          return f.key === E ? a(d, c, f, v) : null;
        case Qt:
          return f.key === E ? u(d, c, f, v) : null;
        case it:
          return (E = f._init), h(d, c, E(f._payload), v);
      }
      if (In(f) || xn(f)) return E !== null ? null : p(d, c, f, v, null);
      Lr(d, f);
    }
    return null;
  }
  function _(d, c, f, v, E) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return (d = d.get(f) || null), s(c, d, "" + v, E);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case vr:
          return (d = d.get(v.key === null ? f : v.key) || null), a(c, d, v, E);
        case Qt:
          return (d = d.get(v.key === null ? f : v.key) || null), u(c, d, v, E);
        case it:
          var N = v._init;
          return _(d, c, f, N(v._payload), E);
      }
      if (In(v) || xn(v)) return (d = d.get(f) || null), p(c, d, v, E, null);
      Lr(c, v);
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
      var M = h(d, P, f[L], v);
      if (M === null) {
        P === null && (P = K);
        break;
      }
      e && P && M.alternate === null && t(d, P),
        (c = l(M, c, L)),
        N === null ? (E = M) : (N.sibling = M),
        (N = M),
        (P = K);
    }
    if (L === f.length) return n(d, P), B && Tt(d, L), E;
    if (P === null) {
      for (; L < f.length; L++)
        (P = g(d, f[L], v)),
          P !== null &&
            ((c = l(P, c, L)), N === null ? (E = P) : (N.sibling = P), (N = P));
      return B && Tt(d, L), E;
    }
    for (P = r(d, P); L < f.length; L++)
      (K = _(P, d, L, f[L], v)),
        K !== null &&
          (e && K.alternate !== null && P.delete(K.key === null ? L : K.key),
          (c = l(K, c, L)),
          N === null ? (E = K) : (N.sibling = K),
          (N = K));
    return (
      e &&
        P.forEach(function (Me) {
          return t(d, Me);
        }),
      B && Tt(d, L),
      E
    );
  }
  function y(d, c, f, v) {
    var E = xn(f);
    if (typeof E != "function") throw Error(w(150));
    if (((f = E.call(f)), f == null)) throw Error(w(151));
    for (
      var N = (E = null), P = c, L = (c = 0), K = null, M = f.next();
      P !== null && !M.done;
      L++, M = f.next()
    ) {
      P.index > L ? ((K = P), (P = null)) : (K = P.sibling);
      var Me = h(d, P, M.value, v);
      if (Me === null) {
        P === null && (P = K);
        break;
      }
      e && P && Me.alternate === null && t(d, P),
        (c = l(Me, c, L)),
        N === null ? (E = Me) : (N.sibling = Me),
        (N = Me),
        (P = K);
    }
    if (M.done) return n(d, P), B && Tt(d, L), E;
    if (P === null) {
      for (; !M.done; L++, M = f.next())
        (M = g(d, M.value, v)),
          M !== null &&
            ((c = l(M, c, L)), N === null ? (E = M) : (N.sibling = M), (N = M));
      return B && Tt(d, L), E;
    }
    for (P = r(d, P); !M.done; L++, M = f.next())
      (M = _(P, d, L, M.value, v)),
        M !== null &&
          (e && M.alternate !== null && P.delete(M.key === null ? L : M.key),
          (c = l(M, c, L)),
          N === null ? (E = M) : (N.sibling = M),
          (N = M));
    return (
      e &&
        P.forEach(function (kn) {
          return t(d, kn);
        }),
      B && Tt(d, L),
      E
    );
  }
  function T(d, c, f, v) {
    if (
      (typeof f == "object" &&
        f !== null &&
        f.type === Kt &&
        f.key === null &&
        (f = f.props.children),
      typeof f == "object" && f !== null)
    ) {
      switch (f.$$typeof) {
        case vr:
          e: {
            for (var E = f.key, N = c; N !== null; ) {
              if (N.key === E) {
                if (((E = f.type), E === Kt)) {
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
                    E.$$typeof === it &&
                    Zs(E) === N.type)
                ) {
                  n(d, N.sibling),
                    (c = o(N, f.props)),
                    (c.ref = Ln(d, N, f)),
                    (c.return = d),
                    (d = c);
                  break e;
                }
                n(d, N);
                break;
              } else t(d, N);
              N = N.sibling;
            }
            f.type === Kt
              ? ((c = Dt(f.props.children, d.mode, v, f.key)),
                (c.return = d),
                (d = c))
              : ((v = Wr(f.type, f.key, f.props, null, d.mode, v)),
                (v.ref = Ln(d, c, f)),
                (v.return = d),
                (d = v));
          }
          return i(d);
        case Qt:
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
            (c = dl(f, d.mode, v)), (c.return = d), (d = c);
          }
          return i(d);
        case it:
          return (N = f._init), T(d, c, N(f._payload), v);
      }
      if (In(f)) return k(d, c, f, v);
      if (xn(f)) return y(d, c, f, v);
      Lr(d, f);
    }
    return (typeof f == "string" && f !== "") || typeof f == "number"
      ? ((f = "" + f),
        c !== null && c.tag === 6
          ? (n(d, c.sibling), (c = o(c, f)), (c.return = d), (d = c))
          : (n(d, c), (c = cl(f, d.mode, v)), (c.return = d), (d = c)),
        i(d))
      : n(d, c);
  }
  return T;
}
var mn = Hu(!0),
  Vu = Hu(!1),
  pr = {},
  Ye = Et(pr),
  rr = Et(pr),
  or = Et(pr);
function It(e) {
  if (e === pr) throw Error(w(174));
  return e;
}
function Bi(e, t) {
  switch (($(or, t), $(rr, e), $(Ye, pr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Pl(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Pl(t, e));
  }
  A(Ye), $(Ye, t);
}
function hn() {
  A(Ye), A(rr), A(or);
}
function Wu(e) {
  It(or.current);
  var t = It(Ye.current),
    n = Pl(t, e.type);
  t !== n && ($(rr, e), $(Ye, n));
}
function Hi(e) {
  rr.current === e && (A(Ye), A(rr));
}
var H = Et(0);
function so(e) {
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
var ol = [];
function Vi() {
  for (var e = 0; e < ol.length; e++)
    ol[e]._workInProgressVersionPrimary = null;
  ol.length = 0;
}
var Ur = rt.ReactCurrentDispatcher,
  ll = rt.ReactCurrentBatchConfig,
  $t = 0,
  V = null,
  Z = null,
  te = null,
  ao = !1,
  Bn = !1,
  lr = 0,
  Yf = 0;
function ie() {
  throw Error(w(321));
}
function Wi(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Be(e[n], t[n])) return !1;
  return !0;
}
function Qi(e, t, n, r, o, l) {
  if (
    (($t = l),
    (V = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ur.current = e === null || e.memoizedState === null ? Zf : qf),
    (e = n(r, o)),
    Bn)
  ) {
    l = 0;
    do {
      if (((Bn = !1), (lr = 0), 25 <= l)) throw Error(w(301));
      (l += 1),
        (te = Z = null),
        (t.updateQueue = null),
        (Ur.current = bf),
        (e = n(r, o));
    } while (Bn);
  }
  if (
    ((Ur.current = uo),
    (t = Z !== null && Z.next !== null),
    ($t = 0),
    (te = Z = V = null),
    (ao = !1),
    t)
  )
    throw Error(w(300));
  return e;
}
function Ki() {
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
function Ie() {
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
function ir(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function il(e) {
  var t = Ie(),
    n = t.queue;
  if (n === null) throw Error(w(311));
  n.lastRenderedReducer = e;
  var r = Z,
    o = r.baseQueue,
    l = n.pending;
  if (l !== null) {
    if (o !== null) {
      var i = o.next;
      (o.next = l.next), (l.next = i);
    }
    (r.baseQueue = o = l), (n.pending = null);
  }
  if (o !== null) {
    (l = o.next), (r = r.baseState);
    var s = (i = null),
      a = null,
      u = l;
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
        a === null ? ((s = a = g), (i = r)) : (a = a.next = g),
          (V.lanes |= p),
          (Ut |= p);
      }
      u = u.next;
    } while (u !== null && u !== l);
    a === null ? (i = r) : (a.next = s),
      Be(r, t.memoizedState) || (ge = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (l = o.lane), (V.lanes |= l), (Ut |= l), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function sl(e) {
  var t = Ie(),
    n = t.queue;
  if (n === null) throw Error(w(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    l = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var i = (o = o.next);
    do (l = e(l, i.action)), (i = i.next);
    while (i !== o);
    Be(l, t.memoizedState) || (ge = !0),
      (t.memoizedState = l),
      t.baseQueue === null && (t.baseState = l),
      (n.lastRenderedState = l);
  }
  return [l, r];
}
function Qu() {}
function Ku(e, t) {
  var n = V,
    r = Ie(),
    o = t(),
    l = !Be(r.memoizedState, o);
  if (
    (l && ((r.memoizedState = o), (ge = !0)),
    (r = r.queue),
    Yi(Xu.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || l || (te !== null && te.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      sr(9, Gu.bind(null, n, r, o, t), void 0, null),
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
    return !Be(e, n);
  } catch {
    return !0;
  }
}
function Zu(e) {
  var t = tt(e, 1);
  t !== null && Ae(t, e, 1, -1);
}
function qs(e) {
  var t = We();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ir,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Jf.bind(null, V, e)),
    [t.memoizedState, e]
  );
}
function sr(e, t, n, r) {
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
  return Ie().memoizedState;
}
function Ar(e, t, n, r) {
  var o = We();
  (V.flags |= e),
    (o.memoizedState = sr(1 | t, n, void 0, r === void 0 ? null : r));
}
function No(e, t, n, r) {
  var o = Ie();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (Z !== null) {
    var i = Z.memoizedState;
    if (((l = i.destroy), r !== null && Wi(r, i.deps))) {
      o.memoizedState = sr(t, n, l, r);
      return;
    }
  }
  (V.flags |= e), (o.memoizedState = sr(1 | t, n, l, r));
}
function bs(e, t) {
  return Ar(8390656, 8, e, t);
}
function Yi(e, t) {
  return No(2048, 8, e, t);
}
function bu(e, t) {
  return No(4, 2, e, t);
}
function ec(e, t) {
  return No(4, 4, e, t);
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
    (n = n != null ? n.concat([e]) : null), No(4, 4, tc.bind(null, t, e), n)
  );
}
function Gi() {}
function rc(e, t) {
  var n = Ie();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Wi(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function oc(e, t) {
  var n = Ie();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Wi(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function lc(e, t, n) {
  return $t & 21
    ? (Be(n, t) || ((n = au()), (V.lanes |= n), (Ut |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ge = !0)), (e.memoizedState = n));
}
function Gf(e, t) {
  var n = F;
  (F = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ll.transition;
  ll.transition = {};
  try {
    e(!1), t();
  } finally {
    (F = n), (ll.transition = r);
  }
}
function ic() {
  return Ie().memoizedState;
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
    var l = e.alternate;
    if (
      e.lanes === 0 &&
      (l === null || l.lanes === 0) &&
      ((l = t.lastRenderedReducer), l !== null)
    )
      try {
        var i = t.lastRenderedState,
          s = l(i, n);
        if (((o.hasEagerState = !0), (o.eagerState = s), Be(s, i))) {
          var a = t.interleaved;
          a === null
            ? ((o.next = o), Ui(t))
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
  Bn = ao = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function uc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ci(e, n);
  }
}
var uo = {
    readContext: je,
    useCallback: ie,
    useContext: ie,
    useEffect: ie,
    useImperativeHandle: ie,
    useInsertionEffect: ie,
    useLayoutEffect: ie,
    useMemo: ie,
    useReducer: ie,
    useRef: ie,
    useState: ie,
    useDebugValue: ie,
    useDeferredValue: ie,
    useTransition: ie,
    useMutableSource: ie,
    useSyncExternalStore: ie,
    useId: ie,
    unstable_isNewReconciler: !1,
  },
  Zf = {
    readContext: je,
    useCallback: function (e, t) {
      return (We().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: je,
    useEffect: bs,
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
    useState: qs,
    useDebugValue: Gi,
    useDeferredValue: function (e) {
      return (We().memoizedState = e);
    },
    useTransition: function () {
      var e = qs(!1),
        t = e[0];
      return (e = Gf.bind(null, e[1])), (We().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = V,
        o = We();
      if (B) {
        if (n === void 0) throw Error(w(407));
        n = n();
      } else {
        if (((n = t()), ne === null)) throw Error(w(349));
        $t & 30 || Yu(r, t, n);
      }
      o.memoizedState = n;
      var l = { value: n, getSnapshot: t };
      return (
        (o.queue = l),
        bs(Xu.bind(null, r, l, e), [e]),
        (r.flags |= 2048),
        sr(9, Gu.bind(null, r, l, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = We(),
        t = ne.identifierPrefix;
      if (B) {
        var n = Ze,
          r = Je;
        (n = (r & ~(1 << (32 - Ue(r) - 1))).toString(32) + n),
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
    readContext: je,
    useCallback: rc,
    useContext: je,
    useEffect: Yi,
    useImperativeHandle: nc,
    useInsertionEffect: bu,
    useLayoutEffect: ec,
    useMemo: oc,
    useReducer: il,
    useRef: qu,
    useState: function () {
      return il(ir);
    },
    useDebugValue: Gi,
    useDeferredValue: function (e) {
      var t = Ie();
      return lc(t, Z.memoizedState, e);
    },
    useTransition: function () {
      var e = il(ir)[0],
        t = Ie().memoizedState;
      return [e, t];
    },
    useMutableSource: Qu,
    useSyncExternalStore: Ku,
    useId: ic,
    unstable_isNewReconciler: !1,
  },
  bf = {
    readContext: je,
    useCallback: rc,
    useContext: je,
    useEffect: Yi,
    useImperativeHandle: nc,
    useInsertionEffect: bu,
    useLayoutEffect: ec,
    useMemo: oc,
    useReducer: sl,
    useRef: qu,
    useState: function () {
      return sl(ir);
    },
    useDebugValue: Gi,
    useDeferredValue: function (e) {
      var t = Ie();
      return Z === null ? (t.memoizedState = e) : lc(t, Z.memoizedState, e);
    },
    useTransition: function () {
      var e = sl(ir)[0],
        t = Ie().memoizedState;
      return [e, t];
    },
    useMutableSource: Qu,
    useSyncExternalStore: Ku,
    useId: ic,
    unstable_isNewReconciler: !1,
  };
function gn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Nd(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (l) {
    o =
      `
Error generating stack: ` +
      l.message +
      `
` +
      l.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function al(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Jl(e, t) {
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
      fo || ((fo = !0), (ii = r)), Jl(e, t);
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
        Jl(e, t);
      });
  }
  var l = e.stateNode;
  return (
    l !== null &&
      typeof l.componentDidCatch == "function" &&
      (n.callback = function () {
        Jl(e, t),
          typeof r != "function" &&
            (yt === null ? (yt = new Set([this])) : yt.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function ea(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new ep();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = mp.bind(null, e, t, n)), t.then(e, e));
}
function ta(e) {
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
function na(e, t, n, r, o) {
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
function ra(e, t, n, r, o) {
  n = n.render;
  var l = t.ref;
  return (
    an(t, o),
    (r = Qi(e, t, n, r, l, o)),
    (n = Ki()),
    e !== null && !ge
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        nt(e, t, o))
      : (B && n && Ii(t), (t.flags |= 1), ce(e, t, r, o), t.child)
  );
}
function oa(e, t, n, r, o) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" &&
      !ns(l) &&
      l.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = l), fc(e, t, l, r, o))
      : ((e = Wr(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((l = e.child), !(e.lanes & o))) {
    var i = l.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : bn), n(i, r) && e.ref === t.ref)
    )
      return nt(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = _t(l, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function fc(e, t, n, r, o) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (bn(l, r) && e.ref === t.ref)
      if (((ge = !1), (t.pendingProps = r = l), (e.lanes & o) !== 0))
        e.flags & 131072 && (ge = !0);
      else return (t.lanes = e.lanes), nt(e, t, o);
  }
  return Zl(e, t, n, r, o);
}
function pc(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    l = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        $(nn, ke),
        (ke |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = l !== null ? l.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          $(nn, ke),
          (ke |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = l !== null ? l.baseLanes : n),
        $(nn, ke),
        (ke |= r);
    }
  else
    l !== null ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n),
      $(nn, ke),
      (ke |= r);
  return ce(e, t, o, n), t.child;
}
function mc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Zl(e, t, n, r, o) {
  var l = ye(n) ? Ot : ue.current;
  return (
    (l = fn(t, l)),
    an(t, o),
    (n = Qi(e, t, n, r, l, o)),
    (r = Ki()),
    e !== null && !ge
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        nt(e, t, o))
      : (B && r && Ii(t), (t.flags |= 1), ce(e, t, n, o), t.child)
  );
}
function la(e, t, n, r, o) {
  if (ye(n)) {
    var l = !0;
    to(t);
  } else l = !1;
  if ((an(t, o), t.stateNode === null))
    Br(e, t), Bu(t, n, r), Xl(t, n, r, o), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      s = t.memoizedProps;
    i.props = s;
    var a = i.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = je(u))
      : ((u = ye(n) ? Ot : ue.current), (u = fn(t, u)));
    var p = n.getDerivedStateFromProps,
      g =
        typeof p == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    g ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((s !== r || a !== u) && Js(t, i, r, u)),
      (st = !1);
    var h = t.memoizedState;
    (i.state = h),
      io(t, r, i, o),
      (a = t.memoizedState),
      s !== r || h !== a || ve.current || st
        ? (typeof p == "function" && (Gl(t, n, p, r), (a = t.memoizedState)),
          (s = st || Xs(t, n, s, r, h, a, u))
            ? (g ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (i.props = r),
          (i.state = a),
          (i.context = u),
          (r = s))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      Uu(e, t),
      (s = t.memoizedProps),
      (u = t.type === t.elementType ? s : Oe(t.type, s)),
      (i.props = u),
      (g = t.pendingProps),
      (h = i.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = je(a))
        : ((a = ye(n) ? Ot : ue.current), (a = fn(t, a)));
    var _ = n.getDerivedStateFromProps;
    (p =
      typeof _ == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((s !== g || h !== a) && Js(t, i, r, a)),
      (st = !1),
      (h = t.memoizedState),
      (i.state = h),
      io(t, r, i, o);
    var k = t.memoizedState;
    s !== g || h !== k || ve.current || st
      ? (typeof _ == "function" && (Gl(t, n, _, r), (k = t.memoizedState)),
        (u = st || Xs(t, n, u, r, h, k, a) || !1)
          ? (p ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, k, a),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, k, a)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (s === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = k)),
        (i.props = r),
        (i.state = k),
        (i.context = a),
        (r = u))
      : (typeof i.componentDidUpdate != "function" ||
          (s === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return ql(e, t, n, r, l, o);
}
function ql(e, t, n, r, o, l) {
  mc(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return o && Ws(t, n, !1), nt(e, t, l);
  (r = t.stateNode), (tp.current = t);
  var s =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = mn(t, e.child, null, l)), (t.child = mn(t, null, s, l)))
      : ce(e, t, s, l),
    (t.memoizedState = r.state),
    o && Ws(t, n, !0),
    t.child
  );
}
function hc(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Vs(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Vs(e, t.context, !1),
    Bi(e, t.containerInfo);
}
function ia(e, t, n, r, o) {
  return pn(), Di(o), (t.flags |= 256), ce(e, t, n, r), t.child;
}
var bl = { dehydrated: null, treeContext: null, retryLane: 0 };
function ei(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function gc(e, t, n) {
  var r = t.pendingProps,
    o = H.current,
    l = !1,
    i = (t.flags & 128) !== 0,
    s;
  if (
    ((s = i) ||
      (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    s
      ? ((l = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    $(H, o & 1),
    e === null)
  )
    return (
      Kl(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          l
            ? ((r = t.mode),
              (l = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && l !== null
                ? ((l.childLanes = 0), (l.pendingProps = i))
                : (l = To(i, r, 0, null)),
              (e = Dt(e, r, n, null)),
              (l.return = t),
              (e.return = t),
              (l.sibling = e),
              (t.child = l),
              (t.child.memoizedState = ei(n)),
              (t.memoizedState = bl),
              e)
            : Xi(t, i))
    );
  if (((o = e.memoizedState), o !== null && ((s = o.dehydrated), s !== null)))
    return np(e, t, i, r, s, o, n);
  if (l) {
    (l = r.fallback), (i = t.mode), (o = e.child), (s = o.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = _t(o, a)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      s !== null ? (l = _t(s, l)) : ((l = Dt(l, i, n, null)), (l.flags |= 2)),
      (l.return = t),
      (r.return = t),
      (r.sibling = l),
      (t.child = r),
      (r = l),
      (l = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? ei(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (l.memoizedState = i),
      (l.childLanes = e.childLanes & ~n),
      (t.memoizedState = bl),
      r
    );
  }
  return (
    (l = e.child),
    (e = l.sibling),
    (r = _t(l, { mode: "visible", children: r.children })),
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
function Xi(e, t) {
  return (
    (t = To({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Tr(e, t, n, r) {
  return (
    r !== null && Di(r),
    mn(t, e.child, null, n),
    (e = Xi(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function np(e, t, n, r, o, l, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = al(Error(w(422)))), Tr(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((l = r.fallback),
        (o = t.mode),
        (r = To({ mode: "visible", children: r.children }, o, 0, null)),
        (l = Dt(l, o, i, null)),
        (l.flags |= 2),
        (r.return = t),
        (l.return = t),
        (r.sibling = l),
        (t.child = r),
        t.mode & 1 && mn(t, e.child, null, i),
        (t.child.memoizedState = ei(i)),
        (t.memoizedState = bl),
        l);
  if (!(t.mode & 1)) return Tr(e, t, i, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (l = Error(w(419))), (r = al(l, r, void 0)), Tr(e, t, i, r);
  }
  if (((s = (i & e.childLanes) !== 0), ge || s)) {
    if (((r = ne), r !== null)) {
      switch (i & -i) {
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
      (o = o & (r.suspendedLanes | i) ? 0 : o),
        o !== 0 &&
          o !== l.retryLane &&
          ((l.retryLane = o), tt(e, o), Ae(r, e, o, -1));
    }
    return ts(), (r = al(Error(w(421)))), Tr(e, t, i, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = hp.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = l.treeContext),
      (Se = gt(o.nextSibling)),
      (xe = t),
      (B = !0),
      ($e = null),
      e !== null &&
        ((Le[Te++] = Je),
        (Le[Te++] = Ze),
        (Le[Te++] = Ft),
        (Je = e.id),
        (Ze = e.overflow),
        (Ft = t)),
      (t = Xi(t, r.children)),
      (t.flags |= 4096),
      t);
}
function sa(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Yl(e.return, t, n);
}
function ul(e, t, n, r, o) {
  var l = e.memoizedState;
  l === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((l.isBackwards = t),
      (l.rendering = null),
      (l.renderingStartTime = 0),
      (l.last = r),
      (l.tail = n),
      (l.tailMode = o));
}
function vc(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    l = r.tail;
  if ((ce(e, t, r.children, n), (r = H.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && sa(e, n, t);
        else if (e.tag === 19) sa(e, n, t);
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
            e !== null && so(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          ul(t, !1, o, n, l);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && so(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        ul(t, !0, n, null, l);
        break;
      case "together":
        ul(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Br(e, t) {
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
      hc(t), pn();
      break;
    case 5:
      Wu(t);
      break;
    case 1:
      ye(t.type) && to(t);
      break;
    case 4:
      Bi(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      $(oo, r._currentValue), (r._currentValue = o);
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
var yc, ti, wc, _c;
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
ti = function () {};
wc = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), It(Ye.current);
    var l = null;
    switch (n) {
      case "input":
        (o = xl(e, o)), (r = xl(e, r)), (l = []);
        break;
      case "select":
        (o = W({}, o, { value: void 0 })),
          (r = W({}, r, { value: void 0 })),
          (l = []);
        break;
      case "textarea":
        (o = Nl(e, o)), (r = Nl(e, r)), (l = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = br);
    }
    Ll(n, r);
    var i;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var s = o[u];
          for (i in s) s.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Kn.hasOwnProperty(u)
              ? l || (l = [])
              : (l = l || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((s = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && a !== s && (a != null || s != null))
      )
        if (u === "style")
          if (s) {
            for (i in s)
              !s.hasOwnProperty(i) ||
                (a && a.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in a)
              a.hasOwnProperty(i) &&
                s[i] !== a[i] &&
                (n || (n = {}), (n[i] = a[i]));
          } else n || (l || (l = []), l.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (s = s ? s.__html : void 0),
              a != null && s !== a && (l = l || []).push(u, a))
            : u === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (l = l || []).push(u, "" + a)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Kn.hasOwnProperty(u)
                ? (a != null && u === "onScroll" && U("scroll", e),
                  l || s === a || (l = []))
                : (l = l || []).push(u, a));
    }
    n && (l = l || []).push("style", n);
    var u = l;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
_c = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Tn(e, t) {
  if (!B)
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
  switch ((Mi(t), t.tag)) {
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
      return ye(t.type) && eo(), se(t), null;
    case 3:
      return (
        (r = t.stateNode),
        hn(),
        A(ve),
        A(ue),
        Vi(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Pr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), $e !== null && (ui($e), ($e = null)))),
        ti(e, t),
        se(t),
        null
      );
    case 5:
      Hi(t);
      var o = It(or.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        wc(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(w(166));
          return se(t), null;
        }
        if (((e = It(Ye.current)), Pr(t))) {
          (r = t.stateNode), (n = t.type);
          var l = t.memoizedProps;
          switch (((r[Qe] = t), (r[nr] = l), (e = (t.mode & 1) !== 0), n)) {
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
              for (o = 0; o < Dn.length; o++) U(Dn[o], r);
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
              gs(r, l), U("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!l.multiple }),
                U("invalid", r);
              break;
            case "textarea":
              ys(r, l), U("invalid", r);
          }
          Ll(n, l), (o = null);
          for (var i in l)
            if (l.hasOwnProperty(i)) {
              var s = l[i];
              i === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (l.suppressHydrationWarning !== !0 &&
                      Nr(r.textContent, s, e),
                    (o = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (l.suppressHydrationWarning !== !0 &&
                      Nr(r.textContent, s, e),
                    (o = ["children", "" + s]))
                : Kn.hasOwnProperty(i) &&
                  s != null &&
                  i === "onScroll" &&
                  U("scroll", r);
            }
          switch (n) {
            case "input":
              yr(r), vs(r, l, !0);
              break;
            case "textarea":
              yr(r), ws(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (r.onclick = br);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Ya(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === "select" &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[Qe] = t),
            (e[nr] = r),
            yc(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = Tl(n, r)), n)) {
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
                for (o = 0; o < Dn.length; o++) U(Dn[o], e);
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
                gs(e, r), (o = xl(e, r)), U("invalid", e);
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
                ys(e, r), (o = Nl(e, r)), U("invalid", e);
                break;
              default:
                o = r;
            }
            Ll(n, o), (s = o);
            for (l in s)
              if (s.hasOwnProperty(l)) {
                var a = s[l];
                l === "style"
                  ? Ja(e, a)
                  : l === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && Ga(e, a))
                  : l === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && Yn(e, a)
                    : typeof a == "number" && Yn(e, "" + a)
                  : l !== "suppressContentEditableWarning" &&
                    l !== "suppressHydrationWarning" &&
                    l !== "autoFocus" &&
                    (Kn.hasOwnProperty(l)
                      ? a != null && l === "onScroll" && U("scroll", e)
                      : a != null && wi(e, l, a, i));
              }
            switch (n) {
              case "input":
                yr(e), vs(e, r, !1);
                break;
              case "textarea":
                yr(e), ws(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + kt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (l = r.value),
                  l != null
                    ? rn(e, !!r.multiple, l, !1)
                    : r.defaultValue != null &&
                      rn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = br);
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
        if (((n = It(or.current)), It(Ye.current), Pr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Qe] = t),
            (l = r.nodeValue !== n) && ((e = xe), e !== null))
          )
            switch (e.tag) {
              case 3:
                Nr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Nr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          l && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Qe] = t),
            (t.stateNode = r);
      }
      return se(t), null;
    case 13:
      if (
        (A(H),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (B && Se !== null && t.mode & 1 && !(t.flags & 128))
          Fu(), pn(), (t.flags |= 98560), (l = !1);
        else if (((l = Pr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!l) throw Error(w(318));
            if (
              ((l = t.memoizedState),
              (l = l !== null ? l.dehydrated : null),
              !l)
            )
              throw Error(w(317));
            l[Qe] = t;
          } else
            pn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          se(t), (l = !1);
        } else $e !== null && (ui($e), ($e = null)), (l = !0);
        if (!l) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || H.current & 1 ? q === 0 && (q = 3) : ts())),
          t.updateQueue !== null && (t.flags |= 4),
          se(t),
          null);
    case 4:
      return (
        hn(), ti(e, t), e === null && er(t.stateNode.containerInfo), se(t), null
      );
    case 10:
      return $i(t.type._context), se(t), null;
    case 17:
      return ye(t.type) && eo(), se(t), null;
    case 19:
      if ((A(H), (l = t.memoizedState), l === null)) return se(t), null;
      if (((r = (t.flags & 128) !== 0), (i = l.rendering), i === null))
        if (r) Tn(l, !1);
        else {
          if (q !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = so(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Tn(l, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (l = n),
                    (e = r),
                    (l.flags &= 14680066),
                    (i = l.alternate),
                    i === null
                      ? ((l.childLanes = 0),
                        (l.lanes = e),
                        (l.child = null),
                        (l.subtreeFlags = 0),
                        (l.memoizedProps = null),
                        (l.memoizedState = null),
                        (l.updateQueue = null),
                        (l.dependencies = null),
                        (l.stateNode = null))
                      : ((l.childLanes = i.childLanes),
                        (l.lanes = i.lanes),
                        (l.child = i.child),
                        (l.subtreeFlags = 0),
                        (l.deletions = null),
                        (l.memoizedProps = i.memoizedProps),
                        (l.memoizedState = i.memoizedState),
                        (l.updateQueue = i.updateQueue),
                        (l.type = i.type),
                        (e = i.dependencies),
                        (l.dependencies =
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
          l.tail !== null &&
            G() > vn &&
            ((t.flags |= 128), (r = !0), Tn(l, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = so(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Tn(l, !0),
              l.tail === null && l.tailMode === "hidden" && !i.alternate && !B)
            )
              return se(t), null;
          } else
            2 * G() - l.renderingStartTime > vn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Tn(l, !1), (t.lanes = 4194304));
        l.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = l.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (l.last = i));
      }
      return l.tail !== null
        ? ((t = l.tail),
          (l.rendering = t),
          (l.tail = t.sibling),
          (l.renderingStartTime = G()),
          (t.sibling = null),
          (n = H.current),
          $(H, r ? (n & 1) | 2 : n & 1),
          t)
        : (se(t), null);
    case 22:
    case 23:
      return (
        es(),
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
function lp(e, t) {
  switch ((Mi(t), t.tag)) {
    case 1:
      return (
        ye(t.type) && eo(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        hn(),
        A(ve),
        A(ue),
        Vi(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Hi(t), null;
    case 13:
      if ((A(H), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(w(340));
        pn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return A(H), null;
    case 4:
      return hn(), null;
    case 10:
      return $i(t.type._context), null;
    case 22:
    case 23:
      return es(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var zr = !1,
  ae = !1,
  ip = typeof WeakSet == "function" ? WeakSet : Set,
  S = null;
function tn(e, t) {
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
function ni(e, t, n) {
  try {
    n();
  } catch (r) {
    Q(e, t, r);
  }
}
var aa = !1;
function sp(e, t) {
  if (((Ul = Jr), (e = Eu()), ji(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            l = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, l.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            s = -1,
            a = -1,
            u = 0,
            p = 0,
            g = e,
            h = null;
          t: for (;;) {
            for (
              var _;
              g !== n || (o !== 0 && g.nodeType !== 3) || (s = i + o),
                g !== l || (r !== 0 && g.nodeType !== 3) || (a = i + r),
                g.nodeType === 3 && (i += g.nodeValue.length),
                (_ = g.firstChild) !== null;

            )
              (h = g), (g = _);
            for (;;) {
              if (g === e) break t;
              if (
                (h === n && ++u === o && (s = i),
                h === l && ++p === r && (a = i),
                (_ = g.nextSibling) !== null)
              )
                break;
              (g = h), (h = g.parentNode);
            }
            g = _;
          }
          n = s === -1 || a === -1 ? null : { start: s, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Al = { focusedElem: e, selectionRange: n }, Jr = !1, S = t; S !== null; )
    if (((t = S), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (S = e);
    else
      for (; S !== null; ) {
        t = S;
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
                      t.elementType === t.type ? y : Oe(t.type, y),
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
          (e.return = t.return), (S = e);
          break;
        }
        S = t.return;
      }
  return (k = aa), (aa = !1), k;
}
function Hn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var l = o.destroy;
        (o.destroy = void 0), l !== void 0 && ni(t, n, l);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Po(e, t) {
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
function ri(e) {
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
        (delete t[Qe], delete t[nr], delete t[Vl], delete t[Vf], delete t[Wf])),
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
function ua(e) {
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
function oi(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = br));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (oi(e, t, n), e = e.sibling; e !== null; ) oi(e, t, n), (e = e.sibling);
}
function li(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (li(e, t, n), e = e.sibling; e !== null; ) li(e, t, n), (e = e.sibling);
}
var re = null,
  Fe = !1;
function ot(e, t, n) {
  for (n = n.child; n !== null; ) xc(e, t, n), (n = n.sibling);
}
function xc(e, t, n) {
  if (Ke && typeof Ke.onCommitFiberUnmount == "function")
    try {
      Ke.onCommitFiberUnmount(wo, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ae || tn(n, t);
    case 6:
      var r = re,
        o = Fe;
      (re = null),
        ot(e, t, n),
        (re = r),
        (Fe = o),
        re !== null &&
          (Fe
            ? ((e = re),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : re.removeChild(n.stateNode));
      break;
    case 18:
      re !== null &&
        (Fe
          ? ((e = re),
            (n = n.stateNode),
            e.nodeType === 8
              ? nl(e.parentNode, n)
              : e.nodeType === 1 && nl(e, n),
            Zn(e))
          : nl(re, n.stateNode));
      break;
    case 4:
      (r = re),
        (o = Fe),
        (re = n.stateNode.containerInfo),
        (Fe = !0),
        ot(e, t, n),
        (re = r),
        (Fe = o);
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
          var l = o,
            i = l.destroy;
          (l = l.tag),
            i !== void 0 && (l & 2 || l & 4) && ni(n, t, i),
            (o = o.next);
        } while (o !== r);
      }
      ot(e, t, n);
      break;
    case 1:
      if (
        !ae &&
        (tn(n, t),
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
function ca(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new ip()),
      t.forEach(function (r) {
        var o = gp.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function De(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var l = e,
          i = t,
          s = i;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (re = s.stateNode), (Fe = !1);
              break e;
            case 3:
              (re = s.stateNode.containerInfo), (Fe = !0);
              break e;
            case 4:
              (re = s.stateNode.containerInfo), (Fe = !0);
              break e;
          }
          s = s.return;
        }
        if (re === null) throw Error(w(160));
        xc(l, i, o), (re = null), (Fe = !1);
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
      if ((De(t, e), He(e), r & 4)) {
        try {
          Hn(3, e, e.return), Po(3, e);
        } catch (y) {
          Q(e, e.return, y);
        }
        try {
          Hn(5, e, e.return);
        } catch (y) {
          Q(e, e.return, y);
        }
      }
      break;
    case 1:
      De(t, e), He(e), r & 512 && n !== null && tn(n, n.return);
      break;
    case 5:
      if (
        (De(t, e),
        He(e),
        r & 512 && n !== null && tn(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Yn(o, "");
        } catch (y) {
          Q(e, e.return, y);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var l = e.memoizedProps,
          i = n !== null ? n.memoizedProps : l,
          s = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            s === "input" && l.type === "radio" && l.name != null && Qa(o, l),
              Tl(s, i);
            var u = Tl(s, l);
            for (i = 0; i < a.length; i += 2) {
              var p = a[i],
                g = a[i + 1];
              p === "style"
                ? Ja(o, g)
                : p === "dangerouslySetInnerHTML"
                ? Ga(o, g)
                : p === "children"
                ? Yn(o, g)
                : wi(o, p, g, u);
            }
            switch (s) {
              case "input":
                El(o, l);
                break;
              case "textarea":
                Ka(o, l);
                break;
              case "select":
                var h = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!l.multiple;
                var _ = l.value;
                _ != null
                  ? rn(o, !!l.multiple, _, !1)
                  : h !== !!l.multiple &&
                    (l.defaultValue != null
                      ? rn(o, !!l.multiple, l.defaultValue, !0)
                      : rn(o, !!l.multiple, l.multiple ? [] : "", !1));
            }
            o[nr] = l;
          } catch (y) {
            Q(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((De(t, e), He(e), r & 4)) {
        if (e.stateNode === null) throw Error(w(162));
        (o = e.stateNode), (l = e.memoizedProps);
        try {
          o.nodeValue = l;
        } catch (y) {
          Q(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (De(t, e), He(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Zn(t.containerInfo);
        } catch (y) {
          Q(e, e.return, y);
        }
      break;
    case 4:
      De(t, e), He(e);
      break;
    case 13:
      De(t, e),
        He(e),
        (o = e.child),
        o.flags & 8192 &&
          ((l = o.memoizedState !== null),
          (o.stateNode.isHidden = l),
          !l ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (qi = G())),
        r & 4 && ca(e);
      break;
    case 22:
      if (
        ((p = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ae = (u = ae) || p), De(t, e), (ae = u)) : De(t, e),
        He(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !p && e.mode & 1)
        )
          for (S = e, p = e.child; p !== null; ) {
            for (g = S = p; S !== null; ) {
              switch (((h = S), (_ = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Hn(4, h, h.return);
                  break;
                case 1:
                  tn(h, h.return);
                  var k = h.stateNode;
                  if (typeof k.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
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
                  tn(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    fa(g);
                    continue;
                  }
              }
              _ !== null ? ((_.return = h), (S = _)) : fa(g);
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
                    ? ((l = o.style),
                      typeof l.setProperty == "function"
                        ? l.setProperty("display", "none", "important")
                        : (l.display = "none"))
                    : ((s = g.stateNode),
                      (a = g.memoizedProps.style),
                      (i =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (s.style.display = Xa("display", i)));
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
      De(t, e), He(e), r & 4 && ca(e);
      break;
    case 21:
      break;
    default:
      De(t, e), He(e);
  }
}
function He(e) {
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
          r.flags & 32 && (Yn(o, ""), (r.flags &= -33));
          var l = ua(e);
          li(e, l, o);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            s = ua(e);
          oi(e, s, i);
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
  (S = e), Cc(e);
}
function Cc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; S !== null; ) {
    var o = S,
      l = o.child;
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || zr;
      if (!i) {
        var s = o.alternate,
          a = (s !== null && s.memoizedState !== null) || ae;
        s = zr;
        var u = ae;
        if (((zr = i), (ae = a) && !u))
          for (S = o; S !== null; )
            (i = S),
              (a = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? pa(o)
                : a !== null
                ? ((a.return = i), (S = a))
                : pa(o);
        for (; l !== null; ) (S = l), Cc(l), (l = l.sibling);
        (S = o), (zr = s), (ae = u);
      }
      da(e);
    } else
      o.subtreeFlags & 8772 && l !== null ? ((l.return = o), (S = l)) : da(e);
  }
}
function da(e) {
  for (; S !== null; ) {
    var t = S;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ae || Po(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ae)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Oe(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var l = t.updateQueue;
              l !== null && Gs(t, l, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Gs(t, i, n);
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
                    g !== null && Zn(g);
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
        ae || (t.flags & 512 && ri(t));
      } catch (h) {
        Q(t, t.return, h);
      }
    }
    if (t === e) {
      S = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (S = n);
      break;
    }
    S = t.return;
  }
}
function fa(e) {
  for (; S !== null; ) {
    var t = S;
    if (t === e) {
      S = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (S = n);
      break;
    }
    S = t.return;
  }
}
function pa(e) {
  for (; S !== null; ) {
    var t = S;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Po(4, t);
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
          var l = t.return;
          try {
            ri(t);
          } catch (a) {
            Q(t, l, a);
          }
          break;
        case 5:
          var i = t.return;
          try {
            ri(t);
          } catch (a) {
            Q(t, i, a);
          }
      }
    } catch (a) {
      Q(t, t.return, a);
    }
    if (t === e) {
      S = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (S = s);
      break;
    }
    S = t.return;
  }
}
var up = Math.ceil,
  co = rt.ReactCurrentDispatcher,
  Ji = rt.ReactCurrentOwner,
  Re = rt.ReactCurrentBatchConfig,
  D = 0,
  ne = null,
  X = null,
  oe = 0,
  ke = 0,
  nn = Et(0),
  q = 0,
  ar = null,
  Ut = 0,
  Lo = 0,
  Zi = 0,
  Vn = null,
  he = null,
  qi = 0,
  vn = 1 / 0,
  Ge = null,
  fo = !1,
  ii = null,
  yt = null,
  Rr = !1,
  dt = null,
  po = 0,
  Wn = 0,
  si = null,
  Hr = -1,
  Vr = 0;
function de() {
  return D & 6 ? G() : Hr !== -1 ? Hr : (Hr = G());
}
function wt(e) {
  return e.mode & 1
    ? D & 2 && oe !== 0
      ? oe & -oe
      : Kf.transition !== null
      ? (Vr === 0 && (Vr = au()), Vr)
      : ((e = F),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : hu(e.type))),
        e)
    : 1;
}
function Ae(e, t, n, r) {
  if (50 < Wn) throw ((Wn = 0), (si = null), Error(w(185)));
  cr(e, n, r),
    (!(D & 2) || e !== ne) &&
      (e === ne && (!(D & 2) && (Lo |= n), q === 4 && ut(e, oe)),
      we(e, r),
      n === 1 && D === 0 && !(t.mode & 1) && ((vn = G() + 500), Eo && Ct()));
}
function we(e, t) {
  var n = e.callbackNode;
  Qd(e, t);
  var r = Xr(e, e === ne ? oe : 0);
  if (r === 0)
    n !== null && Ss(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Ss(n), t === 1))
      e.tag === 0 ? Qf(ma.bind(null, e)) : Mu(ma.bind(null, e)),
        Bf(function () {
          !(D & 6) && Ct();
        }),
        (n = null);
    else {
      switch (uu(r)) {
        case 1:
          n = Ei;
          break;
        case 4:
          n = iu;
          break;
        case 16:
          n = Gr;
          break;
        case 536870912:
          n = su;
          break;
        default:
          n = Gr;
      }
      n = Ic(n, Nc.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Nc(e, t) {
  if (((Hr = -1), (Vr = 0), D & 6)) throw Error(w(327));
  var n = e.callbackNode;
  if (un() && e.callbackNode !== n) return null;
  var r = Xr(e, e === ne ? oe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = mo(e, r);
  else {
    t = r;
    var o = D;
    D |= 2;
    var l = Lc();
    (ne !== e || oe !== t) && ((Ge = null), (vn = G() + 500), Mt(e, t));
    do
      try {
        fp();
        break;
      } catch (s) {
        Pc(e, s);
      }
    while (1);
    Fi(),
      (co.current = l),
      (D = o),
      X !== null ? (t = 0) : ((ne = null), (oe = 0), (t = q));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Ml(e)), o !== 0 && ((r = o), (t = ai(e, o)))), t === 1)
    )
      throw ((n = ar), Mt(e, 0), ut(e, r), we(e, G()), n);
    if (t === 6) ut(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !cp(o) &&
          ((t = mo(e, r)),
          t === 2 && ((l = Ml(e)), l !== 0 && ((r = l), (t = ai(e, l)))),
          t === 1))
      )
        throw ((n = ar), Mt(e, 0), ut(e, r), we(e, G()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(w(345));
        case 2:
          zt(e, he, Ge);
          break;
        case 3:
          if (
            (ut(e, r), (r & 130023424) === r && ((t = qi + 500 - G()), 10 < t))
          ) {
            if (Xr(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              de(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Hl(zt.bind(null, e, he, Ge), t);
            break;
          }
          zt(e, he, Ge);
          break;
        case 4:
          if ((ut(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var i = 31 - Ue(r);
            (l = 1 << i), (i = t[i]), i > o && (o = i), (r &= ~l);
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
            e.timeoutHandle = Hl(zt.bind(null, e, he, Ge), r);
            break;
          }
          zt(e, he, Ge);
          break;
        case 5:
          zt(e, he, Ge);
          break;
        default:
          throw Error(w(329));
      }
    }
  }
  return we(e, G()), e.callbackNode === n ? Nc.bind(null, e) : null;
}
function ai(e, t) {
  var n = Vn;
  return (
    e.current.memoizedState.isDehydrated && (Mt(e, t).flags |= 256),
    (e = mo(e, t)),
    e !== 2 && ((t = he), (he = n), t !== null && ui(t)),
    e
  );
}
function ui(e) {
  he === null ? (he = e) : he.push.apply(he, e);
}
function cp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            l = o.getSnapshot;
          o = o.value;
          try {
            if (!Be(l(), o)) return !1;
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
    t &= ~Zi,
      t &= ~Lo,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ue(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function ma(e) {
  if (D & 6) throw Error(w(327));
  un();
  var t = Xr(e, 0);
  if (!(t & 1)) return we(e, G()), null;
  var n = mo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ml(e);
    r !== 0 && ((t = r), (n = ai(e, r)));
  }
  if (n === 1) throw ((n = ar), Mt(e, 0), ut(e, t), we(e, G()), n);
  if (n === 6) throw Error(w(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    zt(e, he, Ge),
    we(e, G()),
    null
  );
}
function bi(e, t) {
  var n = D;
  D |= 1;
  try {
    return e(t);
  } finally {
    (D = n), D === 0 && ((vn = G() + 500), Eo && Ct());
  }
}
function At(e) {
  dt !== null && dt.tag === 0 && !(D & 6) && un();
  var t = D;
  D |= 1;
  var n = Re.transition,
    r = F;
  try {
    if (((Re.transition = null), (F = 1), e)) return e();
  } finally {
    (F = r), (Re.transition = n), (D = t), !(D & 6) && Ct();
  }
}
function es() {
  (ke = nn.current), A(nn);
}
function Mt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Af(n)), X !== null))
    for (n = X.return; n !== null; ) {
      var r = n;
      switch ((Mi(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && eo();
          break;
        case 3:
          hn(), A(ve), A(ue), Vi();
          break;
        case 5:
          Hi(r);
          break;
        case 4:
          hn();
          break;
        case 13:
          A(H);
          break;
        case 19:
          A(H);
          break;
        case 10:
          $i(r.type._context);
          break;
        case 22:
        case 23:
          es();
      }
      n = n.return;
    }
  if (
    ((ne = e),
    (X = e = _t(e.current, null)),
    (oe = ke = t),
    (q = 0),
    (ar = null),
    (Zi = Lo = Ut = 0),
    (he = Vn = null),
    jt !== null)
  ) {
    for (t = 0; t < jt.length; t++)
      if (((n = jt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          l = n.pending;
        if (l !== null) {
          var i = l.next;
          (l.next = o), (r.next = i);
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
      if ((Fi(), (Ur.current = uo), ao)) {
        for (var r = V.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        ao = !1;
      }
      if (
        (($t = 0),
        (te = Z = V = null),
        (Bn = !1),
        (lr = 0),
        (Ji.current = null),
        n === null || n.return === null)
      ) {
        (q = 1), (ar = t), (X = null);
        break;
      }
      e: {
        var l = e,
          i = n.return,
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
            var h = p.alternate;
            h
              ? ((p.updateQueue = h.updateQueue),
                (p.memoizedState = h.memoizedState),
                (p.lanes = h.lanes))
              : ((p.updateQueue = null), (p.memoizedState = null));
          }
          var _ = ta(i);
          if (_ !== null) {
            (_.flags &= -257),
              na(_, i, s, l, t),
              _.mode & 1 && ea(l, u, t),
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
              ea(l, u, t), ts();
              break e;
            }
            a = Error(w(426));
          }
        } else if (B && s.mode & 1) {
          var T = ta(i);
          if (T !== null) {
            !(T.flags & 65536) && (T.flags |= 256),
              na(T, i, s, l, t),
              Di(gn(a, s));
            break e;
          }
        }
        (l = a = gn(a, s)),
          q !== 4 && (q = 2),
          Vn === null ? (Vn = [l]) : Vn.push(l),
          (l = i);
        do {
          switch (l.tag) {
            case 3:
              (l.flags |= 65536), (t &= -t), (l.lanes |= t);
              var d = cc(l, a, t);
              Ys(l, d);
              break e;
            case 1:
              s = a;
              var c = l.type,
                f = l.stateNode;
              if (
                !(l.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (f !== null &&
                    typeof f.componentDidCatch == "function" &&
                    (yt === null || !yt.has(f))))
              ) {
                (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                var v = dc(l, s, t);
                Ys(l, v);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
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
  var e = co.current;
  return (co.current = uo), e === null ? uo : e;
}
function ts() {
  (q === 0 || q === 3 || q === 2) && (q = 4),
    ne === null || (!(Ut & 268435455) && !(Lo & 268435455)) || ut(ne, oe);
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
  if ((Fi(), (D = n), (co.current = r), X !== null)) throw Error(w(261));
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
    (Ji.current = null);
}
function zc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = lp(n, t)), n !== null)) {
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
    o = Re.transition;
  try {
    (Re.transition = null), (F = 1), pp(e, t, n, r);
  } finally {
    (Re.transition = o), (F = r);
  }
  return null;
}
function pp(e, t, n, r) {
  do un();
  while (dt !== null);
  if (D & 6) throw Error(w(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(w(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var l = n.lanes | n.childLanes;
  if (
    (Kd(e, l),
    e === ne && ((X = ne = null), (oe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Rr ||
      ((Rr = !0),
      Ic(Gr, function () {
        return un(), null;
      })),
    (l = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || l)
  ) {
    (l = Re.transition), (Re.transition = null);
    var i = F;
    F = 1;
    var s = D;
    (D |= 4),
      (Ji.current = null),
      sp(e, n),
      Ec(n, e),
      If(Al),
      (Jr = !!Ul),
      (Al = Ul = null),
      (e.current = n),
      ap(n),
      Fd(),
      (D = s),
      (F = i),
      (Re.transition = l);
  } else e.current = n;
  if (
    (Rr && ((Rr = !1), (dt = e), (po = o)),
    (l = e.pendingLanes),
    l === 0 && (yt = null),
    Ad(n.stateNode),
    we(e, G()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (fo) throw ((fo = !1), (e = ii), (ii = null), e);
  return (
    po & 1 && e.tag !== 0 && un(),
    (l = e.pendingLanes),
    l & 1 ? (e === si ? Wn++ : ((Wn = 0), (si = e))) : (Wn = 0),
    Ct(),
    null
  );
}
function un() {
  if (dt !== null) {
    var e = uu(po),
      t = Re.transition,
      n = F;
    try {
      if (((Re.transition = null), (F = 16 > e ? 16 : e), dt === null))
        var r = !1;
      else {
        if (((e = dt), (dt = null), (po = 0), D & 6)) throw Error(w(331));
        var o = D;
        for (D |= 4, S = e.current; S !== null; ) {
          var l = S,
            i = l.child;
          if (S.flags & 16) {
            var s = l.deletions;
            if (s !== null) {
              for (var a = 0; a < s.length; a++) {
                var u = s[a];
                for (S = u; S !== null; ) {
                  var p = S;
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Hn(8, p, l);
                  }
                  var g = p.child;
                  if (g !== null) (g.return = p), (S = g);
                  else
                    for (; S !== null; ) {
                      p = S;
                      var h = p.sibling,
                        _ = p.return;
                      if ((kc(p), p === u)) {
                        S = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = _), (S = h);
                        break;
                      }
                      S = _;
                    }
                }
              }
              var k = l.alternate;
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
              S = l;
            }
          }
          if (l.subtreeFlags & 2064 && i !== null) (i.return = l), (S = i);
          else
            e: for (; S !== null; ) {
              if (((l = S), l.flags & 2048))
                switch (l.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Hn(9, l, l.return);
                }
              var d = l.sibling;
              if (d !== null) {
                (d.return = l.return), (S = d);
                break e;
              }
              S = l.return;
            }
        }
        var c = e.current;
        for (S = c; S !== null; ) {
          i = S;
          var f = i.child;
          if (i.subtreeFlags & 2064 && f !== null) (f.return = i), (S = f);
          else
            e: for (i = c; S !== null; ) {
              if (((s = S), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Po(9, s);
                  }
                } catch (E) {
                  Q(s, s.return, E);
                }
              if (s === i) {
                S = null;
                break e;
              }
              var v = s.sibling;
              if (v !== null) {
                (v.return = s.return), (S = v);
                break e;
              }
              S = s.return;
            }
        }
        if (
          ((D = o), Ct(), Ke && typeof Ke.onPostCommitFiberRoot == "function")
        )
          try {
            Ke.onPostCommitFiberRoot(wo, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (F = n), (Re.transition = t);
    }
  }
  return !1;
}
function ha(e, t, n) {
  (t = gn(n, t)),
    (t = cc(e, t, 1)),
    (e = vt(e, t, 1)),
    (t = de()),
    e !== null && (cr(e, 1, t), we(e, t));
}
function Q(e, t, n) {
  if (e.tag === 3) ha(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        ha(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (yt === null || !yt.has(r)))
        ) {
          (e = gn(n, e)),
            (e = dc(t, e, 1)),
            (t = vt(t, e, 1)),
            (e = de()),
            t !== null && (cr(t, 1, e), we(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function mp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = de()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ne === e &&
      (oe & n) === n &&
      (q === 4 || (q === 3 && (oe & 130023424) === oe && 500 > G() - qi)
        ? Mt(e, 0)
        : (Zi |= n)),
    we(e, t);
}
function Rc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = kr), (kr <<= 1), !(kr & 130023424) && (kr = 4194304))
      : (t = 1));
  var n = de();
  (e = tt(e, t)), e !== null && (cr(e, t, n), we(e, n));
}
function hp(e) {
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
  else (ge = !1), B && t.flags & 1048576 && Du(t, ro, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Br(e, t), (e = t.pendingProps);
      var o = fn(t, ue.current);
      an(t, n), (o = Qi(null, t, r, e, o, n));
      var l = Ki();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ye(r) ? ((l = !0), to(t)) : (l = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Ai(t),
            (o.updater = Co),
            (t.stateNode = o),
            (o._reactInternals = t),
            Xl(t, r, e, n),
            (t = ql(null, t, r, !0, l, n)))
          : ((t.tag = 0), B && l && Ii(t), ce(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Br(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = yp(r)),
          (e = Oe(r, e)),
          o)
        ) {
          case 0:
            t = Zl(null, t, r, e, n);
            break e;
          case 1:
            t = la(null, t, r, e, n);
            break e;
          case 11:
            t = ra(null, t, r, e, n);
            break e;
          case 14:
            t = oa(null, t, r, Oe(r.type, e), n);
            break e;
        }
        throw Error(w(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Oe(r, o)),
        Zl(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Oe(r, o)),
        la(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((hc(t), e === null)) throw Error(w(387));
        (r = t.pendingProps),
          (l = t.memoizedState),
          (o = l.element),
          Uu(e, t),
          io(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), l.isDehydrated))
          if (
            ((l = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = l),
            (t.memoizedState = l),
            t.flags & 256)
          ) {
            (o = gn(Error(w(423)), t)), (t = ia(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = gn(Error(w(424)), t)), (t = ia(e, t, r, n, o));
            break e;
          } else
            for (
              Se = gt(t.stateNode.containerInfo.firstChild),
                xe = t,
                B = !0,
                $e = null,
                n = Vu(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((pn(), r === o)) {
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
        e === null && Kl(t),
        (r = t.type),
        (o = t.pendingProps),
        (l = e !== null ? e.memoizedProps : null),
        (i = o.children),
        Bl(r, o) ? (i = null) : l !== null && Bl(r, l) && (t.flags |= 32),
        mc(e, t),
        ce(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Kl(t), null;
    case 13:
      return gc(e, t, n);
    case 4:
      return (
        Bi(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = mn(t, null, r, n)) : ce(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Oe(r, o)),
        ra(e, t, r, o, n)
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
          (l = t.memoizedProps),
          (i = o.value),
          $(oo, r._currentValue),
          (r._currentValue = i),
          l !== null)
        )
          if (Be(l.value, i)) {
            if (l.children === o.children && !ve.current) {
              t = nt(e, t, n);
              break e;
            }
          } else
            for (l = t.child, l !== null && (l.return = t); l !== null; ) {
              var s = l.dependencies;
              if (s !== null) {
                i = l.child;
                for (var a = s.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (l.tag === 1) {
                      (a = qe(-1, n & -n)), (a.tag = 2);
                      var u = l.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var p = u.pending;
                        p === null
                          ? (a.next = a)
                          : ((a.next = p.next), (p.next = a)),
                          (u.pending = a);
                      }
                    }
                    (l.lanes |= n),
                      (a = l.alternate),
                      a !== null && (a.lanes |= n),
                      Yl(l.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (l.tag === 10) i = l.type === t.type ? null : l.child;
              else if (l.tag === 18) {
                if (((i = l.return), i === null)) throw Error(w(341));
                (i.lanes |= n),
                  (s = i.alternate),
                  s !== null && (s.lanes |= n),
                  Yl(i, n, t),
                  (i = l.sibling);
              } else i = l.child;
              if (i !== null) i.return = l;
              else
                for (i = l; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((l = i.sibling), l !== null)) {
                    (l.return = i.return), (i = l);
                    break;
                  }
                  i = i.return;
                }
              l = i;
            }
        ce(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        an(t, n),
        (o = je(o)),
        (r = r(o)),
        (t.flags |= 1),
        ce(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = Oe(r, t.pendingProps)),
        (o = Oe(r.type, o)),
        oa(e, t, r, o, n)
      );
    case 15:
      return fc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Oe(r, o)),
        Br(e, t),
        (t.tag = 1),
        ye(r) ? ((e = !0), to(t)) : (e = !1),
        an(t, n),
        Bu(t, r, o),
        Xl(t, r, o, n),
        ql(null, t, r, !0, e, n)
      );
    case 19:
      return vc(e, t, n);
    case 22:
      return pc(e, t, n);
  }
  throw Error(w(156, t.tag));
};
function Ic(e, t) {
  return lu(e, t);
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
function ze(e, t, n, r) {
  return new vp(e, t, n, r);
}
function ns(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function yp(e) {
  if (typeof e == "function") return ns(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ki)) return 11;
    if (e === Si) return 14;
  }
  return 2;
}
function _t(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = ze(e.tag, t, e.key, e.mode)),
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
function Wr(e, t, n, r, o, l) {
  var i = 2;
  if (((r = e), typeof e == "function")) ns(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case Kt:
        return Dt(n.children, o, l, t);
      case _i:
        (i = 8), (o |= 8);
        break;
      case wl:
        return (
          (e = ze(12, n, t, o | 2)), (e.elementType = wl), (e.lanes = l), e
        );
      case _l:
        return (e = ze(13, n, t, o)), (e.elementType = _l), (e.lanes = l), e;
      case kl:
        return (e = ze(19, n, t, o)), (e.elementType = kl), (e.lanes = l), e;
      case Ha:
        return To(n, o, l, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Aa:
              i = 10;
              break e;
            case Ba:
              i = 9;
              break e;
            case ki:
              i = 11;
              break e;
            case Si:
              i = 14;
              break e;
            case it:
              (i = 16), (r = null);
              break e;
          }
        throw Error(w(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = ze(i, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = l), t
  );
}
function Dt(e, t, n, r) {
  return (e = ze(7, e, r, t)), (e.lanes = n), e;
}
function To(e, t, n, r) {
  return (
    (e = ze(22, e, r, t)),
    (e.elementType = Ha),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function cl(e, t, n) {
  return (e = ze(6, e, null, t)), (e.lanes = n), e;
}
function dl(e, t, n) {
  return (
    (t = ze(4, e.children !== null ? e.children : [], e.key, t)),
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
    (this.eventTimes = Qo(0)),
    (this.expirationTimes = Qo(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Qo(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function rs(e, t, n, r, o, l, i, s, a) {
  return (
    (e = new wp(e, t, n, s, a)),
    t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
    (l = ze(3, null, null, t)),
    (e.current = l),
    (l.stateNode = e),
    (l.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ai(l),
    e
  );
}
function _p(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Qt,
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
function Dc(e, t, n, r, o, l, i, s, a) {
  return (
    (e = rs(n, r, !0, e, o, l, i, s, a)),
    (e.context = Mc(null)),
    (n = e.current),
    (r = de()),
    (o = wt(n)),
    (l = qe(r, o)),
    (l.callback = t ?? null),
    vt(n, l, o),
    (e.current.lanes = o),
    cr(e, o, r),
    we(e, r),
    e
  );
}
function zo(e, t, n, r) {
  var o = t.current,
    l = de(),
    i = wt(o);
  return (
    (n = Mc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = qe(l, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = vt(o, t, i)),
    e !== null && (Ae(e, o, i, l), $r(e, o, i)),
    i
  );
}
function ho(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ga(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function os(e, t) {
  ga(e, t), (e = e.alternate) && ga(e, t);
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
Ro.prototype.render = ls.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(w(409));
  zo(e, t, null, null);
};
Ro.prototype.unmount = ls.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    At(function () {
      zo(null, e, null, null);
    }),
      (t[et] = null);
  }
};
function Ro(e) {
  this._internalRoot = e;
}
Ro.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = fu();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < at.length && t !== 0 && t < at[n].priority; n++);
    at.splice(n, 0, e), n === 0 && mu(e);
  }
};
function is(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function jo(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function va() {}
function Sp(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var l = r;
      r = function () {
        var u = ho(i);
        l.call(u);
      };
    }
    var i = Dc(t, r, e, 0, null, !1, !1, "", va);
    return (
      (e._reactRootContainer = i),
      (e[et] = i.current),
      er(e.nodeType === 8 ? e.parentNode : e),
      At(),
      i
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var u = ho(a);
      s.call(u);
    };
  }
  var a = rs(e, 0, !1, null, null, !1, !1, "", va);
  return (
    (e._reactRootContainer = a),
    (e[et] = a.current),
    er(e.nodeType === 8 ? e.parentNode : e),
    At(function () {
      zo(t, a, n, r);
    }),
    a
  );
}
function Io(e, t, n, r, o) {
  var l = n._reactRootContainer;
  if (l) {
    var i = l;
    if (typeof o == "function") {
      var s = o;
      o = function () {
        var a = ho(i);
        s.call(a);
      };
    }
    zo(t, i, e, o);
  } else i = Sp(n, t, e, o, r);
  return ho(i);
}
cu = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Mn(t.pendingLanes);
        n !== 0 &&
          (Ci(t, n | 1), we(t, G()), !(D & 6) && ((vn = G() + 500), Ct()));
      }
      break;
    case 13:
      At(function () {
        var r = tt(e, 1);
        if (r !== null) {
          var o = de();
          Ae(r, e, 1, o);
        }
      }),
        os(e, 1);
  }
};
Ni = function (e) {
  if (e.tag === 13) {
    var t = tt(e, 134217728);
    if (t !== null) {
      var n = de();
      Ae(t, e, 134217728, n);
    }
    os(e, 134217728);
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
    os(e, t);
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
Rl = function (e, t, n) {
  switch (t) {
    case "input":
      if ((El(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var o = xo(r);
            if (!o) throw Error(w(90));
            Wa(r), El(r, o);
          }
        }
      }
      break;
    case "textarea":
      Ka(e, n);
      break;
    case "select":
      (t = n.value), t != null && rn(e, !!n.multiple, t, !1);
  }
};
ba = bi;
eu = At;
var xp = { usingClientEntryPoint: !1, Events: [fr, Jt, xo, Za, qa, bi] },
  zn = {
    findFiberByHostInstance: Rt,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Ep = {
    bundleType: zn.bundleType,
    version: zn.version,
    rendererPackageName: zn.rendererPackageName,
    rendererConfig: zn.rendererConfig,
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
    findFiberByHostInstance: zn.findFiberByHostInstance || kp,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var jr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!jr.isDisabled && jr.supportsFiber)
    try {
      (wo = jr.inject(Ep)), (Ke = jr);
    } catch {}
}
Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xp;
Ce.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!is(t)) throw Error(w(200));
  return _p(e, t, null, n);
};
Ce.createRoot = function (e, t) {
  if (!is(e)) throw Error(w(299));
  var n = !1,
    r = "",
    o = Oc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = rs(e, 1, !1, null, null, n, !1, r, o)),
    (e[et] = t.current),
    er(e.nodeType === 8 ? e.parentNode : e),
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
  return At(e);
};
Ce.hydrate = function (e, t, n) {
  if (!jo(t)) throw Error(w(200));
  return Io(null, e, t, !0, n);
};
Ce.hydrateRoot = function (e, t, n) {
  if (!is(e)) throw Error(w(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    l = "",
    i = Oc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = Dc(t, null, e, 1, n ?? null, o, !1, l, i)),
    (e[et] = t.current),
    er(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Ro(t);
};
Ce.render = function (e, t, n) {
  if (!jo(t)) throw Error(w(200));
  return Io(null, e, t, !1, n);
};
Ce.unmountComponentAtNode = function (e) {
  if (!jo(e)) throw Error(w(40));
  return e._reactRootContainer
    ? (At(function () {
        Io(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[et] = null);
        });
      }),
      !0)
    : !1;
};
Ce.unstable_batchedUpdates = bi;
Ce.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!jo(n)) throw Error(w(200));
  if (e == null || e._reactInternals === void 0) throw Error(w(38));
  return Io(e, t, n, !1, r);
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
var ya = gl;
(hl.createRoot = ya.createRoot), (hl.hydrateRoot = ya.hydrateRoot);
/**
 * @remix-run/router v1.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function go() {
  return (
    (go = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    go.apply(this, arguments)
  );
}
var ft;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(ft || (ft = {}));
const wa = "popstate";
function Cp(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: l, search: i, hash: s } = r.location;
    return ci(
      "",
      { pathname: l, search: i, hash: s },
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
function ss(e, t) {
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
function _a(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function ci(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    go(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Mo(t) : t,
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
function Mo(e) {
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
  let { window: o = document.defaultView, v5Compat: l = !1 } = r,
    i = o.history,
    s = ft.Pop,
    a = null,
    u = p();
  u == null && ((u = 0), i.replaceState(go({}, i.state, { idx: u }), ""));
  function p() {
    return (i.state || { idx: null }).idx;
  }
  function g() {
    s = ft.Pop;
    let T = p(),
      d = T == null ? null : T - u;
    (u = T), a && a({ action: s, location: y.location, delta: d });
  }
  function h(T, d) {
    s = ft.Push;
    let c = ci(y.location, T, d);
    n && n(c, T), (u = p() + 1);
    let f = _a(c, u),
      v = y.createHref(c);
    try {
      i.pushState(f, "", v);
    } catch {
      o.location.assign(v);
    }
    l && a && a({ action: s, location: y.location, delta: 1 });
  }
  function _(T, d) {
    s = ft.Replace;
    let c = ci(y.location, T, d);
    n && n(c, T), (u = p());
    let f = _a(c, u),
      v = y.createHref(c);
    i.replaceState(f, "", v),
      l && a && a({ action: s, location: y.location, delta: 0 });
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
      return e(o, i);
    },
    listen(T) {
      if (a) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(wa, g),
        (a = T),
        () => {
          o.removeEventListener(wa, g), (a = null);
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
    push: h,
    replace: _,
    go(T) {
      return i.go(T);
    },
  };
  return y;
}
var ka;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(ka || (ka = {}));
function Lp(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Mo(t) : t,
    o = Ac(r.pathname || "/", n);
  if (o == null) return null;
  let l = $c(e);
  Tp(l);
  let i = null;
  for (let s = 0; i == null && s < l.length; ++s) i = $p(l[s], Bp(o));
  return i;
}
function $c(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let o = (l, i, s) => {
    let a = {
      relativePath: s === void 0 ? l.path || "" : s,
      caseSensitive: l.caseSensitive === !0,
      childrenIndex: i,
      route: l,
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
    let u = cn([r, a.relativePath]),
      p = n.concat(a);
    l.children &&
      l.children.length > 0 &&
      (_e(
        l.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      $c(l.children, t, p, u)),
      !(l.path == null && !l.index) &&
        t.push({ path: u, score: Op(u, l.index), routesMeta: p });
  };
  return (
    e.forEach((l, i) => {
      var s;
      if (l.path === "" || !((s = l.path) != null && s.includes("?"))) o(l, i);
      else for (let a of Uc(l.path)) o(l, i, a);
    }),
    t
  );
}
function Uc(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith("?"),
    l = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [l, ""] : [l];
  let i = Uc(r.join("/")),
    s = [];
  return (
    s.push(...i.map((a) => (a === "" ? l : [l, a].join("/")))),
    o && s.push(...i),
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
  Sa = (e) => e === "*";
function Op(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Sa) && (r += Dp),
    t && (r += jp),
    n
      .filter((o) => !Sa(o))
      .reduce((o, l) => o + (zp.test(l) ? Rp : l === "" ? Ip : Mp), r)
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
    l = [];
  for (let i = 0; i < n.length; ++i) {
    let s = n[i],
      a = i === n.length - 1,
      u = o === "/" ? t : t.slice(o.length) || "/",
      p = Up(
        { path: s.relativePath, caseSensitive: s.caseSensitive, end: a },
        u
      );
    if (!p) return null;
    Object.assign(r, p.params);
    let g = s.route;
    l.push({
      params: r,
      pathname: cn([o, p.pathname]),
      pathnameBase: Vp(cn([o, p.pathnameBase])),
      route: g,
    }),
      p.pathnameBase !== "/" && (o = cn([o, p.pathnameBase]));
  }
  return l;
}
function Up(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Ap(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let l = o[0],
    i = l.replace(/(.)\/+$/, "$1"),
    s = o.slice(1);
  return {
    params: r.reduce((u, p, g) => {
      if (p === "*") {
        let h = s[g] || "";
        i = l.slice(0, l.length - h.length).replace(/(.)\/+$/, "$1");
      }
      return (u[p] = Hp(s[g] || "", p)), u;
    }, {}),
    pathname: l,
    pathnameBase: i,
    pattern: e,
  };
}
function Ap(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    ss(
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
        .replace(/\/:(\w+)/g, (i, s) => (r.push(s), "/([^\\/]+)"));
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
function Bp(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      ss(
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
      ss(
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
function Ac(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
const cn = (e) => e.join("/").replace(/\/\/+/g, "/"),
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
  { useState: Yp, useEffect: Gp, useLayoutEffect: Xp, useDebugValue: Jp } = ml;
function Zp(e, t, n) {
  const r = t(),
    [{ inst: o }, l] = Yp({ inst: { value: r, getSnapshot: t } });
  return (
    Xp(() => {
      (o.value = r), (o.getSnapshot = t), fl(o) && l({ inst: o });
    }, [e, r, t]),
    Gp(
      () => (
        fl(o) && l({ inst: o }),
        e(() => {
          fl(o) && l({ inst: o });
        })
      ),
      [e]
    ),
    Jp(r),
    r
  );
}
function fl(e) {
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
  em = !bp,
  tm = em ? qp : Zp;
"useSyncExternalStore" in ml && ((e) => e.useSyncExternalStore)(ml);
const Bc = x.createContext(null),
  Hc = x.createContext(null),
  Vc = x.createContext(null),
  Do = x.createContext(null),
  Oo = x.createContext({ outlet: null, matches: [] }),
  Wc = x.createContext(null);
function di() {
  return (
    (di = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    di.apply(this, arguments)
  );
}
function as() {
  return x.useContext(Do) != null;
}
function nm() {
  return as() || _e(!1), x.useContext(Do).location;
}
function rm(e, t) {
  as() || _e(!1);
  let { navigator: n } = x.useContext(Vc),
    r = x.useContext(Hc),
    { matches: o } = x.useContext(Oo),
    l = o[o.length - 1],
    i = l ? l.params : {};
  l && l.pathname;
  let s = l ? l.pathnameBase : "/";
  l && l.route;
  let a = nm(),
    u;
  if (t) {
    var p;
    let y = typeof t == "string" ? Mo(t) : t;
    s === "/" || ((p = y.pathname) != null && p.startsWith(s)) || _e(!1),
      (u = y);
  } else u = a;
  let g = u.pathname || "/",
    h = s === "/" ? g : g.slice(s.length) || "/",
    _ = Lp(e, { pathname: h }),
    k = sm(
      _ &&
        _.map((y) =>
          Object.assign({}, y, {
            params: Object.assign({}, i, y.params),
            pathname: cn([
              s,
              n.encodeLocation
                ? n.encodeLocation(y.pathname).pathname
                : y.pathname,
            ]),
            pathnameBase:
              y.pathnameBase === "/"
                ? s
                : cn([
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
    ? x.createElement(
        Do.Provider,
        {
          value: {
            location: di(
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
function om() {
  let e = dm(),
    t = Wp(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    l = null;
  return x.createElement(
    x.Fragment,
    null,
    x.createElement("h2", null, "Unexpected Application Error!"),
    x.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? x.createElement("pre", { style: o }, n) : null,
    l
  );
}
class lm extends x.Component {
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
      ? x.createElement(
          Oo.Provider,
          { value: this.props.routeContext },
          x.createElement(Wc.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function im(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = x.useContext(Bc);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    x.createElement(Oo.Provider, { value: t }, r)
  );
}
function sm(e, t, n) {
  if ((t === void 0 && (t = []), e == null))
    if (n != null && n.errors) e = n.matches;
    else return null;
  let r = e,
    o = n == null ? void 0 : n.errors;
  if (o != null) {
    let l = r.findIndex(
      (i) => i.route.id && (o == null ? void 0 : o[i.route.id])
    );
    l >= 0 || _e(!1), (r = r.slice(0, Math.min(r.length, l + 1)));
  }
  return r.reduceRight((l, i, s) => {
    let a = i.route.id ? (o == null ? void 0 : o[i.route.id]) : null,
      u = null;
    n &&
      (i.route.ErrorBoundary
        ? (u = x.createElement(i.route.ErrorBoundary, null))
        : i.route.errorElement
        ? (u = i.route.errorElement)
        : (u = x.createElement(om, null)));
    let p = t.concat(r.slice(0, s + 1)),
      g = () => {
        let h = l;
        return (
          a
            ? (h = u)
            : i.route.Component
            ? (h = x.createElement(i.route.Component, null))
            : i.route.element && (h = i.route.element),
          x.createElement(im, {
            match: i,
            routeContext: { outlet: l, matches: p },
            children: h,
          })
        );
      };
    return n && (i.route.ErrorBoundary || i.route.errorElement || s === 0)
      ? x.createElement(lm, {
          location: n.location,
          component: u,
          error: a,
          children: g(),
          routeContext: { outlet: null, matches: p },
        })
      : g();
  }, null);
}
var xa;
(function (e) {
  (e.UseBlocker = "useBlocker"), (e.UseRevalidator = "useRevalidator");
})(xa || (xa = {}));
var vo;
(function (e) {
  (e.UseBlocker = "useBlocker"),
    (e.UseLoaderData = "useLoaderData"),
    (e.UseActionData = "useActionData"),
    (e.UseRouteError = "useRouteError"),
    (e.UseNavigation = "useNavigation"),
    (e.UseRouteLoaderData = "useRouteLoaderData"),
    (e.UseMatches = "useMatches"),
    (e.UseRevalidator = "useRevalidator");
})(vo || (vo = {}));
function am(e) {
  let t = x.useContext(Hc);
  return t || _e(!1), t;
}
function um(e) {
  let t = x.useContext(Oo);
  return t || _e(!1), t;
}
function cm(e) {
  let t = um(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || _e(!1), n.route.id;
}
function dm() {
  var e;
  let t = x.useContext(Wc),
    n = am(vo.UseRouteError),
    r = cm(vo.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function Qc(e) {
  _e(!1);
}
function fm(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = ft.Pop,
    navigator: l,
    static: i = !1,
  } = e;
  as() && _e(!1);
  let s = t.replace(/^\/*/, "/"),
    a = x.useMemo(() => ({ basename: s, navigator: l, static: i }), [s, l, i]);
  typeof r == "string" && (r = Mo(r));
  let {
      pathname: u = "/",
      search: p = "",
      hash: g = "",
      state: h = null,
      key: _ = "default",
    } = r,
    k = x.useMemo(() => {
      let y = Ac(u, s);
      return y == null
        ? null
        : {
            location: { pathname: y, search: p, hash: g, state: h, key: _ },
            navigationType: o,
          };
    }, [s, u, p, g, h, _, o]);
  return k == null
    ? null
    : x.createElement(
        Vc.Provider,
        { value: a },
        x.createElement(Do.Provider, { children: n, value: k })
      );
}
function pm(e) {
  let { children: t, location: n } = e,
    r = x.useContext(Bc),
    o = r && !t ? r.router.routes : fi(t);
  return rm(o, n);
}
var Ea;
(function (e) {
  (e[(e.pending = 0)] = "pending"),
    (e[(e.success = 1)] = "success"),
    (e[(e.error = 2)] = "error");
})(Ea || (Ea = {}));
new Promise(() => {});
function fi(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    x.Children.forEach(e, (r, o) => {
      if (!x.isValidElement(r)) return;
      if (r.type === x.Fragment) {
        n.push.apply(n, fi(r.props.children, t));
        return;
      }
      r.type !== Qc && _e(!1), !r.props.index || !r.props.children || _e(!1);
      let l = [...t, o],
        i = {
          id: r.props.id || l.join("-"),
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
      r.props.children && (i.children = fi(r.props.children, l)), n.push(i);
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
 */ function mm(e) {
  let { basename: t, children: n, window: r } = e,
    o = x.useRef();
  o.current == null && (o.current = Cp({ window: r, v5Compat: !0 }));
  let l = o.current,
    [i, s] = x.useState({ action: l.action, location: l.location });
  return (
    x.useLayoutEffect(() => l.listen(s), [l]),
    x.createElement(fm, {
      basename: t,
      children: n,
      location: i.location,
      navigationType: i.action,
      navigator: l,
    })
  );
}
var Ca;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmitImpl = "useSubmitImpl"),
    (e.UseFetcher = "useFetcher");
})(Ca || (Ca = {}));
var Na;
(function (e) {
  (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Na || (Na = {}));
const hm = {},
  gm = "_col_o0cyh_1",
  vm = "_row_o0cyh_21",
  ym = "_box_o0cyh_31",
  wm = "_name_o0cyh_49",
  _m = "_nameeffect_o0cyh_67",
  km = "_circle_o0cyh_113",
  Sm = "_slide_o0cyh_1",
  Wt = {
    col: gm,
    row: vm,
    box: ym,
    name: wm,
    nameeffect: _m,
    circle: km,
    slide: Sm,
  },
  xm = "_canvasContainer_18vsv_1",
  Pa = { canvasContainer: xm },
  Em = () => {
    const e = x.useRef(null),
      t = x.useRef([]);
    return (
      x.useEffect(() => {
        const n = e.current,
          r = n.getContext("2d");
        (n.width = window.innerWidth), (n.height = window.innerHeight);
        class o {
          constructor(u, p, g, h, _, k) {
            (this.x = u),
              (this.y = p),
              (this.directionX = g),
              (this.directionY = h),
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
        function l() {
          t.current = [];
          let a = (n.height * n.width) / 9e3;
          for (let u = 0; u < a; u++) {
            let p = Math.random() * 5 + 1,
              g = Math.random() * (innerWidth - p * 2 - p * 2) + p * 2,
              h = Math.random() * (innerHeight - p * 2 - p * 2) + p * 2,
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
            t.current.push(new o(g, h, _, k, p, T));
          }
        }
        function i() {
          r.clearRect(0, 0, n.width, n.height),
            t.current.forEach((a) => {
              a.update();
            });
        }
        l(), i();
        const s = () => {
          (n.width = window.innerWidth),
            (n.height = window.innerHeight),
            l(),
            i();
        };
        return (
          window.addEventListener("resize", s),
          window.addEventListener("mousemove", (a) => {
            r.clearRect(0, 0, n.width, n.height), i();
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
            r.clearRect(0, 0, n.width, n.height), i();
          }),
          () => {
            window.removeEventListener("resize", s),
              window.removeEventListener("mousemove", () => {}),
              window.removeEventListener("mouseout", () => {});
          }
        );
      }, []),
      m("div", {
        className: Pa.canvasContainer,
        children: m("canvas", { ref: e, className: Pa.canvas }),
      })
    );
  },
  Cm = () => {
    const [e, t] = x.useState("");
    var [n, r] = x.useState(0);
    const [o, l] = x.useState("Mechanical Engineering"),
      [i, s] = x.useState(0);
    return (
      x.useEffect(() => {
        i <= o.length
          ? setTimeout(() => {
              t(e + o[i]), s(i + 1);
            }, 75)
          : (s(0),
            t(""),
            n % 4 == 2
              ? (l("Mechanical Engineering"), r(++n))
              : n % 4 == 0
              ? (l("Full Stack Developer"), r(++n))
              : n % 4 == 1
              ? (l("Competitive Programmer"), r(++n))
              : (l("Machine learning enthusiast"), r(++n)));
      }, [i]),
      O("div", {
        className: Wt.col,
        id: "Intro",
        children: [
          m("div", {
            className: Wt.row,
            children: O("div", {
              className: Wt.box,
              children: [
                m("div", { className: Wt.circle }),
                m("div", {
                  className: Wt.name,
                  children: "Hi ! I'm Shivam Kumar",
                }),
                m("div", { className: Wt.nameeffect, children: e }),
                m("p", {
                  children:
                    "LeetCode, Kaggle Expert, and GitHub Maestro, I am an enthusiastic problem solver with a passion for collaborative innovation in tech. With over 50+ repos, I demonstrate proficiency in data science and am recognized as a Kaggle Expert, actively contributing to the Kaggle Notebook. Beyond data science, I am also a skilled web developer with expertise in frontend technologies such as Next.js and React, as well as backend technologies including Node.js and Django. My commitment to continuous learning and tackling challenges drives me to excel in both data-driven solutions and web development projects. I thrive in dynamic environments where creativity and teamwork are valued, eager to contribute to transformative projects in the ever-evolving tech industry.",
                }),
              ],
            }),
          }),
          m(Em, {}),
        ],
      })
    );
  },
  Nm = "_col_1y5ht_1",
  Pm = "_row_1y5ht_15",
  Lm = "_about_1y5ht_21",
  Tm = "_heading_1y5ht_33",
  zm = "_details_photo_1y5ht_45",
  Rm = "_details_1y5ht_45",
  jm = "_spinner_1y5ht_1",
  Im = "_translateRight_1y5ht_1",
  Mm = "_photobox_1y5ht_165",
  Dm = "_photo_1y5ht_165",
  Om = "_Zoomout_1y5ht_1",
  lt = {
    col: Nm,
    row: Pm,
    about: Lm,
    heading: Tm,
    details_photo: zm,
    details: Rm,
    spinner: jm,
    translateRight: Im,
    photobox: Mm,
    photo: Dm,
    Zoomout: Om,
  },
  Fm = [
    {
      text: "I am Shivam Kumar, a software developer with a passion for solving complex problems and building elegant solutions. With a LeetCode rating of 1837, I am constantly challenging myself to improve my skills and stay up-to-date with the latest technologies.",
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
  $m = () =>
    m("div", {
      className: lt.col,
      id: "about",
      children: m("div", {
        className: lt.row,
        children: O("div", {
          className: lt.about,
          children: [
            m("div", { className: lt.heading, children: "About Me" }),
            O("div", {
              className: lt.details_photo,
              children: [
                m("div", {
                  className: lt.details,
                  children: Fm.map((e, t) =>
                    O(
                      "p",
                      {
                        id: `about_text_${t + 1}`,
                        children: [e.text, m("span", {})],
                      },
                      t
                    )
                  ),
                }),
                m("div", {
                  className: lt.photobox,
                  children: m("div", {
                    className: lt.photo,
                    children: m("img", { src: "/avatar.png", alt: "avatar" }),
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
    }),
  Um = "_col_6690b_1",
  Am = "_row_6690b_15",
  Bm = "_language_6690b_21",
  Hm = "_heading_6690b_33",
  Vm = "_tool_card_6690b_45",
  Wm = "_tool_6690b_45",
  Qm = "_card_6690b_79",
  Lt = {
    col: Um,
    row: Am,
    language: Bm,
    heading: Hm,
    tool_card: Vm,
    tool: Wm,
    card: Qm,
  },
  Km = "_completecard_5n8cp_1",
  Ym = "_popular_books_5n8cp_15",
  Gm = "_rotate_5n8cp_29",
  Xm = "_zoomOut_5n8cp_1",
  Jm = "_book_card_5n8cp_59",
  Zm = "_card_header_5n8cp_89",
  qm = "_img_fluid_5n8cp_101",
  bm = "_card_footer_5n8cp_113",
  eh = "_back_5n8cp_123",
  th = "_back_content_5n8cp_159",
  nh = "_texting_5n8cp_195",
  rh = "_about_5n8cp_203",
  me = {
    completecard: Km,
    popular_books: Ym,
    rotate: Gm,
    zoomOut: Xm,
    book_card: Jm,
    card_header: Zm,
    img_fluid: qm,
    card_footer: bm,
    back: eh,
    back_content: th,
    texting: nh,
    about: rh,
  },
  oh = "_button_1ljvx_1",
  lh = { button: oh },
  ih = (e) =>
    m("button", {
      type: e.type,
      className: lh.button,
      onClick: e.onClick,
      children: e.children,
    }),
  sh = [
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
  ah = () =>
    m("div", {
      className: me.completecard,
      children: m("div", {
        className: me.popular_books,
        children: sh.map((e, t) =>
          m(
            "div",
            {
              className: me.rotate,
              children: O("div", {
                className: me.book_card,
                children: [
                  m("div", { className: me.card_header, children: e.website }),
                  m("div", {
                    className: me.card_body,
                    children: m("img", { src: e.src, className: me.img_fluid }),
                  }),
                  m("div", { className: me.card_footer, children: e.language }),
                  m("div", {
                    className: me.back,
                    children: O("div", {
                      className: me.back_content,
                      children: [
                        O("div", {
                          className: me.texting,
                          children: [e.webSiteName, " "],
                        }),
                        m("div", { className: me.about, children: e.userId }),
                        m("img", { src: e.src2, className: me.img_fluid }),
                        m("div", {
                          className: me.button,
                          children: m(ih, {
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
  uh = "_col_1flwf_1",
  ch = "_row_1flwf_15",
  dh = "_tooling_1flwf_23",
  fh = "_tooling_box_1flwf_41",
  ph = "_box_content_1flwf_61",
  mh = "_bumpOutLikeHeartBeatEven_1flwf_1",
  hh = "_bumpOutLikeHeartBeatOdd_1flwf_1",
  gh = "_box_icon_1flwf_147",
  vh = "_icon_1flwf_147",
  yh = "_box_text_1flwf_159",
  Pe = {
    col: uh,
    row: ch,
    tooling: dh,
    tooling_box: fh,
    box_content: ph,
    bumpOutLikeHeartBeatEven: mh,
    "even-animation": "_even-animation_1flwf_91",
    "odd-animation": "_odd-animation_1flwf_99",
    bumpOutLikeHeartBeatOdd: hh,
    box_icon: gh,
    icon: vh,
    box_text: yh,
  },
  wh = [
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
  _h = () => {
    const e = x.useRef(null),
      t = () => {
        const n = e.current,
          r = getComputedStyle(n).gridTemplateRows.split(" ").length,
          o = getComputedStyle(n).gridTemplateColumns.split(" ").length,
          l = n.children;
        for (let i = 0; i < r; i++)
          for (let s = 0; s < o; s++)
            l[i * o + s] &&
              (l[i * o + s].classList.remove(Pe["even-animation"]),
              l[i * o + s].classList.remove(Pe["odd-animation"]),
              i % 2 === 0
                ? l[i * o + s].classList.add(Pe["even-animation"])
                : l[i * o + s].classList.add(Pe["odd-animation"]));
      };
    return (
      x.useEffect(
        () => (
          t(),
          window.addEventListener("resize", t),
          () => {
            window.removeEventListener("resize", t);
          }
        ),
        []
      ),
      m("div", {
        className: Pe.col,
        children: m("div", {
          className: Pe.row,
          children: m("div", {
            className: Pe.tooling,
            children: m("div", {
              className: Pe.tooling_box,
              ref: e,
              children: wh.map((n, r) =>
                O(
                  "div",
                  {
                    className: Pe.box_content,
                    children: [
                      m("div", {
                        className: Pe.box_icon,
                        children: m("img", {
                          src: n.src,
                          alt: n.src,
                          className: Pe.icon,
                        }),
                      }),
                      m("div", { className: Pe.box_text, children: n.text }),
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
  kh = () =>
    m("div", {
      className: Lt.col,
      id: "language",
      children: m("div", {
        className: Lt.row,
        children: O("div", {
          className: Lt.language,
          children: [
            m("div", {
              className: Lt.heading,
              children: "Language and Platform Used",
            }),
            O("div", {
              className: Lt.tool_card,
              children: [
                m("div", { className: Lt.tool, children: m(_h, {}) }),
                m("div", {
                  className: Lt.card,
                  id: "Platform",
                  children: m(ah, {}),
                }),
              ],
            }),
          ],
        }),
      }),
    }),
  Sh = "_col_dk18o_1",
  xh = "_row_dk18o_15",
  Eh = "_working_dk18o_21",
  Ch = "_heading_dk18o_33",
  Nh = "_works_dk18o_45",
  Ph = "_zoomOutAnimation_dk18o_59",
  Lh = "_zoomOut_dk18o_59",
  Th = "_work_dk18o_21",
  zh = "_link_svg_dk18o_137",
  Rh = "_work_info_dk18o_177",
  Ve = {
    col: Sh,
    row: xh,
    working: Eh,
    heading: Ch,
    works: Nh,
    zoomOutAnimation: Ph,
    zoomOut: Lh,
    work: Th,
    link_svg: zh,
    work_info: Rh,
  },
  La = [
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
      website: "Kaggle Elite Coder",
      src: "/project/new/3.kaggle.png",
      webSiteName:
        "Welcome to my GitHub repository! Here, you will find my solutions and code for various Kaggle competitions that I have participated in. As a current expert in Kaggle, I have worked extensively on multiple competitions, utilizing advanced techniques in data analysis, machine learning, and deep learning to achieve competitive results. ",
      userId: "Language used: Machine learning and  Kaggle competition",
      websiteLink: "https://github.com/shivam6862/Kaggle-Elite-Coder",
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
  jh = "_background_1ttwx_1",
  Ih = "_container_1ttwx_21",
  Mh = "_box_1ttwx_47",
  Dh = "_websiteimage_1ttwx_85",
  Oh = "_cross_1ttwx_151",
  Fh = "__box_1rqzu_45_1ttwx_225",
  Rn = {
    background: jh,
    container: Ih,
    box: Mh,
    "middle-top": "_middle-top_1ttwx_1",
    websiteimage: Dh,
    cross: Oh,
    _box_1rqzu_45: Fh,
  },
  $h = ({ data: e, setCard: t }) =>
    O(wd, {
      children: [
        m("div", { className: Rn.background, onClick: t }),
        O("div", {
          className: Rn.container,
          children: [
            m("img", {
              src: "cross.svg",
              alt: "image",
              className: Rn.cross,
              onClick: t,
            }),
            O("div", {
              className: Rn.box,
              children: [
                m("h1", { children: e.website }),
                m("div", {
                  className: Rn.websiteimage,
                  children: m("img", { src: e.src, alt: e.website }),
                }),
                m("p", { children: e.userId }),
                m("p", { children: e.webSiteName }),
                m("button", {
                  children: m("a", {
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
  Uh = () => {
    const [e, t] = x.useState(-1),
      n = () => {
        t(-1);
      };
    return O("div", {
      className: Ve.col,
      id: "Projects",
      children: [
        e !== -1 && m($h, { data: La[e], setCard: n }),
        m("div", {
          className: Ve.row,
          children: O("div", {
            className: Ve.working,
            children: [
              m("div", { className: Ve.heading, children: "Projects" }),
              m("div", {
                className: Ve.works,
                children: La.map((r, o) =>
                  m(
                    "div",
                    {
                      className: Ve.zoomOutAnimation,
                      children: O(
                        "div",
                        {
                          className: Ve.work,
                          onClick: () => {
                            t(o);
                          },
                          id: `projects-${o + 1}`,
                          children: [
                            m("div", {
                              className: Ve.link_svg,
                              children: m("img", {
                                src: "link.svg",
                                alt: "link",
                              }),
                            }),
                            m("div", {
                              className: Ve.work_info,
                              children: r.website,
                            }),
                            m("img", {
                              src: r.src,
                              className: Ve.img_fluid,
                              alt: "Projects_image",
                            }),
                          ],
                        },
                        o
                      ),
                    },
                    o
                  )
                ),
              }),
            ],
          }),
        }),
      ],
    });
  },
  Ah = "_contact_1r4da_1",
  Bh = "_container_fluid_1r4da_13",
  Hh = "_row_1r4da_19",
  Vh = "_rowall_1r4da_27",
  Wh = "_col_1_1r4da_39",
  Qh = "_translateLeft_1r4da_1",
  Kh = "_col_2_1r4da_71",
  Yh = "_translateRight_1r4da_1",
  Gh = "_items_wrapper_1r4da_103",
  Xh = "_floating_item_1r4da_131",
  Jh = "_link_1r4da_149",
  Zh = "_text_light_1r4da_157",
  qh = "_text_light_heading_1r4da_163",
  bh = "_red_1r4da_169",
  eg = "_part_2_text_light_1r4da_175",
  tg = "_form_group_1r4da_189",
  ng = "_form_control_1r4da_203",
  rg = "_but_red_1r4da_217",
  og = "_first_item_1r4da_249",
  lg = "_float_1r4da_131",
  ig = "_second_item_1r4da_255",
  sg = "_third_item_1r4da_261",
  ag = "_fourth_item_1r4da_267",
  ug = "_fifth_item_1r4da_273",
  cg = "_contact_form_1r4da_307",
  dg = "_error_message_1r4da_389",
  j = {
    contact: Ah,
    container_fluid: Bh,
    row: Hh,
    rowall: Vh,
    col_1: Wh,
    translateLeft: Qh,
    col_2: Kh,
    translateRight: Yh,
    items_wrapper: Gh,
    floating_item: Xh,
    link: Jh,
    text_light: Zh,
    text_light_heading: qh,
    red: bh,
    part_2_text_light: eg,
    form_group: tg,
    form_control: ng,
    but_red: rg,
    first_item: og,
    float: lg,
    second_item: ig,
    third_item: sg,
    fourth_item: ag,
    fifth_item: ug,
    contact_form: cg,
    error_message: dg,
  },
  fg = () => {
    const [e, t] = x.useState(""),
      [n, r] = x.useState(""),
      [o, l] = x.useState(""),
      [i, s] = x.useState(""),
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
          h = `mailto:shivam6862mau@gmail.com?subject=${p}&body=${g}`;
        window.open(h), r(""), t(""), l("");
      };
    return m("div", {
      className: j.contact,
      id: "contact",
      children: m("div", {
        className: j.container_fluid,
        children: O("div", {
          className: j.rowall,
          children: [
            m("div", {
              className: j.col_1,
              children: O("div", {
                className: `${j.items_wrapper} ${j.row}`,
                children: [
                  m("div", {
                    className: `${j.floating_item} ${j.first_item}`,
                    children: m("div", {
                      href: "#",
                      className: j.text_light,
                      children: m("i", {
                        className: j.link,
                        onClick: () =>
                          window.open(
                            "https://www.linkedin.com/in/shivam-kumar-14701b249/"
                          ),
                        children: "Connect by LinkedIn",
                      }),
                    }),
                  }),
                  m("div", {
                    className: `${j.floating_item} ${j.second_item}`,
                    children: m("div", {
                      href: "#",
                      className: j.text_light,
                      children: m("i", {
                        className: j.link,
                        onClick: () =>
                          window.open(
                            "https://www.instagram.com/shivam_kr_634/"
                          ),
                        children: "Connect by Instagram",
                      }),
                    }),
                  }),
                  m("div", {
                    className: `${j.floating_item} ${j.third_item}`,
                    children: m("div", {
                      className: j.text_light,
                      children: m("i", {
                        className: j.link,
                        onClick: () =>
                          window.open("https://github.com/shivam6862"),
                        children: "Github account",
                      }),
                    }),
                  }),
                  m("div", {
                    className: `${j.floating_item} ${j.fourth_item}`,
                    children: m("div", {
                      className: j.text_light,
                      children: m("i", {
                        className: j.link,
                        onClick: () =>
                          window.open("https://leetcode.com/1_shivam/"),
                        children: "Leetcode account",
                      }),
                    }),
                  }),
                  m("div", {
                    className: `${j.floating_item} ${j.fifth_item}`,
                    children: m("div", {
                      className: j.text_light,
                      children: m("i", {
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
                m("h1", {
                  className: `${j.text_light_heading} ${j.part_2_text_light}`,
                  children: "Stay Connected",
                }),
                m("div", {
                  className: `${j.contact_form}`,
                  children: O("div", {
                    className: j.form_group,
                    children: [
                      i
                        ? m("div", {
                            children: m("p", {
                              className: j.error_message,
                              children: i,
                            }),
                          })
                        : null,
                      m("input", {
                        type: "text",
                        className: j.form_control,
                        placeholder: "Name",
                        value: e,
                        onChange: (u) => t(u.target.value),
                      }),
                      m("input", {
                        type: "email",
                        className: j.form_control,
                        placeholder: "Email",
                        value: n,
                        onChange: (u) => r(u.target.value),
                      }),
                      m("textarea", {
                        className: j.form_control,
                        placeholder: "Message",
                        rows: "4",
                        value: o,
                        onChange: (u) => l(u.target.value),
                      }),
                      m("input", {
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
  pg = "_last_yi42e_1",
  mg = "_container_fluid_yi42e_13",
  hg = "_row_yi42e_21",
  gg = "_col_yi42e_37",
  vg = "_nav_yi42e_43",
  yg = "_nav_link_yi42e_61",
  wg = "_copyright_yi42e_71",
  _g = "_nav_item_yi42e_93",
  ee = {
    last: pg,
    container_fluid: mg,
    row: hg,
    col: gg,
    nav: vg,
    nav_link: yg,
    copyright: wg,
    "footer-link": "_footer-link_yi42e_79",
    nav_item: _g,
  },
  kg = () =>
    m("div", {
      className: ee.last,
      id: "last",
      children: m("div", {
        className: ee.container_fluid,
        children: O("div", {
          className: ee.row,
          children: [
            m("div", {
              className: ee.col,
              children: O("ul", {
                className: ee.nav,
                children: [
                  m("li", {
                    className: ee.nav_item,
                    children: m("a", {
                      className: ee.nav_link,
                      href: "#Intro",
                      children: "Intro",
                    }),
                  }),
                  m("li", {
                    className: ee.nav_item,
                    children: m("a", {
                      className: ee.nav_link,
                      href: "#about",
                      children: "About me",
                    }),
                  }),
                  m("li", {
                    className: ee.nav_item,
                    children: m("a", {
                      className: ee.nav_link,
                      href: "#language",
                      children: "Language",
                    }),
                  }),
                  m("li", {
                    className: ee.nav_item,
                    children: m("a", {
                      className: ee.nav_link,
                      href: "#Platform",
                      children: "Platform",
                    }),
                  }),
                  m("li", {
                    className: ee.nav_item,
                    children: m("a", {
                      className: ee.nav_link,
                      href: "#Projects",
                      children: "Projects",
                    }),
                  }),
                  m("li", {
                    className: ee.nav_item,
                    children: m("a", {
                      className: ee.nav_link,
                      href: "#contact",
                      children: "Contact",
                    }),
                  }),
                ],
              }),
            }),
            m("p", {
              className: ee.copyright,
              children: "© 2024.. Made by shivam6862",
            }),
          ],
        }),
      }),
    }),
  Sg = () =>
    O("div", {
      className: hm.home,
      children: [
        m(Cm, {}),
        m($m, {}),
        m(kh, {}),
        m(Uh, {}),
        m(fg, {}),
        m(kg, {}),
      ],
    }),
  xg = "_error_number_7tm59_1",
  Eg = "_error_reason_7tm59_15",
  Cg = "_error_des_7tm59_31",
  pl = { error_number: xg, error_reason: Eg, error_des: Cg },
  Ng = () =>
    O("div", {
      children: [
        m("div", { className: pl.error_number, children: "404" }),
        m("div", { className: pl.error_reason, children: "Page Not Found!" }),
        m("div", {
          className: pl.error_des,
          children:
            "You've encountered an error. Please refresh the page, or try again later.",
        }),
      ],
    }),
  Pg = [
    { path: "/", Component: Sg },
    { path: "*", Component: Ng },
  ],
  Lg = () =>
    m(pm, {
      children: Pg.map((e, t) =>
        m(Qc, { path: e.path, element: m(e.Component, {}) }, t)
      ),
    }),
  Tg = "_backdrop_ke37f_1",
  zg = { backdrop: Tg },
  Rg = ({ Id: e, onClick: t }) =>
    m("div", {
      containerid: e,
      children: m("div", { className: zg.backdrop, onClick: t }),
    }),
  jg = "_positionfixed_ex25g_1",
  Ig = "_line1_ex25g_13",
  Mg = "_line2_ex25g_15",
  Dg = "_line3_ex25g_17",
  Og = "_hamburgerchange_ex25g_33",
  Fg = "_navigation_ex25g_101",
  $g = "_logo_ex25g_131",
  Ug = "_logo1_ex25g_143",
  Ag = "_first_ex25g_155",
  Bg = "_navigationmenu_ex25g_163",
  Hg = "_active_ex25g_189",
  Vg = "_hamburger_ex25g_33",
  Wg = "_navigationmenuexpanded_ex25g_291",
  J = {
    positionfixed: jg,
    line1: Ig,
    line2: Mg,
    line3: Dg,
    hamburgerchange: Og,
    navigation: Fg,
    logo: $g,
    logo1: Ug,
    first: Ag,
    navigationmenu: Bg,
    active: Hg,
    hamburger: Vg,
    navigationmenuexpanded: Wg,
  },
  Qg = () => {
    const [e, t] = x.useState(!1),
      [n, r] = x.useState({ dynamicWidth: window.innerWidth }),
      o = () => {
        r({ dynamicWidth: window.innerWidth });
      };
    return (
      x.useEffect(
        () => (
          window.addEventListener("resize", o),
          () => {
            window.removeEventListener("resize", o);
          }
        ),
        [n]
      ),
      n.dynamicWidth >= 1e3 && e === !0 && t(!1),
      m("div", {
        className: J.positionfixed,
        children: O("nav", {
          className: J.navigation,
          children: [
            m("div", {
              id: "/",
              className: J.active1,
              children: m("div", {
                className: J.logo,
                children: m("img", { src: "/logo.jpg", alt: "logo" }),
              }),
            }),
            O("button", {
              className: e ? J.hamburgerchange : J.hamburger,
              onClick: () => {
                t(!e);
              },
              children: [
                m("div", { className: J.line1 }),
                m("div", { className: J.line2 }),
                m("div", { className: J.line3 }),
              ],
            }),
            e && m(Rg, { Id: "backdrop", onClick: () => t(!e) }),
            m("div", {
              className: e ? J.navigationmenuexpanded : J.navigationmenu,
              children: O("ul", {
                children: [
                  m("li", {
                    className: J.first,
                    children: m("div", {
                      id: "/",
                      className: J.active,
                      onClick: () => {
                        t(!1);
                      },
                      children: m("div", {
                        className: J.logo1,
                        children: m("img", { src: "/logo.jpg", alt: "logo" }),
                      }),
                    }),
                  }),
                  m("li", {
                    children: m("a", {
                      href: "#Intro",
                      className: J.active,
                      onClick: () => {
                        t(!1);
                      },
                      children: "Intro",
                    }),
                  }),
                  m("li", {
                    children: m("a", {
                      href: "#about",
                      className: J.active,
                      onClick: () => {
                        t(!1);
                      },
                      children: "About",
                    }),
                  }),
                  m("li", {
                    children: m("a", {
                      href: "#language",
                      className: J.active,
                      onClick: () => {
                        t(!1);
                      },
                      children: "Language",
                    }),
                  }),
                  m("li", {
                    children: m("a", {
                      href: "#Projects",
                      className: J.active,
                      onClick: () => {
                        t(!1);
                      },
                      children: "Projects",
                    }),
                  }),
                  m("li", {
                    children: m("a", {
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
  Kg = "_App_1u7u7_1",
  Yg = {
    App: Kg,
    "box-shadow-large": "_box-shadow-large_1u7u7_17",
    "box-shadow-small": "_box-shadow-small_1u7u7_53",
  };
function Gg() {
  return O("div", { className: Yg.App, children: [m(Qg, {}), m(Lg, {})] });
}
hl.createRoot(document.getElementById("root")).render(
  m(mm, { children: m(Gg, {}) })
);
