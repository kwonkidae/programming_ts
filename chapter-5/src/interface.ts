const l = console.log
// type Sushi = {
//   calories: number
//   salty: boolean
//   tasty: boolean
// }

interface Sushi {
  calories: number
  salty: boolean
  tasty: boolean
};

interface Food {
  calories: number
  tasty: boolean
}

interface Sushi extends Food {}

interface Cake extends Food {}

interface A {
  good(x: number): string
  bad(x: number): string
}

interface B extends A {
  good_or_bad(x: number): string
}

class Bimp implements B {
  public good(x: number) {
    return "good"
  }
  public bad(x: number) {
    return "bad"
  }
  public good_or_bad(x: number) {
    return "good_or_bad"
  }
}

// Declaration Merging
interface User<Age extends number> {
  age: Age
}

// interface User<Age extends string> {
//   age: Age
// }
// interface User {
//   age: number
// }

// let a: User = {
//   age: 30,
//   name: "Ashley"
// }

;(() => {
  type Food = {
    calories: number
    tasty: boolean
  }

  type Sushi = Food & {
    stalty: boolean
  }

  type Cake = Food & {
    sweet: boolean
  }

  type A = number
  type B = A | string
})();

interface Animal {
  readonly name: string
  eat(food: string): void
  sleep(hours: number): void
}

interface Feline {
  meow(): void
}

class Cat implements Animal, Feline {
  public readonly name = "Whiskers"
  public eat(food: string) {
    console.info("Ate some", food, ". Mmm!")
  }
  public sleep(hours: number) {
    console.info("Selpt for", hours, "hours")
  }
  public meow() {
    console.info("Meow")
  }
}

let c = new Cat()
c.eat("food")
c.sleep(10)
c.meow()

class Zebra {
  public trot() {
    return 1
  }
}

class Poodle {
  public trot() {
    return 2
  }
}

function ambleAround(animal: Zebra) {
  console.log(animal.trot())
}

let zebra = new Zebra()
let poodle = new Poodle()

ambleAround(zebra)
ambleAround(poodle)

// tslint:disable-next-line:align
; (() => {
  class ClassA {
    public x: number = 1
  }
  class ClassB extends ClassA {}
  function f(a: ClassA) {
    return 1
  }

  f(new ClassA())
  f(new ClassB())
  f({x: 1})

  class C {}
  let c: C = new C()

  enum E {F = 1, G}
  let e: E = E.F
  l(e)
})();

(() => {
  type State = {
    [key: string]: string
  }

  class StringDatabase {
    public static from(state: State) {
      const db = new StringDatabase()
      for (const key in state) {
        if (key in state) {
          db.set(key, state[key])
        }
      }
      return db
    }
    public state: State = {}
    public get(key: string): string | null {
      return key in this.state ? this.state[key] : null
    }

    public set(key: string, value: string): void {
      this.state[key] = value
    }

  }
})()
//
