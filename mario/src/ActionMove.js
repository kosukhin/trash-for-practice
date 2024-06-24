export class ActionMove {
    #direction;
    #player;

    constructor(direction, player) {
        this.#direction = direction;
        this.#player = player;
    }

    do() {
        console.log('move to ', this.#direction);
        const position = this.#player.position();
        player.newPosition(
            position.moveX(position.x() + 1)
        )
    }
}
