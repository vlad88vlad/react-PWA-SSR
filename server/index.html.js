// This is HTML file splited in 3 parts
const pageParts = [
    // 1st part
    `   <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8" />
        </head>
        <body>
            <div id="app">Loading...`,
    // 2rd pard: this is where be placed html of react app
    `           </div>
        </body>`,
    // 3nd part: here will be placed initial stringified data
    `  <script type="text/javascript">window.__REDUX_STATE__ = {};</script>
<script>!function (e) {
    function t(t) {
        for (var n, o, i = t[0], c = t[1], l = t[2], s = 0, d = []; s < i.length; s++) o = i[s], Object.prototype.hasOwnProperty.call(a, o) && a[o] && d.push(a[o][0]), a[o] = 0;
        for (n in c) Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n]);
        for (f && f(t); d.length;) d.shift()();
        return u.push.apply(u, l || []), r();
    }

    function r() {
        for (var e, t = 0; t < u.length; t++) {
            for (var r = u[t], n = !0, o = 1; o < r.length; o++) {
                var c = r[o];
                0 !== a[c] && (n = !1);
            }
            n && (u.splice(t--, 1), e = i(i.s = r[0]));
        }
        return e;
    }

    var n = {},
        o = { 5: 0 },
        a = { 5: 0 },
        u = [];

    function i(t) {
        if (n[t]) return n[t].exports;
        var r = n[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(r.exports, r, r.exports, i), r.l = !0, r.exports;
    }

    i.e = function (e) {
        var t = [];
        o[e] ? t.push(o[e]) : 0 !== o[e] && {
            0: 1,
            1: 1
        }[e] && t.push(o[e] = new Promise((function (t, r) {
            for (var n = 'static/css/' + ({
                0: 'DemoPage',
                1: 'TestPage',
                2: 'domainA',
                3: 'domainB'
            }[e] || e) + '.' + {
                0: 'c99205e1',
                1: '5a664380',
                2: '31d6cfe0',
                3: '31d6cfe0'
            }[e] + '.chunk.css', a = i.p + n, u = document.getElementsByTagName('link'), c = 0; c < u.length; c++) {
                var l = (f = u[c]).getAttribute('data-href') || f.getAttribute('href');
                if ('stylesheet' === f.rel && (l === n || l === a)) return t();
            }
            var s = document.getElementsByTagName('style');
            for (c = 0; c < s.length; c++) {
                var f;
                if ((l = (f = s[c]).getAttribute('data-href')) === n || l === a) return t();
            }
            var d = document.createElement('link');
            d.rel = 'stylesheet', d.type = 'text/css', d.onload = t, d.onerror = function (t) {
                var n = t && t.target && t.target.src || a,
                    u = new Error('Loading CSS chunk ' + e + ' failed.\\n(' + n + ')');
                u.code = 'CSS_CHUNK_LOAD_FAILED', u.request = n, delete o[e], d.parentNode.removeChild(d), r(u);
            }, d.href = a, document.getElementsByTagName('head')[0].appendChild(d);
        })).then((function () {
            o[e] = 0;
        })));
        var r = a[e];
        if (0 !== r) {
            if (r) {
                t.push(r[2]);
            } else {
                var n = new Promise((function (t, n) {
                    r = a[e] = [t, n];
                }));
                t.push(r[2] = n);
                var u,
                    c = document.createElement('script');
                c.charset = 'utf-8', c.timeout = 120, i.nc && c.setAttribute('nonce', i.nc), c.src = function (e) {
                    return i.p + 'static/js/' + ({
                        0: 'DemoPage',
                        1: 'TestPage',
                        2: 'domainA',
                        3: 'domainB'
                    }[e] || e) + '.' + {
                        0: '0a78b89f',
                        1: '7dca7166',
                        2: 'ab821b37',
                        3: '717528aa'
                    }[e] + '.chunk.js';
                }(e);
                var l = new Error;
                u = function (t) {
                    c.onerror = c.onload = null, clearTimeout(s);
                    var r = a[e];
                    if (0 !== r) {
                        if (r) {
                            var n = t && ('load' === t.type ? 'missing' : t.type),
                                o = t && t.target && t.target.src;
                            l.message = 'Loading chunk ' + e + ' failed.\\n(' + n + ': ' + o + ')', l.name = 'ChunkLoadError', l.type = n, l.request = o, r[1](l);
                        }
                        a[e] = void 0;
                    }
                };
                var s = setTimeout((function () {
                    u({
                        type: 'timeout',
                        target: c
                    });
                }), 12e4);
                c.onerror = c.onload = u, document.head.appendChild(c);
            }
        }
        return Promise.all(t);
    }, i.m = e, i.c = n, i.d = function (e, t, r) {
        i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        });
    }, i.r = function (e) {
        'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(e, '__esModule', { value: !0 });
    }, i.t = function (e, t) {
        if (1 & t && (e = i(e)), 8 & t) return e;
        if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (i.r(r), Object.defineProperty(r, 'default', {
            enumerable: !0,
            value: e
        }), 2 & t && 'string' != typeof e) {
            for (var n in e) {
                i.d(r, n, function (t) {
                    return e[t];
                }.bind(null, n));
            }
        }
        return r;
    }, i.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default;
        } : function () {
            return e;
        };
        return i.d(t, 'a', t), t;
    }, i.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
    }, i.p = '/', i.oe = function (e) {
        throw console.error(e), e;
    };
    var c = this['webpackJsonppwa-demo'] = this["webpackJsonppwa-demo"] || [],
        l = c.push.bind(c);
    c.push = t, c = c.slice();
    for (var s = 0; s < c.length; s++) t(c[s]);
    var f = l;
    r()
}([])</script>
<script src="/static/js/6.5b839ab0.chunk.js"></script>
<script src="/static/js/main.90dedf87.chunk.js"></script>
</body>

`,
];

export default pageParts;
