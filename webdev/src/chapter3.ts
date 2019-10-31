import { ajax } from 'rxjs/ajax';
import { map, mergeMap, retry } from 'rxjs/operators';
import { throwError, interval, from, of, merge } from 'rxjs';
(() => {
  console.log('chapter3');
  ajax('http://www.lvh.me:9000/api/lawyers/realcount')
  .pipe(
    map(response => response.response)
  )
  // .subscribe({
  //   next: (val) => { console.log(val); },
  //   error: (err) =>  { console.log('error', err); },
  //   complete: () => { console.log('complete'); },
  // })
  .subscribe(
    result => console.log(result),
    err => console.error(err)
  );

  throwError(new Error('Augh!'))
  .subscribe({
    next: (val) => console.log('This'),
    error: err => console.log(err)
  });

  let request$ = interval(5000)
  .pipe(
    mergeMap(() => 
      ajax('/carStatus.json')
      .pipe(retry(3))
    )
  );

  let castStatus = request$.subscribe((val) => {
    console.log('val', val);
  }, (err) => {
    console.log('error', err);
  });

  function fetchObservable(endpoint) {
    let requestP = fetch(endpoint)
    .then(res => res.json());
    return from(requestP);
  }

  fetchObservable('http://www.lvh.me:9000/api/lawyers/realcount')
  .subscribe((val) => {
    console.log('val', val);
  });

  let helloP = of('Hello World')
  .toPromise();

  helloP.then((val) => {
    console.log('toPromise', val);
  })

  let rCar$ = interval(5000)
  .pipe(
    mergeMap(() => {
      return fetch('http://www.lvh.me:9000/api/lawyers/realcount')
      .then(res => res.json())
    })
  );

  let catStatus = rCar$.subscribe((val) => {
    console.log('rCar', val);
  })
})();
