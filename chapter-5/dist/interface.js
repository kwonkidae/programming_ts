"use strict";
const l = console.log;
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
class Zebra {
    trot() {
        return 1;
    }
}
class Poodle {
    trot() {
        return 2;
    }
}
function ambleAround(animal) {
    console.log(animal.trot());
}
let zebra = new Zebra();
let poodle = new Poodle();
ambleAround(zebra);
ambleAround(poodle);
(() => {
    class ClassA {
        constructor() {
            this.x = 1;
        }
    }
    class ClassB extends ClassA {
    }
    function f(a) {
        return 1;
    }
    f(new ClassA());
    f(new ClassB());
    f({ x: 1 });
    class C {
    }
    let c = new C();
    let E;
    (function (E) {
        E[E["F"] = 1] = "F";
        E[E["G"] = 2] = "G";
    })(E || (E = {}));
    let e = E.F;
    l(e);
})();
(() => {
    class StringDatabase {
        constructor() {
            this.state = {};
        }
        static from(state) {
            const db = new StringDatabase();
            for (const key in state) {
                if (key in state) {
                    db.set(key, state[key]);
                }
            }
            return db;
        }
        get(key) {
            return key in this.state ? this.state[key] : null;
        }
        set(key, value) {
            this.state[key] = value;
        }
    }
})();
//
//# sourceMappingURL=interface.js.map