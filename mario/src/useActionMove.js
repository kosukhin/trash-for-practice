export const useActionMove = (direction, player) => {
    return {
        do() {
            console.log('move to ', direction);
            const position = player.position();
            player.newPosition(
                position.moveX(position.x() + 1)
            )
        }
    }
}
