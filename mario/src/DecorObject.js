import { ObjectPresentation } from "./ObjectPresentation.js";

export class DecorObject {
    #position;
    #presentation;

    constructor(position, presentation) {
        this.#position = position;
        this.#presentation = new ObjectPresentation(
            '/assets/img/ground.png',
            2000,
            50,
            true
        );
    }

    id() {
        return 'ground';
    }

    position() {
        return this.#position;
    }

    presentation() {
        return this.#presentation;
    }
}
