import { usePlayer } from "./usePlayer.js";

export const useActionJump = (playerIncome, eventRender) => {
    return {
        do() {
            console.log('jump');
            const player = usePlayer(playerIncome.position().moveX(1));
            playerIncome = player;
            eventRender.renderObject(player);
        }
    }
}
