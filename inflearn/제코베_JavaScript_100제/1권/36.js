const n = prompt('숫자를 입력하시오.');
let result = '';
for (let i = 1; i < 10; i++) {
    result += n * i + ' ';
}

console.log(result);