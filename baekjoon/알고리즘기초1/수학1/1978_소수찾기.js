const fs = require('fs');
const input = fs.readFileSync("../../test.txt").toString().trim().split('\n');

const N = Number(input.shift());
const numbers = input.shift().split(" ").map((el) => parseInt(el, 10));
let result = 0;

const isPrime = (num) => {
    if (num === 0 || num === 1) {
        return false
    }
    for (let i = 2; i < Math.floor(num); i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}

for (let i = 0; i < N; i++) {
    if (isPrime(numbers[i])) {
        result += 1;
    }
}
console.log(result);