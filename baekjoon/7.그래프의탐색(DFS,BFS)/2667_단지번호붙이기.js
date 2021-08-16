const fs = require('fs');
const input = fs.readFileSync("../test.txt").toString().trim().split('\n');
const N = parseInt(input.shift(), 10);
let graph = Array.from(Array(N), () => new Array(N));
for (let i = 0; i < N; i++) {
    graph[i] = input[i].split('').map((el) => parseInt(el, 10));
}
let count = 0; //단지별 아파트 개수 
let dx = [1, 0, -1, 0];
let dy = [0, 1, 0, -1];

function dfs(i, j) {
    //범위 안에 속하고 방문처리가 되지 않았을때 
    if (rangeCheck(i, j) && graph[i][j] === 1) {
        graph[i][j] = 0; //방문처리 
        count += 1;
        for (let k = 0; k < dx.length; k++) {
            dfs(i + dx[k], j + dy[k]);
        }
    }
};

function rangeCheck(i, j) {
    if (i >= 0 && i < N && j >= 0 && j < N) {
        return true;
    } else return false;
}

function solution() {
    let apartCnt = []; //단지별 아파트 개수

    for (let i = 0; i < N; i++) { //이중그래프 전체 탐색 
        for (let j = 0; j < N; j++) {
            //방문한적 없다면 DFS호출 
            if (graph[i][j] === 1) {
                dfs(i, j); //DFS가 한번 수행되고 나면 하나의 단지 전체 방문처리 완료 
                apartCnt.push(count);
                count = 0;
            }
        }
    }

    console.log(apartCnt.length);
    apartCnt.sort((a, b) => a - b); //오름차순 정렬 
    apartCnt.map((el) => console.log(el)); //map함수로 순회 
};

solution();