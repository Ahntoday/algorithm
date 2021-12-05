// 예를 들어 DP[8]을 구하고자 한다면
// 8장의 카드가 들어있는 카드팩을 사는 비용 prices[8]
// 7장의 카드를 사는 최소 비용 + 1장의 카드를 사는 최소 비용 : DP[7] + DP[1]
// 6장의 카드를 사는 최소 비용 + 2장의 카드를 사는 최소 비용 : DP[6] + DP[2]
// 5장의 카드를 사는 최소 비용 + 3장의 카드를 사는 최소 비용 : DP[5] + DP[3]
// 4장의 카드를 사는 최소 비용 * 2 : DP[4] + DP[4]

let fs = require('fs');
let input = fs.readFileSync('../../test.txt').toString().split('\n');

const N = Number(input.shift());
const prices = [0].concat(input[0].split(' ').map((el) => parseInt(el, 10)));
const DP = Array(N + 1).fill(0);
DP[1] = prices[1]; // 1개를 사는데 최소금액

for (let i = 2; i <= N; i++) {
    let min = prices[i];
    for (let j = 1; j < parseInt(i / 2, 10) + 1; j++) {
        if (DP[j] + DP[i - j] < min) {
            min = DP[j] + DP[i - j];
        }
    }
    DP[i] = Math.min(prices[i], min);
}

console.log(DP[N]); // N개의 카드를 구매하는 최소 비용