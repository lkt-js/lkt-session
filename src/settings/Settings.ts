import {HasCookiesFallback} from "../value-objects/HasCookiesFallback";

export class Settings {
  static SUPPORTS_LOCAL_STORAGE = false;
  static SUPPORTS_SESSION_STORAGE = false;
  static COOKIE_FALLBACK = new HasCookiesFallback();
}
