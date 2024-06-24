export class ObjectPresentation {
    #image;
    #imageRepeat;
    #width;
    #height;

    constructor(image, width, height, imageRepeat = false) {
        this.#image = image;
        this.#imageRepeat = imageRepeat;
        this.#width = width;
        this.#height = height;
    }
}
