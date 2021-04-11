import { 
    sum as add, 
    difference as subtract, product, division } from './functions.js';
const x = 10;
const y = 5;

document.getElementById('x').textContent = x;
document.getElementById('y').textContent = y;

document.getElementById('addition').textContent = add(x, y);
document.getElementById('subtraction').textContent = subtract(x, y);
document.getElementById('multiplication').textContent = product(x, y);
document.getElementById('division').textContent = division(x, y);