function solution(arr, divisor) {
    let answer = [];
    arr.forEach(el => {
        if (el % divisor === 0) {
            answer.push(el);
        }
    })
    if (answer.length === 0) {
        answer = [-1];
    }
    else {
        answer.sort((a, b) => a - b);
    }

    return answer;
}

console.log(solution([5, 9, 7, 10], 5)); // [5, 10]