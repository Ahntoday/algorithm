let fs = require('fs');
let input = fs.readFileSync('../../test.txt').toString().split(' ');
let literal = input[0].split('').reverse();
let base = Number(input[1]);
let result = 0;

for (let i = 0; i < literal.length; i++) {
    if (literal[i] >= 'A' && literal[i] <= 'Z') {
        result += (literal[i].charCodeAt(0) - 55) * Math.pow(base, i);
    }
    else {
        result += Number(literal[i]) * Math.pow(base, i);
    }
}

console.log(result);