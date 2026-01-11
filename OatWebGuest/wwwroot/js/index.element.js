(function () {
    const u = document.createElement("link").relList;
    if (u && u.supports && u.supports("modulepreload"))
        return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        r(o);
    new MutationObserver(o => {
        for (const d of o)
            if (d.type === "childList")
                for (const h of d.addedNodes)
                    h.tagName === "LINK" && h.rel === "modulepreload" && r(h)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function c(o) {
        const d = {};
        return o.integrity && (d.integrity = o.integrity),
            o.referrerPolicy && (d.referrerPolicy = o.referrerPolicy),
            o.crossOrigin === "use-credentials" ? d.credentials = "include" : o.crossOrigin === "anonymous" ? d.credentials = "omit" : d.credentials = "same-origin",
            d
    }
    function r(o) {
        if (o.ep)
            return;
        o.ep = !0;
        const d = c(o);
        fetch(o.href, d)
    }
}
)();
const Wp = "phc_V7JMHB0fVJGRu8UHyrsj6pSL1BS76P5zD8qCi7lrTTV"
    , Ke = {
        colors: {
            text: "#5D5D5D",
            white: "#FFFFFF",
            border: "rgba(0, 10, 36, 0.08)"
        },
        font: {
            family: '"Geist"',
            weight: "600",
            size: {
                normal: "14px",
                button: "18px"
            },
            lineHeight: "20px"
        },
        button: {
            gradient: "linear-gradient(180deg, #A797FF 0%, #7057FF 100%)"
        },
        shadow: "0px 8px 12px 0px rgba(9, 10, 20, 0.06)",
        zIndex: `${Number.MAX_SAFE_INTEGER}`
    }
    , mh = {
        close: `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2D303D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>')}`,
        generate: `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" fill="none" width="16" height="16" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.87 4.94c.227-.71 1.21-.723 1.456-.02l1.177 3.378 3.101 1.013c.708.231.714 1.216.01 1.455l-3.183 1.082-1.105 3.17c-.245.704-1.23.69-1.455-.02l-.989-3.107-3.367-1.203c-.702-.25-.68-1.234.04-1.455l3.282-1.016 1.043-3.277Z" fill="#FFF"/><path fill-rule="evenodd" d="M12.238 1.3c.167-.667 1.1-.667 1.266 0l.388 1.551 1.55.388c.666.166.667 1.1 0 1.266l-1.55.388-.388 1.55c-.167.666-1.1.667-1.266 0l-.388-1.55-1.55-.388c-.667-.166-.667-1.1 0-1.266l1.55-.388.388-1.551Z" fill="#FFF"/></svg>')}`
    }
    , Yn = {
        readdyLogo: "https://public.readdy.ai/gen_page/readdy-logo.png",
        watermarkLogo: "https://public.readdy.ai/gen_page/watermark.png",
        readdyLink: "https://readdy.ai?ref=b",
        fontStylesheet: "https://fonts.googleapis.com/css2?family=Geist:wght@600&display=swap",
        posthogCDN: "https://cdn.jsdelivr.net/npm/posthog-js@1.96.1/dist/array.full.min.js"
    }
    , gh = {
        en: {
            prefix: "This Website is Made with",
            suffix: ". You can also get one like this in minutes",
            button: "Get one for FREE"
        },
        zh: {
            prefix: "本网站来自",
            suffix: "。你也可以在几分钟内拥有同样的页面",
            button: "立即免费拥有"
        }
    }
    , Ip = () => navigator.language?.toLowerCase().startsWith("zh") ?? !1
    , Kc = () => Ip() ? gh.zh : gh.en
    , Pp = () => window.innerWidth > 768 && !("ontouchstart" in window)
    , e0 = () => {
        const s = window.location.hostname;
        return ["readdy.ai", "dev.readdy.ai", "localhost"].some(c => s === c || s.endsWith(`.${c}`))
    }
    ;
function t0() {
    if (window.posthog)
        return;
    const s = document.createElement("script");
    s.src = Yn.posthogCDN,
        s.async = !0,
        s.onload = () => {
            window.posthog?.init(Wp, {
                api_host: "https://us.i.posthog.com",
                autocapture: !1,
                capture_pageview: !1,
                capture_pageleave: !1,
                disable_session_recording: !0,
                disable_scroll_properties: !0,
                capture_performance: {
                    web_vitals: !1
                },
                rageclick: !1,
                loaded: function (u) {
                    u.sessionRecording && u.sessionRecording.stopRecording()
                }
            })
        }
        ,
        document.head.appendChild(s)
}
function ph(s, u) {
    window.posthog?.capture(s, {
        ...u,
        version: 2
    })
}
function Yt(s, u) {
    Object.assign(s.style, u)
}
function hu(s, u = "0") {
    Yt(s, {
        color: Ke.colors.text,
        fontFamily: Ke.font.family,
        fontSize: Ke.font.size.normal,
        lineHeight: Ke.font.lineHeight,
        fontWeight: Ke.font.weight,
        whiteSpace: "nowrap",
        marginRight: u
    })
}
function mu(s, u = "row") {
    Yt(s, {
        display: "flex",
        flexDirection: u,
        alignItems: "center",
        justifyContent: "center"
    })
}
function l0() {
    if (e0())
        return;
    const s = "https://readdy.ai/api/public/user/is_free"
        , u = "7b250cc2-2075-4df7-81d0-1e7237478fc5";
    async function c(z) {
        try {
            return !(await (await fetch(`${s}?projectId=${z}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })).json()).data.is_free
        } catch {
            return !0
        }
    }
    function r() {
        document.querySelector('link[rel="icon"]')?.remove();
        const z = document.createElement("link");
        z.type = "image/png",
            z.rel = "icon",
            z.href = Yn.readdyLogo,
            document.head.appendChild(z);
        const j = document.createElement("link");
        j.rel = "stylesheet",
            j.href = Yn.fontStylesheet,
            document.head.appendChild(j)
    }
    function o(z) {
        ph(z),
            window.open(Yn.readdyLink, "_blank")
    }
    function d() {
        const z = document.createElement("div");
        z.id = "close-button",
            Yt(z, {
                position: "absolute",
                top: "-12px",
                right: "-12px",
                width: "32px",
                height: "32px",
                backgroundColor: Ke.colors.white,
                borderRadius: "50%",
                borderStyle: "solid",
                borderWidth: "1px",
                borderColor: Ke.colors.border,
                cursor: "pointer",
                boxShadow: Ke.shadow
            }),
            mu(z);
        const j = document.createElement("img");
        return j.src = mh.close,
            Yt(j, {
                width: "24px",
                height: "24px"
            }),
            z.appendChild(j),
            z.addEventListener("click", H => {
                H.stopPropagation(),
                    ph("watermark_close_button_click"),
                    document.getElementById("watermark")?.remove()
            }
            ),
            z
    }
    function h(z) {
        const j = document.createElement("div");
        j.id = "generate-button",
            Yt(j, {
                padding: z ? "8px 16px" : "10px 20px",
                background: Ke.button.gradient,
                borderRadius: "999px",
                border: "none",
                gap: "6px",
                cursor: "pointer",
                marginLeft: z ? "12px" : "0",
                whiteSpace: "nowrap",
                width: z ? "auto" : "100%"
            }),
            mu(j);
        const H = document.createElement("img");
        H.src = mh.generate,
            Yt(H, {
                width: "16px",
                height: "16px",
                flexShrink: "0"
            });
        const B = document.createElement("span");
        return B.textContent = Kc().button,
            Yt(B, {
                color: Ke.colors.white,
                fontFamily: Ke.font.family,
                fontSize: Ke.font.size.button,
                fontWeight: Ke.font.weight,
                lineHeight: Ke.font.lineHeight
            }),
            j.append(H, B),
            j.addEventListener("click", q => {
                q.stopPropagation(),
                    o("watermark_create_button_click")
            }
            ),
            j
    }
    function p() {
        const z = document.createElement("img");
        return z.src = Yn.watermarkLogo,
            Yt(z, {
                width: "92px",
                height: "auto",
                paddingLeft: "8px",
                flexShrink: "0"
            }),
            z
    }
    function y(z) {
        const j = Kc()
            , H = document.createElement("div");
        H.textContent = j.prefix,
            hu(H);
        const B = p()
            , q = document.createElement("div");
        q.textContent = j.suffix,
            hu(q, "12px"),
            z.append(H, B, q, h(!0))
    }
    function g(z) {
        const j = Kc()
            , H = document.createElement("div");
        mu(H),
            H.style.marginBottom = "4px";
        const B = document.createElement("div");
        B.textContent = j.prefix,
            hu(B, "6px"),
            H.append(B, p());
        const q = document.createElement("div");
        q.textContent = j.suffix,
            hu(q),
            Yt(q, {
                textAlign: "center",
                marginBottom: "12px"
            }),
            z.append(H, q, h(!1))
    }
    function T() {
        const z = Pp()
            , j = document.createElement("div");
        return j.id = "watermark",
            Yt(j, {
                zIndex: Ke.zIndex,
                position: "fixed",
                bottom: "24px",
                left: "50%",
                transform: "translateX(-50%)",
                width: z ? "fit-content" : "calc(100% - 32px)",
                maxWidth: z ? "none" : "100%",
                backgroundColor: Ke.colors.white,
                borderStyle: "solid",
                borderWidth: "1px",
                borderRadius: z ? "999px" : "36px",
                borderColor: Ke.colors.border,
                padding: z ? "12px 20px" : "16px",
                boxShadow: Ke.shadow,
                cursor: "pointer"
            }),
            mu(j, z ? "row" : "column"),
            j.appendChild(d()),
            z ? y(j) : g(j),
            j.addEventListener("click", H => {
                H.target.closest("#generate-button, #close-button") || o("watermark_create_button_click")
            }
            ),
            j
    }
    function b(z) {
        const j = document.getElementById("watermark");
        !j && !z ? (document.body.appendChild(T()),
            r(),
            t0()) : z && j && j.remove()
    }
    c(u).then(b)
}
l0();
var Zc = {
    exports: {}
}
    , Ln = {};
var yh;
function a0() {
    if (yh)
        return Ln;
    yh = 1;
    var s = Symbol.for("react.transitional.element")
        , u = Symbol.for("react.fragment");
    function c(r, o, d) {
        var h = null;
        if (d !== void 0 && (h = "" + d),
            o.key !== void 0 && (h = "" + o.key),
            "key" in o) {
            d = {};
            for (var p in o)
                p !== "key" && (d[p] = o[p])
        } else
            d = o;
        return o = d.ref,
        {
            $$typeof: s,
            type: r,
            key: h,
            ref: o !== void 0 ? o : null,
            props: d
        }
    }
    return Ln.Fragment = u,
        Ln.jsx = c,
        Ln.jsxs = c,
        Ln
}
var vh;
function n0() {
    return vh || (vh = 1,
        Zc.exports = a0()),
        Zc.exports
}
var v = n0()
    , kc = {
        exports: {}
    }
    , P = {};
var xh;
function i0() {
    if (xh)
        return P;
    xh = 1;
    var s = Symbol.for("react.transitional.element")
        , u = Symbol.for("react.portal")
        , c = Symbol.for("react.fragment")
        , r = Symbol.for("react.strict_mode")
        , o = Symbol.for("react.profiler")
        , d = Symbol.for("react.consumer")
        , h = Symbol.for("react.context")
        , p = Symbol.for("react.forward_ref")
        , y = Symbol.for("react.suspense")
        , g = Symbol.for("react.memo")
        , T = Symbol.for("react.lazy")
        , b = Symbol.for("react.activity")
        , z = Symbol.iterator;
    function j(S) {
        return S === null || typeof S != "object" ? null : (S = z && S[z] || S["@@iterator"],
            typeof S == "function" ? S : null)
    }
    var H = {
        isMounted: function () {
            return !1
        },
        enqueueForceUpdate: function () { },
        enqueueReplaceState: function () { },
        enqueueSetState: function () { }
    }
        , B = Object.assign
        , q = {};
    function K(S, _, G) {
        this.props = S,
            this.context = _,
            this.refs = q,
            this.updater = G || H
    }
    K.prototype.isReactComponent = {},
        K.prototype.setState = function (S, _) {
            if (typeof S != "object" && typeof S != "function" && S != null)
                throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
            this.updater.enqueueSetState(this, S, _, "setState")
        }
        ,
        K.prototype.forceUpdate = function (S) {
            this.updater.enqueueForceUpdate(this, S, "forceUpdate")
        }
        ;
    function V() { }
    V.prototype = K.prototype;
    function k(S, _, G) {
        this.props = S,
            this.context = _,
            this.refs = q,
            this.updater = G || H
    }
    var ae = k.prototype = new V;
    ae.constructor = k,
        B(ae, K.prototype),
        ae.isPureReactComponent = !0;
    var re = Array.isArray;
    function ye() { }
    var W = {
        H: null,
        A: null,
        T: null,
        S: null
    }
        , Ae = Object.prototype.hasOwnProperty;
    function Ne(S, _, G) {
        var Q = G.ref;
        return {
            $$typeof: s,
            type: S,
            key: _,
            ref: Q !== void 0 ? Q : null,
            props: G
        }
    }
    function Re(S, _) {
        return Ne(S.type, _, S.props)
    }
    function bt(S) {
        return typeof S == "object" && S !== null && S.$$typeof === s
    }
    function Ie(S) {
        var _ = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + S.replace(/[=:]/g, function (G) {
            return _[G]
        })
    }
    var Ve = /\/+/g;
    function we(S, _) {
        return typeof S == "object" && S !== null && S.key != null ? Ie("" + S.key) : _.toString(36)
    }
    function lt(S) {
        switch (S.status) {
            case "fulfilled":
                return S.value;
            case "rejected":
                throw S.reason;
            default:
                switch (typeof S.status == "string" ? S.then(ye, ye) : (S.status = "pending",
                    S.then(function (_) {
                        S.status === "pending" && (S.status = "fulfilled",
                            S.value = _)
                    }, function (_) {
                        S.status === "pending" && (S.status = "rejected",
                            S.reason = _)
                    })),
                S.status) {
                    case "fulfilled":
                        return S.value;
                    case "rejected":
                        throw S.reason
                }
        }
        throw S
    }
    function D(S, _, G, Q, ee) {
        var ne = typeof S;
        (ne === "undefined" || ne === "boolean") && (S = null);
        var pe = !1;
        if (S === null)
            pe = !0;
        else
            switch (ne) {
                case "bigint":
                case "string":
                case "number":
                    pe = !0;
                    break;
                case "object":
                    switch (S.$$typeof) {
                        case s:
                        case u:
                            pe = !0;
                            break;
                        case T:
                            return pe = S._init,
                                D(pe(S._payload), _, G, Q, ee)
                    }
            }
        if (pe)
            return ee = ee(S),
                pe = Q === "" ? "." + we(S, 0) : Q,
                re(ee) ? (G = "",
                    pe != null && (G = pe.replace(Ve, "$&/") + "/"),
                    D(ee, _, G, "", function (Va) {
                        return Va
                    })) : ee != null && (bt(ee) && (ee = Re(ee, G + (ee.key == null || S && S.key === ee.key ? "" : ("" + ee.key).replace(Ve, "$&/") + "/") + pe)),
                        _.push(ee)),
                1;
        pe = 0;
        var et = Q === "" ? "." : Q + ":";
        if (re(S))
            for (var Me = 0; Me < S.length; Me++)
                Q = S[Me],
                    ne = et + we(Q, Me),
                    pe += D(Q, _, G, ne, ee);
        else if (Me = j(S),
            typeof Me == "function")
            for (S = Me.call(S),
                Me = 0; !(Q = S.next()).done;)
                Q = Q.value,
                    ne = et + we(Q, Me++),
                    pe += D(Q, _, G, ne, ee);
        else if (ne === "object") {
            if (typeof S.then == "function")
                return D(lt(S), _, G, Q, ee);
            throw _ = String(S),
            Error("Objects are not valid as a React child (found: " + (_ === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : _) + "). If you meant to render a collection of children, use an array instead.")
        }
        return pe
    }
    function Y(S, _, G) {
        if (S == null)
            return S;
        var Q = []
            , ee = 0;
        return D(S, Q, "", "", function (ne) {
            return _.call(G, ne, ee++)
        }),
            Q
    }
    function F(S) {
        if (S._status === -1) {
            var _ = S._result;
            _ = _(),
                _.then(function (G) {
                    (S._status === 0 || S._status === -1) && (S._status = 1,
                        S._result = G)
                }, function (G) {
                    (S._status === 0 || S._status === -1) && (S._status = 2,
                        S._result = G)
                }),
                S._status === -1 && (S._status = 0,
                    S._result = _)
        }
        if (S._status === 1)
            return S._result.default;
        throw S._result
    }
    var fe = typeof reportError == "function" ? reportError : function (S) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var _ = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message: typeof S == "object" && S !== null && typeof S.message == "string" ? String(S.message) : String(S),
                error: S
            });
            if (!window.dispatchEvent(_))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", S);
            return
        }
        console.error(S)
    }
        , ge = {
            map: Y,
            forEach: function (S, _, G) {
                Y(S, function () {
                    _.apply(this, arguments)
                }, G)
            },
            count: function (S) {
                var _ = 0;
                return Y(S, function () {
                    _++
                }),
                    _
            },
            toArray: function (S) {
                return Y(S, function (_) {
                    return _
                }) || []
            },
            only: function (S) {
                if (!bt(S))
                    throw Error("React.Children.only expected to receive a single React element child.");
                return S
            }
        };
    return P.Activity = b,
        P.Children = ge,
        P.Component = K,
        P.Fragment = c,
        P.Profiler = o,
        P.PureComponent = k,
        P.StrictMode = r,
        P.Suspense = y,
        P.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = W,
        P.__COMPILER_RUNTIME = {
            __proto__: null,
            c: function (S) {
                return W.H.useMemoCache(S)
            }
        },
        P.cache = function (S) {
            return function () {
                return S.apply(null, arguments)
            }
        }
        ,
        P.cacheSignal = function () {
            return null
        }
        ,
        P.cloneElement = function (S, _, G) {
            if (S == null)
                throw Error("The argument must be a React element, but you passed " + S + ".");
            var Q = B({}, S.props)
                , ee = S.key;
            if (_ != null)
                for (ne in _.key !== void 0 && (ee = "" + _.key),
                    _)
                    !Ae.call(_, ne) || ne === "key" || ne === "__self" || ne === "__source" || ne === "ref" && _.ref === void 0 || (Q[ne] = _[ne]);
            var ne = arguments.length - 2;
            if (ne === 1)
                Q.children = G;
            else if (1 < ne) {
                for (var pe = Array(ne), et = 0; et < ne; et++)
                    pe[et] = arguments[et + 2];
                Q.children = pe
            }
            return Ne(S.type, ee, Q)
        }
        ,
        P.createContext = function (S) {
            return S = {
                $$typeof: h,
                _currentValue: S,
                _currentValue2: S,
                _threadCount: 0,
                Provider: null,
                Consumer: null
            },
                S.Provider = S,
                S.Consumer = {
                    $$typeof: d,
                    _context: S
                },
                S
        }
        ,
        P.createElement = function (S, _, G) {
            var Q, ee = {}, ne = null;
            if (_ != null)
                for (Q in _.key !== void 0 && (ne = "" + _.key),
                    _)
                    Ae.call(_, Q) && Q !== "key" && Q !== "__self" && Q !== "__source" && (ee[Q] = _[Q]);
            var pe = arguments.length - 2;
            if (pe === 1)
                ee.children = G;
            else if (1 < pe) {
                for (var et = Array(pe), Me = 0; Me < pe; Me++)
                    et[Me] = arguments[Me + 2];
                ee.children = et
            }
            if (S && S.defaultProps)
                for (Q in pe = S.defaultProps,
                    pe)
                    ee[Q] === void 0 && (ee[Q] = pe[Q]);
            return Ne(S, ne, ee)
        }
        ,
        P.createRef = function () {
            return {
                current: null
            }
        }
        ,
        P.forwardRef = function (S) {
            return {
                $$typeof: p,
                render: S
            }
        }
        ,
        P.isValidElement = bt,
        P.lazy = function (S) {
            return {
                $$typeof: T,
                _payload: {
                    _status: -1,
                    _result: S
                },
                _init: F
            }
        }
        ,
        P.memo = function (S, _) {
            return {
                $$typeof: g,
                type: S,
                compare: _ === void 0 ? null : _
            }
        }
        ,
        P.startTransition = function (S) {
            var _ = W.T
                , G = {};
            W.T = G;
            try {
                var Q = S()
                    , ee = W.S;
                ee !== null && ee(G, Q),
                    typeof Q == "object" && Q !== null && typeof Q.then == "function" && Q.then(ye, fe)
            } catch (ne) {
                fe(ne)
            } finally {
                _ !== null && G.types !== null && (_.types = G.types),
                    W.T = _
            }
        }
        ,
        P.unstable_useCacheRefresh = function () {
            return W.H.useCacheRefresh()
        }
        ,
        P.use = function (S) {
            return W.H.use(S)
        }
        ,
        P.useActionState = function (S, _, G) {
            return W.H.useActionState(S, _, G)
        }
        ,
        P.useCallback = function (S, _) {
            return W.H.useCallback(S, _)
        }
        ,
        P.useContext = function (S) {
            return W.H.useContext(S)
        }
        ,
        P.useDebugValue = function () { }
        ,
        P.useDeferredValue = function (S, _) {
            return W.H.useDeferredValue(S, _)
        }
        ,
        P.useEffect = function (S, _) {
            return W.H.useEffect(S, _)
        }
        ,
        P.useEffectEvent = function (S) {
            return W.H.useEffectEvent(S)
        }
        ,
        P.useId = function () {
            return W.H.useId()
        }
        ,
        P.useImperativeHandle = function (S, _, G) {
            return W.H.useImperativeHandle(S, _, G)
        }
        ,
        P.useInsertionEffect = function (S, _) {
            return W.H.useInsertionEffect(S, _)
        }
        ,
        P.useLayoutEffect = function (S, _) {
            return W.H.useLayoutEffect(S, _)
        }
        ,
        P.useMemo = function (S, _) {
            return W.H.useMemo(S, _)
        }
        ,
        P.useOptimistic = function (S, _) {
            return W.H.useOptimistic(S, _)
        }
        ,
        P.useReducer = function (S, _, G) {
            return W.H.useReducer(S, _, G)
        }
        ,
        P.useRef = function (S) {
            return W.H.useRef(S)
        }
        ,
        P.useState = function (S) {
            return W.H.useState(S)
        }
        ,
        P.useSyncExternalStore = function (S, _, G) {
            return W.H.useSyncExternalStore(S, _, G)
        }
        ,
        P.useTransition = function () {
            return W.H.useTransition()
        }
        ,
        P.version = "19.2.3",
        P
}
var bh;
function ir() {
    return bh || (bh = 1,
        kc.exports = i0()),
        kc.exports
}
var M = ir();
const I = s => typeof s == "string"
    , Hn = () => {
        let s, u;
        const c = new Promise((r, o) => {
            s = r,
                u = o
        }
        );
        return c.resolve = s,
            c.reject = u,
            c
    }
    , Sh = s => s == null ? "" : "" + s
    , u0 = (s, u, c) => {
        s.forEach(r => {
            u[r] && (c[r] = u[r])
        }
        )
    }
    , s0 = /###/g
    , Eh = s => s && s.indexOf("###") > -1 ? s.replace(s0, ".") : s
    , Th = s => !s || I(s)
    , Vn = (s, u, c) => {
        const r = I(u) ? u.split(".") : u;
        let o = 0;
        for (; o < r.length - 1;) {
            if (Th(s))
                return {};
            const d = Eh(r[o]);
            !s[d] && c && (s[d] = new c),
                Object.prototype.hasOwnProperty.call(s, d) ? s = s[d] : s = {},
                ++o
        }
        return Th(s) ? {} : {
            obj: s,
            k: Eh(r[o])
        }
    }
    , Nh = (s, u, c) => {
        const { obj: r, k: o } = Vn(s, u, Object);
        if (r !== void 0 || u.length === 1) {
            r[o] = c;
            return
        }
        let d = u[u.length - 1]
            , h = u.slice(0, u.length - 1)
            , p = Vn(s, h, Object);
        for (; p.obj === void 0 && h.length;)
            d = `${h[h.length - 1]}.${d}`,
                h = h.slice(0, h.length - 1),
                p = Vn(s, h, Object),
                p?.obj && typeof p.obj[`${p.k}.${d}`] < "u" && (p.obj = void 0);
        p.obj[`${p.k}.${d}`] = c
    }
    , c0 = (s, u, c, r) => {
        const { obj: o, k: d } = Vn(s, u, Object);
        o[d] = o[d] || [],
            o[d].push(c)
    }
    , xu = (s, u) => {
        const { obj: c, k: r } = Vn(s, u);
        if (c && Object.prototype.hasOwnProperty.call(c, r))
            return c[r]
    }
    , r0 = (s, u, c) => {
        const r = xu(s, c);
        return r !== void 0 ? r : xu(u, c)
    }
    , Ph = (s, u, c) => {
        for (const r in u)
            r !== "__proto__" && r !== "constructor" && (r in s ? I(s[r]) || s[r] instanceof String || I(u[r]) || u[r] instanceof String ? c && (s[r] = u[r]) : Ph(s[r], u[r], c) : s[r] = u[r]);
        return s
    }
    , Ba = s => s.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var o0 = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
    "/": "&#x2F;"
};
const f0 = s => I(s) ? s.replace(/[&<>"'\/]/g, u => o0[u]) : s;
class d0 {
    constructor(u) {
        this.capacity = u,
            this.regExpMap = new Map,
            this.regExpQueue = []
    }
    getRegExp(u) {
        const c = this.regExpMap.get(u);
        if (c !== void 0)
            return c;
        const r = new RegExp(u);
        return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()),
            this.regExpMap.set(u, r),
            this.regExpQueue.push(u),
            r
    }
}
const h0 = [" ", ",", "?", "!", ";"]
    , m0 = new d0(20)
    , g0 = (s, u, c) => {
        u = u || "",
            c = c || "";
        const r = h0.filter(h => u.indexOf(h) < 0 && c.indexOf(h) < 0);
        if (r.length === 0)
            return !0;
        const o = m0.getRegExp(`(${r.map(h => h === "?" ? "\\?" : h).join("|")})`);
        let d = !o.test(s);
        if (!d) {
            const h = s.indexOf(c);
            h > 0 && !o.test(s.substring(0, h)) && (d = !0)
        }
        return d
    }
    , lr = (s, u, c = ".") => {
        if (!s)
            return;
        if (s[u])
            return Object.prototype.hasOwnProperty.call(s, u) ? s[u] : void 0;
        const r = u.split(c);
        let o = s;
        for (let d = 0; d < r.length;) {
            if (!o || typeof o != "object")
                return;
            let h, p = "";
            for (let y = d; y < r.length; ++y)
                if (y !== d && (p += c),
                    p += r[y],
                    h = o[p],
                    h !== void 0) {
                    if (["string", "number", "boolean"].indexOf(typeof h) > -1 && y < r.length - 1)
                        continue;
                    d += y - d + 1;
                    break
                }
            o = h
        }
        return o
    }
    , Qn = s => s?.replace("_", "-")
    , p0 = {
        type: "logger",
        log(s) {
            this.output("log", s)
        },
        warn(s) {
            this.output("warn", s)
        },
        error(s) {
            this.output("error", s)
        },
        output(s, u) {
            console?.[s]?.apply?.(console, u)
        }
    };
class bu {
    constructor(u, c = {}) {
        this.init(u, c)
    }
    init(u, c = {}) {
        this.prefix = c.prefix || "i18next:",
            this.logger = u || p0,
            this.options = c,
            this.debug = c.debug
    }
    log(...u) {
        return this.forward(u, "log", "", !0)
    }
    warn(...u) {
        return this.forward(u, "warn", "", !0)
    }
    error(...u) {
        return this.forward(u, "error", "")
    }
    deprecate(...u) {
        return this.forward(u, "warn", "WARNING DEPRECATED: ", !0)
    }
    forward(u, c, r, o) {
        return o && !this.debug ? null : (I(u[0]) && (u[0] = `${r}${this.prefix} ${u[0]}`),
            this.logger[c](u))
    }
    create(u) {
        return new bu(this.logger, {
            prefix: `${this.prefix}:${u}:`,
            ...this.options
        })
    }
    clone(u) {
        return u = u || this.options,
            u.prefix = u.prefix || this.prefix,
            new bu(this.logger, u)
    }
}
var Gt = new bu;
class Tu {
    constructor() {
        this.observers = {}
    }
    on(u, c) {
        return u.split(" ").forEach(r => {
            this.observers[r] || (this.observers[r] = new Map);
            const o = this.observers[r].get(c) || 0;
            this.observers[r].set(c, o + 1)
        }
        ),
            this
    }
    off(u, c) {
        if (this.observers[u]) {
            if (!c) {
                delete this.observers[u];
                return
            }
            this.observers[u].delete(c)
        }
    }
    emit(u, ...c) {
        this.observers[u] && Array.from(this.observers[u].entries()).forEach(([o, d]) => {
            for (let h = 0; h < d; h++)
                o(...c)
        }
        ),
            this.observers["*"] && Array.from(this.observers["*"].entries()).forEach(([o, d]) => {
                for (let h = 0; h < d; h++)
                    o.apply(o, [u, ...c])
            }
            )
    }
}
class Ch extends Tu {
    constructor(u, c = {
        ns: ["translation"],
        defaultNS: "translation"
    }) {
        super(),
            this.data = u || {},
            this.options = c,
            this.options.keySeparator === void 0 && (this.options.keySeparator = "."),
            this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0)
    }
    addNamespaces(u) {
        this.options.ns.indexOf(u) < 0 && this.options.ns.push(u)
    }
    removeNamespaces(u) {
        const c = this.options.ns.indexOf(u);
        c > -1 && this.options.ns.splice(c, 1)
    }
    getResource(u, c, r, o = {}) {
        const d = o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator
            , h = o.ignoreJSONStructure !== void 0 ? o.ignoreJSONStructure : this.options.ignoreJSONStructure;
        let p;
        u.indexOf(".") > -1 ? p = u.split(".") : (p = [u, c],
            r && (Array.isArray(r) ? p.push(...r) : I(r) && d ? p.push(...r.split(d)) : p.push(r)));
        const y = xu(this.data, p);
        return !y && !c && !r && u.indexOf(".") > -1 && (u = p[0],
            c = p[1],
            r = p.slice(2).join(".")),
            y || !h || !I(r) ? y : lr(this.data?.[u]?.[c], r, d)
    }
    addResource(u, c, r, o, d = {
        silent: !1
    }) {
        const h = d.keySeparator !== void 0 ? d.keySeparator : this.options.keySeparator;
        let p = [u, c];
        r && (p = p.concat(h ? r.split(h) : r)),
            u.indexOf(".") > -1 && (p = u.split("."),
                o = c,
                c = p[1]),
            this.addNamespaces(c),
            Nh(this.data, p, o),
            d.silent || this.emit("added", u, c, r, o)
    }
    addResources(u, c, r, o = {
        silent: !1
    }) {
        for (const d in r)
            (I(r[d]) || Array.isArray(r[d])) && this.addResource(u, c, d, r[d], {
                silent: !0
            });
        o.silent || this.emit("added", u, c, r)
    }
    addResourceBundle(u, c, r, o, d, h = {
        silent: !1,
        skipCopy: !1
    }) {
        let p = [u, c];
        u.indexOf(".") > -1 && (p = u.split("."),
            o = r,
            r = c,
            c = p[1]),
            this.addNamespaces(c);
        let y = xu(this.data, p) || {};
        h.skipCopy || (r = JSON.parse(JSON.stringify(r))),
            o ? Ph(y, r, d) : y = {
                ...y,
                ...r
            },
            Nh(this.data, p, y),
            h.silent || this.emit("added", u, c, r)
    }
    removeResourceBundle(u, c) {
        this.hasResourceBundle(u, c) && delete this.data[u][c],
            this.removeNamespaces(c),
            this.emit("removed", u, c)
    }
    hasResourceBundle(u, c) {
        return this.getResource(u, c) !== void 0
    }
    getResourceBundle(u, c) {
        return c || (c = this.options.defaultNS),
            this.getResource(u, c)
    }
    getDataByLanguage(u) {
        return this.data[u]
    }
    hasLanguageSomeTranslations(u) {
        const c = this.getDataByLanguage(u);
        return !!(c && Object.keys(c) || []).find(o => c[o] && Object.keys(c[o]).length > 0)
    }
    toJSON() {
        return this.data
    }
}
var em = {
    processors: {},
    addPostProcessor(s) {
        this.processors[s.name] = s
    },
    handle(s, u, c, r, o) {
        return s.forEach(d => {
            u = this.processors[d]?.process(u, c, r, o) ?? u
        }
        ),
            u
    }
};
const tm = Symbol("i18next/PATH_KEY");
function y0() {
    const s = []
        , u = Object.create(null);
    let c;
    return u.get = (r, o) => (c?.revoke?.(),
        o === tm ? s : (s.push(o),
            c = Proxy.revocable(r, u),
            c.proxy)),
        Proxy.revocable(Object.create(null), u).proxy
}
function ar(s, u) {
    const { [tm]: c } = s(y0());
    return c.join(u?.keySeparator ?? ".")
}
const Oh = {}
    , Ah = s => !I(s) && typeof s != "boolean" && typeof s != "number";
class Su extends Tu {
    constructor(u, c = {}) {
        super(),
            u0(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], u, this),
            this.options = c,
            this.options.keySeparator === void 0 && (this.options.keySeparator = "."),
            this.logger = Gt.create("translator")
    }
    changeLanguage(u) {
        u && (this.language = u)
    }
    exists(u, c = {
        interpolation: {}
    }) {
        const r = {
            ...c
        };
        return u == null ? !1 : this.resolve(u, r)?.res !== void 0
    }
    extractFromKey(u, c) {
        let r = c.nsSeparator !== void 0 ? c.nsSeparator : this.options.nsSeparator;
        r === void 0 && (r = ":");
        const o = c.keySeparator !== void 0 ? c.keySeparator : this.options.keySeparator;
        let d = c.ns || this.options.defaultNS || [];
        const h = r && u.indexOf(r) > -1
            , p = !this.options.userDefinedKeySeparator && !c.keySeparator && !this.options.userDefinedNsSeparator && !c.nsSeparator && !g0(u, r, o);
        if (h && !p) {
            const y = u.match(this.interpolator.nestingRegexp);
            if (y && y.length > 0)
                return {
                    key: u,
                    namespaces: I(d) ? [d] : d
                };
            const g = u.split(r);
            (r !== o || r === o && this.options.ns.indexOf(g[0]) > -1) && (d = g.shift()),
                u = g.join(o)
        }
        return {
            key: u,
            namespaces: I(d) ? [d] : d
        }
    }
    translate(u, c, r) {
        let o = typeof c == "object" ? {
            ...c
        } : c;
        if (typeof o != "object" && this.options.overloadTranslationOptionHandler && (o = this.options.overloadTranslationOptionHandler(arguments)),
            typeof options == "object" && (o = {
                ...o
            }),
            o || (o = {}),
            u == null)
            return "";
        typeof u == "function" && (u = ar(u, o)),
            Array.isArray(u) || (u = [String(u)]);
        const d = o.returnDetails !== void 0 ? o.returnDetails : this.options.returnDetails
            , h = o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator
            , { key: p, namespaces: y } = this.extractFromKey(u[u.length - 1], o)
            , g = y[y.length - 1];
        let T = o.nsSeparator !== void 0 ? o.nsSeparator : this.options.nsSeparator;
        T === void 0 && (T = ":");
        const b = o.lng || this.language
            , z = o.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
        if (b?.toLowerCase() === "cimode")
            return z ? d ? {
                res: `${g}${T}${p}`,
                usedKey: p,
                exactUsedKey: p,
                usedLng: b,
                usedNS: g,
                usedParams: this.getUsedParamsDetails(o)
            } : `${g}${T}${p}` : d ? {
                res: p,
                usedKey: p,
                exactUsedKey: p,
                usedLng: b,
                usedNS: g,
                usedParams: this.getUsedParamsDetails(o)
            } : p;
        const j = this.resolve(u, o);
        let H = j?.res;
        const B = j?.usedKey || p
            , q = j?.exactUsedKey || p
            , K = ["[object Number]", "[object Function]", "[object RegExp]"]
            , V = o.joinArrays !== void 0 ? o.joinArrays : this.options.joinArrays
            , k = !this.i18nFormat || this.i18nFormat.handleAsObject
            , ae = o.count !== void 0 && !I(o.count)
            , re = Su.hasDefaultValue(o)
            , ye = ae ? this.pluralResolver.getSuffix(b, o.count, o) : ""
            , W = o.ordinal && ae ? this.pluralResolver.getSuffix(b, o.count, {
                ordinal: !1
            }) : ""
            , Ae = ae && !o.ordinal && o.count === 0
            , Ne = Ae && o[`defaultValue${this.options.pluralSeparator}zero`] || o[`defaultValue${ye}`] || o[`defaultValue${W}`] || o.defaultValue;
        let Re = H;
        k && !H && re && (Re = Ne);
        const bt = Ah(Re)
            , Ie = Object.prototype.toString.apply(Re);
        if (k && Re && bt && K.indexOf(Ie) < 0 && !(I(V) && Array.isArray(Re))) {
            if (!o.returnObjects && !this.options.returnObjects) {
                this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
                const Ve = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(B, Re, {
                    ...o,
                    ns: y
                }) : `key '${p} (${this.language})' returned an object instead of string.`;
                return d ? (j.res = Ve,
                    j.usedParams = this.getUsedParamsDetails(o),
                    j) : Ve
            }
            if (h) {
                const Ve = Array.isArray(Re)
                    , we = Ve ? [] : {}
                    , lt = Ve ? q : B;
                for (const D in Re)
                    if (Object.prototype.hasOwnProperty.call(Re, D)) {
                        const Y = `${lt}${h}${D}`;
                        re && !H ? we[D] = this.translate(Y, {
                            ...o,
                            defaultValue: Ah(Ne) ? Ne[D] : void 0,
                            joinArrays: !1,
                            ns: y
                        }) : we[D] = this.translate(Y, {
                            ...o,
                            joinArrays: !1,
                            ns: y
                        }),
                            we[D] === Y && (we[D] = Re[D])
                    }
                H = we
            }
        } else if (k && I(V) && Array.isArray(H))
            H = H.join(V),
                H && (H = this.extendTranslation(H, u, o, r));
        else {
            let Ve = !1
                , we = !1;
            !this.isValidLookup(H) && re && (Ve = !0,
                H = Ne),
                this.isValidLookup(H) || (we = !0,
                    H = p);
            const D = (o.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && we ? void 0 : H
                , Y = re && Ne !== H && this.options.updateMissing;
            if (we || Ve || Y) {
                if (this.logger.log(Y ? "updateKey" : "missingKey", b, g, p, Y ? Ne : H),
                    h) {
                    const S = this.resolve(p, {
                        ...o,
                        keySeparator: !1
                    });
                    S && S.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")
                }
                let F = [];
                const fe = this.languageUtils.getFallbackCodes(this.options.fallbackLng, o.lng || this.language);
                if (this.options.saveMissingTo === "fallback" && fe && fe[0])
                    for (let S = 0; S < fe.length; S++)
                        F.push(fe[S]);
                else
                    this.options.saveMissingTo === "all" ? F = this.languageUtils.toResolveHierarchy(o.lng || this.language) : F.push(o.lng || this.language);
                const ge = (S, _, G) => {
                    const Q = re && G !== H ? G : D;
                    this.options.missingKeyHandler ? this.options.missingKeyHandler(S, g, _, Q, Y, o) : this.backendConnector?.saveMissing && this.backendConnector.saveMissing(S, g, _, Q, Y, o),
                        this.emit("missingKey", S, g, _, H)
                }
                    ;
                this.options.saveMissing && (this.options.saveMissingPlurals && ae ? F.forEach(S => {
                    const _ = this.pluralResolver.getSuffixes(S, o);
                    Ae && o[`defaultValue${this.options.pluralSeparator}zero`] && _.indexOf(`${this.options.pluralSeparator}zero`) < 0 && _.push(`${this.options.pluralSeparator}zero`),
                        _.forEach(G => {
                            ge([S], p + G, o[`defaultValue${G}`] || Ne)
                        }
                        )
                }
                ) : ge(F, p, Ne))
            }
            H = this.extendTranslation(H, u, o, j, r),
                we && H === p && this.options.appendNamespaceToMissingKey && (H = `${g}${T}${p}`),
                (we || Ve) && this.options.parseMissingKeyHandler && (H = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${g}${T}${p}` : p, Ve ? H : void 0, o))
        }
        return d ? (j.res = H,
            j.usedParams = this.getUsedParamsDetails(o),
            j) : H
    }
    extendTranslation(u, c, r, o, d) {
        if (this.i18nFormat?.parse)
            u = this.i18nFormat.parse(u, {
                ...this.options.interpolation.defaultVariables,
                ...r
            }, r.lng || this.language || o.usedLng, o.usedNS, o.usedKey, {
                resolved: o
            });
        else if (!r.skipInterpolation) {
            r.interpolation && this.interpolator.init({
                ...r,
                interpolation: {
                    ...this.options.interpolation,
                    ...r.interpolation
                }
            });
            const y = I(u) && (r?.interpolation?.skipOnVariables !== void 0 ? r.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
            let g;
            if (y) {
                const b = u.match(this.interpolator.nestingRegexp);
                g = b && b.length
            }
            let T = r.replace && !I(r.replace) ? r.replace : r;
            if (this.options.interpolation.defaultVariables && (T = {
                ...this.options.interpolation.defaultVariables,
                ...T
            }),
                u = this.interpolator.interpolate(u, T, r.lng || this.language || o.usedLng, r),
                y) {
                const b = u.match(this.interpolator.nestingRegexp)
                    , z = b && b.length;
                g < z && (r.nest = !1)
            }
            !r.lng && o && o.res && (r.lng = this.language || o.usedLng),
                r.nest !== !1 && (u = this.interpolator.nest(u, (...b) => d?.[0] === b[0] && !r.context ? (this.logger.warn(`It seems you are nesting recursively key: ${b[0]} in key: ${c[0]}`),
                    null) : this.translate(...b, c), r)),
                r.interpolation && this.interpolator.reset()
        }
        const h = r.postProcess || this.options.postProcess
            , p = I(h) ? [h] : h;
        return u != null && p?.length && r.applyPostProcessor !== !1 && (u = em.handle(p, u, c, this.options && this.options.postProcessPassResolved ? {
            i18nResolved: {
                ...o,
                usedParams: this.getUsedParamsDetails(r)
            },
            ...r
        } : r, this)),
            u
    }
    resolve(u, c = {}) {
        let r, o, d, h, p;
        return I(u) && (u = [u]),
            u.forEach(y => {
                if (this.isValidLookup(r))
                    return;
                const g = this.extractFromKey(y, c)
                    , T = g.key;
                o = T;
                let b = g.namespaces;
                this.options.fallbackNS && (b = b.concat(this.options.fallbackNS));
                const z = c.count !== void 0 && !I(c.count)
                    , j = z && !c.ordinal && c.count === 0
                    , H = c.context !== void 0 && (I(c.context) || typeof c.context == "number") && c.context !== ""
                    , B = c.lngs ? c.lngs : this.languageUtils.toResolveHierarchy(c.lng || this.language, c.fallbackLng);
                b.forEach(q => {
                    this.isValidLookup(r) || (p = q,
                        !Oh[`${B[0]}-${q}`] && this.utils?.hasLoadedNamespace && !this.utils?.hasLoadedNamespace(p) && (Oh[`${B[0]}-${q}`] = !0,
                            this.logger.warn(`key "${o}" for languages "${B.join(", ")}" won't get resolved as namespace "${p}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),
                        B.forEach(K => {
                            if (this.isValidLookup(r))
                                return;
                            h = K;
                            const V = [T];
                            if (this.i18nFormat?.addLookupKeys)
                                this.i18nFormat.addLookupKeys(V, T, K, q, c);
                            else {
                                let ae;
                                z && (ae = this.pluralResolver.getSuffix(K, c.count, c));
                                const re = `${this.options.pluralSeparator}zero`
                                    , ye = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                                if (z && (c.ordinal && ae.indexOf(ye) === 0 && V.push(T + ae.replace(ye, this.options.pluralSeparator)),
                                    V.push(T + ae),
                                    j && V.push(T + re)),
                                    H) {
                                    const W = `${T}${this.options.contextSeparator || "_"}${c.context}`;
                                    V.push(W),
                                        z && (c.ordinal && ae.indexOf(ye) === 0 && V.push(W + ae.replace(ye, this.options.pluralSeparator)),
                                            V.push(W + ae),
                                            j && V.push(W + re))
                                }
                            }
                            let k;
                            for (; k = V.pop();)
                                this.isValidLookup(r) || (d = k,
                                    r = this.getResource(K, q, k, c))
                        }
                        ))
                }
                )
            }
            ),
        {
            res: r,
            usedKey: o,
            exactUsedKey: d,
            usedLng: h,
            usedNS: p
        }
    }
    isValidLookup(u) {
        return u !== void 0 && !(!this.options.returnNull && u === null) && !(!this.options.returnEmptyString && u === "")
    }
    getResource(u, c, r, o = {}) {
        return this.i18nFormat?.getResource ? this.i18nFormat.getResource(u, c, r, o) : this.resourceStore.getResource(u, c, r, o)
    }
    getUsedParamsDetails(u = {}) {
        const c = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"]
            , r = u.replace && !I(u.replace);
        let o = r ? u.replace : u;
        if (r && typeof u.count < "u" && (o.count = u.count),
            this.options.interpolation.defaultVariables && (o = {
                ...this.options.interpolation.defaultVariables,
                ...o
            }),
            !r) {
            o = {
                ...o
            };
            for (const d of c)
                delete o[d]
        }
        return o
    }
    static hasDefaultValue(u) {
        const c = "defaultValue";
        for (const r in u)
            if (Object.prototype.hasOwnProperty.call(u, r) && c === r.substring(0, c.length) && u[r] !== void 0)
                return !0;
        return !1
    }
}
class zh {
    constructor(u) {
        this.options = u,
            this.supportedLngs = this.options.supportedLngs || !1,
            this.logger = Gt.create("languageUtils")
    }
    getScriptPartFromCode(u) {
        if (u = Qn(u),
            !u || u.indexOf("-") < 0)
            return null;
        const c = u.split("-");
        return c.length === 2 || (c.pop(),
            c[c.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(c.join("-"))
    }
    getLanguagePartFromCode(u) {
        if (u = Qn(u),
            !u || u.indexOf("-") < 0)
            return u;
        const c = u.split("-");
        return this.formatLanguageCode(c[0])
    }
    formatLanguageCode(u) {
        if (I(u) && u.indexOf("-") > -1) {
            let c;
            try {
                c = Intl.getCanonicalLocales(u)[0]
            } catch { }
            return c && this.options.lowerCaseLng && (c = c.toLowerCase()),
                c || (this.options.lowerCaseLng ? u.toLowerCase() : u)
        }
        return this.options.cleanCode || this.options.lowerCaseLng ? u.toLowerCase() : u
    }
    isSupportedCode(u) {
        return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (u = this.getLanguagePartFromCode(u)),
            !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(u) > -1
    }
    getBestMatchFromCodes(u) {
        if (!u)
            return null;
        let c;
        return u.forEach(r => {
            if (c)
                return;
            const o = this.formatLanguageCode(r);
            (!this.options.supportedLngs || this.isSupportedCode(o)) && (c = o)
        }
        ),
            !c && this.options.supportedLngs && u.forEach(r => {
                if (c)
                    return;
                const o = this.getScriptPartFromCode(r);
                if (this.isSupportedCode(o))
                    return c = o;
                const d = this.getLanguagePartFromCode(r);
                if (this.isSupportedCode(d))
                    return c = d;
                c = this.options.supportedLngs.find(h => {
                    if (h === d)
                        return h;
                    if (!(h.indexOf("-") < 0 && d.indexOf("-") < 0) && (h.indexOf("-") > 0 && d.indexOf("-") < 0 && h.substring(0, h.indexOf("-")) === d || h.indexOf(d) === 0 && d.length > 1))
                        return h
                }
                )
            }
            ),
            c || (c = this.getFallbackCodes(this.options.fallbackLng)[0]),
            c
    }
    getFallbackCodes(u, c) {
        if (!u)
            return [];
        if (typeof u == "function" && (u = u(c)),
            I(u) && (u = [u]),
            Array.isArray(u))
            return u;
        if (!c)
            return u.default || [];
        let r = u[c];
        return r || (r = u[this.getScriptPartFromCode(c)]),
            r || (r = u[this.formatLanguageCode(c)]),
            r || (r = u[this.getLanguagePartFromCode(c)]),
            r || (r = u.default),
            r || []
    }
    toResolveHierarchy(u, c) {
        const r = this.getFallbackCodes((c === !1 ? [] : c) || this.options.fallbackLng || [], u)
            , o = []
            , d = h => {
                h && (this.isSupportedCode(h) ? o.push(h) : this.logger.warn(`rejecting language code not found in supportedLngs: ${h}`))
            }
            ;
        return I(u) && (u.indexOf("-") > -1 || u.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && d(this.formatLanguageCode(u)),
            this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && d(this.getScriptPartFromCode(u)),
            this.options.load !== "currentOnly" && d(this.getLanguagePartFromCode(u))) : I(u) && d(this.formatLanguageCode(u)),
            r.forEach(h => {
                o.indexOf(h) < 0 && d(this.formatLanguageCode(h))
            }
            ),
            o
    }
}
const Rh = {
    zero: 0,
    one: 1,
    two: 2,
    few: 3,
    many: 4,
    other: 5
}
    , jh = {
        select: s => s === 1 ? "one" : "other",
        resolvedOptions: () => ({
            pluralCategories: ["one", "other"]
        })
    };
class v0 {
    constructor(u, c = {}) {
        this.languageUtils = u,
            this.options = c,
            this.logger = Gt.create("pluralResolver"),
            this.pluralRulesCache = {}
    }
    addRule(u, c) {
        this.rules[u] = c
    }
    clearCache() {
        this.pluralRulesCache = {}
    }
    getRule(u, c = {}) {
        const r = Qn(u === "dev" ? "en" : u)
            , o = c.ordinal ? "ordinal" : "cardinal"
            , d = JSON.stringify({
                cleanedCode: r,
                type: o
            });
        if (d in this.pluralRulesCache)
            return this.pluralRulesCache[d];
        let h;
        try {
            h = new Intl.PluralRules(r, {
                type: o
            })
        } catch {
            if (!Intl)
                return this.logger.error("No Intl support, please use an Intl polyfill!"),
                    jh;
            if (!u.match(/-|_/))
                return jh;
            const y = this.languageUtils.getLanguagePartFromCode(u);
            h = this.getRule(y, c)
        }
        return this.pluralRulesCache[d] = h,
            h
    }
    needsPlural(u, c = {}) {
        let r = this.getRule(u, c);
        return r || (r = this.getRule("dev", c)),
            r?.resolvedOptions().pluralCategories.length > 1
    }
    getPluralFormsOfKey(u, c, r = {}) {
        return this.getSuffixes(u, r).map(o => `${c}${o}`)
    }
    getSuffixes(u, c = {}) {
        let r = this.getRule(u, c);
        return r || (r = this.getRule("dev", c)),
            r ? r.resolvedOptions().pluralCategories.sort((o, d) => Rh[o] - Rh[d]).map(o => `${this.options.prepend}${c.ordinal ? `ordinal${this.options.prepend}` : ""}${o}`) : []
    }
    getSuffix(u, c, r = {}) {
        const o = this.getRule(u, r);
        return o ? `${this.options.prepend}${r.ordinal ? `ordinal${this.options.prepend}` : ""}${o.select(c)}` : (this.logger.warn(`no plural rule found for: ${u}`),
            this.getSuffix("dev", c, r))
    }
}
const Dh = (s, u, c, r = ".", o = !0) => {
    let d = r0(s, u, c);
    return !d && o && I(c) && (d = lr(s, c, r),
        d === void 0 && (d = lr(u, c, r))),
        d
}
    , Jc = s => s.replace(/\$/g, "$$$$");
class x0 {
    constructor(u = {}) {
        this.logger = Gt.create("interpolator"),
            this.options = u,
            this.format = u?.interpolation?.format || (c => c),
            this.init(u)
    }
    init(u = {}) {
        u.interpolation || (u.interpolation = {
            escapeValue: !0
        });
        const { escape: c, escapeValue: r, useRawValueToEscape: o, prefix: d, prefixEscaped: h, suffix: p, suffixEscaped: y, formatSeparator: g, unescapeSuffix: T, unescapePrefix: b, nestingPrefix: z, nestingPrefixEscaped: j, nestingSuffix: H, nestingSuffixEscaped: B, nestingOptionsSeparator: q, maxReplaces: K, alwaysFormat: V } = u.interpolation;
        this.escape = c !== void 0 ? c : f0,
            this.escapeValue = r !== void 0 ? r : !0,
            this.useRawValueToEscape = o !== void 0 ? o : !1,
            this.prefix = d ? Ba(d) : h || "{{",
            this.suffix = p ? Ba(p) : y || "}}",
            this.formatSeparator = g || ",",
            this.unescapePrefix = T ? "" : b || "-",
            this.unescapeSuffix = this.unescapePrefix ? "" : T || "",
            this.nestingPrefix = z ? Ba(z) : j || Ba("$t("),
            this.nestingSuffix = H ? Ba(H) : B || Ba(")"),
            this.nestingOptionsSeparator = q || ",",
            this.maxReplaces = K || 1e3,
            this.alwaysFormat = V !== void 0 ? V : !1,
            this.resetRegExp()
    }
    reset() {
        this.options && this.init(this.options)
    }
    resetRegExp() {
        const u = (c, r) => c?.source === r ? (c.lastIndex = 0,
            c) : new RegExp(r, "g");
        this.regexp = u(this.regexp, `${this.prefix}(.+?)${this.suffix}`),
            this.regexpUnescape = u(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),
            this.nestingRegexp = u(this.nestingRegexp, `${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`)
    }
    interpolate(u, c, r, o) {
        let d, h, p;
        const y = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}
            , g = j => {
                if (j.indexOf(this.formatSeparator) < 0) {
                    const K = Dh(c, y, j, this.options.keySeparator, this.options.ignoreJSONStructure);
                    return this.alwaysFormat ? this.format(K, void 0, r, {
                        ...o,
                        ...c,
                        interpolationkey: j
                    }) : K
                }
                const H = j.split(this.formatSeparator)
                    , B = H.shift().trim()
                    , q = H.join(this.formatSeparator).trim();
                return this.format(Dh(c, y, B, this.options.keySeparator, this.options.ignoreJSONStructure), q, r, {
                    ...o,
                    ...c,
                    interpolationkey: B
                })
            }
            ;
        this.resetRegExp();
        const T = o?.missingInterpolationHandler || this.options.missingInterpolationHandler
            , b = o?.interpolation?.skipOnVariables !== void 0 ? o.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
        return [{
            regex: this.regexpUnescape,
            safeValue: j => Jc(j)
        }, {
            regex: this.regexp,
            safeValue: j => this.escapeValue ? Jc(this.escape(j)) : Jc(j)
        }].forEach(j => {
            for (p = 0; d = j.regex.exec(u);) {
                const H = d[1].trim();
                if (h = g(H),
                    h === void 0)
                    if (typeof T == "function") {
                        const q = T(u, d, o);
                        h = I(q) ? q : ""
                    } else if (o && Object.prototype.hasOwnProperty.call(o, H))
                        h = "";
                    else if (b) {
                        h = d[0];
                        continue
                    } else
                        this.logger.warn(`missed to pass in variable ${H} for interpolating ${u}`),
                            h = "";
                else
                    !I(h) && !this.useRawValueToEscape && (h = Sh(h));
                const B = j.safeValue(h);
                if (u = u.replace(d[0], B),
                    b ? (j.regex.lastIndex += h.length,
                        j.regex.lastIndex -= d[0].length) : j.regex.lastIndex = 0,
                    p++,
                    p >= this.maxReplaces)
                    break
            }
        }
        ),
            u
    }
    nest(u, c, r = {}) {
        let o, d, h;
        const p = (y, g) => {
            const T = this.nestingOptionsSeparator;
            if (y.indexOf(T) < 0)
                return y;
            const b = y.split(new RegExp(`${T}[ ]*{`));
            let z = `{${b[1]}`;
            y = b[0],
                z = this.interpolate(z, h);
            const j = z.match(/'/g)
                , H = z.match(/"/g);
            ((j?.length ?? 0) % 2 === 0 && !H || H.length % 2 !== 0) && (z = z.replace(/'/g, '"'));
            try {
                h = JSON.parse(z),
                    g && (h = {
                        ...g,
                        ...h
                    })
            } catch (B) {
                return this.logger.warn(`failed parsing options string in nesting for key ${y}`, B),
                    `${y}${T}${z}`
            }
            return h.defaultValue && h.defaultValue.indexOf(this.prefix) > -1 && delete h.defaultValue,
                y
        }
            ;
        for (; o = this.nestingRegexp.exec(u);) {
            let y = [];
            h = {
                ...r
            },
                h = h.replace && !I(h.replace) ? h.replace : h,
                h.applyPostProcessor = !1,
                delete h.defaultValue;
            const g = /{.*}/.test(o[1]) ? o[1].lastIndexOf("}") + 1 : o[1].indexOf(this.formatSeparator);
            if (g !== -1 && (y = o[1].slice(g).split(this.formatSeparator).map(T => T.trim()).filter(Boolean),
                o[1] = o[1].slice(0, g)),
                d = c(p.call(this, o[1].trim(), h), h),
                d && o[0] === u && !I(d))
                return d;
            I(d) || (d = Sh(d)),
                d || (this.logger.warn(`missed to resolve ${o[1]} for nesting ${u}`),
                    d = ""),
                y.length && (d = y.reduce((T, b) => this.format(T, b, r.lng, {
                    ...r,
                    interpolationkey: o[1].trim()
                }), d.trim())),
                u = u.replace(o[0], d),
                this.regexp.lastIndex = 0
        }
        return u
    }
}
const b0 = s => {
    let u = s.toLowerCase().trim();
    const c = {};
    if (s.indexOf("(") > -1) {
        const r = s.split("(");
        u = r[0].toLowerCase().trim();
        const o = r[1].substring(0, r[1].length - 1);
        u === "currency" && o.indexOf(":") < 0 ? c.currency || (c.currency = o.trim()) : u === "relativetime" && o.indexOf(":") < 0 ? c.range || (c.range = o.trim()) : o.split(";").forEach(h => {
            if (h) {
                const [p, ...y] = h.split(":")
                    , g = y.join(":").trim().replace(/^'+|'+$/g, "")
                    , T = p.trim();
                c[T] || (c[T] = g),
                    g === "false" && (c[T] = !1),
                    g === "true" && (c[T] = !0),
                    isNaN(g) || (c[T] = parseInt(g, 10))
            }
        }
        )
    }
    return {
        formatName: u,
        formatOptions: c
    }
}
    , wh = s => {
        const u = {};
        return (c, r, o) => {
            let d = o;
            o && o.interpolationkey && o.formatParams && o.formatParams[o.interpolationkey] && o[o.interpolationkey] && (d = {
                ...d,
                [o.interpolationkey]: void 0
            });
            const h = r + JSON.stringify(d);
            let p = u[h];
            return p || (p = s(Qn(r), o),
                u[h] = p),
                p(c)
        }
    }
    , S0 = s => (u, c, r) => s(Qn(c), r)(u);
class E0 {
    constructor(u = {}) {
        this.logger = Gt.create("formatter"),
            this.options = u,
            this.init(u)
    }
    init(u, c = {
        interpolation: {}
    }) {
        this.formatSeparator = c.interpolation.formatSeparator || ",";
        const r = c.cacheInBuiltFormats ? wh : S0;
        this.formats = {
            number: r((o, d) => {
                const h = new Intl.NumberFormat(o, {
                    ...d
                });
                return p => h.format(p)
            }
            ),
            currency: r((o, d) => {
                const h = new Intl.NumberFormat(o, {
                    ...d,
                    style: "currency"
                });
                return p => h.format(p)
            }
            ),
            datetime: r((o, d) => {
                const h = new Intl.DateTimeFormat(o, {
                    ...d
                });
                return p => h.format(p)
            }
            ),
            relativetime: r((o, d) => {
                const h = new Intl.RelativeTimeFormat(o, {
                    ...d
                });
                return p => h.format(p, d.range || "day")
            }
            ),
            list: r((o, d) => {
                const h = new Intl.ListFormat(o, {
                    ...d
                });
                return p => h.format(p)
            }
            )
        }
    }
    add(u, c) {
        this.formats[u.toLowerCase().trim()] = c
    }
    addCached(u, c) {
        this.formats[u.toLowerCase().trim()] = wh(c)
    }
    format(u, c, r, o = {}) {
        const d = c.split(this.formatSeparator);
        if (d.length > 1 && d[0].indexOf("(") > 1 && d[0].indexOf(")") < 0 && d.find(p => p.indexOf(")") > -1)) {
            const p = d.findIndex(y => y.indexOf(")") > -1);
            d[0] = [d[0], ...d.splice(1, p)].join(this.formatSeparator)
        }
        return d.reduce((p, y) => {
            const { formatName: g, formatOptions: T } = b0(y);
            if (this.formats[g]) {
                let b = p;
                try {
                    const z = o?.formatParams?.[o.interpolationkey] || {}
                        , j = z.locale || z.lng || o.locale || o.lng || r;
                    b = this.formats[g](p, j, {
                        ...T,
                        ...o,
                        ...z
                    })
                } catch (z) {
                    this.logger.warn(z)
                }
                return b
            } else
                this.logger.warn(`there was no format function for ${g}`);
            return p
        }
            , u)
    }
}
const T0 = (s, u) => {
    s.pending[u] !== void 0 && (delete s.pending[u],
        s.pendingCount--)
}
    ;
class N0 extends Tu {
    constructor(u, c, r, o = {}) {
        super(),
            this.backend = u,
            this.store = c,
            this.services = r,
            this.languageUtils = r.languageUtils,
            this.options = o,
            this.logger = Gt.create("backendConnector"),
            this.waitingReads = [],
            this.maxParallelReads = o.maxParallelReads || 10,
            this.readingCalls = 0,
            this.maxRetries = o.maxRetries >= 0 ? o.maxRetries : 5,
            this.retryTimeout = o.retryTimeout >= 1 ? o.retryTimeout : 350,
            this.state = {},
            this.queue = [],
            this.backend?.init?.(r, o.backend, o)
    }
    queueLoad(u, c, r, o) {
        const d = {}
            , h = {}
            , p = {}
            , y = {};
        return u.forEach(g => {
            let T = !0;
            c.forEach(b => {
                const z = `${g}|${b}`;
                !r.reload && this.store.hasResourceBundle(g, b) ? this.state[z] = 2 : this.state[z] < 0 || (this.state[z] === 1 ? h[z] === void 0 && (h[z] = !0) : (this.state[z] = 1,
                    T = !1,
                    h[z] === void 0 && (h[z] = !0),
                    d[z] === void 0 && (d[z] = !0),
                    y[b] === void 0 && (y[b] = !0)))
            }
            ),
                T || (p[g] = !0)
        }
        ),
            (Object.keys(d).length || Object.keys(h).length) && this.queue.push({
                pending: h,
                pendingCount: Object.keys(h).length,
                loaded: {},
                errors: [],
                callback: o
            }),
        {
            toLoad: Object.keys(d),
            pending: Object.keys(h),
            toLoadLanguages: Object.keys(p),
            toLoadNamespaces: Object.keys(y)
        }
    }
    loaded(u, c, r) {
        const o = u.split("|")
            , d = o[0]
            , h = o[1];
        c && this.emit("failedLoading", d, h, c),
            !c && r && this.store.addResourceBundle(d, h, r, void 0, void 0, {
                skipCopy: !0
            }),
            this.state[u] = c ? -1 : 2,
            c && r && (this.state[u] = 0);
        const p = {};
        this.queue.forEach(y => {
            c0(y.loaded, [d], h),
                T0(y, u),
                c && y.errors.push(c),
                y.pendingCount === 0 && !y.done && (Object.keys(y.loaded).forEach(g => {
                    p[g] || (p[g] = {});
                    const T = y.loaded[g];
                    T.length && T.forEach(b => {
                        p[g][b] === void 0 && (p[g][b] = !0)
                    }
                    )
                }
                ),
                    y.done = !0,
                    y.errors.length ? y.callback(y.errors) : y.callback())
        }
        ),
            this.emit("loaded", p),
            this.queue = this.queue.filter(y => !y.done)
    }
    read(u, c, r, o = 0, d = this.retryTimeout, h) {
        if (!u.length)
            return h(null, {});
        if (this.readingCalls >= this.maxParallelReads) {
            this.waitingReads.push({
                lng: u,
                ns: c,
                fcName: r,
                tried: o,
                wait: d,
                callback: h
            });
            return
        }
        this.readingCalls++;
        const p = (g, T) => {
            if (this.readingCalls--,
                this.waitingReads.length > 0) {
                const b = this.waitingReads.shift();
                this.read(b.lng, b.ns, b.fcName, b.tried, b.wait, b.callback)
            }
            if (g && T && o < this.maxRetries) {
                setTimeout(() => {
                    this.read.call(this, u, c, r, o + 1, d * 2, h)
                }
                    , d);
                return
            }
            h(g, T)
        }
            , y = this.backend[r].bind(this.backend);
        if (y.length === 2) {
            try {
                const g = y(u, c);
                g && typeof g.then == "function" ? g.then(T => p(null, T)).catch(p) : p(null, g)
            } catch (g) {
                p(g)
            }
            return
        }
        return y(u, c, p)
    }
    prepareLoading(u, c, r = {}, o) {
        if (!this.backend)
            return this.logger.warn("No backend was added via i18next.use. Will not load resources."),
                o && o();
        I(u) && (u = this.languageUtils.toResolveHierarchy(u)),
            I(c) && (c = [c]);
        const d = this.queueLoad(u, c, r, o);
        if (!d.toLoad.length)
            return d.pending.length || o(),
                null;
        d.toLoad.forEach(h => {
            this.loadOne(h)
        }
        )
    }
    load(u, c, r) {
        this.prepareLoading(u, c, {}, r)
    }
    reload(u, c, r) {
        this.prepareLoading(u, c, {
            reload: !0
        }, r)
    }
    loadOne(u, c = "") {
        const r = u.split("|")
            , o = r[0]
            , d = r[1];
        this.read(o, d, "read", void 0, void 0, (h, p) => {
            h && this.logger.warn(`${c}loading namespace ${d} for language ${o} failed`, h),
                !h && p && this.logger.log(`${c}loaded namespace ${d} for language ${o}`, p),
                this.loaded(u, h, p)
        }
        )
    }
    saveMissing(u, c, r, o, d, h = {}, p = () => { }
    ) {
        if (this.services?.utils?.hasLoadedNamespace && !this.services?.utils?.hasLoadedNamespace(c)) {
            this.logger.warn(`did not save key "${r}" as the namespace "${c}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
            return
        }
        if (!(r == null || r === "")) {
            if (this.backend?.create) {
                const y = {
                    ...h,
                    isUpdate: d
                }
                    , g = this.backend.create.bind(this.backend);
                if (g.length < 6)
                    try {
                        let T;
                        g.length === 5 ? T = g(u, c, r, o, y) : T = g(u, c, r, o),
                            T && typeof T.then == "function" ? T.then(b => p(null, b)).catch(p) : p(null, T)
                    } catch (T) {
                        p(T)
                    }
                else
                    g(u, c, r, o, p, y)
            }
            !u || !u[0] || this.store.addResource(u[0], c, r, o)
        }
    }
}
const Mh = () => ({
    debug: !1,
    initAsync: !0,
    ns: ["translation"],
    defaultNS: ["translation"],
    fallbackLng: ["dev"],
    fallbackNS: !1,
    supportedLngs: !1,
    nonExplicitSupportedLngs: !1,
    load: "all",
    preload: !1,
    simplifyPluralSuffix: !0,
    keySeparator: ".",
    nsSeparator: ":",
    pluralSeparator: "_",
    contextSeparator: "_",
    partialBundledLanguages: !1,
    saveMissing: !1,
    updateMissing: !1,
    saveMissingTo: "fallback",
    saveMissingPlurals: !0,
    missingKeyHandler: !1,
    missingInterpolationHandler: !1,
    postProcess: !1,
    postProcessPassResolved: !1,
    returnNull: !1,
    returnEmptyString: !0,
    returnObjects: !1,
    joinArrays: !1,
    returnedObjectHandler: !1,
    parseMissingKeyHandler: !1,
    appendNamespaceToMissingKey: !1,
    appendNamespaceToCIMode: !1,
    overloadTranslationOptionHandler: s => {
        let u = {};
        if (typeof s[1] == "object" && (u = s[1]),
            I(s[1]) && (u.defaultValue = s[1]),
            I(s[2]) && (u.tDescription = s[2]),
            typeof s[2] == "object" || typeof s[3] == "object") {
            const c = s[3] || s[2];
            Object.keys(c).forEach(r => {
                u[r] = c[r]
            }
            )
        }
        return u
    }
    ,
    interpolation: {
        escapeValue: !0,
        format: s => s,
        prefix: "{{",
        suffix: "}}",
        formatSeparator: ",",
        unescapePrefix: "-",
        nestingPrefix: "$t(",
        nestingSuffix: ")",
        nestingOptionsSeparator: ",",
        maxReplaces: 1e3,
        skipOnVariables: !0
    },
    cacheInBuiltFormats: !0
})
    , _h = s => (I(s.ns) && (s.ns = [s.ns]),
        I(s.fallbackLng) && (s.fallbackLng = [s.fallbackLng]),
        I(s.fallbackNS) && (s.fallbackNS = [s.fallbackNS]),
        s.supportedLngs?.indexOf?.("cimode") < 0 && (s.supportedLngs = s.supportedLngs.concat(["cimode"])),
        typeof s.initImmediate == "boolean" && (s.initAsync = s.initImmediate),
        s)
    , gu = () => { }
    , C0 = s => {
        Object.getOwnPropertyNames(Object.getPrototypeOf(s)).forEach(c => {
            typeof s[c] == "function" && (s[c] = s[c].bind(s))
        }
        )
    }
    ;
class Xn extends Tu {
    constructor(u = {}, c) {
        if (super(),
            this.options = _h(u),
            this.services = {},
            this.logger = Gt,
            this.modules = {
                external: []
            },
            C0(this),
            c && !this.isInitialized && !u.isClone) {
            if (!this.options.initAsync)
                return this.init(u, c),
                    this;
            setTimeout(() => {
                this.init(u, c)
            }
                , 0)
        }
    }
    init(u = {}, c) {
        this.isInitializing = !0,
            typeof u == "function" && (c = u,
                u = {}),
            u.defaultNS == null && u.ns && (I(u.ns) ? u.defaultNS = u.ns : u.ns.indexOf("translation") < 0 && (u.defaultNS = u.ns[0]));
        const r = Mh();
        this.options = {
            ...r,
            ...this.options,
            ..._h(u)
        },
            this.options.interpolation = {
                ...r.interpolation,
                ...this.options.interpolation
            },
            u.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = u.keySeparator),
            u.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = u.nsSeparator);
        const o = g => g ? typeof g == "function" ? new g : g : null;
        if (!this.options.isClone) {
            this.modules.logger ? Gt.init(o(this.modules.logger), this.options) : Gt.init(null, this.options);
            let g;
            this.modules.formatter ? g = this.modules.formatter : g = E0;
            const T = new zh(this.options);
            this.store = new Ch(this.options.resources, this.options);
            const b = this.services;
            b.logger = Gt,
                b.resourceStore = this.store,
                b.languageUtils = T,
                b.pluralResolver = new v0(T, {
                    prepend: this.options.pluralSeparator,
                    simplifyPluralSuffix: this.options.simplifyPluralSuffix
                }),
                this.options.interpolation.format && this.options.interpolation.format !== r.interpolation.format && this.logger.deprecate("init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting"),
                g && (!this.options.interpolation.format || this.options.interpolation.format === r.interpolation.format) && (b.formatter = o(g),
                    b.formatter.init && b.formatter.init(b, this.options),
                    this.options.interpolation.format = b.formatter.format.bind(b.formatter)),
                b.interpolator = new x0(this.options),
                b.utils = {
                    hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
                },
                b.backendConnector = new N0(o(this.modules.backend), b.resourceStore, b, this.options),
                b.backendConnector.on("*", (j, ...H) => {
                    this.emit(j, ...H)
                }
                ),
                this.modules.languageDetector && (b.languageDetector = o(this.modules.languageDetector),
                    b.languageDetector.init && b.languageDetector.init(b, this.options.detection, this.options)),
                this.modules.i18nFormat && (b.i18nFormat = o(this.modules.i18nFormat),
                    b.i18nFormat.init && b.i18nFormat.init(this)),
                this.translator = new Su(this.services, this.options),
                this.translator.on("*", (j, ...H) => {
                    this.emit(j, ...H)
                }
                ),
                this.modules.external.forEach(j => {
                    j.init && j.init(this)
                }
                )
        }
        if (this.format = this.options.interpolation.format,
            c || (c = gu),
            this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
            const g = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
            g.length > 0 && g[0] !== "dev" && (this.options.lng = g[0])
        }
        !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"),
            ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach(g => {
                this[g] = (...T) => this.store[g](...T)
            }
            ),
            ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach(g => {
                this[g] = (...T) => (this.store[g](...T),
                    this)
            }
            );
        const p = Hn()
            , y = () => {
                const g = (T, b) => {
                    this.isInitializing = !1,
                        this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"),
                        this.isInitialized = !0,
                        this.options.isClone || this.logger.log("initialized", this.options),
                        this.emit("initialized", this.options),
                        p.resolve(b),
                        c(T, b)
                }
                    ;
                if (this.languages && !this.isInitialized)
                    return g(null, this.t.bind(this));
                this.changeLanguage(this.options.lng, g)
            }
            ;
        return this.options.resources || !this.options.initAsync ? y() : setTimeout(y, 0),
            p
    }
    loadResources(u, c = gu) {
        let r = c;
        const o = I(u) ? u : this.language;
        if (typeof u == "function" && (r = u),
            !this.options.resources || this.options.partialBundledLanguages) {
            if (o?.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0))
                return r();
            const d = []
                , h = p => {
                    if (!p || p === "cimode")
                        return;
                    this.services.languageUtils.toResolveHierarchy(p).forEach(g => {
                        g !== "cimode" && d.indexOf(g) < 0 && d.push(g)
                    }
                    )
                }
                ;
            o ? h(o) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(y => h(y)),
                this.options.preload?.forEach?.(p => h(p)),
                this.services.backendConnector.load(d, this.options.ns, p => {
                    !p && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language),
                        r(p)
                }
                )
        } else
            r(null)
    }
    reloadResources(u, c, r) {
        const o = Hn();
        return typeof u == "function" && (r = u,
            u = void 0),
            typeof c == "function" && (r = c,
                c = void 0),
            u || (u = this.languages),
            c || (c = this.options.ns),
            r || (r = gu),
            this.services.backendConnector.reload(u, c, d => {
                o.resolve(),
                    r(d)
            }
            ),
            o
    }
    use(u) {
        if (!u)
            throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
        if (!u.type)
            throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
        return u.type === "backend" && (this.modules.backend = u),
            (u.type === "logger" || u.log && u.warn && u.error) && (this.modules.logger = u),
            u.type === "languageDetector" && (this.modules.languageDetector = u),
            u.type === "i18nFormat" && (this.modules.i18nFormat = u),
            u.type === "postProcessor" && em.addPostProcessor(u),
            u.type === "formatter" && (this.modules.formatter = u),
            u.type === "3rdParty" && this.modules.external.push(u),
            this
    }
    setResolvedLanguage(u) {
        if (!(!u || !this.languages) && !(["cimode", "dev"].indexOf(u) > -1)) {
            for (let c = 0; c < this.languages.length; c++) {
                const r = this.languages[c];
                if (!(["cimode", "dev"].indexOf(r) > -1) && this.store.hasLanguageSomeTranslations(r)) {
                    this.resolvedLanguage = r;
                    break
                }
            }
            !this.resolvedLanguage && this.languages.indexOf(u) < 0 && this.store.hasLanguageSomeTranslations(u) && (this.resolvedLanguage = u,
                this.languages.unshift(u))
        }
    }
    changeLanguage(u, c) {
        this.isLanguageChangingTo = u;
        const r = Hn();
        this.emit("languageChanging", u);
        const o = p => {
            this.language = p,
                this.languages = this.services.languageUtils.toResolveHierarchy(p),
                this.resolvedLanguage = void 0,
                this.setResolvedLanguage(p)
        }
            , d = (p, y) => {
                y ? this.isLanguageChangingTo === u && (o(y),
                    this.translator.changeLanguage(y),
                    this.isLanguageChangingTo = void 0,
                    this.emit("languageChanged", y),
                    this.logger.log("languageChanged", y)) : this.isLanguageChangingTo = void 0,
                    r.resolve((...g) => this.t(...g)),
                    c && c(p, (...g) => this.t(...g))
            }
            , h = p => {
                !u && !p && this.services.languageDetector && (p = []);
                const y = I(p) ? p : p && p[0]
                    , g = this.store.hasLanguageSomeTranslations(y) ? y : this.services.languageUtils.getBestMatchFromCodes(I(p) ? [p] : p);
                g && (this.language || o(g),
                    this.translator.language || this.translator.changeLanguage(g),
                    this.services.languageDetector?.cacheUserLanguage?.(g)),
                    this.loadResources(g, T => {
                        d(T, g)
                    }
                    )
            }
            ;
        return !u && this.services.languageDetector && !this.services.languageDetector.async ? h(this.services.languageDetector.detect()) : !u && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(h) : this.services.languageDetector.detect(h) : h(u),
            r
    }
    getFixedT(u, c, r) {
        const o = (d, h, ...p) => {
            let y;
            typeof h != "object" ? y = this.options.overloadTranslationOptionHandler([d, h].concat(p)) : y = {
                ...h
            },
                y.lng = y.lng || o.lng,
                y.lngs = y.lngs || o.lngs,
                y.ns = y.ns || o.ns,
                y.keyPrefix !== "" && (y.keyPrefix = y.keyPrefix || r || o.keyPrefix);
            const g = this.options.keySeparator || ".";
            let T;
            return y.keyPrefix && Array.isArray(d) ? T = d.map(b => (typeof b == "function" && (b = ar(b, h)),
                `${y.keyPrefix}${g}${b}`)) : (typeof d == "function" && (d = ar(d, h)),
                    T = y.keyPrefix ? `${y.keyPrefix}${g}${d}` : d),
                this.t(T, y)
        }
            ;
        return I(u) ? o.lng = u : o.lngs = u,
            o.ns = c,
            o.keyPrefix = r,
            o
    }
    t(...u) {
        return this.translator?.translate(...u)
    }
    exists(...u) {
        return this.translator?.exists(...u)
    }
    setDefaultNamespace(u) {
        this.options.defaultNS = u
    }
    hasLoadedNamespace(u, c = {}) {
        if (!this.isInitialized)
            return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages),
                !1;
        if (!this.languages || !this.languages.length)
            return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages),
                !1;
        const r = c.lng || this.resolvedLanguage || this.languages[0]
            , o = this.options ? this.options.fallbackLng : !1
            , d = this.languages[this.languages.length - 1];
        if (r.toLowerCase() === "cimode")
            return !0;
        const h = (p, y) => {
            const g = this.services.backendConnector.state[`${p}|${y}`];
            return g === -1 || g === 0 || g === 2
        }
            ;
        if (c.precheck) {
            const p = c.precheck(this, h);
            if (p !== void 0)
                return p
        }
        return !!(this.hasResourceBundle(r, u) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || h(r, u) && (!o || h(d, u)))
    }
    loadNamespaces(u, c) {
        const r = Hn();
        return this.options.ns ? (I(u) && (u = [u]),
            u.forEach(o => {
                this.options.ns.indexOf(o) < 0 && this.options.ns.push(o)
            }
            ),
            this.loadResources(o => {
                r.resolve(),
                    c && c(o)
            }
            ),
            r) : (c && c(),
                Promise.resolve())
    }
    loadLanguages(u, c) {
        const r = Hn();
        I(u) && (u = [u]);
        const o = this.options.preload || []
            , d = u.filter(h => o.indexOf(h) < 0 && this.services.languageUtils.isSupportedCode(h));
        return d.length ? (this.options.preload = o.concat(d),
            this.loadResources(h => {
                r.resolve(),
                    c && c(h)
            }
            ),
            r) : (c && c(),
                Promise.resolve())
    }
    dir(u) {
        if (u || (u = this.resolvedLanguage || (this.languages?.length > 0 ? this.languages[0] : this.language)),
            !u)
            return "rtl";
        try {
            const o = new Intl.Locale(u);
            if (o && o.getTextInfo) {
                const d = o.getTextInfo();
                if (d && d.direction)
                    return d.direction
            }
        } catch { }
        const c = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"]
            , r = this.services?.languageUtils || new zh(Mh());
        return u.toLowerCase().indexOf("-latn") > 1 ? "ltr" : c.indexOf(r.getLanguagePartFromCode(u)) > -1 || u.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr"
    }
    static createInstance(u = {}, c) {
        return new Xn(u, c)
    }
    cloneInstance(u = {}, c = gu) {
        const r = u.forkResourceStore;
        r && delete u.forkResourceStore;
        const o = {
            ...this.options,
            ...u,
            isClone: !0
        }
            , d = new Xn(o);
        if ((u.debug !== void 0 || u.prefix !== void 0) && (d.logger = d.logger.clone(u)),
            ["store", "services", "language"].forEach(p => {
                d[p] = this[p]
            }
            ),
            d.services = {
                ...this.services
            },
            d.services.utils = {
                hasLoadedNamespace: d.hasLoadedNamespace.bind(d)
            },
            r) {
            const p = Object.keys(this.store.data).reduce((y, g) => (y[g] = {
                ...this.store.data[g]
            },
                y[g] = Object.keys(y[g]).reduce((T, b) => (T[b] = {
                    ...y[g][b]
                },
                    T), y[g]),
                y), {});
            d.store = new Ch(p, o),
                d.services.resourceStore = d.store
        }
        return d.translator = new Su(d.services, o),
            d.translator.on("*", (p, ...y) => {
                d.emit(p, ...y)
            }
            ),
            d.init(o, c),
            d.translator.options = o,
            d.translator.backendConnector.services.utils = {
                hasLoadedNamespace: d.hasLoadedNamespace.bind(d)
            },
            d
    }
    toJSON() {
        return {
            options: this.options,
            store: this.store,
            language: this.language,
            languages: this.languages,
            resolvedLanguage: this.resolvedLanguage
        }
    }
}
const We = Xn.createInstance();
We.createInstance = Xn.createInstance;
We.createInstance;
We.dir;
We.init;
We.loadResources;
We.reloadResources;
We.use;
We.changeLanguage;
We.getFixedT;
We.t;
We.exists;
We.setDefaultNamespace;
We.hasLoadedNamespace;
We.loadNamespaces;
We.loadLanguages;
const O0 = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g
    , A0 = {
        "&amp;": "&",
        "&#38;": "&",
        "&lt;": "<",
        "&#60;": "<",
        "&gt;": ">",
        "&#62;": ">",
        "&apos;": "'",
        "&#39;": "'",
        "&quot;": '"',
        "&#34;": '"',
        "&nbsp;": " ",
        "&#160;": " ",
        "&copy;": "©",
        "&#169;": "©",
        "&reg;": "®",
        "&#174;": "®",
        "&hellip;": "…",
        "&#8230;": "…",
        "&#x2F;": "/",
        "&#47;": "/"
    }
    , z0 = s => A0[s]
    , R0 = s => s.replace(O0, z0);
let Uh = {
    bindI18n: "languageChanged",
    bindI18nStore: "",
    transEmptyNodeValue: "",
    transSupportBasicHtmlNodes: !0,
    transWrapTextNodes: "",
    transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
    useSuspense: !0,
    unescape: R0
};
const j0 = (s = {}) => {
    Uh = {
        ...Uh,
        ...s
    }
}
    , D0 = {
        type: "3rdParty",
        init(s) {
            j0(s.options.react)
        }
    }
    , w0 = M.createContext();
function M0({ i18n: s, defaultNS: u, children: c }) {
    const r = M.useMemo(() => ({
        i18n: s,
        defaultNS: u
    }), [s, u]);
    return M.createElement(w0.Provider, {
        value: r
    }, c)
}
const { slice: _0, forEach: U0 } = [];
function L0(s) {
    return U0.call(_0.call(arguments, 1), u => {
        if (u)
            for (const c in u)
                s[c] === void 0 && (s[c] = u[c])
    }
    ),
        s
}
function H0(s) {
    return typeof s != "string" ? !1 : [/<\s*script.*?>/i, /<\s*\/\s*script\s*>/i, /<\s*img.*?on\w+\s*=/i, /<\s*\w+\s*on\w+\s*=.*?>/i, /javascript\s*:/i, /vbscript\s*:/i, /expression\s*\(/i, /eval\s*\(/i, /alert\s*\(/i, /document\.cookie/i, /document\.write\s*\(/i, /window\.location/i, /innerHTML/i].some(c => c.test(s))
}
const Lh = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/
    , B0 = function (s, u) {
        const r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
            path: "/"
        }
            , o = encodeURIComponent(u);
        let d = `${s}=${o}`;
        if (r.maxAge > 0) {
            const h = r.maxAge - 0;
            if (Number.isNaN(h))
                throw new Error("maxAge should be a Number");
            d += `; Max-Age=${Math.floor(h)}`
        }
        if (r.domain) {
            if (!Lh.test(r.domain))
                throw new TypeError("option domain is invalid");
            d += `; Domain=${r.domain}`
        }
        if (r.path) {
            if (!Lh.test(r.path))
                throw new TypeError("option path is invalid");
            d += `; Path=${r.path}`
        }
        if (r.expires) {
            if (typeof r.expires.toUTCString != "function")
                throw new TypeError("option expires is invalid");
            d += `; Expires=${r.expires.toUTCString()}`
        }
        if (r.httpOnly && (d += "; HttpOnly"),
            r.secure && (d += "; Secure"),
            r.sameSite)
            switch (typeof r.sameSite == "string" ? r.sameSite.toLowerCase() : r.sameSite) {
                case !0:
                    d += "; SameSite=Strict";
                    break;
                case "lax":
                    d += "; SameSite=Lax";
                    break;
                case "strict":
                    d += "; SameSite=Strict";
                    break;
                case "none":
                    d += "; SameSite=None";
                    break;
                default:
                    throw new TypeError("option sameSite is invalid")
            }
        return r.partitioned && (d += "; Partitioned"),
            d
    }
    , Hh = {
        create(s, u, c, r) {
            let o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
                path: "/",
                sameSite: "strict"
            };
            c && (o.expires = new Date,
                o.expires.setTime(o.expires.getTime() + c * 60 * 1e3)),
                r && (o.domain = r),
                document.cookie = B0(s, u, o)
        },
        read(s) {
            const u = `${s}=`
                , c = document.cookie.split(";");
            for (let r = 0; r < c.length; r++) {
                let o = c[r];
                for (; o.charAt(0) === " ";)
                    o = o.substring(1, o.length);
                if (o.indexOf(u) === 0)
                    return o.substring(u.length, o.length)
            }
            return null
        },
        remove(s, u) {
            this.create(s, "", -1, u)
        }
    };
var q0 = {
    name: "cookie",
    lookup(s) {
        let { lookupCookie: u } = s;
        if (u && typeof document < "u")
            return Hh.read(u) || void 0
    },
    cacheUserLanguage(s, u) {
        let { lookupCookie: c, cookieMinutes: r, cookieDomain: o, cookieOptions: d } = u;
        c && typeof document < "u" && Hh.create(c, s, r, o, d)
    }
}
    , Y0 = {
        name: "querystring",
        lookup(s) {
            let { lookupQuerystring: u } = s, c;
            if (typeof window < "u") {
                let { search: r } = window.location;
                !window.location.search && window.location.hash?.indexOf("?") > -1 && (r = window.location.hash.substring(window.location.hash.indexOf("?")));
                const d = r.substring(1).split("&");
                for (let h = 0; h < d.length; h++) {
                    const p = d[h].indexOf("=");
                    p > 0 && d[h].substring(0, p) === u && (c = d[h].substring(p + 1))
                }
            }
            return c
        }
    }
    , G0 = {
        name: "hash",
        lookup(s) {
            let { lookupHash: u, lookupFromHashIndex: c } = s, r;
            if (typeof window < "u") {
                const { hash: o } = window.location;
                if (o && o.length > 2) {
                    const d = o.substring(1);
                    if (u) {
                        const h = d.split("&");
                        for (let p = 0; p < h.length; p++) {
                            const y = h[p].indexOf("=");
                            y > 0 && h[p].substring(0, y) === u && (r = h[p].substring(y + 1))
                        }
                    }
                    if (r)
                        return r;
                    if (!r && c > -1) {
                        const h = o.match(/\/([a-zA-Z-]*)/g);
                        return Array.isArray(h) ? h[typeof c == "number" ? c : 0]?.replace("/", "") : void 0
                    }
                }
            }
            return r
        }
    };
let qa = null;
const Bh = () => {
    if (qa !== null)
        return qa;
    try {
        if (qa = typeof window < "u" && window.localStorage !== null,
            !qa)
            return !1;
        const s = "i18next.translate.boo";
        window.localStorage.setItem(s, "foo"),
            window.localStorage.removeItem(s)
    } catch {
        qa = !1
    }
    return qa
}
    ;
var V0 = {
    name: "localStorage",
    lookup(s) {
        let { lookupLocalStorage: u } = s;
        if (u && Bh())
            return window.localStorage.getItem(u) || void 0
    },
    cacheUserLanguage(s, u) {
        let { lookupLocalStorage: c } = u;
        c && Bh() && window.localStorage.setItem(c, s)
    }
};
let Ya = null;
const qh = () => {
    if (Ya !== null)
        return Ya;
    try {
        if (Ya = typeof window < "u" && window.sessionStorage !== null,
            !Ya)
            return !1;
        const s = "i18next.translate.boo";
        window.sessionStorage.setItem(s, "foo"),
            window.sessionStorage.removeItem(s)
    } catch {
        Ya = !1
    }
    return Ya
}
    ;
var Q0 = {
    name: "sessionStorage",
    lookup(s) {
        let { lookupSessionStorage: u } = s;
        if (u && qh())
            return window.sessionStorage.getItem(u) || void 0
    },
    cacheUserLanguage(s, u) {
        let { lookupSessionStorage: c } = u;
        c && qh() && window.sessionStorage.setItem(c, s)
    }
}
    , X0 = {
        name: "navigator",
        lookup(s) {
            const u = [];
            if (typeof navigator < "u") {
                const { languages: c, userLanguage: r, language: o } = navigator;
                if (c)
                    for (let d = 0; d < c.length; d++)
                        u.push(c[d]);
                r && u.push(r),
                    o && u.push(o)
            }
            return u.length > 0 ? u : void 0
        }
    }
    , K0 = {
        name: "htmlTag",
        lookup(s) {
            let { htmlTag: u } = s, c;
            const r = u || (typeof document < "u" ? document.documentElement : null);
            return r && typeof r.getAttribute == "function" && (c = r.getAttribute("lang")),
                c
        }
    }
    , Z0 = {
        name: "path",
        lookup(s) {
            let { lookupFromPathIndex: u } = s;
            if (typeof window > "u")
                return;
            const c = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
            return Array.isArray(c) ? c[typeof u == "number" ? u : 0]?.replace("/", "") : void 0
        }
    }
    , k0 = {
        name: "subdomain",
        lookup(s) {
            let { lookupFromSubdomainIndex: u } = s;
            const c = typeof u == "number" ? u + 1 : 1
                , r = typeof window < "u" && window.location?.hostname?.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i);
            if (r)
                return r[c]
        }
    };
let lm = !1;
try {
    document.cookie,
        lm = !0
} catch { }
const am = ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"];
lm || am.splice(1, 1);
const J0 = () => ({
    order: am,
    lookupQuerystring: "lng",
    lookupCookie: "i18next",
    lookupLocalStorage: "i18nextLng",
    lookupSessionStorage: "i18nextLng",
    caches: ["localStorage"],
    excludeCacheFor: ["cimode"],
    convertDetectedLanguage: s => s
});
class nm {
    constructor(u) {
        let c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        this.type = "languageDetector",
            this.detectors = {},
            this.init(u, c)
    }
    init() {
        let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
            languageUtils: {}
        }
            , c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
            , r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        this.services = u,
            this.options = L0(c, this.options || {}, J0()),
            typeof this.options.convertDetectedLanguage == "string" && this.options.convertDetectedLanguage.indexOf("15897") > -1 && (this.options.convertDetectedLanguage = o => o.replace("-", "_")),
            this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex),
            this.i18nOptions = r,
            this.addDetector(q0),
            this.addDetector(Y0),
            this.addDetector(V0),
            this.addDetector(Q0),
            this.addDetector(X0),
            this.addDetector(K0),
            this.addDetector(Z0),
            this.addDetector(k0),
            this.addDetector(G0)
    }
    addDetector(u) {
        return this.detectors[u.name] = u,
            this
    }
    detect() {
        let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.options.order
            , c = [];
        return u.forEach(r => {
            if (this.detectors[r]) {
                let o = this.detectors[r].lookup(this.options);
                o && typeof o == "string" && (o = [o]),
                    o && (c = c.concat(o))
            }
        }
        ),
            c = c.filter(r => r != null && !H0(r)).map(r => this.options.convertDetectedLanguage(r)),
            this.services && this.services.languageUtils && this.services.languageUtils.getBestMatchFromCodes ? c : c.length > 0 ? c[0] : null
    }
    cacheUserLanguage(u) {
        let c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.options.caches;
        c && (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(u) > -1 || c.forEach(r => {
            this.detectors[r] && this.detectors[r].cacheUserLanguage(u, this.options)
        }
        ))
    }
}
nm.type = "languageDetector";
const Yh = Object.assign({})
    , Gn = {};
Object.keys(Yh).forEach(s => {
    const u = s.match(/\.\/([^/]+)\/([^/]+)\.ts$/);
    if (u) {
        const [, c] = u
            , r = Yh[s];
        Gn[c] || (Gn[c] = {
            translation: {}
        }),
            r.default && (Gn[c].translation = {
                ...Gn[c].translation,
                ...r.default
            })
    }
}
);
We.use(nm).use(D0).init({
    lng: "en",
    fallbackLng: "en",
    debug: !1,
    resources: Gn,
    interpolation: {
        escapeValue: !1
    }
});
var Fc = {
    exports: {}
}
    , Bn = {}
    , $c = {
        exports: {}
    }
    , Wc = {};
var Gh;
function F0() {
    return Gh || (Gh = 1,
        (function (s) {
            function u(D, Y) {
                var F = D.length;
                D.push(Y);
                e: for (; 0 < F;) {
                    var fe = F - 1 >>> 1
                        , ge = D[fe];
                    if (0 < o(ge, Y))
                        D[fe] = Y,
                            D[F] = ge,
                            F = fe;
                    else
                        break e
                }
            }
            function c(D) {
                return D.length === 0 ? null : D[0]
            }
            function r(D) {
                if (D.length === 0)
                    return null;
                var Y = D[0]
                    , F = D.pop();
                if (F !== Y) {
                    D[0] = F;
                    e: for (var fe = 0, ge = D.length, S = ge >>> 1; fe < S;) {
                        var _ = 2 * (fe + 1) - 1
                            , G = D[_]
                            , Q = _ + 1
                            , ee = D[Q];
                        if (0 > o(G, F))
                            Q < ge && 0 > o(ee, G) ? (D[fe] = ee,
                                D[Q] = F,
                                fe = Q) : (D[fe] = G,
                                    D[_] = F,
                                    fe = _);
                        else if (Q < ge && 0 > o(ee, F))
                            D[fe] = ee,
                                D[Q] = F,
                                fe = Q;
                        else
                            break e
                    }
                }
                return Y
            }
            function o(D, Y) {
                var F = D.sortIndex - Y.sortIndex;
                return F !== 0 ? F : D.id - Y.id
            }
            if (s.unstable_now = void 0,
                typeof performance == "object" && typeof performance.now == "function") {
                var d = performance;
                s.unstable_now = function () {
                    return d.now()
                }
            } else {
                var h = Date
                    , p = h.now();
                s.unstable_now = function () {
                    return h.now() - p
                }
            }
            var y = []
                , g = []
                , T = 1
                , b = null
                , z = 3
                , j = !1
                , H = !1
                , B = !1
                , q = !1
                , K = typeof setTimeout == "function" ? setTimeout : null
                , V = typeof clearTimeout == "function" ? clearTimeout : null
                , k = typeof setImmediate < "u" ? setImmediate : null;
            function ae(D) {
                for (var Y = c(g); Y !== null;) {
                    if (Y.callback === null)
                        r(g);
                    else if (Y.startTime <= D)
                        r(g),
                            Y.sortIndex = Y.expirationTime,
                            u(y, Y);
                    else
                        break;
                    Y = c(g)
                }
            }
            function re(D) {
                if (B = !1,
                    ae(D),
                    !H)
                    if (c(y) !== null)
                        H = !0,
                            ye || (ye = !0,
                                Ie());
                    else {
                        var Y = c(g);
                        Y !== null && lt(re, Y.startTime - D)
                    }
            }
            var ye = !1
                , W = -1
                , Ae = 5
                , Ne = -1;
            function Re() {
                return q ? !0 : !(s.unstable_now() - Ne < Ae)
            }
            function bt() {
                if (q = !1,
                    ye) {
                    var D = s.unstable_now();
                    Ne = D;
                    var Y = !0;
                    try {
                        e: {
                            H = !1,
                                B && (B = !1,
                                    V(W),
                                    W = -1),
                                j = !0;
                            var F = z;
                            try {
                                t: {
                                    for (ae(D),
                                        b = c(y); b !== null && !(b.expirationTime > D && Re());) {
                                        var fe = b.callback;
                                        if (typeof fe == "function") {
                                            b.callback = null,
                                                z = b.priorityLevel;
                                            var ge = fe(b.expirationTime <= D);
                                            if (D = s.unstable_now(),
                                                typeof ge == "function") {
                                                b.callback = ge,
                                                    ae(D),
                                                    Y = !0;
                                                break t
                                            }
                                            b === c(y) && r(y),
                                                ae(D)
                                        } else
                                            r(y);
                                        b = c(y)
                                    }
                                    if (b !== null)
                                        Y = !0;
                                    else {
                                        var S = c(g);
                                        S !== null && lt(re, S.startTime - D),
                                            Y = !1
                                    }
                                }
                                break e
                            } finally {
                                b = null,
                                    z = F,
                                    j = !1
                            }
                            Y = void 0
                        }
                    } finally {
                        Y ? Ie() : ye = !1
                    }
                }
            }
            var Ie;
            if (typeof k == "function")
                Ie = function () {
                    k(bt)
                }
                    ;
            else if (typeof MessageChannel < "u") {
                var Ve = new MessageChannel
                    , we = Ve.port2;
                Ve.port1.onmessage = bt,
                    Ie = function () {
                        we.postMessage(null)
                    }
            } else
                Ie = function () {
                    K(bt, 0)
                }
                    ;
            function lt(D, Y) {
                W = K(function () {
                    D(s.unstable_now())
                }, Y)
            }
            s.unstable_IdlePriority = 5,
                s.unstable_ImmediatePriority = 1,
                s.unstable_LowPriority = 4,
                s.unstable_NormalPriority = 3,
                s.unstable_Profiling = null,
                s.unstable_UserBlockingPriority = 2,
                s.unstable_cancelCallback = function (D) {
                    D.callback = null
                }
                ,
                s.unstable_forceFrameRate = function (D) {
                    0 > D || 125 < D ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Ae = 0 < D ? Math.floor(1e3 / D) : 5
                }
                ,
                s.unstable_getCurrentPriorityLevel = function () {
                    return z
                }
                ,
                s.unstable_next = function (D) {
                    switch (z) {
                        case 1:
                        case 2:
                        case 3:
                            var Y = 3;
                            break;
                        default:
                            Y = z
                    }
                    var F = z;
                    z = Y;
                    try {
                        return D()
                    } finally {
                        z = F
                    }
                }
                ,
                s.unstable_requestPaint = function () {
                    q = !0
                }
                ,
                s.unstable_runWithPriority = function (D, Y) {
                    switch (D) {
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                            break;
                        default:
                            D = 3
                    }
                    var F = z;
                    z = D;
                    try {
                        return Y()
                    } finally {
                        z = F
                    }
                }
                ,
                s.unstable_scheduleCallback = function (D, Y, F) {
                    var fe = s.unstable_now();
                    switch (typeof F == "object" && F !== null ? (F = F.delay,
                        F = typeof F == "number" && 0 < F ? fe + F : fe) : F = fe,
                    D) {
                        case 1:
                            var ge = -1;
                            break;
                        case 2:
                            ge = 250;
                            break;
                        case 5:
                            ge = 1073741823;
                            break;
                        case 4:
                            ge = 1e4;
                            break;
                        default:
                            ge = 5e3
                    }
                    return ge = F + ge,
                        D = {
                            id: T++,
                            callback: Y,
                            priorityLevel: D,
                            startTime: F,
                            expirationTime: ge,
                            sortIndex: -1
                        },
                        F > fe ? (D.sortIndex = F,
                            u(g, D),
                            c(y) === null && D === c(g) && (B ? (V(W),
                                W = -1) : B = !0,
                                lt(re, F - fe))) : (D.sortIndex = ge,
                                    u(y, D),
                                    H || j || (H = !0,
                                        ye || (ye = !0,
                                            Ie()))),
                        D
                }
                ,
                s.unstable_shouldYield = Re,
                s.unstable_wrapCallback = function (D) {
                    var Y = z;
                    return function () {
                        var F = z;
                        z = Y;
                        try {
                            return D.apply(this, arguments)
                        } finally {
                            z = F
                        }
                    }
                }
        }
        )(Wc)),
        Wc
}
var Vh;
function $0() {
    return Vh || (Vh = 1,
        $c.exports = F0()),
        $c.exports
}
var Ic = {
    exports: {}
}
    , Pe = {};
var Qh;
function W0() {
    if (Qh)
        return Pe;
    Qh = 1;
    var s = ir();
    function u(y) {
        var g = "https://react.dev/errors/" + y;
        if (1 < arguments.length) {
            g += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var T = 2; T < arguments.length; T++)
                g += "&args[]=" + encodeURIComponent(arguments[T])
        }
        return "Minified React error #" + y + "; visit " + g + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function c() { }
    var r = {
        d: {
            f: c,
            r: function () {
                throw Error(u(522))
            },
            D: c,
            C: c,
            L: c,
            m: c,
            X: c,
            S: c,
            M: c
        },
        p: 0,
        findDOMNode: null
    }
        , o = Symbol.for("react.portal");
    function d(y, g, T) {
        var b = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: o,
            key: b == null ? null : "" + b,
            children: y,
            containerInfo: g,
            implementation: T
        }
    }
    var h = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function p(y, g) {
        if (y === "font")
            return "";
        if (typeof g == "string")
            return g === "use-credentials" ? g : ""
    }
    return Pe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r,
        Pe.createPortal = function (y, g) {
            var T = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
            if (!g || g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11)
                throw Error(u(299));
            return d(y, g, null, T)
        }
        ,
        Pe.flushSync = function (y) {
            var g = h.T
                , T = r.p;
            try {
                if (h.T = null,
                    r.p = 2,
                    y)
                    return y()
            } finally {
                h.T = g,
                    r.p = T,
                    r.d.f()
            }
        }
        ,
        Pe.preconnect = function (y, g) {
            typeof y == "string" && (g ? (g = g.crossOrigin,
                g = typeof g == "string" ? g === "use-credentials" ? g : "" : void 0) : g = null,
                r.d.C(y, g))
        }
        ,
        Pe.prefetchDNS = function (y) {
            typeof y == "string" && r.d.D(y)
        }
        ,
        Pe.preinit = function (y, g) {
            if (typeof y == "string" && g && typeof g.as == "string") {
                var T = g.as
                    , b = p(T, g.crossOrigin)
                    , z = typeof g.integrity == "string" ? g.integrity : void 0
                    , j = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
                T === "style" ? r.d.S(y, typeof g.precedence == "string" ? g.precedence : void 0, {
                    crossOrigin: b,
                    integrity: z,
                    fetchPriority: j
                }) : T === "script" && r.d.X(y, {
                    crossOrigin: b,
                    integrity: z,
                    fetchPriority: j,
                    nonce: typeof g.nonce == "string" ? g.nonce : void 0
                })
            }
        }
        ,
        Pe.preinitModule = function (y, g) {
            if (typeof y == "string")
                if (typeof g == "object" && g !== null) {
                    if (g.as == null || g.as === "script") {
                        var T = p(g.as, g.crossOrigin);
                        r.d.M(y, {
                            crossOrigin: T,
                            integrity: typeof g.integrity == "string" ? g.integrity : void 0,
                            nonce: typeof g.nonce == "string" ? g.nonce : void 0
                        })
                    }
                } else
                    g == null && r.d.M(y)
        }
        ,
        Pe.preload = function (y, g) {
            if (typeof y == "string" && typeof g == "object" && g !== null && typeof g.as == "string") {
                var T = g.as
                    , b = p(T, g.crossOrigin);
                r.d.L(y, T, {
                    crossOrigin: b,
                    integrity: typeof g.integrity == "string" ? g.integrity : void 0,
                    nonce: typeof g.nonce == "string" ? g.nonce : void 0,
                    type: typeof g.type == "string" ? g.type : void 0,
                    fetchPriority: typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
                    referrerPolicy: typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
                    imageSrcSet: typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
                    imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0,
                    media: typeof g.media == "string" ? g.media : void 0
                })
            }
        }
        ,
        Pe.preloadModule = function (y, g) {
            if (typeof y == "string")
                if (g) {
                    var T = p(g.as, g.crossOrigin);
                    r.d.m(y, {
                        as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
                        crossOrigin: T,
                        integrity: typeof g.integrity == "string" ? g.integrity : void 0
                    })
                } else
                    r.d.m(y)
        }
        ,
        Pe.requestFormReset = function (y) {
            r.d.r(y)
        }
        ,
        Pe.unstable_batchedUpdates = function (y, g) {
            return y(g)
        }
        ,
        Pe.useFormState = function (y, g, T) {
            return h.H.useFormState(y, g, T)
        }
        ,
        Pe.useFormStatus = function () {
            return h.H.useHostTransitionStatus()
        }
        ,
        Pe.version = "19.2.3",
        Pe
}
var Xh;
function I0() {
    if (Xh)
        return Ic.exports;
    Xh = 1;
    function s() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)
            } catch (u) {
                console.error(u)
            }
    }
    return s(),
        Ic.exports = W0(),
        Ic.exports
}
var Kh;
function P0() {
    if (Kh)
        return Bn;
    Kh = 1;
    var s = $0()
        , u = ir()
        , c = I0();
    function r(e) {
        var t = "https://react.dev/errors/" + e;
        if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var l = 2; l < arguments.length; l++)
                t += "&args[]=" + encodeURIComponent(arguments[l])
        }
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function o(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
    }
    function d(e) {
        var t = e
            , l = e;
        if (e.alternate)
            for (; t.return;)
                t = t.return;
        else {
            e = t;
            do
                t = e,
                    (t.flags & 4098) !== 0 && (l = t.return),
                    e = t.return;
            while (e)
        }
        return t.tag === 3 ? l : null
    }
    function h(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate,
                e !== null && (t = e.memoizedState)),
                t !== null)
                return t.dehydrated
        }
        return null
    }
    function p(e) {
        if (e.tag === 31) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate,
                e !== null && (t = e.memoizedState)),
                t !== null)
                return t.dehydrated
        }
        return null
    }
    function y(e) {
        if (d(e) !== e)
            throw Error(r(188))
    }
    function g(e) {
        var t = e.alternate;
        if (!t) {
            if (t = d(e),
                t === null)
                throw Error(r(188));
            return t !== e ? null : e
        }
        for (var l = e, a = t; ;) {
            var n = l.return;
            if (n === null)
                break;
            var i = n.alternate;
            if (i === null) {
                if (a = n.return,
                    a !== null) {
                    l = a;
                    continue
                }
                break
            }
            if (n.child === i.child) {
                for (i = n.child; i;) {
                    if (i === l)
                        return y(n),
                            e;
                    if (i === a)
                        return y(n),
                            t;
                    i = i.sibling
                }
                throw Error(r(188))
            }
            if (l.return !== a.return)
                l = n,
                    a = i;
            else {
                for (var f = !1, m = n.child; m;) {
                    if (m === l) {
                        f = !0,
                            l = n,
                            a = i;
                        break
                    }
                    if (m === a) {
                        f = !0,
                            a = n,
                            l = i;
                        break
                    }
                    m = m.sibling
                }
                if (!f) {
                    for (m = i.child; m;) {
                        if (m === l) {
                            f = !0,
                                l = i,
                                a = n;
                            break
                        }
                        if (m === a) {
                            f = !0,
                                a = i,
                                l = n;
                            break
                        }
                        m = m.sibling
                    }
                    if (!f)
                        throw Error(r(189))
                }
            }
            if (l.alternate !== a)
                throw Error(r(190))
        }
        if (l.tag !== 3)
            throw Error(r(188));
        return l.stateNode.current === l ? e : t
    }
    function T(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6)
            return e;
        for (e = e.child; e !== null;) {
            if (t = T(e),
                t !== null)
                return t;
            e = e.sibling
        }
        return null
    }
    var b = Object.assign
        , z = Symbol.for("react.element")
        , j = Symbol.for("react.transitional.element")
        , H = Symbol.for("react.portal")
        , B = Symbol.for("react.fragment")
        , q = Symbol.for("react.strict_mode")
        , K = Symbol.for("react.profiler")
        , V = Symbol.for("react.consumer")
        , k = Symbol.for("react.context")
        , ae = Symbol.for("react.forward_ref")
        , re = Symbol.for("react.suspense")
        , ye = Symbol.for("react.suspense_list")
        , W = Symbol.for("react.memo")
        , Ae = Symbol.for("react.lazy")
        , Ne = Symbol.for("react.activity")
        , Re = Symbol.for("react.memo_cache_sentinel")
        , bt = Symbol.iterator;
    function Ie(e) {
        return e === null || typeof e != "object" ? null : (e = bt && e[bt] || e["@@iterator"],
            typeof e == "function" ? e : null)
    }
    var Ve = Symbol.for("react.client.reference");
    function we(e) {
        if (e == null)
            return null;
        if (typeof e == "function")
            return e.$$typeof === Ve ? null : e.displayName || e.name || null;
        if (typeof e == "string")
            return e;
        switch (e) {
            case B:
                return "Fragment";
            case K:
                return "Profiler";
            case q:
                return "StrictMode";
            case re:
                return "Suspense";
            case ye:
                return "SuspenseList";
            case Ne:
                return "Activity"
        }
        if (typeof e == "object")
            switch (e.$$typeof) {
                case H:
                    return "Portal";
                case k:
                    return e.displayName || "Context";
                case V:
                    return (e._context.displayName || "Context") + ".Consumer";
                case ae:
                    var t = e.render;
                    return e = e.displayName,
                        e || (e = t.displayName || t.name || "",
                            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
                        e;
                case W:
                    return t = e.displayName || null,
                        t !== null ? t : we(e.type) || "Memo";
                case Ae:
                    t = e._payload,
                        e = e._init;
                    try {
                        return we(e(t))
                    } catch { }
            }
        return null
    }
    var lt = Array.isArray
        , D = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
        , Y = c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
        , F = {
            pending: !1,
            data: null,
            method: null,
            action: null
        }
        , fe = []
        , ge = -1;
    function S(e) {
        return {
            current: e
        }
    }
    function _(e) {
        0 > ge || (e.current = fe[ge],
            fe[ge] = null,
            ge--)
    }
    function G(e, t) {
        ge++,
            fe[ge] = e.current,
            e.current = t
    }
    var Q = S(null)
        , ee = S(null)
        , ne = S(null)
        , pe = S(null);
    function et(e, t) {
        switch (G(ne, t),
        G(ee, e),
        G(Q, null),
        t.nodeType) {
            case 9:
            case 11:
                e = (e = t.documentElement) && (e = e.namespaceURI) ? Hd(e) : 0;
                break;
            default:
                if (e = t.tagName,
                    t = t.namespaceURI)
                    t = Hd(t),
                        e = Bd(t, e);
                else
                    switch (e) {
                        case "svg":
                            e = 1;
                            break;
                        case "math":
                            e = 2;
                            break;
                        default:
                            e = 0
                    }
        }
        _(Q),
            G(Q, e)
    }
    function Me() {
        _(Q),
            _(ee),
            _(ne)
    }
    function Va(e) {
        e.memoizedState !== null && G(pe, e);
        var t = Q.current
            , l = Bd(t, e.type);
        t !== l && (G(ee, e),
            G(Q, l))
    }
    function Fn(e) {
        ee.current === e && (_(Q),
            _(ee)),
            pe.current === e && (_(pe),
                wn._currentValue = F)
    }
    var Au, fr;
    function Ul(e) {
        if (Au === void 0)
            try {
                throw Error()
            } catch (l) {
                var t = l.stack.trim().match(/\n( *(at )?)/);
                Au = t && t[1] || "",
                    fr = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : ""
            }
        return `
` + Au + e + fr
    }
    var zu = !1;
    function Ru(e, t) {
        if (!e || zu)
            return "";
        zu = !0;
        var l = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var a = {
                DetermineComponentFrameRoot: function () {
                    try {
                        if (t) {
                            var L = function () {
                                throw Error()
                            };
                            if (Object.defineProperty(L.prototype, "props", {
                                set: function () {
                                    throw Error()
                                }
                            }),
                                typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(L, [])
                                } catch (R) {
                                    var A = R
                                }
                                Reflect.construct(e, [], L)
                            } else {
                                try {
                                    L.call()
                                } catch (R) {
                                    A = R
                                }
                                e.call(L.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (R) {
                                A = R
                            }
                            (L = e()) && typeof L.catch == "function" && L.catch(function () { })
                        }
                    } catch (R) {
                        if (R && A && typeof R.stack == "string")
                            return [R.stack, A.stack]
                    }
                    return [null, null]
                }
            };
            a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var n = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
            n && n.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var i = a.DetermineComponentFrameRoot()
                , f = i[0]
                , m = i[1];
            if (f && m) {
                var x = f.split(`
`)
                    , O = m.split(`
`);
                for (n = a = 0; a < x.length && !x[a].includes("DetermineComponentFrameRoot");)
                    a++;
                for (; n < O.length && !O[n].includes("DetermineComponentFrameRoot");)
                    n++;
                if (a === x.length || n === O.length)
                    for (a = x.length - 1,
                        n = O.length - 1; 1 <= a && 0 <= n && x[a] !== O[n];)
                        n--;
                for (; 1 <= a && 0 <= n; a--,
                    n--)
                    if (x[a] !== O[n]) {
                        if (a !== 1 || n !== 1)
                            do
                                if (a--,
                                    n--,
                                    0 > n || x[a] !== O[n]) {
                                    var w = `
` + x[a].replace(" at new ", " at ");
                                    return e.displayName && w.includes("<anonymous>") && (w = w.replace("<anonymous>", e.displayName)),
                                        w
                                }
                            while (1 <= a && 0 <= n);
                        break
                    }
            }
        } finally {
            zu = !1,
                Error.prepareStackTrace = l
        }
        return (l = e ? e.displayName || e.name : "") ? Ul(l) : ""
    }
    function zm(e, t) {
        switch (e.tag) {
            case 26:
            case 27:
            case 5:
                return Ul(e.type);
            case 16:
                return Ul("Lazy");
            case 13:
                return e.child !== t && t !== null ? Ul("Suspense Fallback") : Ul("Suspense");
            case 19:
                return Ul("SuspenseList");
            case 0:
            case 15:
                return Ru(e.type, !1);
            case 11:
                return Ru(e.type.render, !1);
            case 1:
                return Ru(e.type, !0);
            case 31:
                return Ul("Activity");
            default:
                return ""
        }
    }
    function dr(e) {
        try {
            var t = ""
                , l = null;
            do
                t += zm(e, l),
                    l = e,
                    e = e.return;
            while (e);
            return t
        } catch (a) {
            return `
Error generating stack: ` + a.message + `
` + a.stack
        }
    }
    var ju = Object.prototype.hasOwnProperty
        , Du = s.unstable_scheduleCallback
        , wu = s.unstable_cancelCallback
        , Rm = s.unstable_shouldYield
        , jm = s.unstable_requestPaint
        , ot = s.unstable_now
        , Dm = s.unstable_getCurrentPriorityLevel
        , hr = s.unstable_ImmediatePriority
        , mr = s.unstable_UserBlockingPriority
        , $n = s.unstable_NormalPriority
        , wm = s.unstable_LowPriority
        , gr = s.unstable_IdlePriority
        , Mm = s.log
        , _m = s.unstable_setDisableYieldValue
        , Qa = null
        , ft = null;
    function rl(e) {
        if (typeof Mm == "function" && _m(e),
            ft && typeof ft.setStrictMode == "function")
            try {
                ft.setStrictMode(Qa, e)
            } catch { }
    }
    var dt = Math.clz32 ? Math.clz32 : Hm
        , Um = Math.log
        , Lm = Math.LN2;
    function Hm(e) {
        return e >>>= 0,
            e === 0 ? 32 : 31 - (Um(e) / Lm | 0) | 0
    }
    var Wn = 256
        , In = 262144
        , Pn = 4194304;
    function Ll(e) {
        var t = e & 42;
        if (t !== 0)
            return t;
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
                return 64;
            case 128:
                return 128;
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
                return e & 261888;
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return e & 3932160;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return e & 62914560;
            case 67108864:
                return 67108864;
            case 134217728:
                return 134217728;
            case 268435456:
                return 268435456;
            case 536870912:
                return 536870912;
            case 1073741824:
                return 0;
            default:
                return e
        }
    }
    function ei(e, t, l) {
        var a = e.pendingLanes;
        if (a === 0)
            return 0;
        var n = 0
            , i = e.suspendedLanes
            , f = e.pingedLanes;
        e = e.warmLanes;
        var m = a & 134217727;
        return m !== 0 ? (a = m & ~i,
            a !== 0 ? n = Ll(a) : (f &= m,
                f !== 0 ? n = Ll(f) : l || (l = m & ~e,
                    l !== 0 && (n = Ll(l))))) : (m = a & ~i,
                        m !== 0 ? n = Ll(m) : f !== 0 ? n = Ll(f) : l || (l = a & ~e,
                            l !== 0 && (n = Ll(l)))),
            n === 0 ? 0 : t !== 0 && t !== n && (t & i) === 0 && (i = n & -n,
                l = t & -t,
                i >= l || i === 32 && (l & 4194048) !== 0) ? t : n
    }
    function Xa(e, t) {
        return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0
    }
    function Bm(e, t) {
        switch (e) {
            case 1:
            case 2:
            case 4:
            case 8:
            case 64:
                return t + 250;
            case 16:
            case 32:
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
                return -1;
            case 67108864:
            case 134217728:
            case 268435456:
            case 536870912:
            case 1073741824:
                return -1;
            default:
                return -1
        }
    }
    function pr() {
        var e = Pn;
        return Pn <<= 1,
            (Pn & 62914560) === 0 && (Pn = 4194304),
            e
    }
    function Mu(e) {
        for (var t = [], l = 0; 31 > l; l++)
            t.push(e);
        return t
    }
    function Ka(e, t) {
        e.pendingLanes |= t,
            t !== 268435456 && (e.suspendedLanes = 0,
                e.pingedLanes = 0,
                e.warmLanes = 0)
    }
    function qm(e, t, l, a, n, i) {
        var f = e.pendingLanes;
        e.pendingLanes = l,
            e.suspendedLanes = 0,
            e.pingedLanes = 0,
            e.warmLanes = 0,
            e.expiredLanes &= l,
            e.entangledLanes &= l,
            e.errorRecoveryDisabledLanes &= l,
            e.shellSuspendCounter = 0;
        var m = e.entanglements
            , x = e.expirationTimes
            , O = e.hiddenUpdates;
        for (l = f & ~l; 0 < l;) {
            var w = 31 - dt(l)
                , L = 1 << w;
            m[w] = 0,
                x[w] = -1;
            var A = O[w];
            if (A !== null)
                for (O[w] = null,
                    w = 0; w < A.length; w++) {
                    var R = A[w];
                    R !== null && (R.lane &= -536870913)
                }
            l &= ~L
        }
        a !== 0 && yr(e, a, 0),
            i !== 0 && n === 0 && e.tag !== 0 && (e.suspendedLanes |= i & ~(f & ~t))
    }
    function yr(e, t, l) {
        e.pendingLanes |= t,
            e.suspendedLanes &= ~t;
        var a = 31 - dt(t);
        e.entangledLanes |= t,
            e.entanglements[a] = e.entanglements[a] | 1073741824 | l & 261930
    }
    function vr(e, t) {
        var l = e.entangledLanes |= t;
        for (e = e.entanglements; l;) {
            var a = 31 - dt(l)
                , n = 1 << a;
            n & t | e[a] & t && (e[a] |= t),
                l &= ~n
        }
    }
    function xr(e, t) {
        var l = t & -t;
        return l = (l & 42) !== 0 ? 1 : _u(l),
            (l & (e.suspendedLanes | t)) !== 0 ? 0 : l
    }
    function _u(e) {
        switch (e) {
            case 2:
                e = 1;
                break;
            case 8:
                e = 4;
                break;
            case 32:
                e = 16;
                break;
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
                e = 128;
                break;
            case 268435456:
                e = 134217728;
                break;
            default:
                e = 0
        }
        return e
    }
    function Uu(e) {
        return e &= -e,
            2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }
    function br() {
        var e = Y.p;
        return e !== 0 ? e : (e = window.event,
            e === void 0 ? 32 : sh(e.type))
    }
    function Sr(e, t) {
        var l = Y.p;
        try {
            return Y.p = e,
                t()
        } finally {
            Y.p = l
        }
    }
    var ol = Math.random().toString(36).slice(2)
        , Ze = "__reactFiber$" + ol
        , at = "__reactProps$" + ol
        , ea = "__reactContainer$" + ol
        , Lu = "__reactEvents$" + ol
        , Ym = "__reactListeners$" + ol
        , Gm = "__reactHandles$" + ol
        , Er = "__reactResources$" + ol
        , Za = "__reactMarker$" + ol;
    function Hu(e) {
        delete e[Ze],
            delete e[at],
            delete e[Lu],
            delete e[Ym],
            delete e[Gm]
    }
    function ta(e) {
        var t = e[Ze];
        if (t)
            return t;
        for (var l = e.parentNode; l;) {
            if (t = l[ea] || l[Ze]) {
                if (l = t.alternate,
                    t.child !== null || l !== null && l.child !== null)
                    for (e = Kd(e); e !== null;) {
                        if (l = e[Ze])
                            return l;
                        e = Kd(e)
                    }
                return t
            }
            e = l,
                l = e.parentNode
        }
        return null
    }
    function la(e) {
        if (e = e[Ze] || e[ea]) {
            var t = e.tag;
            if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
                return e
        }
        return null
    }
    function ka(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6)
            return e.stateNode;
        throw Error(r(33))
    }
    function aa(e) {
        var t = e[Er];
        return t || (t = e[Er] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }),
            t
    }
    function Qe(e) {
        e[Za] = !0
    }
    var Tr = new Set
        , Nr = {};
    function Hl(e, t) {
        na(e, t),
            na(e + "Capture", t)
    }
    function na(e, t) {
        for (Nr[e] = t,
            e = 0; e < t.length; e++)
            Tr.add(t[e])
    }
    var Vm = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")
        , Cr = {}
        , Or = {};
    function Qm(e) {
        return ju.call(Or, e) ? !0 : ju.call(Cr, e) ? !1 : Vm.test(e) ? Or[e] = !0 : (Cr[e] = !0,
            !1)
    }
    function ti(e, t, l) {
        if (Qm(t))
            if (l === null)
                e.removeAttribute(t);
            else {
                switch (typeof l) {
                    case "undefined":
                    case "function":
                    case "symbol":
                        e.removeAttribute(t);
                        return;
                    case "boolean":
                        var a = t.toLowerCase().slice(0, 5);
                        if (a !== "data-" && a !== "aria-") {
                            e.removeAttribute(t);
                            return
                        }
                }
                e.setAttribute(t, "" + l)
            }
    }
    function li(e, t, l) {
        if (l === null)
            e.removeAttribute(t);
        else {
            switch (typeof l) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    e.removeAttribute(t);
                    return
            }
            e.setAttribute(t, "" + l)
        }
    }
    function Vt(e, t, l, a) {
        if (a === null)
            e.removeAttribute(l);
        else {
            switch (typeof a) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    e.removeAttribute(l);
                    return
            }
            e.setAttributeNS(t, l, "" + a)
        }
    }
    function St(e) {
        switch (typeof e) {
            case "bigint":
            case "boolean":
            case "number":
            case "string":
            case "undefined":
                return e;
            case "object":
                return e;
            default:
                return ""
        }
    }
    function Ar(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
    }
    function Xm(e, t, l) {
        var a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
        if (!e.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
            var n = a.get
                , i = a.set;
            return Object.defineProperty(e, t, {
                configurable: !0,
                get: function () {
                    return n.call(this)
                },
                set: function (f) {
                    l = "" + f,
                        i.call(this, f)
                }
            }),
                Object.defineProperty(e, t, {
                    enumerable: a.enumerable
                }),
            {
                getValue: function () {
                    return l
                },
                setValue: function (f) {
                    l = "" + f
                },
                stopTracking: function () {
                    e._valueTracker = null,
                        delete e[t]
                }
            }
        }
    }
    function Bu(e) {
        if (!e._valueTracker) {
            var t = Ar(e) ? "checked" : "value";
            e._valueTracker = Xm(e, t, "" + e[t])
        }
    }
    function zr(e) {
        if (!e)
            return !1;
        var t = e._valueTracker;
        if (!t)
            return !0;
        var l = t.getValue()
            , a = "";
        return e && (a = Ar(e) ? e.checked ? "true" : "false" : e.value),
            e = a,
            e !== l ? (t.setValue(e),
                !0) : !1
    }
    function ai(e) {
        if (e = e || (typeof document < "u" ? document : void 0),
            typeof e > "u")
            return null;
        try {
            return e.activeElement || e.body
        } catch {
            return e.body
        }
    }
    var Km = /[\n"\\]/g;
    function Et(e) {
        return e.replace(Km, function (t) {
            return "\\" + t.charCodeAt(0).toString(16) + " "
        })
    }
    function qu(e, t, l, a, n, i, f, m) {
        e.name = "",
            f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? e.type = f : e.removeAttribute("type"),
            t != null ? f === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + St(t)) : e.value !== "" + St(t) && (e.value = "" + St(t)) : f !== "submit" && f !== "reset" || e.removeAttribute("value"),
            t != null ? Yu(e, f, St(t)) : l != null ? Yu(e, f, St(l)) : a != null && e.removeAttribute("value"),
            n == null && i != null && (e.defaultChecked = !!i),
            n != null && (e.checked = n && typeof n != "function" && typeof n != "symbol"),
            m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? e.name = "" + St(m) : e.removeAttribute("name")
    }
    function Rr(e, t, l, a, n, i, f, m) {
        if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (e.type = i),
            t != null || l != null) {
            if (!(i !== "submit" && i !== "reset" || t != null)) {
                Bu(e);
                return
            }
            l = l != null ? "" + St(l) : "",
                t = t != null ? "" + St(t) : l,
                m || t === e.value || (e.value = t),
                e.defaultValue = t
        }
        a = a ?? n,
            a = typeof a != "function" && typeof a != "symbol" && !!a,
            e.checked = m ? e.checked : !!a,
            e.defaultChecked = !!a,
            f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (e.name = f),
            Bu(e)
    }
    function Yu(e, t, l) {
        t === "number" && ai(e.ownerDocument) === e || e.defaultValue === "" + l || (e.defaultValue = "" + l)
    }
    function ia(e, t, l, a) {
        if (e = e.options,
            t) {
            t = {};
            for (var n = 0; n < l.length; n++)
                t["$" + l[n]] = !0;
            for (l = 0; l < e.length; l++)
                n = t.hasOwnProperty("$" + e[l].value),
                    e[l].selected !== n && (e[l].selected = n),
                    n && a && (e[l].defaultSelected = !0)
        } else {
            for (l = "" + St(l),
                t = null,
                n = 0; n < e.length; n++) {
                if (e[n].value === l) {
                    e[n].selected = !0,
                        a && (e[n].defaultSelected = !0);
                    return
                }
                t !== null || e[n].disabled || (t = e[n])
            }
            t !== null && (t.selected = !0)
        }
    }
    function jr(e, t, l) {
        if (t != null && (t = "" + St(t),
            t !== e.value && (e.value = t),
            l == null)) {
            e.defaultValue !== t && (e.defaultValue = t);
            return
        }
        e.defaultValue = l != null ? "" + St(l) : ""
    }
    function Dr(e, t, l, a) {
        if (t == null) {
            if (a != null) {
                if (l != null)
                    throw Error(r(92));
                if (lt(a)) {
                    if (1 < a.length)
                        throw Error(r(93));
                    a = a[0]
                }
                l = a
            }
            l == null && (l = ""),
                t = l
        }
        l = St(t),
            e.defaultValue = l,
            a = e.textContent,
            a === l && a !== "" && a !== null && (e.value = a),
            Bu(e)
    }
    function ua(e, t) {
        if (t) {
            var l = e.firstChild;
            if (l && l === e.lastChild && l.nodeType === 3) {
                l.nodeValue = t;
                return
            }
        }
        e.textContent = t
    }
    var Zm = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function wr(e, t, l) {
        var a = t.indexOf("--") === 0;
        l == null || typeof l == "boolean" || l === "" ? a ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : a ? e.setProperty(t, l) : typeof l != "number" || l === 0 || Zm.has(t) ? t === "float" ? e.cssFloat = l : e[t] = ("" + l).trim() : e[t] = l + "px"
    }
    function Mr(e, t, l) {
        if (t != null && typeof t != "object")
            throw Error(r(62));
        if (e = e.style,
            l != null) {
            for (var a in l)
                !l.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? e.setProperty(a, "") : a === "float" ? e.cssFloat = "" : e[a] = "");
            for (var n in t)
                a = t[n],
                    t.hasOwnProperty(n) && l[n] !== a && wr(e, n, a)
        } else
            for (var i in t)
                t.hasOwnProperty(i) && wr(e, i, t[i])
    }
    function Gu(e) {
        if (e.indexOf("-") === -1)
            return !1;
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
                return !0
        }
    }
    var km = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]])
        , Jm = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function ni(e) {
        return Jm.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e
    }
    function Qt() { }
    var Vu = null;
    function Qu(e) {
        return e = e.target || e.srcElement || window,
            e.correspondingUseElement && (e = e.correspondingUseElement),
            e.nodeType === 3 ? e.parentNode : e
    }
    var sa = null
        , ca = null;
    function _r(e) {
        var t = la(e);
        if (t && (e = t.stateNode)) {
            var l = e[at] || null;
            e: switch (e = t.stateNode,
            t.type) {
                case "input":
                    if (qu(e, l.value, l.defaultValue, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name),
                        t = l.name,
                        l.type === "radio" && t != null) {
                        for (l = e; l.parentNode;)
                            l = l.parentNode;
                        for (l = l.querySelectorAll('input[name="' + Et("" + t) + '"][type="radio"]'),
                            t = 0; t < l.length; t++) {
                            var a = l[t];
                            if (a !== e && a.form === e.form) {
                                var n = a[at] || null;
                                if (!n)
                                    throw Error(r(90));
                                qu(a, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name)
                            }
                        }
                        for (t = 0; t < l.length; t++)
                            a = l[t],
                                a.form === e.form && zr(a)
                    }
                    break e;
                case "textarea":
                    jr(e, l.value, l.defaultValue);
                    break e;
                case "select":
                    t = l.value,
                        t != null && ia(e, !!l.multiple, t, !1)
            }
        }
    }
    var Xu = !1;
    function Ur(e, t, l) {
        if (Xu)
            return e(t, l);
        Xu = !0;
        try {
            var a = e(t);
            return a
        } finally {
            if (Xu = !1,
                (sa !== null || ca !== null) && (Ki(),
                    sa && (t = sa,
                        e = ca,
                        ca = sa = null,
                        _r(t),
                        e)))
                for (t = 0; t < e.length; t++)
                    _r(e[t])
        }
    }
    function Ja(e, t) {
        var l = e.stateNode;
        if (l === null)
            return null;
        var a = l[at] || null;
        if (a === null)
            return null;
        l = a[t];
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
                (a = !a.disabled) || (e = e.type,
                    a = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
                    e = !a;
                break e;
            default:
                e = !1
        }
        if (e)
            return null;
        if (l && typeof l != "function")
            throw Error(r(231, t, typeof l));
        return l
    }
    var Xt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
        , Ku = !1;
    if (Xt)
        try {
            var Fa = {};
            Object.defineProperty(Fa, "passive", {
                get: function () {
                    Ku = !0
                }
            }),
                window.addEventListener("test", Fa, Fa),
                window.removeEventListener("test", Fa, Fa)
        } catch {
            Ku = !1
        }
    var fl = null
        , Zu = null
        , ii = null;
    function Lr() {
        if (ii)
            return ii;
        var e, t = Zu, l = t.length, a, n = "value" in fl ? fl.value : fl.textContent, i = n.length;
        for (e = 0; e < l && t[e] === n[e]; e++)
            ;
        var f = l - e;
        for (a = 1; a <= f && t[l - a] === n[i - a]; a++)
            ;
        return ii = n.slice(e, 1 < a ? 1 - a : void 0)
    }
    function ui(e) {
        var t = e.keyCode;
        return "charCode" in e ? (e = e.charCode,
            e === 0 && t === 13 && (e = 13)) : e = t,
            e === 10 && (e = 13),
            32 <= e || e === 13 ? e : 0
    }
    function si() {
        return !0
    }
    function Hr() {
        return !1
    }
    function nt(e) {
        function t(l, a, n, i, f) {
            this._reactName = l,
                this._targetInst = n,
                this.type = a,
                this.nativeEvent = i,
                this.target = f,
                this.currentTarget = null;
            for (var m in e)
                e.hasOwnProperty(m) && (l = e[m],
                    this[m] = l ? l(i) : i[m]);
            return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? si : Hr,
                this.isPropagationStopped = Hr,
                this
        }
        return b(t.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0;
                var l = this.nativeEvent;
                l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1),
                    this.isDefaultPrevented = si)
            },
            stopPropagation: function () {
                var l = this.nativeEvent;
                l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0),
                    this.isPropagationStopped = si)
            },
            persist: function () { },
            isPersistent: si
        }),
            t
    }
    var Bl = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, ci = nt(Bl), $a = b({}, Bl, {
        view: 0,
        detail: 0
    }), Fm = nt($a), ku, Ju, Wa, ri = b({}, $a, {
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
        getModifierState: $u,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function (e) {
            return "movementX" in e ? e.movementX : (e !== Wa && (Wa && e.type === "mousemove" ? (ku = e.screenX - Wa.screenX,
                Ju = e.screenY - Wa.screenY) : Ju = ku = 0,
                Wa = e),
                ku)
        },
        movementY: function (e) {
            return "movementY" in e ? e.movementY : Ju
        }
    }), Br = nt(ri), $m = b({}, ri, {
        dataTransfer: 0
    }), Wm = nt($m), Im = b({}, $a, {
        relatedTarget: 0
    }), Fu = nt(Im), Pm = b({}, Bl, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), eg = nt(Pm), tg = b({}, Bl, {
        clipboardData: function (e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }), lg = nt(tg), ag = b({}, Bl, {
        data: 0
    }), qr = nt(ag), ng = {
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
        MozPrintableKey: "Unidentified"
    }, ig = {
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
        224: "Meta"
    }, ug = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function sg(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = ug[e]) ? !!t[e] : !1
    }
    function $u() {
        return sg
    }
    var cg = b({}, $a, {
        key: function (e) {
            if (e.key) {
                var t = ng[e.key] || e.key;
                if (t !== "Unidentified")
                    return t
            }
            return e.type === "keypress" ? (e = ui(e),
                e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? ig[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: $u,
        charCode: function (e) {
            return e.type === "keypress" ? ui(e) : 0
        },
        keyCode: function (e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function (e) {
            return e.type === "keypress" ? ui(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    })
        , rg = nt(cg)
        , og = b({}, ri, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0
        })
        , Yr = nt(og)
        , fg = b({}, $a, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: $u
        })
        , dg = nt(fg)
        , hg = b({}, Bl, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        })
        , mg = nt(hg)
        , gg = b({}, ri, {
            deltaX: function (e) {
                return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
            },
            deltaY: function (e) {
                return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
            },
            deltaZ: 0,
            deltaMode: 0
        })
        , pg = nt(gg)
        , yg = b({}, Bl, {
            newState: 0,
            oldState: 0
        })
        , vg = nt(yg)
        , xg = [9, 13, 27, 32]
        , Wu = Xt && "CompositionEvent" in window
        , Ia = null;
    Xt && "documentMode" in document && (Ia = document.documentMode);
    var bg = Xt && "TextEvent" in window && !Ia
        , Gr = Xt && (!Wu || Ia && 8 < Ia && 11 >= Ia)
        , Vr = " "
        , Qr = !1;
    function Xr(e, t) {
        switch (e) {
            case "keyup":
                return xg.indexOf(t.keyCode) !== -1;
            case "keydown":
                return t.keyCode !== 229;
            case "keypress":
            case "mousedown":
            case "focusout":
                return !0;
            default:
                return !1
        }
    }
    function Kr(e) {
        return e = e.detail,
            typeof e == "object" && "data" in e ? e.data : null
    }
    var ra = !1;
    function Sg(e, t) {
        switch (e) {
            case "compositionend":
                return Kr(t);
            case "keypress":
                return t.which !== 32 ? null : (Qr = !0,
                    Vr);
            case "textInput":
                return e = t.data,
                    e === Vr && Qr ? null : e;
            default:
                return null
        }
    }
    function Eg(e, t) {
        if (ra)
            return e === "compositionend" || !Wu && Xr(e, t) ? (e = Lr(),
                ii = Zu = fl = null,
                ra = !1,
                e) : null;
        switch (e) {
            case "paste":
                return null;
            case "keypress":
                if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                    if (t.char && 1 < t.char.length)
                        return t.char;
                    if (t.which)
                        return String.fromCharCode(t.which)
                }
                return null;
            case "compositionend":
                return Gr && t.locale !== "ko" ? null : t.data;
            default:
                return null
        }
    }
    var Tg = {
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
        week: !0
    };
    function Zr(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!Tg[e.type] : t === "textarea"
    }
    function kr(e, t, l, a) {
        sa ? ca ? ca.push(a) : ca = [a] : sa = a,
            t = Ii(t, "onChange"),
            0 < t.length && (l = new ci("onChange", "change", null, l, a),
                e.push({
                    event: l,
                    listeners: t
                }))
    }
    var Pa = null
        , en = null;
    function Ng(e) {
        Dd(e, 0)
    }
    function oi(e) {
        var t = ka(e);
        if (zr(t))
            return e
    }
    function Jr(e, t) {
        if (e === "change")
            return t
    }
    var Fr = !1;
    if (Xt) {
        var Iu;
        if (Xt) {
            var Pu = "oninput" in document;
            if (!Pu) {
                var $r = document.createElement("div");
                $r.setAttribute("oninput", "return;"),
                    Pu = typeof $r.oninput == "function"
            }
            Iu = Pu
        } else
            Iu = !1;
        Fr = Iu && (!document.documentMode || 9 < document.documentMode)
    }
    function Wr() {
        Pa && (Pa.detachEvent("onpropertychange", Ir),
            en = Pa = null)
    }
    function Ir(e) {
        if (e.propertyName === "value" && oi(en)) {
            var t = [];
            kr(t, en, e, Qu(e)),
                Ur(Ng, t)
        }
    }
    function Cg(e, t, l) {
        e === "focusin" ? (Wr(),
            Pa = t,
            en = l,
            Pa.attachEvent("onpropertychange", Ir)) : e === "focusout" && Wr()
    }
    function Og(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown")
            return oi(en)
    }
    function Ag(e, t) {
        if (e === "click")
            return oi(t)
    }
    function zg(e, t) {
        if (e === "input" || e === "change")
            return oi(t)
    }
    function Rg(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
    }
    var ht = typeof Object.is == "function" ? Object.is : Rg;
    function tn(e, t) {
        if (ht(e, t))
            return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null)
            return !1;
        var l = Object.keys(e)
            , a = Object.keys(t);
        if (l.length !== a.length)
            return !1;
        for (a = 0; a < l.length; a++) {
            var n = l[a];
            if (!ju.call(t, n) || !ht(e[n], t[n]))
                return !1
        }
        return !0
    }
    function Pr(e) {
        for (; e && e.firstChild;)
            e = e.firstChild;
        return e
    }
    function eo(e, t) {
        var l = Pr(e);
        e = 0;
        for (var a; l;) {
            if (l.nodeType === 3) {
                if (a = e + l.textContent.length,
                    e <= t && a >= t)
                    return {
                        node: l,
                        offset: t - e
                    };
                e = a
            }
            e: {
                for (; l;) {
                    if (l.nextSibling) {
                        l = l.nextSibling;
                        break e
                    }
                    l = l.parentNode
                }
                l = void 0
            }
            l = Pr(l)
        }
    }
    function to(e, t) {
        return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? to(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
    }
    function lo(e) {
        e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
        for (var t = ai(e.document); t instanceof e.HTMLIFrameElement;) {
            try {
                var l = typeof t.contentWindow.location.href == "string"
            } catch {
                l = !1
            }
            if (l)
                e = t.contentWindow;
            else
                break;
            t = ai(e.document)
        }
        return t
    }
    function es(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
    }
    var jg = Xt && "documentMode" in document && 11 >= document.documentMode
        , oa = null
        , ts = null
        , ln = null
        , ls = !1;
    function ao(e, t, l) {
        var a = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
        ls || oa == null || oa !== ai(a) || (a = oa,
            "selectionStart" in a && es(a) ? a = {
                start: a.selectionStart,
                end: a.selectionEnd
            } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(),
                a = {
                    anchorNode: a.anchorNode,
                    anchorOffset: a.anchorOffset,
                    focusNode: a.focusNode,
                    focusOffset: a.focusOffset
                }),
            ln && tn(ln, a) || (ln = a,
                a = Ii(ts, "onSelect"),
                0 < a.length && (t = new ci("onSelect", "select", null, t, l),
                    e.push({
                        event: t,
                        listeners: a
                    }),
                    t.target = oa)))
    }
    function ql(e, t) {
        var l = {};
        return l[e.toLowerCase()] = t.toLowerCase(),
            l["Webkit" + e] = "webkit" + t,
            l["Moz" + e] = "moz" + t,
            l
    }
    var fa = {
        animationend: ql("Animation", "AnimationEnd"),
        animationiteration: ql("Animation", "AnimationIteration"),
        animationstart: ql("Animation", "AnimationStart"),
        transitionrun: ql("Transition", "TransitionRun"),
        transitionstart: ql("Transition", "TransitionStart"),
        transitioncancel: ql("Transition", "TransitionCancel"),
        transitionend: ql("Transition", "TransitionEnd")
    }
        , as = {}
        , no = {};
    Xt && (no = document.createElement("div").style,
        "AnimationEvent" in window || (delete fa.animationend.animation,
            delete fa.animationiteration.animation,
            delete fa.animationstart.animation),
        "TransitionEvent" in window || delete fa.transitionend.transition);
    function Yl(e) {
        if (as[e])
            return as[e];
        if (!fa[e])
            return e;
        var t = fa[e], l;
        for (l in t)
            if (t.hasOwnProperty(l) && l in no)
                return as[e] = t[l];
        return e
    }
    var io = Yl("animationend")
        , uo = Yl("animationiteration")
        , so = Yl("animationstart")
        , Dg = Yl("transitionrun")
        , wg = Yl("transitionstart")
        , Mg = Yl("transitioncancel")
        , co = Yl("transitionend")
        , ro = new Map
        , ns = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    ns.push("scrollEnd");
    function wt(e, t) {
        ro.set(e, t),
            Hl(t, [e])
    }
    var fi = typeof reportError == "function" ? reportError : function (e) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
                error: e
            });
            if (!window.dispatchEvent(t))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", e);
            return
        }
        console.error(e)
    }
        , Tt = []
        , da = 0
        , is = 0;
    function di() {
        for (var e = da, t = is = da = 0; t < e;) {
            var l = Tt[t];
            Tt[t++] = null;
            var a = Tt[t];
            Tt[t++] = null;
            var n = Tt[t];
            Tt[t++] = null;
            var i = Tt[t];
            if (Tt[t++] = null,
                a !== null && n !== null) {
                var f = a.pending;
                f === null ? n.next = n : (n.next = f.next,
                    f.next = n),
                    a.pending = n
            }
            i !== 0 && oo(l, n, i)
        }
    }
    function hi(e, t, l, a) {
        Tt[da++] = e,
            Tt[da++] = t,
            Tt[da++] = l,
            Tt[da++] = a,
            is |= a,
            e.lanes |= a,
            e = e.alternate,
            e !== null && (e.lanes |= a)
    }
    function us(e, t, l, a) {
        return hi(e, t, l, a),
            mi(e)
    }
    function Gl(e, t) {
        return hi(e, null, null, t),
            mi(e)
    }
    function oo(e, t, l) {
        e.lanes |= l;
        var a = e.alternate;
        a !== null && (a.lanes |= l);
        for (var n = !1, i = e.return; i !== null;)
            i.childLanes |= l,
                a = i.alternate,
                a !== null && (a.childLanes |= l),
                i.tag === 22 && (e = i.stateNode,
                    e === null || e._visibility & 1 || (n = !0)),
                e = i,
                i = i.return;
        return e.tag === 3 ? (i = e.stateNode,
            n && t !== null && (n = 31 - dt(l),
                e = i.hiddenUpdates,
                a = e[n],
                a === null ? e[n] = [t] : a.push(t),
                t.lane = l | 536870912),
            i) : null
    }
    function mi(e) {
        if (50 < Cn)
            throw Cn = 0,
            gc = null,
            Error(r(185));
        for (var t = e.return; t !== null;)
            e = t,
                t = e.return;
        return e.tag === 3 ? e.stateNode : null
    }
    var ha = {};
    function _g(e, t, l, a) {
        this.tag = e,
            this.key = l,
            this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
            this.index = 0,
            this.refCleanup = this.ref = null,
            this.pendingProps = t,
            this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
            this.mode = a,
            this.subtreeFlags = this.flags = 0,
            this.deletions = null,
            this.childLanes = this.lanes = 0,
            this.alternate = null
    }
    function mt(e, t, l, a) {
        return new _g(e, t, l, a)
    }
    function ss(e) {
        return e = e.prototype,
            !(!e || !e.isReactComponent)
    }
    function Kt(e, t) {
        var l = e.alternate;
        return l === null ? (l = mt(e.tag, t, e.key, e.mode),
            l.elementType = e.elementType,
            l.type = e.type,
            l.stateNode = e.stateNode,
            l.alternate = e,
            e.alternate = l) : (l.pendingProps = t,
                l.type = e.type,
                l.flags = 0,
                l.subtreeFlags = 0,
                l.deletions = null),
            l.flags = e.flags & 65011712,
            l.childLanes = e.childLanes,
            l.lanes = e.lanes,
            l.child = e.child,
            l.memoizedProps = e.memoizedProps,
            l.memoizedState = e.memoizedState,
            l.updateQueue = e.updateQueue,
            t = e.dependencies,
            l.dependencies = t === null ? null : {
                lanes: t.lanes,
                firstContext: t.firstContext
            },
            l.sibling = e.sibling,
            l.index = e.index,
            l.ref = e.ref,
            l.refCleanup = e.refCleanup,
            l
    }
    function fo(e, t) {
        e.flags &= 65011714;
        var l = e.alternate;
        return l === null ? (e.childLanes = 0,
            e.lanes = t,
            e.child = null,
            e.subtreeFlags = 0,
            e.memoizedProps = null,
            e.memoizedState = null,
            e.updateQueue = null,
            e.dependencies = null,
            e.stateNode = null) : (e.childLanes = l.childLanes,
                e.lanes = l.lanes,
                e.child = l.child,
                e.subtreeFlags = 0,
                e.deletions = null,
                e.memoizedProps = l.memoizedProps,
                e.memoizedState = l.memoizedState,
                e.updateQueue = l.updateQueue,
                e.type = l.type,
                t = l.dependencies,
                e.dependencies = t === null ? null : {
                    lanes: t.lanes,
                    firstContext: t.firstContext
                }),
            e
    }
    function gi(e, t, l, a, n, i) {
        var f = 0;
        if (a = e,
            typeof e == "function")
            ss(e) && (f = 1);
        else if (typeof e == "string")
            f = qp(e, l, Q.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
        else
            e: switch (e) {
                case Ne:
                    return e = mt(31, l, t, n),
                        e.elementType = Ne,
                        e.lanes = i,
                        e;
                case B:
                    return Vl(l.children, n, i, t);
                case q:
                    f = 8,
                        n |= 24;
                    break;
                case K:
                    return e = mt(12, l, t, n | 2),
                        e.elementType = K,
                        e.lanes = i,
                        e;
                case re:
                    return e = mt(13, l, t, n),
                        e.elementType = re,
                        e.lanes = i,
                        e;
                case ye:
                    return e = mt(19, l, t, n),
                        e.elementType = ye,
                        e.lanes = i,
                        e;
                default:
                    if (typeof e == "object" && e !== null)
                        switch (e.$$typeof) {
                            case k:
                                f = 10;
                                break e;
                            case V:
                                f = 9;
                                break e;
                            case ae:
                                f = 11;
                                break e;
                            case W:
                                f = 14;
                                break e;
                            case Ae:
                                f = 16,
                                    a = null;
                                break e
                        }
                    f = 29,
                        l = Error(r(130, e === null ? "null" : typeof e, "")),
                        a = null
            }
        return t = mt(f, l, t, n),
            t.elementType = e,
            t.type = a,
            t.lanes = i,
            t
    }
    function Vl(e, t, l, a) {
        return e = mt(7, e, a, t),
            e.lanes = l,
            e
    }
    function cs(e, t, l) {
        return e = mt(6, e, null, t),
            e.lanes = l,
            e
    }
    function ho(e) {
        var t = mt(18, null, null, 0);
        return t.stateNode = e,
            t
    }
    function rs(e, t, l) {
        return t = mt(4, e.children !== null ? e.children : [], e.key, t),
            t.lanes = l,
            t.stateNode = {
                containerInfo: e.containerInfo,
                pendingChildren: null,
                implementation: e.implementation
            },
            t
    }
    var mo = new WeakMap;
    function Nt(e, t) {
        if (typeof e == "object" && e !== null) {
            var l = mo.get(e);
            return l !== void 0 ? l : (t = {
                value: e,
                source: t,
                stack: dr(t)
            },
                mo.set(e, t),
                t)
        }
        return {
            value: e,
            source: t,
            stack: dr(t)
        }
    }
    var ma = []
        , ga = 0
        , pi = null
        , an = 0
        , Ct = []
        , Ot = 0
        , dl = null
        , Lt = 1
        , Ht = "";
    function Zt(e, t) {
        ma[ga++] = an,
            ma[ga++] = pi,
            pi = e,
            an = t
    }
    function go(e, t, l) {
        Ct[Ot++] = Lt,
            Ct[Ot++] = Ht,
            Ct[Ot++] = dl,
            dl = e;
        var a = Lt;
        e = Ht;
        var n = 32 - dt(a) - 1;
        a &= ~(1 << n),
            l += 1;
        var i = 32 - dt(t) + n;
        if (30 < i) {
            var f = n - n % 5;
            i = (a & (1 << f) - 1).toString(32),
                a >>= f,
                n -= f,
                Lt = 1 << 32 - dt(t) + n | l << n | a,
                Ht = i + e
        } else
            Lt = 1 << i | l << n | a,
                Ht = e
    }
    function os(e) {
        e.return !== null && (Zt(e, 1),
            go(e, 1, 0))
    }
    function fs(e) {
        for (; e === pi;)
            pi = ma[--ga],
                ma[ga] = null,
                an = ma[--ga],
                ma[ga] = null;
        for (; e === dl;)
            dl = Ct[--Ot],
                Ct[Ot] = null,
                Ht = Ct[--Ot],
                Ct[Ot] = null,
                Lt = Ct[--Ot],
                Ct[Ot] = null
    }
    function po(e, t) {
        Ct[Ot++] = Lt,
            Ct[Ot++] = Ht,
            Ct[Ot++] = dl,
            Lt = t.id,
            Ht = t.overflow,
            dl = e
    }
    var ke = null
        , Ce = null
        , oe = !1
        , hl = null
        , At = !1
        , ds = Error(r(519));
    function ml(e) {
        var t = Error(r(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
        throw nn(Nt(t, e)),
        ds
    }
    function yo(e) {
        var t = e.stateNode
            , l = e.type
            , a = e.memoizedProps;
        switch (t[Ze] = e,
        t[at] = a,
        l) {
            case "dialog":
                ue("cancel", t),
                    ue("close", t);
                break;
            case "iframe":
            case "object":
            case "embed":
                ue("load", t);
                break;
            case "video":
            case "audio":
                for (l = 0; l < An.length; l++)
                    ue(An[l], t);
                break;
            case "source":
                ue("error", t);
                break;
            case "img":
            case "image":
            case "link":
                ue("error", t),
                    ue("load", t);
                break;
            case "details":
                ue("toggle", t);
                break;
            case "input":
                ue("invalid", t),
                    Rr(t, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0);
                break;
            case "select":
                ue("invalid", t);
                break;
            case "textarea":
                ue("invalid", t),
                    Dr(t, a.value, a.defaultValue, a.children)
        }
        l = a.children,
            typeof l != "string" && typeof l != "number" && typeof l != "bigint" || t.textContent === "" + l || a.suppressHydrationWarning === !0 || Ud(t.textContent, l) ? (a.popover != null && (ue("beforetoggle", t),
                ue("toggle", t)),
                a.onScroll != null && ue("scroll", t),
                a.onScrollEnd != null && ue("scrollend", t),
                a.onClick != null && (t.onclick = Qt),
                t = !0) : t = !1,
            t || ml(e, !0)
    }
    function vo(e) {
        for (ke = e.return; ke;)
            switch (ke.tag) {
                case 5:
                case 31:
                case 13:
                    At = !1;
                    return;
                case 27:
                case 3:
                    At = !0;
                    return;
                default:
                    ke = ke.return
            }
    }
    function pa(e) {
        if (e !== ke)
            return !1;
        if (!oe)
            return vo(e),
                oe = !0,
                !1;
        var t = e.tag, l;
        if ((l = t !== 3 && t !== 27) && ((l = t === 5) && (l = e.type,
            l = !(l !== "form" && l !== "button") || jc(e.type, e.memoizedProps)),
            l = !l),
            l && Ce && ml(e),
            vo(e),
            t === 13) {
            if (e = e.memoizedState,
                e = e !== null ? e.dehydrated : null,
                !e)
                throw Error(r(317));
            Ce = Xd(e)
        } else if (t === 31) {
            if (e = e.memoizedState,
                e = e !== null ? e.dehydrated : null,
                !e)
                throw Error(r(317));
            Ce = Xd(e)
        } else
            t === 27 ? (t = Ce,
                zl(e.type) ? (e = Uc,
                    Uc = null,
                    Ce = e) : Ce = t) : Ce = ke ? Rt(e.stateNode.nextSibling) : null;
        return !0
    }
    function Ql() {
        Ce = ke = null,
            oe = !1
    }
    function hs() {
        var e = hl;
        return e !== null && (ct === null ? ct = e : ct.push.apply(ct, e),
            hl = null),
            e
    }
    function nn(e) {
        hl === null ? hl = [e] : hl.push(e)
    }
    var ms = S(null)
        , Xl = null
        , kt = null;
    function gl(e, t, l) {
        G(ms, t._currentValue),
            t._currentValue = l
    }
    function Jt(e) {
        e._currentValue = ms.current,
            _(ms)
    }
    function gs(e, t, l) {
        for (; e !== null;) {
            var a = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t,
                a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
                e === l)
                break;
            e = e.return
        }
    }
    function ps(e, t, l, a) {
        var n = e.child;
        for (n !== null && (n.return = e); n !== null;) {
            var i = n.dependencies;
            if (i !== null) {
                var f = n.child;
                i = i.firstContext;
                e: for (; i !== null;) {
                    var m = i;
                    i = n;
                    for (var x = 0; x < t.length; x++)
                        if (m.context === t[x]) {
                            i.lanes |= l,
                                m = i.alternate,
                                m !== null && (m.lanes |= l),
                                gs(i.return, l, e),
                                a || (f = null);
                            break e
                        }
                    i = m.next
                }
            } else if (n.tag === 18) {
                if (f = n.return,
                    f === null)
                    throw Error(r(341));
                f.lanes |= l,
                    i = f.alternate,
                    i !== null && (i.lanes |= l),
                    gs(f, l, e),
                    f = null
            } else
                f = n.child;
            if (f !== null)
                f.return = n;
            else
                for (f = n; f !== null;) {
                    if (f === e) {
                        f = null;
                        break
                    }
                    if (n = f.sibling,
                        n !== null) {
                        n.return = f.return,
                            f = n;
                        break
                    }
                    f = f.return
                }
            n = f
        }
    }
    function ya(e, t, l, a) {
        e = null;
        for (var n = t, i = !1; n !== null;) {
            if (!i) {
                if ((n.flags & 524288) !== 0)
                    i = !0;
                else if ((n.flags & 262144) !== 0)
                    break
            }
            if (n.tag === 10) {
                var f = n.alternate;
                if (f === null)
                    throw Error(r(387));
                if (f = f.memoizedProps,
                    f !== null) {
                    var m = n.type;
                    ht(n.pendingProps.value, f.value) || (e !== null ? e.push(m) : e = [m])
                }
            } else if (n === pe.current) {
                if (f = n.alternate,
                    f === null)
                    throw Error(r(387));
                f.memoizedState.memoizedState !== n.memoizedState.memoizedState && (e !== null ? e.push(wn) : e = [wn])
            }
            n = n.return
        }
        e !== null && ps(t, e, l, a),
            t.flags |= 262144
    }
    function yi(e) {
        for (e = e.firstContext; e !== null;) {
            if (!ht(e.context._currentValue, e.memoizedValue))
                return !0;
            e = e.next
        }
        return !1
    }
    function Kl(e) {
        Xl = e,
            kt = null,
            e = e.dependencies,
            e !== null && (e.firstContext = null)
    }
    function Je(e) {
        return xo(Xl, e)
    }
    function vi(e, t) {
        return Xl === null && Kl(e),
            xo(e, t)
    }
    function xo(e, t) {
        var l = t._currentValue;
        if (t = {
            context: t,
            memoizedValue: l,
            next: null
        },
            kt === null) {
            if (e === null)
                throw Error(r(308));
            kt = t,
                e.dependencies = {
                    lanes: 0,
                    firstContext: t
                },
                e.flags |= 524288
        } else
            kt = kt.next = t;
        return l
    }
    var Ug = typeof AbortController < "u" ? AbortController : function () {
        var e = []
            , t = this.signal = {
                aborted: !1,
                addEventListener: function (l, a) {
                    e.push(a)
                }
            };
        this.abort = function () {
            t.aborted = !0,
                e.forEach(function (l) {
                    return l()
                })
        }
    }
        , Lg = s.unstable_scheduleCallback
        , Hg = s.unstable_NormalPriority
        , Le = {
            $$typeof: k,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0
        };
    function ys() {
        return {
            controller: new Ug,
            data: new Map,
            refCount: 0
        }
    }
    function un(e) {
        e.refCount--,
            e.refCount === 0 && Lg(Hg, function () {
                e.controller.abort()
            })
    }
    var sn = null
        , vs = 0
        , va = 0
        , xa = null;
    function Bg(e, t) {
        if (sn === null) {
            var l = sn = [];
            vs = 0,
                va = Sc(),
                xa = {
                    status: "pending",
                    value: void 0,
                    then: function (a) {
                        l.push(a)
                    }
                }
        }
        return vs++,
            t.then(bo, bo),
            t
    }
    function bo() {
        if (--vs === 0 && sn !== null) {
            xa !== null && (xa.status = "fulfilled");
            var e = sn;
            sn = null,
                va = 0,
                xa = null;
            for (var t = 0; t < e.length; t++)
                (0,
                    e[t])()
        }
    }
    function qg(e, t) {
        var l = []
            , a = {
                status: "pending",
                value: null,
                reason: null,
                then: function (n) {
                    l.push(n)
                }
            };
        return e.then(function () {
            a.status = "fulfilled",
                a.value = t;
            for (var n = 0; n < l.length; n++)
                (0,
                    l[n])(t)
        }, function (n) {
            for (a.status = "rejected",
                a.reason = n,
                n = 0; n < l.length; n++)
                (0,
                    l[n])(void 0)
        }),
            a
    }
    var So = D.S;
    D.S = function (e, t) {
        id = ot(),
            typeof t == "object" && t !== null && typeof t.then == "function" && Bg(e, t),
            So !== null && So(e, t)
    }
        ;
    var Zl = S(null);
    function xs() {
        var e = Zl.current;
        return e !== null ? e : Te.pooledCache
    }
    function xi(e, t) {
        t === null ? G(Zl, Zl.current) : G(Zl, t.pool)
    }
    function Eo() {
        var e = xs();
        return e === null ? null : {
            parent: Le._currentValue,
            pool: e
        }
    }
    var ba = Error(r(460))
        , bs = Error(r(474))
        , bi = Error(r(542))
        , Si = {
            then: function () { }
        };
    function To(e) {
        return e = e.status,
            e === "fulfilled" || e === "rejected"
    }
    function No(e, t, l) {
        switch (l = e[l],
        l === void 0 ? e.push(t) : l !== t && (t.then(Qt, Qt),
            t = l),
        t.status) {
            case "fulfilled":
                return t.value;
            case "rejected":
                throw e = t.reason,
                Oo(e),
                e;
            default:
                if (typeof t.status == "string")
                    t.then(Qt, Qt);
                else {
                    if (e = Te,
                        e !== null && 100 < e.shellSuspendCounter)
                        throw Error(r(482));
                    e = t,
                        e.status = "pending",
                        e.then(function (a) {
                            if (t.status === "pending") {
                                var n = t;
                                n.status = "fulfilled",
                                    n.value = a
                            }
                        }, function (a) {
                            if (t.status === "pending") {
                                var n = t;
                                n.status = "rejected",
                                    n.reason = a
                            }
                        })
                }
                switch (t.status) {
                    case "fulfilled":
                        return t.value;
                    case "rejected":
                        throw e = t.reason,
                        Oo(e),
                        e
                }
                throw Jl = t,
                ba
        }
    }
    function kl(e) {
        try {
            var t = e._init;
            return t(e._payload)
        } catch (l) {
            throw l !== null && typeof l == "object" && typeof l.then == "function" ? (Jl = l,
                ba) : l
        }
    }
    var Jl = null;
    function Co() {
        if (Jl === null)
            throw Error(r(459));
        var e = Jl;
        return Jl = null,
            e
    }
    function Oo(e) {
        if (e === ba || e === bi)
            throw Error(r(483))
    }
    var Sa = null
        , cn = 0;
    function Ei(e) {
        var t = cn;
        return cn += 1,
            Sa === null && (Sa = []),
            No(Sa, e, t)
    }
    function rn(e, t) {
        t = t.props.ref,
            e.ref = t !== void 0 ? t : null
    }
    function Ti(e, t) {
        throw t.$$typeof === z ? Error(r(525)) : (e = Object.prototype.toString.call(t),
            Error(r(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)))
    }
    function Ao(e) {
        function t(N, E) {
            if (e) {
                var C = N.deletions;
                C === null ? (N.deletions = [E],
                    N.flags |= 16) : C.push(E)
            }
        }
        function l(N, E) {
            if (!e)
                return null;
            for (; E !== null;)
                t(N, E),
                    E = E.sibling;
            return null
        }
        function a(N) {
            for (var E = new Map; N !== null;)
                N.key !== null ? E.set(N.key, N) : E.set(N.index, N),
                    N = N.sibling;
            return E
        }
        function n(N, E) {
            return N = Kt(N, E),
                N.index = 0,
                N.sibling = null,
                N
        }
        function i(N, E, C) {
            return N.index = C,
                e ? (C = N.alternate,
                    C !== null ? (C = C.index,
                        C < E ? (N.flags |= 67108866,
                            E) : C) : (N.flags |= 67108866,
                                E)) : (N.flags |= 1048576,
                                    E)
        }
        function f(N) {
            return e && N.alternate === null && (N.flags |= 67108866),
                N
        }
        function m(N, E, C, U) {
            return E === null || E.tag !== 6 ? (E = cs(C, N.mode, U),
                E.return = N,
                E) : (E = n(E, C),
                    E.return = N,
                    E)
        }
        function x(N, E, C, U) {
            var J = C.type;
            return J === B ? w(N, E, C.props.children, U, C.key) : E !== null && (E.elementType === J || typeof J == "object" && J !== null && J.$$typeof === Ae && kl(J) === E.type) ? (E = n(E, C.props),
                rn(E, C),
                E.return = N,
                E) : (E = gi(C.type, C.key, C.props, null, N.mode, U),
                    rn(E, C),
                    E.return = N,
                    E)
        }
        function O(N, E, C, U) {
            return E === null || E.tag !== 4 || E.stateNode.containerInfo !== C.containerInfo || E.stateNode.implementation !== C.implementation ? (E = rs(C, N.mode, U),
                E.return = N,
                E) : (E = n(E, C.children || []),
                    E.return = N,
                    E)
        }
        function w(N, E, C, U, J) {
            return E === null || E.tag !== 7 ? (E = Vl(C, N.mode, U, J),
                E.return = N,
                E) : (E = n(E, C),
                    E.return = N,
                    E)
        }
        function L(N, E, C) {
            if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
                return E = cs("" + E, N.mode, C),
                    E.return = N,
                    E;
            if (typeof E == "object" && E !== null) {
                switch (E.$$typeof) {
                    case j:
                        return C = gi(E.type, E.key, E.props, null, N.mode, C),
                            rn(C, E),
                            C.return = N,
                            C;
                    case H:
                        return E = rs(E, N.mode, C),
                            E.return = N,
                            E;
                    case Ae:
                        return E = kl(E),
                            L(N, E, C)
                }
                if (lt(E) || Ie(E))
                    return E = Vl(E, N.mode, C, null),
                        E.return = N,
                        E;
                if (typeof E.then == "function")
                    return L(N, Ei(E), C);
                if (E.$$typeof === k)
                    return L(N, vi(N, E), C);
                Ti(N, E)
            }
            return null
        }
        function A(N, E, C, U) {
            var J = E !== null ? E.key : null;
            if (typeof C == "string" && C !== "" || typeof C == "number" || typeof C == "bigint")
                return J !== null ? null : m(N, E, "" + C, U);
            if (typeof C == "object" && C !== null) {
                switch (C.$$typeof) {
                    case j:
                        return C.key === J ? x(N, E, C, U) : null;
                    case H:
                        return C.key === J ? O(N, E, C, U) : null;
                    case Ae:
                        return C = kl(C),
                            A(N, E, C, U)
                }
                if (lt(C) || Ie(C))
                    return J !== null ? null : w(N, E, C, U, null);
                if (typeof C.then == "function")
                    return A(N, E, Ei(C), U);
                if (C.$$typeof === k)
                    return A(N, E, vi(N, C), U);
                Ti(N, C)
            }
            return null
        }
        function R(N, E, C, U, J) {
            if (typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint")
                return N = N.get(C) || null,
                    m(E, N, "" + U, J);
            if (typeof U == "object" && U !== null) {
                switch (U.$$typeof) {
                    case j:
                        return N = N.get(U.key === null ? C : U.key) || null,
                            x(E, N, U, J);
                    case H:
                        return N = N.get(U.key === null ? C : U.key) || null,
                            O(E, N, U, J);
                    case Ae:
                        return U = kl(U),
                            R(N, E, C, U, J)
                }
                if (lt(U) || Ie(U))
                    return N = N.get(C) || null,
                        w(E, N, U, J, null);
                if (typeof U.then == "function")
                    return R(N, E, C, Ei(U), J);
                if (U.$$typeof === k)
                    return R(N, E, C, vi(E, U), J);
                Ti(E, U)
            }
            return null
        }
        function X(N, E, C, U) {
            for (var J = null, de = null, Z = E, le = E = 0, ce = null; Z !== null && le < C.length; le++) {
                Z.index > le ? (ce = Z,
                    Z = null) : ce = Z.sibling;
                var he = A(N, Z, C[le], U);
                if (he === null) {
                    Z === null && (Z = ce);
                    break
                }
                e && Z && he.alternate === null && t(N, Z),
                    E = i(he, E, le),
                    de === null ? J = he : de.sibling = he,
                    de = he,
                    Z = ce
            }
            if (le === C.length)
                return l(N, Z),
                    oe && Zt(N, le),
                    J;
            if (Z === null) {
                for (; le < C.length; le++)
                    Z = L(N, C[le], U),
                        Z !== null && (E = i(Z, E, le),
                            de === null ? J = Z : de.sibling = Z,
                            de = Z);
                return oe && Zt(N, le),
                    J
            }
            for (Z = a(Z); le < C.length; le++)
                ce = R(Z, N, le, C[le], U),
                    ce !== null && (e && ce.alternate !== null && Z.delete(ce.key === null ? le : ce.key),
                        E = i(ce, E, le),
                        de === null ? J = ce : de.sibling = ce,
                        de = ce);
            return e && Z.forEach(function (Ml) {
                return t(N, Ml)
            }),
                oe && Zt(N, le),
                J
        }
        function $(N, E, C, U) {
            if (C == null)
                throw Error(r(151));
            for (var J = null, de = null, Z = E, le = E = 0, ce = null, he = C.next(); Z !== null && !he.done; le++,
                he = C.next()) {
                Z.index > le ? (ce = Z,
                    Z = null) : ce = Z.sibling;
                var Ml = A(N, Z, he.value, U);
                if (Ml === null) {
                    Z === null && (Z = ce);
                    break
                }
                e && Z && Ml.alternate === null && t(N, Z),
                    E = i(Ml, E, le),
                    de === null ? J = Ml : de.sibling = Ml,
                    de = Ml,
                    Z = ce
            }
            if (he.done)
                return l(N, Z),
                    oe && Zt(N, le),
                    J;
            if (Z === null) {
                for (; !he.done; le++,
                    he = C.next())
                    he = L(N, he.value, U),
                        he !== null && (E = i(he, E, le),
                            de === null ? J = he : de.sibling = he,
                            de = he);
                return oe && Zt(N, le),
                    J
            }
            for (Z = a(Z); !he.done; le++,
                he = C.next())
                he = R(Z, N, le, he.value, U),
                    he !== null && (e && he.alternate !== null && Z.delete(he.key === null ? le : he.key),
                        E = i(he, E, le),
                        de === null ? J = he : de.sibling = he,
                        de = he);
            return e && Z.forEach(function ($p) {
                return t(N, $p)
            }),
                oe && Zt(N, le),
                J
        }
        function Ee(N, E, C, U) {
            if (typeof C == "object" && C !== null && C.type === B && C.key === null && (C = C.props.children),
                typeof C == "object" && C !== null) {
                switch (C.$$typeof) {
                    case j:
                        e: {
                            for (var J = C.key; E !== null;) {
                                if (E.key === J) {
                                    if (J = C.type,
                                        J === B) {
                                        if (E.tag === 7) {
                                            l(N, E.sibling),
                                                U = n(E, C.props.children),
                                                U.return = N,
                                                N = U;
                                            break e
                                        }
                                    } else if (E.elementType === J || typeof J == "object" && J !== null && J.$$typeof === Ae && kl(J) === E.type) {
                                        l(N, E.sibling),
                                            U = n(E, C.props),
                                            rn(U, C),
                                            U.return = N,
                                            N = U;
                                        break e
                                    }
                                    l(N, E);
                                    break
                                } else
                                    t(N, E);
                                E = E.sibling
                            }
                            C.type === B ? (U = Vl(C.props.children, N.mode, U, C.key),
                                U.return = N,
                                N = U) : (U = gi(C.type, C.key, C.props, null, N.mode, U),
                                    rn(U, C),
                                    U.return = N,
                                    N = U)
                        }
                        return f(N);
                    case H:
                        e: {
                            for (J = C.key; E !== null;) {
                                if (E.key === J)
                                    if (E.tag === 4 && E.stateNode.containerInfo === C.containerInfo && E.stateNode.implementation === C.implementation) {
                                        l(N, E.sibling),
                                            U = n(E, C.children || []),
                                            U.return = N,
                                            N = U;
                                        break e
                                    } else {
                                        l(N, E);
                                        break
                                    }
                                else
                                    t(N, E);
                                E = E.sibling
                            }
                            U = rs(C, N.mode, U),
                                U.return = N,
                                N = U
                        }
                        return f(N);
                    case Ae:
                        return C = kl(C),
                            Ee(N, E, C, U)
                }
                if (lt(C))
                    return X(N, E, C, U);
                if (Ie(C)) {
                    if (J = Ie(C),
                        typeof J != "function")
                        throw Error(r(150));
                    return C = J.call(C),
                        $(N, E, C, U)
                }
                if (typeof C.then == "function")
                    return Ee(N, E, Ei(C), U);
                if (C.$$typeof === k)
                    return Ee(N, E, vi(N, C), U);
                Ti(N, C)
            }
            return typeof C == "string" && C !== "" || typeof C == "number" || typeof C == "bigint" ? (C = "" + C,
                E !== null && E.tag === 6 ? (l(N, E.sibling),
                    U = n(E, C),
                    U.return = N,
                    N = U) : (l(N, E),
                        U = cs(C, N.mode, U),
                        U.return = N,
                        N = U),
                f(N)) : l(N, E)
        }
        return function (N, E, C, U) {
            try {
                cn = 0;
                var J = Ee(N, E, C, U);
                return Sa = null,
                    J
            } catch (Z) {
                if (Z === ba || Z === bi)
                    throw Z;
                var de = mt(29, Z, null, N.mode);
                return de.lanes = U,
                    de.return = N,
                    de
            }
        }
    }
    var Fl = Ao(!0)
        , zo = Ao(!1)
        , pl = !1;
    function Ss(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                lanes: 0,
                hiddenCallbacks: null
            },
            callbacks: null
        }
    }
    function Es(e, t) {
        e = e.updateQueue,
            t.updateQueue === e && (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                callbacks: null
            })
    }
    function yl(e) {
        return {
            lane: e,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function vl(e, t, l) {
        var a = e.updateQueue;
        if (a === null)
            return null;
        if (a = a.shared,
            (me & 2) !== 0) {
            var n = a.pending;
            return n === null ? t.next = t : (t.next = n.next,
                n.next = t),
                a.pending = t,
                t = mi(e),
                oo(e, null, l),
                t
        }
        return hi(e, a, t, l),
            mi(e)
    }
    function on(e, t, l) {
        if (t = t.updateQueue,
            t !== null && (t = t.shared,
                (l & 4194048) !== 0)) {
            var a = t.lanes;
            a &= e.pendingLanes,
                l |= a,
                t.lanes = l,
                vr(e, l)
        }
    }
    function Ts(e, t) {
        var l = e.updateQueue
            , a = e.alternate;
        if (a !== null && (a = a.updateQueue,
            l === a)) {
            var n = null
                , i = null;
            if (l = l.firstBaseUpdate,
                l !== null) {
                do {
                    var f = {
                        lane: l.lane,
                        tag: l.tag,
                        payload: l.payload,
                        callback: null,
                        next: null
                    };
                    i === null ? n = i = f : i = i.next = f,
                        l = l.next
                } while (l !== null);
                i === null ? n = i = t : i = i.next = t
            } else
                n = i = t;
            l = {
                baseState: a.baseState,
                firstBaseUpdate: n,
                lastBaseUpdate: i,
                shared: a.shared,
                callbacks: a.callbacks
            },
                e.updateQueue = l;
            return
        }
        e = l.lastBaseUpdate,
            e === null ? l.firstBaseUpdate = t : e.next = t,
            l.lastBaseUpdate = t
    }
    var Ns = !1;
    function fn() {
        if (Ns) {
            var e = xa;
            if (e !== null)
                throw e
        }
    }
    function dn(e, t, l, a) {
        Ns = !1;
        var n = e.updateQueue;
        pl = !1;
        var i = n.firstBaseUpdate
            , f = n.lastBaseUpdate
            , m = n.shared.pending;
        if (m !== null) {
            n.shared.pending = null;
            var x = m
                , O = x.next;
            x.next = null,
                f === null ? i = O : f.next = O,
                f = x;
            var w = e.alternate;
            w !== null && (w = w.updateQueue,
                m = w.lastBaseUpdate,
                m !== f && (m === null ? w.firstBaseUpdate = O : m.next = O,
                    w.lastBaseUpdate = x))
        }
        if (i !== null) {
            var L = n.baseState;
            f = 0,
                w = O = x = null,
                m = i;
            do {
                var A = m.lane & -536870913
                    , R = A !== m.lane;
                if (R ? (se & A) === A : (a & A) === A) {
                    A !== 0 && A === va && (Ns = !0),
                        w !== null && (w = w.next = {
                            lane: 0,
                            tag: m.tag,
                            payload: m.payload,
                            callback: null,
                            next: null
                        });
                    e: {
                        var X = e
                            , $ = m;
                        A = t;
                        var Ee = l;
                        switch ($.tag) {
                            case 1:
                                if (X = $.payload,
                                    typeof X == "function") {
                                    L = X.call(Ee, L, A);
                                    break e
                                }
                                L = X;
                                break e;
                            case 3:
                                X.flags = X.flags & -65537 | 128;
                            case 0:
                                if (X = $.payload,
                                    A = typeof X == "function" ? X.call(Ee, L, A) : X,
                                    A == null)
                                    break e;
                                L = b({}, L, A);
                                break e;
                            case 2:
                                pl = !0
                        }
                    }
                    A = m.callback,
                        A !== null && (e.flags |= 64,
                            R && (e.flags |= 8192),
                            R = n.callbacks,
                            R === null ? n.callbacks = [A] : R.push(A))
                } else
                    R = {
                        lane: A,
                        tag: m.tag,
                        payload: m.payload,
                        callback: m.callback,
                        next: null
                    },
                        w === null ? (O = w = R,
                            x = L) : w = w.next = R,
                        f |= A;
                if (m = m.next,
                    m === null) {
                    if (m = n.shared.pending,
                        m === null)
                        break;
                    R = m,
                        m = R.next,
                        R.next = null,
                        n.lastBaseUpdate = R,
                        n.shared.pending = null
                }
            } while (!0);
            w === null && (x = L),
                n.baseState = x,
                n.firstBaseUpdate = O,
                n.lastBaseUpdate = w,
                i === null && (n.shared.lanes = 0),
                Tl |= f,
                e.lanes = f,
                e.memoizedState = L
        }
    }
    function Ro(e, t) {
        if (typeof e != "function")
            throw Error(r(191, e));
        e.call(t)
    }
    function jo(e, t) {
        var l = e.callbacks;
        if (l !== null)
            for (e.callbacks = null,
                e = 0; e < l.length; e++)
                Ro(l[e], t)
    }
    var Ea = S(null)
        , Ni = S(0);
    function Do(e, t) {
        e = al,
            G(Ni, e),
            G(Ea, t),
            al = e | t.baseLanes
    }
    function Cs() {
        G(Ni, al),
            G(Ea, Ea.current)
    }
    function Os() {
        al = Ni.current,
            _(Ea),
            _(Ni)
    }
    var gt = S(null)
        , zt = null;
    function xl(e) {
        var t = e.alternate;
        G(_e, _e.current & 1),
            G(gt, e),
            zt === null && (t === null || Ea.current !== null || t.memoizedState !== null) && (zt = e)
    }
    function As(e) {
        G(_e, _e.current),
            G(gt, e),
            zt === null && (zt = e)
    }
    function wo(e) {
        e.tag === 22 ? (G(_e, _e.current),
            G(gt, e),
            zt === null && (zt = e)) : bl()
    }
    function bl() {
        G(_e, _e.current),
            G(gt, gt.current)
    }
    function pt(e) {
        _(gt),
            zt === e && (zt = null),
            _(_e)
    }
    var _e = S(0);
    function Ci(e) {
        for (var t = e; t !== null;) {
            if (t.tag === 13) {
                var l = t.memoizedState;
                if (l !== null && (l = l.dehydrated,
                    l === null || Mc(l) || _c(l)))
                    return t
            } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
                if ((t.flags & 128) !== 0)
                    return t
            } else if (t.child !== null) {
                t.child.return = t,
                    t = t.child;
                continue
            }
            if (t === e)
                break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e)
                    return null;
                t = t.return
            }
            t.sibling.return = t.return,
                t = t.sibling
        }
        return null
    }
    var Ft = 0
        , te = null
        , be = null
        , He = null
        , Oi = !1
        , Ta = !1
        , $l = !1
        , Ai = 0
        , hn = 0
        , Na = null
        , Yg = 0;
    function je() {
        throw Error(r(321))
    }
    function zs(e, t) {
        if (t === null)
            return !1;
        for (var l = 0; l < t.length && l < e.length; l++)
            if (!ht(e[l], t[l]))
                return !1;
        return !0
    }
    function Rs(e, t, l, a, n, i) {
        return Ft = i,
            te = t,
            t.memoizedState = null,
            t.updateQueue = null,
            t.lanes = 0,
            D.H = e === null || e.memoizedState === null ? pf : Xs,
            $l = !1,
            i = l(a, n),
            $l = !1,
            Ta && (i = _o(t, l, a, n)),
            Mo(e),
            i
    }
    function Mo(e) {
        D.H = pn;
        var t = be !== null && be.next !== null;
        if (Ft = 0,
            He = be = te = null,
            Oi = !1,
            hn = 0,
            Na = null,
            t)
            throw Error(r(300));
        e === null || Be || (e = e.dependencies,
            e !== null && yi(e) && (Be = !0))
    }
    function _o(e, t, l, a) {
        te = e;
        var n = 0;
        do {
            if (Ta && (Na = null),
                hn = 0,
                Ta = !1,
                25 <= n)
                throw Error(r(301));
            if (n += 1,
                He = be = null,
                e.updateQueue != null) {
                var i = e.updateQueue;
                i.lastEffect = null,
                    i.events = null,
                    i.stores = null,
                    i.memoCache != null && (i.memoCache.index = 0)
            }
            D.H = yf,
                i = t(l, a)
        } while (Ta);
        return i
    }
    function Gg() {
        var e = D.H
            , t = e.useState()[0];
        return t = typeof t.then == "function" ? mn(t) : t,
            e = e.useState()[0],
            (be !== null ? be.memoizedState : null) !== e && (te.flags |= 1024),
            t
    }
    function js() {
        var e = Ai !== 0;
        return Ai = 0,
            e
    }
    function Ds(e, t, l) {
        t.updateQueue = e.updateQueue,
            t.flags &= -2053,
            e.lanes &= ~l
    }
    function ws(e) {
        if (Oi) {
            for (e = e.memoizedState; e !== null;) {
                var t = e.queue;
                t !== null && (t.pending = null),
                    e = e.next
            }
            Oi = !1
        }
        Ft = 0,
            He = be = te = null,
            Ta = !1,
            hn = Ai = 0,
            Na = null
    }
    function tt() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return He === null ? te.memoizedState = He = e : He = He.next = e,
            He
    }
    function Ue() {
        if (be === null) {
            var e = te.alternate;
            e = e !== null ? e.memoizedState : null
        } else
            e = be.next;
        var t = He === null ? te.memoizedState : He.next;
        if (t !== null)
            He = t,
                be = e;
        else {
            if (e === null)
                throw te.alternate === null ? Error(r(467)) : Error(r(310));
            be = e,
                e = {
                    memoizedState: be.memoizedState,
                    baseState: be.baseState,
                    baseQueue: be.baseQueue,
                    queue: be.queue,
                    next: null
                },
                He === null ? te.memoizedState = He = e : He = He.next = e
        }
        return He
    }
    function zi() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }
    function mn(e) {
        var t = hn;
        return hn += 1,
            Na === null && (Na = []),
            e = No(Na, e, t),
            t = te,
            (He === null ? t.memoizedState : He.next) === null && (t = t.alternate,
                D.H = t === null || t.memoizedState === null ? pf : Xs),
            e
    }
    function Ri(e) {
        if (e !== null && typeof e == "object") {
            if (typeof e.then == "function")
                return mn(e);
            if (e.$$typeof === k)
                return Je(e)
        }
        throw Error(r(438, String(e)))
    }
    function Ms(e) {
        var t = null
            , l = te.updateQueue;
        if (l !== null && (t = l.memoCache),
            t == null) {
            var a = te.alternate;
            a !== null && (a = a.updateQueue,
                a !== null && (a = a.memoCache,
                    a != null && (t = {
                        data: a.data.map(function (n) {
                            return n.slice()
                        }),
                        index: 0
                    })))
        }
        if (t == null && (t = {
            data: [],
            index: 0
        }),
            l === null && (l = zi(),
                te.updateQueue = l),
            l.memoCache = t,
            l = t.data[t.index],
            l === void 0)
            for (l = t.data[t.index] = Array(e),
                a = 0; a < e; a++)
                l[a] = Re;
        return t.index++,
            l
    }
    function $t(e, t) {
        return typeof t == "function" ? t(e) : t
    }
    function ji(e) {
        var t = Ue();
        return _s(t, be, e)
    }
    function _s(e, t, l) {
        var a = e.queue;
        if (a === null)
            throw Error(r(311));
        a.lastRenderedReducer = l;
        var n = e.baseQueue
            , i = a.pending;
        if (i !== null) {
            if (n !== null) {
                var f = n.next;
                n.next = i.next,
                    i.next = f
            }
            t.baseQueue = n = i,
                a.pending = null
        }
        if (i = e.baseState,
            n === null)
            e.memoizedState = i;
        else {
            t = n.next;
            var m = f = null
                , x = null
                , O = t
                , w = !1;
            do {
                var L = O.lane & -536870913;
                if (L !== O.lane ? (se & L) === L : (Ft & L) === L) {
                    var A = O.revertLane;
                    if (A === 0)
                        x !== null && (x = x.next = {
                            lane: 0,
                            revertLane: 0,
                            gesture: null,
                            action: O.action,
                            hasEagerState: O.hasEagerState,
                            eagerState: O.eagerState,
                            next: null
                        }),
                            L === va && (w = !0);
                    else if ((Ft & A) === A) {
                        O = O.next,
                            A === va && (w = !0);
                        continue
                    } else
                        L = {
                            lane: 0,
                            revertLane: O.revertLane,
                            gesture: null,
                            action: O.action,
                            hasEagerState: O.hasEagerState,
                            eagerState: O.eagerState,
                            next: null
                        },
                            x === null ? (m = x = L,
                                f = i) : x = x.next = L,
                            te.lanes |= A,
                            Tl |= A;
                    L = O.action,
                        $l && l(i, L),
                        i = O.hasEagerState ? O.eagerState : l(i, L)
                } else
                    A = {
                        lane: L,
                        revertLane: O.revertLane,
                        gesture: O.gesture,
                        action: O.action,
                        hasEagerState: O.hasEagerState,
                        eagerState: O.eagerState,
                        next: null
                    },
                        x === null ? (m = x = A,
                            f = i) : x = x.next = A,
                        te.lanes |= L,
                        Tl |= L;
                O = O.next
            } while (O !== null && O !== t);
            if (x === null ? f = i : x.next = m,
                !ht(i, e.memoizedState) && (Be = !0,
                    w && (l = xa,
                        l !== null)))
                throw l;
            e.memoizedState = i,
                e.baseState = f,
                e.baseQueue = x,
                a.lastRenderedState = i
        }
        return n === null && (a.lanes = 0),
            [e.memoizedState, a.dispatch]
    }
    function Us(e) {
        var t = Ue()
            , l = t.queue;
        if (l === null)
            throw Error(r(311));
        l.lastRenderedReducer = e;
        var a = l.dispatch
            , n = l.pending
            , i = t.memoizedState;
        if (n !== null) {
            l.pending = null;
            var f = n = n.next;
            do
                i = e(i, f.action),
                    f = f.next;
            while (f !== n);
            ht(i, t.memoizedState) || (Be = !0),
                t.memoizedState = i,
                t.baseQueue === null && (t.baseState = i),
                l.lastRenderedState = i
        }
        return [i, a]
    }
    function Uo(e, t, l) {
        var a = te
            , n = Ue()
            , i = oe;
        if (i) {
            if (l === void 0)
                throw Error(r(407));
            l = l()
        } else
            l = t();
        var f = !ht((be || n).memoizedState, l);
        if (f && (n.memoizedState = l,
            Be = !0),
            n = n.queue,
            Bs(Bo.bind(null, a, n, e), [e]),
            n.getSnapshot !== t || f || He !== null && He.memoizedState.tag & 1) {
            if (a.flags |= 2048,
                Ca(9, {
                    destroy: void 0
                }, Ho.bind(null, a, n, l, t), null),
                Te === null)
                throw Error(r(349));
            i || (Ft & 127) !== 0 || Lo(a, t, l)
        }
        return l
    }
    function Lo(e, t, l) {
        e.flags |= 16384,
            e = {
                getSnapshot: t,
                value: l
            },
            t = te.updateQueue,
            t === null ? (t = zi(),
                te.updateQueue = t,
                t.stores = [e]) : (l = t.stores,
                    l === null ? t.stores = [e] : l.push(e))
    }
    function Ho(e, t, l, a) {
        t.value = l,
            t.getSnapshot = a,
            qo(t) && Yo(e)
    }
    function Bo(e, t, l) {
        return l(function () {
            qo(t) && Yo(e)
        })
    }
    function qo(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var l = t();
            return !ht(e, l)
        } catch {
            return !0
        }
    }
    function Yo(e) {
        var t = Gl(e, 2);
        t !== null && rt(t, e, 2)
    }
    function Ls(e) {
        var t = tt();
        if (typeof e == "function") {
            var l = e;
            if (e = l(),
                $l) {
                rl(!0);
                try {
                    l()
                } finally {
                    rl(!1)
                }
            }
        }
        return t.memoizedState = t.baseState = e,
            t.queue = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: $t,
                lastRenderedState: e
            },
            t
    }
    function Go(e, t, l, a) {
        return e.baseState = l,
            _s(e, be, typeof a == "function" ? a : $t)
    }
    function Vg(e, t, l, a, n) {
        if (Mi(e))
            throw Error(r(485));
        if (e = t.action,
            e !== null) {
            var i = {
                payload: n,
                action: e,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function (f) {
                    i.listeners.push(f)
                }
            };
            D.T !== null ? l(!0) : i.isTransition = !1,
                a(i),
                l = t.pending,
                l === null ? (i.next = t.pending = i,
                    Vo(t, i)) : (i.next = l.next,
                        t.pending = l.next = i)
        }
    }
    function Vo(e, t) {
        var l = t.action
            , a = t.payload
            , n = e.state;
        if (t.isTransition) {
            var i = D.T
                , f = {};
            D.T = f;
            try {
                var m = l(n, a)
                    , x = D.S;
                x !== null && x(f, m),
                    Qo(e, t, m)
            } catch (O) {
                Hs(e, t, O)
            } finally {
                i !== null && f.types !== null && (i.types = f.types),
                    D.T = i
            }
        } else
            try {
                i = l(n, a),
                    Qo(e, t, i)
            } catch (O) {
                Hs(e, t, O)
            }
    }
    function Qo(e, t, l) {
        l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(function (a) {
            Xo(e, t, a)
        }, function (a) {
            return Hs(e, t, a)
        }) : Xo(e, t, l)
    }
    function Xo(e, t, l) {
        t.status = "fulfilled",
            t.value = l,
            Ko(t),
            e.state = l,
            t = e.pending,
            t !== null && (l = t.next,
                l === t ? e.pending = null : (l = l.next,
                    t.next = l,
                    Vo(e, l)))
    }
    function Hs(e, t, l) {
        var a = e.pending;
        if (e.pending = null,
            a !== null) {
            a = a.next;
            do
                t.status = "rejected",
                    t.reason = l,
                    Ko(t),
                    t = t.next;
            while (t !== a)
        }
        e.action = null
    }
    function Ko(e) {
        e = e.listeners;
        for (var t = 0; t < e.length; t++)
            (0,
                e[t])()
    }
    function Zo(e, t) {
        return t
    }
    function ko(e, t) {
        if (oe) {
            var l = Te.formState;
            if (l !== null) {
                e: {
                    var a = te;
                    if (oe) {
                        if (Ce) {
                            t: {
                                for (var n = Ce, i = At; n.nodeType !== 8;) {
                                    if (!i) {
                                        n = null;
                                        break t
                                    }
                                    if (n = Rt(n.nextSibling),
                                        n === null) {
                                        n = null;
                                        break t
                                    }
                                }
                                i = n.data,
                                    n = i === "F!" || i === "F" ? n : null
                            }
                            if (n) {
                                Ce = Rt(n.nextSibling),
                                    a = n.data === "F!";
                                break e
                            }
                        }
                        ml(a)
                    }
                    a = !1
                }
                a && (t = l[0])
            }
        }
        return l = tt(),
            l.memoizedState = l.baseState = t,
            a = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Zo,
                lastRenderedState: t
            },
            l.queue = a,
            l = hf.bind(null, te, a),
            a.dispatch = l,
            a = Ls(!1),
            i = Qs.bind(null, te, !1, a.queue),
            a = tt(),
            n = {
                state: t,
                dispatch: null,
                action: e,
                pending: null
            },
            a.queue = n,
            l = Vg.bind(null, te, n, i, l),
            n.dispatch = l,
            a.memoizedState = e,
            [t, l, !1]
    }
    function Jo(e) {
        var t = Ue();
        return Fo(t, be, e)
    }
    function Fo(e, t, l) {
        if (t = _s(e, t, Zo)[0],
            e = ji($t)[0],
            typeof t == "object" && t !== null && typeof t.then == "function")
            try {
                var a = mn(t)
            } catch (f) {
                throw f === ba ? bi : f
            }
        else
            a = t;
        t = Ue();
        var n = t.queue
            , i = n.dispatch;
        return l !== t.memoizedState && (te.flags |= 2048,
            Ca(9, {
                destroy: void 0
            }, Qg.bind(null, n, l), null)),
            [a, i, e]
    }
    function Qg(e, t) {
        e.action = t
    }
    function $o(e) {
        var t = Ue()
            , l = be;
        if (l !== null)
            return Fo(t, l, e);
        Ue(),
            t = t.memoizedState,
            l = Ue();
        var a = l.queue.dispatch;
        return l.memoizedState = e,
            [t, a, !1]
    }
    function Ca(e, t, l, a) {
        return e = {
            tag: e,
            create: l,
            deps: a,
            inst: t,
            next: null
        },
            t = te.updateQueue,
            t === null && (t = zi(),
                te.updateQueue = t),
            l = t.lastEffect,
            l === null ? t.lastEffect = e.next = e : (a = l.next,
                l.next = e,
                e.next = a,
                t.lastEffect = e),
            e
    }
    function Wo() {
        return Ue().memoizedState
    }
    function Di(e, t, l, a) {
        var n = tt();
        te.flags |= e,
            n.memoizedState = Ca(1 | t, {
                destroy: void 0
            }, l, a === void 0 ? null : a)
    }
    function wi(e, t, l, a) {
        var n = Ue();
        a = a === void 0 ? null : a;
        var i = n.memoizedState.inst;
        be !== null && a !== null && zs(a, be.memoizedState.deps) ? n.memoizedState = Ca(t, i, l, a) : (te.flags |= e,
            n.memoizedState = Ca(1 | t, i, l, a))
    }
    function Io(e, t) {
        Di(8390656, 8, e, t)
    }
    function Bs(e, t) {
        wi(2048, 8, e, t)
    }
    function Xg(e) {
        te.flags |= 4;
        var t = te.updateQueue;
        if (t === null)
            t = zi(),
                te.updateQueue = t,
                t.events = [e];
        else {
            var l = t.events;
            l === null ? t.events = [e] : l.push(e)
        }
    }
    function Po(e) {
        var t = Ue().memoizedState;
        return Xg({
            ref: t,
            nextImpl: e
        }),
            function () {
                if ((me & 2) !== 0)
                    throw Error(r(440));
                return t.impl.apply(void 0, arguments)
            }
    }
    function ef(e, t) {
        return wi(4, 2, e, t)
    }
    function tf(e, t) {
        return wi(4, 4, e, t)
    }
    function lf(e, t) {
        if (typeof t == "function") {
            e = e();
            var l = t(e);
            return function () {
                typeof l == "function" ? l() : t(null)
            }
        }
        if (t != null)
            return e = e(),
                t.current = e,
                function () {
                    t.current = null
                }
    }
    function af(e, t, l) {
        l = l != null ? l.concat([e]) : null,
            wi(4, 4, lf.bind(null, t, e), l)
    }
    function qs() { }
    function nf(e, t) {
        var l = Ue();
        t = t === void 0 ? null : t;
        var a = l.memoizedState;
        return t !== null && zs(t, a[1]) ? a[0] : (l.memoizedState = [e, t],
            e)
    }
    function uf(e, t) {
        var l = Ue();
        t = t === void 0 ? null : t;
        var a = l.memoizedState;
        if (t !== null && zs(t, a[1]))
            return a[0];
        if (a = e(),
            $l) {
            rl(!0);
            try {
                e()
            } finally {
                rl(!1)
            }
        }
        return l.memoizedState = [a, t],
            a
    }
    function Ys(e, t, l) {
        return l === void 0 || (Ft & 1073741824) !== 0 && (se & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = l,
            e = sd(),
            te.lanes |= e,
            Tl |= e,
            l)
    }
    function sf(e, t, l, a) {
        return ht(l, t) ? l : Ea.current !== null ? (e = Ys(e, l, a),
            ht(e, t) || (Be = !0),
            e) : (Ft & 42) === 0 || (Ft & 1073741824) !== 0 && (se & 261930) === 0 ? (Be = !0,
                e.memoizedState = l) : (e = sd(),
                    te.lanes |= e,
                    Tl |= e,
                    t)
    }
    function cf(e, t, l, a, n) {
        var i = Y.p;
        Y.p = i !== 0 && 8 > i ? i : 8;
        var f = D.T
            , m = {};
        D.T = m,
            Qs(e, !1, t, l);
        try {
            var x = n()
                , O = D.S;
            if (O !== null && O(m, x),
                x !== null && typeof x == "object" && typeof x.then == "function") {
                var w = qg(x, a);
                gn(e, t, w, xt(e))
            } else
                gn(e, t, a, xt(e))
        } catch (L) {
            gn(e, t, {
                then: function () { },
                status: "rejected",
                reason: L
            }, xt())
        } finally {
            Y.p = i,
                f !== null && m.types !== null && (f.types = m.types),
                D.T = f
        }
    }
    function Kg() { }
    function Gs(e, t, l, a) {
        if (e.tag !== 5)
            throw Error(r(476));
        var n = rf(e).queue;
        cf(e, n, t, F, l === null ? Kg : function () {
            return of(e),
                l(a)
        }
        )
    }
    function rf(e) {
        var t = e.memoizedState;
        if (t !== null)
            return t;
        t = {
            memoizedState: F,
            baseState: F,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: $t,
                lastRenderedState: F
            },
            next: null
        };
        var l = {};
        return t.next = {
            memoizedState: l,
            baseState: l,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: $t,
                lastRenderedState: l
            },
            next: null
        },
            e.memoizedState = t,
            e = e.alternate,
            e !== null && (e.memoizedState = t),
            t
    }
    function of(e) {
        var t = rf(e);
        t.next === null && (t = e.alternate.memoizedState),
            gn(e, t.next.queue, {}, xt())
    }
    function Vs() {
        return Je(wn)
    }
    function ff() {
        return Ue().memoizedState
    }
    function df() {
        return Ue().memoizedState
    }
    function Zg(e) {
        for (var t = e.return; t !== null;) {
            switch (t.tag) {
                case 24:
                case 3:
                    var l = xt();
                    e = yl(l);
                    var a = vl(t, e, l);
                    a !== null && (rt(a, t, l),
                        on(a, t, l)),
                        t = {
                            cache: ys()
                        },
                        e.payload = t;
                    return
            }
            t = t.return
        }
    }
    function kg(e, t, l) {
        var a = xt();
        l = {
            lane: a,
            revertLane: 0,
            gesture: null,
            action: l,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
            Mi(e) ? mf(t, l) : (l = us(e, t, l, a),
                l !== null && (rt(l, e, a),
                    gf(l, t, a)))
    }
    function hf(e, t, l) {
        var a = xt();
        gn(e, t, l, a)
    }
    function gn(e, t, l, a) {
        var n = {
            lane: a,
            revertLane: 0,
            gesture: null,
            action: l,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (Mi(e))
            mf(t, n);
        else {
            var i = e.alternate;
            if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer,
                i !== null))
                try {
                    var f = t.lastRenderedState
                        , m = i(f, l);
                    if (n.hasEagerState = !0,
                        n.eagerState = m,
                        ht(m, f))
                        return hi(e, t, n, 0),
                            Te === null && di(),
                            !1
                } catch { }
            if (l = us(e, t, n, a),
                l !== null)
                return rt(l, e, a),
                    gf(l, t, a),
                    !0
        }
        return !1
    }
    function Qs(e, t, l, a) {
        if (a = {
            lane: 2,
            revertLane: Sc(),
            gesture: null,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
            Mi(e)) {
            if (t)
                throw Error(r(479))
        } else
            t = us(e, l, a, 2),
                t !== null && rt(t, e, 2)
    }
    function Mi(e) {
        var t = e.alternate;
        return e === te || t !== null && t === te
    }
    function mf(e, t) {
        Ta = Oi = !0;
        var l = e.pending;
        l === null ? t.next = t : (t.next = l.next,
            l.next = t),
            e.pending = t
    }
    function gf(e, t, l) {
        if ((l & 4194048) !== 0) {
            var a = t.lanes;
            a &= e.pendingLanes,
                l |= a,
                t.lanes = l,
                vr(e, l)
        }
    }
    var pn = {
        readContext: Je,
        use: Ri,
        useCallback: je,
        useContext: je,
        useEffect: je,
        useImperativeHandle: je,
        useLayoutEffect: je,
        useInsertionEffect: je,
        useMemo: je,
        useReducer: je,
        useRef: je,
        useState: je,
        useDebugValue: je,
        useDeferredValue: je,
        useTransition: je,
        useSyncExternalStore: je,
        useId: je,
        useHostTransitionStatus: je,
        useFormState: je,
        useActionState: je,
        useOptimistic: je,
        useMemoCache: je,
        useCacheRefresh: je
    };
    pn.useEffectEvent = je;
    var pf = {
        readContext: Je,
        use: Ri,
        useCallback: function (e, t) {
            return tt().memoizedState = [e, t === void 0 ? null : t],
                e
        },
        useContext: Je,
        useEffect: Io,
        useImperativeHandle: function (e, t, l) {
            l = l != null ? l.concat([e]) : null,
                Di(4194308, 4, lf.bind(null, t, e), l)
        },
        useLayoutEffect: function (e, t) {
            return Di(4194308, 4, e, t)
        },
        useInsertionEffect: function (e, t) {
            Di(4, 2, e, t)
        },
        useMemo: function (e, t) {
            var l = tt();
            t = t === void 0 ? null : t;
            var a = e();
            if ($l) {
                rl(!0);
                try {
                    e()
                } finally {
                    rl(!1)
                }
            }
            return l.memoizedState = [a, t],
                a
        },
        useReducer: function (e, t, l) {
            var a = tt();
            if (l !== void 0) {
                var n = l(t);
                if ($l) {
                    rl(!0);
                    try {
                        l(t)
                    } finally {
                        rl(!1)
                    }
                }
            } else
                n = t;
            return a.memoizedState = a.baseState = n,
                e = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: n
                },
                a.queue = e,
                e = e.dispatch = kg.bind(null, te, e),
                [a.memoizedState, e]
        },
        useRef: function (e) {
            var t = tt();
            return e = {
                current: e
            },
                t.memoizedState = e
        },
        useState: function (e) {
            e = Ls(e);
            var t = e.queue
                , l = hf.bind(null, te, t);
            return t.dispatch = l,
                [e.memoizedState, l]
        },
        useDebugValue: qs,
        useDeferredValue: function (e, t) {
            var l = tt();
            return Ys(l, e, t)
        },
        useTransition: function () {
            var e = Ls(!1);
            return e = cf.bind(null, te, e.queue, !0, !1),
                tt().memoizedState = e,
                [!1, e]
        },
        useSyncExternalStore: function (e, t, l) {
            var a = te
                , n = tt();
            if (oe) {
                if (l === void 0)
                    throw Error(r(407));
                l = l()
            } else {
                if (l = t(),
                    Te === null)
                    throw Error(r(349));
                (se & 127) !== 0 || Lo(a, t, l)
            }
            n.memoizedState = l;
            var i = {
                value: l,
                getSnapshot: t
            };
            return n.queue = i,
                Io(Bo.bind(null, a, i, e), [e]),
                a.flags |= 2048,
                Ca(9, {
                    destroy: void 0
                }, Ho.bind(null, a, i, l, t), null),
                l
        },
        useId: function () {
            var e = tt()
                , t = Te.identifierPrefix;
            if (oe) {
                var l = Ht
                    , a = Lt;
                l = (a & ~(1 << 32 - dt(a) - 1)).toString(32) + l,
                    t = "_" + t + "R_" + l,
                    l = Ai++,
                    0 < l && (t += "H" + l.toString(32)),
                    t += "_"
            } else
                l = Yg++,
                    t = "_" + t + "r_" + l.toString(32) + "_";
            return e.memoizedState = t
        },
        useHostTransitionStatus: Vs,
        useFormState: ko,
        useActionState: ko,
        useOptimistic: function (e) {
            var t = tt();
            t.memoizedState = t.baseState = e;
            var l = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: null,
                lastRenderedState: null
            };
            return t.queue = l,
                t = Qs.bind(null, te, !0, l),
                l.dispatch = t,
                [e, t]
        },
        useMemoCache: Ms,
        useCacheRefresh: function () {
            return tt().memoizedState = Zg.bind(null, te)
        },
        useEffectEvent: function (e) {
            var t = tt()
                , l = {
                    impl: e
                };
            return t.memoizedState = l,
                function () {
                    if ((me & 2) !== 0)
                        throw Error(r(440));
                    return l.impl.apply(void 0, arguments)
                }
        }
    }
        , Xs = {
            readContext: Je,
            use: Ri,
            useCallback: nf,
            useContext: Je,
            useEffect: Bs,
            useImperativeHandle: af,
            useInsertionEffect: ef,
            useLayoutEffect: tf,
            useMemo: uf,
            useReducer: ji,
            useRef: Wo,
            useState: function () {
                return ji($t)
            },
            useDebugValue: qs,
            useDeferredValue: function (e, t) {
                var l = Ue();
                return sf(l, be.memoizedState, e, t)
            },
            useTransition: function () {
                var e = ji($t)[0]
                    , t = Ue().memoizedState;
                return [typeof e == "boolean" ? e : mn(e), t]
            },
            useSyncExternalStore: Uo,
            useId: ff,
            useHostTransitionStatus: Vs,
            useFormState: Jo,
            useActionState: Jo,
            useOptimistic: function (e, t) {
                var l = Ue();
                return Go(l, be, e, t)
            },
            useMemoCache: Ms,
            useCacheRefresh: df
        };
    Xs.useEffectEvent = Po;
    var yf = {
        readContext: Je,
        use: Ri,
        useCallback: nf,
        useContext: Je,
        useEffect: Bs,
        useImperativeHandle: af,
        useInsertionEffect: ef,
        useLayoutEffect: tf,
        useMemo: uf,
        useReducer: Us,
        useRef: Wo,
        useState: function () {
            return Us($t)
        },
        useDebugValue: qs,
        useDeferredValue: function (e, t) {
            var l = Ue();
            return be === null ? Ys(l, e, t) : sf(l, be.memoizedState, e, t)
        },
        useTransition: function () {
            var e = Us($t)[0]
                , t = Ue().memoizedState;
            return [typeof e == "boolean" ? e : mn(e), t]
        },
        useSyncExternalStore: Uo,
        useId: ff,
        useHostTransitionStatus: Vs,
        useFormState: $o,
        useActionState: $o,
        useOptimistic: function (e, t) {
            var l = Ue();
            return be !== null ? Go(l, be, e, t) : (l.baseState = e,
                [e, l.queue.dispatch])
        },
        useMemoCache: Ms,
        useCacheRefresh: df
    };
    yf.useEffectEvent = Po;
    function Ks(e, t, l, a) {
        t = e.memoizedState,
            l = l(a, t),
            l = l == null ? t : b({}, t, l),
            e.memoizedState = l,
            e.lanes === 0 && (e.updateQueue.baseState = l)
    }
    var Zs = {
        enqueueSetState: function (e, t, l) {
            e = e._reactInternals;
            var a = xt()
                , n = yl(a);
            n.payload = t,
                l != null && (n.callback = l),
                t = vl(e, n, a),
                t !== null && (rt(t, e, a),
                    on(t, e, a))
        },
        enqueueReplaceState: function (e, t, l) {
            e = e._reactInternals;
            var a = xt()
                , n = yl(a);
            n.tag = 1,
                n.payload = t,
                l != null && (n.callback = l),
                t = vl(e, n, a),
                t !== null && (rt(t, e, a),
                    on(t, e, a))
        },
        enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var l = xt()
                , a = yl(l);
            a.tag = 2,
                t != null && (a.callback = t),
                t = vl(e, a, l),
                t !== null && (rt(t, e, l),
                    on(t, e, l))
        }
    };
    function vf(e, t, l, a, n, i, f) {
        return e = e.stateNode,
            typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, i, f) : t.prototype && t.prototype.isPureReactComponent ? !tn(l, a) || !tn(n, i) : !0
    }
    function xf(e, t, l, a) {
        e = t.state,
            typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(l, a),
            typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(l, a),
            t.state !== e && Zs.enqueueReplaceState(t, t.state, null)
    }
    function Wl(e, t) {
        var l = t;
        if ("ref" in t) {
            l = {};
            for (var a in t)
                a !== "ref" && (l[a] = t[a])
        }
        if (e = e.defaultProps) {
            l === t && (l = b({}, l));
            for (var n in e)
                l[n] === void 0 && (l[n] = e[n])
        }
        return l
    }
    function bf(e) {
        fi(e)
    }
    function Sf(e) {
        console.error(e)
    }
    function Ef(e) {
        fi(e)
    }
    function _i(e, t) {
        try {
            var l = e.onUncaughtError;
            l(t.value, {
                componentStack: t.stack
            })
        } catch (a) {
            setTimeout(function () {
                throw a
            })
        }
    }
    function Tf(e, t, l) {
        try {
            var a = e.onCaughtError;
            a(l.value, {
                componentStack: l.stack,
                errorBoundary: t.tag === 1 ? t.stateNode : null
            })
        } catch (n) {
            setTimeout(function () {
                throw n
            })
        }
    }
    function ks(e, t, l) {
        return l = yl(l),
            l.tag = 3,
            l.payload = {
                element: null
            },
            l.callback = function () {
                _i(e, t)
            }
            ,
            l
    }
    function Nf(e) {
        return e = yl(e),
            e.tag = 3,
            e
    }
    function Cf(e, t, l, a) {
        var n = l.type.getDerivedStateFromError;
        if (typeof n == "function") {
            var i = a.value;
            e.payload = function () {
                return n(i)
            }
                ,
                e.callback = function () {
                    Tf(t, l, a)
                }
        }
        var f = l.stateNode;
        f !== null && typeof f.componentDidCatch == "function" && (e.callback = function () {
            Tf(t, l, a),
                typeof n != "function" && (Nl === null ? Nl = new Set([this]) : Nl.add(this));
            var m = a.stack;
            this.componentDidCatch(a.value, {
                componentStack: m !== null ? m : ""
            })
        }
        )
    }
    function Jg(e, t, l, a, n) {
        if (l.flags |= 32768,
            a !== null && typeof a == "object" && typeof a.then == "function") {
            if (t = l.alternate,
                t !== null && ya(t, l, n, !0),
                l = gt.current,
                l !== null) {
                switch (l.tag) {
                    case 31:
                    case 13:
                        return zt === null ? Zi() : l.alternate === null && De === 0 && (De = 3),
                            l.flags &= -257,
                            l.flags |= 65536,
                            l.lanes = n,
                            a === Si ? l.flags |= 16384 : (t = l.updateQueue,
                                t === null ? l.updateQueue = new Set([a]) : t.add(a),
                                vc(e, a, n)),
                            !1;
                    case 22:
                        return l.flags |= 65536,
                            a === Si ? l.flags |= 16384 : (t = l.updateQueue,
                                t === null ? (t = {
                                    transitions: null,
                                    markerInstances: null,
                                    retryQueue: new Set([a])
                                },
                                    l.updateQueue = t) : (l = t.retryQueue,
                                        l === null ? t.retryQueue = new Set([a]) : l.add(a)),
                                vc(e, a, n)),
                            !1
                }
                throw Error(r(435, l.tag))
            }
            return vc(e, a, n),
                Zi(),
                !1
        }
        if (oe)
            return t = gt.current,
                t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256),
                    t.flags |= 65536,
                    t.lanes = n,
                    a !== ds && (e = Error(r(422), {
                        cause: a
                    }),
                        nn(Nt(e, l)))) : (a !== ds && (t = Error(r(423), {
                            cause: a
                        }),
                            nn(Nt(t, l))),
                            e = e.current.alternate,
                            e.flags |= 65536,
                            n &= -n,
                            e.lanes |= n,
                            a = Nt(a, l),
                            n = ks(e.stateNode, a, n),
                            Ts(e, n),
                            De !== 4 && (De = 2)),
                !1;
        var i = Error(r(520), {
            cause: a
        });
        if (i = Nt(i, l),
            Nn === null ? Nn = [i] : Nn.push(i),
            De !== 4 && (De = 2),
            t === null)
            return !0;
        a = Nt(a, l),
            l = t;
        do {
            switch (l.tag) {
                case 3:
                    return l.flags |= 65536,
                        e = n & -n,
                        l.lanes |= e,
                        e = ks(l.stateNode, a, e),
                        Ts(l, e),
                        !1;
                case 1:
                    if (t = l.type,
                        i = l.stateNode,
                        (l.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (Nl === null || !Nl.has(i))))
                        return l.flags |= 65536,
                            n &= -n,
                            l.lanes |= n,
                            n = Nf(n),
                            Cf(n, e, l, a),
                            Ts(l, n),
                            !1
            }
            l = l.return
        } while (l !== null);
        return !1
    }
    var Js = Error(r(461))
        , Be = !1;
    function Fe(e, t, l, a) {
        t.child = e === null ? zo(t, null, l, a) : Fl(t, e.child, l, a)
    }
    function Of(e, t, l, a, n) {
        l = l.render;
        var i = t.ref;
        if ("ref" in a) {
            var f = {};
            for (var m in a)
                m !== "ref" && (f[m] = a[m])
        } else
            f = a;
        return Kl(t),
            a = Rs(e, t, l, f, i, n),
            m = js(),
            e !== null && !Be ? (Ds(e, t, n),
                Wt(e, t, n)) : (oe && m && os(t),
                    t.flags |= 1,
                    Fe(e, t, a, n),
                    t.child)
    }
    function Af(e, t, l, a, n) {
        if (e === null) {
            var i = l.type;
            return typeof i == "function" && !ss(i) && i.defaultProps === void 0 && l.compare === null ? (t.tag = 15,
                t.type = i,
                zf(e, t, i, a, n)) : (e = gi(l.type, null, a, t, t.mode, n),
                    e.ref = t.ref,
                    e.return = t,
                    t.child = e)
        }
        if (i = e.child,
            !lc(e, n)) {
            var f = i.memoizedProps;
            if (l = l.compare,
                l = l !== null ? l : tn,
                l(f, a) && e.ref === t.ref)
                return Wt(e, t, n)
        }
        return t.flags |= 1,
            e = Kt(i, a),
            e.ref = t.ref,
            e.return = t,
            t.child = e
    }
    function zf(e, t, l, a, n) {
        if (e !== null) {
            var i = e.memoizedProps;
            if (tn(i, a) && e.ref === t.ref)
                if (Be = !1,
                    t.pendingProps = a = i,
                    lc(e, n))
                    (e.flags & 131072) !== 0 && (Be = !0);
                else
                    return t.lanes = e.lanes,
                        Wt(e, t, n)
        }
        return Fs(e, t, l, a, n)
    }
    function Rf(e, t, l, a) {
        var n = a.children
            , i = e !== null ? e.memoizedState : null;
        if (e === null && t.stateNode === null && (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }),
            a.mode === "hidden") {
            if ((t.flags & 128) !== 0) {
                if (i = i !== null ? i.baseLanes | l : l,
                    e !== null) {
                    for (a = t.child = e.child,
                        n = 0; a !== null;)
                        n = n | a.lanes | a.childLanes,
                            a = a.sibling;
                    a = n & ~i
                } else
                    a = 0,
                        t.child = null;
                return jf(e, t, i, l, a)
            }
            if ((l & 536870912) !== 0)
                t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                },
                    e !== null && xi(t, i !== null ? i.cachePool : null),
                    i !== null ? Do(t, i) : Cs(),
                    wo(t);
            else
                return a = t.lanes = 536870912,
                    jf(e, t, i !== null ? i.baseLanes | l : l, l, a)
        } else
            i !== null ? (xi(t, i.cachePool),
                Do(t, i),
                bl(),
                t.memoizedState = null) : (e !== null && xi(t, null),
                    Cs(),
                    bl());
        return Fe(e, t, n, l),
            t.child
    }
    function yn(e, t) {
        return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }),
            t.sibling
    }
    function jf(e, t, l, a, n) {
        var i = xs();
        return i = i === null ? null : {
            parent: Le._currentValue,
            pool: i
        },
            t.memoizedState = {
                baseLanes: l,
                cachePool: i
            },
            e !== null && xi(t, null),
            Cs(),
            wo(t),
            e !== null && ya(e, t, a, !0),
            t.childLanes = n,
            null
    }
    function Ui(e, t) {
        return t = Hi({
            mode: t.mode,
            children: t.children
        }, e.mode),
            t.ref = e.ref,
            e.child = t,
            t.return = e,
            t
    }
    function Df(e, t, l) {
        return Fl(t, e.child, null, l),
            e = Ui(t, t.pendingProps),
            e.flags |= 2,
            pt(t),
            t.memoizedState = null,
            e
    }
    function Fg(e, t, l) {
        var a = t.pendingProps
            , n = (t.flags & 128) !== 0;
        if (t.flags &= -129,
            e === null) {
            if (oe) {
                if (a.mode === "hidden")
                    return e = Ui(t, a),
                        t.lanes = 536870912,
                        yn(null, e);
                if (As(t),
                    (e = Ce) ? (e = Qd(e, At),
                        e = e !== null && e.data === "&" ? e : null,
                        e !== null && (t.memoizedState = {
                            dehydrated: e,
                            treeContext: dl !== null ? {
                                id: Lt,
                                overflow: Ht
                            } : null,
                            retryLane: 536870912,
                            hydrationErrors: null
                        },
                            l = ho(e),
                            l.return = t,
                            t.child = l,
                            ke = t,
                            Ce = null)) : e = null,
                    e === null)
                    throw ml(t);
                return t.lanes = 536870912,
                    null
            }
            return Ui(t, a)
        }
        var i = e.memoizedState;
        if (i !== null) {
            var f = i.dehydrated;
            if (As(t),
                n)
                if (t.flags & 256)
                    t.flags &= -257,
                        t = Df(e, t, l);
                else if (t.memoizedState !== null)
                    t.child = e.child,
                        t.flags |= 128,
                        t = null;
                else
                    throw Error(r(558));
            else if (Be || ya(e, t, l, !1),
                n = (l & e.childLanes) !== 0,
                Be || n) {
                if (a = Te,
                    a !== null && (f = xr(a, l),
                        f !== 0 && f !== i.retryLane))
                    throw i.retryLane = f,
                    Gl(e, f),
                    rt(a, e, f),
                    Js;
                Zi(),
                    t = Df(e, t, l)
            } else
                e = i.treeContext,
                    Ce = Rt(f.nextSibling),
                    ke = t,
                    oe = !0,
                    hl = null,
                    At = !1,
                    e !== null && po(t, e),
                    t = Ui(t, a),
                    t.flags |= 4096;
            return t
        }
        return e = Kt(e.child, {
            mode: a.mode,
            children: a.children
        }),
            e.ref = t.ref,
            t.child = e,
            e.return = t,
            e
    }
    function Li(e, t) {
        var l = t.ref;
        if (l === null)
            e !== null && e.ref !== null && (t.flags |= 4194816);
        else {
            if (typeof l != "function" && typeof l != "object")
                throw Error(r(284));
            (e === null || e.ref !== l) && (t.flags |= 4194816)
        }
    }
    function Fs(e, t, l, a, n) {
        return Kl(t),
            l = Rs(e, t, l, a, void 0, n),
            a = js(),
            e !== null && !Be ? (Ds(e, t, n),
                Wt(e, t, n)) : (oe && a && os(t),
                    t.flags |= 1,
                    Fe(e, t, l, n),
                    t.child)
    }
    function wf(e, t, l, a, n, i) {
        return Kl(t),
            t.updateQueue = null,
            l = _o(t, a, l, n),
            Mo(e),
            a = js(),
            e !== null && !Be ? (Ds(e, t, i),
                Wt(e, t, i)) : (oe && a && os(t),
                    t.flags |= 1,
                    Fe(e, t, l, i),
                    t.child)
    }
    function Mf(e, t, l, a, n) {
        if (Kl(t),
            t.stateNode === null) {
            var i = ha
                , f = l.contextType;
            typeof f == "object" && f !== null && (i = Je(f)),
                i = new l(a, i),
                t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null,
                i.updater = Zs,
                t.stateNode = i,
                i._reactInternals = t,
                i = t.stateNode,
                i.props = a,
                i.state = t.memoizedState,
                i.refs = {},
                Ss(t),
                f = l.contextType,
                i.context = typeof f == "object" && f !== null ? Je(f) : ha,
                i.state = t.memoizedState,
                f = l.getDerivedStateFromProps,
                typeof f == "function" && (Ks(t, l, f, a),
                    i.state = t.memoizedState),
                typeof l.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (f = i.state,
                    typeof i.componentWillMount == "function" && i.componentWillMount(),
                    typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(),
                    f !== i.state && Zs.enqueueReplaceState(i, i.state, null),
                    dn(t, a, i, n),
                    fn(),
                    i.state = t.memoizedState),
                typeof i.componentDidMount == "function" && (t.flags |= 4194308),
                a = !0
        } else if (e === null) {
            i = t.stateNode;
            var m = t.memoizedProps
                , x = Wl(l, m);
            i.props = x;
            var O = i.context
                , w = l.contextType;
            f = ha,
                typeof w == "object" && w !== null && (f = Je(w));
            var L = l.getDerivedStateFromProps;
            w = typeof L == "function" || typeof i.getSnapshotBeforeUpdate == "function",
                m = t.pendingProps !== m,
                w || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (m || O !== f) && xf(t, i, a, f),
                pl = !1;
            var A = t.memoizedState;
            i.state = A,
                dn(t, a, i, n),
                fn(),
                O = t.memoizedState,
                m || A !== O || pl ? (typeof L == "function" && (Ks(t, l, L, a),
                    O = t.memoizedState),
                    (x = pl || vf(t, l, x, a, A, O, f)) ? (w || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(),
                        typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()),
                        typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
                            t.memoizedProps = a,
                            t.memoizedState = O),
                    i.props = a,
                    i.state = O,
                    i.context = f,
                    a = x) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
                        a = !1)
        } else {
            i = t.stateNode,
                Es(e, t),
                f = t.memoizedProps,
                w = Wl(l, f),
                i.props = w,
                L = t.pendingProps,
                A = i.context,
                O = l.contextType,
                x = ha,
                typeof O == "object" && O !== null && (x = Je(O)),
                m = l.getDerivedStateFromProps,
                (O = typeof m == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (f !== L || A !== x) && xf(t, i, a, x),
                pl = !1,
                A = t.memoizedState,
                i.state = A,
                dn(t, a, i, n),
                fn();
            var R = t.memoizedState;
            f !== L || A !== R || pl || e !== null && e.dependencies !== null && yi(e.dependencies) ? (typeof m == "function" && (Ks(t, l, m, a),
                R = t.memoizedState),
                (w = pl || vf(t, l, w, a, A, R, x) || e !== null && e.dependencies !== null && yi(e.dependencies)) ? (O || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(a, R, x),
                    typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(a, R, x)),
                    typeof i.componentDidUpdate == "function" && (t.flags |= 4),
                    typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || f === e.memoizedProps && A === e.memoizedState || (t.flags |= 4),
                        typeof i.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && A === e.memoizedState || (t.flags |= 1024),
                        t.memoizedProps = a,
                        t.memoizedState = R),
                i.props = a,
                i.state = R,
                i.context = x,
                a = w) : (typeof i.componentDidUpdate != "function" || f === e.memoizedProps && A === e.memoizedState || (t.flags |= 4),
                    typeof i.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && A === e.memoizedState || (t.flags |= 1024),
                    a = !1)
        }
        return i = a,
            Li(e, t),
            a = (t.flags & 128) !== 0,
            i || a ? (i = t.stateNode,
                l = a && typeof l.getDerivedStateFromError != "function" ? null : i.render(),
                t.flags |= 1,
                e !== null && a ? (t.child = Fl(t, e.child, null, n),
                    t.child = Fl(t, null, l, n)) : Fe(e, t, l, n),
                t.memoizedState = i.state,
                e = t.child) : e = Wt(e, t, n),
            e
    }
    function _f(e, t, l, a) {
        return Ql(),
            t.flags |= 256,
            Fe(e, t, l, a),
            t.child
    }
    var $s = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };
    function Ws(e) {
        return {
            baseLanes: e,
            cachePool: Eo()
        }
    }
    function Is(e, t, l) {
        return e = e !== null ? e.childLanes & ~l : 0,
            t && (e |= vt),
            e
    }
    function Uf(e, t, l) {
        var a = t.pendingProps, n = !1, i = (t.flags & 128) !== 0, f;
        if ((f = i) || (f = e !== null && e.memoizedState === null ? !1 : (_e.current & 2) !== 0),
            f && (n = !0,
                t.flags &= -129),
            f = (t.flags & 32) !== 0,
            t.flags &= -33,
            e === null) {
            if (oe) {
                if (n ? xl(t) : bl(),
                    (e = Ce) ? (e = Qd(e, At),
                        e = e !== null && e.data !== "&" ? e : null,
                        e !== null && (t.memoizedState = {
                            dehydrated: e,
                            treeContext: dl !== null ? {
                                id: Lt,
                                overflow: Ht
                            } : null,
                            retryLane: 536870912,
                            hydrationErrors: null
                        },
                            l = ho(e),
                            l.return = t,
                            t.child = l,
                            ke = t,
                            Ce = null)) : e = null,
                    e === null)
                    throw ml(t);
                return _c(e) ? t.lanes = 32 : t.lanes = 536870912,
                    null
            }
            var m = a.children;
            return a = a.fallback,
                n ? (bl(),
                    n = t.mode,
                    m = Hi({
                        mode: "hidden",
                        children: m
                    }, n),
                    a = Vl(a, n, l, null),
                    m.return = t,
                    a.return = t,
                    m.sibling = a,
                    t.child = m,
                    a = t.child,
                    a.memoizedState = Ws(l),
                    a.childLanes = Is(e, f, l),
                    t.memoizedState = $s,
                    yn(null, a)) : (xl(t),
                        Ps(t, m))
        }
        var x = e.memoizedState;
        if (x !== null && (m = x.dehydrated,
            m !== null)) {
            if (i)
                t.flags & 256 ? (xl(t),
                    t.flags &= -257,
                    t = ec(e, t, l)) : t.memoizedState !== null ? (bl(),
                        t.child = e.child,
                        t.flags |= 128,
                        t = null) : (bl(),
                            m = a.fallback,
                            n = t.mode,
                            a = Hi({
                                mode: "visible",
                                children: a.children
                            }, n),
                            m = Vl(m, n, l, null),
                            m.flags |= 2,
                            a.return = t,
                            m.return = t,
                            a.sibling = m,
                            t.child = a,
                            Fl(t, e.child, null, l),
                            a = t.child,
                            a.memoizedState = Ws(l),
                            a.childLanes = Is(e, f, l),
                            t.memoizedState = $s,
                            t = yn(null, a));
            else if (xl(t),
                _c(m)) {
                if (f = m.nextSibling && m.nextSibling.dataset,
                    f)
                    var O = f.dgst;
                f = O,
                    a = Error(r(419)),
                    a.stack = "",
                    a.digest = f,
                    nn({
                        value: a,
                        source: null,
                        stack: null
                    }),
                    t = ec(e, t, l)
            } else if (Be || ya(e, t, l, !1),
                f = (l & e.childLanes) !== 0,
                Be || f) {
                if (f = Te,
                    f !== null && (a = xr(f, l),
                        a !== 0 && a !== x.retryLane))
                    throw x.retryLane = a,
                    Gl(e, a),
                    rt(f, e, a),
                    Js;
                Mc(m) || Zi(),
                    t = ec(e, t, l)
            } else
                Mc(m) ? (t.flags |= 192,
                    t.child = e.child,
                    t = null) : (e = x.treeContext,
                        Ce = Rt(m.nextSibling),
                        ke = t,
                        oe = !0,
                        hl = null,
                        At = !1,
                        e !== null && po(t, e),
                        t = Ps(t, a.children),
                        t.flags |= 4096);
            return t
        }
        return n ? (bl(),
            m = a.fallback,
            n = t.mode,
            x = e.child,
            O = x.sibling,
            a = Kt(x, {
                mode: "hidden",
                children: a.children
            }),
            a.subtreeFlags = x.subtreeFlags & 65011712,
            O !== null ? m = Kt(O, m) : (m = Vl(m, n, l, null),
                m.flags |= 2),
            m.return = t,
            a.return = t,
            a.sibling = m,
            t.child = a,
            yn(null, a),
            a = t.child,
            m = e.child.memoizedState,
            m === null ? m = Ws(l) : (n = m.cachePool,
                n !== null ? (x = Le._currentValue,
                    n = n.parent !== x ? {
                        parent: x,
                        pool: x
                    } : n) : n = Eo(),
                m = {
                    baseLanes: m.baseLanes | l,
                    cachePool: n
                }),
            a.memoizedState = m,
            a.childLanes = Is(e, f, l),
            t.memoizedState = $s,
            yn(e.child, a)) : (xl(t),
                l = e.child,
                e = l.sibling,
                l = Kt(l, {
                    mode: "visible",
                    children: a.children
                }),
                l.return = t,
                l.sibling = null,
                e !== null && (f = t.deletions,
                    f === null ? (t.deletions = [e],
                        t.flags |= 16) : f.push(e)),
                t.child = l,
                t.memoizedState = null,
                l)
    }
    function Ps(e, t) {
        return t = Hi({
            mode: "visible",
            children: t
        }, e.mode),
            t.return = e,
            e.child = t
    }
    function Hi(e, t) {
        return e = mt(22, e, null, t),
            e.lanes = 0,
            e
    }
    function ec(e, t, l) {
        return Fl(t, e.child, null, l),
            e = Ps(t, t.pendingProps.children),
            e.flags |= 2,
            t.memoizedState = null,
            e
    }
    function Lf(e, t, l) {
        e.lanes |= t;
        var a = e.alternate;
        a !== null && (a.lanes |= t),
            gs(e.return, t, l)
    }
    function tc(e, t, l, a, n, i) {
        var f = e.memoizedState;
        f === null ? e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: a,
            tail: l,
            tailMode: n,
            treeForkCount: i
        } : (f.isBackwards = t,
            f.rendering = null,
            f.renderingStartTime = 0,
            f.last = a,
            f.tail = l,
            f.tailMode = n,
            f.treeForkCount = i)
    }
    function Hf(e, t, l) {
        var a = t.pendingProps
            , n = a.revealOrder
            , i = a.tail;
        a = a.children;
        var f = _e.current
            , m = (f & 2) !== 0;
        if (m ? (f = f & 1 | 2,
            t.flags |= 128) : f &= 1,
            G(_e, f),
            Fe(e, t, a, l),
            a = oe ? an : 0,
            !m && e !== null && (e.flags & 128) !== 0)
            e: for (e = t.child; e !== null;) {
                if (e.tag === 13)
                    e.memoizedState !== null && Lf(e, l, t);
                else if (e.tag === 19)
                    Lf(e, l, t);
                else if (e.child !== null) {
                    e.child.return = e,
                        e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null;) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                    e = e.sibling
            }
        switch (n) {
            case "forwards":
                for (l = t.child,
                    n = null; l !== null;)
                    e = l.alternate,
                        e !== null && Ci(e) === null && (n = l),
                        l = l.sibling;
                l = n,
                    l === null ? (n = t.child,
                        t.child = null) : (n = l.sibling,
                            l.sibling = null),
                    tc(t, !1, n, l, i, a);
                break;
            case "backwards":
            case "unstable_legacy-backwards":
                for (l = null,
                    n = t.child,
                    t.child = null; n !== null;) {
                    if (e = n.alternate,
                        e !== null && Ci(e) === null) {
                        t.child = n;
                        break
                    }
                    e = n.sibling,
                        n.sibling = l,
                        l = n,
                        n = e
                }
                tc(t, !0, l, null, i, a);
                break;
            case "together":
                tc(t, !1, null, null, void 0, a);
                break;
            default:
                t.memoizedState = null
        }
        return t.child
    }
    function Wt(e, t, l) {
        if (e !== null && (t.dependencies = e.dependencies),
            Tl |= t.lanes,
            (l & t.childLanes) === 0)
            if (e !== null) {
                if (ya(e, t, l, !1),
                    (l & t.childLanes) === 0)
                    return null
            } else
                return null;
        if (e !== null && t.child !== e.child)
            throw Error(r(153));
        if (t.child !== null) {
            for (e = t.child,
                l = Kt(e, e.pendingProps),
                t.child = l,
                l.return = t; e.sibling !== null;)
                e = e.sibling,
                    l = l.sibling = Kt(e, e.pendingProps),
                    l.return = t;
            l.sibling = null
        }
        return t.child
    }
    function lc(e, t) {
        return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies,
            !!(e !== null && yi(e)))
    }
    function $g(e, t, l) {
        switch (t.tag) {
            case 3:
                et(t, t.stateNode.containerInfo),
                    gl(t, Le, e.memoizedState.cache),
                    Ql();
                break;
            case 27:
            case 5:
                Va(t);
                break;
            case 4:
                et(t, t.stateNode.containerInfo);
                break;
            case 10:
                gl(t, t.type, t.memoizedProps.value);
                break;
            case 31:
                if (t.memoizedState !== null)
                    return t.flags |= 128,
                        As(t),
                        null;
                break;
            case 13:
                var a = t.memoizedState;
                if (a !== null)
                    return a.dehydrated !== null ? (xl(t),
                        t.flags |= 128,
                        null) : (l & t.child.childLanes) !== 0 ? Uf(e, t, l) : (xl(t),
                            e = Wt(e, t, l),
                            e !== null ? e.sibling : null);
                xl(t);
                break;
            case 19:
                var n = (e.flags & 128) !== 0;
                if (a = (l & t.childLanes) !== 0,
                    a || (ya(e, t, l, !1),
                        a = (l & t.childLanes) !== 0),
                    n) {
                    if (a)
                        return Hf(e, t, l);
                    t.flags |= 128
                }
                if (n = t.memoizedState,
                    n !== null && (n.rendering = null,
                        n.tail = null,
                        n.lastEffect = null),
                    G(_e, _e.current),
                    a)
                    break;
                return null;
            case 22:
                return t.lanes = 0,
                    Rf(e, t, l, t.pendingProps);
            case 24:
                gl(t, Le, e.memoizedState.cache)
        }
        return Wt(e, t, l)
    }
    function Bf(e, t, l) {
        if (e !== null)
            if (e.memoizedProps !== t.pendingProps)
                Be = !0;
            else {
                if (!lc(e, l) && (t.flags & 128) === 0)
                    return Be = !1,
                        $g(e, t, l);
                Be = (e.flags & 131072) !== 0
            }
        else
            Be = !1,
                oe && (t.flags & 1048576) !== 0 && go(t, an, t.index);
        switch (t.lanes = 0,
        t.tag) {
            case 16:
                e: {
                    var a = t.pendingProps;
                    if (e = kl(t.elementType),
                        t.type = e,
                        typeof e == "function")
                        ss(e) ? (a = Wl(e, a),
                            t.tag = 1,
                            t = Mf(null, t, e, a, l)) : (t.tag = 0,
                                t = Fs(null, t, e, a, l));
                    else {
                        if (e != null) {
                            var n = e.$$typeof;
                            if (n === ae) {
                                t.tag = 11,
                                    t = Of(null, t, e, a, l);
                                break e
                            } else if (n === W) {
                                t.tag = 14,
                                    t = Af(null, t, e, a, l);
                                break e
                            }
                        }
                        throw t = we(e) || e,
                        Error(r(306, t, ""))
                    }
                }
                return t;
            case 0:
                return Fs(e, t, t.type, t.pendingProps, l);
            case 1:
                return a = t.type,
                    n = Wl(a, t.pendingProps),
                    Mf(e, t, a, n, l);
            case 3:
                e: {
                    if (et(t, t.stateNode.containerInfo),
                        e === null)
                        throw Error(r(387));
                    a = t.pendingProps;
                    var i = t.memoizedState;
                    n = i.element,
                        Es(e, t),
                        dn(t, a, null, l);
                    var f = t.memoizedState;
                    if (a = f.cache,
                        gl(t, Le, a),
                        a !== i.cache && ps(t, [Le], l, !0),
                        fn(),
                        a = f.element,
                        i.isDehydrated)
                        if (i = {
                            element: a,
                            isDehydrated: !1,
                            cache: f.cache
                        },
                            t.updateQueue.baseState = i,
                            t.memoizedState = i,
                            t.flags & 256) {
                            t = _f(e, t, a, l);
                            break e
                        } else if (a !== n) {
                            n = Nt(Error(r(424)), t),
                                nn(n),
                                t = _f(e, t, a, l);
                            break e
                        } else
                            for (e = t.stateNode.containerInfo,
                                e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e,
                                Ce = Rt(e.firstChild),
                                ke = t,
                                oe = !0,
                                hl = null,
                                At = !0,
                                l = zo(t, null, a, l),
                                t.child = l; l;)
                                l.flags = l.flags & -3 | 4096,
                                    l = l.sibling;
                    else {
                        if (Ql(),
                            a === n) {
                            t = Wt(e, t, l);
                            break e
                        }
                        Fe(e, t, a, l)
                    }
                    t = t.child
                }
                return t;
            case 26:
                return Li(e, t),
                    e === null ? (l = Fd(t.type, null, t.pendingProps, null)) ? t.memoizedState = l : oe || (l = t.type,
                        e = t.pendingProps,
                        a = Pi(ne.current).createElement(l),
                        a[Ze] = t,
                        a[at] = e,
                        $e(a, l, e),
                        Qe(a),
                        t.stateNode = a) : t.memoizedState = Fd(t.type, e.memoizedProps, t.pendingProps, e.memoizedState),
                    null;
            case 27:
                return Va(t),
                    e === null && oe && (a = t.stateNode = Zd(t.type, t.pendingProps, ne.current),
                        ke = t,
                        At = !0,
                        n = Ce,
                        zl(t.type) ? (Uc = n,
                            Ce = Rt(a.firstChild)) : Ce = n),
                    Fe(e, t, t.pendingProps.children, l),
                    Li(e, t),
                    e === null && (t.flags |= 4194304),
                    t.child;
            case 5:
                return e === null && oe && ((n = a = Ce) && (a = Op(a, t.type, t.pendingProps, At),
                    a !== null ? (t.stateNode = a,
                        ke = t,
                        Ce = Rt(a.firstChild),
                        At = !1,
                        n = !0) : n = !1),
                    n || ml(t)),
                    Va(t),
                    n = t.type,
                    i = t.pendingProps,
                    f = e !== null ? e.memoizedProps : null,
                    a = i.children,
                    jc(n, i) ? a = null : f !== null && jc(n, f) && (t.flags |= 32),
                    t.memoizedState !== null && (n = Rs(e, t, Gg, null, null, l),
                        wn._currentValue = n),
                    Li(e, t),
                    Fe(e, t, a, l),
                    t.child;
            case 6:
                return e === null && oe && ((e = l = Ce) && (l = Ap(l, t.pendingProps, At),
                    l !== null ? (t.stateNode = l,
                        ke = t,
                        Ce = null,
                        e = !0) : e = !1),
                    e || ml(t)),
                    null;
            case 13:
                return Uf(e, t, l);
            case 4:
                return et(t, t.stateNode.containerInfo),
                    a = t.pendingProps,
                    e === null ? t.child = Fl(t, null, a, l) : Fe(e, t, a, l),
                    t.child;
            case 11:
                return Of(e, t, t.type, t.pendingProps, l);
            case 7:
                return Fe(e, t, t.pendingProps, l),
                    t.child;
            case 8:
                return Fe(e, t, t.pendingProps.children, l),
                    t.child;
            case 12:
                return Fe(e, t, t.pendingProps.children, l),
                    t.child;
            case 10:
                return a = t.pendingProps,
                    gl(t, t.type, a.value),
                    Fe(e, t, a.children, l),
                    t.child;
            case 9:
                return n = t.type._context,
                    a = t.pendingProps.children,
                    Kl(t),
                    n = Je(n),
                    a = a(n),
                    t.flags |= 1,
                    Fe(e, t, a, l),
                    t.child;
            case 14:
                return Af(e, t, t.type, t.pendingProps, l);
            case 15:
                return zf(e, t, t.type, t.pendingProps, l);
            case 19:
                return Hf(e, t, l);
            case 31:
                return Fg(e, t, l);
            case 22:
                return Rf(e, t, l, t.pendingProps);
            case 24:
                return Kl(t),
                    a = Je(Le),
                    e === null ? (n = xs(),
                        n === null && (n = Te,
                            i = ys(),
                            n.pooledCache = i,
                            i.refCount++,
                            i !== null && (n.pooledCacheLanes |= l),
                            n = i),
                        t.memoizedState = {
                            parent: a,
                            cache: n
                        },
                        Ss(t),
                        gl(t, Le, n)) : ((e.lanes & l) !== 0 && (Es(e, t),
                            dn(t, null, null, l),
                            fn()),
                            n = e.memoizedState,
                            i = t.memoizedState,
                            n.parent !== a ? (n = {
                                parent: a,
                                cache: a
                            },
                                t.memoizedState = n,
                                t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = n),
                                gl(t, Le, a)) : (a = i.cache,
                                    gl(t, Le, a),
                                    a !== n.cache && ps(t, [Le], l, !0))),
                    Fe(e, t, t.pendingProps.children, l),
                    t.child;
            case 29:
                throw t.pendingProps
        }
        throw Error(r(156, t.tag))
    }
    function It(e) {
        e.flags |= 4
    }
    function ac(e, t, l, a, n) {
        if ((t = (e.mode & 32) !== 0) && (t = !1),
            t) {
            if (e.flags |= 16777216,
                (n & 335544128) === n)
                if (e.stateNode.complete)
                    e.flags |= 8192;
                else if (fd())
                    e.flags |= 8192;
                else
                    throw Jl = Si,
                    bs
        } else
            e.flags &= -16777217
    }
    function qf(e, t) {
        if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
            e.flags &= -16777217;
        else if (e.flags |= 16777216,
            !eh(t))
            if (fd())
                e.flags |= 8192;
            else
                throw Jl = Si,
                bs
    }
    function Bi(e, t) {
        t !== null && (e.flags |= 4),
            e.flags & 16384 && (t = e.tag !== 22 ? pr() : 536870912,
                e.lanes |= t,
                Ra |= t)
    }
    function vn(e, t) {
        if (!oe)
            switch (e.tailMode) {
                case "hidden":
                    t = e.tail;
                    for (var l = null; t !== null;)
                        t.alternate !== null && (l = t),
                            t = t.sibling;
                    l === null ? e.tail = null : l.sibling = null;
                    break;
                case "collapsed":
                    l = e.tail;
                    for (var a = null; l !== null;)
                        l.alternate !== null && (a = l),
                            l = l.sibling;
                    a === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : a.sibling = null
            }
    }
    function Oe(e) {
        var t = e.alternate !== null && e.alternate.child === e.child
            , l = 0
            , a = 0;
        if (t)
            for (var n = e.child; n !== null;)
                l |= n.lanes | n.childLanes,
                    a |= n.subtreeFlags & 65011712,
                    a |= n.flags & 65011712,
                    n.return = e,
                    n = n.sibling;
        else
            for (n = e.child; n !== null;)
                l |= n.lanes | n.childLanes,
                    a |= n.subtreeFlags,
                    a |= n.flags,
                    n.return = e,
                    n = n.sibling;
        return e.subtreeFlags |= a,
            e.childLanes = l,
            t
    }
    function Wg(e, t, l) {
        var a = t.pendingProps;
        switch (fs(t),
        t.tag) {
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return Oe(t),
                    null;
            case 1:
                return Oe(t),
                    null;
            case 3:
                return l = t.stateNode,
                    a = null,
                    e !== null && (a = e.memoizedState.cache),
                    t.memoizedState.cache !== a && (t.flags |= 2048),
                    Jt(Le),
                    Me(),
                    l.pendingContext && (l.context = l.pendingContext,
                        l.pendingContext = null),
                    (e === null || e.child === null) && (pa(t) ? It(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024,
                        hs())),
                    Oe(t),
                    null;
            case 26:
                var n = t.type
                    , i = t.memoizedState;
                return e === null ? (It(t),
                    i !== null ? (Oe(t),
                        qf(t, i)) : (Oe(t),
                            ac(t, n, null, a, l))) : i ? i !== e.memoizedState ? (It(t),
                                Oe(t),
                                qf(t, i)) : (Oe(t),
                                    t.flags &= -16777217) : (e = e.memoizedProps,
                                        e !== a && It(t),
                                        Oe(t),
                                        ac(t, n, e, a, l)),
                    null;
            case 27:
                if (Fn(t),
                    l = ne.current,
                    n = t.type,
                    e !== null && t.stateNode != null)
                    e.memoizedProps !== a && It(t);
                else {
                    if (!a) {
                        if (t.stateNode === null)
                            throw Error(r(166));
                        return Oe(t),
                            null
                    }
                    e = Q.current,
                        pa(t) ? yo(t) : (e = Zd(n, a, l),
                            t.stateNode = e,
                            It(t))
                }
                return Oe(t),
                    null;
            case 5:
                if (Fn(t),
                    n = t.type,
                    e !== null && t.stateNode != null)
                    e.memoizedProps !== a && It(t);
                else {
                    if (!a) {
                        if (t.stateNode === null)
                            throw Error(r(166));
                        return Oe(t),
                            null
                    }
                    if (i = Q.current,
                        pa(t))
                        yo(t);
                    else {
                        var f = Pi(ne.current);
                        switch (i) {
                            case 1:
                                i = f.createElementNS("http://www.w3.org/2000/svg", n);
                                break;
                            case 2:
                                i = f.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                                break;
                            default:
                                switch (n) {
                                    case "svg":
                                        i = f.createElementNS("http://www.w3.org/2000/svg", n);
                                        break;
                                    case "math":
                                        i = f.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                                        break;
                                    case "script":
                                        i = f.createElement("div"),
                                            i.innerHTML = "<script><\/script>",
                                            i = i.removeChild(i.firstChild);
                                        break;
                                    case "select":
                                        i = typeof a.is == "string" ? f.createElement("select", {
                                            is: a.is
                                        }) : f.createElement("select"),
                                            a.multiple ? i.multiple = !0 : a.size && (i.size = a.size);
                                        break;
                                    default:
                                        i = typeof a.is == "string" ? f.createElement(n, {
                                            is: a.is
                                        }) : f.createElement(n)
                                }
                        }
                        i[Ze] = t,
                            i[at] = a;
                        e: for (f = t.child; f !== null;) {
                            if (f.tag === 5 || f.tag === 6)
                                i.appendChild(f.stateNode);
                            else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                                f.child.return = f,
                                    f = f.child;
                                continue
                            }
                            if (f === t)
                                break e;
                            for (; f.sibling === null;) {
                                if (f.return === null || f.return === t)
                                    break e;
                                f = f.return
                            }
                            f.sibling.return = f.return,
                                f = f.sibling
                        }
                        t.stateNode = i;
                        e: switch ($e(i, n, a),
                        n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                a = !!a.autoFocus;
                                break e;
                            case "img":
                                a = !0;
                                break e;
                            default:
                                a = !1
                        }
                        a && It(t)
                    }
                }
                return Oe(t),
                    ac(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, l),
                    null;
            case 6:
                if (e && t.stateNode != null)
                    e.memoizedProps !== a && It(t);
                else {
                    if (typeof a != "string" && t.stateNode === null)
                        throw Error(r(166));
                    if (e = ne.current,
                        pa(t)) {
                        if (e = t.stateNode,
                            l = t.memoizedProps,
                            a = null,
                            n = ke,
                            n !== null)
                            switch (n.tag) {
                                case 27:
                                case 5:
                                    a = n.memoizedProps
                            }
                        e[Ze] = t,
                            e = !!(e.nodeValue === l || a !== null && a.suppressHydrationWarning === !0 || Ud(e.nodeValue, l)),
                            e || ml(t, !0)
                    } else
                        e = Pi(e).createTextNode(a),
                            e[Ze] = t,
                            t.stateNode = e
                }
                return Oe(t),
                    null;
            case 31:
                if (l = t.memoizedState,
                    e === null || e.memoizedState !== null) {
                    if (a = pa(t),
                        l !== null) {
                        if (e === null) {
                            if (!a)
                                throw Error(r(318));
                            if (e = t.memoizedState,
                                e = e !== null ? e.dehydrated : null,
                                !e)
                                throw Error(r(557));
                            e[Ze] = t
                        } else
                            Ql(),
                                (t.flags & 128) === 0 && (t.memoizedState = null),
                                t.flags |= 4;
                        Oe(t),
                            e = !1
                    } else
                        l = hs(),
                            e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l),
                            e = !0;
                    if (!e)
                        return t.flags & 256 ? (pt(t),
                            t) : (pt(t),
                                null);
                    if ((t.flags & 128) !== 0)
                        throw Error(r(558))
                }
                return Oe(t),
                    null;
            case 13:
                if (a = t.memoizedState,
                    e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                    if (n = pa(t),
                        a !== null && a.dehydrated !== null) {
                        if (e === null) {
                            if (!n)
                                throw Error(r(318));
                            if (n = t.memoizedState,
                                n = n !== null ? n.dehydrated : null,
                                !n)
                                throw Error(r(317));
                            n[Ze] = t
                        } else
                            Ql(),
                                (t.flags & 128) === 0 && (t.memoizedState = null),
                                t.flags |= 4;
                        Oe(t),
                            n = !1
                    } else
                        n = hs(),
                            e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n),
                            n = !0;
                    if (!n)
                        return t.flags & 256 ? (pt(t),
                            t) : (pt(t),
                                null)
                }
                return pt(t),
                    (t.flags & 128) !== 0 ? (t.lanes = l,
                        t) : (l = a !== null,
                            e = e !== null && e.memoizedState !== null,
                            l && (a = t.child,
                                n = null,
                                a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool),
                                i = null,
                                a.memoizedState !== null && a.memoizedState.cachePool !== null && (i = a.memoizedState.cachePool.pool),
                                i !== n && (a.flags |= 2048)),
                            l !== e && l && (t.child.flags |= 8192),
                            Bi(t, t.updateQueue),
                            Oe(t),
                            null);
            case 4:
                return Me(),
                    e === null && Cc(t.stateNode.containerInfo),
                    Oe(t),
                    null;
            case 10:
                return Jt(t.type),
                    Oe(t),
                    null;
            case 19:
                if (_(_e),
                    a = t.memoizedState,
                    a === null)
                    return Oe(t),
                        null;
                if (n = (t.flags & 128) !== 0,
                    i = a.rendering,
                    i === null)
                    if (n)
                        vn(a, !1);
                    else {
                        if (De !== 0 || e !== null && (e.flags & 128) !== 0)
                            for (e = t.child; e !== null;) {
                                if (i = Ci(e),
                                    i !== null) {
                                    for (t.flags |= 128,
                                        vn(a, !1),
                                        e = i.updateQueue,
                                        t.updateQueue = e,
                                        Bi(t, e),
                                        t.subtreeFlags = 0,
                                        e = l,
                                        l = t.child; l !== null;)
                                        fo(l, e),
                                            l = l.sibling;
                                    return G(_e, _e.current & 1 | 2),
                                        oe && Zt(t, a.treeForkCount),
                                        t.child
                                }
                                e = e.sibling
                            }
                        a.tail !== null && ot() > Qi && (t.flags |= 128,
                            n = !0,
                            vn(a, !1),
                            t.lanes = 4194304)
                    }
                else {
                    if (!n)
                        if (e = Ci(i),
                            e !== null) {
                            if (t.flags |= 128,
                                n = !0,
                                e = e.updateQueue,
                                t.updateQueue = e,
                                Bi(t, e),
                                vn(a, !0),
                                a.tail === null && a.tailMode === "hidden" && !i.alternate && !oe)
                                return Oe(t),
                                    null
                        } else
                            2 * ot() - a.renderingStartTime > Qi && l !== 536870912 && (t.flags |= 128,
                                n = !0,
                                vn(a, !1),
                                t.lanes = 4194304);
                    a.isBackwards ? (i.sibling = t.child,
                        t.child = i) : (e = a.last,
                            e !== null ? e.sibling = i : t.child = i,
                            a.last = i)
                }
                return a.tail !== null ? (e = a.tail,
                    a.rendering = e,
                    a.tail = e.sibling,
                    a.renderingStartTime = ot(),
                    e.sibling = null,
                    l = _e.current,
                    G(_e, n ? l & 1 | 2 : l & 1),
                    oe && Zt(t, a.treeForkCount),
                    e) : (Oe(t),
                        null);
            case 22:
            case 23:
                return pt(t),
                    Os(),
                    a = t.memoizedState !== null,
                    e !== null ? e.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192),
                    a ? (l & 536870912) !== 0 && (t.flags & 128) === 0 && (Oe(t),
                        t.subtreeFlags & 6 && (t.flags |= 8192)) : Oe(t),
                    l = t.updateQueue,
                    l !== null && Bi(t, l.retryQueue),
                    l = null,
                    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool),
                    a = null,
                    t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool),
                    a !== l && (t.flags |= 2048),
                    e !== null && _(Zl),
                    null;
            case 24:
                return l = null,
                    e !== null && (l = e.memoizedState.cache),
                    t.memoizedState.cache !== l && (t.flags |= 2048),
                    Jt(Le),
                    Oe(t),
                    null;
            case 25:
                return null;
            case 30:
                return null
        }
        throw Error(r(156, t.tag))
    }
    function Ig(e, t) {
        switch (fs(t),
        t.tag) {
            case 1:
                return e = t.flags,
                    e & 65536 ? (t.flags = e & -65537 | 128,
                        t) : null;
            case 3:
                return Jt(Le),
                    Me(),
                    e = t.flags,
                    (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128,
                        t) : null;
            case 26:
            case 27:
            case 5:
                return Fn(t),
                    null;
            case 31:
                if (t.memoizedState !== null) {
                    if (pt(t),
                        t.alternate === null)
                        throw Error(r(340));
                    Ql()
                }
                return e = t.flags,
                    e & 65536 ? (t.flags = e & -65537 | 128,
                        t) : null;
            case 13:
                if (pt(t),
                    e = t.memoizedState,
                    e !== null && e.dehydrated !== null) {
                    if (t.alternate === null)
                        throw Error(r(340));
                    Ql()
                }
                return e = t.flags,
                    e & 65536 ? (t.flags = e & -65537 | 128,
                        t) : null;
            case 19:
                return _(_e),
                    null;
            case 4:
                return Me(),
                    null;
            case 10:
                return Jt(t.type),
                    null;
            case 22:
            case 23:
                return pt(t),
                    Os(),
                    e !== null && _(Zl),
                    e = t.flags,
                    e & 65536 ? (t.flags = e & -65537 | 128,
                        t) : null;
            case 24:
                return Jt(Le),
                    null;
            case 25:
                return null;
            default:
                return null
        }
    }
    function Yf(e, t) {
        switch (fs(t),
        t.tag) {
            case 3:
                Jt(Le),
                    Me();
                break;
            case 26:
            case 27:
            case 5:
                Fn(t);
                break;
            case 4:
                Me();
                break;
            case 31:
                t.memoizedState !== null && pt(t);
                break;
            case 13:
                pt(t);
                break;
            case 19:
                _(_e);
                break;
            case 10:
                Jt(t.type);
                break;
            case 22:
            case 23:
                pt(t),
                    Os(),
                    e !== null && _(Zl);
                break;
            case 24:
                Jt(Le)
        }
    }
    function xn(e, t) {
        try {
            var l = t.updateQueue
                , a = l !== null ? l.lastEffect : null;
            if (a !== null) {
                var n = a.next;
                l = n;
                do {
                    if ((l.tag & e) === e) {
                        a = void 0;
                        var i = l.create
                            , f = l.inst;
                        a = i(),
                            f.destroy = a
                    }
                    l = l.next
                } while (l !== n)
            }
        } catch (m) {
            xe(t, t.return, m)
        }
    }
    function Sl(e, t, l) {
        try {
            var a = t.updateQueue
                , n = a !== null ? a.lastEffect : null;
            if (n !== null) {
                var i = n.next;
                a = i;
                do {
                    if ((a.tag & e) === e) {
                        var f = a.inst
                            , m = f.destroy;
                        if (m !== void 0) {
                            f.destroy = void 0,
                                n = t;
                            var x = l
                                , O = m;
                            try {
                                O()
                            } catch (w) {
                                xe(n, x, w)
                            }
                        }
                    }
                    a = a.next
                } while (a !== i)
            }
        } catch (w) {
            xe(t, t.return, w)
        }
    }
    function Gf(e) {
        var t = e.updateQueue;
        if (t !== null) {
            var l = e.stateNode;
            try {
                jo(t, l)
            } catch (a) {
                xe(e, e.return, a)
            }
        }
    }
    function Vf(e, t, l) {
        l.props = Wl(e.type, e.memoizedProps),
            l.state = e.memoizedState;
        try {
            l.componentWillUnmount()
        } catch (a) {
            xe(e, t, a)
        }
    }
    function bn(e, t) {
        try {
            var l = e.ref;
            if (l !== null) {
                switch (e.tag) {
                    case 26:
                    case 27:
                    case 5:
                        var a = e.stateNode;
                        break;
                    case 30:
                        a = e.stateNode;
                        break;
                    default:
                        a = e.stateNode
                }
                typeof l == "function" ? e.refCleanup = l(a) : l.current = a
            }
        } catch (n) {
            xe(e, t, n)
        }
    }
    function Bt(e, t) {
        var l = e.ref
            , a = e.refCleanup;
        if (l !== null)
            if (typeof a == "function")
                try {
                    a()
                } catch (n) {
                    xe(e, t, n)
                } finally {
                    e.refCleanup = null,
                        e = e.alternate,
                        e != null && (e.refCleanup = null)
                }
            else if (typeof l == "function")
                try {
                    l(null)
                } catch (n) {
                    xe(e, t, n)
                }
            else
                l.current = null
    }
    function Qf(e) {
        var t = e.type
            , l = e.memoizedProps
            , a = e.stateNode;
        try {
            e: switch (t) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                    l.autoFocus && a.focus();
                    break e;
                case "img":
                    l.src ? a.src = l.src : l.srcSet && (a.srcset = l.srcSet)
            }
        } catch (n) {
            xe(e, e.return, n)
        }
    }
    function nc(e, t, l) {
        try {
            var a = e.stateNode;
            bp(a, e.type, l, t),
                a[at] = t
        } catch (n) {
            xe(e, e.return, n)
        }
    }
    function Xf(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && zl(e.type) || e.tag === 4
    }
    function ic(e) {
        e: for (; ;) {
            for (; e.sibling === null;) {
                if (e.return === null || Xf(e.return))
                    return null;
                e = e.return
            }
            for (e.sibling.return = e.return,
                e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
                if (e.tag === 27 && zl(e.type) || e.flags & 2 || e.child === null || e.tag === 4)
                    continue e;
                e.child.return = e,
                    e = e.child
            }
            if (!(e.flags & 2))
                return e.stateNode
        }
    }
    function uc(e, t, l) {
        var a = e.tag;
        if (a === 5 || a === 6)
            e = e.stateNode,
                t ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(e, t) : (t = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
                    t.appendChild(e),
                    l = l._reactRootContainer,
                    l != null || t.onclick !== null || (t.onclick = Qt));
        else if (a !== 4 && (a === 27 && zl(e.type) && (l = e.stateNode,
            t = null),
            e = e.child,
            e !== null))
            for (uc(e, t, l),
                e = e.sibling; e !== null;)
                uc(e, t, l),
                    e = e.sibling
    }
    function qi(e, t, l) {
        var a = e.tag;
        if (a === 5 || a === 6)
            e = e.stateNode,
                t ? l.insertBefore(e, t) : l.appendChild(e);
        else if (a !== 4 && (a === 27 && zl(e.type) && (l = e.stateNode),
            e = e.child,
            e !== null))
            for (qi(e, t, l),
                e = e.sibling; e !== null;)
                qi(e, t, l),
                    e = e.sibling
    }
    function Kf(e) {
        var t = e.stateNode
            , l = e.memoizedProps;
        try {
            for (var a = e.type, n = t.attributes; n.length;)
                t.removeAttributeNode(n[0]);
            $e(t, a, l),
                t[Ze] = e,
                t[at] = l
        } catch (i) {
            xe(e, e.return, i)
        }
    }
    var Pt = !1
        , qe = !1
        , sc = !1
        , Zf = typeof WeakSet == "function" ? WeakSet : Set
        , Xe = null;
    function Pg(e, t) {
        if (e = e.containerInfo,
            zc = uu,
            e = lo(e),
            es(e)) {
            if ("selectionStart" in e)
                var l = {
                    start: e.selectionStart,
                    end: e.selectionEnd
                };
            else
                e: {
                    l = (l = e.ownerDocument) && l.defaultView || window;
                    var a = l.getSelection && l.getSelection();
                    if (a && a.rangeCount !== 0) {
                        l = a.anchorNode;
                        var n = a.anchorOffset
                            , i = a.focusNode;
                        a = a.focusOffset;
                        try {
                            l.nodeType,
                                i.nodeType
                        } catch {
                            l = null;
                            break e
                        }
                        var f = 0
                            , m = -1
                            , x = -1
                            , O = 0
                            , w = 0
                            , L = e
                            , A = null;
                        t: for (; ;) {
                            for (var R; L !== l || n !== 0 && L.nodeType !== 3 || (m = f + n),
                                L !== i || a !== 0 && L.nodeType !== 3 || (x = f + a),
                                L.nodeType === 3 && (f += L.nodeValue.length),
                                (R = L.firstChild) !== null;)
                                A = L,
                                    L = R;
                            for (; ;) {
                                if (L === e)
                                    break t;
                                if (A === l && ++O === n && (m = f),
                                    A === i && ++w === a && (x = f),
                                    (R = L.nextSibling) !== null)
                                    break;
                                L = A,
                                    A = L.parentNode
                            }
                            L = R
                        }
                        l = m === -1 || x === -1 ? null : {
                            start: m,
                            end: x
                        }
                    } else
                        l = null
                }
            l = l || {
                start: 0,
                end: 0
            }
        } else
            l = null;
        for (Rc = {
            focusedElem: e,
            selectionRange: l
        },
            uu = !1,
            Xe = t; Xe !== null;)
            if (t = Xe,
                e = t.child,
                (t.subtreeFlags & 1028) !== 0 && e !== null)
                e.return = t,
                    Xe = e;
            else
                for (; Xe !== null;) {
                    switch (t = Xe,
                    i = t.alternate,
                    e = t.flags,
                    t.tag) {
                        case 0:
                            if ((e & 4) !== 0 && (e = t.updateQueue,
                                e = e !== null ? e.events : null,
                                e !== null))
                                for (l = 0; l < e.length; l++)
                                    n = e[l],
                                        n.ref.impl = n.nextImpl;
                            break;
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if ((e & 1024) !== 0 && i !== null) {
                                e = void 0,
                                    l = t,
                                    n = i.memoizedProps,
                                    i = i.memoizedState,
                                    a = l.stateNode;
                                try {
                                    var X = Wl(l.type, n);
                                    e = a.getSnapshotBeforeUpdate(X, i),
                                        a.__reactInternalSnapshotBeforeUpdate = e
                                } catch ($) {
                                    xe(l, l.return, $)
                                }
                            }
                            break;
                        case 3:
                            if ((e & 1024) !== 0) {
                                if (e = t.stateNode.containerInfo,
                                    l = e.nodeType,
                                    l === 9)
                                    wc(e);
                                else if (l === 1)
                                    switch (e.nodeName) {
                                        case "HEAD":
                                        case "HTML":
                                        case "BODY":
                                            wc(e);
                                            break;
                                        default:
                                            e.textContent = ""
                                    }
                            }
                            break;
                        case 5:
                        case 26:
                        case 27:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            if ((e & 1024) !== 0)
                                throw Error(r(163))
                    }
                    if (e = t.sibling,
                        e !== null) {
                        e.return = t.return,
                            Xe = e;
                        break
                    }
                    Xe = t.return
                }
    }
    function kf(e, t, l) {
        var a = l.flags;
        switch (l.tag) {
            case 0:
            case 11:
            case 15:
                tl(e, l),
                    a & 4 && xn(5, l);
                break;
            case 1:
                if (tl(e, l),
                    a & 4)
                    if (e = l.stateNode,
                        t === null)
                        try {
                            e.componentDidMount()
                        } catch (f) {
                            xe(l, l.return, f)
                        }
                    else {
                        var n = Wl(l.type, t.memoizedProps);
                        t = t.memoizedState;
                        try {
                            e.componentDidUpdate(n, t, e.__reactInternalSnapshotBeforeUpdate)
                        } catch (f) {
                            xe(l, l.return, f)
                        }
                    }
                a & 64 && Gf(l),
                    a & 512 && bn(l, l.return);
                break;
            case 3:
                if (tl(e, l),
                    a & 64 && (e = l.updateQueue,
                        e !== null)) {
                    if (t = null,
                        l.child !== null)
                        switch (l.child.tag) {
                            case 27:
                            case 5:
                                t = l.child.stateNode;
                                break;
                            case 1:
                                t = l.child.stateNode
                        }
                    try {
                        jo(e, t)
                    } catch (f) {
                        xe(l, l.return, f)
                    }
                }
                break;
            case 27:
                t === null && a & 4 && Kf(l);
            case 26:
            case 5:
                tl(e, l),
                    t === null && a & 4 && Qf(l),
                    a & 512 && bn(l, l.return);
                break;
            case 12:
                tl(e, l);
                break;
            case 31:
                tl(e, l),
                    a & 4 && $f(e, l);
                break;
            case 13:
                tl(e, l),
                    a & 4 && Wf(e, l),
                    a & 64 && (e = l.memoizedState,
                        e !== null && (e = e.dehydrated,
                            e !== null && (l = cp.bind(null, l),
                                zp(e, l))));
                break;
            case 22:
                if (a = l.memoizedState !== null || Pt,
                    !a) {
                    t = t !== null && t.memoizedState !== null || qe,
                        n = Pt;
                    var i = qe;
                    Pt = a,
                        (qe = t) && !i ? ll(e, l, (l.subtreeFlags & 8772) !== 0) : tl(e, l),
                        Pt = n,
                        qe = i
                }
                break;
            case 30:
                break;
            default:
                tl(e, l)
        }
    }
    function Jf(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null,
            Jf(t)),
            e.child = null,
            e.deletions = null,
            e.sibling = null,
            e.tag === 5 && (t = e.stateNode,
                t !== null && Hu(t)),
            e.stateNode = null,
            e.return = null,
            e.dependencies = null,
            e.memoizedProps = null,
            e.memoizedState = null,
            e.pendingProps = null,
            e.stateNode = null,
            e.updateQueue = null
    }
    var ze = null
        , it = !1;
    function el(e, t, l) {
        for (l = l.child; l !== null;)
            Ff(e, t, l),
                l = l.sibling
    }
    function Ff(e, t, l) {
        if (ft && typeof ft.onCommitFiberUnmount == "function")
            try {
                ft.onCommitFiberUnmount(Qa, l)
            } catch { }
        switch (l.tag) {
            case 26:
                qe || Bt(l, t),
                    el(e, t, l),
                    l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode,
                        l.parentNode.removeChild(l));
                break;
            case 27:
                qe || Bt(l, t);
                var a = ze
                    , n = it;
                zl(l.type) && (ze = l.stateNode,
                    it = !1),
                    el(e, t, l),
                    Rn(l.stateNode),
                    ze = a,
                    it = n;
                break;
            case 5:
                qe || Bt(l, t);
            case 6:
                if (a = ze,
                    n = it,
                    ze = null,
                    el(e, t, l),
                    ze = a,
                    it = n,
                    ze !== null)
                    if (it)
                        try {
                            (ze.nodeType === 9 ? ze.body : ze.nodeName === "HTML" ? ze.ownerDocument.body : ze).removeChild(l.stateNode)
                        } catch (i) {
                            xe(l, t, i)
                        }
                    else
                        try {
                            ze.removeChild(l.stateNode)
                        } catch (i) {
                            xe(l, t, i)
                        }
                break;
            case 18:
                ze !== null && (it ? (e = ze,
                    Gd(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, l.stateNode),
                    Ha(e)) : Gd(ze, l.stateNode));
                break;
            case 4:
                a = ze,
                    n = it,
                    ze = l.stateNode.containerInfo,
                    it = !0,
                    el(e, t, l),
                    ze = a,
                    it = n;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                Sl(2, l, t),
                    qe || Sl(4, l, t),
                    el(e, t, l);
                break;
            case 1:
                qe || (Bt(l, t),
                    a = l.stateNode,
                    typeof a.componentWillUnmount == "function" && Vf(l, t, a)),
                    el(e, t, l);
                break;
            case 21:
                el(e, t, l);
                break;
            case 22:
                qe = (a = qe) || l.memoizedState !== null,
                    el(e, t, l),
                    qe = a;
                break;
            default:
                el(e, t, l)
        }
    }
    function $f(e, t) {
        if (t.memoizedState === null && (e = t.alternate,
            e !== null && (e = e.memoizedState,
                e !== null))) {
            e = e.dehydrated;
            try {
                Ha(e)
            } catch (l) {
                xe(t, t.return, l)
            }
        }
    }
    function Wf(e, t) {
        if (t.memoizedState === null && (e = t.alternate,
            e !== null && (e = e.memoizedState,
                e !== null && (e = e.dehydrated,
                    e !== null))))
            try {
                Ha(e)
            } catch (l) {
                xe(t, t.return, l)
            }
    }
    function ep(e) {
        switch (e.tag) {
            case 31:
            case 13:
            case 19:
                var t = e.stateNode;
                return t === null && (t = e.stateNode = new Zf),
                    t;
            case 22:
                return e = e.stateNode,
                    t = e._retryCache,
                    t === null && (t = e._retryCache = new Zf),
                    t;
            default:
                throw Error(r(435, e.tag))
        }
    }
    function Yi(e, t) {
        var l = ep(e);
        t.forEach(function (a) {
            if (!l.has(a)) {
                l.add(a);
                var n = rp.bind(null, e, a);
                a.then(n, n)
            }
        })
    }
    function ut(e, t) {
        var l = t.deletions;
        if (l !== null)
            for (var a = 0; a < l.length; a++) {
                var n = l[a]
                    , i = e
                    , f = t
                    , m = f;
                e: for (; m !== null;) {
                    switch (m.tag) {
                        case 27:
                            if (zl(m.type)) {
                                ze = m.stateNode,
                                    it = !1;
                                break e
                            }
                            break;
                        case 5:
                            ze = m.stateNode,
                                it = !1;
                            break e;
                        case 3:
                        case 4:
                            ze = m.stateNode.containerInfo,
                                it = !0;
                            break e
                    }
                    m = m.return
                }
                if (ze === null)
                    throw Error(r(160));
                Ff(i, f, n),
                    ze = null,
                    it = !1,
                    i = n.alternate,
                    i !== null && (i.return = null),
                    n.return = null
            }
        if (t.subtreeFlags & 13886)
            for (t = t.child; t !== null;)
                If(t, e),
                    t = t.sibling
    }
    var Mt = null;
    function If(e, t) {
        var l = e.alternate
            , a = e.flags;
        switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                ut(t, e),
                    st(e),
                    a & 4 && (Sl(3, e, e.return),
                        xn(3, e),
                        Sl(5, e, e.return));
                break;
            case 1:
                ut(t, e),
                    st(e),
                    a & 512 && (qe || l === null || Bt(l, l.return)),
                    a & 64 && Pt && (e = e.updateQueue,
                        e !== null && (a = e.callbacks,
                            a !== null && (l = e.shared.hiddenCallbacks,
                                e.shared.hiddenCallbacks = l === null ? a : l.concat(a))));
                break;
            case 26:
                var n = Mt;
                if (ut(t, e),
                    st(e),
                    a & 512 && (qe || l === null || Bt(l, l.return)),
                    a & 4) {
                    var i = l !== null ? l.memoizedState : null;
                    if (a = e.memoizedState,
                        l === null)
                        if (a === null)
                            if (e.stateNode === null) {
                                e: {
                                    a = e.type,
                                        l = e.memoizedProps,
                                        n = n.ownerDocument || n;
                                    t: switch (a) {
                                        case "title":
                                            i = n.getElementsByTagName("title")[0],
                                                (!i || i[Za] || i[Ze] || i.namespaceURI === "http://www.w3.org/2000/svg" || i.hasAttribute("itemprop")) && (i = n.createElement(a),
                                                    n.head.insertBefore(i, n.querySelector("head > title"))),
                                                $e(i, a, l),
                                                i[Ze] = e,
                                                Qe(i),
                                                a = i;
                                            break e;
                                        case "link":
                                            var f = Id("link", "href", n).get(a + (l.href || ""));
                                            if (f) {
                                                for (var m = 0; m < f.length; m++)
                                                    if (i = f[m],
                                                        i.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && i.getAttribute("rel") === (l.rel == null ? null : l.rel) && i.getAttribute("title") === (l.title == null ? null : l.title) && i.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                                                        f.splice(m, 1);
                                                        break t
                                                    }
                                            }
                                            i = n.createElement(a),
                                                $e(i, a, l),
                                                n.head.appendChild(i);
                                            break;
                                        case "meta":
                                            if (f = Id("meta", "content", n).get(a + (l.content || ""))) {
                                                for (m = 0; m < f.length; m++)
                                                    if (i = f[m],
                                                        i.getAttribute("content") === (l.content == null ? null : "" + l.content) && i.getAttribute("name") === (l.name == null ? null : l.name) && i.getAttribute("property") === (l.property == null ? null : l.property) && i.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && i.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                                                        f.splice(m, 1);
                                                        break t
                                                    }
                                            }
                                            i = n.createElement(a),
                                                $e(i, a, l),
                                                n.head.appendChild(i);
                                            break;
                                        default:
                                            throw Error(r(468, a))
                                    }
                                    i[Ze] = e,
                                        Qe(i),
                                        a = i
                                }
                                e.stateNode = a
                            } else
                                Pd(n, e.type, e.stateNode);
                        else
                            e.stateNode = Wd(n, a, e.memoizedProps);
                    else
                        i !== a ? (i === null ? l.stateNode !== null && (l = l.stateNode,
                            l.parentNode.removeChild(l)) : i.count--,
                            a === null ? Pd(n, e.type, e.stateNode) : Wd(n, a, e.memoizedProps)) : a === null && e.stateNode !== null && nc(e, e.memoizedProps, l.memoizedProps)
                }
                break;
            case 27:
                ut(t, e),
                    st(e),
                    a & 512 && (qe || l === null || Bt(l, l.return)),
                    l !== null && a & 4 && nc(e, e.memoizedProps, l.memoizedProps);
                break;
            case 5:
                if (ut(t, e),
                    st(e),
                    a & 512 && (qe || l === null || Bt(l, l.return)),
                    e.flags & 32) {
                    n = e.stateNode;
                    try {
                        ua(n, "")
                    } catch (X) {
                        xe(e, e.return, X)
                    }
                }
                a & 4 && e.stateNode != null && (n = e.memoizedProps,
                    nc(e, n, l !== null ? l.memoizedProps : n)),
                    a & 1024 && (sc = !0);
                break;
            case 6:
                if (ut(t, e),
                    st(e),
                    a & 4) {
                    if (e.stateNode === null)
                        throw Error(r(162));
                    a = e.memoizedProps,
                        l = e.stateNode;
                    try {
                        l.nodeValue = a
                    } catch (X) {
                        xe(e, e.return, X)
                    }
                }
                break;
            case 3:
                if (lu = null,
                    n = Mt,
                    Mt = eu(t.containerInfo),
                    ut(t, e),
                    Mt = n,
                    st(e),
                    a & 4 && l !== null && l.memoizedState.isDehydrated)
                    try {
                        Ha(t.containerInfo)
                    } catch (X) {
                        xe(e, e.return, X)
                    }
                sc && (sc = !1,
                    Pf(e));
                break;
            case 4:
                a = Mt,
                    Mt = eu(e.stateNode.containerInfo),
                    ut(t, e),
                    st(e),
                    Mt = a;
                break;
            case 12:
                ut(t, e),
                    st(e);
                break;
            case 31:
                ut(t, e),
                    st(e),
                    a & 4 && (a = e.updateQueue,
                        a !== null && (e.updateQueue = null,
                            Yi(e, a)));
                break;
            case 13:
                ut(t, e),
                    st(e),
                    e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (Vi = ot()),
                    a & 4 && (a = e.updateQueue,
                        a !== null && (e.updateQueue = null,
                            Yi(e, a)));
                break;
            case 22:
                n = e.memoizedState !== null;
                var x = l !== null && l.memoizedState !== null
                    , O = Pt
                    , w = qe;
                if (Pt = O || n,
                    qe = w || x,
                    ut(t, e),
                    qe = w,
                    Pt = O,
                    st(e),
                    a & 8192)
                    e: for (t = e.stateNode,
                        t._visibility = n ? t._visibility & -2 : t._visibility | 1,
                        n && (l === null || x || Pt || qe || Il(e)),
                        l = null,
                        t = e; ;) {
                        if (t.tag === 5 || t.tag === 26) {
                            if (l === null) {
                                x = l = t;
                                try {
                                    if (i = x.stateNode,
                                        n)
                                        f = i.style,
                                            typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none";
                                    else {
                                        m = x.stateNode;
                                        var L = x.memoizedProps.style
                                            , A = L != null && L.hasOwnProperty("display") ? L.display : null;
                                        m.style.display = A == null || typeof A == "boolean" ? "" : ("" + A).trim()
                                    }
                                } catch (X) {
                                    xe(x, x.return, X)
                                }
                            }
                        } else if (t.tag === 6) {
                            if (l === null) {
                                x = t;
                                try {
                                    x.stateNode.nodeValue = n ? "" : x.memoizedProps
                                } catch (X) {
                                    xe(x, x.return, X)
                                }
                            }
                        } else if (t.tag === 18) {
                            if (l === null) {
                                x = t;
                                try {
                                    var R = x.stateNode;
                                    n ? Vd(R, !0) : Vd(x.stateNode, !1)
                                } catch (X) {
                                    xe(x, x.return, X)
                                }
                            }
                        } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
                            t.child.return = t,
                                t = t.child;
                            continue
                        }
                        if (t === e)
                            break e;
                        for (; t.sibling === null;) {
                            if (t.return === null || t.return === e)
                                break e;
                            l === t && (l = null),
                                t = t.return
                        }
                        l === t && (l = null),
                            t.sibling.return = t.return,
                            t = t.sibling
                    }
                a & 4 && (a = e.updateQueue,
                    a !== null && (l = a.retryQueue,
                        l !== null && (a.retryQueue = null,
                            Yi(e, l))));
                break;
            case 19:
                ut(t, e),
                    st(e),
                    a & 4 && (a = e.updateQueue,
                        a !== null && (e.updateQueue = null,
                            Yi(e, a)));
                break;
            case 30:
                break;
            case 21:
                break;
            default:
                ut(t, e),
                    st(e)
        }
    }
    function st(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                for (var l, a = e.return; a !== null;) {
                    if (Xf(a)) {
                        l = a;
                        break
                    }
                    a = a.return
                }
                if (l == null)
                    throw Error(r(160));
                switch (l.tag) {
                    case 27:
                        var n = l.stateNode
                            , i = ic(e);
                        qi(e, i, n);
                        break;
                    case 5:
                        var f = l.stateNode;
                        l.flags & 32 && (ua(f, ""),
                            l.flags &= -33);
                        var m = ic(e);
                        qi(e, m, f);
                        break;
                    case 3:
                    case 4:
                        var x = l.stateNode.containerInfo
                            , O = ic(e);
                        uc(e, O, x);
                        break;
                    default:
                        throw Error(r(161))
                }
            } catch (w) {
                xe(e, e.return, w)
            }
            e.flags &= -3
        }
        t & 4096 && (e.flags &= -4097)
    }
    function Pf(e) {
        if (e.subtreeFlags & 1024)
            for (e = e.child; e !== null;) {
                var t = e;
                Pf(t),
                    t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
                    e = e.sibling
            }
    }
    function tl(e, t) {
        if (t.subtreeFlags & 8772)
            for (t = t.child; t !== null;)
                kf(e, t.alternate, t),
                    t = t.sibling
    }
    function Il(e) {
        for (e = e.child; e !== null;) {
            var t = e;
            switch (t.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    Sl(4, t, t.return),
                        Il(t);
                    break;
                case 1:
                    Bt(t, t.return);
                    var l = t.stateNode;
                    typeof l.componentWillUnmount == "function" && Vf(t, t.return, l),
                        Il(t);
                    break;
                case 27:
                    Rn(t.stateNode);
                case 26:
                case 5:
                    Bt(t, t.return),
                        Il(t);
                    break;
                case 22:
                    t.memoizedState === null && Il(t);
                    break;
                case 30:
                    Il(t);
                    break;
                default:
                    Il(t)
            }
            e = e.sibling
        }
    }
    function ll(e, t, l) {
        for (l = l && (t.subtreeFlags & 8772) !== 0,
            t = t.child; t !== null;) {
            var a = t.alternate
                , n = e
                , i = t
                , f = i.flags;
            switch (i.tag) {
                case 0:
                case 11:
                case 15:
                    ll(n, i, l),
                        xn(4, i);
                    break;
                case 1:
                    if (ll(n, i, l),
                        a = i,
                        n = a.stateNode,
                        typeof n.componentDidMount == "function")
                        try {
                            n.componentDidMount()
                        } catch (O) {
                            xe(a, a.return, O)
                        }
                    if (a = i,
                        n = a.updateQueue,
                        n !== null) {
                        var m = a.stateNode;
                        try {
                            var x = n.shared.hiddenCallbacks;
                            if (x !== null)
                                for (n.shared.hiddenCallbacks = null,
                                    n = 0; n < x.length; n++)
                                    Ro(x[n], m)
                        } catch (O) {
                            xe(a, a.return, O)
                        }
                    }
                    l && f & 64 && Gf(i),
                        bn(i, i.return);
                    break;
                case 27:
                    Kf(i);
                case 26:
                case 5:
                    ll(n, i, l),
                        l && a === null && f & 4 && Qf(i),
                        bn(i, i.return);
                    break;
                case 12:
                    ll(n, i, l);
                    break;
                case 31:
                    ll(n, i, l),
                        l && f & 4 && $f(n, i);
                    break;
                case 13:
                    ll(n, i, l),
                        l && f & 4 && Wf(n, i);
                    break;
                case 22:
                    i.memoizedState === null && ll(n, i, l),
                        bn(i, i.return);
                    break;
                case 30:
                    break;
                default:
                    ll(n, i, l)
            }
            t = t.sibling
        }
    }
    function cc(e, t) {
        var l = null;
        e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool),
            e = null,
            t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool),
            e !== l && (e != null && e.refCount++,
                l != null && un(l))
    }
    function rc(e, t) {
        e = null,
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            t = t.memoizedState.cache,
            t !== e && (t.refCount++,
                e != null && un(e))
    }
    function _t(e, t, l, a) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null;)
                ed(e, t, l, a),
                    t = t.sibling
    }
    function ed(e, t, l, a) {
        var n = t.flags;
        switch (t.tag) {
            case 0:
            case 11:
            case 15:
                _t(e, t, l, a),
                    n & 2048 && xn(9, t);
                break;
            case 1:
                _t(e, t, l, a);
                break;
            case 3:
                _t(e, t, l, a),
                    n & 2048 && (e = null,
                        t.alternate !== null && (e = t.alternate.memoizedState.cache),
                        t = t.memoizedState.cache,
                        t !== e && (t.refCount++,
                            e != null && un(e)));
                break;
            case 12:
                if (n & 2048) {
                    _t(e, t, l, a),
                        e = t.stateNode;
                    try {
                        var i = t.memoizedProps
                            , f = i.id
                            , m = i.onPostCommit;
                        typeof m == "function" && m(f, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0)
                    } catch (x) {
                        xe(t, t.return, x)
                    }
                } else
                    _t(e, t, l, a);
                break;
            case 31:
                _t(e, t, l, a);
                break;
            case 13:
                _t(e, t, l, a);
                break;
            case 23:
                break;
            case 22:
                i = t.stateNode,
                    f = t.alternate,
                    t.memoizedState !== null ? i._visibility & 2 ? _t(e, t, l, a) : Sn(e, t) : i._visibility & 2 ? _t(e, t, l, a) : (i._visibility |= 2,
                        Oa(e, t, l, a, (t.subtreeFlags & 10256) !== 0 || !1)),
                    n & 2048 && cc(f, t);
                break;
            case 24:
                _t(e, t, l, a),
                    n & 2048 && rc(t.alternate, t);
                break;
            default:
                _t(e, t, l, a)
        }
    }
    function Oa(e, t, l, a, n) {
        for (n = n && ((t.subtreeFlags & 10256) !== 0 || !1),
            t = t.child; t !== null;) {
            var i = e
                , f = t
                , m = l
                , x = a
                , O = f.flags;
            switch (f.tag) {
                case 0:
                case 11:
                case 15:
                    Oa(i, f, m, x, n),
                        xn(8, f);
                    break;
                case 23:
                    break;
                case 22:
                    var w = f.stateNode;
                    f.memoizedState !== null ? w._visibility & 2 ? Oa(i, f, m, x, n) : Sn(i, f) : (w._visibility |= 2,
                        Oa(i, f, m, x, n)),
                        n && O & 2048 && cc(f.alternate, f);
                    break;
                case 24:
                    Oa(i, f, m, x, n),
                        n && O & 2048 && rc(f.alternate, f);
                    break;
                default:
                    Oa(i, f, m, x, n)
            }
            t = t.sibling
        }
    }
    function Sn(e, t) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null;) {
                var l = e
                    , a = t
                    , n = a.flags;
                switch (a.tag) {
                    case 22:
                        Sn(l, a),
                            n & 2048 && cc(a.alternate, a);
                        break;
                    case 24:
                        Sn(l, a),
                            n & 2048 && rc(a.alternate, a);
                        break;
                    default:
                        Sn(l, a)
                }
                t = t.sibling
            }
    }
    var En = 8192;
    function Aa(e, t, l) {
        if (e.subtreeFlags & En)
            for (e = e.child; e !== null;)
                td(e, t, l),
                    e = e.sibling
    }
    function td(e, t, l) {
        switch (e.tag) {
            case 26:
                Aa(e, t, l),
                    e.flags & En && e.memoizedState !== null && Yp(l, Mt, e.memoizedState, e.memoizedProps);
                break;
            case 5:
                Aa(e, t, l);
                break;
            case 3:
            case 4:
                var a = Mt;
                Mt = eu(e.stateNode.containerInfo),
                    Aa(e, t, l),
                    Mt = a;
                break;
            case 22:
                e.memoizedState === null && (a = e.alternate,
                    a !== null && a.memoizedState !== null ? (a = En,
                        En = 16777216,
                        Aa(e, t, l),
                        En = a) : Aa(e, t, l));
                break;
            default:
                Aa(e, t, l)
        }
    }
    function ld(e) {
        var t = e.alternate;
        if (t !== null && (e = t.child,
            e !== null)) {
            t.child = null;
            do
                t = e.sibling,
                    e.sibling = null,
                    e = t;
            while (e !== null)
        }
    }
    function Tn(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (t !== null)
                for (var l = 0; l < t.length; l++) {
                    var a = t[l];
                    Xe = a,
                        nd(a, e)
                }
            ld(e)
        }
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null;)
                ad(e),
                    e = e.sibling
    }
    function ad(e) {
        switch (e.tag) {
            case 0:
            case 11:
            case 15:
                Tn(e),
                    e.flags & 2048 && Sl(9, e, e.return);
                break;
            case 3:
                Tn(e);
                break;
            case 12:
                Tn(e);
                break;
            case 22:
                var t = e.stateNode;
                e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3,
                    Gi(e)) : Tn(e);
                break;
            default:
                Tn(e)
        }
    }
    function Gi(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (t !== null)
                for (var l = 0; l < t.length; l++) {
                    var a = t[l];
                    Xe = a,
                        nd(a, e)
                }
            ld(e)
        }
        for (e = e.child; e !== null;) {
            switch (t = e,
            t.tag) {
                case 0:
                case 11:
                case 15:
                    Sl(8, t, t.return),
                        Gi(t);
                    break;
                case 22:
                    l = t.stateNode,
                        l._visibility & 2 && (l._visibility &= -3,
                            Gi(t));
                    break;
                default:
                    Gi(t)
            }
            e = e.sibling
        }
    }
    function nd(e, t) {
        for (; Xe !== null;) {
            var l = Xe;
            switch (l.tag) {
                case 0:
                case 11:
                case 15:
                    Sl(8, l, t);
                    break;
                case 23:
                case 22:
                    if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
                        var a = l.memoizedState.cachePool.pool;
                        a != null && a.refCount++
                    }
                    break;
                case 24:
                    un(l.memoizedState.cache)
            }
            if (a = l.child,
                a !== null)
                a.return = l,
                    Xe = a;
            else
                e: for (l = e; Xe !== null;) {
                    a = Xe;
                    var n = a.sibling
                        , i = a.return;
                    if (Jf(a),
                        a === l) {
                        Xe = null;
                        break e
                    }
                    if (n !== null) {
                        n.return = i,
                            Xe = n;
                        break e
                    }
                    Xe = i
                }
        }
    }
    var tp = {
        getCacheForType: function (e) {
            var t = Je(Le)
                , l = t.data.get(e);
            return l === void 0 && (l = e(),
                t.data.set(e, l)),
                l
        },
        cacheSignal: function () {
            return Je(Le).controller.signal
        }
    }
        , lp = typeof WeakMap == "function" ? WeakMap : Map
        , me = 0
        , Te = null
        , ie = null
        , se = 0
        , ve = 0
        , yt = null
        , El = !1
        , za = !1
        , oc = !1
        , al = 0
        , De = 0
        , Tl = 0
        , Pl = 0
        , fc = 0
        , vt = 0
        , Ra = 0
        , Nn = null
        , ct = null
        , dc = !1
        , Vi = 0
        , id = 0
        , Qi = 1 / 0
        , Xi = null
        , Nl = null
        , Ye = 0
        , Cl = null
        , ja = null
        , nl = 0
        , hc = 0
        , mc = null
        , ud = null
        , Cn = 0
        , gc = null;
    function xt() {
        return (me & 2) !== 0 && se !== 0 ? se & -se : D.T !== null ? Sc() : br()
    }
    function sd() {
        if (vt === 0)
            if ((se & 536870912) === 0 || oe) {
                var e = In;
                In <<= 1,
                    (In & 3932160) === 0 && (In = 262144),
                    vt = e
            } else
                vt = 536870912;
        return e = gt.current,
            e !== null && (e.flags |= 32),
            vt
    }
    function rt(e, t, l) {
        (e === Te && (ve === 2 || ve === 9) || e.cancelPendingCommit !== null) && (Da(e, 0),
            Ol(e, se, vt, !1)),
            Ka(e, l),
            ((me & 2) === 0 || e !== Te) && (e === Te && ((me & 2) === 0 && (Pl |= l),
                De === 4 && Ol(e, se, vt, !1)),
                qt(e))
    }
    function cd(e, t, l) {
        if ((me & 6) !== 0)
            throw Error(r(327));
        var a = !l && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Xa(e, t)
            , n = a ? ip(e, t) : yc(e, t, !0)
            , i = a;
        do {
            if (n === 0) {
                za && !a && Ol(e, t, 0, !1);
                break
            } else {
                if (l = e.current.alternate,
                    i && !ap(l)) {
                    n = yc(e, t, !1),
                        i = !1;
                    continue
                }
                if (n === 2) {
                    if (i = t,
                        e.errorRecoveryDisabledLanes & i)
                        var f = 0;
                    else
                        f = e.pendingLanes & -536870913,
                            f = f !== 0 ? f : f & 536870912 ? 536870912 : 0;
                    if (f !== 0) {
                        t = f;
                        e: {
                            var m = e;
                            n = Nn;
                            var x = m.current.memoizedState.isDehydrated;
                            if (x && (Da(m, f).flags |= 256),
                                f = yc(m, f, !1),
                                f !== 2) {
                                if (oc && !x) {
                                    m.errorRecoveryDisabledLanes |= i,
                                        Pl |= i,
                                        n = 4;
                                    break e
                                }
                                i = ct,
                                    ct = n,
                                    i !== null && (ct === null ? ct = i : ct.push.apply(ct, i))
                            }
                            n = f
                        }
                        if (i = !1,
                            n !== 2)
                            continue
                    }
                }
                if (n === 1) {
                    Da(e, 0),
                        Ol(e, t, 0, !0);
                    break
                }
                e: {
                    switch (a = e,
                    i = n,
                    i) {
                        case 0:
                        case 1:
                            throw Error(r(345));
                        case 4:
                            if ((t & 4194048) !== t)
                                break;
                        case 6:
                            Ol(a, t, vt, !El);
                            break e;
                        case 2:
                            ct = null;
                            break;
                        case 3:
                        case 5:
                            break;
                        default:
                            throw Error(r(329))
                    }
                    if ((t & 62914560) === t && (n = Vi + 300 - ot(),
                        10 < n)) {
                        if (Ol(a, t, vt, !El),
                            ei(a, 0, !0) !== 0)
                            break e;
                        nl = t,
                            a.timeoutHandle = qd(rd.bind(null, a, l, ct, Xi, dc, t, vt, Pl, Ra, El, i, "Throttled", -0, 0), n);
                        break e
                    }
                    rd(a, l, ct, Xi, dc, t, vt, Pl, Ra, El, i, null, -0, 0)
                }
            }
            break
        } while (!0);
        qt(e)
    }
    function rd(e, t, l, a, n, i, f, m, x, O, w, L, A, R) {
        if (e.timeoutHandle = -1,
            L = t.subtreeFlags,
            L & 8192 || (L & 16785408) === 16785408) {
            L = {
                stylesheets: null,
                count: 0,
                imgCount: 0,
                imgBytes: 0,
                suspenseyImages: [],
                waitingForImages: !0,
                waitingForViewTransition: !1,
                unsuspend: Qt
            },
                td(t, i, L);
            var X = (i & 62914560) === i ? Vi - ot() : (i & 4194048) === i ? id - ot() : 0;
            if (X = Gp(L, X),
                X !== null) {
                nl = i,
                    e.cancelPendingCommit = X(yd.bind(null, e, t, i, l, a, n, f, m, x, w, L, null, A, R)),
                    Ol(e, i, f, !O);
                return
            }
        }
        yd(e, t, i, l, a, n, f, m, x)
    }
    function ap(e) {
        for (var t = e; ;) {
            var l = t.tag;
            if ((l === 0 || l === 11 || l === 15) && t.flags & 16384 && (l = t.updateQueue,
                l !== null && (l = l.stores,
                    l !== null)))
                for (var a = 0; a < l.length; a++) {
                    var n = l[a]
                        , i = n.getSnapshot;
                    n = n.value;
                    try {
                        if (!ht(i(), n))
                            return !1
                    } catch {
                        return !1
                    }
                }
            if (l = t.child,
                t.subtreeFlags & 16384 && l !== null)
                l.return = t,
                    t = l;
            else {
                if (t === e)
                    break;
                for (; t.sibling === null;) {
                    if (t.return === null || t.return === e)
                        return !0;
                    t = t.return
                }
                t.sibling.return = t.return,
                    t = t.sibling
            }
        }
        return !0
    }
    function Ol(e, t, l, a) {
        t &= ~fc,
            t &= ~Pl,
            e.suspendedLanes |= t,
            e.pingedLanes &= ~t,
            a && (e.warmLanes |= t),
            a = e.expirationTimes;
        for (var n = t; 0 < n;) {
            var i = 31 - dt(n)
                , f = 1 << i;
            a[i] = -1,
                n &= ~f
        }
        l !== 0 && yr(e, l, t)
    }
    function Ki() {
        return (me & 6) === 0 ? (On(0),
            !1) : !0
    }
    function pc() {
        if (ie !== null) {
            if (ve === 0)
                var e = ie.return;
            else
                e = ie,
                    kt = Xl = null,
                    ws(e),
                    Sa = null,
                    cn = 0,
                    e = ie;
            for (; e !== null;)
                Yf(e.alternate, e),
                    e = e.return;
            ie = null
        }
    }
    function Da(e, t) {
        var l = e.timeoutHandle;
        l !== -1 && (e.timeoutHandle = -1,
            Tp(l)),
            l = e.cancelPendingCommit,
            l !== null && (e.cancelPendingCommit = null,
                l()),
            nl = 0,
            pc(),
            Te = e,
            ie = l = Kt(e.current, null),
            se = t,
            ve = 0,
            yt = null,
            El = !1,
            za = Xa(e, t),
            oc = !1,
            Ra = vt = fc = Pl = Tl = De = 0,
            ct = Nn = null,
            dc = !1,
            (t & 8) !== 0 && (t |= t & 32);
        var a = e.entangledLanes;
        if (a !== 0)
            for (e = e.entanglements,
                a &= t; 0 < a;) {
                var n = 31 - dt(a)
                    , i = 1 << n;
                t |= e[n],
                    a &= ~i
            }
        return al = t,
            di(),
            l
    }
    function od(e, t) {
        te = null,
            D.H = pn,
            t === ba || t === bi ? (t = Co(),
                ve = 3) : t === bs ? (t = Co(),
                    ve = 4) : ve = t === Js ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1,
            yt = t,
            ie === null && (De = 1,
                _i(e, Nt(t, e.current)))
    }
    function fd() {
        var e = gt.current;
        return e === null ? !0 : (se & 4194048) === se ? zt === null : (se & 62914560) === se || (se & 536870912) !== 0 ? e === zt : !1
    }
    function dd() {
        var e = D.H;
        return D.H = pn,
            e === null ? pn : e
    }
    function hd() {
        var e = D.A;
        return D.A = tp,
            e
    }
    function Zi() {
        De = 4,
            El || (se & 4194048) !== se && gt.current !== null || (za = !0),
            (Tl & 134217727) === 0 && (Pl & 134217727) === 0 || Te === null || Ol(Te, se, vt, !1)
    }
    function yc(e, t, l) {
        var a = me;
        me |= 2;
        var n = dd()
            , i = hd();
        (Te !== e || se !== t) && (Xi = null,
            Da(e, t)),
            t = !1;
        var f = De;
        e: do
            try {
                if (ve !== 0 && ie !== null) {
                    var m = ie
                        , x = yt;
                    switch (ve) {
                        case 8:
                            pc(),
                                f = 6;
                            break e;
                        case 3:
                        case 2:
                        case 9:
                        case 6:
                            gt.current === null && (t = !0);
                            var O = ve;
                            if (ve = 0,
                                yt = null,
                                wa(e, m, x, O),
                                l && za) {
                                f = 0;
                                break e
                            }
                            break;
                        default:
                            O = ve,
                                ve = 0,
                                yt = null,
                                wa(e, m, x, O)
                    }
                }
                np(),
                    f = De;
                break
            } catch (w) {
                od(e, w)
            }
        while (!0);
        return t && e.shellSuspendCounter++,
            kt = Xl = null,
            me = a,
            D.H = n,
            D.A = i,
            ie === null && (Te = null,
                se = 0,
                di()),
            f
    }
    function np() {
        for (; ie !== null;)
            md(ie)
    }
    function ip(e, t) {
        var l = me;
        me |= 2;
        var a = dd()
            , n = hd();
        Te !== e || se !== t ? (Xi = null,
            Qi = ot() + 500,
            Da(e, t)) : za = Xa(e, t);
        e: do
            try {
                if (ve !== 0 && ie !== null) {
                    t = ie;
                    var i = yt;
                    t: switch (ve) {
                        case 1:
                            ve = 0,
                                yt = null,
                                wa(e, t, i, 1);
                            break;
                        case 2:
                        case 9:
                            if (To(i)) {
                                ve = 0,
                                    yt = null,
                                    gd(t);
                                break
                            }
                            t = function () {
                                ve !== 2 && ve !== 9 || Te !== e || (ve = 7),
                                    qt(e)
                            }
                                ,
                                i.then(t, t);
                            break e;
                        case 3:
                            ve = 7;
                            break e;
                        case 4:
                            ve = 5;
                            break e;
                        case 7:
                            To(i) ? (ve = 0,
                                yt = null,
                                gd(t)) : (ve = 0,
                                    yt = null,
                                    wa(e, t, i, 7));
                            break;
                        case 5:
                            var f = null;
                            switch (ie.tag) {
                                case 26:
                                    f = ie.memoizedState;
                                case 5:
                                case 27:
                                    var m = ie;
                                    if (f ? eh(f) : m.stateNode.complete) {
                                        ve = 0,
                                            yt = null;
                                        var x = m.sibling;
                                        if (x !== null)
                                            ie = x;
                                        else {
                                            var O = m.return;
                                            O !== null ? (ie = O,
                                                ki(O)) : ie = null
                                        }
                                        break t
                                    }
                            }
                            ve = 0,
                                yt = null,
                                wa(e, t, i, 5);
                            break;
                        case 6:
                            ve = 0,
                                yt = null,
                                wa(e, t, i, 6);
                            break;
                        case 8:
                            pc(),
                                De = 6;
                            break e;
                        default:
                            throw Error(r(462))
                    }
                }
                up();
                break
            } catch (w) {
                od(e, w)
            }
        while (!0);
        return kt = Xl = null,
            D.H = a,
            D.A = n,
            me = l,
            ie !== null ? 0 : (Te = null,
                se = 0,
                di(),
                De)
    }
    function up() {
        for (; ie !== null && !Rm();)
            md(ie)
    }
    function md(e) {
        var t = Bf(e.alternate, e, al);
        e.memoizedProps = e.pendingProps,
            t === null ? ki(e) : ie = t
    }
    function gd(e) {
        var t = e
            , l = t.alternate;
        switch (t.tag) {
            case 15:
            case 0:
                t = wf(l, t, t.pendingProps, t.type, void 0, se);
                break;
            case 11:
                t = wf(l, t, t.pendingProps, t.type.render, t.ref, se);
                break;
            case 5:
                ws(t);
            default:
                Yf(l, t),
                    t = ie = fo(t, al),
                    t = Bf(l, t, al)
        }
        e.memoizedProps = e.pendingProps,
            t === null ? ki(e) : ie = t
    }
    function wa(e, t, l, a) {
        kt = Xl = null,
            ws(t),
            Sa = null,
            cn = 0;
        var n = t.return;
        try {
            if (Jg(e, n, t, l, se)) {
                De = 1,
                    _i(e, Nt(l, e.current)),
                    ie = null;
                return
            }
        } catch (i) {
            if (n !== null)
                throw ie = n,
                i;
            De = 1,
                _i(e, Nt(l, e.current)),
                ie = null;
            return
        }
        t.flags & 32768 ? (oe || a === 1 ? e = !0 : za || (se & 536870912) !== 0 ? e = !1 : (El = e = !0,
            (a === 2 || a === 9 || a === 3 || a === 6) && (a = gt.current,
                a !== null && a.tag === 13 && (a.flags |= 16384))),
            pd(t, e)) : ki(t)
    }
    function ki(e) {
        var t = e;
        do {
            if ((t.flags & 32768) !== 0) {
                pd(t, El);
                return
            }
            e = t.return;
            var l = Wg(t.alternate, t, al);
            if (l !== null) {
                ie = l;
                return
            }
            if (t = t.sibling,
                t !== null) {
                ie = t;
                return
            }
            ie = t = e
        } while (t !== null);
        De === 0 && (De = 5)
    }
    function pd(e, t) {
        do {
            var l = Ig(e.alternate, e);
            if (l !== null) {
                l.flags &= 32767,
                    ie = l;
                return
            }
            if (l = e.return,
                l !== null && (l.flags |= 32768,
                    l.subtreeFlags = 0,
                    l.deletions = null),
                !t && (e = e.sibling,
                    e !== null)) {
                ie = e;
                return
            }
            ie = e = l
        } while (e !== null);
        De = 6,
            ie = null
    }
    function yd(e, t, l, a, n, i, f, m, x) {
        e.cancelPendingCommit = null;
        do
            Ji();
        while (Ye !== 0);
        if ((me & 6) !== 0)
            throw Error(r(327));
        if (t !== null) {
            if (t === e.current)
                throw Error(r(177));
            if (i = t.lanes | t.childLanes,
                i |= is,
                qm(e, l, i, f, m, x),
                e === Te && (ie = Te = null,
                    se = 0),
                ja = t,
                Cl = e,
                nl = l,
                hc = i,
                mc = n,
                ud = a,
                (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null,
                    e.callbackPriority = 0,
                    op($n, function () {
                        return Ed(),
                            null
                    })) : (e.callbackNode = null,
                        e.callbackPriority = 0),
                a = (t.flags & 13878) !== 0,
                (t.subtreeFlags & 13878) !== 0 || a) {
                a = D.T,
                    D.T = null,
                    n = Y.p,
                    Y.p = 2,
                    f = me,
                    me |= 4;
                try {
                    Pg(e, t, l)
                } finally {
                    me = f,
                        Y.p = n,
                        D.T = a
                }
            }
            Ye = 1,
                vd(),
                xd(),
                bd()
        }
    }
    function vd() {
        if (Ye === 1) {
            Ye = 0;
            var e = Cl
                , t = ja
                , l = (t.flags & 13878) !== 0;
            if ((t.subtreeFlags & 13878) !== 0 || l) {
                l = D.T,
                    D.T = null;
                var a = Y.p;
                Y.p = 2;
                var n = me;
                me |= 4;
                try {
                    If(t, e);
                    var i = Rc
                        , f = lo(e.containerInfo)
                        , m = i.focusedElem
                        , x = i.selectionRange;
                    if (f !== m && m && m.ownerDocument && to(m.ownerDocument.documentElement, m)) {
                        if (x !== null && es(m)) {
                            var O = x.start
                                , w = x.end;
                            if (w === void 0 && (w = O),
                                "selectionStart" in m)
                                m.selectionStart = O,
                                    m.selectionEnd = Math.min(w, m.value.length);
                            else {
                                var L = m.ownerDocument || document
                                    , A = L && L.defaultView || window;
                                if (A.getSelection) {
                                    var R = A.getSelection()
                                        , X = m.textContent.length
                                        , $ = Math.min(x.start, X)
                                        , Ee = x.end === void 0 ? $ : Math.min(x.end, X);
                                    !R.extend && $ > Ee && (f = Ee,
                                        Ee = $,
                                        $ = f);
                                    var N = eo(m, $)
                                        , E = eo(m, Ee);
                                    if (N && E && (R.rangeCount !== 1 || R.anchorNode !== N.node || R.anchorOffset !== N.offset || R.focusNode !== E.node || R.focusOffset !== E.offset)) {
                                        var C = L.createRange();
                                        C.setStart(N.node, N.offset),
                                            R.removeAllRanges(),
                                            $ > Ee ? (R.addRange(C),
                                                R.extend(E.node, E.offset)) : (C.setEnd(E.node, E.offset),
                                                    R.addRange(C))
                                    }
                                }
                            }
                        }
                        for (L = [],
                            R = m; R = R.parentNode;)
                            R.nodeType === 1 && L.push({
                                element: R,
                                left: R.scrollLeft,
                                top: R.scrollTop
                            });
                        for (typeof m.focus == "function" && m.focus(),
                            m = 0; m < L.length; m++) {
                            var U = L[m];
                            U.element.scrollLeft = U.left,
                                U.element.scrollTop = U.top
                        }
                    }
                    uu = !!zc,
                        Rc = zc = null
                } finally {
                    me = n,
                        Y.p = a,
                        D.T = l
                }
            }
            e.current = t,
                Ye = 2
        }
    }
    function xd() {
        if (Ye === 2) {
            Ye = 0;
            var e = Cl
                , t = ja
                , l = (t.flags & 8772) !== 0;
            if ((t.subtreeFlags & 8772) !== 0 || l) {
                l = D.T,
                    D.T = null;
                var a = Y.p;
                Y.p = 2;
                var n = me;
                me |= 4;
                try {
                    kf(e, t.alternate, t)
                } finally {
                    me = n,
                        Y.p = a,
                        D.T = l
                }
            }
            Ye = 3
        }
    }
    function bd() {
        if (Ye === 4 || Ye === 3) {
            Ye = 0,
                jm();
            var e = Cl
                , t = ja
                , l = nl
                , a = ud;
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Ye = 5 : (Ye = 0,
                ja = Cl = null,
                Sd(e, e.pendingLanes));
            var n = e.pendingLanes;
            if (n === 0 && (Nl = null),
                Uu(l),
                t = t.stateNode,
                ft && typeof ft.onCommitFiberRoot == "function")
                try {
                    ft.onCommitFiberRoot(Qa, t, void 0, (t.current.flags & 128) === 128)
                } catch { }
            if (a !== null) {
                t = D.T,
                    n = Y.p,
                    Y.p = 2,
                    D.T = null;
                try {
                    for (var i = e.onRecoverableError, f = 0; f < a.length; f++) {
                        var m = a[f];
                        i(m.value, {
                            componentStack: m.stack
                        })
                    }
                } finally {
                    D.T = t,
                        Y.p = n
                }
            }
            (nl & 3) !== 0 && Ji(),
                qt(e),
                n = e.pendingLanes,
                (l & 261930) !== 0 && (n & 42) !== 0 ? e === gc ? Cn++ : (Cn = 0,
                    gc = e) : Cn = 0,
                On(0)
        }
    }
    function Sd(e, t) {
        (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache,
            t != null && (e.pooledCache = null,
                un(t)))
    }
    function Ji() {
        return vd(),
            xd(),
            bd(),
            Ed()
    }
    function Ed() {
        if (Ye !== 5)
            return !1;
        var e = Cl
            , t = hc;
        hc = 0;
        var l = Uu(nl)
            , a = D.T
            , n = Y.p;
        try {
            Y.p = 32 > l ? 32 : l,
                D.T = null,
                l = mc,
                mc = null;
            var i = Cl
                , f = nl;
            if (Ye = 0,
                ja = Cl = null,
                nl = 0,
                (me & 6) !== 0)
                throw Error(r(331));
            var m = me;
            if (me |= 4,
                ad(i.current),
                ed(i, i.current, f, l),
                me = m,
                On(0, !1),
                ft && typeof ft.onPostCommitFiberRoot == "function")
                try {
                    ft.onPostCommitFiberRoot(Qa, i)
                } catch { }
            return !0
        } finally {
            Y.p = n,
                D.T = a,
                Sd(e, t)
        }
    }
    function Td(e, t, l) {
        t = Nt(l, t),
            t = ks(e.stateNode, t, 2),
            e = vl(e, t, 2),
            e !== null && (Ka(e, 2),
                qt(e))
    }
    function xe(e, t, l) {
        if (e.tag === 3)
            Td(e, e, l);
        else
            for (; t !== null;) {
                if (t.tag === 3) {
                    Td(t, e, l);
                    break
                } else if (t.tag === 1) {
                    var a = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Nl === null || !Nl.has(a))) {
                        e = Nt(l, e),
                            l = Nf(2),
                            a = vl(t, l, 2),
                            a !== null && (Cf(l, a, t, e),
                                Ka(a, 2),
                                qt(a));
                        break
                    }
                }
                t = t.return
            }
    }
    function vc(e, t, l) {
        var a = e.pingCache;
        if (a === null) {
            a = e.pingCache = new lp;
            var n = new Set;
            a.set(t, n)
        } else
            n = a.get(t),
                n === void 0 && (n = new Set,
                    a.set(t, n));
        n.has(l) || (oc = !0,
            n.add(l),
            e = sp.bind(null, e, t, l),
            t.then(e, e))
    }
    function sp(e, t, l) {
        var a = e.pingCache;
        a !== null && a.delete(t),
            e.pingedLanes |= e.suspendedLanes & l,
            e.warmLanes &= ~l,
            Te === e && (se & l) === l && (De === 4 || De === 3 && (se & 62914560) === se && 300 > ot() - Vi ? (me & 2) === 0 && Da(e, 0) : fc |= l,
                Ra === se && (Ra = 0)),
            qt(e)
    }
    function Nd(e, t) {
        t === 0 && (t = pr()),
            e = Gl(e, t),
            e !== null && (Ka(e, t),
                qt(e))
    }
    function cp(e) {
        var t = e.memoizedState
            , l = 0;
        t !== null && (l = t.retryLane),
            Nd(e, l)
    }
    function rp(e, t) {
        var l = 0;
        switch (e.tag) {
            case 31:
            case 13:
                var a = e.stateNode
                    , n = e.memoizedState;
                n !== null && (l = n.retryLane);
                break;
            case 19:
                a = e.stateNode;
                break;
            case 22:
                a = e.stateNode._retryCache;
                break;
            default:
                throw Error(r(314))
        }
        a !== null && a.delete(t),
            Nd(e, l)
    }
    function op(e, t) {
        return Du(e, t)
    }
    var Fi = null
        , Ma = null
        , xc = !1
        , $i = !1
        , bc = !1
        , Al = 0;
    function qt(e) {
        e !== Ma && e.next === null && (Ma === null ? Fi = Ma = e : Ma = Ma.next = e),
            $i = !0,
            xc || (xc = !0,
                dp())
    }
    function On(e, t) {
        if (!bc && $i) {
            bc = !0;
            do
                for (var l = !1, a = Fi; a !== null;) {
                    if (e !== 0) {
                        var n = a.pendingLanes;
                        if (n === 0)
                            var i = 0;
                        else {
                            var f = a.suspendedLanes
                                , m = a.pingedLanes;
                            i = (1 << 31 - dt(42 | e) + 1) - 1,
                                i &= n & ~(f & ~m),
                                i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0
                        }
                        i !== 0 && (l = !0,
                            zd(a, i))
                    } else
                        i = se,
                            i = ei(a, a === Te ? i : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1),
                            (i & 3) === 0 || Xa(a, i) || (l = !0,
                                zd(a, i));
                    a = a.next
                }
            while (l);
            bc = !1
        }
    }
    function fp() {
        Cd()
    }
    function Cd() {
        $i = xc = !1;
        var e = 0;
        Al !== 0 && Ep() && (e = Al);
        for (var t = ot(), l = null, a = Fi; a !== null;) {
            var n = a.next
                , i = Od(a, t);
            i === 0 ? (a.next = null,
                l === null ? Fi = n : l.next = n,
                n === null && (Ma = l)) : (l = a,
                    (e !== 0 || (i & 3) !== 0) && ($i = !0)),
                a = n
        }
        Ye !== 0 && Ye !== 5 || On(e),
            Al !== 0 && (Al = 0)
    }
    function Od(e, t) {
        for (var l = e.suspendedLanes, a = e.pingedLanes, n = e.expirationTimes, i = e.pendingLanes & -62914561; 0 < i;) {
            var f = 31 - dt(i)
                , m = 1 << f
                , x = n[f];
            x === -1 ? ((m & l) === 0 || (m & a) !== 0) && (n[f] = Bm(m, t)) : x <= t && (e.expiredLanes |= m),
                i &= ~m
        }
        if (t = Te,
            l = se,
            l = ei(e, e === t ? l : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1),
            a = e.callbackNode,
            l === 0 || e === t && (ve === 2 || ve === 9) || e.cancelPendingCommit !== null)
            return a !== null && a !== null && wu(a),
                e.callbackNode = null,
                e.callbackPriority = 0;
        if ((l & 3) === 0 || Xa(e, l)) {
            if (t = l & -l,
                t === e.callbackPriority)
                return t;
            switch (a !== null && wu(a),
            Uu(l)) {
                case 2:
                case 8:
                    l = mr;
                    break;
                case 32:
                    l = $n;
                    break;
                case 268435456:
                    l = gr;
                    break;
                default:
                    l = $n
            }
            return a = Ad.bind(null, e),
                l = Du(l, a),
                e.callbackPriority = t,
                e.callbackNode = l,
                t
        }
        return a !== null && a !== null && wu(a),
            e.callbackPriority = 2,
            e.callbackNode = null,
            2
    }
    function Ad(e, t) {
        if (Ye !== 0 && Ye !== 5)
            return e.callbackNode = null,
                e.callbackPriority = 0,
                null;
        var l = e.callbackNode;
        if (Ji() && e.callbackNode !== l)
            return null;
        var a = se;
        return a = ei(e, e === Te ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1),
            a === 0 ? null : (cd(e, a, t),
                Od(e, ot()),
                e.callbackNode != null && e.callbackNode === l ? Ad.bind(null, e) : null)
    }
    function zd(e, t) {
        if (Ji())
            return null;
        cd(e, t, !0)
    }
    function dp() {
        Np(function () {
            (me & 6) !== 0 ? Du(hr, fp) : Cd()
        })
    }
    function Sc() {
        if (Al === 0) {
            var e = va;
            e === 0 && (e = Wn,
                Wn <<= 1,
                (Wn & 261888) === 0 && (Wn = 256)),
                Al = e
        }
        return Al
    }
    function Rd(e) {
        return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : ni("" + e)
    }
    function jd(e, t) {
        var l = t.ownerDocument.createElement("input");
        return l.name = t.name,
            l.value = t.value,
            e.id && l.setAttribute("form", e.id),
            t.parentNode.insertBefore(l, t),
            e = new FormData(e),
            l.parentNode.removeChild(l),
            e
    }
    function hp(e, t, l, a, n) {
        if (t === "submit" && l && l.stateNode === n) {
            var i = Rd((n[at] || null).action)
                , f = a.submitter;
            f && (t = (t = f[at] || null) ? Rd(t.formAction) : f.getAttribute("formAction"),
                t !== null && (i = t,
                    f = null));
            var m = new ci("action", "action", null, a, n);
            e.push({
                event: m,
                listeners: [{
                    instance: null,
                    listener: function () {
                        if (a.defaultPrevented) {
                            if (Al !== 0) {
                                var x = f ? jd(n, f) : new FormData(n);
                                Gs(l, {
                                    pending: !0,
                                    data: x,
                                    method: n.method,
                                    action: i
                                }, null, x)
                            }
                        } else
                            typeof i == "function" && (m.preventDefault(),
                                x = f ? jd(n, f) : new FormData(n),
                                Gs(l, {
                                    pending: !0,
                                    data: x,
                                    method: n.method,
                                    action: i
                                }, i, x))
                    },
                    currentTarget: n
                }]
            })
        }
    }
    for (var Ec = 0; Ec < ns.length; Ec++) {
        var Tc = ns[Ec]
            , mp = Tc.toLowerCase()
            , gp = Tc[0].toUpperCase() + Tc.slice(1);
        wt(mp, "on" + gp)
    }
    wt(io, "onAnimationEnd"),
        wt(uo, "onAnimationIteration"),
        wt(so, "onAnimationStart"),
        wt("dblclick", "onDoubleClick"),
        wt("focusin", "onFocus"),
        wt("focusout", "onBlur"),
        wt(Dg, "onTransitionRun"),
        wt(wg, "onTransitionStart"),
        wt(Mg, "onTransitionCancel"),
        wt(co, "onTransitionEnd"),
        na("onMouseEnter", ["mouseout", "mouseover"]),
        na("onMouseLeave", ["mouseout", "mouseover"]),
        na("onPointerEnter", ["pointerout", "pointerover"]),
        na("onPointerLeave", ["pointerout", "pointerover"]),
        Hl("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
        Hl("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
        Hl("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
        Hl("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
        Hl("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
        Hl("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var An = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
        , pp = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(An));
    function Dd(e, t) {
        t = (t & 4) !== 0;
        for (var l = 0; l < e.length; l++) {
            var a = e[l]
                , n = a.event;
            a = a.listeners;
            e: {
                var i = void 0;
                if (t)
                    for (var f = a.length - 1; 0 <= f; f--) {
                        var m = a[f]
                            , x = m.instance
                            , O = m.currentTarget;
                        if (m = m.listener,
                            x !== i && n.isPropagationStopped())
                            break e;
                        i = m,
                            n.currentTarget = O;
                        try {
                            i(n)
                        } catch (w) {
                            fi(w)
                        }
                        n.currentTarget = null,
                            i = x
                    }
                else
                    for (f = 0; f < a.length; f++) {
                        if (m = a[f],
                            x = m.instance,
                            O = m.currentTarget,
                            m = m.listener,
                            x !== i && n.isPropagationStopped())
                            break e;
                        i = m,
                            n.currentTarget = O;
                        try {
                            i(n)
                        } catch (w) {
                            fi(w)
                        }
                        n.currentTarget = null,
                            i = x
                    }
            }
        }
    }
    function ue(e, t) {
        var l = t[Lu];
        l === void 0 && (l = t[Lu] = new Set);
        var a = e + "__bubble";
        l.has(a) || (wd(t, e, 2, !1),
            l.add(a))
    }
    function Nc(e, t, l) {
        var a = 0;
        t && (a |= 4),
            wd(l, e, a, t)
    }
    var Wi = "_reactListening" + Math.random().toString(36).slice(2);
    function Cc(e) {
        if (!e[Wi]) {
            e[Wi] = !0,
                Tr.forEach(function (l) {
                    l !== "selectionchange" && (pp.has(l) || Nc(l, !1, e),
                        Nc(l, !0, e))
                });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[Wi] || (t[Wi] = !0,
                Nc("selectionchange", !1, t))
        }
    }
    function wd(e, t, l, a) {
        switch (sh(t)) {
            case 2:
                var n = Xp;
                break;
            case 8:
                n = Kp;
                break;
            default:
                n = Yc
        }
        l = n.bind(null, t, l, e),
            n = void 0,
            !Ku || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (n = !0),
            a ? n !== void 0 ? e.addEventListener(t, l, {
                capture: !0,
                passive: n
            }) : e.addEventListener(t, l, !0) : n !== void 0 ? e.addEventListener(t, l, {
                passive: n
            }) : e.addEventListener(t, l, !1)
    }
    function Oc(e, t, l, a, n) {
        var i = a;
        if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
            e: for (; ;) {
                if (a === null)
                    return;
                var f = a.tag;
                if (f === 3 || f === 4) {
                    var m = a.stateNode.containerInfo;
                    if (m === n)
                        break;
                    if (f === 4)
                        for (f = a.return; f !== null;) {
                            var x = f.tag;
                            if ((x === 3 || x === 4) && f.stateNode.containerInfo === n)
                                return;
                            f = f.return
                        }
                    for (; m !== null;) {
                        if (f = ta(m),
                            f === null)
                            return;
                        if (x = f.tag,
                            x === 5 || x === 6 || x === 26 || x === 27) {
                            a = i = f;
                            continue e
                        }
                        m = m.parentNode
                    }
                }
                a = a.return
            }
        Ur(function () {
            var O = i
                , w = Qu(l)
                , L = [];
            e: {
                var A = ro.get(e);
                if (A !== void 0) {
                    var R = ci
                        , X = e;
                    switch (e) {
                        case "keypress":
                            if (ui(l) === 0)
                                break e;
                        case "keydown":
                        case "keyup":
                            R = rg;
                            break;
                        case "focusin":
                            X = "focus",
                                R = Fu;
                            break;
                        case "focusout":
                            X = "blur",
                                R = Fu;
                            break;
                        case "beforeblur":
                        case "afterblur":
                            R = Fu;
                            break;
                        case "click":
                            if (l.button === 2)
                                break e;
                        case "auxclick":
                        case "dblclick":
                        case "mousedown":
                        case "mousemove":
                        case "mouseup":
                        case "mouseout":
                        case "mouseover":
                        case "contextmenu":
                            R = Br;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            R = Wm;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            R = dg;
                            break;
                        case io:
                        case uo:
                        case so:
                            R = eg;
                            break;
                        case co:
                            R = mg;
                            break;
                        case "scroll":
                        case "scrollend":
                            R = Fm;
                            break;
                        case "wheel":
                            R = pg;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            R = lg;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            R = Yr;
                            break;
                        case "toggle":
                        case "beforetoggle":
                            R = vg
                    }
                    var $ = (t & 4) !== 0
                        , Ee = !$ && (e === "scroll" || e === "scrollend")
                        , N = $ ? A !== null ? A + "Capture" : null : A;
                    $ = [];
                    for (var E = O, C; E !== null;) {
                        var U = E;
                        if (C = U.stateNode,
                            U = U.tag,
                            U !== 5 && U !== 26 && U !== 27 || C === null || N === null || (U = Ja(E, N),
                                U != null && $.push(zn(E, U, C))),
                            Ee)
                            break;
                        E = E.return
                    }
                    0 < $.length && (A = new R(A, X, null, l, w),
                        L.push({
                            event: A,
                            listeners: $
                        }))
                }
            }
            if ((t & 7) === 0) {
                e: {
                    if (A = e === "mouseover" || e === "pointerover",
                        R = e === "mouseout" || e === "pointerout",
                        A && l !== Vu && (X = l.relatedTarget || l.fromElement) && (ta(X) || X[ea]))
                        break e;
                    if ((R || A) && (A = w.window === w ? w : (A = w.ownerDocument) ? A.defaultView || A.parentWindow : window,
                        R ? (X = l.relatedTarget || l.toElement,
                            R = O,
                            X = X ? ta(X) : null,
                            X !== null && (Ee = d(X),
                                $ = X.tag,
                                X !== Ee || $ !== 5 && $ !== 27 && $ !== 6) && (X = null)) : (R = null,
                                    X = O),
                        R !== X)) {
                        if ($ = Br,
                            U = "onMouseLeave",
                            N = "onMouseEnter",
                            E = "mouse",
                            (e === "pointerout" || e === "pointerover") && ($ = Yr,
                                U = "onPointerLeave",
                                N = "onPointerEnter",
                                E = "pointer"),
                            Ee = R == null ? A : ka(R),
                            C = X == null ? A : ka(X),
                            A = new $(U, E + "leave", R, l, w),
                            A.target = Ee,
                            A.relatedTarget = C,
                            U = null,
                            ta(w) === O && ($ = new $(N, E + "enter", X, l, w),
                                $.target = C,
                                $.relatedTarget = Ee,
                                U = $),
                            Ee = U,
                            R && X)
                            t: {
                                for ($ = yp,
                                    N = R,
                                    E = X,
                                    C = 0,
                                    U = N; U; U = $(U))
                                    C++;
                                U = 0;
                                for (var J = E; J; J = $(J))
                                    U++;
                                for (; 0 < C - U;)
                                    N = $(N),
                                        C--;
                                for (; 0 < U - C;)
                                    E = $(E),
                                        U--;
                                for (; C--;) {
                                    if (N === E || E !== null && N === E.alternate) {
                                        $ = N;
                                        break t
                                    }
                                    N = $(N),
                                        E = $(E)
                                }
                                $ = null
                            }
                        else
                            $ = null;
                        R !== null && Md(L, A, R, $, !1),
                            X !== null && Ee !== null && Md(L, Ee, X, $, !0)
                    }
                }
                e: {
                    if (A = O ? ka(O) : window,
                        R = A.nodeName && A.nodeName.toLowerCase(),
                        R === "select" || R === "input" && A.type === "file")
                        var de = Jr;
                    else if (Zr(A))
                        if (Fr)
                            de = zg;
                        else {
                            de = Og;
                            var Z = Cg
                        }
                    else
                        R = A.nodeName,
                            !R || R.toLowerCase() !== "input" || A.type !== "checkbox" && A.type !== "radio" ? O && Gu(O.elementType) && (de = Jr) : de = Ag;
                    if (de && (de = de(e, O))) {
                        kr(L, de, l, w);
                        break e
                    }
                    Z && Z(e, A, O),
                        e === "focusout" && O && A.type === "number" && O.memoizedProps.value != null && Yu(A, "number", A.value)
                }
                switch (Z = O ? ka(O) : window,
                e) {
                    case "focusin":
                        (Zr(Z) || Z.contentEditable === "true") && (oa = Z,
                            ts = O,
                            ln = null);
                        break;
                    case "focusout":
                        ln = ts = oa = null;
                        break;
                    case "mousedown":
                        ls = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        ls = !1,
                            ao(L, l, w);
                        break;
                    case "selectionchange":
                        if (jg)
                            break;
                    case "keydown":
                    case "keyup":
                        ao(L, l, w)
                }
                var le;
                if (Wu)
                    e: {
                        switch (e) {
                            case "compositionstart":
                                var ce = "onCompositionStart";
                                break e;
                            case "compositionend":
                                ce = "onCompositionEnd";
                                break e;
                            case "compositionupdate":
                                ce = "onCompositionUpdate";
                                break e
                        }
                        ce = void 0
                    }
                else
                    ra ? Xr(e, l) && (ce = "onCompositionEnd") : e === "keydown" && l.keyCode === 229 && (ce = "onCompositionStart");
                ce && (Gr && l.locale !== "ko" && (ra || ce !== "onCompositionStart" ? ce === "onCompositionEnd" && ra && (le = Lr()) : (fl = w,
                    Zu = "value" in fl ? fl.value : fl.textContent,
                    ra = !0)),
                    Z = Ii(O, ce),
                    0 < Z.length && (ce = new qr(ce, e, null, l, w),
                        L.push({
                            event: ce,
                            listeners: Z
                        }),
                        le ? ce.data = le : (le = Kr(l),
                            le !== null && (ce.data = le)))),
                    (le = bg ? Sg(e, l) : Eg(e, l)) && (ce = Ii(O, "onBeforeInput"),
                        0 < ce.length && (Z = new qr("onBeforeInput", "beforeinput", null, l, w),
                            L.push({
                                event: Z,
                                listeners: ce
                            }),
                            Z.data = le)),
                    hp(L, e, O, l, w)
            }
            Dd(L, t)
        })
    }
    function zn(e, t, l) {
        return {
            instance: e,
            listener: t,
            currentTarget: l
        }
    }
    function Ii(e, t) {
        for (var l = t + "Capture", a = []; e !== null;) {
            var n = e
                , i = n.stateNode;
            if (n = n.tag,
                n !== 5 && n !== 26 && n !== 27 || i === null || (n = Ja(e, l),
                    n != null && a.unshift(zn(e, n, i)),
                    n = Ja(e, t),
                    n != null && a.push(zn(e, n, i))),
                e.tag === 3)
                return a;
            e = e.return
        }
        return []
    }
    function yp(e) {
        if (e === null)
            return null;
        do
            e = e.return;
        while (e && e.tag !== 5 && e.tag !== 27);
        return e || null
    }
    function Md(e, t, l, a, n) {
        for (var i = t._reactName, f = []; l !== null && l !== a;) {
            var m = l
                , x = m.alternate
                , O = m.stateNode;
            if (m = m.tag,
                x !== null && x === a)
                break;
            m !== 5 && m !== 26 && m !== 27 || O === null || (x = O,
                n ? (O = Ja(l, i),
                    O != null && f.unshift(zn(l, O, x))) : n || (O = Ja(l, i),
                        O != null && f.push(zn(l, O, x)))),
                l = l.return
        }
        f.length !== 0 && e.push({
            event: t,
            listeners: f
        })
    }
    var vp = /\r\n?/g
        , xp = /\u0000|\uFFFD/g;
    function _d(e) {
        return (typeof e == "string" ? e : "" + e).replace(vp, `
`).replace(xp, "")
    }
    function Ud(e, t) {
        return t = _d(t),
            _d(e) === t
    }
    function Se(e, t, l, a, n, i) {
        switch (l) {
            case "children":
                typeof a == "string" ? t === "body" || t === "textarea" && a === "" || ua(e, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && ua(e, "" + a);
                break;
            case "className":
                li(e, "class", a);
                break;
            case "tabIndex":
                li(e, "tabindex", a);
                break;
            case "dir":
            case "role":
            case "viewBox":
            case "width":
            case "height":
                li(e, l, a);
                break;
            case "style":
                Mr(e, a, i);
                break;
            case "data":
                if (t !== "object") {
                    li(e, "data", a);
                    break
                }
            case "src":
            case "href":
                if (a === "" && (t !== "a" || l !== "href")) {
                    e.removeAttribute(l);
                    break
                }
                if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
                    e.removeAttribute(l);
                    break
                }
                a = ni("" + a),
                    e.setAttribute(l, a);
                break;
            case "action":
            case "formAction":
                if (typeof a == "function") {
                    e.setAttribute(l, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                    break
                } else
                    typeof i == "function" && (l === "formAction" ? (t !== "input" && Se(e, t, "name", n.name, n, null),
                        Se(e, t, "formEncType", n.formEncType, n, null),
                        Se(e, t, "formMethod", n.formMethod, n, null),
                        Se(e, t, "formTarget", n.formTarget, n, null)) : (Se(e, t, "encType", n.encType, n, null),
                            Se(e, t, "method", n.method, n, null),
                            Se(e, t, "target", n.target, n, null)));
                if (a == null || typeof a == "symbol" || typeof a == "boolean") {
                    e.removeAttribute(l);
                    break
                }
                a = ni("" + a),
                    e.setAttribute(l, a);
                break;
            case "onClick":
                a != null && (e.onclick = Qt);
                break;
            case "onScroll":
                a != null && ue("scroll", e);
                break;
            case "onScrollEnd":
                a != null && ue("scrollend", e);
                break;
            case "dangerouslySetInnerHTML":
                if (a != null) {
                    if (typeof a != "object" || !("__html" in a))
                        throw Error(r(61));
                    if (l = a.__html,
                        l != null) {
                        if (n.children != null)
                            throw Error(r(60));
                        e.innerHTML = l
                    }
                }
                break;
            case "multiple":
                e.multiple = a && typeof a != "function" && typeof a != "symbol";
                break;
            case "muted":
                e.muted = a && typeof a != "function" && typeof a != "symbol";
                break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "defaultValue":
            case "defaultChecked":
            case "innerHTML":
            case "ref":
                break;
            case "autoFocus":
                break;
            case "xlinkHref":
                if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
                    e.removeAttribute("xlink:href");
                    break
                }
                l = ni("" + a),
                    e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
                break;
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
                a != null && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(l, "" + a) : e.removeAttribute(l);
                break;
            case "inert":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
                a && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(l, "") : e.removeAttribute(l);
                break;
            case "capture":
            case "download":
                a === !0 ? e.setAttribute(l, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(l, a) : e.removeAttribute(l);
                break;
            case "cols":
            case "rows":
            case "size":
            case "span":
                a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? e.setAttribute(l, a) : e.removeAttribute(l);
                break;
            case "rowSpan":
            case "start":
                a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? e.removeAttribute(l) : e.setAttribute(l, a);
                break;
            case "popover":
                ue("beforetoggle", e),
                    ue("toggle", e),
                    ti(e, "popover", a);
                break;
            case "xlinkActuate":
                Vt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
                break;
            case "xlinkArcrole":
                Vt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
                break;
            case "xlinkRole":
                Vt(e, "http://www.w3.org/1999/xlink", "xlink:role", a);
                break;
            case "xlinkShow":
                Vt(e, "http://www.w3.org/1999/xlink", "xlink:show", a);
                break;
            case "xlinkTitle":
                Vt(e, "http://www.w3.org/1999/xlink", "xlink:title", a);
                break;
            case "xlinkType":
                Vt(e, "http://www.w3.org/1999/xlink", "xlink:type", a);
                break;
            case "xmlBase":
                Vt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
                break;
            case "xmlLang":
                Vt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
                break;
            case "xmlSpace":
                Vt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
                break;
            case "is":
                ti(e, "is", a);
                break;
            case "innerText":
            case "textContent":
                break;
            default:
                (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = km.get(l) || l,
                    ti(e, l, a))
        }
    }
    function Ac(e, t, l, a, n, i) {
        switch (l) {
            case "style":
                Mr(e, a, i);
                break;
            case "dangerouslySetInnerHTML":
                if (a != null) {
                    if (typeof a != "object" || !("__html" in a))
                        throw Error(r(61));
                    if (l = a.__html,
                        l != null) {
                        if (n.children != null)
                            throw Error(r(60));
                        e.innerHTML = l
                    }
                }
                break;
            case "children":
                typeof a == "string" ? ua(e, a) : (typeof a == "number" || typeof a == "bigint") && ua(e, "" + a);
                break;
            case "onScroll":
                a != null && ue("scroll", e);
                break;
            case "onScrollEnd":
                a != null && ue("scrollend", e);
                break;
            case "onClick":
                a != null && (e.onclick = Qt);
                break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "innerHTML":
            case "ref":
                break;
            case "innerText":
            case "textContent":
                break;
            default:
                if (!Nr.hasOwnProperty(l))
                    e: {
                        if (l[0] === "o" && l[1] === "n" && (n = l.endsWith("Capture"),
                            t = l.slice(2, n ? l.length - 7 : void 0),
                            i = e[at] || null,
                            i = i != null ? i[l] : null,
                            typeof i == "function" && e.removeEventListener(t, i, n),
                            typeof a == "function")) {
                            typeof i != "function" && i !== null && (l in e ? e[l] = null : e.hasAttribute(l) && e.removeAttribute(l)),
                                e.addEventListener(t, a, n);
                            break e
                        }
                        l in e ? e[l] = a : a === !0 ? e.setAttribute(l, "") : ti(e, l, a)
                    }
        }
    }
    function $e(e, t, l) {
        switch (t) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
                break;
            case "img":
                ue("error", e),
                    ue("load", e);
                var a = !1, n = !1, i;
                for (i in l)
                    if (l.hasOwnProperty(i)) {
                        var f = l[i];
                        if (f != null)
                            switch (i) {
                                case "src":
                                    a = !0;
                                    break;
                                case "srcSet":
                                    n = !0;
                                    break;
                                case "children":
                                case "dangerouslySetInnerHTML":
                                    throw Error(r(137, t));
                                default:
                                    Se(e, t, i, f, l, null)
                            }
                    }
                n && Se(e, t, "srcSet", l.srcSet, l, null),
                    a && Se(e, t, "src", l.src, l, null);
                return;
            case "input":
                ue("invalid", e);
                var m = i = f = n = null
                    , x = null
                    , O = null;
                for (a in l)
                    if (l.hasOwnProperty(a)) {
                        var w = l[a];
                        if (w != null)
                            switch (a) {
                                case "name":
                                    n = w;
                                    break;
                                case "type":
                                    f = w;
                                    break;
                                case "checked":
                                    x = w;
                                    break;
                                case "defaultChecked":
                                    O = w;
                                    break;
                                case "value":
                                    i = w;
                                    break;
                                case "defaultValue":
                                    m = w;
                                    break;
                                case "children":
                                case "dangerouslySetInnerHTML":
                                    if (w != null)
                                        throw Error(r(137, t));
                                    break;
                                default:
                                    Se(e, t, a, w, l, null)
                            }
                    }
                Rr(e, i, m, x, O, f, n, !1);
                return;
            case "select":
                ue("invalid", e),
                    a = f = i = null;
                for (n in l)
                    if (l.hasOwnProperty(n) && (m = l[n],
                        m != null))
                        switch (n) {
                            case "value":
                                i = m;
                                break;
                            case "defaultValue":
                                f = m;
                                break;
                            case "multiple":
                                a = m;
                            default:
                                Se(e, t, n, m, l, null)
                        }
                t = i,
                    l = f,
                    e.multiple = !!a,
                    t != null ? ia(e, !!a, t, !1) : l != null && ia(e, !!a, l, !0);
                return;
            case "textarea":
                ue("invalid", e),
                    i = n = a = null;
                for (f in l)
                    if (l.hasOwnProperty(f) && (m = l[f],
                        m != null))
                        switch (f) {
                            case "value":
                                a = m;
                                break;
                            case "defaultValue":
                                n = m;
                                break;
                            case "children":
                                i = m;
                                break;
                            case "dangerouslySetInnerHTML":
                                if (m != null)
                                    throw Error(r(91));
                                break;
                            default:
                                Se(e, t, f, m, l, null)
                        }
                Dr(e, a, n, i);
                return;
            case "option":
                for (x in l)
                    l.hasOwnProperty(x) && (a = l[x],
                        a != null) && (x === "selected" ? e.selected = a && typeof a != "function" && typeof a != "symbol" : Se(e, t, x, a, l, null));
                return;
            case "dialog":
                ue("beforetoggle", e),
                    ue("toggle", e),
                    ue("cancel", e),
                    ue("close", e);
                break;
            case "iframe":
            case "object":
                ue("load", e);
                break;
            case "video":
            case "audio":
                for (a = 0; a < An.length; a++)
                    ue(An[a], e);
                break;
            case "image":
                ue("error", e),
                    ue("load", e);
                break;
            case "details":
                ue("toggle", e);
                break;
            case "embed":
            case "source":
            case "link":
                ue("error", e),
                    ue("load", e);
            case "area":
            case "base":
            case "br":
            case "col":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "track":
            case "wbr":
            case "menuitem":
                for (O in l)
                    if (l.hasOwnProperty(O) && (a = l[O],
                        a != null))
                        switch (O) {
                            case "children":
                            case "dangerouslySetInnerHTML":
                                throw Error(r(137, t));
                            default:
                                Se(e, t, O, a, l, null)
                        }
                return;
            default:
                if (Gu(t)) {
                    for (w in l)
                        l.hasOwnProperty(w) && (a = l[w],
                            a !== void 0 && Ac(e, t, w, a, l, void 0));
                    return
                }
        }
        for (m in l)
            l.hasOwnProperty(m) && (a = l[m],
                a != null && Se(e, t, m, a, l, null))
    }
    function bp(e, t, l, a) {
        switch (t) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
                break;
            case "input":
                var n = null
                    , i = null
                    , f = null
                    , m = null
                    , x = null
                    , O = null
                    , w = null;
                for (R in l) {
                    var L = l[R];
                    if (l.hasOwnProperty(R) && L != null)
                        switch (R) {
                            case "checked":
                                break;
                            case "value":
                                break;
                            case "defaultValue":
                                x = L;
                            default:
                                a.hasOwnProperty(R) || Se(e, t, R, null, a, L)
                        }
                }
                for (var A in a) {
                    var R = a[A];
                    if (L = l[A],
                        a.hasOwnProperty(A) && (R != null || L != null))
                        switch (A) {
                            case "type":
                                i = R;
                                break;
                            case "name":
                                n = R;
                                break;
                            case "checked":
                                O = R;
                                break;
                            case "defaultChecked":
                                w = R;
                                break;
                            case "value":
                                f = R;
                                break;
                            case "defaultValue":
                                m = R;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (R != null)
                                    throw Error(r(137, t));
                                break;
                            default:
                                R !== L && Se(e, t, A, R, a, L)
                        }
                }
                qu(e, f, m, x, O, w, i, n);
                return;
            case "select":
                R = f = m = A = null;
                for (i in l)
                    if (x = l[i],
                        l.hasOwnProperty(i) && x != null)
                        switch (i) {
                            case "value":
                                break;
                            case "multiple":
                                R = x;
                            default:
                                a.hasOwnProperty(i) || Se(e, t, i, null, a, x)
                        }
                for (n in a)
                    if (i = a[n],
                        x = l[n],
                        a.hasOwnProperty(n) && (i != null || x != null))
                        switch (n) {
                            case "value":
                                A = i;
                                break;
                            case "defaultValue":
                                m = i;
                                break;
                            case "multiple":
                                f = i;
                            default:
                                i !== x && Se(e, t, n, i, a, x)
                        }
                t = m,
                    l = f,
                    a = R,
                    A != null ? ia(e, !!l, A, !1) : !!a != !!l && (t != null ? ia(e, !!l, t, !0) : ia(e, !!l, l ? [] : "", !1));
                return;
            case "textarea":
                R = A = null;
                for (m in l)
                    if (n = l[m],
                        l.hasOwnProperty(m) && n != null && !a.hasOwnProperty(m))
                        switch (m) {
                            case "value":
                                break;
                            case "children":
                                break;
                            default:
                                Se(e, t, m, null, a, n)
                        }
                for (f in a)
                    if (n = a[f],
                        i = l[f],
                        a.hasOwnProperty(f) && (n != null || i != null))
                        switch (f) {
                            case "value":
                                A = n;
                                break;
                            case "defaultValue":
                                R = n;
                                break;
                            case "children":
                                break;
                            case "dangerouslySetInnerHTML":
                                if (n != null)
                                    throw Error(r(91));
                                break;
                            default:
                                n !== i && Se(e, t, f, n, a, i)
                        }
                jr(e, A, R);
                return;
            case "option":
                for (var X in l)
                    A = l[X],
                        l.hasOwnProperty(X) && A != null && !a.hasOwnProperty(X) && (X === "selected" ? e.selected = !1 : Se(e, t, X, null, a, A));
                for (x in a)
                    A = a[x],
                        R = l[x],
                        a.hasOwnProperty(x) && A !== R && (A != null || R != null) && (x === "selected" ? e.selected = A && typeof A != "function" && typeof A != "symbol" : Se(e, t, x, A, a, R));
                return;
            case "img":
            case "link":
            case "area":
            case "base":
            case "br":
            case "col":
            case "embed":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "source":
            case "track":
            case "wbr":
            case "menuitem":
                for (var $ in l)
                    A = l[$],
                        l.hasOwnProperty($) && A != null && !a.hasOwnProperty($) && Se(e, t, $, null, a, A);
                for (O in a)
                    if (A = a[O],
                        R = l[O],
                        a.hasOwnProperty(O) && A !== R && (A != null || R != null))
                        switch (O) {
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (A != null)
                                    throw Error(r(137, t));
                                break;
                            default:
                                Se(e, t, O, A, a, R)
                        }
                return;
            default:
                if (Gu(t)) {
                    for (var Ee in l)
                        A = l[Ee],
                            l.hasOwnProperty(Ee) && A !== void 0 && !a.hasOwnProperty(Ee) && Ac(e, t, Ee, void 0, a, A);
                    for (w in a)
                        A = a[w],
                            R = l[w],
                            !a.hasOwnProperty(w) || A === R || A === void 0 && R === void 0 || Ac(e, t, w, A, a, R);
                    return
                }
        }
        for (var N in l)
            A = l[N],
                l.hasOwnProperty(N) && A != null && !a.hasOwnProperty(N) && Se(e, t, N, null, a, A);
        for (L in a)
            A = a[L],
                R = l[L],
                !a.hasOwnProperty(L) || A === R || A == null && R == null || Se(e, t, L, A, a, R)
    }
    function Ld(e) {
        switch (e) {
            case "css":
            case "script":
            case "font":
            case "img":
            case "image":
            case "input":
            case "link":
                return !0;
            default:
                return !1
        }
    }
    function Sp() {
        if (typeof performance.getEntriesByType == "function") {
            for (var e = 0, t = 0, l = performance.getEntriesByType("resource"), a = 0; a < l.length; a++) {
                var n = l[a]
                    , i = n.transferSize
                    , f = n.initiatorType
                    , m = n.duration;
                if (i && m && Ld(f)) {
                    for (f = 0,
                        m = n.responseEnd,
                        a += 1; a < l.length; a++) {
                        var x = l[a]
                            , O = x.startTime;
                        if (O > m)
                            break;
                        var w = x.transferSize
                            , L = x.initiatorType;
                        w && Ld(L) && (x = x.responseEnd,
                            f += w * (x < m ? 1 : (m - O) / (x - O)))
                    }
                    if (--a,
                        t += 8 * (i + f) / (n.duration / 1e3),
                        e++,
                        10 < e)
                        break
                }
            }
            if (0 < e)
                return t / e / 1e6
        }
        return navigator.connection && (e = navigator.connection.downlink,
            typeof e == "number") ? e : 5
    }
    var zc = null
        , Rc = null;
    function Pi(e) {
        return e.nodeType === 9 ? e : e.ownerDocument
    }
    function Hd(e) {
        switch (e) {
            case "http://www.w3.org/2000/svg":
                return 1;
            case "http://www.w3.org/1998/Math/MathML":
                return 2;
            default:
                return 0
        }
    }
    function Bd(e, t) {
        if (e === 0)
            switch (t) {
                case "svg":
                    return 1;
                case "math":
                    return 2;
                default:
                    return 0
            }
        return e === 1 && t === "foreignObject" ? 0 : e
    }
    function jc(e, t) {
        return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
    }
    var Dc = null;
    function Ep() {
        var e = window.event;
        return e && e.type === "popstate" ? e === Dc ? !1 : (Dc = e,
            !0) : (Dc = null,
                !1)
    }
    var qd = typeof setTimeout == "function" ? setTimeout : void 0
        , Tp = typeof clearTimeout == "function" ? clearTimeout : void 0
        , Yd = typeof Promise == "function" ? Promise : void 0
        , Np = typeof queueMicrotask == "function" ? queueMicrotask : typeof Yd < "u" ? function (e) {
            return Yd.resolve(null).then(e).catch(Cp)
        }
            : qd;
    function Cp(e) {
        setTimeout(function () {
            throw e
        })
    }
    function zl(e) {
        return e === "head"
    }
    function Gd(e, t) {
        var l = t
            , a = 0;
        do {
            var n = l.nextSibling;
            if (e.removeChild(l),
                n && n.nodeType === 8)
                if (l = n.data,
                    l === "/$" || l === "/&") {
                    if (a === 0) {
                        e.removeChild(n),
                            Ha(t);
                        return
                    }
                    a--
                } else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&")
                    a++;
                else if (l === "html")
                    Rn(e.ownerDocument.documentElement);
                else if (l === "head") {
                    l = e.ownerDocument.head,
                        Rn(l);
                    for (var i = l.firstChild; i;) {
                        var f = i.nextSibling
                            , m = i.nodeName;
                        i[Za] || m === "SCRIPT" || m === "STYLE" || m === "LINK" && i.rel.toLowerCase() === "stylesheet" || l.removeChild(i),
                            i = f
                    }
                } else
                    l === "body" && Rn(e.ownerDocument.body);
            l = n
        } while (l);
        Ha(t)
    }
    function Vd(e, t) {
        var l = e;
        e = 0;
        do {
            var a = l.nextSibling;
            if (l.nodeType === 1 ? t ? (l._stashedDisplay = l.style.display,
                l.style.display = "none") : (l.style.display = l._stashedDisplay || "",
                    l.getAttribute("style") === "" && l.removeAttribute("style")) : l.nodeType === 3 && (t ? (l._stashedText = l.nodeValue,
                        l.nodeValue = "") : l.nodeValue = l._stashedText || ""),
                a && a.nodeType === 8)
                if (l = a.data,
                    l === "/$") {
                    if (e === 0)
                        break;
                    e--
                } else
                    l !== "$" && l !== "$?" && l !== "$~" && l !== "$!" || e++;
            l = a
        } while (l)
    }
    function wc(e) {
        var t = e.firstChild;
        for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
            var l = t;
            switch (t = t.nextSibling,
            l.nodeName) {
                case "HTML":
                case "HEAD":
                case "BODY":
                    wc(l),
                        Hu(l);
                    continue;
                case "SCRIPT":
                case "STYLE":
                    continue;
                case "LINK":
                    if (l.rel.toLowerCase() === "stylesheet")
                        continue
            }
            e.removeChild(l)
        }
    }
    function Op(e, t, l, a) {
        for (; e.nodeType === 1;) {
            var n = l;
            if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden"))
                    break
            } else if (a) {
                if (!e[Za])
                    switch (t) {
                        case "meta":
                            if (!e.hasAttribute("itemprop"))
                                break;
                            return e;
                        case "link":
                            if (i = e.getAttribute("rel"),
                                i === "stylesheet" && e.hasAttribute("data-precedence"))
                                break;
                            if (i !== n.rel || e.getAttribute("href") !== (n.href == null || n.href === "" ? null : n.href) || e.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin) || e.getAttribute("title") !== (n.title == null ? null : n.title))
                                break;
                            return e;
                        case "style":
                            if (e.hasAttribute("data-precedence"))
                                break;
                            return e;
                        case "script":
                            if (i = e.getAttribute("src"),
                                (i !== (n.src == null ? null : n.src) || e.getAttribute("type") !== (n.type == null ? null : n.type) || e.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin)) && i && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                                break;
                            return e;
                        default:
                            return e
                    }
            } else if (t === "input" && e.type === "hidden") {
                var i = n.name == null ? null : "" + n.name;
                if (n.type === "hidden" && e.getAttribute("name") === i)
                    return e
            } else
                return e;
            if (e = Rt(e.nextSibling),
                e === null)
                break
        }
        return null
    }
    function Ap(e, t, l) {
        if (t === "")
            return null;
        for (; e.nodeType !== 3;)
            if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = Rt(e.nextSibling),
                e === null))
                return null;
        return e
    }
    function Qd(e, t) {
        for (; e.nodeType !== 8;)
            if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Rt(e.nextSibling),
                e === null))
                return null;
        return e
    }
    function Mc(e) {
        return e.data === "$?" || e.data === "$~"
    }
    function _c(e) {
        return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading"
    }
    function zp(e, t) {
        var l = e.ownerDocument;
        if (e.data === "$~")
            e._reactRetry = t;
        else if (e.data !== "$?" || l.readyState !== "loading")
            t();
        else {
            var a = function () {
                t(),
                    l.removeEventListener("DOMContentLoaded", a)
            };
            l.addEventListener("DOMContentLoaded", a),
                e._reactRetry = a
        }
    }
    function Rt(e) {
        for (; e != null; e = e.nextSibling) {
            var t = e.nodeType;
            if (t === 1 || t === 3)
                break;
            if (t === 8) {
                if (t = e.data,
                    t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")
                    break;
                if (t === "/$" || t === "/&")
                    return null
            }
        }
        return e
    }
    var Uc = null;
    function Xd(e) {
        e = e.nextSibling;
        for (var t = 0; e;) {
            if (e.nodeType === 8) {
                var l = e.data;
                if (l === "/$" || l === "/&") {
                    if (t === 0)
                        return Rt(e.nextSibling);
                    t--
                } else
                    l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&" || t++
            }
            e = e.nextSibling
        }
        return null
    }
    function Kd(e) {
        e = e.previousSibling;
        for (var t = 0; e;) {
            if (e.nodeType === 8) {
                var l = e.data;
                if (l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
                    if (t === 0)
                        return e;
                    t--
                } else
                    l !== "/$" && l !== "/&" || t++
            }
            e = e.previousSibling
        }
        return null
    }
    function Zd(e, t, l) {
        switch (t = Pi(l),
        e) {
            case "html":
                if (e = t.documentElement,
                    !e)
                    throw Error(r(452));
                return e;
            case "head":
                if (e = t.head,
                    !e)
                    throw Error(r(453));
                return e;
            case "body":
                if (e = t.body,
                    !e)
                    throw Error(r(454));
                return e;
            default:
                throw Error(r(451))
        }
    }
    function Rn(e) {
        for (var t = e.attributes; t.length;)
            e.removeAttributeNode(t[0]);
        Hu(e)
    }
    var jt = new Map
        , kd = new Set;
    function eu(e) {
        return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument
    }
    var il = Y.d;
    Y.d = {
        f: Rp,
        r: jp,
        D: Dp,
        C: wp,
        L: Mp,
        m: _p,
        X: Lp,
        S: Up,
        M: Hp
    };
    function Rp() {
        var e = il.f()
            , t = Ki();
        return e || t
    }
    function jp(e) {
        var t = la(e);
        t !== null && t.tag === 5 && t.type === "form" ? of(t) : il.r(e)
    }
    var _a = typeof document > "u" ? null : document;
    function Jd(e, t, l) {
        var a = _a;
        if (a && typeof t == "string" && t) {
            var n = Et(t);
            n = 'link[rel="' + e + '"][href="' + n + '"]',
                typeof l == "string" && (n += '[crossorigin="' + l + '"]'),
                kd.has(n) || (kd.add(n),
                    e = {
                        rel: e,
                        crossOrigin: l,
                        href: t
                    },
                    a.querySelector(n) === null && (t = a.createElement("link"),
                        $e(t, "link", e),
                        Qe(t),
                        a.head.appendChild(t)))
        }
    }
    function Dp(e) {
        il.D(e),
            Jd("dns-prefetch", e, null)
    }
    function wp(e, t) {
        il.C(e, t),
            Jd("preconnect", e, t)
    }
    function Mp(e, t, l) {
        il.L(e, t, l);
        var a = _a;
        if (a && e && t) {
            var n = 'link[rel="preload"][as="' + Et(t) + '"]';
            t === "image" && l && l.imageSrcSet ? (n += '[imagesrcset="' + Et(l.imageSrcSet) + '"]',
                typeof l.imageSizes == "string" && (n += '[imagesizes="' + Et(l.imageSizes) + '"]')) : n += '[href="' + Et(e) + '"]';
            var i = n;
            switch (t) {
                case "style":
                    i = Ua(e);
                    break;
                case "script":
                    i = La(e)
            }
            jt.has(i) || (e = b({
                rel: "preload",
                href: t === "image" && l && l.imageSrcSet ? void 0 : e,
                as: t
            }, l),
                jt.set(i, e),
                a.querySelector(n) !== null || t === "style" && a.querySelector(jn(i)) || t === "script" && a.querySelector(Dn(i)) || (t = a.createElement("link"),
                    $e(t, "link", e),
                    Qe(t),
                    a.head.appendChild(t)))
        }
    }
    function _p(e, t) {
        il.m(e, t);
        var l = _a;
        if (l && e) {
            var a = t && typeof t.as == "string" ? t.as : "script"
                , n = 'link[rel="modulepreload"][as="' + Et(a) + '"][href="' + Et(e) + '"]'
                , i = n;
            switch (a) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    i = La(e)
            }
            if (!jt.has(i) && (e = b({
                rel: "modulepreload",
                href: e
            }, t),
                jt.set(i, e),
                l.querySelector(n) === null)) {
                switch (a) {
                    case "audioworklet":
                    case "paintworklet":
                    case "serviceworker":
                    case "sharedworker":
                    case "worker":
                    case "script":
                        if (l.querySelector(Dn(i)))
                            return
                }
                a = l.createElement("link"),
                    $e(a, "link", e),
                    Qe(a),
                    l.head.appendChild(a)
            }
        }
    }
    function Up(e, t, l) {
        il.S(e, t, l);
        var a = _a;
        if (a && e) {
            var n = aa(a).hoistableStyles
                , i = Ua(e);
            t = t || "default";
            var f = n.get(i);
            if (!f) {
                var m = {
                    loading: 0,
                    preload: null
                };
                if (f = a.querySelector(jn(i)))
                    m.loading = 5;
                else {
                    e = b({
                        rel: "stylesheet",
                        href: e,
                        "data-precedence": t
                    }, l),
                        (l = jt.get(i)) && Lc(e, l);
                    var x = f = a.createElement("link");
                    Qe(x),
                        $e(x, "link", e),
                        x._p = new Promise(function (O, w) {
                            x.onload = O,
                                x.onerror = w
                        }
                        ),
                        x.addEventListener("load", function () {
                            m.loading |= 1
                        }),
                        x.addEventListener("error", function () {
                            m.loading |= 2
                        }),
                        m.loading |= 4,
                        tu(f, t, a)
                }
                f = {
                    type: "stylesheet",
                    instance: f,
                    count: 1,
                    state: m
                },
                    n.set(i, f)
            }
        }
    }
    function Lp(e, t) {
        il.X(e, t);
        var l = _a;
        if (l && e) {
            var a = aa(l).hoistableScripts
                , n = La(e)
                , i = a.get(n);
            i || (i = l.querySelector(Dn(n)),
                i || (e = b({
                    src: e,
                    async: !0
                }, t),
                    (t = jt.get(n)) && Hc(e, t),
                    i = l.createElement("script"),
                    Qe(i),
                    $e(i, "link", e),
                    l.head.appendChild(i)),
                i = {
                    type: "script",
                    instance: i,
                    count: 1,
                    state: null
                },
                a.set(n, i))
        }
    }
    function Hp(e, t) {
        il.M(e, t);
        var l = _a;
        if (l && e) {
            var a = aa(l).hoistableScripts
                , n = La(e)
                , i = a.get(n);
            i || (i = l.querySelector(Dn(n)),
                i || (e = b({
                    src: e,
                    async: !0,
                    type: "module"
                }, t),
                    (t = jt.get(n)) && Hc(e, t),
                    i = l.createElement("script"),
                    Qe(i),
                    $e(i, "link", e),
                    l.head.appendChild(i)),
                i = {
                    type: "script",
                    instance: i,
                    count: 1,
                    state: null
                },
                a.set(n, i))
        }
    }
    function Fd(e, t, l, a) {
        var n = (n = ne.current) ? eu(n) : null;
        if (!n)
            throw Error(r(446));
        switch (e) {
            case "meta":
            case "title":
                return null;
            case "style":
                return typeof l.precedence == "string" && typeof l.href == "string" ? (t = Ua(l.href),
                    l = aa(n).hoistableStyles,
                    a = l.get(t),
                    a || (a = {
                        type: "style",
                        instance: null,
                        count: 0,
                        state: null
                    },
                        l.set(t, a)),
                    a) : {
                    type: "void",
                    instance: null,
                    count: 0,
                    state: null
                };
            case "link":
                if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
                    e = Ua(l.href);
                    var i = aa(n).hoistableStyles
                        , f = i.get(e);
                    if (f || (n = n.ownerDocument || n,
                        f = {
                            type: "stylesheet",
                            instance: null,
                            count: 0,
                            state: {
                                loading: 0,
                                preload: null
                            }
                        },
                        i.set(e, f),
                        (i = n.querySelector(jn(e))) && !i._p && (f.instance = i,
                            f.state.loading = 5),
                        jt.has(e) || (l = {
                            rel: "preload",
                            as: "style",
                            href: l.href,
                            crossOrigin: l.crossOrigin,
                            integrity: l.integrity,
                            media: l.media,
                            hrefLang: l.hrefLang,
                            referrerPolicy: l.referrerPolicy
                        },
                            jt.set(e, l),
                            i || Bp(n, e, l, f.state))),
                        t && a === null)
                        throw Error(r(528, ""));
                    return f
                }
                if (t && a !== null)
                    throw Error(r(529, ""));
                return null;
            case "script":
                return t = l.async,
                    l = l.src,
                    typeof l == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = La(l),
                        l = aa(n).hoistableScripts,
                        a = l.get(t),
                        a || (a = {
                            type: "script",
                            instance: null,
                            count: 0,
                            state: null
                        },
                            l.set(t, a)),
                        a) : {
                        type: "void",
                        instance: null,
                        count: 0,
                        state: null
                    };
            default:
                throw Error(r(444, e))
        }
    }
    function Ua(e) {
        return 'href="' + Et(e) + '"'
    }
    function jn(e) {
        return 'link[rel="stylesheet"][' + e + "]"
    }
    function $d(e) {
        return b({}, e, {
            "data-precedence": e.precedence,
            precedence: null
        })
    }
    function Bp(e, t, l, a) {
        e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = e.createElement("link"),
            a.preload = t,
            t.addEventListener("load", function () {
                return a.loading |= 1
            }),
            t.addEventListener("error", function () {
                return a.loading |= 2
            }),
            $e(t, "link", l),
            Qe(t),
            e.head.appendChild(t))
    }
    function La(e) {
        return '[src="' + Et(e) + '"]'
    }
    function Dn(e) {
        return "script[async]" + e
    }
    function Wd(e, t, l) {
        if (t.count++,
            t.instance === null)
            switch (t.type) {
                case "style":
                    var a = e.querySelector('style[data-href~="' + Et(l.href) + '"]');
                    if (a)
                        return t.instance = a,
                            Qe(a),
                            a;
                    var n = b({}, l, {
                        "data-href": l.href,
                        "data-precedence": l.precedence,
                        href: null,
                        precedence: null
                    });
                    return a = (e.ownerDocument || e).createElement("style"),
                        Qe(a),
                        $e(a, "style", n),
                        tu(a, l.precedence, e),
                        t.instance = a;
                case "stylesheet":
                    n = Ua(l.href);
                    var i = e.querySelector(jn(n));
                    if (i)
                        return t.state.loading |= 4,
                            t.instance = i,
                            Qe(i),
                            i;
                    a = $d(l),
                        (n = jt.get(n)) && Lc(a, n),
                        i = (e.ownerDocument || e).createElement("link"),
                        Qe(i);
                    var f = i;
                    return f._p = new Promise(function (m, x) {
                        f.onload = m,
                            f.onerror = x
                    }
                    ),
                        $e(i, "link", a),
                        t.state.loading |= 4,
                        tu(i, l.precedence, e),
                        t.instance = i;
                case "script":
                    return i = La(l.src),
                        (n = e.querySelector(Dn(i))) ? (t.instance = n,
                            Qe(n),
                            n) : (a = l,
                                (n = jt.get(i)) && (a = b({}, l),
                                    Hc(a, n)),
                                e = e.ownerDocument || e,
                                n = e.createElement("script"),
                                Qe(n),
                                $e(n, "link", a),
                                e.head.appendChild(n),
                                t.instance = n);
                case "void":
                    return null;
                default:
                    throw Error(r(443, t.type))
            }
        else
            t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance,
                t.state.loading |= 4,
                tu(a, l.precedence, e));
        return t.instance
    }
    function tu(e, t, l) {
        for (var a = l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), n = a.length ? a[a.length - 1] : null, i = n, f = 0; f < a.length; f++) {
            var m = a[f];
            if (m.dataset.precedence === t)
                i = m;
            else if (i !== n)
                break
        }
        i ? i.parentNode.insertBefore(e, i.nextSibling) : (t = l.nodeType === 9 ? l.head : l,
            t.insertBefore(e, t.firstChild))
    }
    function Lc(e, t) {
        e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
            e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
            e.title == null && (e.title = t.title)
    }
    function Hc(e, t) {
        e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
            e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
            e.integrity == null && (e.integrity = t.integrity)
    }
    var lu = null;
    function Id(e, t, l) {
        if (lu === null) {
            var a = new Map
                , n = lu = new Map;
            n.set(l, a)
        } else
            n = lu,
                a = n.get(l),
                a || (a = new Map,
                    n.set(l, a));
        if (a.has(e))
            return a;
        for (a.set(e, null),
            l = l.getElementsByTagName(e),
            n = 0; n < l.length; n++) {
            var i = l[n];
            if (!(i[Za] || i[Ze] || e === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
                var f = i.getAttribute(t) || "";
                f = e + f;
                var m = a.get(f);
                m ? m.push(i) : a.set(f, [i])
            }
        }
        return a
    }
    function Pd(e, t, l) {
        e = e.ownerDocument || e,
            e.head.insertBefore(l, t === "title" ? e.querySelector("head > title") : null)
    }
    function qp(e, t, l) {
        if (l === 1 || t.itemProp != null)
            return !1;
        switch (e) {
            case "meta":
            case "title":
                return !0;
            case "style":
                if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
                    break;
                return !0;
            case "link":
                if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
                    break;
                return t.rel === "stylesheet" ? (e = t.disabled,
                    typeof t.precedence == "string" && e == null) : !0;
            case "script":
                if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
                    return !0
        }
        return !1
    }
    function eh(e) {
        return !(e.type === "stylesheet" && (e.state.loading & 3) === 0)
    }
    function Yp(e, t, l, a) {
        if (l.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (l.state.loading & 4) === 0) {
            if (l.instance === null) {
                var n = Ua(a.href)
                    , i = t.querySelector(jn(n));
                if (i) {
                    t = i._p,
                        t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++,
                            e = au.bind(e),
                            t.then(e, e)),
                        l.state.loading |= 4,
                        l.instance = i,
                        Qe(i);
                    return
                }
                i = t.ownerDocument || t,
                    a = $d(a),
                    (n = jt.get(n)) && Lc(a, n),
                    i = i.createElement("link"),
                    Qe(i);
                var f = i;
                f._p = new Promise(function (m, x) {
                    f.onload = m,
                        f.onerror = x
                }
                ),
                    $e(i, "link", a),
                    l.instance = i
            }
            e.stylesheets === null && (e.stylesheets = new Map),
                e.stylesheets.set(l, t),
                (t = l.state.preload) && (l.state.loading & 3) === 0 && (e.count++,
                    l = au.bind(e),
                    t.addEventListener("load", l),
                    t.addEventListener("error", l))
        }
    }
    var Bc = 0;
    function Gp(e, t) {
        return e.stylesheets && e.count === 0 && iu(e, e.stylesheets),
            0 < e.count || 0 < e.imgCount ? function (l) {
                var a = setTimeout(function () {
                    if (e.stylesheets && iu(e, e.stylesheets),
                        e.unsuspend) {
                        var i = e.unsuspend;
                        e.unsuspend = null,
                            i()
                    }
                }, 6e4 + t);
                0 < e.imgBytes && Bc === 0 && (Bc = 62500 * Sp());
                var n = setTimeout(function () {
                    if (e.waitingForImages = !1,
                        e.count === 0 && (e.stylesheets && iu(e, e.stylesheets),
                            e.unsuspend)) {
                        var i = e.unsuspend;
                        e.unsuspend = null,
                            i()
                    }
                }, (e.imgBytes > Bc ? 50 : 800) + t);
                return e.unsuspend = l,
                    function () {
                        e.unsuspend = null,
                            clearTimeout(a),
                            clearTimeout(n)
                    }
            }
                : null
    }
    function au() {
        if (this.count--,
            this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
            if (this.stylesheets)
                iu(this, this.stylesheets);
            else if (this.unsuspend) {
                var e = this.unsuspend;
                this.unsuspend = null,
                    e()
            }
        }
    }
    var nu = null;
    function iu(e, t) {
        e.stylesheets = null,
            e.unsuspend !== null && (e.count++,
                nu = new Map,
                t.forEach(Vp, e),
                nu = null,
                au.call(e))
    }
    function Vp(e, t) {
        if (!(t.state.loading & 4)) {
            var l = nu.get(e);
            if (l)
                var a = l.get(null);
            else {
                l = new Map,
                    nu.set(e, l);
                for (var n = e.querySelectorAll("link[data-precedence],style[data-precedence]"), i = 0; i < n.length; i++) {
                    var f = n[i];
                    (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (l.set(f.dataset.precedence, f),
                        a = f)
                }
                a && l.set(null, a)
            }
            n = t.instance,
                f = n.getAttribute("data-precedence"),
                i = l.get(f) || a,
                i === a && l.set(null, n),
                l.set(f, n),
                this.count++,
                a = au.bind(this),
                n.addEventListener("load", a),
                n.addEventListener("error", a),
                i ? i.parentNode.insertBefore(n, i.nextSibling) : (e = e.nodeType === 9 ? e.head : e,
                    e.insertBefore(n, e.firstChild)),
                t.state.loading |= 4
        }
    }
    var wn = {
        $$typeof: k,
        Provider: null,
        Consumer: null,
        _currentValue: F,
        _currentValue2: F,
        _threadCount: 0
    };
    function Qp(e, t, l, a, n, i, f, m, x) {
        this.tag = 1,
            this.containerInfo = e,
            this.pingCache = this.current = this.pendingChildren = null,
            this.timeoutHandle = -1,
            this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null,
            this.callbackPriority = 0,
            this.expirationTimes = Mu(-1),
            this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
            this.entanglements = Mu(0),
            this.hiddenUpdates = Mu(null),
            this.identifierPrefix = a,
            this.onUncaughtError = n,
            this.onCaughtError = i,
            this.onRecoverableError = f,
            this.pooledCache = null,
            this.pooledCacheLanes = 0,
            this.formState = x,
            this.incompleteTransitions = new Map
    }
    function th(e, t, l, a, n, i, f, m, x, O, w, L) {
        return e = new Qp(e, t, l, f, x, O, w, L, m),
            t = 1,
            i === !0 && (t |= 24),
            i = mt(3, null, null, t),
            e.current = i,
            i.stateNode = e,
            t = ys(),
            t.refCount++,
            e.pooledCache = t,
            t.refCount++,
            i.memoizedState = {
                element: a,
                isDehydrated: l,
                cache: t
            },
            Ss(i),
            e
    }
    function lh(e) {
        return e ? (e = ha,
            e) : ha
    }
    function ah(e, t, l, a, n, i) {
        n = lh(n),
            a.context === null ? a.context = n : a.pendingContext = n,
            a = yl(t),
            a.payload = {
                element: l
            },
            i = i === void 0 ? null : i,
            i !== null && (a.callback = i),
            l = vl(e, a, t),
            l !== null && (rt(l, e, t),
                on(l, e, t))
    }
    function nh(e, t) {
        if (e = e.memoizedState,
            e !== null && e.dehydrated !== null) {
            var l = e.retryLane;
            e.retryLane = l !== 0 && l < t ? l : t
        }
    }
    function qc(e, t) {
        nh(e, t),
            (e = e.alternate) && nh(e, t)
    }
    function ih(e) {
        if (e.tag === 13 || e.tag === 31) {
            var t = Gl(e, 67108864);
            t !== null && rt(t, e, 67108864),
                qc(e, 67108864)
        }
    }
    function uh(e) {
        if (e.tag === 13 || e.tag === 31) {
            var t = xt();
            t = _u(t);
            var l = Gl(e, t);
            l !== null && rt(l, e, t),
                qc(e, t)
        }
    }
    var uu = !0;
    function Xp(e, t, l, a) {
        var n = D.T;
        D.T = null;
        var i = Y.p;
        try {
            Y.p = 2,
                Yc(e, t, l, a)
        } finally {
            Y.p = i,
                D.T = n
        }
    }
    function Kp(e, t, l, a) {
        var n = D.T;
        D.T = null;
        var i = Y.p;
        try {
            Y.p = 8,
                Yc(e, t, l, a)
        } finally {
            Y.p = i,
                D.T = n
        }
    }
    function Yc(e, t, l, a) {
        if (uu) {
            var n = Gc(a);
            if (n === null)
                Oc(e, t, a, su, l),
                    ch(e, a);
            else if (kp(n, e, t, l, a))
                a.stopPropagation();
            else if (ch(e, a),
                t & 4 && -1 < Zp.indexOf(e)) {
                for (; n !== null;) {
                    var i = la(n);
                    if (i !== null)
                        switch (i.tag) {
                            case 3:
                                if (i = i.stateNode,
                                    i.current.memoizedState.isDehydrated) {
                                    var f = Ll(i.pendingLanes);
                                    if (f !== 0) {
                                        var m = i;
                                        for (m.pendingLanes |= 2,
                                            m.entangledLanes |= 2; f;) {
                                            var x = 1 << 31 - dt(f);
                                            m.entanglements[1] |= x,
                                                f &= ~x
                                        }
                                        qt(i),
                                            (me & 6) === 0 && (Qi = ot() + 500,
                                                On(0))
                                    }
                                }
                                break;
                            case 31:
                            case 13:
                                m = Gl(i, 2),
                                    m !== null && rt(m, i, 2),
                                    Ki(),
                                    qc(i, 2)
                        }
                    if (i = Gc(a),
                        i === null && Oc(e, t, a, su, l),
                        i === n)
                        break;
                    n = i
                }
                n !== null && a.stopPropagation()
            } else
                Oc(e, t, a, null, l)
        }
    }
    function Gc(e) {
        return e = Qu(e),
            Vc(e)
    }
    var su = null;
    function Vc(e) {
        if (su = null,
            e = ta(e),
            e !== null) {
            var t = d(e);
            if (t === null)
                e = null;
            else {
                var l = t.tag;
                if (l === 13) {
                    if (e = h(t),
                        e !== null)
                        return e;
                    e = null
                } else if (l === 31) {
                    if (e = p(t),
                        e !== null)
                        return e;
                    e = null
                } else if (l === 3) {
                    if (t.stateNode.current.memoizedState.isDehydrated)
                        return t.tag === 3 ? t.stateNode.containerInfo : null;
                    e = null
                } else
                    t !== e && (e = null)
            }
        }
        return su = e,
            null
    }
    function sh(e) {
        switch (e) {
            case "beforetoggle":
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
            case "toggle":
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
                return 2;
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
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
                return 8;
            case "message":
                switch (Dm()) {
                    case hr:
                        return 2;
                    case mr:
                        return 8;
                    case $n:
                    case wm:
                        return 32;
                    case gr:
                        return 268435456;
                    default:
                        return 32
                }
            default:
                return 32
        }
    }
    var Qc = !1
        , Rl = null
        , jl = null
        , Dl = null
        , Mn = new Map
        , _n = new Map
        , wl = []
        , Zp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function ch(e, t) {
        switch (e) {
            case "focusin":
            case "focusout":
                Rl = null;
                break;
            case "dragenter":
            case "dragleave":
                jl = null;
                break;
            case "mouseover":
            case "mouseout":
                Dl = null;
                break;
            case "pointerover":
            case "pointerout":
                Mn.delete(t.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                _n.delete(t.pointerId)
        }
    }
    function Un(e, t, l, a, n, i) {
        return e === null || e.nativeEvent !== i ? (e = {
            blockedOn: t,
            domEventName: l,
            eventSystemFlags: a,
            nativeEvent: i,
            targetContainers: [n]
        },
            t !== null && (t = la(t),
                t !== null && ih(t)),
            e) : (e.eventSystemFlags |= a,
                t = e.targetContainers,
                n !== null && t.indexOf(n) === -1 && t.push(n),
                e)
    }
    function kp(e, t, l, a, n) {
        switch (t) {
            case "focusin":
                return Rl = Un(Rl, e, t, l, a, n),
                    !0;
            case "dragenter":
                return jl = Un(jl, e, t, l, a, n),
                    !0;
            case "mouseover":
                return Dl = Un(Dl, e, t, l, a, n),
                    !0;
            case "pointerover":
                var i = n.pointerId;
                return Mn.set(i, Un(Mn.get(i) || null, e, t, l, a, n)),
                    !0;
            case "gotpointercapture":
                return i = n.pointerId,
                    _n.set(i, Un(_n.get(i) || null, e, t, l, a, n)),
                    !0
        }
        return !1
    }
    function rh(e) {
        var t = ta(e.target);
        if (t !== null) {
            var l = d(t);
            if (l !== null) {
                if (t = l.tag,
                    t === 13) {
                    if (t = h(l),
                        t !== null) {
                        e.blockedOn = t,
                            Sr(e.priority, function () {
                                uh(l)
                            });
                        return
                    }
                } else if (t === 31) {
                    if (t = p(l),
                        t !== null) {
                        e.blockedOn = t,
                            Sr(e.priority, function () {
                                uh(l)
                            });
                        return
                    }
                } else if (t === 3 && l.stateNode.current.memoizedState.isDehydrated) {
                    e.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
                    return
                }
            }
        }
        e.blockedOn = null
    }
    function cu(e) {
        if (e.blockedOn !== null)
            return !1;
        for (var t = e.targetContainers; 0 < t.length;) {
            var l = Gc(e.nativeEvent);
            if (l === null) {
                l = e.nativeEvent;
                var a = new l.constructor(l.type, l);
                Vu = a,
                    l.target.dispatchEvent(a),
                    Vu = null
            } else
                return t = la(l),
                    t !== null && ih(t),
                    e.blockedOn = l,
                    !1;
            t.shift()
        }
        return !0
    }
    function oh(e, t, l) {
        cu(e) && l.delete(t)
    }
    function Jp() {
        Qc = !1,
            Rl !== null && cu(Rl) && (Rl = null),
            jl !== null && cu(jl) && (jl = null),
            Dl !== null && cu(Dl) && (Dl = null),
            Mn.forEach(oh),
            _n.forEach(oh)
    }
    function ru(e, t) {
        e.blockedOn === t && (e.blockedOn = null,
            Qc || (Qc = !0,
                s.unstable_scheduleCallback(s.unstable_NormalPriority, Jp)))
    }
    var ou = null;
    function fh(e) {
        ou !== e && (ou = e,
            s.unstable_scheduleCallback(s.unstable_NormalPriority, function () {
                ou === e && (ou = null);
                for (var t = 0; t < e.length; t += 3) {
                    var l = e[t]
                        , a = e[t + 1]
                        , n = e[t + 2];
                    if (typeof a != "function") {
                        if (Vc(a || l) === null)
                            continue;
                        break
                    }
                    var i = la(l);
                    i !== null && (e.splice(t, 3),
                        t -= 3,
                        Gs(i, {
                            pending: !0,
                            data: n,
                            method: l.method,
                            action: a
                        }, a, n))
                }
            }))
    }
    function Ha(e) {
        function t(x) {
            return ru(x, e)
        }
        Rl !== null && ru(Rl, e),
            jl !== null && ru(jl, e),
            Dl !== null && ru(Dl, e),
            Mn.forEach(t),
            _n.forEach(t);
        for (var l = 0; l < wl.length; l++) {
            var a = wl[l];
            a.blockedOn === e && (a.blockedOn = null)
        }
        for (; 0 < wl.length && (l = wl[0],
            l.blockedOn === null);)
            rh(l),
                l.blockedOn === null && wl.shift();
        if (l = (e.ownerDocument || e).$$reactFormReplay,
            l != null)
            for (a = 0; a < l.length; a += 3) {
                var n = l[a]
                    , i = l[a + 1]
                    , f = n[at] || null;
                if (typeof i == "function")
                    f || fh(l);
                else if (f) {
                    var m = null;
                    if (i && i.hasAttribute("formAction")) {
                        if (n = i,
                            f = i[at] || null)
                            m = f.formAction;
                        else if (Vc(n) !== null)
                            continue
                    } else
                        m = f.action;
                    typeof m == "function" ? l[a + 1] = m : (l.splice(a, 3),
                        a -= 3),
                        fh(l)
                }
            }
    }
    function dh() {
        function e(i) {
            i.canIntercept && i.info === "react-transition" && i.intercept({
                handler: function () {
                    return new Promise(function (f) {
                        return n = f
                    }
                    )
                },
                focusReset: "manual",
                scroll: "manual"
            })
        }
        function t() {
            n !== null && (n(),
                n = null),
                a || setTimeout(l, 20)
        }
        function l() {
            if (!a && !navigation.transition) {
                var i = navigation.currentEntry;
                i && i.url != null && navigation.navigate(i.url, {
                    state: i.getState(),
                    info: "react-transition",
                    history: "replace"
                })
            }
        }
        if (typeof navigation == "object") {
            var a = !1
                , n = null;
            return navigation.addEventListener("navigate", e),
                navigation.addEventListener("navigatesuccess", t),
                navigation.addEventListener("navigateerror", t),
                setTimeout(l, 100),
                function () {
                    a = !0,
                        navigation.removeEventListener("navigate", e),
                        navigation.removeEventListener("navigatesuccess", t),
                        navigation.removeEventListener("navigateerror", t),
                        n !== null && (n(),
                            n = null)
                }
        }
    }
    function Xc(e) {
        this._internalRoot = e
    }
    fu.prototype.render = Xc.prototype.render = function (e) {
        var t = this._internalRoot;
        if (t === null)
            throw Error(r(409));
        var l = t.current
            , a = xt();
        ah(l, a, e, t, null, null)
    }
        ,
        fu.prototype.unmount = Xc.prototype.unmount = function () {
            var e = this._internalRoot;
            if (e !== null) {
                this._internalRoot = null;
                var t = e.containerInfo;
                ah(e.current, 2, null, e, null, null),
                    Ki(),
                    t[ea] = null
            }
        }
        ;
    function fu(e) {
        this._internalRoot = e
    }
    fu.prototype.unstable_scheduleHydration = function (e) {
        if (e) {
            var t = br();
            e = {
                blockedOn: null,
                target: e,
                priority: t
            };
            for (var l = 0; l < wl.length && t !== 0 && t < wl[l].priority; l++)
                ;
            wl.splice(l, 0, e),
                l === 0 && rh(e)
        }
    }
        ;
    var hh = u.version;
    if (hh !== "19.2.3")
        throw Error(r(527, hh, "19.2.3"));
    Y.findDOMNode = function (e) {
        var t = e._reactInternals;
        if (t === void 0)
            throw typeof e.render == "function" ? Error(r(188)) : (e = Object.keys(e).join(","),
                Error(r(268, e)));
        return e = g(t),
            e = e !== null ? T(e) : null,
            e = e === null ? null : e.stateNode,
            e
    }
        ;
    var Fp = {
        bundleType: 0,
        version: "19.2.3",
        rendererPackageName: "react-dom",
        currentDispatcherRef: D,
        reconcilerVersion: "19.2.3"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var du = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!du.isDisabled && du.supportsFiber)
            try {
                Qa = du.inject(Fp),
                    ft = du
            } catch { }
    }
    return Bn.createRoot = function (e, t) {
        if (!o(e))
            throw Error(r(299));
        var l = !1
            , a = ""
            , n = bf
            , i = Sf
            , f = Ef;
        return t != null && (t.unstable_strictMode === !0 && (l = !0),
            t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
            t.onUncaughtError !== void 0 && (n = t.onUncaughtError),
            t.onCaughtError !== void 0 && (i = t.onCaughtError),
            t.onRecoverableError !== void 0 && (f = t.onRecoverableError)),
            t = th(e, 1, !1, null, null, l, a, null, n, i, f, dh),
            e[ea] = t.current,
            Cc(e),
            new Xc(t)
    }
        ,
        Bn.hydrateRoot = function (e, t, l) {
            if (!o(e))
                throw Error(r(299));
            var a = !1
                , n = ""
                , i = bf
                , f = Sf
                , m = Ef
                , x = null;
            return l != null && (l.unstable_strictMode === !0 && (a = !0),
                l.identifierPrefix !== void 0 && (n = l.identifierPrefix),
                l.onUncaughtError !== void 0 && (i = l.onUncaughtError),
                l.onCaughtError !== void 0 && (f = l.onCaughtError),
                l.onRecoverableError !== void 0 && (m = l.onRecoverableError),
                l.formState !== void 0 && (x = l.formState)),
                t = th(e, 1, !0, t, l ?? null, a, n, x, i, f, m, dh),
                t.context = lh(null),
                l = t.current,
                a = xt(),
                a = _u(a),
                n = yl(a),
                n.callback = null,
                vl(l, n, a),
                l = a,
                t.current.lanes = l,
                Ka(t, l),
                qt(t),
                e[ea] = t.current,
                Cc(e),
                new fu(t)
        }
        ,
        Bn.version = "19.2.3",
        Bn
}
var Zh;
function ey() {
    if (Zh)
        return Fc.exports;
    Zh = 1;
    function s() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)
            } catch (u) {
                console.error(u)
            }
    }
    return s(),
        Fc.exports = P0(),
        Fc.exports
}
var ty = ey();
var kh = "popstate";
function ly(s = {}) {
    function u(r, o) {
        let { pathname: d, search: h, hash: p } = r.location;
        return nr("", {
            pathname: d,
            search: h,
            hash: p
        }, o.state && o.state.usr || null, o.state && o.state.key || "default")
    }
    function c(r, o) {
        return typeof o == "string" ? o : Kn(o)
    }
    return ny(u, c, null, s)
}
function Ge(s, u) {
    if (s === !1 || s === null || typeof s > "u")
        throw new Error(u)
}
function Ut(s, u) {
    if (!s) {
        typeof console < "u" && console.warn(u);
        try {
            throw new Error(u)
        } catch { }
    }
}
function ay() {
    return Math.random().toString(36).substring(2, 10)
}
function Jh(s, u) {
    return {
        usr: s.state,
        key: s.key,
        idx: u
    }
}
function nr(s, u, c = null, r) {
    return {
        pathname: typeof s == "string" ? s : s.pathname,
        search: "",
        hash: "",
        ...typeof u == "string" ? Zn(u) : u,
        state: c,
        key: u && u.key || r || ay()
    }
}
function Kn({ pathname: s = "/", search: u = "", hash: c = "" }) {
    return u && u !== "?" && (s += u.charAt(0) === "?" ? u : "?" + u),
        c && c !== "#" && (s += c.charAt(0) === "#" ? c : "#" + c),
        s
}
function Zn(s) {
    let u = {};
    if (s) {
        let c = s.indexOf("#");
        c >= 0 && (u.hash = s.substring(c),
            s = s.substring(0, c));
        let r = s.indexOf("?");
        r >= 0 && (u.search = s.substring(r),
            s = s.substring(0, r)),
            s && (u.pathname = s)
    }
    return u
}
function ny(s, u, c, r = {}) {
    let { window: o = document.defaultView, v5Compat: d = !1 } = r
        , h = o.history
        , p = "POP"
        , y = null
        , g = T();
    g == null && (g = 0,
        h.replaceState({
            ...h.state,
            idx: g
        }, ""));
    function T() {
        return (h.state || {
            idx: null
        }).idx
    }
    function b() {
        p = "POP";
        let q = T()
            , K = q == null ? null : q - g;
        g = q,
            y && y({
                action: p,
                location: B.location,
                delta: K
            })
    }
    function z(q, K) {
        p = "PUSH";
        let V = nr(B.location, q, K);
        g = T() + 1;
        let k = Jh(V, g)
            , ae = B.createHref(V);
        try {
            h.pushState(k, "", ae)
        } catch (re) {
            if (re instanceof DOMException && re.name === "DataCloneError")
                throw re;
            o.location.assign(ae)
        }
        d && y && y({
            action: p,
            location: B.location,
            delta: 1
        })
    }
    function j(q, K) {
        p = "REPLACE";
        let V = nr(B.location, q, K);
        g = T();
        let k = Jh(V, g)
            , ae = B.createHref(V);
        h.replaceState(k, "", ae),
            d && y && y({
                action: p,
                location: B.location,
                delta: 0
            })
    }
    function H(q) {
        return iy(q)
    }
    let B = {
        get action() {
            return p
        },
        get location() {
            return s(o, h)
        },
        listen(q) {
            if (y)
                throw new Error("A history only accepts one active listener");
            return o.addEventListener(kh, b),
                y = q,
                () => {
                    o.removeEventListener(kh, b),
                        y = null
                }
        },
        createHref(q) {
            return u(o, q)
        },
        createURL: H,
        encodeLocation(q) {
            let K = H(q);
            return {
                pathname: K.pathname,
                search: K.search,
                hash: K.hash
            }
        },
        push: z,
        replace: j,
        go(q) {
            return h.go(q)
        }
    };
    return B
}
function iy(s, u = !1) {
    let c = "http://localhost";
    typeof window < "u" && (c = window.location.origin !== "null" ? window.location.origin : window.location.href),
        Ge(c, "No window.location.(origin|href) available to create URL");
    let r = typeof s == "string" ? s : Kn(s);
    return r = r.replace(/ $/, "%20"),
        !u && r.startsWith("//") && (r = c + r),
        new URL(r, c)
}
function im(s, u, c = "/") {
    return uy(s, u, c, !1)
}
function uy(s, u, c, r) {
    let o = typeof u == "string" ? Zn(u) : u
        , d = sl(o.pathname || "/", c);
    if (d == null)
        return null;
    let h = um(s);
    sy(h);
    let p = null;
    for (let y = 0; p == null && y < h.length; ++y) {
        let g = vy(d);
        p = py(h[y], g, r)
    }
    return p
}
function um(s, u = [], c = [], r = "", o = !1) {
    let d = (h, p, y = o, g) => {
        let T = {
            relativePath: g === void 0 ? h.path || "" : g,
            caseSensitive: h.caseSensitive === !0,
            childrenIndex: p,
            route: h
        };
        if (T.relativePath.startsWith("/")) {
            if (!T.relativePath.startsWith(r) && y)
                return;
            Ge(T.relativePath.startsWith(r), `Absolute route path "${T.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),
                T.relativePath = T.relativePath.slice(r.length)
        }
        let b = ul([r, T.relativePath])
            , z = c.concat(T);
        h.children && h.children.length > 0 && (Ge(h.index !== !0, `Index routes must not have child routes. Please remove all child routes from route path "${b}".`),
            um(h.children, u, z, b, y)),
            !(h.path == null && !h.index) && u.push({
                path: b,
                score: my(b, h.index),
                routesMeta: z
            })
    }
        ;
    return s.forEach((h, p) => {
        if (h.path === "" || !h.path?.includes("?"))
            d(h, p);
        else
            for (let y of sm(h.path))
                d(h, p, !0, y)
    }
    ),
        u
}
function sm(s) {
    let u = s.split("/");
    if (u.length === 0)
        return [];
    let [c, ...r] = u
        , o = c.endsWith("?")
        , d = c.replace(/\?$/, "");
    if (r.length === 0)
        return o ? [d, ""] : [d];
    let h = sm(r.join("/"))
        , p = [];
    return p.push(...h.map(y => y === "" ? d : [d, y].join("/"))),
        o && p.push(...h),
        p.map(y => s.startsWith("/") && y === "" ? "/" : y)
}
function sy(s) {
    s.sort((u, c) => u.score !== c.score ? c.score - u.score : gy(u.routesMeta.map(r => r.childrenIndex), c.routesMeta.map(r => r.childrenIndex)))
}
var cy = /^:[\w-]+$/
    , ry = 3
    , oy = 2
    , fy = 1
    , dy = 10
    , hy = -2
    , Fh = s => s === "*";
function my(s, u) {
    let c = s.split("/")
        , r = c.length;
    return c.some(Fh) && (r += hy),
        u && (r += oy),
        c.filter(o => !Fh(o)).reduce((o, d) => o + (cy.test(d) ? ry : d === "" ? fy : dy), r)
}
function gy(s, u) {
    return s.length === u.length && s.slice(0, -1).every((r, o) => r === u[o]) ? s[s.length - 1] - u[u.length - 1] : 0
}
function py(s, u, c = !1) {
    let { routesMeta: r } = s
        , o = {}
        , d = "/"
        , h = [];
    for (let p = 0; p < r.length; ++p) {
        let y = r[p]
            , g = p === r.length - 1
            , T = d === "/" ? u : u.slice(d.length) || "/"
            , b = Eu({
                path: y.relativePath,
                caseSensitive: y.caseSensitive,
                end: g
            }, T)
            , z = y.route;
        if (!b && g && c && !r[r.length - 1].route.index && (b = Eu({
            path: y.relativePath,
            caseSensitive: y.caseSensitive,
            end: !1
        }, T)),
            !b)
            return null;
        Object.assign(o, b.params),
            h.push({
                params: o,
                pathname: ul([d, b.pathname]),
                pathnameBase: Ey(ul([d, b.pathnameBase])),
                route: z
            }),
            b.pathnameBase !== "/" && (d = ul([d, b.pathnameBase]))
    }
    return h
}
function Eu(s, u) {
    typeof s == "string" && (s = {
        path: s,
        caseSensitive: !1,
        end: !0
    });
    let [c, r] = yy(s.path, s.caseSensitive, s.end)
        , o = u.match(c);
    if (!o)
        return null;
    let d = o[0]
        , h = d.replace(/(.)\/+$/, "$1")
        , p = o.slice(1);
    return {
        params: r.reduce((g, { paramName: T, isOptional: b }, z) => {
            if (T === "*") {
                let H = p[z] || "";
                h = d.slice(0, d.length - H.length).replace(/(.)\/+$/, "$1")
            }
            const j = p[z];
            return b && !j ? g[T] = void 0 : g[T] = (j || "").replace(/%2F/g, "/"),
                g
        }
            , {}),
        pathname: d,
        pathnameBase: h,
        pattern: s
    }
}
function yy(s, u = !1, c = !0) {
    Ut(s === "*" || !s.endsWith("*") || s.endsWith("/*"), `Route path "${s}" will be treated as if it were "${s.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/, "/*")}".`);
    let r = []
        , o = "^" + s.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (h, p, y) => (r.push({
            paramName: p,
            isOptional: y != null
        }),
            y ? "/?([^\\/]+)?" : "/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
    return s.endsWith("*") ? (r.push({
        paramName: "*"
    }),
        o += s === "*" || s === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : c ? o += "\\/*$" : s !== "" && s !== "/" && (o += "(?:(?=\\/|$))"),
        [new RegExp(o, u ? void 0 : "i"), r]
}
function vy(s) {
    try {
        return s.split("/").map(u => decodeURIComponent(u).replace(/\//g, "%2F")).join("/")
    } catch (u) {
        return Ut(!1, `The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${u}).`),
            s
    }
}
function sl(s, u) {
    if (u === "/")
        return s;
    if (!s.toLowerCase().startsWith(u.toLowerCase()))
        return null;
    let c = u.endsWith("/") ? u.length - 1 : u.length
        , r = s.charAt(c);
    return r && r !== "/" ? null : s.slice(c) || "/"
}
var cm = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
    , xy = s => cm.test(s);
function by(s, u = "/") {
    let { pathname: c, search: r = "", hash: o = "" } = typeof s == "string" ? Zn(s) : s, d;
    if (c)
        if (xy(c))
            d = c;
        else {
            if (c.includes("//")) {
                let h = c;
                c = c.replace(/\/\/+/g, "/"),
                    Ut(!1, `Pathnames cannot have embedded double slashes - normalizing ${h} -> ${c}`)
            }
            c.startsWith("/") ? d = $h(c.substring(1), "/") : d = $h(c, u)
        }
    else
        d = u;
    return {
        pathname: d,
        search: Ty(r),
        hash: Ny(o)
    }
}
function $h(s, u) {
    let c = u.replace(/\/+$/, "").split("/");
    return s.split("/").forEach(o => {
        o === ".." ? c.length > 1 && c.pop() : o !== "." && c.push(o)
    }
    ),
        c.length > 1 ? c.join("/") : "/"
}
function Pc(s, u, c, r) {
    return `Cannot include a '${s}' character in a manually specified \`to.${u}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${c}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`
}
function Sy(s) {
    return s.filter((u, c) => c === 0 || u.route.path && u.route.path.length > 0)
}
function rm(s) {
    let u = Sy(s);
    return u.map((c, r) => r === u.length - 1 ? c.pathname : c.pathnameBase)
}
function om(s, u, c, r = !1) {
    let o;
    typeof s == "string" ? o = Zn(s) : (o = {
        ...s
    },
        Ge(!o.pathname || !o.pathname.includes("?"), Pc("?", "pathname", "search", o)),
        Ge(!o.pathname || !o.pathname.includes("#"), Pc("#", "pathname", "hash", o)),
        Ge(!o.search || !o.search.includes("#"), Pc("#", "search", "hash", o)));
    let d = s === "" || o.pathname === "", h = d ? "/" : o.pathname, p;
    if (h == null)
        p = c;
    else {
        let b = u.length - 1;
        if (!r && h.startsWith("..")) {
            let z = h.split("/");
            for (; z[0] === "..";)
                z.shift(),
                    b -= 1;
            o.pathname = z.join("/")
        }
        p = b >= 0 ? u[b] : "/"
    }
    let y = by(o, p)
        , g = h && h !== "/" && h.endsWith("/")
        , T = (d || h === ".") && c.endsWith("/");
    return !y.pathname.endsWith("/") && (g || T) && (y.pathname += "/"),
        y
}
var ul = s => s.join("/").replace(/\/\/+/g, "/")
    , Ey = s => s.replace(/\/+$/, "").replace(/^\/*/, "/")
    , Ty = s => !s || s === "?" ? "" : s.startsWith("?") ? s : "?" + s
    , Ny = s => !s || s === "#" ? "" : s.startsWith("#") ? s : "#" + s
    , Cy = class {
        constructor(s, u, c, r = !1) {
            this.status = s,
                this.statusText = u || "",
                this.internal = r,
                c instanceof Error ? (this.data = c.toString(),
                    this.error = c) : this.data = c
        }
    }
    ;
function Oy(s) {
    return s != null && typeof s.status == "number" && typeof s.statusText == "string" && typeof s.internal == "boolean" && "data" in s
}
function Ay(s) {
    return s.map(u => u.route.path).filter(Boolean).join("/").replace(/\/\/*/g, "/") || "/"
}
var fm = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function dm(s, u) {
    let c = s;
    if (typeof c != "string" || !cm.test(c))
        return {
            absoluteURL: void 0,
            isExternal: !1,
            to: c
        };
    let r = c
        , o = !1;
    if (fm)
        try {
            let d = new URL(window.location.href)
                , h = c.startsWith("//") ? new URL(d.protocol + c) : new URL(c)
                , p = sl(h.pathname, u);
            h.origin === d.origin && p != null ? c = p + h.search + h.hash : o = !0
        } catch {
            Ut(!1, `<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)
        }
    return {
        absoluteURL: r,
        isExternal: o,
        to: c
    }
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var hm = ["POST", "PUT", "PATCH", "DELETE"];
new Set(hm);
var zy = ["GET", ...hm];
new Set(zy);
var Ga = M.createContext(null);
Ga.displayName = "DataRouter";
var Nu = M.createContext(null);
Nu.displayName = "DataRouterState";
var Ry = M.createContext(!1)
    , mm = M.createContext({
        isTransitioning: !1
    });
mm.displayName = "ViewTransition";
var jy = M.createContext(new Map);
jy.displayName = "Fetchers";
var Dy = M.createContext(null);
Dy.displayName = "Await";
var Dt = M.createContext(null);
Dt.displayName = "Navigation";
var Cu = M.createContext(null);
Cu.displayName = "Location";
var cl = M.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
});
cl.displayName = "Route";
var ur = M.createContext(null);
ur.displayName = "RouteError";
var gm = "REACT_ROUTER_ERROR"
    , wy = "REDIRECT"
    , My = "ROUTE_ERROR_RESPONSE";
function _y(s) {
    if (s.startsWith(`${gm}:${wy}:{`))
        try {
            let u = JSON.parse(s.slice(28));
            if (typeof u == "object" && u && typeof u.status == "number" && typeof u.statusText == "string" && typeof u.location == "string" && typeof u.reloadDocument == "boolean" && typeof u.replace == "boolean")
                return u
        } catch { }
}
function Uy(s) {
    if (s.startsWith(`${gm}:${My}:{`))
        try {
            let u = JSON.parse(s.slice(40));
            if (typeof u == "object" && u && typeof u.status == "number" && typeof u.statusText == "string")
                return new Cy(u.status, u.statusText, u.data)
        } catch { }
}
function Ly(s, { relative: u } = {}) {
    Ge(kn(), "useHref() may be used only in the context of a <Router> component.");
    let { basename: c, navigator: r } = M.useContext(Dt)
        , { hash: o, pathname: d, search: h } = Jn(s, {
            relative: u
        })
        , p = d;
    return c !== "/" && (p = d === "/" ? c : ul([c, d])),
        r.createHref({
            pathname: p,
            search: h,
            hash: o
        })
}
function kn() {
    return M.useContext(Cu) != null
}
function _l() {
    return Ge(kn(), "useLocation() may be used only in the context of a <Router> component."),
        M.useContext(Cu).location
}
var pm = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function ym(s) {
    M.useContext(Dt).static || M.useLayoutEffect(s)
}
function vm() {
    let { isDataRoute: s } = M.useContext(cl);
    return s ? Fy() : Hy()
}
function Hy() {
    Ge(kn(), "useNavigate() may be used only in the context of a <Router> component.");
    let s = M.useContext(Ga)
        , { basename: u, navigator: c } = M.useContext(Dt)
        , { matches: r } = M.useContext(cl)
        , { pathname: o } = _l()
        , d = JSON.stringify(rm(r))
        , h = M.useRef(!1);
    return ym(() => {
        h.current = !0
    }
    ),
        M.useCallback((y, g = {}) => {
            if (Ut(h.current, pm),
                !h.current)
                return;
            if (typeof y == "number") {
                c.go(y);
                return
            }
            let T = om(y, JSON.parse(d), o, g.relative === "path");
            s == null && u !== "/" && (T.pathname = T.pathname === "/" ? u : ul([u, T.pathname])),
                (g.replace ? c.replace : c.push)(T, g.state, g)
        }
            , [u, c, d, o, s])
}
M.createContext(null);
function Jn(s, { relative: u } = {}) {
    let { matches: c } = M.useContext(cl)
        , { pathname: r } = _l()
        , o = JSON.stringify(rm(c));
    return M.useMemo(() => om(s, JSON.parse(o), r, u === "path"), [s, o, r, u])
}
function By(s, u) {
    return xm(s)
}
function xm(s, u, c, r, o) {
    Ge(kn(), "useRoutes() may be used only in the context of a <Router> component.");
    let { navigator: d } = M.useContext(Dt)
        , { matches: h } = M.useContext(cl)
        , p = h[h.length - 1]
        , y = p ? p.params : {}
        , g = p ? p.pathname : "/"
        , T = p ? p.pathnameBase : "/"
        , b = p && p.route;
    {
        let V = b && b.path || "";
        Sm(g, !b || V.endsWith("*") || V.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${V}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${V}"> to <Route path="${V === "/" ? "*" : `${V}/*`}">.`)
    }
    let z = _l(), j;
    j = z;
    let H = j.pathname || "/"
        , B = H;
    if (T !== "/") {
        let V = T.replace(/^\//, "").split("/");
        B = "/" + H.replace(/^\//, "").split("/").slice(V.length).join("/")
    }
    let q = im(s, {
        pathname: B
    });
    return Ut(b || q != null, `No routes matched location "${j.pathname}${j.search}${j.hash}" `),
        Ut(q == null || q[q.length - 1].route.element !== void 0 || q[q.length - 1].route.Component !== void 0 || q[q.length - 1].route.lazy !== void 0, `Matched leaf route at location "${j.pathname}${j.search}${j.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),
        Qy(q && q.map(V => Object.assign({}, V, {
            params: Object.assign({}, y, V.params),
            pathname: ul([T, d.encodeLocation ? d.encodeLocation(V.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : V.pathname]),
            pathnameBase: V.pathnameBase === "/" ? T : ul([T, d.encodeLocation ? d.encodeLocation(V.pathnameBase.replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : V.pathnameBase])
        })), h, c, r, o)
}
function qy() {
    let s = Jy()
        , u = Oy(s) ? `${s.status} ${s.statusText}` : s instanceof Error ? s.message : JSON.stringify(s)
        , c = s instanceof Error ? s.stack : null
        , r = "rgba(200,200,200, 0.5)"
        , o = {
            padding: "0.5rem",
            backgroundColor: r
        }
        , d = {
            padding: "2px 4px",
            backgroundColor: r
        }
        , h = null;
    return console.error("Error handled by React Router default ErrorBoundary:", s),
        h = M.createElement(M.Fragment, null, M.createElement("p", null, "💿 Hey developer 👋"), M.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", M.createElement("code", {
            style: d
        }, "ErrorBoundary"), " or", " ", M.createElement("code", {
            style: d
        }, "errorElement"), " prop on your route.")),
        M.createElement(M.Fragment, null, M.createElement("h2", null, "Unexpected Application Error!"), M.createElement("h3", {
            style: {
                fontStyle: "italic"
            }
        }, u), c ? M.createElement("pre", {
            style: o
        }, c) : null, h)
}
var Yy = M.createElement(qy, null)
    , bm = class extends M.Component {
        constructor(s) {
            super(s),
                this.state = {
                    location: s.location,
                    revalidation: s.revalidation,
                    error: s.error
                }
        }
        static getDerivedStateFromError(s) {
            return {
                error: s
            }
        }
        static getDerivedStateFromProps(s, u) {
            return u.location !== s.location || u.revalidation !== "idle" && s.revalidation === "idle" ? {
                error: s.error,
                location: s.location,
                revalidation: s.revalidation
            } : {
                error: s.error !== void 0 ? s.error : u.error,
                location: u.location,
                revalidation: s.revalidation || u.revalidation
            }
        }
        componentDidCatch(s, u) {
            this.props.onError ? this.props.onError(s, u) : console.error("React Router caught the following error during render", s)
        }
        render() {
            let s = this.state.error;
            if (this.context && typeof s == "object" && s && "digest" in s && typeof s.digest == "string") {
                const c = Uy(s.digest);
                c && (s = c)
            }
            let u = s !== void 0 ? M.createElement(cl.Provider, {
                value: this.props.routeContext
            }, M.createElement(ur.Provider, {
                value: s,
                children: this.props.component
            })) : this.props.children;
            return this.context ? M.createElement(Gy, {
                error: s
            }, u) : u
        }
    }
    ;
bm.contextType = Ry;
var er = new WeakMap;
function Gy({ children: s, error: u }) {
    let { basename: c } = M.useContext(Dt);
    if (typeof u == "object" && u && "digest" in u && typeof u.digest == "string") {
        let r = _y(u.digest);
        if (r) {
            let o = er.get(u);
            if (o)
                throw o;
            let d = dm(r.location, c);
            if (fm && !er.get(u))
                if (d.isExternal || r.reloadDocument)
                    window.location.href = d.absoluteURL || d.to;
                else {
                    const h = Promise.resolve().then(() => window.__reactRouterDataRouter.navigate(d.to, {
                        replace: r.replace
                    }));
                    throw er.set(u, h),
                    h
                }
            return M.createElement("meta", {
                httpEquiv: "refresh",
                content: `0;url=${d.absoluteURL || d.to}`
            })
        }
    }
    return s
}
function Vy({ routeContext: s, match: u, children: c }) {
    let r = M.useContext(Ga);
    return r && r.static && r.staticContext && (u.route.errorElement || u.route.ErrorBoundary) && (r.staticContext._deepestRenderedBoundaryId = u.route.id),
        M.createElement(cl.Provider, {
            value: s
        }, c)
}
function Qy(s, u = [], c = null, r = null, o = null) {
    if (s == null) {
        if (!c)
            return null;
        if (c.errors)
            s = c.matches;
        else if (u.length === 0 && !c.initialized && c.matches.length > 0)
            s = c.matches;
        else
            return null
    }
    let d = s
        , h = c?.errors;
    if (h != null) {
        let T = d.findIndex(b => b.route.id && h?.[b.route.id] !== void 0);
        Ge(T >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`),
            d = d.slice(0, Math.min(d.length, T + 1))
    }
    let p = !1
        , y = -1;
    if (c)
        for (let T = 0; T < d.length; T++) {
            let b = d[T];
            if ((b.route.HydrateFallback || b.route.hydrateFallbackElement) && (y = T),
                b.route.id) {
                let { loaderData: z, errors: j } = c
                    , H = b.route.loader && !z.hasOwnProperty(b.route.id) && (!j || j[b.route.id] === void 0);
                if (b.route.lazy || H) {
                    p = !0,
                        y >= 0 ? d = d.slice(0, y + 1) : d = [d[0]];
                    break
                }
            }
        }
    let g = c && r ? (T, b) => {
        r(T, {
            location: c.location,
            params: c.matches?.[0]?.params ?? {},
            unstable_pattern: Ay(c.matches),
            errorInfo: b
        })
    }
        : void 0;
    return d.reduceRight((T, b, z) => {
        let j, H = !1, B = null, q = null;
        c && (j = h && b.route.id ? h[b.route.id] : void 0,
            B = b.route.errorElement || Yy,
            p && (y < 0 && z === 0 ? (Sm("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"),
                H = !0,
                q = null) : y === z && (H = !0,
                    q = b.route.hydrateFallbackElement || null)));
        let K = u.concat(d.slice(0, z + 1))
            , V = () => {
                let k;
                return j ? k = B : H ? k = q : b.route.Component ? k = M.createElement(b.route.Component, null) : b.route.element ? k = b.route.element : k = T,
                    M.createElement(Vy, {
                        match: b,
                        routeContext: {
                            outlet: T,
                            matches: K,
                            isDataRoute: c != null
                        },
                        children: k
                    })
            }
            ;
        return c && (b.route.ErrorBoundary || b.route.errorElement || z === 0) ? M.createElement(bm, {
            location: c.location,
            revalidation: c.revalidation,
            component: B,
            error: j,
            children: V(),
            routeContext: {
                outlet: null,
                matches: K,
                isDataRoute: !0
            },
            onError: g
        }) : V()
    }
        , null)
}
function sr(s) {
    return `${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}
function Xy(s) {
    let u = M.useContext(Ga);
    return Ge(u, sr(s)),
        u
}
function Ky(s) {
    let u = M.useContext(Nu);
    return Ge(u, sr(s)),
        u
}
function Zy(s) {
    let u = M.useContext(cl);
    return Ge(u, sr(s)),
        u
}
function cr(s) {
    let u = Zy(s)
        , c = u.matches[u.matches.length - 1];
    return Ge(c.route.id, `${s} can only be used on routes that contain a unique "id"`),
        c.route.id
}
function ky() {
    return cr("useRouteId")
}
function Jy() {
    let s = M.useContext(ur)
        , u = Ky("useRouteError")
        , c = cr("useRouteError");
    return s !== void 0 ? s : u.errors?.[c]
}
function Fy() {
    let { router: s } = Xy("useNavigate")
        , u = cr("useNavigate")
        , c = M.useRef(!1);
    return ym(() => {
        c.current = !0
    }
    ),
        M.useCallback(async (o, d = {}) => {
            Ut(c.current, pm),
                c.current && (typeof o == "number" ? await s.navigate(o) : await s.navigate(o, {
                    fromRouteId: u,
                    ...d
                }))
        }
            , [s, u])
}
var Wh = {};
function Sm(s, u, c) {
    !u && !Wh[s] && (Wh[s] = !0,
        Ut(!1, c))
}
M.memo($y);
function $y({ routes: s, future: u, state: c, onError: r }) {
    return xm(s, void 0, c, r, u)
}
function Wy({ basename: s = "/", children: u = null, location: c, navigationType: r = "POP", navigator: o, static: d = !1, unstable_useTransitions: h }) {
    Ge(!kn(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
    let p = s.replace(/^\/*/, "/")
        , y = M.useMemo(() => ({
            basename: p,
            navigator: o,
            static: d,
            unstable_useTransitions: h,
            future: {}
        }), [p, o, d, h]);
    typeof c == "string" && (c = Zn(c));
    let { pathname: g = "/", search: T = "", hash: b = "", state: z = null, key: j = "default" } = c
        , H = M.useMemo(() => {
            let B = sl(g, p);
            return B == null ? null : {
                location: {
                    pathname: B,
                    search: T,
                    hash: b,
                    state: z,
                    key: j
                },
                navigationType: r
            }
        }
            , [p, g, T, b, z, j, r]);
    return Ut(H != null, `<Router basename="${p}"> is not able to match the URL "${g}${T}${b}" because it does not start with the basename, so the <Router> won't render anything.`),
        H == null ? null : M.createElement(Dt.Provider, {
            value: y
        }, M.createElement(Cu.Provider, {
            children: u,
            value: H
        }))
}
var yu = "get"
    , vu = "application/x-www-form-urlencoded";
function Ou(s) {
    return typeof HTMLElement < "u" && s instanceof HTMLElement
}
function Iy(s) {
    return Ou(s) && s.tagName.toLowerCase() === "button"
}
function Py(s) {
    return Ou(s) && s.tagName.toLowerCase() === "form"
}
function ev(s) {
    return Ou(s) && s.tagName.toLowerCase() === "input"
}
function tv(s) {
    return !!(s.metaKey || s.altKey || s.ctrlKey || s.shiftKey)
}
function lv(s, u) {
    return s.button === 0 && (!u || u === "_self") && !tv(s)
}
var pu = null;
function av() {
    if (pu === null)
        try {
            new FormData(document.createElement("form"), 0),
                pu = !1
        } catch {
            pu = !0
        }
    return pu
}
var nv = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function tr(s) {
    return s != null && !nv.has(s) ? (Ut(!1, `"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${vu}"`),
        null) : s
}
function iv(s, u) {
    let c, r, o, d, h;
    if (Py(s)) {
        let p = s.getAttribute("action");
        r = p ? sl(p, u) : null,
            c = s.getAttribute("method") || yu,
            o = tr(s.getAttribute("enctype")) || vu,
            d = new FormData(s)
    } else if (Iy(s) || ev(s) && (s.type === "submit" || s.type === "image")) {
        let p = s.form;
        if (p == null)
            throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
        let y = s.getAttribute("formaction") || p.getAttribute("action");
        if (r = y ? sl(y, u) : null,
            c = s.getAttribute("formmethod") || p.getAttribute("method") || yu,
            o = tr(s.getAttribute("formenctype")) || tr(p.getAttribute("enctype")) || vu,
            d = new FormData(p, s),
            !av()) {
            let { name: g, type: T, value: b } = s;
            if (T === "image") {
                let z = g ? `${g}.` : "";
                d.append(`${z}x`, "0"),
                    d.append(`${z}y`, "0")
            } else
                g && d.append(g, b)
        }
    } else {
        if (Ou(s))
            throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
        c = yu,
            r = null,
            o = vu,
            h = s
    }
    return d && o === "text/plain" && (h = d,
        d = void 0),
    {
        action: r,
        method: c.toLowerCase(),
        encType: o,
        formData: d,
        body: h
    }
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function rr(s, u) {
    if (s === !1 || s === null || typeof s > "u")
        throw new Error(u)
}
function uv(s, u, c, r) {
    let o = typeof s == "string" ? new URL(s, typeof window > "u" ? "server://singlefetch/" : window.location.origin) : s;
    return c ? o.pathname.endsWith("/") ? o.pathname = `${o.pathname}_.${r}` : o.pathname = `${o.pathname}.${r}` : o.pathname === "/" ? o.pathname = `_root.${r}` : u && sl(o.pathname, u) === "/" ? o.pathname = `${u.replace(/\/$/, "")}/_root.${r}` : o.pathname = `${o.pathname.replace(/\/$/, "")}.${r}`,
        o
}
async function sv(s, u) {
    if (s.id in u)
        return u[s.id];
    try {
        let c = await import(s.module);
        return u[s.id] = c,
            c
    } catch (c) {
        return console.error(`Error loading route module \`${s.module}\`, reloading page...`),
            console.error(c),
            window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
            window.location.reload(),
            new Promise(() => { }
            )
    }
}
function cv(s) {
    return s == null ? !1 : s.href == null ? s.rel === "preload" && typeof s.imageSrcSet == "string" && typeof s.imageSizes == "string" : typeof s.rel == "string" && typeof s.href == "string"
}
async function rv(s, u, c) {
    let r = await Promise.all(s.map(async o => {
        let d = u.routes[o.route.id];
        if (d) {
            let h = await sv(d, c);
            return h.links ? h.links() : []
        }
        return []
    }
    ));
    return hv(r.flat(1).filter(cv).filter(o => o.rel === "stylesheet" || o.rel === "preload").map(o => o.rel === "stylesheet" ? {
        ...o,
        rel: "prefetch",
        as: "style"
    } : {
        ...o,
        rel: "prefetch"
    }))
}
function Ih(s, u, c, r, o, d) {
    let h = (y, g) => c[g] ? y.route.id !== c[g].route.id : !0
        , p = (y, g) => c[g].pathname !== y.pathname || c[g].route.path?.endsWith("*") && c[g].params["*"] !== y.params["*"];
    return d === "assets" ? u.filter((y, g) => h(y, g) || p(y, g)) : d === "data" ? u.filter((y, g) => {
        let T = r.routes[y.route.id];
        if (!T || !T.hasLoader)
            return !1;
        if (h(y, g) || p(y, g))
            return !0;
        if (y.route.shouldRevalidate) {
            let b = y.route.shouldRevalidate({
                currentUrl: new URL(o.pathname + o.search + o.hash, window.origin),
                currentParams: c[0]?.params || {},
                nextUrl: new URL(s, window.origin),
                nextParams: y.params,
                defaultShouldRevalidate: !0
            });
            if (typeof b == "boolean")
                return b
        }
        return !0
    }
    ) : []
}
function ov(s, u, { includeHydrateFallback: c } = {}) {
    return fv(s.map(r => {
        let o = u.routes[r.route.id];
        if (!o)
            return [];
        let d = [o.module];
        return o.clientActionModule && (d = d.concat(o.clientActionModule)),
            o.clientLoaderModule && (d = d.concat(o.clientLoaderModule)),
            c && o.hydrateFallbackModule && (d = d.concat(o.hydrateFallbackModule)),
            o.imports && (d = d.concat(o.imports)),
            d
    }
    ).flat(1))
}
function fv(s) {
    return [...new Set(s)]
}
function dv(s) {
    let u = {}
        , c = Object.keys(s).sort();
    for (let r of c)
        u[r] = s[r];
    return u
}
function hv(s, u) {
    let c = new Set;
    return new Set(u),
        s.reduce((r, o) => {
            let d = JSON.stringify(dv(o));
            return c.has(d) || (c.add(d),
                r.push({
                    key: d,
                    link: o
                })),
                r
        }
            , [])
}
function Em() {
    let s = M.useContext(Ga);
    return rr(s, "You must render this element inside a <DataRouterContext.Provider> element"),
        s
}
function mv() {
    let s = M.useContext(Nu);
    return rr(s, "You must render this element inside a <DataRouterStateContext.Provider> element"),
        s
}
var or = M.createContext(void 0);
or.displayName = "FrameworkContext";
function Tm() {
    let s = M.useContext(or);
    return rr(s, "You must render this element inside a <HydratedRouter> element"),
        s
}
function gv(s, u) {
    let c = M.useContext(or)
        , [r, o] = M.useState(!1)
        , [d, h] = M.useState(!1)
        , { onFocus: p, onBlur: y, onMouseEnter: g, onMouseLeave: T, onTouchStart: b } = u
        , z = M.useRef(null);
    M.useEffect(() => {
        if (s === "render" && h(!0),
            s === "viewport") {
            let B = K => {
                K.forEach(V => {
                    h(V.isIntersecting)
                }
                )
            }
                , q = new IntersectionObserver(B, {
                    threshold: .5
                });
            return z.current && q.observe(z.current),
                () => {
                    q.disconnect()
                }
        }
    }
        , [s]),
        M.useEffect(() => {
            if (r) {
                let B = setTimeout(() => {
                    h(!0)
                }
                    , 100);
                return () => {
                    clearTimeout(B)
                }
            }
        }
            , [r]);
    let j = () => {
        o(!0)
    }
        , H = () => {
            o(!1),
                h(!1)
        }
        ;
    return c ? s !== "intent" ? [d, z, {}] : [d, z, {
        onFocus: qn(p, j),
        onBlur: qn(y, H),
        onMouseEnter: qn(g, j),
        onMouseLeave: qn(T, H),
        onTouchStart: qn(b, j)
    }] : [!1, z, {}]
}
function qn(s, u) {
    return c => {
        s && s(c),
            c.defaultPrevented || u(c)
    }
}
function pv({ page: s, ...u }) {
    let { router: c } = Em()
        , r = M.useMemo(() => im(c.routes, s, c.basename), [c.routes, s, c.basename]);
    return r ? M.createElement(vv, {
        page: s,
        matches: r,
        ...u
    }) : null
}
function yv(s) {
    let { manifest: u, routeModules: c } = Tm()
        , [r, o] = M.useState([]);
    return M.useEffect(() => {
        let d = !1;
        return rv(s, u, c).then(h => {
            d || o(h)
        }
        ),
            () => {
                d = !0
            }
    }
        , [s, u, c]),
        r
}
function vv({ page: s, matches: u, ...c }) {
    let r = _l()
        , { future: o, manifest: d, routeModules: h } = Tm()
        , { basename: p } = Em()
        , { loaderData: y, matches: g } = mv()
        , T = M.useMemo(() => Ih(s, u, g, d, r, "data"), [s, u, g, d, r])
        , b = M.useMemo(() => Ih(s, u, g, d, r, "assets"), [s, u, g, d, r])
        , z = M.useMemo(() => {
            if (s === r.pathname + r.search + r.hash)
                return [];
            let B = new Set
                , q = !1;
            if (u.forEach(V => {
                let k = d.routes[V.route.id];
                !k || !k.hasLoader || (!T.some(ae => ae.route.id === V.route.id) && V.route.id in y && h[V.route.id]?.shouldRevalidate || k.hasClientLoader ? q = !0 : B.add(V.route.id))
            }
            ),
                B.size === 0)
                return [];
            let K = uv(s, p, o.unstable_trailingSlashAwareDataRequests, "data");
            return q && B.size > 0 && K.searchParams.set("_routes", u.filter(V => B.has(V.route.id)).map(V => V.route.id).join(",")),
                [K.pathname + K.search]
        }
            , [p, o.unstable_trailingSlashAwareDataRequests, y, r, d, T, u, s, h])
        , j = M.useMemo(() => ov(b, d), [b, d])
        , H = yv(b);
    return M.createElement(M.Fragment, null, z.map(B => M.createElement("link", {
        key: B,
        rel: "prefetch",
        as: "fetch",
        href: B,
        ...c
    })), j.map(B => M.createElement("link", {
        key: B,
        rel: "modulepreload",
        href: B,
        ...c
    })), H.map(({ key: B, link: q }) => M.createElement("link", {
        key: B,
        nonce: c.nonce,
        ...q
    })))
}
function xv(...s) {
    return u => {
        s.forEach(c => {
            typeof c == "function" ? c(u) : c != null && (c.current = u)
        }
        )
    }
}
var bv = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
    bv && (window.__reactRouterVersion = "7.12.0")
} catch { }
function Sv({ basename: s, children: u, unstable_useTransitions: c, window: r }) {
    let o = M.useRef();
    o.current == null && (o.current = ly({
        window: r,
        v5Compat: !0
    }));
    let d = o.current
        , [h, p] = M.useState({
            action: d.action,
            location: d.location
        })
        , y = M.useCallback(g => {
            c === !1 ? p(g) : M.startTransition(() => p(g))
        }
            , [c]);
    return M.useLayoutEffect(() => d.listen(y), [d, y]),
        M.createElement(Wy, {
            basename: s,
            children: u,
            location: h.location,
            navigationType: h.action,
            navigator: d,
            unstable_useTransitions: c
        })
}
var Nm = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
    , Cm = M.forwardRef(function ({ onClick: u, discover: c = "render", prefetch: r = "none", relative: o, reloadDocument: d, replace: h, state: p, target: y, to: g, preventScrollReset: T, viewTransition: b, unstable_defaultShouldRevalidate: z, ...j }, H) {
        let { basename: B, unstable_useTransitions: q } = M.useContext(Dt)
            , K = typeof g == "string" && Nm.test(g)
            , V = dm(g, B);
        g = V.to;
        let k = Ly(g, {
            relative: o
        })
            , [ae, re, ye] = gv(r, j)
            , W = Cv(g, {
                replace: h,
                state: p,
                target: y,
                preventScrollReset: T,
                relative: o,
                viewTransition: b,
                unstable_defaultShouldRevalidate: z,
                unstable_useTransitions: q
            });
        function Ae(Re) {
            u && u(Re),
                Re.defaultPrevented || W(Re)
        }
        let Ne = M.createElement("a", {
            ...j,
            ...ye,
            href: V.absoluteURL || k,
            onClick: V.isExternal || d ? u : Ae,
            ref: xv(H, re),
            target: y,
            "data-discover": !K && c === "render" ? "true" : void 0
        });
        return ae && !K ? M.createElement(M.Fragment, null, Ne, M.createElement(pv, {
            page: k
        })) : Ne
    });
Cm.displayName = "Link";
var Ev = M.forwardRef(function ({ "aria-current": u = "page", caseSensitive: c = !1, className: r = "", end: o = !1, style: d, to: h, viewTransition: p, children: y, ...g }, T) {
    let b = Jn(h, {
        relative: g.relative
    })
        , z = _l()
        , j = M.useContext(Nu)
        , { navigator: H, basename: B } = M.useContext(Dt)
        , q = j != null && jv(b) && p === !0
        , K = H.encodeLocation ? H.encodeLocation(b).pathname : b.pathname
        , V = z.pathname
        , k = j && j.navigation && j.navigation.location ? j.navigation.location.pathname : null;
    c || (V = V.toLowerCase(),
        k = k ? k.toLowerCase() : null,
        K = K.toLowerCase()),
        k && B && (k = sl(k, B) || k);
    const ae = K !== "/" && K.endsWith("/") ? K.length - 1 : K.length;
    let re = V === K || !o && V.startsWith(K) && V.charAt(ae) === "/", ye = k != null && (k === K || !o && k.startsWith(K) && k.charAt(K.length) === "/"), W = {
        isActive: re,
        isPending: ye,
        isTransitioning: q
    }, Ae = re ? u : void 0, Ne;
    typeof r == "function" ? Ne = r(W) : Ne = [r, re ? "active" : null, ye ? "pending" : null, q ? "transitioning" : null].filter(Boolean).join(" ");
    let Re = typeof d == "function" ? d(W) : d;
    return M.createElement(Cm, {
        ...g,
        "aria-current": Ae,
        className: Ne,
        ref: T,
        style: Re,
        to: h,
        viewTransition: p
    }, typeof y == "function" ? y(W) : y)
});
Ev.displayName = "NavLink";
var Tv = M.forwardRef(({ discover: s = "render", fetcherKey: u, navigate: c, reloadDocument: r, replace: o, state: d, method: h = yu, action: p, onSubmit: y, relative: g, preventScrollReset: T, viewTransition: b, unstable_defaultShouldRevalidate: z, ...j }, H) => {
    let { unstable_useTransitions: B } = M.useContext(Dt)
        , q = zv()
        , K = Rv(p, {
            relative: g
        })
        , V = h.toLowerCase() === "get" ? "get" : "post"
        , k = typeof p == "string" && Nm.test(p)
        , ae = re => {
            if (y && y(re),
                re.defaultPrevented)
                return;
            re.preventDefault();
            let ye = re.nativeEvent.submitter
                , W = ye?.getAttribute("formmethod") || h
                , Ae = () => q(ye || re.currentTarget, {
                    fetcherKey: u,
                    method: W,
                    navigate: c,
                    replace: o,
                    state: d,
                    relative: g,
                    preventScrollReset: T,
                    viewTransition: b,
                    unstable_defaultShouldRevalidate: z
                });
            B && c !== !1 ? M.startTransition(() => Ae()) : Ae()
        }
        ;
    return M.createElement("form", {
        ref: H,
        method: V,
        action: K,
        onSubmit: r ? y : ae,
        ...j,
        "data-discover": !k && s === "render" ? "true" : void 0
    })
}
);
Tv.displayName = "Form";
function Nv(s) {
    return `${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}
function Om(s) {
    let u = M.useContext(Ga);
    return Ge(u, Nv(s)),
        u
}
function Cv(s, { target: u, replace: c, state: r, preventScrollReset: o, relative: d, viewTransition: h, unstable_defaultShouldRevalidate: p, unstable_useTransitions: y } = {}) {
    let g = vm()
        , T = _l()
        , b = Jn(s, {
            relative: d
        });
    return M.useCallback(z => {
        if (lv(z, u)) {
            z.preventDefault();
            let j = c !== void 0 ? c : Kn(T) === Kn(b)
                , H = () => g(s, {
                    replace: j,
                    state: r,
                    preventScrollReset: o,
                    relative: d,
                    viewTransition: h,
                    unstable_defaultShouldRevalidate: p
                });
            y ? M.startTransition(() => H()) : H()
        }
    }
        , [T, g, b, c, r, u, s, o, d, h, p, y])
}
var Ov = 0
    , Av = () => `__${String(++Ov)}__`;
function zv() {
    let { router: s } = Om("useSubmit")
        , { basename: u } = M.useContext(Dt)
        , c = ky()
        , r = s.fetch
        , o = s.navigate;
    return M.useCallback(async (d, h = {}) => {
        let { action: p, method: y, encType: g, formData: T, body: b } = iv(d, u);
        if (h.navigate === !1) {
            let z = h.fetcherKey || Av();
            await r(z, c, h.action || p, {
                unstable_defaultShouldRevalidate: h.unstable_defaultShouldRevalidate,
                preventScrollReset: h.preventScrollReset,
                formData: T,
                body: b,
                formMethod: h.method || y,
                formEncType: h.encType || g,
                flushSync: h.flushSync
            })
        } else
            await o(h.action || p, {
                unstable_defaultShouldRevalidate: h.unstable_defaultShouldRevalidate,
                preventScrollReset: h.preventScrollReset,
                formData: T,
                body: b,
                formMethod: h.method || y,
                formEncType: h.encType || g,
                replace: h.replace,
                state: h.state,
                fromRouteId: c,
                flushSync: h.flushSync,
                viewTransition: h.viewTransition
            })
    }
        , [r, o, u, c])
}
function Rv(s, { relative: u } = {}) {
    let { basename: c } = M.useContext(Dt)
        , r = M.useContext(cl);
    Ge(r, "useFormAction must be used inside a RouteContext");
    let [o] = r.matches.slice(-1)
        , d = {
            ...Jn(s || ".", {
                relative: u
            })
        }
        , h = _l();
    if (s == null) {
        d.search = h.search;
        let p = new URLSearchParams(d.search)
            , y = p.getAll("index");
        if (y.some(T => T === "")) {
            p.delete("index"),
                y.filter(b => b).forEach(b => p.append("index", b));
            let T = p.toString();
            d.search = T ? `?${T}` : ""
        }
    }
    return (!s || s === ".") && o.route.index && (d.search = d.search ? d.search.replace(/^\?/, "?index&") : "?index"),
        c !== "/" && (d.pathname = d.pathname === "/" ? c : ul([c, d.pathname])),
        Kn(d)
}
function jv(s, { relative: u } = {}) {
    let c = M.useContext(mm);
    Ge(c != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
    let { basename: r } = Om("useViewTransitionState")
        , o = Jn(s, {
            relative: u
        });
    if (!c.isTransitioning)
        return !1;
    let d = sl(c.currentLocation.pathname, r) || c.currentLocation.pathname
        , h = sl(c.nextLocation.pathname, r) || c.nextLocation.pathname;
    return Eu(o.pathname, h) != null || Eu(o.pathname, d) != null
}
function Dv() {
    const s = _l();
    return v.jsxs("div", {
        className: "relative flex flex-col items-center justify-center h-screen text-center px-4",
        children: [v.jsx("h1", {
            className: "absolute bottom-0 text-9xl md:text-[12rem] font-black text-gray-50 select-none pointer-events-none z-0",
            children: "404"
        }), v.jsxs("div", {
            className: "relative z-10",
            children: [v.jsx("h1", {
                className: "text-xl md:text-2xl font-semibold mt-6",
                children: "This page has not been generated"
            }), v.jsx("p", {
                className: "mt-2 text-base text-gray-400 font-mono",
                children: s.pathname
            }), v.jsx("p", {
                className: "mt-4 text-lg md:text-xl text-gray-500",
                children: "Tell me more about this page, so I can generate it"
            })]
        })]
    })
}
function wv() {
    const [s, u] = M.useState(!1);
    M.useEffect(() => {
        const r = () => {
            u(window.scrollY > 50)
        }
            ;
        return window.addEventListener("scroll", r),
            () => window.removeEventListener("scroll", r)
    }
        , []);
    const c = r => {
        const o = document.getElementById(r);
        o && o.scrollIntoView({
            behavior: "smooth"
        })
    }
        ;
    return v.jsxs("section", {
        className: "relative min-h-screen bg-gradient-to-br from-[#FAF8F5] via-[#F5F0E8] to-[#EDE7DC] overflow-hidden",
        children: [v.jsxs("div", {
            className: "absolute inset-0",
            children: [v.jsx("img", {
                src: "https://public.readdy.ai/ai/img_res/df0519c12032fce6e9ed9ca9d31b9496.jpg",
                alt: "Cảnh bữa sáng lành mạnh",
                className: "w-full h-full object-cover object-top"
            }), v.jsx("div", {
                className: "absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/20"
            })]
        }), v.jsx("nav", {
            className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${s ? "bg-white shadow-md" : "bg-transparent"}`,
            children: v.jsxs("div", {
                className: "max-w-7xl mx-auto px-6 py-4 flex items-center justify-between",
                children: [v.jsx("div", {
                    className: "flex items-center",
                    children: v.jsx("img", {
                        src: "https://public.readdy.ai/ai/img_res/f66ab635-7ede-40b6-ae4c-d472bb79edb5.png",
                        alt: "Logo Oatnite",
                        className: "h-12 w-auto"
                    })
                }), v.jsxs("div", {
                    className: "hidden md:flex items-center gap-8",
                    children: [v.jsx("button", {
                        onClick: () => c("benefits"),
                        className: `text-sm font-medium transition-colors hover:text-[#2D5F3F] cursor-pointer ${s ? "text-gray-700" : "text-white"}`,
                        children: "Lợi Ích"
                    }), v.jsx("button", {
                        onClick: () => c("testimonials"),
                        className: `text-sm font-medium transition-colors hover:text-[#2D5F3F] cursor-pointer ${s ? "text-gray-700" : "text-white"}`,
                        children: "Đánh Giá"
                    }), v.jsx("button", {
                        onClick: () => c("products"),
                        className: `text-sm font-medium transition-colors hover:text-[#2D5F3F] cursor-pointer ${s ? "text-gray-700" : "text-white"}`,
                        children: "Sản Phẩm"
                    }), v.jsx("button", {
                        onClick: () => c("contact"),
                        className: `text-sm font-medium transition-colors hover:text-[#2D5F3F] cursor-pointer ${s ? "text-gray-700" : "text-white"}`,
                        children: "Liên Hệ"
                    }), v.jsx("button", {
                        onClick: () => c("products"),
                        className: "bg-[#2D5F3F] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#234a32] transition-all whitespace-nowrap cursor-pointer",
                        children: "Mua Ngay"
                    })]
                })]
            })
        }), v.jsx("div", {
            className: "relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-24 min-h-screen flex items-center",
            children: v.jsxs("div", {
                className: "w-full grid md:grid-cols-2 gap-16 items-center",
                children: [v.jsxs("div", {
                    className: "text-left space-y-8",
                    children: [v.jsx("div", {
                        className: "inline-flex items-center gap-2 bg-[#E8F5E3]/90 backdrop-blur-sm px-4 py-2 rounded-full",
                        children: v.jsx("span", {
                            className: "text-[#2D5F3F] text-xs font-semibold uppercase tracking-wider",
                            children: "OATNITE | Yến Mạch Qua Đêm"
                        })
                    }), v.jsxs("h1", {
                        className: "text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95]",
                        children: [v.jsx("span", {
                            className: "text-white block",
                            style: {
                                textShadow: "0 2px 20px rgba(0,0,0,0.3)"
                            },
                            children: "TIẾP NĂNG"
                        }), v.jsx("span", {
                            className: "text-white block",
                            style: {
                                textShadow: "0 2px 20px rgba(0,0,0,0.3)"
                            },
                            children: "LƯỢNG CHO"
                        }), v.jsx("span", {
                            className: "text-[#D97757] block",
                            style: {
                                textShadow: "0 2px 20px rgba(0,0,0,0.3)"
                            },
                            children: "BUỔI SÁNG"
                        }), v.jsx("span", {
                            className: "text-white block",
                            style: {
                                textShadow: "0 2px 20px rgba(0,0,0,0.3)"
                            },
                            children: "HOÀN HẢO"
                        })]
                    }), v.jsx("p", {
                        className: "text-lg text-white max-w-xl leading-relaxed",
                        style: {
                            textShadow: "0 1px 10px rgba(0,0,0,0.3)"
                        },
                        children: "Yến mạch qua đêm hữu cơ giàu chất xơ, protein và thành phần tự nhiên. Không có hương liệu nhân tạo, chỉ có lợi ích tốt cho sức khỏe để thay đổi thói quen buổi sáng của bạn."
                    }), v.jsxs("div", {
                        className: "flex flex-wrap gap-4 pt-4",
                        children: [v.jsxs("button", {
                            onClick: () => c("products"),
                            className: "bg-[#2D5F3F] text-white px-8 py-4 rounded-full text-base font-bold hover:bg-[#234a32] transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer",
                            children: ["MUA NGAY", v.jsx("i", {
                                className: "ri-arrow-right-line text-xl"
                            })]
                        }), v.jsx("button", {
                            onClick: () => c("benefits"),
                            className: "bg-transparent border-2 border-[#2D5F3F] text-[#2D5F3F] px-8 py-4 rounded-full text-base font-bold hover:bg-[#2D5F3F] hover:text-white transition-all whitespace-nowrap cursor-pointer",
                            children: "TÌM HIỂU THÊM"
                        })]
                    })]
                }), v.jsxs("div", {
                    className: "relative flex justify-center items-center",
                    children: [v.jsx("div", {
                        className: "absolute -top-8 -left-8 w-20 h-20 bg-[#E8F5E3] rounded-full flex items-center justify-center animate-bounce z-10 shadow-lg",
                        children: v.jsx("i", {
                            className: "ri-leaf-line text-3xl text-[#2D5F3F]"
                        })
                    }), v.jsx("div", {
                        className: "relative z-0",
                        children: v.jsx("img", {
                            src: "https://readdy.ai/api/search-image?query=Hand%20holding%20elegant%20glass%20jar%20filled%20with%20layered%20overnight%20oats%2C%20fresh%20blueberries%2C%20strawberries%2C%20granola%20topping%2C%20chia%20seeds%2C%20natural%20morning%20light%2C%20professional%20food%20photography%2C%20clean%20white%20background%2C%20appetizing%20presentation%2C%20healthy%20breakfast%20concept%2C%20high%20quality%20detailed%20shot&width=600&height=800&seq=hero-product-001&orientation=portrait",
                            alt: "Yến Mạch Qua Đêm Oatnite",
                            className: "w-full h-auto rounded-3xl shadow-2xl"
                        })
                    }), v.jsx("div", {
                        className: "absolute -bottom-8 -right-8 w-24 h-24 bg-[#D97757]/20 rounded-full flex items-center justify-center shadow-lg",
                        children: v.jsx("i", {
                            className: "ri-heart-pulse-line text-4xl text-[#D97757]"
                        })
                    })]
                })]
            })
        }), v.jsx("div", {
            className: "absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10",
            children: v.jsx("div", {
                className: "animate-bounce",
                children: v.jsx("i", {
                    className: "ri-arrow-down-line text-3xl text-white"
                })
            })
        })]
    })
}
function Mv() {
    const s = [{
        icon: "ri-heart-pulse-line",
        label: "GIÀU CHẤT XƠ",
        title: "Sức Khỏe Tiêu Hóa",
        description: "Giàu chất xơ hòa tan hỗ trợ tiêu hóa khỏe mạnh, giúp bạn no lâu hơn và duy trì lượng đường trong máu ổn định suốt buổi sáng.",
        color: "#2D5F3F"
    }, {
        icon: "ri-flashlight-line",
        label: "GIÀU PROTEIN",
        title: "Năng Lượng Bền Vững",
        description: "Hỗn hợp protein hoàn chỉnh cung cấp năng lượng lâu dài không gây mệt mỏi. Nhiên liệu hoàn hảo cho lối sống năng động, giữ cho bạn tràn đầy năng lượng từ bữa sáng đến bữa trưa.",
        color: "#D97757"
    }, {
        icon: "ri-heart-line",
        label: "TỐT CHO TIM MẠCH",
        title: "Hỗ Trợ Tim Mạch",
        description: "Chất xơ beta-glucan giúp giảm mức cholesterol một cách tự nhiên. Giàu chất chống oxi hóa và omega-3 hỗ trợ sức khỏe tim mạch và sức khỏe tổng thể.",
        color: "#2D5F3F"
    }, {
        icon: "ri-time-line",
        label: "TIẾT KIỆM THỜI GIAN",
        title: "Dinh Dưỡng Tiện Lợi",
        description: "Chuẩn bị chỉ trong 5 phút vào tối hôm trước. Thức dậy với bữa sáng ngon miệng, sẵn sàng để ăn, tiết kiệm thời gian buổi sáng quý giá mà không ảnh hưởng đến dinh dưỡng.",
        color: "#D97757"
    }];
    return v.jsx("section", {
        id: "benefits",
        className: "bg-[#F5F8F6] py-24",
        children: v.jsxs("div", {
            className: "max-w-7xl mx-auto px-6",
            children: [v.jsxs("div", {
                className: "flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8",
                children: [v.jsxs("div", {
                    children: [v.jsx("p", {
                        className: "text-gray-500 italic text-3xl font-serif mb-2",
                        children: "Tại Sao Chọn"
                    }), v.jsx("h2", {
                        className: "text-5xl font-black text-gray-900",
                        children: "YẾN MẠCH OATNITE?"
                    })]
                }), v.jsx("p", {
                    className: "text-gray-600 max-w-2xl text-base leading-relaxed",
                    children: "Mỗi hộp Oatnite được chế tác từ các thành phần hữu cơ cao cấp, được nghiên cứu khoa học để mang lại dinh dưỡng tối đa và hương vị tuyệt vời. Chúng tôi tin rằng ăn uống lành mạnh nên dễ dàng và ngon miệng."
                })]
            }), v.jsx("div", {
                className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8",
                children: s.map((u, c) => v.jsxs("div", {
                    className: "bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2",
                    children: [v.jsx("div", {
                        className: "w-20 h-20 flex items-center justify-center mb-6",
                        children: v.jsx("i", {
                            className: `${u.icon} text-6xl`,
                            style: {
                                color: u.color
                            }
                        })
                    }), v.jsx("div", {
                        className: "inline-block bg-[#E8F5E3] px-3 py-1.5 rounded-full mb-4",
                        children: v.jsx("span", {
                            className: "text-[#2D5F3F] text-xs font-bold tracking-wide",
                            children: u.label
                        })
                    }), v.jsx("h3", {
                        className: "text-2xl font-bold text-gray-900 mb-3 leading-tight",
                        children: u.title
                    }), v.jsx("p", {
                        className: "text-gray-600 text-sm leading-relaxed",
                        children: u.description
                    })]
                }, c))
            })]
        })
    })
}
function _v() {
    const s = [{
        quote: "Yến mạch qua đêm này đã thay đổi hoàn toàn thói quen buổi sáng của tôi. Ngon, bổ dưỡng và rất tiện lợi!",
        author: "Nguyễn Minh Anh",
        verified: !0,
        image: "https://public.readdy.ai/ai/img_res/728f312e8e4b1a5cef6ca449592ac157.jpg"
    }, {
        quote: "Là một chuyên gia bận rộn, Oatnite đã giúp tôi tiết kiệm thời gian mà vẫn đảm bảo dinh dưỡng. Tôi không thể tin được nó lại ngon đến vậy!",
        author: "Trần Văn Hùng",
        verified: !0,
        image: "https://readdy.ai/api/search-image?query=Top%20view%20of%20overnight%20oats%20in%20ceramic%20bowl%2C%20pure%20oatmeal%20with%20natural%20texture%2C%20scattered%20oat%20grains%20around%20bowl%2C%20wooden%20table%20surface%2C%20morning%20sunlight%2C%20minimalist%20food%20photography%2C%20organic%20wholesome%20breakfast%2C%20clean%20simple%20composition&width=500&height=600&seq=testimonial-oats-002&orientation=portrait"
    }, {
        quote: "Hương vị thật tuyệt vời! Tôi thích vì nó hữu cơ và chứa đầy nguyên liệu thật. Con tôi đòi ăn mỗi sáng.",
        author: "Lê Thị Hương",
        verified: !0,
        image: "https://readdy.ai/api/search-image?query=Glass%20jar%20filled%20with%20creamy%20overnight%20oats%2C%20pure%20oatmeal%20consistency%2C%20natural%20ingredients%20visible%2C%20soft%20beige%20and%20cream%20tones%2C%20gentle%20morning%20light%20filtering%20through%2C%20healthy%20breakfast%20preparation%2C%20simple%20elegant%20presentation%2C%20professional%20food%20styling&width=500&height=600&seq=testimonial-oats-003&orientation=portrait"
    }];
    return v.jsx("section", {
        id: "testimonials",
        className: "bg-white py-24",
        children: v.jsxs("div", {
            className: "max-w-7xl mx-auto px-6",
            children: [v.jsxs("div", {
                className: "text-center mb-16",
                children: [v.jsxs("div", {
                    className: "flex items-center justify-center gap-2 mb-4",
                    children: [v.jsx("div", {
                        className: "w-2 h-2 bg-[#2D5F3F] rounded-full"
                    }), v.jsx("span", {
                        className: "text-[#2D5F3F] text-xs font-bold uppercase tracking-widest",
                        children: "CÂU CHUYỆN KHÁCH HÀNG"
                    })]
                }), v.jsx("h2", {
                    className: "text-5xl font-black text-gray-900 mb-4",
                    children: "Khách Hàng Nói Gì Về Chúng Tôi"
                }), v.jsx("p", {
                    className: "text-gray-600 text-lg max-w-2xl mx-auto",
                    children: "Tham gia cùng hàng nghìn khách hàng hài lòng đã thay đổi buổi sáng của họ với Oatnite"
                })]
            }), v.jsx("div", {
                className: "grid md:grid-cols-3 gap-8 mb-16",
                children: s.map((u, c) => v.jsxs("div", {
                    className: "bg-[#FAF8F5] rounded-2xl p-8 hover:shadow-xl transition-all duration-300",
                    children: [v.jsx("div", {
                        className: "flex items-center gap-1 mb-4",
                        children: [...Array(5)].map((r, o) => v.jsx("i", {
                            className: "ri-star-fill text-[#D97757] text-lg"
                        }, o))
                    }), v.jsxs("p", {
                        className: "text-gray-700 text-base leading-relaxed mb-6 italic",
                        children: ['"', u.quote, '"']
                    }), v.jsxs("div", {
                        className: "flex items-center gap-4",
                        children: [v.jsx("div", {
                            className: "w-14 h-14 rounded-full overflow-hidden flex-shrink-0",
                            children: v.jsx("img", {
                                src: u.image,
                                alt: u.author,
                                className: "w-full h-full object-cover object-top"
                            })
                        }), v.jsxs("div", {
                            children: [v.jsx("p", {
                                className: "font-bold text-gray-900",
                                children: u.author
                            }), u.verified && v.jsxs("div", {
                                className: "flex items-center gap-1 text-[#2D5F3F] text-xs",
                                children: [v.jsx("i", {
                                    className: "ri-checkbox-circle-fill"
                                }), v.jsx("span", {
                                    children: "Đã Xác Minh Mua Hàng"
                                })]
                            })]
                        })]
                    })]
                }, c))
            }), v.jsxs("div", {
                className: "bg-gradient-to-r from-[#E8F5E3] to-[#FAF8F5] rounded-2xl p-8 text-center",
                children: [v.jsx("div", {
                    className: "flex items-center justify-center gap-2 mb-3",
                    children: [...Array(5)].map((u, c) => v.jsx("i", {
                        className: "ri-star-fill text-[#D97757] text-3xl"
                    }, c))
                }), v.jsx("p", {
                    className: "text-4xl font-black text-gray-900 mb-2",
                    children: "4.9/5.0"
                }), v.jsx("p", {
                    className: "text-gray-600 text-base",
                    children: "Dựa trên hơn 2,500 đánh giá từ khách hàng hài lòng"
                })]
            })]
        })
    })
}
function Uv() {
    const [s, u] = M.useState(0)
        , c = [{
            name: "Việt Quất Hạnh Nhân",
            category: "Yến Mạch Qua Đêm",
            price: "199.000₫",
            image: "https://public.readdy.ai/ai/img_res/fe261693fb233e1bdddc98f5a103de1c.jpg",
            badge: "HỮU CƠ"
        }, {
            name: "Dâu Tây Vani",
            category: "Yến Mạch Qua Đêm",
            price: "199.000₫",
            image: "https://readdy.ai/api/search-image?query=Glass%20jar%20with%20layered%20overnight%20oats%2C%20fresh%20strawberry%20slices%2C%20vanilla%20bean%20specks%2C%20creamy%20texture%2C%20simple%20clean%20white%20background%2C%20professional%20food%20photography%2C%20delicious%20presentation%2C%20natural%20lighting%2C%20healthy%20breakfast%20product%20shot&width=400&height=400&seq=product-002&orientation=squarish",
            badge: "HỮU CƠ"
        }, {
            name: "Socola Đậu Phộng",
            category: "Yến Mạch Qua Đêm",
            price: "219.000₫",
            image: "https://readdy.ai/api/search-image?query=Glass%20jar%20with%20chocolate%20overnight%20oats%2C%20peanut%20butter%20swirl%2C%20cacao%20nibs%20topping%2C%20protein%20rich%2C%20simple%20clean%20white%20background%2C%20professional%20food%20photography%2C%20indulgent%20yet%20healthy%2C%20natural%20lighting%2C%20breakfast%20product%20shot&width=400&height=400&seq=product-003&orientation=squarish",
            badge: "GIÀU PROTEIN"
        }, {
            name: "Xoài Nhiệt Đới",
            category: "Yến Mạch Qua Đêm",
            price: "219.000₫",
            image: "https://readdy.ai/api/search-image?query=Glass%20jar%20with%20overnight%20oats%2C%20fresh%20mango%20chunks%2C%20coconut%20flakes%2C%20tropical%20fruit%20mix%2C%20simple%20clean%20white%20background%2C%20professional%20food%20photography%2C%20vibrant%20colors%2C%20natural%20lighting%2C%20exotic%20breakfast%20product%20shot&width=400&height=400&seq=product-004&orientation=squarish",
            badge: "MỚI"
        }, {
            name: "Táo Quế Ấm Áp",
            category: "Yến Mạch Qua Đêm",
            price: "199.000₫",
            image: "https://readdy.ai/api/search-image?query=Glass%20jar%20with%20overnight%20oats%2C%20diced%20apples%2C%20cinnamon%20sprinkle%2C%20warm%20spices%2C%20simple%20clean%20white%20background%2C%20professional%20food%20photography%2C%20cozy%20comfort%20food%2C%20natural%20lighting%2C%20classic%20breakfast%20product%20shot&width=400&height=400&seq=product-005&orientation=squarish",
            badge: "HỮU CƠ"
        }, {
            name: "Hỗn Hợp Trái Mọng",
            category: "Yến Mạch Qua Đêm",
            price: "229.000₫",
            image: "https://readdy.ai/api/search-image?query=Glass%20jar%20with%20overnight%20oats%2C%20mixed%20berries%20including%20raspberries%20blueberries%20blackberries%2C%20antioxidant%20rich%2C%20simple%20clean%20white%20background%2C%20professional%20food%20photography%2C%20colorful%20presentation%2C%20natural%20lighting%2C%20superfood%20breakfast%20product%20shot&width=400&height=400&seq=product-006&orientation=squarish",
            badge: "BÁN CHẠY"
        }]
        , r = o => {
            const d = document.getElementById("product-scroll");
            if (d) {
                const p = o === "left" ? Math.max(0, s - 340) : Math.min(d.scrollWidth - d.clientWidth, s + 340);
                d.scrollTo({
                    left: p,
                    behavior: "smooth"
                }),
                    u(p)
            }
        }
        ;
    return v.jsx("section", {
        id: "products",
        className: "bg-[#FAFAF8] py-24",
        children: v.jsxs("div", {
            className: "max-w-7xl mx-auto px-6",
            children: [v.jsxs("div", {
                className: "flex justify-between items-end mb-12",
                children: [v.jsxs("div", {
                    children: [v.jsxs("h2", {
                        className: "text-5xl font-black text-gray-900 mb-2",
                        children: ["KHÁM PHÁ ", v.jsx("span", {
                            className: "text-[#D97757]",
                            children: "HƯỚNG VỊ"
                        })]
                    }), v.jsx("p", {
                        className: "text-gray-600 text-base",
                        children: "Công thức thủ công sử dụng nguyên liệu hữu cơ"
                    })]
                }), v.jsx("div", {
                    className: "hidden md:block",
                    children: v.jsx("div", {
                        className: "bg-[#1a1a1a] text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wide",
                        children: "SẢN PHẨM MỚI"
                    })
                })]
            }), v.jsxs("div", {
                className: "relative",
                children: [v.jsx("button", {
                    onClick: () => r("left"),
                    className: "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all cursor-pointer",
                    children: v.jsx("i", {
                        className: "ri-arrow-left-s-line text-2xl text-gray-900"
                    })
                }), v.jsx("button", {
                    onClick: () => r("right"),
                    className: "absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all cursor-pointer",
                    children: v.jsx("i", {
                        className: "ri-arrow-right-s-line text-2xl text-gray-900"
                    })
                }), v.jsx("div", {
                    id: "product-scroll",
                    className: "flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth",
                    style: {
                        scrollbarWidth: "none",
                        msOverflowStyle: "none"
                    },
                    children: c.map((o, d) => v.jsxs("div", {
                        className: "flex-shrink-0 w-80 bg-[#F7F5F2] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer",
                        children: [v.jsxs("div", {
                            className: "relative w-full h-80 bg-white",
                            children: [v.jsx("img", {
                                src: o.image,
                                alt: o.name,
                                className: "w-full h-full object-cover object-top"
                            }), v.jsx("div", {
                                className: "absolute top-4 left-4 bg-[#2D5F3F] text-white px-3 py-1.5 rounded-full text-xs font-bold",
                                children: o.badge
                            })]
                        }), v.jsxs("div", {
                            className: "p-6",
                            children: [v.jsx("p", {
                                className: "text-gray-500 text-sm mb-1",
                                children: o.category
                            }), v.jsx("h3", {
                                className: "text-xl font-bold text-gray-900 mb-4",
                                children: o.name
                            }), v.jsxs("div", {
                                className: "flex justify-between items-center",
                                children: [v.jsx("span", {
                                    className: "text-3xl font-black text-gray-900",
                                    children: o.price
                                }), v.jsx("button", {
                                    className: "bg-[#2D5F3F] text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#234a32] transition-all cursor-pointer",
                                    children: v.jsx("i", {
                                        className: "ri-shopping-cart-line text-xl"
                                    })
                                })]
                            })]
                        })]
                    }, d))
                })]
            }), v.jsx("div", {
                className: "text-center mt-12",
                children: v.jsxs("button", {
                    className: "bg-[#2D5F3F] text-white px-10 py-4 rounded-full text-base font-bold hover:bg-[#234a32] transition-all inline-flex items-center gap-2 whitespace-nowrap cursor-pointer",
                    children: ["XEM TẤT CẢ SẢN PHẨM", v.jsx("i", {
                        className: "ri-arrow-right-line text-xl"
                    })]
                })
            })]
        })
    })
}
function Lv() {
    const s = () => {
        const u = document.getElementById("contact");
        u && u.scrollIntoView({
            behavior: "smooth"
        })
    }
        ;
    return v.jsxs("section", {
        className: "relative py-32 overflow-hidden",
        children: [v.jsxs("div", {
            className: "absolute inset-0",
            children: [v.jsx("img", {
                src: "https://public.readdy.ai/ai/img_res/2eafe574ead275638e3cfbcba1d5fe77.jpg",
                alt: "Thói quen buổi sáng lành mạnh",
                className: "w-full h-full object-cover object-top"
            }), v.jsx("div", {
                className: "absolute inset-0 bg-gradient-to-b from-black/30 via-black/25 to-black/30"
            })]
        }), v.jsxs("div", {
            className: "relative z-10 max-w-4xl mx-auto px-6 text-center",
            children: [v.jsx("h2", {
                className: "text-6xl md:text-7xl font-black text-white mb-8 tracking-tight",
                style: {
                    textShadow: "0 2px 20px rgba(0,0,0,0.3)"
                },
                children: "BẮT ĐẦU HÀNH TRÌNH KHỎE MẠNH"
            }), v.jsx("p", {
                className: "text-xl text-white mb-6 leading-relaxed",
                style: {
                    textShadow: "0 1px 10px rgba(0,0,0,0.3)"
                },
                children: "Tham gia cùng hàng nghìn người đã thay đổi buổi sáng của họ"
            }), v.jsx("p", {
                className: "text-xl text-white mb-12 leading-relaxed",
                style: {
                    textShadow: "0 1px 10px rgba(0,0,0,0.3)"
                },
                children: "với yến mạch qua đêm dinh dưỡng của OATNITE"
            }), v.jsxs("button", {
                onClick: s,
                className: "inline-flex items-center bg-[#1a1a1a] rounded-full overflow-hidden hover:scale-105 transition-all duration-300 shadow-2xl cursor-pointer",
                children: [v.jsx("div", {
                    className: "w-16 h-16 bg-[#D97757] rounded-full flex items-center justify-center -ml-2",
                    children: v.jsx("i", {
                        className: "ri-shopping-bag-line text-2xl text-white"
                    })
                }), v.jsx("span", {
                    className: "px-8 text-white font-bold text-base uppercase tracking-wide whitespace-nowrap",
                    children: "ĐẶT HÀNG NGAY"
                }), v.jsx("i", {
                    className: "ri-arrow-right-up-line text-white text-xl mr-6"
                })]
            }), v.jsxs("div", {
                className: "mt-16 flex flex-wrap justify-center items-center gap-8 text-white",
                children: [v.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [v.jsx("i", {
                        className: "ri-truck-line text-2xl"
                    }), v.jsx("span", {
                        className: "text-sm font-semibold",
                        children: "Miễn Phí Vận Chuyển"
                    })]
                }), v.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [v.jsx("i", {
                        className: "ri-leaf-line text-2xl"
                    }), v.jsx("span", {
                        className: "text-sm font-semibold",
                        children: "100% Hữu Cơ"
                    })]
                }), v.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [v.jsx("i", {
                        className: "ri-shield-check-line text-2xl"
                    }), v.jsx("span", {
                        className: "text-sm font-semibold",
                        children: "Đảm Bảo Hoàn Tiền"
                    })]
                })]
            })]
        })]
    })
}
function Hv() {
    const [s, u] = M.useState({
        name: "",
        email: "",
        message: ""
    })
        , [c, r] = M.useState(!1)
        , [o, d] = M.useState("idle")
        , h = async y => {
            y.preventDefault(),
                r(!0),
                d("idle");
            try {
                const g = new URLSearchParams;
                g.append("name", s.name),
                    g.append("email", s.email),
                    g.append("message", s.message),
                    (await fetch("https://readdy.ai/api/form/d5h24r3ihlvellpk4um0", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        },
                        body: g.toString()
                    })).ok ? (d("success"),
                        u({
                            name: "",
                            email: "",
                            message: ""
                        })) : d("error")
            } catch {
                d("error")
            } finally {
                r(!1)
            }
        }
        , p = y => {
            const { name: g, value: T } = y.target;
            u(b => ({
                ...b,
                [g]: T
            }))
        }
        ;
    return v.jsx("section", {
        id: "contact",
        className: "bg-[#FAF8F5] py-24",
        children: v.jsx("div", {
            className: "max-w-7xl mx-auto px-6",
            children: v.jsxs("div", {
                className: "grid md:grid-cols-5 gap-20",
                children: [v.jsxs("div", {
                    className: "md:col-span-3",
                    children: [v.jsx("h2", {
                        className: "text-5xl font-black text-gray-900 mb-4",
                        children: "LIÊN HỆ VỚI CHÚNG TÔI"
                    }), v.jsx("p", {
                        className: "text-gray-600 text-lg mb-10",
                        children: "Có câu hỏi? Chúng tôi rất muốn được lắng nghe từ bạn"
                    }), v.jsxs("form", {
                        onSubmit: h,
                        "data-readdy-form": !0,
                        className: "space-y-6",
                        children: [v.jsx("div", {
                            children: v.jsx("input", {
                                type: "text",
                                name: "name",
                                value: s.name,
                                onChange: p,
                                placeholder: "Tên của bạn",
                                required: !0,
                                className: "w-full bg-transparent border-b-2 border-[#2D5F3F] py-3 text-gray-900 text-base placeholder-gray-400 focus:outline-none focus:border-[#D97757] transition-colors"
                            })
                        }), v.jsx("div", {
                            children: v.jsx("input", {
                                type: "email",
                                name: "email",
                                value: s.email,
                                onChange: p,
                                placeholder: "Email của bạn",
                                required: !0,
                                className: "w-full bg-transparent border-b-2 border-[#2D5F3F] py-3 text-gray-900 text-base placeholder-gray-400 focus:outline-none focus:border-[#D97757] transition-colors"
                            })
                        }), v.jsxs("div", {
                            children: [v.jsx("textarea", {
                                name: "message",
                                value: s.message,
                                onChange: p,
                                placeholder: "Tin nhắn của bạn",
                                required: !0,
                                maxLength: 500,
                                rows: 5,
                                className: "w-full bg-transparent border-b-2 border-[#2D5F3F] py-3 text-gray-900 text-base placeholder-gray-400 focus:outline-none focus:border-[#D97757] transition-colors resize-none"
                            }), v.jsxs("p", {
                                className: "text-xs text-gray-500 mt-2",
                                children: [s.message.length, "/500 ký tự"]
                            })]
                        }), v.jsx("button", {
                            type: "submit",
                            disabled: c,
                            className: "w-full bg-[#2D5F3F] text-white py-4 rounded-full text-base font-bold hover:bg-[#234a32] transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer",
                            children: c ? "ĐANG GỬI..." : "GỬI TIN NHẮN"
                        }), o === "success" && v.jsx("div", {
                            className: "bg-[#E8F5E3] border border-[#2D5F3F] text-[#2D5F3F] px-4 py-3 rounded-lg text-sm",
                            children: "Cảm ơn bạn! Tin nhắn của bạn đã được gửi thành công."
                        }), o === "error" && v.jsx("div", {
                            className: "bg-red-50 border border-red-300 text-red-700 px-4 py-3 rounded-lg text-sm",
                            children: "Rất tiếc! Đã có lỗi xảy ra. Vui lòng thử lại."
                        })]
                    })]
                }), v.jsxs("div", {
                    className: "md:col-span-2 space-y-12",
                    children: [v.jsxs("div", {
                        children: [v.jsx("p", {
                            className: "text-xs uppercase text-gray-500 tracking-widest mb-3",
                            children: "DỊCH VỤ KHÁCH HÀNG"
                        }), v.jsx("p", {
                            className: "text-2xl font-bold text-gray-900 mb-2",
                            children: "1-800-OATNITE"
                        }), v.jsx("a", {
                            href: "mailto:hello@oatnite.com",
                            className: "text-lg text-[#2D5F3F] underline hover:text-[#234a32] transition-colors",
                            children: "hello@oatnite.com"
                        })]
                    }), v.jsxs("div", {
                        children: [v.jsx("p", {
                            className: "text-xs uppercase text-gray-500 tracking-widest mb-3",
                            children: "GHÉP THĂM CHÚNG TÔI"
                        }), v.jsxs("p", {
                            className: "text-base text-gray-700 leading-relaxed",
                            children: ["123 Đường Sức Khỏe", v.jsx("br", {}), "San Francisco, CA 94102", v.jsx("br", {}), "Hoa Kỳ"]
                        })]
                    }), v.jsxs("div", {
                        children: [v.jsx("p", {
                            className: "text-xs uppercase text-gray-500 tracking-widest mb-4",
                            children: "THEO DÕI CHÚNG TÔI"
                        }), v.jsxs("div", {
                            className: "flex gap-4",
                            children: [v.jsx("a", {
                                href: "#",
                                className: "w-12 h-12 bg-[#2D5F3F] rounded-full flex items-center justify-center text-white hover:bg-[#234a32] transition-all cursor-pointer",
                                children: v.jsx("i", {
                                    className: "ri-instagram-line text-xl"
                                })
                            }), v.jsx("a", {
                                href: "#",
                                className: "w-12 h-12 bg-[#2D5F3F] rounded-full flex items-center justify-center text-white hover:bg-[#234a32] transition-all cursor-pointer",
                                children: v.jsx("i", {
                                    className: "ri-facebook-fill text-xl"
                                })
                            }), v.jsx("a", {
                                href: "#",
                                className: "w-12 h-12 bg-[#2D5F3F] rounded-full flex items-center justify-center text-white hover:bg-[#234a32] transition-all cursor-pointer",
                                children: v.jsx("i", {
                                    className: "ri-twitter-x-line text-xl"
                                })
                            }), v.jsx("a", {
                                href: "#",
                                className: "w-12 h-12 bg-[#2D5F3F] rounded-full flex items-center justify-center text-white hover:bg-[#234a32] transition-all cursor-pointer",
                                children: v.jsx("i", {
                                    className: "ri-pinterest-fill text-xl"
                                })
                            })]
                        })]
                    })]
                })]
            })
        })
    })
}
function Bv() {
    const s = u => {
        const c = document.getElementById(u);
        c && c.scrollIntoView({
            behavior: "smooth"
        })
    }
        ;
    return v.jsx("footer", {
        className: "bg-[#0A0A0A] text-white rounded-t-[32px]",
        children: v.jsxs("div", {
            className: "max-w-7xl mx-auto px-6 py-20",
            children: [v.jsxs("div", {
                className: "grid md:grid-cols-12 gap-16 mb-16",
                children: [v.jsxs("div", {
                    className: "md:col-span-5",
                    children: [v.jsx("h3", {
                        className: "text-5xl font-light mb-4",
                        children: "LUÔN KHỎE MẠNH"
                    }), v.jsx("p", {
                        className: "text-gray-400 text-base mb-8 leading-relaxed",
                        children: "Nhận công thức độc quyền, mẹo sức khỏe và ưu đãi đặc biệt được gửi đến hộp thư của bạn"
                    }), v.jsxs("div", {
                        className: "space-y-6",
                        children: [v.jsx("input", {
                            type: "email",
                            placeholder: "Nhập email của bạn",
                            className: "w-full bg-transparent border-b border-white/30 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
                        }), v.jsxs("button", {
                            className: "bg-white text-black px-8 py-3 rounded-full text-sm font-bold hover:bg-gray-200 transition-all inline-flex items-center gap-2 whitespace-nowrap cursor-pointer",
                            children: ["ĐĂNG KÝ", v.jsx("i", {
                                className: "ri-arrow-right-line text-lg"
                            })]
                        })]
                    })]
                }), v.jsxs("div", {
                    className: "md:col-span-3",
                    children: [v.jsx("p", {
                        className: "text-xs uppercase text-gray-500 tracking-widest mb-6",
                        children: "MUA SẮM"
                    }), v.jsxs("ul", {
                        className: "space-y-4",
                        children: [v.jsx("li", {
                            children: v.jsx("button", {
                                onClick: () => s("products"),
                                className: "text-sm text-white hover:text-[#D97757] transition-colors underline cursor-pointer",
                                children: "Tất Cả Sản Phẩm"
                            })
                        }), v.jsx("li", {
                            children: v.jsx("button", {
                                onClick: () => s("products"),
                                className: "text-sm text-white hover:text-[#D97757] transition-colors underline cursor-pointer",
                                children: "Bán Chạy Nhất"
                            })
                        }), v.jsx("li", {
                            children: v.jsx("button", {
                                onClick: () => s("products"),
                                className: "text-sm text-white hover:text-[#D97757] transition-colors underline cursor-pointer",
                                children: "Combo Tiết Kiệm"
                            })
                        }), v.jsx("li", {
                            children: v.jsx("button", {
                                onClick: () => s("products"),
                                className: "text-sm text-white hover:text-[#D97757] transition-colors underline cursor-pointer",
                                children: "Thẻ Quà Tặng"
                            })
                        })]
                    })]
                }), v.jsxs("div", {
                    className: "md:col-span-4",
                    children: [v.jsx("p", {
                        className: "text-xs uppercase text-gray-500 tracking-widest mb-6",
                        children: "LIÊN HỆ"
                    }), v.jsx("p", {
                        className: "text-base text-white mb-2",
                        children: "1-800-OATNITE"
                    }), v.jsx("p", {
                        className: "text-base text-white mb-8",
                        children: "hello@oatnite.com"
                    }), v.jsx("p", {
                        className: "text-xs uppercase text-gray-500 tracking-widest mb-4",
                        children: "ĐỊA CHỈ"
                    }), v.jsxs("p", {
                        className: "text-sm text-gray-400 leading-relaxed",
                        children: ["123 Đường Sức Khỏe", v.jsx("br", {}), "San Francisco, CA 94102"]
                    })]
                })]
            }), v.jsxs("div", {
                className: "border-t border-white/10 pt-8",
                children: [v.jsxs("div", {
                    className: "flex flex-col md:flex-row justify-between items-center gap-6",
                    children: [v.jsxs("div", {
                        className: "flex gap-6",
                        children: [v.jsx("a", {
                            href: "#",
                            className: "text-sm text-white hover:text-[#D97757] transition-colors underline cursor-pointer",
                            children: "Instagram"
                        }), v.jsx("a", {
                            href: "#",
                            className: "text-sm text-white hover:text-[#D97757] transition-colors underline cursor-pointer",
                            children: "Facebook"
                        }), v.jsx("a", {
                            href: "#",
                            className: "text-sm text-white hover:text-[#D97757] transition-colors underline cursor-pointer",
                            children: "Twitter"
                        }), v.jsx("a", {
                            href: "#",
                            className: "text-sm text-white hover:text-[#D97757] transition-colors underline cursor-pointer",
                            children: "Pinterest"
                        })]
                    }), v.jsx("p", {
                        className: "text-sm text-gray-500",
                        children: "© 2025 OATNITE. All rights reserved."
                    }), v.jsxs("div", {
                        className: "flex gap-6",
                        children: [v.jsx("a", {
                            href: "#",
                            className: "text-sm text-white hover:text-[#D97757] transition-colors underline cursor-pointer",
                            children: "Chính Sách Bảo Mật"
                        }), v.jsx("a", {
                            href: "#",
                            className: "text-sm text-white hover:text-[#D97757] transition-colors underline cursor-pointer",
                            children: "Điều Khoản Dịch Vụ"
                        })]
                    })]
                }), v.jsx("div", {
                    className: "text-center mt-8",
                    children: v.jsx("a", {
                        href: "https://readdy.ai/?ref=logo",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "text-xs text-gray-600 hover:text-gray-400 transition-colors cursor-pointer",
                        children: "Được hỗ trợ bởi Readdy"
                    })
                })]
            })]
        })
    })
}
function qv() {
    return v.jsxs("main", {
        children: [v.jsx(wv, {}), v.jsx(Mv, {}), v.jsx(_v, {}), v.jsx(Uv, {}), v.jsx(Lv, {}), v.jsx(Hv, {}), v.jsx(Bv, {})]
    })
}
const Yv = [{
    path: "/",
    element: v.jsx(qv, {})
}, {
    path: "*",
    element: v.jsx(Dv, {})
}];
let Am;
new Promise(s => {
    Am = s
}
);
function Gv() {
    const s = By(Yv)
        , u = vm();
    return M.useEffect(() => {
        window.REACT_APP_NAVIGATE = u,
            Am(window.REACT_APP_NAVIGATE)
    }
    ),
        s
}
function Vv() {
    return v.jsx(M0, {
        i18n: We,
        children: v.jsx(Sv, {
            basename: "/",
            children: v.jsx(Gv, {})
        })
    })
}
ty.createRoot(document.getElementById("root")).render(v.jsx(M.StrictMode, {
    children: v.jsx(Vv, {})
}));
//# sourceMappingURL=index-9tlQr4lK.js.map
