const prompt = require('prompt-sync')();

function showGreetings() {
    let name = 'Seema';
    let greetingMessage = 'Good Afternoon';
    console.log(`${greetingMessage}, ${name}.`)
}

showGreetings();
showGreetings();

function showGreetings(receiver = 'Everyone', text = 'Hello!') {
    console.log(receiver + ', ' + text);
}
showGreetings('Sanjib', 'What\'s up');

function showCount(count) {
    console.log(count ?? 'unknown');
}

showCount(0);
showCount(null);
showCount();

console.log(`\n-----------------------------------\n`);

let sayHi = function() {
    console.log('Hello');
};

sayHi();

let sayHello = sayHi;
sayHello();

/* function ask(question, yes, no) {
    if (prompt(question) == 'yes') yes();
    else no();
}

function showOk() {
    console.log('You agreed.');
}

function showCancel() {
    console.log('You canceled the execution.');
}

ask('Do you agree?', showOk, showCancel); */

/* function ask(question, yes, no) {
    if(prompt(question) == 'yes') yes();
    else no();
}
ask(
    'Do you agree? \t',
    function() { console.log('You agree.');},
    function() { console.log('You canceled the execution.');}
); */

console.log(`\n-----------------Arrow Functions--------------\n`)

/* let age = prompt(`Your age? : `)

let welcome = (age < 18) ?
    () => console.log('Hello') :
    () => console.log('Greetings');

welcome(); */

console.log(`-----------------Nullish Coalescing Operator ??---------`);

let user = 'David';
console.log(user ?? 'Anonymous');

let firstName = null;
let lastName = undefined;
let nickname = 'Poon';

console.log(firstName ?? lastName ?? nickname ?? 'Anonymous');

let height = null;
let width = 50;
let areaUnit = null;
let area = (height ?? 10) * (width ?? 10) + (areaUnit ?? 'cm2');
console.log(area);