type AnyFn = (...args: any[]) => any;

export const pipe = (v: any, ...fns: any[]) =>
  fns.reduce((acc, fn) => {
    return fn(acc);
  }, v);

export const doMonad = (v: LazyMonad): LazyMonad => v.do();
export const map = (fn: AnyFn) => (context: LazyMonad) => context.lazyMap(fn);
export const chain = (fn: AnyFn) => (context: LazyMonad) =>
  context.lazyChain(fn);

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

  executorNextStep(fn: AnyFn) {
    return fn();
  }

  do() {
    this.executor(this.value, (res) => {
      console.log('do result', res);
    });
    return this;
  }

  of(value: any) {
    return new LazyMonad(value);
  }

  lazyChain(fn: (value: any) => LazyMonad) {
    return this.modifyExecutor("chain", fn);
  }

  lazyMap(fn: (value: any) => any) {
    return this.modifyExecutor("map", fn);
  }

  modifyExecutor(method: string, fn: AnyFn) {
    const lastExecutor = this.executor;
    this.executor = (v: any, result: (v: any) => void) => {
      lastExecutor(v, (monad: LazyMonad) => {
        console.log('last exec');

        monad.executorNextStep((replaceMonad?: LazyMonad) => {
          result(replaceMonad ? replaceMonad[method](fn) : monad[method](fn))
        });
      });
    };
    return this;
  }

  protected chain(fn: (value: any) => LazyMonad) {
    return fn(this.value);
  }

  protected map(fn: (value: any) => any) {
    this.value = fn(this.value);
    return this;
  }

  getError() {
    return null;
  }

  throwIfError() {
    if (this.getError()) {
      throw new Error(this.getError());
    }
  }
}

export const none = () => new None(null);
export class None extends LazyMonad {
  of(value: any) {
    return new None(value);
  }

  protected chain(fn: (value: any) => LazyMonad) {
    if (this.value !== null && this.value !== undefined) {
      super.chain(fn);
    }
    return this;
  }

  protected map(fn: (value: any) => any): this {
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

  getError() {
    return this.error;
  }

  constructor(error?: string) {
    super(null);
    error && (this.error = error);
  }

  of(value: any) {
    return new Left(value);
  }
}

export const io = (v: (value: any) => Promise<any>) => new IO(v);
export class IO extends LazyMonad {
  private io: (value: any) => Promise<any>;
  executorNextStep(fn: AnyFn) {
    this.io(this.value).then((value) => {
      fn(value);
    });
  }

  constructor(v: (value: any) => Promise<any>) {
    super(null);
    this.io = v;
  }

  of(value: any) {
    return new IO(value);
  }
}
