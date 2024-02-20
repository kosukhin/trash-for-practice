import { doMonad, io, monad, pipe, chain, map, left, some, tap } from "./adt";

const state = {
  items: [],
};

const getData = (url: string) => {
  return (value: typeof state) =>
    io(() => {
      return new Promise((resolve, reject) => {
        console.log("start fetch");
        setTimeout(() => {
          // throw new Error('test message error')
          // resolve(left('error!'))
          resolve(some("good value"));
          // reject('reject error !!! ')
          // console.log("end fetch");
          // value.items = [1, 2, 3];
          // resolve(value);
        }, 5000);
      });
    });
};

const show = (v: typeof state) => {
  console.log("in map", v);
  return v;
};

const showNext = (v: typeof state) => {
  console.log("in map next", v);
  return v;
};

const tapped = (v: any, error: string) => {
  console.log('tapped value', v, error);
}

const todosUrl = "https://jsonplaceholder.typicode.com/todos";
const res = pipe(monad(state), chain(getData(todosUrl)), map(show), map(showNext), tap(tapped)).do();
console.log('result monad', res);
