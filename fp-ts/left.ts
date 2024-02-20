import { monad, pipe, map, chain, some, left } from "./adt";

const state = {
  name: "Jim",
};
const state2 = {
  name: "Liza",
};
const state3 = {
  name: "Peter",
};

const show = (v: typeof state) => {
  console.log("in map", v);
  return v;
};

const ensureNotName = (name: string) => (v: typeof state) => {
  if (name === v.name) {
    return left(`Имя ${name} Не подходит`);
  }

  return some(v);
};

const checkName = (state: { name: string }) =>
  pipe(monad(state), chain(ensureNotName("Liza")), map(show)).do();

checkName(state).throwIfError();

try {
  checkName(state2).throwIfError();
} catch (e) {
  console.log("Ошибка: ", e.message);
}
