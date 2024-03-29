"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a, prop, b2[prop]);
    }
  return a;
};
var __spreadProps = (a, b2) => __defProps(a, __getOwnPropDescs(b2));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to2, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to2, key) && key !== except)
        __defProp(to2, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to2;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x2) => x2.done ? resolve(x2.value) : Promise.resolve(x2.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// ../../node_modules/.pnpm/@prisma+client@5.8.0_prisma@5.8.0/node_modules/@prisma/client/runtime/library.js
var require_library = __commonJS({
  "../../node_modules/.pnpm/@prisma+client@5.8.0_prisma@5.8.0/node_modules/@prisma/client/runtime/library.js"(exports, module) {
    "use strict";
    var Tu = Object.create;
    var Qr = Object.defineProperty;
    var _u = Object.getOwnPropertyDescriptor;
    var Cu = Object.getOwnPropertyNames;
    var Au = Object.getPrototypeOf;
    var Ru = Object.prototype.hasOwnProperty;
    var Q = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
    var _t = (e, t) => {
      for (var r in t)
        Qr(e, r, { get: t[r], enumerable: true });
    };
    var Bo = (e, t, r, n) => {
      if (t && typeof t == "object" || typeof t == "function")
        for (let i of Cu(t))
          !Ru.call(e, i) && i !== r && Qr(e, i, { get: () => t[i], enumerable: !(n = _u(t, i)) || n.enumerable });
      return e;
    };
    var F = (e, t, r) => (r = e != null ? Tu(Au(e)) : {}, Bo(t || !e || !e.__esModule ? Qr(r, "default", { value: e, enumerable: true }) : r, e));
    var Mu = (e) => Bo(Qr({}, "__esModule", { value: true }), e);
    var zo = Q((Hg, Wo) => {
      "use strict";
      var Ct = 1e3, At = Ct * 60, Rt = At * 60, ct = Rt * 24, Su = ct * 7, Iu = ct * 365.25;
      Wo.exports = function(e, t) {
        t = t || {};
        var r = typeof e;
        if (r === "string" && e.length > 0)
          return ku(e);
        if (r === "number" && isFinite(e))
          return t.long ? Ou(e) : Fu(e);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e));
      };
      function ku(e) {
        if (e = String(e), !(e.length > 100)) {
          var t = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);
          if (t) {
            var r = parseFloat(t[1]), n = (t[2] || "ms").toLowerCase();
            switch (n) {
              case "years":
              case "year":
              case "yrs":
              case "yr":
              case "y":
                return r * Iu;
              case "weeks":
              case "week":
              case "w":
                return r * Su;
              case "days":
              case "day":
              case "d":
                return r * ct;
              case "hours":
              case "hour":
              case "hrs":
              case "hr":
              case "h":
                return r * Rt;
              case "minutes":
              case "minute":
              case "mins":
              case "min":
              case "m":
                return r * At;
              case "seconds":
              case "second":
              case "secs":
              case "sec":
              case "s":
                return r * Ct;
              case "milliseconds":
              case "millisecond":
              case "msecs":
              case "msec":
              case "ms":
                return r;
              default:
                return;
            }
          }
        }
      }
      function Fu(e) {
        var t = Math.abs(e);
        return t >= ct ? Math.round(e / ct) + "d" : t >= Rt ? Math.round(e / Rt) + "h" : t >= At ? Math.round(e / At) + "m" : t >= Ct ? Math.round(e / Ct) + "s" : e + "ms";
      }
      function Ou(e) {
        var t = Math.abs(e);
        return t >= ct ? Gr(e, t, ct, "day") : t >= Rt ? Gr(e, t, Rt, "hour") : t >= At ? Gr(e, t, At, "minute") : t >= Ct ? Gr(e, t, Ct, "second") : e + " ms";
      }
      function Gr(e, t, r, n) {
        var i = t >= r * 1.5;
        return Math.round(e / r) + " " + n + (i ? "s" : "");
      }
    });
    var di = Q((Wg, Yo) => {
      "use strict";
      function Du(e) {
        r.debug = r, r.default = r, r.coerce = l, r.disable = o, r.enable = i, r.enabled = s, r.humanize = zo(), r.destroy = u, Object.keys(e).forEach((c) => {
          r[c] = e[c];
        }), r.names = [], r.skips = [], r.formatters = {};
        function t(c) {
          let p = 0;
          for (let d = 0; d < c.length; d++)
            p = (p << 5) - p + c.charCodeAt(d), p |= 0;
          return r.colors[Math.abs(p) % r.colors.length];
        }
        r.selectColor = t;
        function r(c) {
          let p, d = null, f, y;
          function g(..._) {
            if (!g.enabled)
              return;
            let A = g, R = Number(/* @__PURE__ */ new Date()), E = R - (p || R);
            A.diff = E, A.prev = p, A.curr = R, p = R, _[0] = r.coerce(_[0]), typeof _[0] != "string" && _.unshift("%O");
            let S = 0;
            _[0] = _[0].replace(/%([a-zA-Z%])/g, (X, ut) => {
              if (X === "%%")
                return "%";
              S++;
              let K = r.formatters[ut];
              if (typeof K == "function") {
                let ne = _[S];
                X = K.call(A, ne), _.splice(S, 1), S--;
              }
              return X;
            }), r.formatArgs.call(A, _), (A.log || r.log).apply(A, _);
          }
          return g.namespace = c, g.useColors = r.useColors(), g.color = r.selectColor(c), g.extend = n, g.destroy = r.destroy, Object.defineProperty(g, "enabled", { enumerable: true, configurable: false, get: () => d !== null ? d : (f !== r.namespaces && (f = r.namespaces, y = r.enabled(c)), y), set: (_) => {
            d = _;
          } }), typeof r.init == "function" && r.init(g), g;
        }
        function n(c, p) {
          let d = r(this.namespace + (typeof p > "u" ? ":" : p) + c);
          return d.log = this.log, d;
        }
        function i(c) {
          r.save(c), r.namespaces = c, r.names = [], r.skips = [];
          let p, d = (typeof c == "string" ? c : "").split(/[\s,]+/), f = d.length;
          for (p = 0; p < f; p++)
            d[p] && (c = d[p].replace(/\*/g, ".*?"), c[0] === "-" ? r.skips.push(new RegExp("^" + c.slice(1) + "$")) : r.names.push(new RegExp("^" + c + "$")));
        }
        function o() {
          let c = [...r.names.map(a), ...r.skips.map(a).map((p) => "-" + p)].join(",");
          return r.enable(""), c;
        }
        function s(c) {
          if (c[c.length - 1] === "*")
            return true;
          let p, d;
          for (p = 0, d = r.skips.length; p < d; p++)
            if (r.skips[p].test(c))
              return false;
          for (p = 0, d = r.names.length; p < d; p++)
            if (r.names[p].test(c))
              return true;
          return false;
        }
        function a(c) {
          return c.toString().substring(2, c.toString().length - 2).replace(/\.\*\?$/, "*");
        }
        function l(c) {
          return c instanceof Error ? c.stack || c.message : c;
        }
        function u() {
          console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        }
        return r.enable(r.load()), r;
      }
      Yo.exports = Du;
    });
    var Zo = Q((he, Hr) => {
      "use strict";
      he.formatArgs = Lu;
      he.save = $u;
      he.load = qu;
      he.useColors = Nu;
      he.storage = Bu();
      he.destroy = /* @__PURE__ */ (() => {
        let e = false;
        return () => {
          e || (e = true, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
        };
      })();
      he.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"];
      function Nu() {
        return typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs) ? true : typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/) ? false : typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
      }
      function Lu(e) {
        if (e[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + e[0] + (this.useColors ? "%c " : " ") + "+" + Hr.exports.humanize(this.diff), !this.useColors)
          return;
        let t = "color: " + this.color;
        e.splice(1, 0, t, "color: inherit");
        let r = 0, n = 0;
        e[0].replace(/%[a-zA-Z%]/g, (i) => {
          i !== "%%" && (r++, i === "%c" && (n = r));
        }), e.splice(n, 0, t);
      }
      he.log = console.debug || console.log || (() => {
      });
      function $u(e) {
        try {
          e ? he.storage.setItem("debug", e) : he.storage.removeItem("debug");
        } catch (e2) {
        }
      }
      function qu() {
        let e;
        try {
          e = he.storage.getItem("debug");
        } catch (e2) {
        }
        return !e && typeof process < "u" && "env" in process && (e = process.env.DEBUG), e;
      }
      function Bu() {
        try {
          return localStorage;
        } catch (e) {
        }
      }
      Hr.exports = di()(he);
      var { formatters: ju } = Hr.exports;
      ju.j = function(e) {
        try {
          return JSON.stringify(e);
        } catch (t) {
          return "[UnexpectedJSONParseError]: " + t.message;
        }
      };
    });
    var mi = Q((zg, Xo) => {
      "use strict";
      Xo.exports = (e, t = process.argv) => {
        let r = e.startsWith("-") ? "" : e.length === 1 ? "-" : "--", n = t.indexOf(r + e), i = t.indexOf("--");
        return n !== -1 && (i === -1 || n < i);
      };
    });
    var yi = Q((Yg, ts) => {
      "use strict";
      var Vu = require("os"), es = require("tty"), Pe = mi(), { env: G } = process, Ge;
      Pe("no-color") || Pe("no-colors") || Pe("color=false") || Pe("color=never") ? Ge = 0 : (Pe("color") || Pe("colors") || Pe("color=true") || Pe("color=always")) && (Ge = 1);
      "FORCE_COLOR" in G && (G.FORCE_COLOR === "true" ? Ge = 1 : G.FORCE_COLOR === "false" ? Ge = 0 : Ge = G.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(G.FORCE_COLOR, 10), 3));
      function fi(e) {
        return e === 0 ? false : { level: e, hasBasic: true, has256: e >= 2, has16m: e >= 3 };
      }
      function gi(e, t) {
        if (Ge === 0)
          return 0;
        if (Pe("color=16m") || Pe("color=full") || Pe("color=truecolor"))
          return 3;
        if (Pe("color=256"))
          return 2;
        if (e && !t && Ge === void 0)
          return 0;
        let r = Ge || 0;
        if (G.TERM === "dumb")
          return r;
        if (process.platform === "win32") {
          let n = Vu.release().split(".");
          return Number(n[0]) >= 10 && Number(n[2]) >= 10586 ? Number(n[2]) >= 14931 ? 3 : 2 : 1;
        }
        if ("CI" in G)
          return ["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE"].some((n) => n in G) || G.CI_NAME === "codeship" ? 1 : r;
        if ("TEAMCITY_VERSION" in G)
          return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(G.TEAMCITY_VERSION) ? 1 : 0;
        if (G.COLORTERM === "truecolor")
          return 3;
        if ("TERM_PROGRAM" in G) {
          let n = parseInt((G.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
          switch (G.TERM_PROGRAM) {
            case "iTerm.app":
              return n >= 3 ? 3 : 2;
            case "Apple_Terminal":
              return 2;
          }
        }
        return /-256(color)?$/i.test(G.TERM) ? 2 : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(G.TERM) || "COLORTERM" in G ? 1 : r;
      }
      function Uu(e) {
        let t = gi(e, e && e.isTTY);
        return fi(t);
      }
      ts.exports = { supportsColor: Uu, stdout: fi(gi(true, es.isatty(1))), stderr: fi(gi(true, es.isatty(2))) };
    });
    var ns = Q((ee, zr) => {
      "use strict";
      var Ku = require("tty"), Wr = require("util");
      ee.init = Yu;
      ee.log = Hu;
      ee.formatArgs = Ju;
      ee.save = Wu;
      ee.load = zu;
      ee.useColors = Qu;
      ee.destroy = Wr.deprecate(() => {
      }, "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
      ee.colors = [6, 2, 3, 4, 5, 1];
      try {
        let e = yi();
        e && (e.stderr || e).level >= 2 && (ee.colors = [20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62, 63, 68, 69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99, 112, 113, 128, 129, 134, 135, 148, 149, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 178, 179, 184, 185, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 214, 215, 220, 221]);
      } catch (e) {
      }
      ee.inspectOpts = Object.keys(process.env).filter((e) => /^debug_/i.test(e)).reduce((e, t) => {
        let r = t.substring(6).toLowerCase().replace(/_([a-z])/g, (i, o) => o.toUpperCase()), n = process.env[t];
        return /^(yes|on|true|enabled)$/i.test(n) ? n = true : /^(no|off|false|disabled)$/i.test(n) ? n = false : n === "null" ? n = null : n = Number(n), e[r] = n, e;
      }, {});
      function Qu() {
        return "colors" in ee.inspectOpts ? !!ee.inspectOpts.colors : Ku.isatty(process.stderr.fd);
      }
      function Ju(e) {
        let { namespace: t, useColors: r } = this;
        if (r) {
          let n = this.color, i = "\x1B[3" + (n < 8 ? n : "8;5;" + n), o = `  ${i};1m${t} \x1B[0m`;
          e[0] = o + e[0].split(`
`).join(`
` + o), e.push(i + "m+" + zr.exports.humanize(this.diff) + "\x1B[0m");
        } else
          e[0] = Gu() + t + " " + e[0];
      }
      function Gu() {
        return ee.inspectOpts.hideDate ? "" : (/* @__PURE__ */ new Date()).toISOString() + " ";
      }
      function Hu(...e) {
        return process.stderr.write(Wr.format(...e) + `
`);
      }
      function Wu(e) {
        e ? process.env.DEBUG = e : delete process.env.DEBUG;
      }
      function zu() {
        return process.env.DEBUG;
      }
      function Yu(e) {
        e.inspectOpts = {};
        let t = Object.keys(ee.inspectOpts);
        for (let r = 0; r < t.length; r++)
          e.inspectOpts[t[r]] = ee.inspectOpts[t[r]];
      }
      zr.exports = di()(ee);
      var { formatters: rs } = zr.exports;
      rs.o = function(e) {
        return this.inspectOpts.colors = this.useColors, Wr.inspect(e, this.inspectOpts).split(`
`).map((t) => t.trim()).join(" ");
      };
      rs.O = function(e) {
        return this.inspectOpts.colors = this.useColors, Wr.inspect(e, this.inspectOpts);
      };
    });
    var is = Q((Zg, hi) => {
      "use strict";
      typeof process > "u" || process.type === "renderer" || process.browser === true || process.__nwjs ? hi.exports = Zo() : hi.exports = ns();
    });
    var fs = Q((Oy, _i) => {
      "use strict";
      var M = _i.exports;
      _i.exports.default = M;
      var D = "\x1B[", er = "\x1B]", It = "\x07", nn = ";", ms = process.env.TERM_PROGRAM === "Apple_Terminal";
      M.cursorTo = (e, t) => {
        if (typeof e != "number")
          throw new TypeError("The `x` argument is required");
        return typeof t != "number" ? D + (e + 1) + "G" : D + (t + 1) + ";" + (e + 1) + "H";
      };
      M.cursorMove = (e, t) => {
        if (typeof e != "number")
          throw new TypeError("The `x` argument is required");
        let r = "";
        return e < 0 ? r += D + -e + "D" : e > 0 && (r += D + e + "C"), t < 0 ? r += D + -t + "A" : t > 0 && (r += D + t + "B"), r;
      };
      M.cursorUp = (e = 1) => D + e + "A";
      M.cursorDown = (e = 1) => D + e + "B";
      M.cursorForward = (e = 1) => D + e + "C";
      M.cursorBackward = (e = 1) => D + e + "D";
      M.cursorLeft = D + "G";
      M.cursorSavePosition = ms ? "\x1B7" : D + "s";
      M.cursorRestorePosition = ms ? "\x1B8" : D + "u";
      M.cursorGetPosition = D + "6n";
      M.cursorNextLine = D + "E";
      M.cursorPrevLine = D + "F";
      M.cursorHide = D + "?25l";
      M.cursorShow = D + "?25h";
      M.eraseLines = (e) => {
        let t = "";
        for (let r = 0; r < e; r++)
          t += M.eraseLine + (r < e - 1 ? M.cursorUp() : "");
        return e && (t += M.cursorLeft), t;
      };
      M.eraseEndLine = D + "K";
      M.eraseStartLine = D + "1K";
      M.eraseLine = D + "2K";
      M.eraseDown = D + "J";
      M.eraseUp = D + "1J";
      M.eraseScreen = D + "2J";
      M.scrollUp = D + "S";
      M.scrollDown = D + "T";
      M.clearScreen = "\x1Bc";
      M.clearTerminal = process.platform === "win32" ? `${M.eraseScreen}${D}0f` : `${M.eraseScreen}${D}3J${D}H`;
      M.beep = It;
      M.link = (e, t) => [er, "8", nn, nn, t, It, e, er, "8", nn, nn, It].join("");
      M.image = (e, t = {}) => {
        let r = `${er}1337;File=inline=1`;
        return t.width && (r += `;width=${t.width}`), t.height && (r += `;height=${t.height}`), t.preserveAspectRatio === false && (r += ";preserveAspectRatio=0"), r + ":" + e.toString("base64") + It;
      };
      M.iTerm = { setCwd: (e = process.cwd()) => `${er}50;CurrentDir=${e}${It}`, annotation: (e, t = {}) => {
        let r = `${er}1337;`, n = typeof t.x < "u", i = typeof t.y < "u";
        if ((n || i) && !(n && i && typeof t.length < "u"))
          throw new Error("`x`, `y` and `length` must be defined when `x` or `y` is defined");
        return e = e.replace(/\|/g, ""), r += t.isHidden ? "AddHiddenAnnotation=" : "AddAnnotation=", t.length > 0 ? r += (n ? [e, t.length, t.x, t.y] : [t.length, e]).join("|") : r += e, r + It;
      } };
    });
    var hs = Q((Dy, ys) => {
      "use strict";
      var ic = yi(), kt = mi();
      function gs(e) {
        if (/^\d{3,4}$/.test(e)) {
          let r = /(\d{1,2})(\d{2})/.exec(e);
          return { major: 0, minor: parseInt(r[1], 10), patch: parseInt(r[2], 10) };
        }
        let t = (e || "").split(".").map((r) => parseInt(r, 10));
        return { major: t[0], minor: t[1], patch: t[2] };
      }
      function Ci(e) {
        let { env: t } = process;
        if ("FORCE_HYPERLINK" in t)
          return !(t.FORCE_HYPERLINK.length > 0 && parseInt(t.FORCE_HYPERLINK, 10) === 0);
        if (kt("no-hyperlink") || kt("no-hyperlinks") || kt("hyperlink=false") || kt("hyperlink=never"))
          return false;
        if (kt("hyperlink=true") || kt("hyperlink=always") || "NETLIFY" in t)
          return true;
        if (!ic.supportsColor(e) || e && !e.isTTY || process.platform === "win32" || "CI" in t || "TEAMCITY_VERSION" in t)
          return false;
        if ("TERM_PROGRAM" in t) {
          let r = gs(t.TERM_PROGRAM_VERSION);
          switch (t.TERM_PROGRAM) {
            case "iTerm.app":
              return r.major === 3 ? r.minor >= 1 : r.major > 3;
            case "WezTerm":
              return r.major >= 20200620;
            case "vscode":
              return r.major > 1 || r.major === 1 && r.minor >= 72;
          }
        }
        if ("VTE_VERSION" in t) {
          if (t.VTE_VERSION === "0.50.0")
            return false;
          let r = gs(t.VTE_VERSION);
          return r.major > 0 || r.minor >= 50;
        }
        return false;
      }
      ys.exports = { supportsHyperlink: Ci, stdout: Ci(process.stdout), stderr: Ci(process.stderr) };
    });
    var xs = Q((Ny, tr) => {
      "use strict";
      var oc = fs(), Ai = hs(), bs = (e, t, _a6 = {}) => {
        var _b2 = _a6, { target: r = "stdout" } = _b2, n = __objRest(_b2, ["target"]);
        return Ai[r] ? oc.link(e, t) : n.fallback === false ? e : typeof n.fallback == "function" ? n.fallback(e, t) : `${e} (\u200B${t}\u200B)`;
      };
      tr.exports = (e, t, r = {}) => bs(e, t, r);
      tr.exports.stderr = (e, t, r = {}) => bs(e, t, __spreadValues({ target: "stderr" }, r));
      tr.exports.isSupported = Ai.stdout;
      tr.exports.stderr.isSupported = Ai.stderr;
    });
    var Ms = Q((Xy, wc) => {
      wc.exports = { name: "dotenv", version: "16.0.3", description: "Loads environment variables from .env file", main: "lib/main.js", types: "lib/main.d.ts", exports: { ".": { require: "./lib/main.js", types: "./lib/main.d.ts", default: "./lib/main.js" }, "./config": "./config.js", "./config.js": "./config.js", "./lib/env-options": "./lib/env-options.js", "./lib/env-options.js": "./lib/env-options.js", "./lib/cli-options": "./lib/cli-options.js", "./lib/cli-options.js": "./lib/cli-options.js", "./package.json": "./package.json" }, scripts: { "dts-check": "tsc --project tests/types/tsconfig.json", lint: "standard", "lint-readme": "standard-markdown", pretest: "npm run lint && npm run dts-check", test: "tap tests/*.js --100 -Rspec", prerelease: "npm test", release: "standard-version" }, repository: { type: "git", url: "git://github.com/motdotla/dotenv.git" }, keywords: ["dotenv", "env", ".env", "environment", "variables", "config", "settings"], readmeFilename: "README.md", license: "BSD-2-Clause", devDependencies: { "@types/node": "^17.0.9", decache: "^4.6.1", dtslint: "^3.7.0", sinon: "^12.0.1", standard: "^16.0.4", "standard-markdown": "^7.1.0", "standard-version": "^9.3.2", tap: "^15.1.6", tar: "^6.1.11", typescript: "^4.5.4" }, engines: { node: ">=12" } };
    });
    var Is = Q((eh, un) => {
      "use strict";
      var Ec = require("fs"), Ss = require("path"), Pc = require("os"), vc = Ms(), Tc = vc.version, _c = /(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;
      function Cc(e) {
        let t = {}, r = e.toString();
        r = r.replace(/\r\n?/mg, `
`);
        let n;
        for (; (n = _c.exec(r)) != null; ) {
          let i = n[1], o = n[2] || "";
          o = o.trim();
          let s = o[0];
          o = o.replace(/^(['"`])([\s\S]*)\1$/mg, "$2"), s === '"' && (o = o.replace(/\\n/g, `
`), o = o.replace(/\\r/g, "\r")), t[i] = o;
        }
        return t;
      }
      function Si(e) {
        console.log(`[dotenv@${Tc}][DEBUG] ${e}`);
      }
      function Ac(e) {
        return e[0] === "~" ? Ss.join(Pc.homedir(), e.slice(1)) : e;
      }
      function Rc(e) {
        let t = Ss.resolve(process.cwd(), ".env"), r = "utf8", n = !!(e && e.debug), i = !!(e && e.override);
        e && (e.path != null && (t = Ac(e.path)), e.encoding != null && (r = e.encoding));
        try {
          let o = ln.parse(Ec.readFileSync(t, { encoding: r }));
          return Object.keys(o).forEach(function(s) {
            Object.prototype.hasOwnProperty.call(process.env, s) ? (i === true && (process.env[s] = o[s]), n && Si(i === true ? `"${s}" is already defined in \`process.env\` and WAS overwritten` : `"${s}" is already defined in \`process.env\` and was NOT overwritten`)) : process.env[s] = o[s];
          }), { parsed: o };
        } catch (o) {
          return n && Si(`Failed to load ${t} ${o.message}`), { error: o };
        }
      }
      var ln = { config: Rc, parse: Cc };
      un.exports.config = ln.config;
      un.exports.parse = ln.parse;
      un.exports = ln;
    });
    var Ls = Q((ah, Ns) => {
      "use strict";
      Ns.exports = (e) => {
        let t = e.match(/^[ \t]*(?=\S)/gm);
        return t ? t.reduce((r, n) => Math.min(r, n.length), 1 / 0) : 0;
      };
    });
    var qs = Q((lh, $s) => {
      "use strict";
      var kc = Ls();
      $s.exports = (e) => {
        let t = kc(e);
        if (t === 0)
          return e;
        let r = new RegExp(`^[ \\t]{${t}}`, "gm");
        return e.replace(r, "");
      };
    });
    var Bs = Q((uh, Fc) => {
      Fc.exports = { name: "@prisma/engines-version", version: "5.8.0-37.0a83d8541752d7582de2ebc1ece46519ce72a848", main: "index.js", types: "index.d.ts", license: "Apache-2.0", author: "Tim Suchanek <suchanek@prisma.io>", prisma: { enginesVersion: "0a83d8541752d7582de2ebc1ece46519ce72a848" }, repository: { type: "git", url: "https://github.com/prisma/engines-wrapper.git", directory: "packages/engines-version" }, devDependencies: { "@types/node": "18.19.4", typescript: "4.9.5" }, files: ["index.js", "index.d.ts"], scripts: { build: "tsc -d" } };
    });
    var Fi = Q((pn) => {
      "use strict";
      Object.defineProperty(pn, "__esModule", { value: true });
      pn.enginesVersion = void 0;
      pn.enginesVersion = Bs().prisma.enginesVersion;
    });
    var $i = Q((Mh, Us) => {
      "use strict";
      Us.exports = (e, t = 1, r) => {
        if (r = __spreadValues({ indent: " ", includeEmptyLines: false }, r), typeof e != "string")
          throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof e}\``);
        if (typeof t != "number")
          throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof t}\``);
        if (typeof r.indent != "string")
          throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof r.indent}\``);
        if (t === 0)
          return e;
        let n = r.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
        return e.replace(n, r.indent.repeat(t));
      };
    });
    var Gs = Q((kh, Js) => {
      "use strict";
      Js.exports = ({ onlyFirst: e = false } = {}) => {
        let t = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");
        return new RegExp(t, e ? void 0 : "g");
      };
    });
    var Vi = Q((Fh, Hs) => {
      "use strict";
      var Uc = Gs();
      Hs.exports = (e) => typeof e == "string" ? e.replace(Uc(), "") : e;
    });
    var Ws = Q((Nh, mn) => {
      "use strict";
      mn.exports = (e = {}) => {
        let t;
        if (e.repoUrl)
          t = e.repoUrl;
        else if (e.user && e.repo)
          t = `https://github.com/${e.user}/${e.repo}`;
        else
          throw new Error("You need to specify either the `repoUrl` option or both the `user` and `repo` options");
        let r = new URL(`${t}/issues/new`), n = ["body", "title", "labels", "template", "milestone", "assignee", "projects"];
        for (let i of n) {
          let o = e[i];
          if (o !== void 0) {
            if (i === "labels" || i === "projects") {
              if (!Array.isArray(o))
                throw new TypeError(`The \`${i}\` option should be an array`);
              o = o.join(",");
            }
            r.searchParams.set(i, o);
          }
        }
        return r.toString();
      };
      mn.exports.default = mn.exports;
    });
    var Io = Q((vT, Il) => {
      "use strict";
      Il.exports = /* @__PURE__ */ function() {
        function e(t, r, n, i, o) {
          return t < r || n < r ? t > n ? n + 1 : t + 1 : i === o ? r : r + 1;
        }
        return function(t, r) {
          if (t === r)
            return 0;
          if (t.length > r.length) {
            var n = t;
            t = r, r = n;
          }
          for (var i = t.length, o = r.length; i > 0 && t.charCodeAt(i - 1) === r.charCodeAt(o - 1); )
            i--, o--;
          for (var s = 0; s < i && t.charCodeAt(s) === r.charCodeAt(s); )
            s++;
          if (i -= s, o -= s, i === 0 || o < 3)
            return o;
          var a = 0, l, u, c, p, d, f, y, g, _, A, R, E, S = [];
          for (l = 0; l < i; l++)
            S.push(l + 1), S.push(t.charCodeAt(s + l));
          for (var we = S.length - 1; a < o - 3; )
            for (_ = r.charCodeAt(s + (u = a)), A = r.charCodeAt(s + (c = a + 1)), R = r.charCodeAt(s + (p = a + 2)), E = r.charCodeAt(s + (d = a + 3)), f = a += 4, l = 0; l < we; l += 2)
              y = S[l], g = S[l + 1], u = e(y, u, c, _, g), c = e(u, c, p, A, g), p = e(c, p, d, R, g), f = e(p, d, f, E, g), S[l] = f, d = p, p = c, c = u, u = y;
          for (; a < o; )
            for (_ = r.charCodeAt(s + (u = a)), f = ++a, l = 0; l < we; l += 2)
              y = S[l], S[l] = f = e(y, u, f, _, S[l + 1]), u = y;
          return f;
        };
      }();
    });
    var Ng = {};
    _t(Ng, { DMMF: () => Ee, DMMFClass: () => Jr, Debug: () => bi, Decimal: () => Ne, Extensions: () => li, MetricsClient: () => Dt, NotFoundError: () => Ve, ObjectEnumValue: () => ke, PrismaClientInitializationError: () => k, PrismaClientKnownRequestError: () => H, PrismaClientRustPanicError: () => be, PrismaClientUnknownRequestError: () => W, PrismaClientValidationError: () => se, Public: () => ui, Sql: () => fe, Types: () => ci, defineDmmfProperty: () => Ys, detectRuntime: () => gl, empty: () => Xs, getPrismaClient: () => Eu, itxClientDenyList: () => Gi, join: () => Zs, makeStrictEnum: () => Pu, objectEnumNames: () => Jc, objectEnumValues: () => gn, raw: () => Zi, sqltag: () => Xi, warnEnvConflicts: () => vu, warnOnce: () => lr });
    module.exports = Mu(Ng);
    var li = {};
    _t(li, { defineExtension: () => jo, getExtensionContext: () => Vo });
    function jo(e) {
      return typeof e == "function" ? e : (t) => t.$extends(e);
    }
    function Vo(e) {
      return e;
    }
    var ui = {};
    _t(ui, { validator: () => Uo });
    function Uo(...e) {
      return (t) => t;
    }
    var ci = {};
    _t(ci, { Extensions: () => Ko, Public: () => Qo, Result: () => Jo, Utils: () => Go });
    var Ko = {};
    var Qo = {};
    var Jo = {};
    var Go = {};
    var Je = (e, t) => {
      let r = {};
      for (let n of e) {
        let i = n[t];
        r[i] = n;
      }
      return r;
    };
    function Ho(e) {
      return e.substring(0, 1).toLowerCase() + e.substring(1);
    }
    var Jr = class {
      constructor(t) {
        this.document = t;
        this.compositeNames = new Set(this.datamodel.types.map((r) => r.name)), this.typeAndModelMap = this.buildTypeModelMap(), this.mappingsMap = this.buildMappingsMap(), this.outputTypeMap = this.buildMergedOutputTypeMap(), this.rootFieldMap = this.buildRootFieldMap(), this.inputTypesByName = this.buildInputTypesMap();
      }
      get datamodel() {
        return this.document.datamodel;
      }
      get mappings() {
        return this.document.mappings;
      }
      get schema() {
        return this.document.schema;
      }
      get inputObjectTypes() {
        return this.schema.inputObjectTypes;
      }
      get outputObjectTypes() {
        return this.schema.outputObjectTypes;
      }
      isComposite(t) {
        return this.compositeNames.has(t);
      }
      getOtherOperationNames() {
        return [Object.values(this.mappings.otherOperations.write), Object.values(this.mappings.otherOperations.read)].flat();
      }
      hasEnumInNamespace(t, r) {
        var _a6;
        return ((_a6 = this.schema.enumTypes[r]) == null ? void 0 : _a6.find((n) => n.name === t)) !== void 0;
      }
      resolveInputObjectType(t) {
        return this.inputTypesByName.get(pi(t.type, t.namespace));
      }
      resolveOutputObjectType(t) {
        var _a6;
        if (t.location === "outputObjectTypes")
          return this.outputObjectTypes[(_a6 = t.namespace) != null ? _a6 : "prisma"].find((r) => r.name === t.type);
      }
      buildModelMap() {
        return Je(this.datamodel.models, "name");
      }
      buildTypeMap() {
        return Je(this.datamodel.types, "name");
      }
      buildTypeModelMap() {
        return __spreadValues(__spreadValues({}, this.buildTypeMap()), this.buildModelMap());
      }
      buildMappingsMap() {
        return Je(this.mappings.modelOperations, "model");
      }
      buildMergedOutputTypeMap() {
        return { model: Je(this.schema.outputObjectTypes.model, "name"), prisma: Je(this.schema.outputObjectTypes.prisma, "name") };
      }
      buildRootFieldMap() {
        return __spreadValues(__spreadValues({}, Je(this.outputTypeMap.prisma.Query.fields, "name")), Je(this.outputTypeMap.prisma.Mutation.fields, "name"));
      }
      buildInputTypesMap() {
        let t = /* @__PURE__ */ new Map();
        for (let r of this.inputObjectTypes.prisma)
          t.set(pi(r.name, "prisma"), r);
        if (!this.inputObjectTypes.model)
          return t;
        for (let r of this.inputObjectTypes.model)
          t.set(pi(r.name, "model"), r);
        return t;
      }
    };
    function pi(e, t) {
      return t ? `${t}.${e}` : e;
    }
    var Ee;
    ((t) => {
      let e;
      ((E) => (E.findUnique = "findUnique", E.findUniqueOrThrow = "findUniqueOrThrow", E.findFirst = "findFirst", E.findFirstOrThrow = "findFirstOrThrow", E.findMany = "findMany", E.create = "create", E.createMany = "createMany", E.update = "update", E.updateMany = "updateMany", E.upsert = "upsert", E.delete = "delete", E.deleteMany = "deleteMany", E.groupBy = "groupBy", E.count = "count", E.aggregate = "aggregate", E.findRaw = "findRaw", E.aggregateRaw = "aggregateRaw"))(e = t.ModelAction || (t.ModelAction = {}));
    })(Ee || (Ee = {}));
    var Yr = F(is());
    var Zu = 100;
    var Zt = [];
    var _a2, _b;
    typeof process < "u" && typeof ((_a2 = process.stderr) == null ? void 0 : _a2.write) != "function" && (Yr.default.log = (_b = console.debug) != null ? _b : console.log);
    function Xu(e) {
      let t = (0, Yr.default)(e), r = Object.assign((...n) => (t.log = r.log, n.length !== 0 && Zt.push([e, ...n]), Zt.length > Zu && Zt.shift(), t("", ...n)), t);
      return r;
    }
    var bi = Object.assign(Xu, Yr.default);
    function os(e = 7500) {
      let t = Zt.map((r) => r.map((n) => typeof n == "string" ? n : JSON.stringify(n)).join(" ")).join(`
`);
      return t.length < e ? t : t.slice(-e);
    }
    function ss() {
      Zt.length = 0;
    }
    var $ = bi;
    var xi;
    var as;
    var ls;
    var us;
    var cs = true;
    typeof process < "u" && ({ FORCE_COLOR: xi, NODE_DISABLE_COLORS: as, NO_COLOR: ls, TERM: us } = process.env || {}, cs = process.stdout && process.stdout.isTTY);
    var ec = { enabled: !as && ls == null && us !== "dumb" && (xi != null && xi !== "0" || cs) };
    function q(e, t) {
      let r = new RegExp(`\\x1b\\[${t}m`, "g"), n = `\x1B[${e}m`, i = `\x1B[${t}m`;
      return function(o) {
        return !ec.enabled || o == null ? o : n + (~("" + o).indexOf(i) ? o.replace(r, i + n) : o) + i;
      };
    }
    var ey = q(0, 0);
    var de = q(1, 22);
    var He = q(2, 22);
    var ty = q(3, 23);
    var ue = q(4, 24);
    var ry = q(7, 27);
    var ny = q(8, 28);
    var iy = q(9, 29);
    var oy = q(30, 39);
    var ve = q(31, 39);
    var pt = q(32, 39);
    var Re = q(33, 39);
    var Mt = q(34, 39);
    var sy = q(35, 39);
    var We = q(36, 39);
    var ay = q(37, 39);
    var Zr = q(90, 39);
    var ly = q(90, 39);
    var uy = q(40, 49);
    var cy = q(41, 49);
    var py = q(42, 49);
    var dy = q(43, 49);
    var my = q(44, 49);
    var fy = q(45, 49);
    var gy = q(46, 49);
    var yy = q(47, 49);
    var ps = F(require("fs"));
    function wi() {
      let e = process.env.PRISMA_QUERY_ENGINE_LIBRARY;
      if (!(e && ps.default.existsSync(e)) && process.arch === "ia32")
        throw new Error('The default query engine type (Node-API, "library") is currently not supported for 32bit Node. Please set `engineType = "binary"` in the "generator" block of your "schema.prisma" file (or use the environment variables "PRISMA_CLIENT_ENGINE_TYPE=binary" and/or "PRISMA_CLI_QUERY_ENGINE_TYPE=binary".)');
    }
    var Ei = ["darwin", "darwin-arm64", "debian-openssl-1.0.x", "debian-openssl-1.1.x", "debian-openssl-3.0.x", "rhel-openssl-1.0.x", "rhel-openssl-1.1.x", "rhel-openssl-3.0.x", "linux-arm64-openssl-1.1.x", "linux-arm64-openssl-1.0.x", "linux-arm64-openssl-3.0.x", "linux-arm-openssl-1.1.x", "linux-arm-openssl-1.0.x", "linux-arm-openssl-3.0.x", "linux-musl", "linux-musl-openssl-3.0.x", "linux-musl-arm64-openssl-1.1.x", "linux-musl-arm64-openssl-3.0.x", "linux-nixos", "linux-static-x64", "linux-static-arm64", "windows", "freebsd11", "freebsd12", "freebsd13", "freebsd14", "openbsd", "netbsd", "arm"];
    var Xr = "libquery_engine";
    function en(e, t) {
      let r = t === "url";
      return e.includes("windows") ? r ? "query_engine.dll.node" : `query_engine-${e}.dll.node` : e.includes("darwin") ? r ? `${Xr}.dylib.node` : `${Xr}-${e}.dylib.node` : r ? `${Xr}.so.node` : `${Xr}-${e}.so.node`;
    }
    var vs = F(require("child_process"));
    var Ri = F(require("fs/promises"));
    var sn = F(require("os"));
    var je = Symbol.for("@ts-pattern/matcher");
    var tc = Symbol.for("@ts-pattern/isVariadic");
    var rn = "@ts-pattern/anonymous-select-key";
    var Pi = (e) => !!(e && typeof e == "object");
    var tn = (e) => e && !!e[je];
    var Ie = (e, t, r) => {
      if (tn(e)) {
        let n = e[je](), { matched: i, selections: o } = n.match(t);
        return i && o && Object.keys(o).forEach((s) => r(s, o[s])), i;
      }
      if (Pi(e)) {
        if (!Pi(t))
          return false;
        if (Array.isArray(e)) {
          if (!Array.isArray(t))
            return false;
          let n = [], i = [], o = [];
          for (let s of e.keys()) {
            let a = e[s];
            tn(a) && a[tc] ? o.push(a) : o.length ? i.push(a) : n.push(a);
          }
          if (o.length) {
            if (o.length > 1)
              throw new Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");
            if (t.length < n.length + i.length)
              return false;
            let s = t.slice(0, n.length), a = i.length === 0 ? [] : t.slice(-i.length), l = t.slice(n.length, i.length === 0 ? 1 / 0 : -i.length);
            return n.every((u, c) => Ie(u, s[c], r)) && i.every((u, c) => Ie(u, a[c], r)) && (o.length === 0 || Ie(o[0], l, r));
          }
          return e.length === t.length && e.every((s, a) => Ie(s, t[a], r));
        }
        return Object.keys(e).every((n) => {
          let i = e[n];
          return (n in t || tn(o = i) && o[je]().matcherType === "optional") && Ie(i, t[n], r);
          var o;
        });
      }
      return Object.is(t, e);
    };
    var Ze = (e) => {
      var t, r, n;
      return Pi(e) ? tn(e) ? (t = (r = (n = e[je]()).getSelectionKeys) == null ? void 0 : r.call(n)) != null ? t : [] : Array.isArray(e) ? Xt(e, Ze) : Xt(Object.values(e), Ze) : [];
    };
    var Xt = (e, t) => e.reduce((r, n) => r.concat(t(n)), []);
    function Te(e) {
      return Object.assign(e, { optional: () => rc(e), and: (t) => V(e, t), or: (t) => nc(e, t), select: (t) => t === void 0 ? ds(e) : ds(t, e) });
    }
    function rc(e) {
      return Te({ [je]: () => ({ match: (t) => {
        let r = {}, n = (i, o) => {
          r[i] = o;
        };
        return t === void 0 ? (Ze(e).forEach((i) => n(i, void 0)), { matched: true, selections: r }) : { matched: Ie(e, t, n), selections: r };
      }, getSelectionKeys: () => Ze(e), matcherType: "optional" }) });
    }
    function V(...e) {
      return Te({ [je]: () => ({ match: (t) => {
        let r = {}, n = (i, o) => {
          r[i] = o;
        };
        return { matched: e.every((i) => Ie(i, t, n)), selections: r };
      }, getSelectionKeys: () => Xt(e, Ze), matcherType: "and" }) });
    }
    function nc(...e) {
      return Te({ [je]: () => ({ match: (t) => {
        let r = {}, n = (i, o) => {
          r[i] = o;
        };
        return Xt(e, Ze).forEach((i) => n(i, void 0)), { matched: e.some((i) => Ie(i, t, n)), selections: r };
      }, getSelectionKeys: () => Xt(e, Ze), matcherType: "or" }) });
    }
    function O(e) {
      return { [je]: () => ({ match: (t) => ({ matched: !!e(t) }) }) };
    }
    function ds(...e) {
      let t = typeof e[0] == "string" ? e[0] : void 0, r = e.length === 2 ? e[1] : typeof e[0] == "string" ? void 0 : e[0];
      return Te({ [je]: () => ({ match: (n) => {
        let i = { [t != null ? t : rn]: n };
        return { matched: r === void 0 || Ie(r, n, (o, s) => {
          i[o] = s;
        }), selections: i };
      }, getSelectionKeys: () => [t != null ? t : rn].concat(r === void 0 ? [] : Ze(r)) }) });
    }
    function Me(e) {
      return typeof e == "number";
    }
    function dt(e) {
      return typeof e == "string";
    }
    function ze(e) {
      return typeof e == "bigint";
    }
    var Cy = Te(O(function(e) {
      return true;
    }));
    var mt = (e) => Object.assign(Te(e), { startsWith: (t) => {
      return mt(V(e, (r = t, O((n) => dt(n) && n.startsWith(r)))));
      var r;
    }, endsWith: (t) => {
      return mt(V(e, (r = t, O((n) => dt(n) && n.endsWith(r)))));
      var r;
    }, minLength: (t) => mt(V(e, ((r) => O((n) => dt(n) && n.length >= r))(t))), maxLength: (t) => mt(V(e, ((r) => O((n) => dt(n) && n.length <= r))(t))), includes: (t) => {
      return mt(V(e, (r = t, O((n) => dt(n) && n.includes(r)))));
      var r;
    }, regex: (t) => {
      return mt(V(e, (r = t, O((n) => dt(n) && !!n.match(r)))));
      var r;
    } });
    var Ay = mt(O(dt));
    var Se = (e) => Object.assign(Te(e), { between: (t, r) => Se(V(e, ((n, i) => O((o) => Me(o) && n <= o && i >= o))(t, r))), lt: (t) => Se(V(e, ((r) => O((n) => Me(n) && n < r))(t))), gt: (t) => Se(V(e, ((r) => O((n) => Me(n) && n > r))(t))), lte: (t) => Se(V(e, ((r) => O((n) => Me(n) && n <= r))(t))), gte: (t) => Se(V(e, ((r) => O((n) => Me(n) && n >= r))(t))), int: () => Se(V(e, O((t) => Me(t) && Number.isInteger(t)))), finite: () => Se(V(e, O((t) => Me(t) && Number.isFinite(t)))), positive: () => Se(V(e, O((t) => Me(t) && t > 0))), negative: () => Se(V(e, O((t) => Me(t) && t < 0))) });
    var Ry = Se(O(Me));
    var Ye = (e) => Object.assign(Te(e), { between: (t, r) => Ye(V(e, ((n, i) => O((o) => ze(o) && n <= o && i >= o))(t, r))), lt: (t) => Ye(V(e, ((r) => O((n) => ze(n) && n < r))(t))), gt: (t) => Ye(V(e, ((r) => O((n) => ze(n) && n > r))(t))), lte: (t) => Ye(V(e, ((r) => O((n) => ze(n) && n <= r))(t))), gte: (t) => Ye(V(e, ((r) => O((n) => ze(n) && n >= r))(t))), positive: () => Ye(V(e, O((t) => ze(t) && t > 0))), negative: () => Ye(V(e, O((t) => ze(t) && t < 0))) });
    var My = Ye(O(ze));
    var Sy = Te(O(function(e) {
      return typeof e == "boolean";
    }));
    var Iy = Te(O(function(e) {
      return typeof e == "symbol";
    }));
    var ky = Te(O(function(e) {
      return e == null;
    }));
    var vi = { matched: false, value: void 0 };
    function St(e) {
      return new Ti(e, vi);
    }
    var Ti = class e {
      constructor(t, r) {
        this.input = void 0, this.state = void 0, this.input = t, this.state = r;
      }
      with(...t) {
        if (this.state.matched)
          return this;
        let r = t[t.length - 1], n = [t[0]], i;
        t.length === 3 && typeof t[1] == "function" ? (n.push(t[0]), i = t[1]) : t.length > 2 && n.push(...t.slice(1, t.length - 1));
        let o = false, s = {}, a = (u, c) => {
          o = true, s[u] = c;
        }, l = !n.some((u) => Ie(u, this.input, a)) || i && !i(this.input) ? vi : { matched: true, value: r(o ? rn in s ? s[rn] : s : this.input, this.input) };
        return new e(this.input, l);
      }
      when(t, r) {
        if (this.state.matched)
          return this;
        let n = !!t(this.input);
        return new e(this.input, n ? { matched: true, value: r(this.input, this.input) } : vi);
      }
      otherwise(t) {
        return this.state.matched ? this.state.value : t(this.input);
      }
      exhaustive() {
        return this.run();
      }
      run() {
        if (this.state.matched)
          return this.state.value;
        let t;
        try {
          t = JSON.stringify(this.input);
        } catch (e2) {
          t = this.input;
        }
        throw new Error(`Pattern matching error: no pattern matches value ${t}`);
      }
      returnType() {
        return this;
      }
    };
    var Ts = require("util");
    var ws = F(xs());
    function rr(e) {
      return (0, ws.default)(e, e, { fallback: ue });
    }
    var sc = { warn: Re("prisma:warn") };
    var ac = { warn: () => !process.env.PRISMA_DISABLE_WARNINGS };
    function nr(e, ...t) {
      ac.warn() && console.warn(`${sc.warn} ${e}`, ...t);
    }
    var lc = (0, Ts.promisify)(vs.default.exec);
    var me = $("prisma:get-platform");
    var uc = ["1.0.x", "1.1.x", "3.0.x"];
    function _s() {
      return __async(this, null, function* () {
        let e = sn.default.platform(), t = process.arch;
        if (e === "freebsd") {
          let s = yield an("freebsd-version");
          if (s && s.trim().length > 0) {
            let l = /^(\d+)\.?/.exec(s);
            if (l)
              return { platform: "freebsd", targetDistro: `freebsd${l[1]}`, arch: t };
          }
        }
        if (e !== "linux")
          return { platform: e, arch: t };
        let r = yield pc(), n = yield xc(), i = mc({ arch: t, archFromUname: n, familyDistro: r.familyDistro }), { libssl: o } = yield fc(i);
        return __spreadValues({ platform: "linux", libssl: o, arch: t, archFromUname: n }, r);
      });
    }
    function cc(e) {
      let t = /^ID="?([^"\n]*)"?$/im, r = /^ID_LIKE="?([^"\n]*)"?$/im, n = t.exec(e), i = n && n[1] && n[1].toLowerCase() || "", o = r.exec(e), s = o && o[1] && o[1].toLowerCase() || "", a = St({ id: i, idLike: s }).with({ id: "alpine" }, ({ id: l }) => ({ targetDistro: "musl", familyDistro: l, originalDistro: l })).with({ id: "raspbian" }, ({ id: l }) => ({ targetDistro: "arm", familyDistro: "debian", originalDistro: l })).with({ id: "nixos" }, ({ id: l }) => ({ targetDistro: "nixos", originalDistro: l, familyDistro: "nixos" })).with({ id: "debian" }, { id: "ubuntu" }, ({ id: l }) => ({ targetDistro: "debian", familyDistro: "debian", originalDistro: l })).with({ id: "rhel" }, { id: "centos" }, { id: "fedora" }, ({ id: l }) => ({ targetDistro: "rhel", familyDistro: "rhel", originalDistro: l })).when(({ idLike: l }) => l.includes("debian") || l.includes("ubuntu"), ({ id: l }) => ({ targetDistro: "debian", familyDistro: "debian", originalDistro: l })).when(({ idLike: l }) => i === "arch" || l.includes("arch"), ({ id: l }) => ({ targetDistro: "debian", familyDistro: "arch", originalDistro: l })).when(({ idLike: l }) => l.includes("centos") || l.includes("fedora") || l.includes("rhel") || l.includes("suse"), ({ id: l }) => ({ targetDistro: "rhel", familyDistro: "rhel", originalDistro: l })).otherwise(({ id: l }) => ({ targetDistro: void 0, familyDistro: void 0, originalDistro: l }));
      return me(`Found distro info:
${JSON.stringify(a, null, 2)}`), a;
    }
    function pc() {
      return __async(this, null, function* () {
        let e = "/etc/os-release";
        try {
          let t = yield Ri.default.readFile(e, { encoding: "utf-8" });
          return cc(t);
        } catch (e2) {
          return { targetDistro: void 0, familyDistro: void 0, originalDistro: void 0 };
        }
      });
    }
    function dc(e) {
      let t = /^OpenSSL\s(\d+\.\d+)\.\d+/.exec(e);
      if (t) {
        let r = `${t[1]}.x`;
        return Cs(r);
      }
    }
    function Es(e) {
      var _a6;
      let t = /libssl\.so\.(\d)(\.\d)?/.exec(e);
      if (t) {
        let r = `${t[1]}${(_a6 = t[2]) != null ? _a6 : ".0"}.x`;
        return Cs(r);
      }
    }
    function Cs(e) {
      let t = (() => {
        if (Rs(e))
          return e;
        let r = e.split(".");
        return r[1] = "0", r.join(".");
      })();
      if (uc.includes(t))
        return t;
    }
    function mc(e) {
      return St(e).with({ familyDistro: "musl" }, () => (me('Trying platform-specific paths for "alpine"'), ["/lib"])).with({ familyDistro: "debian" }, ({ archFromUname: t }) => (me('Trying platform-specific paths for "debian" (and "ubuntu")'), [`/usr/lib/${t}-linux-gnu`, `/lib/${t}-linux-gnu`])).with({ familyDistro: "rhel" }, () => (me('Trying platform-specific paths for "rhel"'), ["/lib64", "/usr/lib64"])).otherwise(({ familyDistro: t, arch: r, archFromUname: n }) => (me(`Don't know any platform-specific paths for "${t}" on ${r} (${n})`), []));
    }
    function fc(e) {
      return __async(this, null, function* () {
        let t = 'grep -v "libssl.so.0"', r = yield Ps(e);
        if (r) {
          me(`Found libssl.so file using platform-specific paths: ${r}`);
          let o = Es(r);
          if (me(`The parsed libssl version is: ${o}`), o)
            return { libssl: o, strategy: "libssl-specific-path" };
        }
        me('Falling back to "ldconfig" and other generic paths');
        let n = yield an(`ldconfig -p | sed "s/.*=>s*//" | sed "s|.*/||" | grep libssl | sort | ${t}`);
        if (n || (n = yield Ps(["/lib64", "/usr/lib64", "/lib"])), n) {
          me(`Found libssl.so file using "ldconfig" or other generic paths: ${n}`);
          let o = Es(n);
          if (me(`The parsed libssl version is: ${o}`), o)
            return { libssl: o, strategy: "ldconfig" };
        }
        let i = yield an("openssl version -v");
        if (i) {
          me(`Found openssl binary with version: ${i}`);
          let o = dc(i);
          if (me(`The parsed openssl version is: ${o}`), o)
            return { libssl: o, strategy: "openssl-binary" };
        }
        return me("Couldn't find any version of libssl or OpenSSL in the system"), {};
      });
    }
    function Ps(e) {
      return __async(this, null, function* () {
        for (let t of e) {
          let r = yield gc(t);
          if (r)
            return r;
        }
      });
    }
    function gc(e) {
      return __async(this, null, function* () {
        try {
          return (yield Ri.default.readdir(e)).find((r) => r.startsWith("libssl.so.") && !r.startsWith("libssl.so.0"));
        } catch (t) {
          if (t.code === "ENOENT")
            return;
          throw t;
        }
      });
    }
    function ft() {
      return __async(this, null, function* () {
        let { binaryTarget: e } = yield As();
        return e;
      });
    }
    function yc(e) {
      return e.binaryTarget !== void 0;
    }
    function Mi() {
      return __async(this, null, function* () {
        let _a6 = yield As(), { memoized: e } = _a6, t = __objRest(_a6, ["memoized"]);
        return t;
      });
    }
    var on = {};
    function As() {
      return __async(this, null, function* () {
        if (yc(on))
          return Promise.resolve(__spreadProps(__spreadValues({}, on), { memoized: true }));
        let e = yield _s(), t = hc(e);
        return on = __spreadProps(__spreadValues({}, e), { binaryTarget: t }), __spreadProps(__spreadValues({}, on), { memoized: false });
      });
    }
    function hc(e) {
      let { platform: t, arch: r, archFromUname: n, libssl: i, targetDistro: o, familyDistro: s, originalDistro: a } = e;
      t === "linux" && !["x64", "arm64"].includes(r) && nr(`Prisma only officially supports Linux on amd64 (x86_64) and arm64 (aarch64) system architectures. If you are using your own custom Prisma engines, you can ignore this warning, as long as you've compiled the engines for your system architecture "${n}".`);
      let l = "1.1.x";
      if (t === "linux" && i === void 0) {
        let c = St({ familyDistro: s }).with({ familyDistro: "debian" }, () => "Please manually install OpenSSL via `apt-get update -y && apt-get install -y openssl` and try installing Prisma again. If you're running Prisma on Docker, add this command to your Dockerfile, or switch to an image that already has OpenSSL installed.").otherwise(() => "Please manually install OpenSSL and try installing Prisma again.");
        nr(`Prisma failed to detect the libssl/openssl version to use, and may not work as expected. Defaulting to "openssl-${l}".
${c}`);
      }
      let u = "debian";
      if (t === "linux" && o === void 0 && nr(`Prisma doesn't know which engines to download for the Linux distro "${a}". Falling back to Prisma engines built "${u}".
Please report your experience by creating an issue at ${rr("https://github.com/prisma/prisma/issues")} so we can add your distro to the list of known supported distros.`), t === "darwin" && r === "arm64")
        return "darwin-arm64";
      if (t === "darwin")
        return "darwin";
      if (t === "win32")
        return "windows";
      if (t === "freebsd")
        return o;
      if (t === "openbsd")
        return "openbsd";
      if (t === "netbsd")
        return "netbsd";
      if (t === "linux" && o === "nixos")
        return "linux-nixos";
      if (t === "linux" && r === "arm64")
        return `${o === "musl" ? "linux-musl-arm64" : "linux-arm64"}-openssl-${i || l}`;
      if (t === "linux" && r === "arm")
        return `linux-arm-openssl-${i || l}`;
      if (t === "linux" && o === "musl") {
        let c = "linux-musl";
        return !i || Rs(i) ? c : `${c}-openssl-${i}`;
      }
      return t === "linux" && o && i ? `${o}-openssl-${i}` : (t !== "linux" && nr(`Prisma detected unknown OS "${t}" and may not work as expected. Defaulting to "linux".`), i ? `${u}-openssl-${i}` : o ? `${o}-openssl-${l}` : `${u}-openssl-${l}`);
    }
    function bc(e) {
      return __async(this, null, function* () {
        try {
          return yield e();
        } catch (e2) {
          return;
        }
      });
    }
    function an(e) {
      return bc(() => __async(this, null, function* () {
        let t = yield lc(e);
        return me(`Command "${e}" successfully returned "${t.stdout}"`), t.stdout;
      }));
    }
    function xc() {
      return __async(this, null, function* () {
        var _a6;
        return typeof sn.default.machine == "function" ? sn.default.machine() : (_a6 = yield an("uname -m")) == null ? void 0 : _a6.trim();
      });
    }
    function Rs(e) {
      return e.startsWith("1.");
    }
    var ki = F(Is());
    var cn = F(require("fs"));
    var Ft = F(require("path"));
    function ks(e) {
      let t = e.ignoreProcessEnv ? {} : process.env, r = (n) => {
        var _a6, _b2;
        return (_b2 = (_a6 = n.match(/(.?\${(?:[a-zA-Z0-9_]+)?})/g)) == null ? void 0 : _a6.reduce(function(o, s) {
          let a = /(.?)\${([a-zA-Z0-9_]+)?}/g.exec(s);
          if (!a)
            return o;
          let l = a[1], u, c;
          if (l === "\\")
            c = a[0], u = c.replace("\\$", "$");
          else {
            let p = a[2];
            c = a[0].substring(l.length), u = Object.hasOwnProperty.call(t, p) ? t[p] : e.parsed[p] || "", u = r(u);
          }
          return o.replace(c, u);
        }, n)) != null ? _b2 : n;
      };
      for (let n in e.parsed) {
        let i = Object.hasOwnProperty.call(t, n) ? t[n] : e.parsed[n];
        e.parsed[n] = r(i);
      }
      for (let n in e.parsed)
        t[n] = e.parsed[n];
      return e;
    }
    var Ii = $("prisma:tryLoadEnv");
    function ir({ rootEnvPath: e, schemaEnvPath: t }, r = { conflictCheck: "none" }) {
      var _a6, _b2;
      let n = Fs(e);
      r.conflictCheck !== "none" && Mc(n, t, r.conflictCheck);
      let i = null;
      return Os(n == null ? void 0 : n.path, t) || (i = Fs(t)), !n && !i && Ii("No Environment variables loaded"), (i == null ? void 0 : i.dotenvResult.error) ? console.error(ve(de("Schema Env Error: ")) + i.dotenvResult.error) : { message: [n == null ? void 0 : n.message, i == null ? void 0 : i.message].filter(Boolean).join(`
`), parsed: __spreadValues(__spreadValues({}, (_a6 = n == null ? void 0 : n.dotenvResult) == null ? void 0 : _a6.parsed), (_b2 = i == null ? void 0 : i.dotenvResult) == null ? void 0 : _b2.parsed) };
    }
    function Mc(e, t, r) {
      let n = e == null ? void 0 : e.dotenvResult.parsed, i = !Os(e == null ? void 0 : e.path, t);
      if (n && t && i && cn.default.existsSync(t)) {
        let o = ki.default.parse(cn.default.readFileSync(t)), s = [];
        for (let a in o)
          n[a] === o[a] && s.push(a);
        if (s.length > 0) {
          let a = Ft.default.relative(process.cwd(), e.path), l = Ft.default.relative(process.cwd(), t);
          if (r === "error") {
            let u = `There is a conflict between env var${s.length > 1 ? "s" : ""} in ${ue(a)} and ${ue(l)}
Conflicting env vars:
${s.map((c) => `  ${de(c)}`).join(`
`)}

We suggest to move the contents of ${ue(l)} to ${ue(a)} to consolidate your env vars.
`;
            throw new Error(u);
          } else if (r === "warn") {
            let u = `Conflict for env var${s.length > 1 ? "s" : ""} ${s.map((c) => de(c)).join(", ")} in ${ue(a)} and ${ue(l)}
Env vars from ${ue(l)} overwrite the ones from ${ue(a)}
      `;
            console.warn(`${Re("warn(prisma)")} ${u}`);
          }
        }
      }
    }
    function Fs(e) {
      if (Sc(e)) {
        Ii(`Environment variables loaded from ${e}`);
        let t = ki.default.config({ path: e, debug: process.env.DOTENV_CONFIG_DEBUG ? true : void 0 });
        return { dotenvResult: ks(t), message: He(`Environment variables loaded from ${Ft.default.relative(process.cwd(), e)}`), path: e };
      } else
        Ii(`Environment variables not found at ${e}`);
      return null;
    }
    function Os(e, t) {
      return e && t && Ft.default.resolve(e) === Ft.default.resolve(t);
    }
    function Sc(e) {
      return !!(e && cn.default.existsSync(e));
    }
    var Ds = "library";
    function gt(e) {
      let t = Ic();
      return t || ((e == null ? void 0 : e.config.engineType) === "library" ? "library" : (e == null ? void 0 : e.config.engineType) === "binary" ? "binary" : (e == null ? void 0 : e.config.engineType) === "wasm" ? "wasm" : Ds);
    }
    function Ic() {
      let e = process.env.PRISMA_CLIENT_ENGINE_TYPE;
      return e === "library" ? "library" : e === "binary" ? "binary" : e === "wasm" ? "wasm" : void 0;
    }
    var Oc = F(Fi());
    var B = F(require("path"));
    var Dc = F(Fi());
    var xh = $("prisma:engines");
    function js() {
      return B.default.join(__dirname, "../");
    }
    var wh = "libquery-engine";
    B.default.join(__dirname, "../query-engine-darwin");
    B.default.join(__dirname, "../query-engine-darwin-arm64");
    B.default.join(__dirname, "../query-engine-debian-openssl-1.0.x");
    B.default.join(__dirname, "../query-engine-debian-openssl-1.1.x");
    B.default.join(__dirname, "../query-engine-debian-openssl-3.0.x");
    B.default.join(__dirname, "../query-engine-linux-static-x64");
    B.default.join(__dirname, "../query-engine-linux-static-arm64");
    B.default.join(__dirname, "../query-engine-rhel-openssl-1.0.x");
    B.default.join(__dirname, "../query-engine-rhel-openssl-1.1.x");
    B.default.join(__dirname, "../query-engine-rhel-openssl-3.0.x");
    B.default.join(__dirname, "../libquery_engine-darwin.dylib.node");
    B.default.join(__dirname, "../libquery_engine-darwin-arm64.dylib.node");
    B.default.join(__dirname, "../libquery_engine-debian-openssl-1.0.x.so.node");
    B.default.join(__dirname, "../libquery_engine-debian-openssl-1.1.x.so.node");
    B.default.join(__dirname, "../libquery_engine-debian-openssl-3.0.x.so.node");
    B.default.join(__dirname, "../libquery_engine-linux-arm64-openssl-1.0.x.so.node");
    B.default.join(__dirname, "../libquery_engine-linux-arm64-openssl-1.1.x.so.node");
    B.default.join(__dirname, "../libquery_engine-linux-arm64-openssl-3.0.x.so.node");
    B.default.join(__dirname, "../libquery_engine-linux-musl.so.node");
    B.default.join(__dirname, "../libquery_engine-linux-musl-openssl-3.0.x.so.node");
    B.default.join(__dirname, "../libquery_engine-rhel-openssl-1.0.x.so.node");
    B.default.join(__dirname, "../libquery_engine-rhel-openssl-1.1.x.so.node");
    B.default.join(__dirname, "../libquery_engine-rhel-openssl-3.0.x.so.node");
    B.default.join(__dirname, "../query_engine-windows.dll.node");
    var Oi = F(require("fs"));
    var Vs = $("chmodPlusX");
    function Di(e) {
      if (process.platform === "win32")
        return;
      let t = Oi.default.statSync(e), r = t.mode | 64 | 8 | 1;
      if (t.mode === r) {
        Vs(`Execution permissions of ${e} are fine`);
        return;
      }
      let n = r.toString(8).slice(-3);
      Vs(`Have to call chmodPlusX on ${e}`), Oi.default.chmodSync(e, n);
    }
    function Ni(e) {
      let t = e.e, r = (a) => `Prisma cannot find the required \`${a}\` system library in your system`, n = t.message.includes("cannot open shared object file"), i = `Please refer to the documentation about Prisma's system requirements: ${rr("https://pris.ly/d/system-requirements")}`, o = `Unable to require(\`${He(e.id)}\`).`, s = St({ message: t.message, code: t.code }).with({ code: "ENOENT" }, () => "File does not exist.").when(({ message: a }) => n && a.includes("libz"), () => `${r("libz")}. Please install it and try again.`).when(({ message: a }) => n && a.includes("libgcc_s"), () => `${r("libgcc_s")}. Please install it and try again.`).when(({ message: a }) => n && a.includes("libssl"), () => {
        let a = e.platformInfo.libssl ? `openssl-${e.platformInfo.libssl}` : "openssl";
        return `${r("libssl")}. Please install ${a} and try again.`;
      }).when(({ message: a }) => a.includes("GLIBC"), () => `Prisma has detected an incompatible version of the \`glibc\` C standard library installed in your system. This probably means your system may be too old to run Prisma. ${i}`).when(({ message: a }) => e.platformInfo.platform === "linux" && a.includes("symbol not found"), () => `The Prisma engines are not compatible with your system ${e.platformInfo.originalDistro} on (${e.platformInfo.archFromUname}) which uses the \`${e.platformInfo.binaryTarget}\` binaryTarget by default. ${i}`).otherwise(() => `The Prisma engines do not seem to be compatible with your system. ${i}`);
      return `${o}
${s}

Details: ${t.message}`;
    }
    var or = F(require("path"));
    function Li(e) {
      return or.default.sep === or.default.posix.sep ? e : e.split(or.default.sep).join(or.default.posix.sep);
    }
    var Ks = F($i());
    function Bi(e) {
      return String(new qi(e));
    }
    var qi = class {
      constructor(t) {
        this.config = t;
      }
      toString() {
        let { config: t } = this, r = t.provider.fromEnvVar ? `env("${t.provider.fromEnvVar}")` : t.provider.value, n = JSON.parse(JSON.stringify({ provider: r, binaryTargets: Nc(t.binaryTargets) }));
        return `generator ${t.name} {
${(0, Ks.default)(Lc(n), 2)}
}`;
      }
    };
    function Nc(e) {
      let t;
      if (e.length > 0) {
        let r = e.find((n) => n.fromEnvVar !== null);
        r ? t = `env("${r.fromEnvVar}")` : t = e.map((n) => n.native ? "native" : n.value);
      } else
        t = void 0;
      return t;
    }
    function Lc(e) {
      let t = Object.keys(e).reduce((r, n) => Math.max(r, n.length), 0);
      return Object.entries(e).map(([r, n]) => `${r.padEnd(t)} = ${$c(n)}`).join(`
`);
    }
    function $c(e) {
      return JSON.parse(JSON.stringify(e, (t, r) => Array.isArray(r) ? `[${r.map((n) => JSON.stringify(n)).join(", ")}]` : JSON.stringify(r)));
    }
    var ar = {};
    _t(ar, { error: () => jc, info: () => Bc, log: () => qc, query: () => Vc, should: () => Qs, tags: () => sr, warn: () => ji });
    var sr = { error: ve("prisma:error"), warn: Re("prisma:warn"), info: We("prisma:info"), query: Mt("prisma:query") };
    var Qs = { warn: () => !process.env.PRISMA_DISABLE_WARNINGS };
    function qc(...e) {
      console.log(...e);
    }
    function ji(e, ...t) {
      Qs.warn() && console.warn(`${sr.warn} ${e}`, ...t);
    }
    function Bc(e, ...t) {
      console.info(`${sr.info} ${e}`, ...t);
    }
    function jc(e, ...t) {
      console.error(`${sr.error} ${e}`, ...t);
    }
    function Vc(e, ...t) {
      console.log(`${sr.query} ${e}`, ...t);
    }
    function dn(e, t) {
      if (!e)
        throw new Error(`${t}. This should never happen. If you see this error, please, open an issue at https://pris.ly/prisma-prisma-bug-report`);
    }
    function yt(e, t) {
      throw new Error(t);
    }
    function Ui(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }
    var Ki = (e, t) => e.reduce((r, n) => (r[t(n)] = n, r), {});
    function Ot(e, t) {
      let r = {};
      for (let n of Object.keys(e))
        r[n] = t(e[n], n);
      return r;
    }
    function Qi(e, t) {
      if (e.length === 0)
        return;
      let r = e[0];
      for (let n = 1; n < e.length; n++)
        t(r, e[n]) < 0 && (r = e[n]);
      return r;
    }
    function v(e, t) {
      Object.defineProperty(e, "name", { value: t, configurable: true });
    }
    var zs = /* @__PURE__ */ new Set();
    var lr = (e, t, ...r) => {
      zs.has(e) || (zs.add(e), ji(t, ...r));
    };
    var H = class extends Error {
      constructor(t, { code: r, clientVersion: n, meta: i, batchRequestIdx: o }) {
        super(t), this.name = "PrismaClientKnownRequestError", this.code = r, this.clientVersion = n, this.meta = i, Object.defineProperty(this, "batchRequestIdx", { value: o, enumerable: false, writable: true });
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientKnownRequestError";
      }
    };
    v(H, "PrismaClientKnownRequestError");
    var Ve = class extends H {
      constructor(t, r) {
        super(t, { code: "P2025", clientVersion: r }), this.name = "NotFoundError";
      }
    };
    v(Ve, "NotFoundError");
    var k = class e extends Error {
      constructor(t, r, n) {
        super(t), this.name = "PrismaClientInitializationError", this.clientVersion = r, this.errorCode = n, Error.captureStackTrace(e);
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientInitializationError";
      }
    };
    v(k, "PrismaClientInitializationError");
    var be = class extends Error {
      constructor(t, r) {
        super(t), this.name = "PrismaClientRustPanicError", this.clientVersion = r;
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientRustPanicError";
      }
    };
    v(be, "PrismaClientRustPanicError");
    var W = class extends Error {
      constructor(t, { clientVersion: r, batchRequestIdx: n }) {
        super(t), this.name = "PrismaClientUnknownRequestError", this.clientVersion = r, Object.defineProperty(this, "batchRequestIdx", { value: n, writable: true, enumerable: false });
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientUnknownRequestError";
      }
    };
    v(W, "PrismaClientUnknownRequestError");
    var se = class extends Error {
      constructor(r, { clientVersion: n }) {
        super(r);
        this.name = "PrismaClientValidationError";
        this.clientVersion = n;
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientValidationError";
      }
    };
    v(se, "PrismaClientValidationError");
    var Dt = class {
      constructor(t) {
        this._engine = t;
      }
      prometheus(t) {
        return this._engine.metrics(__spreadValues({ format: "prometheus" }, t));
      }
      json(t) {
        return this._engine.metrics(__spreadValues({ format: "json" }, t));
      }
    };
    function cr(e) {
      let t;
      return { get() {
        return t || (t = { value: e() }), t.value;
      } };
    }
    function Ys(e, t) {
      let r = cr(() => Kc(t));
      Object.defineProperty(e, "dmmf", { get: () => r.get() });
    }
    function Kc(e) {
      return { datamodel: { models: Ji(e.models), enums: Ji(e.enums), types: Ji(e.types) } };
    }
    function Ji(e) {
      return Object.entries(e).map(([t, r]) => __spreadValues({ name: t }, r));
    }
    var Qc = ["$connect", "$disconnect", "$on", "$transaction", "$use", "$extends"];
    var Gi = Qc;
    var Jc = ["JsonNullValueInput", "NullableJsonNullValueInput", "JsonNullValueFilter"];
    var fn = Symbol();
    var Hi = /* @__PURE__ */ new WeakMap();
    var ke = class {
      constructor(t) {
        t === fn ? Hi.set(this, `Prisma.${this._getName()}`) : Hi.set(this, `new Prisma.${this._getNamespace()}.${this._getName()}()`);
      }
      _getName() {
        return this.constructor.name;
      }
      toString() {
        return Hi.get(this);
      }
    };
    var pr = class extends ke {
      _getNamespace() {
        return "NullTypes";
      }
    };
    var dr = class extends pr {
    };
    Wi(dr, "DbNull");
    var mr = class extends pr {
    };
    Wi(mr, "JsonNull");
    var fr = class extends pr {
    };
    Wi(fr, "AnyNull");
    var gn = { classes: { DbNull: dr, JsonNull: mr, AnyNull: fr }, instances: { DbNull: new dr(fn), JsonNull: new mr(fn), AnyNull: new fr(fn) } };
    function Wi(e, t) {
      Object.defineProperty(e, "name", { value: t, configurable: true });
    }
    function gr(e) {
      return { ok: false, error: e, map() {
        return gr(e);
      }, flatMap() {
        return gr(e);
      } };
    }
    var zi = class {
      constructor() {
        this.registeredErrors = [];
      }
      consumeError(t) {
        return this.registeredErrors[t];
      }
      registerNewError(t) {
        let r = 0;
        for (; this.registeredErrors[r] !== void 0; )
          r++;
        return this.registeredErrors[r] = { error: t }, r;
      }
    };
    var Yi = (e) => {
      let t = new zi(), r = ht(t, e.startTransaction.bind(e)), n = { errorRegistry: t, queryRaw: ht(t, e.queryRaw.bind(e)), executeRaw: ht(t, e.executeRaw.bind(e)), provider: e.provider, startTransaction: (...i) => __async(exports, null, function* () {
        return (yield r(...i)).map((s) => Gc(t, s));
      }) };
      return e.getConnectionInfo && (n.getConnectionInfo = Hc(t, e.getConnectionInfo.bind(e))), n;
    };
    var Gc = (e, t) => ({ provider: t.provider, options: t.options, queryRaw: ht(e, t.queryRaw.bind(t)), executeRaw: ht(e, t.executeRaw.bind(t)), commit: ht(e, t.commit.bind(t)), rollback: ht(e, t.rollback.bind(t)) });
    function ht(e, t) {
      return (...r) => __async(this, null, function* () {
        try {
          return yield t(...r);
        } catch (n) {
          let i = e.registerNewError(n);
          return gr({ kind: "GenericJs", id: i });
        }
      });
    }
    function Hc(e, t) {
      return (...r) => {
        try {
          return t(...r);
        } catch (n) {
          let i = e.registerNewError(n);
          return gr({ kind: "GenericJs", id: i });
        }
      };
    }
    var bu = require("async_hooks");
    var xu = require("events");
    var wu = F(require("fs"));
    var Ur = F(require("path"));
    var fe = class e {
      constructor(t, r) {
        if (t.length - 1 !== r.length)
          throw t.length === 0 ? new TypeError("Expected at least 1 string") : new TypeError(`Expected ${t.length} strings to have ${t.length - 1} values`);
        let n = r.reduce((s, a) => s + (a instanceof e ? a.values.length : 1), 0);
        this.values = new Array(n), this.strings = new Array(n + 1), this.strings[0] = t[0];
        let i = 0, o = 0;
        for (; i < r.length; ) {
          let s = r[i++], a = t[i];
          if (s instanceof e) {
            this.strings[o] += s.strings[0];
            let l = 0;
            for (; l < s.values.length; )
              this.values[o++] = s.values[l++], this.strings[o] = s.strings[l];
            this.strings[o] += a;
          } else
            this.values[o++] = s, this.strings[o] = a;
        }
      }
      get text() {
        let t = this.strings.length, r = 1, n = this.strings[0];
        for (; r < t; )
          n += `$${r}${this.strings[r++]}`;
        return n;
      }
      get sql() {
        let t = this.strings.length, r = 1, n = this.strings[0];
        for (; r < t; )
          n += `?${this.strings[r++]}`;
        return n;
      }
      get statement() {
        let t = this.strings.length, r = 1, n = this.strings[0];
        for (; r < t; )
          n += `:${r}${this.strings[r++]}`;
        return n;
      }
      inspect() {
        return { text: this.text, sql: this.sql, values: this.values };
      }
    };
    function Zs(e, t = ",", r = "", n = "") {
      if (e.length === 0)
        throw new TypeError("Expected `join([])` to be called with an array of multiple elements, but got an empty array");
      return new fe([r, ...Array(e.length - 1).fill(t), n], e);
    }
    function Zi(e) {
      return new fe([e], []);
    }
    var Xs = Zi("");
    function Xi(e, ...t) {
      return new fe(e, t);
    }
    function yr(e) {
      return { getKeys() {
        return Object.keys(e);
      }, getPropertyValue(t) {
        return e[t];
      } };
    }
    function ce(e, t) {
      return { getKeys() {
        return [e];
      }, getPropertyValue() {
        return t();
      } };
    }
    var Fe = class {
      constructor() {
        this._map = /* @__PURE__ */ new Map();
      }
      get(t) {
        var _a6;
        return (_a6 = this._map.get(t)) == null ? void 0 : _a6.value;
      }
      set(t, r) {
        this._map.set(t, { value: r });
      }
      getOrCreate(t, r) {
        let n = this._map.get(t);
        if (n)
          return n.value;
        let i = r();
        return this.set(t, i), i;
      }
    };
    function bt(e) {
      let t = new Fe();
      return { getKeys() {
        return e.getKeys();
      }, getPropertyValue(r) {
        return t.getOrCreate(r, () => e.getPropertyValue(r));
      }, getPropertyDescriptor(r) {
        var _a6;
        return (_a6 = e.getPropertyDescriptor) == null ? void 0 : _a6.call(e, r);
      } };
    }
    var ra = require("util");
    var yn = { enumerable: true, configurable: true, writable: true };
    function hn(e) {
      let t = new Set(e);
      return { getOwnPropertyDescriptor: () => yn, has: (r, n) => t.has(n), set: (r, n, i) => t.add(n) && Reflect.set(r, n, i), ownKeys: () => [...t] };
    }
    var ea = Symbol.for("nodejs.util.inspect.custom");
    function Oe(e, t) {
      let r = Wc(t), n = /* @__PURE__ */ new Set(), i = new Proxy(e, { get(o, s) {
        if (n.has(s))
          return o[s];
        let a = r.get(s);
        return a ? a.getPropertyValue(s) : o[s];
      }, has(o, s) {
        var _a6, _b2;
        if (n.has(s))
          return true;
        let a = r.get(s);
        return a ? (_b2 = (_a6 = a.has) == null ? void 0 : _a6.call(a, s)) != null ? _b2 : true : Reflect.has(o, s);
      }, ownKeys(o) {
        let s = ta(Reflect.ownKeys(o), r), a = ta(Array.from(r.keys()), r);
        return [.../* @__PURE__ */ new Set([...s, ...a, ...n])];
      }, set(o, s, a) {
        var _a6, _b2, _c;
        return ((_c = (_b2 = (_a6 = r.get(s)) == null ? void 0 : _a6.getPropertyDescriptor) == null ? void 0 : _b2.call(_a6, s)) == null ? void 0 : _c.writable) === false ? false : (n.add(s), Reflect.set(o, s, a));
      }, getOwnPropertyDescriptor(o, s) {
        let a = Reflect.getOwnPropertyDescriptor(o, s);
        if (a && !a.configurable)
          return a;
        let l = r.get(s);
        return l ? l.getPropertyDescriptor ? __spreadValues(__spreadValues({}, yn), l == null ? void 0 : l.getPropertyDescriptor(s)) : yn : a;
      }, defineProperty(o, s, a) {
        return n.add(s), Reflect.defineProperty(o, s, a);
      } });
      return i[ea] = function(o, s, a = ra.inspect) {
        let l = __spreadValues({}, this);
        return delete l[ea], a(l, s);
      }, i;
    }
    function Wc(e) {
      let t = /* @__PURE__ */ new Map();
      for (let r of e) {
        let n = r.getKeys();
        for (let i of n)
          t.set(i, r);
      }
      return t;
    }
    function ta(e, t) {
      return e.filter((r) => {
        var _a6, _b2, _c;
        return (_c = (_b2 = (_a6 = t.get(r)) == null ? void 0 : _a6.has) == null ? void 0 : _b2.call(_a6, r)) != null ? _c : true;
      });
    }
    function hr(e) {
      return { getKeys() {
        return e;
      }, has() {
        return false;
      }, getPropertyValue() {
      } };
    }
    var Nt = class {
      constructor(t = 0, r) {
        this.context = r;
        this.lines = [];
        this.currentLine = "";
        this.currentIndent = 0;
        this.currentIndent = t;
      }
      write(t) {
        return typeof t == "string" ? this.currentLine += t : t.write(this), this;
      }
      writeJoined(t, r) {
        let n = r.length - 1;
        for (let i = 0; i < r.length; i++)
          this.write(r[i]), i !== n && this.write(t);
        return this;
      }
      writeLine(t) {
        return this.write(t).newLine();
      }
      newLine() {
        this.lines.push(this.indentedCurrentLine()), this.currentLine = "", this.marginSymbol = void 0;
        let t = this.afterNextNewLineCallback;
        return this.afterNextNewLineCallback = void 0, t == null ? void 0 : t(), this;
      }
      withIndent(t) {
        return this.indent(), t(this), this.unindent(), this;
      }
      afterNextNewline(t) {
        return this.afterNextNewLineCallback = t, this;
      }
      indent() {
        return this.currentIndent++, this;
      }
      unindent() {
        return this.currentIndent > 0 && this.currentIndent--, this;
      }
      addMarginSymbol(t) {
        return this.marginSymbol = t, this;
      }
      toString() {
        return this.lines.concat(this.indentedCurrentLine()).join(`
`);
      }
      getCurrentLineLength() {
        return this.currentLine.length;
      }
      indentedCurrentLine() {
        let t = this.currentLine.padStart(this.currentLine.length + 2 * this.currentIndent);
        return this.marginSymbol ? this.marginSymbol + t.slice(1) : t;
      }
    };
    function Lt(e) {
      return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
    }
    function bn(e) {
      return e.toString() !== "Invalid Date";
    }
    var $t = 9e15;
    var rt = 1e9;
    var eo = "0123456789abcdef";
    var wn = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058";
    var En = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789";
    var to = { precision: 20, rounding: 4, modulo: 1, toExpNeg: -7, toExpPos: 21, minE: -$t, maxE: $t, crypto: false };
    var sa;
    var Ue;
    var T = true;
    var vn = "[DecimalError] ";
    var tt = vn + "Invalid argument: ";
    var aa = vn + "Precision limit exceeded";
    var la = vn + "crypto unavailable";
    var ua = "[object Decimal]";
    var ae = Math.floor;
    var J = Math.pow;
    var zc = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i;
    var Yc = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i;
    var Zc = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i;
    var ca = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
    var Ce = 1e7;
    var P = 7;
    var Xc = 9007199254740991;
    var ep = wn.length - 1;
    var ro = En.length - 1;
    var m = { toStringTag: ua };
    m.absoluteValue = m.abs = function() {
      var e = new this.constructor(this);
      return e.s < 0 && (e.s = 1), x(e);
    };
    m.ceil = function() {
      return x(new this.constructor(this), this.e + 1, 2);
    };
    m.clampedTo = m.clamp = function(e, t) {
      var r, n = this, i = n.constructor;
      if (e = new i(e), t = new i(t), !e.s || !t.s)
        return new i(NaN);
      if (e.gt(t))
        throw Error(tt + t);
      return r = n.cmp(e), r < 0 ? e : n.cmp(t) > 0 ? t : new i(n);
    };
    m.comparedTo = m.cmp = function(e) {
      var t, r, n, i, o = this, s = o.d, a = (e = new o.constructor(e)).d, l = o.s, u = e.s;
      if (!s || !a)
        return !l || !u ? NaN : l !== u ? l : s === a ? 0 : !s ^ l < 0 ? 1 : -1;
      if (!s[0] || !a[0])
        return s[0] ? l : a[0] ? -u : 0;
      if (l !== u)
        return l;
      if (o.e !== e.e)
        return o.e > e.e ^ l < 0 ? 1 : -1;
      for (n = s.length, i = a.length, t = 0, r = n < i ? n : i; t < r; ++t)
        if (s[t] !== a[t])
          return s[t] > a[t] ^ l < 0 ? 1 : -1;
      return n === i ? 0 : n > i ^ l < 0 ? 1 : -1;
    };
    m.cosine = m.cos = function() {
      var e, t, r = this, n = r.constructor;
      return r.d ? r.d[0] ? (e = n.precision, t = n.rounding, n.precision = e + Math.max(r.e, r.sd()) + P, n.rounding = 1, r = tp(n, ga(n, r)), n.precision = e, n.rounding = t, x(Ue == 2 || Ue == 3 ? r.neg() : r, e, t, true)) : new n(1) : new n(NaN);
    };
    m.cubeRoot = m.cbrt = function() {
      var e, t, r, n, i, o, s, a, l, u, c = this, p = c.constructor;
      if (!c.isFinite() || c.isZero())
        return new p(c);
      for (T = false, o = c.s * J(c.s * c, 1 / 3), !o || Math.abs(o) == 1 / 0 ? (r = te(c.d), e = c.e, (o = (e - r.length + 1) % 3) && (r += o == 1 || o == -2 ? "0" : "00"), o = J(r, 1 / 3), e = ae((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), o == 1 / 0 ? r = "5e" + e : (r = o.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + e), n = new p(r), n.s = c.s) : n = new p(o.toString()), s = (e = p.precision) + 3; ; )
        if (a = n, l = a.times(a).times(a), u = l.plus(c), n = L(u.plus(c).times(a), u.plus(l), s + 2, 1), te(a.d).slice(0, s) === (r = te(n.d)).slice(0, s))
          if (r = r.slice(s - 3, s + 1), r == "9999" || !i && r == "4999") {
            if (!i && (x(a, e + 1, 0), a.times(a).times(a).eq(c))) {
              n = a;
              break;
            }
            s += 4, i = 1;
          } else {
            (!+r || !+r.slice(1) && r.charAt(0) == "5") && (x(n, e + 1, 1), t = !n.times(n).times(n).eq(c));
            break;
          }
      return T = true, x(n, e, p.rounding, t);
    };
    m.decimalPlaces = m.dp = function() {
      var e, t = this.d, r = NaN;
      if (t) {
        if (e = t.length - 1, r = (e - ae(this.e / P)) * P, e = t[e], e)
          for (; e % 10 == 0; e /= 10)
            r--;
        r < 0 && (r = 0);
      }
      return r;
    };
    m.dividedBy = m.div = function(e) {
      return L(this, new this.constructor(e));
    };
    m.dividedToIntegerBy = m.divToInt = function(e) {
      var t = this, r = t.constructor;
      return x(L(t, new r(e), 0, 1, 1), r.precision, r.rounding);
    };
    m.equals = m.eq = function(e) {
      return this.cmp(e) === 0;
    };
    m.floor = function() {
      return x(new this.constructor(this), this.e + 1, 3);
    };
    m.greaterThan = m.gt = function(e) {
      return this.cmp(e) > 0;
    };
    m.greaterThanOrEqualTo = m.gte = function(e) {
      var t = this.cmp(e);
      return t == 1 || t === 0;
    };
    m.hyperbolicCosine = m.cosh = function() {
      var e, t, r, n, i, o = this, s = o.constructor, a = new s(1);
      if (!o.isFinite())
        return new s(o.s ? 1 / 0 : NaN);
      if (o.isZero())
        return a;
      r = s.precision, n = s.rounding, s.precision = r + Math.max(o.e, o.sd()) + 4, s.rounding = 1, i = o.d.length, i < 32 ? (e = Math.ceil(i / 3), t = (1 / _n(4, e)).toString()) : (e = 16, t = "2.3283064365386962890625e-10"), o = qt(s, 1, o.times(t), new s(1), true);
      for (var l, u = e, c = new s(8); u--; )
        l = o.times(o), o = a.minus(l.times(c.minus(l.times(c))));
      return x(o, s.precision = r, s.rounding = n, true);
    };
    m.hyperbolicSine = m.sinh = function() {
      var e, t, r, n, i = this, o = i.constructor;
      if (!i.isFinite() || i.isZero())
        return new o(i);
      if (t = o.precision, r = o.rounding, o.precision = t + Math.max(i.e, i.sd()) + 4, o.rounding = 1, n = i.d.length, n < 3)
        i = qt(o, 2, i, i, true);
      else {
        e = 1.4 * Math.sqrt(n), e = e > 16 ? 16 : e | 0, i = i.times(1 / _n(5, e)), i = qt(o, 2, i, i, true);
        for (var s, a = new o(5), l = new o(16), u = new o(20); e--; )
          s = i.times(i), i = i.times(a.plus(s.times(l.times(s).plus(u))));
      }
      return o.precision = t, o.rounding = r, x(i, t, r, true);
    };
    m.hyperbolicTangent = m.tanh = function() {
      var e, t, r = this, n = r.constructor;
      return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 7, n.rounding = 1, L(r.sinh(), r.cosh(), n.precision = e, n.rounding = t)) : new n(r.s);
    };
    m.inverseCosine = m.acos = function() {
      var e, t = this, r = t.constructor, n = t.abs().cmp(1), i = r.precision, o = r.rounding;
      return n !== -1 ? n === 0 ? t.isNeg() ? _e(r, i, o) : new r(0) : new r(NaN) : t.isZero() ? _e(r, i + 4, o).times(0.5) : (r.precision = i + 6, r.rounding = 1, t = t.asin(), e = _e(r, i + 4, o).times(0.5), r.precision = i, r.rounding = o, e.minus(t));
    };
    m.inverseHyperbolicCosine = m.acosh = function() {
      var e, t, r = this, n = r.constructor;
      return r.lte(1) ? new n(r.eq(1) ? 0 : NaN) : r.isFinite() ? (e = n.precision, t = n.rounding, n.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4, n.rounding = 1, T = false, r = r.times(r).minus(1).sqrt().plus(r), T = true, n.precision = e, n.rounding = t, r.ln()) : new n(r);
    };
    m.inverseHyperbolicSine = m.asinh = function() {
      var e, t, r = this, n = r.constructor;
      return !r.isFinite() || r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6, n.rounding = 1, T = false, r = r.times(r).plus(1).sqrt().plus(r), T = true, n.precision = e, n.rounding = t, r.ln());
    };
    m.inverseHyperbolicTangent = m.atanh = function() {
      var e, t, r, n, i = this, o = i.constructor;
      return i.isFinite() ? i.e >= 0 ? new o(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN) : (e = o.precision, t = o.rounding, n = i.sd(), Math.max(n, e) < 2 * -i.e - 1 ? x(new o(i), e, t, true) : (o.precision = r = n - i.e, i = L(i.plus(1), new o(1).minus(i), r + e, 1), o.precision = e + 4, o.rounding = 1, i = i.ln(), o.precision = e, o.rounding = t, i.times(0.5))) : new o(NaN);
    };
    m.inverseSine = m.asin = function() {
      var e, t, r, n, i = this, o = i.constructor;
      return i.isZero() ? new o(i) : (t = i.abs().cmp(1), r = o.precision, n = o.rounding, t !== -1 ? t === 0 ? (e = _e(o, r + 4, n).times(0.5), e.s = i.s, e) : new o(NaN) : (o.precision = r + 6, o.rounding = 1, i = i.div(new o(1).minus(i.times(i)).sqrt().plus(1)).atan(), o.precision = r, o.rounding = n, i.times(2)));
    };
    m.inverseTangent = m.atan = function() {
      var e, t, r, n, i, o, s, a, l, u = this, c = u.constructor, p = c.precision, d = c.rounding;
      if (u.isFinite()) {
        if (u.isZero())
          return new c(u);
        if (u.abs().eq(1) && p + 4 <= ro)
          return s = _e(c, p + 4, d).times(0.25), s.s = u.s, s;
      } else {
        if (!u.s)
          return new c(NaN);
        if (p + 4 <= ro)
          return s = _e(c, p + 4, d).times(0.5), s.s = u.s, s;
      }
      for (c.precision = a = p + 10, c.rounding = 1, r = Math.min(28, a / P + 2 | 0), e = r; e; --e)
        u = u.div(u.times(u).plus(1).sqrt().plus(1));
      for (T = false, t = Math.ceil(a / P), n = 1, l = u.times(u), s = new c(u), i = u; e !== -1; )
        if (i = i.times(l), o = s.minus(i.div(n += 2)), i = i.times(l), s = o.plus(i.div(n += 2)), s.d[t] !== void 0)
          for (e = t; s.d[e] === o.d[e] && e--; )
            ;
      return r && (s = s.times(2 << r - 1)), T = true, x(s, c.precision = p, c.rounding = d, true);
    };
    m.isFinite = function() {
      return !!this.d;
    };
    m.isInteger = m.isInt = function() {
      return !!this.d && ae(this.e / P) > this.d.length - 2;
    };
    m.isNaN = function() {
      return !this.s;
    };
    m.isNegative = m.isNeg = function() {
      return this.s < 0;
    };
    m.isPositive = m.isPos = function() {
      return this.s > 0;
    };
    m.isZero = function() {
      return !!this.d && this.d[0] === 0;
    };
    m.lessThan = m.lt = function(e) {
      return this.cmp(e) < 0;
    };
    m.lessThanOrEqualTo = m.lte = function(e) {
      return this.cmp(e) < 1;
    };
    m.logarithm = m.log = function(e) {
      var t, r, n, i, o, s, a, l, u = this, c = u.constructor, p = c.precision, d = c.rounding, f = 5;
      if (e == null)
        e = new c(10), t = true;
      else {
        if (e = new c(e), r = e.d, e.s < 0 || !r || !r[0] || e.eq(1))
          return new c(NaN);
        t = e.eq(10);
      }
      if (r = u.d, u.s < 0 || !r || !r[0] || u.eq(1))
        return new c(r && !r[0] ? -1 / 0 : u.s != 1 ? NaN : r ? 0 : 1 / 0);
      if (t)
        if (r.length > 1)
          o = true;
        else {
          for (i = r[0]; i % 10 === 0; )
            i /= 10;
          o = i !== 1;
        }
      if (T = false, a = p + f, s = et(u, a), n = t ? Pn(c, a + 10) : et(e, a), l = L(s, n, a, 1), br(l.d, i = p, d))
        do
          if (a += 10, s = et(u, a), n = t ? Pn(c, a + 10) : et(e, a), l = L(s, n, a, 1), !o) {
            +te(l.d).slice(i + 1, i + 15) + 1 == 1e14 && (l = x(l, p + 1, 0));
            break;
          }
        while (br(l.d, i += 10, d));
      return T = true, x(l, p, d);
    };
    m.minus = m.sub = function(e) {
      var t, r, n, i, o, s, a, l, u, c, p, d, f = this, y = f.constructor;
      if (e = new y(e), !f.d || !e.d)
        return !f.s || !e.s ? e = new y(NaN) : f.d ? e.s = -e.s : e = new y(e.d || f.s !== e.s ? f : NaN), e;
      if (f.s != e.s)
        return e.s = -e.s, f.plus(e);
      if (u = f.d, d = e.d, a = y.precision, l = y.rounding, !u[0] || !d[0]) {
        if (d[0])
          e.s = -e.s;
        else if (u[0])
          e = new y(f);
        else
          return new y(l === 3 ? -0 : 0);
        return T ? x(e, a, l) : e;
      }
      if (r = ae(e.e / P), c = ae(f.e / P), u = u.slice(), o = c - r, o) {
        for (p = o < 0, p ? (t = u, o = -o, s = d.length) : (t = d, r = c, s = u.length), n = Math.max(Math.ceil(a / P), s) + 2, o > n && (o = n, t.length = 1), t.reverse(), n = o; n--; )
          t.push(0);
        t.reverse();
      } else {
        for (n = u.length, s = d.length, p = n < s, p && (s = n), n = 0; n < s; n++)
          if (u[n] != d[n]) {
            p = u[n] < d[n];
            break;
          }
        o = 0;
      }
      for (p && (t = u, u = d, d = t, e.s = -e.s), s = u.length, n = d.length - s; n > 0; --n)
        u[s++] = 0;
      for (n = d.length; n > o; ) {
        if (u[--n] < d[n]) {
          for (i = n; i && u[--i] === 0; )
            u[i] = Ce - 1;
          --u[i], u[n] += Ce;
        }
        u[n] -= d[n];
      }
      for (; u[--s] === 0; )
        u.pop();
      for (; u[0] === 0; u.shift())
        --r;
      return u[0] ? (e.d = u, e.e = Tn(u, r), T ? x(e, a, l) : e) : new y(l === 3 ? -0 : 0);
    };
    m.modulo = m.mod = function(e) {
      var t, r = this, n = r.constructor;
      return e = new n(e), !r.d || !e.s || e.d && !e.d[0] ? new n(NaN) : !e.d || r.d && !r.d[0] ? x(new n(r), n.precision, n.rounding) : (T = false, n.modulo == 9 ? (t = L(r, e.abs(), 0, 3, 1), t.s *= e.s) : t = L(r, e, 0, n.modulo, 1), t = t.times(e), T = true, r.minus(t));
    };
    m.naturalExponential = m.exp = function() {
      return no(this);
    };
    m.naturalLogarithm = m.ln = function() {
      return et(this);
    };
    m.negated = m.neg = function() {
      var e = new this.constructor(this);
      return e.s = -e.s, x(e);
    };
    m.plus = m.add = function(e) {
      var t, r, n, i, o, s, a, l, u, c, p = this, d = p.constructor;
      if (e = new d(e), !p.d || !e.d)
        return !p.s || !e.s ? e = new d(NaN) : p.d || (e = new d(e.d || p.s === e.s ? p : NaN)), e;
      if (p.s != e.s)
        return e.s = -e.s, p.minus(e);
      if (u = p.d, c = e.d, a = d.precision, l = d.rounding, !u[0] || !c[0])
        return c[0] || (e = new d(p)), T ? x(e, a, l) : e;
      if (o = ae(p.e / P), n = ae(e.e / P), u = u.slice(), i = o - n, i) {
        for (i < 0 ? (r = u, i = -i, s = c.length) : (r = c, n = o, s = u.length), o = Math.ceil(a / P), s = o > s ? o + 1 : s + 1, i > s && (i = s, r.length = 1), r.reverse(); i--; )
          r.push(0);
        r.reverse();
      }
      for (s = u.length, i = c.length, s - i < 0 && (i = s, r = c, c = u, u = r), t = 0; i; )
        t = (u[--i] = u[i] + c[i] + t) / Ce | 0, u[i] %= Ce;
      for (t && (u.unshift(t), ++n), s = u.length; u[--s] == 0; )
        u.pop();
      return e.d = u, e.e = Tn(u, n), T ? x(e, a, l) : e;
    };
    m.precision = m.sd = function(e) {
      var t, r = this;
      if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
        throw Error(tt + e);
      return r.d ? (t = pa(r.d), e && r.e + 1 > t && (t = r.e + 1)) : t = NaN, t;
    };
    m.round = function() {
      var e = this, t = e.constructor;
      return x(new t(e), e.e + 1, t.rounding);
    };
    m.sine = m.sin = function() {
      var e, t, r = this, n = r.constructor;
      return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + Math.max(r.e, r.sd()) + P, n.rounding = 1, r = np(n, ga(n, r)), n.precision = e, n.rounding = t, x(Ue > 2 ? r.neg() : r, e, t, true)) : new n(NaN);
    };
    m.squareRoot = m.sqrt = function() {
      var e, t, r, n, i, o, s = this, a = s.d, l = s.e, u = s.s, c = s.constructor;
      if (u !== 1 || !a || !a[0])
        return new c(!u || u < 0 && (!a || a[0]) ? NaN : a ? s : 1 / 0);
      for (T = false, u = Math.sqrt(+s), u == 0 || u == 1 / 0 ? (t = te(a), (t.length + l) % 2 == 0 && (t += "0"), u = Math.sqrt(t), l = ae((l + 1) / 2) - (l < 0 || l % 2), u == 1 / 0 ? t = "5e" + l : (t = u.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + l), n = new c(t)) : n = new c(u.toString()), r = (l = c.precision) + 3; ; )
        if (o = n, n = o.plus(L(s, o, r + 2, 1)).times(0.5), te(o.d).slice(0, r) === (t = te(n.d)).slice(0, r))
          if (t = t.slice(r - 3, r + 1), t == "9999" || !i && t == "4999") {
            if (!i && (x(o, l + 1, 0), o.times(o).eq(s))) {
              n = o;
              break;
            }
            r += 4, i = 1;
          } else {
            (!+t || !+t.slice(1) && t.charAt(0) == "5") && (x(n, l + 1, 1), e = !n.times(n).eq(s));
            break;
          }
      return T = true, x(n, l, c.rounding, e);
    };
    m.tangent = m.tan = function() {
      var e, t, r = this, n = r.constructor;
      return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 10, n.rounding = 1, r = r.sin(), r.s = 1, r = L(r, new n(1).minus(r.times(r)).sqrt(), e + 10, 0), n.precision = e, n.rounding = t, x(Ue == 2 || Ue == 4 ? r.neg() : r, e, t, true)) : new n(NaN);
    };
    m.times = m.mul = function(e) {
      var t, r, n, i, o, s, a, l, u, c = this, p = c.constructor, d = c.d, f = (e = new p(e)).d;
      if (e.s *= c.s, !d || !d[0] || !f || !f[0])
        return new p(!e.s || d && !d[0] && !f || f && !f[0] && !d ? NaN : !d || !f ? e.s / 0 : e.s * 0);
      for (r = ae(c.e / P) + ae(e.e / P), l = d.length, u = f.length, l < u && (o = d, d = f, f = o, s = l, l = u, u = s), o = [], s = l + u, n = s; n--; )
        o.push(0);
      for (n = u; --n >= 0; ) {
        for (t = 0, i = l + n; i > n; )
          a = o[i] + f[n] * d[i - n - 1] + t, o[i--] = a % Ce | 0, t = a / Ce | 0;
        o[i] = (o[i] + t) % Ce | 0;
      }
      for (; !o[--s]; )
        o.pop();
      return t ? ++r : o.shift(), e.d = o, e.e = Tn(o, r), T ? x(e, p.precision, p.rounding) : e;
    };
    m.toBinary = function(e, t) {
      return oo(this, 2, e, t);
    };
    m.toDecimalPlaces = m.toDP = function(e, t) {
      var r = this, n = r.constructor;
      return r = new n(r), e === void 0 ? r : (ge(e, 0, rt), t === void 0 ? t = n.rounding : ge(t, 0, 8), x(r, e + r.e + 1, t));
    };
    m.toExponential = function(e, t) {
      var r, n = this, i = n.constructor;
      return e === void 0 ? r = De(n, true) : (ge(e, 0, rt), t === void 0 ? t = i.rounding : ge(t, 0, 8), n = x(new i(n), e + 1, t), r = De(n, true, e + 1)), n.isNeg() && !n.isZero() ? "-" + r : r;
    };
    m.toFixed = function(e, t) {
      var r, n, i = this, o = i.constructor;
      return e === void 0 ? r = De(i) : (ge(e, 0, rt), t === void 0 ? t = o.rounding : ge(t, 0, 8), n = x(new o(i), e + i.e + 1, t), r = De(n, false, e + n.e + 1)), i.isNeg() && !i.isZero() ? "-" + r : r;
    };
    m.toFraction = function(e) {
      var t, r, n, i, o, s, a, l, u, c, p, d, f = this, y = f.d, g = f.constructor;
      if (!y)
        return new g(f);
      if (u = r = new g(1), n = l = new g(0), t = new g(n), o = t.e = pa(y) - f.e - 1, s = o % P, t.d[0] = J(10, s < 0 ? P + s : s), e == null)
        e = o > 0 ? t : u;
      else {
        if (a = new g(e), !a.isInt() || a.lt(u))
          throw Error(tt + a);
        e = a.gt(t) ? o > 0 ? t : u : a;
      }
      for (T = false, a = new g(te(y)), c = g.precision, g.precision = o = y.length * P * 2; p = L(a, t, 0, 1, 1), i = r.plus(p.times(n)), i.cmp(e) != 1; )
        r = n, n = i, i = u, u = l.plus(p.times(i)), l = i, i = t, t = a.minus(p.times(i)), a = i;
      return i = L(e.minus(r), n, 0, 1, 1), l = l.plus(i.times(u)), r = r.plus(i.times(n)), l.s = u.s = f.s, d = L(u, n, o, 1).minus(f).abs().cmp(L(l, r, o, 1).minus(f).abs()) < 1 ? [u, n] : [l, r], g.precision = c, T = true, d;
    };
    m.toHexadecimal = m.toHex = function(e, t) {
      return oo(this, 16, e, t);
    };
    m.toNearest = function(e, t) {
      var r = this, n = r.constructor;
      if (r = new n(r), e == null) {
        if (!r.d)
          return r;
        e = new n(1), t = n.rounding;
      } else {
        if (e = new n(e), t === void 0 ? t = n.rounding : ge(t, 0, 8), !r.d)
          return e.s ? r : e;
        if (!e.d)
          return e.s && (e.s = r.s), e;
      }
      return e.d[0] ? (T = false, r = L(r, e, 0, t, 1).times(e), T = true, x(r)) : (e.s = r.s, r = e), r;
    };
    m.toNumber = function() {
      return +this;
    };
    m.toOctal = function(e, t) {
      return oo(this, 8, e, t);
    };
    m.toPower = m.pow = function(e) {
      var t, r, n, i, o, s, a = this, l = a.constructor, u = +(e = new l(e));
      if (!a.d || !e.d || !a.d[0] || !e.d[0])
        return new l(J(+a, u));
      if (a = new l(a), a.eq(1))
        return a;
      if (n = l.precision, o = l.rounding, e.eq(1))
        return x(a, n, o);
      if (t = ae(e.e / P), t >= e.d.length - 1 && (r = u < 0 ? -u : u) <= Xc)
        return i = da(l, a, r, n), e.s < 0 ? new l(1).div(i) : x(i, n, o);
      if (s = a.s, s < 0) {
        if (t < e.d.length - 1)
          return new l(NaN);
        if (e.d[t] & 1 || (s = 1), a.e == 0 && a.d[0] == 1 && a.d.length == 1)
          return a.s = s, a;
      }
      return r = J(+a, u), t = r == 0 || !isFinite(r) ? ae(u * (Math.log("0." + te(a.d)) / Math.LN10 + a.e + 1)) : new l(r + "").e, t > l.maxE + 1 || t < l.minE - 1 ? new l(t > 0 ? s / 0 : 0) : (T = false, l.rounding = a.s = 1, r = Math.min(12, (t + "").length), i = no(e.times(et(a, n + r)), n), i.d && (i = x(i, n + 5, 1), br(i.d, n, o) && (t = n + 10, i = x(no(e.times(et(a, t + r)), t), t + 5, 1), +te(i.d).slice(n + 1, n + 15) + 1 == 1e14 && (i = x(i, n + 1, 0)))), i.s = s, T = true, l.rounding = o, x(i, n, o));
    };
    m.toPrecision = function(e, t) {
      var r, n = this, i = n.constructor;
      return e === void 0 ? r = De(n, n.e <= i.toExpNeg || n.e >= i.toExpPos) : (ge(e, 1, rt), t === void 0 ? t = i.rounding : ge(t, 0, 8), n = x(new i(n), e, t), r = De(n, e <= n.e || n.e <= i.toExpNeg, e)), n.isNeg() && !n.isZero() ? "-" + r : r;
    };
    m.toSignificantDigits = m.toSD = function(e, t) {
      var r = this, n = r.constructor;
      return e === void 0 ? (e = n.precision, t = n.rounding) : (ge(e, 1, rt), t === void 0 ? t = n.rounding : ge(t, 0, 8)), x(new n(r), e, t);
    };
    m.toString = function() {
      var e = this, t = e.constructor, r = De(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
      return e.isNeg() && !e.isZero() ? "-" + r : r;
    };
    m.truncated = m.trunc = function() {
      return x(new this.constructor(this), this.e + 1, 1);
    };
    m.valueOf = m.toJSON = function() {
      var e = this, t = e.constructor, r = De(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
      return e.isNeg() ? "-" + r : r;
    };
    function te(e) {
      var t, r, n, i = e.length - 1, o = "", s = e[0];
      if (i > 0) {
        for (o += s, t = 1; t < i; t++)
          n = e[t] + "", r = P - n.length, r && (o += Xe(r)), o += n;
        s = e[t], n = s + "", r = P - n.length, r && (o += Xe(r));
      } else if (s === 0)
        return "0";
      for (; s % 10 === 0; )
        s /= 10;
      return o + s;
    }
    function ge(e, t, r) {
      if (e !== ~~e || e < t || e > r)
        throw Error(tt + e);
    }
    function br(e, t, r, n) {
      var i, o, s, a;
      for (o = e[0]; o >= 10; o /= 10)
        --t;
      return --t < 0 ? (t += P, i = 0) : (i = Math.ceil((t + 1) / P), t %= P), o = J(10, P - t), a = e[i] % o | 0, n == null ? t < 3 ? (t == 0 ? a = a / 100 | 0 : t == 1 && (a = a / 10 | 0), s = r < 4 && a == 99999 || r > 3 && a == 49999 || a == 5e4 || a == 0) : s = (r < 4 && a + 1 == o || r > 3 && a + 1 == o / 2) && (e[i + 1] / o / 100 | 0) == J(10, t - 2) - 1 || (a == o / 2 || a == 0) && (e[i + 1] / o / 100 | 0) == 0 : t < 4 ? (t == 0 ? a = a / 1e3 | 0 : t == 1 ? a = a / 100 | 0 : t == 2 && (a = a / 10 | 0), s = (n || r < 4) && a == 9999 || !n && r > 3 && a == 4999) : s = ((n || r < 4) && a + 1 == o || !n && r > 3 && a + 1 == o / 2) && (e[i + 1] / o / 1e3 | 0) == J(10, t - 3) - 1, s;
    }
    function xn(e, t, r) {
      for (var n, i = [0], o, s = 0, a = e.length; s < a; ) {
        for (o = i.length; o--; )
          i[o] *= t;
        for (i[0] += eo.indexOf(e.charAt(s++)), n = 0; n < i.length; n++)
          i[n] > r - 1 && (i[n + 1] === void 0 && (i[n + 1] = 0), i[n + 1] += i[n] / r | 0, i[n] %= r);
      }
      return i.reverse();
    }
    function tp(e, t) {
      var r, n, i;
      if (t.isZero())
        return t;
      n = t.d.length, n < 32 ? (r = Math.ceil(n / 3), i = (1 / _n(4, r)).toString()) : (r = 16, i = "2.3283064365386962890625e-10"), e.precision += r, t = qt(e, 1, t.times(i), new e(1));
      for (var o = r; o--; ) {
        var s = t.times(t);
        t = s.times(s).minus(s).times(8).plus(1);
      }
      return e.precision -= r, t;
    }
    var L = /* @__PURE__ */ function() {
      function e(n, i, o) {
        var s, a = 0, l = n.length;
        for (n = n.slice(); l--; )
          s = n[l] * i + a, n[l] = s % o | 0, a = s / o | 0;
        return a && n.unshift(a), n;
      }
      function t(n, i, o, s) {
        var a, l;
        if (o != s)
          l = o > s ? 1 : -1;
        else
          for (a = l = 0; a < o; a++)
            if (n[a] != i[a]) {
              l = n[a] > i[a] ? 1 : -1;
              break;
            }
        return l;
      }
      function r(n, i, o, s) {
        for (var a = 0; o--; )
          n[o] -= a, a = n[o] < i[o] ? 1 : 0, n[o] = a * s + n[o] - i[o];
        for (; !n[0] && n.length > 1; )
          n.shift();
      }
      return function(n, i, o, s, a, l) {
        var u, c, p, d, f, y, g, _, A, R, E, S, we, X, ut, K, ne, Be, ie, Tt, Kr = n.constructor, ai = n.s == i.s ? 1 : -1, oe = n.d, N = i.d;
        if (!oe || !oe[0] || !N || !N[0])
          return new Kr(!n.s || !i.s || (oe ? N && oe[0] == N[0] : !N) ? NaN : oe && oe[0] == 0 || !N ? ai * 0 : ai / 0);
        for (l ? (f = 1, c = n.e - i.e) : (l = Ce, f = P, c = ae(n.e / f) - ae(i.e / f)), ie = N.length, ne = oe.length, A = new Kr(ai), R = A.d = [], p = 0; N[p] == (oe[p] || 0); p++)
          ;
        if (N[p] > (oe[p] || 0) && c--, o == null ? (X = o = Kr.precision, s = Kr.rounding) : a ? X = o + (n.e - i.e) + 1 : X = o, X < 0)
          R.push(1), y = true;
        else {
          if (X = X / f + 2 | 0, p = 0, ie == 1) {
            for (d = 0, N = N[0], X++; (p < ne || d) && X--; p++)
              ut = d * l + (oe[p] || 0), R[p] = ut / N | 0, d = ut % N | 0;
            y = d || p < ne;
          } else {
            for (d = l / (N[0] + 1) | 0, d > 1 && (N = e(N, d, l), oe = e(oe, d, l), ie = N.length, ne = oe.length), K = ie, E = oe.slice(0, ie), S = E.length; S < ie; )
              E[S++] = 0;
            Tt = N.slice(), Tt.unshift(0), Be = N[0], N[1] >= l / 2 && ++Be;
            do
              d = 0, u = t(N, E, ie, S), u < 0 ? (we = E[0], ie != S && (we = we * l + (E[1] || 0)), d = we / Be | 0, d > 1 ? (d >= l && (d = l - 1), g = e(N, d, l), _ = g.length, S = E.length, u = t(g, E, _, S), u == 1 && (d--, r(g, ie < _ ? Tt : N, _, l))) : (d == 0 && (u = d = 1), g = N.slice()), _ = g.length, _ < S && g.unshift(0), r(E, g, S, l), u == -1 && (S = E.length, u = t(N, E, ie, S), u < 1 && (d++, r(E, ie < S ? Tt : N, S, l))), S = E.length) : u === 0 && (d++, E = [0]), R[p++] = d, u && E[0] ? E[S++] = oe[K] || 0 : (E = [oe[K]], S = 1);
            while ((K++ < ne || E[0] !== void 0) && X--);
            y = E[0] !== void 0;
          }
          R[0] || R.shift();
        }
        if (f == 1)
          A.e = c, sa = y;
        else {
          for (p = 1, d = R[0]; d >= 10; d /= 10)
            p++;
          A.e = p + c * f - 1, x(A, a ? o + A.e + 1 : o, s, y);
        }
        return A;
      };
    }();
    function x(e, t, r, n) {
      var i, o, s, a, l, u, c, p, d, f = e.constructor;
      e:
        if (t != null) {
          if (p = e.d, !p)
            return e;
          for (i = 1, a = p[0]; a >= 10; a /= 10)
            i++;
          if (o = t - i, o < 0)
            o += P, s = t, c = p[d = 0], l = c / J(10, i - s - 1) % 10 | 0;
          else if (d = Math.ceil((o + 1) / P), a = p.length, d >= a)
            if (n) {
              for (; a++ <= d; )
                p.push(0);
              c = l = 0, i = 1, o %= P, s = o - P + 1;
            } else
              break e;
          else {
            for (c = a = p[d], i = 1; a >= 10; a /= 10)
              i++;
            o %= P, s = o - P + i, l = s < 0 ? 0 : c / J(10, i - s - 1) % 10 | 0;
          }
          if (n = n || t < 0 || p[d + 1] !== void 0 || (s < 0 ? c : c % J(10, i - s - 1)), u = r < 4 ? (l || n) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : l > 5 || l == 5 && (r == 4 || n || r == 6 && (o > 0 ? s > 0 ? c / J(10, i - s) : 0 : p[d - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), t < 1 || !p[0])
            return p.length = 0, u ? (t -= e.e + 1, p[0] = J(10, (P - t % P) % P), e.e = -t || 0) : p[0] = e.e = 0, e;
          if (o == 0 ? (p.length = d, a = 1, d--) : (p.length = d + 1, a = J(10, P - o), p[d] = s > 0 ? (c / J(10, i - s) % J(10, s) | 0) * a : 0), u)
            for (; ; )
              if (d == 0) {
                for (o = 1, s = p[0]; s >= 10; s /= 10)
                  o++;
                for (s = p[0] += a, a = 1; s >= 10; s /= 10)
                  a++;
                o != a && (e.e++, p[0] == Ce && (p[0] = 1));
                break;
              } else {
                if (p[d] += a, p[d] != Ce)
                  break;
                p[d--] = 0, a = 1;
              }
          for (o = p.length; p[--o] === 0; )
            p.pop();
        }
      return T && (e.e > f.maxE ? (e.d = null, e.e = NaN) : e.e < f.minE && (e.e = 0, e.d = [0])), e;
    }
    function De(e, t, r) {
      if (!e.isFinite())
        return fa(e);
      var n, i = e.e, o = te(e.d), s = o.length;
      return t ? (r && (n = r - s) > 0 ? o = o.charAt(0) + "." + o.slice(1) + Xe(n) : s > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : i < 0 ? (o = "0." + Xe(-i - 1) + o, r && (n = r - s) > 0 && (o += Xe(n))) : i >= s ? (o += Xe(i + 1 - s), r && (n = r - i - 1) > 0 && (o = o + "." + Xe(n))) : ((n = i + 1) < s && (o = o.slice(0, n) + "." + o.slice(n)), r && (n = r - s) > 0 && (i + 1 === s && (o += "."), o += Xe(n))), o;
    }
    function Tn(e, t) {
      var r = e[0];
      for (t *= P; r >= 10; r /= 10)
        t++;
      return t;
    }
    function Pn(e, t, r) {
      if (t > ep)
        throw T = true, r && (e.precision = r), Error(aa);
      return x(new e(wn), t, 1, true);
    }
    function _e(e, t, r) {
      if (t > ro)
        throw Error(aa);
      return x(new e(En), t, r, true);
    }
    function pa(e) {
      var t = e.length - 1, r = t * P + 1;
      if (t = e[t], t) {
        for (; t % 10 == 0; t /= 10)
          r--;
        for (t = e[0]; t >= 10; t /= 10)
          r++;
      }
      return r;
    }
    function Xe(e) {
      for (var t = ""; e--; )
        t += "0";
      return t;
    }
    function da(e, t, r, n) {
      var i, o = new e(1), s = Math.ceil(n / P + 4);
      for (T = false; ; ) {
        if (r % 2 && (o = o.times(t), ia(o.d, s) && (i = true)), r = ae(r / 2), r === 0) {
          r = o.d.length - 1, i && o.d[r] === 0 && ++o.d[r];
          break;
        }
        t = t.times(t), ia(t.d, s);
      }
      return T = true, o;
    }
    function na(e) {
      return e.d[e.d.length - 1] & 1;
    }
    function ma(e, t, r) {
      for (var n, i = new e(t[0]), o = 0; ++o < t.length; )
        if (n = new e(t[o]), n.s)
          i[r](n) && (i = n);
        else {
          i = n;
          break;
        }
      return i;
    }
    function no(e, t) {
      var r, n, i, o, s, a, l, u = 0, c = 0, p = 0, d = e.constructor, f = d.rounding, y = d.precision;
      if (!e.d || !e.d[0] || e.e > 17)
        return new d(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : NaN);
      for (t == null ? (T = false, l = y) : l = t, a = new d(0.03125); e.e > -2; )
        e = e.times(a), p += 5;
      for (n = Math.log(J(2, p)) / Math.LN10 * 2 + 5 | 0, l += n, r = o = s = new d(1), d.precision = l; ; ) {
        if (o = x(o.times(e), l, 1), r = r.times(++c), a = s.plus(L(o, r, l, 1)), te(a.d).slice(0, l) === te(s.d).slice(0, l)) {
          for (i = p; i--; )
            s = x(s.times(s), l, 1);
          if (t == null)
            if (u < 3 && br(s.d, l - n, f, u))
              d.precision = l += 10, r = o = a = new d(1), c = 0, u++;
            else
              return x(s, d.precision = y, f, T = true);
          else
            return d.precision = y, s;
        }
        s = a;
      }
    }
    function et(e, t) {
      var r, n, i, o, s, a, l, u, c, p, d, f = 1, y = 10, g = e, _ = g.d, A = g.constructor, R = A.rounding, E = A.precision;
      if (g.s < 0 || !_ || !_[0] || !g.e && _[0] == 1 && _.length == 1)
        return new A(_ && !_[0] ? -1 / 0 : g.s != 1 ? NaN : _ ? 0 : g);
      if (t == null ? (T = false, c = E) : c = t, A.precision = c += y, r = te(_), n = r.charAt(0), Math.abs(o = g.e) < 15e14) {
        for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; )
          g = g.times(e), r = te(g.d), n = r.charAt(0), f++;
        o = g.e, n > 1 ? (g = new A("0." + r), o++) : g = new A(n + "." + r.slice(1));
      } else
        return u = Pn(A, c + 2, E).times(o + ""), g = et(new A(n + "." + r.slice(1)), c - y).plus(u), A.precision = E, t == null ? x(g, E, R, T = true) : g;
      for (p = g, l = s = g = L(g.minus(1), g.plus(1), c, 1), d = x(g.times(g), c, 1), i = 3; ; ) {
        if (s = x(s.times(d), c, 1), u = l.plus(L(s, new A(i), c, 1)), te(u.d).slice(0, c) === te(l.d).slice(0, c))
          if (l = l.times(2), o !== 0 && (l = l.plus(Pn(A, c + 2, E).times(o + ""))), l = L(l, new A(f), c, 1), t == null)
            if (br(l.d, c - y, R, a))
              A.precision = c += y, u = s = g = L(p.minus(1), p.plus(1), c, 1), d = x(g.times(g), c, 1), i = a = 1;
            else
              return x(l, A.precision = E, R, T = true);
          else
            return A.precision = E, l;
        l = u, i += 2;
      }
    }
    function fa(e) {
      return String(e.s * e.s / 0);
    }
    function io(e, t) {
      var r, n, i;
      for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; t.charCodeAt(n) === 48; n++)
        ;
      for (i = t.length; t.charCodeAt(i - 1) === 48; --i)
        ;
      if (t = t.slice(n, i), t) {
        if (i -= n, e.e = r = r - n - 1, e.d = [], n = (r + 1) % P, r < 0 && (n += P), n < i) {
          for (n && e.d.push(+t.slice(0, n)), i -= P; n < i; )
            e.d.push(+t.slice(n, n += P));
          t = t.slice(n), n = P - t.length;
        } else
          n -= i;
        for (; n--; )
          t += "0";
        e.d.push(+t), T && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
      } else
        e.e = 0, e.d = [0];
      return e;
    }
    function rp(e, t) {
      var r, n, i, o, s, a, l, u, c;
      if (t.indexOf("_") > -1) {
        if (t = t.replace(/(\d)_(?=\d)/g, "$1"), ca.test(t))
          return io(e, t);
      } else if (t === "Infinity" || t === "NaN")
        return +t || (e.s = NaN), e.e = NaN, e.d = null, e;
      if (Yc.test(t))
        r = 16, t = t.toLowerCase();
      else if (zc.test(t))
        r = 2;
      else if (Zc.test(t))
        r = 8;
      else
        throw Error(tt + t);
      for (o = t.search(/p/i), o > 0 ? (l = +t.slice(o + 1), t = t.substring(2, o)) : t = t.slice(2), o = t.indexOf("."), s = o >= 0, n = e.constructor, s && (t = t.replace(".", ""), a = t.length, o = a - o, i = da(n, new n(r), o, o * 2)), u = xn(t, r, Ce), c = u.length - 1, o = c; u[o] === 0; --o)
        u.pop();
      return o < 0 ? new n(e.s * 0) : (e.e = Tn(u, c), e.d = u, T = false, s && (e = L(e, i, a * 4)), l && (e = e.times(Math.abs(l) < 54 ? J(2, l) : xt.pow(2, l))), T = true, e);
    }
    function np(e, t) {
      var r, n = t.d.length;
      if (n < 3)
        return t.isZero() ? t : qt(e, 2, t, t);
      r = 1.4 * Math.sqrt(n), r = r > 16 ? 16 : r | 0, t = t.times(1 / _n(5, r)), t = qt(e, 2, t, t);
      for (var i, o = new e(5), s = new e(16), a = new e(20); r--; )
        i = t.times(t), t = t.times(o.plus(i.times(s.times(i).minus(a))));
      return t;
    }
    function qt(e, t, r, n, i) {
      var o, s, a, l, u = 1, c = e.precision, p = Math.ceil(c / P);
      for (T = false, l = r.times(r), a = new e(n); ; ) {
        if (s = L(a.times(l), new e(t++ * t++), c, 1), a = i ? n.plus(s) : n.minus(s), n = L(s.times(l), new e(t++ * t++), c, 1), s = a.plus(n), s.d[p] !== void 0) {
          for (o = p; s.d[o] === a.d[o] && o--; )
            ;
          if (o == -1)
            break;
        }
        o = a, a = n, n = s, s = o, u++;
      }
      return T = true, s.d.length = p + 1, s;
    }
    function _n(e, t) {
      for (var r = e; --t; )
        r *= e;
      return r;
    }
    function ga(e, t) {
      var r, n = t.s < 0, i = _e(e, e.precision, 1), o = i.times(0.5);
      if (t = t.abs(), t.lte(o))
        return Ue = n ? 4 : 1, t;
      if (r = t.divToInt(i), r.isZero())
        Ue = n ? 3 : 2;
      else {
        if (t = t.minus(r.times(i)), t.lte(o))
          return Ue = na(r) ? n ? 2 : 3 : n ? 4 : 1, t;
        Ue = na(r) ? n ? 1 : 4 : n ? 3 : 2;
      }
      return t.minus(i).abs();
    }
    function oo(e, t, r, n) {
      var i, o, s, a, l, u, c, p, d, f = e.constructor, y = r !== void 0;
      if (y ? (ge(r, 1, rt), n === void 0 ? n = f.rounding : ge(n, 0, 8)) : (r = f.precision, n = f.rounding), !e.isFinite())
        c = fa(e);
      else {
        for (c = De(e), s = c.indexOf("."), y ? (i = 2, t == 16 ? r = r * 4 - 3 : t == 8 && (r = r * 3 - 2)) : i = t, s >= 0 && (c = c.replace(".", ""), d = new f(1), d.e = c.length - s, d.d = xn(De(d), 10, i), d.e = d.d.length), p = xn(c, 10, i), o = l = p.length; p[--l] == 0; )
          p.pop();
        if (!p[0])
          c = y ? "0p+0" : "0";
        else {
          if (s < 0 ? o-- : (e = new f(e), e.d = p, e.e = o, e = L(e, d, r, n, 0, i), p = e.d, o = e.e, u = sa), s = p[r], a = i / 2, u = u || p[r + 1] !== void 0, u = n < 4 ? (s !== void 0 || u) && (n === 0 || n === (e.s < 0 ? 3 : 2)) : s > a || s === a && (n === 4 || u || n === 6 && p[r - 1] & 1 || n === (e.s < 0 ? 8 : 7)), p.length = r, u)
            for (; ++p[--r] > i - 1; )
              p[r] = 0, r || (++o, p.unshift(1));
          for (l = p.length; !p[l - 1]; --l)
            ;
          for (s = 0, c = ""; s < l; s++)
            c += eo.charAt(p[s]);
          if (y) {
            if (l > 1)
              if (t == 16 || t == 8) {
                for (s = t == 16 ? 4 : 3, --l; l % s; l++)
                  c += "0";
                for (p = xn(c, i, t), l = p.length; !p[l - 1]; --l)
                  ;
                for (s = 1, c = "1."; s < l; s++)
                  c += eo.charAt(p[s]);
              } else
                c = c.charAt(0) + "." + c.slice(1);
            c = c + (o < 0 ? "p" : "p+") + o;
          } else if (o < 0) {
            for (; ++o; )
              c = "0" + c;
            c = "0." + c;
          } else if (++o > l)
            for (o -= l; o--; )
              c += "0";
          else
            o < l && (c = c.slice(0, o) + "." + c.slice(o));
        }
        c = (t == 16 ? "0x" : t == 2 ? "0b" : t == 8 ? "0o" : "") + c;
      }
      return e.s < 0 ? "-" + c : c;
    }
    function ia(e, t) {
      if (e.length > t)
        return e.length = t, true;
    }
    function ip(e) {
      return new this(e).abs();
    }
    function op(e) {
      return new this(e).acos();
    }
    function sp(e) {
      return new this(e).acosh();
    }
    function ap(e, t) {
      return new this(e).plus(t);
    }
    function lp(e) {
      return new this(e).asin();
    }
    function up(e) {
      return new this(e).asinh();
    }
    function cp(e) {
      return new this(e).atan();
    }
    function pp(e) {
      return new this(e).atanh();
    }
    function dp(e, t) {
      e = new this(e), t = new this(t);
      var r, n = this.precision, i = this.rounding, o = n + 4;
      return !e.s || !t.s ? r = new this(NaN) : !e.d && !t.d ? (r = _e(this, o, 1).times(t.s > 0 ? 0.25 : 0.75), r.s = e.s) : !t.d || e.isZero() ? (r = t.s < 0 ? _e(this, n, i) : new this(0), r.s = e.s) : !e.d || t.isZero() ? (r = _e(this, o, 1).times(0.5), r.s = e.s) : t.s < 0 ? (this.precision = o, this.rounding = 1, r = this.atan(L(e, t, o, 1)), t = _e(this, o, 1), this.precision = n, this.rounding = i, r = e.s < 0 ? r.minus(t) : r.plus(t)) : r = this.atan(L(e, t, o, 1)), r;
    }
    function mp(e) {
      return new this(e).cbrt();
    }
    function fp(e) {
      return x(e = new this(e), e.e + 1, 2);
    }
    function gp(e, t, r) {
      return new this(e).clamp(t, r);
    }
    function yp(e) {
      if (!e || typeof e != "object")
        throw Error(vn + "Object expected");
      var t, r, n, i = e.defaults === true, o = ["precision", 1, rt, "rounding", 0, 8, "toExpNeg", -$t, 0, "toExpPos", 0, $t, "maxE", 0, $t, "minE", -$t, 0, "modulo", 0, 9];
      for (t = 0; t < o.length; t += 3)
        if (r = o[t], i && (this[r] = to[r]), (n = e[r]) !== void 0)
          if (ae(n) === n && n >= o[t + 1] && n <= o[t + 2])
            this[r] = n;
          else
            throw Error(tt + r + ": " + n);
      if (r = "crypto", i && (this[r] = to[r]), (n = e[r]) !== void 0)
        if (n === true || n === false || n === 0 || n === 1)
          if (n)
            if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
              this[r] = true;
            else
              throw Error(la);
          else
            this[r] = false;
        else
          throw Error(tt + r + ": " + n);
      return this;
    }
    function hp(e) {
      return new this(e).cos();
    }
    function bp(e) {
      return new this(e).cosh();
    }
    function ya(e) {
      var t, r, n;
      function i(o) {
        var s, a, l, u = this;
        if (!(u instanceof i))
          return new i(o);
        if (u.constructor = i, oa(o)) {
          u.s = o.s, T ? !o.d || o.e > i.maxE ? (u.e = NaN, u.d = null) : o.e < i.minE ? (u.e = 0, u.d = [0]) : (u.e = o.e, u.d = o.d.slice()) : (u.e = o.e, u.d = o.d ? o.d.slice() : o.d);
          return;
        }
        if (l = typeof o, l === "number") {
          if (o === 0) {
            u.s = 1 / o < 0 ? -1 : 1, u.e = 0, u.d = [0];
            return;
          }
          if (o < 0 ? (o = -o, u.s = -1) : u.s = 1, o === ~~o && o < 1e7) {
            for (s = 0, a = o; a >= 10; a /= 10)
              s++;
            T ? s > i.maxE ? (u.e = NaN, u.d = null) : s < i.minE ? (u.e = 0, u.d = [0]) : (u.e = s, u.d = [o]) : (u.e = s, u.d = [o]);
            return;
          } else if (o * 0 !== 0) {
            o || (u.s = NaN), u.e = NaN, u.d = null;
            return;
          }
          return io(u, o.toString());
        } else if (l !== "string")
          throw Error(tt + o);
        return (a = o.charCodeAt(0)) === 45 ? (o = o.slice(1), u.s = -1) : (a === 43 && (o = o.slice(1)), u.s = 1), ca.test(o) ? io(u, o) : rp(u, o);
      }
      if (i.prototype = m, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.EUCLID = 9, i.config = i.set = yp, i.clone = ya, i.isDecimal = oa, i.abs = ip, i.acos = op, i.acosh = sp, i.add = ap, i.asin = lp, i.asinh = up, i.atan = cp, i.atanh = pp, i.atan2 = dp, i.cbrt = mp, i.ceil = fp, i.clamp = gp, i.cos = hp, i.cosh = bp, i.div = xp, i.exp = wp, i.floor = Ep, i.hypot = Pp, i.ln = vp, i.log = Tp, i.log10 = Cp, i.log2 = _p, i.max = Ap, i.min = Rp, i.mod = Mp, i.mul = Sp, i.pow = Ip, i.random = kp, i.round = Fp, i.sign = Op, i.sin = Dp, i.sinh = Np, i.sqrt = Lp, i.sub = $p, i.sum = qp, i.tan = Bp, i.tanh = jp, i.trunc = Vp, e === void 0 && (e = {}), e && e.defaults !== true)
        for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], t = 0; t < n.length; )
          e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
      return i.config(e), i;
    }
    function xp(e, t) {
      return new this(e).div(t);
    }
    function wp(e) {
      return new this(e).exp();
    }
    function Ep(e) {
      return x(e = new this(e), e.e + 1, 3);
    }
    function Pp() {
      var e, t, r = new this(0);
      for (T = false, e = 0; e < arguments.length; )
        if (t = new this(arguments[e++]), t.d)
          r.d && (r = r.plus(t.times(t)));
        else {
          if (t.s)
            return T = true, new this(1 / 0);
          r = t;
        }
      return T = true, r.sqrt();
    }
    function oa(e) {
      return e instanceof xt || e && e.toStringTag === ua || false;
    }
    function vp(e) {
      return new this(e).ln();
    }
    function Tp(e, t) {
      return new this(e).log(t);
    }
    function _p(e) {
      return new this(e).log(2);
    }
    function Cp(e) {
      return new this(e).log(10);
    }
    function Ap() {
      return ma(this, arguments, "lt");
    }
    function Rp() {
      return ma(this, arguments, "gt");
    }
    function Mp(e, t) {
      return new this(e).mod(t);
    }
    function Sp(e, t) {
      return new this(e).mul(t);
    }
    function Ip(e, t) {
      return new this(e).pow(t);
    }
    function kp(e) {
      var t, r, n, i, o = 0, s = new this(1), a = [];
      if (e === void 0 ? e = this.precision : ge(e, 1, rt), n = Math.ceil(e / P), this.crypto)
        if (crypto.getRandomValues)
          for (t = crypto.getRandomValues(new Uint32Array(n)); o < n; )
            i = t[o], i >= 429e7 ? t[o] = crypto.getRandomValues(new Uint32Array(1))[0] : a[o++] = i % 1e7;
        else if (crypto.randomBytes) {
          for (t = crypto.randomBytes(n *= 4); o < n; )
            i = t[o] + (t[o + 1] << 8) + (t[o + 2] << 16) + ((t[o + 3] & 127) << 24), i >= 214e7 ? crypto.randomBytes(4).copy(t, o) : (a.push(i % 1e7), o += 4);
          o = n / 4;
        } else
          throw Error(la);
      else
        for (; o < n; )
          a[o++] = Math.random() * 1e7 | 0;
      for (n = a[--o], e %= P, n && e && (i = J(10, P - e), a[o] = (n / i | 0) * i); a[o] === 0; o--)
        a.pop();
      if (o < 0)
        r = 0, a = [0];
      else {
        for (r = -1; a[0] === 0; r -= P)
          a.shift();
        for (n = 1, i = a[0]; i >= 10; i /= 10)
          n++;
        n < P && (r -= P - n);
      }
      return s.e = r, s.d = a, s;
    }
    function Fp(e) {
      return x(e = new this(e), e.e + 1, this.rounding);
    }
    function Op(e) {
      return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
    }
    function Dp(e) {
      return new this(e).sin();
    }
    function Np(e) {
      return new this(e).sinh();
    }
    function Lp(e) {
      return new this(e).sqrt();
    }
    function $p(e, t) {
      return new this(e).sub(t);
    }
    function qp() {
      var e = 0, t = arguments, r = new this(t[e]);
      for (T = false; r.s && ++e < t.length; )
        r = r.plus(t[e]);
      return T = true, x(r, this.precision, this.rounding);
    }
    function Bp(e) {
      return new this(e).tan();
    }
    function jp(e) {
      return new this(e).tanh();
    }
    function Vp(e) {
      return x(e = new this(e), e.e + 1, 1);
    }
    m[Symbol.for("nodejs.util.inspect.custom")] = m.toString;
    m[Symbol.toStringTag] = "Decimal";
    var xt = m.constructor = ya(to);
    wn = new xt(wn);
    En = new xt(En);
    var Ne = xt;
    function Bt(e) {
      return xt.isDecimal(e) ? true : e !== null && typeof e == "object" && typeof e.s == "number" && typeof e.e == "number" && typeof e.toFixed == "function" && Array.isArray(e.d);
    }
    var xr = class {
      constructor(t, r, n, i, o) {
        this.modelName = t, this.name = r, this.typeName = n, this.isList = i, this.isEnum = o;
      }
      _toGraphQLInputType() {
        let t = this.isList ? "List" : "", r = this.isEnum ? "Enum" : "";
        return `${t}${r}${this.typeName}FieldRefInput<${this.modelName}>`;
      }
    };
    function jt(e) {
      return e instanceof xr;
    }
    var Cn = class {
      constructor(t) {
        this.value = t;
      }
      write(t) {
        t.write(this.value);
      }
      markAsError() {
        this.value.markAsError();
      }
    };
    var An = (e) => e;
    var Rn = { bold: An, red: An, green: An, dim: An, enabled: false };
    var ha = { bold: de, red: ve, green: pt, dim: He, enabled: true };
    var Vt = { write(e) {
      e.writeLine(",");
    } };
    var Le = class {
      constructor(t) {
        this.contents = t;
        this.isUnderlined = false;
        this.color = (t2) => t2;
      }
      underline() {
        return this.isUnderlined = true, this;
      }
      setColor(t) {
        return this.color = t, this;
      }
      write(t) {
        let r = t.getCurrentLineLength();
        t.write(this.color(this.contents)), this.isUnderlined && t.afterNextNewline(() => {
          t.write(" ".repeat(r)).writeLine(this.color("~".repeat(this.contents.length)));
        });
      }
    };
    var nt = class {
      constructor() {
        this.hasError = false;
      }
      markAsError() {
        return this.hasError = true, this;
      }
    };
    var Ut = class extends nt {
      constructor() {
        super(...arguments);
        this.items = [];
      }
      addItem(r) {
        return this.items.push(new Cn(r)), this;
      }
      getField(r) {
        return this.items[r];
      }
      getPrintWidth() {
        return this.items.length === 0 ? 2 : Math.max(...this.items.map((n) => n.value.getPrintWidth())) + 2;
      }
      write(r) {
        if (this.items.length === 0) {
          this.writeEmpty(r);
          return;
        }
        this.writeWithItems(r);
      }
      writeEmpty(r) {
        let n = new Le("[]");
        this.hasError && n.setColor(r.context.colors.red).underline(), r.write(n);
      }
      writeWithItems(r) {
        let { colors: n } = r.context;
        r.writeLine("[").withIndent(() => r.writeJoined(Vt, this.items).newLine()).write("]"), this.hasError && r.afterNextNewline(() => {
          r.writeLine(n.red("~".repeat(this.getPrintWidth())));
        });
      }
    };
    var ba = ": ";
    var Mn = class {
      constructor(t, r) {
        this.name = t;
        this.value = r;
        this.hasError = false;
      }
      markAsError() {
        this.hasError = true;
      }
      getPrintWidth() {
        return this.name.length + this.value.getPrintWidth() + ba.length;
      }
      write(t) {
        let r = new Le(this.name);
        this.hasError && r.underline().setColor(t.context.colors.red), t.write(r).write(ba).write(this.value);
      }
    };
    var z = class e extends nt {
      constructor() {
        super(...arguments);
        this.fields = {};
        this.suggestions = [];
      }
      addField(r) {
        this.fields[r.name] = r;
      }
      addSuggestion(r) {
        this.suggestions.push(r);
      }
      getField(r) {
        return this.fields[r];
      }
      getDeepField(r) {
        let [n, ...i] = r, o = this.getField(n);
        if (!o)
          return;
        let s = o;
        for (let a of i) {
          let l;
          if (s.value instanceof e ? l = s.value.getField(a) : s.value instanceof Ut && (l = s.value.getField(Number(a))), !l)
            return;
          s = l;
        }
        return s;
      }
      getDeepFieldValue(r) {
        var _a6;
        return r.length === 0 ? this : (_a6 = this.getDeepField(r)) == null ? void 0 : _a6.value;
      }
      hasField(r) {
        return !!this.getField(r);
      }
      removeAllFields() {
        this.fields = {};
      }
      removeField(r) {
        delete this.fields[r];
      }
      getFields() {
        return this.fields;
      }
      isEmpty() {
        return Object.keys(this.fields).length === 0;
      }
      getFieldValue(r) {
        var _a6;
        return (_a6 = this.getField(r)) == null ? void 0 : _a6.value;
      }
      getDeepSubSelectionValue(r) {
        let n = this;
        for (let i of r) {
          if (!(n instanceof e))
            return;
          let o = n.getSubSelectionValue(i);
          if (!o)
            return;
          n = o;
        }
        return n;
      }
      getDeepSelectionParent(r) {
        let n = this.getSelectionParent();
        if (!n)
          return;
        let i = n;
        for (let o of r) {
          let s = i.value.getFieldValue(o);
          if (!s || !(s instanceof e))
            return;
          let a = s.getSelectionParent();
          if (!a)
            return;
          i = a;
        }
        return i;
      }
      getSelectionParent() {
        let r = this.getField("select");
        if ((r == null ? void 0 : r.value) instanceof e)
          return { kind: "select", value: r.value };
        let n = this.getField("include");
        if ((n == null ? void 0 : n.value) instanceof e)
          return { kind: "include", value: n.value };
      }
      getSubSelectionValue(r) {
        var _a6;
        return (_a6 = this.getSelectionParent()) == null ? void 0 : _a6.value.fields[r].value;
      }
      getPrintWidth() {
        let r = Object.values(this.fields);
        return r.length == 0 ? 2 : Math.max(...r.map((i) => i.getPrintWidth())) + 2;
      }
      write(r) {
        let n = Object.values(this.fields);
        if (n.length === 0 && this.suggestions.length === 0) {
          this.writeEmpty(r);
          return;
        }
        this.writeWithContents(r, n);
      }
      writeEmpty(r) {
        let n = new Le("{}");
        this.hasError && n.setColor(r.context.colors.red).underline(), r.write(n);
      }
      writeWithContents(r, n) {
        r.writeLine("{").withIndent(() => {
          r.writeJoined(Vt, [...n, ...this.suggestions]).newLine();
        }), r.write("}"), this.hasError && r.afterNextNewline(() => {
          r.writeLine(r.context.colors.red("~".repeat(this.getPrintWidth())));
        });
      }
    };
    var Y = class extends nt {
      constructor(r) {
        super();
        this.text = r;
      }
      getPrintWidth() {
        return this.text.length;
      }
      write(r) {
        let n = new Le(this.text);
        this.hasError && n.underline().setColor(r.context.colors.red), r.write(n);
      }
    };
    var so = class {
      constructor(t) {
        this.errorMessages = [];
        this.arguments = t;
      }
      write(t) {
        t.write(this.arguments);
      }
      addErrorMessage(t) {
        this.errorMessages.push(t);
      }
      renderAllMessages(t) {
        return this.errorMessages.map((r) => r(t)).join(`
`);
      }
    };
    function Sn(e) {
      return new so(xa(e));
    }
    function xa(e) {
      let t = new z();
      for (let [r, n] of Object.entries(e)) {
        let i = new Mn(r, wa(n));
        t.addField(i);
      }
      return t;
    }
    function wa(e) {
      if (typeof e == "string")
        return new Y(JSON.stringify(e));
      if (typeof e == "number" || typeof e == "boolean")
        return new Y(String(e));
      if (typeof e == "bigint")
        return new Y(`${e}n`);
      if (e === null)
        return new Y("null");
      if (e === void 0)
        return new Y("undefined");
      if (Bt(e))
        return new Y(`new Prisma.Decimal("${e.toFixed()}")`);
      if (e instanceof Uint8Array)
        return Buffer.isBuffer(e) ? new Y(`Buffer.alloc(${e.byteLength})`) : new Y(`new Uint8Array(${e.byteLength})`);
      if (e instanceof Date) {
        let t = bn(e) ? e.toISOString() : "Invalid Date";
        return new Y(`new Date("${t}")`);
      }
      return e instanceof ke ? new Y(`Prisma.${e._getName()}`) : jt(e) ? new Y(`prisma.${Ho(e.modelName)}.$fields.${e.name}`) : Array.isArray(e) ? Kp(e) : typeof e == "object" ? xa(e) : new Y(Object.prototype.toString.call(e));
    }
    function Kp(e) {
      let t = new Ut();
      for (let r of e)
        t.addItem(wa(r));
      return t;
    }
    function Ea(e) {
      if (e === void 0)
        return "";
      let t = Sn(e);
      return new Nt(0, { colors: Rn }).write(t).toString();
    }
    var wr = "<unknown>";
    function Pa(e) {
      var t = e.split(`
`);
      return t.reduce(function(r, n) {
        var i = Gp(n) || Wp(n) || Zp(n) || rd(n) || ed(n);
        return i && r.push(i), r;
      }, []);
    }
    var Qp = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
    var Jp = /\((\S*)(?::(\d+))(?::(\d+))\)/;
    function Gp(e) {
      var t = Qp.exec(e);
      if (!t)
        return null;
      var r = t[2] && t[2].indexOf("native") === 0, n = t[2] && t[2].indexOf("eval") === 0, i = Jp.exec(t[2]);
      return n && i != null && (t[2] = i[1], t[3] = i[2], t[4] = i[3]), { file: r ? null : t[2], methodName: t[1] || wr, arguments: r ? [t[2]] : [], lineNumber: t[3] ? +t[3] : null, column: t[4] ? +t[4] : null };
    }
    var Hp = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
    function Wp(e) {
      var t = Hp.exec(e);
      return t ? { file: t[2], methodName: t[1] || wr, arguments: [], lineNumber: +t[3], column: t[4] ? +t[4] : null } : null;
    }
    var zp = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i;
    var Yp = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
    function Zp(e) {
      var t = zp.exec(e);
      if (!t)
        return null;
      var r = t[3] && t[3].indexOf(" > eval") > -1, n = Yp.exec(t[3]);
      return r && n != null && (t[3] = n[1], t[4] = n[2], t[5] = null), { file: t[3], methodName: t[1] || wr, arguments: t[2] ? t[2].split(",") : [], lineNumber: t[4] ? +t[4] : null, column: t[5] ? +t[5] : null };
    }
    var Xp = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i;
    function ed(e) {
      var t = Xp.exec(e);
      return t ? { file: t[3], methodName: t[1] || wr, arguments: [], lineNumber: +t[4], column: t[5] ? +t[5] : null } : null;
    }
    var td = /^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i;
    function rd(e) {
      var t = td.exec(e);
      return t ? { file: t[2], methodName: t[1] || wr, arguments: [], lineNumber: +t[3], column: t[4] ? +t[4] : null } : null;
    }
    var ao = class {
      getLocation() {
        return null;
      }
    };
    var lo = class {
      constructor() {
        this._error = new Error();
      }
      getLocation() {
        let t = this._error.stack;
        if (!t)
          return null;
        let n = Pa(t).find((i) => {
          if (!i.file)
            return false;
          let o = Li(i.file);
          return o !== "<anonymous>" && !o.includes("@prisma") && !o.includes("/packages/client/src/runtime/") && !o.endsWith("/runtime/binary.js") && !o.endsWith("/runtime/library.js") && !o.endsWith("/runtime/edge.js") && !o.endsWith("/runtime/edge-esm.js") && !o.startsWith("internal/") && !i.methodName.includes("new ") && !i.methodName.includes("getCallSite") && !i.methodName.includes("Proxy.") && i.methodName.split(".").length < 4;
        });
        return !n || !n.file ? null : { fileName: n.file, lineNumber: n.lineNumber, columnNumber: n.column };
      }
    };
    function it(e) {
      return e === "minimal" ? new ao() : new lo();
    }
    var va = { _avg: true, _count: true, _sum: true, _min: true, _max: true };
    function Kt(e = {}) {
      let t = id(e);
      return Object.entries(t).reduce((n, [i, o]) => (va[i] !== void 0 ? n.select[i] = { select: o } : n[i] = o, n), { select: {} });
    }
    function id(e = {}) {
      return typeof e._count == "boolean" ? __spreadProps(__spreadValues({}, e), { _count: { _all: e._count } }) : e;
    }
    function In(e = {}) {
      return (t) => (typeof e._count == "boolean" && (t._count = t._count._all), t);
    }
    function Ta(e, t) {
      let r = In(e);
      return t({ action: "aggregate", unpacker: r, argsMapper: Kt })(e);
    }
    function od(e = {}) {
      let _a6 = e, { select: t } = _a6, r = __objRest(_a6, ["select"]);
      return typeof t == "object" ? Kt(__spreadProps(__spreadValues({}, r), { _count: t })) : Kt(__spreadProps(__spreadValues({}, r), { _count: { _all: true } }));
    }
    function sd(e = {}) {
      return typeof e.select == "object" ? (t) => In(e)(t)._count : (t) => In(e)(t)._count._all;
    }
    function _a(e, t) {
      return t({ action: "count", unpacker: sd(e), argsMapper: od })(e);
    }
    function ad(e = {}) {
      let t = Kt(e);
      if (Array.isArray(t.by))
        for (let r of t.by)
          typeof r == "string" && (t.select[r] = true);
      else
        typeof t.by == "string" && (t.select[t.by] = true);
      return t;
    }
    function ld(e = {}) {
      return (t) => (typeof (e == null ? void 0 : e._count) == "boolean" && t.forEach((r) => {
        r._count = r._count._all;
      }), t);
    }
    function Ca(e, t) {
      return t({ action: "groupBy", unpacker: ld(e), argsMapper: ad })(e);
    }
    function Aa(e, t, r) {
      if (t === "aggregate")
        return (n) => Ta(n, r);
      if (t === "count")
        return (n) => _a(n, r);
      if (t === "groupBy")
        return (n) => Ca(n, r);
    }
    function Ra(e, t) {
      let r = t.fields.filter((i) => !i.relationName), n = Ki(r, (i) => i.name);
      return new Proxy({}, __spreadValues({ get(i, o) {
        if (o in i || typeof o == "symbol")
          return i[o];
        let s = n[o];
        if (s)
          return new xr(e, o, s.type, s.isList, s.kind === "enum");
      } }, hn(Object.keys(n))));
    }
    var Ma = (e) => Array.isArray(e) ? e : e.split(".");
    var uo = (e, t) => Ma(t).reduce((r, n) => r && r[n], e);
    var Sa = (e, t, r) => Ma(t).reduceRight((n, i, o, s) => Object.assign({}, uo(e, s.slice(0, o)), { [i]: n }), r);
    function ud(e, t) {
      return e === void 0 || t === void 0 ? [] : [...t, "select", e];
    }
    function cd(e, t, r) {
      return t === void 0 ? e != null ? e : {} : Sa(t, r, e || true);
    }
    function co(e, t, r, n, i, o) {
      let a = e._runtimeDataModel.models[t].fields.reduce((l, u) => __spreadProps(__spreadValues({}, l), { [u.name]: u }), {});
      return (l) => {
        let u = it(e._errorFormat), c = ud(n, i), p = cd(l, o, c), d = r({ dataPath: c, callsite: u })(p), f = pd(e, t);
        return new Proxy(d, __spreadValues({ get(y, g) {
          if (!f.includes(g))
            return y[g];
          let A = [a[g].type, r, g], R = [c, p];
          return co(e, ...A, ...R);
        } }, hn([...f, ...Object.getOwnPropertyNames(d)])));
      };
    }
    function pd(e, t) {
      return e._runtimeDataModel.models[t].fields.filter((r) => r.kind === "object").map((r) => r.name);
    }
    var Na = F($i());
    var Da = F(require("fs"));
    var Ia = { keyword: We, entity: We, value: (e) => de(Mt(e)), punctuation: Mt, directive: We, function: We, variable: (e) => de(Mt(e)), string: (e) => de(pt(e)), boolean: Re, number: We, comment: Zr };
    var dd = (e) => e;
    var kn = {};
    var md = 0;
    var C = { manual: kn.Prism && kn.Prism.manual, disableWorkerMessageHandler: kn.Prism && kn.Prism.disableWorkerMessageHandler, util: { encode: function(e) {
      if (e instanceof Ae) {
        let t = e;
        return new Ae(t.type, C.util.encode(t.content), t.alias);
      } else
        return Array.isArray(e) ? e.map(C.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
    }, type: function(e) {
      return Object.prototype.toString.call(e).slice(8, -1);
    }, objId: function(e) {
      return e.__id || Object.defineProperty(e, "__id", { value: ++md }), e.__id;
    }, clone: function e(t, r) {
      let n, i, o = C.util.type(t);
      switch (r = r || {}, o) {
        case "Object":
          if (i = C.util.objId(t), r[i])
            return r[i];
          n = {}, r[i] = n;
          for (let s in t)
            t.hasOwnProperty(s) && (n[s] = e(t[s], r));
          return n;
        case "Array":
          return i = C.util.objId(t), r[i] ? r[i] : (n = [], r[i] = n, t.forEach(function(s, a) {
            n[a] = e(s, r);
          }), n);
        default:
          return t;
      }
    } }, languages: { extend: function(e, t) {
      let r = C.util.clone(C.languages[e]);
      for (let n in t)
        r[n] = t[n];
      return r;
    }, insertBefore: function(e, t, r, n) {
      n = n || C.languages;
      let i = n[e], o = {};
      for (let a in i)
        if (i.hasOwnProperty(a)) {
          if (a == t)
            for (let l in r)
              r.hasOwnProperty(l) && (o[l] = r[l]);
          r.hasOwnProperty(a) || (o[a] = i[a]);
        }
      let s = n[e];
      return n[e] = o, C.languages.DFS(C.languages, function(a, l) {
        l === s && a != e && (this[a] = o);
      }), o;
    }, DFS: function e(t, r, n, i) {
      i = i || {};
      let o = C.util.objId;
      for (let s in t)
        if (t.hasOwnProperty(s)) {
          r.call(t, s, t[s], n || s);
          let a = t[s], l = C.util.type(a);
          l === "Object" && !i[o(a)] ? (i[o(a)] = true, e(a, r, null, i)) : l === "Array" && !i[o(a)] && (i[o(a)] = true, e(a, r, s, i));
        }
    } }, plugins: {}, highlight: function(e, t, r) {
      let n = { code: e, grammar: t, language: r };
      return C.hooks.run("before-tokenize", n), n.tokens = C.tokenize(n.code, n.grammar), C.hooks.run("after-tokenize", n), Ae.stringify(C.util.encode(n.tokens), n.language);
    }, matchGrammar: function(e, t, r, n, i, o, s) {
      for (let g in r) {
        if (!r.hasOwnProperty(g) || !r[g])
          continue;
        if (g == s)
          return;
        let _ = r[g];
        _ = C.util.type(_) === "Array" ? _ : [_];
        for (let A = 0; A < _.length; ++A) {
          let R = _[A], E = R.inside, S = !!R.lookbehind, we = !!R.greedy, X = 0, ut = R.alias;
          if (we && !R.pattern.global) {
            let K = R.pattern.toString().match(/[imuy]*$/)[0];
            R.pattern = RegExp(R.pattern.source, K + "g");
          }
          R = R.pattern || R;
          for (let K = n, ne = i; K < t.length; ne += t[K].length, ++K) {
            let Be = t[K];
            if (t.length > e.length)
              return;
            if (Be instanceof Ae)
              continue;
            if (we && K != t.length - 1) {
              R.lastIndex = ne;
              var p = R.exec(e);
              if (!p)
                break;
              var c = p.index + (S ? p[1].length : 0), d = p.index + p[0].length, a = K, l = ne;
              for (let N = t.length; a < N && (l < d || !t[a].type && !t[a - 1].greedy); ++a)
                l += t[a].length, c >= l && (++K, ne = l);
              if (t[K] instanceof Ae)
                continue;
              u = a - K, Be = e.slice(ne, l), p.index -= ne;
            } else {
              R.lastIndex = 0;
              var p = R.exec(Be), u = 1;
            }
            if (!p) {
              if (o)
                break;
              continue;
            }
            S && (X = p[1] ? p[1].length : 0);
            var c = p.index + X, p = p[0].slice(X), d = c + p.length, f = Be.slice(0, c), y = Be.slice(d);
            let ie = [K, u];
            f && (++K, ne += f.length, ie.push(f));
            let Tt = new Ae(g, E ? C.tokenize(p, E) : p, ut, p, we);
            if (ie.push(Tt), y && ie.push(y), Array.prototype.splice.apply(t, ie), u != 1 && C.matchGrammar(e, t, r, K, ne, true, g), o)
              break;
          }
        }
      }
    }, tokenize: function(e, t) {
      let r = [e], n = t.rest;
      if (n) {
        for (let i in n)
          t[i] = n[i];
        delete t.rest;
      }
      return C.matchGrammar(e, r, t, 0, 0, false), r;
    }, hooks: { all: {}, add: function(e, t) {
      let r = C.hooks.all;
      r[e] = r[e] || [], r[e].push(t);
    }, run: function(e, t) {
      let r = C.hooks.all[e];
      if (!(!r || !r.length))
        for (var n = 0, i; i = r[n++]; )
          i(t);
    } }, Token: Ae };
    C.languages.clike = { comment: [{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: true }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: true, greedy: true }], string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: true }, "class-name": { pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i, lookbehind: true, inside: { punctuation: /[.\\]/ } }, keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/, boolean: /\b(?:true|false)\b/, function: /\w+(?=\()/, number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i, operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/, punctuation: /[{}[\];(),.:]/ };
    C.languages.javascript = C.languages.extend("clike", { "class-name": [C.languages.clike["class-name"], { pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/, lookbehind: true }], keyword: [{ pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: true }, { pattern: /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/, lookbehind: true }], number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/, function: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/, operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/ });
    C.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;
    C.languages.insertBefore("javascript", "keyword", { regex: { pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/, lookbehind: true, greedy: true }, "function-variable": { pattern: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/, alias: "function" }, parameter: [{ pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/, lookbehind: true, inside: C.languages.javascript }, { pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i, inside: C.languages.javascript }, { pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/, lookbehind: true, inside: C.languages.javascript }, { pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/, lookbehind: true, inside: C.languages.javascript }], constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/ });
    C.languages.markup && C.languages.markup.tag.addInlined("script", "javascript");
    C.languages.js = C.languages.javascript;
    C.languages.typescript = C.languages.extend("javascript", { keyword: /\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/, builtin: /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/ });
    C.languages.ts = C.languages.typescript;
    function Ae(e, t, r, n, i) {
      this.type = e, this.content = t, this.alias = r, this.length = (n || "").length | 0, this.greedy = !!i;
    }
    Ae.stringify = function(e, t) {
      return typeof e == "string" ? e : Array.isArray(e) ? e.map(function(r) {
        return Ae.stringify(r, t);
      }).join("") : fd(e.type)(e.content);
    };
    function fd(e) {
      return Ia[e] || dd;
    }
    function ka(e) {
      return gd(e, C.languages.javascript);
    }
    function gd(e, t) {
      return C.tokenize(e, t).map((n) => Ae.stringify(n)).join("");
    }
    var Fa = F(qs());
    function Oa(e) {
      return (0, Fa.default)(e);
    }
    var Fn = class e {
      static read(t) {
        let r;
        try {
          r = Da.default.readFileSync(t, "utf-8");
        } catch (e2) {
          return null;
        }
        return e.fromContent(r);
      }
      static fromContent(t) {
        let r = t.split(/\r?\n/);
        return new e(1, r);
      }
      constructor(t, r) {
        this.firstLineNumber = t, this.lines = r;
      }
      get lastLineNumber() {
        return this.firstLineNumber + this.lines.length - 1;
      }
      mapLineAt(t, r) {
        if (t < this.firstLineNumber || t > this.lines.length + this.firstLineNumber)
          return this;
        let n = t - this.firstLineNumber, i = [...this.lines];
        return i[n] = r(i[n]), new e(this.firstLineNumber, i);
      }
      mapLines(t) {
        return new e(this.firstLineNumber, this.lines.map((r, n) => t(r, this.firstLineNumber + n)));
      }
      lineAt(t) {
        return this.lines[t - this.firstLineNumber];
      }
      prependSymbolAt(t, r) {
        return this.mapLines((n, i) => i === t ? `${r} ${n}` : `  ${n}`);
      }
      slice(t, r) {
        let n = this.lines.slice(t - 1, r).join(`
`);
        return new e(t, Oa(n).split(`
`));
      }
      highlight() {
        let t = ka(this.toString());
        return new e(this.firstLineNumber, t.split(`
`));
      }
      toString() {
        return this.lines.join(`
`);
      }
    };
    var yd = { red: ve, gray: Zr, dim: He, bold: de, underline: ue, highlightSource: (e) => e.highlight() };
    var hd = { red: (e) => e, gray: (e) => e, dim: (e) => e, bold: (e) => e, underline: (e) => e, highlightSource: (e) => e };
    function bd({ callsite: e, message: t, originalMethod: r, isPanic: n, callArguments: i }, o) {
      var _a6;
      let s = { functionName: `prisma.${r}()`, message: t, isPanic: n != null ? n : false, callArguments: i };
      if (!e || typeof window < "u" || process.env.NODE_ENV === "production")
        return s;
      let a = e.getLocation();
      if (!a || !a.lineNumber || !a.columnNumber)
        return s;
      let l = Math.max(1, a.lineNumber - 3), u = (_a6 = Fn.read(a.fileName)) == null ? void 0 : _a6.slice(l, a.lineNumber), c = u == null ? void 0 : u.lineAt(a.lineNumber);
      if (u && c) {
        let p = wd(c), d = xd(c);
        if (!d)
          return s;
        s.functionName = `${d.code})`, s.location = a, n || (u = u.mapLineAt(a.lineNumber, (y) => y.slice(0, d.openingBraceIndex))), u = o.highlightSource(u);
        let f = String(u.lastLineNumber).length;
        if (s.contextLines = u.mapLines((y, g) => o.gray(String(g).padStart(f)) + " " + y).mapLines((y) => o.dim(y)).prependSymbolAt(a.lineNumber, o.bold(o.red("\u2192"))), i) {
          let y = p + f + 1;
          y += 2, s.callArguments = (0, Na.default)(i, y).slice(y);
        }
      }
      return s;
    }
    function xd(e) {
      let t = Object.keys(Ee.ModelAction).join("|"), n = new RegExp(String.raw`\.(${t})\(`).exec(e);
      if (n) {
        let i = n.index + n[0].length, o = e.lastIndexOf(" ", n.index) + 1;
        return { code: e.slice(o, i), openingBraceIndex: i };
      }
      return null;
    }
    function wd(e) {
      let t = 0;
      for (let r = 0; r < e.length; r++) {
        if (e.charAt(r) !== " ")
          return t;
        t++;
      }
      return t;
    }
    function Ed({ functionName: e, location: t, message: r, isPanic: n, contextLines: i, callArguments: o }, s) {
      let a = [""], l = t ? " in" : ":";
      if (n ? (a.push(s.red(`Oops, an unknown error occurred! This is ${s.bold("on us")}, you did nothing wrong.`)), a.push(s.red(`It occurred in the ${s.bold(`\`${e}\``)} invocation${l}`))) : a.push(s.red(`Invalid ${s.bold(`\`${e}\``)} invocation${l}`)), t && a.push(s.underline(Pd(t))), i) {
        a.push("");
        let u = [i.toString()];
        o && (u.push(o), u.push(s.dim(")"))), a.push(u.join("")), o && a.push("");
      } else
        a.push(""), o && a.push(o), a.push("");
      return a.push(r), a.join(`
`);
    }
    function Pd(e) {
      let t = [e.fileName];
      return e.lineNumber && t.push(String(e.lineNumber)), e.columnNumber && t.push(String(e.columnNumber)), t.join(":");
    }
    function Qt(e) {
      let t = e.showColors ? yd : hd, r = bd(e, t);
      return Ed(r, t);
    }
    function La(e, t, r, n) {
      return e === Ee.ModelAction.findFirstOrThrow || e === Ee.ModelAction.findUniqueOrThrow ? vd(t, r, n) : n;
    }
    function vd(e, t, r) {
      return (n) => __async(this, null, function* () {
        if ("rejectOnNotFound" in n.args) {
          let o = Qt({ originalMethod: n.clientMethod, callsite: n.callsite, message: "'rejectOnNotFound' option is not supported" });
          throw new se(o, { clientVersion: t });
        }
        return yield r(n).catch((o) => {
          throw o instanceof H && o.code === "P2025" ? new Ve(`No ${e} found`, t) : o;
        });
      });
    }
    function $e(e) {
      return e.replace(/^./, (t) => t.toLowerCase());
    }
    var Td = ["findUnique", "findUniqueOrThrow", "findFirst", "findFirstOrThrow", "create", "update", "upsert", "delete"];
    var _d = ["aggregate", "count", "groupBy"];
    function po(e, t) {
      var _a6;
      let r = (_a6 = e._extensions.getAllModelExtensions(t)) != null ? _a6 : {}, n = [Cd(e, t), Rd(e, t), yr(r), ce("name", () => t), ce("$name", () => t), ce("$parent", () => e._appliedParent)];
      return Oe({}, n);
    }
    function Cd(e, t) {
      let r = $e(t), n = Object.keys(Ee.ModelAction).concat("count");
      return { getKeys() {
        return n;
      }, getPropertyValue(i) {
        let o = i, s = (l) => e._request(l);
        s = La(o, t, e._clientVersion, s);
        let a = (l) => (u) => {
          let c = it(e._errorFormat);
          return e._createPrismaPromise((p) => {
            let d = { args: u, dataPath: [], action: o, model: t, clientMethod: `${r}.${i}`, jsModelName: r, transaction: p, callsite: c };
            return s(__spreadValues(__spreadValues({}, d), l));
          });
        };
        return Td.includes(o) ? co(e, t, a) : Ad(i) ? Aa(e, i, a) : a({});
      } };
    }
    function Ad(e) {
      return _d.includes(e);
    }
    function Rd(e, t) {
      return bt(ce("fields", () => {
        let r = e._runtimeDataModel.models[t];
        return Ra(t, r);
      }));
    }
    function $a(e) {
      return e.replace(/^./, (t) => t.toUpperCase());
    }
    var mo = Symbol();
    function Er(e) {
      let t = [Md(e), ce(mo, () => e), ce("$parent", () => e._appliedParent)], r = e._extensions.getAllClientExtensions();
      return r && t.push(yr(r)), Oe(e, t);
    }
    function Md(e) {
      let t = Object.keys(e._runtimeDataModel.models), r = t.map($e), n = [...new Set(t.concat(r))];
      return bt({ getKeys() {
        return n;
      }, getPropertyValue(i) {
        let o = $a(i);
        if (e._runtimeDataModel.models[o] !== void 0)
          return po(e, o);
        if (e._runtimeDataModel.models[i] !== void 0)
          return po(e, i);
      }, getPropertyDescriptor(i) {
        if (!r.includes(i))
          return { enumerable: false };
      } });
    }
    function On(e) {
      return e[mo] ? e[mo] : e;
    }
    function qa(e) {
      if (typeof e == "function")
        return e(this);
      let t = On(this), r = Object.create(t, { _extensions: { value: this._extensions.append(e) }, _appliedParent: { value: this, configurable: true }, $use: { value: void 0 }, $on: { value: void 0 } });
      return Er(r);
    }
    function Ba({ result: e, modelName: t, select: r, extensions: n }) {
      let i = n.getAllComputedFields(t);
      if (!i)
        return e;
      let o = [], s = [];
      for (let a of Object.values(i)) {
        if (r) {
          if (!r[a.name])
            continue;
          let l = a.needs.filter((u) => !r[u]);
          l.length > 0 && s.push(hr(l));
        }
        Sd(e, a.needs) && o.push(Id(a, Oe(e, o)));
      }
      return o.length > 0 || s.length > 0 ? Oe(e, [...o, ...s]) : e;
    }
    function Sd(e, t) {
      return t.every((r) => Ui(e, r));
    }
    function Id(e, t) {
      return bt(ce(e.name, () => e.compute(t)));
    }
    function Dn({ visitor: e, result: t, args: r, runtimeDataModel: n, modelName: i }) {
      var _a6;
      if (Array.isArray(t)) {
        for (let s = 0; s < t.length; s++)
          t[s] = Dn({ result: t[s], args: r, modelName: i, runtimeDataModel: n, visitor: e });
        return t;
      }
      let o = (_a6 = e(t, i, r)) != null ? _a6 : t;
      return r.include && ja({ includeOrSelect: r.include, result: o, parentModelName: i, runtimeDataModel: n, visitor: e }), r.select && ja({ includeOrSelect: r.select, result: o, parentModelName: i, runtimeDataModel: n, visitor: e }), o;
    }
    function ja({ includeOrSelect: e, result: t, parentModelName: r, runtimeDataModel: n, visitor: i }) {
      for (let [o, s] of Object.entries(e)) {
        if (!s || t[o] == null)
          continue;
        let l = n.models[r].fields.find((c) => c.name === o);
        if (!l || l.kind !== "object" || !l.relationName)
          continue;
        let u = typeof s == "object" ? s : {};
        t[o] = Dn({ visitor: i, result: t[o], args: u, modelName: l.type, runtimeDataModel: n });
      }
    }
    function Va({ result: e, modelName: t, args: r, extensions: n, runtimeDataModel: i }) {
      return n.isEmpty() || e == null || typeof e != "object" || !i.models[t] ? e : Dn({ result: e, args: r != null ? r : {}, modelName: t, runtimeDataModel: i, visitor: (s, a, l) => Ba({ result: s, modelName: $e(a), select: l.select, extensions: n }) });
    }
    function Ua(e) {
      if (e instanceof fe)
        return kd(e);
      if (Array.isArray(e)) {
        let r = [e[0]];
        for (let n = 1; n < e.length; n++)
          r[n] = Pr(e[n]);
        return r;
      }
      let t = {};
      for (let r in e)
        t[r] = Pr(e[r]);
      return t;
    }
    function kd(e) {
      return new fe(e.strings, e.values);
    }
    function Pr(e) {
      if (typeof e != "object" || e == null || e instanceof ke || jt(e))
        return e;
      if (Bt(e))
        return new Ne(e.toFixed());
      if (Lt(e))
        return /* @__PURE__ */ new Date(+e);
      if (ArrayBuffer.isView(e))
        return e.slice(0);
      if (Array.isArray(e)) {
        let t = e.length, r;
        for (r = Array(t); t--; )
          r[t] = Pr(e[t]);
        return r;
      }
      if (typeof e == "object") {
        let t = {};
        for (let r in e)
          r === "__proto__" ? Object.defineProperty(t, r, { value: Pr(e[r]), configurable: true, enumerable: true, writable: true }) : t[r] = Pr(e[r]);
        return t;
      }
      yt(e, "Unknown value");
    }
    function Qa(e, t, r, n = 0) {
      return e._createPrismaPromise((i) => {
        var _a6, _b2;
        let o = t.customDataProxyFetch;
        return "transaction" in t && i !== void 0 && (((_a6 = t.transaction) == null ? void 0 : _a6.kind) === "batch" && t.transaction.lock.then(), t.transaction = i), n === r.length ? e._executeRequest(t) : r[n]({ model: t.model, operation: t.model ? t.action : t.clientMethod, args: Ua((_b2 = t.args) != null ? _b2 : {}), __internalParams: t, query: (s, a = t) => {
          let l = a.customDataProxyFetch;
          return a.customDataProxyFetch = Wa(o, l), a.args = s, Qa(e, a, r, n + 1);
        } });
      });
    }
    function Ja(e, t) {
      let { jsModelName: r, action: n, clientMethod: i } = t, o = r ? n : i;
      if (e._extensions.isEmpty())
        return e._executeRequest(t);
      let s = e._extensions.getAllQueryCallbacks(r != null ? r : "$none", o);
      return Qa(e, t, s);
    }
    function Ga(e) {
      return (t) => {
        let r = { requests: t }, n = t[0].extensions.getAllBatchQueryCallbacks();
        return n.length ? Ha(r, n, 0, e) : e(r);
      };
    }
    function Ha(e, t, r, n) {
      if (r === t.length)
        return n(e);
      let i = e.customDataProxyFetch, o = e.requests[0].transaction;
      return t[r]({ args: { queries: e.requests.map((s) => ({ model: s.modelName, operation: s.action, args: s.args })), transaction: o ? { isolationLevel: o.kind === "batch" ? o.isolationLevel : void 0 } : void 0 }, __internalParams: e, query(s, a = e) {
        let l = a.customDataProxyFetch;
        return a.customDataProxyFetch = Wa(i, l), Ha(a, t, r + 1, n);
      } });
    }
    var Ka = (e) => e;
    function Wa(e = Ka, t = Ka) {
      return (r) => e(t(r));
    }
    function Ya(e, t, r) {
      let n = $e(r);
      return !t.result || !(t.result.$allModels || t.result[n]) ? e : Fd(__spreadValues(__spreadValues(__spreadValues({}, e), za(t.name, e, t.result.$allModels)), za(t.name, e, t.result[n])));
    }
    function Fd(e) {
      let t = new Fe(), r = (n, i) => t.getOrCreate(n, () => i.has(n) ? [n] : (i.add(n), e[n] ? e[n].needs.flatMap((o) => r(o, i)) : [n]));
      return Ot(e, (n) => __spreadProps(__spreadValues({}, n), { needs: r(n.name, /* @__PURE__ */ new Set()) }));
    }
    function za(e, t, r) {
      return r ? Ot(r, ({ needs: n, compute: i }, o) => ({ name: o, needs: n ? Object.keys(n).filter((s) => n[s]) : [], compute: Od(t, o, i) })) : {};
    }
    function Od(e, t, r) {
      var _a6;
      let n = (_a6 = e == null ? void 0 : e[t]) == null ? void 0 : _a6.compute;
      return n ? (i) => r(__spreadProps(__spreadValues({}, i), { [t]: n(i) })) : r;
    }
    function Za(e, t) {
      if (!t)
        return e;
      let r = __spreadValues({}, e);
      for (let n of Object.values(t))
        if (e[n.name])
          for (let i of n.needs)
            r[i] = true;
      return r;
    }
    var Nn = class {
      constructor(t, r) {
        this.extension = t;
        this.previous = r;
        this.computedFieldsCache = new Fe();
        this.modelExtensionsCache = new Fe();
        this.queryCallbacksCache = new Fe();
        this.clientExtensions = cr(() => {
          var _a6, _b2;
          return this.extension.client ? __spreadValues(__spreadValues({}, (_a6 = this.previous) == null ? void 0 : _a6.getAllClientExtensions()), this.extension.client) : (_b2 = this.previous) == null ? void 0 : _b2.getAllClientExtensions();
        });
        this.batchCallbacks = cr(() => {
          var _a6, _b2, _c;
          let t2 = (_b2 = (_a6 = this.previous) == null ? void 0 : _a6.getAllBatchQueryCallbacks()) != null ? _b2 : [], r2 = (_c = this.extension.query) == null ? void 0 : _c.$__internalBatch;
          return r2 ? t2.concat(r2) : t2;
        });
      }
      getAllComputedFields(t) {
        return this.computedFieldsCache.getOrCreate(t, () => {
          var _a6;
          return Ya((_a6 = this.previous) == null ? void 0 : _a6.getAllComputedFields(t), this.extension, t);
        });
      }
      getAllClientExtensions() {
        return this.clientExtensions.get();
      }
      getAllModelExtensions(t) {
        return this.modelExtensionsCache.getOrCreate(t, () => {
          var _a6, _b2;
          let r = $e(t);
          return !this.extension.model || !(this.extension.model[r] || this.extension.model.$allModels) ? (_a6 = this.previous) == null ? void 0 : _a6.getAllModelExtensions(t) : __spreadValues(__spreadValues(__spreadValues({}, (_b2 = this.previous) == null ? void 0 : _b2.getAllModelExtensions(t)), this.extension.model.$allModels), this.extension.model[r]);
        });
      }
      getAllQueryCallbacks(t, r) {
        return this.queryCallbacksCache.getOrCreate(`${t}:${r}`, () => {
          var _a6, _b2;
          let n = (_b2 = (_a6 = this.previous) == null ? void 0 : _a6.getAllQueryCallbacks(t, r)) != null ? _b2 : [], i = [], o = this.extension.query;
          return !o || !(o[t] || o.$allModels || o[r] || o.$allOperations) ? n : (o[t] !== void 0 && (o[t][r] !== void 0 && i.push(o[t][r]), o[t].$allOperations !== void 0 && i.push(o[t].$allOperations)), t !== "$none" && o.$allModels !== void 0 && (o.$allModels[r] !== void 0 && i.push(o.$allModels[r]), o.$allModels.$allOperations !== void 0 && i.push(o.$allModels.$allOperations)), o[r] !== void 0 && i.push(o[r]), o.$allOperations !== void 0 && i.push(o.$allOperations), n.concat(i));
        });
      }
      getAllBatchQueryCallbacks() {
        return this.batchCallbacks.get();
      }
    };
    var Ln = class e {
      constructor(t) {
        this.head = t;
      }
      static empty() {
        return new e();
      }
      static single(t) {
        return new e(new Nn(t));
      }
      isEmpty() {
        return this.head === void 0;
      }
      append(t) {
        return new e(new Nn(t, this.head));
      }
      getAllComputedFields(t) {
        var _a6;
        return (_a6 = this.head) == null ? void 0 : _a6.getAllComputedFields(t);
      }
      getAllClientExtensions() {
        var _a6;
        return (_a6 = this.head) == null ? void 0 : _a6.getAllClientExtensions();
      }
      getAllModelExtensions(t) {
        var _a6;
        return (_a6 = this.head) == null ? void 0 : _a6.getAllModelExtensions(t);
      }
      getAllQueryCallbacks(t, r) {
        var _a6, _b2;
        return (_b2 = (_a6 = this.head) == null ? void 0 : _a6.getAllQueryCallbacks(t, r)) != null ? _b2 : [];
      }
      getAllBatchQueryCallbacks() {
        var _a6, _b2;
        return (_b2 = (_a6 = this.head) == null ? void 0 : _a6.getAllBatchQueryCallbacks()) != null ? _b2 : [];
      }
    };
    var Xa = $("prisma:client");
    var el = { Vercel: "vercel", "Netlify CI": "netlify" };
    function tl({ postinstall: e, ciName: t, clientVersion: r }) {
      if (Xa("checkPlatformCaching:postinstall", e), Xa("checkPlatformCaching:ciName", t), e === true && t && t in el) {
        let n = `Prisma has detected that this project was built on ${t}, which caches dependencies. This leads to an outdated Prisma Client because Prisma's auto-generation isn't triggered. To fix this, make sure to run the \`prisma generate\` command during the build process.

Learn how: https://pris.ly/d/${el[t]}-build`;
        throw console.error(n), new k(n, r);
      }
    }
    function rl(e, t) {
      return e ? e.datasources ? e.datasources : e.datasourceUrl ? { [t[0]]: { url: e.datasourceUrl } } : {} : {};
    }
    function vr({ error: e, user_facing_error: t }, r) {
      return t.error_code ? new H(t.message, { code: t.error_code, clientVersion: r, meta: t.meta, batchRequestIdx: t.batch_request_idx }) : new W(e, { clientVersion: r, batchRequestIdx: t.batch_request_idx });
    }
    var Jt = class {
    };
    var al = F(require("fs"));
    var Tr = F(require("path"));
    function $n(e) {
      let { runtimeBinaryTarget: t } = e;
      return `Add "${t}" to \`binaryTargets\` in the "schema.prisma" file and run \`prisma generate\` after saving it:

${Dd(e)}`;
    }
    function Dd(e) {
      let { generator: t, generatorBinaryTargets: r, runtimeBinaryTarget: n } = e, i = { fromEnvVar: null, value: n }, o = [...r, i];
      return Bi(__spreadProps(__spreadValues({}, t), { binaryTargets: o }));
    }
    function ot(e) {
      let { runtimeBinaryTarget: t } = e;
      return `Prisma Client could not locate the Query Engine for runtime "${t}".`;
    }
    function st(e) {
      let { searchedLocations: t } = e;
      return `The following locations have been searched:
${[...new Set(t)].map((i) => `  ${i}`).join(`
`)}`;
    }
    function nl(e) {
      let { runtimeBinaryTarget: t } = e;
      return `${ot(e)}

This happened because \`binaryTargets\` have been pinned, but the actual deployment also required "${t}".
${$n(e)}

${st(e)}`;
    }
    function qn(e) {
      return `We would appreciate if you could take the time to share some information with us.
Please help us by answering a few questions: https://pris.ly/${e}`;
    }
    function Bn(e) {
      let { errorStack: t } = e;
      return (t == null ? void 0 : t.match(/\/\.next|\/next@|\/next\//)) ? `

We detected that you are using Next.js, learn how to fix this: https://pris.ly/d/engine-not-found-nextjs.` : "";
    }
    function il(e) {
      let { queryEngineName: t } = e;
      return `${ot(e)}${Bn(e)}

This is likely caused by a bundler that has not copied "${t}" next to the resulting bundle.
Ensure that "${t}" has been copied next to the bundle or in "${e.expectedLocation}".

${qn("engine-not-found-bundler-investigation")}

${st(e)}`;
    }
    function ol(e) {
      var _a6;
      let { runtimeBinaryTarget: t, generatorBinaryTargets: r } = e, n = r.find((i) => i.native);
      return `${ot(e)}

This happened because Prisma Client was generated for "${(_a6 = n == null ? void 0 : n.value) != null ? _a6 : "unknown"}", but the actual deployment required "${t}".
${$n(e)}

${st(e)}`;
    }
    function sl(e) {
      let { queryEngineName: t } = e;
      return `${ot(e)}${Bn(e)}

This is likely caused by tooling that has not copied "${t}" to the deployment folder.
Ensure that you ran \`prisma generate\` and that "${t}" has been copied to "${e.expectedLocation}".

${qn("engine-not-found-tooling-investigation")}

${st(e)}`;
    }
    var Nd = $("prisma:client:engines:resolveEnginePath");
    var Ld = () => new RegExp("runtime[\\\\/]library\\.m?js$");
    function ll(e, t) {
      return __async(this, null, function* () {
        var _a6, _b2, _c;
        let r = (_a6 = { binary: process.env.PRISMA_QUERY_ENGINE_BINARY, library: process.env.PRISMA_QUERY_ENGINE_LIBRARY }[e]) != null ? _a6 : t.prismaPath;
        if (r !== void 0)
          return r;
        let { enginePath: n, searchedLocations: i } = yield $d(e, t);
        if (Nd("enginePath", n), n !== void 0 && e === "binary" && Di(n), n !== void 0)
          return t.prismaPath = n;
        let o = yield ft(), s = (_c = (_b2 = t.generator) == null ? void 0 : _b2.binaryTargets) != null ? _c : [], a = s.some((d) => d.native), l = !s.some((d) => d.value === o), u = __filename.match(Ld()) === null, c = { searchedLocations: i, generatorBinaryTargets: s, generator: t.generator, runtimeBinaryTarget: o, queryEngineName: ul(e, o), expectedLocation: Tr.default.relative(process.cwd(), t.dirname), errorStack: new Error().stack }, p;
        throw a && l ? p = ol(c) : l ? p = nl(c) : u ? p = il(c) : p = sl(c), new k(p, t.clientVersion);
      });
    }
    function $d(engineType, config) {
      return __async(this, null, function* () {
        var _a6, _b2, _c;
        let binaryTarget = yield ft(), searchedLocations = [], dirname = eval("__dirname"), searchLocations = [config.dirname, Tr.default.resolve(dirname, ".."), (_c = (_b2 = (_a6 = config.generator) == null ? void 0 : _a6.output) == null ? void 0 : _b2.value) != null ? _c : dirname, Tr.default.resolve(dirname, "../../../.prisma/client"), "/tmp/prisma-engines", config.cwd];
        __filename.includes("resolveEnginePath") && searchLocations.push(js());
        for (let e of searchLocations) {
          let t = ul(engineType, binaryTarget), r = Tr.default.join(e, t);
          if (searchedLocations.push(e), al.default.existsSync(r))
            return { enginePath: r, searchedLocations };
        }
        return { enginePath: void 0, searchedLocations };
      });
    }
    function ul(e, t) {
      return e === "library" ? en(t, "fs") : `query-engine-${t}${t === "windows" ? ".exe" : ""}`;
    }
    function jn(e, t) {
      return { batch: e, transaction: (t == null ? void 0 : t.kind) === "batch" ? { isolationLevel: t.options.isolationLevel } : void 0 };
    }
    var fo = F(Vi());
    function cl(e) {
      return e ? e.replace(/".*"/g, '"X"').replace(/[\s:\[]([+-]?([0-9]*[.])?[0-9]+)/g, (t) => `${t[0]}5`) : "";
    }
    function pl(e) {
      return e.split(`
`).map((t) => t.replace(/^\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)\s*/, "").replace(/\+\d+\s*ms$/, "")).join(`
`);
    }
    var dl = F(Ws());
    function ml({ title: e, user: t = "prisma", repo: r = "prisma", template: n = "bug_report.yml", body: i }) {
      return (0, dl.default)({ user: t, repo: r, template: n, title: e, body: i });
    }
    function fl({ version: e, binaryTarget: t, title: r, description: n, engineVersion: i, database: o, query: s }) {
      var _a6, _b2;
      let a = os(6e3 - ((_a6 = s == null ? void 0 : s.length) != null ? _a6 : 0)), l = pl((0, fo.default)(a)), u = n ? `# Description
\`\`\`
${n}
\`\`\`` : "", c = (0, fo.default)(`Hi Prisma Team! My Prisma Client just crashed. This is the report:
## Versions

| Name            | Version            |
|-----------------|--------------------|
| Node            | ${(_b2 = process.version) == null ? void 0 : _b2.padEnd(19)}| 
| OS              | ${t == null ? void 0 : t.padEnd(19)}|
| Prisma Client   | ${e == null ? void 0 : e.padEnd(19)}|
| Query Engine    | ${i == null ? void 0 : i.padEnd(19)}|
| Database        | ${o == null ? void 0 : o.padEnd(19)}|

${u}

## Logs
\`\`\`
${l}
\`\`\`

## Client Snippet
\`\`\`ts
// PLEASE FILL YOUR CODE SNIPPET HERE
\`\`\`

## Schema
\`\`\`prisma
// PLEASE ADD YOUR SCHEMA HERE IF POSSIBLE
\`\`\`

## Prisma Engine Query
\`\`\`
${s ? cl(s) : ""}
\`\`\`
`), p = ml({ title: r, body: c });
      return `${r}

This is a non-recoverable error which probably happens when the Prisma Query Engine has a panic.

${ue(p)}

If you want the Prisma team to look into it, please open the link above \u{1F64F}
To increase the chance of success, please post your schema and a snippet of
how you used Prisma Client in the issue. 
`;
    }
    var qd = "Cloudflare-Workers";
    var Bd = "node";
    function gl() {
      var _a6, _b2, _c;
      return typeof Netlify == "object" ? "netlify" : typeof EdgeRuntime == "string" ? "edge-light" : ((_a6 = globalThis.navigator) == null ? void 0 : _a6.userAgent) === qd ? "workerd" : globalThis.Deno ? "deno" : globalThis.__lagon__ ? "lagon" : ((_c = (_b2 = globalThis.process) == null ? void 0 : _b2.release) == null ? void 0 : _c.name) === Bd ? "node" : globalThis.Bun ? "bun" : globalThis.fastly ? "fastly" : "unknown";
    }
    function Vn({ inlineDatasources: e, overrideDatasources: t, env: r, clientVersion: n }) {
      var _a6, _b2;
      let i, o = Object.keys(e)[0], s = (_a6 = e[o]) == null ? void 0 : _a6.url, a = (_b2 = t[o]) == null ? void 0 : _b2.url;
      if (o === void 0 ? i = void 0 : a ? i = a : (s == null ? void 0 : s.value) ? i = s.value : (s == null ? void 0 : s.fromEnvVar) && (i = r[s.fromEnvVar]), (s == null ? void 0 : s.fromEnvVar) !== void 0 && i === void 0)
        throw new k(`error: Environment variable not found: ${s.fromEnvVar}.`, n);
      if (i === void 0)
        throw new k("error: Missing URL environment variable, value, or override.", n);
      return i;
    }
    var Un = class extends Error {
      constructor(t, r) {
        super(t), this.clientVersion = r.clientVersion, this.cause = r.cause;
      }
      get [Symbol.toStringTag]() {
        return this.name;
      }
    };
    var ye = class extends Un {
      constructor(t, r) {
        var _a6;
        super(t, r), this.isRetryable = (_a6 = r.isRetryable) != null ? _a6 : true;
      }
    };
    function I(e, t) {
      return __spreadProps(__spreadValues({}, e), { isRetryable: t });
    }
    var Gt = class extends ye {
      constructor(r) {
        super("This request must be retried", I(r, true));
        this.name = "ForcedRetryError";
        this.code = "P5001";
      }
    };
    v(Gt, "ForcedRetryError");
    var wt = class extends ye {
      constructor(r, n) {
        super(r, I(n, false));
        this.name = "InvalidDatasourceError";
        this.code = "P6001";
      }
    };
    v(wt, "InvalidDatasourceError");
    var Et = class extends ye {
      constructor(r, n) {
        super(r, I(n, false));
        this.name = "NotImplementedYetError";
        this.code = "P5004";
      }
    };
    v(Et, "NotImplementedYetError");
    var j = class extends ye {
      constructor(t, r) {
        super(t, r), this.response = r.response;
        let n = this.response.headers.get("prisma-request-id");
        if (n) {
          let i = `(The request id was: ${n})`;
          this.message = this.message + " " + i;
        }
      }
    };
    var Pt = class extends j {
      constructor(r) {
        super("Schema needs to be uploaded", I(r, true));
        this.name = "SchemaMissingError";
        this.code = "P5005";
      }
    };
    v(Pt, "SchemaMissingError");
    var go = "This request could not be understood by the server";
    var _r = class extends j {
      constructor(r, n, i) {
        super(n || go, I(r, false));
        this.name = "BadRequestError";
        this.code = "P5000";
        i && (this.code = i);
      }
    };
    v(_r, "BadRequestError");
    var Cr = class extends j {
      constructor(r, n) {
        super("Engine not started: healthcheck timeout", I(r, true));
        this.name = "HealthcheckTimeoutError";
        this.code = "P5013";
        this.logs = n;
      }
    };
    v(Cr, "HealthcheckTimeoutError");
    var Ar = class extends j {
      constructor(r, n, i) {
        super(n, I(r, true));
        this.name = "EngineStartupError";
        this.code = "P5014";
        this.logs = i;
      }
    };
    v(Ar, "EngineStartupError");
    var Rr = class extends j {
      constructor(r) {
        super("Engine version is not supported", I(r, false));
        this.name = "EngineVersionNotSupportedError";
        this.code = "P5012";
      }
    };
    v(Rr, "EngineVersionNotSupportedError");
    var yo = "Request timed out";
    var Mr = class extends j {
      constructor(r, n = yo) {
        super(n, I(r, false));
        this.name = "GatewayTimeoutError";
        this.code = "P5009";
      }
    };
    v(Mr, "GatewayTimeoutError");
    var jd = "Interactive transaction error";
    var Sr = class extends j {
      constructor(r, n = jd) {
        super(n, I(r, false));
        this.name = "InteractiveTransactionError";
        this.code = "P5015";
      }
    };
    v(Sr, "InteractiveTransactionError");
    var Vd = "Request parameters are invalid";
    var Ir = class extends j {
      constructor(r, n = Vd) {
        super(n, I(r, false));
        this.name = "InvalidRequestError";
        this.code = "P5011";
      }
    };
    v(Ir, "InvalidRequestError");
    var ho = "Requested resource does not exist";
    var kr = class extends j {
      constructor(r, n = ho) {
        super(n, I(r, false));
        this.name = "NotFoundError";
        this.code = "P5003";
      }
    };
    v(kr, "NotFoundError");
    var bo = "Unknown server error";
    var Ht = class extends j {
      constructor(r, n, i) {
        super(n || bo, I(r, true));
        this.name = "ServerError";
        this.code = "P5006";
        this.logs = i;
      }
    };
    v(Ht, "ServerError");
    var xo = "Unauthorized, check your connection string";
    var Fr = class extends j {
      constructor(r, n = xo) {
        super(n, I(r, false));
        this.name = "UnauthorizedError";
        this.code = "P5007";
      }
    };
    v(Fr, "UnauthorizedError");
    var wo = "Usage exceeded, retry again later";
    var Or = class extends j {
      constructor(r, n = wo) {
        super(n, I(r, true));
        this.name = "UsageExceededError";
        this.code = "P5008";
      }
    };
    v(Or, "UsageExceededError");
    function Ud(e) {
      return __async(this, null, function* () {
        let t;
        try {
          t = yield e.text();
        } catch (e2) {
          return { type: "EmptyError" };
        }
        try {
          let r = JSON.parse(t);
          if (typeof r == "string")
            switch (r) {
              case "InternalDataProxyError":
                return { type: "DataProxyError", body: r };
              default:
                return { type: "UnknownTextError", body: r };
            }
          if (typeof r == "object" && r !== null) {
            if ("is_panic" in r && "message" in r && "error_code" in r)
              return { type: "QueryEngineError", body: r };
            if ("EngineNotStarted" in r || "InteractiveTransactionMisrouted" in r || "InvalidRequestError" in r) {
              let n = Object.values(r)[0].reason;
              return typeof n == "string" && !["SchemaMissing", "EngineVersionNotSupported"].includes(n) ? { type: "UnknownJsonError", body: r } : { type: "DataProxyError", body: r };
            }
          }
          return { type: "UnknownJsonError", body: r };
        } catch (e2) {
          return t === "" ? { type: "EmptyError" } : { type: "UnknownTextError", body: t };
        }
      });
    }
    function Dr(e, t) {
      return __async(this, null, function* () {
        if (e.ok)
          return;
        let r = { clientVersion: t, response: e }, n = yield Ud(e);
        if (n.type === "QueryEngineError")
          throw new H(n.body.message, { code: n.body.error_code, clientVersion: t });
        if (n.type === "DataProxyError") {
          if (n.body === "InternalDataProxyError")
            throw new Ht(r, "Internal Data Proxy error");
          if ("EngineNotStarted" in n.body) {
            if (n.body.EngineNotStarted.reason === "SchemaMissing")
              return new Pt(r);
            if (n.body.EngineNotStarted.reason === "EngineVersionNotSupported")
              throw new Rr(r);
            if ("EngineStartupError" in n.body.EngineNotStarted.reason) {
              let { msg: i, logs: o } = n.body.EngineNotStarted.reason.EngineStartupError;
              throw new Ar(r, i, o);
            }
            if ("KnownEngineStartupError" in n.body.EngineNotStarted.reason) {
              let { msg: i, error_code: o } = n.body.EngineNotStarted.reason.KnownEngineStartupError;
              throw new k(i, t, o);
            }
            if ("HealthcheckTimeout" in n.body.EngineNotStarted.reason) {
              let { logs: i } = n.body.EngineNotStarted.reason.HealthcheckTimeout;
              throw new Cr(r, i);
            }
          }
          if ("InteractiveTransactionMisrouted" in n.body) {
            let i = { IDParseError: "Could not parse interactive transaction ID", NoQueryEngineFoundError: "Could not find Query Engine for the specified host and transaction ID", TransactionStartError: "Could not start interactive transaction" };
            throw new Sr(r, i[n.body.InteractiveTransactionMisrouted.reason]);
          }
          if ("InvalidRequestError" in n.body)
            throw new Ir(r, n.body.InvalidRequestError.reason);
        }
        if (e.status === 401 || e.status === 403)
          throw new Fr(r, Wt(xo, n));
        if (e.status === 404)
          return new kr(r, Wt(ho, n));
        if (e.status === 429)
          throw new Or(r, Wt(wo, n));
        if (e.status === 504)
          throw new Mr(r, Wt(yo, n));
        if (e.status >= 500)
          throw new Ht(r, Wt(bo, n));
        if (e.status >= 400)
          throw new _r(r, Wt(go, n));
      });
    }
    function Wt(e, t) {
      return t.type === "EmptyError" ? e : `${e}: ${JSON.stringify(t)}`;
    }
    function yl(e) {
      let t = Math.pow(2, e) * 50, r = Math.ceil(Math.random() * t) - Math.ceil(t / 2), n = t + r;
      return new Promise((i) => setTimeout(() => i(n), n));
    }
    function hl(e) {
      var _a6;
      if (!!((_a6 = e.generator) == null ? void 0 : _a6.previewFeatures.some((r) => r.toLowerCase().includes("metrics"))))
        throw new k("The `metrics` preview feature is not yet available with Accelerate.\nPlease remove `metrics` from the `previewFeatures` in your schema.\n\nMore information about Accelerate: https://pris.ly/d/accelerate", e.clientVersion);
    }
    function Kd(e) {
      return e[0] * 1e3 + e[1] / 1e6;
    }
    function bl(e) {
      return new Date(Kd(e));
    }
    var xl = { "@prisma/debug": "workspace:*", "@prisma/engines-version": "5.8.0-37.0a83d8541752d7582de2ebc1ece46519ce72a848", "@prisma/fetch-engine": "workspace:*", "@prisma/get-platform": "workspace:*" };
    var Nr = class extends ye {
      constructor(r, n) {
        super(`Cannot fetch data from service:
${r}`, I(n, true));
        this.name = "RequestError";
        this.code = "P5010";
      }
    };
    v(Nr, "RequestError");
    function vt(e, t, r = (n) => n) {
      return __async(this, null, function* () {
        var _a6;
        let n = t.clientVersion;
        try {
          return typeof fetch == "function" ? yield r(fetch)(e, t) : yield r(Eo)(e, t);
        } catch (i) {
          let o = (_a6 = i.message) != null ? _a6 : "Unknown error";
          throw new Nr(o, { clientVersion: n });
        }
      });
    }
    function Jd(e) {
      return __spreadProps(__spreadValues({}, e.headers), { "Content-Type": "application/json" });
    }
    function Gd(e) {
      return { method: e.method, headers: Jd(e) };
    }
    function Hd(e, t) {
      return { text: () => Promise.resolve(Buffer.concat(e).toString()), json: () => Promise.resolve().then(() => JSON.parse(Buffer.concat(e).toString())), ok: t.statusCode >= 200 && t.statusCode <= 299, status: t.statusCode, url: t.url, headers: new Po(t.headers) };
    }
    function Eo(_0) {
      return __async(this, arguments, function* (e, t = {}) {
        let r = Wd("https"), n = Gd(t), i = [], { origin: o } = new URL(e);
        return new Promise((s, a) => {
          var _a6;
          let l = r.request(e, n, (u) => {
            let { statusCode: c, headers: { location: p } } = u;
            c >= 301 && c <= 399 && p && (p.startsWith("http") === false ? s(Eo(`${o}${p}`, t)) : s(Eo(p, t))), u.on("data", (d) => i.push(d)), u.on("end", () => s(Hd(i, u))), u.on("error", a);
          });
          l.on("error", a), l.end((_a6 = t.body) != null ? _a6 : "");
        });
      });
    }
    var Wd = typeof require < "u" ? require : () => {
    };
    var Po = class {
      constructor(t = {}) {
        this.headers = /* @__PURE__ */ new Map();
        for (let [r, n] of Object.entries(t))
          if (typeof n == "string")
            this.headers.set(r, n);
          else if (Array.isArray(n))
            for (let i of n)
              this.headers.set(r, i);
      }
      append(t, r) {
        this.headers.set(t, r);
      }
      delete(t) {
        this.headers.delete(t);
      }
      get(t) {
        var _a6;
        return (_a6 = this.headers.get(t)) != null ? _a6 : null;
      }
      has(t) {
        return this.headers.has(t);
      }
      set(t, r) {
        this.headers.set(t, r);
      }
      forEach(t, r) {
        for (let [n, i] of this.headers)
          t.call(r, i, n, this);
      }
    };
    var zd = /^[1-9][0-9]*\.[0-9]+\.[0-9]+$/;
    var wl = $("prisma:client:dataproxyEngine");
    function Yd(e, t) {
      return __async(this, null, function* () {
        var _a6, _b2, _c;
        let r = xl["@prisma/engines-version"], n = (_a6 = t.clientVersion) != null ? _a6 : "unknown";
        if (process.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION)
          return process.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION;
        if (e.includes("accelerate") && n !== "0.0.0" && n !== "in-memory")
          return n;
        let [i, o] = (_b2 = n == null ? void 0 : n.split("-")) != null ? _b2 : [];
        if (o === void 0 && zd.test(i))
          return i;
        if (o !== void 0 || n === "0.0.0" || n === "in-memory") {
          if (e.startsWith("localhost") || e.startsWith("127.0.0.1"))
            return "0.0.0";
          let [s] = (_c = r.split("-")) != null ? _c : [], [a, l, u] = s.split("."), c = Zd(`<=${a}.${l}.${u}`), p = yield vt(c, { clientVersion: n });
          if (!p.ok)
            throw new Error(`Failed to fetch stable Prisma version, unpkg.com status ${p.status} ${p.statusText}, response body: ${(yield p.text()) || "<empty body>"}`);
          let d = yield p.text();
          wl("length of body fetched from unpkg.com", d.length);
          let f;
          try {
            f = JSON.parse(d);
          } catch (y) {
            throw console.error("JSON.parse error: body fetched from unpkg.com: ", d), y;
          }
          return f.version;
        }
        throw new Et("Only `major.minor.patch` versions are supported by Accelerate.", { clientVersion: n });
      });
    }
    function El(e, t) {
      return __async(this, null, function* () {
        let r = yield Yd(e, t);
        return wl("version", r), r;
      });
    }
    function Zd(e) {
      return encodeURI(`https://unpkg.com/prisma@${e}/package.json`);
    }
    var Pl = 3;
    var vo = $("prisma:client:dataproxyEngine");
    var To = class {
      constructor({ apiKey: t, tracingHelper: r, logLevel: n, logQueries: i, engineHash: o }) {
        this.apiKey = t, this.tracingHelper = r, this.logLevel = n, this.logQueries = i, this.engineHash = o;
      }
      build({ traceparent: t, interactiveTransaction: r } = {}) {
        let n = { Authorization: `Bearer ${this.apiKey}`, "Prisma-Engine-Hash": this.engineHash };
        this.tracingHelper.isEnabled() && (n.traceparent = t != null ? t : this.tracingHelper.getTraceParent()), r && (n["X-transaction-id"] = r.id);
        let i = this.buildCaptureSettings();
        return i.length > 0 && (n["X-capture-telemetry"] = i.join(", ")), n;
      }
      buildCaptureSettings() {
        let t = [];
        return this.tracingHelper.isEnabled() && t.push("tracing"), this.logLevel && t.push(this.logLevel), this.logQueries && t.push("query"), t;
      }
    };
    var Lr = class extends Jt {
      constructor(t) {
        super(), hl(t), this.config = t, this.env = __spreadValues(__spreadValues({}, this.config.env), process.env), this.inlineSchema = t.inlineSchema, this.inlineDatasources = t.inlineDatasources, this.inlineSchemaHash = t.inlineSchemaHash, this.clientVersion = t.clientVersion, this.engineHash = t.engineVersion, this.logEmitter = t.logEmitter, this.tracingHelper = this.config.tracingHelper;
      }
      apiKey() {
        return this.headerBuilder.apiKey;
      }
      version() {
        return this.engineHash;
      }
      start() {
        return __async(this, null, function* () {
          this.startPromise !== void 0 && (yield this.startPromise), this.startPromise = (() => __async(this, null, function* () {
            let [t, r] = this.extractHostAndApiKey();
            this.host = t, this.headerBuilder = new To({ apiKey: r, tracingHelper: this.tracingHelper, logLevel: this.config.logLevel, logQueries: this.config.logQueries, engineHash: this.engineHash }), this.remoteClientVersion = yield El(t, this.config), vo("host", this.host);
          }))(), yield this.startPromise;
        });
      }
      stop() {
        return __async(this, null, function* () {
        });
      }
      propagateResponseExtensions(t) {
        var _a6, _b2;
        ((_a6 = t == null ? void 0 : t.logs) == null ? void 0 : _a6.length) && t.logs.forEach((r) => {
          switch (r.level) {
            case "debug":
            case "error":
            case "trace":
            case "warn":
            case "info":
              break;
            case "query": {
              let n = typeof r.attributes.query == "string" ? r.attributes.query : "";
              if (!this.tracingHelper.isEnabled()) {
                let [i] = n.split("/* traceparent");
                n = i;
              }
              this.logEmitter.emit("query", { query: n, timestamp: bl(r.timestamp), duration: Number(r.attributes.duration_ms), params: r.attributes.params, target: r.attributes.target });
            }
          }
        }), ((_b2 = t == null ? void 0 : t.traces) == null ? void 0 : _b2.length) && this.tracingHelper.createEngineSpan({ span: true, spans: t.traces });
      }
      onBeforeExit() {
        throw new Error('"beforeExit" hook is not applicable to the remote query engine');
      }
      url(t) {
        return __async(this, null, function* () {
          return yield this.start(), `https://${this.host}/${this.remoteClientVersion}/${this.inlineSchemaHash}/${t}`;
        });
      }
      uploadSchema() {
        return __async(this, null, function* () {
          let t = { name: "schemaUpload", internal: true };
          return this.tracingHelper.runInChildSpan(t, () => __async(this, null, function* () {
            let r = yield vt(yield this.url("schema"), { method: "PUT", headers: this.headerBuilder.build(), body: this.inlineSchema, clientVersion: this.clientVersion });
            r.ok || vo("schema response status", r.status);
            let n = yield Dr(r, this.clientVersion);
            if (n)
              throw this.logEmitter.emit("warn", { message: `Error while uploading schema: ${n.message}`, timestamp: /* @__PURE__ */ new Date(), target: "" }), n;
            this.logEmitter.emit("info", { message: `Schema (re)uploaded (hash: ${this.inlineSchemaHash})`, timestamp: /* @__PURE__ */ new Date(), target: "" });
          }));
        });
      }
      request(t, { traceparent: r, interactiveTransaction: n, customDataProxyFetch: i }) {
        return this.requestInternal({ body: t, traceparent: r, interactiveTransaction: n, customDataProxyFetch: i });
      }
      requestBatch(_0, _1) {
        return __async(this, arguments, function* (t, { traceparent: r, transaction: n, customDataProxyFetch: i }) {
          let o = (n == null ? void 0 : n.kind) === "itx" ? n.options : void 0, s = jn(t, n), { batchResult: a, elapsed: l } = yield this.requestInternal({ body: s, customDataProxyFetch: i, interactiveTransaction: o, traceparent: r });
          return a.map((u) => "errors" in u && u.errors.length > 0 ? vr(u.errors[0], this.clientVersion) : { data: u, elapsed: l });
        });
      }
      requestInternal({ body: t, traceparent: r, customDataProxyFetch: n, interactiveTransaction: i }) {
        return this.withRetry({ actionGerund: "querying", callback: (_0) => __async(this, [_0], function* ({ logHttpCall: o }) {
          let s = i ? `${i.payload.endpoint}/graphql` : yield this.url("graphql");
          o(s);
          let a = yield vt(s, { method: "POST", headers: this.headerBuilder.build({ traceparent: r, interactiveTransaction: i }), body: JSON.stringify(t), clientVersion: this.clientVersion }, n);
          a.ok || vo("graphql response status", a.status), yield this.handleError(yield Dr(a, this.clientVersion));
          let l = yield a.json(), u = l.extensions;
          if (u && this.propagateResponseExtensions(u), l.errors)
            throw l.errors.length === 1 ? vr(l.errors[0], this.config.clientVersion) : new W(l.errors, { clientVersion: this.config.clientVersion });
          return l;
        }) });
      }
      transaction(t, r, n) {
        return __async(this, null, function* () {
          let i = { start: "starting", commit: "committing", rollback: "rolling back" };
          return this.withRetry({ actionGerund: `${i[t]} transaction`, callback: (_0) => __async(this, [_0], function* ({ logHttpCall: o }) {
            var _a6, _b2;
            if (t === "start") {
              let s = JSON.stringify({ max_wait: (_a6 = n == null ? void 0 : n.maxWait) != null ? _a6 : 2e3, timeout: (_b2 = n == null ? void 0 : n.timeout) != null ? _b2 : 5e3, isolation_level: n == null ? void 0 : n.isolationLevel }), a = yield this.url("transaction/start");
              o(a);
              let l = yield vt(a, { method: "POST", headers: this.headerBuilder.build({ traceparent: r.traceparent }), body: s, clientVersion: this.clientVersion });
              yield this.handleError(yield Dr(l, this.clientVersion));
              let u = yield l.json(), c = u.extensions;
              c && this.propagateResponseExtensions(c);
              let p = u.id, d = u["data-proxy"].endpoint;
              return { id: p, payload: { endpoint: d } };
            } else {
              let s = `${n.payload.endpoint}/${t}`;
              o(s);
              let a = yield vt(s, { method: "POST", headers: this.headerBuilder.build({ traceparent: r.traceparent }), clientVersion: this.clientVersion });
              yield this.handleError(yield Dr(a, this.clientVersion));
              let u = (yield a.json()).extensions;
              u && this.propagateResponseExtensions(u);
              return;
            }
          }) });
        });
      }
      extractHostAndApiKey() {
        let t = { clientVersion: this.clientVersion }, r = Object.keys(this.inlineDatasources)[0], n = Vn({ inlineDatasources: this.inlineDatasources, overrideDatasources: this.config.overrideDatasources, clientVersion: this.clientVersion, env: this.env }), i;
        try {
          i = new URL(n);
        } catch (e) {
          throw new wt(`Error validating datasource \`${r}\`: the URL must start with the protocol \`prisma://\``, t);
        }
        let { protocol: o, host: s, searchParams: a } = i;
        if (o !== "prisma:")
          throw new wt(`Error validating datasource \`${r}\`: the URL must start with the protocol \`prisma://\``, t);
        let l = a.get("api_key");
        if (l === null || l.length < 1)
          throw new wt(`Error validating datasource \`${r}\`: the URL must contain a valid API key`, t);
        return [s, l];
      }
      metrics() {
        throw new Et("Metrics are not yet supported for Accelerate", { clientVersion: this.clientVersion });
      }
      withRetry(t) {
        return __async(this, null, function* () {
          var _a6;
          for (let r = 0; ; r++) {
            let n = (i) => {
              this.logEmitter.emit("info", { message: `Calling ${i} (n=${r})`, timestamp: /* @__PURE__ */ new Date(), target: "" });
            };
            try {
              return yield t.callback({ logHttpCall: n });
            } catch (i) {
              if (!(i instanceof ye) || !i.isRetryable)
                throw i;
              if (r >= Pl)
                throw i instanceof Gt ? i.cause : i;
              this.logEmitter.emit("warn", { message: `Attempt ${r + 1}/${Pl} failed for ${t.actionGerund}: ${(_a6 = i.message) != null ? _a6 : "(unknown)"}`, timestamp: /* @__PURE__ */ new Date(), target: "" });
              let o = yield yl(r);
              this.logEmitter.emit("warn", { message: `Retrying after ${o}ms`, timestamp: /* @__PURE__ */ new Date(), target: "" });
            }
          }
        });
      }
      handleError(t) {
        return __async(this, null, function* () {
          if (t instanceof Pt)
            throw yield this.uploadSchema(), new Gt({ clientVersion: this.clientVersion, cause: t });
          if (t)
            throw t;
        });
      }
    };
    function vl(e) {
      if ((e == null ? void 0 : e.kind) === "itx")
        return e.options.id;
    }
    var Co = F(require("os"));
    var Tl = F(require("path"));
    var _o = Symbol("PrismaLibraryEngineCache");
    function Xd() {
      let e = globalThis;
      return e[_o] === void 0 && (e[_o] = {}), e[_o];
    }
    function em(e) {
      let t = Xd();
      if (t[e] !== void 0)
        return t[e];
      let r = Tl.default.toNamespacedPath(e), n = { exports: {} }, i = 0;
      return process.platform !== "win32" && (i = Co.default.constants.dlopen.RTLD_LAZY | Co.default.constants.dlopen.RTLD_DEEPBIND), process.dlopen(n, r, i), t[e] = n.exports, n.exports;
    }
    var _l = { loadLibrary(e) {
      return __async(this, null, function* () {
        let t = yield Mi(), r = yield ll("library", e);
        try {
          return e.tracingHelper.runInChildSpan({ name: "loadLibrary", internal: true }, () => em(r));
        } catch (n) {
          let i = Ni({ e: n, platformInfo: t, id: r });
          throw new k(i, e.clientVersion);
        }
      });
    } };
    var Mo = {};
    _t(Mo, { QueryEngine: () => qr, __wbg_String_88810dfeb4021902: () => tf, __wbg_buffer_344d9b41efe96da7: () => lf, __wbg_call_53fc3abd42e24ec8: () => gm, __wbg_call_669127b9d730c650: () => Pf, __wbg_crypto_58f13aa23ffcb166: () => pf, __wbg_done_bc26bf4ada718266: () => wf, __wbg_entries_6d727b73ee02b7ce: () => Of, __wbg_getRandomValues_504510b5564925af: () => sf, __wbg_getTime_ed6ee333b702f8fc: () => _m, __wbg_get_2aff440840bb6202: () => rf, __wbg_get_4a9aa5157afeb382: () => Um, __wbg_get_94990005bd6ca07c: () => nf, __wbg_getwithrefkey_5e6d9547403deab8: () => ef, __wbg_globalThis_17eff828815f7d84: () => Cf, __wbg_global_46f939f6541643c5: () => Af, __wbg_has_cdf8b85f6e903c80: () => Pm, __wbg_instanceof_ArrayBuffer_c7cc317e5c29cc0d: () => Ff, __wbg_instanceof_Promise_cfbcc42300367513: () => Zm, __wbg_instanceof_Uint8Array_19e6f142a5e7e1e1: () => kf, __wbg_isArray_38525be7442aa21e: () => Lm, __wbg_isSafeInteger_c38b0a16d0c7cef7: () => Fm, __wbg_iterator_7ee1a391d310f8e4: () => qm, __wbg_length_a5587d6cd79ab197: () => If, __wbg_length_cace2e0b3ddc0502: () => Vm, __wbg_msCrypto_abcb1295e768d1f2: () => hf, __wbg_new0_ad75dd38f92424e2: () => Tm, __wbg_new_08236689f0afb357: () => Km, __wbg_new_1b94180eeb48f2a2: () => Gm, __wbg_new_c728d68b8b34487e: () => Hm, __wbg_new_d8a000788389a31e: () => Mf, __wbg_new_feb65b865d980ae2: () => dm, __wbg_newnoargs_ccdcae30fd002262: () => Rf, __wbg_newwithbyteoffsetandlength_2dc04d99088b15e3: () => uf, __wbg_newwithlength_13b5319ab422dcf6: () => bf, __wbg_next_15da6a3df9290720: () => vf, __wbg_next_1989a20442400aaa: () => xf, __wbg_node_523d7bd03ef69fba: () => ff, __wbg_now_4579335d3581594c: () => Rm, __wbg_now_8ed1a4454e40ecd1: () => Am, __wbg_parse_3f0cb48976ca4123: () => vm, __wbg_process_5b786e71d465a513: () => df, __wbg_randomFillSync_a0d98aa11c81fe89: () => cf, __wbg_require_2784e593a4674877: () => gf, __wbg_resolve_a3252b2860f0a09e: () => Bf, __wbg_self_3fad056edded10bd: () => Tf, __wbg_setTimeout_631fe61f31fa2fad: () => hm, __wbg_set_0ac78a2bc07da03c: () => Jm, __wbg_set_3355b9f2d3092e3b: () => Wm, __wbg_set_841ac57cff3d672b: () => Ym, __wbg_set_dcfd613a3420f908: () => Sf, __wbg_set_wasm: () => Ro, __wbg_static_accessor_PERFORMANCE_1a325848eb3ce65a: () => Cm, __wbg_stringify_4039297315a25b00: () => Em, __wbg_subarray_6ca5cfa7fbb9abbe: () => of, __wbg_then_1bbc9edafd859b06: () => qf, __wbg_then_89e1c559530b85cf: () => $f, __wbg_valueOf_ff4b62641803432a: () => Xm, __wbg_value_0570714ff7d75f35: () => Ef, __wbg_versions_c2ab80650590b6a2: () => mf, __wbg_window_a4f46c98a61d4089: () => _f, __wbindgen_bigint_from_i64: () => Dm, __wbindgen_bigint_from_u64: () => jm, __wbindgen_bigint_get_as_i64: () => Om, __wbindgen_boolean_get: () => Sm, __wbindgen_cb_drop: () => Lf, __wbindgen_closure_wrapper5578: () => jf, __wbindgen_debug_string: () => Df, __wbindgen_error_new: () => bm, __wbindgen_in: () => Bm, __wbindgen_is_bigint: () => Im, __wbindgen_is_function: () => yf, __wbindgen_is_object: () => $m, __wbindgen_is_string: () => zm, __wbindgen_is_undefined: () => wm, __wbindgen_jsval_eq: () => Nm, __wbindgen_jsval_loose_eq: () => Mm, __wbindgen_memory: () => af, __wbindgen_number_get: () => km, __wbindgen_number_new: () => Qm, __wbindgen_object_clone_ref: () => xm, __wbindgen_object_drop_ref: () => mm, __wbindgen_string_get: () => ym, __wbindgen_string_new: () => fm, __wbindgen_throw: () => Nf, debug_panic: () => cm, getBuildTimeInfo: () => um });
    var b;
    function Ro(e) {
      b = e;
    }
    var Ke = new Array(128).fill(void 0);
    Ke.push(void 0, null, true, false);
    function h(e) {
      return Ke[e];
    }
    var $r = Ke.length;
    function tm(e) {
      e < 132 || (Ke[e] = $r, $r = e);
    }
    function re(e) {
      let t = h(e);
      return tm(e), t;
    }
    var rm = typeof TextDecoder > "u" ? (0, module.require)("util").TextDecoder : TextDecoder;
    var Cl = new rm("utf-8", { ignoreBOM: true, fatal: true });
    Cl.decode();
    var Kn = null;
    function Hn() {
      return (Kn === null || Kn.byteLength === 0) && (Kn = new Uint8Array(b.memory.buffer)), Kn;
    }
    function Br(e, t) {
      return e = e >>> 0, Cl.decode(Hn().subarray(e, e + t));
    }
    function w(e) {
      $r === Ke.length && Ke.push(Ke.length + 1);
      let t = $r;
      return $r = Ke[t], Ke[t] = e, t;
    }
    var Z = 0;
    var nm = typeof TextEncoder > "u" ? (0, module.require)("util").TextEncoder : TextEncoder;
    var Wn = new nm("utf-8");
    var im = typeof Wn.encodeInto == "function" ? function(e, t) {
      return Wn.encodeInto(e, t);
    } : function(e, t) {
      let r = Wn.encode(e);
      return t.set(r), { read: e.length, written: r.length };
    };
    function le(e, t, r) {
      if (r === void 0) {
        let a = Wn.encode(e), l = t(a.length, 1) >>> 0;
        return Hn().subarray(l, l + a.length).set(a), Z = a.length, l;
      }
      let n = e.length, i = t(n, 1) >>> 0, o = Hn(), s = 0;
      for (; s < n; s++) {
        let a = e.charCodeAt(s);
        if (a > 127)
          break;
        o[i + s] = a;
      }
      if (s !== n) {
        s !== 0 && (e = e.slice(s)), i = r(i, n, n = s + e.length * 3, 1) >>> 0;
        let a = Hn().subarray(i + s, i + n), l = im(e, a);
        s += l.written;
      }
      return Z = s, i;
    }
    function at(e) {
      return e == null;
    }
    var Qn = null;
    function xe() {
      return (Qn === null || Qn.byteLength === 0) && (Qn = new Int32Array(b.memory.buffer)), Qn;
    }
    var Jn = null;
    function om() {
      return (Jn === null || Jn.byteLength === 0) && (Jn = new Float64Array(b.memory.buffer)), Jn;
    }
    var Gn = null;
    function sm() {
      return (Gn === null || Gn.byteLength === 0) && (Gn = new BigInt64Array(b.memory.buffer)), Gn;
    }
    function Ao(e) {
      let t = typeof e;
      if (t == "number" || t == "boolean" || e == null)
        return `${e}`;
      if (t == "string")
        return `"${e}"`;
      if (t == "symbol") {
        let i = e.description;
        return i == null ? "Symbol" : `Symbol(${i})`;
      }
      if (t == "function") {
        let i = e.name;
        return typeof i == "string" && i.length > 0 ? `Function(${i})` : "Function";
      }
      if (Array.isArray(e)) {
        let i = e.length, o = "[";
        i > 0 && (o += Ao(e[0]));
        for (let s = 1; s < i; s++)
          o += ", " + Ao(e[s]);
        return o += "]", o;
      }
      let r = /\[object ([^\]]+)\]/.exec(toString.call(e)), n;
      if (r.length > 1)
        n = r[1];
      else
        return toString.call(e);
      if (n == "Object")
        try {
          return "Object(" + JSON.stringify(e) + ")";
        } catch (e2) {
          return "Object";
        }
      return e instanceof Error ? `${e.name}: ${e.message}
${e.stack}` : n;
    }
    function am(e, t, r, n) {
      let i = { a: e, b: t, cnt: 1, dtor: r }, o = (...s) => {
        i.cnt++;
        let a = i.a;
        i.a = 0;
        try {
          return n(a, i.b, ...s);
        } finally {
          --i.cnt === 0 ? b.__wbindgen_export_2.get(i.dtor)(a, i.b) : i.a = a;
        }
      };
      return o.original = i, o;
    }
    function lm(e, t, r) {
      b.wasm_bindgen__convert__closures__invoke1_mut__ha9d1cfee20bed753(e, t, w(r));
    }
    function um() {
      let e = b.getBuildTimeInfo();
      return re(e);
    }
    function cm(e) {
      try {
        let o = b.__wbindgen_add_to_stack_pointer(-16);
        var t = at(e) ? 0 : le(e, b.__wbindgen_malloc, b.__wbindgen_realloc), r = Z;
        b.debug_panic(o, t, r);
        var n = xe()[o / 4 + 0], i = xe()[o / 4 + 1];
        if (i)
          throw re(n);
      } finally {
        b.__wbindgen_add_to_stack_pointer(16);
      }
    }
    function pe(e, t) {
      try {
        return e.apply(this, t);
      } catch (r) {
        b.__wbindgen_exn_store(w(r));
      }
    }
    function pm(e, t, r, n) {
      b.wasm_bindgen__convert__closures__invoke2_mut__h3b98f66135a9eb56(e, t, w(r), w(n));
    }
    var qr = class {
      __destroy_into_raw() {
        let t = this.__wbg_ptr;
        return this.__wbg_ptr = 0, t;
      }
      free() {
        let t = this.__destroy_into_raw();
        b.__wbg_queryengine_free(t);
      }
      constructor(t, r, n) {
        try {
          let a = b.__wbindgen_add_to_stack_pointer(-16);
          b.queryengine_new(a, w(t), w(r), w(n));
          var i = xe()[a / 4 + 0], o = xe()[a / 4 + 1], s = xe()[a / 4 + 2];
          if (s)
            throw re(o);
          return this.__wbg_ptr = i >>> 0, this;
        } finally {
          b.__wbindgen_add_to_stack_pointer(16);
        }
      }
      connect(t) {
        let r = le(t, b.__wbindgen_malloc, b.__wbindgen_realloc), n = Z, i = b.queryengine_connect(this.__wbg_ptr, r, n);
        return re(i);
      }
      disconnect(t) {
        let r = le(t, b.__wbindgen_malloc, b.__wbindgen_realloc), n = Z, i = b.queryengine_disconnect(this.__wbg_ptr, r, n);
        return re(i);
      }
      query(t, r, n) {
        let i = le(t, b.__wbindgen_malloc, b.__wbindgen_realloc), o = Z, s = le(r, b.__wbindgen_malloc, b.__wbindgen_realloc), a = Z;
        var l = at(n) ? 0 : le(n, b.__wbindgen_malloc, b.__wbindgen_realloc), u = Z;
        let c = b.queryengine_query(this.__wbg_ptr, i, o, s, a, l, u);
        return re(c);
      }
      startTransaction(t, r) {
        let n = le(t, b.__wbindgen_malloc, b.__wbindgen_realloc), i = Z, o = le(r, b.__wbindgen_malloc, b.__wbindgen_realloc), s = Z, a = b.queryengine_startTransaction(this.__wbg_ptr, n, i, o, s);
        return re(a);
      }
      commitTransaction(t, r) {
        let n = le(t, b.__wbindgen_malloc, b.__wbindgen_realloc), i = Z, o = le(r, b.__wbindgen_malloc, b.__wbindgen_realloc), s = Z, a = b.queryengine_commitTransaction(this.__wbg_ptr, n, i, o, s);
        return re(a);
      }
      rollbackTransaction(t, r) {
        let n = le(t, b.__wbindgen_malloc, b.__wbindgen_realloc), i = Z, o = le(r, b.__wbindgen_malloc, b.__wbindgen_realloc), s = Z, a = b.queryengine_rollbackTransaction(this.__wbg_ptr, n, i, o, s);
        return re(a);
      }
      metrics(t) {
        let r = le(t, b.__wbindgen_malloc, b.__wbindgen_realloc), n = Z, i = b.queryengine_metrics(this.__wbg_ptr, r, n);
        return re(i);
      }
    };
    function dm(e, t) {
      try {
        var r = { a: e, b: t }, n = (o, s) => {
          let a = r.a;
          r.a = 0;
          try {
            return pm(a, r.b, o, s);
          } finally {
            r.a = a;
          }
        };
        let i = new Promise(n);
        return w(i);
      } finally {
        r.a = r.b = 0;
      }
    }
    function mm(e) {
      re(e);
    }
    function fm(e, t) {
      let r = Br(e, t);
      return w(r);
    }
    function gm() {
      return pe(function(e, t, r) {
        let n = h(e).call(h(t), h(r));
        return w(n);
      }, arguments);
    }
    function ym(e, t) {
      let r = h(t), n = typeof r == "string" ? r : void 0;
      var i = at(n) ? 0 : le(n, b.__wbindgen_malloc, b.__wbindgen_realloc), o = Z;
      xe()[e / 4 + 1] = o, xe()[e / 4 + 0] = i;
    }
    function hm(e, t) {
      return setTimeout(h(e), t >>> 0);
    }
    function bm(e, t) {
      let r = new Error(Br(e, t));
      return w(r);
    }
    function xm(e) {
      let t = h(e);
      return w(t);
    }
    function wm(e) {
      return h(e) === void 0;
    }
    function Em() {
      return pe(function(e) {
        let t = JSON.stringify(h(e));
        return w(t);
      }, arguments);
    }
    function Pm() {
      return pe(function(e, t) {
        return Reflect.has(h(e), h(t));
      }, arguments);
    }
    function vm() {
      return pe(function(e, t) {
        let r = JSON.parse(Br(e, t));
        return w(r);
      }, arguments);
    }
    function Tm() {
      return w(/* @__PURE__ */ new Date());
    }
    function _m(e) {
      return h(e).getTime();
    }
    function Cm() {
      let e = performance;
      return at(e) ? 0 : w(e);
    }
    function Am(e) {
      return h(e).now();
    }
    function Rm() {
      return Date.now();
    }
    function Mm(e, t) {
      return h(e) == h(t);
    }
    function Sm(e) {
      let t = h(e);
      return typeof t == "boolean" ? t ? 1 : 0 : 2;
    }
    function Im(e) {
      return typeof h(e) == "bigint";
    }
    function km(e, t) {
      let r = h(t), n = typeof r == "number" ? r : void 0;
      om()[e / 8 + 1] = at(n) ? 0 : n, xe()[e / 4 + 0] = !at(n);
    }
    function Fm(e) {
      return Number.isSafeInteger(h(e));
    }
    function Om(e, t) {
      let r = h(t), n = typeof r == "bigint" ? r : void 0;
      sm()[e / 8 + 1] = at(n) ? BigInt(0) : n, xe()[e / 4 + 0] = !at(n);
    }
    function Dm(e) {
      return w(e);
    }
    function Nm(e, t) {
      return h(e) === h(t);
    }
    function Lm(e) {
      return Array.isArray(h(e));
    }
    function $m(e) {
      let t = h(e);
      return typeof t == "object" && t !== null;
    }
    function qm() {
      return w(Symbol.iterator);
    }
    function Bm(e, t) {
      return h(e) in h(t);
    }
    function jm(e) {
      let t = BigInt.asUintN(64, e);
      return w(t);
    }
    function Vm(e) {
      return h(e).length;
    }
    function Um(e, t) {
      let r = h(e)[t >>> 0];
      return w(r);
    }
    function Km() {
      let e = new Array();
      return w(e);
    }
    function Qm(e) {
      return w(e);
    }
    function Jm(e, t, r) {
      h(e)[t >>> 0] = re(r);
    }
    function Gm() {
      return w(/* @__PURE__ */ new Map());
    }
    function Hm() {
      let e = new Object();
      return w(e);
    }
    function Wm(e, t, r) {
      let n = h(e).set(h(t), h(r));
      return w(n);
    }
    function zm(e) {
      return typeof h(e) == "string";
    }
    function Ym(e, t, r) {
      h(e)[re(t)] = re(r);
    }
    function Zm(e) {
      let t;
      try {
        t = h(e) instanceof Promise;
      } catch (e2) {
        t = false;
      }
      return t;
    }
    function Xm(e) {
      return h(e).valueOf();
    }
    function ef(e, t) {
      let r = h(e)[h(t)];
      return w(r);
    }
    function tf(e, t) {
      let r = String(h(t)), n = le(r, b.__wbindgen_malloc, b.__wbindgen_realloc), i = Z;
      xe()[e / 4 + 1] = i, xe()[e / 4 + 0] = n;
    }
    function rf() {
      return pe(function(e, t) {
        let r = Reflect.get(h(e), h(t));
        return w(r);
      }, arguments);
    }
    function nf() {
      return pe(function(e, t) {
        let r = h(e)[re(t)];
        return w(r);
      }, arguments);
    }
    function of(e, t, r) {
      let n = h(e).subarray(t >>> 0, r >>> 0);
      return w(n);
    }
    function sf() {
      return pe(function(e, t) {
        h(e).getRandomValues(h(t));
      }, arguments);
    }
    function af() {
      let e = b.memory;
      return w(e);
    }
    function lf(e) {
      let t = h(e).buffer;
      return w(t);
    }
    function uf(e, t, r) {
      let n = new Uint8Array(h(e), t >>> 0, r >>> 0);
      return w(n);
    }
    function cf() {
      return pe(function(e, t) {
        h(e).randomFillSync(re(t));
      }, arguments);
    }
    function pf(e) {
      let t = h(e).crypto;
      return w(t);
    }
    function df(e) {
      let t = h(e).process;
      return w(t);
    }
    function mf(e) {
      let t = h(e).versions;
      return w(t);
    }
    function ff(e) {
      let t = h(e).node;
      return w(t);
    }
    function gf() {
      return pe(function() {
        let e = module.require;
        return w(e);
      }, arguments);
    }
    function yf(e) {
      return typeof h(e) == "function";
    }
    function hf(e) {
      let t = h(e).msCrypto;
      return w(t);
    }
    function bf(e) {
      let t = new Uint8Array(e >>> 0);
      return w(t);
    }
    function xf() {
      return pe(function(e) {
        let t = h(e).next();
        return w(t);
      }, arguments);
    }
    function wf(e) {
      return h(e).done;
    }
    function Ef(e) {
      let t = h(e).value;
      return w(t);
    }
    function Pf() {
      return pe(function(e, t) {
        let r = h(e).call(h(t));
        return w(r);
      }, arguments);
    }
    function vf(e) {
      let t = h(e).next;
      return w(t);
    }
    function Tf() {
      return pe(function() {
        let e = self.self;
        return w(e);
      }, arguments);
    }
    function _f() {
      return pe(function() {
        let e = window.window;
        return w(e);
      }, arguments);
    }
    function Cf() {
      return pe(function() {
        let e = globalThis.globalThis;
        return w(e);
      }, arguments);
    }
    function Af() {
      return pe(function() {
        let e = global.global;
        return w(e);
      }, arguments);
    }
    function Rf(e, t) {
      let r = new Function(Br(e, t));
      return w(r);
    }
    function Mf(e) {
      let t = new Uint8Array(h(e));
      return w(t);
    }
    function Sf(e, t, r) {
      h(e).set(h(t), r >>> 0);
    }
    function If(e) {
      return h(e).length;
    }
    function kf(e) {
      let t;
      try {
        t = h(e) instanceof Uint8Array;
      } catch (e2) {
        t = false;
      }
      return t;
    }
    function Ff(e) {
      let t;
      try {
        t = h(e) instanceof ArrayBuffer;
      } catch (e2) {
        t = false;
      }
      return t;
    }
    function Of(e) {
      let t = Object.entries(h(e));
      return w(t);
    }
    function Df(e, t) {
      let r = Ao(h(t)), n = le(r, b.__wbindgen_malloc, b.__wbindgen_realloc), i = Z;
      xe()[e / 4 + 1] = i, xe()[e / 4 + 0] = n;
    }
    function Nf(e, t) {
      throw new Error(Br(e, t));
    }
    function Lf(e) {
      let t = re(e).original;
      return t.cnt-- == 1 ? (t.a = 0, true) : false;
    }
    function $f(e, t) {
      let r = h(e).then(h(t));
      return w(r);
    }
    function qf(e, t, r) {
      let n = h(e).then(h(t), h(r));
      return w(n);
    }
    function Bf(e) {
      let t = Promise.resolve(h(e));
      return w(t);
    }
    function jf(e, t, r) {
      let n = am(e, t, 275, lm);
      return w(n);
    }
    var So;
    var Al = { loadLibrary(e) {
      return __async(this, null, function* () {
        var _a6;
        let { generator: t, clientVersion: r, adapter: n } = e;
        if ((t == null ? void 0 : t.previewFeatures.includes("driverAdapters")) === void 0)
          throw new k('The `driverAdapters` preview feature is required with `engineType="wasm"`', r);
        if (n === void 0)
          throw new k('The `adapter` option for `PrismaClient` is required with `engineType="wasm"`', r);
        if (So === void 0) {
          let i = yield (_a6 = e.getQueryEngineWasmModule) == null ? void 0 : _a6.call(e);
          if (i == null)
            throw new k("The loaded wasm module was unexpectedly `undefined` or `null` once loaded", r);
          So = new WebAssembly.Instance(i, { "./query_engine_bg.js": Mo }).exports, Ro(So);
        }
        return { debugPanic() {
          return Promise.reject("{}");
        }, dmmf() {
          return Promise.resolve("{}");
        }, version() {
          return { commit: "unknown", version: "unknown" };
        }, QueryEngine: qr };
      });
    } };
    var Vf = "P2036";
    var qe = $("prisma:client:libraryEngine");
    function Uf(e) {
      return e.item_type === "query" && "query" in e;
    }
    function Kf(e) {
      return "level" in e ? e.level === "error" && e.message === "PANIC" : false;
    }
    var Rl = [...Ei, "native"];
    var Ml = 0;
    var zt = class extends Jt {
      constructor(t, r) {
        var _a6, _b2, _c;
        super(), gt(t.generator) === "wasm" ? this.libraryLoader = r != null ? r : Al : this.libraryLoader = r != null ? r : _l, this.config = t, this.libraryStarted = false, this.logQueries = (_a6 = t.logQueries) != null ? _a6 : false, this.logLevel = (_b2 = t.logLevel) != null ? _b2 : "error", this.logEmitter = t.logEmitter, this.datamodel = atob(t.inlineSchema), t.enableDebugLogs && (this.logLevel = "debug");
        let i = Object.keys(t.overrideDatasources)[0], o = (_c = t.overrideDatasources[i]) == null ? void 0 : _c.url;
        i !== void 0 && o !== void 0 && (this.datasourceOverrides = { [i]: o }), this.libraryInstantiationPromise = this.instantiateLibrary(), this.checkForTooManyEngines();
      }
      checkForTooManyEngines() {
        Ml === 10 && console.warn(`${Re("warn(prisma-client)")} This is the 10th instance of Prisma Client being started. Make sure this is intentional.`);
      }
      transaction(t, r, n) {
        return __async(this, null, function* () {
          var _a6, _b2, _c, _d2, _e2;
          yield this.start();
          let i = JSON.stringify(r), o;
          if (t === "start") {
            let a = JSON.stringify({ max_wait: (_a6 = n == null ? void 0 : n.maxWait) != null ? _a6 : 2e3, timeout: (_b2 = n == null ? void 0 : n.timeout) != null ? _b2 : 5e3, isolation_level: n == null ? void 0 : n.isolationLevel });
            o = yield (_c = this.engine) == null ? void 0 : _c.startTransaction(a, i);
          } else
            t === "commit" ? o = yield (_d2 = this.engine) == null ? void 0 : _d2.commitTransaction(n.id, i) : t === "rollback" && (o = yield (_e2 = this.engine) == null ? void 0 : _e2.rollbackTransaction(n.id, i));
          let s = this.parseEngineResponse(o);
          if (Qf(s)) {
            let a = this.getExternalAdapterError(s);
            throw a ? a.error : new H(s.message, { code: s.error_code, clientVersion: this.config.clientVersion, meta: s.meta });
          }
          return s;
        });
      }
      instantiateLibrary() {
        return __async(this, null, function* () {
          if (qe("internalSetup"), this.libraryInstantiationPromise)
            return this.libraryInstantiationPromise;
          wi(), this.binaryTarget = yield this.getCurrentBinaryTarget(), yield this.loadEngine(), this.version();
        });
      }
      getCurrentBinaryTarget() {
        return __async(this, null, function* () {
          {
            if (this.binaryTarget)
              return this.binaryTarget;
            let t = yield ft();
            if (!Rl.includes(t))
              throw new k(`Unknown ${ve("PRISMA_QUERY_ENGINE_LIBRARY")} ${ve(de(t))}. Possible binaryTargets: ${pt(Rl.join(", "))} or a path to the query engine library.
You may have to run ${pt("prisma generate")} for your changes to take effect.`, this.config.clientVersion);
            return t;
          }
        });
      }
      parseEngineResponse(t) {
        if (!t)
          throw new W("Response from the Engine was empty", { clientVersion: this.config.clientVersion });
        try {
          return JSON.parse(t);
        } catch (e) {
          throw new W("Unable to JSON.parse response from engine", { clientVersion: this.config.clientVersion });
        }
      }
      loadEngine() {
        return __async(this, null, function* () {
          var _a6, _b2;
          if (!this.engine) {
            this.QueryEngineConstructor || (this.library = yield this.libraryLoader.loadLibrary(this.config), this.QueryEngineConstructor = this.library.QueryEngine);
            try {
              let t = new WeakRef(this), { adapter: r } = this.config;
              r && qe("Using driver adapter: %O", r), this.engine = new this.QueryEngineConstructor({ datamodel: this.datamodel, env: process.env, logQueries: (_a6 = this.config.logQueries) != null ? _a6 : false, ignoreEnvVarErrors: true, datasourceOverrides: (_b2 = this.datasourceOverrides) != null ? _b2 : {}, logLevel: this.logLevel, configDir: this.config.cwd, engineProtocol: "json" }, (n) => {
                var _a7;
                (_a7 = t.deref()) == null ? void 0 : _a7.logger(n);
              }, r), Ml++;
            } catch (t) {
              let r = t, n = this.parseInitError(r.message);
              throw typeof n == "string" ? r : new k(n.message, this.config.clientVersion, n.error_code);
            }
          }
        });
      }
      logger(t) {
        var _a6;
        let r = this.parseEngineResponse(t);
        if (r) {
          if ("span" in r) {
            this.config.tracingHelper.createEngineSpan(r);
            return;
          }
          r.level = (_a6 = r == null ? void 0 : r.level.toLowerCase()) != null ? _a6 : "unknown", Uf(r) ? this.logEmitter.emit("query", { timestamp: /* @__PURE__ */ new Date(), query: r.query, params: r.params, duration: Number(r.duration_ms), target: r.module_path }) : Kf(r) ? this.loggerRustPanic = new be(this.getErrorMessageWithLink(`${r.message}: ${r.reason} in ${r.file}:${r.line}:${r.column}`), this.config.clientVersion) : this.logEmitter.emit(r.level, { timestamp: /* @__PURE__ */ new Date(), message: r.message, target: r.module_path });
        }
      }
      getErrorMessageWithLink(t) {
        var _a6;
        return fl({ binaryTarget: this.binaryTarget, title: t, version: this.config.clientVersion, engineVersion: (_a6 = this.versionInfo) == null ? void 0 : _a6.commit, database: this.config.activeProvider, query: this.lastQuery });
      }
      parseInitError(t) {
        try {
          return JSON.parse(t);
        } catch (e) {
        }
        return t;
      }
      parseRequestError(t) {
        try {
          return JSON.parse(t);
        } catch (e) {
        }
        return t;
      }
      onBeforeExit() {
        throw new Error('"beforeExit" hook is not applicable to the library engine since Prisma 5.0.0, it is only relevant and implemented for the binary engine. Please add your event listener to the `process` object directly instead.');
      }
      start() {
        return __async(this, null, function* () {
          if (yield this.libraryInstantiationPromise, yield this.libraryStoppingPromise, this.libraryStartingPromise)
            return qe(`library already starting, this.libraryStarted: ${this.libraryStarted}`), this.libraryStartingPromise;
          if (this.libraryStarted)
            return;
          let t = () => __async(this, null, function* () {
            var _a6;
            qe("library starting");
            try {
              let r = { traceparent: this.config.tracingHelper.getTraceParent() };
              yield (_a6 = this.engine) == null ? void 0 : _a6.connect(JSON.stringify(r)), this.libraryStarted = true, qe("library started");
            } catch (r) {
              let n = this.parseInitError(r.message);
              throw typeof n == "string" ? r : new k(n.message, this.config.clientVersion, n.error_code);
            } finally {
              this.libraryStartingPromise = void 0;
            }
          });
          return this.libraryStartingPromise = this.config.tracingHelper.runInChildSpan("connect", t), this.libraryStartingPromise;
        });
      }
      stop() {
        return __async(this, null, function* () {
          if (yield this.libraryStartingPromise, yield this.executingQueryPromise, this.libraryStoppingPromise)
            return qe("library is already stopping"), this.libraryStoppingPromise;
          if (!this.libraryStarted)
            return;
          let t = () => __async(this, null, function* () {
            var _a6;
            yield new Promise((n) => setTimeout(n, 5)), qe("library stopping");
            let r = { traceparent: this.config.tracingHelper.getTraceParent() };
            yield (_a6 = this.engine) == null ? void 0 : _a6.disconnect(JSON.stringify(r)), this.libraryStarted = false, this.libraryStoppingPromise = void 0, qe("library stopped");
          });
          return this.libraryStoppingPromise = this.config.tracingHelper.runInChildSpan("disconnect", t), this.libraryStoppingPromise;
        });
      }
      version() {
        var _a6, _b2, _c;
        return this.versionInfo = (_a6 = this.library) == null ? void 0 : _a6.version(), (_c = (_b2 = this.versionInfo) == null ? void 0 : _b2.version) != null ? _c : "unknown";
      }
      debugPanic(t) {
        var _a6;
        return (_a6 = this.library) == null ? void 0 : _a6.debugPanic(t);
      }
      request(_0, _1) {
        return __async(this, arguments, function* (t, { traceparent: r, interactiveTransaction: n }) {
          var _a6, _b2;
          qe(`sending request, this.libraryStarted: ${this.libraryStarted}`);
          let i = JSON.stringify({ traceparent: r }), o = JSON.stringify(t);
          try {
            yield this.start(), this.executingQueryPromise = (_a6 = this.engine) == null ? void 0 : _a6.query(o, i, n == null ? void 0 : n.id), this.lastQuery = o;
            let s = this.parseEngineResponse(yield this.executingQueryPromise);
            if (s.errors)
              throw s.errors.length === 1 ? this.buildQueryError(s.errors[0]) : new W(JSON.stringify(s.errors), { clientVersion: this.config.clientVersion });
            if (this.loggerRustPanic)
              throw this.loggerRustPanic;
            return { data: s, elapsed: 0 };
          } catch (s) {
            if (s instanceof k)
              throw s;
            if (s.code === "GenericFailure" && ((_b2 = s.message) == null ? void 0 : _b2.startsWith("PANIC:")))
              throw new be(this.getErrorMessageWithLink(s.message), this.config.clientVersion);
            let a = this.parseRequestError(s.message);
            throw typeof a == "string" ? s : new W(`${a.message}
${a.backtrace}`, { clientVersion: this.config.clientVersion });
          }
        });
      }
      requestBatch(_0, _1) {
        return __async(this, arguments, function* (t, { transaction: r, traceparent: n }) {
          qe("requestBatch");
          let i = jn(t, r);
          yield this.start(), this.lastQuery = JSON.stringify(i), this.executingQueryPromise = this.engine.query(this.lastQuery, JSON.stringify({ traceparent: n }), vl(r));
          let o = yield this.executingQueryPromise, s = this.parseEngineResponse(o);
          if (s.errors)
            throw s.errors.length === 1 ? this.buildQueryError(s.errors[0]) : new W(JSON.stringify(s.errors), { clientVersion: this.config.clientVersion });
          let { batchResult: a, errors: l } = s;
          if (Array.isArray(a))
            return a.map((u) => {
              var _a6;
              return u.errors && u.errors.length > 0 ? (_a6 = this.loggerRustPanic) != null ? _a6 : this.buildQueryError(u.errors[0]) : { data: u, elapsed: 0 };
            });
          throw l && l.length === 1 ? new Error(l[0].error) : new Error(JSON.stringify(s));
        });
      }
      buildQueryError(t) {
        if (t.user_facing_error.is_panic)
          return new be(this.getErrorMessageWithLink(t.user_facing_error.message), this.config.clientVersion);
        let r = this.getExternalAdapterError(t.user_facing_error);
        return r ? r.error : vr(t, this.config.clientVersion);
      }
      getExternalAdapterError(t) {
        var _a6;
        if (t.error_code === Vf && this.config.adapter) {
          let r = (_a6 = t.meta) == null ? void 0 : _a6.id;
          dn(typeof r == "number", "Malformed external JS error received from the engine");
          let n = this.config.adapter.errorRegistry.consumeError(r);
          return dn(n, "External error with reported id was not registered"), n;
        }
      }
      metrics(t) {
        return __async(this, null, function* () {
          yield this.start();
          let r = yield this.engine.metrics(JSON.stringify(t));
          return t.format === "prometheus" ? r : this.parseEngineResponse(r);
        });
      }
    };
    function Qf(e) {
      return typeof e == "object" && e !== null && e.error_code !== void 0;
    }
    function Sl(e, t) {
      let r;
      try {
        r = Vn({ inlineDatasources: t.inlineDatasources, overrideDatasources: t.overrideDatasources, env: __spreadValues(__spreadValues({}, t.env), process.env), clientVersion: t.clientVersion });
      } catch (e2) {
      }
      e.noEngine !== true && (r == null ? void 0 : r.startsWith("prisma://")) && lr("recommend--no-engine", "In production, we recommend using `prisma generate --no-engine` (See: `prisma generate --help`)");
      let n = gt(t.generator);
      if (n === "wasm" && t.adapter !== void 0)
        return new zt(t);
      if ((r == null ? void 0 : r.startsWith("prisma://")) || e.noEngine)
        return new Lr(t);
      if (n === "library")
        return new zt(t);
      throw "binary", new se("Invalid client engine type, please use `library` or `binary`", { clientVersion: t.clientVersion });
    }
    function zn({ generator: e }) {
      var _a6;
      return (_a6 = e == null ? void 0 : e.previewFeatures) != null ? _a6 : [];
    }
    var Nl = F(Io());
    function Ol(e, t) {
      let r = Dl(e), n = Jf(r), i = Hf(n);
      i ? Yn(i, t) : t.addErrorMessage(() => "Unknown error");
    }
    function Dl(e) {
      return e.errors.flatMap((t) => t.kind === "Union" ? Dl(t) : [t]);
    }
    function Jf(e) {
      let t = /* @__PURE__ */ new Map(), r = [];
      for (let n of e) {
        if (n.kind !== "InvalidArgumentType") {
          r.push(n);
          continue;
        }
        let i = `${n.selectionPath.join(".")}:${n.argumentPath.join(".")}`, o = t.get(i);
        o ? t.set(i, __spreadProps(__spreadValues({}, n), { argument: __spreadProps(__spreadValues({}, n.argument), { typeNames: Gf(o.argument.typeNames, n.argument.typeNames) }) })) : t.set(i, n);
      }
      return r.push(...t.values()), r;
    }
    function Gf(e, t) {
      return [...new Set(e.concat(t))];
    }
    function Hf(e) {
      return Qi(e, (t, r) => {
        let n = kl(t), i = kl(r);
        return n !== i ? n - i : Fl(t) - Fl(r);
      });
    }
    function kl(e) {
      let t = 0;
      return Array.isArray(e.selectionPath) && (t += e.selectionPath.length), Array.isArray(e.argumentPath) && (t += e.argumentPath.length), t;
    }
    function Fl(e) {
      switch (e.kind) {
        case "InvalidArgumentValue":
        case "ValueTooLarge":
          return 20;
        case "InvalidArgumentType":
          return 10;
        case "RequiredArgumentMissing":
          return -10;
        default:
          return 0;
      }
    }
    var Qe = class {
      constructor(t, r) {
        this.name = t;
        this.value = r;
        this.isRequired = false;
      }
      makeRequired() {
        return this.isRequired = true, this;
      }
      write(t) {
        let { colors: { green: r } } = t.context;
        t.addMarginSymbol(r(this.isRequired ? "+" : "?")), t.write(r(this.name)), this.isRequired || t.write(r("?")), t.write(r(": ")), typeof this.value == "string" ? t.write(r(this.value)) : t.write(this.value);
      }
    };
    var Zn = class {
      constructor() {
        this.fields = [];
      }
      addField(t, r) {
        return this.fields.push({ write(n) {
          let { green: i, dim: o } = n.context.colors;
          n.write(i(o(`${t}: ${r}`))).addMarginSymbol(i(o("+")));
        } }), this;
      }
      write(t) {
        let { colors: { green: r } } = t.context;
        t.writeLine(r("{")).withIndent(() => {
          t.writeJoined(Vt, this.fields).newLine();
        }).write(r("}")).addMarginSymbol(r("+"));
      }
    };
    function Yn(e, t) {
      switch (e.kind) {
        case "IncludeAndSelect":
          Wf(e, t);
          break;
        case "IncludeOnScalar":
          zf(e, t);
          break;
        case "EmptySelection":
          Yf(e, t);
          break;
        case "UnknownSelectionField":
          Zf(e, t);
          break;
        case "UnknownArgument":
          Xf(e, t);
          break;
        case "UnknownInputField":
          eg(e, t);
          break;
        case "RequiredArgumentMissing":
          tg(e, t);
          break;
        case "InvalidArgumentType":
          rg(e, t);
          break;
        case "InvalidArgumentValue":
          ng(e, t);
          break;
        case "ValueTooLarge":
          ig(e, t);
          break;
        case "SomeFieldsMissing":
          og(e, t);
          break;
        case "TooManyFieldsGiven":
          sg(e, t);
          break;
        case "Union":
          Ol(e, t);
          break;
        default:
          throw new Error("not implemented: " + e.kind);
      }
    }
    function Wf(e, t) {
      var _a6, _b2;
      let r = t.arguments.getDeepSubSelectionValue(e.selectionPath);
      r && r instanceof z && ((_a6 = r.getField("include")) == null ? void 0 : _a6.markAsError(), (_b2 = r.getField("select")) == null ? void 0 : _b2.markAsError()), t.addErrorMessage((n) => `Please ${n.bold("either")} use ${n.green("`include`")} or ${n.green("`select`")}, but ${n.red("not both")} at the same time.`);
    }
    function zf(e, t) {
      var _a6, _b2;
      let [r, n] = Xn(e.selectionPath), i = e.outputType, o = (_a6 = t.arguments.getDeepSelectionParent(r)) == null ? void 0 : _a6.value;
      if (o && ((_b2 = o.getField(n)) == null ? void 0 : _b2.markAsError(), i))
        for (let s of i.fields)
          s.isRelation && o.addSuggestion(new Qe(s.name, "true"));
      t.addErrorMessage((s) => {
        let a = `Invalid scalar field ${s.red(`\`${n}\``)} for ${s.bold("include")} statement`;
        return i ? a += ` on model ${s.bold(i.name)}. ${jr(s)}` : a += ".", a += `
Note that ${s.bold("include")} statements only accept relation fields.`, a;
      });
    }
    function Yf(e, t) {
      var _a6, _b2;
      let r = e.outputType, n = (_a6 = t.arguments.getDeepSelectionParent(e.selectionPath)) == null ? void 0 : _a6.value, i = (_b2 = n == null ? void 0 : n.isEmpty()) != null ? _b2 : false;
      n && (n.removeAllFields(), ql(n, r)), t.addErrorMessage((o) => i ? `The ${o.red("`select`")} statement for type ${o.bold(r.name)} must not be empty. ${jr(o)}` : `The ${o.red("`select`")} statement for type ${o.bold(r.name)} needs ${o.bold("at least one truthy value")}.`);
    }
    function Zf(e, t) {
      var _a6;
      let [r, n] = Xn(e.selectionPath), i = t.arguments.getDeepSelectionParent(r);
      i && ((_a6 = i.value.getField(n)) == null ? void 0 : _a6.markAsError(), ql(i.value, e.outputType)), t.addErrorMessage((o) => {
        let s = [`Unknown field ${o.red(`\`${n}\``)}`];
        return i && s.push(`for ${o.bold(i.kind)} statement`), s.push(`on model ${o.bold(`\`${e.outputType.name}\``)}.`), s.push(jr(o)), s.join(" ");
      });
    }
    function Xf(e, t) {
      var _a6;
      let r = e.argumentPath[0], n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
      n instanceof z && ((_a6 = n.getField(r)) == null ? void 0 : _a6.markAsError(), ag(n, e.arguments)), t.addErrorMessage((i) => Ll(i, r, e.arguments.map((o) => o.name)));
    }
    function eg(e, t) {
      var _a6;
      let [r, n] = Xn(e.argumentPath), i = t.arguments.getDeepSubSelectionValue(e.selectionPath);
      if (i instanceof z) {
        (_a6 = i.getDeepField(e.argumentPath)) == null ? void 0 : _a6.markAsError();
        let o = i.getDeepFieldValue(r);
        o instanceof z && Bl(o, e.inputType);
      }
      t.addErrorMessage((o) => Ll(o, n, e.inputType.fields.map((s) => s.name)));
    }
    function Ll(e, t, r) {
      let n = [`Unknown argument \`${e.red(t)}\`.`], i = ug(t, r);
      return i && n.push(`Did you mean \`${e.green(i)}\`?`), r.length > 0 && n.push(jr(e)), n.join(" ");
    }
    function tg(e, t) {
      let r;
      t.addErrorMessage((l) => (r == null ? void 0 : r.value) instanceof Y && r.value.text === "null" ? `Argument \`${l.green(o)}\` must not be ${l.red("null")}.` : `Argument \`${l.green(o)}\` is missing.`);
      let n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
      if (!(n instanceof z))
        return;
      let [i, o] = Xn(e.argumentPath), s = new Zn(), a = n.getDeepFieldValue(i);
      if (a instanceof z)
        if (r = a.getField(o), r && a.removeField(o), e.inputTypes.length === 1 && e.inputTypes[0].kind === "object") {
          for (let l of e.inputTypes[0].fields)
            s.addField(l.name, l.typeNames.join(" | "));
          a.addSuggestion(new Qe(o, s).makeRequired());
        } else {
          let l = e.inputTypes.map($l).join(" | ");
          a.addSuggestion(new Qe(o, l).makeRequired());
        }
    }
    function $l(e) {
      return e.kind === "list" ? `${$l(e.elementType)}[]` : e.name;
    }
    function rg(e, t) {
      var _a6;
      let r = e.argument.name, n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
      n instanceof z && ((_a6 = n.getDeepFieldValue(e.argumentPath)) == null ? void 0 : _a6.markAsError()), t.addErrorMessage((i) => {
        let o = ei("or", e.argument.typeNames.map((s) => i.green(s)));
        return `Argument \`${i.bold(r)}\`: Invalid value provided. Expected ${o}, provided ${i.red(e.inferredType)}.`;
      });
    }
    function ng(e, t) {
      var _a6;
      let r = e.argument.name, n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
      n instanceof z && ((_a6 = n.getDeepFieldValue(e.argumentPath)) == null ? void 0 : _a6.markAsError()), t.addErrorMessage((i) => {
        let o = [`Invalid value for argument \`${i.bold(r)}\``];
        if (e.underlyingError && o.push(`: ${e.underlyingError}`), o.push("."), e.argument.typeNames.length > 0) {
          let s = ei("or", e.argument.typeNames.map((a) => i.green(a)));
          o.push(` Expected ${s}.`);
        }
        return o.join("");
      });
    }
    function ig(e, t) {
      var _a6;
      let r = e.argument.name, n = t.arguments.getDeepSubSelectionValue(e.selectionPath), i;
      if (n instanceof z) {
        let s = (_a6 = n.getDeepField(e.argumentPath)) == null ? void 0 : _a6.value;
        s == null ? void 0 : s.markAsError(), s instanceof Y && (i = s.text);
      }
      t.addErrorMessage((o) => {
        let s = ["Unable to fit value"];
        return i && s.push(o.red(i)), s.push(`into a 64-bit signed integer for field \`${o.bold(r)}\``), s.join(" ");
      });
    }
    function og(e, t) {
      let r = e.argumentPath[e.argumentPath.length - 1], n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
      if (n instanceof z) {
        let i = n.getDeepFieldValue(e.argumentPath);
        i instanceof z && Bl(i, e.inputType);
      }
      t.addErrorMessage((i) => {
        let o = [`Argument \`${i.bold(r)}\` of type ${i.bold(e.inputType.name)} needs`];
        return e.constraints.minFieldCount === 1 ? e.constraints.requiredFields ? o.push(`${i.green("at least one of")} ${ei("or", e.constraints.requiredFields.map((s) => `\`${i.bold(s)}\``))} arguments.`) : o.push(`${i.green("at least one")} argument.`) : o.push(`${i.green(`at least ${e.constraints.minFieldCount}`)} arguments.`), o.push(jr(i)), o.join(" ");
      });
    }
    function sg(e, t) {
      let r = e.argumentPath[e.argumentPath.length - 1], n = t.arguments.getDeepSubSelectionValue(e.selectionPath), i = [];
      if (n instanceof z) {
        let o = n.getDeepFieldValue(e.argumentPath);
        o instanceof z && (o.markAsError(), i = Object.keys(o.getFields()));
      }
      t.addErrorMessage((o) => {
        let s = [`Argument \`${o.bold(r)}\` of type ${o.bold(e.inputType.name)} needs`];
        return e.constraints.minFieldCount === 1 && e.constraints.maxFieldCount == 1 ? s.push(`${o.green("exactly one")} argument,`) : e.constraints.maxFieldCount == 1 ? s.push(`${o.green("at most one")} argument,`) : s.push(`${o.green(`at most ${e.constraints.maxFieldCount}`)} arguments,`), s.push(`but you provided ${ei("and", i.map((a) => o.red(a)))}. Please choose`), e.constraints.maxFieldCount === 1 ? s.push("one.") : s.push(`${e.constraints.maxFieldCount}.`), s.join(" ");
      });
    }
    function ql(e, t) {
      for (let r of t.fields)
        e.hasField(r.name) || e.addSuggestion(new Qe(r.name, "true"));
    }
    function ag(e, t) {
      for (let r of t)
        e.hasField(r.name) || e.addSuggestion(new Qe(r.name, r.typeNames.join(" | ")));
    }
    function Bl(e, t) {
      if (t.kind === "object")
        for (let r of t.fields)
          e.hasField(r.name) || e.addSuggestion(new Qe(r.name, r.typeNames.join(" | ")));
    }
    function Xn(e) {
      let t = [...e], r = t.pop();
      if (!r)
        throw new Error("unexpected empty path");
      return [t, r];
    }
    function jr({ green: e, enabled: t }) {
      return "Available options are " + (t ? `listed in ${e("green")}` : "marked with ?") + ".";
    }
    function ei(e, t) {
      if (t.length === 1)
        return t[0];
      let r = [...t], n = r.pop();
      return `${r.join(", ")} ${e} ${n}`;
    }
    var lg = 3;
    function ug(e, t) {
      let r = 1 / 0, n;
      for (let i of t) {
        let o = (0, Nl.default)(e, i);
        o > lg || o < r && (r = o, n = i);
      }
      return n;
    }
    function ti({ args: e, errors: t, errorFormat: r, callsite: n, originalMethod: i, clientVersion: o }) {
      let s = Sn(e);
      for (let p of t)
        Yn(p, s);
      let a = r === "pretty" ? ha : Rn, l = s.renderAllMessages(a), u = new Nt(0, { colors: a }).write(s).toString(), c = Qt({ message: l, callsite: n, originalMethod: i, showColors: r === "pretty", callArguments: u });
      throw new se(c, { clientVersion: o });
    }
    var cg = { findUnique: "findUnique", findUniqueOrThrow: "findUniqueOrThrow", findFirst: "findFirst", findFirstOrThrow: "findFirstOrThrow", findMany: "findMany", count: "aggregate", create: "createOne", createMany: "createMany", update: "updateOne", updateMany: "updateMany", upsert: "upsertOne", delete: "deleteOne", deleteMany: "deleteMany", executeRaw: "executeRaw", queryRaw: "queryRaw", aggregate: "aggregate", groupBy: "groupBy", runCommandRaw: "runCommandRaw", findRaw: "findRaw", aggregateRaw: "aggregateRaw" };
    function jl({ modelName: e, action: t, args: r, runtimeDataModel: n, extensions: i, callsite: o, clientMethod: s, errorFormat: a, clientVersion: l }) {
      let u = new ko({ runtimeDataModel: n, modelName: e, action: t, rootArgs: r, callsite: o, extensions: i, selectionPath: [], argumentPath: [], originalMethod: s, errorFormat: a, clientVersion: l });
      return { modelName: e, action: cg[t], query: Fo(r, u) };
    }
    function Fo(_a6 = {}, n) {
      var _b2 = _a6, { select: e, include: t } = _b2, r = __objRest(_b2, ["select", "include"]);
      return { arguments: Ul(r, n), selection: pg(e, t, n) };
    }
    function pg(e, t, r) {
      return e && t && r.throwValidationError({ kind: "IncludeAndSelect", selectionPath: r.getSelectionPath() }), e ? fg(e, r) : dg(r, t);
    }
    function dg(e, t) {
      let r = {};
      return e.model && !e.isRawAction() && (r.$composites = true, r.$scalars = true), t && mg(r, t, e), r;
    }
    function mg(e, t, r) {
      for (let [n, i] of Object.entries(t)) {
        let o = r.findField(n);
        o && (o == null ? void 0 : o.kind) !== "object" && r.throwValidationError({ kind: "IncludeOnScalar", selectionPath: r.getSelectionPath().concat(n), outputType: r.getOutputTypeDescription() }), i === true ? e[n] = true : typeof i == "object" && (e[n] = Fo(i, r.nestSelection(n)));
      }
    }
    function fg(e, t) {
      let r = {}, n = t.getComputedFields(), i = Za(e, n);
      for (let [o, s] of Object.entries(i)) {
        let a = t.findField(o);
        (n == null ? void 0 : n[o]) && !a || (s === true ? r[o] = true : typeof s == "object" && (r[o] = Fo(s, t.nestSelection(o))));
      }
      return r;
    }
    function Vl(e, t) {
      if (e === null)
        return null;
      if (typeof e == "string" || typeof e == "number" || typeof e == "boolean")
        return e;
      if (typeof e == "bigint")
        return { $type: "BigInt", value: String(e) };
      if (Lt(e)) {
        if (bn(e))
          return { $type: "DateTime", value: e.toISOString() };
        t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: t.getSelectionPath(), argumentPath: t.getArgumentPath(), argument: { name: t.getArgumentName(), typeNames: ["Date"] }, underlyingError: "Provided Date object is invalid" });
      }
      if (jt(e))
        return { $type: "FieldRef", value: { _ref: e.name, _container: e.modelName } };
      if (Array.isArray(e))
        return gg(e, t);
      if (ArrayBuffer.isView(e))
        return { $type: "Bytes", value: Buffer.from(e).toString("base64") };
      if (yg(e))
        return e.values;
      if (Bt(e))
        return { $type: "Decimal", value: e.toFixed() };
      if (e instanceof ke) {
        if (e !== gn.instances[e._getName()])
          throw new Error("Invalid ObjectEnumValue");
        return { $type: "Enum", value: e._getName() };
      }
      if (hg(e))
        return e.toJSON();
      if (typeof e == "object")
        return Ul(e, t);
      t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: t.getSelectionPath(), argumentPath: t.getArgumentPath(), argument: { name: t.getArgumentName(), typeNames: [] }, underlyingError: `We could not serialize ${Object.prototype.toString.call(e)} value. Serialize the object to JSON or implement a ".toJSON()" method on it` });
    }
    function Ul(e, t) {
      if (e.$type)
        return { $type: "Json", value: JSON.stringify(e) };
      let r = {};
      for (let n in e) {
        let i = e[n];
        i !== void 0 && (r[n] = Vl(i, t.nestArgument(n)));
      }
      return r;
    }
    function gg(e, t) {
      let r = [];
      for (let n = 0; n < e.length; n++) {
        let i = t.nestArgument(String(n)), o = e[n];
        o === void 0 && t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: i.getSelectionPath(), argumentPath: i.getArgumentPath(), argument: { name: `${t.getArgumentName()}[${n}]`, typeNames: [] }, underlyingError: "Can not use `undefined` value within array. Use `null` or filter out `undefined` values" }), r.push(Vl(o, i));
      }
      return r;
    }
    function yg(e) {
      return typeof e == "object" && e !== null && e.__prismaRawParameters__ === true;
    }
    function hg(e) {
      return typeof e == "object" && e !== null && typeof e.toJSON == "function";
    }
    var ko = class e {
      constructor(t) {
        this.params = t;
        this.params.modelName && (this.model = this.params.runtimeDataModel.models[this.params.modelName]);
      }
      throwValidationError(t) {
        var _a6;
        ti({ errors: [t], originalMethod: this.params.originalMethod, args: (_a6 = this.params.rootArgs) != null ? _a6 : {}, callsite: this.params.callsite, errorFormat: this.params.errorFormat, clientVersion: this.params.clientVersion });
      }
      getSelectionPath() {
        return this.params.selectionPath;
      }
      getArgumentPath() {
        return this.params.argumentPath;
      }
      getArgumentName() {
        return this.params.argumentPath[this.params.argumentPath.length - 1];
      }
      getOutputTypeDescription() {
        if (!(!this.params.modelName || !this.model))
          return { name: this.params.modelName, fields: this.model.fields.map((t) => ({ name: t.name, typeName: "boolean", isRelation: t.kind === "object" })) };
      }
      isRawAction() {
        return ["executeRaw", "queryRaw", "runCommandRaw", "findRaw", "aggregateRaw"].includes(this.params.action);
      }
      getComputedFields() {
        if (this.params.modelName)
          return this.params.extensions.getAllComputedFields(this.params.modelName);
      }
      findField(t) {
        var _a6;
        return (_a6 = this.model) == null ? void 0 : _a6.fields.find((r) => r.name === t);
      }
      nestSelection(t) {
        let r = this.findField(t), n = (r == null ? void 0 : r.kind) === "object" ? r.type : void 0;
        return new e(__spreadProps(__spreadValues({}, this.params), { modelName: n, selectionPath: this.params.selectionPath.concat(t) }));
      }
      nestArgument(t) {
        return new e(__spreadProps(__spreadValues({}, this.params), { argumentPath: this.params.argumentPath.concat(t) }));
      }
    };
    var Kl = (e) => ({ command: e });
    var Ql = (e) => e.strings.reduce((t, r, n) => `${t}@P${n}${r}`);
    function Vr(e) {
      try {
        return Jl(e, "fast");
      } catch (e2) {
        return Jl(e, "slow");
      }
    }
    function Jl(e, t) {
      return JSON.stringify(e.map((r) => bg(r, t)));
    }
    function bg(e, t) {
      return typeof e == "bigint" ? { prisma__type: "bigint", prisma__value: e.toString() } : Lt(e) ? { prisma__type: "date", prisma__value: e.toJSON() } : Ne.isDecimal(e) ? { prisma__type: "decimal", prisma__value: e.toJSON() } : Buffer.isBuffer(e) ? { prisma__type: "bytes", prisma__value: e.toString("base64") } : xg(e) || ArrayBuffer.isView(e) ? { prisma__type: "bytes", prisma__value: Buffer.from(e).toString("base64") } : typeof e == "object" && t === "slow" ? Hl(e) : e;
    }
    function xg(e) {
      return e instanceof ArrayBuffer || e instanceof SharedArrayBuffer ? true : typeof e == "object" && e !== null ? e[Symbol.toStringTag] === "ArrayBuffer" || e[Symbol.toStringTag] === "SharedArrayBuffer" : false;
    }
    function Hl(e) {
      if (typeof e != "object" || e === null)
        return e;
      if (typeof e.toJSON == "function")
        return e.toJSON();
      if (Array.isArray(e))
        return e.map(Gl);
      let t = {};
      for (let r of Object.keys(e))
        t[r] = Gl(e[r]);
      return t;
    }
    function Gl(e) {
      return typeof e == "bigint" ? e.toString() : Hl(e);
    }
    var wg = /^(\s*alter\s)/i;
    var Wl = $("prisma:client");
    function Oo(e, t, r, n) {
      if (!(e !== "postgresql" && e !== "cockroachdb") && r.length > 0 && wg.exec(t))
        throw new Error(`Running ALTER using ${n} is not supported
Using the example below you can still execute your query with Prisma, but please note that it is vulnerable to SQL injection attacks and requires you to take care of input sanitization.

Example:
  await prisma.$executeRawUnsafe(\`ALTER USER prisma WITH PASSWORD '\${password}'\`)

More Information: https://pris.ly/d/execute-raw
`);
    }
    var Do = ({ clientMethod: e, activeProvider: t, driverAdapterProvider: r }) => (n) => {
      r !== void 0 && (t = r);
      let i = "", o;
      if (Array.isArray(n)) {
        let [s, ...a] = n;
        i = s, o = { values: Vr(a || []), __prismaRawParameters__: true };
      } else
        switch (t) {
          case "sqlite":
          case "mysql": {
            i = n.sql, o = { values: Vr(n.values), __prismaRawParameters__: true };
            break;
          }
          case "cockroachdb":
          case "postgresql":
          case "postgres": {
            i = n.text, o = { values: Vr(n.values), __prismaRawParameters__: true };
            break;
          }
          case "sqlserver": {
            i = Ql(n), o = { values: Vr(n.values), __prismaRawParameters__: true };
            break;
          }
          default:
            throw new Error(`The ${t} provider does not support ${e}`);
        }
      return (o == null ? void 0 : o.values) ? Wl(`prisma.${e}(${i}, ${o.values})`) : Wl(`prisma.${e}(${i})`), { query: i, parameters: o };
    };
    var zl = { requestArgsToMiddlewareArgs(e) {
      return [e.strings, ...e.values];
    }, middlewareArgsToRequestArgs(e) {
      let [t, ...r] = e;
      return new fe(t, r);
    } };
    var Yl = { requestArgsToMiddlewareArgs(e) {
      return [e];
    }, middlewareArgsToRequestArgs(e) {
      return e[0];
    } };
    function No(e) {
      return function(r) {
        let n, i = (o = e) => {
          try {
            return o === void 0 || (o == null ? void 0 : o.kind) === "itx" ? n != null ? n : n = Zl(r(o)) : Zl(r(o));
          } catch (s) {
            return Promise.reject(s);
          }
        };
        return { then(o, s) {
          return i().then(o, s);
        }, catch(o) {
          return i().catch(o);
        }, finally(o) {
          return i().finally(o);
        }, requestTransaction(o) {
          let s = i(o);
          return s.requestTransaction ? s.requestTransaction(o) : s;
        }, [Symbol.toStringTag]: "PrismaPromise" };
      };
    }
    function Zl(e) {
      return typeof e.then == "function" ? e : Promise.resolve(e);
    }
    var Xl = { isEnabled() {
      return false;
    }, getTraceParent() {
      return "00-10-10-00";
    }, createEngineSpan() {
      return __async(this, null, function* () {
      });
    }, getActiveContext() {
    }, runInChildSpan(e, t) {
      return t();
    } };
    var Lo = class {
      isEnabled() {
        return this.getGlobalTracingHelper().isEnabled();
      }
      getTraceParent(t) {
        return this.getGlobalTracingHelper().getTraceParent(t);
      }
      createEngineSpan(t) {
        return this.getGlobalTracingHelper().createEngineSpan(t);
      }
      getActiveContext() {
        return this.getGlobalTracingHelper().getActiveContext();
      }
      runInChildSpan(t, r) {
        return this.getGlobalTracingHelper().runInChildSpan(t, r);
      }
      getGlobalTracingHelper() {
        var _a6, _b2;
        return (_b2 = (_a6 = globalThis.PRISMA_INSTRUMENTATION) == null ? void 0 : _a6.helper) != null ? _b2 : Xl;
      }
    };
    function eu(e) {
      return e.includes("tracing") ? new Lo() : Xl;
    }
    function tu(e, t = () => {
    }) {
      let r, n = new Promise((i) => r = i);
      return { then(i) {
        return --e === 0 && r(t()), i == null ? void 0 : i(n);
      } };
    }
    function ru(e) {
      return typeof e == "string" ? e : e.reduce((t, r) => {
        let n = typeof r == "string" ? r : r.level;
        return n === "query" ? t : t && (r === "info" || t === "info") ? "info" : n;
      }, void 0);
    }
    var ri = class {
      constructor() {
        this._middlewares = [];
      }
      use(t) {
        this._middlewares.push(t);
      }
      get(t) {
        return this._middlewares[t];
      }
      has(t) {
        return !!this._middlewares[t];
      }
      length() {
        return this._middlewares.length;
      }
    };
    var iu = F(Vi());
    function ni(e) {
      return typeof e.batchRequestIdx == "number";
    }
    function ii(e) {
      return e === null ? e : Array.isArray(e) ? e.map(ii) : typeof e == "object" ? Eg(e) ? Pg(e) : Ot(e, ii) : e;
    }
    function Eg(e) {
      return e !== null && typeof e == "object" && typeof e.$type == "string";
    }
    function Pg({ $type: e, value: t }) {
      switch (e) {
        case "BigInt":
          return BigInt(t);
        case "Bytes":
          return Buffer.from(t, "base64");
        case "DateTime":
          return new Date(t);
        case "Decimal":
          return new Ne(t);
        case "Json":
          return JSON.parse(t);
        default:
          yt(t, "Unknown tagged value");
      }
    }
    function nu(e) {
      if (e.action !== "findUnique" && e.action !== "findUniqueOrThrow")
        return;
      let t = [];
      return e.modelName && t.push(e.modelName), e.query.arguments && t.push($o(e.query.arguments)), t.push($o(e.query.selection)), t.join("");
    }
    function $o(e) {
      return `(${Object.keys(e).sort().map((r) => {
        let n = e[r];
        return typeof n == "object" && n !== null ? `(${r} ${$o(n)})` : r;
      }).join(" ")})`;
    }
    var vg = { aggregate: false, aggregateRaw: false, createMany: true, createOne: true, deleteMany: true, deleteOne: true, executeRaw: true, findFirst: false, findFirstOrThrow: false, findMany: false, findRaw: false, findUnique: false, findUniqueOrThrow: false, groupBy: false, queryRaw: false, runCommandRaw: true, updateMany: true, updateOne: true, upsertOne: true };
    function qo(e) {
      return vg[e];
    }
    var oi = class {
      constructor(t) {
        this.options = t;
        this.tickActive = false;
        this.batches = {};
      }
      request(t) {
        let r = this.options.batchBy(t);
        return r ? (this.batches[r] || (this.batches[r] = [], this.tickActive || (this.tickActive = true, process.nextTick(() => {
          this.dispatchBatches(), this.tickActive = false;
        }))), new Promise((n, i) => {
          this.batches[r].push({ request: t, resolve: n, reject: i });
        })) : this.options.singleLoader(t);
      }
      dispatchBatches() {
        for (let t in this.batches) {
          let r = this.batches[t];
          delete this.batches[t], r.length === 1 ? this.options.singleLoader(r[0].request).then((n) => {
            n instanceof Error ? r[0].reject(n) : r[0].resolve(n);
          }).catch((n) => {
            r[0].reject(n);
          }) : (r.sort((n, i) => this.options.batchOrder(n.request, i.request)), this.options.batchLoader(r.map((n) => n.request)).then((n) => {
            if (n instanceof Error)
              for (let i = 0; i < r.length; i++)
                r[i].reject(n);
            else
              for (let i = 0; i < r.length; i++) {
                let o = n[i];
                o instanceof Error ? r[i].reject(o) : r[i].resolve(o);
              }
          }).catch((n) => {
            for (let i = 0; i < r.length; i++)
              r[i].reject(n);
          }));
        }
      }
      get [Symbol.toStringTag]() {
        return "DataLoader";
      }
    };
    var Tg = $("prisma:client:request_handler");
    var si = class {
      constructor(t, r) {
        this.logEmitter = r, this.client = t, this.dataloader = new oi({ batchLoader: Ga((_0) => __async(this, [_0], function* ({ requests: n, customDataProxyFetch: i }) {
          let { transaction: o, otelParentCtx: s } = n[0], a = n.map((p) => p.protocolQuery), l = this.client._tracingHelper.getTraceParent(s), u = n.some((p) => qo(p.protocolQuery.action));
          return (yield this.client._engine.requestBatch(a, { traceparent: l, transaction: _g(o), containsWrite: u, customDataProxyFetch: i })).map((p, d) => {
            if (p instanceof Error)
              return p;
            try {
              return this.mapQueryEngineResult(n[d], p);
            } catch (f) {
              return f;
            }
          });
        })), singleLoader: (n) => __async(this, null, function* () {
          var _a6;
          let i = ((_a6 = n.transaction) == null ? void 0 : _a6.kind) === "itx" ? ou(n.transaction) : void 0, o = yield this.client._engine.request(n.protocolQuery, { traceparent: this.client._tracingHelper.getTraceParent(), interactiveTransaction: i, isWrite: qo(n.protocolQuery.action), customDataProxyFetch: n.customDataProxyFetch });
          return this.mapQueryEngineResult(n, o);
        }), batchBy: (n) => {
          var _a6;
          return ((_a6 = n.transaction) == null ? void 0 : _a6.id) ? `transaction-${n.transaction.id}` : nu(n.protocolQuery);
        }, batchOrder(n, i) {
          var _a6, _b2;
          return ((_a6 = n.transaction) == null ? void 0 : _a6.kind) === "batch" && ((_b2 = i.transaction) == null ? void 0 : _b2.kind) === "batch" ? n.transaction.index - i.transaction.index : 0;
        } });
      }
      request(t) {
        return __async(this, null, function* () {
          try {
            return yield this.dataloader.request(t);
          } catch (r) {
            let { clientMethod: n, callsite: i, transaction: o, args: s, modelName: a } = t;
            this.handleAndLogRequestError({ error: r, clientMethod: n, callsite: i, transaction: o, args: s, modelName: a });
          }
        });
      }
      mapQueryEngineResult({ dataPath: t, unpacker: r }, n) {
        let i = n == null ? void 0 : n.data, o = n == null ? void 0 : n.elapsed, s = this.unpack(i, t, r);
        return process.env.PRISMA_CLIENT_GET_TIME ? { data: s, elapsed: o } : s;
      }
      handleAndLogRequestError(t) {
        try {
          this.handleRequestError(t);
        } catch (r) {
          throw this.logEmitter && this.logEmitter.emit("error", { message: r.message, target: t.clientMethod, timestamp: /* @__PURE__ */ new Date() }), r;
        }
      }
      handleRequestError({ error: t, clientMethod: r, callsite: n, transaction: i, args: o, modelName: s }) {
        if (Tg(t), Cg(t, i) || t instanceof Ve)
          throw t;
        if (t instanceof H && Ag(t)) {
          let l = su(t.meta);
          ti({ args: o, errors: [l], callsite: n, errorFormat: this.client._errorFormat, originalMethod: r, clientVersion: this.client._clientVersion });
        }
        let a = t.message;
        if (n && (a = Qt({ callsite: n, originalMethod: r, isPanic: t.isPanic, showColors: this.client._errorFormat === "pretty", message: a })), a = this.sanitizeMessage(a), t.code) {
          let l = s ? __spreadValues({ modelName: s }, t.meta) : t.meta;
          throw new H(a, { code: t.code, clientVersion: this.client._clientVersion, meta: l, batchRequestIdx: t.batchRequestIdx });
        } else {
          if (t.isPanic)
            throw new be(a, this.client._clientVersion);
          if (t instanceof W)
            throw new W(a, { clientVersion: this.client._clientVersion, batchRequestIdx: t.batchRequestIdx });
          if (t instanceof k)
            throw new k(a, this.client._clientVersion);
          if (t instanceof be)
            throw new be(a, this.client._clientVersion);
        }
        throw t.clientVersion = this.client._clientVersion, t;
      }
      sanitizeMessage(t) {
        return this.client._errorFormat && this.client._errorFormat !== "pretty" ? (0, iu.default)(t) : t;
      }
      unpack(t, r, n) {
        if (!t || (t.data && (t = t.data), !t))
          return t;
        let i = Object.values(t)[0], o = r.filter((a) => a !== "select" && a !== "include"), s = ii(uo(i, o));
        return n ? n(s) : s;
      }
      get [Symbol.toStringTag]() {
        return "RequestHandler";
      }
    };
    function _g(e) {
      if (e) {
        if (e.kind === "batch")
          return { kind: "batch", options: { isolationLevel: e.isolationLevel } };
        if (e.kind === "itx")
          return { kind: "itx", options: ou(e) };
        yt(e, "Unknown transaction kind");
      }
    }
    function ou(e) {
      return { id: e.id, payload: e.payload };
    }
    function Cg(e, t) {
      return ni(e) && (t == null ? void 0 : t.kind) === "batch" && e.batchRequestIdx !== t.index;
    }
    function Ag(e) {
      return e.code === "P2009" || e.code === "P2012";
    }
    function su(e) {
      if (e.kind === "Union")
        return { kind: "Union", errors: e.errors.map(su) };
      if (Array.isArray(e.selectionPath)) {
        let [, ...t] = e.selectionPath;
        return __spreadProps(__spreadValues({}, e), { selectionPath: t });
      }
      return e;
    }
    var au = "5.8.0";
    var lu = au;
    function uu(e) {
      return e.map((t) => {
        let r = {};
        for (let n of Object.keys(t))
          r[n] = cu(t[n]);
        return r;
      });
    }
    function cu({ prisma__type: e, prisma__value: t }) {
      switch (e) {
        case "bigint":
          return BigInt(t);
        case "bytes":
          return Buffer.from(t, "base64");
        case "decimal":
          return new Ne(t);
        case "datetime":
        case "date":
          return new Date(t);
        case "time":
          return /* @__PURE__ */ new Date(`1970-01-01T${t}Z`);
        case "array":
          return t.map(cu);
        default:
          return t;
      }
    }
    var fu = F(Io());
    var U = class extends Error {
      constructor(t) {
        super(t + `
Read more at https://pris.ly/d/client-constructor`), this.name = "PrismaClientConstructorValidationError";
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientConstructorValidationError";
      }
    };
    v(U, "PrismaClientConstructorValidationError");
    var pu = ["datasources", "datasourceUrl", "errorFormat", "adapter", "log", "__internal"];
    var du = ["pretty", "colorless", "minimal"];
    var mu = ["info", "query", "warn", "error"];
    var Mg = { datasources: (e, { datasourceNames: t }) => {
      if (e) {
        if (typeof e != "object" || Array.isArray(e))
          throw new U(`Invalid value ${JSON.stringify(e)} for "datasources" provided to PrismaClient constructor`);
        for (let [r, n] of Object.entries(e)) {
          if (!t.includes(r)) {
            let i = Yt(r, t) || ` Available datasources: ${t.join(", ")}`;
            throw new U(`Unknown datasource ${r} provided to PrismaClient constructor.${i}`);
          }
          if (typeof n != "object" || Array.isArray(n))
            throw new U(`Invalid value ${JSON.stringify(e)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
          if (n && typeof n == "object")
            for (let [i, o] of Object.entries(n)) {
              if (i !== "url")
                throw new U(`Invalid value ${JSON.stringify(e)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
              if (typeof o != "string")
                throw new U(`Invalid value ${JSON.stringify(o)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
            }
        }
      }
    }, adapter: (e, t) => {
      if (e === null)
        return;
      if (e === void 0)
        throw new U('"adapter" property must not be undefined, use null to conditionally disable driver adapters.');
      if (!zn(t).includes("driverAdapters"))
        throw new U('"adapter" property can only be provided to PrismaClient constructor when "driverAdapters" preview feature is enabled.');
      if (gt() === "binary")
        throw new U('Cannot use a driver adapter with the "binary" Query Engine. Please use the "library" Query Engine.');
    }, datasourceUrl: (e) => {
      if (typeof e < "u" && typeof e != "string")
        throw new U(`Invalid value ${JSON.stringify(e)} for "datasourceUrl" provided to PrismaClient constructor.
Expected string or undefined.`);
    }, errorFormat: (e) => {
      if (e) {
        if (typeof e != "string")
          throw new U(`Invalid value ${JSON.stringify(e)} for "errorFormat" provided to PrismaClient constructor.`);
        if (!du.includes(e)) {
          let t = Yt(e, du);
          throw new U(`Invalid errorFormat ${e} provided to PrismaClient constructor.${t}`);
        }
      }
    }, log: (e) => {
      if (!e)
        return;
      if (!Array.isArray(e))
        throw new U(`Invalid value ${JSON.stringify(e)} for "log" provided to PrismaClient constructor.`);
      function t(r) {
        if (typeof r == "string" && !mu.includes(r)) {
          let n = Yt(r, mu);
          throw new U(`Invalid log level "${r}" provided to PrismaClient constructor.${n}`);
        }
      }
      for (let r of e) {
        t(r);
        let n = { level: t, emit: (i) => {
          let o = ["stdout", "event"];
          if (!o.includes(i)) {
            let s = Yt(i, o);
            throw new U(`Invalid value ${JSON.stringify(i)} for "emit" in logLevel provided to PrismaClient constructor.${s}`);
          }
        } };
        if (r && typeof r == "object")
          for (let [i, o] of Object.entries(r))
            if (n[i])
              n[i](o);
            else
              throw new U(`Invalid property ${i} for "log" provided to PrismaClient constructor`);
      }
    }, __internal: (e) => {
      if (!e)
        return;
      let t = ["debug", "hooks", "engine", "measurePerformance"];
      if (typeof e != "object")
        throw new U(`Invalid value ${JSON.stringify(e)} for "__internal" to PrismaClient constructor`);
      for (let [r] of Object.entries(e))
        if (!t.includes(r)) {
          let n = Yt(r, t);
          throw new U(`Invalid property ${JSON.stringify(r)} for "__internal" provided to PrismaClient constructor.${n}`);
        }
    } };
    function gu(e, t) {
      for (let [r, n] of Object.entries(e)) {
        if (!pu.includes(r)) {
          let i = Yt(r, pu);
          throw new U(`Unknown property ${r} provided to PrismaClient constructor.${i}`);
        }
        Mg[r](n, t);
      }
      if (e.datasourceUrl && e.datasources)
        throw new U('Can not use "datasourceUrl" and "datasources" options at the same time. Pick one of them');
    }
    function Yt(e, t) {
      if (t.length === 0 || typeof e != "string")
        return "";
      let r = Sg(e, t);
      return r ? ` Did you mean "${r}"?` : "";
    }
    function Sg(e, t) {
      if (t.length === 0)
        return null;
      let r = t.map((i) => ({ value: i, distance: (0, fu.default)(e, i) }));
      r.sort((i, o) => i.distance < o.distance ? -1 : 1);
      let n = r[0];
      return n.distance < 3 ? n.value : null;
    }
    function yu(e) {
      return e.length === 0 ? Promise.resolve([]) : new Promise((t, r) => {
        let n = new Array(e.length), i = null, o = false, s = 0, a = () => {
          o || (s++, s === e.length && (o = true, i ? r(i) : t(n)));
        }, l = (u) => {
          o || (o = true, r(u));
        };
        for (let u = 0; u < e.length; u++)
          e[u].then((c) => {
            n[u] = c, a();
          }, (c) => {
            if (!ni(c)) {
              l(c);
              return;
            }
            c.batchRequestIdx === u ? l(c) : (i || (i = c), a());
          });
      });
    }
    var lt = $("prisma:client");
    typeof globalThis == "object" && (globalThis.NODE_CLIENT = true);
    var Ig = { requestArgsToMiddlewareArgs: (e) => e, middlewareArgsToRequestArgs: (e) => e };
    var kg = Symbol.for("prisma.client.transaction.id");
    var Fg = { id: 0, nextId() {
      return ++this.id;
    } };
    function Eu(e) {
      class t {
        constructor(n) {
          var _a6, _b2, _c, _d2, _e2, _f2;
          this._middlewares = new ri();
          this._createPrismaPromise = No();
          this.$extends = qa;
          tl(e), n && gu(n, e);
          let i = (n == null ? void 0 : n.adapter) ? Yi(n.adapter) : void 0, o = new xu.EventEmitter().on("error", () => {
          });
          this._extensions = Ln.empty(), this._previewFeatures = zn(e), this._clientVersion = (_a6 = e.clientVersion) != null ? _a6 : lu, this._activeProvider = e.activeProvider, this._tracingHelper = eu(this._previewFeatures);
          let s = { rootEnvPath: e.relativeEnvPaths.rootEnvPath && Ur.default.resolve(e.dirname, e.relativeEnvPaths.rootEnvPath), schemaEnvPath: e.relativeEnvPaths.schemaEnvPath && Ur.default.resolve(e.dirname, e.relativeEnvPaths.schemaEnvPath) }, a = !i && ir(s, { conflictCheck: "none" }) || ((_b2 = e.injectableEdgeEnv) == null ? void 0 : _b2.call(e));
          try {
            let l = n != null ? n : {}, u = (_c = l.__internal) != null ? _c : {}, c = u.debug === true;
            c && $.enable("prisma:client");
            let p = Ur.default.resolve(e.dirname, e.relativePath);
            wu.default.existsSync(p) || (p = e.dirname), lt("dirname", e.dirname), lt("relativePath", e.relativePath), lt("cwd", p);
            let d = u.engine || {};
            if (l.errorFormat ? this._errorFormat = l.errorFormat : process.env.NODE_ENV === "production" ? this._errorFormat = "minimal" : process.env.NO_COLOR ? this._errorFormat = "colorless" : this._errorFormat = "colorless", this._runtimeDataModel = e.runtimeDataModel, this._engineConfig = { cwd: p, dirname: e.dirname, enableDebugLogs: c, allowTriggerPanic: d.allowTriggerPanic, datamodelPath: Ur.default.join(e.dirname, (_d2 = e.filename) != null ? _d2 : "schema.prisma"), prismaPath: (_e2 = d.binaryPath) != null ? _e2 : void 0, engineEndpoint: d.endpoint, generator: e.generator, showColors: this._errorFormat === "pretty", logLevel: l.log && ru(l.log), logQueries: l.log && !!(typeof l.log == "string" ? l.log === "query" : l.log.find((f) => typeof f == "string" ? f === "query" : f.level === "query")), env: (_f2 = a == null ? void 0 : a.parsed) != null ? _f2 : {}, flags: [], getQueryEngineWasmModule: e.getQueryEngineWasmModule, clientVersion: e.clientVersion, engineVersion: e.engineVersion, previewFeatures: this._previewFeatures, activeProvider: e.activeProvider, inlineSchema: e.inlineSchema, overrideDatasources: rl(l, e.datasourceNames), inlineDatasources: e.inlineDatasources, inlineSchemaHash: e.inlineSchemaHash, tracingHelper: this._tracingHelper, logEmitter: o, isBundled: e.isBundled, adapter: i }, lt("clientVersion", e.clientVersion), this._engine = Sl(e, this._engineConfig), this._requestHandler = new si(this, o), l.log)
              for (let f of l.log) {
                let y = typeof f == "string" ? f : f.emit === "stdout" ? f.level : null;
                y && this.$on(y, (g) => {
                  var _a7;
                  ar.log(`${(_a7 = ar.tags[y]) != null ? _a7 : ""}`, g.message || g.query);
                });
              }
            this._metrics = new Dt(this._engine);
          } catch (l) {
            throw l.clientVersion = this._clientVersion, l;
          }
          return this._appliedParent = Er(this);
        }
        get [Symbol.toStringTag]() {
          return "PrismaClient";
        }
        $use(n) {
          this._middlewares.use(n);
        }
        $on(n, i) {
          n === "beforeExit" ? this._engine.onBeforeExit(i) : n && this._engineConfig.logEmitter.on(n, i);
        }
        $connect() {
          try {
            return this._engine.start();
          } catch (n) {
            throw n.clientVersion = this._clientVersion, n;
          }
        }
        $disconnect() {
          return __async(this, null, function* () {
            try {
              yield this._engine.stop();
            } catch (n) {
              throw n.clientVersion = this._clientVersion, n;
            } finally {
              ss();
            }
          });
        }
        $executeRawInternal(n, i, o, s) {
          var _a6;
          let a = this._activeProvider, l = (_a6 = this._engineConfig.adapter) == null ? void 0 : _a6.provider;
          return this._request({ action: "executeRaw", args: o, transaction: n, clientMethod: i, argsMapper: Do({ clientMethod: i, activeProvider: a, driverAdapterProvider: l }), callsite: it(this._errorFormat), dataPath: [], middlewareArgsMapper: s });
        }
        $executeRaw(n, ...i) {
          return this._createPrismaPromise((o) => {
            if (n.raw !== void 0 || n.sql !== void 0) {
              let [s, a] = hu(n, i);
              return Oo(this._activeProvider, s.text, s.values, Array.isArray(n) ? "prisma.$executeRaw`<SQL>`" : "prisma.$executeRaw(sql`<SQL>`)"), this.$executeRawInternal(o, "$executeRaw", s, a);
            }
            throw new se("`$executeRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#executeraw\n", { clientVersion: this._clientVersion });
          });
        }
        $executeRawUnsafe(n, ...i) {
          return this._createPrismaPromise((o) => (Oo(this._activeProvider, n, i, "prisma.$executeRawUnsafe(<SQL>, [...values])"), this.$executeRawInternal(o, "$executeRawUnsafe", [n, ...i])));
        }
        $runCommandRaw(n) {
          if (e.activeProvider !== "mongodb")
            throw new se(`The ${e.activeProvider} provider does not support $runCommandRaw. Use the mongodb provider.`, { clientVersion: this._clientVersion });
          return this._createPrismaPromise((i) => this._request({ args: n, clientMethod: "$runCommandRaw", dataPath: [], action: "runCommandRaw", argsMapper: Kl, callsite: it(this._errorFormat), transaction: i }));
        }
        $queryRawInternal(n, i, o, s) {
          return __async(this, null, function* () {
            var _a6;
            let a = this._activeProvider, l = (_a6 = this._engineConfig.adapter) == null ? void 0 : _a6.provider;
            return this._request({ action: "queryRaw", args: o, transaction: n, clientMethod: i, argsMapper: Do({ clientMethod: i, activeProvider: a, driverAdapterProvider: l }), callsite: it(this._errorFormat), dataPath: [], middlewareArgsMapper: s }).then(uu);
          });
        }
        $queryRaw(n, ...i) {
          return this._createPrismaPromise((o) => {
            if (n.raw !== void 0 || n.sql !== void 0)
              return this.$queryRawInternal(o, "$queryRaw", ...hu(n, i));
            throw new se("`$queryRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#queryraw\n", { clientVersion: this._clientVersion });
          });
        }
        $queryRawUnsafe(n, ...i) {
          return this._createPrismaPromise((o) => this.$queryRawInternal(o, "$queryRawUnsafe", [n, ...i]));
        }
        _transactionWithArray({ promises: n, options: i }) {
          let o = Fg.nextId(), s = tu(n.length), a = n.map((l, u) => {
            var _a6, _b2;
            if ((l == null ? void 0 : l[Symbol.toStringTag]) !== "PrismaPromise")
              throw new Error("All elements of the array need to be Prisma Client promises. Hint: Please make sure you are not awaiting the Prisma client calls you intended to pass in the $transaction function.");
            let c = i == null ? void 0 : i.isolationLevel, p = { kind: "batch", id: o, index: u, isolationLevel: c, lock: s };
            return (_b2 = (_a6 = l.requestTransaction) == null ? void 0 : _a6.call(l, p)) != null ? _b2 : l;
          });
          return yu(a);
        }
        _transactionWithCallback(_0) {
          return __async(this, arguments, function* ({ callback: n, options: i }) {
            let o = { traceparent: this._tracingHelper.getTraceParent() }, s = yield this._engine.transaction("start", o, i), a;
            try {
              let l = __spreadValues({ kind: "itx" }, s);
              a = yield n(this._createItxClient(l)), yield this._engine.transaction("commit", o, s);
            } catch (l) {
              throw yield this._engine.transaction("rollback", o, s).catch(() => {
              }), l;
            }
            return a;
          });
        }
        _createItxClient(n) {
          return Er(Oe(On(this), [ce("_appliedParent", () => this._appliedParent._createItxClient(n)), ce("_createPrismaPromise", () => No(n)), ce(kg, () => n.id), hr(Gi)]));
        }
        $transaction(n, i) {
          let o;
          typeof n == "function" ? o = () => this._transactionWithCallback({ callback: n, options: i }) : o = () => this._transactionWithArray({ promises: n, options: i });
          let s = { name: "transaction", attributes: { method: "$transaction" } };
          return this._tracingHelper.runInChildSpan(s, o);
        }
        _request(n) {
          var _a6;
          n.otelParentCtx = this._tracingHelper.getActiveContext();
          let i = (_a6 = n.middlewareArgsMapper) != null ? _a6 : Ig, o = { args: i.requestArgsToMiddlewareArgs(n.args), dataPath: n.dataPath, runInTransaction: !!n.transaction, action: n.action, model: n.model }, s = { middleware: { name: "middleware", middleware: true, attributes: { method: "$use" }, active: false }, operation: { name: "operation", attributes: { method: o.action, model: o.model, name: o.model ? `${o.model}.${o.action}` : o.action } } }, a = -1, l = (u) => __async(this, null, function* () {
            let c = this._middlewares.get(++a);
            if (c)
              return this._tracingHelper.runInChildSpan(s.middleware, (_) => c(u, (A) => (_ == null ? void 0 : _.end(), l(A))));
            let _a7 = u, { runInTransaction: p, args: d } = _a7, f = __objRest(_a7, ["runInTransaction", "args"]), y = __spreadValues(__spreadValues({}, n), f);
            d && (y.args = i.middlewareArgsToRequestArgs(d)), n.transaction !== void 0 && p === false && delete y.transaction;
            let g = yield Ja(this, y);
            return y.model ? Va({ result: g, modelName: y.model, args: y.args, extensions: this._extensions, runtimeDataModel: this._runtimeDataModel }) : g;
          });
          return this._tracingHelper.runInChildSpan(s.operation, () => new bu.AsyncResource("prisma-client-request").runInAsyncScope(() => l(o)));
        }
        _executeRequest(_0) {
          return __async(this, arguments, function* ({ args: n, clientMethod: i, dataPath: o, callsite: s, action: a, model: l, argsMapper: u, transaction: c, unpacker: p, otelParentCtx: d, customDataProxyFetch: f }) {
            try {
              n = u ? u(n) : n;
              let y = { name: "serialize" }, g = this._tracingHelper.runInChildSpan(y, () => jl({ modelName: l, runtimeDataModel: this._runtimeDataModel, action: a, args: n, clientMethod: i, callsite: s, extensions: this._extensions, errorFormat: this._errorFormat, clientVersion: this._clientVersion }));
              return $.enabled("prisma:client") && (lt("Prisma Client call:"), lt(`prisma.${i}(${Ea(n)})`), lt("Generated request:"), lt(JSON.stringify(g, null, 2) + `
`)), (c == null ? void 0 : c.kind) === "batch" && (yield c.lock), this._requestHandler.request({ protocolQuery: g, modelName: l, action: a, clientMethod: i, dataPath: o, callsite: s, args: n, extensions: this._extensions, transaction: c, unpacker: p, otelParentCtx: d, otelChildCtx: this._tracingHelper.getActiveContext(), customDataProxyFetch: f });
            } catch (y) {
              throw y.clientVersion = this._clientVersion, y;
            }
          });
        }
        get $metrics() {
          if (!this._hasPreviewFlag("metrics"))
            throw new se("`metrics` preview feature must be enabled in order to access metrics API", { clientVersion: this._clientVersion });
          return this._metrics;
        }
        _hasPreviewFlag(n) {
          var _a6;
          return !!((_a6 = this._engineConfig.previewFeatures) == null ? void 0 : _a6.includes(n));
        }
      }
      return t;
    }
    function hu(e, t) {
      return Og(e) ? [new fe(e, t), zl] : [e, Yl];
    }
    function Og(e) {
      return Array.isArray(e) && Array.isArray(e.raw);
    }
    var Dg = /* @__PURE__ */ new Set(["toJSON", "$$typeof", "asymmetricMatch", Symbol.iterator, Symbol.toStringTag, Symbol.isConcatSpreadable, Symbol.toPrimitive]);
    function Pu(e) {
      return new Proxy(e, { get(t, r) {
        if (r in t)
          return t[r];
        if (!Dg.has(r))
          throw new TypeError(`Invalid enum value: ${String(r)}`);
      } });
    }
    function vu(e) {
      ir(e, { conflictCheck: "warn" });
    }
  }
});

