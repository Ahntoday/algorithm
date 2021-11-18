function solution(num) {
    let answer = 0;
    while (num !== 1 && answer !== 500) {
        num = num % 2 === 0 ? parseInt(num / 2, 10) : num * 3 + 1;
        answer += 1;
    }

    return num == 1 ? answer : -1;
}