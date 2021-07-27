const fs = require('fs');
const input = fs.readFileSync("../test.txt").toString().trim().split('\n');
const N = parseInt(input.shift(), 10);
const M = parseInt(input.shift(), 10);

// 두 부모노드를 찾는 함수
function getParent(parent, x) {
    if (parent[x] === x) return x;
    return parent[x] = getParent(parent, parent[x]);
}

// 두 부모노드를 합치는 함수
function unionParent(parent, i, j) {
    i = getParent(parent, i);
    j = getParent(parent, j);
    if (i < j) parent[j] = i;
    else parent[i] = j;
}

// 같은 부모를 가지는지 확인
function findParent(parent, i, j) {
    i = getParent(parent, i);
    j = getParent(parent, j);
    if (i == j) return 1;
    return 0;
}

function solution(N, M) {
    let map = []; // 연결 지도
    let parent = []; // 도시 별 최상위 도시

    for (let i = 0; i < N; i++) {
        parent[i] = i;
    }
    for (let i = 1; i <= N; i++) {
        let data = input.shift().toString().split(' ').map(Number);
        for (let j = 1; j <= N; j++) {
            map[i] = data;
            if (map[i][j - 1]) {
                unionParent(parent, i, j);
            }
        }
    }

    let path = input.shift().toString().split(' ').map(Number); // 여행계획
    for (let i = 0; i < M - 1; i++) {
        if (!findParent(parent, path[i], path[i + 1])) {
            return 'NO';
        }
    }
    return 'YES';
}
console.log(solution(N, M));