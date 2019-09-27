"use strict";
(() => {
    function tuple(...ts) {
        return ts;
    }
    // const a = tuple(1, true);
    // console.log(a);
    function isString(a) {
        return typeof a === 'string';
    }
    console.log(isString('a'));
    console.log(isString([7]));
    function parseInput(input) {
        let formattedInput;
        if (isString(input)) {
            formattedInput = input.toUpperCase();
        }
    }
    const a = true;
    console.log(a);
    const typeB = 5;
    console.log(typeB);
})();
//# sourceMappingURL=advancedFunction.js.map