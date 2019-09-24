(() => {
  type Unit = 'cm' | 'px' | '%';

  const units: Unit[] = ['cm', 'px', '%'];

  function parseUnit(value: string): Unit | null {
    for (const i of units) {
      if (value.endsWith(i)) {
        return i;
      }
    }
    return null;
  }
  console.log(parseUnit('10cm'));

})();
