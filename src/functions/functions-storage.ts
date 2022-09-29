import { secondsToMilliseconds, time } from 'lkt-date-tools';

import {Settings} from "../settings/Settings";
import { StoredData } from '../types/StoredData';
import {getCookie, removeCookie, setCookie} from "./functions-cookies";

export const setLocalStorage = (
  name: string,
  value: any,
  expiresInSeconds?: number
) => {
  if (!Settings.SUPPORTS_LOCAL_STORAGE) {
    if (!Settings.COOKIE_FALLBACK.enabled()) {
      throw new Error(`Browser doesn't support localStorage and cookies fallback is disabled`);
    }
    return setCookie(name, value, expiresInSeconds);
  }
  const data: StoredData = { value, expires: null };

  if (!!expiresInSeconds && typeof expiresInSeconds === 'number') {
    data.expires = new Date(
      time() + secondsToMilliseconds(expiresInSeconds)
    ).toString();
  }

  localStorage.setItem(name, JSON.stringify(data));
};

export const getLocalStorage = (name: string) => {
  if (!Settings.SUPPORTS_LOCAL_STORAGE) {
    if (!Settings.COOKIE_FALLBACK.enabled()) {
      throw new Error(`Browser doesn't support localStorage and cookies fallback is disabled`);
    }
    return getCookie(name);
  }
  const cached: StoredData = JSON.parse(localStorage.getItem(name));

  if (!cached) {
    return undefined;
  }

  const hasDate =
    typeof cached.expires === 'string' && cached.expires.length > 0;
  let date;

  if (hasDate && (date = new Date(cached.expires)) && date < new Date()) {
    removeLocalStorage(name);
    return undefined;
  }

  return cached.value;
};

export const removeLocalStorage = (name: string) => {
  if (!Settings.SUPPORTS_LOCAL_STORAGE) {
    if (!Settings.COOKIE_FALLBACK.enabled()) {
      throw new Error(`Browser doesn't support localStorage and cookies fallback is disabled`);
    }
    return removeCookie(name);
  }
  return localStorage.removeItem(name);
};
