const fs = require('fs');
const input = fs.readFileSync("../../test.txt").toString().trim().split('\n');
const [N, K] = input[0].split(' ').map(el => parseInt(el, 10));

let people = new Array(N).fill(0).map((el, idx) => idx + 1);
let result = [];

let cnt = 0;

while (people.length > 0) {
    cnt = (cnt + K - 1) % people.length;
    result.push(people[cnt]);
    people.splice(cnt, 1);
}

const answer = '<' + result.join(', ') + '>';
console.log(answer);