// ../../node_modules/.pnpm/@prisma+client@5.8.0_prisma@5.8.0/node_modules/.prisma/client/index.js
var require_client = __commonJS({
  "../../node_modules/.pnpm/@prisma+client@5.8.0_prisma@5.8.0/node_modules/.prisma/client/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var {
      PrismaClientKnownRequestError: PrismaClientKnownRequestError2,
      PrismaClientUnknownRequestError: PrismaClientUnknownRequestError2,
      PrismaClientRustPanicError: PrismaClientRustPanicError2,
      PrismaClientInitializationError: PrismaClientInitializationError2,
      PrismaClientValidationError: PrismaClientValidationError2,
      NotFoundError: NotFoundError2,
      getPrismaClient: getPrismaClient2,
      sqltag: sqltag2,
      empty: empty2,
      join: join2,
      raw: raw2,
      Decimal: Decimal2,
      Debug: Debug2,
      objectEnumValues: objectEnumValues2,
      makeStrictEnum: makeStrictEnum2,
      Extensions: Extensions2,
      warnOnce: warnOnce2,
      defineDmmfProperty: defineDmmfProperty2,
      Public: Public2,
      detectRuntime: detectRuntime2
    } = require_library();
    var Prisma = {};
    exports2.Prisma = Prisma;
    exports2.$Enums = {};
    Prisma.prismaVersion = {
      client: "5.8.0",
      engine: "0a83d8541752d7582de2ebc1ece46519ce72a848"
    };
    Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError2;
    Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError2;
    Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError2;
    Prisma.PrismaClientInitializationError = PrismaClientInitializationError2;
    Prisma.PrismaClientValidationError = PrismaClientValidationError2;
    Prisma.NotFoundError = NotFoundError2;
    Prisma.Decimal = Decimal2;
    Prisma.sql = sqltag2;
    Prisma.empty = empty2;
    Prisma.join = join2;
    Prisma.raw = raw2;
    Prisma.validator = Public2.validator;
    Prisma.getExtensionContext = Extensions2.getExtensionContext;
    Prisma.defineExtension = Extensions2.defineExtension;
    Prisma.DbNull = objectEnumValues2.instances.DbNull;
    Prisma.JsonNull = objectEnumValues2.instances.JsonNull;
    Prisma.AnyNull = objectEnumValues2.instances.AnyNull;
    Prisma.NullTypes = {
      DbNull: objectEnumValues2.classes.DbNull,
      JsonNull: objectEnumValues2.classes.JsonNull,
      AnyNull: objectEnumValues2.classes.AnyNull
    };
    var path = require("path");
    exports2.Prisma.TransactionIsolationLevel = makeStrictEnum2({
      ReadUncommitted: "ReadUncommitted",
      ReadCommitted: "ReadCommitted",
      RepeatableRead: "RepeatableRead",
      Serializable: "Serializable"
    });
    exports2.Prisma.LogScalarFieldEnum = {
      id: "id",
      level: "level",
      message: "message",
      timestamp: "timestamp"
    };
    exports2.Prisma.SortOrder = {
      asc: "asc",
      desc: "desc"
    };
    exports2.Prisma.QueryMode = {
      default: "default",
      insensitive: "insensitive"
    };
    exports2.Prisma.ModelName = {
      Log: "Log"
    };
    var config2 = {
      "generator": {
        "name": "client",
        "provider": {
          "fromEnvVar": null,
          "value": "prisma-client-js"
        },
        "output": {
          "value": "/Users/elliotsutton/Documents/Cours/shop-online-app/node_modules/.pnpm/@prisma+client@5.8.0_prisma@5.8.0/node_modules/@prisma/client",
          "fromEnvVar": null
        },
        "config": {
          "engineType": "library"
        },
        "binaryTargets": [
          {
            "fromEnvVar": null,
            "value": "darwin-arm64",
            "native": true
          }
        ],
        "previewFeatures": []
      },
      "relativeEnvPaths": {
        "rootEnvPath": null,
        "schemaEnvPath": "../../../../../../apps/logger/.env"
      },
      "relativePath": "../../../../../../apps/logger/prisma",
      "clientVersion": "5.8.0",
      "engineVersion": "0a83d8541752d7582de2ebc1ece46519ce72a848",
      "datasourceNames": [
        "db"
      ],
      "activeProvider": "postgresql",
      "inlineDatasources": {
        "db": {
          "url": {
            "fromEnvVar": "DATABASE_URL",
            "value": null
          }
        }
      },
      "inlineSchema": "Z2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKfQoKZGF0YXNvdXJjZSBkYiB7CiAgcHJvdmlkZXIgPSAicG9zdGdyZXNxbCIKICB1cmwgICAgICA9IGVudigiREFUQUJBU0VfVVJMIikKfQoKbW9kZWwgTG9nIHsKICBpZCAgICAgICAgSW50ICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBsZXZlbCAgICAgU3RyaW5nCiAgbWVzc2FnZSAgIFN0cmluZwogIHRpbWVzdGFtcCBEYXRlVGltZSBAZGVmYXVsdChub3coKSkKfQo=",
      "inlineSchemaHash": "ad18ffbabb27bd58bd8594a3ac82ac0d87123c6f4890abaef202f1472ecd6cfe"
    };
    var fs2 = require("fs");
    config2.dirname = __dirname;
    var _a2;
    if (!fs2.existsSync(path.join(__dirname, "schema.prisma"))) {
      const alternativePaths = [
        "../../node_modules/.pnpm/@prisma+client@5.8.0_prisma@5.8.0/node_modules/.prisma/client",
        "../node_modules/.pnpm/@prisma+client@5.8.0_prisma@5.8.0/node_modules/.prisma/client"
      ];
      const alternativePath = (_a2 = alternativePaths.find((altPath) => {
        return fs2.existsSync(path.join(process.cwd(), altPath, "schema.prisma"));
      })) != null ? _a2 : alternativePaths[0];
      config2.dirname = path.join(process.cwd(), alternativePath);
      config2.isBundled = true;
    }
    config2.runtimeDataModel = JSON.parse('{"models":{"Log":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"level","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"message","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"timestamp","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false}},"enums":{},"types":{}}');
    defineDmmfProperty2(exports2.Prisma, config2.runtimeDataModel);
    config2.getQueryEngineWasmModule = void 0;
    var { warnEnvConflicts: warnEnvConflicts2 } = require_library();
    warnEnvConflicts2({
      rootEnvPath: config2.relativeEnvPaths.rootEnvPath && path.resolve(config2.dirname, config2.relativeEnvPaths.rootEnvPath),
      schemaEnvPath: config2.relativeEnvPaths.schemaEnvPath && path.resolve(config2.dirname, config2.relativeEnvPaths.schemaEnvPath)
    });
    var PrismaClient2 = getPrismaClient2(config2);
    exports2.PrismaClient = PrismaClient2;
    Object.assign(exports2, Prisma);
    path.join(__dirname, "libquery_engine-darwin-arm64.dylib.node");
    path.join(process.cwd(), "../../node_modules/.pnpm/@prisma+client@5.8.0_prisma@5.8.0/node_modules/.prisma/client/libquery_engine-darwin-arm64.dylib.node");
    path.join(__dirname, "schema.prisma");
    path.join(process.cwd(), "../../node_modules/.pnpm/@prisma+client@5.8.0_prisma@5.8.0/node_modules/.prisma/client/schema.prisma");
  }
});

