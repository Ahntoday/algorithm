let fs = require('fs');
let input = fs.readFileSync('../../test.txt').toString().split(' ');
let numbers = parseInt(input[0], 10).toString(input[1]);
let result = '';

for (let i = 0; i < numbers.length; i++) {
    if ('a' <= numbers[i] && numbers[i] <= 'z') {
        result += numbers[i].toUpperCase();
    }
    else {
        result += numbers[i];
    }
}

console.log(result);