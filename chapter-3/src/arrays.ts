(() => {
  console.log("here");

  const g = []
  g.push(1)
  g.push("red")
  console.log(g)

  const h: number[] = []
  h.push(1)
  // h.push("red")

  const d = [1, "a"]

  console.log(d.map(_ => {
    if (typeof _ === "number") {
      return _ * 3
    }
    return _.toUpperCase()
  }))

  function buildArray() {
    const a = []
    a.push(1)
    a.push("x")
    return a
  }

  const myArray = buildArray()
  // myArray.push(true)
})();

// Tuples
(() => {
  const a: [number] = [1]
  console.log(a)
  let b: [string, string, number] = ["malcolm", "gladwell", 1963]
  console.log(b)
  b = ["queen", "elizabeth", 1926, ]

  let trainFares: Array<([number] | [number, number])> = [
    [3.75],
    [8.25, 7.70],
    [10.50]
  ]

  let friends: [string, ...string[]] = ["sara", "tali", "chloe", "claaire"]
  let list: [number, boolean, ...string[]] = [1, false]

  // read only

  let as: readonly number[] = [1, 2, 3]
  let bs: readonly number[] = as.concat(4)
  let three = bs[2]
  // as[4] = 5 Index signature in type 'readonly number[]' only permits reading.
  // as.push(6) Property 'push' does not exist on type 'readonly number[]'.
})();

(() => {
  interface IPizza {
    addAnchovies(): void;
  }

  class Pizza implements IPizza {
    public addAnchovies() {
      console.log("addAnchovies")
    }
  }
  function addDeliciousFish(pizza: IPizza) {
    return pizza.addAnchovies()
  }

  addDeliciousFish(new Pizza())
  // addDeliciousFish(null)
})();

// enums

(() => {
  // enum Language {
  //   English,
  //   Spanish,
  //   Russian
  // }

  // let myFirstLanguage = Language.Russian

  enum Language {
    English = 0,
    Spanish = 1
  }

  enum Language {
    Russian = 2
  }
})();

(() => {
  enum Language {
    English = 100,
    Spanish = 200 + 300,
    Russian
  }

  enum Color {
    Red = "#c10000",
    Blud = "#007ac1",
    Pink = 0xc10050,
    White = 255
  }

  console.log(typeof Color.Red)
})();

(() => {
  const enum Language {
    Engliash,
    Spanish,
    Russian
  }

  let a = Language.Engliash
  // let c = Language[0] A const enum member can only be accessed using a string literal.

  const enum Flippable {
    Burger,
    Chair,
    Cup,
    Skateboard,
    Table
  }

  function flip(f: Flippable) {
    return "flipped it"
  }

  flip(Flippable.Chair)
  flip(Flippable.Cup)
  flip(12)
})();

(() => {
  const enum Flippable {
    Burger = "Burger"
  }

  function flip(f: Flippable) {
    return "flipped it"
  }

  flip(Flippable.Burger)
  flip("Burger")
})();
