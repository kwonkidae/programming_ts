"use strict";
function tuple(...ts) {
    return ts;
}
Array.prototype.zip = function (list) {
    return this.map((v, k) => tuple(v, list[k]));
};
const _a = [1, 2, 3]
    .map((n) => n * 2)
    .zip(['a', 'b', 'c']);
console.log(_a);
//# sourceMappingURL=zip.js.map