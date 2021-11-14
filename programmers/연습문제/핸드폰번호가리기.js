function solution(phone_number) {
    let answer = '';
    answer = '*'.repeat(phone_number.length - 4) + phone_number.slice(phone_number.length - 4);
    return answer;
}

console.log(solution("01033334444")); // *******4444