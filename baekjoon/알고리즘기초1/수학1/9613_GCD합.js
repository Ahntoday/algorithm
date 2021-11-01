let fs = require('fs');
let inputs = fs.readFileSync('../../test.txt').toString().split('\n');
let cases = Number(inputs[0]);
let answer = [];
let tmp;
const getGCD = (a, b) => a % b === 0 ? b : getGCD(b, a % b);

for (let i = 1; i <= cases; i++) {
    let splited = inputs[i].split(' ');
    let nums = Number(splited[0]);
    let result = 0;
    for (let j = 1; j <= nums; j++) {
        for (let k = j + 1; k <= nums; k++) {
            let common = getGCD(Number(splited[j]), Number(splited[k]));
            result += common;
        }
    }
    answer.push(result);
}
console.log(answer.join('\n').trim());
