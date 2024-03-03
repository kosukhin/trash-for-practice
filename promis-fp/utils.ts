export const handle = (v: Promise<unknown>) =>
  v
    .then(debug("result = %v"))
    .finally(debug("finally do smth!"))
    .catch(debug("catch = %v"));

export const tap = (fn: Function) => (v: any) => {
  fn(v);
  return v;
};

export const toUpper = (v: any) => String(v).toUpperCase();

export const checkNotEquals = (possibleV: any) => (v: any) =>
  possibleV === v ? Promise.reject("values are equals") : Promise.resolve(v);

export const join = (v: string[]) => v.join(" ");

export const debug = (message: string) => (v?: any) => {
  console.log(message.replace("%v", JSON.stringify(v)));
  return v;
};
