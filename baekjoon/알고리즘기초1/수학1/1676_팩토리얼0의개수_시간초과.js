const fs = require('fs');
let input = fs.readFileSync("../../test.txt").toString().trim().split('\n');

const N = Number(input.shift());

let count = 0;
let factorial = N;
for (let i = N - 1; i > 0; i--) {
    factorial *= i;
}
let stringFactorial = factorial.toString().split('').reverse().map((el) => parseInt(el, 10));

for (let i = 0; i < stringFactorial.length; i++) {
    if (stringFactorial[i] === 0) {
        count += 1;
    }
    else {
        break;
    }
}

for (let i = 5; i <= N; i *= 5) {
    count += parseInt(N / i);
}

console.log(count);
