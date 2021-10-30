const fs = require('fs');
let input = fs.readFileSync("../../test.txt").toString().trim().split('\n');

const N = Number(input.shift());
let result = N;
for (let i = N - 1; i > 0; i--) {
    result *= i;
}
if (result === 0) {
    result = 1;
}
console.log(result);