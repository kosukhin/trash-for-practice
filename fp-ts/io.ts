import { doMonad, io, monad, pipe, chain, map, left, some } from "./adt";

const state = {
  items: [],
};

const getData = (url: string) => {
  return (value: typeof state) =>
    io(() => {
      return new Promise((resolve) => {
        console.log("start fetch");
        setTimeout(() => {
          // resolve(left('error!'))
          resolve(some('good value'))
          // console.log("end fetch");
          // value.items = [1, 2, 3];
          // resolve(value);
        }, 8000);
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

const todosUrl = "https://jsonplaceholder.typicode.com/todos";
pipe(monad(state), chain(getData(todosUrl)), map(show)).do();
