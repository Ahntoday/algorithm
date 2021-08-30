const fs = require("fs");
let input = fs.readFileSync("../test.txt").toString().split("\n");
let MN = input.shift().split(' ').map(el => parseInt(el, 10));
const column = MN.shift(); // 세로
const row = MN.shift(); // 가로
let tomato = Array.from(new Array(row), () => new Array(column).fill(0));
for (let i = 0; i < row; i++) {
    const temp = input[i].split(' ').map(el => parseInt(el, 10));
    tomato[i] = temp; // 익은 토마토 1, 안 익은 토마토 0
}
const ripeTomato = Array.from(new Array(row), () => new Array(column).fill(0));
const moveRow = [0, 0, 1, -1];
const moveCol = [1, -1, 0, 0];
let answer;
const queue = [];
let zero = false;

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
            if (rangeCheck(nextRow, nextCol) && !ripeTomato[nextRow][nextCol] && tomato[nextRow][nextCol] === 0) {
                // 동서남북 중 이동가능하고, 익은 토마토 배열에 안들어가 있고, 원래 안 익은 토마토(0)라면 큐에 추가
                queue.push([nextRow, nextCol]);
                ripeTomato[nextRow][nextCol] = ripeTomato[currentRow][currentCol] + 1;
                answer = ripeTomato[nextRow][nextCol];
            }
        }
        number++;
    }
    answer = answer - 1;
}

for (let r = 0; r < row; r++) {
    for (let c = 0; c < column; c++) {
        if (tomato[r][c] === 1) { // 익은 토마토라면 (토마토가 존재한다면) 큐에 넣는다.
            queue.push([r, c]);
            ripeTomato[r][c] = 1; // 처음부터 익어있으므로 표시
        } else if (tomato[r][c] === -1) {
            ripeTomato[r][c] = -1;
        } else if (tomato[r][c] === 0) { // 익지않은 토마토
            zero = true;
        }
    }
}

if (!zero) { // 처음부터 다 익어져 있다면 0 출력해야함. 하나라도 안 익은 토마토가 있으면 zero를 true로 변경
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