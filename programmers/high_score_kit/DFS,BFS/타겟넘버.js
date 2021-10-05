function solution(numbers, target) {
    let answer = 0;
    // 인덱스 1씩 더해가면서, 현재 수를 더하거나 빼는 방식으로 완탐
    function recur(cnt, sum) {
        if (cnt === numbers.length) {
            if (sum === target) {
                answer += 1;
            }
            return;
        }
        recur(cnt + 1, sum + numbers[cnt]);
        recur(cnt + 1, sum - numbers[cnt]);
    }
    recur(0, 0);
    return answer;
}

console.log(solution([1, 1, 1, 1, 1], 3)); // 5