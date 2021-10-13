const fs = require('fs');
const input = fs.readFileSync("../../test.txt").toString().trim().split('\n');
let left = input.shift().split('');
let right = [];
const M = parseInt(input.shift(), 10);

for (let i = 0; i < M; i++) {
    let [cmd, value] = input[i].split(" ");
    if (cmd === "L" && left.length) right.push(left.pop());
    else if (cmd === "D" && right.length) left.push(right.pop());
    else if (cmd === "B") left.pop();
    else if (cmd === "P") left.push(value);
}

let answer = left.join("");
answer += right.reverse().join("");
console.log(answer);