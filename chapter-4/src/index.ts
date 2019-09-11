import { create } from "domain";

const l = console.log;
(() => {
  function add(a: number, b: number): number {
    return a + b
  }
  console.log(add(2, 3))

  function log(message: string, userId: string = "Not signed in") {
    let time = new Date().toLocaleDateString()
    console.log(time, message, userId)
  }

  log("Page loaded")
  log("User signed in", "da763de")
})();

(() => {
  interface IContext {
    appId?: string,
    userId?: string
  }

  function log(message: string, context: IContext = {}) {
    const time = new Date().toISOString()
    console.log(time, message, context.userId)
  }

  log("IContext")

  function sum(numbers: number[]): number {
    return numbers.reduce((total, n) => total + n, 0)
  }
  l(sum([1, 2, 3]))

  function sumVariadic(...numbers: number[]): number {
    return Array.from(numbers).reduce((total, n) => total + n, 0)
  }
  l(sumVariadic(1, 2, 3))
})();

// this
(() => {
  const x = {
    a() {
      return this
    }
  }
  l(x.a())

  const a = x.a;
  l(a());
  function fancyDate(this: Date) {
    return `${this.getDate()} / ${this.getMonth()} / ${this.getFullYear()}`;
  }
  l(fancyDate.call(new Date()))
})();

// generator
(() => {
  function* createNumbers(): IterableIterator<number> {
    let n = 0
    while (1) {
      yield n++
    }
  }
  const numbers = createNumbers()
  l(numbers.next())

  let numbers2 = {
    *[Symbol.iterator]() {
      for (let n = 1; n <= 10; n++) {
        yield n
      }
    }
  }

  for (let a of numbers2) {
    l(a)
  }

  type Log = (message: string, userId?: string) => void
  let log: Log = (
    message,
    userId = "Not signed in"
  ) => {
    const time = new Date().toISOString()
    console.log(time, message, userId)
  }

  log("kkdosk")
})();

// contextual typing
(() => {
  function times(
    f: (index: number) => void,
    n: number
  ) {
    for (let i = 0; i < n; i++) {
      f(i)
    }
  }

  times((n) => console.log(n), 4)

  function f(n: number) {
    console.log(n)
  }

  times(f, 4)

  type Reservation = number

  type Reserve = {
    (from: Date, to: Date, destination: string): Reservation
    (from: Date, destination: string): Reservation
  }

  let reserve: Reserve = (
    from: Date,
    toOrDestination: Date | string,
    destination?: string
  ) => {
    return 1
  }

  l(reserve(new Date(), ""))
})();
