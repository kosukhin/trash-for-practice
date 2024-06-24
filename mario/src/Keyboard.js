const keysAliases = {
    'space': 'Space',
    'left': 'ArrowLeft',
    'right': 'ArrowRight',
}

export const useKeyboard = () => {
    return {
        pressed(keyboardButton, cb) {
            const desiredKeyCode = keysAliases[keyboardButton.code()];

            window.addEventListener('keydown', (e) => {
                if (desiredKeyCode === e.code) {
                    cb(keyboardButton.code())
                }
            })
        }
    }
}
