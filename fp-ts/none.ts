import { doMonad, monad, pipe, map, chain, none, some, LazyMonad } from "./adt";

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
    return none();
  }

  return some(v);
};

const checkName = (state: { name: string }) =>
  doMonad(pipe(monad(state), chain(ensureNotName("Liza")), map(show)));

checkName(state);
checkName(state2);
checkName(state3);

console.log("--- second ---");

const checkName2 = (state: { name: string }) =>
  doMonad(
    pipe(
      monad(state),
      chain(ensureNotName("Peter")),
      chain(ensureNotName("Jim")),
      map(show)
    )
  );

checkName2(state);
checkName2(state2);
checkName2(state3);
