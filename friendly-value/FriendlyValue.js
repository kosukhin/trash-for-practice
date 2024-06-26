"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FriendlyValue = void 0;
class FriendlyValue {
    constructor(value) {
        this.value = value;
        this.realValue = (cb) => {
            if (this.value && typeof this.value === 'object' && 'then' in this.value) {
                this.value.then((value) => cb(value));
            }
            else {
                cb(this.value);
            }
        };
        this.filled = (cb) => {
            this.realValue((value) => {
                if (value)
                    cb(value);
            });
        };
        this.chain = (cb) => new FriendlyValue(new Promise((resolve) => {
            this.realValue((value) => {
                resolve(cb(value));
            });
        }));
        this.notFilled = (cb) => {
            this.realValue((value) => {
                if (!value)
                    cb(value);
            });
        };
    }
}
exports.FriendlyValue = FriendlyValue;
