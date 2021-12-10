let fs = require('fs');
let input = fs.readFileSync('../../test.txt').toString().split('\n');

// 1. 사자가 없다.
// 2. 왼쪽에 사자가 있다.
// 3. 오른쪽에 사자가 있다.

const N = Number(input.shift());
const DP = Array.from(Array(100001), () => Array(3));
DP[1][0] = 1;
DP[1][1] = 1;
DP[1][2] = 1;

for (let i = 2; i <= N; i++) {
    DP[i][0] = (DP[i - 1][0] + DP[i - 1][1] + DP[i - 1][2]) % 9901;
    DP[i][1] = (DP[i - 1][0] + DP[i - 1][2]) % 9901;
    DP[i][2] = (DP[i - 1][0] + DP[i - 1][1]) % 9901;
}

console.log((DP[N][0] + DP[N][1] + DP[N][2]) % 9901);