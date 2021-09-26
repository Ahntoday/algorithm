function solution(n) {
    let answer = 0;
    let number = n.toString(3);
    let temp = '';
    for (let i = number.length - 1; i >= 0; i--) {
        temp += number[i];
    }
    number = parseInt(temp, 3);
    answer = number;
    return answer;
}

console.log(solution(45)); // 7