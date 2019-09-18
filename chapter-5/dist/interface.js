"use strict";
// type Sushi = {
//   calories: number
//   salty: boolean
//   tasty: boolean
// }
;
class Bimp {
    good(x) {
        return "good";
    }
    bad(x) {
        return "bad";
    }
    good_or_bad(x) {
        return "good_or_bad";
    }
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
;
(() => {
})();
class Cat {
    constructor() {
        this.name = "Whiskers";
    }
    eat(food) {
        console.info("Ate some", food, ". Mmm!");
    }
    sleep(hours) {
        console.info("Selpt for", hours, "hours");
    }
    meow() {
        console.info("Meow");
    }
}
let c = new Cat();
c.eat("food");
c.sleep(10);
c.meow();
//# sourceMappingURL=interface.js.map