// 1. 내장함수
// const num = parseInt(prompt('숫자를 입력하세요.'), 10);
// console.log(num.toLocaleString()); 


// 2. 재귀함수 사용
const input = prompt('숫자를 입력하세요.');

function comma(data) {
    if (data.length <= 3) {
        return data;
    } else {
        return comma(data.slice(0, data.length - 3)) + ',' + data.slice(data.length - 3);
    }
}

console.log(comma(input));