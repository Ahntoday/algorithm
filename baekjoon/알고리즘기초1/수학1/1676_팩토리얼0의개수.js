const fs = require('fs');
let input = fs.readFileSync("../../test.txt").toString().trim().split('\n');
const N = Number(input.shift());
let count = 0;

for (let i = 5; i <= N; i *= 5) { // 10일 때 5 * 1, 5 * 2, 5의 배수가 2개임 => 인수 5의 개수 찾기.
    // 100일 때, 25의 배수들은 5를 2개씩 가지고 있으므로 반복문을 한번 더 돌려서 개수 더 세준다.
    count += parseInt(N / i);
}

console.log(count);