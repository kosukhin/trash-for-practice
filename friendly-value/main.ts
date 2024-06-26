import {Applicative} from "./Applicative";

const str = '{"hello": "world"}'
const getHello = (object: any) => object.hello;
const doParse = (value: any) => {
    console.log('do parse', value);
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
    console.log('from promise', value)
})
