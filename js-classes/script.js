let prompt = require('prompt-sync')();

/* class User {
    
    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log(`Hello, ${this.name}`);
    }
}

// Usage:
let anUser = new User('John');
anUser.sayHi();

console.log(typeof User); // function

console.log(User === User.prototype.constructor);

console.log(Object.getOwnPropertyNames(User.prototype)); */


/* let User = class {
    sayHi() {
        console.log(`What's up!`);
    }
};

new User().sayHi(); */

/* 
function makeClass(phrase) {
    // declare a class and return it
    return class {
        sayHi() {
            console.log(phrase);
        }
    };
}

// Create a new class
let User = makeClass(`What's up!`);

new User().sayHi(); */

/* 
class User {
    constructor(name) {
        this.name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (value.length < 4) {
            console.log('Value is too short');
            return;
        }
        this._name = value;
    }
}

let sanjib = new User('Sanjib');
console.log(`Name of user: ${sanjib.name}`);

let san = new User('san'); */


// --------- Class Fields ------------
/* 
class User {
    name = 'John';

    sayHi() {
        console.log(`Hello, ${this.name}!`);
    }
}

new User().sayHi(); */


class User {
    name = prompt(`Name, please: `, 'John');
}

let anUser = new User();
console.log(`User name: ${anUser.name}`);