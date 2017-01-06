const calc = require('./calc');

const numbersToAdd = [
    3,
    4,
    10,
    2
];

{
let aggregate = numbersToAdd.reduce((acc, value, index)=>acc + value * index);
const result = calc.sumTwoAtRandom(numbersToAdd);
console.log(`The result is : ${result} the aggregate is ${aggregate}`);
}
