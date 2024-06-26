"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Right = exports.Left = exports.Either = void 0;
class Either {
    constructor(theValue) {
        this.theValue = theValue;
    }
}
exports.Either = Either;
class Left extends Either {
    constructor(theMessage) {
        super(null);
        this.theMessage = theMessage;
        this.message = () => this.theMessage;
    }
}
exports.Left = Left;
class Right extends Either {
    constructor() {
        super(...arguments);
        this.value = () => this.theValue;
    }
}
exports.Right = Right;
