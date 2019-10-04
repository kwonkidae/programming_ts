import * as fs from 'fs';
import {readFile} from 'fs';

(() => {
  fs.readFile('test.txt',
    {encoding: 'utf8'},
    (error, data) => {
      if (error) {
        console.error('error reading', error);
        return;
      }
      console.info('sucess reading!', data);
    },
  );

  fs.appendFile('test.txt',
  'New acess log entry',
  (error) => {
    if (error) {
      console.error('error writing!', error);
    }
  });
})();

(() => {
  function readFilePromise(path: string): Promise<Buffer> {
    return new Promise((resolve, reject) => {
      readFile(path, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  }
})();
