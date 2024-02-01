// https://habr.com/ru/companies/timeweb/articles/785668/

// суррогатная пара
console.log('\uD83D\uDE00');

const firstStr = 'hello';
const secondStr = '\u0068ell\u006F';
console.log(firstStr === secondStr); // => true

const str1 = 'ça va bien';
const str2 = 'c\u0327a va bien';
console.log(str1);          // => 'ça va bien'
console.log(str2);          // => 'ça va bien'
console.log(str1 === str2); // => false

console.log(str2.normalize() === str1);

const smile = '😀';
const regex = /^.$/u;
console.log(regex.test(smile));
