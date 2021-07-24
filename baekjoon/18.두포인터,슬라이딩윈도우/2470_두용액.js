const fs = require('fs');
const input = fs.readFileSync("../test.txt").toString().trim().split('\n');
const N = parseInt(input.shift(), 10);

let data = input.toString().split(' ').map(Number);

let min = 2000000000;

data.sort((a, b) => a - b);

function solution(N, data) {
    let start = 0;
    let answer = [0, 0];
    let sum = 0;
    for (let end = N - 1; start < end;) {
        sum = data[start] + data[end];
        if (Math.abs(sum) < Math.abs(min)) { // 절댓값이 min보다 작으면 min 업데이트
            min = sum;
            answer[0] = data[start];
            answer[1] = data[end];
        }
        if (sum <= 0) {
            start++;
        }
        else {
            end--;
        }
    }
    return answer;
}

console.log(solution(N, data).join(" "));