import {Settings} from "../settings/Settings";
import {getLocalStorageProp, removeLocalStorageProp, setLocalStorageProp} from "./functions-storage";
import {getCookie, removeCookie, setCookie} from "./functions-cookies";

export const setSessionProp = (name: string, value: any, expiresInSeconds: number = null) => {
    if (Settings.SUPPORTS_LOCAL_STORAGE) {
        return setLocalStorageProp(name, value, expiresInSeconds);
    }
    return setCookie(name, String(value), expiresInSeconds);
}

export const getSessionProp = (name: string) => {
    if (Settings.SUPPORTS_LOCAL_STORAGE) {
        return getLocalStorageProp(name);
    }
    return getCookie(name);
}

export const removeSessionProp = (name: string) => {
    if (Settings.SUPPORTS_LOCAL_STORAGE) {
        return removeLocalStorageProp(name);
    }
    return removeCookie(name);
}