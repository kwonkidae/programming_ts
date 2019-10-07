import { interval } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';
import './MainThread';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);

// const source$ = interval(1000);

// source$
//   .pipe(
//     mergeMap(
//       // project
//       val => interval(5000).pipe(take(2)),
//       // resultSelector
//       (oVal, iVal, oIndex, iIndex) => [oIndex, oVal, iIndex, iVal],
//       // concurrent
//     )
//   )
//   .subscribe(val => console.log(val));
