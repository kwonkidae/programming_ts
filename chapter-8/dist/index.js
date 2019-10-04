"use strict";
(() => {
    function flatten(array) {
        console.log(array);
        return Array.prototype.concat.apply([], array);
    }
    const tempA = flatten([[1]]);
    function parse(birthday) {
        const d = new Date(birthday);
        if (!isValid(d)) {
            return new InvalidDateFormatError('Enter a date in to form YYYY/MM/DD');
        }
        if (d.getTime() > Date.now()) {
            return new DateIsInTheFutureError('Are you a timeload');
        }
        return d;
    }
    function isValid(d) {
        return Object.prototype.toString.call(d) === '[object Date]' &&
            !Number.isNaN(d.getTime());
    }
    class InvalidDateFormatError extends RangeError {
    }
    // tslint:disable-next-line:max-classes-per-file
    class DateIsInTheFutureError extends RangeError {
    }
    try {
        const result = parse('2019-12-12');
        // console.info('Datee is', date.toISOString());
        if (result instanceof InvalidDateFormatError) {
            console.log(result.message);
        }
        else if (result instanceof DateIsInTheFutureError) {
            console.info('no error', result.message);
        }
        else {
            console.info('Date is', result.toISOString());
        }
    }
    catch (e) {
        if (e instanceof InvalidDateFormatError) {
            console.error('InvalidDateFormatError', e.message);
        }
        else if (e instanceof DateIsInTheFutureError) {
            console.info('DateIsInFuture', e.message);
        }
        else {
            throw e;
        }
    }
})();
(() => {
    // tslint:disable-next-line:max-classes-per-file
    class Some {
        constructor(value) {
            this.value = value;
        }
        flatMap(f) {
            return f(this.value);
        }
        getOrElse(value) {
            return this.value;
        }
    }
    function Option(value) {
        if (value == null) {
            return new None();
        }
        return new Some(value);
    }
    // tslint:disable-next-line:max-classes-per-file
    class None {
        flatMap() {
            return this;
        }
        getOrElse(value) {
            return value;
        }
    }
    try {
        const result = Option(6)
            .flatMap((n) => Option(n * 3))
            .flatMap((n) => new None())
            .getOrElse(8);
        console.log(result);
    }
    catch (e) {
        console.log(e.message);
    }
    // tslint:disable-next-line:max-classes-per-file
    function neverF() {
        throw new Error('error');
    }
})();
//# sourceMappingURL=index.js.map