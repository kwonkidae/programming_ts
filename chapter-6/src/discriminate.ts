(() => {
  interface IUserTextEvent {value: string; }
  interface IUserMouseEvent {value: [number, number]; }

  type UserEvent = IUserTextEvent | IUserMouseEvent;

  function handle(event: UserEvent) {
    if (typeof event.value === 'string') {
      console.log('event');
      return;
    }
    return event.value;
  }

  type Weekday = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri';
  type Day = Weekday | 'Sat' | 'Sun';

  function getNextDay(w: Weekday): Day {
    switch (w) {
      case 'Mon': return 'Tue';
      default:
        return 'Sat';
    }
  }

  function isBig(n: number): boolean | undefined {
    if (n >= 100) {
      return true;
    }
  }
})();
