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

  interface IWidth {
    unit: Unit;
    value: number;
  }

  function parseWidth(width: number | string | null | undefined): IWidth | null {
    if (width == null) {
      return null;
    }

    if (typeof width === 'number') {
      return {unit: 'px', value: width};
    }

    const unit = parseUnit(width);
    if (unit) {
      return {unit, value: parseFloat(width)};
    }

    return null;
  }
})();
