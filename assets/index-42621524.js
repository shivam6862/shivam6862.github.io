function Kc(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const o = Object.getOwnPropertyDescriptor(r, l);
          o &&
            Object.defineProperty(
              e,
              l,
              o.get ? o : { enumerable: !0, get: () => r[l] }
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
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
function Yc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Qn = {},
  Gc = {
    get exports() {
      return Qn;
    },
    set exports(e) {
      Qn = e;
    },
  },
  vl = {},
  N = {},
  Xc = {
    get exports() {
      return N;
    },
    set exports(e) {
      N = e;
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
 */ var ar = Symbol.for("react.element"),
  Jc = Symbol.for("react.portal"),
  Zc = Symbol.for("react.fragment"),
  qc = Symbol.for("react.strict_mode"),
  bc = Symbol.for("react.profiler"),
  ed = Symbol.for("react.provider"),
  td = Symbol.for("react.context"),
  nd = Symbol.for("react.forward_ref"),
  rd = Symbol.for("react.suspense"),
  ld = Symbol.for("react.memo"),
  od = Symbol.for("react.lazy"),
  cu = Symbol.iterator;
function id(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (cu && e[cu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ls = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Ts = Object.assign,
  zs = {};
function yn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = zs),
    (this.updater = n || Ls);
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
function Rs() {}
Rs.prototype = yn.prototype;
function pi(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = zs),
    (this.updater = n || Ls);
}
var mi = (pi.prototype = new Rs());
mi.constructor = pi;
Ts(mi, yn.prototype);
mi.isPureReactComponent = !0;
var du = Array.isArray,
  js = Object.prototype.hasOwnProperty,
  hi = { current: null },
  Is = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ms(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      js.call(t, r) && !Is.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), a = 0; a < u; a++) s[a] = arguments[a + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: ar,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: hi.current,
  };
}
function ud(e, t) {
  return {
    $$typeof: ar,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function gi(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ar;
}
function sd(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var fu = /\/+/g;
function Ul(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? sd("" + e.key)
    : t.toString(36);
}
function Ir(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ar:
          case Jc:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + Ul(i, 0) : r),
      du(l)
        ? ((n = ""),
          e != null && (n = e.replace(fu, "$&/") + "/"),
          Ir(l, t, n, "", function (a) {
            return a;
          }))
        : l != null &&
          (gi(l) &&
            (l = ud(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(fu, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), du(e)))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var s = r + Ul(o, u);
      i += Ir(o, t, n, s, l);
    }
  else if (((s = id(e)), typeof s == "function"))
    for (e = s.call(e), u = 0; !(o = e.next()).done; )
      (o = o.value), (s = r + Ul(o, u++)), (i += Ir(o, t, n, s, l));
  else if (o === "object")
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
    l = 0;
  return (
    Ir(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function ad(e) {
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
  cd = {
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
I.Fragment = Zc;
I.Profiler = bc;
I.PureComponent = pi;
I.StrictMode = qc;
I.Suspense = rd;
I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = cd;
I.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Ts({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = hi.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      js.call(t, s) &&
        !Is.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var a = 0; a < s; a++) u[a] = arguments[a + 2];
    r.children = u;
  }
  return { $$typeof: ar, type: e.type, key: l, ref: o, props: r, _owner: i };
};
I.createContext = function (e) {
  return (
    (e = {
      $$typeof: td,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: ed, _context: e }),
    (e.Consumer = e)
  );
};
I.createElement = Ms;
I.createFactory = function (e) {
  var t = Ms.bind(null, e);
  return (t.type = e), t;
};
I.createRef = function () {
  return { current: null };
};
I.forwardRef = function (e) {
  return { $$typeof: nd, render: e };
};
I.isValidElement = gi;
I.lazy = function (e) {
  return { $$typeof: od, _payload: { _status: -1, _result: e }, _init: ad };
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
})(Xc);
const dd = Yc(N),
  mo = Kc({ __proto__: null, default: dd }, [N]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var fd = N,
  pd = Symbol.for("react.element"),
  md = Symbol.for("react.fragment"),
  hd = Object.prototype.hasOwnProperty,
  gd = fd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  vd = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ds(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) hd.call(t, r) && !vd.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: pd,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: gd.current,
  };
}
vl.Fragment = md;
vl.jsx = Ds;
vl.jsxs = Ds;
(function (e) {
  e.exports = vl;
})(Gc);
const yd = Qn.Fragment,
  p = Qn.jsx,
  F = Qn.jsxs;
var ho = {},
  go = {},
  _d = {
    get exports() {
      return go;
    },
    set exports(e) {
      go = e;
    },
  },
  Ne = {},
  vo = {},
  wd = {
    get exports() {
      return vo;
    },
    set exports(e) {
      vo = e;
    },
  },
  Os = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(E, z) {
    var R = E.length;
    E.push(z);
    e: for (; 0 < R; ) {
      var Y = (R - 1) >>> 1,
        b = E[Y];
      if (0 < l(b, z)) (E[Y] = z), (E[R] = b), (R = Y);
      else break e;
    }
  }
  function n(E) {
    return E.length === 0 ? null : E[0];
  }
  function r(E) {
    if (E.length === 0) return null;
    var z = E[0],
      R = E.pop();
    if (R !== z) {
      E[0] = R;
      e: for (var Y = 0, b = E.length, mr = b >>> 1; Y < mr; ) {
        var Ct = 2 * (Y + 1) - 1,
          $l = E[Ct],
          Pt = Ct + 1,
          hr = E[Pt];
        if (0 > l($l, R))
          Pt < b && 0 > l(hr, $l)
            ? ((E[Y] = hr), (E[Pt] = R), (Y = Pt))
            : ((E[Y] = $l), (E[Ct] = R), (Y = Ct));
        else if (Pt < b && 0 > l(hr, R)) (E[Y] = hr), (E[Pt] = R), (Y = Pt);
        else break e;
      }
    }
    return z;
  }
  function l(E, z) {
    var R = E.sortIndex - z.sortIndex;
    return R !== 0 ? R : E.id - z.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      u = i.now();
    e.unstable_now = function () {
      return i.now() - u;
    };
  }
  var s = [],
    a = [],
    h = 1,
    g = null,
    m = 3,
    w = !1,
    k = !1,
    _ = !1,
    T = typeof setTimeout == "function" ? setTimeout : null,
    d = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function f(E) {
    for (var z = n(a); z !== null; ) {
      if (z.callback === null) r(a);
      else if (z.startTime <= E)
        r(a), (z.sortIndex = z.expirationTime), t(s, z);
      else break;
      z = n(a);
    }
  }
  function v(E) {
    if (((_ = !1), f(E), !k))
      if (n(s) !== null) (k = !0), Ol(x);
      else {
        var z = n(a);
        z !== null && Fl(v, z.startTime - E);
      }
  }
  function x(E, z) {
    (k = !1), _ && ((_ = !1), d(L), (L = -1)), (w = !0);
    var R = m;
    try {
      for (
        f(z), g = n(s);
        g !== null && (!(g.expirationTime > z) || (E && !Ie()));

      ) {
        var Y = g.callback;
        if (typeof Y == "function") {
          (g.callback = null), (m = g.priorityLevel);
          var b = Y(g.expirationTime <= z);
          (z = e.unstable_now()),
            typeof b == "function" ? (g.callback = b) : g === n(s) && r(s),
            f(z);
        } else r(s);
        g = n(s);
      }
      if (g !== null) var mr = !0;
      else {
        var Ct = n(a);
        Ct !== null && Fl(v, Ct.startTime - z), (mr = !1);
      }
      return mr;
    } finally {
      (g = null), (m = R), (w = !1);
    }
  }
  var C = !1,
    P = null,
    L = -1,
    K = 5,
    M = -1;
  function Ie() {
    return !(e.unstable_now() - M < K);
  }
  function kn() {
    if (P !== null) {
      var E = e.unstable_now();
      M = E;
      var z = !0;
      try {
        z = P(!0, E);
      } finally {
        z ? Sn() : ((C = !1), (P = null));
      }
    } else C = !1;
  }
  var Sn;
  if (typeof c == "function")
    Sn = function () {
      c(kn);
    };
  else if (typeof MessageChannel < "u") {
    var au = new MessageChannel(),
      Qc = au.port2;
    (au.port1.onmessage = kn),
      (Sn = function () {
        Qc.postMessage(null);
      });
  } else
    Sn = function () {
      T(kn, 0);
    };
  function Ol(E) {
    (P = E), C || ((C = !0), Sn());
  }
  function Fl(E, z) {
    L = T(function () {
      E(e.unstable_now());
    }, z);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (E) {
      E.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      k || w || ((k = !0), Ol(x));
    }),
    (e.unstable_forceFrameRate = function (E) {
      0 > E || 125 < E
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (K = 0 < E ? Math.floor(1e3 / E) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (E) {
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
        return E();
      } finally {
        m = R;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (E, z) {
      switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          E = 3;
      }
      var R = m;
      m = E;
      try {
        return z();
      } finally {
        m = R;
      }
    }),
    (e.unstable_scheduleCallback = function (E, z, R) {
      var Y = e.unstable_now();
      switch (
        (typeof R == "object" && R !== null
          ? ((R = R.delay), (R = typeof R == "number" && 0 < R ? Y + R : Y))
          : (R = Y),
        E)
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
        (E = {
          id: h++,
          callback: z,
          priorityLevel: E,
          startTime: R,
          expirationTime: b,
          sortIndex: -1,
        }),
        R > Y
          ? ((E.sortIndex = R),
            t(a, E),
            n(s) === null &&
              E === n(a) &&
              (_ ? (d(L), (L = -1)) : (_ = !0), Fl(v, R - Y)))
          : ((E.sortIndex = b), t(s, E), k || w || ((k = !0), Ol(x))),
        E
      );
    }),
    (e.unstable_shouldYield = Ie),
    (e.unstable_wrapCallback = function (E) {
      var z = m;
      return function () {
        var R = m;
        m = z;
        try {
          return E.apply(this, arguments);
        } finally {
          m = R;
        }
      };
    });
})(Os);
(function (e) {
  e.exports = Os;
})(wd);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fs = N,
  Ee = vo;
function y(e) {
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
var $s = new Set(),
  Kn = {};
function At(e, t) {
  dn(e, t), dn(e + "Capture", t);
}
function dn(e, t) {
  for (Kn[e] = t, e = 0; e < t.length; e++) $s.add(t[e]);
}
var qe = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  yo = Object.prototype.hasOwnProperty,
  kd =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  pu = {},
  mu = {};
function Sd(e) {
  return yo.call(mu, e)
    ? !0
    : yo.call(pu, e)
    ? !1
    : kd.test(e)
    ? (mu[e] = !0)
    : ((pu[e] = !0), !1);
}
function xd(e, t, n, r) {
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
function Ed(e, t, n, r) {
  if (t === null || typeof t > "u" || xd(e, t, n, r)) return !0;
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
function pe(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var oe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    oe[e] = new pe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  oe[t] = new pe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  oe[e] = new pe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  oe[e] = new pe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    oe[e] = new pe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  oe[e] = new pe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  oe[e] = new pe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  oe[e] = new pe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  oe[e] = new pe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var vi = /[\-:]([a-z])/g;
function yi(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(vi, yi);
    oe[t] = new pe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(vi, yi);
    oe[t] = new pe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(vi, yi);
  oe[t] = new pe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  oe[e] = new pe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
oe.xlinkHref = new pe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  oe[e] = new pe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function _i(e, t, n, r) {
  var l = oe.hasOwnProperty(t) ? oe[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Ed(t, n, l, r) && (n = null),
    r || l === null
      ? Sd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var nt = Fs.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  vr = Symbol.for("react.element"),
  Qt = Symbol.for("react.portal"),
  Kt = Symbol.for("react.fragment"),
  wi = Symbol.for("react.strict_mode"),
  _o = Symbol.for("react.profiler"),
  Us = Symbol.for("react.provider"),
  Bs = Symbol.for("react.context"),
  ki = Symbol.for("react.forward_ref"),
  wo = Symbol.for("react.suspense"),
  ko = Symbol.for("react.suspense_list"),
  Si = Symbol.for("react.memo"),
  it = Symbol.for("react.lazy"),
  As = Symbol.for("react.offscreen"),
  hu = Symbol.iterator;
function xn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (hu && e[hu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var H = Object.assign,
  Bl;
function jn(e) {
  if (Bl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Bl = (t && t[1]) || "";
    }
  return (
    `
` +
    Bl +
    e
  );
}
var Al = !1;
function Vl(e, t) {
  if (!e || Al) return "";
  Al = !0;
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
        } catch (a) {
          var r = a;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (a) {
          r = a;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == "string") {
      for (
        var l = a.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          u = o.length - 1;
        1 <= i && 0 <= u && l[i] !== o[u];

      )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if ((i--, u--, 0 > u || l[i] !== o[u])) {
                var s =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    (Al = !1), (Error.prepareStackTrace = n);
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
      return (e = Vl(e.type, !1)), e;
    case 11:
      return (e = Vl(e.type.render, !1)), e;
    case 1:
      return (e = Vl(e.type, !0)), e;
    default:
      return "";
  }
}
function So(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Kt:
      return "Fragment";
    case Qt:
      return "Portal";
    case _o:
      return "Profiler";
    case wi:
      return "StrictMode";
    case wo:
      return "Suspense";
    case ko:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Bs:
        return (e.displayName || "Context") + ".Consumer";
      case Us:
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
          (t = e.displayName || null), t !== null ? t : So(e.type) || "Memo"
        );
      case it:
        (t = e._payload), (e = e._init);
        try {
          return So(e(t));
        } catch {}
    }
  return null;
}
function Cd(e) {
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
      return So(t);
    case 8:
      return t === wi ? "StrictMode" : "Mode";
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
function Vs(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Pd(e) {
  var t = Vs(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = "" + i), o.call(this, i);
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
  e._valueTracker || (e._valueTracker = Pd(e));
}
function Ws(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Vs(e) ? (e.checked ? "true" : "false") : e.value),
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
function xo(e, t) {
  var n = t.checked;
  return H({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function gu(e, t) {
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
function Hs(e, t) {
  (t = t.checked), t != null && _i(e, "checked", t, !1);
}
function Eo(e, t) {
  Hs(e, t);
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
    ? No(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && No(e, t.type, kt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function vu(e, t, n) {
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
function No(e, t, n) {
  (t !== "number" || Qr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var In = Array.isArray;
function rn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + kt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Co(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(y(91));
  return H({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function yu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(y(92));
      if (In(n)) {
        if (1 < n.length) throw Error(y(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: kt(n) };
}
function Qs(e, t) {
  var n = kt(t.value),
    r = kt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function _u(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Ks(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Po(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Ks(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var _r,
  Ys = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
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
  Ld = ["Webkit", "ms", "Moz", "O"];
Object.keys(On).forEach(function (e) {
  Ld.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (On[t] = On[e]);
  });
});
function Gs(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (On.hasOwnProperty(e) && On[e])
    ? ("" + t).trim()
    : t + "px";
}
function Xs(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = Gs(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Td = H(
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
function Lo(e, t) {
  if (t) {
    if (Td[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(y(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(y(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(y(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(y(62));
  }
}
function To(e, t) {
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
var zo = null;
function xi(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ro = null,
  ln = null,
  on = null;
function wu(e) {
  if ((e = fr(e))) {
    if (typeof Ro != "function") throw Error(y(280));
    var t = e.stateNode;
    t && ((t = Sl(t)), Ro(e.stateNode, e.type, t));
  }
}
function Js(e) {
  ln ? (on ? on.push(e) : (on = [e])) : (ln = e);
}
function Zs() {
  if (ln) {
    var e = ln,
      t = on;
    if (((on = ln = null), wu(e), t)) for (e = 0; e < t.length; e++) wu(t[e]);
  }
}
function qs(e, t) {
  return e(t);
}
function bs() {}
var Wl = !1;
function ea(e, t, n) {
  if (Wl) return e(t, n);
  Wl = !0;
  try {
    return qs(e, t, n);
  } finally {
    (Wl = !1), (ln !== null || on !== null) && (bs(), Zs());
  }
}
function Gn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Sl(n);
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
  if (n && typeof n != "function") throw Error(y(231, t, typeof n));
  return n;
}
var jo = !1;
if (qe)
  try {
    var En = {};
    Object.defineProperty(En, "passive", {
      get: function () {
        jo = !0;
      },
    }),
      window.addEventListener("test", En, En),
      window.removeEventListener("test", En, En);
  } catch {
    jo = !1;
  }
function zd(e, t, n, r, l, o, i, u, s) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (h) {
    this.onError(h);
  }
}
var Fn = !1,
  Kr = null,
  Yr = !1,
  Io = null,
  Rd = {
    onError: function (e) {
      (Fn = !0), (Kr = e);
    },
  };
function jd(e, t, n, r, l, o, i, u, s) {
  (Fn = !1), (Kr = null), zd.apply(Rd, arguments);
}
function Id(e, t, n, r, l, o, i, u, s) {
  if ((jd.apply(this, arguments), Fn)) {
    if (Fn) {
      var a = Kr;
      (Fn = !1), (Kr = null);
    } else throw Error(y(198));
    Yr || ((Yr = !0), (Io = a));
  }
}
function Vt(e) {
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
function ta(e) {
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
function ku(e) {
  if (Vt(e) !== e) throw Error(y(188));
}
function Md(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Vt(e)), t === null)) throw Error(y(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return ku(l), e;
        if (o === r) return ku(l), t;
        o = o.sibling;
      }
      throw Error(y(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (u === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (u === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(y(189));
      }
    }
    if (n.alternate !== r) throw Error(y(190));
  }
  if (n.tag !== 3) throw Error(y(188));
  return n.stateNode.current === n ? e : t;
}
function na(e) {
  return (e = Md(e)), e !== null ? ra(e) : null;
}
function ra(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = ra(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var la = Ee.unstable_scheduleCallback,
  Su = Ee.unstable_cancelCallback,
  Dd = Ee.unstable_shouldYield,
  Od = Ee.unstable_requestPaint,
  G = Ee.unstable_now,
  Fd = Ee.unstable_getCurrentPriorityLevel,
  Ei = Ee.unstable_ImmediatePriority,
  oa = Ee.unstable_UserBlockingPriority,
  Gr = Ee.unstable_NormalPriority,
  $d = Ee.unstable_LowPriority,
  ia = Ee.unstable_IdlePriority,
  yl = null,
  He = null;
function Ud(e) {
  if (He && typeof He.onCommitFiberRoot == "function")
    try {
      He.onCommitFiberRoot(yl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var $e = Math.clz32 ? Math.clz32 : Vd,
  Bd = Math.log,
  Ad = Math.LN2;
function Vd(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Bd(e) / Ad) | 0)) | 0;
}
var wr = 64,
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
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? (r = Mn(u)) : ((o &= i), o !== 0 && (r = Mn(o)));
  } else (i = n & ~l), i !== 0 ? (r = Mn(i)) : o !== 0 && (r = Mn(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - $e(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
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
function Hd(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - $e(o),
      u = 1 << i,
      s = l[i];
    s === -1
      ? (!(u & n) || u & r) && (l[i] = Wd(u, t))
      : s <= t && (e.expiredLanes |= u),
      (o &= ~u);
  }
}
function Mo(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function ua() {
  var e = wr;
  return (wr <<= 1), !(wr & 4194240) && (wr = 64), e;
}
function Hl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function cr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - $e(t)),
    (e[t] = n);
}
function Qd(e, t) {
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
    var l = 31 - $e(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function Ni(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - $e(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var O = 0;
function sa(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var aa,
  Ci,
  ca,
  da,
  fa,
  Do = !1,
  Sr = [],
  pt = null,
  mt = null,
  ht = null,
  Xn = new Map(),
  Jn = new Map(),
  st = [],
  Kd =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function xu(e, t) {
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
function Nn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = fr(t)), t !== null && Ci(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Yd(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (pt = Nn(pt, e, t, n, r, l)), !0;
    case "dragenter":
      return (mt = Nn(mt, e, t, n, r, l)), !0;
    case "mouseover":
      return (ht = Nn(ht, e, t, n, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return Xn.set(o, Nn(Xn.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), Jn.set(o, Nn(Jn.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function pa(e) {
  var t = Rt(e.target);
  if (t !== null) {
    var n = Vt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = ta(n)), t !== null)) {
          (e.blockedOn = t),
            fa(e.priority, function () {
              ca(n);
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
    var n = Oo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (zo = r), n.target.dispatchEvent(r), (zo = null);
    } else return (t = fr(n)), t !== null && Ci(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Eu(e, t, n) {
  Dr(e) && n.delete(t);
}
function Gd() {
  (Do = !1),
    pt !== null && Dr(pt) && (pt = null),
    mt !== null && Dr(mt) && (mt = null),
    ht !== null && Dr(ht) && (ht = null),
    Xn.forEach(Eu),
    Jn.forEach(Eu);
}
function Cn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Do ||
      ((Do = !0),
      Ee.unstable_scheduleCallback(Ee.unstable_NormalPriority, Gd)));
}
function Zn(e) {
  function t(l) {
    return Cn(l, e);
  }
  if (0 < Sr.length) {
    Cn(Sr[0], e);
    for (var n = 1; n < Sr.length; n++) {
      var r = Sr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    pt !== null && Cn(pt, e),
      mt !== null && Cn(mt, e),
      ht !== null && Cn(ht, e),
      Xn.forEach(t),
      Jn.forEach(t),
      n = 0;
    n < st.length;
    n++
  )
    (r = st[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < st.length && ((n = st[0]), n.blockedOn === null); )
    pa(n), n.blockedOn === null && st.shift();
}
var un = nt.ReactCurrentBatchConfig,
  Jr = !0;
function Xd(e, t, n, r) {
  var l = O,
    o = un.transition;
  un.transition = null;
  try {
    (O = 1), Pi(e, t, n, r);
  } finally {
    (O = l), (un.transition = o);
  }
}
function Jd(e, t, n, r) {
  var l = O,
    o = un.transition;
  un.transition = null;
  try {
    (O = 4), Pi(e, t, n, r);
  } finally {
    (O = l), (un.transition = o);
  }
}
function Pi(e, t, n, r) {
  if (Jr) {
    var l = Oo(e, t, n, r);
    if (l === null) eo(e, t, r, Zr, n), xu(e, r);
    else if (Yd(l, e, t, n, r)) r.stopPropagation();
    else if ((xu(e, r), t & 4 && -1 < Kd.indexOf(e))) {
      for (; l !== null; ) {
        var o = fr(l);
        if (
          (o !== null && aa(o),
          (o = Oo(e, t, n, r)),
          o === null && eo(e, t, r, Zr, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else eo(e, t, r, null, n);
  }
}
var Zr = null;
function Oo(e, t, n, r) {
  if (((Zr = null), (e = xi(r)), (e = Rt(e)), e !== null))
    if (((t = Vt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = ta(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Zr = e), null;
}
function ma(e) {
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
      switch (Fd()) {
        case Ei:
          return 1;
        case oa:
          return 4;
        case Gr:
        case $d:
          return 16;
        case ia:
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
function ha() {
  if (Or) return Or;
  var e,
    t = Li,
    n = t.length,
    r,
    l = "value" in ct ? ct.value : ct.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (Or = l.slice(e, 1 < r ? 1 - r : void 0));
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
function Nu() {
  return !1;
}
function Ce(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(o) : o[u]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? xr
        : Nu),
      (this.isPropagationStopped = Nu),
      this
    );
  }
  return (
    H(t.prototype, {
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
  Ti = Ce(_n),
  dr = H({}, _n, { view: 0, detail: 0 }),
  Zd = Ce(dr),
  Ql,
  Kl,
  Pn,
  _l = H({}, dr, {
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
              ? ((Ql = e.screenX - Pn.screenX), (Kl = e.screenY - Pn.screenY))
              : (Kl = Ql = 0),
            (Pn = e)),
          Ql);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Kl;
    },
  }),
  Cu = Ce(_l),
  qd = H({}, _l, { dataTransfer: 0 }),
  bd = Ce(qd),
  ef = H({}, dr, { relatedTarget: 0 }),
  Yl = Ce(ef),
  tf = H({}, _n, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  nf = Ce(tf),
  rf = H({}, _n, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  lf = Ce(rf),
  of = H({}, _n, { data: 0 }),
  Pu = Ce(of),
  uf = {
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
  sf = {
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
  af = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function cf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = af[e]) ? !!t[e] : !1;
}
function zi() {
  return cf;
}
var df = H({}, dr, {
    key: function (e) {
      if (e.key) {
        var t = uf[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Fr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? sf[e.keyCode] || "Unidentified"
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
  ff = Ce(df),
  pf = H({}, _l, {
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
  Lu = Ce(pf),
  mf = H({}, dr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: zi,
  }),
  hf = Ce(mf),
  gf = H({}, _n, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  vf = Ce(gf),
  yf = H({}, _l, {
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
  _f = Ce(yf),
  wf = [9, 13, 27, 32],
  Ri = qe && "CompositionEvent" in window,
  $n = null;
qe && "documentMode" in document && ($n = document.documentMode);
var kf = qe && "TextEvent" in window && !$n,
  ga = qe && (!Ri || ($n && 8 < $n && 11 >= $n)),
  Tu = String.fromCharCode(32),
  zu = !1;
function va(e, t) {
  switch (e) {
    case "keyup":
      return wf.indexOf(t.keyCode) !== -1;
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
function ya(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Yt = !1;
function Sf(e, t) {
  switch (e) {
    case "compositionend":
      return ya(t);
    case "keypress":
      return t.which !== 32 ? null : ((zu = !0), Tu);
    case "textInput":
      return (e = t.data), e === Tu && zu ? null : e;
    default:
      return null;
  }
}
function xf(e, t) {
  if (Yt)
    return e === "compositionend" || (!Ri && va(e, t))
      ? ((e = ha()), (Or = Li = ct = null), (Yt = !1), e)
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
      return ga && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Ef = {
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
function Ru(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Ef[e.type] : t === "textarea";
}
function _a(e, t, n, r) {
  Js(r),
    (t = qr(t, "onChange")),
    0 < t.length &&
      ((n = new Ti("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Un = null,
  qn = null;
function Nf(e) {
  za(e, 0);
}
function wl(e) {
  var t = Jt(e);
  if (Ws(t)) return e;
}
function Cf(e, t) {
  if (e === "change") return t;
}
var wa = !1;
if (qe) {
  var Gl;
  if (qe) {
    var Xl = "oninput" in document;
    if (!Xl) {
      var ju = document.createElement("div");
      ju.setAttribute("oninput", "return;"),
        (Xl = typeof ju.oninput == "function");
    }
    Gl = Xl;
  } else Gl = !1;
  wa = Gl && (!document.documentMode || 9 < document.documentMode);
}
function Iu() {
  Un && (Un.detachEvent("onpropertychange", ka), (qn = Un = null));
}
function ka(e) {
  if (e.propertyName === "value" && wl(qn)) {
    var t = [];
    _a(t, qn, e, xi(e)), ea(Nf, t);
  }
}
function Pf(e, t, n) {
  e === "focusin"
    ? (Iu(), (Un = t), (qn = n), Un.attachEvent("onpropertychange", ka))
    : e === "focusout" && Iu();
}
function Lf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return wl(qn);
}
function Tf(e, t) {
  if (e === "click") return wl(t);
}
function zf(e, t) {
  if (e === "input" || e === "change") return wl(t);
}
function Rf(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Be = typeof Object.is == "function" ? Object.is : Rf;
function bn(e, t) {
  if (Be(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!yo.call(t, l) || !Be(e[l], t[l])) return !1;
  }
  return !0;
}
function Mu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Du(e, t) {
  var n = Mu(e);
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
    n = Mu(n);
  }
}
function Sa(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Sa(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function xa() {
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
function jf(e) {
  var t = xa(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Sa(n.ownerDocument.documentElement, n)
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
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = Du(n, o));
        var i = Du(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
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
var If = qe && "documentMode" in document && 11 >= document.documentMode,
  Gt = null,
  Fo = null,
  Bn = null,
  $o = !1;
function Ou(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  $o ||
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
    (Bn && bn(Bn, r)) ||
      ((Bn = r),
      (r = qr(Fo, "onSelect")),
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
  Jl = {},
  Ea = {};
qe &&
  ((Ea = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Xt.animationend.animation,
    delete Xt.animationiteration.animation,
    delete Xt.animationstart.animation),
  "TransitionEvent" in window || delete Xt.transitionend.transition);
function kl(e) {
  if (Jl[e]) return Jl[e];
  if (!Xt[e]) return e;
  var t = Xt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ea) return (Jl[e] = t[n]);
  return e;
}
var Na = kl("animationend"),
  Ca = kl("animationiteration"),
  Pa = kl("animationstart"),
  La = kl("transitionend"),
  Ta = new Map(),
  Fu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function xt(e, t) {
  Ta.set(e, t), At(t, [e]);
}
for (var Zl = 0; Zl < Fu.length; Zl++) {
  var ql = Fu[Zl],
    Mf = ql.toLowerCase(),
    Df = ql[0].toUpperCase() + ql.slice(1);
  xt(Mf, "on" + Df);
}
xt(Na, "onAnimationEnd");
xt(Ca, "onAnimationIteration");
xt(Pa, "onAnimationStart");
xt("dblclick", "onDoubleClick");
xt("focusin", "onFocus");
xt("focusout", "onBlur");
xt(La, "onTransitionEnd");
dn("onMouseEnter", ["mouseout", "mouseover"]);
dn("onMouseLeave", ["mouseout", "mouseover"]);
dn("onPointerEnter", ["pointerout", "pointerover"]);
dn("onPointerLeave", ["pointerout", "pointerover"]);
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
var Dn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Of = new Set("cancel close invalid load scroll toggle".split(" ").concat(Dn));
function $u(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Id(r, t, void 0, e), (e.currentTarget = null);
}
function za(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i],
            s = u.instance,
            a = u.currentTarget;
          if (((u = u.listener), s !== o && l.isPropagationStopped())) break e;
          $u(l, u, a), (o = s);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((u = r[i]),
            (s = u.instance),
            (a = u.currentTarget),
            (u = u.listener),
            s !== o && l.isPropagationStopped())
          )
            break e;
          $u(l, u, a), (o = s);
        }
    }
  }
  if (Yr) throw ((e = Io), (Yr = !1), (Io = null), e);
}
function U(e, t) {
  var n = t[Wo];
  n === void 0 && (n = t[Wo] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Ra(t, e, 2, !1), n.add(r));
}
function bl(e, t, n) {
  var r = 0;
  t && (r |= 4), Ra(n, e, r, t);
}
var Nr = "_reactListening" + Math.random().toString(36).slice(2);
function er(e) {
  if (!e[Nr]) {
    (e[Nr] = !0),
      $s.forEach(function (n) {
        n !== "selectionchange" && (Of.has(n) || bl(n, !1, e), bl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Nr] || ((t[Nr] = !0), bl("selectionchange", !1, t));
  }
}
function Ra(e, t, n, r) {
  switch (ma(t)) {
    case 1:
      var l = Xd;
      break;
    case 4:
      l = Jd;
      break;
    default:
      l = Pi;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !jo ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function eo(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var s = i.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = i.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; u !== null; ) {
          if (((i = Rt(u)), i === null)) return;
          if (((s = i.tag), s === 5 || s === 6)) {
            r = o = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  ea(function () {
    var a = o,
      h = xi(n),
      g = [];
    e: {
      var m = Ta.get(e);
      if (m !== void 0) {
        var w = Ti,
          k = e;
        switch (e) {
          case "keypress":
            if (Fr(n) === 0) break e;
          case "keydown":
          case "keyup":
            w = ff;
            break;
          case "focusin":
            (k = "focus"), (w = Yl);
            break;
          case "focusout":
            (k = "blur"), (w = Yl);
            break;
          case "beforeblur":
          case "afterblur":
            w = Yl;
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
            w = Cu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = bd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = hf;
            break;
          case Na:
          case Ca:
          case Pa:
            w = nf;
            break;
          case La:
            w = vf;
            break;
          case "scroll":
            w = Zd;
            break;
          case "wheel":
            w = _f;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = lf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = Lu;
        }
        var _ = (t & 4) !== 0,
          T = !_ && e === "scroll",
          d = _ ? (m !== null ? m + "Capture" : null) : m;
        _ = [];
        for (var c = a, f; c !== null; ) {
          f = c;
          var v = f.stateNode;
          if (
            (f.tag === 5 &&
              v !== null &&
              ((f = v),
              d !== null && ((v = Gn(c, d)), v != null && _.push(tr(c, v, f)))),
            T)
          )
            break;
          c = c.return;
        }
        0 < _.length &&
          ((m = new w(m, k, null, n, h)), g.push({ event: m, listeners: _ }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (w = e === "mouseout" || e === "pointerout"),
          m &&
            n !== zo &&
            (k = n.relatedTarget || n.fromElement) &&
            (Rt(k) || k[be]))
        )
          break e;
        if (
          (w || m) &&
          ((m =
            h.window === h
              ? h
              : (m = h.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          w
            ? ((k = n.relatedTarget || n.toElement),
              (w = a),
              (k = k ? Rt(k) : null),
              k !== null &&
                ((T = Vt(k)), k !== T || (k.tag !== 5 && k.tag !== 6)) &&
                (k = null))
            : ((w = null), (k = a)),
          w !== k)
        ) {
          if (
            ((_ = Cu),
            (v = "onMouseLeave"),
            (d = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((_ = Lu),
              (v = "onPointerLeave"),
              (d = "onPointerEnter"),
              (c = "pointer")),
            (T = w == null ? m : Jt(w)),
            (f = k == null ? m : Jt(k)),
            (m = new _(v, c + "leave", w, n, h)),
            (m.target = T),
            (m.relatedTarget = f),
            (v = null),
            Rt(h) === a &&
              ((_ = new _(d, c + "enter", k, n, h)),
              (_.target = f),
              (_.relatedTarget = T),
              (v = _)),
            (T = v),
            w && k)
          )
            t: {
              for (_ = w, d = k, c = 0, f = _; f; f = Wt(f)) c++;
              for (f = 0, v = d; v; v = Wt(v)) f++;
              for (; 0 < c - f; ) (_ = Wt(_)), c--;
              for (; 0 < f - c; ) (d = Wt(d)), f--;
              for (; c--; ) {
                if (_ === d || (d !== null && _ === d.alternate)) break t;
                (_ = Wt(_)), (d = Wt(d));
              }
              _ = null;
            }
          else _ = null;
          w !== null && Uu(g, m, w, _, !1),
            k !== null && T !== null && Uu(g, T, k, _, !0);
        }
      }
      e: {
        if (
          ((m = a ? Jt(a) : window),
          (w = m.nodeName && m.nodeName.toLowerCase()),
          w === "select" || (w === "input" && m.type === "file"))
        )
          var x = Cf;
        else if (Ru(m))
          if (wa) x = zf;
          else {
            x = Lf;
            var C = Pf;
          }
        else
          (w = m.nodeName) &&
            w.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (x = Tf);
        if (x && (x = x(e, a))) {
          _a(g, x, n, h);
          break e;
        }
        C && C(e, m, a),
          e === "focusout" &&
            (C = m._wrapperState) &&
            C.controlled &&
            m.type === "number" &&
            No(m, "number", m.value);
      }
      switch (((C = a ? Jt(a) : window), e)) {
        case "focusin":
          (Ru(C) || C.contentEditable === "true") &&
            ((Gt = C), (Fo = a), (Bn = null));
          break;
        case "focusout":
          Bn = Fo = Gt = null;
          break;
        case "mousedown":
          $o = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ($o = !1), Ou(g, n, h);
          break;
        case "selectionchange":
          if (If) break;
        case "keydown":
        case "keyup":
          Ou(g, n, h);
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
          ? va(e, n) && (L = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (L = "onCompositionStart");
      L &&
        (ga &&
          n.locale !== "ko" &&
          (Yt || L !== "onCompositionStart"
            ? L === "onCompositionEnd" && Yt && (P = ha())
            : ((ct = h),
              (Li = "value" in ct ? ct.value : ct.textContent),
              (Yt = !0))),
        (C = qr(a, L)),
        0 < C.length &&
          ((L = new Pu(L, e, null, n, h)),
          g.push({ event: L, listeners: C }),
          P ? (L.data = P) : ((P = ya(n)), P !== null && (L.data = P)))),
        (P = kf ? Sf(e, n) : xf(e, n)) &&
          ((a = qr(a, "onBeforeInput")),
          0 < a.length &&
            ((h = new Pu("onBeforeInput", "beforeinput", null, n, h)),
            g.push({ event: h, listeners: a }),
            (h.data = P)));
    }
    za(g, t);
  });
}
function tr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function qr(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = Gn(e, n)),
      o != null && r.unshift(tr(e, o, l)),
      (o = Gn(e, t)),
      o != null && r.push(tr(e, o, l))),
      (e = e.return);
  }
  return r;
}
function Wt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Uu(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      a = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      a !== null &&
      ((u = a),
      l
        ? ((s = Gn(n, o)), s != null && i.unshift(tr(n, s, u)))
        : l || ((s = Gn(n, o)), s != null && i.push(tr(n, s, u)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Ff = /\r\n?/g,
  $f = /\u0000|\uFFFD/g;
function Bu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Ff,
      `
`
    )
    .replace($f, "");
}
function Cr(e, t, n) {
  if (((t = Bu(t)), Bu(e) !== t && n)) throw Error(y(425));
}
function br() {}
var Uo = null,
  Bo = null;
function Ao(e, t) {
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
var Vo = typeof setTimeout == "function" ? setTimeout : void 0,
  Uf = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Au = typeof Promise == "function" ? Promise : void 0,
  Bf =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Au < "u"
      ? function (e) {
          return Au.resolve(null).then(e).catch(Af);
        }
      : Vo;
function Af(e) {
  setTimeout(function () {
    throw e;
  });
}
function to(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Zn(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
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
function Vu(e) {
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
var wn = Math.random().toString(36).slice(2),
  We = "__reactFiber$" + wn,
  nr = "__reactProps$" + wn,
  be = "__reactContainer$" + wn,
  Wo = "__reactEvents$" + wn,
  Vf = "__reactListeners$" + wn,
  Wf = "__reactHandles$" + wn;
function Rt(e) {
  var t = e[We];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[be] || n[We])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Vu(e); e !== null; ) {
          if ((n = e[We])) return n;
          e = Vu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function fr(e) {
  return (
    (e = e[We] || e[be]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Jt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(y(33));
}
function Sl(e) {
  return e[nr] || null;
}
var Ho = [],
  Zt = -1;
function Et(e) {
  return { current: e };
}
function B(e) {
  0 > Zt || ((e.current = Ho[Zt]), (Ho[Zt] = null), Zt--);
}
function $(e, t) {
  Zt++, (Ho[Zt] = e.current), (e.current = t);
}
var St = {},
  ae = Et(St),
  ve = Et(!1),
  Ot = St;
function fn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return St;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function ye(e) {
  return (e = e.childContextTypes), e != null;
}
function el() {
  B(ve), B(ae);
}
function Wu(e, t, n) {
  if (ae.current !== St) throw Error(y(168));
  $(ae, t), $(ve, n);
}
function ja(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(y(108, Cd(e) || "Unknown", l));
  return H({}, n, r);
}
function tl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || St),
    (Ot = ae.current),
    $(ae, e),
    $(ve, ve.current),
    !0
  );
}
function Hu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(y(169));
  n
    ? ((e = ja(e, t, Ot)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      B(ve),
      B(ae),
      $(ae, e))
    : B(ve),
    $(ve, n);
}
var Ge = null,
  xl = !1,
  no = !1;
function Ia(e) {
  Ge === null ? (Ge = [e]) : Ge.push(e);
}
function Hf(e) {
  (xl = !0), Ia(e);
}
function Nt() {
  if (!no && Ge !== null) {
    no = !0;
    var e = 0,
      t = O;
    try {
      var n = Ge;
      for (O = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ge = null), (xl = !1);
    } catch (l) {
      throw (Ge !== null && (Ge = Ge.slice(e + 1)), la(Ei, Nt), l);
    } finally {
      (O = t), (no = !1);
    }
  }
  return null;
}
var qt = [],
  bt = 0,
  nl = null,
  rl = 0,
  Pe = [],
  Le = 0,
  Ft = null,
  Xe = 1,
  Je = "";
function Tt(e, t) {
  (qt[bt++] = rl), (qt[bt++] = nl), (nl = e), (rl = t);
}
function Ma(e, t, n) {
  (Pe[Le++] = Xe), (Pe[Le++] = Je), (Pe[Le++] = Ft), (Ft = e);
  var r = Xe;
  e = Je;
  var l = 32 - $e(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - $e(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (Xe = (1 << (32 - $e(t) + l)) | (n << l) | r),
      (Je = o + e);
  } else (Xe = (1 << o) | (n << l) | r), (Je = e);
}
function Ii(e) {
  e.return !== null && (Tt(e, 1), Ma(e, 1, 0));
}
function Mi(e) {
  for (; e === nl; )
    (nl = qt[--bt]), (qt[bt] = null), (rl = qt[--bt]), (qt[bt] = null);
  for (; e === Ft; )
    (Ft = Pe[--Le]),
      (Pe[Le] = null),
      (Je = Pe[--Le]),
      (Pe[Le] = null),
      (Xe = Pe[--Le]),
      (Pe[Le] = null);
}
var xe = null,
  Se = null,
  A = !1,
  Fe = null;
function Da(e, t) {
  var n = Te(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Qu(e, t) {
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
          ? ((n = Ft !== null ? { id: Xe, overflow: Je } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Te(18, null, null, 0)),
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
function Qo(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ko(e) {
  if (A) {
    var t = Se;
    if (t) {
      var n = t;
      if (!Qu(e, t)) {
        if (Qo(e)) throw Error(y(418));
        t = gt(n.nextSibling);
        var r = xe;
        t && Qu(e, t)
          ? Da(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (A = !1), (xe = e));
      }
    } else {
      if (Qo(e)) throw Error(y(418));
      (e.flags = (e.flags & -4097) | 2), (A = !1), (xe = e);
    }
  }
}
function Ku(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  xe = e;
}
function Pr(e) {
  if (e !== xe) return !1;
  if (!A) return Ku(e), (A = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Ao(e.type, e.memoizedProps))),
    t && (t = Se))
  ) {
    if (Qo(e)) throw (Oa(), Error(y(418)));
    for (; t; ) Da(e, t), (t = gt(t.nextSibling));
  }
  if ((Ku(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(y(317));
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
function Oa() {
  for (var e = Se; e; ) e = gt(e.nextSibling);
}
function pn() {
  (Se = xe = null), (A = !1);
}
function Di(e) {
  Fe === null ? (Fe = [e]) : Fe.push(e);
}
var Qf = nt.ReactCurrentBatchConfig;
function De(e, t) {
  if (e && e.defaultProps) {
    (t = H({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var ll = Et(null),
  ol = null,
  en = null,
  Oi = null;
function Fi() {
  Oi = en = ol = null;
}
function $i(e) {
  var t = ll.current;
  B(ll), (e._currentValue = t);
}
function Yo(e, t, n) {
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
function sn(e, t) {
  (ol = e),
    (Oi = en = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ge = !0), (e.firstContext = null));
}
function Re(e) {
  var t = e._currentValue;
  if (Oi !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), en === null)) {
      if (ol === null) throw Error(y(308));
      (en = e), (ol.dependencies = { lanes: 0, firstContext: e });
    } else en = en.next = e;
  return t;
}
var jt = null;
function Ui(e) {
  jt === null ? (jt = [e]) : jt.push(e);
}
function Fa(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Ui(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    et(e, r)
  );
}
function et(e, t) {
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
var ut = !1;
function Bi(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function $a(e, t) {
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
function Ze(e, t) {
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
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      et(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Ui(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    et(e, n)
  );
}
function $r(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ni(e, n);
  }
}
function Yu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
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
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
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
function il(e, t, n, r) {
  var l = e.updateQueue;
  ut = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      a = s.next;
    (s.next = null), i === null ? (o = a) : (i.next = a), (i = s);
    var h = e.alternate;
    h !== null &&
      ((h = h.updateQueue),
      (u = h.lastBaseUpdate),
      u !== i &&
        (u === null ? (h.firstBaseUpdate = a) : (u.next = a),
        (h.lastBaseUpdate = s)));
  }
  if (o !== null) {
    var g = l.baseState;
    (i = 0), (h = a = s = null), (u = o);
    do {
      var m = u.lane,
        w = u.eventTime;
      if ((r & m) === m) {
        h !== null &&
          (h = h.next =
            {
              eventTime: w,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var k = e,
            _ = u;
          switch (((m = t), (w = n), _.tag)) {
            case 1:
              if (((k = _.payload), typeof k == "function")) {
                g = k.call(w, g, m);
                break e;
              }
              g = k;
              break e;
            case 3:
              k.flags = (k.flags & -65537) | 128;
            case 0:
              if (
                ((k = _.payload),
                (m = typeof k == "function" ? k.call(w, g, m) : k),
                m == null)
              )
                break e;
              g = H({}, g, m);
              break e;
            case 2:
              ut = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (m = l.effects),
          m === null ? (l.effects = [u]) : m.push(u));
      } else
        (w = {
          eventTime: w,
          lane: m,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          h === null ? ((a = h = w), (s = g)) : (h = h.next = w),
          (i |= m);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (m = u),
          (u = m.next),
          (m.next = null),
          (l.lastBaseUpdate = m),
          (l.shared.pending = null);
      }
    } while (1);
    if (
      (h === null && (s = g),
      (l.baseState = s),
      (l.firstBaseUpdate = a),
      (l.lastBaseUpdate = h),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (Ut |= i), (e.lanes = i), (e.memoizedState = g);
  }
}
function Gu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(y(191, l));
        l.call(r);
      }
    }
}
var Ua = new Fs.Component().refs;
function Go(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : H({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var El = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Vt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = de(),
      l = _t(e),
      o = Ze(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = vt(e, o, l)),
      t !== null && (Ue(t, e, l, r), $r(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = de(),
      l = _t(e),
      o = Ze(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = vt(e, o, l)),
      t !== null && (Ue(t, e, l, r), $r(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = de(),
      r = _t(e),
      l = Ze(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = vt(e, l, r)),
      t !== null && (Ue(t, e, r, n), $r(t, e, r));
  },
};
function Xu(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !bn(n, r) || !bn(l, o)
      : !0
  );
}
function Ba(e, t, n) {
  var r = !1,
    l = St,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Re(o))
      : ((l = ye(t) ? Ot : ae.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? fn(e, l) : St)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = El),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Ju(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && El.enqueueReplaceState(t, t.state, null);
}
function Xo(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = Ua), Bi(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (l.context = Re(o))
    : ((o = ye(t) ? Ot : ae.current), (l.context = fn(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Go(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && El.enqueueReplaceState(l, l.state, null),
      il(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function Ln(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(y(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(y(147, e));
      var l = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var u = l.refs;
            u === Ua && (u = l.refs = {}),
              i === null ? delete u[o] : (u[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(y(284));
    if (!n._owner) throw Error(y(290, e));
  }
  return e;
}
function Lr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      y(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Zu(e) {
  var t = e._init;
  return t(e._payload);
}
function Aa(e) {
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
  function l(d, c) {
    return (d = wt(d, c)), (d.index = 0), (d.sibling = null), d;
  }
  function o(d, c, f) {
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
  function u(d, c, f, v) {
    return c === null || c.tag !== 6
      ? ((c = ao(f, d.mode, v)), (c.return = d), c)
      : ((c = l(c, f)), (c.return = d), c);
  }
  function s(d, c, f, v) {
    var x = f.type;
    return x === Kt
      ? h(d, c, f.props.children, v, f.key)
      : c !== null &&
        (c.elementType === x ||
          (typeof x == "object" &&
            x !== null &&
            x.$$typeof === it &&
            Zu(x) === c.type))
      ? ((v = l(c, f.props)), (v.ref = Ln(d, c, f)), (v.return = d), v)
      : ((v = Hr(f.type, f.key, f.props, null, d.mode, v)),
        (v.ref = Ln(d, c, f)),
        (v.return = d),
        v);
  }
  function a(d, c, f, v) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== f.containerInfo ||
      c.stateNode.implementation !== f.implementation
      ? ((c = co(f, d.mode, v)), (c.return = d), c)
      : ((c = l(c, f.children || [])), (c.return = d), c);
  }
  function h(d, c, f, v, x) {
    return c === null || c.tag !== 7
      ? ((c = Dt(f, d.mode, v, x)), (c.return = d), c)
      : ((c = l(c, f)), (c.return = d), c);
  }
  function g(d, c, f) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = ao("" + c, d.mode, f)), (c.return = d), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case vr:
          return (
            (f = Hr(c.type, c.key, c.props, null, d.mode, f)),
            (f.ref = Ln(d, null, c)),
            (f.return = d),
            f
          );
        case Qt:
          return (c = co(c, d.mode, f)), (c.return = d), c;
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
  function m(d, c, f, v) {
    var x = c !== null ? c.key : null;
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return x !== null ? null : u(d, c, "" + f, v);
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case vr:
          return f.key === x ? s(d, c, f, v) : null;
        case Qt:
          return f.key === x ? a(d, c, f, v) : null;
        case it:
          return (x = f._init), m(d, c, x(f._payload), v);
      }
      if (In(f) || xn(f)) return x !== null ? null : h(d, c, f, v, null);
      Lr(d, f);
    }
    return null;
  }
  function w(d, c, f, v, x) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return (d = d.get(f) || null), u(c, d, "" + v, x);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case vr:
          return (d = d.get(v.key === null ? f : v.key) || null), s(c, d, v, x);
        case Qt:
          return (d = d.get(v.key === null ? f : v.key) || null), a(c, d, v, x);
        case it:
          var C = v._init;
          return w(d, c, f, C(v._payload), x);
      }
      if (In(v) || xn(v)) return (d = d.get(f) || null), h(c, d, v, x, null);
      Lr(c, v);
    }
    return null;
  }
  function k(d, c, f, v) {
    for (
      var x = null, C = null, P = c, L = (c = 0), K = null;
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
        (c = o(M, c, L)),
        C === null ? (x = M) : (C.sibling = M),
        (C = M),
        (P = K);
    }
    if (L === f.length) return n(d, P), A && Tt(d, L), x;
    if (P === null) {
      for (; L < f.length; L++)
        (P = g(d, f[L], v)),
          P !== null &&
            ((c = o(P, c, L)), C === null ? (x = P) : (C.sibling = P), (C = P));
      return A && Tt(d, L), x;
    }
    for (P = r(d, P); L < f.length; L++)
      (K = w(P, d, L, f[L], v)),
        K !== null &&
          (e && K.alternate !== null && P.delete(K.key === null ? L : K.key),
          (c = o(K, c, L)),
          C === null ? (x = K) : (C.sibling = K),
          (C = K));
    return (
      e &&
        P.forEach(function (Ie) {
          return t(d, Ie);
        }),
      A && Tt(d, L),
      x
    );
  }
  function _(d, c, f, v) {
    var x = xn(f);
    if (typeof x != "function") throw Error(y(150));
    if (((f = x.call(f)), f == null)) throw Error(y(151));
    for (
      var C = (x = null), P = c, L = (c = 0), K = null, M = f.next();
      P !== null && !M.done;
      L++, M = f.next()
    ) {
      P.index > L ? ((K = P), (P = null)) : (K = P.sibling);
      var Ie = m(d, P, M.value, v);
      if (Ie === null) {
        P === null && (P = K);
        break;
      }
      e && P && Ie.alternate === null && t(d, P),
        (c = o(Ie, c, L)),
        C === null ? (x = Ie) : (C.sibling = Ie),
        (C = Ie),
        (P = K);
    }
    if (M.done) return n(d, P), A && Tt(d, L), x;
    if (P === null) {
      for (; !M.done; L++, M = f.next())
        (M = g(d, M.value, v)),
          M !== null &&
            ((c = o(M, c, L)), C === null ? (x = M) : (C.sibling = M), (C = M));
      return A && Tt(d, L), x;
    }
    for (P = r(d, P); !M.done; L++, M = f.next())
      (M = w(P, d, L, M.value, v)),
        M !== null &&
          (e && M.alternate !== null && P.delete(M.key === null ? L : M.key),
          (c = o(M, c, L)),
          C === null ? (x = M) : (C.sibling = M),
          (C = M));
    return (
      e &&
        P.forEach(function (kn) {
          return t(d, kn);
        }),
      A && Tt(d, L),
      x
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
            for (var x = f.key, C = c; C !== null; ) {
              if (C.key === x) {
                if (((x = f.type), x === Kt)) {
                  if (C.tag === 7) {
                    n(d, C.sibling),
                      (c = l(C, f.props.children)),
                      (c.return = d),
                      (d = c);
                    break e;
                  }
                } else if (
                  C.elementType === x ||
                  (typeof x == "object" &&
                    x !== null &&
                    x.$$typeof === it &&
                    Zu(x) === C.type)
                ) {
                  n(d, C.sibling),
                    (c = l(C, f.props)),
                    (c.ref = Ln(d, C, f)),
                    (c.return = d),
                    (d = c);
                  break e;
                }
                n(d, C);
                break;
              } else t(d, C);
              C = C.sibling;
            }
            f.type === Kt
              ? ((c = Dt(f.props.children, d.mode, v, f.key)),
                (c.return = d),
                (d = c))
              : ((v = Hr(f.type, f.key, f.props, null, d.mode, v)),
                (v.ref = Ln(d, c, f)),
                (v.return = d),
                (d = v));
          }
          return i(d);
        case Qt:
          e: {
            for (C = f.key; c !== null; ) {
              if (c.key === C)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === f.containerInfo &&
                  c.stateNode.implementation === f.implementation
                ) {
                  n(d, c.sibling),
                    (c = l(c, f.children || [])),
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
            (c = co(f, d.mode, v)), (c.return = d), (d = c);
          }
          return i(d);
        case it:
          return (C = f._init), T(d, c, C(f._payload), v);
      }
      if (In(f)) return k(d, c, f, v);
      if (xn(f)) return _(d, c, f, v);
      Lr(d, f);
    }
    return (typeof f == "string" && f !== "") || typeof f == "number"
      ? ((f = "" + f),
        c !== null && c.tag === 6
          ? (n(d, c.sibling), (c = l(c, f)), (c.return = d), (d = c))
          : (n(d, c), (c = ao(f, d.mode, v)), (c.return = d), (d = c)),
        i(d))
      : n(d, c);
  }
  return T;
}
var mn = Aa(!0),
  Va = Aa(!1),
  pr = {},
  Qe = Et(pr),
  rr = Et(pr),
  lr = Et(pr);
function It(e) {
  if (e === pr) throw Error(y(174));
  return e;
}
function Ai(e, t) {
  switch (($(lr, t), $(rr, e), $(Qe, pr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Po(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Po(t, e));
  }
  B(Qe), $(Qe, t);
}
function hn() {
  B(Qe), B(rr), B(lr);
}
function Wa(e) {
  It(lr.current);
  var t = It(Qe.current),
    n = Po(t, e.type);
  t !== n && ($(rr, e), $(Qe, n));
}
function Vi(e) {
  rr.current === e && (B(Qe), B(rr));
}
var V = Et(0);
function ul(e) {
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
var ro = [];
function Wi() {
  for (var e = 0; e < ro.length; e++)
    ro[e]._workInProgressVersionPrimary = null;
  ro.length = 0;
}
var Ur = nt.ReactCurrentDispatcher,
  lo = nt.ReactCurrentBatchConfig,
  $t = 0,
  W = null,
  Z = null,
  te = null,
  sl = !1,
  An = !1,
  or = 0,
  Kf = 0;
function ie() {
  throw Error(y(321));
}
function Hi(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Be(e[n], t[n])) return !1;
  return !0;
}
function Qi(e, t, n, r, l, o) {
  if (
    (($t = o),
    (W = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ur.current = e === null || e.memoizedState === null ? Jf : Zf),
    (e = n(r, l)),
    An)
  ) {
    o = 0;
    do {
      if (((An = !1), (or = 0), 25 <= o)) throw Error(y(301));
      (o += 1),
        (te = Z = null),
        (t.updateQueue = null),
        (Ur.current = qf),
        (e = n(r, l));
    } while (An);
  }
  if (
    ((Ur.current = al),
    (t = Z !== null && Z.next !== null),
    ($t = 0),
    (te = Z = W = null),
    (sl = !1),
    t)
  )
    throw Error(y(300));
  return e;
}
function Ki() {
  var e = or !== 0;
  return (or = 0), e;
}
function Ve() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return te === null ? (W.memoizedState = te = e) : (te = te.next = e), te;
}
function je() {
  if (Z === null) {
    var e = W.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Z.next;
  var t = te === null ? W.memoizedState : te.next;
  if (t !== null) (te = t), (Z = e);
  else {
    if (e === null) throw Error(y(310));
    (Z = e),
      (e = {
        memoizedState: Z.memoizedState,
        baseState: Z.baseState,
        baseQueue: Z.baseQueue,
        queue: Z.queue,
        next: null,
      }),
      te === null ? (W.memoizedState = te = e) : (te = te.next = e);
  }
  return te;
}
function ir(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function oo(e) {
  var t = je(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = Z,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var u = (i = null),
      s = null,
      a = o;
    do {
      var h = a.lane;
      if (($t & h) === h)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: a.action,
              hasEagerState: a.hasEagerState,
              eagerState: a.eagerState,
              next: null,
            }),
          (r = a.hasEagerState ? a.eagerState : e(r, a.action));
      else {
        var g = {
          lane: h,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null,
        };
        s === null ? ((u = s = g), (i = r)) : (s = s.next = g),
          (W.lanes |= h),
          (Ut |= h);
      }
      a = a.next;
    } while (a !== null && a !== o);
    s === null ? (i = r) : (s.next = u),
      Be(r, t.memoizedState) || (ge = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (W.lanes |= o), (Ut |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function io(e) {
  var t = je(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    Be(o, t.memoizedState) || (ge = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Ha() {}
function Qa(e, t) {
  var n = W,
    r = je(),
    l = t(),
    o = !Be(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (ge = !0)),
    (r = r.queue),
    Yi(Ga.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (te !== null && te.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ur(9, Ya.bind(null, n, r, l, t), void 0, null),
      ne === null)
    )
      throw Error(y(349));
    $t & 30 || Ka(n, t, l);
  }
  return l;
}
function Ka(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = W.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (W.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Ya(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Xa(t) && Ja(e);
}
function Ga(e, t, n) {
  return n(function () {
    Xa(t) && Ja(e);
  });
}
function Xa(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Be(e, n);
  } catch {
    return !0;
  }
}
function Ja(e) {
  var t = et(e, 1);
  t !== null && Ue(t, e, 1, -1);
}
function qu(e) {
  var t = Ve();
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
    (e = e.dispatch = Xf.bind(null, W, e)),
    [t.memoizedState, e]
  );
}
function ur(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = W.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (W.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Za() {
  return je().memoizedState;
}
function Br(e, t, n, r) {
  var l = Ve();
  (W.flags |= e),
    (l.memoizedState = ur(1 | t, n, void 0, r === void 0 ? null : r));
}
function Nl(e, t, n, r) {
  var l = je();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Z !== null) {
    var i = Z.memoizedState;
    if (((o = i.destroy), r !== null && Hi(r, i.deps))) {
      l.memoizedState = ur(t, n, o, r);
      return;
    }
  }
  (W.flags |= e), (l.memoizedState = ur(1 | t, n, o, r));
}
function bu(e, t) {
  return Br(8390656, 8, e, t);
}
function Yi(e, t) {
  return Nl(2048, 8, e, t);
}
function qa(e, t) {
  return Nl(4, 2, e, t);
}
function ba(e, t) {
  return Nl(4, 4, e, t);
}
function ec(e, t) {
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
function tc(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Nl(4, 4, ec.bind(null, t, e), n)
  );
}
function Gi() {}
function nc(e, t) {
  var n = je();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Hi(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function rc(e, t) {
  var n = je();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Hi(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function lc(e, t, n) {
  return $t & 21
    ? (Be(n, t) || ((n = ua()), (W.lanes |= n), (Ut |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ge = !0)), (e.memoizedState = n));
}
function Yf(e, t) {
  var n = O;
  (O = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = lo.transition;
  lo.transition = {};
  try {
    e(!1), t();
  } finally {
    (O = n), (lo.transition = r);
  }
}
function oc() {
  return je().memoizedState;
}
function Gf(e, t, n) {
  var r = _t(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    ic(e))
  )
    uc(t, n);
  else if (((n = Fa(e, t, n, r)), n !== null)) {
    var l = de();
    Ue(n, e, r, l), sc(n, t, r);
  }
}
function Xf(e, t, n) {
  var r = _t(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (ic(e)) uc(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          u = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), Be(u, i))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), Ui(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = Fa(e, t, l, r)),
      n !== null && ((l = de()), Ue(n, e, r, l), sc(n, t, r));
  }
}
function ic(e) {
  var t = e.alternate;
  return e === W || (t !== null && t === W);
}
function uc(e, t) {
  An = sl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function sc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ni(e, n);
  }
}
var al = {
    readContext: Re,
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
  Jf = {
    readContext: Re,
    useCallback: function (e, t) {
      return (Ve().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Re,
    useEffect: bu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Br(4194308, 4, ec.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Br(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Br(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ve();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Ve();
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
        (e = e.dispatch = Gf.bind(null, W, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ve();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: qu,
    useDebugValue: Gi,
    useDeferredValue: function (e) {
      return (Ve().memoizedState = e);
    },
    useTransition: function () {
      var e = qu(!1),
        t = e[0];
      return (e = Yf.bind(null, e[1])), (Ve().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = W,
        l = Ve();
      if (A) {
        if (n === void 0) throw Error(y(407));
        n = n();
      } else {
        if (((n = t()), ne === null)) throw Error(y(349));
        $t & 30 || Ka(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        bu(Ga.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        ur(9, Ya.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ve(),
        t = ne.identifierPrefix;
      if (A) {
        var n = Je,
          r = Xe;
        (n = (r & ~(1 << (32 - $e(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = or++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Kf++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Zf = {
    readContext: Re,
    useCallback: nc,
    useContext: Re,
    useEffect: Yi,
    useImperativeHandle: tc,
    useInsertionEffect: qa,
    useLayoutEffect: ba,
    useMemo: rc,
    useReducer: oo,
    useRef: Za,
    useState: function () {
      return oo(ir);
    },
    useDebugValue: Gi,
    useDeferredValue: function (e) {
      var t = je();
      return lc(t, Z.memoizedState, e);
    },
    useTransition: function () {
      var e = oo(ir)[0],
        t = je().memoizedState;
      return [e, t];
    },
    useMutableSource: Ha,
    useSyncExternalStore: Qa,
    useId: oc,
    unstable_isNewReconciler: !1,
  },
  qf = {
    readContext: Re,
    useCallback: nc,
    useContext: Re,
    useEffect: Yi,
    useImperativeHandle: tc,
    useInsertionEffect: qa,
    useLayoutEffect: ba,
    useMemo: rc,
    useReducer: io,
    useRef: Za,
    useState: function () {
      return io(ir);
    },
    useDebugValue: Gi,
    useDeferredValue: function (e) {
      var t = je();
      return Z === null ? (t.memoizedState = e) : lc(t, Z.memoizedState, e);
    },
    useTransition: function () {
      var e = io(ir)[0],
        t = je().memoizedState;
      return [e, t];
    },
    useMutableSource: Ha,
    useSyncExternalStore: Qa,
    useId: oc,
    unstable_isNewReconciler: !1,
  };
function gn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Nd(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function uo(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Jo(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var bf = typeof WeakMap == "function" ? WeakMap : Map;
function ac(e, t, n) {
  (n = Ze(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      dl || ((dl = !0), (ii = r)), Jo(e, t);
    }),
    n
  );
}
function cc(e, t, n) {
  (n = Ze(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Jo(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Jo(e, t),
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
function es(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new bf();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = pp.bind(null, e, t, n)), t.then(e, e));
}
function ts(e) {
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
function ns(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Ze(-1, 1)), (t.tag = 2), vt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var ep = nt.ReactCurrentOwner,
  ge = !1;
function ce(e, t, n, r) {
  t.child = e === null ? Va(t, null, n, r) : mn(t, e.child, n, r);
}
function rs(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    sn(t, l),
    (r = Qi(e, t, n, r, o, l)),
    (n = Ki()),
    e !== null && !ge
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        tt(e, t, l))
      : (A && n && Ii(t), (t.flags |= 1), ce(e, t, r, l), t.child)
  );
}
function ls(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !nu(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), dc(e, t, o, r, l))
      : ((e = Hr(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : bn), n(i, r) && e.ref === t.ref)
    )
      return tt(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = wt(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function dc(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (bn(o, r) && e.ref === t.ref)
      if (((ge = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (ge = !0);
      else return (t.lanes = e.lanes), tt(e, t, l);
  }
  return Zo(e, t, n, r, l);
}
function fc(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        $(nn, ke),
        (ke |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
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
        (r = o !== null ? o.baseLanes : n),
        $(nn, ke),
        (ke |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      $(nn, ke),
      (ke |= r);
  return ce(e, t, l, n), t.child;
}
function pc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Zo(e, t, n, r, l) {
  var o = ye(n) ? Ot : ae.current;
  return (
    (o = fn(t, o)),
    sn(t, l),
    (n = Qi(e, t, n, r, o, l)),
    (r = Ki()),
    e !== null && !ge
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        tt(e, t, l))
      : (A && r && Ii(t), (t.flags |= 1), ce(e, t, n, l), t.child)
  );
}
function os(e, t, n, r, l) {
  if (ye(n)) {
    var o = !0;
    tl(t);
  } else o = !1;
  if ((sn(t, l), t.stateNode === null))
    Ar(e, t), Ba(t, n, r), Xo(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      u = t.memoizedProps;
    i.props = u;
    var s = i.context,
      a = n.contextType;
    typeof a == "object" && a !== null
      ? (a = Re(a))
      : ((a = ye(n) ? Ot : ae.current), (a = fn(t, a)));
    var h = n.getDerivedStateFromProps,
      g =
        typeof h == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    g ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== r || s !== a) && Ju(t, i, r, a)),
      (ut = !1);
    var m = t.memoizedState;
    (i.state = m),
      il(t, r, i, l),
      (s = t.memoizedState),
      u !== r || m !== s || ve.current || ut
        ? (typeof h == "function" && (Go(t, n, h, r), (s = t.memoizedState)),
          (u = ut || Xu(t, n, u, r, m, s, a))
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
              (t.memoizedState = s)),
          (i.props = r),
          (i.state = s),
          (i.context = a),
          (r = u))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      $a(e, t),
      (u = t.memoizedProps),
      (a = t.type === t.elementType ? u : De(t.type, u)),
      (i.props = a),
      (g = t.pendingProps),
      (m = i.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = Re(s))
        : ((s = ye(n) ? Ot : ae.current), (s = fn(t, s)));
    var w = n.getDerivedStateFromProps;
    (h =
      typeof w == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== g || m !== s) && Ju(t, i, r, s)),
      (ut = !1),
      (m = t.memoizedState),
      (i.state = m),
      il(t, r, i, l);
    var k = t.memoizedState;
    u !== g || m !== k || ve.current || ut
      ? (typeof w == "function" && (Go(t, n, w, r), (k = t.memoizedState)),
        (a = ut || Xu(t, n, a, r, m, k, s) || !1)
          ? (h ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, k, s),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, k, s)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = k)),
        (i.props = r),
        (i.state = k),
        (i.context = s),
        (r = a))
      : (typeof i.componentDidUpdate != "function" ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return qo(e, t, n, r, o, l);
}
function qo(e, t, n, r, l, o) {
  pc(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && Hu(t, n, !1), tt(e, t, o);
  (r = t.stateNode), (ep.current = t);
  var u =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = mn(t, e.child, null, o)), (t.child = mn(t, null, u, o)))
      : ce(e, t, u, o),
    (t.memoizedState = r.state),
    l && Hu(t, n, !0),
    t.child
  );
}
function mc(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Wu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Wu(e, t.context, !1),
    Ai(e, t.containerInfo);
}
function is(e, t, n, r, l) {
  return pn(), Di(l), (t.flags |= 256), ce(e, t, n, r), t.child;
}
var bo = { dehydrated: null, treeContext: null, retryLane: 0 };
function ei(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function hc(e, t, n) {
  var r = t.pendingProps,
    l = V.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    u;
  if (
    ((u = i) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    $(V, l & 1),
    e === null)
  )
    return (
      Ko(t),
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
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = Ll(i, r, 0, null)),
              (e = Dt(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = ei(n)),
              (t.memoizedState = bo),
              e)
            : Xi(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return tp(e, t, i, r, u, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (u = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = wt(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (o = wt(u, o)) : ((o = Dt(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? ei(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = bo),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = wt(o, { mode: "visible", children: r.children })),
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
    (t = Ll({ mode: "visible", children: t }, e.mode, 0, null)),
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
function tp(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = uo(Error(y(422)))), Tr(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (l = t.mode),
        (r = Ll({ mode: "visible", children: r.children }, l, 0, null)),
        (o = Dt(o, l, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && mn(t, e.child, null, i),
        (t.child.memoizedState = ei(i)),
        (t.memoizedState = bo),
        o);
  if (!(t.mode & 1)) return Tr(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (o = Error(y(419))), (r = uo(o, r, void 0)), Tr(e, t, i, r);
  }
  if (((u = (i & e.childLanes) !== 0), ge || u)) {
    if (((r = ne), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
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
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), et(e, l), Ue(r, e, l, -1));
    }
    return tu(), (r = uo(Error(y(421)))), Tr(e, t, i, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = mp.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Se = gt(l.nextSibling)),
      (xe = t),
      (A = !0),
      (Fe = null),
      e !== null &&
        ((Pe[Le++] = Xe),
        (Pe[Le++] = Je),
        (Pe[Le++] = Ft),
        (Xe = e.id),
        (Je = e.overflow),
        (Ft = t)),
      (t = Xi(t, r.children)),
      (t.flags |= 4096),
      t);
}
function us(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Yo(e.return, t, n);
}
function so(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function gc(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((ce(e, t, r.children, n), (r = V.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && us(e, n, t);
        else if (e.tag === 19) us(e, n, t);
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
  if (($(V, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && ul(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          so(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && ul(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        so(t, !0, n, null, o);
        break;
      case "together":
        so(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ar(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function tt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Ut |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(y(153));
  if (t.child !== null) {
    for (
      e = t.child, n = wt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = wt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function np(e, t, n) {
  switch (t.tag) {
    case 3:
      mc(t), pn();
      break;
    case 5:
      Wa(t);
      break;
    case 1:
      ye(t.type) && tl(t);
      break;
    case 4:
      Ai(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      $(ll, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? ($(V, V.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? hc(e, t, n)
          : ($(V, V.current & 1),
            (e = tt(e, t, n)),
            e !== null ? e.sibling : null);
      $(V, V.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return gc(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        $(V, V.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), fc(e, t, n);
  }
  return tt(e, t, n);
}
var vc, ti, yc, _c;
vc = function (e, t) {
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
yc = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), It(Qe.current);
    var o = null;
    switch (n) {
      case "input":
        (l = xo(e, l)), (r = xo(e, r)), (o = []);
        break;
      case "select":
        (l = H({}, l, { value: void 0 })),
          (r = H({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = Co(e, l)), (r = Co(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = br);
    }
    Lo(n, r);
    var i;
    n = null;
    for (a in l)
      if (!r.hasOwnProperty(a) && l.hasOwnProperty(a) && l[a] != null)
        if (a === "style") {
          var u = l[a];
          for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          a !== "dangerouslySetInnerHTML" &&
            a !== "children" &&
            a !== "suppressContentEditableWarning" &&
            a !== "suppressHydrationWarning" &&
            a !== "autoFocus" &&
            (Kn.hasOwnProperty(a)
              ? o || (o = [])
              : (o = o || []).push(a, null));
    for (a in r) {
      var s = r[a];
      if (
        ((u = l != null ? l[a] : void 0),
        r.hasOwnProperty(a) && s !== u && (s != null || u != null))
      )
        if (a === "style")
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) ||
                (s && s.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in s)
              s.hasOwnProperty(i) &&
                u[i] !== s[i] &&
                (n || (n = {}), (n[i] = s[i]));
          } else n || (o || (o = []), o.push(a, n)), (n = s);
        else
          a === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (o = o || []).push(a, s))
            : a === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (o = o || []).push(a, "" + s)
            : a !== "suppressContentEditableWarning" &&
              a !== "suppressHydrationWarning" &&
              (Kn.hasOwnProperty(a)
                ? (s != null && a === "onScroll" && U("scroll", e),
                  o || u === s || (o = []))
                : (o = o || []).push(a, s));
    }
    n && (o = o || []).push("style", n);
    var a = o;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
_c = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Tn(e, t) {
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
function ue(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function rp(e, t, n) {
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
      return ue(t), null;
    case 1:
      return ye(t.type) && el(), ue(t), null;
    case 3:
      return (
        (r = t.stateNode),
        hn(),
        B(ve),
        B(ae),
        Wi(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Pr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Fe !== null && (ai(Fe), (Fe = null)))),
        ti(e, t),
        ue(t),
        null
      );
    case 5:
      Vi(t);
      var l = It(lr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        yc(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(y(166));
          return ue(t), null;
        }
        if (((e = It(Qe.current)), Pr(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[We] = t), (r[nr] = o), (e = (t.mode & 1) !== 0), n)) {
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
              for (l = 0; l < Dn.length; l++) U(Dn[l], r);
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
              gu(r, o), U("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                U("invalid", r);
              break;
            case "textarea":
              yu(r, o), U("invalid", r);
          }
          Lo(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (o.suppressHydrationWarning !== !0 &&
                      Cr(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (o.suppressHydrationWarning !== !0 &&
                      Cr(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : Kn.hasOwnProperty(i) &&
                  u != null &&
                  i === "onScroll" &&
                  U("scroll", r);
            }
          switch (n) {
            case "input":
              yr(r), vu(r, o, !0);
              break;
            case "textarea":
              yr(r), _u(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = br);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Ks(n)),
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
            (e[We] = t),
            (e[nr] = r),
            vc(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = To(n, r)), n)) {
              case "dialog":
                U("cancel", e), U("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                U("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Dn.length; l++) U(Dn[l], e);
                l = r;
                break;
              case "source":
                U("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                U("error", e), U("load", e), (l = r);
                break;
              case "details":
                U("toggle", e), (l = r);
                break;
              case "input":
                gu(e, r), (l = xo(e, r)), U("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = H({}, r, { value: void 0 })),
                  U("invalid", e);
                break;
              case "textarea":
                yu(e, r), (l = Co(e, r)), U("invalid", e);
                break;
              default:
                l = r;
            }
            Lo(n, l), (u = l);
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var s = u[o];
                o === "style"
                  ? Xs(e, s)
                  : o === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && Ys(e, s))
                  : o === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && Yn(e, s)
                    : typeof s == "number" && Yn(e, "" + s)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Kn.hasOwnProperty(o)
                      ? s != null && o === "onScroll" && U("scroll", e)
                      : s != null && _i(e, o, s, i));
              }
            switch (n) {
              case "input":
                yr(e), vu(e, r, !1);
                break;
              case "textarea":
                yr(e), _u(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + kt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? rn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      rn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = br);
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
      return ue(t), null;
    case 6:
      if (e && t.stateNode != null) _c(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(y(166));
        if (((n = It(lr.current)), It(Qe.current), Pr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[We] = t),
            (o = r.nodeValue !== n) && ((e = xe), e !== null))
          )
            switch (e.tag) {
              case 3:
                Cr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Cr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[We] = t),
            (t.stateNode = r);
      }
      return ue(t), null;
    case 13:
      if (
        (B(V),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (A && Se !== null && t.mode & 1 && !(t.flags & 128))
          Oa(), pn(), (t.flags |= 98560), (o = !1);
        else if (((o = Pr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(y(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(y(317));
            o[We] = t;
          } else
            pn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ue(t), (o = !1);
        } else Fe !== null && (ai(Fe), (Fe = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || V.current & 1 ? q === 0 && (q = 3) : tu())),
          t.updateQueue !== null && (t.flags |= 4),
          ue(t),
          null);
    case 4:
      return (
        hn(), ti(e, t), e === null && er(t.stateNode.containerInfo), ue(t), null
      );
    case 10:
      return $i(t.type._context), ue(t), null;
    case 17:
      return ye(t.type) && el(), ue(t), null;
    case 19:
      if ((B(V), (o = t.memoizedState), o === null)) return ue(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) Tn(o, !1);
        else {
          if (q !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = ul(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Tn(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return $(V, (V.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            G() > vn &&
            ((t.flags |= 128), (r = !0), Tn(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ul(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Tn(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !A)
            )
              return ue(t), null;
          } else
            2 * G() - o.renderingStartTime > vn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Tn(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = G()),
          (t.sibling = null),
          (n = V.current),
          $(V, r ? (n & 1) | 2 : n & 1),
          t)
        : (ue(t), null);
    case 22:
    case 23:
      return (
        eu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ke & 1073741824 && (ue(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ue(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(y(156, t.tag));
}
function lp(e, t) {
  switch ((Mi(t), t.tag)) {
    case 1:
      return (
        ye(t.type) && el(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        hn(),
        B(ve),
        B(ae),
        Wi(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Vi(t), null;
    case 13:
      if ((B(V), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(y(340));
        pn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return B(V), null;
    case 4:
      return hn(), null;
    case 10:
      return $i(t.type._context), null;
    case 22:
    case 23:
      return eu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var zr = !1,
  se = !1,
  op = typeof WeakSet == "function" ? WeakSet : Set,
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
var ss = !1;
function ip(e, t) {
  if (((Uo = Jr), (e = xa()), ji(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            u = -1,
            s = -1,
            a = 0,
            h = 0,
            g = e,
            m = null;
          t: for (;;) {
            for (
              var w;
              g !== n || (l !== 0 && g.nodeType !== 3) || (u = i + l),
                g !== o || (r !== 0 && g.nodeType !== 3) || (s = i + r),
                g.nodeType === 3 && (i += g.nodeValue.length),
                (w = g.firstChild) !== null;

            )
              (m = g), (g = w);
            for (;;) {
              if (g === e) break t;
              if (
                (m === n && ++a === l && (u = i),
                m === o && ++h === r && (s = i),
                (w = g.nextSibling) !== null)
              )
                break;
              (g = m), (m = g.parentNode);
            }
            g = w;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Bo = { focusedElem: e, selectionRange: n }, Jr = !1, S = t; S !== null; )
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
                  var _ = k.memoizedProps,
                    T = k.memoizedState,
                    d = t.stateNode,
                    c = d.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? _ : De(t.type, _),
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
                throw Error(y(163));
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
  return (k = ss), (ss = !1), k;
}
function Vn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && ni(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Cl(e, t) {
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
function wc(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), wc(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[We], delete t[nr], delete t[Wo], delete t[Vf], delete t[Wf])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function kc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function as(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || kc(e.return)) return null;
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
function li(e, t, n) {
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
    for (li(e, t, n), e = e.sibling; e !== null; ) li(e, t, n), (e = e.sibling);
}
function oi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (oi(e, t, n), e = e.sibling; e !== null; ) oi(e, t, n), (e = e.sibling);
}
var re = null,
  Oe = !1;
function rt(e, t, n) {
  for (n = n.child; n !== null; ) Sc(e, t, n), (n = n.sibling);
}
function Sc(e, t, n) {
  if (He && typeof He.onCommitFiberUnmount == "function")
    try {
      He.onCommitFiberUnmount(yl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      se || tn(n, t);
    case 6:
      var r = re,
        l = Oe;
      (re = null),
        rt(e, t, n),
        (re = r),
        (Oe = l),
        re !== null &&
          (Oe
            ? ((e = re),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : re.removeChild(n.stateNode));
      break;
    case 18:
      re !== null &&
        (Oe
          ? ((e = re),
            (n = n.stateNode),
            e.nodeType === 8
              ? to(e.parentNode, n)
              : e.nodeType === 1 && to(e, n),
            Zn(e))
          : to(re, n.stateNode));
      break;
    case 4:
      (r = re),
        (l = Oe),
        (re = n.stateNode.containerInfo),
        (Oe = !0),
        rt(e, t, n),
        (re = r),
        (Oe = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !se &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && ni(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      rt(e, t, n);
      break;
    case 1:
      if (
        !se &&
        (tn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          Q(n, t, u);
        }
      rt(e, t, n);
      break;
    case 21:
      rt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((se = (r = se) || n.memoizedState !== null), rt(e, t, n), (se = r))
        : rt(e, t, n);
      break;
    default:
      rt(e, t, n);
  }
}
function cs(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new op()),
      t.forEach(function (r) {
        var l = hp.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Me(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          u = i;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (re = u.stateNode), (Oe = !1);
              break e;
            case 3:
              (re = u.stateNode.containerInfo), (Oe = !0);
              break e;
            case 4:
              (re = u.stateNode.containerInfo), (Oe = !0);
              break e;
          }
          u = u.return;
        }
        if (re === null) throw Error(y(160));
        Sc(o, i, l), (re = null), (Oe = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (a) {
        Q(l, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) xc(t, e), (t = t.sibling);
}
function xc(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Me(t, e), Ae(e), r & 4)) {
        try {
          Vn(3, e, e.return), Cl(3, e);
        } catch (_) {
          Q(e, e.return, _);
        }
        try {
          Vn(5, e, e.return);
        } catch (_) {
          Q(e, e.return, _);
        }
      }
      break;
    case 1:
      Me(t, e), Ae(e), r & 512 && n !== null && tn(n, n.return);
      break;
    case 5:
      if (
        (Me(t, e),
        Ae(e),
        r & 512 && n !== null && tn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Yn(l, "");
        } catch (_) {
          Q(e, e.return, _);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === "input" && o.type === "radio" && o.name != null && Hs(l, o),
              To(u, i);
            var a = To(u, o);
            for (i = 0; i < s.length; i += 2) {
              var h = s[i],
                g = s[i + 1];
              h === "style"
                ? Xs(l, g)
                : h === "dangerouslySetInnerHTML"
                ? Ys(l, g)
                : h === "children"
                ? Yn(l, g)
                : _i(l, h, g, a);
            }
            switch (u) {
              case "input":
                Eo(l, o);
                break;
              case "textarea":
                Qs(l, o);
                break;
              case "select":
                var m = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var w = o.value;
                w != null
                  ? rn(l, !!o.multiple, w, !1)
                  : m !== !!o.multiple &&
                    (o.defaultValue != null
                      ? rn(l, !!o.multiple, o.defaultValue, !0)
                      : rn(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[nr] = o;
          } catch (_) {
            Q(e, e.return, _);
          }
      }
      break;
    case 6:
      if ((Me(t, e), Ae(e), r & 4)) {
        if (e.stateNode === null) throw Error(y(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (_) {
          Q(e, e.return, _);
        }
      }
      break;
    case 3:
      if (
        (Me(t, e), Ae(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Zn(t.containerInfo);
        } catch (_) {
          Q(e, e.return, _);
        }
      break;
    case 4:
      Me(t, e), Ae(e);
      break;
    case 13:
      Me(t, e),
        Ae(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (qi = G())),
        r & 4 && cs(e);
      break;
    case 22:
      if (
        ((h = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((se = (a = se) || h), Me(t, e), (se = a)) : Me(t, e),
        Ae(e),
        r & 8192)
      ) {
        if (
          ((a = e.memoizedState !== null),
          (e.stateNode.isHidden = a) && !h && e.mode & 1)
        )
          for (S = e, h = e.child; h !== null; ) {
            for (g = S = h; S !== null; ) {
              switch (((m = S), (w = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Vn(4, m, m.return);
                  break;
                case 1:
                  tn(m, m.return);
                  var k = m.stateNode;
                  if (typeof k.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (k.props = t.memoizedProps),
                        (k.state = t.memoizedState),
                        k.componentWillUnmount();
                    } catch (_) {
                      Q(r, n, _);
                    }
                  }
                  break;
                case 5:
                  tn(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    fs(g);
                    continue;
                  }
              }
              w !== null ? ((w.return = m), (S = w)) : fs(g);
            }
            h = h.sibling;
          }
        e: for (h = null, g = e; ; ) {
          if (g.tag === 5) {
            if (h === null) {
              h = g;
              try {
                (l = g.stateNode),
                  a
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((u = g.stateNode),
                      (s = g.memoizedProps.style),
                      (i =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (u.style.display = Gs("display", i)));
              } catch (_) {
                Q(e, e.return, _);
              }
            }
          } else if (g.tag === 6) {
            if (h === null)
              try {
                g.stateNode.nodeValue = a ? "" : g.memoizedProps;
              } catch (_) {
                Q(e, e.return, _);
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
            h === g && (h = null), (g = g.return);
          }
          h === g && (h = null), (g.sibling.return = g.return), (g = g.sibling);
        }
      }
      break;
    case 19:
      Me(t, e), Ae(e), r & 4 && cs(e);
      break;
    case 21:
      break;
    default:
      Me(t, e), Ae(e);
  }
}
function Ae(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (kc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(y(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Yn(l, ""), (r.flags &= -33));
          var o = as(e);
          oi(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            u = as(e);
          li(e, u, i);
          break;
        default:
          throw Error(y(161));
      }
    } catch (s) {
      Q(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function up(e, t, n) {
  (S = e), Ec(e);
}
function Ec(e, t, n) {
  for (var r = (e.mode & 1) !== 0; S !== null; ) {
    var l = S,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || zr;
      if (!i) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || se;
        u = zr;
        var a = se;
        if (((zr = i), (se = s) && !a))
          for (S = l; S !== null; )
            (i = S),
              (s = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? ps(l)
                : s !== null
                ? ((s.return = i), (S = s))
                : ps(l);
        for (; o !== null; ) (S = o), Ec(o), (o = o.sibling);
        (S = l), (zr = u), (se = a);
      }
      ds(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (S = o)) : ds(e);
  }
}
function ds(e) {
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
              se || Cl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !se)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : De(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Gu(t, o, r);
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
                Gu(t, i, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
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
                var a = t.alternate;
                if (a !== null) {
                  var h = a.memoizedState;
                  if (h !== null) {
                    var g = h.dehydrated;
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
              throw Error(y(163));
          }
        se || (t.flags & 512 && ri(t));
      } catch (m) {
        Q(t, t.return, m);
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
function fs(e) {
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
function ps(e) {
  for (; S !== null; ) {
    var t = S;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Cl(4, t);
          } catch (s) {
            Q(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              Q(t, l, s);
            }
          }
          var o = t.return;
          try {
            ri(t);
          } catch (s) {
            Q(t, o, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            ri(t);
          } catch (s) {
            Q(t, i, s);
          }
      }
    } catch (s) {
      Q(t, t.return, s);
    }
    if (t === e) {
      S = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (S = u);
      break;
    }
    S = t.return;
  }
}
var sp = Math.ceil,
  cl = nt.ReactCurrentDispatcher,
  Ji = nt.ReactCurrentOwner,
  ze = nt.ReactCurrentBatchConfig,
  D = 0,
  ne = null,
  X = null,
  le = 0,
  ke = 0,
  nn = Et(0),
  q = 0,
  sr = null,
  Ut = 0,
  Pl = 0,
  Zi = 0,
  Wn = null,
  he = null,
  qi = 0,
  vn = 1 / 0,
  Ye = null,
  dl = !1,
  ii = null,
  yt = null,
  Rr = !1,
  dt = null,
  fl = 0,
  Hn = 0,
  ui = null,
  Vr = -1,
  Wr = 0;
function de() {
  return D & 6 ? G() : Vr !== -1 ? Vr : (Vr = G());
}
function _t(e) {
  return e.mode & 1
    ? D & 2 && le !== 0
      ? le & -le
      : Qf.transition !== null
      ? (Wr === 0 && (Wr = ua()), Wr)
      : ((e = O),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : ma(e.type))),
        e)
    : 1;
}
function Ue(e, t, n, r) {
  if (50 < Hn) throw ((Hn = 0), (ui = null), Error(y(185)));
  cr(e, n, r),
    (!(D & 2) || e !== ne) &&
      (e === ne && (!(D & 2) && (Pl |= n), q === 4 && at(e, le)),
      _e(e, r),
      n === 1 && D === 0 && !(t.mode & 1) && ((vn = G() + 500), xl && Nt()));
}
function _e(e, t) {
  var n = e.callbackNode;
  Hd(e, t);
  var r = Xr(e, e === ne ? le : 0);
  if (r === 0)
    n !== null && Su(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Su(n), t === 1))
      e.tag === 0 ? Hf(ms.bind(null, e)) : Ia(ms.bind(null, e)),
        Bf(function () {
          !(D & 6) && Nt();
        }),
        (n = null);
    else {
      switch (sa(r)) {
        case 1:
          n = Ei;
          break;
        case 4:
          n = oa;
          break;
        case 16:
          n = Gr;
          break;
        case 536870912:
          n = ia;
          break;
        default:
          n = Gr;
      }
      n = jc(n, Nc.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Nc(e, t) {
  if (((Vr = -1), (Wr = 0), D & 6)) throw Error(y(327));
  var n = e.callbackNode;
  if (an() && e.callbackNode !== n) return null;
  var r = Xr(e, e === ne ? le : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = pl(e, r);
  else {
    t = r;
    var l = D;
    D |= 2;
    var o = Pc();
    (ne !== e || le !== t) && ((Ye = null), (vn = G() + 500), Mt(e, t));
    do
      try {
        dp();
        break;
      } catch (u) {
        Cc(e, u);
      }
    while (1);
    Fi(),
      (cl.current = o),
      (D = l),
      X !== null ? (t = 0) : ((ne = null), (le = 0), (t = q));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Mo(e)), l !== 0 && ((r = l), (t = si(e, l)))), t === 1)
    )
      throw ((n = sr), Mt(e, 0), at(e, r), _e(e, G()), n);
    if (t === 6) at(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !ap(l) &&
          ((t = pl(e, r)),
          t === 2 && ((o = Mo(e)), o !== 0 && ((r = o), (t = si(e, o)))),
          t === 1))
      )
        throw ((n = sr), Mt(e, 0), at(e, r), _e(e, G()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          zt(e, he, Ye);
          break;
        case 3:
          if (
            (at(e, r), (r & 130023424) === r && ((t = qi + 500 - G()), 10 < t))
          ) {
            if (Xr(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              de(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Vo(zt.bind(null, e, he, Ye), t);
            break;
          }
          zt(e, he, Ye);
          break;
        case 4:
          if ((at(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - $e(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
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
                : 1960 * sp(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Vo(zt.bind(null, e, he, Ye), r);
            break;
          }
          zt(e, he, Ye);
          break;
        case 5:
          zt(e, he, Ye);
          break;
        default:
          throw Error(y(329));
      }
    }
  }
  return _e(e, G()), e.callbackNode === n ? Nc.bind(null, e) : null;
}
function si(e, t) {
  var n = Wn;
  return (
    e.current.memoizedState.isDehydrated && (Mt(e, t).flags |= 256),
    (e = pl(e, t)),
    e !== 2 && ((t = he), (he = n), t !== null && ai(t)),
    e
  );
}
function ai(e) {
  he === null ? (he = e) : he.push.apply(he, e);
}
function ap(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!Be(o(), l)) return !1;
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
function at(e, t) {
  for (
    t &= ~Zi,
      t &= ~Pl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - $e(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function ms(e) {
  if (D & 6) throw Error(y(327));
  an();
  var t = Xr(e, 0);
  if (!(t & 1)) return _e(e, G()), null;
  var n = pl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Mo(e);
    r !== 0 && ((t = r), (n = si(e, r)));
  }
  if (n === 1) throw ((n = sr), Mt(e, 0), at(e, t), _e(e, G()), n);
  if (n === 6) throw Error(y(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    zt(e, he, Ye),
    _e(e, G()),
    null
  );
}
function bi(e, t) {
  var n = D;
  D |= 1;
  try {
    return e(t);
  } finally {
    (D = n), D === 0 && ((vn = G() + 500), xl && Nt());
  }
}
function Bt(e) {
  dt !== null && dt.tag === 0 && !(D & 6) && an();
  var t = D;
  D |= 1;
  var n = ze.transition,
    r = O;
  try {
    if (((ze.transition = null), (O = 1), e)) return e();
  } finally {
    (O = r), (ze.transition = n), (D = t), !(D & 6) && Nt();
  }
}
function eu() {
  (ke = nn.current), B(nn);
}
function Mt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Uf(n)), X !== null))
    for (n = X.return; n !== null; ) {
      var r = n;
      switch ((Mi(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && el();
          break;
        case 3:
          hn(), B(ve), B(ae), Wi();
          break;
        case 5:
          Vi(r);
          break;
        case 4:
          hn();
          break;
        case 13:
          B(V);
          break;
        case 19:
          B(V);
          break;
        case 10:
          $i(r.type._context);
          break;
        case 22:
        case 23:
          eu();
      }
      n = n.return;
    }
  if (
    ((ne = e),
    (X = e = wt(e.current, null)),
    (le = ke = t),
    (q = 0),
    (sr = null),
    (Zi = Pl = Ut = 0),
    (he = Wn = null),
    jt !== null)
  ) {
    for (t = 0; t < jt.length; t++)
      if (((n = jt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    jt = null;
  }
  return e;
}
function Cc(e, t) {
  do {
    var n = X;
    try {
      if ((Fi(), (Ur.current = al), sl)) {
        for (var r = W.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        sl = !1;
      }
      if (
        (($t = 0),
        (te = Z = W = null),
        (An = !1),
        (or = 0),
        (Ji.current = null),
        n === null || n.return === null)
      ) {
        (q = 1), (sr = t), (X = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          u = n,
          s = t;
        if (
          ((t = le),
          (u.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var a = s,
            h = u,
            g = h.tag;
          if (!(h.mode & 1) && (g === 0 || g === 11 || g === 15)) {
            var m = h.alternate;
            m
              ? ((h.updateQueue = m.updateQueue),
                (h.memoizedState = m.memoizedState),
                (h.lanes = m.lanes))
              : ((h.updateQueue = null), (h.memoizedState = null));
          }
          var w = ts(i);
          if (w !== null) {
            (w.flags &= -257),
              ns(w, i, u, o, t),
              w.mode & 1 && es(o, a, t),
              (t = w),
              (s = a);
            var k = t.updateQueue;
            if (k === null) {
              var _ = new Set();
              _.add(s), (t.updateQueue = _);
            } else k.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              es(o, a, t), tu();
              break e;
            }
            s = Error(y(426));
          }
        } else if (A && u.mode & 1) {
          var T = ts(i);
          if (T !== null) {
            !(T.flags & 65536) && (T.flags |= 256),
              ns(T, i, u, o, t),
              Di(gn(s, u));
            break e;
          }
        }
        (o = s = gn(s, u)),
          q !== 4 && (q = 2),
          Wn === null ? (Wn = [o]) : Wn.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var d = ac(o, s, t);
              Yu(o, d);
              break e;
            case 1:
              u = s;
              var c = o.type,
                f = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (f !== null &&
                    typeof f.componentDidCatch == "function" &&
                    (yt === null || !yt.has(f))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var v = cc(o, u, t);
                Yu(o, v);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Tc(n);
    } catch (x) {
      (t = x), X === n && n !== null && (X = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Pc() {
  var e = cl.current;
  return (cl.current = al), e === null ? al : e;
}
function tu() {
  (q === 0 || q === 3 || q === 2) && (q = 4),
    ne === null || (!(Ut & 268435455) && !(Pl & 268435455)) || at(ne, le);
}
function pl(e, t) {
  var n = D;
  D |= 2;
  var r = Pc();
  (ne !== e || le !== t) && ((Ye = null), Mt(e, t));
  do
    try {
      cp();
      break;
    } catch (l) {
      Cc(e, l);
    }
  while (1);
  if ((Fi(), (D = n), (cl.current = r), X !== null)) throw Error(y(261));
  return (ne = null), (le = 0), q;
}
function cp() {
  for (; X !== null; ) Lc(X);
}
function dp() {
  for (; X !== null && !Dd(); ) Lc(X);
}
function Lc(e) {
  var t = Rc(e.alternate, e, ke);
  (e.memoizedProps = e.pendingProps),
    t === null ? Tc(e) : (X = t),
    (Ji.current = null);
}
function Tc(e) {
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
    } else if (((n = rp(n, t, ke)), n !== null)) {
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
  var r = O,
    l = ze.transition;
  try {
    (ze.transition = null), (O = 1), fp(e, t, n, r);
  } finally {
    (ze.transition = l), (O = r);
  }
  return null;
}
function fp(e, t, n, r) {
  do an();
  while (dt !== null);
  if (D & 6) throw Error(y(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(y(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Qd(e, o),
    e === ne && ((X = ne = null), (le = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Rr ||
      ((Rr = !0),
      jc(Gr, function () {
        return an(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = ze.transition), (ze.transition = null);
    var i = O;
    O = 1;
    var u = D;
    (D |= 4),
      (Ji.current = null),
      ip(e, n),
      xc(n, e),
      jf(Bo),
      (Jr = !!Uo),
      (Bo = Uo = null),
      (e.current = n),
      up(n),
      Od(),
      (D = u),
      (O = i),
      (ze.transition = o);
  } else e.current = n;
  if (
    (Rr && ((Rr = !1), (dt = e), (fl = l)),
    (o = e.pendingLanes),
    o === 0 && (yt = null),
    Ud(n.stateNode),
    _e(e, G()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (dl) throw ((dl = !1), (e = ii), (ii = null), e);
  return (
    fl & 1 && e.tag !== 0 && an(),
    (o = e.pendingLanes),
    o & 1 ? (e === ui ? Hn++ : ((Hn = 0), (ui = e))) : (Hn = 0),
    Nt(),
    null
  );
}
function an() {
  if (dt !== null) {
    var e = sa(fl),
      t = ze.transition,
      n = O;
    try {
      if (((ze.transition = null), (O = 16 > e ? 16 : e), dt === null))
        var r = !1;
      else {
        if (((e = dt), (dt = null), (fl = 0), D & 6)) throw Error(y(331));
        var l = D;
        for (D |= 4, S = e.current; S !== null; ) {
          var o = S,
            i = o.child;
          if (S.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var a = u[s];
                for (S = a; S !== null; ) {
                  var h = S;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Vn(8, h, o);
                  }
                  var g = h.child;
                  if (g !== null) (g.return = h), (S = g);
                  else
                    for (; S !== null; ) {
                      h = S;
                      var m = h.sibling,
                        w = h.return;
                      if ((wc(h), h === a)) {
                        S = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = w), (S = m);
                        break;
                      }
                      S = w;
                    }
                }
              }
              var k = o.alternate;
              if (k !== null) {
                var _ = k.child;
                if (_ !== null) {
                  k.child = null;
                  do {
                    var T = _.sibling;
                    (_.sibling = null), (_ = T);
                  } while (_ !== null);
                }
              }
              S = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (S = i);
          else
            e: for (; S !== null; ) {
              if (((o = S), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Vn(9, o, o.return);
                }
              var d = o.sibling;
              if (d !== null) {
                (d.return = o.return), (S = d);
                break e;
              }
              S = o.return;
            }
        }
        var c = e.current;
        for (S = c; S !== null; ) {
          i = S;
          var f = i.child;
          if (i.subtreeFlags & 2064 && f !== null) (f.return = i), (S = f);
          else
            e: for (i = c; S !== null; ) {
              if (((u = S), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Cl(9, u);
                  }
                } catch (x) {
                  Q(u, u.return, x);
                }
              if (u === i) {
                S = null;
                break e;
              }
              var v = u.sibling;
              if (v !== null) {
                (v.return = u.return), (S = v);
                break e;
              }
              S = u.return;
            }
        }
        if (
          ((D = l), Nt(), He && typeof He.onPostCommitFiberRoot == "function")
        )
          try {
            He.onPostCommitFiberRoot(yl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (O = n), (ze.transition = t);
    }
  }
  return !1;
}
function hs(e, t, n) {
  (t = gn(n, t)),
    (t = ac(e, t, 1)),
    (e = vt(e, t, 1)),
    (t = de()),
    e !== null && (cr(e, 1, t), _e(e, t));
}
function Q(e, t, n) {
  if (e.tag === 3) hs(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        hs(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (yt === null || !yt.has(r)))
        ) {
          (e = gn(n, e)),
            (e = cc(t, e, 1)),
            (t = vt(t, e, 1)),
            (e = de()),
            t !== null && (cr(t, 1, e), _e(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function pp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = de()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ne === e &&
      (le & n) === n &&
      (q === 4 || (q === 3 && (le & 130023424) === le && 500 > G() - qi)
        ? Mt(e, 0)
        : (Zi |= n)),
    _e(e, t);
}
function zc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = kr), (kr <<= 1), !(kr & 130023424) && (kr = 4194304))
      : (t = 1));
  var n = de();
  (e = et(e, t)), e !== null && (cr(e, t, n), _e(e, n));
}
function mp(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), zc(e, n);
}
function hp(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(y(314));
  }
  r !== null && r.delete(t), zc(e, n);
}
var Rc;
Rc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ve.current) ge = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ge = !1), np(e, t, n);
      ge = !!(e.flags & 131072);
    }
  else (ge = !1), A && t.flags & 1048576 && Ma(t, rl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Ar(e, t), (e = t.pendingProps);
      var l = fn(t, ae.current);
      sn(t, n), (l = Qi(null, t, r, e, l, n));
      var o = Ki();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ye(r) ? ((o = !0), tl(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Bi(t),
            (l.updater = El),
            (t.stateNode = l),
            (l._reactInternals = t),
            Xo(t, r, e, n),
            (t = qo(null, t, r, !0, o, n)))
          : ((t.tag = 0), A && o && Ii(t), ce(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Ar(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = vp(r)),
          (e = De(r, e)),
          l)
        ) {
          case 0:
            t = Zo(null, t, r, e, n);
            break e;
          case 1:
            t = os(null, t, r, e, n);
            break e;
          case 11:
            t = rs(null, t, r, e, n);
            break e;
          case 14:
            t = ls(null, t, r, De(r.type, e), n);
            break e;
        }
        throw Error(y(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : De(r, l)),
        Zo(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : De(r, l)),
        os(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((mc(t), e === null)) throw Error(y(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          $a(e, t),
          il(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = gn(Error(y(423)), t)), (t = is(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = gn(Error(y(424)), t)), (t = is(e, t, r, n, l));
            break e;
          } else
            for (
              Se = gt(t.stateNode.containerInfo.firstChild),
                xe = t,
                A = !0,
                Fe = null,
                n = Va(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((pn(), r === l)) {
            t = tt(e, t, n);
            break e;
          }
          ce(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Wa(t),
        e === null && Ko(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        Ao(r, l) ? (i = null) : o !== null && Ao(r, o) && (t.flags |= 32),
        pc(e, t),
        ce(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Ko(t), null;
    case 13:
      return hc(e, t, n);
    case 4:
      return (
        Ai(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = mn(t, null, r, n)) : ce(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : De(r, l)),
        rs(e, t, r, l, n)
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
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          $(ll, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (Be(o.value, i)) {
            if (o.children === l.children && !ve.current) {
              t = tt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var u = o.dependencies;
              if (u !== null) {
                i = o.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      (s = Ze(-1, n & -n)), (s.tag = 2);
                      var a = o.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var h = a.pending;
                        h === null
                          ? (s.next = s)
                          : ((s.next = h.next), (h.next = s)),
                          (a.pending = s);
                      }
                    }
                    (o.lanes |= n),
                      (s = o.alternate),
                      s !== null && (s.lanes |= n),
                      Yo(o.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(y(341));
                (i.lanes |= n),
                  (u = i.alternate),
                  u !== null && (u.lanes |= n),
                  Yo(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        ce(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        sn(t, n),
        (l = Re(l)),
        (r = r(l)),
        (t.flags |= 1),
        ce(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = De(r, t.pendingProps)),
        (l = De(r.type, l)),
        ls(e, t, r, l, n)
      );
    case 15:
      return dc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : De(r, l)),
        Ar(e, t),
        (t.tag = 1),
        ye(r) ? ((e = !0), tl(t)) : (e = !1),
        sn(t, n),
        Ba(t, r, l),
        Xo(t, r, l, n),
        qo(null, t, r, !0, e, n)
      );
    case 19:
      return gc(e, t, n);
    case 22:
      return fc(e, t, n);
  }
  throw Error(y(156, t.tag));
};
function jc(e, t) {
  return la(e, t);
}
function gp(e, t, n, r) {
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
function Te(e, t, n, r) {
  return new gp(e, t, n, r);
}
function nu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function vp(e) {
  if (typeof e == "function") return nu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ki)) return 11;
    if (e === Si) return 14;
  }
  return 2;
}
function wt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Te(e.tag, t, e.key, e.mode)),
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
function Hr(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) nu(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case Kt:
        return Dt(n.children, l, o, t);
      case wi:
        (i = 8), (l |= 8);
        break;
      case _o:
        return (
          (e = Te(12, n, t, l | 2)), (e.elementType = _o), (e.lanes = o), e
        );
      case wo:
        return (e = Te(13, n, t, l)), (e.elementType = wo), (e.lanes = o), e;
      case ko:
        return (e = Te(19, n, t, l)), (e.elementType = ko), (e.lanes = o), e;
      case As:
        return Ll(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Us:
              i = 10;
              break e;
            case Bs:
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
        throw Error(y(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Te(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Dt(e, t, n, r) {
  return (e = Te(7, e, r, t)), (e.lanes = n), e;
}
function Ll(e, t, n, r) {
  return (
    (e = Te(22, e, r, t)),
    (e.elementType = As),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ao(e, t, n) {
  return (e = Te(6, e, null, t)), (e.lanes = n), e;
}
function co(e, t, n) {
  return (
    (t = Te(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function yp(e, t, n, r, l) {
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
    (this.eventTimes = Hl(0)),
    (this.expirationTimes = Hl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Hl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function ru(e, t, n, r, l, o, i, u, s) {
  return (
    (e = new yp(e, t, n, u, s)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Te(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Bi(o),
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
function Ic(e) {
  if (!e) return St;
  e = e._reactInternals;
  e: {
    if (Vt(e) !== e || e.tag !== 1) throw Error(y(170));
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
    throw Error(y(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ye(n)) return ja(e, n, t);
  }
  return t;
}
function Mc(e, t, n, r, l, o, i, u, s) {
  return (
    (e = ru(n, r, !0, e, l, o, i, u, s)),
    (e.context = Ic(null)),
    (n = e.current),
    (r = de()),
    (l = _t(n)),
    (o = Ze(r, l)),
    (o.callback = t ?? null),
    vt(n, o, l),
    (e.current.lanes = l),
    cr(e, l, r),
    _e(e, r),
    e
  );
}
function Tl(e, t, n, r) {
  var l = t.current,
    o = de(),
    i = _t(l);
  return (
    (n = Ic(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ze(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = vt(l, t, i)),
    e !== null && (Ue(e, l, i, o), $r(e, l, i)),
    i
  );
}
function ml(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function gs(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function lu(e, t) {
  gs(e, t), (e = e.alternate) && gs(e, t);
}
function wp() {
  return null;
}
var Dc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ou(e) {
  this._internalRoot = e;
}
zl.prototype.render = ou.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(y(409));
  Tl(e, t, null, null);
};
zl.prototype.unmount = ou.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Bt(function () {
      Tl(null, e, null, null);
    }),
      (t[be] = null);
  }
};
function zl(e) {
  this._internalRoot = e;
}
zl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = da();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < st.length && t !== 0 && t < st[n].priority; n++);
    st.splice(n, 0, e), n === 0 && pa(e);
  }
};
function iu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Rl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function vs() {}
function kp(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var a = ml(i);
        o.call(a);
      };
    }
    var i = Mc(t, r, e, 0, null, !1, !1, "", vs);
    return (
      (e._reactRootContainer = i),
      (e[be] = i.current),
      er(e.nodeType === 8 ? e.parentNode : e),
      Bt(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var a = ml(s);
      u.call(a);
    };
  }
  var s = ru(e, 0, !1, null, null, !1, !1, "", vs);
  return (
    (e._reactRootContainer = s),
    (e[be] = s.current),
    er(e.nodeType === 8 ? e.parentNode : e),
    Bt(function () {
      Tl(t, s, n, r);
    }),
    s
  );
}
function jl(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var s = ml(i);
        u.call(s);
      };
    }
    Tl(t, i, e, l);
  } else i = kp(n, t, e, l, r);
  return ml(i);
}
aa = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Mn(t.pendingLanes);
        n !== 0 &&
          (Ni(t, n | 1), _e(t, G()), !(D & 6) && ((vn = G() + 500), Nt()));
      }
      break;
    case 13:
      Bt(function () {
        var r = et(e, 1);
        if (r !== null) {
          var l = de();
          Ue(r, e, 1, l);
        }
      }),
        lu(e, 1);
  }
};
Ci = function (e) {
  if (e.tag === 13) {
    var t = et(e, 134217728);
    if (t !== null) {
      var n = de();
      Ue(t, e, 134217728, n);
    }
    lu(e, 134217728);
  }
};
ca = function (e) {
  if (e.tag === 13) {
    var t = _t(e),
      n = et(e, t);
    if (n !== null) {
      var r = de();
      Ue(n, e, t, r);
    }
    lu(e, t);
  }
};
da = function () {
  return O;
};
fa = function (e, t) {
  var n = O;
  try {
    return (O = e), t();
  } finally {
    O = n;
  }
};
Ro = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Eo(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var l = Sl(r);
            if (!l) throw Error(y(90));
            Ws(r), Eo(r, l);
          }
        }
      }
      break;
    case "textarea":
      Qs(e, n);
      break;
    case "select":
      (t = n.value), t != null && rn(e, !!n.multiple, t, !1);
  }
};
qs = bi;
bs = Bt;
var Sp = { usingClientEntryPoint: !1, Events: [fr, Jt, Sl, Js, Zs, bi] },
  zn = {
    findFiberByHostInstance: Rt,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  xp = {
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
    currentDispatcherRef: nt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = na(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: zn.findFiberByHostInstance || wp,
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
      (yl = jr.inject(xp)), (He = jr);
    } catch {}
}
Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Sp;
Ne.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!iu(t)) throw Error(y(200));
  return _p(e, t, null, n);
};
Ne.createRoot = function (e, t) {
  if (!iu(e)) throw Error(y(299));
  var n = !1,
    r = "",
    l = Dc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = ru(e, 1, !1, null, null, n, !1, r, l)),
    (e[be] = t.current),
    er(e.nodeType === 8 ? e.parentNode : e),
    new ou(t)
  );
};
Ne.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(y(188))
      : ((e = Object.keys(e).join(",")), Error(y(268, e)));
  return (e = na(t)), (e = e === null ? null : e.stateNode), e;
};
Ne.flushSync = function (e) {
  return Bt(e);
};
Ne.hydrate = function (e, t, n) {
  if (!Rl(t)) throw Error(y(200));
  return jl(null, e, t, !0, n);
};
Ne.hydrateRoot = function (e, t, n) {
  if (!iu(e)) throw Error(y(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = Dc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = Mc(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[be] = t.current),
    er(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new zl(t);
};
Ne.render = function (e, t, n) {
  if (!Rl(t)) throw Error(y(200));
  return jl(null, e, t, !1, n);
};
Ne.unmountComponentAtNode = function (e) {
  if (!Rl(e)) throw Error(y(40));
  return e._reactRootContainer
    ? (Bt(function () {
        jl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[be] = null);
        });
      }),
      !0)
    : !1;
};
Ne.unstable_batchedUpdates = bi;
Ne.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Rl(n)) throw Error(y(200));
  if (e == null || e._reactInternals === void 0) throw Error(y(38));
  return jl(e, t, n, !1, r);
};
Ne.version = "18.2.0-next-9e3b772b8-20220608";
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
  t(), (e.exports = Ne);
})(_d);
var ys = go;
(ho.createRoot = ys.createRoot), (ho.hydrateRoot = ys.hydrateRoot);
/**
 * @remix-run/router v1.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function hl() {
  return (
    (hl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    hl.apply(this, arguments)
  );
}
var ft;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(ft || (ft = {}));
const _s = "popstate";
function Ep(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let { pathname: o, search: i, hash: u } = r.location;
    return ci(
      "",
      { pathname: o, search: i, hash: u },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || "default"
    );
  }
  function n(r, l) {
    return typeof l == "string" ? l : Oc(l);
  }
  return Cp(t, n, null, e);
}
function we(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function uu(e, t) {
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
function ws(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function ci(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    hl(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Il(t) : t,
      { state: n, key: (t && t.key) || r || Np() }
    )
  );
}
function Oc(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Il(e) {
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
function Cp(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: o = !1 } = r,
    i = l.history,
    u = ft.Pop,
    s = null,
    a = h();
  a == null && ((a = 0), i.replaceState(hl({}, i.state, { idx: a }), ""));
  function h() {
    return (i.state || { idx: null }).idx;
  }
  function g() {
    u = ft.Pop;
    let T = h(),
      d = T == null ? null : T - a;
    (a = T), s && s({ action: u, location: _.location, delta: d });
  }
  function m(T, d) {
    u = ft.Push;
    let c = ci(_.location, T, d);
    n && n(c, T), (a = h() + 1);
    let f = ws(c, a),
      v = _.createHref(c);
    try {
      i.pushState(f, "", v);
    } catch {
      l.location.assign(v);
    }
    o && s && s({ action: u, location: _.location, delta: 1 });
  }
  function w(T, d) {
    u = ft.Replace;
    let c = ci(_.location, T, d);
    n && n(c, T), (a = h());
    let f = ws(c, a),
      v = _.createHref(c);
    i.replaceState(f, "", v),
      o && s && s({ action: u, location: _.location, delta: 0 });
  }
  function k(T) {
    let d = l.location.origin !== "null" ? l.location.origin : l.location.href,
      c = typeof T == "string" ? T : Oc(T);
    return (
      we(
        d,
        "No window.location.(origin|href) available to create URL for href: " +
          c
      ),
      new URL(c, d)
    );
  }
  let _ = {
    get action() {
      return u;
    },
    get location() {
      return e(l, i);
    },
    listen(T) {
      if (s) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(_s, g),
        (s = T),
        () => {
          l.removeEventListener(_s, g), (s = null);
        }
      );
    },
    createHref(T) {
      return t(l, T);
    },
    createURL: k,
    encodeLocation(T) {
      let d = k(T);
      return { pathname: d.pathname, search: d.search, hash: d.hash };
    },
    push: m,
    replace: w,
    go(T) {
      return i.go(T);
    },
  };
  return _;
}
var ks;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(ks || (ks = {}));
function Pp(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Il(t) : t,
    l = Uc(r.pathname || "/", n);
  if (l == null) return null;
  let o = Fc(e);
  Lp(o);
  let i = null;
  for (let u = 0; i == null && u < o.length; ++u) i = Fp(o[u], Bp(l));
  return i;
}
function Fc(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let l = (o, i, u) => {
    let s = {
      relativePath: u === void 0 ? o.path || "" : u,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: i,
      route: o,
    };
    s.relativePath.startsWith("/") &&
      (we(
        s.relativePath.startsWith(r),
        'Absolute route path "' +
          s.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (s.relativePath = s.relativePath.slice(r.length)));
    let a = cn([r, s.relativePath]),
      h = n.concat(s);
    o.children &&
      o.children.length > 0 &&
      (we(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + a + '".')
      ),
      Fc(o.children, t, h, a)),
      !(o.path == null && !o.index) &&
        t.push({ path: a, score: Dp(a, o.index), routesMeta: h });
  };
  return (
    e.forEach((o, i) => {
      var u;
      if (o.path === "" || !((u = o.path) != null && u.includes("?"))) l(o, i);
      else for (let s of $c(o.path)) l(o, i, s);
    }),
    t
  );
}
function $c(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return l ? [o, ""] : [o];
  let i = $c(r.join("/")),
    u = [];
  return (
    u.push(...i.map((s) => (s === "" ? o : [o, s].join("/")))),
    l && u.push(...i),
    u.map((s) => (e.startsWith("/") && s === "" ? "/" : s))
  );
}
function Lp(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Op(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const Tp = /^:\w+$/,
  zp = 3,
  Rp = 2,
  jp = 1,
  Ip = 10,
  Mp = -2,
  Ss = (e) => e === "*";
function Dp(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Ss) && (r += Mp),
    t && (r += Rp),
    n
      .filter((l) => !Ss(l))
      .reduce((l, o) => l + (Tp.test(o) ? zp : o === "" ? jp : Ip), r)
  );
}
function Op(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Fp(e, t) {
  let { routesMeta: n } = e,
    r = {},
    l = "/",
    o = [];
  for (let i = 0; i < n.length; ++i) {
    let u = n[i],
      s = i === n.length - 1,
      a = l === "/" ? t : t.slice(l.length) || "/",
      h = $p(
        { path: u.relativePath, caseSensitive: u.caseSensitive, end: s },
        a
      );
    if (!h) return null;
    Object.assign(r, h.params);
    let g = u.route;
    o.push({
      params: r,
      pathname: cn([l, h.pathname]),
      pathnameBase: Vp(cn([l, h.pathnameBase])),
      route: g,
    }),
      h.pathnameBase !== "/" && (l = cn([l, h.pathnameBase]));
  }
  return o;
}
function $p(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Up(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let o = l[0],
    i = o.replace(/(.)\/+$/, "$1"),
    u = l.slice(1);
  return {
    params: r.reduce((a, h, g) => {
      if (h === "*") {
        let m = u[g] || "";
        i = o.slice(0, o.length - m.length).replace(/(.)\/+$/, "$1");
      }
      return (a[h] = Ap(u[g] || "", h)), a;
    }, {}),
    pathname: o,
    pathnameBase: i,
    pattern: e,
  };
}
function Up(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    uu(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    l =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/\/:(\w+)/g, (i, u) => (r.push(u), "/([^\\/]+)"));
  return (
    e.endsWith("*")
      ? (r.push("*"),
        (l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (l += "\\/*$")
      : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l, t ? void 0 : "i"), r]
  );
}
function Bp(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      uu(
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
function Ap(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      uu(
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
function Uc(e, t) {
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
 */ function Hp(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
const Qp = typeof Object.is == "function" ? Object.is : Hp,
  { useState: Kp, useEffect: Yp, useLayoutEffect: Gp, useDebugValue: Xp } = mo;
function Jp(e, t, n) {
  const r = t(),
    [{ inst: l }, o] = Kp({ inst: { value: r, getSnapshot: t } });
  return (
    Gp(() => {
      (l.value = r), (l.getSnapshot = t), fo(l) && o({ inst: l });
    }, [e, r, t]),
    Yp(
      () => (
        fo(l) && o({ inst: l }),
        e(() => {
          fo(l) && o({ inst: l });
        })
      ),
      [e]
    ),
    Xp(r),
    r
  );
}
function fo(e) {
  const t = e.getSnapshot,
    n = e.value;
  try {
    const r = t();
    return !Qp(n, r);
  } catch {
    return !0;
  }
}
function Zp(e, t, n) {
  return t();
}
const qp =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  bp = !qp,
  em = bp ? Zp : Jp;
"useSyncExternalStore" in mo && ((e) => e.useSyncExternalStore)(mo);
const Bc = N.createContext(null),
  Ac = N.createContext(null),
  Vc = N.createContext(null),
  Ml = N.createContext(null),
  Dl = N.createContext({ outlet: null, matches: [] }),
  Wc = N.createContext(null);
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
function su() {
  return N.useContext(Ml) != null;
}
function tm() {
  return su() || we(!1), N.useContext(Ml).location;
}
function nm(e, t) {
  su() || we(!1);
  let { navigator: n } = N.useContext(Vc),
    r = N.useContext(Ac),
    { matches: l } = N.useContext(Dl),
    o = l[l.length - 1],
    i = o ? o.params : {};
  o && o.pathname;
  let u = o ? o.pathnameBase : "/";
  o && o.route;
  let s = tm(),
    a;
  if (t) {
    var h;
    let _ = typeof t == "string" ? Il(t) : t;
    u === "/" || ((h = _.pathname) != null && h.startsWith(u)) || we(!1),
      (a = _);
  } else a = s;
  let g = a.pathname || "/",
    m = u === "/" ? g : g.slice(u.length) || "/",
    w = Pp(e, { pathname: m }),
    k = im(
      w &&
        w.map((_) =>
          Object.assign({}, _, {
            params: Object.assign({}, i, _.params),
            pathname: cn([
              u,
              n.encodeLocation
                ? n.encodeLocation(_.pathname).pathname
                : _.pathname,
            ]),
            pathnameBase:
              _.pathnameBase === "/"
                ? u
                : cn([
                    u,
                    n.encodeLocation
                      ? n.encodeLocation(_.pathnameBase).pathname
                      : _.pathnameBase,
                  ]),
          })
        ),
      l,
      r || void 0
    );
  return t && k
    ? N.createElement(
        Ml.Provider,
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
              a
            ),
            navigationType: ft.Pop,
          },
        },
        k
      )
    : k;
}
function rm() {
  let e = cm(),
    t = Wp(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    o = null;
  return N.createElement(
    N.Fragment,
    null,
    N.createElement("h2", null, "Unexpected Application Error!"),
    N.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? N.createElement("pre", { style: l }, n) : null,
    o
  );
}
class lm extends N.Component {
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
      ? N.createElement(
          Dl.Provider,
          { value: this.props.routeContext },
          N.createElement(Wc.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function om(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = N.useContext(Bc);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    N.createElement(Dl.Provider, { value: t }, r)
  );
}
function im(e, t, n) {
  if ((t === void 0 && (t = []), e == null))
    if (n != null && n.errors) e = n.matches;
    else return null;
  let r = e,
    l = n == null ? void 0 : n.errors;
  if (l != null) {
    let o = r.findIndex(
      (i) => i.route.id && (l == null ? void 0 : l[i.route.id])
    );
    o >= 0 || we(!1), (r = r.slice(0, Math.min(r.length, o + 1)));
  }
  return r.reduceRight((o, i, u) => {
    let s = i.route.id ? (l == null ? void 0 : l[i.route.id]) : null,
      a = null;
    n &&
      (i.route.ErrorBoundary
        ? (a = N.createElement(i.route.ErrorBoundary, null))
        : i.route.errorElement
        ? (a = i.route.errorElement)
        : (a = N.createElement(rm, null)));
    let h = t.concat(r.slice(0, u + 1)),
      g = () => {
        let m = o;
        return (
          s
            ? (m = a)
            : i.route.Component
            ? (m = N.createElement(i.route.Component, null))
            : i.route.element && (m = i.route.element),
          N.createElement(om, {
            match: i,
            routeContext: { outlet: o, matches: h },
            children: m,
          })
        );
      };
    return n && (i.route.ErrorBoundary || i.route.errorElement || u === 0)
      ? N.createElement(lm, {
          location: n.location,
          component: a,
          error: s,
          children: g(),
          routeContext: { outlet: null, matches: h },
        })
      : g();
  }, null);
}
var xs;
(function (e) {
  (e.UseBlocker = "useBlocker"), (e.UseRevalidator = "useRevalidator");
})(xs || (xs = {}));
var gl;
(function (e) {
  (e.UseBlocker = "useBlocker"),
    (e.UseLoaderData = "useLoaderData"),
    (e.UseActionData = "useActionData"),
    (e.UseRouteError = "useRouteError"),
    (e.UseNavigation = "useNavigation"),
    (e.UseRouteLoaderData = "useRouteLoaderData"),
    (e.UseMatches = "useMatches"),
    (e.UseRevalidator = "useRevalidator");
})(gl || (gl = {}));
function um(e) {
  let t = N.useContext(Ac);
  return t || we(!1), t;
}
function sm(e) {
  let t = N.useContext(Dl);
  return t || we(!1), t;
}
function am(e) {
  let t = sm(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || we(!1), n.route.id;
}
function cm() {
  var e;
  let t = N.useContext(Wc),
    n = um(gl.UseRouteError),
    r = am(gl.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function Hc(e) {
  we(!1);
}
function dm(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: l = ft.Pop,
    navigator: o,
    static: i = !1,
  } = e;
  su() && we(!1);
  let u = t.replace(/^\/*/, "/"),
    s = N.useMemo(() => ({ basename: u, navigator: o, static: i }), [u, o, i]);
  typeof r == "string" && (r = Il(r));
  let {
      pathname: a = "/",
      search: h = "",
      hash: g = "",
      state: m = null,
      key: w = "default",
    } = r,
    k = N.useMemo(() => {
      let _ = Uc(a, u);
      return _ == null
        ? null
        : {
            location: { pathname: _, search: h, hash: g, state: m, key: w },
            navigationType: l,
          };
    }, [u, a, h, g, m, w, l]);
  return k == null
    ? null
    : N.createElement(
        Vc.Provider,
        { value: s },
        N.createElement(Ml.Provider, { children: n, value: k })
      );
}
function fm(e) {
  let { children: t, location: n } = e,
    r = N.useContext(Bc),
    l = r && !t ? r.router.routes : fi(t);
  return nm(l, n);
}
var Es;
(function (e) {
  (e[(e.pending = 0)] = "pending"),
    (e[(e.success = 1)] = "success"),
    (e[(e.error = 2)] = "error");
})(Es || (Es = {}));
new Promise(() => {});
function fi(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    N.Children.forEach(e, (r, l) => {
      if (!N.isValidElement(r)) return;
      if (r.type === N.Fragment) {
        n.push.apply(n, fi(r.props.children, t));
        return;
      }
      r.type !== Hc && we(!1), !r.props.index || !r.props.children || we(!1);
      let o = [...t, l],
        i = {
          id: r.props.id || o.join("-"),
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
      r.props.children && (i.children = fi(r.props.children, o)), n.push(i);
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
 */ function pm(e) {
  let { basename: t, children: n, window: r } = e,
    l = N.useRef();
  l.current == null && (l.current = Ep({ window: r, v5Compat: !0 }));
  let o = l.current,
    [i, u] = N.useState({ action: o.action, location: o.location });
  return (
    N.useLayoutEffect(() => o.listen(u), [o]),
    N.createElement(dm, {
      basename: t,
      children: n,
      location: i.location,
      navigationType: i.action,
      navigator: o,
    })
  );
}
var Ns;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmitImpl = "useSubmitImpl"),
    (e.UseFetcher = "useFetcher");
})(Ns || (Ns = {}));
var Cs;
(function (e) {
  (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Cs || (Cs = {}));
const mm = {},
  hm = "_col_5afic_1",
  gm = "_row_5afic_21",
  vm = "_box_5afic_29",
  ym = "_name_5afic_47",
  _m = "_nameeffect_5afic_65",
  wm = "_circle_5afic_93",
  km = "_slide_5afic_1",
  Ht = {
    col: hm,
    row: gm,
    box: vm,
    name: ym,
    nameeffect: _m,
    circle: wm,
    slide: km,
  },
  Sm = () => {
    const [e, t] = N.useState("");
    var [n, r] = N.useState(0);
    const [l, o] = N.useState("Mechanical Engineering"),
      [i, u] = N.useState(0);
    return (
      N.useEffect(() => {
        i <= l.length
          ? setTimeout(() => {
              t(e + l[i]), u(i + 1);
            }, 75)
          : (u(0),
            t(""),
            n % 4 == 2
              ? (o("Mechanical Engineering"), r(++n))
              : n % 4 == 0
              ? (o("Full Stack Developer"), r(++n))
              : n % 4 == 1
              ? (o("Competitive Programmer"), r(++n))
              : (o("Machine learning enthusiast"), r(++n)));
      }, [i]),
      p("div", {
        className: Ht.col,
        id: "name",
        children: p("div", {
          className: Ht.row,
          children: F("div", {
            className: Ht.box,
            children: [
              p("div", { className: Ht.circle }),
              p("div", {
                className: Ht.name,
                children: "Hi ! I'm Shivam Kumar",
              }),
              p("div", { className: Ht.nameeffect, children: e }),
            ],
          }),
        }),
      })
    );
  },
  xm = "_col_180is_1",
  Em = "_row_180is_17",
  Nm = "_about_180is_23",
  Cm = "_heading_180is_35",
  Pm = "_details_photo_180is_47",
  Lm = "_details_180is_47",
  Tm = "_spinner_180is_1",
  zm = "_photobox_180is_137",
  Rm = "_photo_180is_137",
  lt = {
    col: xm,
    row: Em,
    about: Nm,
    heading: Cm,
    details_photo: Pm,
    details: Lm,
    spinner: Tm,
    photobox: zm,
    photo: Rm,
  },
  jm = [
    {
      text: "I am Shivam Kumar, a software developer with a passion for solving complex problems and building elegant solutions. With a LeetCode rating of 1702, I am constantly challenging myself to improve my skills and stay up-to-date with the latest technologies.",
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
  Im = () =>
    p("div", {
      className: lt.col,
      id: "about",
      children: p("div", {
        className: lt.row,
        children: F("div", {
          className: lt.about,
          children: [
            p("div", { className: lt.heading, children: "About Me" }),
            F("div", {
              className: lt.details_photo,
              children: [
                p("div", {
                  className: lt.details,
                  children: jm.map((e, t) =>
                    p("p", { id: `about_text_${t + 1}`, children: e.text }, t)
                  ),
                }),
                p("div", {
                  className: lt.photobox,
                  children: p("div", {
                    className: lt.photo,
                    children: p("img", { src: "/avatar.png", alt: "avatar" }),
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
    }),
  Mm = "_col_117xg_1",
  Dm = "_row_117xg_17",
  Om = "_language_117xg_23",
  Fm = "_heading_117xg_35",
  $m = "_tool_card_117xg_47",
  Um = "_tool_117xg_47",
  Bm = "_card_117xg_79",
  Lt = {
    col: Mm,
    row: Dm,
    language: Om,
    heading: Fm,
    tool_card: $m,
    tool: Um,
    card: Bm,
  },
  Am = "_completecard_qj07i_1",
  Vm = "_popular_books_qj07i_15",
  Wm = "_rotate_qj07i_29",
  Hm = "_book_card_qj07i_35",
  Qm = "_card_header_qj07i_65",
  Km = "_img_fluid_qj07i_77",
  Ym = "_card_footer_qj07i_89",
  Gm = "_back_qj07i_99",
  Xm = "_back_content_qj07i_135",
  Jm = "_texting_qj07i_171",
  Zm = "_about_qj07i_179",
  me = {
    completecard: Am,
    popular_books: Vm,
    rotate: Wm,
    book_card: Hm,
    card_header: Qm,
    img_fluid: Km,
    card_footer: Ym,
    back: Gm,
    back_content: Xm,
    texting: Jm,
    about: Zm,
  },
  qm = "_button_1ljvx_1",
  bm = { button: qm },
  eh = (e) =>
    p("button", {
      type: e.type,
      className: bm.button,
      onClick: e.onClick,
      children: e.children,
    }),
  th = [
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
  nh = () =>
    p("div", {
      className: me.completecard,
      children: p("div", {
        className: me.popular_books,
        children: th.map((e, t) =>
          p(
            "div",
            {
              className: me.rotate,
              children: F("div", {
                className: me.book_card,
                children: [
                  p("div", { className: me.card_header, children: e.website }),
                  p("div", {
                    className: me.card_body,
                    children: p("img", { src: e.src, className: me.img_fluid }),
                  }),
                  p("div", { className: me.card_footer, children: e.language }),
                  p("div", {
                    className: me.back,
                    children: F("div", {
                      className: me.back_content,
                      children: [
                        F("div", {
                          className: me.texting,
                          children: [e.webSiteName, " "],
                        }),
                        p("div", { className: me.about, children: e.userId }),
                        p("img", { src: e.src2, className: me.img_fluid }),
                        p("div", {
                          className: me.button,
                          children: p(eh, {
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
  rh = "_col_xlahx_1",
  lh = "_row_xlahx_13",
  oh = "_tooling_xlahx_19",
  ih = "_jackInTheBox_xlahx_1",
  uh = "_tooling_box_xlahx_73",
  sh = "_box_content_xlahx_91",
  ah = "_box_icon_xlahx_119",
  ch = "_icon_xlahx_119",
  dh = "_box_text_xlahx_131",
  ot = {
    col: rh,
    row: lh,
    tooling: oh,
    jackInTheBox: ih,
    tooling_box: uh,
    box_content: sh,
    box_icon: ah,
    icon: ch,
    box_text: dh,
  },
  fh = [
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
  ],
  ph = () =>
    p("div", {
      className: ot.col,
      children: p("div", {
        className: ot.row,
        children: p("div", {
          className: ot.tooling,
          children: p("div", {
            className: ot.tooling_box,
            children: fh.map((e, t) =>
              F(
                "div",
                {
                  className: ot.box_content,
                  children: [
                    p("div", {
                      className: ot.box_icon,
                      children: p("img", {
                        src: e.src,
                        alt: e.src,
                        className: ot.icon,
                      }),
                    }),
                    p("div", { className: ot.box_text, children: e.text }),
                  ],
                },
                t
              )
            ),
          }),
        }),
      }),
    }),
  mh = () =>
    p("div", {
      className: Lt.col,
      id: "language",
      children: p("div", {
        className: Lt.row,
        children: F("div", {
          className: Lt.language,
          children: [
            p("div", {
              className: Lt.heading,
              children: "Language and Platform Used",
            }),
            F("div", {
              className: Lt.tool_card,
              children: [
                p("div", { className: Lt.tool, children: p(ph, {}) }),
                p("div", {
                  className: Lt.card,
                  id: "Platform",
                  children: p(nh, {}),
                }),
              ],
            }),
          ],
        }),
      }),
    }),
  hh = "_col_1w6j4_1",
  gh = "_row_1w6j4_17",
  vh = "_working_1w6j4_23",
  yh = "_heading_1w6j4_35",
  _h = "_works_1w6j4_47",
  wh = "_work_1w6j4_23",
  kh = "_link_svg_1w6j4_95",
  Sh = "_work_info_1w6j4_135",
  Ke = {
    col: hh,
    row: gh,
    working: vh,
    heading: yh,
    works: _h,
    work: wh,
    link_svg: kh,
    work_info: Sh,
  },
  Ps = [
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
      website: "Fault Tracker",
      src: "/project/new/2.Fault_Tracker.png",
      webSiteName:
        "Fault-Tracker is a comprehensive system developed for managing various aspects of a business related to manufacturing, distribution, and customer service. The project consists of a frontend built with Next.js, a backend powered by Node.js, MongoDB used as the primary database, and integrates Web3 MetaMask for blockchain connectivity for users.",
      userId:
        "Language used: Nodejs, Mongodb, Reactjs, Nextjs, Expressjs and Metamask",
      websiteLink: "https://github.com/shivam6862/Fault-Tracker",
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
      website: "XR Vizion Botsmiths",
      src: "/project/new/4.Botsmiths.png",
      webSiteName:
        "Welcome to our ChatBot application! This application is designed to handle various types of inputs including text, PDF files, and audio files. It processes these inputs and provides responses accordingly. The application also includes features such as user authentication, profile management, and different pages like home, login, signup, and forgot password.",
      userId:
        "Language used: Nodejs, Python, Mongodb, Reactjs, Nextjs and Next-auth",
      websiteLink: "https://github.com/shivam6862/XR-Vizion-Botsmiths",
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
      website: "StreamTube",
      src: "/project/new/5.StreamTube.png",
      webSiteName:
        "StreamTube is a full-stack web application built using Next.js for the frontend, Node.js for the backend, and MongoDB for the database. This clone mimics the popular video-sharing platform StreamTube, allowing users to explore videos, subscribe to channels, and interact with content similar to the real StreamTube platform. With responsive design and dynamic content loading, it offers a seamless and engaging experience for users to enjoy videos and interact with their favorite channels.",
      userId: "Language used: Reactjs, Nextjs",
      websiteLink: "https://github.com/shivam6862/StreamTube",
    },
    {
      website: "IIT ROORKEEE MOTORSPORTS",
      src: "/project/new/6.iitrms.png",
      webSiteName:
        "Experienced NextJs developer skilled in creating dynamic and responsive websites. Developed and launched a professional website for IIT Roorkee Motorsports Club, showcasing strong proficiency in front-end technologies. Proven ability to translate design concepts into user-friendly interfaces, ensuring seamless user experiences and optimal performance",
      userId: "Language used: Reactjs, Nextjs",
      websiteLink: "https://github.com/shivam6862/iitrmse",
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
      website: "DSA Visualizer App",
      src: "/project/4.DSA.png",
      webSiteName:
        "It contains various algorithms related to sorting, graphs, trees, and General problems. The project provides a visual interface to help users better understand how these algorithms work.",
      userId: "Language used: React and Javascript",
      websiteLink: "https://github.com/shivam6862/DSA-Visualizer",
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
      website: "Almighty Crafters",
      src: "/project/10.almighty.png",
      webSiteName:
        "This web app is a showcase of digital arts made from designers of budding startup Almighty Crafters",
      userId: "Language used: React",
      websiteLink: "https://github.com/shivam6862/AlmightyCrafters.github.io",
    },
    {
      website: "Cut Fruit",
      src: "/project/11.game.png",
      webSiteName:
        "This is a simple fruit cutting game that users can come and play for fun",
      userId: "Language used: Html, Css and Jquery",
      websiteLink: "https://github.com/shivam6862/shivam6862.github.io",
    },
  ],
  xh = "_background_1pq48_1",
  Eh = "_container_1pq48_19",
  Nh = "_box_1pq48_45",
  Ch = "_websiteimage_1pq48_81",
  Ph = "_cross_1pq48_147",
  Lh = "__box_1rqzu_45_1pq48_221",
  Rn = {
    background: xh,
    container: Eh,
    box: Nh,
    "middle-top": "_middle-top_1pq48_1",
    websiteimage: Ch,
    cross: Ph,
    _box_1rqzu_45: Lh,
  },
  Th = ({ data: e, setCard: t }) =>
    F(yd, {
      children: [
        p("div", { className: Rn.background, onClick: t }),
        F("div", {
          className: Rn.container,
          children: [
            p("img", {
              src: "cross.svg",
              alt: "image",
              className: Rn.cross,
              onClick: t,
            }),
            F("div", {
              className: Rn.box,
              children: [
                p("h1", { children: e.website }),
                p("div", {
                  className: Rn.websiteimage,
                  children: p("img", { src: e.src, alt: e.website }),
                }),
                p("p", { children: e.userId }),
                p("p", { children: e.webSiteName }),
                p("button", {
                  children: p("a", {
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
  zh = () => {
    const [e, t] = N.useState(-1),
      n = () => {
        t(-1);
      };
    return F("div", {
      className: Ke.col,
      id: "work",
      children: [
        e !== -1 && p(Th, { data: Ps[e], setCard: n }),
        p("div", {
          className: Ke.row,
          children: F("div", {
            className: Ke.working,
            children: [
              p("div", { className: Ke.heading, children: "Projects" }),
              p("div", {
                className: Ke.works,
                children: Ps.map((r, l) =>
                  F(
                    "div",
                    {
                      className: Ke.work,
                      onClick: () => {
                        t(l);
                      },
                      id: `projects-${l + 1}`,
                      children: [
                        p("div", {
                          className: Ke.link_svg,
                          children: p("img", { src: "link.svg", alt: "link" }),
                        }),
                        p("div", {
                          className: Ke.work_info,
                          children: r.website,
                        }),
                        p("img", {
                          src: r.src,
                          className: Ke.img_fluid,
                          alt: "work_image",
                        }),
                      ],
                    },
                    l
                  )
                ),
              }),
            ],
          }),
        }),
      ],
    });
  },
  Rh = "_contact_4hmg4_1",
  jh = "_container_fluid_4hmg4_15",
  Ih = "_row_4hmg4_21",
  Mh = "_rowall_4hmg4_29",
  Dh = "_col_1_4hmg4_41",
  Oh = "_col_2_4hmg4_49",
  Fh = "_items_wrapper_4hmg4_57",
  $h = "_floating_item_4hmg4_87",
  Uh = "_link_4hmg4_105",
  Bh = "_text_light_4hmg4_113",
  Ah = "_text_light_heading_4hmg4_119",
  Vh = "_red_4hmg4_125",
  Wh = "_part_2_text_light_4hmg4_131",
  Hh = "_form_group_4hmg4_145",
  Qh = "_form_control_4hmg4_159",
  Kh = "_but_red_4hmg4_173",
  Yh = "_first_item_4hmg4_205",
  Gh = "_float_4hmg4_87",
  Xh = "_second_item_4hmg4_211",
  Jh = "_third_item_4hmg4_217",
  Zh = "_fourth_item_4hmg4_223",
  qh = "_fifth_item_4hmg4_229",
  bh = "_contact_form_4hmg4_263",
  eg = "_error_message_4hmg4_345",
  j = {
    contact: Rh,
    container_fluid: jh,
    row: Ih,
    rowall: Mh,
    col_1: Dh,
    col_2: Oh,
    items_wrapper: Fh,
    floating_item: $h,
    link: Uh,
    text_light: Bh,
    text_light_heading: Ah,
    red: Vh,
    part_2_text_light: Wh,
    form_group: Hh,
    form_control: Qh,
    but_red: Kh,
    first_item: Yh,
    float: Gh,
    second_item: Xh,
    third_item: Jh,
    fourth_item: Zh,
    fifth_item: qh,
    contact_form: bh,
    error_message: eg,
  },
  tg = () => {
    const [e, t] = N.useState(""),
      [n, r] = N.useState(""),
      [l, o] = N.useState(""),
      [i, u] = N.useState(""),
      s = async () => {
        var a =
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (n.trim() == "" || l.trim() == "" || e.trim() == "") {
          u("Fill the email and name and message.."),
            setTimeout(() => {
              u("");
            }, 2e3);
          return;
        }
        if (n.match(a)) u("");
        else {
          setTimeout(() => {
            u("");
          }, 2e3),
            u("Fill the correct email..");
          return;
        }
        u("");
        const h = encodeURIComponent("Contact Form Submission"),
          g = encodeURIComponent(
            `Name: ${e}%0D%0AEmail: ${n}%0D%0AMessage: ${l}`
          ),
          m = `mailto:shivam6862mau@gmail.com?subject=${h}&body=${g}`;
        window.open(m), r(""), t(""), o("");
      };
    return p("div", {
      className: j.contact,
      id: "contact",
      children: p("div", {
        className: j.container_fluid,
        children: F("div", {
          className: j.rowall,
          children: [
            p("div", {
              className: j.col_1,
              children: F("div", {
                className: `${j.items_wrapper} ${j.row}`,
                children: [
                  p("div", {
                    className: `${j.floating_item} ${j.first_item}`,
                    children: p("div", {
                      href: "#",
                      className: j.text_light,
                      children: p("i", {
                        className: j.link,
                        onClick: () =>
                          window.open(
                            "https://www.linkedin.com/in/shivam-kumar-14701b249/"
                          ),
                        children: "Connect by LinkedIn",
                      }),
                    }),
                  }),
                  p("div", {
                    className: `${j.floating_item} ${j.second_item}`,
                    children: p("div", {
                      href: "#",
                      className: j.text_light,
                      children: p("i", {
                        className: j.link,
                        onClick: () =>
                          window.open(
                            "https://www.instagram.com/shivam_kr_634/"
                          ),
                        children: "Connect by Instagram",
                      }),
                    }),
                  }),
                  p("div", {
                    className: `${j.floating_item} ${j.third_item}`,
                    children: p("div", {
                      className: j.text_light,
                      children: p("i", {
                        className: j.link,
                        onClick: () =>
                          window.open("https://github.com/shivam6862"),
                        children: "Github account",
                      }),
                    }),
                  }),
                  p("div", {
                    className: `${j.floating_item} ${j.fourth_item}`,
                    children: p("div", {
                      className: j.text_light,
                      children: p("i", {
                        className: j.link,
                        onClick: () =>
                          window.open("https://leetcode.com/1_shivam/"),
                        children: "Leetcode account",
                      }),
                    }),
                  }),
                  p("div", {
                    className: `${j.floating_item} ${j.fifth_item}`,
                    children: p("div", {
                      className: j.text_light,
                      children: p("i", {
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
            F("div", {
              className: j.col_2,
              children: [
                p("h1", {
                  className: `${j.text_light_heading} ${j.part_2_text_light}`,
                  children: "Stay Connected",
                }),
                p("div", {
                  className: `${j.contact_form}`,
                  children: F("div", {
                    className: j.form_group,
                    children: [
                      i
                        ? p("div", {
                            children: p("p", {
                              className: j.error_message,
                              children: i,
                            }),
                          })
                        : null,
                      p("input", {
                        type: "text",
                        className: j.form_control,
                        placeholder: "Name",
                        value: e,
                        onChange: (a) => t(a.target.value),
                      }),
                      p("input", {
                        type: "email",
                        className: j.form_control,
                        placeholder: "Email",
                        value: n,
                        onChange: (a) => r(a.target.value),
                      }),
                      p("textarea", {
                        className: j.form_control,
                        placeholder: "Message",
                        rows: "4",
                        value: l,
                        onChange: (a) => o(a.target.value),
                      }),
                      p("input", {
                        type: "submit",
                        className: `${j.form_control} ${j.but_red}`,
                        onClick: s,
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
  ng = "_last_h87q0_1",
  rg = "_container_fluid_h87q0_15",
  lg = "_row_h87q0_23",
  og = "_col_h87q0_39",
  ig = "_nav_h87q0_45",
  ug = "_nav_link_h87q0_63",
  sg = "_copyright_h87q0_73",
  ag = "_nav_item_h87q0_95",
  ee = {
    last: ng,
    container_fluid: rg,
    row: lg,
    col: og,
    nav: ig,
    nav_link: ug,
    copyright: sg,
    "footer-link": "_footer-link_h87q0_81",
    nav_item: ag,
  },
  cg = () =>
    p("div", {
      className: ee.last,
      id: "last",
      children: p("div", {
        className: ee.container_fluid,
        children: F("div", {
          className: ee.row,
          children: [
            p("div", {
              className: ee.col,
              children: F("ul", {
                className: ee.nav,
                children: [
                  p("li", {
                    className: ee.nav_item,
                    children: p("a", {
                      className: ee.nav_link,
                      href: "#name",
                      children: "Name",
                    }),
                  }),
                  p("li", {
                    className: ee.nav_item,
                    children: p("a", {
                      className: ee.nav_link,
                      href: "#about",
                      children: "About me",
                    }),
                  }),
                  p("li", {
                    className: ee.nav_item,
                    children: p("a", {
                      className: ee.nav_link,
                      href: "#language",
                      children: "Language",
                    }),
                  }),
                  p("li", {
                    className: ee.nav_item,
                    children: p("a", {
                      className: ee.nav_link,
                      href: "#Platform",
                      children: "Platform",
                    }),
                  }),
                  p("li", {
                    className: ee.nav_item,
                    children: p("a", {
                      className: ee.nav_link,
                      href: "#work",
                      children: "Work",
                    }),
                  }),
                  p("li", {
                    className: ee.nav_item,
                    children: p("a", {
                      className: ee.nav_link,
                      href: "#contact",
                      children: "Contact",
                    }),
                  }),
                ],
              }),
            }),
            p("p", {
              className: ee.copyright,
              children: "© 2023.. Made by shivam6862",
            }),
          ],
        }),
      }),
    }),
  dg = () =>
    F("div", {
      className: mm.home,
      children: [
        p(Sm, {}),
        p(Im, {}),
        p(mh, {}),
        p(zh, {}),
        p(tg, {}),
        p(cg, {}),
      ],
    }),
  fg = "_error_number_7tm59_1",
  pg = "_error_reason_7tm59_15",
  mg = "_error_des_7tm59_31",
  po = { error_number: fg, error_reason: pg, error_des: mg },
  hg = () =>
    F("div", {
      children: [
        p("div", { className: po.error_number, children: "404" }),
        p("div", { className: po.error_reason, children: "Page Not Found!" }),
        p("div", {
          className: po.error_des,
          children:
            "You've encountered an error. Please refresh the page, or try again later.",
        }),
      ],
    }),
  gg = [
    { path: "/", Component: dg },
    { path: "*", Component: hg },
  ],
  vg = () =>
    p(fm, {
      children: gg.map((e, t) =>
        p(Hc, { path: e.path, element: p(e.Component, {}) }, t)
      ),
    }),
  yg = "_backdrop_ke37f_1",
  _g = { backdrop: yg },
  wg = ({ Id: e, onClick: t }) =>
    p("div", {
      containerid: e,
      children: p("div", { className: _g.backdrop, onClick: t }),
    }),
  kg = "_positionfixed_osdia_1",
  Sg = "_line1_osdia_11",
  xg = "_line2_osdia_13",
  Eg = "_line3_osdia_15",
  Ng = "_hamburgerchange_osdia_31",
  Cg = "_navigation_osdia_99",
  Pg = "_logo_osdia_131",
  Lg = "_logo1_osdia_143",
  Tg = "_first_osdia_155",
  zg = "_navigationmenu_osdia_163",
  Rg = "_active_osdia_189",
  jg = "_hamburger_osdia_31",
  Ig = "_navigationmenuexpanded_osdia_291",
  J = {
    positionfixed: kg,
    line1: Sg,
    line2: xg,
    line3: Eg,
    hamburgerchange: Ng,
    navigation: Cg,
    logo: Pg,
    logo1: Lg,
    first: Tg,
    navigationmenu: zg,
    active: Rg,
    hamburger: jg,
    navigationmenuexpanded: Ig,
  },
  Mg = () => {
    const [e, t] = N.useState(!1),
      [n, r] = N.useState({ dynamicWidth: window.innerWidth }),
      l = () => {
        r({ dynamicWidth: window.innerWidth });
      };
    return (
      N.useEffect(
        () => (
          window.addEventListener("resize", l),
          () => {
            window.removeEventListener("resize", l);
          }
        ),
        [n]
      ),
      n.dynamicWidth >= 1e3 && e === !0 && t(!1),
      p("div", {
        className: J.positionfixed,
        children: F("nav", {
          className: J.navigation,
          children: [
            p("div", {
              id: "/",
              className: J.active1,
              children: p("div", {
                className: J.logo,
                children: p("img", { src: "/logo.jpg", alt: "logo" }),
              }),
            }),
            F("button", {
              className: e ? J.hamburgerchange : J.hamburger,
              onClick: () => {
                t(!e);
              },
              children: [
                p("div", { className: J.line1 }),
                p("div", { className: J.line2 }),
                p("div", { className: J.line3 }),
              ],
            }),
            e && p(wg, { Id: "backdrop", onClick: () => t(!e) }),
            p("div", {
              className: e ? J.navigationmenuexpanded : J.navigationmenu,
              children: F("ul", {
                children: [
                  p("li", {
                    className: J.first,
                    children: p("div", {
                      id: "/",
                      className: J.active,
                      onClick: () => {
                        t(!1);
                      },
                      children: p("div", {
                        className: J.logo1,
                        children: p("img", { src: "/logo.jpg", alt: "logo" }),
                      }),
                    }),
                  }),
                  p("li", {
                    children: p("a", {
                      href: "#name",
                      className: J.active,
                      onClick: () => {
                        t(!1);
                      },
                      children: "Name",
                    }),
                  }),
                  p("li", {
                    children: p("a", {
                      href: "#about",
                      className: J.active,
                      onClick: () => {
                        t(!1);
                      },
                      children: "About",
                    }),
                  }),
                  p("li", {
                    children: p("a", {
                      href: "#language",
                      className: J.active,
                      onClick: () => {
                        t(!1);
                      },
                      children: "Language",
                    }),
                  }),
                  p("li", {
                    children: p("a", {
                      href: "#work",
                      className: J.active,
                      onClick: () => {
                        t(!1);
                      },
                      children: "Work",
                    }),
                  }),
                  p("li", {
                    children: p("a", {
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
  Dg = "_App_1u7u7_1",
  Og = {
    App: Dg,
    "box-shadow-large": "_box-shadow-large_1u7u7_17",
    "box-shadow-small": "_box-shadow-small_1u7u7_53",
  };
function Fg() {
  return F("div", { className: Og.App, children: [p(Mg, {}), p(vg, {})] });
}
ho.createRoot(document.getElementById("root")).render(
  p(pm, { children: p(Fg, {}) })
);
