const fs = require('fs');
const input = fs.readFileSync("../test.txt").toString().trim().split('\n');
let [N, S] = input.shift().toString().split(' ').map(Number);

let data = input.toString().split(' ').map(Number);

function solution(S, data) {
    let sum = data[0];
    let start = 0; // 앞
    let min = 100000000;
    for (let end = 0; end < data.length && start < data.length;) {
        if (sum >= S) {
            min = Math.min(min, end - start + 1);
        }
        if (sum < S) {
            end++; // 뒤에것을 더해간다.
            if (end < N) {
                sum += data[end];
            }
        }
        else {
            sum -= data[start];
            start++; // 앞에것을 더해간다.
        }
    }
    if (min === 100000000) {
        return 0;
    } else {
        return min;
    }
}
console.log(solution(S, data));