(() => {
  function flatten<T>(array: T[][]): T[] {
    console.log(array);
    return Array.prototype.concat.apply([], array);
  }

  const tempA = flatten([[1]]);

  function parse(birthday: string): Date | InvalidDateFormatError | DateIsInTheFutureError {
    const d = new Date(birthday);
    if (!isValid(d)) {
      return new InvalidDateFormatError('Enter a date in to form YYYY/MM/DD');
    }
    if (d.getTime() > Date.now()) {
      return new DateIsInTheFutureError('Are you a timeload');
    }
    return d;
  }

  function isValid(d: Date) {
    return Object.prototype.toString.call(d) === '[object Date]' &&
      !Number.isNaN(d.getTime());
  }

  class InvalidDateFormatError extends RangeError {}

  // tslint:disable-next-line:max-classes-per-file
  class DateIsInTheFutureError extends RangeError {}

  try {
    const result = parse('2019-12-12');
    // console.info('Datee is', date.toISOString());
    if (result instanceof InvalidDateFormatError) {
      console.log(result.message);
    } else if (result instanceof DateIsInTheFutureError) {
      console.info('no error', result.message);
    } else {
      console.info('Date is', result.toISOString());
    }
  } catch (e) {
    if (e instanceof InvalidDateFormatError) {
      console.error('InvalidDateFormatError', e.message);
    } else if (e instanceof DateIsInTheFutureError) {
      console.info('DateIsInFuture', e.message);
    } else {
      throw e;
    }
  }
})();

(() => {
  // tslint:disable-next-line:interface-name
  interface Option<T> {
    // flatMap<U>(f: (value: T) => None): None;
    flatMap<U>(f: (value: T) => Option<U>): Option<U>;
    getOrElse(value: T): T;
  }

  // tslint:disable-next-line:max-classes-per-file
  class Some<T> implements Option<T> {
    constructor(private value: T) {}
    public flatMap<U>(f: (value: T) => None): None;

    public flatMap<U>(f: (value: T) => Some<U>): Some<U>;

    public flatMap<U>(f: (value: T) => Option<U>): Option<U> {
      return f(this.value);
    }

    public getOrElse(value: T): T {
      return this.value;
    }
  }

  function Option<T>(value: null | undefined): None;
  function Option<T>(value: T): Some<T>;
  function Option<T>(value: T): Option<T> {
    if (value == null) {
      return new None();
    }
    return new Some(value);
  }

  // tslint:disable-next-line:max-classes-per-file
  class None implements Option<never> {
    public flatMap(): None {
      return this;
    }

    public getOrElse<U>(value: U): U {
      return value;
    }
  }

  try {
    const result = Option(6)
      .flatMap((n) => Option(n * 3))
      .flatMap((n) => new None())
      .getOrElse(8);
    console.log(result);
  } catch (e) {
    console.log(e.message);
  }

  // tslint:disable-next-line:max-classes-per-file

  function neverF(): never {
    throw new Error('error');
  }
})();
