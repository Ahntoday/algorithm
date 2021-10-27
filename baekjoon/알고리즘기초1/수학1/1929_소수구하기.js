// 에라토스테네스의 체
const fs = require('fs');
const input = fs.readFileSync("../../test.txt").toString().trim().split('\n');

const [M, N] = input.shift().split(" ").map((el) => parseInt(el, 10));

const isPrime = (start, end) => {
    let arr = Array(end + 1).fill(true).fill(false, 0, 2); // 0과 1은 소수가 아니라고 체크
    for (let i = 2; i * i <= end; i++) { // i제곱이 n보다 작을 때까지
        if (arr[i]) { // true면은 (소수라고 되어 있는 것들)
            for (let j = i * i; j <= end; j += i) { // 제곱값을 지워나간다
                arr[j] = false;
            }
        }
    }
    const primeNums = [];
    arr.filter((el, idx) => {
        if (el === true && idx >= start && idx <= end) {
            primeNums.push(idx);
        }
    })
    return primeNums.join('\n');
}

console.log(isPrime(M, N));