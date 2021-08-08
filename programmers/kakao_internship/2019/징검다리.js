function isPossible(mid, stones, k) {
    let count = 0; // 몇 개가 연속으로 0 미만이 되었는지

    for (let i = 0; i < stones.length; i++) {
        if (stones[i] < mid) { // stones[i] - mid < 0 인 경우 -> 현재 사람이 지나가기 전에 돌이 0이 되었다.
            count += 1;
        }
        else { // 지나갈 수 있으면 다시 처음부터 0을 세야한다.
            count = 0;
        }
        if (count >= k) {
            return false;
        }
    }
    return true;

}

function solution(stones, k) {
    let answer = 0;

    let left = 1;
    let right = 200000000;
    while (left <= right) {
        let mid = parseInt((left + right) / 2, 10);
        if (isPossible(mid, stones, k)) {
            answer = Math.max(answer, mid);
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return answer;
}

console.log(solution([2, 4, 5, 3, 2, 1, 4, 2, 5, 1], 3));