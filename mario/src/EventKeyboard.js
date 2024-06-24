export class EventKeyboard {
    #keyboard;
    #actionButton;
    #action;

    constructor(keyboard, actionButton, action) {
        this.#keyboard = keyboard;
        this.#actionButton = actionButton;
        this.#action = action;
    }

    watch() {
        keyboard.pressed(
            actionButton,
            action.do.bind(action)
        )
    }
}
