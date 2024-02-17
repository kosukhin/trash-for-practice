type AnyFn = (...args: any[]) => any;

export const pipe = (v: any, ...fns: any[]) =>
  fns.reduce((acc, fn) => {
    return fn(acc);
  }, v);

export const doMonad = (v: LazyMonad): LazyMonad => v.do();
export const map = (fn: AnyFn) => (context: LazyMonad) => context.lazyMap(fn);
export const chain = (fn: AnyFn) => (context: LazyMonad) => context.lazyChain(fn);

export const monad = (v: any) => new LazyMonad(v);
export class LazyMonad {
  protected executor: any = (v: any) => this.of(v);
  protected value: any;

  get unSafeValue() {
    return this.value;
  }

  set unSafeValue(value: any) {
    this.value = value;
  }

  constructor(value: any) {
    this.value = value;
  }

  do() {
    return this.executor(this.value);
  }

  of(value: any) {
    return new LazyMonad(value);
  }

  /**
   * Исполняет функцию, которая возвращает монаду
   * результат работы возвращенной монады
   */
  chain(fn: (value: any) => LazyMonad) {
    return fn(this.value);
  }

  lazyChain(fn: (value: any) => LazyMonad) {
    const lastExecutor = this.executor;
    this.executor = (v: any) => {
      const monad = lastExecutor(v) as LazyMonad;
      return monad.chain(fn);
    };
    return this;
  }

  /**
   * Принимает функцию изменяющую значение
   * возвращает ту же монаду
   */
  lazyMap(fn: (value: any) => any) {
    const lastExecutor = this.executor;
    this.executor = (v: any) => {
      const monad = lastExecutor(v) as LazyMonad;
      return monad.map(fn);
    };
    return this;
  }

  map(fn: (value: any) => any) {
    this.value = fn(this.value)
    return this;
  }
}

export const none = () => new None(null);
export class None extends LazyMonad {
  of(value: any) {
    return new None(value);
  }

  chain(fn: (value: any) => LazyMonad) {
    if (this.value !== null && this.value !== undefined) {
      super.chain(fn);
    }
    return this;
  }

  map(fn: (value: any) => any): this {
    if (this.value !== null && this.value !== undefined) {
      super.map(fn);
    }
    return this;
  }
}

export const some = (v: any) => new Some(v);
export class Some extends LazyMonad {
  of(value: any) {
    return new Some(value);
  }
}

export const left = (error?: string) => new Left(error);
export class Left extends None {
  private error: string = "Unknown error";

  constructor(error?: string) {
    super(null);
    error && (this.error = error);
  }

  of(value: any) {
    return new Left(value);
  }
}

export const io = (v: AnyFn) => new IO(v);
export class IO extends LazyMonad {
  constructor(v: AnyFn) {
    super(null);
  }

  of(value: any) {
    return new IO(value);
  }
}
