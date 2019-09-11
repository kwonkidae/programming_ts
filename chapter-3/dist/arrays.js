"use strict";
(() => {
    console.log("here");
    const g = [];
    g.push(1);
    g.push("red");
    console.log(g);
    const h = [];
    h.push(1);
    // h.push("red")
    const d = [1, "a"];
    console.log(d.map(_ => {
        if (typeof _ === "number") {
            return _ * 3;
        }
        return _.toUpperCase();
    }));
    function buildArray() {
        const a = [];
        a.push(1);
        a.push("x");
        return a;
    }
    const myArray = buildArray();
    // myArray.push(true)
})();
// Tuples
(() => {
    const a = [1];
    console.log(a);
    let b = ["malcolm", "gladwell", 1963];
    console.log(b);
    b = ["queen", "elizabeth", 1926,];
    let trainFares = [
        [3.75],
        [8.25, 7.70],
        [10.50]
    ];
    let friends = ["sara", "tali", "chloe", "claaire"];
    let list = [1, false];
    // read only
    let as = [1, 2, 3];
    let bs = as.concat(4);
    let three = bs[2];
    // as[4] = 5 Index signature in type 'readonly number[]' only permits reading.
    // as.push(6) Property 'push' does not exist on type 'readonly number[]'.
})();
(() => {
    class Pizza {
        addAnchovies() {
            console.log("addAnchovies");
        }
    }
    function addDeliciousFish(pizza) {
        return pizza.addAnchovies();
    }
    addDeliciousFish(new Pizza());
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
    let Language;
    (function (Language) {
        Language[Language["English"] = 0] = "English";
        Language[Language["Spanish"] = 1] = "Spanish";
    })(Language || (Language = {}));
    (function (Language) {
        Language[Language["Russian"] = 2] = "Russian";
    })(Language || (Language = {}));
})();
(() => {
    let Language;
    (function (Language) {
        Language[Language["English"] = 100] = "English";
        Language[Language["Spanish"] = 500] = "Spanish";
        Language[Language["Russian"] = 501] = "Russian";
    })(Language || (Language = {}));
    let Color;
    (function (Color) {
        Color["Red"] = "#c10000";
        Color["Blud"] = "#007ac1";
        Color[Color["Pink"] = 12648528] = "Pink";
        Color[Color["White"] = 255] = "White";
    })(Color || (Color = {}));
    console.log(typeof Color.Red);
})();
(() => {
    let Language;
    (function (Language) {
        Language[Language["Engliash"] = 0] = "Engliash";
        Language[Language["Spanish"] = 1] = "Spanish";
        Language[Language["Russian"] = 2] = "Russian";
    })(Language || (Language = {}));
    let a = 0 /* Engliash */;
    // let c = Language[0] A const enum member can only be accessed using a string literal.
    let Flippable;
    (function (Flippable) {
        Flippable[Flippable["Burger"] = 0] = "Burger";
        Flippable[Flippable["Chair"] = 1] = "Chair";
        Flippable[Flippable["Cup"] = 2] = "Cup";
        Flippable[Flippable["Skateboard"] = 3] = "Skateboard";
        Flippable[Flippable["Table"] = 4] = "Table";
    })(Flippable || (Flippable = {}));
    function flip(f) {
        return "flipped it";
    }
    flip(1 /* Chair */);
    flip(2 /* Cup */);
    flip(12);
})();
(() => {
    let Flippable;
    (function (Flippable) {
        Flippable["Burger"] = "Burger";
    })(Flippable || (Flippable = {}));
    function flip(f) {
        return "flipped it";
    }
    flip("Burger" /* Burger */);
    flip("Burger");
})();
//# sourceMappingURL=arrays.js.map