const fs = require('fs');
const input = fs.readFileSync("../../test.txt").toString().trim().split('\n');

const T = parseInt(input.shift(), 10);
const getGCD = (a, b) => a % b === 0 ? b : getGCD(b, a % b);
const getLCM = (a, b) => a * b / getGCD(a, b);
let result = [];

for (let i = 0; i < T; i++) {
    const [a, b] = input[i].split(' ').map((el) => parseInt(el, 10));
    result.push(getLCM(a, b));
}

console.log(result.join('\n'));