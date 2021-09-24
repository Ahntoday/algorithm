function solution(absolutes, signs) {
    let answer = 123456789;
    let sum = 0;
    for (let i = 0; i < absolutes.length; i++) {
        if (signs[i] === true) {
            sum += absolutes[i];
        }
        else {
            sum -= absolutes[i];
        }
    }
    answer = sum;
    return answer;
}

console.log(solution([4, 7, 12], [true, false, true])); // 9