function solution(a, b) {
    let answer = 0;
    let min = Math.min(a, b);
    let max = Math.max(a, b);
    for (let i = min; i < max + 1; i++) {
        answer += i;
    }
    return answer;
}

console.log(solution(3, 5)); // 12
console.log(solution(5, 3)); // 12