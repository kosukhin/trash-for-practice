import { useActionJump } from "./src/ActionJump.js";
import { useActionMove } from "./src/ActionMove.js";
import { DecorGround, useDecorGround } from "./src/DecorObject.js";
import { useEventKeyboard } from "./src/EventKeyboard.js";
import { useEventRender } from "./src/EventRender.js";
import { useEventsCycle } from "./src/EventsCycle.js";
import { useGame } from "./src/Game.js";
import { useGameWindow } from "./src/GameWindow.js";
import { useKeyboard } from "./src/Keyboard.js";
import { useKeyboardButton } from "./src/KeyboardButton.js";
import { usePlayer } from "./src/Player.js";
import { Position, usePosition } from "./src/Position.js";

const keyboard = useKeyboard();
const eventRender = useEventRender();

const mario = usePlayer(usePosition(0, 0));

const cycle = useEventsCycle([
    useEventKeyboard(keyboard, useKeyboardButton('space'), useActionJump(mario, eventRender)),
    useEventKeyboard(keyboard, useKeyboardButton('left'), useActionMove('left', mario, eventRender)),
    useEventKeyboard(keyboard, useKeyboardButton('right'), useActionMove('right', mario, eventRender)),
]);

const decorGround = new DecorObject(
    new Position(0, 0),
    new ObjectPresentation(
        '/assets/img/ground.png',
        2000,
        50,
        true
    )
);
const game = useGame(
        useGameWindow('#canvas'),
        cycle,
        [
            mario,
            decorGround,
        ]
    );
eventRender.injectGame(game);

game.start();
