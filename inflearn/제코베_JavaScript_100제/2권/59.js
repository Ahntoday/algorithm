// 1. 나의 풀이
const input = prompt('문자열을 입력하세요.');
let result = '';
let count = 25 - parseInt((input.length / 2), 10);

if (input.length % 2 === 0) {
    result = "=".repeat(count) + input + "=".repeat(count);
} else {
    result = "=".repeat(count - 1) + input + "=".repeat(count);
}
console.log(result);

// 2. 내장함수 이용
// 왼쪽부터 채우기
count = 25 + parseInt((input.length / 2), 10);
let result2 = input.padStart(count, '=');
// 오른쪽부터 채우기
result2 = result2.padEnd(50, '=');
console.log(result2);