import {IStorageData} from "../interfaces/IStorageData";
import {isNumeric, isString, secondsToMilliseconds, time} from "lkt-tools";

export const setLocalStorageProp = (name: string, value: any, expiresInSeconds: number = null) => {
    let data: IStorageData = {value: value, expires: null};

    if (!!expiresInSeconds && isNumeric(expiresInSeconds)) {
        data.expires = (new Date(time() + secondsToMilliseconds(expiresInSeconds))).toString();
    }

    localStorage.setItem(name, JSON.stringify(data));
}

export const getLocalStorageProp = (name: string) => {
    let cached: IStorageData = JSON.parse(localStorage.getItem(name));

    if (!cached) {
        return undefined;
    }

    let hasDate = isString(cached.expires) && cached.expires.length > 0;
    let date;

    if (hasDate && (date = new Date(cached.expires)) && date < new Date()) {
        removeLocalStorageProp(name);
        return undefined;
    }

    return cached.value;
}

export const removeLocalStorageProp = (name: string) => {
    return localStorage.removeItem(name);
}