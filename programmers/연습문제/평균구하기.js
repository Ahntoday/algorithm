function solution(arr) {
    let answer = 0;
    let sum = 0;
    arr.map(el => sum += el);
    answer = sum / arr.length;
    return answer;
}

console.log(solution([1, 2, 3, 4])); // 2.5