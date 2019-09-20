"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
(() => {
    class MyMap {
        constructor(initialKey, initialValue) {
            this.initialKey = initialKey;
            this.initialValue = initialValue;
        }
        // public initialKey: K
        // public initialValue: V
        // tslint:disable-next-line:no-empty
        static of(k, v) {
            return new MyMap(k, v);
        }
        get(key) {
            return this.initialValue;
        }
        // tslint:disable-next-line:no-empty
        set(key, value) { }
        merge(map) {
            return new MyMap(map.initialKey, map.initialValue);
        }
    }
})();
// mixin
(() => {
    class HardToDebugUser {
        constructor(id, firstName, lastName) {
            this.id = id;
            this.firstName = firstName;
            this.lastName = lastName;
        }
        getDebugValue() {
            return {
                id: this.id,
                name: this.firstName + " " + this.lastName
            };
        }
    }
    function withEZDebug(Class) {
        return class extends Class {
            debug() {
                const Name = Class.constructor.name;
                const value = this.getDebugValue();
                return Name + "(" + JSON.stringify(value) + ")";
            }
        };
    }
    const User = withEZDebug(HardToDebugUser);
    const user = new User(3, "Emma", "Gluzman");
    console.log(user.debug());
    function serializable(Constructor) {
        return class extends Constructor {
            serialize() {
                return this.getValue().toString();
            }
        };
    }
    let ApiPayload = class ApiPayload {
        getValue() {
            return "getValue";
        }
    };
    ApiPayload = __decorate([
        serializable
    ], ApiPayload);
    const DecoratedAPIPayload = serializable(ApiPayload);
    const payload = new DecoratedAPIPayload();
    console.log(payload.serialize());
})();
// Decorator
//# sourceMappingURL=polymorphism.js.map