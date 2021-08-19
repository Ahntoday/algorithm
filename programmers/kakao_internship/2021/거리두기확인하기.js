function validRange(i, j) {
    if (i >= 0 && i < 5 && j >= 0 && j < 5) {
        return true;
    }
    else return false;
}

function solution(places) {
    let answer = [];
    for (let room of places) {
        console.log(room);
        let flag = 0;
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                if (room[i][j] === 'P') {
                    if (validRange(i + 1, j) && room[i + 1][j] == "P")
                        flag = 1;
                    if (validRange(i + 2, j) && room[i + 2][j] == "P" && room[i + 1][j] != "X")
                        flag = 1;
                    if (validRange(i, j + 1) && room[i][j + 1] == "P")
                        flag = 1;
                    if (validRange(i, j + 2) && room[i][j + 2] == "P" && room[i][j + 1] != "X")
                        flag = 1;
                    if (validRange(i + 1, j + 1) && room[i + 1][j + 1] == "P" && (room[i + 1][j] != "X" || room[i][j + 1] != "X"))
                        flag = 1;
                    if (validRange(i + 1, j - 1) && room[i + 1][j - 1] == "P" && (room[i][j - 1] != "X" || room[i + 1][j] != "X"))
                        flag = 1;
                }
            }
        }
        if (flag === 0) {
            answer.push(1);
        }
        else {
            answer.push(0);
        }
    }
    return answer;
}

console.log(solution([["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"], ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"], ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"], ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"], ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"]]));