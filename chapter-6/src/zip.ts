interface Array<T> {
  zip<U>(list: U[]): Array<[T, U]>;
}

function tuple<T extends unknown[]>(
  ...ts: T
): T {
  return ts;
}

Array.prototype.zip = function<T, U>(
  this: T[],
  list: U[],
): Array<[T, U]> {
  return this.map((v, k) =>
    tuple(v, list[k]),
  );
};

const _a = [1, 2, 3]
  .map((n) => n * 2)
  .zip(['a', 'b', 'c']);
console.log(_a);
