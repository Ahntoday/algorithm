const fs = require('fs');
const input = fs.readFileSync("../../test.txt").toString().trim().split('\n');
const data = input.shift();

// )가 나타났을 때, 레이저인지 파이프의 끝인지 구별
// 레이저면, 스택 사이즈만큼 더해주기.
let stack = [];
let answer = 0;

for (let i = 0; i < data.length; i++) {
    if (data[i] === '(') {
        stack.push(data[i]);
    }
    else { // )라면 레이저인지, 파이프의 끝인지 구별
        stack.pop();
        if (data[i - 1] === '(') { // 레이저
            answer += stack.length;
        }
        else { // 파이프의 끝이면
            answer += 1; // 꼭다리 추가
        }
    }
}

console.log(answer);