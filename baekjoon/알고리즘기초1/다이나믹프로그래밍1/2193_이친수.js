let fs = require('fs');
let input = fs.readFileSync('../../test.txt').toString().split('\n');

const N = Number(input.shift());
const DP = Array(N + 1).fill(0);
for (let i = 1; i <= N; i++) {
    DP[i] = [];
}

DP[1][0] = BigInt(0); // 한자린데 0으로 끝나는 이친수는 없음. (0으로 시작하면 안되므로)
DP[1][1] = BigInt(1); // 1

for (let i = 2; i <= N; i++) {
    DP[i][1] = DP[i - 1][0];  // 1로 끝나는 상황 : 전 항이 1로 끝나면 1끼리 붙게 되므로 안됨. 전 항은 무조건 0으로 끝나야 함.
    DP[i][0] = DP[i - 1][0] + DP[i - 1][1]; // 0으로 끝나는 상황 : 전 항이 0으로 끝나던 1로 끝나던 상관없음.
}

console.log(String(DP[N].reduce((acc, cur) => acc + cur)));