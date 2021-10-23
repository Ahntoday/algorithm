const fs = require('fs');
const input = fs.readFileSync("../../test.txt").toString().trim().split('\n');

let result = [];
const [n, m] = input.shift().split(' ').map((el) => parseInt(el, 10));

const getGCD = (a, b) => a % b === 0 ? b : getGCD(b, a % b);
const getLCM = (a, b) => a * b / getGCD(a, b);

result.push(getGCD(n, m));
result.push(getLCM(n, m));

console.log(result.join('\n'));