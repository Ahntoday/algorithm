const getGCD = (a, b) => {
    return a % b === 0 ? b : getGCD(b, a % b);
}

const getLCM = (a, b) => {
    return a * b / getGCD(a, b);
}

function solution(n, m) {
    let answer = [];
    answer.push(getGCD(n, m));
    answer.push(getLCM(n, m));
    return answer;
}

console.log(solution(3, 12));