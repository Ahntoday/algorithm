const fs = require('fs');
const input = fs.readFileSync("../../test.txt").toString().trim().split('\n');
const sentence = input.shift();
let flag = true; // false면 정방향, true면 reverse
let answer = '';
let stack = [];

for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === '<') flag = false;
    if (sentence[i] === '>') {
        flag = true;
        answer += '>';
        continue;
    }

    if (flag) { // 역방향이면
        if (sentence[i] !== ' ') stack.push(sentence[i]);
    }

    if (!flag || sentence[i] === ' ') { // 정방향이면
        while (stack.length !== 0) { // 스택이 비워질 때 까지
            answer += stack.pop();
        }
        answer += sentence[i];
    }
}

while (stack.length !== 0) answer += stack.pop();
console.log(answer);