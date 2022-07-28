import {ILktObject, supportsLocalStorage} from "lkt-tools";
import {Settings} from "./settings/Settings";
import {App} from "vue";

export {
    setSessionProp,
    getSessionProp,
    removeSessionProp,
} from "./functions/functions";

export {setCookie, removeCookie, getCookie} from "./functions/functions-cookies"

const LktSession = {
    install: (app: App, options: ILktObject) => {
        Settings.SUPPORTS_LOCAL_STORAGE = supportsLocalStorage();
    },
};

export default LktSession;