let fs = require('fs');
let input = fs.readFileSync('../../test.txt').toString().split('\n');

// 3 = 1 + 1 + 1, 1 + 2, 2 + 1, 3
// 4 = 1 + 1 + 1 + 1, 1 + 2 + 1, 2 + 1 + 1, 3 + 1, 1 + 1 + 2, 2 + 2, 1 + 3
const T = Number(input.shift());
let result = [];
let arr = [0, 1, 2, 4];
for (let i = 0; i < T; i++) {
    let num = Number(input[i]);
    for (let j = 4; j <= num; j++) {
        arr[j] = arr[j - 1] + arr[j - 2] + arr[j - 3];
    }
    result.push(arr[num]);
}

console.log(result.join('\n'));