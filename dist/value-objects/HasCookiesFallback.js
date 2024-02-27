export class HasCookiesFallback {
    constructor(value) {
        if (!value) {
            value = true;
        }
        this.value = value;
    }
    enabled() {
        return this.value;
    }
}
