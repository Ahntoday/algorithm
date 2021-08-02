const fs = require('fs');
const input = fs.readFileSync('../test.txt').toString().trim().split('\n');

const white = [
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW'
];

const black = [
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB'
];

function countNotWhite(y, x) { // 행 열
    let count = 0;
    for (let i = y; i < y + 8; i++) {
        for (let j = x; j < x + 8; j++) {
            if (input[i][j] !== white[i - y][j - x]) {
                count += 1;
            }
        }
    }
    return count;
}

function countNotBlack(y, x) {
    let count = 0;
    for (let i = y; i < y + 8; i++) {
        for (let j = x; j < x + 8; j++) {
            if (input[i][j] !== black[i - y][j - x]) {
                count += 1;
            }
        }
    }
    return count;
}

let NM = input.shift().split(' ').map(function (n) {
    return parseInt(n, 10);
});
const N = NM.shift();
const M = NM.shift();

let result = [];
for (let i = 0; i + 7 < N; i++) {
    for (let j = 0; j + 7 < M; j++) {
        result.push(countNotWhite(i, j));
        result.push(countNotBlack(i, j));
    }
}

console.log(Math.min.apply(null, result));