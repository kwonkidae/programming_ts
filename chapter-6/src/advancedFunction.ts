(() => {
  function tuple<T extends unknown[]>(
    ...ts: T
  ): T {
    return ts;
  }

  // const a = tuple(1, true);
  // console.log(a);

  function isString(a: unknown): a is string {
    return typeof a === 'string';
  }

  console.log(isString('a'));
  console.log(isString([7]));

  function parseInput(input: string | number) {
    let formattedInput: string;
    if (isString(input)) {
      formattedInput = input.toUpperCase();
    }
  }

  type IsString<T> = T extends string ? true : false;
  type A = IsString<string>;
  const a: A = true;
  console.log(a);

  // type ElementType<T> = T extends Array<infer U> ? U : T;
  // type B = ElementType<number[]>;
  // const typeB: B = 5;
  // console.log(typeB);

  type SecondArg<F> = F extends (a: any, b: infer B) => any ? B : never;
  type F = typeof Array['prototype']['slice'];

  type A = SecondArg<F>;

  console.log(F);

})();
