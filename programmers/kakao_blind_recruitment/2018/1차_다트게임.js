function solution(dartResult) {
    let answer = 0;
    let result = [];
    let temp = 0;
    for (let i = 0; i < dartResult.length; i++) {
        if (dartResult[i] >= 0 && dartResult[i] <= 9) {
            if (dartResult[i] == 1 && dartResult[i + 1] == 0) {
                temp = 10;
                i++;
            } else {
                temp = dartResult[i];
            }
        }
        else if (dartResult[i] === 'S') {
            result.push(parseInt(temp, 10));
        }
        else if (dartResult[i] === 'D') {
            result.push(Math.pow(parseInt(temp, 10), 2));
        }
        else if (dartResult[i] === 'T') {
            result.push(Math.pow(parseInt(temp, 10), 3));
        }
        else if (dartResult[i] === '*') {
            result[result.length - 1] *= 2;
            result[result.length - 2] *= 2;
        }
        else if (dartResult[i] === '#') {
            result[result.length - 1] *= -1;
        }
    }
    for (let i = 0; i < result.length; i++) {
        answer += result[i];
    }
    return answer;
}

console.log(solution("1S2D*3T"));