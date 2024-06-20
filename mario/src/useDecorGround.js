import { useObjectPresentation } from "./useObjectPresentation.js";
import { usePosition } from "./usePosition.js";

export const useDecorGround = () => {
    const position = usePosition(0, 0);
    const presentation = useObjectPresentation(
        '/assets/img/ground.png',
        2000,
        50,
        true
    );

    return {
        id() {
            return 'ground';
        },
        position() {
            return this.#position;
        },
        presentation() {
            return this.#presentation;
        }
    }
}
