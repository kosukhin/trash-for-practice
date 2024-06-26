import {Applicative} from "./Applicative";
import {Left} from "./Either";
import {None} from "./Maybe";

const str = '{"hello": "world"}'
const getHello = (object: any) => object.hello;
const doParse = (value: any) => {
    return JSON.parse(value)
}
const shout = (value: string) => value + '!!!';
const wait = (value: string) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value + ' waited')
        }, 3000)
    })
}

new Applicative(Promise.resolve(str))
    .ap(doParse)
    .ap(getHello)
    .ap((value: string) => value.toUpperCase())
    .ap(shout)
    .ap(wait)
    .promise().then((value) => {
    console.log('from promise = ', value)
})

const lessThenTen = (value: number) => value > 10 ? new Left('Значение должно быть меньше 10') : value;
const addOne = (value: number) => value + 1

const tap = (fn: Function) => (value: any) => {
    fn(value);
    return value;
}


new Applicative(1)
    .ap(lessThenTen)
    .ap(addOne)
    .ap(tap(() => console.log('Случай с 1, ошибки нет получаем 2')))
    .promise()
    .then(console.log)
    .catch(console.log)

new Applicative(11)
    .ap(lessThenTen)
    .ap(addOne)
    .ap(tap(() => console.log('Случай с 11, ошибка тк больше 10')))
    .promise()
    .then(console.log)
    .catch(console.log)

const zeroDontMatch = (value: number) => value <= 0 ? new None() : value;


new Applicative(3)
    .ap(zeroDontMatch)
    .ap(addOne)
    .ap(tap(() => console.log('Случай с 3 прибавляется 1 получаем 4')))
    .promise()
    .then(console.log)


new Applicative(-3)
    .ap(zeroDontMatch)
    .ap(addOne)
    .ap(tap(() => console.log('Случай с -3 ничего  не выполняется')))
    .promise()
    .then(console.log)
