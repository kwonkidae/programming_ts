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
