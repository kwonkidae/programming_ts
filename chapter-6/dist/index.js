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
//# sourceMappingURL=index.js.map