export class Applicative {
    constructor(private value: any = null) {}

    ap(fn: Function) {
        if (typeof this.value === 'object' && 'then' in this.value) {
            return new Applicative(new Promise((resolve, reject) => {
                this.value.then((realValue: any) => resolve(fn(realValue))).catch(reject);
            }))
        }

        return new Applicative(fn(this.value));
    }

    promise() {
        return Promise.resolve(this.value);
    }
}
