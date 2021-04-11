/* class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }

    run(speed) {
        this.speed = speed;
        console.log(`${this.name} runs with speed ${this.speed} km/hr.`);

    }

    stop() {
        this.speed = 0;
        console.log(`${this.name} stands still.`);
    }
}

let animal = new Animal('Dog');
// animal.run(20);

class Rabbit extends Animal {
    hide() {
        console.log(`${this.name} hides!`);
    }
}

let caine = new Rabbit('Caine');
caine.run(12);
caine.hide(); */

/* function createClass(phrase) {
    return class {
        sayHi() {
            console.log(phrase);
        }
    };
}

class User extends createClass(`What's up!`){};

new User().sayHi(); */


class Animal {

    constructor(name) {
        this.speed = 0;
        this.name = name;
    }

    run(speed) {
        this.speed = speed;
        console.log(`${this.name} is running with speed ${this.speed}.`);
    }

    stop() {
        this.speed = 0;
        console.log(`${this.name} is standing still.`);
    }
}

class Rabbit extends Animal {

    constructor(name, earLength) {
        super(name);
        this.earLength = earLength;
    }

    hide() {
        console.log(`${this.name} is hiding.`);
    }

    stop() {
        super.stop();
        this.hide();
    }
}


let rabbit = new Rabbit(`White Rabbit`, 3);
rabbit.run(5);
rabbit.stop();

console.log(`Ear Length of rabbit: ${rabbit.earLength}`);