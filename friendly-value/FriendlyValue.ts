export class FriendlyValue<T> {
    constructor(private value: any) {}

    private realValue = (cb: (value: T) => void) => {
        if (this.value && typeof this.value === 'object' && 'then' in this.value) {
            this.value.then((value: unknown) => cb(value as T));
        } else {
            cb(this.value);
        }
    }

    public filled = (cb: (value: T) => void): void => {
        this.realValue((value) => {
            if (value) cb(value);
        });
    }

    public chain = (cb: (value: T) => void) => new FriendlyValue<ReturnType<typeof cb>>(
        new Promise((resolve) => {
        this.realValue((value) => {
            resolve(cb(value));
        });
        })
    )

    public notFilled = (cb: (value: T) => void): void => {
        this.realValue((value) => {
            if (!value) cb(value);
        });
    }
}
