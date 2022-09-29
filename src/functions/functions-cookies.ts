import { getOneYearInSeconds, secondsToMilliseconds } from 'lkt-date-tools';
import { trim } from 'lkt-string-tools';

export const setCookie = (
  name: string,
  value: string,
  expiresInSeconds?: number
): void => {
  const d = new Date();
  if (!expiresInSeconds) {
    expiresInSeconds = getOneYearInSeconds();
  }
  const time = d.getTime() + secondsToMilliseconds(expiresInSeconds);
  d.setTime(time);
  const expiresStr = `expires=${d.toUTCString()}`;
  document.cookie = `${name}=${value}, ${expiresStr}`;
};

export const getCookie = (name: string): string => {
  const N = `${name}=`;
  const ca = document.cookie.split(',');
  const expiresSplit = document.cookie.split('expires=');
  const expires = trim(expiresSplit[1]);
  let date = new Date(expires);

  if (expires && (date = new Date(expires)) && date < new Date()) {
    removeCookie(name);
    return undefined;
  }
  
  for (let i = 0; i < ca.length; i++) {
    const c = trim(ca[i]);
    if (c.indexOf(N) == 0) {
      return c.substring(N.length, c.length);
    }
  }
  return '';
};

export const removeCookie = (name: string): void => {
  setCookie(name, '', -1);
};
