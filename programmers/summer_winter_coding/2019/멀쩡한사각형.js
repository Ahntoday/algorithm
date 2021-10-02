let getGCD = (a, b) => {
    while (b > 0) {
        let r = a % b;
        a = b;
        b = r;
    }
    return a;
}

function solution(w, h) {
    let answer = 0;
    // 가로 8, 세로 12 => 가로 2, 세로 3으로
    let gcdNum = getGCD(w, h);
    let [smallW, smallH] = [w / gcdNum, h / gcdNum];
    let deletedCount = 0;
    for (let i = 0; i < gcdNum; i++) {
        deletedCount = deletedCount + (smallW + smallH) - 1
    }
    answer = w * h - deletedCount;

    return answer;
}

console.log(solution(8, 12)); // 80