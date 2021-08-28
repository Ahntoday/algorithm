const fs = require("fs");
let tomato = fs.readFileSync("../test.txt").toString().split("\n");
tomato = tomato.map(el => el.trim().split(" "));
const row = Number(tomato[0][1]); // 세로: 행
const column = Number(tomato[0][0]); // 가로: 열
tomato.shift();

const ripeTomato = Array.from(new Array(row), () => new Array(column).fill(0));
const moveRow = [0, 0, 1, -1];
const moveCol = [1, -1, 0, 0];
let answer;

const rangeCheck = (r, c) => {
    if (r >= 0 && r < row && c >= 0 && c < column) {
        return true;
    }
    return false;
}

const BFS = (queue) => {
    let number = 0;
    while (number !== queue.length) {
        const currentRow = queue[number][0];
        const currentCol = queue[number][1];
        for (let n = 0; n < 4; n++) {
            const nextRow = currentRow + moveRow[n];
            const nextCol = currentCol + moveCol[n];
            if (rangeCheck(nextRow, nextCol) && !ripeTomato[nextRow][nextCol] && Number(tomato[nextRow][nextCol]) === 0) {
                // 동서남북 중 이동가능하고, 익은 토마토 배열에 안들어가 있고, 원래 안 익은 토마토라면 큐에 추가
                queue.push([nextRow, nextCol]);
                ripeTomato[nextRow][nextCol] = ripeTomato[currentRow][currentCol] + 1;
                answer = ripeTomato[nextRow][nextCol];
            }
        }
        number++;
    }
    answer = answer - 1;
}

const queue = [];
let zero = false;

for (let r = 0; r < row; r++) {
    for (let c = 0; c < column; c++) {
        if (Number(tomato[r][c]) === 1) { // 토마토가 존재한다면 큐에 넣는다.
            queue.push([Number(r), Number(c)]);
            ripeTomato[Number(r)][Number(c)] = 1; // 처음부터 익어있으므로 표시
        } else if (Number(tomato[r][c]) === -1) {
            ripeTomato[Number(r)][Number(c)] = -1;
        } else if (Number(tomato[r][c]) === 0) {
            zero = true;
        }
    }
}

if (!zero) { // 처음부터 다 익어져 있다면 0 출력해야함. 하나라도 안 익은 토마토가 있으면 zero를 false로 변경
    answer = 0;
} else {
    BFS(queue);
    for (let i = 0; i < ripeTomato.length; i++) {
        if (ripeTomato[i].includes(0)) { // BFS를 모두 실행한 후에도 안익은 게 있으면 -1출력
            answer = -1;
            break;
        }
    }
}

// console.log(ripeTomato);
console.log(answer);