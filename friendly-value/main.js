"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Applicative_1 = require("./Applicative");
const Either_1 = require("./Either");
const Maybe_1 = require("./Maybe");
const str = '{"hello": "world"}';
const getHello = (object) => object.hello;
const doParse = (value) => {
    return JSON.parse(value);
};
const shout = (value) => value + '!!!';
const wait = (value) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value + ' waited');
        }, 3000);
    });
};
new Applicative_1.Applicative(Promise.resolve(str))
    .ap(doParse)
    .ap(getHello)
    .ap((value) => value.toUpperCase())
    .ap(shout)
    .ap(wait)
    .promise().then((value) => {
    console.log('from promise = ', value);
});
const lessThenTen = (value) => value > 10 ? new Either_1.Left('Значение должно быть меньше 10') : value;
const addOne = (value) => value + 1;
const tap = (fn) => (value) => {
    fn(value);
    return value;
};
new Applicative_1.Applicative(1)
    .ap(lessThenTen)
    .ap(addOne)
    .ap(tap(() => console.log('Случай с 1, ошибки нет получаем 2')))
    .promise()
    .then(console.log)
    .catch(console.log);
new Applicative_1.Applicative(11)
    .ap(lessThenTen)
    .ap(addOne)
    .ap(tap(() => console.log('Случай с 11, ошибка тк больше 10')))
    .promise()
    .then(console.log)
    .catch(console.log);
const zeroDontMatch = (value) => value <= 0 ? new Maybe_1.None() : value;
new Applicative_1.Applicative(3)
    .ap(zeroDontMatch)
    .ap(addOne)
    .ap(tap(() => console.log('Случай с 3 прибавляется 1 получаем 4')))
    .promise()
    .then(console.log);
new Applicative_1.Applicative(-3)
    .ap(zeroDontMatch)
    .ap(addOne)
    .ap(tap(() => console.log('Случай с -3 ничего  не выполняется')))
    .promise()
    .then(console.log);
