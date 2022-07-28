import {getOneYearInSeconds, secondsToMilliseconds} from "lkt-tools";

export const setCookie = (name: string, value: string, expiresInSeconds: number = null): void => {
    let d = new Date();
    if (!expiresInSeconds) {
        expiresInSeconds = getOneYearInSeconds();
    }
    let time = d.getTime() + secondsToMilliseconds(expiresInSeconds);
    d.setTime(time);
    let expiresStr = "expires=" + d.toUTCString();
    document.cookie = name + '=' + value + ', ' + expiresStr;
}

export const getCookie = (name: string): string => {
    let N = name + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(N) == 0) {
            return c.substring(N.length, c.length);
        }
    }
    return '';
}

export const removeCookie = (name: string): void => {
    setCookie(name, '', -1);
}
