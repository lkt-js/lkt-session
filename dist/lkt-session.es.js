import { getOneYearInSeconds as p, secondsToMilliseconds as S, time as f } from "lkt-date-tools";
import { trim as O } from "lkt-string-tools";
class d {
  constructor(t) {
    t || (t = !0), this.value = t;
  }
  enabled() {
    return this.value;
  }
}
class r {
}
r.SUPPORTS_LOCAL_STORAGE = !1;
r.SUPPORTS_SESSION_STORAGE = !1;
r.COOKIE_FALLBACK = new d();
const L = () => {
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
}, A = () => {
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
}, w = (e) => {
  r.SUPPORTS_LOCAL_STORAGE = L(), r.SUPPORTS_SESSION_STORAGE = A(), typeof e == "object" && typeof e.cookiesFallback == "boolean" && (r.COOKIE_FALLBACK = new d(e.cookiesFallback));
}, c = (e, t, o) => {
  const s = new Date();
  o || (o = p());
  const a = s.getTime() + S(o);
  s.setTime(a);
  const i = `expires=${s.toUTCString()}`;
  document.cookie = `${e}=${t}, ${i}`;
}, u = (e) => {
  const t = `${e}=`, o = document.cookie.split(","), s = document.cookie.split("expires="), a = O(s[1]);
  let i = new Date(a);
  if (a && (i = new Date(a)) && i < new Date()) {
    g(e);
    return;
  }
  for (let n = 0; n < o.length; n++) {
    const l = O(o[n]);
    if (l.indexOf(t) == 0)
      return l.substring(t.length, l.length);
  }
  return "";
}, g = (e) => {
  c(e, "", -1);
}, C = (e, t, o) => {
  if (!r.SUPPORTS_SESSION_STORAGE) {
    if (!r.COOKIE_FALLBACK.enabled())
      throw new Error("Browser doesn't support sessionStorage and cookies fallback is disabled");
    return c(e, t, o);
  }
  const s = { value: t, expires: null };
  !!o && typeof o == "number" && (s.expires = new Date(
    f() + S(o)
  ).toString()), sessionStorage.setItem(e, JSON.stringify(s));
}, T = (e) => {
  if (!r.SUPPORTS_SESSION_STORAGE) {
    if (!r.COOKIE_FALLBACK.enabled())
      throw new Error("Browser doesn't support sessionStorage and cookies fallback is disabled");
    return u(e);
  }
  const t = JSON.parse(sessionStorage.getItem(e));
  if (!t)
    return;
  const o = typeof t.expires == "string" && t.expires.length > 0;
  let s;
  if (o && (s = new Date(t.expires)) && s < new Date()) {
    b(e);
    return;
  }
  return t.value;
}, b = (e) => {
  if (!r.SUPPORTS_SESSION_STORAGE) {
    if (!r.COOKIE_FALLBACK.enabled())
      throw new Error("Browser doesn't support sessionStorage and cookies fallback is disabled");
    return g(e);
  }
  return sessionStorage.removeItem(e);
}, m = (e, t, o) => {
  if (!r.SUPPORTS_LOCAL_STORAGE) {
    if (!r.COOKIE_FALLBACK.enabled())
      throw new Error("Browser doesn't support localStorage and cookies fallback is disabled");
    return c(e, t, o);
  }
  const s = { value: t, expires: null };
  !!o && typeof o == "number" && (s.expires = new Date(
    f() + S(o)
  ).toString()), localStorage.setItem(e, JSON.stringify(s));
}, P = (e) => {
  if (!r.SUPPORTS_LOCAL_STORAGE) {
    if (!r.COOKIE_FALLBACK.enabled())
      throw new Error("Browser doesn't support localStorage and cookies fallback is disabled");
    return u(e);
  }
  const t = JSON.parse(localStorage.getItem(e));
  if (!t)
    return;
  const o = typeof t.expires == "string" && t.expires.length > 0;
  let s;
  if (o && (s = new Date(t.expires)) && s < new Date()) {
    E(e);
    return;
  }
  return t.value;
}, E = (e) => {
  if (!r.SUPPORTS_LOCAL_STORAGE) {
    if (!r.COOKIE_FALLBACK.enabled())
      throw new Error("Browser doesn't support localStorage and cookies fallback is disabled");
    return g(e);
  }
  return localStorage.removeItem(e);
}, R = {
  install: (e, t) => {
    w(t);
  }
};
export {
  w as configureLktSession,
  R as default,
  u as getCookie,
  P as getLocalStorage,
  T as getSessionStorage,
  g as removeCookie,
  E as removeLocalStorage,
  b as removeSessionStorage,
  c as setCookie,
  m as setLocalStorage,
  C as setSessionStorage
};
