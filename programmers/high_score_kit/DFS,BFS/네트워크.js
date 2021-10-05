function solution(n, computers) {
    let answer = 0;
    let visited = new Array(computers.length).fill(false);

    function DFS(index) {
        visited[index] = true; // 방문처리
        for (let i = 0; i < computers.length; i++) {
            if (computers[index][i] === 1 && !visited[i]) { // 연결된 노드고 아직 방문하지 않았다면
                DFS(i);
            }
        }
    }
    for (let i = 0; i < computers.length; i++) {
        if (!visited[i]) {
            DFS(i); // 한번 다 하면 방문처리 완료.
            answer += 1;
        }
    }
    return answer;
}

console.log(solution(3, [[1, 1, 0], [1, 1, 0], [0, 0, 1]])); // 2