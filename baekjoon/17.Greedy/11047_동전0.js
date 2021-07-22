const fs = require('fs');
const input = fs.readFileSync("../test.txt").toString().trim().split('\n');
let [N, K] = input.shift().toString().split(' ').map(Number);
const coins = input.map(Number);
let count = 0;

function solution(K, coins) {
    const possibleCoins = coins.filter(c => c <= K);
    for (let i = possibleCoins.length - 1; i >= 0; i--) {
        count += parseInt(K / possibleCoins[i], 10);
        K = parseInt(K % possibleCoins[i], 10);
        if (K === 0) {
            break;
        }
    }
    return count;
}

console.log(solution(K, coins));