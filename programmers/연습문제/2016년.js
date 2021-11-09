function solution(a, b) {
    let answer = '';
    const day = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
    const date = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let totalDate = 0;

    for (let i = 0; i < a - 1; i++) {
        totalDate += date[i];
    }
    totalDate += b;
    if (totalDate % 7 - 1 >= 0) {
        answer = day[(totalDate) % 7 - 1];
    }
    else {
        answer = 'THU';
    }

    return answer;
}

console.log(solution(5, 24)); // TUE