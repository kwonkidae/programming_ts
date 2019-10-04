"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const fs_1 = require("fs");
(() => {
    fs.readFile('test.txt', { encoding: 'utf8' }, (error, data) => {
        if (error) {
            console.error('error reading', error);
            return;
        }
        console.info('sucess reading!', data);
    });
    fs.appendFile('test.txt', 'New acess log entry', (error) => {
        if (error) {
            console.error('error writing!', error);
        }
    });
})();
(() => {
    function readFilePromise(path) {
        return new Promise((resolve, reject) => {
            fs_1.readFile(path, (error, result) => {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(result);
                }
            });
        });
    }
})();
//# sourceMappingURL=index.js.map