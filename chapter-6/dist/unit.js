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
    function parseWidth(width) {
        if (width == null) {
            return null;
        }
        if (typeof width === 'number') {
            return { unit: 'px', value: width };
        }
        const unit = parseUnit(width);
        if (unit) {
            return { unit, value: parseFloat(width) };
        }
        return null;
    }
})();
//# sourceMappingURL=unit.js.map