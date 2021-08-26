const fs = require('fs');
let input = fs.readFileSync("../test.txt").toString().trim().split('\n');
let NMV = input.shift().split(' ').map(function (n) {
    return parseInt(n, 10);
})
const N = NMV.shift();
const M = NMV.shift();
const V = NMV.shift();

let visited = [];
let edge = [];
let answer = [];

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

        for (let i = 0; i < edge[current].length; i++) {
            let next = edge[current][i];
            if (next && !visited[next]) {
                queue.push(next);
                answer.push(next);
                visited[next] = true;
            }
        }
    }
}

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