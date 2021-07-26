const fs = require('fs');
const input = fs.readFileSync("../test.txt").toString().trim().split('\n');
const N = parseInt(input.shift(), 10);

function solution(N, input) {
    let time = new Array(N);
    for (let i = 0; i < N; i++) {
        let [start, end] = input[i].toString().trim().split(' ').map(Number);
        time.push([start, end]);
    }

    time.sort(function (a, b) { // 종료시간 기준으로 정렬
        if (a[1] === b[1]) { // 종료시간이 같으면 시작기준으로 정렬한다.
            return a[0] - b[0];
        } return a[1] - b[1];
    });

    let answer = 0;
    let end = 0;
    // let timetable = [];

    time.forEach(e => {
        if (end <= e[0]) { // 현재 시간이 기존 종료 시간보다 뒤에 있다면 현재 시간 회의는 이뤄질 수 있으므로 정답에 추가한다.
            answer += 1;
            // timetable.push([e[0], e[1]]);
            end = e[1];
        }
    });
    // console.log(timetable);
    return answer;
}

console.log(solution(N, input));