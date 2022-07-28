import { isNumeric as c, time as g, secondsToMilliseconds as l, isString as u, getOneYearInSeconds as O, supportsLocalStorage as p } from "lkt-tools";
class s {
}
s.SUPPORTS_LOCAL_STORAGE = !1;
const P = (e, t, o = null) => {
  let r = { value: t, expires: null };
  !!o && c(o) && (r.expires = new Date(g() + l(o)).toString()), localStorage.setItem(e, JSON.stringify(r));
}, L = (e) => {
  let t = JSON.parse(localStorage.getItem(e));
  if (!t)
    return;
  let o = u(t.expires) && t.expires.length > 0, r;
  if (o && (r = new Date(t.expires)) && r < new Date()) {
    n(e);
    return;
  }
  return t.value;
}, n = (e) => localStorage.removeItem(e), a = (e, t, o = null) => {
  let r = new Date();
  o || (o = O());
  let i = r.getTime() + l(o);
  r.setTime(i);
  let S = "expires=" + r.toUTCString();
  document.cookie = e + "=" + t + ", " + S;
}, f = (e) => {
  let t = e + "=", o = document.cookie.split(";");
  for (let r = 0; r < o.length; r++) {
    let i = o[r];
    for (; i.charAt(0) == " "; )
      i = i.substring(1);
    if (i.indexOf(t) == 0)
      return i.substring(t.length, i.length);
  }
  return "";
}, T = (e) => {
  a(e, "", -1);
}, A = (e, t, o = null) => s.SUPPORTS_LOCAL_STORAGE ? P(e, t, o) : a(e, String(t), o), R = (e) => s.SUPPORTS_LOCAL_STORAGE ? L(e) : f(e), _ = (e) => s.SUPPORTS_LOCAL_STORAGE ? n(e) : T(e), C = {
  install: (e, t) => {
    s.SUPPORTS_LOCAL_STORAGE = p();
  }
};
export {
  C as default,
  f as getCookie,
  R as getSessionProp,
  T as removeCookie,
  _ as removeSessionProp,
  a as setCookie,
  A as setSessionProp
};
