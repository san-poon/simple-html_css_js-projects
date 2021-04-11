/* console.log('Hello World');

document.body.style.background = '#cacaca';

setTimeout(() => document.body.style.background = '', 3000); */

/* 
for (let node of document.body.childNodes) {
    console.log(node);
} */


function multiplesOf3and5(number) {
    let largestFiveMultiplier = Math.floor(number / 5);
    console.log(`LargestFiveMultiplier: ${largestFiveMultiplier}`);
    let largestThreeMultiplier = Math.floor(number / 3);
    console.log(`largest 3 Multiplier: ${largestThreeMultiplier}`);

    let requiredTotal = 3 + 5;
    for (let i = 2; i <= largestFiveMultiplier; i++) {
      requiredTotal += (5 * i);
    }
    for (let i = 2; i <= largestThreeMultiplier; i++) {
      let currentNumber = i * 3;
      if(currentNumber % 5 === 0) continue;
      requiredTotal += currentNumber;
    }
  
    return requiredTotal;
  }
  
console.log(multiplesOf3and5(1000));