let fs = require('fs');
let input = fs.readFileSync('../../test.txt').toString().split('\n');

const n = Number(input[0]);
let DP = new Array(n+1).fill(0);
DP[1] = 1;
DP[2] = 3;

for (let i = 3; i <= n; i++) {
    DP[i] = (DP[i-1] + 2*DP[i-2])%10007;
}

console.log(DP[n]);