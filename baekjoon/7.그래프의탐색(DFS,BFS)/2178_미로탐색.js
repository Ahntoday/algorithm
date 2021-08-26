const fs = require('fs');
let input = fs.readFileSync("../test.txt").toString().trim().split('\n');
let NM = input.shift().split(' ').map(function (n) {
    return parseInt(n, 10);
})
const N = NM.shift();
const M = NM.shift();
let graph = [];
let visited = [];

function checkRange(nextY, nextX) {
    return nextY >= 0 && nextY < N && nextX >= 0 && nextX < M
}

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

            if (checkRange(nextY, nextX) && graph[nextY][nextX] == 1 && !visited[nextY][nextX]) {
                visited[nextY][nextX] = visited[yPos][xPos] + 1;
                queue.push({ yPos: nextY, xPos: nextX });
            }
        }
    }
}

function solution() {
    for (let i = 0; i < N; i++) {
        graph[i] = input[i].split('').map(Number);
        visited[i] = new Array(M).fill(0);
    }
    bfs(0, 0);
    return visited[N - 1][M - 1];

}

console.log(solution(N, M));