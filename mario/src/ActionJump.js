import { usePlayer } from "./Player.js";

export class ActionJump {
    do() {
        console.log('jump');
        const player = usePlayer(playerIncome.position().moveX(1));
        playerIncome = player;
        eventRender.renderObject(player);
    }
}
