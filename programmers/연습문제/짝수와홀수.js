function solution(num) {
    let answer = '';
    if (parseInt(num % 2, 10) === 0) {
        answer = 'Even';
    } else {
        answer = 'Odd';
    }
    return answer;
}

console.log(solution(3)); // Odd