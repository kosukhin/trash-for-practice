export const useEventRender = () => {
    const dependencies = {};

    return {
        injectGame(game) {
            dependencies.game = game;
        },
        renderObject(object) {
            dependencies.game.replaceObject(object);
            dependencies.game.render();
        }
    }
}
