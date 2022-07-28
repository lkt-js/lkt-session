import { ILktObject } from "lkt-tools";
import { App } from "vue";
export { setSessionProp, getSessionProp, removeSessionProp, } from "./functions/functions";
export { setCookie, removeCookie, getCookie } from "./functions/functions-cookies";
declare const LktSession: {
    install: (app: App, options: ILktObject) => void;
};
export default LktSession;
