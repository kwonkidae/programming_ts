(() => {
  let logPause = (events) => {
    console.log(events.target.value);
    console.log('There was a pause in the typing.')
  };

  function debounce(fn, delay = 333) {
    let time;
    return function(...args) {
      if (time) {
        clearTimeout(time);
      }
      time = setTimeout(() => fn(...args), delay);
    }
  }

  setTimeout(() => {
    const input = <HTMLInputElement>document.querySelector('#input_text');
    let logPauseDebounced = debounce(logPause);
    input.addEventListener('keydown', logPauseDebounced);
  }, 100);

  let f = debounce((num) => console.log('debounded! Arg:', num));

  f(1);
  f(2);
  f(3);
  f(4);
  f(5);

  let i = 0;
  let interval = setInterval(() => {
    console.log(++i);
    f(1);
  }, 100);

  setTimeout(() => clearInterval(interval), 1000);
})();
