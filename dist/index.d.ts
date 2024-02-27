import { App } from 'vue';
import { configureLktSession } from './functions/functions';
import { InstallOptions } from './types/InstallOptions';
export { getCookie, removeCookie, setCookie, } from './functions/functions-cookies';
export { getSessionStorage, removeSessionStorage, setSessionStorage, } from './functions/functions-session';
export { getLocalStorage, removeLocalStorage, setLocalStorage, } from './functions/functions-storage';
export { configureLktSession };
declare const LktSession: {
    install: (app: App, options: InstallOptions) => void;
};
export default LktSession;
