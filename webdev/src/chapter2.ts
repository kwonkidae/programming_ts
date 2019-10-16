import { Observable, interval, fromEvent, from, of, fromEventPattern } from 'rxjs';
import { 
  map, 
  takeUntil, 
  tap, 
  delay, 
  take, 
  flatMap, 
  reduce, 
  mergeMap,
  mapTo,
  mergeMapTo,
  toArray,
  repeat,
  filter 
} from 'rxjs/operators';

function pigLatinify(word) {
  if (word.length < 2) {
    return word;
  }
  return word.slice(1) + '-' + word[0].toLowerCase() + 'ay';
}
/*
(() => {
  setTimeout(() => {
  
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
(() => {
  from([1,2,3])
  .pipe(
    reduce((accumulator, val) => accumulator + val, 0)
  ).subscribe(console.log);


  let friends = [{
    name: 'Jill',
    favoriteFoods: ['pizza', 'hummus']
    }, {
    name: 'Bob',
    favoriteFoods: ['ice cream']
    }, {
    name: 'Alice',
    favoriteFoods: ['chicken wings', 'salmon']
  }];
  function pigLatinify(word) {
    if (word.length < 2) {
      return word;
    }
    return word.slice(1) + '-' + word[0].toLowerCase() + 'ay';
  }

  from(friends)
  .pipe(
    flatMap(friend => friend.favoriteFoods),
    reduce((bigString, newWord) => bigString + ' ' + newWord, '')
  )
  .subscribe(val => console.log(val));

  of(...friends)
  .pipe(
    map(friend => friend.name),
    tap(value => console.log(value)),
    map(pigLatinify),
    reduce((bigString, newWord) => bigString + ' ' + newWord, '')
  ).subscribe(console.log);
})();
(() => {
  interval(1000)
  .pipe(
    mapTo('Hello world!')
  )
  .subscribe(console.log)
})();
(() => {
  setTimeout(() => {
    const textbox = document.querySelector('#input_text');
    fromEvent(textbox, 'click')
    .pipe(
      mergeMapTo(interval(1000))
    ).subscribe(console.log)
  }, 1000);

  interval(1000)
  .pipe(
    tap(val => {
      console.log('inside tap', val);
      return val * 100;
    })
  ).subscribe(val => console.log('inside subscribe', val));
})();
(() => {
  setTimeout(() => {
    const textbox = document.querySelector('#input_text');
    const results = <HTMLInputElement>document.querySelector('.output');
    fromEvent<any>(textbox, 'keyup')
    .pipe(
      map(event => event.target.value),
      mergeMap(wordString =>
        from(wordString.split(/\s+/))
        .pipe(
          map(pigLatinify),
          reduce((bigString, newWord) => bigString + ' ' + newWord, '')
        )
      )
    ).subscribe(transtatedWords => results.innerText = transtatedWords);
  });
})();
(() => {
  setTimeout(() => {
    const button = <HTMLInputElement>document.querySelector('#button_click');
    console.log(button)
    fromEvent(button, 'click')
    .pipe(
      take(3),
      toArray()
    )
    .subscribe(console.log);
  }, 1000);

  of(...[1,2,3])
  .pipe(
    delay(1000),
    repeat(3)
  )
  .subscribe(console.log)
})();
*/

(function typeahead(){
  let usStates = ['alabama', 'alaska', 'arizona', 'arkansas', 'california', 'colorado', 'connecticut', 'delaware', 'florida', 'georgia', 'hawaii', 'idaho', 'illinois', 'indiana', 'iowa', 'kansas', 'kentucky', 'louisiana', 'maine', 'maryland', 'massachusetts', 'michigan', 'minnesota', 'mississippi', 'missouri', 'montana', 'nebraska', 'nevada', 'new hampshire', 'new jersey', 'new mexico', 'new york', 'north carolina', 'north dakota', 'ohio', 'oklahoma', 'oregon', 'pennsylvania', 'rhode island', 'south carolina', 'south dakota', 'tennessee', 'texas', 'utah', 'vermont', 'virginia', 'washington', 'west virginia', 'wisconsin', 'wyoming'];
  
  setTimeout(() => {
    const text = <HTMLInputElement>document.querySelector('#input_text');
    const results = <HTMLInputElement>document.querySelector('.output');
    fromEvent<any>(text, 'keyup')
    .pipe(
      map((e): string => e.target.value.toLowerCase()),
      tap(() => results.innerHTML = ''),
      filter(val => val.length > 2),
      mergeMap(val =>
        from(usStates)
        .pipe(
          filter(state => state.includes(val)),
          map(state => state.split(val).join('<b>' + val + '</b>')),
          reduce((prev: any, state) => prev.concat(state), [])
        )
      )
    )
    .subscribe(
      (stateList: string[]) => results.innerHTML += '<br>' + stateList.join('<br>')
    ) 
  }, 1000);
})();
