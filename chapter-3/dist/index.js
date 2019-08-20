"use strict";
function squareOf(n) {
    return n * n;
}
squareOf(2);
squareOf(5);
(() => {
    const a = 555;
    const b = ["danger"];
    const c = a + b;
})();
(() => {
    const a = 30;
    const b = a === 123;
    // let c = a + 10 Object is of type 'unknwon
    if (typeof a === "number") {
        const d = a + 10;
        console.log(d);
    }
})();
(() => {
    let a = true;
    var b = false;
    const c = true;
    let d = true;
    let e = true;
    // let f: true = false
})();
(() => {
    let a = 1234;
    const b = Infinity * 0.10;
    console.log(b);
    const d = a < b;
    const e = 100;
    const f = 26.218;
    // let g: 26.218 = 10
    const oneMillion = 1000000;
    const twoMillion = 2000000;
    console.log(oneMillion, twoMillion);
})();
// bigint
(() => {
    const a = 1234n;
    console.log(typeof a);
    const b = 5678n;
    const c = a + b;
    const d = a < 1234;
    // const e = 88.5n
    const f = 100n;
    const g = 100n;
    // const h: bigint = 100
})();
// string
(() => {
    const a = "hello";
    const b = "billy";
    const c = "!";
    const d = a + " " + b + c;
    const e = "zoom";
    const f = "john";
    // const g: "john" = "zoe" TS2322: Type '"zoe"' is not assignable to type '"john"'.
})();
(() => {
    const a = Symbol("a");
    console.log(typeof a);
    const b = Symbol("b");
    const c = a === b;
    console.log(c);
    // const d = a + "x" TS2469: The '+' operator cannot be applied to type 'symbol'.
    const e = Symbol("e");
    const f = Symbol("f");
    const g = Symbol("f");
    const h = e === e;
    // const i = e === f
    // This condition will always return 'false' since the types 'typeof e' and 'typeof f' have no overlap.
})();
// object
(() => {
    const a = {
        b: "x"
    };
    // TS2339: Property 'b' does not exist on type 'object'.
    console.log(a.b);
    let b = {
        c: {
            d: "f"
        }
    };
    console.log(b.c.d);
})();
(() => {
    let c = {
        firstName: "john",
        lastName: "barrowman"
    };
    console.log(c);
    class Person {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
    }
    c = new Person("matt", "smith");
    let a;
    a = {
        b: 1,
    };
    // let i: number
    // Variable 'i' is used before being assigned.
    // let i
    // Object is possibly 'undefined'.
    // let j = i * 3
})();
(() => {
    let a;
    a = { b: 1 };
    a = { b: 1, c: undefined };
    a = { b: 1, c: "d" };
    a = { b: 1, 10: true };
    a = { b: 1, 10: true, 20: true };
    // a = {10: true} Property 'b' is missing
    // a = {b: 1, 33: 'red'} Type 'string' is not assignable to type 'boolean'
    let airplaneSeatingAssignments = {
        "34D": "Boris Cherny",
        "34E": "Bill Gates"
    };
    console.log(airplaneSeatingAssignments);
    let user = {
        firstName: "abby"
    };
    console.log(user.firstName);
    // user.firstName = "kkdosk" Cannot assign to 'firstName' because it is a read-only property.
    let danger = {};
    danger = {};
    danger = { x: 1 };
    danger = [];
    danger = 2;
    // danger = null 
    // danger = undefined TS2322: Type 'undefined' is not assignable to type '{}'.
})();
// type aliases
(() => {
    let age = 55;
    let driver = {
        age,
        name: "James May"
    };
    // type Color = "blue"
    let x = Math.random() < .5;
    if (x) {
        let b = "blue";
    }
    else {
        let b = "red";
    }
})();
// union and intersection
(() => {
    let a = {
        name: "Bonkers",
        purrs: true
    };
    a = {
        barks: true,
        name: "Domino",
        wags: true
    };
    a = {
        barks: true,
        name: "Donkers",
        purrs: true,
        wags: true
    };
    let b = {
        barks: true,
        name: "Domino",
        purrs: true,
        wags: true
    };
    function trueOrNull(isTrue) {
        if (isTrue) {
            return "true";
        }
        return null;
    }
    console.log(trueOrNull(true));
    function returns(param) {
        return param;
    }
    console.log(returns(null));
})();
//# sourceMappingURL=index.js.map