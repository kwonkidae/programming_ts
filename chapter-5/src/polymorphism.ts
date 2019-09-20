(() => {
  class MyMap<K, V> {
    // public initialKey: K
    // public initialValue: V
    // tslint:disable-next-line:no-empty
    public static of<A, B>(k: A, v: B): MyMap<A, B> {
      return new MyMap(k, v);
    }
    constructor(public initialKey: K, public initialValue: V) {}

    public get(key: K): V {
      return this.initialValue
    }

    // tslint:disable-next-line:no-empty
    public set(key: K, value: V): void { }

    public merge<K1, V1>(map: MyMap<K1, V1>): MyMap<K | K1, V | V1> {
      return new MyMap(map.initialKey, map.initialValue)
    }

  }
})();

// mixin

(() => {
  type ClassConstructor<T> = new(...args: any[]) => T

  class HardToDebugUser {
    constructor(
      private id: number,
      private firstName: string,
      private lastName: string
    ) {}
    public getDebugValue() {
      return {
        id: this.id,
        name: this.firstName + " " + this.lastName
      }
    }
  }
  function withEZDebug<C extends ClassConstructor<{
    getDebugValue(): object
  }>>(Class: C) {
    return class extends Class {
      public debug() {
        const Name = Class.constructor.name
        const value = this.getDebugValue()
        return Name + "(" + JSON.stringify(value) + ")"
      }
    }
  }

  const User = withEZDebug(HardToDebugUser)
  const user = new User(3, "Emma", "Gluzman")
  console.log(user.debug())

  // Decorator
  type Payload = string
  function serializable<T extends ClassConstructor<{
    getValue(): Payload
  }>>(Constructor: T) {
    return class extends Constructor {
      public serialize() {
        return this.getValue().toString()
      }
    }
  }
  @serializable
  class ApiPayload {
    public getValue(): Payload {
      return "getValue"
    }
  }

  const DecoratedAPIPayload = serializable(ApiPayload)
  const payload = new DecoratedAPIPayload()
  console.log (payload.serialize())
})();


