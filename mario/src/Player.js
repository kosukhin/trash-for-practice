import { ObjectPresentation } from "./ObjectPresentation.js";

export class Player {
    #position;
    #presentation;

    constructor(position) {
        this.#position = position;
        this.#presentation = new ObjectPresentation('/assets/img/mario.jpg', 0, 100);
    }

    id() {
        return 'player';
    }

    position() {
        return this.#position;
    }

    newPosition(position) {
        this.#position = position;
        return this;
    }

    presentation() {
        return this.#presentation;
    }
}
