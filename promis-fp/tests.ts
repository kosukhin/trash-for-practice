import { pipe } from "./pipe";

setTimeout(() =>
  commonHandler(pipe(debug("\nУспешно"), pass("turtle"), toUpper))
);

setTimeout(() =>
  commonHandler(
    pipe(
      debug("\nОшибка"),
      pass("string"),
      checkNotEquals("string"),
      toUpper,
      debug("Этот код не вызывается")
    )
  )
);

setTimeout(() =>
  commonHandler(
    pipe(
      debug("\nМассивы"),
      pass(["one", "two"]),
      tap((v: any) => console.log("тип аргумента", typeof v)),
      debug("Перед объединением = %v"),
      join
    )
  )
);

const commonHandler = (v: Promise<unknown>) =>
  v
    .then(debug("result = %v"))
    .finally(debug("finally do smth!"))
    .catch(debug("catch = %v"));

const pass = (v: any) => () => v;

const tap = (fn: Function) => (v: any) => {
  fn(v);
  return v;
};

const toUpper = (v: any) => String(v).toUpperCase();

const checkNotEquals = (possibleV: any) => (v: any) =>
  possibleV === v ? Promise.reject("values are equals") : Promise.resolve(v);

const join = (v: string[]) => v.join(" ");

const debug = (message: string) => (v?: any) => {
  console.log(message.replace("%v", JSON.stringify(v)));
  return v;
};
