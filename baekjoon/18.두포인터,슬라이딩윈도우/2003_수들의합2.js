const fs = require('fs');
const input = fs.readFileSync("../test.txt").toString().trim().split('\n');
let [N, M] = input.shift().toString().split(' ').map(Number);

let data = input.toString().split(' ').map(Number);

function solution(M, data) {
    let count = 0;
    let sum = data[0];
    let start = 0; // 앞

    for (let end = 0; end < data.length && start < data.length;) {
        if (sum < M) {
            end++; // 뒤에것을 더해간다.
            if (end < N) {
                sum += data[end];
            }
        }
        else if (sum > M) {
            sum -= data[start];
            start++; // 앞에것을 더해간다.
        }
        else if (sum === M) {
            count += 1;
            sum -= data[start]; // 앞에 거, 뒤에 거 동시에 한칸씩 뒤로 이동하여 검색
            start++;
            end++;
            if (end < N) {
                sum += data[end];
            }
        }
    }
    return count;
}
console.log(solution(M, data));