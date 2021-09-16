function solution(rows, columns, queries) {
    let answer = [];
    // 회전하는 숫자들을 담아두고, 가장 작은 애들을 answer에 담는다.
    let rotatedNums = [];
    const board = Array.from(Array(rows + 1), () => new Array(columns + 1).fill(0));
    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= columns; j++) {
            board[i][j] = (i - 1) * columns + j;
        }
    }

    for (let query of queries) {
        let [x1, y1, x2, y2] = query;
        let stack = [];
        // 맨 위 직사각형 고르기 x1 행고정, y1이 y2직전까지 1씩 증가
        for (let i = y1; i < y2; i++) stack.push(board[x1][i]);
        // 오를쪽 직사각형 고르기 y2는 고정, x1이 x2직전까지 1씩 증가
        for (let i = x1; i < x2; i++) stack.push(board[i][y2]);
        // 아래쪽 직사각형 고르기 x2는 고정, y2가 y1직전까지 1씩 감소
        for (let i = y2; i > y1; i--) stack.push(board[x2][i]);
        // 왼쪽 직사각형 고르기 y1는 고정, x2가 x1직전까지 1씩 감소
        for (let i = x2; i > x1; i--) stack.push(board[i][y1]);

        // 정답찾기
        answer.push(Math.min(...stack));
        const temp = stack.pop();
        stack.unshift(temp); // stack 앞에 넣는다.

        for (let i = y1; i < y2; i++) board[x1][i] = stack.shift();
        for (let i = x1; i < x2; i++) board[i][y2] = stack.shift();
        for (let i = y2; i > y1; i--) board[x2][i] = stack.shift();
        for (let i = x2; i > x1; i--) board[i][y1] = stack.shift();
    }
    return answer;
}

console.log(solution(6, 6, [[2, 2, 5, 4], [3, 3, 6, 6], [5, 1, 6, 3]])); // [8, 10, 25]