// ../../node_modules/.pnpm/@prisma+client@5.8.0_prisma@5.8.0/node_modules/@prisma/client/index.js
var require_client2 = __commonJS({
  "../../node_modules/.pnpm/@prisma+client@5.8.0_prisma@5.8.0/node_modules/@prisma/client/index.js"(exports2, module2) {
    "use strict";
    module2.exports = __spreadValues({}, require_client());
  }
});

// src/index.ts
var import_body_parser = require("body-parser");
var import_express = __toESM(require("express"));
var import_morgan = __toESM(require("morgan"));
var import_cors = __toESM(require("cors"));

// src/lib/client.ts
var import_client = __toESM(require_client2());
var globalForPrisma = global;
var prisma = globalForPrisma.prisma || new import_client.PrismaClient();
if (process.env.NODE_ENV !== "production")
  globalForPrisma.prisma = prisma;
var client_default = prisma;

// src/index.ts
var app = (0, import_express.default)();
app.use((0, import_morgan.default)("dev"));
app.use((0, import_body_parser.urlencoded)({ extended: true }));
app.use((0, import_body_parser.json)());
app.use((0, import_cors.default)());
var port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`api running at port ${port}`);
});
app.get("/health", (req, res) => {
  res.json({ ok: true });
});
app.post("/log", (req, res) => __async(exports, null, function* () {
  const { level, message } = req.body;
  try {
    const log = yield client_default.log.create({
      data: {
        level,
        message
      }
    });
    console.log(log);
    res.status(201).json(log);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Unknown error" });
    }
  }
}));
app.get("/logs", (req, res) => __async(exports, null, function* () {
  try {
    const logs = yield client_default.log.findMany();
    res.status(200).json(logs);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Unknown error" });
    }
  }
}));
/*! Bundled license information:

@prisma/client/runtime/library.js:
  (*! Bundled license information:
  
  decimal.js/decimal.mjs:
    (*!
     *  decimal.js v10.4.3
     *  An arbitrary-precision Decimal type for JavaScript.
     *  https://github.com/MikeMcl/decimal.js
     *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
     *  MIT Licence
     *)
  *)
*/
