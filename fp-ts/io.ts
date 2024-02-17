import { doMonad, io, monad, pipe, chain, map } from "./adt";

const state = {
  items: [],
};

const getData = (url: string) => {
  return (value: typeof state) =>
    io(() => {
      return new Promise((resolve) => {
        console.log("start fetch");
        setTimeout(() => {
          console.log("end fetch");
          value.items = [1, 2, 3];
          resolve(value);
        }, 8000);
      });
    });
};

const show = (v: typeof state) => {
  console.log("in map", v);
  return v;
};

const todosUrl = "https://jsonplaceholder.typicode.com/todos";
doMonad(pipe(monad(state), chain(getData(todosUrl)), map(show)));
