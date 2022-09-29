export class HasCookiesFallback {
    private readonly value: boolean;

    constructor(value?: boolean) {
        if (!value) {
            value = true;
        }
        this.value = value;
    }

    enabled() {
        return this.value;
    }
}