import { Observable, interval } from 'rxjs';

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


