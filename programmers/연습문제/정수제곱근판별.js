function solution(n) {
    let answer = 0;

    if (Number.isInteger(Math.sqrt(n))) {
        answer = Math.pow(Math.sqrt(n) + 1, 2);
    }
    else {
        answer = -1;
    }
    return answer;
}