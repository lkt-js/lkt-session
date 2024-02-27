import { secondsToMilliseconds, time } from 'lkt-date-tools';
import { Settings } from "../settings/Settings";
import { getCookie, removeCookie, setCookie } from "./functions-cookies";
export const setSessionStorage = (name, value, expiresInSeconds) => {
    if (!Settings.SUPPORTS_SESSION_STORAGE) {
        if (!Settings.COOKIE_FALLBACK.enabled()) {
            throw new Error(`Browser doesn't support sessionStorage and cookies fallback is disabled`);
        }
        return setCookie(name, value, expiresInSeconds);
    }
    const data = { value, expires: undefined };
    if (!!expiresInSeconds && typeof expiresInSeconds === 'number') {
        data.expires = new Date(time() + secondsToMilliseconds(expiresInSeconds)).toString();
    }
    sessionStorage.setItem(name, JSON.stringify(data));
};
export const getSessionStorage = (name) => {
    if (!Settings.SUPPORTS_SESSION_STORAGE) {
        if (!Settings.COOKIE_FALLBACK.enabled()) {
            throw new Error(`Browser doesn't support sessionStorage and cookies fallback is disabled`);
        }
        return getCookie(name);
    }
    //@ts-ignore
    const cached = JSON.parse(sessionStorage.getItem(name));
    if (!cached) {
        return undefined;
    }
    const hasDate = typeof cached.expires === 'string' && cached.expires.length > 0;
    let date;
    //@ts-ignore
    if (hasDate && (date = new Date(cached.expires)) && date < new Date()) {
        removeSessionStorage(name);
        return undefined;
    }
    return cached.value;
};
export const removeSessionStorage = (name) => {
    if (!Settings.SUPPORTS_SESSION_STORAGE) {
        if (!Settings.COOKIE_FALLBACK.enabled()) {
            throw new Error(`Browser doesn't support sessionStorage and cookies fallback is disabled`);
        }
        return removeCookie(name);
    }
    return sessionStorage.removeItem(name);
};
