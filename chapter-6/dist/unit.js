"use strict";
(() => {
    const units = ['cm', 'px', '%'];
    function parseUnit(value) {
        for (const i of units) {
            if (value.endsWith(i)) {
                return i;
            }
        }
        return null;
    }
    console.log(parseUnit('10cm'));
})();
//# sourceMappingURL=unit.js.map