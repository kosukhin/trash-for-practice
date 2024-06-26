"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.None = exports.Maybe = void 0;
class Maybe {
    constructor(theValue = null) {
        this.theValue = theValue;
        this.isEmpty = () => this.theValue === null;
        this.value = () => this.theValue;
    }
}
exports.Maybe = Maybe;
class None extends Maybe {
}
exports.None = None;
