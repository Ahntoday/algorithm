const fs = require('fs');
const input = fs.readFileSync("../../test.txt").toString().trim().split('\n');
const M = parseInt(input.shift(), 10);

let queue = [];
let result = [];
for (let i = 0; i < M; i++) {
    switch (input[i]) {
        case 'pop':
            result.push(queue.length !== 0 ? queue.shift() : -1);
            break;
        case 'size':
            result.push(queue.length);
            break;
        case 'empty':
            result.push(queue.length !== 0 ? 0 : 1);
            break;
        case 'front':
            result.push(queue.length !== 0 ? queue[0] : -1);
            break;
        case 'back':
            result.push(queue.length !== 0 ? queue[queue.length - 1] : -1);
            break;
        default:
            let [cmd, num] = input[i].split(' ');
            queue.push(num);
    }
}
console.log(result.join("\n"));