const fs = require("fs");
let input = fs.readFileSync("../test.txt").toString().split("\n");

let NMK = input.shift().split(' ').map(el => parseInt(el, 10));
const N = NMK.shift();
const M = NMK.shift();
const K = NMK.shift();

let graph = Array.from(new Array(N), () => new Array(M).fill(0));
for (let i = 0; i < K; i++) {
    const [row, col] = input[i].split(' ').map(el => parseInt(el, 10) - 1);
    graph[row][col] = 1;
}

let count = 0;

const dfs = (i, j) => {
    const dx = [1, 0, -1, 0];
    const dy = [0, 1, 0, -1];

    if (rangeCheck(i, j) && graph[i][j] === 1) {
        graph[i][j] = 0; //방문처리 
        count += 1;
        for (let k = 0; k < dx.length; k++) {
            dfs(i + dx[k], j + dy[k]);
        }
    }
}

const rangeCheck = (i, j) => {
    if (i >= 0 && i < N && j >= 0 && j < M) {
        return true;
    } else return false;
}

const solution = () => {
    let trashCnt = [];

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (graph[i][j] === 1) {
                dfs(i, j);
                trashCnt.push(count);
                count = 0;
            }
        }
    }

    trashCnt.sort((a, b) => b - a); //오름차순 정렬 
    return trashCnt[0];
}

console.log(solution());