const fs = require('fs');
const input = fs.readFileSync("../test.txt").toString().trim().split('\n');
const N = parseInt(input.shift(), 10);

let time = input.toString().split(" ").map(Number);
let sum = 0;

time.sort((a, b) => a - b);

function solution(N, time) {
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < i + 1; j++) {
            sum += time[j];
        }
    }
    return sum;
}
console.log(solution(N, time));
