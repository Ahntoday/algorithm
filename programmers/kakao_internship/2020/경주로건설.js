function bfs(board) {
    const n = board.length;
    const visit = Array.from(Array(n), () => new Array(n).fill(0));
    const [dx, dy] = [[0, 0, -1, 1], [-1, 1, 0, 0]]; // 상 하 좌 우
    const queue = [[0, 0, 0, 0]]; // x, y, 현재까지 비용, 방향(상하: 0, 좌우: 1)

    while (queue.length) {
        const [x, y, cost, dir] = queue.shift();

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            if (nx < 0 || ny < 0 || nx >= n || ny >= n || board[nx][ny] === 1) continue;

            const direction = i < 2 ? 0 : 1;
            const costByDirection = (dir === direction) || (x === 0 && y === 0) ? 100 : 600;

            if (visit[nx][ny] === 0 || visit[nx][ny] >= cost + costByDirection) {
                visit[nx][ny] = cost + costByDirection;
                queue.push([nx, ny, cost + costByDirection, direction]);
            }
        }
    }

    return visit[n - 1][n - 1];
};

function solution(board) {
    return bfs(board);
}