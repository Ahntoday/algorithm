const fs = require('fs');
const input = fs.readFileSync("../../test.txt").toString().trim().split('\n');

const [a, b, c] = input.shift().split(' ').map((el) => parseInt(el, 10));
let result = [];

result.push((a + b) % c);
result.push(((a % c) + (b % c)) % c);
result.push((a * b) % c);
result.push((a % c) * (b % c) % c);

console.log(result.join('\n'));