"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Applicative = void 0;
const Maybe_1 = require("./Maybe");
const Either_1 = require("./Either");
class Applicative {
    constructor(value = null) {
        this.value = value;
        this.applyFn = (fn, realValue) => {
            if (realValue instanceof Maybe_1.None && realValue.isEmpty()) {
                return realValue;
            }
            if (realValue instanceof Either_1.Left) {
                return Promise.reject(realValue.message());
            }
            return fn();
        };
    }
    ap(fn) {
        if (typeof this.value === 'object' && 'then' in this.value) {
            return new Applicative(new Promise((resolve, reject) => {
                this.value.then((realValue) => resolve(this.applyFn(() => fn(realValue), realValue))).catch(reject);
            }));
        }
        return new Applicative(this.applyFn(() => fn(this.value), this.value));
    }
    promise() {
        const result = this.applyFn(() => this.value, this.value);
        return Promise.resolve(result);
    }
}
exports.Applicative = Applicative;
