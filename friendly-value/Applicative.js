"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Applicative = void 0;
class Applicative {
    constructor(value = null) {
        this.value = value;
    }
    ap(fn) {
        if (typeof this.value === 'object' && 'then' in this.value) {
            return new Applicative(new Promise((resolve, reject) => {
                this.value.then((realValue) => resolve(fn(realValue))).catch(reject);
            }));
        }
        return new Applicative(fn(this.value));
    }
    promise() {
        return Promise.resolve(this.value);
    }
}
exports.Applicative = Applicative;
