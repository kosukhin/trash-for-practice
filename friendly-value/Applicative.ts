import {Maybe, None} from "./Maybe";
import {Left} from "./Either";

export class Applicative {
    constructor(private value: any = null) {}

    private applyFn = (fn: Function, realValue: any) => {
        if (realValue instanceof None && realValue.isEmpty()) {
            return realValue;
        }

        if (realValue instanceof Left) {
            return Promise.reject(realValue.message());
        }

        return fn();
    }

    ap(fn: Function) {
        if (typeof this.value === 'object' && 'then' in this.value) {
            return new Applicative(new Promise((resolve, reject) => {
                this.value.then((realValue: any) => resolve(
                    this.applyFn(() => fn(realValue), realValue),
                )).catch(reject);
            }))
        }

        return new Applicative(this.applyFn(() => fn(this.value), this.value));
    }

    promise() {
        const result = this.applyFn(() => this.value, this.value);
        return Promise.resolve(result);
    }
}
