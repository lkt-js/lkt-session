import {IStorageData} from "../interfaces/IStorageData";
//@ts-ignore
import {isNumeric, isDate, time} from "lkt-tools";

export const setLocalStorageProp = (name: string, value: any, expires: number = null) => {
    let data: IStorageData = {value: value, expires: null};

    if (isNumeric(expires)) {
        data.expires = new Date(time() + expires * 10000);
    }
    localStorage.setItem(name, JSON.stringify(data));
}

export const getLocalStorageProp = (name: string) => {
    let cached: IStorageData = JSON.parse(localStorage.getItem(name));

    if (!cached) {
        return undefined;
    }

    if (isDate(cached.expires) && cached.expires < new Date()) {
        removeLocalStorageProp(name);
        return undefined;
    }

    return cached.value;
}

export const removeLocalStorageProp = (name: string) => {
    return localStorage.removeItem(name);
}