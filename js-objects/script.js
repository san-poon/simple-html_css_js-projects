let prompt = require('prompt-sync')();

/* let user = {
    userName: 'Jan Doe',
    age: 30,

    sayHi() {
        console.log(`User name is ${this.userName}.`);
    }
}

user.sayHi(); */
/* 
let user = { userName: 'Jan Doe' };
let admin = { userName: 'San Poon' };

function sayHi() {
    console.log(this.userName);
}

user.greet = sayHi;
admin.greet = sayHi;

user.greet();
admin.greet();

admin['greet']();

function makeUser() {
    return {
        name: 'John',
        ref() {
            return this;
        }
    }
}

let user2 = makeUser();
console.log( user2.ref().name ); */
/* 
function User(name) {
    this.name = name;
    this.isAdmin = false;
}

let sanjib = new User('Sanjib');
console.log(sanjib.name);
sanjib.isAdmin = true;

let prakash = new User('Prakash');
console.log(`Prakash is Admin: ${prakash.isAdmin}`);

console.log(`Sanjib is admin: ${sanjib.isAdmin}`);

function Calculator() {
    this.read = function() {
        this.firstNum = +prompt(`First Num: `)
        this.secondNum = +prompt(`Second Num: `)
    };

    this.sum = function() {
        return this.firstNum + this.secondNum;
    }

    this.multiply = function() {
        return this.firstNum * this.secondNum;
    }
}

let calculator1 = new Calculator();
calculator1.read();

let total = calculator1.sum();
let product = calculator1.multiply();

console.log(`Total: ${total} and Product: ${product}`);

 */

/* function Accumulator(startingValue) {
    this.startingValue = startingValue;
    this.total = startingValue;

    this.read = function() {
        this.value = +prompt(`A number: `)
        this.total += this.value;
    }
}

let anAccumulator = new Accumulator(2);
anAccumulator.read();
anAccumulator.read();

console.log(`Total: ${anAccumulator.total}`); */

let userAdmin = {
    admin() {
        console.log(`I am admin.`);
    }
}

let userGuest = {};

userAdmin.admin?.();
userGuest.admin?.();


let key = 'firstName';

let john = {
    firstName: 'John',
};

let dan = {};

console.log(john?.[key]);
console.log(dan?.[key]);

delete john?.[key]
console.log(john?.[key]);