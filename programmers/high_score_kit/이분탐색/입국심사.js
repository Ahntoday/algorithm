function solution(n, times) { // n명의 심사 걸리는 시간 최솟값 구하기
    times.sort((a, b) => (a - b));
    let left = 1;
    let right = n * times[times.length - 1];
    let answer = right;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2); // 걸리는 시간(초)
        let count = 0;
        times.forEach(time => {
            count += Math.floor(mid / time); // 시간 돌면서 횟수 늘려간다.
            if (count >= n) {
                answer = Math.min(mid, answer); // 걸리는 시간 최솟값으로 업데이트
            }
        });
        if (count >= n) { // 걸리는 시간 더 줄여갈 수 있다.
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
    }
    return answer;
}

console.log(solution(6, [7, 10])); // 28