function solution(numbers) {
    let answer = -1;
    let sum = 0;
    let defaults = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0; i < defaults.length; i++) {
        if (!numbers.includes(defaults[i])) {
            sum += defaults[i];
        }
    }
    answer = sum;
    return answer;
}

console.log(solution([1, 2, 3, 4, 6, 7, 8, 0])); // 14