import { Observable, interval, fromEvent } from 'rxjs';
import { map, takeUntil, tap } from 'rxjs/operators';
/*
(() => {
  let tenthSecond$ = new Observable(observer => {
    let counter = 0;
    observer.next(counter);
    let interv = setInterval(() => {
      counter++;
      observer.next(counter);
    }, 100);
  
    return function unsubscribe() { console.log('unsubscribe'); clearInterval(interv); };
  });
  
  
  let unsubs = tenthSecond$.subscribe((d) => {
    console.log(d)
  })
  
  unsubs.unsubscribe();
})();

(() => {
  const tSecond$ = interval(100);
  const uT = tSecond$.subscribe(console.log);
  setTimeout(() => {
    console.log('unsubscribe...');
    uT.unsubscribe();
  }, 1000)
  
})();
(() => {
  let tenthSecond$ = interval(100);
  tenthSecond$
  .pipe(
    map(num => num / 10)
  )
  .subscribe(console.log);
})();
*/
(() => {
  setTimeout(() => {
    const startButton = document.querySelector('#start-button');
    const stopButton = document.querySelector('#stop-button');
    let resultsArea = document.querySelector<HTMLElement>('.output');
    console.log(resultsArea);
    let tenthSecond$ = interval(100);
    let startClick$ = fromEvent(startButton, 'click');
    let stopClick$ = fromEvent(stopButton, 'click');
  
    startClick$.subscribe(() => {
      tenthSecond$
        .pipe(
          map(item => (item / 10)),
          takeUntil(stopClick$.pipe(tap(() => { resultsArea.innerHTML = ''; })))
        )
        .subscribe(num => resultsArea.innerHTML = num + 's')
    });
  
  }, 1000);

})();
