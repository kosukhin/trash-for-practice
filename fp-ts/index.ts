import { doMonad, monad, pipe, map } from "./adt";

const append = (v: typeof state) => {
  console.log("do append");
  v.name += " appended";
  return v;
};

const prepend = (v: typeof state) => {
  console.log("do prepend");
  v.name = "prepended " + v.name;
  return v;
};

const show = (v: typeof state) => {
  console.log("in map", v);
  return v;
};

const state = {
  name: "Jim",
};

console.log("Случай с обычной монадой и map в цепочку функций");
const doResult = doMonad(pipe(monad(state), map(prepend), map(append), map(show)));
console.log('doResult', doResult.unSafeValue);
