// 백준 입출력을 위한 코드
// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// let input = [];
let visited = [];
let edge = [];
let answer = [];

// rl.on("line", function (line) { //여러줄 입력 
//     input.push(line);
//     //rl.close()가 없어서 계속입력 
//     //로컬에서 입력을 중지할려면 입력을 한 후 'ctrl + D'을 통해 입력 종료 
// }).on("close", function () {
//     // 이런식으로 적절하게 입력값을 처리해줘야한다. 
//     let NMV = input.shift().split(' ').map(function (n) {
//         return parseInt(n, 10);
//     })
//     let N = NMV.shift();
//     let M = NMV.shift();
//     let V = NMV.shift();

//     solution(N, M, V, input);
//     //프로세스 종료 
//     process.exit();
// });

let input = [
    '4 5 1',
    '1 2',
    '1 3',
    '1 4',
    '2 4',
    '3 4'
];

// let input = [
//     '5 5 3',
//     '5 4',
//     '5 2',
//     '1 2',
//     '3 4',
//     '3 1'
// ];

// let input = [
//     '1000 1 1000',
//     '999 1000'
// ]

function dfs(start) {
    visited[start] = true;
    answer.push(start);

    for (let i = 0; i < edge[start].length; i++) {
        let next = edge[start][i];
        if (next && !visited[next]) {
            dfs(next);
        }
    }
}

function bfs(start) {
    let queue = [];
    visited[start] = true;
    queue.push(start);
    answer.push(start);

    while (queue.length !== 0) {
        let current = queue.shift();

        for (let i = 0; i < edge[start].length; i++) {
            let next = edge[current][i];
            if (next && !visited[next]) {
                queue.push(next);
                answer.push(next);
                visited[next] = true;
            }
        }
    }
}

let NMV = input.shift().split(' ').map(function (n) {
    return parseInt(n, 10);
})
const N = NMV.shift();
const M = NMV.shift();
const V = NMV.shift();

function solution(N, M, V, input) {
    visited = new Array(N + 1).fill(false);
    for (let i = 1; i < N + 1; i++) {
        edge[i] = [];
    }
    for (let i = 0; i < M; i++) {
        let [from, to] = input[i].split(' ').map(function (n) {
            return parseInt(n, 10);
        });
        edge[from].push(to);
        edge[to].push(from);
    };
    edge.forEach((el) => {
        el.sort((a, b) => a - b);
    });

    dfs(V);
    console.log(answer.join(" "));

    visited = new Array(N + 1).fill(false);
    answer = [];

    bfs(V);
    console.log(answer.join(" "));
}

solution(N, M, V, input);