import { Observable, interval, fromEvent, from } from 'rxjs';
import { map, takeUntil, tap, delay, take, flatMap, reduce } from 'rxjs/operators';
/*
(() => {
  setTimeout(() => {
    function pigLatinify(word) {
      if (word.length < 2) {
        return word;
      }
      return word.slice(1) + '-' + word[0].toLowerCase() + 'ay';
    }
  
    console.log(pigLatinify('kkdosk'));
  
    const textbox = document.querySelector('#input_text');
    let keyUp$ = fromEvent(textbox, 'keyup')
    keyUp$
    .pipe(
      map(event => (event.target as HTMLInputElement).value),
      map(wordString => wordString.split(/\s+/)),
      map(wordArray => wordArray.map(pigLatinify))
    )
    .subscribe(translated => console.log(translated));
  }, 100);
})();
*/

(() => {
  from([1,2,3])
  .pipe(
    reduce((accumulator, val) => accumulator + val, 0)
  ).subscribe(console.log);
})();
