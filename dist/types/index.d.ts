import { ILktObject } from "lkt-tools";
export { setSessionProp, getSessionProp, removeSessionProp } from "./functions/functions";
declare const LktHttp: {
    install: (app: any, options: ILktObject) => void;
};
export default LktHttp;
