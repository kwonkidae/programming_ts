import { Observable, interval, fromEvent } from 'rxjs';
import { map, takeUntil, tap, delay, take } from 'rxjs/operators';
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
(() => {
  setTimeout(() => {
    const draggable = <HTMLElement>document.querySelector('#draggable');
    const mouseDown$ = fromEvent<MouseEvent>(draggable, 'mousedown');
    const mouseMove$ = fromEvent<MouseEvent>(document, 'mousemove');
    const mouseUp$ = fromEvent<MouseEvent>(document, 'mouseup');

    mouseDown$.subscribe(() => {
      mouseMove$
      .pipe(
        map(event => {
          event.preventDefault();
          return {
            x: event.clientX,
            y: event.clientY
          };
        }),
        takeUntil(mouseUp$)
      )
      .subscribe(pos => {
        draggable.style.left = pos.x + 'px';
        draggable.style.top = pos.y + 'px';
      })
    });
  }, 1000);
})();
(() => {
  const tSecond$ = interval(100);
  const uT = tSecond$.subscribe(console.log);
  // unsubscribe
  uT.add((val) => {
    console.log('first unsubscribe');
  });

  uT.add(() => {
    console.log('second unsubscribe');
  });

  setTimeout(() => {
    uT.unsubscribe();
  }, 500);
})();
*/
import { of, merge } from 'rxjs';
(() => {
  of('hello', 'world', '!')
  .subscribe(console.log)
})();

(() => {
  of(1, 2, 3)
  .pipe(
    delay(1000)
  )
  .subscribe(console.log);
  
  let oneSecond$ = of('one').pipe(delay(1000));
  let twoSecond$ = of('two').pipe(delay(2000));
  let threeSecond$ = of('three').pipe(delay(3000));
  let fourSecond$ = of('four').pipe(delay(4000));

  merge(
    oneSecond$,
    twoSecond$,
    threeSecond$,
    fourSecond$
  )
  .subscribe(console.log);

  interval(1000)
    .pipe(
      take(5),
      map(val => val * 5),
      delay(500)
    )
    .subscribe(console.log)
})();

