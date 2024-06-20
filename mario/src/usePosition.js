export const usePosition = (x, y) => {
    return {
        x() {
            return x;
        },

        y() {
            return y;
        },

        moveX(dX) {
            return usePosition(x + dX, y);
        },

        moveY(dY) {
            return usePosition(x, y + dY);
        }
    }
}
