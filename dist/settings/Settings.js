import { HasCookiesFallback } from "../value-objects/HasCookiesFallback";
export class Settings {
}
Settings.SUPPORTS_LOCAL_STORAGE = false;
Settings.SUPPORTS_SESSION_STORAGE = false;
Settings.COOKIE_FALLBACK = new HasCookiesFallback();
