var L = Object.defineProperty;
var A = (e, t, o) => t in e ? L(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var i = (e, t, o) => (A(e, typeof t != "symbol" ? t + "" : t, o), o);
import { getOneYearInSeconds as w, secondsToMilliseconds as S, time as d } from "lkt-date-tools";
import { trim as g } from "lkt-string-tools";
class u {
  constructor(t) {
    i(this, "value");
    t || (t = !0), this.value = t;
  }
  enabled() {
    return this.value;
  }
}
class r {
}
i(r, "SUPPORTS_LOCAL_STORAGE", !1), i(r, "SUPPORTS_SESSION_STORAGE", !1), i(r, "COOKIE_FALLBACK", new u());
const b = () => {
  let e = 1;
  if (typeof localStorage == "object")
    try {
      localStorage.setItem("localStorage", "1"), localStorage.removeItem("localStorage");
    } catch {
      e = -1;
    }
  else
    e = -1;
  return e === 1;
}, E = () => {
  let e = 1;
  if (typeof sessionStorage == "object")
    try {
      sessionStorage.setItem("sessionStorage", "1"), sessionStorage.removeItem("sessionStorage");
    } catch {
      e = -1;
    }
  else
    e = -1;
  return e === 1;
}, _ = (e) => {
  r.SUPPORTS_LOCAL_STORAGE = b(), r.SUPPORTS_SESSION_STORAGE = E(), typeof e == "object" && typeof e.cookiesFallback == "boolean" && (r.COOKIE_FALLBACK = new u(e.cookiesFallback));
}, O = (e, t, o) => {
  const s = new Date();
  o || (o = w());
  const a = s.getTime() + S(o);
  s.setTime(a);
  const n = `expires=${s.toUTCString()}`;
  document.cookie = `${e}=${t}, ${n}`;
}, p = (e) => {
  const t = `${e}=`, o = document.cookie.split(","), s = document.cookie.split("expires="), a = g(s[1]);
  let n = new Date(a);
  if (a && (n = new Date(a)) && n < new Date()) {
    f(e);
    return;
  }
  for (let l = 0; l < o.length; l++) {
    const c = g(o[l]);
    if (c.indexOf(t) == 0)
      return c.substring(t.length, c.length);
  }
  return "";
}, f = (e) => {
  O(e, "", -1);
}, R = (e, t, o) => {
  if (!r.SUPPORTS_SESSION_STORAGE) {
    if (!r.COOKIE_FALLBACK.enabled())
      throw new Error("Browser doesn't support sessionStorage and cookies fallback is disabled");
    return O(e, t, o);
  }
  const s = { value: t, expires: null };
  !!o && typeof o == "number" && (s.expires = new Date(
    d() + S(o)
  ).toString()), sessionStorage.setItem(e, JSON.stringify(s));
}, h = (e) => {
  if (!r.SUPPORTS_SESSION_STORAGE) {
    if (!r.COOKIE_FALLBACK.enabled())
      throw new Error("Browser doesn't support sessionStorage and cookies fallback is disabled");
    return p(e);
  }
  const t = JSON.parse(sessionStorage.getItem(e));
  if (!t)
    return;
  const o = typeof t.expires == "string" && t.expires.length > 0;
  let s;
  if (o && (s = new Date(t.expires)) && s < new Date()) {
    k(e);
    return;
  }
  return t.value;
}, k = (e) => {
  if (!r.SUPPORTS_SESSION_STORAGE) {
    if (!r.COOKIE_FALLBACK.enabled())
      throw new Error("Browser doesn't support sessionStorage and cookies fallback is disabled");
    return f(e);
  }
  return sessionStorage.removeItem(e);
}, I = (e, t, o) => {
  if (!r.SUPPORTS_LOCAL_STORAGE) {
    if (!r.COOKIE_FALLBACK.enabled())
      throw new Error("Browser doesn't support localStorage and cookies fallback is disabled");
    return O(e, t, o);
  }
  const s = { value: t, expires: null };
  !!o && typeof o == "number" && (s.expires = new Date(
    d() + S(o)
  ).toString()), localStorage.setItem(e, JSON.stringify(s));
}, K = (e) => {
  if (!r.SUPPORTS_LOCAL_STORAGE) {
    if (!r.COOKIE_FALLBACK.enabled())
      throw new Error("Browser doesn't support localStorage and cookies fallback is disabled");
    return p(e);
  }
  const t = JSON.parse(localStorage.getItem(e));
  if (!t)
    return;
  const o = typeof t.expires == "string" && t.expires.length > 0;
  let s;
  if (o && (s = new Date(t.expires)) && s < new Date()) {
    C(e);
    return;
  }
  return t.value;
}, C = (e) => {
  if (!r.SUPPORTS_LOCAL_STORAGE) {
    if (!r.COOKIE_FALLBACK.enabled())
      throw new Error("Browser doesn't support localStorage and cookies fallback is disabled");
    return f(e);
  }
  return localStorage.removeItem(e);
}, B = {
  install: (e, t) => {
    _(t);
  }
};
export {
  _ as configureLktSession,
  B as default,
  p as getCookie,
  K as getLocalStorage,
  h as getSessionStorage,
  f as removeCookie,
  C as removeLocalStorage,
  k as removeSessionStorage,
  O as setCookie,
  I as setLocalStorage,
  R as setSessionStorage
};
