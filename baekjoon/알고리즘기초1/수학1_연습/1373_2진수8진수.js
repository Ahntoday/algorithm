let fs = require('fs');
let input = fs.readFileSync('../../test.txt').toString().split('\n');

let line = input.shift();
const numbers = [];
while (line.length > 3) {
    numbers.push(line.substr(line.length - 3, 3));
    line = line.substr(0, line.length - 3);
}
numbers.push(line);

let answer = "";
numbers.reverse().forEach((el) => {
    const ten = parseInt(el, 2);
    const hex = ten.toString(8);
    answer += hex;
});
console.log(answer);