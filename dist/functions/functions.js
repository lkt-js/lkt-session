import { Settings } from "../settings/Settings";
import { HasCookiesFallback } from "../value-objects/HasCookiesFallback";
import { supportsLocalStorage, supportsSessionStorage } from "./functionss-navigator";
export const configureLktSession = (options) => {
    Settings.SUPPORTS_LOCAL_STORAGE = supportsLocalStorage();
    Settings.SUPPORTS_SESSION_STORAGE = supportsSessionStorage();
    if (typeof options === 'object' && typeof options.cookiesFallback === 'boolean') {
        Settings.COOKIE_FALLBACK = new HasCookiesFallback(options.cookiesFallback);
    }
};
