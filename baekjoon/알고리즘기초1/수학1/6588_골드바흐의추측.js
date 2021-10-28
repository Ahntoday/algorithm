const fs = require('fs');
let input = fs.readFileSync("../../test.txt").toString().trim().split('\n');
input = input.map(el => parseInt(el, 10));
let result = [];
console.log(input);
const isPrime = (n) => {
    let arr = Array(n + 1).fill(true).fill(false, 0, 2);
    for (let i = 2; i * i <= n; i++) { // i제곱이 n보다 작을 때까지
        if (arr[i]) { // true면은 (소수라고 되어 있는 것들)
            for (let j = i * i; j <= n; j += i) { // 제곱값을 지워나간다
                arr[j] = false;
            }
        }
    }
    const primeNums = [];
    arr.filter((el, idx) => {
        if (el === true && idx % 2 !== 0) {
            primeNums.push(idx);
        }
    });
    // console.log(primeNums);
    return primeNums;
}

for (let i = 0; i < input.length; i++) {
    // console.log(isPrime(Number(input[i])));
    const primeNums = isPrime(input[i]);
    let [maxPrime, minPrime] = [0, 0];
    // console.log(primeNums);
    let max = 0;
    let result = [0, 0];
    for (let j = 0; j < primeNums.length; j++) {
        for (let k = j; k < primeNums.length; k++) {
            if (primeNums[j] + primeNums[k] === input[i]) {
                maxPrime = primeNums[j] > primeNums[k] ? primeNums[j] : primeNums[k];
                minPrime = primeNums[j] > primeNums[k] ? primeNums[k] : primeNums[j];
                console.log(primeNums[j], primeNums[k]);
                console.log(`max: ${max} maxPrime: ${maxPrime} minPrime: ${minPrime}`);

                if (max < maxPrime - minPrime) {
                    result[0] = minPrime;
                    result[1] = maxPrime;
                    max = maxPrime - minPrime;
                }
            }
        }
    }
    let str = (input[i] + '=' + minPrime + '+' + maxPrime);
    result.push(str);
}

console.log(result);