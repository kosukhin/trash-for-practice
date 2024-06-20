export const useEventKeyboard = (keyboard, actionButton, action) => {
    return {
        watch() {
            keyboard.pressed(
                actionButton,
                action.do.bind(action)
            )
        }
    }
}
