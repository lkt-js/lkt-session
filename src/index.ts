import {ILktObject, supportsLocalStorage} from "lkt-tools";
import {Settings} from "./settings/Settings";

export {
    setSessionProp,
    getSessionProp,
    removeSessionProp
} from "./functions/functions";

const LktHttp = {
    install: (app: any, options: ILktObject) => {
        Settings.SUPPORTS_LOCAL_STORAGE = supportsLocalStorage();
    },
};

export default LktHttp;