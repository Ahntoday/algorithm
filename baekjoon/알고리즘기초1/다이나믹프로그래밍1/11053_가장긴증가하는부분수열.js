let fs = require('fs');
let input = fs.readFileSync('../../test.txt').toString().split('\n');

// DP에 자신을 포함하여 만들 수 있는 부분 수열의 크기를 저장한다
// 현재 위치가 이전에 있는 원소보다 큰지 확인하고, 크다면 그 위치의 DP값에 1을 더한다. (DP[i] < DP[j]인 경우에 한함)
// 마지막에 DP에 있는 값 중 Max 출력

const N = Number(input.shift());
const arr = input.shift().split(' ').map((el) => parseInt(el, 10));
const DP = Array(N).fill(0);

for (let i = 0; i < N; i++) {
    for (let j = 0; j < i; j++) {
        if (arr[i] > arr[j] && DP[i] < DP[j]) { // DP[i] < DP[j] 없으면 앞에 DP값 중 최대값으로 설정되지 않는다. 
            DP[i] = DP[j];
        }
    }
    DP[i] += 1;
    // console.log(DP);
}
console.log(Math.max.apply(null, DP));