// 백준 입출력을 위한 코드
// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// let input = [];

let N = 0;
let M = 0;
let graph = [];
let visited = [];

// rl.on("line", (line) => {
//     if (!N) {
//         [N, M] = line.split(" ").map(Number);
//     } else {
//         input.push(line);
//         if (input.length === N) {
//             main();
//             process.exit();
//         }
//     }
// });

// --- 콘솔창에 출력하기 위한 코드 --
let input = [
    '4 6',
    '101111',
    '101010',
    '101011',
    '111011'
];

let NMV = input.shift().split(' ').map(function (n) {
    return parseInt(n, 10);
})
N = NMV.shift();
M = NMV.shift();
// ----- 여기까지 -----

function bfs(yPos, xPos) {
    let dx = [-1, 0, 1, 0];
    let dy = [0, 1, 0, -1];
    let queue = [];
    queue.push({ yPos: yPos, xPos: xPos });

    visited[yPos][xPos] = 1;

    while (queue.length !== 0) {
        let { yPos, xPos } = queue.shift();
        for (let i = 0; i < 4; i++) {
            let nextY = yPos + dy[i];
            let nextX = xPos + dx[i];

            if (nextY >= 0 && nextY < N && nextX >= 0 && nextX < M && graph[nextY][nextX] == 1 && !visited[nextY][nextX]) {
                // console.log(nextY, nextX);
                visited[nextY][nextX] = visited[yPos][xPos] + 1;
                queue.push({ yPos: nextY, xPos: nextX });
            }
        }
    }
}

function main() {
    for (let i = 0; i < N; i++) {
        graph[i] = input[i].split("").map(Number);
        visited[i] = new Array(M).fill(0);
    }
    bfs(0, 0);
    console.log(visited[N - 1][M - 1]);
}

main(); // 콘솔에 출력시 사용