import { pipe } from "./pipe";

const pass = (v: any) => () => v;

const tap = (fn: Function) => (v: any) => {
  fn(v);
  return v;
};

const toUpper = (v: any) => String(v).toUpperCase();

const checkNotEquals = (possibleV: any) => (v: any) =>
  possibleV === v ? Promise.reject("values are equals") : Promise.resolve(v);

const join = (v: string[]) => v.join(" ");

const debug = (message: string) => (v: any) => {
  console.log(message.replace("%v", JSON.stringify(v)));
  return v;
};

setTimeout(() =>
  pipe(debug("\nУспешно"), pass("turtle"), toUpper)
    .then(debug("result = %v"))
    .catch(debug("catch = %v"))
);

setTimeout(() =>
  pipe(debug("\nОшибка"), pass("string"), checkNotEquals("string"), toUpper)
    .then(debug("result = %v"))
    .catch(debug("catch = %v"))
);

setTimeout(() =>
  pipe(
    debug("\nМассивы"),
    pass(["one", "two"]),
    tap((v: any) => console.log("тип аргумента", typeof v)),
    debug("Перед объединением = %v"),
    join
  )
    .then(debug("result = %v"))
    .catch(debug("catch = %v"))
);
