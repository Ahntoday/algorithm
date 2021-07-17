// 재귀함수 사례 : 2진수 변환

// 반복문
let result = '';
let x = parseInt(prompt('숫자를 입력하세요.'), 10);
console.log('x', x);

while (true) {
    if (x % 2 == 0) {
        result += '0'; // result = '0' + result; 
    } else {
        result += '1'; // result = '1' + result;
    }
    x = Math.floor(x / 2);
    // Math.ceil() : 소수점 올림
    // Math.floor() : 소수점 버림
    // Math.round() : 소수점 반올림

    if (x == 1 || x == 0) {
        result += String(x); // result = String(x) + result;
        break;
    }
}

console.log(result.split('').reverse().join(''));

// 재귀함수
function f(num) {
    if (num == 1 || num == 0) {
        return String(num);
    }
    return f(Math.floor(num / 2)) + String(num % 2);
}

console.log(f(11));