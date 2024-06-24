export const useEventsCycle = (events = []) => {
    return {
        alive() {
            events.forEach(event => {
                event.watch();
            })
        },
        die() {
            console.log('destroy everything!');
        }
    }
}
