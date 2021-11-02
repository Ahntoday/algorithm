let fs = require('fs');
let input = fs.readFileSync('../../test.txt').toString().split('\n');

const [N, start] = input.shift().split(' ').map(el => parseInt(el, 10));
const nums = input.shift().split(' ').map(el => parseInt(el, 10));
let D = [];
const getGCD = (a, b) => {
    while (b) {
        [a, b] = [b, a % b];
    }
    return a;
};

nums.forEach(num => {
    D.push(Math.abs(start - num));
})

let result = D[0];
for (let i = 1; i < N; i++) {
    result = getGCD(result, D[i]); // 현재의 최대공약수와 새로운 차이값과 최대공약수 계산
}
console.log(result);