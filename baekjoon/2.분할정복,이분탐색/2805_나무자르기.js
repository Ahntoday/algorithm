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
//     let NM = input.shift().split(' ').map(function (n) {
//         return parseInt(n, 10);
//     });

//     const N = parseInt(NM.shift(), 10); // 나무의 수
//     const M = parseInt(NM.shift(), 10); // 가져가려는 나무 길이

//     input = input.toString().split(' ').map(function (n) {
//         return parseInt(n, 10);
//     });
//     input = input.sort((a, b) => { return a - b });

//     solution(N, M, input);
//     //프로세스 종료 
//     process.exit();
// });

let input = [
    '4 7',
    '20 15 10 17'
]

// let input = [
//     '5 20',
//     '4 42 40 26 46'
// ]

let NM = input.shift().split(' ').map(function (n) {
    return parseInt(n, 10);
});

const N = parseInt(NM.shift(), 10); // 나무의 수
const M = parseInt(NM.shift(), 10); // 가져가려는 나무 길이

input = input.toString().split(' ').map(function (n) {
    return parseInt(n, 10);
});
input = input.sort((a, b) => { return a - b });

function getSum(height, N, input) {
    let sum = 0;
    for (let i = 0; i < N; i++) {
        sum += input[i] - height > 0 ? input[i] - height : 0;
    }
    return sum;
}

function solution(N, M, input) {
    // console.log(input);
    let left = 1;
    let right = input[N - 1];
    let answer = 0;
    while (left <= right) {
        let mid = parseInt((left + right) / 2, 10);
        let slicedSum = getSum(mid, N, input);
        if (slicedSum >= M) {
            answer = Math.max(answer, mid);
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    console.log(answer);
}

solution(N, M, input);