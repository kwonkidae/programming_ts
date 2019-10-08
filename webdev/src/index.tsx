import React from 'react';
import ReactDOM from 'react-dom';
import { interval } from 'rxjs';
import './chapter1';
// import './MainThread';

ReactDOM.render(
  <div>
    <button id='start-button'>start</button>
    <button id='stop-button'>stop</button>
    <div className='output'></div>
    <div id='draggable' style={{'width': '100px',  'height': '100px', 'backgroundColor': 'red'}}></div>
  </div>,
  document.getElementById('root')
);
