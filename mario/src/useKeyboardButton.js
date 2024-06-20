export class KeyboardButton {
    #code;

    constructor(code) {
        this.#code = code;
    }

    code() {
        return this.#code;
    }
}
