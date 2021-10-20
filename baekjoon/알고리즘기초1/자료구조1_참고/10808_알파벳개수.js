const fs = require('fs');
const input = fs.readFileSync("../../test.txt").toString().trim().split('\n');

const S = input.shift();
// 기존 배열에 없으면 추가. 있으면 제외
let uniqueDatas = {};
let result = [];

for (let i = 0; i < 26; i++) {
    uniqueDatas[String.fromCharCode(97 + i)] = 0;
}

for (let i = 0; i < S.length; i++) {
    uniqueDatas[S[i]] += 1;
}

for (let value of Object.values(uniqueDatas)) {
    result.push(value);
}

console.log(result.join(' '));