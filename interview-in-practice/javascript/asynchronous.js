// how JavaScript handles asynchronous operations?

// callbacks
setTimeout(() => {
    console.log('callback');
}, 300);

// promises
(new Promise((res) => {
    setTimeout(() => {
        res('promise')
    }, 400)
})).then(console.log);

// async\await - Ведет себя как генератор
const promise = new Promise((res) => {
    setTimeout(() => {
        res('async-await')
    }, 500)
});
// Точка с запятой перед iife обязательна!
(async () => {
    const result = await promise;
    console.log('async result', result);
})()
