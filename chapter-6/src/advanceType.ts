(() => {
  interface IExistingUser {
    id: number;
    name: string;
  }

  interface INewUser {
    name: string;
  }

  function deleteUser(user: {id?: number, name: string}) {
    delete user.id;
  }

  // tslint:disable-next-line:align
  const existingUser: IExistingUser = {
    id: 123456,
    name: 'kkdosk',
  };

  deleteUser(existingUser);
})();

(() => {
  class Animal {}
  // tslint:disable-next-line:max-classes-per-file
  class Bird extends Animal {
    // tslint:disable-next-line:no-empty
    public chirp() {}
  }

  // tslint:disable-next-line:max-classes-per-file
  class Crow extends Bird {
    // tslint:disable-next-line:no-empty
    public caw() {}
  }

  function chirp(bird: Bird): Bird {
    bird.chirp();
    return bird;
  }

  // chirp(new Animal())  TS2345: Argument of type 'Animal' is not assignable to parameter of type 'Bird'.
  // Property 'chirp' is missing in type 'Animal' but required in type 'Bird'.
  chirp(new Bird());
  chirp(new Crow());

  // tslint:disable-next-line:no-empty
  function clone(f: (b: Bird) => Bird): void {

  }

  function birdToBird(b: Bird): Bird {
    return b;
  }

  clone(birdToBird);

  function birdToCrow(d: Bird): Crow {
    return new Crow();
  }
  clone(birdToCrow);

  function birdToAnimal(d: Bird): Bird {
    return new Bird();
  }

  clone(birdToAnimal);
})();

(() => {
  const a = 'x';
  const b = 3;
  const c = true;
  const d = {x: 3};

  enum E {X, Y , Z}
  const e = E.X;
})();

(() => {
  const a: 'x' = 'x';
  const b: 3 = 3;
  const c: true = true;
  const d: {x: 3} = {x: 3};
})();

(() => {
  let a = null;
  a = 3;
  a = 'b';
  // tslint:disable-next-line:no-console
  console.log(a);

  interface IOptions {
    baseURL: string;
    cacheSize?: number;
    tier?: 'prod' | 'dev';
  }

  // tslint:disable-next-line:max-classes-per-file
  class API {
    constructor(private options: IOptions) {}
  }

  let api = new API({
    baseURL: 'httpsL//api.mysite.com',
    tier: 'prod',
  });

  api = new API({
    baseURL: 'https://api.mysite.com',
    tierr: 'prod',
  } as IOptions);
})();
