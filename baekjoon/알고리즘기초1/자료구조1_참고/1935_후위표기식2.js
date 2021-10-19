const fs = require('fs');
const input = fs.readFileSync("../../test.txt").toString().trim().split('\n');

const N = parseInt(input.shift(), 10);

// LRP 스택에 수를 하나씩 넣으면서(push) 연산자를 만나면 이전 두수를 빼고(pop) 연산을 수행한 값을 스택에 넣는다.
let data = input.shift();
let stack = [];
for (let i = 0; i < data.length; i++) {
    if (data[i] >= 'A' && data[i] <= 'Z') {
        stack.push(input[data[i].charCodeAt(0) - 65]);
    }
    else { // 연산자라면
        const a = parseFloat(stack.pop());
        const b = parseFloat(stack.pop());
        switch (data[i]) {
            case '+':
                stack.push((a + b).toFixed(2));
                break;
            case '-':
                stack.push((b - a).toFixed(2));
                break;
            case '*':
                stack.push((a * b).toFixed(2));
                break;
            case '/':
                stack.push((b / a).toFixed(2));
                break;
        }
    }
}
console.log(stack.pop());