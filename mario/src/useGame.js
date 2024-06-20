export const useGame = (gameWindow, eventsCycle, objects) => {
    return {
        replaceObject(newObject) {
            const oldObjectIndex = objects.findIndex((obj) => obj.id() === newObject.id())

            if (oldObjectIndex >= 0) {
                objects.splice(oldObjectIndex, 1);
            }

            objects.push(newObject);
        },
        render() {
            console.log('do rendering', this.#objects);
        },
        window() {
            return gameWindow;
        },
        start() {
            eventsCycle.alive();
        },
        stop() {
            this.#eventsCycle.die();
            this.#gameWindow.gameOver();
        }
    }
}
