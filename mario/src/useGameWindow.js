export const useGameWindow = (windowSelector) => {
    return {
        selector() {
            return windowSelector;
        },
        render(objects) {
            console.log('render window', objects);
        },
        gameOver() {
            console.log('show game over');
        }
    }
}
