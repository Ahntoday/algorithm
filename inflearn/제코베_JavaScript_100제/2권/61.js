const input = prompt('문자열을 입력하세요.');
console.log(input);
let result = '';
let initialValue = input[0];
let count = 1;

// 1. 나의 풀이
for (let i = 1; i < input.length + 1; i++) {
    if (input[i] === initialValue) {
        count += 1;
    } else {
        result += initialValue + String(count);
        initialValue = input[i];
        count = 1;
    }
}
console.log(result);

// 2. 답안
let result2 = '';
let initialValue2 = input[0];
let count2 = 0;
for (let i of input) {
    if (i === initialValue2) {
        count2 += 1;
    } else {
        result2 += initialValue2 + String(count2);
        initialValue2 = i;
        count2 = 1;
    }
}
result2 += initialValue2 + String(count2);
console.log(result2);