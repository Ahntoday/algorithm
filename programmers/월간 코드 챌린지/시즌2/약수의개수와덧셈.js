const getDivisorCount = (num) => {
    let count = 0;
    for (let i = 1; i < num + 1; i++) {
        if (num % i === 0) {
            count += 1;
        }
    }
    return count;
}

function solution(left, right) {
    let answer = 0;
    for (let i = left; i < right + 1; i++) {
        if (getDivisorCount(i) % 2 === 0) {
            answer += i;
        } else {
            answer -= i;
        }
    }
    return answer;
}

console.log(solution(13, 17)); // 43