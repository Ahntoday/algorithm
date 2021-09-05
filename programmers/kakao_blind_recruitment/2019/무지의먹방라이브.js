function solution(food_times, k) {
    let answer = 0;
    const [turn, seconds] = binarySearch(food_times, k);
    const foodAfterTurns = food_times.map((food) => food > turn ? food - turn : 0); // k초 후 남아있는 음식 배열
    let remainSeconds = k - seconds;
    let i = 0;
    for (let count = 0; count < remainSeconds + 1; count++) {
        while (foodAfterTurns[i] === 0) i++
        if (i >= food_times.length) return -1 // 섭취해야할 음식이 없다면
        answer = i;
        i++;
    }
    return answer + 1;
}

const binarySearch = (food_times, k) => {
    let low = 0;
    let high = 1000000000;
    let mid, answer, answerSeconds, seconds;
    while (low <= high) {
        // mid 회전했을 때 k초보다 덜 지났으면 탐색범위를 높은 값으로 좁힘 (더 회전해야함)
        mid = parseInt((low + high) / 2, 10);
        seconds = getPastSeconds(food_times, mid);
        if (seconds <= k) {
            answer = mid;
            answerSeconds = seconds;
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    }
    return [answer, answerSeconds]
}

const getPastSeconds = (food_times, turn) => { // 지금까지 몇 초 분량을 먹었는지
    let seconds = 0;
    food_times.forEach((food) => {
        let second = food >= turn ? turn : food;
        seconds += second;
    })
    return seconds
}

console.log(solution([3, 1, 2], 5));