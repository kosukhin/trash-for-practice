export class Position {
  #x;
  #y;

  constructor(x, y) {
    this.#x = x;
    this.#y = y;
  }

  x() {
    return this.#x;
  }

  y() {
    return this.#y;
  }

  moveX(dX) {
    return new Position(this.#x + dX, this.#y);
  }

  moveY(dY) {
    return new Position(this.#x, this.#y + dY);
  }
}
