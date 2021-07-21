// 이분탐색 문제
// 배열이 이미 정렬되어 있어야 한다.

// 백준 입출력을 위한 코드
// const readline = require("readline");
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// let input = [];
// rl.on("line", function (line) { //여러줄 입력 
//     input.push(line)
//     //rl.close()가 없어서 계속입력 
//     //로컬에서 입력을 중지할려면 입력을 한 후 'ctrl + D'을 통해 입력 종료 
// }).on("close", function () {
//     // 이런식으로 적절하게 입력값을 처리해줘야한다. 
//     let KN = input.shift().split(' ').map(function (n) {
//         return parseInt(n, 10);
//     });
//     const K = parseInt(KN.shift(), 10);
//     const N = parseInt(KN.shift(), 10);
//     input = input.map(function (n) {
//         return parseInt(n, 10);
//     });
//     input = input.sort((a, b) => { return a - b });

//     solution(K, N, input);
//     //프로세스 종료 
//     process.exit();
// });

let input = [
    '4 11',
    '802',
    '743',
    '457',
    '539'
];

let KN = input.shift().split(' ').map(function (n) {
    return parseInt(n, 10);
});
const K = parseInt(KN.shift(), 10);
const N = parseInt(KN.shift(), 10);
input = input.map(function (n) {
    return parseInt(n, 10);
});
input = input.sort((a, b) => { return a - b });

function countReturn(len, K, input) {
    let count = 0;
    for (let i = 0; i < K; i++) {
        count += parseInt(input[i] / len, 10);
    }
    return count;
}

function solution(K, N, input) {
    let left = 1;
    let right = input[K - 1];

    let answer = 0;
    while (left <= right) {
        let mid = parseInt((left + right) / 2, 10);
        let retCount = countReturn(mid, K, input);
        // console.log(retCount, N);
        // console.log(left, mid, right);
        if (retCount >= N) {
            answer = Math.max(answer, mid);
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    console.log(answer);
}

solution(K, N, input);