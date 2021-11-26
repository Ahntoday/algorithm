let fs = require('fs');
let input = fs.readFileSync('../../test.txt').toString().split('\n');

const [a, b] = input[0].split(' ').map(el => parseInt(el, 10));
const m = Number(input[1]);
const datas = input[2].split(' ').map(el => parseInt(el, 10)).reverse();
let ten = 0;
let result = [];

for (let i = 0; i < m; i++) {
    ten += datas[i] * Math.pow(a, i);
}

while (ten !== 0) {
    let num = ten % b;
    result.push(String(num));
    ten = parseInt(ten / b);
}

console.log(result.reverse().join(' '));