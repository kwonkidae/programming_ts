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
})();
(() => {
    function formatInput(input) {
    }
    function getUserInput() {
        return 'a';
    }
    const input = getUserInput();
    formatInput(input);
    function addToList(list, item) {
    }
    addToList('this is really', 'really unsage');
    let userId;
    fetchUser();
    userId.toUpperCase();
    function fetchUser() {
        userId = 'kkdosk';
    }
    console.log(userId.toUpperCase());
})();
//# sourceMappingURL=advancedFunction.js.map