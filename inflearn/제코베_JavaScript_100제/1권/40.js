let count = 0;
let sum = 0;
const limit = prompt('제한 무게를 입력하세요.');
const n = prompt('인원수를 입력하세요.');

for (let i = 1; i <= n; i++) {
    sum += parseInt(prompt('무게를 입력해주세요.'), 10);
    if (sum <= limit) {
        count += 1;
    }
}

console.log(count);