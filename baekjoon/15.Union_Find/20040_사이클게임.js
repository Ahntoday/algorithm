const fs = require('fs');
const input = fs.readFileSync("../test.txt").toString().trim().split('\n');
let [N, M] = input.shift().toString().split(' ').map(Number);

// 부모노드를 찾는 함수
function getParent(parent, x) {
    if (parent[x] === x) return x;
    return parent[x] = getParent(parent, parent[x]);
}

// 두 부모노드를 합치는 함수
function unionParent(parent, a, b) {
    a = getParent(parent, a);
    b = getParent(parent, b);
    if (a < b) parent[b] = a;
    else parent[a] = b;
}

// 같은 부모를 가지는지 확인
function findParent(parent, a, b) {
    a = getParent(parent, a);
    b = getParent(parent, b);
    if (a == b) return 1;
    return 0;
}

function solution(N, M) {
    let parent = [];
    // 자기자신을 부모로 설정
    for (let i = 0; i < N; i++) {
        parent[i] = i;
    }

    for (let i = 0; i < M; i++) {
        let [a, b] = input[i].toString().split(' ').map((el) => parseInt(el, 10));
        if (findParent(parent, a, b)) {
            return i + 1;
        }
        unionParent(parent, a, b);
    }
    return 0;
}

console.log(solution(N, M));