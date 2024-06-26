"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Applicative_1 = require("./Applicative");
const str = '{"hello": "world"}';
const getHello = (object) => object.hello;
const doParse = (value) => {
    console.log('do parse', value);
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
    console.log('from promise', value);
});
