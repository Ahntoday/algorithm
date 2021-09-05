const fs = require("fs");
let input = fs.readFileSync("../test.txt").toString().split("\n");

let NM = input.shift().split(' ').map(el => parseInt(el, 10));
const N = NM.shift();
const M = NM.shift();
const tree = input[0].split(' ').map(el => parseInt(el, 10));
tree.sort((a, b) => a - b);

const getSum = (height, N, data) => {
    let sum = 0;
    for (let i = 0; i < N; i++) {
        sum += data[i] - height > 0 ? data[i] - height : 0;
    }
    return sum;
}

function solution(N, M, tree) {
    let left = 1;
    let right = tree[N - 1];
    let answer = 0;
    while (left <= right) {
        let mid = parseInt((left + right) / 2, 10);
        let slicedNum = getSum(mid, N, tree);
        if (slicedNum >= M) {
            answer = Math.max(answer, mid);
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return answer;
}

console.log(solution(N, M, tree));