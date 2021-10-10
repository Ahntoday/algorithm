const fs = require('fs');
const input = fs.readFileSync("../../test.txt").toString().trim().split('\n');
const N = parseInt(input.shift(), 10);
let stack = [];
let result = [];

for (let i = 0; i < N; i++) {
    switch (input[i]) {
        case 'pop':
            result.push(stack.pop() || -1);
            break;

        case 'top':
            result.push(stack[stack.length - 1] || -1);
            break;

        case 'size':
            result.push(stack.length);
            break;

        case 'empty':
            result.push(stack[0] ? 0 : 1);
            break;

        default:
            stack.push(Number(input[i].split(' ')[1]));
            break;
    }
}
console.log(result.join('\n'));