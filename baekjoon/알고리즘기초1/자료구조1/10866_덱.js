const fs = require('fs');
const input = fs.readFileSync("../../test.txt").toString().trim().split('\n');
const N = parseInt(input.shift(), 10);

let deque = [];
let result = [];

for (let i = 0; i < N; i++) {
    let [cmd, num] = input[i].split(' ');
    num = parseInt(num, 10);
    switch (cmd) {
        case 'push_front':
            deque.unshift(num);
            break;
        case 'push_back':
            deque.push(num);
            break;
        case 'pop_front':
            result.push(deque.shift() || -1);
            break;
        case 'pop_back':
            result.push(deque.pop() || -1);
            break;
        case 'size':
            result.push(deque.length);
            break;
        case 'empty':
            result.push(deque.length === 0 ? 1 : 0);
            break;
        case 'front':
            result.push(deque[0] || -1);
            break;
        default: // case 'back'
            result.push(deque[deque.length - 1] || -1);
    }
}

console.log(result.join('\n'));