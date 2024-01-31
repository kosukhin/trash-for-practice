// boolean context - if() js конвертирует в булевы эквиваленты
// https://javascriptkicks.com/r/633356?url=https://www.freecodecamp.org/news/what-are-falsey-values-in-javascript/

console.log('Nans');
console.log(Number('100F'), isNaN('100F'), Number.isNaN('100F'));

console.log(false);
console.log(!!'');
console.log(!!0);
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);

// fake falsy
console.log('fake falsy');
console.log(Boolean('false')) // An empty object
console.log(Boolean(' ')) // An empty object
console.log(Boolean('0')) // An empty object
console.log(Boolean([])) // An empty array
console.log(Boolean({})) // An empty object
