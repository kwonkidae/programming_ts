function squareOf(n: number) {
  return n * n
}

squareOf(2)
squareOf(5);

(() => {
  const a: any = 555
  const b = ["danger"]
  const c = a + b
})();

(() => {
  const a: unknown = 30
  const b = a === 123
  // let c = a + 10 Object is of type 'unknwon

  if (typeof a === "number") {
    const d = a + 10
    console.log(d)
  }
})();

(() => {
  let a = true
  var b = false
  const c = true
  let d: boolean = true
  let e: true = true
  // let f: true = false
})();

(() => {
  let a = 1234
  const b = Infinity * 0.10
  console.log(b)
  const d = a < b
  const e: number = 100
  const f: 26.218 = 26.218
  // let g: 26.218 = 10

  const oneMillion = 1_000_000
  const twoMillion = 2_000_000

  console.log(oneMillion, twoMillion)
})();

// bigint
(() => {
  const a = 1234n
  console.log(typeof a)
  const b = 5678n
  const c = a + b
  const d = a < 1234
  // const e = 88.5n
  const f: bigint = 100n
  const g: 100n = 100n
  // const h: bigint = 100
})();

// string
(() => {
  const a = "hello"
  const b = "billy"
  const c = "!"
  const d = a + " " + b + c
  const e: string = "zoom"
  const f: "john" = "john"
  // const g: "john" = "zoe" TS2322: Type '"zoe"' is not assignable to type '"john"'.
})();

(() => {
  const a = Symbol("a")
  console.log(typeof a)
  const b: symbol = Symbol("b")
  const c = a === b
  console.log(c)
  // const d = a + "x" TS2469: The '+' operator cannot be applied to type 'symbol'.
  const e = Symbol("e")
  const f: unique symbol = Symbol("f")
  const g: unique symbol = Symbol("f")

  const h = e === e
  // const i = e === f
  // This condition will always return 'false' since the types 'typeof e' and 'typeof f' have no overlap.
})();

// object
(() => {
  const a = {
    b: "x"
  }
  // TS2339: Property 'b' does not exist on type 'object'.
  console.log(a.b)
  let b = {
    c: {
      d: "f"
    }
  }
  console.log(b.c.d)
})();

(() => {
  let c: {
    firstName: string
    lastName: string
  } = {
    firstName: "john",
    lastName: "barrowman"
  }

  console.log(c)

  class Person {
    constructor(
      public firstName: string,
      public lastName: string
    ) {}
  }

  c = new Person("matt", "smith")

  let a: {b: number}
  a = {
    b: 1,
    c: 2
  }
})();
