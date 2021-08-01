const fs = require('fs');
const input = fs.readFileSync("../test.txt").toString().trim().split('\n');

const n = parseInt(input.shift(), 10);
const data = input.toString().split(' ').map(Number);
data.sort((a, b) => a - b);

let result = [];

function solution(n, data) {
    let arrays = [];
    for (let i = 0; i < n; i++) {
        let array = new Array();
        for (let j = 1; j <= data[i]; j++) { // 각각 수의 공약수를 구함
            if (data[i] % j == 0) {
                array.push(j);
            }
        }
        arrays.push(array);
    }
    result = arrays[0];
    for (let i = 0; i < arrays.length - 1; i++) {
        let temp = arrays[i].filter((it) => arrays[i + 1].includes(it)); // 두 배열에 공통으로 있는 것을 temp에 담음
        result = result.filter((el) => temp.includes(el)); // temp에 있는 것으로 result를 다시 필터링함
    }
}

solution(n, data);
result.forEach((el) => console.log(el));