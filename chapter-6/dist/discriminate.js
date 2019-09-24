"use strict";
(() => {
    function handle(event) {
        if (typeof event.value === 'string') {
            console.log('event');
            return;
        }
        return event.value;
    }
    function getNextDay(w) {
        switch (w) {
            case 'Mon': return 'Tue';
            default:
                return 'Sat';
        }
    }
    function isBig(n) {
        if (n >= 100) {
            return true;
        }
    }
})();
//# sourceMappingURL=discriminate.js.map