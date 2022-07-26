import { isNumeric as S, time as c, isDate as a, supportsLocalStorage as u } from "lkt-tools";
class s {
}
s.SUPPORTS_LOCAL_STORAGE = !1;
const g = (e, t, o = null) => {
  let r = { value: t, expires: null };
  S(o) && (r.expires = new Date(c() + o * 1e4)), localStorage.setItem(e, JSON.stringify(r));
}, p = (e) => {
  let t = JSON.parse(localStorage.getItem(e));
  if (!!t) {
    if (a(t.expires) && t.expires < new Date()) {
      i(e);
      return;
    }
    return t.value;
  }
}, i = (e) => localStorage.removeItem(e), l = (e, t, o = null) => {
  let r = new Date();
  o || (o = r.getTime() + 365 * 24 * 60 * 60 * 1e3), r.setTime(o);
  let n = "expires=" + r.toUTCString();
  document.cookie = e + "=" + t + ", " + n;
}, O = (e) => {
  let t = e + "=", o = document.cookie.split(";");
  for (let r = 0; r < o.length; r++) {
    let n = o[r];
    for (; n.charAt(0) == " "; )
      n = n.substring(1);
    if (n.indexOf(t) == 0)
      return n.substring(t.length, n.length);
  }
  return "";
}, P = (e) => {
  l(e, "", -1);
}, f = (e, t, o = null) => s.SUPPORTS_LOCAL_STORAGE ? g(e, t, o) : l(e, String(t), o), T = (e) => s.SUPPORTS_LOCAL_STORAGE ? p(e) : O(e), m = (e) => s.SUPPORTS_LOCAL_STORAGE ? i(e) : P(e), A = {
  install: (e, t) => {
    s.SUPPORTS_LOCAL_STORAGE = u();
  }
};
export {
  A as default,
  T as getSessionProp,
  m as removeSessionProp,
  f as setSessionProp
};
