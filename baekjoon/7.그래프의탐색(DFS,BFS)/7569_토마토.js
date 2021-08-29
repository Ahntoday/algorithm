let fs = require("fs");
let input = fs.readFileSync("../test.txt").toString().split("\n");
input[0] = input[0].split(" ");
const Row = Number(input[0][1]);
const Column = Number(input[0][0]);
const Box = Number(input[0][2]);
input.shift();
input = input.map((element) => element.trim().split(" "));
const tomato = Array.from(new Array(Box), () => new Array());
const queue = []; // 큐 : [ [box, row, column], [box, row, column]]... 큐에는 익은 토마토가 들어갈 예정이다.
const ripeTomato = Array.from(new Array(Box), () =>
    Array.from(new Array(Row), () => new Array(Column).fill(0))
);
const moveBox = [0, 0, 0, 0, -1, 1]; // 동 서 남 북 앞 뒤
const moveRow = [0, 0, 1, -1, 0, 0]; // 동 서 남 북 앞 뒤
const moveCol = [1, -1, 0, 0, 0, 0]; // 동 서 남 북 앞 뒤
let answer;
let zero = false;

for (let b = 0; b < Box; b++) {
    const startIndex = b * Row;
    for (let i = startIndex; i < startIndex + Row; i++) {
        tomato[b].push(input[i]);
    }
}

const rangeCheck = (box, row, col) => {
    if (
        box >= 0 &&
        box < Box &&
        row >= 0 &&
        row < Row &&
        col >= 0 &&
        col < Column
    ) {
        return true;
    }
    return false;
};

const BFS = (queue) => {
    let result;
    let number = 0;
    while (number !== queue.length) {
        const b = queue[number][0];
        const r = queue[number][1];
        const c = queue[number][2];
        // console.log(`b: ${b}, r : ${r}, c: ${c}`);
        for (let d = 0; d < 6; d++) {
            const nextBox = b + moveBox[d];
            const nextRow = r + moveRow[d];
            const nextCol = c + moveCol[d];
            if (
                rangeCheck(nextBox, nextRow, nextCol) &&
                ripeTomato[nextBox][nextRow][nextCol] === 0 &&
                Number(tomato[nextBox][nextRow][nextCol]) === 0
            ) {
                queue.push([nextBox, nextRow, nextCol]);
                ripeTomato[nextBox][nextRow][nextCol] = ripeTomato[b][r][c] + 1;
                result = ripeTomato[nextBox][nextRow][nextCol];
            }
        }
        number++;
    }
    return result - 1;
};

for (let b = 0; b < Box; b++) {
    for (let r = 0; r < Row; r++) {
        for (let c = 0; c < Column; c++) {
            if (Number(tomato[b][r][c]) === 1) {
                queue.push([b, r, c]);
                ripeTomato[b][r][c] = 1;
            }
            if (Number(tomato[b][r][c]) === -1) {
                ripeTomato[b][r][c] = -1;
            }
            if (Number(tomato[b][r][c]) === 0) {
                zero = true;
            }
        }
    }
}

if (!zero) {
    answer = 0;
} else {
    answer = BFS(queue);

    for (let b = 0; b < Box; b++) {
        for (let r = 0; r < Row; r++) {
            for (let c = 0; c < Column; c++) {
                if (ripeTomato[b][r][c] === 0) {
                    answer = -1;
                    break;
                }
            }
        }
    }
}
console.log(answer);