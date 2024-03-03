import { pipe, pipePromise } from "./pipe";
import { checkNotEquals, tap, debug, handle, join, toUpper } from "./utils";

/*
Успешно
result = "TURTLE"
finally do smth!
 */
const one = pipe(pipePromise(debug("\nУспешно"), toUpper), handle);
setTimeout(one.bind(null, "turtle"));

/*
Ошибка
finally do smth!
catch = "values are equals"
*/
const two = pipe(
  pipePromise(
    debug("\nОшибка"),
    checkNotEquals("string"),
    toUpper,
    debug("Этот код не вызывается")
  ),
  handle
);
setTimeout(two.bind(null, "string"));

/*
Массивы
тип аргумента object
Перед объединением = ["one","two"]
result = "one two"
finally do smth!
*/
const trhee = pipe(
  pipePromise(
    debug("\nМассивы"),
    tap((v: any) => console.log("тип аргумента", typeof v)),
    debug("Перед объединением = %v"),
    join
  ),
  handle
);
setTimeout(trhee.bind(null, ["one", "two", "three"]));
