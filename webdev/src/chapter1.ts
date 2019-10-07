import { Observable } from 'rxjs';

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
