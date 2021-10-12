const fs = require('fs');
const input = fs.readFileSync("../../test.txt").toString().trim().split('\n');
const T = parseInt(input.shift(), 10);

let result = [];

for (let i = 0; i < T; i++) {
    let temp = input[i].split('');
    let stack = [];
    for (let j = 0; j < temp.length; j++) {
        if (temp[j] === '(') {
            stack.push('(');
        }
        else {
            if (stack[stack.length - 1] === '(') {
                stack.pop();
            }
            else {
                stack.push(')');
            }
        }
    }
    result.push(stack[0] ? 'NO' : 'YES'); // 스택 값이 있으면 올바르지 않음. 없으면 올바름.
}

console.log(result.join('\n'));