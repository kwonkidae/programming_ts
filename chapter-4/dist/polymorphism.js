"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const l = console.log;
(() => {
    // type Filter = {
    //   (array: number[], f: (item: number) => boolean): number[]
    //   (array: string[], f: (item: string) => boolean): string[]
    //   (array: object[], f: (item: object) => boolean): object[]
    // }
    const filter = (array, f) => {
        const result = [];
        for (let i = 0; i < array.length; i++) {
            const item = array[i];
            if (f(item)) {
                result.push(item);
            }
        }
        return result;
    };
    l(filter([1, 2, 3], _ => _ > 2));
    let names = [
        { firstName: "beth" },
        { firstName: "caitlyn" },
        { firstName: "xin" }
    ];
    l(filter(names, _ => _.firstName.startsWith("b")));
})();
(() => {
    function map(array, f) {
        const result = [];
        for (let i = 0; i < array.length; i++) {
            result[i] = f(array[i]);
        }
        return result;
    }
    const value = 42;
    const someString = value;
    console.log(someString);
    // const otherString = someString.toUpperCase() runtime error
    l(map(["a", "b", "c"], _ => _ === "a"));
    l(map(["a", "b", "c"], _ => _ === "a"));
    let promise = new Promise(resolve => resolve(45));
    promise.then(result => result * 4);
})();
// tree
(() => {
    let a = { value: "a" };
    let b = { value: "b", isLeaf: true };
    let c = { value: "c", children: [b] };
    let a1 = mapNode(a, _ => _.toUpperCase());
    l(a1);
    let b1 = mapNode(b, _ => _.toUpperCase());
    l(b1);
    let c1 = mapNode(c, _ => _.toUpperCase());
    l(c1);
    function mapNode(node, f) {
        return {
            ...node,
            value: f(node.value)
        };
    }
    function logPerimeter(s) {
        console.log(s.numberOfSides * s.sideLength);
        return s;
    }
    let square = { numberOfSides: 4, sideLength: 3 };
    logPerimeter(square);
    // model arity
    function call(f, ...args) {
        return f(...args);
    }
    function fill(length, value) {
        return Array.from({ length }, () => value);
    }
    l(call(fill, 10, 5));
})();
//# sourceMappingURL=polymorphism.js.map