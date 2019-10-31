import React from 'react';
import ReactDOM from 'react-dom';
import { interval } from 'rxjs';
// import './chapter1';
// import './MainThread';
import './chapter2';
import './chapter3';
ReactDOM.render(
  <div>
    <button id='start-button'>start</button>
    <button id='stop-button'>stop</button>
    <input type='text' id='input_text' ></input>
    <input type='button' id='button_click' ></input>
    <div className='output'></div>
    <div id='draggable' style={{'width': '100px',  'height': '100px', 'backgroundColor': 'red'}}></div>
  </div>,
  document.getElementById('root')
);
