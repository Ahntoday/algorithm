const fs = require('fs');
const input = fs.readFileSync("../test.txt").toString().trim().split('\n');
let [N, M] = input.shift().toString().split(' ').map(Number);

let data = new Array(N);

for (let i = 0; i < N; i++) {
    data[i] = parseInt(input[i].toString(), 10);
}

data.sort((a, b) => a - b);

function solution(M, data) {
    let min = 2000000000;
    let j = 0;
    for (let i = 0; i < data.length && j < data.length;) {
        if (data[i] - data[j] >= M) {
            min = Math.min(min, data[i] - data[j]);
            j++;
        } else {
            i++;
        }
    }
    return min;
}

console.log(solution(M, data));