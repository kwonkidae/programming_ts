"use strict";
(() => {
    function deleteUser(user) {
        delete user.id;
    }
    // tslint:disable-next-line:align
    const existingUser = {
        id: 123456,
        name: 'kkdosk',
    };
    deleteUser(existingUser);
})();
(() => {
    class Animal {
    }
    // tslint:disable-next-line:max-classes-per-file
    class Bird extends Animal {
        // tslint:disable-next-line:no-empty
        chirp() { }
    }
    // tslint:disable-next-line:max-classes-per-file
    class Crow extends Bird {
        // tslint:disable-next-line:no-empty
        caw() { }
    }
    function chirp(bird) {
        bird.chirp();
        return bird;
    }
    // chirp(new Animal())  TS2345: Argument of type 'Animal' is not assignable to parameter of type 'Bird'.
    // Property 'chirp' is missing in type 'Animal' but required in type 'Bird'.
    chirp(new Bird());
    chirp(new Crow());
    // tslint:disable-next-line:no-empty
    function clone(f) {
    }
    function birdToBird(b) {
        return b;
    }
    clone(birdToBird);
    function birdToCrow(d) {
        return new Crow();
    }
    clone(birdToCrow);
    function birdToAnimal(d) {
        return new Bird();
    }
    clone(birdToAnimal);
})();
(() => {
    const a = 'x';
    const b = 3;
    const c = true;
    const d = { x: 3 };
    let E;
    (function (E) {
        E[E["X"] = 0] = "X";
        E[E["Y"] = 1] = "Y";
        E[E["Z"] = 2] = "Z";
    })(E || (E = {}));
    const e = E.X;
})();
(() => {
    const a = 'x';
    const b = 3;
    const c = true;
    const d = { x: 3 };
})();
(() => {
    const a = null;
    // a = 3;
    // a = 'b';
    // tslint:disable-next-line:no-console
    console.log(a);
    // tslint:disable-next-line:max-classes-per-file
    class API {
        constructor(options) {
            this.options = options;
        }
    }
    let api = new API({
        baseURL: 'httpsL//api.mysite.com',
        tier: 'prod',
    });
    api = new API({
        baseURL: 'https://api.mysite.com',
        tierr: 'prod',
    });
    const activityLog = {
        events: [{ id: 'abcd', timestamp: new Date(), type: 'Read' }],
        lastEvent: new Date(),
    };
    const get = (object, ...keys) => {
        let result = object;
        keys.forEach((k) => result = result[k]);
        return result;
    };
    console.log(get(activityLog, 'events', 0, 'type'));
    console.log(get(activityLog, 'lastEvent'));
})();
//# sourceMappingURL=advanceType.js.map