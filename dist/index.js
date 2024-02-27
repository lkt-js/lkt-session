import { configureLktSession } from './functions/functions';
export { getCookie, removeCookie, setCookie, } from './functions/functions-cookies';
export { getSessionStorage, removeSessionStorage, setSessionStorage, } from './functions/functions-session';
export { getLocalStorage, removeLocalStorage, setLocalStorage, } from './functions/functions-storage';
export { configureLktSession };
const LktSession = {
    install: (app, options) => {
        configureLktSession(options);
    },
};
export default LktSession;
