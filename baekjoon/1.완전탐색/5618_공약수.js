// 1. 백준 제출을 위한 입출력 코드
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// let input = [];
// let data = [];
// rl.on('line', function (line) {
//     input.push(line);
// }).on('close', function () {
//     const n = parseInt(input[0]);
//     const data = input[1].split(' ').map((el) => parseInt(el));

//     solution(n, data);

//     process.exit();
// });

// 2. 백준 제출을 위한 입출력 코드 (이 문제에서는 안된다고 공지됨)
// const fs = require('fs');
// const n = parseInt(fs.readFileSync('/dev/stdin').toString().trim(), 10);
// const input = fs.readFileSync('/dev/stdin').toString().split('').map(function(n) => {return parseInt(n, 10)});

const n = 2;
const data = [75, 125];
let arrays = [];
let result = [];

function solution(n, data) {
    for (let i = 0; i < n; i++) {
        let array = new Array();

        for (let j = 0; j < data[i]; j++) {
            if (data[i] % j == 0) {
                array.push(j);
            }
        }
        // console.log(array);
        arrays.push(array);
    }
    // console.log(arrays);

    for (let i = 0; i < arrays.length - 1; i++) {
        result = arrays[i].filter((it) => arrays[i + 1].includes(it));
    }
    console.log(result);
}

solution(n, data);