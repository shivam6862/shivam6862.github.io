function Kc(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const i = Object.getOwnPropertyDescriptor(r, l);
          i &&
            Object.defineProperty(
              e,
              l,
              i.get ? i : { enumerable: !0, get: () => r[l] }
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
    for (const i of l)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = n(l);
    fetch(l.href, i);
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
  Jc = {
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
  Xc = Symbol.for("react.portal"),
  Zc = Symbol.for("react.fragment"),
  qc = Symbol.for("react.strict_mode"),
  bc = Symbol.for("react.profiler"),
  ed = Symbol.for("react.provider"),
  td = Symbol.for("react.context"),
  nd = Symbol.for("react.forward_ref"),
  rd = Symbol.for("react.suspense"),
  ld = Symbol.for("react.memo"),
  id = Symbol.for("react.lazy"),
  cs = Symbol.iterator;
function od(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (cs && e[cs]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Lu = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Tu = Object.assign,
  ju = {};
function yn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = ju),
    (this.updater = n || Lu);
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
function zu() {}
zu.prototype = yn.prototype;
function po(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = ju),
    (this.updater = n || Lu);
}
var mo = (po.prototype = new zu());
mo.constructor = po;
Tu(mo, yn.prototype);
mo.isPureReactComponent = !0;
var ds = Array.isArray,
  Ru = Object.prototype.hasOwnProperty,
  ho = { current: null },
  Iu = { key: !0, ref: !0, __self: !0, __source: !0 };
function Du(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Ru.call(t, r) && !Iu.hasOwnProperty(r) && (l[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) l.children = n;
  else if (1 < s) {
    for (var u = Array(s), a = 0; a < s; a++) u[a] = arguments[a + 2];
    l.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) l[r] === void 0 && (l[r] = s[r]);
  return {
    $$typeof: ar,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: ho.current,
  };
}
function sd(e, t) {
  return {
    $$typeof: ar,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function go(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ar;
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
function Ul(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? ud("" + e.key)
    : t.toString(36);
}
function Ir(e, t, n, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ar:
          case Xc:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === "" ? "." + Ul(o, 0) : r),
      ds(l)
        ? ((n = ""),
          e != null && (n = e.replace(fs, "$&/") + "/"),
          Ir(l, t, n, "", function (a) {
            return a;
          }))
        : l != null &&
          (go(l) &&
            (l = sd(
              l,
              n +
                (!l.key || (o && o.key === l.key)
                  ? ""
                  : ("" + l.key).replace(fs, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), ds(e)))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var u = r + Ul(i, s);
      o += Ir(i, t, n, u, l);
    }
  else if (((u = od(e)), typeof u == "function"))
    for (e = u.call(e), s = 0; !(i = e.next()).done; )
      (i = i.value), (u = r + Ul(i, s++)), (o += Ir(i, t, n, u, l));
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
  return o;
}
function gr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Ir(e, r, "", "", function (i) {
      return t.call(n, i, l++);
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
  Dr = { transition: null },
  cd = {
    ReactCurrentDispatcher: fe,
    ReactCurrentBatchConfig: Dr,
    ReactCurrentOwner: ho,
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
    if (!go(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
I.Component = yn;
I.Fragment = Zc;
I.Profiler = bc;
I.PureComponent = po;
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
  var r = Tu({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = ho.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (u in t)
      Ru.call(t, u) &&
        !Iu.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    s = Array(u);
    for (var a = 0; a < u; a++) s[a] = arguments[a + 2];
    r.children = s;
  }
  return { $$typeof: ar, type: e.type, key: l, ref: i, props: r, _owner: o };
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
I.createElement = Du;
I.createFactory = function (e) {
  var t = Du.bind(null, e);
  return (t.type = e), t;
};
I.createRef = function () {
  return { current: null };
};
I.forwardRef = function (e) {
  return { $$typeof: nd, render: e };
};
I.isValidElement = go;
I.lazy = function (e) {
  return { $$typeof: id, _payload: { _status: -1, _result: e }, _init: ad };
};
I.memo = function (e, t) {
  return { $$typeof: ld, type: e, compare: t === void 0 ? null : t };
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
const dd = Yc(N),
  pi = Kc({ __proto__: null, default: dd }, [N]);
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
function Mu(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) hd.call(t, r) && !vd.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: pd,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: gd.current,
  };
}
vl.Fragment = md;
vl.jsx = Mu;
vl.jsxs = Mu;
(function (e) {
  e.exports = vl;
})(Gc);
const yd = Qn.Fragment,
  p = Qn.jsx,
  O = Qn.jsxs;
var mi = {},
  hi = {},
  wd = {
    get exports() {
      return hi;
    },
    set exports(e) {
      hi = e;
    },
  },
  Ne = {},
  gi = {},
  _d = {
    get exports() {
      return gi;
    },
    set exports(e) {
      gi = e;
    },
  },
  Fu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(E, j) {
    var z = E.length;
    E.push(j);
    e: for (; 0 < z; ) {
      var Y = (z - 1) >>> 1,
        b = E[Y];
      if (0 < l(b, j)) (E[Y] = j), (E[z] = b), (z = Y);
      else break e;
    }
  }
  function n(E) {
    return E.length === 0 ? null : E[0];
  }
  function r(E) {
    if (E.length === 0) return null;
    var j = E[0],
      z = E.pop();
    if (z !== j) {
      E[0] = z;
      e: for (var Y = 0, b = E.length, mr = b >>> 1; Y < mr; ) {
        var Ct = 2 * (Y + 1) - 1,
          $l = E[Ct],
          Pt = Ct + 1,
          hr = E[Pt];
        if (0 > l($l, z))
          Pt < b && 0 > l(hr, $l)
            ? ((E[Y] = hr), (E[Pt] = z), (Y = Pt))
            : ((E[Y] = $l), (E[Ct] = z), (Y = Ct));
        else if (Pt < b && 0 > l(hr, z)) (E[Y] = hr), (E[Pt] = z), (Y = Pt);
        else break e;
      }
    }
    return j;
  }
  function l(E, j) {
    var z = E.sortIndex - j.sortIndex;
    return z !== 0 ? z : E.id - j.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      s = o.now();
    e.unstable_now = function () {
      return o.now() - s;
    };
  }
  var u = [],
    a = [],
    h = 1,
    g = null,
    m = 3,
    _ = !1,
    k = !1,
    w = !1,
    T = typeof setTimeout == "function" ? setTimeout : null,
    d = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function f(E) {
    for (var j = n(a); j !== null; ) {
      if (j.callback === null) r(a);
      else if (j.startTime <= E)
        r(a), (j.sortIndex = j.expirationTime), t(u, j);
      else break;
      j = n(a);
    }
  }
  function v(E) {
    if (((w = !1), f(E), !k))
      if (n(u) !== null) (k = !0), Fl(x);
      else {
        var j = n(a);
        j !== null && Ol(v, j.startTime - E);
      }
  }
  function x(E, j) {
    (k = !1), w && ((w = !1), d(L), (L = -1)), (_ = !0);
    var z = m;
    try {
      for (
        f(j), g = n(u);
        g !== null && (!(g.expirationTime > j) || (E && !Ie()));

      ) {
        var Y = g.callback;
        if (typeof Y == "function") {
          (g.callback = null), (m = g.priorityLevel);
          var b = Y(g.expirationTime <= j);
          (j = e.unstable_now()),
            typeof b == "function" ? (g.callback = b) : g === n(u) && r(u),
            f(j);
        } else r(u);
        g = n(u);
      }
      if (g !== null) var mr = !0;
      else {
        var Ct = n(a);
        Ct !== null && Ol(v, Ct.startTime - j), (mr = !1);
      }
      return mr;
    } finally {
      (g = null), (m = z), (_ = !1);
    }
  }
  var C = !1,
    P = null,
    L = -1,
    K = 5,
    D = -1;
  function Ie() {
    return !(e.unstable_now() - D < K);
  }
  function kn() {
    if (P !== null) {
      var E = e.unstable_now();
      D = E;
      var j = !0;
      try {
        j = P(!0, E);
      } finally {
        j ? Sn() : ((C = !1), (P = null));
      }
    } else C = !1;
  }
  var Sn;
  if (typeof c == "function")
    Sn = function () {
      c(kn);
    };
  else if (typeof MessageChannel < "u") {
    var as = new MessageChannel(),
      Qc = as.port2;
    (as.port1.onmessage = kn),
      (Sn = function () {
        Qc.postMessage(null);
      });
  } else
    Sn = function () {
      T(kn, 0);
    };
  function Fl(E) {
    (P = E), C || ((C = !0), Sn());
  }
  function Ol(E, j) {
    L = T(function () {
      E(e.unstable_now());
    }, j);
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
      k || _ || ((k = !0), Fl(x));
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
      return n(u);
    }),
    (e.unstable_next = function (E) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var j = 3;
          break;
        default:
          j = m;
      }
      var z = m;
      m = j;
      try {
        return E();
      } finally {
        m = z;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (E, j) {
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
      var z = m;
      m = E;
      try {
        return j();
      } finally {
        m = z;
      }
    }),
    (e.unstable_scheduleCallback = function (E, j, z) {
      var Y = e.unstable_now();
      switch (
        (typeof z == "object" && z !== null
          ? ((z = z.delay), (z = typeof z == "number" && 0 < z ? Y + z : Y))
          : (z = Y),
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
        (b = z + b),
        (E = {
          id: h++,
          callback: j,
          priorityLevel: E,
          startTime: z,
          expirationTime: b,
          sortIndex: -1,
        }),
        z > Y
          ? ((E.sortIndex = z),
            t(a, E),
            n(u) === null &&
              E === n(a) &&
              (w ? (d(L), (L = -1)) : (w = !0), Ol(v, z - Y)))
          : ((E.sortIndex = b), t(u, E), k || _ || ((k = !0), Fl(x))),
        E
      );
    }),
    (e.unstable_shouldYield = Ie),
    (e.unstable_wrapCallback = function (E) {
      var j = m;
      return function () {
        var z = m;
        m = j;
        try {
          return E.apply(this, arguments);
        } finally {
          m = z;
        }
      };
    });
})(Fu);
(function (e) {
  e.exports = Fu;
})(_d);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ou = N,
  Ee = gi;
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
var $u = new Set(),
  Kn = {};
function At(e, t) {
  dn(e, t), dn(e + "Capture", t);
}
function dn(e, t) {
  for (Kn[e] = t, e = 0; e < t.length; e++) $u.add(t[e]);
}
var qe = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  vi = Object.prototype.hasOwnProperty,
  kd =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ps = {},
  ms = {};
function Sd(e) {
  return vi.call(ms, e)
    ? !0
    : vi.call(ps, e)
    ? !1
    : kd.test(e)
    ? (ms[e] = !0)
    : ((ps[e] = !0), !1);
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
function pe(e, t, n, r, l, i, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
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
var vo = /[\-:]([a-z])/g;
function yo(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(vo, yo);
    ie[t] = new pe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(vo, yo);
    ie[t] = new pe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(vo, yo);
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
function wo(e, t, n, r) {
  var l = ie.hasOwnProperty(t) ? ie[t] : null;
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
var nt = Ou.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  vr = Symbol.for("react.element"),
  Qt = Symbol.for("react.portal"),
  Kt = Symbol.for("react.fragment"),
  _o = Symbol.for("react.strict_mode"),
  yi = Symbol.for("react.profiler"),
  Uu = Symbol.for("react.provider"),
  Bu = Symbol.for("react.context"),
  ko = Symbol.for("react.forward_ref"),
  wi = Symbol.for("react.suspense"),
  _i = Symbol.for("react.suspense_list"),
  So = Symbol.for("react.memo"),
  ot = Symbol.for("react.lazy"),
  Au = Symbol.for("react.offscreen"),
  hs = Symbol.iterator;
function xn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (hs && e[hs]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var H = Object.assign,
  Bl;
function Rn(e) {
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
          i = r.stack.split(`
`),
          o = l.length - 1,
          s = i.length - 1;
        1 <= o && 0 <= s && l[o] !== i[s];

      )
        s--;
      for (; 1 <= o && 0 <= s; o--, s--)
        if (l[o] !== i[s]) {
          if (o !== 1 || s !== 1)
            do
              if ((o--, s--, 0 > s || l[o] !== i[s])) {
                var u =
                  `
` + l[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= o && 0 <= s);
          break;
        }
    }
  } finally {
    (Al = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Rn(e) : "";
}
function Nd(e) {
  switch (e.tag) {
    case 5:
      return Rn(e.type);
    case 16:
      return Rn("Lazy");
    case 13:
      return Rn("Suspense");
    case 19:
      return Rn("SuspenseList");
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
function ki(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Kt:
      return "Fragment";
    case Qt:
      return "Portal";
    case yi:
      return "Profiler";
    case _o:
      return "StrictMode";
    case wi:
      return "Suspense";
    case _i:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Bu:
        return (e.displayName || "Context") + ".Consumer";
      case Uu:
        return (e._context.displayName || "Context") + ".Provider";
      case ko:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case So:
        return (
          (t = e.displayName || null), t !== null ? t : ki(e.type) || "Memo"
        );
      case ot:
        (t = e._payload), (e = e._init);
        try {
          return ki(e(t));
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
      return ki(t);
    case 8:
      return t === _o ? "StrictMode" : "Mode";
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
function Vu(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Pd(e) {
  var t = Vu(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          (r = "" + o), i.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
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
function Wu(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Vu(e) ? (e.checked ? "true" : "false") : e.value),
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
function Si(e, t) {
  var n = t.checked;
  return H({}, t, {
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
function Hu(e, t) {
  (t = t.checked), t != null && wo(e, "checked", t, !1);
}
function xi(e, t) {
  Hu(e, t);
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
    ? Ei(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Ei(e, t.type, kt(t.defaultValue)),
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
function Ei(e, t, n) {
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
function Ni(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(y(91));
  return H({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function ys(e, t) {
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
function Qu(e, t) {
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
function Ku(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ci(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Ku(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var wr,
  Yu = (function (e) {
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
  Ld = ["Webkit", "ms", "Moz", "O"];
Object.keys(Fn).forEach(function (e) {
  Ld.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Fn[t] = Fn[e]);
  });
});
function Gu(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Fn.hasOwnProperty(e) && Fn[e])
    ? ("" + t).trim()
    : t + "px";
}
function Ju(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = Gu(n, t[n], r);
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
function Pi(e, t) {
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
function Li(e, t) {
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
var Ti = null;
function xo(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ji = null,
  ln = null,
  on = null;
function _s(e) {
  if ((e = fr(e))) {
    if (typeof ji != "function") throw Error(y(280));
    var t = e.stateNode;
    t && ((t = Sl(t)), ji(e.stateNode, e.type, t));
  }
}
function Xu(e) {
  ln ? (on ? on.push(e) : (on = [e])) : (ln = e);
}
function Zu() {
  if (ln) {
    var e = ln,
      t = on;
    if (((on = ln = null), _s(e), t)) for (e = 0; e < t.length; e++) _s(t[e]);
  }
}
function qu(e, t) {
  return e(t);
}
function bu() {}
var Wl = !1;
function ea(e, t, n) {
  if (Wl) return e(t, n);
  Wl = !0;
  try {
    return qu(e, t, n);
  } finally {
    (Wl = !1), (ln !== null || on !== null) && (bu(), Zu());
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
var zi = !1;
if (qe)
  try {
    var En = {};
    Object.defineProperty(En, "passive", {
      get: function () {
        zi = !0;
      },
    }),
      window.addEventListener("test", En, En),
      window.removeEventListener("test", En, En);
  } catch {
    zi = !1;
  }
function jd(e, t, n, r, l, i, o, s, u) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (h) {
    this.onError(h);
  }
}
var On = !1,
  Kr = null,
  Yr = !1,
  Ri = null,
  zd = {
    onError: function (e) {
      (On = !0), (Kr = e);
    },
  };
function Rd(e, t, n, r, l, i, o, s, u) {
  (On = !1), (Kr = null), jd.apply(zd, arguments);
}
function Id(e, t, n, r, l, i, o, s, u) {
  if ((Rd.apply(this, arguments), On)) {
    if (On) {
      var a = Kr;
      (On = !1), (Kr = null);
    } else throw Error(y(198));
    Yr || ((Yr = !0), (Ri = a));
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
function ks(e) {
  if (Vt(e) !== e) throw Error(y(188));
}
function Dd(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Vt(e)), t === null)) throw Error(y(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return ks(l), e;
        if (i === r) return ks(l), t;
        i = i.sibling;
      }
      throw Error(y(188));
    }
    if (n.return !== r.return) (n = l), (r = i);
    else {
      for (var o = !1, s = l.child; s; ) {
        if (s === n) {
          (o = !0), (n = l), (r = i);
          break;
        }
        if (s === r) {
          (o = !0), (r = l), (n = i);
          break;
        }
        s = s.sibling;
      }
      if (!o) {
        for (s = i.child; s; ) {
          if (s === n) {
            (o = !0), (n = i), (r = l);
            break;
          }
          if (s === r) {
            (o = !0), (r = i), (n = l);
            break;
          }
          s = s.sibling;
        }
        if (!o) throw Error(y(189));
      }
    }
    if (n.alternate !== r) throw Error(y(190));
  }
  if (n.tag !== 3) throw Error(y(188));
  return n.stateNode.current === n ? e : t;
}
function na(e) {
  return (e = Dd(e)), e !== null ? ra(e) : null;
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
  Ss = Ee.unstable_cancelCallback,
  Md = Ee.unstable_shouldYield,
  Fd = Ee.unstable_requestPaint,
  G = Ee.unstable_now,
  Od = Ee.unstable_getCurrentPriorityLevel,
  Eo = Ee.unstable_ImmediatePriority,
  ia = Ee.unstable_UserBlockingPriority,
  Gr = Ee.unstable_NormalPriority,
  $d = Ee.unstable_LowPriority,
  oa = Ee.unstable_IdlePriority,
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
var _r = 64,
  kr = 4194304;
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
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var s = o & ~l;
    s !== 0 ? (r = Dn(s)) : ((i &= o), i !== 0 && (r = Dn(i)));
  } else (o = n & ~l), o !== 0 ? (r = Dn(o)) : i !== 0 && (r = Dn(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
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
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - $e(i),
      s = 1 << o,
      u = l[o];
    u === -1
      ? (!(s & n) || s & r) && (l[o] = Wd(s, t))
      : u <= t && (e.expiredLanes |= s),
      (i &= ~s);
  }
}
function Ii(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function sa() {
  var e = _r;
  return (_r <<= 1), !(_r & 4194240) && (_r = 64), e;
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
      i = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
  }
}
function No(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - $e(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var F = 0;
function ua(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var aa,
  Co,
  ca,
  da,
  fa,
  Di = !1,
  Sr = [],
  pt = null,
  mt = null,
  ht = null,
  Jn = new Map(),
  Xn = new Map(),
  ut = [],
  Kd =
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
      Jn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Xn.delete(t.pointerId);
  }
}
function Nn(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = fr(t)), t !== null && Co(t)),
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
      var i = l.pointerId;
      return Jn.set(i, Nn(Jn.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (i = l.pointerId), Xn.set(i, Nn(Xn.get(i) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function pa(e) {
  var t = zt(e.target);
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
function Mr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Mi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Ti = r), n.target.dispatchEvent(r), (Ti = null);
    } else return (t = fr(n)), t !== null && Co(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Es(e, t, n) {
  Mr(e) && n.delete(t);
}
function Gd() {
  (Di = !1),
    pt !== null && Mr(pt) && (pt = null),
    mt !== null && Mr(mt) && (mt = null),
    ht !== null && Mr(ht) && (ht = null),
    Jn.forEach(Es),
    Xn.forEach(Es);
}
function Cn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Di ||
      ((Di = !0),
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
      Jn.forEach(t),
      Xn.forEach(t),
      n = 0;
    n < ut.length;
    n++
  )
    (r = ut[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < ut.length && ((n = ut[0]), n.blockedOn === null); )
    pa(n), n.blockedOn === null && ut.shift();
}
var sn = nt.ReactCurrentBatchConfig,
  Xr = !0;
function Jd(e, t, n, r) {
  var l = F,
    i = sn.transition;
  sn.transition = null;
  try {
    (F = 1), Po(e, t, n, r);
  } finally {
    (F = l), (sn.transition = i);
  }
}
function Xd(e, t, n, r) {
  var l = F,
    i = sn.transition;
  sn.transition = null;
  try {
    (F = 4), Po(e, t, n, r);
  } finally {
    (F = l), (sn.transition = i);
  }
}
function Po(e, t, n, r) {
  if (Xr) {
    var l = Mi(e, t, n, r);
    if (l === null) ei(e, t, r, Zr, n), xs(e, r);
    else if (Yd(l, e, t, n, r)) r.stopPropagation();
    else if ((xs(e, r), t & 4 && -1 < Kd.indexOf(e))) {
      for (; l !== null; ) {
        var i = fr(l);
        if (
          (i !== null && aa(i),
          (i = Mi(e, t, n, r)),
          i === null && ei(e, t, r, Zr, n),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else ei(e, t, r, null, n);
  }
}
var Zr = null;
function Mi(e, t, n, r) {
  if (((Zr = null), (e = xo(r)), (e = zt(e)), e !== null))
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
      switch (Od()) {
        case Eo:
          return 1;
        case ia:
          return 4;
        case Gr:
        case $d:
          return 16;
        case oa:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var ct = null,
  Lo = null,
  Fr = null;
function ha() {
  if (Fr) return Fr;
  var e,
    t = Lo,
    n = t.length,
    r,
    l = "value" in ct ? ct.value : ct.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
  return (Fr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Or(e) {
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
function Ns() {
  return !1;
}
function Ce(e) {
  function t(n, r, l, i, o) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(i) : i[s]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? xr
        : Ns),
      (this.isPropagationStopped = Ns),
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
  To = Ce(wn),
  dr = H({}, wn, { view: 0, detail: 0 }),
  Zd = Ce(dr),
  Ql,
  Kl,
  Pn,
  wl = H({}, dr, {
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
    getModifierState: jo,
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
  Cs = Ce(wl),
  qd = H({}, wl, { dataTransfer: 0 }),
  bd = Ce(qd),
  ef = H({}, dr, { relatedTarget: 0 }),
  Yl = Ce(ef),
  tf = H({}, wn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  nf = Ce(tf),
  rf = H({}, wn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  lf = Ce(rf),
  of = H({}, wn, { data: 0 }),
  Ps = Ce(of),
  sf = {
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
function jo() {
  return cf;
}
var df = H({}, dr, {
    key: function (e) {
      if (e.key) {
        var t = sf[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Or(e)), e === 13 ? "Enter" : String.fromCharCode(e))
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
    getModifierState: jo,
    charCode: function (e) {
      return e.type === "keypress" ? Or(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Or(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  ff = Ce(df),
  pf = H({}, wl, {
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
  Ls = Ce(pf),
  mf = H({}, dr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: jo,
  }),
  hf = Ce(mf),
  gf = H({}, wn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  vf = Ce(gf),
  yf = H({}, wl, {
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
  wf = Ce(yf),
  _f = [9, 13, 27, 32],
  zo = qe && "CompositionEvent" in window,
  $n = null;
qe && "documentMode" in document && ($n = document.documentMode);
var kf = qe && "TextEvent" in window && !$n,
  ga = qe && (!zo || ($n && 8 < $n && 11 >= $n)),
  Ts = String.fromCharCode(32),
  js = !1;
function va(e, t) {
  switch (e) {
    case "keyup":
      return _f.indexOf(t.keyCode) !== -1;
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
      return t.which !== 32 ? null : ((js = !0), Ts);
    case "textInput":
      return (e = t.data), e === Ts && js ? null : e;
    default:
      return null;
  }
}
function xf(e, t) {
  if (Yt)
    return e === "compositionend" || (!zo && va(e, t))
      ? ((e = ha()), (Fr = Lo = ct = null), (Yt = !1), e)
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
function zs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Ef[e.type] : t === "textarea";
}
function wa(e, t, n, r) {
  Xu(r),
    (t = qr(t, "onChange")),
    0 < t.length &&
      ((n = new To("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Un = null,
  qn = null;
function Nf(e) {
  ja(e, 0);
}
function _l(e) {
  var t = Xt(e);
  if (Wu(t)) return e;
}
function Cf(e, t) {
  if (e === "change") return t;
}
var _a = !1;
if (qe) {
  var Gl;
  if (qe) {
    var Jl = "oninput" in document;
    if (!Jl) {
      var Rs = document.createElement("div");
      Rs.setAttribute("oninput", "return;"),
        (Jl = typeof Rs.oninput == "function");
    }
    Gl = Jl;
  } else Gl = !1;
  _a = Gl && (!document.documentMode || 9 < document.documentMode);
}
function Is() {
  Un && (Un.detachEvent("onpropertychange", ka), (qn = Un = null));
}
function ka(e) {
  if (e.propertyName === "value" && _l(qn)) {
    var t = [];
    wa(t, qn, e, xo(e)), ea(Nf, t);
  }
}
function Pf(e, t, n) {
  e === "focusin"
    ? (Is(), (Un = t), (qn = n), Un.attachEvent("onpropertychange", ka))
    : e === "focusout" && Is();
}
function Lf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return _l(qn);
}
function Tf(e, t) {
  if (e === "click") return _l(t);
}
function jf(e, t) {
  if (e === "input" || e === "change") return _l(t);
}
function zf(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Be = typeof Object.is == "function" ? Object.is : zf;
function bn(e, t) {
  if (Be(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!vi.call(t, l) || !Be(e[l], t[l])) return !1;
  }
  return !0;
}
function Ds(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ms(e, t) {
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
function Ro(e) {
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
function Rf(e) {
  var t = xa(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Sa(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Ro(n)) {
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
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = Ms(n, i));
        var o = Ms(n, r);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
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
  Fi = null,
  Bn = null,
  Oi = !1;
function Fs(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Oi ||
    Gt == null ||
    Gt !== Qr(r) ||
    ((r = Gt),
    "selectionStart" in r && Ro(r)
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
      (r = qr(Fi, "onSelect")),
      0 < r.length &&
        ((t = new To("onSelect", "select", null, t, n)),
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
var Jt = {
    animationend: Er("Animation", "AnimationEnd"),
    animationiteration: Er("Animation", "AnimationIteration"),
    animationstart: Er("Animation", "AnimationStart"),
    transitionend: Er("Transition", "TransitionEnd"),
  },
  Xl = {},
  Ea = {};
qe &&
  ((Ea = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Jt.animationend.animation,
    delete Jt.animationiteration.animation,
    delete Jt.animationstart.animation),
  "TransitionEvent" in window || delete Jt.transitionend.transition);
function kl(e) {
  if (Xl[e]) return Xl[e];
  if (!Jt[e]) return e;
  var t = Jt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ea) return (Xl[e] = t[n]);
  return e;
}
var Na = kl("animationend"),
  Ca = kl("animationiteration"),
  Pa = kl("animationstart"),
  La = kl("transitionend"),
  Ta = new Map(),
  Os =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function xt(e, t) {
  Ta.set(e, t), At(t, [e]);
}
for (var Zl = 0; Zl < Os.length; Zl++) {
  var ql = Os[Zl],
    Df = ql.toLowerCase(),
    Mf = ql[0].toUpperCase() + ql.slice(1);
  xt(Df, "on" + Mf);
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
var Mn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Ff = new Set("cancel close invalid load scroll toggle".split(" ").concat(Mn));
function $s(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Id(r, t, void 0, e), (e.currentTarget = null);
}
function ja(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var s = r[o],
            u = s.instance,
            a = s.currentTarget;
          if (((s = s.listener), u !== i && l.isPropagationStopped())) break e;
          $s(l, s, a), (i = u);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((s = r[o]),
            (u = s.instance),
            (a = s.currentTarget),
            (s = s.listener),
            u !== i && l.isPropagationStopped())
          )
            break e;
          $s(l, s, a), (i = u);
        }
    }
  }
  if (Yr) throw ((e = Ri), (Yr = !1), (Ri = null), e);
}
function U(e, t) {
  var n = t[Vi];
  n === void 0 && (n = t[Vi] = new Set());
  var r = e + "__bubble";
  n.has(r) || (za(t, e, 2, !1), n.add(r));
}
function bl(e, t, n) {
  var r = 0;
  t && (r |= 4), za(n, e, r, t);
}
var Nr = "_reactListening" + Math.random().toString(36).slice(2);
function er(e) {
  if (!e[Nr]) {
    (e[Nr] = !0),
      $u.forEach(function (n) {
        n !== "selectionchange" && (Ff.has(n) || bl(n, !1, e), bl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Nr] || ((t[Nr] = !0), bl("selectionchange", !1, t));
  }
}
function za(e, t, n, r) {
  switch (ma(t)) {
    case 1:
      var l = Jd;
      break;
    case 4:
      l = Xd;
      break;
    default:
      l = Po;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !zi ||
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
function ei(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var s = r.stateNode.containerInfo;
        if (s === l || (s.nodeType === 8 && s.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var u = o.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = o.stateNode.containerInfo),
              u === l || (u.nodeType === 8 && u.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; s !== null; ) {
          if (((o = zt(s)), o === null)) return;
          if (((u = o.tag), u === 5 || u === 6)) {
            r = i = o;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  ea(function () {
    var a = i,
      h = xo(n),
      g = [];
    e: {
      var m = Ta.get(e);
      if (m !== void 0) {
        var _ = To,
          k = e;
        switch (e) {
          case "keypress":
            if (Or(n) === 0) break e;
          case "keydown":
          case "keyup":
            _ = ff;
            break;
          case "focusin":
            (k = "focus"), (_ = Yl);
            break;
          case "focusout":
            (k = "blur"), (_ = Yl);
            break;
          case "beforeblur":
          case "afterblur":
            _ = Yl;
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
            _ = Cs;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            _ = bd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            _ = hf;
            break;
          case Na:
          case Ca:
          case Pa:
            _ = nf;
            break;
          case La:
            _ = vf;
            break;
          case "scroll":
            _ = Zd;
            break;
          case "wheel":
            _ = wf;
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
        var w = (t & 4) !== 0,
          T = !w && e === "scroll",
          d = w ? (m !== null ? m + "Capture" : null) : m;
        w = [];
        for (var c = a, f; c !== null; ) {
          f = c;
          var v = f.stateNode;
          if (
            (f.tag === 5 &&
              v !== null &&
              ((f = v),
              d !== null && ((v = Gn(c, d)), v != null && w.push(tr(c, v, f)))),
            T)
          )
            break;
          c = c.return;
        }
        0 < w.length &&
          ((m = new _(m, k, null, n, h)), g.push({ event: m, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (_ = e === "mouseout" || e === "pointerout"),
          m &&
            n !== Ti &&
            (k = n.relatedTarget || n.fromElement) &&
            (zt(k) || k[be]))
        )
          break e;
        if (
          (_ || m) &&
          ((m =
            h.window === h
              ? h
              : (m = h.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          _
            ? ((k = n.relatedTarget || n.toElement),
              (_ = a),
              (k = k ? zt(k) : null),
              k !== null &&
                ((T = Vt(k)), k !== T || (k.tag !== 5 && k.tag !== 6)) &&
                (k = null))
            : ((_ = null), (k = a)),
          _ !== k)
        ) {
          if (
            ((w = Cs),
            (v = "onMouseLeave"),
            (d = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = Ls),
              (v = "onPointerLeave"),
              (d = "onPointerEnter"),
              (c = "pointer")),
            (T = _ == null ? m : Xt(_)),
            (f = k == null ? m : Xt(k)),
            (m = new w(v, c + "leave", _, n, h)),
            (m.target = T),
            (m.relatedTarget = f),
            (v = null),
            zt(h) === a &&
              ((w = new w(d, c + "enter", k, n, h)),
              (w.target = f),
              (w.relatedTarget = T),
              (v = w)),
            (T = v),
            _ && k)
          )
            t: {
              for (w = _, d = k, c = 0, f = w; f; f = Wt(f)) c++;
              for (f = 0, v = d; v; v = Wt(v)) f++;
              for (; 0 < c - f; ) (w = Wt(w)), c--;
              for (; 0 < f - c; ) (d = Wt(d)), f--;
              for (; c--; ) {
                if (w === d || (d !== null && w === d.alternate)) break t;
                (w = Wt(w)), (d = Wt(d));
              }
              w = null;
            }
          else w = null;
          _ !== null && Us(g, m, _, w, !1),
            k !== null && T !== null && Us(g, T, k, w, !0);
        }
      }
      e: {
        if (
          ((m = a ? Xt(a) : window),
          (_ = m.nodeName && m.nodeName.toLowerCase()),
          _ === "select" || (_ === "input" && m.type === "file"))
        )
          var x = Cf;
        else if (zs(m))
          if (_a) x = jf;
          else {
            x = Lf;
            var C = Pf;
          }
        else
          (_ = m.nodeName) &&
            _.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (x = Tf);
        if (x && (x = x(e, a))) {
          wa(g, x, n, h);
          break e;
        }
        C && C(e, m, a),
          e === "focusout" &&
            (C = m._wrapperState) &&
            C.controlled &&
            m.type === "number" &&
            Ei(m, "number", m.value);
      }
      switch (((C = a ? Xt(a) : window), e)) {
        case "focusin":
          (zs(C) || C.contentEditable === "true") &&
            ((Gt = C), (Fi = a), (Bn = null));
          break;
        case "focusout":
          Bn = Fi = Gt = null;
          break;
        case "mousedown":
          Oi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Oi = !1), Fs(g, n, h);
          break;
        case "selectionchange":
          if (If) break;
        case "keydown":
        case "keyup":
          Fs(g, n, h);
      }
      var P;
      if (zo)
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
              (Lo = "value" in ct ? ct.value : ct.textContent),
              (Yt = !0))),
        (C = qr(a, L)),
        0 < C.length &&
          ((L = new Ps(L, e, null, n, h)),
          g.push({ event: L, listeners: C }),
          P ? (L.data = P) : ((P = ya(n)), P !== null && (L.data = P)))),
        (P = kf ? Sf(e, n) : xf(e, n)) &&
          ((a = qr(a, "onBeforeInput")),
          0 < a.length &&
            ((h = new Ps("onBeforeInput", "beforeinput", null, n, h)),
            g.push({ event: h, listeners: a }),
            (h.data = P)));
    }
    ja(g, t);
  });
}
function tr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function qr(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = Gn(e, n)),
      i != null && r.unshift(tr(e, i, l)),
      (i = Gn(e, t)),
      i != null && r.push(tr(e, i, l))),
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
function Us(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var s = n,
      u = s.alternate,
      a = s.stateNode;
    if (u !== null && u === r) break;
    s.tag === 5 &&
      a !== null &&
      ((s = a),
      l
        ? ((u = Gn(n, i)), u != null && o.unshift(tr(n, u, s)))
        : l || ((u = Gn(n, i)), u != null && o.push(tr(n, u, s)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Of = /\r\n?/g,
  $f = /\u0000|\uFFFD/g;
function Bs(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Of,
      `
`
    )
    .replace($f, "");
}
function Cr(e, t, n) {
  if (((t = Bs(t)), Bs(e) !== t && n)) throw Error(y(425));
}
function br() {}
var $i = null,
  Ui = null;
function Bi(e, t) {
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
var Ai = typeof setTimeout == "function" ? setTimeout : void 0,
  Uf = typeof clearTimeout == "function" ? clearTimeout : void 0,
  As = typeof Promise == "function" ? Promise : void 0,
  Bf =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof As < "u"
      ? function (e) {
          return As.resolve(null).then(e).catch(Af);
        }
      : Ai;
function Af(e) {
  setTimeout(function () {
    throw e;
  });
}
function ti(e, t) {
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
var _n = Math.random().toString(36).slice(2),
  We = "__reactFiber$" + _n,
  nr = "__reactProps$" + _n,
  be = "__reactContainer$" + _n,
  Vi = "__reactEvents$" + _n,
  Vf = "__reactListeners$" + _n,
  Wf = "__reactHandles$" + _n;
function zt(e) {
  var t = e[We];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[be] || n[We])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Vs(e); e !== null; ) {
          if ((n = e[We])) return n;
          e = Vs(e);
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
function Xt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(y(33));
}
function Sl(e) {
  return e[nr] || null;
}
var Wi = [],
  Zt = -1;
function Et(e) {
  return { current: e };
}
function B(e) {
  0 > Zt || ((e.current = Wi[Zt]), (Wi[Zt] = null), Zt--);
}
function $(e, t) {
  Zt++, (Wi[Zt] = e.current), (e.current = t);
}
var St = {},
  ae = Et(St),
  ve = Et(!1),
  Ft = St;
function fn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return St;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in n) l[i] = t[i];
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
function Ws(e, t, n) {
  if (ae.current !== St) throw Error(y(168));
  $(ae, t), $(ve, n);
}
function Ra(e, t, n) {
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
    (Ft = ae.current),
    $(ae, e),
    $(ve, ve.current),
    !0
  );
}
function Hs(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(y(169));
  n
    ? ((e = Ra(e, t, Ft)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      B(ve),
      B(ae),
      $(ae, e))
    : B(ve),
    $(ve, n);
}
var Ge = null,
  xl = !1,
  ni = !1;
function Ia(e) {
  Ge === null ? (Ge = [e]) : Ge.push(e);
}
function Hf(e) {
  (xl = !0), Ia(e);
}
function Nt() {
  if (!ni && Ge !== null) {
    ni = !0;
    var e = 0,
      t = F;
    try {
      var n = Ge;
      for (F = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ge = null), (xl = !1);
    } catch (l) {
      throw (Ge !== null && (Ge = Ge.slice(e + 1)), la(Eo, Nt), l);
    } finally {
      (F = t), (ni = !1);
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
  Ot = null,
  Je = 1,
  Xe = "";
function Tt(e, t) {
  (qt[bt++] = rl), (qt[bt++] = nl), (nl = e), (rl = t);
}
function Da(e, t, n) {
  (Pe[Le++] = Je), (Pe[Le++] = Xe), (Pe[Le++] = Ot), (Ot = e);
  var r = Je;
  e = Xe;
  var l = 32 - $e(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var i = 32 - $e(t) + l;
  if (30 < i) {
    var o = l - (l % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (Je = (1 << (32 - $e(t) + l)) | (n << l) | r),
      (Xe = i + e);
  } else (Je = (1 << i) | (n << l) | r), (Xe = e);
}
function Io(e) {
  e.return !== null && (Tt(e, 1), Da(e, 1, 0));
}
function Do(e) {
  for (; e === nl; )
    (nl = qt[--bt]), (qt[bt] = null), (rl = qt[--bt]), (qt[bt] = null);
  for (; e === Ot; )
    (Ot = Pe[--Le]),
      (Pe[Le] = null),
      (Xe = Pe[--Le]),
      (Pe[Le] = null),
      (Je = Pe[--Le]),
      (Pe[Le] = null);
}
var xe = null,
  Se = null,
  A = !1,
  Oe = null;
function Ma(e, t) {
  var n = Te(5, null, null, 0);
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
          ? ((n = Ot !== null ? { id: Je, overflow: Xe } : null),
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
function Hi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Qi(e) {
  if (A) {
    var t = Se;
    if (t) {
      var n = t;
      if (!Qs(e, t)) {
        if (Hi(e)) throw Error(y(418));
        t = gt(n.nextSibling);
        var r = xe;
        t && Qs(e, t)
          ? Ma(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (A = !1), (xe = e));
      }
    } else {
      if (Hi(e)) throw Error(y(418));
      (e.flags = (e.flags & -4097) | 2), (A = !1), (xe = e);
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
  if (!A) return Ks(e), (A = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Bi(e.type, e.memoizedProps))),
    t && (t = Se))
  ) {
    if (Hi(e)) throw (Fa(), Error(y(418)));
    for (; t; ) Ma(e, t), (t = gt(t.nextSibling));
  }
  if ((Ks(e), e.tag === 13)) {
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
function Fa() {
  for (var e = Se; e; ) e = gt(e.nextSibling);
}
function pn() {
  (Se = xe = null), (A = !1);
}
function Mo(e) {
  Oe === null ? (Oe = [e]) : Oe.push(e);
}
var Qf = nt.ReactCurrentBatchConfig;
function Me(e, t) {
  if (e && e.defaultProps) {
    (t = H({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var ll = Et(null),
  il = null,
  en = null,
  Fo = null;
function Oo() {
  Fo = en = il = null;
}
function $o(e) {
  var t = ll.current;
  B(ll), (e._currentValue = t);
}
function Ki(e, t, n) {
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
  (il = e),
    (Fo = en = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ge = !0), (e.firstContext = null));
}
function ze(e) {
  var t = e._currentValue;
  if (Fo !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), en === null)) {
      if (il === null) throw Error(y(308));
      (en = e), (il.dependencies = { lanes: 0, firstContext: e });
    } else en = en.next = e;
  return t;
}
var Rt = null;
function Uo(e) {
  Rt === null ? (Rt = [e]) : Rt.push(e);
}
function Oa(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Uo(t)) : ((n.next = l.next), (l.next = n)),
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
var st = !1;
function Bo(e) {
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
  if (((r = r.shared), M & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      et(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Uo(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    et(e, n)
  );
}
function $r(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), No(e, n);
  }
}
function Ys(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (l = i = o) : (i = i.next = o), (n = n.next);
      } while (n !== null);
      i === null ? (l = i = t) : (i = i.next = t);
    } else l = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
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
function ol(e, t, n, r) {
  var l = e.updateQueue;
  st = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    s = l.shared.pending;
  if (s !== null) {
    l.shared.pending = null;
    var u = s,
      a = u.next;
    (u.next = null), o === null ? (i = a) : (o.next = a), (o = u);
    var h = e.alternate;
    h !== null &&
      ((h = h.updateQueue),
      (s = h.lastBaseUpdate),
      s !== o &&
        (s === null ? (h.firstBaseUpdate = a) : (s.next = a),
        (h.lastBaseUpdate = u)));
  }
  if (i !== null) {
    var g = l.baseState;
    (o = 0), (h = a = u = null), (s = i);
    do {
      var m = s.lane,
        _ = s.eventTime;
      if ((r & m) === m) {
        h !== null &&
          (h = h.next =
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
            w = s;
          switch (((m = t), (_ = n), w.tag)) {
            case 1:
              if (((k = w.payload), typeof k == "function")) {
                g = k.call(_, g, m);
                break e;
              }
              g = k;
              break e;
            case 3:
              k.flags = (k.flags & -65537) | 128;
            case 0:
              if (
                ((k = w.payload),
                (m = typeof k == "function" ? k.call(_, g, m) : k),
                m == null)
              )
                break e;
              g = H({}, g, m);
              break e;
            case 2:
              st = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (m = l.effects),
          m === null ? (l.effects = [s]) : m.push(s));
      } else
        (_ = {
          eventTime: _,
          lane: m,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          h === null ? ((a = h = _), (u = g)) : (h = h.next = _),
          (o |= m);
      if (((s = s.next), s === null)) {
        if (((s = l.shared.pending), s === null)) break;
        (m = s),
          (s = m.next),
          (m.next = null),
          (l.lastBaseUpdate = m),
          (l.shared.pending = null);
      }
    } while (1);
    if (
      (h === null && (u = g),
      (l.baseState = u),
      (l.firstBaseUpdate = a),
      (l.lastBaseUpdate = h),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (o |= l.lane), (l = l.next);
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    (Ut |= o), (e.lanes = o), (e.memoizedState = g);
  }
}
function Gs(e, t, n) {
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
var Ua = new Ou.Component().refs;
function Yi(e, t, n, r) {
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
      l = wt(e),
      i = Ze(r, l);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = vt(e, i, l)),
      t !== null && (Ue(t, e, l, r), $r(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = de(),
      l = wt(e),
      i = Ze(r, l);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = vt(e, i, l)),
      t !== null && (Ue(t, e, l, r), $r(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = de(),
      r = wt(e),
      l = Ze(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = vt(e, l, r)),
      t !== null && (Ue(t, e, r, n), $r(t, e, r));
  },
};
function Js(e, t, n, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !bn(n, r) || !bn(l, i)
      : !0
  );
}
function Ba(e, t, n) {
  var r = !1,
    l = St,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = ze(i))
      : ((l = ye(t) ? Ft : ae.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? fn(e, l) : St)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = El),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Xs(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && El.enqueueReplaceState(t, t.state, null);
}
function Gi(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = Ua), Bo(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (l.context = ze(i))
    : ((i = ye(t) ? Ft : ae.current), (l.context = fn(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Yi(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && El.enqueueReplaceState(l, l.state, null),
      ol(e, n, l, r),
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
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var s = l.refs;
            s === Ua && (s = l.refs = {}),
              o === null ? delete s[i] : (s[i] = o);
          }),
          (t._stringRef = i),
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
function Zs(e) {
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
  function o(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function s(d, c, f, v) {
    return c === null || c.tag !== 6
      ? ((c = ai(f, d.mode, v)), (c.return = d), c)
      : ((c = l(c, f)), (c.return = d), c);
  }
  function u(d, c, f, v) {
    var x = f.type;
    return x === Kt
      ? h(d, c, f.props.children, v, f.key)
      : c !== null &&
        (c.elementType === x ||
          (typeof x == "object" &&
            x !== null &&
            x.$$typeof === ot &&
            Zs(x) === c.type))
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
      ? ((c = ci(f, d.mode, v)), (c.return = d), c)
      : ((c = l(c, f.children || [])), (c.return = d), c);
  }
  function h(d, c, f, v, x) {
    return c === null || c.tag !== 7
      ? ((c = Mt(f, d.mode, v, x)), (c.return = d), c)
      : ((c = l(c, f)), (c.return = d), c);
  }
  function g(d, c, f) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = ai("" + c, d.mode, f)), (c.return = d), c;
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
          return (c = ci(c, d.mode, f)), (c.return = d), c;
        case ot:
          var v = c._init;
          return g(d, v(c._payload), f);
      }
      if (In(c) || xn(c))
        return (c = Mt(c, d.mode, f, null)), (c.return = d), c;
      Lr(d, c);
    }
    return null;
  }
  function m(d, c, f, v) {
    var x = c !== null ? c.key : null;
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return x !== null ? null : s(d, c, "" + f, v);
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case vr:
          return f.key === x ? u(d, c, f, v) : null;
        case Qt:
          return f.key === x ? a(d, c, f, v) : null;
        case ot:
          return (x = f._init), m(d, c, x(f._payload), v);
      }
      if (In(f) || xn(f)) return x !== null ? null : h(d, c, f, v, null);
      Lr(d, f);
    }
    return null;
  }
  function _(d, c, f, v, x) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return (d = d.get(f) || null), s(c, d, "" + v, x);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case vr:
          return (d = d.get(v.key === null ? f : v.key) || null), u(c, d, v, x);
        case Qt:
          return (d = d.get(v.key === null ? f : v.key) || null), a(c, d, v, x);
        case ot:
          var C = v._init;
          return _(d, c, f, C(v._payload), x);
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
      var D = m(d, P, f[L], v);
      if (D === null) {
        P === null && (P = K);
        break;
      }
      e && P && D.alternate === null && t(d, P),
        (c = i(D, c, L)),
        C === null ? (x = D) : (C.sibling = D),
        (C = D),
        (P = K);
    }
    if (L === f.length) return n(d, P), A && Tt(d, L), x;
    if (P === null) {
      for (; L < f.length; L++)
        (P = g(d, f[L], v)),
          P !== null &&
            ((c = i(P, c, L)), C === null ? (x = P) : (C.sibling = P), (C = P));
      return A && Tt(d, L), x;
    }
    for (P = r(d, P); L < f.length; L++)
      (K = _(P, d, L, f[L], v)),
        K !== null &&
          (e && K.alternate !== null && P.delete(K.key === null ? L : K.key),
          (c = i(K, c, L)),
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
  function w(d, c, f, v) {
    var x = xn(f);
    if (typeof x != "function") throw Error(y(150));
    if (((f = x.call(f)), f == null)) throw Error(y(151));
    for (
      var C = (x = null), P = c, L = (c = 0), K = null, D = f.next();
      P !== null && !D.done;
      L++, D = f.next()
    ) {
      P.index > L ? ((K = P), (P = null)) : (K = P.sibling);
      var Ie = m(d, P, D.value, v);
      if (Ie === null) {
        P === null && (P = K);
        break;
      }
      e && P && Ie.alternate === null && t(d, P),
        (c = i(Ie, c, L)),
        C === null ? (x = Ie) : (C.sibling = Ie),
        (C = Ie),
        (P = K);
    }
    if (D.done) return n(d, P), A && Tt(d, L), x;
    if (P === null) {
      for (; !D.done; L++, D = f.next())
        (D = g(d, D.value, v)),
          D !== null &&
            ((c = i(D, c, L)), C === null ? (x = D) : (C.sibling = D), (C = D));
      return A && Tt(d, L), x;
    }
    for (P = r(d, P); !D.done; L++, D = f.next())
      (D = _(P, d, L, D.value, v)),
        D !== null &&
          (e && D.alternate !== null && P.delete(D.key === null ? L : D.key),
          (c = i(D, c, L)),
          C === null ? (x = D) : (C.sibling = D),
          (C = D));
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
                    x.$$typeof === ot &&
                    Zs(x) === C.type)
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
              ? ((c = Mt(f.props.children, d.mode, v, f.key)),
                (c.return = d),
                (d = c))
              : ((v = Hr(f.type, f.key, f.props, null, d.mode, v)),
                (v.ref = Ln(d, c, f)),
                (v.return = d),
                (d = v));
          }
          return o(d);
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
            (c = ci(f, d.mode, v)), (c.return = d), (d = c);
          }
          return o(d);
        case ot:
          return (C = f._init), T(d, c, C(f._payload), v);
      }
      if (In(f)) return k(d, c, f, v);
      if (xn(f)) return w(d, c, f, v);
      Lr(d, f);
    }
    return (typeof f == "string" && f !== "") || typeof f == "number"
      ? ((f = "" + f),
        c !== null && c.tag === 6
          ? (n(d, c.sibling), (c = l(c, f)), (c.return = d), (d = c))
          : (n(d, c), (c = ai(f, d.mode, v)), (c.return = d), (d = c)),
        o(d))
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
function Ao(e, t) {
  switch (($(lr, t), $(rr, e), $(Qe, pr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ci(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ci(t, e));
  }
  B(Qe), $(Qe, t);
}
function hn() {
  B(Qe), B(rr), B(lr);
}
function Wa(e) {
  It(lr.current);
  var t = It(Qe.current),
    n = Ci(t, e.type);
  t !== n && ($(rr, e), $(Qe, n));
}
function Vo(e) {
  rr.current === e && (B(Qe), B(rr));
}
var V = Et(0);
function sl(e) {
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
var ri = [];
function Wo() {
  for (var e = 0; e < ri.length; e++)
    ri[e]._workInProgressVersionPrimary = null;
  ri.length = 0;
}
var Ur = nt.ReactCurrentDispatcher,
  li = nt.ReactCurrentBatchConfig,
  $t = 0,
  W = null,
  Z = null,
  te = null,
  ul = !1,
  An = !1,
  ir = 0,
  Kf = 0;
function oe() {
  throw Error(y(321));
}
function Ho(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Be(e[n], t[n])) return !1;
  return !0;
}
function Qo(e, t, n, r, l, i) {
  if (
    (($t = i),
    (W = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ur.current = e === null || e.memoizedState === null ? Xf : Zf),
    (e = n(r, l)),
    An)
  ) {
    i = 0;
    do {
      if (((An = !1), (ir = 0), 25 <= i)) throw Error(y(301));
      (i += 1),
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
    (ul = !1),
    t)
  )
    throw Error(y(300));
  return e;
}
function Ko() {
  var e = ir !== 0;
  return (ir = 0), e;
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
function Re() {
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
function or(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ii(e) {
  var t = Re(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = Z,
    l = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      (l.next = i.next), (i.next = o);
    }
    (r.baseQueue = l = i), (n.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var s = (o = null),
      u = null,
      a = i;
    do {
      var h = a.lane;
      if (($t & h) === h)
        u !== null &&
          (u = u.next =
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
        u === null ? ((s = u = g), (o = r)) : (u = u.next = g),
          (W.lanes |= h),
          (Ut |= h);
      }
      a = a.next;
    } while (a !== null && a !== i);
    u === null ? (o = r) : (u.next = s),
      Be(r, t.memoizedState) || (ge = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (W.lanes |= i), (Ut |= i), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function oi(e) {
  var t = Re(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = (l = l.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== l);
    Be(i, t.memoizedState) || (ge = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Ha() {}
function Qa(e, t) {
  var n = W,
    r = Re(),
    l = t(),
    i = !Be(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (ge = !0)),
    (r = r.queue),
    Yo(Ga.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (te !== null && te.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      sr(9, Ya.bind(null, n, r, l, t), void 0, null),
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
  (t.value = n), (t.getSnapshot = r), Ja(t) && Xa(e);
}
function Ga(e, t, n) {
  return n(function () {
    Ja(t) && Xa(e);
  });
}
function Ja(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Be(e, n);
  } catch {
    return !0;
  }
}
function Xa(e) {
  var t = et(e, 1);
  t !== null && Ue(t, e, 1, -1);
}
function qs(e) {
  var t = Ve();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: or,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Jf.bind(null, W, e)),
    [t.memoizedState, e]
  );
}
function sr(e, t, n, r) {
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
  return Re().memoizedState;
}
function Br(e, t, n, r) {
  var l = Ve();
  (W.flags |= e),
    (l.memoizedState = sr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Nl(e, t, n, r) {
  var l = Re();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Z !== null) {
    var o = Z.memoizedState;
    if (((i = o.destroy), r !== null && Ho(r, o.deps))) {
      l.memoizedState = sr(t, n, i, r);
      return;
    }
  }
  (W.flags |= e), (l.memoizedState = sr(1 | t, n, i, r));
}
function bs(e, t) {
  return Br(8390656, 8, e, t);
}
function Yo(e, t) {
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
function Go() {}
function nc(e, t) {
  var n = Re();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ho(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function rc(e, t) {
  var n = Re();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ho(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function lc(e, t, n) {
  return $t & 21
    ? (Be(n, t) || ((n = sa()), (W.lanes |= n), (Ut |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ge = !0)), (e.memoizedState = n));
}
function Yf(e, t) {
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
function ic() {
  return Re().memoizedState;
}
function Gf(e, t, n) {
  var r = wt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    oc(e))
  )
    sc(t, n);
  else if (((n = Oa(e, t, n, r)), n !== null)) {
    var l = de();
    Ue(n, e, r, l), uc(n, t, r);
  }
}
function Jf(e, t, n) {
  var r = wt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (oc(e)) sc(t, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          s = i(o, n);
        if (((l.hasEagerState = !0), (l.eagerState = s), Be(s, o))) {
          var u = t.interleaved;
          u === null
            ? ((l.next = l), Uo(t))
            : ((l.next = u.next), (u.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = Oa(e, t, l, r)),
      n !== null && ((l = de()), Ue(n, e, r, l), uc(n, t, r));
  }
}
function oc(e) {
  var t = e.alternate;
  return e === W || (t !== null && t === W);
}
function sc(e, t) {
  An = ul = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function uc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), No(e, n);
  }
}
var al = {
    readContext: ze,
    useCallback: oe,
    useContext: oe,
    useEffect: oe,
    useImperativeHandle: oe,
    useInsertionEffect: oe,
    useLayoutEffect: oe,
    useMemo: oe,
    useReducer: oe,
    useRef: oe,
    useState: oe,
    useDebugValue: oe,
    useDeferredValue: oe,
    useTransition: oe,
    useMutableSource: oe,
    useSyncExternalStore: oe,
    useId: oe,
    unstable_isNewReconciler: !1,
  },
  Xf = {
    readContext: ze,
    useCallback: function (e, t) {
      return (Ve().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: ze,
    useEffect: bs,
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
    useState: qs,
    useDebugValue: Go,
    useDeferredValue: function (e) {
      return (Ve().memoizedState = e);
    },
    useTransition: function () {
      var e = qs(!1),
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
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        bs(Ga.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        sr(9, Ya.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ve(),
        t = ne.identifierPrefix;
      if (A) {
        var n = Xe,
          r = Je;
        (n = (r & ~(1 << (32 - $e(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = ir++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Kf++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Zf = {
    readContext: ze,
    useCallback: nc,
    useContext: ze,
    useEffect: Yo,
    useImperativeHandle: tc,
    useInsertionEffect: qa,
    useLayoutEffect: ba,
    useMemo: rc,
    useReducer: ii,
    useRef: Za,
    useState: function () {
      return ii(or);
    },
    useDebugValue: Go,
    useDeferredValue: function (e) {
      var t = Re();
      return lc(t, Z.memoizedState, e);
    },
    useTransition: function () {
      var e = ii(or)[0],
        t = Re().memoizedState;
      return [e, t];
    },
    useMutableSource: Ha,
    useSyncExternalStore: Qa,
    useId: ic,
    unstable_isNewReconciler: !1,
  },
  qf = {
    readContext: ze,
    useCallback: nc,
    useContext: ze,
    useEffect: Yo,
    useImperativeHandle: tc,
    useInsertionEffect: qa,
    useLayoutEffect: ba,
    useMemo: rc,
    useReducer: oi,
    useRef: Za,
    useState: function () {
      return oi(or);
    },
    useDebugValue: Go,
    useDeferredValue: function (e) {
      var t = Re();
      return Z === null ? (t.memoizedState = e) : lc(t, Z.memoizedState, e);
    },
    useTransition: function () {
      var e = oi(or)[0],
        t = Re().memoizedState;
      return [e, t];
    },
    useMutableSource: Ha,
    useSyncExternalStore: Qa,
    useId: ic,
    unstable_isNewReconciler: !1,
  };
function gn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Nd(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function si(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ji(e, t) {
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
      dl || ((dl = !0), (io = r)), Ji(e, t);
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
        Ji(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Ji(e, t),
          typeof r != "function" &&
            (yt === null ? (yt = new Set([this])) : yt.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function eu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new bf();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = pp.bind(null, e, t, n)), t.then(e, e));
}
function tu(e) {
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
function nu(e, t, n, r, l) {
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
function ru(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    un(t, l),
    (r = Qo(e, t, n, r, i, l)),
    (n = Ko()),
    e !== null && !ge
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        tt(e, t, l))
      : (A && n && Io(t), (t.flags |= 1), ce(e, t, r, l), t.child)
  );
}
function lu(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !ns(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), dc(e, t, i, r, l))
      : ((e = Hr(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : bn), n(o, r) && e.ref === t.ref)
    )
      return tt(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = _t(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function dc(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (bn(i, r) && e.ref === t.ref)
      if (((ge = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (ge = !0);
      else return (t.lanes = e.lanes), tt(e, t, l);
  }
  return Xi(e, t, n, r, l);
}
function fc(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        $(nn, ke),
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
          $(nn, ke),
          (ke |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        $(nn, ke),
        (ke |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      $(nn, ke),
      (ke |= r);
  return ce(e, t, l, n), t.child;
}
function pc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Xi(e, t, n, r, l) {
  var i = ye(n) ? Ft : ae.current;
  return (
    (i = fn(t, i)),
    un(t, l),
    (n = Qo(e, t, n, r, i, l)),
    (r = Ko()),
    e !== null && !ge
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        tt(e, t, l))
      : (A && r && Io(t), (t.flags |= 1), ce(e, t, n, l), t.child)
  );
}
function iu(e, t, n, r, l) {
  if (ye(n)) {
    var i = !0;
    tl(t);
  } else i = !1;
  if ((un(t, l), t.stateNode === null))
    Ar(e, t), Ba(t, n, r), Gi(t, n, r, l), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      s = t.memoizedProps;
    o.props = s;
    var u = o.context,
      a = n.contextType;
    typeof a == "object" && a !== null
      ? (a = ze(a))
      : ((a = ye(n) ? Ft : ae.current), (a = fn(t, a)));
    var h = n.getDerivedStateFromProps,
      g =
        typeof h == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    g ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((s !== r || u !== a) && Xs(t, o, r, a)),
      (st = !1);
    var m = t.memoizedState;
    (o.state = m),
      ol(t, r, o, l),
      (u = t.memoizedState),
      s !== r || m !== u || ve.current || st
        ? (typeof h == "function" && (Yi(t, n, h, r), (u = t.memoizedState)),
          (s = st || Js(t, n, s, r, m, u, a))
            ? (g ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (o.props = r),
          (o.state = u),
          (o.context = a),
          (r = s))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      $a(e, t),
      (s = t.memoizedProps),
      (a = t.type === t.elementType ? s : Me(t.type, s)),
      (o.props = a),
      (g = t.pendingProps),
      (m = o.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = ze(u))
        : ((u = ye(n) ? Ft : ae.current), (u = fn(t, u)));
    var _ = n.getDerivedStateFromProps;
    (h =
      typeof _ == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((s !== g || m !== u) && Xs(t, o, r, u)),
      (st = !1),
      (m = t.memoizedState),
      (o.state = m),
      ol(t, r, o, l);
    var k = t.memoizedState;
    s !== g || m !== k || ve.current || st
      ? (typeof _ == "function" && (Yi(t, n, _, r), (k = t.memoizedState)),
        (a = st || Js(t, n, a, r, m, k, u) || !1)
          ? (h ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, k, u),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, k, u)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (s === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = k)),
        (o.props = r),
        (o.state = k),
        (o.context = u),
        (r = a))
      : (typeof o.componentDidUpdate != "function" ||
          (s === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Zi(e, t, n, r, i, l);
}
function Zi(e, t, n, r, l, i) {
  pc(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && Hs(t, n, !1), tt(e, t, i);
  (r = t.stateNode), (ep.current = t);
  var s =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = mn(t, e.child, null, i)), (t.child = mn(t, null, s, i)))
      : ce(e, t, s, i),
    (t.memoizedState = r.state),
    l && Hs(t, n, !0),
    t.child
  );
}
function mc(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Ws(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Ws(e, t.context, !1),
    Ao(e, t.containerInfo);
}
function ou(e, t, n, r, l) {
  return pn(), Mo(l), (t.flags |= 256), ce(e, t, n, r), t.child;
}
var qi = { dehydrated: null, treeContext: null, retryLane: 0 };
function bi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function hc(e, t, n) {
  var r = t.pendingProps,
    l = V.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    s;
  if (
    ((s = o) ||
      (s = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    s
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    $(V, l & 1),
    e === null)
  )
    return (
      Qi(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = Ll(o, r, 0, null)),
              (e = Mt(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = bi(n)),
              (t.memoizedState = qi),
              e)
            : Jo(t, o))
    );
  if (((l = e.memoizedState), l !== null && ((s = l.dehydrated), s !== null)))
    return tp(e, t, o, r, s, l, n);
  if (i) {
    (i = r.fallback), (o = t.mode), (l = e.child), (s = l.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = _t(l, u)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      s !== null ? (i = _t(s, i)) : ((i = Mt(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? bi(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = qi),
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
function Jo(e, t) {
  return (
    (t = Ll({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Tr(e, t, n, r) {
  return (
    r !== null && Mo(r),
    mn(t, e.child, null, n),
    (e = Jo(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function tp(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = si(Error(y(422)))), Tr(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (l = t.mode),
        (r = Ll({ mode: "visible", children: r.children }, l, 0, null)),
        (i = Mt(i, l, o, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && mn(t, e.child, null, o),
        (t.child.memoizedState = bi(o)),
        (t.memoizedState = qi),
        i);
  if (!(t.mode & 1)) return Tr(e, t, o, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (i = Error(y(419))), (r = si(i, r, void 0)), Tr(e, t, o, r);
  }
  if (((s = (o & e.childLanes) !== 0), ge || s)) {
    if (((r = ne), r !== null)) {
      switch (o & -o) {
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
      (l = l & (r.suspendedLanes | o) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), et(e, l), Ue(r, e, l, -1));
    }
    return ts(), (r = si(Error(y(421)))), Tr(e, t, o, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = mp.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Se = gt(l.nextSibling)),
      (xe = t),
      (A = !0),
      (Oe = null),
      e !== null &&
        ((Pe[Le++] = Je),
        (Pe[Le++] = Xe),
        (Pe[Le++] = Ot),
        (Je = e.id),
        (Xe = e.overflow),
        (Ot = t)),
      (t = Jo(t, r.children)),
      (t.flags |= 4096),
      t);
}
function su(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ki(e.return, t, n);
}
function ui(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = l));
}
function gc(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((ce(e, t, r.children, n), (r = V.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && su(e, n, t);
        else if (e.tag === 19) su(e, n, t);
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
            e !== null && sl(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          ui(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && sl(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        ui(t, !0, n, null, i);
        break;
      case "together":
        ui(t, !1, null, null, void 0);
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
      e = t.child, n = _t(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = _t(e, e.pendingProps)), (n.return = t);
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
      Ao(t, t.stateNode.containerInfo);
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
var vc, eo, yc, wc;
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
eo = function () {};
yc = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), It(Qe.current);
    var i = null;
    switch (n) {
      case "input":
        (l = Si(e, l)), (r = Si(e, r)), (i = []);
        break;
      case "select":
        (l = H({}, l, { value: void 0 })),
          (r = H({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (l = Ni(e, l)), (r = Ni(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = br);
    }
    Pi(n, r);
    var o;
    n = null;
    for (a in l)
      if (!r.hasOwnProperty(a) && l.hasOwnProperty(a) && l[a] != null)
        if (a === "style") {
          var s = l[a];
          for (o in s) s.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          a !== "dangerouslySetInnerHTML" &&
            a !== "children" &&
            a !== "suppressContentEditableWarning" &&
            a !== "suppressHydrationWarning" &&
            a !== "autoFocus" &&
            (Kn.hasOwnProperty(a)
              ? i || (i = [])
              : (i = i || []).push(a, null));
    for (a in r) {
      var u = r[a];
      if (
        ((s = l != null ? l[a] : void 0),
        r.hasOwnProperty(a) && u !== s && (u != null || s != null))
      )
        if (a === "style")
          if (s) {
            for (o in s)
              !s.hasOwnProperty(o) ||
                (u && u.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in u)
              u.hasOwnProperty(o) &&
                s[o] !== u[o] &&
                (n || (n = {}), (n[o] = u[o]));
          } else n || (i || (i = []), i.push(a, n)), (n = u);
        else
          a === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (s = s ? s.__html : void 0),
              u != null && s !== u && (i = i || []).push(a, u))
            : a === "children"
            ? (typeof u != "string" && typeof u != "number") ||
              (i = i || []).push(a, "" + u)
            : a !== "suppressContentEditableWarning" &&
              a !== "suppressHydrationWarning" &&
              (Kn.hasOwnProperty(a)
                ? (u != null && a === "onScroll" && U("scroll", e),
                  i || s === u || (i = []))
                : (i = i || []).push(a, u));
    }
    n && (i = i || []).push("style", n);
    var a = i;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
wc = function (e, t, n, r) {
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
function se(e) {
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
  switch ((Do(t), t.tag)) {
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
      return ye(t.type) && el(), se(t), null;
    case 3:
      return (
        (r = t.stateNode),
        hn(),
        B(ve),
        B(ae),
        Wo(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Pr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Oe !== null && (uo(Oe), (Oe = null)))),
        eo(e, t),
        se(t),
        null
      );
    case 5:
      Vo(t);
      var l = It(lr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        yc(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(y(166));
          return se(t), null;
        }
        if (((e = It(Qe.current)), Pr(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[We] = t), (r[nr] = i), (e = (t.mode & 1) !== 0), n)) {
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
              for (l = 0; l < Mn.length; l++) U(Mn[l], r);
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
              gs(r, i), U("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                U("invalid", r);
              break;
            case "textarea":
              ys(r, i), U("invalid", r);
          }
          Pi(n, i), (l = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var s = i[o];
              o === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (i.suppressHydrationWarning !== !0 &&
                      Cr(r.textContent, s, e),
                    (l = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (i.suppressHydrationWarning !== !0 &&
                      Cr(r.textContent, s, e),
                    (l = ["children", "" + s]))
                : Kn.hasOwnProperty(o) &&
                  s != null &&
                  o === "onScroll" &&
                  U("scroll", r);
            }
          switch (n) {
            case "input":
              yr(r), vs(r, i, !0);
              break;
            case "textarea":
              yr(r), ws(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = br);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Ku(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[We] = t),
            (e[nr] = r),
            vc(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = Li(n, r)), n)) {
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
                for (l = 0; l < Mn.length; l++) U(Mn[l], e);
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
                gs(e, r), (l = Si(e, r)), U("invalid", e);
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
                ys(e, r), (l = Ni(e, r)), U("invalid", e);
                break;
              default:
                l = r;
            }
            Pi(n, l), (s = l);
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var u = s[i];
                i === "style"
                  ? Ju(e, u)
                  : i === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && Yu(e, u))
                  : i === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && Yn(e, u)
                    : typeof u == "number" && Yn(e, "" + u)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Kn.hasOwnProperty(i)
                      ? u != null && i === "onScroll" && U("scroll", e)
                      : u != null && wo(e, i, u, o));
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
                  (i = r.value),
                  i != null
                    ? rn(e, !!r.multiple, i, !1)
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
      return se(t), null;
    case 6:
      if (e && t.stateNode != null) wc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(y(166));
        if (((n = It(lr.current)), It(Qe.current), Pr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[We] = t),
            (i = r.nodeValue !== n) && ((e = xe), e !== null))
          )
            switch (e.tag) {
              case 3:
                Cr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Cr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[We] = t),
            (t.stateNode = r);
      }
      return se(t), null;
    case 13:
      if (
        (B(V),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (A && Se !== null && t.mode & 1 && !(t.flags & 128))
          Fa(), pn(), (t.flags |= 98560), (i = !1);
        else if (((i = Pr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(y(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(y(317));
            i[We] = t;
          } else
            pn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          se(t), (i = !1);
        } else Oe !== null && (uo(Oe), (Oe = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || V.current & 1 ? q === 0 && (q = 3) : ts())),
          t.updateQueue !== null && (t.flags |= 4),
          se(t),
          null);
    case 4:
      return (
        hn(), eo(e, t), e === null && er(t.stateNode.containerInfo), se(t), null
      );
    case 10:
      return $o(t.type._context), se(t), null;
    case 17:
      return ye(t.type) && el(), se(t), null;
    case 19:
      if ((B(V), (i = t.memoizedState), i === null)) return se(t), null;
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) Tn(i, !1);
        else {
          if (q !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = sl(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    Tn(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
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
          i.tail !== null &&
            G() > vn &&
            ((t.flags |= 128), (r = !0), Tn(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = sl(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Tn(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !A)
            )
              return se(t), null;
          } else
            2 * G() - i.renderingStartTime > vn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Tn(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = G()),
          (t.sibling = null),
          (n = V.current),
          $(V, r ? (n & 1) | 2 : n & 1),
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
  throw Error(y(156, t.tag));
}
function lp(e, t) {
  switch ((Do(t), t.tag)) {
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
        Wo(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Vo(t), null;
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
      return $o(t.type._context), null;
    case 22:
    case 23:
      return es(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var jr = !1,
  ue = !1,
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
function to(e, t, n) {
  try {
    n();
  } catch (r) {
    Q(e, t, r);
  }
}
var uu = !1;
function op(e, t) {
  if ((($i = Xr), (e = xa()), Ro(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            s = -1,
            u = -1,
            a = 0,
            h = 0,
            g = e,
            m = null;
          t: for (;;) {
            for (
              var _;
              g !== n || (l !== 0 && g.nodeType !== 3) || (s = o + l),
                g !== i || (r !== 0 && g.nodeType !== 3) || (u = o + r),
                g.nodeType === 3 && (o += g.nodeValue.length),
                (_ = g.firstChild) !== null;

            )
              (m = g), (g = _);
            for (;;) {
              if (g === e) break t;
              if (
                (m === n && ++a === l && (s = o),
                m === i && ++h === r && (u = o),
                (_ = g.nextSibling) !== null)
              )
                break;
              (g = m), (m = g.parentNode);
            }
            g = _;
          }
          n = s === -1 || u === -1 ? null : { start: s, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ui = { focusedElem: e, selectionRange: n }, Xr = !1, S = t; S !== null; )
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
                  var w = k.memoizedProps,
                    T = k.memoizedState,
                    d = t.stateNode,
                    c = d.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : Me(t.type, w),
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
  return (k = uu), (uu = !1), k;
}
function Vn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && to(t, n, i);
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
function no(e) {
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
function _c(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), _c(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[We], delete t[nr], delete t[Vi], delete t[Vf], delete t[Wf])),
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
function au(e) {
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
function ro(e, t, n) {
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
    for (ro(e, t, n), e = e.sibling; e !== null; ) ro(e, t, n), (e = e.sibling);
}
function lo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (lo(e, t, n), e = e.sibling; e !== null; ) lo(e, t, n), (e = e.sibling);
}
var re = null,
  Fe = !1;
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
      ue || tn(n, t);
    case 6:
      var r = re,
        l = Fe;
      (re = null),
        rt(e, t, n),
        (re = r),
        (Fe = l),
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
              ? ti(e.parentNode, n)
              : e.nodeType === 1 && ti(e, n),
            Zn(e))
          : ti(re, n.stateNode));
      break;
    case 4:
      (r = re),
        (l = Fe),
        (re = n.stateNode.containerInfo),
        (Fe = !0),
        rt(e, t, n),
        (re = r),
        (Fe = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ue &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && to(n, t, o),
            (l = l.next);
        } while (l !== r);
      }
      rt(e, t, n);
      break;
    case 1:
      if (
        !ue &&
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
      rt(e, t, n);
      break;
    case 21:
      rt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ue = (r = ue) || n.memoizedState !== null), rt(e, t, n), (ue = r))
        : rt(e, t, n);
      break;
    default:
      rt(e, t, n);
  }
}
function cu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new ip()),
      t.forEach(function (r) {
        var l = hp.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function De(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e,
          o = t,
          s = o;
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
        if (re === null) throw Error(y(160));
        Sc(i, o, l), (re = null), (Fe = !1);
        var u = l.alternate;
        u !== null && (u.return = null), (l.return = null);
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
      if ((De(t, e), Ae(e), r & 4)) {
        try {
          Vn(3, e, e.return), Cl(3, e);
        } catch (w) {
          Q(e, e.return, w);
        }
        try {
          Vn(5, e, e.return);
        } catch (w) {
          Q(e, e.return, w);
        }
      }
      break;
    case 1:
      De(t, e), Ae(e), r & 512 && n !== null && tn(n, n.return);
      break;
    case 5:
      if (
        (De(t, e),
        Ae(e),
        r & 512 && n !== null && tn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Yn(l, "");
        } catch (w) {
          Q(e, e.return, w);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          s = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            s === "input" && i.type === "radio" && i.name != null && Hu(l, i),
              Li(s, o);
            var a = Li(s, i);
            for (o = 0; o < u.length; o += 2) {
              var h = u[o],
                g = u[o + 1];
              h === "style"
                ? Ju(l, g)
                : h === "dangerouslySetInnerHTML"
                ? Yu(l, g)
                : h === "children"
                ? Yn(l, g)
                : wo(l, h, g, a);
            }
            switch (s) {
              case "input":
                xi(l, i);
                break;
              case "textarea":
                Qu(l, i);
                break;
              case "select":
                var m = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var _ = i.value;
                _ != null
                  ? rn(l, !!i.multiple, _, !1)
                  : m !== !!i.multiple &&
                    (i.defaultValue != null
                      ? rn(l, !!i.multiple, i.defaultValue, !0)
                      : rn(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[nr] = i;
          } catch (w) {
            Q(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((De(t, e), Ae(e), r & 4)) {
        if (e.stateNode === null) throw Error(y(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (w) {
          Q(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (De(t, e), Ae(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Zn(t.containerInfo);
        } catch (w) {
          Q(e, e.return, w);
        }
      break;
    case 4:
      De(t, e), Ae(e);
      break;
    case 13:
      De(t, e),
        Ae(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (qo = G())),
        r & 4 && cu(e);
      break;
    case 22:
      if (
        ((h = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ue = (a = ue) || h), De(t, e), (ue = a)) : De(t, e),
        Ae(e),
        r & 8192)
      ) {
        if (
          ((a = e.memoizedState !== null),
          (e.stateNode.isHidden = a) && !h && e.mode & 1)
        )
          for (S = e, h = e.child; h !== null; ) {
            for (g = S = h; S !== null; ) {
              switch (((m = S), (_ = m.child), m.tag)) {
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
                    } catch (w) {
                      Q(r, n, w);
                    }
                  }
                  break;
                case 5:
                  tn(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    fu(g);
                    continue;
                  }
              }
              _ !== null ? ((_.return = m), (S = _)) : fu(g);
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
                    ? ((i = l.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((s = g.stateNode),
                      (u = g.memoizedProps.style),
                      (o =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (s.style.display = Gu("display", o)));
              } catch (w) {
                Q(e, e.return, w);
              }
            }
          } else if (g.tag === 6) {
            if (h === null)
              try {
                g.stateNode.nodeValue = a ? "" : g.memoizedProps;
              } catch (w) {
                Q(e, e.return, w);
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
      De(t, e), Ae(e), r & 4 && cu(e);
      break;
    case 21:
      break;
    default:
      De(t, e), Ae(e);
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
          var i = au(e);
          lo(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            s = au(e);
          ro(e, s, o);
          break;
        default:
          throw Error(y(161));
      }
    } catch (u) {
      Q(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function sp(e, t, n) {
  (S = e), Ec(e);
}
function Ec(e, t, n) {
  for (var r = (e.mode & 1) !== 0; S !== null; ) {
    var l = S,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || jr;
      if (!o) {
        var s = l.alternate,
          u = (s !== null && s.memoizedState !== null) || ue;
        s = jr;
        var a = ue;
        if (((jr = o), (ue = u) && !a))
          for (S = l; S !== null; )
            (o = S),
              (u = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? pu(l)
                : u !== null
                ? ((u.return = o), (S = u))
                : pu(l);
        for (; i !== null; ) (S = i), Ec(i), (i = i.sibling);
        (S = l), (jr = s), (ue = a);
      }
      du(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (S = i)) : du(e);
  }
}
function du(e) {
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
              ue || Cl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ue)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Me(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && Gs(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Gs(t, o, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
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
        ue || (t.flags & 512 && no(t));
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
function fu(e) {
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
function pu(e) {
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
          } catch (u) {
            Q(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              Q(t, l, u);
            }
          }
          var i = t.return;
          try {
            no(t);
          } catch (u) {
            Q(t, i, u);
          }
          break;
        case 5:
          var o = t.return;
          try {
            no(t);
          } catch (u) {
            Q(t, o, u);
          }
      }
    } catch (u) {
      Q(t, t.return, u);
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
  cl = nt.ReactCurrentDispatcher,
  Xo = nt.ReactCurrentOwner,
  je = nt.ReactCurrentBatchConfig,
  M = 0,
  ne = null,
  J = null,
  le = 0,
  ke = 0,
  nn = Et(0),
  q = 0,
  ur = null,
  Ut = 0,
  Pl = 0,
  Zo = 0,
  Wn = null,
  he = null,
  qo = 0,
  vn = 1 / 0,
  Ye = null,
  dl = !1,
  io = null,
  yt = null,
  zr = !1,
  dt = null,
  fl = 0,
  Hn = 0,
  oo = null,
  Vr = -1,
  Wr = 0;
function de() {
  return M & 6 ? G() : Vr !== -1 ? Vr : (Vr = G());
}
function wt(e) {
  return e.mode & 1
    ? M & 2 && le !== 0
      ? le & -le
      : Qf.transition !== null
      ? (Wr === 0 && (Wr = sa()), Wr)
      : ((e = F),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : ma(e.type))),
        e)
    : 1;
}
function Ue(e, t, n, r) {
  if (50 < Hn) throw ((Hn = 0), (oo = null), Error(y(185)));
  cr(e, n, r),
    (!(M & 2) || e !== ne) &&
      (e === ne && (!(M & 2) && (Pl |= n), q === 4 && at(e, le)),
      we(e, r),
      n === 1 && M === 0 && !(t.mode & 1) && ((vn = G() + 500), xl && Nt()));
}
function we(e, t) {
  var n = e.callbackNode;
  Hd(e, t);
  var r = Jr(e, e === ne ? le : 0);
  if (r === 0)
    n !== null && Ss(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Ss(n), t === 1))
      e.tag === 0 ? Hf(mu.bind(null, e)) : Ia(mu.bind(null, e)),
        Bf(function () {
          !(M & 6) && Nt();
        }),
        (n = null);
    else {
      switch (ua(r)) {
        case 1:
          n = Eo;
          break;
        case 4:
          n = ia;
          break;
        case 16:
          n = Gr;
          break;
        case 536870912:
          n = oa;
          break;
        default:
          n = Gr;
      }
      n = Rc(n, Nc.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Nc(e, t) {
  if (((Vr = -1), (Wr = 0), M & 6)) throw Error(y(327));
  var n = e.callbackNode;
  if (an() && e.callbackNode !== n) return null;
  var r = Jr(e, e === ne ? le : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = pl(e, r);
  else {
    t = r;
    var l = M;
    M |= 2;
    var i = Pc();
    (ne !== e || le !== t) && ((Ye = null), (vn = G() + 500), Dt(e, t));
    do
      try {
        dp();
        break;
      } catch (s) {
        Cc(e, s);
      }
    while (1);
    Oo(),
      (cl.current = i),
      (M = l),
      J !== null ? (t = 0) : ((ne = null), (le = 0), (t = q));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Ii(e)), l !== 0 && ((r = l), (t = so(e, l)))), t === 1)
    )
      throw ((n = ur), Dt(e, 0), at(e, r), we(e, G()), n);
    if (t === 6) at(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !ap(l) &&
          ((t = pl(e, r)),
          t === 2 && ((i = Ii(e)), i !== 0 && ((r = i), (t = so(e, i)))),
          t === 1))
      )
        throw ((n = ur), Dt(e, 0), at(e, r), we(e, G()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          jt(e, he, Ye);
          break;
        case 3:
          if (
            (at(e, r), (r & 130023424) === r && ((t = qo + 500 - G()), 10 < t))
          ) {
            if (Jr(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              de(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Ai(jt.bind(null, e, he, Ye), t);
            break;
          }
          jt(e, he, Ye);
          break;
        case 4:
          if ((at(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - $e(r);
            (i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i);
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
                : 1960 * up(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ai(jt.bind(null, e, he, Ye), r);
            break;
          }
          jt(e, he, Ye);
          break;
        case 5:
          jt(e, he, Ye);
          break;
        default:
          throw Error(y(329));
      }
    }
  }
  return we(e, G()), e.callbackNode === n ? Nc.bind(null, e) : null;
}
function so(e, t) {
  var n = Wn;
  return (
    e.current.memoizedState.isDehydrated && (Dt(e, t).flags |= 256),
    (e = pl(e, t)),
    e !== 2 && ((t = he), (he = n), t !== null && uo(t)),
    e
  );
}
function uo(e) {
  he === null ? (he = e) : he.push.apply(he, e);
}
function ap(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!Be(i(), l)) return !1;
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
    t &= ~Zo,
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
function mu(e) {
  if (M & 6) throw Error(y(327));
  an();
  var t = Jr(e, 0);
  if (!(t & 1)) return we(e, G()), null;
  var n = pl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ii(e);
    r !== 0 && ((t = r), (n = so(e, r)));
  }
  if (n === 1) throw ((n = ur), Dt(e, 0), at(e, t), we(e, G()), n);
  if (n === 6) throw Error(y(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    jt(e, he, Ye),
    we(e, G()),
    null
  );
}
function bo(e, t) {
  var n = M;
  M |= 1;
  try {
    return e(t);
  } finally {
    (M = n), M === 0 && ((vn = G() + 500), xl && Nt());
  }
}
function Bt(e) {
  dt !== null && dt.tag === 0 && !(M & 6) && an();
  var t = M;
  M |= 1;
  var n = je.transition,
    r = F;
  try {
    if (((je.transition = null), (F = 1), e)) return e();
  } finally {
    (F = r), (je.transition = n), (M = t), !(M & 6) && Nt();
  }
}
function es() {
  (ke = nn.current), B(nn);
}
function Dt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Uf(n)), J !== null))
    for (n = J.return; n !== null; ) {
      var r = n;
      switch ((Do(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && el();
          break;
        case 3:
          hn(), B(ve), B(ae), Wo();
          break;
        case 5:
          Vo(r);
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
          $o(r.type._context);
          break;
        case 22:
        case 23:
          es();
      }
      n = n.return;
    }
  if (
    ((ne = e),
    (J = e = _t(e.current, null)),
    (le = ke = t),
    (q = 0),
    (ur = null),
    (Zo = Pl = Ut = 0),
    (he = Wn = null),
    Rt !== null)
  ) {
    for (t = 0; t < Rt.length; t++)
      if (((n = Rt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = l), (r.next = o);
        }
        n.pending = r;
      }
    Rt = null;
  }
  return e;
}
function Cc(e, t) {
  do {
    var n = J;
    try {
      if ((Oo(), (Ur.current = al), ul)) {
        for (var r = W.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        ul = !1;
      }
      if (
        (($t = 0),
        (te = Z = W = null),
        (An = !1),
        (ir = 0),
        (Xo.current = null),
        n === null || n.return === null)
      ) {
        (q = 1), (ur = t), (J = null);
        break;
      }
      e: {
        var i = e,
          o = n.return,
          s = n,
          u = t;
        if (
          ((t = le),
          (s.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var a = u,
            h = s,
            g = h.tag;
          if (!(h.mode & 1) && (g === 0 || g === 11 || g === 15)) {
            var m = h.alternate;
            m
              ? ((h.updateQueue = m.updateQueue),
                (h.memoizedState = m.memoizedState),
                (h.lanes = m.lanes))
              : ((h.updateQueue = null), (h.memoizedState = null));
          }
          var _ = tu(o);
          if (_ !== null) {
            (_.flags &= -257),
              nu(_, o, s, i, t),
              _.mode & 1 && eu(i, a, t),
              (t = _),
              (u = a);
            var k = t.updateQueue;
            if (k === null) {
              var w = new Set();
              w.add(u), (t.updateQueue = w);
            } else k.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              eu(i, a, t), ts();
              break e;
            }
            u = Error(y(426));
          }
        } else if (A && s.mode & 1) {
          var T = tu(o);
          if (T !== null) {
            !(T.flags & 65536) && (T.flags |= 256),
              nu(T, o, s, i, t),
              Mo(gn(u, s));
            break e;
          }
        }
        (i = u = gn(u, s)),
          q !== 4 && (q = 2),
          Wn === null ? (Wn = [i]) : Wn.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var d = ac(i, u, t);
              Ys(i, d);
              break e;
            case 1:
              s = u;
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
                var v = cc(i, s, t);
                Ys(i, v);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Tc(n);
    } catch (x) {
      (t = x), J === n && n !== null && (J = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Pc() {
  var e = cl.current;
  return (cl.current = al), e === null ? al : e;
}
function ts() {
  (q === 0 || q === 3 || q === 2) && (q = 4),
    ne === null || (!(Ut & 268435455) && !(Pl & 268435455)) || at(ne, le);
}
function pl(e, t) {
  var n = M;
  M |= 2;
  var r = Pc();
  (ne !== e || le !== t) && ((Ye = null), Dt(e, t));
  do
    try {
      cp();
      break;
    } catch (l) {
      Cc(e, l);
    }
  while (1);
  if ((Oo(), (M = n), (cl.current = r), J !== null)) throw Error(y(261));
  return (ne = null), (le = 0), q;
}
function cp() {
  for (; J !== null; ) Lc(J);
}
function dp() {
  for (; J !== null && !Md(); ) Lc(J);
}
function Lc(e) {
  var t = zc(e.alternate, e, ke);
  (e.memoizedProps = e.pendingProps),
    t === null ? Tc(e) : (J = t),
    (Xo.current = null);
}
function Tc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = lp(n, t)), n !== null)) {
        (n.flags &= 32767), (J = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (q = 6), (J = null);
        return;
      }
    } else if (((n = rp(n, t, ke)), n !== null)) {
      J = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      J = t;
      return;
    }
    J = t = e;
  } while (t !== null);
  q === 0 && (q = 5);
}
function jt(e, t, n) {
  var r = F,
    l = je.transition;
  try {
    (je.transition = null), (F = 1), fp(e, t, n, r);
  } finally {
    (je.transition = l), (F = r);
  }
  return null;
}
function fp(e, t, n, r) {
  do an();
  while (dt !== null);
  if (M & 6) throw Error(y(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(y(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Qd(e, i),
    e === ne && ((J = ne = null), (le = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      zr ||
      ((zr = !0),
      Rc(Gr, function () {
        return an(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = je.transition), (je.transition = null);
    var o = F;
    F = 1;
    var s = M;
    (M |= 4),
      (Xo.current = null),
      op(e, n),
      xc(n, e),
      Rf(Ui),
      (Xr = !!$i),
      (Ui = $i = null),
      (e.current = n),
      sp(n),
      Fd(),
      (M = s),
      (F = o),
      (je.transition = i);
  } else e.current = n;
  if (
    (zr && ((zr = !1), (dt = e), (fl = l)),
    (i = e.pendingLanes),
    i === 0 && (yt = null),
    Ud(n.stateNode),
    we(e, G()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (dl) throw ((dl = !1), (e = io), (io = null), e);
  return (
    fl & 1 && e.tag !== 0 && an(),
    (i = e.pendingLanes),
    i & 1 ? (e === oo ? Hn++ : ((Hn = 0), (oo = e))) : (Hn = 0),
    Nt(),
    null
  );
}
function an() {
  if (dt !== null) {
    var e = ua(fl),
      t = je.transition,
      n = F;
    try {
      if (((je.transition = null), (F = 16 > e ? 16 : e), dt === null))
        var r = !1;
      else {
        if (((e = dt), (dt = null), (fl = 0), M & 6)) throw Error(y(331));
        var l = M;
        for (M |= 4, S = e.current; S !== null; ) {
          var i = S,
            o = i.child;
          if (S.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var u = 0; u < s.length; u++) {
                var a = s[u];
                for (S = a; S !== null; ) {
                  var h = S;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Vn(8, h, i);
                  }
                  var g = h.child;
                  if (g !== null) (g.return = h), (S = g);
                  else
                    for (; S !== null; ) {
                      h = S;
                      var m = h.sibling,
                        _ = h.return;
                      if ((_c(h), h === a)) {
                        S = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = _), (S = m);
                        break;
                      }
                      S = _;
                    }
                }
              }
              var k = i.alternate;
              if (k !== null) {
                var w = k.child;
                if (w !== null) {
                  k.child = null;
                  do {
                    var T = w.sibling;
                    (w.sibling = null), (w = T);
                  } while (w !== null);
                }
              }
              S = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (S = o);
          else
            e: for (; S !== null; ) {
              if (((i = S), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Vn(9, i, i.return);
                }
              var d = i.sibling;
              if (d !== null) {
                (d.return = i.return), (S = d);
                break e;
              }
              S = i.return;
            }
        }
        var c = e.current;
        for (S = c; S !== null; ) {
          o = S;
          var f = o.child;
          if (o.subtreeFlags & 2064 && f !== null) (f.return = o), (S = f);
          else
            e: for (o = c; S !== null; ) {
              if (((s = S), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Cl(9, s);
                  }
                } catch (x) {
                  Q(s, s.return, x);
                }
              if (s === o) {
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
          ((M = l), Nt(), He && typeof He.onPostCommitFiberRoot == "function")
        )
          try {
            He.onPostCommitFiberRoot(yl, e);
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
function hu(e, t, n) {
  (t = gn(n, t)),
    (t = ac(e, t, 1)),
    (e = vt(e, t, 1)),
    (t = de()),
    e !== null && (cr(e, 1, t), we(e, t));
}
function Q(e, t, n) {
  if (e.tag === 3) hu(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        hu(t, e, n);
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
            t !== null && (cr(t, 1, e), we(t, e));
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
      (q === 4 || (q === 3 && (le & 130023424) === le && 500 > G() - qo)
        ? Dt(e, 0)
        : (Zo |= n)),
    we(e, t);
}
function jc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = kr), (kr <<= 1), !(kr & 130023424) && (kr = 4194304))
      : (t = 1));
  var n = de();
  (e = et(e, t)), e !== null && (cr(e, t, n), we(e, n));
}
function mp(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), jc(e, n);
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
  r !== null && r.delete(t), jc(e, n);
}
var zc;
zc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ve.current) ge = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ge = !1), np(e, t, n);
      ge = !!(e.flags & 131072);
    }
  else (ge = !1), A && t.flags & 1048576 && Da(t, rl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Ar(e, t), (e = t.pendingProps);
      var l = fn(t, ae.current);
      un(t, n), (l = Qo(null, t, r, e, l, n));
      var i = Ko();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ye(r) ? ((i = !0), tl(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Bo(t),
            (l.updater = El),
            (t.stateNode = l),
            (l._reactInternals = t),
            Gi(t, r, e, n),
            (t = Zi(null, t, r, !0, i, n)))
          : ((t.tag = 0), A && i && Io(t), ce(null, t, l, n), (t = t.child)),
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
          (e = Me(r, e)),
          l)
        ) {
          case 0:
            t = Xi(null, t, r, e, n);
            break e;
          case 1:
            t = iu(null, t, r, e, n);
            break e;
          case 11:
            t = ru(null, t, r, e, n);
            break e;
          case 14:
            t = lu(null, t, r, Me(r.type, e), n);
            break e;
        }
        throw Error(y(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Me(r, l)),
        Xi(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Me(r, l)),
        iu(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((mc(t), e === null)) throw Error(y(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          $a(e, t),
          ol(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (l = gn(Error(y(423)), t)), (t = ou(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = gn(Error(y(424)), t)), (t = ou(e, t, r, n, l));
            break e;
          } else
            for (
              Se = gt(t.stateNode.containerInfo.firstChild),
                xe = t,
                A = !0,
                Oe = null,
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
        e === null && Qi(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        Bi(r, l) ? (o = null) : i !== null && Bi(r, i) && (t.flags |= 32),
        pc(e, t),
        ce(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && Qi(t), null;
    case 13:
      return hc(e, t, n);
    case 4:
      return (
        Ao(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = mn(t, null, r, n)) : ce(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Me(r, l)),
        ru(e, t, r, l, n)
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
          (i = t.memoizedProps),
          (o = l.value),
          $(ll, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (Be(i.value, o)) {
            if (i.children === l.children && !ve.current) {
              t = tt(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var s = i.dependencies;
              if (s !== null) {
                o = i.child;
                for (var u = s.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (i.tag === 1) {
                      (u = Ze(-1, n & -n)), (u.tag = 2);
                      var a = i.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var h = a.pending;
                        h === null
                          ? (u.next = u)
                          : ((u.next = h.next), (h.next = u)),
                          (a.pending = u);
                      }
                    }
                    (i.lanes |= n),
                      (u = i.alternate),
                      u !== null && (u.lanes |= n),
                      Ki(i.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(y(341));
                (o.lanes |= n),
                  (s = o.alternate),
                  s !== null && (s.lanes |= n),
                  Ki(o, n, t),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        ce(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        un(t, n),
        (l = ze(l)),
        (r = r(l)),
        (t.flags |= 1),
        ce(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Me(r, t.pendingProps)),
        (l = Me(r.type, l)),
        lu(e, t, r, l, n)
      );
    case 15:
      return dc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Me(r, l)),
        Ar(e, t),
        (t.tag = 1),
        ye(r) ? ((e = !0), tl(t)) : (e = !1),
        un(t, n),
        Ba(t, r, l),
        Gi(t, r, l, n),
        Zi(null, t, r, !0, e, n)
      );
    case 19:
      return gc(e, t, n);
    case 22:
      return fc(e, t, n);
  }
  throw Error(y(156, t.tag));
};
function Rc(e, t) {
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
function ns(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function vp(e) {
  if (typeof e == "function") return ns(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ko)) return 11;
    if (e === So) return 14;
  }
  return 2;
}
function _t(e, t) {
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
function Hr(e, t, n, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) ns(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Kt:
        return Mt(n.children, l, i, t);
      case _o:
        (o = 8), (l |= 8);
        break;
      case yi:
        return (
          (e = Te(12, n, t, l | 2)), (e.elementType = yi), (e.lanes = i), e
        );
      case wi:
        return (e = Te(13, n, t, l)), (e.elementType = wi), (e.lanes = i), e;
      case _i:
        return (e = Te(19, n, t, l)), (e.elementType = _i), (e.lanes = i), e;
      case Au:
        return Ll(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Uu:
              o = 10;
              break e;
            case Bu:
              o = 9;
              break e;
            case ko:
              o = 11;
              break e;
            case So:
              o = 14;
              break e;
            case ot:
              (o = 16), (r = null);
              break e;
          }
        throw Error(y(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Te(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Mt(e, t, n, r) {
  return (e = Te(7, e, r, t)), (e.lanes = n), e;
}
function Ll(e, t, n, r) {
  return (
    (e = Te(22, e, r, t)),
    (e.elementType = Au),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ai(e, t, n) {
  return (e = Te(6, e, null, t)), (e.lanes = n), e;
}
function ci(e, t, n) {
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
function rs(e, t, n, r, l, i, o, s, u) {
  return (
    (e = new yp(e, t, n, s, u)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Te(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Bo(i),
    e
  );
}
function wp(e, t, n) {
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
    if (ye(n)) return Ra(e, n, t);
  }
  return t;
}
function Dc(e, t, n, r, l, i, o, s, u) {
  return (
    (e = rs(n, r, !0, e, l, i, o, s, u)),
    (e.context = Ic(null)),
    (n = e.current),
    (r = de()),
    (l = wt(n)),
    (i = Ze(r, l)),
    (i.callback = t ?? null),
    vt(n, i, l),
    (e.current.lanes = l),
    cr(e, l, r),
    we(e, r),
    e
  );
}
function Tl(e, t, n, r) {
  var l = t.current,
    i = de(),
    o = wt(l);
  return (
    (n = Ic(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ze(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = vt(l, t, o)),
    e !== null && (Ue(e, l, o, i), $r(e, l, o)),
    o
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
function gu(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ls(e, t) {
  gu(e, t), (e = e.alternate) && gu(e, t);
}
function _p() {
  return null;
}
var Mc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function is(e) {
  this._internalRoot = e;
}
jl.prototype.render = is.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(y(409));
  Tl(e, t, null, null);
};
jl.prototype.unmount = is.prototype.unmount = function () {
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
function jl(e) {
  this._internalRoot = e;
}
jl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = da();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < ut.length && t !== 0 && t < ut[n].priority; n++);
    ut.splice(n, 0, e), n === 0 && pa(e);
  }
};
function os(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function zl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function vu() {}
function kp(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var a = ml(o);
        i.call(a);
      };
    }
    var o = Dc(t, r, e, 0, null, !1, !1, "", vu);
    return (
      (e._reactRootContainer = o),
      (e[be] = o.current),
      er(e.nodeType === 8 ? e.parentNode : e),
      Bt(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var a = ml(u);
      s.call(a);
    };
  }
  var u = rs(e, 0, !1, null, null, !1, !1, "", vu);
  return (
    (e._reactRootContainer = u),
    (e[be] = u.current),
    er(e.nodeType === 8 ? e.parentNode : e),
    Bt(function () {
      Tl(t, u, n, r);
    }),
    u
  );
}
function Rl(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var s = l;
      l = function () {
        var u = ml(o);
        s.call(u);
      };
    }
    Tl(t, o, e, l);
  } else o = kp(n, t, e, l, r);
  return ml(o);
}
aa = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Dn(t.pendingLanes);
        n !== 0 &&
          (No(t, n | 1), we(t, G()), !(M & 6) && ((vn = G() + 500), Nt()));
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
        ls(e, 1);
  }
};
Co = function (e) {
  if (e.tag === 13) {
    var t = et(e, 134217728);
    if (t !== null) {
      var n = de();
      Ue(t, e, 134217728, n);
    }
    ls(e, 134217728);
  }
};
ca = function (e) {
  if (e.tag === 13) {
    var t = wt(e),
      n = et(e, t);
    if (n !== null) {
      var r = de();
      Ue(n, e, t, r);
    }
    ls(e, t);
  }
};
da = function () {
  return F;
};
fa = function (e, t) {
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
      if ((xi(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            Wu(r), xi(r, l);
          }
        }
      }
      break;
    case "textarea":
      Qu(e, n);
      break;
    case "select":
      (t = n.value), t != null && rn(e, !!n.multiple, t, !1);
  }
};
qu = bo;
bu = Bt;
var Sp = { usingClientEntryPoint: !1, Events: [fr, Xt, Sl, Xu, Zu, bo] },
  jn = {
    findFiberByHostInstance: zt,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  xp = {
    bundleType: jn.bundleType,
    version: jn.version,
    rendererPackageName: jn.rendererPackageName,
    rendererConfig: jn.rendererConfig,
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
    findFiberByHostInstance: jn.findFiberByHostInstance || _p,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Rr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Rr.isDisabled && Rr.supportsFiber)
    try {
      (yl = Rr.inject(xp)), (He = Rr);
    } catch {}
}
Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Sp;
Ne.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!os(t)) throw Error(y(200));
  return wp(e, t, null, n);
};
Ne.createRoot = function (e, t) {
  if (!os(e)) throw Error(y(299));
  var n = !1,
    r = "",
    l = Mc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = rs(e, 1, !1, null, null, n, !1, r, l)),
    (e[be] = t.current),
    er(e.nodeType === 8 ? e.parentNode : e),
    new is(t)
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
  if (!zl(t)) throw Error(y(200));
  return Rl(null, e, t, !0, n);
};
Ne.hydrateRoot = function (e, t, n) {
  if (!os(e)) throw Error(y(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = "",
    o = Mc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = Dc(t, null, e, 1, n ?? null, l, !1, i, o)),
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
  return new jl(t);
};
Ne.render = function (e, t, n) {
  if (!zl(t)) throw Error(y(200));
  return Rl(null, e, t, !1, n);
};
Ne.unmountComponentAtNode = function (e) {
  if (!zl(e)) throw Error(y(40));
  return e._reactRootContainer
    ? (Bt(function () {
        Rl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[be] = null);
        });
      }),
      !0)
    : !1;
};
Ne.unstable_batchedUpdates = bo;
Ne.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!zl(n)) throw Error(y(200));
  if (e == null || e._reactInternals === void 0) throw Error(y(38));
  return Rl(e, t, n, !1, r);
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
})(wd);
var yu = hi;
(mi.createRoot = yu.createRoot), (mi.hydrateRoot = yu.hydrateRoot);
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
const wu = "popstate";
function Ep(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let { pathname: i, search: o, hash: s } = r.location;
    return ao(
      "",
      { pathname: i, search: o, hash: s },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || "default"
    );
  }
  function n(r, l) {
    return typeof l == "string" ? l : Fc(l);
  }
  return Cp(t, n, null, e);
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
function _u(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function ao(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    hl(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Il(t) : t,
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
  let { window: l = document.defaultView, v5Compat: i = !1 } = r,
    o = l.history,
    s = ft.Pop,
    u = null,
    a = h();
  a == null && ((a = 0), o.replaceState(hl({}, o.state, { idx: a }), ""));
  function h() {
    return (o.state || { idx: null }).idx;
  }
  function g() {
    s = ft.Pop;
    let T = h(),
      d = T == null ? null : T - a;
    (a = T), u && u({ action: s, location: w.location, delta: d });
  }
  function m(T, d) {
    s = ft.Push;
    let c = ao(w.location, T, d);
    n && n(c, T), (a = h() + 1);
    let f = _u(c, a),
      v = w.createHref(c);
    try {
      o.pushState(f, "", v);
    } catch {
      l.location.assign(v);
    }
    i && u && u({ action: s, location: w.location, delta: 1 });
  }
  function _(T, d) {
    s = ft.Replace;
    let c = ao(w.location, T, d);
    n && n(c, T), (a = h());
    let f = _u(c, a),
      v = w.createHref(c);
    o.replaceState(f, "", v),
      i && u && u({ action: s, location: w.location, delta: 0 });
  }
  function k(T) {
    let d = l.location.origin !== "null" ? l.location.origin : l.location.href,
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
  let w = {
    get action() {
      return s;
    },
    get location() {
      return e(l, o);
    },
    listen(T) {
      if (u) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(wu, g),
        (u = T),
        () => {
          l.removeEventListener(wu, g), (u = null);
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
    replace: _,
    go(T) {
      return o.go(T);
    },
  };
  return w;
}
var ku;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(ku || (ku = {}));
function Pp(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Il(t) : t,
    l = Uc(r.pathname || "/", n);
  if (l == null) return null;
  let i = Oc(e);
  Lp(i);
  let o = null;
  for (let s = 0; o == null && s < i.length; ++s) o = Op(i[s], Bp(l));
  return o;
}
function Oc(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let l = (i, o, s) => {
    let u = {
      relativePath: s === void 0 ? i.path || "" : s,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: o,
      route: i,
    };
    u.relativePath.startsWith("/") &&
      (_e(
        u.relativePath.startsWith(r),
        'Absolute route path "' +
          u.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (u.relativePath = u.relativePath.slice(r.length)));
    let a = cn([r, u.relativePath]),
      h = n.concat(u);
    i.children &&
      i.children.length > 0 &&
      (_e(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + a + '".')
      ),
      Oc(i.children, t, h, a)),
      !(i.path == null && !i.index) &&
        t.push({ path: a, score: Mp(a, i.index), routesMeta: h });
  };
  return (
    e.forEach((i, o) => {
      var s;
      if (i.path === "" || !((s = i.path) != null && s.includes("?"))) l(i, o);
      else for (let u of $c(i.path)) l(i, o, u);
    }),
    t
  );
}
function $c(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return l ? [i, ""] : [i];
  let o = $c(r.join("/")),
    s = [];
  return (
    s.push(...o.map((u) => (u === "" ? i : [i, u].join("/")))),
    l && s.push(...o),
    s.map((u) => (e.startsWith("/") && u === "" ? "/" : u))
  );
}
function Lp(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Fp(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const Tp = /^:\w+$/,
  jp = 3,
  zp = 2,
  Rp = 1,
  Ip = 10,
  Dp = -2,
  Su = (e) => e === "*";
function Mp(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Su) && (r += Dp),
    t && (r += zp),
    n
      .filter((l) => !Su(l))
      .reduce((l, i) => l + (Tp.test(i) ? jp : i === "" ? Rp : Ip), r)
  );
}
function Fp(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Op(e, t) {
  let { routesMeta: n } = e,
    r = {},
    l = "/",
    i = [];
  for (let o = 0; o < n.length; ++o) {
    let s = n[o],
      u = o === n.length - 1,
      a = l === "/" ? t : t.slice(l.length) || "/",
      h = $p(
        { path: s.relativePath, caseSensitive: s.caseSensitive, end: u },
        a
      );
    if (!h) return null;
    Object.assign(r, h.params);
    let g = s.route;
    i.push({
      params: r,
      pathname: cn([l, h.pathname]),
      pathnameBase: Vp(cn([l, h.pathnameBase])),
      route: g,
    }),
      h.pathnameBase !== "/" && (l = cn([l, h.pathnameBase]));
  }
  return i;
}
function $p(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Up(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let i = l[0],
    o = i.replace(/(.)\/+$/, "$1"),
    s = l.slice(1);
  return {
    params: r.reduce((a, h, g) => {
      if (h === "*") {
        let m = s[g] || "";
        o = i.slice(0, i.length - m.length).replace(/(.)\/+$/, "$1");
      }
      return (a[h] = Ap(s[g] || "", h)), a;
    }, {}),
    pathname: i,
    pathnameBase: o,
    pattern: e,
  };
}
function Up(e, t, n) {
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
    l =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/\/:(\w+)/g, (o, s) => (r.push(s), "/([^\\/]+)"));
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
function Ap(e, t) {
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
  { useState: Kp, useEffect: Yp, useLayoutEffect: Gp, useDebugValue: Jp } = pi;
function Xp(e, t, n) {
  const r = t(),
    [{ inst: l }, i] = Kp({ inst: { value: r, getSnapshot: t } });
  return (
    Gp(() => {
      (l.value = r), (l.getSnapshot = t), di(l) && i({ inst: l });
    }, [e, r, t]),
    Yp(
      () => (
        di(l) && i({ inst: l }),
        e(() => {
          di(l) && i({ inst: l });
        })
      ),
      [e]
    ),
    Jp(r),
    r
  );
}
function di(e) {
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
  em = bp ? Zp : Xp;
"useSyncExternalStore" in pi && ((e) => e.useSyncExternalStore)(pi);
const Bc = N.createContext(null),
  Ac = N.createContext(null),
  Vc = N.createContext(null),
  Dl = N.createContext(null),
  Ml = N.createContext({ outlet: null, matches: [] }),
  Wc = N.createContext(null);
function co() {
  return (
    (co = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    co.apply(this, arguments)
  );
}
function us() {
  return N.useContext(Dl) != null;
}
function tm() {
  return us() || _e(!1), N.useContext(Dl).location;
}
function nm(e, t) {
  us() || _e(!1);
  let { navigator: n } = N.useContext(Vc),
    r = N.useContext(Ac),
    { matches: l } = N.useContext(Ml),
    i = l[l.length - 1],
    o = i ? i.params : {};
  i && i.pathname;
  let s = i ? i.pathnameBase : "/";
  i && i.route;
  let u = tm(),
    a;
  if (t) {
    var h;
    let w = typeof t == "string" ? Il(t) : t;
    s === "/" || ((h = w.pathname) != null && h.startsWith(s)) || _e(!1),
      (a = w);
  } else a = u;
  let g = a.pathname || "/",
    m = s === "/" ? g : g.slice(s.length) || "/",
    _ = Pp(e, { pathname: m }),
    k = om(
      _ &&
        _.map((w) =>
          Object.assign({}, w, {
            params: Object.assign({}, o, w.params),
            pathname: cn([
              s,
              n.encodeLocation
                ? n.encodeLocation(w.pathname).pathname
                : w.pathname,
            ]),
            pathnameBase:
              w.pathnameBase === "/"
                ? s
                : cn([
                    s,
                    n.encodeLocation
                      ? n.encodeLocation(w.pathnameBase).pathname
                      : w.pathnameBase,
                  ]),
          })
        ),
      l,
      r || void 0
    );
  return t && k
    ? N.createElement(
        Dl.Provider,
        {
          value: {
            location: co(
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
    i = null;
  return N.createElement(
    N.Fragment,
    null,
    N.createElement("h2", null, "Unexpected Application Error!"),
    N.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? N.createElement("pre", { style: l }, n) : null,
    i
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
          Ml.Provider,
          { value: this.props.routeContext },
          N.createElement(Wc.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function im(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = N.useContext(Bc);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    N.createElement(Ml.Provider, { value: t }, r)
  );
}
function om(e, t, n) {
  if ((t === void 0 && (t = []), e == null))
    if (n != null && n.errors) e = n.matches;
    else return null;
  let r = e,
    l = n == null ? void 0 : n.errors;
  if (l != null) {
    let i = r.findIndex(
      (o) => o.route.id && (l == null ? void 0 : l[o.route.id])
    );
    i >= 0 || _e(!1), (r = r.slice(0, Math.min(r.length, i + 1)));
  }
  return r.reduceRight((i, o, s) => {
    let u = o.route.id ? (l == null ? void 0 : l[o.route.id]) : null,
      a = null;
    n &&
      (o.route.ErrorBoundary
        ? (a = N.createElement(o.route.ErrorBoundary, null))
        : o.route.errorElement
        ? (a = o.route.errorElement)
        : (a = N.createElement(rm, null)));
    let h = t.concat(r.slice(0, s + 1)),
      g = () => {
        let m = i;
        return (
          u
            ? (m = a)
            : o.route.Component
            ? (m = N.createElement(o.route.Component, null))
            : o.route.element && (m = o.route.element),
          N.createElement(im, {
            match: o,
            routeContext: { outlet: i, matches: h },
            children: m,
          })
        );
      };
    return n && (o.route.ErrorBoundary || o.route.errorElement || s === 0)
      ? N.createElement(lm, {
          location: n.location,
          component: a,
          error: u,
          children: g(),
          routeContext: { outlet: null, matches: h },
        })
      : g();
  }, null);
}
var xu;
(function (e) {
  (e.UseBlocker = "useBlocker"), (e.UseRevalidator = "useRevalidator");
})(xu || (xu = {}));
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
function sm(e) {
  let t = N.useContext(Ac);
  return t || _e(!1), t;
}
function um(e) {
  let t = N.useContext(Ml);
  return t || _e(!1), t;
}
function am(e) {
  let t = um(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || _e(!1), n.route.id;
}
function cm() {
  var e;
  let t = N.useContext(Wc),
    n = sm(gl.UseRouteError),
    r = am(gl.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function Hc(e) {
  _e(!1);
}
function dm(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: l = ft.Pop,
    navigator: i,
    static: o = !1,
  } = e;
  us() && _e(!1);
  let s = t.replace(/^\/*/, "/"),
    u = N.useMemo(() => ({ basename: s, navigator: i, static: o }), [s, i, o]);
  typeof r == "string" && (r = Il(r));
  let {
      pathname: a = "/",
      search: h = "",
      hash: g = "",
      state: m = null,
      key: _ = "default",
    } = r,
    k = N.useMemo(() => {
      let w = Uc(a, s);
      return w == null
        ? null
        : {
            location: { pathname: w, search: h, hash: g, state: m, key: _ },
            navigationType: l,
          };
    }, [s, a, h, g, m, _, l]);
  return k == null
    ? null
    : N.createElement(
        Vc.Provider,
        { value: u },
        N.createElement(Dl.Provider, { children: n, value: k })
      );
}
function fm(e) {
  let { children: t, location: n } = e,
    r = N.useContext(Bc),
    l = r && !t ? r.router.routes : fo(t);
  return nm(l, n);
}
var Eu;
(function (e) {
  (e[(e.pending = 0)] = "pending"),
    (e[(e.success = 1)] = "success"),
    (e[(e.error = 2)] = "error");
})(Eu || (Eu = {}));
new Promise(() => {});
function fo(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    N.Children.forEach(e, (r, l) => {
      if (!N.isValidElement(r)) return;
      if (r.type === N.Fragment) {
        n.push.apply(n, fo(r.props.children, t));
        return;
      }
      r.type !== Hc && _e(!1), !r.props.index || !r.props.children || _e(!1);
      let i = [...t, l],
        o = {
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
      r.props.children && (o.children = fo(r.props.children, i)), n.push(o);
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
  let i = l.current,
    [o, s] = N.useState({ action: i.action, location: i.location });
  return (
    N.useLayoutEffect(() => i.listen(s), [i]),
    N.createElement(dm, {
      basename: t,
      children: n,
      location: o.location,
      navigationType: o.action,
      navigator: i,
    })
  );
}
var Nu;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmitImpl = "useSubmitImpl"),
    (e.UseFetcher = "useFetcher");
})(Nu || (Nu = {}));
var Cu;
(function (e) {
  (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Cu || (Cu = {}));
const mm = {},
  hm = "_col_wrjzl_1",
  gm = "_row_wrjzl_19",
  vm = "_box_wrjzl_27",
  ym = "_name_wrjzl_45",
  wm = "_nameeffect_wrjzl_63",
  _m = "_circle_wrjzl_109",
  km = "_slide_wrjzl_1",
  Ht = {
    col: hm,
    row: gm,
    box: vm,
    name: ym,
    nameeffect: wm,
    circle: _m,
    slide: km,
  },
  Sm = () => {
    const [e, t] = N.useState("");
    var [n, r] = N.useState(0);
    const [l, i] = N.useState("Mechanical Engineering"),
      [o, s] = N.useState(0);
    return (
      N.useEffect(() => {
        o <= l.length
          ? setTimeout(() => {
              t(e + l[o]), s(o + 1);
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
      }, [o]),
      p("div", {
        className: Ht.col,
        id: "Intro",
        children: p("div", {
          className: Ht.row,
          children: O("div", {
            className: Ht.box,
            children: [
              p("div", { className: Ht.circle }),
              p("div", {
                className: Ht.name,
                children: "Hi ! I'm Shivam Kumar",
              }),
              p("div", { className: Ht.nameeffect, children: e }),
              p("p", {
                children:
                  "LeetCode, Kaggle Expert, and GitHub Maestro, I am an enthusiastic problem solver with a passion for collaborative innovation in tech. With over 50+ repos, I demonstrate proficiency in data science and am recognized as a Kaggle Expert, actively contributing to the Kaggle Notebook. Beyond data science, I am also a skilled web developer with expertise in frontend technologies such as Next.js and React, as well as backend technologies including Node.js and Django. My commitment to continuous learning and tackling challenges drives me to excel in both data-driven solutions and web development projects. I thrive in dynamic environments where creativity and teamwork are valued, eager to contribute to transformative projects in the ever-evolving tech industry.",
              }),
            ],
          }),
        }),
      })
    );
  },
  xm = "_col_1h5ij_1",
  Em = "_row_1h5ij_15",
  Nm = "_about_1h5ij_21",
  Cm = "_heading_1h5ij_33",
  Pm = "_details_photo_1h5ij_45",
  Lm = "_details_1h5ij_45",
  Tm = "_spinner_1h5ij_1",
  jm = "_photobox_1h5ij_141",
  zm = "_photo_1h5ij_141",
  lt = {
    col: xm,
    row: Em,
    about: Nm,
    heading: Cm,
    details_photo: Pm,
    details: Lm,
    spinner: Tm,
    photobox: jm,
    photo: zm,
  },
  Rm = [
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
  Im = () =>
    p("div", {
      className: lt.col,
      id: "about",
      children: p("div", {
        className: lt.row,
        children: O("div", {
          className: lt.about,
          children: [
            p("div", { className: lt.heading, children: "About Me" }),
            O("div", {
              className: lt.details_photo,
              children: [
                p("div", {
                  className: lt.details,
                  children: Rm.map((e, t) =>
                    O(
                      "p",
                      {
                        id: `about_text_${t + 1}`,
                        children: [e.text, p("span", {})],
                      },
                      t
                    )
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
  Dm = "_col_1lwf2_1",
  Mm = "_row_1lwf2_15",
  Fm = "_language_1lwf2_21",
  Om = "_heading_1lwf2_33",
  $m = "_tool_card_1lwf2_45",
  Um = "_tool_1lwf2_45",
  Bm = "_card_1lwf2_77",
  Lt = {
    col: Dm,
    row: Mm,
    language: Fm,
    heading: Om,
    tool_card: $m,
    tool: Um,
    card: Bm,
  },
  Am = "_completecard_u0y5e_1",
  Vm = "_popular_books_u0y5e_15",
  Wm = "_rotate_u0y5e_29",
  Hm = "_book_card_u0y5e_35",
  Qm = "_card_header_u0y5e_65",
  Km = "_img_fluid_u0y5e_77",
  Ym = "_card_footer_u0y5e_89",
  Gm = "_back_u0y5e_99",
  Jm = "_back_content_u0y5e_135",
  Xm = "_texting_u0y5e_171",
  Zm = "_about_u0y5e_179",
  me = {
    completecard: Am,
    popular_books: Vm,
    rotate: Wm,
    book_card: Hm,
    card_header: Qm,
    img_fluid: Km,
    card_footer: Ym,
    back: Gm,
    back_content: Jm,
    texting: Xm,
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
              children: O("div", {
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
                    children: O("div", {
                      className: me.back_content,
                      children: [
                        O("div", {
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
  rh = "_col_1df51_1",
  lh = "_row_1df51_13",
  ih = "_tooling_1df51_19",
  oh = "_jackInTheBox_1df51_1",
  sh = "_tooling_box_1df51_73",
  uh = "_box_content_1df51_91",
  ah = "_box_icon_1df51_119",
  ch = "_icon_1df51_119",
  dh = "_box_text_1df51_131",
  it = {
    col: rh,
    row: lh,
    tooling: ih,
    jackInTheBox: oh,
    tooling_box: sh,
    box_content: uh,
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
    { text: "Dockers", src: "/Tool/31.jpg" },
    { text: "Flutter", src: "/Tool/32.jpg" },
    { text: "Streamlit", src: "/Tool/33.jpg" },
  ],
  ph = () =>
    p("div", {
      className: it.col,
      children: p("div", {
        className: it.row,
        children: p("div", {
          className: it.tooling,
          children: p("div", {
            className: it.tooling_box,
            children: fh.map((e, t) =>
              O(
                "div",
                {
                  className: it.box_content,
                  children: [
                    p("div", {
                      className: it.box_icon,
                      children: p("img", {
                        src: e.src,
                        alt: e.src,
                        className: it.icon,
                      }),
                    }),
                    p("div", { className: it.box_text, children: e.text }),
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
        children: O("div", {
          className: Lt.language,
          children: [
            p("div", {
              className: Lt.heading,
              children: "Language and Platform Used",
            }),
            O("div", {
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
  hh = "_col_1vep2_1",
  gh = "_row_1vep2_15",
  vh = "_working_1vep2_21",
  yh = "_heading_1vep2_33",
  wh = "_works_1vep2_45",
  _h = "_work_1vep2_21",
  kh = "_link_svg_1vep2_93",
  Sh = "_work_info_1vep2_133",
  Ke = {
    col: hh,
    row: gh,
    working: vh,
    heading: yh,
    works: wh,
    work: _h,
    link_svg: kh,
    work_info: Sh,
  },
  Pu = [
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
  xh = "_background_1ttwx_1",
  Eh = "_container_1ttwx_21",
  Nh = "_box_1ttwx_47",
  Ch = "_websiteimage_1ttwx_85",
  Ph = "_cross_1ttwx_151",
  Lh = "__box_1rqzu_45_1ttwx_225",
  zn = {
    background: xh,
    container: Eh,
    box: Nh,
    "middle-top": "_middle-top_1ttwx_1",
    websiteimage: Ch,
    cross: Ph,
    _box_1rqzu_45: Lh,
  },
  Th = ({ data: e, setCard: t }) =>
    O(yd, {
      children: [
        p("div", { className: zn.background, onClick: t }),
        O("div", {
          className: zn.container,
          children: [
            p("img", {
              src: "cross.svg",
              alt: "image",
              className: zn.cross,
              onClick: t,
            }),
            O("div", {
              className: zn.box,
              children: [
                p("h1", { children: e.website }),
                p("div", {
                  className: zn.websiteimage,
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
  jh = () => {
    const [e, t] = N.useState(-1),
      n = () => {
        t(-1);
      };
    return O("div", {
      className: Ke.col,
      id: "Projects",
      children: [
        e !== -1 && p(Th, { data: Pu[e], setCard: n }),
        p("div", {
          className: Ke.row,
          children: O("div", {
            className: Ke.working,
            children: [
              p("div", { className: Ke.heading, children: "Projects" }),
              p("div", {
                className: Ke.works,
                children: Pu.map((r, l) =>
                  O(
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
                          alt: "Projects_image",
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
  zh = "_contact_gyims_1",
  Rh = "_container_fluid_gyims_13",
  Ih = "_row_gyims_19",
  Dh = "_rowall_gyims_27",
  Mh = "_col_1_gyims_39",
  Fh = "_col_2_gyims_47",
  Oh = "_items_wrapper_gyims_55",
  $h = "_floating_item_gyims_83",
  Uh = "_link_gyims_101",
  Bh = "_text_light_gyims_109",
  Ah = "_text_light_heading_gyims_115",
  Vh = "_red_gyims_121",
  Wh = "_part_2_text_light_gyims_127",
  Hh = "_form_group_gyims_141",
  Qh = "_form_control_gyims_155",
  Kh = "_but_red_gyims_169",
  Yh = "_first_item_gyims_201",
  Gh = "_float_gyims_83",
  Jh = "_second_item_gyims_207",
  Xh = "_third_item_gyims_213",
  Zh = "_fourth_item_gyims_219",
  qh = "_fifth_item_gyims_225",
  bh = "_contact_form_gyims_259",
  eg = "_error_message_gyims_341",
  R = {
    contact: zh,
    container_fluid: Rh,
    row: Ih,
    rowall: Dh,
    col_1: Mh,
    col_2: Fh,
    items_wrapper: Oh,
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
    second_item: Jh,
    third_item: Xh,
    fourth_item: Zh,
    fifth_item: qh,
    contact_form: bh,
    error_message: eg,
  },
  tg = () => {
    const [e, t] = N.useState(""),
      [n, r] = N.useState(""),
      [l, i] = N.useState(""),
      [o, s] = N.useState(""),
      u = async () => {
        var a =
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (n.trim() == "" || l.trim() == "" || e.trim() == "") {
          s("Fill the email and name and message.."),
            setTimeout(() => {
              s("");
            }, 2e3);
          return;
        }
        if (n.match(a)) s("");
        else {
          setTimeout(() => {
            s("");
          }, 2e3),
            s("Fill the correct email..");
          return;
        }
        s("");
        const h = encodeURIComponent("Contact Form Submission"),
          g = encodeURIComponent(
            `Name: ${e}%0D%0AEmail: ${n}%0D%0AMessage: ${l}`
          ),
          m = `mailto:shivam6862mau@gmail.com?subject=${h}&body=${g}`;
        window.open(m), r(""), t(""), i("");
      };
    return p("div", {
      className: R.contact,
      id: "contact",
      children: p("div", {
        className: R.container_fluid,
        children: O("div", {
          className: R.rowall,
          children: [
            p("div", {
              className: R.col_1,
              children: O("div", {
                className: `${R.items_wrapper} ${R.row}`,
                children: [
                  p("div", {
                    className: `${R.floating_item} ${R.first_item}`,
                    children: p("div", {
                      href: "#",
                      className: R.text_light,
                      children: p("i", {
                        className: R.link,
                        onClick: () =>
                          window.open(
                            "https://www.linkedin.com/in/shivam-kumar-14701b249/"
                          ),
                        children: "Connect by LinkedIn",
                      }),
                    }),
                  }),
                  p("div", {
                    className: `${R.floating_item} ${R.second_item}`,
                    children: p("div", {
                      href: "#",
                      className: R.text_light,
                      children: p("i", {
                        className: R.link,
                        onClick: () =>
                          window.open(
                            "https://www.instagram.com/shivam_kr_634/"
                          ),
                        children: "Connect by Instagram",
                      }),
                    }),
                  }),
                  p("div", {
                    className: `${R.floating_item} ${R.third_item}`,
                    children: p("div", {
                      className: R.text_light,
                      children: p("i", {
                        className: R.link,
                        onClick: () =>
                          window.open("https://github.com/shivam6862"),
                        children: "Github account",
                      }),
                    }),
                  }),
                  p("div", {
                    className: `${R.floating_item} ${R.fourth_item}`,
                    children: p("div", {
                      className: R.text_light,
                      children: p("i", {
                        className: R.link,
                        onClick: () =>
                          window.open("https://leetcode.com/1_shivam/"),
                        children: "Leetcode account",
                      }),
                    }),
                  }),
                  p("div", {
                    className: `${R.floating_item} ${R.fifth_item}`,
                    children: p("div", {
                      className: R.text_light,
                      children: p("i", {
                        className: R.link,
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
              className: R.col_2,
              children: [
                p("h1", {
                  className: `${R.text_light_heading} ${R.part_2_text_light}`,
                  children: "Stay Connected",
                }),
                p("div", {
                  className: `${R.contact_form}`,
                  children: O("div", {
                    className: R.form_group,
                    children: [
                      o
                        ? p("div", {
                            children: p("p", {
                              className: R.error_message,
                              children: o,
                            }),
                          })
                        : null,
                      p("input", {
                        type: "text",
                        className: R.form_control,
                        placeholder: "Name",
                        value: e,
                        onChange: (a) => t(a.target.value),
                      }),
                      p("input", {
                        type: "email",
                        className: R.form_control,
                        placeholder: "Email",
                        value: n,
                        onChange: (a) => r(a.target.value),
                      }),
                      p("textarea", {
                        className: R.form_control,
                        placeholder: "Message",
                        rows: "4",
                        value: l,
                        onChange: (a) => i(a.target.value),
                      }),
                      p("input", {
                        type: "submit",
                        className: `${R.form_control} ${R.but_red}`,
                        onClick: u,
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
  ng = "_last_yi42e_1",
  rg = "_container_fluid_yi42e_13",
  lg = "_row_yi42e_21",
  ig = "_col_yi42e_37",
  og = "_nav_yi42e_43",
  sg = "_nav_link_yi42e_61",
  ug = "_copyright_yi42e_71",
  ag = "_nav_item_yi42e_93",
  ee = {
    last: ng,
    container_fluid: rg,
    row: lg,
    col: ig,
    nav: og,
    nav_link: sg,
    copyright: ug,
    "footer-link": "_footer-link_yi42e_79",
    nav_item: ag,
  },
  cg = () =>
    p("div", {
      className: ee.last,
      id: "last",
      children: p("div", {
        className: ee.container_fluid,
        children: O("div", {
          className: ee.row,
          children: [
            p("div", {
              className: ee.col,
              children: O("ul", {
                className: ee.nav,
                children: [
                  p("li", {
                    className: ee.nav_item,
                    children: p("a", {
                      className: ee.nav_link,
                      href: "#Intro",
                      children: "Intro",
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
                      href: "#Projects",
                      children: "Projects",
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
              children: "© 2024.. Made by shivam6862",
            }),
          ],
        }),
      }),
    }),
  dg = () =>
    O("div", {
      className: mm.home,
      children: [
        p(Sm, {}),
        p(Im, {}),
        p(mh, {}),
        p(jh, {}),
        p(tg, {}),
        p(cg, {}),
      ],
    }),
  fg = "_error_number_7tm59_1",
  pg = "_error_reason_7tm59_15",
  mg = "_error_des_7tm59_31",
  fi = { error_number: fg, error_reason: pg, error_des: mg },
  hg = () =>
    O("div", {
      children: [
        p("div", { className: fi.error_number, children: "404" }),
        p("div", { className: fi.error_reason, children: "Page Not Found!" }),
        p("div", {
          className: fi.error_des,
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
  wg = { backdrop: yg },
  _g = ({ Id: e, onClick: t }) =>
    p("div", {
      containerid: e,
      children: p("div", { className: wg.backdrop, onClick: t }),
    }),
  kg = "_positionfixed_ex25g_1",
  Sg = "_line1_ex25g_13",
  xg = "_line2_ex25g_15",
  Eg = "_line3_ex25g_17",
  Ng = "_hamburgerchange_ex25g_33",
  Cg = "_navigation_ex25g_101",
  Pg = "_logo_ex25g_131",
  Lg = "_logo1_ex25g_143",
  Tg = "_first_ex25g_155",
  jg = "_navigationmenu_ex25g_163",
  zg = "_active_ex25g_189",
  Rg = "_hamburger_ex25g_33",
  Ig = "_navigationmenuexpanded_ex25g_291",
  X = {
    positionfixed: kg,
    line1: Sg,
    line2: xg,
    line3: Eg,
    hamburgerchange: Ng,
    navigation: Cg,
    logo: Pg,
    logo1: Lg,
    first: Tg,
    navigationmenu: jg,
    active: zg,
    hamburger: Rg,
    navigationmenuexpanded: Ig,
  },
  Dg = () => {
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
        className: X.positionfixed,
        children: O("nav", {
          className: X.navigation,
          children: [
            p("div", {
              id: "/",
              className: X.active1,
              children: p("div", {
                className: X.logo,
                children: p("img", { src: "/logo.jpg", alt: "logo" }),
              }),
            }),
            O("button", {
              className: e ? X.hamburgerchange : X.hamburger,
              onClick: () => {
                t(!e);
              },
              children: [
                p("div", { className: X.line1 }),
                p("div", { className: X.line2 }),
                p("div", { className: X.line3 }),
              ],
            }),
            e && p(_g, { Id: "backdrop", onClick: () => t(!e) }),
            p("div", {
              className: e ? X.navigationmenuexpanded : X.navigationmenu,
              children: O("ul", {
                children: [
                  p("li", {
                    className: X.first,
                    children: p("div", {
                      id: "/",
                      className: X.active,
                      onClick: () => {
                        t(!1);
                      },
                      children: p("div", {
                        className: X.logo1,
                        children: p("img", { src: "/logo.jpg", alt: "logo" }),
                      }),
                    }),
                  }),
                  p("li", {
                    children: p("a", {
                      href: "#Intro",
                      className: X.active,
                      onClick: () => {
                        t(!1);
                      },
                      children: "Intro",
                    }),
                  }),
                  p("li", {
                    children: p("a", {
                      href: "#about",
                      className: X.active,
                      onClick: () => {
                        t(!1);
                      },
                      children: "About",
                    }),
                  }),
                  p("li", {
                    children: p("a", {
                      href: "#language",
                      className: X.active,
                      onClick: () => {
                        t(!1);
                      },
                      children: "Language",
                    }),
                  }),
                  p("li", {
                    children: p("a", {
                      href: "#Projects",
                      className: X.active,
                      onClick: () => {
                        t(!1);
                      },
                      children: "Projects",
                    }),
                  }),
                  p("li", {
                    children: p("a", {
                      href: "#contact",
                      className: X.active,
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
  Mg = "_App_1u7u7_1",
  Fg = {
    App: Mg,
    "box-shadow-large": "_box-shadow-large_1u7u7_17",
    "box-shadow-small": "_box-shadow-small_1u7u7_53",
  };
function Og() {
  return O("div", { className: Fg.App, children: [p(Dg, {}), p(vg, {})] });
}
mi.createRoot(document.getElementById("root")).render(
  p(pm, { children: p(Og, {}) })
);
