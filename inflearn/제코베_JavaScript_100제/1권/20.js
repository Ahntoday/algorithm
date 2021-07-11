const n = prompt('두 숫자를 입력하세요.').split(' ');

const result = Math.floor(parseInt(n[1], 10) / parseInt(n[0], 10));
const left = parseInt(n[1], 10) % parseInt(n[0], 10);
console.log(result, left);