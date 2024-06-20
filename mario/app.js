import { useActionJump } from "./src/useActionJump.js";
import { useActionMove } from "./src/useActionMove.js";
import { useDecorGround } from "./src/useDecorGround.js";
import { useEventKeyboard } from "./src/useEventKeyboard.js";
import { useEventRender } from "./src/useEventRender.js";
import { useEventsCycle } from "./src/useEventsCycle.js";
import { useGame } from "./src/useGame.js";
import { useGameWindow } from "./src/useGameWindow.js";
import { useKeyboard } from "./src/useKeyboard.js";
import { useKeyboardButton } from "./src/useKeyboardButton.js";
import { usePlayer } from "./src/usePlayer.js";
import { usePosition } from "./src/usePosition.js";

const keyboard = useKeyboard();
const eventRender = useEventRender();

const mario = usePlayer(usePosition(0, 0));

const cycle = useEventsCycle([
    useEventKeyboard(keyboard, useKeyboardButton('space'), useActionJump(mario, eventRender)),
    useEventKeyboard(keyboard, useKeyboardButton('left'), useActionMove('left', mario, eventRender)),
    useEventKeyboard(keyboard, useKeyboardButton('right'), useActionMove('right', mario, eventRender)),
]);

const game = useGame(
        useGameWindow('#canvas'),
        cycle,
        [
            mario,
            useDecorGround(),
        ]
    );
eventRender.injectGame(game);

game.start();
